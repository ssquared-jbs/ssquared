/* Video explainers — Chemistry GCSE extras (1CH0). */

CHEM.video("5a", {
  scenes: [
    { type: "title", title: "Quantitative and analytical extras", sub: "Atom economy, limiting reactants and flame photometry.", mark: "%",
      say: ["These are the extra calculation and analysis skills in the Edexcel GCSE course."] },
    { type: "equation", title: "Atom economy", rows: [[{ t: "atom economy", k: 1 }, "=", { t: "Mr of desired product", s: 1 }, "÷", { t: "total Mr of all products", s: 1 }, "× 100", ]],
      note: "High atom economy = less waste, more sustainable", noteStep: 2,
      say: ["Atom economy measures how much of the starting materials ends up in the product you want.",
            "It's the relative formula mass of the desired product divided by the total relative formula mass of all the products, times one hundred.",
            "A high atom economy means less waste, which is cheaper and more sustainable."] },
    { type: "calc", title: "Worked example", q: "CaCO₃ → CaO + CO₂. CaO is wanted. (Mr: CaO = 56, CO₂ = 44)",
      lines: ["Total Mr of products = 56 + 44 = 100", "Atom economy = 56 ÷ 100 × 100", "= 56%"],
      say: ["Making quicklime from limestone. Total M r of products is fifty six plus forty four, a hundred.", "The desired product is calcium oxide, M r fifty six.", "So the atom economy is fifty six percent."] },
    { type: "calc", title: "Limiting reactants", q: "12.0 g of carbon burns in 16.0 g of oxygen. C + O₂ → CO₂",
      lines: ["mol C = 12.0 ÷ 12 = 1.0 · mol O₂ = 16.0 ÷ 32 = 0.50", "Need 1 : 1, so O₂ runs out first: O₂ is limiting", "mol CO₂ = 0.50 → mass = 0.50 × 44 = 22 g"],
      say: ["When one reactant runs out first, it limits how much product forms. Find the moles of each: one mole of carbon, half a mole of oxygen.",
            "The equation needs them one to one, so the oxygen runs out first. Oxygen is the limiting reactant, and carbon is in excess.",
            "So only half a mole of carbon dioxide forms. That's twenty two grams."] },
    { type: "points", title: "Flame photometry", items: ["Each metal ion gives a unique <b>line spectrum</b>", "Identifies ions even in a <b>mixture</b>", "Light <b>intensity</b> + a <b>calibration curve</b> → concentration"],
      say: ["Flame photometry is an instrumental version of a flame test. Each metal ion emits a unique pattern of wavelengths, its line spectrum.", "Unlike a flame test, it can identify ions in a mixture.", "And by measuring the intensity of light and comparing it with a calibration curve, it gives the concentration too."] },
    { type: "quiz", q: "Which reaction type always has 100% atom economy?", o: ["Thermal decomposition", "Addition", "Displacement", "Neutralisation"], a: 1,
      why: "There's only one product.", say: ["Which type of reaction always has an atom economy of one hundred percent?"] }
  ]
});

