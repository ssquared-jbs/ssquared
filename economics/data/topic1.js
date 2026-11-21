/* Economics² — How markets work */

S2Data.add({
  id: "1a", group: 1, title: "Economic foundations",
  summary: "Scarcity, choice and opportunity cost, factors of production, economic agents and specialisation.",
  notes: `
<h3>The basic economic problem</h3>
<p>Wants are <b>unlimited</b> but resources are <b>scarce</b>, so choices must be made: what to produce, how to produce it, and for whom.</p>
<h3>Opportunity cost</h3>
<p>The value of the <b>next best alternative</b> given up when a choice is made. If you spend £20 on a game instead of a book, the book is the opportunity cost.</p>
<h3>Factors of production</h3>
<table><tr><th>Factor</th><th>Example</th><th>Reward</th></tr>
<tr><td>Land</td><td>Natural resources: soil, oil, fish</td><td>Rent</td></tr>
<tr><td>Labour</td><td>Human effort</td><td>Wages</td></tr>
<tr><td>Capital</td><td>Man-made goods used in production: machines, buildings</td><td>Interest</td></tr>
<tr><td>Enterprise</td><td>Organising the other factors and taking risks</td><td>Profit</td></tr></table>
<h3>Economic agents</h3>
<p><b>Consumers</b> (households), <b>producers</b> (firms) and <b>government</b> interact in markets. Sectors: primary (extraction), secondary (manufacturing), tertiary (services).</p>
<h3>Specialisation and the division of labour</h3>
<p>Workers, firms, regions or countries concentrate on what they do best. <b>Benefits:</b> higher productivity and output. <b>Drawbacks:</b> boredom, dependence on others, vulnerability if demand falls. Specialisation requires <b>money</b> as a medium of exchange.</p>
<h3>Economic models</h3>
<p>Economists use simplified models and assumptions (e.g. <i>ceteris paribus</i>: all other things equal) to predict behaviour.</p>`,
  quiz: [
    { q: "The basic economic problem is…", o: ["Unlimited wants and scarce resources", "Too much money", "Unlimited resources", "No choices"], a: 0, e: "" },
    { q: "Opportunity cost is…", o: ["The next best alternative given up", "The price paid", "Total cost", "A tax"], a: 0, e: "" },
    { q: "The reward to labour is…", o: ["Wages", "Rent", "Interest", "Profit"], a: 0, e: "" },
    { q: "The reward to enterprise is…", o: ["Profit", "Wages", "Rent", "Interest"], a: 0, e: "" },
    { q: "A factory machine is an example of…", o: ["Capital", "Land", "Labour", "Enterprise"], a: 0, e: "" },
    { q: "Oil in the ground is…", o: ["Land", "Capital", "Labour", "Enterprise"], a: 0, e: "" },
    { q: "Manufacturing is in the…", o: ["Secondary sector", "Primary sector", "Tertiary sector", "Public sector only"], a: 0, e: "" },
    { q: "A benefit of specialisation is…", o: ["Higher productivity", "More boredom", "Less output", "No trade needed"], a: 0, e: "" },
    { q: "Ceteris paribus means…", o: ["All other things being equal", "Prices are fixed", "Everyone is rational", "Markets fail"], a: 0, e: "" }
  ],
  flashcards: [
    ["Economic problem", "Unlimited wants, scarce resources"],
    ["Opportunity cost", "Next best alternative forgone"],
    ["Factors of production", "Land, labour, capital, enterprise"],
    ["Rewards", "Rent, wages, interest, profit"],
    ["Economic agents", "Consumers, producers, government"],
    ["Specialisation", "Higher productivity; risk of dependence"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Demand and supply",
  summary: "The laws of demand and supply, movements along and shifts of the curves, and their causes.",
  notes: `
<h3>Demand</h3>
<p><b>Demand</b> is the quantity consumers are willing and able to buy at each price. As price rises, quantity demanded falls: the demand curve slopes <b>downwards</b>.</p>
<ul>
<li>A change in price causes a <b>movement along</b> the curve (extension or contraction).</li>
<li>Other factors <b>shift</b> the curve: income, prices of substitutes and complements, tastes and fashion, advertising, population.</li>
</ul>
<h3>Supply</h3>
<p><b>Supply</b> is the quantity producers are willing and able to sell at each price. As price rises, quantity supplied rises: the supply curve slopes <b>upwards</b>.</p>
<p>Supply <b>shifts</b> with: costs of production, technology, indirect taxes, subsidies, weather, number of firms.</p>
<h3>Key terms</h3>
<table><tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Substitute</td><td>A good used instead (tea and coffee): if coffee's price rises, demand for tea rises</td></tr>
<tr><td>Complement</td><td>A good used together (printers and ink): if printer prices fall, demand for ink rises</td></tr>
<tr><td>Normal good</td><td>Demand rises as income rises</td></tr>
<tr><td>Inferior good</td><td>Demand falls as income rises (e.g. value-range food)</td></tr></table>
<div class="box box-key"><span class="box-title">Rule</span>Price change → movement along. Any other factor → shift of the whole curve (right = increase, left = decrease).</div>`,
  quiz: [
    { q: "The demand curve slopes…", o: ["Downwards", "Upwards", "Horizontally", "Vertically"], a: 0, e: "" },
    { q: "A change in the good's own price causes…", o: ["A movement along the curve", "A shift right", "A shift left", "No change"], a: 0, e: "" },
    { q: "Higher incomes shift demand for a normal good…", o: ["Right", "Left", "Nowhere", "Up the supply curve"], a: 0, e: "" },
    { q: "Tea and coffee are…", o: ["Substitutes", "Complements", "Inferior goods", "Public goods"], a: 0, e: "" },
    { q: "Cars and petrol are…", o: ["Complements", "Substitutes", "Inferior goods", "Merit goods"], a: 0, e: "" },
    { q: "The supply curve slopes…", o: ["Upwards", "Downwards", "Horizontally", "In a circle"], a: 0, e: "" },
    { q: "Higher production costs shift supply…", o: ["Left", "Right", "Nowhere", "Upwards along the curve"], a: 0, e: "" },
    { q: "A subsidy to producers shifts supply…", o: ["Right", "Left", "Nowhere", "Demand right"], a: 0, e: "" },
    { q: "An inferior good's demand falls when…", o: ["Incomes rise", "Incomes fall", "Prices rise", "Advertising rises"], a: 0, e: "" }
  ],
  flashcards: [
    ["Law of demand", "Price up → quantity demanded down"],
    ["Law of supply", "Price up → quantity supplied up"],
    ["Demand shifts", "Income, substitutes, complements, tastes, advertising, population"],
    ["Supply shifts", "Costs, technology, taxes, subsidies, weather"],
    ["Substitute / complement", "Used instead / used together"],
    ["Normal / inferior good", "Demand rises / falls with income"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Price determination and elasticity",
  summary: "Equilibrium, excess demand and supply, and price and supply elasticity.",
  notes: `
<h3>Equilibrium</h3>
<p>The market clears where demand equals supply: the <b>equilibrium price</b> and quantity.</p>
<ul>
<li><b>Excess demand</b> (shortage) when price is below equilibrium: price is pushed up.</li>
<li><b>Excess supply</b> (surplus) when price is above equilibrium: price is pushed down.</li>
<li>An increase in demand raises equilibrium price and quantity; an increase in supply lowers price and raises quantity.</li>
</ul>
<h3>Price elasticity of demand (PED)</h3>
<p>PED = % change in quantity demanded ÷ % change in price.</p>
<table><tr><th>Value (ignoring sign)</th><th>Type</th><th>Effect of a price rise on revenue</th></tr>
<tr><td>Greater than 1</td><td>Elastic</td><td>Revenue falls</td></tr>
<tr><td>Less than 1</td><td>Inelastic</td><td>Revenue rises</td></tr>
<tr><td>Exactly 1</td><td>Unitary</td><td>No change</td></tr></table>
<p><b>Factors:</b> number of substitutes, necessity vs luxury, share of income, habit, time.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Price rises 10%; quantity demanded falls 25%. PED = −25 ÷ 10 = <b>−2.5</b> (elastic).</div>
<h3>Price elasticity of supply (PES)</h3>
<p>PES = % change in quantity supplied ÷ % change in price. Supply is more elastic with spare capacity, stocks, available labour and more time.</p>
<h3>Percentage change</h3>
<p>% change = (new − old) ÷ old × 100.</p>`,
  quiz: [
    { q: "Equilibrium is where…", o: ["Demand equals supply", "Price is highest", "Supply is zero", "Demand is greatest"], a: 0, e: "" },
    { q: "Price below equilibrium causes…", o: ["Excess demand", "Excess supply", "Equilibrium", "No trade"], a: 0, e: "" },
    { q: "An increase in demand causes price to…", o: ["Rise", "Fall", "Stay the same", "Become zero"], a: 0, e: "" },
    { q: "PED = ", o: ["% change in QD ÷ % change in price", "% change in price ÷ % change in QD", "Price × quantity", "QD − QS"], a: 0, e: "" },
    { q: "A PED of −0.4 is…", o: ["Inelastic", "Elastic", "Unitary", "Perfectly elastic"], a: 0, e: "" },
    { q: "If demand is inelastic, a price rise makes revenue…", o: ["Rise", "Fall", "Stay the same", "Zero"], a: 0, e: "" },
    { q: "Goods with many substitutes tend to have…", o: ["Elastic demand", "Inelastic demand", "Zero demand", "Fixed supply"], a: 0, e: "" },
    { q: "Price up 5%, QD down 10%. PED?", o: ["−2", "−0.5", "−5", "−10"], a: 0, e: "" },
    { q: "Supply is more elastic when firms have…", o: ["Spare capacity", "No stocks", "No workers", "Fixed machinery"], a: 0, e: "" }
  ],
  flashcards: [
    ["Equilibrium", "Demand = supply"],
    ["Excess demand / supply", "Shortage below / surplus above equilibrium"],
    ["PED", "%ΔQD ÷ %ΔP"],
    ["Elastic / inelastic", "|PED| > 1 / < 1"],
    ["PED factors", "Substitutes, necessity, share of income, habit, time"],
    ["PES", "%ΔQS ÷ %ΔP; higher with spare capacity, stocks, time"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Production, costs, revenue and profit",
  summary: "Productivity, costs, revenue, profit and economies of scale.",
  notes: `
<h3>Production and productivity</h3>
<p><b>Productivity</b> = output ÷ input (e.g. output per worker). Higher productivity lowers costs per unit and raises competitiveness. It improves with training, technology, specialisation and motivation.</p>
<h3>Costs</h3>
<ul>
<li><b>Fixed costs</b> don't vary with output; <b>variable costs</b> do.</li>
<li><b>Total cost</b> = fixed + variable.</li>
<li><b>Average cost</b> = total cost ÷ output.</li>
</ul>
<h3>Revenue and profit</h3>
<ul>
<li><b>Total revenue</b> = price × quantity.</li>
<li><b>Average revenue</b> = total revenue ÷ quantity (= price).</li>
<li><b>Profit</b> = total revenue − total cost. Profit rewards enterprise and signals where resources should go.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Output 500; fixed costs £2000; variable cost £6 each; price £12. TC = 2000 + 3000 = £5000; AC = £10; TR = £6000; profit = £1000.</div>
<h3>Economies of scale</h3>
<p>As firms grow, average costs fall: <b>purchasing</b> (bulk buying), <b>technical</b> (better machinery), <b>managerial</b> (specialist managers), <b>financial</b> (cheaper borrowing). Beyond a point, <b>diseconomies of scale</b> raise average costs (poor communication, low motivation, coordination problems).</p>`,
  quiz: [
    { q: "Productivity is…", o: ["Output per unit of input", "Total output", "Total cost", "Profit per worker"], a: 0, e: "" },
    { q: "Average cost =", o: ["Total cost ÷ output", "Fixed + variable", "Price × quantity", "Revenue − cost"], a: 0, e: "" },
    { q: "Average revenue equals…", o: ["Price", "Profit", "Total cost", "Fixed cost"], a: 0, e: "" },
    { q: "Bulk buying discounts are…", o: ["Purchasing economies", "Technical economies", "Diseconomies", "Financial economies"], a: 0, e: "" },
    { q: "Cheaper loans for big firms are…", o: ["Financial economies", "Purchasing economies", "Managerial economies", "Diseconomies"], a: 0, e: "" },
    { q: "Diseconomies of scale cause average costs to…", o: ["Rise", "Fall", "Stay the same", "Become zero"], a: 0, e: "" },
    { q: "Which raises productivity?", o: ["Training and technology", "Fewer machines", "Lower motivation", "Less specialisation"], a: 0, e: "" },
    { q: "TR £800, TC £650. Profit?", o: ["£150", "£1450", "£650", "−£150"], a: 0, e: "" },
    { q: "TC £3000 for 600 units. AC?", o: ["£5", "£0.20", "£18", "£50"], a: 0, e: "" }
  ],
  flashcards: [
    ["Productivity", "Output ÷ input"],
    ["Total / average cost", "FC + VC / TC ÷ output"],
    ["Total / average revenue", "P × Q / TR ÷ Q"],
    ["Profit", "TR − TC"],
    ["Economies of scale", "Purchasing, technical, managerial, financial"],
    ["Diseconomies", "Communication, motivation, coordination problems"]
  ]
});

S2Data.add({
  id: "1e", group: 1, title: "Competitive and concentrated markets",
  summary: "Competition, monopoly and oligopoly, and their effects on consumers and firms.",
  notes: `
<h3>Competitive markets</h3>
<p>Many firms, similar products and easy entry. Benefits: lower prices, more choice, better quality and innovation, efficiency.</p>
<h3>Concentrated markets</h3>
<table><tr><th>Structure</th><th>Features</th></tr>
<tr><td>Oligopoly</td><td>A few large firms dominate (e.g. supermarkets, mobile networks); branding, non-price competition; risk of collusion</td></tr>
<tr><td>Monopoly</td><td>One firm dominates; in UK law, a firm with over 25% market share may be investigated</td></tr></table>
<h3>Monopoly: pros and cons</h3>
<ul>
<li><b>Cons:</b> higher prices, less choice, less incentive to innovate or be efficient.</li>
<li><b>Pros:</b> economies of scale, profits to fund research and development.</li>
</ul>
<h3>Barriers to entry</h3>
<p>High start-up costs, brand loyalty, patents, economies of scale of existing firms, control of resources.</p>
<h3>Regulation</h3>
<p>The <b>Competition and Markets Authority (CMA)</b> investigates mergers and anti-competitive behaviour such as price fixing.</p>
<h3>Market share and concentration</h3>
<p>Market share (%) = firm's sales ÷ total market sales × 100.</p>`,
  quiz: [
    { q: "A market with many firms selling similar products is…", o: ["Competitive", "A monopoly", "An oligopoly", "A cartel"], a: 0, e: "" },
    { q: "An oligopoly has…", o: ["A few dominant firms", "One firm", "Thousands of firms", "No firms"], a: 0, e: "" },
    { q: "In UK law a monopoly is a firm with over…", o: ["25% market share", "50%", "90%", "10%"], a: 0, e: "" },
    { q: "Collusion means firms…", o: ["Agree to fix prices or output", "Compete harder", "Merge legally", "Exit the market"], a: 0, e: "" },
    { q: "A benefit of competition for consumers is…", o: ["Lower prices", "Less choice", "Higher prices", "Lower quality"], a: 0, e: "" },
    { q: "Which is a barrier to entry?", o: ["Patents", "Low start-up costs", "No brand loyalty", "Free information"], a: 0, e: "" },
    { q: "Which body regulates UK competition?", o: ["Competition and Markets Authority", "Bank of England", "HMRC", "Ofsted"], a: 0, e: "" },
    { q: "A possible benefit of monopoly is…", o: ["Funds for research and development", "More choice", "Lower prices always", "More competition"], a: 0, e: "" },
    { q: "Non-price competition includes…", o: ["Branding and advertising", "Price cuts", "Discounts", "Price wars"], a: 0, e: "" }
  ],
  flashcards: [
    ["Competitive market", "Many firms; low prices, choice, innovation"],
    ["Oligopoly", "Few dominant firms; non-price competition"],
    ["Monopoly", "One dominant firm; UK: >25% share"],
    ["Barriers to entry", "Costs, brands, patents, scale"],
    ["Collusion", "Firms agreeing prices: illegal"],
    ["CMA", "Investigates mergers and anti-competitive behaviour"]
  ]
});

S2Data.add({
  id: "1f", group: 1, title: "Market failure",
  summary: "Externalities, public goods, merit and demerit goods, information gaps, and government intervention.",
  notes: `
<h3>What is market failure?</h3>
<p>When the free market misallocates resources, producing too much or too little of a good.</p>
<h3>Externalities</h3>
<ul>
<li><b>Negative externalities</b>: costs to third parties (e.g. pollution from a factory, passive smoking). The good is <b>over-produced</b>.</li>
<li><b>Positive externalities</b>: benefits to third parties (e.g. vaccination protects others, education). The good is <b>under-produced</b>.</li>
</ul>
<h3>Other causes</h3>
<table><tr><th>Cause</th><th>Example</th></tr>
<tr><td>Public goods</td><td>Street lights: non-excludable and non-rival, so the free market won't supply them (free-rider problem)</td></tr>
<tr><td>Merit goods</td><td>Education, health care: under-consumed</td></tr>
<tr><td>Demerit goods</td><td>Cigarettes, alcohol: over-consumed</td></tr>
<tr><td>Information gaps</td><td>Consumers don't know the true costs or benefits</td></tr></table>
<h3>Government intervention</h3>
<ul>
<li><b>Indirect taxes</b> (e.g. on cigarettes, sugary drinks) raise prices and reduce consumption.</li>
<li><b>Subsidies</b> lower prices and increase consumption of beneficial goods.</li>
<li><b>Regulation</b> and bans (e.g. emission limits, age restrictions).</li>
<li><b>Information</b> campaigns and labelling.</li>
<li><b>State provision</b> of public and merit goods.</li>
</ul>
<p>Government intervention can also fail (e.g. smuggling to avoid taxes, high costs).</p>`,
  quiz: [
    { q: "Pollution from a factory is a…", o: ["Negative externality", "Positive externality", "Public good", "Merit good"], a: 0, e: "" },
    { q: "Goods with negative externalities tend to be…", o: ["Over-produced", "Under-produced", "Free", "Public goods"], a: 0, e: "" },
    { q: "Vaccination creates…", o: ["Positive externalities", "Negative externalities", "Demerit effects", "Monopoly"], a: 0, e: "" },
    { q: "A public good is…", o: ["Non-excludable and non-rival", "Sold by firms for profit", "Always harmful", "Under-produced by government"], a: 0, e: "" },
    { q: "The free-rider problem applies to…", o: ["Public goods", "Luxury goods", "Inferior goods", "Demerit goods"], a: 0, e: "" },
    { q: "Education is an example of a…", o: ["Merit good", "Demerit good", "Public good", "Inferior good"], a: 0, e: "" },
    { q: "Cigarettes are a…", o: ["Demerit good", "Merit good", "Public good", "Capital good"], a: 0, e: "" },
    { q: "A tax on sugary drinks aims to…", o: ["Reduce consumption", "Increase consumption", "Subsidise firms", "Create a public good"], a: 0, e: "" },
    { q: "A subsidy is…", o: ["A government payment that lowers costs/prices", "A tax", "A ban", "A fine"], a: 0, e: "" }
  ],
  flashcards: [
    ["Market failure", "Free market misallocates resources"],
    ["Negative externality", "Third-party cost; over-produced"],
    ["Positive externality", "Third-party benefit; under-produced"],
    ["Public good", "Non-excludable, non-rival; free riders"],
    ["Merit / demerit goods", "Under-consumed / over-consumed"],
    ["Interventions", "Taxes, subsidies, regulation, information, state provision"]
  ]
});

S2Data.detail("1a", { mistakes: ["Defining opportunity cost as 'all the alternatives': it's only the next best one."], tips: ["Learn factors with their rewards: land–rent, labour–wages, capital–interest, enterprise–profit."], fact: "Adam Smith estimated ten specialised workers could make 48 000 pins a day." });
S2Data.detail("1b", { mistakes: ["Shifting the curve when the good's own price changes."], tips: ["Always label axes: price on the vertical, quantity on the horizontal."], fact: "When the price of a games console falls, demand for its games rises: they're complements." });
S2Data.detail("1c", { mistakes: ["Putting price on top in the PED formula."], tips: ["PED is usually negative; compare its size (ignoring the sign) to 1."], fact: "Petrol is price inelastic in the short run, which is why governments tax it heavily." });
S2Data.detail("1d", { mistakes: ["Confusing productivity (per worker) with production (total)."], tips: ["In calculations, show each step: TC, then AC, then TR, then profit."], fact: "UK productivity has grown slowly since 2008, a problem economists call the 'productivity puzzle'." });
S2Data.detail("1e", { mistakes: ["Assuming monopolies are always bad."], tips: ["Evaluate from the viewpoint of consumers, firms and workers."], fact: "In 2018 the CMA blocked a merger between Sainsbury's and Asda." });
S2Data.detail("1f", { mistakes: ["Mixing up merit goods with public goods."], tips: ["Draw the link: externality → over/under-production → suitable intervention."], fact: "The UK Soft Drinks Industry Levy (2018) led many firms to cut sugar in their drinks." });
