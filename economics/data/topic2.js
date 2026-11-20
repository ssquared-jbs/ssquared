/* Economics² — How the economy works */

S2Data.add({
  id: "2a", group: 2, title: "Money and financial markets",
  summary: "The functions of money, banks, interest rates, saving and borrowing.",
  notes: `
<h3>Functions of money</h3>
<ul>
<li><b>Medium of exchange</b>: accepted in payment.</li>
<li><b>Store of value</b>: can be saved.</li>
<li><b>Unit of account</b>: measures value.</li>
</ul>
<h3>Financial markets and institutions</h3>
<p><b>Commercial banks</b> accept deposits and lend; <b>building societies</b> focus on mortgages; <b>insurance companies</b> pool risk. Financial markets link savers and borrowers.</p>
<h3>Interest rates</h3>
<p>The price of borrowing and the reward for saving. The <b>Bank of England</b> sets <b>Bank Rate</b>.</p>
<table><tr><th>Interest rates rise</th><th>Interest rates fall</th></tr>
<tr><td>Saving more attractive; borrowing more expensive</td><td>Saving less attractive; borrowing cheaper</td></tr>
<tr><td>Consumer spending and investment fall</td><td>Spending and investment rise</td></tr></table>
<h3>Calculations</h3>
<p>Interest = principal × rate. <b>Compound interest</b>: interest earns interest.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>£1000 at 5% for 2 years, compounded: year 1 £1050, year 2 £1102.50.</div>
<h3>Influences on saving and borrowing</h3>
<p>Interest rates, income, confidence, availability of credit, and age (life cycle).</p>`,
  quiz: [
    { q: "Using money to buy goods is its role as a…", o: ["Medium of exchange", "Store of value", "Unit of account", "Standard of deferred payment"], a: 0, e: "" },
    { q: "Saving money uses its role as a…", o: ["Store of value", "Medium of exchange", "Unit of account", "Barter"], a: 0, e: "" },
    { q: "Who sets UK Bank Rate?", o: ["Bank of England", "The Treasury", "Commercial banks", "Parliament"], a: 0, e: "" },
    { q: "Higher interest rates make borrowing…", o: ["More expensive", "Cheaper", "Free", "Unaffected"], a: 0, e: "" },
    { q: "Lower interest rates tend to…", o: ["Increase spending", "Increase saving", "Reduce borrowing", "Strengthen the pound always"], a: 0, e: "" },
    { q: "Interest on £500 at 4% for one year?", o: ["£20", "£4", "£200", "£54"], a: 0, e: "" },
    { q: "Compound interest means…", o: ["Interest is earned on previous interest", "Interest is fixed", "No interest", "Interest falls"], a: 0, e: "" },
    { q: "Building societies specialise in…", o: ["Mortgages and savings", "Insurance", "Stock trading", "Taxes"], a: 0, e: "" },
    { q: "Insurance companies…", o: ["Pool risk in return for premiums", "Print money", "Set interest rates", "Collect tax"], a: 0, e: "" }
  ],
  flashcards: [
    ["Functions of money", "Medium of exchange, store of value, unit of account"],
    ["Interest rate", "Price of borrowing, reward for saving"],
    ["Bank Rate", "Set by the Bank of England"],
    ["Rates rise", "Saving up, borrowing and spending down"],
    ["Compound interest", "Interest on interest"],
    ["Institutions", "Banks, building societies, insurers"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Economic growth",
  summary: "GDP, real and nominal growth, the economic cycle, and the costs and benefits of growth.",
  notes: `
<h3>Measuring growth</h3>
<p><b>Gross domestic product (GDP)</b> is the value of all goods and services produced in a country in a year. <b>Economic growth</b> is an increase in real GDP.</p>
<ul>
<li><b>Real GDP</b> is adjusted for inflation; <b>nominal</b> isn't.</li>
<li><b>GDP per capita</b> = GDP ÷ population (a measure of living standards).</li>
</ul>
<h3>The economic cycle</h3>
<p>Economies move through <b>boom</b> (fast growth, low unemployment, rising inflation), <b>downturn</b>, <b>recession</b> (negative growth for two consecutive quarters, rising unemployment) and <b>recovery</b>.</p>
<h3>Causes of growth</h3>
<p>Rising consumer spending, investment, government spending and exports; more and better resources (education, technology, productivity).</p>
<h3>Costs and benefits</h3>
<table><tr><th>Benefits</th><th>Costs</th></tr>
<tr><td>Higher incomes and living standards</td><td>Pollution and resource depletion</td></tr>
<tr><td>Lower unemployment</td><td>Inflation if growth is too fast</td></tr>
<tr><td>More tax revenue for public services</td><td>Inequality may widen</td></tr></table>`,
  quiz: [
    { q: "GDP measures…", o: ["The value of output produced in a year", "Total population", "Inflation", "Exports only"], a: 0, e: "" },
    { q: "Real GDP is adjusted for…", o: ["Inflation", "Population", "Exchange rates", "Taxes"], a: 0, e: "" },
    { q: "A recession is…", o: ["Negative growth for two consecutive quarters", "Fast growth", "High inflation", "Low unemployment"], a: 0, e: "" },
    { q: "During a boom, unemployment is usually…", o: ["Low", "High", "Rising sharply", "Unchanged"], a: 0, e: "" },
    { q: "GDP per capita =", o: ["GDP ÷ population", "GDP × population", "GDP − inflation", "Exports − imports"], a: 0, e: "" },
    { q: "A cost of economic growth is…", o: ["Pollution", "Higher incomes", "More jobs", "More tax revenue"], a: 0, e: "" },
    { q: "Which can cause growth?", o: ["Higher investment", "Falling exports", "Lower productivity", "Fewer workers"], a: 0, e: "" },
    { q: "GDP grows from £2.0tn to £2.06tn. Growth rate?", o: ["3%", "0.6%", "6%", "30%"], a: 0, e: "" },
    { q: "After recession, the economy enters…", o: ["Recovery", "Boom immediately", "Depression always", "Inflation only"], a: 0, e: "" }
  ],
  flashcards: [
    ["GDP", "Value of output in a year"],
    ["Economic growth", "Increase in real GDP"],
    ["Real vs nominal", "Adjusted vs not adjusted for inflation"],
    ["Economic cycle", "Boom, downturn, recession, recovery"],
    ["Recession", "Two consecutive quarters of negative growth"],
    ["Growth costs", "Pollution, inflation, inequality"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Inflation and unemployment",
  summary: "Measuring and explaining inflation and unemployment, and their effects.",
  notes: `
<h3>Inflation</h3>
<p>A sustained rise in the general price level. Measured by the <b>Consumer Prices Index (CPI)</b> using a 'basket' of goods. The UK government's target is <b>2%</b>.</p>
<ul>
<li><b>Demand-pull</b>: too much spending chasing too few goods.</li>
<li><b>Cost-push</b>: rising costs (wages, energy, imports) passed on as higher prices.</li>
</ul>
<p><b>Effects:</b> falling purchasing power, savers lose out, uncertainty, UK goods less competitive. <b>Deflation</b> is falling prices.</p>
<h3>Unemployment</h3>
<p>People of working age who are willing and able to work but have no job. Measured by the <b>Labour Force Survey</b> (ILO measure) and the <b>Claimant Count</b>.</p>
<table><tr><th>Type</th><th>Cause</th></tr>
<tr><td>Cyclical</td><td>Lack of demand in a recession</td></tr>
<tr><td>Structural</td><td>Decline of industries; skills mismatch</td></tr>
<tr><td>Frictional</td><td>Between jobs</td></tr>
<tr><td>Seasonal</td><td>Jobs available only at certain times</td></tr></table>
<p><b>Costs:</b> lost output, lower incomes, higher benefit spending, lower tax revenue, social problems.</p>
<h3>Calculations</h3>
<p>Unemployment rate (%) = unemployed ÷ labour force × 100. Inflation from an index: (new − old) ÷ old × 100.</p>`,
  quiz: [
    { q: "Inflation is…", o: ["A sustained rise in the general price level", "Rising unemployment", "Falling GDP", "A tax"], a: 0, e: "" },
    { q: "The UK inflation target is…", o: ["2%", "0%", "5%", "10%"], a: 0, e: "" },
    { q: "CPI stands for…", o: ["Consumer Prices Index", "Cost of Production Index", "Central Price Indicator", "Consumer Product Income"], a: 0, e: "" },
    { q: "Rising energy costs cause…", o: ["Cost-push inflation", "Demand-pull inflation", "Deflation", "Structural unemployment"], a: 0, e: "" },
    { q: "Too much spending chasing too few goods causes…", o: ["Demand-pull inflation", "Cost-push inflation", "Deflation", "Frictional unemployment"], a: 0, e: "" },
    { q: "Who loses most from inflation?", o: ["Savers", "Borrowers", "Exporters only", "Nobody"], a: 0, e: "" },
    { q: "Unemployment from a declining coal industry is…", o: ["Structural", "Cyclical", "Frictional", "Seasonal"], a: 0, e: "" },
    { q: "Unemployment in a recession is…", o: ["Cyclical", "Structural", "Seasonal", "Frictional"], a: 0, e: "" },
    { q: "Labour force 30 million; unemployed 1.2 million. Rate?", o: ["4%", "1.2%", "25%", "40%"], a: 0, e: "" }
  ],
  flashcards: [
    ["Inflation", "Sustained rise in general prices; CPI; target 2%"],
    ["Demand-pull", "Excess demand"],
    ["Cost-push", "Rising costs passed on"],
    ["Unemployment types", "Cyclical, structural, frictional, seasonal"],
    ["Unemployment rate", "Unemployed ÷ labour force × 100"],
    ["Measures", "Labour Force Survey (ILO) and Claimant Count"]
  ]
});

S2Data.add({
  id: "2d", group: 2, title: "Government objectives and policy",
  summary: "Income distribution, taxation, and fiscal, monetary and supply-side policy.",
  notes: `
<h3>Government objectives</h3>
<p>Economic growth, low unemployment, low and stable inflation, a balanced current account, and a fairer distribution of income.</p>
<h3>Income and wealth</h3>
<p><b>Income</b> is a flow (wages, rent, interest, profit, benefits); <b>wealth</b> is a stock of assets. Inequality is caused by differences in skills, inheritance, education and employment.</p>
<h3>Taxation</h3>
<table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr>
<tr><td>Progressive</td><td>Higher earners pay a larger percentage</td><td>Income tax</td></tr>
<tr><td>Regressive</td><td>Lower earners pay a larger percentage of income</td><td>VAT (in effect)</td></tr>
<tr><td>Direct</td><td>On income and wealth</td><td>Income tax, corporation tax</td></tr>
<tr><td>Indirect</td><td>On spending</td><td>VAT, excise duties</td></tr></table>
<h3>Policies</h3>
<table><tr><th>Policy</th><th>Tools</th></tr>
<tr><td>Fiscal</td><td>Government spending and taxation (the Budget)</td></tr>
<tr><td>Monetary</td><td>Interest rates (Bank of England); aims to hit the inflation target</td></tr>
<tr><td>Supply-side</td><td>Education and training, infrastructure, deregulation, lower business taxes: raise productive capacity</td></tr></table>
<p><b>Expansionary</b> policy (lower taxes, more spending, lower interest rates) boosts growth but risks inflation. <b>Conflicts</b> between objectives are common, e.g. cutting unemployment may raise inflation.</p>`,
  quiz: [
    { q: "Which is a progressive tax?", o: ["Income tax", "VAT", "Excise duty on alcohol", "Fuel duty"], a: 0, e: "" },
    { q: "VAT is an example of…", o: ["An indirect tax", "A direct tax", "A progressive tax", "A benefit"], a: 0, e: "" },
    { q: "Fiscal policy uses…", o: ["Government spending and taxation", "Interest rates", "Exchange rates only", "Tariffs only"], a: 0, e: "" },
    { q: "Monetary policy is set by…", o: ["The Bank of England", "The Treasury", "Parliament", "Local councils"], a: 0, e: "" },
    { q: "Which is a supply-side policy?", o: ["Funding training schemes", "Raising interest rates", "Increasing VAT", "Printing money"], a: 0, e: "" },
    { q: "Wealth is…", o: ["A stock of assets", "A flow of income", "A tax", "A wage"], a: 0, e: "" },
    { q: "Lowering interest rates is…", o: ["Expansionary monetary policy", "Contractionary fiscal policy", "Supply-side policy", "A tax"], a: 0, e: "" },
    { q: "A possible conflict is between…", o: ["Low unemployment and low inflation", "Growth and more jobs", "Low inflation and stability", "Training and productivity"], a: 0, e: "" },
    { q: "Corporation tax is a tax on…", o: ["Company profits", "Spending", "Imports", "Wages only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Objectives", "Growth, low unemployment, low inflation, balanced trade, fair income distribution"],
    ["Progressive / regressive", "Rich pay larger % / poor pay larger % of income"],
    ["Direct / indirect tax", "On income / on spending"],
    ["Fiscal policy", "Government spending and tax"],
    ["Monetary policy", "Interest rates; Bank of England"],
    ["Supply-side", "Training, infrastructure, deregulation"]
  ]
});

S2Data.add({
  id: "2e", group: 2, title: "International trade and the global economy",
  summary: "Why countries trade, free trade and protectionism, exchange rates, the balance of payments and globalisation.",
  notes: `
<h3>Why trade?</h3>
<p>Countries specialise in what they produce most efficiently and trade: more choice, lower prices, access to resources, larger markets and economies of scale.</p>
<h3>Free trade and protectionism</h3>
<ul>
<li><b>Free trade</b> has no barriers; trading blocs (e.g. the EU) reduce barriers between members.</li>
<li><b>Protectionism:</b> <b>tariffs</b> (taxes on imports), <b>quotas</b> (limits on quantity), subsidies to domestic firms.</li>
<li>Reasons for protection: protect jobs and infant industries, national security. Costs: higher prices, retaliation, less efficiency.</li>
</ul>
<h3>Exchange rates</h3>
<p>The price of one currency in terms of another. An <b>appreciation</b> (stronger pound) makes exports dearer and imports cheaper; a <b>depreciation</b> does the reverse.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>£1 = $1.25. A $50 item costs 50 ÷ 1.25 = £40.</div>
<h3>Balance of payments</h3>
<p>The <b>current account</b> records trade in goods and services, plus income flows. A <b>deficit</b> means more money flows out (imports) than in (exports). The UK usually has a deficit in goods and a surplus in services.</p>
<h3>Globalisation</h3>
<p>Growing integration of the world economy through trade, multinational companies, technology and migration. Benefits: growth, cheaper goods. Costs: job losses in some industries, inequality, environmental damage.</p>`,
  quiz: [
    { q: "A tariff is…", o: ["A tax on imports", "A limit on quantity", "A subsidy", "An exchange rate"], a: 0, e: "" },
    { q: "A quota is…", o: ["A limit on the quantity of imports", "A tax on imports", "A currency", "A trade surplus"], a: 0, e: "" },
    { q: "Appreciation of the pound makes UK exports…", o: ["More expensive abroad", "Cheaper abroad", "Unchanged", "Illegal"], a: 0, e: "" },
    { q: "A current account deficit means…", o: ["Imports exceed exports", "Exports exceed imports", "Trade is balanced", "No trade"], a: 0, e: "" },
    { q: "The UK usually has a surplus in…", o: ["Services", "Goods", "Both", "Neither"], a: 0, e: "" },
    { q: "£1 = $1.25. A $100 item costs…", o: ["£80", "£125", "£100", "£75"], a: 0, e: "" },
    { q: "A reason for protectionism is…", o: ["Protecting infant industries", "Lowering prices", "Increasing choice", "Encouraging efficiency"], a: 0, e: "" },
    { q: "A cost of protectionism is…", o: ["Retaliation from other countries", "Lower prices", "More choice", "Greater efficiency"], a: 0, e: "" },
    { q: "Globalisation is…", o: ["Growing integration of the world economy", "Closing borders", "Reducing trade", "Local production only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Benefits of trade", "Choice, lower prices, resources, bigger markets"],
    ["Protectionism", "Tariffs, quotas, subsidies"],
    ["Appreciation", "Exports dearer, imports cheaper"],
    ["Depreciation", "Exports cheaper, imports dearer"],
    ["Current account deficit", "Imports > exports"],
    ["Globalisation", "Trade, multinationals, technology, migration"]
  ]
});

S2Data.detail("2a", { mistakes: ["Saying the government sets interest rates: the Bank of England does."], tips: ["Trace the chain: interest rates → borrowing/saving → spending → growth and inflation."], fact: "UK Bank Rate was cut to a record low of 0.1% in March 2020." });
S2Data.detail("2b", { mistakes: ["Using nominal GDP to judge growth during inflation."], tips: ["Always say whether growth figures are real or nominal."], fact: "The UK economy shrank by about 10% in 2020, its largest fall in over 300 years." });
S2Data.detail("2c", { mistakes: ["Saying inflation means all prices rise: it's the general price level."], tips: ["Identify whether inflation is demand-pull or cost-push before suggesting a policy."], fact: "UK CPI inflation peaked at 11.1% in October 2022, driven largely by energy prices." });
S2Data.detail("2d", { mistakes: ["Confusing fiscal (government) and monetary (Bank of England) policy."], tips: ["For evaluation, mention time lags and conflicts between objectives."], fact: "The Bank of England has been independently responsible for setting interest rates since 1997." });
S2Data.detail("2e", { mistakes: ["Getting exchange-rate effects back to front."], tips: ["Use a numerical example to show how a currency change alters prices."], fact: "Over half of global trade is in intermediate goods: parts used to make other products." });
