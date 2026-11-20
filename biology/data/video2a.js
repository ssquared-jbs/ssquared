/* Video explainers — Biology Topic 2 (a)–(f). */

S2Data.video("2d", {
  scenes: [
    { type: "title", title: "Photosynthesis", sub: "How plants turn light into food, and what limits how fast they do it.", mark: "C₆H₁₂O₆",
      say: ["Almost every food chain on Earth starts with photosynthesis. In this video: the equation, limiting factors, and the experiments you need to know."] },
    { type: "equation", title: "The equation",
      rows: [["carbon dioxide", "+", "water", "→", { t: "glucose", k: 1, s: 1 }, "+", { t: "oxygen", s: 1 }],
             [{ t: "6CO₂", s: 2 }, { t: "+", s: 2 }, { t: "6H₂O", s: 2 }, { t: "→", s: 2 }, { t: "C₆H₁₂O₆", k: 1, s: 2 }, { t: "+", s: 2 }, { t: "6O₂", s: 2 }]],
      note: "Needs light energy, absorbed by chlorophyll in chloroplasts", noteStep: 3,
      say: ["Plants take in carbon dioxide from the air and water from the soil.",
            "They turn them into glucose, and release oxygen as a waste product.",
            "Here's the balanced symbol equation. Six C O two plus six H two O gives C six H twelve O six plus six O two.",
            "The energy comes from light, which is absorbed by chlorophyll in the chloroplasts. Light energy becomes chemical energy stored in glucose."] },
    { type: "points", title: "What the plant does with glucose", numbered: true,
      items: ["<b>Respiration</b>, to release energy", "<b>Starch</b>, an insoluble store", "<b>Cellulose</b>, for cell walls", "<b>Proteins</b>, using nitrate ions from the soil"],
      say: ["Glucose doesn't just sit there. The plant uses some of it straight away in respiration to release energy.",
            "It stores some as starch. Starch is insoluble, so it doesn't affect osmosis in the cells.",
            "It makes cellulose to build cell walls.",
            "And it combines glucose with nitrate ions from the soil to make amino acids and proteins."] },
    { type: "graph", title: "Limiting factors", x: "Light intensity", y: "Rate of photosynthesis",
      lines: [{ pts: [[0, 0], [0.25, 0.45], [0.45, 0.62], [0.65, 0.66], [1, 0.67]], s: 0 }],
      marks: [{ x: 0.2, y: 0.36, t: "light is limiting", s: 0, anchor: "start", dx: 24, dy: 34, dot: false }, { x: 0.82, y: 0.665, t: "something else is limiting", s: 1, dy: -26 }],
      say: ["The rate of photosynthesis depends on three main factors: light intensity, carbon dioxide concentration and temperature. Here, as light intensity increases, the rate goes up. Light is the limiting factor.",
            "Then the graph levels off. More light makes no difference, because now something else, like carbon dioxide or temperature, is in shortest supply. A limiting factor is whichever one is in shortest supply."] },
    { type: "flow", title: "Pondweed experiment", nodes: ["Lamp at a set distance", "Count O₂ bubbles per minute", "Move lamp, repeat"], arrows: ["", ""],
      say: ["To investigate light intensity, put some pondweed in water with sodium hydrogencarbonate, which supplies carbon dioxide. Place a lamp at a measured distance.",
            "Count the oxygen bubbles released per minute, or collect the gas and measure its volume.",
            "Move the lamp further away and repeat. Keep the temperature the same, for example with a water bath, so it's a fair test."] },
    { type: "big", text: "Light intensity ∝ <span class='hl'>1 ÷ d²</span>", sub: "Double the distance → a quarter of the light",
      say: ["One extra fact for higher marks. Light intensity is inversely proportional to the distance squared.", "So if you double the distance of the lamp, the light intensity falls to a quarter."] },
    { type: "quiz", q: "A plant's rate of photosynthesis stops rising as light increases. Why?", o: ["The plant is dead", "Another factor is limiting", "Light has become toxic", "Photosynthesis has stopped"], a: 1,
      why: "Usually carbon dioxide concentration or temperature.",
      say: ["Last one. The rate of photosynthesis stops rising even though the light keeps increasing. Why?"] }
  ]
});
