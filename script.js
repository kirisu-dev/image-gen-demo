// ========================================
// API
// ========================================

const API_URL = "https://kasumi-images-api.xyz";


// ========================================
// Character Data
// ========================================

const characters = {
    "------(BLUE ARCHIVE)-----": "",
    "Kasumi (WIFE)": "kasumi (blue archive)",
    "---(ABYDOS)---" : "",
    "Hoshino" : "hoshino (blue archive)",
    "Shiroko" : "shiroko (blue archive), wolf ears",
    "Serika" : "serika (blue archive), cat ears",
    "Ayane" : "ayane (blue archive)",
    "Nonomi" : "nonomi (blue archive)",
    "Shiroko Terror" : "shiroko terror (blue archive), wolf ears",
    "Yume" : "yume (blue archive)",
    "---(ARIUS)---" : "",
    "Saori" : "saori (blue archive)",
    "Atsuko" : "atsuko (blue archive)",
    "Misaki" : "misaki (blue archive)",
    "Hiyori" : "hiyori (blue archive)",
    "---(GEHENNA)---" : "",
    "---(Hot springs development Department)---" : "",
    "Kasumi" : "kasumi (blue archive)",
    "Megu" : "megu (blue archive), demon horns",
    "---(Prefect Team)---" : "",
    "Hina" : "hina (blue archive), horns",
    "Ako" : "ako (blue archive)",
    "Iori" : "iori (blue archive), pointy ears",
    "Chinatsu" : "chinatsu (blue archive), pointy ears",
    "---(Problem Solver 68)---" : "",
    "Aru" : "aru (blue archive), demon horns",
    "Mutsuki" : "mutsuki (blue archive), pointy ears",
    "Kayoko" : "kayoko (blue archive), demon horns",
    "Haruka" : "haruka (blue archive)",
    "---(Pandemonium Society)---" : "",
    "Iroha" : "iroha (blue archive)",
    "Ibuki" : "ibuki (blue archive), demon tail, demon wings",
    "Chiaki" : "chiaki (blue archive), demon horns, pointy ears",
    "Makoto" : "makoto (blue archive), demon horns, pointy ears",
    "Satsuki" : "satsuki (blue archive), horns",
    "---(Twinkle Twinkle Club)---" : "",
    "Kirara" : "kirara (blue archive), horns",
    "Erika" : "erika (blue archive), demon horns, demon tail",
    "---(School Lunch Club)---" : "",
    "Fuuka" : "fuuka (blue archive), horns",
    "Juri" : "juri (blue archive), horns, pointy ears",
    "---(Gourmet Research Society)---" : "",
    "Haruna" : "haruna (blue archive), demon tail, demon wings",
    "Junko" : "junko (blue archive), demon horns, pointy ears, demon wings",
    "Izumi" : "izumi (blue archive), horns",
    "Akari" : "akari (blue archive), demon tail, horns",
    "---(TRINITY)---" : "",
    "---(Tea party)---" : "",
    "Seia" : "seia (blue archive), fox ears, tail",
    "Mika" : "mika (blue archive), angel wings, feathered wings",
    "Nagisa" : "nagisa (blue archive), angel wings, feathered wings",
    "---(After School Sweets club)---" : "",
    "Airi" : "airi (blue archive)",
    "Yoshimi" : "yoshimi (blue archive)",
    "Kazusa" : "kazusa (blue archive), cat ears",
    "Natsu" : "natsu (blue archive)",
    "---(Make-up work club)---" : "",
    "Koharu" : "koharu (blue archive), wings, feathered wings",
    "Hanako" : "hanako (blue archive)",
    "Hifumi" : "hifumi (blue archive)",
    "Azusa" : "azusa (blue archive), feathered wings",
    "---(Justice Task Force)---" : "",
    "Tsurugi" : "tsurugi (blue archive), feathered wings",
    "Hasumi" : "hasumi (blue archive), feathered wings",
    "Mashiro" : "mashiro (blue archive), feathered wings",
    "Ichika" : "ichika (blue archive), feathered wings",
    "---(Remedial Knights)---" : "",
    "Mine" : "mine (blue archive), pointy ears",
    "Serina" : "serina (blue archive)",
    "Hanae" : "hanae (blue archive)",
    "---(Sisterhood)---" : "",
    "Sakurako" : "sakurako (blue archive)",
    "Mari" : "mari (blue archive), animal ears",
    "Hinata" : "hinata (blue archive)",
    "---(Library Committee)---" : "",
    "Ui" : "ui (blue archive)",
    "Shimiko" : "shimiko (blue archive)",
    "---(Trinity's Vigilante Crew)---" : "",
    "Suzumi" : "suzumi (blue archive)",
    "Reisa" : "reisa (blue archive)",
    "---(MILLENIUM)---" : "",
    "---(Seminar)---" : "",
    "Rio" : "rio (blue archive)",
    "Noa" : "noa (blue archive)",
    "Yuuka" : "yuuka (blue archive)",
    "Koyuki" : "koyuki (blue archive)",
    "---(Game Development Department)---" : "",
    "Yuzu" : "yuzu (blue archive)",
    "Momoi" : "momoi (blue archive), cat ears, cat tail",
    "Midori" : "midori (blue archive), cat ears, cat tail",
    "Aris" : "aris (blue archive)",
    "---(C&C)---" : "",
    "Neru" : "neru (blue archive)",
    "Toki" : "toki (blue archive)",
    "Asuna" : "asuna (blue archive)",
    "Karin" : "karin (blue archive)",
    "Akane" : "akane (blue archive)",
    "---(Super Phenomenon Task Force)---" : "",
    "Himari" : "himari (blue archive), pointy ears",
    "Eimi" : "eimi (blue archive)",
    "---(Engineering Department)---" : "",
    "Utaha" : "white coat, collared shirt, skirt",
    "Hibiki" : "white jacket, shirt, shorts",
    "Kotori" : "black coat, collared shirt, skirt",
    "---(Veritas)---" : "",
    "Chihiro" : "chihiro (blue archive)",
    "Hare" : "hare (blue archive)",
    "Kotama" : "kotama (blue archive)",
    "Maki" : "maki (blue archive)",
    "---(Athletics Training Club)---" : "",
    "Sumire" : "sumire (blue archive)",
    "Rei" : "rei (blue archive)",
    "---(HYAKKIYAKO)---" : "",
    "---(Yin Yang Club)---" : "",
    "Niya" : "niya (blue archive), horns",
    "Kaho" : "kaho (blue archive), fox ears",
    "Chise" : "chise (blue archive), horns",
    "---(Hyakkaryouran)---" : "",
    "Nagusa" : "nagusa (blue archive)",
    "Renge" : "renge (blue archive), dragon tail, horns",
    "Kikyou" : "kikyou (blue archive), cat ears, cat tail",
    "Yukari" : "yukari (blue archive)",
    "---(Inner discipline club)---" : "",
    "Tsubaki" : "tsubaki (blue archive), raccoon ears",
    "Mimori" : "mimori (blue archive)",
    "Kaede" : "kaede (blue archive), animal ears",
    "---(Ninjutsu Research Club)---" : "",
    "Michiru" : "michiru (blue archive), raccoon ears, raccoon tail",
    "Izuna" : "izuna (blue archive), fox ears, fox tail",
    "Tsukuyo" : "tsukuyo (blue archive), rabbit ears",
    "---(Festival operations department)---" : "",
    "Shizuko" : "shizuko (blue archive)",
    "Pina" : "pina (blue archive)",
    "Umika" : "umika (blue archive), dog ears",
    "---(Others)---" : "",
    "Shuro" : "shuro (blue archive), pointy ears",
    "Wakamo" : "wakamo (blue archive), fox ears, fox tail",
    "---(HIGHLANDER)---" : "",
    "Hikari" : "hikari (blue archive), demon tail, pointy ears",
    "Nozomi" : "nozomi (blue archive), demon tail, pointy ears",
    "Aoba" : "aoba (blue archive)",
    "---(VALKYRIE POLICE SCHOOL)---" : "",
    "Kanna" : "kanna (blue archive), dog ears",
    "Konoka" : "konoka (blue archive)",
    "Kirino" : "kirino (blue archive)",
    "Fubuki" : "fubuki (blue archive)",
    "---(SRT ACADEMY)---" : "",
    "---(Rabbit Squad)---" : "",
    "Miyako" : "miyako (blue archive), rabbit ears",
    "Miyu" : "miyu (blue archive), rabbit ears",
    "Saki" : "saki (blue archive), animal ears",
    "Moe" : "moe (blue archive), rabbit ears",
    "---(FOX Squad)---" : "",
    "Yukino" : "yukino (blue archive), fox ears",
    "Niko" : "niko (blue archive), fox ears",
    "Kurumi" : "kurumi (blue archive), fox ears",
    "Otogi" : "otogi (blue archive), fox ears",
    "---(SHANHAIJING)---" : "",
    "---(Genryumon)---" : "",
    "Kisaki" : "kisaki (blue archive)",
    "Mina" : "mina (blue archive)",
    "---(Black Tortoise Promenade)---" : "",
    "Rumi" : "rumi (blue archive), animal ears",
    "Reijo" : "reijo (blue archive)",
    "---(Plum Blossom Garden)---" : "",
    "Shun" : "shun (blue archive), tiger ears",
    "Kokona" : "kokona (blue archive), animal ears",
    "---(RED WINTER)---" : "",
    "---(Red Winter Office)---" : "",
    "Cherino" : "cherino (blue archive)",
    "Tomoe" : "tomoe (blue archive)",
    "Marina" : "marina (blue archive)",
    "---(Spec Ops No. 227)---" : "",
    "Nodoka" : "nodoka (blue archive)",
    "Shigure" : "shigure (blue archive), weasel ears, weasel tail",
    "---(Publishing department)---" : "",
    "Yakumo" : "yakumo (blue archive), animal ears, tail",
    "Takane" : "takane (blue archive)",
    "---(Knowledge Liberation Front)---" : "",
    "Momiji" : "momiji (blue archive)",
    "Meru" : "meru (blue archive)",
    "Minori" : "minori (blue archive)",
    "---(WILDHUNT ART ACADEMY)---" : "",
    "---(Occult Investigation Society)---" : "",
    "Tsumugi" : "tsumugi (blue archive)",
    "Kanoe" : "kanoe (blue archive)",
    "Eri" : "eri (blue archive)",
    "Rena" : "rena (blue archive)",
    "---(Free Trade Cartel)---" : "",
    "Miyo" : "miyo (blue archive)",
    "Fuyu" : "fuyu (blue archive)",
    "Ritsu" : "ritsu (blue archive)",
    "---(GENERAL STUDENT COUNCIL)---" : "",
    "General Student Council President" : "general student council president (blue archive)",
    "Rin" : "rin (blue archive), pointy ears",
    "Momoka" : "momoka (blue archive), demon horns, demon tail, pointy ears",
    "Kaya" : "kaya (blue archive)",
    "Ayumu" : "ayumu (blue archive), feathered wings",
    "Sumomo" : "sumomo (blue archive), demon horns, demon tail, pointy ears",
    "Haine" : "haine (blue archive)",
    "---(SCHALE)---" : "",
    "Arona" : "arona (blue archive)",
    "Plana" : "plana (blue archive)",
    "Sora" : "sora (blue archive), angel wings, feathered wings",
    "---(DECAGRAMMATON)---" : "",
    "Ein": "ein (blue archive), black mask",
    "Ohr": "ohr (blue archive), blindfold",
    "Sof": "sof (blue archive), headphones"
};


