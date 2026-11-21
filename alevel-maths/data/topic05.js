/* A-level Maths² — Pure: trigonometry, exponentials, calculus, numerical methods, vectors */

S2Data.add({
  id: "5a", group: 5, y1: true, title: "Trigonometry: rules, graphs and identities",
  summary: String.raw`Sine and cosine rules, trig graphs, solving trig equations and the identities \(\tan\theta \equiv \frac{\sin\theta}{\cos\theta}\) and \(\sin^2\theta + \cos^2\theta \equiv 1\).`,
  notes: String.raw`
<h3>Triangles</h3>
<p>For any triangle with sides \(a, b, c\) opposite angles \(A, B, C\):</p>
<table><tr><th>Rule</th><th>Formula</th><th>Use it when you know…</th></tr>
<tr><td>Sine rule</td><td>\(\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}\)</td><td>A side and its opposite angle, plus one more side or angle</td></tr>
<tr><td>Cosine rule</td><td>\(a^2 = b^2 + c^2 - 2bc\cos A\)</td><td>Two sides and the angle between them, or all three sides</td></tr>
<tr><td>Area</td><td>\(\text{Area} = \tfrac12 ab\sin C\)</td><td>Two sides and the angle between them</td></tr></table>
<div class="box box-mistake"><span class="box-title">The ambiguous case</span>When the sine rule gives \(\sin B = 0.8\), there are two possible angles: \(B = 53.1^\circ\) or \(B = 180^\circ - 53.1^\circ = 126.9^\circ\). Check whether both fit in the triangle (the angles must add to less than \(180^\circ\)).</div>
<h3>Graphs and symmetry</h3>
<ul>
<li>\(y = \sin x\) and \(y = \cos x\) repeat every \(360^\circ\) and stay between \(-1\) and \(1\).</li>
<li>\(y = \tan x\) repeats every \(180^\circ\) and has vertical asymptotes at \(x = 90^\circ, 270^\circ\).</li>
<li>Symmetries that give the second solution: \(\sin(180^\circ - \theta) = \sin\theta\), \(\cos(360^\circ - \theta) = \cos\theta\), \(\tan(180^\circ + \theta) = \tan\theta\).</li>
</ul>
<h3>The two identities</h3>
<p>\[\tan\theta \equiv \frac{\sin\theta}{\cos\theta} \qquad\qquad \sin^2\theta + \cos^2\theta \equiv 1\]</p>
<p>Use them to rewrite an equation so it contains only <b>one</b> trig function.</p>
<h3>Solving equations</h3>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve \(2\sin^2 x + 3\cos x - 3 = 0\) for \(0 \le x < 360^\circ\).
<ol>
<li>The equation mixes \(\sin\) and \(\cos\), so replace \(\sin^2 x\) with \(1 - \cos^2 x\):
\[2(1 - \cos^2 x) + 3\cos x - 3 = 0\]</li>
<li>Expand and tidy into a quadratic in \(\cos x\):
\[2\cos^2 x - 3\cos x + 1 = 0\]</li>
<li>Factorise: \((2\cos x - 1)(\cos x - 1) = 0\), so \(\cos x = \tfrac12\) or \(\cos x = 1\).</li>
<li>\(\cos x = \tfrac12\): the calculator gives \(60^\circ\); the second solution is \(360^\circ - 60^\circ = 300^\circ\).</li>
<li>\(\cos x = 1\): \(x = 0^\circ\).</li>
</ol>
<b>Answer:</b> \(x = 0^\circ, 60^\circ, 300^\circ\).</div>
<ul>
<li>For \(\sin 2x = k\) with \(0 \le x < 360^\circ\), first solve for \(2x\) over \(0 \le 2x < 720^\circ\), then halve every answer.</li>
<li>Never divide both sides by \(\sin x\) or \(\cos x\): you lose the solutions where it equals 0. Factorise instead.</li>
</ul>
`,
  quiz: [
    { q: String.raw`\(\sin^2\theta + \cos^2\theta = \ ?\)`, o: ["\\(1\\)", "\\(0\\)", "\\(\\tan\\theta\\)", "\\(2\\)"], a: 0, e: String.raw`This is the Pythagorean identity: it holds for every angle \(\theta\).` },
    { q: String.raw`\(\tan\theta = \ ?\)`, o: ["\\(\\dfrac{\\sin\\theta}{\\cos\\theta}\\)", "\\(\\dfrac{\\cos\\theta}{\\sin\\theta}\\)", "\\(\\dfrac{1}{\\sin\\theta}\\)", "\\(\\sin\\theta\\cos\\theta\\)"], a: 0, e: String.raw`On the unit circle, \(\tan\theta\) is the gradient: \(y\) over \(x\), which is \(\sin\theta\) over \(\cos\theta\).` },
    { q: String.raw`What is the period of \(y = \tan x\)?`, o: ["\\(180^\\circ\\)", "\\(360^\\circ\\)", "\\(90^\\circ\\)", "\\(720^\\circ\\)"], a: 0, e: String.raw`\(\tan(x + 180^\circ) = \tan x\), so the graph repeats every \(180^\circ\).` },
    { q: String.raw`Solve \(\sin x = 0.5\) for \(0 \le x < 360^\circ\).`, o: ["\\(30^\\circ, 150^\\circ\\)", "\\(30^\\circ, 330^\\circ\\)", "\\(60^\\circ, 120^\\circ\\)", "\\(30^\\circ\\) only"], a: 0, e: String.raw`The calculator gives \(30^\circ\). Sine is positive in the first and second quadrants, so the other solution is \(180^\circ - 30^\circ = 150^\circ\).` },
    { q: String.raw`Solve \(\cos x = \tfrac12\) for \(0 \le x < 360^\circ\).`, o: ["\\(60^\\circ, 300^\\circ\\)", "\\(60^\\circ, 120^\\circ\\)", "\\(30^\\circ, 330^\\circ\\)", "\\(60^\\circ\\) only"], a: 0, e: String.raw`The calculator gives \(60^\circ\). Cosine is symmetric about \(360^\circ\), so the other solution is \(360^\circ - 60^\circ = 300^\circ\).` },
    { q: String.raw`\(\sin(180^\circ - \theta) = \ ?\)`, o: ["\\(\\sin\\theta\\)", "\\(-\\sin\\theta\\)", "\\(\\cos\\theta\\)", "\\(-\\cos\\theta\\)"], a: 0, e: String.raw`The sine graph is symmetric about \(90^\circ\), so angles \(\theta\) and \(180^\circ - \theta\) have the same sine.` },
    { q: String.raw`To solve \(\sin 2x = \tfrac12\) for \(0 \le x < 360^\circ\), you should consider \(2x\) over…`, o: ["\\(0 \\le 2x < 720^\\circ\\)", "\\(0 \\le 2x < 360^\\circ\\)", "\\(0 \\le 2x < 180^\\circ\\)", "\\(-360^\\circ \\le 2x < 360^\\circ\\)"], a: 0, e: String.raw`Doubling the interval \(0 \le x < 360^\circ\) gives \(0 \le 2x < 720^\circ\). Find every value of \(2x\) there, then halve them.` },
    { q: String.raw`Why shouldn't you divide \(\sin x\cos x = \sin x\) by \(\sin x\)?`, o: ["You'd lose the solutions where \\(\\sin x = 0\\)", "It's undefined", "It's slower", "You'd gain extra solutions"], a: 0, e: String.raw`Factorise instead: \(\sin x(\cos x - 1) = 0\), giving \(\sin x = 0\) <i>or</i> \(\cos x = 1\). Dividing throws away \(\sin x = 0\).` },
    { q: String.raw`Find the area of a triangle with sides 5 and 8 and included angle \(30^\circ\).`, o: ["\\(10\\)", "\\(20\\)", "\\(40\\)", "\\(13\\)"], a: 0, e: String.raw`\(\tfrac12 \times 5 \times 8 \times \sin 30^\circ = 20 \times \tfrac12 = 10\).` }
  ],
  flashcards: [
    ["Sine rule", String.raw`\(\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}\)`],
    ["Cosine rule", String.raw`\(a^2 = b^2 + c^2 - 2bc\cos A\)`],
    ["Triangle area", String.raw`\(\tfrac12 ab\sin C\)`],
    ["Key identities", String.raw`\(\tan\theta \equiv \dfrac{\sin\theta}{\cos\theta}\), \(\ \sin^2\theta + \cos^2\theta \equiv 1\)`],
    [String.raw`\(\sin(180^\circ - \theta)\)`, String.raw`\(\sin\theta\)`],
    [String.raw`\(\cos(360^\circ - \theta)\)`, String.raw`\(\cos\theta\)`],
    [String.raw`Solving \(\sin kx = c\)`, String.raw`Solve over \(k\) times the interval, then divide by \(k\)`],
    ["Never divide by…", String.raw`\(\sin x\) or \(\cos x\): factorise instead`]
  ]
});

