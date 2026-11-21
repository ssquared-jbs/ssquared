/* Video explainers — Geography. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Global circulation and climate change", sub: "Why deserts and rainforests are where they are, and why climate changes.", mark: "🌐",
    say: ["The Sun heats the equator most. The atmosphere spends its whole time moving that heat towards the poles."] },
  { type: "compare", title: "Three cells", h: ["Latitude", "Result"],
    rows: [["Hadley", "0–30°", "Rising air at equator → rainforest; sinking at 30° → desert"], ["Ferrel", "30–60°", "Rising air at 60° → UK rain"], ["Polar", "60–90°", "Sinking cold air → dry, cold"]],
    say: ["In the Hadley cell, hot air rises at the equator, giving heavy rain and rainforests. It sinks at thirty degrees, giving high pressure and deserts.", "In the Ferrel cell, air rises again around sixty degrees, which is why the UK is often wet.", "And in the polar cell, cold air sinks at the poles."] },
  { type: "points", title: "Natural causes of climate change", items: ["Milankovitch cycles: orbit and tilt", "Solar output: sunspots", "Volcanic eruptions: ash blocks sunlight"],
    say: ["Over tens of thousands of years, changes in Earth's orbit and tilt trigger ice ages.", "The Sun's output varies. A quiet Sun coincided with the Little Ice Age.", "Big eruptions throw ash and gas high into the sky, cooling the planet for a year or two."] },
  { type: "big", text: "Enhanced greenhouse effect", sub: "Fossil fuels, deforestation and farming add gases that trap more heat",
    say: ["Since the Industrial Revolution, humans have added carbon dioxide and methane.", "These trap extra heat. Global temperatures are up about one point one degrees, raising sea levels and making extreme weather more common."] },
  { type: "quiz", q: "Why are deserts found around 30°?", o: ["Air sinks, creating high pressure", "Air rises, creating low pressure", "Ocean currents are warm", "It's near the poles"], a: 0,
    why: "Sinking air warms and prevents clouds forming.", say: ["Why are hot deserts found around thirty degrees north and south?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Tropical cyclones", sub: "Formation, hazards and contrasting impacts.", mark: "🌀",
    say: ["Tropical cyclones are the most powerful storms on Earth. They need very specific conditions to form."] },
  { type: "flow", title: "Formation", nodes: ["Ocean ≥ 26.5 °C", "Warm, moist air rises", "Condensation releases heat", "Coriolis effect: spin", "Eye forms"],
    say: ["It starts over an ocean at least twenty-six and a half degrees.", "Warm, moist air rises fast, creating low pressure.", "As it condenses, it releases heat, which powers the storm.", "The Coriolis effect, from Earth's rotation, makes it spin. That's why cyclones never form right on the equator.", "A calm eye of sinking air forms, surrounded by the violent eye wall."] },
  { type: "compare", title: "Contrasting impacts", h: ["Haiyan, Philippines 2013", "Katrina, USA 2005"],
    rows: [["Deaths", "6000+", "~1800"], ["Key impact", "5 m+ storm surge", "Levees failed; 80% of New Orleans flooded"], ["Response", "International aid", "Slow federal response"]],
    say: ["Typhoon Haiyan killed over six thousand people in the Philippines, compared with about eighteen hundred for Hurricane Katrina.", "Haiyan's storm surge was over five metres. In New Orleans, the levees failed and eighty percent of the city flooded.", "The Philippines relied on international aid; in the US, the response was criticised as slow."] },
  { type: "points", title: "Reducing the risk", items: ["Satellite tracking and warnings", "Evacuation and storm shelters", "Stronger buildings and sea walls"],
    say: ["Satellites track storms, so warnings can be issued days ahead.", "Evacuation routes and shelters save lives.", "And stronger buildings and sea walls reduce damage."] },
  { type: "quiz", q: "Why don't cyclones form on the equator?", o: ["No Coriolis effect", "Seas too cold", "Too much land", "Too windy"], a: 0,
    why: "Without the Coriolis effect, the storm can't spin.", say: ["Why don't tropical cyclones form on the equator?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Plate tectonics", sub: "Earth's structure and plate boundaries.", mark: "⛰",
    say: ["Earth's surface is broken into plates that move a few centimetres a year. Where they meet, we get earthquakes and volcanoes."] },
  { type: "flow", title: "Earth's layers", nodes: ["Crust: thin, solid", "Mantle: semi-molten", "Outer core: liquid", "Inner core: solid, ~5500 °C"],
    say: ["The crust is a thin, solid shell.", "Beneath it, the mantle is hot, semi-molten rock that slowly flows.", "The outer core is liquid iron and nickel.", "And the inner core is solid, at about five and a half thousand degrees."] },
  { type: "compare", title: "Plate boundaries", h: ["Movement", "Hazards"],
    rows: [["Destructive", "Oceanic subducts under continental", "Explosive volcanoes, big earthquakes"], ["Constructive", "Plates move apart", "Gentle eruptions, small quakes"], ["Conservative", "Plates slide past", "Earthquakes only"], ["Collision", "Continents meet", "Fold mountains, earthquakes"]],
    say: ["At destructive boundaries, dense oceanic crust sinks beneath continental crust, melting to feed explosive volcanoes.", "At constructive boundaries, plates pull apart and magma rises gently, like in Iceland.", "At conservative boundaries, plates grind past each other, causing earthquakes but no volcanoes.", "And where two continents collide, the land crumples into fold mountains like the Himalayas."] },
  { type: "big", text: "Hotspots: volcanoes away from boundaries", sub: "e.g. Hawaii, above a plume of hot mantle",
    say: ["Some volcanoes sit in the middle of plates.", "They're above hotspots, where a plume of hot mantle burns through the crust."] },
  { type: "quiz", q: "Which boundary has no volcanoes?", o: ["Conservative", "Destructive", "Constructive", "Hotspot"], a: 0,
    why: "No magma is created as plates slide past.", say: ["At which type of boundary are there no volcanoes?"] }
]});

S2Data.video("1d", { scenes: [
  { type: "title", title: "Tectonic hazards: impacts and responses", sub: "Nepal 2015 vs Japan 2011.", mark: "⚠",
    say: ["The same size of earthquake can have very different effects depending on where it strikes."] },
  { type: "compare", title: "Primary and secondary impacts", h: ["Examples"],
    rows: [["Primary", "Buildings collapse, deaths, injuries"], ["Secondary", "Tsunamis, fires, landslides, disease, homelessness"]],
    say: ["Primary impacts are caused directly by the shaking: collapsed buildings and casualties.", "Secondary impacts follow on: tsunamis, fires, landslides, disease and people left homeless."] },
  { type: "compare", title: "Contrasting case studies", h: ["Nepal 2015", "Japan 2011"],
    rows: [["Magnitude", "7.8", "9.0"], ["Deaths", "~9000", "~18 000 (tsunami)"], ["Why", "Weak buildings, remote terrain", "Huge tsunami; Fukushima"], ["Response", "International aid", "Warnings and drills"]],
    say: ["Nepal's earthquake was magnitude seven point eight. Japan's was nine.", "Nepal lost about nine thousand people; Japan about eighteen thousand, mostly to the tsunami.", "In Nepal, poorly built homes collapsed and landslides cut off villages. Japan's tsunami overwhelmed sea walls and caused the Fukushima disaster.", "Nepal depended on international aid. Japan's warnings, drills and strong buildings saved many lives."] },
  { type: "compare", title: "The 4 Ps", h: ["Example"],
    rows: [["Prediction", "Monitoring volcanoes (gas, swelling)"], ["Protection", "Earthquake-resistant buildings"], ["Preparation", "Drills, kits, warning systems"], ["Planning", "Hazard maps, land-use zoning"]],
    say: ["Prediction works for volcanoes, which give warning signs. Earthquakes can't be predicted precisely.", "Protection means buildings designed to sway rather than collapse.", "Preparation includes drills and emergency kits.", "And planning keeps people away from the riskiest land."] },
  { type: "quiz", q: "A tsunami after an earthquake is…", o: ["A secondary impact", "A primary impact", "A prediction method", "A protection method"], a: 0,
    why: "It's a follow-on effect of the earthquake.", say: ["Is a tsunami a primary or a secondary impact?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Measuring development", sub: "Indicators, HDI and their limits.", mark: "📊",
    say: ["How do you measure how developed a country is? There are many indicators, and each tells part of the story."] },
  { type: "compare", title: "Key indicators", h: ["Type", "Higher means"],
    rows: [["GNI per capita", "Economic", "More developed"], ["Life expectancy", "Social", "More developed"], ["Infant mortality", "Social", "Less developed"], ["Literacy rate", "Social", "More developed"]],
    say: ["Gross national income per person is economic: higher means richer.", "Life expectancy is social: longer lives suggest better healthcare.", "Infant mortality is the opposite: a higher rate means less developed.", "And literacy reflects education."] },
  { type: "big", text: "HDI = health + education + income", sub: "A composite score from 0 to 1",
    say: ["The Human Development Index combines life expectancy, education and income into one score between zero and one.", "Combining measures gives a fuller picture than any one alone."] },
  { type: "points", title: "Limitations", items: ["Averages hide inequality", "GNI misses the informal economy", "Data can be unreliable"],
    say: ["National averages hide huge differences between rich and poor.", "GNI ignores informal work and the cost of living.", "And data from some countries is incomplete."] },
  { type: "quiz", q: "A high infant mortality rate suggests…", o: ["Lower development", "Higher development", "High GNI", "High HDI"], a: 0,
    why: "It reflects poor healthcare, sanitation and nutrition.", say: ["What does a high infant mortality rate suggest?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Why development is uneven", sub: "Causes, theories and approaches.", mark: "⚖",
    say: ["Why are some countries so much richer than others? Geographers point to physical and human causes, and two famous theories."] },
  { type: "compare", title: "Causes", h: ["Physical", "Human"],
    rows: [["Location", "Landlocked", "Colonialism"], ["Environment", "Hazards, disease, poor soils", "Unfair trade, debt"], ["Resources", "Few natural resources", "Conflict, corruption"]],
    say: ["Being landlocked makes trade harder. Colonial history drained resources from many countries.", "Hazards, disease and poor soils hold back farming. Unfair trade and debt keep money flowing out.", "Few resources limit options, and conflict and corruption scare off investment."] },
  { type: "flow", title: "Rostow's five stages", nodes: ["Traditional society", "Preconditions", "Take-off", "Drive to maturity", "High mass consumption"],
    say: ["Rostow said every country starts as a traditional, farming society.", "Then investment and infrastructure build the preconditions for growth.", "Industry takes off.", "The economy matures and diversifies.", "Finally, people enjoy high mass consumption. Critics say this assumes every country follows the Western path."] },
  { type: "big", text: "Frank: the core keeps the periphery poor", sub: "Dependency theory",
    say: ["Andre Gunder Frank argued the opposite: rich core countries keep poor periphery countries dependent, buying their raw materials cheaply.", "But countries like South Korea have broken out of that pattern."] },
  { type: "quiz", q: "Which is a bottom-up approach?", o: ["A village well built with local labour", "A national dam", "A World Bank loan", "A motorway"], a: 0,
    why: "Small-scale and community-led.", say: ["Which of these is a bottom-up approach to development?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "An emerging country: India", sub: "Growth, globalisation and its impacts.", mark: "🇮🇳",
    say: ["India is one of the world's fastest-growing major economies, and since 2023 its most populous country."] },
  { type: "points", title: "Context", items: ["Population ~1.4 billion", "Independent from Britain in 1947", "Opened to global trade in 1991"],
    say: ["India has about one point four billion people.", "It was a British colony until 1947.", "Reforms in 1991 opened it up to foreign trade and investment, and growth took off."] },
  { type: "compare", title: "TNCs in India", h: ["Benefits", "Costs"],
    rows: [["Economy", "Jobs and investment", "Profits leave the country"], ["People", "Skills and training", "Low wages in some factories"], ["Environment", "New technology", "Pollution"]],
    say: ["Transnational companies bring jobs and investment, but some profits flow abroad.", "They train workers, though some factory wages are very low.", "They bring technology, but also pollution. Indian TNCs like Tata now operate worldwide too."] },
  { type: "compare", title: "Approaches", h: ["Example"],
    rows: [["Top-down", "Sardar Sarovar Dam: water and power, but people displaced"], ["Bottom-up", "Barefoot College: rural women trained as solar engineers"]],
    say: ["The Sardar Sarovar Dam provides water and electricity, but displaced tens of thousands of people.", "Barefoot College trains rural women as solar engineers, bringing power to their own villages."] },
  { type: "quiz", q: "Why do TNCs locate call centres in India?", o: ["English-speaking workforce and lower wages", "Cold climate", "Small market", "High wages"], a: 0,
    why: "Plus a time-zone advantage for serving Western customers.", say: ["Why have many companies located call centres in India?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Urbanisation", sub: "Why cities are growing so fast.", mark: "🏙",
    say: ["Since about 2007, more than half of humanity has lived in towns and cities. The fastest growth is now in Asia and Africa."] },
  { type: "compare", title: "Why cities grow", h: ["Examples"],
    rows: [["Push factors", "Poverty, drought, few services in rural areas"], ["Pull factors", "Jobs, schools, hospitals in cities"], ["Natural increase", "Young migrants have children"]],
    say: ["People are pushed from the countryside by poverty, drought and a lack of services.", "They're pulled to cities by jobs, schools and hospitals.", "And because migrants are mostly young, cities also grow by natural increase."] },
  { type: "compare", title: "Contrasting cities", h: ["Developed", "Developing"],
    rows: [["Growth", "Slow", "Rapid"], ["Movement", "Counter- and re-urbanisation", "Rural–urban migration"], ["Housing", "Regeneration", "Squatter settlements"]],
    say: ["Cities in developed countries grow slowly.", "People move out to the countryside, and back into regenerated city centres. In developing countries, the flow is from villages into cities.", "That often outpaces housing, so squatter settlements spring up."] },
  { type: "big", text: "Megacity: over 10 million people", sub: "Most are now in developing and emerging countries",
    say: ["A megacity has over ten million people.", "Once mostly in rich countries, most megacities are now in Asia, Africa and Latin America."] },
  { type: "quiz", q: "Which is a pull factor?", o: ["Jobs in the city", "Drought", "Rural poverty", "Conflict"], a: 0,
    why: "Pull factors attract people to a place.", say: ["Which of these is a pull factor?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "A megacity: Mumbai", sub: "Opportunities, challenges and solutions.", mark: "🏘",
    say: ["Mumbai is India's financial capital, home to over twenty million people, and a city of extreme contrasts."] },
  { type: "points", title: "Opportunities", items: ["Finance, ports and manufacturing", "Bollywood", "A huge informal economy"],
    say: ["Mumbai has India's biggest financial institutions and a major port.", "It's the home of Bollywood.", "And its informal economy gives work to millions of migrants."] },
  { type: "points", title: "Challenges", items: ["Slums: around 40% or more of people", "Water and sanitation", "Congestion and pollution", "Inequality"],
    say: ["Around forty percent or more of people live in slums.", "Many share taps and toilets.", "Roads are gridlocked and trains packed.", "And luxury towers stand next to some of the poorest housing in Asia."] },
  { type: "big", text: "Dharavi: up to ~1 million people in ~2 km²", sub: "Thousands of businesses: recycling, pottery, leather",
    say: ["Dharavi is one of Asia's largest slums.", "But it's also an economic powerhouse, with thousands of small businesses, especially recycling."] },
  { type: "compare", title: "Making Mumbai sustainable", h: ["Example"],
    rows: [["Top-down", "Mumbai Metro; slum redevelopment"], ["Bottom-up", "NGO community toilets; residents upgrading homes"]],
    say: ["Top-down schemes include the Metro and rehousing slum dwellers in flats, though redevelopment can break up communities.", "Bottom-up schemes include NGO-run toilets and residents improving their own homes."] },
  { type: "quiz", q: "Dharavi is known for its…", o: ["Recycling industry", "Oil refineries", "Luxury hotels", "Airport"], a: 0,
    why: "Thousands of small recycling businesses operate there.", say: ["What industry is Dharavi known for?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "UK geology and landscapes", sub: "Rocks, uplands and lowlands.", mark: "🪨",
    say: ["The UK's landscapes start with its rocks. Hard, old rocks make mountains; soft, young rocks make lowlands."] },
  { type: "compare", title: "Rock types", h: ["Formed by", "Examples"],
    rows: [["Igneous", "Cooling magma", "Granite, basalt"], ["Sedimentary", "Compacted sediment", "Chalk, clay, limestone"], ["Metamorphic", "Heat and pressure", "Slate, schist"]],
    say: ["Igneous rocks form from cooling magma, like the granite of Dartmoor.", "Sedimentary rocks are layers of sediment pressed together: chalk, clay and limestone.", "Metamorphic rocks are existing rocks changed by heat and pressure, like slate."] },
  { type: "big", text: "The Tees–Exe line", sub: "Upland north and west; lowland south and east",
    say: ["Draw a line from the River Tees to the River Exe.", "North and west are older, harder rocks forming uplands. South and east are younger, softer rocks forming lowlands."] },
  { type: "points", title: "What shapes landscapes", items: ["Weathering: freeze–thaw, chemical, biological", "Erosion by rivers, the sea and past glaciers", "Human activity: farming, forestry, settlement"],
    say: ["Weathering breaks rock down where it is.", "Rivers, the sea and ice-age glaciers carry it away.", "And people reshape land through farming, forestry and building."] },
  { type: "quiz", q: "Chalk is…", o: ["Sedimentary", "Igneous", "Metamorphic", "Volcanic"], a: 0,
    why: "Formed from compacted microscopic shells.", say: ["What type of rock is chalk?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Coastal landscapes", sub: "Processes, landforms and management.", mark: "🌊",
    say: ["The coast is shaped by waves: eroding cliffs in some places and building beaches in others."] },
  { type: "compare", title: "Erosion processes", h: ["How"],
    rows: [["Hydraulic action", "Water and compressed air force cracks open"], ["Abrasion", "Rocks hurled at the cliff"], ["Attrition", "Rocks knock together, becoming rounder"], ["Solution", "Rock dissolved chemically"]],
    say: ["Hydraulic action is the sheer force of water, and air trapped in cracks.", "Abrasion is the sea throwing rocks at the cliff like sandpaper.", "Attrition is rocks smashing into each other and becoming smaller and rounder.", "Solution dissolves rocks like chalk and limestone."] },
  { type: "flow", title: "Headland erosion", nodes: ["Crack", "Cave", "Arch", "Stack", "Stump"],
    say: ["Waves attack a crack in a headland.", "It's widened into a cave.", "The cave breaks through to form an arch.", "The arch roof collapses, leaving a stack.", "The stack is eroded down to a stump."] },
  { type: "compare", title: "Management", h: ["Examples", "Trade-off"],
    rows: [["Hard", "Sea walls, groynes, rock armour", "Effective but costly; can shift erosion"], ["Soft", "Beach nourishment, dunes, managed retreat", "Cheaper, natural; needs upkeep"]],
    say: ["Hard engineering like sea walls and groynes works, but it's expensive and can increase erosion further along.", "Soft engineering works with nature, like adding sand to beaches. It's cheaper, but needs regular top-ups. At Mappleton on the Holderness coast, groynes protected the village but starved beaches to the south."] },
  { type: "quiz", q: "What is the correct sequence?", o: ["Cave, arch, stack, stump", "Arch, cave, stack, stump", "Stack, arch, cave, stump", "Cave, stack, arch, stump"], a: 0,
    why: "Each stage follows erosion of the previous one.", say: ["Which is the correct sequence of headland erosion?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "Rivers and flooding", sub: "Landforms, hydrographs and management.", mark: "🏞",
    say: ["A river changes along its course, from a steep mountain stream to a wide, slow river crossing a floodplain."] },
  { type: "compare", title: "Along the river", h: ["Process", "Landforms"],
    rows: [["Upper", "Vertical erosion", "V-shaped valleys, waterfalls"], ["Middle", "Lateral erosion", "Meanders"], ["Lower", "Deposition", "Floodplains, levees, estuaries"]],
    say: ["In the upper course, the river cuts down, carving V-shaped valleys and waterfalls.", "In the middle course, it erodes sideways and meanders.", "In the lower course, it deposits sediment, building floodplains and levees."] },
  { type: "graph", title: "Storm hydrograph", x: "time", y: "discharge",
    lines: [{ pts: [[0, 0.16], [0.2, 0.17], [0.3, 0.32], [0.45, 0.8], [0.6, 0.55], [0.8, 0.3], [1, 0.2]] }],
    marks: [{ x: 0.45, y: 0.8, t: "peak discharge", s: 2, dy: -14 }, { x: 0.37, y: 0.58, t: "rising limb", s: 2, anchor: "end", dx: -10 }, { x: 0.68, y: 0.44, t: "falling limb", s: 2, anchor: "start", dx: 10, dy: -6 }],
    say: ["After a storm, the hydrograph plots river discharge over time.", "Discharge rises along the rising limb to a peak, then falls back along the falling limb.", "The time between peak rainfall and peak discharge is the lag time. A short lag time and a high peak mean more flood risk."] },
  { type: "points", title: "Flood risk rises with…", items: ["Heavy or prolonged rain", "Saturated or frozen ground", "Steep slopes, impermeable rock", "Urbanisation and deforestation"],
    say: ["Heavy or long-lasting rain.", "Ground that's already saturated or frozen.", "Steep slopes and impermeable rock.", "And people: concrete and drains speed water into rivers, and cutting trees reduces interception."] },
  { type: "quiz", q: "A short lag time means…", o: ["Higher flood risk", "Lower flood risk", "No rain fell", "The river is dry"], a: 0,
    why: "Water reaches the river quickly, causing a sharp peak.", say: ["What does a short lag time mean for flood risk?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "The UK's changing population and economy", sub: "Ageing, migration and a service economy.", mark: "🇬🇧",
    say: ["The UK's people and jobs have changed dramatically over the last fifty years."] },
  { type: "points", title: "Population", items: ["About 68 million", "Ageing: longer lives, lower birth rates", "International migration adds young workers"],
    say: ["The UK has about sixty-eight million people.", "It's ageing, as people live longer and have fewer children.", "International migrants, often young adults, fill jobs and add to growth."] },
  { type: "compare", title: "Changing economy", h: ["Trend"],
    rows: [["Primary", "Sharp decline"], ["Secondary", "Deindustrialisation since the 1970s"], ["Tertiary", "Over 80% of jobs"], ["Quaternary", "Growing: research and IT"]],
    say: ["Farming and mining have shrunk dramatically.", "Manufacturing declined as production moved overseas.", "Services now provide over eighty percent of jobs.", "And knowledge industries are growing, often near universities."] },
  { type: "big", text: "The north–south divide", sub: "Higher wages and house prices in the south-east",
    say: ["London and the south-east have more jobs, higher wages and higher house prices.", "Many former industrial towns in the north still feel the effects of deindustrialisation."] },
  { type: "quiz", q: "Which sector employs most UK workers?", o: ["Tertiary", "Primary", "Secondary", "Mining"], a: 0,
    why: "Services such as retail, health and finance dominate.", say: ["Which sector employs the most people in the UK?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "A major UK city: London", sub: "Growth, inequality and regeneration.", mark: "🏛",
    say: ["London is a global city of almost nine million people, with some of the UK's greatest wealth and deepest poverty."] },
  { type: "points", title: "Challenges", items: ["Very high housing costs", "Inequality: Canary Wharf beside Tower Hamlets", "Congestion and air pollution"],
    say: ["Housing is extremely expensive.", "Gleaming office towers at Canary Wharf sit beside some of the most deprived neighbourhoods in Tower Hamlets.", "And traffic brings congestion and poor air quality."] },
  { type: "compare", title: "Regeneration", h: ["What changed", "Criticism"],
    rows: [["Docklands (1981)", "Derelict docks → Canary Wharf, DLR", "Locals often missed out"], ["Stratford (2012)", "Olympic Park, homes, Westfield", "Rising costs for residents"]],
    say: ["From 1981, derelict docks became the Canary Wharf financial district, with a new light railway. But many jobs went to newcomers.", "The 2012 Olympics turned polluted industrial land in Stratford into a park, homes and shops. Some locals were priced out."] },
  { type: "points", title: "Becoming sustainable", items: ["Congestion charge and ULEZ", "Elizabeth line and cycle hire", "Brownfield building and green spaces"],
    say: ["Charges discourage polluting traffic in the centre.", "New rail lines and cycle hire give alternatives to driving.", "And building on brownfield land protects the green belt."] },
  { type: "quiz", q: "Which area was regenerated for the 2012 Olympics?", o: ["Stratford", "Kensington", "Richmond", "Croydon"], a: 0,
    why: "Former industrial land became the Olympic Park.", say: ["Which part of London was regenerated for the 2012 Olympics?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Fieldwork and skills", sub: "Enquiry, sampling, graphs and statistics.", mark: "📏",
    say: ["Geographers investigate the real world. Paper 2 tests how you'd plan, carry out and evaluate an enquiry."] },
  { type: "flow", title: "The enquiry process", nodes: ["Question", "Collect data", "Present", "Analyse", "Conclude", "Evaluate"],
    say: ["Start with a question or hypothesis.", "Collect primary data yourself, and secondary data from others.", "Present it in suitable graphs and maps.", "Analyse the patterns and anomalies.", "Conclude by answering your question.", "And evaluate: how reliable were your methods, and how could they be improved?"] },
  { type: "compare", title: "Sampling", h: ["How"],
    rows: [["Random", "Every point has an equal chance"], ["Systematic", "Regular intervals, e.g. every 10 m"], ["Stratified", "In proportion to subgroups"]],
    say: ["Random sampling avoids bias by chance.", "Systematic sampling uses regular intervals.", "Stratified sampling makes sure each group is fairly represented."] },
  { type: "calc", title: "Statistics", q: "Pebble sizes: 3, 5, 6, 8, 13 cm",
    lines: ["Mean = 35 ÷ 5 = 7 cm", "Median = middle value = 6 cm", "Range = 13 − 3 = 10 cm"],
    say: ["Add them up and divide by five: a mean of seven.", "The middle value is six, the median.", "And the range, highest minus lowest, is ten."] },
  { type: "quiz", q: "Sampling every 10 m is…", o: ["Systematic", "Random", "Stratified", "Biased"], a: 0,
    why: "It uses regular intervals.", say: ["Sampling every ten metres is which type of sampling?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "People and the biosphere", sub: "Biomes and what they give us.", mark: "🌿",
    say: ["The biosphere is the living layer of the planet. It's organised into biomes, each with its own climate and life."] },
  { type: "compare", title: "Biomes", h: ["Where", "Climate"],
    rows: [["Rainforest", "Equator", "Hot, wet all year"], ["Hot desert", "~30°", "Very dry"], ["Temperate forest", "Mid-latitudes", "Mild, four seasons"], ["Taiga", "50–70° N", "Long, cold winters"]],
    say: ["Tropical rainforests sit along the equator, hot and wet all year.", "Hot deserts lie around thirty degrees, where sinking air keeps skies clear.", "Temperate forests, like the UK's, have mild weather and four seasons.", "And the taiga stretches across the far north, with long, freezing winters."] },
  { type: "compare", title: "Goods and services", h: ["Examples"],
    rows: [["Goods", "Food, timber, medicine, water"], ["Services", "Carbon storage, oxygen, flood control, pollination"]],
    say: ["Goods are things we take: food, wood, medicines and water.", "Services are the processes we rely on: storing carbon, making oxygen, controlling floods and pollinating crops."] },
  { type: "compare", title: "Can we feed everyone?", h: ["View"],
    rows: [["Malthus", "Population will outgrow food → catastrophe"], ["Boserup", "Necessity drives innovation → more food"]],
    say: ["Thomas Malthus warned that population would outgrow food, leading to famine.", "Ester Boserup argued that pressure drives invention, as the Green Revolution showed."] },
  { type: "quiz", q: "Absorbing carbon dioxide is a…", o: ["Service", "Good", "Biome", "Threat"], a: 0,
    why: "It's a natural process that benefits people.", say: ["Is absorbing carbon dioxide a good or a service?"] }
]});

S2Data.video("8a", { scenes: [
  { type: "title", title: "Tropical rainforests", sub: "Structure, threats and management.", mark: "🌳",
    say: ["Tropical rainforests cover only about six percent of the land, but hold around half of all species."] },
  { type: "flow", title: "Layers", nodes: ["Emergents", "Canopy", "Under-canopy", "Shrub layer", "Forest floor"],
    say: ["The tallest trees, the emergents, poke above everything.", "The canopy is a dense roof full of life.", "Below is the under-canopy.", "Then the shrub layer.", "And the dark forest floor, where only two percent of sunlight reaches."] },
  { type: "big", text: "Nutrients live in the trees, not the soil", sub: "Fast cycling; thin, infertile soil",
    say: ["Leaves decompose quickly in the heat, and plants absorb the nutrients straight away.", "So the soil is thin and poor. Clear the trees and the fertility disappears."] },
  { type: "compare", title: "Threats and solutions", h: ["Examples"],
    rows: [["Causes", "Cattle ranching, soya, palm oil, logging, mining"], ["Impacts", "Biodiversity loss, soil erosion, carbon released"], ["Management", "Protected areas, FSC timber, debt-for-nature, ecotourism"]],
    say: ["Cattle ranching is the biggest cause of Amazon deforestation, followed by soya, logging and mining.", "Clearing forest wipes out species, erodes soil and releases stored carbon.", "Solutions include protected areas, certified timber, debt-for-nature swaps and ecotourism."] },
  { type: "quiz", q: "The biggest cause of Amazon deforestation is…", o: ["Cattle ranching", "Tourism", "Hunting", "Fishing"], a: 0,
    why: "Vast areas are cleared for pasture.", say: ["What is the biggest cause of deforestation in the Amazon?"] }
]});

S2Data.video("8b", { scenes: [
  { type: "title", title: "The taiga", sub: "The world's largest land biome.", mark: "🌲",
    say: ["The taiga, or boreal forest, circles the far north across Canada, Scandinavia and Russia."] },
  { type: "compare", title: "Taiga vs rainforest", h: ["Taiga", "Rainforest"],
    rows: [["Climate", "Long, very cold winters", "Hot and wet all year"], ["Biodiversity", "Low", "Very high"], ["Nutrient cycling", "Slow", "Fast"]],
    say: ["The taiga has long, freezing winters, unlike the steamy rainforest.", "Only a few hardy tree species dominate, so biodiversity is low.", "Cold slows decomposition, so nutrients cycle slowly and soils are acidic."] },
  { type: "points", title: "Threats", items: ["Logging for timber and paper", "Tar sands in Alberta, Canada", "HEP reservoirs", "Acid rain, fires and pests"],
    say: ["Logging supplies timber, paper and pulp.", "In Alberta, forest is stripped to mine tar sands for oil.", "Hydroelectric dams flood huge areas.", "And acid rain, wildfires and pests are worsening as the climate warms."] },
  { type: "big", text: "A vast carbon store", sub: "Trees, soil and peat lock up huge amounts of carbon",
    say: ["The taiga stores enormous amounts of carbon, especially in its soils and peat.", "Protecting it with national parks and sustainable forestry matters for the whole planet."] },
  { type: "quiz", q: "Why are taiga trees conical?", o: ["To shed snow", "To catch rain", "To attract birds", "To grow faster"], a: 0,
    why: "Snow slides off rather than breaking branches.", say: ["Why are taiga trees cone-shaped?"] }
]});

S2Data.video("9a", { scenes: [
  { type: "title", title: "Consuming energy resources", sub: "Supply, demand and a sustainable future.", mark: "⚡",
    say: ["The world runs on energy, and around eighty percent of it still comes from fossil fuels."] },
  { type: "compare", title: "Energy sources", h: ["Examples", "Issues"],
    rows: [["Non-renewable", "Coal, oil, gas, nuclear", "Finite; emissions or waste"], ["Renewable", "Solar, wind, HEP, tidal, geothermal", "Clean but some are intermittent"]],
    say: ["Coal, oil, gas and nuclear will run out, and fossil fuels release greenhouse gases.", "Renewables won't run out and are low-carbon, but wind and solar depend on the weather."] },
  { type: "points", title: "Rising demand", items: ["Population growth", "Industrialisation in emerging countries", "Rising incomes: more cars and appliances"],
    say: ["More people need more energy.", "Emerging countries are industrialising fast.", "And as incomes rise, people buy more cars and appliances."] },
  { type: "points", title: "Towards sustainability", items: ["More renewables", "Efficiency: insulation, LEDs", "Reduce demand: public transport", "Agreements: Paris 2015"],
    say: ["Expanding renewables cuts emissions.", "Efficiency means doing the same with less energy.", "Reducing demand, through public transport and behaviour, helps too.", "And international agreements like Paris set shared targets."] },
  { type: "quiz", q: "Which is non-renewable?", o: ["Nuclear (uranium)", "Wind", "Solar", "Geothermal"], a: 0,
    why: "Uranium is a finite resource.", say: ["Which of these energy sources is non-renewable?"] }
]});
