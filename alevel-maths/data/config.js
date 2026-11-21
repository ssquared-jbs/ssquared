/* A-level Maths² — subject settings. Loaded before the topic files. */
window.R = String.raw; /* lets data files write LaTeX with single backslashes, e.g. R`\(\frac{a}{b}\)` */
window.SUBJECT = {
  slug: "alevel-maths",
  keyPrefix: "amaths",
  name: "A-level Maths²",
  sub: "Edexcel A level Mathematics (9MA0)",
  subjectWord: "A-level Maths",
  course: "Edexcel A level Mathematics (9MA0)",
  intro: "Every topic of Pearson Edexcel A level Mathematics (9MA0): pure, statistics and mechanics:",
  math: true,
  extrasGroup: 99,
  groups: {
    1: { name: "Proof", sub: "Pure: deduction, exhaustion, counter-example and contradiction" },
    2: { name: "Algebra and functions", sub: "Pure: surds, quadratics, inequalities, graphs, polynomials, functions and partial fractions" },
    3: { name: "Coordinate geometry", sub: "Pure: straight lines, circles and parametric equations" },
    4: { name: "Sequences and series", sub: "Pure: binomial expansion, arithmetic and geometric series" },
    5: { name: "Trigonometry", sub: "Pure: identities, radians, compound angles and R cos(x − α)" },
    6: { name: "Exponentials and logarithms", sub: "Pure: eˣ, ln x, log laws and modelling" },
    7: { name: "Differentiation", sub: "Pure: first principles, stationary points, chain, product and quotient rules" },
    8: { name: "Integration", sub: "Pure: definite integrals, areas, substitution, parts and differential equations" },
    9: { name: "Numerical methods", sub: "Pure: locating roots, iteration, Newton–Raphson and the trapezium rule" },
    10: { name: "Vectors", sub: "Pure: vectors in 2D and 3D" },
    11: { name: "Statistical sampling and data", sub: "Statistics: sampling, data presentation, correlation and regression" },
    12: { name: "Probability and distributions", sub: "Statistics: probability, the binomial and normal distributions" },
    13: { name: "Hypothesis testing", sub: "Statistics: binomial, correlation and normal mean tests" },
    14: { name: "Kinematics", sub: "Mechanics: suvat, variable acceleration and projectiles" },
    15: { name: "Forces and Newton's laws", sub: "Mechanics: Newton's laws, connected particles, friction, slopes and moments" }
  },
  legend: "<span class='tag tag-p'>Year 12 (AS)</span> Content also in the AS course (8MA0)<br><span class='tag tag-g'>Year 13</span> A level only. Topics marked Year 12 may have Year 13 extensions, marked in the notes.",
  facts: ["Euler's identity, e^(iπ) + 1 = 0, links five of the most important numbers in maths.", "Newton and Leibniz invented calculus independently in the 1660s–1670s and argued for years about who was first.", "The normal distribution is also called the Gaussian distribution, after Carl Friedrich Gauss.", "Proof by contradiction shows √2 is irrational: the Pythagoreans knew this around 500 BCE.", "Napier published the first tables of logarithms in 1614, cutting hours off astronomers' calculations.", "A ball thrown on the Moon would follow a parabola six times taller than on Earth.", "The Newton–Raphson method can double the number of correct digits with each step.", "Pascal's triangle was known in China (as Yang Hui's triangle) centuries before Pascal."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
