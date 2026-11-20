/* A-level Maths² — Statistics and Mechanics */

S2Data.add({
  id: "11a", group: 11, y1: true, title: "Sampling",
  summary: "Populations and samples, sampling methods and the large data set.",
  notes: `
<h3>Key terms</h3>
<p><b>Population</b>: everything of interest. <b>Census</b>: data from every member (accurate but costly). <b>Sample</b>: a subset. <b>Sampling frame</b>: list of the population. <b>Sampling units</b>: the individuals.</p>
<h3>Random methods</h3>
<table>
<tr><th>Method</th><th>How</th><th>Pros / cons</th></tr>
<tr><td>Simple random</td><td>Number every member; random number generator</td><td>Unbiased; needs a full sampling frame</td></tr>
<tr><td>Systematic</td><td>Every kth member from a random start (k = N/n)</td><td>Simple; can be biased if there's a pattern in the list</td></tr>
<tr><td>Stratified</td><td>Random samples from each group in proportion</td><td>Represents groups; needs group information</td></tr>
</table>
<h3>Non-random methods</h3>
<ul>
<li><b>Quota</b>: interviewer fills quotas for each group. Quick, no frame needed; biased by interviewer choice and non-response.</li>
<li><b>Opportunity</b>: whoever is available. Easy and cheap; unlikely to be representative.</li>
</ul>
<p><b>Large data set</b> (Edexcel weather data): know the stations, variables (e.g. daily mean temperature, rainfall, wind speed), and that 'tr' means trace (&lt; 0.05 mm); n/a means not available.</p>
`,
  quiz: [
    { q: "A census…", o: ["Collects data from every member", "Uses a random sample", "Is always cheap", "Uses quotas"], a: 0, e: "" },
    { q: "Every 10th name from a random start is…", o: ["Systematic sampling", "Simple random", "Stratified", "Quota"], a: 0, e: "" },
    { q: "Stratified sampling…", o: ["Samples each group in proportion", "Picks whoever is available", "Uses every kth item", "Uses no randomness"], a: 0, e: "" },
    { q: "Which method doesn't need a sampling frame?", o: ["Quota", "Simple random", "Systematic", "Stratified"], a: 0, e: "" },
    { q: "Opportunity sampling is…", o: ["Easy but likely unrepresentative", "Always unbiased", "The same as stratified", "Random"], a: 0, e: "" },
    { q: "A sampling frame is…", o: ["A list of the population", "The sample size", "A graph", "A type of bias"], a: 0, e: "" },
    { q: "Population 600, sample 30, systematic: k = …", o: ["20", "30", "600", "18"], a: 0, e: "" },
    { q: "Stratified: 200 of 1000 are Year 12. Sample 50. How many Year 12?", o: ["10", "20", "50", "5"], a: 0, e: "" },
    { q: "In the large data set, 'tr' means…", o: ["Trace: less than 0.05 mm", "Total rainfall", "Temperature reading", "Not available"], a: 0, e: "" }
  ],
  flashcards: [
    ["Census vs sample", "Everyone vs subset"],
    ["Sampling frame", "List of the population"],
    ["Simple random", "Every member equally likely; needs frame"],
    ["Systematic", "Every kth from random start"],
    ["Stratified", "Proportional random samples from groups"],
    ["Quota", "Non-random; fills group quotas"],
    ["Opportunity", "Whoever is available"],
    ["LDS 'tr'", "Trace amount (< 0.05 mm)"]
  ]
});

S2Data.add({
  id: "11b", group: 11, y1: true, title: "Data presentation, correlation and regression",
  summary: "Measures of location and spread, coding, outliers, diagrams, correlation and regression lines.",
  notes: `
<h3>Location and spread</h3>
<ul>
<li>Mean x̄ = Σx/n; for grouped data use midpoints. Median, mode, quartiles (interpolate for grouped data).</li>
<li><b>Variance</b> σ<sup>2</sup> = Σx<sup>2</sup>/n − x̄<sup>2</sup> = S<sub>xx</sub>/n; standard deviation σ = √variance.</li>
<li><b>Coding</b> y = (x − a)/b: ȳ = (x̄ − a)/b and σ<sub>y</sub> = σ<sub>x</sub>/b.</li>
</ul>
<h3>Outliers</h3>
<p>Common definitions: more than 1.5 × IQR beyond the quartiles, or more than 2σ from the mean. Clean data by removing errors, not genuine extreme values.</p>
<h3>Diagrams</h3>
<p>Box plots, histograms (area ∝ frequency; frequency density = f ÷ class width), cumulative frequency curves.</p>
<h3>Correlation and regression</h3>
<ul>
<li>Describe correlation: positive/negative, strong/weak. Correlation doesn't imply causation.</li>
<li>Regression line y = a + bx: b is the change in y per unit x, a is y when x = 0. Use it for interpolation; extrapolation is unreliable.</li>
<li>Only use the regression of y on x to predict y from x.</li>
</ul>
<div class="box box-c"><span class="box-title">Year 13</span>Exponential models: y = kbˣ → log y = log k + x log b. Product moment correlation coefficient r is interpreted and tested (see Hypothesis testing).</div>
`,
  quiz: [
    { q: "Variance = …", o: ["Σx²/n − x̄²", "Σx/n", "√(Σx²/n)", "(Σx)²/n"], a: 0, e: "" },
    { q: "Coding y = (x − 50)/10. If σₓ = 20, σᵧ = …", o: ["2", "20", "−3", "200"], a: 0, e: "" },
    { q: "If ȳ = 3 with y = (x − 50)/10, x̄ = …", o: ["80", "53", "35", "5.3"], a: 0, e: "" },
    { q: "Q1 = 20, Q3 = 30. Upper outlier boundary (1.5 × IQR)?", o: ["45", "40", "35", "50"], a: 0, e: "" },
    { q: "In y = 3 + 2x, the gradient 2 means…", o: ["y increases by 2 per unit increase in x", "y = 2 when x = 0", "x = 2y", "Correlation is 2"], a: 0, e: "" },
    { q: "Predicting outside the data range is…", o: ["Extrapolation, unreliable", "Interpolation, reliable", "Always accurate", "Coding"], a: 0, e: "" },
    { q: "In a histogram, frequency is proportional to…", o: ["Area", "Height", "Width", "Frequency density only"], a: 0, e: "" },
    { q: "Strong correlation proves…", o: ["Nothing about causation", "Causation", "A linear model is perfect", "No outliers"], a: 0, e: "" },
    { q: "Standard deviation of 2, 4, 4, 4, 5, 5, 7, 9?", o: ["2", "4", "5", "1"], a: 0, e: "Mean 5; Σx²/n = 29; 29 − 25 = 4." }
  ],
  flashcards: [
    ["Variance", "Σx²/n − x̄²"],
    ["Standard deviation", "√variance"],
    ["Coding y = (x − a)/b", "ȳ = (x̄ − a)/b, σy = σx/b"],
    ["Outlier rule (IQR)", "Beyond Q1 − 1.5 IQR or Q3 + 1.5 IQR"],
    ["Histogram", "Area ∝ frequency"],
    ["Regression y = a + bx", "b: change per unit x; a: value at x = 0"],
    ["Interpolation vs extrapolation", "Within data (ok) vs outside (unreliable)"],
    ["Correlation ≠ causation", "A third factor may cause both"]
  ]
});

