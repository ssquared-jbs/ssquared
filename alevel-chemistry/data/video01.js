/* Video explainers — A-level Chemistry Topics 1–5. */

S2Data.video("1a", {
  scenes: [
    { type: "title", title: "Atoms, isotopes and mass spectrometry", sub: "How a time-of-flight mass spectrometer finds relative atomic mass.", mark: "m/z",
      say: ["Isotopes are atoms of the same element with different numbers of neutrons. A mass spectrometer measures how much of each isotope is present."] },
    { type: "flow", title: "Time-of-flight mass spectrometer", nodes: ["Ionisation", "Acceleration", "Ion drift", "Detection"],
      say: ["First, the sample is ionised, for example by electron impact, where high-energy electrons knock an electron off each particle to make one-plus ions.",
            "An electric field accelerates the positive ions so they all have the same kinetic energy.",
            "In the drift region, lighter ions move faster, so they arrive first.",
            "At the detector the ions gain electrons, creating a current. The size of the current shows the abundance of each ion."] },
    { type: "calc", title: "Relative atomic mass from a spectrum", q: "Chlorine: ³⁵Cl 75%, ³⁷Cl 25%",
      lines: ["A<sub>r</sub> = Σ(isotopic mass × abundance) ÷ 100", "= (35 × 75 + 37 × 25) ÷ 100", "= 35.5"],
      say: ["Relative atomic mass is the weighted mean mass of an atom compared with one twelfth of a carbon-twelve atom.",
            "Multiply each isotopic mass by its abundance and add them up: thirty five times seventy five, plus thirty seven times twenty five.",
            "Divide by one hundred to get thirty five point five."] },
    { type: "compare", title: "Peaks for Cl₂⁺", h: ["Combination", "Relative height"],
      rows: [["m/z 70", "³⁵Cl–³⁵Cl", "¾ × ¾ = 9"], ["m/z 72", "³⁵Cl–³⁷Cl (two ways)", "2 × ¾ × ¼ = 6"], ["m/z 74", "³⁷Cl–³⁷Cl", "¼ × ¼ = 1"]],
      say: ["Chlorine molecules give three molecular ion peaks. Two chlorine-thirty-five atoms give m over z seventy.",
            "One of each gives seventy two, and there are two ways to arrange them.",
            "Two chlorine-thirty-seven atoms give seventy four. The heights come out in the ratio nine to six to one."] },
    { type: "quiz", q: "In a time-of-flight spectrometer, which ion arrives first?", o: ["⁸¹Br⁺", "⁷⁹Br⁺", "They arrive together", "The most abundant"], a: 1,
      why: "All ions have the same kinetic energy, so the lightest moves fastest.", say: ["Bromine has two isotopes. Which ion reaches the detector first?"] }
  ]
});

