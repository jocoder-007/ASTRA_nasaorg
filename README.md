# ASTRA — Astronaut Training and Space Research Application

**ASTRA** is a student-built, browser-based educational space-training simulation. It introduces learners to astronaut suit systems, microgravity, lunar fieldwork, and the systems needed to support a lunar outpost. Players complete short interactive missions, explore NASA-sourced science notes, and answer knowledge assessments.

**Live website:** https://jocoder-007.github.io/ASTRA_nasaorg/  
**Source repository:** https://github.com/jocoder-007/ASTRA_nasaorg

> **Project status and attribution:** ASTRA is an independent student project. It is not developed, certified, sponsored, or endorsed by NASA. It is an educational simulation, not operational astronaut-training software.

---

## 1. Project goals

ASTRA aims to make selected space-science topics easier to explore through short, interactive activities. Its goals are to:

- introduce the basic functions of an astronaut's extravehicular activity (EVA) suit;
- demonstrate the idea of floating and drifting in microgravity;
- introduce lunar rocks, samples, regolith, and surface dust;
- explain some of the systems involved in keeping a crewed outpost operating;
- reinforce learning with short quizzes and explanations.

## 2. Main features

### Flight Systems

- An educational EVA suit systems monitor.
- A pre-EVA diagnostic sequence covering oxygen supply, suit pressure, cooling, carbon-dioxide removal, and radio communication.
- A five-question knowledge assessment.

The monitor displays simulated status indicators. It does not connect to suit sensors or reproduce real engineering limits.

### Microgravity

- An orbital-laboratory-themed training scene.
- A playable astronaut avatar and collectible research objects.
- Simplified thrust-and-inertia movement: the astronaut can continue drifting after directional input stops.
- A stabilisation control that reduces the simulated drift.
- A five-question assessment after successful mission completion.

### Lunar Operations

- A lunar-surface-themed training scene with a playable astronaut avatar.
- A sample-recovery activity involving three geological samples.
- Simplified walking and low-gravity-style hopping.
- A five-question assessment after successful mission completion.

### Outpost Command

- A five-day lunar-outpost management scenario.
- Simplified resource indicators for oxygen, water, power, food, and radiation shielding.
- Daily decisions and events designed to show how outpost systems can affect one another.
- A five-question assessment after the five-day simulation is completed.

Resource values, event probabilities, scores, timers, and penalties are game mechanics. They are not NASA measurements, engineering specifications, or predictions for a real lunar habitat.

### NASA Facts Library

The library groups research notes into eight areas:

1. Astronauts and spacesuits.
2. Microgravity and astronaut training.
3. Lunar rocks and samples.
4. Life support and water recycling.
5. Radiation protection.
6. Power for a lunar outpost.
7. Food production in space.
8. Lunar dust and surface operations.

Topic quizzes are included alongside selected facts. NASA source links are provided in the library and listed again in the References section below.

### Mission Knowledge Assessments

- Each of the four training modules has a five-question assessment.
- The complete set contains 20 questions.
- Learners receive feedback and an explanation after answering.
- ASTRA records the best score for each module in the current browser where local storage is available.
- The combined maximum score across the four module assessments is 20.

Scores stored in a browser are local to that browser and device. They are not an online account, central leaderboard, or cross-device record.

### Mobile support

The layout adapts to smaller screens and includes touch controls for the two movement missions:

- Microgravity: touch-and-hold directional controls apply thrust; hold **Stabilize** to reduce drift.
- Lunar Operations: touch-and-hold **Left** or **Right** to walk; tap **Low-G Hop** to hop.

Desktop keyboard controls remain available. Mobile performance can vary by browser and device, so the missions should be tested on the intended phones before a public demonstration.

---

## 3. Controls

