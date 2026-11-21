/* A-level Physics² — subject settings. Loaded before the topic files. */
window.R = String.raw; /* lets data files write LaTeX with single backslashes */
window.SUBJECT = {
  slug: "alevel-physics",
  keyPrefix: "aphys",
  name: "A-level Physics²",
  sub: "Edexcel A level Physics (9PH0)",
  subjectWord: "A-level Physics",
  course: "Edexcel A level Physics (9PH0)",
  intro: "Every topic of Pearson Edexcel A level Physics (9PH0), from mechanics to oscillations:",
  math: true,
  extrasGroup: 99,
  groups: {
    1: { name: "Working as a physicist", sub: "SI units, uncertainties and graphs" },
    2: { name: "Mechanics", sub: "Motion, forces, moments, work, energy and power" },
    3: { name: "Electric circuits", sub: "Current, resistance, resistivity, potential dividers and EMF" },
    4: { name: "Materials", sub: "Fluids, viscosity, upthrust, stress, strain and the Young modulus" },
    5: { name: "Waves and the particle nature of light", sub: "Wave properties, superposition, optics, diffraction and photons" },
    6: { name: "Further mechanics", sub: "Momentum, impulse and circular motion" },
    7: { name: "Electric and magnetic fields", sub: "Electric fields, capacitors, magnetic forces and induction" },
    8: { name: "Nuclear and particle physics", sub: "Accelerators, detectors and the standard model" },
    9: { name: "Thermodynamics", sub: "Heat capacity, latent heat, ideal gases and kinetic theory" },
    10: { name: "Space", sub: "Stars, luminosity, the HR diagram and the expanding universe" },
    11: { name: "Nuclear radiation", sub: "Radioactive decay, half-life, binding energy, fission and fusion" },
    12: { name: "Gravitational fields", sub: "Newton's law of gravitation, field strength and potential" },
    13: { name: "Oscillations", sub: "Simple harmonic motion, damping and resonance" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Topics 1–5, also in the AS course (8PH0)<br><span class='tag tag-g'>Year 13</span> Topics 6–13, A level only",
  facts: ["GPS satellites must correct for both special and general relativity, or your phone's position would drift by about 10 km a day.", "A teaspoon of neutron star would weigh around a billion tonnes.", "The Large Hadron Collider accelerates protons to 99.999999% of the speed of light.", "Superconducting magnets in MRI scanners are cooled with liquid helium at about 4 K.", "The Tacoma Narrows Bridge collapsed in 1940 after wind made it oscillate violently.", "Sunlight takes about 8 minutes to reach Earth, but the energy took tens of thousands of years to escape the Sun's core.", "Glass fibres guide light round corners by total internal reflection, carrying most of the world's internet traffic.", "A capacitor in a camera flash charges for several seconds, then dumps its energy in about a millisecond."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
