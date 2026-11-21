/* Maths² — Probability and Statistics */

S2Data.add({
  id: "5a", group: 5, title: "Probability basics",
  summary: "The probability scale, theoretical and experimental probability, and expected outcomes.",
  notes: R`
<h3>The probability scale</h3>
<p>Probabilities go from 0 (impossible) to 1 (certain). Write them as fractions, decimals or percentages, never as ratios.</p>
<p>\[P(\text{event}) = \frac{\text{number of favourable outcomes}}{\text{total number of equally likely outcomes}}\]</p>
<p>E.g. a bag with 3 red and 5 blue: \(P(\text{red}) = \frac{3}{8}\).</p>
<p>\(P(\text{not } A) = 1 - P(A)\). The probabilities of all possible outcomes add to 1.</p>
<h3>Relative frequency</h3>
<ul>
<li>Experimental probability \(= \dfrac{\text{frequency}}{\text{number of trials}}\). A coin landing heads 34 times in 50 gives \(\frac{34}{50} = 0.68\).</li>
<li>More trials give a more reliable estimate.</li>
<li>A dice is probably biased if, after many trials, its relative frequencies are very different from the theoretical ones.</li>
</ul>
<h3>Expected outcomes</h3>
<p>Expected number \(=\) probability \(\times\) number of trials. \(P(6) = \frac16\), rolled 300 times: expect \(\frac16 \times 300 = 50\) sixes.</p>
<h3>Sample spaces</h3>
<p>List all outcomes systematically, or use a sample space diagram. Two dice give \(6 \times 6 = 36\) outcomes; only one (6, 6) totals 12, so \(P(12) = \frac{1}{36}\).</p>
`,
  quiz: [
    { q: "P(rolling a 4 on a fair dice)?", o: [R`\(\frac16\)`, R`\(\frac14\)`, R`\(\frac46\)`, R`\(\frac12\)`], a: 0, e: "One favourable outcome out of six equally likely." },
    { q: "P(rain) = 0.3. P(not rain)?", o: ["0.7", "0.3", "1.3", "0"], a: 0, e: R`\(1 - 0.3\).` },
    { q: "A bag has 3 red and 5 blue. P(red)?", o: [R`\(\frac38\)`, R`\(\frac35\)`, R`\(\frac58\)`, R`\(\frac13\)`], a: 0, e: "3 red out of 8 counters in total." },
    { q: R`\(P(6) = \frac16\), rolled 300 times. Expected number of sixes?`, o: ["50", "6", "300", "60"], a: 0, e: R`\(\frac16 \times 300 = 50\).` },
    { q: "An event that's certain has probability…", o: ["1", "0", "0.5", "100"], a: 0, e: "The top of the probability scale." },
    { q: "A coin lands heads 34 times in 50 flips. Relative frequency?", o: ["0.68", "0.5", "0.34", "34"], a: 0, e: R`\(\frac{34}{50} = 0.68\).` },
    { q: "How many outcomes from rolling two dice?", o: ["36", "12", "6", "11"], a: 0, e: R`\(6 \times 6\).` },
    { q: "P(total of 12 with two dice)?", o: [R`\(\frac{1}{36}\)`, R`\(\frac{1}{12}\)`, R`\(\frac16\)`, R`\(\frac{2}{36}\)`], a: 0, e: "Only (6, 6) works." },
    { q: "To improve an estimate of probability you should…", o: ["Do more trials", "Do fewer trials", "Change the dice", "Guess"], a: 0, e: "Relative frequency settles down as the number of trials grows." }
  ],
  flashcards: [
    ["Probability scale", "0 (impossible) to 1 (certain)"],
    ["P(event)", "Favourable ÷ total outcomes"],
    ["P(not A)", R`\(1 - P(A)\)`],
    ["Relative frequency", "Frequency ÷ trials"],
    ["Expected number", "Probability × trials"],
    ["Two dice", "36 equally likely outcomes"],
    ["Biased", "Outcomes not equally likely"]
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Combined events, tree and Venn diagrams",
  summary: "AND and OR rules, tree diagrams, Venn diagrams, set notation and conditional probability.",
  notes: R`
<h3>AND and OR</h3>
<ul>
<li><b>Independent</b> events: \(P(A \text{ and } B) = P(A) \times P(B)\). E.g. a head and a 6: \(\frac12 \times \frac16 = \frac{1}{12}\).</li>
<li><b>Mutually exclusive</b> events (can't both happen): \(P(A \text{ or } B) = P(A) + P(B)\).</li>
</ul>
<h3>Tree diagrams</h3>
<p>Multiply along the branches; add the end results when more than one path gives what you want. Each pair of branches from one point adds to 1.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A bag has 3 red and 2 blue. Pick two <b>without replacement</b>. Find P(both red).
<ol><li>First pick: \(P(R) = \frac35\).</li>
<li>Second pick: one red has gone, and one counter in total, so \(P(R) = \frac24\).</li>
<li>Multiply: \(\frac35 \times \frac24 = \frac{6}{20} = \frac{3}{10}\).</li></ol></div>
<h3>Venn diagrams and set notation</h3>
<table><tr><th>Notation</th><th>Meaning</th></tr>
<tr><td>\(A \cap B\)</td><td>In \(A\) <b>and</b> \(B\)</td></tr>
<tr><td>\(A \cup B\)</td><td>In \(A\) <b>or</b> \(B\) (or both)</td></tr>
<tr><td>\(A'\)</td><td>Not in \(A\)</td></tr>
<tr><td>\(\xi\)</td><td>The universal set (everything)</td></tr></table>
<p>Fill in the overlap first, then the rest of each circle, then the outside.</p>
<div class="box box-c"><span class="box-title">Higher: conditional probability</span>
<p>\[P(A \mid B) = \frac{P(A \cap B)}{P(B)}\]</p>
In a Venn diagram, divide the overlap by the whole of circle \(B\). E.g. \(P(A \cap B) = 0.2\), \(P(B) = 0.5\): \(P(A \mid B) = \frac{0.2}{0.5} = 0.4\).<br>In two-way tables, restrict to the given row or column.</div>
`,
  quiz: [
    { q: "P(head) × P(6) for a coin and dice?", o: [R`\(\frac{1}{12}\)`, R`\(\frac23\)`, R`\(\frac18\)`, R`\(\frac{7}{12}\)`], a: 0, e: R`\(\frac12 \times \frac16\).` },
    { q: "Mutually exclusive events…", o: ["Can't happen at the same time", "Are independent", "Always happen together", "Have probability 1"], a: 0, e: "E.g. rolling a 2 and rolling a 5 on one throw." },
    { q: "3 red, 2 blue. Pick two without replacement. P(both red)?", o: [R`\(\frac{3}{10}\)`, R`\(\frac{9}{25}\)`, R`\(\frac{6}{25}\)`, R`\(\frac12\)`], a: 0, e: R`\(\frac35 \times \frac24\). \(\frac{9}{25}\) would be with replacement.` },
    { q: "On a tree diagram you ___ along branches.", o: ["Multiply", "Add", "Subtract", "Divide"], a: 0, e: "Along a path both events happen (AND), so multiply." },
    { q: R`\(A \cap B\) means…`, o: [R`\(A\) and \(B\)`, R`\(A\) or \(B\)`, R`Not \(A\)`, "Neither"], a: 0, e: "The intersection: the overlap of the circles." },
    { q: R`\(A \cup B\) means…`, o: [R`\(A\) or \(B\) (or both)`, R`\(A\) and \(B\) only`, R`Not \(B\)`, R`Neither \(A\) nor \(B\)`], a: 0, e: "The union: everything in either circle." },
    { q: "Each pair of branches from one point adds to…", o: ["1", "0.5", "2", "The total"], a: 0, e: "One of the outcomes must happen." },
    { q: R`Higher: \(P(A \cap B) = 0.2\), \(P(B) = 0.5\). \(P(A \mid B)\)?`, o: ["0.4", "0.1", "0.7", "0.25"], a: 0, e: R`\(\frac{0.2}{0.5} = 0.4\).` },
    { q: "P(A) = 0.3 and P(B) = 0.4, mutually exclusive. P(A or B)?", o: ["0.7", "0.12", "0.1", "1"], a: 0, e: R`Add: \(0.3 + 0.4\).` }
  ],
  flashcards: [
    ["Independent: P(A and B)", R`\(P(A) \times P(B)\)`],
    ["Mutually exclusive: P(A or B)", R`\(P(A) + P(B)\)`],
    ["Tree diagrams", "Multiply along; add between outcomes"],
    ["Without replacement", "Second-pick probabilities change"],
    [R`\(A \cap B\) / \(A \cup B\) / \(A'\)`, "And / or / not"],
    [R`\(\xi\)`, "Universal set"],
    ["Conditional (Higher)", R`\(P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}\)`]
  ]
});

S2Data.add({
  id: "6a", group: 6, title: "Averages, charts and sampling",
  summary: "Mean, median, mode and range, grouped data, charts, and sampling methods.",
  notes: R`
<h3>Averages and spread</h3>
<table><tr><th>Measure</th><th>How</th></tr>
<tr><td>Mean</td><td>total ÷ number of values</td></tr>
<tr><td>Median</td><td>middle value when ordered; position \(\frac{n + 1}{2}\)</td></tr>
<tr><td>Mode</td><td>most common value</td></tr>
<tr><td>Range</td><td>largest − smallest</td></tr></table>
<p>The mean is affected by outliers; the median isn't.</p>
<h3>Frequency tables</h3>
<p>\[\text{mean} = \frac{\sum fx}{\sum f}\]</p>
<p>For grouped data, use the class midpoints as \(x\): the result is an <b>estimate</b>. The modal class has the highest frequency.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Goals scored 0, 1, 2 with frequencies 4, 5, 3.
<ol><li>\(\sum fx = 0 \times 4 + 1 \times 5 + 2 \times 3 = 11\).</li>
<li>\(\sum f = 4 + 5 + 3 = 12\) (the number of matches, not the number of rows).</li>
<li>Mean \(= \frac{11}{12} = 0.92\) (2 d.p.).</li></ol></div>
<h3>Charts</h3>
<ul>
<li>Pie chart angle \(= \dfrac{\text{frequency}}{\text{total}} \times 360^\circ\). 15 out of 60: \(\frac{15}{60} \times 360 = 90^\circ\).</li>
<li>Bar charts, pictograms, line graphs, stem-and-leaf diagrams (which need a key) and frequency polygons (plotted at midpoints).</li>
<li>Time series: look for trends and seasonal patterns.</li>
</ul>
<h3>Sampling</h3>
<p>A sample should be <b>random</b> and large enough to be representative. Bias arises when some groups are more likely to be chosen than others.</p>
<div class="box box-c"><span class="box-title">Higher: stratified sampling and capture–recapture</span>
<ul><li>Stratified: each group is sampled in proportion to its size: \(\dfrac{\text{group size}}{\text{population}} \times \text{sample size}\). E.g. 300 of 1000 in Year 7, sample 50: \(\frac{300}{1000} \times 50 = 15\).</li>
<li>Capture–recapture: \(N \approx \dfrac{n_1 \times n_2}{m}\), where \(n_1\) are marked first, \(n_2\) are caught second, and \(m\) of those are marked. E.g. \(\frac{40 \times 50}{8} = 250\).</li></ul></div>
`,
  quiz: [
    { q: "Median of 3, 7, 1, 9, 5?", o: ["5", "7", "3", "25"], a: 0, e: "Order first: 1, 3, 5, 7, 9. The middle value is 5." },
    { q: "Mean of 2, 4, 6, 8?", o: ["5", "4", "6", "20"], a: 0, e: R`\(20 \div 4 = 5\).` },
    { q: "Range of 12, 5, 19, 8?", o: ["14", "19", "7", "11"], a: 0, e: R`\(19 - 5 = 14\).` },
    { q: "Which average is NOT affected by outliers?", o: ["Median", "Mean", "Range", "Total"], a: 0, e: "An extreme value changes the total (and so the mean), but not the middle position." },
    { q: "Pie chart: 15 out of 60 people. Angle?", o: [R`\(90^\circ\)`, R`\(15^\circ\)`, R`\(60^\circ\)`, R`\(45^\circ\)`], a: 0, e: R`\(\frac{15}{60} = \frac14\) of \(360^\circ\).` },
    { q: "Estimating the mean of grouped data uses…", o: ["Midpoints", "Lower bounds", "Upper bounds", "The mode"], a: 0, e: "You don't know the exact values, so assume each is at the middle of its class." },
    { q: "A stem-and-leaf diagram needs…", o: ["A key", "A pie chart", "Midpoints", "A tree diagram"], a: 0, e: R`E.g. "\(3 | 4\) means 34".` },
    { q: "Higher: school of 1000, 300 in Year 7. Stratified sample of 50: how many from Year 7?", o: ["15", "30", "50", "3"], a: 0, e: R`\(\frac{300}{1000} \times 50 = 15\).` },
    { q: "Higher: mark 40 fish; later catch 50, of which 8 are marked. Estimate the population?", o: ["250", "90", "400", "320"], a: 0, e: R`\(\frac{40 \times 50}{8} = 250\).` }
  ],
  flashcards: [
    ["Mean", "Total ÷ number of values"],
    ["Median", R`Middle value; position \(\frac{n + 1}{2}\)`],
    ["Mode", "Most common"],
    ["Range", "Largest − smallest"],
    ["Mean from a frequency table", R`\(\dfrac{\sum fx}{\sum f}\)`],
    ["Grouped data mean", "Estimate using midpoints"],
    ["Pie chart angle", R`\(\frac{\text{frequency}}{\text{total}} \times 360^\circ\)`],
    ["Stratified sampling (Higher)", "Group ÷ population × sample size"],
    ["Capture–recapture (Higher)", R`\(N \approx \dfrac{n_1 \times n_2}{m}\)`]
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Scatter graphs, cumulative frequency and histograms",
  summary: "Correlation and lines of best fit, cumulative frequency, box plots and histograms.",
  notes: R`
<h3>Scatter graphs</h3>
<ul>
<li>Positive, negative or no correlation. Correlation doesn't prove that one variable causes the other.</li>
<li>Draw a line of best fit through the middle of the points to estimate values. <b>Interpolation</b> (within the data) is reliable; <b>extrapolation</b> (outside it) isn't.</li>
<li>An outlier is a point that doesn't fit the pattern.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: cumulative frequency and box plots</span>Plot running totals at the <b>upper class boundary</b> and join them with a smooth curve.
<table><tr><th>Read off at</th><th>Gives</th></tr>
<tr><td>\(\frac n4\)</td><td>Lower quartile (LQ)</td></tr>
<tr><td>\(\frac n2\)</td><td>Median</td></tr>
<tr><td>\(\frac{3n}{4}\)</td><td>Upper quartile (UQ)</td></tr></table>
Interquartile range \(= \text{UQ} - \text{LQ}\). With \(n = 80\), the LQ is read at 20.<br>A box plot shows the minimum, LQ, median, UQ and maximum. Compare distributions using the median (average) and IQR (spread).</div>
<div class="box box-c"><span class="box-title">Higher: histograms</span>Used for unequal class widths.
<p>\[\text{frequency density} = \frac{\text{frequency}}{\text{class width}}\]</p>
The <b>area</b> of each bar is the frequency. E.g. class \(10 < x \le 30\) with frequency 40: width 20, so frequency density \(= \frac{40}{20} = 2\).</div>
`,
  quiz: [
    { q: "As one variable increases the other decreases. This is…", o: ["Negative correlation", "Positive correlation", "No correlation", "Causation"], a: 0, e: "The points slope downwards from left to right." },
    { q: "Using a line of best fit outside the data range is…", o: ["Extrapolation (unreliable)", "Interpolation", "Always accurate", "Correlation"], a: 0, e: "The pattern may not continue beyond the data." },
    { q: "Correlation shows…", o: ["A relationship, not necessarily cause", "That one causes the other", "No relationship", "A perfect line"], a: 0, e: "A third factor could be behind both." },
    { q: "Higher: cumulative frequency is plotted at…", o: ["Upper class boundaries", "Midpoints", "Lower boundaries", "Class widths"], a: 0, e: "By the end of each class, all its values have been counted." },
    { q: "Higher: interquartile range = …", o: ["UQ − LQ", "Max − min", "Median − LQ", "UQ + LQ"], a: 0, e: "The spread of the middle 50%." },
    { q: "Higher: frequency density = …", o: ["Frequency ÷ class width", "Class width ÷ frequency", "Frequency × class width", "Frequency ÷ total"], a: 0, e: "So that area (density × width) gives frequency." },
    { q: "Higher: in a histogram, frequency is shown by…", o: ["The area of the bar", "The height of the bar", "The width only", "The midpoint"], a: 0, e: "Height is frequency density, not frequency." },
    { q: R`Higher: class \(10 < x \le 30\) has frequency 40. Frequency density?`, o: ["2", "4", "0.5", "1.33"], a: 0, e: R`Width 20: \(40 \div 20\).` },
    { q: R`Higher: \(n = 80\). The lower quartile is read at cumulative frequency…`, o: ["20", "40", "60", "10"], a: 0, e: R`\(\frac{80}{4} = 20\).` }
  ],
  flashcards: [
    ["Positive correlation", "Both increase together"],
    ["Negative correlation", "One increases, the other decreases"],
    ["Interpolation vs extrapolation", "Inside data (reliable) vs outside (unreliable)"],
    ["Cumulative frequency (Higher)", "Plot at upper class boundaries"],
    ["Quartiles (Higher)", R`\(\frac n4\), \(\frac n2\), \(\frac{3n}{4}\)`],
    ["IQR (Higher)", "UQ − LQ"],
    ["Box plot (Higher)", "Min, LQ, median, UQ, max"],
    ["Frequency density (Higher)", "Frequency ÷ class width"],
    ["Histogram (Higher)", "Area = frequency"]
  ]
});

S2Data.detail("5a", { mistakes: [R`Giving a probability greater than 1, or as a ratio like \(3 : 8\). Use a fraction (\(\frac38\)), decimal or percentage.`], tips: ["Check all probabilities in a table add to 1: missing values are often found this way."], fact: "Pascal and Fermat founded probability theory in 1654 by writing letters about a gambling problem." });
S2Data.detail("5b", { mistakes: ["Adding probabilities along tree branches. Multiply along, add between."], tips: ["For 'without replacement', reduce both the top and bottom of the second fraction."], fact: "The Monty Hall problem fooled many mathematicians: switching doors doubles your chance of winning." });
S2Data.detail("6a", { mistakes: [R`Dividing \(\sum fx\) by the number of groups instead of the total frequency \(\sum f\).`], tips: ["When comparing two data sets, compare an average and a measure of spread, in context."], fact: "Florence Nightingale invented a type of pie chart to persuade the government to improve army hospitals." });
S2Data.detail("6b", { mistakes: ["Drawing histogram bar heights as frequency. Use frequency density."], tips: ["For box plot comparisons, write one sentence about the medians and one about the IQRs."], fact: "Anscombe's quartet is four data sets with identical statistics but completely different graphs." });
