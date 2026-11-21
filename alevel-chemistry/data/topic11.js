/* A-level Chemistry² — Topics 11–13: Equilibrium II, Acid–base equilibria, Energetics II */

S2Data.add({
  id: "11a", group: 11, y2: true, title: "Equilibrium II: Kc and Kp",
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
  id: "12a", group: 12, y2: true, title: "Acids, bases and pH",
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
  id: "12b", group: 12, y2: true, title: "Buffers, titration curves and indicators",
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
  id: "13a", group: 13, y2: true, title: "Lattice energy and Born–Haber cycles",
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
  id: "13b", group: 13, y2: true, title: "Entropy and Gibbs energy",
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

S2Data.detail("11a", { mistakes: ["Using moles instead of concentrations when the volumes don't cancel.", "Including solids in K<sub>p</sub>."], tips: ["Check that partial pressures add up to the total pressure: it's a quick way to catch arithmetic slips."], fact: "At high temperatures the N<sub>2</sub>O<sub>4</sub>/NO<sub>2</sub> mixture turns darker brown as more NO<sub>2</sub> forms." });
S2Data.detail("12a", { mistakes: ["Using [H<sup>+</sup>] = [acid] for a weak acid.", "Forgetting to double [OH<sup>−</sup>] for Ba(OH)<sub>2</sub>."], tips: ["Give pH to 2 decimal places. In mixing questions, always use the total volume."], fact: "Stomach acid has a pH of about 1.5, and the stomach lining replaces itself every few days to survive it." });
S2Data.detail("12b", { mistakes: ["Explaining buffers without the large reservoir of A<sup>−</sup> from the salt.", "Choosing methyl orange for a weak acid–strong base titration."], tips: ["For buffer pH after adding NaOH, subtract moles of NaOH from HA and add them to A<sup>−</sup> before using K<sub>a</sub>."], fact: "Red cabbage juice is a natural indicator that goes through red, purple, blue, green and yellow across the pH range." });
S2Data.detail("13a", { mistakes: ["Forgetting to double the Cl steps for MgCl<sub>2</sub>.", "Getting the sign of lattice energy wrong when it's used in the solution cycle."], tips: ["Draw Born–Haber cycles to scale-ish, with arrows pointing up for endothermic steps. Label every level with its species and state symbols."], fact: "The lattice energy of MgO (about −3800 kJ mol<sup>−1</sup>) is why it melts at about 2850 °C and lines furnaces." });
S2Data.detail("13b", { mistakes: ["Forgetting to convert ΔS from J to kJ (or ΔH from kJ to J). This is the most common lost mark in this topic."], tips: ["Learn the four-row sign table. Many questions just ask you to explain why a reaction becomes feasible above a certain temperature."], fact: "Diamonds are thermodynamically unstable compared with graphite at room temperature, but the activation energy is so high they last billions of years." });
