/*
 * ASTRA mission knowledge assessments.
 * Question content is based on the user's NASA-sourced research brief.
 * ASTRA is an educational student project, not a NASA product.
 */
const astraAssessmentBank = {
  flight: {
    title: "FLIGHT SYSTEMS",
    questions: [
      {
        question: "Which description best matches the purpose of an EVA spacesuit?",
        options: [
          "It supports breathing, pressure and temperature control during spacewalks",
          "It creates artificial gravity and moves the spacecraft",
          "It blocks every form of space radiation without monitoring",
          "It is mainly designed for emergency use inside a launch vehicle"
        ],
        answer: 0,
        explanation: "An EVA suit provides breathing oxygen, body pressure and temperature control, and protection from dust and small debris. It is not complete radiation protection."
      },
      {
        question: "Which task is part of the suit's Portable Life Support System (PLSS)?",
        options: [
          "Changing the Moon's surface temperature",
          "Removing exhaled carbon dioxide from circulating suit air",
          "Generating the spacecraft's orbital path",
          "Producing food for the crew during a spacewalk"
        ],
        answer: 1,
        explanation: "The PLSS circulates suit air and removes exhaled carbon dioxide, while also supporting oxygen, pressure, power, communication and cooling functions."
      },
      {
        question: "What is the purpose of water flowing through an astronaut's cooling undergarment?",
        options: [
          "To create drinking water inside the helmet",
          "To inflate the suit during a spacewalk",
          "To remove body heat from the astronaut",
          "To provide thrust for movement"
        ],
        answer: 2,
        explanation: "Water flowing through the undergarment helps carry body heat away from the astronaut."
      },
      {
        question: "What is the main role of a launch-and-entry suit described in the research brief?",
        options: [
          "To support independent work outside a spacecraft",
          "To collect lunar geological samples",
          "To remove lunar dust from solar panels",
          "To protect the crew during spacecraft emergencies such as cabin depressurisation"
        ],
        answer: 3,
        explanation: "Launch-and-entry suits primarily protect astronauts during spacecraft emergencies. They are not substitutes for independently supported EVA suits."
      },
      {
        question: "Does an EVA spacesuit provide complete protection against space radiation?",
        options: [
          "No. Radiation requires separate monitoring and mission protection measures",
          "Yes. Its outer fabric blocks all energetic particles",
          "Yes. Its cooling water absorbs every type of radiation",
          "No. But the astronaut can reliably feel dangerous exposure instead"
        ],
        answer: 0,
        explanation: "The research brief states that an EVA suit does not provide complete protection against space radiation. Radiation monitoring and other protection measures are needed."
      }
    ]
  },
  microgravity: {
    title: "MICROGRAVITY",
    questions: [
      {
        question: "Why do astronauts and loose objects appear to float inside an orbiting spacecraft?",
        options: [
          "Earth's gravity has disappeared at orbital altitude",
          "The crew, spacecraft and loose objects are falling around Earth together",
          "The spacecraft continuously pushes every object upward",
          "The air inside the spacecraft removes the effects of gravity"
        ],
        answer: 1,
        explanation: "Astronauts float because they and their spacecraft are in shared free fall around Earth. Gravity has not disappeared."
      },
      {
        question: "Which statement about gravity in orbit is supported by the research brief?",
        options: [
          "Earth's gravity is completely absent",
          "Gravity acts only on objects outside the spacecraft",
          "Gravity remains present while the spacecraft and crew fall together",
          "Gravity is replaced by magnetic force inside the cabin"
        ],
        answer: 2,
        explanation: "Microgravity does not mean gravity has vanished. The spacecraft, crew and nearby objects are all falling together around Earth."
      },
      {
        question: "What is the Neutral Buoyancy Laboratory used for?",
        options: [
          "Underwater rehearsal of spacewalk procedures, hardware checks and mission tasks",
          "Producing the oxygen used aboard the International Space Station",
          "Measuring the Moon's internal temperature directly",
          "Testing spacecraft engines in orbit"
        ],
        answer: 0,
        explanation: "NASA uses the Neutral Buoyancy Laboratory for underwater astronaut training, including spacewalk procedures, hardware checks, mission planning and time-critical tasks."
      },
      {
        question: "Why is underwater astronaut training not identical to real orbital microgravity?",
        options: [
          "Water removes all gravity and all movement",
          "Astronauts cannot wear training suits underwater",
          "The pool reproduces the vacuum of space exactly",
          "Gravity remains present and water resistance changes movement"
        ],
        answer: 3,
        explanation: "Buoyancy offsets weight, but gravity is still present and water resistance affects movement. Underwater training is a rehearsal environment, not orbital microgravity."
      },
      {
        question: "How can NASA use buoyancy adjustments during underwater training?",
        options: [
          "To reproduce the vacuum of the Moon",
          "To rehearse some reduced-gravity lunar operations",
          "To remove the need for spacesuit life support",
          "To make water resistance identical to empty space"
        ],
        answer: 1,
        explanation: "NASA can adjust buoyancy to rehearse reduced-gravity lunar operations, although the underwater environment still differs from the Moon."
      }
    ]
  },
  lunar: {
    title: "LUNAR OPERATIONS",
    questions: [
      {
        question: "Which lunar rock is dark, volcanic and commonly found in the Moon's maria?",
        options: ["Anorthosite", "Breccia", "Basalt", "Granite"],
        answer: 2,
        explanation: "Basalt is a dark volcanic rock formed from cooled lava and commonly fills the lunar maria."
      },
      {
        question: "Which light-coloured, feldspar-rich rock is associated with the ancient lunar highlands?",
        options: ["Anorthosite", "Basalt", "Regolith", "Lunar dust"],
        answer: 0,
        explanation: "Anorthosite is dominated by feldspar and is associated with the Moon's ancient highlands."
      },
      {
        question: "What is lunar regolith?",
        options: [
          "A single solid layer of frozen water",
          "Only the large boulders found near craters",
          "A metal structure built around a lunar habitat",
          "Loose surface material containing rock fragments, mineral grains and other particles"
        ],
        answer: 3,
        explanation: "Regolith is loose lunar surface material containing rock fragments, mineral grains and impact- and volcanic-glass particles. Dust is its finest fraction."
      },
      {
        question: "How is breccia described in the research brief?",
        options: [
          "A smooth glass sheet formed only by sunlight",
          "Rock assembled from fragments of other rocks, often through impact-related processes",
          "A gas released from the lunar interior",
          "A loose dust cloud with no rock fragments"
        ],
        answer: 1,
        explanation: "Breccia is made from fragments of other rocks, commonly crushed, mixed and cemented or welded by impact-related processes."
      },
      {
        question: "How does an electrodynamic dust shield help remove lunar dust?",
        options: [
          "It melts dust with liquid water",
          "It uses wind from the lunar atmosphere",
          "It uses electric fields to lift and move dust particles",
          "It dissolves dust into oxygen"
        ],
        answer: 2,
        explanation: "Electrodynamic dust shields use electric fields to lift and remove particles. NASA reported a lunar-surface demonstration during Blue Ghost Mission 1 in 2025, but this does not solve every dust problem."
      }
    ]
  },
  outpost: {
    title: "OUTPOST COMMAND",
    questions: [
      {
        question: "Which group of functions is included in an Environmental Control and Life Support System (ECLSS)?",
        options: [
          "Cabin pressure, oxygen, ventilation, water, waste and fire detection",
          "Only solar-panel cleaning and rover navigation",
          "Only radio communication and scientific cameras",
          "Only greenhouse lighting and lunar drilling"
        ],
        answer: 0,
        explanation: "The research brief describes ECLSS as controlling cabin pressure, oxygen, ventilation, water supply, waste management, and fire detection and suppression."
      },
      {
        question: "How does the ISS oxygen-generation assembly produce oxygen?",
        options: [
          "By filtering oxygen directly from lunar dust",
          "By splitting water into oxygen and hydrogen using electrolysis",
          "By storing sunlight inside the water tank",
          "By cooling carbon dioxide until it becomes oxygen"
        ],
        answer: 1,
        explanation: "The oxygen-generation assembly uses electrolysis to split water into oxygen and hydrogen. Water recovery and air-quality checks are separate, important life-support functions."
      },
      {
        question: "Why do astronauts need radiation instruments and exposure monitoring beyond Earth's protective environment?",
        options: [
          "Radiation always produces a visible glow",
          "Astronauts can measure it by feeling skin temperature",
          "Space radiation is harmless when a spacesuit is worn",
          "Hazardous radiation cannot reliably be seen or felt by the crew"
        ],
        answer: 3,
        explanation: "The research brief states that astronauts cannot reliably see or feel hazardous radiation exposure, so instruments and individual exposure monitoring are necessary."
      },
      {
        question: "Which statement best describes power planning for a lunar outpost?",
        options: [
          "Solar arrays generate the same electricity during darkness as in sunlight",
          "A battery creates unlimited new energy without a power source",
          "Solar arrays depend on illumination, so storage or other generation can be needed during darkness",
          "A radioisotope heater unit is the same as an electrical generator"
        ],
        answer: 2,
        explanation: "Solar arrays generate electricity when illuminated. Batteries and regenerative fuel cells store energy; fission surface power is one technology studied for electricity independent of sunlight. Radioisotope heater units provide heat, not electricity."
      },
      {
        question: "What is the role of NASA's Veggie plant-growth system aboard the ISS, as described in the research brief?",
        options: [
          "It studies plant growth in microgravity and supplements crew diets with fresh produce",
          "It produces the entire food supply for the crew",
          "It grows crops directly in untreated lunar soil",
          "It replaces the need for water, light and nutrients"
        ],
        answer: 0,
        explanation: "Veggie is used to study plant growth in microgravity and supplement astronauts' diets with fresh produce. Small growth systems do not provide a complete crew diet."
      }
    ]
  }
};

