/* Psychology² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "psychology",
  keyPrefix: "psych",
  name: "Psychology²",
  sub: "Edexcel GCSE Psychology (1PS0)",
  subjectWord: "GCSE Psychology",
  course: "Edexcel GCSE Psychology (1PS0)",
  intro: "Pearson Edexcel GCSE Psychology (1PS0): all five compulsory topics, research methods, and the criminal psychology and sleep and dreaming options:",
  extrasGroup: 99,
  groups: {
    1: { name: "Development", sub: "How did you develop?" },
    2: { name: "Memory", sub: "How does your memory work?" },
    3: { name: "Psychological problems", sub: "Depression and addiction" },
    4: { name: "The brain and neuropsychology", sub: "How does your brain affect you?" },
    5: { name: "Social influence", sub: "How do others affect you?" },
    6: { name: "Optional topics", sub: "Criminal psychology, and sleep and dreaming" },
    7: { name: "Research methods", sub: "How do you carry out psychological research?" }
  },
  legend: "Paper 1: topics 1–5 (1 h 45, 98 marks, 55%). Paper 2: research methods plus two optional topics (1 h 20, 79 marks, 45%).",
  facts: ["Your brain uses about 20% of your body's energy, despite being about 2% of its weight.", "Milgram found 65% of participants went to the maximum 450-volt shock.", "We spend roughly a third of our lives asleep.", "Henry Molaison (HM) took part in research for over 50 years after losing the ability to form new long-term memories.", "Babies are born with nearly all the neurons they'll ever have, but connections between them grow rapidly.", "Michel Siffre lived in caves for months with no clocks to study his natural body rhythms.", "Short-term memory can typically hold around 7 items, give or take 2.", "Phineas Gage survived an iron rod passing through his skull in 1848."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
