/* Geography² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "geography",
  keyPrefix: "geog",
  name: "Geography²",
  sub: "Edexcel GCSE Geography B (1GB0)",
  subjectWord: "GCSE Geography",
  course: "Edexcel GCSE Geography B (1GB0)",
  intro: "Every topic for Pearson Edexcel GCSE Geography B (1GB0), from hazards and development to UK landscapes, fieldwork, forests and energy:",
  extrasGroup: 99,
  groups: {
    1: { name: "Hazardous Earth", sub: "Climate, tropical cyclones and tectonic hazards" },
    2: { name: "Development dynamics", sub: "Measuring development, theories and an emerging country" },
    3: { name: "Challenges of an urbanising world", sub: "Urbanisation and a megacity" },
    4: { name: "The UK's evolving physical landscape", sub: "Geology, coasts and rivers" },
    5: { name: "The UK's evolving human landscape", sub: "Population, economy and a major UK city" },
    6: { name: "Geographical investigations", sub: "Fieldwork and geographical skills" },
    7: { name: "People and the biosphere", sub: "Biomes and the resources they provide" },
    8: { name: "Forests under threat", sub: "Tropical rainforests and the taiga" },
    9: { name: "Consuming energy resources", sub: "Energy supply, demand and sustainability" }
  },
  legend: "Paper 1: Global Geographical Issues (topics 1–3). Paper 2: UK Geographical Issues (topics 4–6). Paper 3: People and Environment Issues (topics 7–9).",
  facts: ["The Pacific 'Ring of Fire' contains about 75% of the world's active volcanoes.", "Over half the world's population has lived in towns and cities since about 2007.", "The Amazon rainforest produces about 20% of the world's river water flowing into oceans.", "The taiga is the world's largest land biome.", "Parts of the Holderness coast are among the fastest-eroding coastlines in Europe.", "Tokyo is the world's largest urban area, with around 37 million people.", "The deepest point in the ocean, the Challenger Deep, is nearly 11 km down, at a destructive plate margin.", "The River Severn is the UK's longest river, at about 354 km."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