S2Data.add({
  id: "5b", group: 5, y2: true, title: "Radians, arcs and reciprocal functions",
  summary: "Radian measure, arc length and sector area, small-angle approximations, sec, cosec, cot and inverse trig functions.",
  notes: `
<h3>Radians</h3>
<p>π radians = 180°. 1 rad ≈ 57.3°. 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2.</p>
<ul>
<li>Arc length <b>s = rθ</b>; sector area <b>A = ½r<sup>2</sup>θ</b> (θ in radians).</li>
<li>Segment area = ½r<sup>2</sup>(θ − sin θ).</li>
</ul>
<h3>Small-angle approximations (θ in radians)</h3>
<p>sin θ ≈ θ; tan θ ≈ θ; cos θ ≈ 1 − θ<sup>2</sup>/2.</p>
<h3>Reciprocal functions</h3>
<p>sec θ = 1/cos θ; cosec θ = 1/sin θ; cot θ = 1/tan θ.</p>
<p>Identities: <b>1 + tan<sup>2</sup>θ ≡ sec<sup>2</sup>θ</b>; <b>1 + cot<sup>2</sup>θ ≡ cosec<sup>2</sup>θ</b>.</p>
<h3>Inverse trig functions</h3>
<p>arcsin x: domain −1 ≤ x ≤ 1, range −π/2 to π/2. arccos x: range 0 to π. arctan x: domain ℝ, range −π/2 to π/2 (exclusive).</p>
`,
  quiz: [
    { q: "60° in radians?", o: ["π/3", "π/6", "π/4", "2π/3"], a: 0, e: "" },
    { q: "Arc length formula (θ in radians)?", o: ["rθ", "½r²θ", "2πr", "r²θ"], a: 0, e: "" },
    { q: "Sector area formula?", o: ["½r²θ", "rθ", "πr²", "r²θ"], a: 0, e: "" },
    { q: "Small-angle approximation for cos θ?", o: ["1 − θ²/2", "θ", "1", "1 − θ"], a: 0, e: "" },
    { q: "sec θ = …", o: ["1/cos θ", "1/sin θ", "1/tan θ", "cos θ/sin θ"], a: 0, e: "" },
    { q: "1 + tan²θ = …", o: ["sec²θ", "cosec²θ", "cot²θ", "1"], a: 0, e: "" },
    { q: "Range of arccos x?", o: ["0 ≤ y ≤ π", "−π/2 ≤ y ≤ π/2", "−π ≤ y ≤ π", "All reals"], a: 0, e: "" },
    { q: "Arc length when r = 6 and θ = π/3?", o: ["2π", "6π", "π", "12π"], a: 0, e: "" },
    { q: "1 + cot²θ = …", o: ["cosec²θ", "sec²θ", "tan²θ", "sin²θ"], a: 0, e: "" }
  ],
  flashcards: [
    ["π rad", "180°"],
    ["Arc length", "s = rθ"],
    ["Sector area", "½r²θ"],
    ["Small angles", "sin θ ≈ θ, tan θ ≈ θ, cos θ ≈ 1 − θ²/2"],
    ["sec / cosec / cot", "1/cos / 1/sin / 1/tan"],
    ["1 + tan²θ", "sec²θ"],
    ["1 + cot²θ", "cosec²θ"],
    ["Ranges of arcsin, arccos, arctan", "[−π/2, π/2], [0, π], (−π/2, π/2)"]
  ]
});

