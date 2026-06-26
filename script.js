// ========================================
// API
// ========================================

const API_URL = "https://unsightly-cement-army.ngrok-free.dev";


// ========================================
// Character Data
// ========================================

const characters = {
    Kasumi: "kasumi (blue archive), blue hair, blue eyes",
    Ein: "ein (blue archive), black mask",
    Ohr: "ohr (blue archive), blindfold",
    Sof: "sof (blue archive), headphones"
};


// ========================================
// Default Outfits
// ========================================

const defaultOutfits = {
    Kasumi: "school uniform, blue ribbon",
    Ein: "capelet",
    Ohr: "white dress",
    Sof: "hoodie"
};


// ========================================
// Shared Outfits
// ========================================

const outfits = {
    Casual: "hoodie, jeans",
    Winter: "coat, scarf",
    Swimsuit: "swimsuit",
    Kimono: "kimono"
};


// ========================================
// Aspect Ratios
// ========================================

const aspectRatios = {
    Square: {
        width: 512,
        height: 512
    },

    Portrait: {
        width: 512,
        height: 768
    },

    Landscape: {
        width: 768,
        height: 512
    }
};


// ========================================
// Locations
// ========================================

const locations = {
    Park: "park, trees, grass",
    School: "school hallway",
    Cafe: "cafe interior",
    Beach: "beach, ocean"
};


// ========================================
// Times
// ========================================

const times = {
    Morning: "morning, soft sunlight",
    Afternoon: "bright daylight",
    Sunset: "golden hour",
    Night: "moonlight"
};


// ========================================
// Angles
// ========================================

const angles = {
    Front: "front view",
    Side: "side view",
    FullBody: "full body",
    CloseUp: "close up"
};


// ========================================
// Random Prompts
// ========================================

const randomPrompts = [

    "walking through a park",

    "reading a book",

    "watching fireworks",

    "having coffee",

    "looking at the sunset"

];


// ========================================
// UI
// ========================================

function populateDropdowns() {

    const character = document.getElementById("character");
    const outfit = document.getElementById("outfit");
    const aspectRatio = document.getElementById("aspectRatio");
    const location = document.getElementById("location");
    const time = document.getElementById("time");
    const angle = document.getElementById("angle");


    for (const name in characters) {
        character.add(new Option(name, name));
    }

    for (const name in outfits) {
        outfit.add(new Option(name, name));
    }

    for (const name in aspectRatios) {
        aspectRatio.add(new Option(name, name));
    }

    for (const name in locations) {
        location.add(new Option(name, name));
    }

    for (const name in times) {
        time.add(new Option(name, name));
    }

    for (const name in angles) {
        angle.add(new Option(name, name));
    }


    updateCharacter();
    updateOutfit();
    updateLocation();
    updateTime();
    updateAngle();
}

function updateCharacter() {

    const selected = document.getElementById("character").value;

    document.getElementById("characterTags").value =
        characters[selected];

    if (document.getElementById("defaultOutfit").checked) {

        document.getElementById("outfitTags").value =
            defaultOutfits[selected];

    }
}

function updateOutfit() {

    if (document.getElementById("defaultOutfit").checked) {
        return;
    }

    const selected = document.getElementById("outfit").value;

    document.getElementById("outfitTags").value =
        outfits[selected];
}

function updateLocation() {

    const selected = document.getElementById("location").value;

    document.getElementById("locationTags").value =
        locations[selected];
}

function updateTime() {

    const selected = document.getElementById("time").value;

    document.getElementById("timeTags").value =
        times[selected];
}

function updateAngle() {

    const selected = document.getElementById("angle").value;

    document.getElementById("angleTags").value =
        angles[selected];
}

function randomizePrompt() {

    const random =
        Math.floor(Math.random() * randomPrompts.length);

    document.getElementById("prompt").value =
        randomPrompts[random];
}

function buildPrompt() {

    const character = document.getElementById("character").value;
    const outfit = document.getElementById("outfitTags").value;
    const location = document.getElementById("locationTags").value;
    const time = document.getElementById("timeTags").value;
    const angle = document.getElementById("angleTags").value;
    const userPrompt = document.getElementById("prompt").value;

    return `
score_7, score_8, masterpiece,
${characters[character]},
${outfit},
${location},
${time},
${angle},
${userPrompt}
`.trim();

}

function previewPrompt() {
    document.getElementById("fullPromptPreview").innerText =
        buildPrompt();
    document.getElementById("promptModal").hidden = false;
}

function closePromptPreview() {
    document.getElementById("promptModal").hidden = true;
}

document.getElementById("character").onchange = updateCharacter;

document.getElementById("defaultOutfit").onchange = updateCharacter;

document.getElementById("outfit").onchange = updateOutfit;

document.getElementById("location").onchange = updateLocation;

document.getElementById("time").onchange = updateTime;

document.getElementById("angle").onchange = updateAngle;

populateDropdowns();

// ========================================
// Image Generation
// ========================================

async function generateImage() {

    const prompt = buildPrompt();
    const button = document.getElementById("generateButton");
    button.disabled = true;
    button.innerText = "Generating...";

    const { width, height } =
    aspectRatios[
        document.getElementById("aspectRatio").value
    ];

    const response = await fetch(API_URL + "/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt: prompt,
            width: width,
            height: height,
            steps: 20,
            cfg_scale: 1.0
        })
    });

    const data = await response.json();

    const resultResponse = await fetch(API_URL + "/result", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            request_id: data.request_id
        })
    });

    const resultData = await resultResponse.json();

    document.getElementById("result").src = resultData.image_url;
    document.getElementById("result").hidden = false;

    button.disabled = false;
    button.innerText = "Generate";
}