CHEM.video("5b", {
  scenes: [
    { type: "title", title: "Transition metals, alloys and corrosion", sub: "Properties, alloys, rusting and electroplating.", mark: "Fe Cu",
      say: ["Transition metals sit in the middle of the Periodic Table. This video covers their properties, alloys, corrosion and electroplating."] },
    { type: "points", title: "Transition metal properties", items: ["High <b>melting points</b> and <b>densities</b>", "Form <b>coloured compounds</b>", "Act as <b>catalysts</b> (iron in the Haber process)", "Form ions with <b>different charges</b> (Fe²⁺, Fe³⁺)"],
      say: ["Compared with Group one metals, transition metals have high melting points and high densities.", "They form coloured compounds. Copper sulfate is blue, for example.", "They're often catalysts, like iron in the Haber process.", "And they form ions with different charges, like iron two and iron three."] },
    { type: "compare", title: "Useful alloys", h: ["Made of", "Use"],
      rows: [["Steel", "Iron + carbon", "Buildings, cars"], ["Stainless steel", "Iron + chromium, nickel", "Cutlery, sinks"], ["Brass", "Copper + zinc", "Instruments, fittings"], ["Gold alloys", "Gold + copper, silver", "Jewellery (harder)"]],
      say: ["Steel is iron with a little carbon. It's strong.", "Stainless steel adds chromium and nickel, so it resists corrosion.", "Brass is copper and zinc.", "And jewellery gold is alloyed with copper or silver, because pure gold is too soft. Twenty four carat is pure gold. Eighteen carat is seventy five percent gold."] },
    { type: "points", title: "Preventing corrosion", items: ["<b>Barrier</b>: paint, oil, plastic, or plating with another metal", "<b>Sacrificial</b>: attach a more reactive metal (Mg, Zn)", "Aluminium protects itself with an <b>oxide layer</b>"],
      say: ["Corrosion is a metal being destroyed by reacting with its environment. Barrier methods keep air and water out.", "Sacrificial protection attaches a more reactive metal, like magnesium blocks on ships. It corrodes instead.", "Aluminium is protected by its own thin, tough layer of aluminium oxide."] },
    { type: "flow", title: "Electroplating a spoon with silver", nodes: ["Spoon = <b>cathode</b> (−)", "Silver = <b>anode</b> (+)", "Electrolyte has <b>Ag⁺</b> ions"], arrows: ["", ""],
      say: ["Electroplating uses electrolysis to coat an object with a thin layer of metal. The object to be plated is the cathode.", "The plating metal is the anode.", "The electrolyte contains ions of the plating metal. Silver ions gain electrons at the spoon and coat it in silver. It improves appearance and resists corrosion."] },
    { type: "quiz", q: "A ring is 18 carat gold. What percentage is gold?", o: ["18%", "50%", "75%", "100%"], a: 2,
      why: "18 ÷ 24 × 100 = 75%.", say: ["Eighteen carat gold. What percentage of it is gold?"] }
  ]
});

CHEM.video("5c", {
  scenes: [
    { type: "title", title: "The Haber process and fertilisers", sub: "Making ammonia, compromise conditions, and NPK fertilisers.", mark: "NH₃",
      say: ["Ammonia is used to make fertilisers that help feed billions of people. Here's how it's made, and why the conditions are a compromise."] },
    { type: "equation", title: "The reaction", rows: [["N₂", "+", "3H₂", "⇌", { t: "2NH₃", k: 1 }]], labels: [{ t: "N₂ from air", s: 1 }, { t: "H₂ from natural gas", s: 1 }, { t: "exothermic forwards", s: 2 }],
      say: ["Nitrogen and hydrogen react reversibly to make ammonia.", "Nitrogen comes from the air. Hydrogen comes from natural gas.", "The forward reaction is exothermic."] },
    { type: "compare", title: "Compromise conditions", h: ["Used", "Why"],
      rows: [["Temperature", "450 °C", "Lower gives more yield but too slow"], ["Pressure", "200 atm", "Higher gives more yield but costly and dangerous"], ["Catalyst", "Iron", "Faster; doesn't change yield"]],
      say: ["The temperature is four hundred and fifty degrees. A lower temperature would give a higher yield, because the forward reaction is exothermic, but it'd be too slow.",
            "The pressure is two hundred atmospheres. Higher pressure favours the side with fewer gas molecules, but very high pressure is expensive and dangerous.",
            "An iron catalyst speeds things up without affecting the yield."] },
    { type: "flow", title: "Unreacted gases", nodes: ["Mixture cooled", "Ammonia liquefies", "N₂ and H₂ recycled"], arrows: ["", ""],
      say: ["Only about fifteen percent turns into ammonia on each pass. The mixture is cooled.", "Ammonia liquefies and is removed.", "The unreacted nitrogen and hydrogen are recycled, so nothing's wasted."] },
    { type: "points", title: "Fertilisers", items: ["Supply <b>N, P and K</b> for plant growth", "NH₃ + HNO₃ → <b>ammonium nitrate</b>", "2NH₃ + H₂SO₄ → <b>ammonium sulfate</b>", "Lab: titration, small batch · Industry: continuous, large scale"],
      say: ["Fertilisers supply nitrogen, phosphorus and potassium, which plants need to grow.", "Ammonia and nitric acid make ammonium nitrate.", "Ammonia and sulfuric acid make ammonium sulfate.", "In the lab you'd make it by titration and crystallisation in small batches. In industry it's a continuous, large-scale process."] },
    { type: "quiz", q: "Why isn't a lower temperature used in the Haber process?", o: ["Yield would fall", "The rate would be too slow", "Iron would melt", "Ammonia would decompose"], a: 1,
      why: "Lower temperature gives a higher yield, but far too slowly.", say: ["Why isn't a lower temperature used?"] }
  ]
});

