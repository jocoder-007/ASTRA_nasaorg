/*
 * ASTRA NASA FACTS LIBRARY
 * Facts below are organised from the uploaded ASTRA NASA-Sourced Research Brief.
 * Source links are attached to each research topic.
 * Values used by the game itself (scores, timers, resource costs) remain simulations.
 */

const astraFactAreas = [
    {
        id: "flight",
        name: "FLIGHT SYSTEMS",
        subtitle: "Astronauts and spacesuits",
        topics: [
            {
                id: "spacesuits",
                title: "Astronauts and spacesuits",
                facts: [
                    "An Extravehicular Activity (EVA) suit supports work outside a spacecraft. It supplies breathing oxygen, maintains body pressure, controls temperature, and protects against dust and small debris. It does not provide complete protection against space radiation.",
                    "The Portable Life Support System (PLSS) backpack supplies oxygen, maintains pressure, circulates air, removes exhaled carbon dioxide, powers suit equipment, supports radio communication, and circulates cooling water.",
                    "Water flowing through a special undergarment helps remove body heat from an astronaut during a spacewalk.",
                    "Launch-and-entry suits primarily protect astronauts during spacecraft emergencies such as cabin depressurisation. They are not substitutes for independently supported spacewalk suits."
                ],
                astraUse: "Use these facts for equipment identification, oxygen-supply checks, cooling-system scenarios, and communication checks. Remember that an EVA suit and a launch-and-entry suit have different jobs.",
                sources: [
                    { label: "NASA — Spacewalk Spacesuit Basics [1]", url: "https://www.nasa.gov/humans-in-space/spacewalk-spacesuit-basics/" },
                    { label: "NASA — Spacesuits, Volume 2 [2]", url: "https://www.nasa.gov/reference/11-0-spacesuits-vol-2/" }
                ],
                questions: [
                    {
                        question: "What removes exhaled carbon dioxide inside a spacesuit?",
                        options: ["The suit life-support system", "The Sun visor"],
                        answer: 0,
                        explanation: "The suit circulates air through equipment that removes exhaled carbon dioxide."
                    },
                    {
                        question: "Which suit is designed for independent work outside a spacecraft?",
                        options: ["A launch-and-entry suit", "An EVA suit"],
                        answer: 1,
                        explanation: "An EVA suit is designed to support an astronaut during a spacewalk."
                    }
                ]
            }
        ]
    },
    {
        id: "microgravity",
        name: "MICROGRAVITY",
        subtitle: "Microgravity and astronaut training",
        topics: [
            {
                id: "microgravity-training",
                title: "Microgravity and astronaut training",
                facts: [
                    "Astronauts float in orbit because they, their spacecraft, and loose objects are falling around Earth together. Gravity has not disappeared; objects appear weightless relative to the spacecraft.",
                    "NASA's Neutral Buoyancy Laboratory uses underwater training for spacewalk procedures, hardware checks, mission planning, and time-critical tasks.",
                    "Buoyancy offsets weight and lets astronauts rehearse handling equipment and moving in suits. Underwater training does not reproduce real orbital microgravity: gravity remains present, and water resistance changes movement.",
                    "NASA can adjust buoyancy to rehearse some reduced-gravity lunar operations."
                ],
                astraUse: "Explain floating through shared free fall. Make clear that underwater training is a rehearsal tool, not the same environment as orbit.",
                sources: [
                    { label: "NASA — What Is Microgravity? [3]", url: "https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/" },
                    { label: "NASA — Neutral Buoyancy Laboratory [4]", url: "https://www.nasa.gov/johnson/neutral-buoyancy-laboratory/" },
                    { label: "NASA — Neutral Buoyancy Laboratory Environments [5]", url: "https://www.nasa.gov/podcasts/houston-we-have-a-podcast/nbl-environments/" }
                ],
                questions: [
                    {
                        question: "Why do astronauts appear to float in orbit?",
                        options: ["They and their spacecraft are in shared free fall", "Earth's gravity has disappeared"],
                        answer: 0,
                        explanation: "The crew, spacecraft, and loose objects fall around Earth together, creating the appearance of weightlessness."
                    },
                    {
                        question: "Is underwater spacewalk training identical to real orbital microgravity?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Water provides buoyancy but also creates resistance, and gravity is still present."
                    }
                ]
            }
        ]
    },
    {
        id: "lunar",
        name: "LUNAR OPERATIONS",
        subtitle: "Lunar rocks, samples, dust and surface work",
        topics: [
            {
                id: "lunar-samples",
                title: "Lunar rocks and samples",
                facts: [
                    "Basalt is a dark volcanic rock formed from cooled lava. It commonly fills the Moon's maria, the dark areas visible from Earth.",
                    "Anorthosite is a light-coloured rock dominated by feldspar and associated with the ancient lunar highlands.",
                    "Regolith is loose surface material containing rock fragments, mineral grains, and impact- and volcanic-glass particles. Dust is its finest fraction.",
                    "Breccia is rock assembled from fragments of other rocks, commonly through impact-related crushing, mixing, and cementing or welding.",
                    "Lunar samples preserve evidence of volcanism, crust formation, impacts, and surface alteration. Their labels and collection locations matter when scientists interpret that history."
                ],
                astraUse: "Use sample identification tasks for basalt, anorthosite, regolith, and breccia. Keep sample labels and collection locations rather than treating every sample as interchangeable.",
                sources: [
                    { label: "NASA — The Once and Future Moon [6]", url: "https://ares.jsc.nasa.gov/interaction/lmdp/documents/143711main_once.and.future.moon.pdf" },
                    { label: "NASA — Exploring the Moon Teacher's Guide [7]", url: "https://science.nasa.gov/wp-content/uploads/2024/01/exploring-the-moon-teachers-guide.pdf" },
                    { label: "NASA Science — Moon Composition [8]", url: "https://science.nasa.gov/moon/composition/" },
                    { label: "NASA — Lunar Regolith [9]", url: "https://www.nasa.gov/wp-content/uploads/2019/04/05_1_snoble_thelunarregolith.pdf" }
                ],
                questions: [
                    {
                        question: "Which rock commonly fills the Moon's maria?",
                        options: ["Basalt", "Anorthosite"],
                        answer: 0,
                        explanation: "Mare basalts formed from lava that cooled on the lunar surface."
                    },
                    {
                        question: "What is the name for loose material covering the lunar surface?",
                        options: ["Regolith", "One single solid rock type"],
                        answer: 0,
                        explanation: "Regolith is a mixture of loose fragments, grains, and other surface particles."
                    }
                ]
            },
            {
                id: "lunar-dust",
                title: "Lunar dust and surface operations",
                facts: [
                    "Lunar dust is the finest fraction of regolith. Its particles can be sharp and abrasive because they have not undergone Earth-like weathering.",
                    "Dust can cling to surfaces and enter seals, hatches, mechanisms, and habitats. It can also impair optical surfaces, thermal-control equipment, and solar panels.",
                    "NASA investigates dust-mitigation methods including electrodynamic dust shields, which use electric fields to lift and remove particles.",
                    "NASA reported a successful lunar-surface dust-removal demonstration by its Electrodynamic Dust Shield during Blue Ghost Mission 1 in 2025. This does not mean every lunar dust problem has been solved."
                ],
                astraUse: "A dust-contamination event can prompt inspection and cleaning, with a time or energy trade-off. Any exact power penalty in ASTRA is a game-design value, not a NASA measurement.",
                sources: [
                    { label: "NASA — Lunar Regolith [9]", url: "https://www.nasa.gov/wp-content/uploads/2019/04/05_1_snoble_thelunarregolith.pdf" },
                    { label: "NASA — Technology Helps Guard Against Lunar Dust [22]", url: "https://www.nasa.gov/general/nasa-technology-helps-guard-against-lunar-dust/" },
                    { label: "NASA — Dust Shield Successfully Repels Lunar Regolith [23]", url: "https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/" },
                    { label: "NASA Technical Report — Electrodynamic Dust Shield [24]", url: "https://ntrs.nasa.gov/api/citations/20205006073/downloads/EDS%20IAC-19,C2,6,2,x54303.pdf" }
                ],
                questions: [
                    {
                        question: "Can lunar dust affect seals and mechanical systems?",
                        options: ["Yes", "No"],
                        answer: 0,
                        explanation: "Fine, abrasive lunar dust can enter seals and mechanisms and interfere with equipment."
                    },
                    {
                        question: "What does an electrodynamic dust shield use to lift and remove dust?",
                        options: ["Electric fields", "Rain"],
                        answer: 0,
                        explanation: "The shield uses electric fields to move dust particles from a surface."
                    }
                ]
            }
        ]
    },
    {
        id: "outpost",
        name: "OUTPOST COMMAND",
        subtitle: "Life support, radiation, power and food systems",
        topics: [
            {
                id: "life-support",
                title: "Life support and water recycling",
                facts: [
                    "Environmental Control and Life Support Systems (ECLSS) manage cabin pressure, oxygen, ventilation, water supply, waste management, and fire detection and suppression.",
                    "Air revitalisation removes carbon dioxide and trace contaminants. Supplying oxygen alone does not make cabin air safe.",
                    "The International Space Station's water recovery system treats wastewater, including processed urine and moisture condensed from cabin air. Recovered water must meet purity requirements before reuse.",
                    "The ISS oxygen-generation assembly uses electrolysis to split water into oxygen and hydrogen.",
                    "Sensors check treated-water quality. Water that does not meet requirements is reprocessed, so recycling needs functioning treatment equipment and ongoing quality checks."
                ],
                astraUse: "Connect oxygen, water, and power decisions. A simplified scenario can ask players to preserve electrical power or continue water processing. Any numerical costs are game-design values, not NASA measurements.",
                sources: [
                    { label: "NASA — Environmental Control and Life Support Systems [10]", url: "https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/" }
                ],
                questions: [
                    {
                        question: "What process does the ISS use to produce oxygen from water?",
                        options: ["Water electrolysis", "Dust filtering"],
                        answer: 0,
                        explanation: "Electrolysis splits water into oxygen and hydrogen."
                    },
                    {
                        question: "Can treated water that fails quality checks be used immediately?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Water that does not meet purity requirements is reprocessed before reuse."
                    }
                ]
            },
            {
                id: "radiation",
                title: "Radiation protection",
                facts: [
                    "Galactic cosmic rays are energetic particles arriving from beyond the solar system. Solar particle events produce bursts of energetic particles from the Sun.",
                    "Beyond Earth's protective environment, radiation can damage tissue and increase cancer risk. Sufficiently intense exposure can cause acute radiation sickness.",
                    "Astronauts cannot reliably see or feel this hazardous exposure. Radiation instruments and individual exposure monitoring are necessary.",
                    "NASA studies shielding, protected shelters, space-weather monitoring, and regolith-based protective structures.",
                    "Shielding effectiveness depends on particle energy, material, and thickness. Galactic cosmic rays are particularly difficult to shield against; no single material should be described as blocking all space radiation."
                ],
                astraUse: "Use instrument readings and shelter decisions. Do not represent radiation as visible clouds or claim that a single shield gives complete protection.",
                sources: [
                    { label: "NASA Science — Sources of Ionizing Radiation [11]", url: "https://science.nasa.gov/resource/sources-of-ionizing-radiation-in-interplanetary-space/" },
                    { label: "NASA — Space Radiation [12]", url: "https://www.nasa.gov/hrp/hazard-space-radiation/" },
                    { label: "NASA — Protecting Astronauts from Space Radiation at the Moon [13]", url: "https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/" },
                    { label: "NASA — Radiation Protection Technical Brief [14]", url: "https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-020-radiation-protection.pdf" },
                    { label: "NASA — Radiation Protection [15]", url: "https://www.nasa.gov/radiation-protection/" },
                    { label: "NASA Technical Report — Radiation Shielding [16]", url: "https://ntrs.nasa.gov/api/citations/20050215115/downloads/20050215115.pdf" }
                ],
                questions: [
                    {
                        question: "Can astronauts reliably judge radiation exposure just by feeling it?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Radiation exposure requires instruments and individual monitoring; astronauts cannot reliably sense it."
                    },
                    {
                        question: "Does one shield block all forms of space radiation?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Shielding depends on particle energy, material, and thickness. No single material blocks all space radiation."
                    }
                ]
            },
            {
                id: "lunar-power",
                title: "Power for a lunar outpost",
                facts: [
                    "Solar arrays provide electricity when illuminated. Shadows, terrain, location, and seasonal lighting affect how dependable that supply is.",
                    "Many non-polar lunar locations experience roughly two weeks of darkness. Lighting near the lunar south pole is more complicated and must be assessed for the particular site.",
                    "Batteries and regenerative fuel cells can store energy for later use. Storage does not replace the need to generate energy and distribute it to equipment.",
                    "Radioisotope generators convert heat from radioactive decay into electricity. Radioisotope heater units provide heat and should not be confused with electrical generators.",
                    "Fission surface power uses a reactor to provide electricity independently of sunlight. NASA's lunar plans include solar, radioisotope, storage, distribution, and fission technologies; these are not all already operating as an established lunar utility."
                ],
                astraUse: "Require generation, storage, and distribution planning. Do not assume uninterrupted sunlight at the lunar south pole. Clearly identify any game resource points as simulated values.",
                sources: [
                    { label: "NASA — Moonbase Systems [17]", url: "https://www.nasa.gov/moonbase-systems/" },
                    { label: "NASA Technical Report — Lunar Surface Power [18]", url: "https://ntrs.nasa.gov/api/citations/20260008640/downloads/IAC%202026-%20Merancy%20-%20Updated%20Copyright.pdf" },
                    { label: "NASA — Moonbase Environment [19]", url: "https://www.nasa.gov/reference/moonbase-environment/" },
                    { label: "NASA Technical Report — Lunar Power Planning [20]", url: "https://ntrs.nasa.gov/api/citations/20230007737/downloads/Csank_P_20230007737_Moon_IAPG_ESWG_MWG_Durham_NH.pdf" }
                ],
                questions: [
                    {
                        question: "Do solar arrays generate electricity when they are in darkness?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Solar arrays need illumination, so an outpost needs storage or another power source during darkness."
                    },
                    {
                        question: "Which technology can provide power independently of sunlight?",
                        options: ["A fission reactor", "A solar array alone"],
                        answer: 0,
                        explanation: "Fission surface power can produce electricity through periods without sunlight."
                    }
                ]
            },
            {
                id: "space-food",
                title: "Food production in space",
                facts: [
                    "Veggie is an International Space Station plant-growth system used to study plant growth in microgravity and supplement astronauts' diets with fresh produce.",
                    "The Advanced Plant Habitat is a more enclosed, automated research chamber that controls environmental conditions and uses cameras and sensors.",
                    "Plants need suitable light, water, nutrients, root-zone oxygen, and controlled conditions. NASA systems use prepared growth media rather than untreated lunar soil.",
                    "Microgravity complicates water and air delivery around roots. Overwatering and poor airflow can damage crops and encourage fungal growth.",
                    "Fresh crops add dietary variety and can benefit crew well-being. Existing small growth chambers supplement food supplies; they do not provide a complete crew diet."
                ],
                astraUse: "Make harvests depend on water, lighting, environmental control, and care—not simply purchasing a greenhouse.",
                sources: [
                    { label: "NASA — Growing Plants in Space [21]", url: "https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/" }
                ],
                questions: [
                    {
                        question: "Are both water and root-zone air important for plant growth?",
                        options: ["Yes", "No"],
                        answer: 0,
                        explanation: "Roots need a healthy balance of water, nutrients, and oxygen."
                    },
                    {
                        question: "Does the Veggie system provide the entire crew diet?",
                        options: ["Yes", "No"],
                        answer: 1,
                        explanation: "Veggie supplements food supplies with fresh produce; it is not a complete food supply."
                    }
                ]
            }
        ]
    }
];

