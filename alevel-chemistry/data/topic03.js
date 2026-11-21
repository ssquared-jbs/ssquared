/* A-level Chemistry² — Topics 3, 4 and 5 */

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Oxidation numbers and redox equations",
  summary: "Assigning oxidation numbers, naming with Roman numerals, half-equations and disproportionation.",
  notes: R`
<h3>Oxidation and reduction</h3>
<ul>
<li><b>Oxidation</b>: loss of electrons, or an <b>increase</b> in oxidation number.</li>
<li><b>Reduction</b>: gain of electrons, or a <b>decrease</b> in oxidation number.</li>
<li>An <b>oxidising agent</b> accepts electrons (and is reduced). A <b>reducing agent</b> donates electrons (and is oxidised).</li>
</ul>

<h3>Rules for oxidation numbers</h3>
<ol>
<li>Uncombined elements: 0 (e.g. Cl<sub>2</sub>, Fe).</li>
<li>The oxidation numbers in a compound add up to 0; in an ion, to the ion's charge.</li>
<li>Group 1 = +1, Group 2 = +2, Al = +3, F = −1.</li>
<li>H = +1, except in metal hydrides (e.g. NaH), where it's −1.</li>
<li>O = −2, except in peroxides (H<sub>2</sub>O<sub>2</sub>, −1) and with F (OF<sub>2</sub>, +2).</li>
<li>Cl = −1, except with O or F.</li>
</ol>
<div class="box box-key"><span class="box-title">Worked example</span>Mn in MnO<sub>4</sub><sup>−</sup>: x + 4(−2) = −1, so x = <b>+7</b>. Name: manganate(VII).</div>
<p>Roman numerals show the oxidation number in names: iron(III) chloride, chlorate(I) (ClO<sup>−</sup>), chlorate(V) (ClO<sub>3</sub><sup>−</sup>), sulfate(VI).</p>

<h3>Half-equations</h3>
<ol>
<li>Balance the atoms that change oxidation number.</li>
<li>Balance O by adding H<sub>2</sub>O.</li>
<li>Balance H by adding H<sup>+</sup>.</li>
<li>Balance charge by adding electrons.</li>
</ol>
<div class="box box-key"><span class="box-title">Example</span>MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O</div>
<p>To combine two half-equations: multiply so the electrons are equal, add them, then cancel the electrons (and anything on both sides).</p>
<p>e.g. MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5Fe<sup>2+</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O + 5Fe<sup>3+</sup></p>

<h3>Disproportionation</h3>
<p>The same element is <b>both oxidised and reduced</b> in one reaction.</p>
<p>Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O (cold, dilute): Cl goes from 0 to −1 and to +1.</p>
`,
  quiz: [
    { q: "What is the oxidation number of S in H₂SO₄?", o: ["+6", "+4", "−2", "+2"], a: 0, e: "2(+1) + x + 4(−2) = 0" },
    { q: "Oxidation number of Cr in Cr₂O₇²⁻?", o: ["+6", "+7", "+3", "+12"], a: 0, e: "2x − 14 = −2" },
    { q: "Oxidation number of O in H₂O₂?", o: ["−1", "−2", "0", "+1"], a: 0, e: "Peroxide." },
    { q: "Oxidation number of H in NaH?", o: ["−1", "+1", "0", "+2"], a: 0, e: "Metal hydride." },
    { q: "What does an oxidising agent do?", o: ["Accepts electrons and is reduced", "Donates electrons", "Is oxidised", "Increases its oxidation number"], a: 0, e: "" },
    { q: "Name NaClO₃.", o: ["Sodium chlorate(V)", "Sodium chlorate(III)", "Sodium chlorate(VII)", "Sodium chloride"], a: 0, e: "Cl is +5." },
    { q: "How many electrons in: MnO₄⁻ + 8H⁺ + ne⁻ → Mn²⁺ + 4H₂O?", o: ["5", "3", "7", "2"], a: 0, e: "+7 → +2" },
    { q: "Cl₂ + 2NaOH → NaCl + NaClO + H₂O is an example of…", o: ["Disproportionation", "Neutralisation only", "Displacement", "Decomposition"], a: 0, e: "" },
    { q: "Oxidation number of N in NH₄⁺?", o: ["−3", "+3", "+5", "−4"], a: 0, e: "x + 4 = +1" }
  ],
  flashcards: [
    ["Oxidation (2 definitions)", "Loss of electrons; increase in oxidation number"],
    ["Reduction (2 definitions)", "Gain of electrons; decrease in oxidation number"],
    ["Oxidising agent", "Electron acceptor; is itself reduced"],
    ["Oxidation number of an element", "0"],
    ["O exceptions", "−1 in peroxides; +2 in OF₂"],
    ["H exception", "−1 in metal hydrides"],
    ["Steps to balance a half-equation", "Balance atom → add H₂O for O → add H⁺ for H → add e⁻ for charge"],
    ["Combining half-equations", "Equalise electrons, add, cancel"],
    ["Disproportionation", "Same element simultaneously oxidised and reduced"],
    ["MnO₄⁻ half-equation", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Groups 1 and 2",
  summary: "Trends in Group 2 reactivity, solubility, thermal stability of carbonates and nitrates, and flame tests.",
  notes: R`
<h3>Group 2 trends</h3>
<ul>
<li><b>First ionisation energy decreases</b> down the group (more shells, more shielding).</li>
<li>So <b>reactivity increases</b> down the group: the two outer electrons are lost more easily.</li>
<li>Atomic radius increases down the group.</li>
</ul>
<h3>Reactions of Group 2 metals</h3>
<ul>
<li>With <b>oxygen</b>: 2M + O<sub>2</sub> → 2MO (Mg burns with a bright white flame).</li>
<li>With <b>water</b>: M + 2H<sub>2</sub>O → M(OH)<sub>2</sub> + H<sub>2</sub> (Ca onwards react with cold water, increasingly vigorously). Mg reacts only very slowly with cold water but burns in steam: Mg + H<sub>2</sub>O → MgO + H<sub>2</sub>.</li>
<li>With <b>chlorine</b>: M + Cl<sub>2</sub> → MCl<sub>2</sub>.</li>
<li>Group 2 <b>oxides</b> react with water to form hydroxides, and with dilute acids to form salt + water.</li>
</ul>
<h3>Solubility trends</h3>
<ul>
<li><b>Hydroxides</b> get <b>more soluble</b> down the group (Mg(OH)<sub>2</sub> is sparingly soluble; Ba(OH)<sub>2</sub> is quite soluble), so solutions are more alkaline.</li>
<li><b>Sulfates</b> get <b>less soluble</b> down the group. BaSO<sub>4</sub> is insoluble, used in the sulfate test and in barium meals for X-rays.</li>
</ul>
<h3>Thermal stability</h3>
<p>Group 1 and 2 carbonates and nitrates become <b>more thermally stable down a group</b>. Smaller cations with higher charge (higher charge density) <b>polarise</b> the carbonate or nitrate ion more, weakening its bonds so it decomposes more easily.</p>
<ul>
<li>Group 2 carbonates: MCO<sub>3</sub> → MO + CO<sub>2</sub>.</li>
<li>Group 2 nitrates: 2M(NO<sub>3</sub>)<sub>2</sub> → 2MO + 4NO<sub>2</sub> + O<sub>2</sub> (brown gas seen).</li>
<li>Group 1 nitrates (except Li): 2MNO<sub>3</sub> → 2MNO<sub>2</sub> + O<sub>2</sub>. Li behaves like Group 2.</li>
<li>Group 1 carbonates (except Li<sub>2</sub>CO<sub>3</sub>) don't decompose at Bunsen temperatures.</li>
<li>Group 1 compounds are more stable than Group 2: the ions have lower charge, so less polarising.</li>
</ul>
<h3>Flame tests</h3>
<p>Li red · Na yellow · K lilac · Rb red-violet · Cs blue-violet · Ca brick red · Sr crimson · Ba apple green.</p>
<p>Heat promotes electrons to higher energy levels. When they fall back, they emit light with energies corresponding to particular wavelengths.</p>
`,
  quiz: [
    { q: "How does reactivity change down Group 2?", o: ["Increases", "Decreases", "No trend", "Increases then decreases"], a: 0, e: "Ionisation energies fall." },
    { q: "Which Group 2 hydroxide is most soluble?", o: ["Ba(OH)₂", "Mg(OH)₂", "Ca(OH)₂", "Sr(OH)₂"], a: 0, e: "" },
    { q: "Which Group 2 sulfate is least soluble?", o: ["BaSO₄", "MgSO₄", "CaSO₄", "SrSO₄"], a: 0, e: "" },
    { q: "Why does MgCO₃ decompose at a lower temperature than BaCO₃?", o: ["Mg²⁺ is smaller, more polarising", "Mg²⁺ is larger", "BaCO₃ has stronger London forces", "Mg is less reactive"], a: 0, e: "" },
    { q: "Products of heating magnesium nitrate?", o: ["MgO, NO₂ and O₂", "MgNO₂ and O₂", "Mg and NO₂", "MgO and N₂"], a: 0, e: "" },
    { q: "Products of heating sodium nitrate?", o: ["NaNO₂ and O₂", "Na₂O, NO₂ and O₂", "Na and NO₂", "No reaction"], a: 0, e: "" },
    { q: "What colour flame does strontium give?", o: ["Crimson red", "Apple green", "Lilac", "Yellow"], a: 0, e: "" },
    { q: "What does Mg form with steam?", o: ["MgO and H₂", "Mg(OH)₂ and H₂", "MgO₂", "MgH₂"], a: 0, e: "" },
    { q: "Why are flame colours produced?", o: ["Excited electrons fall back, emitting light of particular energies", "Metals burn", "Ions absorb all light", "Electrons are lost"], a: 0, e: "" }
  ],
  flashcards: [
    ["Group 2 + water", "M + 2H₂O → M(OH)₂ + H₂"],
    ["Mg + steam", "Mg + H₂O → MgO + H₂"],
    ["Group 2 hydroxide solubility", "Increases down the group"],
    ["Group 2 sulfate solubility", "Decreases down the group (BaSO₄ insoluble)"],
    ["Thermal stability down a group", "Increases: larger ions, lower charge density, less polarising"],
    ["Group 2 nitrate decomposition", "2M(NO₃)₂ → 2MO + 4NO₂ + O₂"],
    ["Group 1 nitrate decomposition", "2MNO₃ → 2MNO₂ + O₂ (not Li)"],
    ["Flame colours Li Na K", "Red, yellow, lilac"],
    ["Flame colours Ca Sr Ba", "Brick red, crimson, apple green"],
    ["Use of BaSO₄", "Barium meals (X-ray imaging); sulfate test"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y1: true, title: "Group 7: the halogens",
  summary: "Trends, displacement, disproportionation, halide reactions with sulfuric acid, and halide tests.",
  notes: R`
<h3>Trends down Group 7</h3>
<ul>
<li>F<sub>2</sub> pale yellow gas · Cl<sub>2</sub> green gas · Br<sub>2</sub> red-brown liquid · I<sub>2</sub> grey-black solid (purple vapour).</li>
<li><b>Boiling points increase</b>: more electrons → stronger London forces.</li>
<li><b>Electronegativity decreases</b>.</li>
<li><b>Oxidising power decreases</b>: larger atoms, more shielding, so they attract an extra electron less strongly.</li>
<li><b>Reducing power of halide ions increases</b> down the group (I<sup>−</sup> loses its electron most easily).</li>
</ul>
<h3>Displacement</h3>
<p>A halogen displaces a less reactive halide from solution: Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>. In an organic solvent like cyclohexane, Br<sub>2</sub> is orange and I<sub>2</sub> is purple.</p>
<h3>Disproportionation of chlorine</h3>
<ul>
<li>Cold dilute NaOH: Cl<sub>2</sub> + 2NaOH → NaCl + NaClO + H<sub>2</sub>O (bleach).</li>
<li>Hot concentrated NaOH: 3Cl<sub>2</sub> + 6NaOH → 5NaCl + NaClO<sub>3</sub> + 3H<sub>2</sub>O.</li>
<li>Water: Cl<sub>2</sub> + H<sub>2</sub>O ⇌ HCl + HClO. Used to kill bacteria in water treatment; the benefit outweighs the risk from toxic Cl<sub>2</sub> and chlorinated organics.</li>
</ul>
<h3>Halides with concentrated sulfuric acid</h3>
<table>
<tr><th>Halide</th><th>Products</th><th>Observations</th></tr>
<tr><td>NaCl</td><td>HCl only (acid–base)</td><td>Misty fumes</td></tr>
<tr><td>NaBr</td><td>HBr, then Br<sub>2</sub> and SO<sub>2</sub> (S reduced +6 → +4)</td><td>Misty fumes, orange-brown vapour</td></tr>
<tr><td>NaI</td><td>HI, I<sub>2</sub>, SO<sub>2</sub>, S and H<sub>2</sub>S (S reduced to +4, 0, −2)</td><td>Purple vapour/black solid, yellow solid, rotten-egg smell</td></tr>
</table>
<p>This shows the increasing reducing power of the halide ions.</p>
<h3>Testing for halides</h3>
<p>Add dilute nitric acid (removes carbonate), then silver nitrate:</p>
<table>
<tr><th>Halide</th><th>Precipitate</th><th>Dilute NH<sub>3</sub></th><th>Conc NH<sub>3</sub></th></tr>
<tr><td>Cl<sup>−</sup></td><td>White AgCl</td><td>Dissolves</td><td>Dissolves</td></tr>
<tr><td>Br<sup>−</sup></td><td>Cream AgBr</td><td>Insoluble</td><td>Dissolves</td></tr>
<tr><td>I<sup>−</sup></td><td>Yellow AgI</td><td>Insoluble</td><td>Insoluble</td></tr>
</table>
<p>Hydrogen halides are very soluble, forming acids; HCl fumes form white smoke with NH<sub>3</sub>: NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl.</p>
`,
  quiz: [
    { q: "How does oxidising power change down Group 7?", o: ["Decreases", "Increases", "Stays the same", "Increases then decreases"], a: 0, e: "" },
    { q: "Which halide ion is the strongest reducing agent?", o: ["I⁻", "Br⁻", "Cl⁻", "F⁻"], a: 0, e: "" },
    { q: "NaCl + conc H₂SO₄ gives…", o: ["HCl only", "Cl₂ and SO₂", "HCl and H₂S", "No reaction"], a: 0, e: "Cl⁻ is too weak a reducing agent to reduce sulfuric acid." },
    { q: "Which gas with a rotten-egg smell forms from NaI and conc H₂SO₄?", o: ["H₂S", "SO₂", "HI", "I₂"], a: 0, e: "" },
    { q: "Silver bromide precipitate is…", o: ["Cream, soluble in conc NH₃ only", "White, soluble in dilute NH₃", "Yellow, insoluble", "Black"], a: 0, e: "" },
    { q: "Why is dilute HNO₃ added before AgNO₃?", o: ["To remove carbonate ions that would give a false precipitate", "To oxidise the halide", "To make silver ions", "To dissolve the precipitate"], a: 0, e: "" },
    { q: "Products of Cl₂ with cold dilute NaOH?", o: ["NaCl, NaClO, H₂O", "NaCl, NaClO₃, H₂O", "HCl, HClO", "NaCl and O₂"], a: 0, e: "" },
    { q: "Iodine dissolved in cyclohexane is…", o: ["Purple", "Orange", "Brown", "Colourless"], a: 0, e: "" },
    { q: "Why do halogen boiling points increase down the group?", o: ["More electrons → stronger London forces", "Stronger covalent bonds", "Hydrogen bonding", "More polar"], a: 0, e: "" }
  ],
  flashcards: [
    ["Halogen oxidising power trend", "Decreases down the group"],
    ["Halide reducing power trend", "Increases down the group (I⁻ strongest)"],
    ["Cl₂ + cold dilute NaOH", "Cl₂ + 2NaOH → NaCl + NaClO + H₂O"],
    ["Cl₂ + hot conc NaOH", "3Cl₂ + 6NaOH → 5NaCl + NaClO₃ + 3H₂O"],
    ["Cl₂ + water", "Cl₂ + H₂O ⇌ HCl + HClO"],
    ["NaBr + conc H₂SO₄ products", "HBr, Br₂, SO₂"],
    ["NaI + conc H₂SO₄ products", "HI, I₂, SO₂, S, H₂S"],
    ["Silver halide colours", "AgCl white, AgBr cream, AgI yellow"],
    ["Ammonia test", "AgCl dissolves in dilute; AgBr in conc only; AgI insoluble"],
    ["HCl + NH₃", "White smoke of NH₄Cl"]
  ]
});

S2Data.add({
  id: "5a", group: 5, y1: true, title: "Moles, gases and solutions",
  summary: "The mole, empirical and molecular formulae, ideal gas equation, molar volume and concentrations.",
  notes: R`
<h3>The mole</h3>
<ul>
<li>One mole contains <b>6.02 × 10<sup>23</sup></b> particles (the Avogadro constant, L).</li>
<li><b>n = m ÷ M</b> (moles = mass ÷ molar mass).</li>
<li>Number of particles = n × L.</li>
</ul>
<h3>Empirical and molecular formulae</h3>
<ol><li>Divide mass (or %) of each element by its A<sub>r</sub>.</li><li>Divide by the smallest value.</li><li>Convert to whole numbers.</li></ol>
<p>Molecular formula = empirical formula × (M<sub>r</sub> ÷ empirical formula mass).</p>
<h3>Gases</h3>
<ul>
<li>At RTP, 1 mol of any gas occupies <b>24.0 dm<sup>3</sup></b> (24 000 cm<sup>3</sup>).</li>
<li><b>Ideal gas equation</b>: <b>pV = nRT</b>, with p in Pa, V in m<sup>3</sup>, T in K, R = 8.31 J mol<sup>−1</sup> K<sup>−1</sup>.</li>
<li>Conversions: 1 dm<sup>3</sup> = 10<sup>−3</sup> m<sup>3</sup>; 1 cm<sup>3</sup> = 10<sup>−6</sup> m<sup>3</sup>; kPa × 1000 = Pa; °C + 273 = K.</li>
</ul>
<div class="box box-key"><span class="box-title">Worked example</span>Find M<sub>r</sub> of a gas: 0.50 g occupies 400 cm<sup>3</sup> at 100 kPa and 300 K.<br>n = pV/RT = (100 000 × 400 × 10<sup>−6</sup>) ÷ (8.31 × 300) = 0.0160 mol<br>M<sub>r</sub> = 0.50 ÷ 0.0160 = <b>31.2</b></div>
<h3>Solutions</h3>
<ul>
<li>Concentration (mol dm<sup>−3</sup>) = n ÷ V (dm<sup>3</sup>). In g dm<sup>−3</sup> = mol dm<sup>−3</sup> × M.</li>
<li><b>ppm</b> = (mass of solute ÷ mass of solution) × 10<sup>6</sup>. Used for very dilute solutions, e.g. pollutants.</li>
<li>Ionic equations and state symbols: write only the species that react; spectator ions are left out.</li>
</ul>
`,
  quiz: [
    { q: "How many moles in 4.4 g of CO₂?", o: ["0.10", "0.20", "1.0", "0.44"], a: 0, e: "4.4 ÷ 44" },
    { q: "Volume of 0.25 mol of gas at RTP?", o: ["6.0 dm³", "24 dm³", "0.25 dm³", "96 dm³"], a: 0, e: "" },
    { q: "In pV = nRT, V must be in…", o: ["m³", "dm³", "cm³", "litres"], a: 0, e: "" },
    { q: "Convert 250 cm³ to m³.", o: ["2.5 × 10⁻⁴", "2.5 × 10⁻³", "0.25", "2.5 × 10⁻⁶"], a: 0, e: "× 10⁻⁶" },
    { q: "Empirical formula of a compound with 40% C, 6.7% H, 53.3% O?", o: ["CH₂O", "C₂H₄O", "CHO", "CH₂O₂"], a: 0, e: "3.33 : 6.7 : 3.33 → 1 : 2 : 1" },
    { q: "Moles in 25.0 cm³ of 0.200 mol dm⁻³ solution?", o: ["5.00 × 10⁻³", "5.00", "0.0500", "8.00 × 10⁻³"], a: 0, e: "" },
    { q: "Number of molecules in 0.5 mol of water?", o: ["3.01 × 10²³", "6.02 × 10²³", "1.20 × 10²⁴", "9.0"], a: 0, e: "" },
    { q: "Value and units of R?", o: ["8.31 J mol⁻¹ K⁻¹", "24 dm³ mol⁻¹", "6.02 × 10²³ mol⁻¹", "8.31 kJ mol⁻¹"], a: 0, e: "" },
    { q: "A pollutant is 0.002 g in 1000 g of water. Concentration in ppm?", o: ["2 ppm", "0.002 ppm", "20 ppm", "200 ppm"], a: 0, e: "0.002/1000 × 10⁶" }
  ],
  flashcards: [
    ["Avogadro constant", "6.02 × 10²³ mol⁻¹"],
    ["n from mass", "n = m ÷ M"],
    ["Molar gas volume at RTP", "24.0 dm³ mol⁻¹"],
    ["Ideal gas equation", "pV = nRT (Pa, m³, K, R = 8.31)"],
    ["cm³ → m³", "× 10⁻⁶"],
    ["dm³ → m³", "× 10⁻³"],
    ["Concentration", "c = n ÷ V (dm³)"],
    ["ppm", "(mass solute ÷ mass solution) × 10⁶"],
    ["Empirical formula method", "÷ Ar, ÷ smallest, make whole numbers"],
    ["Molecular formula", "Empirical × (Mr ÷ empirical mass)"]
  ]
});

S2Data.add({
  id: "5b", group: 5, y1: true, title: "Yield, atom economy, titrations and errors",
  summary: "Percentage yield, atom economy, acid–base titration calculations and measurement uncertainty.",
  notes: R`
<h3>Yield and atom economy</h3>
<ul>
<li><b>Percentage yield</b> = (actual yield ÷ theoretical yield) × 100.</li>
<li><b>Atom economy</b> = (M<sub>r</sub> of desired product ÷ total M<sub>r</sub> of all products) × 100.</li>
<li>Addition reactions have 100% atom economy. High atom economy means less waste, which is better for sustainability and cost.</li>
</ul>
<h3>Titrations</h3>
<ul>
<li>Use a pipette for the measured solution, a burette for the titrant, and an indicator (phenolphthalein or methyl orange).</li>
<li>Record burette readings to the nearest 0.05 cm<sup>3</sup>. Concordant titres agree within 0.20 cm<sup>3</sup> (Edexcel) and are averaged.</li>
</ul>
<div class="box box-key"><span class="box-title">Back titration</span>Used when a substance is insoluble or reacts slowly (e.g. CaCO<sub>3</sub> in an antacid): add a known excess of acid, then titrate the leftover acid with alkali. Moles that reacted = moles added − moles left over.</div>
<h3>Measurement uncertainty</h3>
<ul>
<li><b>Percentage uncertainty</b> = (uncertainty ÷ measured value) × 100.</li>
<li>A burette has ±0.05 cm<sup>3</sup> per reading, so a titre (two readings) has ±0.10 cm<sup>3</sup>.</li>
<li>For a mass from two readings (by difference), double the balance uncertainty.</li>
<li>To reduce percentage uncertainty: use larger quantities (e.g. bigger titres, larger masses).</li>
<li><b>Systematic errors</b> shift all results the same way (e.g. heat loss). <b>Random errors</b> scatter results; repeat and average to reduce them.</li>
</ul>
`,
  quiz: [
    { q: "Atom economy of an addition reaction is…", o: ["100%", "50%", "Depends on yield", "0%"], a: 0, e: "Only one product." },
    { q: "Percentage yield if 4.0 g is obtained from a theoretical 5.0 g?", o: ["80%", "125%", "20%", "40%"], a: 0, e: "" },
    { q: "A titre of 25.00 cm³ (±0.10 cm³). Percentage uncertainty?", o: ["0.4%", "0.2%", "4%", "0.1%"], a: 0, e: "0.10/25.00 × 100" },
    { q: "When is a back titration used?", o: ["When the substance is insoluble or reacts slowly", "For strong acids", "When there is no indicator", "To avoid using a burette"], a: 0, e: "" },
    { q: "Atom economy for CaCO₃ → CaO + CO₂ if CaO is wanted? (Mr: CaO 56, CO₂ 44)", o: ["56%", "44%", "100%", "78%"], a: 0, e: "" },
    { q: "How can percentage uncertainty in a titre be reduced?", o: ["Use more dilute titrant so the titre is larger", "Use a measuring cylinder", "Read to 0.5 cm³", "Use more indicator"], a: 0, e: "" },
    { q: "Repeating an experiment reduces…", o: ["Random errors", "Systematic errors", "Atom economy", "Yield"], a: 0, e: "" },
    { q: "25.0 cm³ of 0.100 mol dm⁻³ NaOH needs 20.0 cm³ of HCl. [HCl]?", o: ["0.125 mol dm⁻³", "0.080 mol dm⁻³", "0.100 mol dm⁻³", "0.250 mol dm⁻³"], a: 0, e: "" }
  ],
  flashcards: [
    ["Percentage yield", "Actual ÷ theoretical × 100"],
    ["Atom economy", "Mr desired product ÷ total Mr of products × 100"],
    ["Why high atom economy matters", "Less waste; more sustainable; cheaper"],
    ["Burette uncertainty per titre", "±0.10 cm³ (two readings of ±0.05)"],
    ["Percentage uncertainty", "Uncertainty ÷ value × 100"],
    ["Concordant titres (Edexcel)", "Within 0.20 cm³"],
    ["Back titration", "Add known excess reagent, titrate the excess; moles reacted = added − left"],
    ["Systematic vs random error", "Systematic: same direction every time; random: scatter, reduced by repeats"]
  ]
});

S2Data.detail("3a", { mistakes: ["Writing oxidation numbers as '2+' instead of '+2'. Charges have the sign after; oxidation numbers before.", "Forgetting that O in peroxides is −1."], tips: ["After combining half-equations, check both atoms and charges balance before moving on."], fact: "Chlorate(V) salts were once used in weedkillers and matches because they're such powerful oxidisers." });
S2Data.detail("4a", { mistakes: ["Saying thermal stability decreases down the group. It <b>increases</b>.", "Forgetting that lithium compounds behave like Group 2 compounds (small, polarising ion)."], tips: ["Thermal stability explanations need: cation size, charge density, polarisation of the anion, and weakening of its bonds."], fact: "Fireworks use strontium for red, barium for green and copper for blue: the same chemistry as flame tests." });
S2Data.detail("4b", { mistakes: ["Mixing up reducing power of halide ions and oxidising power of halogens. They go in opposite directions down the group."], tips: ["For the H<sub>2</sub>SO<sub>4</sub> reactions, give the oxidation state change of sulfur for each product: SO<sub>2</sub> (+4), S (0), H<sub>2</sub>S (−2)."], fact: "Fluorine is so reactive that it took chemists 74 years to isolate it, injuring several along the way." });
S2Data.detail("5a", { mistakes: ["Using °C or dm<sup>3</sup> in pV = nRT. Always convert to K and m<sup>3</sup>.", "Rounding too early in multi-step calculations."], tips: ["Write units at every step: it catches conversion errors."], fact: "A mole of grains of sand would cover the UK to a depth of several kilometres." });
S2Data.detail("5b", { mistakes: ["Halving the burette uncertainty instead of doubling it for a titre.", "Confusing percentage yield with atom economy."], tips: ["In back titrations, write three lines: moles added, moles left over (from the titration), moles reacted = difference."], fact: "The pharmaceutical industry can produce over 100 kg of waste per kilogram of drug, which is why atom economy matters so much." });
