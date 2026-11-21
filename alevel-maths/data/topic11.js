/* A-level Maths² — Statistics and Mechanics */

S2Data.add({
  id: "11a", group: 11, y1: true, title: "Sampling",
  summary: "Populations and samples, sampling methods and the large data set.",
  notes: R`
<h3>Key terms</h3>
<ul>
<li><b>Population:</b> everything of interest. <b>Census:</b> data from every member (accurate, but costly and slow).</li>
<li><b>Sample:</b> a subset of the population. <b>Sampling frame:</b> a list of the population. <b>Sampling units:</b> the individual members.</li>
</ul>
<h3>Random methods</h3>
<table>
<tr><th>Method</th><th>How</th><th>Pros / cons</th></tr>
<tr><td>Simple random</td><td>Number every member; pick with a random number generator</td><td>Unbiased; needs a full sampling frame</td></tr>
<tr><td>Systematic</td><td>Every \(k\)th member from a random start, where \(k = \dfrac{N}{n}\)</td><td>Simple; can be biased if the list has a pattern</td></tr>
<tr><td>Stratified</td><td>Random samples from each group, in proportion to group size</td><td>Represents each group; needs group information</td></tr>
</table>
<div class="box box-prac"><span class="box-title">Worked example</span>A school has 1000 students, 200 of them in Year 12. A stratified sample of 50 needs \(\dfrac{200}{1000} \times 50 = 10\) Year 12 students.</div>
<h3>Non-random methods</h3>
<ul>
<li><b>Quota:</b> the interviewer fills a quota for each group. Quick and needs no frame, but biased by the interviewer's choices and non-response.</li>
<li><b>Opportunity:</b> whoever is available. Easy and cheap, but unlikely to be representative.</li>
</ul>
<h3>Large data set (Edexcel weather data)</h3>
<p>Know the weather stations and variables (e.g. daily mean temperature, rainfall, wind speed). "tr" means trace (less than 0.05 mm of rain); "n/a" means not available.</p>
`,
  quiz: [
    { q: "A census…", o: ["Collects data from every member", "Uses a random sample", "Is always cheap", "Uses quotas"], a: 0, e: "Every member of the population is included, so there's no sampling error." },
    { q: "Taking every 10th name from a random start is…", o: ["Systematic sampling", "Simple random", "Stratified", "Quota"], a: 0, e: "Regular intervals from a random starting point define systematic sampling." },
    { q: "Stratified sampling…", o: ["Samples each group in proportion", "Picks whoever is available", R`Uses every \(k\)th item`, "Uses no randomness"], a: 0, e: "Each stratum (group) is represented in proportion to its size, chosen randomly within it." },
    { q: "Which method doesn't need a sampling frame?", o: ["Quota", "Simple random", "Systematic", "Stratified"], a: 0, e: "The interviewer just finds people who fit each group until the quota is full." },
    { q: "Opportunity sampling is…", o: ["Easy but likely to be unrepresentative", "Always unbiased", "The same as stratified", "Random"], a: 0, e: "It uses whoever happens to be available, who may not reflect the population." },
    { q: "A sampling frame is…", o: ["A list of the population", "The sample size", "A graph", "A type of bias"], a: 0, e: "It's the list the sample is chosen from." },
    { q: R`Population 600, sample 30, systematic sampling: \(k = \ ?\)`, o: ["20", "30", "600", "18"], a: 0, e: R`\(k = \dfrac{600}{30} = 20\).` },
    { q: "Stratified: 200 of 1000 are in Year 12. Sample 50. How many from Year 12?", o: ["10", "20", "50", "5"], a: 0, e: R`\(\dfrac{200}{1000} \times 50 = 10\).` },
    { q: "In the large data set, 'tr' means…", o: ["Trace: less than 0.05 mm", "Total rainfall", "Temperature reading", "Not available"], a: 0, e: "A trace amount is recorded when rain fell but was too little to measure." }
  ],
  flashcards: [
    ["Census vs sample", "Everyone vs a subset"],
    ["Sampling frame", "A list of the population"],
    ["Simple random", "Every member equally likely; needs a frame"],
    ["Systematic", R`Every \(k\)th from a random start, \(k = \frac{N}{n}\)`],
    ["Stratified", "Proportional random samples from each group"],
    ["Quota", "Non-random; fill group quotas"],
    ["Opportunity", "Whoever is available"],
    ["LDS 'tr'", "Trace amount (less than 0.05 mm)"]
  ]
});

S2Data.add({
  id: "11b", group: 11, y1: true, title: "Data presentation, correlation and regression",
  summary: "Measures of location and spread, coding, outliers, diagrams, correlation and regression lines.",
  notes: R`
<h3>Location and spread</h3>
<ul>
<li>Mean: \(\bar{x} = \dfrac{\sum x}{n}\) (for grouped data, use class midpoints). Also the median, mode and quartiles (interpolate for grouped data).</li>
<li>Variance: \[\sigma^2 = \frac{\sum x^2}{n} - \bar{x}^2 = \frac{S_{xx}}{n}\] Standard deviation \(\sigma = \sqrt{\text{variance}}\).</li>
<li><b>Coding</b> \(y = \dfrac{x - a}{b}\): then \(\bar{y} = \dfrac{\bar{x} - a}{b}\) and \(\sigma_y = \dfrac{\sigma_x}{b}\). Adding or subtracting doesn't change the spread.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.
<ol><li>\(\bar{x} = \dfrac{40}{8} = 5\).</li>
<li>\(\sum x^2 = 4 + 16 + 16 + 16 + 25 + 25 + 49 + 81 = 232\), so \(\dfrac{\sum x^2}{n} = 29\).</li>
<li>Variance \(= 29 - 5^2 = 4\), so \(\sigma = 2\).</li></ol></div>
<h3>Outliers</h3>
<p>Common definitions: more than \(1.5 \times \text{IQR}\) beyond the quartiles, or more than \(2\sigma\) from the mean. When cleaning data, remove errors, not genuine extreme values.</p>
<h3>Diagrams</h3>
<p>Box plots, cumulative frequency curves and histograms. In a histogram, <b>area</b> is proportional to frequency, and frequency density \(= \dfrac{\text{frequency}}{\text{class width}}\).</p>
<h3>Correlation and regression</h3>
<ul>
<li>Describe correlation as positive or negative, strong or weak. Correlation doesn't imply causation.</li>
<li>In the regression line \(y = a + bx\), \(b\) is the change in \(y\) for each unit increase in \(x\), and \(a\) is the value of \(y\) when \(x = 0\).</li>
<li>Use the line to <b>interpolate</b> (within the data); <b>extrapolation</b> (outside the data) is unreliable.</li>
<li>Only use the regression line of \(y\) on \(x\) to predict \(y\) from \(x\).</li>
</ul>
<div class="box box-c"><span class="box-title">Year 13</span>Exponential models: \(y = kb^x \Rightarrow \log y = \log k + x\log b\). The product moment correlation coefficient \(r\) is interpreted and tested (see Hypothesis testing).</div>
`,
  quiz: [
    { q: "Variance = …", o: [R`\(\dfrac{\sum x^2}{n} - \bar{x}^2\)`, R`\(\dfrac{\sum x}{n}\)`, R`\(\sqrt{\dfrac{\sum x^2}{n}}\)`, R`\(\dfrac{(\sum x)^2}{n}\)`], a: 0, e: R`"The mean of the squares minus the square of the mean."` },
    { q: R`Coding \(y = \dfrac{x - 50}{10}\). If \(\sigma_x = 20\), \(\sigma_y = \ ?\)`, o: ["2", "20", "−3", "200"], a: 0, e: R`Subtracting 50 doesn't affect spread; dividing by 10 does: \(\dfrac{20}{10} = 2\).` },
    { q: R`If \(\bar{y} = 3\) with \(y = \dfrac{x - 50}{10}\), \(\bar{x} = \ ?\)`, o: ["80", "53", "35", "5.3"], a: 0, e: R`\(3 = \dfrac{\bar x - 50}{10}\), so \(\bar x = 80\).` },
    { q: R`\(Q_1 = 20\), \(Q_3 = 30\). Find the upper outlier boundary (\(1.5 \times \text{IQR}\)).`, o: ["45", "40", "35", "50"], a: 0, e: R`IQR = 10, so \(Q_3 + 1.5 \times 10 = 45\).` },
    { q: R`In \(y = 3 + 2x\), the gradient 2 means…`, o: [R`\(y\) increases by 2 for each unit increase in \(x\)`, R`\(y = 2\) when \(x = 0\)`, R`\(x = 2y\)`, "The correlation is 2"], a: 0, e: R`The gradient is the rate of change of \(y\) with \(x\).` },
    { q: "Predicting outside the range of the data is…", o: ["Extrapolation, which is unreliable", "Interpolation, which is reliable", "Always accurate", "Coding"], a: 0, e: "The pattern may not continue beyond the data you have." },
    { q: "In a histogram, frequency is proportional to…", o: ["Area", "Height", "Width", "Frequency density only"], a: 0, e: "Bars can have different widths, so it's the area that represents frequency." },
    { q: "Strong correlation proves…", o: ["Nothing about causation", "Causation", "A linear model is perfect", "There are no outliers"], a: 0, e: "A third factor could cause both, or it could be coincidence." },
    { q: "Find the standard deviation of 2, 4, 4, 4, 5, 5, 7, 9.", o: ["2", "4", "5", "1"], a: 0, e: R`Mean 5; \(\dfrac{\sum x^2}{n} = 29\); variance \(= 29 - 25 = 4\); \(\sigma = 2\).` }
  ],
  flashcards: [
    ["Variance", R`\(\dfrac{\sum x^2}{n} - \bar{x}^2\)`],
    ["Standard deviation", R`\(\sqrt{\text{variance}}\)`],
    [R`Coding \(y = \frac{x - a}{b}\)`, R`\(\bar{y} = \frac{\bar{x} - a}{b}\), \(\sigma_y = \frac{\sigma_x}{b}\)`],
    ["Outlier rule (IQR)", R`Below \(Q_1 - 1.5\,\text{IQR}\) or above \(Q_3 + 1.5\,\text{IQR}\)`],
    ["Histogram", "Area ∝ frequency"],
    [R`Regression \(y = a + bx\)`, R`\(b\): change per unit \(x\); \(a\): value at \(x = 0\)`],
    ["Interpolation vs extrapolation", "Within the data (OK) vs outside it (unreliable)"],
    ["Correlation ≠ causation", "A third factor may cause both"]
  ]
});