S2Data.video("1b", {
  scenes: [
    { type: "title", title: "Electron configurations and ionisation energies", sub: "Shells, sub-shells and the evidence for them.", mark: "1s²",
      say: ["Electrons are arranged in shells, sub-shells and orbitals. Ionisation energies give us the evidence for this structure."] },
    { type: "points", title: "Filling order", items: ["s holds 2, p holds 6, d holds 10", "Fill: 1s 2s 2p 3s 3p <b>4s 3d</b> 4p", "Orbitals fill singly before pairing", "Cr and Cu are exceptions: 3d⁵4s¹ and 3d¹⁰4s¹"],
      say: ["An s sub-shell holds two electrons, a p sub-shell six, and a d sub-shell ten.",
            "Sub-shells fill in order of energy. Notice that four s fills before three d.",
            "Within a sub-shell, electrons go into orbitals singly first, then pair up.",
            "Chromium and copper are exceptions: they have one electron in four s, giving a more stable d sub-shell."] },
    { type: "graph", title: "First ionisation energy across Period 3", x: "Na → Ar", y: "First ionisation energy",
      lines: [{ pts: [[0.02, 0.15], [0.15, 0.32], [0.29, 0.24], [0.43, 0.42], [0.57, 0.6], [0.71, 0.56], [0.85, 0.76], [0.98, 0.95]], straight: true, s: 0 }],
      marks: [{ x: 0.29, y: 0.24, t: "Al: 3p electron", s: 1, dy: 44 }, { x: 0.71, y: 0.56, t: "S: paired 3p", s: 2, dy: 46 }],
      say: ["Across a period, first ionisation energy generally rises. Nuclear charge increases while shielding stays similar.",
            "There's a dip at aluminium. Its outer electron is in a three p sub-shell, which is higher in energy than three s.",
            "There's another dip at sulfur. The electron is removed from an orbital containing a pair, and repulsion makes it easier to remove."] },
    { type: "graph", title: "Successive ionisation energies of Na", x: "Electron removed (1 → 11)", y: "log(ionisation energy)",
      lines: [{ pts: [[0.05, 0.12], [0.14, 0.52], [0.23, 0.55], [0.32, 0.58], [0.41, 0.61], [0.5, 0.64], [0.59, 0.67], [0.68, 0.7], [0.77, 0.73], [0.86, 0.92], [0.95, 0.95]], straight: true, s: 0 }],
      marks: [{ x: 0.14, y: 0.52, t: "big jump: new shell", s: 1, dy: -26, anchor: "start", dx: 10 }],
      say: ["Removing electrons one by one, each ionisation energy is larger than the last, because electrons are removed from an increasingly positive ion.",
            "Big jumps appear when an electron comes from a new shell closer to the nucleus. For sodium, the jump after the first electron shows it has one outer electron."] },
    { type: "quiz", q: "Which is the configuration of Fe²⁺?", o: ["[Ar]3d⁴4s²", "[Ar]3d⁶", "[Ar]3d⁵4s¹", "[Ar]3d⁶4s²"], a: 1,
      why: "When transition metals form ions, the 4s electrons are lost first.", say: ["Iron is argon three d six four s two. What is the configuration of iron two plus?"] }
  ]
});

S2Data.video("1c", {
  scenes: [
    { type: "title", title: "Periodicity", sub: "Repeating trends across Period 3.", mark: "Na→Ar",
      say: ["Periodicity means repeating patterns in properties across each period. Period three, from sodium to argon, is the one to know."] },
    { type: "points", title: "Atomic radius decreases across the period", items: ["Nuclear charge increases", "Electrons added to the same shell (similar shielding)", "Outer electrons pulled closer"],
      say: ["Moving across Period three, the number of protons increases.", "New electrons go into the same shell, so shielding hardly changes.", "So the outer electrons are pulled in closer, and the atoms get smaller."] },
    { type: "graph", title: "Melting points across Period 3", x: "Na  Mg  Al  Si  P  S  Cl  Ar", y: "Melting point",
      lines: [{ pts: [[0.02, 0.1], [0.15, 0.25], [0.29, 0.29], [0.43, 0.95], [0.57, 0.07], [0.71, 0.11], [0.85, 0.04], [0.98, 0.02]], straight: true, s: 0 }],
      marks: [{ x: 0.15, y: 0.25, t: "metallic", s: 0, dy: -22 }, { x: 0.43, y: 0.95, t: "giant covalent", s: 1, dy: -14, anchor: "start", dx: 18 }, { x: 0.71, y: 0.11, t: "simple molecular", s: 2, dy: -24 }],
      say: ["The melting point rises from sodium to aluminium. Metallic bonding gets stronger as there are more delocalised electrons and smaller, more highly charged ions.",
            "Silicon has the highest melting point. It's giant covalent, so many strong covalent bonds must break.",
            "Phosphorus, sulfur, chlorine and argon are simple molecular. Only weak London forces act between molecules. Sulfur, as S eight, is highest of these because it has the most electrons."] },
    { type: "compare", title: "Structure and bonding", h: ["Structure", "Bonding"],
      rows: [["Na, Mg, Al", "Giant metallic", "Metallic"], ["Si", "Giant covalent", "Covalent"], ["P₄, S₈, Cl₂", "Simple molecular", "Covalent + London forces"], ["Ar", "Monatomic", "London forces"]],
      say: ["Sodium, magnesium and aluminium are giant metallic structures.", "Silicon is a giant covalent lattice, like diamond.", "Phosphorus, sulfur and chlorine form small molecules.", "And argon exists as single atoms."] },
    { type: "quiz", q: "Why does silicon have the highest melting point in Period 3?", o: ["Strongest metallic bonds", "Many strong covalent bonds in a giant lattice", "Largest London forces", "It is ionic"], a: 1,
      why: "Melting silicon means breaking strong covalent bonds throughout its giant structure.", say: ["Why does silicon melt at such a high temperature?"] }
  ]
});

