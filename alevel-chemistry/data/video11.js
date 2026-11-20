/* Video explainers — A-level Chemistry Topics 11–16. */

S2Data.video("11a", {
  scenes: [
    { type: "title", title: "Equilibrium II: Kc and Kp", sub: "Calculating equilibrium constants from data.", mark: "Kp",
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

S2Data.video("12a", {
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

S2Data.video("12b", {
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

S2Data.video("13a", {
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

S2Data.video("13b", {
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

S2Data.video("14a", {
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

S2Data.video("14b", {
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

S2Data.video("15a", {
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

S2Data.video("15b", {
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

S2Data.video("16a", {
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

S2Data.video("16b", {
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