S2Data.add({
  id: "5c", group: 5, y2: true, title: "Compound and double angles, R cos(x − α)",
  summary: "Addition formulae, double angle formulae, harmonic form and proving identities.",
  notes: `
<h3>Addition formulae</h3>
<p>sin(A ± B) = sin A cos B ± cos A sin B<br>cos(A ± B) = cos A cos B ∓ sin A sin B<br>tan(A ± B) = (tan A ± tan B)/(1 ∓ tan A tan B)</p>
<h3>Double angle formulae</h3>
<p>sin 2A = 2 sin A cos A<br>cos 2A = cos<sup>2</sup>A − sin<sup>2</sup>A = 2cos<sup>2</sup>A − 1 = 1 − 2sin<sup>2</sup>A<br>tan 2A = 2tan A/(1 − tan<sup>2</sup>A)</p>
<h3>Harmonic form</h3>
<p>a sin x + b cos x = R sin(x + α), where R = √(a<sup>2</sup> + b<sup>2</sup>) and tan α = b/a.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>3 sin x + 4 cos x = R sin(x + α): R cos α = 3, R sin α = 4 → R = 5, α = 53.1°.<br>Maximum value 5, when x + 53.1° = 90°, so x = 36.9°.</div>
<h3>Proving identities</h3>
<p>Start with the more complicated side; convert everything to sin and cos; use the identities; finish with "= RHS".</p>
`,
  quiz: [
    { q: "sin 2A = …", o: ["2 sin A cos A", "2 sin A", "sin²A − cos²A", "1 − 2sin²A"], a: 0, e: "" },
    { q: "Which is NOT a form of cos 2A?", o: ["2sin²A − 1", "cos²A − sin²A", "2cos²A − 1", "1 − 2sin²A"], a: 0, e: "" },
    { q: "cos(A + B) = …", o: ["cos A cos B − sin A sin B", "cos A cos B + sin A sin B", "sin A cos B + cos A sin B", "cos A + cos B"], a: 0, e: "" },
    { q: "3 sin x + 4 cos x = R sin(x + α). R = …", o: ["5", "7", "1", "25"], a: 0, e: "" },
    { q: "Maximum of 3 sin x + 4 cos x?", o: ["5", "7", "4", "1"], a: 0, e: "" },
    { q: "tan 2A = …", o: ["2tan A/(1 − tan²A)", "2tan A", "tan²A − 1", "2tan A/(1 + tan²A)"], a: 0, e: "" },
    { q: "sin(A − B) = …", o: ["sin A cos B − cos A sin B", "sin A cos B + cos A sin B", "cos A cos B − sin A sin B", "sin A − sin B"], a: 0, e: "" },
    { q: "Exact value of sin 75° uses…", o: ["sin(45° + 30°)", "sin 2 × 37.5°", "sin(90° − 15°) only", "Small-angle approximation"], a: 0, e: "" },
    { q: "In R sin(x + α) with a sin x + b cos x, tan α = …", o: ["b/a", "a/b", "R/a", "ab"], a: 0, e: "" }
  ],
  flashcards: [
    ["sin(A ± B)", "sin A cos B ± cos A sin B"],
    ["cos(A ± B)", "cos A cos B ∓ sin A sin B"],
    ["sin 2A", "2 sin A cos A"],
    ["cos 2A", "cos²A − sin²A = 2cos²A − 1 = 1 − 2sin²A"],
    ["tan 2A", "2tan A/(1 − tan²A)"],
    ["Harmonic form", "R = √(a² + b²), tan α from coefficients"],
    ["Proving identities", "Work from the harder side to the other"]
  ]
});