const astraAssessmentNames = {
  flight: "FLIGHT SYSTEMS",
  microgravity: "MICROGRAVITY",
  lunar: "LUNAR OPERATIONS",
  outpost: "OUTPOST COMMAND"
};

let activeAssessmentKey = null;
let activeAssessmentQuestion = 0;
let activeAssessmentScore = 0;
let activeAssessmentAnswered = false;

const ASTRA_RECORDS_KEY = "astraTrainingRecords_v1";
let astraFallbackTrainingRecords = {};
let astraStorageAvailable = true;

function getAstraTrainingRecords() {
  try {
    const saved = localStorage.getItem(ASTRA_RECORDS_KEY);
    return saved ? JSON.parse(saved) : { ...astraFallbackTrainingRecords };
  } catch (error) {
    astraStorageAvailable = false;
    return { ...astraFallbackTrainingRecords };
  }
}

function saveAstraTrainingRecord(moduleKey, score, total) {
  const records = getAstraTrainingRecords();
  const previous = records[moduleKey] || { bestScore: 0, attempts: 0 };
  records[moduleKey] = {
    bestScore: Math.max(Number(previous.bestScore) || 0, score),
    latestScore: score,
    attempts: (Number(previous.attempts) || 0) + 1,
    total: total,
    updatedAt: new Date().toISOString()
  };

  // Keep an in-memory copy as a fallback in browsers that restrict local storage.
  astraFallbackTrainingRecords = { ...records };
  try {
    localStorage.setItem(ASTRA_RECORDS_KEY, JSON.stringify(records));
    astraStorageAvailable = true;
  } catch (error) {
    astraStorageAvailable = false;
  }
  const note = document.getElementById("assessmentRecordNote");
  if (note && !astraStorageAvailable) {
    note.textContent = "Browser storage is restricted. Results remain available during this open page session.";
  }
  renderAstraTrainingRecords();
}