S2Data.add({
  id: "12a", group: 12, y1: true, title: "Probability",
  summary: "Venn and tree diagrams, mutually exclusive and independent events, and (Year 13) conditional probability.",
  notes: R`
<h3>Rules</h3>
<table><tr><th>Rule</th><th>Formula</th></tr>
<tr><td>Complement</td><td>\(P(A') = 1 - P(A)\)</td></tr>
<tr><td>Addition rule</td><td>\(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)</td></tr>
<tr><td>Mutually exclusive</td><td>\(P(A \cap B) = 0\)</td></tr>
<tr><td>Independent</td><td>\(P(A \cap B) = P(A) \times P(B)\)</td></tr></table>
<h3>Diagrams</h3>
<p>Venn diagrams: fill in the intersection first, then the rest of each circle. Tree diagrams: multiply along the branches, then add the outcomes you want.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(P(A) = 0.3\), \(P(B) = 0.5\), and \(A\), \(B\) are independent.
<ol><li>\(P(A \cap B) = 0.3 \times 0.5 = 0.15\).</li>
<li>\(P(A \cup B) = 0.3 + 0.5 - 0.15 = 0.65\).</li></ol></div>
<div class="box box-c"><span class="box-title">Year 13: conditional probability</span>
<p>\[P(A \mid B) = \frac{P(A \cap B)}{P(B)}\]</p>
\(A\) and \(B\) are independent if and only if \(P(A \mid B) = P(A)\).<br>
Example: \(P(A) = 0.4\), \(P(B) = 0.5\), \(P(A \cap B) = 0.2\). Then \(P(A \mid B) = \dfrac{0.2}{0.5} = 0.4 = P(A)\), so they're independent.<br>
Use two-way tables, or trees with conditional probabilities on the second branches.</div>
`,
  quiz: [
    { q: R`\(P(A \cup B) = \ ?\)`, o: [R`\(P(A) + P(B) - P(A \cap B)\)`, R`\(P(A) + P(B)\)`, R`\(P(A) \times P(B)\)`, R`\(1 - P(A \cap B)\)`], a: 0, e: "Adding the two probabilities counts the overlap twice, so subtract it once." },
    { q: "Independent events satisfy…", o: [R`\(P(A \cap B) = P(A)P(B)\)`, R`\(P(A \cap B) = 0\)`, R`\(P(A) = P(B)\)`, R`\(P(A \cup B) = 1\)`], a: 0, e: "One event happening doesn't change the probability of the other, so you multiply." },
    { q: "Mutually exclusive events satisfy…", o: [R`\(P(A \cap B) = 0\)`, R`\(P(A \cap B) = P(A)P(B)\)`, R`\(P(A) + P(B) = 0\)`, R`\(P(A \mid B) = P(A)\)`], a: 0, e: "They can't happen together, so the overlap is empty." },
    { q: R`\(P(A) = 0.3\), \(P(B) = 0.5\), independent. Find \(P(A \cap B)\).`, o: ["0.15", "0.8", "0.2", "0.65"], a: 0, e: R`\(0.3 \times 0.5 = 0.15\).` },
    { q: R`\(P(A) = 0.3\), \(P(B) = 0.5\), independent. Find \(P(A \cup B)\).`, o: ["0.65", "0.8", "0.15", "0.35"], a: 0, e: R`\(0.3 + 0.5 - 0.15 = 0.65\).` },
    { q: R`Year 13: \(P(A \mid B) = \ ?\)`, o: [R`\(\dfrac{P(A \cap B)}{P(B)}\)`, R`\(P(A)P(B)\)`, R`\(\dfrac{P(A \cap B)}{P(A)}\)`, R`\(\dfrac{P(B)}{P(A)}\)`], a: 0, e: R`Given \(B\) happened, \(B\) becomes the whole space: divide by \(P(B)\).` },
    { q: R`Year 13: \(P(A \cap B) = 0.12\), \(P(B) = 0.3\). Find \(P(A \mid B)\).`, o: ["0.4", "0.036", "0.25", "0.18"], a: 0, e: R`\(\dfrac{0.12}{0.3} = 0.4\).` },
    { q: R`Year 13: \(A\) and \(B\) are independent if…`, o: [R`\(P(A \mid B) = P(A)\)`, R`\(P(A \mid B) = 0\)`, R`\(P(A \mid B) = P(B)\)`, R`\(P(A \mid B) = 1\)`], a: 0, e: R`Knowing \(B\) happened makes no difference to the probability of \(A\).` },
    { q: "In a Venn diagram, fill in first…", o: ["The intersection", "The outside", R`\(A\) only`, R`\(B\) only`], a: 0, e: "The other regions are worked out by subtracting the intersection." }
  ],
  flashcards: [
    ["Addition rule", R`\(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)`],
    ["Mutually exclusive", R`\(P(A \cap B) = 0\)`],
    ["Independent", R`\(P(A \cap B) = P(A)P(B)\)`],
    ["Complement", R`\(P(A') = 1 - P(A)\)`],
    ["Conditional (Y13)", R`\(P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}\)`],
    ["Independence test (Y13)", R`\(P(A \mid B) = P(A)\)`]
  ]
});

