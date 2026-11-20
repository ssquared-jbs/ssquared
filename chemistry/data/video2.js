/* Video explainers — Chemistry Topic 2. */

CHEM.video("2a", {
  scenes: [
    { type: "title", title: "Group 1: the alkali metals", sub: "Soft, reactive metals that get more reactive down the group.", mark: "Li Na K",
      say: ["Lithium, sodium and potassium are the Group one metals you need to know. They're soft, shiny when cut, and react vigorously with water."] },
    { type: "compare", title: "Reacting with water", h: ["Observation", "Why"],
      rows: [["Lithium", "Floats, fizzes steadily", "Least reactive of the three"], ["Sodium", "Melts into a ball, whizzes around", "Reaction gives out heat"], ["Potassium", "Lilac flame, may crackle", "Most reactive"]],
      say: ["Lithium floats on water and fizzes steadily.",
            "Sodium melts into a silvery ball and whizzes around the surface. The reaction releases enough heat to melt it.",
            "Potassium is even more vigorous. The hydrogen catches fire with a lilac flame."] },
    { type: "equation", title: "The reaction", rows: [["metal", "+", "water", "→", { t: "metal hydroxide", k: 1 }, "+", "hydrogen"], [{ t: "2Na", s: 1 }, { t: "+", s: 1 }, { t: "2H₂O", s: 1 }, { t: "→", s: 1 }, { t: "2NaOH", k: 1, s: 1 }, { t: "+", s: 1 }, { t: "H₂", s: 1 }]],
      note: "The hydroxide makes the solution alkaline: universal indicator turns purple", noteStep: 2,
      say: ["Every alkali metal reacts with water to make a metal hydroxide and hydrogen.",
            "For sodium: two N a plus two H two O gives two N a O H plus H two.",
            "The metal hydroxide dissolves to form an alkaline solution. That's where the name alkali metals comes from."] },
    { type: "atom", title: "Why reactivity increases down the group", symbol: "K", shells: [2, 8, 8, 1], config: "outer electron further from the nucleus",
      say: ["Each alkali metal has one outer electron, which it loses when it reacts. Going down the group, atoms get bigger.",
            "There are more shells,", "between the nucleus", "and the outer electron.",
            "So the outer electron is further from the nucleus and more shielded. It's attracted less strongly and lost more easily. That's why potassium is more reactive than sodium."] },
    { type: "quiz", q: "Predict how rubidium reacts with water compared with potassium.", o: ["Less vigorously", "More vigorously", "No reaction", "Exactly the same"], a: 1,
      why: "Rubidium is below potassium, so it loses its outer electron even more easily.", say: ["Rubidium is below potassium in Group one. How will it react with water?"] }
  ]
});