S2Data.add({
  id: "6a", group: 6, y1: true, title: "Exponentials and logarithms",
  summary: "eˣ and ln x, laws of logarithms, solving equations and exponential models.",
  notes: `
<h3>Exponentials</h3>
<p>y = aˣ passes through (0, 1). y = eˣ is special: its gradient equals its value, d/dx(e<sup>kx</sup>) = ke<sup>kx</sup>.</p>
<h3>Logarithms</h3>
<p>log<sub>a</sub>b = c ⇔ a<sup>c</sup> = b. ln x = log<sub>e</sub>x, the inverse of eˣ.</p>
<table>
<tr><th>Law</th></tr>
<tr><td>log a + log b = log(ab)</td></tr>
<tr><td>log a − log b = log(a/b)</td></tr>
<tr><td>k log a = log(aᵏ)</td></tr>
<tr><td>log<sub>a</sub>a = 1; log<sub>a</sub>1 = 0</td></tr>
</table>
<div class="box box-prac"><span class="box-title">Worked example</span>Solve 3<sup>x</sup> = 20: x = ln 20 / ln 3 = <b>2.73</b>.<br>Solve e<sup>2x</sup> − 5e<sup>x</sup> + 6 = 0: let u = e<sup>x</sup>, (u − 2)(u − 3) = 0, x = ln 2 or ln 3.</div>
<h3>Linearising data</h3>
<ul>
<li>y = ax<sup>n</sup> → log y = log a + n log x: plot log y against log x (gradient n, intercept log a).</li>
<li>y = ab<sup>x</sup> → log y = log a + x log b: plot log y against x (gradient log b).</li>
</ul>
<h3>Modelling</h3>
<p>Growth/decay: N = N₀e<sup>kt</sup> (k &gt; 0 growth, k &lt; 0 decay). Comment on limitations (e.g. unlimited growth is unrealistic).</p>
`,
  quiz: [
    { q: "log a + log b = …", o: ["log(ab)", "log(a + b)", "log a × log b", "log(a/b)"], a: 0, e: "" },
    { q: "3 log x = …", o: ["log x³", "log 3x", "(log x)³", "log(x + 3)"], a: 0, e: "" },
    { q: "ln e = …", o: ["1", "0", "e", "10"], a: 0, e: "" },
    { q: "Solve eˣ = 5.", o: ["x = ln 5", "x = log 5", "x = 5/e", "x = e⁵"], a: 0, e: "" },
    { q: "d/dx (e³ˣ) = …", o: ["3e³ˣ", "e³ˣ", "3xe³ˣ⁻¹", "e³"], a: 0, e: "" },
    { q: "log₂ 32 = …", o: ["5", "16", "6", "2.5"], a: 0, e: "" },
    { q: "To linearise y = axⁿ, plot…", o: ["log y against log x", "log y against x", "y against log x", "y against xⁿ"], a: 0, e: "" },
    { q: "In N = N₀e^(−0.2t), N…", o: ["Decays", "Grows", "Is constant", "Oscillates"], a: 0, e: "" },
    { q: "Solve 3ˣ = 20 (2 d.p.).", o: ["2.73", "6.67", "1.30", "2.99"], a: 0, e: "" }
  ],
  flashcards: [
    ["logₐb = c", "aᶜ = b"],
    ["ln x", "Inverse of eˣ (log base e)"],
    ["log a + log b", "log ab"],
    ["log a − log b", "log(a/b)"],
    ["k log a", "log aᵏ"],
    ["d/dx e^(kx)", "ke^(kx)"],
    ["y = axⁿ linearised", "log y vs log x: gradient n"],
    ["y = abˣ linearised", "log y vs x: gradient log b"]
  ]
});

S2Data.add({
  id: "7a", group: 7, y1: true, title: "Differentiation basics",
  summary: "First principles, differentiating xⁿ, tangents and normals, stationary points and optimisation.",
  notes: `
<h3>First principles</h3>
<p>f′(x) = lim<sub>h→0</sub> [f(x + h) − f(x)]/h. For f(x) = x<sup>2</sup>: [(x + h)<sup>2</sup> − x<sup>2</sup>]/h = 2x + h → <b>2x</b>.</p>
<h3>Differentiating powers</h3>
<p>d/dx(axⁿ) = naxⁿ⁻¹. Rewrite roots and fractions first: y = 4/√x = 4x<sup>−1/2</sup> → dy/dx = −2x<sup>−3/2</sup>.</p>
<h3>Tangents and normals</h3>
<p>At x = a: gradient of tangent m = f′(a); normal gradient = −1/m. Use y − y₁ = m(x − x₁).</p>
<h3>Stationary points</h3>
<ul>
<li>Solve dy/dx = 0.</li>
<li>d<sup>2</sup>y/dx<sup>2</sup> &gt; 0: minimum; &lt; 0: maximum; = 0: check either side.</li>
<li>Increasing where f′(x) &gt; 0; decreasing where f′(x) &lt; 0.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (optimisation)</span>A box with square base x and open top has volume 32. Surface area A = x<sup>2</sup> + 128/x.<br>dA/dx = 2x − 128/x<sup>2</sup> = 0 → x<sup>3</sup> = 64 → x = 4. d<sup>2</sup>A/dx<sup>2</sup> = 2 + 256/x<sup>3</sup> &gt; 0, so minimum A = 48.</div>
<div class="box box-c"><span class="box-title">Year 13</span>Points of inflection: f″(x) = 0 with a change of sign. Concave where f″ &lt; 0, convex where f″ &gt; 0.</div>
`,
  quiz: [
    { q: "d/dx (5x⁴) = …", o: ["20x³", "5x³", "20x⁴", "4x³"], a: 0, e: "" },
    { q: "d/dx (4x^(−1/2)) = …", o: ["−2x^(−3/2)", "2x^(−3/2)", "−2x^(1/2)", "−8x^(−3/2)"], a: 0, e: "" },
    { q: "At a stationary point…", o: ["dy/dx = 0", "d²y/dx² = 0", "y = 0", "x = 0"], a: 0, e: "" },
    { q: "d²y/dx² > 0 at a stationary point means…", o: ["Minimum", "Maximum", "Inflection", "Undefined"], a: 0, e: "" },
    { q: "Tangent gradient is 4. Normal gradient?", o: ["−1/4", "4", "−4", "1/4"], a: 0, e: "" },
    { q: "f(x) = x² from first principles gives…", o: ["2x", "x²", "2", "2x + h"], a: 0, e: "" },
    { q: "f(x) is increasing where…", o: ["f′(x) > 0", "f′(x) < 0", "f(x) > 0", "f″(x) > 0"], a: 0, e: "" },
    { q: "Y13: f″(x) > 0 means the curve is…", o: ["Convex", "Concave", "Decreasing", "At a maximum"], a: 0, e: "" },
    { q: "Gradient of y = x³ − 3x at x = 2?", o: ["9", "2", "12", "6"], a: 0, e: "" }
  ],
  flashcards: [
    ["First principles", "lim h→0 [f(x + h) − f(x)]/h"],
    ["d/dx (axⁿ)", "naxⁿ⁻¹"],
    ["Tangent / normal gradient", "f′(a) / −1/f′(a)"],
    ["Stationary points", "dy/dx = 0"],
    ["Nature", "f″ > 0 min; f″ < 0 max"],
    ["Increasing / decreasing", "f′ > 0 / f′ < 0"],
    ["Optimisation", "Form an expression in one variable, differentiate, set to 0"],
    ["Inflection (Y13)", "f″ = 0 and changes sign"]
  ]
});

