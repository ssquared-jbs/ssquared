/* Maths² — Ratio, proportion and rates of change */

S2Data.add({
  id: "3a", group: 3, title: "Ratio and proportion",
  summary: "Simplifying ratios, sharing in a ratio, best buys, recipes and direct and inverse proportion.",
  notes: R`
<h3>Ratio</h3>
<ul>
<li>Simplify by dividing by the HCF: \(12 : 18 = 2 : 3\). Convert to the same units first: \(50\text{ cm} : 2\text{ m} = 50 : 200 = 1 : 4\).</li>
<li><b>Sharing</b>: add the parts, find the value of one part, then multiply.</li>
<li>Ratio to fraction: in \(2 : 3\) there are 5 parts, so the first share is \(\frac25\) of the total.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Share £60 in the ratio \(2 : 3\).
<ol><li>Total parts: \(2 + 3 = 5\).</li>
<li>One part: \(60 \div 5 = £12\).</li>
<li>Shares: \(2 \times 12 = £24\) and \(3 \times 12 = £36\).</li></ol></div>
<div class="box box-prac"><span class="box-title">Worked example</span>\(A : B = 3 : 5\) and B gets £14 more than A.
<ol><li>The difference is \(5 - 3 = 2\) parts, so 2 parts = £14 and 1 part = £7.</li>
<li>A \(= 3 \times 7 = £21\); B \(= 5 \times 7 = £35\).</li></ol></div>
<h3>Proportion</h3>
<ul>
<li><b>Unitary method</b>: find the value of one, then scale. 4 pens cost £3.20 → 1 pen costs 80p → 7 pens cost £5.60.</li>
<li><b>Best buy</b>: compare the price per gram (or grams per penny). 500 g for £2.40 is 0.48p/g; 750 g for £3.30 is 0.44p/g, so the 750 g pack is better value.</li>
<li><b>Direct proportion</b>: \(y = kx\). The graph is a straight line through the origin.</li>
<li><b>Inverse proportion</b>: \(y = \dfrac kx\). As one doubles, the other halves. E.g. 4 workers take 6 days = 24 worker-days, so 3 workers take \(24 \div 3 = 8\) days.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: proportion with powers</span>"\(y\) is proportional to \(x^2\)" means \(y \propto x^2\), so \(y = kx^2\).
<ol><li>\(y = 12\) when \(x = 2\): \(12 = k \times 4\), so \(k = 3\).</li>
<li>Formula: \(y = 3x^2\).</li>
<li>When \(x = 5\): \(y = 3 \times 25 = 75\).</li></ol>
Similarly, \(y \propto \dfrac{1}{\sqrt x}\) means \(y = \dfrac{k}{\sqrt x}\).</div>
`,
  quiz: [
    { q: R`Simplify \(12 : 18\).`, o: [R`\(2 : 3\)`, R`\(3 : 2\)`, R`\(6 : 9\)`, R`\(4 : 6\)`], a: 0, e: "Divide both by the HCF, 6." },
    { q: R`Share £60 in the ratio \(2 : 3\). The smaller share?`, o: ["£24", "£36", "£20", "£30"], a: 0, e: R`5 parts, so 1 part = £12, and \(2 \times 12 = 24\).` },
    { q: R`In the ratio \(2 : 3\), the first share is what fraction of the total?`, o: [R`\(\frac25\)`, R`\(\frac23\)`, R`\(\frac35\)`, R`\(\frac12\)`], a: 0, e: "2 parts out of a total of 5." },
    { q: "4 pens cost £3.20. Cost of 7 pens?", o: ["£5.60", "£5.20", "£6.40", "£4.80"], a: 0, e: R`One pen: \(3.20 \div 4 = 0.80\). Then \(7 \times 0.80\).` },
    { q: "Better value: 500 g for £2.40 or 750 g for £3.30?", o: ["750 g", "500 g", "Same", "Can't tell"], a: 0, e: "750 g: 0.44p per gram, against 0.48p per gram." },
    { q: R`If \(y\) is directly proportional to \(x\), its graph is…`, o: ["A straight line through the origin", "A curve", "A horizontal line", "A line with positive intercept"], a: 0, e: R`\(y = kx\) has gradient \(k\) and intercept 0.` },
    { q: "4 workers take 6 days. How long for 3 workers?", o: ["8 days", "4.5 days", "7 days", "5 days"], a: 0, e: R`Inverse proportion: \(4 \times 6 = 24\) worker-days, and \(24 \div 3 = 8\).` },
    { q: R`Higher: \(y \propto x^2\), and \(y = 12\) when \(x = 2\). Find \(y\) when \(x = 5\).`, o: ["75", "30", "60", "25"], a: 0, e: R`\(k = \frac{12}{4} = 3\), so \(y = 3(25)\).` },
    { q: R`Simplify \(50\text{ cm} : 2\text{ m}\).`, o: [R`\(1 : 4\)`, R`\(25 : 1\)`, R`\(50 : 2\)`, R`\(1 : 40\)`], a: 0, e: R`Same units: \(50 : 200 = 1 : 4\).` }
  ],
  flashcards: [
    ["Simplifying ratios", "Same units; divide by the HCF"],
    ["Sharing in a ratio", "Total parts → one part → multiply"],
    ["Ratio to fraction", R`\(a : b\) → first is \(\frac{a}{a + b}\)`],
    ["Unitary method", "Find one, then scale up"],
    ["Direct proportion", R`\(y = kx\)`],
    ["Inverse proportion", R`\(y = \dfrac kx\)`],
    [R`\(y \propto x^2\) (Higher)`, R`\(y = kx^2\); find \(k\) from given values`]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Percentage change, interest and growth",
  summary: "Percentage increase and decrease, multipliers, reverse percentages, compound interest and depreciation.",
  notes: R`
<h3>Multipliers</h3>
<table><tr><th>Change</th><th>Multiplier</th></tr>
<tr><td>Increase by 15%</td><td>\(1 + 0.15 = 1.15\)</td></tr>
<tr><td>Decrease by 15%</td><td>\(1 - 0.15 = 0.85\)</td></tr></table>
<p>\[\text{Percentage change} = \frac{\text{change}}{\text{original}} \times 100\]</p>
<p>E.g. £40 to £50: \(\frac{10}{40} \times 100 = 25\%\) increase.</p>
<h3>Reverse percentages</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>After a 20% increase, a price is £84. Find the original.
<ol><li>The new price is 120% of the original: original \(\times 1.2 = 84\).</li>
<li>Original \(= 84 \div 1.2 = £70\).</li></ol>
Not \(84 \times 0.8\): 20% of the new price isn't 20% of the original.</div>
<h3>Simple and compound interest</h3>
<ul>
<li><b>Simple</b>: the same interest every year. £500 at 4% for 3 years: \(3 \times £20 = £60\).</li>
<li><b>Compound</b>: interest is added, then earns interest itself. \[\text{Amount} = P \times \left(1 + \frac{r}{100}\right)^n\] £500 at 4% for 3 years: \(500 \times 1.04^3 = £562.43\).</li>
<li><b>Depreciation</b>: value \(\times \left(1 - \dfrac{r}{100}\right)^n\). A £12 000 car losing 15% a year is worth \(12\,000 \times 0.85^2 = £8670\) after 2 years.</li>
</ul>
<p>Successive changes multiply: a 10% rise then a 10% fall gives \(1.1 \times 0.9 = 0.99\), a 1% decrease overall.</p>
<div class="box box-c"><span class="box-title">Higher: growth and decay</span>\(N = N_0 \times (\text{multiplier})^t\). To find when a value first passes a target, try successive values of \(n\) (or use a calculator table).</div>
`,
  quiz: [
    { q: "Multiplier for a 15% increase?", o: ["1.15", "0.15", "0.85", "1.5"], a: 0, e: "100% + 15% = 115% = 1.15." },
    { q: "Multiplier for a 15% decrease?", o: ["0.85", "1.15", "0.15", "−0.15"], a: 0, e: "100% − 15% = 85% = 0.85." },
    { q: "Price rises from £40 to £50. Percentage increase?", o: ["25%", "20%", "10%", "50%"], a: 0, e: R`\(\frac{10}{40} \times 100\). Divide by the original, not the new value.` },
    { q: "After a 20% increase, a price is £84. Original price?", o: ["£70", "£67.20", "£64", "£100.80"], a: 0, e: R`\(84 \div 1.2 = 70\).` },
    { q: "Simple interest on £500 at 4% for 3 years?", o: ["£60", "£62.43", "£20", "£80"], a: 0, e: R`£20 a year, \(\times 3\).` },
    { q: "£500 at 4% compound interest for 3 years?", o: ["£562.43", "£560", "£520", "£540"], a: 0, e: R`\(500 \times 1.04^3\).` },
    { q: "A car loses 15% per year. Multiplier per year?", o: ["0.85", "1.15", "0.15", "1.85"], a: 0, e: "It keeps 85% of its value each year." },
    { q: "A 10% rise then a 10% fall gives overall…", o: ["1% decrease", "No change", "1% increase", "20% change"], a: 0, e: R`\(1.1 \times 0.9 = 0.99\).` },
    { q: "Compound interest formula?", o: [R`\(P\left(1 + \frac{r}{100}\right)^n\)`, R`\(P \times r \times n\)`, R`\(P + \frac{r}{100} \times n\)`, R`\(P(1 - r)^n\)`], a: 0, e: R`Multiply by the multiplier once for each of the \(n\) years.` }
  ],
  flashcards: [
    [R`Increase by \(r\%\)`, R`\(\times\left(1 + \frac{r}{100}\right)\)`],
    [R`Decrease by \(r\%\)`, R`\(\times\left(1 - \frac{r}{100}\right)\)`],
    ["Percentage change", R`\(\dfrac{\text{change}}{\text{original}} \times 100\)`],
    ["Reverse percentage", "Divide by the multiplier"],
    ["Simple interest", "Same amount each year"],
    ["Compound interest", R`\(P\left(1 + \frac{r}{100}\right)^n\)`],
    ["Depreciation", R`Value \(\times \left(1 - \frac{r}{100}\right)^n\)`]
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Compound measures and rates",
  summary: "Speed, density, pressure, unit conversions and rates of change.",
  notes: R`
<h3>Compound measures</h3>
<table>
<tr><th>Measure</th><th>Formula</th><th>Units</th></tr>
<tr><td>Speed</td><td>\(\dfrac{\text{distance}}{\text{time}}\)</td><td>m/s, km/h</td></tr>
<tr><td>Density</td><td>\(\dfrac{\text{mass}}{\text{volume}}\)</td><td>\(\text{g/cm}^3\), \(\text{kg/m}^3\)</td></tr>
<tr><td>Pressure</td><td>\(\dfrac{\text{force}}{\text{area}}\)</td><td>\(\text{N/m}^2\) (Pa)</td></tr>
</table>
<p>Rearrange as needed: distance = speed × time; mass = density × volume. E.g. 40 cm³ of metal with density 8 g/cm³ has mass \(8 \times 40 = 320\) g.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A car travels 150 km in 2 h 30 min. Find its average speed.
<ol><li>Convert the time to hours: 30 min \(= \frac{30}{60} = 0.5\) h, so 2.5 h (not 2.3!).</li>
<li>Speed \(= \dfrac{150}{2.5} = 60\) km/h.</li></ol></div>
<h3>Converting units</h3>
<ul>
<li>km/h to m/s: \(\times 1000 \div 3600\). \(72\text{ km/h} = \dfrac{72\,000}{3600} = 20\text{ m/s}\).</li>
<li>Area: \(1\text{ m}^2 = 100 \times 100 = 10\,000\text{ cm}^2\).</li>
<li>Volume: \(1\text{ m}^3 = 100^3 = 1\,000\,000\text{ cm}^3\). \(1\text{ litre} = 1000\text{ cm}^3\).</li>
</ul>
<h3>Rates</h3>
<p>Flow rate (litres per minute), pay rate (£ per hour) and exchange rates all use the same idea: amount per unit.</p>
<div class="box box-c"><span class="box-title">Higher: rates of change</span>The gradient of a graph gives a rate of change. For a curve, draw a tangent at the point and find its gradient to get the instantaneous rate.</div>
`,
  quiz: [
    { q: "150 km in 2 h 30 min. Average speed?", o: ["60 km/h", "50 km/h", "75 km/h", "65 km/h"], a: 0, e: R`\(150 \div 2.5 = 60\).` },
    { q: "Density formula?", o: ["Mass ÷ volume", "Volume ÷ mass", "Mass × volume", "Force ÷ area"], a: 0, e: R`The units g/cm³ tell you: grams divided by cm³.` },
    { q: "Pressure formula?", o: ["Force ÷ area", "Area ÷ force", "Force × area", "Mass ÷ volume"], a: 0, e: R`The units N/m² tell you: newtons divided by m².` },
    { q: "72 km/h in m/s?", o: ["20 m/s", "72 m/s", "7.2 m/s", "259 m/s"], a: 0, e: R`\(72 \times 1000 \div 3600 = 20\).` },
    { q: R`\(1\text{ m}^3\) in \(\text{cm}^3\)?`, o: ["1 000 000", "1000", "100", "10 000"], a: 0, e: R`\(100 \times 100 \times 100\).` },
    { q: R`Mass of 40 cm³ of metal with density \(8\text{ g/cm}^3\)?`, o: ["320 g", "5 g", "48 g", "0.2 g"], a: 0, e: R`Mass = density × volume = \(8 \times 40\).` },
    { q: "How long to travel 90 miles at 60 mph?", o: ["1 h 30 min", "1 h 50 min", "1.3 hours", "54 min"], a: 0, e: R`\(90 \div 60 = 1.5\) hours = 1 h 30 min.` },
    { q: R`\(1\text{ m}^2\) in \(\text{cm}^2\)?`, o: ["10 000", "100", "1000", "1 000 000"], a: 0, e: R`\(100 \times 100\).` },
    { q: "Higher: the gradient of a tangent to a curve gives…", o: ["The instantaneous rate of change", "The area", "The average rate over the graph", "The intercept"], a: 0, e: "It shows how fast the quantity is changing at that exact point." }
  ],
  flashcards: [
    ["Speed", "Distance ÷ time"],
    ["Density", "Mass ÷ volume"],
    ["Pressure", "Force ÷ area"],
    ["Minutes to hours", "Divide by 60 (30 min = 0.5 h)"],
    ["km/h → m/s", "× 1000 ÷ 3600"],
    [R`\(1\text{ m}^2\) / \(1\text{ m}^3\)`, R`\(10\,000\text{ cm}^2\) / \(1\,000\,000\text{ cm}^3\)`],
    ["Rate of change (Higher)", "Gradient; tangent for a curve"]
  ]
});

S2Data.detail("3a", { mistakes: ["Sharing £60 in 2 : 3 as £20 and £30. Divide by the total number of parts (5), not by the ratio numbers."], tips: ["Draw a bar model for ratio problems: it makes 'difference' questions easy."], fact: "The golden ratio, about 1.618 : 1, appears in art, architecture and sunflowers." });
S2Data.detail("3b", { mistakes: ["Finding an original price after a 20% increase by taking 20% off. Divide by 1.2 instead."], tips: ["Always use multipliers: they make repeated changes and compound interest quick."], fact: "Albert Einstein is often (probably wrongly) quoted as calling compound interest the eighth wonder of the world." });
S2Data.detail("3c", { mistakes: ["Writing 2 hours 30 minutes as 2.3 hours. It's 2.5 hours."], tips: ["Write the formula, substitute with units, then check the units of your answer."], fact: "Osmium is the densest naturally occurring element at 22.6 g/cm³." });