S2Data.video("2a", {
  scenes: [
    { type: "title", title: "Ionic bonding", sub: "Lattices, ion sizes and evidence for ions.", mark: "Na⁺Cl⁻",
      say: ["Ionic bonding is the strong electrostatic attraction between oppositely charged ions."] },
    { type: "points", title: "Strength of ionic bonding", items: ["Higher charge → stronger attraction", "Smaller ions → closer together → stronger", "MgO melts at 2852 °C; NaCl at 801 °C"],
      say: ["The bigger the charges on the ions, the stronger the attraction.", "Smaller ions can get closer together, which also strengthens the attraction.", "That's why magnesium oxide, with two-plus and two-minus ions, melts far higher than sodium chloride."] },
    { type: "compare", title: "Isoelectronic ions: 10 electrons each", h: ["Protons", "Size"],
      rows: [["N³⁻", "7", "Largest"], ["O²⁻", "8", "↓"], ["F⁻", "9", "↓"], ["Na⁺", "11", "↓"], ["Mg²⁺", "12", "↓"], ["Al³⁺", "13", "Smallest"]],
      say: ["These ions all have ten electrons. Nitride has only seven protons holding them,", "oxide has eight,", "fluoride nine,", "sodium eleven,", "magnesium twelve,", "and aluminium thirteen. More protons pull the same electrons in more tightly, so the ions get smaller."] },
    { type: "points", title: "Evidence for ions", items: ["Electrolysis of molten compounds", "Migration of coloured ions, e.g. purple MnO₄⁻ moves to the + electrode", "Electron density maps show separate ions"],
      say: ["Molten ionic compounds conduct and decompose at electrodes.", "If you place a crystal of potassium manganate seven on damp filter paper between electrodes, the purple colour moves towards the positive electrode. That shows the manganate ions are negative.", "Electron density maps from X-ray diffraction show the electrons around separate ions, with almost no density between them."] },
    { type: "quiz", q: "Which ion is largest?", o: ["Na⁺", "Mg²⁺", "F⁻", "O²⁻"], a: 3,
      why: "Isoelectronic ions: fewest protons means the electrons are held least tightly.", say: ["These four ions all have ten electrons. Which one is largest?"] }
  ]
});

S2Data.video("2b", {
  scenes: [
    { type: "title", title: "Covalent bonds and shapes", sub: "Electron-pair repulsion decides the shape of a molecule.", mark: "VSEPR",
      say: ["A covalent bond is the attraction between a shared pair of electrons and the nuclei of the bonded atoms. Electron pairs around a central atom repel each other, and that sets the shape."] },
    { type: "compare", title: "Shapes with no lone pairs", h: ["Shape", "Angle"],
      rows: [["2 pairs: BeCl₂", "Linear", "180°"], ["3 pairs: BF₃", "Trigonal planar", "120°"], ["4 pairs: CH₄", "Tetrahedral", "109.5°"], ["5 pairs: PCl₅", "Trigonal bipyramidal", "90° and 120°"], ["6 pairs: SF₆", "Octahedral", "90°"]],
      say: ["Two electron pairs get as far apart as possible in a straight line: one hundred and eighty degrees.", "Three pairs make a flat triangle at one twenty.", "Four pairs make a tetrahedron, one hundred and nine point five.", "Five pairs give a trigonal bipyramid.", "And six pairs make an octahedron with ninety degree angles."] },
    { type: "flow", title: "Lone pairs squeeze the angle", nodes: ["CH₄<br>109.5°", "NH₃<br>107°", "H₂O<br>104.5°"],
      say: ["Methane has four bonding pairs at one hundred and nine point five degrees.", "Ammonia has three bonding pairs and one lone pair. Lone pairs repel more strongly than bonding pairs, so the angle closes to one hundred and seven.", "Water has two lone pairs, closing the angle further, to one hundred and four point five. Each lone pair takes off about two and a half degrees."] },
    { type: "points", title: "σ and π bonds", items: ["σ bond: end-on overlap, density between nuclei", "π bond: sideways overlap of p orbitals, above and below", "Double bond = 1σ + 1π"],
      say: ["A sigma bond forms when orbitals overlap end-on, directly between the two nuclei.", "A pi bond forms when p orbitals overlap sideways, putting electron density above and below the bond axis.", "A double bond is one sigma and one pi bond. Triple bonds add a second pi bond."] },
    { type: "quiz", q: "What is the shape of PH₃?", o: ["Trigonal planar", "Trigonal pyramidal", "Tetrahedral", "T-shaped"], a: 1,
      why: "Three bonding pairs and one lone pair, like ammonia.", say: ["Phosphorus in P H three has three bonding pairs and one lone pair. What shape is it?"] }
  ]
});