S2Data.add({
  id: "7b", group: 7, y2: true, title: "Further differentiation",
  summary: "Trig, exponential and log derivatives, chain, product and quotient rules, implicit and parametric differentiation, connected rates.",
  notes: `
<h3>Standard derivatives</h3>
<table>
<tr><th>f(x)</th><th>f′(x)</th></tr>
<tr><td>sin kx</td><td>k cos kx</td></tr>
<tr><td>cos kx</td><td>−k sin kx</td></tr>
<tr><td>tan kx</td><td>k sec<sup>2</sup> kx</td></tr>
<tr><td>e<sup>kx</sup></td><td>ke<sup>kx</sup></td></tr>
<tr><td>ln x</td><td>1/x</td></tr>
<tr><td>a<sup>x</sup></td><td>a<sup>x</sup> ln a</td></tr>
</table>
<h3>Rules</h3>
<ul>
<li><b>Chain</b>: dy/dx = dy/du × du/dx. d/dx(3x + 1)<sup>5</sup> = 15(3x + 1)<sup>4</sup>.</li>
<li><b>Product</b>: (uv)′ = u′v + uv′.</li>
<li><b>Quotient</b>: (u/v)′ = (u′v − uv′)/v<sup>2</sup>.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>y = x<sup>2</sup>e<sup>3x</sup>: dy/dx = 2xe<sup>3x</sup> + 3x<sup>2</sup>e<sup>3x</sup> = xe<sup>3x</sup>(2 + 3x).</div>
<h3>Implicit and parametric</h3>
<ul>
<li>Implicit: differentiate each term with respect to x; d/dx(y<sup>2</sup>) = 2y dy/dx; d/dx(xy) = y + x dy/dx.</li>
<li>Parametric: dy/dx = (dy/dt)/(dx/dt).</li>
</ul>
<h3>Connected rates of change</h3>
<p>Use the chain rule: dV/dt = dV/dr × dr/dt. A sphere's radius grows at 0.1 cm/s; when r = 5, dV/dt = 4πr<sup>2</sup> × 0.1 = 10π cm<sup>3</sup>/s.</p>
`,
  quiz: [
    { q: "d/dx (sin 3x) = …", o: ["3cos 3x", "cos 3x", "−3cos 3x", "3sin 3x"], a: 0, e: "" },
    { q: "d/dx (ln x) = …", o: ["1/x", "ln x", "x", "eˣ"], a: 0, e: "" },
    { q: "d/dx (3x + 1)⁵ = …", o: ["15(3x + 1)⁴", "5(3x + 1)⁴", "(3x + 1)⁴", "15(3x + 1)⁵"], a: 0, e: "" },
    { q: "Product rule: (uv)′ = …", o: ["u′v + uv′", "u′v′", "u′v − uv′", "(u′v − uv′)/v²"], a: 0, e: "" },
    { q: "Quotient rule: (u/v)′ = …", o: ["(u′v − uv′)/v²", "(uv′ − u′v)/v²", "u′/v′", "(u′v + uv′)/v²"], a: 0, e: "" },
    { q: "d/dx (y²) with respect to x = …", o: ["2y dy/dx", "2y", "2x", "y²"], a: 0, e: "" },
    { q: "d/dx (2ˣ) = …", o: ["2ˣ ln 2", "x2ˣ⁻¹", "2ˣ", "2ˣ/ln 2"], a: 0, e: "" },
    { q: "d/dx (tan x) = …", o: ["sec²x", "cot x", "−sec²x", "cosec²x"], a: 0, e: "" },
    { q: "dV/dt in connected rates = …", o: ["dV/dr × dr/dt", "dV/dr ÷ dr/dt", "dr/dt ÷ dV/dr", "dV/dr + dr/dt"], a: 0, e: "" }
  ],
  flashcards: [
    ["sin kx / cos kx", "k cos kx / −k sin kx"],
    ["tan kx", "k sec² kx"],
    ["e^(kx) / ln x", "ke^(kx) / 1/x"],
    ["aˣ", "aˣ ln a"],
    ["Chain rule", "dy/dx = dy/du × du/dx"],
    ["Product rule", "u′v + uv′"],
    ["Quotient rule", "(u′v − uv′)/v²"],
    ["Implicit y terms", "Multiply by dy/dx"],
    ["Connected rates", "Chain rule with t"]
  ]
});

