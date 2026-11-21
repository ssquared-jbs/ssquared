/* Video explainers — Business. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Enterprise and entrepreneurship", sub: "Ideas, risk and reward.", mark: "💡",
    say: ["Every business starts with an idea, and a person willing to take a risk on it."] },
  { type: "points", title: "Where ideas come from", items: ["Changes in technology", "Changes in what consumers want", "Products becoming obsolete"],
    say: ["New technology creates new possibilities, like apps and online shopping.", "Consumer tastes change, for example towards healthy or sustainable products.", "And when products become obsolete, like DVDs, gaps open up for something new."] },
  { type: "compare", title: "Risk and reward", h: ["Risk", "Reward"],
    rows: [["Outcome", "Business failure", "Business success"], ["Money", "Financial loss", "Profit"], ["Lifestyle", "Lack of security", "Independence"]],
    say: ["The business might fail, or it might succeed.", "You could lose your savings, or make a profit.", "You give up a secure wage, but gain the freedom to be your own boss."] },
  { type: "big", text: "Adding value", sub: "Convenience, branding, quality, design, USP",
    say: ["Businesses add value by making a product worth more than its inputs.", "That might be through convenience, a strong brand, high quality, great design, or a unique selling point."] },
  { type: "quiz", q: "Which is a non-financial motive for starting a business?", o: ["Independence", "Profit", "Wealth", "Higher income"], a: 0,
    why: "It's about freedom, not money.", say: ["Which of these is a non-financial motive?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Spotting an opportunity", sub: "Customer needs, research and competition.", mark: "🔎",
    say: ["Successful businesses find out what customers need before they launch."] },
  { type: "compare", title: "Market research", h: ["Examples", "Trade-off"],
    rows: [["Primary", "Surveys, focus groups, observation", "Specific but costly"], ["Secondary", "Internet, reports, government data", "Cheap but may be out of date"]],
    say: ["Primary research is collected first-hand. It's specific and up to date, but expensive and slow.", "Secondary research uses existing data. It's cheaper and quicker, but may be general or out of date."] },
  { type: "points", title: "Segmentation", items: ["Location", "Demographics: age, gender", "Lifestyle", "Income"],
    say: ["Businesses split markets into groups by location,", "by demographics like age and gender,", "by lifestyle,", "and by income, so they can target each group."] },
  { type: "big", text: "Market mapping", sub: "Plot rivals on two features to spot gaps",
    say: ["A market map plots competitors on two features, such as price and quality.", "Empty areas are gaps in the market, but only worth filling if customers actually want them."] },
  { type: "quiz", q: "A focus group is…", o: ["Primary research", "Secondary research", "A market map", "A sales report"], a: 0,
    why: "It's collected first-hand from participants.", say: ["Is a focus group primary or secondary research?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Putting the idea into practice", sub: "Costs, break-even, cash flow and finance.", mark: "£",
    say: ["To survive, a business must understand its costs, its break-even point and its cash."] },
  { type: "compare", title: "Key formulas", h: ["Formula"],
    rows: [["Revenue", "Price × quantity"], ["Total costs", "Fixed + variable costs"], ["Profit", "Revenue − total costs"]],
    say: ["Revenue is price times quantity sold.", "Total costs are fixed costs plus variable costs.", "And profit is revenue minus total costs."] },
  { type: "calc", title: "Break-even", q: "Fixed costs £6000; price £10; variable cost £4",
    lines: ["Contribution per unit = 10 − 4 = £6", "Break-even = 6000 ÷ 6", "= 1000 units"],
    say: ["Each unit contributes ten minus four, six pounds, towards fixed costs.", "Divide fixed costs by six.", "The business breaks even at a thousand units. Sales above that are the margin of safety."] },
  { type: "flow", title: "Cash flow", nodes: ["Opening balance", "+ inflows", "− outflows", "= closing balance"],
    say: ["Start with the opening balance.", "Add the money coming in.", "Subtract the money going out.", "That gives the closing balance, which becomes next month's opening balance."] },
  { type: "quiz", q: "Fixed costs £2000, price £15, variable cost £5. Break-even?", o: ["200 units", "100 units", "400 units", "133 units"], a: 0,
    why: "2000 ÷ (15 − 5) = 200.", say: ["Fixed costs two thousand pounds, price fifteen, variable cost five. What's the break-even output?"] }
]});

S2Data.video("1d", { scenes: [
  { type: "title", title: "Making the business effective", sub: "Ownership, location, marketing mix, plans.", mark: "🏢",
    say: ["The right ownership, location and marketing make a business far more likely to succeed."] },
  { type: "compare", title: "Ownership", h: ["Owners", "Liability"],
    rows: [["Sole trader", "One", "Unlimited"], ["Partnership", "2–20", "Unlimited"], ["Private limited company", "Shareholders", "Limited"]],
    say: ["A sole trader has one owner, who keeps all the profit but has unlimited liability.", "A partnership shares skills and money, but partners usually still have unlimited liability.", "A private limited company's shareholders can only lose what they invested."] },
  { type: "compare", title: "Franchising", h: ["For the franchisee"],
    rows: [["Pros", "Proven model, known brand, support"], ["Cons", "Fees, royalties, less freedom"]],
    say: ["A franchise gives you a proven business model, a brand people know, and support.", "But you pay fees and royalties, and you must follow the franchisor's rules."] },
  { type: "points", title: "The marketing mix", items: ["Product", "Price", "Promotion", "Place"],
    say: ["The product itself.", "Its price.", "How it's promoted.", "And where it's sold. All four must fit the target market."] },
  { type: "quiz", q: "Which has limited liability?", o: ["Private limited company", "Sole trader", "Ordinary partnership", "None"], a: 0,
    why: "Shareholders can only lose their investment.", say: ["Which type of business has limited liability?"] }
]});

S2Data.video("1e", { scenes: [
  { type: "title", title: "External influences", sub: "Stakeholders, law and the economy.", mark: "🌍",
    say: ["No business operates alone. People, laws and the economy all affect it."] },
  { type: "points", title: "Stakeholders", items: ["Owners: profit", "Employees: pay and security", "Customers: price and quality", "Community: jobs, less pollution"],
    say: ["Owners want profit.", "Employees want good pay and security.", "Customers want low prices and high quality.", "And the local community wants jobs without noise or pollution. These aims often conflict."] },
  { type: "compare", title: "The economy", h: ["Effect"],
    rows: [["Interest rates up", "Borrowing dearer; spending falls"], ["Inflation", "Costs rise"], ["Unemployment up", "Spending falls; easier to recruit"], ["Strong pound", "Imports cheap; exports dear"]],
    say: ["Higher interest rates make loans dearer and encourage saving.", "Inflation pushes up costs.", "Rising unemployment cuts spending, but makes hiring easier.", "And a strong pound makes imports cheap and exports dear. Remember SPICED."] },
  { type: "big", text: "Legislation", sub: "Employment law and consumer law",
    say: ["Employment law covers pay, discrimination and safety. Consumer law protects buyers.", "Complying costs money, but breaking the law costs far more."] },
  { type: "quiz", q: "A strong pound makes UK exports…", o: ["More expensive abroad", "Cheaper abroad", "Unchanged", "Illegal"], a: 0,
    why: "Foreign buyers need more of their currency to buy pounds.", say: ["What does a strong pound do to UK exports?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Growing the business", sub: "Organic and external growth, PLCs, globalisation.", mark: "📈",
    say: ["Once a business is established, it often wants to grow."] },
  { type: "compare", title: "Methods of growth", h: ["Examples", "Trade-off"],
    rows: [["Organic", "New products, new markets", "Low risk but slow"], ["External", "Mergers, takeovers", "Fast but risky"]],
    say: ["Organic growth means expanding from within, through new products or markets. It's safer but slow.", "External growth means merging with or taking over another business. It's fast, but expensive and risky."] },
  { type: "compare", title: "Becoming a PLC", h: ["Detail"],
    rows: [["Advantage", "Raise large capital by selling shares publicly"], ["Disadvantage", "Loss of control; risk of takeover"]],
    say: ["A public limited company can raise huge sums by selling shares on the stock exchange.", "But the founders lose control, and anyone could buy enough shares to take over."] },
  { type: "points", title: "Globalisation and ethics", items: ["New markets and cheaper production", "More competition", "Tariffs and trade blocs", "Ethical trade-offs"],
    say: ["Globalisation opens new markets and cheaper production.", "It also brings more competition.", "Tariffs and trade blocs affect trade.", "And acting ethically may cost more, but protects reputation."] },
  { type: "quiz", q: "When one business buys another, it's a…", o: ["Takeover", "Merger", "Franchise", "Partnership"], a: 0,
    why: "A merger is an agreement to join; a takeover is a purchase.", say: ["What is it called when one business buys another?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Marketing decisions", sub: "Product, price, promotion and place.", mark: "📣",
    say: ["Marketing decisions turn a product into something customers want to buy."] },
  { type: "flow", title: "Product life cycle", nodes: ["Development", "Introduction", "Growth", "Maturity", "Decline"],
    say: ["First the product is researched and developed.", "It's introduced, often with low sales.", "Sales grow quickly.", "They peak at maturity.", "Then decline. Extension strategies, like new features or packaging, can delay this."] },
  { type: "compare", title: "Pricing strategies", h: ["Use"],
    rows: [["Skimming", "High launch price for innovative products"], ["Penetration", "Low launch price to win market share"], ["Competitive", "Match rivals"], ["Cost-plus", "Costs plus a mark-up"]],
    say: ["Price skimming starts high for innovative products.", "Penetration pricing starts low to win customers.", "Competitive pricing matches rivals.", "And cost-plus adds a mark-up to costs."] },
  { type: "big", text: "An integrated mix", sub: "All four Ps must tell the same story",
    say: ["A premium product needs a premium price, upmarket promotion and exclusive outlets.", "If one P doesn't fit, the whole mix fails."] },
  { type: "quiz", q: "A high launch price for a new gadget is…", o: ["Price skimming", "Penetration pricing", "Cost-plus", "Competitive pricing"], a: 0,
    why: "Early adopters pay more for something new.", say: ["What pricing strategy is a high launch price for a new gadget?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Operational decisions", sub: "Production, stock and quality.", mark: "⚙",
    say: ["Operations are about making products efficiently, at the right quality."] },
  { type: "compare", title: "Production methods", h: ["Example", "Feature"],
    rows: [["Job", "Wedding cake", "Unique, high cost"], ["Batch", "Bakery bread", "Groups, some flexibility"], ["Flow", "Cars", "Mass, low unit cost"]],
    say: ["Job production makes one-off items, like a wedding cake.", "Batch production makes groups of identical items, like loaves of bread.", "Flow production runs continuously, like a car assembly line, with the lowest cost per unit."] },
  { type: "compare", title: "Stock control", h: ["Pros", "Cons"],
    rows: [["Just in time", "Low storage, little waste", "Relies on suppliers"], ["Just in case", "Never runs out", "High storage costs"]],
    say: ["Just in time keeps stock to a minimum, cutting storage and waste, but any late delivery halts production.", "Just in case holds spare stock to meet demand, at the cost of storage."] },
  { type: "compare", title: "Quality", h: ["How"],
    rows: [["Quality control", "Inspect finished products"], ["Quality assurance", "Build quality into every stage"]],
    say: ["Quality control checks products at the end.", "Quality assurance makes quality everyone's job at every stage, preventing faults rather than finding them."] },
  { type: "quiz", q: "Mass-produced cans use…", o: ["Flow production", "Job production", "Batch production", "Craft production"], a: 0,
    why: "Continuous, identical, high-volume output.", say: ["What production method suits mass-produced cans?"] }
]});

S2Data.video("2d", { scenes: [
  { type: "title", title: "Financial decisions", sub: "Profit, margins and ARR.", mark: "%",
    say: ["Financial ratios show how well a business turns sales into profit."] },
  { type: "calc", title: "Profit and margins", q: "Revenue £200 000; cost of sales £120 000; expenses £50 000",
    lines: ["Gross profit = 200 000 − 120 000 = £80 000", "Gross margin = 80 000 ÷ 200 000 × 100 = 40%", "Net profit = 80 000 − 50 000 = £30 000 (15%)"],
    say: ["Gross profit is revenue minus cost of sales: eighty thousand pounds.", "As a margin, that's forty percent of revenue.", "Subtract other expenses to get net profit: thirty thousand, a fifteen percent margin."] },
  { type: "calc", title: "Average rate of return", q: "Machine £50 000; total profit £30 000 over 5 years",
    lines: ["Average annual profit = 30 000 ÷ 5 = £6000", "ARR = 6000 ÷ 50 000 × 100", "= 12%"],
    say: ["Divide the total profit by the number of years: six thousand a year.", "Divide by the cost of the investment and multiply by a hundred.", "An ARR of twelve percent."] },
  { type: "big", text: "Numbers aren't everything", sub: "Data can be out of date and ignores qualitative factors",
    say: ["Financial data is powerful, but it can't show staff morale or customer loyalty.", "Good decisions use both numbers and judgement."] },
  { type: "quiz", q: "Revenue £50 000, net profit £5000. Net margin?", o: ["10%", "5%", "50%", "1%"], a: 0,
    why: "5000 ÷ 50 000 × 100.", say: ["Revenue fifty thousand, net profit five thousand. What's the net profit margin?"] }
]});

S2Data.video("2e", { scenes: [
  { type: "title", title: "Human resource decisions", sub: "Structure, recruitment, training, motivation.", mark: "👥",
    say: ["A business is only as good as its people."] },
  { type: "compare", title: "Structures", h: ["Tall", "Flat"],
    rows: [["Layers", "Many", "Few"], ["Span of control", "Narrow", "Wide"], ["Communication", "Slow", "Fast"]],
    say: ["Tall structures have many layers of management.", "Each manager has a narrow span of control.", "But messages pass slowly. Flat structures are faster and give staff more freedom."] },
  { type: "compare", title: "Recruitment", h: ["Pros", "Cons"],
    rows: [["Internal", "Cheaper, known candidate", "No new ideas"], ["External", "New skills and ideas", "Costly, slower"]],
    say: ["Promoting from inside is cheaper and the person is known, but brings no fresh ideas.", "Recruiting from outside brings new skills, but costs more and takes longer."] },
  { type: "compare", title: "Motivation", h: ["Examples"],
    rows: [["Financial", "Pay, bonus, commission, promotion, fringe benefits"], ["Non-financial", "Job rotation, job enrichment, autonomy"]],
    say: ["Financial motivators include pay, bonuses, commission and perks.", "Non-financial ones include job rotation, more responsibility, and freedom to make decisions."] },
  { type: "quiz", q: "A flat structure usually has…", o: ["Faster communication", "More layers", "Narrow spans", "Slower decisions"], a: 0,
    why: "Fewer layers means messages travel quickly.", say: ["What does a flat structure usually have?"] }
]});
