/* A-level Biology A² (Salters-Nuffield) — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "alevel-biology-a",
  keyPrefix: "abioa",
  name: "A-level Biology A²",
  sub: "Edexcel A level Biology A, Salters-Nuffield (9BN0)",
  subjectWord: "A-level Biology A",
  course: "Edexcel A level Biology A (Salters-Nuffield) (9BN0)",
  intro: "Every topic of Pearson Edexcel A level Biology A (Salters-Nuffield, 9BN0), from the heart to the brain:",
  extrasGroup: 99,
  groups: {
    1: { name: "Lifestyle, health and risk", sub: "The heart, circulation, cardiovascular disease, diet and risk" },
    2: { name: "Genes and health", sub: "Membranes, gas exchange, proteins, DNA, protein synthesis and cystic fibrosis" },
    3: { name: "Voice of the genome", sub: "Cells, the cell cycle, meiosis, stem cells and gene expression" },
    4: { name: "Biodiversity and natural resources", sub: "Biodiversity, classification, natural selection and plants" },
    5: { name: "On the wild side", sub: "Photosynthesis, ecosystems, climate change and evolution" },
    6: { name: "Immunity, infection and forensics", sub: "DNA profiling, pathogens, the immune system and antibiotics" },
    7: { name: "Run for your life", sub: "Muscles, respiration, the heart, ventilation and homeostasis" },
    8: { name: "Grey matter", sub: "Nerve impulses, the brain, vision, drugs and genetic modification" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Topics 1–4, also in the AS course (8BN0)<br><span class='tag tag-g'>Year 13</span> Topics 5–8, A level only",
  facts: ["Your heart beats around 100 000 times a day, pumping about 7500 litres of blood.", "If the DNA in one of your cells were stretched out, it would be about 2 metres long.", "Mycobacterium tuberculosis can hide inside the very macrophages that are meant to destroy it.", "A sprinter's muscles can run anaerobically for only about 10 seconds before lactate builds up.", "Plants capture less than 2% of the sunlight that falls on them.", "Your retina has about 120 million rods but only about 6 million cones.", "Peat bogs store about twice as much carbon as all the world's forests combined.", "The first genetically modified crop sold to consumers was the Flavr Savr tomato in 1994."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