// ========================================
// Default Outfits
// ========================================

const defaultOutfits = {
    "Kasumi (WIFE)": "white wedding dress, bridal veil",
    "Kasumi": "red shirt, white coat, black shorts",
    "Megu" : "goggles, shirt, thighhighs",

    "Hoshino" : "black plaid skirt, white collared shirt, blue necktie",
    "Shiroko" : "black pleated skirt, open dark blue jacket, blue scarf",
    "Serika" : "school uniform, necktie, asymmetrical legwear",
    "Ayane" : "blue blazer, yellow sweater vest, grey pleated miniskirt",
    "Nonomi" : "yellow cardigan, white shirt, plaid skirt",
    "Shiroko Terror" : "black dress, black choker, black gloves",
    "Yume" : "black skirt, aqua necktie, black gloves",

    "Saori" : "baseball cap, crop top, pants",
    "Atsuko" : "hooded jacket, dress, kneehighs",
    "Misaki" : "hoodie, coat, pants",
    "Hiyori" : "newsboy cap, sweater, skirt",

    "Hina" : "fur-trimmed coat, military uniform, skirt",
    "Ako" : "blue jacket, white shirt, skirt",
    "Iori" : "necktie, black skirt, kneehighs",
    "Chinatsu" : "glasses, collared shirt, skirt",

    "Aru" : "brown jacket, collared shirt, skirt",
    "Mutsuki" : "black jacket, white shirt, skirt",
    "Kayoko" : "black sweater, shirt, skirt",
    "Haruka" : "black jacket, skirt, boots",

    "Iroha" : "military hat, coat, boots",
    "Ibuki" : "military hat, collared shirt, dress",
    "Chiaki" : "black jacket, black shirt, skirt",
    "Makoto" : "peaked cap, coat, skirt",
    "Satsuki" : "grey jacket, necktie, skirt",

    "Haruna" : "peaked cap, collared shirt, skirt",
    "Junko" : "necktie, skirt, boots",
    "Izumi" : "coat, collared shirt, skirt",
    "Akari" : "black dress, thighhighs, pumps",

    "Seia" : "sailor collar, sleeveless dress, pantyhose",
    "Mika" : "capelet, turtleneck, dress",
    "Nagisa" : "sailor collar, serafuku, pantyhose",

    "Airi" : "sailor collar, serafuku, skirt",
    "Yoshimi" : "hooded jacket, track jacket, thighhighs",
    "Kazusa" : "black jacket, serafuku, skirt",
    "Natsu" : "white cardigan, serafuku, skirt",

    "Koharu" : "beret, serafuku, skirt",
    "Hanako" : "sailor collar, serafuku, skirt",
    "Hifumi" : "white cardigan, serafuku, skirt",
    "Azusa" : "black dress, shirt, socks",

    "Tsurugi" : "black serafuku, shirt, skirt",
    "Hasumi" : "black serafuku, shirt, skirt",
    "Mashiro" : "black serafuku, shirt, skirt",
    "Ichika" : "black serafuku, shirt, skirt",

    "Mine" : "nurse cap, gloves, pantyhose",
    "Serina" : "nurse cap, shirt, skirt",
    "Hanae" : "pink jacket, dress, thighhighs",

    "Sakurako" : "black dress, thighhighs, boots",
    "Mari" : "sailor collar, long skirt, socks",
    "Hinata" : "black dress, turtleneck, thighhighs",

    "Rio" : "black jacket, turtleneck sweater, skirt",
    "Noa" : "white jacket, collared shirt, skirt",
    "Yuuka" : "black jacket, collared shirt, skirt",
    "Koyuki" : "white jacket, necktie, skirt",

    "Yuzu" : "white coat, slippers, hooded coat",
    "Momoi" : "coat, collared shirt, skirt",
    "Midori" : "coat, collared shirt, shorts",
    "Aris" : "jacket, necktie, boots",

    "Neru" : "sukajan, collared shirt, skirt",
    "Toki" : "maid apron, skirt, boots",
    "Asuna" : "maid headdress, dress, thighhighs",
    "Karin" : "maid headdress, dress, pantyhose",
    "Akane" : "maid headdress, dress, pantyhose",

    "Himari" : "white jacket, robe, loafers",
    "Eimi" : "black jacket, dress shirt, skirt",

    "Utaha" : "white coat, collared shirt, skirt",
    "Hibiki" : "white jacket, shirt, shorts",
    "Kotori" : "black coat, collared shirt, skirt",

    "Chihiro" : "jacket, sweater vest, skirt",
    "Hare" : "white coat, dress, shoes",
    "Kotama" : "black coat, collared dress, boots",
    "Maki" : "black jacket, collared shirt, skirt",

    "Niya" : "sideless kimono, pleated skirt, okobo",
    "Kaho" : "sideless kimono, hakama, sandals",
    "Chise" : "short kimono, sailor collar, sandals",

    "Nagusa" : "haori, serafuku, okobo",
    "Renge" : "sideless shirt, shorts, skirt",
    "Kikyou" : "blue haori, serafuku, skirt",
    "Yukari" : "haori, shirt, skirt",

    "Tsubaki" : "red sailor collar, skirt, gloves",
    "Mimori" : "red hakama, serafuku, tabi",
    "Kaede" : "red hakama, sleeveless kimono, thighhighs",

    "Michiru" : "scarf, school uniform, twintails",
    "Izuna" : "pink kimono, serafuku, thighhighs",
    "Tsukuyo" : "cardigan, serafuku, skirt",

    "Shizuko" : "frilled apron, short kimono, thighhighs",
    "Pina" : "short kimono, skirt, sandals",
    "Umika" : "white apron, ribbon, tabi",

    "Shuro" : "grey jacket, short kimono, sandals",
    "Wakamo" : "black kimono, thighhighs, boots",

    "Hikari" : "blue jacket, military uniform, skirt",
    "Nozomi" : "blue jacket, military uniform, shorts",
    "Aoba" : "blue hat, jacket, skirt",

    "Kanna" : "black jacket, necktie, skirt",
    "Konoka" : "grey jacket, hawaiian shirt, skirt",
    "Kirino" : "school uniform, skirt, boots",
    "Fubuki" : "white jacket, police uniform, pantyhose",

    "Miyako" : "tactical school uniform, serafuku, boots",
    "Miyu" : "blue serafuku, skirt, pantyhose",
    "Saki" : "tactical school uniform, serafuku, skirt",
    "Moe" : "cropped sweater, school uniform, pantyhose",

    "Yukino" : "school uniform, thighhighs, shoes",
    "Niko" : "tactical school uniform, school uniform, loafers",
    "Kurumi" : "serafuku, shirt, skirt",
    "Otogi" : "tactical school uniform, shorts, boots",

    "Kisaki" : "grey coat, china dress, twintails",
    "Mina" : "coat, bodysuit, pants",

    "Rumi" : "red jacket, white shirt, skirt",
    "Reijo" : "black jacket, floral print dress, kneehighs",

    "Shun" : "black coat, sleeveless dress, shoes",
    "Kokona" : "black jacket, china dress, skirt",

    "Cherino" : "white coat, collared shirt, shorts",
    "Tomoe" : "hat, school uniform, pantyhose",
    "Marina" : "white jacket, military uniform, pants",

    "Nodoka" : "fur-trimmed coat, sweater, skirt",
    "Shigure" : "grey jacket, coat, pantyhose",

    "Momiji" : "fur-trimmed coat, coat dress, boots",
    "Meru" : "fur-trimmed coat, bag, loafers",
    "Minori" : "coat, leggings, skirt",

    "Yakumo" : "brown jacket, newsboy cap, bag",
    "Takane" : "dress, hairband, mary janes",

    "Tsumugi" : "grey cardigan, school uniform, mary janes",
    "Kanoe" : "grey dress, shirt, pantyhose",
    "Eri" : "black jacket, collared shirt, skirt",
    "Rena" : "yellow jacket, puffy sleeves, skirt",

    "Miyo" : "green jacket, white shirt, skirt",
    "Fuyu" : "blue jacket, shirt, skirt",
    "Ritsu" : "grey jacket, collared shirt, skirt",

    "General Student Council President" : "white jacket, white dress, shoulder strap",
    "Rin" : "white coat, uniform, pantyhose",
    "Momoka" : "jacket, necktie, sneakers",
    "Kaya" : "white jacket, collared jacket, skirt",
    "Ayumu" : "white dress, necktie, high heels",
    "Sumomo" : "jacket, school uniform, bike shorts",
    "Haine" : "suit, collared shirt, pants",

    "Arona" : "blue shirt, serafuku, skirt",
    "Plana" : "black jacket, serafuku, skirt",
    "Sora" : "apron, bowtie, sneakers",
    
    "Kirara" : "black hairband, shirt, skirt",
    "Erika" : "black jacket, collared shirt, skirt",

    "Fuuka" : "frilled apron, dress, headscarf",
    "Juri" : "blue jacket, apron, skirt",

    "Ui" : "brown cardigan, sailor collar, skirt",
    "Shimiko" : "white jacket, sailor collar, skirt",

    "Suzumi" : "grey skirt, thighhighs, brown shoes",
    "Reisa" : "grey serafuku, skirt, socks",

    "Sumire" : "sports bra, leggings, sneakers",
    "Rei" : "white hoodie, jacket, kneehighs",

    "Ein": "capelet",
    "Ohr": "white dress",
    "Sof": "hoodie",
};


