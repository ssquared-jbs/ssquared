/* Business² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "business",
  keyPrefix: "bus",
  name: "Business²",
  sub: "Edexcel GCSE Business (1BS0)",
  subjectWord: "GCSE Business",
  course: "Edexcel GCSE Business (1BS0)",
  intro: "Every topic for Pearson Edexcel GCSE Business (1BS0), from starting a small business to growing it, with worked calculations:",
  extrasGroup: 99,
  groups: {
    1: { name: "Theme 1: Investigating small business", sub: "Enterprise, opportunities, finance, effectiveness and external influences" },
    2: { name: "Theme 2: Building a business", sub: "Growth, marketing, operations, finance and people" }
  },
  legend: "Paper 1: Investigating small business (Theme 1). Paper 2: Building a business (Theme 2). Each is 1 h 45, 90 marks, 50%.",
  facts: ["Around 99% of UK businesses are small or medium-sized enterprises.", "About 60% of new UK businesses fail within their first three years.", "The first franchise in the UK is often credited to Wimpy in the 1950s.", "James Dyson built over 5000 prototypes before his bagless vacuum cleaner worked.", "The UK has over 5 million private-sector businesses.", "Most UK businesses are sole traders with no employees.", "Henry Ford's moving assembly line cut the time to build a Model T from about 12 hours to about 90 minutes.", "Just-in-time production was pioneered by Toyota."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
