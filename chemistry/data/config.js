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
  ,facts: ["A teaspoon of water contains about 1.7 × 10<sup>23</sup> molecules, more than the number of teaspoons of water in the Atlantic Ocean.", "Diamond and graphite are both pure carbon. The only difference is how the atoms are bonded.", "Helium was discovered in the Sun's spectrum in 1868, 27 years before anyone found it on Earth.", "Gallium melts at about 30 °C, so a lump of it will melt in your hand.", "The smell of rain after a dry spell comes partly from a compound called geosmin, made by soil bacteria.", "Hydrofluoric acid is a weak acid, but it can dissolve glass.", "Fireworks get their colours from metal ions, the same chemistry as flame tests: strontium for red, copper for blue-green, sodium for yellow.", "Your body contains about 0.2 mg of gold, mostly in your blood.", "Polythene was discovered by accident in 1933, when an experiment with ethene went wrong.", "Graphite in a pencil is stacks of graphene sheets, each just one atom thick. Writing works because the layers slide off onto the paper.", "Bananas are slightly radioactive because they contain potassium-40.", "Bombardier beetles defend themselves by mixing hydrogen peroxide with an enzyme catalyst, spraying boiling liquid at attackers."]
};
window.S2Data = window.CHEM = {
  topics: [], exams: {}, details: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  videos: {},
  video: function (id, v) { this.videos[id] = v; }
};