S2Data.add({
  id: "8a", group: 8, y1: true, title: "Integration basics",
  summary: "Integrating xⁿ, finding constants, definite integrals and areas under curves.",
  notes: `
<h3>Indefinite integration</h3>
<p>∫xⁿ dx = xⁿ⁺¹/(n + 1) + c (n ≠ −1). Rewrite roots and fractions as powers first. Always add + c.</p>
<p>Given dy/dx and a point, find c: dy/dx = 6x<sup>2</sup>, curve through (1, 5): y = 2x<sup>3</sup> + c, 5 = 2 + c, c = 3.</p>
<h3>Definite integrals</h3>
<p>∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>∫<sub>1</sub><sup>3</sup> (3x<sup>2</sup> − 2x) dx = [x<sup>3</sup> − x<sup>2</sup>]<sub>1</sub><sup>3</sup> = (27 − 9) − (1 − 1) = <b>18</b>.</div>
<h3>Areas</h3>
<ul>
<li>Area between a curve and the x-axis = ∫ y dx; regions below the axis give negative values, so split at the roots and add magnitudes.</li>
<li>Area between two curves = ∫ (upper − lower) dx between their intersections.</li>
</ul>
`,
  quiz: [
    { q: "∫ x³ dx = …", o: ["x⁴/4 + c", "3x² + c", "x⁴ + c", "4x⁴ + c"], a: 0, e: "" },
    { q: "∫ 6x² dx = …", o: ["2x³ + c", "12x + c", "6x³ + c", "3x³ + c"], a: 0, e: "" },
    { q: "∫ x^(−2) dx = …", o: ["−x^(−1) + c", "x^(−1) + c", "−2x^(−3) + c", "x^(−3)/3 + c"], a: 0, e: "" },
    { q: "∫₁³ (3x² − 2x) dx = …", o: ["18", "20", "26", "8"], a: 0, e: "" },
    { q: "Why add + c?", o: ["Differentiating any constant gives 0", "It makes the answer bigger", "It's optional", "For definite integrals"], a: 0, e: "" },
    { q: "Area between two curves = ∫ …", o: ["(upper − lower) dx", "(lower − upper) dx", "upper × lower dx", "upper dx only"], a: 0, e: "" },
    { q: "A definite integral of a region below the x-axis is…", o: ["Negative", "Positive", "Zero", "Undefined"], a: 0, e: "" },
    { q: "∫ √x dx = …", o: ["⅔x^(3/2) + c", "½x^(−1/2) + c", "x^(3/2) + c", "1.5x^(1/2) + c"], a: 0, e: "" },
    { q: "∫₀² x dx = …", o: ["2", "4", "1", "0"], a: 0, e: "" }
  ],
  flashcards: [
    ["∫ xⁿ dx", "xⁿ⁺¹/(n + 1) + c, n ≠ −1"],
    ["Finding c", "Substitute a known point"],
    ["Definite integral", "F(b) − F(a)"],
    ["Area under a curve", "∫ y dx; split at roots"],
    ["Area between curves", "∫ (upper − lower) dx"],
    ["Prepare first", "Rewrite roots and fractions as powers"]
  ]
});

S2Data.add({
  id: "8b", group: 8, y2: true, title: "Integration techniques and differential equations",
  summary: "Standard integrals, reverse chain rule, substitution, by parts, partial fractions, trig identities and separable differential equations.",
  notes: `
<h3>Standard integrals</h3>
<p>∫e<sup>kx</sup> dx = (1/k)e<sup>kx</sup>; ∫1/x dx = ln|x|; ∫cos kx dx = (1/k)sin kx; ∫sin kx dx = −(1/k)cos kx; ∫sec<sup>2</sup>kx dx = (1/k)tan kx.</p>
<h3>Recognising forms</h3>
<ul>
<li>∫ f′(x)/f(x) dx = ln|f(x)| + c. ∫ 2x/(x<sup>2</sup> + 1) dx = ln(x<sup>2</sup> + 1) + c.</li>
<li>∫ f′(x)[f(x)]<sup>n</sup> dx = [f(x)]<sup>n+1</sup>/(n + 1) + c.</li>
</ul>
<h3>Techniques</h3>
<ul>
<li><b>Substitution</b>: replace u = g(x), du = g′(x) dx, change limits.</li>
<li><b>By parts</b>: ∫u dv/dx dx = uv − ∫v du/dx dx. Choose u to become simpler (e.g. x, ln x).</li>
<li><b>Partial fractions</b>: ∫ 1/((x + 1)(x + 2)) dx = ln|x + 1| − ln|x + 2| + c.</li>
<li><b>Trig identities</b>: ∫ sin<sup>2</sup>x dx = ∫ ½(1 − cos 2x) dx = x/2 − (sin 2x)/4 + c.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (by parts)</span>∫ xe<sup>x</sup> dx: u = x, dv/dx = e<sup>x</sup>. = xe<sup>x</sup> − ∫e<sup>x</sup> dx = <b>e<sup>x</sup>(x − 1) + c</b>.</div>
<h3>Differential equations</h3>
<p>Separate variables: dy/dx = f(x)g(y) → ∫ 1/g(y) dy = ∫ f(x) dx. Example: dy/dx = ky → ln y = kx + c → y = Ae<sup>kx</sup>. Use initial conditions for the constant, and interpret in context.</p>
`,
  quiz: [
    { q: "∫ e^(3x) dx = …", o: ["⅓e^(3x) + c", "3e^(3x) + c", "e^(3x) + c", "e^(3x)/x + c"], a: 0, e: "" },
    { q: "∫ 1/x dx = …", o: ["ln|x| + c", "x⁰ + c", "−1/x² + c", "eˣ + c"], a: 0, e: "" },
    { q: "∫ cos 2x dx = …", o: ["½sin 2x + c", "2sin 2x + c", "−½sin 2x + c", "sin 2x + c"], a: 0, e: "" },
    { q: "∫ 2x/(x² + 1) dx = …", o: ["ln(x² + 1) + c", "2ln x + c", "x² + c", "1/(x² + 1) + c"], a: 0, e: "" },
    { q: "Integration by parts formula?", o: ["uv − ∫v du/dx dx", "uv + ∫v du/dx dx", "u′v − uv′", "∫u dx × ∫v dx"], a: 0, e: "" },
    { q: "∫ xeˣ dx = …", o: ["eˣ(x − 1) + c", "xeˣ + c", "eˣ(x + 1) + c", "x²eˣ/2 + c"], a: 0, e: "" },
    { q: "To integrate sin²x, use…", o: ["cos 2x = 1 − 2sin²x", "Parts", "Partial fractions", "Small angles"], a: 0, e: "" },
    { q: "dy/dx = ky has general solution…", o: ["y = Ae^(kx)", "y = kx + c", "y = e^(k) x", "y = ln(kx)"], a: 0, e: "" },
    { q: "In substitution for a definite integral, you should…", o: ["Change the limits to u-values", "Keep the x limits", "Ignore limits", "Add c"], a: 0, e: "" }
  ],
  flashcards: [
    ["∫ e^(kx)", "(1/k)e^(kx)"],
    ["∫ 1/x", "ln|x|"],
    ["∫ cos kx / sin kx", "(1/k) sin kx / −(1/k) cos kx"],
    ["∫ f′/f", "ln|f(x)|"],
    ["By parts", "uv − ∫v u′ dx"],
    ["Choosing u", "LATE: logs, algebra, trig, exponentials"],
    ["∫ sin²x", "Use sin²x = ½(1 − cos 2x)"],
    ["Separable DE", "∫ 1/g(y) dy = ∫ f(x) dx"]
  ]
});

