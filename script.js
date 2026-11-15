

/* ASTRA - MAIN FUNCTIONS */

function startTraining() {

    document.getElementById("statusText").innerText =
        "TRAINING ACTIVE";

    document.getElementById("missionMessage").innerText =
        "Astronaut candidate authorized. Training sequence initiated.";

}


/* =========================================
   EVA SUIT DIAGNOSTICS - TRAINING SIMULATION
   These checks are educational UI states only.
   They are not real sensor readings or suit controls.
========================================= */

const suitDiagnosticSystems = [
    { stateId: "oxygenState", barId: "oxygenBar", name: "OXYGEN SUPPLY" },
    { stateId: "pressureState", barId: "pressureBar", name: "SUIT PRESSURE" },
    { stateId: "coolingState", barId: "coolingBar", name: "COOLING LOOP" },
    { stateId: "co2State", barId: "co2Bar", name: "CO₂ REMOVAL" },
    { stateId: "commsState", barId: "commsBar", name: "RADIO COMMUNICATION" }
];

let suitDiagnosticTimers = [];

function clearSuitDiagnosticTimers() {
    suitDiagnosticTimers.forEach(function(timerId) {
        clearTimeout(timerId);
    });
    suitDiagnosticTimers = [];
}

function resetSuitDiagnostics() {
    clearSuitDiagnosticTimers();

    suitDiagnosticSystems.forEach(function(system) {
        const state = document.getElementById(system.stateId);
        const bar = document.getElementById(system.barId);
        if (!state || !bar) return;

        state.innerText = "STANDBY";
        state.className = "telemetry-state";
        bar.style.width = "0%";
    });

    const result = document.getElementById("diagnosticResult");
    const button = document.getElementById("runDiagnosticsButton");
    const assessmentButton = document.getElementById("flightAssessmentButton");
    if (assessmentButton) assessmentButton.hidden = true;
    if (result) result.innerText = "SYSTEM CHECK NOT STARTED";
    if (button) {
        button.disabled = false;
        button.innerText = "RUN SUIT DIAGNOSTICS →";
    }
}

function runSuitDiagnostics() {
    const button = document.getElementById("runDiagnosticsButton");
    const result = document.getElementById("diagnosticResult");
    if (!button || !result || button.disabled) return;

    resetSuitDiagnostics();
    button.disabled = true;
    button.innerText = "DIAGNOSTICS RUNNING...";
    result.innerText = "CHECKING SUIT SUPPORT SYSTEMS...";

    suitDiagnosticSystems.forEach(function(system, index) {
        const timerId = setTimeout(function() {
            const state = document.getElementById(system.stateId);
            const bar = document.getElementById(system.barId);
            if (!state || !bar) return;

            state.innerText = "CHECKING";
            state.className = "telemetry-state checking";

            const completionTimer = setTimeout(function() {
                state.innerText = "NOMINAL";
                state.className = "telemetry-state nominal";
                bar.style.width = "100%";

                if (index === suitDiagnosticSystems.length - 1) {
                    result.innerText = "ALL FIVE TRAINING CHECKS COMPLETE — SIMULATED READY STATE";
                    button.disabled = false;
                    button.innerText = "RUN AGAIN →";
                    const assessmentButton = document.getElementById("flightAssessmentButton");
                    if (assessmentButton) assessmentButton.hidden = false;
                    document.getElementById("missionMessage").innerText =
                        "EVA suit training diagnostics completed. The Flight Systems knowledge assessment is unlocked.";
                }
            }, 400);

            suitDiagnosticTimers.push(completionTimer);
        }, index * 600);

        suitDiagnosticTimers.push(timerId);
    });
}


/* FLIGHT SYSTEMS QUESTIONS */

const flightQuestions = [

    {
        question: "What is the primary purpose of an astronaut spacesuit?",

        options: [
            "To provide life support and environmental protection",
            "To increase spacecraft speed",
            "To generate artificial gravity",
            "To communicate with Earth only"
        ],

        answer: 0,

        explanation:
        "A spacesuit provides life support and protects astronauts from the space environment."
    },

    {
        question: "What does the PLSS on a spacesuit stand for?",

        options: [
            "Planetary Landing Safety System",
            "Primary Life Support System",
            "Personal Lunar Science Station",
            "Pressure Launch Support System"
        ],

        answer: 1,

        explanation:
        "The Primary Life Support System helps provide oxygen, remove carbon dioxide and control suit temperature."
    },

    {
        question: "Why are spacecraft cabins pressurized?",

        options: [
            "To make spacecraft heavier",
            "To increase their speed",
            "To provide a suitable environment for the crew",
            "To create sunlight"
        ],

        answer: 2,

        explanation:
        "A pressurized cabin maintains an environment suitable for crew members to breathe and work."
    },

    {
        question: "What is the main purpose of spacecraft solar arrays?",

        options: [
            "To collect rock samples",
            "To produce electricity from sunlight",
            "To control astronaut movement",
            "To generate oxygen directly"
        ],

        answer: 1,

        explanation:
        "Solar arrays convert sunlight into electrical energy for spacecraft systems."
    }

];


/* GAME VARIABLES */

let currentQuestion = 0;

let flightScore = 0;

let showingResults = false;


/* OPEN TRAINING MODULE */


