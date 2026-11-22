/* A-level Chemistry A² (OCR) — content specific to OCR A */

S2Data.add({
  id: "3i", group: 3, y1: true, title: "Qualitative analysis",
  summary: "Tests for carbonate, sulfate, halide and ammonium ions, and why the order of tests matters.",
  notes: R`
<h3>Tests for anions</h3>
<table>
<tr><th>Ion</th><th>Test</th><th>Positive result</th></tr>
<tr><td>Carbonate, CO<sub>3</sub><sup>2−</sup></td><td>Add dilute HNO<sub>3</sub>; bubble gas through limewater</td><td>Effervescence; limewater turns milky (CO<sub>2</sub>)</td></tr>
<tr><td>Sulfate, SO<sub>4</sub><sup>2−</sup></td><td>Add Ba(NO<sub>3</sub>)<sub>2</sub>(aq) (or BaCl<sub>2</sub>)</td><td>White precipitate of BaSO<sub>4</sub></td></tr>
<tr><td>Halides</td><td>Add dilute HNO<sub>3</sub> then AgNO<sub>3</sub>(aq); then NH<sub>3</sub>(aq)</td><td>Cl<sup>−</sup> white, dissolves in dilute NH<sub>3</sub>; Br<sup>−</sup> cream, dissolves in conc NH<sub>3</sub>; I<sup>−</sup> yellow, insoluble</td></tr>
</table>
<p>Ionic equations: CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → CO<sub>2</sub> + H<sub>2</sub>O; Ba<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → BaSO<sub>4</sub>; Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl.</p>
<h3>The order matters</h3>
<ol>
<li><b>Carbonate first</b>: carbonate ions would form a white precipitate with Ba<sup>2+</sup> (BaCO<sub>3</sub>) and with Ag<sup>+</sup> (Ag<sub>2</sub>CO<sub>3</sub>), giving false positives. Adding dilute HNO<sub>3</sub> until fizzing stops removes them.</li>
<li><b>Sulfate second</b>: sulfate ions would form a precipitate with Ag<sup>+</sup> (Ag<sub>2</sub>SO<sub>4</sub>, slightly soluble). Use Ba(NO<sub>3</sub>)<sub>2</sub> rather than BaCl<sub>2</sub> if you'll test for halides afterwards, so you don't add chloride.</li>
<li><b>Halides last</b>.</li>
</ol>
<p>Use nitric acid, not HCl or H<sub>2</sub>SO<sub>4</sub>, which would add Cl<sup>−</sup> or SO<sub>4</sub><sup>2−</sup>.</p>
<h3>Test for ammonium ions</h3>
<p>Add NaOH(aq) and warm: NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup> → NH<sub>3</sub> + H<sub>2</sub>O. Ammonia turns damp red litmus <b>blue</b>.</p>
`,
  quiz: [
    { q: "Which test should be done first on an unknown solution?", o: ["Carbonate", "Sulfate", "Halide", "Ammonium"], a: 0, e: R`Carbonate would interfere with the sulfate and halide tests.` },
    { q: "A white precipitate with Ba(NO₃)₂ shows…", o: ["Sulfate", "Chloride", "Carbonate (after acid)", "Ammonium"], a: 0, e: R`Barium sulfate is insoluble and white.` },
    { q: "Why is dilute nitric acid used rather than hydrochloric acid?", o: ["HCl would add chloride ions", "HNO₃ is stronger", "HCl reacts with sulfate", "HNO₃ is cheaper"], a: 0, e: R`Extra chloride would give a false positive in the halide test.` },
    { q: "Silver bromide is…", o: ["Cream, soluble in concentrated NH₃", "White, soluble in dilute NH₃", "Yellow, insoluble", "Black"], a: 0, e: R`AgCl is white, AgBr cream and AgI yellow.` },
    { q: "Which gas turns damp red litmus blue?", o: ["NH₃", "CO₂", "HCl", "SO₂"], a: 0, e: R`Ammonia is the only common alkaline gas.` },
    { q: "Why test for sulfate before halides?", o: ["Ag₂SO₄ can precipitate and give a false result", "Sulfate reacts with nitric acid", "Halides remove sulfate", "Barium reacts with halides"], a: 0, e: R`Silver sulfate is slightly soluble and could precipitate.` },
    { q: "Carbonate ions are confirmed by…", o: ["Effervescence with acid; gas turns limewater milky", "White precipitate with AgNO₃", "Yellow flame", "Damp litmus turning blue"], a: 0, e: R`CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → CO<sub>2</sub> + H<sub>2</sub>O.` },
    { q: "Ammonium ions are tested by adding…", o: ["NaOH and warming", "AgNO₃", "BaCl₂", "HNO₃"], a: 0, e: R`Ammonia gas is released, which turns damp red litmus blue.` },
    { q: "Why use Ba(NO₃)₂ rather than BaCl₂ before a halide test?", o: ["BaCl₂ adds chloride ions", "Ba(NO₃)₂ is more soluble in water only", "BaCl₂ reacts with carbonate", "BaCl₂ is toxic"], a: 0, e: R`Chloride ions would give a false positive halide test.` }
  ],
  flashcards: [
    ["Order of anion tests", "Carbonate → sulfate → halide"],
    ["Carbonate test", "Dilute HNO₃: fizzing; CO₂ turns limewater milky"],
    ["Sulfate test", "Ba(NO₃)₂ or BaCl₂: white BaSO₄ precipitate"],
    ["Halide test", "HNO₃ then AgNO₃; then NH₃ to confirm"],
    ["AgCl / AgBr / AgI", "White, dil NH₃ / cream, conc NH₃ / yellow, insoluble"],
    ["Ammonium test", "NaOH + warm → NH₃ turns damp red litmus blue"],
    ["Why carbonate first?", "Carbonate forms precipitates with Ba²⁺ and Ag⁺"],
    ["Why sulfate before halides?", "Ag₂SO₄ may precipitate"],
    ["Why nitric acid?", "Doesn't add Cl⁻ or SO₄²⁻"]
  ]
});

S2Data.detail("3i", { mistakes: ["Using hydrochloric acid to remove carbonate before a halide test. It adds chloride ions."], tips: ["Remember the order with 'CSH': carbonate, sulfate, halide."], fact: "Barium sulfate is so insoluble it's swallowed as a 'barium meal' to show the gut on X-rays." });
