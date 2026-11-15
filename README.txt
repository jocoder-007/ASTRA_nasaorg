ASTRA — REALISTIC ASTRONAUT AVATAR + MOVEMENT UPGRADE

WHAT CHANGED
1. Both Microgravity and Lunar Operations now use the same detailed EVA astronaut avatar.
2. Microgravity movement now uses thrust and inertia: hold a direction to accelerate, then drift after releasing it. Hold SPACE for a simplified stabilisation assist.
3. Lunar movement uses slower surface walking and longer low-gravity hops. Use A/D or LEFT/RIGHT to walk, and W/UP/SPACE to hop.
4. Microgravity has a stylised orbital laboratory interior and Earth observation window.
5. The HUD shows simulated drift and whether the lunar astronaut is on the ground or hopping.

INSTALL
1. Extract this ZIP.
2. Open the extracted ASTRA_Astronaut_Physics_Upgrade folder in VS Code.
3. Keep index.html, script.js, style.css, facts.js, README.txt and the assets folder together.
4. Open index.html in Chrome.
5. Test Microgravity, then Lunar Operations.

CONTROLS
Microgravity: W/A/S/D or arrow keys = thrust; hold SPACE = stabilisation assist.
Lunar Operations: A/D or LEFT/RIGHT = walk; W/UP/SPACE = hop.

IMPORTANT
This is a student educational game. The avatar is an illustrative generated visual, not an actual astronaut or NASA-provided suit model. Movement is game-scaled and simplified; it is not a flight simulator or engineering model. The lunar hop is designed to communicate reduced gravity qualitatively, not calculate a real astronaut trajectory.

For GitHub Pages, upload all updated project files and the assets folder into the repository root, preserving the folder structure.


REALISTIC BACKGROUND UPDATE
1. Microgravity uses an ISS-inspired orbital laboratory scene with an Earth-facing window.
2. Lunar Operations uses a Moon-surface scene with regolith, distant terrain, Earth, a lander, and a background crew member.
3. The playable astronaut, drifting objects, and collectable lunar samples remain separate interactive elements.
4. The two environment backgrounds are AI-generated illustrations, not actual NASA photographs and not an official NASA product.

BACKGROUND FILES
- assets/microgravity-background.jpg
- assets/lunar-background.jpg
Keep both files in the assets folder. Do not rename or move them unless you also update style.css.


ASTRA MISSION KNOWLEDGE ASSESSMENTS
----------------------------------
Each module now has a five-question assessment. Flight Systems opens its assessment directly because it is the theory-focused module. Microgravity and Lunar Operations show an assessment button after successful mission completion. Outpost Command shows it after all five simulation days are completed.

After each answer, the learner sees the correct choice and an explanation. The browser saves the best score for each module in local storage where permitted. If browser storage is restricted, a temporary in-memory record is used for the current open page session. The training log totals the best scores out of 20 across four modules.

The question bank is in assessments.js. It is based on the user's NASA-sourced ASTRA research brief. NASA has not approved or endorsed ASTRA; mission scores and simulated resource values are educational game mechanics.

To run locally, keep index.html, style.css, script.js, facts.js, assessments.js, README.txt and the assets folder together. Open index.html in a current browser.