function openMission(missionName) {

    // Stop any previous microgravity game
    if (microgravityInterval !== null) {
        clearInterval(microgravityInterval);
        microgravityInterval = null;
    }

    microgravityActive = false;
    microgravityKeys.clear();
    if (microgravityFrame !== null) {
        cancelAnimationFrame(microgravityFrame);
        microgravityFrame = null;
    }
    if (lunarInterval !== null) {
        clearInterval(lunarInterval);
        lunarInterval = null;
    }
    lunarActive = false;
    lunarKeys.clear();
    if (lunarFrame !== null) {
        cancelAnimationFrame(lunarFrame);
        lunarFrame = null;
    }

    // Hide both training screens first
    document.getElementById("trainingPanel").hidden = true;
    document.getElementById("microgravityPanel").hidden = true;
    document.getElementById("lunarPanel").hidden = true;
    document.getElementById("outpostPanel").hidden = true;
    const factsLibrary = document.getElementById("factsLibrary");
    if (factsLibrary) factsLibrary.hidden = true;
    const assessmentPanel = document.getElementById("assessmentPanel");
    if (assessmentPanel) assessmentPanel.hidden = true;
    // OPEN MICROGRAVITY
    if (missionName === "Microgravity") {

        document.getElementById("microgravityPanel").hidden = false;

        document.getElementById("microStatus").innerText =
            "Awaiting mission start...";

        document.getElementById("missionMessage").innerText =
            "Microgravity training module opened.";

        document.getElementById("microgravityPanel").scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    // FLIGHT SYSTEMS STARTS WITH A PRE-EVA CHECK. Its quiz unlocks after diagnostics.
    if (missionName === "Flight Systems") {
        document.getElementById("missionMessage").innerText =
            "Complete all five simulated EVA suit checks to unlock the Flight Systems assessment.";
        document.getElementById("suitTelemetry").scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    // Legacy Flight Systems quiz remains unused for compatibility.
    if (missionName === "Flight Systems - Legacy") {

        currentQuestion = 0;
        flightScore = 0;
        showingResults = false;

        document.getElementById("trainingPanel").hidden = false;

        showFlightQuestion();

        document.getElementById("missionMessage").innerText =
            "Flight Systems assessment opened.";

        document.getElementById("trainingPanel").scrollIntoView({
            behavior: "smooth"
        });

        return;
    }

    // LUNAR MODULE IS NOT BUILT YET
    if (missionName === "Lunar Operations") {

    document.getElementById("lunarPanel").hidden = false;

    document.getElementById("lunarStatus").innerText =
        "AWAITING MISSION START";

    document.getElementById("missionMessage").innerText =
        "Lunar Expedition 01 is ready.";

    document.getElementById("lunarPanel").scrollIntoView({
        behavior: "smooth"
    });

    return;
}
        
}



/* DISPLAY QUESTION */

function showFlightQuestion() {

    const question = flightQuestions[currentQuestion];

    document.getElementById("questionProgress").innerText =
        "QUESTION " + (currentQuestion + 1) +
        " / " + flightQuestions.length;

    document.getElementById("questionTitle").innerText =
        "Flight Systems Assessment";

    document.getElementById("questionText").innerText =
        question.question;

    document.getElementById("feedback").innerText = "";

    document.getElementById("nextButton").hidden = true;

    document.getElementById("nextButton").innerText =
        "NEXT QUESTION →";

    const answerArea =
        document.getElementById("answerOptions");

    answerArea.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.innerText = option;

        button.onclick = function() {
            checkAnswer(index);
        };

        answerArea.appendChild(button);

    });

}


/* CHECK ANSWER */

function checkAnswer(selectedAnswer) {

    const question = flightQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer-btn");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    if (selectedAnswer === question.answer) {

        flightScore++;

        document.getElementById("feedback").innerText =
            "CORRECT! " + question.explanation;

    } else {

        document.getElementById("feedback").innerText =
            "NOT QUITE. " + question.explanation;

    }

    document.getElementById("nextButton").hidden = false;

    if (currentQuestion === flightQuestions.length - 1) {

        document.getElementById("nextButton").innerText =
            "VIEW RESULTS →";

    }

}


/* NEXT QUESTION AND RESULTS */

function nextFlightQuestion() {

    if (showingResults) {

        currentQuestion = 0;

        flightScore = 0;

        showingResults = false;

        showFlightQuestion();

        return;

    }

    if (currentQuestion < flightQuestions.length - 1) {

        currentQuestion++;

        showFlightQuestion();

    } else {

        showingResults = true;

        document.getElementById("questionProgress").innerText =
            "MISSION COMPLETE";

        document.getElementById("questionTitle").innerText =
            "Training Assessment Complete";

        document.getElementById("questionText").innerText =
            "Your final score: " + flightScore +
            " / " + flightQuestions.length;

        document.getElementById("answerOptions").innerHTML = "";

        document.getElementById("feedback").innerText =
            "Assessment finished. Review your knowledge and try again to improve your score.";

        document.getElementById("nextButton").innerText =
            "RETRY MODULE →";

    }

}



/* MICROGRAVITY GAME VARIABLES */
let astronautX = 20;
let astronautY = 20;
let astronautVX = 0;
let astronautVY = 0;
let collectedObjects = 0;
let timeRemaining = 60;
let microgravityActive = false;
let microgravityInterval = null;
let microgravityFrame = null;
const microgravityKeys = new Set();

/* START MICROGRAVITY RECOVERY */
function startMicrogravity() {
    if (microgravityInterval !== null) clearInterval(microgravityInterval);
    if (microgravityFrame !== null) cancelAnimationFrame(microgravityFrame);

    collectedObjects = 0;
    timeRemaining = 60;
    astronautVX = 0;
    astronautVY = 0;
    microgravityKeys.clear();
    microgravityActive = true;

    const astronaut = document.getElementById("astronaut");
    const field = document.getElementById("spacePlayfield");
    astronautX = 18;
    astronautY = Math.max(18, field.clientHeight * 0.34);
    astronaut.style.left = astronautX + "px";
    astronaut.style.top = astronautY + "px";
    astronaut.style.transform = "rotate(0deg)";

    document.getElementById("microReport").hidden = true;
    const microAssessmentButton = document.getElementById("microAssessmentButton");
    if (microAssessmentButton) microAssessmentButton.hidden = true;
    document.querySelectorAll(".research-object").forEach(function(object) {
        object.hidden = false;
    });
    document.getElementById("microCollected").innerText = "OBJECTS: 0 / 5";
    document.getElementById("microTimer").innerText = "TIME: 60s";
    document.getElementById("microStatus").innerText = "MICROGRAVITY DRIFT ACTIVE";
    document.getElementById("microVelocity").innerText = "DRIFT: 0.0 SIM UNITS";
    document.getElementById("microStartButton").innerText = "RESTART SIMULATION →";
    field.focus();

    microgravityFrame = requestAnimationFrame(updateMicrogravityPhysics);
    microgravityInterval = setInterval(function() {
        if (!microgravityActive) return;
        timeRemaining--;
        document.getElementById("microTimer").innerText = "TIME: " + timeRemaining + "s";
        if (timeRemaining <= 0) finishMicrogravity(false);
    }, 1000);
}

