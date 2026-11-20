/* Video explainers — A-level Chemistry Topics 6–10. */

S2Data.video("6a", {
  scenes: [
    { type: "title", title: "Introduction to organic chemistry", sub: "Naming, isomers and how reactions happen.", mark: "C–C",
      say: ["Organic chemistry is the chemistry of carbon compounds. Before reactions, you need to name compounds, spot isomers and understand mechanisms."] },
    { type: "flow", title: "Naming: 2-bromo-3-methylpentane", nodes: ["Longest chain:<br><b>pent</b>ane", "Number from the end nearest a group", "Prefixes A→Z:<br>bromo, methyl"],
      say: ["Find the longest carbon chain. Five carbons gives pentane.", "Number the chain so the groups get the lowest numbers possible.", "Then list the prefixes in alphabetical order with their positions: two bromo, three methyl pentane."] },
    { type: "compare", title: "Types of isomerism", h: ["What differs", "Example"],
      rows: [["Chain", "Carbon skeleton", "butane / methylpropane"], ["Position", "Where the group is", "propan-1-ol / propan-2-ol"], ["Functional group", "The functional group", "propanal / propanone"], ["E/Z", "Arrangement around C=C", "(E)- / (Z)-but-2-ene"]],
      say: ["Chain isomers have a different carbon skeleton.", "Position isomers have the functional group in a different place.", "Functional group isomers have different functional groups altogether.", "E Z isomers are stereoisomers. They have the same structure but a different arrangement in space."] },
    { type: "points", title: "E/Z isomerism", items: ["Needs restricted rotation about C=C", "And two different groups on each C of the C=C", "Higher atomic number = higher priority", "Priority groups same side = <b>Z</b>; opposite = <b>E</b>"],
      say: ["The C double bond C can't rotate, because rotating would break the pi bond.", "Each carbon in the double bond must have two different groups attached.", "To name the isomer, find the higher priority group on each carbon. The atom with the higher atomic number wins.", "If both priority groups are on the same side, it's Z, from the German for together. On opposite sides, it's E."] },
    { type: "quiz", q: "Which shows E/Z isomerism?", o: ["Propene", "But-1-ene", "But-2-ene", "2-methylpropene"], a: 2,
      why: "Each carbon of the C=C in but-2-ene has H and CH₃.", say: ["Which of these alkenes has E and Z isomers?"] }
  ]
});

S2Data.video("6b", {
  scenes: [
    { type: "title", title: "Alkanes", sub: "Fuels, pollution and free-radical substitution.", mark: "CₙH₂ₙ₊₂",
      say: ["Alkanes are saturated hydrocarbons. They're mainly used as fuels, and they react with halogens in UV light."] },
    { type: "compare", title: "Pollutants from fuels", h: ["Source", "Problem"],
      rows: [["CO", "Incomplete combustion", "Toxic: binds to haemoglobin"], ["NOₓ", "N₂ + O₂ in a hot engine", "Acid rain, smog"], ["SO₂", "Sulfur impurities", "Acid rain"], ["C (soot)", "Incomplete combustion", "Breathing problems"]],
      say: ["Carbon monoxide forms in limited oxygen. It's toxic because it binds to haemoglobin.", "Nitrogen oxides form when nitrogen and oxygen from the air react at high engine temperatures.", "Sulfur dioxide comes from sulfur impurities in the fuel.", "Soot particles also come from incomplete combustion. Catalytic converters remove C O, N O x and unburnt hydrocarbons."] },
    { type: "equation", title: "Free-radical substitution",
      rows: [[{ t: "Cl₂", s: 0 }, { t: "→", s: 0 }, { t: "2Cl•", k: 1, s: 0 }],
             [{ t: "Cl• + CH₄", s: 1 }, { t: "→", s: 1 }, { t: "•CH₃ + HCl", s: 1 }],
             [{ t: "•CH₃ + Cl₂", s: 1 }, { t: "→", s: 1 }, { t: "CH₃Cl + Cl•", s: 1 }],
             [{ t: "•CH₃ + Cl•", s: 2 }, { t: "→", s: 2 }, { t: "CH₃Cl", s: 2 }]],
      say: ["Initiation. UV light splits chlorine molecules homolytically into two chlorine radicals.",
            "Propagation. A chlorine radical takes a hydrogen from methane, making a methyl radical. The methyl radical then reacts with chlorine, making chloromethane and regenerating a chlorine radical. It's a chain reaction.",
            "Termination. Any two radicals join together, removing radicals and ending the chain."] },
    { type: "points", title: "Limitations", items: ["Further substitution: CH₂Cl₂, CHCl₃, CCl₄", "Termination can make longer chains (C₂H₆)", "So you get a mixture of products"],
      say: ["The chlorine radical can also attack chloromethane, making dichloromethane and beyond.", "Two methyl radicals can join to make ethane.", "So free-radical substitution gives a mixture, which is a problem if you want one pure product."] },
    { type: "quiz", q: "Which is a propagation step?", o: ["Cl₂ → 2Cl•", "•CH₃ + Cl• → CH₃Cl", "Cl• + CH₄ → •CH₃ + HCl", "2•CH₃ → C₂H₆"], a: 2,
      why: "A radical reacts and a new radical is formed.", say: ["Which of these is a propagation step?"] }
  ]
});

