/* Computer Science² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "computer-science",
  keyPrefix: "compsci",
  name: "Computer Science²",
  sub: "Edexcel GCSE Computer Science (1CP2)",
  subjectWord: "GCSE Computer Science",
  course: "Edexcel GCSE Computer Science (1CP2)",
  intro: "Every topic for Pearson Edexcel GCSE Computer Science (1CP2), from binary and algorithms to networks and Python programming:",
  extrasGroup: 99,
  groups: {
    1: { name: "Computational thinking", sub: "Decomposition, abstraction, algorithms, searching, sorting and logic" },
    2: { name: "Data", sub: "Binary, hexadecimal, representing text, images and sound, storage and compression" },
    3: { name: "Computers", sub: "Hardware, the CPU, storage, embedded systems and software" },
    4: { name: "Networks", sub: "Types, topologies, protocols and network security" },
    5: { name: "Issues and impact", sub: "Environmental, ethical and legal issues" },
    6: { name: "Problem solving with programming", sub: "Python: data, selection, iteration, structures, subprograms, files and testing" }
  },
  legend: "Paper 1: Principles of Computer Science (1 h 30, topics 1–5). Paper 2: Application of Computational Thinking (2 h on-screen, Python, topic 6).",
  facts: ["The first computer 'bug' was a real moth found in a Harvard relay in 1947.", "Ada Lovelace wrote what is often called the first computer program, in 1843.", "A modern smartphone has millions of times more memory than the Apollo 11 guidance computer.", "The first website, created by Tim Berners-Lee, went live in 1991 and is still online.", "Python is named after Monty Python's Flying Circus, not the snake.", "The word 'byte' was coined in 1956 by Werner Buchholz at IBM.", "Around 50 million tonnes of e-waste are produced worldwide each year.", "The QWERTY keyboard layout dates from typewriters of the 1870s."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