/* KEYDOWN: apply small thrust while a direction is held */
function moveAstronaut(event) {
    if (!microgravityActive) return;
    const key = event.key.toLowerCase();
    const allowedKeys = ["arrowup", "arrowdown", "arrowleft", "arrowright", "w", "a", "s", "d", " "];
    if (!allowedKeys.includes(key)) return;
    event.preventDefault();
    microgravityKeys.add(key);
}

function releaseAstronautControls(event) {
    microgravityKeys.delete(event.key.toLowerCase());
}

/* INERTIA MODEL: the astronaut keeps drifting after thrust stops */
function updateMicrogravityPhysics() {
    if (!microgravityActive) {
        microgravityFrame = null;
        return;
    }

    const field = document.getElementById("spacePlayfield");
    const astronaut = document.getElementById("astronaut");
    const thrust = 0.16;
    const stabilising = microgravityKeys.has(" ");
    let inputX = 0;
    let inputY = 0;

    if (microgravityKeys.has("arrowleft") || microgravityKeys.has("a")) inputX -= 1;
    if (microgravityKeys.has("arrowright") || microgravityKeys.has("d")) inputX += 1;
    if (microgravityKeys.has("arrowup") || microgravityKeys.has("w")) inputY -= 1;
    if (microgravityKeys.has("arrowdown") || microgravityKeys.has("s")) inputY += 1;

    if (stabilising) {
        astronautVX *= 0.90;
        astronautVY *= 0.90;
    } else {
        astronautVX += inputX * thrust;
        astronautVY += inputY * thrust;
        astronautVX *= 0.997;
        astronautVY *= 0.997;
    }

    const maxSpeed = 4.4;
    const speed = Math.hypot(astronautVX, astronautVY);
    if (speed > maxSpeed) {
        astronautVX = astronautVX / speed * maxSpeed;
        astronautVY = astronautVY / speed * maxSpeed;
    }

    astronautX += astronautVX;
    astronautY += astronautVY;
    const maxX = Math.max(0, field.clientWidth - astronaut.offsetWidth);
    const maxY = Math.max(0, field.clientHeight - astronaut.offsetHeight);

    if (astronautX < 0) { astronautX = 0; astronautVX = Math.abs(astronautVX) * 0.22; }
    if (astronautX > maxX) { astronautX = maxX; astronautVX = -Math.abs(astronautVX) * 0.22; }
    if (astronautY < 0) { astronautY = 0; astronautVY = Math.abs(astronautVY) * 0.22; }
    if (astronautY > maxY) { astronautY = maxY; astronautVY = -Math.abs(astronautVY) * 0.22; }

    astronaut.style.left = astronautX + "px";
    astronaut.style.top = astronautY + "px";
    const tilt = Math.max(-12, Math.min(12, astronautVX * 2.2));
    astronaut.style.transform = "rotate(" + tilt + "deg)";
    document.getElementById("microVelocity").innerText =
        "DRIFT: " + Math.hypot(astronautVX, astronautVY).toFixed(1) + " SIM UNITS";

    checkObjectCollection();
    if (microgravityActive) microgravityFrame = requestAnimationFrame(updateMicrogravityPhysics);
    else microgravityFrame = null;
}

window.addEventListener("keydown", moveAstronaut);
window.addEventListener("keyup", releaseAstronautControls);

/* COLLECT OBJECTS */

function checkObjectCollection() {

    const astronaut = document.getElementById("astronaut");

    const playerRect = astronaut.getBoundingClientRect();

    document.querySelectorAll(".research-object:not([hidden])")
        .forEach(function(object) {

            const objectRect = object.getBoundingClientRect();

            const collision =
                playerRect.left < objectRect.right &&
                playerRect.right > objectRect.left &&
                playerRect.top < objectRect.bottom &&
                playerRect.bottom > objectRect.top;

            if (collision) {

                object.hidden = true;

                collectedObjects++;

                document.getElementById("microCollected").innerText =
                    "OBJECTS: " + collectedObjects + " / 5";

                if (collectedObjects === 5) {
                    finishMicrogravity(true);
                }

            }

        });

}


/* COMPLETE MISSION */


function finishMicrogravity(success) {

    microgravityActive = false;
    microgravityKeys.clear();
    if (microgravityFrame !== null) {
        cancelAnimationFrame(microgravityFrame);
        microgravityFrame = null;
    }

    if (microgravityInterval !== null) {
        clearInterval(microgravityInterval);
        microgravityInterval = null;
    }

    // Calculate mission score

    let missionScore = collectedObjects * 20;

    // Display report

    const report = document.getElementById("microReport");

    report.hidden = false;

    report.className = "mission-report " +
        (success ? "success" : "incomplete");

    if (success) {

        document.getElementById("reportTitle").innerText =
            "MISSION COMPLETE";

        document.getElementById("statusText").innerText =
            "MODULE COMPLETE";

        document.getElementById("missionMessage").innerText =
            "Microgravity recovery mission completed!";

    } else {

        document.getElementById("reportTitle").innerText =
            "MISSION TIME EXPIRED";

        document.getElementById("statusText").innerText =
            "MISSION INCOMPLETE";

        document.getElementById("missionMessage").innerText =
            "Training attempt completed. Review your performance.";

    }

    document.getElementById("reportScore").innerText =
        "SCORE: " + missionScore + " / 100";

    document.getElementById("reportDetails").innerText =
        "Research objects recovered: " +
        collectedObjects + " / 5. " +
        (success
            ? "All recovery objectives completed successfully."
            : "You can retry the simulation to recover the remaining objects.");

    document.getElementById("microStatus").innerText =
        success
            ? "MISSION COMPLETE!"
            : "TIME EXPIRED.";

    document.getElementById("microStartButton").innerText =
        "RETRY SIMULATION →";

    const assessmentButton = document.getElementById("microAssessmentButton");
    if (assessmentButton) assessmentButton.hidden = !success;

}

