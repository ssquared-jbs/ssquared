/* A-level Economics² — subject settings. Loaded before the topic files. */
window.R = String.raw; /* lets data files write LaTeX with single backslashes */
window.SUBJECT = {
  slug: "alevel-economics",
  keyPrefix: "aecon",
  name: "A-level Economics²",
  sub: "Edexcel A level Economics A (9EC0)",
  subjectWord: "A level Economics",
  course: "Edexcel A level Economics A (9EC0)",
  intro: "Pearson Edexcel A level Economics A (9EC0): markets and market failure, the UK economy, business behaviour and the labour market, and a global perspective, with diagrams explained and worked calculations:",
  math: true,
  extrasGroup: 99,
  groups: {
    1: { name: "Theme 1: Markets and market failure", sub: "How markets work, market failure and government intervention" },
    2: { name: "Theme 2: The UK economy", sub: "Performance, AD/AS, national income, growth and policy" },
    3: { name: "Theme 3: Business behaviour and the labour market", sub: "Firms, costs, market structures, labour and regulation" },
    4: { name: "Theme 4: A global perspective", sub: "Trade, exchange rates, development, finance and the state" }
  },
  legend: "Paper 1 Markets and business behaviour (Themes 1 and 3): 2 h, 100 marks, 35%. Paper 2 The national and global economy (Themes 2 and 4): 2 h, 100 marks, 35%. Paper 3 Microeconomics and macroeconomics (all themes): 2 h, 100 marks, 30%.",
  facts: ["Adam Smith's 'invisible hand' appears only once in The Wealth of Nations (1776).", "The Bank of England was founded in 1694 and made independent in setting interest rates in 1997.", "The UK inflation target is 2% on the CPI measure.", "The UK economy shrank by about 10% in 2020, its biggest fall in over 300 years.", "Bank Rate was cut to a record low of 0.1% in March 2020.", "The Gini coefficient runs from 0 (perfect equality) to 1 (one person has everything).", "The World Trade Organization replaced GATT in 1995.", "The UK National Minimum Wage was introduced in April 1999 at £3.60 an hour."]
};
window.S2Data = {
  topics: [], exams: {}, details: {}, videos: {},
  add: function (t) { this.topics.push(t); },
  detail: function (id, d) { this.details[id] = d; },
  exam: function (id, qs) { this.exams[id] = qs; },
  video: function (id, v) { this.videos[id] = v; }
};