S2Data.add({
  id: "12a", group: 12, y1: true, title: "Probability",
  summary: "Venn and tree diagrams, mutually exclusive and independent events, and (Year 13) conditional probability.",
  notes: `
<h3>Rules</h3>
<ul>
<li>P(A′) = 1 − P(A).</li>
<li>P(A ∪ B) = P(A) + P(B) − P(A ∩ B).</li>
<li><b>Mutually exclusive</b>: P(A ∩ B) = 0.</li>
<li><b>Independent</b>: P(A ∩ B) = P(A) × P(B).</li>
</ul>
<h3>Diagrams</h3>
<p>Venn diagrams: fill the intersection first. Tree diagrams: multiply along branches, add across outcomes.</p>
<div class="box box-c"><span class="box-title">Year 13: conditional probability</span>P(A | B) = P(A ∩ B)/P(B).<br>Independence ⇔ P(A | B) = P(A).<br>Example: P(A) = 0.4, P(B) = 0.5, P(A ∩ B) = 0.2: P(A | B) = 0.4 = P(A), so independent.<br>Use two-way tables or trees with conditional probabilities on the second branches.</div>
`,
  quiz: [
    { q: "P(A ∪ B) = …", o: ["P(A) + P(B) − P(A ∩ B)", "P(A) + P(B)", "P(A) × P(B)", "1 − P(A ∩ B)"], a: 0, e: "" },
    { q: "Independent events satisfy…", o: ["P(A ∩ B) = P(A)P(B)", "P(A ∩ B) = 0", "P(A) = P(B)", "P(A ∪ B) = 1"], a: 0, e: "" },
    { q: "Mutually exclusive events satisfy…", o: ["P(A ∩ B) = 0", "P(A ∩ B) = P(A)P(B)", "P(A) + P(B) = 0", "P(A | B) = P(A)"], a: 0, e: "" },
    { q: "P(A) = 0.3, P(B) = 0.5, independent. P(A ∩ B)?", o: ["0.15", "0.8", "0.2", "0.65"], a: 0, e: "" },
    { q: "P(A) = 0.3, P(B) = 0.5, independent. P(A ∪ B)?", o: ["0.65", "0.8", "0.15", "0.35"], a: 0, e: "" },
    { q: "Y13: P(A | B) = …", o: ["P(A ∩ B)/P(B)", "P(A)P(B)", "P(A ∩ B)/P(A)", "P(B)/P(A)"], a: 0, e: "" },
    { q: "Y13: P(A ∩ B) = 0.12, P(B) = 0.3. P(A | B)?", o: ["0.4", "0.036", "0.25", "0.18"], a: 0, e: "" },
    { q: "Y13: A and B are independent if…", o: ["P(A | B) = P(A)", "P(A | B) = 0", "P(A | B) = P(B)", "P(A | B) = 1"], a: 0, e: "" },
    { q: "In a Venn diagram, fill in first…", o: ["The intersection", "The outside", "A only", "B only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Addition rule", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"],
    ["Mutually exclusive", "P(A ∩ B) = 0"],
    ["Independent", "P(A ∩ B) = P(A)P(B)"],
    ["Complement", "P(A′) = 1 − P(A)"],
    ["Conditional (Y13)", "P(A | B) = P(A ∩ B)/P(B)"],
    ["Independence test (Y13)", "P(A | B) = P(A)"]
  ]
});

S2Data.add({
  id: "12b", group: 12, y1: true, title: "Discrete distributions and the binomial",
  summary: "Discrete random variables, probability distributions and the binomial distribution B(n, p).",
  notes: `
<h3>Discrete random variables</h3>
<p>A probability distribution lists every value x and P(X = x); the probabilities add to 1. Find unknowns using Σ P = 1.</p>
<h3>The binomial distribution</h3>
<p>X ~ B(n, p) models the number of successes in n trials when:</p>
<ul><li>there's a fixed number of trials n;</li><li>each trial has two outcomes (success/failure);</li><li>p is constant;</li><li>trials are independent.</li></ul>
<p><b>P(X = r) = ⁿCᵣ p<sup>r</sup>(1 − p)<sup>n−r</sup></b>.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>X ~ B(10, 0.3). P(X = 2) = ¹⁰C₂(0.3)<sup>2</sup>(0.7)<sup>8</sup> = 45 × 0.09 × 0.05765 = <b>0.2335</b>.</div>
<p>Use cumulative tables or calculator for P(X ≤ r). P(X ≥ r) = 1 − P(X ≤ r − 1). P(a &lt; X ≤ b) = P(X ≤ b) − P(X ≤ a).</p>
<p>Mean of B(n, p) = np.</p>
`,
  quiz: [
    { q: "Probabilities in a distribution add to…", o: ["1", "0", "n", "100"], a: 0, e: "" },
    { q: "Which is NOT a binomial condition?", o: ["p changes each trial", "Fixed n", "Independent trials", "Two outcomes"], a: 0, e: "" },
    { q: "P(X = r) for B(n, p) = …", o: ["ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ", "pʳ", "ⁿCᵣ pⁿ", "np"], a: 0, e: "" },
    { q: "X ~ B(10, 0.3). P(X = 2) ≈ …", o: ["0.233", "0.3", "0.09", "0.383"], a: 0, e: "" },
    { q: "P(X ≥ 4) = …", o: ["1 − P(X ≤ 3)", "1 − P(X ≤ 4)", "P(X ≤ 4)", "P(X = 4)"], a: 0, e: "" },
    { q: "P(2 < X ≤ 5) = …", o: ["P(X ≤ 5) − P(X ≤ 2)", "P(X ≤ 5) − P(X ≤ 3)", "P(X ≤ 5) + P(X ≤ 2)", "P(X = 3) only"], a: 0, e: "" },
    { q: "Mean of B(20, 0.25)?", o: ["5", "4", "20", "0.25"], a: 0, e: "" },
    { q: "X ~ B(5, 0.5). P(X = 5) = …", o: ["1/32", "1/5", "1/2", "5/32"], a: 0, e: "" },
    { q: "P(X = x) = kx for x = 1, 2, 3. k = …", o: ["1/6", "1/3", "1/2", "6"], a: 0, e: "" }
  ],
  flashcards: [
    ["Probability distribution", "Σ P(X = x) = 1"],
    ["Binomial conditions", "Fixed n, two outcomes, constant p, independent"],
    ["P(X = r)", "ⁿCᵣ pʳ(1 − p)ⁿ⁻ʳ"],
    ["P(X ≥ r)", "1 − P(X ≤ r − 1)"],
    ["P(a < X ≤ b)", "P(X ≤ b) − P(X ≤ a)"],
    ["Mean of B(n, p)", "np"]
  ]
});

S2Data.add({
  id: "12c", group: 12, y2: true, title: "The normal distribution",
  summary: "Properties of N(μ, σ²), standardising, inverse normal, and approximating the binomial.",
  notes: `
<h3>Properties</h3>
<p>X ~ N(μ, σ<sup>2</sup>): symmetric, bell-shaped, mean = median = mode = μ, points of inflection at μ ± σ.</p>
<p>About 68% of data within μ ± σ, 95% within μ ± 2σ, 99.7% within μ ± 3σ.</p>
<h3>Calculations</h3>
<ul>
<li>Standardise: Z = (X − μ)/σ, Z ~ N(0, 1).</li>
<li>Use a calculator for P(X &lt; a) or P(a &lt; X &lt; b). For continuous X, P(X = a) = 0.</li>
<li>Inverse normal: find a with P(X &lt; a) = 0.9.</li>
<li>Finding unknown μ or σ: use z-values. If P(X &lt; 20) = 0.8 with σ = 4: (20 − μ)/4 = 0.8416, μ = 16.63.</li>
</ul>
<h3>Approximating the binomial</h3>
<p>If n is large and p close to 0.5, B(n, p) ≈ N(np, np(1 − p)). Apply a <b>continuity correction</b>: P(X ≤ 30) → P(Y &lt; 30.5).</p>
`,
  quiz: [
    { q: "Z = …", o: ["(X − μ)/σ", "(X − σ)/μ", "(μ − X)σ", "X/σ"], a: 0, e: "" },
    { q: "About what percentage lies within μ ± 2σ?", o: ["95%", "68%", "99.7%", "50%"], a: 0, e: "" },
    { q: "For a normal distribution, P(X = a) = …", o: ["0", "1", "0.5", "Depends on σ"], a: 0, e: "" },
    { q: "Points of inflection of the normal curve are at…", o: ["μ ± σ", "μ ± 2σ", "μ", "0"], a: 0, e: "" },
    { q: "X ~ N(50, 25). σ = …", o: ["5", "25", "625", "50"], a: 0, e: "" },
    { q: "B(100, 0.5) ≈ …", o: ["N(50, 25)", "N(50, 50)", "N(100, 0.5)", "N(50, 5)"], a: 0, e: "" },
    { q: "Continuity correction for P(X ≤ 30)?", o: ["P(Y < 30.5)", "P(Y < 29.5)", "P(Y < 30)", "P(Y > 30.5)"], a: 0, e: "" },
    { q: "Normal approximation works best when…", o: ["n is large and p ≈ 0.5", "n is small", "p ≈ 0", "p ≈ 1"], a: 0, e: "" },
    { q: "Mean = median = mode for a normal distribution because…", o: ["It's symmetric", "σ = 0", "It's discrete", "μ = 0"], a: 0, e: "" }
  ],
  flashcards: [
    ["Normal shape", "Symmetric bell; mean = median = mode"],
    ["68–95–99.7", "Within 1, 2, 3 standard deviations"],
    ["Standardising", "Z = (X − μ)/σ"],
    ["Inflection points", "μ ± σ"],
    ["Binomial approximation", "N(np, np(1 − p))"],
    ["Continuity correction", "Adjust by 0.5"]
  ]
});

S2Data.add({
  id: "13a", group: 13, y1: true, title: "Hypothesis testing: binomial",
  summary: "Null and alternative hypotheses, significance levels, critical regions and one- and two-tailed binomial tests.",
  notes: `
<h3>Language</h3>
<ul>
<li><b>H₀</b>: the null hypothesis, e.g. p = 0.3. <b>H₁</b>: the alternative, e.g. p &gt; 0.3 (one-tailed) or p ≠ 0.3 (two-tailed).</li>
<li><b>Significance level</b>: probability of rejecting H₀ when it's true (e.g. 5%).</li>
<li><b>Critical region</b>: values of the test statistic that lead to rejecting H₀. <b>Actual significance level</b>: the probability of being in the critical region if H₀ is true.</li>
</ul>
<h3>Method</h3>
<ol>
<li>State H₀ and H₁ in terms of p.</li>
<li>Assume H₀: X ~ B(n, p).</li>
<li>Find P(X ≥ x) (or ≤) for the observed value, or find the critical region.</li>
<li>Compare with the significance level (halve it for each tail of a two-tailed test).</li>
<li>Conclude in context: "There is (not) sufficient evidence to suggest…".</li>
</ol>
<div class="box box-prac"><span class="box-title">Worked example</span>A coin lands heads 15 times out of 20. Test at 5% if it's biased towards heads.<br>H₀: p = 0.5, H₁: p &gt; 0.5. X ~ B(20, 0.5). P(X ≥ 15) = 0.0207 &lt; 0.05: reject H₀. There's evidence the coin is biased towards heads.</div>
`,
  quiz: [
    { q: "H₀ is…", o: ["The null hypothesis, assumed true", "The alternative", "The test statistic", "The critical value"], a: 0, e: "" },
    { q: "H₁: p ≠ 0.4 is a…", o: ["Two-tailed test", "One-tailed test", "Null hypothesis", "Critical region"], a: 0, e: "" },
    { q: "In a two-tailed test at 5%, each tail has…", o: ["2.5%", "5%", "10%", "1%"], a: 0, e: "" },
    { q: "The significance level is the probability of…", o: ["Rejecting H₀ when it's true", "Accepting H₁ when it's false", "The observed value", "H₁ being true"], a: 0, e: "" },
    { q: "P(X ≥ 15) = 0.0207 at 5% significance. Conclusion?", o: ["Reject H₀", "Accept H₀", "Inconclusive", "Change significance level"], a: 0, e: "" },
    { q: "Hypotheses are stated in terms of…", o: ["The population parameter p", "The sample value x", "The test statistic", "n"], a: 0, e: "" },
    { q: "The critical region is…", o: ["Values that lead to rejecting H₀", "Values that accept H₀", "The mean", "The significance level"], a: 0, e: "" },
    { q: "Conclusions should be…", o: ["In context, without certainty", "'H₀ is proven true'", "Numerical only", "About the sample only"], a: 0, e: "" },
    { q: "Actual significance level is…", o: ["P(in critical region | H₀ true)", "Always exactly 5%", "The p-value", "1 − significance level"], a: 0, e: "" }
  ],
  flashcards: [
    ["H₀ / H₁", "Null (assumed) / alternative"],
    ["One-tailed vs two-tailed", "p > or < vs p ≠"],
    ["Significance level", "P(reject H₀ | H₀ true)"],
    ["Critical region", "Values leading to rejection"],
    ["Two-tailed", "Halve the significance level for each tail"],
    ["Conclusion", "'Sufficient evidence to suggest…' in context"]
  ]
});

S2Data.add({
  id: "13b", group: 13, y2: true, title: "Hypothesis testing: correlation and the normal mean",
  summary: "Testing the product moment correlation coefficient and testing a normal population mean.",
  notes: `
<h3>Testing correlation</h3>
<p>H₀: ρ = 0 (no correlation in the population); H₁: ρ &gt; 0, ρ &lt; 0 or ρ ≠ 0. Compare the sample r with the critical value from tables for sample size n.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>n = 10, r = 0.68, 5% one-tailed (ρ &gt; 0). Critical value 0.5494. 0.68 &gt; 0.5494, so reject H₀: evidence of positive correlation.</div>
<h3>Testing a normal mean</h3>
<p>If X ~ N(μ, σ<sup>2</sup>), the sample mean X̄ ~ N(μ, σ<sup>2</sup>/n).</p>
<ul>
<li>H₀: μ = μ₀. Test statistic z = (x̄ − μ₀)/(σ/√n).</li>
<li>Compare with critical z (one-tailed 5%: 1.6449; two-tailed 5%: ±1.96), or find P(X̄ ≥ x̄).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>σ = 4, n = 25, x̄ = 21.5, H₀: μ = 20, H₁: μ &gt; 20 at 5%. z = 1.5/0.8 = 1.875 &gt; 1.6449: reject H₀.</div>
`,
  quiz: [
    { q: "H₀ for a correlation test?", o: ["ρ = 0", "r = 0", "ρ = 1", "r > 0"], a: 0, e: "" },
    { q: "ρ represents…", o: ["The population correlation coefficient", "The sample correlation", "The mean", "The p-value"], a: 0, e: "" },
    { q: "n = 10, r = 0.68, critical value 0.5494. Conclusion?", o: ["Reject H₀: evidence of correlation", "Accept H₀", "Inconclusive", "r is too small"], a: 0, e: "" },
    { q: "If X ~ N(μ, σ²), X̄ ~ …", o: ["N(μ, σ²/n)", "N(μ, σ²)", "N(μ/n, σ²)", "N(0, 1)"], a: 0, e: "" },
    { q: "Test statistic for a normal mean?", o: ["(x̄ − μ)/(σ/√n)", "(x̄ − μ)/σ", "(x̄ − μ)√n", "x̄/σ"], a: 0, e: "" },
    { q: "Critical z for a one-tailed 5% test?", o: ["1.6449", "1.96", "2.326", "1.2816"], a: 0, e: "" },
    { q: "Critical z for a two-tailed 5% test?", o: ["±1.96", "±1.6449", "±2.576", "±1"], a: 0, e: "" },
    { q: "σ = 4, n = 25. Standard error σ/√n = …", o: ["0.8", "0.16", "4", "5"], a: 0, e: "" },
    { q: "z = 1.875, one-tailed 5% test. Conclusion?", o: ["Reject H₀", "Accept H₀", "Two-tailed needed", "Inconclusive"], a: 0, e: "" }
  ],
  flashcards: [
    ["Correlation test H₀", "ρ = 0"],
    ["Decision (correlation)", "|r| > critical value → reject H₀"],
    ["Distribution of X̄", "N(μ, σ²/n)"],
    ["z statistic", "(x̄ − μ₀)/(σ/√n)"],
    ["5% critical z", "1.6449 one-tailed; 1.96 two-tailed"]
  ]
});

S2Data.add({
  id: "14a", group: 14, y1: true, title: "Kinematics: constant acceleration",
  summary: "Units, modelling assumptions, motion graphs and the suvat equations, including vertical motion under gravity.",
  notes: `
<h3>Modelling</h3>
<p>Particle (no size), light (no mass), inextensible (no stretch), smooth (no friction), rigid. g = 9.8 m s<sup>−2</sup> unless told otherwise.</p>
<h3>Graphs</h3>
<p>Displacement–time: gradient = velocity. Velocity–time: gradient = acceleration; area = displacement.</p>
<h3>suvat equations</h3>
<p>v = u + at; s = ut + ½at<sup>2</sup>; v<sup>2</sup> = u<sup>2</sup> + 2as; s = ½(u + v)t; s = vt − ½at<sup>2</sup>.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A ball is thrown up at 14.7 m s<sup>−1</sup>. Max height: v = 0, a = −9.8: 0 = 14.7<sup>2</sup> − 19.6s → s = <b>11.025 m</b>. Time to top: 0 = 14.7 − 9.8t → t = 1.5 s.</div>
<p>Choose a positive direction and stick to it. Vectors (Year 12): constant acceleration in 2D uses r = ut + ½at<sup>2</sup> with i, j components.</p>
`,
  quiz: [
    { q: "On a velocity–time graph, area represents…", o: ["Displacement", "Acceleration", "Velocity", "Time"], a: 0, e: "" },
    { q: "v² = …", o: ["u² + 2as", "u + at", "ut + ½at²", "2as"], a: 0, e: "" },
    { q: "Modelling an object as a particle means…", o: ["Ignoring its size", "Ignoring its mass", "It's very small in mass", "It has no velocity"], a: 0, e: "" },
    { q: "A ball thrown up at 14.7 m/s takes how long to reach the top (g = 9.8)?", o: ["1.5 s", "3 s", "14.7 s", "0.67 s"], a: 0, e: "" },
    { q: "Starting from rest, a = 2 m/s². Distance after 5 s?", o: ["25 m", "10 m", "50 m", "5 m"], a: 0, e: "" },
    { q: "A 'smooth' surface means…", o: ["No friction", "No mass", "No stretch", "Flat"], a: 0, e: "" },
    { q: "Gradient of a displacement–time graph is…", o: ["Velocity", "Acceleration", "Displacement", "Force"], a: 0, e: "" },
    { q: "Which suvat equation doesn't involve s?", o: ["v = u + at", "v² = u² + 2as", "s = ut + ½at²", "s = ½(u + v)t"], a: 0, e: "" },
    { q: "At maximum height, the vertical velocity is…", o: ["0", "g", "u", "Maximum"], a: 0, e: "" }
  ],
  flashcards: [
    ["Particle", "Size ignored"],
    ["Light / inextensible / smooth", "No mass / no stretch / no friction"],
    ["v–t graph", "Gradient = a, area = s"],
    ["suvat set", "v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u + v)t; s = vt − ½at²"],
    ["Vertical motion", "a = −g if up is positive"],
    ["Max height", "v = 0"]
  ]
});

S2Data.add({
  id: "14b", group: 14, y1: true, title: "Variable acceleration",
  summary: "Using calculus for motion with variable acceleration.",
  notes: `
<h3>Calculus in kinematics</h3>
<p>v = ds/dt, a = dv/dt = d<sup>2</sup>s/dt<sup>2</sup>. Going back: s = ∫ v dt, v = ∫ a dt (use initial conditions for constants).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>s = t<sup>3</sup> − 6t<sup>2</sup> + 9t. v = 3t<sup>2</sup> − 12t + 9 = 3(t − 1)(t − 3): at rest when t = 1 and t = 3. a = 6t − 12.</div>
<ul>
<li>Maximum velocity: dv/dt = 0.</li>
<li>Total distance: if the particle changes direction, split the integral at v = 0 and add magnitudes.</li>
<li>Year 13: vectors with variable acceleration: differentiate/integrate i and j components separately.</li>
</ul>
`,
  quiz: [
    { q: "v = …", o: ["ds/dt", "dv/dt", "∫ s dt", "d²s/dt²"], a: 0, e: "" },
    { q: "a = …", o: ["dv/dt", "ds/dt", "∫ v dt", "v/t only"], a: 0, e: "" },
    { q: "s = ∫ … dt", o: ["v", "a", "s", "t"], a: 0, e: "" },
    { q: "s = t³ − 6t² + 9t. v = …", o: ["3t² − 12t + 9", "t² − 6t + 9", "6t − 12", "3t² − 6t"], a: 0, e: "" },
    { q: "In that example, the particle is at rest when t = …", o: ["1 and 3", "0 and 3", "2", "3 only"], a: 0, e: "" },
    { q: "Maximum velocity occurs when…", o: ["a = 0", "v = 0", "s = 0", "t = 0"], a: 0, e: "" },
    { q: "v = 4t + 3, s = 0 at t = 0. s = …", o: ["2t² + 3t", "4t² + 3t", "4", "2t² + 3"], a: 0, e: "" },
    { q: "To find total distance when direction changes…", o: ["Split the integral where v = 0", "Integrate once over all t", "Use suvat", "Differentiate"], a: 0, e: "" },
    { q: "a = 6t − 12 at t = 1 is…", o: ["−6", "6", "0", "−12"], a: 0, e: "" }
  ],
  flashcards: [
    ["Differentiate", "s → v → a"],
    ["Integrate", "a → v → s (+ constants)"],
    ["At rest", "v = 0"],
    ["Max/min velocity", "a = 0"],
    ["Total distance", "Split at direction changes"],
    ["suvat valid?", "Only for constant acceleration"]
  ]
});

S2Data.add({
  id: "14c", group: 14, y2: true, title: "Projectiles",
  summary: "Horizontal and vertical motion of projectiles, time of flight, range and maximum height.",
  notes: `
<h3>Splitting the motion</h3>
<p>Launched at speed U and angle θ above the horizontal:</p>
<ul>
<li>Horizontal: constant velocity U cos θ (no air resistance): x = Ut cos θ.</li>
<li>Vertical: initial U sin θ, acceleration −g: y = Ut sin θ − ½gt<sup>2</sup>.</li>
</ul>
<h3>Key results</h3>
<ul>
<li>Time to maximum height: U sin θ / g. Maximum height: U<sup>2</sup>sin<sup>2</sup>θ/(2g).</li>
<li>Time of flight (level ground): 2U sin θ / g. Range: U<sup>2</sup> sin 2θ / g, maximum at θ = 45°.</li>
<li>Trajectory: y = x tan θ − gx<sup>2</sup>/(2U<sup>2</sup>cos<sup>2</sup>θ), a parabola.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>U = 20 m s<sup>−1</sup>, θ = 30°, g = 9.8. Time of flight = 2 × 10/9.8 = 2.04 s. Range = 17.32 × 2.04 = <b>35.3 m</b>.</div>
<p>Velocity at any time: combine components; speed = √(vₓ<sup>2</sup> + v<sub>y</sub><sup>2</sup>), direction from tan.</p>
`,
  quiz: [
    { q: "Horizontal velocity of a projectile (no air resistance)…", o: ["Is constant", "Increases", "Decreases", "Is zero"], a: 0, e: "" },
    { q: "Initial vertical velocity for speed U at angle θ?", o: ["U sin θ", "U cos θ", "U tan θ", "U"], a: 0, e: "" },
    { q: "Range on level ground is maximised at…", o: ["45°", "90°", "30°", "60°"], a: 0, e: "" },
    { q: "Time of flight on level ground?", o: ["2U sin θ / g", "U sin θ / g", "U cos θ / g", "2U / g"], a: 0, e: "" },
    { q: "At maximum height, vertical velocity is…", o: ["0", "U sin θ", "g", "U cos θ"], a: 0, e: "" },
    { q: "U = 20, θ = 30°. Horizontal velocity?", o: ["17.3 m/s", "10 m/s", "20 m/s", "11.5 m/s"], a: 0, e: "" },
    { q: "The path of a projectile is a…", o: ["Parabola", "Circle", "Straight line", "Hyperbola"], a: 0, e: "" },
    { q: "Maximum height formula?", o: ["U²sin²θ/(2g)", "U²/g", "U sin θ/g", "U²sin 2θ/g"], a: 0, e: "" },
    { q: "A modelling assumption for projectiles is…", o: ["No air resistance", "No gravity", "Constant speed", "Horizontal motion only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Horizontal component", "U cos θ, constant"],
    ["Vertical component", "U sin θ, acceleration −g"],
    ["Time to top", "U sin θ / g"],
    ["Max height", "U²sin²θ/(2g)"],
    ["Time of flight (level)", "2U sin θ / g"],
    ["Range (level)", "U² sin 2θ / g; max at 45°"]
  ]
});

S2Data.add({
  id: "15a", group: 15, y1: true, title: "Newton's laws and connected particles",
  summary: "Forces, F = ma, weight, tension, connected particles and pulleys.",
  notes: `
<h3>Newton's laws</h3>
<ol>
<li>An object stays at rest or moves at constant velocity unless a resultant force acts.</li>
<li><b>F = ma</b> (resultant force = mass × acceleration).</li>
<li>Every action has an equal and opposite reaction.</li>
</ol>
<p>Weight W = mg. Normal reaction R acts perpendicular to the surface. Forces in equilibrium have zero resultant.</p>
<h3>Connected particles</h3>
<ul>
<li>Light inextensible string: same tension throughout and same acceleration for both particles.</li>
<li>Write F = ma for each particle separately, or for the whole system (tension cancels).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (pulley)</span>Masses 5 kg and 3 kg hang over a smooth pulley. 5g − T = 5a and T − 3g = 3a → 2g = 8a → a = 2.45 m s<sup>−2</sup>; T = 3(9.8 + 2.45) = <b>36.75 N</b>.</div>
<p>Lift problems: R − mg = ma for a person in a lift accelerating upwards. Towbars: thrust or tension in the bar.</p>
`,
  quiz: [
    { q: "Newton's second law?", o: ["F = ma", "F = mv", "F = mg only", "F = m/a"], a: 0, e: "" },
    { q: "Weight of a 5 kg mass (g = 9.8)?", o: ["49 N", "5 N", "9.8 N", "0.5 N"], a: 0, e: "" },
    { q: "In a light inextensible string over a smooth pulley, tension is…", o: ["The same throughout", "Different each side", "Zero", "Equal to weight always"], a: 0, e: "" },
    { q: "Masses 5 kg and 3 kg over a pulley. a = …", o: ["2.45 m/s²", "9.8 m/s²", "4.9 m/s²", "1.96 m/s²"], a: 0, e: "" },
    { q: "Normal reaction acts…", o: ["Perpendicular to the surface", "Parallel to the surface", "Downwards", "Along the string"], a: 0, e: "" },
    { q: "A 60 kg person in a lift accelerating up at 1 m/s². R = …", o: ["648 N", "588 N", "60 N", "528 N"], a: 0, e: "" },
    { q: "Newton's first law: with no resultant force an object…", o: ["Stays at rest or constant velocity", "Accelerates", "Stops", "Falls"], a: 0, e: "" },
    { q: "Resultant force on a 2 kg mass accelerating at 3 m/s²?", o: ["6 N", "1.5 N", "5 N", "0.67 N"], a: 0, e: "" },
    { q: "When treating connected particles as one system, the tension…", o: ["Cancels out (internal force)", "Doubles", "Is added", "Equals weight"], a: 0, e: "" }
  ],
  flashcards: [
    ["Newton's 1st law", "No resultant force → constant velocity"],
    ["Newton's 2nd law", "F = ma"],
    ["Newton's 3rd law", "Equal and opposite reactions"],
    ["Weight", "W = mg"],
    ["Light inextensible string", "Same tension, same acceleration"],
    ["Pulley system", "Equations for each particle; add to eliminate T"],
    ["Lift", "R − mg = ma (accelerating up)"]
  ]
});

S2Data.add({
  id: "15b", group: 15, y2: true, title: "Friction, resolving and inclined planes",
  summary: "Resolving forces, friction F ≤ μR, inclined planes and statics.",
  notes: `
<h3>Resolving</h3>
<p>A force F at angle θ to the horizontal has components F cos θ (horizontal) and F sin θ (vertical). In equilibrium, resolve in two perpendicular directions, each summing to zero.</p>
<h3>Friction</h3>
<p>F ≤ μR; F = μR when the object is moving or on the point of moving (limiting friction). Friction opposes motion or tendency to move.</p>
<h3>Inclined planes</h3>
<p>For a slope at angle α: weight component down the slope = mg sin α; perpendicular to slope = mg cos α. R = mg cos α (if no other perpendicular forces).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A 4 kg block slides down a 30° slope, μ = 0.2. R = 4g cos 30° = 33.9 N. Friction = 6.79 N.<br>4g sin 30° − 6.79 = 4a → 19.6 − 6.79 = 4a → a = <b>3.20 m s<sup>−2</sup></b>.</div>
<p>On the point of sliding with no other force: tan α = μ.</p>
`,
  quiz: [
    { q: "Friction satisfies…", o: ["F ≤ μR", "F = μ", "F ≥ μR", "F = R"], a: 0, e: "" },
    { q: "Limiting friction occurs when…", o: ["The object is about to move or moving", "It's at rest with no force", "μ = 0", "R = 0"], a: 0, e: "" },
    { q: "Weight component down a slope at angle α?", o: ["mg sin α", "mg cos α", "mg tan α", "mg"], a: 0, e: "" },
    { q: "Normal reaction on a slope (no other forces)?", o: ["mg cos α", "mg sin α", "mg", "μmg"], a: 0, e: "" },
    { q: "Horizontal component of a 10 N force at 60° above horizontal?", o: ["5 N", "8.66 N", "10 N", "0 N"], a: 0, e: "" },
    { q: "On the point of sliding with only weight and reaction, μ = …", o: ["tan α", "sin α", "cos α", "1"], a: 0, e: "" },
    { q: "4 kg block, 30° slope, μ = 0.2. a ≈ …", o: ["3.20 m/s²", "4.9 m/s²", "1.96 m/s²", "6.79 m/s²"], a: 0, e: "" },
    { q: "In equilibrium, the resultant force is…", o: ["Zero", "mg", "μR", "Maximum"], a: 0, e: "" },
    { q: "Friction acts…", o: ["Opposite to motion or tendency to move", "In the direction of motion", "Perpendicular to the surface", "Vertically"], a: 0, e: "" }
  ],
  flashcards: [
    ["Components of F at θ", "F cos θ, F sin θ"],
    ["Friction", "F ≤ μR; = μR when limiting"],
    ["Down the slope", "mg sin α"],
    ["Perpendicular to slope", "mg cos α"],
    ["About to slide", "μ = tan α (no other forces)"],
    ["Equilibrium", "Resolve two ways; each sums to zero"]
  ]
});

S2Data.add({
  id: "15c", group: 15, y2: true, title: "Moments",
  summary: "Moments, equilibrium of rigid bodies, beams and ladders.",
  notes: `
<h3>Moments</h3>
<p>Moment = force × perpendicular distance from the pivot. Units N m. Clockwise and anticlockwise moments.</p>
<h3>Equilibrium of a rigid body</h3>
<ol>
<li>The resultant force is zero (resolve).</li>
<li>The total moment about any point is zero.</li>
</ol>
<p>Uniform rod: weight acts at its centre. Take moments about a point where an unknown force acts to eliminate it.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A uniform 4 m beam of weight 200 N rests on supports at its ends. A 300 N load is 1 m from end A.<br>Moments about A: R<sub>B</sub> × 4 = 200 × 2 + 300 × 1 → R<sub>B</sub> = 175 N. R<sub>A</sub> = 500 − 175 = 325 N.</div>
<p>On the point of tilting about a support, the reaction at the other support is zero. Ladders: friction at the ground, smooth wall gives a horizontal reaction; take moments about the base.</p>
`,
  quiz: [
    { q: "Moment = …", o: ["Force × perpendicular distance", "Force × mass", "Mass × distance", "Force ÷ distance"], a: 0, e: "" },
    { q: "Units of a moment?", o: ["N m", "N", "m/s", "kg m"], a: 0, e: "" },
    { q: "Where does the weight of a uniform rod act?", o: ["At its centre", "At the ends", "At the pivot", "Nowhere"], a: 0, e: "" },
    { q: "In the beam example, R_B = …", o: ["175 N", "325 N", "250 N", "500 N"], a: 0, e: "" },
    { q: "On the point of tilting about one support, the other reaction is…", o: ["Zero", "Maximum", "Equal to weight", "Negative"], a: 0, e: "" },
    { q: "Why take moments about the point where an unknown force acts?", o: ["It eliminates that force", "It's required", "To find mass", "It doubles the moment"], a: 0, e: "" },
    { q: "A 10 N force 3 m from the pivot has moment…", o: ["30 N m", "3.3 N m", "13 N m", "0.3 N m"], a: 0, e: "" },
    { q: "Rigid body equilibrium requires…", o: ["Zero resultant force and zero total moment", "Zero moment only", "Zero force only", "Equal reactions"], a: 0, e: "" },
    { q: "A ladder against a smooth wall has a wall reaction that is…", o: ["Horizontal", "Vertical", "Along the ladder", "Zero"], a: 0, e: "" }
  ],
  flashcards: [
    ["Moment", "Force × perpendicular distance"],
    ["Equilibrium", "ΣF = 0 and Σ moments = 0"],
    ["Uniform rod", "Weight at the centre"],
    ["Eliminating unknowns", "Take moments about where they act"],
    ["About to tilt", "Other reaction = 0"],
    ["Smooth wall", "Reaction perpendicular to wall"]
  ]
});

S2Data.detail("11a", { mistakes: ["Calling quota sampling random. It isn't: the interviewer chooses."], tips: ["Learn one advantage and one disadvantage of each method."], fact: "The UK census happens every 10 years; the 2021 census was the first mainly online." });
S2Data.detail("11b", { mistakes: ["Forgetting to divide the standard deviation by b when coding (and not subtracting a)."], tips: ["Interpret regression coefficients in context, with units."], fact: "Francis Galton coined 'regression' studying how children's heights regress towards the mean." });
S2Data.detail("12a", { mistakes: ["Assuming events are independent without justification."], tips: ["For conditional probability, restrict to the given event's region and divide."], fact: "The birthday problem: in a group of 23, the chance two share a birthday is just over 50%." });
S2Data.detail("12b", { mistakes: ["Using P(X ≤ 4) for P(X < 4). For discrete X, P(X < 4) = P(X ≤ 3)."], tips: ["Write out the inequality carefully before using cumulative tables."], fact: "Jacob Bernoulli developed the binomial distribution in 'Ars Conjectandi', published in 1713." });
S2Data.detail("12c", { mistakes: ["Using the variance instead of the standard deviation in Z: N(50, 25) has σ = 5."], tips: ["Sketch the normal curve and shade the region for every question."], fact: "Heights, measurement errors and exam marks are often approximately normal." });
S2Data.detail("13a", { mistakes: ["Writing hypotheses in terms of x or the sample proportion instead of p."], tips: ["Always finish with a conclusion in context, using non-certain language."], fact: "Ronald Fisher popularised 5% as a significance level in the 1920s." });
S2Data.detail("13b", { mistakes: ["Forgetting to divide σ by √n for the sample mean."], tips: ["Check the tables for the right tail and the right sample size."], fact: "Karl Pearson developed the product moment correlation coefficient in the 1890s." });
S2Data.detail("14a", { mistakes: ["Mixing signs: if up is positive, g is −9.8."], tips: ["List s, u, v, a, t before choosing an equation."], fact: "Galileo showed objects of different mass fall at the same rate (ignoring air resistance)." });
S2Data.detail("14b", { mistakes: ["Using suvat when acceleration varies with time."], tips: ["Use initial conditions to find each constant of integration."], fact: "Jerk is the rate of change of acceleration; engineers minimise it for comfortable lifts and trains." });
S2Data.detail("14c", { mistakes: ["Using the full speed U in the vertical equations instead of U sin θ."], tips: ["Time links the horizontal and vertical motions: find it from one, use it in the other."], fact: "Air resistance means real long jumps and cannonballs travel less far than the model predicts." });
S2Data.detail("15a", { mistakes: ["Using the total mass with only one tension when writing separate equations."], tips: ["Draw a force diagram for each particle."], fact: "Newton published his three laws in the Principia in 1687." });
S2Data.detail("15b", { mistakes: ["Taking R = mg on a slope. On a slope, R = mg cos α (plus any other perpendicular components)."], tips: ["Resolve parallel and perpendicular to the slope, not horizontally and vertically."], fact: "Rubber on dry tarmac has a coefficient of friction around 0.7–0.9." });
S2Data.detail("15c", { mistakes: ["Using the distance along a slanted rod instead of the perpendicular distance."], tips: ["Choose the pivot point that eliminates the most unknowns."], fact: "Archimedes said: 'Give me a place to stand and I will move the Earth' — with a long enough lever." });
