/* Video explainers — Economics. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "The economic problem", sub: "Scarcity, choice and opportunity cost.", mark: "⚖",
    say: ["Economics starts with one problem: we want more than we can have."] },
  { type: "big", text: "Unlimited wants, scarce resources", sub: "So every choice has an opportunity cost",
    say: ["People's wants are unlimited, but the resources to satisfy them are scarce.", "So we must choose, and the next best alternative we give up is the opportunity cost."] },
  { type: "compare", title: "Factors of production", h: ["Example", "Reward"],
    rows: [["Land", "Oil, farmland, fish", "Rent"], ["Labour", "Workers' effort", "Wages"], ["Capital", "Machines, buildings", "Interest"], ["Enterprise", "Risk-taking organiser", "Profit"]],
    say: ["Land means all natural resources, and earns rent.", "Labour is human effort, rewarded with wages.", "Capital is man-made goods used in production, earning interest.", "And enterprise brings the others together and takes risks, for profit."] },
  { type: "flow", title: "The three sectors", nodes: ["Primary: extract", "Secondary: make", "Tertiary: serve"],
    say: ["The primary sector extracts raw materials, like farming and mining.", "The secondary sector turns them into products in factories.", "The tertiary sector provides services, like shops, banks and transport."] },
  { type: "points", title: "Specialisation", items: ["Higher productivity", "Lower average costs", "But boredom and dependence"],
    say: ["When workers specialise in one task, output per worker rises.", "That lowers average costs.", "But repetitive work can be boring, and everyone depends on everyone else, so money is needed to exchange."] },
  { type: "quiz", q: "Choosing to revise instead of working a shift. The opportunity cost is…", o: ["The wages forgone", "The revision", "The exam", "Nothing"], a: 0,
    why: "It's the next best alternative given up.", say: ["You choose to revise instead of working a paid shift. What's the opportunity cost?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Demand and supply", sub: "Movements and shifts.", mark: "📈",
    say: ["Markets bring buyers and sellers together. Demand and supply explain what happens."] },
  { type: "graph", title: "The demand curve", x: "quantity", y: "price",
    lines: [{ pts: [[0.1, 0.9], [0.9, 0.15]] }, { pts: [[0.3, 0.9], [1, 0.25]] }],
    marks: [{ x: 0.85, y: 0.2, t: "D", s: 1, anchor: "start", dx: 10 }, { x: 0.95, y: 0.3, t: "D₁", s: 2, anchor: "start", dx: 10, dy: -8 }],
    say: ["Demand slopes downwards: as price falls, quantity demanded extends.", "A change in anything other than price shifts the whole curve. Higher incomes shift it right, to D one.", "Price changes cause movements along the curve; other factors cause shifts."] },
  { type: "compare", title: "Demand shifts right when…", h: ["Example"],
    rows: [["Incomes rise", "Normal goods"], ["Substitute dearer", "Tea when coffee rises"], ["Complement cheaper", "Games when consoles fall"], ["Tastes change", "Advertising, trends"]],
    say: ["Incomes rise, for normal goods.", "A substitute becomes more expensive.", "A complement becomes cheaper.", "Or tastes change, through advertising or trends."] },
  { type: "compare", title: "Supply shifts right when…", h: ["Why"],
    rows: [["Costs fall", "Cheaper materials or labour"], ["Better technology", "More output per worker"], ["Subsidies", "Lower costs"], ["More firms enter", "More sellers"]],
    say: ["Costs fall.", "Technology improves.", "The government gives a subsidy.", "Or more firms enter the market. Taxes, bad weather and higher costs shift supply left."] },
  { type: "quiz", q: "A bad harvest shifts the supply of wheat…", o: ["Left", "Right", "Along the curve", "It doesn't move"], a: 0,
    why: "Less can be supplied at every price.", say: ["A bad harvest. Which way does the supply of wheat shift?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Price and elasticity", sub: "Equilibrium, PED and PES.", mark: "↔",
    say: ["Where demand meets supply, the market finds its price."] },
  { type: "graph", title: "Equilibrium", x: "quantity", y: "price",
    lines: [{ pts: [[0.1, 0.9], [0.9, 0.1]] }, { pts: [[0.1, 0.1], [0.9, 0.9]] }],
    marks: [{ x: 0.85, y: 0.15, t: "D", s: 1, anchor: "start", dx: 10 }, { x: 0.85, y: 0.85, t: "S", s: 1, anchor: "start", dx: 10 }, { x: 0.5, y: 0.5, t: "equilibrium", s: 2, anchor: "start", dx: 16, dy: 22 }],
    say: ["Demand slopes down and supply slopes up.", "They cross at equilibrium, where quantity demanded equals quantity supplied.", "Above it there's a surplus, so prices fall. Below it there's a shortage, so prices rise."] },
  { type: "calc", title: "Price elasticity of demand", q: "Price rises £4 → £5; demand falls 200 → 150",
    lines: ["%ΔQ = −50 ÷ 200 = −25%", "%ΔP = 1 ÷ 4 = +25%", "PED = −25 ÷ 25 = −1 (unitary)"],
    say: ["Quantity falls by fifty out of two hundred: minus twenty-five percent.", "Price rises by one pound out of four: plus twenty-five percent.", "Divide: a PED of minus one, unitary elasticity."] },
  { type: "compare", title: "Elastic or inelastic?", h: ["Elastic (>1)", "Inelastic (<1)"],
    rows: [["Substitutes", "Many", "Few"], ["Type of good", "Luxury", "Necessity"], ["Price cut → revenue", "Rises", "Falls"]],
    say: ["Goods with many substitutes are elastic; few substitutes, inelastic.", "Luxuries tend to be elastic; necessities like petrol, inelastic.", "If demand is elastic, cutting price raises revenue. If inelastic, it lowers revenue."] },
  { type: "points", title: "Supply is more elastic with…", items: ["Spare capacity", "Stocks", "Time"],
    say: ["Spare capacity in factories.", "Stocks that can be released.", "And time: supply is more elastic in the long run, especially for crops."] },
  { type: "quiz", q: "Price rises 10%, quantity demanded falls 5%. PED?", o: ["−0.5", "−2", "−5", "−1"], a: 0,
    why: "−5 ÷ 10 = −0.5, inelastic.", say: ["Price rises ten percent, and quantity demanded falls five percent. What's the PED?"] }
]});

S2Data.video("1d", { scenes: [
  { type: "title", title: "Costs, revenue and profit", sub: "Productivity and economies of scale.", mark: "£",
    say: ["Firms combine factors of production to make goods, and aim to make a profit."] },
  { type: "compare", title: "Costs", h: ["Meaning", "Example"],
    rows: [["Fixed", "Don't change with output", "Rent, salaries"], ["Variable", "Change with output", "Materials"], ["Average", "Total cost ÷ output", "Cost per unit"]],
    say: ["Fixed costs stay the same whatever you produce, like rent.", "Variable costs rise with output, like raw materials.", "Average cost is total cost divided by output: the cost per unit."] },
  { type: "calc", title: "Profit", q: "Fixed £3000; variable £4/unit; 750 sold at £11",
    lines: ["TC = 3000 + 4 × 750 = £6000", "TR = 11 × 750 = £8250", "Profit = 8250 − 6000 = £2250"],
    say: ["Total cost is fixed cost plus variable costs: six thousand pounds.", "Total revenue is price times quantity: eight thousand two hundred and fifty.", "Profit is revenue minus cost: two thousand two hundred and fifty pounds."] },
  { type: "compare", title: "Economies of scale", h: ["How costs fall"],
    rows: [["Purchasing", "Bulk-buying discounts"], ["Technical", "Efficient large machines"], ["Financial", "Cheaper loans"], ["Managerial", "Specialist managers"]],
    say: ["Large firms buy in bulk for discounts.", "They can afford efficient machinery.", "Banks lend to them more cheaply.", "And they employ specialist managers."] },
  { type: "big", text: "Diseconomies of scale", sub: "Poor communication, slow decisions, low motivation",
    say: ["Grow too big, and average costs can rise again.", "Communication breaks down, decisions slow, and workers feel less motivated."] },
  { type: "quiz", q: "Rent on a factory is…", o: ["A fixed cost", "A variable cost", "Revenue", "Profit"], a: 0,
    why: "It doesn't change with output.", say: ["Is rent on a factory a fixed or variable cost?"] }
]});

S2Data.video("1e", { scenes: [
  { type: "title", title: "Competitive and concentrated markets", sub: "From many firms to one.", mark: "🏪",
    say: ["How many firms are in a market changes how they behave."] },
  { type: "compare", title: "Market structures", h: ["Firms", "Price power"],
    rows: [["Competitive", "Many", "Price takers"], ["Oligopoly", "A few large", "Some; non-price competition"], ["Monopoly", "One (25%+ share in UK)", "Price maker"]],
    say: ["Competitive markets have many firms, which must accept the market price.", "An oligopoly has a few large firms, like supermarkets, competing on branding and loyalty.", "A monopoly dominates the market and can set its own price. In the UK, a twenty-five percent share counts."] },
  { type: "points", title: "Barriers to entry", items: ["High start-up costs", "Brand loyalty", "Patents and legal barriers"],
    say: ["Big start-up costs keep new firms out.", "Customers loyal to existing brands are hard to win.", "And patents give exclusive rights to inventions."] },
  { type: "compare", title: "Monopoly: good or bad?", h: ["For consumers"],
    rows: [["Costs", "Higher prices, less choice"], ["Benefits", "Economies of scale, R&D funds"]],
    say: ["Monopolies can charge more and offer less choice, with little pressure to be efficient.", "But their size can lower costs and fund research. That's why the Competition and Markets Authority regulates rather than bans them."] },
  { type: "quiz", q: "Which is a barrier to entry?", o: ["Brand loyalty", "Low start-up costs", "Many buyers", "Free information"], a: 0,
    why: "Customers stick with familiar brands.", say: ["Which of these is a barrier to entry?"] }
]});

S2Data.video("1f", { scenes: [
  { type: "title", title: "Market failure", sub: "When markets get it wrong.", mark: "⚠",
    say: ["Markets don't always produce the best outcome for society."] },
  { type: "compare", title: "Externalities", h: ["Example"],
    rows: [["Negative", "Pollution, noise, congestion"], ["Positive", "Education, vaccinations"]],
    say: ["A negative externality is a cost to third parties, like pollution from a factory.", "A positive externality is a benefit to third parties, like a vaccinated person protecting others."] },
  { type: "compare", title: "Types of good", h: ["Problem", "Example"],
    rows: [["Public good", "Not provided", "Street lighting"], ["Merit good", "Under-consumed", "Education"], ["Demerit good", "Over-consumed", "Cigarettes"]],
    say: ["Public goods are non-excludable and non-rival, so free riders mean firms can't profit.", "Merit goods are under-consumed because people underestimate the benefits.", "Demerit goods are over-consumed because people underestimate the harm."] },
  { type: "compare", title: "Government responses", h: ["Use"],
    rows: [["Indirect tax", "Reduce demerit goods"], ["Subsidy", "Encourage merit goods"], ["Regulation", "Limits and bans"], ["State provision", "Public goods"], ["Information", "Labels, campaigns"]],
    say: ["Taxes raise the price of harmful goods.", "Subsidies cut the price of beneficial ones.", "Regulation sets legal limits.", "The state provides public goods directly.", "And information closes knowledge gaps."] },
  { type: "big", text: "Government failure", sub: "Intervention can make things worse",
    say: ["Taxes can encourage smuggling, and subsidies cost taxpayers money.", "So intervention must be weighed against its own costs."] },
  { type: "quiz", q: "National defence is a…", o: ["Public good", "Merit good", "Demerit good", "Private good"], a: 0,
    why: "Non-excludable and non-rival.", say: ["National defence: what type of good is it?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Money and financial markets", sub: "Banks, saving and interest.", mark: "🏦",
    say: ["Money makes exchange easy, and financial markets move it between savers and borrowers."] },
  { type: "points", title: "Functions of money", items: ["Medium of exchange", "Store of value", "Unit of account"],
    say: ["Money is accepted in exchange for goods, avoiding the double coincidence of wants in barter.", "It stores value for the future.", "And it measures what things are worth."] },
  { type: "flow", title: "How banks work", nodes: ["Savers deposit", "Bank pays interest", "Bank lends", "Borrowers repay with interest"],
    say: ["Savers deposit money in commercial banks.", "The bank pays them interest.", "It lends the money to households and firms.", "Borrowers repay at a higher rate, which is how the bank profits."] },
  { type: "compare", title: "When interest rates rise", h: ["Effect"],
    rows: [["Saving", "More attractive"], ["Borrowing", "More expensive"], ["Spending", "Falls"]],
    say: ["Saving earns more, so people save more.", "Loans and mortgages cost more.", "So spending falls. The Bank of England uses this to control inflation."] },
  { type: "calc", title: "Compound interest", q: "£1000 saved at 5% for 2 years",
    lines: ["Year 1: 1000 × 1.05 = £1050", "Year 2: 1050 × 1.05 = £1102.50", "Interest earns interest"],
    say: ["After one year, a thousand pounds grows to one thousand and fifty.", "In year two, the interest is on one thousand and fifty, giving one thousand one hundred and two pounds fifty.", "That's compound interest: interest earned on interest."] },
  { type: "quiz", q: "Higher interest rates make borrowing…", o: ["More expensive", "Cheaper", "Free", "Unchanged"], a: 0,
    why: "Repayments rise.", say: ["What happens to borrowing when interest rates rise?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Economic growth", sub: "GDP and the economic cycle.", mark: "📊",
    say: ["Economic growth is an increase in the output of an economy, measured by GDP."] },
  { type: "compare", title: "Measuring GDP", h: ["Meaning"],
    rows: [["Nominal GDP", "At current prices"], ["Real GDP", "Adjusted for inflation"], ["GDP per capita", "GDP ÷ population"]],
    say: ["Nominal GDP is measured at today's prices.", "Real GDP removes inflation, showing the true change in output.", "GDP per capita divides by population, to compare living standards."] },
  { type: "graph", title: "The economic cycle", x: "time", y: "real GDP",
    lines: [{ pts: [[0, 0.3], [0.15, 0.5], [0.3, 0.7], [0.45, 0.55], [0.6, 0.4], [0.75, 0.55], [0.9, 0.75], [1, 0.8]] }],
    marks: [{ x: 0.3, y: 0.7, t: "boom", s: 1, dy: -14 }, { x: 0.6, y: 0.4, t: "recession", s: 2, dy: 32 }, { x: 0.78, y: 0.6, t: "recovery", s: 3, anchor: "end", dx: -12 }],
    say: ["In a boom, output grows fast, unemployment is low, and inflation rises.", "In a recession, real GDP falls for two quarters in a row, and unemployment rises.", "Then recovery, as spending and jobs grow again."] },
  { type: "compare", title: "Growth: benefits and costs", h: ["Benefits", "Costs"],
    rows: [["People", "Higher incomes, jobs", "Inequality"], ["Government", "More tax revenue", "Inflation pressure"], ["Planet", "Funds green tech", "Pollution, resource use"]],
    say: ["Growth raises incomes and creates jobs, but gains may be unequal.", "Governments get more tax revenue, but fast growth can cause inflation.", "And growth can fund new technology, but also harms the environment. Sustainable growth is the goal."] },
  { type: "quiz", q: "Nominal growth 6%, inflation 4%. Real growth is about…", o: ["2%", "10%", "6%", "4%"], a: 0,
    why: "Subtract inflation: 6 − 4.", say: ["Nominal GDP grows six percent, and inflation is four percent. Roughly what's real growth?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Inflation and unemployment", sub: "Two key measures of the economy.", mark: "🔥",
    say: ["Rising prices and lost jobs are two problems every government watches."] },
  { type: "calc", title: "Measuring inflation", q: "CPI rises from 120 to 126",
    lines: ["Change = 126 − 120 = 6", "6 ÷ 120 × 100", "Inflation = 5%"],
    say: ["The Consumer Prices Index tracks a weighted basket of goods and services. It rises by six points.", "Divide by the starting value and multiply by a hundred.", "Inflation is five percent, above the Bank of England's two percent target."] },
  { type: "compare", title: "Causes of inflation", h: ["Cause", "Example"],
    rows: [["Demand-pull", "Too much spending", "Boom, low interest rates"], ["Cost-push", "Rising costs", "Energy, wages, weak pound"]],
    say: ["Demand-pull inflation happens when spending grows faster than output.", "Cost-push inflation happens when firms' costs rise and they pass them on."] },
  { type: "compare", title: "Types of unemployment", h: ["Cause"],
    rows: [["Cyclical", "Lack of demand in a recession"], ["Structural", "Decline of an industry"], ["Frictional", "Between jobs"], ["Seasonal", "Time of year"]],
    say: ["Cyclical unemployment comes from falling demand in a recession.", "Structural unemployment comes from industries declining, like coal mining.", "Frictional unemployment is short-term, between jobs.", "And seasonal unemployment depends on the time of year."] },
  { type: "points", title: "Costs of unemployment", items: ["Individuals: lost income", "Government: benefits up, tax down", "Economy: lost output"],
    say: ["People lose income and confidence.", "The government pays more benefits and collects less tax.", "And the economy loses the output those workers could have produced."] },
  { type: "quiz", q: "Rising energy prices cause…", o: ["Cost-push inflation", "Demand-pull inflation", "Deflation", "Frictional unemployment"], a: 0,
    why: "Firms' costs rise and are passed on.", say: ["Energy prices soar. What kind of inflation could this cause?"] }
]});

S2Data.video("2d", { scenes: [
  { type: "title", title: "Government policy", sub: "Fiscal, monetary and supply-side.", mark: "🏛",
    say: ["Governments aim for growth, low unemployment, stable prices and fairness."] },
  { type: "compare", title: "Taxes", h: ["Example"],
    rows: [["Direct", "Income tax, corporation tax"], ["Indirect", "VAT, excise duties"], ["Progressive", "Income tax bands"], ["Regressive", "VAT on essentials"]],
    say: ["Direct taxes are taken from income or profit.", "Indirect taxes are added to spending.", "Progressive taxes take a bigger share from higher earners.", "Regressive taxes take a bigger share from lower earners."] },
  { type: "compare", title: "Policy tools", h: ["Who", "Tools"],
    rows: [["Fiscal", "Government", "Tax and spending"], ["Monetary", "Bank of England", "Interest rates"], ["Supply-side", "Government", "Training, infrastructure"]],
    say: ["Fiscal policy is the government changing taxes and spending.", "Monetary policy is the Bank of England changing interest rates, mainly to hit the two percent inflation target.", "Supply-side policies boost productive capacity, through training and infrastructure."] },
  { type: "big", text: "Objectives can conflict", sub: "More growth can mean more inflation",
    say: ["Boosting spending cuts unemployment, but can push up prices.", "So governments must make trade-offs."] },
  { type: "calc", title: "Income tax", q: "£30 000 salary; allowance £12 570; 20% basic rate",
    lines: ["Taxable = 30 000 − 12 570 = £17 430", "Tax = 17 430 × 0.2", "= £3486"],
    say: ["The first twelve thousand five hundred and seventy pounds is tax-free.", "The rest is taxed at twenty percent.", "Tax due: three thousand four hundred and eighty-six pounds."] },
  { type: "quiz", q: "Raising interest rates is…", o: ["Monetary policy", "Fiscal policy", "Supply-side policy", "Protectionism"], a: 0,
    why: "Set by the Bank of England.", say: ["Is raising interest rates fiscal, monetary or supply-side policy?"] }
]});

S2Data.video("2e", { scenes: [
  { type: "title", title: "International trade", sub: "Exports, imports and exchange rates.", mark: "🌐",
    say: ["No country makes everything it needs. Trade lets countries specialise."] },
  { type: "compare", title: "Free trade vs protectionism", h: ["Free trade", "Protectionism"],
    rows: [["Prices", "Lower", "Higher"], ["Choice", "More", "Less"], ["Domestic jobs", "Some lost to rivals", "Protected for now"]],
    say: ["Free trade lowers prices through competition; protection raises them.", "Consumers get more choice with free trade.", "But protection can shield domestic jobs and infant industries, at the risk of retaliation."] },
  { type: "points", title: "Protectionist tools", items: ["Tariffs: taxes on imports", "Quotas: limits on quantity", "Subsidies to domestic firms"],
    say: ["Tariffs make imports more expensive.", "Quotas cap how much can be imported.", "Subsidies help domestic firms compete."] },
  { type: "calc", title: "Exchange rates", q: "£1 = $1.25; a $75 item",
    lines: ["Price in £ = 75 ÷ 1.25", "= £60", "If £ falls to $1.00: £75"],
    say: ["To convert dollars to pounds, divide by the exchange rate.", "The item costs sixty pounds.", "If the pound weakens to one dollar, it costs seventy-five. A weak pound makes imports dearer and exports cheaper."] },
  { type: "compare", title: "Globalisation", h: ["Benefits", "Costs"],
    rows: [["Consumers", "Cheaper goods, choice", "Less local variety"], ["Workers", "New jobs from investment", "Job losses, exploitation"], ["Planet", "Shared technology", "Transport emissions"]],
    say: ["Consumers gain cheaper goods and more choice.", "Multinationals bring jobs, but others are lost and some workers are exploited.", "And technology spreads, but shipping goods worldwide adds emissions."] },
  { type: "quiz", q: "A fall in the pound makes UK exports…", o: ["Cheaper abroad", "Dearer abroad", "Unchanged", "Banned"], a: 0,
    why: "Foreigners need less of their currency to buy pounds.", say: ["If the pound falls, what happens to the price of UK exports abroad?"] }
]});