let astraSelectedFactArea = "flight";
let astraActiveFactTopic = null;
let astraFactQuestionIndex = 0;
let astraFactQuizScore = 0;
let astraFactAnswered = false;
let astraFactQuizComplete = false;

function openFactsLibrary() {
    // Stop the microgravity timer if the facts screen is opened during a game.
    if (typeof microgravityInterval !== "undefined" && microgravityInterval !== null) {
        clearInterval(microgravityInterval);
        microgravityInterval = null;
    }
    if (typeof microgravityActive !== "undefined") {
        microgravityActive = false;
    }

    ["trainingPanel", "microgravityPanel", "lunarPanel", "outpostPanel", "assessmentPanel"].forEach(function(id) {
        const panel = document.getElementById(id);
        if (panel) panel.hidden = true;
    });

    const library = document.getElementById("factsLibrary");
    if (!library) return;

    library.hidden = false;
    astraRenderFactTabs();
    astraRenderFactArea(astraSelectedFactArea);
    library.scrollIntoView({ behavior: "smooth", block: "start" });
}

function astraRenderFactTabs() {
    const tabArea = document.getElementById("factsAreaTabs");
    if (!tabArea) return;
    tabArea.innerHTML = "";

    astraFactAreas.forEach(function(area) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "facts-area-tab" + (area.id === astraSelectedFactArea ? " active" : "");
        button.textContent = area.name;
        button.setAttribute("aria-pressed", area.id === astraSelectedFactArea ? "true" : "false");
        button.addEventListener("click", function() {
            astraSelectedFactArea = area.id;
            astraRenderFactTabs();
            astraRenderFactArea(area.id);
            const quiz = document.getElementById("factsQuiz");
            if (quiz) quiz.hidden = true;
        });
        tabArea.appendChild(button);
    });
}