| Area | Keyboard controls | Touch controls |
|---|---|---|
| Microgravity | `W`, `A`, `S`, `D` or arrow keys to apply thrust; hold `Space` to stabilise drift | Press and hold the directional pad; press and hold **Hold to Stabilize** |
| Lunar Operations | `A` / `D` or `Left` / `Right` to walk; `W`, `Up`, or `Space` to hop | Press and hold **Left** / **Right**; tap **Low-G Hop** |
| Flight Systems | Use the on-screen diagnostic and assessment buttons | Tap the on-screen diagnostic and assessment buttons |
| Outpost Command | Choose an on-screen decision and use the **Next Mission Day** button | Tap an on-screen decision and **Next Mission Day** |
| NASA Facts and assessments | Select on-screen topic tabs and answer buttons | Tap topic tabs and answer buttons |

The exact controls and instructions are also shown in the relevant mission screens.

---

## 4. Run ASTRA locally

ASTRA is a static front-end project. It does not require a database, server-side application, or build step for its current features.

1. Download or clone this repository.
2. If downloaded as a ZIP, extract the ZIP before opening the project.
3. Keep the following files and folders together in the project root:

   ```text
   ASTRA_nasaorg/
   ├── index.html
   ├── style.css
   ├── script.js
   ├── facts.js
   ├── assessments.js
   ├── README.md
   └── assets/
       ├── astra-eva-astronaut.png
       ├── microgravity-background.jpg
       └── lunar-background.jpg
   ```

4. Open `index.html` in a modern browser.
5. If your browser restricts local file behaviour, open the folder in Visual Studio Code and use a local preview server such as the Live Server extension.

**Important:** Do not move or rename the files inside `assets/` unless the corresponding image paths in the project are also updated.

## 5. Publish with GitHub Pages

The project is set up to be hosted as a static GitHub Pages site.

1. Upload the contents of the project folder to the root of the public repository. The `index.html` file must be in that root.
2. Keep the complete `assets/` folder and its file names unchanged.
3. Commit and push the changes to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose branch `main` and folder `/(root)`, then save.
7. Check the **Actions** tab and wait for the Pages deployment to complete successfully.

The current project website is: https://jocoder-007.github.io/ASTRA_nasaorg/

After changing files, refresh the site. If the previous version remains visible, perform a hard refresh (`Ctrl + Shift + R`) or try a private/incognito browser window.

---

## 6. Scientific scope and limitations

ASTRA translates selected NASA-published educational and technical material into short explanations and game activities. The science notes are intended as an introduction, not a complete technical reference.

The following distinctions are important:

- **Microgravity:** Astronauts and objects appear to float in orbit because they and their spacecraft are in shared free fall around Earth; gravity has not disappeared.
- **Underwater training:** Neutral-buoyancy training helps astronauts practise spacewalk tasks, but water resistance means it is not identical to orbital microgravity.
- **Spacesuits:** An EVA suit supports work outside a spacecraft, but it should not be described as complete protection against all space radiation.
- **Radiation shielding:** Shielding effectiveness depends on the radiation, material, and thickness. No single material should be presented as blocking every form of space radiation.
- **Lunar power:** Solar availability depends on location, terrain, and lighting conditions. Storage and other power approaches may be needed; the Moon's south-pole lighting should not be treated as continuous sunlight everywhere.
- **Space food:** Small plant-growth systems support research and can supplement food supplies; they should not be described as providing a complete crew diet.
- **Lunar dust:** Dust can affect seals, mechanisms, optical surfaces, thermal-control equipment, and solar panels. A dust-mitigation demonstration does not mean every dust problem is solved.

ASTRA's movement, resource levels, mission events, scoring, and status displays are deliberately simplified for learning and gameplay. They are not flight dynamics models, real-time telemetry, verified engineering designs, or mission planning tools. ASTRA does not connect to live NASA systems or live spacecraft data.

## 7. AI-use and visual-material disclosure

ChatGPT was used to assist with project planning, code drafting, debugging, and documentation. OpenAI image generation was used to create illustrative astronaut-avatar and environment artwork for the Microgravity and Lunar Operations scenes.

