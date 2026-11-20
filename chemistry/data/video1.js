/* Video explainers — Chemistry Topic 1. */

CHEM.video("1a", {
  scenes: [
    { type: "title", title: "States of matter", sub: "Solids, liquids, gases, and what happens when they change.", mark: "s l g",
      say: ["Everything around you is made of tiny particles. How those particles are arranged, and how they move, decides whether something is a solid, a liquid or a gas."] },
    { type: "particles", title: "Three states, one set of particles", modes: ["solid", "liquid", "gas"], caps: ["Solid", "Liquid", "Gas"], n: 36,
      say: ["In a solid, the particles are packed closely in a regular pattern. They can't move around, they just vibrate about fixed positions.",
            "Give them energy and they become a liquid. The particles are still close together, but now they're arranged randomly and can slide past each other.",
            "Add more energy and you get a gas. The particles are far apart and move quickly in all directions. The forces between them are very weak."] },
    { type: "compare", title: "Know this table", h: ["Solid", "Gas"],
      rows: [["Arrangement", "Regular, close", "Random, far apart"], ["Movement", "Vibrate in place", "Fast, all directions"], ["Energy", "Lowest", "Highest"], ["Forces", "Strong", "Very weak"]],
      say: ["Here's the comparison examiners love. Arrangement: regular and close in a solid, random and far apart in a gas.",
            "Movement: solid particles only vibrate. Gas particles move quickly in all directions.",
            "Energy: solid particles have the least, gas particles the most.",
            "And the forces between particles: strong in a solid, very weak in a gas. A liquid sits in the middle on every row."] },
    { type: "flow", title: "Changes of state", both: true, nodes: ["Solid", "Liquid", "Gas"], arrows: ["melting →<br>← freezing", "boiling →<br>← condensing"], start: 0,
      say: ["Changes of state are physical changes. No new substance is made. Start with a solid.",
            "Melting turns a solid into a liquid. The particles take in energy and overcome some of the forces holding them in place. Freezing is the reverse.",
            "Boiling turns a liquid into a gas, and condensing turns a gas back into a liquid. Whenever forces form between particles, energy is given out."] },
    { type: "graph", title: "Why heating curves have flat parts", x: "Time heating", y: "Temperature",
      lines: [{ pts: [[0, 0.05], [0.15, 0.3], [0.38, 0.3], [0.52, 0.65], [0.82, 0.65], [1, 0.92]], straight: true, s: 1 }],
      marks: [{ x: 0.265, y: 0.3, t: "melting", s: 2, dy: -24 }, { x: 0.67, y: 0.65, t: "boiling", s: 3, dy: -24 }],
      say: ["If you heat ice and measure the temperature, you get a graph like this.",
            "The temperature rises, then stays flat while the ice melts.",
            "It rises again, then stays flat while the water boils.",
            "During a change of state the temperature doesn't change. The energy is used to overcome the forces between particles, not to speed them up."] },
    { type: "particles", title: "Diffusion", mode: "diffusion", modes: ["diffusion", "diffusion"], caps: ["Before mixing", "Particles spread out"], n: 40,
      say: ["Diffusion is the net movement of particles from where there are lots of them to where there are few.",
            "Nothing pushes them. Their own random motion spreads them out until they're evenly mixed. That's why a purple crystal of potassium manganate slowly colours a whole beaker of water."] },
    { type: "quiz", q: "Ice is melting at 0 °C. What is the energy being used for?", o: ["Speeding up the particles", "Overcoming forces between particles", "Making new particles", "Cooling the ice"], a: 1,
      why: "That's why the temperature stays flat while it melts.",
      say: ["Quick check. Ice is melting at zero degrees. What is the energy being used for?"] }
  ]
});

