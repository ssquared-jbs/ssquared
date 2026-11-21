/* Maths² — Algebra */

S2Data.add({
  id: "2a", group: 2, title: "Expressions, expanding and factorising",
  summary: "Simplifying, substituting, expanding brackets and factorising, including quadratics.",
  notes: R`
<h3>Simplifying and substituting</h3>
<p>Collect like terms (same letters and powers): \(3x + 2y - x + 5y = 2x + 7y\).</p>
<p>Substitute by replacing letters with numbers in brackets, then use BIDMAS. If \(a = 3\) and \(b = -2\):</p>
<p>\[a^2 - 4b = (3)^2 - 4(-2) = 9 + 8 = 17\]</p>
<h3>Expanding</h3>
<ul>
<li>Single bracket: multiply everything inside. \(3(2x - 5) = 6x - 15\).</li>
<li>Double brackets: multiply every term in the first by every term in the second (FOIL or a grid).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Expand \((x + 3)(x - 5)\).
<table><tr><th>×</th><th>\(x\)</th><th>\(-5\)</th></tr>
<tr><td>\(x\)</td><td>\(x^2\)</td><td>\(-5x\)</td></tr>
<tr><td>\(+3\)</td><td>\(3x\)</td><td>\(-15\)</td></tr></table>
Collect: \(x^2 - 5x + 3x - 15 = x^2 - 2x - 15\).</div>
<p>Higher: for triple brackets, expand two first, then multiply the result by the third.</p>
<h3>Factorising</h3>
<ul>
<li><b>Common factor</b>: take out the HCF. \(6x^2 + 9x = 3x(2x + 3)\).</li>
<li><b>Quadratic</b> \(x^2 + bx + c\): find two numbers that multiply to \(c\) and add to \(b\). For \(x^2 + 7x + 12\): \(3 \times 4 = 12\) and \(3 + 4 = 7\), so \((x + 3)(x + 4)\).</li>
<li><b>Difference of two squares</b>: \(a^2 - b^2 = (a + b)(a - b)\). \(x^2 - 49 = (x + 7)(x - 7)\).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: \(ax^2 + bx + c\)</span>Factorise \(6x^2 + 11x + 3\).
<ol><li>\(a \times c = 6 \times 3 = 18\). Find two numbers multiplying to 18 and adding to 11: 9 and 2.</li>
<li>Split the middle term: \(6x^2 + 9x + 2x + 3\).</li>
<li>Factorise in pairs: \(3x(2x + 3) + 1(2x + 3)\).</li>
<li>\((3x + 1)(2x + 3)\).</li></ol></div>
<h3>Identities</h3>
<p>An identity (\(\equiv\)) is true for <b>every</b> value: \((x + 1)^2 \equiv x^2 + 2x + 1\). An equation is only true for some values.</p>
`,
  quiz: [
    { q: R`Simplify \(3x + 2y - x + 5y\).`, o: [R`\(2x + 7y\)`, R`\(4x + 7y\)`, R`\(2x + 3y\)`, R`\(9xy\)`], a: 0, e: R`\(3x - x = 2x\) and \(2y + 5y = 7y\).` },
    { q: R`Expand \(3(2x - 5)\).`, o: [R`\(6x - 15\)`, R`\(6x - 5\)`, R`\(5x - 15\)`, R`\(6x + 15\)`], a: 0, e: "Multiply both terms inside by 3." },
    { q: R`Expand \((x + 3)(x - 5)\).`, o: [R`\(x^2 - 2x - 15\)`, R`\(x^2 + 2x - 15\)`, R`\(x^2 - 15\)`, R`\(x^2 - 8x - 15\)`], a: 0, e: R`\(x^2 - 5x + 3x - 15\); the middle terms give \(-2x\).` },
    { q: R`Factorise \(6x^2 + 9x\).`, o: [R`\(3x(2x + 3)\)`, R`\(3(2x^2 + 3x)\)`, R`\(x(6x + 9)\)`, R`\(6x(x + 9)\)`], a: 0, e: R`The HCF of \(6x^2\) and \(9x\) is \(3x\). The other options don't take out the full HCF.` },
    { q: R`Factorise \(x^2 + 7x + 12\).`, o: [R`\((x + 3)(x + 4)\)`, R`\((x + 2)(x + 6)\)`, R`\((x + 12)(x + 1)\)`, R`\((x - 3)(x - 4)\)`], a: 0, e: "3 and 4 multiply to 12 and add to 7." },
    { q: R`Factorise \(x^2 - 49\).`, o: [R`\((x + 7)(x - 7)\)`, R`\((x - 7)^2\)`, R`\((x + 7)^2\)`, R`\(x(x - 49)\)`], a: 0, e: R`Difference of two squares: \(49 = 7^2\).` },
    { q: R`If \(a = 3\) and \(b = -2\), \(a^2 - 4b = \ ?\)`, o: ["17", "1", "−17", "13"], a: 0, e: R`\(9 - 4(-2) = 9 + 8 = 17\). Minus a negative is plus.` },
    { q: R`Higher: factorise \(6x^2 + 11x + 3\).`, o: [R`\((3x + 1)(2x + 3)\)`, R`\((6x + 1)(x + 3)\)`, R`\((2x + 1)(3x + 3)\)`, R`\((3x + 3)(2x + 1)\)`], a: 0, e: R`Check by expanding: \(6x^2 + 9x + 2x + 3 = 6x^2 + 11x + 3\).` },
    { q: "Which is an identity?", o: [R`\((x + 1)^2 \equiv x^2 + 2x + 1\)`, R`\(x + 1 = 5\)`, R`\(2x = 8\)`, R`\(x^2 = 9\)`], a: 0, e: R`It's true for every \(x\); the others are only true for particular values.` }
  ],
  flashcards: [
    ["Like terms", "Same letters and powers; add their coefficients"],
    [R`Expand \(a(b + c)\)`, R`\(ab + ac\)`],
    [R`\((x + a)(x + b)\)`, R`\(x^2 + (a + b)x + ab\)`],
    [R`Factorise \(x^2 + bx + c\)`, R`Two numbers: multiply to \(c\), add to \(b\)`],
    ["Difference of two squares", R`\(a^2 - b^2 = (a + b)(a - b)\)`],
    [R`\((a + b)^2\)`, R`\(a^2 + 2ab + b^2\)`],
    [R`Identity (\(\equiv\))`, "True for every value of the variable"],
    [R`\(ax^2 + bx + c\) (Higher)`, R`Split \(bx\) using numbers multiplying to \(ac\)`]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Equations, inequalities and formulae",
  summary: "Solving linear equations and inequalities, and rearranging formulae.",
  notes: R`
<h3>Linear equations</h3>
<p>Do the same to both sides. Expand any brackets, then collect the \(x\) terms on one side and the numbers on the other.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(5(x - 2) = 3x + 6\).
<ol><li>Expand: \(5x - 10 = 3x + 6\).</li>
<li>Subtract \(3x\): \(2x - 10 = 6\).</li>
<li>Add 10: \(2x = 16\).</li>
<li>Divide by 2: \(x = 8\).</li></ol>
Check: \(5(6) = 30\) and \(3(8) + 6 = 30\). ✓</div>
<p>With fractions, multiply every term by the denominator: \(\dfrac{x + 4}{3} = 5 \Rightarrow x + 4 = 15 \Rightarrow x = 11\).</p>
<h3>Inequalities</h3>
<ul>
<li>Solve like equations, but if you <b>multiply or divide by a negative</b>, flip the sign: \(-2x > 6 \Rightarrow x < -3\).</li>
<li>On a number line: open circle for \(<\) or \(>\); filled circle for \(\le\) or \(\ge\).</li>
<li>Integer solutions of \(-2 < n \le 3\): \(-1, 0, 1, 2, 3\) (not \(-2\), because of the strict \(<\)).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher</span>Quadratic inequalities: \(x^2 < 9\) means \(-3 < x < 3\). Find the roots, sketch the graph, and read where it's below (or above) the \(x\)-axis.<br>Regions on graphs: draw each boundary line (dashed for \(<\), solid for \(\le\)) and shade the region that satisfies them all.</div>
<h3>Rearranging formulae</h3>
<p>Make a letter the subject by undoing the operations in reverse order.</p>
<p>\[v = u + at \;\Rightarrow\; v - u = at \;\Rightarrow\; t = \frac{v - u}{a}\]</p>
<p>Higher: if the subject appears twice, collect those terms on one side and factorise it out:</p>
<p>\[ax + b = cx + d \;\Rightarrow\; ax - cx = d - b \;\Rightarrow\; x(a - c) = d - b \;\Rightarrow\; x = \frac{d - b}{a - c}\]</p>
`,
  quiz: [
    { q: R`Solve \(5(x - 2) = 3x + 6\).`, o: [R`\(x = 8\)`, R`\(x = 2\)`, R`\(x = 4\)`, R`\(x = -8\)`], a: 0, e: R`\(5x - 10 = 3x + 6 \Rightarrow 2x = 16\).` },
    { q: R`Solve \(\dfrac{x + 4}{3} = 5\).`, o: [R`\(x = 11\)`, R`\(x = 19\)`, R`\(x = \frac13\)`, R`\(x = 3\)`], a: 0, e: R`Multiply by 3: \(x + 4 = 15\).` },
    { q: R`Solve \(-2x > 6\).`, o: [R`\(x < -3\)`, R`\(x > -3\)`, R`\(x < 3\)`, R`\(x > 3\)`], a: 0, e: "Dividing by −2 flips the inequality sign." },
    { q: R`Integers \(n\) with \(-2 < n \le 3\)?`, o: ["−1, 0, 1, 2, 3", "−2, −1, 0, 1, 2", "−2 to 3", "0, 1, 2, 3"], a: 0, e: R`\(-2\) is excluded (\(<\)) but 3 is included (\(\le\)).` },
    { q: R`Make \(t\) the subject of \(v = u + at\).`, o: [R`\(t = \dfrac{v - u}{a}\)`, R`\(t = v - u - a\)`, R`\(t = a(v - u)\)`, R`\(t = \dfrac{v + u}{a}\)`], a: 0, e: R`Subtract \(u\), then divide by \(a\).` },
    { q: R`Solve \(3x + 7 = 22\).`, o: [R`\(x = 5\)`, R`\(x = \frac{29}{3}\)`, R`\(x = 15\)`, R`\(x = 7\)`], a: 0, e: R`\(3x = 15\), so \(x = 5\).` },
    { q: R`On a number line, \(x \ge 2\) has…`, o: ["A filled circle at 2, arrow right", "An open circle at 2, arrow right", "A filled circle, arrow left", "An open circle, arrow left"], a: 0, e: R`Filled because 2 is included; right because \(x\) is bigger.` },
    { q: R`Higher: solve \(x^2 < 9\).`, o: [R`\(-3 < x < 3\)`, R`\(x < 3\)`, R`\(x < -3\) or \(x > 3\)`, R`\(x > 3\)`], a: 0, e: R`The graph of \(y = x^2 - 9\) is below the axis between its roots \(-3\) and 3.` },
    { q: R`Make \(r\) the subject of \(A = \pi r^2\).`, o: [R`\(r = \sqrt{\dfrac{A}{\pi}}\)`, R`\(r = \dfrac{A}{\pi}\)`, R`\(r = \sqrt{A\pi}\)`, R`\(r = \dfrac{A}{2\pi}\)`], a: 0, e: R`Divide by \(\pi\), then square root.` }
  ],
  flashcards: [
    ["Solving equations", "Same operation to both sides"],
    ["Equations with fractions", "Multiply every term by the denominator"],
    ["Flip the inequality when…", "Multiplying or dividing by a negative"],
    ["Open vs filled circle", R`\(<\) or \(>\) vs \(\le\) or \(\ge\)`],
    ["Rearranging", "Undo operations in reverse order"],
    ["Subject appears twice (Higher)", "Collect terms, factorise, divide"],
    ["Quadratic inequality (Higher)", "Find roots, sketch, read the region"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Sequences",
  summary: "Term-to-term rules, nth term of linear and quadratic sequences, and special sequences.",
  notes: R`
<h3>Arithmetic (linear) sequences</h3>
<p>These go up or down by a common difference \(d\).</p>
<p>\[n\text{th term} = dn + (\text{first term} - d)\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the \(n\)th term of 5, 8, 11, 14, …
<ol><li>The difference is \(d = 3\), so start with \(3n\).</li>
<li>\(3n\) gives 3, 6, 9, …; the sequence is 2 more each time.</li>
<li>\(n\)th term \(= 3n + 2\).</li></ol>
Is 100 in the sequence? \(3n + 2 = 100 \Rightarrow n = 32.67\). That's not a whole number, so <b>no</b>.</div>
<h3>Special sequences</h3>
<table><tr><th>Sequence</th><th>Terms</th><th>Rule</th></tr>
<tr><td>Square</td><td>1, 4, 9, 16, …</td><td>\(n^2\)</td></tr>
<tr><td>Cube</td><td>1, 8, 27, 64, …</td><td>\(n^3\)</td></tr>
<tr><td>Triangular</td><td>1, 3, 6, 10, …</td><td>\(\frac{n(n + 1)}{2}\)</td></tr>
<tr><td>Fibonacci-type</td><td>1, 1, 2, 3, 5, …</td><td>Add the previous two</td></tr>
<tr><td>Geometric</td><td>3, 6, 12, 24, …</td><td>Multiply by \(r\) (Higher: \(ar^{n-1}\))</td></tr></table>
<div class="box box-c"><span class="box-title">Higher: quadratic sequences</span>Find the \(n\)th term of 4, 9, 16, 25, …
<ol><li>First differences: 5, 7, 9. Second difference: 2.</li>
<li>Coefficient of \(n^2\) = second difference ÷ 2 = 1, so start with \(n^2\): 1, 4, 9, 16.</li>
<li>Subtract: \(4 - 1, 9 - 4, \ldots = 3, 5, 7, 9\), which is \(2n + 1\).</li>
<li>\(n\)th term \(= n^2 + 2n + 1\).</li></ol></div>
`,
  quiz: [
    { q: "nth term of 5, 8, 11, 14…?", o: [R`\(3n + 2\)`, R`\(3n + 5\)`, R`\(5n + 3\)`, R`\(n + 3\)`], a: 0, e: R`Difference 3; zero term \(5 - 3 = 2\).` },
    { q: "nth term of 20, 16, 12, 8…?", o: [R`\(24 - 4n\)`, R`\(4n + 16\)`, R`\(20 - 4n\)`, R`\(-4n + 20\)`], a: 0, e: R`Difference \(-4\); zero term \(20 + 4 = 24\). Check: \(n = 1\) gives 20.` },
    { q: R`What's the 10th term of \(2n + 7\)?`, o: ["27", "19", "29", "17"], a: 0, e: R`\(2(10) + 7 = 27\).` },
    { q: "Which is a triangular number?", o: ["10", "9", "8", "12"], a: 0, e: R`\(1 + 2 + 3 + 4 = 10\).` },
    { q: "Next term of 1, 1, 2, 3, 5, 8…?", o: ["13", "11", "12", "16"], a: 0, e: R`Fibonacci: \(5 + 8 = 13\).` },
    { q: "Common ratio of 3, 6, 12, 24…?", o: ["2", "3", "6", "12"], a: 0, e: "Each term is double the one before." },
    { q: R`Is 100 in \(3n + 2\)?`, o: ["No", R`Yes, \(n = 32\)`, R`Yes, \(n = 33\)`, R`Yes, \(n = 34\)`], a: 0, e: R`\(3n = 98\) gives \(n = 32.67\), not a whole number.` },
    { q: R`Higher: the second difference of a quadratic sequence is 6. Coefficient of \(n^2\)?`, o: ["3", "6", "12", "2"], a: 0, e: "Halve the second difference." },
    { q: "Higher: nth term of 4, 9, 16, 25…?", o: [R`\(n^2 + 2n + 1\)`, R`\(n^2 + 3\)`, R`\(2n^2 + 2\)`, R`\(n^2 + 4\)`], a: 0, e: R`It's \((n + 1)^2\), which expands to \(n^2 + 2n + 1\).` }
  ],
  flashcards: [
    ["Arithmetic sequence", R`Constant difference \(d\)`],
    ["nth term (linear)", R`\(dn + (\text{first term} - d)\)`],
    [R`Is \(x\) in the sequence?`, R`Solve \(n\)th term \(= x\); \(n\) must be a whole number`],
    ["Square / cube / triangular", "1, 4, 9… / 1, 8, 27… / 1, 3, 6, 10…"],
    ["Fibonacci", "Add the previous two terms"],
    ["Geometric sequence", R`Multiply by the common ratio \(r\)`],
    ["Quadratic sequences (Higher)", R`\(n^2\) coefficient = second difference ÷ 2`]
  ]
});

S2Data.add({
  id: "2d", group: 2, title: "Straight-line graphs",
  summary: R`\(y = mx + c\), gradient and intercept, equations of lines, parallel and perpendicular lines.`,
  notes: R`
<h3>\(y = mx + c\)</h3>
<p>\(m\) is the gradient (steepness); \(c\) is the \(y\)-intercept (where the line crosses the \(y\)-axis).</p>
<p>\[\text{gradient} = \frac{\text{change in } y}{\text{change in } x} = \frac{y_2 - y_1}{x_2 - x_1}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the equation of the line through \((1, 4)\) and \((3, 10)\).
<ol><li>Gradient: \(m = \dfrac{10 - 4}{3 - 1} = \dfrac62 = 3\).</li>
<li>Substitute a point into \(y = 3x + c\): \(4 = 3(1) + c\), so \(c = 1\).</li>
<li>Equation: \(y = 3x + 1\).</li></ol></div>
<ul>
<li>Horizontal lines: \(y = k\). Vertical lines: \(x = k\).</li>
<li>Rearrange to \(y = mx + c\) to read the gradient: \(2y - 6x = 8 \Rightarrow 2y = 6x + 8 \Rightarrow y = 3x + 4\), gradient 3.</li>
<li><b>Parallel</b> lines have equal gradients.</li>
<li>Midpoint of \((x_1, y_1)\) and \((x_2, y_2)\): \(\left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)\).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: perpendicular lines</span>Gradients multiply to \(-1\): \(m_1 \times m_2 = -1\), so \(m_2 = -\dfrac{1}{m_1}\) ("flip and change the sign").<br>Perpendicular to \(y = 2x + 5\): gradient \(-\frac12\).</div>
<h3>Real-life graphs</h3>
<p>Distance–time: gradient = speed. Velocity–time: gradient = acceleration; area under the graph = distance. (Higher: estimate the area under a curve with trapezia, and the gradient of a curve with a tangent.)</p>
`,
  quiz: [
    { q: R`Gradient of \(y = 3x + 1\)?`, o: ["3", "1", R`\(x\)`, "4"], a: 0, e: R`In \(y = mx + c\), the gradient is the number multiplying \(x\).` },
    { q: R`\(y\)-intercept of \(y = -2x + 5\)?`, o: ["5", "−2", "2", "−5"], a: 0, e: R`\(c = 5\): when \(x = 0\), \(y = 5\).` },
    { q: R`Gradient through \((1, 4)\) and \((3, 10)\)?`, o: ["3", "6", "2", R`\(\frac13\)`], a: 0, e: R`\(\dfrac{10 - 4}{3 - 1} = \dfrac62\).` },
    { q: R`Which is parallel to \(y = 4x - 1\)?`, o: [R`\(y = 4x + 7\)`, R`\(y = -4x - 1\)`, R`\(y = \frac{x}{4}\)`, R`\(y = -\frac{x}{4}\)`], a: 0, e: "Parallel lines have the same gradient, 4." },
    { q: R`Gradient of \(2y - 6x = 8\)?`, o: ["3", "6", "−6", "4"], a: 0, e: R`Rearrange: \(y = 3x + 4\).` },
    { q: R`Midpoint of \((2, 3)\) and \((8, 7)\)?`, o: [R`\((5, 5)\)`, R`\((6, 4)\)`, R`\((10, 10)\)`, R`\((3, 2)\)`], a: 0, e: R`\(\left(\frac{2 + 8}{2}, \frac{3 + 7}{2}\right)\).` },
    { q: R`The line \(x = 3\) is…`, o: ["Vertical", "Horizontal", "Diagonal", "Through the origin"], a: 0, e: R`Every point has \(x = 3\), whatever \(y\) is.` },
    { q: R`Higher: gradient perpendicular to \(y = 2x + 5\)?`, o: [R`\(-\frac12\)`, "2", "−2", R`\(\frac12\)`], a: 0, e: R`\(2 \times \left(-\frac12\right) = -1\).` },
    { q: "On a distance–time graph, the gradient is…", o: ["Speed", "Acceleration", "Distance", "Time"], a: 0, e: "Distance ÷ time is speed." }
  ],
  flashcards: [
    [R`\(y = mx + c\)`, R`\(m\) = gradient, \(c\) = \(y\)-intercept`],
    ["Gradient", R`\(\dfrac{\text{change in } y}{\text{change in } x}\)`],
    ["Parallel lines", "Same gradient"],
    ["Perpendicular lines (Higher)", R`\(m_1 \times m_2 = -1\)`],
    ["Midpoint", R`Average the \(x\)'s and the \(y\)'s`],
    ["Horizontal / vertical lines", R`\(y = k\) / \(x = k\)`],
    ["Distance–time gradient", "Speed"],
    ["Velocity–time", "Gradient = acceleration; area = distance"]
  ]
});

S2Data.add({
  id: "2e", group: 2, title: "Quadratic equations",
  summary: "Solving quadratics by factorising, the formula and completing the square, and quadratic graphs.",
  notes: R`
<h3>Solving by factorising</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(x^2 - x - 12 = 0\).
<ol><li>Find two numbers that multiply to \(-12\) and add to \(-1\): \(-4\) and \(3\).</li>
<li>Factorise: \((x - 4)(x + 3) = 0\).</li>
<li>One bracket must be zero: \(x - 4 = 0\) or \(x + 3 = 0\).</li>
<li>\(x = 4\) or \(x = -3\).</li></ol></div>
<p>Always rearrange to "\(= 0\)" first. Don't divide by \(x\): \(x^2 + 5x = 0\) factorises to \(x(x + 5) = 0\), giving \(x = 0\) or \(x = -5\).</p>
<h3>Quadratic graphs</h3>
<p>\(y = ax^2 + bx + c\) is a parabola: \(\cup\)-shaped if \(a > 0\), \(\cap\)-shaped if \(a < 0\). The <b>roots</b> are where it crosses the \(x\)-axis; the \(y\)-intercept is \(c\); the <b>turning point</b> is the minimum or maximum.</p>
<div class="box box-c"><span class="box-title">Higher: the quadratic formula</span>
<p>\[x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]</p>
Use it when the quadratic won't factorise. Solve \(2x^2 + 3x - 4 = 0\): \(a = 2\), \(b = 3\), \(c = -4\).
<ol><li>\(b^2 - 4ac = 9 - 4(2)(-4) = 9 + 32 = 41\).</li>
<li>\(x = \dfrac{-3 \pm \sqrt{41}}{4}\).</li>
<li>\(x = 0.85\) or \(x = -2.35\) (2 d.p.).</li></ol></div>
<div class="box box-c"><span class="box-title">Higher: completing the square</span>Halve the \(x\) coefficient, then subtract its square:
<p>\[x^2 + 6x + 2 = (x + 3)^2 - 9 + 2 = (x + 3)^2 - 7\]</p>
Turning point: \((-3, -7)\). To solve \(= 0\): \((x + 3)^2 = 7\), so \(x = -3 \pm \sqrt7\).</div>
<p>The discriminant \(b^2 - 4ac\) tells you how many roots there are: positive → 2; zero → 1; negative → none.</p>
`,
  quiz: [
    { q: R`Solve \(x^2 - x - 12 = 0\).`, o: [R`\(x = 4\) or \(-3\)`, R`\(x = -4\) or \(3\)`, R`\(x = 12\) or \(-1\)`, R`\(x = 6\) or \(-2\)`], a: 0, e: R`\((x - 4)(x + 3) = 0\). Watch the signs: set each bracket to zero.` },
    { q: R`Solve \(x^2 = 25\).`, o: [R`\(x = \pm5\)`, R`\(x = 5\)`, R`\(x = 12.5\)`, R`\(x = -5\)`], a: 0, e: R`Both \(5^2\) and \((-5)^2\) equal 25.` },
    { q: R`Solve \(x^2 + 5x = 0\).`, o: [R`\(x = 0\) or \(-5\)`, R`\(x = 5\)`, R`\(x = -5\)`, R`\(x = 0\) or \(5\)`], a: 0, e: R`\(x(x + 5) = 0\). Dividing by \(x\) would lose the \(x = 0\) solution.` },
    { q: R`The graph of \(y = -x^2 + 4\) is…`, o: [R`\(\cap\)-shaped`, R`\(\cup\)-shaped`, "A straight line", "A circle"], a: 0, e: R`The \(x^2\) coefficient is negative.` },
    { q: R`The \(y\)-intercept of \(y = x^2 - 3x + 7\) is…`, o: ["7", "−3", "3", "1"], a: 0, e: R`Put \(x = 0\): \(y = 7\).` },
    { q: R`Higher: \(x^2 + 6x + 2\) in completed square form?`, o: [R`\((x + 3)^2 - 7\)`, R`\((x + 6)^2 + 2\)`, R`\((x + 3)^2 + 2\)`, R`\((x - 3)^2 - 7\)`], a: 0, e: R`\((x + 3)^2 = x^2 + 6x + 9\), so subtract 9 and add 2.` },
    { q: R`Higher: turning point of \(y = (x - 2)^2 + 5\)?`, o: [R`\((2, 5)\)`, R`\((-2, 5)\)`, R`\((2, -5)\)`, R`\((5, 2)\)`], a: 0, e: R`The bracket is smallest (zero) when \(x = 2\), giving \(y = 5\).` },
    { q: R`Higher: \(b^2 - 4ac < 0\) means…`, o: ["No real roots", "Two roots", "One root", "Infinite roots"], a: 0, e: "You can't square-root a negative number." },
    { q: R`Higher: in the quadratic formula, the \(\pm\) gives…`, o: ["Two solutions", "One solution", "The turning point", R`The \(y\)-intercept`], a: 0, e: R`One with \(+\sqrt{\ }\) and one with \(-\sqrt{\ }\).` }
  ],
  flashcards: [
    ["Solving by factorising", R`Set \(= 0\), factorise, each bracket \(= 0\)`],
    ["Roots", R`Where the graph crosses the \(x\)-axis`],
    [R`Shape of \(ax^2 + bx + c\)`, R`\(\cup\) if \(a > 0\); \(\cap\) if \(a < 0\)`],
    ["Quadratic formula (Higher)", R`\(x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)`],
    ["Completing the square (Higher)", R`\(x^2 + bx + c = \left(x + \frac b2\right)^2 - \left(\frac b2\right)^2 + c\)`],
    [R`Turning point of \((x + p)^2 + q\)`, R`\((-p, q)\)`],
    [R`Discriminant \(b^2 - 4ac\)`, R`\(> 0\): 2 roots; \(= 0\): 1 root; \(< 0\): none`]
  ]
});

S2Data.add({
  id: "2f", group: 2, title: "Simultaneous equations",
  summary: "Solving linear simultaneous equations by elimination and substitution, graphically, and with a quadratic.",
  notes: R`
<h3>Elimination</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(3x + 2y = 16\) and \(x - 2y = 0\).
<ol><li>The \(y\) terms are \(+2y\) and \(-2y\) (different signs), so add: \(4x = 16\), giving \(x = 4\).</li>
<li>Substitute into the second: \(4 - 2y = 0\), so \(y = 2\).</li>
<li>Check in the first: \(3(4) + 2(2) = 16\). ✓</li></ol></div>
<p>If no coefficients match, multiply one or both equations first. Same signs: subtract. Different signs: add.</p>
<h3>Substitution</h3>
<p>Rearrange one equation to make a letter the subject, then substitute into the other. E.g. \(y = 2x\) and \(x + y = 9\): \(x + 2x = 9\), so \(x = 3\), \(y = 6\).</p>
<h3>Graphically</h3>
<p>The solution is the point where the two lines intersect. Parallel lines never meet, so there's no solution.</p>
<div class="box box-c"><span class="box-title">Higher: one linear, one quadratic</span>Solve \(y = x + 1\) and \(x^2 + y^2 = 13\).
<ol><li>Substitute: \(x^2 + (x + 1)^2 = 13\).</li>
<li>Expand: \(x^2 + x^2 + 2x + 1 = 13 \Rightarrow 2x^2 + 2x - 12 = 0 \Rightarrow x^2 + x - 6 = 0\).</li>
<li>Factorise: \((x + 3)(x - 2) = 0\), so \(x = 2\) or \(x = -3\).</li>
<li>Find each \(y\) from the linear equation: \((2, 3)\) and \((-3, -2)\).</li></ol>
The line crosses the circle at two points.</div>
<p>Word problems: define your letters, form two equations, solve, and answer in context.</p>
`,
  quiz: [
    { q: R`Solve \(3x + 2y = 16\) and \(x - 2y = 0\).`, o: [R`\(x = 4\), \(y = 2\)`, R`\(x = 2\), \(y = 4\)`, R`\(x = 4\), \(y = 4\)`, R`\(x = 2\), \(y = 5\)`], a: 0, e: R`Add: \(4x = 16\). Then \(4 - 2y = 0\).` },
    { q: R`Solve \(x + y = 10\) and \(x - y = 4\).`, o: [R`\(x = 7\), \(y = 3\)`, R`\(x = 3\), \(y = 7\)`, R`\(x = 6\), \(y = 4\)`, R`\(x = 5\), \(y = 5\)`], a: 0, e: R`Add: \(2x = 14\), so \(x = 7\) and \(y = 3\).` },
    { q: R`To eliminate \(y\) from \(2x + 3y = 12\) and \(5x - 3y = 9\), you should…`, o: ["Add the equations", "Subtract the equations", "Multiply by 3", "Divide by 2"], a: 0, e: R`\(+3y\) and \(-3y\) have different signs, so adding cancels them.` },
    { q: "Graphically, the solution is…", o: ["Where the lines intersect", R`The \(y\)-intercepts`, "The gradients", R`The \(x\)-intercepts`], a: 0, e: "That point lies on both lines, so it satisfies both equations." },
    { q: R`Solve \(y = 2x\) and \(x + y = 9\).`, o: [R`\(x = 3\), \(y = 6\)`, R`\(x = 6\), \(y = 3\)`, R`\(x = 4.5\), \(y = 9\)`, R`\(x = 2\), \(y = 7\)`], a: 0, e: R`Substitute: \(3x = 9\).` },
    { q: "2 pens + 1 ruler = £2.60; 1 pen + 1 ruler = £1.70. Cost of a pen?", o: ["90p", "80p", "£1.70", "70p"], a: 0, e: R`Subtract: one pen \(= 2.60 - 1.70 = 0.90\).` },
    { q: "Higher: how many times can a line meet a circle?", o: ["0, 1 or 2", "Always 2", "Always 1", "Up to 4"], a: 0, e: "It can miss, touch (a tangent) or cut through." },
    { q: R`Higher: substituting \(y = x + 1\) into \(x^2 + y^2 = 13\) gives…`, o: [R`\(2x^2 + 2x - 12 = 0\)`, R`\(x^2 + 2x - 12 = 0\)`, R`\(2x^2 + 1 = 13\)`, R`\(x^2 + x = 13\)`], a: 0, e: R`\((x + 1)^2 = x^2 + 2x + 1\), not \(x^2 + 1\).` },
    { q: "Parallel lines as simultaneous equations have…", o: ["No solution", "One solution", "Two solutions", "Infinite solutions always"], a: 0, e: "They never intersect." }
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
  notes: R`
<h3>Recognising graphs</h3>
<table>
<tr><th>Type</th><th>Example</th><th>Shape</th></tr>
<tr><td>Linear</td><td>\(y = 2x + 1\)</td><td>Straight line</td></tr>
<tr><td>Quadratic</td><td>\(y = x^2\)</td><td>Parabola</td></tr>
<tr><td>Cubic</td><td>\(y = x^3\)</td><td>S-shaped curve</td></tr>
<tr><td>Reciprocal</td><td>\(y = \dfrac1x\)</td><td>Two curves; asymptotes at the axes</td></tr>
<tr><td>Exponential (Higher)</td><td>\(y = 2^x\)</td><td>Through \((0, 1)\); grows rapidly</td></tr>
</table>
<p>Use a table of values to plot. Solve equations graphically by reading where a curve crosses the \(x\)-axis or another line: the solutions of \(x^2 - 3 = 0\) are where \(y = x^2 - 3\) meets \(y = 0\).</p>
<div class="box box-c"><span class="box-title">Higher: circles and trig graphs</span>\(x^2 + y^2 = r^2\) is a circle with centre \((0, 0)\) and radius \(r\). The tangent at a point is perpendicular to the radius.<br>\(y = \sin x\) and \(y = \cos x\) repeat every \(360^\circ\) and stay between \(-1\) and 1; \(y = \tan x\) repeats every \(180^\circ\), with asymptotes at \(90^\circ\), \(270^\circ\), …</div>
<div class="box box-c"><span class="box-title">Higher: transformations of \(y = f(x)\)</span>
<table><tr><th>Graph</th><th>Transformation</th></tr>
<tr><td>\(y = f(x) + a\)</td><td>Translate up \(a\): vector \(\binom{0}{a}\)</td></tr>
<tr><td>\(y = f(x + a)\)</td><td>Translate left \(a\): vector \(\binom{-a}{0}\)</td></tr>
<tr><td>\(y = -f(x)\)</td><td>Reflect in the \(x\)-axis</td></tr>
<tr><td>\(y = f(-x)\)</td><td>Reflect in the \(y\)-axis</td></tr></table>
Changes inside the bracket affect \(x\), and do the opposite of what you'd expect.</div>
`,
  quiz: [
    { q: "Which equation gives an S-shaped curve?", o: [R`\(y = x^3\)`, R`\(y = x^2\)`, R`\(y = \frac1x\)`, R`\(y = 2x\)`], a: 0, e: "Cubic graphs have the S shape." },
    { q: R`\(y = \dfrac1x\) has asymptotes at…`, o: ["Both axes", R`\(y = 1\)`, R`\(x = 1\)`, "No asymptotes"], a: 0, e: R`\(x\) can't be 0, and \(y\) never reaches 0.` },
    { q: R`Higher: \(y = 2^x\) crosses the \(y\)-axis at…`, o: [R`\((0, 1)\)`, R`\((0, 2)\)`, R`\((0, 0)\)`, R`\((1, 0)\)`], a: 0, e: R`\(2^0 = 1\).` },
    { q: R`Higher: \(x^2 + y^2 = 25\) is a circle of radius…`, o: ["5", "25", "12.5", R`\(\sqrt5\)`], a: 0, e: R`\(r^2 = 25\), so \(r = 5\).` },
    { q: R`Higher: \(y = f(x) + 3\) is a…`, o: ["Translation up 3", "Translation right 3", "Stretch", "Reflection"], a: 0, e: R`Adding outside the function adds 3 to every \(y\)-value.` },
    { q: R`Higher: \(y = f(x + 2)\) is a…`, o: ["Translation left 2", "Translation right 2", "Translation up 2", "Reflection"], a: 0, e: "Inside the bracket, the shift is the opposite way." },
    { q: R`Higher: \(y = -f(x)\) reflects in…`, o: [R`The \(x\)-axis`, R`The \(y\)-axis`, R`\(y = x\)`, "The origin only"], a: 0, e: R`Every \(y\)-value changes sign.` },
    { q: R`Higher: \(\sin x\) has a maximum value of…`, o: ["1", "90", "360", "0"], a: 0, e: R`It reaches 1 at \(x = 90^\circ\).` },
    { q: R`To solve \(x^2 - 3 = 0\) from a graph of \(y = x^2 - 3\), read where…`, o: [R`The curve crosses the \(x\)-axis`, R`It crosses the \(y\)-axis`, "It turns", R`\(x = 3\)`], a: 0, e: R`That's where \(y = 0\).` }
  ],
  flashcards: [
    ["Cubic graph", R`S-shaped (\(y = x^3\))`],
    ["Reciprocal graph", R`\(y = \frac kx\); asymptotes at the axes`],
    ["Exponential (Higher)", R`\(y = a^x\); through \((0, 1)\)`],
    ["Circle (Higher)", R`\(x^2 + y^2 = r^2\); centre the origin`],
    ["Tangent to a circle (Higher)", "Perpendicular to the radius"],
    [R`\(f(x) + a\) (Higher)`, R`Up \(a\)`],
    [R`\(f(x + a)\) (Higher)`, R`Left \(a\)`],
    [R`\(-f(x)\) / \(f(-x)\) (Higher)`, R`Reflect in the \(x\)-axis / \(y\)-axis`],
    ["Trig graph periods (Higher)", R`\(\sin\), \(\cos\): \(360^\circ\); \(\tan\): \(180^\circ\)`]
  ]
});

S2Data.add({
  id: "2h", group: 2, higher: true, title: "Functions, iteration, proof and algebraic fractions",
  summary: "Function notation, composite and inverse functions, iteration, algebraic proof and algebraic fractions.",
  notes: R`
<h3>Functions</h3>
<ul>
<li>\(f(x) = 3x - 2\) means "multiply by 3, then subtract 2". So \(f(4) = 3(4) - 2 = 10\).</li>
<li><b>Composite</b>: \(fg(x)\) means do \(g\) first, then \(f\). If \(g(x) = x^2\), then \(fg(x) = f(x^2) = 3x^2 - 2\).</li>
<li><b>Inverse</b> \(f^{-1}(x)\) undoes \(f\). Write \(y = 3x - 2\), swap \(x\) and \(y\): \(x = 3y - 2\), then rearrange: \(f^{-1}(x) = \dfrac{x + 2}{3}\).</li>
</ul>
<h3>Iteration</h3>
<p>Rearrange an equation into the form \(x = g(x)\), then use \(x_{n+1} = g(x_n)\) repeatedly to approach a root. If \(f(x)\) changes sign between two values, a root lies between them.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(x_0 = 1\), \(x_{n+1} = \dfrac{x_n + 3}{2}\).<br>\(x_1 = \dfrac{1 + 3}{2} = 2\), \(x_2 = \dfrac{2 + 3}{2} = 2.5\), \(x_3 = 2.75\), … approaching 3.</div>
<h3>Algebraic proof</h3>
<p>Even number: \(2n\). Odd number: \(2n + 1\). Consecutive integers: \(n\), \(n + 1\). To show something is a multiple of \(k\), factorise \(k\) out.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Prove that the sum of two consecutive odd numbers is a multiple of 4.
<ol><li>Let the numbers be \(2n + 1\) and \(2n + 3\).</li>
<li>Sum: \((2n + 1) + (2n + 3) = 4n + 4\).</li>
<li>\(= 4(n + 1)\), which is a multiple of 4.</li></ol></div>
<h3>Algebraic fractions</h3>
<ul>
<li>Simplify by factorising, then cancelling: \(\dfrac{x^2 - 9}{x + 3} = \dfrac{(x + 3)(x - 3)}{x + 3} = x - 3\).</li>
<li>Add or subtract with a common denominator: \[\frac{2}{x + 1} + \frac3x = \frac{2x + 3(x + 1)}{x(x + 1)} = \frac{5x + 3}{x(x + 1)}\]</li>
</ul>
`,
  quiz: [
    { q: R`\(f(x) = 3x - 2\). \(f(4) = \ ?\)`, o: ["10", "14", "12", "6"], a: 0, e: R`\(3 \times 4 - 2 = 10\).` },
    { q: R`\(f(x) = 3x - 2\). \(f^{-1}(x) = \ ?\)`, o: [R`\(\dfrac{x + 2}{3}\)`, R`\(\dfrac{x - 2}{3}\)`, R`\(3x + 2\)`, R`\(\dfrac{1}{3x - 2}\)`], a: 0, e: "Undo in reverse: add 2, then divide by 3." },
    { q: R`\(f(x) = x + 1\), \(g(x) = 2x\). \(fg(3) = \ ?\)`, o: ["7", "8", "6", "9"], a: 0, e: R`\(g(3) = 6\), then \(f(6) = 7\).` },
    { q: R`\(fg(x)\) means…`, o: [R`Apply \(g\) first, then \(f\)`, R`Apply \(f\) first`, R`Multiply \(f\) and \(g\)`, R`\(f\) divided by \(g\)`], a: 0, e: R`The function nearest \(x\) acts first.` },
    { q: "An odd number can be written as…", o: [R`\(2n + 1\)`, R`\(2n\)`, R`\(n + 1\)`, R`\(n^2\)`], a: 0, e: R`One more than an even number \(2n\).` },
    { q: R`Simplify \(\dfrac{x^2 - 9}{x + 3}\).`, o: [R`\(x - 3\)`, R`\(x + 3\)`, R`\(x - 9\)`, R`\(x\)`], a: 0, e: R`\(x^2 - 9 = (x + 3)(x - 3)\); cancel \(x + 3\).` },
    { q: R`A sign change of \(f(x)\) between \(x = 1\) and \(x = 2\) shows…`, o: ["A root lies between 1 and 2", "There's no root", R`\(f(1) = 0\)`, R`\(f\) is linear`], a: 0, e: R`The graph must cross \(y = 0\) somewhere between them (if it's continuous).` },
    { q: R`\(x_0 = 1\), \(x_{n+1} = \dfrac{x_n + 3}{2}\). \(x_1 = \ ?\)`, o: ["2", "1.5", "4", "3"], a: 0, e: R`\(\dfrac{1 + 3}{2} = 2\).` },
    { q: "The sum of two consecutive odd numbers is always a multiple of…", o: ["4", "3", "5", "6"], a: 0, e: R`\((2n + 1) + (2n + 3) = 4(n + 1)\).` }
  ],
  flashcards: [
    [R`Composite \(fg(x)\)`, R`Do \(g\) first, then \(f\)`],
    ["Inverse function", R`Swap \(x\) and \(y\), rearrange for \(y\)`],
    ["Iteration", R`\(x_{n+1} = g(x_n)\), repeat`],
    ["Sign change", "A root lies between the two values"],
    ["Even / odd in proof", R`\(2n\) / \(2n + 1\)`],
    [R`Showing a multiple of \(k\)`, R`Factorise \(k\) out of the expression`],
    ["Simplifying algebraic fractions", "Factorise, then cancel common factors"],
    ["Adding algebraic fractions", "Common denominator; combine numerators"]
  ]
});

S2Data.detail("2a", { mistakes: [R`Expanding \((x + 3)^2\) as \(x^2 + 9\). It's \((x + 3)(x + 3) = x^2 + 6x + 9\).`], tips: ["Check factorising by expanding your answer back out."], fact: "The letter x for an unknown was popularised by Descartes in 1637." });
S2Data.detail("2b", { mistakes: ["Forgetting to flip the inequality sign when dividing by a negative."], tips: [R`For integer solutions, check whether each end value is included (\(\le\)) or not (\(<\)).`], fact: "Inequalities are used in linear programming to plan airline schedules and factory production." });
S2Data.detail("2c", { mistakes: [R`Writing the \(n\)th term of 5, 8, 11 as \(n + 3\). The coefficient of \(n\) is the common difference: \(3n + 2\).`], tips: [R`Check your \(n\)th term by substituting \(n = 1\) and \(n = 2\).`], fact: "Fibonacci introduced Hindu–Arabic numerals to Europe in his 1202 book Liber Abaci." });
S2Data.detail("2d", { mistakes: [R`Calculating the gradient as change in \(x\) over change in \(y\). It's rise over run: \(\frac{\Delta y}{\Delta x}\).`], tips: [R`Rearrange any line into \(y = mx + c\) before reading off the gradient.`], fact: "Road signs show gradients as percentages: a 10% hill rises 10 m every 100 m." });
S2Data.detail("2e", { mistakes: [R`Dividing both sides by \(x\) when solving \(x^2 = 5x\), losing the solution \(x = 0\). Factorise instead: \(x(x - 5) = 0\).`], tips: ["If the question says 'give answers to 2 d.p.', it won't factorise: use the formula."], fact: "The Babylonians solved quadratic equations on clay tablets nearly 4000 years ago." });
S2Data.detail("2f", { mistakes: ["Subtracting equations but forgetting to subtract every term, including negatives."], tips: ["Label your equations (1) and (2) and show which you add or subtract."], fact: "Simultaneous equations with thousands of unknowns are solved by computers to model weather." });
S2Data.detail("2g", { mistakes: [R`Thinking \(f(x + 2)\) moves the graph right. It moves left by 2.`], tips: ["For transformations, track a key point such as the turning point."], fact: "Exponential growth explains why a sheet of paper folded 42 times would reach the Moon." });
S2Data.detail("2h", { mistakes: [R`Doing \(fg(x)\) in the wrong order. \(g\) is applied first.`], tips: ["In proof questions, finish with a sentence: 'which is a multiple of 4'."], fact: "Proof by induction lets mathematicians prove statements about infinitely many numbers." });