CHEM.video("2b", {
  scenes: [
    { type: "title", title: "Group 7: the halogens", sub: "Colours, states, trends and displacement reactions.", mark: "Cl Br I",
      say: ["The halogens are reactive non-metals with seven outer electrons. They exist as diatomic molecules, like C l two."] },
    { type: "compare", title: "Know their appearance", h: ["State at room temp", "Colour"],
      rows: [["Chlorine", "Gas", "Pale yellow-green"], ["Bromine", "Liquid", "Red-brown"], ["Iodine", "Solid", "Grey-black (purple vapour)"]],
      say: ["Chlorine is a pale yellow-green gas.", "Bromine is a red-brown liquid.", "Iodine is a grey-black solid that gives off a purple vapour when warmed. Notice the trend: they get darker, and melting and boiling points increase down the group."] },
    { type: "big", text: "Reactivity decreases down the group", sub: "Outer shell further from the nucleus, so it's harder to attract an extra electron",
      say: ["Halogens react by gaining one electron. Going down the group, they get less reactive.",
            "The outer shell is further from the nucleus and more shielded, so the attraction for an incoming electron is weaker."] },
    { type: "equation", title: "Displacement reactions",
      rows: [["Cl₂", "+", "2KBr", "→", "2KCl", "+", { t: "Br₂", k: 1 }], [{ t: "Cl₂", s: 1 }, { t: "+", s: 1 }, { t: "2Br⁻", s: 1 }, { t: "→", s: 1 }, { t: "2Cl⁻", s: 1 }, { t: "+", s: 1 }, { t: "Br₂", k: 1, s: 1 }]],
      note: "Chlorine is reduced (gains electrons); bromide is oxidised (loses electrons)", noteStep: 2,
      say: ["A more reactive halogen displaces a less reactive one from a solution of its salt. Add chlorine water to potassium bromide and the solution turns orange as bromine forms.",
            "The ionic equation leaves out the spectator potassium ions: C l two plus two B r minus gives two C l minus plus B r two.",
            "This is a redox reaction. Chlorine gains electrons, so it's reduced. Bromide ions lose electrons, so they're oxidised."] },
    { type: "points", title: "Hydrogen chloride and acidity", items: ["HCl gas dissolves in <b>water</b> → hydrochloric acid (H⁺ ions)", "In <b>methylbenzene</b> it stays as molecules → not acidic"],
      say: ["When hydrogen chloride dissolves in water, it splits into ions, releasing H plus ions. That makes it acidic.",
            "Dissolved in methylbenzene, it stays as molecules with no H plus ions, so it isn't acidic."] },
    { type: "quiz", q: "Which pair will react?", o: ["Iodine + potassium bromide", "Bromine + potassium iodide", "Iodine + potassium chloride", "Bromine + potassium chloride"], a: 1,
      why: "Bromine is more reactive than iodine, so it displaces it.", say: ["Which of these pairs will react?"] }
  ]
});

CHEM.video("2c", {
  scenes: [
    { type: "title", title: "Gases in the atmosphere", sub: "What air is made of, oxygen, and carbon dioxide.", mark: "O₂",
      say: ["Air is a mixture of gases. This video covers its composition, how to measure the oxygen in it, and carbon dioxide."] },
    { type: "pyramid", title: "Composition of dry air", levels: [{ t: "Nitrogen ≈ 78%", w: 1 }, { t: "Oxygen ≈ 21%", w: 0.5 }, { t: "Argon ≈ 0.9%", w: 0.3 }, { t: "CO₂ ≈ 0.04%", w: 0.22 }],
      say: ["About seventy eight percent of dry air is nitrogen.", "About twenty one percent is oxygen.", "Nearly one percent is argon.", "And just point zero four percent is carbon dioxide."] },
    { type: "calc", title: "Measuring oxygen", q: "100 cm³ of air is passed over hot copper until the volume stops changing. 79 cm³ is left.",
      lines: ["Copper reacts with oxygen: 2Cu + O₂ → 2CuO", "Oxygen used = 100 − 79 = 21 cm³", "% oxygen = 21 ÷ 100 × 100 = 21%"],
      say: ["To measure oxygen, pass a known volume of air back and forth over hot copper using two gas syringes. The copper reacts with the oxygen and turns black.",
            "When the volume stops changing and has cooled, the decrease is the volume of oxygen. A hundred minus seventy nine is twenty one.",
            "So the air was twenty one percent oxygen. You can do a similar experiment with damp iron wool, which rusts and uses up oxygen over a few days."] },
    { type: "compare", title: "Burning elements in oxygen", h: ["Observation", "Oxide in water"],
      rows: [["Magnesium", "Bright white flame", "Alkaline (basic oxide)"], ["Hydrogen", "Squeaky pop", "Water: neutral"], ["Sulfur", "Blue flame", "Acidic"]],
      say: ["Magnesium burns with a bright white flame, making magnesium oxide. Metal oxides are basic.",
            "Hydrogen burns to make water.",
            "Sulfur burns with a blue flame to make sulfur dioxide, which dissolves to form an acidic solution. Non-metal oxides are acidic."] },
    { type: "points", title: "Carbon dioxide", items: ["Made in the lab: <b>calcium carbonate + dilute hydrochloric acid</b>", "Test: turns <b>limewater milky</b>", "Denser than air and doesn't burn → fire extinguishers", "A <b>greenhouse gas</b>: rising levels → climate change"],
      say: ["To make carbon dioxide in the lab, react marble chips, calcium carbonate, with dilute hydrochloric acid.",
            "The test for carbon dioxide: bubble it through limewater, which turns milky.",
            "It's denser than air and doesn't burn, so it's used in fire extinguishers.",
            "It's also a greenhouse gas. Burning fossil fuels has increased its level, which is linked to climate change."] },
    { type: "quiz", q: "Sulfur dioxide is dissolved in water with universal indicator. What colour?", o: ["Purple", "Green", "Red/orange", "Blue"], a: 2,
      why: "Non-metal oxides form acidic solutions.", say: ["What colour does universal indicator turn in a solution of sulfur dioxide?"] }
  ]
});

