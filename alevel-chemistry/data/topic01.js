/* A-level Chemistry² — Topic 1: Atomic structure and the Periodic Table (9CH0) */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "Atoms, isotopes and mass spectrometry",
  summary: "Subatomic particles, isotopes, relative masses and how a mass spectrometer works.",
  notes: `
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
  id: "1b", group: 1, y1: true, title: "Electron configurations and ionisation energies",
  summary: "Shells, sub-shells and orbitals; spdf notation; ionisation energy trends as evidence for structure.",
  notes: `
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
  id: "1c", group: 1, y1: true, title: "Periodicity",
  summary: "Trends across Period 3 in atomic radius, ionisation energy, melting point and structure.",
  notes: `
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

S2Data.detail("1a", { mistakes: ["Defining A<sub>r</sub> as 'the average mass of an atom'. You must say <b>weighted mean</b> and <b>relative to 1/12 of carbon-12</b>.", "Forgetting state symbols in ionisation equations: X(g) → X<sup>+</sup>(g) + e<sup>−</sup>."], tips: ["In mass-spec questions, say that all ions are given the <b>same kinetic energy</b>, so lighter ions travel faster. That's the key mark.", "If a question gives the time of flight, use KE = ½mv<sup>2</sup> and v = d/t. Remember to convert mass into kg per ion (divide molar mass in kg by the Avogadro constant)."], fact: "Mass spectrometers on the Curiosity rover analyse Martian rocks and air by working out the m/z of their ions." });
S2Data.detail("1b", { mistakes: ["Writing Fe<sup>2+</sup> as [Ar] 3d<sup>4</sup> 4s<sup>2</sup>. The 4s electrons go first.", "Explaining the Group 6 dip with 'half-full p sub-shell stability'. Edexcel wants <b>repulsion between paired electrons</b>."], tips: ["For IE trends, always mention all three factors: nuclear charge, distance and shielding.", "When reading successive IE data, look for the biggest jump: the number of electrons before it is the group number."], fact: "The first ionisation energy of helium (2372 kJ/mol) is the highest of any element." });
S2Data.detail("1c", { mistakes: ["Saying silicon has 'strong intermolecular forces'. Silicon is giant covalent: you break covalent bonds.", "Saying the bonds in S<sub>8</sub> break when it melts. Only London forces between molecules are overcome."], tips: ["Draw a quick sketch of the Period 3 melting point graph from memory before tackling questions on it."], fact: "Sulfur's S<sub>8</sub> molecules are crown-shaped rings of eight atoms." });
