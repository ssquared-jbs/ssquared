/* A-level Psychology² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "alevel-psychology",
  keyPrefix: "apsych",
  name: "A-level Psychology²",
  sub: "Edexcel A level Psychology (9PS0)",
  subjectWord: "A level Psychology",
  course: "Edexcel A level Psychology (9PS0)",
  intro: "Pearson Edexcel A level Psychology (9PS0): the four foundation approaches, clinical psychology, the criminological and child psychology options, research methods, statistics and issues and debates:",
  extrasGroup: 99,
  groups: {
    1: { name: "Social psychology", sub: "Obedience and prejudice" },
    2: { name: "Cognitive psychology", sub: "Memory" },
    3: { name: "Biological psychology", sub: "The brain, aggression and evolution" },
    4: { name: "Learning theories", sub: "Conditioning and social learning" },
    5: { name: "Clinical psychology", sub: "Diagnosis, schizophrenia and depression" },
    6: { name: "Criminological psychology (option)", sub: "Crime, eyewitnesses and treatment" },
    7: { name: "Child psychology (option)", sub: "Attachment, day care and development" },
    8: { name: "Psychological skills", sub: "Methods, statistics, issues and debates" }
  },
  legend: "Paper 1 Foundations (topics 1–4, plus issues and debates): 2 h, 90 marks, 35%. Paper 2 Applications (clinical plus one option): 2 h, 90 marks, 35%. Paper 3 Psychological skills (methods, studies, issues and debates): 2 h, 80 marks, 30%.",
  facts: ["Milgram's original 1963 study found 65% of participants went to 450 volts.", "Burger's 2009 replication stopped at 150 volts for ethical reasons; about 70% were willing to continue past it.", "The amygdala is about the size of an almond, and its name comes from the Greek for almond.", "HM had parts of both medial temporal lobes removed in 1953 to treat epilepsy.", "Little Albert's conditioning was never reversed by Watson and Rayner.", "Rosenhan's pseudo-patients stayed in hospital for between 7 and 52 days.", "Loftus and Palmer's 'smashed' group estimated speeds of about 41 mph; 'contacted' about 32 mph.", "Schizophrenia affects roughly 1% of people worldwide."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