function renderAstraTrainingRecords() {
  const list = document.getElementById("trainingRecordsList");
  const summary = document.getElementById("trainingRecordsSummary");
  const totalDisplay = document.getElementById("trainingRecordsTotal");
  if (!list || !summary || !totalDisplay) return;

  const records = getAstraTrainingRecords();
  const moduleKeys = Object.keys(astraAssessmentNames);
  let completed = 0;
  let bestTotal = 0;

  list.innerHTML = "";
  moduleKeys.forEach(function(key) {
    const record = records[key];
    const item = document.createElement("div");
    item.className = "training-record-item";

    const name = document.createElement("strong");
    name.textContent = astraAssessmentNames[key];
    const score = document.createElement("span");
    if (record) {
      completed++;
      bestTotal += Number(record.bestScore) || 0;
      score.textContent = "BEST " + record.bestScore + " / 5";
    } else {
      score.textContent = "NOT YET COMPLETED";
    }
    item.appendChild(name);
    item.appendChild(score);
    list.appendChild(item);
  });

  summary.textContent = completed + " / 4 ASSESSMENTS";
  totalDisplay.textContent = "BEST SCORE: " + bestTotal + " / 20";
}

function startTrainingAssessment(moduleKey) {
  const assessment = astraAssessmentBank[moduleKey];
  if (!assessment) {
    console.error("Unknown ASTRA assessment:", moduleKey);
    return;
  }

  activeAssessmentKey = moduleKey;
  activeAssessmentQuestion = 0;
  activeAssessmentScore = 0;
  activeAssessmentAnswered = false;

  ["trainingPanel", "microgravityPanel", "lunarPanel", "outpostPanel", "factsLibrary"].forEach(function(id) {
    const panel = document.getElementById(id);
    if (panel) panel.hidden = true;
  });

  const panel = document.getElementById("assessmentPanel");
  const questionBlock = document.getElementById("assessmentQuestionBlock");
  const resultBlock = document.getElementById("assessmentResult");
  panel.hidden = false;
  questionBlock.hidden = false;
  resultBlock.hidden = true;

  document.getElementById("assessmentTitle").textContent = assessment.title + " / KNOWLEDGE CHECK";
  document.getElementById("missionMessage").textContent = assessment.title + " assessment started.";
  renderTrainingAssessmentQuestion();
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderTrainingAssessmentQuestion() {
  const assessment = astraAssessmentBank[activeAssessmentKey];
  if (!assessment) return;
  const question = assessment.questions[activeAssessmentQuestion];
  activeAssessmentAnswered = false;

  document.getElementById("assessmentProgress").textContent =
    "QUESTION " + (activeAssessmentQuestion + 1) + " / " + assessment.questions.length;
  document.getElementById("assessmentQuestion").textContent = question.question;
  const feedback = document.getElementById("assessmentFeedback");
  feedback.textContent = "";
  feedback.className = "assessment-feedback";

  const nextButton = document.getElementById("assessmentNextButton");
  nextButton.hidden = true;
  nextButton.textContent = activeAssessmentQuestion === assessment.questions.length - 1
    ? "VIEW RESULTS →"
    : "NEXT QUESTION →";

  const options = document.getElementById("assessmentOptions");
  options.innerHTML = "";
  question.options.forEach(function(optionText, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "assessment-option";
    button.innerHTML = "<span class=\"option-prefix\">" + String.fromCharCode(65 + index) + "</span>";
    const label = document.createElement("span");
    label.textContent = optionText;
    button.appendChild(label);
    button.addEventListener("click", function() {
      answerTrainingAssessment(index);
    });
    options.appendChild(button);
  });
}

function answerTrainingAssessment(selectedIndex) {
  if (activeAssessmentAnswered || !activeAssessmentKey) return;
  const assessment = astraAssessmentBank[activeAssessmentKey];
  const question = assessment.questions[activeAssessmentQuestion];
  activeAssessmentAnswered = true;
  const buttons = document.querySelectorAll("#assessmentOptions .assessment-option");
  buttons.forEach(function(button, index) {
    button.disabled = true;
    if (index === question.answer) button.classList.add("correct");
    if (index === selectedIndex && selectedIndex !== question.answer) button.classList.add("incorrect");
  });

  const isCorrect = selectedIndex === question.answer;
  if (isCorrect) activeAssessmentScore++;
  const feedback = document.getElementById("assessmentFeedback");
  feedback.className = "assessment-feedback " + (isCorrect ? "good" : "needs-review");
  feedback.textContent = (isCorrect ? "CORRECT. " : "NOT QUITE. The correct answer is " + String.fromCharCode(65 + question.answer) + ". ") + question.explanation;
  document.getElementById("assessmentNextButton").hidden = false;
}

function nextTrainingAssessmentQuestion() {
  if (!activeAssessmentAnswered || !activeAssessmentKey) return;
  const assessment = astraAssessmentBank[activeAssessmentKey];
  if (activeAssessmentQuestion < assessment.questions.length - 1) {
    activeAssessmentQuestion++;
    renderTrainingAssessmentQuestion();
  } else {
    completeTrainingAssessment();
  }
}

function completeTrainingAssessment() {
  const assessment = astraAssessmentBank[activeAssessmentKey];
  const total = assessment.questions.length;
  const percentage = Math.round((activeAssessmentScore / total) * 100);
  saveAstraTrainingRecord(activeAssessmentKey, activeAssessmentScore, total);

  document.getElementById("assessmentQuestionBlock").hidden = true;
  document.getElementById("assessmentResult").hidden = false;
  document.getElementById("assessmentProgress").textContent = "ASSESSMENT COMPLETE";
  document.getElementById("assessmentResultTitle").textContent =
    percentage >= 80 ? "TRAINING STANDARD ACHIEVED" : "ASSESSMENT RECORDED";
  document.getElementById("assessmentResultScore").textContent =
    "SCORE: " + activeAssessmentScore + " / " + total;
  document.getElementById("assessmentResultDetails").textContent =
    percentage + "% achieved in " + assessment.title + ". " +
    (percentage >= 80
      ? "Strong work. Review the NASA Facts Library to deepen your understanding."
      : "Review the explanations and NASA Facts Library, then retry the assessment to improve your best score.");
  document.getElementById("missionMessage").textContent =
    assessment.title + " knowledge assessment recorded: " + activeAssessmentScore + " / " + total + ".";
}

function returnToTrainingCenter() {
  const panel = document.getElementById("assessmentPanel");
  if (panel) panel.hidden = true;
  ["trainingPanel", "microgravityPanel", "lunarPanel", "outpostPanel", "factsLibrary"].forEach(function(id) {
    const section = document.getElementById(id);
    if (section) section.hidden = true;
  });
  const missions = document.getElementById("missions");
  if (missions) missions.scrollIntoView({ behavior: "smooth", block: "start" });
  const message = document.getElementById("missionMessage");
  if (message) message.textContent = "Training record updated. Select another module to continue.";
}

renderAstraTrainingRecords();