CHEM.video("1b", {
  scenes: [
    { type: "title", title: "Elements, compounds and mixtures", sub: "What they are, and how to separate mixtures.", mark: "Fe + S",
      say: ["Every substance is an element, a compound or a mixture. Knowing which is which tells you how to separate it."] },
    { type: "compare", title: "Three kinds of substance", h: ["Compound", "Mixture"],
      rows: [["Element", "One type of atom only", "e.g. iron, oxygen"], ["Made of", "Elements chemically bonded", "Substances not bonded"], ["Proportions", "Fixed", "Can vary"], ["Separate by", "Chemical reaction", "Physical methods"]],
      say: ["An element contains only one type of atom, like iron or oxygen.",
            "A compound contains two or more elements chemically bonded together. A mixture has two or more substances that are not bonded.",
            "In a compound the proportions are fixed. Water is always H two O. In a mixture, they can vary.",
            "That's why mixtures can be separated by physical methods, but compounds need a chemical reaction."] },
    { type: "graph", title: "Pure or impure?", x: "Time cooling", y: "Temperature",
      lines: [{ pts: [[0, 0.9], [0.25, 0.5], [0.65, 0.5], [0.95, 0.15]], straight: true, s: 0, label: "pure" }, { pts: [[0, 0.85], [0.3, 0.52], [0.6, 0.36], [0.95, 0.1]], s: 1, dash: true, label: "" }],
      marks: [{ x: 0.45, y: 0.5, t: "sharp melting point", s: 0 }, { x: 0.6, y: 0.3, t: "impure: melts over a range", s: 1, dot: false }],
      say: ["How do you tell if something is pure? A pure substance melts and boils at a fixed, sharp temperature. Its cooling curve has a flat section.",
            "An impure substance melts over a range of temperatures, usually lower than the pure melting point."] },
    { type: "points", title: "Separation techniques", items: ["<b>Filtration</b>: insoluble solid from a liquid", "<b>Crystallisation</b>: soluble solid from a solution", "<b>Simple distillation</b>: solvent from a solution", "<b>Fractional distillation</b>: liquids with different boiling points", "<b>Chromatography</b>: different dissolved substances, e.g. dyes"],
      say: ["Filtration separates an insoluble solid, like sand, from a liquid.",
            "Crystallisation gets a soluble solid back out of a solution. Heat to evaporate some water, then leave it to cool and form crystals.",
            "Simple distillation collects the solvent, like pure water from salt water. The water boils, then condenses in the condenser.",
            "Fractional distillation separates liquids with different boiling points, like ethanol and water, using a fractionating column.",
            "And chromatography separates different dissolved substances, like the dyes in ink."] },
    { type: "svg", title: "Paper chromatography",
      svg: "<rect x='380' y='20' width='340' height='460' rx='12' class='ink'/><line x1='380' y1='420' x2='720' y2='420' class='ink' stroke-dasharray='8 6'/><text class='txt s' x='740' y='428' data-step='0'>pencil start line</text><rect x='380' y='440' width='340' height='40' class='soft' data-step='0'/><text class='txt s' x='740' y='468' data-step='0'>solvent</text><circle cx='460' cy='420' r='12' class='fillA' data-step='0'/><circle cx='640' cy='420' r='12' style='fill:var(--bad)' data-step='0'/><circle cx='460' cy='250' r='13' class='fillA' data-step='1'/><circle cx='640' cy='180' r='13' style='fill:var(--bad)' data-step='1'/><circle cx='640' cy='320' r='13' class='fillA' data-step='1'/><line x1='380' y1='90' x2='720' y2='90' class='stroke' stroke-dasharray='8 6' data-step='1'/><text class='txt s' x='740' y='98' data-step='1'>solvent front</text><text class='txt b' x='740' y='215' data-step='2'>Rf = distance moved by spot</text><text class='txt b' x='740' y='252' data-step='2'>÷ distance moved by solvent</text>",
      say: ["Draw a start line in pencil, because pencil won't dissolve. Put spots of each ink on it and stand the paper in solvent, below the line.",
            "The solvent soaks up the paper. Substances that are more soluble travel further. If a sample makes more than one spot, it's a mixture.",
            "To compare substances, work out the R f value: distance moved by the spot divided by distance moved by the solvent. Matching R f values suggest the same substance."] },
    { type: "quiz", q: "Which technique would you use to get pure water from sea water?", o: ["Filtration", "Simple distillation", "Chromatography", "Crystallisation"], a: 1,
      why: "The water boils off and is condensed; the salt stays behind.",
      say: ["Quick check. How would you get pure water from sea water?"] }
  ]
});