S2Data.video("6c", {
  scenes: [
    { type: "title", title: "Alkenes", sub: "Electrophilic addition and Markovnikov's rule.", mark: "C=C",
      say: ["Alkenes contain a C double bond C. The pi bond is a region of high electron density, so it attracts electrophiles."] },
    { type: "compare", title: "Addition reactions", h: ["Conditions", "Product"],
      rows: [["H₂", "Ni catalyst, 150 °C", "Alkane"], ["Br₂", "Room temperature", "Dibromoalkane (test: orange → colourless)"], ["HBr", "Room temperature", "Bromoalkane"], ["H₂O (steam)", "H₃PO₄, 300 °C, 60 atm", "Alcohol"]],
      say: ["Hydrogen adds across the double bond with a nickel catalyst to make an alkane.", "Bromine adds at room temperature. Bromine water turns from orange to colourless, which is the test for an alkene.", "Hydrogen bromide adds to make a bromoalkane.", "Steam adds with a phosphoric acid catalyst to make an alcohol."] },
    { type: "flow", title: "Mechanism: ethene + HBr", nodes: ["π electrons attack H<sup>δ+</sup>;<br>H–Br breaks", "Carbocation<br>CH₃CH₂<sup>+</sup>", "Br⁻ lone pair attacks C<sup>+</sup>"],
      say: ["The H B r bond is polar. A curly arrow goes from the double bond to the slightly positive hydrogen, and another from the H B r bond onto bromine.",
            "That leaves a carbocation, with a positive charge on carbon.",
            "Finally, a lone pair on the bromide ion attacks the positive carbon, forming bromoethane."] },
    { type: "points", title: "Markovnikov's rule", items: ["Propene + HBr can make two carbocations", "Secondary carbocation is more stable than primary", "Alkyl groups push electrons towards C<sup>+</sup>", "So 2-bromopropane is the major product"],
      say: ["With an unsymmetrical alkene like propene, the hydrogen can add to either carbon.", "That gives either a primary or a secondary carbocation. The secondary one is more stable.", "That's because alkyl groups release electrons and help stabilise the positive charge.", "So the major product forms via the more stable carbocation: two bromopropane."] },
    { type: "quiz", q: "Major product of 2-methylpropene + HBr?", o: ["1-bromo-2-methylpropane", "2-bromo-2-methylpropane", "2-bromobutane", "1-bromobutane"], a: 1,
      why: "It forms via the tertiary carbocation.", say: ["What's the major product when two methyl propene reacts with H B r?"] }
  ]
});