function astraRenderFactArea(areaId) {
    const content = document.getElementById("factsContent");
    if (!content) return;
    content.innerHTML = "";

    const area = astraFactAreas.find(function(item) { return item.id === areaId; });
    if (!area) return;

    const areaHeading = document.createElement("div");
    areaHeading.className = "facts-area-heading";
    const heading = document.createElement("h3");
    heading.textContent = area.name;
    const subtitle = document.createElement("p");
    subtitle.textContent = area.subtitle;
    areaHeading.append(heading, subtitle);
    content.appendChild(areaHeading);

    area.topics.forEach(function(topic) {
        const card = document.createElement("article");
        card.className = "facts-topic-card";

        const title = document.createElement("h3");
        title.textContent = topic.title;
        card.appendChild(title);

        const factsHeading = document.createElement("p");
        factsHeading.className = "facts-label";
        factsHeading.textContent = "NASA-SOURCED RESEARCH";
        card.appendChild(factsHeading);

        const list = document.createElement("ul");
        topic.facts.forEach(function(fact) {
            const item = document.createElement("li");
            item.textContent = fact;
            list.appendChild(item);
        });
        card.appendChild(list);

        const useHeading = document.createElement("p");
        useHeading.className = "facts-label";
        useHeading.textContent = "HOW THIS CONNECTS TO ASTRA";
        card.appendChild(useHeading);

        const useText = document.createElement("p");
        useText.className = "facts-use-text";
        useText.textContent = topic.astraUse;
        card.appendChild(useText);

        const sourceHeading = document.createElement("p");
        sourceHeading.className = "facts-label";
        sourceHeading.textContent = "NASA REFERENCES";
        card.appendChild(sourceHeading);

        const sourceList = document.createElement("div");
        sourceList.className = "facts-source-list";
        topic.sources.forEach(function(source) {
            const link = document.createElement("a");
            link.href = source.url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = source.label;
            sourceList.appendChild(link);
        });
        card.appendChild(sourceList);

        const quizButton = document.createElement("button");
        quizButton.type = "button";
        quizButton.className = "start-btn facts-quiz-launch";
        quizButton.textContent = "TAKE TOPIC QUIZ (" + topic.questions.length + " QUESTIONS) →";
        quizButton.addEventListener("click", function() {
            startAstraFactQuiz(topic.id);
        });
        card.appendChild(quizButton);

        content.appendChild(card);
    });
}