CHEM.video("1c", {
  scenes: [
    { type: "title", title: "Atomic structure", sub: "Protons, neutrons, electrons, isotopes and relative atomic mass.", mark: "p n e",
      say: ["Atoms are made of three smaller particles. Once you know their charges and masses, isotopes and relative atomic mass make sense."] },
    { type: "compare", title: "Subatomic particles", h: ["Relative mass", "Relative charge"],
      rows: [["Proton", "1", "+1"], ["Neutron", "1", "0"], ["Electron", "1/1836 (tiny)", "−1"]],
      say: ["Protons have a relative mass of one and a charge of plus one. They're in the nucleus.",
            "Neutrons also have a mass of one but no charge. They're in the nucleus too.",
            "Electrons are tiny, about one eighteen hundredth of the mass, with a charge of minus one. They orbit the nucleus in shells. In an atom, the number of electrons equals the number of protons, so the atom has no overall charge."] },
    { type: "atom", title: "Sodium: Z = 11, A = 23", symbol: "Na", shells: [2, 8, 1], config: "2.8.1",
      say: ["Take sodium. Its atomic number is eleven, so it has eleven protons, and eleven electrons. Its mass number is twenty three, so it has twenty three minus eleven, twelve neutrons.",
            "The first shell holds up to two electrons.",
            "The second shell holds up to eight.",
            "The last electron goes in the third shell. So sodium's electronic configuration is two, eight, one."] },
    { type: "points", title: "Isotopes", items: ["Same number of <b>protons</b> (same element)", "Different numbers of <b>neutrons</b>", "e.g. chlorine-35 and chlorine-37", "Same chemical properties: same electrons"],
      say: ["Isotopes are atoms of the same element, so they have the same number of protons,",
            "but different numbers of neutrons, so different mass numbers.",
            "Chlorine, for example, exists as chlorine thirty five and chlorine thirty seven.",
            "They react in the same way, because they have the same number of electrons."] },
    { type: "calc", title: "Relative atomic mass", q: "Chlorine is 75% chlorine-35 and 25% chlorine-37. Find Ar.",
      lines: ["Ar = (35 × 75 + 37 × 25) ÷ 100", "= (2625 + 925) ÷ 100", "Ar = 35.5"],
      say: ["Relative atomic mass, A r, is the average mass of an element's atoms, taking the isotopes into account. Multiply each mass by its abundance, add them up, and divide by a hundred.",
            "That's two thousand six hundred and twenty five plus nine hundred and twenty five, all over one hundred.",
            "So A r for chlorine is thirty five point five. It's closer to thirty five because that isotope is more common."] },
    { type: "quiz", q: "How many neutrons are in an atom of potassium-39 (Z = 19)?", o: ["19", "20", "39", "58"], a: 1,
      why: "39 − 19 = 20.", say: ["Your turn. How many neutrons are there in potassium thirty nine? Its atomic number is nineteen."] }
  ]
});