CHEM.video("2d", {
  scenes: [
    { type: "title", title: "The reactivity series", sub: "Ranking metals, displacement, redox and rusting.", mark: "K→Au",
      say: ["The reactivity series ranks metals by how readily they react. It predicts displacement reactions and explains rusting."] },
    { type: "flow", col: true, title: "Most reactive at the top", nodes: ["potassium · sodium · lithium · calcium", "magnesium · aluminium · <b>carbon</b>", "zinc · iron · <b>hydrogen</b>", "copper · silver · gold"],
      say: ["At the top are potassium, sodium, lithium and calcium. They react with cold water.",
            "Then magnesium and aluminium. Carbon fits in here, which matters for extracting metals.",
            "Then zinc and iron, with hydrogen just below. Metals above hydrogen react with dilute acids.",
            "At the bottom are copper, silver and gold, which don't react with dilute acids."] },
    { type: "equation", title: "Displacement", rows: [["Mg", "+", "CuSO₄", "→", "MgSO₄", "+", { t: "Cu", k: 1 }], [{ t: "Mg", s: 1 }, { t: "→", s: 1 }, { t: "Mg²⁺ + 2e⁻", s: 1 }, { t: "oxidised", k: 1, s: 1 }], [{ t: "Cu²⁺ + 2e⁻", s: 2 }, { t: "→", s: 2 }, { t: "Cu", s: 2 }, { t: "reduced", k: 1, s: 2 }]],
      say: ["A more reactive metal displaces a less reactive one from a solution of its compound. Magnesium in copper sulfate: the blue colour fades and pink-brown copper appears.",
            "Magnesium atoms lose electrons. They're oxidised.",
            "Copper ions gain electrons. They're reduced. Oxidation and reduction together make this a redox reaction."] },
    { type: "points", title: "Rusting", items: ["Iron needs <b>both water and oxygen</b> to rust", "Rust = hydrated iron(III) oxide", "<b>Barrier</b> methods: paint, oil, grease, plastic", "<b>Galvanising</b>: zinc coating corrodes instead (sacrificial)"],
      say: ["Iron rusts only when both water and oxygen are present. Prove it with three test tubes: one with air and water, one with boiled water under oil, and one with dry air.",
            "Rust is hydrated iron three oxide.",
            "Barrier methods like paint, oil and plastic keep water and oxygen away.",
            "Galvanising coats iron with zinc. Even if it's scratched, the more reactive zinc corrodes instead of the iron. That's sacrificial protection."] },
    { type: "quiz", q: "Which metal would NOT displace iron from iron(II) sulfate?", o: ["Zinc", "Magnesium", "Copper", "Aluminium"], a: 2,
      why: "Copper is below iron in the series.", say: ["Which of these metals would not displace iron from iron two sulfate?"] }
  ]
});

