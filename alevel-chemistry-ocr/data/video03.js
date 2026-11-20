/* Video explainers — A-level Chemistry A (OCR): content specific to OCR A. */

S2Data.video("3i", { scenes: [
  { type: "title", title: "Qualitative analysis", sub: "Identifying ions with test-tube reactions.", mark: "Ag⁺",
    say: ["Given an unknown solution, a few simple tests tell you which ions it contains. The trick is doing them in the right order."] },
  { type: "flow", title: "The order of tests", nodes: ["1. Carbonate:<br>HNO₃, fizzing", "2. Sulfate:<br>Ba(NO₃)₂, white ppt", "3. Halide:<br>AgNO₃, coloured ppt"],
    say: ["First add dilute nitric acid. Fizzing, and a gas that turns limewater milky, means carbonate. Keep adding acid until the fizzing stops.", "Next add barium nitrate. A white precipitate of barium sulfate means sulfate.", "Finally add silver nitrate. The colour of the precipitate tells you which halide is there."] },
  { type: "big", text: "Carbonate first: it fools the other tests", sub: "BaCO₃ and Ag₂CO₃ are both white precipitates",
    say: ["Why this order? Carbonate ions form white precipitates with both barium and silver ions, giving false positives.", "So remove them first with nitric acid. Never use hydrochloric or sulfuric acid, because they'd add the very ions you're testing for."] },
  { type: "compare", title: "Silver halides", h: ["Colour", "Ammonia"],
    rows: [["AgCl", "White", "Dissolves in dilute NH₃"], ["AgBr", "Cream", "Dissolves in conc NH₃"], ["AgI", "Yellow", "Insoluble"]],
    say: ["Silver chloride is white and dissolves in dilute ammonia.", "Silver bromide is cream and dissolves only in concentrated ammonia.", "Silver iodide is yellow and doesn't dissolve at all."] },
  { type: "equation", title: "Ammonium ions", rows: [["NH₄⁺ + OH⁻", "→", "NH₃ + H₂O"]],
    note: "Warm with NaOH(aq) · ammonia turns damp red litmus blue", noteStep: 1,
    say: ["To test for ammonium ions, add sodium hydroxide and warm. Ammonia gas is released.", "It turns damp red litmus paper blue."] },
  { type: "quiz", q: "Why use Ba(NO₃)₂ instead of BaCl₂ before a halide test?", o: ["It's cheaper", "BaCl₂ adds chloride ions", "BaCl₂ doesn't react with sulfate", "Ba(NO₃)₂ removes carbonate"], a: 1,
    why: "Added Cl⁻ would give a false positive with AgNO₃.", say: ["Why should you use barium nitrate rather than barium chloride if you'll test for halides afterwards?"] }
]});