CHEM.video("1d", {
  scenes: [
    { type: "title", title: "The Periodic Table", sub: "How it's arranged, and why groups behave alike.", mark: "Ne",
      say: ["The Periodic Table isn't just a list. Its layout tells you how many electrons an element has in its outer shell, and so how it reacts."] },
    { type: "points", title: "How it's arranged", items: ["Ordered by <b>atomic number</b>", "<b>Groups</b> = columns: same number of outer electrons", "<b>Periods</b> = rows: same number of shells", "Metals on the left, non-metals on the right"],
      say: ["Elements are arranged in order of increasing atomic number, the number of protons.",
            "The columns are groups. Elements in the same group have the same number of electrons in their outer shell, so they have similar chemical properties.",
            "The rows are periods. Elements in the same period have the same number of occupied shells.",
            "Metals are on the left and in the middle. Non-metals are on the right."] },
    { type: "atom", title: "Group number = outer electrons", symbol: "Cl", shells: [2, 8, 7], config: "2.8.7 → Group 7, Period 3",
      say: ["Here's chlorine, with seventeen electrons.", "Two in the first shell,", "eight in the second,", "and seven in the outer shell. Seven outer electrons means Group seven. Three shells means Period three."] },
    { type: "compare", title: "Metals vs non-metals", h: ["Metals", "Non-metals"],
      rows: [["Oxides", "Basic", "Acidic"], ["Conduct electricity?", "Yes", "Mostly no"], ["Form ions by", "Losing electrons", "Gaining electrons"]],
      say: ["You can classify an element as a metal or non-metal from its oxide. Metal oxides are basic. Non-metal oxides are acidic.",
            "Metals conduct electricity. Most non-metals don't, though graphite is an exception.",
            "Metals form positive ions by losing electrons. Non-metals form negative ions by gaining them."] },
    { type: "big", text: "Group 0 = full outer shell", sub: "That's why the noble gases are so unreactive",
      say: ["One more. Group zero, the noble gases, have a full outer shell.", "They don't need to gain, lose or share electrons, so they're very unreactive."] },
    { type: "quiz", q: "An element has the electronic configuration 2.8.2. Which group is it in?", o: ["Group 2", "Group 3", "Group 8", "Group 12"], a: 0,
      why: "Two outer electrons, so Group 2. It's magnesium.", say: ["Which group is an element with the configuration two, eight, two in?"] }
  ]
});

CHEM.video("1e", {
  scenes: [
    { type: "title", title: "Formulae, equations and calculations", sub: "Balancing, moles and reacting masses, step by step.", mark: "mol",
      say: ["This is the maths of chemistry. We'll balance an equation, then use moles to work out reacting masses."] },
    { type: "equation", title: "Balancing an equation", rows: [["H₂", "+", "O₂", "→", "H₂O"], [{ t: "2H₂", s: 1 }, { t: "+", s: 1 }, { t: "O₂", s: 1 }, { t: "→", s: 1 }, { t: "2H₂O", k: 1, s: 1 }]],
      note: "Change the big numbers in front, never the small ones", noteStep: 2,
      say: ["Hydrogen plus oxygen gives water. But count the atoms: there are two oxygens on the left and only one on the right.",
            "Put a two in front of the water to fix oxygen. Now there are four hydrogens on the right, so put a two in front of the hydrogen. Balanced.",
            "Only ever change the big numbers in front of formulas. Changing the small numbers would change the substance."] },
    { type: "equation", title: "The mole", rows: [[{ t: "moles", k: 1 }, "=", { t: "mass (g)", s: 1 }, "÷", { t: "Mr", s: 1 }]],
      note: "1 mole contains 6.0 × 10²³ particles (the Avogadro constant)", noteStep: 2,
      say: ["A mole is chemistry's counting unit.",
            "Number of moles equals mass in grams divided by the relative formula mass, M r.",
            "One mole of anything contains six times ten to the twenty three particles. That number is the Avogadro constant."] },
    { type: "calc", title: "Reacting masses", q: "What mass of CO₂ forms when 12 g of carbon burns? C + O₂ → CO₂",
      lines: ["moles of C = 12 ÷ 12 = 1.0 mol", "ratio C : CO₂ = 1 : 1 → 1.0 mol CO₂", "mass = 1.0 × 44 = 44 g"],
      say: ["Here's the method for reacting masses. Step one: find moles of what you know. Twelve grams of carbon divided by twelve is one mole.",
            "Step two: use the equation's ratio. One carbon gives one carbon dioxide, so one mole of carbon dioxide.",
            "Step three: convert back to mass. M r of carbon dioxide is forty four, so the answer is forty four grams."] },
    { type: "points", title: "Other calculations to know", items: ["<b>Concentration</b> (mol/dm³) = moles ÷ volume (dm³)", "<b>% yield</b> = actual ÷ theoretical × 100", "<b>Empirical formula</b>: divide by Ar, then find the simplest ratio", "<b>Gas volume</b>: 1 mol = 24 dm³ at RTP"],
      say: ["Concentration in moles per decimetre cubed equals moles divided by volume in decimetres cubed.",
            "Percentage yield is the actual mass you got divided by the theoretical mass, times one hundred.",
            "For an empirical formula, divide each element's mass by its A r, then find the simplest whole number ratio.",
            "And for gases, one mole of any gas takes up twenty four decimetres cubed at room temperature and pressure."] },
    { type: "quiz", q: "How many moles are in 8.0 g of oxygen gas, O₂ (Ar O = 16)?", o: ["0.25 mol", "0.5 mol", "2 mol", "128 mol"], a: 0,
      why: "Mr of O₂ is 32, and 8 ÷ 32 = 0.25.", say: ["Try this. How many moles are there in eight grams of oxygen gas?"] }
  ]
});

