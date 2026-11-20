/* A-level Chemistry A² (OCR) exam questions — 3i */
(function () {
const M = (q, ...o) => ({ t: "mcq", m: 1, q, o, a: 0 });
const N = (m, q, ans, unit, ms, x) => Object.assign({ t: "num", m, q, ans, unit, ms }, x || {});
const T = (m, q, ...p) => ({ t: "text", m, q, ms: p.map(x => x[0]), kw: p.map(x => x.slice(1)) });

S2Data.exam("3i", [
  M("A solution fizzes with dilute HNO<sub>3</sub> and the gas turns limewater milky. Which ion is present?", "CO<sub>3</sub><sup>2−</sup>", "SO<sub>4</sub><sup>2−</sup>", "Cl<sup>−</sup>", "NH<sub>4</sub><sup>+</sup>"),
  M("Which reagent tests for sulfate ions?", "Barium nitrate solution", "Silver nitrate solution", "Sodium hydroxide", "Limewater"),
  M("A cream precipitate with AgNO<sub>3</sub> that dissolves only in concentrated NH<sub>3</sub> shows…", "Bromide", "Chloride", "Iodide", "Sulfate"),
  M("A yellow precipitate with AgNO<sub>3</sub>, insoluble in concentrated NH<sub>3</sub>, shows…", "Iodide", "Bromide", "Chloride", "Carbonate"),
  M("AgCl is…", "White and soluble in dilute NH<sub>3</sub>", "Cream and soluble in conc NH<sub>3</sub> only", "Yellow and insoluble", "Black"),
  M("What is the correct order of anion tests?", "Carbonate, sulfate, halide", "Halide, sulfate, carbonate", "Sulfate, carbonate, halide", "Halide, carbonate, sulfate"),
  M("Why must carbonate be tested for first?", "Carbonate gives white precipitates with Ba<sup>2+</sup> and Ag<sup>+</sup>", "Carbonate reacts with nitric acid only after other tests", "Carbonate is the most common ion", "Carbonate dissolves precipitates"),
  M("Why is HCl not used to acidify a sample before testing for halides?", "It adds chloride ions", "It's too weak", "It reacts with silver", "It removes halides"),
  M("Why is H<sub>2</sub>SO<sub>4</sub> not used to acidify a sample before testing for sulfate?", "It adds sulfate ions", "It's a weak acid", "It forms a yellow precipitate", "It reacts with barium only when hot"),
  M("Ammonia gas is detected by…", "Damp red litmus turning blue", "Limewater turning milky", "A glowing splint relighting", "A squeaky pop"),
  M("The ionic equation for the sulfate test is…", "Ba<sup>2+</sup> + SO<sub>4</sub><sup>2−</sup> → BaSO<sub>4</sub>", "Ag<sup>+</sup> + SO<sub>4</sub><sup>2−</sup> → AgSO<sub>4</sub>", "Ba + SO<sub>4</sub> → BaSO<sub>4</sub>", "H<sup>+</sup> + SO<sub>4</sub><sup>2−</sup> → HSO<sub>4</sub>"),
  M("Which ionic equation shows the reaction of ammonium ions with hydroxide?", "NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup> → NH<sub>3</sub> + H<sub>2</sub>O", "NH<sub>3</sub> + H<sup>+</sup> → NH<sub>4</sub><sup>+</sup>", "NH<sub>4</sub><sup>+</sup> + Cl<sup>−</sup> → NH<sub>4</sub>Cl", "NH<sub>4</sub>OH → NH<sub>4</sub><sup>+</sup> + OH<sup>−</sup>"),
  N(2, "0.233 g of BaSO<sub>4</sub> (M<sub>r</sub> 233.4) precipitates. Calculate the moles of sulfate in the sample.", 0.000998, "mol", ["n = 0.233 ÷ 233.4 (1)", "= 9.98 × 10<sup>−4</sup> mol (1)"]),
  N(2, "0.287 g of AgCl (M<sub>r</sub> 143.4) forms from 25.0 cm<sup>3</sup> of solution. Calculate [Cl<sup>−</sup>] in mol dm<sup>−3</sup>.", 0.08, "mol dm⁻³", ["n = 0.287 ÷ 143.4 = 2.00 × 10<sup>−3</sup> mol (1)", "÷ 0.0250 = 0.0800 mol dm<sup>−3</sup> (1)"]),
  N(2, "1.06 g of Na<sub>2</sub>CO<sub>3</sub> (M<sub>r</sub> 106) reacts with excess acid. Calculate the volume of CO<sub>2</sub> at RTP in cm<sup>3</sup> (24.0 dm<sup>3</sup> mol<sup>−1</sup>).", 240, "cm³", ["n = 0.0100 mol (1)", "× 24 000 = 240 cm<sup>3</sup> (1)"]),
  N(2, "How many moles of NH<sub>3</sub> form when 0.535 g of NH<sub>4</sub>Cl (M<sub>r</sub> 53.5) is warmed with excess NaOH?", 0.01, "mol", ["0.535 ÷ 53.5 (1)", "= 0.0100 mol (1)"]),
  N(3, "A 25.0 cm<sup>3</sup> sample gives 0.466 g of BaSO<sub>4</sub> (M<sub>r</sub> 233.4). Calculate the concentration of sulfate in g dm<sup>−3</sup> (M<sub>r</sub> SO<sub>4</sub><sup>2−</sup> = 96.1).", 7.67, "g dm⁻³", ["n = 0.466 ÷ 233.4 = 2.00 × 10<sup>−3</sup> mol (1)", "Mass of sulfate = 2.00 × 10<sup>−3</sup> × 96.1 = 0.192 g (1)", "÷ 0.0250 dm<sup>3</sup> = 7.67 g dm<sup>−3</sup> (1)"]),
  N(2, "What mass (g) of AgBr (M<sub>r</sub> 187.8) forms from 0.00250 mol of Br<sup>−</sup>?", 0.47, "g", ["0.00250 × 187.8 (1)", "= 0.470 g (1)"]),
  T(3, "Describe how you'd test a solution for carbonate, sulfate and halide ions in the correct order.", ["Add dilute nitric acid: effervescence and gas turns limewater milky shows carbonate; keep adding until fizzing stops", "nitric", "limewater", "fizz", "efferves"], ["Then add barium nitrate: white precipitate shows sulfate", "barium", "white precipitate"], ["Then add silver nitrate (filter first if needed): white/cream/yellow precipitates show Cl<sup>−</sup>/Br<sup>−</sup>/I<sup>−</sup>", "silver nitrate", "agno3", "cream", "yellow"]),
  T(2, "Explain why the carbonate test must be done before the sulfate test.", ["Carbonate ions react with Ba<sup>2+</sup> to form a white precipitate of BaCO<sub>3</sub>", "baco3", "barium carbonate", "precipitate"], ["This would give a false positive for sulfate", "false positive", "false"]),
  T(2, "Explain why barium nitrate is better than barium chloride if you'll test for halides afterwards.", ["Barium chloride adds Cl<sup>−</sup> ions to the solution", "add", "chloride"], ["Which would give a white AgCl precipitate in the halide test (false positive)", "agcl", "false", "white precipitate"]),
  T(2, "Describe how ammonia solution distinguishes chloride, bromide and iodide precipitates.", ["AgCl dissolves in dilute NH<sub>3</sub>", "agcl", "dilute"], ["AgBr dissolves only in concentrated NH<sub>3</sub>; AgI is insoluble in both", "agbr", "concentrated", "agi", "insoluble"]),
  T(2, "Describe the test for ammonium ions.", ["Add NaOH(aq) and warm gently", "naoh", "sodium hydroxide", "warm"], ["Ammonia is given off, turning damp red litmus paper blue", "red litmus", "blue"]),
  T(2, "Write ionic equations for the carbonate and halide tests (using chloride).", ["CO<sub>3</sub><sup>2−</sup> + 2H<sup>+</sup> → CO<sub>2</sub> + H<sub>2</sub>O", "co3", "co2", "h2o"], ["Ag<sup>+</sup> + Cl<sup>−</sup> → AgCl", "ag+", "agcl"]),
  T(2, "Explain why the litmus paper must be damp in the ammonium test.", ["Ammonia must dissolve in water", "dissolve"], ["To form OH<sup>−</sup> ions, which turn the litmus blue (alkaline)", "oh", "hydroxide", "alkali"]),
  T(2, "A white solid fizzes with dilute nitric acid and gives a white precipitate with Ba(NO<sub>3</sub>)<sub>2</sub> afterwards. Suggest what ions it contains.", ["Carbonate (fizzing with acid)", "carbonate"], ["And sulfate (white precipitate with barium after carbonate removed)", "sulfate"]),
  T(2, "Explain why excess dilute nitric acid is added before the silver nitrate test.", ["To remove carbonate (and hydroxide) ions", "carbonate", "remove", "hydroxide"], ["Which would otherwise form a precipitate with Ag<sup>+</sup>", "precipitate", "ag"]),
  T(2, "Suggest why it's hard to tell AgCl, AgBr and AgI apart by colour alone.", ["The colours (white, cream, yellow) are similar", "similar", "hard to distinguish"], ["So adding ammonia solution is needed to confirm", "ammonia", "nh3", "confirm"]),
  T(2, "Explain how a student could show that a solution contains NH<sub>4</sub>Cl.", ["Warm with NaOH: damp red litmus turns blue (NH<sub>4</sub><sup>+</sup>)", "naoh", "litmus", "ammonium"], ["Acidify with HNO<sub>3</sub>, add AgNO<sub>3</sub>: white precipitate soluble in dilute NH<sub>3</sub> (Cl<sup>−</sup>)", "agno3", "white", "chloride"]),
  T(2, "Explain why a precipitate forms in the sulfate test.", ["Barium sulfate is insoluble in water", "insoluble"], ["So Ba<sup>2+</sup> and SO<sub>4</sub><sup>2−</sup> ions combine to form a solid", "combine", "solid", "ions"])
]);
})();