S2Data.add({
  id: "9a", group: 9, y2: true, title: "Numerical methods",
  summary: "Locating roots by sign change, fixed-point iteration, Newton–Raphson and the trapezium rule.",
  notes: `
<h3>Locating roots</h3>
<p>If f(x) is continuous on [a, b] and f(a), f(b) have opposite signs, there's a root between a and b. This can fail if f has an asymptote (discontinuity) or two roots close together (no sign change).</p>
<h3>Fixed-point iteration</h3>
<p>Rearrange f(x) = 0 into x = g(x); then xₙ₊₁ = g(xₙ). It converges if |g′(x)| &lt; 1 near the root. Staircase and cobweb diagrams show convergence or divergence.</p>
<h3>Newton–Raphson</h3>
<p><b>xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)</b>. Fails if f′(xₙ) = 0 (tangent is horizontal) or the starting value is near a turning point.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>f(x) = x<sup>2</sup> − 2, x₀ = 1: x₁ = 1 − (−1)/2 = 1.5; x₂ = 1.5 − 0.25/3 = 1.4167 (√2 = 1.4142).</div>
<h3>Trapezium rule</h3>
<p>∫<sub>a</sub><sup>b</sup> y dx ≈ (h/2)[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ], with h = (b − a)/n. It overestimates for convex curves and underestimates for concave ones. More strips give a better estimate.</p>
`,
  quiz: [
    { q: "A sign change of f(x) on [a, b] shows a root if f is…", o: ["Continuous", "Increasing", "Positive", "Quadratic"], a: 0, e: "" },
    { q: "Newton–Raphson formula?", o: ["xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)", "xₙ₊₁ = xₙ + f(xₙ)/f′(xₙ)", "xₙ₊₁ = f(xₙ)", "xₙ₊₁ = f′(xₙ)/f(xₙ)"], a: 0, e: "" },
    { q: "Newton–Raphson fails when…", o: ["f′(xₙ) = 0", "f(xₙ) = 0", "xₙ = 0", "f is a polynomial"], a: 0, e: "" },
    { q: "Fixed-point iteration converges if near the root…", o: ["|g′(x)| < 1", "|g′(x)| > 1", "g(x) = 0", "g′(x) = 1"], a: 0, e: "" },
    { q: "f(x) = x² − 2, x₀ = 1. Newton–Raphson x₁ = …", o: ["1.5", "1.414", "2", "0.5"], a: 0, e: "" },
    { q: "Trapezium rule strip width h = …", o: ["(b − a)/n", "(b + a)/n", "n/(b − a)", "b − a"], a: 0, e: "" },
    { q: "For a convex curve, the trapezium rule gives…", o: ["An overestimate", "An underestimate", "The exact value", "Zero"], a: 0, e: "" },
    { q: "A sign change can fail to show a root when…", o: ["There's an asymptote between a and b", "f is continuous", "a < b", "f is linear"], a: 0, e: "" },
    { q: "To improve a trapezium estimate…", o: ["Use more strips", "Use fewer strips", "Increase h", "Use only the endpoints"], a: 0, e: "" }
  ],
  flashcards: [
    ["Sign change", "Root in [a, b] if f continuous and signs differ"],
    ["Iteration", "xₙ₊₁ = g(xₙ); converges if |g′| < 1"],
    ["Newton–Raphson", "xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)"],
    ["N–R failure", "f′(xₙ) = 0 or near a turning point"],
    ["Trapezium rule", "(h/2)[y₀ + 2(middle) + yₙ]"],
    ["Convex / concave", "Trapezium over / underestimates"]
  ]
});

