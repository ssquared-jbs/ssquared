/* A-level Chemistry² — Topics 14–16: Redox II, Transition metals, Kinetics II */

S2Data.add({
  id: "14a", group: 14, y2: true, title: "Electrode potentials and cells",
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
<li>Cell diagram: Zn(s) | Zn<sup>2+</sup>(aq) ‖ Cu<sup>2+</sup>(aq) | Cu(s), \(E_{\text{cell}} = +0.34 - (-0.76) = +1.10\ \text{V}\). The oxidised form goes next to the salt bridge (‖).</li>
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
    { q: "E⦵(Cu²⁺/Cu) +0.34 V, E⦵(Zn²⁺/Zn) −0.76 V. E⦵cell = ?", o: ["+1.10 V", "−1.10 V", "+0.42 V", "−0.42 V"], a: 0, e: R`\(E^\ominus_{\text{cell}} = E_{\text{right}} - E_{\text{left}} = 0.34 - (-0.76) = +1.10\ \text{V}\).` },
    { q: "Which is the strongest oxidising agent? Cl₂/Cl⁻ +1.36, Br₂/Br⁻ +1.09, I₂/I⁻ +0.54", o: ["Cl₂", "Br₂", "I₂", "I⁻"], a: 0, e: "Most positive E⦵." },
    { q: "Why use KNO₃ in a salt bridge?", o: ["It doesn't react with or precipitate the ions", "It's an oxidising agent", "It conducts electrons", "It's cheap only"], a: 0, e: R`KNO₃ is unreactive with the ions in each half-cell.` },
    { q: "In the SHE, the electrode is made of…", o: ["Platinum", "Copper", "Carbon", "Hydrogen"], a: 0, e: R`Platinum is inert and conducts; it's coated in platinum black.` },
    { q: "A reaction is feasible when E⦵cell is…", o: ["Positive", "Negative", "Zero", "Above 1 V"], a: 0, e: R`A positive \(E^\ominus_{\text{cell}}\) means \(\Delta G\) is negative.` },
    { q: "Why might a reaction with positive E⦵cell not happen?", o: ["High activation energy", "ΔG is positive", "Too many electrons", "It's endothermic"], a: 0, e: R`Kinetic barriers can stop a thermodynamically feasible reaction.` },
    { q: "Increasing [Cu²⁺] in a Cu²⁺/Cu half-cell makes E…", o: ["More positive", "More negative", "Unchanged", "Zero"], a: 0, e: R`The equilibrium Cu²⁺ + 2e⁻ ⇌ Cu shifts right, so E is more positive.` },
    { q: "Half-equation at the positive electrode of an alkaline H₂/O₂ fuel cell?", o: ["O₂ + 2H₂O + 4e⁻ → 4OH⁻", "H₂ + 2OH⁻ → 2H₂O + 2e⁻", "2H⁺ + 2e⁻ → H₂", "4OH⁻ → O₂ + 2H₂O + 4e⁻"], a: 0, e: R`Oxygen is reduced at the positive electrode.` },
    { q: "In a cell diagram, || represents…", o: ["The salt bridge", "A phase boundary", "The wire", "The voltmeter"], a: 0, e: R`A single line is a phase boundary; a double line is the salt bridge.` }
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
  id: "14b", group: 14, y2: true, title: "Redox titrations",
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
<p>\(\%\ \text{uncertainty} = \dfrac{\text{uncertainty}}{\text{value}} \times 100\). A burette reading is ±0.05 cm<sup>3</sup>, so a titre (two readings) is ±0.10 cm<sup>3</sup>.</p>
`,
  quiz: [
    { q: "Mole ratio MnO₄⁻ : Fe²⁺ in acidic solution?", o: ["1 : 5", "1 : 1", "5 : 1", "2 : 5"], a: 0, e: R`MnO<sub>4</sub><sup>−</sup> gains 5 electrons; each Fe<sup>2+</sup> loses 1.` },
    { q: "End point of a KMnO₄ titration?", o: ["First permanent pale pink", "Colourless", "Blue-black disappears", "Orange to green"], a: 0, e: R`The first excess drop of MnO₄⁻ isn't decolourised.` },
    { q: "Why not acidify manganate(VII) titrations with HCl?", o: ["Cl⁻ is oxidised to Cl₂", "HCl is too weak", "It precipitates Mn", "It reduces Fe³⁺"], a: 0, e: R`Manganate(VII) would oxidise chloride, giving a false titre.` },
    { q: "Ratio S₂O₃²⁻ : I₂?", o: ["2 : 1", "1 : 1", "1 : 2", "4 : 1"], a: 0, e: R`I<sub>2</sub> + 2S<sub>2</sub>O<sub>3</sub><sup>2−</sup> → 2I<sup>−</sup> + S<sub>4</sub>O<sub>6</sub><sup>2−</sup>.` },
    { q: "When should starch be added in an iodine titration?", o: ["Near the end point, when pale yellow", "At the start", "After the end point", "Never"], a: 0, e: R`Too early and the starch–iodine complex forms irreversibly.` },
    { q: "21.60 cm³ of 0.0100 mol dm⁻³ MnO₄⁻ reacts with Fe²⁺. Moles of Fe²⁺?", o: ["1.08 × 10⁻³", "2.16 × 10⁻⁴", "4.32 × 10⁻⁵", "1.08 × 10⁻⁴"], a: 0, e: "2.16 × 10⁻⁴ × 5." },
    { q: "Cu²⁺ with excess KI then thiosulfate. Cu²⁺ : S₂O₃²⁻ = ?", o: ["1 : 1", "1 : 2", "2 : 1", "1 : 4"], a: 0, e: R`2Cu<sup>2+</sup> gives 1 I<sub>2</sub>, which needs 2 S<sub>2</sub>O<sub>3</sub><sup>2−</sup>.` },
    { q: "Percentage uncertainty in a 25.00 cm³ titre (±0.10 cm³)?", o: ["0.40%", "0.20%", "4.0%", "0.10%"], a: 0, e: R`Two readings of ±0.05: \(\dfrac{0.10}{25.00} \times 100 = 0.40\%\).` },
    { q: "Why read the top of the meniscus with KMnO₄?", o: ["Solution is too dark to see the bottom", "It's the rule for all titrations", "Higher accuracy", "It's colourless"], a: 0, e: R`Manganate(VII) is intensely purple.` }
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
  id: "15a", group: 15, y2: true, title: "Transition metals and complexes",
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
    { q: "Why is zinc not a transition metal?", o: ["Zn²⁺ has a full 3d subshell", "It's not in the d-block", "It has no electrons in 4s", "It forms no compounds"], a: 0, e: R`A transition metal must form at least one stable ion with an incomplete d subshell.` },
    { q: "Electron configuration of Fe³⁺?", o: ["[Ar]3d⁵", "[Ar]3d³4s²", "[Ar]3d⁶", "[Ar]3d⁴4s¹"], a: 0, e: R`Fe is [Ar]3d<sup>6</sup>4s<sup>2</sup>; it loses the 4s electrons first, then one 3d.` },
    { q: "Shape of [CuCl₄]²⁻?", o: ["Tetrahedral", "Octahedral", "Square planar", "Linear"], a: 0, e: R`Large Cl⁻ ligands mean only 4 fit around the ion.` },
    { q: "EDTA⁴⁻ is a…", o: ["Hexadentate ligand", "Bidentate ligand", "Monodentate ligand", "Central ion"], a: 0, e: R`It forms 6 coordinate bonds.` },
    { q: "Why are transition metal complexes coloured?", o: ["d-orbitals split; electrons absorb visible light to move up; complementary colour seen", "They emit light", "s electrons are promoted", "They reflect all light"], a: 0, e: R`Light of energy \(\Delta E = hf\) is absorbed; we see the remaining colours.` },
    { q: "How does cisplatin work?", o: ["Binds to DNA in cancer cells, preventing replication", "Kills all cells", "Acts as a catalyst", "Releases chlorine gas"], a: 0, e: R`It cross-links DNA strands, stopping the cell dividing.` },
    { q: "Why is CO toxic?", o: ["It binds to haem iron more strongly than O₂", "It's acidic", "It oxidises iron", "It breaks DNA"], a: 0, e: R`The binding is effectively irreversible, so less oxygen is carried.` },
    { q: "Which complex shows optical isomerism?", o: ["[Ni(en)₃]²⁺", "[Cu(H₂O)₆]²⁺", "[Ag(NH₃)₂]⁺", "[CuCl₄]²⁻"], a: 0, e: R`Three bidentate ligands make non-superimposable mirror images.` },
    { q: "Coordination number of [Co(en)₂Cl₂]⁺?", o: ["6", "4", "2", "3"], a: 0, e: R`\(2 \times 2 + 2\).` }
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
  id: "15b", group: 15, y2: true, title: "Transition metal reactions and catalysis",
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
    { q: "Colour of [CuCl₄]²⁻?", o: ["Yellow", "Deep blue", "Pink", "Green"], a: 0, e: R`Chloride ligands make copper complexes yellow (or green when mixed with blue).` },
    { q: "Excess NH₃ added to Cu²⁺(aq) gives…", o: ["A deep blue solution", "A blue precipitate", "A yellow solution", "No change"], a: 0, e: R`[Cu(NH<sub>3</sub>)<sub>4</sub>(H<sub>2</sub>O)<sub>2</sub>]<sup>2+</sup> is deep blue.` },
    { q: "Why is the chelate effect favourable?", o: ["More particles form, so entropy increases", "Bonds are stronger only", "ΔH is very negative", "Fewer particles form"], a: 0, e: R`Replacing monodentate ligands with fewer multidentate ones increases the number of particles.` },
    { q: "Which hydroxide is amphoteric?", o: ["Cr(OH)₃", "Fe(OH)₃", "Cu(OH)₂", "Fe(OH)₂"], a: 0, e: R`It dissolves in both acid and excess alkali.` },
    { q: "Colour of V³⁺(aq)?", o: ["Green", "Violet", "Blue", "Yellow"], a: 0, e: R`V⁵⁺ is yellow, V⁴⁺ blue, V³⁺ green and V²⁺ violet.` },
    { q: "Why is S₂O₈²⁻ + I⁻ slow without a catalyst?", o: ["Two negative ions repel", "It's endothermic", "Ea is zero", "Iodine is a solid"], a: 0, e: R`Negative ions repel, giving a high activation energy; Fe²⁺/Fe³⁺ catalyses the reaction.` },
    { q: "Why does Fe(OH)₂ precipitate turn brown in air?", o: ["Oxidised to Fe(OH)₃", "Reduced to Fe", "Dissolves", "Reacts with N₂"], a: 0, e: R`Iron(II) is oxidised by oxygen to iron(III).` },
    { q: "In heterogeneous catalysis, why must adsorption not be too strong?", o: ["Products wouldn't desorb", "Reactants wouldn't bond", "The catalyst would melt", "It would be homogeneous"], a: 0, e: R`Too strong and the product stays stuck to the catalyst surface.` },
    { q: "Autocatalysis means…", o: ["A product catalyses the reaction", "The catalyst is used up", "No catalyst is needed", "A reactant inhibits it"], a: 0, e: R`The rate increases as product builds up, e.g. Mn²⁺ in manganate titrations.` }
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
  id: "16a", group: 16, y2: true, title: "Rate equations and orders",
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
    { q: "Rate = k[A]²[B]. Overall order?", o: ["3", "2", "1", "0"], a: 0, e: R`Add the powers: \(2 + 1 = 3\).` },
    { q: "Doubling [A] quadruples the rate. Order with respect to A?", o: ["2", "1", "0", "4"], a: 0, e: R`\(2^2 = 4\).` },
    { q: "Units of k for a second-order reaction?", o: ["dm³ mol⁻¹ s⁻¹", "s⁻¹", "mol dm⁻³ s⁻¹", "dm⁶ mol⁻² s⁻¹"], a: 0, e: R`\(\dfrac{\text{mol dm}^{-3}\,\text{s}^{-1}}{(\text{mol dm}^{-3})^2} = \text{dm}^3\,\text{mol}^{-1}\,\text{s}^{-1}\).` },
    { q: "A concentration–time graph is a straight line. Order?", o: ["Zero", "First", "Second", "Third"], a: 0, e: R`The rate stays constant as concentration falls.` },
    { q: "Constant half-life indicates…", o: ["First order", "Zero order", "Second order", "No reaction"], a: 0, e: R`A first-order reaction has a constant half-life.` },
    { q: "t½ = 20 s for a first-order reaction. k = ?", o: ["0.0347 s⁻¹", "13.9 s⁻¹", "0.05 s⁻¹", "28.9 s⁻¹"], a: 0, e: R`\(\dfrac{0.693}{20}\).` },
    { q: "In a clock reaction, the initial rate is proportional to…", o: ["1 / time", "time", "time²", "log time"], a: 0, e: R`A faster reaction reaches the visible change sooner.` },
    { q: "Rate–concentration graph: straight line through the origin. Order?", o: ["First", "Zero", "Second", "Can't tell"], a: 0, e: R`Rate \(\propto [A]\).` },
    { q: "Exp 1: [A] 0.1, [B] 0.1, rate 2×10⁻⁴. Exp 2: [A] 0.2, [B] 0.1, rate 4×10⁻⁴. Exp 3: [A] 0.1, [B] 0.2, rate 2×10⁻⁴. Rate equation?", o: ["Rate = k[A]", "Rate = k[A][B]", "Rate = k[B]", "Rate = k[A]²"], a: 0, e: R`Doubling [A] doubles the rate (first order); doubling [B] changes nothing (zero order).` }
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
  id: "16b", group: 16, y2: true, title: "Mechanisms and the Arrhenius equation",
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
<div class="box box-key"><span class="box-title">The Arrhenius equation</span>\(k = Ae^{-E_a/RT} \qquad \ln k = -\dfrac{E_a}{R} \times \dfrac1T + \ln A\)</div>
<ul>
<li>Plot <b>ln k against 1/T</b>: straight line, gradient = <b>−E<sub>a</sub>/R</b>, intercept = ln A. R = 8.31 J mol<sup>−1</sup> K<sup>−1</sup>.</li>
<li>So \(E_a = -\text{gradient} \times 8.31\) (in J mol<sup>−1</sup>).</li>
<li>Rate ∝ 1/time, so ln(1/t) can be used in place of ln k.</li>
<li>A is the pre-exponential factor (related to collision frequency and orientation).</li>
</ul>
<p><b>Example</b>: gradient = −6500 K. E<sub>a</sub> = 6500 × 8.31 = 54 000 J mol<sup>−1</sup> = <b>54.0 kJ mol<sup>−1</sup></b>.</p>
`,
  quiz: [
    { q: "The rate-determining step is…", o: ["The slowest step", "The fastest step", "The first step always", "The last step"], a: 0, e: R`The overall rate can't be faster than the slowest step.` },
    { q: "Rate = k[A]. Reaction A + B → C. B reacts…", o: ["After the RDS", "In the RDS", "Not at all", "Before A"], a: 0, e: R`Species not in the rate equation react after the rate-determining step.` },
    { q: "Rate equation for 2-bromo-2-methylpropane + OH⁻?", o: ["Rate = k[RBr]", "Rate = k[RBr][OH⁻]", "Rate = k[OH⁻]", "Rate = k[RBr]²"], a: 0, e: "SN1." },
    { q: "SN1 on a chiral halogenoalkane gives…", o: ["A racemic mixture", "One enantiomer", "No product", "An alkene only"], a: 0, e: R`The planar carbocation is attacked equally from both sides.` },
    { q: "Graph for Arrhenius analysis?", o: ["ln k against 1/T", "k against T", "ln k against T", "1/k against T"], a: 0, e: R`\(\ln k = -\dfrac{E_a}{R} \cdot \dfrac1T + \ln A\): gradient \(-\dfrac{E_a}{R}\).` },
    { q: "Gradient of ln k vs 1/T is −8000 K. Ea = ?", o: ["66.5 kJ mol⁻¹", "8.0 kJ mol⁻¹", "962 kJ mol⁻¹", "0.96 kJ mol⁻¹"], a: 0, e: R`\(8000 \times 8.31 = 66\,480\ \text{J}\).` },
    { q: "Iodination of propanone: order with respect to I₂?", o: ["Zero", "First", "Second", "Half"], a: 0, e: R`Iodine isn't involved in the rate-determining step.` },
    { q: "Why do tertiary halogenoalkanes react by SN1?", o: ["Stable tertiary carbocation; steric hindrance blocks SN2", "They're primary", "No carbocation forms", "They have no Cδ+"], a: 0, e: R`Three alkyl groups stabilise the carbocation and block backside attack.` },
    { q: "In ln k = −Ea/RT + ln A, the intercept is…", o: ["ln A", "−Ea/R", "R", "Ea"], a: 0, e: R`Comparing with \(y = mx + c\): the intercept is \(\ln A\).` }
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

S2Data.detail("14a", { mistakes: ["Saying electrons flow through the salt bridge. Electrons flow through the wire; ions flow through the salt bridge.", "Reversing the subtraction when calculating E<sub>cell</sub>."], tips: ["For feasibility, use the anticlockwise rule: write the more negative half-equation on top; the reaction goes anticlockwise."], fact: "The Apollo spacecraft used hydrogen–oxygen fuel cells, and the astronauts drank the water they produced." });
S2Data.detail("14b", { mistakes: ["Forgetting to scale up to the full volume when only a 25.0 cm<sup>3</sup> portion of a 250 cm<sup>3</sup> solution was titrated."], tips: ["Write out the mole ratio before calculating. For iodine titrations, chain the ratios: oxidant → I<sub>2</sub> → thiosulfate."], fact: "Iodometric titrations were used to measure the vitamin C content of foods for decades." });
S2Data.detail("15a", { mistakes: ["Removing 3d electrons before 4s when writing ion configurations.", "Saying the colour seen is the colour absorbed. It's the complementary colour."], tips: ["When drawing complexes, draw dative bonds from the ligand's donor atom (e.g. N of NH<sub>3</sub>, O of H<sub>2</sub>O) and include the overall charge."], fact: "Cisplatin was discovered by accident in 1965, when platinum electrodes stopped bacteria dividing in an experiment." });
S2Data.detail("15b", { mistakes: ["Mixing up excess NaOH and excess NH<sub>3</sub> results for Cr<sup>3+</sup> and Cu<sup>2+</sup>."], tips: ["Learn the colours as a table and practise writing the equations for both precipitation (deprotonation) and ligand exchange."], fact: "Vanadium redox flow batteries store grid-scale energy using V<sup>2+</sup>/V<sup>3+</sup> and VO<sup>2+</sup>/VO<sub>2</sub><sup>+</sup> in tanks of solution." });
S2Data.detail("16a", { mistakes: ["Working out orders from the balanced equation. Orders must come from experimental data."], tips: ["In initial rates tables, find two experiments where only one concentration changes. Write the factor change in concentration and in rate side by side."], fact: "The iodine clock reaction was first described by Hans Landolt in 1886, and it's still used in schools today." });
S2Data.detail("16b", { mistakes: ["Forgetting to convert E<sub>a</sub> from J to kJ, or using the gradient without the minus sign."], tips: ["When proposing a mechanism, check the steps add up to the overall equation and the RDS contains exactly the species in the rate equation."], fact: "A rough rule of thumb: many reactions double in rate for every 10 °C rise, which matches an E<sub>a</sub> of about 50 kJ mol<sup>−1</sup> near room temperature." });
