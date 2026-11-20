/* A-level Chemistry A² (OCR) — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "alevel-chemistry-ocr",
  keyPrefix: "achemocr",
  name: "A-level Chemistry A²",
  sub: "OCR A level Chemistry A (H432)",
  subjectWord: "A-level Chemistry A",
  course: "OCR A level Chemistry A (H432)",
  intro: "Every module of OCR A level Chemistry A (H432), from atoms to NMR:",
  extrasGroup: 99,
  groups: {
    2: { name: "Foundations in chemistry", sub: "Atoms, amount of substance, redox, electrons and bonding" },
    3: { name: "Periodic table and energy", sub: "Periodicity, Group 2, halogens, enthalpy, rates and equilibrium" },
    4: { name: "Core organic chemistry", sub: "Alkanes, alkenes, alcohols, haloalkanes, synthesis and analysis" },
    5: { name: "Physical chemistry and transition elements", sub: "Rates, Kc and Kp, pH, buffers, energy, electrode potentials, transition elements" },
    6: { name: "Organic chemistry and analysis", sub: "Aromatics, carbonyls, nitrogen compounds, polymers, synthesis, chromatography and NMR" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Modules 2–4, also in the AS course (H032)<br><span class='tag tag-g'>Year 13</span> Modules 5–6, A level only<br>Module 1 (practical skills) is covered inside each topic.",
  facts: ["The most electronegative element, fluorine, is so reactive that it attacks glass and even reacts with the noble gas xenon.", "Chirality matters: one mirror-image form of carvone smells of spearmint, the other of caraway.", "Liquid nitrogen boils at −196 °C, but a drop on a hot pan skates around on a cushion of its own vapour (the Leidenfrost effect).", "A buffer in your blood (carbonic acid / hydrogencarbonate) keeps its pH between about 7.35 and 7.45.", "Platinum in a car's catalytic converter can speed up reactions millions of times while never being used up.", "The first NMR image of a human body took nearly five hours to record in 1977.", "Haemoglobin is a transition-metal complex: iron(II) at the centre of a ring-shaped ligand.", "Benzene's ring structure was famously said to have come to Kekulé in a daydream of a snake biting its tail."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
