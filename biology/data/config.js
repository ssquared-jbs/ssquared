/* Biology² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "biology",
  keyPrefix: "bio",
  name: "Biology²",
  sub: "Edexcel IGCSE &amp; GCSE Biology",
  subjectWord: "GCSE Biology",
  course: "Edexcel IGCSE and GCSE Biology",
  intro: "Edexcel International GCSE Biology (4BI1) plus the extra Edexcel GCSE (1BI0) content:",
  extrasGroup: 6,
  groups: {
    1: { name: "The nature and variety of living organisms", sub: "Characteristics of life and the main groups of organisms" },
    2: { name: "Structure and functions in living organisms", sub: "Cells, molecules, nutrition, respiration, gas exchange, transport, excretion and coordination" },
    3: { name: "Reproduction and inheritance", sub: "Reproduction, DNA, genetics, cell division and evolution" },
    4: { name: "Ecology and the environment", sub: "Ecosystems, food chains, cycles and human impact" },
    5: { name: "Use of biological resources", sub: "Food production, selective breeding, genetic modification and cloning" },
    6: { name: "Edexcel GCSE extras", sub: "Content in Edexcel GCSE (1BI0) that isn't in the International GCSE (4BI1)" }
  },
  legend: "<span class='tag tag-c'>Paper 2 only</span> International GCSE content examined only on Paper 2 (\"B\" in the 4BI1 spec)<br><span class='tag tag-p'>Practical</span> A required practical you could be asked about<br><span class='tag tag-g'>GCSE only</span> Edexcel GCSE (1BI0) content that isn't in the International GCSE"
  ,facts: ["If you stretched out all the DNA in one human cell, it would be about 2 metres long.", "Your body makes about 2 million new red blood cells every second.", "The surface area of human lungs is roughly the size of a tennis court, thanks to millions of alveoli.", "A sunflower can track the Sun across the sky. That's phototropism in action.", "Tardigrades (water bears) can survive being frozen, boiled and even sent into space.", "Your small intestine is about 6 metres long, folded up inside you.", "Some bacteria can divide every 20 minutes, so one cell could become millions in a few hours.", "About 60% of human genes have a recognisable counterpart in bananas, because all life shares the same basic cell machinery.", "The blue whale's heart is the size of a small car.", "Plants make all the oxygen they release from water, not from carbon dioxide.", "Your nerve impulses can travel at over 100 metres per second.", "Insulin was first used to treat a diabetic patient in 1922, transforming a fatal disease into a manageable one."]
};
window.S2Data = {
  topics: [], exams: {},
  add: function (t) { this.topics.push(t); },
  exam: function (id, qs) { this.exams[id] = qs; },
  videos: {},
  video: function (id, v) { this.videos[id] = v; }
};
