/* Geography² — Global Geographical Issues (Paper 1) */

S2Data.add({
  id: "1a", group: 1, title: "Global circulation and climate change",
  summary: "How the atmosphere moves heat around the planet, and the natural and human causes of climate change.",
  notes: `
<h3>Global atmospheric circulation</h3>
<p>The Sun heats the equator more than the poles. Air moves in three <b>cells</b> in each hemisphere to redistribute this heat:</p>
<table><tr><th>Cell</th><th>Latitude</th><th>What happens</th></tr>
<tr><td>Hadley</td><td>0–30°</td><td>Hot air rises at the equator (low pressure, rain: rainforests); sinks at 30° (high pressure, dry: deserts)</td></tr>
<tr><td>Ferrel</td><td>30–60°</td><td>Air rises at 60° (low pressure: the UK's changeable, wet weather)</td></tr>
<tr><td>Polar</td><td>60–90°</td><td>Cold air sinks at the poles (high pressure, dry)</td></tr></table>
<p>Ocean currents also move heat: the North Atlantic Drift keeps the UK milder than places at the same latitude.</p>
<h3>Natural climate change</h3>
<ul>
<li><b>Milankovitch cycles:</b> changes in Earth's orbit and tilt over tens of thousands of years cause ice ages.</li>
<li><b>Solar output:</b> sunspot activity varies; the Maunder Minimum (1645–1715) coincided with the 'Little Ice Age'.</li>
<li><b>Volcanic eruptions:</b> ash and sulphur dioxide block sunlight and cool the planet briefly.</li>
</ul>
<p><b>Evidence:</b> ice cores (trapped air bubbles), tree rings, historical records and paintings.</p>
<h3>Human (enhanced greenhouse effect)</h3>
<p>Burning fossil fuels, deforestation, farming (methane from cattle and rice) and industry add greenhouse gases, which trap more heat. Global average temperatures have risen by about 1.1 °C since pre-industrial times.</p>
<p><b>Effects:</b> sea-level rise (thermal expansion and melting ice), more extreme weather, shrinking glaciers and Arctic sea ice, habitat change.</p>`,
  quiz: [
    { q: "Which cell lies between the equator and 30°?", o: ["Hadley", "Ferrel", "Polar", "Walker"], a: 0, e: "" },
    { q: "Rising air at the equator creates…", o: ["Low pressure and rain", "High pressure and drought", "Snow", "Calm, dry weather"], a: 0, e: "" },
    { q: "Hot deserts are found around 30° because…", o: ["Air sinks, creating high pressure", "Air rises", "It's near the poles", "Ocean currents are cold"], a: 0, e: "" },
    { q: "Milankovitch cycles are changes in…", o: ["Earth's orbit and tilt", "Sunspots", "Ocean salt", "Volcanic activity"], a: 0, e: "" },
    { q: "Ice cores provide evidence from…", o: ["Trapped air bubbles", "Fossils of dinosaurs", "Satellite images", "Tree leaves"], a: 0, e: "" },
    { q: "Large volcanic eruptions tend to…", o: ["Cool the climate briefly", "Warm it permanently", "Have no effect", "Raise sea levels"], a: 0, e: "" },
    { q: "Which is a human cause of climate change?", o: ["Burning fossil fuels", "Milankovitch cycles", "Sunspots", "Volcanic ash"], a: 0, e: "" },
    { q: "Sea levels rise mainly due to…", o: ["Thermal expansion and melting ice", "More rain", "Tides", "Earthquakes"], a: 0, e: "" },
    { q: "The North Atlantic Drift makes the UK…", o: ["Milder", "Colder", "Drier", "More windy"], a: 0, e: "" }
  ],
  flashcards: [
    ["Hadley cell", "0–30°: rising air at equator, sinking at 30°"],
    ["Ferrel cell", "30–60°: rising air at 60° brings UK rain"],
    ["Polar cell", "60–90°: sinking cold air"],
    ["Natural causes", "Milankovitch cycles, solar output, volcanoes"],
    ["Evidence", "Ice cores, tree rings, historical records"],
    ["Enhanced greenhouse effect", "Extra gases from human activity trap more heat"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Tropical cyclones",
  summary: "How tropical cyclones form, the hazards they bring, and contrasting impacts and responses.",
  notes: `
<h3>Formation</h3>
<ul>
<li>Form over warm oceans of at least <b>26.5 °C</b>, between about 5° and 30° from the equator (not on the equator, where there's no Coriolis effect to make them spin).</li>
<li>Warm, moist air rises rapidly, creating low pressure. Condensation releases heat, powering the storm.</li>
<li>The <b>Coriolis effect</b> makes the storm spin. A calm <b>eye</b> of sinking air forms, surrounded by the violent <b>eye wall</b>.</li>
<li>They move with prevailing winds and weaken over land or cooler water as their energy source is cut off.</li>
</ul>
<p>They're called hurricanes (Atlantic), typhoons (western Pacific) and cyclones (Indian Ocean).</p>
<h3>Hazards</h3>
<p>Strong winds, heavy rain and flooding, <b>storm surges</b> (sea level raised by low pressure and wind), and landslides.</p>
<h3>Contrasting case studies</h3>
<table><tr><th></th><th>Typhoon Haiyan, Philippines (2013)</th><th>Hurricane Katrina, USA (2005)</th></tr>
<tr><td>Deaths</td><td>Over 6000</td><td>About 1800</td></tr>
<tr><td>Impacts</td><td>Storm surge over 5 m in Tacloban; about 4 million displaced</td><td>Levees failed; about 80% of New Orleans flooded; very high economic cost</td></tr>
<tr><td>Responses</td><td>Heavy reliance on international aid</td><td>Federal response criticised as slow, despite wealth</td></tr></table>
<h3>Reducing the risk</h3>
<p>Prediction and tracking by satellite, early warnings and evacuation, storm shelters, building design, sea walls, and land-use planning.</p>
<div class="box box-key"><span class="box-title">Development matters</span>Developing countries usually suffer more deaths; developed countries suffer greater economic losses.</div>`,
  quiz: [
    { q: "Minimum sea temperature for a tropical cyclone?", o: ["26.5 °C", "15 °C", "20 °C", "35 °C"], a: 0, e: "" },
    { q: "Why don't tropical cyclones form on the equator?", o: ["No Coriolis effect", "Water is too cold", "Too much land", "No wind"], a: 0, e: "" },
    { q: "The calm centre of a cyclone is the…", o: ["Eye", "Eye wall", "Front", "Trough"], a: 0, e: "" },
    { q: "In the western Pacific they're called…", o: ["Typhoons", "Hurricanes", "Tornadoes", "Monsoons"], a: 0, e: "" },
    { q: "A storm surge is…", o: ["A rise in sea level caused by low pressure and wind", "A tsunami", "Heavy rain", "A tornado"], a: 0, e: "" },
    { q: "Why do cyclones weaken over land?", o: ["They lose their warm-water energy source", "Land is warmer", "More Coriolis effect", "Mountains add energy"], a: 0, e: "" },
    { q: "Typhoon Haiyan struck in…", o: ["2013", "2005", "2010", "2020"], a: 0, e: "" },
    { q: "Hurricane Katrina flooded New Orleans because…", o: ["Levees failed", "A volcano erupted", "A dam burst upstream", "Snow melted"], a: 0, e: "" },
    { q: "Developed countries usually suffer more…", o: ["Economic losses", "Deaths", "Disease", "Displacement"], a: 0, e: "" }
  ],
  flashcards: [
    ["Formation conditions", "Ocean ≥ 26.5 °C, 5–30° latitude, Coriolis effect"],
    ["Eye / eye wall", "Calm sinking air / most violent winds"],
    ["Hazards", "Wind, rain, flooding, storm surge, landslides"],
    ["Haiyan 2013", "Philippines: 6000+ deaths, 5 m+ surge"],
    ["Katrina 2005", "USA: levees failed, ~1800 deaths"],
    ["Reducing risk", "Satellites, warnings, evacuation, shelters, sea walls"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Plate tectonics",
  summary: "Earth's structure, why plates move, and what happens at each type of plate boundary.",
  notes: `
<h3>Earth's structure</h3>
<table><tr><th>Layer</th><th>Features</th></tr>
<tr><td>Crust</td><td>Thin, solid outer layer: oceanic (thin, dense, basalt) and continental (thick, less dense, granite)</td></tr>
<tr><td>Mantle</td><td>Hot, semi-molten rock; slowly flowing</td></tr>
<tr><td>Outer core</td><td>Liquid iron and nickel</td></tr>
<tr><td>Inner core</td><td>Solid iron and nickel, about 5500 °C</td></tr></table>
<h3>Why plates move</h3>
<ul>
<li><b>Convection currents:</b> heat from the core makes mantle rock rise, spread and sink.</li>
<li><b>Slab pull:</b> dense oceanic plate sinks at subduction zones, dragging the rest of the plate.</li>
<li><b>Ridge push:</b> new crust at ridges pushes plates apart.</li>
</ul>
<h3>Plate boundaries</h3>
<table><tr><th>Boundary</th><th>Movement</th><th>Hazards and landforms</th></tr>
<tr><td>Destructive (convergent)</td><td>Oceanic plate subducts beneath continental</td><td>Violent explosive volcanoes, strong earthquakes, ocean trenches, fold mountains</td></tr>
<tr><td>Constructive (divergent)</td><td>Plates move apart; magma rises</td><td>Gentle effusive eruptions, small earthquakes, mid-ocean ridges (Iceland)</td></tr>
<tr><td>Conservative</td><td>Plates slide past each other</td><td>Earthquakes, no volcanoes (San Andreas Fault)</td></tr>
<tr><td>Collision</td><td>Two continental plates meet</td><td>Fold mountains (Himalayas), earthquakes</td></tr></table>
<p><b>Hotspots</b> (e.g. Hawaii) are volcanoes away from plate boundaries, above a plume of hot mantle.</p>
<h3>Volcano types</h3>
<p><b>Composite</b> (destructive boundaries): steep, layers of ash and lava, explosive. <b>Shield</b> (constructive/hotspots): gentle slopes, runny basaltic lava.</p>`,
  quiz: [
    { q: "Which layer is liquid iron and nickel?", o: ["Outer core", "Inner core", "Mantle", "Crust"], a: 0, e: "" },
    { q: "Oceanic crust is…", o: ["Thinner and denser than continental", "Thicker and lighter", "Made of granite", "Older than continental"], a: 0, e: "" },
    { q: "Slab pull happens at…", o: ["Subduction zones", "Mid-ocean ridges", "Hotspots", "Conservative boundaries"], a: 0, e: "" },
    { q: "At a constructive boundary plates…", o: ["Move apart", "Collide", "Slide past", "Subduct"], a: 0, e: "" },
    { q: "Which boundary has no volcanoes?", o: ["Conservative", "Destructive", "Constructive", "Hotspot"], a: 0, e: "" },
    { q: "The Himalayas formed at a…", o: ["Collision boundary", "Constructive boundary", "Conservative boundary", "Hotspot"], a: 0, e: "" },
    { q: "Hawaii's volcanoes form over a…", o: ["Hotspot", "Destructive boundary", "Conservative boundary", "Trench"], a: 0, e: "" },
    { q: "Composite volcanoes are…", o: ["Steep and explosive", "Gentle and runny", "Only underwater", "Extinct"], a: 0, e: "" },
    { q: "Iceland lies on a…", o: ["Constructive boundary", "Destructive boundary", "Collision boundary", "Conservative boundary"], a: 0, e: "" }
  ],
  flashcards: [
    ["Crust / mantle / core", "Solid shell / semi-molten / liquid outer, solid inner"],
    ["Plate movement", "Convection currents, slab pull, ridge push"],
    ["Destructive", "Subduction: explosive volcanoes, big quakes"],
    ["Constructive", "Plates apart: gentle eruptions"],
    ["Conservative", "Slide past: earthquakes only"],
    ["Hotspot", "Plume of hot mantle away from boundaries"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Earthquakes and volcanoes: impacts and responses",
  summary: "Primary and secondary impacts, contrasting case studies and how risk can be reduced.",
  notes: `
<h3>Measuring earthquakes</h3>
<p>Magnitude is measured on the <b>moment magnitude scale</b>, which is logarithmic: each whole number is about 32 times more energy. The <b>focus</b> is where the rock breaks; the <b>epicentre</b> is the point on the surface above it.</p>
<h3>Impacts</h3>
<ul>
<li><b>Primary:</b> caused directly by the shaking or eruption: collapsed buildings, deaths, lava and ash damage.</li>
<li><b>Secondary:</b> follow on: fires, tsunamis, landslides, disease, homelessness, economic loss.</li>
</ul>
<h3>Contrasting case studies</h3>
<table><tr><th></th><th>Nepal, 2015 (developing)</th><th>Tōhoku, Japan, 2011 (developed)</th></tr>
<tr><td>Magnitude</td><td>7.8</td><td>9.0 (with tsunami)</td></tr>
<tr><td>Deaths</td><td>About 9000</td><td>About 18 000, mostly from the tsunami</td></tr>
<tr><td>Key impacts</td><td>Poorly built homes collapsed; landslides blocked roads; avalanches on Everest</td><td>Tsunami up to about 40 m; Fukushima nuclear disaster; huge economic cost</td></tr>
<tr><td>Responses</td><td>Relied on international aid; remote villages hard to reach</td><td>Early warnings, drills and earthquake-resistant buildings saved many lives</td></tr></table>
<h3>Reducing risk</h3>
<table><tr><th>Approach</th><th>Examples</th></tr>
<tr><td>Prediction and monitoring</td><td>Volcanoes: gas, ground swelling, tremors. Earthquakes can't be accurately predicted.</td></tr>
<tr><td>Protection</td><td>Earthquake-resistant buildings (cross-bracing, deep foundations, rubber shock absorbers); tsunami walls</td></tr>
<tr><td>Preparation</td><td>Drills, emergency kits, warning systems</td></tr>
<tr><td>Planning</td><td>Hazard maps; avoiding building in high-risk zones</td></tr></table>
<h3>Why people live in hazardous areas</h3>
<p>Fertile volcanic soils, geothermal energy, tourism, jobs, family ties, and lack of money to move.</p>`,
  quiz: [
    { q: "The point on the surface above an earthquake's focus is the…", o: ["Epicentre", "Focus", "Fault", "Crater"], a: 0, e: "" },
    { q: "A tsunami after an earthquake is a…", o: ["Secondary impact", "Primary impact", "Prediction method", "Protection method"], a: 0, e: "" },
    { q: "Collapsed buildings during shaking are a…", o: ["Primary impact", "Secondary impact", "Long-term response", "Preparation"], a: 0, e: "" },
    { q: "The 2015 Nepal earthquake had a magnitude of…", o: ["7.8", "9.0", "6.3", "5.5"], a: 0, e: "" },
    { q: "Most deaths in Japan in 2011 were caused by…", o: ["The tsunami", "Building collapse", "Fire", "Disease"], a: 0, e: "" },
    { q: "Which can be monitored to predict volcanic eruptions?", o: ["Gas emissions and ground swelling", "Bird migration", "Moon phases", "Rainfall"], a: 0, e: "" },
    { q: "Cross-bracing in buildings is a form of…", o: ["Protection", "Prediction", "Planning", "Monitoring"], a: 0, e: "" },
    { q: "Why do people farm near volcanoes?", o: ["Fertile soils", "Cheap insurance", "No hazards", "Cold climate"], a: 0, e: "" },
    { q: "Each whole number on the magnitude scale is about…", o: ["32 times more energy", "Twice the energy", "The same energy", "10 times less"], a: 0, e: "" }
  ],
  flashcards: [
    ["Focus / epicentre", "Where rock breaks / surface point above"],
    ["Primary / secondary impacts", "Direct / follow-on effects"],
    ["Nepal 2015", "M7.8, ~9000 deaths, relied on aid"],
    ["Japan 2011", "M9.0, tsunami, Fukushima, ~18 000 deaths"],
    ["The 4 Ps", "Prediction, protection, preparation, planning"],
    ["Why live there?", "Fertile soil, geothermal, tourism, can't afford to move"]
  ]
});

S2Data.add({
  id: "2a", group: 2, title: "Measuring development",
  summary: "Economic, social and political indicators of development and the development gap.",
  notes: `
<h3>What is development?</h3>
<p>Development is improvement in people's quality of life: economic, social and political progress.</p>
<h3>Indicators</h3>
<table><tr><th>Indicator</th><th>Type</th><th>Higher means…</th></tr>
<tr><td>GNI per capita (US$)</td><td>Economic</td><td>More developed</td></tr>
<tr><td>Life expectancy</td><td>Social</td><td>More developed</td></tr>
<tr><td>Infant mortality (per 1000 live births)</td><td>Social</td><td>Less developed</td></tr>
<tr><td>Literacy rate</td><td>Social</td><td>More developed</td></tr>
<tr><td>Birth rate</td><td>Social</td><td>Less developed</td></tr>
<tr><td>Access to clean water</td><td>Social</td><td>More developed</td></tr>
<tr><td>Corruption / democracy indices</td><td>Political</td><td>Depends on the index</td></tr></table>
<p>The <b>Human Development Index (HDI)</b> combines life expectancy, education (years of schooling) and GNI per capita into a value from 0 to 1. Composite indicators give a fuller picture than any single measure.</p>
<h3>Limitations</h3>
<ul>
<li>Averages hide inequality within countries.</li>
<li>GNI ignores the informal economy and cost of living.</li>
<li>Data may be inaccurate in some countries.</li>
</ul>
<h3>Classifying countries</h3>
<p>Countries are often grouped as <b>developed</b>, <b>emerging</b> (rapid growth, e.g. India, Brazil) and <b>developing</b>. The <b>Gini coefficient</b> measures inequality of income: 0 = perfect equality, 1 = total inequality.</p>
<h3>The demographic transition model</h3>
<p>As countries develop, birth and death rates fall and population growth slows: from high birth and death rates (stage 1) to low birth and death rates (stage 4).</p>`,
  quiz: [
    { q: "GNI per capita is…", o: ["An economic indicator", "A social indicator", "A political indicator", "An environmental indicator"], a: 0, e: "" },
    { q: "A high infant mortality rate suggests…", o: ["Lower development", "Higher development", "No link", "High GNI"], a: 0, e: "" },
    { q: "HDI combines…", o: ["Life expectancy, education and income", "Birth rate and death rate", "GNI only", "Literacy and water"], a: 0, e: "" },
    { q: "HDI values range from…", o: ["0 to 1", "0 to 100", "1 to 10", "−1 to 1"], a: 0, e: "" },
    { q: "A Gini coefficient of 0 means…", o: ["Perfect equality", "Total inequality", "No data", "High GNI"], a: 0, e: "" },
    { q: "A limitation of GNI per capita is that it…", o: ["Hides inequality", "Measures health", "Includes literacy", "Is always accurate"], a: 0, e: "" },
    { q: "Which is an emerging country?", o: ["India", "Norway", "Chad", "Japan"], a: 0, e: "" },
    { q: "Why use composite indicators like HDI?", o: ["They give a fuller picture", "They're simpler", "They ignore health", "They only use money"], a: 0, e: "" },
    { q: "As countries develop, birth rates usually…", o: ["Fall", "Rise", "Stay the same", "Double"], a: 0, e: "" }
  ],
  flashcards: [
    ["Development", "Improvement in quality of life"],
    ["GNI per capita", "Income per person (economic)"],
    ["HDI", "Life expectancy + education + GNI; 0 to 1"],
    ["Infant mortality", "Deaths under 1 per 1000 live births"],
    ["Gini coefficient", "Income inequality: 0 equal, 1 unequal"],
    ["Limitation of averages", "Hide inequality within a country"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Theories and causes of uneven development",
  summary: "Physical and human causes of the development gap, Rostow's and Frank's theories, and globalisation.",
  notes: `
<h3>Causes of uneven development</h3>
<table><tr><th>Physical</th><th>Human</th></tr>
<tr><td>Landlocked location (harder to trade)</td><td>History of colonialism</td></tr>
<tr><td>Hazards and disease (e.g. malaria)</td><td>Unfair trade: exporting cheap raw materials</td></tr>
<tr><td>Poor climate and soils</td><td>Debt, conflict and corruption</td></tr>
<tr><td>Few natural resources</td><td>Low investment in education and health</td></tr></table>
<h3>Rostow's model (1960)</h3>
<p>Countries pass through five stages of economic growth:</p>
<ol>
<li>Traditional society (subsistence farming)</li>
<li>Preconditions for take-off (investment, infrastructure)</li>
<li>Take-off (industrialisation)</li>
<li>Drive to maturity (diverse economy)</li>
<li>Age of high mass consumption</li>
</ol>
<p><b>Criticism:</b> assumes all countries follow the same path, as Western countries did, and ignores colonial history.</p>
<h3>Frank's dependency theory (1960s)</h3>
<p>Rich <b>core</b> countries keep poorer <b>periphery</b> countries poor by exploiting their cheap raw materials and labour. Development is held back by dependence on the core.</p>
<p><b>Criticism:</b> some former periphery countries (e.g. South Korea, China) have developed rapidly.</p>
<h3>Globalisation</h3>
<p>The growing interconnection of the world's economies, cultures and people, driven by transport, communications technology, trade agreements and <b>TNCs</b> (transnational corporations).</p>
<h3>Approaches to development</h3>
<table><tr><th>Top-down</th><th>Bottom-up</th></tr>
<tr><td>Large-scale, government or international (e.g. big dams)</td><td>Small-scale, local, community-led (often NGOs)</td></tr>
<tr><td>Can boost the economy, but may displace people</td><td>Meets local needs, cheaper, uses local skills</td></tr></table>`,
  quiz: [
    { q: "Which is a physical cause of uneven development?", o: ["Being landlocked", "Colonialism", "Corruption", "Debt"], a: 0, e: "" },
    { q: "Rostow's model has how many stages?", o: ["5", "3", "4", "7"], a: 0, e: "" },
    { q: "Rostow's first stage is…", o: ["Traditional society", "Take-off", "High mass consumption", "Drive to maturity"], a: 0, e: "" },
    { q: "Frank's theory is called…", o: ["Dependency theory", "Modernisation theory", "Demographic transition", "Push-pull theory"], a: 0, e: "" },
    { q: "In Frank's theory, rich countries form the…", o: ["Core", "Periphery", "Semi-periphery", "Hinterland"], a: 0, e: "" },
    { q: "A criticism of Rostow is that it…", o: ["Assumes all countries follow one path", "Ignores Western countries", "Only applies to Africa", "Has too few stages"], a: 0, e: "" },
    { q: "A TNC is…", o: ["A company operating in many countries", "A trade agreement", "A charity", "A type of aid"], a: 0, e: "" },
    { q: "A bottom-up project is…", o: ["Small-scale and community-led", "A national dam", "Run by the World Bank", "Always expensive"], a: 0, e: "" },
    { q: "Globalisation has been driven by…", o: ["Transport and communications technology", "Fewer trade links", "Less travel", "Isolation"], a: 0, e: "" }
  ],
  flashcards: [
    ["Physical causes", "Landlocked, hazards, disease, poor resources"],
    ["Human causes", "Colonialism, unfair trade, debt, conflict"],
    ["Rostow", "5 stages from traditional to mass consumption"],
    ["Frank", "Core exploits periphery: dependency"],
    ["Globalisation", "Increasing global interconnection"],
    ["Top-down vs bottom-up", "Large, government-led vs small, community-led"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "An emerging country: India",
  summary: "India's location, economic growth, globalisation, TNCs, and the impacts of development.",
  notes: `
<div class="box box-tip"><span class="box-title">Note</span>Schools choose their own emerging country. India is a common choice; if you studied another country, learn the same headings for it.</div>
<h3>Context</h3>
<ul>
<li>South Asia; population of about 1.4 billion, the largest in the world since 2023.</li>
<li>A former British colony until 1947.</li>
<li>One of the world's fastest-growing major economies.</li>
</ul>
<h3>Changing economy</h3>
<p>Employment has shifted from farming (primary) towards manufacturing (secondary) and especially services (tertiary), such as IT and call centres in cities like Bengaluru. Economic reforms in 1991 opened India to foreign trade and investment.</p>
<h3>Globalisation and TNCs</h3>
<ul>
<li>Foreign TNCs are attracted by a large, English-speaking, educated workforce and lower wages.</li>
<li>Indian TNCs, such as Tata, now operate worldwide.</li>
<li><b>Benefits:</b> jobs, investment, skills, infrastructure. <b>Costs:</b> low wages in some factories, profits leaving the country, environmental damage.</li>
</ul>
<h3>Impacts of development</h3>
<table><tr><th>Positive</th><th>Negative</th></tr>
<tr><td>Rising incomes and a growing middle class</td><td>Widening inequality between urban and rural areas</td></tr>
<tr><td>Better access to education and health</td><td>Air and water pollution</td></tr>
<tr><td>Improved infrastructure</td><td>Pressure on cities from rural–urban migration</td></tr></table>
<h3>Top-down and bottom-up examples</h3>
<ul>
<li><b>Top-down:</b> Sardar Sarovar Dam on the Narmada River: water, irrigation and electricity, but tens of thousands of people displaced.</li>
<li><b>Bottom-up:</b> Barefoot College in Rajasthan trains rural women as solar engineers to bring electricity to villages.</li>
</ul>`,
  quiz: [
    { q: "India's population is about…", o: ["1.4 billion", "400 million", "800 million", "2.5 billion"], a: 0, e: "" },
    { q: "India became independent from Britain in…", o: ["1947", "1918", "1960", "1991"], a: 0, e: "" },
    { q: "India's economic reforms opening it to trade were in…", o: ["1991", "1947", "2008", "1971"], a: 0, e: "" },
    { q: "Which city is known as a centre for IT?", o: ["Bengaluru", "Agra", "Shimla", "Jaipur"], a: 0, e: "" },
    { q: "Why do TNCs locate in India?", o: ["Large, English-speaking workforce and lower wages", "Cold climate", "Small population", "High wages"], a: 0, e: "" },
    { q: "Tata is an example of…", o: ["An Indian TNC", "An NGO", "A dam", "A charity"], a: 0, e: "" },
    { q: "The Sardar Sarovar Dam is a…", o: ["Top-down project", "Bottom-up project", "TNC", "Charity"], a: 0, e: "" },
    { q: "Barefoot College trains women as…", o: ["Solar engineers", "Doctors", "Pilots", "Teachers of English"], a: 0, e: "" },
    { q: "A negative impact of India's growth is…", o: ["Rising inequality", "Better education", "A growing middle class", "More infrastructure"], a: 0, e: "" }
  ],
  flashcards: [
    ["India's population", "~1.4 billion, largest since 2023"],
    ["1991", "Economic reforms opened India to trade"],
    ["Sectors", "Shift from farming to services (IT, call centres)"],
    ["TNCs in India", "Jobs and investment vs low wages and profit leakage"],
    ["Top-down example", "Sardar Sarovar Dam"],
    ["Bottom-up example", "Barefoot College solar engineers"]
  ]
});

S2Data.add({
  id: "3a", group: 3, title: "Urbanisation and megacities",
  summary: "Global trends in urbanisation, why cities grow, and how cities in developed and developing countries differ.",
  notes: `
<h3>Key terms</h3>
<ul>
<li><b>Urbanisation:</b> an increase in the proportion of people living in urban areas.</li>
<li><b>Megacity:</b> a city with over 10 million people.</li>
<li><b>Primate city:</b> a city much larger than any other in the country.</li>
<li><b>Suburbanisation, counter-urbanisation, re-urbanisation:</b> movement to the suburbs, to rural areas, and back to city centres.</li>
</ul>
<h3>Trends</h3>
<p>Over half the world's population has lived in urban areas since about 2007. Most growth is now in developing and emerging countries in Asia and Africa; developed countries urbanised earlier and are growing slowly.</p>
<h3>Why cities grow</h3>
<ul>
<li><b>Rural–urban migration:</b> push factors (poverty, drought, few services) and pull factors (jobs, education, health care).</li>
<li><b>Natural increase:</b> migrants are often young, so birth rates are high.</li>
</ul>
<h3>Changing cities</h3>
<table><tr><th>Developed</th><th>Developing/emerging</th></tr>
<tr><td>Slow growth; counter-urbanisation and re-urbanisation</td><td>Rapid growth; rural–urban migration</td></tr>
<tr><td>Deindustrialisation; service economy</td><td>Large <b>informal economy</b> (unregistered, untaxed jobs)</td></tr>
<tr><td>Inner-city regeneration</td><td>Squatter settlements on the edges and on unused land</td></tr></table>
<h3>Land use</h3>
<p>Cities have zones: CBD (shops, offices), inner city, suburbs and rural–urban fringe. Land values are highest in the CBD, where accessibility is greatest.</p>`,
  quiz: [
    { q: "A megacity has over…", o: ["10 million people", "1 million", "5 million", "50 million"], a: 0, e: "" },
    { q: "Since about 2007, the share of people in urban areas has been…", o: ["Over half", "About a quarter", "About 10%", "Over 90%"], a: 0, e: "" },
    { q: "Most urban growth today is in…", o: ["Asia and Africa", "Europe", "North America", "Australia"], a: 0, e: "" },
    { q: "Which is a pull factor to cities?", o: ["Jobs", "Drought", "Poverty", "Conflict"], a: 0, e: "" },
    { q: "The informal economy consists of…", o: ["Unregistered, untaxed work", "Government jobs", "Large factories", "Banks"], a: 0, e: "" },
    { q: "Counter-urbanisation is…", o: ["Movement from cities to rural areas", "Movement into cities", "Building skyscrapers", "Slum clearance"], a: 0, e: "" },
    { q: "Land values are highest in the…", o: ["CBD", "Suburbs", "Rural–urban fringe", "Inner city"], a: 0, e: "" },
    { q: "A primate city is…", o: ["Much larger than other cities in the country", "Home to primates", "A capital city always", "A small town"], a: 0, e: "" },
    { q: "Natural increase in cities is high because migrants are often…", o: ["Young", "Elderly", "Wealthy", "Single"], a: 0, e: "" }
  ],
  flashcards: [
    ["Urbanisation", "Rising proportion of people in urban areas"],
    ["Megacity", "Over 10 million people"],
    ["Push / pull", "Reasons to leave / reasons to go"],
    ["Informal economy", "Unregistered, untaxed work"],
    ["Counter-urbanisation", "Moving from cities to the countryside"],
    ["CBD", "Central business district: highest land values"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "A megacity: Mumbai",
  summary: "Mumbai's growth, opportunities and challenges, and attempts to make it more sustainable.",
  notes: `
<div class="box box-tip"><span class="box-title">Note</span>Schools choose their own megacity. Mumbai is a common choice; learn the same headings for yours.</div>
<h3>Context</h3>
<ul>
<li>On India's west coast; a port and India's financial centre.</li>
<li>Metropolitan population of over 20 million.</li>
<li>Growth driven by rural–urban migration from across India and by natural increase.</li>
</ul>
<h3>Opportunities</h3>
<p>Jobs in finance, the Bollywood film industry, ports and manufacturing; better access to education and health care than rural areas; a huge informal economy.</p>
<h3>Challenges</h3>
<ul>
<li><b>Housing:</b> around 40% or more of people live in slums. <b>Dharavi</b> houses up to about a million people in roughly 2 km².</li>
<li><b>Services:</b> overcrowding, shared toilets, limited clean water.</li>
<li><b>Transport:</b> extremely congested roads and overcrowded trains.</li>
<li><b>Pollution:</b> air pollution, untreated sewage, waste.</li>
<li><b>Inequality:</b> luxury apartments next to slums.</li>
</ul>
<h3>Dharavi's informal economy</h3>
<p>Thousands of small businesses, including recycling, pottery and leather goods, generate a large annual turnover, showing slums can be enterprising communities.</p>
<h3>Making Mumbai more sustainable</h3>
<table><tr><th>Top-down</th><th>Bottom-up</th></tr>
<tr><td>Mumbai Metro and coastal road to ease congestion</td><td>NGOs improving sanitation and community toilets</td></tr>
<tr><td>Slum redevelopment into high-rise flats (sometimes resisted, as it breaks up communities and businesses)</td><td>Residents upgrading their own homes and running recycling businesses</td></tr></table>`,
  quiz: [
    { q: "Mumbai is on India's…", o: ["West coast", "East coast", "Northern border", "Himalayan foothills"], a: 0, e: "" },
    { q: "Mumbai's metropolitan population is over…", o: ["20 million", "2 million", "5 million", "100 million"], a: 0, e: "" },
    { q: "Dharavi is…", o: ["One of Asia's largest slums", "A business park", "A national park", "A port"], a: 0, e: "" },
    { q: "Mumbai is India's centre for…", o: ["Finance and film", "Tea growing", "Mining", "Fishing only"], a: 0, e: "" },
    { q: "Which is a major industry in Dharavi?", o: ["Recycling", "Car manufacturing", "Oil refining", "Banking"], a: 0, e: "" },
    { q: "The Mumbai Metro is a…", o: ["Top-down transport project", "Bottom-up project", "Slum", "Charity"], a: 0, e: "" },
    { q: "Why do some residents resist slum redevelopment?", o: ["It breaks up communities and businesses", "They prefer rent increases", "It's too slow", "It's illegal"], a: 0, e: "" },
    { q: "Mumbai's growth is mainly due to…", o: ["Rural–urban migration and natural increase", "Counter-urbanisation", "Emigration", "Low birth rates"], a: 0, e: "" },
    { q: "Roughly what share of Mumbai's people live in slums?", o: ["Around 40% or more", "5%", "90%", "None"], a: 0, e: "" }
  ],
  flashcards: [
    ["Mumbai", "West-coast port; India's financial and film capital"],
    ["Population", "Over 20 million (metropolitan)"],
    ["Dharavi", "Up to ~1 million people in ~2 km²; recycling"],
    ["Challenges", "Housing, services, congestion, pollution, inequality"],
    ["Top-down", "Metro, coastal road, slum redevelopment"],
    ["Bottom-up", "NGO sanitation, self-upgrading homes"]
  ]
});

S2Data.detail("1a", { mistakes: ["Confusing the natural greenhouse effect (needed for life) with the enhanced greenhouse effect."], tips: ["Draw the three cells from memory, marking high and low pressure."], fact: "Ice cores from Antarctica record air from over 800 000 years ago." });
S2Data.detail("1b", { mistakes: ["Saying tropical cyclones form at the equator."], tips: ["For case studies, learn two numbers for impacts and one for responses."], fact: "Haiyan was one of the strongest tropical cyclones ever to make landfall." });
S2Data.detail("1c", { mistakes: ["Saying volcanoes form at conservative boundaries."], tips: ["Link each boundary to a named real example."], fact: "Plates move at about the speed your fingernails grow: a few centimetres a year." });
S2Data.detail("1d", { mistakes: ["Muddling primary and secondary impacts."], tips: ["Always link impacts and responses to the country's level of development."], fact: "The 2011 Tōhoku earthquake moved Japan's main island about 2.4 m east." });
S2Data.detail("2a", { mistakes: ["Using a single indicator to judge development."], tips: ["Say whether a high value means more or less developed."], fact: "Norway, Switzerland and Iceland regularly top the HDI rankings." });
S2Data.detail("2b", { mistakes: ["Describing Rostow without evaluating it."], tips: ["For 'assess' questions, give strengths and criticisms of each theory."], fact: "Andre Gunder Frank developed dependency theory while studying Latin America." });
S2Data.detail("2c", { mistakes: ["Writing about 'India' in general without specific facts."], tips: ["Learn 3 facts each for: context, economy, TNCs, impacts, top-down, bottom-up."], fact: "India's call-centre and IT industry grew rapidly partly because of time-zone differences with the USA and UK." });
S2Data.detail("3a", { mistakes: ["Confusing urbanisation (a proportion) with urban growth (a number)."], tips: ["Use push and pull factors together in explanations."], fact: "By 2050, about two-thirds of the world's people are expected to live in urban areas." });
S2Data.detail("3b", { mistakes: ["Presenting slums only negatively."], tips: ["Learn both a top-down and a bottom-up scheme with an evaluation."], fact: "Mumbai's suburban railway carries several million passengers every day." });