S2Data.add({
  id: "12b", group: 12, y1: true, title: "Discrete distributions and the binomial",
  summary: R`Discrete random variables, probability distributions and the binomial distribution \(B(n, p)\).`,
  notes: R`
<h3>Discrete random variables</h3>
<p>A probability distribution lists every value \(x\) with its probability \(P(X = x)\). The probabilities must add to 1: \(\sum P(X = x) = 1\). Use this to find unknowns.</p>
<h3>The binomial distribution</h3>
<p>\(X \sim B(n, p)\) models the number of successes in \(n\) trials when:</p>
<ul><li>there's a fixed number of trials, \(n\);</li><li>each trial has two outcomes (success or failure);</li><li>the probability of success, \(p\), is constant;</li><li>the trials are independent.</li></ul>
<p>\[P(X = r) = \binom{n}{r}p^r(1 - p)^{n - r}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(X \sim B(10, 0.3)\). Find \(P(X = 2)\).<br>\(\binom{10}{2}(0.3)^2(0.7)^8 = 45 \times 0.09 \times 0.05765 = 0.2335\).</div>
<p>Use a calculator for cumulative probabilities \(P(X \le r)\). Useful conversions:</p>
<ul><li>\(P(X \ge r) = 1 - P(X \le r - 1)\)</li><li>\(P(a < X \le b) = P(X \le b) - P(X \le a)\)</li></ul>
<p>The mean of \(B(n, p)\) is \(np\).</p>
`,
  quiz: [
    { q: "The probabilities in a distribution add to…", o: ["1", "0", R`\(n\)`, "100"], a: 0, e: "One of the outcomes must happen, so the total probability is 1." },
    { q: "Which is <b>not</b> a binomial condition?", o: [R`\(p\) changes each trial`, R`Fixed \(n\)`, "Independent trials", "Two outcomes"], a: 0, e: R`\(p\) must stay constant for every trial.` },
    { q: R`For \(B(n, p)\), \(P(X = r) = \ ?\)`, o: [R`\(\binom{n}{r}p^r(1 - p)^{n - r}\)`, R`\(p^r\)`, R`\(\binom{n}{r}p^n\)`, R`\(np\)`], a: 0, e: R`\(\binom{n}{r}\) counts the arrangements; then \(r\) successes and \(n - r\) failures.` },
    { q: R`\(X \sim B(10, 0.3)\). \(P(X = 2) \approx\ ?\)`, o: ["0.233", "0.3", "0.09", "0.383"], a: 0, e: R`\(45 \times 0.3^2 \times 0.7^8 = 0.2335\).` },
    { q: R`\(P(X \ge 4) = \ ?\)`, o: [R`\(1 - P(X \le 3)\)`, R`\(1 - P(X \le 4)\)`, R`\(P(X \le 4)\)`, R`\(P(X = 4)\)`], a: 0, e: R`"At least 4" is everything except 0, 1, 2, 3.` },
    { q: R`\(P(2 < X \le 5) = \ ?\)`, o: [R`\(P(X \le 5) - P(X \le 2)\)`, R`\(P(X \le 5) - P(X \le 3)\)`, R`\(P(X \le 5) + P(X \le 2)\)`, R`\(P(X = 3)\) only`], a: 0, e: R`That's 3, 4 or 5: everything up to 5 minus everything up to 2.` },
    { q: R`The mean of \(B(20, 0.25)\) is…`, o: ["5", "4", "20", "0.25"], a: 0, e: R`\(np = 20 \times 0.25 = 5\).` },
    { q: R`\(X \sim B(5, 0.5)\). \(P(X = 5) = \ ?\)`, o: [R`\(\frac{1}{32}\)`, R`\(\frac15\)`, R`\(\frac12\)`, R`\(\frac{5}{32}\)`], a: 0, e: R`All five trials succeed: \(0.5^5 = \frac{1}{32}\).` },
    { q: R`\(P(X = x) = kx\) for \(x = 1, 2, 3\). \(k = \ ?\)`, o: [R`\(\frac16\)`, R`\(\frac13\)`, R`\(\frac12\)`, "6"], a: 0, e: R`\(k + 2k + 3k = 1\), so \(6k = 1\).` }
  ],
  flashcards: [
    ["Probability distribution", R`\(\sum P(X = x) = 1\)`],
    ["Binomial conditions", R`Fixed \(n\), two outcomes, constant \(p\), independent trials`],
    [R`\(P(X = r)\)`, R`\(\binom{n}{r}p^r(1 - p)^{n-r}\)`],
    [R`\(P(X \ge r)\)`, R`\(1 - P(X \le r - 1)\)`],
    [R`\(P(a < X \le b)\)`, R`\(P(X \le b) - P(X \le a)\)`],
    [R`Mean of \(B(n, p)\)`, R`\(np\)`]
  ]
});

S2Data.add({
  id: "12c", group: 12, y2: true, title: "The normal distribution",
  summary: R`Properties of \(N(\mu, \sigma^2)\), standardising, the inverse normal, and approximating the binomial.`,
  notes: R`
<h3>Properties</h3>
<p>\(X \sim N(\mu, \sigma^2)\) is symmetric and bell-shaped, with mean = median = mode = \(\mu\), and points of inflection at \(\mu \pm \sigma\).</p>
<p>About 68% of values lie within \(\mu \pm \sigma\), 95% within \(\mu \pm 2\sigma\), and 99.7% within \(\mu \pm 3\sigma\).</p>
<h3>Calculations</h3>
<ul>
<li>Standardise: \(Z = \dfrac{X - \mu}{\sigma}\), where \(Z \sim N(0, 1)\).</li>
<li>Use a calculator for \(P(X < a)\) or \(P(a < X < b)\). For a continuous variable, \(P(X = a) = 0\).</li>
<li>The inverse normal finds \(a\) with, say, \(P(X < a) = 0.9\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>\(X \sim N(\mu, 4^2)\) and \(P(X < 20) = 0.8\). Find \(\mu\).
<ol><li>From the inverse normal, \(P(Z < z) = 0.8\) gives \(z = 0.8416\).</li>
<li>So \(\dfrac{20 - \mu}{4} = 0.8416\).</li>
<li>\(\mu = 20 - 4(0.8416) = 16.63\).</li></ol></div>
<h3>Approximating the binomial</h3>
<p>If \(n\) is large and \(p\) is close to 0.5, then \(B(n, p) \approx N\big(np,\ np(1 - p)\big)\). Apply a <b>continuity correction</b>, because you're approximating a discrete variable with a continuous one: \(P(X \le 30) \to P(Y < 30.5)\).</p>
`,
  quiz: [
    { q: R`\(Z = \ ?\)`, o: [R`\(\dfrac{X - \mu}{\sigma}\)`, R`\(\dfrac{X - \sigma}{\mu}\)`, R`\((\mu - X)\sigma\)`, R`\(\dfrac{X}{\sigma}\)`], a: 0, e: "It measures how many standard deviations a value is from the mean." },
    { q: R`About what percentage lies within \(\mu \pm 2\sigma\)?`, o: ["95%", "68%", "99.7%", "50%"], a: 0, e: "68% within one, 95% within two, 99.7% within three standard deviations." },
    { q: R`For a normal distribution, \(P(X = a) = \ ?\)`, o: ["0", "1", "0.5", R`Depends on \(\sigma\)`], a: 0, e: "For a continuous variable, a single value has no width, so no probability." },
    { q: "The points of inflection of the normal curve are at…", o: [R`\(\mu \pm \sigma\)`, R`\(\mu \pm 2\sigma\)`, R`\(\mu\)`, "0"], a: 0, e: "That's where the curve changes from bending down to bending up." },
    { q: R`\(X \sim N(50, 25)\). \(\sigma = \ ?\)`, o: ["5", "25", "625", "50"], a: 0, e: R`The second number is the variance, \(\sigma^2 = 25\), so \(\sigma = 5\).` },
    { q: R`\(B(100, 0.5) \approx\ ?\)`, o: [R`\(N(50, 25)\)`, R`\(N(50, 50)\)`, R`\(N(100, 0.5)\)`, R`\(N(50, 5)\)`], a: 0, e: R`Mean \(np = 50\), variance \(np(1 - p) = 25\).` },
    { q: R`The continuity correction for \(P(X \le 30)\) is…`, o: [R`\(P(Y < 30.5)\)`, R`\(P(Y < 29.5)\)`, R`\(P(Y < 30)\)`, R`\(P(Y > 30.5)\)`], a: 0, e: "The bar for 30 stretches from 29.5 to 30.5, and you want to include it." },
    { q: "The normal approximation works best when…", o: [R`\(n\) is large and \(p \approx 0.5\)`, R`\(n\) is small`, R`\(p \approx 0\)`, R`\(p \approx 1\)`], a: 0, e: "Then the binomial is roughly symmetric and bell-shaped." },
    { q: "Mean = median = mode for a normal distribution because…", o: ["It's symmetric", R`\(\sigma = 0\)`, "It's discrete", R`\(\mu = 0\)`], a: 0, e: "The peak is in the centre, which splits the distribution in half." }
  ],
  flashcards: [
    ["Normal shape", "Symmetric bell; mean = median = mode"],
    ["68–95–99.7", "Within 1, 2, 3 standard deviations"],
    ["Standardising", R`\(Z = \dfrac{X - \mu}{\sigma}\)`],
    ["Points of inflection", R`\(\mu \pm \sigma\)`],
    ["Binomial approximation", R`\(N\big(np,\ np(1 - p)\big)\)`],
    ["Continuity correction", "Adjust the boundary by 0.5"]
  ]
});

