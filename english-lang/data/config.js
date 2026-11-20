/* English Language² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "english-lang",
  keyPrefix: "englang",
  name: "English Language²",
  sub: "Edexcel GCSE English Language (1EN0)",
  subjectWord: "GCSE English Language",
  course: "Edexcel GCSE English Language (1EN0)",
  intro: "Every skill for Pearson Edexcel GCSE English Language (1EN0): reading, writing, spoken language and exam technique:",
  extrasGroup: 99,
  groups: {
    1: { name: "Reading", sub: "Retrieval, language, structure, evaluation, comparison and 19th-century texts" },
    2: { name: "Writing", sub: "Imaginative and transactional writing, planning, vocabulary, punctuation and grammar" },
    3: { name: "Spoken language", sub: "The spoken language endorsement" },
    4: { name: "Exam technique", sub: "Paper 1 and Paper 2, question by question" }
  },
  legend: "Paper 1: Fiction and Imaginative Writing (1 h 45). Paper 2: Non-fiction and Transactional Writing (2 h). Spoken language is a separate endorsement.",
  facts: ["Shakespeare is credited with first recording over 1700 English words, including 'lonely' and 'bedroom'.", "The Oxford English Dictionary contains over 600 000 word forms.", "'Set' has one of the longest entries in the OED, with hundreds of meanings.", "The shortest complete sentence in English is 'Go.'", "Charles Dickens was paid by instalment, which is partly why his novels are so long.", "The semicolon was invented by the Italian printer Aldus Manutius in 1494.", "About a quarter of all English words come from Latin via French.", "The word 'nice' once meant 'foolish' or 'ignorant'."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
