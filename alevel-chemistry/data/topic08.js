/* A-level Chemistry² — Topics 8–10: Energetics I, Kinetics I, Equilibrium I */

S2Data.add({
  id: "8a", group: 8, y1: true, title: "Enthalpy changes and calorimetry",
  summary: "Standard conditions, the key enthalpy definitions, and measuring ΔH with Q = mcΔT.",
  notes: `
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
  id: "8b", group: 8, y1: true, title: "Hess's law and bond enthalpies",
  summary: "Using cycles with formation and combustion data, and calculating ΔH from mean bond enthalpies.",
  notes: `
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
  id: "9a", group: 9, y1: true, title: "Kinetics I",
  summary: "Collision theory, factors affecting rate, Maxwell–Boltzmann distributions, catalysts and measuring rates.",
  notes: `
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
  id: "10a", group: 10, y1: true, title: "Equilibrium I",
  summary: "Dynamic equilibrium, writing Kc expressions, Le Chatelier's principle and industrial compromises.",
  notes: `
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

S2Data.detail("8a", { mistakes: ["Using the mass of the fuel or solid in Q = mcΔT. m is the mass of the <b>water or solution</b>.", "Forgetting the negative sign when the temperature rises."], tips: ["Always convert Q from J to kJ before dividing by moles, and give 3 significant figures."], fact: "A bomb calorimeter is used to measure the energy in food labels: food is burned in pure oxygen inside a sealed steel container." });
S2Data.detail("8b", { mistakes: ["Mixing up the formation and combustion rules. Formation: products − reactants. Combustion: reactants − products.", "Forgetting to multiply by the number of moles in the equation."], tips: ["Draw out every molecule's bonds before counting for bond enthalpy questions. Missing one C–H is the usual slip."], fact: "Hess published his law in 1840, before the idea of energy conservation was fully accepted." });
S2Data.detail("9a", { mistakes: ["Saying higher temperature increases rate 'because there are more collisions'. The key point is that more collisions have energy ≥ E<sub>a</sub>.", "Drawing M–B curves that touch the x-axis at high energy, or that don't start at the origin."], tips: ["When drawing a higher-temperature M–B curve, make sure the area looks the same: lower peak, further right, and it must sit above the original curve at high energy."], fact: "Enzymes are biological catalysts that can speed up reactions by factors of more than 10<sup>15</sup>." });
S2Data.detail("10a", { mistakes: ["Saying that increasing pressure or concentration changes K<sub>c</sub>. Only temperature does.", "Including solids in the K<sub>c</sub> expression."], tips: ["In Le Chatelier answers, state the change, the direction of shift and the reason (e.g. 'fewer moles of gas on the right')."], fact: "The Haber process makes about 150 million tonnes of ammonia a year, and about half the nitrogen in your body passed through it." });