S2Data.add({
  id: "13a", group: 13, y1: true, title: "Hypothesis testing: binomial",
  summary: "Null and alternative hypotheses, significance levels, critical regions and one- and two-tailed binomial tests.",
  notes: R`
<h3>Language</h3>
<ul>
<li>\(H_0\): the null hypothesis, e.g. \(p = 0.3\). \(H_1\): the alternative, e.g. \(p > 0.3\) (one-tailed) or \(p \ne 0.3\) (two-tailed).</li>
<li><b>Significance level:</b> the probability of rejecting \(H_0\) when it's actually true (e.g. 5%).</li>
<li><b>Critical region:</b> the values of the test statistic that lead to rejecting \(H_0\). The <b>actual significance level</b> is the probability of landing in the critical region when \(H_0\) is true.</li>
</ul>
<h3>Method</h3>
<ol>
<li>State \(H_0\) and \(H_1\) in terms of \(p\).</li>
<li>Assume \(H_0\) is true: \(X \sim B(n, p)\).</li>
<li>Find the probability of a result at least as extreme as the observed one, e.g. \(P(X \ge x)\), or find the critical region.</li>
<li>Compare with the significance level (halve it for each tail of a two-tailed test).</li>
<li>Conclude in context: "There is (not) sufficient evidence to suggest…".</li>
</ol>
<div class="box box-prac"><span class="box-title">Worked example</span>A coin lands heads 15 times out of 20. Test at 5% whether it's biased towards heads.
<ol><li>\(H_0: p = 0.5\), \(H_1: p > 0.5\).</li>
<li>Under \(H_0\), \(X \sim B(20, 0.5)\).</li>
<li>\(P(X \ge 15) = 1 - P(X \le 14) = 0.0207\).</li>
<li>\(0.0207 < 0.05\), so reject \(H_0\).</li></ol>
There is sufficient evidence to suggest the coin is biased towards heads.</div>
`,
  quiz: [
    { q: R`\(H_0\) is…`, o: ["The null hypothesis, assumed true", "The alternative", "The test statistic", "The critical value"], a: 0, e: "We assume the 'nothing has changed' position until the evidence says otherwise." },
    { q: R`\(H_1: p \ne 0.4\) is a…`, o: ["Two-tailed test", "One-tailed test", "Null hypothesis", "Critical region"], a: 0, e: R`\(\ne\) allows for a change in either direction.` },
    { q: "In a two-tailed test at 5%, each tail has…", o: ["2.5%", "5%", "10%", "1%"], a: 0, e: "The 5% is split equally between the two tails." },
    { q: "The significance level is the probability of…", o: [R`Rejecting \(H_0\) when it's true`, R`Accepting \(H_1\) when it's false`, "The observed value", R`\(H_1\) being true`], a: 0, e: "It's the risk of a false alarm." },
    { q: R`\(P(X \ge 15) = 0.0207\) at the 5% level. Conclusion?`, o: [R`Reject \(H_0\)`, R`Accept \(H_0\)`, "Inconclusive", "Change the significance level"], a: 0, e: R`\(0.0207 < 0.05\), so the result is significant.` },
    { q: "Hypotheses are stated in terms of…", o: [R`The population parameter \(p\)`, R`The sample value \(x\)`, "The test statistic", R`\(n\)`], a: 0, e: "We're testing a claim about the population, not the sample." },
    { q: "The critical region is…", o: [R`Values that lead to rejecting \(H_0\)`, R`Values that accept \(H_0\)`, "The mean", "The significance level"], a: 0, e: R`If the test statistic falls here, the result is significant.` },
    { q: "Conclusions should be…", o: ["In context, and not claim certainty", R`'\(H_0\) is proven true'`, "Numerical only", "About the sample only"], a: 0, e: "A test gives evidence, not proof." },
    { q: "The actual significance level is…", o: [R`\(P(\text{in critical region} \mid H_0 \text{ true})\)`, "Always exactly 5%", "The p-value", "1 − the significance level"], a: 0, e: "For a discrete distribution it's usually a little less than the nominal level." }
  ],
  flashcards: [
    [R`\(H_0\) / \(H_1\)`, "Null (assumed) / alternative"],
    ["One-tailed vs two-tailed", R`\(p >\) or \(p <\) vs \(p \ne\)`],
    ["Significance level", R`\(P(\text{reject } H_0 \mid H_0 \text{ true})\)`],
    ["Critical region", "Values leading to rejection"],
    ["Two-tailed", "Halve the significance level for each tail"],
    ["Conclusion", "'Sufficient evidence to suggest…', in context"]
  ]
});

S2Data.add({
  id: "13b", group: 13, y2: true, title: "Hypothesis testing: correlation and the normal mean",
  summary: "Testing the product moment correlation coefficient and testing a normal population mean.",
  notes: R`
<h3>Testing correlation</h3>
<p>\(H_0: \rho = 0\) (no correlation in the population); \(H_1: \rho > 0\), \(\rho < 0\) or \(\rho \ne 0\). Compare the sample value \(r\) with the critical value from tables for sample size \(n\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(n = 10\), \(r = 0.68\), 5% one-tailed test with \(H_1: \rho > 0\). The critical value is 0.5494. Since \(0.68 > 0.5494\), reject \(H_0\): there is evidence of positive correlation.</div>
<h3>Testing a normal mean</h3>
<p>If \(X \sim N(\mu, \sigma^2)\), the sample mean \(\bar{X} \sim N\!\left(\mu, \dfrac{\sigma^2}{n}\right)\).</p>
<ul>
<li>\(H_0: \mu = \mu_0\). Test statistic: \[z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}\]</li>
<li>Compare with the critical \(z\) (one-tailed 5%: 1.6449; two-tailed 5%: \(\pm1.96\)), or find \(P(\bar{X} \ge \bar{x})\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>\(\sigma = 4\), \(n = 25\), \(\bar{x} = 21.5\). Test \(H_0: \mu = 20\) against \(H_1: \mu > 20\) at 5%.
<ol><li>Standard error: \(\dfrac{\sigma}{\sqrt n} = \dfrac{4}{5} = 0.8\).</li>
<li>\(z = \dfrac{21.5 - 20}{0.8} = 1.875\).</li>
<li>\(1.875 > 1.6449\), so reject \(H_0\): there is evidence the mean is greater than 20.</li></ol></div>
`,
  quiz: [
    { q: "The null hypothesis for a correlation test is…", o: [R`\(\rho = 0\)`, R`\(r = 0\)`, R`\(\rho = 1\)`, R`\(r > 0\)`], a: 0, e: R`Hypotheses are about the population (\(\rho\)), not the sample (\(r\)).` },
    { q: R`\(\rho\) represents…`, o: ["The population correlation coefficient", "The sample correlation", "The mean", "The p-value"], a: 0, e: R`\(r\) is the sample value used to test a claim about \(\rho\).` },
    { q: R`\(n = 10\), \(r = 0.68\), critical value 0.5494. Conclusion?`, o: [R`Reject \(H_0\): evidence of correlation`, R`Accept \(H_0\)`, "Inconclusive", R`\(r\) is too small`], a: 0, e: R`\(r\) exceeds the critical value, so it's significant.` },
    { q: R`If \(X \sim N(\mu, \sigma^2)\), then \(\bar{X} \sim\ ?\)`, o: [R`\(N\!\left(\mu, \frac{\sigma^2}{n}\right)\)`, R`\(N(\mu, \sigma^2)\)`, R`\(N\!\left(\frac{\mu}{n}, \sigma^2\right)\)`, R`\(N(0, 1)\)`], a: 0, e: "Averaging reduces the variability: the variance is divided by n." },
    { q: "The test statistic for a normal mean is…", o: [R`\(\dfrac{\bar{x} - \mu}{\sigma/\sqrt n}\)`, R`\(\dfrac{\bar{x} - \mu}{\sigma}\)`, R`\((\bar{x} - \mu)\sqrt n\)`, R`\(\dfrac{\bar{x}}{\sigma}\)`], a: 0, e: R`It uses the standard deviation of \(\bar X\), which is \(\frac{\sigma}{\sqrt n}\).` },
    { q: R`The critical \(z\) for a one-tailed 5% test is…`, o: ["1.6449", "1.96", "2.326", "1.2816"], a: 0, e: R`\(P(Z > 1.6449) = 0.05\).` },
    { q: R`The critical \(z\) for a two-tailed 5% test is…`, o: [R`\(\pm1.96\)`, R`\(\pm1.6449\)`, R`\(\pm2.576\)`, R`\(\pm1\)`], a: 0, e: R`2.5% in each tail: \(P(Z > 1.96) = 0.025\).` },
    { q: R`\(\sigma = 4\), \(n = 25\). The standard error \(\dfrac{\sigma}{\sqrt n} = \ ?\)`, o: ["0.8", "0.16", "4", "5"], a: 0, e: R`\(\dfrac{4}{\sqrt{25}} = \dfrac45\).` },
    { q: R`\(z = 1.875\), one-tailed 5% test. Conclusion?`, o: [R`Reject \(H_0\)`, R`Accept \(H_0\)`, "A two-tailed test is needed", "Inconclusive"], a: 0, e: R`\(1.875 > 1.6449\).` }
  ],
  flashcards: [
    [R`Correlation test \(H_0\)`, R`\(\rho = 0\)`],
    ["Decision (correlation)", R`\(|r| >\) critical value → reject \(H_0\)`],
    [R`Distribution of \(\bar{X}\)`, R`\(N\!\left(\mu, \frac{\sigma^2}{n}\right)\)`],
    [R`\(z\) statistic`, R`\(\dfrac{\bar{x} - \mu_0}{\sigma/\sqrt n}\)`],
    [R`5% critical \(z\)`, "1.6449 one-tailed; 1.96 two-tailed"]
  ]
});

