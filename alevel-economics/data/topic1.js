/* A-level Economics² — Theme 1: Introduction to markets and market failure */

S2Data.add({
  id: "1a", group: 1, title: "The nature of economics",
  summary: "Economics as a social science, positive and normative statements, the economic problem, PPFs, specialisation and economic systems.",
  notes: R`
<h3>Economics as a social science</h3>
<ul>
<li>Economists build <b>models</b> using simplifying assumptions. The key one is <b><i>ceteris paribus</i></b>: all other things stay equal, so one cause can be isolated.</li>
<li>Unlike natural scientists, economists can't easily run controlled experiments on whole economies, and people don't always behave predictably.</li>
</ul>
<h3>Positive and normative statements</h3>
<table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Positive</td><td>Can be tested against evidence (true or false)</td><td>"UK inflation was 2.3% last year."</td></tr>
<tr><td>Normative</td><td>A value judgement: what <b>should</b> happen</td><td>"The government should raise the minimum wage."</td></tr></table>
<p>Value judgements influence policy decisions: two economists can agree on the facts but recommend different policies.</p>
<h3>The economic problem</h3>
<ul>
<li><b>Scarcity</b>: wants are unlimited but resources are finite, so choices must be made.</li>
<li><b>Factors of production</b>: land (rent), labour (wages), capital (interest), enterprise (profit).</li>
<li><b>Opportunity cost</b>: the value of the next best alternative forgone.</li>
<li>Renewable resources (e.g. wind, timber if managed) can be replenished; non-renewable ones (oil, coal) can't.</li>
</ul>
<h3>Production possibility frontiers (PPFs)</h3>
<div class="box box-key"><span class="box-title">Draw it</span>Good A on one axis, good B on the other. A curve bowed out from the origin shows the maximum combinations possible with all resources fully and efficiently used.</div>
<ul>
<li>A point <b>on</b> the PPF is productively efficient; <b>inside</b> shows unemployed or inefficiently used resources; <b>outside</b> is unattainable now.</li>
<li>Moving along the curve shows opportunity cost. It's bowed out because resources aren't equally suited to both goods, so opportunity cost rises.</li>
<li>An <b>outward shift</b> shows economic growth (more or better resources, new technology). A shift of one end only shows a change in productivity in one good.</li>
<li>Capital versus consumer goods: producing more capital goods now shifts the PPF further out in future.</li>
</ul>
<h3>Specialisation and the division of labour</h3>
<ul>
<li>Adam Smith's pin factory: splitting production into tasks raises <b>productivity</b>.</li>
<li>Advantages: workers become skilled and quick, less time switching tasks, machinery can be used. Disadvantages: boredom, low motivation, over-dependence, loss of craft skills.</li>
<li>Specialisation needs <b>exchange</b>, so money is needed: a medium of exchange, measure of value, store of value and method of deferred payment. Barter needs a double coincidence of wants.</li>
</ul>
<h3>Economic systems</h3>
<table><tr><th>System</th><th>How resources are allocated</th><th>Thinkers</th></tr>
<tr><td>Free market</td><td>Price mechanism; private ownership</td><td>Adam Smith, Friedrich Hayek</td></tr>
<tr><td>Command</td><td>State planning and ownership</td><td>Karl Marx</td></tr>
<tr><td>Mixed</td><td>Market plus government provision and regulation</td><td>Most real economies, e.g. the UK</td></tr></table>
<p>Free markets give incentives and choice but can produce inequality and market failure. Command economies can reduce inequality but suffer from information problems and weak incentives.</p>
`,
  quiz: [
    { q: "Which is a normative statement?", o: ["The government should cut fuel duty", "Fuel duty raised £25 billion last year", "Unemployment fell by 0.2%", "Petrol prices rose 5%"], a: 0, e: "'Should' signals a value judgement; the others can be checked against data." },
    { q: "Ceteris paribus means…", o: ["All other things being equal", "Prices are fixed", "People are irrational", "Markets always clear"], a: 0, e: "It lets economists isolate the effect of one variable." },
    { q: "Opportunity cost is…", o: ["The next best alternative forgone", "The money price of a good", "Total cost of production", "The cost of all alternatives"], a: 0, e: "Only the single next best option counts." },
    { q: "A point inside a PPF shows…", o: ["Unemployed or inefficiently used resources", "Unattainable output", "Productive efficiency", "Economic growth"], a: 0, e: "More of both goods could be made with the same resources." },
    { q: "An outward shift of the whole PPF shows…", o: ["Economic growth", "Rising unemployment", "Higher opportunity cost", "A recession"], a: 0, e: "More or better resources raise potential output." },
    { q: "A PPF is bowed out because…", o: ["Resources aren't equally suited to both goods", "Prices fall as output rises", "There is unemployment", "Demand is unlimited"], a: 0, e: "Opportunity cost rises as more specialised resources are switched." },
    { q: "Which is a function of money?", o: ["Store of value", "Factor of production", "Public good", "Opportunity cost"], a: 0, e: "Also medium of exchange, measure of value and method of deferred payment." },
    { q: "A disadvantage of the division of labour is…", o: ["Repetitive work lowers motivation", "Higher productivity", "Lower unit costs", "Workers become skilled"], a: 0, e: "The others are advantages." },
    { q: "Which thinker is associated with the free market?", o: ["Adam Smith", "Karl Marx", "Lenin", "Mao Zedong"], a: 0, e: "Smith's 'invisible hand' of self-interest allocates resources." }
  ],
  flashcards: [
    ["Positive statement", "Testable against evidence"],
    ["Normative statement", "Value judgement: what should be"],
    ["Economic problem", "Unlimited wants, finite resources: scarcity"],
    ["Opportunity cost", "Next best alternative forgone"],
    ["Point inside a PPF", "Unemployed or inefficient resources"],
    ["Outward PPF shift", "Economic growth (more or better resources)"],
    ["Functions of money", "Medium of exchange, measure of value, store of value, deferred payment"],
    ["Mixed economy", "Price mechanism plus state provision and regulation"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Demand and elasticities of demand",
  summary: "Rational decision making, demand curves, movements and shifts, and price, income and cross elasticity of demand.",
  notes: R`
<h3>Rational decision making</h3>
<p>Traditional theory assumes <b>consumers maximise utility</b> (satisfaction) and <b>firms maximise profit</b>. <b>Diminishing marginal utility</b>: each extra unit consumed adds less satisfaction, which helps explain why demand curves slope down.</p>
<h3>Demand</h3>
<ul>
<li><b>Demand</b>: the quantity consumers are willing and able to buy at each price, over a period of time.</li>
<li>A change in <b>price</b> causes a <b>movement along</b> the curve: an extension (price falls) or contraction (price rises).</li>
<li>Other factors <b>shift</b> the curve: income, prices of substitutes and complements, tastes, advertising, population, interest rates.</li>
</ul>
<h3>Price elasticity of demand (PED)</h3>
<p>\[\text{PED} = \frac{\%\Delta Q_d}{\%\Delta P}\]</p>
<table><tr><th>Value (ignoring sign)</th><th>Meaning</th></tr>
<tr><td>\(> 1\)</td><td>Price elastic</td></tr>
<tr><td>\(< 1\)</td><td>Price inelastic</td></tr>
<tr><td>\(= 1\)</td><td>Unitary elastic</td></tr>
<tr><td>\(0\) / \(\infty\)</td><td>Perfectly inelastic / perfectly elastic</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>Price rises from £10 to £12; quantity falls from 500 to 450.
<ol><li>\(\%\Delta Q = \dfrac{-50}{500} \times 100 = -10\%\).</li>
<li>\(\%\Delta P = \dfrac{2}{10} \times 100 = +20\%\).</li>
<li>\(\text{PED} = \dfrac{-10}{20} = -0.5\): inelastic.</li></ol>
Total revenue rises from £5000 to £5400, as expected when demand is inelastic and price rises.</div>
<ul>
<li><b>Determinants</b>: number and closeness of substitutes, necessity or luxury, share of income, habit/addiction, time period, broad or narrow definition of the market.</li>
<li><b>Revenue link</b>: if demand is inelastic, raising price raises total revenue; if elastic, cutting price raises revenue. Revenue is maximised at unitary elasticity.</li>
<li>PED changes along a straight-line demand curve: elastic at high prices, inelastic at low prices.</li>
</ul>
<h3>Income elasticity of demand (YED)</h3>
<p>\[\text{YED} = \frac{\%\Delta Q_d}{\%\Delta Y}\]</p>
<p>Positive: <b>normal good</b> (above 1: luxury, income elastic). Negative: <b>inferior good</b> (e.g. value-brand food, bus travel).</p>
<h3>Cross elasticity of demand (XED)</h3>
<p>\[\text{XED} = \frac{\%\Delta Q_{d,A}}{\%\Delta P_B}\]</p>
<p>Positive: <b>substitutes</b> (the closer, the larger). Negative: <b>complements</b>. Near zero: unrelated goods.</p>
<p>Firms use elasticities for pricing; governments use PED to choose what to tax (inelastic goods raise more revenue).</p>
`,
  quiz: [
    { q: "A fall in the price of a good causes…", o: ["An extension of demand", "A shift right of demand", "A contraction of demand", "A shift left of demand"], a: 0, e: "Price changes move along the curve; other factors shift it." },
    { q: "Price rises 20%, quantity falls 10%. PED = ?", o: ["−0.5", "−2", "−0.2", "−10"], a: 0, e: R`\(\dfrac{-10}{20} = -0.5\).` },
    { q: "Demand is price inelastic. Raising price will…", o: ["Increase total revenue", "Reduce total revenue", "Leave revenue unchanged", "Make demand elastic"], a: 0, e: "Quantity falls proportionally less than price rises." },
    { q: "YED of −0.4 shows the good is…", o: ["Inferior", "A luxury", "A normal necessity", "A complement"], a: 0, e: "Demand falls as income rises." },
    { q: "XED between two goods is +1.8. They are…", o: ["Close substitutes", "Complements", "Unrelated", "Inferior goods"], a: 0, e: "A higher price of B pushes buyers to A." },
    { q: "Which makes demand more price elastic?", o: ["Many close substitutes", "Addiction", "A small share of income", "Being a necessity"], a: 0, e: "Consumers can switch easily." },
    { q: "Income rises 10%; demand for holidays rises 25%. YED = ?", o: ["2.5", "0.4", "−2.5", "15"], a: 0, e: R`\(\dfrac{25}{10} = 2.5\): a luxury.` },
    { q: "Diminishing marginal utility means…", o: ["Each extra unit gives less extra satisfaction", "Total utility falls", "Prices fall over time", "Consumers are irrational"], a: 0, e: "It helps explain why demand curves slope down." },
    { q: "Total revenue is maximised where PED is…", o: ["Unitary (−1)", "Zero", "Perfectly elastic", "Positive"], a: 0, e: "A small price change then leaves revenue unchanged." }
  ],
  flashcards: [
    ["PED formula", R`\(\dfrac{\%\Delta Q_d}{\%\Delta P}\)`],
    ["YED formula", R`\(\dfrac{\%\Delta Q_d}{\%\Delta Y}\)`],
    ["XED formula", R`\(\dfrac{\%\Delta Q_{d,A}}{\%\Delta P_B}\)`],
    ["Inelastic demand and price rise", "Total revenue rises"],
    ["Negative YED", "Inferior good"],
    ["YED > 1", "Luxury (income elastic normal good)"],
    ["Positive XED / negative XED", "Substitutes / complements"],
    ["Determinants of PED", "Substitutes, necessity, share of income, habit, time, market definition"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Supply, price determination and the price mechanism",
  summary: "Supply and PES, equilibrium, the functions of the price mechanism, and consumer and producer surplus.",
  notes: R`
<h3>Supply</h3>
<ul>
<li><b>Supply</b>: the quantity producers are willing and able to sell at each price. It slopes up because higher prices make production more profitable and cover rising marginal costs.</li>
<li>Price changes move along the curve. <b>Shifts</b> come from costs of production (wages, raw materials), productivity, technology, indirect taxes and subsidies, number of firms, weather, expectations.</li>
</ul>
<h3>Price elasticity of supply (PES)</h3>
<p>\[\text{PES} = \frac{\%\Delta Q_s}{\%\Delta P}\]</p>
<p>Always positive. Elastic if \(> 1\). Determinants: spare capacity, stocks, ease of switching factors, time period (supply is more elastic in the long run), perishability.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Price rises from £4 to £5 and quantity supplied rises from 800 to 1200.
<ol><li>\(\%\Delta Q_s = \dfrac{400}{800} \times 100 = 50\%\); \(\%\Delta P = \dfrac14 \times 100 = 25\%\).</li>
<li>\(\text{PES} = \dfrac{50}{25} = 2\): elastic.</li></ol></div>
<h3>Equilibrium</h3>
<div class="box box-key"><span class="box-title">Draw it</span>Price on the vertical axis, quantity on the horizontal. Demand slopes down, supply slopes up; they cross at equilibrium price \(P_e\) and quantity \(Q_e\).</div>
<ul>
<li>Above equilibrium there's <b>excess supply</b>, so price falls. Below it there's <b>excess demand</b>, so price rises.</li>
<li>Shift and explain: e.g. a rise in demand creates excess demand at the old price, price rises, supply extends, and a new higher \(P_e\) and \(Q_e\) result.</li>
<li><b>Joint supply</b> (beef and leather), <b>composite demand</b> (milk for cheese or butter), <b>derived demand</b> (labour derived from demand for output).</li>
</ul>
<h3>Functions of the price mechanism</h3>
<table><tr><th>Function</th><th>Meaning</th></tr>
<tr><td>Rationing</td><td>Higher prices ration scarce goods to those willing and able to pay</td></tr>
<tr><td>Incentive</td><td>Higher prices encourage firms to supply more</td></tr>
<tr><td>Signalling</td><td>Price changes signal where resources are wanted</td></tr></table>
<p>Prices work in local, national and global markets (e.g. oil, coffee).</p>
<h3>Consumer and producer surplus</h3>
<ul>
<li><b>Consumer surplus</b>: the difference between what consumers are willing to pay and what they actually pay; the area below demand and above price.</li>
<li><b>Producer surplus</b>: the difference between the price received and the lowest price producers would accept; the area above supply and below price.</li>
<li>A rise in demand increases producer surplus; a fall in supply (higher price) reduces consumer surplus.</li>
</ul>
`,
  quiz: [
    { q: "A rise in wages for a firm's workers will…", o: ["Shift supply left", "Shift supply right", "Extend supply", "Shift demand left"], a: 0, e: "Higher costs mean less is supplied at every price." },
    { q: "Price rises 10%, quantity supplied rises 30%. PES = ?", o: ["3", "0.33", "−3", "20"], a: 0, e: R`\(\dfrac{30}{10} = 3\): elastic.` },
    { q: "Supply tends to be more elastic when…", o: ["Firms have spare capacity", "Goods are perishable", "It's the very short run", "Factors are hard to switch"], a: 0, e: "Output can rise quickly without much extra cost." },
    { q: "If the price is above equilibrium there is…", o: ["Excess supply", "Excess demand", "A shortage", "Equilibrium"], a: 0, e: "Firms want to sell more than buyers want; price falls." },
    { q: "The rationing function of price means…", o: ["Higher prices allocate scarce goods to those able and willing to pay", "Prices encourage firms to enter", "Prices signal changes", "Governments set prices"], a: 0, e: "Incentive and signalling are the other two functions." },
    { q: "Consumer surplus is the area…", o: ["Below demand and above the price", "Above supply and below price", "Under the supply curve", "Between the two curves to the right"], a: 0, e: "It's what consumers are willing to pay minus what they pay." },
    { q: "Beef and leather are in…", o: ["Joint supply", "Composite demand", "Competitive demand", "Derived demand"], a: 0, e: "Producing one produces the other." },
    { q: "A rise in demand (supply unchanged) causes…", o: ["Higher price and quantity", "Lower price, higher quantity", "Higher price, lower quantity", "No change"], a: 0, e: "Excess demand pushes price up and supply extends." },
    { q: "Demand for steelworkers is…", o: ["Derived demand", "Joint demand", "Composite demand", "Composite supply"], a: 0, e: "It depends on demand for steel." }
  ],
  flashcards: [
    ["PES formula", R`\(\dfrac{\%\Delta Q_s}{\%\Delta P}\)`],
    ["Determinants of PES", "Spare capacity, stocks, time, factor mobility, perishability"],
    ["Excess supply", "Price above equilibrium: price falls"],
    ["Price mechanism functions", "Rationing, incentive, signalling"],
    ["Consumer surplus", "Willing to pay minus price paid"],
    ["Producer surplus", "Price received minus minimum acceptable"],
    ["Derived demand", "Demand for a factor comes from demand for its output"],
    ["Joint supply", "One good is a by-product of another"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Indirect taxes, subsidies and behavioural economics",
  summary: "Specific and ad valorem taxes, tax incidence, subsidies, and alternative views of consumer behaviour.",
  notes: R`
<h3>Indirect taxes</h3>
<ul>
<li>A <b>specific</b> (unit) tax adds a fixed amount per unit (e.g. fuel duty): supply shifts up parallel.</li>
<li>An <b>ad valorem</b> tax is a percentage of price (e.g. VAT at 20%): supply pivots, with a bigger gap at higher prices.</li>
</ul>
<div class="box box-key"><span class="box-title">Draw it: a specific tax</span>Supply shifts vertically up by the tax. Price rises from \(P_1\) to \(P_2\), quantity falls to \(Q_2\). The producer receives \(P_2 - \text{tax}\). Tax revenue = tax × \(Q_2\): a rectangle split between consumers (above \(P_1\)) and producers (below).</div>
<ul>
<li><b>Incidence</b>: the more <b>inelastic demand</b> is, the more of the tax consumers pay. The more inelastic supply is, the more producers pay.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A £2 tax raises the price from £10 to £11.50; quantity falls from 1000 to 900.
<ol><li>Consumer burden: \(11.50 - 10 = £1.50\) per unit; producer burden: \(2 - 1.50 = £0.50\).</li>
<li>Tax revenue \(= 2 \times 900 = £1800\): consumers pay \(1.50 \times 900 = £1350\), producers \(£450\).</li></ol></div>
<h3>Subsidies</h3>
<ul>
<li>A payment from government to producers that lowers costs: supply shifts down by the subsidy.</li>
<li>Price falls and quantity rises. Cost to government = subsidy × new quantity. The benefit is shared: consumers gain through a lower price, producers through a higher price received.</li>
<li>The more inelastic demand, the more consumers benefit.</li>
</ul>
<h3>Alternative views of consumer behaviour (behavioural economics)</h3>
<table><tr><th>Idea</th><th>Meaning</th></tr>
<tr><td>Bounded rationality</td><td>Limited information, time and brainpower mean people make 'good enough' choices</td></tr>
<tr><td>Bounded self-control</td><td>People lack willpower, e.g. overspending or under-saving</td></tr>
<tr><td>Rules of thumb (heuristics)</td><td>Short cuts that save effort but cause mistakes</td></tr>
<tr><td>Anchoring</td><td>Over-relying on the first piece of information (e.g. a 'was' price)</td></tr>
<tr><td>Availability bias</td><td>Judging likelihood by how easily examples come to mind</td></tr>
<tr><td>Social norms</td><td>Doing what others do</td></tr>
<tr><td>Altruism and fairness</td><td>People sometimes act for others or punish unfairness (ultimatum game)</td></tr></table>
<p><b>Nudges</b> change the choice architecture without banning options: default pension enrolment, placing healthy food at eye level, framing.</p>
`,
  quiz: [
    { q: "VAT is an example of…", o: ["An ad valorem tax", "A specific tax", "A direct tax", "A subsidy"], a: 0, e: "It's a percentage of the price." },
    { q: "A specific tax shifts supply…", o: ["Up by the amount of the tax, parallel", "Down by the tax", "Up, pivoting", "Right"], a: 0, e: "A fixed amount per unit at every quantity." },
    { q: "Consumers bear most of a tax when demand is…", o: ["Price inelastic", "Price elastic", "Perfectly elastic", "Unitary"], a: 0, e: "They keep buying, so firms can pass the tax on." },
    { q: "£1 tax raises the price from £5 to £5.80. Consumer share per unit?", o: ["£0.80", "£0.20", "£1", "£5.80"], a: 0, e: R`\(5.80 - 5.00 = 0.80\).` },
    { q: "A subsidy to producers will…", o: ["Lower price and raise quantity", "Raise price and quantity", "Lower quantity", "Shift demand"], a: 0, e: "Costs fall, so supply shifts right (down)." },
    { q: "Cost of a £2 subsidy if 5000 units are sold after it?", o: ["£10 000", "£2500", "£5000", "£7000"], a: 0, e: R`\(2 \times 5000 = £10\,000\).` },
    { q: "Automatic enrolment in pensions is an example of…", o: ["A nudge using defaults", "A tax", "Bounded rationality", "Anchoring by firms"], a: 0, e: "People must opt out, so inertia increases saving." },
    { q: "A shop showing 'was £100, now £60' uses…", o: ["Anchoring", "Altruism", "Availability bias", "Bounded self-control"], a: 0, e: "The first price anchors the shopper's judgement of value." },
    { q: "Bounded rationality means…", o: ["Decisions are limited by information, time and ability", "People are fully rational", "People only act for others", "Firms maximise sales"], a: 0, e: "People 'satisfice' instead of fully optimising." }
  ],
  flashcards: [
    ["Specific vs ad valorem tax", "Fixed amount per unit vs percentage of price"],
    ["Tax incidence", "Inelastic side bears more of the tax"],
    ["Tax revenue", R`\(\text{tax per unit} \times \text{new quantity}\)`],
    ["Subsidy cost", R`\(\text{subsidy per unit} \times \text{new quantity}\)`],
    ["Bounded rationality", "Limited information, time, ability"],
    ["Anchoring", "Over-relying on the first figure seen"],
    ["Availability bias", "Judging likelihood by ease of recall"],
    ["Nudge", "Changing choice architecture without banning options"]
  ]
});

S2Data.add({
  id: "1e", group: 1, title: "Market failure and externalities",
  summary: "Types of market failure, private, external and social costs and benefits, and externality diagrams.",
  notes: R`
<h3>Market failure</h3>
<p><b>Market failure</b> is when the free market misallocates resources, so social welfare isn't maximised. Types: externalities, under-provision of public goods, information gaps (and, in Theme 3, monopoly power; in Theme 4, inequality).</p>
<h3>Externalities</h3>
<ul>
<li>An <b>externality</b> is a cost or benefit to a <b>third party</b> not involved in the transaction, not reflected in the price.</li>
<li>\(\text{Social cost} = \text{private cost} + \text{external cost}\); \(\text{social benefit} = \text{private benefit} + \text{external benefit}\).</li>
<li>Society's optimum is where <b>marginal social cost = marginal social benefit</b> (MSC = MSB).</li>
</ul>
<h3>Negative production externalities</h3>
<div class="box box-key"><span class="box-title">Draw it</span>MPC (supply) and MSC above it; the gap is the marginal external cost. Demand = MPB = MSB. The market produces \(Q_m\) where MPC = MPB; the optimum is \(Q^*\) where MSC = MSB. \(Q_m > Q^*\): over-production. Shade the <b>welfare loss</b> triangle between MSC and MSB from \(Q^*\) to \(Q_m\).</div>
<p>Examples: pollution from factories, noise from airports, congestion.</p>
<h3>Positive consumption externalities</h3>
<div class="box box-key"><span class="box-title">Draw it</span>MPB (demand) with MSB above it; the gap is the marginal external benefit. Supply = MPC = MSC. The market consumes \(Q_m\) where MPB = MPC; the optimum is \(Q^*\) where MSB = MSC, so \(Q_m < Q^*\): under-consumption. The welfare loss is the triangle between MSB and MSC from \(Q_m\) to \(Q^*\).</div>
<p>Examples: education and vaccinations (benefits to others and the wider economy). <b>Negative consumption externalities</b> (e.g. smoking, alcohol) mean MSB lies below MPB and over-consumption.</p>
<h3>Why markets fail here</h3>
<ul>
<li>Consumers and producers only consider <b>private</b> costs and benefits.</li>
<li>Property rights are often missing (no one owns the air), so polluters don't pay.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Private cost of a unit is £20 and the external cost is £8. The social cost is \(20 + 8 = £28\).</div>
`,
  quiz: [
    { q: "An externality affects…", o: ["A third party outside the transaction", "Only the buyer", "Only the seller", "The government budget"], a: 0, e: "Its cost or benefit isn't in the market price." },
    { q: "Social cost = …", o: ["Private cost + external cost", "Private cost − external cost", "External cost only", "Price × quantity"], a: 0, e: "Society bears both." },
    { q: "With a negative production externality, the market…", o: ["Over-produces", "Under-produces", "Produces the optimum", "Produces nothing"], a: 0, e: "Firms ignore the external cost, so output exceeds MSC = MSB." },
    { q: "The social optimum is where…", o: ["MSC = MSB", "MPC = MPB", "MSC = MPB", "Price = 0"], a: 0, e: "All costs and benefits are included." },
    { q: "Vaccinations are an example of…", o: ["A positive consumption externality", "A negative production externality", "A public good", "A demerit good"], a: 0, e: "Others benefit through herd immunity." },
    { q: "In a positive consumption externality diagram, MSB lies…", o: ["Above MPB", "Below MPB", "On MPB", "Below MPC"], a: 0, e: "The gap is the external benefit." },
    { q: "The welfare loss triangle shows…", o: ["Net loss to society from producing the wrong quantity", "Government revenue", "Consumer surplus", "Firm profit"], a: 0, e: "It's the area between MSC and MSB over the misallocated units." },
    { q: "Private cost £50, social cost £65. External cost?", o: ["£15", "£115", "£65", "£50"], a: 0, e: R`\(65 - 50 = 15\).` },
    { q: "Why do negative externalities from pollution arise?", o: ["No one has property rights over clean air", "Prices are too low", "Demand is inelastic", "Firms are too small"], a: 0, e: "With no owner, the polluter faces no cost." }
  ],
  flashcards: [
    ["Market failure", "Misallocation of resources; welfare not maximised"],
    ["Externality", "Cost/benefit to a third party, not in the price"],
    ["Social cost", "Private cost + external cost"],
    ["Social benefit", "Private benefit + external benefit"],
    ["Social optimum", "MSC = MSB"],
    ["Negative production externality", "Over-production; MSC above MPC"],
    ["Positive consumption externality", "Under-consumption; MSB above MPB"],
    ["Welfare loss", "Triangle between MSC and MSB over misallocated output"]
  ]
});

S2Data.add({
  id: "1f", group: 1, title: "Public goods and information gaps",
  summary: "Public, private and quasi-public goods, the free-rider problem, and symmetric and asymmetric information.",
  notes: R`
<h3>Public goods</h3>
<table><tr><th>Characteristic</th><th>Meaning</th></tr>
<tr><td>Non-excludable</td><td>Once provided, no one can be stopped from benefiting</td></tr>
<tr><td>Non-rival</td><td>One person's use doesn't reduce the amount left for others</td></tr></table>
<ul>
<li>Examples: national defence, street lighting, flood defences, lighthouses.</li>
<li><b>Free-rider problem</b>: people can benefit without paying, so they won't reveal their willingness to pay; private firms can't make a profit, so the market <b>fails to provide</b> (missing market).</li>
<li><b>Private goods</b> are excludable and rival (e.g. a sandwich).</li>
<li><b>Quasi-public goods</b> have some public good features: a road is non-excludable until congested, then rival; tolls make it excludable.</li>
<li>Technology can change a good's status: e.g. encrypted TV signals made broadcasts excludable.</li>
</ul>
<h3>Information gaps</h3>
<ul>
<li><b>Symmetric information</b>: both sides know the same. <b>Asymmetric information</b>: one side knows more.</li>
<li>Sellers know more: <b>used cars</b> (Akerlof's 'market for lemons'), financial products. Buyers know more: health insurance (the buyer knows their health).</li>
<li>Consumers may under-value <b>merit goods</b> (education, healthcare) because they lack information about long-term benefits, and over-value <b>demerit goods</b> (tobacco) because they under-estimate the harm.</li>
<li><b>Moral hazard</b>: changing behaviour after a deal because someone else bears the risk (e.g. riskier driving when insured; banks 'too big to fail').</li>
<li><b>Adverse selection</b>: the riskiest people are the most likely to buy insurance.</li>
</ul>
<div class="box box-key"><span class="box-title">Evaluation</span>Information can be provided cheaply by government (labelling, campaigns), and many markets develop their own fixes: warranties, reviews, brand reputation.</div>
`,
  quiz: [
    { q: "Non-excludable means…", o: ["No one can be prevented from benefiting", "One person's use reduces another's", "It's free to produce", "Government must provide it"], a: 0, e: "That's why free-riding is possible." },
    { q: "Non-rival means…", o: ["One person's use doesn't reduce availability for others", "No one can be excluded", "There's no competition between firms", "Price is zero"], a: 0, e: "E.g. extra people under a street light don't reduce its light." },
    { q: "The free-rider problem leads to…", o: ["A missing market", "Over-provision", "Higher profits", "Excess supply"], a: 0, e: "Firms can't charge, so they won't provide." },
    { q: "Which is a public good?", o: ["National defence", "A cinema ticket", "A car", "A gym membership"], a: 0, e: "It's non-excludable and non-rival." },
    { q: "A busy toll road is best described as…", o: ["A quasi-public good", "A pure public good", "A private good only", "A merit good"], a: 0, e: "It becomes rival when congested and excludable with tolls." },
    { q: "In the used car market, the information gap usually favours…", o: ["The seller", "The buyer", "The government", "Neither"], a: 0, e: "The seller knows the car's faults." },
    { q: "Moral hazard is…", o: ["Taking more risks because someone else bears the cost", "The riskiest people buying insurance", "Lying about prices", "A public good"], a: 0, e: "It happens after the agreement is made." },
    { q: "Merit goods are under-consumed partly because…", o: ["People under-estimate their long-term benefits", "They are public goods", "They are too cheap", "They have no externalities"], a: 0, e: "Plus they often have positive externalities." },
    { q: "Adverse selection means…", o: ["High-risk people are most likely to buy insurance", "Insurers select the best customers", "Firms choose bad suppliers", "Consumers anchor on prices"], a: 0, e: "This pushes premiums up, driving out low-risk buyers." }
  ],
  flashcards: [
    ["Public good", "Non-excludable and non-rival"],
    ["Free-rider problem", "Benefiting without paying, so no market"],
    ["Quasi-public good", "Some public good features, e.g. roads"],
    ["Asymmetric information", "One party knows more than the other"],
    ["Merit good", "Under-consumed; benefits under-estimated"],
    ["Demerit good", "Over-consumed; harm under-estimated"],
    ["Moral hazard", "More risk-taking when protected from the cost"],
    ["Adverse selection", "High-risk people buy insurance most"]
  ]
});

S2Data.add({
  id: "1g", group: 1, title: "Government intervention and government failure",
  summary: "Taxes, subsidies, maximum and minimum prices, tradable pollution permits, state provision, information and regulation, and government failure.",
  notes: R`
<h3>Methods of intervention</h3>
<table><tr><th>Method</th><th>How it corrects failure</th><th>Problems</th></tr>
<tr><td>Indirect tax</td><td>Internalises a negative externality: shifts MPC up towards MSC</td><td>Hard to value the external cost; regressive; inelastic demand limits the fall in quantity</td></tr>
<tr><td>Subsidy</td><td>Encourages merit goods / positive externalities</td><td>Opportunity cost to government; firms may become inefficient</td></tr>
<tr><td>Maximum price</td><td>Set below equilibrium to keep goods affordable (e.g. rent caps)</td><td>Excess demand, queues, black markets</td></tr>
<tr><td>Minimum price</td><td>Set above equilibrium (e.g. minimum unit pricing of alcohol)</td><td>Excess supply; hits poorer consumers</td></tr>
<tr><td>Tradable pollution permits</td><td>A cap on total pollution; firms buy and sell permits</td><td>Setting the cap; permits given away free; admin costs</td></tr>
<tr><td>State provision</td><td>Provides public goods and merit goods free at the point of use</td><td>Opportunity cost; no price signal, so possible over-use</td></tr>
<tr><td>Information provision</td><td>Closes information gaps (labels, campaigns)</td><td>People may ignore it</td></tr>
<tr><td>Regulation</td><td>Laws, standards, bans (e.g. smoking ban, emissions limits)</td><td>Enforcement cost; regulatory capture</td></tr></table>
<div class="box box-key"><span class="box-title">Draw it: a maximum price</span>A horizontal line below equilibrium price. At this price, quantity demanded exceeds quantity supplied: the gap is the excess demand (shortage).</div>
<div class="box box-key"><span class="box-title">Draw it: tradable permits</span>A vertical supply of permits at the cap. Demand for permits rises with output; the permit price is set where they cross. Reducing the cap shifts supply left, raising the price and the incentive to cut pollution.</div>
<h3>Government failure</h3>
<p><b>Government failure</b>: intervention that leads to a <b>net welfare loss</b>, making the allocation of resources worse.</p>
<ul>
<li><b>Distortion of price signals</b>, e.g. subsidies keeping inefficient firms alive.</li>
<li><b>Unintended consequences</b>, e.g. taxes encouraging smuggling; rent controls reducing supply.</li>
<li><b>Excessive administrative costs</b>.</li>
<li><b>Information gaps</b>: government doesn't know the true external costs.</li>
<li>Examples: the Common Agricultural Policy's 'butter mountains'; the EU Emissions Trading Scheme's early over-allocation of permits; HS2 cost overruns.</li>
</ul>
`,
  quiz: [
    { q: "A tax to correct pollution aims to…", o: ["Internalise the external cost", "Raise the price of substitutes", "Shift demand right", "Create a public good"], a: 0, e: "It pushes MPC up towards MSC." },
    { q: "A maximum price set below equilibrium causes…", o: ["Excess demand", "Excess supply", "Equilibrium", "Lower demand"], a: 0, e: "Buyers want more than sellers will supply." },
    { q: "A minimum price set above equilibrium causes…", o: ["Excess supply", "Excess demand", "Shortages", "Black markets for buyers"], a: 0, e: "Sellers want to sell more than buyers will buy." },
    { q: "Tradable pollution permits work by…", o: ["Capping total pollution and letting firms trade permits", "Banning pollution", "Subsidising firms", "Providing information"], a: 0, e: "Firms that cut pollution cheaply can sell spare permits." },
    { q: "Government failure is…", o: ["Intervention that causes a net welfare loss", "Any tax", "When markets fail", "A budget deficit"], a: 0, e: "The cure makes things worse." },
    { q: "Rent controls reducing the supply of rental homes is an example of…", o: ["Unintended consequences", "A public good", "Regulatory capture", "Allocative efficiency"], a: 0, e: "Landlords leave the market as returns fall." },
    { q: "A problem with taxing negative externalities is…", o: ["Valuing the external cost accurately", "It always reduces pollution to zero", "It's progressive", "It creates a public good"], a: 0, e: "If the tax is wrong, output won't reach the optimum." },
    { q: "Regulatory capture means…", o: ["Regulators act in the interest of the firms they regulate", "Firms capture market share", "Government takes over firms", "Consumers ignore regulations"], a: 0, e: "Close links can make regulation weaker." },
    { q: "Lowering the cap on pollution permits will…", o: ["Raise the permit price", "Lower the permit price", "Increase pollution", "Have no effect"], a: 0, e: "Supply of permits shifts left." }
  ],
  flashcards: [
    ["Indirect tax on pollution", "Internalises the externality"],
    ["Maximum price", "Below equilibrium; excess demand"],
    ["Minimum price", "Above equilibrium; excess supply"],
    ["Tradable permits", "Cap plus trade; market sets the permit price"],
    ["State provision", "Public and merit goods, free at point of use"],
    ["Regulation", "Laws, limits, bans; needs enforcement"],
    ["Government failure", "Intervention causing a net welfare loss"],
    ["Causes of government failure", "Price distortion, unintended consequences, admin costs, information gaps"]
  ]
});

S2Data.detail("1a", { mistakes: ["Calling any statement with numbers positive: 'should' or 'ought' makes it normative, even with data."], tips: ["On a PPF, always say what a movement or shift means for opportunity cost."], fact: "Adam Smith's pin factory example: ten workers dividing tasks could make about 48 000 pins a day." });
S2Data.detail("1b", { mistakes: ["Confusing a movement along the demand curve (price change) with a shift (other factors)."], tips: ["Always state the sign and size of elasticity, then interpret it and link it to revenue."], fact: "Research suggests the PED for cigarettes is around −0.4, which is why tobacco duty raises so much revenue." });
S2Data.detail("1c", { mistakes: ["Saying 'demand rises' when price falls: quantity demanded extends; demand itself hasn't changed."], tips: ["When analysing a shift, follow the chain: excess demand or supply, price change, extension or contraction, new equilibrium."], fact: "Coffee prices hit a 47-year high in 2025 after poor harvests in Brazil and Vietnam." });
S2Data.detail("1d", { mistakes: ["Drawing a specific tax as a pivot: that's an ad valorem tax. A specific tax is a parallel shift."], tips: ["Label the consumer and producer shares of tax revenue on your diagram."], fact: "Richard Thaler won the 2017 Nobel Prize in Economics for his work on behavioural economics and nudges." });
S2Data.detail("1e", { mistakes: ["Shading the wrong welfare loss triangle: it always points towards the social optimum."], tips: ["Name the third party and say exactly what the external cost or benefit is."], fact: "The term 'externality' is linked to Arthur Pigou, after whom corrective 'Pigouvian taxes' are named." });
S2Data.detail("1f", { mistakes: ["Calling something a public good just because the government provides it, like the NHS. Healthcare is rival and excludable."], tips: ["Test both features separately: is it non-excludable? Is it non-rival?"], fact: "George Akerlof's 1970 paper 'The Market for Lemons' was rejected by three journals before it was published; it later helped win him a Nobel Prize." });
S2Data.detail("1g", { mistakes: ["Drawing a maximum price above equilibrium: it would have no effect."], tips: ["Evaluate every intervention: size of effect, elasticity, cost, information and unintended consequences."], fact: "The EU Emissions Trading System, launched in 2005, saw its permit price fall to almost zero in 2007 because too many permits were issued." });