CHEM.video("1f", {
  scenes: [
    { type: "title", title: "Ionic bonding", sub: "Electron transfer, ions, and giant ionic lattices.", mark: "Na⁺Cl⁻",
      say: ["Ionic bonding happens between metals and non-metals. Electrons move from one atom to the other."] },
    { type: "svg", title: "Sodium + chlorine",
      svg: "<g data-step='0'><circle cx='250' cy='240' r='70' class='ink' stroke-dasharray='6 8'/><circle cx='250' cy='240' r='36' class='hlf' stroke='var(--ink)' stroke-width='3'/><text class='txt b' text-anchor='middle' x='250' y='249' style='fill:#1a1a1a'>Na</text><circle cx='320' cy='240' r='11' class='fillA'/><text class='txt s' text-anchor='middle' x='250' y='360'>2.8.1</text></g><g data-step='0'><circle cx='800' cy='240' r='70' class='ink' stroke-dasharray='6 8'/><circle cx='800' cy='240' r='36' class='hlf' stroke='var(--ink)' stroke-width='3'/><text class='txt b' text-anchor='middle' x='800' y='249' style='fill:#1a1a1a'>Cl</text><circle cx='730' cy='240' r='11' style='fill:none;stroke:var(--accent);stroke-width:3' data-step='1'/><text class='txt s' text-anchor='middle' x='800' y='360'>2.8.7</text></g><path d='M335 215 Q525 120 715 215' class='stroke draw' pathLength='1' marker-end='url(#vxb)' data-step='1'/><text class='txt b' text-anchor='middle' x='525' y='140' data-step='1'>1 electron moves</text><text class='txt b' text-anchor='middle' x='250' y='420' style='font-size:34px' data-step='2'>Na⁺ (2.8)</text><text class='txt b' text-anchor='middle' x='800' y='420' style='font-size:34px' data-step='2'>Cl⁻ (2.8.8)</text>",
      say: ["Sodium has one outer electron. Chlorine has seven.",
            "Sodium transfers its outer electron to chlorine.",
            "Sodium becomes a positive ion, N a plus, and chlorine becomes a negative chloride ion. Both now have full outer shells, like a noble gas."] },
    { type: "big", text: "Ionic bond", sub: "Strong electrostatic attraction between oppositely charged ions",
      say: ["The ionic bond is the strong electrostatic attraction between these oppositely charged ions.", "Learn that definition word for word."] },
    { type: "points", title: "Writing formulae", items: ["Charges must balance to zero", "Mg²⁺ + Cl⁻ → <b>MgCl₂</b>", "Al³⁺ + O²⁻ → <b>Al₂O₃</b>", "Ca²⁺ + OH⁻ → <b>Ca(OH)₂</b>"],
      say: ["When you write an ionic formula, the charges must add up to zero.",
            "Magnesium is two plus and chloride is one minus, so you need two chlorides. M g C l two.",
            "Aluminium is three plus and oxide is two minus. Two aluminiums and three oxides make six plus and six minus. A l two O three.",
            "Calcium hydroxide needs two hydroxides, and you put brackets round the O H. C a O H in brackets two."] },
    { type: "points", title: "Properties of ionic compounds", items: ["<b>High melting points</b>: lots of energy to overcome strong forces in the giant lattice", "<b>Don't conduct as solids</b>: ions are fixed in place", "<b>Conduct when molten or dissolved</b>: ions are free to move"],
      say: ["Ionic compounds form giant lattices. They have high melting points, because lots of energy is needed to overcome the strong electrostatic forces between ions.",
            "They don't conduct electricity when solid, because the ions are held in fixed positions.",
            "But when melted or dissolved in water, the ions are free to move and carry charge, so they conduct."] },
    { type: "quiz", q: "Why does molten sodium chloride conduct electricity?", o: ["Its electrons are delocalised", "Its ions are free to move", "It contains molecules", "It's a metal"], a: 1,
      why: "It's the ions, not electrons, that carry the charge.", say: ["Why does molten sodium chloride conduct electricity?"] }
  ]
});

