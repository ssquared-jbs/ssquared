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
};
window.S2Data = {
  topics: [], exams: {},
  add: function (t) { this.topics.push(t); },
  exam: function (id, qs) { this.exams[id] = qs; }
};