/* LUNAR SURFACE MOVEMENT MODEL */
let lunarActive = false;
let lunarX = 0;
let lunarY = 0;
let lunarBaseY = 0;
let lunarVelocityX = 0;
let lunarJumpVelocity = 0;
let lunarJumpOffset = 0;
let lunarJumpQueued = false;
let lunarCollectedCount = 0;
let lunarTime = 90;
let lunarInterval = null;
let lunarFrame = null;
const lunarKeys = new Set();

function moveLunarAstronaut(event) {
    if (!lunarActive) return;
    const key = event.key.toLowerCase();
    const allowed = ["arrowleft", "arrowright", "a", "d", "arrowup", "w", " "];
    if (!allowed.includes(key)) return;
    event.preventDefault();
    lunarKeys.add(key);
    if (key === "arrowup" || key === "w" || key === " ") lunarJumpQueued = true;
}

function releaseLunarControls(event) {
    lunarKeys.delete(event.key.toLowerCase());
}

window.addEventListener("keydown", moveLunarAstronaut);
window.addEventListener("keyup", releaseLunarControls);

/* Reduced-gravity walk and hop. Values are game-scaled, not real engineering units. */
function updateLunarPhysics() {
    if (!lunarActive) {
        lunarFrame = null;
        return;
    }

    const field = document.getElementById("lunarPlayfield");
    const astronaut = document.getElementById("lunarAstronaut");
    let direction = 0;
    if (lunarKeys.has("arrowleft") || lunarKeys.has("a")) direction -= 1;
    if (lunarKeys.has("arrowright") || lunarKeys.has("d")) direction += 1;

    lunarVelocityX += direction * 0.13;
    lunarVelocityX *= 0.88;
    lunarVelocityX = Math.max(-2.8, Math.min(2.8, lunarVelocityX));
    lunarX += lunarVelocityX;

    const maxX = Math.max(0, field.clientWidth - astronaut.offsetWidth);
    if (lunarX < 0) { lunarX = 0; lunarVelocityX = 0; }
    if (lunarX > maxX) { lunarX = maxX; lunarVelocityX = 0; }

    if (lunarJumpQueued && lunarJumpOffset >= -0.5) {
        lunarJumpVelocity = -4.7;
        lunarJumpQueued = false;
    }
    lunarJumpOffset += lunarJumpVelocity;
    lunarJumpVelocity += 0.085;
    if (lunarJumpOffset > 0) {
        lunarJumpOffset = 0;
        lunarJumpVelocity = 0;
    }

    lunarY = lunarBaseY + lunarJumpOffset;
    astronaut.style.left = lunarX + "px";
    astronaut.style.top = lunarY + "px";
    const lean = Math.max(-7, Math.min(7, lunarVelocityX * 2.1));
    astronaut.style.transform = "rotate(" + lean + "deg)";

    const movementStatus = document.getElementById("lunarMovementStatus");
    if (movementStatus) {
        movementStatus.innerText = lunarJumpOffset < -3 ? "LOW-G HOP" : "GROUND CONTACT";
    }

    checkLunarSamples();
    if (lunarActive) lunarFrame = requestAnimationFrame(updateLunarPhysics);
    else lunarFrame = null;
}

// START LUNAR MISSION

function startLunarMission() {

    const field = document.getElementById("lunarPlayfield");
    const astronaut = document.getElementById("lunarAstronaut");

    if (!field || !astronaut) {
        console.error("Lunar game HTML elements are missing.");
        return;
    }

    if (lunarInterval !== null) {
        clearInterval(lunarInterval);
    }

    lunarActive = true;
    lunarCollectedCount = 0;
    lunarTime = 90;
    lunarKeys.clear();
    lunarVelocityX = 0;
    lunarJumpVelocity = 0;
    lunarJumpOffset = 0;
    lunarJumpQueued = false;
    if (lunarFrame !== null) cancelAnimationFrame(lunarFrame);

    // The sprite stands near the surface line; hopping is simulated separately.
    lunarX = field.clientWidth * 0.18;
    const astronautHeight = astronaut.offsetHeight || 105;
    lunarBaseY = Math.max(20, field.clientHeight * 0.70 - astronautHeight);
    lunarY = lunarBaseY;

    astronaut.style.left = lunarX + "px";
    astronaut.style.top = lunarY + "px";
    astronaut.style.transform = "rotate(0deg)";
    lunarFrame = requestAnimationFrame(updateLunarPhysics);

    // Reset all three samples

    for (let i = 1; i <= 3; i++) {
        document.getElementById("lunarSample" + i).hidden = false;
    }

    // Reset mission report

    const analysisPanel = document.getElementById("sampleAnalysis");

    if (analysisPanel) {
    analysisPanel.hidden = true;
}

    document.getElementById("lunarReport").hidden = true;
    const lunarAssessmentButton = document.getElementById("lunarAssessmentButton");
    if (lunarAssessmentButton) lunarAssessmentButton.hidden = true;

    document.getElementById("lunarCollected").innerText =
        "SAMPLES: 0 / 3";

    document.getElementById("lunarTimer").innerText =
        "TIME: 90s";

    document.getElementById("lunarStatus").innerText =
        "EXPEDITION ACTIVE";

    document.getElementById("lunarStartButton").innerText =
        "RESTART EXPEDITION →";

    field.focus();

    // Start countdown

    
// LUNAR COUNTDOWN TIMER

const timerDisplay = document.getElementById("lunarTimer");

if (!timerDisplay) {
    console.error("Lunar timer display not found in HTML!");
    return;
}

// Show initial time

timerDisplay.innerText = "TIME: 90s";

// Start countdown

lunarInterval = window.setInterval(function() {

    if (!lunarActive) {
        clearInterval(lunarInterval);
        lunarInterval = null;
        return;
    }

    lunarTime--;

    timerDisplay.innerText = "TIME: " + lunarTime + "s";

    if (lunarTime <= 0) {
        finishLunarMission(false);
    }

}, 1000);


}


// CHECK SAMPLE COLLECTION

