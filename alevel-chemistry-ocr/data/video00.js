/* Shared with chemistry. */

S2Data.video("2a", {
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

S2Data.video("2b", {
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

S2Data.video("2c", {
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

S2Data.video("2d", {
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

S2Data.video("2e", {
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

S2Data.video("2f", {
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

S2Data.video("2g", {
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

S2Data.video("2h", {
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

S2Data.video("3a", {
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

S2Data.video("3b", {
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

S2Data.video("3c", {
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

S2Data.video("3d", {
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

S2Data.video("3e", {
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

S2Data.video("3f", {
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

S2Data.video("3g", {
  scenes: [
    { type: "title", title: "Reaction rates", sub: "Collision theory and the Maxwell–Boltzmann distribution.", mark: "Eₐ",
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

S2Data.video("3h", {
  scenes: [
    { type: "title", title: "Chemical equilibrium", sub: "Dynamic equilibrium, Kc and Le Chatelier.", mark: "⇌",
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

S2Data.video("4a", {
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

S2Data.video("4b", {
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

S2Data.video("4c", {
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

S2Data.video("4d", {
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

S2Data.video("4e", {
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

S2Data.video("4f", {
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

S2Data.video("5a", {
  scenes: [
    { type: "title", title: "Rate equations and orders", sub: "How concentration affects rate.", mark: "k[A]ᵐ",
      say: ["A rate equation shows how the rate depends on the concentration of each reactant. The orders must be found by experiment."] },
    { type: "big", text: "Rate = k[A]ᵐ[B]ⁿ", sub: "m, n = orders · overall order = m + n · k = rate constant",
      say: ["Rate equals k times A to the power m times B to the power n.", "m and n are the orders with respect to each reactant. Add them to get the overall order. k is the rate constant, which changes with temperature."] },
    { type: "compare", title: "Recognising orders", h: ["Doubling [A]", "Conc–time graph"],
      rows: [["Zero", "No change in rate", "Straight line"], ["First", "Rate doubles", "Curve, constant half-life"], ["Second", "Rate × 4", "Curve, half-life increases"]],
      say: ["Zero order: changing the concentration doesn't affect the rate. A concentration time graph is a straight line.", "First order: double the concentration, double the rate. The half-life is constant.", "Second order: double the concentration and the rate goes up four times."] },
    { type: "calc", title: "Initial rates", q: "Exp 1: [A] 0.1, [B] 0.1, rate 1.0. Exp 2: [A] 0.2, [B] 0.1, rate 4.0. Exp 3: [A] 0.1, [B] 0.2, rate 2.0",
      lines: ["Exp 1 → 2: [A] × 2, rate × 4 → second order in A", "Exp 1 → 3: [B] × 2, rate × 2 → first order in B", "Rate = k[A]²[B]; overall third order"],
      say: ["Compare two experiments where only one concentration changes. From one to two, A doubles and the rate quadruples, so it's second order in A.", "From one to three, B doubles and the rate doubles, so it's first order in B.", "So the rate equation is k A squared B, third order overall. k has units of decimetres to the sixth per mole squared per second."] },
    { type: "quiz", q: "A first-order reaction has t½ = 20 s. What is k?", o: ["0.035 s⁻¹", "13.9 s⁻¹", "0.05 s⁻¹", "20 s⁻¹"], a: 0,
      why: "k = ln 2 ÷ t½ = 0.693 ÷ 20.", say: ["A first order reaction has a half-life of twenty seconds. What's the rate constant?"] }
  ]
});

S2Data.video("5b", {
  scenes: [
    { type: "title", title: "Mechanisms and the Arrhenius equation", sub: "Linking rate equations to mechanisms, and finding Ea.", mark: "RDS",
      say: ["The rate equation tells us about the mechanism, and the Arrhenius equation tells us how rate depends on temperature."] },
    { type: "points", title: "The rate-determining step", items: ["The slowest step controls the overall rate", "Species in the rate equation are in the RDS (or before it)", "Species not in the rate equation react after the RDS"],
      say: ["A reaction often happens in several steps. The slowest one is the rate-determining step.", "Species that appear in the rate equation take part in the rate-determining step, or in steps before it.", "Anything that's zero order reacts after the slow step. For example, iodine is zero order in the iodination of propanone."] },
    { type: "compare", title: "SN1 vs SN2", h: ["SN1", "SN2"],
      rows: [["Substrate", "Tertiary", "Primary"], ["Rate equation", "k[RX]", "k[RX][OH⁻]"], ["Steps", "C–X breaks first → carbocation", "One step"], ["Chiral product", "Racemic mixture", "Inverted, single enantiomer"]],
      say: ["Tertiary halogenoalkanes react by S N one. Primary ones react by S N two.", "S N one is first order: only the halogenoalkane is in the slow step. S N two is second order.", "In S N one, the C X bond breaks first to give a carbocation. In S N two, it all happens at once.", "The planar carbocation in S N one is attacked from both sides, giving a racemic mixture."] },
    { type: "graph", title: "Arrhenius plot", x: "1/T", y: "ln k",
      lines: [{ pts: [[0.1, 0.85], [0.9, 0.15]], straight: true, s: 0 }],
      marks: [{ x: 0.5, y: 0.5, t: "gradient = −Eₐ/R", s: 1, anchor: "start", dx: 20, dy: -10 }],
      say: ["The Arrhenius equation is k equals A e to the minus E a over R T. Taking logs gives a straight line when you plot l n k against one over T.",
            "The gradient is minus E a over R. So E a is minus the gradient times eight point three one, in joules per mole."] },
    { type: "quiz", q: "Rate = k[(CH₃)₃CBr]. Which mechanism?", o: ["SN1", "SN2", "Free-radical", "Electrophilic addition"], a: 0,
      why: "Only the halogenoalkane is in the RDS: it ionises first.", say: ["The rate only depends on the halogenoalkane. Which mechanism is it?"] }
  ]
});

S2Data.video("5c", {
  scenes: [
    { type: "title", title: "Equilibrium constants: Kc and Kp", sub: "Calculating equilibrium constants from data.", mark: "Kp",
      say: ["In Year thirteen you calculate equilibrium constants, including K p for gases, which uses partial pressures instead of concentrations."] },
    { type: "calc", title: "Kc with an ICE table", q: "1.00 mol H₂ + 1.00 mol I₂ ⇌ 2HI. At equilibrium, 1.56 mol HI.",
      lines: ["Change: H₂ and I₂ each −0.78 mol", "Equilibrium: H₂ 0.22, I₂ 0.22, HI 1.56", "Kc = 1.56² ÷ (0.22 × 0.22) = 50.3"],
      say: ["Use the equation ratio. Making one point five six moles of H I uses half that, point seven eight moles, of each reactant.",
            "So at equilibrium there's point two two moles of hydrogen and of iodine left.",
            "The volumes cancel here because there are two moles on each side. K c is fifty point three, with no units."] },
    { type: "points", title: "Partial pressures", items: ["Mole fraction x<sub>A</sub> = n<sub>A</sub> ÷ n<sub>total</sub>", "Partial pressure p<sub>A</sub> = x<sub>A</sub> × total pressure", "K<sub>p</sub> uses partial pressures of gases only"],
      say: ["The mole fraction of a gas is its moles divided by the total moles of gas.", "Its partial pressure is the mole fraction times the total pressure. The partial pressures add up to the total.", "K p is written just like K c but with partial pressures. Solids and liquids are left out."] },
    { type: "calc", title: "Kp example", q: "PCl₅ ⇌ PCl₃ + Cl₂ at 200 kPa. Equilibrium moles: 0.40, 0.30, 0.30.",
      lines: ["Total = 1.00 mol; x = 0.40, 0.30, 0.30", "p = 80, 60, 60 kPa", "Kp = 60 × 60 ÷ 80 = 45 kPa"],
      say: ["Total moles is one, so the mole fractions are point four, point three and point three.", "Multiply by two hundred kilopascals to get the partial pressures.", "K p is products over reactants: forty five kilopascals."] },
    { type: "quiz", q: "Which change alters the value of Kp?", o: ["Increasing total pressure", "Adding a catalyst", "Changing temperature", "Adding more reactant"], a: 2,
      why: "Only temperature changes K; the others only shift the position (or not at all).", say: ["Which of these changes the value of K p?"] }
  ]
});

S2Data.video("5d", {
  scenes: [
    { type: "title", title: "Acids, bases and pH", sub: "Strong and weak acids, Ka and Kw.", mark: "pH",
      say: ["A Brønsted Lowry acid is a proton donor and a base is a proton acceptor. pH measures the concentration of hydrogen ions."] },
    { type: "big", text: "pH = −log[H⁺]", sub: "Strong acid: [H⁺] = [acid]. 0.010 mol dm⁻³ HCl has pH 2.00",
      say: ["pH is minus the log of the hydrogen ion concentration.", "Strong acids dissociate completely, so the hydrogen ion concentration equals the acid concentration."] },
    { type: "calc", title: "pH of a weak acid", q: "0.100 mol dm⁻³ ethanoic acid, Ka = 1.74 × 10⁻⁵ mol dm⁻³",
      lines: ["Ka = [H⁺]² ÷ [HA]  (assume [H⁺] = [A⁻], [HA] unchanged)", "[H⁺] = √(1.74 × 10⁻⁵ × 0.100) = 1.32 × 10⁻³", "pH = 2.88"],
      say: ["A weak acid only partly dissociates. K a equals H plus times A minus, over H A. We assume all the H plus comes from the acid, and so little dissociates that the acid concentration is unchanged.",
            "So the hydrogen ion concentration is the square root of K a times the acid concentration.",
            "Take minus the log. The pH is two point eight eight."] },
    { type: "calc", title: "pH of a strong base", q: "0.050 mol dm⁻³ NaOH at 298 K",
      lines: ["Kw = [H⁺][OH⁻] = 1.00 × 10⁻¹⁴", "[H⁺] = 1.00 × 10⁻¹⁴ ÷ 0.050 = 2.0 × 10⁻¹³", "pH = 12.70"],
      say: ["Water ionises slightly. The ionic product of water, K w, is one times ten to the minus fourteen at two nine eight kelvin.", "Divide K w by the hydroxide concentration to get the hydrogen ion concentration.", "So the pH is twelve point seven."] },
    { type: "quiz", q: "Pure water at 50 °C has pH 6.6. It is…", o: ["Acidic", "Neutral", "Alkaline", "Impure"], a: 1,
      why: "[H⁺] still equals [OH⁻]. Kw just increases with temperature.", say: ["Pure water at fifty degrees has a pH of six point six. Is it acidic?"] }
  ]
});

S2Data.video("5e", {
  scenes: [
    { type: "title", title: "Buffers, titration curves and indicators", sub: "Controlling and following pH.", mark: "HA/A⁻",
      say: ["A buffer is a solution that resists changes in pH when small amounts of acid or alkali are added."] },
    { type: "points", title: "How an acidic buffer works", items: ["Weak acid HA + its salt (lots of A⁻)", "Add H⁺: H⁺ + A⁻ → HA", "Add OH⁻: HA + OH⁻ → A⁻ + H₂O", "Ratio [HA]/[A⁻] hardly changes"],
      say: ["An acidic buffer contains a weak acid and its salt, so there are large reservoirs of both H A and A minus.", "Added acid is removed by the A minus ions, forming more H A.", "Added alkali reacts with H A, forming more A minus and water.", "Because both reservoirs are large, the ratio of H A to A minus barely changes, and neither does the pH."] },
    { type: "calc", title: "Buffer pH", q: "[HA] = 0.20, [A⁻] = 0.10 mol dm⁻³, Ka = 1.8 × 10⁻⁵",
      lines: ["[H⁺] = Ka × [HA] ÷ [A⁻]", "= 1.8 × 10⁻⁵ × 0.20 ÷ 0.10 = 3.6 × 10⁻⁵", "pH = 4.44"],
      say: ["Rearrange K a to find the hydrogen ion concentration.", "Substitute the concentrations of acid and salt.", "pH is four point four four. When acid and salt concentrations are equal, the pH equals p K a."] },
    { type: "graph", title: "Weak acid + strong base", x: "Volume of NaOH added", y: "pH",
      lines: [{ pts: [[0, 0.22], [0.1, 0.3], [0.25, 0.36], [0.42, 0.42], [0.48, 0.5], [0.5, 0.65], [0.52, 0.8], [0.6, 0.86], [1, 0.9]], s: 0 }],
      marks: [{ x: 0.25, y: 0.36, t: "½ equivalence: pH = pKa", s: 1, dy: -22 }, { x: 0.5, y: 0.65, t: "equivalence pH ≈ 9", s: 2, anchor: "start", dx: 20, dy: 6 }],
      say: ["Here's the pH curve for ethanoic acid with sodium hydroxide. It starts around pH three and rises gently through a buffer region.",
            "Halfway to equivalence, half the acid has become salt, so the H A and A minus concentrations are equal and pH equals p K a.",
            "The vertical section runs from about seven to eleven, and the equivalence point is above seven. Phenolphthalein, which changes around eight to ten, is a suitable indicator."] },
    { type: "quiz", q: "Which indicator suits a strong acid titrated with a weak base?", o: ["Phenolphthalein", "Methyl orange", "Either", "Neither"], a: 1,
      why: "The vertical section is roughly pH 3–7.", say: ["For a strong acid with a weak base, which indicator should you use?"] }
  ]
});

S2Data.video("5f", {
  scenes: [
    { type: "title", title: "Lattice energy and Born–Haber cycles", sub: "Measuring the strength of ionic bonding indirectly.", mark: "ΔLEH",
      say: ["Lattice energy is the enthalpy change when one mole of an ionic solid forms from its gaseous ions. It can't be measured directly, so we use a Born Haber cycle."] },
    { type: "flow", title: "Born–Haber cycle for NaCl", col: true, nodes: ["Na(s) + ½Cl₂(g)", "Na(g) + Cl(g)<br>atomisation +107, +122", "Na⁺(g) + Cl(g) + e⁻<br>IE₁ +496", "Na⁺(g) + Cl⁻(g)<br>EA₁ −349"],
      say: ["Start with the elements in their standard states.", "Atomise both elements: sodium needs one hundred and seven, chlorine one hundred and twenty two kilojoules.", "Ionise the sodium atom: four hundred and ninety six.", "Then chlorine gains an electron, releasing three hundred and forty nine. Now we have gaseous ions."] },
    { type: "calc", title: "Finding the lattice energy", q: "ΔfH(NaCl) = −411 kJ mol⁻¹",
      lines: ["ΔfH = sum of steps + ΔLEH", "−411 = 107 + 122 + 496 − 349 + ΔLEH", "ΔLEH = −787 kJ mol⁻¹"],
      say: ["By Hess's law, the enthalpy of formation equals the sum of all those steps plus the lattice energy.", "Substitute the values.", "Rearrange to get minus seven eight seven kilojoules per mole."] },
    { type: "points", title: "Theory vs experiment", items: ["Higher charge, smaller ions → more exothermic", "Theoretical value assumes perfect spherical ions", "Experimental much more exothermic → covalent character", "Small, highly charged cations polarise large anions"],
      say: ["Lattice energy is more exothermic for ions with higher charges and smaller radii.", "Theoretical values assume a perfect ionic model with spherical ions.", "If the Born Haber value is much more exothermic, the bonding has some covalent character.", "That happens when a small, highly charged cation distorts the electron cloud of a large anion, like in silver iodide."] },
    { type: "quiz", q: "Which compound would show the most covalent character?", o: ["NaF", "KCl", "MgI₂", "CsF"], a: 2,
      why: "Small Mg²⁺ polarises the large I⁻ ion.", say: ["Which compound has the greatest covalent character?"] }
  ]
});

S2Data.video("5g", {
  scenes: [
    { type: "title", title: "Entropy and Gibbs energy", sub: "Will a reaction happen? Thermodynamics decides.", mark: "ΔG",
      say: ["Entropy is a measure of the number of ways particles and their energy can be arranged. Reactions are feasible when total entropy increases."] },
    { type: "points", title: "Entropy changes", items: ["Solid → liquid → gas: S increases", "More gas moles → ΔS<sub>system</sub> positive", "ΔS<sub>surr</sub> = −ΔH ÷ T", "Feasible if ΔS<sub>total</sub> &gt; 0"],
      say: ["Gases have much higher entropy than liquids, which are higher than solids.", "If a reaction makes more moles of gas, the system's entropy increases.", "The entropy change of the surroundings is minus delta H over T. An exothermic reaction warms the surroundings and increases their entropy.", "A reaction is feasible if the total entropy change is positive."] },
    { type: "big", text: "ΔG = ΔH − TΔS", sub: "Feasible when ΔG ≤ 0 · convert ΔS from J to kJ",
      say: ["Gibbs energy combines both ideas. A reaction is feasible when delta G is zero or negative.", "Watch the units: delta H is usually in kilojoules but delta S is in joules per kelvin per mole."] },
    { type: "calc", title: "When does it become feasible?", q: "CaCO₃ → CaO + CO₂. ΔH = +178 kJ mol⁻¹, ΔS = +161 J K⁻¹ mol⁻¹",
      lines: ["Set ΔG = 0: T = ΔH ÷ ΔS", "T = 178 ÷ 0.161", "T = 1106 K"],
      say: ["The reaction is endothermic with a positive entropy change, so it becomes feasible at high temperature. Find where delta G equals zero.", "Divide delta H by delta S, converting delta S into kilojoules.", "Above eleven hundred and six kelvin, limestone decomposes. A feasible reaction can still be too slow if the activation energy is high."] },
    { type: "quiz", q: "ΔH negative, ΔS negative. The reaction is feasible…", o: ["At all temperatures", "At low temperatures", "At high temperatures", "Never"], a: 1,
      why: "−TΔS is positive and grows with T, so ΔG only stays negative when T is low.", say: ["If delta H and delta S are both negative, when is the reaction feasible?"] }
  ]
});

S2Data.video("5h", {
  scenes: [
    { type: "title", title: "Electrode potentials and cells", sub: "Predicting redox reactions with E⦵ values.", mark: "E⦵",
      say: ["When two half-cells are connected, electrons flow from one to the other. Standard electrode potentials let us predict which way."] },
    { type: "points", title: "The standard hydrogen electrode", items: ["H₂ gas at 100 kPa over a platinum electrode", "1.00 mol dm⁻³ H⁺, 298 K", "Defined as E⦵ = 0.00 V", "Salt bridge: saturated KNO₃ on filter paper"],
      say: ["The reference is the standard hydrogen electrode. Hydrogen gas at one hundred kilopascals bubbles over platinum.", "It dips into one mole per decimetre cubed acid at two nine eight kelvin.", "Its potential is defined as zero volts. Every other half-cell's standard electrode potential is measured against it.", "A salt bridge, usually filter paper soaked in potassium nitrate, completes the circuit by letting ions move."] },
    { type: "compare", title: "Using E⦵ values", h: ["E⦵ / V", "Meaning"],
      rows: [["Zn²⁺/Zn", "−0.76", "Zn is a good reducing agent"], ["Cu²⁺/Cu", "+0.34", "Cu²⁺ is reduced more easily"], ["Cl₂/Cl⁻", "+1.36", "Cl₂ is a strong oxidising agent"]],
      say: ["Half-equations are written as reductions. Zinc has a very negative potential, so it would rather lose electrons. It's a good reducing agent.", "Copper's potential is more positive, so copper two plus ions are reduced more easily.", "Chlorine has a very positive potential: it's a strong oxidising agent."] },
    { type: "calc", title: "Cell EMF and feasibility", q: "Zn | Zn²⁺ ‖ Cu²⁺ | Cu",
      lines: ["E⦵cell = E(right) − E(left)", "= +0.34 − (−0.76)", "= +1.10 V → feasible"],
      say: ["The cell E M F is the right-hand electrode potential minus the left.", "Copper minus zinc.", "Plus one point one zero volts. A positive E cell means the reaction is feasible, though it might still be too slow."] },
    { type: "quiz", q: "E⦵(Fe³⁺/Fe²⁺) = +0.77 V; E⦵(I₂/I⁻) = +0.54 V. Which happens?", o: ["I₂ oxidises Fe²⁺", "Fe³⁺ oxidises I⁻", "Neither", "Both"], a: 1,
      why: "The more positive half-cell (Fe³⁺) is reduced: E cell = +0.23 V.", say: ["Using these values, which reaction is feasible?"] }
  ]
});

S2Data.video("5i", {
  scenes: [
    { type: "title", title: "Redox titrations", sub: "Manganate(VII) and iodine–thiosulfate.", mark: "MnO₄⁻",
      say: ["Redox titrations work just like acid base titrations, but use an oxidising agent and a reducing agent."] },
    { type: "equation", title: "Manganate(VII) with iron(II)",
      rows: [["MnO₄⁻", "+", "8H⁺", "+", { t: "5Fe²⁺", k: 1 }, "→", "Mn²⁺", "+", "4H₂O", "+", "5Fe³⁺"]],
      note: "Ratio MnO₄⁻ : Fe²⁺ = 1 : 5 · end point: first permanent pale pink", noteStep: 1,
      say: ["Potassium manganate seven oxidises iron two plus to iron three plus. Notice one manganate reacts with five iron ions.",
            "It's self-indicating. Purple manganate turns colourless as it reacts, so the end point is the first permanent pale pink. Acidify with dilute sulfuric acid, never hydrochloric acid, which would be oxidised to chlorine."] },
    { type: "calc", title: "Worked example", q: "25.0 cm³ Fe²⁺ needs 22.40 cm³ of 0.0200 mol dm⁻³ KMnO₄.",
      lines: ["n(MnO₄⁻) = 0.02240 × 0.0200 = 4.48 × 10⁻⁴", "n(Fe²⁺) = 5 × 4.48 × 10⁻⁴ = 2.24 × 10⁻³", "[Fe²⁺] = 2.24 × 10⁻³ ÷ 0.0250 = 0.0896 mol dm⁻³"],
      say: ["Find the moles of manganate from the titre.", "Multiply by five for the iron.", "Divide by the volume of iron solution: point zero eight nine six moles per decimetre cubed."] },
    { type: "flow", title: "Iodine–thiosulfate", nodes: ["Oxidant + excess KI<br>→ I₂ released", "Titrate with S₂O₃²⁻<br>until pale yellow", "Add starch:<br>blue-black", "End point:<br>colourless"],
      say: ["First, react the oxidising agent with excess potassium iodide. It releases iodine in proportion to the amount of oxidant.", "Titrate the iodine with sodium thiosulfate. Two thiosulfates react with each iodine molecule. The brown colour fades to pale yellow.", "Now add starch. It turns blue black with the remaining iodine.", "The end point is when the blue black colour just disappears."] },
    { type: "quiz", q: "Why add starch only near the end point?", o: ["It reacts with thiosulfate", "Iodine binds irreversibly to starch at high concentration", "It changes the ratio", "It's expensive"], a: 1,
      why: "Too much iodine forms a complex that doesn't release fully, giving a late end point.", say: ["Why do we wait until the solution is pale yellow before adding starch?"] }
  ]
});

S2Data.video("5j", {
  scenes: [
    { type: "title", title: "Transition metals and complexes", sub: "Why they're coloured, and the shapes they make.", mark: "d",
      say: ["A transition metal forms at least one stable ion with an incompletely filled d sub-shell. That gives them variable oxidation states, coloured compounds, complex ions and catalytic activity."] },
    { type: "points", title: "Complexes and ligands", items: ["Ligand: donates a lone pair (dative bond)", "Monodentate: H₂O, NH₃, Cl⁻", "Bidentate: en, ethanedioate", "Hexadentate: EDTA⁴⁻"],
      say: ["A ligand donates a lone pair to the central metal ion, forming a dative covalent bond.", "Monodentate ligands like water and ammonia form one bond each.", "Bidentate ligands, like ethane one two diamine, form two.", "E D T A forms six bonds on its own."] },
    { type: "compare", title: "Shapes", h: ["Coordination no.", "Example"],
      rows: [["Octahedral", "6", "[Cu(H₂O)₆]²⁺"], ["Tetrahedral", "4", "[CuCl₄]²⁻"], ["Square planar", "4", "cisplatin"], ["Linear", "2", "[Ag(NH₃)₂]⁺"]],
      say: ["Six ligands give an octahedral complex.", "Large chloride ligands fit only four around the metal, giving a tetrahedral shape.", "Platinum complexes are often square planar. Cisplatin is an anticancer drug that binds to DNA.", "Silver ammonia complexes are linear. That's Tollens' reagent."] },
    { type: "flow", title: "Why complexes are coloured", nodes: ["Ligands split<br>the d orbitals", "Electron absorbs<br>ΔE = hν", "We see the<br>complementary colour"],
      say: ["Ligands cause the five d orbitals to split into two energy levels.", "An electron absorbs visible light of exactly the energy gap, delta E equals h nu, and jumps up.", "The light that isn't absorbed is transmitted. That's the colour we see. Ions with empty or full d sub-shells can't do this, so they're colourless."] },
    { type: "quiz", q: "Why is Zn²⁺(aq) colourless?", o: ["No ligands", "3d¹⁰: no d–d transitions possible", "It's not in the d block", "It absorbs all light"], a: 1,
      why: "A full d sub-shell leaves no space for an electron to move up.", say: ["Why are zinc two plus solutions colourless?"] }
  ]
});

S2Data.video("5k", {
  scenes: [
    { type: "title", title: "Transition metal reactions", sub: "Ligand exchange, precipitates, redox and catalysis.", mark: "Cu²⁺",
      say: ["Transition metal ions take part in ligand exchange, precipitation and redox reactions, and they're excellent catalysts."] },
    { type: "compare", title: "Copper(II) reactions", h: ["Product", "Colour"],
      rows: [["+ conc HCl", "[CuCl₄]²⁻ (tetrahedral)", "Yellow-green"], ["+ a little NH₃ or OH⁻", "Cu(OH)₂(H₂O)₄", "Blue precipitate"], ["+ excess NH₃", "[Cu(NH₃)₄(H₂O)₂]²⁺", "Deep blue solution"]],
      say: ["With concentrated hydrochloric acid, chloride ions replace water. The complex becomes tetrahedral and yellow green.", "A little hydroxide or ammonia removes protons from water ligands, forming a blue precipitate.", "Excess ammonia replaces four water ligands, making a deep blue solution."] },
    { type: "points", title: "The chelate effect", items: ["[Cu(H₂O)₆]²⁺ + 3en → [Cu(en)₃]²⁺ + 6H₂O", "4 particles → 7 particles", "ΔS positive; ΔH ≈ 0 → ΔG negative"],
      say: ["When bidentate ligands replace monodentate ones,", "the number of particles increases, from four to seven.", "So entropy increases. The bonds broken and made are similar, so delta H is small and delta G is negative. Complexes of multidentate ligands are more stable."] },
    { type: "flow", title: "Vanadium colours with zinc and acid", nodes: ["VO₂⁺ +5<br>yellow", "VO²⁺ +4<br>blue", "V³⁺ +3<br>green", "V²⁺ +2<br>violet"],
      say: ["Zinc in acid reduces vanadium step by step. It starts as yellow V O two plus, vanadium five.", "It turns blue as vanadium four forms.", "Then green, vanadium three.", "And finally violet, vanadium two."] },
    { type: "quiz", q: "How does Fe²⁺ catalyse S₂O₈²⁻ + 2I⁻?", o: ["Provides a surface", "Changes oxidation state, so each step is between opposite charges", "Raises the temperature", "Shifts the equilibrium"], a: 1,
      why: "Fe²⁺ is oxidised by S₂O₈²⁻, then Fe³⁺ is reduced by I⁻.", say: ["How does iron two plus speed up this reaction between two negative ions?"] }
  ]
});

S2Data.video("6a", {
  scenes: [
    { type: "title", title: "Arenes", sub: "The structure of benzene and electrophilic substitution.", mark: "⌬",
      say: ["Benzene, C six H six, is a planar ring with delocalised pi electrons above and below it. That delocalisation makes it unusually stable."] },
    { type: "points", title: "Evidence against Kekulé's structure", items: ["All C–C bonds the same length (0.139 nm)", "ΔH hydrogenation −208, not −360 kJ mol⁻¹", "Doesn't decolourise bromine water"],
      say: ["Kekulé suggested alternating single and double bonds. But X-ray data show all six carbon carbon bonds are the same length, between single and double.", "Hydrogenating benzene releases two hundred and eight kilojoules per mole, not three times one twenty. Benzene is about one hundred and fifty kilojoules more stable than Kekulé predicts.", "And benzene doesn't decolourise bromine water. It resists addition, because addition would destroy the delocalised ring."] },
    { type: "compare", title: "Electrophilic substitution", h: ["Reagents", "Electrophile"],
      rows: [["Nitration", "Conc HNO₃ + conc H₂SO₄, < 55 °C", "NO₂⁺"], ["Bromination", "Br₂ + FeBr₃", "Br⁺"], ["Friedel–Crafts alkylation", "RCl + AlCl₃", "R⁺"], ["Friedel–Crafts acylation", "RCOCl + AlCl₃", "RCO⁺"]],
      say: ["Nitration uses concentrated nitric and sulfuric acids, which make the nitronium ion.", "Bromination needs a halogen carrier like iron three bromide to make a bromine cation.", "Friedel Crafts alkylation uses a halogenoalkane and aluminium chloride.", "Acylation uses an acyl chloride and aluminium chloride, forming a ketone."] },
    { type: "flow", title: "The mechanism", nodes: ["Ring electrons attack<br>the electrophile", "Intermediate: + charge,<br>ring partly broken", "C–H electrons return<br>to the ring; H⁺ lost"],
      say: ["A curly arrow goes from the delocalised ring to the electrophile.", "That makes an intermediate where the delocalisation is partly broken, drawn as a horseshoe with a plus inside.", "The C H bond electrons go back into the ring, restoring the stable delocalised system, and a proton is lost."] },
    { type: "quiz", q: "Why does phenol react with bromine water but benzene doesn't?", o: ["Phenol is acidic", "O lone pair delocalises into the ring, raising electron density", "Benzene has no π electrons", "Phenol is a liquid"], a: 1,
      why: "The more electron-rich ring polarises Br₂ without a catalyst.", say: ["Why is phenol so much more reactive than benzene?"] }
  ]
});

S2Data.video("6b", {
  scenes: [
    { type: "title", title: "Carbonyl compounds", sub: "Aldehydes, ketones and nucleophilic addition.", mark: "C=O",
      say: ["Aldehydes have the C O group at the end of a chain. Ketones have it in the middle. The carbonyl carbon is slightly positive, so nucleophiles attack it."] },
    { type: "compare", title: "Tests for carbonyls", h: ["Aldehyde", "Ketone"],
      rows: [["2,4-DNPH", "Orange precipitate", "Orange precipitate"], ["Tollens'", "Silver mirror", "No change"], ["Fehling's / Benedict's", "Blue → red precipitate", "Stays blue"], ["Iodine + NaOH", "Yellow CHI₃ if CH₃CO– (ethanal)", "Yellow CHI₃ if CH₃CO–"]],
      say: ["Two four D N P H gives an orange precipitate with any carbonyl. Recrystallise it and measure its melting point to identify the compound.", "Aldehydes reduce Tollens' reagent to silver, giving a silver mirror. Ketones don't react.", "Aldehydes turn Fehling's solution from blue to a brick red precipitate.", "The iodoform test gives a pale yellow precipitate for any C H three C O group."] },
    { type: "flow", title: "Nucleophilic addition of HCN", nodes: ["CN⁻ attacks C<sup>δ+</sup>", "π electrons move<br>onto O → O⁻", "O⁻ takes H⁺<br>→ hydroxynitrile"],
      say: ["Use potassium cyanide with dilute acid, because H C N gas is too toxic. The lone pair on the cyanide carbon attacks the slightly positive carbonyl carbon.",
            "The pi electrons of the C O bond move onto the oxygen, giving a negative intermediate.",
            "That oxygen picks up a proton, forming a hydroxynitrile. The chain has gained a carbon."] },
    { type: "points", title: "Reduction", items: ["LiAlH₄ in dry ether", "Aldehyde + 2[H] → primary alcohol", "Ketone + 2[H] → secondary alcohol"],
      say: ["Lithium tetrahydridoaluminate in dry ether is a powerful reducing agent.", "It reduces aldehydes to primary alcohols.", "And ketones to secondary alcohols."] },
    { type: "quiz", q: "Which gives an orange ppt with 2,4-DNPH but no silver mirror?", o: ["Propanal", "Butanone", "Ethanol", "Ethanoic acid"], a: 1,
      why: "A ketone: carbonyl present, but not oxidised by Tollens'.", say: ["Which compound reacts with D N P H but not with Tollens' reagent?"] }
  ]
});

S2Data.video("6c", {
  scenes: [
    { type: "title", title: "Carboxylic acids and derivatives", sub: "Acids, esters, acyl chlorides and polyesters.", mark: "COOH",
      say: ["Carboxylic acids contain the C O O H group. They're weak acids, and they can be turned into esters and acyl chlorides."] },
    { type: "equation", title: "Esterification",
      rows: [["CH₃COOH", "+", "C₂H₅OH", "⇌", { t: "CH₃COOC₂H₅", k: 1 }, "+", "H₂O"]],
      note: "Concentrated H₂SO₄ catalyst, heat under reflux · alkaline hydrolysis goes to completion", noteStep: 1,
      say: ["A carboxylic acid and an alcohol react to form an ester and water. Ethanoic acid and ethanol make ethyl ethanoate.",
            "The reaction is reversible and needs a concentrated sulfuric acid catalyst. Esters are hydrolysed back by acid, or completely by sodium hydroxide, which gives a carboxylate salt."] },
    { type: "compare", title: "Acyl chloride reactions", h: ["Product", "Note"],
      rows: [["+ water", "Carboxylic acid + HCl", "Vigorous; misty fumes"], ["+ alcohol", "Ester + HCl", "Not reversible"], ["+ ammonia", "Amide", "Primary amide"], ["+ amine", "N-substituted amide", "e.g. N-methylethanamide"]],
      say: ["Acyl chlorides are very reactive. With water they give a carboxylic acid and steamy fumes of hydrogen chloride.", "With alcohols they give esters. Unlike esterification, this isn't reversible, so the yield is higher.", "With ammonia they give amides.", "And with amines they give N substituted amides."] },
    { type: "flow", title: "Addition–elimination", nodes: ["Nucleophile adds<br>to C=O carbon", "C=O reforms,<br>Cl⁻ leaves", "H⁺ lost<br>→ product + HCl"],
      say: ["The nucleophile's lone pair attacks the carbonyl carbon, and the pi electrons move onto oxygen. That's the addition step.",
            "The C O double bond reforms and the chloride ion is pushed out. That's the elimination.",
            "Finally, a proton is lost, and it combines with chloride to make H C l."] },
    { type: "quiz", q: "Which pair makes a polyester?", o: ["Diamine + dicarboxylic acid", "Diol + dicarboxylic acid", "Two alkenes", "Amino acids"], a: 1,
      why: "Ester links form between –OH and –COOH groups, losing water.", say: ["Which pair of monomers forms a polyester?"] }
  ]
});

S2Data.video("6d", {
  scenes: [
    { type: "title", title: "Amines, amides and amino acids", sub: "Nitrogen compounds and the polymers they make.", mark: "–NH₂",
      say: ["Amines have a lone pair on nitrogen, so they act as bases and nucleophiles."] },
    { type: "flow", title: "Base strength", nodes: ["Ethylamine<br>strongest", "Ammonia", "Phenylamine<br>weakest"],
      say: ["The ethyl group pushes electron density onto the nitrogen, so its lone pair is more available to accept a proton. Ethylamine is the strongest base.",
            "Ammonia is in the middle.",
            "In phenylamine, the lone pair is partly delocalised into the benzene ring, so it's less available. Phenylamine is the weakest base."] },
    { type: "compare", title: "Making amines", h: ["Reagents", "Note"],
      rows: [["From halogenoalkane", "Excess NH₃, ethanol, heat", "Can give a mixture"], ["From nitrile", "LiAlH₄, dry ether", "Only primary amine"], ["Phenylamine", "Nitrobenzene + Sn / conc HCl, then NaOH", "Used to make dyes"]],
      say: ["A halogenoalkane with excess ammonia gives an amine, but further substitution can make a mixture.", "Reducing a nitrile with lithium aluminium hydride gives just the primary amine.", "Phenylamine is made by reducing nitrobenzene with tin and concentrated hydrochloric acid, then adding sodium hydroxide."] },
    { type: "points", title: "Amino acids and proteins", items: ["Zwitterion: ⁺H₃N–CHR–COO⁻", "Peptide links join amino acids (water lost)", "Polyamides: diamine + dicarboxylic acid (nylon, Kevlar)"],
      say: ["In solution, amino acids exist as zwitterions, with a positive and a negative charge. That's why they have high melting points.", "Amino acids join through peptide links, losing water each time. Hydrolysis with hot hydrochloric acid breaks them apart again.", "Synthetic polyamides like nylon and Kevlar are made from a diamine and a dicarboxylic acid. Strong hydrogen bonds between chains make Kevlar extremely strong."] },
    { type: "quiz", q: "What is glycine's form in strongly alkaline solution?", o: ["⁺H₃NCH₂COOH", "⁺H₃NCH₂COO⁻", "H₂NCH₂COO⁻", "H₂NCH₂COOH"], a: 2,
      why: "Alkali removes the proton from –NH₃⁺.", say: ["What does glycine look like in strong alkali?"] }
  ]
});

S2Data.video("6e", {
  scenes: [
    { type: "title", title: "Chirality", sub: "Mirror-image molecules and what they tell us about mechanisms.", mark: "C*",
      say: ["A chiral centre is a carbon atom with four different groups attached. Molecules with one exist as two optical isomers."] },
    { type: "points", title: "Optical isomers", items: ["Enantiomers: non-superimposable mirror images", "Rotate plane-polarised light equally, in opposite directions", "Racemic mixture: 50 : 50, no overall rotation", "Identical chemistry, except with other chiral molecules"],
      say: ["The two forms are called enantiomers. They're mirror images that can't be superimposed, like your left and right hands.", "Each one rotates the plane of plane-polarised light by the same amount, but in opposite directions. A polarimeter measures this.", "A racemic mixture contains equal amounts of each, so the rotations cancel.", "Enantiomers react identically with most reagents, but enzymes and receptors in the body can tell them apart."] },
    { type: "compare", title: "Optical activity reveals the mechanism", h: ["Why", "Product"],
      rows: [["SN1", "Planar carbocation, attacked from both sides", "Racemic, inactive"], ["SN2", "Attack from the side opposite the halogen", "One enantiomer, active"], ["HCN + aldehyde", "Planar C=O, attacked from both sides", "Racemic, inactive"]],
      say: ["In S N one, the carbocation is flat, so the nucleophile is equally likely to attack from either side. You get a racemic mixture.", "In S N two, the nucleophile always attacks from the opposite side to the leaving group, so you get one enantiomer, inverted.", "Nucleophilic addition of H C N to an aldehyde also attacks a flat group, giving a racemic product."] },
    { type: "big", text: "Drugs: often only one enantiomer works", sub: "Single-enantiomer drugs mean smaller doses and fewer side effects",
      say: ["In the body, often only one enantiomer has the desired effect.", "Making a single enantiomer is harder and more expensive, but it reduces side effects. Thalidomide is the famous example where the other enantiomer caused harm."] },
    { type: "quiz", q: "Which is chiral?", o: ["Propan-2-ol", "Butan-2-ol", "2-methylpropan-2-ol", "1-chloropropane"], a: 1,
      why: "C2 in butan-2-ol has H, OH, CH₃ and C₂H₅.", say: ["Which of these molecules has a chiral centre?"] }
  ]
});

S2Data.video("6f", {
  scenes: [
    { type: "title", title: "Organic synthesis", sub: "Planning routes, Grignard reagents and purification.", mark: "A→B",
      say: ["Organic synthesis means planning a route from a starting material to a target molecule, often in several steps."] },
    { type: "points", title: "Grignard reagents", items: ["RX + Mg in dry ether → RMgX", "Carbon bonded to Mg is δ− (a nucleophile)", "+ CO₂ → carboxylic acid (+1 C)", "+ aldehyde → 2° alcohol; + ketone → 3° alcohol"],
      say: ["A Grignard reagent is made by reacting a halogenoalkane with magnesium in dry ether. Any water would destroy it.", "The carbon attached to magnesium is slightly negative, so it attacks positive carbons, forming new carbon carbon bonds.", "With carbon dioxide, then acid, you get a carboxylic acid with one extra carbon.", "With aldehydes you get secondary alcohols, and with ketones, tertiary alcohols."] },
    { type: "flow", title: "Example route: bromoethane → propanoic acid", nodes: ["CH₃CH₂Br", "CH₃CH₂CN", "CH₃CH₂COOH"], arrows: ["KCN, ethanol,<br>reflux", "dilute HCl,<br>reflux"],
      say: ["Start with bromoethane. The target has three carbons, so the chain must grow by one.", "Heat with potassium cyanide in ethanol to make propanenitrile.", "Then hydrolyse the nitrile by refluxing with dilute acid. You could also use a Grignard reagent with carbon dioxide."] },
    { type: "flow", title: "Recrystallisation", nodes: ["Dissolve in minimum<br>hot solvent", "Filter hot", "Cool to crystallise", "Filter (Büchner),<br>wash cold, dry"],
      say: ["Dissolve the impure solid in the minimum volume of hot solvent.", "Filter while hot to remove insoluble impurities.", "Cool, so the product crystallises while soluble impurities stay in solution.", "Collect the crystals by filtration under reduced pressure, wash with a little cold solvent, and dry. Check purity with a melting point: a pure solid melts sharply."] },
    { type: "quiz", q: "CH₃MgBr + propanone, then acid. Product?", o: ["Butan-2-ol", "2-methylpropan-2-ol", "Butanoic acid", "Propan-2-ol"], a: 1,
      why: "Grignard + ketone gives a tertiary alcohol.", say: ["Methyl magnesium bromide reacts with propanone. What's the product?"] }
  ]
});

S2Data.video("6g", {
  scenes: [
    { type: "title", title: "Chromatography and combined techniques", sub: "Separating mixtures and putting the evidence together.", mark: "Rf",
      say: ["Chromatography separates mixtures. Combining it with spectroscopy lets chemists identify almost anything."] },
    { type: "big", text: "Different affinities for stationary and mobile phases", sub: "Components that stick to the stationary phase move more slowly",
      say: ["Every type of chromatography has a stationary phase and a mobile phase.", "Each component spends a different amount of time attached to the stationary phase, so they move at different speeds and separate."] },
    { type: "compare", title: "Types of chromatography", h: ["Phases", "Measure"],
      rows: [["TLC", "Silica plate / solvent", "Rf = spot ÷ solvent front"], ["GC", "Liquid on solid in a column / inert gas", "Retention time; peak area = amount"], ["HPLC", "Packed column / liquid at high pressure", "Retention time"]],
      say: ["In thin layer chromatography, a solvent moves up a silica plate. Measure R f: the distance moved by the spot divided by the distance moved by the solvent front.", "In gas chromatography, an inert carrier gas sweeps vaporised samples through a long column. Each compound has a retention time, and peak area shows how much there is.", "H P L C pumps liquid at high pressure through a packed column. It's good for compounds that would decompose if vaporised. Coupling G C or H P L C to a mass spectrometer identifies each component."] },
    { type: "flow", title: "Identifying an unknown", nodes: ["% composition<br>→ empirical formula", "Mass spec<br>→ Mᵣ", "IR<br>→ functional groups", "NMR<br>→ structure"],
      say: ["Start with percentage composition to get the empirical formula.", "The molecular ion in the mass spectrum gives the M r, and so the molecular formula.", "The I R spectrum shows which functional groups are present.", "Finally, carbon thirteen and proton N M R show how the atoms are connected. Check your structure fits every piece of evidence."] },
    { type: "quiz", q: "A spot moves 3.0 cm; the solvent front moves 7.5 cm. Rf = ?", o: ["2.5", "0.40", "0.25", "4.5"], a: 1,
      why: "3.0 ÷ 7.5 = 0.40.", say: ["What's the R f value of this spot?"] }
  ]
});

S2Data.video("6h", {
  scenes: [
    { type: "title", title: "NMR spectroscopy", sub: "Mapping carbon and hydrogen environments.", mark: "δ",
      say: ["N M R spectroscopy shows the different environments of carbon thirteen and hydrogen one nuclei in a molecule. It's the most powerful tool for working out structures."] },
    { type: "points", title: "Basics", items: ["Chemical shift δ (ppm) relative to TMS at 0", "TMS: one peak, inert, volatile", "Solvent: CDCl₃ (no ¹H peak)", "¹³C NMR: number of peaks = number of C environments"],
      say: ["The position of a peak is its chemical shift, in parts per million, compared with T M S at zero.", "Tetramethylsilane gives one strong peak, is inert, and is easy to remove.", "Samples are dissolved in deuterated solvents like C D C l three, which give no hydrogen peak.", "In carbon thirteen N M R, the number of peaks tells you the number of different carbon environments. Use symmetry to count them."] },
    { type: "compare", title: "Reading ¹H NMR", h: ["Tells you", "Example"],
      rows: [["Number of peaks", "Number of H environments", "Ethanol: 3"], ["Integration", "Ratio of H in each", "3 : 2 : 1"], ["Splitting (n + 1)", "H on the neighbouring carbon", "CH₃ next to CH₂ → triplet"], ["Shift", "What's nearby", "δ 9–10: aldehyde H"]],
      say: ["The number of peaks is the number of hydrogen environments.", "The area under each peak, the integration, gives the ratio of hydrogens in each environment.", "Splitting follows the n plus one rule: n hydrogens on the neighbouring carbon split a peak into n plus one lines.", "And the chemical shift tells you what's nearby, such as an oxygen, a carbonyl group or a benzene ring."] },
    { type: "flow", title: "Ethanol's ¹H spectrum", nodes: ["CH₃: triplet<br>3H, δ 1.2", "CH₂: quartet<br>2H, δ 3.7", "OH: singlet<br>1H"],
      say: ["The C H three hydrogens have two neighbours on the C H two, so they're split into a triplet.", "The C H two hydrogens have three neighbours, giving a quartet. They're near the oxygen, so their shift is higher.", "The O H usually gives a singlet. Add D two O and it disappears, which confirms it's O H."] },
    { type: "quiz", q: "How many peaks in the ¹³C NMR spectrum of propanone?", o: ["1", "2", "3", "4"], a: 1,
      why: "The two CH₃ carbons are equivalent; the C=O carbon is different.", say: ["How many peaks would propanone show in carbon thirteen N M R?"] }
  ]
});
