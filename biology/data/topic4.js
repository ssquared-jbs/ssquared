/* Topic 4 — Ecology and the environment (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "4a", group: 4, title: "The organism in the environment",
  summary: "Ecological terms, sampling with quadrats, and biotic and abiotic factors.",
  fact: "A single handful of healthy soil can contain more living organisms than there are people on Earth.",
  notes: `
<h3>Key terms</h3>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Population</td><td>All the organisms of one species in an area</td></tr>
<tr><td>Community</td><td>All the populations of different species in an area</td></tr>
<tr><td>Habitat</td><td>The place where an organism lives</td></tr>
<tr><td>Ecosystem</td><td>A community and its physical environment, interacting</td></tr>
</table>
<h3>Factors affecting populations</h3>
<ul>
<li><b>Biotic</b> (living): food availability, predators, pathogens, competition.</li>
<li><b>Abiotic</b> (non-living): temperature, light, water, pH, oxygen, mineral ions.</li>
</ul>
<h3>Sampling with quadrats</h3>
<div class="box box-prac"><span class="box-title">🔬 Practicals</span>
<ul>
<li><b>Population size</b>: place quadrats at <b>random</b> (use random-number coordinates to avoid bias), count the organisms in each, and find the mean. Estimated population = mean per quadrat × (total area ÷ quadrat area).</li>
<li><b>Distribution</b>: use a <b>transect</b>, a line across a changing habitat (e.g. from a hedge into a field), placing quadrats at regular intervals and recording species and abiotic factors such as light.</li>
</ul></div>
<p>More quadrats give a more <b>representative</b> estimate.</p>
<h3>Biodiversity</h3>
<p>The variety of species in an area. High biodiversity makes an ecosystem more stable.</p>
`,
  flashcards: [
    ["Population", "All organisms of one species in an area"],
    ["Community", "All populations of different species in an area"],
    ["Ecosystem", "A community interacting with its physical environment"],
    ["Biotic factor", "A living factor, e.g. predators or disease"],
    ["Abiotic factor", "A non-living factor, e.g. temperature or light"],
    ["Why place quadrats randomly?", "To avoid bias and get a representative sample"],
    ["Estimating population size", "Mean per quadrat × (total area ÷ quadrat area)"],
    ["Transect", "A line along which quadrats are placed to study changing distribution"]
  ],
  quiz: [
    { q: "Which is an abiotic factor?", o: ["Light intensity", "Predators", "Disease", "Competition"], a: 0, e: "" },
    { q: "A mean of 4 daisies per 0.25 m² quadrat, field 100 m². Estimated population?", o: ["1600", "400", "25", "100"], a: 0, e: "4 × (100 ÷ 0.25)" },
    { q: "All the organisms of one species in a habitat form a…", o: ["Population", "Community", "Ecosystem", "Biome"], a: 0, e: "" },
    { q: "How do you study how species change across a habitat?", o: ["Use a transect", "Use one random quadrat", "Count only the largest plants", "Use a potometer"], a: 0, e: "" },
    { q: "Why use random coordinates for quadrats?", o: ["To avoid bias", "To save time", "To find rare plants", "To make it harder"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Feeding relationships",
  summary: "Food chains and webs, trophic levels, pyramids and energy transfer.",
  fact: "Only around 10% of the energy at one trophic level reaches the next, which is why big predators are rare.",
  notes: `
<h3>Food chains and webs</h3>
<p>Arrows show the direction of <b>energy transfer</b>: grass → rabbit → fox.</p>
<table>
<tr><th>Trophic level</th><th>Name</th></tr>
<tr><td>1</td><td><b>Producer</b> (plant or alga that photosynthesises)</td></tr>
<tr><td>2</td><td><b>Primary consumer</b> (herbivore)</td></tr>
<tr><td>3</td><td><b>Secondary consumer</b></td></tr>
<tr><td>4</td><td><b>Tertiary consumer</b></td></tr>
</table>
<p><b>Decomposers</b> (bacteria and fungi) break down dead material and waste, recycling nutrients. A <b>food web</b> shows interlinked food chains. A change in one population affects many others.</p>
<h3>Ecological pyramids</h3>
<ul>
<li><b>Pyramid of numbers</b>: the number of organisms at each level. It can be an odd shape, e.g. one tree supporting many insects.</li>
<li><b>Pyramid of biomass</b>: the dry mass of organisms at each level. It is almost always pyramid-shaped.</li>
<li><b>Pyramid of energy</b>: the energy at each level. It is <b>always</b> pyramid-shaped.</li>
</ul>
<h3>Energy transfer</h3>
<p>Only about <b>10%</b> of the energy is passed to the next level. The rest is lost through <b>respiration</b> (released as heat), <b>movement</b>, and material that isn't eaten or digested (e.g. bones, faeces). That's why food chains rarely have more than 4 or 5 levels.</p>
<div class="eq">efficiency = energy transferred to next level ÷ energy available × 100%</div>
`,
  flashcards: [
    ["Producer", "An organism that makes its own food by photosynthesis"],
    ["Primary consumer", "A herbivore that eats producers"],
    ["What do arrows in a food chain show?", "The direction of energy transfer"],
    ["Decomposers", "Bacteria and fungi that break down dead material and recycle nutrients"],
    ["Which pyramid is always pyramid-shaped?", "Pyramid of energy"],
    ["Roughly what % of energy passes to the next level?", "About 10%"],
    ["Where is energy lost between levels?", "Respiration (heat), movement, uneaten or undigested material"],
    ["Why are food chains short?", "So much energy is lost at each level"]
  ],
  quiz: [
    { q: "In grass → rabbit → fox, the fox is the…", o: ["Secondary consumer", "Primary consumer", "Producer", "Decomposer"], a: 0, e: "" },
    { q: "A producer has 10 000 kJ and the herbivore gets 1000 kJ. What is the efficiency?", o: ["10%", "1%", "90%", "1000%"], a: 0, e: "" },
    { q: "Why might a pyramid of numbers not be pyramid-shaped?", o: ["One large producer can feed many consumers", "Energy increases up the chain", "Decomposers are included", "It is drawn wrongly"], a: 0, e: "" },
    { q: "Where does most energy lost between trophic levels go?", o: ["Heat from respiration", "Into the soil as light", "It is destroyed", "Into the producer"], a: 0, e: "" },
    { q: "What do decomposers do?", o: ["Break down dead material and recycle nutrients", "Photosynthesise", "Eat living animals", "Make oxygen"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Cycles within ecosystems",
  summary: "The carbon cycle and the nitrogen cycle.",
  fact: "Lightning fixes nitrogen: its energy makes nitrogen and oxygen react, adding nitrates to the soil in rain.",
  notes: `
<h3>The carbon cycle</h3>
<ul>
<li><b>Photosynthesis</b> removes CO<sub>2</sub> from the air and turns it into carbon compounds in plants.</li>
<li>Carbon passes along food chains when animals <b>eat</b>.</li>
<li><b>Respiration</b> by plants, animals and decomposers returns CO<sub>2</sub> to the air.</li>
<li><b>Decomposers</b> break down dead organisms and waste, releasing CO<sub>2</sub> by respiration.</li>
<li><b>Combustion</b> of fossil fuels and wood releases CO<sub>2</sub>.</li>
<li>If decay is prevented (e.g. waterlogged conditions), carbon can be locked up over millions of years as <b>fossil fuels</b>.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: the nitrogen cycle</span>
<ul>
<li>Plants absorb <b>nitrates</b> from the soil to make proteins. Animals get nitrogen by eating plants.</li>
<li><b>Decomposers</b> break down proteins and urea into <b>ammonium</b> compounds.</li>
<li><b>Nitrifying bacteria</b> convert ammonium → nitrites → <b>nitrates</b>. This needs oxygen.</li>
<li><b>Nitrogen-fixing bacteria</b>, in soil and in the <b>root nodules of legumes</b> (peas, beans), turn nitrogen gas into nitrogen compounds.</li>
<li><b>Denitrifying bacteria</b> turn nitrates back into nitrogen gas. This happens in waterlogged, anaerobic soil.</li>
<li><b>Lightning</b> also fixes some nitrogen.</li>
</ul></div>
`,
  flashcards: [
    ["Process removing CO<sub>2</sub> from the air", "Photosynthesis"],
    ["Processes returning CO<sub>2</sub> to the air", "Respiration and combustion"],
    ["Role of decomposers in the carbon cycle", "Break down dead material and release CO<sub>2</sub> by respiration"],
    ["How do fossil fuels form?", "Dead organisms that didn't decay were compressed over millions of years"],
    ["Nitrifying bacteria", "Convert ammonium to nitrites then nitrates"],
    ["Nitrogen-fixing bacteria", "Convert nitrogen gas into nitrogen compounds (e.g. in legume root nodules)"],
    ["Denitrifying bacteria", "Convert nitrates back into nitrogen gas"],
    ["Why do plants need nitrates?", "To make proteins"]
  ],
  quiz: [
    { q: "Which process removes carbon dioxide from the air?", o: ["Photosynthesis", "Respiration", "Combustion", "Decay"], a: 0, e: "" },
    { q: "Which bacteria live in root nodules of peas and beans?", o: ["Nitrogen-fixing", "Denitrifying", "Nitrifying", "Decomposing"], a: 0, e: "" },
    { q: "Which bacteria reduce soil fertility by removing nitrates?", o: ["Denitrifying", "Nitrifying", "Nitrogen-fixing", "Lactobacillus"], a: 0, e: "" },
    { q: "How do animals get carbon compounds?", o: ["By eating plants or other animals", "By photosynthesis", "From the air", "From water"], a: 0, e: "" },
    { q: "Burning fossil fuels…", o: ["Releases CO<sub>2</sub> stored for millions of years", "Removes CO<sub>2</sub>", "Fixes nitrogen", "Has no effect"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "4d", group: 4, title: "Human influences on the environment",
  summary: "Air and water pollution, the greenhouse effect, eutrophication and deforestation.",
  fact: "Methane traps much more heat than carbon dioxide molecule for molecule: around 80 times more over 20 years.",
  notes: `
<h3>Air pollution</h3>
<ul>
<li><b>Sulfur dioxide</b> from burning fossil fuels causes <b>acid rain</b>, damaging trees, lakes and buildings.</li>
<li><b>Carbon monoxide</b> from incomplete combustion is toxic: it binds to haemoglobin.</li>
</ul>
<h3>The greenhouse effect</h3>
<ul>
<li>Greenhouse gases are <b>water vapour, carbon dioxide, methane, nitrous oxide and CFCs</b>. They trap heat (infrared) radiated from the Earth.</li>
<li>Sources: CO<sub>2</sub> from burning fuels and deforestation. Methane from cattle, rice fields and landfill. Nitrous oxide from fertilisers.</li>
<li>More greenhouse gases cause an <b>enhanced greenhouse effect</b>, leading to <b>global warming</b> and <b>climate change</b>: rising sea levels, extreme weather, habitat loss, and changes in species' ranges.</li>
</ul>
<h3>Water pollution: eutrophication</h3>
<ol>
<li>Fertilisers or sewage wash into rivers and lakes, adding nitrates and phosphates.</li>
<li>Algae grow rapidly (an algal bloom) and block light.</li>
<li>Plants underwater can't photosynthesise, and they die.</li>
<li>Decomposers break down the dead plants and algae, using up oxygen as they respire.</li>
<li>Oxygen levels fall, and fish and other animals die.</li>
</ol>
<h3>Deforestation</h3>
<ul>
<li>Leads to loss of habitats and biodiversity, and soil erosion (no roots to hold the soil).</li>
<li>Upsets the <b>water cycle</b>, because there is less transpiration.</li>
<li>Upsets the <b>carbon cycle</b>: less CO<sub>2</sub> is absorbed, and more is released if the trees are burned.</li>
<li>Leaching of nutrients from the soil.</li>
</ul>
`,
  flashcards: [
    ["Pollutant causing acid rain", "Sulfur dioxide"],
    ["Main greenhouse gases", "Water vapour, CO<sub>2</sub>, methane, nitrous oxide, CFCs"],
    ["Sources of methane", "Cattle, rice fields, landfill"],
    ["Enhanced greenhouse effect", "More greenhouse gases trap more heat, causing global warming"],
    ["Eutrophication (short)", "Excess nutrients → algal bloom → plants die → decomposers use oxygen → animals die"],
    ["Why does oxygen fall during eutrophication?", "Decomposers respire as they break down dead plants and algae"],
    ["Effects of deforestation", "Habitat loss, erosion, less CO<sub>2</sub> absorbed, disrupted water cycle"]
  ],
  quiz: [
    { q: "What directly causes fish to die in eutrophication?", o: ["Lack of oxygen", "Too many nitrates", "Too much light", "Too many fish"], a: 0, e: "" },
    { q: "Which is a source of methane?", o: ["Cattle", "Wind turbines", "Solar panels", "Forests growing"], a: 0, e: "" },
    { q: "How does deforestation increase atmospheric CO<sub>2</sub>?", o: ["Fewer trees photosynthesise, and burning releases CO<sub>2</sub>", "Trees produce CO<sub>2</sub>", "Soil absorbs oxygen", "Rain increases"], a: 0, e: "" },
    { q: "Why do underwater plants die in eutrophication?", o: ["Algae block light, so they can't photosynthesise", "Too much oxygen", "The water gets too cold", "Fish eat them"], a: 0, e: "" },
    { q: "Which gas from car engines is toxic because it binds to haemoglobin?", o: ["Carbon monoxide", "Carbon dioxide", "Methane", "Nitrogen"], a: 0, e: "" }
  ]
});