function checkLunarSamples() {
    const astronaut = document.getElementById("lunarAstronaut");
    const field = document.getElementById("lunarPlayfield");
    if (!astronaut || !field) return;

    const player = astronaut.getBoundingClientRect();

    // Use the astronaut's boot area rather than the full transparent image box.
    // The generated suit artwork has transparent margins, so strict rectangle
    // overlap can look visually correct but fail to register a sample.
    const bootX = player.left + player.width * 0.50;
    const bootY = player.bottom - Math.max(5, player.height * 0.035);

    // Samples sit slightly down inside the illustrated lunar ground. Allow a
    // small contact zone around the boots, but do not collect while in a hop.
    const grounded = lunarJumpOffset > -16;
    if (!grounded) return;

    for (let i = 1; i <= 3; i++) {
        const sample = document.getElementById("lunarSample" + i);
        if (!sample || sample.hidden) continue;

        const target = sample.getBoundingClientRect();
        const sampleX = target.left + target.width / 2;
        const sampleY = target.top + target.height / 2;

        const horizontalDistance = Math.abs(bootX - sampleX);
        const verticalDistance = Math.abs(bootY - sampleY);

        // Game-scaled pickup radius, measured from the astronaut's boots.
        const horizontalReach = Math.max(64, player.width * 0.90);
        const verticalReach = Math.max(88, player.height * 0.78);
        const inCollectionZone =
            horizontalDistance <= horizontalReach &&
            verticalDistance <= verticalReach;

        if (!inCollectionZone) continue;

        sample.hidden = true;
        lunarCollectedCount++;

        document.getElementById("lunarCollected").innerText =
            "SAMPLES: " + lunarCollectedCount + " / 3";

        const status = document.getElementById("lunarStatus");
        if (status) status.innerText = "SAMPLE " + lunarCollectedCount + " RECOVERED";

        if (lunarCollectedCount === 3) {
            finishLunarMission(true);
            return;
        }
    }
}


// FINISH LUNAR MISSION

function finishLunarMission(success) {

    if (!lunarActive) return;

    lunarActive = false;
    lunarKeys.clear();
    if (lunarFrame !== null) {
        cancelAnimationFrame(lunarFrame);
        lunarFrame = null;
    }

    clearInterval(lunarInterval);
    lunarInterval = null;

    const score = Math.round(
        (lunarCollectedCount / 3) * 100
    );

    document.getElementById("lunarReport").hidden = false;

    document.getElementById("lunarReportTitle").innerText =
        success ? "EXPEDITION COMPLETE" : "EXPEDITION INCOMPLETE";

    document.getElementById("lunarReportScore").innerText =
        "SCORE: " + score + " / 100";

    document.getElementById("lunarReportDetails").innerText =
        "Scientific samples recovered: " +
        lunarCollectedCount + " / 3. " +
        (success
            ? "All exploration objectives completed!"
            : "You can retry the expedition.");

    document.getElementById("lunarStatus").innerText =
        success ? "MISSION COMPLETE" : "TIME EXPIRED";

    document.getElementById("lunarStartButton").innerText =
        "RETRY EXPEDITION →";

    const assessmentButton = document.getElementById("lunarAssessmentButton");
    if (assessmentButton) assessmentButton.hidden = !success;

    document.getElementById("statusText").innerText =
        success ? "LUNAR MODULE COMPLETE" : "MISSION INCOMPLETE";

}

/* ====================================
   ASTRA - LUNAR SCIENCE ANALYSIS
==================================== */

let lunarAnalysisIndex = 0;
let lunarAnalysisScore = 0;
let lunarAnalysisAnswered = false;


/* SCIENTIFIC QUESTIONS */

const lunarAnalysisQuestions = [

    {
        question:
        "A dark lunar rock formed from cooled lava, commonly found in the Moon's maria. Identify the rock.",

        options: [
            "Basalt",
            "Anorthosite",
            "Regolith",
            "Granite"
        ],

        answer: 0,

        explanation:
        "Correct! Basalt is volcanic rock formed from cooled lava and occurs in the Moon's dark maria."
    },

    {
        question:
        "A light-coloured, feldspar-rich rock associated with the ancient lunar highlands. What is it?",

        options: [
            "Basalt",
            "Anorthosite",
            "Regolith",
            "Sandstone"
        ],

        answer: 1,

        explanation:
        "Correct! Anorthosite is a light-coloured rock rich in plagioclase feldspar, associated with the lunar highlands."
    },

    {
        question:
        "What is the name of the loose layer of broken rocks, minerals and dust covering much of the lunar surface?",

        options: [
            "Granite",
            "Basalt",
            "Regolith",
            "Anorthosite"
        ],

        answer: 2,

        explanation:
        "Correct! Lunar regolith is the loose surface material formed through impacts and other processes."
    }

];


/* START SCIENTIFIC ANALYSIS */

function startLunarAnalysis() {

    if (lunarInterval !== null) {
        clearInterval(lunarInterval);
        lunarInterval = null;
    }

    lunarActive = false;
    lunarKeys.clear();
    if (lunarFrame !== null) {
        cancelAnimationFrame(lunarFrame);
        lunarFrame = null;
    }

    lunarAnalysisIndex = 0;
    lunarAnalysisScore = 0;

    lunarAnalysisAnswered = false;

    document.getElementById("sampleAnalysis").hidden = false;

    document.getElementById("lunarReport").hidden = true;

    document.getElementById("lunarStatus").innerText =
        "SCIENTIFIC ANALYSIS ACTIVE";

    showLunarAnalysisQuestion();

    document.getElementById("sampleAnalysis").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* DISPLAY SCIENCE QUESTION */

function showLunarAnalysisQuestion() {

    const question =
        lunarAnalysisQuestions[lunarAnalysisIndex];

    lunarAnalysisAnswered = false;

    document.getElementById("analysisTitle").innerText =
        "SAMPLE ANALYSIS " +
        (lunarAnalysisIndex + 1) + " / 3";

    document.getElementById("analysisQuestion").innerText =
        question.question;

    document.getElementById("analysisFeedback").innerText = "";

    document.getElementById("analysisNextButton").hidden = true;

    const answerArea =
        document.getElementById("analysisOptions");

    answerArea.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button = document.createElement("button");

        button.className = "analysis-option";

        button.innerText = option;

        button.onclick = function() {
            checkLunarAnalysisAnswer(index);
        };

        answerArea.appendChild(button);

    });

}


