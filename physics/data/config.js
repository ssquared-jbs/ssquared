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
  ,facts: ["Light from the Sun takes about 8 minutes 20 seconds to reach Earth.", "A neutron star is so dense that a teaspoon of it would weigh about a billion tonnes.", "Sound travels about 4 times faster in water than in air.", "If you removed the empty space from every atom in every human, all of humanity would fit into a sugar cube.", "The International Space Station orbits Earth about every 90 minutes, at roughly 7.7 km/s.", "Lightning heats the air around it to about 30 000 °C, five times hotter than the Sun's surface.", "A bolt of lightning carries a current of around 30 000 amps.", "On the Moon, with g = 1.6 N/kg, you could jump about six times higher than on Earth.", "The cosmic microwave background makes up a tiny fraction of the static on an old analogue TV.", "Glass optical fibres can carry data across oceans using total internal reflection.", "The Sun converts about 4 million tonnes of mass into energy every second through fusion.", "Absolute zero, −273.15 °C, can be approached but never actually reached."]
};
window.S2Data = {
  topics: [], exams: {},
  add: function (t) { this.topics.push(t); },
  exam: function (id, qs) { this.exams[id] = qs; }
};
