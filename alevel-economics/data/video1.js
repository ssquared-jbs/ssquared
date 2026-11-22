/* Video explainers — A-level Economics Themes 1 and 2. */
(function () {
const D = { pts: [[0.08, 0.9], [0.86, 0.12]], straight: true, label: "D" };
const S = { pts: [[0.08, 0.12], [0.86, 0.9]], straight: true, label: "S" };
const line = (a, b, o) => Object.assign({ pts: [a, b], straight: true }, o || {});

S2Data.video("1a", {
  scenes: [
    { type: "title", title: "The nature of economics", sub: "Scarcity, choice and opportunity cost.", mark: "PPF",
      say: ["Economics starts with one problem: we want more than our resources can produce. So every choice has a cost."] },
    { type: "compare", title: "Positive or normative?", h: ["Meaning", "Example"],
      rows: [["Positive", "Can be tested with evidence", "Inflation was 3% last year"], ["Normative", "A value judgement", "The minimum wage should rise"]],
      say: ["A positive statement can be checked against evidence. It might be wrong, but you can test it.", "A normative statement is a value judgement about what should happen. Look out for words like should and ought."] },
    { type: "graph", title: "Production possibility frontier", x: "Consumer goods", y: "Capital goods",
      lines: [{ pts: [[0, 0.8], [0.35, 0.72], [0.6, 0.5], [0.75, 0]], s: 0, label: "PPF" }, { pts: [[0, 0.95], [0.45, 0.85], [0.72, 0.58], [0.9, 0]], dash: true, s: 2, label: "PPF₂" }],
      marks: [{ x: 0.3, y: 0.35, t: "inside: unemployment", s: 1, anchor: "start", dx: 18, dy: 6 }, { x: 0.6, y: 0.5, t: "on: efficient", s: 1, anchor: "start", dx: 18, dy: 6 }],
      say: ["A PPF shows the most an economy can make of two goods with all its resources. It bows out, because resources aren't equally good at making both, so opportunity cost rises.",
            "A point inside the curve means resources are unemployed or wasted. A point on it is productively efficient.",
            "Better technology or more resources shift the whole curve out. That's economic growth."] },
    { type: "points", title: "Specialisation and money", items: ["Division of labour raises productivity", "But: boredom, over-dependence", "Money solves barter's double coincidence of wants"],
      say: ["Splitting work into small tasks, as in Adam Smith's pin factory, makes workers far more productive.", "The downsides are boring, repetitive work and dependence on every other stage.", "Specialists must trade, and money makes that easy, because barter needs both people to want what the other has."] },
    { type: "compare", title: "Economic systems", h: ["Who decides?", "Thinker"],
      rows: [["Free market", "Prices and private firms", "Smith, Hayek"], ["Command", "The state plans", "Marx"], ["Mixed", "Both", "Most economies"]],
      say: ["In a free market, prices allocate resources. Smith and Hayek argued this gives the best incentives.", "In a command economy, the state plans production, an idea linked to Marx.", "Real economies, like the UK, are mixed."] },
    { type: "quiz", q: "Which statement is normative?", o: ["UK unemployment is 4.8%", "Tuition fees should be scrapped", "House prices rose 2%", "Petrol costs £1.40 a litre"], a: 1,
      why: "'Should' marks a value judgement.", say: ["Which of these is a normative statement?"] }
  ]
});

S2Data.video("1b", {
  scenes: [
    { type: "title", title: "Demand and its elasticities", sub: "How much do buyers respond?", mark: "PED",
      say: ["Demand tells us how much people want to buy at each price. Elasticity tells us how strongly they react to changes."] },
    { type: "graph", title: "Movement or shift?", x: "Quantity", y: "Price",
      lines: [Object.assign({}, D, { s: 0 }), line([0.22, 0.9], [0.95, 0.17], { dash: true, s: 1, label: "D₂" })],
      marks: [{ x: 0.3, y: 0.68, t: "price change: move along", s: 0, anchor: "start", dx: 18, dy: -10 }],
      say: ["A change in the good's own price moves us along the demand curve. A price fall is an extension; a rise is a contraction.",
            "Anything else, like higher incomes, a cheaper substitute or a successful advert, shifts the whole curve."] },
    { type: "equation", title: "Price elasticity of demand", rows: [["PED = %ΔQd ÷ %ΔP"], [{ t: "|PED| > 1 elastic", s: 1 }, { t: "·", s: 1 }, { t: "|PED| < 1 inelastic", s: 1 }]],
      note: "Inelastic: raise price → revenue rises", noteStep: 2,
      say: ["Price elasticity of demand is the percentage change in quantity demanded divided by the percentage change in price.",
            "Ignoring the minus sign, above one is elastic and below one is inelastic.",
            "That matters for revenue. If demand is inelastic, a price rise increases total revenue."] },
    { type: "calc", title: "Worked example", q: "Price £10 → £12; quantity 500 → 450.",
      lines: ["%ΔQ = −50 ÷ 500 × 100 = −10%", "%ΔP = 2 ÷ 10 × 100 = +20%", "PED = −10 ÷ 20 = −0.5 (inelastic)"],
      say: ["Quantity falls by fifty, which is ten percent.", "Price rises by two pounds, which is twenty percent.", "So PED is minus nought point five. Demand is inelastic, and revenue rises from five thousand to five thousand four hundred pounds."] },
    { type: "compare", title: "Income and cross elasticity", h: ["Positive", "Negative"],
      rows: [["YED", "Normal good (>1 luxury)", "Inferior good"], ["XED", "Substitutes", "Complements"]],
      say: ["Income elasticity is the response to income. Positive means a normal good; above one, a luxury. Negative means an inferior good, like value-range food.", "Cross elasticity compares two goods. Positive means substitutes, like tea and coffee. Negative means complements, like printers and ink."] },
    { type: "quiz", q: "Income rises 5% and demand for bus travel falls 2%. Bus travel is…", o: ["A luxury", "An inferior good", "A complement", "Price elastic"], a: 1,
      why: "YED = −0.4: negative, so inferior.", say: ["Incomes rise five percent and bus journeys fall two percent. What kind of good is bus travel?"] }
  ]
});

S2Data.video("1c", {
  scenes: [
    { type: "title", title: "Supply and the price mechanism", sub: "How markets find a price.", mark: "S = D",
      say: ["Supply is how much firms will sell at each price. Put it with demand and the market finds its own price."] },
    { type: "graph", title: "Market equilibrium", x: "Quantity", y: "Price",
      lines: [Object.assign({}, D, { s: 0 }), Object.assign({}, S, { s: 0 }), line([0.28, 0.12], [0.98, 0.82], { dash: true, s: 2, label: "S₂" })],
      marks: [{ x: 0.47, y: 0.51, t: "Pe, Qe", s: 1, anchor: "start", dx: 18, dy: 6 }],
      say: ["Demand slopes down; supply slopes up, because higher prices make production more profitable.",
            "Where they cross is equilibrium. Above it there's excess supply, so price falls; below it there's excess demand, so price rises.",
            "If costs fall, supply shifts right. Price falls and quantity rises to a new equilibrium."] },
    { type: "equation", title: "Price elasticity of supply", rows: [["PES = %ΔQs ÷ %ΔP"]],
      note: "More elastic with spare capacity, stocks and time", noteStep: 1,
      say: ["Price elasticity of supply measures how quickly firms can respond to a price change.", "Supply is more elastic when there's spare capacity, stocks to sell, and more time to adjust."] },
    { type: "flow", title: "Three functions of price", nodes: ["Signal", "Incentive", "Ration"],
      say: ["When demand rises, the higher price signals that people want more.", "It gives firms an incentive to produce more, because it's more profitable.", "And it rations the scarce goods to those willing and able to pay."] },
    { type: "graph", title: "Consumer and producer surplus", x: "Quantity", y: "Price",
      lines: [Object.assign({}, D, { s: 0 }), Object.assign({}, S, { s: 0 }), line([0.08, 0.51], [0.47, 0.51], { dash: true, s: 0 })],
      marks: [{ x: 0.16, y: 0.68, t: "consumer surplus", s: 1, anchor: "start", dx: 0, dy: 0, dot: false }, { x: 0.16, y: 0.36, t: "producer surplus", s: 2, anchor: "start", dx: 0, dy: 0, dot: false }],
      say: ["Draw a line across at the equilibrium price.", "Consumer surplus is the triangle above the price and below demand: what people were willing to pay, minus what they paid.", "Producer surplus is the triangle below the price and above supply."] },
    { type: "quiz", q: "A frost destroys half the coffee crop. What happens?", o: ["Price falls, quantity rises", "Price rises, quantity falls", "Both rise", "Both fall"], a: 1,
      why: "Supply shifts left.", say: ["A frost wipes out half the coffee harvest. What happens to the price and quantity of coffee?"] }
  ]
});

S2Data.video("1d", {
  scenes: [
    { type: "title", title: "Taxes, subsidies and behaviour", sub: "Who pays, and are we really rational?", mark: "tax",
      say: ["Governments change prices with taxes and subsidies. And behavioural economists ask whether people choose rationally at all."] },
    { type: "graph", title: "A specific tax", x: "Quantity", y: "Price",
      lines: [Object.assign({}, D, { s: 0 }), Object.assign({}, S, { s: 0 }), line([0.08, 0.3], [0.7, 0.92], { s: 1, label: "S + tax" })],
      marks: [{ x: 0.39, y: 0.6, t: "P rises, Q falls", s: 2, anchor: "start", dx: 18, dy: 6 }],
      say: ["Start with supply and demand.", "A tax of a fixed amount per unit shifts supply up by exactly that amount.",
            "Price rises and quantity falls. The price rises by less than the tax, so consumers and producers share the burden."] },
    { type: "points", title: "Who bears the tax?", items: ["Inelastic demand → consumers pay most", "Elastic demand → producers pay most", "Revenue = tax per unit × new quantity"],
      say: ["If demand is inelastic, buyers keep buying, so firms pass most of the tax on.", "If demand is elastic, firms can't raise the price much without losing sales, so they absorb more.", "The government's revenue is the tax per unit times the new quantity."] },
    { type: "calc", title: "Tax incidence", q: "£2 tax: price £10 → £11.50; Q = 900.",
      lines: ["Consumers: £1.50 per unit", "Producers: £0.50 per unit", "Revenue = 2 × 900 = £1800"],
      say: ["Consumers pay one pound fifty more per unit.", "The other fifty pence comes out of the producer's price.", "Total revenue is two pounds times nine hundred: one thousand eight hundred pounds."] },
    { type: "compare", title: "Behavioural economics", h: ["What it means"],
      rows: [["Bounded rationality", "Limited info and time"], ["Bounded self-control", "Weak willpower"], ["Anchoring", "Stuck on the first number"], ["Social norms", "Copying others"]],
      say: ["Real people have limited information and time, so they settle for good enough.", "They lack self-control, so they under-save and over-eat.", "They anchor on the first number they see, like a was price.", "And they copy what others do. Governments use nudges, like default pension enrolment, to work with these biases."] },
    { type: "quiz", q: "Demand for cigarettes is very inelastic. Who pays most of a cigarette tax?", o: ["Producers", "Consumers", "The government", "Shopkeepers only"], a: 1,
      why: "Inelastic demand lets firms pass the tax on.", say: ["Demand for cigarettes is very price inelastic. Who bears most of a tobacco tax?"] }
  ]
});

S2Data.video("1e", {
  scenes: [
    { type: "title", title: "Market failure and externalities", sub: "When the market gets the quantity wrong.", mark: "MSC",
      say: ["Markets fail when they misallocate resources. Externalities are the most common reason."] },
    { type: "equation", title: "Private plus external", rows: [["Social cost = private cost + external cost"], [{ t: "Optimum: MSC = MSB", k: 1, s: 1 }]],
      say: ["An externality is a cost or benefit to a third party that isn't in the price. Social cost adds the external cost to the private cost.", "Society's best output is where marginal social cost equals marginal social benefit."] },
    { type: "graph", title: "Negative production externality", x: "Quantity", y: "Costs and benefits",
      lines: [line([0.08, 0.9], [0.86, 0.12], { s: 0, label: "MPB = MSB" }), line([0.08, 0.12], [0.86, 0.75], { s: 0, label: "MPC" }), line([0.08, 0.3], [0.7, 0.92], { s: 1, label: "MSC" })],
      marks: [{ x: 0.52, y: 0.47, t: "market Q", s: 1, anchor: "start", dx: 18, dy: 10 }, { x: 0.39, y: 0.6, t: "optimum Q*", s: 2, anchor: "end", dx: -30, dy: 10 }],
      say: ["A factory only counts its private costs, so it produces where marginal private cost meets demand.",
            "But pollution adds an external cost, so the true social cost curve lies above.",
            "The optimum is lower. The market over-produces, and the triangle between the curves is the welfare loss."] },
    { type: "compare", title: "Four types", h: ["Example", "Result"],
      rows: [["Negative production", "Pollution", "Over-production"], ["Negative consumption", "Passive smoking", "Over-consumption"], ["Positive production", "Staff training", "Under-production"], ["Positive consumption", "Vaccines, education", "Under-consumption"]],
      say: ["Negative production externalities, like pollution, lead to over-production.", "Negative consumption externalities, like passive smoking, lead to over-consumption.", "Positive production externalities, like training workers who later move firms, mean too little is produced.", "Positive consumption externalities, like vaccines, mean too little is consumed."] },
    { type: "quiz", q: "With a positive consumption externality, the free market…", o: ["Over-consumes", "Under-consumes", "Reaches the optimum", "Charges too little tax"], a: 1,
      why: "MSB is above MPB, so the optimum is higher.", say: ["With a positive consumption externality, what does the free market do?"] }
  ]
});

S2Data.video("1f", {
  scenes: [
    { type: "title", title: "Public goods and information gaps", sub: "Missing markets and hidden knowledge.", mark: "?",
      say: ["Some goods won't be provided by markets at all, and some markets fail because one side knows more than the other."] },
    { type: "compare", title: "Public versus private goods", h: ["Excludable?", "Rival?"],
      rows: [["Private (a sandwich)", "Yes", "Yes"], ["Public (street lights)", "No", "No"], ["Quasi-public (a road)", "Partly", "When busy"]],
      say: ["A private good is excludable and rival: if I eat the sandwich, you can't.", "A public good is neither. No one can be stopped from enjoying a street light, and my use doesn't reduce yours.", "Some goods, like roads, are in between."] },
    { type: "flow", title: "The free-rider problem", nodes: ["Can't exclude", "People won't pay", "No profit", "Missing market"],
      say: ["If you can't stop people benefiting,", "they'll wait for someone else to pay.", "Firms can't make a profit,", "so the good isn't provided at all. That's a missing market."] },
    { type: "points", title: "Information gaps", items: ["Used cars: the seller knows more", "Merit goods under-valued", "Moral hazard: taking risks when insured", "Adverse selection: risky people insure"],
      say: ["When information is asymmetric, one side knows more. A car seller knows its faults; the buyer doesn't.", "People under-value merit goods like education because they don't see the long-term benefits.", "Moral hazard is taking more risks because someone else bears the cost.", "Adverse selection means the riskiest people are the keenest to buy insurance."] },
    { type: "quiz", q: "Why is national defence a public good?", o: ["The government pays for it", "It's non-excludable and non-rival", "It's expensive", "It's a merit good"], a: 1,
      why: "Who provides it doesn't matter; the two characteristics do.", say: ["Why is national defence classed as a public good?"] }
  ]
});

S2Data.video("1g", {
  scenes: [
    { type: "title", title: "Government intervention", sub: "Fixing market failure, and when it backfires.", mark: "gov",
      say: ["Governments have many tools to correct market failure. But intervention can make things worse."] },
    { type: "graph", title: "A maximum price", x: "Quantity", y: "Price",
      lines: [Object.assign({}, D, { s: 0 }), Object.assign({}, S, { s: 0 }), line([0.05, 0.33], [0.95, 0.33], { dash: true, s: 1, label: "Pmax" })],
      marks: [{ x: 0.29, y: 0.33, t: "Qs", s: 2, dy: 40 }, { x: 0.65, y: 0.33, t: "Qd", s: 2, dy: 40 }],
      say: ["A maximum price only bites if it's set below equilibrium.",
            "Here, rent is capped below the market level.",
            "Quantity demanded is far above quantity supplied. The gap is a shortage, which leads to queues and black markets."] },
    { type: "compare", title: "The toolkit", h: ["Fixes", "Risk"],
      rows: [["Indirect tax", "Negative externalities", "Hard to value harm"], ["Subsidy", "Merit goods", "Cost to taxpayers"], ["Tradable permits", "Pollution", "Cap set wrongly"], ["Regulation", "Harmful activities", "Enforcement cost"]],
      say: ["Taxes push the cost of harmful goods up, though it's hard to know the true external cost.", "Subsidies encourage merit goods, but they cost money.", "Tradable permits cap pollution and let firms trade, but the cap has to be right.", "Regulation sets laws and limits, but it needs enforcing."] },
    { type: "points", title: "Government failure", items: ["Distorted price signals", "Unintended consequences", "High administrative costs", "Poor information"],
      say: ["Government failure means intervention causes a net welfare loss. Subsidies can keep inefficient firms going.", "Policies can backfire, like taxes causing smuggling.", "Running schemes can be expensive.", "And governments rarely have perfect information."] },
    { type: "quiz", q: "A minimum price set above equilibrium creates…", o: ["A shortage", "Excess supply", "No change", "A black market for buyers"], a: 1,
      why: "Sellers want to sell more than buyers want at that price.", say: ["A minimum price is set above equilibrium. What does it create?"] }
  ]
});

S2Data.video("2a", {
  scenes: [
    { type: "title", title: "Measuring the economy", sub: "Growth, inflation, unemployment and trade.", mark: "GDP",
      say: ["Governments track four big numbers: growth, inflation, unemployment and the balance of payments."] },
    { type: "points", title: "Economic growth", items: ["GDP: value of output in a year", "Real = adjusted for inflation", "Per capita and PPP to compare countries"],
      say: ["GDP is the total value of goods and services produced in a year.", "Real GDP strips out inflation, so it shows the change in actual output.", "To compare living standards, divide by population and adjust for price levels with purchasing power parity."] },
    { type: "calc", title: "A price index", q: "A basket costs £250 in the base year and £265 now.",
      lines: ["Index = 265 ÷ 250 × 100", "= 106", "Inflation = 6%"],
      say: ["The CPI prices a weighted basket of goods. Divide the new cost by the base cost and multiply by a hundred.", "The index is one hundred and six.", "So prices have risen six percent."] },
    { type: "compare", title: "Types of unemployment", h: ["Cause"],
      rows: [["Frictional", "Between jobs"], ["Structural", "Industries decline; skills mismatch"], ["Cyclical", "Too little demand in a downturn"], ["Seasonal", "Time of year"]],
      say: ["Frictional unemployment is short-term, while people search for jobs.", "Structural unemployment comes from declining industries and a mismatch of skills.", "Cyclical unemployment happens in recessions, when demand falls.", "Seasonal unemployment follows the calendar, like tourism."] },
    { type: "points", title: "The current account", items: ["Trade in goods", "Trade in services", "Primary income", "Secondary income"],
      say: ["The current account records trade in goods,", "trade in services,", "income from investments abroad,", "and transfers like money sent home by migrants. The UK usually runs a deficit."] },
    { type: "quiz", q: "Labour force 34m; 1.7m unemployed. The unemployment rate is…", o: ["2%", "5%", "1.7%", "20%"], a: 1,
      why: "1.7 ÷ 34 × 100 = 5%.", say: ["The labour force is thirty four million and one point seven million are unemployed. What's the unemployment rate?"] }
  ]
});

S2Data.video("2b", {
  scenes: [
    { type: "title", title: "Aggregate demand", sub: "Total spending in the economy.", mark: "AD",
      say: ["Aggregate demand is total planned spending on an economy's output."] },
    { type: "equation", title: "The components", rows: [["AD = C + I + G + (X − M)"]], note: "Consumption is about 60% of UK GDP", noteStep: 1,
      say: ["It adds consumption, investment, government spending and net exports. Imports are subtracted because that money goes abroad.", "Consumption is by far the biggest part, about sixty percent in the UK."] },
    { type: "graph", title: "Shifting AD", x: "Real GDP", y: "Price level",
      lines: [line([0.1, 0.85], [0.75, 0.15], { s: 0, label: "AD" }), line([0.3, 0.85], [0.95, 0.15], { dash: true, s: 1, label: "AD₂" })],
      say: ["AD slopes down: a lower price level raises real wealth and makes exports more competitive.", "Any rise in C, I, G or net exports shifts the whole curve to the right."] },
    { type: "compare", title: "What drives each part?", h: ["Main influences"],
      rows: [["Consumption", "Income, interest rates, confidence, wealth"], ["Investment", "Interest rates, confidence, the accelerator"], ["Government", "Fiscal choices, the trade cycle"], ["Net exports", "Exchange rate, world incomes"]],
      say: ["Consumption depends on income, interest rates, confidence and wealth, such as house prices.", "Investment depends on interest rates, business confidence and the accelerator: how fast demand is growing.", "Government spending depends on policy and the state of the economy.", "Net exports depend on the exchange rate and incomes abroad."] },
    { type: "quiz", q: "Which would shift AD to the right?", o: ["A rise in interest rates", "An appreciation of the pound", "A rise in consumer confidence", "A rise in income tax"], a: 2,
      why: "Households spend more.", say: ["Which of these would shift aggregate demand to the right?"] }
  ]
});

S2Data.video("2c", {
  scenes: [
    { type: "title", title: "Aggregate supply", sub: "What the economy can produce.", mark: "AS",
      say: ["Aggregate supply is total output firms will produce. We split it into the short run and the long run."] },
    { type: "graph", title: "A supply shock", x: "Real GDP", y: "Price level",
      lines: [line([0.1, 0.85], [0.8, 0.15], { s: 0, label: "AD" }), line([0.1, 0.15], [0.8, 0.85], { s: 0, label: "SRAS" }), line([0.0, 0.3], [0.62, 0.92], { dash: true, s: 1, label: "SRAS₂" })],
      marks: [{ x: 0.325, y: 0.625, t: "prices up, output down", s: 2, anchor: "end", dx: -18, dy: -6 }],
      say: ["Short-run aggregate supply slopes up and shifts when costs change: wages, energy, raw materials or the exchange rate.",
            "A sudden rise in energy prices shifts SRAS left.",
            "The price level rises and real output falls: cost-push inflation, and a risk of stagflation."] },
    { type: "graph", title: "Keynesian LRAS", x: "Real GDP", y: "Price level",
      lines: [{ pts: [[0.05, 0.2], [0.45, 0.2], [0.65, 0.35], [0.75, 0.6], [0.76, 0.95]], s: 0, label: "LRAS" }],
      marks: [{ x: 0.25, y: 0.2, t: "spare capacity", s: 1, dy: -22 }, { x: 0.76, y: 0.8, t: "full capacity", s: 2, anchor: "end", dx: -18 }],
      say: ["Keynesians draw long-run supply with three sections.", "When there's lots of spare capacity, more demand raises output without raising prices.", "At full capacity it's vertical: more demand only raises prices. Classical economists say LRAS is always vertical."] },
    { type: "points", title: "Shifting LRAS", items: ["Technology", "Education and skills", "Size of the labour force", "Infrastructure and capital"],
      say: ["Long-run supply shifts right when productive capacity grows: better technology,", "a better-educated workforce,", "more workers, for example through migration,", "and more or better infrastructure and capital."] },
    { type: "quiz", q: "Which shifts LRAS to the right?", o: ["A rise in consumer spending", "Better education and training", "A cut in interest rates", "Higher benefits"], a: 1,
      why: "It improves the quality of labour.", say: ["Which of these shifts long-run aggregate supply to the right?"] }
  ]
});

S2Data.video("2d", {
  scenes: [
    { type: "title", title: "National income and the multiplier", sub: "How spending ripples through the economy.", mark: "k",
      say: ["Money flows round the economy in a circle. Injections speed it up, and withdrawals slow it down."] },
    { type: "compare", title: "Injections and withdrawals", h: ["Injections", "Withdrawals"],
      rows: [["Firms", "Investment", "Savings"], ["Government", "Government spending", "Taxes"], ["Abroad", "Exports", "Imports"]],
      say: ["Investment injects spending; saving withdraws it.", "Government spending is an injection; taxes are a withdrawal.", "Exports bring money in; imports send it out. If injections exceed withdrawals, national income rises."] },
    { type: "flow", title: "The multiplier", nodes: ["£10bn new spending", "Becomes others' income", "They spend part of it", "Total rise > £10bn"],
      say: ["Suppose the government spends ten billion pounds on new hospitals.", "That money becomes builders' wages and firms' revenue.", "They spend part of it, which becomes someone else's income.", "Round by round, national income rises by more than the original ten billion."] },
    { type: "calc", title: "Calculating the multiplier", q: "MPS = 0.1, MPT = 0.2, MPM = 0.2. Investment rises £10bn.",
      lines: ["MPW = 0.1 + 0.2 + 0.2 = 0.5", "k = 1 ÷ 0.5 = 2", "ΔY = 2 × 10 = £20bn"],
      say: ["Add up the marginal propensities to withdraw: nought point five.", "The multiplier is one over that, which is two.", "So national income rises by twenty billion pounds. The UK's multiplier is small because we import so much."] },
    { type: "quiz", q: "MPC is 0.8. What is the multiplier?", o: ["0.8", "1.25", "5", "8"], a: 2,
      why: "1 ÷ (1 − 0.8) = 5.", say: ["The marginal propensity to consume is nought point eight. What's the multiplier?"] }
  ]
});

S2Data.video("2e", {
  scenes: [
    { type: "title", title: "Economic growth", sub: "Actual, potential, and the trade cycle.", mark: "g",
      say: ["Growth means more real output. But there's a difference between using what we have and expanding what we can make."] },
    { type: "compare", title: "Two kinds of growth", h: ["Meaning", "Diagram"],
      rows: [["Actual", "Real GDP rises", "Move towards the PPF / AD right"], ["Potential", "Capacity rises", "PPF out / LRAS right"]],
      say: ["Actual growth is a rise in real GDP, often by using spare capacity.", "Potential growth is a rise in what the economy could produce, shown by LRAS shifting right."] },
    { type: "graph", title: "The trade cycle", x: "Time", y: "Real GDP",
      lines: [line([0.05, 0.2], [0.95, 0.75], { dash: true, s: 0, label: "trend" }), { pts: [[0.05, 0.2], [0.2, 0.42], [0.35, 0.3], [0.5, 0.36], [0.65, 0.62], [0.8, 0.52], [0.95, 0.78]], s: 1 }],
      marks: [{ x: 0.2, y: 0.42, t: "boom", s: 2 }, { x: 0.35, y: 0.3, t: "recession", s: 2, dy: 40 }],
      say: ["Over time, the economy's potential grows along a trend.", "Actual output swings around it.", "In a boom, output is above trend and inflation rises: a positive output gap. In a recession, output falls for two quarters and unemployment rises: a negative output gap."] },
    { type: "compare", title: "Is growth always good?", h: ["Benefits", "Costs"],
      rows: [["Living standards", "Higher incomes", "Inequality may widen"], ["Government", "More tax revenue", "—"], ["Environment", "—", "Pollution, resource use"], ["Prices and trade", "Jobs", "Inflation, more imports"]],
      say: ["Growth raises incomes, though the gains may not be shared equally.", "It brings in more tax for public services.", "But it can damage the environment.", "And fast growth can bring inflation and suck in imports."] },
    { type: "quiz", q: "Real GDP rises from £400bn to £412bn. Growth is…", o: ["12%", "3%", "1.2%", "4%"], a: 1,
      why: "12 ÷ 400 × 100 = 3%.", say: ["Real GDP rises from four hundred to four hundred and twelve billion pounds. What's the growth rate?"] }
  ]
});

S2Data.video("2f", {
  scenes: [
    { type: "title", title: "Demand-side policies", sub: "Monetary and fiscal policy.", mark: "2%",
      say: ["The main macro objectives are growth, low unemployment, two percent inflation and a sustainable current account. Demand-side policy targets AD."] },
    { type: "flow", title: "Cutting Bank Rate", nodes: ["Bank Rate cut", "Cheaper borrowing", "More C and I", "Weaker pound", "AD rises"], col: true,
      say: ["The Bank of England's Monetary Policy Committee cuts Bank Rate.", "Banks cut their loan and mortgage rates.", "Households and firms borrow and spend more, and save less.", "The pound tends to weaken, making exports cheaper.", "So aggregate demand rises."] },
    { type: "points", title: "Quantitative easing", items: ["Bank creates money to buy bonds", "Bond prices up, long-term rates down", "Used in 2009 and 2020"],
      say: ["When rates are near zero, the Bank can use quantitative easing: creating new money to buy government bonds.", "That pushes bond prices up and long-term interest rates down.", "It was used heavily after the financial crisis and during Covid."] },
    { type: "compare", title: "Fiscal policy", h: ["Expansionary", "Contractionary"],
      rows: [["Spending", "Raise G", "Cut G"], ["Taxes", "Cut taxes", "Raise taxes"], ["Effect", "AD right", "AD left"]],
      say: ["Fiscal policy uses government spending and taxes.", "Expansionary policy raises spending or cuts taxes; contractionary does the reverse.", "Automatic stabilisers, like unemployment benefits, already push AD in the right direction without any decision."] },
    { type: "compare", title: "Keynesian versus classical", h: ["View"],
      rows: [["Keynesian", "Use fiscal policy to fill negative output gaps"], ["Classical", "Markets self-correct; borrowing crowds out"]],
      say: ["Keynesians argue governments should spend to fill a recession, because the multiplier boosts its effect.", "Classical economists argue markets correct themselves, and government borrowing can crowd out private investment."] },
    { type: "quiz", q: "Inflation is 5% and rising. The MPC is most likely to…", o: ["Cut Bank Rate", "Raise Bank Rate", "Start QE", "Cut income tax"], a: 1,
      why: "Higher rates reduce borrowing and spending.", say: ["Inflation is five percent and rising. What will the Monetary Policy Committee probably do?"] }
  ]
});

S2Data.video("2g", {
  scenes: [
    { type: "title", title: "Supply-side policies and trade-offs", sub: "Raising capacity, and why goals clash.", mark: "LRAS",
      say: ["Supply-side policies try to raise the economy's capacity. And they matter because macro goals often conflict."] },
    { type: "compare", title: "Two approaches", h: ["Examples"],
      rows: [["Market-based", "Tax cuts, deregulation, privatisation, weaker unions"], ["Interventionist", "Education, training, infrastructure, R&D grants"]],
      say: ["Market-based policies improve incentives and competition: lower taxes, fewer regulations and selling state firms.", "Interventionist policies have the state invest directly in skills, transport and research."] },
    { type: "graph", title: "Growth without inflation", x: "Real GDP", y: "Price level",
      lines: [line([0.1, 0.85], [0.85, 0.15], { s: 0, label: "AD" }), line([0.45, 0.05], [0.45, 0.95], { s: 0, label: "LRAS" }), line([0.68, 0.05], [0.68, 0.95], { dash: true, s: 1, label: "LRAS₂" })],
      say: ["With the economy at full capacity, more demand just causes inflation.", "Supply-side policy shifts LRAS right, so output rises and the price level falls."] },
    { type: "compare", title: "Policy conflicts", h: ["Why they clash"],
      rows: [["Inflation vs unemployment", "Tight labour pushes up wages"], ["Growth vs current account", "Higher incomes buy more imports"], ["Growth vs environment", "More output, more pollution"]],
      say: ["Low unemployment can push up wages and prices, as the Phillips curve shows.", "Fast growth raises incomes, which suck in imports.", "And more production can harm the environment."] },
    { type: "quiz", q: "A key weakness of spending on education as a supply-side policy is…", o: ["It shifts AD left", "Long time lags", "It always causes inflation", "It has no cost"], a: 1,
      why: "Skills take years to build.", say: ["What's a key weakness of using education spending as a supply-side policy?"] }
  ]
});
})();