CHEM.video("1g", {
  scenes: [
    { type: "title", title: "Covalent bonding", sub: "Shared electrons, simple molecules and giant structures.", mark: "C–C",
      say: ["Covalent bonds form between non-metal atoms. Instead of transferring electrons, they share them."] },
    { type: "big", text: "Covalent bond", sub: "A shared pair of electrons, attracted to the nuclei of both atoms",
      say: ["A covalent bond is a shared pair of electrons.", "The bond holds because both nuclei are attracted to that shared pair."] },
    { type: "points", title: "Simple molecules", items: ["H₂, Cl₂, H₂O, CH₄, NH₃, CO₂, O₂, N₂", "Strong covalent bonds <b>inside</b> each molecule", "Weak <b>intermolecular forces</b> between molecules", "Low melting and boiling points; don't conduct"],
      say: ["Many covalent substances are simple molecules: hydrogen, chlorine, water, methane, ammonia, carbon dioxide, oxygen and nitrogen.",
            "Inside each molecule, the covalent bonds are strong.",
            "But between the molecules there are only weak intermolecular forces.",
            "When you melt or boil a simple molecular substance, you only overcome those weak forces, so melting and boiling points are low. And with no ions or free electrons, they don't conduct."] },
    { type: "big", text: "Bigger molecules → higher boiling points", sub: "Intermolecular forces get stronger as relative molecular mass increases",
      say: ["Here's a trend that gets asked a lot. As molecules get bigger,", "the intermolecular forces get stronger, so more energy is needed, and the boiling point rises."] },
    { type: "compare", title: "Giant covalent structures", h: ["Diamond", "Graphite"],
      rows: [["Bonds per carbon", "4", "3"], ["Structure", "Rigid 3D lattice", "Layers"], ["Conducts?", "No", "Yes: delocalised electrons"], ["Use", "Cutting tools", "Lubricant, electrodes"]],
      say: ["Diamond and graphite are both giant covalent structures made of carbon. In diamond, each carbon bonds to four others. In graphite, to three.",
            "Diamond is a rigid three dimensional lattice, so it's very hard. Graphite is made of layers with weak forces between them, so the layers slide.",
            "Graphite has one delocalised electron per carbon that can move, so it conducts. Diamond doesn't.",
            "So diamond is used in cutting tools, and graphite as a lubricant and in electrodes."] },
    { type: "quiz", q: "Why does methane have a low boiling point?", o: ["Its covalent bonds are weak", "Its intermolecular forces are weak", "It's ionic", "It has delocalised electrons"], a: 1,
      why: "Boiling doesn't break the covalent bonds, just the forces between molecules.", say: ["Why does methane have a low boiling point?"] }
  ]
});

