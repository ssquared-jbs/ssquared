/* A-level Chemistry² — subject settings. Loaded before the topic files. */
window.R = String.raw; /* lets data files write LaTeX with single backslashes */
window.SUBJECT = {
  slug: "alevel-chemistry",
  keyPrefix: "achem",
  name: "A-level Chemistry²",
  sub: "Edexcel A level Chemistry (9CH0)",
  subjectWord: "A-level Chemistry",
  course: "Edexcel A level Chemistry (9CH0)",
  intro: "Every topic of Pearson Edexcel A level Chemistry (9CH0), from atomic structure to NMR:",
  math: true,
  extrasGroup: 99,
  groups: {
    1: { name: "Atomic structure and the Periodic Table", sub: "Mass spectrometry, electron configurations, ionisation energies, periodicity" },
    2: { name: "Bonding and structure", sub: "Ionic, covalent, dative and metallic bonding; shapes; intermolecular forces" },
    3: { name: "Redox I", sub: "Oxidation numbers and redox equations" },
    4: { name: "Inorganic chemistry and the Periodic Table", sub: "Groups 1, 2 and 7" },
    5: { name: "Formulae, equations and amounts of substance", sub: "Moles, gases, solutions, yields and titrations" },
    6: { name: "Organic chemistry I", sub: "Nomenclature, isomerism, alkanes, alkenes, halogenoalkanes and alcohols" },
    7: { name: "Modern analytical techniques I", sub: "Mass spectrometry and infrared spectroscopy" },
    8: { name: "Energetics I", sub: "Enthalpy changes, calorimetry, Hess's law, bond enthalpies" },
    9: { name: "Kinetics I", sub: "Collision theory, Maxwell–Boltzmann and catalysis" },
    10: { name: "Equilibrium I", sub: "Dynamic equilibrium, K<sub>c</sub> and Le Chatelier" },
    11: { name: "Equilibrium II", sub: "K<sub>c</sub> and K<sub>p</sub> calculations" },
    12: { name: "Acid–base equilibria", sub: "pH, K<sub>a</sub>, K<sub>w</sub>, buffers and titration curves" },
    13: { name: "Energetics II", sub: "Lattice energy, Born–Haber cycles, entropy and Gibbs energy" },
    14: { name: "Redox II", sub: "Electrode potentials, cells and redox titrations" },
    15: { name: "Transition metals", sub: "Complexes, colour, ligand exchange and catalysis" },
    16: { name: "Kinetics II", sub: "Rate equations, orders, mechanisms and the Arrhenius equation" },
    17: { name: "Organic chemistry II", sub: "Chirality, carbonyls, carboxylic acids and their derivatives" },
    18: { name: "Organic chemistry III", sub: "Arenes, nitrogen compounds, polymers and synthesis" },
    19: { name: "Modern analytical techniques II", sub: "NMR spectroscopy and chromatography" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Topics 1–10, also in the AS course (8CH0)<br><span class='tag tag-g'>Year 13</span> Topics 11–19, A level only",
  facts: ["The most electronegative element, fluorine, is so reactive that it attacks glass and even reacts with the noble gas xenon.", "Chirality matters: one mirror-image form of carvone smells of spearmint, the other of caraway.", "Liquid nitrogen boils at −196 °C, but a drop on a hot pan skates around on a cushion of its own vapour (the Leidenfrost effect).", "A buffer in your blood (carbonic acid / hydrogencarbonate) keeps its pH between about 7.35 and 7.45.", "Platinum in a car's catalytic converter can speed up reactions millions of times while never being used up.", "The first NMR image of a human body took nearly five hours to record in 1977.", "Haemoglobin is a transition-metal complex: iron(II) at the centre of a ring-shaped ligand.", "Benzene's ring structure was famously said to have come to Kekulé in a daydream of a snake biting its tail."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
