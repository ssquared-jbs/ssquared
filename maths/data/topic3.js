/* Maths² — Ratio, proportion and rates of change */

S2Data.add({
  id: "3a", group: 3, title: "Ratio and proportion",
  summary: "Simplifying ratios, sharing in a ratio, best buys, recipes and direct and inverse proportion.",
  notes: `
<h3>Ratio</h3>
<ul>
<li>Simplify by dividing by the HCF: 12 : 18 = 2 : 3. Use the same units first.</li>
<li><b>Sharing</b>: add the parts, find one part, multiply.</li>
<li>Ratio to fraction: in 2 : 3, the first share is 2/5 of the total.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Share £60 in the ratio 2 : 3.<br>5 parts → 1 part = £12. Shares: <b>£24 and £36</b>.</div>
<div class="box box-prac"><span class="box-title">Worked example</span>A : B = 3 : 5 and B gets £14 more than A. Difference = 2 parts = £14, so 1 part = £7: A = £21, B = £35.</div>
<h3>Proportion</h3>
<ul>
<li><b>Unitary method</b>: find the value of one, then scale. 4 pens cost £3.20 → 1 pen 80p → 7 pens £5.60.</li>
<li><b>Best buy</b>: compare price per gram (or grams per penny).</li>
<li><b>Direct proportion</b>: y = kx; straight line through the origin.</li>
<li><b>Inverse proportion</b>: y = k/x; as one doubles, the other halves.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: proportion with powers</span>y ∝ x<sup>2</sup> → y = kx<sup>2</sup>. Use given values to find k, then substitute.<br>y = 12 when x = 2, so k = 3; when x = 5, y = 75.<br>y ∝ 1/√x → y = k/√x.</div>
`,
  quiz: [
    { q: "Simplify 12 : 18.", o: ["2 : 3", "3 : 2", "6 : 9", "4 : 6"], a: 0, e: "" },
    { q: "Share £60 in the ratio 2 : 3. The smaller share?", o: ["£24", "£36", "£20", "£30"], a: 0, e: "" },
    { q: "In the ratio 2 : 3, the first share is what fraction of the total?", o: ["2/5", "2/3", "3/5", "1/2"], a: 0, e: "" },
    { q: "4 pens cost £3.20. Cost of 7 pens?", o: ["£5.60", "£5.20", "£6.40", "£4.80"], a: 0, e: "" },
    { q: "Better value: 500 g for £2.40 or 750 g for £3.30?", o: ["750 g", "500 g", "Same", "Can't tell"], a: 0, e: "750 g: 0.44p/g vs 0.48p/g." },
    { q: "If y is directly proportional to x, its graph is…", o: ["A straight line through the origin", "A curve", "A horizontal line", "A line with positive intercept"], a: 0, e: "" },
    { q: "4 workers take 6 days. How long for 3 workers?", o: ["8 days", "4.5 days", "7 days", "5 days"], a: 0, e: "Inverse proportion: 24 worker-days." },
    { q: "Higher: y ∝ x², y = 12 when x = 2. y when x = 5?", o: ["75", "30", "60", "25"], a: 0, e: "" },
    { q: "Simplify 50 cm : 2 m.", o: ["1 : 4", "25 : 1", "50 : 2", "1 : 40"], a: 0, e: "" }
  ],
  flashcards: [
    ["Simplifying ratios", "Same units; divide by HCF"],
    ["Sharing in a ratio", "Total parts → one part → multiply"],
    ["Ratio to fraction", "a : b → first is a/(a + b)"],
    ["Unitary method", "Find one, then scale up"],
    ["Direct proportion", "y = kx"],
    ["Inverse proportion", "y = k/x"],
    ["y ∝ x² (Higher)", "y = kx²; find k from given values"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Percentage change, interest and growth",
  summary: "Percentage increase and decrease, multipliers, reverse percentages, compound interest and depreciation.",
  notes: `
<h3>Multipliers</h3>
<ul>
<li>Increase by 15%: × 1.15. Decrease by 15%: × 0.85.</li>
<li><b>Percentage change</b> = (change ÷ original) × 100.</li>
</ul>
<h3>Reverse percentages</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>After a 20% increase, a price is £84. Original? 84 ÷ 1.2 = <b>£70</b>.<br>(Not 84 × 0.8!)</div>
<h3>Simple and compound interest</h3>
<ul>
<li><b>Simple</b>: same interest each year. £500 at 4% for 3 years = 3 × £20 = £60.</li>
<li><b>Compound</b>: interest on interest. Amount = P × (1 + r/100)<sup>n</sup>. £500 at 4% for 3 years = 500 × 1.04<sup>3</sup> = £562.43.</li>
<li><b>Depreciation</b>: value × (1 − r/100)<sup>n</sup>. A £12 000 car losing 15% a year is worth 12 000 × 0.85<sup>2</sup> = £8670 after 2 years.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: growth and decay</span>Population growth: N = N<sub>0</sub> × (multiplier)<sup>t</sup>. Repeated percentage change problems may need trial and improvement to find n (e.g. "after how many years does it first exceed…").</div>
`,
  quiz: [
    { q: "Multiplier for a 15% increase?", o: ["1.15", "0.15", "0.85", "1.5"], a: 0, e: "" },
    { q: "Multiplier for a 15% decrease?", o: ["0.85", "1.15", "0.15", "−0.15"], a: 0, e: "" },
    { q: "Price rises from £40 to £50. Percentage increase?", o: ["25%", "20%", "10%", "50%"], a: 0, e: "" },
    { q: "After a 20% increase, a price is £84. Original price?", o: ["£70", "£67.20", "£64", "£100.80"], a: 0, e: "" },
    { q: "Simple interest on £500 at 4% for 3 years?", o: ["£60", "£62.43", "£20", "£80"], a: 0, e: "" },
    { q: "£500 at 4% compound interest for 3 years?", o: ["£562.43", "£560", "£520", "£540"], a: 0, e: "" },
    { q: "A car loses 15% per year. Multiplier per year?", o: ["0.85", "1.15", "0.15", "1.85"], a: 0, e: "" },
    { q: "A 10% rise then a 10% fall gives overall…", o: ["1% decrease", "No change", "1% increase", "20% change"], a: 0, e: "1.1 × 0.9 = 0.99." },
    { q: "Compound interest formula?", o: ["P × (1 + r/100)ⁿ", "P × r × n", "P + r/100 × n", "P × (1 − r)ⁿ"], a: 0, e: "" }
  ],
  flashcards: [
    ["Increase by r%", "× (1 + r/100)"],
    ["Decrease by r%", "× (1 − r/100)"],
    ["Percentage change", "Change ÷ original × 100"],
    ["Reverse percentage", "Divide by the multiplier"],
    ["Simple interest", "Same amount each year"],
    ["Compound interest", "P × (1 + r/100)ⁿ"],
    ["Depreciation", "Value × (1 − r/100)ⁿ"]
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Compound measures and rates",
  summary: "Speed, density, pressure, unit conversions and rates of change.",
  notes: `
<h3>Compound measures</h3>
<table>
<tr><th>Measure</th><th>Formula</th><th>Units</th></tr>
<tr><td>Speed</td><td>distance ÷ time</td><td>m/s, km/h</td></tr>
<tr><td>Density</td><td>mass ÷ volume</td><td>g/cm<sup>3</sup>, kg/m<sup>3</sup></td></tr>
<tr><td>Pressure</td><td>force ÷ area</td><td>N/m<sup>2</sup> (Pa)</td></tr>
</table>
<p>Use a formula triangle and rearrange: distance = speed × time; mass = density × volume.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A car travels 150 km in 2 h 30 min. Speed = 150 ÷ 2.5 = <b>60 km/h</b>. (30 min = 0.5 h, not 0.3!)</div>
<h3>Converting units</h3>
<ul>
<li>km/h to m/s: × 1000 ÷ 3600. 72 km/h = 20 m/s.</li>
<li>Area: 1 m<sup>2</sup> = 10 000 cm<sup>2</sup>. Volume: 1 m<sup>3</sup> = 1 000 000 cm<sup>3</sup>. 1 litre = 1000 cm<sup>3</sup>.</li>
</ul>
<h3>Rates</h3>
<p>Flow rate (litres per minute), pay rate (£ per hour), exchange rates: all use the same idea: amount per unit.</p>
<div class="box box-c"><span class="box-title">Higher: rates of change</span>The gradient of a graph gives a rate of change. For a curve, draw a tangent at the point and find its gradient for the instantaneous rate.</div>
`,
  quiz: [
    { q: "150 km in 2 h 30 min. Average speed?", o: ["60 km/h", "50 km/h", "75 km/h", "65 km/h"], a: 0, e: "" },
    { q: "Density formula?", o: ["Mass ÷ volume", "Volume ÷ mass", "Mass × volume", "Force ÷ area"], a: 0, e: "" },
    { q: "Pressure formula?", o: ["Force ÷ area", "Area ÷ force", "Force × area", "Mass ÷ volume"], a: 0, e: "" },
    { q: "72 km/h in m/s?", o: ["20 m/s", "72 m/s", "7.2 m/s", "259 m/s"], a: 0, e: "" },
    { q: "1 m³ in cm³?", o: ["1 000 000", "1000", "100", "10 000"], a: 0, e: "" },
    { q: "Mass of 40 cm³ of metal with density 8 g/cm³?", o: ["320 g", "5 g", "48 g", "0.2 g"], a: 0, e: "" },
    { q: "How long to travel 90 miles at 60 mph?", o: ["1 h 30 min", "1 h 50 min", "1.3 hours", "54 min"], a: 0, e: "" },
    { q: "1 m² in cm²?", o: ["10 000", "100", "1000", "1 000 000"], a: 0, e: "" },
    { q: "Higher: the gradient of a tangent to a curve gives…", o: ["The instantaneous rate of change", "The area", "The average rate over the graph", "The intercept"], a: 0, e: "" }
  ],
  flashcards: [
    ["Speed", "Distance ÷ time"],
    ["Density", "Mass ÷ volume"],
    ["Pressure", "Force ÷ area"],
    ["Minutes to hours", "Divide by 60 (30 min = 0.5 h)"],
    ["km/h → m/s", "× 1000 ÷ 3600"],
    ["1 m² / 1 m³", "10 000 cm² / 1 000 000 cm³"],
    ["Rate of change (Higher)", "Gradient; tangent for a curve"]
  ]
});

S2Data.detail("3a", { mistakes: ["Sharing £60 in 2 : 3 as £20 and £30. Divide by the total number of parts (5), not by the ratio numbers."], tips: ["Draw a bar model for ratio problems: it makes 'difference' questions easy."], fact: "The golden ratio, about 1.618 : 1, appears in art, architecture and sunflowers." });
S2Data.detail("3b", { mistakes: ["Finding an original price after a 20% increase by taking 20% off. Divide by 1.2 instead."], tips: ["Always use multipliers: they make repeated changes and compound interest quick."], fact: "Albert Einstein is often (probably wrongly) quoted as calling compound interest the eighth wonder of the world." });
S2Data.detail("3c", { mistakes: ["Writing 2 hours 30 minutes as 2.3 hours. It's 2.5 hours."], tips: ["Write the formula, substitute with units, then check the units of your answer."], fact: "Osmium is the densest naturally occurring element at 22.6 g/cm³." });
