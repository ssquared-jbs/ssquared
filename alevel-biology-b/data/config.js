/* A-level Biology B² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "alevel-biology-b",
  keyPrefix: "abiob",
  name: "A-level Biology B²",
  sub: "Edexcel A level Biology B (9BI0)",
  subjectWord: "A-level Biology B",
  course: "Edexcel A level Biology B (9BI0)",
  intro: "Every topic of Pearson Edexcel A level Biology B (9BI0), from biological molecules to ecosystems:",
  extrasGroup: 99,
  groups: {
    1: { name: "Biological molecules", sub: "Carbohydrates, lipids, proteins, enzymes, DNA, water and ions" },
    2: { name: "Cells, viruses and reproduction of living things", sub: "Cell structure, viruses, cell division and sexual reproduction" },
    3: { name: "Classification and biodiversity", sub: "Classification, biodiversity, adaptation and conservation" },
    4: { name: "Exchange and transport", sub: "Gas exchange, membranes, circulation, blood and plant transport" },
    5: { name: "Energy for biological processes", sub: "Respiration and photosynthesis" },
    6: { name: "Microbiology and pathogens", sub: "Culturing microorganisms, pathogens, immunity and antibiotics" },
    7: { name: "Modern genetics", sub: "DNA profiling, gene expression and gene technology" },
    8: { name: "Origins of genetic variation", sub: "Inheritance, population genetics and speciation" },
    9: { name: "Control systems", sub: "Homeostasis, the kidney, hormones, nerves and the brain" },
    10: { name: "Ecosystems", sub: "Energy flow, nutrient cycles, populations and climate change" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Topics 1–4, also in the AS course (8BI0)<br><span class='tag tag-g'>Year 13</span> Topics 5–10, A level only",
  facts: ["A single E. coli cell can become over a billion cells in about 10 hours.", "Your kidneys filter about 180 litres of fluid a day but you produce only about 1.5 litres of urine.", "Fish gills use countercurrent flow to extract up to 80% of the oxygen from water.", "A large oak tree can move over 400 litres of water a day by transpiration.", "Bacteria in the soil fix more nitrogen than all the world's fertiliser factories.", "Fetal haemoglobin has a higher affinity for oxygen than adult haemoglobin.", "Gregor Mendel studied around 28 000 pea plants.", "Seed banks such as Kew's Millennium Seed Bank store seeds from over 40 000 species."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
