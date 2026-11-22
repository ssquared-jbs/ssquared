/* Video explainers — A-level Economics Themes 3 and 4. */
(function () {
const line = (a, b, o) => Object.assign({ pts: [a, b], straight: true }, o || {});

S2Data.video("3a", {
  scenes: [
    { type: "title", title: "Business growth and objectives", sub: "How firms grow, and what they aim for.", mark: "MC = MR",
      say: ["Firms come in all sizes. This video covers how they grow, and what they're actually trying to achieve."] },
    { type: "compare", title: "Ways to grow", h: ["Meaning", "Example"],
      rows: [["Organic", "Grow internally", "New stores"], ["Horizontal", "Same stage, same industry", "Two banks merge"], ["Vertical", "Different stage, same chain", "Car maker buys supplier"], ["Conglomerate", "Unrelated industries", "Virgin Group"]],
      say: ["Organic growth means expanding from within, like opening new shops.", "Horizontal integration joins firms at the same stage, which raises market share.", "Vertical integration joins different stages: backward towards suppliers, forward towards customers.", "Conglomerate integration joins unrelated firms, which spreads risk."] },
    { type: "graph", title: "Three objectives on one diagram", x: "Output", y: "Costs and revenue",
      lines: [line([0.05, 0.9], [0.9, 0.05], { s: 0, label: "AR" }), line([0.05, 0.9], [0.5, 0], { s: 0 }), { pts: [[0.1, 0.55], [0.3, 0.32], [0.55, 0.4], [0.85, 0.75]], s: 0, label: "AC" }],
      marks: [{ x: 0.22, y: 0.15, t: "MR", s: 0, dot: false, dy: 0 }, { x: 0.5, y: 0, t: "MR = 0: revenue max", s: 1, anchor: "start", dx: 16, dy: -16 }, { x: 0.55, y: 0.4, t: "AC = AR: sales max", s: 2, anchor: "start", dx: 18, dy: -6 }],
      say: ["Profit maximisation is where marginal cost equals marginal revenue: the textbook objective.",
            "Revenue maximisation is further along, where marginal revenue is zero.",
            "Sales maximisation goes furthest, to where average cost meets average revenue and only normal profit is made."] },
    { type: "points", title: "Why not just maximise profit?", items: ["Principal–agent problem", "Managers' pay linked to sales", "Satisficing between stakeholders", "Social and environmental goals"],
      say: ["Shareholders own the firm, but managers run it, and their goals can differ.", "If managers' bonuses depend on sales, they'll push sales.", "Many firms satisfice: making enough profit while keeping workers, customers and the community happy.", "Not-for-profits put social goals first."] },
    { type: "quiz", q: "A brewer buys a chain of pubs. This is…", o: ["Horizontal integration", "Backward vertical integration", "Forward vertical integration", "Conglomerate integration"], a: 2,
      why: "It moves towards the customer.", say: ["A brewery buys a chain of pubs. What kind of integration is that?"] }
  ]
});

S2Data.video("3b", {
  scenes: [
    { type: "title", title: "Revenue, costs and profit", sub: "The building blocks of every firm diagram.", mark: "TR − TC",
      say: ["Every theory of the firm rests on revenue and costs. Get these right and the market structure diagrams follow."] },
    { type: "equation", title: "Revenue", rows: [["TR = P × Q", "·", "AR = TR ÷ Q = P"], [{ t: "MR = ΔTR ÷ ΔQ", s: 1 }]],
      say: ["Total revenue is price times quantity, and average revenue is just the price.", "Marginal revenue is the extra revenue from selling one more unit."] },
    { type: "graph", title: "Short-run costs", x: "Output", y: "Cost per unit",
      lines: [{ pts: [[0.08, 0.8], [0.3, 0.4], [0.5, 0.33], [0.75, 0.45], [0.9, 0.65]], s: 0, label: "AC" }, { pts: [[0.1, 0.5], [0.25, 0.25], [0.5, 0.33], [0.7, 0.7], [0.78, 0.92]], s: 1, label: "MC" }],
      marks: [{ x: 0.5, y: 0.33, t: "MC cuts AC at its minimum", s: 2, anchor: "start", dx: 18, dy: 40 }],
      say: ["Average cost is U-shaped in the short run, because fixed costs are spread and then diminishing returns set in.",
            "Marginal cost falls and then rises steeply, because adding workers to fixed machinery eventually adds less output each time.",
            "Marginal cost always cuts average cost at its lowest point."] },
    { type: "compare", title: "Economies of scale", h: ["Example"],
      rows: [["Technical", "Bigger, more efficient machines"], ["Purchasing", "Bulk-buying discounts"], ["Financial", "Cheaper loans"], ["Diseconomies", "Poor communication, low morale"]],
      say: ["In the long run, firms can grow. Technical economies come from larger machinery.", "Purchasing economies come from bulk buying.", "Financial economies come from cheaper borrowing.", "But very large firms suffer diseconomies of scale, like poor communication, so long-run average cost eventually rises."] },
    { type: "compare", title: "Types of profit", h: ["Condition"],
      rows: [["Normal profit", "TR = TC"], ["Supernormal", "TR > TC"], ["Shut down (short run)", "AR < AVC"]],
      say: ["Normal profit is the minimum to keep the firm in business. Economists count opportunity cost as a cost.", "Anything above that is supernormal profit.", "In the short run, a firm keeps going as long as price covers average variable cost."] },
    { type: "quiz", q: "When MC is below AC, AC is…", o: ["Rising", "Falling", "At its minimum", "Zero"], a: 1,
      why: "A lower extra unit pulls the average down.", say: ["When marginal cost is below average cost, what's happening to average cost?"] }
  ]
});

S2Data.video("3c", {
  scenes: [
    { type: "title", title: "Efficiency and perfect competition", sub: "The benchmark market.", mark: "P = MC",
      say: ["Economists judge markets by efficiency. Perfect competition is the benchmark we compare everything else to."] },
    { type: "compare", title: "Four kinds of efficiency", h: ["Meaning"],
      rows: [["Allocative", "P = MC"], ["Productive", "Lowest point of AC"], ["Dynamic", "Innovation over time"], ["X-inefficiency", "Costs above the minimum possible"]],
      say: ["Allocative efficiency is price equals marginal cost: we make what people value.", "Productive efficiency is producing at the bottom of average cost.", "Dynamic efficiency is improving over time through research and investment.", "X-inefficiency is wasted cost from slack management."] },
    { type: "points", title: "Assumptions", items: ["Many buyers and sellers", "Identical products", "Perfect information", "Free entry and exit"],
      say: ["Perfect competition assumes huge numbers of firms,", "selling identical products,", "with everyone knowing all prices,", "and no barriers to joining or leaving. So every firm is a price taker."] },
    { type: "graph", title: "Long-run equilibrium", x: "Output (firm)", y: "Cost and price",
      lines: [{ pts: [[0.1, 0.8], [0.3, 0.48], [0.5, 0.4], [0.7, 0.5], [0.9, 0.78]], s: 0, label: "AC" }, { pts: [[0.15, 0.55], [0.3, 0.3], [0.5, 0.4], [0.65, 0.7], [0.72, 0.92]], s: 0, label: "MC" }, line([0.05, 0.4], [0.95, 0.4], { s: 1, label: "AR = MR" })],
      marks: [{ x: 0.5, y: 0.4, t: "P = MC = min AC", s: 2, dy: 44 }],
      say: ["The firm's average and marginal cost curves.", "It faces a horizontal demand curve at the market price.",
            "In the long run, entry has competed profits down so price touches the bottom of average cost. It's allocatively and productively efficient, making only normal profit."] },
    { type: "flow", title: "Short run to long run", nodes: ["Supernormal profit", "New firms enter", "Supply shifts right", "Price falls to min AC"],
      say: ["If firms are making supernormal profit,", "new firms see it and enter,", "market supply increases,", "and price falls until only normal profit is left. The weakness: no spare profit to fund innovation."] },
    { type: "quiz", q: "In long-run perfect competition, firms make…", o: ["Supernormal profit", "Normal profit", "Losses", "Monopoly profit"], a: 1,
      why: "Free entry removes supernormal profit.", say: ["In the long run under perfect competition, what kind of profit do firms make?"] }
  ]
});

S2Data.video("3d", {
  scenes: [
    { type: "title", title: "Monopolistic competition and oligopoly", sub: "Brands, rivals and strategy.", mark: "CR₅",
      say: ["Most real markets sit between perfect competition and monopoly. Two important cases are monopolistic competition and oligopoly."] },
    { type: "compare", title: "Comparing the two", h: ["Monopolistic competition", "Oligopoly"],
      rows: [["Firms", "Many", "A few dominate"], ["Products", "Differentiated", "Differentiated or identical"], ["Barriers", "Low", "High"], ["Long-run profit", "Normal", "Can be supernormal"]],
      say: ["Monopolistic competition has many firms, like restaurants; oligopoly has a few big ones, like supermarkets.", "In both, products are usually differentiated by brand or quality.", "Barriers are low in monopolistic competition, but high in oligopoly.", "So monopolistic competitors end up with normal profit, while oligopolists can keep supernormal profit."] },
    { type: "calc", title: "Concentration ratio", q: "Shares: 28%, 22%, 17%, 12%, others 21%.",
      lines: ["3-firm ratio = 28 + 22 + 17", "= 67%"],
      say: ["The n-firm concentration ratio adds up the market shares of the biggest n firms.", "Here the top three hold sixty-seven percent. That's an oligopoly."] },
    { type: "compare", title: "The prisoner's dilemma", h: ["B prices high", "B prices low"],
      rows: [["A prices high", "£10m, £10m", "£4m, £14m"], ["A prices low", "£14m, £4m", "£6m, £6m"]],
      say: ["Oligopolists are interdependent, so game theory helps. If both keep prices high, each makes ten million.", "But whatever B does, A earns more by cutting its price. B thinks the same, so both end up on six million. That's why cartels break down."] },
    { type: "points", title: "How oligopolists compete", items: ["Collusion: overt cartels or tacit price leadership", "Predatory and limit pricing", "Non-price competition: ads, loyalty cards"],
      say: ["They may collude, either openly in a cartel, which is illegal, or tacitly by following a price leader.", "They may price aggressively to drive rivals out or keep new ones away.", "Mostly, they compete on brands, advertising and loyalty schemes to avoid price wars."] },
    { type: "quiz", q: "Why are oligopoly prices often stable?", o: ["Firms are price takers", "Rivals match cuts but not rises", "Government fixes them", "Demand is perfectly elastic"], a: 1,
      why: "Changing price gains little, so firms compete in other ways.", say: ["Why do prices in oligopolies tend to stay stable?"] }
  ]
});

S2Data.video("3e", {
  scenes: [
    { type: "title", title: "Monopoly, monopsony and contestability", sub: "Market power on both sides.", mark: "25%",
      say: ["A monopoly is a single seller. In the UK, a firm with more than a quarter of the market has monopoly power."] },
    { type: "graph", title: "The monopoly diagram", x: "Output", y: "Price and cost",
      lines: [line([0.05, 0.9], [0.9, 0.05], { s: 0, label: "AR" }), line([0.05, 0.9], [0.5, 0], { s: 0 }), line([0.05, 0.3], [0.9, 0.3], { s: 0, label: "MC = AC" })],
      marks: [{ x: 0.45, y: 0.1, t: "MR", s: 0, dot: false, anchor: "start", dx: 16, dy: 0 }, { x: 0.35, y: 0.3, t: "MC = MR", s: 1, anchor: "end", dx: -16, dy: 40 }, { x: 0.35, y: 0.6, t: "monopoly price", s: 2, anchor: "start", dx: 18, dy: -14 }],
      say: ["Here's a simple monopoly with constant costs. Marginal revenue falls twice as fast as average revenue.",
            "The firm makes the most profit where marginal cost equals marginal revenue.",
            "It charges the highest price buyers will pay for that output, read from the AR curve. Price is well above cost: supernormal profit, and allocative inefficiency."] },
    { type: "compare", title: "Is monopoly bad?", h: ["Costs", "Benefits"],
      rows: [["Prices", "Higher prices, less output", "Scale economies may cut costs"], ["Efficiency", "P > MC, X-inefficiency", "Profit funds R&D"]],
      say: ["Monopolies tend to charge more and produce less than competitive markets.", "They're inefficient, but their profit can fund research, giving dynamic efficiency."] },
    { type: "points", title: "Price discrimination", items: ["Monopoly power", "Separate markets with different PEDs", "No resale between them"],
      say: ["Price discrimination is charging different prices for the same product. The firm needs market power,", "groups with different price elasticities, like peak and off-peak rail travellers,", "and a way to stop cheap buyers reselling to the others."] },
    { type: "compare", title: "Monopsony and contestability", h: ["Meaning"],
      rows: [["Monopsony", "A dominant buyer pushes down prices or wages"], ["Contestable market", "Low sunk costs; threat of entry keeps prices down"]],
      say: ["A monopsony is a dominant buyer, like a supermarket buying milk. It can squeeze suppliers.", "A contestable market has low barriers and low sunk costs, so even a monopoly must keep prices low or face hit-and-run entry."] },
    { type: "quiz", q: "A monopolist sets output where…", o: ["P = MC", "MC = MR", "AR = AC", "MR = 0"], a: 1,
      why: "Then it reads the price from AR.", say: ["Where does a profit-maximising monopolist set its output?"] }
  ]
});

S2Data.video("3f", {
  scenes: [
    { type: "title", title: "The labour market", sub: "Wages are prices too.", mark: "MRP",
      say: ["The labour market works like any other market: wages are set by demand and supply."] },
    { type: "equation", title: "Demand for labour", rows: [["MRP = MP × MR"]], note: "Hire while MRP ≥ wage · labour is a derived demand", noteStep: 1,
      say: ["A worker's value to a firm is their marginal revenue product: extra output times the revenue from each unit.", "Firms hire until the wage equals MRP. And it's derived demand: no one wants builders unless people want houses."] },
    { type: "graph", title: "Wage determination", x: "Number of workers", y: "Wage",
      lines: [line([0.08, 0.9], [0.86, 0.12], { s: 0, label: "D (MRP)" }), line([0.08, 0.12], [0.86, 0.9], { s: 0, label: "S" }), line([0.2, 0.9], [0.98, 0.12], { dash: true, s: 1, label: "D₂" })],
      say: ["The wage is set where labour demand meets labour supply.", "If productivity or demand for the product rises, labour demand shifts right, raising wages and employment."] },
    { type: "compare", title: "What shifts supply?", h: ["Effect"],
      rows: [["Wages elsewhere", "Higher → workers leave"], ["Non-monetary factors", "Better conditions → more workers"], ["Training needed", "Longer → fewer, less elastic"], ["Migration", "More workers"]],
      say: ["If other jobs pay more, workers move there.", "Pleasant conditions, flexible hours or job satisfaction attract more workers.", "Long training, like for doctors, means supply is small and inelastic.", "Migration increases the number of available workers."] },
    { type: "points", title: "Imperfect labour markets", items: ["Monopsony employers pay less", "Unions bargain for higher pay", "Immobility: skills and location"],
      say: ["A dominant employer can pay less and employ fewer people.", "Trade unions bargain collectively for higher wages. Against a monopsony, they can raise pay and jobs together.", "And workers may be stuck: unable to switch occupations without skills, or move because of housing costs."] },
    { type: "quiz", q: "A worker adds 12 units a day; each sells for £10. MRP is…", o: ["£12", "£22", "£120", "£1.20"], a: 2,
      why: "12 × £10 = £120.", say: ["A worker adds twelve units a day, and each sells for ten pounds. What's their marginal revenue product?"] }
  ]
});

S2Data.video("3g", {
  scenes: [
    { type: "title", title: "Government intervention in markets", sub: "Keeping competition working.", mark: "CMA",
      say: ["Governments step in to control monopolies, stop collusion and protect consumers, suppliers and workers."] },
    { type: "points", title: "Competition policy", items: ["CMA investigates mergers over 25%", "Fines cartels up to 10% of turnover", "Can block deals or demand sell-offs"],
      say: ["The Competition and Markets Authority investigates mergers that would give a firm more than a quarter of the market.", "It can fine cartels up to ten percent of their worldwide turnover.", "It can block mergers or approve them only if parts are sold off."] },
    { type: "calc", title: "Price capping", q: "RPI = 4%, X = 1.5. How much can prices rise?",
      lines: ["RPI − X = 4 − 1.5", "= 2.5%"],
      say: ["Regulators like Ofgem and Ofwat use RPI minus X: prices can rise by inflation minus an efficiency factor.", "So this firm can raise prices by two and a half percent. If it cuts costs faster, it keeps the extra profit."] },
    { type: "compare", title: "Promoting competition", h: ["How"],
      rows: [["Deregulation", "Remove barriers to entry"], ["Competitive tendering", "Firms bid for public contracts"], ["Privatisation", "Sell state firms"], ["Nationalisation", "Take firms into state ownership"]],
      say: ["Deregulation removes rules that keep new firms out.", "Competitive tendering makes firms compete for government contracts.", "Privatisation sells state firms to bring in the profit motive.", "Nationalisation does the reverse, often for natural monopolies."] },
    { type: "points", title: "Limits of regulation", items: ["Regulatory capture", "Asymmetric information", "Admin costs"],
      say: ["Regulators can get too close to the firms they oversee.", "Firms know their costs better than regulators, so caps may be too loose.", "And regulation itself is expensive to run."] },
    { type: "quiz", q: "Under RPI − X, a larger X means…", o: ["Prices can rise faster", "Bigger real price cuts are required", "More investment is allowed", "No regulation"], a: 1,
      why: "X is subtracted from inflation.", say: ["Under RPI minus X, what does a bigger X mean for the firm?"] }
  ]
});

S2Data.video("4a", {
  scenes: [
    { type: "title", title: "Globalisation and trade", sub: "Why countries specialise.", mark: "Ricardo",
      say: ["Globalisation is the growing integration of the world's economies. Trade is at the heart of it."] },
    { type: "points", title: "What drives globalisation?", items: ["Container shipping", "The internet and ICT", "Trade liberalisation", "Multinationals"],
      say: ["Container ships made transporting goods far cheaper.", "The internet made it easy to coordinate business across the world.", "Trade deals and the WTO cut tariffs.", "And multinational firms spread production across many countries."] },
    { type: "calc", title: "Comparative advantage", q: "Same resources: UK makes 20 cloth or 10 wine; Portugal makes 15 cloth or 15 wine.",
      lines: ["UK: 1 wine costs 2 cloth", "Portugal: 1 wine costs 1 cloth", "Portugal specialises in wine; UK in cloth"],
      say: ["Work out opportunity costs. For the UK, one unit of wine means giving up two of cloth.", "For Portugal, one unit of wine costs only one of cloth.", "So Portugal has the comparative advantage in wine and the UK in cloth. If each specialises and trades, world output rises."] },
    { type: "equation", title: "Terms of trade", rows: [["ToT = export price index ÷ import price index × 100"]], note: "A rise means exports buy more imports", noteStep: 1,
      say: ["The terms of trade compare export prices with import prices.", "If it rises, each unit of exports buys more imports: an improvement."] },
    { type: "compare", title: "Winners and losers", h: ["Gains", "Costs"],
      rows: [["Developed", "Cheap imports, big markets", "Lost manufacturing jobs"], ["Developing", "FDI, jobs, technology", "Exploitation, pollution"]],
      say: ["Rich countries gain cheaper goods and larger markets, but some industries lose out.", "Poorer countries gain investment and jobs, but risk exploitation and environmental damage."] },
    { type: "quiz", q: "Comparative advantage means producing a good at a lower…", o: ["Money price", "Opportunity cost", "Wage", "Tariff"], a: 1,
      why: "That's Ricardo's key insight.", say: ["Comparative advantage means producing at a lower what?"] }
  ]
});

S2Data.video("4b", {
  scenes: [
    { type: "title", title: "Trading blocs and protectionism", sub: "Free trade with friends, barriers for others.", mark: "WTO",
      say: ["Countries form trading blocs to trade freely with each other. They may also put up barriers against the rest of the world."] },
    { type: "flow", title: "Levels of integration", nodes: ["Free trade area", "Customs union", "Common market", "Monetary union"],
      say: ["A free trade area removes tariffs between members.", "A customs union adds a common external tariff.", "A common market adds free movement of labour and capital.", "A monetary union adds a single currency, like the euro."] },
    { type: "compare", title: "Creation or diversion?", h: ["What happens", "Efficiency"],
      rows: [["Trade creation", "Buy from a cheaper member", "Rises"], ["Trade diversion", "Switch from a cheap outsider to a dearer member", "Falls"]],
      say: ["Trade creation happens when removing tariffs lets you buy from a lower-cost member country.", "Trade diversion happens when the common tariff makes you switch from a cheap outsider to a dearer member."] },
    { type: "graph", title: "A tariff", x: "Quantity", y: "Price",
      lines: [line([0.08, 0.9], [0.86, 0.12], { s: 0, label: "D" }), line([0.08, 0.12], [0.86, 0.9], { s: 0, label: "S" }), line([0.05, 0.25], [0.95, 0.25], { s: 0, label: "Pw" }), line([0.05, 0.38], [0.95, 0.38], { dash: true, s: 1, label: "Pw + t" })],
      marks: [{ x: 0.34, y: 0.38, t: "imports shrink", s: 2, anchor: "start", dx: 18, dy: -16 }],
      say: ["Without trade barriers, the domestic price is the world price, and imports fill the gap between demand and domestic supply.",
            "A tariff raises the price by the tariff.",
            "Domestic producers supply more, consumers buy less, and imports shrink. The government gains revenue, but there are two welfare loss triangles."] },
    { type: "points", title: "Why protect?", items: ["Infant industries", "Jobs and national security", "Anti-dumping"],
      say: ["New industries may need time to grow.", "Governments want to protect jobs and strategic industries.", "And they may respond to dumping, where goods are sold below cost. The risk is retaliation and trade wars."] },
    { type: "quiz", q: "A common external tariff is a feature of…", o: ["A free trade area", "A customs union", "The WTO", "A quota"], a: 1,
      why: "Free trade areas let each member set its own tariffs.", say: ["A common external tariff is the defining feature of which type of trading bloc?"] }
  ]
});

S2Data.video("4c", {
  scenes: [
    { type: "title", title: "Exchange rates and the balance of payments", sub: "The price of a currency.", mark: "£/$",
      say: ["The exchange rate is the price of one currency in terms of another. It affects trade, inflation and growth."] },
    { type: "compare", title: "Exchange rate systems", h: ["How it's set"],
      rows: [["Floating", "Supply and demand (the pound)"], ["Fixed", "Central bank pegs it with reserves"], ["Managed", "Mostly market, some intervention"]],
      say: ["A floating rate is set by the market, like the pound.", "A fixed rate is held by the central bank buying and selling currency.", "A managed float is a mix of the two."] },
    { type: "points", title: "What moves the pound?", items: ["Interest rates (hot money)", "Inflation", "Speculation", "FDI and the current account"],
      say: ["Higher UK interest rates attract savers, so demand for pounds rises.", "High inflation makes UK goods less attractive, weakening the pound.", "Speculators buy if they expect it to rise.", "And investment flows and trade affect demand too."] },
    { type: "flow", title: "A depreciation", nodes: ["Pound falls", "Exports cheaper, imports dearer", "Net exports rise", "AD and inflation up"],
      say: ["Suppose the pound depreciates.", "UK goods become cheaper abroad, and imports become dearer.", "If demand is elastic enough, net exports rise. That's the Marshall-Lerner condition. In the short run it can get worse first: the J-curve.", "Aggregate demand rises, and so does inflation from dearer imports."] },
    { type: "calc", title: "Converting prices", q: "£1 = $1.30. A US good costs $26.",
      lines: ["Price in £ = 26 ÷ 1.30", "= £20"],
      say: ["Divide the dollar price by the exchange rate.", "That gives twenty pounds. If the pound fell to one dollar twenty, it would cost about twenty one pounds sixty-seven."] },
    { type: "quiz", q: "A rise in UK interest rates tends to make the pound…", o: ["Depreciate", "Appreciate", "Fixed", "Worthless"], a: 1,
      why: "Hot money flows in.", say: ["What happens to the pound when UK interest rates rise?"] }
  ]
});

S2Data.video("4d", {
  scenes: [
    { type: "title", title: "Poverty and inequality", sub: "Measuring who has what.", mark: "Gini",
      say: ["Poverty is about having too little. Inequality is about how unevenly income and wealth are shared."] },
    { type: "compare", title: "Two kinds of poverty", h: ["Definition"],
      rows: [["Absolute", "Can't meet basic needs"], ["Relative", "Below 60% of median income (UK)"]],
      say: ["Absolute poverty means not having enough for food, water and shelter.", "Relative poverty compares you with others. In the UK it's below sixty percent of median household income."] },
    { type: "graph", title: "The Lorenz curve", x: "Cumulative % of population", y: "Cumulative % of income",
      lines: [line([0, 0], [1, 1], { dash: true, s: 0 }), { pts: [[0, 0], [0.4, 0.15], [0.7, 0.38], [0.9, 0.65], [1, 1]], s: 1 }],
      marks: [{ x: 0.4, y: 0.4, t: "line of equality", s: 0, anchor: "end", dx: -14, dy: -14, dot: false }, { x: 0.7, y: 0.38, t: "Lorenz curve", s: 1, anchor: "start", dx: 14, dy: 34, dot: false }, { x: 0.62, y: 0.5, t: "area A", s: 2, dot: false, dy: 0 }],
      say: ["If income were shared perfectly equally, the bottom ten percent would get ten percent of income. That's the forty-five degree line.",
            "The real Lorenz curve sags below it.",
            "The Gini coefficient is the area between them, A, divided by the whole area under the line. Zero is perfect equality; one is total inequality."] },
    { type: "calc", title: "Gini coefficient", q: "Area A = 0.15, area B = 0.35.",
      lines: ["Gini = A ÷ (A + B)", "= 0.15 ÷ 0.5", "= 0.3"],
      say: ["Use A over A plus B.", "That's nought point one five over nought point five.", "So the Gini is nought point three, which is similar to the UK."] },
    { type: "points", title: "Why does inequality grow?", items: ["Skills and education gaps", "Technology rewards the skilled", "Inheritance of wealth", "Tax and benefit changes"],
      say: ["People with more skills earn more.", "Technology has raised demand for skilled workers fastest.", "Wealth is inherited and grows, so it's far more unequal than income.", "And changes to taxes and benefits can widen or narrow the gap."] },
    { type: "quiz", q: "Wealth differs from income because wealth is…", o: ["A flow", "A stock of assets", "Always taxed", "Earned weekly"], a: 1,
      why: "Income is a flow; wealth is a stock.", say: ["What makes wealth different from income?"] }
  ]
});

S2Data.video("4e", {
  scenes: [
    { type: "title", title: "Emerging and developing economies", sub: "Growth isn't the whole story.", mark: "HDI",
      say: ["Development means better lives, not just higher GDP: health, education and freedom too."] },
    { type: "flow", title: "The Human Development Index", nodes: ["Life expectancy", "Education", "GNI per capita (PPP)", "HDI: 0 to 1"],
      say: ["The HDI combines health, measured by life expectancy,", "education, measured by years of schooling,", "and income per head, adjusted for prices.", "It gives a score from zero to one. It ignores inequality and freedom, though."] },
    { type: "compare", title: "Barriers to development", h: ["Examples"],
      rows: [["Economic", "Primary product dependency, savings gap, debt"], ["Non-economic", "Corruption, conflict, disease, being landlocked"]],
      say: ["Economic barriers include relying on volatile commodity exports, too little saving to fund investment, and heavy debts.", "Non-economic barriers include corruption, civil war, disease and difficult geography."] },
    { type: "flow", title: "Harrod–Domar", nodes: ["Savings", "Investment", "Output", "Income"], col: false,
      say: ["The Harrod-Domar model says savings fund investment,", "investment builds capital,", "capital raises output,", "and higher income means more savings. Poor countries are stuck because savings are low to start with."] },
    { type: "compare", title: "Strategies", h: ["Examples"],
      rows: [["Market-orientated", "Free trade, FDI, removing subsidies"], ["Interventionist", "Infrastructure, education, buffer stocks"], ["Other", "Aid, debt relief, Fairtrade, microfinance"]],
      say: ["Market-orientated strategies open the economy to trade and investment.", "Interventionist strategies have the state build roads, schools and support industries.", "Other routes include aid, cancelling debts, Fairtrade and small loans through microfinance."] },
    { type: "quiz", q: "Which is NOT part of the HDI?", o: ["Life expectancy", "Years of schooling", "Gini coefficient", "GNI per capita"], a: 2,
      why: "HDI ignores inequality.", say: ["Which of these is not part of the Human Development Index?"] }
  ]
});

S2Data.video("4f", {
  scenes: [
    { type: "title", title: "The financial sector", sub: "Banks, markets and the Bank of England.", mark: "£",
      say: ["The financial sector moves money from savers to borrowers. When it fails, everyone feels it."] },
    { type: "points", title: "What financial markets do", items: ["Help people save", "Lend to firms and households", "Provide forward markets", "Trade shares and bonds"],
      say: ["They give people safe places to save,", "lend to firms and households,", "let businesses fix future prices for currencies and commodities,", "and provide markets for shares and bonds."] },
    { type: "calc", title: "Bond prices and yields", q: "A bond pays a fixed £5 a year.",
      lines: ["Price £100: yield = 5%", "Price £125: yield = 5 ÷ 125 = 4%", "Price up → yield down"],
      say: ["At a price of one hundred pounds, five pounds a year is a five percent yield.", "If the price rises to one hundred and twenty five pounds, the yield falls to four percent.", "So bond prices and yields always move in opposite directions."] },
    { type: "compare", title: "Market failure in finance", h: ["Example"],
      rows: [["Asymmetric information", "PPI mis-selling"], ["Externalities", "2008 crisis"], ["Moral hazard", "Too big to fail"], ["Bubbles and rigging", "Housing bubble, LIBOR"]],
      say: ["Customers know less than banks, which led to mis-selling.", "A bank failure harms the whole economy, as in 2008.", "Banks that expect a bailout take bigger risks.", "And herding causes bubbles, while traders have even rigged key interest rates."] },
    { type: "points", title: "The central bank", items: ["Monetary policy", "Lender of last resort", "Regulation: PRA, FPC (and FCA)"],
      say: ["The Bank of England sets interest rates and can use QE.", "It lends to banks in a crisis to stop panics spreading.", "And it regulates: the PRA supervises banks, the FPC watches the whole system, and the separate FCA polices conduct."] },
    { type: "quiz", q: "If bond prices rise, their yields…", o: ["Rise", "Fall", "Stay the same", "Double"], a: 1,
      why: "A fixed payment is a smaller share of a higher price.", say: ["If bond prices go up, what happens to their yields?"] }
  ]
});

S2Data.video("4g", {
  scenes: [
    { type: "title", title: "The state and the macroeconomy", sub: "Spending, taxes and debt.", mark: "45%",
      say: ["The UK government spends around forty-five percent of GDP. How it raises and spends that money shapes the whole economy."] },
    { type: "compare", title: "Types of spending", h: ["Examples"],
      rows: [["Current", "Salaries, medicines"], ["Capital", "Roads, hospitals"], ["Transfer payments", "Pensions, benefits"]],
      say: ["Current spending is day-to-day: wages and supplies.", "Capital spending builds long-term assets.", "Transfer payments move money from taxpayers to others, with no output in return."] },
    { type: "compare", title: "Types of tax", h: ["Who pays a bigger share?"],
      rows: [["Progressive", "Higher earners (income tax)"], ["Proportional", "Everyone the same"], ["Regressive", "Lower earners (VAT)"]],
      say: ["A progressive tax takes a higher proportion of income as income rises.", "A proportional tax takes the same share from everyone.", "A regressive tax takes a bigger share from the poor, as VAT does."] },
    { type: "graph", title: "The Laffer curve", x: "Tax rate", y: "Tax revenue",
      lines: [{ pts: [[0, 0], [0.25, 0.6], [0.5, 0.85], [0.75, 0.6], [1, 0]], s: 0 }],
      marks: [{ x: 0.5, y: 0.85, t: "revenue-maximising rate", s: 1 }],
      say: ["At a zero tax rate, revenue is zero. At a hundred percent, no one bothers to earn, so revenue is zero too.", "Somewhere in between, revenue peaks. Beyond that, higher rates cut revenue."] },
    { type: "compare", title: "Deficits and debt", h: ["Meaning"],
      rows: [["Cyclical deficit", "Disappears when the economy recovers"], ["Structural deficit", "Remains at full capacity"], ["National debt", "Total stock of past borrowing"]],
      say: ["A cyclical deficit comes from recessions and fixes itself in recovery.", "A structural deficit stays even when the economy is booming, so it needs policy action.", "The national debt is the total of all past borrowing. High debt means high interest payments."] },
    { type: "quiz", q: "VAT is usually described as…", o: ["Progressive", "Regressive", "Proportional to income", "A direct tax"], a: 1,
      why: "Poorer households spend a larger share of income.", say: ["How is VAT usually described?"] }
  ]
});
})();
