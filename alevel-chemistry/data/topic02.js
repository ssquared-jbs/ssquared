/* A-level Chemistry² — Topic 2: Bonding and structure */

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Ionic bonding",
  summary: "Ionic bonds, ion sizes, polarisation and the properties of ionic lattices.",
  notes: `
<h3>Ionic bonding</h3>
<div class="box box-key"><span class="box-title">Definition</span>Ionic bonding is the <b>strong electrostatic attraction between oppositely charged ions</b> in a lattice.</div>
<ul>
<li>Evidence for ions: <b>electrolysis</b> of molten ionic compounds, and <b>migration of coloured ions</b> (e.g. blue Cu<sup>2+</sup> moves to the cathode and yellow CrO<sub>4</sub><sup>2−</sup> to the anode on wet filter paper).</li>
<li>Bond strength increases with <b>higher ionic charge</b> and <b>smaller ionic radius</b>: the charges are closer together. So MgO has a much higher melting point than NaCl.</li>
</ul>

<h3>Ionic radii</h3>
<ul>
<li>Positive ions are <b>smaller</b> than their atoms (an electron shell is lost, and fewer electrons are held by the same nuclear charge).</li>
<li>Negative ions are <b>larger</b> than their atoms (extra electrons increase repulsion).</li>
<li><b>Isoelectronic ions</b> (same number of electrons, e.g. N<sup>3−</sup>, O<sup>2−</sup>, F<sup>−</sup>, Na<sup>+</sup>, Mg<sup>2+</sup>, Al<sup>3+</sup>) get smaller as nuclear charge increases.</li>
<li>Ionic radius increases down a group (more shells).</li>
</ul>

<h3>Polarisation and covalent character</h3>
<p>A small, highly charged cation (high <b>charge density</b>, e.g. Al<sup>3+</sup>) can distort the electron cloud of a large anion (e.g. I<sup>−</sup>). This <b>polarisation</b> gives the bond some covalent character. Pure ionic and pure covalent are the two ends of a scale.</p>
<p>Evidence: lattice energies calculated from a perfect ionic model differ from experimental (Born–Haber) values when there is covalent character.</p>

<h3>Properties of ionic compounds</h3>
<ul>
<li><b>High melting points</b>: giant lattice with many strong electrostatic attractions.</li>
<li><b>Conduct when molten or dissolved</b>: ions free to move; not when solid.</li>
<li>Often <b>soluble in water</b>: polar water molecules surround and stabilise the ions (hydration).</li>
<li><b>Brittle</b>: a shift brings like charges together, which repel.</li>
</ul>
`,
  quiz: [
    { q: "Which has the highest melting point?", o: ["MgO", "NaCl", "KCl", "NaBr"], a: 0, e: "Higher charges (2+, 2−) and small ions." },
    { q: "Which ion is smallest?", o: ["Al³⁺", "Mg²⁺", "Na⁺", "F⁻"], a: 0, e: "Isoelectronic: highest nuclear charge pulls electrons closest." },
    { q: "Why is Cl⁻ larger than a Cl atom?", o: ["Extra electron increases repulsion", "It has more protons", "It has an extra shell", "It's more polarised"], a: 0, e: "" },
    { q: "Which cation has the greatest polarising power?", o: ["Al³⁺", "Na⁺", "K⁺", "Cs⁺"], a: 0, e: "Small and highly charged." },
    { q: "Which anion is most easily polarised?", o: ["I⁻", "F⁻", "Cl⁻", "O²⁻"], a: 0, e: "Largest electron cloud." },
    { q: "What is evidence for the existence of ions?", o: ["Migration of coloured ions in electrolysis", "High boiling point", "Insolubility", "Malleability"], a: 0, e: "" },
    { q: "Why are ionic compounds brittle?", o: ["Shifting layers brings like charges together, which repel", "Weak bonds", "Delocalised electrons", "Hydrogen bonding"], a: 0, e: "" },
    { q: "Ions with the same electron configuration are called…", o: ["Isoelectronic", "Isotopic", "Isomeric", "Isotonic"], a: 0, e: "" }
  ],
  flashcards: [
    ["Ionic bonding", "Strong electrostatic attraction between oppositely charged ions"],
    ["Evidence for ions", "Electrolysis of molten compounds; migration of coloured ions"],
    ["Factors increasing ionic bond strength", "Higher ionic charge, smaller ionic radius"],
    ["Cation vs atom size", "Cation smaller: loses a shell, same nuclear charge holds fewer electrons"],
    ["Anion vs atom size", "Anion larger: extra electrons repel"],
    ["Isoelectronic series trend", "Radius decreases as nuclear charge increases (N³⁻ > O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺)"],
    ["Polarisation", "Small, highly charged cation distorts a large anion's electron cloud → covalent character"],
    ["Why ionic compounds dissolve in water", "Polar water molecules hydrate the ions"],
    ["Why ionic solids don't conduct", "Ions fixed in the lattice"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Covalent bonds and shapes of molecules",
  summary: "Covalent and dative bonds, σ and π bonds, and electron-pair repulsion theory.",
  notes: `
<h3>Covalent bonds</h3>
<div class="box box-key"><span class="box-title">Definition</span>A covalent bond is the <b>strong electrostatic attraction between two nuclei and a shared pair of electrons</b> between them.</div>
<ul>
<li><b>Bond length</b>: distance between the nuclei. <b>Bond enthalpy</b>: energy to break a mole of bonds. Double bonds are shorter and stronger than single bonds.</li>
<li><b>σ (sigma) bond</b>: head-on overlap of orbitals, electron density between the nuclei. Every single bond is σ.</li>
<li><b>π (pi) bond</b>: sideways overlap of p orbitals, electron density above and below the bond axis. A double bond is one σ + one π; a triple bond is one σ + two π. π bonds are weaker and more reactive.</li>
<li><b>Dative (coordinate) bond</b>: both shared electrons come from the same atom, e.g. NH<sub>4</sub><sup>+</sup> (N lone pair to H<sup>+</sup>), Al<sub>2</sub>Cl<sub>6</sub>, and CO. Shown with an arrow →.</li>
</ul>

<h3>Shapes of molecules: electron-pair repulsion</h3>
<p>Electron pairs (bonding and lone) repel each other and arrange themselves as far apart as possible. <b>Lone pairs repel more strongly</b> than bonding pairs, so each lone pair reduces the bond angle by about 2.5°.</p>
<table>
<tr><th>Bonding pairs</th><th>Lone pairs</th><th>Shape</th><th>Angle</th><th>Example</th></tr>
<tr><td>2</td><td>0</td><td>Linear</td><td>180°</td><td>CO<sub>2</sub>, BeCl<sub>2</sub></td></tr>
<tr><td>3</td><td>0</td><td>Trigonal planar</td><td>120°</td><td>BF<sub>3</sub></td></tr>
<tr><td>4</td><td>0</td><td>Tetrahedral</td><td>109.5°</td><td>CH<sub>4</sub>, NH<sub>4</sub><sup>+</sup></td></tr>
<tr><td>3</td><td>1</td><td>Pyramidal</td><td>107°</td><td>NH<sub>3</sub></td></tr>
<tr><td>2</td><td>2</td><td>Bent (non-linear)</td><td>104.5°</td><td>H<sub>2</sub>O</td></tr>
<tr><td>5</td><td>0</td><td>Trigonal bipyramidal</td><td>90° and 120°</td><td>PCl<sub>5</sub></td></tr>
<tr><td>6</td><td>0</td><td>Octahedral</td><td>90°</td><td>SF<sub>6</sub></td></tr>
<tr><td>4</td><td>2</td><td>Square planar</td><td>90°</td><td>XeF<sub>4</sub></td></tr>
</table>
<div class="box box-key"><span class="box-title">Method</span>1. Count the central atom's outer electrons. 2. Add one for each atom bonded (single bonds), add/subtract for charge. 3. Divide by 2 to get electron pairs. 4. Pairs − bonds = lone pairs. Double bonds count as one "region".</div>
<p>Some molecules have an <b>expanded octet</b> (PCl<sub>5</sub>, SF<sub>6</sub>), and some have fewer than eight electrons around the centre (BF<sub>3</sub>).</p>
`,
  quiz: [
    { q: "What is the shape of NH₃?", o: ["Pyramidal, 107°", "Trigonal planar, 120°", "Tetrahedral, 109.5°", "Bent, 104.5°"], a: 0, e: "3 bonding pairs + 1 lone pair." },
    { q: "What is the bond angle in H₂O?", o: ["104.5°", "107°", "109.5°", "120°"], a: 0, e: "Two lone pairs." },
    { q: "Shape of SF₆?", o: ["Octahedral", "Trigonal bipyramidal", "Square planar", "Tetrahedral"], a: 0, e: "" },
    { q: "Why are lone pairs said to repel more than bonding pairs?", o: ["They are closer to the central atom", "They have more electrons", "They are π bonds", "They are charged"], a: 0, e: "" },
    { q: "A C=C double bond is made of…", o: ["One σ and one π bond", "Two σ bonds", "Two π bonds", "One dative bond"], a: 0, e: "" },
    { q: "Which species contains a dative bond?", o: ["NH₄⁺", "CH₄", "H₂O", "Cl₂"], a: 0, e: "N's lone pair bonds to H⁺." },
    { q: "Shape of XeF₄?", o: ["Square planar", "Tetrahedral", "Octahedral", "See-saw"], a: 0, e: "4 bonding + 2 lone pairs." },
    { q: "Shape and angle of BF₃?", o: ["Trigonal planar, 120°", "Pyramidal, 107°", "Tetrahedral, 109.5°", "Linear, 180°"], a: 0, e: "" },
    { q: "Why is a π bond weaker than a σ bond?", o: ["Sideways overlap is less effective", "It has more electrons", "It's longer", "It's ionic"], a: 0, e: "" }
  ],
  flashcards: [
    ["Covalent bond", "Electrostatic attraction between two nuclei and a shared pair of electrons"],
    ["Dative covalent bond", "Both shared electrons come from one atom, e.g. NH₄⁺"],
    ["σ bond", "Head-on overlap; electron density between nuclei"],
    ["π bond", "Sideways overlap of p orbitals; density above and below the axis"],
    ["Electron-pair repulsion", "Electron pairs repel to be as far apart as possible; lone pairs repel more"],
    ["Tetrahedral", "4 bp, 0 lp, 109.5° (CH₄)"],
    ["Pyramidal", "3 bp, 1 lp, 107° (NH₃)"],
    ["Bent", "2 bp, 2 lp, 104.5° (H₂O)"],
    ["Trigonal bipyramidal", "5 bp, 90° and 120° (PCl₅)"],
    ["Octahedral", "6 bp, 90° (SF₆)"],
    ["Square planar", "4 bp, 2 lp, 90° (XeF₄)"],
    ["Effect of each lone pair", "Reduces bond angle by about 2.5°"]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "Electronegativity, polarity and intermolecular forces",
  summary: "Polar bonds and molecules, London forces, permanent dipoles and hydrogen bonding.",
  notes: `
<h3>Electronegativity</h3>
<p><b>Electronegativity</b> is the ability of an atom to attract the bonding electrons in a covalent bond. It increases across a period and up a group. Fluorine is the most electronegative element (Pauling value 4.0).</p>
<ul>
<li>Different electronegativities → a <b>polar bond</b> with partial charges, δ+ and δ−.</li>
<li>A large difference (roughly above 1.8) gives mainly ionic bonding.</li>
<li>A molecule is <b>polar</b> only if it has polar bonds <b>and</b> its shape doesn't cancel the dipoles. CO<sub>2</sub> and CCl<sub>4</sub> have polar bonds but are non-polar because they're symmetrical.</li>
</ul>

<h3>Intermolecular forces (weakest to strongest)</h3>
<table>
<tr><th>Force</th><th>Cause</th><th>Found in</th></tr>
<tr><td><b>London forces</b> (instantaneous dipole–induced dipole)</td><td>Electrons move, making an instantaneous dipole that induces a dipole in a neighbour</td><td>All molecules; stronger with more electrons and more surface contact</td></tr>
<tr><td><b>Permanent dipole–dipole</b></td><td>δ+ end of one polar molecule attracts δ− of another</td><td>Polar molecules, e.g. HCl</td></tr>
<tr><td><b>Hydrogen bonds</b></td><td>H bonded to N, O or F is strongly δ+ and attracts a lone pair on N, O or F of another molecule</td><td>H<sub>2</sub>O, NH<sub>3</sub>, HF, alcohols</td></tr>
</table>
<ul>
<li><b>Branched</b> alkanes have lower boiling points than straight chains: less surface contact, weaker London forces.</li>
<li>Boiling points of alkanes rise with chain length (more electrons).</li>
<li>H<sub>2</sub>O, NH<sub>3</sub> and HF have anomalously high boiling points compared with other hydrides in their groups, because of hydrogen bonding.</li>
<li><b>Ice is less dense than water</b>: hydrogen bonds hold the molecules in an open lattice.</li>
<li>Hydrogen bond angle: the H bonds in a straight line, about 180° (O–H···O).</li>
</ul>

<h3>Solubility</h3>
<ul>
<li>Substances dissolve when the new attractions with the solvent are similar in strength to those broken. "Like dissolves like".</li>
<li>Alcohols dissolve in water because they form hydrogen bonds with it. Solubility falls as the hydrocarbon chain gets longer.</li>
<li>Halogenoalkanes don't dissolve well in water: they can't hydrogen bond strongly enough to break water's hydrogen bonds.</li>
</ul>
`,
  quiz: [
    { q: "Which molecule is non-polar despite having polar bonds?", o: ["CO₂", "H₂O", "NH₃", "HCl"], a: 0, e: "Linear: the dipoles cancel." },
    { q: "Which intermolecular force exists between all molecules?", o: ["London forces", "Hydrogen bonds", "Permanent dipoles", "Ionic bonds"], a: 0, e: "" },
    { q: "Why does pentane boil higher than 2,2-dimethylpropane?", o: ["More surface contact, stronger London forces", "Pentane has hydrogen bonds", "Pentane is polar", "Pentane has more electrons"], a: 0, e: "They're isomers: same electrons, different shape." },
    { q: "Hydrogen bonding needs H bonded to…", o: ["N, O or F", "C or Cl", "Any non-metal", "S or P"], a: 0, e: "" },
    { q: "Why is ice less dense than liquid water?", o: ["Hydrogen bonds hold molecules in an open lattice", "Ice has fewer molecules", "London forces are stronger", "Ice is ionic"], a: 0, e: "" },
    { q: "Which has the highest boiling point?", o: ["H₂O", "H₂S", "H₂Se", "H₂Te"], a: 0, e: "Hydrogen bonding." },
    { q: "Electronegativity is…", o: ["The ability of an atom to attract bonding electrons in a covalent bond", "The energy to remove an electron", "The charge on an ion", "Energy released gaining an electron"], a: 0, e: "" },
    { q: "Why is CCl₄ non-polar?", o: ["Tetrahedral shape cancels the dipoles", "C–Cl bonds aren't polar", "It has lone pairs", "It's ionic"], a: 0, e: "" },
    { q: "Why does butan-1-ol dissolve less in water than ethanol?", o: ["Longer non-polar chain", "It can't hydrogen bond", "It's ionic", "It's more polar"], a: 0, e: "" }
  ],
  flashcards: [
    ["Electronegativity", "Ability of an atom to attract the bonding electrons in a covalent bond"],
    ["Electronegativity trends", "Increases across a period and up a group; F is highest"],
    ["Polar molecule conditions", "Polar bonds AND an asymmetric shape (dipoles don't cancel)"],
    ["London forces", "Instantaneous dipole–induced dipole; in all molecules; stronger with more electrons/contact"],
    ["Permanent dipole–dipole", "Attraction between δ+ and δ− of polar molecules"],
    ["Hydrogen bond", "H on N/O/F attracted to a lone pair on N/O/F of another molecule"],
    ["Why branching lowers boiling point", "Less surface contact → weaker London forces"],
    ["Anomalous H₂O, NH₃, HF boiling points", "Hydrogen bonding"],
    ["Ice density", "Less dense than water: open hydrogen-bonded lattice"],
    ["Alcohols in water", "Soluble via hydrogen bonding; less soluble as chain lengthens"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Metallic bonding and structures",
  summary: "Metallic bonding and comparing giant ionic, giant covalent, metallic and molecular structures.",
  notes: `
<h3>Metallic bonding</h3>
<div class="box box-key"><span class="box-title">Definition</span>Metallic bonding is the <b>strong electrostatic attraction between a lattice of positive metal ions and a sea of delocalised electrons</b>.</div>
<ul>
<li>Strength increases with <b>more delocalised electrons per ion</b>, <b>higher ionic charge</b> and <b>smaller ions</b>.</li>
<li><b>Conductivity</b>: delocalised electrons move through the lattice.</li>
<li><b>Malleable and ductile</b>: layers of ions slide, while the electrons keep holding them together.</li>
<li><b>High melting points</b> (mostly): strong attraction throughout the lattice.</li>
</ul>

<h3>Comparing structures</h3>
<table>
<tr><th></th><th>Giant ionic</th><th>Giant covalent</th><th>Metallic</th><th>Simple molecular</th></tr>
<tr><td>Example</td><td>NaCl</td><td>Diamond, graphite, SiO<sub>2</sub></td><td>Cu, Na</td><td>I<sub>2</sub>, ice</td></tr>
<tr><td>Melting point</td><td>High</td><td>Very high</td><td>Usually high</td><td>Low</td></tr>
<tr><td>Conducts?</td><td>Molten / aqueous only</td><td>No (except graphite, graphene)</td><td>Yes, solid and liquid</td><td>No</td></tr>
<tr><td>Solubility in water</td><td>Often soluble</td><td>Insoluble</td><td>Insoluble</td><td>Usually low (unless polar/H-bonding)</td></tr>
</table>

<h3>Carbon allotropes</h3>
<ul>
<li><b>Diamond</b>: each C bonded to 4 others, tetrahedral; very hard, high melting point, no conduction.</li>
<li><b>Graphite</b>: each C bonded to 3 others in hexagonal layers; one delocalised electron per C, so conducts along layers; weak London forces between layers, so it's soft and slippery.</li>
<li><b>Graphene</b>: a single layer of graphite; very strong, light, conducts.</li>
<li><b>Fullerenes</b> and <b>nanotubes</b>: C<sub>60</sub> is simple molecular; nanotubes conduct along their length.</li>
</ul>
<p>Iodine forms a simple molecular lattice: I<sub>2</sub> molecules held by London forces. It sublimes on gentle heating.</p>
`,
  quiz: [
    { q: "Why does magnesium have a higher melting point than sodium?", o: ["Mg²⁺ has more charge and more delocalised electrons per ion", "Mg is covalent", "Mg ions are bigger", "Mg has London forces"], a: 0, e: "" },
    { q: "Which structure conducts electricity as a solid?", o: ["Metallic", "Giant ionic", "Simple molecular", "Diamond"], a: 0, e: "" },
    { q: "Why is graphite soft?", o: ["Weak London forces between layers", "Weak covalent bonds", "It's ionic", "It has free ions"], a: 0, e: "" },
    { q: "In graphite, each carbon is bonded to…", o: ["3 others", "4 others", "2 others", "6 others"], a: 0, e: "" },
    { q: "Which substance is a giant covalent lattice?", o: ["SiO₂", "I₂", "NaCl", "CO₂"], a: 0, e: "" },
    { q: "A solid melts at 801 °C and conducts only when molten. Its structure is…", o: ["Giant ionic", "Metallic", "Giant covalent", "Simple molecular"], a: 0, e: "" },
    { q: "What holds I₂ molecules together in solid iodine?", o: ["London forces", "Covalent bonds", "Ionic bonds", "Hydrogen bonds"], a: 0, e: "" },
    { q: "Why are metals malleable?", o: ["Layers slide while delocalised electrons hold the lattice together", "Ions repel", "Bonds are weak", "They're molecular"], a: 0, e: "" }
  ],
  flashcards: [
    ["Metallic bonding", "Electrostatic attraction between positive metal ions and delocalised electrons"],
    ["Factors increasing metallic bond strength", "More delocalised electrons, higher charge, smaller ions"],
    ["Diamond", "Each C bonded to 4; tetrahedral; hard; non-conductor"],
    ["Graphite", "Layers; each C bonded to 3; delocalised electrons conduct; layers slide"],
    ["Graphene", "Single layer of graphite: strong, light, conducts"],
    ["Iodine structure", "Simple molecular lattice; I₂ molecules held by London forces"],
    ["Giant ionic properties", "High mp; conduct when molten/aqueous; often soluble; brittle"],
    ["Simple molecular properties", "Low mp; don't conduct"]
  ]
});

S2Data.detail("2a", { mistakes: ["Calling ionic bonding 'transfer of electrons'. Transfer forms the ions; the bond is the electrostatic attraction."], tips: ["Compare melting points with charge and ionic radius: e.g. MgO > NaCl because Mg<sup>2+</sup> and O<sup>2−</sup> have double the charge and are smaller."], fact: "Aluminium chloride is so polarised that, as a vapour, it exists as Al<sub>2</sub>Cl<sub>6</sub> molecules with dative bonds." });
S2Data.detail("2b", { mistakes: ["Forgetting to state both the shape name and the bond angle.", "Counting a double bond as two electron regions. It's one region for shape purposes."], tips: ["Draw the molecule with wedges and dashes for 3D shapes; examiners reward a clear diagram showing lone pairs."], fact: "SF<sub>6</sub> is so unreactive and dense that a balloon full of it sinks, and breathing it makes your voice very deep." });
S2Data.detail("2c", { mistakes: ["Drawing a hydrogen bond from H to H. It must go from δ+ H to a lone pair on N, O or F.", "Saying covalent bonds break when a simple molecular substance boils."], tips: ["For hydrogen bonding diagrams: show δ+ and δ−, the lone pair, and a dashed line at 180° from O–H."], fact: "Without hydrogen bonding, water would boil at around −80 °C and life as we know it couldn't exist." });
S2Data.detail("2d", { mistakes: ["Saying metals have 'free electrons and free ions'. The ions are fixed in a lattice; only the electrons are delocalised."], tips: ["When choosing a structure from data, check conductivity in solid and liquid states first: it narrows the options fast."], fact: "Graphene is about 200 times stronger than steel by weight, yet a sheet one atom thick." });
