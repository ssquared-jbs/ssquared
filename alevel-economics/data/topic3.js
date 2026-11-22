/* A-level Economics² — Theme 3: Business behaviour and the labour market */

S2Data.add({
  id: "3a", group: 3, title: "Business growth and business objectives",
  summary: "Sizes and types of firm, organic growth and integration, demergers, and profit, revenue, sales and satisficing objectives.",
  notes: R`
<h3>Sizes and types of business</h3>
<ul>
<li>Why some firms stay <b>small</b>: small market size, niche products, owners' preferences, lack of finance, personal service.</li>
<li><b>Public sector</b> organisations are owned by the state; <b>private sector</b> firms are privately owned. <b>Not-for-profit</b> organisations (charities, social enterprises) aim at social goals.</li>
<li>The <b>principal–agent problem</b>: owners (shareholders, principals) want profit, but managers (agents) may pursue their own goals because ownership and control are separated.</li>
</ul>
<h3>Business growth</h3>
<table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Organic</td><td>Growing internally: new products, stores, markets</td><td>Greggs opening new shops</td></tr>
<tr><td>Horizontal integration</td><td>Merger with a firm at the same stage in the same industry</td><td>Two supermarkets merging</td></tr>
<tr><td>Vertical (backward)</td><td>Merger with a supplier</td><td>A car maker buying a battery firm</td></tr>
<tr><td>Vertical (forward)</td><td>Merger with a customer or distributor</td><td>A brewer buying pubs</td></tr>
<tr><td>Conglomerate</td><td>Merger of firms in unrelated industries</td><td>Virgin Group</td></tr></table>
<ul>
<li>Advantages of growth: economies of scale, more market power, diversification (spreading risk), securing supplies.</li>
<li>Constraints on growth: size of market, access to finance, owner objectives, regulation (CMA).</li>
<li><b>Demergers</b>: splitting a firm into separate businesses, because of diseconomies of scale, lack of synergy or to raise shareholder value.</li>
</ul>
<h3>Business objectives</h3>
<table><tr><th>Objective</th><th>Condition</th></tr>
<tr><td>Profit maximisation</td><td>\(\text{MC} = \text{MR}\)</td></tr>
<tr><td>Revenue maximisation</td><td>\(\text{MR} = 0\)</td></tr>
<tr><td>Sales (volume) maximisation</td><td>\(\text{AC} = \text{AR}\) (normal profit)</td></tr>
<tr><td>Satisficing</td><td>Making enough profit to keep shareholders happy while meeting other goals</td></tr></table>
<p>Firms may choose other objectives because of the principal–agent problem, managers' pay linked to sales, or social and environmental goals.</p>
`,
  quiz: [
    { q: "A supermarket merging with another supermarket is…", o: ["Horizontal integration", "Vertical integration", "Conglomerate integration", "Organic growth"], a: 0, e: "Same industry, same stage of production." },
    { q: "A car maker buying a tyre supplier is…", o: ["Backward vertical integration", "Forward vertical integration", "Horizontal integration", "A demerger"], a: 0, e: "It moves back towards raw materials." },
    { q: "Organic growth means…", o: ["Growing internally, e.g. opening new stores", "Merging with another firm", "Taking over a rival", "Demerging"], a: 0, e: "No other firm is bought." },
    { q: "Profit is maximised where…", o: ["MC = MR", "MR = 0", "AC = AR", "AR = MR"], a: 0, e: "Producing one more unit would add more to cost than revenue." },
    { q: "Revenue is maximised where…", o: ["MR = 0", "MC = MR", "AC = AR", "MC = AC"], a: 0, e: "Selling one more adds nothing to revenue." },
    { q: "Sales maximisation (subject to normal profit) is where…", o: ["AC = AR", "MC = MR", "MR = 0", "MC = AR"], a: 0, e: "Any further output would make a loss." },
    { q: "Satisficing means…", o: ["Making enough profit to satisfy shareholders", "Maximising profit", "Maximising sales", "Making a loss"], a: 0, e: "Managers balance several stakeholders' goals." },
    { q: "The principal–agent problem arises because…", o: ["Ownership and control are separated", "Firms are small", "Markets are competitive", "Prices are fixed"], a: 0, e: "Managers may pursue their own interests." },
    { q: "A conglomerate merger joins…", o: ["Firms in unrelated industries", "A firm and its supplier", "Two competitors", "A firm and its retailer"], a: 0, e: "It spreads risk through diversification." }
  ],
  flashcards: [
    ["Horizontal integration", "Same industry, same stage"],
    ["Vertical integration", "Different stage: backward to suppliers, forward to customers"],
    ["Conglomerate", "Unrelated industries"],
    ["Profit maximisation", "MC = MR"],
    ["Revenue maximisation", "MR = 0"],
    ["Sales maximisation", "AC = AR"],
    ["Satisficing", "Enough profit to keep shareholders content"],
    ["Principal–agent problem", "Managers' goals differ from owners'"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Revenues, costs and profits",
  summary: "Total, average and marginal revenue, short- and long-run costs, economies and diseconomies of scale, and types of profit.",
  notes: R`
<h3>Revenue</h3>
<p>\[\text{TR} = P \times Q,\quad \text{AR} = \frac{\text{TR}}{Q} = P,\quad \text{MR} = \frac{\Delta\text{TR}}{\Delta Q}\]</p>
<ul>
<li>For a price taker, AR = MR (horizontal). For a firm facing a downward-sloping demand curve, MR falls twice as steeply as AR.</li>
<li>TR is maximised where MR = 0, which is where PED = −1.</li>
</ul>
<h3>Costs</h3>
<ul>
<li><b>Fixed costs</b> don't vary with output (rent); <b>variable costs</b> do (raw materials). \(\text{TC} = \text{TFC} + \text{TVC}\).</li>
<li>\(\text{AC} = \dfrac{\text{TC}}{Q}\), \(\text{AFC} = \dfrac{\text{TFC}}{Q}\), \(\text{AVC} = \dfrac{\text{TVC}}{Q}\), \(\text{MC} = \dfrac{\Delta\text{TC}}{\Delta Q}\).</li>
<li>Short run: at least one factor is fixed. The <b>law of diminishing marginal returns</b>: adding more of a variable factor to a fixed factor eventually makes marginal product fall, so MC rises.</li>
<li>Short-run AC is U-shaped. MC cuts AC and AVC at their lowest points.</li>
</ul>
<h3>Long-run costs and economies of scale</h3>
<ul>
<li>Long run: all factors are variable. The LRAC curve is an envelope of SRAC curves.</li>
<li><b>Internal economies of scale</b> (falling LRAC as the firm grows): technical (bigger, more efficient machinery), purchasing (bulk buying), managerial (specialist managers), financial (cheaper borrowing), marketing, risk-bearing.</li>
<li><b>External economies of scale</b>: costs fall as the <b>industry</b> grows, e.g. a skilled local workforce, shared suppliers (Silicon Valley). These shift LRAC down.</li>
<li><b>Diseconomies of scale</b>: rising LRAC due to poor communication, coordination problems, low motivation.</li>
<li><b>Minimum efficient scale (MES)</b>: the lowest output at which LRAC is at its minimum.</li>
</ul>
<h3>Normal and supernormal profit</h3>
<ul>
<li>\(\text{Profit} = \text{TR} - \text{TC}\). Economists include opportunity cost in costs.</li>
<li><b>Normal profit</b>: TR = TC (AR = AC); just enough to keep resources in their current use.</li>
<li><b>Supernormal profit</b>: TR > TC. <b>Losses</b>: TR < TC.</li>
<li><b>Short-run shutdown point</b>: a firm keeps producing if \(\text{AR} \geq \text{AVC}\). Long-run: it leaves if \(\text{AR} < \text{AC}\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A firm sells 200 units at £15. TFC is £1000 and AVC is £8.
<ol><li>\(\text{TR} = 15 \times 200 = £3000\); \(\text{TC} = 1000 + 8 \times 200 = £2600\).</li>
<li>Profit \(= 3000 - 2600 = £400\) (supernormal).</li></ol></div>
`,
  quiz: [
    { q: "Total revenue is…", o: ["Price × quantity", "Revenue per unit", "Change in revenue from one more unit", "Profit + costs"], a: 0, e: R`\(\text{TR} = P \times Q\).` },
    { q: "Average revenue equals…", o: ["Price", "Marginal revenue always", "Total cost", "Profit per unit"], a: 0, e: R`\(\text{AR} = \text{TR}/Q = P\).` },
    { q: "The law of diminishing returns applies in…", o: ["The short run", "The long run", "Both equally", "Neither"], a: 0, e: "It requires a fixed factor." },
    { q: "MC cuts AC at…", o: ["The lowest point of AC", "The highest point of AC", "Where AC = 0", "Where MR = 0"], a: 0, e: "If MC < AC, AC falls; if MC > AC, AC rises." },
    { q: "Bulk buying discounts are an example of…", o: ["Purchasing economies of scale", "Technical economies", "External economies", "Diseconomies of scale"], a: 0, e: "Large firms can negotiate lower input prices." },
    { q: "Poor communication in a very large firm is a…", o: ["Diseconomy of scale", "Technical economy", "Financial economy", "External economy"], a: 0, e: "It pushes LRAC up." },
    { q: "Normal profit is where…", o: ["TR = TC", "TR > TC", "MR = 0", "MC = 0"], a: 0, e: "Opportunity cost is just covered." },
    { q: "A firm should shut down in the short run if…", o: ["AR < AVC", "AR < AC", "AR > AVC", "MR = MC"], a: 0, e: "It can't even cover its variable costs." },
    { q: "External economies of scale occur when…", o: ["The industry grows", "The firm grows", "Costs rise", "Output falls"], a: 0, e: "E.g. a pool of skilled labour in the area." }
  ],
  flashcards: [
    ["TR, AR, MR", R`\(P \times Q\), \(\dfrac{\text{TR}}{Q}\), \(\dfrac{\Delta\text{TR}}{\Delta Q}\)`],
    ["MC", R`\(\dfrac{\Delta\text{TC}}{\Delta Q}\)`],
    ["Diminishing marginal returns", "Adding variable factors to a fixed factor: marginal product eventually falls"],
    ["Internal economies of scale", "Technical, purchasing, managerial, financial, marketing, risk-bearing"],
    ["External economies of scale", "Industry growth lowers each firm's costs"],
    ["Minimum efficient scale", "Lowest output where LRAC is minimised"],
    ["Normal profit", "TR = TC (AR = AC)"],
    ["Short-run shutdown", "AR < AVC"]
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Market structures: efficiency and perfect competition",
  summary: "Allocative, productive, dynamic and X-efficiency, and the perfectly competitive model in the short and long run.",
  notes: R`
<h3>Types of efficiency</h3>
<table><tr><th>Type</th><th>Condition / meaning</th></tr>
<tr><td>Allocative</td><td>\(P = \text{MC}\): resources match consumer wants</td></tr>
<tr><td>Productive</td><td>Producing at the lowest point of AC (\(\text{MC} = \text{AC}\))</td></tr>
<tr><td>Dynamic</td><td>Improvements over time through innovation and investment (R&D), often funded by supernormal profit</td></tr>
<tr><td>X-inefficiency</td><td>Costs above the lowest possible at a given output, from organisational slack</td></tr></table>
<h3>Perfect competition</h3>
<p>Assumptions: many buyers and sellers, identical (homogeneous) products, perfect information, no barriers to entry or exit, firms are profit maximisers and <b>price takers</b>.</p>
<ul>
<li>The firm's demand curve is horizontal at the market price: \(P = \text{AR} = \text{MR}\).</li>
<li>Short run: firms can make supernormal profit (if \(P > \text{AC}\)) or losses.</li>
<li>Long run: supernormal profit attracts entry, market supply shifts right, price falls until only <b>normal profit</b> is made (\(P = \text{AC}\)). Losses cause exit until normal profit is restored.</li>
</ul>
<div class="box box-key"><span class="box-title">Draw it: long-run equilibrium</span>Two panels. Market: D and S set price \(P\). Firm: horizontal AR = MR at \(P\), U-shaped AC and MC. Profit maximised where MC = MR, which is at the bottom of AC, so \(P = \text{MC} = \text{AC}\).</div>
<ul>
<li>In the long run it is both <b>allocatively</b> (\(P = \text{MC}\)) and <b>productively</b> efficient (bottom of AC).</li>
<li>But there may be little <b>dynamic efficiency</b>: no supernormal profit to fund R&D, and perfect information means innovations are copied.</li>
<li>Examples close to it: foreign exchange, some agricultural markets, online marketplaces.</li>
</ul>
`,
  quiz: [
    { q: "Allocative efficiency is where…", o: ["P = MC", "MC = AC", "MR = 0", "AR = AC"], a: 0, e: "The value consumers place on the last unit equals its cost." },
    { q: "Productive efficiency is where…", o: ["Output is at the lowest point of AC", "P = MC", "MR = MC", "AR = MR"], a: 0, e: "That's where MC = AC." },
    { q: "Dynamic efficiency refers to…", o: ["Innovation and improvement over time", "Lowest cost now", "P = MC", "Normal profit"], a: 0, e: "It's often funded by supernormal profit." },
    { q: "X-inefficiency occurs when…", o: ["Costs are above the lowest possible for that output", "Price equals MC", "There is perfect competition", "Profit is normal"], a: 0, e: "Caused by slack from lack of competition." },
    { q: "In perfect competition firms are…", o: ["Price takers", "Price makers", "Monopolists", "Oligopolists"], a: 0, e: "Each is too small to affect the market price." },
    { q: "In long-run equilibrium in perfect competition, firms make…", o: ["Normal profit", "Supernormal profit", "Losses", "Zero revenue"], a: 0, e: "Free entry competes away supernormal profit." },
    { q: "If firms make supernormal profit in the short run…", o: ["New firms enter and price falls", "Firms leave", "Price rises", "Firms merge"], a: 0, e: "There are no barriers to entry." },
    { q: "The firm's demand curve in perfect competition is…", o: ["Perfectly elastic", "Perfectly inelastic", "Downward sloping", "Upward sloping"], a: 0, e: "Horizontal at the market price." },
    { q: "A weakness of perfect competition is…", o: ["Little dynamic efficiency", "Allocative inefficiency", "Productive inefficiency", "High prices"], a: 0, e: "No supernormal profit to fund R&D." }
  ],
  flashcards: [
    ["Allocative efficiency", "P = MC"],
    ["Productive efficiency", "Lowest point of AC (MC = AC)"],
    ["Dynamic efficiency", "Innovation and investment over time"],
    ["X-inefficiency", "Costs above minimum possible due to slack"],
    ["Perfect competition assumptions", "Many firms, identical goods, perfect information, free entry and exit"],
    ["Firm's demand in perfect competition", R`Horizontal: \(P = \text{AR} = \text{MR}\)`],
    ["Long run in perfect competition", "Normal profit; P = MC = AC"],
    ["Why little dynamic efficiency", "No supernormal profit for R&D"]
  ]
});

S2Data.add({
  id: "3d", group: 3, title: "Monopolistic competition and oligopoly",
  summary: "The monopolistic competition model, characteristics of oligopoly, concentration ratios, collusion, game theory and price and non-price competition.",
  notes: R`
<h3>Monopolistic competition</h3>
<p>Many firms, <b>differentiated products</b> (branding, location, quality), low barriers to entry. Each firm faces a downward-sloping (fairly elastic) demand curve.</p>
<ul>
<li>Short run: supernormal profit possible where MC = MR.</li>
<li>Long run: entry shifts each firm's demand left until AR is tangent to AC, giving <b>normal profit</b>.</li>
<li>Not allocatively (\(P > \text{MC}\)) or productively efficient (excess capacity). Examples: restaurants, hairdressers.</li>
</ul>
<h3>Oligopoly</h3>
<ul>
<li>A few large firms dominate; high barriers to entry; <b>interdependence</b> (each firm's decisions depend on rivals' reactions); differentiated or homogeneous products.</li>
<li>Measured by the <b>n-firm concentration ratio</b>: the combined market share of the largest n firms.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Market shares: 28%, 22%, 17%, 12%, 21% others. The 3-firm concentration ratio \(= 28 + 22 + 17 = 67\%\).</div>
<h3>Collusion</h3>
<ul>
<li><b>Overt</b> collusion: formal agreements (cartels such as OPEC) to fix prices or output. Illegal in the UK and EU.</li>
<li><b>Tacit</b> collusion: no formal agreement, e.g. price leadership.</li>
<li>Collusion is more likely with few firms, similar costs, high barriers, stable demand and ineffective regulation.</li>
</ul>
<h3>Game theory</h3>
<p>A two-firm <b>prisoner's dilemma</b> payoff matrix shows why firms may cheat on collusive agreements: each firm's dominant strategy can be to cut price, leaving both worse off than if they had cooperated.</p>
<h3>Price and non-price competition</h3>
<ul>
<li><b>Price wars</b>, <b>predatory pricing</b> (pricing below cost to drive rivals out) and <b>limit pricing</b> (setting a low price to deter entry).</li>
<li>Non-price competition: advertising, branding, loyalty cards, quality and after-sales service.</li>
<li>Oligopoly can be dynamically efficient (supernormal profits funding R&D) but often allocatively and productively inefficient.</li>
</ul>
`,
  quiz: [
    { q: "A key feature of monopolistic competition is…", o: ["Differentiated products and low barriers to entry", "One firm", "Homogeneous products and high barriers", "Interdependence"], a: 0, e: "E.g. many restaurants, each slightly different." },
    { q: "In the long run in monopolistic competition, firms make…", o: ["Normal profit", "Supernormal profit", "Losses", "Monopoly profit"], a: 0, e: "Entry erodes profit until AR is tangent to AC." },
    { q: "The key feature of oligopoly is…", o: ["Interdependence between firms", "Perfect information", "No barriers to entry", "Many small firms"], a: 0, e: "Each firm must consider rivals' reactions." },
    { q: "Shares: 30%, 25%, 20%, 10%. 3-firm concentration ratio?", o: ["75%", "85%", "55%", "30%"], a: 0, e: R`\(30 + 25 + 20 = 75\%\).` },
    { q: "OPEC is an example of…", o: ["A cartel (overt collusion)", "Tacit collusion", "Perfect competition", "A monopsony"], a: 0, e: "Members agree output quotas." },
    { q: "Price leadership is a form of…", o: ["Tacit collusion", "Overt collusion", "Predatory pricing", "Perfect competition"], a: 0, e: "Firms follow a leader without a formal agreement." },
    { q: "Predatory pricing means…", o: ["Setting price below cost to drive rivals out", "Setting a high price", "Charging different prices", "Following a price leader"], a: 0, e: "Prices rise again once rivals have left." },
    { q: "Limit pricing aims to…", o: ["Deter new entrants", "Maximise short-run profit", "Raise prices", "Encourage entry"], a: 0, e: "Price is kept low enough to make entry unattractive." },
    { q: "The prisoner's dilemma shows why…", o: ["Collusive agreements may break down", "Monopolies are efficient", "Prices are rigid", "Firms always cooperate"], a: 0, e: "Each has an incentive to cheat." }
  ],
  flashcards: [
    ["Monopolistic competition", "Many firms, differentiated products, low barriers"],
    ["Oligopoly", "Few firms, high barriers, interdependence"],
    ["n-firm concentration ratio", "Combined market share of the largest n firms"],
    ["Overt collusion", "Formal agreement (cartel)"],
    ["Tacit collusion", "Informal, e.g. price leadership"],
    ["Prisoner's dilemma", "Each firm's incentive to cheat leaves both worse off"],
    ["Predatory pricing", "Price below cost to drive out rivals"],
    ["Limit pricing", "Low price to deter entry"]
  ]
});

S2Data.add({
  id: "3e", group: 3, title: "Monopoly, monopsony and contestability",
  summary: "The monopoly model, price discrimination, natural monopoly, monopsony power and contestable markets.",
  notes: R`
<h3>Monopoly</h3>
<ul>
<li>A pure monopoly is a single seller; in the UK, a firm with over 25% market share has <b>monopoly power</b>.</li>
<li>High barriers to entry: economies of scale, legal barriers (patents), control of resources, brand loyalty, sunk costs.</li>
<li>Profit maximised where MC = MR; price is read off the AR curve. It can make <b>supernormal profit in the long run</b>.</li>
</ul>
<div class="box box-key"><span class="box-title">Draw it</span>Downward-sloping AR with MR twice as steep. MC cuts MR at \(Q_m\); price \(P_m\) is on AR above \(Q_m\). Supernormal profit is the rectangle \((P_m - \text{AC}) \times Q_m\).</div>
<table><tr><th>Costs of monopoly</th><th>Benefits of monopoly</th></tr>
<tr><td>Higher prices and lower output than competition</td><td>Economies of scale can lower costs</td></tr>
<tr><td>Allocatively inefficient (\(P > \text{MC}\)) and productively inefficient</td><td>Supernormal profit can fund R&D (dynamic efficiency)</td></tr>
<tr><td>Loss of consumer surplus; X-inefficiency</td><td>Can compete internationally</td></tr></table>
<h3>Price discrimination</h3>
<ul>
<li>Charging different prices to different consumers for the same good, for reasons not related to cost.</li>
<li>Conditions: monopoly power, the ability to separate markets with different PEDs, and preventing resale (no seepage).</li>
<li>Higher price where demand is inelastic (e.g. peak train fares), lower where it's elastic (off-peak, students).</li>
<li>Effects: producer gains consumer surplus; some consumers gain who would otherwise be priced out.</li>
</ul>
<h3>Natural monopoly</h3>
<p>Where economies of scale are so large that one firm can supply the whole market at a lower cost than two or more firms (e.g. water pipes, rail track). LRAC is still falling at the market's output.</p>
<h3>Monopsony</h3>
<ul>
<li>A single (or dominant) <b>buyer</b>, e.g. supermarkets buying from farmers, the NHS employing nurses.</li>
<li>Can push down prices paid to suppliers or wages, raising its profit; may pass on lower prices to consumers. Suppliers' incomes may fall.</li>
</ul>
<h3>Contestability</h3>
<ul>
<li>A <b>contestable market</b> has low barriers to entry and exit and <b>low sunk costs</b> (costs that can't be recovered on exit).</li>
<li>The threat of 'hit-and-run' entry keeps incumbents' prices and profits down, even with few firms.</li>
</ul>
`,
  quiz: [
    { q: "In the UK, a firm has monopoly power with a market share over…", o: ["25%", "50%", "10%", "75%"], a: 0, e: "That's the legal definition used by the CMA." },
    { q: "A monopolist maximises profit where…", o: ["MC = MR", "P = MC", "AR = AC", "MR = 0"], a: 0, e: "It then sets price from the AR curve." },
    { q: "A monopoly is allocatively inefficient because…", o: ["P > MC", "P = MC", "MC = AC", "It makes normal profit"], a: 0, e: "Consumers value extra units more than they cost to make." },
    { q: "A benefit of monopoly is…", o: ["Supernormal profit can fund R&D", "Lower prices always", "Allocative efficiency", "Perfect information"], a: 0, e: "This can lead to dynamic efficiency." },
    { q: "Which is a condition for price discrimination?", o: ["Markets can be separated with different PEDs", "Perfect competition", "Identical PEDs", "Resale is easy"], a: 0, e: "Plus monopoly power and no seepage." },
    { q: "Under price discrimination, the higher price is charged where demand is…", o: ["Inelastic", "Elastic", "Perfectly elastic", "Unitary"], a: 0, e: "Those consumers are less responsive to price." },
    { q: "A natural monopoly exists when…", o: ["One firm can supply the market at lower cost than several", "The government owns it", "It's in a natural resource industry", "There are no economies of scale"], a: 0, e: "E.g. water supply networks." },
    { q: "A monopsony is…", o: ["A dominant buyer", "A dominant seller", "A cartel", "A contestable market"], a: 0, e: "E.g. supermarkets buying milk from farmers." },
    { q: "A contestable market has…", o: ["Low sunk costs and easy entry and exit", "High barriers to entry", "One firm only", "No competition threat"], a: 0, e: "Threat of entry disciplines incumbents." }
  ],
  flashcards: [
    ["Monopoly power (UK)", "Over 25% market share"],
    ["Monopoly profit max", "MC = MR; price from AR"],
    ["Monopoly costs", "Higher price, lower output, P > MC, X-inefficiency"],
    ["Monopoly benefits", "Economies of scale, R&D, international competitiveness"],
    ["Price discrimination conditions", "Monopoly power, separate markets with different PEDs, no resale"],
    ["Natural monopoly", "One firm supplies at lowest cost due to huge economies of scale"],
    ["Monopsony", "Dominant buyer that can push down prices or wages"],
    ["Contestable market", "Low barriers and low sunk costs"]
  ]
});

S2Data.add({
  id: "3f", group: 3, title: "The labour market",
  summary: "Demand for and supply of labour, elasticities, wage determination in competitive and non-competitive markets, and labour market flexibility.",
  notes: R`
<h3>Demand for labour</h3>
<ul>
<li>Labour demand is a <b>derived demand</b>: it depends on demand for the products labour makes.</li>
<li>Firms hire up to where the <b>marginal revenue product</b> of labour equals the wage: \(\text{MRP} = \text{MP} \times \text{MR}\).</li>
<li>Shifts: productivity, demand for the product, price of the product, cost of capital substitutes, non-wage costs (e.g. employer NICs).</li>
<li><b>Elasticity of demand for labour</b> is higher when labour is easy to replace with capital, labour costs are a large share of total costs, product demand is elastic, and in the long run.</li>
</ul>
<h3>Supply of labour</h3>
<ul>
<li>Supply to an occupation slopes up: higher wages attract more workers.</li>
<li>Shifts: wages in other occupations, non-monetary factors (job satisfaction, hours, holidays), qualifications needed, migration, population, trade union rules.</li>
<li><b>Elasticity of supply of labour</b> is lower when long training or special skills are needed, and higher for unskilled jobs and in the long run.</li>
</ul>
<h3>Wage determination</h3>
<ul>
<li>In a competitive labour market, wages are set where labour demand equals supply.</li>
<li>Wage differentials arise from different skills, training, productivity, demand, non-monetary benefits and discrimination.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A worker adds 12 units a day; each sells for £10 with MR = £10. \(\text{MRP} = 12 \times 10 = £120\) a day: the firm will hire them if the daily wage is at or below £120.</div>
<h3>Non-competitive markets</h3>
<ul>
<li><b>Monopsony employer</b>: a single dominant employer can pay below the competitive wage and employ fewer workers.</li>
<li><b>Trade unions</b> bargain collectively for higher wages; in a monopsony they can raise wages <b>and</b> employment towards the competitive level.</li>
</ul>
<h3>Labour market flexibility</h3>
<ul>
<li>Numerical (zero-hours contracts, part-time), functional (multi-skilled workers), wage flexibility.</li>
<li>Labour <b>immobility</b>: <b>occupational</b> (lack of skills) and <b>geographical</b> (housing costs, family ties). These cause structural unemployment.</li>
<li>Flexibility helps firms adjust but can reduce job security for workers.</li>
</ul>
`,
  quiz: [
    { q: "Demand for labour is a derived demand because…", o: ["It depends on demand for the product", "Workers choose to work", "Wages are fixed", "It is set by government"], a: 0, e: "No demand for cars means no demand for car workers." },
    { q: "MRP = …", o: ["MP × MR", "MR ÷ MP", "Wage × hours", "TR ÷ workers"], a: 0, e: "The extra revenue from one more worker." },
    { q: "Which would shift the demand for labour right?", o: ["A rise in labour productivity", "A rise in wages", "Cheaper machinery replacing workers", "Higher employer NICs"], a: 0, e: "Each worker adds more revenue." },
    { q: "Supply of surgeons is inelastic mainly because…", o: ["Training takes many years", "Wages are high", "Demand is high", "It's a public sector job"], a: 0, e: "New supply can't be created quickly." },
    { q: "Which is a non-monetary factor affecting labour supply?", o: ["Job satisfaction", "The wage rate", "Productivity", "Demand for the product"], a: 0, e: "Pleasant jobs attract more workers at any wage." },
    { q: "A monopsony employer tends to pay…", o: ["Lower wages and employ fewer workers", "Higher wages", "The competitive wage", "Above MRP"], a: 0, e: "It uses its buying power." },
    { q: "Geographical immobility of labour is caused by…", o: ["High housing costs in growing regions", "Lack of skills", "High wages", "Zero-hours contracts"], a: 0, e: "Also family ties and lack of information." },
    { q: "A zero-hours contract is an example of…", o: ["Numerical flexibility", "Functional flexibility", "Occupational immobility", "Monopsony"], a: 0, e: "Firms vary the number of hours." },
    { q: "Demand for labour is more elastic when…", o: ["Labour is easily replaced by machines", "Labour costs are a tiny share of costs", "Product demand is inelastic", "In the short run"], a: 0, e: "Firms can switch to capital if wages rise." }
  ],
  flashcards: [
    ["Derived demand", "Labour demand depends on product demand"],
    ["MRP", R`\(\text{MP} \times \text{MR}\)`],
    ["Labour demand shifters", "Productivity, product demand, cost of capital, non-wage costs"],
    ["Labour supply shifters", "Other wages, non-monetary factors, qualifications, migration"],
    ["Inelastic labour supply", "Long training or rare skills"],
    ["Monopsony employer", "Lower wages and employment than competition"],
    ["Occupational vs geographical immobility", "Lack of skills vs inability to move area"],
    ["Labour market flexibility", "Numerical, functional and wage flexibility"]
  ]
});

S2Data.add({
  id: "3g", group: 3, title: "Government intervention in markets",
  summary: "Competition policy, regulation of mergers and monopolies, price caps, protecting suppliers and employees, nationalisation and privatisation, and the impact of intervention.",
  notes: R`
<h3>Why intervene?</h3>
<p>To control mergers, monopolies and collusion; protect consumers, suppliers and employees; promote competition and contestability.</p>
<h3>Methods</h3>
<table><tr><th>Method</th><th>Detail</th></tr>
<tr><td>Competition policy</td><td>The <b>Competition and Markets Authority (CMA)</b> investigates mergers that would create over 25% share or substantially lessen competition, and fines cartels (up to 10% of global turnover)</td></tr>
<tr><td>Price regulation</td><td>Regulators (Ofgem, Ofwat, Ofcom) cap prices with <b>RPI − X</b>: prices may rise by inflation minus an efficiency factor X. <b>RPI + K</b> allows extra for investment (water)</td></tr>
<tr><td>Profit regulation</td><td>Rate-of-return limits on profit</td></tr>
<tr><td>Quality standards</td><td>Minimum service levels, with fines</td></tr>
<tr><td>Performance targets</td><td>E.g. train punctuality</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>RPI is 4% and X = 1.5. Prices may rise by at most \(4 - 1.5 = 2.5\%\).</div>
<h3>Promoting competition and contestability</h3>
<ul>
<li>Enabling small businesses (start-up loans, tax relief), <b>deregulation</b>, <b>competitive tendering</b> for government contracts, <b>privatisation</b>.</li>
<li><b>Nationalisation</b>: bringing firms into state ownership (e.g. rail franchises after failures, Northern Rock in 2008).</li>
</ul>
<h3>Protecting suppliers and employees</h3>
<ul>
<li>The Groceries Code Adjudicator protects suppliers from supermarket monopsony power.</li>
<li>Employment law, the National Living Wage, health and safety rules.</li>
</ul>
<h3>Impact and limits of intervention</h3>
<ul>
<li>Effects on prices, efficiency, quality and choice.</li>
<li>Limits: <b>regulatory capture</b> (regulators too close to firms), <b>asymmetric information</b> (firms know more about their costs), and high administrative costs.</li>
</ul>
`,
  quiz: [
    { q: "The UK body that investigates mergers and cartels is…", o: ["The CMA", "The Bank of England", "Ofsted", "The OBR"], a: 0, e: "The Competition and Markets Authority." },
    { q: "Under RPI − X, if RPI = 5% and X = 2, prices can rise by…", o: ["3%", "7%", "2%", "5%"], a: 0, e: R`\(5 - 2 = 3\%\).` },
    { q: "The X in RPI − X represents…", o: ["Expected efficiency gains", "Extra investment", "Exports", "Excess profit"], a: 0, e: "Firms must cut real prices by X% a year." },
    { q: "RPI + K is used in the water industry to…", o: ["Fund investment", "Cut prices", "Reduce competition", "Pay dividends"], a: 0, e: "K allows extra price rises for infrastructure." },
    { q: "Regulatory capture means…", o: ["Regulators act in the industry's interest", "Firms are nationalised", "Regulators impose fines", "Markets become contestable"], a: 0, e: "It weakens regulation." },
    { q: "Competitive tendering means…", o: ["Private firms bid to provide public services", "Firms merge", "Prices are capped", "The state owns firms"], a: 0, e: "It introduces competition for the contract." },
    { q: "Nationalisation is…", o: ["Transfer of a firm to state ownership", "Selling state firms", "Removing regulations", "Capping prices"], a: 0, e: "The opposite of privatisation." },
    { q: "The Groceries Code Adjudicator protects…", o: ["Suppliers from supermarket buying power", "Consumers from high prices", "Workers' wages", "Banks"], a: 0, e: "It tackles monopsony behaviour." },
    { q: "Asymmetric information limits regulation because…", o: ["Firms know more about their costs than regulators", "Consumers know everything", "Regulators know too much", "Prices are fixed"], a: 0, e: "So caps may be set too loosely." }
  ],
  flashcards: [
    ["CMA", "Investigates mergers, monopolies and cartels"],
    ["RPI − X", "Price cap: inflation minus efficiency factor"],
    ["RPI + K", "Allows extra price rises to fund investment"],
    ["Competitive tendering", "Firms bid for public contracts"],
    ["Privatisation vs nationalisation", "Private ownership vs state ownership"],
    ["Regulatory capture", "Regulator serves industry interests"],
    ["Limits of regulation", "Capture, asymmetric information, admin costs"],
    ["Protecting suppliers", "Groceries Code Adjudicator"]
  ]
});

S2Data.detail("3a", { mistakes: ["Mixing up backward and forward vertical integration: backward is towards suppliers."], tips: ["Learn the three conditions: MC = MR, MR = 0 and AC = AR, and mark them on one diagram."], fact: "The 2023 merger of Vodafone and Three UK was approved by the CMA in 2024 only after investment commitments." });
S2Data.detail("3b", { mistakes: ["Thinking diminishing returns apply in the long run: that's diseconomies of scale."], tips: ["Draw MC through the lowest points of AVC and AC."], fact: "Henry Ford's moving assembly line cut the time to build a Model T from over 12 hours to about 90 minutes." });
S2Data.detail("3c", { mistakes: ["Saying perfectly competitive firms make zero profit in the accounting sense: they make normal profit."], tips: ["Use two side-by-side diagrams: market and firm."], fact: "The foreign exchange market trades more than $7 trillion a day, and is often used as an example close to perfect competition." });
S2Data.detail("3d", { mistakes: ["Calculating a concentration ratio with the wrong number of firms."], tips: ["In game theory, find each firm's best response to each choice by the other."], fact: "OPEC was founded in 1960 and its members agree production quotas to influence the world oil price." });
S2Data.detail("3e", { mistakes: ["Reading the monopoly price off the MC curve: it's read from the AR curve."], tips: ["Evaluate monopoly: costs vs benefits, and whether the market is contestable."], fact: "Rail fares in the UK are a classic example of price discrimination: peak and off-peak tickets for the same seat." });
S2Data.detail("3f", { mistakes: ["Forgetting that labour demand is derived: always link it to product demand."], tips: ["Use MRP to explain why productivity affects wages."], fact: "The UK National Living Wage rose to £12.21 an hour for over-21s in April 2025." });
S2Data.detail("3g", { mistakes: ["Confusing RPI − X (efficiency) with RPI + K (investment)."], tips: ["Evaluate regulation with capture, information gaps and unintended consequences."], fact: "Ofgem's energy price cap was introduced in January 2019 to protect households on default tariffs." });