CHEM.video("2e", {
  scenes: [
    { type: "title", title: "Extraction and uses of metals", sub: "Why the method depends on reactivity.", mark: "Fe Al",
      say: ["Most metals are found as compounds in ores. How you extract them depends on where they are in the reactivity series."] },
    { type: "compare", title: "Choosing a method", h: ["Method", "Examples"],
      rows: [["More reactive than carbon", "Electrolysis", "Aluminium, sodium"], ["Less reactive than carbon", "Heat with carbon (reduction)", "Iron, zinc"], ["Very unreactive", "Found uncombined", "Gold"]],
      say: ["Metals more reactive than carbon, like aluminium, must be extracted by electrolysis. It's expensive because it uses lots of electricity.",
            "Metals less reactive than carbon, like iron, can be extracted by heating the ore with carbon. Carbon removes the oxygen: it reduces the metal oxide.",
            "Very unreactive metals, like gold, are found uncombined, as the element itself."] },
    { type: "flow", title: "The blast furnace", nodes: ["C + O₂ → CO₂", "CO₂ + C → 2CO", "Fe₂O₃ + 3CO → 2Fe + 3CO₂"], arrows: ["more coke", "reduction"],
      say: ["In the blast furnace, coke burns in hot air to make carbon dioxide.",
            "That carbon dioxide reacts with more coke to make carbon monoxide.",
            "Carbon monoxide reduces iron three oxide to molten iron. Limestone is added to remove sand impurities as slag."] },
    { type: "equation", title: "Extracting aluminium", rows: [[{ t: "Cathode:", k: 1 }, "Al³⁺ + 3e⁻", "→", "Al"], [{ t: "Anode:", k: 1, s: 1 }, { t: "2O²⁻", s: 1 }, { t: "→", s: 1 }, { t: "O₂ + 4e⁻", s: 1 }]],
      note: "Aluminium oxide is dissolved in molten cryolite to lower the operating temperature", noteStep: 2,
      say: ["Aluminium is made by electrolysis of aluminium oxide. At the cathode, aluminium ions gain electrons and form molten aluminium.",
            "At the anode, oxide ions lose electrons to form oxygen. The oxygen reacts with the carbon anodes, so they burn away and must be replaced.",
            "The aluminium oxide is dissolved in molten cryolite, which lowers the temperature needed and saves energy."] },
    { type: "points", title: "Uses match properties", items: ["<b>Aluminium</b>: low density, resists corrosion → aircraft, cans", "<b>Copper</b>: conducts, ductile → wires", "<b>Steel</b> (iron + carbon): strong → buildings, cars", "<b>Stainless steel</b>: resists corrosion → cutlery"],
      say: ["Aluminium has a low density and resists corrosion, so it's used for aircraft and drinks cans.",
            "Copper is a great conductor and can be drawn into wires.",
            "Steel, an alloy of iron and carbon, is strong, so it's used in buildings and cars.",
            "Stainless steel contains chromium and nickel and resists corrosion, so it's used for cutlery."] },
    { type: "quiz", q: "Why can't aluminium be extracted by heating with carbon?", o: ["It's more reactive than carbon", "It's too dense", "It melts too easily", "Carbon is too expensive"], a: 0,
      why: "Carbon can only reduce oxides of metals below it in the series.", say: ["Why can't aluminium be extracted by heating with carbon?"] }
  ]
});