// ========================================
// Shared Outfits
// ========================================

const outfits = {
    Uniform : "serafuku, pleated skirt, neckerchief, sailor collar",
    Cheerleader : "cheerleader, sleeveless, crop top, pleated miniskirt",
    Suit : "collared shirt, suit jacket",
    Maid : "maid, frills, skirt, maid headdress, maid apron",
    "Shrine maiden" : "miko, kimono, hakama skirt",
    Nun : "nun, nun headdress",
    Pajama : "pajamas, long-sleeves, shirt, pants",
    "Track suit" : "track suit, track jacket, track pants",
    Kimono : "kimono, sash, obi, tasuki",
    "Kimono (short)" : "short kimono, kimono skirt, obi, sash",
    "Bunny suit" : "playboy bunny, black strapless leotard, fake rabbit ears, bowtie, fishnets",
    "-----(CASUALS)-----" : "hoodie, jeans",
    Casual: "hoodie, jeans",
    "Urban casual" : "casual, jacket, short shorts, sneakers, thighhighs",
    "Retro casual" : "blue jacket, casual, orange-tinted eyewear, striped shirt, white shirt",
    "Sporty casual" : "belt bag, casual, green skirt, long sleeves, parka",
    "Summer casual" : "casual, midriff, pleated skirt, sun hat, white skirt",
    "Comfy casual" : "black sweater, blue pants, casual, jeans, sleeves past wrists",
    "Athletic casual" : "casual, off-shoulder shirt, bra, striped shirt, yellow shirt",
    "Chic casual" : "black skirt, casual, dress, flat cap, ribbon",
    "-----(SWIMSUIT)-----" : "bikini",
    Frilled : "frilled bikini",
    Off_shoulder : "off-shoulder bikini",
    Sailor : "sailor bikini",
    Shorts : "bikini shorts",
    Skirt : "bikini skirt",
    Strapless : "strapless bikini",
    Micro : "micro bikini",
    Winter: "coat, scarf",
    None : "naked, pussy, nipples"
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
    "-----(OUTDOORS)-----" : "outdoors",
    "Forest" : "forest, trees",
    "Park": "park, bench",
    "Field" : "flower field",
    "Beach" : "beach, ocean",
    "Pool" : "poolside",
    "School": "school hallway",
    "Cafe": "cafe interior",
    "Beach": "beach, ocean",
    "-----(INDOORS)-----" : "indoors",
    "Bedroom" : "bedroom",
    "Bathroom" : "bathroom",
    "Classroom" : "classroom",
    "Changing room" : "changing room",
    "Hot spring" : "onsen",
    "Dungeon" : "dungeon",
    "Living room" : "living room",
    "Library" : "library",
    "Cafe" : "cafe",
    "Restaurant" : "restaurant"
};


