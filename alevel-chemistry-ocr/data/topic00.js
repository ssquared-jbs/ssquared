/* Shared with the Edexcel A-level Chemistry platform, reorganised into OCR A modules. */

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Atoms, isotopes and mass spectrometry",
  summary: "Subatomic particles, isotopes, relative masses and how a mass spectrometer works.",
  notes: R`
<h3>Subatomic particles</h3>
<table>
<tr><th>Particle</th><th>Relative mass</th><th>Relative charge</th><th>Where</th></tr>
<tr><td>Proton</td><td>1</td><td>+1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>1</td><td>0</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>1/1836</td><td>−1</td><td>Orbitals around the nucleus</td></tr>
</table>
<ul>
<li><b>Atomic number (Z)</b>: number of protons. It defines the element.</li>
<li><b>Mass number (A)</b>: protons + neutrons.</li>
<li><b>Isotopes</b>: atoms of the same element with different numbers of neutrons. They have the same electron configuration, so the same chemical properties, but slightly different physical properties (e.g. density, rate of diffusion).</li>
</ul>

<h3>Relative masses</h3>
<ul>
<li><b>Relative atomic mass, A<sub>r</sub></b>: the weighted mean mass of an atom of an element compared with 1/12 of the mass of an atom of carbon-12.</li>
<li><b>Relative isotopic mass</b>: the mass of an atom of one isotope compared with 1/12 of the mass of an atom of carbon-12.</li>
<li><b>Relative molecular mass, M<sub>r</sub></b>: the weighted mean mass of a molecule compared with 1/12 of the mass of a carbon-12 atom. (For ionic compounds, call it relative formula mass.)</li>
</ul>
<div class="box box-key"><span class="box-title">Worked example</span>A sample of chlorine is 75.8% <sup>35</sup>Cl and 24.2% <sup>37</sup>Cl.<br>A<sub>r</sub> = (35 × 75.8 + 37 × 24.2) ÷ 100 = <b>35.5</b></div>

<h3>The time-of-flight mass spectrometer</h3>
<ol>
<li><b>Ionisation</b>: the sample is vaporised and ionised, either by <b>electron impact</b> (high-energy electrons knock an electron off: X(g) → X<sup>+</sup>(g) + e<sup>−</sup>) or by <b>electrospray</b> (dissolved sample sprayed through a charged needle so molecules gain a proton: X + H<sup>+</sup> → XH<sup>+</sup>).</li>
<li><b>Acceleration</b>: an electric field gives all the ions the same kinetic energy.</li>
<li><b>Ion drift</b>: ions travel through the flight tube. Since KE = ½mv<sup>2</sup>, lighter ions move faster and arrive first.</li>
<li><b>Detection</b>: ions hit the detector, gain electrons, and create a current proportional to their abundance.</li>
</ol>
<p>The spectrum shows <b>m/z</b> (mass ÷ charge) against relative abundance. For a 1+ ion, m/z equals the mass.</p>
<ul>
<li>A molecule like Cl<sub>2</sub> gives peaks at m/z 70, 72 and 74 (<sup>35</sup>Cl<sup>35</sup>Cl, <sup>35</sup>Cl<sup>37</sup>Cl, <sup>37</sup>Cl<sup>37</sup>Cl), in the ratio 9 : 6 : 1.</li>
<li>For an organic molecule, the <b>molecular ion peak</b> (M<sup>+</sup>) at the highest m/z gives the M<sub>r</sub>. A small M+1 peak comes from <sup>13</sup>C.</li>
</ul>
<div class="box box-key"><span class="box-title">Uses</span>Identifying elements on space probes, testing for drugs in athletes, and measuring isotope ratios for dating.</div>
`,
  quiz: [
    { q: "What is the relative charge and mass of a neutron?", o: ["0 and 1", "+1 and 1", "−1 and 1/1836", "0 and 1/1836"], a: 0, e: "" },
    { q: "Why do isotopes of an element react in the same way?", o: ["Same electron configuration", "Same number of neutrons", "Same mass", "Same nuclear charge only"], a: 0, e: "Chemical reactions involve electrons." },
    { q: "Ar is defined relative to…", o: ["1/12 of the mass of a carbon-12 atom", "The mass of a hydrogen atom", "The mass of a proton", "1/16 of an oxygen atom"], a: 0, e: "" },
    { q: "In a time-of-flight mass spectrometer, which ions reach the detector first?", o: ["Lightest ions (lowest m/z)", "Heaviest ions", "Most abundant ions", "Ions with no charge"], a: 0, e: "All ions have the same KE, so lighter ones are faster." },
    { q: "In electrospray ionisation, a molecule X forms…", o: ["XH⁺", "X⁺", "X⁻", "X²⁺"], a: 0, e: "It gains a proton." },
    { q: "Calculate Ar of an element: 90% mass 20, 10% mass 22.", o: ["20.2", "21.0", "20.0", "21.8"], a: 0, e: "(20 × 90 + 22 × 10) ÷ 100 = 20.2" },
    { q: "Chlorine (75% ³⁵Cl, 25% ³⁷Cl) forms Cl₂. What is the ratio of peaks at m/z 70 : 72 : 74?", o: ["9 : 6 : 1", "3 : 1 : 0", "1 : 2 : 1", "3 : 2 : 1"], a: 0, e: "¾×¾ : 2×¾×¼ : ¼×¼ = 9 : 6 : 1" },
    { q: "What does the molecular ion peak of an organic compound tell you?", o: ["Its relative molecular mass", "Its structure", "Its boiling point", "Its functional group"], a: 0, e: "" },
    { q: "Why does the detector produce a current?", o: ["Ions gain electrons from it", "Ions lose protons", "Ions emit light", "Ions are neutralised by OH⁻"], a: 0, e: "" }
  ],
  flashcards: [
    ["Relative atomic mass (Ar)", "Weighted mean mass of an atom of an element compared with 1/12 of the mass of a carbon-12 atom"],
    ["Relative isotopic mass", "Mass of an atom of an isotope compared with 1/12 of the mass of a carbon-12 atom"],
    ["Isotopes", "Atoms of the same element (same protons) with different numbers of neutrons"],
    ["Why isotopes have the same chemical properties", "Same electron configuration"],
    ["4 stages of TOF mass spectrometry", "Ionisation → acceleration → ion drift → detection"],
    ["Electron impact ionisation", "X(g) + e⁻ → X⁺(g) + 2e⁻ (high-energy electrons knock out an electron)"],
    ["Electrospray ionisation", "Sample dissolved, sprayed through a high-voltage needle; molecules gain H⁺: X + H⁺ → XH⁺"],
    ["Why lighter ions arrive first", "All have the same KE (½mv²), so lower mass means higher speed"],
    ["m/z", "Mass-to-charge ratio. For a 1+ ion it equals the mass"],
    ["Molecular ion peak", "Peak with highest m/z (excluding M+1); gives Mr"],
    ["Cl₂ peaks", "m/z 70, 72, 74 in ratio 9 : 6 : 1"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Moles, gases and solutions",
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
  id: "2c", group: 2, y1: true, title: "Yield, atom economy, titrations and errors",
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
<li>Record burette readings to the nearest 0.05 cm<sup>3</sup>. Concordant titres agree within 0.10 cm<sup>3</sup> (OCR) and are averaged.</li>
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
    ["Concordant titres (OCR)", "Within 0.10 cm³"],
    ["Back titration", "Add known excess reagent, titrate the excess; moles reacted = added − left"],
    ["Systematic vs random error", "Systematic: same direction every time; random: scatter, reduced by repeats"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Oxidation numbers and redox equations",
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
  id: "2e", group: 2, y1: true, title: "Electron configurations and ionisation energies",
  summary: "Shells, sub-shells and orbitals; spdf notation; ionisation energy trends as evidence for structure.",
  notes: R`
<h3>Shells, sub-shells and orbitals</h3>
<ul>
<li>Electrons occupy <b>orbitals</b>: regions that can hold up to <b>two electrons with opposite spins</b>.</li>
<li><b>s</b> orbitals are spherical; <b>p</b> orbitals are dumbbell-shaped (three per sub-shell: p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>).</li>
</ul>
<table>
<tr><th>Sub-shell</th><th>Orbitals</th><th>Max electrons</th></tr>
<tr><td>s</td><td>1</td><td>2</td></tr>
<tr><td>p</td><td>3</td><td>6</td></tr>
<tr><td>d</td><td>5</td><td>10</td></tr>
<tr><td>f</td><td>7</td><td>14</td></tr>
</table>
<p>Shell n holds up to 2n<sup>2</sup> electrons: 2, 8, 18, 32.</p>

<h3>Filling order</h3>
<p>1s → 2s → 2p → 3s → 3p → <b>4s → 3d</b> → 4p. The 4s fills before 3d because it is at slightly lower energy when empty.</p>
<ul>
<li><b>Hund's rule</b>: electrons occupy orbitals in a sub-shell singly, with parallel spins, before pairing.</li>
<li>e.g. Fe: 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 3d<sup>6</sup> 4s<sup>2</sup>, or [Ar] 3d<sup>6</sup> 4s<sup>2</sup>.</li>
<li><b>Exceptions</b>: Cr is [Ar] 3d<sup>5</sup> 4s<sup>1</sup> and Cu is [Ar] 3d<sup>10</sup> 4s<sup>1</sup> (a half-full or full d sub-shell is more stable).</li>
<li>Transition metal <b>ions lose 4s electrons first</b>: Fe<sup>2+</sup> is [Ar] 3d<sup>6</sup>, Fe<sup>3+</sup> is [Ar] 3d<sup>5</sup>.</li>
<li>Elements are in the <b>s, p, d or f block</b> according to the sub-shell their outer electron is in.</li>
</ul>

<h3>Ionisation energy</h3>
<div class="box box-key"><span class="box-title">Definition</span>The <b>first ionisation energy</b> is the energy needed to remove one electron from each atom in one mole of gaseous atoms, forming one mole of gaseous 1+ ions.<br>Na(g) → Na<sup>+</sup>(g) + e<sup>−</sup></div>
<p>Three factors affect it: <b>nuclear charge</b>, <b>distance</b> of the electron from the nucleus (atomic radius), and <b>shielding</b> by inner electrons.</p>
<ul>
<li><b>Down a group</b>: IE decreases. The outer electron is further away and more shielded, so less attracted, despite the bigger nuclear charge.</li>
<li><b>Across a period</b>: IE generally increases. Nuclear charge increases, shielding is similar, and the atomic radius decreases.</li>
<li><b>Dip at Group 3</b> (e.g. Mg → Al): Al's outer electron is in a 3p orbital, higher in energy and slightly more shielded than 3s.</li>
<li><b>Dip at Group 6</b> (e.g. P → S): in S, the electron is removed from a 3p orbital that holds a <b>pair</b>, and repulsion between paired electrons makes it easier to remove.</li>
</ul>

<h3>Successive ionisation energies</h3>
<p>Each successive IE is larger, because the electron is removed from an increasingly positive ion. A <b>big jump</b> shows the electron is coming from a shell closer to the nucleus. This is evidence for shells, and it tells you the group number: for example, a big jump between the 2nd and 3rd IEs means the element is in Group 2.</p>
`,
  quiz: [
    { q: "What is the electron configuration of Cr?", o: ["[Ar] 3d⁵ 4s¹", "[Ar] 3d⁴ 4s²", "[Ar] 3d⁶", "[Ar] 4s² 4p⁴"], a: 0, e: "A half-filled d sub-shell is more stable." },
    { q: "What is the configuration of Fe³⁺?", o: ["[Ar] 3d⁵", "[Ar] 3d³ 4s²", "[Ar] 3d⁶ 4s²", "[Ar] 3d⁴ 4s¹"], a: 0, e: "4s electrons are lost first." },
    { q: "How many electrons can a p sub-shell hold?", o: ["6", "2", "10", "14"], a: 0, e: "" },
    { q: "Which equation represents the first ionisation energy of magnesium?", o: ["Mg(g) → Mg⁺(g) + e⁻", "Mg(s) → Mg⁺(g) + e⁻", "Mg(g) → Mg²⁺(g) + 2e⁻", "Mg(g) + e⁻ → Mg⁻(g)"], a: 0, e: "Gaseous atoms, one electron removed." },
    { q: "Why is the first IE of Al lower than Mg?", o: ["Al's outer electron is in a higher-energy 3p orbital", "Al has fewer protons", "Al's outer electron is paired", "Al is a metal"], a: 0, e: "" },
    { q: "Why is the first IE of S lower than P?", o: ["Electron removed from a paired 3p orbital; repulsion", "S has fewer protons", "S's electron is in 3s", "S is bigger"], a: 0, e: "" },
    { q: "Successive IEs (kJ/mol): 578, 1817, 2745, 11 577. Which group?", o: ["Group 3", "Group 2", "Group 4", "Group 1"], a: 0, e: "Big jump after the 3rd." },
    { q: "Why does first IE decrease down a group?", o: ["Outer electron further from nucleus and more shielded", "Nuclear charge decreases", "Fewer shells", "Electrons are paired"], a: 0, e: "" },
    { q: "Which block is bromine in?", o: ["p", "s", "d", "f"], a: 0, e: "Its outer electrons are in 4p." }
  ],
  flashcards: [
    ["Orbital", "A region that can hold up to 2 electrons with opposite spins"],
    ["Shapes of s and p orbitals", "s: spherical; p: dumbbell (3 per sub-shell)"],
    ["Filling order to 4p", "1s 2s 2p 3s 3p 4s 3d 4p"],
    ["Hund's rule", "Electrons fill orbitals singly with parallel spins before pairing"],
    ["Cr and Cu configurations", "Cr [Ar] 3d⁵ 4s¹; Cu [Ar] 3d¹⁰ 4s¹"],
    ["Transition metal ions", "Lose 4s electrons before 3d"],
    ["First ionisation energy", "Energy to remove 1 electron from each atom in 1 mol of gaseous atoms → 1 mol of gaseous 1+ ions"],
    ["3 factors affecting IE", "Nuclear charge, distance from nucleus (radius), shielding"],
    ["Group 2 → 3 dip", "Outer electron in p orbital: higher energy, slightly more shielded"],
    ["Group 5 → 6 dip", "Electron removed from a paired orbital; spin-pair repulsion"],
    ["What a big jump in successive IEs shows", "Electron removed from a new, inner shell → evidence for shells; gives group"]
  ]
});

S2Data.add({
  id: "2f", group: 2, y1: true, title: "Ionic bonding",
  summary: "Ionic bonds, ion sizes, polarisation and the properties of ionic lattices.",
  notes: R`
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
  id: "2g", group: 2, y1: true, title: "Covalent bonds and shapes of molecules",
  summary: "Covalent and dative bonds, σ and π bonds, and electron-pair repulsion theory.",
  notes: R`
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
  id: "2h", group: 2, y1: true, title: "Electronegativity, polarity and intermolecular forces",
  summary: "Polar bonds and molecules, London forces, permanent dipoles and hydrogen bonding.",
  notes: R`
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
  id: "3a", group: 3, y1: true, title: "Periodicity",
  summary: "Trends across Period 3 in atomic radius, ionisation energy, melting point and structure.",
  notes: R`
<h3>The Periodic Table</h3>
<ul>
<li>Elements are arranged in order of <b>atomic number</b>. Elements in the same <b>group</b> have the same outer electron configuration, so similar reactions.</li>
<li><b>Periodicity</b>: a repeating pattern of properties across each period.</li>
</ul>

<h3>Atomic radius across Period 3</h3>
<p>Atomic radius <b>decreases</b> from Na to Ar. The nuclear charge increases while electrons are added to the same shell, so shielding hardly changes and the outer electrons are pulled closer.</p>

<h3>Melting points across Period 3</h3>
<table>
<tr><th>Element</th><th>Structure</th><th>Bonding / forces</th><th>Melting point</th></tr>
<tr><td>Na, Mg, Al</td><td>Giant metallic</td><td>Metallic bonding: gets stronger as ion charge increases and more electrons are delocalised</td><td>Increases Na → Al</td></tr>
<tr><td>Si</td><td>Giant covalent (like diamond)</td><td>Many strong covalent bonds</td><td>Highest</td></tr>
<tr><td>P<sub>4</sub>, S<sub>8</sub>, Cl<sub>2</sub></td><td>Simple molecular</td><td>London forces between molecules: bigger molecule → more electrons → stronger</td><td>Low: S<sub>8</sub> &gt; P<sub>4</sub> &gt; Cl<sub>2</sub></td></tr>
<tr><td>Ar</td><td>Monatomic</td><td>Very weak London forces</td><td>Lowest</td></tr>
</table>

<h3>First ionisation energy across Periods 2 and 3</h3>
<p>Generally increases across a period, with small dips at Group 3 (new p sub-shell) and Group 6 (first paired p electron). It drops sharply from the noble gas to the next Group 1 element, because the new outer electron is in a new shell.</p>

<div class="box box-key"><span class="box-title">How to explain a trend</span>Always talk about <b>structure and bonding</b> for melting points, and <b>nuclear charge, distance and shielding</b> for radius and ionisation energy.</div>
`,
  quiz: [
    { q: "Which Period 3 element has the highest melting point?", o: ["Silicon", "Aluminium", "Sulfur", "Sodium"], a: 0, e: "Giant covalent structure." },
    { q: "Why does atomic radius decrease across Period 3?", o: ["Nuclear charge increases with similar shielding", "More shells are added", "Electrons are lost", "Shielding increases a lot"], a: 0, e: "" },
    { q: "Why is the melting point of Al higher than Na?", o: ["Al³⁺ has a higher charge and more delocalised electrons", "Al is covalent", "Al has London forces", "Al is larger"], a: 0, e: "" },
    { q: "Why does S₈ have a higher melting point than P₄?", o: ["S₈ has more electrons, so stronger London forces", "S₈ is giant covalent", "S₈ is ionic", "P₄ has hydrogen bonds"], a: 0, e: "" },
    { q: "Which has a monatomic structure?", o: ["Argon", "Chlorine", "Silicon", "Phosphorus"], a: 0, e: "" },
    { q: "Why is there a big drop in first IE from Ne to Na?", o: ["Na's outer electron is in a new shell, further away and more shielded", "Na has fewer protons", "Na's electron is paired", "Ne is a metal"], a: 0, e: "" },
    { q: "What is periodicity?", o: ["A repeating pattern of properties across periods", "Elements in the same group", "Radioactive decay", "The number of shells"], a: 0, e: "" },
    { q: "What forces exist between Cl₂ molecules?", o: ["London forces", "Hydrogen bonds", "Ionic bonds", "Metallic bonds"], a: 0, e: "" }
  ],
  flashcards: [
    ["Atomic radius across a period", "Decreases: more protons, same shell, similar shielding → electrons pulled closer"],
    ["Na, Mg, Al melting points", "Increase: higher ion charge and more delocalised electrons → stronger metallic bonding"],
    ["Silicon structure", "Giant covalent → very high melting point"],
    ["P₄, S₈, Cl₂", "Simple molecular; London forces; S₈ > P₄ > Cl₂ (more electrons)"],
    ["Argon structure", "Monatomic; very weak London forces; lowest melting point"],
    ["Periodicity", "Repeating trends in properties across periods"],
    ["IE trend across a period", "Increases overall, dips at Groups 3 and 6"],
    ["Explaining melting points", "Identify structure and bonding, then the strength of forces to overcome"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y1: true, title: "Metallic bonding and structures",
  summary: "Metallic bonding and comparing giant ionic, giant covalent, metallic and molecular structures.",
  notes: R`
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

S2Data.add({
  id: "3c", group: 3, y1: true, title: "Groups 1 and 2",
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
  id: "3d", group: 3, y1: true, title: "Group 7: the halogens",
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
  id: "3e", group: 3, y1: true, title: "Enthalpy changes and calorimetry",
  summary: "Standard conditions, the key enthalpy definitions, and measuring ΔH with Q = mcΔT.",
  notes: R`
<h3>Enthalpy basics</h3>
<ul>
<li><b>Enthalpy change, ΔH</b>: the heat energy change at constant pressure. <b>Exothermic</b>: ΔH negative (surroundings get hotter). <b>Endothermic</b>: ΔH positive.</li>
<li><b>Standard conditions</b>: 100 kPa, a stated temperature (usually 298 K), solutions at 1 mol dm<sup>−3</sup>, substances in their standard states. Symbol: ΔH<sup>⦵</sup>.</li>
<li>On an <b>enthalpy level diagram</b>, products are lower than reactants for an exothermic reaction. Add the activation energy hump for a reaction profile.</li>
</ul>
<h3>Key definitions (all under standard conditions)</h3>
<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td>Δ<sub>r</sub>H<sup>⦵</sup> reaction</td><td>Enthalpy change for the reaction in the molar quantities shown in the equation</td></tr>
<tr><td>Δ<sub>f</sub>H<sup>⦵</sup> formation</td><td>Enthalpy change when <b>1 mol</b> of a compound is formed from its <b>elements in their standard states</b></td></tr>
<tr><td>Δ<sub>c</sub>H<sup>⦵</sup> combustion</td><td>Enthalpy change when <b>1 mol</b> of a substance is <b>completely burned in oxygen</b></td></tr>
<tr><td>Δ<sub>neut</sub>H<sup>⦵</sup> neutralisation</td><td>Enthalpy change when acid and alkali react to form <b>1 mol of water</b></td></tr>
</table>
<p>Δ<sub>f</sub>H of an element in its standard state is zero.</p>

<h3>Calorimetry</h3>
<div class="box box-key"><span class="box-title">Q = mcΔT</span>Q = heat energy (J), m = mass of the <b>water or solution</b> (g, assume 1 cm<sup>3</sup> = 1 g), c = specific heat capacity (4.18 J g<sup>−1</sup> K<sup>−1</sup>), ΔT = temperature change (K or °C).</div>
<p>Then <b>ΔH = −Q ÷ n</b> (convert J to kJ), with n = moles of the limiting reactant. Add the sign: negative if the temperature rose.</p>
<p><b>Worked example</b>: 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> HCl + 50 cm<sup>3</sup> of 1.0 mol dm<sup>−3</sup> NaOH, temperature rise 6.8 °C. Q = 100 × 4.18 × 6.8 = 2842 J. n(H<sub>2</sub>O) = 0.050 mol. ΔH = −2.842 ÷ 0.050 = <b>−57 kJ mol<sup>−1</sup></b>.</p>
<h3>Errors and improvements</h3>
<ul>
<li><b>Heat losses</b> to the surroundings are the main error: use a polystyrene cup with a lid, and insulate.</li>
<li>For combustion (spirit burner heating a copper can), there's also incomplete combustion and evaporation of the fuel, so the value is less exothermic than the data-book value.</li>
<li>For slow reactions, take readings over time and <b>extrapolate the cooling curve</b> back to the time of mixing to find the maximum temperature change.</li>
</ul>
`,
  quiz: [
    { q: "Definition of standard enthalpy of formation?", o: ["Enthalpy change when 1 mol of a compound forms from its elements in their standard states", "Enthalpy change when 1 mol burns completely", "Energy to break 1 mol of bonds", "Enthalpy change forming 1 mol of water"], a: 0, e: "" },
    { q: "Standard pressure is…", o: ["100 kPa", "101 kPa only", "1 kPa", "1000 kPa"], a: 0, e: "" },
    { q: "25 cm³ of solution warms by 4.0 °C. Q = ?", o: ["418 J", "100 J", "4180 J", "41.8 J"], a: 0, e: "25 × 4.18 × 4.0" },
    { q: "Q = 2.09 kJ released by 0.0250 mol of reactant. ΔH = ?", o: ["−83.6 kJ mol⁻¹", "+83.6 kJ mol⁻¹", "−52.3 kJ mol⁻¹", "−0.0523 kJ mol⁻¹"], a: 0, e: "2.09 ÷ 0.025 = 83.6; exothermic." },
    { q: "Main reason a measured enthalpy of combustion is less exothermic than the data book?", o: ["Heat lost to surroundings", "Too much fuel", "Thermometer too accurate", "Water evaporating from the can only"], a: 0, e: "" },
    { q: "In Q = mcΔT, m is the mass of…", o: ["The water/solution being heated", "The fuel burned", "The reactants in moles", "The calorimeter only"], a: 0, e: "" },
    { q: "ΔfH of O₂(g) is…", o: ["0", "−286 kJ mol⁻¹", "+498 kJ mol⁻¹", "Depends on temperature only"], a: 0, e: "Element in its standard state." },
    { q: "Why extrapolate a cooling curve?", o: ["To estimate the maximum temperature change allowing for heat loss", "To find the mass", "To find c", "To make the graph look neat"], a: 0, e: "" }
  ],
  flashcards: [
    ["Exothermic", "ΔH negative; heat released to surroundings"],
    ["Standard conditions", "100 kPa, 298 K, 1 mol dm⁻³, standard states"],
    ["ΔfH⦵", "1 mol compound formed from elements in standard states"],
    ["ΔcH⦵", "1 mol substance burned completely in oxygen"],
    ["ΔneutH⦵", "Acid + alkali forming 1 mol of water"],
    ["Q = mcΔT", "m = mass of solution (g); c = 4.18 J g⁻¹ K⁻¹"],
    ["From Q to ΔH", "ΔH = −Q/n, in kJ mol⁻¹"],
    ["Main calorimetry error", "Heat loss to surroundings"],
    ["Cooling curve extrapolation", "Extend the line back to the mixing time to get the true ΔT"]
  ]
});

S2Data.add({
  id: "3f", group: 3, y1: true, title: "Hess's law and bond enthalpies",
  summary: "Using cycles with formation and combustion data, and calculating ΔH from mean bond enthalpies.",
  notes: R`
<h3>Hess's law</h3>
<p>The enthalpy change for a reaction is <b>independent of the route</b> taken, provided the start and end conditions are the same. So you can find enthalpy changes you can't measure directly.</p>
<h3>Using formation data</h3>
<div class="box box-key"><span class="box-title">Formation rule</span>Δ<sub>r</sub>H = ΣΔ<sub>f</sub>H(products) − ΣΔ<sub>f</sub>H(reactants)</div>
<p><b>Example</b>: CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O. Δ<sub>f</sub>H: CH<sub>4</sub> −75, CO<sub>2</sub> −394, H<sub>2</sub>O(l) −286. Δ<sub>r</sub>H = (−394 + 2×−286) − (−75) = <b>−891 kJ mol<sup>−1</sup></b>.</p>
<h3>Using combustion data</h3>
<div class="box box-key"><span class="box-title">Combustion rule</span>Δ<sub>r</sub>H = ΣΔ<sub>c</sub>H(reactants) − ΣΔ<sub>c</sub>H(products)</div>
<p><b>Example</b>: find Δ<sub>f</sub>H of ethanol, 2C + 3H<sub>2</sub> + ½O<sub>2</sub> → C<sub>2</sub>H<sub>5</sub>OH. Δ<sub>c</sub>H: C −394, H<sub>2</sub> −286, C<sub>2</sub>H<sub>5</sub>OH −1367. Δ<sub>f</sub>H = (2×−394 + 3×−286) − (−1367) = <b>−279 kJ mol<sup>−1</sup></b>.</p>
<p>You can also find ΔH for reactions like CuSO<sub>4</sub>(s) + 5H<sub>2</sub>O → CuSO<sub>4</sub>·5H<sub>2</sub>O(s) from two measured enthalpies of solution.</p>

<h3>Bond enthalpies</h3>
<ul>
<li><b>Bond enthalpy</b>: the enthalpy change to break 1 mol of a bond in the gaseous state. Always positive (endothermic).</li>
<li><b>Mean bond enthalpy</b>: averaged over many different compounds, so calculations using it are approximate.</li>
</ul>
<div class="box box-key"><span class="box-title">Bond enthalpy rule</span>ΔH = Σ(bonds broken) − Σ(bonds made)</div>
<p><b>Example</b>: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl. Broken: H–H 436 + Cl–Cl 243 = 679. Made: 2 × H–Cl 432 = 864. ΔH = 679 − 864 = <b>−185 kJ mol<sup>−1</sup></b>.</p>
<p>Values differ from Hess's law (formation) values because mean bond enthalpies are averages, and because bond enthalpy calculations assume everything is gaseous.</p>
`,
  quiz: [
    { q: "Hess's law states that…", o: ["ΔH is independent of the route taken", "Energy is always released", "ΔH depends on the catalyst", "Bonds break exothermically"], a: 0, e: "" },
    { q: "4NH₃ + 5O₂ → 4NO + 6H₂O(g). ΔfH: NH₃ −46, NO +90, H₂O(g) −242 kJ mol⁻¹. ΔrH = ?", o: ["−908 kJ mol⁻¹", "+908 kJ mol⁻¹", "−1268 kJ mol⁻¹", "−286 kJ mol⁻¹"], a: 0, e: "(4×90 + 6×−242) − (4×−46) = 360 − 1452 + 184 = −908." },
    { q: "Bond breaking is…", o: ["Endothermic", "Exothermic", "Neither", "Depends on the bond"], a: 0, e: "" },
    { q: "Broken bonds total 2648 kJ, made bonds total 3466 kJ. ΔH = ?", o: ["−818 kJ mol⁻¹", "+818 kJ mol⁻¹", "+6114 kJ mol⁻¹", "−6114 kJ mol⁻¹"], a: 0, e: "" },
    { q: "Why do bond enthalpy calculations give approximate values?", o: ["Mean bond enthalpies are averages over many compounds", "Bonds don't really break", "Hess's law is wrong", "They use liquids"], a: 0, e: "" },
    { q: "Using combustion data: ΔrH = ?", o: ["ΣΔcH(reactants) − ΣΔcH(products)", "ΣΔcH(products) − ΣΔcH(reactants)", "ΣΔcH(all)", "Bonds broken − bonds made"], a: 0, e: "" },
    { q: "H–H 436, Cl–Cl 243, H–Cl 432. ΔH for H₂ + Cl₂ → 2HCl?", o: ["−185 kJ mol⁻¹", "+185 kJ mol⁻¹", "+247 kJ mol⁻¹", "−864 kJ mol⁻¹"], a: 0, e: "" },
    { q: "Bond enthalpy is defined for bonds in the…", o: ["Gaseous state", "Liquid state", "Solid state", "Aqueous state"], a: 0, e: "" }
  ],
  flashcards: [
    ["Hess's law", "ΔH is independent of the route, given the same start and end conditions"],
    ["ΔrH from formation data", "Σ products − Σ reactants"],
    ["ΔrH from combustion data", "Σ reactants − Σ products"],
    ["Bond enthalpy", "Enthalpy to break 1 mol of a bond in the gas phase (positive)"],
    ["Mean bond enthalpy", "Average over many compounds; gives approximate ΔH"],
    ["ΔH from bond enthalpies", "Bonds broken − bonds made"],
    ["Why bond enthalpy ΔH differs from data book", "Mean values; assumes all species are gaseous"]
  ]
});

S2Data.add({
  id: "3g", group: 3, y1: true, title: "Reaction rates",
  summary: "Collision theory, factors affecting rate, Maxwell–Boltzmann distributions, catalysts and measuring rates.",
  notes: R`
<h3>Collision theory</h3>
<p>For a reaction, particles must <b>collide</b> with <b>energy ≥ the activation energy</b> (E<sub>a</sub>) and in the correct <b>orientation</b>. The rate depends on the <b>frequency of successful collisions</b>.</p>
<ul>
<li><b>Concentration / pressure</b> ↑: more particles per unit volume → more frequent collisions.</li>
<li><b>Surface area</b> ↑: more particles exposed → more frequent collisions.</li>
<li><b>Temperature</b> ↑: particles have more energy, so a much <b>greater proportion have E ≥ E<sub>a</sub></b>; collisions are also slightly more frequent. The energy effect matters more.</li>
<li><b>Catalyst</b>: provides an <b>alternative route with lower E<sub>a</sub></b>, so more particles have enough energy.</li>
</ul>
<h3>Maxwell–Boltzmann distribution</h3>
<ul>
<li>Graph of number of molecules against energy. Starts at the <b>origin</b> (no molecules have zero energy), rises to a peak (most probable energy), and the tail <b>never touches the x-axis</b>.</li>
<li>The area under the curve = total number of molecules.</li>
<li><b>Higher temperature</b>: the peak moves <b>right and lower</b>, the curve spreads out, the area stays the same, and more area lies beyond E<sub>a</sub>.</li>
<li><b>Catalyst</b>: the curve is unchanged, but E<sub>a</sub> moves left, so more area lies beyond it.</li>
</ul>
<h3>Catalysts</h3>
<ul>
<li><b>Homogeneous</b>: same phase as reactants (e.g. H<sup>+</sup> in esterification). <b>Heterogeneous</b>: different phase (e.g. iron in the Haber process; Pt/Rh in catalytic converters).</li>
<li>Economic and environmental benefits: lower temperatures and pressures → less energy, fewer CO<sub>2</sub> emissions, and sometimes better atom economy with fewer steps.</li>
<li>Catalysts are not used up, but heterogeneous catalysts can be <b>poisoned</b>.</li>
</ul>
<h3>Measuring rate</h3>
<p>Rate = change in amount (or concentration) ÷ time. Methods: gas volume in a syringe, mass loss on a balance, colour change (colorimeter), or time for a precipitate to hide a cross. On a graph, the rate at a moment is the <b>gradient of the tangent</b>.</p>
`,
  quiz: [
    { q: "Why does increasing temperature greatly increase rate?", o: ["A much greater proportion of molecules have energy ≥ Ea", "Ea decreases", "More molecules are made", "Collisions become gentler"], a: 0, e: "" },
    { q: "On a Maxwell–Boltzmann curve, higher temperature makes the peak…", o: ["Lower and further right", "Higher and further left", "Higher and further right", "Unchanged"], a: 0, e: "" },
    { q: "How does a catalyst speed up a reaction?", o: ["Provides an alternative route with lower Ea", "Raises the temperature", "Increases collision energy", "Shifts the equilibrium"], a: 0, e: "" },
    { q: "Why doesn't the M–B curve touch the x-axis at high energy?", o: ["There's no maximum energy a molecule can have", "All molecules have high energy", "It's a mistake", "Ea is infinite"], a: 0, e: "" },
    { q: "Iron in the Haber process is a…", o: ["Heterogeneous catalyst", "Homogeneous catalyst", "Reactant", "Inhibitor"], a: 0, e: "" },
    { q: "How do you find the rate at a particular time from a concentration–time graph?", o: ["Gradient of the tangent at that time", "Area under the curve", "y-intercept", "Final value ÷ time"], a: 0, e: "" },
    { q: "What does the area under an M–B curve represent?", o: ["Total number of molecules", "Activation energy", "Rate", "Enthalpy change"], a: 0, e: "" },
    { q: "A catalyst changes the M–B distribution by…", o: ["Not changing the curve, but moving Ea to the left", "Moving the peak right", "Adding more molecules", "Flattening the curve"], a: 0, e: "" }
  ],
  flashcards: [
    ["Collision theory", "Collide with E ≥ Ea in the correct orientation"],
    ["Activation energy", "Minimum energy needed for a collision to lead to reaction"],
    ["Temperature and rate", "More molecules with E ≥ Ea (main effect) + more frequent collisions"],
    ["M–B curve shape", "Starts at origin; peak; tail never touches x-axis"],
    ["M–B at higher T", "Peak lower and right; same area; more beyond Ea"],
    ["Catalyst", "Alternative route, lower Ea; not used up"],
    ["Homogeneous vs heterogeneous", "Same phase as reactants vs different phase"],
    ["Rate from a graph", "Gradient of the tangent"]
  ]
});

S2Data.add({
  id: "3h", group: 3, y1: true, title: "Chemical equilibrium",
  summary: "Dynamic equilibrium, writing Kc expressions, Le Chatelier's principle and industrial compromises.",
  notes: R`
<h3>Dynamic equilibrium</h3>
<p>In a <b>closed system</b>, a reversible reaction reaches equilibrium when the <b>forward and backward rates are equal</b> and the <b>concentrations stay constant</b> (not necessarily equal).</p>
<h3>The equilibrium constant K<sub>c</sub></h3>
<p>For aA + bB ⇌ cC + dD:</p>
<div class="box box-key"><span class="box-title">K<sub>c</sub></span>K<sub>c</sub> = [C]<sup>c</sup>[D]<sup>d</sup> ÷ ([A]<sup>a</sup>[B]<sup>b</sup>)</div>
<ul>
<li>Square brackets mean concentration in mol dm<sup>−3</sup> at equilibrium.</li>
<li><b>Homogeneous</b> equilibria: everything in the same phase. <b>Heterogeneous</b>: different phases. Leave <b>solids</b> (and liquids in excess, like water as solvent) <b>out</b> of K<sub>c</sub>.</li>
<li>Work out units by cancelling, e.g. N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>: K<sub>c</sub> = [NH<sub>3</sub>]<sup>2</sup>/([N<sub>2</sub>][H<sub>2</sub>]<sup>3</sup>), units mol<sup>−2</sup> dm<sup>6</sup>.</li>
<li>A large K<sub>c</sub> means the equilibrium lies to the right (mostly products).</li>
</ul>
<h3>Le Chatelier's principle</h3>
<p>If a system at equilibrium is disturbed, the position of equilibrium shifts to <b>oppose</b> the change.</p>
<table>
<tr><th>Change</th><th>Shift</th><th>K<sub>c</sub>?</th></tr>
<tr><td>Add reactant</td><td>Right (uses it up)</td><td>Unchanged</td></tr>
<tr><td>Increase pressure</td><td>Side with fewer gas moles</td><td>Unchanged</td></tr>
<tr><td>Increase temperature</td><td>Endothermic direction</td><td><b>Changes</b></td></tr>
<tr><td>Add catalyst</td><td>No shift; equilibrium reached faster</td><td>Unchanged</td></tr>
</table>
<div class="box box-key"><span class="box-title">Only temperature changes K<sub>c</sub></span>If the forward reaction is exothermic, raising the temperature <b>decreases</b> K<sub>c</sub>. (Topic 11 explains why with K<sub>c</sub> calculations.)</div>
<h3>Industrial compromises</h3>
<p>Haber process: N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, ΔH = −92 kJ mol<sup>−1</sup>. Low temperature gives a higher yield but too slow a rate, so a <b>compromise temperature</b> of about 450 °C is used with an iron catalyst. High pressure increases yield and rate, but is expensive and dangerous, so about 200 atm is used.</p>
<p>The same thinking applies to making ethanol by hydration of ethene and methanol from CO and H<sub>2</sub>.</p>
`,
  quiz: [
    { q: "At dynamic equilibrium…", o: ["Forward and backward rates are equal; concentrations are constant", "Concentrations are equal", "The reaction has stopped", "Only products are present"], a: 0, e: "" },
    { q: "Kc for H₂ + I₂ ⇌ 2HI?", o: ["[HI]² / ([H₂][I₂])", "[H₂][I₂] / [HI]²", "2[HI] / ([H₂][I₂])", "[HI] / ([H₂][I₂])"], a: 0, e: "" },
    { q: "Which changes the value of Kc?", o: ["Temperature", "Pressure", "Concentration", "Catalyst"], a: 0, e: "" },
    { q: "Forward reaction exothermic; temperature raised. Kc…", o: ["Decreases", "Increases", "Stays the same", "Becomes zero"], a: 0, e: "" },
    { q: "Increasing pressure for 2SO₂ + O₂ ⇌ 2SO₃ shifts equilibrium…", o: ["Right", "Left", "No change", "Depends on the catalyst"], a: 0, e: "3 gas moles → 2." },
    { q: "Units of Kc for N₂ + 3H₂ ⇌ 2NH₃?", o: ["mol⁻² dm⁶", "mol² dm⁻⁶", "No units", "mol dm⁻³"], a: 0, e: "" },
    { q: "Effect of a catalyst on equilibrium?", o: ["No shift; equilibrium is reached faster", "Shifts right", "Shifts left", "Increases Kc"], a: 0, e: "" },
    { q: "In CaCO₃(s) ⇌ CaO(s) + CO₂(g), Kc = ?", o: ["[CO₂]", "[CaO][CO₂]/[CaCO₃]", "[CaCO₃]/[CO₂]", "1"], a: 0, e: "Solids are left out." },
    { q: "Why is 450 °C used in the Haber process?", o: ["Compromise between acceptable rate and yield", "Highest yield", "Iron melts lower", "Cheapest possible temperature"], a: 0, e: "" }
  ],
  flashcards: [
    ["Dynamic equilibrium", "Closed system; rates equal; concentrations constant"],
    ["Kc expression", "[products]^coeffs ÷ [reactants]^coeffs"],
    ["Heterogeneous equilibria and Kc", "Leave out solids"],
    ["Le Chatelier's principle", "Equilibrium shifts to oppose a change"],
    ["Pressure increase", "Shifts towards fewer gas moles"],
    ["Temperature increase", "Shifts in the endothermic direction; Kc changes"],
    ["What changes Kc", "Only temperature"],
    ["Catalyst and equilibrium", "No shift; reached faster"],
    ["Haber conditions", "~450 °C, ~200 atm, iron catalyst"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Introduction to organic chemistry",
  summary: "Formulae, IUPAC naming, functional groups, structural and E/Z isomerism, reaction types and hazards.",
  notes: R`
<h3>Types of formula</h3>
<table>
<tr><th>Formula</th><th>Butan-1-ol example</th></tr>
<tr><td>Molecular</td><td>C<sub>4</sub>H<sub>10</sub>O</td></tr>
<tr><td>Empirical</td><td>C<sub>4</sub>H<sub>10</sub>O</td></tr>
<tr><td>Structural</td><td>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</td></tr>
<tr><td>Displayed</td><td>Every atom and bond drawn</td></tr>
<tr><td>Skeletal</td><td>Zig-zag carbon chain; C and H on carbons not shown; functional groups drawn in</td></tr>
<tr><td>General</td><td>C<sub>n</sub>H<sub>2n+1</sub>OH for alcohols</td></tr>
</table>
<p>A <b>homologous series</b> has the same general formula and functional group, with each member differing by CH<sub>2</sub> and showing a trend in physical properties.</p>

<h3>IUPAC naming</h3>
<ol>
<li>Find the longest carbon chain: meth, eth, prop, but, pent, hex.</li>
<li>Identify the functional group (suffix): -ane, -ene, -ol, -al, -one, -oic acid; prefixes for halogens (chloro-, bromo-) and alkyl branches (methyl-, ethyl-).</li>
<li>Number the chain to give the functional group (then branches) the <b>lowest numbers</b>.</li>
<li>List prefixes alphabetically, with di-, tri- for repeats: e.g. 2-bromo-3-methylpentane.</li>
</ol>

<h3>Isomerism</h3>
<ul>
<li><b>Structural isomers</b>: same molecular formula, different structural formula: <b>chain</b> (different carbon skeleton), <b>position</b> (functional group in a different place) or <b>functional group</b> (e.g. propanal and propanone).</li>
<li><b>Stereoisomers</b>: same structural formula, different arrangement of atoms in space.</li>
<li><b>E/Z isomerism</b> happens because there's <b>restricted rotation about the C=C double bond</b> and each carbon of the double bond has <b>two different groups</b> attached.</li>
<li>Use <b>Cahn–Ingold–Prelog priorities</b> (higher atomic number = higher priority) on each carbon. Highest-priority groups on the same side = <b>Z</b> (zusammen); opposite sides = <b>E</b> (entgegen).</li>
<li><b>cis/trans</b> is used when there's an H on each carbon: cis = same side.</li>
</ul>

<h3>Reaction types and mechanisms</h3>
<ul>
<li><b>Addition, substitution, elimination, oxidation, reduction, hydrolysis, polymerisation</b>.</li>
<li><b>Homolytic fission</b>: each atom gets one electron → <b>radicals</b> (unpaired electron, shown with a dot).</li>
<li><b>Heterolytic fission</b>: one atom gets both electrons → ions.</li>
<li><b>Nucleophile</b>: electron-pair donor (OH<sup>−</sup>, CN<sup>−</sup>, NH<sub>3</sub>). <b>Electrophile</b>: electron-pair acceptor (H<sup>+</sup>, Br<sup>δ+</sup>).</li>
<li><b>Curly arrows</b> show the movement of a pair of electrons, starting from a bond or lone pair.</li>
</ul>
<div class="box box-key"><span class="box-title">Hazards and risks</span>A <b>hazard</b> is something that could cause harm (e.g. flammable, toxic). A <b>risk</b> is the chance of harm, reduced by control measures such as using a fume cupboard, water bath instead of a flame, or smaller quantities.</div>
`,
  quiz: [
    { q: "Name CH₃CH(CH₃)CH₂CH₃.", o: ["2-methylbutane", "3-methylbutane", "pentane", "2-ethylpropane"], a: 0, e: "" },
    { q: "Why does but-2-ene show E/Z isomerism?", o: ["Restricted rotation about C=C and two different groups on each carbon", "It has a chiral carbon", "It has a ring", "Free rotation about C=C"], a: 0, e: "" },
    { q: "Propanal and propanone are…", o: ["Functional group isomers", "Chain isomers", "Position isomers", "E/Z isomers"], a: 0, e: "" },
    { q: "Homolytic fission produces…", o: ["Radicals", "Ions", "Nucleophiles only", "Electrophiles only"], a: 0, e: "" },
    { q: "A nucleophile is…", o: ["An electron-pair donor", "An electron-pair acceptor", "A radical", "A proton"], a: 0, e: "" },
    { q: "In E/Z naming, priority is decided by…", o: ["Atomic number of the attached atom", "Mass of the whole group", "Number of hydrogens", "Bond length"], a: 0, e: "" },
    { q: "1-bromobut-2-ene: highest priority groups on opposite sides. Isomer?", o: ["E", "Z", "cis", "Neither"], a: 0, e: "" },
    { q: "Which is a correct IUPAC name?", o: ["2,3-dichloropentane", "2-chloro-3-chloropentane", "3,4-dichloropentane", "dichloro-2,3-pentane"], a: 0, e: "Lowest numbers; di- prefix." },
    { q: "A curly arrow represents…", o: ["Movement of a pair of electrons", "Movement of an atom", "A single electron", "A bond breaking homolytically"], a: 0, e: "" }
  ],
  flashcards: [
    ["Homologous series", "Same general formula and functional group; each member differs by CH₂; trend in physical properties"],
    ["Skeletal formula", "Lines for C–C bonds; C and H on carbons not shown"],
    ["Structural isomers", "Same molecular formula, different structural formula (chain, position, functional group)"],
    ["Stereoisomers", "Same structural formula, different spatial arrangement"],
    ["Conditions for E/Z isomerism", "Restricted rotation about C=C; two different groups on each C"],
    ["Z isomer", "Highest-priority groups on the same side"],
    ["E isomer", "Highest-priority groups on opposite sides"],
    ["Homolytic fission", "Bond breaks with one electron to each atom → radicals"],
    ["Heterolytic fission", "Both electrons go to one atom → ions"],
    ["Nucleophile / electrophile", "Electron-pair donor / electron-pair acceptor"],
    ["Hazard vs risk", "Hazard: potential to harm; risk: chance of harm"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y1: true, title: "Alkanes",
  summary: "Fuels, combustion and pollution, cracking and reforming, and free-radical substitution.",
  notes: R`
<h3>Alkanes as fuels</h3>
<ul>
<li>Saturated hydrocarbons, C<sub>n</sub>H<sub>2n+2</sub>, obtained from crude oil by <b>fractional distillation</b>.</li>
<li><b>Cracking</b> breaks long chains into shorter, more useful alkanes and alkenes (e.g. C<sub>10</sub>H<sub>22</sub> → C<sub>8</sub>H<sub>18</sub> + C<sub>2</sub>H<sub>4</sub>). Catalytic cracking uses a zeolite catalyst at about 450 °C.</li>
<li><b>Reforming</b> converts straight-chain alkanes into branched alkanes and cyclic hydrocarbons, which burn more efficiently in engines.</li>
<li>Complete combustion: alkane + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O. Incomplete combustion: CO (toxic, binds to haemoglobin) and C (soot, particulates).</li>
</ul>
<h3>Pollutants</h3>
<ul>
<li><b>NO<sub>x</sub></b>: N<sub>2</sub> and O<sub>2</sub> react at high engine temperatures → acid rain, photochemical smog.</li>
<li><b>SO<sub>2</sub></b>: from sulfur impurities → acid rain. Removed by flue-gas desulfurisation.</li>
<li><b>Unburnt hydrocarbons</b> → smog. <b>Catalytic converters</b> (Pt/Rh) remove CO, NO<sub>x</sub> and hydrocarbons: 2CO + 2NO → 2CO<sub>2</sub> + N<sub>2</sub>.</li>
<li>Carbon dioxide → climate change. <b>Biofuels</b> are considered (nearly) carbon neutral but compete with food crops for land.</li>
</ul>
<h3>Free-radical substitution</h3>
<p>Alkanes react with halogens in <b>UV light</b>, e.g. CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl.</p>
<ol>
<li><b>Initiation</b>: Cl<sub>2</sub> → 2Cl• (homolytic fission by UV)</li>
<li><b>Propagation</b>: Cl• + CH<sub>4</sub> → CH<sub>3</sub>• + HCl, then CH<sub>3</sub>• + Cl<sub>2</sub> → CH<sub>3</sub>Cl + Cl•</li>
<li><b>Termination</b>: two radicals join, e.g. Cl• + Cl• → Cl<sub>2</sub>; CH<sub>3</sub>• + Cl• → CH<sub>3</sub>Cl; CH<sub>3</sub>• + CH<sub>3</sub>• → C<sub>2</sub>H<sub>6</sub></li>
</ol>
<p>Further substitution gives a mixture (CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub>, CCl<sub>4</sub>), so it's not a good way to make one pure product.</p>
`,
  quiz: [
    { q: "Initiation step for chlorination of methane?", o: ["Cl₂ → 2Cl•", "CH₄ → CH₃• + H•", "Cl• + CH₄ → CH₃Cl + H•", "Cl• + Cl• → Cl₂"], a: 0, e: "" },
    { q: "Which is a propagation step?", o: ["CH₃• + Cl₂ → CH₃Cl + Cl•", "Cl₂ → 2Cl•", "CH₃• + Cl• → CH₃Cl", "2CH₃• → C₂H₆"], a: 0, e: "" },
    { q: "Why is ethane found in the products of methane chlorination?", o: ["Termination: two CH₃• radicals join", "Cracking", "Propagation", "Impurities"], a: 0, e: "" },
    { q: "What does reforming do?", o: ["Converts straight chains into branched and cyclic hydrocarbons", "Breaks long chains", "Removes sulfur", "Separates fractions"], a: 0, e: "" },
    { q: "How are NOx formed in engines?", o: ["N₂ and O₂ react at high temperature", "From fuel impurities", "Incomplete combustion", "From catalytic converters"], a: 0, e: "" },
    { q: "Catalytic converters contain…", o: ["Platinum and rhodium", "Iron", "Zeolites", "Nickel"], a: 0, e: "" },
    { q: "Why is free-radical substitution a poor way to make CH₃Cl?", o: ["Further substitution gives a mixture of products", "Too slow", "Needs a catalyst", "Gives only CCl₄"], a: 0, e: "" },
    { q: "Why is CO dangerous?", o: ["Binds to haemoglobin, reducing oxygen transport", "Causes acid rain", "Greenhouse gas only", "Forms soot"], a: 0, e: "" }
  ],
  flashcards: [
    ["Cracking", "Breaking long-chain alkanes into shorter alkanes + alkenes (zeolite catalyst)"],
    ["Reforming", "Straight-chain → branched / cyclic hydrocarbons for efficient combustion"],
    ["NOx formation", "N₂ + O₂ at high engine temperatures"],
    ["Catalytic converter reaction", "2CO + 2NO → 2CO₂ + N₂ (Pt/Rh)"],
    ["Free-radical substitution conditions", "Halogen + UV light"],
    ["Initiation", "Cl₂ → 2Cl•"],
    ["Propagation (2 steps)", "Cl• + CH₄ → CH₃• + HCl; CH₃• + Cl₂ → CH₃Cl + Cl•"],
    ["Termination", "Two radicals combine, e.g. 2CH₃• → C₂H₆"],
    ["Biofuels: pro and con", "Renewable, nearly carbon neutral; use land needed for food"]
  ]
});

S2Data.add({
  id: "4c", group: 4, y1: true, title: "Alkenes",
  summary: "The C=C bond, electrophilic addition, Markovnikov's rule, test for alkenes and addition polymers.",
  notes: R`
<h3>Structure</h3>
<p>Alkenes (C<sub>n</sub>H<sub>2n</sub>) are <b>unsaturated</b>. The C=C has a σ bond and a <b>π bond</b>, formed by sideways overlap of p orbitals. The π bond is a region of high electron density above and below the plane, and is weaker than the σ bond, making alkenes reactive. Bond angles around C=C are about 120° (trigonal planar).</p>
<h3>Addition reactions</h3>
<table>
<tr><th>Reagent</th><th>Conditions</th><th>Product</th></tr>
<tr><td>H<sub>2</sub></td><td>Ni catalyst, about 150 °C</td><td>Alkane (hydrogenation)</td></tr>
<tr><td>Br<sub>2</sub> or Cl<sub>2</sub></td><td>Room temperature</td><td>Dihalogenoalkane</td></tr>
<tr><td>HBr</td><td>Room temperature</td><td>Halogenoalkane</td></tr>
<tr><td>H<sub>2</sub>O (steam)</td><td>H<sub>3</sub>PO<sub>4</sub> catalyst, 300 °C, 60 atm</td><td>Alcohol</td></tr>
<tr><td>Acidified KMnO<sub>4</sub></td><td>Room temperature</td><td>Diol (purple → colourless)</td></tr>
</table>
<div class="box box-key"><span class="box-title">Test for C=C</span>Shake with <b>bromine water</b>: orange → colourless.</div>

<h3>Electrophilic addition mechanism</h3>
<p>With HBr: the H–Br bond is polar (H<sup>δ+</sup>). The π electrons attack H<sup>δ+</sup> (curly arrow from the double bond to H), and the H–Br bond breaks heterolytically (arrow to Br). A <b>carbocation</b> intermediate forms. Br<sup>−</sup> then donates a lone pair to the positive carbon.</p>
<p>With Br<sub>2</sub>: the π electrons repel electrons in Br<sub>2</sub>, inducing a dipole (Br<sup>δ+</sup>–Br<sup>δ−</sup>), and the same steps follow.</p>
<h3>Markovnikov's rule</h3>
<p>For unsymmetrical alkenes, the <b>major product</b> forms via the <b>more stable carbocation</b>. Stability: <b>tertiary &gt; secondary &gt; primary</b>, because alkyl groups are electron-releasing and stabilise the positive charge.</p>
<p>Propene + HBr → mainly 2-bromopropane (via a secondary carbocation), with a little 1-bromopropane.</p>

<h3>Addition polymers</h3>
<ul>
<li>Many monomers join; the double bonds open up. Draw the <b>repeat unit</b> in brackets with continuation bonds and n.</li>
<li>e.g. propene → poly(propene); chloroethene → PVC.</li>
<li>Disposal: <b>landfill</b> (non-biodegradable), <b>incineration</b> (energy recovery, but toxic gases like HCl from PVC, removed by scrubbing), <b>recycling</b>, use as <b>feedstock</b> for cracking. Biodegradable and photodegradable polymers are being developed.</li>
</ul>
`,
  quiz: [
    { q: "Test for an alkene?", o: ["Bromine water: orange → colourless", "Limewater turns milky", "Acidified dichromate: orange → green", "Silver nitrate"], a: 0, e: "" },
    { q: "Major product of propene + HBr?", o: ["2-bromopropane", "1-bromopropane", "1,2-dibromopropane", "propane"], a: 0, e: "Via the more stable secondary carbocation." },
    { q: "Which carbocation is most stable?", o: ["Tertiary", "Secondary", "Primary", "Methyl"], a: 0, e: "" },
    { q: "Conditions for hydrogenation of alkenes?", o: ["Ni catalyst, about 150 °C", "UV light", "Phosphoric acid, 300 °C", "Aqueous NaOH"], a: 0, e: "" },
    { q: "What type of mechanism is alkene + HBr?", o: ["Electrophilic addition", "Nucleophilic substitution", "Free-radical substitution", "Elimination"], a: 0, e: "" },
    { q: "In alkene + HBr, the first curly arrow goes from…", o: ["The C=C π bond to Hδ+", "Br⁻ to C", "H to the C=C", "The C–H bond"], a: 0, e: "" },
    { q: "Why is a π bond more reactive than a σ bond?", o: ["Electron density is exposed above and below; weaker", "It's stronger", "It's ionic", "It has fewer electrons"], a: 0, e: "" },
    { q: "Product of ethene with acidified KMnO₄?", o: ["Ethane-1,2-diol", "Ethanol", "Ethanoic acid", "Ethane"], a: 0, e: "" },
    { q: "Why is burning PVC a problem?", o: ["Releases HCl and other toxic gases", "It doesn't burn", "It produces only water", "It's biodegradable"], a: 0, e: "" }
  ],
  flashcards: [
    ["C=C double bond", "One σ bond + one π bond (sideways p overlap)"],
    ["Bromine water test", "Orange → colourless with C=C"],
    ["Hydrogenation conditions", "H₂, Ni catalyst, ~150 °C"],
    ["Hydration conditions", "Steam, H₃PO₄ catalyst, 300 °C, 60 atm"],
    ["Electrophile", "Electron-pair acceptor, e.g. Hδ+ in HBr"],
    ["Electrophilic addition steps", "π electrons attack electrophile → carbocation → nucleophile attacks carbocation"],
    ["Markovnikov's rule", "Major product forms via the most stable carbocation"],
    ["Carbocation stability", "Tertiary > secondary > primary (alkyl groups release electrons)"],
    ["Addition polymer repeat unit", "Opened C=C in brackets with continuation bonds, n"],
    ["Polymer disposal options", "Landfill, incineration (with scrubbing), recycling, feedstock"]
  ]
});

S2Data.add({
  id: "4d", group: 4, y1: true, title: "Alcohols",
  summary: "Classification, combustion, oxidation with dichromate, halogenation, dehydration and practical techniques.",
  notes: R`
<h3>Classification</h3>
<p><b>Primary</b> (C–OH carbon attached to one carbon), <b>secondary</b> (two), <b>tertiary</b> (three).</p>
<h3>Reactions</h3>
<ul>
<li><b>Combustion</b>: C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O.</li>
<li><b>Halogenation</b>: with PCl<sub>5</sub> (misty fumes of HCl: a test for –OH); with HBr made from KBr + 50% H<sub>2</sub>SO<sub>4</sub>; with PI<sub>3</sub> (red phosphorus + iodine).</li>
<li><b>Dehydration</b>: heat with concentrated H<sub>3</sub>PO<sub>4</sub> (or pass vapour over hot Al<sub>2</sub>O<sub>3</sub>) → alkene + water.</li>
</ul>
<h3>Oxidation with acidified potassium dichromate(VI)</h3>
<p>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> / dilute H<sub>2</sub>SO<sub>4</sub> is the oxidising agent: <b>orange Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> → green Cr<sup>3+</sup></b>. In equations, write the oxidising agent as [O].</p>
<table>
<tr><th>Alcohol</th><th>Conditions</th><th>Product</th></tr>
<tr><td>Primary</td><td>Heat gently, <b>distil off</b> the product immediately</td><td><b>Aldehyde</b></td></tr>
<tr><td>Primary</td><td>Excess oxidising agent, <b>heat under reflux</b></td><td><b>Carboxylic acid</b></td></tr>
<tr><td>Secondary</td><td>Heat under reflux</td><td><b>Ketone</b></td></tr>
<tr><td>Tertiary</td><td>—</td><td>Not oxidised (stays orange)</td></tr>
</table>
<p>e.g. CH<sub>3</sub>CH<sub>2</sub>OH + [O] → CH<sub>3</sub>CHO + H<sub>2</sub>O; CH<sub>3</sub>CH<sub>2</sub>OH + 2[O] → CH<sub>3</sub>COOH + H<sub>2</sub>O.</p>

<h3>Practical techniques</h3>
<ul>
<li><b>Heating under reflux</b>: vertical condenser so volatile reactants and products condense and return to the flask; allows long heating without loss.</li>
<li><b>Distillation</b>: separates a volatile product by boiling point.</li>
<li><b>Purification</b>: use a separating funnel to remove the aqueous layer; wash with sodium hydrogencarbonate to remove acid (release pressure!); dry with anhydrous CaCl<sub>2</sub> or MgSO<sub>4</sub>; redistil, collecting at the boiling point.</li>
<li>Anti-bumping granules give smooth boiling. Never heat a sealed apparatus.</li>
</ul>
`,
  quiz: [
    { q: "Product of oxidising propan-2-ol?", o: ["Propanone", "Propanal", "Propanoic acid", "Propene"], a: 0, e: "Secondary → ketone." },
    { q: "How do you get an aldehyde from a primary alcohol?", o: ["Distil off as it forms", "Reflux with excess oxidant", "Use a tertiary alcohol", "Add PCl₅"], a: 0, e: "" },
    { q: "Colour change of acidified dichromate when it oxidises an alcohol?", o: ["Orange → green", "Purple → colourless", "Green → orange", "Colourless → brown"], a: 0, e: "" },
    { q: "Which alcohol is not oxidised by acidified dichromate?", o: ["2-methylpropan-2-ol", "Ethanol", "Propan-2-ol", "Butan-1-ol"], a: 0, e: "Tertiary." },
    { q: "Test for an –OH group using PCl₅?", o: ["Misty fumes of HCl", "Orange to green", "Squeaky pop", "White precipitate"], a: 0, e: "" },
    { q: "Why heat under reflux?", o: ["Volatile substances condense and return, allowing long heating", "To remove the product", "To dry the product", "To cool the reaction"], a: 0, e: "" },
    { q: "What does anhydrous MgSO₄ do?", o: ["Removes water (drying agent)", "Removes acid", "Catalyses", "Oxidises"], a: 0, e: "" },
    { q: "Dehydrating ethanol gives…", o: ["Ethene", "Ethanal", "Ethanoic acid", "Ethane"], a: 0, e: "" },
    { q: "Why wash an organic product with NaHCO₃ solution?", o: ["To remove acidic impurities", "To dry it", "To oxidise it", "To make it denser"], a: 0, e: "" }
  ],
  flashcards: [
    ["Oxidising agent for alcohols", "Acidified K₂Cr₂O₇: orange → green"],
    ["Primary alcohol → aldehyde", "Gentle heat, distil off immediately"],
    ["Primary alcohol → carboxylic acid", "Excess oxidant, heat under reflux"],
    ["Secondary alcohol oxidised", "Ketone (reflux)"],
    ["Tertiary alcohol + dichromate", "No reaction (stays orange)"],
    ["Dehydration of alcohols", "Conc H₃PO₄, heat → alkene + H₂O"],
    ["PCl₅ + alcohol", "Misty fumes of HCl; chloroalkane"],
    ["Reflux", "Heating with a vertical condenser so volatiles return"],
    ["Purifying an organic liquid", "Separating funnel → wash (NaHCO₃) → dry (MgSO₄/CaCl₂) → distil"],
    ["Ethanol oxidation to acid equation", "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O"]
  ]
});

S2Data.add({
  id: "4e", group: 4, y1: true, title: "Halogenoalkanes",
  summary: "Classification, nucleophilic substitution and elimination, and rates of hydrolysis.",
  notes: R`
<h3>Classification</h3>
<p><b>Primary</b>: the C–X carbon is bonded to one other carbon. <b>Secondary</b>: two. <b>Tertiary</b>: three.</p>
<h3>Reactivity</h3>
<ul>
<li>The C–X bond is polar (C<sup>δ+</sup>), so the carbon is attacked by nucleophiles.</li>
<li>Rate of hydrolysis is controlled by <b>bond enthalpy</b>, not polarity: <b>C–I &gt; C–Br &gt; C–Cl</b> (C–I is weakest, so iodoalkanes react fastest).</li>
<li>Experiment: warm halogenoalkanes with aqueous ethanolic <b>silver nitrate</b>. Water hydrolyses them, the halide ion forms, and Ag<sup>+</sup> precipitates it. Iodoalkane gives yellow AgI fastest.</li>
<li>Tertiary halogenoalkanes hydrolyse faster than primary.</li>
</ul>
<h3>Nucleophilic substitution</h3>
<table>
<tr><th>Nucleophile</th><th>Conditions</th><th>Product</th></tr>
<tr><td>OH<sup>−</sup> (aq NaOH/KOH)</td><td>Heat under reflux, aqueous</td><td>Alcohol</td></tr>
<tr><td>H<sub>2</sub>O</td><td>Warm (slow)</td><td>Alcohol</td></tr>
<tr><td>CN<sup>−</sup> (KCN)</td><td>Ethanol, reflux</td><td>Nitrile (chain + 1 carbon)</td></tr>
<tr><td>NH<sub>3</sub></td><td>Excess, concentrated, ethanol, heat in sealed tube</td><td>Primary amine</td></tr>
</table>
<p>Mechanism (S<sub>N</sub>2, primary): the nucleophile's lone pair attacks C<sup>δ+</sup> while the C–X bond breaks and X<sup>−</sup> leaves. Tertiary halogenoalkanes react via S<sub>N</sub>1: C–X breaks first, forming a carbocation that the nucleophile then attacks.</p>
<h3>Elimination</h3>
<p>With <b>KOH in ethanol</b>, heated under reflux, OH<sup>−</sup> acts as a <b>base</b>, removing H<sup>+</sup> from the carbon next to C–X. An <b>alkene</b> forms, plus H<sub>2</sub>O and X<sup>−</sup>. 2-bromopropane → propene.</p>
<div class="box box-key"><span class="box-title">Aqueous vs ethanolic</span><b>Aqueous</b> hydroxide → substitution (alcohol). <b>Ethanolic</b> hydroxide → elimination (alkene). Tertiary halogenoalkanes favour elimination.</div>
<h3>Uses and problems</h3>
<p>CFCs were used as refrigerants and propellants. Cl• radicals released by UV in the stratosphere catalyse ozone breakdown (Cl• + O<sub>3</sub> → ClO• + O<sub>2</sub>; ClO• + O<sub>3</sub> → Cl• + 2O<sub>2</sub>), so they were banned.</p>
`,
  quiz: [
    { q: "Which halogenoalkane hydrolyses fastest?", o: ["1-iodobutane", "1-bromobutane", "1-chlorobutane", "1-fluorobutane"], a: 0, e: "C–I is the weakest bond." },
    { q: "What controls the rate of hydrolysis of halogenoalkanes?", o: ["C–X bond enthalpy", "C–X bond polarity", "Chain length", "Size of the nucleophile"], a: 0, e: "" },
    { q: "Conditions to make an alkene from a halogenoalkane?", o: ["KOH in ethanol, heat under reflux", "Aqueous NaOH, warm", "KCN in ethanol", "Excess NH₃"], a: 0, e: "" },
    { q: "Product of 1-bromopropane + KCN in ethanol?", o: ["Butanenitrile", "Propanenitrile", "Propan-1-ol", "Propene"], a: 0, e: "Chain gains a carbon." },
    { q: "In nucleophilic substitution, the nucleophile attacks…", o: ["The δ+ carbon", "The halogen", "A hydrogen", "The C=C"], a: 0, e: "" },
    { q: "2-bromo-2-methylpropane is a…", o: ["Tertiary halogenoalkane", "Primary", "Secondary", "Quaternary"], a: 0, e: "" },
    { q: "In elimination, OH⁻ acts as a…", o: ["Base", "Nucleophile", "Electrophile", "Radical"], a: 0, e: "" },
    { q: "Why does excess ammonia give mainly the primary amine?", o: ["Reduces further substitution of the amine", "Makes it faster", "Prevents elimination", "Neutralises HBr only"], a: 0, e: "" },
    { q: "How do CFCs damage the ozone layer?", o: ["UV releases Cl• radicals that catalyse O₃ breakdown", "They absorb all UV", "They react with N₂", "They form acid rain"], a: 0, e: "" }
  ],
  flashcards: [
    ["Primary / secondary / tertiary halogenoalkane", "C–X carbon bonded to 1 / 2 / 3 other carbons"],
    ["Rate of hydrolysis order", "C–I > C–Br > C–Cl (bond enthalpy decides)"],
    ["AgNO₃ hydrolysis test", "Warm with ethanolic AgNO₃; time for precipitate; AgI fastest"],
    ["OH⁻ substitution conditions", "Aqueous NaOH/KOH, heat under reflux → alcohol"],
    ["CN⁻ substitution", "KCN in ethanol, reflux → nitrile (+1 C)"],
    ["NH₃ substitution", "Excess conc NH₃ in ethanol, heat, sealed tube → amine"],
    ["Elimination conditions", "KOH in ethanol, heat under reflux → alkene"],
    ["SN2", "One step: nucleophile attacks as C–X breaks (primary)"],
    ["SN1", "C–X breaks first → carbocation → nucleophile attacks (tertiary)"],
    ["CFC ozone reactions", "Cl• + O₃ → ClO• + O₂; ClO• + O₃ → Cl• + 2O₂"]
  ]
});

S2Data.add({
  id: "4f", group: 4, y1: true, title: "Mass spectrometry and infrared spectroscopy",
  summary: "Using molecular ion and fragment peaks, and identifying bonds from IR absorptions.",
  notes: R`
<h3>Mass spectrometry of organic compounds</h3>
<ul>
<li>The <b>molecular ion</b> M<sup>+</sup> peak at the highest m/z gives the M<sub>r</sub>. A small <b>M+1</b> peak comes from <sup>13</sup>C.</li>
<li>Molecular ions <b>fragment</b>: M<sup>+</sup> → X<sup>+</sup> + Y•. Only the charged fragment is detected.</li>
<li>Common fragments: 15 CH<sub>3</sub><sup>+</sup>, 29 C<sub>2</sub>H<sub>5</sub><sup>+</sup> or CHO<sup>+</sup>, 31 CH<sub>2</sub>OH<sup>+</sup>, 43 C<sub>3</sub>H<sub>7</sub><sup>+</sup> or CH<sub>3</sub>CO<sup>+</sup>, 45 COOH<sup>+</sup>.</li>
<li>Fragmentation patterns can distinguish isomers: e.g. propan-1-ol has a peak at 31 (CH<sub>2</sub>OH<sup>+</sup>) but propan-2-ol has 45 (CH<sub>3</sub>CHOH<sup>+</sup>).</li>
<li>Halogen compounds: Cl gives M and M+2 peaks in a 3 : 1 ratio; Br gives M and M+2 in about 1 : 1.</li>
</ul>
<h3>Infrared spectroscopy</h3>
<p>Bonds absorb IR radiation at particular frequencies, making them vibrate (stretch or bend) more. The spectrum shows % transmittance against <b>wavenumber</b> (cm<sup>−1</sup>); absorptions are dips.</p>
<table>
<tr><th>Bond</th><th>Wavenumber / cm<sup>−1</sup></th><th>Appearance</th></tr>
<tr><td>O–H (alcohol)</td><td>3750–3200</td><td>Broad</td></tr>
<tr><td>O–H (carboxylic acid)</td><td>3300–2500</td><td>Very broad</td></tr>
<tr><td>N–H (amine)</td><td>3500–3300</td><td>Medium</td></tr>
<tr><td>C–H</td><td>3000–2850</td><td>Sharp</td></tr>
<tr><td>C=O</td><td>1750–1650</td><td>Strong, sharp</td></tr>
<tr><td>C=C</td><td>1669–1645</td><td>Medium</td></tr>
<tr><td>C–O</td><td>1300–1000</td><td>Strong</td></tr>
</table>
<p>The <b>fingerprint region</b> (below about 1500 cm<sup>−1</sup>) is unique to each compound: match against a database to identify it. IR can also monitor reactions, e.g. the oxidation of an alcohol (O–H disappears, C=O appears), and measure CO<sub>2</sub> and other greenhouse gases, which absorb IR.</p>
`,
  quiz: [
    { q: "A broad absorption at 3300 cm⁻¹ and none at 1700 cm⁻¹ suggests…", o: ["An alcohol", "A ketone", "A carboxylic acid", "An alkane"], a: 0, e: "" },
    { q: "A very broad absorption 3300–2500 plus a strong peak at 1710 cm⁻¹ suggests…", o: ["A carboxylic acid", "An alcohol", "An aldehyde", "An ester"], a: 0, e: "" },
    { q: "Peak at m/z 15 corresponds to…", o: ["CH₃⁺", "C₂H₅⁺", "CHO⁺", "OH⁺"], a: 0, e: "" },
    { q: "Which peak gives Mr?", o: ["The molecular ion peak (highest m/z, ignoring M+1)", "The tallest peak", "The first peak", "The M+1 peak"], a: 0, e: "" },
    { q: "A compound shows M and M+2 peaks in a 1 : 1 ratio. It contains…", o: ["Bromine", "Chlorine", "Iodine", "Fluorine"], a: 0, e: "" },
    { q: "What happens when a bond absorbs IR radiation?", o: ["It vibrates more (stretches/bends)", "It breaks", "It ionises", "It emits light"], a: 0, e: "" },
    { q: "Why is the fingerprint region useful?", o: ["Pattern unique to each compound; matched against a database", "Shows the Mr", "Identifies the halogen", "Shows O–H only"], a: 0, e: "" },
    { q: "Which fragment helps tell propan-1-ol from propan-2-ol?", o: ["m/z 31 (CH₂OH⁺) in propan-1-ol", "m/z 15 in both", "M⁺ at 60", "m/z 43 only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Molecular ion peak", "Highest m/z (excluding M+1); gives Mr"],
    ["M+1 peak", "Due to ¹³C"],
    ["Fragmentation", "M⁺ → X⁺ + Y•; only the ion is detected"],
    ["m/z 29", "C₂H₅⁺ or CHO⁺"],
    ["m/z 43", "C₃H₇⁺ or CH₃CO⁺"],
    ["Cl / Br isotope patterns", "Cl: M, M+2 3:1; Br: M, M+2 1:1"],
    ["O–H alcohol IR", "3750–3200 cm⁻¹, broad"],
    ["O–H acid IR", "3300–2500 cm⁻¹, very broad"],
    ["C=O IR", "1750–1650 cm⁻¹, strong"],
    ["Fingerprint region", "Below ~1500 cm⁻¹; unique; compare with database"]
  ]
});

S2Data.add({
  id: "5a", group: 5, y2: true, title: "Rate equations and orders",
  summary: "Rate equations, orders, rate constants, half-life and finding orders from experiments and graphs.",
  notes: R`
<h3>Rate equations</h3>
<div class="box box-key"><span class="box-title">Rate = k[A]<sup>m</sup>[B]<sup>n</sup></span>m and n are the <b>orders</b> with respect to A and B (found by experiment, not from the equation). The <b>overall order</b> is m + n. k is the <b>rate constant</b>.</div>
<ul>
<li><b>Zero order</b>: changing [A] has no effect on rate.</li>
<li><b>First order</b>: doubling [A] doubles the rate.</li>
<li><b>Second order</b>: doubling [A] quadruples the rate.</li>
<li>Units of k: rearrange k = rate ÷ (concentrations). Rate is mol dm<sup>−3</sup> s<sup>−1</sup>. First order overall: s<sup>−1</sup>. Second: dm<sup>3</sup> mol<sup>−1</sup> s<sup>−1</sup>. Third: dm<sup>6</sup> mol<sup>−2</sup> s<sup>−1</sup>.</li>
</ul>
<h3>Finding orders</h3>
<ul>
<li><b>Initial rates method</b>: change one concentration at a time and compare the initial rate. Initial rates come from the gradient of a tangent at t = 0, or from a <b>clock reaction</b> (rate ∝ 1/time).</li>
<li><b>Continuous monitoring</b>: plot concentration against time.
  <ul>
  <li>Zero order: a <b>straight line</b> with negative gradient.</li>
  <li>First order: a curve with a <b>constant half-life</b>.</li>
  <li>Second order: a curve with increasing half-life.</li>
  </ul></li>
<li><b>Rate–concentration graphs</b>: zero order is a horizontal line; first order is a straight line through the origin; second order is a curve upwards (parabola).</li>
</ul>
<h3>Half-life</h3>
<p>For a first-order reaction, the half-life is constant: <b>k = ln 2 ÷ t<sub>½</sub></b>. Radioactive decay is first order.</p>
<p><b>Example</b>: half-life of 35 s. k = 0.693 ÷ 35 = <b>0.0198 s<sup>−1</sup></b>.</p>
<h3>Measuring techniques</h3>
<p>Colorimetry (colour change), titration of samples after <b>quenching</b>, measuring gas volume, mass loss, or pH or conductivity changes.</p>
<p>Iodine clock example: H<sub>2</sub>O<sub>2</sub> + 2I<sup>−</sup> + 2H<sup>+</sup> → I<sub>2</sub> + 2H<sub>2</sub>O, with a fixed small amount of thiosulfate and starch; time how long until the blue-black colour appears.</p>
`,
  quiz: [
    { q: "Rate = k[A]²[B]. Overall order?", o: ["3", "2", "1", "0"], a: 0, e: "" },
    { q: "Doubling [A] quadruples the rate. Order with respect to A?", o: ["2", "1", "0", "4"], a: 0, e: "" },
    { q: "Units of k for a second-order reaction?", o: ["dm³ mol⁻¹ s⁻¹", "s⁻¹", "mol dm⁻³ s⁻¹", "dm⁶ mol⁻² s⁻¹"], a: 0, e: "" },
    { q: "A concentration–time graph is a straight line. Order?", o: ["Zero", "First", "Second", "Third"], a: 0, e: "" },
    { q: "Constant half-life indicates…", o: ["First order", "Zero order", "Second order", "No reaction"], a: 0, e: "" },
    { q: "t½ = 20 s for a first-order reaction. k = ?", o: ["0.0347 s⁻¹", "13.9 s⁻¹", "0.05 s⁻¹", "28.9 s⁻¹"], a: 0, e: "0.693 ÷ 20." },
    { q: "In a clock reaction, the initial rate is proportional to…", o: ["1 / time", "time", "time²", "log time"], a: 0, e: "" },
    { q: "Rate–concentration graph: straight line through the origin. Order?", o: ["First", "Zero", "Second", "Can't tell"], a: 0, e: "" },
    { q: "Exp 1: [A] 0.1, [B] 0.1, rate 2×10⁻⁴. Exp 2: [A] 0.2, [B] 0.1, rate 4×10⁻⁴. Exp 3: [A] 0.1, [B] 0.2, rate 2×10⁻⁴. Rate equation?", o: ["Rate = k[A]", "Rate = k[A][B]", "Rate = k[B]", "Rate = k[A]²"], a: 0, e: "" }
  ],
  flashcards: [
    ["Rate equation", "Rate = k[A]^m[B]^n; orders found experimentally"],
    ["Zero order", "Rate unaffected by [A]; straight line on conc–time"],
    ["First order", "Rate ∝ [A]; constant half-life"],
    ["Second order", "Rate ∝ [A]²; doubling quadruples"],
    ["Units of k (2nd order)", "dm³ mol⁻¹ s⁻¹"],
    ["First-order half-life", "k = ln 2 / t½"],
    ["Initial rates method", "Change one concentration at a time; compare initial rates"],
    ["Clock reaction", "Rate ∝ 1/time"],
    ["Quenching", "Stopping a reaction in a sample (cooling/diluting/neutralising) before analysis"]
  ]
});

S2Data.add({
  id: "5b", group: 5, y2: true, title: "Mechanisms and the Arrhenius equation",
  summary: "Rate-determining step, linking rate equations to mechanisms, SN1 vs SN2, and finding Ea.",
  notes: R`
<h3>Rate-determining step</h3>
<ul>
<li>The <b>rate-determining step</b> (RDS) is the <b>slowest step</b> in a mechanism.</li>
<li>Species in the rate equation (and their orders) show what's in the RDS. Species not in the rate equation react <b>after</b> the RDS.</li>
<li>Catalysts can appear in the rate equation.</li>
</ul>
<p><b>Example</b>: 2NO<sub>2</sub> + F<sub>2</sub> → 2NO<sub>2</sub>F, rate = k[NO<sub>2</sub>][F<sub>2</sub>]. RDS: NO<sub>2</sub> + F<sub>2</sub> → NO<sub>2</sub>F + F. Fast step: NO<sub>2</sub> + F → NO<sub>2</sub>F.</p>
<h3>S<sub>N</sub>1 vs S<sub>N</sub>2</h3>
<table>
<tr><th></th><th>S<sub>N</sub>1</th><th>S<sub>N</sub>2</th></tr>
<tr><td>Halogenoalkane</td><td>Tertiary</td><td>Primary</td></tr>
<tr><td>Rate equation</td><td>Rate = k[RX]</td><td>Rate = k[RX][OH<sup>−</sup>]</td></tr>
<tr><td>Mechanism</td><td>Two steps: C–X breaks (slow) → carbocation; then OH<sup>−</sup> attacks</td><td>One step via a transition state</td></tr>
<tr><td>Optical activity</td><td>Planar carbocation, attacked from either side → <b>racemic mixture</b></td><td>Inversion of configuration</td></tr>
</table>
<p>Tertiary halogenoalkanes go S<sub>N</sub>1 because the tertiary carbocation is stabilised by alkyl groups, and the bulky groups hinder attack from behind.</p>
<h3>Propanone and iodine</h3>
<p>CH<sub>3</sub>COCH<sub>3</sub> + I<sub>2</sub> → CH<sub>3</sub>COCH<sub>2</sub>I + HI (acid catalysed). Rate = k[CH<sub>3</sub>COCH<sub>3</sub>][H<sup>+</sup>]: zero order in I<sub>2</sub>, so iodine reacts after the RDS. Follow it with a colorimeter or by titrating quenched samples.</p>
<h3>Arrhenius equation</h3>
<div class="box box-key"><span class="box-title">k = Ae<sup>−Ea/RT</sup></span>ln k = −E<sub>a</sub>/R × (1/T) + ln A</div>
<ul>
<li>Plot <b>ln k against 1/T</b>: straight line, gradient = <b>−E<sub>a</sub>/R</b>, intercept = ln A. R = 8.31 J mol<sup>−1</sup> K<sup>−1</sup>.</li>
<li>So E<sub>a</sub> = −gradient × 8.31 (in J mol<sup>−1</sup>).</li>
<li>Rate ∝ 1/time, so ln(1/t) can be used in place of ln k.</li>
<li>A is the pre-exponential factor (related to collision frequency and orientation).</li>
</ul>
<p><b>Example</b>: gradient = −6500 K. E<sub>a</sub> = 6500 × 8.31 = 54 000 J mol<sup>−1</sup> = <b>54.0 kJ mol<sup>−1</sup></b>.</p>
`,
  quiz: [
    { q: "The rate-determining step is…", o: ["The slowest step", "The fastest step", "The first step always", "The last step"], a: 0, e: "" },
    { q: "Rate = k[A]. Reaction A + B → C. B reacts…", o: ["After the RDS", "In the RDS", "Not at all", "Before A"], a: 0, e: "" },
    { q: "Rate equation for 2-bromo-2-methylpropane + OH⁻?", o: ["Rate = k[RBr]", "Rate = k[RBr][OH⁻]", "Rate = k[OH⁻]", "Rate = k[RBr]²"], a: 0, e: "SN1." },
    { q: "SN1 on a chiral halogenoalkane gives…", o: ["A racemic mixture", "One enantiomer", "No product", "An alkene only"], a: 0, e: "" },
    { q: "Graph for Arrhenius analysis?", o: ["ln k against 1/T", "k against T", "ln k against T", "1/k against T"], a: 0, e: "" },
    { q: "Gradient of ln k vs 1/T is −8000 K. Ea = ?", o: ["66.5 kJ mol⁻¹", "8.0 kJ mol⁻¹", "962 kJ mol⁻¹", "0.96 kJ mol⁻¹"], a: 0, e: "8000 × 8.31 = 66 480 J." },
    { q: "Iodination of propanone: order with respect to I₂?", o: ["Zero", "First", "Second", "Half"], a: 0, e: "" },
    { q: "Why do tertiary halogenoalkanes react by SN1?", o: ["Stable tertiary carbocation; steric hindrance blocks SN2", "They're primary", "No carbocation forms", "They have no Cδ+"], a: 0, e: "" },
    { q: "In ln k = −Ea/RT + ln A, the intercept is…", o: ["ln A", "−Ea/R", "R", "Ea"], a: 0, e: "" }
  ],
  flashcards: [
    ["Rate-determining step", "Slowest step; species in it appear in the rate equation"],
    ["Species not in rate equation", "React after the RDS"],
    ["SN1", "Tertiary; rate = k[RX]; carbocation; racemic mixture"],
    ["SN2", "Primary; rate = k[RX][OH⁻]; one step; inversion"],
    ["Iodination of propanone", "Rate = k[propanone][H⁺]; zero order in I₂"],
    ["Arrhenius equation", "k = Ae^(−Ea/RT)"],
    ["Arrhenius plot", "ln k vs 1/T; gradient −Ea/R"],
    ["Ea from gradient", "Ea = −gradient × 8.31 (J mol⁻¹)"]
  ]
});

S2Data.add({
  id: "5c", group: 5, y2: true, title: "Equilibrium constants: Kc and Kp",
  summary: "Calculating Kc from equilibrium amounts, partial pressures and Kp, and how temperature affects K.",
  notes: R`
<h3>Calculating K<sub>c</sub></h3>
<p>Use an <b>ICE table</b>: Initial moles, Change, Equilibrium moles. Then divide by the volume to get concentrations.</p>
<p><b>Example</b>: 1.00 mol of ethanoic acid and 1.00 mol of ethanol reach equilibrium in volume V. 0.67 mol of ester has formed.</p>
<table>
<tr><th></th><th>CH<sub>3</sub>COOH</th><th>C<sub>2</sub>H<sub>5</sub>OH</th><th>CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub></th><th>H<sub>2</sub>O</th></tr>
<tr><td>Initial</td><td>1.00</td><td>1.00</td><td>0</td><td>0</td></tr>
<tr><td>Change</td><td>−0.67</td><td>−0.67</td><td>+0.67</td><td>+0.67</td></tr>
<tr><td>Equilibrium</td><td>0.33</td><td>0.33</td><td>0.67</td><td>0.67</td></tr>
</table>
<p>K<sub>c</sub> = (0.67/V)(0.67/V) ÷ ((0.33/V)(0.33/V)) = <b>4.1</b> (V cancels; no units).</p>
<h3>Partial pressures and K<sub>p</sub></h3>
<ul>
<li><b>Mole fraction</b>: x<sub>A</sub> = moles of A ÷ total moles of gas.</li>
<li><b>Partial pressure</b>: p<sub>A</sub> = x<sub>A</sub> × total pressure. Partial pressures add up to the total pressure.</li>
<li>For aA + bB ⇌ cC + dD (gases): <b>K<sub>p</sub> = p<sub>C</sub><sup>c</sup> p<sub>D</sub><sup>d</sup> ÷ (p<sub>A</sub><sup>a</sup> p<sub>B</sub><sup>b</sup>)</b>, units from atm or kPa.</li>
<li>Heterogeneous K<sub>p</sub>: include only the gases.</li>
</ul>
<p><b>Example</b>: N<sub>2</sub>O<sub>4</sub> ⇌ 2NO<sub>2</sub> at 100 kPa. At equilibrium there are 0.40 mol N<sub>2</sub>O<sub>4</sub> and 0.20 mol NO<sub>2</sub>. x(N<sub>2</sub>O<sub>4</sub>) = 0.667, x(NO<sub>2</sub>) = 0.333. p = 66.7 and 33.3 kPa. K<sub>p</sub> = 33.3<sup>2</sup> ÷ 66.7 = <b>16.6 kPa</b>.</p>
<h3>What changes K</h3>
<div class="box box-key"><span class="box-title">Only temperature</span>For an <b>exothermic</b> forward reaction, increasing temperature <b>decreases</b> K. For an <b>endothermic</b> forward reaction, K <b>increases</b>. Changing concentration or pressure doesn't change K: the system shifts until the ratio equals K again. Catalysts don't affect K.</div>
<p>When pressure increases on N<sub>2</sub>O<sub>4</sub> ⇌ 2NO<sub>2</sub>, the quotient briefly becomes larger than K<sub>p</sub>, so the equilibrium shifts left until the quotient equals K<sub>p</sub> again.</p>
<p>K links to entropy: ΔS<sub>total</sub> = R ln K, so a large K means a large positive ΔS<sub>total</sub> (see 13b).</p>
`,
  quiz: [
    { q: "Mole fraction of A if 0.25 mol A in 1.00 mol gas?", o: ["0.25", "0.75", "4", "0.5"], a: 0, e: "" },
    { q: "Total pressure 200 kPa, xA = 0.30. pA = ?", o: ["60 kPa", "30 kPa", "140 kPa", "667 kPa"], a: 0, e: "" },
    { q: "Kp for 2SO₂ + O₂ ⇌ 2SO₃?", o: ["p(SO₃)² / (p(SO₂)² p(O₂))", "p(SO₂)² p(O₂) / p(SO₃)²", "2p(SO₃)/(2p(SO₂) p(O₂))", "p(SO₃)/(p(SO₂) p(O₂))"], a: 0, e: "" },
    { q: "Units of Kp for N₂O₄ ⇌ 2NO₂, pressures in kPa?", o: ["kPa", "kPa⁻¹", "kPa²", "None"], a: 0, e: "" },
    { q: "Forward reaction endothermic. Increasing temperature makes K…", o: ["Increase", "Decrease", "Stay the same", "Zero"], a: 0, e: "" },
    { q: "Why does increasing pressure not change Kp?", o: ["Equilibrium shifts until the ratio equals Kp again", "Kp has no units", "Pressure has no effect on gases", "Kp depends on catalyst only"], a: 0, e: "" },
    { q: "H₂ + I₂ ⇌ 2HI: equilibrium moles H₂ 0.10, I₂ 0.10, HI 0.80. Kc = ?", o: ["64", "8", "80", "0.016"], a: 0, e: "0.64 ÷ 0.01; volumes cancel." },
    { q: "In Kp for CaCO₃(s) ⇌ CaO(s) + CO₂(g)…", o: ["Kp = p(CO₂)", "Kp includes CaO", "Kp = 1/p(CO₂)", "Kp can't be written"], a: 0, e: "" },
    { q: "Start: 2.0 mol PCl₅; at equilibrium 0.50 mol PCl₃ formed. Moles of PCl₅ left?", o: ["1.5", "0.5", "2.0", "1.0"], a: 0, e: "PCl₅ ⇌ PCl₃ + Cl₂." }
  ],
  flashcards: [
    ["ICE table", "Initial, Change, Equilibrium moles; then ÷ volume"],
    ["Mole fraction", "moles of A ÷ total moles of gas"],
    ["Partial pressure", "mole fraction × total pressure"],
    ["Kp", "Like Kc but with partial pressures of gases"],
    ["Effect of temperature on K (exothermic forward)", "T up → K down"],
    ["Effect of pressure on Kp", "None; position shifts, Kp constant"],
    ["Catalyst and K", "No effect on K"],
    ["K and entropy", "ΔS_total = R ln K"]
  ]
});

S2Data.add({
  id: "5d", group: 5, y2: true, title: "Acids, bases and pH",
  summary: "Brønsted–Lowry acids and bases, pH of strong and weak acids, Ka, pKa and Kw.",
  notes: R`
<h3>Brønsted–Lowry theory</h3>
<ul>
<li>An <b>acid</b> is a <b>proton donor</b>; a <b>base</b> is a <b>proton acceptor</b>.</li>
<li><b>Conjugate acid–base pairs</b> differ by one H<sup>+</sup>: in HCl + H<sub>2</sub>O → H<sub>3</sub>O<sup>+</sup> + Cl<sup>−</sup>, HCl/Cl<sup>−</sup> and H<sub>3</sub>O<sup>+</sup>/H<sub>2</sub>O are pairs.</li>
<li><b>Strong</b> acids dissociate fully; <b>weak</b> acids partially. Strength ≠ concentration.</li>
</ul>
<h3>pH</h3>
<div class="box box-key"><span class="box-title">pH</span>pH = −log<sub>10</sub>[H<sup>+</sup>] &nbsp;&nbsp; [H<sup>+</sup>] = 10<sup>−pH</sup></div>
<ul>
<li><b>Strong monoprotic acid</b>: [H<sup>+</sup>] = [acid]. 0.010 mol dm<sup>−3</sup> HCl → pH 2.00.</li>
<li>A tenfold dilution of a strong acid raises the pH by 1.</li>
</ul>
<h3>Weak acids and K<sub>a</sub></h3>
<p>HA ⇌ H<sup>+</sup> + A<sup>−</sup>, so <b>K<sub>a</sub> = [H<sup>+</sup>][A<sup>−</sup>] ÷ [HA]</b>; <b>pK<sub>a</sub> = −log K<sub>a</sub></b>. Larger K<sub>a</sub> (smaller pK<sub>a</sub>) = stronger acid.</p>
<p>Assumptions: [H<sup>+</sup>] = [A<sup>−</sup>] (ignoring H<sup>+</sup> from water), and [HA]<sub>eq</sub> ≈ [HA]<sub>initial</sub> (dissociation is small). So <b>[H<sup>+</sup>] = √(K<sub>a</sub> × [HA])</b>.</p>
<p><b>Example</b>: 0.10 mol dm<sup>−3</sup> ethanoic acid, K<sub>a</sub> = 1.7 × 10<sup>−5</sup>. [H<sup>+</sup>] = √(1.7 × 10<sup>−6</sup>) = 1.30 × 10<sup>−3</sup>. pH = <b>2.89</b>.</p>
<p>The assumptions break down for stronger weak acids or very dilute solutions.</p>
<h3>Water and strong bases</h3>
<ul>
<li><b>K<sub>w</sub> = [H<sup>+</sup>][OH<sup>−</sup>] = 1.00 × 10<sup>−14</sup> mol<sup>2</sup> dm<sup>−6</sup></b> at 298 K.</li>
<li>Pure water: [H<sup>+</sup>] = [OH<sup>−</sup>], so it is <b>neutral at any temperature</b>, even though its pH changes (ionisation is endothermic, so K<sub>w</sub> rises with temperature and pH falls).</li>
<li><b>Strong base</b>: [OH<sup>−</sup>] = [base] (× 2 for Ba(OH)<sub>2</sub>); [H<sup>+</sup>] = K<sub>w</sub>/[OH<sup>−</sup>]. 0.10 mol dm<sup>−3</sup> NaOH → [H<sup>+</sup>] = 10<sup>−13</sup>, pH 13.00.</li>
<li>pK<sub>w</sub> = 14 = pH + pOH at 298 K.</li>
</ul>
<h3>Mixtures of strong acid and base</h3>
<p>Work out moles of H<sup>+</sup> and OH<sup>−</sup>, subtract, divide the excess by the <b>total volume</b>, then find pH.</p>
`,
  quiz: [
    { q: "pH of 0.050 mol dm⁻³ HCl?", o: ["1.30", "0.05", "2.00", "12.70"], a: 0, e: "" },
    { q: "pH of 0.020 mol dm⁻³ NaOH at 298 K?", o: ["12.30", "1.70", "13.00", "11.70"], a: 0, e: "[H⁺] = 10⁻¹⁴ ÷ 0.020 = 5 × 10⁻¹³." },
    { q: "0.10 mol dm⁻³ HA, Ka = 1.0 × 10⁻⁵. pH = ?", o: ["3.00", "5.00", "1.00", "2.50"], a: 0, e: "√(10⁻⁶) = 10⁻³." },
    { q: "Conjugate base of H₂SO₄?", o: ["HSO₄⁻", "SO₄²⁻", "H₃SO₄⁺", "H₂O"], a: 0, e: "" },
    { q: "Which acid is strongest?", o: ["pKa 2.9", "pKa 4.8", "pKa 9.2", "pKa 15.7"], a: 0, e: "Lowest pKa." },
    { q: "Why is pure water at 50 °C still neutral even though pH < 7?", o: ["[H⁺] = [OH⁻]", "pH is wrong at high temperature", "Kw falls", "It contains acid"], a: 0, e: "" },
    { q: "Assumption in the weak acid pH calculation?", o: ["[HA] at equilibrium ≈ initial [HA]", "Full dissociation", "[H⁺] = Ka", "[A⁻] = 0"], a: 0, e: "" },
    { q: "pH 3.40. [H⁺] = ?", o: ["3.98 × 10⁻⁴", "2.51 × 10⁻³", "3.40 × 10⁻³", "1.00 × 10⁻³"], a: 0, e: "" },
    { q: "Dilute a strong acid by a factor of 100. pH…", o: ["Rises by 2", "Falls by 2", "Rises by 100", "Unchanged"], a: 0, e: "" }
  ],
  flashcards: [
    ["Brønsted–Lowry acid / base", "Proton donor / proton acceptor"],
    ["Conjugate pair", "Species differing by one H⁺"],
    ["pH", "−log[H⁺]"],
    ["Ka", "[H⁺][A⁻]/[HA]"],
    ["pKa", "−log Ka; lower = stronger acid"],
    ["Weak acid [H⁺]", "√(Ka × [HA])"],
    ["Weak acid assumptions", "[H⁺] = [A⁻]; [HA]eq ≈ [HA]initial"],
    ["Kw", "[H⁺][OH⁻] = 1.00 × 10⁻¹⁴ at 298 K"],
    ["Strong base pH", "[H⁺] = Kw/[OH⁻], then −log"],
    ["Effect of temperature on water's pH", "Kw rises (endothermic), pH falls, still neutral"]
  ]
});

S2Data.add({
  id: "5e", group: 5, y2: true, title: "Buffers, titration curves and indicators",
  summary: "How buffers work and their pH, pH curves for different acid–base pairs, and choosing an indicator.",
  notes: R`
<h3>Buffers</h3>
<p>A <b>buffer</b> resists changes in pH when small amounts of acid or alkali are added. An <b>acidic buffer</b> is a weak acid plus its salt (conjugate base), e.g. CH<sub>3</sub>COOH / CH<sub>3</sub>COONa.</p>
<ul>
<li>CH<sub>3</sub>COOH ⇌ CH<sub>3</sub>COO<sup>−</sup> + H<sup>+</sup>: there are large reservoirs of both HA and A<sup>−</sup>.</li>
<li>Add <b>H<sup>+</sup></b>: it combines with A<sup>−</sup> to form HA; equilibrium shifts left.</li>
<li>Add <b>OH<sup>−</sup></b>: it reacts with H<sup>+</sup>; more HA dissociates to replace it (or HA + OH<sup>−</sup> → A<sup>−</sup> + H<sub>2</sub>O).</li>
<li>The ratio [HA]/[A<sup>−</sup>] barely changes, so the pH barely changes.</li>
</ul>
<div class="box box-key"><span class="box-title">Buffer pH</span>[H<sup>+</sup>] = K<sub>a</sub> × [HA] ÷ [A<sup>−</sup>] &nbsp; or &nbsp; pH = pK<sub>a</sub> + log([A<sup>−</sup>]/[HA])</div>
<p>When [HA] = [A<sup>−</sup>], <b>pH = pK<sub>a</sub></b>. You can also make a buffer by adding NaOH to an excess of weak acid (half-neutralising it).</p>
<p>Blood is buffered by H<sub>2</sub>CO<sub>3</sub> / HCO<sub>3</sub><sup>−</sup>, keeping it at pH 7.35–7.45.</p>
<h3>pH titration curves</h3>
<table>
<tr><th>Acid / base</th><th>Start pH</th><th>Equivalence pH</th><th>Vertical section</th></tr>
<tr><td>Strong / strong</td><td>~1</td><td>7</td><td>~3 to ~11</td></tr>
<tr><td>Weak / strong</td><td>~3</td><td>&gt; 7 (~9)</td><td>~7 to ~11</td></tr>
<tr><td>Strong / weak</td><td>~1</td><td>&lt; 7 (~5)</td><td>~3 to ~7</td></tr>
<tr><td>Weak / weak</td><td>~3</td><td>~7</td><td>No sharp vertical section</td></tr>
</table>
<p>For a weak acid titrated with a strong base, the pH at the <b>half-equivalence point</b> = pK<sub>a</sub>. This lets you find K<sub>a</sub> from a pH curve. The flat region before equivalence is a buffer region.</p>
<h3>Indicators</h3>
<ul>
<li>An indicator is a weak acid, HIn ⇌ H<sup>+</sup> + In<sup>−</sup>, where HIn and In<sup>−</sup> are different colours. The end point is when [HIn] = [In<sup>−</sup>], at pH = pK<sub>In</sub>.</li>
<li>Choose an indicator whose colour change range lies <b>entirely within the vertical section</b> of the curve.</li>
<li><b>Methyl orange</b> (3.1–4.4, red → yellow): strong acid with strong or weak base.</li>
<li><b>Phenolphthalein</b> (8.3–10, colourless → pink): strong or weak acid with strong base.</li>
<li>Weak/weak: no suitable indicator; use a pH meter.</li>
</ul>
<h3>Enthalpy of neutralisation</h3>
<p>Strong acid + strong base: about −57 kJ mol<sup>−1</sup>, since it's always H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O. With a weak acid, it's <b>less exothermic</b> because energy is used to fully dissociate the acid.</p>
`,
  quiz: [
    { q: "What is a buffer?", o: ["A solution that resists pH change on adding small amounts of acid or alkali", "A solution of pH 7", "A strong acid and strong base", "An indicator"], a: 0, e: "" },
    { q: "Buffer: [HA] = 0.20, [A⁻] = 0.10, Ka = 1.8 × 10⁻⁵. pH = ?", o: ["4.44", "4.74", "5.04", "2.87"], a: 0, e: "[H⁺] = 3.6 × 10⁻⁵." },
    { q: "When acid is added to an ethanoate buffer…", o: ["H⁺ combines with CH₃COO⁻ to form CH₃COOH", "Na⁺ reacts with it", "Water dissociates", "pH falls sharply"], a: 0, e: "" },
    { q: "Indicator for ethanoic acid titrated with NaOH?", o: ["Phenolphthalein", "Methyl orange", "Either", "Neither"], a: 0, e: "Vertical section ~7–11." },
    { q: "At half-equivalence in a weak acid–strong base titration…", o: ["pH = pKa", "pH = 7", "pH = 14", "[H⁺] = 0"], a: 0, e: "" },
    { q: "Equivalence point pH for weak acid–strong base?", o: ["Above 7", "Exactly 7", "Below 7", "Exactly 14"], a: 0, e: "" },
    { q: "Why is ΔneutH for ethanoic acid less exothermic than for HCl?", o: ["Energy is needed to fully dissociate the weak acid", "Fewer moles of water form", "Ethanoic acid is more concentrated", "It's endothermic"], a: 0, e: "" },
    { q: "Equal moles of HA and A⁻; pKa 4.76. pH = ?", o: ["4.76", "7.00", "9.24", "2.38"], a: 0, e: "" },
    { q: "Why can't you use an indicator for a weak acid–weak base titration?", o: ["No sharp vertical section", "pH is always 7", "Indicators react with weak bases", "It's too slow"], a: 0, e: "" }
  ],
  flashcards: [
    ["Acidic buffer", "Weak acid + its conjugate base (salt)"],
    ["Buffer adding H⁺", "H⁺ + A⁻ → HA"],
    ["Buffer adding OH⁻", "HA + OH⁻ → A⁻ + H₂O"],
    ["Buffer pH", "[H⁺] = Ka[HA]/[A⁻]"],
    ["Half-equivalence", "pH = pKa"],
    ["Methyl orange", "3.1–4.4; strong acid titrations"],
    ["Phenolphthalein", "8.3–10; titrations with a strong base"],
    ["Choosing an indicator", "Colour change range within the vertical section"],
    ["Weak acid–strong base equivalence pH", "~9 (above 7)"],
    ["Blood buffer", "H₂CO₃ / HCO₃⁻, pH 7.35–7.45"]
  ]
});

S2Data.add({
  id: "5f", group: 5, y2: true, title: "Lattice energy and Born–Haber cycles",
  summary: "Lattice energy, Born–Haber cycles, factors affecting lattice energy, polarisation and enthalpies of solution.",
  notes: R`
<h3>Definitions</h3>
<table>
<tr><th>Term</th><th>Definition</th></tr>
<tr><td>Lattice energy (Δ<sub>LE</sub>H)</td><td>Enthalpy change when <b>1 mol of an ionic solid forms from its gaseous ions</b> (exothermic)</td></tr>
<tr><td>Enthalpy of atomisation (Δ<sub>at</sub>H)</td><td>Enthalpy change when 1 mol of <b>gaseous atoms</b> forms from the element in its standard state (endothermic)</td></tr>
<tr><td>First ionisation energy</td><td>1 mol of gaseous atoms → 1 mol of gaseous 1+ ions</td></tr>
<tr><td>First electron affinity</td><td>1 mol of gaseous atoms gains 1 mol of electrons → 1 mol of gaseous 1− ions (exothermic). The second is endothermic (repulsion).</td></tr>
</table>
<h3>Born–Haber cycle for NaCl</h3>
<p>Δ<sub>f</sub>H = Δ<sub>at</sub>H(Na) + IE<sub>1</sub>(Na) + Δ<sub>at</sub>H(Cl) + EA<sub>1</sub>(Cl) + Δ<sub>LE</sub>H</p>
<p>−411 = 107 + 496 + 122 + (−349) + Δ<sub>LE</sub>H → Δ<sub>LE</sub>H = <b>−787 kJ mol<sup>−1</sup></b>.</p>
<p>Draw the cycle with endothermic steps going up and exothermic steps going down. For MgCl<sub>2</sub>, include IE<sub>1</sub> + IE<sub>2</sub> of Mg and <b>2 ×</b> atomisation and electron affinity of Cl.</p>
<h3>Factors affecting lattice energy</h3>
<ul>
<li><b>Ionic charge</b> ↑ → more exothermic (stronger attraction).</li>
<li><b>Ionic radius</b> ↓ → more exothermic (ions closer together).</li>
</ul>
<h3>Experimental vs theoretical values</h3>
<p>Theoretical values assume a <b>perfect ionic model</b> (spherical ions). If the experimental (Born–Haber) value is <b>more exothermic</b> than the theoretical one, the bonding has <b>covalent character</b>. This happens when a small, highly charged cation <b>polarises</b> (distorts) a large anion's electron cloud. e.g. AgI and MgI<sub>2</sub> show large differences; NaCl very little.</p>
<h3>Enthalpies of solution and hydration</h3>
<ul>
<li><b>Enthalpy of hydration</b>: gaseous ions → 1 mol of aqueous ions (exothermic). More exothermic for smaller, more highly charged ions.</li>
<li><b>Enthalpy of solution</b>: 1 mol of solid dissolves to form an infinitely dilute solution.</li>
</ul>
<div class="box box-key"><span class="box-title">Solution cycle</span>Δ<sub>sol</sub>H = −Δ<sub>LE</sub>H + ΣΔ<sub>hyd</sub>H</div>
<p>e.g. NaCl: −(−787) + (−406) + (−378) = <b>+3 kJ mol<sup>−1</sup></b>.</p>
`,
  quiz: [
    { q: "Lattice energy is defined as the enthalpy change when…", o: ["1 mol of ionic solid forms from gaseous ions", "1 mol of solid forms from elements", "1 mol of ions is hydrated", "1 mol of atoms ionises"], a: 0, e: "" },
    { q: "Which has the most exothermic lattice energy?", o: ["MgO", "NaCl", "KBr", "CaO"], a: 0, e: "Small, highly charged ions." },
    { q: "Why is the second electron affinity of O endothermic?", o: ["Adding an electron to a negative ion requires overcoming repulsion", "Oxygen is a metal", "It's always exothermic", "Shielding"], a: 0, e: "" },
    { q: "ΔfH −411, ΔatH(Na) +107, IE +496, ΔatH(Cl) +122, EA −349. ΔLEH = ?", o: ["−787 kJ mol⁻¹", "+787 kJ mol⁻¹", "−411 kJ mol⁻¹", "−1485 kJ mol⁻¹"], a: 0, e: "" },
    { q: "Experimental lattice energy much more exothermic than theoretical means…", o: ["Covalent character from polarisation", "Purely ionic", "An error in the cycle", "Larger ions"], a: 0, e: "" },
    { q: "Which cation is most polarising?", o: ["Al³⁺", "Na⁺", "K⁺", "Mg²⁺"], a: 0, e: "Smallest, highest charge." },
    { q: "ΔsolH = ?", o: ["−ΔLEH + ΣΔhydH", "ΔLEH + ΣΔhydH", "ΔLEH − ΣΔhydH", "ΣΔhydH − ΔfH"], a: 0, e: "" },
    { q: "Which ion has the most exothermic hydration enthalpy?", o: ["Li⁺", "Na⁺", "K⁺", "Rb⁺"], a: 0, e: "Smallest." },
    { q: "In a Born–Haber cycle for MgCl₂, the chlorine atomisation enthalpy is…", o: ["Multiplied by 2", "Halved", "Used once", "Left out"], a: 0, e: "" }
  ],
  flashcards: [
    ["Lattice energy", "1 mol ionic solid formed from gaseous ions (exothermic)"],
    ["Enthalpy of atomisation", "1 mol gaseous atoms from element in standard state"],
    ["First electron affinity", "1 mol gaseous atoms + e⁻ → 1 mol gaseous 1− ions"],
    ["Second electron affinity", "Endothermic: repulsion between ion and electron"],
    ["Factors increasing lattice energy", "Higher charge, smaller ions"],
    ["Covalent character", "Experimental LE more exothermic than theoretical; polarisation"],
    ["Polarising cation", "Small and highly charged"],
    ["Enthalpy of hydration", "Gaseous ions → aqueous ions (exothermic)"],
    ["Enthalpy of solution", "−ΔLEH + ΣΔhydH"]
  ]
});

S2Data.add({
  id: "5g", group: 5, y2: true, title: "Entropy and Gibbs energy",
  summary: "Entropy, total entropy change, Gibbs energy and feasibility, and links to K.",
  notes: R`
<h3>Entropy, S</h3>
<ul>
<li>Entropy measures the <b>number of ways particles and their energy can be arranged</b>. Units: J K<sup>−1</sup> mol<sup>−1</sup>.</li>
<li>S(gas) &gt;&gt; S(liquid) &gt; S(solid). Entropy increases with temperature, dissolving, and an increase in the number of gas moles.</li>
<li>All substances have positive entropy above 0 K.</li>
</ul>
<h3>Entropy changes</h3>
<div class="box box-key"><span class="box-title">Entropy equations</span>ΔS<sub>system</sub> = ΣS(products) − ΣS(reactants)<br>ΔS<sub>surroundings</sub> = −ΔH ÷ T &nbsp; (ΔH in <b>J</b> mol<sup>−1</sup>)<br>ΔS<sub>total</sub> = ΔS<sub>system</sub> + ΔS<sub>surroundings</sub></div>
<p>A reaction is <b>feasible</b> (thermodynamically possible) if <b>ΔS<sub>total</sub> &gt; 0</b>.</p>
<h3>Gibbs energy</h3>
<div class="box box-key"><span class="box-title">ΔG = ΔH − TΔS<sub>system</sub></span>Feasible when <b>ΔG ≤ 0</b> (kJ mol<sup>−1</sup>, so convert ΔS to kJ K<sup>−1</sup> mol<sup>−1</sup> by ÷ 1000).</div>
<table>
<tr><th>ΔH</th><th>ΔS</th><th>Feasible?</th></tr>
<tr><td>−</td><td>+</td><td>Always</td></tr>
<tr><td>+</td><td>−</td><td>Never</td></tr>
<tr><td>−</td><td>−</td><td>At low temperatures</td></tr>
<tr><td>+</td><td>+</td><td>At high temperatures</td></tr>
</table>
<p>The temperature at which a reaction becomes feasible: set ΔG = 0, so <b>T = ΔH ÷ ΔS</b>.</p>
<p><b>Example</b>: CaCO<sub>3</sub> → CaO + CO<sub>2</sub>, ΔH = +178 kJ mol<sup>−1</sup>, ΔS = +161 J K<sup>−1</sup> mol<sup>−1</sup>. T = 178 ÷ 0.161 = <b>1106 K</b>.</p>
<h3>Feasibility vs rate, and links to K</h3>
<ul>
<li>A feasible reaction may not happen because of a <b>high activation energy</b>: it's <b>kinetically inert</b> (e.g. diamond → graphite).</li>
<li><b>ΔG = −RT ln K</b>. A negative ΔG means K &gt; 1. Similarly ΔS<sub>total</sub> = R ln K.</li>
</ul>
`,
  quiz: [
    { q: "Which has the highest entropy?", o: ["1 mol of steam", "1 mol of water", "1 mol of ice", "All equal"], a: 0, e: "" },
    { q: "ΔH = −100 kJ mol⁻¹, T = 298 K. ΔS_surroundings = ?", o: ["+336 J K⁻¹ mol⁻¹", "−336 J K⁻¹ mol⁻¹", "+0.336 J K⁻¹ mol⁻¹", "−29.8 J K⁻¹ mol⁻¹"], a: 0, e: "−(−100 000)/298." },
    { q: "A reaction is feasible when…", o: ["ΔG ≤ 0", "ΔG > 0", "ΔH > 0", "ΔS_total < 0"], a: 0, e: "" },
    { q: "ΔH +, ΔS +. Feasible…", o: ["At high temperatures", "Always", "Never", "At low temperatures"], a: 0, e: "" },
    { q: "ΔH = +50 kJ mol⁻¹, ΔS = +100 J K⁻¹ mol⁻¹. Minimum T for feasibility?", o: ["500 K", "0.5 K", "5000 K", "50 K"], a: 0, e: "50 ÷ 0.100." },
    { q: "Why might a feasible reaction not occur?", o: ["High activation energy (kinetically inert)", "ΔG is negative", "ΔS is positive", "K is large"], a: 0, e: "" },
    { q: "ΔG = −RT ln K. If ΔG is very negative, K is…", o: ["Very large", "Very small", "1", "Negative"], a: 0, e: "" },
    { q: "Sign of ΔS_system for N₂ + 3H₂ → 2NH₃?", o: ["Negative", "Positive", "Zero", "Can't tell"], a: 0, e: "4 gas moles → 2." },
    { q: "ΔG at 298 K: ΔH −92 kJ mol⁻¹, ΔS −199 J K⁻¹ mol⁻¹?", o: ["−32.7 kJ mol⁻¹", "+32.7 kJ mol⁻¹", "−151 kJ mol⁻¹", "+59 kJ mol⁻¹"], a: 0, e: "−92 − 298(−0.199)." }
  ],
  flashcards: [
    ["Entropy", "Number of ways particles and energy can be arranged (J K⁻¹ mol⁻¹)"],
    ["ΔS_system", "ΣS products − ΣS reactants"],
    ["ΔS_surroundings", "−ΔH/T (ΔH in J)"],
    ["Feasibility (entropy)", "ΔS_total > 0"],
    ["Gibbs equation", "ΔG = ΔH − TΔS"],
    ["Feasibility (Gibbs)", "ΔG ≤ 0"],
    ["Temperature when feasible", "T = ΔH/ΔS (ΔS in kJ)"],
    ["ΔG and K", "ΔG = −RT ln K"],
    ["Kinetically inert", "Feasible but too slow due to high Ea"]
  ]
});

S2Data.add({
  id: "5h", group: 5, y2: true, title: "Electrode potentials and cells",
  summary: "Standard electrode potentials, the hydrogen electrode, cell EMF, feasibility and fuel cells.",
  notes: R`
<h3>Half-cells and the standard hydrogen electrode</h3>
<ul>
<li>A <b>half-cell</b> contains an element in two oxidation states, e.g. Zn(s) in Zn<sup>2+</sup>(aq). Two half-cells joined by a <b>wire</b> (with a high-resistance voltmeter) and a <b>salt bridge</b> (filter paper soaked in saturated KNO<sub>3</sub>) make a cell.</li>
<li>The salt bridge lets ions flow to complete the circuit without mixing the solutions. KNO<sub>3</sub> is used because it doesn't react or form precipitates.</li>
<li><b>Standard hydrogen electrode (SHE)</b>: H<sub>2</sub> gas at 100 kPa bubbled over a <b>platinum electrode</b> in 1.00 mol dm<sup>−3</sup> H<sup>+</sup> at 298 K. E<sup>⦵</sup> = 0.00 V by definition.</li>
<li>When no solid metal is present (e.g. Fe<sup>3+</sup>/Fe<sup>2+</sup>), use a platinum electrode in a solution with both ions at 1.00 mol dm<sup>−3</sup>.</li>
</ul>
<div class="box box-key"><span class="box-title">Standard electrode potential, E<sup>⦵</sup></span>The EMF of a half-cell connected to a standard hydrogen electrode, under standard conditions (298 K, 100 kPa, 1.00 mol dm<sup>−3</sup>).</div>
<h3>Using E<sup>⦵</sup> values</h3>
<ul>
<li>Half-equations are written as <b>reductions</b>. More positive E<sup>⦵</sup> = better <b>oxidising agent</b> (more readily reduced). More negative = better reducing agent.</li>
<li><b>E<sup>⦵</sup><sub>cell</sub> = E<sup>⦵</sup>(right, reduction) − E<sup>⦵</sup>(left, oxidation)</b>, or E(more positive) − E(less positive).</li>
<li>Cell diagram: Zn(s) | Zn<sup>2+</sup>(aq) ‖ Cu<sup>2+</sup>(aq) | Cu(s), E<sub>cell</sub> = +0.34 − (−0.76) = <b>+1.10 V</b>. The oxidised form goes next to the salt bridge (‖).</li>
<li>A reaction is <b>feasible if E<sup>⦵</sup><sub>cell</sub> is positive</b>. Rule of thumb: the more positive half-cell goes forward (reduction), the less positive goes backwards.</li>
</ul>
<h3>Limits of predictions</h3>
<p>A feasible reaction may not happen because of a <b>high activation energy</b>, or because conditions aren't standard. Changing concentration changes E (Le Chatelier: more oxidised form makes E more positive).</p>
<p>E<sub>cell</sub> is proportional to ΔS<sub>total</sub> and ln K, so a positive E<sub>cell</sub> means ΔS<sub>total</sub> &gt; 0 and ΔG &lt; 0.</p>
<h3>Fuel cells</h3>
<p>Hydrogen–oxygen fuel cell in alkaline conditions:</p>
<ul>
<li>Negative electrode: H<sub>2</sub> + 2OH<sup>−</sup> → 2H<sub>2</sub>O + 2e<sup>−</sup></li>
<li>Positive electrode: O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup> → 4OH<sup>−</sup></li>
<li>Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O. Only waste product is water, but hydrogen production and storage are problems.</li>
</ul>
<p>Ethanol fuel cells can be used in breathalysers: the current is proportional to the ethanol concentration.</p>
`,
  quiz: [
    { q: "E⦵(Cu²⁺/Cu) +0.34 V, E⦵(Zn²⁺/Zn) −0.76 V. E⦵cell = ?", o: ["+1.10 V", "−1.10 V", "+0.42 V", "−0.42 V"], a: 0, e: "" },
    { q: "Which is the strongest oxidising agent? Cl₂/Cl⁻ +1.36, Br₂/Br⁻ +1.09, I₂/I⁻ +0.54", o: ["Cl₂", "Br₂", "I₂", "I⁻"], a: 0, e: "Most positive E⦵." },
    { q: "Why use KNO₃ in a salt bridge?", o: ["It doesn't react with or precipitate the ions", "It's an oxidising agent", "It conducts electrons", "It's cheap only"], a: 0, e: "" },
    { q: "In the SHE, the electrode is made of…", o: ["Platinum", "Copper", "Carbon", "Hydrogen"], a: 0, e: "" },
    { q: "A reaction is feasible when E⦵cell is…", o: ["Positive", "Negative", "Zero", "Above 1 V"], a: 0, e: "" },
    { q: "Why might a reaction with positive E⦵cell not happen?", o: ["High activation energy", "ΔG is positive", "Too many electrons", "It's endothermic"], a: 0, e: "" },
    { q: "Increasing [Cu²⁺] in a Cu²⁺/Cu half-cell makes E…", o: ["More positive", "More negative", "Unchanged", "Zero"], a: 0, e: "" },
    { q: "Half-equation at the positive electrode of an alkaline H₂/O₂ fuel cell?", o: ["O₂ + 2H₂O + 4e⁻ → 4OH⁻", "H₂ + 2OH⁻ → 2H₂O + 2e⁻", "2H⁺ + 2e⁻ → H₂", "4OH⁻ → O₂ + 2H₂O + 4e⁻"], a: 0, e: "" },
    { q: "In a cell diagram, || represents…", o: ["The salt bridge", "A phase boundary", "The wire", "The voltmeter"], a: 0, e: "" }
  ],
  flashcards: [
    ["Standard electrode potential", "EMF of a half-cell vs SHE under standard conditions"],
    ["SHE", "H₂ at 100 kPa, Pt electrode, 1.00 mol dm⁻³ H⁺, 298 K; 0.00 V"],
    ["Salt bridge", "Filter paper in saturated KNO₃; completes circuit with ions"],
    ["E⦵cell", "E(right/reduced) − E(left/oxidised)"],
    ["Feasibility", "E⦵cell positive"],
    ["Strong oxidising agent", "Very positive E⦵"],
    ["Pt electrode use", "When the half-cell has no solid metal (e.g. Fe³⁺/Fe²⁺)"],
    ["Alkaline fuel cell negative electrode", "H₂ + 2OH⁻ → 2H₂O + 2e⁻"],
    ["E_cell links", "∝ ΔS_total and ln K"]
  ]
});

S2Data.add({
  id: "5i", group: 5, y2: true, title: "Redox titrations",
  summary: "Combining half-equations, and titrations with manganate(VII) and with iodine/thiosulfate.",
  notes: R`
<h3>Combining half-equations</h3>
<p>Multiply so the electrons are equal, then add and cancel. In acid:</p>
<p>MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5e<sup>−</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O and Fe<sup>2+</sup> → Fe<sup>3+</sup> + e<sup>−</sup> give:</p>
<p><b>MnO<sub>4</sub><sup>−</sup> + 8H<sup>+</sup> + 5Fe<sup>2+</sup> → Mn<sup>2+</sup> + 4H<sub>2</sub>O + 5Fe<sup>3+</sup></b>. Ratio MnO<sub>4</sub><sup>−</sup> : Fe<sup>2+</sup> = 1 : 5.</p>
<h3>Manganate(VII) titrations</h3>
<ul>
<li>KMnO<sub>4</sub> goes in the burette. It is <b>self-indicating</b>: purple MnO<sub>4</sub><sup>−</sup> is decolourised as it reacts; the end point is the <b>first permanent pale pink</b>.</li>
<li>Acidify with <b>dilute sulfuric acid</b>. Not HCl (Cl<sup>−</sup> would be oxidised to Cl<sub>2</sub>), not ethanoic acid (too weak), not nitric acid (an oxidising agent).</li>
<li>Read the top of the meniscus because the solution is so dark.</li>
<li>With ethanedioate: 2MnO<sub>4</sub><sup>−</sup> + 16H<sup>+</sup> + 5C<sub>2</sub>O<sub>4</sub><sup>2−</sup> → 2Mn<sup>2+</sup> + 8H<sub>2</sub>O + 10CO<sub>2</sub> (warm to 60 °C; Mn<sup>2+</sup> autocatalyses).</li>
</ul>
<p><b>Example</b>: 25.0 cm<sup>3</sup> of Fe<sup>2+</sup> solution needs 22.40 cm<sup>3</sup> of 0.0200 mol dm<sup>−3</sup> KMnO<sub>4</sub>. n(MnO<sub>4</sub><sup>−</sup>) = 4.48 × 10<sup>−4</sup>; n(Fe<sup>2+</sup>) = 2.24 × 10<sup>−3</sup>; [Fe<sup>2+</sup>] = <b>0.0896 mol dm<sup>−3</sup></b>.</p>
<h3>Iodine–thiosulfate titrations</h3>
<ul>
<li>An oxidising agent (e.g. IO<sub>3</sub><sup>−</sup>, Cu<sup>2+</sup>, ClO<sup>−</sup>) is reacted with <b>excess KI</b>, liberating I<sub>2</sub>.</li>
<li>The I<sub>2</sub> is titrated with sodium thiosulfate: <b>2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> + I<sub>2</sub> → S<sub>4</sub>O<sub>6</sub><sup>2−</sup> + 2I<sup>−</sup></b>.</li>
<li>When the solution is <b>pale yellow</b>, add <b>starch</b>: it goes blue-black. The end point is when the blue-black colour <b>disappears</b>. Adding starch too early means iodine binds to it irreversibly.</li>
<li>e.g. 2Cu<sup>2+</sup> + 4I<sup>−</sup> → 2CuI + I<sub>2</sub>, so 2Cu<sup>2+</sup> ≡ I<sub>2</sub> ≡ 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup>: Cu<sup>2+</sup> : S<sub>2</sub>O<sub>3</sub><sup>2−</sup> = 1 : 1.</li>
</ul>
<h3>Uncertainty</h3>
<p>% uncertainty = (uncertainty ÷ value) × 100. A burette reading is ±0.05 cm<sup>3</sup>, so a titre (two readings) is ±0.10 cm<sup>3</sup>.</p>
`,
  quiz: [
    { q: "Mole ratio MnO₄⁻ : Fe²⁺ in acidic solution?", o: ["1 : 5", "1 : 1", "5 : 1", "2 : 5"], a: 0, e: "" },
    { q: "End point of a KMnO₄ titration?", o: ["First permanent pale pink", "Colourless", "Blue-black disappears", "Orange to green"], a: 0, e: "" },
    { q: "Why not acidify manganate(VII) titrations with HCl?", o: ["Cl⁻ is oxidised to Cl₂", "HCl is too weak", "It precipitates Mn", "It reduces Fe³⁺"], a: 0, e: "" },
    { q: "Ratio S₂O₃²⁻ : I₂?", o: ["2 : 1", "1 : 1", "1 : 2", "4 : 1"], a: 0, e: "" },
    { q: "When should starch be added in an iodine titration?", o: ["Near the end point, when pale yellow", "At the start", "After the end point", "Never"], a: 0, e: "" },
    { q: "21.60 cm³ of 0.0100 mol dm⁻³ MnO₄⁻ reacts with Fe²⁺. Moles of Fe²⁺?", o: ["1.08 × 10⁻³", "2.16 × 10⁻⁴", "4.32 × 10⁻⁵", "1.08 × 10⁻⁴"], a: 0, e: "2.16 × 10⁻⁴ × 5." },
    { q: "Cu²⁺ with excess KI then thiosulfate. Cu²⁺ : S₂O₃²⁻ = ?", o: ["1 : 1", "1 : 2", "2 : 1", "1 : 4"], a: 0, e: "" },
    { q: "Percentage uncertainty in a 25.00 cm³ titre (±0.10 cm³)?", o: ["0.40%", "0.20%", "4.0%", "0.10%"], a: 0, e: "" },
    { q: "Why read the top of the meniscus with KMnO₄?", o: ["Solution is too dark to see the bottom", "It's the rule for all titrations", "Higher accuracy", "It's colourless"], a: 0, e: "" }
  ],
  flashcards: [
    ["MnO₄⁻ half-equation", "MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O"],
    ["MnO₄⁻ : Fe²⁺", "1 : 5"],
    ["KMnO₄ end point", "First permanent pale pink (self-indicating)"],
    ["Acid for KMnO₄ titrations", "Dilute H₂SO₄ (not HCl, HNO₃, ethanoic)"],
    ["Thiosulfate–iodine equation", "2S₂O₃²⁻ + I₂ → S₄O₆²⁻ + 2I⁻"],
    ["Starch timing", "Add when pale yellow; end point blue-black → colourless"],
    ["Cu²⁺ + I⁻", "2Cu²⁺ + 4I⁻ → 2CuI + I₂"],
    ["Titre uncertainty", "±0.10 cm³ (two readings of ±0.05)"]
  ]
});

S2Data.add({
  id: "5j", group: 5, y2: true, title: "Transition metals and complexes",
  summary: "Electron configurations, complex ions, ligands, shapes, isomerism and why complexes are coloured.",
  notes: R`
<h3>What makes a transition metal</h3>
<ul>
<li>A <b>transition metal</b> is a d-block element that forms <b>one or more stable ions with an incompletely filled d-subshell</b>. Sc and Zn are d-block but not transition metals (Sc<sup>3+</sup> is 3d<sup>0</sup>; Zn<sup>2+</sup> is 3d<sup>10</sup>).</li>
<li>Electron configurations: 4s fills before 3d, but <b>4s electrons are lost first</b> when ions form. Exceptions: Cr is [Ar]3d<sup>5</sup>4s<sup>1</sup>; Cu is [Ar]3d<sup>10</sup>4s<sup>1</sup>.</li>
<li>Fe<sup>3+</sup>: [Ar]3d<sup>5</sup>. Cu<sup>2+</sup>: [Ar]3d<sup>9</sup>.</li>
<li>Properties: <b>variable oxidation states</b> (3d and 4s similar in energy), <b>coloured</b> compounds, <b>complex ions</b> and <b>catalytic</b> activity.</li>
</ul>
<h3>Complexes and ligands</h3>
<ul>
<li>A <b>ligand</b> is a species with a lone pair that forms a <b>dative covalent bond</b> to the central metal ion. The <b>coordination number</b> is the number of dative bonds.</li>
<li><b>Monodentate</b>: H<sub>2</sub>O, NH<sub>3</sub>, Cl<sup>−</sup>, OH<sup>−</sup>, CN<sup>−</sup>. <b>Bidentate</b>: ethane-1,2-diamine (en), ethanedioate. <b>Multidentate</b>: EDTA<sup>4−</sup> (hexadentate).</li>
<li>Haem is an Fe<sup>2+</sup> complex with a multidentate ligand. O<sub>2</sub> binds to it; CO binds more strongly, which is why CO is toxic.</li>
</ul>
<h3>Shapes</h3>
<table>
<tr><th>Shape</th><th>Coordination number</th><th>Example</th></tr>
<tr><td>Octahedral (90°)</td><td>6</td><td>[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup></td></tr>
<tr><td>Tetrahedral (109.5°)</td><td>4</td><td>[CuCl<sub>4</sub>]<sup>2−</sup> (large Cl<sup>−</sup> ligands)</td></tr>
<tr><td>Square planar (90°)</td><td>4</td><td>cisplatin, [Pt(NH<sub>3</sub>)<sub>2</sub>Cl<sub>2</sub>]</td></tr>
<tr><td>Linear (180°)</td><td>2</td><td>[Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup> (Tollens')</td></tr>
</table>
<ul>
<li><b>cis/trans isomerism</b> in square planar and octahedral complexes. <b>Cisplatin</b> (cis) binds to DNA in cancer cells, preventing replication.</li>
<li><b>Optical isomerism</b> in octahedral complexes with three bidentate ligands, e.g. [Ni(en)<sub>3</sub>]<sup>2+</sup>.</li>
</ul>
<h3>Colour</h3>
<p>Ligands cause the <b>d-orbitals to split</b> into two energy levels. An electron absorbs a specific frequency of visible light and is promoted: <b>ΔE = hν</b>. The colour seen is the <b>complementary</b> colour (the light not absorbed, transmitted or reflected).</p>
<p>Colour depends on the metal, its oxidation state, the ligand and the coordination number. No colour if there are no d-electrons (d<sup>0</sup>) or a full d-subshell (d<sup>10</sup>), because no d–d transitions are possible.</p>
`,
  quiz: [
    { q: "Why is zinc not a transition metal?", o: ["Zn²⁺ has a full 3d subshell", "It's not in the d-block", "It has no electrons in 4s", "It forms no compounds"], a: 0, e: "" },
    { q: "Electron configuration of Fe³⁺?", o: ["[Ar]3d⁵", "[Ar]3d³4s²", "[Ar]3d⁶", "[Ar]3d⁴4s¹"], a: 0, e: "" },
    { q: "Shape of [CuCl₄]²⁻?", o: ["Tetrahedral", "Octahedral", "Square planar", "Linear"], a: 0, e: "" },
    { q: "EDTA⁴⁻ is a…", o: ["Hexadentate ligand", "Bidentate ligand", "Monodentate ligand", "Central ion"], a: 0, e: "" },
    { q: "Why are transition metal complexes coloured?", o: ["d-orbitals split; electrons absorb visible light to move up; complementary colour seen", "They emit light", "s electrons are promoted", "They reflect all light"], a: 0, e: "" },
    { q: "How does cisplatin work?", o: ["Binds to DNA in cancer cells, preventing replication", "Kills all cells", "Acts as a catalyst", "Releases chlorine gas"], a: 0, e: "" },
    { q: "Why is CO toxic?", o: ["It binds to haem iron more strongly than O₂", "It's acidic", "It oxidises iron", "It breaks DNA"], a: 0, e: "" },
    { q: "Which complex shows optical isomerism?", o: ["[Ni(en)₃]²⁺", "[Cu(H₂O)₆]²⁺", "[Ag(NH₃)₂]⁺", "[CuCl₄]²⁻"], a: 0, e: "" },
    { q: "Coordination number of [Co(en)₂Cl₂]⁺?", o: ["6", "4", "2", "3"], a: 0, e: "2 × 2 + 2." }
  ],
  flashcards: [
    ["Transition metal", "Forms stable ion(s) with an incompletely filled d-subshell"],
    ["Electrons lost first", "4s before 3d"],
    ["Cr and Cu configurations", "Cr [Ar]3d⁵4s¹; Cu [Ar]3d¹⁰4s¹"],
    ["Ligand", "Species with a lone pair forming a dative bond to a metal ion"],
    ["Coordination number", "Number of dative bonds to the central ion"],
    ["Bidentate ligands", "en (ethane-1,2-diamine), ethanedioate"],
    ["Shapes", "6: octahedral; 4: tetrahedral or square planar; 2: linear"],
    ["Cisplatin", "cis-[Pt(NH₃)₂Cl₂]; square planar; anticancer"],
    ["Colour in complexes", "d-orbital splitting; ΔE = hν; complementary colour"],
    ["Colourless ions", "d⁰ or d¹⁰: no d–d transitions"]
  ]
});

S2Data.add({
  id: "5k", group: 5, y2: true, title: "Transition metal reactions and catalysis",
  summary: "Ligand exchange, reactions with OH⁻ and NH₃, redox of Cr and V, and heterogeneous and homogeneous catalysis.",
  notes: R`
<h3>Ligand exchange</h3>
<ul>
<li>[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (blue) + 4Cl<sup>−</sup> (conc HCl) ⇌ [CuCl<sub>4</sub>]<sup>2−</sup> (yellow) + 6H<sub>2</sub>O. Coordination number and shape change (Cl<sup>−</sup> is larger).</li>
<li>[Co(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> (pink) + 4Cl<sup>−</sup> ⇌ [CoCl<sub>4</sub>]<sup>2−</sup> (blue) + 6H<sub>2</sub>O.</li>
<li>[Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 4NH<sub>3</sub> → [Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>2+</sup> (deep blue) + 4H<sub>2</sub>O.</li>
<li><b>Chelate effect</b>: replacing monodentate ligands with multidentate ones increases the number of particles, so <b>ΔS is positive</b> and the complex is more stable. [Cu(H<sub>2</sub>O)<sub>6</sub>]<sup>2+</sup> + 3en → [Cu(en)<sub>3</sub>]<sup>2+</sup> + 6H<sub>2</sub>O: 4 particles → 7.</li>
</ul>
<h3>With hydroxide and ammonia</h3>
<table>
<tr><th>Ion</th><th>+ a little OH<sup>−</sup> or NH<sub>3</sub></th><th>+ excess NaOH</th><th>+ excess NH<sub>3</sub></th></tr>
<tr><td>Cu<sup>2+</sup> (blue)</td><td>Blue ppt Cu(OH)<sub>2</sub></td><td>No change</td><td>Deep blue solution</td></tr>
<tr><td>Fe<sup>2+</sup> (green)</td><td>Green ppt; goes brown in air</td><td>No change</td><td>No change</td></tr>
<tr><td>Fe<sup>3+</sup> (yellow/brown)</td><td>Brown ppt Fe(OH)<sub>3</sub></td><td>No change</td><td>No change</td></tr>
<tr><td>Cr<sup>3+</sup> (green)</td><td>Grey-green ppt</td><td>Dark green solution [Cr(OH)<sub>6</sub>]<sup>3−</sup></td><td>Purple solution [Cr(NH<sub>3</sub>)<sub>6</sub>]<sup>3+</sup></td></tr>
<tr><td>Co<sup>2+</sup> (pink)</td><td>Blue/pink ppt</td><td>No change</td><td>Pale brown, darkens in air</td></tr>
<tr><td>Zn<sup>2+</sup> (colourless)</td><td>White ppt</td><td>Colourless [Zn(OH)<sub>4</sub>]<sup>2−</sup></td><td>Colourless [Zn(NH<sub>3</sub>)<sub>4</sub>]<sup>2+</sup></td></tr>
</table>
<p>Hydroxides that dissolve in excess OH<sup>−</sup> are <b>amphoteric</b> (Cr(OH)<sub>3</sub>, Zn(OH)<sub>2</sub>). Precipitation happens by <b>deprotonation</b> of aqua ligands.</p>
<h3>Redox chemistry</h3>
<ul>
<li><b>Vanadium</b>: reducing with zinc in acid goes VO<sub>2</sub><sup>+</sup> (+5, yellow) → VO<sup>2+</sup> (+4, blue) → V<sup>3+</sup> (+3, green) → V<sup>2+</sup> (+2, violet).</li>
<li><b>Chromium</b>: Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> (+6, orange) reduced by zinc in acid to Cr<sup>3+</sup> (green) and then Cr<sup>2+</sup> (blue; reoxidised by air).</li>
<li>Cr<sup>3+</sup> is oxidised to CrO<sub>4</sub><sup>2−</sup> (yellow) by H<sub>2</sub>O<sub>2</sub> in alkali. 2CrO<sub>4</sub><sup>2−</sup> + 2H<sup>+</sup> ⇌ Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> + H<sub>2</sub>O (yellow ⇌ orange).</li>
</ul>
<h3>Catalysis</h3>
<ul>
<li><b>Heterogeneous</b> catalysts provide a surface: reactants are <b>adsorbed</b>, bonds weaken, reaction occurs, products <b>desorb</b>. Adsorption must be neither too strong nor too weak. e.g. V<sub>2</sub>O<sub>5</sub> in the Contact process: V<sub>2</sub>O<sub>5</sub> + SO<sub>2</sub> → V<sub>2</sub>O<sub>4</sub> + SO<sub>3</sub>; V<sub>2</sub>O<sub>4</sub> + ½O<sub>2</sub> → V<sub>2</sub>O<sub>5</sub>.</li>
<li><b>Homogeneous</b> catalysts work through <b>variable oxidation states</b>. e.g. Fe<sup>2+</sup> catalyses S<sub>2</sub>O<sub>8</sub><sup>2−</sup> + 2I<sup>−</sup>, which is slow because two negative ions repel: S<sub>2</sub>O<sub>8</sub><sup>2−</sup> + 2Fe<sup>2+</sup> → 2SO<sub>4</sub><sup>2−</sup> + 2Fe<sup>3+</sup>; then 2Fe<sup>3+</sup> + 2I<sup>−</sup> → 2Fe<sup>2+</sup> + I<sub>2</sub>.</li>
<li><b>Autocatalysis</b>: a product catalyses the reaction, e.g. Mn<sup>2+</sup> in MnO<sub>4</sub><sup>−</sup> + C<sub>2</sub>O<sub>4</sub><sup>2−</sup>.</li>
</ul>
`,
  quiz: [
    { q: "Colour of [CuCl₄]²⁻?", o: ["Yellow", "Deep blue", "Pink", "Green"], a: 0, e: "" },
    { q: "Excess NH₃ added to Cu²⁺(aq) gives…", o: ["A deep blue solution", "A blue precipitate", "A yellow solution", "No change"], a: 0, e: "" },
    { q: "Why is the chelate effect favourable?", o: ["More particles form, so entropy increases", "Bonds are stronger only", "ΔH is very negative", "Fewer particles form"], a: 0, e: "" },
    { q: "Which hydroxide is amphoteric?", o: ["Cr(OH)₃", "Fe(OH)₃", "Cu(OH)₂", "Fe(OH)₂"], a: 0, e: "" },
    { q: "Colour of V³⁺(aq)?", o: ["Green", "Violet", "Blue", "Yellow"], a: 0, e: "" },
    { q: "Why is S₂O₈²⁻ + I⁻ slow without a catalyst?", o: ["Two negative ions repel", "It's endothermic", "Ea is zero", "Iodine is a solid"], a: 0, e: "" },
    { q: "Why does Fe(OH)₂ precipitate turn brown in air?", o: ["Oxidised to Fe(OH)₃", "Reduced to Fe", "Dissolves", "Reacts with N₂"], a: 0, e: "" },
    { q: "In heterogeneous catalysis, why must adsorption not be too strong?", o: ["Products wouldn't desorb", "Reactants wouldn't bond", "The catalyst would melt", "It would be homogeneous"], a: 0, e: "" },
    { q: "Autocatalysis means…", o: ["A product catalyses the reaction", "The catalyst is used up", "No catalyst is needed", "A reactant inhibits it"], a: 0, e: "" }
  ],
  flashcards: [
    ["[Cu(H₂O)₆]²⁺ + conc HCl", "→ [CuCl₄]²⁻, yellow, tetrahedral"],
    ["[Cu(H₂O)₆]²⁺ + excess NH₃", "→ [Cu(NH₃)₄(H₂O)₂]²⁺, deep blue"],
    ["Chelate effect", "Multidentate ligands increase particle number → ΔS positive"],
    ["Fe²⁺ + OH⁻", "Green ppt, turns brown in air"],
    ["Fe³⁺ + OH⁻", "Brown (orange-brown) ppt"],
    ["Cr³⁺ + excess NaOH", "Dark green [Cr(OH)₆]³⁻ (amphoteric)"],
    ["Vanadium colours", "+5 yellow, +4 blue, +3 green, +2 violet"],
    ["Chromate/dichromate", "CrO₄²⁻ yellow ⇌ Cr₂O₇²⁻ orange (add acid)"],
    ["Homogeneous catalysis by transition metals", "Variable oxidation states, e.g. Fe²⁺/Fe³⁺ with S₂O₈²⁻ and I⁻"],
    ["Contact process catalyst", "V₂O₅ (changes to V₂O₄ and back)"]
  ]
});

S2Data.add({
  id: "6a", group: 6, y2: true, title: "Arenes",
  summary: "The structure of benzene, evidence for delocalisation, electrophilic substitution, and phenol.",
  notes: R`
<h3>Structure of benzene</h3>
<ul>
<li>C<sub>6</sub>H<sub>6</sub>: a planar hexagon, bond angles 120°. Each carbon uses three electrons in σ bonds; the remaining p electrons overlap above and below the ring to form a <b>delocalised π system</b>.</li>
<li><b>Kekulé</b> proposed alternating C=C and C–C bonds. Evidence against it:
  <ul>
  <li>All C–C bonds are the <b>same length</b> (0.139 nm), between single and double.</li>
  <li>The <b>enthalpy of hydrogenation</b> is −208 kJ mol<sup>−1</sup>, not 3 × −120 = −360. Benzene is about <b>152 kJ mol<sup>−1</sup> more stable</b> than Kekulé's structure predicts.</li>
  <li>Benzene <b>doesn't decolourise bromine water</b>: it resists addition and prefers substitution, keeping the stable delocalised ring.</li>
  </ul></li>
</ul>
<h3>Electrophilic substitution</h3>
<p>The ring's high electron density attracts electrophiles. The mechanism: electrophile accepts a pair from the ring → intermediate with the ring partly broken (positive charge, horseshoe) → H<sup>+</sup> lost, ring restored.</p>
<table>
<tr><th>Reaction</th><th>Reagents / conditions</th><th>Electrophile generation</th></tr>
<tr><td>Nitration</td><td>Conc HNO<sub>3</sub> + conc H<sub>2</sub>SO<sub>4</sub>, below 55 °C</td><td>HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Halogenation</td><td>Br<sub>2</sub> with FeBr<sub>3</sub> (or Fe) catalyst</td><td>Br<sub>2</sub> + FeBr<sub>3</sub> → Br<sup>+</sup> + FeBr<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Friedel–Crafts alkylation</td><td>Halogenoalkane + AlCl<sub>3</sub>, reflux, dry</td><td>RCl + AlCl<sub>3</sub> → R<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Friedel–Crafts acylation</td><td>Acyl chloride + AlCl<sub>3</sub>, reflux, dry</td><td>RCOCl + AlCl<sub>3</sub> → RCO<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup> → phenylketone</td></tr>
</table>
<p>Above 55 °C nitration gives multiple substitution. Nitrobenzene is used to make dyes (via phenylamine) and explosives.</p>
<p>Benzene burns with a <b>smoky flame</b> (high C : H ratio). It reacts with H<sub>2</sub> (Ni, high temperature) to give cyclohexane.</p>
<h3>Phenol</h3>
<ul>
<li>C<sub>6</sub>H<sub>5</sub>OH. A lone pair on O is <b>partly delocalised into the ring</b>, increasing its electron density. So phenol is much more reactive towards electrophiles than benzene.</li>
<li>Phenol + bromine water at room temperature, no catalyst → <b>white precipitate</b> of 2,4,6-tribromophenol (and decolourises).</li>
<li>Phenol is a very weak acid: reacts with NaOH, but not with carbonates.</li>
</ul>
`,
  quiz: [
    { q: "Evidence that benzene isn't Kekulé's structure?", o: ["All C–C bonds are the same length", "It's a liquid", "It has 6 carbons", "It burns"], a: 0, e: "" },
    { q: "Why doesn't benzene decolourise bromine water?", o: ["Addition would break the stable delocalised ring", "It has no electrons", "It's saturated", "Bromine is too weak a nucleophile"], a: 0, e: "" },
    { q: "Electrophile in nitration of benzene?", o: ["NO₂⁺", "NO₃⁻", "HNO₃", "H⁺"], a: 0, e: "" },
    { q: "Catalyst for Friedel–Crafts acylation?", o: ["AlCl₃", "FeCl₂", "Ni", "H₃PO₄"], a: 0, e: "" },
    { q: "Why is phenol more reactive than benzene with bromine?", o: ["O lone pair delocalises into the ring, raising electron density", "Phenol is a strong acid", "Benzene is ionic", "Phenol has no ring"], a: 0, e: "" },
    { q: "Benzene + ethanoyl chloride, AlCl₃ gives…", o: ["Phenylethanone", "Ethylbenzene", "Benzoic acid", "Chlorobenzene"], a: 0, e: "" },
    { q: "Benzene's enthalpy of hydrogenation is less exothermic than predicted because…", o: ["Delocalisation makes it more stable", "It has fewer bonds", "It's a gas", "It has 3 double bonds"], a: 0, e: "" },
    { q: "Why is nitration kept below 55 °C?", o: ["To avoid multiple substitution", "To prevent boiling the catalyst", "To increase rate", "To favour addition"], a: 0, e: "" },
    { q: "Product of phenol + bromine water?", o: ["2,4,6-tribromophenol (white ppt)", "Bromobenzene", "1,2-dibromocyclohexane", "No reaction"], a: 0, e: "" }
  ],
  flashcards: [
    ["Benzene structure", "Planar ring; delocalised π electrons above and below"],
    ["Evidence against Kekulé", "Equal bond lengths; less exothermic hydrogenation; resists addition"],
    ["Delocalisation energy", "≈ 152 kJ mol⁻¹ more stable"],
    ["Nitration conditions", "Conc HNO₃ + conc H₂SO₄, below 55 °C"],
    ["Nitronium ion formation", "HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻"],
    ["Bromination of benzene", "Br₂ + FeBr₃ catalyst"],
    ["Friedel–Crafts", "RCl or RCOCl + AlCl₃ (halogen carrier)"],
    ["Electrophilic substitution steps", "Electrophile attacks ring → cation intermediate → loses H⁺"],
    ["Phenol + Br₂(aq)", "White ppt 2,4,6-tribromophenol; no catalyst"],
    ["Why phenol is more reactive", "O lone pair delocalised into ring"]
  ]
});

S2Data.add({
  id: "6b", group: 6, y2: true, title: "Carbonyl compounds",
  summary: "Aldehydes and ketones: physical properties, oxidation tests, reduction, and nucleophilic addition of HCN.",
  notes: R`
<h3>Structure and properties</h3>
<ul>
<li><b>Aldehydes</b>: C=O at the end of the chain (–CHO), named -al. <b>Ketones</b>: C=O in the chain, named -one.</li>
<li>The C=O bond is polar (C<sup>δ+</sup>). Carbonyls can't hydrogen bond to each other (no O–H), so their boiling points are lower than alcohols of similar M<sub>r</sub>. Short ones are soluble in water because they form <b>hydrogen bonds with water</b>.</li>
</ul>
<h3>Tests to tell aldehydes from ketones</h3>
<table>
<tr><th>Test</th><th>Aldehyde</th><th>Ketone</th></tr>
<tr><td>Tollens' reagent ([Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>), warm</td><td><b>Silver mirror</b></td><td>No change</td></tr>
<tr><td>Fehling's or Benedict's solution (Cu<sup>2+</sup>), warm</td><td>Blue → <b>red precipitate</b> (Cu<sub>2</sub>O)</td><td>Stays blue</td></tr>
<tr><td>Acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, warm</td><td>Orange → green</td><td>Stays orange</td></tr>
</table>
<p><b>2,4-DNPH</b> (Brady's reagent) gives an <b>orange precipitate</b> with both aldehydes and ketones. Recrystallise it and measure the melting point to identify the carbonyl.</p>
<p><b>Iodoform test</b>: I<sub>2</sub> and NaOH, warm → <b>pale yellow precipitate</b> of CHI<sub>3</sub> (antiseptic smell). Positive for <b>methyl ketones</b> (CH<sub>3</sub>CO–), ethanal, and alcohols with CH<sub>3</sub>CH(OH)–.</p>
<h3>Reduction</h3>
<p>With <b>LiAlH<sub>4</sub> in dry ether</b>: aldehydes → primary alcohols; ketones → secondary alcohols. Write [H]: CH<sub>3</sub>CHO + 2[H] → CH<sub>3</sub>CH<sub>2</sub>OH.</p>
<h3>Nucleophilic addition of HCN</h3>
<ul>
<li>Reagent: <b>KCN</b> with dilute acid (HCN is too toxic to handle; KCN provides CN<sup>−</sup>, the nucleophile). Product: a <b>hydroxynitrile</b>, chain + 1 carbon.</li>
<li>Mechanism: CN<sup>−</sup> lone pair attacks C<sup>δ+</sup>; π bond electrons move onto O, forming O<sup>−</sup>; O<sup>−</sup> takes H<sup>+</sup> (from HCN or H<sub>2</sub>O).</li>
<li>e.g. ethanal → 2-hydroxypropanenitrile (racemic: planar C=O attacked from both sides).</li>
</ul>
`,
  quiz: [
    { q: "Tollens' reagent gives a silver mirror with…", o: ["Aldehydes", "Ketones", "Both", "Neither"], a: 0, e: "" },
    { q: "Fehling's positive result?", o: ["Blue → red precipitate", "Orange → green", "Silver mirror", "Yellow precipitate"], a: 0, e: "" },
    { q: "2,4-DNPH gives an orange precipitate with…", o: ["Aldehydes and ketones", "Aldehydes only", "Alcohols", "Carboxylic acids"], a: 0, e: "" },
    { q: "Which gives a positive iodoform test?", o: ["Propanone", "Pentan-3-one", "Methanal", "Propanal"], a: 0, e: "CH₃CO–." },
    { q: "Reduction of butanone with LiAlH₄ gives…", o: ["Butan-2-ol", "Butan-1-ol", "Butanoic acid", "Butane"], a: 0, e: "" },
    { q: "In nucleophilic addition of HCN, the nucleophile is…", o: ["CN⁻", "H⁺", "HCN", "OH⁻"], a: 0, e: "" },
    { q: "Product of propanone + HCN?", o: ["2-hydroxy-2-methylpropanenitrile", "2-hydroxypropanenitrile", "Propanenitrile", "Butanenitrile"], a: 0, e: "" },
    { q: "Why do carbonyls have lower boiling points than alcohols of similar Mr?", o: ["No hydrogen bonding between carbonyl molecules", "They're ionic", "Larger London forces", "They're gases"], a: 0, e: "" },
    { q: "How is a 2,4-DNPH derivative used to identify a carbonyl?", o: ["Recrystallise and measure melting point; compare with data", "Measure its mass", "Burn it", "Dissolve it in water"], a: 0, e: "" }
  ],
  flashcards: [
    ["Aldehyde vs ketone", "–CHO at chain end vs C=O within chain"],
    ["Tollens' test", "Silver mirror with aldehydes"],
    ["Fehling's/Benedict's", "Blue → red ppt (Cu₂O) with aldehydes"],
    ["2,4-DNPH", "Orange ppt with any C=O; melting point identifies"],
    ["Iodoform test", "I₂/NaOH → yellow CHI₃; CH₃CO– or CH₃CH(OH)–"],
    ["LiAlH₄", "Reduces aldehydes → 1° alcohols, ketones → 2° alcohols (dry ether)"],
    ["HCN addition reagent", "KCN + dilute acid"],
    ["Nucleophilic addition mechanism", "CN⁻ attacks Cδ+; O⁻ forms; O⁻ protonated"],
    ["Hydroxynitrile", "Product of HCN + carbonyl; chain +1 C"]
  ]
});

S2Data.add({
  id: "6c", group: 6, y2: true, title: "Carboxylic acids and derivatives",
  summary: "Preparing and reacting carboxylic acids, esters, acyl chlorides and polyesters.",
  notes: R`
<h3>Carboxylic acids</h3>
<ul>
<li>–COOH. Hydrogen bonding gives high boiling points; short chains are soluble in water. Weak acids.</li>
<li><b>Preparation</b>: oxidise primary alcohols or aldehydes (acidified dichromate, reflux); hydrolyse <b>nitriles</b> by refluxing with dilute acid.</li>
<li><b>Reduction</b>: LiAlH<sub>4</sub> in dry ether → primary alcohol.</li>
<li>React with metals (→ salt + H<sub>2</sub>), bases (→ salt + water), and <b>carbonates</b> (→ CO<sub>2</sub> fizzing: a test for –COOH).</li>
<li>With <b>PCl<sub>5</sub></b>: → acyl chloride + POCl<sub>3</sub> + HCl.</li>
</ul>
<h3>Esters</h3>
<ul>
<li>Made by <b>esterification</b>: carboxylic acid + alcohol, <b>concentrated H<sub>2</sub>SO<sub>4</sub></b> catalyst, heat under reflux. Reversible.</li>
<li>Naming: alcohol part first, then -oate. CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> is ethyl ethanoate.</li>
<li>Uses: solvents, perfumes, flavourings, plasticisers.</li>
<li><b>Acid hydrolysis</b> (dilute acid, reflux) → acid + alcohol: reversible.</li>
<li><b>Alkaline hydrolysis</b> (NaOH, reflux) → carboxylate salt + alcohol: goes to completion.</li>
</ul>
<h3>Acyl chlorides</h3>
<p>R–COCl. Very reactive because the carbonyl carbon is strongly δ+ (bonded to both O and Cl). They react vigorously at room temperature, releasing <b>misty fumes of HCl</b>:</p>
<table>
<tr><th>With</th><th>Product</th></tr>
<tr><td>Water</td><td>Carboxylic acid + HCl</td></tr>
<tr><td>Alcohol</td><td><b>Ester</b> + HCl (not reversible; better yield than esterification)</td></tr>
<tr><td>Concentrated ammonia</td><td><b>Primary amide</b> + NH<sub>4</sub>Cl</td></tr>
<tr><td>Primary amine</td><td><b>N-substituted amide</b> + HCl</td></tr>
</table>
<p>These are <b>addition–elimination</b> reactions: the nucleophile adds to the C=O carbon, then Cl<sup>−</sup> and H<sup>+</sup> are eliminated.</p>
<h3>Polyesters</h3>
<p><b>Condensation polymers</b> form from a <b>dicarboxylic acid</b> (or diacyl chloride) and a <b>diol</b>, losing H<sub>2</sub>O (or HCl) for each ester link. e.g. Terylene (PET) from benzene-1,4-dicarboxylic acid and ethane-1,2-diol. Polyesters are biodegradable by hydrolysis of the ester links.</p>
`,
  quiz: [
    { q: "Test for a carboxylic acid?", o: ["Add Na₂CO₃: fizzing, CO₂ turns limewater milky", "Tollens' reagent", "2,4-DNPH", "Bromine water"], a: 0, e: "" },
    { q: "Name CH₃CH₂COOCH₃.", o: ["Methyl propanoate", "Propyl methanoate", "Ethyl ethanoate", "Methyl ethanoate"], a: 0, e: "" },
    { q: "Catalyst for esterification?", o: ["Concentrated H₂SO₄", "Nickel", "NaOH", "Platinum"], a: 0, e: "" },
    { q: "Why does alkaline hydrolysis of an ester go to completion?", o: ["The carboxylate ion doesn't react with the alcohol", "It's faster", "NaOH is a catalyst", "It's exothermic"], a: 0, e: "" },
    { q: "Ethanoyl chloride + ethanol gives…", o: ["Ethyl ethanoate + HCl", "Ethanoic acid", "Ethanamide", "Ethene"], a: 0, e: "" },
    { q: "Ethanoyl chloride + ammonia gives…", o: ["Ethanamide", "Ethylamine", "Ethanoic acid", "Ethanenitrile"], a: 0, e: "" },
    { q: "Mechanism type for acyl chloride + water?", o: ["Addition–elimination", "Electrophilic addition", "Free-radical substitution", "SN1"], a: 0, e: "" },
    { q: "Which pair makes a polyester?", o: ["Diol + dicarboxylic acid", "Diamine + dicarboxylic acid", "Alkene + alkene", "Amino acids"], a: 0, e: "" },
    { q: "Hydrolysing propanenitrile with dilute acid gives…", o: ["Propanoic acid", "Propanamine", "Propan-1-ol", "Ethanoic acid"], a: 0, e: "" }
  ],
  flashcards: [
    ["Making carboxylic acids", "Oxidise 1° alcohol/aldehyde (reflux) or hydrolyse nitrile"],
    ["Carboxylic acid test", "Carbonate → CO₂ fizzing"],
    ["Esterification", "Acid + alcohol, conc H₂SO₄, reflux; reversible"],
    ["Ester naming", "Alkyl (from alcohol) + -oate (from acid)"],
    ["Alkaline ester hydrolysis", "→ carboxylate salt + alcohol; complete"],
    ["Acyl chloride + water", "Carboxylic acid + HCl"],
    ["Acyl chloride + alcohol", "Ester + HCl (irreversible)"],
    ["Acyl chloride + amine", "N-substituted amide + HCl"],
    ["Addition–elimination", "Nucleophile adds to C=O, then Cl⁻/H⁺ leave"],
    ["Polyester", "Diol + dicarboxylic acid; ester links; loses H₂O"]
  ]
});

S2Data.add({
  id: "6d", group: 6, y2: true, title: "Amines, amides and amino acids",
  summary: "Basicity and preparation of amines, amides, polyamides, and the chemistry of amino acids.",
  notes: R`
<h3>Amines</h3>
<ul>
<li>Primary (RNH<sub>2</sub>), secondary (R<sub>2</sub>NH), tertiary (R<sub>3</sub>N). They act as <b>bases</b> and <b>nucleophiles</b> because of the lone pair on N.</li>
<li><b>Basicity</b>: alkyl groups push electron density onto N, so <b>ethylamine is a stronger base than ammonia</b>. In <b>phenylamine</b>, the lone pair is partly delocalised into the ring, so it's a <b>weaker base</b> than ammonia.</li>
<li>Amines react with acids to form salts: CH<sub>3</sub>NH<sub>2</sub> + HCl → CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>Cl<sup>−</sup>.</li>
<li>Small amines are soluble in water (H bonds) and their solutions are alkaline. They smell fishy.</li>
<li>With copper(II) ions, amines form a deep blue complex, like ammonia.</li>
</ul>
<h3>Preparing amines</h3>
<ul>
<li><b>Aliphatic</b>: halogenoalkane + excess ammonia in ethanol, heat in a sealed tube. Or reduce a <b>nitrile</b> with LiAlH<sub>4</sub> in dry ether (no mixture of products).</li>
<li><b>Phenylamine</b>: reduce nitrobenzene with <b>tin and concentrated HCl</b>, reflux, then add NaOH to release the free amine.</li>
<li>Further substitution of amines with halogenoalkanes gives secondary, tertiary and quaternary ammonium salts.</li>
</ul>
<h3>Amides and polyamides</h3>
<ul>
<li>Amides (–CONH<sub>2</sub>) form from acyl chlorides and ammonia or amines.</li>
<li><b>Polyamides</b>: condensation polymers from a <b>dicarboxylic acid</b> (or diacyl chloride) and a <b>diamine</b>, with amide (–CONH–) links. e.g. nylon-6,6 from hexanedioic acid and 1,6-diaminohexane; <b>Kevlar</b> from benzene-1,4-dicarboxylic acid and benzene-1,4-diamine.</li>
<li>Strong hydrogen bonds between chains give high tensile strength.</li>
</ul>
<h3>Amino acids</h3>
<ul>
<li>General formula RCH(NH<sub>2</sub>)COOH. All except glycine are <b>chiral</b>.</li>
<li>In solution they form <b>zwitterions</b> (<sup>+</sup>H<sub>3</sub>NCHRCOO<sup>−</sup>) at the isoelectric point. This gives high melting points and solubility in water.</li>
<li>In acid: <sup>+</sup>H<sub>3</sub>NCHRCOOH. In alkali: H<sub>2</sub>NCHRCOO<sup>−</sup>.</li>
<li>They join by <b>peptide (amide) links</b> to form peptides and proteins, losing water. Hydrolysis (6 mol dm<sup>−3</sup> HCl, reflux) breaks them back down.</li>
<li>Amino acid mixtures are separated and identified by <b>chromatography</b> with ninhydrin to show the spots.</li>
</ul>
`,
  quiz: [
    { q: "Why is ethylamine a stronger base than ammonia?", o: ["Ethyl group pushes electron density onto N", "It's larger", "It has more hydrogens", "It's an acid"], a: 0, e: "" },
    { q: "Why is phenylamine a weaker base than ammonia?", o: ["N lone pair is delocalised into the ring", "Benzene is acidic", "It's insoluble", "N has no lone pair"], a: 0, e: "" },
    { q: "Reagents to make phenylamine from nitrobenzene?", o: ["Tin and conc HCl, reflux, then NaOH", "LiAlH₄ only", "NH₃", "H₂SO₄"], a: 0, e: "" },
    { q: "Which pair makes a polyamide?", o: ["Diamine + dicarboxylic acid", "Diol + diacid", "Two alkenes", "Diol + diamine"], a: 0, e: "" },
    { q: "A zwitterion has…", o: ["Both a positive and a negative charge", "No charge anywhere", "Two positive charges", "Only a negative charge"], a: 0, e: "" },
    { q: "Form of glycine in strong acid?", o: ["⁺H₃NCH₂COOH", "H₂NCH₂COO⁻", "⁺H₃NCH₂COO⁻", "H₂NCH₂COOH"], a: 0, e: "" },
    { q: "Which amino acid is not chiral?", o: ["Glycine", "Alanine", "Serine", "Valine"], a: 0, e: "R = H." },
    { q: "Why does reducing a nitrile give a purer amine than using a halogenoalkane and ammonia?", o: ["No further substitution products", "It's faster", "No reagents needed", "It gives a salt"], a: 0, e: "" },
    { q: "Why are amino acids high-melting solids?", o: ["Zwitterions have strong ionic attractions", "Large London forces", "Covalent network", "Metallic bonding"], a: 0, e: "" }
  ],
  flashcards: [
    ["Amine basicity order", "Ethylamine > ammonia > phenylamine"],
    ["Why alkylamines are stronger bases", "Alkyl groups increase electron density on N"],
    ["Why phenylamine is weaker", "N lone pair delocalised into ring"],
    ["Amine from nitrile", "LiAlH₄ in dry ether"],
    ["Nitrobenzene → phenylamine", "Sn + conc HCl, reflux; then NaOH"],
    ["Polyamide", "Diamine + dicarboxylic acid/diacyl chloride; –CONH– links"],
    ["Kevlar", "Aromatic polyamide; strong H bonds between chains"],
    ["Zwitterion", "⁺H₃NCHRCOO⁻"],
    ["Peptide link", "–CONH– between amino acids"],
    ["Protein hydrolysis", "6 mol dm⁻³ HCl, reflux"]
  ]
});

S2Data.add({
  id: "6e", group: 6, y2: true, title: "Chirality",
  summary: "Chiral centres, enantiomers, optical activity, racemic mixtures and what they tell you about mechanisms.",
  notes: R`
<h3>Optical isomerism</h3>
<ul>
<li>A <b>chiral centre</b> is a carbon atom with <b>four different groups</b> attached. Mark it with an asterisk (*).</li>
<li>A chiral molecule has two <b>enantiomers</b>: non-superimposable mirror images.</li>
<li>Draw them in 3D (wedge and dashed bonds) as mirror images of each other.</li>
</ul>
<h3>Optical activity</h3>
<ul>
<li>Each enantiomer rotates the <b>plane of plane-polarised light</b> by the same amount in <b>opposite directions</b>. This is measured with a <b>polarimeter</b>.</li>
<li>A <b>racemic mixture</b> (racemate) has equal amounts of both enantiomers, so the rotations cancel: it's <b>optically inactive</b>.</li>
<li>Enantiomers have identical physical and chemical properties, except for their effect on polarised light and how they interact with other chiral molecules (e.g. enzymes and receptors).</li>
</ul>
<h3>Optical activity and mechanisms</h3>
<table>
<tr><th>Reaction</th><th>Intermediate</th><th>Product</th></tr>
<tr><td>S<sub>N</sub>1 on a chiral tertiary halogenoalkane</td><td><b>Planar carbocation</b>, attacked equally from either side</td><td>Racemic mixture (inactive)</td></tr>
<tr><td>S<sub>N</sub>2 on a chiral halogenoalkane</td><td>Attack from the side opposite the halogen</td><td>Single enantiomer, inverted (active)</td></tr>
<tr><td>Nucleophilic addition of HCN to an aldehyde/unsymmetrical ketone</td><td><b>Planar C=O</b>, attacked equally from both sides</td><td>Racemic mixture</td></tr>
</table>
<p>So measuring the optical activity of the product can tell you which mechanism happened.</p>
<div class="box box-key"><span class="box-title">Drugs</span>Often only one enantiomer is active. Thalidomide's other enantiomer caused birth defects. Making a single enantiomer is expensive but reduces side effects and doses.</div>
`,
  quiz: [
    { q: "A chiral centre is a carbon with…", o: ["Four different groups attached", "A double bond", "Two identical groups", "A lone pair"], a: 0, e: "" },
    { q: "Enantiomers are…", o: ["Non-superimposable mirror images", "Structural isomers", "E/Z isomers", "Identical molecules"], a: 0, e: "" },
    { q: "A racemic mixture is optically inactive because…", o: ["Equal amounts of enantiomers rotate light equally in opposite directions", "It contains no chiral molecules", "It absorbs light", "It's a solid"], a: 0, e: "" },
    { q: "Which molecule is chiral?", o: ["Butan-2-ol", "Propan-2-ol", "Ethanol", "2-methylpropan-2-ol"], a: 0, e: "C2 has H, OH, CH₃, C₂H₅." },
    { q: "SN1 on a single enantiomer gives…", o: ["A racemic mixture", "A single enantiomer", "No product", "An achiral product always"], a: 0, e: "Planar carbocation." },
    { q: "Ethanal + HCN gives an optically inactive product because…", o: ["The planar C=O is attacked equally from both sides", "The product is not chiral", "HCN is a weak acid", "No reaction occurs"], a: 0, e: "" },
    { q: "Optical activity is measured with a…", o: ["Polarimeter", "Colorimeter", "pH meter", "Mass spectrometer"], a: 0, e: "" },
    { q: "Why do drug companies aim to make single enantiomers?", o: ["Often only one is active; fewer side effects", "They're cheaper", "Racemates are unstable", "Legal requirement for all drugs"], a: 0, e: "" }
  ],
  flashcards: [
    ["Chiral centre", "C with four different groups"],
    ["Enantiomers", "Non-superimposable mirror images"],
    ["Optical activity", "Rotation of plane-polarised light"],
    ["Racemic mixture", "50:50 enantiomers; optically inactive"],
    ["SN1 and chirality", "Planar carbocation → racemic product"],
    ["SN2 and chirality", "Inversion → single (opposite) enantiomer"],
    ["Nucleophilic addition to C=O", "Planar carbonyl → racemic product"],
    ["Polarimeter", "Measures rotation of plane-polarised light"]
  ]
});

S2Data.add({
  id: "6f", group: 6, y2: true, title: "Organic synthesis",
  summary: "Grignard reagents, multi-step synthesis routes, practical techniques and identifying functional groups.",
  notes: R`
<h3>Grignard reagents</h3>
<ul>
<li>Made from a halogenoalkane and <b>magnesium in dry ether</b>: CH<sub>3</sub>CH<sub>2</sub>Br + Mg → CH<sub>3</sub>CH<sub>2</sub>MgBr. Water must be excluded (it destroys the reagent).</li>
<li>The carbon bonded to Mg is δ− and acts as a nucleophile, forming a <b>new C–C bond</b>. Lengthening the carbon chain is the key use.</li>
<li>With CO<sub>2</sub> (dry ice), then acid → <b>carboxylic acid</b> (+1 C).</li>
<li>With methanal → primary alcohol; other aldehydes → secondary alcohol; ketones → tertiary alcohol.</li>
</ul>
<h3>Key conversions</h3>
<table>
<tr><th>From → to</th><th>Reagents and conditions</th></tr>
<tr><td>Alkene → halogenoalkane</td><td>HBr, room temperature</td></tr>
<tr><td>Halogenoalkane → alcohol</td><td>NaOH(aq), reflux</td></tr>
<tr><td>Halogenoalkane → nitrile</td><td>KCN in ethanol, reflux (+1 C)</td></tr>
<tr><td>Halogenoalkane → amine</td><td>Excess NH<sub>3</sub>, ethanol, heat, sealed tube</td></tr>
<tr><td>Halogenoalkane → alkene</td><td>KOH in ethanol, reflux</td></tr>
<tr><td>1° alcohol → aldehyde / acid</td><td>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sub>2</sub>SO<sub>4</sub>: distil / reflux</td></tr>
<tr><td>Carbonyl → alcohol</td><td>LiAlH<sub>4</sub>, dry ether</td></tr>
<tr><td>Carbonyl → hydroxynitrile</td><td>KCN + dilute acid</td></tr>
<tr><td>Nitrile → acid / amine</td><td>Dilute HCl reflux / LiAlH<sub>4</sub></td></tr>
<tr><td>Acid → acyl chloride</td><td>PCl<sub>5</sub></td></tr>
<tr><td>Benzene → nitrobenzene → phenylamine</td><td>Conc HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> &lt; 55 °C; then Sn/conc HCl</td></tr>
</table>
<h3>Designing a synthesis</h3>
<ol>
<li>Compare the starting material and target: has the <b>carbon chain</b> grown (use CN<sup>−</sup> or Grignard), and which <b>functional groups</b> change?</li>
<li>Work backwards from the target if it helps.</li>
<li>Give reagents and conditions for every step, and name each intermediate.</li>
</ol>
<p>Choosing a route: fewer steps and higher yields, good <b>atom economy</b>, safer reagents (avoid HCN, toxic solvents), and lower energy use.</p>
<h3>Practical techniques</h3>
<ul>
<li><b>Recrystallisation</b> (purifying a solid): dissolve in the <b>minimum hot solvent</b>, filter hot to remove insoluble impurities, cool to crystallise, filter under reduced pressure (Büchner), wash with cold solvent, dry.</li>
<li><b>Melting point</b>: a pure substance melts sharply at the data-book value; impurities lower it and widen the range.</li>
<li><b>Steam distillation</b>, solvent extraction, reflux, distillation.</li>
</ul>
`,
  quiz: [
    { q: "How is a Grignard reagent made?", o: ["Halogenoalkane + Mg in dry ether", "Alcohol + Mg in water", "Alkene + MgO", "Halogenoalkane + MgSO₄"], a: 0, e: "" },
    { q: "Grignard reagent + CO₂, then acid, gives…", o: ["A carboxylic acid", "An alcohol", "A ketone", "An ester"], a: 0, e: "" },
    { q: "Grignard reagent + propanone gives…", o: ["A tertiary alcohol", "A primary alcohol", "A secondary alcohol", "An aldehyde"], a: 0, e: "" },
    { q: "Two ways to add one carbon to a chain?", o: ["KCN substitution; Grignard + CO₂", "Oxidation; reduction", "Cracking; reforming", "Esterification; hydrolysis"], a: 0, e: "" },
    { q: "Ethene → ethanoic acid, a sensible route?", o: ["Steam/H₃PO₄ → ethanol; then K₂Cr₂O₇/H₂SO₄ reflux", "HBr then KCN", "H₂/Ni then oxidise", "PCl₅ then water"], a: 0, e: "" },
    { q: "In recrystallisation, why use the minimum amount of hot solvent?", o: ["So the product crystallises on cooling (maximum yield)", "To dissolve impurities", "To save money only", "To lower boiling point"], a: 0, e: "" },
    { q: "An impure solid's melting point is…", o: ["Lower and over a wider range", "Higher and sharp", "Exactly the data-book value", "Unaffected"], a: 0, e: "" },
    { q: "Why must Grignard reactions be dry?", o: ["Water destroys the Grignard reagent", "Water is a catalyst", "Mg reacts with ether", "To raise yield of HBr"], a: 0, e: "" },
    { q: "Bromoethane → propanoic acid?", o: ["KCN in ethanol, then reflux with dilute acid", "NaOH then oxidise", "KOH in ethanol", "Mg then water"], a: 0, e: "" }
  ],
  flashcards: [
    ["Grignard preparation", "RX + Mg in dry ether → RMgX"],
    ["Grignard + CO₂", "→ carboxylic acid (+1 C)"],
    ["Grignard + aldehyde / ketone", "→ secondary / tertiary alcohol"],
    ["Grignard + methanal", "→ primary alcohol"],
    ["Lengthening the chain", "CN⁻ (nitrile) or Grignard"],
    ["Good synthesis route", "Few steps, high yield, good atom economy, safe reagents"],
    ["Recrystallisation", "Min hot solvent; hot filter; cool; Büchner filter; cold wash; dry"],
    ["Melting point purity test", "Sharp and matches data if pure"]
  ]
});

S2Data.add({
  id: "6g", group: 6, y2: true, title: "Chromatography and combined techniques",
  summary: "TLC, Rf values, gas and HPLC chromatography, and combining spectra to work out structures.",
  notes: R`
<h3>Chromatography</h3>
<p>All chromatography has a <b>stationary phase</b> and a <b>mobile phase</b>. Components separate because they have different <b>affinities</b> for the two phases (adsorption to the stationary phase, or solubility in it).</p>
<h3>Thin-layer chromatography (TLC)</h3>
<ul>
<li>Stationary phase: a thin layer of <b>silica or alumina</b> on a plate. Mobile phase: a solvent.</li>
<li>Draw the baseline in pencil, keep it above the solvent level, cover the tank. Locate colourless spots with <b>UV light</b> or iodine (or ninhydrin for amino acids).</li>
<li><b>R<sub>f</sub> = distance moved by spot ÷ distance moved by solvent front</b>. Compare with known values under the same conditions.</li>
<li>TLC can check purity and follow the progress of a reaction.</li>
</ul>
<h3>Gas chromatography (GC) and HPLC</h3>
<ul>
<li><b>GC</b>: mobile phase is an <b>inert carrier gas</b> (e.g. helium); stationary phase is a liquid on a solid support in a long coiled column inside an oven. Separates volatile compounds.</li>
<li><b>HPLC</b>: liquid mobile phase pumped at high pressure through a column of small solid particles. Good for non-volatile compounds.</li>
<li>The <b>retention time</b> (time from injection to detection) identifies each component; <b>peak area</b> is proportional to the amount.</li>
<li><b>GC–MS</b> and HPLC–MS: the separated components are fed straight into a mass spectrometer for identification. Used in forensics, drug testing and environmental analysis.</li>
</ul>
<h3>Combining techniques to identify a compound</h3>
<ol>
<li><b>Elemental analysis</b> → empirical formula.</li>
<li><b>Mass spectrum</b> → M<sub>r</sub>, so molecular formula; fragments hint at structure.</li>
<li><b>IR spectrum</b> → functional groups (O–H, C=O…).</li>
<li><b>Chemical tests</b> (Tollens', 2,4-DNPH, carbonate, iodoform).</li>
<li><b><sup>13</sup>C and <sup>1</sup>H NMR</b> → carbon skeleton and how the hydrogens are arranged.</li>
</ol>
<p>Explain each piece of evidence in your answer, then draw the final structure and check it fits everything.</p>
`,
  quiz: [
    { q: "Rf if spot moves 3.0 cm and solvent front 7.5 cm?", o: ["0.40", "2.5", "0.25", "4.5"], a: 0, e: "" },
    { q: "Why draw the TLC baseline in pencil?", o: ["Pencil doesn't dissolve in the solvent", "It's cheaper", "Ink is more visible", "It reacts with silica"], a: 0, e: "" },
    { q: "Mobile phase in gas chromatography?", o: ["Inert carrier gas, e.g. He", "Silica", "Water", "Liquid on solid support"], a: 0, e: "" },
    { q: "In GC, what does retention time depend on?", o: ["How strongly the compound interacts with the stationary phase", "The colour", "The detector", "Peak area"], a: 0, e: "" },
    { q: "How can colourless spots on TLC be seen?", o: ["UV light or iodine", "Bromine water", "A pH meter", "Heating to 500 °C"], a: 0, e: "" },
    { q: "Why combine GC with mass spectrometry?", o: ["GC separates; MS identifies each component", "MS separates; GC identifies", "Both separate only", "To make it faster"], a: 0, e: "" },
    { q: "In GC, peak area is proportional to…", o: ["The amount of that component", "Its Mr", "Its boiling point", "Retention time"], a: 0, e: "" },
    { q: "Which technique best shows the number of carbon environments?", o: ["¹³C NMR", "IR", "TLC", "Elemental analysis"], a: 0, e: "" }
  ],
  flashcards: [
    ["Basis of chromatography", "Different affinities for stationary and mobile phases"],
    ["Rf value", "Spot distance ÷ solvent front distance"],
    ["TLC stationary phase", "Silica or alumina on a plate"],
    ["GC phases", "Mobile: inert gas; stationary: liquid on solid support"],
    ["HPLC", "Liquid mobile phase at high pressure; small solid particles"],
    ["Retention time", "Time from injection to detection"],
    ["GC–MS", "GC separates, MS identifies"],
    ["Order of structure evidence", "Composition → MS → IR → tests → NMR"]
  ]
});

S2Data.add({
  id: "6h", group: 6, y2: true, title: "NMR spectroscopy",
  summary: "¹³C and ¹H NMR: chemical shift, number of environments, integration, splitting and TMS.",
  notes: R`
<h3>How NMR works</h3>
<ul>
<li>Nuclei with an odd mass number (<sup>1</sup>H, <sup>13</sup>C) have spin. In a strong magnetic field they absorb radio waves.</li>
<li>The <b>chemical shift, δ</b> (in ppm), depends on the <b>environment</b>: nearby electronegative atoms deshield the nucleus and increase δ.</li>
<li><b>TMS</b>, Si(CH<sub>3</sub>)<sub>4</sub>, is the reference at δ = 0. It gives a single strong peak, is inert, non-toxic and volatile (easily removed).</li>
<li>Samples are dissolved in <b>deuterated solvents</b> like CDCl<sub>3</sub>, which contain no <sup>1</sup>H and so give no peak.</li>
</ul>
<h3><sup>13</sup>C NMR</h3>
<p>The <b>number of peaks</b> = number of different carbon environments. Use symmetry: propanone has 2 environments; propanal has 3. Peak heights don't matter. C=O carbons appear at δ 160–220.</p>
<h3><sup>1</sup>H NMR</h3>
<ul>
<li><b>Number of peaks</b> = number of proton environments.</li>
<li><b>Integration</b> (relative peak area) = ratio of hydrogens in each environment.</li>
<li><b>Splitting</b>, the <b>n + 1 rule</b>: a peak is split into n + 1 lines by n hydrogens on <b>adjacent</b> carbons. Singlet (0 neighbours), doublet (1), triplet (2), quartet (3).</li>
<li>H on O or N usually gives a singlet and isn't split. Add D<sub>2</sub>O: the –OH or –NH peak <b>disappears</b> (H swapped for D).</li>
</ul>
<h3>Typical <sup>1</sup>H shifts</h3>
<table>
<tr><th>Environment</th><th>δ / ppm</th></tr>
<tr><td>R–CH<sub>3</sub></td><td>0.9–1.0</td></tr>
<tr><td>CH<sub>3</sub>–C=O</td><td>2.0–2.5</td></tr>
<tr><td>O–CH (alcohol, ester)</td><td>3.3–4.3</td></tr>
<tr><td>Ar–H (benzene ring)</td><td>6.5–8.0</td></tr>
<tr><td>R–CHO</td><td>9.0–10.0</td></tr>
<tr><td>R–COOH</td><td>10–12</td></tr>
</table>
<p><b>Example</b>: ethanol shows three peaks: CH<sub>3</sub> (triplet, 3H, δ 1.2), CH<sub>2</sub> (quartet, 2H, δ 3.7), OH (singlet, 1H). An ethyl group always gives a triplet + quartet pair.</p>
<p>MRI scanning uses <sup>1</sup>H NMR of water in body tissues.</p>
`,
  quiz: [
    { q: "Number of ¹³C environments in propanone?", o: ["2", "3", "1", "4"], a: 0, e: "" },
    { q: "Why is TMS used in NMR?", o: ["Single peak at δ 0; inert, volatile, non-toxic", "It's a solvent", "It has no hydrogens", "It gives many peaks"], a: 0, e: "" },
    { q: "A CH₂ next to a CH₃ appears as a…", o: ["Quartet", "Triplet", "Doublet", "Singlet"], a: 0, e: "n + 1 = 4." },
    { q: "Why use CDCl₃ as the solvent?", o: ["No ¹H, so no solvent peak", "It's cheap", "It reacts with the sample", "It's a reference"], a: 0, e: "" },
    { q: "How can you identify an –OH peak?", o: ["Add D₂O: it disappears", "It's always a quartet", "It's at δ 0", "It splits into 4"], a: 0, e: "" },
    { q: "A peak at δ 9.8 suggests…", o: ["An aldehyde H", "An alkane CH₃", "An aromatic H", "TMS"], a: 0, e: "" },
    { q: "¹H NMR of ethanal (CH₃CHO): peaks?", o: ["Doublet (3H) and quartet (1H)", "Two singlets", "Triplet and quartet", "One singlet"], a: 0, e: "" },
    { q: "Integration in ¹H NMR tells you…", o: ["The ratio of hydrogens in each environment", "The number of carbons", "The Mr", "The bond type"], a: 0, e: "" },
    { q: "Number of ¹H environments in methyl propanoate, CH₃CH₂COOCH₃?", o: ["3", "2", "4", "8"], a: 0, e: "" }
  ],
  flashcards: [
    ["Chemical shift δ", "Position of peak (ppm) relative to TMS; depends on environment"],
    ["TMS", "Si(CH₃)₄; reference δ 0; inert, volatile"],
    ["Deuterated solvent", "e.g. CDCl₃; no ¹H peak"],
    ["¹³C NMR peaks", "Number of carbon environments"],
    ["¹H integration", "Relative number of H in each environment"],
    ["n + 1 rule", "n H on adjacent C → n + 1 lines"],
    ["Ethyl group signature", "Triplet (3H) + quartet (2H)"],
    ["D₂O shake", "OH/NH peak disappears"],
    ["Aldehyde H shift", "δ 9–10"],
    ["Aromatic H shift", "δ 6.5–8.0"]
  ]
});

S2Data.detail("2a", { mistakes: ["Defining A<sub>r</sub> as 'the average mass of an atom'. You must say <b>weighted mean</b> and <b>relative to 1/12 of carbon-12</b>.", "Forgetting state symbols in ionisation equations: X(g) → X<sup>+</sup>(g) + e<sup>−</sup>."], tips: ["In mass-spec questions, say that all ions are given the <b>same kinetic energy</b>, so lighter ions travel faster. That's the key mark.", "If a question gives the time of flight, use KE = ½mv<sup>2</sup> and v = d/t. Remember to convert mass into kg per ion (divide molar mass in kg by the Avogadro constant)."], fact: "Mass spectrometers on the Curiosity rover analyse Martian rocks and air by working out the m/z of their ions." });
S2Data.detail("2b", { mistakes: ["Using °C or dm<sup>3</sup> in pV = nRT. Always convert to K and m<sup>3</sup>.", "Rounding too early in multi-step calculations."], tips: ["Write units at every step: it catches conversion errors."], fact: "A mole of grains of sand would cover the UK to a depth of several kilometres." });
S2Data.detail("2c", { mistakes: ["Halving the burette uncertainty instead of doubling it for a titre.", "Confusing percentage yield with atom economy."], tips: ["In back titrations, write three lines: moles added, moles left over (from the titration), moles reacted = difference."], fact: "The pharmaceutical industry can produce over 100 kg of waste per kilogram of drug, which is why atom economy matters so much." });
S2Data.detail("2d", { mistakes: ["Writing oxidation numbers as '2+' instead of '+2'. Charges have the sign after; oxidation numbers before.", "Forgetting that O in peroxides is −1."], tips: ["After combining half-equations, check both atoms and charges balance before moving on."], fact: "Chlorate(V) salts were once used in weedkillers and matches because they're such powerful oxidisers." });
S2Data.detail("2e", { mistakes: ["Writing Fe<sup>2+</sup> as [Ar] 3d<sup>4</sup> 4s<sup>2</sup>. The 4s electrons go first.", "Explaining the Group 6 dip with 'half-full p sub-shell stability'. Examiners want <b>repulsion between paired electrons</b>."], tips: ["For IE trends, always mention all three factors: nuclear charge, distance and shielding.", "When reading successive IE data, look for the biggest jump: the number of electrons before it is the group number."], fact: "The first ionisation energy of helium (2372 kJ/mol) is the highest of any element." });
S2Data.detail("2f", { mistakes: ["Calling ionic bonding 'transfer of electrons'. Transfer forms the ions; the bond is the electrostatic attraction."], tips: ["Compare melting points with charge and ionic radius: e.g. MgO > NaCl because Mg<sup>2+</sup> and O<sup>2−</sup> have double the charge and are smaller."], fact: "Aluminium chloride is so polarised that, as a vapour, it exists as Al<sub>2</sub>Cl<sub>6</sub> molecules with dative bonds." });
S2Data.detail("2g", { mistakes: ["Forgetting to state both the shape name and the bond angle.", "Counting a double bond as two electron regions. It's one region for shape purposes."], tips: ["Draw the molecule with wedges and dashes for 3D shapes; examiners reward a clear diagram showing lone pairs."], fact: "SF<sub>6</sub> is so unreactive and dense that a balloon full of it sinks, and breathing it makes your voice very deep." });
S2Data.detail("2h", { mistakes: ["Drawing a hydrogen bond from H to H. It must go from δ+ H to a lone pair on N, O or F.", "Saying covalent bonds break when a simple molecular substance boils."], tips: ["For hydrogen bonding diagrams: show δ+ and δ−, the lone pair, and a dashed line at 180° from O–H."], fact: "Without hydrogen bonding, water would boil at around −80 °C and life as we know it couldn't exist." });
S2Data.detail("3a", { mistakes: ["Saying silicon has 'strong intermolecular forces'. Silicon is giant covalent: you break covalent bonds.", "Saying the bonds in S<sub>8</sub> break when it melts. Only London forces between molecules are overcome."], tips: ["Draw a quick sketch of the Period 3 melting point graph from memory before tackling questions on it."], fact: "Sulfur's S<sub>8</sub> molecules are crown-shaped rings of eight atoms." });
S2Data.detail("3b", { mistakes: ["Saying metals have 'free electrons and free ions'. The ions are fixed in a lattice; only the electrons are delocalised."], tips: ["When choosing a structure from data, check conductivity in solid and liquid states first: it narrows the options fast."], fact: "Graphene is about 200 times stronger than steel by weight, yet a sheet one atom thick." });
S2Data.detail("3c", { mistakes: ["Saying thermal stability decreases down the group. It <b>increases</b>.", "Forgetting that lithium compounds behave like Group 2 compounds (small, polarising ion)."], tips: ["Thermal stability explanations need: cation size, charge density, polarisation of the anion, and weakening of its bonds."], fact: "Fireworks use strontium for red, barium for green and copper for blue: the same chemistry as flame tests." });
S2Data.detail("3d", { mistakes: ["Mixing up reducing power of halide ions and oxidising power of halogens. They go in opposite directions down the group."], tips: ["For the H<sub>2</sub>SO<sub>4</sub> reactions, give the oxidation state change of sulfur for each product: SO<sub>2</sub> (+4), S (0), H<sub>2</sub>S (−2)."], fact: "Fluorine is so reactive that it took chemists 74 years to isolate it, injuring several along the way." });
S2Data.detail("3e", { mistakes: ["Using the mass of the fuel or solid in Q = mcΔT. m is the mass of the <b>water or solution</b>.", "Forgetting the negative sign when the temperature rises."], tips: ["Always convert Q from J to kJ before dividing by moles, and give 3 significant figures."], fact: "A bomb calorimeter is used to measure the energy in food labels: food is burned in pure oxygen inside a sealed steel container." });
S2Data.detail("3f", { mistakes: ["Mixing up the formation and combustion rules. Formation: products − reactants. Combustion: reactants − products.", "Forgetting to multiply by the number of moles in the equation."], tips: ["Draw out every molecule's bonds before counting for bond enthalpy questions. Missing one C–H is the usual slip."], fact: "Hess published his law in 1840, before the idea of energy conservation was fully accepted." });
S2Data.detail("3g", { mistakes: ["Saying higher temperature increases rate 'because there are more collisions'. The key point is that more collisions have energy ≥ E<sub>a</sub>.", "Drawing M–B curves that touch the x-axis at high energy, or that don't start at the origin."], tips: ["When drawing a higher-temperature M–B curve, make sure the area looks the same: lower peak, further right, and it must sit above the original curve at high energy."], fact: "Enzymes are biological catalysts that can speed up reactions by factors of more than 10<sup>15</sup>." });
S2Data.detail("3h", { mistakes: ["Saying that increasing pressure or concentration changes K<sub>c</sub>. Only temperature does.", "Including solids in the K<sub>c</sub> expression."], tips: ["In Le Chatelier answers, state the change, the direction of shift and the reason (e.g. 'fewer moles of gas on the right')."], fact: "The Haber process makes about 150 million tonnes of ammonia a year, and about half the nitrogen in your body passed through it." });
S2Data.detail("4a", { mistakes: ["Using cis/trans for molecules without an H on each C=C carbon. Use E/Z with priorities.", "Numbering from the wrong end of the chain."], tips: ["For E/Z, draw the molecule with the double bond horizontal, circle the higher-priority group on each carbon, then compare sides."], fact: "Fumaric acid (E) and maleic acid (Z) have the same formula, but one melts at 287 °C and the other at 135 °C." });
S2Data.detail("4b", { mistakes: ["Writing propagation steps that produce H•. In propagation, Cl• takes an H to form HCl."], tips: ["In propagation steps the radical on the left must appear as a different radical on the right."], fact: "The ozone hole over Antarctica has been slowly recovering since CFCs were banned by the 1987 Montreal Protocol." });
S2Data.detail("4c", { mistakes: ["Starting the first curly arrow from a carbon atom. It must start from the <b>middle of the double bond</b>.", "Forgetting the lone pair and negative charge on Br<sup>−</sup> in the second step."], tips: ["Always draw the carbocation intermediate with a + on the correct carbon; it's often a separate mark."], fact: "Poly(ethene) was discovered by accident in 1933 when a trace of oxygen catalysed ethene polymerising under high pressure." });
S2Data.detail("4d", { mistakes: ["Forgetting that aldehydes need to be distilled off as they form, or they oxidise further.", "Writing O<sub>2</sub> instead of [O] in oxidation equations."], tips: ["Learn the reflux and distillation diagrams: you may be asked to draw them or spot errors (e.g. a sealed system)."], fact: "Breathalysers once used the orange-to-green colour change of dichromate to detect ethanol on the breath." });
S2Data.detail("4e", { mistakes: ["Saying polarity controls the rate of hydrolysis. C–F is the most polar bond but the slowest to break: <b>bond enthalpy</b> controls it."], tips: ["Aqueous → substitution; ethanolic → elimination. Write the solvent in your answer: it's often the mark."], fact: "CFCs are so stable they can last over 100 years in the atmosphere." });
S2Data.detail("4f", { mistakes: ["Calling the tallest peak the molecular ion peak. That's the <b>base peak</b>; M<sup>+</sup> is at the highest m/z."], tips: ["In IR questions, quote the wavenumber range from the data sheet and name the bond, e.g. 'broad absorption at 3300 cm<sup>−1</sup>: O–H in an alcohol'."], fact: "IR cameras at airports and in phones work because warm objects emit infrared, the same radiation molecules absorb." });
S2Data.detail("5a", { mistakes: ["Working out orders from the balanced equation. Orders must come from experimental data."], tips: ["In initial rates tables, find two experiments where only one concentration changes. Write the factor change in concentration and in rate side by side."], fact: "The iodine clock reaction was first described by Hans Landolt in 1886, and it's still used in schools today." });
S2Data.detail("5b", { mistakes: ["Forgetting to convert E<sub>a</sub> from J to kJ, or using the gradient without the minus sign."], tips: ["When proposing a mechanism, check the steps add up to the overall equation and the RDS contains exactly the species in the rate equation."], fact: "A rough rule of thumb: many reactions double in rate for every 10 °C rise, which matches an E<sub>a</sub> of about 50 kJ mol<sup>−1</sup> near room temperature." });
S2Data.detail("5c", { mistakes: ["Using moles instead of concentrations when the volumes don't cancel.", "Including solids in K<sub>p</sub>."], tips: ["Check that partial pressures add up to the total pressure: it's a quick way to catch arithmetic slips."], fact: "At high temperatures the N<sub>2</sub>O<sub>4</sub>/NO<sub>2</sub> mixture turns darker brown as more NO<sub>2</sub> forms." });
S2Data.detail("5d", { mistakes: ["Using [H<sup>+</sup>] = [acid] for a weak acid.", "Forgetting to double [OH<sup>−</sup>] for Ba(OH)<sub>2</sub>."], tips: ["Give pH to 2 decimal places. In mixing questions, always use the total volume."], fact: "Stomach acid has a pH of about 1.5, and the stomach lining replaces itself every few days to survive it." });
S2Data.detail("5e", { mistakes: ["Explaining buffers without the large reservoir of A<sup>−</sup> from the salt.", "Choosing methyl orange for a weak acid–strong base titration."], tips: ["For buffer pH after adding NaOH, subtract moles of NaOH from HA and add them to A<sup>−</sup> before using K<sub>a</sub>."], fact: "Red cabbage juice is a natural indicator that goes through red, purple, blue, green and yellow across the pH range." });
S2Data.detail("5f", { mistakes: ["Forgetting to double the Cl steps for MgCl<sub>2</sub>.", "Getting the sign of lattice energy wrong when it's used in the solution cycle."], tips: ["Draw Born–Haber cycles to scale-ish, with arrows pointing up for endothermic steps. Label every level with its species and state symbols."], fact: "The lattice energy of MgO (about −3800 kJ mol<sup>−1</sup>) is why it melts at about 2850 °C and lines furnaces." });
S2Data.detail("5g", { mistakes: ["Forgetting to convert ΔS from J to kJ (or ΔH from kJ to J). This is the most common lost mark in this topic."], tips: ["Learn the four-row sign table. Many questions just ask you to explain why a reaction becomes feasible above a certain temperature."], fact: "Diamonds are thermodynamically unstable compared with graphite at room temperature, but the activation energy is so high they last billions of years." });
S2Data.detail("5h", { mistakes: ["Saying electrons flow through the salt bridge. Electrons flow through the wire; ions flow through the salt bridge.", "Reversing the subtraction when calculating E<sub>cell</sub>."], tips: ["For feasibility, use the anticlockwise rule: write the more negative half-equation on top; the reaction goes anticlockwise."], fact: "The Apollo spacecraft used hydrogen–oxygen fuel cells, and the astronauts drank the water they produced." });
S2Data.detail("5i", { mistakes: ["Forgetting to scale up to the full volume when only a 25.0 cm<sup>3</sup> portion of a 250 cm<sup>3</sup> solution was titrated."], tips: ["Write out the mole ratio before calculating. For iodine titrations, chain the ratios: oxidant → I<sub>2</sub> → thiosulfate."], fact: "Iodometric titrations were used to measure the vitamin C content of foods for decades." });
S2Data.detail("5j", { mistakes: ["Removing 3d electrons before 4s when writing ion configurations.", "Saying the colour seen is the colour absorbed. It's the complementary colour."], tips: ["When drawing complexes, draw dative bonds from the ligand's donor atom (e.g. N of NH<sub>3</sub>, O of H<sub>2</sub>O) and include the overall charge."], fact: "Cisplatin was discovered by accident in 1965, when platinum electrodes stopped bacteria dividing in an experiment." });
S2Data.detail("5k", { mistakes: ["Mixing up excess NaOH and excess NH<sub>3</sub> results for Cr<sup>3+</sup> and Cu<sup>2+</sup>."], tips: ["Learn the colours as a table and practise writing the equations for both precipitation (deprotonation) and ligand exchange."], fact: "Vanadium redox flow batteries store grid-scale energy using V<sup>2+</sup>/V<sup>3+</sup> and VO<sup>2+</sup>/VO<sub>2</sub><sup>+</sup> in tanks of solution." });
S2Data.detail("6a", { mistakes: ["Drawing the intermediate's horseshoe covering all six carbons. It should cover five, with the + inside, leaving the carbon with H and the electrophile out."], tips: ["Always write the equation for generating the electrophile and for regenerating the catalyst (e.g. H<sup>+</sup> + FeBr<sub>4</sub><sup>−</sup> → FeBr<sub>3</sub> + HBr)."], fact: "Benzene was first isolated by Michael Faraday in 1825 from the oily residue of gas lamps." });
S2Data.detail("6b", { mistakes: ["Saying 2,4-DNPH distinguishes aldehydes from ketones. It reacts with both; Tollens' or Fehling's distinguishes them."], tips: ["In the HCN mechanism, draw the lone pair on C of CN<sup>−</sup>, the arrow to C<sup>δ+</sup>, and the arrow from C=O to O. Then protonate."], fact: "Cinnamaldehyde gives cinnamon its flavour and vanillin, also an aldehyde, gives vanilla its scent." });
S2Data.detail("6c", { mistakes: ["Naming esters back to front: the alcohol part comes first (ethyl ethanoate, not ethanoyl ethyl)."], tips: ["For condensation polymers, draw the repeat unit with the ester or amide link and open bonds at each end, and remember to state what small molecule is lost."], fact: "Pineapple flavouring is mostly ethyl butanoate, and pear drops smell of 3-methylbutyl ethanoate." });
S2Data.detail("6d", { mistakes: ["Comparing base strength without mentioning the availability of the lone pair on nitrogen."], tips: ["For amino acids at different pH, protonate NH<sub>2</sub> in acid and deprotonate COOH in alkali. At the isoelectric point it's the zwitterion."], fact: "Kevlar is five times stronger than steel by weight, and its strength comes from hydrogen bonding between neat parallel chains." });
S2Data.detail("6e", { mistakes: ["Drawing enantiomers that are actually the same molecule rotated. Draw them as true mirror images."], tips: ["To find chiral centres, check each sp<sup>3</sup> carbon: does it have four different groups? CH<sub>2</sub> and CH<sub>3</sub> carbons never qualify."], fact: "Limonene's two enantiomers smell of oranges and of lemons." });
S2Data.detail("6f", { mistakes: ["Giving reagents without conditions (e.g. 'KCN' without 'in ethanol, reflux'). Conditions are usually a separate mark."], tips: ["Make a big reaction map of every conversion in Topics 6, 17 and 18 and practise routes from it."], fact: "Victor Grignard won the Nobel Prize in 1912 for his magnesium reagents, which are still used in labs worldwide." });
S2Data.detail("6g", { mistakes: ["Letting the baseline sit below the solvent level, so the spots dissolve into the solvent."], tips: ["In structure questions, quote each piece of evidence and say what it shows. Marks are for the reasoning, not just the final structure."], fact: "GC–MS can detect drugs in sports samples at concentrations below one part per billion." });
S2Data.detail("6h", { mistakes: ["Counting neighbouring hydrogens on the same carbon for splitting. Only hydrogens on <b>adjacent</b> carbons split a peak."], tips: ["Work peak by peak: shift → what's nearby; integration → how many H; splitting → how many H next door. Then build fragments and join them."], fact: "MRI scanners use magnetic fields up to about 3 tesla, around 60 000 times stronger than Earth's field." });