S2Data.add({
  id: "14a", group: 14, y1: true, title: "Kinematics: constant acceleration",
  summary: "Units, modelling assumptions, motion graphs and the suvat equations, including vertical motion under gravity.",
  notes: R`
<h3>Modelling assumptions</h3>
<table><tr><th>Word</th><th>Meaning</th></tr>
<tr><td>Particle</td><td>Size ignored; the mass acts at a single point</td></tr>
<tr><td>Light</td><td>Mass ignored</td></tr>
<tr><td>Inextensible</td><td>Doesn't stretch</td></tr>
<tr><td>Smooth</td><td>No friction</td></tr>
<tr><td>Rigid</td><td>Doesn't bend</td></tr></table>
<p>Take \(g = 9.8\ \text{m s}^{-2}\) unless told otherwise.</p>
<h3>Graphs</h3>
<ul><li>Displacement–time: gradient = velocity.</li>
<li>Velocity–time: gradient = acceleration; area under the graph = displacement.</li></ul>
<h3>The suvat equations</h3>
<p>For <b>constant</b> acceleration only. \(s\) displacement, \(u\) initial velocity, \(v\) final velocity, \(a\) acceleration, \(t\) time.</p>
<table><tr><th>Equation</th><th>Missing</th></tr>
<tr><td>\(v = u + at\)</td><td>\(s\)</td></tr>
<tr><td>\(s = ut + \tfrac12 at^2\)</td><td>\(v\)</td></tr>
<tr><td>\(v^2 = u^2 + 2as\)</td><td>\(t\)</td></tr>
<tr><td>\(s = \tfrac12(u + v)t\)</td><td>\(a\)</td></tr>
<tr><td>\(s = vt - \tfrac12 at^2\)</td><td>\(u\)</td></tr></table>
<p>List the three values you know and the one you want, then pick the equation that leaves out the fifth.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A ball is thrown straight up at \(14.7\ \text{m s}^{-1}\). Take up as positive.
<ol><li>At the top, \(v = 0\); \(u = 14.7\), \(a = -9.8\).</li>
<li>Height: \(v^2 = u^2 + 2as \Rightarrow 0 = 14.7^2 - 19.6s \Rightarrow s = 11.025\ \text{m}\).</li>
<li>Time: \(v = u + at \Rightarrow 0 = 14.7 - 9.8t \Rightarrow t = 1.5\ \text{s}\).</li></ol></div>
<p>Choose a positive direction and stick to it. In 2D (vectors), \(\mathbf{v} = \mathbf{u} + \mathbf{a}t\) and \(\mathbf{r} = \mathbf{u}t + \tfrac12\mathbf{a}t^2\) with \(\mathbf{i}\), \(\mathbf{j}\) components.</p>
`,
  quiz: [
    { q: "On a velocity–time graph, area represents…", o: ["Displacement", "Acceleration", "Velocity", "Time"], a: 0, e: R`Area = velocity × time, which is displacement.` },
    { q: R`\(v^2 = \ ?\)`, o: [R`\(u^2 + 2as\)`, R`\(u + at\)`, R`\(ut + \tfrac12 at^2\)`, R`\(2as\)`], a: 0, e: R`This is the suvat equation without \(t\).` },
    { q: "Modelling an object as a particle means…", o: ["Ignoring its size", "Ignoring its mass", "It's very small in mass", "It has no velocity"], a: 0, e: "The mass is treated as acting at a single point, so rotation and air resistance are ignored." },
    { q: R`A ball thrown up at \(14.7\ \text{m s}^{-1}\) takes how long to reach the top (\(g = 9.8\))?`, o: ["1.5 s", "3 s", "14.7 s", "0.67 s"], a: 0, e: R`\(0 = 14.7 - 9.8t\), so \(t = 1.5\).` },
    { q: R`Starting from rest, \(a = 2\ \text{m s}^{-2}\). Distance after 5 s?`, o: ["25 m", "10 m", "50 m", "5 m"], a: 0, e: R`\(s = ut + \tfrac12 at^2 = 0 + \tfrac12(2)(25) = 25\).` },
    { q: "A 'smooth' surface means…", o: ["No friction", "No mass", "No stretch", "Flat"], a: 0, e: "Smooth always means friction is ignored." },
    { q: "The gradient of a displacement–time graph is…", o: ["Velocity", "Acceleration", "Displacement", "Force"], a: 0, e: "Rate of change of displacement is velocity." },
    { q: R`Which suvat equation doesn't involve \(s\)?`, o: [R`\(v = u + at\)`, R`\(v^2 = u^2 + 2as\)`, R`\(s = ut + \tfrac12 at^2\)`, R`\(s = \tfrac12(u + v)t\)`], a: 0, e: R`It only links \(u\), \(v\), \(a\) and \(t\).` },
    { q: "At maximum height, the vertical velocity is…", o: ["0", R`\(g\)`, R`\(u\)`, "Maximum"], a: 0, e: "It's stopped going up and is about to come down." }
  ],
  flashcards: [
    ["Particle", "Size ignored"],
    ["Light / inextensible / smooth", "No mass / no stretch / no friction"],
    ["v–t graph", "Gradient = acceleration, area = displacement"],
    ["suvat set", R`\(v = u + at\); \(s = ut + \frac12 at^2\); \(v^2 = u^2 + 2as\); \(s = \frac12(u + v)t\); \(s = vt - \frac12 at^2\)`],
    ["Vertical motion", R`\(a = -g\) if up is positive`],
    ["Max height", R`\(v = 0\)`]
  ]
});