function startAstraFactQuiz(topicId) {
    astraActiveFactTopic = null;
    astraFactAreas.some(function(area) {
        const match = area.topics.find(function(topic) { return topic.id === topicId; });
        if (match) {
            astraActiveFactTopic = match;
            return true;
        }
        return false;
    });

    if (!astraActiveFactTopic) return;

    astraFactQuestionIndex = 0;
    astraFactQuizScore = 0;
    astraFactAnswered = false;
    astraFactQuizComplete = false;

    const quiz = document.getElementById("factsQuiz");
    if (quiz) {
        quiz.hidden = false;
        astraRenderFactQuestion();
        quiz.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function astraRenderFactQuestion() {
    const question = astraActiveFactTopic.questions[astraFactQuestionIndex];
    document.getElementById("factsQuizTopic").textContent = astraActiveFactTopic.title;
    document.getElementById("factsQuizProgress").textContent =
        "QUESTION " + (astraFactQuestionIndex + 1) + " / " + astraActiveFactTopic.questions.length;
    document.getElementById("factsQuizQuestion").textContent = question.question;
    document.getElementById("factsQuizFeedback").textContent = "";
    document.getElementById("factsQuizNext").hidden = true;
    document.getElementById("factsQuizNext").textContent = "NEXT QUESTION →";

    const optionArea = document.getElementById("factsQuizOptions");
    optionArea.innerHTML = "";

    question.options.forEach(function(option, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "facts-quiz-option";
        button.textContent = option;
        button.addEventListener("click", function() {
            astraCheckFactAnswer(index);
        });
        optionArea.appendChild(button);
    });

    astraFactAnswered = false;
}

function astraCheckFactAnswer(selectedIndex) {
    if (astraFactAnswered || !astraActiveFactTopic) return;
    astraFactAnswered = true;

    const question = astraActiveFactTopic.questions[astraFactQuestionIndex];
    const correct = selectedIndex === question.answer;
    if (correct) astraFactQuizScore++;

    const buttons = document.querySelectorAll(".facts-quiz-option");
    buttons.forEach(function(button, index) {
        button.disabled = true;
        if (index === question.answer) button.classList.add("correct");
        else if (index === selectedIndex) button.classList.add("incorrect");
    });

    document.getElementById("factsQuizFeedback").textContent =
        (correct ? "CORRECT. " : "NOT QUITE. ") + question.explanation;
    document.getElementById("factsQuizNext").hidden = false;
    document.getElementById("factsQuizNext").textContent =
        astraFactQuestionIndex === astraActiveFactTopic.questions.length - 1
            ? "VIEW RESULTS →"
            : "NEXT QUESTION →";
}

function nextAstraFactQuestion() {
    if (astraFactQuizComplete) {
        closeAstraFactQuiz();
        return;
    }
    if (!astraFactAnswered || !astraActiveFactTopic) return;

    if (astraFactQuestionIndex < astraActiveFactTopic.questions.length - 1) {
        astraFactQuestionIndex++;
        astraRenderFactQuestion();
        return;
    }

    astraFactQuizComplete = true;
    document.getElementById("factsQuizProgress").textContent = "TOPIC QUIZ COMPLETE";
    document.getElementById("factsQuizQuestion").textContent =
        "You scored " + astraFactQuizScore + " / " + astraActiveFactTopic.questions.length + ".";
    document.getElementById("factsQuizOptions").innerHTML = "";
    document.getElementById("factsQuizFeedback").textContent =
        astraFactQuizScore === astraActiveFactTopic.questions.length
            ? "Perfect score. Excellent work, astronaut!"
            : "Review the facts above and try the topic quiz again.";
    document.getElementById("factsQuizNext").textContent = "BACK TO FACTS →";
}

function closeAstraFactQuiz() {
    const quiz = document.getElementById("factsQuiz");
    if (quiz) quiz.hidden = true;
}
