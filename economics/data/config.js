/* Economics² — subject settings. Loaded before the topic files. */
window.SUBJECT = {
  slug: "economics",
  keyPrefix: "econ",
  name: "Economics²",
  sub: "AQA GCSE Economics (8136)",
  subjectWord: "GCSE Economics",
  course: "AQA GCSE Economics (8136)",
  intro: "Edexcel doesn't offer GCSE Economics, so this follows AQA GCSE Economics (8136): how markets work and how the economy works, with worked calculations:",
  extrasGroup: 99,
  groups: {
    1: { name: "How markets work", sub: "Foundations, demand and supply, elasticity, costs, competition and market failure" },
    2: { name: "How the economy works", sub: "Money, growth, inflation, unemployment, government policy and trade" }
  },
  legend: "Paper 1: How markets work (1 h 45, 80 marks, 50%). Paper 2: How the economy works (1 h 45, 80 marks, 50%).",
  facts: ["The word 'economics' comes from the Greek oikonomia, meaning management of a household.", "Adam Smith's The Wealth of Nations (1776) described a pin factory where specialisation multiplied output.", "The Bank of England was founded in 1694.", "The UK's inflation target is 2%, measured by the Consumer Prices Index.", "Hyperinflation in Zimbabwe in 2008 reached billions of percent a year.", "The UK's largest export market is the United States.", "Income tax was first introduced in Britain in 1799 to pay for the Napoleonic Wars.", "Around 80% of UK GDP comes from the service sector."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