CHEM.video("5d", {
  scenes: [
    { type: "title", title: "Chemical cells and fuel cells", sub: "Turning chemical energy into electricity.", mark: "V",
      say: ["Batteries and fuel cells turn chemical energy into electrical energy."] },
    { type: "points", title: "Simple cells", items: ["Two <b>different metals</b> in an <b>electrolyte</b>", "Bigger reactivity difference → <b>higher voltage</b>", "Reactants run out → non-rechargeable cell stops", "Rechargeable: external current <b>reverses</b> the reactions"],
      say: ["A simple cell is two different metals dipped in an electrolyte and connected by a wire.", "The bigger the difference in reactivity between the metals, the bigger the voltage.", "In a non-rechargeable cell, the reaction stops when a reactant is used up.", "A rechargeable cell can be recharged, because an external current reverses the reactions."] },
    { type: "equation", title: "Hydrogen–oxygen fuel cell", rows: [["2H₂", "+", "O₂", "→", { t: "2H₂O", k: 1 }]], labels: [{ t: "only product: water", s: 1 }],
      note: "Works as long as hydrogen and oxygen are supplied", noteStep: 2,
      say: ["A fuel cell is supplied with a fuel, hydrogen, and oxygen, and produces electricity.", "The overall reaction is hydrogen plus oxygen gives water. Water is the only product.", "Unlike a battery, it keeps working as long as the fuel is supplied."] },
    { type: "compare", title: "Fuel cell vs petrol engine", h: ["Advantage", "Disadvantage"],
      rows: [["Emissions", "Only water, no CO₂ at point of use", "Hydrogen often made from fossil fuels"], ["Fuel", "More efficient", "Hydrogen is hard to store; flammable"], ["Practical", "Fewer moving parts, quiet", "Few refuelling stations"]],
      say: ["Fuel cells only produce water, with no carbon dioxide where they're used. But hydrogen is often made using fossil fuels.", "They're more efficient than burning fuel. But hydrogen is a gas, so it's hard to store, and it's flammable.", "They're quiet with few moving parts, but there aren't many places to refuel."] },
    { type: "quiz", q: "Which pair of metals gives the largest voltage in a simple cell?", o: ["Zinc and iron", "Magnesium and copper", "Copper and copper", "Iron and copper"], a: 1,
      why: "They're furthest apart in the reactivity series.", say: ["Which pair of metals gives the biggest voltage?"] }
  ]
});