S2Data.video("6d", {
  scenes: [
    { type: "title", title: "Halogenoalkanes", sub: "Substitution or elimination: it depends on the conditions.", mark: "C–X",
      say: ["In a halogenoalkane, the carbon bonded to the halogen is slightly positive. Nucleophiles are attracted to it."] },
    { type: "graph", title: "Rate of hydrolysis with AgNO₃", x: "Time", y: "Amount of precipitate",
      lines: [{ pts: [[0, 0], [0.15, 0.6], [0.35, 0.85], [1, 0.92]], s: 0, label: "C–I" }, { pts: [[0, 0], [0.4, 0.42], [0.7, 0.62], [1, 0.7]], s: 1, label: "C–Br" }, { pts: [[0, 0], [0.6, 0.25], [1, 0.45]], s: 2, label: "C–Cl" }],
      say: ["Warm halogenoalkanes with aqueous ethanolic silver nitrate. Water hydrolyses them, and the halide ions form a precipitate. Iodoalkanes react fastest, giving yellow silver iodide.",
            "Bromoalkanes are slower, giving a cream precipitate.",
            "Chloroalkanes are slowest. The C I bond is the weakest, so bond enthalpy, not polarity, controls the rate."] },
    { type: "compare", title: "Nucleophilic substitution", h: ["Conditions", "Product"],
      rows: [["OH⁻", "Aqueous NaOH, reflux", "Alcohol"], ["CN⁻", "KCN in ethanol, reflux", "Nitrile (+1 carbon)"], ["NH₃", "Excess, ethanol, heat, sealed tube", "Amine"]],
      say: ["Aqueous hydroxide ions substitute for the halogen to make an alcohol.", "Cyanide ions make a nitrile, which adds a carbon to the chain.", "Excess ammonia makes a primary amine. The excess stops the amine reacting further."] },
    { type: "big", text: "Aqueous → substitution<br>Ethanolic → elimination", sub: "KOH in ethanol removes H and X, forming an alkene",
      say: ["The solvent decides what hydroxide does. In water, it's a nucleophile, and you get substitution.", "In ethanol, it acts as a base, removing a hydrogen from the next carbon along. The halide leaves and an alkene forms. That's elimination."] },
    { type: "quiz", q: "Which conditions turn 2-bromopropane into propene?", o: ["NaOH(aq), warm", "KOH in ethanol, reflux", "KCN in ethanol", "Excess NH₃"], a: 1,
      why: "Ethanolic hydroxide acts as a base: elimination.", say: ["How would you convert two bromopropane into propene?"] }
  ]
});

S2Data.video("6e", {
  scenes: [
    { type: "title", title: "Alcohols", sub: "Oxidation, and the practical skills that go with it.", mark: "–OH",
      say: ["Alcohols are classified as primary, secondary or tertiary, depending on how many carbons are attached to the carbon with the O H group. That decides how they oxidise."] },
    { type: "flow", title: "Oxidising a primary alcohol", nodes: ["Primary alcohol", "Aldehyde", "Carboxylic acid"], arrows: ["[O]<br>distil off", "[O]<br>reflux"],
      say: ["Use acidified potassium dichromate six. It turns from orange to green as it's reduced.",
            "Heat gently and distil the aldehyde off as it forms, so it isn't oxidised further.",
            "If you heat under reflux with excess oxidising agent instead, the aldehyde stays in the flask and is oxidised all the way to a carboxylic acid."] },
    { type: "compare", title: "With acidified dichromate", h: ["Product", "Colour"],
      rows: [["Primary", "Aldehyde or carboxylic acid", "Orange → green"], ["Secondary", "Ketone", "Orange → green"], ["Tertiary", "No reaction", "Stays orange"]],
      say: ["Primary alcohols give aldehydes or carboxylic acids.", "Secondary alcohols give ketones.", "Tertiary alcohols aren't oxidised, so the dichromate stays orange."] },
    { type: "points", title: "Purifying a liquid product", items: ["Separating funnel: remove the aqueous layer", "Wash with NaHCO₃ to remove acid", "Dry with anhydrous MgSO₄ or CaCl₂", "Distil; collect at the boiling point"],
      say: ["Pour the mixture into a separating funnel and run off the aqueous layer.", "Shake with sodium hydrogencarbonate solution to neutralise acid, releasing the pressure as carbon dioxide forms.", "Add an anhydrous drying agent until the liquid is clear.", "Finally, redistil and collect the fraction that boils at the product's boiling point."] },
    { type: "quiz", q: "What forms when propan-2-ol is heated with acidified dichromate?", o: ["Propanal", "Propanoic acid", "Propanone", "No reaction"], a: 2,
      why: "Propan-2-ol is secondary, so it gives a ketone.", say: ["Propan two ol is oxidised with acidified dichromate. What's the product?"] }
  ]
});

