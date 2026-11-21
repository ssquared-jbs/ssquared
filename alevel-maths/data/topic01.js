/* A-level Maths² — Pure: proof, algebra, coordinate geometry, sequences and series */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "Proof",
  summary: "Proof by deduction, exhaustion, counter-example and (Year 13) contradiction.",
  notes: R`
<h3>Notation</h3>
<table><tr><th>Symbol</th><th>Meaning</th></tr>
<tr><td>\(\Rightarrow\)</td><td>implies</td></tr>
<tr><td>\(\Leftarrow\)</td><td>is implied by</td></tr>
<tr><td>\(\Leftrightarrow\)</td><td>if and only if</td></tr>
<tr><td>\(\in\)</td><td>is a member of</td></tr>
<tr><td>\(\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}\)</td><td>natural numbers, integers, rationals, reals</td></tr></table>
<h3>Proof by deduction</h3>
<p>Start from facts you know and make logical steps until you reach the statement. Useful forms: an even number is \(2n\), an odd number is \(2n + 1\), consecutive integers are \(n\) and \(n + 1\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Prove that \(n^2 - n\) is always even.
<ol><li>Factorise: \(n^2 - n = n(n - 1)\).</li>
<li>\(n - 1\) and \(n\) are consecutive integers, so one of them is even.</li>
<li>Any integer multiplied by an even number is even, so \(n(n-1)\) is even. \(\blacksquare\)</li></ol></div>
<h3>Proof by exhaustion</h3>
<p>Split the problem into a finite number of cases and check every one, e.g. "\(n\) even" and "\(n\) odd", or every integer from 1 to 10.</p>
<h3>Disproof by counter-example</h3>
<p>One example where the statement fails is enough. "All primes are odd" is false, because 2 is prime and even.</p>
<div class="box box-c"><span class="box-title">Year 13: proof by contradiction</span>Assume the opposite of what you want to prove, then show this leads to something impossible.<br><br>
<b>\(\sqrt2\) is irrational.</b> Assume \(\sqrt2 = \dfrac{a}{b}\) with the fraction in lowest terms.
<ol><li>Square: \(2 = \dfrac{a^2}{b^2}\), so \(a^2 = 2b^2\). So \(a^2\) is even, and therefore \(a\) is even: write \(a = 2k\).</li>
<li>Substitute: \(4k^2 = 2b^2\), so \(b^2 = 2k^2\), and \(b\) is even too.</li>
<li>Both \(a\) and \(b\) even contradicts "lowest terms", so \(\sqrt2\) is irrational. \(\blacksquare\)</li></ol>
<b>There are infinitely many primes.</b> Assume there's a finite list \(p_1, p_2, \ldots, p_n\). The number \(p_1p_2\cdots p_n + 1\) leaves remainder 1 when divided by every prime in the list, so it has a prime factor not in the list: contradiction. \(\blacksquare\)</div>
<p>Always finish a proof with a concluding sentence.</p>
`,
  quiz: [
    { q: "Which number shows 'all primes are odd' is false?", o: ["2", "3", "9", "1"], a: 0, e: "2 is prime (its only factors are 1 and 2) and it's even, so it's a counter-example. 9 isn't prime and 1 isn't prime." },
    { q: "Proof by exhaustion means…", o: ["Checking every possible case", "Assuming the opposite", "Finding one example", "Drawing a graph"], a: 0, e: "You split the problem into a finite number of cases and show the statement holds in each one." },
    { q: "To represent any odd integer use…", o: [R`\(2n + 1\)`, R`\(2n\)`, R`\(n + 1\)`, R`\(n^2\)`], a: 0, e: R`\(2n\) is always even, so adding 1 always gives an odd number.` },
    { q: "Proof by contradiction starts by…", o: ["Assuming the statement is false", "Testing examples", "Drawing a diagram", "Listing cases"], a: 0, e: "You assume the opposite and show that it leads to something impossible, so the original statement must be true." },
    { q: R`\(A \Leftrightarrow B\) means…`, o: [R`\(A\) if and only if \(B\)`, R`\(A\) implies \(B\) only`, R`\(A\) is not \(B\)`, R`\(A\) or \(B\)`], a: 0, e: R`The double arrow means the implication works both ways: \(A \Rightarrow B\) and \(B \Rightarrow A\).` },
    { q: R`\(n(n + 1)\) is always…`, o: ["Even", "Odd", "Prime", "A square"], a: 0, e: R`\(n\) and \(n + 1\) are consecutive, so one of them is even, which makes the product even.` },
    { q: R`\(\mathbb{Q}\) is the set of…`, o: ["Rational numbers", "Integers", "Real numbers", "Natural numbers"], a: 0, e: R`\(\mathbb{Q}\) (for 'quotient') contains every number that can be written as \(\frac{a}{b}\) with \(a, b\) integers.` },
    { q: "One counter-example is enough to…", o: ["Disprove a general statement", "Prove a statement", "Prove by exhaustion", R`Show something is true for all \(n\)`], a: 0, e: "A statement about 'all' cases is false if even one case fails. Examples can never prove it, though." },
    { q: R`In the proof that \(\sqrt2\) is irrational, the contradiction is that…`, o: [R`\(a\) and \(b\) are both even, but \(\frac{a}{b}\) was in lowest terms`, R`\(a\) is odd`, R`\(\sqrt2\) is an integer`, R`\(b = 0\)`], a: 0, e: "If both are even they share a factor of 2, so the fraction wasn't in lowest terms after all." }
  ],
  flashcards: [
    ["Deduction", "Logical steps from known facts"],
    ["Exhaustion", R`Check every case (e.g. \(n\) odd and \(n\) even)`],
    ["Counter-example", "One case where it fails disproves it"],
    ["Contradiction (Y13)", "Assume the opposite; reach something impossible"],
    ["Even / odd", R`\(2n\) / \(2n + 1\)`],
    [R`\(\Rightarrow\) / \(\Leftrightarrow\)`, "Implies / if and only if"],
    [R`\(\sqrt2\) is irrational`, R`\(a^2 = 2b^2\) forces \(a\) and \(b\) both even: contradiction`],
    ["Infinitely many primes", "Product of all the primes + 1 has no factor in the list"]
  ]
});

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Indices and surds",
  summary: "Laws of indices including fractional and negative powers, simplifying surds and rationalising.",
  notes: R`
<h3>Laws of indices</h3>
<table><tr><th>Law</th><th>Example</th></tr>
<tr><td>\(a^m \times a^n = a^{m+n}\)</td><td>\(x^3 \times x^4 = x^7\)</td></tr>
<tr><td>\(a^m \div a^n = a^{m-n}\)</td><td>\(x^5 \div x^2 = x^3\)</td></tr>
<tr><td>\((a^m)^n = a^{mn}\)</td><td>\((x^2)^3 = x^6\)</td></tr>
<tr><td>\(a^0 = 1\)</td><td>\(7^0 = 1\)</td></tr>
<tr><td>\(a^{-n} = \dfrac{1}{a^n}\)</td><td>\(2^{-3} = \dfrac18\)</td></tr>
<tr><td>\(a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m\)</td><td>\(8^{\frac23} = (\sqrt[3]{8})^2 = 4\)</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>Write \(\dfrac{2x^3 - \sqrt{x}}{x^2}\) in the form \(ax^p + bx^q\).
<ol><li>Split the fraction: \(\dfrac{2x^3}{x^2} - \dfrac{x^{1/2}}{x^2}\).</li>
<li>Subtract the powers: \(2x^{3-2} - x^{\frac12 - 2}\).</li>
<li>\(= 2x - x^{-\frac32}\).</li></ol>
This is exactly how you prepare an expression to differentiate or integrate.</div>
<h3>Surds</h3>
<ul>
<li>\(\sqrt{ab} = \sqrt{a}\sqrt{b}\) and \(\sqrt{\dfrac{a}{b}} = \dfrac{\sqrt a}{\sqrt b}\).</li>
<li>Simplify by taking out the largest square factor: \(\sqrt{72} = \sqrt{36}\times\sqrt{2} = 6\sqrt2\).</li>
<li>Rationalise \(\dfrac{1}{\sqrt a}\) by multiplying top and bottom by \(\sqrt a\): \(\dfrac{\sqrt a}{a}\).</li>
<li>Rationalise \(\dfrac{1}{a + \sqrt b}\) by multiplying top and bottom by \(a - \sqrt b\); the denominator becomes \(a^2 - b\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Rationalise \(\dfrac{5 + \sqrt3}{2 - \sqrt3}\).
<ol><li>Multiply top and bottom by \(2 + \sqrt3\).</li>
<li>Denominator: \((2 - \sqrt3)(2 + \sqrt3) = 4 - 3 = 1\).</li>
<li>Numerator: \((5 + \sqrt3)(2 + \sqrt3) = 10 + 5\sqrt3 + 2\sqrt3 + 3 = 13 + 7\sqrt3\).</li></ol>
Answer: \(13 + 7\sqrt3\).</div>
<h3>Index equations</h3>
<p>Write both sides as powers of the same base, then equate the powers: \(4^x = 8 \Rightarrow 2^{2x} = 2^3 \Rightarrow 2x = 3 \Rightarrow x = \tfrac32\).</p>
`,
  quiz: [
    { q: R`\(x^{\frac12} \times x^{\frac32} = \ ?\)`, o: [R`\(x^2\)`, R`\(x^{\frac34}\)`, R`\(x^3\)`, R`\(2x\)`], a: 0, e: R`Multiplying means adding the powers: \(\tfrac12 + \tfrac32 = 2\).` },
    { q: R`\(16^{-\frac34} = \ ?\)`, o: [R`\(\frac18\)`, R`\(-12\)`, R`\(8\)`, R`\(\frac{1}{12}\)`], a: 0, e: R`\(\sqrt[4]{16} = 2\), then \(2^3 = 8\). The negative power gives the reciprocal: \(\frac18\).` },
    { q: R`Simplify \(\sqrt{72}\).`, o: [R`\(6\sqrt2\)`, R`\(2\sqrt{18}\)`, R`\(3\sqrt8\)`, R`\(36\sqrt2\)`], a: 0, e: R`The largest square factor of 72 is 36: \(\sqrt{72} = \sqrt{36}\sqrt2 = 6\sqrt2\).` },
    { q: R`Rationalise \(\dfrac{2}{\sqrt5}\).`, o: [R`\(\dfrac{2\sqrt5}{5}\)`, R`\(\dfrac{\sqrt5}{2}\)`, R`\(2\sqrt5\)`, R`\(\dfrac{5}{2\sqrt5}\)`], a: 0, e: R`Multiply top and bottom by \(\sqrt5\): \(\dfrac{2\sqrt5}{5}\).` },
    { q: R`\((\sqrt3 + 1)(\sqrt3 - 1) = \ ?\)`, o: [R`\(2\)`, R`\(4\)`, R`\(3 - \sqrt3\)`, R`\(\sqrt3\)`], a: 0, e: R`Difference of two squares: \((\sqrt3)^2 - 1^2 = 3 - 1 = 2\).` },
    { q: R`Solve \(4^x = 8\).`, o: [R`\(x = \frac32\)`, R`\(x = 2\)`, R`\(x = \frac12\)`, R`\(x = 4\)`], a: 0, e: R`Write both as powers of 2: \(2^{2x} = 2^3\), so \(2x = 3\).` },
    { q: R`Write \(\dfrac{1}{\sqrt{x}}\) as a power of \(x\).`, o: [R`\(x^{-\frac12}\)`, R`\(x^{\frac12}\)`, R`\(x^{-2}\)`, R`\(-x^{\frac12}\)`], a: 0, e: R`\(\sqrt x = x^{\frac12}\), and one over it gives a negative power.` },
    { q: R`To rationalise \(\dfrac{1}{3 + \sqrt2}\), multiply top and bottom by…`, o: [R`\(3 - \sqrt2\)`, R`\(\sqrt2\)`, R`\(3 + \sqrt2\)`, R`\(3\)`], a: 0, e: R`Using the conjugate makes a difference of two squares: \((3+\sqrt2)(3-\sqrt2) = 9 - 2 = 7\), which has no surd.` },
    { q: R`\((x^3)^{\frac23} = \ ?\)`, o: [R`\(x^2\)`, R`\(x^{\frac92}\)`, R`\(x^{\frac53}\)`, R`\(x^3\)`], a: 0, e: R`Multiply the powers: \(3 \times \tfrac23 = 2\).` }
  ],
  flashcards: [
    [R`\(a^m \times a^n\) and \(a^m \div a^n\)`, R`\(a^{m+n}\) and \(a^{m-n}\)`],
    [R`\(a^{\frac{m}{n}}\)`, R`\(\left(\sqrt[n]{a}\right)^m\)`],
    [R`\(a^{-n}\)`, R`\(\dfrac{1}{a^n}\)`],
    [R`\(\sqrt{ab}\)`, R`\(\sqrt a \times \sqrt b\)`],
    [R`Rationalise \(\dfrac{1}{\sqrt a}\)`, R`\(\dfrac{\sqrt a}{a}\)`],
    [R`Rationalise \(\dfrac{1}{a + \sqrt b}\)`, R`Multiply by \(a - \sqrt b\); denominator becomes \(a^2 - b\)`],
    ["Index equations", "Write both sides with the same base, then equate powers"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Quadratics",
  summary: "Solving quadratics, completing the square, the discriminant and quadratics in disguise.",
  notes: R`
<h3>Solving</h3>
<p>Factorise, complete the square, or use the quadratic formula:</p>
<p>\[x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\]</p>
<h3>Completing the square</h3>
<p>\[x^2 + bx + c = \left(x + \frac{b}{2}\right)^2 - \left(\frac{b}{2}\right)^2 + c\]</p>
<p>The turning point of \(y = a(x + p)^2 + q\) is \((-p,\ q)\). It's a minimum if \(a > 0\) and a maximum if \(a < 0\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Write \(2x^2 - 12x + 7\) in completed square form.
<ol><li>Take out the factor of 2 from the \(x\) terms: \(2(x^2 - 6x) + 7\).</li>
<li>Complete the square inside: \(x^2 - 6x = (x - 3)^2 - 9\).</li>
<li>So \(2\left[(x - 3)^2 - 9\right] + 7 = 2(x - 3)^2 - 18 + 7 = 2(x - 3)^2 - 11\).</li></ol>
The minimum point is \((3, -11)\).</div>
<h3>The discriminant \(b^2 - 4ac\)</h3>
<table><tr><th>Discriminant</th><th>Roots</th><th>Graph</th></tr>
<tr><td>\(b^2 - 4ac > 0\)</td><td>Two distinct real roots</td><td>Crosses the \(x\)-axis twice</td></tr>
<tr><td>\(b^2 - 4ac = 0\)</td><td>One repeated root</td><td>Touches the \(x\)-axis</td></tr>
<tr><td>\(b^2 - 4ac < 0\)</td><td>No real roots</td><td>Doesn't meet the \(x\)-axis</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>Find \(k\) so that \(x^2 + kx + 9 = 0\) has equal roots.<br>Equal roots means \(b^2 - 4ac = 0\): \(k^2 - 4(1)(9) = 0\), so \(k^2 = 36\) and \(k = \pm 6\).</div>
<h3>Quadratics in disguise</h3>
<p>\(x^4 - 5x^2 + 4 = 0\): let \(u = x^2\). Then \(u^2 - 5u + 4 = 0\), so \((u - 1)(u - 4) = 0\), giving \(u = 1\) or \(4\). Since \(x^2 = u\), \(x = \pm1\) or \(\pm2\). The same trick works with \(x^{\frac12}\) or \(2^x\).</p>
<h3>Sketching</h3>
<p>Mark the \(y\)-intercept, the roots and the turning point. The line of symmetry is \(x = -\dfrac{b}{2a}\).</p>
`,
  quiz: [
    { q: R`Write \(x^2 + 6x + 1\) in completed square form.`, o: [R`\((x + 3)^2 - 8\)`, R`\((x + 6)^2 + 1\)`, R`\((x + 3)^2 + 1\)`, R`\((x - 3)^2 - 8\)`], a: 0, e: R`Halve the 6 to get \((x + 3)^2\), which is \(x^2 + 6x + 9\). Subtract 9 and add 1: \((x+3)^2 - 8\).` },
    { q: R`Where is the minimum of \(y = 2(x - 3)^2 - 11\)?`, o: [R`\((3, -11)\)`, R`\((-3, -11)\)`, R`\((3, 11)\)`, R`\((2, -11)\)`], a: 0, e: R`The squared bracket is smallest (zero) when \(x = 3\), and then \(y = -11\).` },
    { q: R`\(b^2 - 4ac = 0\) means…`, o: ["One repeated root", "Two distinct roots", "No real roots", "Infinitely many roots"], a: 0, e: R`The \(\pm\sqrt{0}\) part of the formula vanishes, so both roots are the same: the graph just touches the \(x\)-axis.` },
    { q: R`\(x^2 + kx + 9 = 0\) has equal roots when \(k = \ ?\)`, o: [R`\(\pm 6\)`, R`\(\pm 3\)`, R`\(\pm 9\)`, R`\(\pm 36\)`], a: 0, e: R`Set \(k^2 - 4(1)(9) = 0\), so \(k^2 = 36\).` },
    { q: R`Find the discriminant of \(3x^2 - 2x + 5\).`, o: [R`\(-56\)`, R`\(64\)`, R`\(-64\)`, R`\(56\)`], a: 0, e: R`\(b^2 - 4ac = (-2)^2 - 4(3)(5) = 4 - 60 = -56\).` },
    { q: R`Line of symmetry of \(y = x^2 - 8x + 3\)?`, o: [R`\(x = 4\)`, R`\(x = -4\)`, R`\(x = 8\)`, R`\(x = 3\)`], a: 0, e: R`\(x = -\dfrac{b}{2a} = -\dfrac{-8}{2} = 4\).` },
    { q: R`To solve \(x^4 - 5x^2 + 4 = 0\), use the substitution…`, o: [R`\(u = x^2\)`, R`\(u = x^4\)`, R`The formula on \(x\) directly`, "Logarithms"], a: 0, e: R`With \(u = x^2\), \(x^4 = u^2\), giving an ordinary quadratic \(u^2 - 5u + 4 = 0\).` },
    { q: R`\(y = -x^2 + 4x\) has a…`, o: ["Maximum", "Minimum", "Asymptote", "Point of inflection only"], a: 0, e: R`The \(x^2\) coefficient is negative, so the parabola is upside down (\(\cap\)-shaped).` },
    { q: "For no real roots…", o: [R`\(b^2 - 4ac < 0\)`, R`\(b^2 - 4ac > 0\)`, R`\(b^2 - 4ac = 0\)`, R`\(a < 0\)`], a: 0, e: R`You can't square-root a negative number, so the formula gives no real solutions.` }
  ],
  flashcards: [
    ["Quadratic formula", R`\(x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)`],
    ["Completing the square", R`\(x^2 + bx = \left(x + \tfrac{b}{2}\right)^2 - \left(\tfrac{b}{2}\right)^2\)`],
    [R`Turning point of \(a(x + p)^2 + q\)`, R`\((-p,\ q)\)`],
    [R`\(b^2 - 4ac > 0\)`, "Two distinct real roots"],
    [R`\(b^2 - 4ac = 0\)`, R`One repeated root; graph touches the \(x\)-axis`],
    [R`\(b^2 - 4ac < 0\)`, "No real roots"],
    ["Quadratic in disguise", R`Substitute \(u = x^2\), \(x^{\frac12}\), \(2^x\)…`],
    ["Line of symmetry", R`\(x = -\dfrac{b}{2a}\)`]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "Equations and inequalities",
  summary: "Simultaneous equations, linear and quadratic inequalities, and regions.",
  notes: R`
<h3>Simultaneous equations</h3>
<p>Two linear equations: use elimination or substitution. One linear and one quadratic: rearrange the linear equation and substitute it into the quadratic.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(x + y = 5\) and \(x^2 + y^2 = 13\).
<ol><li>Rearrange the linear equation: \(y = 5 - x\).</li>
<li>Substitute: \(x^2 + (5 - x)^2 = 13\), so \(x^2 + 25 - 10x + x^2 = 13\).</li>
<li>Tidy: \(2x^2 - 10x + 12 = 0\), then divide by 2: \(x^2 - 5x + 6 = 0\), so \((x - 2)(x - 3) = 0\).</li>
<li>\(x = 2 \Rightarrow y = 3\); \(x = 3 \Rightarrow y = 2\).</li></ol>
The solutions are \((2, 3)\) and \((3, 2)\).</div>
<p>To count where a line meets a curve, substitute to get a quadratic and look at its discriminant: \(> 0\) two points, \(= 0\) one point (the line is a tangent), \(< 0\) no points.</p>
<h3>Inequalities</h3>
<ul>
<li><b>Linear:</b> solve like an equation, but flip the inequality sign if you multiply or divide by a negative number.</li>
<li><b>Quadratic:</b> find the critical values, sketch the graph, then read off the part you need.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(x^2 - x - 6 > 0\).
<ol><li>Critical values: \((x - 3)(x + 2) = 0\), so \(x = -2\) or \(x = 3\).</li>
<li>The graph is a \(\cup\)-shaped parabola crossing the axis at \(-2\) and \(3\). It's above the axis (\(> 0\)) outside the roots.</li></ol>
Answer: \(x < -2\) or \(x > 3\). In set notation: \(\{x : x < -2\} \cup \{x : x > 3\}\).</div>
<ul>
<li>Between the roots is written \(\{x : -2 < x < 3\}\).</li>
<li>Never multiply both sides by an expression whose sign you don't know (like \(x\)). Multiply by its square instead, which is always positive.</li>
</ul>
<h3>Regions</h3>
<p>Draw each boundary line: <b>dashed</b> for \(<\) or \(>\), <b>solid</b> for \(\le\) or \(\ge\). Shade the required region and check with a test point such as \((0, 0)\).</p>
`,
  quiz: [
    { q: R`Solve \(x^2 - x - 6 > 0\).`, o: [R`\(x < -2\) or \(x > 3\)`, R`\(-2 < x < 3\)`, R`\(x > 3\)`, R`\(x < -2\)`], a: 0, e: R`Roots are \(-2\) and \(3\). The \(\cup\)-shaped graph is above the axis outside the roots.` },
    { q: R`Solve \(x^2 \le 16\).`, o: [R`\(-4 \le x \le 4\)`, R`\(x \le 4\)`, R`\(x \le -4\) or \(x \ge 4\)`, R`\(x \ge \pm 4\)`], a: 0, e: R`\(x^2 - 16 \le 0\) has roots \(\pm4\), and the graph is below the axis between them. Don't forget negative values like \(-5\) fail.` },
    { q: "A line is a tangent to a curve when the resulting quadratic has…", o: [R`Discriminant \(= 0\)`, R`Discriminant \(> 0\)`, R`Discriminant \(< 0\)`, R`\(a = 0\)`], a: 0, e: "A zero discriminant gives exactly one meeting point, which is what a tangent is." },
    { q: R`In set notation, '\(x < 1\) or \(x > 4\)' is…`, o: [R`\(\{x : x < 1\} \cup \{x : x > 4\}\)`, R`\(\{x : x < 1\} \cap \{x : x > 4\}\)`, R`\(\{x : 1 < x < 4\}\)`, R`\(\{1, 4\}\)`], a: 0, e: R`'Or' means union, \(\cup\). The intersection would be empty, since no number is both below 1 and above 4.` },
    { q: R`On a graph, the boundary of \(y < 2x + 1\) is…`, o: ["Dashed", "Solid", "Dotted and shaded", "Not drawn"], a: 0, e: R`The inequality is strict (\(<\)), so points on the line aren't included: draw it dashed.` },
    { q: R`Solve \(3 - 2x \ge 7\).`, o: [R`\(x \le -2\)`, R`\(x \ge -2\)`, R`\(x \le 2\)`, R`\(x \ge 2\)`], a: 0, e: R`\(-2x \ge 4\). Dividing by \(-2\) flips the sign: \(x \le -2\).` },
    { q: R`\(x + y = 5\) and \(x^2 + y^2 = 13\) have solutions…`, o: [R`\((2, 3)\) and \((3, 2)\)`, R`\((1, 4)\) only`, R`\((2, 3)\) only`, "None"], a: 0, e: R`Substituting \(y = 5 - x\) gives \(x^2 - 5x + 6 = 0\), so \(x = 2\) or \(3\).` },
    { q: R`Why not multiply both sides of \(\dfrac{2}{x} < 1\) by \(x\)?`, o: [R`\(x\) could be negative`, R`\(x\) could be zero only`, "It's never allowed", "It makes it quadratic"], a: 0, e: R`If \(x\) were negative the sign would need flipping, and you don't know which. Multiply by \(x^2\) instead.` },
    { q: R`Critical values of \((x - 1)(x - 5) < 0\)?`, o: [R`\(1\) and \(5\)`, R`\(-1\) and \(-5\)`, R`\(0\) and \(5\)`, R`\(1\) and \(-5\)`], a: 0, e: R`Set each bracket to zero: \(x = 1\) and \(x = 5\). The solution is \(1 < x < 5\).` }
  ],
  flashcards: [
    ["Linear + quadratic", "Substitute the linear equation into the quadratic"],
    ["Line meets curve", R`Discriminant \(>0\): 2 points; \(=0\): tangent; \(<0\): none`],
    ["Quadratic inequality", "Critical values → sketch → read off the region"],
    [R`\((x - a)(x - b) > 0\), \(a < b\)`, R`\(x < a\) or \(x > b\)`],
    [R`\((x - a)(x - b) < 0\), \(a < b\)`, R`\(a < x < b\)`],
    ["Strict / non-strict boundary", "Dashed / solid"],
    ["Multiplier of unknown sign", "Multiply by its square instead"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Graphs and transformations",
  summary: "Sketching cubics, quartics and reciprocal graphs, intersections, proportion and transformations.",
  notes: R`
<h3>Sketching</h3>
<ul>
<li><b>Cubics:</b> \(y = (x - a)(x - b)(x - c)\) crosses the \(x\)-axis at \(a\), \(b\) and \(c\). With a positive \(x^3\) coefficient it goes from bottom-left to top-right. A repeated root, from \((x - a)^2\), just <b>touches</b> the axis.</li>
<li><b>Quartics:</b> with a positive \(x^4\) coefficient, both ends point up.</li>
<li><b>Reciprocal graphs:</b> \(y = \dfrac{k}{x}\) has branches in the 1st and 3rd quadrants if \(k > 0\); \(y = \dfrac{k}{x^2}\) has both branches above the axis if \(k > 0\). Both have asymptotes \(x = 0\) and \(y = 0\).</li>
</ul>
<p>Where two curves intersect gives the solutions of the equation formed by setting them equal.</p>
<h3>Proportion</h3>
<p>\(y \propto x\) is a straight line through the origin; \(y \propto \dfrac1x\) is a reciprocal graph.</p>
<h3>Transformations of \(y = f(x)\)</h3>
<table>
<tr><th>Graph</th><th>Transformation</th></tr>
<tr><td>\(f(x) + a\)</td><td>Translation by \(\begin{pmatrix}0\\a\end{pmatrix}\) (up \(a\))</td></tr>
<tr><td>\(f(x + a)\)</td><td>Translation by \(\begin{pmatrix}-a\\0\end{pmatrix}\) (left \(a\))</td></tr>
<tr><td>\(af(x)\)</td><td>Stretch parallel to the \(y\)-axis, scale factor \(a\)</td></tr>
<tr><td>\(f(ax)\)</td><td>Stretch parallel to the \(x\)-axis, scale factor \(\dfrac1a\)</td></tr>
<tr><td>\(-f(x)\)</td><td>Reflection in the \(x\)-axis</td></tr>
<tr><td>\(f(-x)\)</td><td>Reflection in the \(y\)-axis</td></tr>
</table>
<p>Changes <i>inside</i> the bracket affect \(x\) and do the "opposite" of what you might expect. Track key points and asymptotes: \(y = \dfrac{1}{x - 2} + 3\) has asymptotes \(x = 2\) and \(y = 3\).</p>
<div class="box box-c"><span class="box-title">Year 13: modulus graphs</span>\(y = |f(x)|\): reflect any part below the \(x\)-axis upwards. \(y = f(|x|)\): replace the left half with a reflection of the right half in the \(y\)-axis.</div>
`,
  quiz: [
    { q: R`At \(x = 1\), the graph of \(y = (x - 1)^2(x + 2)\)…`, o: [R`Touches the \(x\)-axis`, R`Crosses the \(x\)-axis`, "Has an asymptote", "Is undefined"], a: 0, e: R`\((x-1)\) is squared, so it's a repeated root: the graph touches the axis and turns back.` },
    { q: R`\(y = f(2x)\) is a stretch…`, o: [R`Parallel to the \(x\)-axis, scale factor \(\tfrac12\)`, R`Parallel to the \(x\)-axis, scale factor 2`, R`Parallel to the \(y\)-axis, scale factor 2`, R`Parallel to the \(y\)-axis, scale factor \(\tfrac12\)`], a: 0, e: R`Inside the bracket acts on \(x\) in reverse: multiplying \(x\) by 2 squashes the graph to half its width.` },
    { q: R`\(y = 3f(x)\) is a stretch…`, o: [R`Parallel to the \(y\)-axis, scale factor 3`, R`Parallel to the \(x\)-axis, scale factor 3`, R`Parallel to the \(x\)-axis, scale factor \(\tfrac13\)`, "A translation up 3"], a: 0, e: R`Every \(y\)-value is multiplied by 3, so the graph is stretched vertically.` },
    { q: R`Asymptotes of \(y = \dfrac{1}{x - 2} + 3\)?`, o: [R`\(x = 2,\ y = 3\)`, R`\(x = -2,\ y = 3\)`, R`\(x = 2,\ y = -3\)`, R`\(x = 3,\ y = 2\)`], a: 0, e: R`\(\dfrac1x\) has asymptotes \(x = 0, y = 0\). It's been moved right 2 and up 3.` },
    { q: R`The graph of \(y = -x^3\) goes…`, o: ["Top-left to bottom-right", "Bottom-left to top-right", "Both ends up", "Both ends down"], a: 0, e: R`It's \(y = x^3\) reflected in the \(x\)-axis, so the direction is reversed.` },
    { q: R`The graph of \(y = \dfrac{4}{x^2}\) lies…`, o: [R`Entirely above the \(x\)-axis`, "In quadrants 1 and 3", R`Below the \(x\)-axis`, "Through the origin"], a: 0, e: R`\(x^2\) is always positive, so \(\dfrac{4}{x^2}\) is always positive.` },
    { q: R`\(y = f(x + 3)\) moves the graph…`, o: ["3 left", "3 right", "3 up", "3 down"], a: 0, e: R`Adding inside the bracket shifts the graph in the negative \(x\) direction: left 3.` },
    { q: R`Year 13: \(y = |f(x)|\)…`, o: [R`Reflects the negative parts in the \(x\)-axis`, "Reflects the left half", "Stretches the graph", "Moves it up"], a: 0, e: R`The modulus makes every output non-negative, so anything below the axis flips up.` },
    { q: R`Where does \(y = x(x - 3)(x + 4)\) cross the \(x\)-axis?`, o: [R`\(0, 3, -4\)`, R`\(0, -3, 4\)`, R`\(3, 4\)`, R`\(0\) only`], a: 0, e: R`Set each factor to zero: \(x = 0\), \(x - 3 = 0\), \(x + 4 = 0\).` }
  ],
  flashcards: [
    ["Repeated root", "Graph touches the axis there"],
    [R`\(y = \frac{k}{x}\) vs \(y = \frac{k}{x^2}\)`, R`Quadrants 1 and 3 vs both above the axis (\(k > 0\))`],
    [R`\(f(x) + a\)`, R`Translate up \(a\)`],
    [R`\(f(x + a)\)`, R`Translate left \(a\)`],
    [R`\(af(x)\)`, R`Stretch parallel to \(y\)-axis, s.f. \(a\)`],
    [R`\(f(ax)\)`, R`Stretch parallel to \(x\)-axis, s.f. \(\frac1a\)`],
    [R`\(-f(x)\) / \(f(-x)\)`, R`Reflect in \(x\)-axis / \(y\)-axis`],
    [R`\(|f(x)|\) (Y13)`, "Negative parts reflected up"]
  ]
});

S2Data.add({
  id: "2e", group: 2, y1: true, title: "Polynomials and the factor theorem",
  summary: "Algebraic division, the factor theorem and factorising cubics.",
  notes: R`
<h3>The factor theorem</h3>
<p>If \(f(a) = 0\), then \((x - a)\) is a factor of \(f(x)\). More generally, if \(f\!\left(\dfrac{b}{a}\right) = 0\), then \((ax - b)\) is a factor.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Factorise \(f(x) = x^3 - 2x^2 - 5x + 6\) fully.
<ol><li>Try small factors of the constant 6: \(f(1) = 1 - 2 - 5 + 6 = 0\), so \((x - 1)\) is a factor.</li>
<li>Divide (or compare coefficients) to find the quadratic: \(f(x) = (x - 1)(x^2 - x - 6)\).</li>
<li>Factorise the quadratic: \(x^2 - x - 6 = (x - 3)(x + 2)\).</li></ol>
So \(f(x) = (x - 1)(x - 3)(x + 2)\).</div>
<h3>Algebraic division</h3>
<p>Use long division, or compare coefficients: write \(f(x) = (x - 1)(ax^2 + bx + c)\), expand, and match the coefficients of each power of \(x\).</p>
<h3>Finding unknown coefficients</h3>
<p>If \((x + 2)\) is a factor of \(x^3 + px^2 - 4\), then \(f(-2) = 0\):</p>
<p>\[(-2)^3 + p(-2)^2 - 4 = 0 \;\Rightarrow\; -8 + 4p - 4 = 0 \;\Rightarrow\; p = 3\]</p>
<h3>Algebraic fractions</h3>
<p>Factorise the top and bottom, then cancel common factors:</p>
<p>\[\frac{x^2 - 9}{x^2 + x - 6} = \frac{(x - 3)(x + 3)}{(x + 3)(x - 2)} = \frac{x - 3}{x - 2}\]</p>
`,
  quiz: [
    { q: R`\(f(2) = 0\) means…`, o: [R`\((x - 2)\) is a factor`, R`\((x + 2)\) is a factor`, "2 is a coefficient", R`\(f\) has no roots`], a: 0, e: R`By the factor theorem, \(f(a) = 0\) means \((x - a)\) is a factor. Here \(a = 2\).` },
    { q: R`\(f(x) = x^3 - 2x^2 - 5x + 6\). Find \(f(1)\).`, o: [R`\(0\)`, R`\(1\)`, R`\(-2\)`, R`\(6\)`], a: 0, e: R`\(1 - 2 - 5 + 6 = 0\), so \((x - 1)\) is a factor.` },
    { q: R`Fully factorise \(x^3 - 2x^2 - 5x + 6\).`, o: [R`\((x - 1)(x - 3)(x + 2)\)`, R`\((x + 1)(x + 3)(x - 2)\)`, R`\((x - 1)(x + 3)(x - 2)\)`, R`\((x - 6)(x + 1)^2\)`], a: 0, e: R`\((x - 1)\) is a factor, leaving \(x^2 - x - 6 = (x - 3)(x + 2)\). Check: the constants multiply to \((-1)(-3)(2) = 6\).` },
    { q: R`If \((2x - 1)\) is a factor, then…`, o: [R`\(f\!\left(\tfrac12\right) = 0\)`, R`\(f(2) = 0\)`, R`\(f\!\left(-\tfrac12\right) = 0\)`, R`\(f(1) = 0\)`], a: 0, e: R`\(2x - 1 = 0\) when \(x = \tfrac12\).` },
    { q: R`\((x + 2)\) is a factor of \(x^3 + px^2 - 4\). Find \(p\).`, o: [R`\(3\)`, R`\(-3\)`, R`\(2\)`, R`\(1\)`], a: 0, e: R`\(f(-2) = -8 + 4p - 4 = 0\), so \(4p = 12\).` },
    { q: R`Simplify \(\dfrac{x^2 - 9}{x^2 + x - 6}\).`, o: [R`\(\dfrac{x - 3}{x - 2}\)`, R`\(\dfrac{x + 3}{x - 2}\)`, R`\(\dfrac{x - 3}{x + 2}\)`, R`\(x - 3\)`], a: 0, e: R`Top: \((x-3)(x+3)\). Bottom: \((x+3)(x-2)\). Cancel the \((x+3)\).` },
    { q: R`Expand \((x + 1)^3\).`, o: [R`\(x^3 + 3x^2 + 3x + 1\)`, R`\(x^3 + 1\)`, R`\(x^3 + 3x + 1\)`, R`\(x^3 + x^2 + x + 1\)`], a: 0, e: R`\((x+1)^2 = x^2 + 2x + 1\); multiply by \((x + 1)\) again and collect terms.` },
    { q: R`Divide \(x^3 - 1\) by \((x - 1)\).`, o: [R`\(x^2 + x + 1\)`, R`\(x^2 - 1\)`, R`\(x^2 - x + 1\)`, R`\(x^2 + 1\)`], a: 0, e: R`Check: \((x - 1)(x^2 + x + 1) = x^3 + x^2 + x - x^2 - x - 1 = x^3 - 1\).` },
    { q: "A cubic can have at most how many real roots?", o: ["3", "2", "4", "1"], a: 0, e: R`A polynomial of degree \(n\) has at most \(n\) real roots.` }
  ],
  flashcards: [
    ["Factor theorem", R`\(f(a) = 0 \Leftrightarrow (x - a)\) is a factor`],
    [R`\((ax - b)\) is a factor`, R`\(f\!\left(\frac{b}{a}\right) = 0\)`],
    ["Factorising a cubic", "Find a root by trial, divide, factorise the quadratic"],
    ["Algebraic division", "Long division or compare coefficients"],
    ["Unknown coefficient", R`Use \(f(\text{root}) = 0\) and solve`],
    ["Simplifying algebraic fractions", "Factorise top and bottom, cancel"]
  ]
});

S2Data.add({
  id: "2f", group: 2, y2: true, title: "Functions and modulus",
  summary: "Domain and range, composite and inverse functions, and modulus equations.",
  notes: R`
<h3>Domain and range</h3>
<p>The <b>domain</b> is the set of inputs; the <b>range</b> is the set of outputs. A function can be one-to-one or many-to-one. A one-to-many mapping is not a function.</p>
<p>Example: \(f(x) = x^2 + 3,\ x \in \mathbb{R}\) has range \(f(x) \ge 3\), because \(x^2 \ge 0\).</p>
<h3>Composite functions</h3>
<p>\(fg(x) = f\big(g(x)\big)\): apply \(g\) first, then \(f\). The range of \(g\) must fit inside the domain of \(f\).</p>
<h3>Inverse functions</h3>
<ul>
<li>Only one-to-one functions have inverses (restrict the domain if necessary).</li>
<li>To find \(f^{-1}\): write \(y = f(x)\), swap \(x\) and \(y\), then rearrange to make \(y\) the subject.</li>
<li>The domain of \(f^{-1}\) is the range of \(f\), and vice versa.</li>
<li>The graph of \(y = f^{-1}(x)\) is the reflection of \(y = f(x)\) in the line \(y = x\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the inverse of \(f(x) = \dfrac{2x + 1}{x - 3},\ x \ne 3\).
<ol><li>Write \(y = \dfrac{2x + 1}{x - 3}\) and multiply up: \(y(x - 3) = 2x + 1\).</li>
<li>Expand and collect the \(x\) terms: \(xy - 2x = 3y + 1\), so \(x(y - 2) = 3y + 1\).</li>
<li>\(x = \dfrac{3y + 1}{y - 2}\). Swap the letters: \(f^{-1}(x) = \dfrac{3x + 1}{x - 2},\ x \ne 2\).</li></ol></div>
<h3>Modulus</h3>
<p>\(|x|\) is the size of \(x\), ignoring its sign. To solve \(|2x - 1| = 5\), take both cases: \(2x - 1 = 5\) gives \(x = 3\), and \(2x - 1 = -5\) gives \(x = -2\).</p>
<p>For \(|f(x)| = g(x)\), sketch both graphs to see how many solutions there are, and check each answer in the original equation.</p>
<p>\(|x - a| < b \iff a - b < x < a + b\).</p>
`,
  quiz: [
    { q: R`\(f(x) = x^2 + 3,\ x \in \mathbb{R}\). What is the range?`, o: [R`\(f(x) \ge 3\)`, R`\(f(x) \in \mathbb{R}\)`, R`\(f(x) > 0\)`, R`\(f(x) \le 3\)`], a: 0, e: R`\(x^2\) is never negative, so the smallest output is \(0 + 3 = 3\).` },
    { q: R`\(fg(x)\) means…`, o: [R`Apply \(g\) first, then \(f\)`, R`Apply \(f\) first`, R`\(f \times g\)`, R`\(f + g\)`], a: 0, e: R`\(fg(x) = f\big(g(x)\big)\): the function nearest \(x\) acts first.` },
    { q: "A function has an inverse only if it is…", o: ["One-to-one", "Many-to-one", "Quadratic", "Continuous"], a: 0, e: "If two inputs gave the same output, the inverse wouldn't know which to return." },
    { q: R`The graph of \(f^{-1}\) is a reflection of \(f\) in…`, o: [R`\(y = x\)`, R`The \(x\)-axis`, R`The \(y\)-axis`, R`\(y = -x\)`], a: 0, e: R`Swapping \(x\) and \(y\) is the same as reflecting in \(y = x\).` },
    { q: R`The domain of \(f^{-1}\) equals…`, o: [R`The range of \(f\)`, R`The domain of \(f\)`, R`\(\mathbb{R}\) always`, R`The \(x\)-axis`], a: 0, e: R`The inverse takes outputs of \(f\) as its inputs.` },
    { q: R`Solve \(|2x - 1| = 5\).`, o: [R`\(x = 3\) or \(x = -2\)`, R`\(x = 3\)`, R`\(x = -2\)`, R`\(x = 2\) or \(x = -3\)`], a: 0, e: R`Solve \(2x - 1 = 5\) and \(2x - 1 = -5\).` },
    { q: R`\(|x - 2| < 3 \iff\ ?\)`, o: [R`\(-1 < x < 5\)`, R`\(x < 5\)`, R`\(-5 < x < 1\)`, R`\(x > -1\)`], a: 0, e: R`\(x\) is within 3 of 2: from \(2 - 3\) to \(2 + 3\).` },
    { q: R`\(f(x) = 2x + 1\), \(g(x) = x^2\). Find \(gf(1)\).`, o: [R`\(9\)`, R`\(3\)`, R`\(5\)`, R`\(4\)`], a: 0, e: R`Apply \(f\) first: \(f(1) = 3\). Then \(g(3) = 9\).` },
    { q: R`\(f(x) = e^x\). What is \(f^{-1}(x)\)?`, o: [R`\(\ln x\)`, R`\(e^{-x}\)`, R`\(\dfrac{1}{e^x}\)`, R`\(\log_{10} x\)`], a: 0, e: R`\(y = e^x \Rightarrow x = \ln y\). \(\ln\) undoes \(e\), not the reciprocal.` }
  ],
  flashcards: [
    ["Domain / range", "Inputs / outputs"],
    [R`Composite \(fg(x)\)`, R`\(f\big(g(x)\big)\): \(g\) first`],
    ["An inverse exists if…", "The function is one-to-one"],
    [R`Finding \(f^{-1}\)`, R`\(y = f(x)\), swap \(x\) and \(y\), rearrange`],
    [R`Graph of \(f^{-1}\)`, R`Reflection of \(f\) in \(y = x\)`],
    [R`Domain of \(f^{-1}\)`, R`Range of \(f\)`],
    [R`\(|x - a| < b\)`, R`\(a - b < x < a + b\)`],
    ["Modulus equations", "Sketch, solve both cases, check"]
  ]
});

S2Data.add({
  id: "2g", group: 2, y2: true, title: "Partial fractions",
  summary: "Splitting rational expressions into partial fractions, including repeated factors and improper fractions.",
  notes: R`
<h3>Linear factors</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>Split \(\dfrac{5x + 1}{(x - 1)(x + 2)}\) into partial fractions.
<ol><li>Write \(\dfrac{5x + 1}{(x - 1)(x + 2)} \equiv \dfrac{A}{x - 1} + \dfrac{B}{x + 2}\).</li>
<li>Multiply through by the denominator: \(5x + 1 \equiv A(x + 2) + B(x - 1)\).</li>
<li>Choose \(x\) to make a bracket zero. \(x = 1\): \(6 = 3A\), so \(A = 2\).</li>
<li>\(x = -2\): \(-9 = -3B\), so \(B = 3\).</li></ol>
Answer: \(\dfrac{2}{x - 1} + \dfrac{3}{x + 2}\).</div>
<h3>Repeated factors</h3>
<p>A squared factor needs two fractions:</p>
<p>\[\frac{f(x)}{(x + 1)(x - 2)^2} \equiv \frac{A}{x + 1} + \frac{B}{x - 2} + \frac{C}{(x - 2)^2}\]</p>
<p>Substitute convenient values of \(x\) to find \(A\) and \(C\), then compare coefficients (e.g. of \(x^2\)) to find \(B\).</p>
<h3>Improper fractions</h3>
<p>If the degree of the numerator is at least the degree of the denominator, divide first to get a polynomial plus a proper fraction, then split the proper fraction.</p>
<h3>Why it's useful</h3>
<p>Partial fractions let you integrate rational functions, and binomially expand rational expressions by expanding each fraction separately.</p>
`,
  quiz: [
    { q: R`\(\dfrac{5x + 1}{(x - 1)(x + 2)} \equiv \dfrac{A}{x - 1} + \dfrac{B}{x + 2}\). Find \(A\).`, o: ["2", "3", "1", "5"], a: 0, e: R`\(5x + 1 \equiv A(x + 2) + B(x - 1)\). Put \(x = 1\): \(6 = 3A\).` },
    { q: R`In the same question, find \(B\).`, o: ["3", "2", "−3", "1"], a: 0, e: R`Put \(x = -2\): \(-9 = -3B\), so \(B = 3\).` },
    { q: R`Partial fractions for \(\dfrac{1}{x(x - 2)^2}\) need the terms…`, o: [R`\(\dfrac{A}{x} + \dfrac{B}{x - 2} + \dfrac{C}{(x - 2)^2}\)`, R`\(\dfrac{A}{x} + \dfrac{B}{(x - 2)^2}\)`, R`\(\dfrac{A}{x} + \dfrac{B}{x - 2}\)`, R`\(\dfrac{A}{x(x - 2)}\)`], a: 0, e: R`A repeated factor \((x - 2)^2\) needs both \(\dfrac{B}{x-2}\) and \(\dfrac{C}{(x-2)^2}\).` },
    { q: "A fraction is improper when…", o: ["The numerator's degree ≥ the denominator's degree", "The denominator is quadratic", "There's a repeated factor", "The numerator is a constant"], a: 0, e: "Like 7/3 in arithmetic, it contains a 'whole' part that must be divided out first." },
    { q: "Partial fractions help with…", o: ["Integration and binomial expansion", "Solving quadratics only", "Differentiation only", "Proof by contradiction"], a: 0, e: R`Each simple fraction like \(\dfrac{A}{x - a}\) integrates to a log and expands easily.` },
    { q: R`\(\dfrac{1}{(x + 1)(x + 3)} \equiv \dfrac{A}{x + 1} + \dfrac{B}{x + 3}\). Find \(A\).`, o: [R`\(\tfrac12\)`, R`\(-\tfrac12\)`, "1", "2"], a: 0, e: R`\(1 \equiv A(x + 3) + B(x + 1)\). Put \(x = -1\): \(1 = 2A\).` },
    { q: R`In the same question, find \(B\).`, o: [R`\(-\tfrac12\)`, R`\(\tfrac12\)`, "1", "−1"], a: 0, e: R`Put \(x = -3\): \(1 = -2B\).` },
    { q: "What's the best first step for an improper fraction?", o: ["Algebraic division", R`Substitute \(x = 0\)`, "Compare coefficients", "Differentiate"], a: 0, e: "Divide to separate the polynomial part, leaving a proper fraction to split." },
    { q: R`The substitution method works by choosing \(x\) to…`, o: ["Make a bracket zero", "Make everything zero", "Make the numerator zero", R`Remove \(A\)`], a: 0, e: "When a bracket is zero, its term disappears, leaving one unknown to find." }
  ],
  flashcards: [
    ["Linear factors", R`\(\dfrac{A}{x - a} + \dfrac{B}{x - b}\)`],
    [R`Repeated factor \((x - a)^2\)`, R`\(\dfrac{B}{x - a} + \dfrac{C}{(x - a)^2}\)`],
    ["Finding the constants", "Multiply through; substitute roots; compare coefficients"],
    ["Improper fraction", "Divide first"],
    ["Uses", "Integration; binomial expansion"]
  ]
});

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Straight lines and circles",
  summary: "Equations of lines, parallel and perpendicular lines, and equations of circles with tangents and chords.",
  notes: R`
<h3>Straight lines</h3>
<ul>
<li>Equation forms: \(y - y_1 = m(x - x_1)\), \(\ y = mx + c\), or \(ax + by + c = 0\) with integer \(a, b, c\).</li>
<li>Gradient: \(m = \dfrac{y_2 - y_1}{x_2 - x_1}\).</li>
<li>Parallel lines have equal gradients. Perpendicular lines satisfy \(m_1 m_2 = -1\), so the perpendicular gradient is the negative reciprocal.</li>
<li>Distance between points: \(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\). Midpoint: \(\left(\dfrac{x_1 + x_2}{2},\ \dfrac{y_1 + y_2}{2}\right)\).</li>
</ul>
<h3>Circles</h3>
<p>\[(x - a)^2 + (y - b)^2 = r^2 \quad\text{has centre } (a, b) \text{ and radius } r.\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the centre and radius of \(x^2 + y^2 - 6x + 4y - 12 = 0\).
<ol><li>Group the \(x\) and \(y\) terms: \((x^2 - 6x) + (y^2 + 4y) = 12\).</li>
<li>Complete the square in each: \((x - 3)^2 - 9 + (y + 2)^2 - 4 = 12\).</li>
<li>Rearrange: \((x - 3)^2 + (y + 2)^2 = 25\).</li></ol>
Centre \((3, -2)\), radius \(\sqrt{25} = 5\). Note the signs flip from the brackets.</div>
<h3>Circle properties</h3>
<ul>
<li>A tangent is perpendicular to the radius at the point of contact.</li>
<li>The perpendicular bisector of a chord passes through the centre.</li>
<li>The angle in a semicircle is \(90^\circ\): if \(AB\) is a diameter and \(C\) is on the circle, \(\angle ACB = 90^\circ\).</li>
<li>The centre of the circle through three points is where the perpendicular bisectors of two chords meet.</li>
</ul>
<p>A line meets a circle in 2, 1 or 0 points: substitute the line into the circle and use the discriminant.</p>
`,
  quiz: [
    { q: R`Centre and radius of \((x - 3)^2 + (y + 2)^2 = 25\)?`, o: [R`\((3, -2)\), radius 5`, R`\((-3, 2)\), radius 5`, R`\((3, -2)\), radius 25`, R`\((3, 2)\), radius 5`], a: 0, e: R`Compare with \((x - a)^2 + (y - b)^2 = r^2\): \(a = 3\), \(b = -2\), \(r = \sqrt{25} = 5\).` },
    { q: R`Gradient perpendicular to \(3x + 2y = 6\)?`, o: [R`\(\tfrac23\)`, R`\(-\tfrac32\)`, R`\(\tfrac32\)`, R`\(-\tfrac23\)`], a: 0, e: R`Rearranging, \(y = -\tfrac32 x + 3\), so \(m = -\tfrac32\). The negative reciprocal is \(\tfrac23\).` },
    { q: "A tangent to a circle is perpendicular to…", o: ["The radius at that point", "The diameter", R`The \(x\)-axis`, "The chord"], a: 0, e: "This is a key circle property used to find tangent equations." },
    { q: "The perpendicular bisector of a chord passes through…", o: ["The centre", "The tangent point", "The origin", "The circumference"], a: 0, e: "The centre is equidistant from both ends of the chord, so it lies on the bisector." },
    { q: R`Centre of \(x^2 + y^2 + 8x - 2y = 0\)?`, o: [R`\((-4, 1)\)`, R`\((4, -1)\)`, R`\((8, -2)\)`, R`\((-8, 2)\)`], a: 0, e: R`Complete the square: \((x + 4)^2 + (y - 1)^2 = 17\). The centre has the opposite signs: \((-4, 1)\).` },
    { q: R`The line through \((2, 5)\) with gradient 3 is…`, o: [R`\(y - 5 = 3(x - 2)\)`, R`\(y - 2 = 3(x - 5)\)`, R`\(y = 3x + 5\)`, R`\(y + 5 = 3(x + 2)\)`], a: 0, e: R`Use \(y - y_1 = m(x - x_1)\) with \(x_1 = 2\), \(y_1 = 5\).` },
    { q: R`Distance from \((1, 2)\) to \((4, 6)\)?`, o: ["5", "7", R`\(\sqrt7\)`, "25"], a: 0, e: R`\(\sqrt{3^2 + 4^2} = \sqrt{25} = 5\).` },
    { q: R`If \(AB\) is a diameter and \(C\) is on the circle, \(\angle ACB = \ ?\)`, o: [R`\(90^\circ\)`, R`\(180^\circ\)`, R`\(45^\circ\)`, R`\(60^\circ\)`], a: 0, e: "The angle in a semicircle is always a right angle." },
    { q: "A line is a tangent to a circle when the substituted quadratic has…", o: [R`\(b^2 - 4ac = 0\)`, R`\(b^2 - 4ac > 0\)`, R`\(b^2 - 4ac < 0\)`, R`\(a = 0\)`], a: 0, e: "One repeated solution means the line touches the circle at exactly one point." }
  ],
  flashcards: [
    ["Point–gradient form", R`\(y - y_1 = m(x - x_1)\)`],
    ["Perpendicular gradients", R`\(m_1 m_2 = -1\)`],
    ["Circle equation", R`\((x - a)^2 + (y - b)^2 = r^2\)`],
    ["Expanded circle equation", R`Complete the square in \(x\) and in \(y\)`],
    ["Tangent", "Perpendicular to the radius"],
    ["Perpendicular bisector of a chord", "Passes through the centre"],
    ["Angle in a semicircle", R`\(90^\circ\)`],
    ["Line and circle", "Substitute; discriminant gives 2, 1 or 0 points"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y2: true, title: "Parametric equations",
  summary: "Curves defined parametrically, converting to Cartesian form and modelling.",
  notes: R`
<h3>Parametric curves</h3>
<p>Both coordinates are given in terms of a third variable, the <b>parameter</b> \(t\): \(x = f(t)\), \(y = g(t)\). Each value of \(t\) gives one point on the curve.</p>
<h3>Converting to Cartesian form</h3>
<ul>
<li><b>Algebraic:</b> make \(t\) the subject of one equation and substitute into the other. For \(x = 2t + 1,\ y = t^2\): \(t = \dfrac{x - 1}{2}\), so \(y = \dfrac{(x - 1)^2}{4}\).</li>
<li><b>Trigonometric:</b> use an identity. For \(x = 3\cos t,\ y = 3\sin t\): \(x^2 + y^2 = 9\cos^2 t + 9\sin^2 t = 9\), a circle of radius 3.</li>
<li>For \(x = \cos t,\ y = \cos 2t\): use \(\cos 2t = 2\cos^2 t - 1\), giving \(y = 2x^2 - 1\).</li>
</ul>
<p>The Cartesian equation's domain comes from the range of \(x(t)\). For \(x = 3\cos t\), that's \(-3 \le x \le 3\).</p>
<h3>Intersections</h3>
<p>To find where a parametric curve meets a line, substitute \(x(t)\) and \(y(t)\) into the line's equation and solve for \(t\). Then find the coordinates.</p>
<h3>Modelling</h3>
<p>A projectile: \(x = (u\cos\theta)t\), \(y = (u\sin\theta)t - \tfrac12 gt^2\), where \(t\) is time.</p>
<p>Calculus: \(\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}\) (see Further differentiation).</p>
`,
  quiz: [
    { q: R`\(x = 3\cos t,\ y = 3\sin t\) describes…`, o: ["A circle of radius 3", "A parabola", "A line", "An ellipse of width 6 and height 3"], a: 0, e: R`\(x^2 + y^2 = 9(\cos^2 t + \sin^2 t) = 9\).` },
    { q: R`\(x = 2t + 1,\ y = t^2\). Cartesian form?`, o: [R`\(y = \dfrac{(x - 1)^2}{4}\)`, R`\(y = \dfrac{(x + 1)^2}{4}\)`, R`\(y = 2x + 1\)`, R`\(y = (x - 1)^2\)`], a: 0, e: R`\(t = \dfrac{x - 1}{2}\), then square it.` },
    { q: R`\(x = \cos t,\ y = \cos 2t\). Cartesian form?`, o: [R`\(y = 2x^2 - 1\)`, R`\(y = 1 - 2x^2\)`, R`\(y = x^2\)`, R`\(y = 2x\)`], a: 0, e: R`\(\cos 2t = 2\cos^2 t - 1\) and \(\cos t = x\).` },
    { q: R`For \(x = 3\cos t\), the domain of the Cartesian equation is…`, o: [R`\(-3 \le x \le 3\)`, R`\(x \in \mathbb{R}\)`, R`\(x \ge 0\)`, R`\(0 \le x \le 3\)`], a: 0, e: R`\(\cos t\) runs from \(-1\) to \(1\), so \(3\cos t\) runs from \(-3\) to \(3\).` },
    { q: R`Where does \(x = t^2,\ y = 2t\) meet \(y = x\)?`, o: [R`\(t = 0\) or \(t = 2\)`, R`\(t = 1\)`, R`\(t = 2\) only`, R`\(t = -2\)`], a: 0, e: R`\(2t = t^2 \Rightarrow t(t - 2) = 0\). Don't divide by \(t\) and lose \(t = 0\).` },
    { q: R`For a parametric curve, \(\dfrac{dy}{dx} = \ ?\)`, o: [R`\(\dfrac{dy/dt}{dx/dt}\)`, R`\(\dfrac{dx/dt}{dy/dt}\)`, R`\(\dfrac{dy}{dt}\times\dfrac{dx}{dt}\)`, R`\(\dfrac{dy}{dt}+\dfrac{dx}{dt}\)`], a: 0, e: R`By the chain rule, \(\dfrac{dy}{dx} = \dfrac{dy}{dt}\times\dfrac{dt}{dx}\).` },
    { q: R`In a projectile model, the parameter \(t\) usually represents…`, o: ["Time", "Angle", "Speed", "Distance"], a: 0, e: "Position is described as it changes over time." },
    { q: R`\(x = t + 1,\ y = t - 1\). Cartesian form?`, o: [R`\(y = x - 2\)`, R`\(y = x + 2\)`, R`\(y = 2x\)`, R`\(y = x\)`], a: 0, e: R`\(t = x - 1\), so \(y = (x - 1) - 1\).` },
    { q: R`\(x = 2\sec t,\ y = 2\tan t\) uses the identity…`, o: [R`\(\sec^2 t - \tan^2 t = 1\)`, R`\(\sin^2 t + \cos^2 t = 1\)`, R`\(\cos 2t = 1 - 2\sin^2 t\)`, R`\(\tan t = \dfrac{\sin t}{\cos t}\) only`], a: 0, e: R`It gives \(\dfrac{x^2}{4} - \dfrac{y^2}{4} = 1\), so \(x^2 - y^2 = 4\).` }
  ],
  flashcards: [
    ["Parametric equations", R`\(x = f(t),\ y = g(t)\)`],
    ["To Cartesian (algebraic)", R`Make \(t\) the subject of one equation and substitute`],
    ["To Cartesian (trig)", R`Use an identity, e.g. \(\sin^2 t + \cos^2 t = 1\)`],
    ["Domain of the Cartesian form", R`The range of \(x(t)\)`],
    ["Intersections", R`Substitute \(x(t)\), \(y(t)\) into the other equation`],
    ["Parametric gradient", R`\(\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}\)`]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Binomial expansion",
  summary: R`Expanding \((a + b)^n\) with \(\binom{n}{r}\), and (Year 13) \((1 + x)^n\) for any rational \(n\) with its range of validity.`,
  notes: R`
<h3>Positive integer \(n\) (Year 12)</h3>
<p>\[(a + b)^n = a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + b^n, \qquad \binom{n}{r} = \frac{n!}{r!\,(n - r)!}\]</p>
<p>The coefficients \(\binom{n}{r}\) (also written \({}^nC_r\)) are the numbers in Pascal's triangle.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Find the coefficient of \(x^3\) in \((2 + 3x)^5\).
<ol><li>The general term is \(\binom{5}{r}2^{5-r}(3x)^r\). For \(x^3\), take \(r = 3\).</li>
<li>\(\binom{5}{3} \times 2^2 \times (3x)^3 = 10 \times 4 \times 27x^3\).</li></ol>
The coefficient is \(1080\). (Remember to cube the 3 as well as the \(x\).)</div>
<p>A useful special case:</p>
<p>\[(1 + x)^n = 1 + nx + \frac{n(n - 1)}{2!}x^2 + \frac{n(n - 1)(n - 2)}{3!}x^3 + \cdots\]</p>
<p>Expansions give quick estimates: \(1.02^8\) is the first few terms of \((1 + 0.02)^8\).</p>
<div class="box box-c"><span class="box-title">Year 13: any rational \(n\)</span>The same \((1 + x)^n\) formula gives an infinite series when \(n\) is negative or a fraction. It is valid only for \(|x| < 1\).
<ul><li>\((1 + x)^{-1} = 1 - x + x^2 - x^3 + \cdots\)</li>
<li>\((1 - 2x)^{\frac12} = 1 - x - \tfrac12x^2 - \cdots\), valid for \(|2x| < 1\), i.e. \(|x| < \tfrac12\).</li>
<li>For \((a + bx)^n\), take out \(a^n\) first: \(a^n\left(1 + \dfrac{b}{a}x\right)^n\), valid for \(\left|\dfrac{bx}{a}\right| < 1\).</li>
<li>For rational functions, split into partial fractions and expand each one.</li></ul></div>
`,
  quiz: [
    { q: R`\(\binom{5}{2} = \ ?\)`, o: ["10", "20", "5", "60"], a: 0, e: R`\(\dfrac{5!}{2!\,3!} = \dfrac{120}{2 \times 6} = 10\).` },
    { q: R`Coefficient of \(x^3\) in \((2 + 3x)^5\)?`, o: ["1080", "270", "540", "810"], a: 0, e: R`\(\binom53 \times 2^2 \times 3^3 = 10 \times 4 \times 27\).` },
    { q: R`First two terms of \((1 + x)^{10}\)?`, o: [R`\(1 + 10x\)`, R`\(1 + x\)`, R`\(10 + x\)`, R`\(1 + 45x\)`], a: 0, e: R`\((1 + x)^n = 1 + nx + \cdots\) with \(n = 10\).` },
    { q: R`The \(x^2\) term in \((1 + x)^6\)?`, o: [R`\(15x^2\)`, R`\(6x^2\)`, R`\(30x^2\)`, R`\(36x^2\)`], a: 0, e: R`\(\dfrac{6 \times 5}{2!} = 15\).` },
    { q: R`Year 13: \((1 + x)^{-1} = \ ?\)`, o: [R`\(1 - x + x^2 - x^3 + \cdots\)`, R`\(1 + x + x^2 + \cdots\)`, R`\(1 - x\)`, R`\(1 + x^{-1}\)`], a: 0, e: R`With \(n = -1\): \(1 + (-1)x + \dfrac{(-1)(-2)}{2}x^2 + \cdots\), so the signs alternate.` },
    { q: R`Year 13: \((1 - 2x)^{\frac12}\) is valid for…`, o: [R`\(|x| < \tfrac12\)`, R`\(|x| < 1\)`, R`\(|x| < 2\)`, R`All \(x\)`], a: 0, e: R`Need \(|-2x| < 1\), so \(|x| < \tfrac12\).` },
    { q: R`Year 13: \((4 + x)^{\frac12} = 2\left(1 + \tfrac{x}{4}\right)^{\frac12}\), valid for…`, o: [R`\(|x| < 4\)`, R`\(|x| < 1\)`, R`\(|x| < \tfrac14\)`, R`\(|x| < 2\)`], a: 0, e: R`Need \(\left|\tfrac{x}{4}\right| < 1\), so \(|x| < 4\).` },
    { q: R`Constant term in \(\left(x + \dfrac1x\right)^4\)?`, o: ["6", "4", "1", "12"], a: 0, e: R`You need two \(x\)'s and two \(\frac1x\)'s to cancel: \(\binom42 = 6\).` },
    { q: "Row 4 of Pascal's triangle?", o: ["1 4 6 4 1", "1 3 3 1", "1 5 10 10 5 1", "1 4 4 1"], a: 0, e: R`These are \(\binom40, \binom41, \ldots, \binom44\), the coefficients of \((a + b)^4\).` }
  ],
  flashcards: [
    [R`\(\binom{n}{r}\)`, R`\(\dfrac{n!}{r!\,(n - r)!}\)`],
    [R`General term of \((a + b)^n\)`, R`\(\binom{n}{r}a^{n-r}b^r\)`],
    [R`\((1 + x)^n\)`, R`\(1 + nx + \dfrac{n(n-1)}{2!}x^2 + \cdots\)`],
    [R`Y13: rational \(n\)`, R`Infinite series, valid for \(|x| < 1\)`],
    [R`Y13: \((a + bx)^n\)`, R`\(a^n\left(1 + \tfrac{b}{a}x\right)^n\), valid for \(\left|\tfrac{bx}{a}\right| < 1\)`],
    [R`Y13: \((1 + x)^{-1}\)`, R`\(1 - x + x^2 - x^3 + \cdots\)`]
  ]
});

S2Data.add({
  id: "4b", group: 4, y2: true, title: "Sequences and series",
  summary: "Sequence notation, arithmetic and geometric series, sum to infinity and sigma notation.",
  notes: R`
<h3>Sequences</h3>
<p>A sequence can be given by an \(n\)th-term formula \(u_n = f(n)\), or by a recurrence relation \(u_{n+1} = f(u_n)\). Sequences can be increasing, decreasing or periodic: e.g. \(u_{n+1} = \dfrac{1}{u_n}\) repeats every 2 terms.</p>
<h3>Arithmetic sequences (add \(d\) each time)</h3>
<p>\[u_n = a + (n - 1)d \qquad S_n = \frac{n}{2}\big[2a + (n - 1)d\big] = \frac{n}{2}(a + l)\]</p>
<p>where \(a\) is the first term, \(d\) the common difference and \(l\) the last term.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(1 + 2 + \cdots + 100\): \(n = 100\), \(a = 1\), \(l = 100\), so \(S_{100} = \dfrac{100}{2}(1 + 100) = 5050\).</div>
<h3>Geometric sequences (multiply by \(r\) each time)</h3>
<p>\[u_n = ar^{n-1} \qquad S_n = \frac{a(1 - r^n)}{1 - r}\]</p>
<p>If \(|r| < 1\), the terms shrink and the series converges to the <b>sum to infinity</b>:</p>
<p>\[S_\infty = \frac{a}{1 - r}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(8 + 4 + 2 + \cdots\): \(a = 8\), \(r = \tfrac12\), so \(S_\infty = \dfrac{8}{1 - \frac12} = 16\).</div>
<p>"First term to exceed" problems need logs: \(2^n > 1000 \Rightarrow n > \dfrac{\log 1000}{\log 2} = 9.97\ldots\), so \(n = 10\).</p>
<h3>Sigma notation</h3>
<p>\(\displaystyle\sum_{r=1}^{n} r = \frac{n(n + 1)}{2}\). For example, \(\displaystyle\sum_{r=1}^{10}(3r + 2)\) is arithmetic with first term 5 and last term 32, so it equals \(\dfrac{10}{2}(5 + 32) = 185\).</p>
`,
  quiz: [
    { q: R`The \(n\)th term of an arithmetic sequence is…`, o: [R`\(a + (n - 1)d\)`, R`\(ar^{n-1}\)`, R`\(a + nd\)`, R`\(\frac{n}{2}(a + l)\)`], a: 0, e: R`The first term has no \(d\) added, the second has one, so the \(n\)th has \((n - 1)\).` },
    { q: R`\(1 + 2 + \cdots + 100 = \ ?\)`, o: ["5050", "5000", "10 100", "4950"], a: 0, e: R`\(\dfrac{100}{2}(1 + 100) = 50 \times 101\).` },
    { q: R`Find \(S_\infty\) for \(8 + 4 + 2 + \cdots\)`, o: ["16", "14", "12", R`\(\infty\)`], a: 0, e: R`\(\dfrac{a}{1 - r} = \dfrac{8}{\frac12} = 16\).` },
    { q: "A geometric series converges when…", o: [R`\(|r| < 1\)`, R`\(r > 1\)`, R`\(r = 1\)`, R`\(a < 1\)`], a: 0, e: R`Only then do the terms shrink towards zero, so the total settles at a finite value.` },
    { q: R`\(S_n\) for a geometric series is…`, o: [R`\(\dfrac{a(1 - r^n)}{1 - r}\)`, R`\(\frac{n}{2}\big[2a + (n - 1)d\big]\)`, R`\(\dfrac{a}{1 - r}\)`, R`\(ar^n\)`], a: 0, e: R`\(\dfrac{a}{1-r}\) is the sum to infinity, not the sum of \(n\) terms.` },
    { q: R`\(u_{n+1} = \dfrac{1}{u_n}\) with \(u_1 = 2\) is…`, o: ["Periodic with period 2", "Increasing", "Decreasing", "Arithmetic"], a: 0, e: R`\(2, \tfrac12, 2, \tfrac12, \ldots\) repeats every two terms.` },
    { q: R`\(\displaystyle\sum_{r=1}^{10}(3r + 2) = \ ?\)`, o: ["185", "165", "175", "200"], a: 0, e: R`First term \(5\), last term \(32\): \(\dfrac{10}{2}(5 + 32)\).` },
    { q: R`Smallest \(n\) with \(2^n > 1000\)?`, o: ["10", "9", "11", "100"], a: 0, e: R`\(2^9 = 512\) and \(2^{10} = 1024\).` },
    { q: "Find the 5th term of 3, 6, 12, …", o: ["48", "24", "96", "15"], a: 0, e: R`\(ar^4 = 3 \times 2^4 = 48\).` }
  ],
  flashcards: [
    [R`Arithmetic \(u_n\)`, R`\(a + (n - 1)d\)`],
    [R`Arithmetic \(S_n\)`, R`\(\frac{n}{2}\big[2a + (n - 1)d\big] = \frac{n}{2}(a + l)\)`],
    [R`Geometric \(u_n\)`, R`\(ar^{n-1}\)`],
    [R`Geometric \(S_n\)`, R`\(\dfrac{a(1 - r^n)}{1 - r}\)`],
    ["Sum to infinity", R`\(\dfrac{a}{1 - r}\), only if \(|r| < 1\)`],
    [R`\(\sum_{r=1}^{n} r\)`, R`\(\dfrac{n(n + 1)}{2}\)`],
    ["Periodic sequence", "Terms repeat after a fixed number of steps"]
  ]
});

S2Data.detail("1a", { mistakes: ["Proving a general statement by checking a few examples. Examples can disprove but never prove (unless every case is checked)."], tips: ["End with a clear conclusion that links back to the statement."], fact: "Fermat's Last Theorem took 358 years to prove, finally done by Andrew Wiles in 1994." });
S2Data.detail("2a", { mistakes: [R`Getting the power of \(\dfrac{\sqrt{x}}{x^2}\) wrong. It's \(x^{\frac12 - 2} = x^{-\frac32}\).`], tips: ["Before differentiating or integrating, always rewrite roots and fractions as powers."], fact: "Surds come from the Latin 'surdus', meaning deaf or mute: numbers that can't be 'spoken' exactly." });
S2Data.detail("2b", { mistakes: [R`Forgetting the factor \(a\) when completing the square for \(ax^2 + bx + c\).`], tips: [R`When a question says 'equal roots' or 'tangent', think \(b^2 - 4ac = 0\).`], fact: "Al-Khwarizmi solved quadratics geometrically by literally completing a square with shapes." });
S2Data.detail("2c", { mistakes: [R`Writing \(-2 > x > 3\) for 'outside' regions. It must be two separate inequalities: \(x < -2\) or \(x > 3\).`], tips: ["Always sketch the quadratic for quadratic inequalities."], fact: "Linear programming, built on inequalities and regions, won the 1975 Nobel prize in economics." });
S2Data.detail("2d", { mistakes: [R`Getting \(f(2x)\) the wrong way round. It's a stretch with scale factor \(\tfrac12\), not 2.`], tips: ["Label every intercept, turning point and asymptote on a sketch."], fact: "Graphing calculators were introduced in 1985; before that, sketching skills were essential." });
S2Data.detail("2e", { mistakes: [R`Concluding \((x + 2)\) is a factor from \(f(2) = 0\). It's \((x - 2)\).`], tips: [R`Try \(\pm1\), \(\pm2\) and other factors of the constant term first.`], fact: "There's a formula for cubics (Cardano, 1545) but none in general for quintics, as Abel proved." });
S2Data.detail("2f", { mistakes: [R`Finding \(fg(x)\) by applying \(f\) first. Apply \(g\) first.`], tips: ["State the domain of an inverse: it's the range of the original function."], fact: "The word 'function' was introduced by Leibniz in 1673." });
S2Data.detail("2g", { mistakes: ["Forgetting the extra term for a repeated factor."], tips: ["Use the cover-up idea: substitute the root of each linear factor."], fact: "Partial fractions are used in engineering to analyse electrical circuits with Laplace transforms." });
S2Data.detail("3a", { mistakes: [R`Reading the centre of \((x + 3)^2 + (y - 2)^2 = 9\) as \((3, -2)\). It's \((-3, 2)\).`], tips: ["Use the fact that a tangent is perpendicular to the radius to find tangent equations quickly."], fact: "Descartes' coordinate geometry joined algebra and geometry for the first time in 1637." });
S2Data.detail("3b", { mistakes: ["Forgetting to state a restricted domain for the Cartesian equation."], tips: ["Look for a trig identity whenever both x and y involve trig functions of t."], fact: "Computer graphics draw curves using parametric Bézier curves." });
S2Data.detail("4a", { mistakes: [R`Forgetting to raise the coefficient: the \(x^3\) term in \((2 + 3x)^5\) uses \((3x)^3 = 27x^3\), not \(3x^3\).`], tips: ["State the validity range for every Year 13 binomial expansion."], fact: "Newton generalised the binomial theorem to fractional powers in 1665." });
S2Data.detail("4b", { mistakes: [R`Using \(S_\infty\) when \(|r| \ge 1\): the series doesn't converge.`], tips: ["For 'first term to exceed' questions, use logs and round up."], fact: "Gauss reputedly summed 1 to 100 instantly as a schoolboy by pairing terms to make 101." });