S2Data.add({
  id: "14b", group: 14, y1: true, title: "Variable acceleration",
  summary: "Using calculus for motion with variable acceleration.",
  notes: R`
<h3>Calculus in kinematics</h3>
<p>\[s \xrightarrow{\ \frac{d}{dt}\ } v \xrightarrow{\ \frac{d}{dt}\ } a \qquad\qquad a \xrightarrow{\ \int dt\ } v \xrightarrow{\ \int dt\ } s\]</p>
<p>So \(v = \dfrac{ds}{dt}\), \(a = \dfrac{dv}{dt} = \dfrac{d^2s}{dt^2}\), \(v = \displaystyle\int a\,dt\), \(s = \displaystyle\int v\,dt\). Use the initial conditions to find each constant of integration.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(s = t^3 - 6t^2 + 9t\).
<ol><li>\(v = \dfrac{ds}{dt} = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)\).</li>
<li>At rest when \(v = 0\): \(t = 1\) and \(t = 3\).</li>
<li>\(a = \dfrac{dv}{dt} = 6t - 12\), so at \(t = 1\), \(a = -6\ \text{m s}^{-2}\).</li></ol></div>
<ul>
<li>Maximum or minimum velocity: set \(\dfrac{dv}{dt} = 0\).</li>
<li>Total distance: if the particle changes direction, split the integral at each time where \(v = 0\) and add the magnitudes.</li>
<li>suvat does <b>not</b> apply when the acceleration varies.</li>
</ul>
<div class="box box-c"><span class="box-title">Year 13</span>In 2D, differentiate or integrate the \(\mathbf{i}\) and \(\mathbf{j}\) components separately, e.g. \(\mathbf{r} = t^2\mathbf{i} + 3t\mathbf{j} \Rightarrow \mathbf{v} = 2t\mathbf{i} + 3\mathbf{j}\).</div>
`,
  quiz: [
    { q: R`\(v = \ ?\)`, o: [R`\(\dfrac{ds}{dt}\)`, R`\(\dfrac{dv}{dt}\)`, R`\(\int s\,dt\)`, R`\(\dfrac{d^2s}{dt^2}\)`], a: 0, e: "Velocity is the rate of change of displacement." },
    { q: R`\(a = \ ?\)`, o: [R`\(\dfrac{dv}{dt}\)`, R`\(\dfrac{ds}{dt}\)`, R`\(\int v\,dt\)`, R`\(\dfrac{v}{t}\) only`], a: 0, e: "Acceleration is the rate of change of velocity." },
    { q: R`\(s = \int \ ?\ dt\)`, o: [R`\(v\)`, R`\(a\)`, R`\(s\)`, R`\(t\)`], a: 0, e: "Integrating velocity gives displacement." },
    { q: R`\(s = t^3 - 6t^2 + 9t\). \(v = \ ?\)`, o: [R`\(3t^2 - 12t + 9\)`, R`\(t^2 - 6t + 9\)`, R`\(6t - 12\)`, R`\(3t^2 - 6t\)`], a: 0, e: "Differentiate each term: multiply by the power, then reduce the power by 1." },
    { q: R`In that example, the particle is at rest when \(t = \ ?\)`, o: ["1 and 3", "0 and 3", "2", "3 only"], a: 0, e: R`\(3(t - 1)(t - 3) = 0\).` },
    { q: "Maximum velocity occurs when…", o: [R`\(a = 0\)`, R`\(v = 0\)`, R`\(s = 0\)`, R`\(t = 0\)`], a: 0, e: R`A stationary point of \(v\) is where \(\frac{dv}{dt} = 0\).` },
    { q: R`\(v = 4t + 3\) and \(s = 0\) at \(t = 0\). \(s = \ ?\)`, o: [R`\(2t^2 + 3t\)`, R`\(4t^2 + 3t\)`, "4", R`\(2t^2 + 3\)`], a: 0, e: R`\(\int (4t + 3)\,dt = 2t^2 + 3t + c\), and \(c = 0\).` },
    { q: "To find the total distance when the direction changes…", o: [R`Split the integral where \(v = 0\)`, R`Integrate once over all \(t\)`, "Use suvat", "Differentiate"], a: 0, e: "Otherwise the forward and backward parts cancel out." },
    { q: R`\(a = 6t - 12\) at \(t = 1\) is…`, o: ["−6", "6", "0", "−12"], a: 0, e: R`\(6(1) - 12 = -6\).` }
  ],
  flashcards: [
    ["Differentiate", R`\(s \to v \to a\)`],
    ["Integrate", R`\(a \to v \to s\) (+ constants)`],
    ["At rest", R`\(v = 0\)`],
    ["Max/min velocity", R`\(a = 0\)`],
    ["Total distance", "Split at direction changes"],
    ["suvat valid?", "Only for constant acceleration"]
  ]
});

S2Data.add({
  id: "14c", group: 14, y2: true, title: "Projectiles",
  summary: "Horizontal and vertical motion of projectiles, time of flight, range and maximum height.",
  notes: R`
<h3>Splitting the motion</h3>
<p>Launched at speed \(U\) and angle \(\theta\) above the horizontal, with no air resistance:</p>
<table><tr><th></th><th>Horizontal (→)</th><th>Vertical (↑)</th></tr>
<tr><td>Initial velocity</td><td>\(U\cos\theta\)</td><td>\(U\sin\theta\)</td></tr>
<tr><td>Acceleration</td><td>0</td><td>\(-g\)</td></tr>
<tr><td>Displacement</td><td>\(x = (U\cos\theta)t\)</td><td>\(y = (U\sin\theta)t - \tfrac12 gt^2\)</td></tr></table>
<p>The two directions share the same time \(t\), which links them.</p>
<h3>Key results (level ground)</h3>
<ul>
<li>Time to maximum height: \(\dfrac{U\sin\theta}{g}\). Maximum height: \(\dfrac{U^2\sin^2\theta}{2g}\).</li>
<li>Time of flight: \(\dfrac{2U\sin\theta}{g}\). Range: \(\dfrac{U^2\sin 2\theta}{g}\), which is greatest at \(\theta = 45^\circ\).</li>
<li>Trajectory: \(y = x\tan\theta - \dfrac{gx^2}{2U^2\cos^2\theta}\), a parabola.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>\(U = 20\ \text{m s}^{-1}\), \(\theta = 30^\circ\), \(g = 9.8\).
<ol><li>Components: horizontal \(20\cos 30^\circ = 17.32\); vertical \(20\sin 30^\circ = 10\).</li>
<li>Lands when \(y = 0\): \(10t - 4.9t^2 = 0 \Rightarrow t = \dfrac{10}{4.9} = 2.04\ \text{s}\).</li>
<li>Range \(= 17.32 \times 2.04 = 35.3\ \text{m}\).</li></ol></div>
<p>Velocity at any time: speed \(= \sqrt{v_x^2 + v_y^2}\), and the angle to the horizontal is \(\tan^{-1}\!\left(\dfrac{v_y}{v_x}\right)\).</p>
`,
  quiz: [
    { q: "The horizontal velocity of a projectile (no air resistance)…", o: ["Is constant", "Increases", "Decreases", "Is zero"], a: 0, e: "No horizontal force acts, so there's no horizontal acceleration." },
    { q: R`The initial vertical velocity for speed \(U\) at angle \(\theta\)?`, o: [R`\(U\sin\theta\)`, R`\(U\cos\theta\)`, R`\(U\tan\theta\)`, R`\(U\)`], a: 0, e: R`The vertical side is opposite \(\theta\), so use sine.` },
    { q: "The range on level ground is greatest at…", o: [R`\(45^\circ\)`, R`\(90^\circ\)`, R`\(30^\circ\)`, R`\(60^\circ\)`], a: 0, e: R`\(\sin 2\theta\) is largest (1) when \(2\theta = 90^\circ\).` },
    { q: "The time of flight on level ground?", o: [R`\(\dfrac{2U\sin\theta}{g}\)`, R`\(\dfrac{U\sin\theta}{g}\)`, R`\(\dfrac{U\cos\theta}{g}\)`, R`\(\dfrac{2U}{g}\)`], a: 0, e: "It's twice the time to the top, by symmetry." },
    { q: "At maximum height, the vertical velocity is…", o: ["0", R`\(U\sin\theta\)`, R`\(g\)`, R`\(U\cos\theta\)`], a: 0, e: "Only the horizontal component remains at the top." },
    { q: R`\(U = 20\), \(\theta = 30^\circ\). Horizontal velocity?`, o: ["17.3 m/s", "10 m/s", "20 m/s", "11.5 m/s"], a: 0, e: R`\(20\cos 30^\circ = 17.32\).` },
    { q: "The path of a projectile is a…", o: ["Parabola", "Circle", "Straight line", "Hyperbola"], a: 0, e: R`\(y\) is a quadratic in \(x\).` },
    { q: "Maximum height formula?", o: [R`\(\dfrac{U^2\sin^2\theta}{2g}\)`, R`\(\dfrac{U^2}{g}\)`, R`\(\dfrac{U\sin\theta}{g}\)`, R`\(\dfrac{U^2\sin 2\theta}{g}\)`], a: 0, e: R`From \(0 = (U\sin\theta)^2 - 2gs\).` },
    { q: "A modelling assumption for projectiles is…", o: ["No air resistance", "No gravity", "Constant speed", "Horizontal motion only"], a: 0, e: "It keeps the horizontal velocity constant." }
  ],
  flashcards: [
    ["Horizontal component", R`\(U\cos\theta\), constant`],
    ["Vertical component", R`\(U\sin\theta\), acceleration \(-g\)`],
    ["Time to top", R`\(\dfrac{U\sin\theta}{g}\)`],
    ["Max height", R`\(\dfrac{U^2\sin^2\theta}{2g}\)`],
    ["Time of flight (level)", R`\(\dfrac{2U\sin\theta}{g}\)`],
    ["Range (level)", R`\(\dfrac{U^2\sin 2\theta}{g}\); max at \(45^\circ\)`]
  ]
});