/* CHECK SCIENTIFIC ANSWER */

function checkLunarAnalysisAnswer(selectedAnswer) {

    if (lunarAnalysisAnswered) return;

    lunarAnalysisAnswered = true;

    const question =
        lunarAnalysisQuestions[lunarAnalysisIndex];

    const buttons =
        document.querySelectorAll(".analysis-option");

    buttons.forEach(function(button) {
        button.disabled = true;
    });

    if (selectedAnswer === question.answer) {

        lunarAnalysisScore++;

        document.getElementById("analysisFeedback").innerText =
            "CORRECT! " + question.explanation;

    } else {

        document.getElementById("analysisFeedback").innerText =
            "NOT QUITE. " + question.explanation;

    }

    document.getElementById("analysisNextButton").hidden = false;

    document.getElementById("analysisNextButton").innerText =
        lunarAnalysisIndex === 2
            ? "COMPLETE ANALYSIS →"
            : "NEXT SAMPLE →";

}


/* MOVE TO NEXT QUESTION */

function nextLunarAnalysisQuestion() {

    if (!lunarAnalysisAnswered) return;

    if (lunarAnalysisIndex < lunarAnalysisQuestions.length - 1) {

        lunarAnalysisIndex++;

        showLunarAnalysisQuestion();

    } else {

        completeLunarAnalysis();

    }

}


/* FINAL SCIENCE REPORT */