S2Data.video("7a", {
  scenes: [
    { type: "title", title: "Mass spectrometry and infrared", sub: "Two ways to identify an organic compound.", mark: "IR · MS",
      say: ["Mass spectrometry tells you the relative molecular mass and fragments of a molecule. Infrared spectroscopy tells you which bonds it contains."] },
    { type: "points", title: "Reading a mass spectrum", items: ["Molecular ion M⁺: highest m/z gives M<sub>r</sub>", "Small M+1 peak from ¹³C", "Fragments: M⁺ → X⁺ + Y• (only X⁺ detected)", "15 CH₃⁺ · 29 C₂H₅⁺ · 43 CH₃CO⁺ · 45 COOH⁺"],
      say: ["The peak at the highest m over z value, ignoring the tiny M plus one peak, is the molecular ion. It gives the M r.", "The M plus one peak comes from molecules containing a carbon thirteen atom.", "Molecular ions break into fragments. One part keeps the charge and is detected; the other is a neutral radical and isn't.", "Learn the common fragments: fifteen is C H three plus, twenty nine is C two H five plus, forty three is C H three C O plus."] },
    { type: "compare", title: "Key IR absorptions", h: ["Wavenumber / cm⁻¹", "Look"],
      rows: [["O–H (alcohol)", "3750–3200", "Broad"], ["O–H (acid)", "3300–2500", "Very broad"], ["C=O", "1750–1650", "Strong, sharp"], ["C–H", "3000–2850", "Sharp"]],
      say: ["An alcohol's O H gives a broad absorption around three thousand three hundred.", "A carboxylic acid's O H is very broad, sweeping from about thirty three hundred down to twenty five hundred.", "A carbonyl group gives a strong, sharp absorption around seventeen hundred.", "Almost every organic compound has C H absorptions just below three thousand."] },
    { type: "flow", title: "Following an oxidation by IR", nodes: ["Ethanol<br>broad O–H", "Ethanal<br>C=O, no O–H", "Ethanoic acid<br>C=O + very broad O–H"],
      say: ["Ethanol shows a broad O H absorption and no carbonyl peak.", "If ethanal forms, the O H disappears and a C O peak appears near seventeen hundred and thirty.", "If it goes on to ethanoic acid, you see the carbonyl peak plus the very broad acid O H."] },
    { type: "quiz", q: "A spectrum shows a strong peak at 1715 cm⁻¹ and no absorption above 3000 cm⁻¹ except C–H. It's most likely…", o: ["An alcohol", "A carboxylic acid", "A ketone", "An alkene"], a: 2,
      why: "C=O present but no O–H.", say: ["What type of compound gives this spectrum?"] }
  ]
});

S2Data.video("8a", {
  scenes: [
    { type: "title", title: "Enthalpy changes and calorimetry", sub: "Definitions, and measuring ΔH in the lab.", mark: "ΔH",
      say: ["Enthalpy change, delta H, is the heat energy change at constant pressure. Exothermic reactions have a negative delta H; endothermic ones are positive."] },
    { type: "compare", title: "Standard enthalpy definitions", h: ["Per mole of…", "Condition"],
      rows: [["Formation ΔfH⦵", "Compound formed", "From elements in standard states"], ["Combustion ΔcH⦵", "Substance burned", "Completely in oxygen"], ["Neutralisation", "Water formed", "Acid + alkali"]],
      say: ["Enthalpy of formation is for one mole of a compound made from its elements in their standard states.", "Enthalpy of combustion is for one mole of a substance burned completely in oxygen.", "Enthalpy of neutralisation is for forming one mole of water from an acid and an alkali. All are under standard conditions: one hundred kilopascals and a stated temperature, usually two nine eight kelvin."] },
    { type: "calc", title: "Calorimetry calculation", q: "50.0 cm³ HCl + 50.0 cm³ NaOH (both 1.00 mol dm⁻³). ΔT = +6.8 °C.",
      lines: ["Q = mcΔT = 100 × 4.18 × 6.8 = 2842 J", "n(H₂O) = 0.0500 mol", "ΔH = −2.842 ÷ 0.0500 = −56.8 kJ mol⁻¹"],
      say: ["Use Q equals m c delta T. The mass is of the solution, one hundred grams, not the reactants.", "Work out the moles of the limiting reactant, here point zero five moles of water formed.", "Divide Q in kilojoules by moles, and add a minus sign because the temperature rose. The answer is minus fifty six point eight kilojoules per mole."] },
    { type: "graph", title: "Allowing for heat loss", x: "Time", y: "Temperature",
      lines: [{ pts: [[0, 0.3], [0.3, 0.3]], straight: true, s: 0 }, { pts: [[0.3, 0.3], [0.38, 0.75], [0.6, 0.68], [1, 0.55]], s: 0 }, { pts: [[0.3, 0.84], [0.6, 0.68]], straight: true, dash: true, s: 1 }],
      marks: [{ x: 0.3, y: 0.84, t: "extrapolated max", s: 1, anchor: "end", dx: -16, dy: 6 }],
      say: ["Record the temperature every thirty seconds before and after mixing. The solution warms, then slowly cools as heat is lost.",
            "Draw the cooling line back to the time of mixing. That gives the temperature it would have reached with no heat loss."] },
    { type: "quiz", q: "In Q = mcΔT for a reaction in solution, m is the mass of…", o: ["The solid added", "The solution", "The products", "The thermometer"], a: 1,
      why: "It's the water or solution that changes temperature.", say: ["In Q equals m c delta T, what does m stand for?"] }
  ]
});

