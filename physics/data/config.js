/* Physics² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "physics",
  keyPrefix: "phys",
  name: "Physics²",
  sub: "Edexcel IGCSE &amp; GCSE Physics",
  subjectWord: "GCSE Physics",
  course: "Edexcel IGCSE and GCSE Physics",
  intro: "Edexcel International GCSE Physics (4PH1) plus the extra Edexcel GCSE (1PH0) content:",
  extrasGroup: 9,
  groups: {
    1: { name: "Forces and motion", sub: "Speed, acceleration, forces, momentum, moments and springs" },
    2: { name: "Electricity", sub: "Mains electricity, circuits, current, voltage and charge" },
    3: { name: "Waves", sub: "Wave properties, the electromagnetic spectrum, light and sound" },
    4: { name: "Energy resources and energy transfers", sub: "Energy stores, efficiency, work, power and generating electricity" },
    5: { name: "Solids, liquids and gases", sub: "Density, pressure, changes of state and gas laws" },
    6: { name: "Magnetism and electromagnetism", sub: "Magnets, motors, induction and transformers" },
    7: { name: "Radioactivity and particles", sub: "Radiation, half-life, fission and fusion" },
    8: { name: "Astrophysics", sub: "Orbits, stars and the universe" },
    9: { name: "Edexcel GCSE extras", sub: "Content in Edexcel GCSE (1PH0) that isn't in the International GCSE (4PH1)" }
  },
  legend: "<span class='tag tag-c'>Paper 2 only</span> International GCSE content examined only on Paper 2 (\"P\" in the 4PH1 spec)<br><span class='tag tag-p'>Practical</span> A required practical you could be asked about<br><span class='tag tag-g'>GCSE only</span> Edexcel GCSE (1PH0) content that isn't in the International GCSE"
};
window.S2Data = {
  topics: [], exams: {},
  add: function (t) { this.topics.push(t); },
  exam: function (id, qs) { this.exams[id] = qs; }
};