S2Data.add({
  id: "10a", group: 10, y1: true, title: "Vectors",
  summary: "Vectors in 2D and 3D: magnitude, direction, position vectors, unit vectors and geometric problems.",
  notes: `
<h3>Notation</h3>
<p>a = 3i + 4j, or as a column vector. In 3D (Year 13), a = xi + yj + zk.</p>
<ul>
<li>Magnitude |a| = √(x<sup>2</sup> + y<sup>2</sup> (+ z<sup>2</sup>)). |3i + 4j| = 5.</li>
<li>Direction (2D): angle with i, tan θ = y/x.</li>
<li>Unit vector â = a/|a|.</li>
</ul>
<h3>Position vectors</h3>
<p>OA = a, OB = b; AB = b − a. Distance AB = |b − a|. Midpoint position vector = ½(a + b).</p>
<h3>Geometry</h3>
<p>Parallel vectors are scalar multiples. To show A, B, C are collinear, show AB = kBC. Problems may require solving for unknown scalars by equating i and j components.</p>
<div class="box box-c"><span class="box-title">Year 13: 3D</span>Distance between (1, 2, 3) and (4, 6, 15): √(9 + 16 + 144) = 13. Vectors model forces and velocities in mechanics.</div>
`,
  quiz: [
    { q: "|3i + 4j| = …", o: ["5", "7", "25", "1"], a: 0, e: "" },
    { q: "OA = a, OB = b. AB = …", o: ["b − a", "a − b", "a + b", "ab"], a: 0, e: "" },
    { q: "Unit vector in the direction of 3i + 4j?", o: ["0.6i + 0.8j", "3i + 4j", "i + j", "0.3i + 0.4j"], a: 0, e: "" },
    { q: "Which is parallel to 2i − 3j?", o: ["−4i + 6j", "3i − 2j", "2i + 3j", "4i + 6j"], a: 0, e: "" },
    { q: "Midpoint position vector of A and B?", o: ["½(a + b)", "b − a", "a + b", "½(b − a)"], a: 0, e: "" },
    { q: "Angle 5i + 5j makes with i?", o: ["45°", "90°", "30°", "60°"], a: 0, e: "" },
    { q: "Y13: |2i − j + 2k| = …", o: ["3", "√5", "5", "9"], a: 0, e: "" },
    { q: "Collinear means…", o: ["On the same straight line", "Perpendicular", "Equal length", "Parallel but separate"], a: 0, e: "" },
    { q: "Y13: distance between (1, 2, 3) and (4, 6, 15)?", o: ["13", "19", "√91", "12"], a: 0, e: "" }
  ],
  flashcards: [
    ["Magnitude", "√(x² + y² + z²)"],
    ["Unit vector", "a/|a|"],
    ["AB", "b − a"],
    ["Midpoint", "½(a + b)"],
    ["Parallel", "Scalar multiples"],
    ["Collinear", "AB = kBC with a shared point"],
    ["Direction (2D)", "tan θ = y/x from i"]
  ]
});

S2Data.detail("5a", { mistakes: ["Dividing both sides by cos x and losing solutions where cos x = 0."], tips: ["Sketch the graph for the given interval to find all solutions."], fact: "Hipparchus compiled the first trig table, of chords, around 140 BCE." });
S2Data.detail("5b", { mistakes: ["Using degrees in s = rθ. θ must be in radians."], tips: ["Check calculator mode: radians for calculus and arcs."], fact: "A radian is the angle where the arc length equals the radius." });
S2Data.detail("5c", { mistakes: ["Getting the sign wrong in cos(A + B): it's minus."], tips: ["For R cos(x − α), expand and compare coefficients of cos x and sin x."], fact: "Harmonic form is how engineers combine AC voltages with different phases." });
S2Data.detail("6a", { mistakes: ["Writing log(a + b) = log a + log b. There's no law for logs of sums."], tips: ["For exponential equations with eˣ terms, try u = eˣ."], fact: "e is about 2.71828 and appears in compound interest when interest is compounded continuously." });
S2Data.detail("7a", { mistakes: ["Forgetting to justify the nature of a stationary point."], tips: ["In optimisation, use given constraints to write the quantity in one variable."], fact: "Fermat used an early form of differentiation to find maxima and minima in the 1630s." });
S2Data.detail("7b", { mistakes: ["Forgetting the chain-rule factor: d/dx sin 3x is 3cos 3x, not cos 3x."], tips: ["In implicit differentiation, every y term picks up a dy/dx."], fact: "The notation dy/dx comes from Leibniz; Newton used dots above letters." });
S2Data.detail("8a", { mistakes: ["Adding definite-integral values for regions above and below the axis without making both positive."], tips: ["Sketch the curve before finding areas."], fact: "Archimedes found the area under a parabola using an early limit argument around 250 BCE." });
S2Data.detail("8b", { mistakes: ["Forgetting the modulus in ∫1/x dx = ln|x|."], tips: ["For by parts, let u be the factor that simplifies when differentiated."], fact: "Differential equations model everything from cooling coffee to population growth." });
S2Data.detail("9a", { mistakes: ["Concluding no root exists because there's no sign change. There could be two roots close together."], tips: ["Show the sign change explicitly with values and a conclusion."], fact: "Calculators use variants of Newton–Raphson to compute square roots." });
S2Data.detail("10a", { mistakes: ["Calculating AB as a − b instead of b − a."], tips: ["Draw a diagram and label every route you use."], fact: "GPS uses 3D vectors to locate you from satellite distances." });