S2Data.add({
  id: "15a", group: 15, y1: true, title: "Newton's laws and connected particles",
  summary: R`Forces, \(F = ma\), weight, tension, connected particles and pulleys.`,
  notes: R`
<h3>Newton's laws</h3>
<ol>
<li>An object stays at rest or moves at constant velocity unless a resultant force acts on it.</li>
<li>\(F = ma\): resultant force = mass × acceleration.</li>
<li>Every action has an equal and opposite reaction.</li>
</ol>
<p>Weight \(W = mg\). The normal reaction \(R\) acts perpendicular to the surface. In equilibrium the resultant force is zero.</p>
<h3>Connected particles</h3>
<ul>
<li>A light inextensible string has the same tension throughout, and both particles have the same acceleration.</li>
<li>Write \(F = ma\) for each particle separately, or for the whole system (the tension is internal and cancels).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (pulley)</span>Masses of 5 kg and 3 kg hang over a smooth pulley. The 5 kg mass moves down.
<ol><li>5 kg: \(5g - T = 5a\).</li>
<li>3 kg: \(T - 3g = 3a\).</li>
<li>Add: \(2g = 8a \Rightarrow a = 2.45\ \text{m s}^{-2}\).</li>
<li>\(T = 3(g + a) = 3(9.8 + 2.45) = 36.75\ \text{N}\).</li></ol></div>
<p>Lifts: for a person accelerating upwards, \(R - mg = ma\). Towbars: the force in the bar is a tension or a thrust.</p>
`,
  quiz: [
    { q: "Newton's second law?", o: [R`\(F = ma\)`, R`\(F = mv\)`, R`\(F = mg\) only`, R`\(F = \dfrac{m}{a}\)`], a: 0, e: "The resultant force equals mass times acceleration." },
    { q: R`The weight of a 5 kg mass (\(g = 9.8\))?`, o: ["49 N", "5 N", "9.8 N", "0.5 N"], a: 0, e: R`\(W = mg = 5 \times 9.8\).` },
    { q: "In a light inextensible string over a smooth pulley, the tension is…", o: ["The same throughout", "Different on each side", "Zero", "Always equal to the weight"], a: 0, e: "Light and smooth mean nothing changes the tension along the string." },
    { q: R`Masses of 5 kg and 3 kg over a pulley. \(a = \ ?\)`, o: [R`\(2.45\ \text{m s}^{-2}\)`, R`\(9.8\ \text{m s}^{-2}\)`, R`\(4.9\ \text{m s}^{-2}\)`, R`\(1.96\ \text{m s}^{-2}\)`], a: 0, e: R`\(a = \dfrac{(5 - 3)g}{5 + 3} = \dfrac{2g}{8}\).` },
    { q: "The normal reaction acts…", o: ["Perpendicular to the surface", "Parallel to the surface", "Downwards", "Along the string"], a: 0, e: "'Normal' means at right angles." },
    { q: R`A 60 kg person is in a lift accelerating up at \(1\ \text{m s}^{-2}\). \(R = \ ?\)`, o: ["648 N", "588 N", "60 N", "528 N"], a: 0, e: R`\(R - 60g = 60 \times 1 \Rightarrow R = 588 + 60 = 648\).` },
    { q: "Newton's first law: with no resultant force, an object…", o: ["Stays at rest or at constant velocity", "Accelerates", "Stops", "Falls"], a: 0, e: "Forces change motion; without one, the motion doesn't change." },
    { q: R`The resultant force on a 2 kg mass accelerating at \(3\ \text{m s}^{-2}\)?`, o: ["6 N", "1.5 N", "5 N", "0.67 N"], a: 0, e: R`\(F = 2 \times 3\).` },
    { q: "When connected particles are treated as one system, the tension…", o: ["Cancels out (it's an internal force)", "Doubles", "Is added", "Equals the weight"], a: 0, e: "It pulls each particle equally in opposite directions." }
  ],
  flashcards: [
    ["Newton's 1st law", "No resultant force → constant velocity"],
    ["Newton's 2nd law", R`\(F = ma\)`],
    ["Newton's 3rd law", "Equal and opposite reactions"],
    ["Weight", R`\(W = mg\)`],
    ["Light inextensible string", "Same tension, same acceleration"],
    ["Pulley system", R`An equation for each particle; add them to eliminate \(T\)`],
    ["Lift", R`\(R - mg = ma\) (accelerating up)`]
  ]
});

S2Data.add({
  id: "15b", group: 15, y2: true, title: "Friction, resolving and inclined planes",
  summary: R`Resolving forces, friction \(F \le \mu R\), inclined planes and statics.`,
  notes: R`
<h3>Resolving</h3>
<p>A force \(F\) at angle \(\theta\) to the horizontal has components \(F\cos\theta\) (horizontal) and \(F\sin\theta\) (vertical). In equilibrium, resolve in two perpendicular directions; each must sum to zero.</p>
<h3>Friction</h3>
<p>\[F \le \mu R\]</p>
<p>\(F = \mu R\) when the object is moving or on the point of moving (limiting friction). Friction opposes the motion, or the direction it would move in.</p>
<h3>Inclined planes</h3>
<p>For a slope at angle \(\alpha\), resolve parallel and perpendicular to the slope:</p>
<ul><li>Weight down the slope: \(mg\sin\alpha\).</li><li>Weight into the slope: \(mg\cos\alpha\), so \(R = mg\cos\alpha\) if no other force acts perpendicular to the slope.</li></ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A 4 kg block slides down a \(30^\circ\) slope with \(\mu = 0.2\).
<ol><li>Perpendicular: \(R = 4g\cos 30^\circ = 33.9\ \text{N}\).</li>
<li>Friction: \(F = \mu R = 0.2 \times 33.9 = 6.79\ \text{N}\), acting up the slope.</li>
<li>Parallel: \(4g\sin 30^\circ - 6.79 = 4a \Rightarrow 19.6 - 6.79 = 4a \Rightarrow a = 3.20\ \text{m s}^{-2}\).</li></ol></div>
<p>On the point of sliding with no other force: \(mg\sin\alpha = \mu mg\cos\alpha\), so \(\mu = \tan\alpha\).</p>
`,
  quiz: [
    { q: "Friction satisfies…", o: [R`\(F \le \mu R\)`, R`\(F = \mu\)`, R`\(F \ge \mu R\)`, R`\(F = R\)`], a: 0, e: R`\(\mu R\) is the maximum friction available.` },
    { q: "Limiting friction occurs when…", o: ["The object is moving or about to move", "It's at rest with no force", R`\(\mu = 0\)`, R`\(R = 0\)`], a: 0, e: R`Friction has reached its maximum, \(\mu R\).` },
    { q: R`The weight component down a slope at angle \(\alpha\)?`, o: [R`\(mg\sin\alpha\)`, R`\(mg\cos\alpha\)`, R`\(mg\tan\alpha\)`, R`\(mg\)`], a: 0, e: R`A steeper slope (bigger \(\alpha\)) gives a bigger component down it.` },
    { q: "The normal reaction on a slope (no other forces)?", o: [R`\(mg\cos\alpha\)`, R`\(mg\sin\alpha\)`, R`\(mg\)`, R`\(\mu mg\)`], a: 0, e: "It balances the weight component into the slope." },
    { q: R`The horizontal component of a 10 N force at \(60^\circ\) above the horizontal?`, o: ["5 N", "8.66 N", "10 N", "0 N"], a: 0, e: R`\(10\cos 60^\circ = 5\).` },
    { q: R`On the point of sliding with only weight and reaction (and friction), \(\mu = \ ?\)`, o: [R`\(\tan\alpha\)`, R`\(\sin\alpha\)`, R`\(\cos\alpha\)`, "1"], a: 0, e: R`\(\mu = \dfrac{mg\sin\alpha}{mg\cos\alpha}\).` },
    { q: R`4 kg block, \(30^\circ\) slope, \(\mu = 0.2\). \(a \approx\ ?\)`, o: [R`\(3.20\ \text{m s}^{-2}\)`, R`\(4.9\ \text{m s}^{-2}\)`, R`\(1.96\ \text{m s}^{-2}\)`, R`\(6.79\ \text{m s}^{-2}\)`], a: 0, e: R`\(\dfrac{19.6 - 6.79}{4} = 3.20\).` },
    { q: "In equilibrium, the resultant force is…", o: ["Zero", R`\(mg\)`, R`\(\mu R\)`, "Maximum"], a: 0, e: "Balanced forces mean no acceleration." },
    { q: "Friction acts…", o: ["Opposite to the motion or tendency to move", "In the direction of motion", "Perpendicular to the surface", "Vertically"], a: 0, e: "It always resists sliding." }
  ],
  flashcards: [
    [R`Components of \(F\) at \(\theta\)`, R`\(F\cos\theta\), \(F\sin\theta\)`],
    ["Friction", R`\(F \le \mu R\); \(= \mu R\) when limiting`],
    ["Down the slope", R`\(mg\sin\alpha\)`],
    ["Perpendicular to slope", R`\(mg\cos\alpha\)`],
    ["About to slide", R`\(\mu = \tan\alpha\) (no other forces)`],
    ["Equilibrium", "Resolve two ways; each sums to zero"]
  ]
});