CHEM.video("1h", {
  scenes: [
    { type: "title", title: "Metallic bonding", sub: "Positive ions in a sea of electrons.", mark: "e⁻",
      say: ["Metals have their own kind of bonding, and it explains why they conduct and can be bent into shape."] },
    { type: "svg", title: "The structure of a metal",
      svg: "<g data-step='0'>" + [0,1,2,3,4,5].map(function(i){return [0,1,2].map(function(j){var x=230+i*130,y=110+j*130;return "<circle cx='"+x+"' cy='"+y+"' r='40' class='soft'/><text class='txt b' text-anchor='middle' x='"+x+"' y='"+(y+9)+"'>+</text>";}).join("");}).join("") + "</g><g data-step='1'>" + [[295,110],[555,110],[815,110],[425,175],[685,175],[295,240],[555,240],[815,240],[425,305],[685,305],[295,370],[685,370]].map(function(p){return "<circle cx='"+p[0]+"' cy='"+p[1]+"' r='9' style='fill:var(--bad)'/>";}).join("") + "</g><text class='txt b' x='230' y='480' data-step='2'>Bond: attraction between + ions and delocalised electrons</text>",
      say: ["A metal is a giant lattice of positive metal ions, arranged in layers.",
            "The outer electrons leave their atoms and become delocalised. They're free to move through the whole structure, like a sea of electrons.",
            "Metallic bonding is the strong electrostatic attraction between the positive ions and the delocalised electrons."] },
    { type: "points", title: "Explaining metal properties", items: ["<b>Conduct electricity</b>: delocalised electrons move and carry charge", "<b>Malleable</b>: layers of ions slide over each other", "<b>High melting points</b>: strong attraction needs lots of energy to overcome"],
      say: ["Metals conduct electricity because the delocalised electrons can move through the structure and carry charge.",
            "They're malleable, meaning they can be hammered into shape, because the layers of ions can slide over each other without the bonding breaking.",
            "And most have high melting points, because the strong attraction needs a lot of energy to overcome."] },
    { type: "points", title: "Alloys", items: ["A mixture of a metal with other elements", "Different-sized atoms <b>distort the layers</b>", "Layers can't slide as easily → <b>harder</b>", "e.g. steel, brass, aluminium alloys"],
      say: ["An alloy is a mixture of a metal with other elements, usually other metals.",
            "The added atoms are a different size, so they distort the regular layers.",
            "Now the layers can't slide over each other as easily, which makes alloys harder and stronger than pure metals.",
            "Steel, brass and aluminium alloys are everyday examples."] },
    { type: "quiz", q: "Why are metals malleable?", o: ["Their electrons are fixed", "Layers of ions can slide over each other", "They have weak bonds", "They contain molecules"], a: 1,
      why: "The delocalised electrons keep holding the layers together as they slide.", say: ["Why are metals malleable?"] }
  ]
});

