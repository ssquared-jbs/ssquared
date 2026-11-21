/* Business² — Theme 1: Investigating small business */

S2Data.add({
  id: "1a", group: 1, title: "Enterprise and entrepreneurship",
  summary: "Why new business ideas come about, risk and reward, and the role of entrepreneurs.",
  notes: `
<h3>Where do business ideas come from?</h3>
<ul>
<li><b>Changes in technology</b> (e.g. apps, online shopping).</li>
<li><b>Changes in what consumers want</b> (e.g. healthy food, sustainable products).</li>
<li><b>Products becoming obsolete</b> (e.g. DVDs replaced by streaming).</li>
<li>Creating something new (<b>original</b>) or improving something that exists (<b>adapting</b>).</li>
</ul>
<h3>Risk and reward</h3>
<table><tr><th>Risks</th><th>Rewards</th></tr>
<tr><td>Business failure</td><td>Business success</td></tr>
<tr><td>Financial loss (savings, loans)</td><td>Profit</td></tr>
<tr><td>Lack of security (no regular wage)</td><td>Independence: being your own boss</td></tr></table>
<h3>The role of business enterprise</h3>
<p>Businesses produce goods or services, meet customer needs, and <b>add value</b> through convenience, branding, quality, design or a unique selling point (USP).</p>
<h3>The role of the entrepreneur</h3>
<p>Entrepreneurs organise resources, make business decisions and take risks.</p>
<p><b>Qualities:</b> determination, risk-taking, creativity, resilience, initiative.</p>
<p><b>Motives:</b> financial (profit, wealth) and non-financial (independence, satisfaction, flexibility, helping others).</p>`,
  quiz: [
    { q: "An entrepreneur is someone who…", o: ["Organises resources and takes risks to run a business", "Works for a large company", "Only invests money", "Works in government"], a: 0, e: "" },
    { q: "Which is a reward of enterprise?", o: ["Independence", "Lack of security", "Financial loss", "Business failure"], a: 0, e: "" },
    { q: "A product becoming obsolete means…", o: ["It is outdated and no longer wanted", "It is new", "It is cheap", "It is illegal"], a: 0, e: "" },
    { q: "Adding value means…", o: ["Making a product worth more than its inputs", "Raising prices only", "Cutting quality", "Reducing costs only"], a: 0, e: "" },
    { q: "A USP is…", o: ["A unique selling point", "A universal sales price", "A unit of stock", "A user service plan"], a: 0, e: "" },
    { q: "Which is a non-financial motive?", o: ["Independence", "Profit", "Wealth", "Higher income"], a: 0, e: "" },
    { q: "Which is a risk of starting a business?", o: ["Losing your savings", "Being your own boss", "Making profit", "Flexibility"], a: 0, e: "" },
    { q: "A key quality of an entrepreneur is…", o: ["Resilience", "Avoiding risk", "Following orders", "Lack of ideas"], a: 0, e: "" },
    { q: "Which is a way to add value?", o: ["Branding", "Using poorer materials", "Slower delivery", "Hiding the product"], a: 0, e: "" }
  ],
  flashcards: [
    ["Business ideas", "Technology, changing wants, obsolete products"],
    ["Risks", "Failure, financial loss, lack of security"],
    ["Rewards", "Success, profit, independence"],
    ["Added value", "Convenience, branding, quality, design, USP"],
    ["Entrepreneur", "Organises resources, makes decisions, takes risks"],
    ["Motives", "Financial and non-financial"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Spotting a business opportunity",
  summary: "Customer needs, market research, market segmentation, market mapping and competition.",
  notes: `
<h3>Customer needs</h3>
<p>Price, quality, choice and convenience. Businesses that meet these well gain sales and loyalty.</p>
<h3>Market research</h3>
<table><tr><th>Primary (field)</th><th>Secondary (desk)</th></tr>
<tr><td>Surveys, questionnaires, interviews, focus groups, observation</td><td>Internet, reports, government statistics, newspapers</td></tr>
<tr><td>Specific and up to date, but expensive and time-consuming</td><td>Cheaper and quicker, but may be out of date or not specific</td></tr></table>
<p><b>Qualitative</b> data (opinions) and <b>quantitative</b> data (numbers). Social media is increasingly used for research. Data must be reliable and from a large enough sample.</p>
<h3>Market segmentation</h3>
<p>Dividing a market into groups with similar characteristics: <b>location</b>, <b>demographics</b> (age, gender, income), <b>lifestyle</b> and <b>income</b>. It helps target products and marketing.</p>
<h3>Market mapping</h3>
<p>A diagram with two features as axes (e.g. price and quality) used to place competitors and identify <b>gaps in the market</b>.</p>
<h3>Competition</h3>
<p>Businesses compete on price, quality, location, product range and customer service. Strong competition means lower prices and the need to differentiate.</p>`,
  quiz: [
    { q: "Primary research is…", o: ["Collected first-hand", "Taken from existing sources", "Always free", "Only numbers"], a: 0, e: "" },
    { q: "Which is secondary research?", o: ["Government statistics", "A questionnaire", "A focus group", "Observation"], a: 0, e: "" },
    { q: "A drawback of primary research is that it is…", o: ["Expensive and time-consuming", "Always out of date", "Not specific", "Free"], a: 0, e: "" },
    { q: "Qualitative data is…", o: ["Opinions and views", "Numbers", "Sales figures", "Percentages"], a: 0, e: "" },
    { q: "Segmenting by age is…", o: ["Demographic segmentation", "Location segmentation", "Lifestyle segmentation", "Product mapping"], a: 0, e: "" },
    { q: "A market map helps identify…", o: ["Gaps in the market", "Profit", "Cash flow", "Interest rates"], a: 0, e: "" },
    { q: "Which is a customer need?", o: ["Convenience", "High fixed costs", "Low wages", "Complex products"], a: 0, e: "" },
    { q: "A focus group is…", o: ["A small group discussing a product", "A government report", "A market map", "A sales record"], a: 0, e: "" },
    { q: "Strong competition usually leads to…", o: ["Lower prices for customers", "Higher prices", "Less choice", "No change"], a: 0, e: "" }
  ],
  flashcards: [
    ["Customer needs", "Price, quality, choice, convenience"],
    ["Primary research", "First-hand: surveys, focus groups"],
    ["Secondary research", "Existing data: internet, reports"],
    ["Segmentation", "Location, demographics, lifestyle, income"],
    ["Market map", "Two axes; spot gaps"],
    ["Competing", "Price, quality, location, range, service"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Putting a business idea into practice",
  summary: "Business aims and objectives, revenue, costs and profit, break-even, cash flow and sources of finance.",
  notes: `
<h3>Aims and objectives</h3>
<p>Financial (survival, profit, sales, market share, financial security) and non-financial (social goals, personal satisfaction, challenge, independence). They differ between businesses.</p>
<h3>Revenue, costs and profit</h3>
<ul>
<li><b>Revenue</b> = price × quantity sold.</li>
<li><b>Fixed costs</b> don't change with output (rent); <b>variable costs</b> do (materials).</li>
<li><b>Total costs</b> = fixed costs + (variable cost per unit × quantity).</li>
<li><b>Profit</b> = total revenue − total costs.</li>
<li><b>Interest</b> (%) = (total repayment − borrowed amount) ÷ borrowed amount × 100.</li>
</ul>
<h3>Break-even</h3>
<p><b>Break-even output</b> = fixed costs ÷ (selling price − variable cost per unit).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Fixed costs £6000; price £10; variable cost £4. Break-even = 6000 ÷ (10 − 4) = <b>1000 units</b>.</div>
<p><b>Margin of safety</b> = actual sales − break-even output. On a break-even chart, profit is to the right of the break-even point.</p>
<h3>Cash and cash flow</h3>
<ul>
<li><b>Cash flow forecast:</b> predicted inflows and outflows. Net cash flow = inflows − outflows. Closing balance = opening balance + net cash flow.</li>
<li>Cash is essential to pay suppliers, staff and bills; a profitable business can still fail if it runs out of cash.</li>
</ul>
<h3>Sources of finance (small business)</h3>
<p><b>Short-term:</b> overdraft, trade credit. <b>Long-term:</b> personal savings, venture capital, share capital, loans, retained profit, crowdfunding.</p>`,
  quiz: [
    { q: "Revenue equals…", o: ["Price × quantity", "Costs − profit", "Fixed + variable costs", "Profit ÷ price"], a: 0, e: "" },
    { q: "Rent is usually a…", o: ["Fixed cost", "Variable cost", "Revenue", "Profit"], a: 0, e: "" },
    { q: "Raw materials are a…", o: ["Variable cost", "Fixed cost", "Revenue", "Asset"], a: 0, e: "" },
    { q: "Break-even output =", o: ["Fixed costs ÷ (price − variable cost per unit)", "Revenue − costs", "Price × quantity", "Fixed costs × price"], a: 0, e: "" },
    { q: "Fixed costs £2000, price £15, variable cost £5. Break-even?", o: ["200 units", "100 units", "400 units", "133 units"], a: 0, e: "" },
    { q: "Margin of safety =", o: ["Actual sales − break-even output", "Profit − costs", "Price − variable cost", "Revenue ÷ costs"], a: 0, e: "" },
    { q: "Net cash flow =", o: ["Inflows − outflows", "Profit − revenue", "Opening + closing", "Costs + revenue"], a: 0, e: "" },
    { q: "Which is a short-term source of finance?", o: ["Overdraft", "Share capital", "Venture capital", "Retained profit"], a: 0, e: "" },
    { q: "Crowdfunding raises money from…", o: ["Many people, usually online", "One bank", "The owner only", "Suppliers"], a: 0, e: "" }
  ],
  flashcards: [
    ["Revenue", "Price × quantity"],
    ["Total costs", "Fixed + variable"],
    ["Profit", "Revenue − total costs"],
    ["Break-even", "Fixed costs ÷ (price − variable cost per unit)"],
    ["Margin of safety", "Actual sales − break-even output"],
    ["Cash flow", "Closing = opening + (inflows − outflows)"],
    ["Finance", "Short: overdraft, trade credit. Long: loans, savings, shares, crowdfunding"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Making the business effective",
  summary: "Business ownership, limited liability, franchising, location, the marketing mix and business plans.",
  notes: `
<h3>Business ownership</h3>
<table><tr><th>Type</th><th>Features</th></tr>
<tr><td>Sole trader</td><td>One owner; keeps all profit; full control; <b>unlimited liability</b></td></tr>
<tr><td>Partnership</td><td>2–20 owners; shared skills and finance; unlimited liability; disagreements possible</td></tr>
<tr><td>Private limited company (Ltd)</td><td>Owned by shareholders; <b>limited liability</b>; shares not sold publicly; more paperwork</td></tr></table>
<p><b>Unlimited liability:</b> owners are personally liable for all business debts. <b>Limited liability:</b> owners can only lose what they invested.</p>
<h3>Franchising</h3>
<p>The <b>franchisee</b> pays the <b>franchisor</b> to use its brand and business model. Pros: proven idea, support, brand recognition. Cons: fees and royalties, less freedom.</p>
<h3>Location</h3>
<p>Proximity to the market, labour, materials and competitors; the internet reduces the importance of location for some businesses.</p>
<h3>The marketing mix (4Ps)</h3>
<p><b>Product</b>, <b>Price</b>, <b>Promotion</b> and <b>Place</b> must work together and suit the target market. Technology (e-commerce, social media) affects every P.</p>
<h3>Business plans</h3>
<p>Set out the idea, aims, target market, forecast revenue and costs, cash flow, finance, location and marketing. They help secure finance and reduce risk, but forecasts can be wrong.</p>`,
  quiz: [
    { q: "A sole trader has…", o: ["Unlimited liability", "Limited liability", "Shareholders", "No owner"], a: 0, e: "" },
    { q: "Limited liability means owners…", o: ["Can only lose what they invested", "Lose personal possessions", "Pay no tax", "Never lose money"], a: 0, e: "" },
    { q: "A private limited company is shown by…", o: ["Ltd", "PLC", "LLP only", "Co-op"], a: 0, e: "" },
    { q: "A partnership usually has…", o: ["2–20 owners", "One owner", "Public shareholders", "No profit"], a: 0, e: "" },
    { q: "In franchising, the business paying for the brand is the…", o: ["Franchisee", "Franchisor", "Shareholder", "Supplier"], a: 0, e: "" },
    { q: "An advantage of franchising for the franchisee is…", o: ["A proven business model", "No fees", "Total freedom", "No competition"], a: 0, e: "" },
    { q: "The 4Ps are…", o: ["Product, price, promotion, place", "Profit, price, people, place", "Product, profit, power, promotion", "Plan, price, product, people"], a: 0, e: "" },
    { q: "A business plan helps to…", o: ["Secure finance and reduce risk", "Guarantee success", "Remove all costs", "Avoid tax"], a: 0, e: "" },
    { q: "Location matters less for…", o: ["Online businesses", "Cafés", "Hairdressers", "Corner shops"], a: 0, e: "" }
  ],
  flashcards: [
    ["Sole trader", "One owner; unlimited liability"],
    ["Partnership", "2–20 owners; unlimited liability"],
    ["Ltd", "Shareholders; limited liability; private shares"],
    ["Franchise", "Pay to use a brand: support vs fees"],
    ["Marketing mix", "Product, price, promotion, place"],
    ["Business plan", "Aims, market, forecasts, finance"]
  ]
});

S2Data.add({
  id: "1e", group: 1, title: "Understanding external influences",
  summary: "Stakeholders, technology, legislation and the economy: interest rates, exchange rates, inflation and unemployment.",
  notes: `
<h3>Stakeholders</h3>
<p>Anyone affected by a business: owners, employees, customers, suppliers, local community, government, pressure groups. Their objectives can <b>conflict</b> (e.g. owners want lower costs; employees want higher pay).</p>
<h3>Technology</h3>
<p>E-commerce, social media, digital communication and payment systems affect sales, marketing and costs.</p>
<h3>Legislation</h3>
<ul>
<li><b>Employment law:</b> recruitment, pay (National Minimum and Living Wage), discrimination, health and safety.</li>
<li><b>Consumer law:</b> quality, consumer rights when buying goods.</li>
<li>Compliance raises costs, but non-compliance risks fines and reputational damage.</li>
</ul>
<h3>The economy</h3>
<table><tr><th>Factor</th><th>Impact on business</th></tr>
<tr><td>Unemployment rises</td><td>Lower consumer spending; easier to recruit</td></tr>
<tr><td>Inflation (rising prices)</td><td>Higher costs; customers may spend less</td></tr>
<tr><td>Interest rates rise</td><td>Loans cost more; consumers spend less, save more</td></tr>
<tr><td>Government taxation</td><td>Affects costs and consumer income</td></tr>
<tr><td>Exchange rate rises (strong pound)</td><td>Imports cheaper; exports more expensive</td></tr></table>
<p>Remember <b>SPICED</b>: Strong Pound, Imports Cheap, Exports Dear.</p>
<h3>External influences</h3>
<p>Businesses respond to changes by adjusting prices, products, costs and staffing.</p>`,
  quiz: [
    { q: "A stakeholder is…", o: ["Anyone affected by a business", "Only a shareholder", "Only an employee", "Only a customer"], a: 0, e: "" },
    { q: "Which stakeholders often conflict over wages?", o: ["Owners and employees", "Customers and suppliers", "Government and community", "Suppliers and pressure groups"], a: 0, e: "" },
    { q: "If interest rates rise, loans become…", o: ["More expensive", "Cheaper", "Free", "Unaffected"], a: 0, e: "" },
    { q: "Inflation means…", o: ["Rising general prices", "Falling prices", "Rising unemployment", "Falling interest rates"], a: 0, e: "" },
    { q: "A strong pound makes UK exports…", o: ["More expensive abroad", "Cheaper abroad", "Unaffected", "Illegal"], a: 0, e: "" },
    { q: "A strong pound makes imports…", o: ["Cheaper", "Dearer", "Unaffected", "Banned"], a: 0, e: "" },
    { q: "Rising unemployment usually means…", o: ["Lower consumer spending", "Higher spending", "Higher wages", "More imports"], a: 0, e: "" },
    { q: "Which law protects buyers?", o: ["Consumer law", "Employment law", "Tax law", "Planning law"], a: 0, e: "" },
    { q: "Paying the National Living Wage is part of…", o: ["Employment law", "Consumer law", "Exchange rates", "Marketing"], a: 0, e: "" }
  ],
  flashcards: [
    ["Stakeholders", "Owners, employees, customers, suppliers, community, government"],
    ["Conflict", "e.g. owners (profit) vs employees (pay)"],
    ["Interest rates up", "Borrowing dearer; spending falls"],
    ["Inflation", "Rising prices; costs up"],
    ["SPICED", "Strong Pound, Imports Cheap, Exports Dear"],
    ["Legislation", "Employment and consumer law: costs vs compliance"]
  ]
});

S2Data.detail("1a", { mistakes: ["Listing entrepreneur qualities without linking them to a business context."], tips: ["Always apply your answer to the business in the case study."], fact: "Many successful entrepreneurs had failed businesses before succeeding." });
S2Data.detail("1b", { mistakes: ["Saying secondary research is 'free': it can be cheaper, but reports may cost money."], tips: ["For market maps, explain what the gap is and whether there is demand for it."], fact: "A gap in the market isn't always an opportunity: there may be no demand for it." });
S2Data.detail("1c", { mistakes: ["Confusing profit with cash."], tips: ["Always write the formula, substitute, and include units (£ or units)."], fact: "Running out of cash is one of the most common reasons small businesses fail, even profitable ones." });
S2Data.detail("1d", { mistakes: ["Saying a sole trader has 'no' liability: it's unlimited."], tips: ["Link the right type of ownership to the owner's attitude to risk."], fact: "McDonald's operates mostly through franchises worldwide." });
S2Data.detail("1e", { mistakes: ["Getting exchange rate effects back to front."], tips: ["Use SPICED, then explain the knock-on effect on the specific business."], fact: "The Bank of England sets UK interest rates through its Monetary Policy Committee." });
