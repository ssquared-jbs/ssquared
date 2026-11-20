/* Maths² — Algebra */

S2Data.add({
  id: "2a", group: 2, title: "Expressions, expanding and factorising",
  summary: "Simplifying, substituting, expanding brackets and factorising, including quadratics.",
  notes: `
<h3>Simplifying and substituting</h3>
<p>Collect like terms: 3x + 2y − x + 5y = 2x + 7y. Substitute by replacing letters with numbers, using BIDMAS: if a = 3, b = −2, then a<sup>2</sup> − 4b = 9 + 8 = 17.</p>
<h3>Expanding</h3>
<ul>
<li>Single bracket: 3(2x − 5) = 6x − 15.</li>
<li>Double brackets (FOIL or grid): (x + 3)(x − 5) = x<sup>2</sup> − 5x + 3x − 15 = x<sup>2</sup> − 2x − 15.</li>
<li>Higher: triple brackets: expand two, then multiply by the third.</li>
</ul>
<h3>Factorising</h3>
<ul>
<li>Common factor: 6x<sup>2</sup> + 9x = 3x(2x + 3).</li>
<li>Quadratic x<sup>2</sup> + bx + c: find two numbers that multiply to c and add to b. x<sup>2</sup> + 7x + 12 = (x + 3)(x + 4).</li>
<li><b>Difference of two squares</b>: a<sup>2</sup> − b<sup>2</sup> = (a + b)(a − b). x<sup>2</sup> − 49 = (x + 7)(x − 7).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: ax² + bx + c</span>6x<sup>2</sup> + 11x + 3: find numbers multiplying to 6 × 3 = 18 and adding to 11: 9 and 2.<br>6x<sup>2</sup> + 9x + 2x + 3 = 3x(2x + 3) + 1(2x + 3) = <b>(3x + 1)(2x + 3)</b>.</div>
<h3>Identities</h3>
<p>An identity (≡) is true for all values: (x + 1)<sup>2</sup> ≡ x<sup>2</sup> + 2x + 1.</p>
`,
  quiz: [
    { q: "Simplify 3x + 2y − x + 5y.", o: ["2x + 7y", "4x + 7y", "2x + 3y", "9xy"], a: 0, e: "" },
    { q: "Expand 3(2x − 5).", o: ["6x − 15", "6x − 5", "5x − 15", "6x + 15"], a: 0, e: "" },
    { q: "Expand (x + 3)(x − 5).", o: ["x² − 2x − 15", "x² + 2x − 15", "x² − 15", "x² − 8x − 15"], a: 0, e: "" },
    { q: "Factorise 6x² + 9x.", o: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "6x(x + 9)"], a: 0, e: "" },
    { q: "Factorise x² + 7x + 12.", o: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 12)(x + 1)", "(x − 3)(x − 4)"], a: 0, e: "" },
    { q: "Factorise x² − 49.", o: ["(x + 7)(x − 7)", "(x − 7)²", "(x + 7)²", "x(x − 49)"], a: 0, e: "" },
    { q: "If a = 3 and b = −2, a² − 4b = …", o: ["17", "1", "−17", "13"], a: 0, e: "" },
    { q: "Higher: factorise 6x² + 11x + 3.", o: ["(3x + 1)(2x + 3)", "(6x + 1)(x + 3)", "(2x + 1)(3x + 3)", "(3x + 3)(2x + 1)"], a: 0, e: "" },
    { q: "Which is an identity?", o: ["(x + 1)² ≡ x² + 2x + 1", "x + 1 = 5", "2x = 8", "x² = 9"], a: 0, e: "" }
  ],
  flashcards: [
    ["Like terms", "Same letters and powers; add their coefficients"],
    ["Expand a(b + c)", "ab + ac"],
    ["(x + a)(x + b)", "x² + (a + b)x + ab"],
    ["Factorise x² + bx + c", "Two numbers: multiply to c, add to b"],
    ["Difference of two squares", "a² − b² = (a + b)(a − b)"],
    ["(a + b)²", "a² + 2ab + b²"],
    ["Identity (≡)", "True for every value of the variable"],
    ["ax² + bx + c (Higher)", "Split bx using numbers multiplying to ac"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Equations, inequalities and formulae",
  summary: "Solving linear equations and inequalities, and rearranging formulae.",
  notes: `
<h3>Linear equations</h3>
<p>Do the same to both sides. Expand brackets, collect x terms on one side.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>5(x − 2) = 3x + 6<br>5x − 10 = 3x + 6<br>2x = 16, so <b>x = 8</b>.</div>
<p>With fractions, multiply every term by the denominator: (x + 4)/3 = 5 → x + 4 = 15 → x = 11.</p>
<h3>Inequalities</h3>
<ul>
<li>Solve like equations, but if you <b>multiply or divide by a negative</b>, flip the sign.</li>
<li>−2x &gt; 6 → x &lt; −3.</li>
<li>On a number line: open circle for &lt; or &gt;, filled circle for ≤ or ≥.</li>
<li>Integer solutions of −2 &lt; n ≤ 3: −1, 0, 1, 2, 3.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher</span>Quadratic inequalities: x<sup>2</sup> &lt; 9 → −3 &lt; x &lt; 3. Sketch the graph and read where it's below/above the x-axis. Regions on graphs: shade the region satisfying several inequalities.</div>
<h3>Rearranging formulae</h3>
<p>Make a letter the subject by undoing operations in reverse order. v = u + at → t = (v − u)/a.</p>
<p>Higher: if the subject appears twice, collect those terms and factorise it out. ax + b = cx + d → x(a − c) = d − b → x = (d − b)/(a − c).</p>
`,
  quiz: [
    { q: "Solve 5(x − 2) = 3x + 6.", o: ["x = 8", "x = 2", "x = 4", "x = −8"], a: 0, e: "" },
    { q: "Solve (x + 4)/3 = 5.", o: ["x = 11", "x = 19", "x = 1/3", "x = 3"], a: 0, e: "" },
    { q: "Solve −2x > 6.", o: ["x < −3", "x > −3", "x < 3", "x > 3"], a: 0, e: "" },
    { q: "Integers n with −2 < n ≤ 3?", o: ["−1, 0, 1, 2, 3", "−2, −1, 0, 1, 2", "−2 to 3", "0, 1, 2, 3"], a: 0, e: "" },
    { q: "Make t the subject of v = u + at.", o: ["t = (v − u)/a", "t = v − u − a", "t = a(v − u)", "t = (v + u)/a"], a: 0, e: "" },
    { q: "Solve 3x + 7 = 22.", o: ["x = 5", "x = 29/3", "x = 15", "x = 7"], a: 0, e: "" },
    { q: "On a number line, x ≥ 2 has…", o: ["A filled circle at 2, arrow right", "An open circle at 2, arrow right", "A filled circle, arrow left", "An open circle, arrow left"], a: 0, e: "" },
    { q: "Higher: solve x² < 9.", o: ["−3 < x < 3", "x < 3", "x < −3 or x > 3", "x > 3"], a: 0, e: "" },
    { q: "Make r the subject of A = πr².", o: ["r = √(A/π)", "r = A/π", "r = √(Aπ)", "r = A/2π"], a: 0, e: "" }
  ],
  flashcards: [
    ["Solving equations", "Same operation to both sides"],
    ["Equations with fractions", "Multiply every term by the denominator"],
    ["Flip the inequality when…", "Multiplying or dividing by a negative"],
    ["Open vs filled circle", "< or > vs ≤ or ≥"],
    ["Rearranging", "Undo operations in reverse order"],
    ["Subject appears twice (Higher)", "Collect terms, factorise, divide"],
    ["Quadratic inequality (Higher)", "Find roots, sketch, read the region"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Sequences",
  summary: "Term-to-term rules, nth term of linear and quadratic sequences, and special sequences.",
  notes: `
<h3>Arithmetic (linear) sequences</h3>
<p>Common difference d. <b>nth term = dn + (first term − d)</b>.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>5, 8, 11, 14… d = 3; zero term = 2. nth term = <b>3n + 2</b>.<br>Is 100 in the sequence? 3n + 2 = 100 → n = 32.67, not a whole number, so <b>no</b>.</div>
<h3>Special sequences</h3>
<ul>
<li>Square numbers: 1, 4, 9, 16… (n<sup>2</sup>). Cube numbers: 1, 8, 27… (n<sup>3</sup>). Triangular: 1, 3, 6, 10…</li>
<li>Fibonacci-type: add the previous two terms.</li>
<li>Geometric: multiply by a common ratio r: 3, 6, 12, 24… (Higher: nth term ar<sup>n−1</sup>).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: quadratic sequences</span>4, 9, 16, 25… first differences 5, 7, 9; second difference 2. Coefficient of n<sup>2</sup> = 2 ÷ 2 = 1. Subtract n<sup>2</sup>: 3, 5, 7, 9 = 2n + 1. So nth term = <b>n<sup>2</sup> + 2n + 1</b>.</div>
`,
  quiz: [
    { q: "nth term of 5, 8, 11, 14…?", o: ["3n + 2", "3n + 5", "5n + 3", "n + 3"], a: 0, e: "" },
    { q: "nth term of 20, 16, 12, 8…?", o: ["24 − 4n", "4n + 16", "20 − 4n", "−4n + 20"], a: 0, e: "" },
    { q: "What's the 10th term of 2n + 7?", o: ["27", "19", "29", "17"], a: 0, e: "" },
    { q: "Which is a triangular number?", o: ["10", "9", "8", "12"], a: 0, e: "" },
    { q: "Next term of 1, 1, 2, 3, 5, 8…?", o: ["13", "11", "12", "16"], a: 0, e: "" },
    { q: "Common ratio of 3, 6, 12, 24…?", o: ["2", "3", "6", "12"], a: 0, e: "" },
    { q: "Is 100 in 3n + 2?", o: ["No", "Yes, n = 32", "Yes, n = 33", "Yes, n = 34"], a: 0, e: "" },
    { q: "Higher: second difference of a quadratic sequence is 6. Coefficient of n²?", o: ["3", "6", "12", "2"], a: 0, e: "" },
    { q: "Higher: nth term of 4, 9, 16, 25…?", o: ["n² + 2n + 1", "n² + 3", "2n² + 2", "n² + 4"], a: 0, e: "" }
  ],
  flashcards: [
    ["Arithmetic sequence", "Constant difference d"],
    ["nth term (linear)", "dn + (first term − d)"],
    ["Is x in the sequence?", "Solve nth term = x; must give a whole n"],
    ["Square / cube / triangular", "1, 4, 9… / 1, 8, 27… / 1, 3, 6, 10…"],
    ["Fibonacci", "Add previous two terms"],
    ["Geometric sequence", "Multiply by common ratio r"],
    ["Quadratic sequences (Higher)", "n² coefficient = second difference ÷ 2"]
  ]
});

S2Data.add({
  id: "2d", group: 2, title: "Straight-line graphs",
  summary: "y = mx + c, gradient and intercept, equations of lines, parallel and perpendicular lines.",
  notes: `
<h3>y = mx + c</h3>
<p><b>m</b> is the gradient; <b>c</b> is the y-intercept. Gradient = change in y ÷ change in x.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Line through (1, 4) and (3, 10): m = (10 − 4) ÷ (3 − 1) = 3.<br>4 = 3(1) + c → c = 1. Equation: <b>y = 3x + 1</b>.</div>
<ul>
<li>Horizontal lines: y = k. Vertical lines: x = k.</li>
<li>Rearrange to y = mx + c to read the gradient: 2y − 6x = 8 → y = 3x + 4, gradient 3.</li>
<li><b>Parallel</b> lines have equal gradients.</li>
<li>Midpoint of (x₁, y₁) and (x₂, y₂): ((x₁ + x₂)/2, (y₁ + y₂)/2).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: perpendicular lines</span>Gradients multiply to −1: m<sub>2</sub> = −1/m<sub>1</sub>. Perpendicular to y = 2x + 5 → gradient −½.</div>
<h3>Real-life graphs</h3>
<p>Distance–time: gradient = speed. Velocity–time: gradient = acceleration, area = distance (Higher: estimate area under curves using trapezia and gradient using a tangent).</p>
`,
  quiz: [
    { q: "Gradient of y = 3x + 1?", o: ["3", "1", "x", "4"], a: 0, e: "" },
    { q: "y-intercept of y = −2x + 5?", o: ["5", "−2", "2", "−5"], a: 0, e: "" },
    { q: "Gradient through (1, 4) and (3, 10)?", o: ["3", "6", "2", "1/3"], a: 0, e: "" },
    { q: "Which is parallel to y = 4x − 1?", o: ["y = 4x + 7", "y = −4x − 1", "y = x/4", "y = −x/4"], a: 0, e: "" },
    { q: "Gradient of 2y − 6x = 8?", o: ["3", "6", "−6", "4"], a: 0, e: "" },
    { q: "Midpoint of (2, 3) and (8, 7)?", o: ["(5, 5)", "(6, 4)", "(10, 10)", "(3, 2)"], a: 0, e: "" },
    { q: "The line x = 3 is…", o: ["Vertical", "Horizontal", "Diagonal", "Through the origin"], a: 0, e: "" },
    { q: "Higher: gradient perpendicular to y = 2x + 5?", o: ["−1/2", "2", "−2", "1/2"], a: 0, e: "" },
    { q: "On a distance–time graph, gradient is…", o: ["Speed", "Acceleration", "Distance", "Time"], a: 0, e: "" }
  ],
  flashcards: [
    ["y = mx + c", "m = gradient, c = y-intercept"],
    ["Gradient", "Change in y ÷ change in x"],
    ["Parallel lines", "Same gradient"],
    ["Perpendicular lines (Higher)", "m₁ × m₂ = −1"],
    ["Midpoint", "Average the x's and the y's"],
    ["Horizontal / vertical lines", "y = k / x = k"],
    ["Distance–time gradient", "Speed"],
    ["Velocity–time", "Gradient = acceleration; area = distance"]
  ]
});

S2Data.add({
  id: "2e", group: 2, title: "Quadratic equations",
  summary: "Solving quadratics by factorising, the formula and completing the square, and quadratic graphs.",
  notes: `
<h3>Solving by factorising</h3>
<p>Rearrange to = 0, factorise, set each bracket to zero. x<sup>2</sup> − x − 12 = 0 → (x − 4)(x + 3) = 0 → <b>x = 4 or x = −3</b>.</p>
<h3>Quadratic graphs</h3>
<p>y = ax<sup>2</sup> + bx + c is a parabola: ∪-shaped if a &gt; 0, ∩-shaped if a &lt; 0. <b>Roots</b> are where it crosses the x-axis; the y-intercept is c; the <b>turning point</b> is the minimum or maximum.</p>
<div class="box box-c"><span class="box-title">Higher: the quadratic formula</span>x = [−b ± √(b<sup>2</sup> − 4ac)] ÷ 2a. Use when it won't factorise; give answers to the accuracy asked.<br>2x<sup>2</sup> + 3x − 4 = 0 → x = [−3 ± √(9 + 32)] ÷ 4 → x = 0.85 or −2.35.</div>
<div class="box box-c"><span class="box-title">Higher: completing the square</span>x<sup>2</sup> + 6x + 2 = (x + 3)<sup>2</sup> − 9 + 2 = (x + 3)<sup>2</sup> − 7.<br>Turning point: (−3, −7). Solve: (x + 3)<sup>2</sup> = 7 → x = −3 ± √7.</div>
<p>The discriminant b<sup>2</sup> − 4ac tells you how many roots: positive → 2, zero → 1, negative → none.</p>
`,
  quiz: [
    { q: "Solve x² − x − 12 = 0.", o: ["x = 4 or −3", "x = −4 or 3", "x = 12 or −1", "x = 6 or −2"], a: 0, e: "" },
    { q: "Solve x² = 25.", o: ["x = ±5", "x = 5", "x = 12.5", "x = −5"], a: 0, e: "" },
    { q: "Solve x² + 5x = 0.", o: ["x = 0 or −5", "x = 5", "x = −5", "x = 0 or 5"], a: 0, e: "" },
    { q: "The graph of y = −x² + 4 is…", o: ["∩-shaped", "∪-shaped", "A straight line", "A circle"], a: 0, e: "" },
    { q: "The y-intercept of y = x² − 3x + 7 is…", o: ["7", "−3", "3", "1"], a: 0, e: "" },
    { q: "Higher: x² + 6x + 2 in completed square form?", o: ["(x + 3)² − 7", "(x + 6)² + 2", "(x + 3)² + 2", "(x − 3)² − 7"], a: 0, e: "" },
    { q: "Higher: turning point of y = (x − 2)² + 5?", o: ["(2, 5)", "(−2, 5)", "(2, −5)", "(5, 2)"], a: 0, e: "" },
    { q: "Higher: b² − 4ac < 0 means…", o: ["No real roots", "Two roots", "One root", "Infinite roots"], a: 0, e: "" },
    { q: "Higher: in the quadratic formula, the ± gives…", o: ["Two solutions", "One solution", "The turning point", "The y-intercept"], a: 0, e: "" }
  ],
  flashcards: [
    ["Solving by factorising", "Set = 0, factorise, each bracket = 0"],
    ["Roots", "Where the graph crosses the x-axis"],
    ["Shape of ax² + bx + c", "∪ if a > 0; ∩ if a < 0"],
    ["Quadratic formula (Higher)", "x = [−b ± √(b² − 4ac)] / 2a"],
    ["Completing the square (Higher)", "x² + bx + c = (x + b/2)² − (b/2)² + c"],
    ["Turning point of (x + p)² + q", "(−p, q)"],
    ["Discriminant b² − 4ac", "> 0: 2 roots; = 0: 1 root; < 0: none"]
  ]
});

S2Data.add({
  id: "2f", group: 2, title: "Simultaneous equations",
  summary: "Solving linear simultaneous equations by elimination and substitution, graphically, and with a quadratic.",
  notes: `
<h3>Elimination</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>3x + 2y = 16 and x − 2y = 0.<br>Add: 4x = 16 → x = 4. Substitute: 4 − 2y = 0 → y = 2.<br>Check in the first equation: 12 + 4 = 16 ✓.</div>
<p>If no coefficients match, multiply one or both equations first. Same signs: subtract; different signs: add.</p>
<h3>Substitution</h3>
<p>Rearrange one equation to make a letter the subject, substitute into the other.</p>
<h3>Graphically</h3>
<p>The solution is where the two lines intersect.</p>
<div class="box box-c"><span class="box-title">Higher: one linear, one quadratic</span>y = x + 1 and x<sup>2</sup> + y<sup>2</sup> = 13.<br>Substitute: x<sup>2</sup> + (x + 1)<sup>2</sup> = 13 → 2x<sup>2</sup> + 2x − 12 = 0 → x<sup>2</sup> + x − 6 = 0 → (x + 3)(x − 2) = 0.<br>x = 2, y = 3 or x = −3, y = −2. The line crosses the circle at two points.</div>
<p>Word problems: define your letters, form two equations, solve.</p>
`,
  quiz: [
    { q: "Solve 3x + 2y = 16 and x − 2y = 0.", o: ["x = 4, y = 2", "x = 2, y = 4", "x = 4, y = 4", "x = 2, y = 5"], a: 0, e: "" },
    { q: "Solve x + y = 10 and x − y = 4.", o: ["x = 7, y = 3", "x = 3, y = 7", "x = 6, y = 4", "x = 5, y = 5"], a: 0, e: "" },
    { q: "To eliminate y from 2x + 3y = 12 and 5x − 3y = 9, you should…", o: ["Add the equations", "Subtract the equations", "Multiply by 3", "Divide by 2"], a: 0, e: "" },
    { q: "Graphically, the solution is…", o: ["Where the lines intersect", "The y-intercepts", "The gradients", "The x-intercepts"], a: 0, e: "" },
    { q: "Solve y = 2x and x + y = 9.", o: ["x = 3, y = 6", "x = 6, y = 3", "x = 4.5, y = 9", "x = 2, y = 7"], a: 0, e: "" },
    { q: "2 pens + 1 ruler = £2.60; 1 pen + 1 ruler = £1.70. Cost of a pen?", o: ["90p", "80p", "£1.70", "70p"], a: 0, e: "" },
    { q: "Higher: how many times can a line meet a circle?", o: ["0, 1 or 2", "Always 2", "Always 1", "Up to 4"], a: 0, e: "" },
    { q: "Higher: substituting y = x + 1 into x² + y² = 13 gives…", o: ["2x² + 2x − 12 = 0", "x² + 2x − 12 = 0", "2x² + 1 = 13", "x² + x = 13"], a: 0, e: "" },
    { q: "Parallel lines as simultaneous equations have…", o: ["No solution", "One solution", "Two solutions", "Infinite solutions always"], a: 0, e: "" }
  ],
  flashcards: [
    ["Elimination", "Match coefficients, then add or subtract"],
    ["Same signs / different signs", "Subtract / add"],
    ["Substitution", "Make one letter the subject, substitute"],
    ["Graphical solution", "Intersection of the lines"],
    ["Check", "Substitute both values into the other equation"],
    ["Linear + quadratic (Higher)", "Substitute linear into quadratic; solve; find both pairs"]
  ]
});

S2Data.add({
  id: "2g", group: 2, title: "Graphs of functions",
  summary: "Cubic, reciprocal and exponential graphs, circles, trig graphs and graph transformations.",
  notes: `
<h3>Recognising graphs</h3>
<table>
<tr><th>Type</th><th>Example</th><th>Shape</th></tr>
<tr><td>Linear</td><td>y = 2x + 1</td><td>Straight line</td></tr>
<tr><td>Quadratic</td><td>y = x<sup>2</sup></td><td>Parabola</td></tr>
<tr><td>Cubic</td><td>y = x<sup>3</sup></td><td>S-shaped curve</td></tr>
<tr><td>Reciprocal</td><td>y = 1/x</td><td>Two curves; asymptotes at the axes</td></tr>
<tr><td>Exponential (Higher)</td><td>y = 2<sup>x</sup></td><td>Passes (0, 1); grows rapidly</td></tr>
</table>
<p>Use a table of values to plot. Solve equations graphically by reading where curves cross the x-axis or another line.</p>
<div class="box box-c"><span class="box-title">Higher: circles and trig graphs</span>x<sup>2</sup> + y<sup>2</sup> = r<sup>2</sup> is a circle centre (0, 0), radius r. The tangent at a point is perpendicular to the radius.<br>y = sin x and y = cos x repeat every 360°, between −1 and 1; y = tan x repeats every 180° with asymptotes at 90°, 270°.</div>
<div class="box box-c"><span class="box-title">Higher: transformations of y = f(x)</span>y = f(x) + a: translate up a. y = f(x + a): translate left a. y = −f(x): reflect in the x-axis. y = f(−x): reflect in the y-axis.</div>
`,
  quiz: [
    { q: "Which equation gives an S-shaped curve?", o: ["y = x³", "y = x²", "y = 1/x", "y = 2x"], a: 0, e: "" },
    { q: "y = 1/x has asymptotes at…", o: ["Both axes", "y = 1", "x = 1", "No asymptotes"], a: 0, e: "" },
    { q: "Higher: y = 2ˣ crosses the y-axis at…", o: ["(0, 1)", "(0, 2)", "(0, 0)", "(1, 0)"], a: 0, e: "" },
    { q: "Higher: x² + y² = 25 is a circle of radius…", o: ["5", "25", "12.5", "√5"], a: 0, e: "" },
    { q: "Higher: y = f(x) + 3 is a…", o: ["Translation up 3", "Translation right 3", "Stretch", "Reflection"], a: 0, e: "" },
    { q: "Higher: y = f(x + 2) is a…", o: ["Translation left 2", "Translation right 2", "Translation up 2", "Reflection"], a: 0, e: "" },
    { q: "Higher: y = −f(x) reflects in…", o: ["The x-axis", "The y-axis", "y = x", "The origin only"], a: 0, e: "" },
    { q: "Higher: sin x has a maximum value of…", o: ["1", "90", "360", "0"], a: 0, e: "" },
    { q: "To solve x² − 3 = 0 from a graph of y = x² − 3, read where…", o: ["The curve crosses the x-axis", "It crosses the y-axis", "It turns", "x = 3"], a: 0, e: "" }
  ],
  flashcards: [
    ["Cubic graph", "S-shaped (y = x³)"],
    ["Reciprocal graph", "y = k/x; asymptotes at axes"],
    ["Exponential (Higher)", "y = aˣ; through (0, 1)"],
    ["Circle (Higher)", "x² + y² = r²; centre origin"],
    ["Tangent to a circle (Higher)", "Perpendicular to the radius"],
    ["f(x) + a (Higher)", "Up a"],
    ["f(x + a) (Higher)", "Left a"],
    ["−f(x) / f(−x) (Higher)", "Reflect in x-axis / y-axis"],
    ["Trig graph periods (Higher)", "sin, cos: 360°; tan: 180°"]
  ]
});

S2Data.add({
  id: "2h", group: 2, higher: true, title: "Functions, iteration, proof and algebraic fractions",
  summary: "Function notation, composite and inverse functions, iteration, algebraic proof and algebraic fractions.",
  notes: `
<h3>Functions</h3>
<ul>
<li>f(x) = 3x − 2 → f(4) = 10.</li>
<li><b>Composite</b>: fg(x) means do g first, then f. If g(x) = x<sup>2</sup>, fg(x) = 3x<sup>2</sup> − 2.</li>
<li><b>Inverse</b> f<sup>−1</sup>(x): write y = 3x − 2, swap x and y, rearrange: f<sup>−1</sup>(x) = (x + 2)/3.</li>
</ul>
<h3>Iteration</h3>
<p>Rearrange an equation to x = g(x), then use x<sub>n+1</sub> = g(x<sub>n</sub>) repeatedly to approximate a root. A sign change of f(x) between two values shows a root lies between them.</p>
<h3>Algebraic proof</h3>
<p>Even number: 2n. Odd number: 2n + 1. Consecutive: n, n + 1. Show the result is a multiple of k by factorising out k.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Prove the sum of two consecutive odd numbers is a multiple of 4.<br>(2n + 1) + (2n + 3) = 4n + 4 = <b>4(n + 1)</b>, a multiple of 4.</div>
<h3>Algebraic fractions</h3>
<ul>
<li>Simplify by factorising and cancelling: (x<sup>2</sup> − 9)/(x + 3) = x − 3.</li>
<li>Add/subtract with a common denominator: 2/(x + 1) + 3/x = [2x + 3(x + 1)] / [x(x + 1)] = (5x + 3)/(x(x + 1)).</li>
</ul>
`,
  quiz: [
    { q: "f(x) = 3x − 2. f(4) = …", o: ["10", "14", "12", "6"], a: 0, e: "" },
    { q: "f(x) = 3x − 2. f⁻¹(x) = …", o: ["(x + 2)/3", "(x − 2)/3", "3x + 2", "1/(3x − 2)"], a: 0, e: "" },
    { q: "f(x) = x + 1, g(x) = 2x. fg(3) = …", o: ["7", "8", "6", "9"], a: 0, e: "g(3) = 6; f(6) = 7." },
    { q: "fg(x) means…", o: ["Apply g first, then f", "Apply f first", "Multiply f and g", "f divided by g"], a: 0, e: "" },
    { q: "An odd number can be written as…", o: ["2n + 1", "2n", "n + 1", "n²"], a: 0, e: "" },
    { q: "Simplify (x² − 9)/(x + 3).", o: ["x − 3", "x + 3", "x − 9", "x"], a: 0, e: "" },
    { q: "A sign change of f(x) between x = 1 and x = 2 shows…", o: ["A root lies between 1 and 2", "There's no root", "f(1) = 0", "f is linear"], a: 0, e: "" },
    { q: "x₀ = 1, xₙ₊₁ = (xₙ + 3)/2. x₁ = …", o: ["2", "1.5", "4", "3"], a: 0, e: "" },
    { q: "Sum of two consecutive odd numbers is always a multiple of…", o: ["4", "3", "5", "6"], a: 0, e: "" }
  ],
  flashcards: [
    ["Composite fg(x)", "Do g first, then f"],
    ["Inverse function", "Swap x and y, rearrange for y"],
    ["Iteration", "xₙ₊₁ = g(xₙ), repeat"],
    ["Sign change", "Root lies between the two values"],
    ["Even / odd in proof", "2n / 2n + 1"],
    ["Showing a multiple of k", "Factorise k out of the expression"],
    ["Simplifying algebraic fractions", "Factorise, then cancel common factors"],
    ["Adding algebraic fractions", "Common denominator; combine numerators"]
  ]
});

S2Data.detail("2a", { mistakes: ["Expanding (x + 3)² as x² + 9. It's x² + 6x + 9."], tips: ["Check factorising by expanding your answer back out."], fact: "The letter x for an unknown was popularised by Descartes in 1637." });
S2Data.detail("2b", { mistakes: ["Forgetting to flip the inequality sign when dividing by a negative."], tips: ["For integer solutions, check whether each end value is included (≤) or not (<)."], fact: "Inequalities are used in linear programming to plan airline schedules and factory production." });
S2Data.detail("2c", { mistakes: ["Writing the nth term of 5, 8, 11 as n + 3. The coefficient of n is the common difference, 3."], tips: ["Check your nth term by substituting n = 1 and n = 2."], fact: "Fibonacci introduced Hindu–Arabic numerals to Europe in his 1202 book Liber Abaci." });
S2Data.detail("2d", { mistakes: ["Calculating gradient as change in x over change in y. It's rise over run: y over x."], tips: ["Rearrange any line into y = mx + c before reading off the gradient."], fact: "Road signs show gradients as percentages: a 10% hill rises 10 m every 100 m." });
S2Data.detail("2e", { mistakes: ["Dividing both sides by x when solving x² = 5x, losing the solution x = 0."], tips: ["If the question says 'give answers to 2 d.p.', it won't factorise: use the formula."], fact: "The Babylonians solved quadratic equations on clay tablets nearly 4000 years ago." });
S2Data.detail("2f", { mistakes: ["Subtracting equations but forgetting to subtract every term, including negatives."], tips: ["Label your equations (1) and (2) and show which you add or subtract."], fact: "Simultaneous equations with thousands of unknowns are solved by computers to model weather." });
S2Data.detail("2g", { mistakes: ["Thinking f(x + 2) moves the graph right. It moves left by 2."], tips: ["For transformations, track a key point such as the turning point."], fact: "Exponential growth explains why a sheet of paper folded 42 times would reach the Moon." });
S2Data.detail("2h", { mistakes: ["Doing fg(x) in the wrong order. g is applied first."], tips: ["In proof questions, finish with a sentence: 'which is a multiple of 4'."], fact: "Proof by induction lets mathematicians prove statements about infinitely many numbers." });
