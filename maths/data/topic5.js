/* Maths² — Probability and Statistics */

S2Data.add({
  id: "5a", group: 5, title: "Probability basics",
  summary: "The probability scale, theoretical and experimental probability, and expected outcomes.",
  notes: `
<h3>The probability scale</h3>
<p>Probabilities go from 0 (impossible) to 1 (certain). Write them as fractions, decimals or percentages.</p>
<p>P(event) = number of favourable outcomes ÷ total number of equally likely outcomes.</p>
<p>P(not A) = 1 − P(A). The probabilities of all possible outcomes add to 1.</p>
<h3>Relative frequency</h3>
<ul>
<li>Experimental probability = frequency ÷ number of trials.</li>
<li>More trials give a more reliable estimate.</li>
<li>A dice is probably biased if its relative frequencies are very different from the theoretical ones after many trials.</li>
</ul>
<h3>Expected outcomes</h3>
<p>Expected number = probability × number of trials. P(6) = 1/6, rolled 300 times → expect 50 sixes.</p>
<h3>Sample spaces</h3>
<p>List all outcomes systematically, or use a sample space diagram (e.g. two dice give 36 outcomes).</p>
`,
  quiz: [
    { q: "P(rolling a 4 on a fair dice)?", o: ["1/6", "1/4", "4/6", "1/2"], a: 0, e: "" },
    { q: "P(rain) = 0.3. P(not rain)?", o: ["0.7", "0.3", "1.3", "0"], a: 0, e: "" },
    { q: "A bag has 3 red and 5 blue. P(red)?", o: ["3/8", "3/5", "5/8", "1/3"], a: 0, e: "" },
    { q: "P(6) = 1/6, rolled 300 times. Expected number of sixes?", o: ["50", "6", "300", "60"], a: 0, e: "" },
    { q: "An event that's certain has probability…", o: ["1", "0", "0.5", "100"], a: 0, e: "" },
    { q: "A coin lands heads 34 times in 50 flips. Relative frequency?", o: ["0.68", "0.5", "0.34", "34"], a: 0, e: "" },
    { q: "How many outcomes from rolling two dice?", o: ["36", "12", "6", "11"], a: 0, e: "" },
    { q: "P(total of 12 with two dice)?", o: ["1/36", "1/12", "1/6", "2/36"], a: 0, e: "" },
    { q: "To improve an estimate of probability you should…", o: ["Do more trials", "Do fewer trials", "Change the dice", "Guess"], a: 0, e: "" }
  ],
  flashcards: [
    ["Probability scale", "0 (impossible) to 1 (certain)"],
    ["P(event)", "Favourable ÷ total outcomes"],
    ["P(not A)", "1 − P(A)"],
    ["Relative frequency", "Frequency ÷ trials"],
    ["Expected number", "Probability × trials"],
    ["Two dice", "36 equally likely outcomes"],
    ["Biased", "Outcomes not equally likely"]
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Combined events, tree and Venn diagrams",
  summary: "AND and OR rules, tree diagrams, Venn diagrams, set notation and conditional probability.",
  notes: `
<h3>AND and OR</h3>
<ul>
<li><b>Independent</b> events: P(A and B) = P(A) × P(B).</li>
<li><b>Mutually exclusive</b> events (can't both happen): P(A or B) = P(A) + P(B).</li>
</ul>
<h3>Tree diagrams</h3>
<p>Multiply along the branches; add the end results for "either" outcomes. Each pair of branches adds to 1.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Bag: 3 red, 2 blue. Pick two <b>without replacement</b>. P(both red) = 3/5 × 2/4 = <b>6/20 = 3/10</b>.</div>
<h3>Venn diagrams and set notation</h3>
<ul>
<li>A ∩ B: in A <b>and</b> B. A ∪ B: in A <b>or</b> B (or both). A′: not in A. ξ: the universal set.</li>
<li>Fill the overlap first, then the rest of each circle, then outside.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: conditional probability</span>P(A given B) = P(A ∩ B) ÷ P(B). In a Venn diagram, divide the overlap by the whole of circle B. Without replacement, probabilities on the second branches change.<br>Two-way tables can also be used: restrict to the given row or column.</div>
`,
  quiz: [
    { q: "P(head) × P(6) for a coin and dice?", o: ["1/12", "2/3", "1/8", "7/12"], a: 0, e: "" },
    { q: "Mutually exclusive events…", o: ["Can't happen at the same time", "Are independent", "Always happen together", "Have probability 1"], a: 0, e: "" },
    { q: "3 red, 2 blue. Pick two without replacement. P(both red)?", o: ["3/10", "9/25", "6/25", "1/2"], a: 0, e: "" },
    { q: "On a tree diagram you ___ along branches.", o: ["Multiply", "Add", "Subtract", "Divide"], a: 0, e: "" },
    { q: "A ∩ B means…", o: ["A and B", "A or B", "Not A", "Neither"], a: 0, e: "" },
    { q: "A ∪ B means…", o: ["A or B (or both)", "A and B only", "Not B", "Neither A nor B"], a: 0, e: "" },
    { q: "Each pair of branches from one point adds to…", o: ["1", "0.5", "2", "The total"], a: 0, e: "" },
    { q: "Higher: P(A ∩ B) = 0.2, P(B) = 0.5. P(A | B)?", o: ["0.4", "0.1", "0.7", "0.25"], a: 0, e: "" },
    { q: "P(A) = 0.3 and P(B) = 0.4, mutually exclusive. P(A or B)?", o: ["0.7", "0.12", "0.1", "1"], a: 0, e: "" }
  ],
  flashcards: [
    ["Independent: P(A and B)", "P(A) × P(B)"],
    ["Mutually exclusive: P(A or B)", "P(A) + P(B)"],
    ["Tree diagrams", "Multiply along; add between outcomes"],
    ["Without replacement", "Second-pick probabilities change"],
    ["A ∩ B / A ∪ B / A′", "And / or / not"],
    ["ξ", "Universal set"],
    ["Conditional (Higher)", "P(A | B) = P(A ∩ B) ÷ P(B)"]
  ]
});

S2Data.add({
  id: "6a", group: 6, title: "Averages, charts and sampling",
  summary: "Mean, median, mode and range, grouped data, charts, and sampling methods.",
  notes: `
<h3>Averages and spread</h3>
<ul>
<li><b>Mean</b>: total ÷ number of values. <b>Median</b>: middle value when ordered. <b>Mode</b>: most common. <b>Range</b>: largest − smallest.</li>
<li>Median position for n values: (n + 1) ÷ 2.</li>
<li>The mean is affected by outliers; the median isn't.</li>
</ul>
<h3>Frequency tables</h3>
<p>Mean = Σfx ÷ Σf. For grouped data, use midpoints to <b>estimate</b> the mean. The modal class has the highest frequency.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Goals 0, 1, 2 with frequencies 4, 5, 3: Σfx = 0 + 5 + 6 = 11, Σf = 12, mean = <b>0.92</b>.</div>
<h3>Charts</h3>
<ul>
<li>Pie chart: angle = (frequency ÷ total) × 360°.</li>
<li>Bar charts, pictograms, line graphs, stem-and-leaf (needs a key), frequency polygons (plot at midpoints).</li>
<li>Time series: look for trends and seasonal patterns.</li>
</ul>
<h3>Sampling</h3>
<p>A sample should be <b>random</b> and large enough to be representative. Bias arises when some groups are more likely to be chosen.</p>
<div class="box box-c"><span class="box-title">Higher: stratified sampling and capture–recapture</span>Stratified: each group sampled in proportion to its size (group size ÷ population × sample size).<br>Capture–recapture: N ≈ (first catch × second catch) ÷ number marked in second catch.</div>
`,
  quiz: [
    { q: "Median of 3, 7, 1, 9, 5?", o: ["5", "7", "3", "25"], a: 0, e: "" },
    { q: "Mean of 2, 4, 6, 8?", o: ["5", "4", "6", "20"], a: 0, e: "" },
    { q: "Range of 12, 5, 19, 8?", o: ["14", "19", "7", "11"], a: 0, e: "" },
    { q: "Which average is NOT affected by outliers?", o: ["Median", "Mean", "Range", "Total"], a: 0, e: "" },
    { q: "Pie chart: 15 out of 60 people. Angle?", o: ["90°", "15°", "60°", "45°"], a: 0, e: "" },
    { q: "Estimating the mean of grouped data uses…", o: ["Midpoints", "Lower bounds", "Upper bounds", "The mode"], a: 0, e: "" },
    { q: "A stem-and-leaf diagram needs…", o: ["A key", "A pie chart", "Midpoints", "A tree diagram"], a: 0, e: "" },
    { q: "Higher: school of 1000, 300 in Year 7. Stratified sample of 50: how many from Year 7?", o: ["15", "30", "50", "3"], a: 0, e: "" },
    { q: "Higher: mark 40 fish; later catch 50, 8 marked. Estimate population?", o: ["250", "90", "400", "320"], a: 0, e: "" }
  ],
  flashcards: [
    ["Mean", "Total ÷ number of values"],
    ["Median", "Middle value; position (n + 1) ÷ 2"],
    ["Mode", "Most common"],
    ["Range", "Largest − smallest"],
    ["Mean from a frequency table", "Σfx ÷ Σf"],
    ["Grouped data mean", "Estimate using midpoints"],
    ["Pie chart angle", "(Frequency ÷ total) × 360°"],
    ["Stratified sampling (Higher)", "Group ÷ population × sample size"],
    ["Capture–recapture (Higher)", "N ≈ (n₁ × n₂) ÷ m"]
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Scatter graphs, cumulative frequency and histograms",
  summary: "Correlation and lines of best fit, cumulative frequency, box plots and histograms.",
  notes: `
<h3>Scatter graphs</h3>
<ul>
<li>Positive, negative or no correlation. Correlation doesn't prove causation.</li>
<li>Draw a line of best fit through the middle of the points to estimate values. <b>Interpolation</b> (within the data) is reliable; <b>extrapolation</b> (outside it) isn't.</li>
<li>An outlier doesn't fit the pattern.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: cumulative frequency and box plots</span>Plot running totals at the <b>upper class boundary</b>; join with a smooth curve.<br>Median at n/2; lower quartile at n/4; upper quartile at 3n/4. <b>Interquartile range</b> = UQ − LQ.<br>A box plot shows minimum, LQ, median, UQ and maximum. Compare distributions using the median (average) and IQR (spread).</div>
<div class="box box-c"><span class="box-title">Higher: histograms</span>Used for unequal class widths. <b>Frequency density</b> = frequency ÷ class width. The <b>area</b> of each bar = frequency.<br>Class 10 &lt; x ≤ 30 with frequency 40: frequency density = 40 ÷ 20 = 2.</div>
`,
  quiz: [
    { q: "As one variable increases the other decreases. This is…", o: ["Negative correlation", "Positive correlation", "No correlation", "Causation"], a: 0, e: "" },
    { q: "Using a line of best fit outside the data range is…", o: ["Extrapolation (unreliable)", "Interpolation", "Always accurate", "Correlation"], a: 0, e: "" },
    { q: "Correlation shows…", o: ["A relationship, not necessarily cause", "That one causes the other", "No relationship", "A perfect line"], a: 0, e: "" },
    { q: "Higher: cumulative frequency is plotted at…", o: ["Upper class boundaries", "Midpoints", "Lower boundaries", "Class widths"], a: 0, e: "" },
    { q: "Higher: interquartile range = …", o: ["UQ − LQ", "Max − min", "Median − LQ", "UQ + LQ"], a: 0, e: "" },
    { q: "Higher: frequency density = …", o: ["Frequency ÷ class width", "Class width ÷ frequency", "Frequency × class width", "Frequency ÷ total"], a: 0, e: "" },
    { q: "Higher: in a histogram, frequency is shown by…", o: ["The area of the bar", "The height of the bar", "The width only", "The midpoint"], a: 0, e: "" },
    { q: "Higher: class 10 < x ≤ 30 has frequency 40. Frequency density?", o: ["2", "4", "0.5", "1.33"], a: 0, e: "" },
    { q: "Higher: n = 80. The lower quartile is read at cumulative frequency…", o: ["20", "40", "60", "10"], a: 0, e: "" }
  ],
  flashcards: [
    ["Positive correlation", "Both increase together"],
    ["Negative correlation", "One increases, the other decreases"],
    ["Interpolation vs extrapolation", "Inside data (reliable) vs outside (unreliable)"],
    ["Cumulative frequency (Higher)", "Plot at upper class boundaries"],
    ["Quartiles (Higher)", "n/4, n/2, 3n/4"],
    ["IQR (Higher)", "UQ − LQ"],
    ["Box plot (Higher)", "Min, LQ, median, UQ, max"],
    ["Frequency density (Higher)", "Frequency ÷ class width"],
    ["Histogram (Higher)", "Area = frequency"]
  ]
});

S2Data.detail("5a", { mistakes: ["Giving a probability greater than 1 or as a ratio like 3 : 8. Use a fraction, decimal or percentage."], tips: ["Check all probabilities in a table add to 1: missing values are often found this way."], fact: "Pascal and Fermat founded probability theory in 1654 by writing letters about a gambling problem." });
S2Data.detail("5b", { mistakes: ["Adding probabilities along tree branches. Multiply along, add between."], tips: ["For 'without replacement', reduce both the top and bottom of the second fraction."], fact: "The Monty Hall problem fooled many mathematicians: switching doors doubles your chance of winning." });
S2Data.detail("6a", { mistakes: ["Dividing Σfx by the number of groups instead of the total frequency Σf."], tips: ["When comparing two data sets, compare an average and a measure of spread, in context."], fact: "Florence Nightingale invented a type of pie chart to persuade the government to improve army hospitals." });
S2Data.detail("6b", { mistakes: ["Drawing histogram bar heights as frequency. Use frequency density."], tips: ["For box plot comparisons, write one sentence about the medians and one about the IQRs."], fact: "Anscombe's quartet is four data sets with identical statistics but completely different graphs." });
