/* History² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "history",
  keyPrefix: "hist",
  name: "History²",
  sub: "Edexcel GCSE History (1HI0)",
  subjectWord: "GCSE History",
  course: "Edexcel GCSE History (1HI0)",
  intro: "The most popular Pearson Edexcel GCSE History (1HI0) options: Medicine in Britain and the Western Front, the Cold War, Early Elizabethan England, and Weimar and Nazi Germany:",
  extrasGroup: 99,
  groups: {
    1: { name: "Medicine in Britain, c1250–present", sub: "Paper 1 thematic study" },
    2: { name: "The British sector of the Western Front, 1914–18", sub: "Paper 1 historic environment" },
    3: { name: "Superpower relations and the Cold War, 1941–91", sub: "Paper 2 period study" },
    4: { name: "Early Elizabethan England, 1558–88", sub: "Paper 2 British depth study" },
    5: { name: "Weimar and Nazi Germany, 1918–39", sub: "Paper 3 modern depth study" },
    6: { name: "Exam skills", sub: "Sources, interpretations and essay questions" }
  },
  legend: "Paper 1: Medicine and the Western Front (1 h 20). Paper 2: Cold War and Elizabethan England (1 h 50). Paper 3: Weimar and Nazi Germany (1 h 30).",
  facts: ["Medieval doctors sometimes tasted patients' urine to help diagnose illness.", "About a third to a half of England's population died in the Black Death of 1348–49.", "Penicillin was discovered partly by accident when mould contaminated a dish Fleming had left out.", "Elizabeth I spoke at least six languages.", "During the Berlin Airlift, a plane landed in West Berlin roughly every few minutes at its peak.", "In November 1923, a loaf of bread in Germany cost around 200 billion marks.", "The Thomas splint cut death rates from broken thigh bones on the Western Front from about 80% to about 20%.", "The 'hotline' between Washington and Moscow, set up in 1963, was originally a teleprinter, not a telephone."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
