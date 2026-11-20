/* Maths² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "maths",
  keyPrefix: "maths",
  name: "Maths²",
  sub: "Edexcel GCSE Maths (1MA1)",
  subjectWord: "GCSE Maths",
  course: "Edexcel GCSE Mathematics (1MA1)",
  intro: "Every area of Pearson Edexcel GCSE Mathematics (1MA1), Foundation and Higher:",
  extrasGroup: 99,
  groups: {
    1: { name: "Number", sub: "Place value, factors, fractions, percentages, powers, standard form and surds" },
    2: { name: "Algebra", sub: "Expressions, equations, sequences, graphs, quadratics and functions" },
    3: { name: "Ratio, proportion and rates of change", sub: "Ratio, percentage change, growth, compound measures and proportion" },
    4: { name: "Geometry and measures", sub: "Angles, area, volume, Pythagoras, trigonometry, transformations, circles and vectors" },
    5: { name: "Probability", sub: "Probability, relative frequency, tree and Venn diagrams" },
    6: { name: "Statistics", sub: "Averages, charts, sampling, cumulative frequency, histograms and scatter graphs" }
  },
  legend: "<span class='tag tag-c'>Higher</span> Topics only on the Higher tier. Topics without the tag are on both tiers, though some contain Higher-only parts, which are marked in the notes.",
  facts: ["The word 'algebra' comes from the Arabic 'al-jabr', from a book by al-Khwarizmi around 820 CE.", "There are infinitely many prime numbers: Euclid proved it over 2000 years ago.", "π has been calculated to over 100 trillion decimal places.", "A googol is 10¹⁰⁰, more than the number of atoms in the observable universe.", "The Fibonacci sequence appears in sunflower seed heads and pine cones.", "Zero as a number was first written down in India in around the 5th century.", "In a room of just 23 people, there's a better than even chance two share a birthday.", "The = sign was invented by Robert Recorde in 1557 because 'no two things can be more equal' than two parallel lines."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