S2Data.video("8b", {
  scenes: [
    { type: "title", title: "Hess's law and bond enthalpies", sub: "Finding enthalpy changes you can't measure.", mark: "ΣΔH",
      say: ["Hess's law says the enthalpy change for a reaction is independent of the route taken. That lets us calculate enthalpy changes we can't measure directly."] },
    { type: "calc", title: "Using formation data", q: "CH₄ + 2O₂ → CO₂ + 2H₂O. ΔfH: CH₄ −75, CO₂ −394, H₂O −286",
      lines: ["ΔrH = ΣΔfH(products) − ΣΔfH(reactants)", "= (−394 + 2 × −286) − (−75)", "= −891 kJ mol⁻¹"],
      say: ["With formation data, it's products minus reactants. Oxygen is an element, so its enthalpy of formation is zero.", "Remember to multiply by the numbers in the equation: two waters.", "That gives minus eight nine one kilojoules per mole."] },
    { type: "big", text: "Combustion data: reactants − products", sub: "Formation data: products − reactants",
      say: ["With combustion data, it's the other way round: reactants minus products.", "With formation data, it's products minus reactants. Drawing the cycle shows why: the arrows point the opposite way."] },
    { type: "calc", title: "Using bond enthalpies", q: "H₂ + Cl₂ → 2HCl. H–H 436, Cl–Cl 243, H–Cl 432",
      lines: ["Broken: 436 + 243 = 679", "Made: 2 × 432 = 864", "ΔH = 679 − 864 = −185 kJ mol⁻¹"],
      say: ["Breaking bonds takes energy. Add up the bonds broken.", "Making bonds releases energy. Add up the bonds made.", "Delta H equals bonds broken minus bonds made. The answer is only approximate because mean bond enthalpies are averages from many compounds."] },
    { type: "quiz", q: "Why is ΔH from mean bond enthalpies only approximate?", o: ["Hess's law doesn't apply", "They're averages over many compounds", "Bonds release energy when broken", "They're measured in liquids"], a: 1,
      why: "A C–H bond in methane isn't exactly the same as one in ethanol.", say: ["Why are bond enthalpy calculations only approximate?"] }
  ]
});

