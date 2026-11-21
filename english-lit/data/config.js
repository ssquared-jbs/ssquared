/* English Literature² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "english-lit",
  keyPrefix: "englit",
  name: "English Literature²",
  sub: "Edexcel GCSE English Literature (1ET0)",
  subjectWord: "GCSE English Literature",
  course: "Edexcel GCSE English Literature (1ET0)",
  intro: "Study guides for Pearson Edexcel GCSE English Literature (1ET0): the most-studied set texts, the Conflict poetry collection, unseen poetry and essay technique:",
  extrasGroup: 99,
  groups: {
    1: { name: "Shakespeare", sub: "Macbeth and Romeo and Juliet" },
    2: { name: "Post-1914 literature", sub: "An Inspector Calls" },
    3: { name: "19th-century novel", sub: "A Christmas Carol and Dr Jekyll and Mr Hyde" },
    4: { name: "Poetry", sub: "The Conflict collection, comparison and unseen poetry" },
    5: { name: "Exam technique", sub: "Literature essays, Paper 1 and Paper 2" }
  },
  legend: "Paper 1: Shakespeare and Post-1914 Literature (1 h 45). Paper 2: 19th-century Novel and Poetry since 1789 (2 h 15). Both papers are closed book.",
  facts: ["Macbeth is often called 'the Scottish play' by actors, who think saying its name in a theatre brings bad luck.", "A Christmas Carol was written in about six weeks and sold out its first print run of 6000 copies in days.", "Stevenson is said to have burned the first draft of Jekyll and Hyde and rewritten it in three to six days.", "Tennyson wrote The Charge of the Light Brigade within weeks of reading a newspaper report of the battle.", "Wilfred Owen was killed one week before the Armistice in November 1918; his mother received the telegram as church bells rang for peace.", "Shakespeare's plays contain around 884 000 words.", "Romeo and Juliet's balcony is never mentioned in the play: Shakespeare's text only refers to a window.", "An Inspector Calls was first performed in Moscow in 1945, because no London theatre was available."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