S2Data.video("2c", {
  scenes: [
    { type: "title", title: "Electronegativity and intermolecular forces", sub: "Polar bonds, polar molecules, and the forces between molecules.", mark: "δ+ δ−",
      say: ["Electronegativity is the ability of an atom to attract the bonding electrons in a covalent bond. It increases across a period and up a group. Fluorine is the most electronegative element."] },
    { type: "points", title: "Polar bonds, polar molecules", items: ["Different electronegativity → polar bond (δ+ / δ−)", "Symmetrical molecule → dipoles cancel (CO₂, CCl₄)", "Unsymmetrical → overall dipole (H₂O, CHCl₃)"],
      say: ["When two atoms differ in electronegativity, the bond is polar. One end is slightly positive, the other slightly negative.", "In symmetrical molecules like carbon dioxide or tetrachloromethane, the bond dipoles cancel, so the molecule is non-polar.", "If the molecule isn't symmetrical, like water, the dipoles don't cancel and it has a permanent dipole."] },
    { type: "compare", title: "Intermolecular forces", h: ["Cause", "Example"],
      rows: [["London forces", "Instantaneous dipole induces a dipole", "All molecules; strongest for large ones"], ["Permanent dipole", "δ+ and δ− ends attract", "HCl, propanone"], ["Hydrogen bond", "δ+ H on N, O or F attracted to a lone pair on N, O or F", "H₂O, NH₃, alcohols"]],
      say: ["London forces act between all molecules. Random electron movement creates an instantaneous dipole, which induces a dipole in a neighbour. More electrons mean stronger London forces.",
            "Polar molecules also attract through permanent dipole forces.",
            "Hydrogen bonds are the strongest. They need hydrogen bonded to nitrogen, oxygen or fluorine, and a lone pair on one of those atoms in another molecule."] },
    { type: "graph", title: "Boiling points of Group 6 hydrides", x: "H₂O    H₂S    H₂Se    H₂Te", y: "Boiling point",
      lines: [{ pts: [[0.1, 0.9], [0.37, 0.18], [0.63, 0.3], [0.9, 0.45]], straight: true, s: 0 }],
      marks: [{ x: 0.1, y: 0.9, t: "hydrogen bonding", s: 1, anchor: "start", dx: 20, dy: 8 }],
      say: ["From hydrogen sulfide down, boiling points rise as London forces increase with more electrons.",
            "Water is the anomaly. Its boiling point is far higher because of hydrogen bonding between molecules."] },
    { type: "quiz", q: "Which has hydrogen bonds between its molecules?", o: ["CH₃CHO", "CH₃OCH₃", "CH₃CH₂OH", "CH₃Cl"], a: 2,
      why: "Ethanol has an O–H group: H bonded to O.", say: ["Which of these compounds forms hydrogen bonds between its own molecules?"] }
  ]
});