S2Data.video("9a", {
  scenes: [
    { type: "title", title: "Kinetics I", sub: "Collision theory and the Maxwell–Boltzmann distribution.", mark: "Eₐ",
      say: ["For particles to react, they must collide with at least the activation energy, and in the right orientation. Anything that increases the frequency of these successful collisions increases the rate."] },
    { type: "graph", title: "Maxwell–Boltzmann distribution", x: "Energy", y: "Number of molecules",
      lines: [{ pts: [[0, 0], [0.12, 0.7], [0.22, 0.85], [0.4, 0.5], [0.65, 0.18], [0.95, 0.03]], s: 0 }, { pts: [[0, 0], [0.18, 0.5], [0.32, 0.62], [0.55, 0.42], [0.8, 0.18], [0.95, 0.09]], s: 1 }, { pts: [[0.7, 0], [0.7, 0.55]], straight: true, dash: true, s: 2 }],
      marks: [{ x: 0.22, y: 0.85, t: "lower T", s: 0, dot: false, anchor: "start", dx: 24, dy: 0 }, { x: 0.36, y: 0.6, t: "higher T", s: 1, dot: false, anchor: "start", dx: 20, dy: -8 }, { x: 0.7, y: 0.55, t: "Eₐ", s: 2, dot: false, dy: -14 }],
      say: ["This curve shows how energy is spread among molecules in a gas. It starts at the origin, rises to a peak, and the tail never touches the axis.",
            "At a higher temperature the peak moves right and gets lower. The area underneath stays the same, because the number of molecules hasn't changed.",
            "Look at the activation energy. Far more molecules at the higher temperature have energy above it. That's why a small temperature rise greatly increases the rate."] },
    { type: "points", title: "Catalysts", items: ["Provide an alternative route with lower Eₐ", "More molecules have E ≥ Eₐ (curve unchanged)", "Homogeneous: same phase; heterogeneous: different phase", "Lower temperatures → less energy, less CO₂"],
      say: ["A catalyst provides an alternative reaction pathway with a lower activation energy.", "On the Maxwell Boltzmann curve, the distribution doesn't change, but the activation energy line moves left, so more molecules can react.", "Homogeneous catalysts are in the same phase as the reactants. Heterogeneous ones are in a different phase, like solid iron in the Haber process.", "Catalysts let industry use lower temperatures, saving energy and reducing emissions."] },
    { type: "points", title: "Measuring rate", items: ["Gas volume (syringe) or mass loss", "Colour change (colorimeter)", "Rate at an instant = gradient of the tangent"],
      say: ["If a gas forms, measure its volume with a gas syringe, or the loss in mass.", "If the colour changes, use a colorimeter.", "To find the rate at a particular time, draw a tangent to the curve and measure its gradient."] },
    { type: "quiz", q: "What happens to the Maxwell–Boltzmann curve when a catalyst is added?", o: ["Peak moves right", "Curve unchanged; Eₐ moves left", "Area increases", "Peak gets taller"], a: 1,
      why: "A catalyst doesn't change the molecules' energies, only the energy needed.", say: ["How does a catalyst affect the Maxwell Boltzmann diagram?"] }
  ]
});

S2Data.video("10a", {
  scenes: [
    { type: "title", title: "Equilibrium I", sub: "Dynamic equilibrium, Kc and Le Chatelier.", mark: "⇌",
      say: ["In a closed system, a reversible reaction reaches dynamic equilibrium. The forward and backward rates are equal, so the concentrations stay constant."] },
    { type: "equation", title: "Writing Kc",
      rows: [["N₂", "+", "3H₂", "⇌", "2NH₃"], [{ t: "K<sub>c</sub> = [NH₃]² ÷ ([N₂][H₂]³)", k: 1, s: 1 }]],
      note: "Units: mol⁻² dm⁶. Leave solids out of Kc.", noteStep: 2,
      say: ["For the Haber process, nitrogen plus three hydrogen is in equilibrium with two ammonia.",
            "K c is the concentration of products, raised to the power of their coefficients, over the reactants raised to theirs.",
            "Work out the units by cancelling. Leave out any solids, because their concentration is constant."] },
    { type: "compare", title: "Le Chatelier's principle", h: ["Shift", "Kc?"],
      rows: [["Add reactant", "Right", "Same"], ["Increase pressure", "To fewer gas moles", "Same"], ["Increase temperature", "Endothermic direction", "Changes"], ["Add catalyst", "None (faster)", "Same"]],
      say: ["If a system at equilibrium is disturbed, the position shifts to oppose the change. Adding reactant shifts it right.", "Increasing pressure shifts it towards the side with fewer gas molecules.", "Increasing temperature shifts it in the endothermic direction. Temperature is the only thing that changes K c.", "A catalyst doesn't shift the position at all. Equilibrium is just reached faster."] },
    { type: "points", title: "The Haber process compromise", items: ["Exothermic forward: low T gives more NH₃", "But low T is too slow → ~450 °C", "High pressure: more NH₃ but costly → ~200 atm", "Iron catalyst speeds it up"],
      say: ["Making ammonia is exothermic, so a low temperature gives a higher equilibrium yield.", "But at low temperatures the rate is far too slow, so about four hundred and fifty degrees is used as a compromise.", "High pressure favours ammonia too, but it's expensive and dangerous, so about two hundred atmospheres is used.", "An iron catalyst gets the reaction to equilibrium faster."] },
    { type: "quiz", q: "Forward reaction exothermic. Raising the temperature makes Kc…", o: ["Increase", "Decrease", "Stay the same", "Become zero"], a: 1,
      why: "Equilibrium shifts left, so fewer products.", say: ["If the forward reaction is exothermic, what happens to K c when you raise the temperature?"] }
  ]
});
