/* Chemistry² — subject settings. Loaded before the topic and exam files. */
window.SUBJECT = {
  slug: "chemistry",
  keyPrefix: "chem",
  name: "Chemistry²",
  sub: "Edexcel IGCSE &amp; GCSE Chemistry",
  subjectWord: "GCSE Chemistry",
  course: "Edexcel IGCSE and GCSE Chemistry",
  intro: "Every topic of Edexcel International GCSE Chemistry (4CH1) plus the extra Edexcel GCSE (1CH0) content:",
  extrasGroup: 5,
  groups: {
    1: { name: "Principles of chemistry", sub: "States of matter, atoms, bonding, moles and electrolysis" },
    2: { name: "Inorganic chemistry", sub: "Groups, the atmosphere, metals, acids, salts and tests" },
    3: { name: "Physical chemistry", sub: "Energetics, rates and equilibria" },
    4: { name: "Organic chemistry", sub: "Crude oil, hydrocarbons, alcohols, acids, esters and polymers" },
    5: { name: "Edexcel GCSE extras", sub: "Content in Edexcel GCSE (1CH0) that isn't in the International GCSE (4CH1)" }
  },
  legend: "<span class='tag tag-c'>Paper 2 only</span> International GCSE content examined only on Paper 2 (\"C\" in the 4CH1 spec)<br><span class='tag tag-p'>Practical</span> A required practical you could be asked about<br><span class='tag tag-g'>GCSE only</span> Edexcel GCSE (1CH0) content that isn't in the International GCSE"
};
window.S2Data = window.CHEM = {
  topics: [], exams: {},
  add: function (t) { this.topics.push(t); },
  exam: function (id, qs) { this.exams[id] = qs; }
};
