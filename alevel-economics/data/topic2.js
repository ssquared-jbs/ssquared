/* A-level Economics² — Theme 2: The UK economy: performance and policies */

S2Data.add({
  id: "2a", group: 2, title: "Measures of economic performance",
  summary: "Economic growth and GDP, inflation and its measurement, employment and unemployment, and the balance of payments.",
  notes: R`
<h3>Economic growth</h3>
<ul>
<li><b>Gross domestic product (GDP)</b>: the total value of goods and services produced in a country in a year. <b>GNI</b> adds net income from abroad.</li>
<li><b>Real</b> GDP is adjusted for inflation; <b>nominal</b> GDP isn't. <b>GDP per capita</b> = GDP ÷ population.</li>
<li>Compare countries using <b>purchasing power parity (PPP)</b>, which adjusts for different price levels.</li>
<li>Limits of GDP for comparing living standards: ignores the informal economy, inequality, environment, leisure and quality of goods.</li>
<li><b>Wellbeing</b>: happiness isn't only driven by income (e.g. the ONS national wellbeing survey).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Nominal GDP rises 5% and inflation is 3%. Real GDP growth ≈ \(5 - 3 = 2\%\).<br>Real GDP \(= \dfrac{\text{nominal GDP}}{\text{price index}} \times 100\).</div>
<h3>Inflation</h3>
<ul>
<li><b>Inflation</b>: a sustained rise in the general price level. <b>Deflation</b>: a fall. <b>Disinflation</b>: a fall in the rate of inflation.</li>
<li>Measured by the <b>CPI</b> using a weighted basket of goods from the Living Costs and Food Survey. <b>RPI</b> includes housing costs such as mortgage interest.</li>
<li>Limits of CPI: basket changes slowly, misses quality changes, households differ.</li>
<li>Causes: <b>demand-pull</b> (AD rising faster than AS), <b>cost-push</b> (rising costs, e.g. energy or wages), and growth of the money supply.</li>
<li>Effects: lower real incomes for those on fixed incomes, menu and shoe-leather costs, falling international competitiveness, uncertainty that hurts investment.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example: a price index</span>A basket costs £250 in the base year and £265 now. Index \(= \dfrac{265}{250} \times 100 = 106\), so prices rose 6%.</div>
<h3>Employment and unemployment</h3>
<ul>
<li><b>Unemployment</b>: people willing and able to work who are actively seeking work but have no job.</li>
<li>Measured by the <b>Labour Force Survey</b> (ILO definition) or the <b>Claimant Count</b>.</li>
<li><b>Underemployment</b>: working fewer hours than wanted. <b>Inactivity</b>: not seeking work (students, retired, long-term sick).</li>
<li>Types: <b>frictional</b> (between jobs), <b>structural</b> (decline of industries, mismatch of skills), <b>cyclical</b> (demand-deficient, in recessions), <b>seasonal</b>, and real-wage inflexibility.</li>
<li>Effects: lost output, lower tax revenue and higher benefit spending, lower living standards, and skills loss (hysteresis).</li>
</ul>
<p>\[\text{unemployment rate} = \frac{\text{unemployed}}{\text{labour force}} \times 100\]</p>
<p>Migration affects the size and skills of the labour force.</p>
<h3>Balance of payments</h3>
<ul>
<li>The <b>current account</b>: trade in goods and services, primary income (investment income) and secondary income (transfers).</li>
<li>Also the capital and financial accounts (investment flows).</li>
<li>A <b>current account deficit</b> means more spent on imports than earned from exports. The UK has had a persistent deficit, financed by financial inflows.</li>
<li>Links to other objectives: e.g. fast growth can suck in imports.</li>
</ul>
`,
  quiz: [
    { q: "Real GDP is…", o: ["GDP adjusted for inflation", "GDP at current prices", "GDP per person", "GDP plus net income from abroad"], a: 0, e: "It shows the change in the volume of output." },
    { q: "Nominal GDP grew 6% and inflation was 4%. Real growth is about…", o: ["2%", "10%", "1.5%", "24%"], a: 0, e: R`\(6 - 4 = 2\%\).` },
    { q: "Purchasing power parity is used to…", o: ["Compare GDP across countries adjusting for price levels", "Measure inflation", "Measure unemployment", "Value the pound"], a: 0, e: "A dollar buys more in some countries than others." },
    { q: "The CPI measures inflation using…", o: ["A weighted basket of goods and services", "Only food prices", "House prices", "Wages"], a: 0, e: "Weights reflect household spending patterns." },
    { q: "Demand-pull inflation is caused by…", o: ["AD rising faster than AS", "Rising oil prices", "Higher wages only", "Falling demand"], a: 0, e: "Too much spending chasing too few goods." },
    { q: "Structural unemployment results from…", o: ["Long-term decline of industries and skills mismatch", "Recessions", "Seasonal changes", "Moving between jobs"], a: 0, e: "E.g. coal mining closures." },
    { q: "Cyclical unemployment is caused by…", o: ["Lack of aggregate demand in a downturn", "Changes in technology", "Search time between jobs", "Weather"], a: 0, e: "Also called demand-deficient unemployment." },
    { q: "The ILO measure of unemployment comes from…", o: ["The Labour Force Survey", "The Claimant Count", "Tax records", "The census only"], a: 0, e: "It surveys households and counts those actively seeking work." },
    { q: "The current account includes…", o: ["Trade in goods and services, and primary and secondary income", "Only exports", "Foreign direct investment", "Government borrowing"], a: 0, e: "Investment flows are in the financial account." }
  ],
  flashcards: [
    ["Real vs nominal GDP", "Inflation-adjusted vs current prices"],
    ["GDP per capita", R`\(\dfrac{\text{GDP}}{\text{population}}\)`],
    ["Inflation", "Sustained rise in the general price level"],
    ["CPI vs RPI", "RPI includes housing costs like mortgage interest"],
    ["Demand-pull vs cost-push", "AD too high vs rising costs"],
    ["Unemployment rate", R`\(\dfrac{\text{unemployed}}{\text{labour force}} \times 100\)`],
    ["Types of unemployment", "Frictional, structural, cyclical, seasonal"],
    ["Current account", "Goods, services, primary income, secondary income"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Aggregate demand",
  summary: "The components of AD, the AD curve, and the factors affecting consumption, investment, government spending and net exports.",
  notes: R`
<h3>Aggregate demand (AD)</h3>
<p>\[\text{AD} = C + I + G + (X - M)\]</p>
<table><tr><th>Component</th><th>Approx. UK share</th></tr>
<tr><td>Consumption (C)</td><td>about 60%</td></tr>
<tr><td>Investment (I)</td><td>about 17%</td></tr>
<tr><td>Government spending (G)</td><td>about 20%</td></tr>
<tr><td>Net exports (X − M)</td><td>small, usually negative</td></tr></table>
<ul>
<li>The AD curve slopes down against the price level: lower prices raise real wealth, make exports more competitive, and tend to lower interest rates.</li>
<li>A change in the price level is a <b>movement along</b> AD; a change in any component <b>shifts</b> AD.</li>
</ul>
<h3>Consumption</h3>
<ul>
<li>Influences: disposable income, interest rates, consumer confidence, wealth effects (house and share prices), availability of credit.</li>
<li><b>Marginal propensity to consume (MPC)</b>: the share of extra income spent. <b>Savings ratio</b>: share of disposable income saved.</li>
</ul>
<h3>Investment</h3>
<ul>
<li>Spending on capital goods (machinery, buildings). Gross investment includes replacing depreciated capital; net investment adds to the capital stock.</li>
<li>Influences: interest rates, business confidence (animal spirits), the rate of economic growth (accelerator), access to credit, government regulation, demand.</li>
<li><b>Accelerator</b>: investment depends on the <b>rate of change</b> of output, so it is volatile.</li>
</ul>
<h3>Government spending</h3>
<p>Depends on the trade (business) cycle (automatic stabilisers: benefits rise in recession) and on fiscal policy choices.</p>
<h3>Net exports</h3>
<ul>
<li>Influences: real income at home and abroad, exchange rates, the state of the world economy, protectionism, non-price factors (quality, design).</li>
<li>A weaker pound makes exports cheaper and imports dearer, which tends to raise net exports.</li>
</ul>
<div class="box box-key"><span class="box-title">Draw it</span>Price level on the vertical axis, real GDP on the horizontal. AD slopes down. A rise in C, I, G or net exports shifts AD right.</div>
`,
  quiz: [
    { q: "AD = …", o: ["C + I + G + (X − M)", "C + S + T", "C + I + G + X + M", "GDP − M"], a: 0, e: "Imports are subtracted because they're spending on foreign output." },
    { q: "The largest component of UK AD is…", o: ["Consumption", "Investment", "Government spending", "Net exports"], a: 0, e: "About 60% of GDP." },
    { q: "A fall in interest rates is likely to…", o: ["Increase consumption and investment", "Reduce consumption", "Reduce investment", "Reduce exports"], a: 0, e: "Borrowing is cheaper and saving less rewarding." },
    { q: "A rise in house prices increases consumption through…", o: ["The wealth effect", "The accelerator", "The multiplier", "Automatic stabilisers"], a: 0, e: "Homeowners feel richer." },
    { q: "The accelerator theory links investment to…", o: ["The rate of change of national income", "The level of interest rates", "The exchange rate", "Government spending"], a: 0, e: "Faster growth requires more capacity." },
    { q: "A depreciation of the pound is likely to…", o: ["Increase net exports", "Reduce exports", "Raise import volumes", "Shift AD left"], a: 0, e: "UK goods become cheaper abroad." },
    { q: "Net investment is…", o: ["Gross investment minus depreciation", "Gross investment plus depreciation", "Savings minus investment", "Government investment"], a: 0, e: "It's the addition to the capital stock." },
    { q: "A rise in the price level causes…", o: ["A movement along the AD curve", "A shift of AD right", "A shift of AD left", "A shift of AS"], a: 0, e: "Only non-price factors shift AD." },
    { q: "Higher consumer confidence will…", o: ["Shift AD right", "Shift AD left", "Shift AS left", "Have no effect"], a: 0, e: "Households spend more and save less." }
  ],
  flashcards: [
    ["AD formula", R`\(C + I + G + (X - M)\)`],
    ["Main influences on C", "Income, interest rates, confidence, wealth, credit"],
    ["Main influences on I", "Interest rates, confidence, accelerator, credit, demand"],
    ["Accelerator", "Investment depends on the rate of change of output"],
    ["Net investment", "Gross investment − depreciation"],
    ["Savings ratio", "Share of disposable income saved"],
    ["Influences on net exports", "Exchange rate, incomes at home and abroad, protectionism"],
    ["Why AD slopes down", "Wealth effect, trade effect, interest rate effect"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Aggregate supply",
  summary: "Short-run and long-run aggregate supply, factors that shift them, and Keynesian versus classical LRAS.",
  notes: R`
<h3>Short-run aggregate supply (SRAS)</h3>
<ul>
<li>SRAS slopes up: higher prices make production more profitable when some costs (e.g. wages) are fixed in the short run.</li>
<li>SRAS shifts with <b>costs of production</b>: raw material and energy prices, wages, exchange rates (import prices), taxes on business, productivity.</li>
<li>A <b>supply shock</b> (e.g. the 2022 energy price spike) shifts SRAS left, causing cost-push inflation.</li>
</ul>
<h3>Long-run aggregate supply (LRAS)</h3>
<ul>
<li>LRAS shows the economy's productive potential: the output when all resources are fully employed.</li>
<li>It depends on the <b>quantity and quality</b> of factors of production: technology, education and skills, labour force size (demographics, migration), infrastructure, capital stock, institutions and incentives.</li>
<li>An outward shift of LRAS is like an outward shift of the PPF.</li>
</ul>
<h3>Classical vs Keynesian LRAS</h3>
<table><tr><th>View</th><th>Shape</th><th>Implication</th></tr>
<tr><td>Classical (free market)</td><td>Vertical at full employment output \(Y_f\)</td><td>The economy self-corrects; in the long run AD only affects the price level</td></tr>
<tr><td>Keynesian</td><td>Horizontal at low output, then curving up and becoming vertical at \(Y_f\)</td><td>Economies can stay in recession with spare capacity; raising AD raises output with little inflation</td></tr></table>
<div class="box box-key"><span class="box-title">Draw it: Keynesian LRAS</span>Flat section (lots of spare capacity), then an upward-curving section (bottlenecks), then vertical at full capacity. Shifting AD right in the flat section raises real GDP only; in the vertical section it raises prices only.</div>
<h3>Macroeconomic equilibrium</h3>
<p>Where AD meets AS. Analyse shifts as for micro diagrams: e.g. a rise in AD with SRAS unchanged raises both real GDP and the price level.</p>
`,
  quiz: [
    { q: "SRAS shifts left when…", o: ["Oil prices rise", "Productivity improves", "Wages fall", "Business taxes fall"], a: 0, e: "Higher costs mean less output at each price level." },
    { q: "LRAS shows…", o: ["The productive potential of the economy", "Short-run costs", "Total spending", "The price level"], a: 0, e: "Output with all resources fully employed." },
    { q: "Which shifts LRAS right?", o: ["Improved education and skills", "A rise in government benefits", "A rise in consumer confidence", "Lower interest rates only"], a: 0, e: "It raises the quality of labour." },
    { q: "The classical LRAS is…", o: ["Vertical at full employment", "Horizontal", "Upward sloping", "L-shaped"], a: 0, e: "In the long run output is set by supply-side factors." },
    { q: "In the flat section of a Keynesian LRAS, a rise in AD…", o: ["Raises output with little inflation", "Raises only prices", "Reduces output", "Has no effect"], a: 0, e: "There's lots of spare capacity." },
    { q: "A depreciation of the pound may shift SRAS left because…", o: ["Imported raw materials become dearer", "Exports rise", "AD rises", "Interest rates fall"], a: 0, e: "Costs of imported inputs rise." },
    { q: "A negative supply shock tends to cause…", o: ["Higher prices and lower output", "Lower prices and higher output", "Higher output only", "Lower prices only"], a: 0, e: "SRAS shifts left: stagflation risk." },
    { q: "Net inward migration of working-age people is likely to…", o: ["Shift LRAS right", "Shift LRAS left", "Shift AD left", "Have no effect"], a: 0, e: "It raises the quantity of labour (and AD too)." },
    { q: "Keynesians believe economies…", o: ["Can stay below full employment for long periods", "Always self-correct quickly", "Never have spare capacity", "Have vertical LRAS at all output levels"], a: 0, e: "So they support demand management." }
  ],
  flashcards: [
    ["SRAS shifters", "Costs: raw materials, energy, wages, exchange rate, business taxes, productivity"],
    ["LRAS shifters", "Quantity and quality of factors: technology, skills, labour force, infrastructure"],
    ["Classical LRAS", "Vertical at full employment output"],
    ["Keynesian LRAS", "Flat, curving, then vertical at full capacity"],
    ["Supply shock", "Sudden change in costs shifting SRAS"],
    ["Rise in AD in vertical section", "Only the price level rises"],
    ["Macro equilibrium", "Where AD = AS"],
    ["LRAS and PPF", "Both show productive potential"]
  ]
});

S2Data.add({
  id: "2d", group: 2, title: "National income and the multiplier",
  summary: "The circular flow of income, injections and withdrawals, equilibrium national income and the multiplier.",
  notes: R`
<h3>The circular flow of income</h3>
<ul>
<li>Households supply factors to firms and receive income; they spend it on firms' goods and services.</li>
<li><b>Injections (J)</b> add to the flow: investment (I), government spending (G), exports (X).</li>
<li><b>Withdrawals (W)</b> leave it: savings (S), taxes (T), imports (M).</li>
<li>If \(J > W\), national income rises; if \(J < W\), it falls. Equilibrium is where \(J = W\).</li>
<li>Income and wealth are different: income is a <b>flow</b> (per period), wealth is a <b>stock</b> of assets.</li>
</ul>
<h3>The multiplier</h3>
<p>An injection causes a <b>larger final rise</b> in national income, because one person's spending is another's income, which is partly re-spent.</p>
<p>\[k = \frac{1}{1 - \text{MPC}} = \frac{1}{\text{MPW}} = \frac{1}{\text{MPS} + \text{MPT} + \text{MPM}}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>MPS = 0.1, MPT = 0.2, MPM = 0.2.
<ol><li>\(\text{MPW} = 0.1 + 0.2 + 0.2 = 0.5\).</li>
<li>\(k = \dfrac{1}{0.5} = 2\).</li>
<li>A £10 billion rise in investment raises national income by \(2 \times 10 = £20\) billion.</li></ol></div>
<ul>
<li>A higher MPC (lower withdrawals) gives a larger multiplier.</li>
<li>The multiplier works in reverse: a fall in spending causes a larger fall in income.</li>
<li>Limits: time lags, the economy may be near full capacity (so prices rise instead), and leakages vary. The UK multiplier is relatively small because the UK is open (high MPM) and taxes are significant.</li>
</ul>
`,
  quiz: [
    { q: "Which is an injection?", o: ["Exports", "Imports", "Savings", "Taxes"], a: 0, e: "Injections are I, G and X." },
    { q: "Which is a withdrawal?", o: ["Imports", "Government spending", "Investment", "Exports"], a: 0, e: "Withdrawals are S, T and M." },
    { q: "If injections exceed withdrawals, national income will…", o: ["Rise", "Fall", "Stay the same", "Become zero"], a: 0, e: "More is added than leaves the flow." },
    { q: "MPC = 0.8. The multiplier is…", o: ["5", "0.2", "1.25", "8"], a: 0, e: R`\(\dfrac{1}{1 - 0.8} = 5\).` },
    { q: "MPW = 0.4. The multiplier is…", o: ["2.5", "0.4", "4", "1.4"], a: 0, e: R`\(\dfrac{1}{0.4} = 2.5\).` },
    { q: "Investment rises £5bn and k = 3. National income rises by…", o: ["£15bn", "£5bn", "£8bn", "£1.67bn"], a: 0, e: R`\(3 \times 5 = 15\).` },
    { q: "A rise in the marginal propensity to import will…", o: ["Reduce the multiplier", "Increase the multiplier", "Have no effect", "Raise savings"], a: 0, e: "More spending leaks abroad each round." },
    { q: "Wealth differs from income because wealth is…", o: ["A stock of assets", "A flow per period", "Only cash", "Always taxed"], a: 0, e: "Income is a flow; wealth is a stock." },
    { q: "The multiplier effect is smaller when the economy is near full capacity because…", o: ["Extra spending pushes up prices rather than output", "Withdrawals are zero", "MPC is 1", "Investment stops"], a: 0, e: "Real output can't rise much." }
  ],
  flashcards: [
    ["Injections", "Investment, government spending, exports"],
    ["Withdrawals", "Savings, taxes, imports"],
    ["Equilibrium income", "Injections = withdrawals"],
    ["Multiplier formula", R`\(k = \dfrac{1}{1 - \text{MPC}} = \dfrac{1}{\text{MPW}}\)`],
    ["MPW", R`\(\text{MPS} + \text{MPT} + \text{MPM}\)`],
    ["Multiplier effect", "Injection gives a larger final change in income"],
    ["Why UK multiplier is small", "High MPM and taxes"],
    ["Income vs wealth", "Flow vs stock"]
  ]
});

S2Data.add({
  id: "2e", group: 2, title: "Economic growth",
  summary: "Actual and potential growth, output gaps, the trade cycle and the costs and benefits of growth.",
  notes: R`
<h3>Causes of growth</h3>
<ul>
<li><b>Actual growth</b>: an increase in real GDP (a shift of AD or using spare capacity). Shown by a movement towards the PPF.</li>
<li><b>Potential growth</b>: an increase in productive capacity (LRAS shifts right). Shown by an outward PPF shift.</li>
<li>Export-led growth depends on international trade.</li>
</ul>
<h3>Output gaps</h3>
<ul>
<li>The <b>output gap</b> is the difference between actual and potential output.</li>
<li><b>Negative output gap</b>: actual below potential; spare capacity, cyclical unemployment, low inflation.</li>
<li><b>Positive output gap</b>: actual above trend; resources over-used, inflationary pressure.</li>
<li>Output gaps are hard to measure because potential output can't be observed.</li>
</ul>
<h3>The trade (business) cycle</h3>
<table><tr><th>Phase</th><th>Features</th></tr>
<tr><td>Boom</td><td>Fast growth, low unemployment, rising inflation, imports rising</td></tr>
<tr><td>Downturn</td><td>Slowing growth</td></tr>
<tr><td>Recession</td><td>Two consecutive quarters of negative growth; rising unemployment</td></tr>
<tr><td>Recovery</td><td>Growth resumes</td></tr></table>
<p>Fluctuations are caused by demand and supply shocks, confidence and the accelerator, and credit cycles.</p>
<h3>The impact of growth</h3>
<table><tr><th>Benefits</th><th>Costs</th></tr>
<tr><td>Higher living standards and incomes</td><td>Environmental damage and resource depletion</td></tr>
<tr><td>Higher tax revenue for public services</td><td>Inflation if growth exceeds trend</td></tr>
<tr><td>Lower unemployment</td><td>Inequality may widen</td></tr>
<tr><td>Firms profit and invest</td><td>Current account deficit as imports rise</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>Real GDP rises from £2.50 trillion to £2.55 trillion. Growth \(= \dfrac{2.55 - 2.50}{2.50} \times 100 = 2\%\).</div>
<p>Sustainable growth meets present needs without harming future generations.</p>
`,
  quiz: [
    { q: "Potential growth is shown by…", o: ["An outward shift of LRAS", "A rise in AD with spare capacity", "A movement inside the PPF", "Higher inflation"], a: 0, e: "Productive capacity increases." },
    { q: "A negative output gap means…", o: ["Actual output is below potential", "Actual output is above potential", "Inflation is high", "There is no unemployment"], a: 0, e: "There is spare capacity." },
    { q: "A positive output gap is likely to cause…", o: ["Rising inflation", "Rising unemployment", "Deflation", "Falling imports"], a: 0, e: "Resources are over-stretched." },
    { q: "A recession is commonly defined as…", o: ["Two consecutive quarters of negative growth", "One month of falling output", "High inflation", "A fall in the stock market"], a: 0, e: "That's the technical UK definition." },
    { q: "Real GDP rises from £400bn to £412bn. Growth = ?", o: ["3%", "12%", "1.2%", "4%"], a: 0, e: R`\(\dfrac{12}{400} \times 100 = 3\%\).` },
    { q: "Which is a cost of economic growth?", o: ["Environmental damage", "Higher living standards", "Lower unemployment", "Higher tax revenue"], a: 0, e: "More production can mean more pollution." },
    { q: "Why are output gaps hard to measure?", o: ["Potential output can't be directly observed", "GDP isn't measured", "Inflation is zero", "Unemployment is constant"], a: 0, e: "It must be estimated from trends." },
    { q: "In a boom, the current account tends to…", o: ["Worsen as imports rise", "Improve sharply", "Be unaffected", "Become exactly zero"], a: 0, e: "Rising incomes suck in imports." },
    { q: "Export-led growth relies on…", o: ["Rising demand for a country's exports", "Higher imports", "Falling investment", "Lower government spending"], a: 0, e: "E.g. China and Germany." }
  ],
  flashcards: [
    ["Actual growth", "Rise in real GDP"],
    ["Potential growth", "Rise in productive capacity (LRAS right)"],
    ["Negative output gap", "Actual < potential; spare capacity"],
    ["Positive output gap", "Actual > potential; inflationary"],
    ["Recession", "Two consecutive quarters of negative growth"],
    ["Trade cycle phases", "Boom, downturn, recession, recovery"],
    ["Growth rate", R`\(\dfrac{\text{new} - \text{old}}{\text{old}} \times 100\)`],
    ["Sustainable growth", "Meets present needs without harming the future"]
  ]
});

S2Data.add({
  id: "2f", group: 2, title: "Macroeconomic objectives and demand-side policies",
  summary: "The main macro objectives, monetary policy and the MPC, quantitative easing, fiscal policy, and Keynesian versus classical approaches.",
  notes: R`
<h3>Macroeconomic objectives</h3>
<ul>
<li>Economic growth; low unemployment; low and stable inflation (CPI target 2%); balance of payments equilibrium on the current account.</li>
<li>Also: balanced government budget, protecting the environment, greater income equality.</li>
</ul>
<h3>Monetary policy</h3>
<ul>
<li>Set by the Bank of England's <b>Monetary Policy Committee</b> (MPC, 9 members) to hit the 2% CPI target.</li>
<li>Main tool: <b>Bank Rate</b>. Other tools: quantitative easing (QE).</li>
</ul>
<div class="box box-key"><span class="box-title">Transmission mechanism: a cut in Bank Rate</span>
<ol><li>Commercial banks cut lending and saving rates.</li>
<li>Borrowing is cheaper and saving less rewarding, so C and I rise.</li>
<li>Mortgage payments fall, raising disposable income; asset prices rise (wealth effect).</li>
<li>The pound tends to depreciate, raising net exports.</li>
<li>AD shifts right, raising output and inflationary pressure.</li></ol></div>
<ul>
<li><b>QE</b>: the Bank creates money to buy government bonds, raising bond prices, lowering long-term interest rates and increasing the money supply. Used after 2008 and in 2020.</li>
<li>Limits: time lags (up to 2 years), the 'zero lower bound', low confidence means people may not borrow, asset price inflation.</li>
</ul>
<h3>Fiscal policy</h3>
<ul>
<li>Changes in government spending and taxation to influence AD.</li>
<li><b>Expansionary</b>: higher G or lower T; <b>contractionary</b>: the reverse.</li>
<li><b>Direct taxes</b> on income (income tax, corporation tax); <b>indirect taxes</b> on spending (VAT, duties).</li>
<li><b>Budget deficit</b>: spending > revenue in a year. <b>National debt</b>: the total accumulated stock of borrowing.</li>
<li><b>Automatic stabilisers</b>: tax revenue rises and benefit spending falls in booms (and the reverse in recessions) without new decisions. <b>Discretionary</b> policy is a deliberate change.</li>
</ul>
<h3>Keynesian vs classical approaches</h3>
<table><tr><th>Keynesian</th><th>Classical / monetarist</th></tr>
<tr><td>Use fiscal policy to manage AD and close negative output gaps</td><td>Markets self-correct; focus on supply side and controlling inflation</td></tr>
<tr><td>Multiplier makes government spending effective</td><td>Government borrowing can <b>crowd out</b> private investment</td></tr></table>
<p>Example: the 2008 financial crisis led to cuts in Bank Rate to 0.5%, QE, and a temporary VAT cut; the Great Depression of the 1930s inspired Keynes.</p>
`,
  quiz: [
    { q: "The UK inflation target is…", o: ["2% CPI", "0% CPI", "3% RPI", "5% CPI"], a: 0, e: "Set by the government, achieved by the Bank of England." },
    { q: "Monetary policy in the UK is set by…", o: ["The Bank of England's MPC", "The Treasury", "Parliament", "The Office for Budget Responsibility"], a: 0, e: "It has been independent since 1997." },
    { q: "A rise in Bank Rate is likely to…", o: ["Reduce consumption and investment", "Increase borrowing", "Weaken the pound", "Raise inflation"], a: 0, e: "Borrowing becomes dearer and saving more attractive." },
    { q: "Quantitative easing involves…", o: ["The central bank creating money to buy bonds", "Raising taxes", "Cutting government spending", "Printing banknotes for households"], a: 0, e: "It lowers long-term rates and boosts the money supply." },
    { q: "Expansionary fiscal policy is…", o: ["Higher government spending or lower taxes", "Higher interest rates", "Lower government spending", "Higher taxes"], a: 0, e: "It shifts AD right." },
    { q: "A budget deficit occurs when…", o: ["Government spending exceeds tax revenue in a year", "Imports exceed exports", "Debt is repaid", "Taxes exceed spending"], a: 0, e: "The national debt is the accumulated stock." },
    { q: "Which is an automatic stabiliser?", o: ["Unemployment benefits rising in a recession", "A new road-building programme", "A one-off VAT cut", "QE"], a: 0, e: "It happens without a new policy decision." },
    { q: "Crowding out means…", o: ["Government borrowing reduces private sector spending", "Imports replace exports", "Firms leave the market", "Prices rise"], a: 0, e: "Higher borrowing can push up interest rates." },
    { q: "Corporation tax is…", o: ["A direct tax on company profits", "An indirect tax", "A tax on imports", "A tax on spending"], a: 0, e: "Direct taxes are on income and profits." }
  ],
  flashcards: [
    ["Main macro objectives", "Growth, low unemployment, 2% inflation, current account balance"],
    ["MPC", "Bank of England committee that sets Bank Rate"],
    ["Cut in Bank Rate", "Cheaper borrowing, more C and I, weaker pound, AD right"],
    ["Quantitative easing", "Central bank creates money to buy bonds"],
    ["Fiscal policy", "Changes in government spending and taxation"],
    ["Deficit vs debt", "Annual shortfall vs accumulated stock"],
    ["Automatic stabilisers", "Taxes and benefits that change with the cycle without new decisions"],
    ["Crowding out", "Government borrowing reduces private spending"]
  ]
});

S2Data.add({
  id: "2g", group: 2, title: "Supply-side policies and policy conflicts",
  summary: "Market-based and interventionist supply-side policies, and conflicts and trade-offs between macroeconomic objectives.",
  notes: R`
<h3>Supply-side policies</h3>
<p>Aim to increase the <b>productive capacity</b> of the economy (shift LRAS right) by improving incentives and the quality and quantity of factors of production.</p>
<table><tr><th>Market-based</th><th>Interventionist</th></tr>
<tr><td>Cut income and corporation taxes to improve incentives</td><td>Spending on education and training</td></tr>
<tr><td>Reduce trade union power; more flexible labour markets</td><td>Infrastructure investment (roads, broadband, rail)</td></tr>
<tr><td>Deregulation and privatisation to raise competition</td><td>Industrial policy: subsidies for R&D, help for key sectors</td></tr>
<tr><td>Cut benefits to increase incentives to work</td><td>Healthcare spending to raise workforce productivity</td></tr></table>
<ul>
<li>Strengths: can raise growth without inflation, improve competitiveness and reduce structural unemployment.</li>
<li>Weaknesses: long time lags, high cost (opportunity cost), uncertain outcomes, market-based ones can increase inequality.</li>
</ul>
<h3>Conflicts and trade-offs between objectives</h3>
<table><tr><th>Conflict</th><th>Why</th></tr>
<tr><td>Inflation vs unemployment</td><td>Lower unemployment can push up wages and prices (short-run Phillips curve)</td></tr>
<tr><td>Growth vs current account</td><td>Rising incomes increase imports</td></tr>
<tr><td>Growth vs environment</td><td>More production uses more resources and causes pollution</td></tr>
<tr><td>Growth vs inequality</td><td>The gains may go mainly to the rich</td></tr>
<tr><td>Inflation vs growth</td><td>Higher interest rates to cut inflation reduce growth</td></tr></table>
<div class="box box-key"><span class="box-title">Phillips curve</span>The short-run Phillips curve shows an inverse relationship between unemployment and inflation. In the long run (Friedman's view), it's vertical at the natural rate of unemployment, so there's no lasting trade-off.</div>
<p>Supply-side policies can reduce conflicts: shifting LRAS right allows growth with low inflation.</p>
`,
  quiz: [
    { q: "Supply-side policies aim to…", o: ["Increase productive capacity", "Raise AD only", "Increase inflation", "Reduce exports"], a: 0, e: "They shift LRAS right." },
    { q: "Which is a market-based supply-side policy?", o: ["Cutting income tax rates", "Government spending on training", "Building new railways", "Subsidising R&D"], a: 0, e: "It improves incentives through the market." },
    { q: "Which is an interventionist supply-side policy?", o: ["Spending on education and training", "Privatisation", "Deregulation", "Reducing trade union power"], a: 0, e: "The government directly improves human capital." },
    { q: "A key weakness of many supply-side policies is…", o: ["Long time lags", "They cause inflation", "They have no cost", "They only affect AD"], a: 0, e: "Education spending takes years to raise productivity." },
    { q: "The short-run Phillips curve shows…", o: ["An inverse relationship between inflation and unemployment", "A positive relationship", "No relationship", "Growth vs debt"], a: 0, e: "Lower unemployment tends to come with higher inflation." },
    { q: "Fast growth may worsen the current account because…", o: ["Higher incomes raise imports", "Exports rise", "The pound weakens", "Savings rise"], a: 0, e: "UK consumers buy many imported goods." },
    { q: "Supply-side policies can reduce policy conflicts because…", o: ["They allow growth without inflation", "They raise AD", "They raise interest rates", "They cut exports"], a: 0, e: "More capacity means less pressure on prices." },
    { q: "Privatisation aims to…", o: ["Raise efficiency through competition and profit incentives", "Increase state ownership", "Raise taxes", "Reduce competition"], a: 0, e: "E.g. BT and British Gas in the 1980s." },
    { q: "Market-based supply-side policies may…", o: ["Increase income inequality", "Reduce inequality always", "Raise taxes on the rich", "Increase union power"], a: 0, e: "Tax cuts and benefit cuts can favour higher earners." }
  ],
  flashcards: [
    ["Supply-side policy", "Increases productive capacity; LRAS shifts right"],
    ["Market-based examples", "Tax cuts, deregulation, privatisation, labour market reform"],
    ["Interventionist examples", "Education, training, infrastructure, R&D subsidies"],
    ["Weaknesses", "Time lags, cost, uncertainty, inequality"],
    ["Inflation vs unemployment", "Short-run Phillips curve trade-off"],
    ["Growth vs current account", "Higher incomes raise imports"],
    ["Long-run Phillips curve", "Vertical at the natural rate of unemployment"],
    ["Reducing conflicts", "Supply-side growth avoids inflation"]
  ]
});

S2Data.detail("2a", { mistakes: ["Saying deflation is a fall in the rate of inflation: that's disinflation. Deflation is falling prices."], tips: ["Always say whether you mean real or nominal GDP, and per capita where comparing living standards."], fact: "UK CPI inflation peaked at 11.1% in October 2022, the highest in over 40 years." });
S2Data.detail("2b", { mistakes: ["Adding imports to AD: imports are subtracted as \\(X - M\\)."], tips: ["Name the component of AD a change affects, then explain the chain to output and prices."], fact: "Household consumption accounts for roughly 60% of UK GDP." });
S2Data.detail("2c", { mistakes: ["Shifting LRAS for a rise in demand: AD factors shift AD, not LRAS."], tips: ["Separate short-run cost changes (SRAS) from long-run capacity changes (LRAS)."], fact: "Brent crude oil prices rose above $120 a barrel in 2022, a classic negative supply shock." });
S2Data.detail("2d", { mistakes: ["Using MPS alone when there are taxes and imports: use MPW."], tips: ["Show the multiplier formula, substitute and give the final change in national income with units."], fact: "Keynes and his student Richard Kahn developed the multiplier idea in the early 1930s." });
S2Data.detail("2e", { mistakes: ["Calling any slow growth a recession: it needs negative growth for two quarters."], tips: ["Draw both actual and potential growth on AD/AS: AD right vs LRAS right."], fact: "The UK economy shrank by about 10% in 2020, its largest annual fall in over 300 years." });
S2Data.detail("2f", { mistakes: ["Saying the government sets interest rates: the Bank of England's MPC does."], tips: ["Write out the monetary transmission mechanism step by step to C, I and net exports."], fact: "Bank Rate was held at a record low of 0.1% from March 2020 to December 2021." });
S2Data.detail("2g", { mistakes: ["Listing supply-side policies without explaining how each raises capacity."], tips: ["Evaluate with time lags, cost, effectiveness and who gains."], fact: "The Phillips curve is named after New Zealand economist Bill Phillips, who also built a hydraulic computer of the economy called the MONIAC." });