function completeLunarAnalysis() {

    const score = Math.round(
        (lunarAnalysisScore / lunarAnalysisQuestions.length) * 100
    );

    document.getElementById("lunarReport").hidden = false;

    document.getElementById("lunarReportTitle").innerText =
        "LUNAR EXPEDITION COMPLETE";

    document.getElementById("lunarReportScore").innerText =
        "SCIENCE SCORE: " + score + " / 100";

    document.getElementById("lunarReportDetails").innerText =
        "Three lunar samples collected. Scientific identifications correct: " +
        lunarAnalysisScore + " / 3. " +
        (lunarAnalysisScore === 3
            ? "Excellent scientific analysis!"
            : "Review the explanations to improve your lunar geology knowledge.");

    document.getElementById("lunarStatus").innerText =
        "EXPEDITION COMPLETE";

    document.getElementById("statusText").innerText =
        "LUNAR MODULE COMPLETE";

    document.getElementById("missionMessage").innerText =
        "Lunar exploration and scientific analysis completed.";

    document.getElementById("lunarStartButton").innerText =
        "RETRY EXPEDITION →";

    document.getElementById("lunarReport").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

/* ==========================================
   ASTRA - LUNAR OUTPOST COMMAND
========================================== */

let outpostResources = {};

let outpostDayIndex = 0;

let outpostChoiceMade = false;


/* STARTING RESOURCE VALUES */

const outpostStartingResources = {
    oxygen: 80,
    water: 76,
    power: 75,
    food: 72,
    shielding: 68
};


/* FIVE MISSION DAYS */

const outpostDays = [

    {
        title: "DAY 01 - POWER ALLOCATION",

        scenario:
        "The outpost has limited electrical power available. Choose how to distribute energy between essential systems and greenhouse operations.",

        choices: [

            {
                title: "BALANCED POWER SCHEDULE",

                description:
                "Maintain essential systems and conserve energy.",

                changes: {
                    oxygen: -2,
                    power: 8,
                    food: -3
                },

                explanation:
                "Balanced scheduling preserves electrical power but slightly reduces food production."
            },

            {
                title: "PRIORITIZE GREENHOUSE",

                description:
                "Run the greenhouse at a higher capacity.",

                changes: {
                    power: -15,
                    food: 14,
                    water: -5
                },

                explanation:
                "Higher greenhouse production improves food availability but consumes more power and water."
            }

        ]

    },

    {
        title: "DAY 02 - WATER RECYCLING",

        scenario:
        "The outpost's water recycling system needs attention. Choose how to respond.",

        choices: [

            {
                title: "REPAIR WATER RECYCLER",

                description:
                "Allocate electrical power to water recovery.",

                changes: {
                    water: 16,
                    power: -10
                },

                explanation:
                "Water recycling increases available water, but operating the system consumes electrical power."
            },

            {
                title: "CONSERVE WATER",

                description:
                "Reduce water use in greenhouse operations.",

                changes: {
                    water: 6,
                    food: -8,
                    power: 7
                },

                explanation:
                "Conserving water protects the supply, but reduced greenhouse activity affects food production."
            }

        ]

    },

    {
        title: "DAY 03 - RADIATION ALERT",

        scenario:
        "Mission Control reports increased space-weather concerns. Your team must choose how to manage the outpost's radiation protection.",

        choices: [

            {
                title: "USE PROTECTED HABITAT",

                description:
                "Prioritize the outpost's shielded shelter.",

                changes: {
                    shielding: 18,
                    power: -12
                },

                explanation:
                "Using the protected habitat improves the shielding resource while requiring additional power."
            },

            {
                title: "CONTINUE EXTERIOR OPERATIONS",

                description:
                "Keep the planned surface research schedule.",

                changes: {
                    shielding: -22,
                    power: 5
                },

                explanation:
                "The decision preserves some operating power, but the simulated shielding reserve decreases."
            }

        ]

    },

    {
        title: "DAY 04 - FOOD PRODUCTION",

        scenario:
        "The greenhouse needs attention. The crew must decide whether to increase food production or conserve energy.",

        choices: [

            {
                title: "RUN GREENHOUSE LIGHTS",

                description:
                "Increase crop-growing operations.",

                changes: {
                    food: 18,
                    power: -14,
                    water: -8
                },

                explanation:
                "Additional greenhouse activity increases food production but consumes water and power."
            },

            {
                title: "USE STORED FOOD",

                description:
                "Conserve electrical power and use existing supplies.",

                changes: {
                    food: -7,
                    power: 9
                },

                explanation:
                "Using stored supplies saves power, but the available food reserve decreases."
            }

        ]

    },

    {
        title: "DAY 05 - LIFE SUPPORT MAINTENANCE",

        scenario:
        "The outpost requires routine life-support maintenance. Choose whether to schedule maintenance or postpone it.",

        choices: [

            {
                title: "PERFORM MAINTENANCE",

                description:
                "Prioritize the oxygen and water systems.",

                changes: {
                    oxygen: 16,
                    water: 8,
                    power: -12
                },

                explanation:
                "Maintenance improves the simulated life-support reserves but requires electrical power."
            },

            {
                title: "POSTPONE MAINTENANCE",

                description:
                "Conserve power for other operations.",

                changes: {
                    oxygen: -18,
                    water: -10,
                    power: 8
                },

                explanation:
                "Postponing maintenance saves power temporarily but reduces life-support reserves."
            }

        ]

    }

];


/* OPEN OUTPOST COMMAND */

function openOutpostCommand() {

    const factsLibrary = document.getElementById("factsLibrary");
    if (factsLibrary) factsLibrary.hidden = true;
    const assessmentPanel = document.getElementById("assessmentPanel");
    if (assessmentPanel) assessmentPanel.hidden = true;

    // Stop other active simulations

    if (microgravityInterval !== null) {
        clearInterval(microgravityInterval);
        microgravityInterval = null;
    }

    if (lunarInterval !== null) {
        clearInterval(lunarInterval);
        lunarInterval = null;
    }

    microgravityActive = false;
    lunarActive = false;
    microgravityKeys.clear();
    lunarKeys.clear();
    if (microgravityFrame !== null) {
        cancelAnimationFrame(microgravityFrame);
        microgravityFrame = null;
    }
    if (lunarFrame !== null) {
        cancelAnimationFrame(lunarFrame);
        lunarFrame = null;
    }

    // Hide other modules

    document.getElementById("trainingPanel").hidden = true;

    document.getElementById("microgravityPanel").hidden = true;

    document.getElementById("lunarPanel").hidden = true;

    // Show a clean Outpost start screen whenever this module is opened.

    document.getElementById("outpostPanel").hidden = false;
    document.getElementById("outpostStartButton").hidden = false;
    document.getElementById("outpostGame").hidden = true;
    document.getElementById("outpostReport").hidden = true;

    document.getElementById("missionMessage").innerText =
        "Lunar Base Alpha command system ready.";

    document.getElementById("outpostPanel").scrollIntoView({
        behavior: "smooth"
    });

}


/* UPDATE RESOURCE METERS */

function updateOutpostMeters() {

    const resources = [

        ["oxygen", "outpostOxygen"],
        ["water", "outpostWater"],
        ["power", "outpostPower"],
        ["food", "outpostFood"],
        ["shielding", "outpostShield"]

    ];

    resources.forEach(function(item) {

        const resourceName = item[0];
        const elementName = item[1];

        const value = outpostResources[resourceName];

        document.getElementById(
            elementName + "Value"
        ).innerText = value;

        document.getElementById(
            elementName + "Bar"
        ).style.width = value + "%";

    });

}


/* START NEW OUTPOST SIMULATION */

function startOutpostMission() {

    outpostResources = {
        ...outpostStartingResources
    };

    outpostDayIndex = 0;

    outpostChoiceMade = false;

    document.getElementById("outpostGame").hidden = false;

    document.getElementById("outpostReport").hidden = true;
    const outpostAssessmentButton = document.getElementById("outpostAssessmentButton");
    if (outpostAssessmentButton) outpostAssessmentButton.hidden = true;

    document.getElementById("outpostStartButton").hidden = true;

    const eventBox = document.getElementById("outpostEvent");
    if (eventBox) eventBox.hidden = true;

    const feedback = document.getElementById("outpostFeedback");
    if (feedback) feedback.innerText = "";

    updateOutpostMeters();

    renderOutpostDay();

}


/* DISPLAY CURRENT MISSION DAY */


function renderOutpostDay() {

    const day = outpostDays[outpostDayIndex];

    outpostChoiceMade = false;

    document.getElementById("outpostDayLabel").innerText =
        "MISSION DAY " + (outpostDayIndex + 1) + " / 5";

    document.getElementById("outpostDayTitle").innerText =
        day.title;

    document.getElementById("outpostScenario").innerText =
        day.scenario;

    // Clear the previous day's event and feedback before showing new choices.
    const eventBox = document.getElementById("outpostEvent");
    if (eventBox) eventBox.hidden = true;

    const feedback = document.getElementById("outpostFeedback");
    if (feedback) feedback.innerText = "";

    document.getElementById("outpostContinue").hidden = true;

    document.getElementById("outpostContinue").innerText =
        outpostDayIndex === 4
            ? "VIEW FINAL DEBRIEF →"
            : "NEXT MISSION DAY →";

    const choiceArea =
        document.getElementById("outpostChoices");

    choiceArea.innerHTML = "";

    day.choices.forEach(function(choice, index) {

        const button = document.createElement("button");

        button.className = "outpost-choice";

        button.innerHTML =
            "<strong>" + choice.title + "</strong><br>" +
            choice.description;

        button.onclick = function() {
            selectOutpostChoice(index);
        };

        choiceArea.appendChild(button);

    });

}


        /* PLAYER MAKES A DECISION */

        
        function selectOutpostChoice(choiceIndex) {

            if (outpostChoiceMade) return;

            outpostChoiceMade = true;

            const day = outpostDays[outpostDayIndex];
            const choice = day.choices[choiceIndex];

            // Apply player decision

            Object.keys(choice.changes).forEach(function(resource) {

                outpostResources[resource] += choice.changes[resource];

                outpostResources[resource] = Math.max(
                    0,
                    Math.min(100, outpostResources[resource])
                );

            });

            // Generate random event

            const randomIndex = Math.floor(
                Math.random() * outpostEvents.length
            );

            const event = outpostEvents[randomIndex];

            // Apply event effects

            Object.keys(event.changes).forEach(function(resource) {

                outpostResources[resource] += event.changes[resource];

                outpostResources[resource] = Math.max(
                    0,
                    Math.min(100, outpostResources[resource])
                );

            });

            // Update resource meters

            updateOutpostMeters();

            // Show event

            const eventBox = document.getElementById("outpostEvent");

            eventBox.hidden = false;

            document.getElementById("outpostEventTitle").innerText =
                event.title;

            document.getElementById("outpostEventDescription").innerText =
                event.description;

            // Disable decision buttons

            document.querySelectorAll(".outpost-choice").forEach(
                function(button) {
                    button.disabled = true;
                }
            );

            // Display feedback

            document.getElementById("outpostFeedback").innerText =
                "DECISION LOGGED: " +
                choice.title + ". " +
                choice.explanation;

            // Enable next day

            document.getElementById("outpostContinue").hidden = false;

        }



        /* MOVE TO NEXT MISSION DAY */

        function continueOutpostDay() {

            if (!outpostChoiceMade) return;

            if (outpostDayIndex < outpostDays.length - 1) {

                outpostDayIndex++;

                renderOutpostDay();

            } else {

                finishOutpostMission();

            }

        }


        /* FINAL OUTPOST REPORT */

        function finishOutpostMission() {

            const values = Object.values(outpostResources);

            const total = values.reduce(function(sum, value) {
                return sum + value;
            }, 0);

            const score = Math.round(total / values.length);

            // Every essential resource must remain above 25

            const stable = values.every(function(value) {
                return value >= 25;
            });

            document.getElementById("outpostReport").hidden = false;

            document.getElementById("outpostResultTitle").innerText =
                stable
                    ? "LUNAR OUTPOST STABLE"
                    : "OUTPOST NEEDS RECOVERY";

            document.getElementById("outpostFinalScore").innerText =
                "OUTPOST PERFORMANCE: " + score + " / 100";

            document.getElementById("outpostResultDetails").innerText =
                "Five mission days completed. " +
                "Oxygen: " + outpostResources.oxygen +
                ", Water: " + outpostResources.water +
                ", Power: " + outpostResources.power +
                ", Food: " + outpostResources.food +
                ", Shielding: " + outpostResources.shielding +
                ". " +
                (stable
                    ? "All resource reserves remained above the training threshold. Excellent outpost management!"
                    : "One or more resource reserves fell below the training threshold. Review your decisions and try again.");

            const assessmentButton = document.getElementById("outpostAssessmentButton");
            if (assessmentButton) assessmentButton.hidden = false;

            document.getElementById("missionMessage").innerText =
                stable
                    ? "Lunar Base Alpha completed its five-day mission."
                    : "Lunar Base Alpha requires additional resource management.";

            document.getElementById("outpostReport").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }

        /* =================================
        ASTRA - RANDOM OUTPOST EVENTS
        ================================= */

        const outpostEvents = [

            {
                title: "SOLAR PANEL DUST ACCUMULATION",

                description:
                "Dust accumulation reduces solar panel efficiency in this training scenario. Power reserves decrease by 12 points.",

                changes: {
                    power: -12
                }
            },

            {
                title: "WATER RECYCLING MAINTENANCE",

                description:
                "The water recovery system completes a maintenance cycle. Water improves by 8 points, but power decreases by 4.",

                changes: {
                    water: 8,
                    power: -4
                }
            },

            {
                title: "GREENHOUSE HARVEST",

                description:
                "A successful greenhouse harvest improves the food reserve. Food increases by 10 points and water decreases by 4.",

                changes: {
                    food: 10,
                    water: -4
                }
            },

            {
                title: "SPACE WEATHER ADVISORY",

                description:
                "The crew follows the outpost's simulated storm-protection procedure. Shielding reserve increases by 8 points while power decreases by 5.",

                changes: {
                    shielding: 8,
                    power: -5
                }
            },

            {
                title: "SYSTEM EFFICIENCY IMPROVEMENT",

                description:
                "A routine equipment optimization reduces energy consumption. Power increases by 8 points.",

                changes: {
                    power: 8
                }
            }

        ];


/* ASTRA MOBILE TOUCH INPUT
   Touch buttons feed the same control state as keyboard keys, so the game
   physics and collection rules remain shared between desktop and mobile. */
(function initialiseAstraTouchControls() {
    const touchButtons = document.querySelectorAll('[data-touch-game][data-touch-key]');

    function pressControl(button, event) {
        event.preventDefault();
        const game = button.dataset.touchGame;
        const key = button.dataset.touchKey;

        if (game === 'micro') {
            if (!microgravityActive) return;
            microgravityKeys.add(key);
        } else if (game === 'lunar') {
            if (!lunarActive) return;
            if (key === 'hop') {
                lunarJumpQueued = true;
            } else {
                lunarKeys.add(key);
            }
        }

        button.classList.add('is-pressed');
        button.setAttribute('aria-pressed', 'true');
    }

    function releaseControl(button, event) {
        if (event) event.preventDefault();
        const game = button.dataset.touchGame;
        const key = button.dataset.touchKey;

        if (game === 'micro') microgravityKeys.delete(key);
        if (game === 'lunar' && key !== 'hop') lunarKeys.delete(key);

        button.classList.remove('is-pressed');
        button.setAttribute('aria-pressed', 'false');
    }

    touchButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', 'false');
        button.addEventListener('pointerdown', function (event) {
            if (event.pointerType === 'mouse' && event.button !== 0) return;
            pressControl(button, event);
            try { button.setPointerCapture(event.pointerId); } catch (_) { /* Pointer capture is optional. */ }
        });
        button.addEventListener('pointerup', function (event) {
            releaseControl(button, event);
            try {
                if (button.hasPointerCapture(event.pointerId)) button.releasePointerCapture(event.pointerId);
            } catch (_) { /* The pointer may already have been released. */ }
        });
        button.addEventListener('pointercancel', function (event) { releaseControl(button, event); });
        button.addEventListener('lostpointercapture', function () { releaseControl(button); });
        button.addEventListener('contextmenu', function (event) { event.preventDefault(); });
    });

    function releaseAllTouchControls() {
        touchButtons.forEach(function (button) {
            releaseControl(button);
        });
    }

    window.addEventListener('blur', releaseAllTouchControls);
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) releaseAllTouchControls();
    });
})();