CHEM.video("5e", {
  scenes: [
    { type: "title", title: "Earth's atmosphere, climate and Group 0", sub: "How the air formed, the greenhouse effect, and noble gases.", mark: "CO₂",
      say: ["The air hasn't always been like it is today. This video covers how the atmosphere evolved, the greenhouse effect, and the noble gases."] },
    { type: "flow", col: true, title: "How the atmosphere changed", nodes: ["Volcanoes release <b>CO₂</b> and water vapour", "Earth cools: water condenses into <b>oceans</b>", "Algae and plants <b>photosynthesise</b>: O₂ rises", "CO₂ falls: dissolves in oceans, locked in <b>rocks</b> and fossil fuels"],
      say: ["Early on, volcanoes released lots of carbon dioxide and water vapour, with little or no oxygen.", "As the Earth cooled, the water vapour condensed to form the oceans.", "Algae and then plants evolved. Photosynthesis released oxygen.", "Carbon dioxide levels fell as it dissolved in the oceans and got locked up in sedimentary rocks like limestone, and in fossil fuels."] },
    { type: "points", title: "The greenhouse effect", items: ["Short-wavelength radiation from the Sun passes through", "Earth emits longer-wavelength <b>infrared</b>", "Greenhouse gases (<b>CO₂, CH₄, H₂O</b>) absorb and re-emit it", "More greenhouse gases → <b>global warming</b>"],
      say: ["Short-wavelength radiation from the Sun passes through the atmosphere and warms the Earth.", "The Earth emits longer-wavelength infrared radiation.", "Greenhouse gases like carbon dioxide, methane and water vapour absorb this and re-emit it, keeping the Earth warm.", "Human activity is increasing these gases, which is causing average global temperatures to rise."] },
    { type: "points", title: "Group 0: the noble gases", items: ["<b>Full outer shells</b> → very unreactive", "Boiling points <b>increase</b> down the group", "Helium: balloons (low density, non-flammable)", "Argon: light bulbs (inert) · Neon: signs"],
      say: ["The noble gases have full outer shells, so they're very unreactive.", "Their boiling points increase down the group as the atoms get bigger.", "Helium is used in balloons, because it's less dense than air and doesn't burn.", "Argon fills light bulbs, because it won't react with the hot filament. Neon glows in signs."] },
    { type: "quiz", q: "Which process increased oxygen in the early atmosphere?", o: ["Volcanic activity", "Photosynthesis", "Respiration", "Combustion"], a: 1,
      why: "Algae and plants released oxygen.", say: ["Which process increased the oxygen in the early atmosphere?"] }
  ]
});

CHEM.video("5f", {
  scenes: [
    { type: "title", title: "Materials and nanoparticles", sub: "Choosing materials, and why tiny particles behave differently.", mark: "nm",
      say: ["Engineers choose materials by matching their properties to the job. And at the nanoscale, materials can behave in surprising ways."] },
    { type: "compare", title: "Types of material", h: ["Properties", "Example use"],
      rows: [["Ceramics", "Hard, heat-resistant, brittle", "Plates, bricks"], ["Polymers", "Light, flexible, insulators", "Packaging, wire coatings"], ["Metals", "Strong, conduct, malleable", "Bridges, wires"], ["Composites", "Combine properties", "Carbon fibre, concrete"]],
      say: ["Ceramics are hard and heat-resistant but brittle.", "Polymers are light, flexible and insulate.", "Metals are strong, conduct, and can be shaped.", "Composites combine a matrix and a reinforcement to get the best of both, like carbon fibre or reinforced concrete."] },
    { type: "big", text: "1 nm = 10⁻⁹ m", sub: "Nanoparticles are 1 to 100 nm across: just a few hundred atoms",
      say: ["A nanometre is a billionth of a metre.", "Nanoparticles are between one and a hundred nanometres across. That's just a few hundred atoms."] },
    { type: "calc", title: "Surface area : volume", q: "Compare cubes with sides of 10 nm and 1 nm.",
      lines: ["10 nm cube: SA = 600 nm², V = 1000 nm³ → ratio 0.6", "1 nm cube: SA = 6 nm², V = 1 nm³ → ratio 6", "Side 10× smaller → ratio 10× bigger"],
      say: ["The key idea is surface area to volume ratio. A ten nanometre cube has a ratio of point six.", "A one nanometre cube has a ratio of six.", "Make the side ten times smaller and the ratio gets ten times bigger. That's why nanoparticles make such good catalysts: far more of their atoms are on the surface."] },
    { type: "points", title: "Uses and risks", items: ["Sun creams: block UV without white marks", "Silver nanoparticles: antibacterial", "Catalysts, electronics, medicine", "Risk: may enter cells; long-term effects unknown"],
      say: ["Nanoparticles are used in sun creams, where they block UV without leaving white marks.", "Silver nanoparticles are antibacterial, so they're used in dressings and clothing.", "They're also used in catalysts, electronics and drug delivery.", "But they're so small they might get into cells, and their long-term effects aren't fully known yet."] },
    { type: "quiz", q: "Why are nanoparticles good catalysts?", o: ["They're heavy", "They have a very high surface area to volume ratio", "They're coloured", "They're magnetic"], a: 1,
      why: "More of their atoms are on the surface, where reactions happen.", say: ["Why do nanoparticles make good catalysts?"] }
  ]
});