S2Data.video("2d", {
  scenes: [
    { type: "title", title: "Metallic bonding and structures", sub: "Matching properties to structure.", mark: "e⁻ sea",
      say: ["Metallic bonding is the attraction between positive metal ions and a sea of delocalised electrons. Together with ionic, giant covalent and simple molecular, that gives four structure types to recognise."] },
    { type: "compare", title: "Four structure types", h: ["Melting point", "Conducts?"],
      rows: [["Giant metallic (Cu)", "High", "Yes, solid and liquid"], ["Giant ionic (NaCl)", "High", "Only when molten or dissolved"], ["Giant covalent (diamond)", "Very high", "No (graphite yes)"], ["Simple molecular (I₂)", "Low", "No"]],
      say: ["Metals have high melting points and conduct because the delocalised electrons can move.", "Ionic compounds have high melting points but only conduct when molten or in solution, when the ions are free to move.", "Giant covalent substances have very high melting points and usually don't conduct. Graphite is the exception.", "Simple molecular substances melt easily, because only weak intermolecular forces hold the molecules together."] },
    { type: "points", title: "Forms of carbon", items: ["Diamond: each C bonded to 4 others, tetrahedral, very hard", "Graphite: layers, each C bonded to 3; delocalised electrons conduct", "Graphene: a single layer of graphite; strong, light, conducts"],
      say: ["In diamond, each carbon is bonded to four others in a rigid tetrahedral network.", "In graphite, each carbon bonds to three others in flat layers. The spare electron is delocalised, so graphite conducts. Weak forces between layers let them slide.", "Graphene is one layer of graphite. It's very strong, very light and an excellent conductor."] },
    { type: "points", title: "Ice", items: ["Each H₂O hydrogen bonds to four others", "Open hexagonal lattice", "So ice is less dense than water"],
      say: ["In ice, each water molecule hydrogen bonds to four neighbours.", "This holds the molecules in an open hexagonal lattice.", "The molecules are further apart than in liquid water, so ice floats."] },
    { type: "quiz", q: "A solid melts at 1600 °C and doesn't conduct even when molten. Its structure is…", o: ["Giant ionic", "Giant metallic", "Giant covalent", "Simple molecular"], a: 2,
      why: "Very high melting point but no mobile charge in any state.", say: ["A solid melts at sixteen hundred degrees and never conducts. What is its structure?"] }
  ]
});

S2Data.video("3a", {
  scenes: [
    { type: "title", title: "Redox I", sub: "Oxidation numbers and building redox equations.", mark: "OIL RIG",
      say: ["Oxidation is loss of electrons and reduction is gain. Oxidation numbers help us keep track of electrons in a reaction."] },
    { type: "points", title: "Oxidation number rules", items: ["Elements: 0", "Sum = overall charge of the species", "O is −2 (−1 in peroxides)", "H is +1 (−1 in metal hydrides)", "Group 1 is +1, Group 2 is +2, F is −1"],
      say: ["Any uncombined element has an oxidation number of zero.", "The oxidation numbers in a compound add up to zero, or to the charge on an ion.", "Oxygen is usually minus two, except in peroxides.", "Hydrogen is usually plus one, except in metal hydrides.", "Group one metals are plus one, group two are plus two, and fluorine is always minus one."] },
    { type: "calc", title: "Worked example", q: "Find the oxidation number of Mn in MnO₄⁻.",
      lines: ["Four O atoms: 4 × (−2) = −8", "Mn + (−8) = −1", "Mn = +7: manganate(VII)"],
      say: ["Each oxygen is minus two, so four oxygens give minus eight.", "The total must equal the charge on the ion, minus one.", "So manganese is plus seven. That's why we call it manganate seven."] },
    { type: "equation", title: "Combining half-equations",
      rows: [["MnO₄⁻", "+", "8H⁺", "+", "5e⁻", "→", "Mn²⁺", "+", "4H₂O"], [{ t: "5Fe²⁺", s: 1 }, { t: "→", s: 1 }, { t: "5Fe³⁺", s: 1 }, { t: "+", s: 1 }, { t: "5e⁻", s: 1 }]],
      note: "Add, cancel 5e⁻: MnO₄⁻ + 8H⁺ + 5Fe²⁺ → Mn²⁺ + 4H₂O + 5Fe³⁺", noteStep: 2,
      say: ["Manganate seven is reduced to manganese two plus, gaining five electrons.",
            "Each iron two plus loses one electron, so multiply that half-equation by five.",
            "Now the electrons balance. Add the two half-equations and cancel the electrons."] },
    { type: "quiz", q: "What is the oxidation number of S in S₂O₃²⁻?", o: ["+2", "+4", "+6", "−2"], a: 0,
      why: "2S + 3(−2) = −2, so 2S = +4 and S = +2.", say: ["What's the oxidation number of sulfur in the thiosulfate ion?"] }
  ]
});

