/* Topic 2 — Structure and functions in living organisms, part 1 (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "2a", group: 2, title: "Cells and levels of organisation",
  summary: "Organelles in plant, animal and bacterial cells, specialised cells, stem cells and levels of organisation.",
  fact: "There are roughly 30 trillion human cells in your body, and about as many bacterial cells living on and in you.",
  notes: `
<h3>Levels of organisation</h3>
<p><b>Organelles → cells → tissues → organs → organ systems → organism</b></p>
<ul>
<li><b>Tissue</b>: a group of similar cells working together, e.g. muscle tissue.</li>
<li><b>Organ</b>: several tissues working together, e.g. the stomach or a leaf.</li>
<li><b>Organ system</b>: organs working together, e.g. the digestive system.</li>
</ul>
<h3>Cell structures</h3>
<table>
<tr><th>Structure</th><th>Function</th><th>Animal</th><th>Plant</th></tr>
<tr><td>Nucleus</td><td>Contains genetic material (DNA); controls the cell</td><td>✓</td><td>✓</td></tr>
<tr><td>Cytoplasm</td><td>Where most chemical reactions happen (enzymes here)</td><td>✓</td><td>✓</td></tr>
<tr><td>Cell membrane</td><td>Controls what enters and leaves the cell</td><td>✓</td><td>✓</td></tr>
<tr><td>Mitochondria</td><td>Site of aerobic respiration, releasing energy</td><td>✓</td><td>✓</td></tr>
<tr><td>Ribosomes</td><td>Site of protein synthesis</td><td>✓</td><td>✓</td></tr>
<tr><td>Cell wall (cellulose)</td><td>Strengthens and supports the cell</td><td>✗</td><td>✓</td></tr>
<tr><td>Chloroplasts</td><td>Absorb light for photosynthesis (contain chlorophyll)</td><td>✗</td><td>✓</td></tr>
<tr><td>Large permanent vacuole</td><td>Contains cell sap; keeps the cell turgid</td><td>✗</td><td>✓</td></tr>
</table>
<p>Bacterial cells have no nucleus: their DNA is a circular chromosome, and some have plasmids. They have a cell wall, membrane, cytoplasm and ribosomes.</p>
<h3>Specialised cells</h3>
<ul>
<li><b>Red blood cell</b>: no nucleus and a biconcave shape, giving more room for haemoglobin and a large surface area.</li>
<li><b>Root hair cell</b>: long extension for a large surface area to absorb water and ions.</li>
<li><b>Sperm cell</b>: tail for swimming, many mitochondria, and enzymes in the head.</li>
<li><b>Palisade cell</b>: packed with chloroplasts for photosynthesis.</li>
</ul>
<h3>Stem cells</h3>
<ul>
<li><b>Stem cells</b> are unspecialised cells that can divide and <b>differentiate</b> into different cell types.</li>
<li><b>Embryonic stem cells</b> can become almost any cell. <b>Adult stem cells</b> (e.g. in bone marrow) can become only a few types. In plants, <b>meristems</b> at root and shoot tips contain stem cells.</li>
<li>Possible uses: replacing damaged cells (e.g. treating diabetes or paralysis). Concerns include ethical objections to using embryos, the risk of rejection, and the risk of tumours.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Using a microscope</span>Start on the lowest power objective, focus with the coarse focus, then switch to higher power and use the fine focus. Magnification = image size ÷ actual size. Convert units: 1 mm = 1000 µm.</div>
`,
  flashcards: [
    ["Levels of organisation", "Organelles → cells → tissues → organs → organ systems → organism"],
    ["Function of mitochondria", "Site of aerobic respiration"],
    ["Function of ribosomes", "Protein synthesis"],
    ["Three structures in plant cells but not animal cells", "Cell wall, chloroplasts, large permanent vacuole"],
    ["What is the plant cell wall made of?", "Cellulose"],
    ["Function of the cell membrane", "Controls what enters and leaves the cell"],
    ["Stem cell", "An unspecialised cell that can divide and differentiate into other cell types"],
    ["Where are plant stem cells found?", "Meristems (root and shoot tips)"],
    ["Magnification equation", "magnification = image size ÷ actual size"],
    ["How many micrometres in a millimetre?", "1000"]
  ],
  quiz: [
    { q: "Which structure is found in plant cells but NOT animal cells?", o: ["Chloroplast", "Mitochondrion", "Ribosome", "Nucleus"], a: 0, e: "" },
    { q: "Where does aerobic respiration happen?", o: ["Mitochondria", "Ribosomes", "Nucleus", "Vacuole"], a: 0, e: "" },
    { q: "A group of similar cells working together is a…", o: ["Tissue", "Organ", "Organ system", "Organelle"], a: 0, e: "" },
    { q: "An image is 5 mm long and the real cell is 0.05 mm. What is the magnification?", o: ["× 100", "× 10", "× 0.01", "× 250"], a: 0, e: "5 ÷ 0.05" },
    { q: "Why do red blood cells have no nucleus?", o: ["More space for haemoglobin", "They don't need DNA to divide", "To make them heavier", "To photosynthesise"], a: 0, e: "" },
    { q: "Which type of stem cell can become almost any type of cell?", o: ["Embryonic", "Adult bone marrow", "Root hair", "Red blood cell"], a: 0, e: "" },
    { q: "What controls what enters and leaves a cell?", o: ["Cell membrane", "Cell wall", "Cytoplasm", "Vacuole"], a: 0, e: "The cell wall is fully permeable." }
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Biological molecules and enzymes",
  summary: "Carbohydrates, proteins and lipids, food tests, and how enzymes work.",
  fact: "Catalase, an enzyme in your liver, can break down millions of hydrogen peroxide molecules every second.",
  notes: `
<h3>Large molecules from small units</h3>
<table>
<tr><th>Molecule</th><th>Elements</th><th>Made from</th></tr>
<tr><td>Carbohydrates (starch, glycogen)</td><td>C, H, O</td><td>Simple sugars such as glucose</td></tr>
<tr><td>Proteins</td><td>C, H, O, N</td><td>Amino acids</td></tr>
<tr><td>Lipids (fats and oils)</td><td>C, H, O</td><td>Fatty acids and glycerol</td></tr>
</table>
<h3>Food tests</h3>
<table>
<tr><th>Test for</th><th>Method</th><th>Positive result</th></tr>
<tr><td>Starch</td><td>Add iodine solution</td><td>Orange-brown → blue-black</td></tr>
<tr><td>Glucose (reducing sugar)</td><td>Add Benedict's solution and heat in a water bath</td><td>Blue → green, yellow or brick-red (more sugar, redder)</td></tr>
<tr><td>Protein</td><td>Add biuret solution</td><td>Blue → purple/lilac</td></tr>
<tr><td>Lipids</td><td>Shake with ethanol, then add water</td><td>Cloudy white emulsion</td></tr>
</table>
<h3>Enzymes</h3>
<ul>
<li>Enzymes are <b>biological catalysts</b>. They speed up reactions without being used up. They are proteins.</li>
<li>Each enzyme has an <b>active site</b> with a specific shape. Only one substrate fits (the <b>lock and key</b> model), forming an enzyme–substrate complex.</li>
<li><b>Temperature</b>: rate increases up to the <b>optimum</b> (about 37 °C for human enzymes), because particles collide more. Above it, the active site changes shape and the enzyme is <b>denatured</b>, so the substrate no longer fits.</li>
<li><b>pH</b>: each enzyme has an optimum pH. Pepsin works best at about pH 2, and most others around pH 7. Extreme pH denatures the enzyme.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: effect of temperature on enzyme activity</span>Mix starch and amylase in water baths at different temperatures. Every 30 s, put a drop on a spotting tile with iodine. Record the time until iodine stays orange (no starch left). Shorter time = faster rate. Keep the volumes, concentrations and pH the same.</div>
`,
  flashcards: [
    ["Proteins are made of…", "Amino acids"],
    ["Lipids are made of…", "Fatty acids and glycerol"],
    ["Starch and glycogen are made of…", "Glucose"],
    ["Test for starch", "Iodine: orange-brown → blue-black"],
    ["Test for glucose", "Benedict's + heat: blue → brick red"],
    ["Test for protein", "Biuret: blue → purple"],
    ["Enzyme", "A biological catalyst (a protein) that speeds up reactions"],
    ["Active site", "The part of an enzyme where the substrate fits"],
    ["Denatured", "The active site has changed shape, so the substrate no longer fits"],
    ["Optimum pH of pepsin", "About 2"]
  ],
  quiz: [
    { q: "Which reagent tests for protein?", o: ["Biuret", "Iodine", "Benedict's", "Ethanol"], a: 0, e: "" },
    { q: "What happens to an enzyme above its optimum temperature?", o: ["Its active site changes shape (denatured)", "It speeds up forever", "It is used up", "It becomes a carbohydrate"], a: 0, e: "" },
    { q: "Iodine turns blue-black. What is present?", o: ["Starch", "Glucose", "Protein", "Fat"], a: 0, e: "" },
    { q: "What are the building blocks of proteins?", o: ["Amino acids", "Glucose", "Fatty acids", "Glycerol"], a: 0, e: "" },
    { q: "Which test needs heating?", o: ["Benedict's test for glucose", "Iodine test", "Biuret test", "Emulsion test"], a: 0, e: "" },
    { q: "Why does each enzyme only work on one substrate?", o: ["Its active site has a specific shape", "It is very large", "It contains DNA", "It is a lipid"], a: 0, e: "" },
    { q: "Which element is in proteins but not carbohydrates?", o: ["Nitrogen", "Carbon", "Hydrogen", "Oxygen"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Movement of substances",
  summary: "Diffusion, osmosis and active transport, and factors affecting them.",
  fact: "Oxygen diffuses from your alveoli into your blood across a barrier just one cell thick: about 1/100 of the thickness of a sheet of paper.",
  notes: `
<h3>Diffusion</h3>
<p>The <b>net movement of particles from an area of higher concentration to an area of lower concentration</b>, down a concentration gradient. It is passive: no energy is needed. Example: O<sub>2</sub> into blood in the lungs, CO<sub>2</sub> into leaves.</p>
<h3>Osmosis</h3>
<p>The <b>net movement of water molecules from a dilute solution to a more concentrated solution</b> (from high to low water potential) across a <b>partially permeable membrane</b>.</p>
<ul>
<li>Animal cells in pure water swell and may burst. In concentrated solutions they shrink.</li>
<li>Plant cells in water become <b>turgid</b>: the cell wall stops them bursting. In concentrated solutions they become <b>flaccid</b>, and the membrane may pull away from the wall (<b>plasmolysis</b>).</li>
</ul>
<h3>Active transport</h3>
<p>Movement of substances <b>against</b> a concentration gradient (low → high), using <b>energy from respiration</b> and carrier proteins. Example: root hair cells taking up mineral ions from dilute soil water.</p>
<h3>Factors affecting the rate of movement</h3>
<ul>
<li><b>Surface area to volume ratio</b>: larger SA:V gives faster exchange. Small cells exchange quickly; large organisms need exchange surfaces and transport systems.</li>
<li><b>Distance</b>: shorter diffusion distances are faster (thin membranes).</li>
<li><b>Temperature</b>: higher temperature means faster particles.</li>
<li><b>Concentration gradient</b>: a steeper gradient is faster.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: osmosis in potato</span>Cut equal potato cylinders, blot and weigh them. Put them in sucrose solutions of different concentrations for 30 minutes, then blot and reweigh. Calculate % change in mass and plot it against concentration. Where the line crosses zero, the solution matches the concentration of the potato cells.</div>
`,
  flashcards: [
    ["Diffusion", "Net movement of particles from high to low concentration"],
    ["Osmosis", "Net movement of water from a dilute to a concentrated solution through a partially permeable membrane"],
    ["Active transport", "Movement against a concentration gradient using energy from respiration"],
    ["Turgid", "A plant cell swollen with water, pressing against its cell wall"],
    ["Plasmolysis", "Cell membrane pulls away from the cell wall after water loss"],
    ["Which process needs energy?", "Active transport"],
    ["Effect of a larger surface area to volume ratio", "Faster exchange of substances"],
    ["% change in mass", "(final − initial) ÷ initial × 100"]
  ],
  quiz: [
    { q: "Which process needs energy from respiration?", o: ["Active transport", "Diffusion", "Osmosis", "All of them"], a: 0, e: "" },
    { q: "A potato cylinder in concentrated sugar solution will…", o: ["Lose mass", "Gain mass", "Stay the same", "Burst"], a: 0, e: "Water leaves by osmosis." },
    { q: "Osmosis is the movement of…", o: ["Water", "Glucose", "Ions", "Oxygen"], a: 0, e: "" },
    { q: "Why don't plant cells burst in pure water?", o: ["The cell wall resists expansion", "They have no vacuole", "They lose water", "They do active transport"], a: 0, e: "" },
    { q: "A potato goes from 2.0 g to 2.5 g. What is the % change?", o: ["+25%", "+20%", "−25%", "+0.5%"], a: 0, e: "0.5 ÷ 2.0 × 100" },
    { q: "How do root hair cells absorb mineral ions from dilute soil water?", o: ["Active transport", "Osmosis", "Diffusion", "Evaporation"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2d", group: 2, title: "Nutrition in plants",
  summary: "Photosynthesis, limiting factors, leaf structure and mineral ions.",
  fact: "Almost all the oxygen you breathe was released by photosynthesis, and about half of it comes from tiny ocean algae.",
  notes: `
<h3>Photosynthesis</h3>
<p>Plants make glucose from carbon dioxide and water, using <b>light energy</b> absorbed by <b>chlorophyll</b>.</p>
<div class="eq">carbon dioxide + water → glucose + oxygen</div>
<div class="eq">6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></div>
<p>Glucose is used for respiration, converted to <b>starch</b> for storage, to <b>cellulose</b> for cell walls, to <b>proteins</b> (with nitrate ions), and to sucrose for transport.</p>
<h3>Limiting factors</h3>
<p>The rate of photosynthesis is limited by whichever factor is in shortest supply: <b>light intensity</b>, <b>CO<sub>2</sub> concentration</b> or <b>temperature</b>. On a graph, where the line levels off, another factor has become limiting.</p>
<h3>Leaf adaptations</h3>
<ul>
<li>Broad and thin: large surface area for light, and short diffusion distance for gases.</li>
<li>Palisade layer near the top, packed with chloroplasts.</li>
<li>Spongy mesophyll with air spaces for gas diffusion.</li>
<li>Stomata (opened and closed by guard cells) let CO<sub>2</sub> in and O<sub>2</sub> out.</li>
<li>Veins (xylem and phloem) bring water and carry sugars away.</li>
<li>Waxy cuticle reduces water loss.</li>
</ul>
<h3>Mineral ions</h3>
<ul>
<li><b>Magnesium</b>: needed to make chlorophyll. Shortage causes yellow leaves.</li>
<li><b>Nitrate</b>: needed to make proteins (amino acids). Shortage causes stunted growth.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practicals</span>
<ul>
<li><b>Testing a leaf for starch</b>: boil in water (kills the cells), then boil in ethanol in a water bath (removes chlorophyll), rinse, and add iodine. Blue-black means starch. Destarch plants first by keeping them in the dark for 48 h. Variegated leaves show starch only in green parts, so chlorophyll is needed. Covering part of a leaf shows light is needed. Using soda lime shows CO<sub>2</sub> is needed.</li>
<li><b>Light intensity and rate</b>: count oxygen bubbles from pondweed at different distances from a lamp. Use a heat shield (or water bath) to keep the temperature constant.</li>
</ul></div>
`,
  flashcards: [
    ["Word equation for photosynthesis", "Carbon dioxide + water → glucose + oxygen (light, chlorophyll)"],
    ["Balanced equation for photosynthesis", "6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>"],
    ["Limiting factors of photosynthesis", "Light intensity, CO<sub>2</sub> concentration, temperature"],
    ["Why are leaves thin?", "Short diffusion distance for gases"],
    ["Function of stomata", "Let CO<sub>2</sub> in and O<sub>2</sub> and water vapour out"],
    ["Why do plants need magnesium?", "To make chlorophyll"],
    ["Why do plants need nitrate?", "To make amino acids and proteins"],
    ["Why boil a leaf in ethanol in the starch test?", "To remove the chlorophyll so the colour change is visible"],
    ["How is a plant destarched?", "Keep it in the dark for 48 hours"]
  ],
  quiz: [
    { q: "Which gas is released by photosynthesis?", o: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], a: 0, e: "" },
    { q: "A plant has yellow leaves. Which ion is it likely to be short of?", o: ["Magnesium", "Nitrate", "Sodium", "Calcium"], a: 0, e: "" },
    { q: "Increasing light intensity stops increasing the rate. Why?", o: ["Another factor, like CO<sub>2</sub>, is now limiting", "The plant is dead", "Light is too dim", "Chlorophyll is used up"], a: 0, e: "" },
    { q: "Why is the leaf boiled in ethanol in the starch test?", o: ["To remove chlorophyll", "To add starch", "To make it green", "To kill bacteria"], a: 0, e: "" },
    { q: "Which leaf layer contains the most chloroplasts?", o: ["Palisade mesophyll", "Spongy mesophyll", "Upper epidermis", "Cuticle"], a: 0, e: "" },
    { q: "What is glucose stored as in plants?", o: ["Starch", "Glycogen", "Cellulose", "Protein"], a: 0, e: "" },
    { q: "Why is a heat shield used in the pondweed experiment?", o: ["To keep temperature constant", "To give more light", "To add CO<sub>2</sub>", "To kill the plant"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2e", group: 2, title: "Nutrition in humans",
  summary: "A balanced diet, the digestive system, digestive enzymes, bile and absorption.",
  fact: "Your stomach lining is replaced every few days, so the acid inside doesn't digest you.",
  notes: `
<h3>A balanced diet</h3>
<table>
<tr><th>Nutrient</th><th>Sources</th><th>Function</th></tr>
<tr><td>Carbohydrate</td><td>Bread, rice, pasta</td><td>Energy</td></tr>
<tr><td>Protein</td><td>Meat, fish, eggs, beans</td><td>Growth and repair</td></tr>
<tr><td>Lipid</td><td>Butter, oil, nuts</td><td>Energy store and insulation</td></tr>
<tr><td>Dietary fibre</td><td>Vegetables, wholegrain cereals</td><td>Keeps food moving through the gut (prevents constipation)</td></tr>
<tr><td>Vitamin A</td><td>Liver, carrots</td><td>Healthy eyes (night vision)</td></tr>
<tr><td>Vitamin C</td><td>Citrus fruit</td><td>Healthy skin and gums (prevents scurvy)</td></tr>
<tr><td>Vitamin D</td><td>Oily fish, sunlight on skin</td><td>Absorbing calcium for bones (prevents rickets)</td></tr>
<tr><td>Calcium</td><td>Milk, cheese</td><td>Bones and teeth</td></tr>
<tr><td>Iron</td><td>Red meat, spinach</td><td>Making haemoglobin (prevents anaemia)</td></tr>
<tr><td>Water</td><td>Drinks, food</td><td>Needed for chemical reactions and transport</td></tr>
</table>
<p>Energy needs depend on <b>activity level, age, and pregnancy</b>.</p>
<h3>The digestive system</h3>
<p>Mouth → oesophagus → stomach → small intestine (duodenum then ileum) → large intestine (colon) → rectum → anus. The pancreas and liver add secretions.</p>
<ul>
<li><b>Ingestion</b> (taking food in), <b>digestion</b> (breaking large insoluble molecules into small soluble ones), <b>absorption</b> (into the blood), <b>assimilation</b> (used by cells), <b>egestion</b> (removing faeces).</li>
<li><b>Peristalsis</b>: waves of muscle contraction push food along the gut.</li>
</ul>
<h3>Digestive enzymes</h3>
<table>
<tr><th>Enzyme</th><th>Breaks down</th><th>Into</th><th>Made in</th></tr>
<tr><td>Amylase</td><td>Starch</td><td>Maltose (then glucose)</td><td>Salivary glands, pancreas</td></tr>
<tr><td>Protease (e.g. pepsin)</td><td>Proteins</td><td>Amino acids</td><td>Stomach, pancreas</td></tr>
<tr><td>Lipase</td><td>Lipids</td><td>Fatty acids and glycerol</td><td>Pancreas</td></tr>
</table>
<h3>Bile</h3>
<p>Made in the <b>liver</b> and stored in the <b>gall bladder</b>. It <b>neutralises stomach acid</b> (giving the alkaline conditions small-intestine enzymes need) and <b>emulsifies fats</b> into small droplets, increasing the surface area for lipase.</p>
<h3>Absorption in the ileum</h3>
<p>Villi give a huge surface area. They have a wall one cell thick, a good blood supply (capillaries) and lacteals for fat absorption, and their cells have microvilli.</p>
<div class="box box-prac"><span class="box-title">🔬 Practical: energy in food</span>Burn a known mass of food under a boiling tube of water and measure the temperature rise. Energy (J) = mass of water (g) × 4.2 × temperature rise. Divide by the mass of food to get J/g. This underestimates the true value because heat is lost.</div>
`,
  flashcards: [
    ["Function of protein in the diet", "Growth and repair"],
    ["Deficiency of vitamin C", "Scurvy"],
    ["Deficiency of iron", "Anaemia"],
    ["Function of dietary fibre", "Keeps food moving through the gut; prevents constipation"],
    ["Amylase breaks down…", "Starch into maltose"],
    ["Lipase breaks down…", "Lipids into fatty acids and glycerol"],
    ["Where is bile made and stored?", "Made in the liver, stored in the gall bladder"],
    ["Two jobs of bile", "Neutralises stomach acid and emulsifies fats"],
    ["Peristalsis", "Waves of muscle contraction that push food along the gut"],
    ["Adaptations of villi", "Large surface area, thin wall, good blood supply, microvilli, lacteal"],
    ["Energy in food equation", "mass of water × 4.2 × temperature rise"]
  ],
  quiz: [
    { q: "Which enzyme digests fats?", o: ["Lipase", "Amylase", "Protease", "Maltase"], a: 0, e: "" },
    { q: "Where is most digested food absorbed?", o: ["Small intestine (ileum)", "Stomach", "Large intestine", "Oesophagus"], a: 0, e: "" },
    { q: "What does bile do to fats?", o: ["Emulsifies them into small droplets", "Digests them into glucose", "Absorbs them", "Makes them acidic"], a: 0, e: "" },
    { q: "Lack of vitamin D can cause…", o: ["Rickets", "Scurvy", "Anaemia", "Night blindness"], a: 0, e: "" },
    { q: "Burning 1 g of food heats 20 g of water by 15 °C. How much energy was released?", o: ["1260 J", "300 J", "84 J", "630 J"], a: 0, e: "20 × 4.2 × 15" },
    { q: "What is the stomach's role in digestion?", o: ["Protease digests proteins in acidic conditions", "It absorbs glucose", "It makes bile", "It digests fats only"], a: 0, e: "" },
    { q: "Why is fibre important?", o: ["It keeps food moving through the gut", "It provides lots of energy", "It builds muscle", "It carries oxygen"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2f", group: 2, title: "Respiration",
  summary: "Aerobic and anaerobic respiration in animals, plants and yeast.",
  fact: "During a sprint, your muscles can produce lactic acid faster than your blood can clear it. That's the burn you feel.",
  notes: `
<h3>What respiration is</h3>
<p>Respiration is a series of chemical reactions in cells that <b>releases energy from glucose</b>. The energy is used for muscle contraction, making large molecules, active transport, and keeping warm. Respiration happens in <b>every living cell</b>, all the time. It is not the same as breathing.</p>
<h3>Aerobic respiration (with oxygen)</h3>
<div class="eq">glucose + oxygen → carbon dioxide + water</div>
<div class="eq">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O</div>
<p>It happens mostly in <b>mitochondria</b> and releases a lot of energy.</p>
<h3>Anaerobic respiration (without oxygen)</h3>
<div class="eq">Animals: glucose → lactic acid</div>
<div class="eq">Plants and yeast: glucose → ethanol + carbon dioxide</div>
<ul>
<li>It releases much <b>less energy</b> than aerobic respiration.</li>
<li>In muscles during hard exercise, lactic acid builds up, causing fatigue and an <b>oxygen debt</b>. Extra oxygen is needed afterwards to break down the lactic acid, which is why you keep breathing hard.</li>
<li>Anaerobic respiration in yeast is called <b>fermentation</b> and is used to make bread (CO<sub>2</sub> makes dough rise) and alcoholic drinks.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: respiration in germinating seeds</span>Put germinating seeds and boiled (dead) seeds in insulated flasks with thermometers. The germinating seeds' flask gets warmer, because respiration releases energy as heat. Use disinfectant to stop microbes respiring on the dead seeds.</div>
`,
  flashcards: [
    ["Respiration", "Chemical reactions in cells that release energy from glucose"],
    ["Aerobic respiration word equation", "Glucose + oxygen → carbon dioxide + water"],
    ["Aerobic respiration balanced equation", "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> → 6CO<sub>2</sub> + 6H<sub>2</sub>O"],
    ["Anaerobic respiration in animals", "Glucose → lactic acid"],
    ["Anaerobic respiration in yeast", "Glucose → ethanol + carbon dioxide"],
    ["Which releases more energy: aerobic or anaerobic?", "Aerobic"],
    ["Oxygen debt", "Extra oxygen needed after exercise to break down lactic acid"],
    ["Where does aerobic respiration mainly happen?", "Mitochondria"]
  ],
  quiz: [
    { q: "What is produced by anaerobic respiration in human muscles?", o: ["Lactic acid", "Ethanol", "Carbon dioxide and water", "Oxygen"], a: 0, e: "" },
    { q: "Why does bread dough rise?", o: ["Yeast releases CO<sub>2</sub> by fermentation", "Yeast releases oxygen", "Lactic acid expands", "Water evaporates"], a: 0, e: "" },
    { q: "Which is NOT a product of aerobic respiration?", o: ["Lactic acid", "Water", "Carbon dioxide", "Energy released"], a: 0, e: "" },
    { q: "Why do you keep breathing hard after a race?", o: ["To repay the oxygen debt", "To cool down only", "To make more lactic acid", "To photosynthesise"], a: 0, e: "" },
    { q: "Which cells respire?", o: ["All living cells", "Only muscle cells", "Only animal cells", "Only at night"], a: 0, e: "" },
    { q: "Why are the dead seeds treated with disinfectant?", o: ["To stop microorganisms respiring on them", "To make them germinate", "To kill the live seeds", "To keep them warm"], a: 0, e: "" }
  ]
});