CHEM.video("5g", {
  scenes: [
    { type: "title", title: "Earth's resources and sustainability", sub: "Potable water, life-cycle assessment, recycling and new ways to get copper.", mark: "♻",
      say: ["Using Earth's resources sustainably means meeting our needs without stopping future generations meeting theirs."] },
    { type: "flow", title: "Making water potable", nodes: ["Fresh water source", "<b>Filtration</b> removes solids", "<b>Sterilisation</b>: chlorine, ozone or UV"], arrows: ["", ""],
      say: ["Potable water is safe to drink. It isn't pure, because it still contains dissolved substances. In the UK we start with fresh water from rivers, lakes or underground.",
            "It's passed through filter beds to remove solids.",
            "Then it's sterilised with chlorine, ozone or ultraviolet light to kill microbes. Where fresh water is scarce, sea water can be desalinated by distillation or reverse osmosis, but that takes lots of energy."] },
    { type: "flow", title: "Life-cycle assessment", nodes: ["Extract raw materials", "Manufacture and package", "Use", "Dispose"], arrows: ["", "", ""],
      say: ["A life-cycle assessment looks at the environmental impact of a product at every stage. First, extracting and processing the raw materials.",
            "Then manufacturing and packaging.",
            "Then using the product.",
            "And finally disposing of it. Some impacts are hard to put numbers on, so L C As can be biased."] },
    { type: "points", title: "Recycling", items: ["Uses <b>less energy</b> than extracting new material", "Conserves <b>finite resources</b>", "Less waste to <b>landfill</b>", "But needs collecting, sorting and transport"],
      say: ["Recycling metals and glass usually uses much less energy than extracting new material.", "It conserves finite resources like metal ores.", "And it reduces waste going to landfill.", "But it needs collecting, sorting and transporting, which has its own costs."] },
    { type: "compare", title: "New ways to get copper", h: ["How", "Then"],
      rows: [["Phytomining", "Plants absorb copper from soil; burned to ash", "Ash dissolved in acid"], ["Bioleaching", "Bacteria make a leachate solution of copper compounds", "Copper extracted"], ["Both", "Use low-grade ores", "Electrolysis or displacement with scrap iron"]],
      say: ["High-grade copper ores are running out. In phytomining, plants grow on low-grade ore, absorb copper compounds, and are burned. The ash contains the copper.",
            "In bioleaching, bacteria produce a solution containing copper compounds.",
            "Both work with low-grade ores and avoid big mines. The copper is then extracted by electrolysis, or displaced with scrap iron."] },
    { type: "quiz", q: "What makes water potable?", o: ["It's pure H₂O", "It's safe to drink", "It's been distilled", "It contains no ions"], a: 1,
      why: "Potable water still contains dissolved substances.", say: ["What does potable mean?"] }
  ]
});
