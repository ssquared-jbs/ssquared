/* A-level Maths² — Pure: proof, algebra, coordinate geometry, sequences and series */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "Proof",
  summary: "Proof by deduction, exhaustion, counter-example and (Year 13) contradiction.",
  notes: `
<h3>Notation</h3>
<p>⇒ "implies", ⇐ "is implied by", ⇔ "if and only if". ∈ "is a member of"; ℤ integers, ℕ natural numbers, ℚ rationals, ℝ reals.</p>
<h3>Proof by deduction</h3>
<p>Start from known facts and use logical steps. Use 2n for even, 2n + 1 for odd, n and n + 1 for consecutive integers.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Prove n<sup>2</sup> − n is always even.<br>n<sup>2</sup> − n = n(n − 1), a product of two consecutive integers, one of which is even. So the product is even. ∎</div>
<h3>Proof by exhaustion</h3>
<p>Split into a finite set of cases and check every one, e.g. n even and n odd, or every integer from 1 to 10.</p>
<h3>Disproof by counter-example</h3>
<p>One example where the statement fails is enough. "All primes are odd" is false: 2.</p>
<div class="box box-c"><span class="box-title">Year 13: proof by contradiction</span>Assume the opposite is true and show it leads to something impossible.<br><b>√2 is irrational</b>: assume √2 = a/b in lowest terms. Then a<sup>2</sup> = 2b<sup>2</sup>, so a is even: a = 2k. Then 4k<sup>2</sup> = 2b<sup>2</sup>, so b<sup>2</sup> = 2k<sup>2</sup> and b is even. Both even contradicts lowest terms. ∎<br><b>Infinitely many primes</b>: assume a finite list p₁…pₙ. Then p₁p₂…pₙ + 1 is not divisible by any of them, contradiction.</div>
<p>Finish every proof with a concluding statement.</p>
`,
  quiz: [
    { q: "Which proves 'all primes are odd' is false?", o: ["2", "3", "9", "1"], a: 0, e: "" },
    { q: "Proof by exhaustion means…", o: ["Checking every possible case", "Assuming the opposite", "Finding one example", "Drawing a graph"], a: 0, e: "" },
    { q: "To represent any odd integer use…", o: ["2n + 1", "2n", "n + 1", "n²"], a: 0, e: "" },
    { q: "Proof by contradiction starts by…", o: ["Assuming the statement is false", "Testing examples", "Drawing a diagram", "Listing cases"], a: 0, e: "" },
    { q: "A ⇔ B means…", o: ["A if and only if B", "A implies B only", "A is not B", "A or B"], a: 0, e: "" },
    { q: "n(n + 1) is always…", o: ["Even", "Odd", "Prime", "A square"], a: 0, e: "" },
    { q: "ℚ is the set of…", o: ["Rational numbers", "Integers", "Real numbers", "Natural numbers"], a: 0, e: "" },
    { q: "One counter-example is enough to…", o: ["Disprove a general statement", "Prove a statement", "Prove by exhaustion", "Show something is true for all n"], a: 0, e: "" },
    { q: "In the proof that √2 is irrational, the contradiction is that…", o: ["a and b are both even, but a/b was in lowest terms", "a is odd", "√2 is an integer", "b = 0"], a: 0, e: "" }
  ],
  flashcards: [
    ["Deduction", "Logical steps from known facts"],
    ["Exhaustion", "Check every case (e.g. n odd and n even)"],
    ["Counter-example", "One case where it fails disproves it"],
    ["Contradiction (Y13)", "Assume the opposite; reach something impossible"],
    ["Even / odd", "2n / 2n + 1"],
    ["⇒ / ⇔", "Implies / if and only if"],
    ["√2 irrational", "a² = 2b² forces a and b both even: contradiction"],
    ["Infinitely many primes", "Product of all primes + 1 has no factor in the list"]
  ]
});

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Indices and surds",
  summary: "Laws of indices including fractional and negative powers, simplifying surds and rationalising.",
  notes: `
<h3>Laws of indices</h3>
<p>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>; a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup>; (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>; a<sup>0</sup> = 1; a<sup>−n</sup> = 1/a<sup>n</sup>; a<sup>m/n</sup> = (ⁿ√a)<sup>m</sup>.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Write (2x<sup>3</sup> − √x)/x<sup>2</sup> in the form ax<sup>p</sup> + bx<sup>q</sup>.<br>= 2x<sup>3</sup>/x<sup>2</sup> − x<sup>1/2</sup>/x<sup>2</sup> = <b>2x − x<sup>−3/2</sup></b>. (This is how you prepare to differentiate or integrate.)</div>
<h3>Surds</h3>
<ul>
<li>√(ab) = √a√b; √(a/b) = √a/√b.</li>
<li>Simplify: √72 = √36 × √2 = 6√2.</li>
<li>Rationalise: 1/√a = √a/a; 1/(a + √b) — multiply by (a − √b)/(a − √b).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>(5 + √3)/(2 − √3) = (5 + √3)(2 + √3)/(4 − 3) = 10 + 5√3 + 2√3 + 3 = <b>13 + 7√3</b>.</div>
<p>Solving index equations: write both sides as powers of the same base. 4<sup>x</sup> = 8 → 2<sup>2x</sup> = 2<sup>3</sup> → x = 3/2.</p>
`,
  quiz: [
    { q: "x^(1/2) × x^(3/2) = …", o: ["x²", "x^(3/4)", "x³", "2x"], a: 0, e: "" },
    { q: "16^(−3/4) = …", o: ["1/8", "−12", "8", "1/12"], a: 0, e: "" },
    { q: "√72 simplified?", o: ["6√2", "2√18", "3√8", "36√2"], a: 0, e: "" },
    { q: "Rationalise 2/√5.", o: ["2√5/5", "√5/2", "2√5", "5/2√5"], a: 0, e: "" },
    { q: "(√3 + 1)(√3 − 1) = …", o: ["2", "4", "3 − 1√3", "√3"], a: 0, e: "" },
    { q: "Solve 4ˣ = 8.", o: ["x = 3/2", "x = 2", "x = 1/2", "x = 4"], a: 0, e: "" },
    { q: "1/√x as a power of x?", o: ["x^(−1/2)", "x^(1/2)", "x^(−2)", "−x^(1/2)"], a: 0, e: "" },
    { q: "To rationalise 1/(3 + √2), multiply by…", o: ["(3 − √2)/(3 − √2)", "√2/√2", "(3 + √2)/(3 + √2)", "3/3"], a: 0, e: "" },
    { q: "(x³)^(2/3) = …", o: ["x²", "x^(9/2)", "x^(5/3)", "x³"], a: 0, e: "" }
  ],
  flashcards: [
    ["aᵐ × aⁿ / aᵐ ÷ aⁿ", "aᵐ⁺ⁿ / aᵐ⁻ⁿ"],
    ["a^(m/n)", "(ⁿ√a)ᵐ"],
    ["a⁻ⁿ", "1/aⁿ"],
    ["√(ab)", "√a × √b"],
    ["Rationalise 1/√a", "√a/a"],
    ["Rationalise 1/(a + √b)", "Multiply by (a − √b): denominator a² − b"],
    ["Index equations", "Write both sides with the same base"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Quadratics",
  summary: "Solving quadratics, completing the square, the discriminant and quadratics in disguise.",
  notes: `
<h3>Solving</h3>
<p>Factorise, complete the square, or use the formula x = [−b ± √(b<sup>2</sup> − 4ac)]/2a.</p>
<h3>Completing the square</h3>
<p>ax<sup>2</sup> + bx + c = a(x + b/2a)<sup>2</sup> + (c − b<sup>2</sup>/4a). The turning point of y = a(x + p)<sup>2</sup> + q is (−p, q); it's a minimum if a &gt; 0.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>2x<sup>2</sup> − 12x + 7 = 2(x<sup>2</sup> − 6x) + 7 = 2[(x − 3)<sup>2</sup> − 9] + 7 = <b>2(x − 3)<sup>2</sup> − 11</b>. Minimum point (3, −11).</div>
<h3>The discriminant b<sup>2</sup> − 4ac</h3>
<ul><li>&gt; 0: two distinct real roots</li><li>= 0: one repeated root (graph touches the x-axis)</li><li>&lt; 0: no real roots</li></ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Find k so that x<sup>2</sup> + kx + 9 = 0 has equal roots: k<sup>2</sup> − 36 = 0, <b>k = ±6</b>.</div>
<h3>Quadratics in disguise</h3>
<p>x<sup>4</sup> − 5x<sup>2</sup> + 4 = 0: let u = x<sup>2</sup>, so u<sup>2</sup> − 5u + 4 = 0, u = 1 or 4, x = ±1, ±2. Similarly with x<sup>1/2</sup> or 2<sup>x</sup>.</p>
<h3>Sketching</h3>
<p>Mark the y-intercept, roots and turning point. The line of symmetry is x = −b/2a.</p>
`,
  quiz: [
    { q: "x² + 6x + 1 in completed square form?", o: ["(x + 3)² − 8", "(x + 6)² + 1", "(x + 3)² + 1", "(x − 3)² − 8"], a: 0, e: "" },
    { q: "The minimum of y = 2(x − 3)² − 11 is at…", o: ["(3, −11)", "(−3, −11)", "(3, 11)", "(2, −11)"], a: 0, e: "" },
    { q: "b² − 4ac = 0 means…", o: ["One repeated root", "Two distinct roots", "No real roots", "Infinitely many roots"], a: 0, e: "" },
    { q: "x² + kx + 9 = 0 has equal roots when k = …", o: ["±6", "±3", "±9", "±36"], a: 0, e: "" },
    { q: "Discriminant of 3x² − 2x + 5?", o: ["−56", "64", "−64", "56"], a: 0, e: "" },
    { q: "Line of symmetry of y = x² − 8x + 3?", o: ["x = 4", "x = −4", "x = 8", "x = 3"], a: 0, e: "" },
    { q: "Solve x⁴ − 5x² + 4 = 0 using…", o: ["u = x²", "u = x⁴", "The formula on x directly", "Logs"], a: 0, e: "" },
    { q: "y = −x² + 4x has a…", o: ["Maximum", "Minimum", "Asymptote", "Point of inflection only"], a: 0, e: "" },
    { q: "For no real roots…", o: ["b² − 4ac < 0", "b² − 4ac > 0", "b² − 4ac = 0", "a < 0"], a: 0, e: "" }
  ],
  flashcards: [
    ["Quadratic formula", "x = [−b ± √(b² − 4ac)]/2a"],
    ["Completing the square", "x² + bx = (x + b/2)² − (b/2)²"],
    ["Turning point of a(x + p)² + q", "(−p, q)"],
    ["Discriminant > 0", "Two distinct real roots"],
    ["Discriminant = 0", "Repeated root; graph touches x-axis"],
    ["Discriminant < 0", "No real roots"],
    ["Quadratic in disguise", "Substitute u = x², x^(1/2), 2ˣ…"],
    ["Line of symmetry", "x = −b/2a"]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "Equations and inequalities",
  summary: "Simultaneous equations, linear and quadratic inequalities, and regions.",
  notes: `
<h3>Simultaneous equations</h3>
<p>Linear: elimination or substitution. Linear + quadratic: rearrange the linear one and substitute into the quadratic.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>x + y = 5 and x<sup>2</sup> + y<sup>2</sup> = 13: y = 5 − x, so x<sup>2</sup> + (5 − x)<sup>2</sup> = 13 → 2x<sup>2</sup> − 10x + 12 = 0 → x = 2 or 3; points (2, 3), (3, 2).</div>
<p>The number of intersections of a line and a curve can be found with the discriminant of the resulting quadratic: two, one (tangent) or none.</p>
<h3>Inequalities</h3>
<ul>
<li>Linear: as for equations, flipping the sign when multiplying/dividing by a negative.</li>
<li>Quadratic: find the critical values, sketch, then read off. x<sup>2</sup> − x − 6 &gt; 0 → (x − 3)(x + 2) &gt; 0 → <b>x &lt; −2 or x &gt; 3</b>.</li>
<li>Set notation: {x : x &lt; −2} ∪ {x : x &gt; 3}; between roots: {x : −2 &lt; x &lt; 3}.</li>
<li>Don't multiply by an expression whose sign is unknown; multiply by its square instead.</li>
</ul>
<h3>Regions</h3>
<p>Draw boundaries (dashed for strict inequalities, solid otherwise) and shade the region required. Check with a test point.</p>
`,
  quiz: [
    { q: "Solve x² − x − 6 > 0.", o: ["x < −2 or x > 3", "−2 < x < 3", "x > 3", "x < −2"], a: 0, e: "" },
    { q: "Solve x² ≤ 16.", o: ["−4 ≤ x ≤ 4", "x ≤ 4", "x ≤ −4 or x ≥ 4", "x ≥ ±4"], a: 0, e: "" },
    { q: "A line is tangent to a curve when the resulting quadratic has…", o: ["Discriminant 0", "Discriminant > 0", "Discriminant < 0", "a = 0"], a: 0, e: "" },
    { q: "In set notation, x < 1 or x > 4 is…", o: ["{x : x < 1} ∪ {x : x > 4}", "{x : x < 1} ∩ {x : x > 4}", "{x : 1 < x < 4}", "{1, 4}"], a: 0, e: "" },
    { q: "On a graph, y < 2x + 1 has a boundary that's…", o: ["Dashed", "Solid", "Dotted and shaded", "Not drawn"], a: 0, e: "" },
    { q: "Solve 3 − 2x ≥ 7.", o: ["x ≤ −2", "x ≥ −2", "x ≤ 2", "x ≥ 2"], a: 0, e: "" },
    { q: "x + y = 5, x² + y² = 13 has solutions…", o: ["(2, 3) and (3, 2)", "(1, 4) only", "(2, 3) only", "None"], a: 0, e: "" },
    { q: "Why not multiply both sides of 2/x < 1 by x?", o: ["x could be negative", "x could be zero only", "It's not allowed ever", "It makes it quadratic"], a: 0, e: "" },
    { q: "Critical values of (x − 1)(x − 5) < 0?", o: ["1 and 5", "−1 and −5", "0 and 5", "1 and −5"], a: 0, e: "" }
  ],
  flashcards: [
    ["Linear + quadratic", "Substitute the linear into the quadratic"],
    ["Line meets curve", "Discriminant >0: 2 points; =0: tangent; <0: none"],
    ["Quadratic inequality", "Critical values → sketch → read region"],
    ["(x − a)(x − b) > 0, a < b", "x < a or x > b"],
    ["(x − a)(x − b) < 0, a < b", "a < x < b"],
    ["Strict / non-strict boundary", "Dashed / solid"],
    ["Unknown-sign multiplier", "Multiply by its square instead"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Graphs and transformations",
  summary: "Sketching cubics, quartics and reciprocal graphs, intersections, proportion and transformations.",
  notes: `
<h3>Sketching</h3>
<ul>
<li><b>Cubics</b>: y = (x − a)(x − b)(x − c) crosses at a, b, c; positive x<sup>3</sup> coefficient goes bottom-left to top-right. A repeated root (x − a)<sup>2</sup> touches the axis.</li>
<li><b>Quartics</b>: positive x<sup>4</sup> coefficient — both ends up.</li>
<li><b>Reciprocal</b>: y = k/x (two branches in quadrants 1 and 3 if k &gt; 0); y = k/x<sup>2</sup> (both branches above the axis if k &gt; 0). Asymptotes x = 0 and y = 0.</li>
</ul>
<p>Points of intersection of two curves give solutions of the equation formed by setting them equal.</p>
<h3>Proportion</h3>
<p>y ∝ x: straight line through the origin. y ∝ 1/x: reciprocal graph.</p>
<h3>Transformations of y = f(x)</h3>
<table>
<tr><th>Graph</th><th>Transformation</th></tr>
<tr><td>f(x) + a</td><td>Translate by (0, a)</td></tr>
<tr><td>f(x + a)</td><td>Translate by (−a, 0)</td></tr>
<tr><td>af(x)</td><td>Stretch parallel to the y-axis, scale factor a</td></tr>
<tr><td>f(ax)</td><td>Stretch parallel to the x-axis, scale factor 1/a</td></tr>
<tr><td>−f(x) / f(−x)</td><td>Reflect in the x-axis / y-axis</td></tr>
</table>
<p>Track key points and asymptotes. y = 1/(x − 2) + 3 has asymptotes x = 2, y = 3.</p>
<div class="box box-c"><span class="box-title">Year 13: modulus graphs</span>y = |f(x)|: reflect the parts below the x-axis upwards. y = f(|x|): reflect the right-hand side in the y-axis.</div>
`,
  quiz: [
    { q: "y = (x − 1)²(x + 2) at x = 1…", o: ["Touches the x-axis", "Crosses the x-axis", "Has an asymptote", "Is undefined"], a: 0, e: "" },
    { q: "y = f(2x) is a stretch…", o: ["Parallel to the x-axis, scale factor ½", "Parallel to the x-axis, scale factor 2", "Parallel to the y-axis, scale factor 2", "Parallel to the y-axis, scale factor ½"], a: 0, e: "" },
    { q: "y = 3f(x) is a stretch…", o: ["Parallel to the y-axis, scale factor 3", "Parallel to the x-axis, scale factor 3", "Parallel to the x-axis, scale factor 1/3", "Translation up 3"], a: 0, e: "" },
    { q: "Asymptotes of y = 1/(x − 2) + 3?", o: ["x = 2, y = 3", "x = −2, y = 3", "x = 2, y = −3", "x = 3, y = 2"], a: 0, e: "" },
    { q: "y = −x³ goes…", o: ["Top-left to bottom-right", "Bottom-left to top-right", "Both ends up", "Both ends down"], a: 0, e: "" },
    { q: "y = 4/x² lies…", o: ["Entirely above the x-axis", "In quadrants 1 and 3", "Below the x-axis", "Through the origin"], a: 0, e: "" },
    { q: "y = f(x + 3) moves the graph…", o: ["3 left", "3 right", "3 up", "3 down"], a: 0, e: "" },
    { q: "Y13: y = |f(x)| …", o: ["Reflects negative parts in the x-axis", "Reflects the left half", "Stretches the graph", "Moves it up"], a: 0, e: "" },
    { q: "Where does y = x(x − 3)(x + 4) cross the x-axis?", o: ["0, 3, −4", "0, −3, 4", "3, 4", "0 only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Repeated root", "Graph touches the axis there"],
    ["y = k/x vs y = k/x²", "Quadrants 1 & 3 vs both above the axis (k > 0)"],
    ["f(x) + a", "Translate (0, a)"],
    ["f(x + a)", "Translate (−a, 0)"],
    ["af(x)", "Stretch ∥ y-axis, s.f. a"],
    ["f(ax)", "Stretch ∥ x-axis, s.f. 1/a"],
    ["−f(x) / f(−x)", "Reflect in x-axis / y-axis"],
    ["|f(x)| (Y13)", "Negative parts reflected up"]
  ]
});

S2Data.add({
  id: "2e", group: 2, y1: true, title: "Polynomials and the factor theorem",
  summary: "Algebraic division, the factor theorem and factorising cubics.",
  notes: `
<h3>The factor theorem</h3>
<p>If f(a) = 0, then (x − a) is a factor of f(x). More generally, if f(b/a) = 0 then (ax − b) is a factor.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>f(x) = x<sup>3</sup> − 2x<sup>2</sup> − 5x + 6. f(1) = 1 − 2 − 5 + 6 = 0, so (x − 1) is a factor.<br>Divide: f(x) = (x − 1)(x<sup>2</sup> − x − 6) = <b>(x − 1)(x − 3)(x + 2)</b>.</div>
<h3>Algebraic division</h3>
<p>Use long division or compare coefficients. To divide by (x − 1): write f(x) = (x − 1)(ax<sup>2</sup> + bx + c) and match terms.</p>
<h3>Finding unknown coefficients</h3>
<p>If (x + 2) is a factor of x<sup>3</sup> + px<sup>2</sup> − 4, then f(−2) = 0: −8 + 4p − 4 = 0, so p = 3.</p>
<h3>Expanding and simplifying</h3>
<p>Multiply each term in the first bracket by each term in the others; collect like terms. Simplify algebraic fractions by factorising and cancelling: (x<sup>2</sup> − 9)/(x<sup>2</sup> + x − 6) = (x − 3)/(x − 2).</p>
`,
  quiz: [
    { q: "f(2) = 0 means…", o: ["(x − 2) is a factor", "(x + 2) is a factor", "2 is a coefficient", "f has no roots"], a: 0, e: "" },
    { q: "f(x) = x³ − 2x² − 5x + 6. f(1) = …", o: ["0", "1", "−2", "6"], a: 0, e: "" },
    { q: "x³ − 2x² − 5x + 6 fully factorised?", o: ["(x − 1)(x − 3)(x + 2)", "(x + 1)(x + 3)(x − 2)", "(x − 1)(x + 3)(x − 2)", "(x − 6)(x + 1)²"], a: 0, e: "" },
    { q: "If (2x − 1) is a factor, then…", o: ["f(½) = 0", "f(2) = 0", "f(−½) = 0", "f(1) = 0"], a: 0, e: "" },
    { q: "(x + 2) is a factor of x³ + px² − 4. p = …", o: ["3", "−3", "2", "1"], a: 0, e: "" },
    { q: "Simplify (x² − 9)/(x² + x − 6).", o: ["(x − 3)/(x − 2)", "(x + 3)/(x − 2)", "(x − 3)/(x + 2)", "x − 3"], a: 0, e: "" },
    { q: "Expanding (x + 1)³ gives…", o: ["x³ + 3x² + 3x + 1", "x³ + 1", "x³ + 3x + 1", "x³ + x² + x + 1"], a: 0, e: "" },
    { q: "Dividing x³ − 1 by (x − 1) gives…", o: ["x² + x + 1", "x² − 1", "x² − x + 1", "x² + 1"], a: 0, e: "" },
    { q: "A cubic can have at most how many real roots?", o: ["3", "2", "4", "1"], a: 0, e: "" }
  ],
  flashcards: [
    ["Factor theorem", "f(a) = 0 ⇔ (x − a) is a factor"],
    ["(ax − b) a factor", "f(b/a) = 0"],
    ["Factorising a cubic", "Find a root by trial, divide, factorise the quadratic"],
    ["Algebraic division", "Long division or compare coefficients"],
    ["Unknown coefficient", "Use f(root) = 0 and solve"],
    ["Simplifying algebraic fractions", "Factorise top and bottom, cancel"]
  ]
});

S2Data.add({
  id: "2f", group: 2, y2: true, title: "Functions and modulus",
  summary: "Domain and range, composite and inverse functions, and modulus equations.",
  notes: `
<h3>Domain and range</h3>
<p>The <b>domain</b> is the set of inputs; the <b>range</b> is the set of outputs. A function is one-to-one or many-to-one; one-to-many mappings are not functions.</p>
<p>f(x) = x<sup>2</sup> + 3, x ∈ ℝ has range f(x) ≥ 3.</p>
<h3>Composite functions</h3>
<p>fg(x) = f(g(x)): apply g first. The range of g must lie in the domain of f.</p>
<h3>Inverse functions</h3>
<ul>
<li>Exist only for one-to-one functions (restrict the domain if needed).</li>
<li>Find by writing y = f(x), swapping x and y, rearranging.</li>
<li>Domain of f<sup>−1</sup> = range of f, and vice versa. y = f<sup>−1</sup>(x) is the reflection of y = f(x) in y = x.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>f(x) = (2x + 1)/(x − 3), x ≠ 3. y(x − 3) = 2x + 1 → xy − 2x = 3y + 1 → f<sup>−1</sup>(x) = <b>(3x + 1)/(x − 2)</b>, x ≠ 2.</div>
<h3>Modulus</h3>
<p>|x| is the non-negative value of x. Solve |2x − 1| = 5 → 2x − 1 = 5 or −5 → x = 3 or −2. For |f(x)| = g(x), sketch both graphs to see how many solutions exist and check each answer.</p>
<p>|x − a| &lt; b ⇔ a − b &lt; x &lt; a + b.</p>
`,
  quiz: [
    { q: "f(x) = x² + 3, x ∈ ℝ. Range?", o: ["f(x) ≥ 3", "f(x) ∈ ℝ", "f(x) > 0", "f(x) ≤ 3"], a: 0, e: "" },
    { q: "fg(x) means…", o: ["Apply g first, then f", "Apply f first", "f × g", "f + g"], a: 0, e: "" },
    { q: "A function has an inverse only if it is…", o: ["One-to-one", "Many-to-one", "Quadratic", "Continuous"], a: 0, e: "" },
    { q: "The graph of f⁻¹ is a reflection of f in…", o: ["y = x", "The x-axis", "The y-axis", "y = −x"], a: 0, e: "" },
    { q: "Domain of f⁻¹ equals…", o: ["Range of f", "Domain of f", "ℝ always", "The x-axis"], a: 0, e: "" },
    { q: "Solve |2x − 1| = 5.", o: ["x = 3 or −2", "x = 3", "x = −2", "x = 2 or −3"], a: 0, e: "" },
    { q: "|x − 2| < 3 ⇔ …", o: ["−1 < x < 5", "x < 5", "−5 < x < 1", "x > −1"], a: 0, e: "" },
    { q: "f(x) = 2x + 1, g(x) = x². gf(1) = …", o: ["9", "3", "5", "4"], a: 0, e: "" },
    { q: "f(x) = eˣ. f⁻¹(x) = …", o: ["ln x", "e⁻ˣ", "1/eˣ", "log₁₀ x"], a: 0, e: "" }
  ],
  flashcards: [
    ["Domain / range", "Inputs / outputs"],
    ["Composite fg(x)", "f(g(x)): g first"],
    ["Inverse exists if…", "The function is one-to-one"],
    ["Finding f⁻¹", "y = f(x), swap x and y, rearrange"],
    ["Graph of f⁻¹", "Reflection of f in y = x"],
    ["Domain of f⁻¹", "Range of f"],
    ["|x − a| < b", "a − b < x < a + b"],
    ["Modulus equations", "Sketch, solve both cases, check"]
  ]
});

S2Data.add({
  id: "2g", group: 2, y2: true, title: "Partial fractions",
  summary: "Splitting rational expressions into partial fractions, including repeated factors and improper fractions.",
  notes: `
<h3>Linear factors</h3>
<p>(5x + 1)/((x − 1)(x + 2)) ≡ A/(x − 1) + B/(x + 2). Multiply through: 5x + 1 ≡ A(x + 2) + B(x − 1).</p>
<ul><li>x = 1: 6 = 3A, A = 2.</li><li>x = −2: −9 = −3B, B = 3.</li></ul>
<h3>Repeated factors</h3>
<p>f(x)/((x + 1)(x − 2)<sup>2</sup>) ≡ A/(x + 1) + B/(x − 2) + C/(x − 2)<sup>2</sup>. Substitute convenient x-values, then compare coefficients for the last unknown.</p>
<h3>Improper fractions</h3>
<p>If the degree of the numerator ≥ the degree of the denominator, divide first: (x<sup>2</sup> + 3x + 1)/((x + 1)(x + 2)) = 1 + (−1)/((x + 1)(x + 2))…, then split the remainder.</p>
<p><b>Uses</b>: integrating rational functions, and binomial expansion of rational expressions (each partial fraction expanded separately).</p>
`,
  quiz: [
    { q: "(5x + 1)/((x − 1)(x + 2)) = A/(x − 1) + B/(x + 2). A = …", o: ["2", "3", "1", "5"], a: 0, e: "" },
    { q: "In the same question, B = …", o: ["3", "2", "−3", "1"], a: 0, e: "" },
    { q: "Partial fractions for 1/(x(x − 2)²) need terms…", o: ["A/x + B/(x − 2) + C/(x − 2)²", "A/x + B/(x − 2)²", "A/x + B/(x − 2)", "A/(x(x − 2))"], a: 0, e: "" },
    { q: "A fraction is improper when…", o: ["Numerator degree ≥ denominator degree", "The denominator is quadratic", "There's a repeated factor", "The numerator is constant"], a: 0, e: "" },
    { q: "Partial fractions help with…", o: ["Integration and binomial expansion", "Solving quadratics only", "Differentiation only", "Proof by contradiction"], a: 0, e: "" },
    { q: "1/((x + 1)(x + 3)) = A/(x + 1) + B/(x + 3). A = …", o: ["1/2", "−1/2", "1", "2"], a: 0, e: "" },
    { q: "In the same question, B = …", o: ["−1/2", "1/2", "1", "−1"], a: 0, e: "" },
    { q: "Best first step for an improper fraction?", o: ["Algebraic division", "Substitute x = 0", "Compare coefficients", "Differentiate"], a: 0, e: "" },
    { q: "The substitution method works by choosing x to…", o: ["Make a bracket zero", "Make everything zero", "Make the numerator zero", "Remove A"], a: 0, e: "" }
  ],
  flashcards: [
    ["Linear factors", "A/(x − a) + B/(x − b)"],
    ["Repeated factor (x − a)²", "B/(x − a) + C/(x − a)²"],
    ["Finding constants", "Multiply through; substitute roots; compare coefficients"],
    ["Improper fraction", "Divide first"],
    ["Uses", "Integration; binomial expansion"]
  ]
});

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Straight lines and circles",
  summary: "Equations of lines, parallel and perpendicular lines, and equations of circles with tangents and chords.",
  notes: `
<h3>Straight lines</h3>
<ul>
<li>y − y₁ = m(x − x₁); or y = mx + c; or ax + by + c = 0 (integers).</li>
<li>Gradient m = (y₂ − y₁)/(x₂ − x₁). Parallel: equal m. Perpendicular: m₁m₂ = −1.</li>
<li>Distance = √((x₂ − x₁)<sup>2</sup> + (y₂ − y₁)<sup>2</sup>); midpoint = average of coordinates.</li>
</ul>
<h3>Circles</h3>
<p>(x − a)<sup>2</sup> + (y − b)<sup>2</sup> = r<sup>2</sup>: centre (a, b), radius r.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>x<sup>2</sup> + y<sup>2</sup> − 6x + 4y − 12 = 0.<br>(x − 3)<sup>2</sup> − 9 + (y + 2)<sup>2</sup> − 4 − 12 = 0 → (x − 3)<sup>2</sup> + (y + 2)<sup>2</sup> = 25. Centre (3, −2), radius 5.</div>
<h3>Circle properties</h3>
<ul>
<li>The tangent at a point is perpendicular to the radius there.</li>
<li>The perpendicular bisector of a chord passes through the centre.</li>
<li>The angle in a semicircle is 90°: if AB is a diameter, angle ACB = 90°.</li>
<li>The centre of the circle through three points (circumcircle) is where perpendicular bisectors meet.</li>
</ul>
<p>A line meets a circle in 2, 1 or 0 points: substitute and use the discriminant.</p>
`,
  quiz: [
    { q: "Centre and radius of (x − 3)² + (y + 2)² = 25?", o: ["(3, −2), 5", "(−3, 2), 5", "(3, −2), 25", "(3, 2), 5"], a: 0, e: "" },
    { q: "Gradient perpendicular to 3x + 2y = 6?", o: ["2/3", "−3/2", "3/2", "−2/3"], a: 0, e: "" },
    { q: "The tangent to a circle is perpendicular to…", o: ["The radius at that point", "The diameter", "The x-axis", "The chord"], a: 0, e: "" },
    { q: "The perpendicular bisector of a chord passes through…", o: ["The centre", "The tangent point", "The origin", "The circumference"], a: 0, e: "" },
    { q: "Centre of x² + y² + 8x − 2y = 0?", o: ["(−4, 1)", "(4, −1)", "(8, −2)", "(−8, 2)"], a: 0, e: "" },
    { q: "Line through (2, 5) with gradient 3?", o: ["y − 5 = 3(x − 2)", "y − 2 = 3(x − 5)", "y = 3x + 5", "y + 5 = 3(x + 2)"], a: 0, e: "" },
    { q: "Distance from (1, 2) to (4, 6)?", o: ["5", "7", "√7", "25"], a: 0, e: "" },
    { q: "If AB is a diameter and C is on the circle, angle ACB = …", o: ["90°", "180°", "45°", "60°"], a: 0, e: "" },
    { q: "A line is a tangent to a circle when the substituted quadratic has…", o: ["b² − 4ac = 0", "b² − 4ac > 0", "b² − 4ac < 0", "a = 0"], a: 0, e: "" }
  ],
  flashcards: [
    ["Point–gradient form", "y − y₁ = m(x − x₁)"],
    ["Perpendicular gradients", "m₁m₂ = −1"],
    ["Circle equation", "(x − a)² + (y − b)² = r²"],
    ["Expanded circle", "Complete the square in x and y"],
    ["Tangent", "Perpendicular to the radius"],
    ["Chord's perpendicular bisector", "Passes through the centre"],
    ["Angle in a semicircle", "90°"],
    ["Line and circle", "Substitute; discriminant gives 2, 1, 0 points"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y2: true, title: "Parametric equations",
  summary: "Curves defined parametrically, converting to Cartesian form and modelling.",
  notes: `
<h3>Parametric curves</h3>
<p>x = f(t), y = g(t). Each value of the parameter t gives a point.</p>
<h3>Converting to Cartesian</h3>
<ul>
<li>Rearrange one equation for t and substitute: x = 2t + 1, y = t<sup>2</sup> → t = (x − 1)/2, y = (x − 1)<sup>2</sup>/4.</li>
<li>With trig, use an identity: x = 3cos t, y = 3sin t → x<sup>2</sup> + y<sup>2</sup> = 9 (a circle).</li>
<li>x = cos t, y = cos 2t → y = 2x<sup>2</sup> − 1 (using cos 2t = 2cos<sup>2</sup>t − 1).</li>
</ul>
<p>The domain of the Cartesian form comes from the range of x(t): for x = 3cos t, −3 ≤ x ≤ 3.</p>
<h3>Intersections</h3>
<p>To find where a parametric curve meets a line, substitute x(t) and y(t) into the line equation and solve for t.</p>
<h3>Modelling</h3>
<p>Projectile paths: x = ut cos θ, y = ut sin θ − ½gt<sup>2</sup>. t represents time.</p>
<p>Calculus with parametric equations: dy/dx = (dy/dt) ÷ (dx/dt) (see Differentiation).</p>
`,
  quiz: [
    { q: "x = 3cos t, y = 3sin t describes…", o: ["A circle of radius 3", "A parabola", "A line", "An ellipse of width 6 and height 3"], a: 0, e: "" },
    { q: "x = 2t + 1, y = t². Cartesian form?", o: ["y = (x − 1)²/4", "y = (x + 1)²/4", "y = 2x + 1", "y = (x − 1)²"], a: 0, e: "" },
    { q: "x = cos t, y = cos 2t. Cartesian form?", o: ["y = 2x² − 1", "y = 1 − 2x²", "y = x²", "y = 2x"], a: 0, e: "" },
    { q: "For x = 3cos t, the domain of the Cartesian equation is…", o: ["−3 ≤ x ≤ 3", "x ∈ ℝ", "x ≥ 0", "0 ≤ x ≤ 3"], a: 0, e: "" },
    { q: "Find t where x = t², y = 2t meets y = x: …", o: ["t = 0 or 2", "t = 1", "t = 2 only", "t = −2"], a: 0, e: "" },
    { q: "dy/dx for parametric curves = …", o: ["(dy/dt) ÷ (dx/dt)", "(dx/dt) ÷ (dy/dt)", "dy/dt × dx/dt", "dy/dt + dx/dt"], a: 0, e: "" },
    { q: "In a projectile model, the parameter t usually represents…", o: ["Time", "Angle", "Speed", "Distance"], a: 0, e: "" },
    { q: "x = t + 1, y = t − 1. Cartesian?", o: ["y = x − 2", "y = x + 2", "y = 2x", "y = x"], a: 0, e: "" },
    { q: "x = 2sec t, y = 2tan t uses the identity…", o: ["sec²t − tan²t = 1", "sin²t + cos²t = 1", "cos 2t = 1 − 2sin²t", "tan t = sin t/cos t only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Parametric equations", "x = f(t), y = g(t)"],
    ["To Cartesian (algebraic)", "Make t the subject of one, substitute"],
    ["To Cartesian (trig)", "Use an identity, e.g. sin² + cos² = 1"],
    ["Domain of Cartesian form", "Range of x(t)"],
    ["Intersections", "Substitute x(t), y(t) into the other equation"],
    ["Parametric gradient", "dy/dx = (dy/dt)/(dx/dt)"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Binomial expansion",
  summary: "Expanding (a + b)ⁿ with nCr, and (Year 13) (1 + x)ⁿ for any rational n with validity.",
  notes: `
<h3>Positive integer n (Year 12)</h3>
<p>(a + b)<sup>n</sup> = a<sup>n</sup> + ⁿC₁a<sup>n−1</sup>b + ⁿC₂a<sup>n−2</sup>b<sup>2</sup> + … + b<sup>n</sup>, where ⁿCᵣ = n!/(r!(n − r)!). Coefficients come from Pascal's triangle.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Coefficient of x<sup>3</sup> in (2 + 3x)<sup>5</sup>: ⁵C₃ × 2<sup>2</sup> × 3<sup>3</sup> = 10 × 4 × 27 = <b>1080</b>.</div>
<p>(1 + x)<sup>n</sup> = 1 + nx + n(n − 1)x<sup>2</sup>/2! + n(n − 1)(n − 2)x<sup>3</sup>/3! + …</p>
<p>Use expansions to estimate: 1.02<sup>8</sup> ≈ first terms of (1 + 0.02)<sup>8</sup>.</p>
<div class="box box-c"><span class="box-title">Year 13: any rational n</span>The same (1 + x)<sup>n</sup> formula gives an infinite series, valid for <b>|x| &lt; 1</b>.<br>(1 + x)<sup>−1</sup> = 1 − x + x<sup>2</sup> − x<sup>3</sup> + …<br>(1 − 2x)<sup>1/2</sup> = 1 − x − ½x<sup>2</sup> − … valid for |x| &lt; ½.<br>For (a + bx)<sup>n</sup>, factor out a<sup>n</sup>: a<sup>n</sup>(1 + bx/a)<sup>n</sup>, valid for |bx/a| &lt; 1.<br>Rational functions: split into partial fractions first.</div>
`,
  quiz: [
    { q: "⁵C₂ = …", o: ["10", "20", "5", "60"], a: 0, e: "" },
    { q: "Coefficient of x³ in (2 + 3x)⁵?", o: ["1080", "270", "540", "810"], a: 0, e: "" },
    { q: "First two terms of (1 + x)¹⁰?", o: ["1 + 10x", "1 + x", "10 + x", "1 + 45x"], a: 0, e: "" },
    { q: "x² term in (1 + x)⁶?", o: ["15x²", "6x²", "30x²", "36x²"], a: 0, e: "" },
    { q: "Y13: (1 + x)⁻¹ = …", o: ["1 − x + x² − x³ + …", "1 + x + x² + …", "1 − x", "1 + x⁻¹"], a: 0, e: "" },
    { q: "Y13: (1 − 2x)^(1/2) is valid for…", o: ["|x| < ½", "|x| < 1", "|x| < 2", "All x"], a: 0, e: "" },
    { q: "Y13: (4 + x)^(1/2) = 2(1 + x/4)^(1/2), valid for…", o: ["|x| < 4", "|x| < 1", "|x| < ¼", "|x| < 2"], a: 0, e: "" },
    { q: "Constant term in (x + 1/x)⁴?", o: ["6", "4", "1", "12"], a: 0, e: "" },
    { q: "Row 4 of Pascal's triangle?", o: ["1 4 6 4 1", "1 3 3 1", "1 5 10 10 5 1", "1 4 4 1"], a: 0, e: "" }
  ],
  flashcards: [
    ["ⁿCᵣ", "n!/(r!(n − r)!)"],
    ["General term of (a + b)ⁿ", "ⁿCᵣ aⁿ⁻ʳ bʳ"],
    ["(1 + x)ⁿ", "1 + nx + n(n−1)x²/2! + …"],
    ["Y13: rational n", "Infinite series, valid |x| < 1"],
    ["Y13: (a + bx)ⁿ", "aⁿ(1 + bx/a)ⁿ, valid |bx/a| < 1"],
    ["Y13: (1 + x)⁻¹", "1 − x + x² − x³ + …"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y2: true, title: "Sequences and series",
  summary: "Sequence notation, arithmetic and geometric series, sum to infinity and sigma notation.",
  notes: `
<h3>Sequences</h3>
<p>nth-term form uₙ = f(n), or recurrence uₙ₊₁ = f(uₙ). Sequences can be increasing, decreasing or periodic (e.g. uₙ₊₁ = 1/uₙ has period 2).</p>
<h3>Arithmetic sequences</h3>
<p>uₙ = a + (n − 1)d. Sₙ = n/2 [2a + (n − 1)d] = n/2 (a + l).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>1 + 2 + … + 100 = 100/2 × (1 + 100) = <b>5050</b>.</div>
<h3>Geometric sequences</h3>
<p>uₙ = ar<sup>n−1</sup>. Sₙ = a(1 − r<sup>n</sup>)/(1 − r). If |r| &lt; 1, the series converges: <b>S∞ = a/(1 − r)</b>.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>8 + 4 + 2 + … : a = 8, r = ½, S∞ = 8/(1 − ½) = <b>16</b>.</div>
<p>"First term to exceed" problems often need logs: 2<sup>n</sup> &gt; 1000 → n &gt; log 1000/log 2 = 9.97, so n = 10.</p>
<h3>Sigma notation</h3>
<p>Σ<sub>r=1</sub><sup>n</sup> r = n(n + 1)/2. Σ<sub>r=1</sub><sup>10</sup> (3r + 2) is arithmetic: first 5, last 32, sum = 10/2 × 37 = 185.</p>
`,
  quiz: [
    { q: "nth term of an arithmetic sequence?", o: ["a + (n − 1)d", "arⁿ⁻¹", "a + nd", "n/2(a + l)"], a: 0, e: "" },
    { q: "1 + 2 + … + 100 = …", o: ["5050", "5000", "10 100", "4950"], a: 0, e: "" },
    { q: "S∞ of 8 + 4 + 2 + …?", o: ["16", "14", "12", "∞"], a: 0, e: "" },
    { q: "A geometric series converges when…", o: ["|r| < 1", "r > 1", "r = 1", "a < 1"], a: 0, e: "" },
    { q: "Sₙ of a geometric series = …", o: ["a(1 − rⁿ)/(1 − r)", "n/2(2a + (n−1)d)", "a/(1 − r)", "arⁿ"], a: 0, e: "" },
    { q: "uₙ₊₁ = 1/uₙ with u₁ = 2 is…", o: ["Periodic with period 2", "Increasing", "Decreasing", "Arithmetic"], a: 0, e: "" },
    { q: "Σ (r = 1 to 10) of (3r + 2) = …", o: ["185", "165", "175", "200"], a: 0, e: "" },
    { q: "Smallest n with 2ⁿ > 1000?", o: ["10", "9", "11", "100"], a: 0, e: "" },
    { q: "5th term of 3, 6, 12, …?", o: ["48", "24", "96", "15"], a: 0, e: "" }
  ],
  flashcards: [
    ["Arithmetic uₙ", "a + (n − 1)d"],
    ["Arithmetic Sₙ", "n/2[2a + (n − 1)d] = n/2(a + l)"],
    ["Geometric uₙ", "arⁿ⁻¹"],
    ["Geometric Sₙ", "a(1 − rⁿ)/(1 − r)"],
    ["Sum to infinity", "a/(1 − r), |r| < 1"],
    ["Σ r from 1 to n", "n(n + 1)/2"],
    ["Periodic sequence", "Terms repeat after a fixed number of steps"]
  ]
});

S2Data.detail("1a", { mistakes: ["Proving a general statement by checking a few examples. Examples can disprove but never prove (unless every case is checked)."], tips: ["End with a clear conclusion that links back to the statement."], fact: "Fermat's Last Theorem took 358 years to prove, finally done by Andrew Wiles in 1994." });
S2Data.detail("2a", { mistakes: ["Writing √x/x² as x^(1/2 − 2) but miscalculating: it's x^(−3/2)."], tips: ["Before differentiating or integrating, always rewrite roots and fractions as powers."], fact: "Surds come from the Latin 'surdus', meaning deaf or mute: numbers that can't be 'spoken' exactly." });
S2Data.detail("2b", { mistakes: ["Forgetting the factor a when completing the square for ax² + bx + c."], tips: ["When a question says 'equal roots' or 'tangent', think discriminant = 0."], fact: "Al-Khwarizmi solved quadratics geometrically by literally completing a square with shapes." });
S2Data.detail("2c", { mistakes: ["Writing −2 > x > 3 for 'outside' regions. It must be two separate inequalities: x < −2 or x > 3."], tips: ["Always sketch the quadratic for quadratic inequalities."], fact: "Linear programming, built on inequalities and regions, won the 1975 Nobel prize in economics." });
S2Data.detail("2d", { mistakes: ["Getting f(2x) the wrong way round. It's a stretch with scale factor ½, not 2."], tips: ["Label every intercept, turning point and asymptote on a sketch."], fact: "Graphing calculators were introduced in 1985; before that, sketching skills were essential." });
S2Data.detail("2e", { mistakes: ["Concluding (x + 2) is a factor from f(2) = 0. It's (x − 2)."], tips: ["Try ±1, ±2 and factors of the constant term first."], fact: "There's a formula for cubics (Cardano, 1545) but none in general for quintics, as Abel proved." });
S2Data.detail("2f", { mistakes: ["Finding fg(x) by applying f first."], tips: ["State the domain of an inverse: it's the range of the original function."], fact: "The word 'function' was introduced by Leibniz in 1673." });
S2Data.detail("2g", { mistakes: ["Forgetting the extra term for a repeated factor."], tips: ["Use the cover-up idea: substitute the root of each linear factor."], fact: "Partial fractions are used in engineering to analyse electrical circuits with Laplace transforms." });
S2Data.detail("3a", { mistakes: ["Reading the centre of (x + 3)² + (y − 2)² = 9 as (3, −2). It's (−3, 2)."], tips: ["Use the tangent ⟂ radius fact to find tangent equations quickly."], fact: "Descartes' coordinate geometry joined algebra and geometry for the first time in 1637." });
S2Data.detail("3b", { mistakes: ["Forgetting to state a restricted domain for the Cartesian equation."], tips: ["Look for a trig identity whenever both x and y involve trig functions of t."], fact: "Computer graphics draw curves using parametric Bézier curves." });
S2Data.detail("4a", { mistakes: ["Forgetting to raise the coefficient: the term in (2 + 3x)⁵ uses (3x)³ = 27x³, not 3x³."], tips: ["State the validity range for every Year 13 binomial expansion."], fact: "Newton generalised the binomial theorem to fractional powers in 1665." });
S2Data.detail("4b", { mistakes: ["Using S∞ when |r| ≥ 1: the series doesn't converge."], tips: ["For 'first term to exceed' questions, use logs and round up."], fact: "Gauss reputedly summed 1 to 100 instantly as a schoolboy by pairing terms to make 101." });