The generated artwork is illustrative. It is not NASA photography, an official NASA astronaut image, or an authenticated NASA spacesuit or spacecraft model. The project uses NASA-published material as linked research references; ASTRA itself is not a NASA product.

## 8. References

The following NASA resources support the research topics represented in ASTRA. Links are provided for readers who want to explore the original material.

### Astronauts and spacesuits

- [NASA — Spacewalk Spacesuit Basics](https://www.nasa.gov/humans-in-space/spacewalk-spacesuit-basics/)
- [NASA — Spacesuits, Volume 2](https://www.nasa.gov/reference/11-0-spacesuits-vol-2/)

### Microgravity and astronaut training

- [NASA — What Is Microgravity? (Grades 5–8)](https://www.nasa.gov/learning-resources/for-kids-and-students/what-is-microgravity-grades-5-8/)
- [NASA — Neutral Buoyancy Laboratory](https://www.nasa.gov/johnson/neutral-buoyancy-laboratory/)
- [NASA — Neutral Buoyancy Laboratory Environments](https://www.nasa.gov/podcasts/houston-we-have-a-podcast/nbl-environments/)

### Lunar rocks, samples, and regolith

- [NASA Science — Moon Composition](https://science.nasa.gov/moon/composition/)
- [NASA Science — Exploring the Moon: A Teacher's Guide (PDF)](https://science.nasa.gov/wp-content/uploads/2024/01/exploring-the-moon-teachers-guide.pdf)
- [NASA — The Lunar Regolith (technical resource)](https://www.nasa.gov/wp-content/uploads/2019/04/05_1_snoble_thelunarregolith.pdf)

### Life support and water recycling

- [NASA — Environmental Control and Life Support Systems (ECLSS)](https://www.nasa.gov/reference/environmental-control-and-life-support-systems-eclss/)
- [NASA — Water Recovery Systems](https://www.nasa.gov/ames/space-biosciences/water-recovery-systems/)

### Radiation protection

- [NASA Science — Sources of Ionizing Radiation in Interplanetary Space](https://science.nasa.gov/resource/sources-of-ionizing-radiation-in-interplanetary-space/)
- [NASA — Space Radiation](https://www.nasa.gov/hrp/hazard-space-radiation/)
- [NASA Science — How NASA Will Protect Astronauts from Space Radiation at the Moon](https://science.nasa.gov/science-research/heliophysics/how-nasa-will-protect-astronauts-from-space-radiation-at-the-moon/)

### Lunar power and outpost systems

- [NASA — Moonbase Systems](https://www.nasa.gov/moonbase-systems/)
- [NASA — Moonbase Environment](https://www.nasa.gov/reference/moonbase-environment/)

### Food production in space

- [NASA — Growing Plants in Space](https://www.nasa.gov/exploration-research-and-technology/growing-plants-in-space/)
- [NASA — Veggie: Growing Plants on the International Space Station (fact sheet)](https://www.nasa.gov/wp-content/uploads/2023/03/veggie-fact-sheet-508.pdf)

### Lunar dust and surface operations

- [NASA — NASA Technology Helps Guard Against Lunar Dust](https://www.nasa.gov/general/nasa-technology-helps-guard-against-lunar-dust/)
- [NASA — Electrodynamic Dust Shield Successfully Repels Lunar Regolith on the Moon](https://www.nasa.gov/image-article/nasas-dust-shield-successfully-repels-lunar-regolith-on-moon/)

---

## 9. Credits

- **Project:** ASTRA — Astronaut Training and Space Research Application.
- **Hosting:** GitHub Pages.
- **Science references:** NASA resources linked above.
- **Development assistance:** ChatGPT.
- **Illustrative visual generation:** OpenAI image generation.

For questions about the project, use the contact information supplied by the ASTRA team in its project submission.