S2Data.add({
  id: "15c", group: 15, y2: true, title: "Moments",
  summary: "Moments, equilibrium of rigid bodies, beams and ladders.",
  notes: R`
<h3>Moments</h3>
<p>\[\text{Moment} = \text{force} \times \text{perpendicular distance from the pivot}\]</p>
<p>Units: N m. State whether each moment is clockwise or anticlockwise.</p>
<h3>Equilibrium of a rigid body</h3>
<ol>
<li>The resultant force is zero (resolve).</li>
<li>The total moment about <b>any</b> point is zero (clockwise = anticlockwise).</li>
</ol>
<p>The weight of a uniform rod acts at its centre. Take moments about a point where an unknown force acts, to eliminate it.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A uniform 4 m beam of weight 200 N rests on supports at its ends A and B. A 300 N load is 1 m from A.
<ol><li>Moments about A: \(R_B \times 4 = 200 \times 2 + 300 \times 1 = 700\), so \(R_B = 175\ \text{N}\).</li>
<li>Resolve vertically: \(R_A + R_B = 500\), so \(R_A = 325\ \text{N}\).</li></ol></div>
<p>On the point of tilting about one support, the reaction at the other support is zero. Ladders: friction acts at the ground; a smooth wall gives a horizontal reaction. Take moments about the base.</p>
`,
  quiz: [
    { q: "Moment = …", o: ["Force × perpendicular distance", "Force × mass", "Mass × distance", "Force ÷ distance"], a: 0, e: "The distance must be measured at right angles to the line of the force." },
    { q: "The units of a moment?", o: ["N m", "N", "m/s", "kg m"], a: 0, e: "Newtons × metres." },
    { q: "Where does the weight of a uniform rod act?", o: ["At its centre", "At the ends", "At the pivot", "Nowhere"], a: 0, e: "Uniform means the mass is spread evenly." },
    { q: R`In the beam example, \(R_B = \ ?\)`, o: ["175 N", "325 N", "250 N", "500 N"], a: 0, e: R`\(4R_B = 400 + 300\).` },
    { q: "On the point of tilting about one support, the other reaction is…", o: ["Zero", "Maximum", "Equal to the weight", "Negative"], a: 0, e: "The beam is just lifting off that support." },
    { q: "Why take moments about the point where an unknown force acts?", o: ["It eliminates that force", "It's required", "To find the mass", "It doubles the moment"], a: 0, e: "Its distance from that point is zero, so its moment is zero." },
    { q: "A 10 N force 3 m from the pivot has a moment of…", o: ["30 N m", "3.3 N m", "13 N m", "0.3 N m"], a: 0, e: R`\(10 \times 3\).` },
    { q: "Equilibrium of a rigid body requires…", o: ["Zero resultant force and zero total moment", "Zero moment only", "Zero force only", "Equal reactions"], a: 0, e: "Otherwise it would accelerate or rotate." },
    { q: "A ladder against a smooth wall gets a wall reaction that is…", o: ["Horizontal", "Vertical", "Along the ladder", "Zero"], a: 0, e: "Smooth means no friction, so only the perpendicular (normal) force acts." }
  ],
  flashcards: [
    ["Moment", "Force × perpendicular distance"],
    ["Equilibrium", R`\(\sum F = 0\) and \(\sum \text{moments} = 0\)`],
    ["Uniform rod", "Weight at the centre"],
    ["Eliminating unknowns", "Take moments about where they act"],
    ["About to tilt", "Other reaction = 0"],
    ["Smooth wall", "Reaction perpendicular to the wall"]
  ]
});

S2Data.detail("11a", { mistakes: ["Calling quota sampling random. It isn't: the interviewer chooses."], tips: ["Learn one advantage and one disadvantage of each method."], fact: "The UK census happens every 10 years; the 2021 census was the first mainly online." });
S2Data.detail("11b", { mistakes: [R`Coding the standard deviation wrongly: \(\sigma_y = \frac{\sigma_x}{b}\). Divide by \(b\), but don't subtract \(a\).`], tips: ["Interpret regression coefficients in context, with units."], fact: "Francis Galton coined 'regression' studying how children's heights regress towards the mean." });
S2Data.detail("12a", { mistakes: ["Assuming events are independent without justification."], tips: ["For conditional probability, restrict to the given event's region and divide."], fact: "The birthday problem: in a group of 23, the chance two share a birthday is just over 50%." });
S2Data.detail("12b", { mistakes: [R`Using \(P(X \le 4)\) for \(P(X < 4)\). For discrete \(X\), \(P(X < 4) = P(X \le 3)\).`], tips: ["Write out the inequality carefully before using cumulative tables."], fact: "Jacob Bernoulli developed the binomial distribution in 'Ars Conjectandi', published in 1713." });
S2Data.detail("12c", { mistakes: [R`Using the variance instead of the standard deviation in \(Z\): \(N(50, 25)\) has \(\sigma = 5\).`], tips: ["Sketch the normal curve and shade the region for every question."], fact: "Heights, measurement errors and exam marks are often approximately normal." });
S2Data.detail("13a", { mistakes: [R`Writing hypotheses in terms of \(x\) or the sample proportion instead of \(p\).`], tips: ["Always finish with a conclusion in context, using non-certain language."], fact: "Ronald Fisher popularised 5% as a significance level in the 1920s." });
S2Data.detail("13b", { mistakes: [R`Forgetting to divide \(\sigma\) by \(\sqrt n\) for the sample mean.`], tips: ["Check the tables for the right tail and the right sample size."], fact: "Karl Pearson developed the product moment correlation coefficient in the 1890s." });
S2Data.detail("14a", { mistakes: [R`Mixing signs: if up is positive, \(a = -9.8\).`], tips: [R`List \(s, u, v, a, t\) before choosing an equation.`], fact: "Galileo showed objects of different mass fall at the same rate (ignoring air resistance)." });
S2Data.detail("14b", { mistakes: ["Using suvat when acceleration varies with time."], tips: ["Use initial conditions to find each constant of integration."], fact: "Jerk is the rate of change of acceleration; engineers minimise it for comfortable lifts and trains." });
S2Data.detail("14c", { mistakes: [R`Using the full speed \(U\) in the vertical equations instead of \(U\sin\theta\).`], tips: ["Time links the horizontal and vertical motions: find it from one, use it in the other."], fact: "Air resistance means real long jumps and cannonballs travel less far than the model predicts." });
S2Data.detail("15a", { mistakes: ["Using the total mass with only one tension when writing separate equations."], tips: ["Draw a force diagram for each particle."], fact: "Newton published his three laws in the Principia in 1687." });
S2Data.detail("15b", { mistakes: [R`Taking \(R = mg\) on a slope. On a slope, \(R = mg\cos\alpha\) (plus any other perpendicular components).`], tips: ["Resolve parallel and perpendicular to the slope, not horizontally and vertically."], fact: "Rubber on dry tarmac has a coefficient of friction around 0.7–0.9." });
S2Data.detail("15c", { mistakes: ["Using the distance along a slanted rod instead of the perpendicular distance."], tips: ["Choose the pivot point that eliminates the most unknowns."], fact: "Archimedes said: 'Give me a place to stand and I will move the Earth' — with a long enough lever." });