S2Data.video("4a", {
  scenes: [
    { type: "title", title: "Groups 1 and 2", sub: "Reactivity, solubility and thermal stability.", mark: "s block",
      say: ["The s block metals lose their outer electrons to form ions. Reactivity increases down both groups."] },
    { type: "points", title: "Why reactivity increases down Group 2", items: ["More shells → larger atoms", "More shielding", "Ionisation energies fall → electrons lost more easily"],
      say: ["Going down the group, atoms have more shells and get bigger.", "Inner electrons shield the outer ones from the nucleus.", "So the first and second ionisation energies fall, and the outer electrons are lost more easily. Barium reacts much faster with water than magnesium."] },
    { type: "compare", title: "Group 2 solubility trends", h: ["Hydroxides", "Sulfates"],
      rows: [["Mg", "Least soluble", "Most soluble"], ["→", "Solubility increases", "Solubility decreases"], ["Ba", "Most soluble", "Least soluble (BaSO₄ test)"]],
      say: ["Magnesium hydroxide is barely soluble, but magnesium sulfate dissolves well.", "The trends go in opposite directions down the group.", "Barium hydroxide is quite soluble, while barium sulfate is insoluble. That's why acidified barium chloride gives a white precipitate with sulfate ions."] },
    { type: "points", title: "Thermal stability of carbonates and nitrates", items: ["Stability increases down the group", "Smaller cation → higher charge density", "→ polarises the anion more → weakens it"],
      say: ["Group two carbonates and nitrates need more heat to decompose as you go down the group.",
            "Smaller cations have a higher charge density.",
            "They polarise, or distort, the electron cloud of the carbonate or nitrate ion more, weakening its bonds so it breaks up more easily. Group one compounds are more stable because their ions only carry a one plus charge, apart from lithium."] },
    { type: "quiz", q: "Which carbonate decomposes at the lowest temperature?", o: ["BaCO₃", "SrCO₃", "CaCO₃", "MgCO₃"], a: 3,
      why: "Mg²⁺ is smallest, so it polarises the carbonate ion most.", say: ["Which of these carbonates breaks down most easily on heating?"] }
  ]
});

S2Data.video("4b", {
  scenes: [
    { type: "title", title: "Group 7: the halogens", sub: "Oxidising power, halide reactions and tests.", mark: "F Cl Br I",
      say: ["The halogens are oxidising agents. Their oxidising power decreases down the group, while the reducing power of halide ions increases."] },
    { type: "equation", title: "Displacement shows oxidising power",
      rows: [["Cl₂", "+", "2Br⁻", "→", "2Cl⁻", "+", { t: "Br₂", k: 1 }], [{ t: "Br₂", s: 1 }, { t: "+", s: 1 }, { t: "2I⁻", s: 1 }, { t: "→", s: 1 }, { t: "2Br⁻", s: 1 }, { t: "+", s: 1 }, { t: "I₂", k: 1, s: 1 }]],
      say: ["Chlorine oxidises bromide ions to bromine, which turns the solution orange.", "Bromine oxidises iodide ions to iodine, giving a brown solution. Bromine can't oxidise chloride, so the order of oxidising power is chlorine, then bromine, then iodine."] },
    { type: "compare", title: "Halides with concentrated H₂SO₄", h: ["What you see", "S product"],
      rows: [["NaCl", "Misty fumes (HCl)", "No reduction"], ["NaBr", "Misty fumes, brown gas (Br₂)", "SO₂ (S: +4)"], ["NaI", "Purple fumes, yellow solid, bad eggs", "SO₂, S and H₂S (S: −2)"]],
      say: ["Chloride ions are weak reducing agents. You only get misty fumes of hydrogen chloride.", "Bromide is a stronger reducing agent. It reduces some sulfuric acid to sulfur dioxide, and bromine forms.", "Iodide is strongest. It reduces sulfuric acid all the way to hydrogen sulfide, which smells of bad eggs."] },
    { type: "compare", title: "Silver nitrate test", h: ["Precipitate", "Dilute / conc NH₃"],
      rows: [["Cl⁻", "White AgCl", "Dissolves in dilute"], ["Br⁻", "Cream AgBr", "Dissolves in concentrated only"], ["I⁻", "Yellow AgI", "Insoluble in both"]],
      say: ["Acidify with dilute nitric acid, then add silver nitrate. Chloride gives a white precipitate which dissolves in dilute ammonia.", "Bromide gives cream, which only dissolves in concentrated ammonia.", "Iodide gives yellow, which doesn't dissolve in either."] },
    { type: "quiz", q: "Why is dilute nitric acid added before silver nitrate?", o: ["To dissolve AgCl", "To remove carbonate ions", "To oxidise the halide", "To act as a catalyst"], a: 1,
      why: "Carbonates would also give a precipitate with silver ions.", say: ["Why do we add nitric acid first?"] }
  ]
});