// ========================================
// Times
// ========================================

const times = {
    Day : "day",
    "Dawn (before sunrise)" : "dawn",
    Sunrise : "sunrise",
    Morning: "morning",
    Sunset: "sunset",
    "Dusk (after sunset)": "dusk",
    Afternoon : "evening",
    Night: "night"
};


// ========================================
// Angles
// ========================================

const angles = {
    Front: "straight-on",
    Above : "from above",
    Below : "from below",
    Behind : "from behind",
    Side : "from side",
    Tilted: "dutch angle",
    Sideways : "sideways",
    "Upside down" : "upside-down"
};

// ========================================
// Body framing
// ========================================

const frames = {
    "Head to shoulder": "portrait",
    "Head to torso" : "upper body",
    "Head to thighs" : "cowboy shot",
    "Head to knee" : "feet out of frame",
    "Full body" : "full body"
};



// ========================================
// Random Prompts
// ========================================

const randomPrompts = {
    "Forest": [
        "She wanders through the forest, her eyes wide with wonder as she reaches out to touch the rough bark of an ancient oak.",
        "Kneeling beside a mossy log, she examines a cluster of tiny mushrooms with a soft, curious smile.",
        "She pauses on the trail, tilting her head upward to catch a ray of golden sunlight, a peaceful expression on her face.",
        "Gently she brushes her fingers over a patch of wild violets, her gaze thoughtful and serene.",
        "She sits on a fallen tree, hugging her knees, and listens intently to the distant call of a cuckoo, her lips parted in quiet awe.",
        "With a small basket in hand, she picks blackberries, her cheeks flushed with excitement as she pops one into her mouth."
    ],
    "Park": [
        "She strolls along the winding path, her face bright with a gentle smile as she watches a squirrel scamper up a tree.",
        "Settling onto a wooden bench, she opens a worn novel, her brow furrowing slightly in concentration at the opening lines.",
        "She tosses crumbs to a flock of pigeons, laughing softly as they flutter around her feet.",
        "Lying on the grass, she stares up at the drifting clouds, her expression dreamy and content.",
        "She leans against a lamppost, sipping from a water bottle, her gaze distant as she people-watches with mild amusement.",
        "With a single rose in her hand, she offers it to a passing child, her eyes crinkling with kindness."
    ],
    "Field": [
        "She wades through the tall grass, her hand brushing the tops of wildflowers, a carefree grin spreading across her face.",
        "Kneeling down, she gently cups a daisy, examining its petals with an expression of tender fascination.",
        "She sprawls on her back among the blooms, staring at the endless blue sky, her face relaxed and peaceful.",
        "She twirls slowly, arms outstretched, letting the breeze ruffle her hair, her laugh echoing across the meadow.",
        "Bending low, she picks a handful of lavender and brings it to her nose, closing her eyes with a blissful sigh.",
        "She sits cross-legged, weaving a crown of buttercups, her tongue peeking out in concentration as she works."
    ],
    "Beach": [
        "She walks barefoot along the shoreline, letting the waves lap at her ankles, her face lifted to the salty breeze with a serene smile.",
        "Kneeling in the wet sand, she builds a small castle, her brow furrowed in playful determination.",
        "She stands at the water's edge, shielding her eyes with one hand as she gazes at the horizon, a look of quiet longing in her eyes.",
        "She picks up a smooth, white shell, turning it over in her palm with a curious, almost reverent expression.",
        "Sitting on a driftwood log, she writes her name in the sand with a stick, her lips pursed in thought.",
        "She dips her toes into a tide pool, giggling as tiny crabs scuttle away, her eyes sparkling with mischief."
    ],
    "Pool": [
        "She glides through the water with smooth strokes, her face calm and focused, occasionally turning to breathe with a soft gasp.",
        "Perched on the pool's edge, she dips her feet in, her toes wiggling as she watches the ripples, a lazy smile on her lips.",
        "She floats on her back, eyes closed, arms spread wide, her expression utterly relaxed and lost in the moment.",
        "She splashes water playfully toward a friend, her face scrunched up in a mischievous grin.",
        "Clutching a colorful pool noodle, she kicks her legs, her gaze fixed on the diving board with a hint of nervous excitement.",
        "She emerges from the water, pushing her wet hair back, her face radiant with exhilaration and a wide, open-mouthed laugh."
    ],
    "School": [
        "She hurries down the hallway, hugging a stack of books to her chest, her expression flustered and slightly panicked as she checks her watch.",
        "Leaning against a locker, she fiddles with her backpack strap, her gaze downcast and thoughtful, a faint frown on her lips.",
        "She stops by the bulletin board, scanning the posted announcements with a puzzled tilt of her head.",
        "She walks slowly, her shoes squeaking on the polished floor, her face blank with exhaustion after a long day.",
        "She exchanges a quick smile with a passing friend, her eyes lighting up briefly before she continues on her way.",
        "She ducks into an empty corridor, pulling out her phone to text, her expression a mix of hope and anxiety."
    ],
    "Cafe": [
        "She cradles a steaming mug of coffee, her fingers warming against the ceramic, a sleepy, contented smile tugging at her lips.",
        "She stirs her latte slowly, watching the swirl of foam, her gaze distant and pensive.",
        "She takes a delicate bite of a croissant, her eyes fluttering shut in a moment of pure, indulgent pleasure.",
        "She leans back in her chair, scrolling through her phone, her brow furrowed in concentration as she reads something important.",
        "She doodles on a napkin with a pen, her tongue poking out slightly, her expression absorbed and creative.",
        "She glances out the window at the passing rain, her face softening with a wistful, introspective look."
    ],
    "Bedroom": [
        "She lies sprawled across her bed, staring at the ceiling, her hands clasped behind her head, a lazy, half-asleep expression on her face.",
        "She sits at her desk, chin resting on her palm, gaze fixed on a framed photo, her eyes glistening with nostalgia.",
        "She pulls open her curtain, letting morning light flood in, squinting with a small, sleepy smile.",
        "She hugs a plush toy tightly, burying her face in it, her shoulders shaking with silent laughter.",
        "She kneels by her bookshelf, tracing the spines of her favorite novels, her expression tender and reverent.",
        "She stands before her mirror, adjusting her hair, her face a mask of concentration as she tries to perfect a messy bun."
    ],
    "Bathroom": [
        "She leans over the sink, splashing cold water on her face, her eyes squeezed shut, then looks up with a refreshed, relieved sigh.",
        "She brushes her teeth slowly, staring at her reflection, her expression blank and sleepy, foam gathering at the corner of her mouth.",
        "She sits on the edge of the tub, holding a bath bomb, sniffing it with a delighted, curious grin.",
        "She reaches for a towel from the rack, her face weary as she dries her hands, a yawn escaping her lips.",
        "She examines her complexion in the magnifying mirror, her brow furrowed with mild concern over a tiny blemish.",
        "She sprays a spritz of perfume, turning her head to catch the scent, a pleased, subtle smile blooming on her face."
    ],
    "Classroom": [
        "She sits at her desk, scribbling notes furiously, her tongue peeking out in concentration as the teacher drones on.",
        "She rests her chin on her hand, staring out the window at the swaying trees, her expression dreamy and distracted.",
        "She raises her hand eagerly, her face alight with excitement as she knows the answer, her eyes bright.",
        "She slumps in her chair, tapping her pencil nervously, her gaze flickering to the clock with anxious anticipation.",
        "She passes a folded note to a neighbor, a mischievous smirk playing on her lips.",
        "She packs her bag slowly, avoiding eye contact with the teacher, her expression sheepish and guilty."
    ],
    "Changing room": [
        "She holds a dress against her body, turning to the mirror, her head tilted critically as she assesses the fit.",
        "She struggles with a zipper on the back of her top, her face twisted in frustration as she twists and reaches.",
        "She kicks off her shoes and sighs with relief, rubbing her sore feet, her expression softening with comfort.",
        "She peers over the curtain, checking if anyone is nearby, her eyes wide with a playful, sneaky look.",
        "She smooths down her skirt, examining her reflection with a final, approving nod and a confident smile.",
        "She holds up two different scarves, comparing them with a pursed, thoughtful expression."
    ],
    "Hot spring": [
        "She sinks into the steaming water up to her shoulders, letting out a long, contented sigh, her face flushed and relaxed.",
        "She folds a towel on her head, closing her eyes, a peaceful, almost meditative smile on her lips.",
        "She scoops up a handful of water and lets it trickle through her fingers, her gaze soft and contemplative.",
        "She leans her head back against a smooth rock, her expression melting into one of pure bliss.",
        "She gently swirls the water around her, watching the steam rise, her eyes half-lidded with drowsy pleasure.",
        "She reaches for a cup of sake on the edge, taking a sip with a satisfied, warm grin."
    ],
    "Dungeon": [
        "She presses her back against the cold stone wall, her eyes darting nervously into the darkness, her breath shallow and quick.",
        "She runs her fingers along a rusty chain, her face grimacing at the gritty texture, a mix of fear and curiosity in her eyes.",
        "She crouches low, studying a pile of bones with a horrified but fascinated expression, her hand covering her mouth.",
        "She holds a flickering torch aloft, its light casting dancing shadows on her determined, set jaw.",
        "She tugs at a locked iron door, her brow sweating with effort, a frustrated groan escaping her lips.",
        "She whispers a quiet prayer under her breath, her hands clasped together, her face pale but resolute."
    ],
    "Living room": [
        "She curls up on the sofa with a fluffy blanket, remote in hand, her face glowing with the light of the TV, a lazy smile on her lips.",
        "She sits cross-legged on the floor, sorting through a box of old photographs, her expression nostalgic and soft.",
        "She stretches her arms above her head with a yawn, her eyes crinkling with sleepy contentment.",
        "She places a fresh vase of flowers on the coffee table, stepping back to admire them with a satisfied, proud smile.",
        "She rifles through a stack of magazines, her brow furrowed as she searches for a specific article.",
        "She pets a sleeping cat on her lap, her gaze tender and loving, her fingers gently stroking its fur."
    ],
    "Library": [
        "She tiptoes between the tall shelves, her fingers trailing along the spines of books, her eyes scanning titles with quiet intensity.",
        "She pulls out a heavy tome, blowing dust off its cover, her face lighting up with a gleam of discovery.",
        "She settles into a plush armchair, opening a book with a soft crackle, her expression immediately absorbed and peaceful.",
        "She peers over her reading glasses, glancing up from her page to watch a fellow patron, a faint smirk on her lips.",
        "She leans against a pillar, jotting notes in a small journal, her brow furrowed in deep thought.",
        "She carefully returns a book to its shelf, using a small step stool, her face focused and meticulous."
    ],
    "Restaurant": [
        "She peruses the menu, her index finger tracing the options, a thoughtful pout on her lips as she decides.",
        "She twirls a strand of pasta around her fork, bringing it to her mouth with a satisfied, playful smile.",
        "She takes a sip of red wine, swirling it in the glass, her expression refined and appreciative.",
        "She whispers to her companion across the table, her eyes sparkling with a shared secret, a mischievous grin.",
        "She forks a piece of dessert, closing her eyes in bliss as the chocolate melts on her tongue.",
        "She signals the waiter with a polite, composed nod, her demeanor calm and courteous."
    ]
};

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
    const frame = document.getElementById("frame");


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

    for (const name in frames) {
        frame.add(new Option(name, name));
    }


    updateCharacter();
    updateOutfit();
    updateLocation();
    updateTime();
    updateAngle();updateFrame();
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
    randomizePrompt()
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

function updateFrame() {

    const selected = document.getElementById("frame").value;

    document.getElementById("frameTags").value =
        frames[selected];
}

function randomizePrompt() {

    const location =
        document.getElementById("location").value;

    const prompts = randomPrompts[location];

    if (!prompts)
        return;

    const random =
        Math.floor(Math.random() * prompts.length);

    document.getElementById("prompt").value =
        prompts[random];
}

function buildPrompt() {

    const character = document.getElementById("characterTags").value;
    const outfit = document.getElementById("outfitTags").value;
    const location = document.getElementById("locationTags").value;
    const time = document.getElementById("timeTags").value;
    const angle = document.getElementById("angleTags").value;
    const frame = document.getElementById("frameTags").value;
    const userPrompt = document.getElementById("prompt").value;
 
    return `
score_7, score_8, masterpiece, ${character}, ${outfit}, ${location}, ${time}, ${angle}, ${frame}
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

document.getElementById("frame").onchange = updateFrame;

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
    console.log(data.request_id)
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
    console.log(resultData)
    document.getElementById("result").src = resultData.image_url;
    document.getElementById("result").hidden = false;

    button.disabled = false;
    button.innerText = "Generate";
}