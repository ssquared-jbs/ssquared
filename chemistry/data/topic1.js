/* Topic 1 — Principles of chemistry (Edexcel IGCSE 4CH1) */

CHEM.add({
  id: "1a", group: 1, title: "States of matter",
  summary: "Solids, liquids and gases, changes of state, diffusion and solubility.",
  notes: R`
<h3>The three states of matter</h3>
<table>
<tr><th></th><th>Solid</th><th>Liquid</th><th>Gas</th></tr>
<tr><td>Arrangement</td><td>Regular, closely packed</td><td>Random, close together</td><td>Random, far apart</td></tr>
<tr><td>Movement</td><td>Vibrate about fixed positions</td><td>Move around each other</td><td>Move quickly in all directions</td></tr>
<tr><td>Energy of particles</td><td>Lowest</td><td>Medium</td><td>Highest</td></tr>
<tr><td>Forces between particles</td><td>Strong</td><td>Weaker</td><td>Very weak</td></tr>
<tr><td>Shape / volume</td><td>Fixed shape, fixed volume</td><td>Takes the container's shape, fixed volume</td><td>Fills the container</td></tr>
</table>

<h3>Changes of state</h3>
<ul>
<li><b>Melting</b> (solid → liquid) and <b>boiling/evaporating</b> (liquid → gas): energy is taken in. Particles gain kinetic energy and overcome the forces between them.</li>
<li><b>Freezing</b> (liquid → solid) and <b>condensing</b> (gas → liquid): energy is given out as forces form between particles.</li>
<li><b>Sublimation</b>: solid → gas directly, e.g. solid carbon dioxide ("dry ice") or iodine.</li>
<li><b>Evaporation</b> happens at the surface at any temperature. <b>Boiling</b> happens throughout the liquid at the boiling point.</li>
<li>During a change of state, the temperature stays <b>constant</b>. The energy goes into overcoming forces, not into raising the temperature. This is why heating and cooling curves have flat sections.</li>
</ul>

<h3>Diffusion and dilution</h3>
<p><b>Diffusion</b> is the net movement of particles from an area of high concentration to an area of low concentration, caused by their random motion. It is evidence that particles exist and are moving.</p>
<div class="box box-prac"><span class="box-title">🔬 Experiments to know</span>
<ul>
<li><b>Potassium manganate(VII) in water:</b> a purple crystal dropped into water slowly colours all of it. Diluting the solution again and again still leaves a colour, showing there are many, very small particles.</li>
<li><b>Ammonia and hydrogen chloride:</b> put cotton wool soaked in concentrated ammonia at one end of a glass tube and hydrochloric acid at the other. A white ring of ammonium chloride forms <b>closer to the HCl end</b>. NH<sub>3</sub> (M<sub>r</sub> 17) is lighter than HCl (M<sub>r</sub> 36.5), so it diffuses faster.</li>
<li>Bromine gas spreads through air in a gas jar, but much faster through a vacuum.</li>
</ul></div>
<div class="eq">NH<sub>3</sub>(g) + HCl(g) → NH<sub>4</sub>Cl(s)</div>

<h3>Solutions</h3>
<ul>
<li><b>Solute</b>: the substance that dissolves. <b>Solvent</b>: the liquid it dissolves in. <b>Solution</b>: the mixture formed.</li>
<li><b>Saturated solution</b>: a solution that contains as much solute as can dissolve at that temperature.</li>
<li><b>Solubility</b> is measured in <b>g of solute per 100 g of solvent</b>. For most solids it increases with temperature.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: solubility curves</span>
<ul>
<li>A solubility curve plots solubility (g per 100 g water) against temperature.</li>
<li>To find the mass of crystals formed on cooling: <b>solubility at the higher temperature − solubility at the lower temperature</b>. Scale this if the mass of water isn't 100 g.</li>
</ul>
<p><span class="tag tag-p">Practical</span> <b>Investigate the solubility of a solid in water at a specific temperature:</b> make a saturated solution at a known temperature. Pour some into a weighed evaporating basin and weigh again. Evaporate the water and weigh the dry solid. Mass of water = (basin + solution) − (basin + solid). Solubility = mass of solid ÷ mass of water × 100.</p></div>
<div class="box box-tip"><span class="box-title">Exam tip</span>When you explain a change of state, always mention <b>energy</b> and <b>forces between particles</b>.</div>
`,
  flashcards: [
    ["Arrangement and movement of particles in a solid", "Regular, closely packed; vibrate about fixed positions"],
    ["Arrangement and movement of particles in a gas", "Random, far apart; move quickly in all directions"],
    ["Sublimation", "Changing directly from a solid to a gas (e.g. dry ice, iodine)"],
    ["Diffusion", "Net movement of particles from high to low concentration due to random motion"],
    ["Why does the NH<sub>4</sub>Cl ring form nearer the HCl end?", "NH<sub>3</sub> has a lower M<sub>r</sub>, so it moves faster and diffuses further"],
    ["Saturated solution", "A solution containing the maximum mass of solute that can dissolve at that temperature"],
    ["Units of solubility", "g of solute per 100 g of solvent (water)"],
    ["Why is temperature constant while a substance melts?", "Energy is used to overcome forces between particles, not to raise the temperature"],
    ["Evaporation vs boiling", "Evaporation happens at the surface at any temperature; boiling happens throughout the liquid at the boiling point"],
    ["Solute / solvent / solution", "Solute dissolves; the solvent does the dissolving; together they make a solution"]
  ],
  quiz: [
    { q: "Which change of state takes in energy?", o: ["Melting", "Freezing", "Condensing", "Solidifying"], a: 0, e: "Melting needs energy to overcome the forces between particles." },
    { q: "A white ring forms in a tube with NH<sub>3</sub> at one end and HCl at the other. Where is it?", o: ["Nearer the HCl end", "Nearer the NH<sub>3</sub> end", "Exactly in the middle", "At both ends"], a: 0, e: "NH<sub>3</sub> is lighter, so it diffuses faster and travels further." },
    { q: "What is the name for solid → gas directly?", o: ["Sublimation", "Evaporation", "Condensation", "Deposition"], a: 0, e: "Dry ice (solid CO<sub>2</sub>) sublimes." },
    { q: "Which describes particles in a liquid?", o: ["Close together, random arrangement, move around each other", "Far apart, random, move quickly", "Regular arrangement, vibrate only", "Far apart, regular arrangement"], a: 0, e: "" },
    { q: "Solubility is usually measured in…", o: ["g per 100 g of water", "mol per dm<sup>3</sup> of gas", "g per cm<sup>3</sup>", "°C per g"], a: 0, e: "" },
    { q: "Solubility of X: 60 g/100 g at 60 °C and 20 g/100 g at 20 °C. A saturated solution in 100 g of water is cooled from 60 °C to 20 °C. What mass of crystals forms?", o: ["40 g", "80 g", "20 g", "60 g"], a: 0, e: "60 − 20 = 40 g." },
    { q: "Why does the temperature stay constant while water boils?", o: ["Energy is used to overcome forces between particles", "The particles stop moving", "No energy is being supplied", "The particles lose kinetic energy"], a: 0, e: "" },
    { q: "Potassium manganate(VII) still colours water after many dilutions. What does this show?", o: ["There are many very small particles", "The particles are large", "It reacts with water", "Particles don't move"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1b", group: 1, title: "Elements, compounds and mixtures",
  summary: "Pure substances, separation techniques and paper chromatography.",
  notes: R`
<h3>Definitions</h3>
<ul>
<li><b>Element</b>: a substance made of only one type of atom. It can't be broken down chemically.</li>
<li><b>Compound</b>: two or more elements <b>chemically combined</b> in fixed proportions.</li>
<li><b>Mixture</b>: two or more substances <b>not chemically combined</b>. They can be separated by physical methods.</li>
</ul>
<h3>Pure vs impure</h3>
<ul>
<li>A <b>pure</b> substance has a <b>sharp</b> (fixed) melting point. Pure water melts at 0 °C and boils at 100 °C.</li>
<li>A <b>mixture</b> or impure substance melts over a <b>range</b> of temperatures, usually lower than the pure substance.</li>
</ul>
<h3>Separation techniques</h3>
<table>
<tr><th>Method</th><th>Separates</th><th>Example</th></tr>
<tr><td>Filtration</td><td>An insoluble solid from a liquid</td><td>Sand from water</td></tr>
<tr><td>Crystallisation</td><td>A soluble solid from its solution</td><td>Copper sulfate crystals from solution: heat to evaporate some water, leave to cool, filter, dry</td></tr>
<tr><td>Simple distillation</td><td>A solvent from a solution</td><td>Pure water from salt water</td></tr>
<tr><td>Fractional distillation</td><td>Miscible liquids with different boiling points</td><td>Ethanol and water; crude oil</td></tr>
<tr><td>Paper chromatography</td><td>Substances in a mixture (e.g. dyes)</td><td>Inks, food colourings</td></tr>
</table>
<p><b>Simple distillation:</b> heat the solution and the solvent evaporates. The vapour cools and condenses in a Liebig condenser, then is collected as the distillate.</p>
<p><b>Fractional distillation</b> uses a fractionating column. The liquid with the lowest boiling point reaches the top first and distils over.</p>

<h3>Paper chromatography</h3>
<div class="box box-prac"><span class="box-title">🔬 Practical: investigate inks using paper chromatography</span>
<ol>
<li>Draw a start line in <b>pencil</b> (it won't dissolve) about 1–2 cm from the bottom of the paper.</li>
<li>Put small spots of each ink on the line.</li>
<li>Stand the paper in a solvent with the solvent level <b>below</b> the start line, so the spots don't dissolve into it.</li>
<li>Let the solvent rise. Remove the paper and mark the <b>solvent front</b>.</li>
</ol></div>
<ul>
<li>Each substance separates because it has a different solubility in the solvent and a different attraction to the paper.</li>
<li>A <b>pure</b> substance gives <b>one</b> spot. A mixture gives several.</li>
<li>Spots that travel the same distance (same R<sub>f</sub> in the same solvent) are likely to be the same substance.</li>
</ul>
<div class="eq">R<sub>f</sub> = distance moved by substance ÷ distance moved by solvent</div>
<p>R<sub>f</sub> is always between 0 and 1. A substance that stays on the start line may be insoluble in that solvent.</p>
`,
  flashcards: [
    ["Element", "A substance made of only one type of atom"],
    ["Compound", "Two or more elements chemically combined in fixed proportions"],
    ["Mixture", "Two or more substances not chemically combined"],
    ["How do you tell whether a substance is pure?", "A pure substance has a sharp melting/boiling point; an impure one melts over a range"],
    ["Formula for R<sub>f</sub>", "Distance moved by substance ÷ distance moved by solvent"],
    ["Why draw the chromatography start line in pencil?", "Pencil (graphite) doesn't dissolve in the solvent"],
    ["Why must the solvent be below the start line?", "Otherwise the spots dissolve into the solvent instead of moving up the paper"],
    ["Method to separate miscible liquids", "Fractional distillation"],
    ["Method to get pure water from salt water", "Simple distillation"],
    ["Method to get crystals of a soluble salt", "Crystallisation: evaporate some water, cool, filter, dry"]
  ],
  quiz: [
    { q: "Which technique separates ethanol from water?", o: ["Fractional distillation", "Filtration", "Crystallisation", "Chromatography"], a: 0, e: "They are miscible liquids with different boiling points." },
    { q: "A spot moves 3.0 cm and the solvent front moves 7.5 cm. What is the R<sub>f</sub>?", o: ["0.40", "2.5", "0.25", "4.5"], a: 0, e: "3.0 ÷ 7.5 = 0.40" },
    { q: "How does an impure substance behave when melted?", o: ["It melts over a range of temperatures", "It has a sharp melting point", "It doesn't melt", "It melts at exactly 100 °C"], a: 0, e: "" },
    { q: "Which of these is a compound?", o: ["Water", "Oxygen", "Air", "Sea water"], a: 0, e: "Air and sea water are mixtures. Oxygen is an element." },
    { q: "Why is the start line drawn in pencil?", o: ["Pencil doesn't dissolve in the solvent", "Ink is more expensive", "Pencil moves with the solvent", "It makes the R<sub>f</sub> bigger"], a: 0, e: "" },
    { q: "A food dye gives three spots on a chromatogram. What does this show?", o: ["It is a mixture of at least three substances", "It is pure", "It is insoluble", "It is an element"], a: 0, e: "" },
    { q: "Which method separates sand from salt solution?", o: ["Filtration", "Distillation", "Chromatography", "Crystallisation"], a: 0, e: "Sand is insoluble, so it stays in the filter paper as residue." },
    { q: "In simple distillation, what does the condenser do?", o: ["Cools the vapour back into a liquid", "Heats the solution", "Filters out solids", "Separates the colours"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1c", group: 1, title: "Atomic structure",
  summary: "Protons, neutrons, electrons, isotopes and relative atomic mass.",
  notes: R`
<h3>Atoms and molecules</h3>
<ul>
<li><b>Atom</b>: the smallest particle of an element that can take part in a chemical reaction.</li>
<li><b>Molecule</b>: two or more atoms joined by covalent bonds, e.g. O<sub>2</sub>, H<sub>2</sub>O.</li>
</ul>
<h3>Subatomic particles</h3>
<table>
<tr><th>Particle</th><th>Relative mass</th><th>Relative charge</th><th>Location</th></tr>
<tr><td>Proton</td><td>1</td><td>+1</td><td>Nucleus</td></tr>
<tr><td>Neutron</td><td>1</td><td>0</td><td>Nucleus</td></tr>
<tr><td>Electron</td><td>1/1836 (almost 0)</td><td>−1</td><td>Shells around the nucleus</td></tr>
</table>
<ul>
<li>Almost all the mass of an atom is in the tiny nucleus. Most of the atom is empty space.</li>
<li>Atoms are neutral: number of protons = number of electrons.</li>
</ul>
<h3>Atomic number and mass number</h3>
<ul>
<li><b>Atomic number (Z)</b>: number of protons. Each element has a unique atomic number.</li>
<li><b>Mass number (A)</b>: total number of protons + neutrons.</li>
<li>Number of neutrons = mass number − atomic number.</li>
</ul>
<p>Example: <sup>23</sup><sub>11</sub>Na has 11 protons, 11 electrons and 23 − 11 = 12 neutrons.</p>
<h3>Isotopes</h3>
<p><b>Isotopes</b> are atoms of the same element with the same number of protons but different numbers of neutrons. They have the same chemical properties because they have the same electronic configuration.</p>
<h3>Relative atomic mass (A<sub>r</sub>)</h3>
<p>A<sub>r</sub> is the average mass of an atom of an element, taking into account the abundance of its isotopes, relative to 1/12 of the mass of a carbon-12 atom.</p>
<div class="eq">A<sub>r</sub> = Σ(isotope mass × % abundance) ÷ 100</div>
<div class="box box-key"><span class="box-title">Worked example</span>Chlorine is 75% <sup>35</sup>Cl and 25% <sup>37</sup>Cl.<br>A<sub>r</sub> = (35 × 75 + 37 × 25) ÷ 100 = (2625 + 925) ÷ 100 = <b>35.5</b></div>
`,
  flashcards: [
    ["Relative mass and charge of a proton", "Mass 1, charge +1"],
    ["Relative mass and charge of a neutron", "Mass 1, charge 0"],
    ["Relative mass and charge of an electron", "Mass 1/1836 (negligible), charge −1"],
    ["Atomic number", "Number of protons in the nucleus"],
    ["Mass number", "Number of protons + neutrons"],
    ["Isotopes", "Atoms of the same element with the same number of protons but different numbers of neutrons"],
    ["Why do isotopes react the same way?", "They have the same electronic configuration"],
    ["Relative atomic mass (A<sub>r</sub>)", "Weighted average mass of an element's isotopes, relative to 1/12 of the mass of a carbon-12 atom"],
    ["Molecule", "Two or more atoms joined by covalent bonds"]
  ],
  quiz: [
    { q: "How many neutrons are in <sup>27</sup><sub>13</sub>Al?", o: ["14", "13", "27", "40"], a: 0, e: "27 − 13 = 14" },
    { q: "What do isotopes of an element have different numbers of?", o: ["Neutrons", "Protons", "Electrons", "Shells"], a: 0, e: "" },
    { q: "Copper is 69% <sup>63</sup>Cu and 31% <sup>65</sup>Cu. What is its A<sub>r</sub> (1 d.p.)?", o: ["63.6", "64.0", "63.0", "64.4"], a: 0, e: "(63×69 + 65×31)/100 = 63.62" },
    { q: "What is the relative charge of an electron?", o: ["−1", "+1", "0", "−2"], a: 0, e: "" },
    { q: "Where is most of the mass of an atom?", o: ["In the nucleus", "In the electron shells", "Spread evenly", "In the empty space"], a: 0, e: "" },
    { q: "The atomic number is the number of…", o: ["Protons", "Neutrons", "Protons + neutrons", "Electron shells"], a: 0, e: "" },
    { q: "An atom has 17 protons and 18 neutrons. What is its mass number?", o: ["35", "17", "18", "1"], a: 0, e: "" },
    { q: "Why are atoms electrically neutral?", o: ["They have equal numbers of protons and electrons", "Neutrons cancel the charge", "Electrons have no charge", "They have equal protons and neutrons"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1d", group: 1, title: "The Periodic Table",
  summary: "Groups, periods, electronic configuration, metals and non-metals.",
  notes: R`
<h3>Layout</h3>
<ul>
<li>Elements are arranged in order of <b>atomic number</b>.</li>
<li><b>Groups</b> are vertical columns. Elements in the same group have the same number of outer-shell electrons, so they have <b>similar chemical properties</b>.</li>
<li><b>Periods</b> are horizontal rows. The period number = the number of occupied electron shells.</li>
</ul>
<h3>Electronic configuration</h3>
<p>Shells fill in order: <b>2, 8, 8</b> (first 20 elements), then the 4th shell.</p>
<table>
<tr><th>Element</th><th>Z</th><th>Configuration</th><th>Group / period</th></tr>
<tr><td>Carbon</td><td>6</td><td>2.4</td><td>Group 4, period 2</td></tr>
<tr><td>Sodium</td><td>11</td><td>2.8.1</td><td>Group 1, period 3</td></tr>
<tr><td>Chlorine</td><td>17</td><td>2.8.7</td><td>Group 7, period 3</td></tr>
<tr><td>Calcium</td><td>20</td><td>2.8.8.2</td><td>Group 2, period 4</td></tr>
</table>
<p>For main-group elements: <b>group number = number of outer electrons</b> (Group 0 elements have full outer shells).</p>
<h3>Metals and non-metals</h3>
<ul>
<li>Metals are on the left and in the centre. Non-metals are on the right.</li>
<li>Classify them by <b>electrical conductivity</b>: metals conduct, most non-metals don't (graphite is an exception).</li>
<li>Classify them by the <b>acid–base character of their oxides</b>: metal oxides are <b>basic</b>, and many non-metal oxides are <b>acidic</b> (e.g. CO<sub>2</sub>, SO<sub>2</sub>).</li>
</ul>
<h3>Group 0 (noble gases)</h3>
<ul>
<li>They have full outer shells, so they don't easily gain, lose or share electrons. They are <b>very unreactive</b>.</li>
<li>They exist as single atoms (monatomic).</li>
</ul>
`,
  flashcards: [
    ["How is the Periodic Table ordered?", "By atomic number"],
    ["What do elements in the same group have in common?", "The same number of outer-shell electrons, so similar chemical properties"],
    ["What does the period number tell you?", "The number of occupied electron shells"],
    ["Electronic configuration of Na", "2.8.1"],
    ["Electronic configuration of Ca", "2.8.8.2"],
    ["Character of metal oxides", "Basic"],
    ["Character of most non-metal oxides", "Acidic"],
    ["Why are noble gases unreactive?", "They have full outer shells"],
    ["Electrical test for metal vs non-metal", "Metals conduct electricity; most non-metals don't (graphite is an exception)"]
  ],
  quiz: [
    { q: "What is the electronic configuration of chlorine (Z = 17)?", o: ["2.8.7", "2.8.8", "2.7.8", "2.8.6"], a: 0, e: "" },
    { q: "An element is 2.8.3. Which group and period is it in?", o: ["Group 3, period 3", "Group 3, period 2", "Group 2, period 3", "Group 8, period 3"], a: 0, e: "Aluminium: 3 shells, 3 outer electrons." },
    { q: "Sulfur dioxide dissolves in water to give an acidic solution. What does this suggest about sulfur?", o: ["It is a non-metal", "It is a metal", "It is a noble gas", "It is an alkali metal"], a: 0, e: "Non-metal oxides are often acidic." },
    { q: "Why do elements in the same group react similarly?", o: ["They have the same number of outer electrons", "They have the same mass number", "They have the same number of shells", "They have the same number of neutrons"], a: 0, e: "" },
    { q: "Which property best classifies an element as a metal?", o: ["It conducts electricity", "It is shiny", "It is a solid", "It has a high density"], a: 0, e: "The spec focuses on conductivity and the character of the oxide." },
    { q: "Elements in the Periodic Table are arranged in order of increasing…", o: ["Atomic number", "Mass number", "Relative atomic mass", "Reactivity"], a: 0, e: "" },
    { q: "Why is argon unreactive?", o: ["It has a full outer shell", "It has no electrons", "It is a metal", "It has 8 shells"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1e", group: 1, title: "Chemical formulae, equations and calculations",
  summary: "Balancing equations, moles, reacting masses, empirical formulae, yield and concentrations.",
  notes: R`
<h3>Equations</h3>
<ul>
<li>Balance equations by changing the numbers <b>in front of</b> formulae, never the formulae themselves.</li>
<li>State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous, meaning dissolved in water.</li>
</ul>
<div class="eq">2Mg(s) + O<sub>2</sub>(g) → 2MgO(s)</div>
<p><b>Ionic equations</b> show only the ions that change. Spectator ions are left out.</p>
<div class="eq">H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l)</div>

<h3>Relative formula mass and moles</h3>
<ul>
<li><b>M<sub>r</sub></b> = sum of the A<sub>r</sub> values of all the atoms in the formula. For example, M<sub>r</sub> of CaCO<sub>3</sub> = 40 + 12 + 3×16 = 100.</li>
<li>One <b>mole</b> of a substance has a mass equal to its M<sub>r</sub> in grams.</li>
<li>One mole contains 6 × 10<sup>23</sup> particles (the Avogadro constant).</li>
</ul>
<div class="eq">moles = mass (g) ÷ M<sub>r</sub></div>

<h3>Reacting masses</h3>
<ol><li>Find the moles of the substance you know.</li><li>Use the equation's ratio to find the moles of the substance you want.</li><li>Convert to mass.</li></ol>
<div class="box box-key"><span class="box-title">Worked example</span>What mass of CaO forms when 50 g of CaCO<sub>3</sub> is heated? CaCO<sub>3</sub> → CaO + CO<sub>2</sub><br>
moles CaCO<sub>3</sub> = 50 ÷ 100 = 0.5. Ratio 1:1, so 0.5 mol CaO. Mass = 0.5 × 56 = <b>28 g</b></div>

<h3>Empirical and molecular formulae</h3>
<ul>
<li><b>Empirical formula</b>: the simplest whole-number ratio of atoms in a compound.</li>
<li><b>Molecular formula</b>: the actual number of atoms of each element in one molecule.</li>
</ul>
<p>Method: mass (or %) of each element ÷ A<sub>r</sub>, then divide by the smallest answer, then make whole numbers.</p>
<p>Molecular formula: divide M<sub>r</sub> by the empirical formula mass, then multiply the empirical formula by that number.</p>
<div class="box box-prac"><span class="box-title">🔬 Practical: find the formula of a metal oxide by combustion (e.g. magnesium)</span>
Weigh a crucible and lid with magnesium ribbon inside. Heat strongly, lifting the lid occasionally to let oxygen in while keeping the solid in. Heat to constant mass. Mass of oxygen = final mass − initial mass. Then calculate the empirical formula.</div>

<h3>Percentage yield</h3>
<div class="eq">% yield = actual yield ÷ theoretical yield × 100</div>
<p>Yields are less than 100% because the reaction may not finish, product is lost when separating it, or side reactions happen.</p>

<h3>Water of crystallisation</h3>
<p>Some salts have water in their crystals, e.g. CuSO<sub>4</sub>·5H<sub>2</sub>O. Heat to constant mass to remove the water. Find the moles of anhydrous salt and the moles of water, then the ratio gives x in ·xH<sub>2</sub>O.</p>

<div class="box box-c"><span class="box-title">Paper 2 only: gases and solutions</span>
<ul>
<li>One mole of any gas takes up <b>24 dm<sup>3</sup></b> (24 000 cm<sup>3</sup>) at room temperature and pressure (rtp).</li>
</ul>
<div class="eq">moles of gas = volume (dm<sup>3</sup>) ÷ 24</div>
<ul>
<li>Concentration can be in <b>mol/dm<sup>3</sup></b> or <b>g/dm<sup>3</sup></b>.</li>
</ul>
<div class="eq">moles = concentration (mol/dm<sup>3</sup>) × volume (dm<sup>3</sup>)</div>
<p>Remember: cm<sup>3</sup> ÷ 1000 = dm<sup>3</sup>. To convert mol/dm<sup>3</sup> to g/dm<sup>3</sup>, multiply by M<sub>r</sub>.</p></div>
`,
  flashcards: [
    ["Moles from mass", "moles = mass ÷ M<sub>r</sub>"],
    ["Empirical formula", "Simplest whole-number ratio of atoms of each element in a compound"],
    ["Molecular formula", "Actual number of atoms of each element in one molecule"],
    ["Percentage yield", "actual yield ÷ theoretical yield × 100"],
    ["Molar volume of a gas at rtp", "24 dm<sup>3</sup> (24 000 cm<sup>3</sup>)"],
    ["Moles in a solution", "moles = concentration (mol/dm<sup>3</sup>) × volume (dm<sup>3</sup>)"],
    ["Convert cm<sup>3</sup> to dm<sup>3</sup>", "Divide by 1000"],
    ["Avogadro constant", "6 × 10<sup>23</sup> particles per mole"],
    ["State symbol (aq)", "Aqueous: dissolved in water"],
    ["Ionic equation for neutralisation", "H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l)"],
    ["Why might % yield be below 100%?", "Incomplete reaction, product lost during separation, side reactions"]
  ],
  quiz: [
    { q: "What is the M<sub>r</sub> of H<sub>2</sub>SO<sub>4</sub>? (H=1, S=32, O=16)", o: ["98", "96", "50", "49"], a: 0, e: "2 + 32 + 64 = 98" },
    { q: "How many moles are in 8.8 g of CO<sub>2</sub>? (M<sub>r</sub> = 44)", o: ["0.2", "0.5", "2", "5"], a: 0, e: "8.8 ÷ 44 = 0.2" },
    { q: "A compound contains 2.4 g C and 0.6 g H. What is its empirical formula?", o: ["CH<sub>3</sub>", "CH<sub>2</sub>", "CH<sub>4</sub>", "C<sub>2</sub>H<sub>6</sub>"], a: 0, e: "C: 2.4/12 = 0.2; H: 0.6/1 = 0.6; ratio 1:3" },
    { q: "Empirical formula CH<sub>2</sub>, M<sub>r</sub> = 56. What is the molecular formula?", o: ["C<sub>4</sub>H<sub>8</sub>", "C<sub>2</sub>H<sub>4</sub>", "C<sub>3</sub>H<sub>6</sub>", "C<sub>5</sub>H<sub>10</sub>"], a: 0, e: "56 ÷ 14 = 4" },
    { q: "What volume does 0.25 mol of a gas occupy at rtp?", o: ["6 dm<sup>3</sup>", "24 dm<sup>3</sup>", "96 dm<sup>3</sup>", "0.25 dm<sup>3</sup>"], a: 0, e: "0.25 × 24 = 6 dm<sup>3</sup>" },
    { q: "How many moles of NaOH are in 25.0 cm<sup>3</sup> of 0.200 mol/dm<sup>3</sup> solution?", o: ["0.00500", "5.00", "0.0500", "0.200"], a: 0, e: "0.200 × 0.0250 = 0.00500 mol" },
    { q: "Theoretical yield 20 g, actual yield 15 g. What is the percentage yield?", o: ["75%", "133%", "25%", "15%"], a: 0, e: "" },
    { q: "Which equation is balanced?", o: ["2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O", "H<sub>2</sub> + O<sub>2</sub> → H<sub>2</sub>O", "H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O", "2H<sub>2</sub> + 2O<sub>2</sub> → 2H<sub>2</sub>O"], a: 0, e: "" },
    { q: "What mass of MgO forms from 4.8 g Mg? 2Mg + O<sub>2</sub> → 2MgO (Mg=24, O=16)", o: ["8.0 g", "4.0 g", "16 g", "9.6 g"], a: 0, e: "0.2 mol Mg → 0.2 mol MgO × 40 = 8.0 g" },
    { q: "Why lift the crucible lid occasionally when burning magnesium?", o: ["To let oxygen in while keeping the MgO inside", "To let the magnesium out", "To cool it down", "To measure the temperature"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1f", group: 1, title: "Ionic bonding",
  summary: "Forming ions, ionic formulae, dot-and-cross diagrams and giant ionic lattices.",
  notes: R`
<h3>Forming ions</h3>
<ul>
<li>An <b>ion</b> is a charged particle formed when an atom loses or gains electrons.</li>
<li>Metals <b>lose</b> electrons and form <b>positive</b> ions (cations). Non-metals <b>gain</b> electrons and form <b>negative</b> ions (anions).</li>
<li>Atoms usually end up with a full outer shell, the same configuration as a noble gas.</li>
</ul>
<table>
<tr><th>Group</th><th>1</th><th>2</th><th>3</th><th>5</th><th>6</th><th>7</th></tr>
<tr><td>Ion charge</td><td>+1</td><td>+2</td><td>+3</td><td>−3</td><td>−2</td><td>−1</td></tr>
</table>
<h4>Ions to learn</h4>
<table>
<tr><th>Positive</th><th>Negative</th></tr>
<tr><td>H<sup>+</sup>, Na<sup>+</sup>, K<sup>+</sup>, Ag<sup>+</sup>, NH<sub>4</sub><sup>+</sup> (ammonium)<br>Mg<sup>2+</sup>, Ca<sup>2+</sup>, Cu<sup>2+</sup>, Zn<sup>2+</sup>, Fe<sup>2+</sup>, Pb<sup>2+</sup><br>Al<sup>3+</sup>, Fe<sup>3+</sup></td>
<td>Cl<sup>−</sup>, Br<sup>−</sup>, I<sup>−</sup>, OH<sup>−</sup> (hydroxide), NO<sub>3</sub><sup>−</sup> (nitrate)<br>O<sup>2−</sup>, S<sup>2−</sup>, SO<sub>4</sub><sup>2−</sup> (sulfate), CO<sub>3</sub><sup>2−</sup> (carbonate)</td></tr>
</table>
<p>Formulae: balance the charges, e.g. Al<sup>3+</sup> + SO<sub>4</sub><sup>2−</sup> → Al<sub>2</sub>(SO<sub>4</sub>)<sub>3</sub>; Ca<sup>2+</sup> + OH<sup>−</sup> → Ca(OH)<sub>2</sub>.</p>
<p>Name endings: <b>-ide</b> means only those two elements (sodium chloride). <b>-ate</b> means oxygen is also present (sodium sulfate).</p>

<h3>Ionic bonding</h3>
<p>An <b>ionic bond</b> is the strong <b>electrostatic attraction</b> between oppositely charged ions.</p>
<p><b>Dot-and-cross diagrams:</b> show electron transfer, e.g. Na (2.8.1) gives 1 electron to Cl (2.8.7), forming [Na]<sup>+</sup> (2.8) and [Cl]<sup>−</sup> (2.8.8). Draw brackets and charges, and show only the outer shell if asked.</p>
<h3>Giant ionic lattices</h3>
<ul>
<li>Ionic compounds form a giant 3D lattice of alternating positive and negative ions.</li>
<li><b>High melting and boiling points:</b> lots of energy is needed to overcome the many strong electrostatic attractions.</li>
<li>Melting points are higher for ions with bigger charges, e.g. MgO melts at a higher temperature than NaCl.</li>
<li><b>Conduct electricity when molten or dissolved</b>, because the ions are free to move. They <b>don't conduct as solids</b>, because the ions are fixed in place.</li>
</ul>
`,
  flashcards: [
    ["Ionic bond", "Strong electrostatic attraction between oppositely charged ions"],
    ["How does a metal atom form an ion?", "It loses electrons to form a positive ion"],
    ["Formula of the sulfate ion", "SO<sub>4</sub><sup>2−</sup>"],
    ["Formula of the nitrate ion", "NO<sub>3</sub><sup>−</sup>"],
    ["Formula of the ammonium ion", "NH<sub>4</sub><sup>+</sup>"],
    ["Formula of the carbonate ion", "CO<sub>3</sub><sup>2−</sup>"],
    ["Formula of aluminium oxide", "Al<sub>2</sub>O<sub>3</sub>"],
    ["Why do ionic compounds have high melting points?", "Lots of energy is needed to overcome the strong electrostatic forces between oppositely charged ions in a giant lattice"],
    ["When do ionic compounds conduct electricity?", "When molten or in solution, because the ions are free to move"],
    ["Why does MgO melt higher than NaCl?", "Mg<sup>2+</sup> and O<sup>2−</sup> have larger charges, so the attraction is stronger"]
  ],
  quiz: [
    { q: "What is the formula of calcium nitrate?", o: ["Ca(NO<sub>3</sub>)<sub>2</sub>", "CaNO<sub>3</sub>", "Ca<sub>2</sub>NO<sub>3</sub>", "Ca(NO<sub>2</sub>)<sub>2</sub>"], a: 0, e: "Ca<sup>2+</sup> needs two NO<sub>3</sub><sup>−</sup>." },
    { q: "What charge does an ion of a Group 6 element have?", o: ["2−", "6+", "2+", "6−"], a: 0, e: "It gains 2 electrons." },
    { q: "Why doesn't solid sodium chloride conduct electricity?", o: ["Its ions are fixed in the lattice", "It has no ions", "Its electrons are delocalised", "It is a covalent compound"], a: 0, e: "" },
    { q: "What is the formula of iron(III) hydroxide?", o: ["Fe(OH)<sub>3</sub>", "FeOH<sub>3</sub>", "Fe<sub>3</sub>OH", "Fe(OH)<sub>2</sub>"], a: 0, e: "" },
    { q: "What happens when magnesium reacts with oxygen to form MgO?", o: ["Each Mg atom loses 2 electrons to an O atom", "Mg and O share electrons", "O loses 2 electrons to Mg", "Each Mg atom loses 1 electron"], a: 0, e: "" },
    { q: "What holds an ionic lattice together?", o: ["Electrostatic attraction between oppositely charged ions", "Shared pairs of electrons", "Delocalised electrons", "Weak intermolecular forces"], a: 0, e: "" },
    { q: "What is the electronic configuration of a sodium ion?", o: ["2.8", "2.8.1", "2.8.8", "2.7"], a: 0, e: "" },
    { q: "What is the formula of ammonium sulfate?", o: ["(NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub>", "NH<sub>4</sub>SO<sub>4</sub>", "NH<sub>4</sub>(SO<sub>4</sub>)<sub>2</sub>", "(NH<sub>3</sub>)<sub>2</sub>SO<sub>4</sub>"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1g", group: 1, title: "Covalent bonding",
  summary: "Shared electron pairs, simple molecules, giant covalent structures and fullerenes.",
  notes: R`
<h3>Covalent bonds</h3>
<p>A <b>covalent bond</b> is the strong electrostatic attraction between a <b>shared pair of electrons</b> and the nuclei of the bonded atoms. It forms between <b>non-metal</b> atoms.</p>
<h4>Dot-and-cross molecules to know</h4>
<ul>
<li>H<sub>2</sub>, Cl<sub>2</sub>, HCl: single bonds</li>
<li>H<sub>2</sub>O: two O–H bonds, two lone pairs on O</li>
<li>NH<sub>3</sub>: three N–H bonds, one lone pair</li>
<li>CH<sub>4</sub>: four C–H bonds</li>
<li>O<sub>2</sub>: a <b>double</b> bond (O=O)</li>
<li>N<sub>2</sub>: a <b>triple</b> bond (N≡N)</li>
<li>CO<sub>2</sub>: two C=O double bonds</li>
<li>C<sub>2</sub>H<sub>4</sub> (ethene): a C=C double bond</li>
</ul>
<h3>Simple molecular substances</h3>
<ul>
<li><b>Low melting and boiling points</b>: only the weak <b>intermolecular forces</b> need to be overcome, not the strong covalent bonds.</li>
<li>Boiling points <b>increase as relative molecular mass increases</b>, because intermolecular forces get stronger.</li>
<li><b>Don't conduct electricity</b>: there are no ions or free electrons.</li>
</ul>
<h3>Giant covalent structures</h3>
<table>
<tr><th></th><th>Diamond</th><th>Graphite</th></tr>
<tr><td>Structure</td><td>Each C bonded to 4 others, tetrahedral, 3D</td><td>Each C bonded to 3 others in hexagonal layers, with weak forces between layers</td></tr>
<tr><td>Properties</td><td>Very hard; very high melting point; doesn't conduct</td><td>Soft and slippery; very high melting point; conducts electricity</td></tr>
<tr><td>Why</td><td>Many strong covalent bonds; no free electrons</td><td>Layers slide over each other; one <b>delocalised electron</b> per C atom moves along the layers</td></tr>
<tr><td>Uses</td><td>Cutting tools, drill tips</td><td>Lubricants, electrodes, pencils</td></tr>
</table>
<p>Silicon dioxide (silica, SiO<sub>2</sub>) is also giant covalent: very high melting point and doesn't conduct.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: C<sub>60</sub> fullerene</span>
<ul>
<li>A simple molecule of 60 carbon atoms arranged as a hollow sphere.</li>
<li>It has a <b>lower melting point</b> than diamond or graphite because only weak intermolecular forces are overcome. It is soft and slippery.</li>
<li>It is a poor conductor, because electrons can't move <b>between</b> molecules.</li>
</ul>
<p>Covalent compounds don't usually conduct electricity because they contain no ions or delocalised electrons.</p></div>
`,
  flashcards: [
    ["Covalent bond", "Strong electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms"],
    ["Why do simple molecular substances have low boiling points?", "Only weak intermolecular forces need to be overcome"],
    ["Why does boiling point increase with M<sub>r</sub> for simple molecules?", "Intermolecular forces get stronger"],
    ["Structure of diamond", "Each carbon is covalently bonded to 4 others in a giant 3D lattice"],
    ["Why does graphite conduct electricity?", "Each carbon has one delocalised electron that can move along the layers"],
    ["Why is graphite soft/slippery?", "Weak forces between layers let the layers slide over each other"],
    ["Bond in N<sub>2</sub>", "Triple covalent bond (N≡N)"],
    ["Bond in O<sub>2</sub>", "Double covalent bond (O=O)"],
    ["Why does C<sub>60</sub> have a lower melting point than diamond?", "It is simple molecular, so only weak intermolecular forces are overcome, not covalent bonds"],
    ["Lone pairs on O in H<sub>2</sub>O", "2"]
  ],
  quiz: [
    { q: "How many shared pairs of electrons are in a CO<sub>2</sub> molecule?", o: ["4", "2", "3", "6"], a: 0, e: "Two C=O double bonds = 4 shared pairs." },
    { q: "Why does diamond have a very high melting point?", o: ["Many strong covalent bonds must be broken", "Strong intermolecular forces", "Strong ionic bonds", "Delocalised electrons"], a: 0, e: "" },
    { q: "Why does graphite conduct electricity?", o: ["Delocalised electrons move along the layers", "It contains ions", "Layers slide over each other", "It is a metal"], a: 0, e: "" },
    { q: "Which molecule contains a triple bond?", o: ["N<sub>2</sub>", "O<sub>2</sub>", "Cl<sub>2</sub>", "CH<sub>4</sub>"], a: 0, e: "" },
    { q: "When water boils, what is overcome?", o: ["Intermolecular forces", "O–H covalent bonds", "Ionic bonds", "Metallic bonds"], a: 0, e: "The covalent bonds don't break." },
    { q: "How many lone pairs does the N atom in NH<sub>3</sub> have?", o: ["1", "0", "2", "3"], a: 0, e: "" },
    { q: "Which has the highest boiling point?", o: ["Br<sub>2</sub>", "F<sub>2</sub>", "Cl<sub>2</sub>", "H<sub>2</sub>"], a: 0, e: "It has the largest M<sub>r</sub>, so the strongest intermolecular forces." },
    { q: "Why is C<sub>60</sub> a poor conductor?", o: ["Electrons can't move between molecules", "It has no electrons", "It contains ions", "It has a giant structure"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1h", group: 1, title: "Metallic bonding", paper2: true,
  summary: "Delocalised electrons and the properties of metals.",
  notes: R`
<div class="box box-c"><span class="box-title">This whole subtopic is Paper 2 only</span>It can still come up in synoptic questions, so learn it.</div>
<h3>The structure of metals</h3>
<p>Metals form a giant lattice of <b>positive metal ions</b> surrounded by a "sea" of <b>delocalised electrons</b>.</p>
<p><b>Metallic bonding</b> is the strong electrostatic attraction between the positive ions and the delocalised electrons.</p>
<h3>Properties explained</h3>
<ul>
<li><b>Electrical conductivity:</b> delocalised electrons are free to move through the structure and carry charge.</li>
<li><b>Malleable</b> (can be hammered into shape): the layers of positive ions can <b>slide over each other</b> without the bonding breaking, because the delocalised electrons still hold them together.</li>
<li><b>High melting points</b> (usually): strong attraction between ions and delocalised electrons.</li>
</ul>
<div class="box box-tip"><span class="box-title">Exam tip</span>Say "delocalised electrons", not just "free electrons", and "<b>positive ions</b>", not "positive atoms" or "nuclei".</div>
`,
  flashcards: [
    ["Metallic bonding", "Electrostatic attraction between positive metal ions and delocalised electrons"],
    ["Why do metals conduct electricity?", "Delocalised electrons can move through the structure"],
    ["Why are metals malleable?", "Layers of positive ions can slide over each other while staying attracted to the delocalised electrons"],
    ["Structure of a metal", "Giant lattice of positive ions in a sea of delocalised electrons"]
  ],
  quiz: [
    { q: "Metallic bonding is the attraction between…", o: ["Positive ions and delocalised electrons", "Positive and negative ions", "Shared pairs and nuclei", "Neutral atoms"], a: 0, e: "" },
    { q: "Why are metals malleable?", o: ["Layers of ions can slide over each other", "They have weak bonds", "They contain negative ions", "Their electrons are fixed"], a: 0, e: "" },
    { q: "Which particles carry the charge when a metal conducts electricity?", o: ["Delocalised electrons", "Positive ions", "Protons", "Negative ions"], a: 0, e: "" },
    { q: "Why do metals usually have high melting points?", o: ["Strong electrostatic attraction between ions and delocalised electrons", "Weak intermolecular forces", "They are simple molecules", "They contain covalent bonds"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "1i", group: 1, title: "Electrolysis", paper2: true,
  summary: "Electrolysis of molten and aqueous compounds, products and half-equations.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Key ideas</h3>
<ul>
<li>An electric current is a flow of <b>electrons</b> (in metals and graphite) or <b>ions</b> (in electrolytes).</li>
<li><b>Electrolysis</b> is the breakdown of an ionic compound, molten or in solution, by passing an electric current through it.</li>
<li><b>Electrolyte</b>: the liquid or solution containing ions that conducts. Electrodes are often inert (graphite or platinum).</li>
<li><b>Cathode</b> (−): positive ions are attracted and <b>gain</b> electrons (<b>reduction</b>).</li>
<li><b>Anode</b> (+): negative ions are attracted and <b>lose</b> electrons (<b>oxidation</b>).</li>
<li>Memory aid: <b>OIL RIG</b>: Oxidation Is Loss, Reduction Is Gain (of electrons).</li>
</ul>
<h3>Molten ionic compounds</h3>
<p>The metal forms at the cathode and the non-metal at the anode.</p>
<div class="eq">Molten PbBr<sub>2</sub>: cathode Pb<sup>2+</sup> + 2e<sup>−</sup> → Pb &nbsp;&nbsp; anode 2Br<sup>−</sup> → Br<sub>2</sub> + 2e<sup>−</sup></div>
<h3>Aqueous solutions</h3>
<p>Water provides H<sup>+</sup> and OH<sup>−</sup> ions as well as the ions from the salt.</p>
<ul>
<li><b>At the cathode:</b> <b>hydrogen</b> forms unless the metal is <b>less reactive than hydrogen</b> (e.g. copper or silver), in which case the metal forms.</li>
<li><b>At the anode:</b> if a <b>halide</b> is present, the <b>halogen</b> forms. Otherwise (sulfate, nitrate) <b>oxygen</b> forms from OH<sup>−</sup>.</li>
</ul>
<table>
<tr><th>Electrolyte (inert electrodes)</th><th>Cathode</th><th>Anode</th></tr>
<tr><td>NaCl(aq) (concentrated)</td><td>H<sub>2</sub></td><td>Cl<sub>2</sub></td></tr>
<tr><td>CuSO<sub>4</sub>(aq)</td><td>Cu</td><td>O<sub>2</sub></td></tr>
<tr><td>H<sub>2</sub>SO<sub>4</sub>(aq) (dilute)</td><td>H<sub>2</sub></td><td>O<sub>2</sub></td></tr>
<tr><td>HCl(aq)</td><td>H<sub>2</sub></td><td>Cl<sub>2</sub></td></tr>
<tr><td>NaOH(aq)</td><td>H<sub>2</sub></td><td>O<sub>2</sub></td></tr>
</table>
<h4>Half-equations</h4>
<div class="eq">2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub></div>
<div class="eq">Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu</div>
<div class="eq">2Cl<sup>−</sup> → Cl<sub>2</sub> + 2e<sup>−</sup></div>
<div class="eq">4OH<sup>−</sup> → O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup></div>
<div class="box box-prac"><span class="box-title">🔬 Practical: electrolysis of aqueous solutions</span>
Use inert graphite electrodes and a d.c. supply. Collect the gases in test tubes over the electrodes and test them: H<sub>2</sub> gives a squeaky pop with a lit splint, O<sub>2</sub> relights a glowing splint, and Cl<sub>2</sub> bleaches damp blue litmus paper. Copper shows up as a pink-brown coating on the cathode.</div>
<h3>Extension: electrolysis calculations</h3>
<p><i>Not every course needs these, so check with your teacher.</i></p>
<ul>
<li>A <b>faraday</b> is one mole of electrons (96 500 coulombs).</li>
<li>Charge (C) = current (A) × time (s). Moles of electrons = charge ÷ 96 500.</li>
<li>Use the half-equation ratio to find moles of product, e.g. Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu needs 2 mol e<sup>−</sup> per mol Cu.</li>
</ul>
<div class="box box-tip"><span class="box-title">Exam tip</span>Ionic substances don't conduct when solid because the ions can't move. Covalent substances don't conduct because they have no ions.</div>
`,
  flashcards: [
    ["Electrolysis", "Breakdown of an ionic compound (molten or aqueous) using electricity"],
    ["What happens at the cathode?", "Positive ions gain electrons (reduction)"],
    ["What happens at the anode?", "Negative ions lose electrons (oxidation)"],
    ["OIL RIG", "Oxidation Is Loss, Reduction Is Gain (of electrons)"],
    ["Products of electrolysing concentrated NaCl(aq)", "H<sub>2</sub> at the cathode, Cl<sub>2</sub> at the anode (NaOH left in solution)"],
    ["Products of electrolysing CuSO<sub>4</sub>(aq) (inert electrodes)", "Cu at the cathode, O<sub>2</sub> at the anode"],
    ["Half-equation at the anode for OH<sup>−</sup>", "4OH<sup>−</sup> → O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup>"],
    ["Half-equation for H<sup>+</sup> at the cathode", "2H<sup>+</sup> + 2e<sup>−</sup> → H<sub>2</sub>"],
    ["When does a metal (not H<sub>2</sub>) form at the cathode in solution?", "When the metal is less reactive than hydrogen (e.g. Cu, Ag)"],
    ["One faraday", "The charge on one mole of electrons (96 500 C)"]
  ],
  quiz: [
    { q: "Electrolysis of molten lead(II) bromide: what forms at the anode?", o: ["Bromine", "Lead", "Hydrogen", "Oxygen"], a: 0, e: "Negative Br<sup>−</sup> ions go to the + anode." },
    { q: "Electrolysis of CuSO<sub>4</sub>(aq) with graphite electrodes: what forms at the cathode?", o: ["Copper", "Hydrogen", "Oxygen", "Sulfur"], a: 0, e: "Copper is less reactive than hydrogen." },
    { q: "Electrolysis of dilute H<sub>2</sub>SO<sub>4</sub>: what forms at the anode?", o: ["Oxygen", "Hydrogen", "Sulfur dioxide", "Sulfur"], a: 0, e: "There is no halide, so oxygen forms from OH<sup>−</sup>." },
    { q: "Which half-equation shows reduction?", o: ["Cu<sup>2+</sup> + 2e<sup>−</sup> → Cu", "2Cl<sup>−</sup> → Cl<sub>2</sub> + 2e<sup>−</sup>", "4OH<sup>−</sup> → O<sub>2</sub> + 2H<sub>2</sub>O + 4e<sup>−</sup>", "Na → Na<sup>+</sup> + e<sup>−</sup>"], a: 0, e: "Gain of electrons is reduction." },
    { q: "Why doesn't solid NaCl undergo electrolysis?", o: ["Its ions can't move", "It has no ions", "It is covalent", "Its electrons are fixed"], a: 0, e: "" },
    { q: "Electrolysis of concentrated NaCl(aq): what forms at the cathode?", o: ["Hydrogen", "Sodium", "Chlorine", "Oxygen"], a: 0, e: "Sodium is more reactive than hydrogen." },
    { q: "Which test identifies chlorine?", o: ["Bleaches damp blue litmus paper", "Squeaky pop", "Relights a glowing splint", "Turns limewater milky"], a: 0, e: "Blue litmus turns red, then white." }
  ]
});