S2Data.video("5a", {
  scenes: [
    { type: "title", title: "Moles, gases and solutions", sub: "The calculations that sit under everything else.", mark: "n",
      say: ["One mole contains six point zero two times ten to the twenty three particles. Nearly every calculation in chemistry goes through moles."] },
    { type: "points", title: "Four ways to find moles", items: ["n = mass ÷ M<sub>r</sub>", "n = concentration × volume (dm³)", "n = gas volume ÷ 24.0 dm³ (at RTP)", "pV = nRT (Pa, m³, K)"],
      say: ["For a solid, divide the mass by the molar mass.", "For a solution, multiply concentration by volume in decimetres cubed.", "For a gas at room temperature and pressure, divide the volume by twenty four.", "Under any other conditions, use the ideal gas equation, with pressure in pascals, volume in metres cubed and temperature in kelvin."] },
    { type: "calc", title: "Ideal gas example", q: "What volume does 0.0500 mol of gas occupy at 100 kPa and 300 K?",
      lines: ["V = nRT ÷ p", "= 0.0500 × 8.31 × 300 ÷ 100 000", "= 1.25 × 10⁻³ m³ = 1250 cm³"],
      say: ["Rearrange p V equals n R T to make V the subject.", "Substitute, remembering to convert one hundred kilopascals into one hundred thousand pascals.", "That gives one point two five times ten to the minus three metres cubed, or twelve hundred and fifty centimetres cubed."] },
    { type: "calc", title: "Empirical formula", q: "A compound is 40.0% C, 6.7% H, 53.3% O.",
      lines: ["Moles: 40.0/12 = 3.33; 6.7/1 = 6.7; 53.3/16 = 3.33", "Divide by smallest: 1 : 2 : 1", "Empirical formula CH₂O"],
      say: ["Divide each percentage by the relative atomic mass to get moles.", "Divide by the smallest to get the simplest whole number ratio.", "So the empirical formula is C H two O. If the M r is one hundred and eighty, the molecular formula is C six H twelve O six."] },
    { type: "quiz", q: "In pV = nRT, what unit must volume be in?", o: ["cm³", "dm³", "m³", "litres"], a: 2,
      why: "SI units: Pa, m³ and K.", say: ["What unit does volume need to be in for the ideal gas equation?"] }
  ]
});

S2Data.video("5b", {
  scenes: [
    { type: "title", title: "Yield, atom economy and titrations", sub: "How efficient is a reaction, and how accurate is your result?", mark: "%",
      say: ["This topic covers how efficiently a reaction makes product, and how to carry out and evaluate a titration."] },
    { type: "compare", title: "Two measures of efficiency", h: ["Formula", "Tells you"],
      rows: [["Percentage yield", "actual ÷ theoretical × 100", "How much product you actually got"], ["Atom economy", "M<sub>r</sub> desired ÷ total M<sub>r</sub> products × 100", "How much of the reactants ends up as useful product"]],
      say: ["Percentage yield compares the mass you actually get with the maximum possible. Losses come from incomplete reactions, side reactions and transferring product.", "Atom economy comes from the equation. Addition reactions have one hundred percent atom economy; substitution and elimination produce waste."] },
    { type: "flow", title: "Titration method", nodes: ["Pipette 25.0 cm³ into flask", "Add indicator", "Titrate, swirling", "Repeat to concordant"],
      say: ["Use a volumetric pipette to measure twenty five centimetres cubed of one solution into a conical flask.", "Add a few drops of indicator, and stand the flask on a white tile.", "Run in solution from the burette, swirling, and add the last part drop by drop.", "Repeat until you get concordant titres, within point one centimetres cubed, and average those."] },
    { type: "calc", title: "Percentage uncertainty", q: "Titre = 23.50 cm³; each burette reading ±0.05 cm³.",
      lines: ["Two readings → ±0.10 cm³", "% uncertainty = 0.10 ÷ 23.50 × 100", "= 0.43%"],
      say: ["A titre needs two burette readings, so the uncertainty doubles to plus or minus point one.", "Divide by the titre and multiply by a hundred.", "That's about point four three percent. Bigger titres give smaller percentage uncertainties."] },
    { type: "quiz", q: "Which reaction type always has 100% atom economy?", o: ["Substitution", "Elimination", "Addition", "Neutralisation"], a: 2,
      why: "All the reactant atoms end up in one product.", say: ["Which type of reaction always has an atom economy of one hundred percent?"] }
  ]
});