CHEM.video("2f", {
  scenes: [
    { type: "title", title: "Acids, alkalis and titrations", sub: "pH, indicators, neutralisation and titration calculations.", mark: "pH",
      say: ["This video covers the pH scale, indicators, neutralisation, and how to do and calculate a titration."] },
    { type: "points", title: "Acids and alkalis", items: ["<b>Acid</b>: a source of H⁺ ions, pH below 7", "<b>Alkali</b>: a source of OH⁻ ions, pH above 7", "<b>Neutral</b>: pH 7", "Neutralisation: H⁺ + OH⁻ → H₂O"],
      say: ["Acids are a source of hydrogen ions, H plus. Their pH is below seven.", "Alkalis are a source of hydroxide ions, O H minus. Their pH is above seven.", "Neutral solutions have a pH of exactly seven.", "In neutralisation, hydrogen ions and hydroxide ions react to make water."] },
    { type: "compare", title: "Indicators", h: ["In acid", "In alkali"],
      rows: [["Litmus", "Red", "Blue"], ["Phenolphthalein", "Colourless", "Pink"], ["Methyl orange", "Red", "Yellow"]],
      say: ["Litmus is red in acid and blue in alkali.", "Phenolphthalein is colourless in acid and pink in alkali.", "Methyl orange is red in acid and yellow in alkali. Use one of these in a titration, not universal indicator, because they change colour sharply."] },
    { type: "flow", title: "Doing a titration", nodes: ["25.0 cm³ alkali by <b>pipette</b> + indicator", "Add acid from a <b>burette</b>, swirling", "Stop at the colour change", "Repeat until <b>concordant</b>"],
      say: ["Use a pipette to measure exactly twenty five centimetres cubed of alkali into a conical flask, and add a few drops of indicator.",
            "Add acid from a burette, swirling the flask. Go drop by drop near the end.",
            "Stop as soon as the indicator changes colour, and record the volume added. That's the titre.",
            "Repeat until you have concordant results, within point one centimetres cubed of each other, and take the mean."] },
    { type: "calc", title: "Titration calculation", q: "25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 20.0 cm³ of HCl. Find [HCl].",
      lines: ["mol NaOH = 0.100 × 25.0 ÷ 1000 = 0.00250", "NaOH : HCl = 1 : 1 → 0.00250 mol HCl", "[HCl] = 0.00250 ÷ 0.0200 = 0.125 mol/dm³"],
      say: ["First, moles of sodium hydroxide: concentration times volume in decimetres cubed. Point one times twenty five over a thousand is point zero zero two five moles.",
            "The equation is one to one, so there's the same number of moles of hydrochloric acid.",
            "Concentration equals moles divided by volume: point zero zero two five divided by point zero two. That's point one two five moles per decimetre cubed."] },
    { type: "quiz", q: "Titres: 23.40, 24.10, 23.45, 23.50 cm³. Which are concordant?", o: ["All four", "23.40, 23.45, 23.50", "24.10 and 23.50", "Only 23.45"], a: 1,
      why: "They're within 0.10 cm³ of each other. Ignore 24.10.", say: ["Here are four titres. Which ones are concordant?"] }
  ]
});

CHEM.video("2g", {
  scenes: [
    { type: "title", title: "Acids, bases and salt preparations", sub: "Making soluble and insoluble salts.", mark: "salt",
      say: ["A salt forms when the hydrogen in an acid is replaced by a metal. You need to know how to make them, and which method to choose."] },
    { type: "points", title: "General equations", items: ["acid + metal → salt + hydrogen", "acid + base → salt + water", "acid + carbonate → salt + water + carbon dioxide", "Hydrochloric → <b>chlorides</b> · sulfuric → <b>sulfates</b> · nitric → <b>nitrates</b>"],
      say: ["Acid plus metal gives a salt plus hydrogen.", "Acid plus a base, like a metal oxide or hydroxide, gives a salt plus water.", "Acid plus a carbonate gives a salt, water and carbon dioxide.", "The acid decides the salt: hydrochloric acid makes chlorides, sulfuric acid makes sulfates, nitric acid makes nitrates."] },
    { type: "points", title: "Solubility rules", items: ["All <b>sodium, potassium, ammonium</b> salts are soluble", "All <b>nitrates</b> are soluble", "Chlorides soluble, except <b>silver and lead</b>", "Sulfates soluble, except <b>barium, calcium, lead</b>", "Carbonates and hydroxides insoluble, except Na, K, NH₄"],
      say: ["All sodium, potassium and ammonium salts are soluble.", "All nitrates are soluble.", "Most chlorides are soluble, except silver chloride and lead chloride.", "Most sulfates are soluble, except barium, calcium and lead sulfates.", "Most carbonates and hydroxides are insoluble, except sodium, potassium and ammonium ones."] },
    { type: "flow", title: "Soluble salt from an insoluble base", nodes: ["Warm acid, add <b>excess</b> CuO", "<b>Filter</b> off the excess", "<b>Heat</b> to evaporate some water", "Cool to <b>crystallise</b>, then dry"],
      say: ["To make copper sulfate: warm dilute sulfuric acid and add copper oxide until no more dissolves. The excess makes sure all the acid has reacted.",
            "Filter to remove the leftover copper oxide.",
            "Heat the solution to evaporate some of the water.",
            "Leave it to cool so crystals form, then pat them dry with filter paper."] },
    { type: "compare", title: "Which method?", h: ["Method", "Example"],
      rows: [["Insoluble base or carbonate", "Excess solid, filter, crystallise", "CuSO₄"], ["Soluble base (alkali)", "Titration, then crystallise", "NaCl"], ["Insoluble salt", "Precipitation: mix two solutions, filter, wash, dry", "BaSO₄"]],
      say: ["If the base is insoluble, add it in excess, then filter and crystallise.",
            "If both reactants are soluble, like sodium hydroxide and hydrochloric acid, you can't filter off the excess. Do a titration to find the right volumes, repeat without indicator, then crystallise.",
            "For an insoluble salt like barium sulfate, mix two solutions to form a precipitate. Filter, wash with distilled water, and dry."] },
    { type: "quiz", q: "How would you make lead(II) iodide?", o: ["Titration", "Excess solid and filter", "Precipitation", "Electrolysis"], a: 2,
      why: "It's insoluble: mix lead(II) nitrate and potassium iodide solutions.", say: ["Lead two iodide is insoluble. How would you make it?"] }
  ]
});

