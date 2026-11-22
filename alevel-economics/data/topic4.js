/* A-level Economics² — Theme 4: A global perspective */

S2Data.add({
  id: "4a", group: 4, title: "Globalisation, specialisation and trade",
  summary: "Causes and effects of globalisation, absolute and comparative advantage, and the pattern and terms of trade.",
  notes: R`
<h3>Globalisation</h3>
<p><b>Globalisation</b> is the growing integration and interdependence of the world's economies through trade, capital flows, migration and technology.</p>
<ul>
<li>Causes: falling transport costs (containerisation), ICT and the internet, trade liberalisation (WTO, trading blocs), growth of <b>multinational corporations (MNCs)</b>, freer capital flows.</li>
<li>Effects on developed countries: cheaper imports, bigger markets, but job losses in industries facing low-cost competition.</li>
<li>Effects on developing countries: FDI, jobs and technology transfer, but possible exploitation, environmental damage and dependence.</li>
<li>Effects on the environment and inequality: more emissions from transport; inequality can widen within countries even as it narrows between them.</li>
</ul>
<h3>Specialisation and comparative advantage</h3>
<ul>
<li><b>Absolute advantage</b>: a country can produce more of a good than another with the same resources.</li>
<li><b>Comparative advantage</b>: a country can produce a good at a <b>lower opportunity cost</b> than another (Ricardo). Trade based on comparative advantage raises total world output.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>With the same resources, UK makes 20 cloth or 10 wine; Portugal makes 15 cloth or 15 wine.
<ol><li>UK opportunity cost of 1 wine \(= \dfrac{20}{10} = 2\) cloth; Portugal's \(= \dfrac{15}{15} = 1\) cloth.</li>
<li>Portugal has the comparative advantage in wine; the UK in cloth (\(0.5\) wine per cloth versus Portugal's \(1\)).</li></ol></div>
<ul>
<li>Assumptions and limits: no transport costs, perfect factor mobility, constant costs, no trade barriers. Real-world costs and diseconomies weaken the gains.</li>
<li>Advantages of specialisation and trade: higher output, economies of scale, more choice, lower prices, competition. Disadvantages: over-dependence, vulnerability to shocks, structural unemployment.</li>
</ul>
<h3>Pattern of trade and terms of trade</h3>
<ul>
<li>Patterns change with comparative advantage, exchange rates, trading blocs and the rise of emerging economies (China, India).</li>
<li>\[\text{terms of trade} = \frac{\text{index of export prices}}{\text{index of import prices}} \times 100\]</li>
<li>An <b>improvement</b> (rise) means each unit of exports buys more imports. Causes: inflation, exchange rate changes, changes in demand and supply of commodities.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Export price index 110, import price index 105. Terms of trade \(= \dfrac{110}{105} \times 100 \approx 104.8\): an improvement from 100.</div>
`,
  quiz: [
    { q: "Globalisation is…", o: ["The growing integration of the world's economies", "A rise in tariffs", "A single world currency", "The decline of trade"], a: 0, e: "Through trade, capital, migration and technology." },
    { q: "A key cause of globalisation is…", o: ["Falling transport and communication costs", "Rising tariffs", "Fewer MNCs", "Less technology"], a: 0, e: "Containerisation and the internet cut costs." },
    { q: "Comparative advantage means producing at a…", o: ["Lower opportunity cost", "Higher output", "Lower money price", "Higher productivity in all goods"], a: 0, e: "Ricardo's theory." },
    { q: "Country A: 10 cars or 20 tonnes of food; B: 5 cars or 20 food. A's comparative advantage is in…", o: ["Cars", "Food", "Both", "Neither"], a: 0, e: R`A's cost of 1 car \(= 2\) food; B's \(= 4\) food.` },
    { q: "Terms of trade = …", o: ["Export price index ÷ import price index × 100", "Exports − imports", "Import prices ÷ export prices", "Exchange rate × 100"], a: 0, e: "A rise is an improvement." },
    { q: "Export index 120, import index 100. Terms of trade = ?", o: ["120", "83.3", "20", "100"], a: 0, e: R`\(\dfrac{120}{100} \times 100 = 120\).` },
    { q: "A disadvantage of specialisation for a country is…", o: ["Over-dependence on a few industries", "Higher output", "Economies of scale", "More choice"], a: 0, e: "A shock to that industry hits the whole economy." },
    { q: "MNCs are…", o: ["Firms operating in more than one country", "Government agencies", "Trading blocs", "Central banks"], a: 0, e: "E.g. Apple, Unilever." },
    { q: "A limitation of comparative advantage theory is that it assumes…", o: ["No transport costs", "High tariffs", "Rising costs", "Immobile goods"], a: 0, e: "Transport costs can wipe out gains." }
  ],
  flashcards: [
    ["Globalisation", "Increasing integration of world economies"],
    ["Causes of globalisation", "Lower transport costs, ICT, trade liberalisation, MNCs"],
    ["Absolute advantage", "Producing more with the same resources"],
    ["Comparative advantage", "Lower opportunity cost"],
    ["Terms of trade", R`\(\dfrac{\text{export price index}}{\text{import price index}} \times 100\)`],
    ["Improvement in terms of trade", "Exports buy more imports"],
    ["Limits of comparative advantage", "Transport costs, factor immobility, rising costs, barriers"],
    ["Downsides of specialisation", "Over-dependence, vulnerability, structural unemployment"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Trading blocs, the WTO and restrictions on free trade",
  summary: "Types of trading bloc, trade creation and diversion, the role of the WTO, and tariffs, quotas, subsidies and other protectionism.",
  notes: R`
<h3>Trading blocs</h3>
<table><tr><th>Type</th><th>Features</th><th>Example</th></tr>
<tr><td>Free trade area</td><td>No tariffs between members; each sets its own external tariffs</td><td>USMCA</td></tr>
<tr><td>Customs union</td><td>Free trade plus a common external tariff</td><td>EU customs union</td></tr>
<tr><td>Common market</td><td>Customs union plus free movement of labour and capital</td><td>EU single market</td></tr>
<tr><td>Monetary union</td><td>Common market plus a single currency and central bank</td><td>Eurozone (ECB)</td></tr></table>
<ul>
<li><b>Trade creation</b>: production shifts from a high-cost domestic producer to a lower-cost member.</li>
<li><b>Trade diversion</b>: imports shift from a low-cost non-member to a higher-cost member because of the external tariff.</li>
<li>Monetary union costs and benefits: no exchange costs or uncertainty, but a single interest rate that may not suit all members.</li>
</ul>
<h3>The World Trade Organization (WTO)</h3>
<p>Promotes free trade through negotiation rounds, settles trade disputes and enforces rules. It has 166 members. Conflict can arise between trading blocs and the WTO's aim of free trade for all.</p>
<h3>Restrictions on free trade (protectionism)</h3>
<ul>
<li>Reasons: protect infant industries, protect jobs, counter dumping, national security, improve the current account, raise revenue.</li>
<li>Types: <b>tariffs</b> (taxes on imports), <b>quotas</b> (limits on quantity), <b>subsidies</b> to domestic producers, <b>non-tariff barriers</b> (standards, red tape).</li>
</ul>
<div class="box box-key"><span class="box-title">Draw it: a tariff</span>Domestic D and S with a horizontal world supply at \(P_w\). A tariff raises the price to \(P_w + t\): domestic supply extends, demand contracts, imports fall. Government gains revenue (tariff × imports). There are two welfare-loss triangles: an inefficient-production loss and a lost-consumption loss.</div>
<div class="box box-prac"><span class="box-title">Worked example</span>A £2 tariff; imports fall to 300 units. Tariff revenue \(= 2 \times 300 = £600\).</div>
<p>Impacts: higher prices and less choice for consumers, retaliation, inefficiency, lower world output. Example: US tariffs on Chinese goods from 2018 and wider tariffs in 2025.</p>
`,
  quiz: [
    { q: "A customs union has…", o: ["Free trade between members and a common external tariff", "A single currency", "Free movement of labour only", "No internal free trade"], a: 0, e: "A free trade area lacks the common external tariff." },
    { q: "A monetary union adds…", o: ["A single currency", "Free trade", "Common external tariff", "Free movement of capital"], a: 0, e: "E.g. the eurozone." },
    { q: "Trade creation occurs when…", o: ["Trade shifts to a lower-cost member country", "Trade shifts to a higher-cost member", "Tariffs rise", "Imports from outside rise"], a: 0, e: "It raises efficiency." },
    { q: "Trade diversion occurs when…", o: ["Imports shift from a cheaper non-member to a dearer member", "Imports shift to a cheaper member", "Exports rise", "The WTO intervenes"], a: 0, e: "It reduces efficiency." },
    { q: "A tariff is…", o: ["A tax on imports", "A limit on import quantity", "A subsidy to exporters", "A ban"], a: 0, e: "It raises the domestic price." },
    { q: "A quota is…", o: ["A physical limit on the quantity of imports", "A tax on imports", "A subsidy", "A currency control"], a: 0, e: "It raises price without raising tax revenue." },
    { q: "Dumping means…", o: ["Selling exports below cost", "Banning imports", "Raising tariffs", "Selling at world price"], a: 0, e: "Countries may respond with anti-dumping duties." },
    { q: "The infant industry argument says…", o: ["New industries need protection until they achieve economies of scale", "Old industries need protection", "Tariffs always help consumers", "Trade should be banned"], a: 0, e: "But protection may become permanent." },
    { q: "A main role of the WTO is…", o: ["Settling trade disputes and promoting free trade", "Setting exchange rates", "Lending to poor countries", "Setting interest rates"], a: 0, e: "It also runs negotiation rounds." }
  ],
  flashcards: [
    ["Free trade area", "No internal tariffs; own external tariffs"],
    ["Customs union", "Free trade + common external tariff"],
    ["Common market", "Customs union + free movement of labour and capital"],
    ["Monetary union", "Common market + single currency"],
    ["Trade creation vs diversion", "Shift to lower-cost member vs to higher-cost member"],
    ["WTO", "Promotes free trade; settles disputes"],
    ["Types of protectionism", "Tariffs, quotas, subsidies, non-tariff barriers"],
    ["Tariff revenue", "Tariff per unit × imports"]
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Balance of payments, exchange rates and competitiveness",
  summary: "The balance of payments accounts, current account imbalances and policies, exchange rate systems and changes, and international competitiveness.",
  notes: R`
<h3>Balance of payments</h3>
<ul>
<li><b>Current account</b>: trade in goods and services, primary income, secondary income. <b>Capital account</b>: small transfers of capital. <b>Financial account</b>: FDI, portfolio investment, reserves.</li>
<li>The accounts must balance overall: a current account deficit is matched by a financial account surplus.</li>
<li>Causes of deficits: low competitiveness, strong pound, high consumer spending, low productivity. Surpluses can reflect weak domestic demand or high savings.</li>
<li>Policies: <b>expenditure-switching</b> (devaluation, tariffs) and <b>expenditure-reducing</b> (contractionary fiscal/monetary policy), plus supply-side policies.</li>
</ul>
<h3>Exchange rates</h3>
<table><tr><th>System</th><th>How it works</th></tr>
<tr><td>Floating</td><td>Set by supply and demand for the currency (the pound)</td></tr>
<tr><td>Fixed</td><td>Pegged by the central bank buying and selling reserves (e.g. Hong Kong dollar to the US dollar)</td></tr>
<tr><td>Managed float</td><td>Mostly market-set with occasional intervention</td></tr></table>
<ul>
<li><b>Appreciation/depreciation</b> refer to floating rates; <b>revaluation/devaluation</b> to fixed rates.</li>
<li>Factors: interest rates (hot money), inflation, current account, speculation, FDI, central bank intervention (quantitative easing tends to weaken a currency).</li>
<li><b>Competitive devaluation</b>: countries weakening their currencies to boost exports; others may retaliate ('currency wars').</li>
<li>Effects of a depreciation: exports cheaper, imports dearer, so current account may improve, AD rises, inflation rises (dearer imports), and growth may rise.</li>
</ul>
<div class="box box-key"><span class="box-title">Marshall–Lerner and the J-curve</span>A depreciation only improves the current account if \(|\text{PED}_X| + |\text{PED}_M| > 1\). In the short run demand is inelastic, so the deficit first worsens before improving: the <b>J-curve</b>.</div>
<div class="box box-prac"><span class="box-title">Worked example</span>£1 = $1.30. A US good costs $26. Price in pounds \(= \dfrac{26}{1.30} = £20\).</div>
<h3>International competitiveness</h3>
<ul>
<li>Measures: <b>relative unit labour costs</b> and relative export prices.</li>
<li>Factors: productivity, wage costs, exchange rate, regulation, quality, infrastructure, education.</li>
<li>Benefits of competitiveness: export-led growth, jobs, current account surplus. Problems: pressure to keep wages low.</li>
</ul>
<p>\[\text{unit labour cost} = \frac{\text{total labour cost}}{\text{output}}\]</p>
`,
  quiz: [
    { q: "FDI appears in which account?", o: ["Financial account", "Current account", "Capital account", "Trade in goods"], a: 0, e: "It's an investment flow." },
    { q: "Expenditure-switching policies include…", o: ["Devaluation and tariffs", "Higher income tax", "Higher interest rates", "Cutting government spending"], a: 0, e: "They switch spending from imports to domestic goods." },
    { q: "A floating exchange rate is set by…", o: ["Market supply and demand", "The government", "The WTO", "The IMF"], a: 0, e: "The central bank doesn't target a level." },
    { q: "A rise in UK interest rates tends to…", o: ["Cause the pound to appreciate", "Cause the pound to depreciate", "Have no effect", "Fix the pound"], a: 0, e: "Hot money flows in for higher returns." },
    { q: "A depreciation of the pound makes UK exports…", o: ["Cheaper abroad", "Dearer abroad", "Unchanged in price", "Illegal"], a: 0, e: "Foreign buyers need less of their currency." },
    { q: "The Marshall–Lerner condition states a depreciation improves the current account if…", o: ["The sum of PEDs for exports and imports exceeds 1", "PEDs sum to less than 1", "Imports are inelastic", "Exports are perfectly inelastic"], a: 0, e: "Volumes must respond enough." },
    { q: "The J-curve shows that after a depreciation, the current account…", o: ["First worsens, then improves", "Improves then worsens", "Never changes", "Improves immediately"], a: 0, e: "Demand is inelastic in the short run." },
    { q: "£1 = $1.25. A $50 item costs…", o: ["£40", "£62.50", "£50", "£48.75"], a: 0, e: R`\(\dfrac{50}{1.25} = 40\).` },
    { q: "Relative unit labour costs measure…", o: ["International competitiveness", "Inflation", "Unemployment", "The money supply"], a: 0, e: "Lower unit labour costs improve competitiveness." }
  ],
  flashcards: [
    ["Current account", "Goods, services, primary and secondary income"],
    ["Financial account", "FDI, portfolio investment, reserves"],
    ["Expenditure-switching", "Devaluation, tariffs"],
    ["Expenditure-reducing", "Contractionary fiscal or monetary policy"],
    ["Floating vs fixed", "Market-set vs pegged by the central bank"],
    ["Marshall–Lerner", R`\(|\text{PED}_X| + |\text{PED}_M| > 1\)`],
    ["J-curve", "Current account worsens then improves after depreciation"],
    ["Unit labour cost", R`\(\dfrac{\text{labour cost}}{\text{output}}\)`]
  ]
});

S2Data.add({
  id: "4d", group: 4, title: "Poverty and inequality",
  summary: "Absolute and relative poverty, income and wealth inequality, the Lorenz curve and Gini coefficient, and the impact of economic change.",
  notes: R`
<h3>Poverty</h3>
<ul>
<li><b>Absolute poverty</b>: income too low to meet basic needs (food, shelter). The World Bank line is about $3 a day (2021 PPP).</li>
<li><b>Relative poverty</b>: income below a proportion of the median, usually 60% of median household income in the UK.</li>
<li>Causes: unemployment, low wages, sickness, old age, family structure, lack of education. In developing countries: low productivity, conflict, poor infrastructure.</li>
</ul>
<h3>Inequality</h3>
<ul>
<li><b>Income</b> inequality (a flow) and <b>wealth</b> inequality (a stock). Wealth is far more unequal than income.</li>
<li>Causes: differences in skills and education, inheritance, globalisation and technology (skill-biased change), the tax and benefit system, discrimination, trade union decline.</li>
</ul>
<h3>Measuring inequality</h3>
<div class="box box-key"><span class="box-title">Draw it: Lorenz curve</span>Cumulative % of population on the horizontal axis, cumulative % of income on the vertical. The 45° line is perfect equality. The further the Lorenz curve bows below it, the greater the inequality.</div>
<p>\[\text{Gini coefficient} = \frac{A}{A + B}\]</p>
<p>where A is the area between the line of equality and the Lorenz curve, and B is the area under the Lorenz curve. 0 = perfect equality; 1 = perfect inequality. The UK's Gini is about 0.33.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Area A = 0.15 and area B = 0.35. Gini \(= \dfrac{0.15}{0.15 + 0.35} = \dfrac{0.15}{0.5} = 0.3\).</div>
<h3>Impact of economic change and development</h3>
<ul>
<li>Kuznets curve: inequality may rise in early development, then fall.</li>
<li>Capitalism creates incentives but tends to generate inequality, which may reduce social mobility and growth.</li>
<li>Policies: progressive taxes, benefits, minimum wage, education spending.</li>
</ul>
`,
  quiz: [
    { q: "Relative poverty in the UK is usually defined as household income below…", o: ["60% of the median", "50% of the mean", "$3 a day", "The minimum wage"], a: 0, e: "It's relative to typical living standards." },
    { q: "Absolute poverty means…", o: ["Not having enough to meet basic needs", "Earning below the median", "Being unemployed", "Having no wealth"], a: 0, e: "E.g. the World Bank's international poverty line." },
    { q: "Wealth is…", o: ["A stock of assets", "A flow of income", "Wages per year", "Spending"], a: 0, e: "Property, shares, savings and pensions." },
    { q: "On a Lorenz curve, perfect equality is shown by…", o: ["The 45° line", "The horizontal axis", "A vertical line", "A curve bowed far out"], a: 0, e: "Each x% of people has x% of income." },
    { q: "A Gini coefficient of 0 means…", o: ["Perfect equality", "Perfect inequality", "Moderate inequality", "No income"], a: 0, e: "1 would mean one person has everything." },
    { q: "If A = 0.2 and B = 0.3, Gini = ?", o: ["0.4", "0.67", "0.2", "0.5"], a: 0, e: R`\(\dfrac{0.2}{0.5} = 0.4\).` },
    { q: "Which is a cause of rising income inequality?", o: ["Skill-biased technological change", "Progressive taxation", "Higher minimum wage", "Stronger unions"], a: 0, e: "High-skilled workers gain most." },
    { q: "The Kuznets curve suggests that as a country develops, inequality…", o: ["First rises then falls", "Always falls", "Always rises", "Stays constant"], a: 0, e: "An inverted U-shape." },
    { q: "Which policy reduces inequality?", o: ["Progressive income tax", "Regressive taxes", "Cutting benefits", "Lower inheritance tax"], a: 0, e: "Richer people pay a higher proportion." }
  ],
  flashcards: [
    ["Absolute poverty", "Can't meet basic needs"],
    ["Relative poverty (UK)", "Below 60% of median household income"],
    ["Income vs wealth inequality", "Flow vs stock; wealth more unequal"],
    ["Lorenz curve", "Cumulative income vs cumulative population"],
    ["Gini coefficient", R`\(\dfrac{A}{A + B}\); 0 equal, 1 unequal`],
    ["Causes of inequality", "Skills, inheritance, technology, globalisation, tax/benefits"],
    ["Kuznets curve", "Inequality rises then falls with development"],
    ["Policies to reduce inequality", "Progressive taxes, benefits, minimum wage, education"]
  ]
});

S2Data.add({
  id: "4e", group: 4, title: "Emerging and developing economies",
  summary: "Measures of development, the HDI, factors that limit growth and development, and strategies to promote development.",
  notes: R`
<h3>Measures of development</h3>
<ul>
<li>Development is broader than growth: better health, education, freedom and living standards.</li>
<li>The <b>Human Development Index (HDI)</b> combines life expectancy, education (mean and expected years of schooling) and GNI per capita (PPP). It ranges from 0 to 1.</li>
<li>Limits of HDI: ignores inequality, environment, political freedom; averages hide differences. Alternatives: Inequality-adjusted HDI, Multidimensional Poverty Index, % with access to clean water.</li>
</ul>
<h3>Factors limiting growth and development</h3>
<table><tr><th>Economic</th><th>Non-economic</th></tr>
<tr><td>Primary product dependency and volatile commodity prices</td><td>Corruption and poor governance</td></tr>
<tr><td>Savings gap (Harrod–Domar model)</td><td>Civil war and conflict</td></tr>
<tr><td>Foreign currency gap</td><td>Poor property rights and legal systems</td></tr>
<tr><td>Capital flight, debt burdens</td><td>Disease (HIV/AIDS, malaria)</td></tr>
<tr><td>Poor infrastructure, low human capital</td><td>Geography, e.g. being landlocked</td></tr>
<tr><td>Lack of access to credit and banking</td><td>Climate change</td></tr></table>
<div class="box box-key"><span class="box-title">Harrod–Domar</span>Growth depends on savings and investment: higher savings fund investment, which raises output and incomes, which raises savings again. Poor countries are stuck with low savings, so investment and growth are low.</div>
<h3>Strategies to promote development</h3>
<table><tr><th>Market-orientated</th><th>Interventionist</th><th>Other</th></tr>
<tr><td>Trade liberalisation</td><td>Infrastructure and human capital investment</td><td>Fairtrade schemes</td></tr>
<tr><td>Promoting FDI</td><td>Joint ventures with MNCs</td><td>Aid (bilateral, multilateral)</td></tr>
<tr><td>Removing subsidies</td><td>Buffer stock schemes</td><td>Debt relief</td></tr>
<tr><td>Floating exchange rates</td><td>Industrialisation (Lewis model)</td><td>Microfinance</td></tr>
<tr><td>Microfinance and privatisation</td><td>Protectionism for infant industries</td><td>World Bank and IMF</td></tr></table>
<p>The <b>Lewis model</b>: surplus labour moves from low-productivity agriculture to higher-productivity industry, raising output and savings.</p>
`,
  quiz: [
    { q: "The HDI combines…", o: ["Life expectancy, education and GNI per capita", "GDP and inflation", "Unemployment and inflation", "Exports and imports"], a: 0, e: "Each on a 0–1 scale." },
    { q: "A limitation of the HDI is that it ignores…", o: ["Inequality within a country", "Life expectancy", "Education", "Income"], a: 0, e: "The IHDI adjusts for this." },
    { q: "Primary product dependency is a problem because…", o: ["Commodity prices are volatile", "Prices are always rising", "Demand is elastic", "It creates many jobs"], a: 0, e: "Export earnings swing with world prices." },
    { q: "The Harrod–Domar model links growth to…", o: ["Savings and investment", "Exchange rates", "Inflation", "Tariffs"], a: 0, e: "It identifies a savings gap." },
    { q: "Capital flight means…", o: ["Money leaving a country for safety abroad", "Capital arriving from abroad", "FDI", "Aid"], a: 0, e: "It reduces funds for domestic investment." },
    { q: "Microfinance provides…", o: ["Small loans to people without access to banks", "Large loans to governments", "Aid for infrastructure", "Currency reserves"], a: 0, e: "E.g. the Grameen Bank." },
    { q: "The Lewis model involves…", o: ["Moving surplus labour from agriculture to industry", "Moving labour into farming", "Raising tariffs", "Cutting aid"], a: 0, e: "Industrial productivity is higher." },
    { q: "A market-orientated strategy is…", o: ["Trade liberalisation", "Buffer stocks", "Infrastructure spending", "Joint ventures"], a: 0, e: "It relies on markets and free trade." },
    { q: "Fairtrade aims to…", o: ["Guarantee producers a minimum price", "Ban imports", "Raise tariffs", "Cut wages"], a: 0, e: "It also pays a social premium." }
  ],
  flashcards: [
    ["HDI", "Life expectancy, education, GNI per capita (PPP)"],
    ["Limits of HDI", "Ignores inequality, environment, freedom"],
    ["Primary product dependency", "Reliance on volatile commodity exports"],
    ["Harrod–Domar", "Growth depends on savings and investment"],
    ["Savings gap", "Too little saving to fund investment"],
    ["Lewis model", "Surplus labour moves from farming to industry"],
    ["Market-orientated strategies", "Trade liberalisation, FDI, removing subsidies, floating exchange rates"],
    ["Interventionist strategies", "Infrastructure, human capital, buffer stocks, joint ventures"]
  ]
});

S2Data.add({
  id: "4f", group: 4, title: "The financial sector",
  summary: "Roles of financial markets, market failure in the financial sector, and the role of central banks.",
  notes: R`
<h3>Role of financial markets</h3>
<ul>
<li>Facilitate saving, lend to businesses and individuals, facilitate exchange of goods and services, provide forward markets in currencies and commodities, and provide a market for equities (shares).</li>
<li><b>Money market</b>: short-term lending. <b>Capital market</b>: longer-term finance, e.g. shares and bonds. <b>Foreign exchange market</b>: trading currencies.</li>
<li><b>Bonds</b>: when bond prices rise, their yield (interest rate) falls.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A bond pays a fixed £5 a year. At a price of £100 the yield is \(\dfrac{5}{100} \times 100 = 5\%\). If the price rises to £125, the yield falls to \(\dfrac{5}{125} \times 100 = 4\%\).</div>
<h3>Market failure in the financial sector</h3>
<ul>
<li><b>Asymmetric information</b>: banks know more than customers (mis-selling of PPI).</li>
<li><b>Externalities</b>: bank failures harm the whole economy (2008).</li>
<li><b>Moral hazard</b>: 'too big to fail' banks take excessive risks expecting bailouts.</li>
<li><b>Speculation and market bubbles</b>: herding pushes asset prices far above their value.</li>
<li><b>Market rigging</b>: e.g. LIBOR manipulation.</li>
</ul>
<h3>Role of central banks</h3>
<ul>
<li>Implement monetary policy (Bank Rate, QE).</li>
<li>Banker to the government and to commercial banks.</li>
<li><b>Lender of last resort</b> to banks in a liquidity crisis.</li>
<li>Regulation: in the UK the <b>Prudential Regulation Authority (PRA)</b>, part of the Bank, supervises banks; the <b>Financial Policy Committee (FPC)</b> looks at risks to the whole system; the <b>Financial Conduct Authority (FCA)</b> regulates conduct.</li>
<li>Tools: capital requirements, liquidity ratios, stress tests, ring-fencing retail banking.</li>
</ul>
<h3>Commercial banks</h3>
<ul>
<li>Banks create credit: deposits are lent out, creating new deposits. Their objectives are <b>liquidity</b>, <b>profitability</b> and <b>security</b>, which conflict.</li>
<li>The capital ratio is capital divided by risk-weighted assets.</li>
</ul>
`,
  quiz: [
    { q: "A function of financial markets is to…", o: ["Lend to businesses and individuals", "Set tariffs", "Collect taxes", "Set the minimum wage"], a: 0, e: "They channel savings into investment." },
    { q: "If bond prices rise, yields…", o: ["Fall", "Rise", "Stay the same", "Double"], a: 0, e: "The fixed payment is a smaller share of the price." },
    { q: "Lender of last resort means the central bank…", o: ["Lends to banks in a liquidity crisis", "Lends to households", "Lends to governments abroad", "Never lends"], a: 0, e: "It prevents bank runs spreading." },
    { q: "'Too big to fail' creates…", o: ["Moral hazard", "Adverse selection only", "A public good", "Allocative efficiency"], a: 0, e: "Banks expect to be bailed out." },
    { q: "PPI mis-selling is an example of…", o: ["Asymmetric information", "A positive externality", "Contestability", "Crowding out"], a: 0, e: "Customers didn't understand what they were sold." },
    { q: "LIBOR manipulation is an example of…", o: ["Market rigging", "Quantitative easing", "Moral hazard", "A bubble"], a: 0, e: "Traders falsified interest rate submissions." },
    { q: "The PRA is responsible for…", o: ["Supervising the safety of banks", "Setting Bank Rate", "Setting fiscal policy", "Regulating mergers"], a: 0, e: "It's part of the Bank of England." },
    { q: "A bank's three objectives are…", o: ["Liquidity, profitability and security", "Growth, inflation and jobs", "Sales, revenue and profit", "Saving, lending and taxes"], a: 0, e: "They often conflict." },
    { q: "The capital market provides…", o: ["Long-term finance such as shares and bonds", "Overnight loans", "Currency exchange only", "Tax revenue"], a: 0, e: "The money market is short-term." }
  ],
  flashcards: [
    ["Roles of financial markets", "Saving, lending, exchange, forward markets, equities"],
    ["Bond price and yield", "Inversely related"],
    ["Financial market failures", "Asymmetric info, externalities, moral hazard, bubbles, rigging"],
    ["Lender of last resort", "Central bank lends to banks in crisis"],
    ["PRA", "Supervises banks' safety (Bank of England)"],
    ["FPC", "Watches risks to the whole financial system"],
    ["FCA", "Regulates conduct of financial firms"],
    ["Bank objectives", "Liquidity, profitability, security"]
  ]
});

S2Data.add({
  id: "4g", group: 4, title: "Role of the state in the macroeconomy",
  summary: "Public expenditure, taxation, public sector finances, macroeconomic policies in a global context, and the Laffer curve.",
  notes: R`
<h3>Public expenditure</h3>
<ul>
<li><b>Current</b> spending (salaries, benefits) versus <b>capital</b> spending (infrastructure). <b>Transfer payments</b> (benefits, pensions) redistribute income without producing output.</li>
<li>UK public spending is about 45% of GDP. Reasons for changes: ageing population, healthcare costs, recessions, political choices.</li>
<li>Effects of spending levels: on productivity and growth, living standards, crowding out, the level of taxation and equality.</li>
</ul>
<h3>Taxation</h3>
<table><tr><th>Type</th><th>Meaning</th></tr>
<tr><td>Progressive</td><td>Higher earners pay a higher <b>proportion</b> of income (income tax)</td></tr>
<tr><td>Proportional</td><td>Same proportion for all (flat tax)</td></tr>
<tr><td>Regressive</td><td>Lower earners pay a higher proportion (VAT, tobacco duty)</td></tr></table>
<ul>
<li>Effects of changes in tax rates: on incentives to work, tax revenues, income distribution, real output, prices, trade and FDI flows.</li>
<li><b>Laffer curve</b>: beyond some tax rate, higher rates reduce revenue because incentives fall and avoidance rises.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example: average tax rate</span>Income £50 000, tax paid £7500. Average rate \(= \dfrac{7500}{50\,000} \times 100 = 15\%\). Marginal rate is the tax on the next £1 earned.</div>
<h3>Public sector finances</h3>
<ul>
<li><b>Fiscal deficit</b> vs <b>national debt</b>. <b>Cyclical</b> deficit (due to the trade cycle) vs <b>structural</b> deficit (remains even at full capacity).</li>
<li>Factors affecting the size of the debt: interest rates, growth, inflation, spending and tax decisions.</li>
<li>Significance: interest payments (opportunity cost), credit ratings, intergenerational burden, crowding out.</li>
</ul>
<h3>Macroeconomic policies in a global context</h3>
<ul>
<li>Policies to reduce fiscal deficits, poverty and inequality, change interest rates and exchange rates, and control global companies' transfer pricing.</li>
<li>Problems facing policymakers: inaccurate information, risks and uncertainties, unexpected global shocks (2008, Covid-19, energy crisis).</li>
</ul>
`,
  quiz: [
    { q: "A transfer payment is…", o: ["A payment such as a benefit, with no output produced in return", "Spending on roads", "A tax", "Interest on debt"], a: 0, e: "It redistributes income." },
    { q: "Capital spending includes…", o: ["Building new hospitals", "Nurses' salaries", "Pensions", "Unemployment benefits"], a: 0, e: "It adds to the stock of public assets." },
    { q: "A progressive tax means…", o: ["Higher earners pay a higher proportion", "Everyone pays the same amount", "Lower earners pay more", "No one pays tax"], a: 0, e: "UK income tax is an example." },
    { q: "VAT is usually considered…", o: ["Regressive", "Progressive", "Proportional to income", "A direct tax"], a: 0, e: "Poorer households spend a larger share of income." },
    { q: "The Laffer curve suggests that very high tax rates may…", o: ["Reduce total tax revenue", "Always raise revenue", "Increase incentives", "Eliminate avoidance"], a: 0, e: "People work less or avoid tax." },
    { q: "A structural deficit is one that…", o: ["Remains even when the economy is at full capacity", "Disappears in a boom", "Is caused by a recession", "Is always temporary"], a: 0, e: "A cyclical deficit falls as the economy recovers." },
    { q: "Income £40 000, tax £6000. Average tax rate?", o: ["15%", "6%", "40%", "25%"], a: 0, e: R`\(\dfrac{6000}{40\,000} \times 100 = 15\%\).` },
    { q: "A high national debt can cause problems because…", o: ["Interest payments have an opportunity cost", "It reduces inflation", "It raises exports", "It lowers interest rates"], a: 0, e: "Money spent on interest can't fund services." },
    { q: "Transfer pricing by MNCs is used to…", o: ["Shift profits to low-tax countries", "Raise wages", "Lower exports", "Pay more tax"], a: 0, e: "Governments try to control it." }
  ],
  flashcards: [
    ["Current vs capital spending", "Day-to-day vs investment in assets"],
    ["Transfer payment", "Benefit with no output in return"],
    ["Progressive tax", "Higher proportion for higher earners"],
    ["Regressive tax", "Higher proportion for lower earners"],
    ["Laffer curve", "Very high rates can reduce revenue"],
    ["Cyclical vs structural deficit", "Due to the cycle vs present at full capacity"],
    ["Average tax rate", R`\(\dfrac{\text{tax paid}}{\text{income}} \times 100\)`],
    ["Problems for policymakers", "Inaccurate information, uncertainty, global shocks"]
  ]
});

S2Data.detail("4a", { mistakes: ["Confusing absolute advantage with comparative advantage: trade gains come from comparative advantage."], tips: ["Calculate opportunity costs in both directions before deciding who specialises in what."], fact: "David Ricardo set out comparative advantage in 1817 using English cloth and Portuguese wine." });
S2Data.detail("4b", { mistakes: ["Saying a customs union has a single currency: that's monetary union."], tips: ["Label both welfare-loss triangles and the revenue rectangle on a tariff diagram."], fact: "The WTO replaced the General Agreement on Tariffs and Trade (GATT) in 1995." });
S2Data.detail("4c", { mistakes: ["Saying a depreciation always improves the current account: it depends on Marshall–Lerner and time."], tips: ["Use 'SPICED': strong pound, imports cheap, exports dear."], fact: "On 'Black Wednesday' in 1992, the UK left the European Exchange Rate Mechanism after failing to keep the pound in its band." });
S2Data.detail("4d", { mistakes: ["Using income and wealth interchangeably: income is a flow, wealth is a stock."], tips: ["When drawing Lorenz curves, always label the line of equality and the axes as cumulative percentages."], fact: "The Gini coefficient was developed by Italian statistician Corrado Gini in 1912." });
S2Data.detail("4e", { mistakes: ["Treating growth and development as the same thing."], tips: ["Evaluate strategies by country context: what works in one economy may fail in another."], fact: "Muhammad Yunus and the Grameen Bank won the 2006 Nobel Peace Prize for pioneering microfinance." });
S2Data.detail("4f", { mistakes: ["Getting the bond price and yield link the wrong way round: they move in opposite directions."], tips: ["Link each financial market failure to a real example: 2008, PPI, LIBOR."], fact: "In 2007, Northern Rock suffered the first UK bank run in over 140 years." });
S2Data.detail("4g", { mistakes: ["Defining a progressive tax by the amount paid: it's about the proportion of income."], tips: ["Separate cyclical and structural deficits when evaluating austerity."], fact: "UK public sector net debt rose to around 100% of GDP in 2020, the highest since the early 1960s." });
