/* A-level Computer Science² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "alevel-cs",
  keyPrefix: "acs",
  name: "A-level Computer Science²",
  sub: "AQA A level Computer Science (7517)",
  subjectWord: "A level Computer Science",
  course: "AQA A level Computer Science (7517)",
  intro: "Every section of AQA A level Computer Science (7517), following the same topic order as the PMT revision notes: programming, data structures, algorithms, theory of computation, data representation, hardware, networking, databases, big data and functional programming:",
  extrasGroup: 99,
  groups: {
    1: { name: "Fundamentals of programming", sub: "Data types, subroutines, recursion and object-oriented programming" },
    2: { name: "Fundamentals of data structures", sub: "Arrays, files, stacks, queues, graphs, trees, hash tables and vectors" },
    3: { name: "Fundamentals of algorithms", sub: "Traversals, Reverse Polish, searching, sorting and Dijkstra" },
    4: { name: "Theory of computation", sub: "Abstraction, FSMs, regular expressions, BNF, complexity and Turing machines" },
    5: { name: "Fundamentals of data representation", sub: "Number systems, binary arithmetic, floating point, coding, images, sound, compression and encryption" },
    6: { name: "Fundamentals of computer systems", sub: "Software, translators, logic gates and Boolean algebra" },
    7: { name: "Computer organisation and architecture", sub: "The processor, fetch-execute, assembly language and hardware" },
    8: { name: "Consequences of uses of computing", sub: "Moral, ethical, legal and cultural issues" },
    9: { name: "Communication and networking", sub: "Transmission, networks, TCP/IP, the internet and security" },
    10: { name: "Fundamentals of databases", sub: "ER modelling, normalisation, SQL and concurrency" },
    11: { name: "Big data", sub: "Volume, velocity, variety and distributed processing" },
    12: { name: "Functional programming", sub: "Functions as first-class objects, map, filter, fold and lists" },
    13: { name: "Systematic approach to problem solving", sub: "The non-exam assessment project" }
  },
  legend: "Paper 1 (on-screen, 2 h 30, 40%): programming, data structures, algorithms, theory of computation, with a skeleton program. Paper 2 (written, 2 h 30, 40%): sections 5–12. NEA programming project: 20%.",
  facts: ["Alan Turing described his 'universal machine' in a 1936 paper, before electronic computers existed.", "Edsger Dijkstra designed his shortest-path algorithm in about 20 minutes, without pen and paper, in 1956.", "IEEE 754 floating point is used by almost every modern processor.", "Unicode now defines well over 100 000 characters, including emoji.", "The Vernam cipher (one-time pad) is the only cipher proven to be perfectly secure.", "Edgar Codd proposed the relational database model at IBM in 1970.", "Lisp, one of the first functional languages, dates from 1958.", "The halting problem shows some problems can never be solved by any computer."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