CHEM.video("2h", {
  scenes: [
    { type: "title", title: "Chemical tests", sub: "Gases, flame tests and ion tests in one place.", mark: "test",
      say: ["Chemical tests are easy marks if you learn them precisely. Here are the ones you need."] },
    { type: "compare", title: "Gas tests", h: ["Test", "Positive result"],
      rows: [["Hydrogen", "Lit splint", "Squeaky pop"], ["Oxygen", "Glowing splint", "Relights"], ["Carbon dioxide", "Bubble through limewater", "Turns milky"], ["Ammonia", "Damp red litmus", "Turns blue"], ["Chlorine", "Damp blue litmus", "Turns red, then bleached white"]],
      say: ["Hydrogen gives a squeaky pop with a lit splint.", "Oxygen relights a glowing splint.", "Carbon dioxide turns limewater milky.", "Ammonia turns damp red litmus paper blue.", "And chlorine bleaches damp litmus paper."] },
    { type: "points", title: "Flame tests", two: true, items: ["Li⁺ <b>red</b>", "Na⁺ <b>yellow</b>", "K⁺ <b>lilac</b>", "Ca²⁺ <b>orange-red</b>", "Cu²⁺ <b>blue-green</b>"],
      say: ["Dip a clean wire loop in the sample and hold it in a blue flame. Lithium gives a red flame.", "Sodium, yellow.", "Potassium, lilac.", "Calcium, orange-red.", "Copper two, blue-green."] },
    { type: "compare", title: "Add sodium hydroxide solution", h: ["Precipitate", "Note"],
      rows: [["Cu²⁺", "Blue", ""], ["Fe²⁺", "Green", ""], ["Fe³⁺", "Orange-brown", ""], ["NH₄⁺", "No precipitate", "Warm: ammonia gas turns red litmus blue"]],
      say: ["Many metal ions form coloured hydroxide precipitates. Copper two gives blue.", "Iron two gives green.", "Iron three gives orange-brown.", "Ammonium ions give no precipitate, but warming releases ammonia, which turns damp red litmus blue."] },
    { type: "compare", title: "Negative ion tests", h: ["Add", "Positive result"],
      rows: [["Chloride", "Dilute HNO₃, then AgNO₃", "White precipitate"], ["Bromide", "Dilute HNO₃, then AgNO₃", "Cream precipitate"], ["Iodide", "Dilute HNO₃, then AgNO₃", "Yellow precipitate"], ["Sulfate", "Dilute HCl, then BaCl₂", "White precipitate"], ["Carbonate", "Dilute acid", "Fizzes; CO₂ turns limewater milky"]],
      say: ["For halides, acidify with dilute nitric acid, then add silver nitrate. Chloride gives a white precipitate.", "Bromide gives cream.", "Iodide gives yellow.", "For sulfate, acidify with hydrochloric acid, then add barium chloride. A white precipitate forms.", "Carbonates fizz with acid, and the gas turns limewater milky."] },
    { type: "quiz", q: "A solution gives a lilac flame and a white precipitate with acidified BaCl₂. What is it?", o: ["Sodium chloride", "Potassium sulfate", "Potassium chloride", "Copper sulfate"], a: 1,
      why: "Lilac = potassium; white precipitate with barium chloride = sulfate.", say: ["Put it together. Lilac flame, and a white precipitate with acidified barium chloride. What's the compound?"] }
  ]
});