CHEM.video("1i", {
  scenes: [
    { type: "title", title: "Electrolysis", sub: "Using electricity to break down ionic compounds.", mark: "+ −",
      say: ["Electrolysis uses electricity to split ionic compounds into elements. It's how we make aluminium, chlorine and hydrogen."] },
    { type: "svg", title: "How it works",
      svg: "<rect x='300' y='160' width='500' height='300' rx='14' class='ink'/><rect x='303' y='230' width='494' height='227' class='soft' style='opacity:.5'/><rect x='390' y='110' width='40' height='280' rx='6' style='fill:var(--ink)'/><rect x='670' y='110' width='40' height='280' rx='6' style='fill:var(--ink)'/><text class='txt b' text-anchor='middle' x='410' y='90'>− cathode</text><text class='txt b' text-anchor='middle' x='690' y='90'>+ anode</text><g data-step='1'><circle cx='560' cy='300' r='22' style='fill:var(--accent)'/><text class='txt b w' text-anchor='middle' x='560' y='309'>+</text><path d='M535 300 L450 300' class='stroke draw' pathLength='1' marker-end='url(#vxb)' data-step='1'/></g><g data-step='2'><circle cx='540' cy='390' r='22' style='fill:var(--bad)'/><text class='txt b w' text-anchor='middle' x='540' y='399'>−</text><path d='M565 390 L650 390' class='stroke draw' pathLength='1' marker-end='url(#vxb)' data-step='2'/></g><text class='txt s' x='830' y='300' data-step='0'>electrolyte:</text><text class='txt s' x='830' y='330' data-step='0'>molten or dissolved</text>",
      say: ["You need an electrolyte: an ionic compound that's molten or dissolved in water, so its ions can move. Two electrodes are connected to a d c supply.",
            "Positive ions are attracted to the negative electrode, the cathode. There they gain electrons. That's reduction.",
            "Negative ions move to the positive electrode, the anode, and lose electrons. That's oxidation."] },
    { type: "equation", title: "Molten lead(II) bromide",
      rows: [[{ t: "Cathode:", k: 1 }, "Pb²⁺ + 2e⁻", "→", "Pb"], [{ t: "Anode:", k: 1, s: 1 }, { t: "2Br⁻", s: 1 }, { t: "→", s: 1 }, { t: "Br₂ + 2e⁻", s: 1 }]],
      note: "OIL RIG: Oxidation Is Loss, Reduction Is Gain (of electrons)", noteStep: 2,
      say: ["Molten lead bromide is the classic example. At the cathode, lead ions gain two electrons and become lead metal.",
            "At the anode, bromide ions lose electrons and form bromine.",
            "Remember OIL RIG. Oxidation is loss of electrons, reduction is gain."] },
    { type: "points", title: "Aqueous solutions: which ion wins?", items: ["<b>Cathode</b>: hydrogen forms, unless the metal is less reactive than hydrogen (e.g. copper)", "<b>Anode</b>: a halogen forms if halide ions are present", "Otherwise oxygen forms, from hydroxide ions", "e.g. NaCl(aq) → H₂ at cathode, Cl₂ at anode"],
      say: ["In a solution, water provides hydrogen ions and hydroxide ions too. At the cathode, hydrogen is produced, unless the metal is less reactive than hydrogen, like copper.",
            "At the anode, if halide ions are present, you get the halogen, like chlorine.",
            "If there's no halide, oxygen forms from the hydroxide ions.",
            "So concentrated sodium chloride solution gives hydrogen at the cathode and chlorine at the anode."] },
    { type: "points", title: "Gas tests", items: ["<b>Hydrogen</b>: lit splint → squeaky pop", "<b>Oxygen</b>: relights a glowing splint", "<b>Chlorine</b>: bleaches damp litmus paper"],
      say: ["To identify the gases: hydrogen burns with a squeaky pop with a lit splint.", "Oxygen relights a glowing splint.", "Chlorine bleaches damp litmus paper."] },
    { type: "quiz", q: "In electrolysis of CuSO₄(aq) with inert electrodes, what forms at the cathode?", o: ["Hydrogen", "Copper", "Oxygen", "Sulfur"], a: 1,
      why: "Copper is less reactive than hydrogen, so copper is deposited.", say: ["What forms at the cathode when copper sulfate solution is electrolysed?"] }
  ]
});
