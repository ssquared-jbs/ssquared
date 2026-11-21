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
  notes: R`
<h3>Radians</h3>
<p>\(\pi\) radians \(= 180^\circ\), so 1 radian \(\approx 57.3^\circ\). To convert degrees to radians, multiply by \(\dfrac{\pi}{180}\).</p>
<table><tr><th>Degrees</th><td>\(30^\circ\)</td><td>\(45^\circ\)</td><td>\(60^\circ\)</td><td>\(90^\circ\)</td><td>\(180^\circ\)</td><td>\(360^\circ\)</td></tr>
<tr><th>Radians</th><td>\(\dfrac{\pi}{6}\)</td><td>\(\dfrac{\pi}{4}\)</td><td>\(\dfrac{\pi}{3}\)</td><td>\(\dfrac{\pi}{2}\)</td><td>\(\pi\)</td><td>\(2\pi\)</td></tr></table>
<h3>Arcs and sectors (\(\theta\) in radians)</h3>
<p>\[\text{Arc length } s = r\theta \qquad \text{Sector area } A = \tfrac12 r^2\theta \qquad \text{Segment area} = \tfrac12 r^2(\theta - \sin\theta)\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A sector has radius 6 cm and angle \(\dfrac{\pi}{3}\).
<ol><li>Arc length: \(s = 6 \times \dfrac{\pi}{3} = 2\pi \approx 6.28\) cm.</li>
<li>Area: \(A = \tfrac12 \times 36 \times \dfrac{\pi}{3} = 6\pi \approx 18.85\text{ cm}^2\).</li></ol></div>
<h3>Small-angle approximations (\(\theta\) in radians)</h3>
<p>\[\sin\theta \approx \theta \qquad \tan\theta \approx \theta \qquad \cos\theta \approx 1 - \frac{\theta^2}{2}\]</p>
<h3>Reciprocal functions</h3>
<p>\[\sec\theta = \frac{1}{\cos\theta} \qquad \operatorname{cosec}\theta = \frac{1}{\sin\theta} \qquad \cot\theta = \frac{1}{\tan\theta}\]</p>
<p>Dividing \(\sin^2\theta + \cos^2\theta \equiv 1\) by \(\cos^2\theta\) and by \(\sin^2\theta\) gives:</p>
<p>\[1 + \tan^2\theta \equiv \sec^2\theta \qquad 1 + \cot^2\theta \equiv \operatorname{cosec}^2\theta\]</p>
<h3>Inverse trig functions</h3>
<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr>
<tr><td>\(\arcsin x\)</td><td>\(-1 \le x \le 1\)</td><td>\(-\dfrac{\pi}{2} \le y \le \dfrac{\pi}{2}\)</td></tr>
<tr><td>\(\arccos x\)</td><td>\(-1 \le x \le 1\)</td><td>\(0 \le y \le \pi\)</td></tr>
<tr><td>\(\arctan x\)</td><td>\(x \in \mathbb{R}\)</td><td>\(-\dfrac{\pi}{2} < y < \dfrac{\pi}{2}\)</td></tr></table>
`,
  quiz: [
    { q: R`\(60^\circ\) in radians is…`, o: [R`\(\dfrac{\pi}{3}\)`, R`\(\dfrac{\pi}{6}\)`, R`\(\dfrac{\pi}{4}\)`, R`\(\dfrac{2\pi}{3}\)`], a: 0, e: R`\(60 \times \dfrac{\pi}{180} = \dfrac{\pi}{3}\).` },
    { q: R`The arc length formula (\(\theta\) in radians) is…`, o: [R`\(r\theta\)`, R`\(\tfrac12 r^2\theta\)`, R`\(2\pi r\)`, R`\(r^2\theta\)`], a: 0, e: R`A full turn (\(2\pi\)) gives the circumference \(2\pi r\), so angle \(\theta\) gives \(r\theta\).` },
    { q: "The sector area formula is…", o: [R`\(\tfrac12 r^2\theta\)`, R`\(r\theta\)`, R`\(\pi r^2\)`, R`\(r^2\theta\)`], a: 0, e: R`A full turn gives \(\tfrac12 r^2(2\pi) = \pi r^2\), the whole circle.` },
    { q: R`The small-angle approximation for \(\cos\theta\) is…`, o: [R`\(1 - \dfrac{\theta^2}{2}\)`, R`\(\theta\)`, R`\(1\)`, R`\(1 - \theta\)`], a: 0, e: R`Near \(\theta = 0\), cosine is close to 1 and curves down like a parabola.` },
    { q: R`\(\sec\theta = \ ?\)`, o: [R`\(\dfrac{1}{\cos\theta}\)`, R`\(\dfrac{1}{\sin\theta}\)`, R`\(\dfrac{1}{\tan\theta}\)`, R`\(\dfrac{\cos\theta}{\sin\theta}\)`], a: 0, e: R`A handy rule: the third letter tells you: se<b>c</b> ↔ <b>c</b>os, co<b>s</b>ec ↔ <b>s</b>in, co<b>t</b> ↔ <b>t</b>an.` },
    { q: R`\(1 + \tan^2\theta = \ ?\)`, o: [R`\(\sec^2\theta\)`, R`\(\operatorname{cosec}^2\theta\)`, R`\(\cot^2\theta\)`, R`\(1\)`], a: 0, e: R`Divide \(\sin^2\theta + \cos^2\theta = 1\) by \(\cos^2\theta\).` },
    { q: R`The range of \(\arccos x\) is…`, o: [R`\(0 \le y \le \pi\)`, R`\(-\dfrac{\pi}{2} \le y \le \dfrac{\pi}{2}\)`, R`\(-\pi \le y \le \pi\)`, "All reals"], a: 0, e: R`On \([0, \pi]\), cosine takes every value from 1 down to \(-1\) exactly once, so the inverse is defined there.` },
    { q: R`Find the arc length when \(r = 6\) and \(\theta = \dfrac{\pi}{3}\).`, o: [R`\(2\pi\)`, R`\(6\pi\)`, R`\(\pi\)`, R`\(12\pi\)`], a: 0, e: R`\(s = r\theta = 6 \times \dfrac{\pi}{3} = 2\pi\).` },
    { q: R`\(1 + \cot^2\theta = \ ?\)`, o: [R`\(\operatorname{cosec}^2\theta\)`, R`\(\sec^2\theta\)`, R`\(\tan^2\theta\)`, R`\(\sin^2\theta\)`], a: 0, e: R`Divide \(\sin^2\theta + \cos^2\theta = 1\) by \(\sin^2\theta\).` }
  ],
  flashcards: [
    [R`\(\pi\) radians`, R`\(180^\circ\)`],
    ["Arc length", R`\(s = r\theta\)`],
    ["Sector area", R`\(A = \tfrac12 r^2\theta\)`],
    ["Small angles", R`\(\sin\theta \approx \theta\), \(\tan\theta \approx \theta\), \(\cos\theta \approx 1 - \frac{\theta^2}{2}\)`],
    [R`\(\sec\), \(\operatorname{cosec}\), \(\cot\)`, R`\(\frac{1}{\cos}\), \(\frac{1}{\sin}\), \(\frac{1}{\tan}\)`],
    [R`\(1 + \tan^2\theta\)`, R`\(\sec^2\theta\)`],
    [R`\(1 + \cot^2\theta\)`, R`\(\operatorname{cosec}^2\theta\)`],
    [R`Ranges of \(\arcsin\), \(\arccos\), \(\arctan\)`, R`\(\left[-\frac{\pi}{2}, \frac{\pi}{2}\right]\), \([0, \pi]\), \(\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)\)`]
  ]
});

S2Data.add({
  id: "5c", group: 5, y2: true, title: R`Compound and double angles, \(R\cos(x - \alpha)\)`,
  summary: "Addition formulae, double angle formulae, harmonic form and proving identities.",
  notes: R`
<h3>Addition formulae</h3>
<p>\[\begin{aligned}\sin(A \pm B) &= \sin A\cos B \pm \cos A\sin B\\ \cos(A \pm B) &= \cos A\cos B \mp \sin A\sin B\\ \tan(A \pm B) &= \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}\end{aligned}\]</p>
<p>Note the sign <b>swaps</b> in the cosine formula.</p>
<h3>Double angle formulae</h3>
<p>Put \(B = A\) in the addition formulae:</p>
<p>\[\begin{aligned}\sin 2A &= 2\sin A\cos A\\ \cos 2A &= \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A\\ \tan 2A &= \frac{2\tan A}{1 - \tan^2 A}\end{aligned}\]</p>
<h3>Harmonic form</h3>
<p>\(a\sin x + b\cos x\) can be written as one wave, \(R\sin(x + \alpha)\), where \(R = \sqrt{a^2 + b^2}\) and \(\tan\alpha = \dfrac{b}{a}\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Write \(3\sin x + 4\cos x\) as \(R\sin(x + \alpha)\).
<ol><li>Expand: \(R\sin(x + \alpha) = R\sin x\cos\alpha + R\cos x\sin\alpha\).</li>
<li>Compare coefficients: \(R\cos\alpha = 3\) and \(R\sin\alpha = 4\).</li>
<li>Square and add: \(R^2 = 9 + 16 = 25\), so \(R = 5\). Divide: \(\tan\alpha = \tfrac43\), so \(\alpha = 53.1^\circ\).</li></ol>
So \(3\sin x + 4\cos x = 5\sin(x + 53.1^\circ)\). Its maximum is 5, when \(x + 53.1^\circ = 90^\circ\), i.e. \(x = 36.9^\circ\).</div>
<h3>Proving identities</h3>
<p>Start with the more complicated side, rewrite everything in terms of \(\sin\) and \(\cos\), use the identities, and finish with "\(= \text{RHS}\)".</p>
`,
  quiz: [
    { q: R`\(\sin 2A = \ ?\)`, o: [R`\(2\sin A\cos A\)`, R`\(2\sin A\)`, R`\(\sin^2 A - \cos^2 A\)`, R`\(1 - 2\sin^2 A\)`], a: 0, e: R`Put \(B = A\) in \(\sin(A + B) = \sin A\cos B + \cos A\sin B\).` },
    { q: R`Which is <b>not</b> a form of \(\cos 2A\)?`, o: [R`\(2\sin^2 A - 1\)`, R`\(\cos^2 A - \sin^2 A\)`, R`\(2\cos^2 A - 1\)`, R`\(1 - 2\sin^2 A\)`], a: 0, e: R`The correct one is \(1 - 2\sin^2 A\); \(2\sin^2 A - 1\) is its negative.` },
    { q: R`\(\cos(A + B) = \ ?\)`, o: [R`\(\cos A\cos B - \sin A\sin B\)`, R`\(\cos A\cos B + \sin A\sin B\)`, R`\(\sin A\cos B + \cos A\sin B\)`, R`\(\cos A + \cos B\)`], a: 0, e: "In the cosine formula the sign flips: + inside becomes − outside." },
    { q: R`\(3\sin x + 4\cos x = R\sin(x + \alpha)\). \(R = \ ?\)`, o: ["5", "7", "1", "25"], a: 0, e: R`\(R = \sqrt{3^2 + 4^2} = 5\).` },
    { q: R`The maximum value of \(3\sin x + 4\cos x\) is…`, o: ["5", "7", "4", "1"], a: 0, e: R`It equals \(5\sin(x + \alpha)\), and \(\sin\) is at most 1.` },
    { q: R`\(\tan 2A = \ ?\)`, o: [R`\(\dfrac{2\tan A}{1 - \tan^2 A}\)`, R`\(2\tan A\)`, R`\(\tan^2 A - 1\)`, R`\(\dfrac{2\tan A}{1 + \tan^2 A}\)`], a: 0, e: R`Put \(B = A\) in \(\tan(A + B) = \dfrac{\tan A + \tan B}{1 - \tan A\tan B}\).` },
    { q: R`\(\sin(A - B) = \ ?\)`, o: [R`\(\sin A\cos B - \cos A\sin B\)`, R`\(\sin A\cos B + \cos A\sin B\)`, R`\(\cos A\cos B - \sin A\sin B\)`, R`\(\sin A - \sin B\)`], a: 0, e: "For sine, the sign stays the same as inside the bracket." },
    { q: R`The exact value of \(\sin 75^\circ\) can be found using…`, o: [R`\(\sin(45^\circ + 30^\circ)\)`, R`\(\sin 2 \times 37.5^\circ\)`, R`\(\sin(90^\circ - 15^\circ)\) only`, "A small-angle approximation"], a: 0, e: R`\(45^\circ\) and \(30^\circ\) have exact trig values, so the addition formula gives an exact answer.` },
    { q: R`For \(a\sin x + b\cos x = R\sin(x + \alpha)\), \(\tan\alpha = \ ?\)`, o: [R`\(\dfrac{b}{a}\)`, R`\(\dfrac{a}{b}\)`, R`\(\dfrac{R}{a}\)`, R`\(ab\)`], a: 0, e: R`\(R\sin\alpha = b\) and \(R\cos\alpha = a\); dividing gives \(\tan\alpha = \frac{b}{a}\).` }
  ],
  flashcards: [
    [R`\(\sin(A \pm B)\)`, R`\(\sin A\cos B \pm \cos A\sin B\)`],
    [R`\(\cos(A \pm B)\)`, R`\(\cos A\cos B \mp \sin A\sin B\)`],
    [R`\(\sin 2A\)`, R`\(2\sin A\cos A\)`],
    [R`\(\cos 2A\)`, R`\(\cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A\)`],
    [R`\(\tan 2A\)`, R`\(\dfrac{2\tan A}{1 - \tan^2 A}\)`],
    ["Harmonic form", R`\(R = \sqrt{a^2 + b^2}\); find \(\alpha\) by comparing coefficients`],
    ["Proving identities", "Work from the harder side to the other"]
  ]
});

S2Data.add({
  id: "6a", group: 6, y1: true, title: "Exponentials and logarithms",
  summary: R`\(e^x\) and \(\ln x\), laws of logarithms, solving equations and exponential models.`,
  notes: R`
<h3>Exponentials</h3>
<p>Every graph \(y = a^x\) (\(a > 0\)) passes through \((0, 1)\). The graph \(y = e^x\) is special: its gradient at every point equals its value, so \(\dfrac{d}{dx}\left(e^{kx}\right) = ke^{kx}\).</p>
<h3>Logarithms</h3>
<p>\[\log_a b = c \iff a^c = b\]</p>
<p>A logarithm answers "what power?". \(\ln x\) means \(\log_e x\): it's the inverse of \(e^x\).</p>
<table>
<tr><th>Law</th><th>Example</th></tr>
<tr><td>\(\log a + \log b = \log(ab)\)</td><td>\(\log 2 + \log 5 = \log 10\)</td></tr>
<tr><td>\(\log a - \log b = \log\left(\dfrac{a}{b}\right)\)</td><td>\(\ln 12 - \ln 3 = \ln 4\)</td></tr>
<tr><td>\(k\log a = \log\left(a^k\right)\)</td><td>\(3\ln x = \ln x^3\)</td></tr>
<tr><td>\(\log_a a = 1,\ \ \log_a 1 = 0\)</td><td>\(\ln e = 1\)</td></tr>
</table>
<div class="box box-prac"><span class="box-title">Worked examples</span>
<b>Solve \(3^x = 20\).</b> Take logs of both sides: \(x\ln 3 = \ln 20\), so \(x = \dfrac{\ln 20}{\ln 3} = 2.73\).<br><br>
<b>Solve \(e^{2x} - 5e^x + 6 = 0\).</b> Since \(e^{2x} = (e^x)^2\), let \(u = e^x\): \(u^2 - 5u + 6 = 0\), so \((u - 2)(u - 3) = 0\). Then \(e^x = 2\) or \(3\), giving \(x = \ln 2\) or \(\ln 3\).</div>
<h3>Linearising data</h3>
<ul>
<li>\(y = ax^n \Rightarrow \log y = \log a + n\log x\): plot \(\log y\) against \(\log x\). Gradient \(n\), intercept \(\log a\).</li>
<li>\(y = ab^x \Rightarrow \log y = \log a + x\log b\): plot \(\log y\) against \(x\). Gradient \(\log b\), intercept \(\log a\).</li>
</ul>
<h3>Modelling</h3>
<p>Growth and decay: \(N = N_0 e^{kt}\), with \(k > 0\) for growth and \(k < 0\) for decay. \(N_0\) is the starting value. Always comment on limitations (e.g. unlimited growth is unrealistic).</p>
`,
  quiz: [
    { q: R`\(\log a + \log b = \ ?\)`, o: [R`\(\log(ab)\)`, R`\(\log(a + b)\)`, R`\(\log a \times \log b\)`, R`\(\log\frac{a}{b}\)`], a: 0, e: R`Logs turn multiplication into addition, because \(a^m \times a^n = a^{m+n}\).` },
    { q: R`\(3\log x = \ ?\)`, o: [R`\(\log x^3\)`, R`\(\log 3x\)`, R`\((\log x)^3\)`, R`\(\log(x + 3)\)`], a: 0, e: R`A multiplier in front becomes a power inside: \(k\log a = \log a^k\).` },
    { q: R`\(\ln e = \ ?\)`, o: ["1", "0", R`\(e\)`, "10"], a: 0, e: R`\(e^1 = e\), so the power needed is 1.` },
    { q: R`Solve \(e^x = 5\).`, o: [R`\(x = \ln 5\)`, R`\(x = \log 5\)`, R`\(x = \frac{5}{e}\)`, R`\(x = e^5\)`], a: 0, e: R`Take \(\ln\) of both sides; \(\ln\) undoes \(e^x\).` },
    { q: R`\(\dfrac{d}{dx}\left(e^{3x}\right) = \ ?\)`, o: [R`\(3e^{3x}\)`, R`\(e^{3x}\)`, R`\(3xe^{3x - 1}\)`, R`\(e^3\)`], a: 0, e: R`\(\dfrac{d}{dx}(e^{kx}) = ke^{kx}\) with \(k = 3\).` },
    { q: R`\(\log_2 32 = \ ?\)`, o: ["5", "16", "6", "2.5"], a: 0, e: R`\(2^5 = 32\).` },
    { q: R`To linearise \(y = ax^n\), plot…`, o: [R`\(\log y\) against \(\log x\)`, R`\(\log y\) against \(x\)`, R`\(y\) against \(\log x\)`, R`\(y\) against \(x^n\)`], a: 0, e: R`\(\log y = n\log x + \log a\) has the form \(Y = mX + c\) with \(X = \log x\).` },
    { q: R`In \(N = N_0 e^{-0.2t}\), \(N\)…`, o: ["Decays", "Grows", "Is constant", "Oscillates"], a: 0, e: R`The exponent's coefficient is negative, so \(N\) decreases as \(t\) increases.` },
    { q: R`Solve \(3^x = 20\) (2 d.p.).`, o: ["2.73", "6.67", "1.30", "2.99"], a: 0, e: R`\(x = \dfrac{\ln 20}{\ln 3} = 2.73\).` }
  ],
  flashcards: [
    [R`\(\log_a b = c\)`, R`\(a^c = b\)`],
    [R`\(\ln x\)`, R`Inverse of \(e^x\) (log base \(e\))`],
    [R`\(\log a + \log b\)`, R`\(\log ab\)`],
    [R`\(\log a - \log b\)`, R`\(\log\frac{a}{b}\)`],
    [R`\(k\log a\)`, R`\(\log a^k\)`],
    [R`\(\frac{d}{dx}\,e^{kx}\)`, R`\(ke^{kx}\)`],
    [R`\(y = ax^n\) linearised`, R`\(\log y\) vs \(\log x\): gradient \(n\)`],
    [R`\(y = ab^x\) linearised`, R`\(\log y\) vs \(x\): gradient \(\log b\)`]
  ]
});

S2Data.add({
  id: "7a", group: 7, y1: true, title: "Differentiation basics",
  summary: R`First principles, differentiating \(x^n\), tangents and normals, stationary points and optimisation.`,
  notes: R`
<h3>First principles</h3>
<p>The derivative is the limit of the gradient of a chord as it shrinks to a point:</p>
<p>\[f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Differentiate \(f(x) = x^2\) from first principles.
<ol><li>\(\dfrac{(x + h)^2 - x^2}{h} = \dfrac{x^2 + 2xh + h^2 - x^2}{h} = \dfrac{2xh + h^2}{h}\).</li>
<li>Cancel \(h\): \(2x + h\).</li>
<li>As \(h \to 0\), this tends to \(2x\). So \(f'(x) = 2x\).</li></ol></div>
<h3>Differentiating powers</h3>
<p>\[\frac{d}{dx}\left(ax^n\right) = nax^{n-1}\]</p>
<p>Multiply by the power, then reduce the power by 1. Rewrite roots and fractions as powers first: \(y = \dfrac{4}{\sqrt{x}} = 4x^{-\frac12}\), so \(\dfrac{dy}{dx} = -2x^{-\frac32}\).</p>
<h3>Tangents and normals</h3>
<p>At \(x = a\): the tangent has gradient \(m = f'(a)\); the normal is perpendicular, with gradient \(-\dfrac1m\). Then use \(y - y_1 = m(x - x_1)\).</p>
<h3>Stationary points</h3>
<ul>
<li>Find them by solving \(\dfrac{dy}{dx} = 0\).</li>
<li>Classify with the second derivative: \(\dfrac{d^2y}{dx^2} > 0\) means a minimum; \(< 0\) a maximum; \(= 0\) means check the gradient either side.</li>
<li>The function is increasing where \(f'(x) > 0\) and decreasing where \(f'(x) < 0\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (optimisation)</span>An open box with a square base of side \(x\) has volume 32. Its surface area is \(A = x^2 + \dfrac{128}{x}\). Find the minimum area.
<ol><li>\(\dfrac{dA}{dx} = 2x - \dfrac{128}{x^2}\). Set to zero: \(2x = \dfrac{128}{x^2}\), so \(x^3 = 64\) and \(x = 4\).</li>
<li>Check: \(\dfrac{d^2A}{dx^2} = 2 + \dfrac{256}{x^3} > 0\), so it's a minimum.</li>
<li>\(A = 16 + \dfrac{128}{4} = 48\).</li></ol></div>
<div class="box box-c"><span class="box-title">Year 13</span>A point of inflection has \(f''(x) = 0\) <i>and</i> \(f''\) changes sign there. The curve is concave where \(f''(x) < 0\) and convex where \(f''(x) > 0\).</div>
`,
  quiz: [
    { q: R`\(\dfrac{d}{dx}\left(5x^4\right) = \ ?\)`, o: [R`\(20x^3\)`, R`\(5x^3\)`, R`\(20x^4\)`, R`\(4x^3\)`], a: 0, e: R`Multiply by the power (4) and reduce it by one: \(4 \times 5x^3\).` },
    { q: R`\(\dfrac{d}{dx}\left(4x^{-\frac12}\right) = \ ?\)`, o: [R`\(-2x^{-\frac32}\)`, R`\(2x^{-\frac32}\)`, R`\(-2x^{\frac12}\)`, R`\(-8x^{-\frac32}\)`], a: 0, e: R`\(-\tfrac12 \times 4 = -2\), and the power becomes \(-\tfrac12 - 1 = -\tfrac32\).` },
    { q: "At a stationary point…", o: [R`\(\dfrac{dy}{dx} = 0\)`, R`\(\dfrac{d^2y}{dx^2} = 0\)`, R`\(y = 0\)`, R`\(x = 0\)`], a: 0, e: "The gradient is zero: the curve is momentarily flat." },
    { q: R`\(\dfrac{d^2y}{dx^2} > 0\) at a stationary point means…`, o: ["Minimum", "Maximum", "Inflection", "Undefined"], a: 0, e: R`The gradient is increasing through zero (negative, then positive), which is a \(\cup\) shape.` },
    { q: "The tangent gradient is 4. What is the normal gradient?", o: [R`\(-\tfrac14\)`, "4", "−4", R`\(\tfrac14\)`], a: 0, e: R`Perpendicular gradients multiply to \(-1\): \(4 \times \left(-\tfrac14\right) = -1\).` },
    { q: R`Differentiating \(f(x) = x^2\) from first principles gives…`, o: [R`\(2x\)`, R`\(x^2\)`, "2", R`\(2x + h\)`], a: 0, e: R`The expression is \(2x + h\) before taking the limit; as \(h \to 0\) it becomes \(2x\).` },
    { q: R`\(f(x)\) is increasing where…`, o: [R`\(f'(x) > 0\)`, R`\(f'(x) < 0\)`, R`\(f(x) > 0\)`, R`\(f''(x) > 0\)`], a: 0, e: "A positive gradient means the curve is going up." },
    { q: R`Year 13: \(f''(x) > 0\) means the curve is…`, o: ["Convex", "Concave", "Decreasing", "At a maximum"], a: 0, e: R`The gradient is increasing, so the curve bends upwards like \(\cup\).` },
    { q: R`Find the gradient of \(y = x^3 - 3x\) at \(x = 2\).`, o: ["9", "2", "12", "6"], a: 0, e: R`\(\dfrac{dy}{dx} = 3x^2 - 3 = 12 - 3 = 9\).` }
  ],
  flashcards: [
    ["First principles", R`\(f'(x) = \displaystyle\lim_{h \to 0}\frac{f(x + h) - f(x)}{h}\)`],
    [R`\(\frac{d}{dx}(ax^n)\)`, R`\(nax^{n-1}\)`],
    ["Tangent / normal gradient", R`\(f'(a)\) / \(-\dfrac{1}{f'(a)}\)`],
    ["Stationary points", R`\(\dfrac{dy}{dx} = 0\)`],
    ["Nature of a stationary point", R`\(f'' > 0\) minimum; \(f'' < 0\) maximum`],
    ["Increasing / decreasing", R`\(f' > 0\) / \(f' < 0\)`],
    ["Optimisation", "Write the quantity in one variable, differentiate, set to 0, check"],
    ["Inflection (Y13)", R`\(f'' = 0\) and changes sign`]
  ]
});

S2Data.add({
  id: "7b", group: 7, y2: true, title: "Further differentiation",
  summary: "Trig, exponential and log derivatives, chain, product and quotient rules, implicit and parametric differentiation, connected rates.",
  notes: R`
<h3>Standard derivatives</h3>
<table>
<tr><th>\(f(x)\)</th><th>\(f'(x)\)</th></tr>
<tr><td>\(\sin kx\)</td><td>\(k\cos kx\)</td></tr>
<tr><td>\(\cos kx\)</td><td>\(-k\sin kx\)</td></tr>
<tr><td>\(\tan kx\)</td><td>\(k\sec^2 kx\)</td></tr>
<tr><td>\(e^{kx}\)</td><td>\(ke^{kx}\)</td></tr>
<tr><td>\(\ln x\)</td><td>\(\dfrac1x\)</td></tr>
<tr><td>\(a^x\)</td><td>\(a^x\ln a\)</td></tr>
</table>
<h3>Rules</h3>
<table><tr><th>Rule</th><th>Formula</th><th>Use for</th></tr>
<tr><td>Chain</td><td>\(\dfrac{dy}{dx} = \dfrac{dy}{du} \times \dfrac{du}{dx}\)</td><td>A function of a function, e.g. \((3x + 1)^5\)</td></tr>
<tr><td>Product</td><td>\((uv)' = u'v + uv'\)</td><td>Two functions multiplied</td></tr>
<tr><td>Quotient</td><td>\(\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}\)</td><td>One function divided by another</td></tr></table>
<p>Chain rule example: \(\dfrac{d}{dx}(3x + 1)^5 = 5(3x + 1)^4 \times 3 = 15(3x + 1)^4\).</p>
<div class="box box-prac"><span class="box-title">Worked example (product rule)</span>Differentiate \(y = x^2e^{3x}\).
<ol><li>Let \(u = x^2\), so \(u' = 2x\); and \(v = e^{3x}\), so \(v' = 3e^{3x}\).</li>
<li>\(\dfrac{dy}{dx} = u'v + uv' = 2xe^{3x} + 3x^2e^{3x}\).</li>
<li>Factorise: \(xe^{3x}(2 + 3x)\).</li></ol></div>
<h3>Implicit and parametric differentiation</h3>
<ul>
<li><b>Implicit:</b> differentiate every term with respect to \(x\). Any \(y\) term picks up a factor \(\dfrac{dy}{dx}\): \(\dfrac{d}{dx}(y^2) = 2y\dfrac{dy}{dx}\), and \(\dfrac{d}{dx}(xy) = y + x\dfrac{dy}{dx}\) (product rule).</li>
<li><b>Parametric:</b> \(\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt}\).</li>
</ul>
<h3>Connected rates of change</h3>
<p>Link rates with the chain rule, e.g. \(\dfrac{dV}{dt} = \dfrac{dV}{dr} \times \dfrac{dr}{dt}\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A sphere's radius grows at 0.1 cm/s. How fast is its volume growing when \(r = 5\)?<br>\(V = \tfrac43\pi r^3\), so \(\dfrac{dV}{dr} = 4\pi r^2 = 100\pi\). Then \(\dfrac{dV}{dt} = 100\pi \times 0.1 = 10\pi \approx 31.4\text{ cm}^3/\text{s}\).</div>
`,
  quiz: [
    { q: R`\(\dfrac{d}{dx}(\sin 3x) = \ ?\)`, o: [R`\(3\cos 3x\)`, R`\(\cos 3x\)`, R`\(-3\cos 3x\)`, R`\(3\sin 3x\)`], a: 0, e: R`\(\sin\) differentiates to \(\cos\), and the chain rule brings out the 3.` },
    { q: R`\(\dfrac{d}{dx}(\ln x) = \ ?\)`, o: [R`\(\dfrac1x\)`, R`\(\ln x\)`, R`\(x\)`, R`\(e^x\)`], a: 0, e: "This is a standard result worth memorising." },
    { q: R`\(\dfrac{d}{dx}(3x + 1)^5 = \ ?\)`, o: [R`\(15(3x + 1)^4\)`, R`\(5(3x + 1)^4\)`, R`\((3x + 1)^4\)`, R`\(15(3x + 1)^5\)`], a: 0, e: R`Chain rule: \(5(3x + 1)^4\) times the derivative of the inside, 3.` },
    { q: R`Product rule: \((uv)' = \ ?\)`, o: [R`\(u'v + uv'\)`, R`\(u'v'\)`, R`\(u'v - uv'\)`, R`\(\dfrac{u'v - uv'}{v^2}\)`], a: 0, e: "Differentiate one at a time, keeping the other fixed, and add." },
    { q: R`Quotient rule: \(\left(\dfrac{u}{v}\right)' = \ ?\)`, o: [R`\(\dfrac{u'v - uv'}{v^2}\)`, R`\(\dfrac{uv' - u'v}{v^2}\)`, R`\(\dfrac{u'}{v'}\)`, R`\(\dfrac{u'v + uv'}{v^2}\)`], a: 0, e: R`The order matters in the numerator: \(u'v\) comes first.` },
    { q: R`\(\dfrac{d}{dx}(y^2) = \ ?\)`, o: [R`\(2y\dfrac{dy}{dx}\)`, R`\(2y\)`, R`\(2x\)`, R`\(y^2\)`], a: 0, e: R`Differentiate with respect to \(y\) (giving \(2y\)), then multiply by \(\dfrac{dy}{dx}\) (chain rule).` },
    { q: R`\(\dfrac{d}{dx}\left(2^x\right) = \ ?\)`, o: [R`\(2^x\ln 2\)`, R`\(x2^{x-1}\)`, R`\(2^x\)`, R`\(\dfrac{2^x}{\ln 2}\)`], a: 0, e: R`\(2^x = e^{x\ln 2}\), which differentiates to \(\ln 2 \cdot e^{x\ln2}\).` },
    { q: R`\(\dfrac{d}{dx}(\tan x) = \ ?\)`, o: [R`\(\sec^2 x\)`, R`\(\cot x\)`, R`\(-\sec^2 x\)`, R`\(\operatorname{cosec}^2 x\)`], a: 0, e: R`Using the quotient rule on \(\dfrac{\sin x}{\cos x}\) gives \(\dfrac{1}{\cos^2 x}\).` },
    { q: R`In connected rates, \(\dfrac{dV}{dt} = \ ?\)`, o: [R`\(\dfrac{dV}{dr} \times \dfrac{dr}{dt}\)`, R`\(\dfrac{dV}{dr} \div \dfrac{dr}{dt}\)`, R`\(\dfrac{dr}{dt} \div \dfrac{dV}{dr}\)`, R`\(\dfrac{dV}{dr} + \dfrac{dr}{dt}\)`], a: 0, e: R`Chain rule: the \(dr\)'s 'cancel'.` }
  ],
  flashcards: [
    [R`\(\sin kx\) / \(\cos kx\)`, R`\(k\cos kx\) / \(-k\sin kx\)`],
    [R`\(\tan kx\)`, R`\(k\sec^2 kx\)`],
    [R`\(e^{kx}\) / \(\ln x\)`, R`\(ke^{kx}\) / \(\frac1x\)`],
    [R`\(a^x\)`, R`\(a^x\ln a\)`],
    ["Chain rule", R`\(\dfrac{dy}{dx} = \dfrac{dy}{du}\times\dfrac{du}{dx}\)`],
    ["Product rule", R`\(u'v + uv'\)`],
    ["Quotient rule", R`\(\dfrac{u'v - uv'}{v^2}\)`],
    [R`Implicit \(y\) terms`, R`Multiply by \(\dfrac{dy}{dx}\)`],
    ["Connected rates", R`Chain rule with \(t\)`]
  ]
});

S2Data.add({
  id: "8a", group: 8, y1: true, title: "Integration basics",
  summary: R`Integrating \(x^n\), finding constants, definite integrals and areas under curves.`,
  notes: R`
<h3>Indefinite integration</h3>
<p>Integration reverses differentiation:</p>
<p>\[\int x^n\,dx = \frac{x^{n+1}}{n + 1} + c \qquad (n \ne -1)\]</p>
<p>Increase the power by 1, then divide by the new power. Rewrite roots and fractions as powers first, and always add \(+\,c\).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(\dfrac{dy}{dx} = 6x^2\) and the curve passes through \((1, 5)\). Find \(y\).
<ol><li>Integrate: \(y = \dfrac{6x^3}{3} + c = 2x^3 + c\).</li>
<li>Substitute the point: \(5 = 2(1)^3 + c\), so \(c = 3\).</li></ol>
So \(y = 2x^3 + 3\).</div>
<h3>Definite integrals</h3>
<p>\[\int_a^b f(x)\,dx = \Big[F(x)\Big]_a^b = F(b) - F(a)\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(\displaystyle\int_1^3 (3x^2 - 2x)\,dx = \Big[x^3 - x^2\Big]_1^3 = (27 - 9) - (1 - 1) = 18\).</div>
<h3>Areas</h3>
<ul>
<li>The area between a curve and the \(x\)-axis is \(\displaystyle\int y\,dx\). Parts below the axis come out negative, so split at the roots and add the sizes.</li>
<li>The area between two curves is \(\displaystyle\int (\text{upper} - \text{lower})\,dx\) between their intersections.</li>
</ul>
`,
  quiz: [
    { q: R`\(\displaystyle\int x^3\,dx = \ ?\)`, o: [R`\(\dfrac{x^4}{4} + c\)`, R`\(3x^2 + c\)`, R`\(x^4 + c\)`, R`\(4x^4 + c\)`], a: 0, e: "Add one to the power (to 4), then divide by the new power." },
    { q: R`\(\displaystyle\int 6x^2\,dx = \ ?\)`, o: [R`\(2x^3 + c\)`, R`\(12x + c\)`, R`\(6x^3 + c\)`, R`\(3x^3 + c\)`], a: 0, e: R`\(\dfrac{6x^3}{3} = 2x^3\). Check by differentiating: \(6x^2\) ✓.` },
    { q: R`\(\displaystyle\int x^{-2}\,dx = \ ?\)`, o: [R`\(-x^{-1} + c\)`, R`\(x^{-1} + c\)`, R`\(-2x^{-3} + c\)`, R`\(\dfrac{x^{-3}}{3} + c\)`], a: 0, e: R`The power goes up to \(-1\); divide by \(-1\).` },
    { q: R`\(\displaystyle\int_1^3 (3x^2 - 2x)\,dx = \ ?\)`, o: ["18", "20", "26", "8"], a: 0, e: R`\(\Big[x^3 - x^2\Big]_1^3 = 18 - 0\).` },
    { q: R`Why add \(+\,c\)?`, o: ["Differentiating any constant gives 0", "It makes the answer bigger", "It's optional", "Only for definite integrals"], a: 0, e: R`\(x^2\), \(x^2 + 5\) and \(x^2 - 7\) all have derivative \(2x\), so we can't know the constant.` },
    { q: R`The area between two curves is \(\int \ ?\)`, o: [R`\((\text{upper} - \text{lower})\,dx\)`, R`\((\text{lower} - \text{upper})\,dx\)`, R`\(\text{upper} \times \text{lower}\,dx\)`, R`\(\text{upper}\,dx\) only`], a: 0, e: "Subtracting the lower curve removes the area underneath it." },
    { q: R`A definite integral over a region below the \(x\)-axis is…`, o: ["Negative", "Positive", "Zero", "Undefined"], a: 0, e: R`The \(y\)-values are negative there, so the integral is negative. Take its size for an area.` },
    { q: R`\(\displaystyle\int \sqrt{x}\,dx = \ ?\)`, o: [R`\(\tfrac23 x^{\frac32} + c\)`, R`\(\tfrac12 x^{-\frac12} + c\)`, R`\(x^{\frac32} + c\)`, R`\(1.5x^{\frac12} + c\)`], a: 0, e: R`\(\sqrt x = x^{\frac12}\). Add one: \(x^{\frac32}\); divide by \(\tfrac32\) (multiply by \(\tfrac23\)).` },
    { q: R`\(\displaystyle\int_0^2 x\,dx = \ ?\)`, o: ["2", "4", "1", "0"], a: 0, e: R`\(\Big[\tfrac12 x^2\Big]_0^2 = 2\). (It's a triangle with base 2 and height 2.)` }
  ],
  flashcards: [
    [R`\(\int x^n\,dx\)`, R`\(\dfrac{x^{n+1}}{n + 1} + c\), \(n \ne -1\)`],
    [R`Finding \(c\)`, "Substitute a known point"],
    ["Definite integral", R`\(F(b) - F(a)\)`],
    ["Area under a curve", R`\(\int y\,dx\); split at the roots`],
    ["Area between curves", R`\(\int(\text{upper} - \text{lower})\,dx\)`],
    ["Prepare first", "Rewrite roots and fractions as powers"]
  ]
});

S2Data.add({
  id: "8b", group: 8, y2: true, title: "Integration techniques and differential equations",
  summary: "Standard integrals, reverse chain rule, substitution, by parts, partial fractions, trig identities and separable differential equations.",
  notes: R`
<h3>Standard integrals</h3>
<table><tr><th>\(f(x)\)</th><th>\(\int f(x)\,dx\)</th></tr>
<tr><td>\(e^{kx}\)</td><td>\(\dfrac1k e^{kx} + c\)</td></tr>
<tr><td>\(\dfrac1x\)</td><td>\(\ln|x| + c\)</td></tr>
<tr><td>\(\cos kx\)</td><td>\(\dfrac1k\sin kx + c\)</td></tr>
<tr><td>\(\sin kx\)</td><td>\(-\dfrac1k\cos kx + c\)</td></tr>
<tr><td>\(\sec^2 kx\)</td><td>\(\dfrac1k\tan kx + c\)</td></tr></table>
<h3>Recognising forms (reverse chain rule)</h3>
<ul>
<li>\(\displaystyle\int \frac{f'(x)}{f(x)}\,dx = \ln|f(x)| + c\). E.g. \(\displaystyle\int \frac{2x}{x^2 + 1}\,dx = \ln(x^2 + 1) + c\), because the top is the derivative of the bottom.</li>
<li>\(\displaystyle\int f'(x)\big[f(x)\big]^n\,dx = \frac{\big[f(x)\big]^{n+1}}{n + 1} + c\).</li>
</ul>
<h3>Techniques</h3>
<ul>
<li><b>Substitution:</b> let \(u = g(x)\), replace \(dx\) using \(\dfrac{du}{dx} = g'(x)\), and change the limits to \(u\)-values.</li>
<li><b>By parts:</b> \(\displaystyle\int u\frac{dv}{dx}\,dx = uv - \int v\frac{du}{dx}\,dx\). Choose \(u\) to be the part that gets simpler when differentiated (e.g. \(x\), or \(\ln x\)).</li>
<li><b>Partial fractions:</b> \(\displaystyle\int \frac{1}{(x + 1)(x + 2)}\,dx = \int\left(\frac{1}{x + 1} - \frac{1}{x + 2}\right)dx = \ln|x + 1| - \ln|x + 2| + c\).</li>
<li><b>Trig identities:</b> \(\displaystyle\int \sin^2 x\,dx = \int \tfrac12(1 - \cos 2x)\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + c\).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example (by parts)</span>Find \(\displaystyle\int xe^x\,dx\).
<ol><li>Let \(u = x\) (so \(\dfrac{du}{dx} = 1\)) and \(\dfrac{dv}{dx} = e^x\) (so \(v = e^x\)).</li>
<li>\(\displaystyle\int xe^x\,dx = xe^x - \int e^x \times 1\,dx = xe^x - e^x + c\).</li></ol>
Answer: \(e^x(x - 1) + c\).</div>
<h3>Differential equations</h3>
<p>For \(\dfrac{dy}{dx} = f(x)g(y)\), separate the variables and integrate both sides:</p>
<p>\[\int \frac{1}{g(y)}\,dy = \int f(x)\,dx\]</p>
<p>Example: \(\dfrac{dy}{dx} = ky \Rightarrow \displaystyle\int\frac1y\,dy = \int k\,dx \Rightarrow \ln y = kx + c \Rightarrow y = Ae^{kx}\). Use the initial conditions to find the constant, and interpret the answer in context.</p>
`,
  quiz: [
    { q: R`\(\displaystyle\int e^{3x}\,dx = \ ?\)`, o: [R`\(\tfrac13 e^{3x} + c\)`, R`\(3e^{3x} + c\)`, R`\(e^{3x} + c\)`, R`\(\dfrac{e^{3x}}{x} + c\)`], a: 0, e: R`Differentiating \(e^{3x}\) gives \(3e^{3x}\), so divide by 3 to undo it.` },
    { q: R`\(\displaystyle\int \frac1x\,dx = \ ?\)`, o: [R`\(\ln|x| + c\)`, R`\(x^0 + c\)`, R`\(-\dfrac{1}{x^2} + c\)`, R`\(e^x + c\)`], a: 0, e: R`The power rule fails for \(n = -1\); this is the special case.` },
    { q: R`\(\displaystyle\int \cos 2x\,dx = \ ?\)`, o: [R`\(\tfrac12\sin 2x + c\)`, R`\(2\sin 2x + c\)`, R`\(-\tfrac12\sin 2x + c\)`, R`\(\sin 2x + c\)`], a: 0, e: R`\(\dfrac{d}{dx}(\sin 2x) = 2\cos 2x\), so halve it.` },
    { q: R`\(\displaystyle\int \frac{2x}{x^2 + 1}\,dx = \ ?\)`, o: [R`\(\ln(x^2 + 1) + c\)`, R`\(2\ln x + c\)`, R`\(x^2 + c\)`, R`\(\dfrac{1}{x^2 + 1} + c\)`], a: 0, e: R`The numerator \(2x\) is the derivative of the denominator, so it's \(\ln|f(x)|\).` },
    { q: "The integration by parts formula is…", o: [R`\(uv - \int v\frac{du}{dx}\,dx\)`, R`\(uv + \int v\frac{du}{dx}\,dx\)`, R`\(u'v - uv'\)`, R`\(\int u\,dx \times \int v\,dx\)`], a: 0, e: "It comes from integrating the product rule." },
    { q: R`\(\displaystyle\int xe^x\,dx = \ ?\)`, o: [R`\(e^x(x - 1) + c\)`, R`\(xe^x + c\)`, R`\(e^x(x + 1) + c\)`, R`\(\dfrac{x^2e^x}{2} + c\)`], a: 0, e: R`By parts with \(u = x\): \(xe^x - \int e^x\,dx\).` },
    { q: R`To integrate \(\sin^2 x\), use…`, o: [R`\(\cos 2x = 1 - 2\sin^2 x\)`, "Parts", "Partial fractions", "Small angles"], a: 0, e: R`It rewrites \(\sin^2 x\) as \(\tfrac12(1 - \cos 2x)\), which integrates directly.` },
    { q: R`\(\dfrac{dy}{dx} = ky\) has general solution…`, o: [R`\(y = Ae^{kx}\)`, R`\(y = kx + c\)`, R`\(y = e^k x\)`, R`\(y = \ln(kx)\)`], a: 0, e: R`Separating gives \(\ln y = kx + c\), so \(y = e^{c}e^{kx} = Ae^{kx}\).` },
    { q: "When using substitution in a definite integral, you should…", o: [R`Change the limits to \(u\)-values`, R`Keep the \(x\) limits`, "Ignore the limits", R`Add \(c\)`], a: 0, e: R`Once everything is in \(u\), the limits must be \(u\)-values too (or substitute back first).` }
  ],
  flashcards: [
    [R`\(\int e^{kx}\,dx\)`, R`\(\frac1k e^{kx} + c\)`],
    [R`\(\int \frac1x\,dx\)`, R`\(\ln|x| + c\)`],
    [R`\(\int\cos kx\,dx\) / \(\int\sin kx\,dx\)`, R`\(\frac1k\sin kx\) / \(-\frac1k\cos kx\)`],
    [R`\(\int \frac{f'(x)}{f(x)}\,dx\)`, R`\(\ln|f(x)| + c\)`],
    ["By parts", R`\(uv - \int v\frac{du}{dx}\,dx\)`],
    [R`Choosing \(u\)`, "LATE: Logs, Algebra, Trig, Exponentials"],
    [R`\(\int\sin^2 x\,dx\)`, R`Use \(\sin^2 x = \tfrac12(1 - \cos 2x)\)`],
    ["Separable DE", R`\(\int\frac{1}{g(y)}\,dy = \int f(x)\,dx\)`]
  ]
});

S2Data.add({
  id: "9a", group: 9, y2: true, title: "Numerical methods",
  summary: "Locating roots by sign change, fixed-point iteration, Newton–Raphson and the trapezium rule.",
  notes: R`
<h3>Locating roots</h3>
<p>If \(f(x)\) is continuous on \([a, b]\) and \(f(a)\) and \(f(b)\) have opposite signs, there's a root between \(a\) and \(b\). This can fail if \(f\) has an asymptote (a discontinuity), or if two roots are close together (no sign change).</p>
<h3>Fixed-point iteration</h3>
<p>Rearrange \(f(x) = 0\) into \(x = g(x)\), then iterate \(x_{n+1} = g(x_n)\). It converges if \(|g'(x)| < 1\) near the root. Staircase and cobweb diagrams show convergence or divergence.</p>
<h3>Newton–Raphson</h3>
<p>\[x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}\]</p>
<p>Each step follows the tangent down to the \(x\)-axis. It fails if \(f'(x_n) = 0\) (horizontal tangent), or if the starting value is near a turning point.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Use Newton–Raphson on \(f(x) = x^2 - 2\) with \(x_0 = 1\). Here \(f'(x) = 2x\).
<ol><li>\(x_1 = 1 - \dfrac{1^2 - 2}{2(1)} = 1 - \dfrac{-1}{2} = 1.5\).</li>
<li>\(x_2 = 1.5 - \dfrac{1.5^2 - 2}{2(1.5)} = 1.5 - \dfrac{0.25}{3} = 1.4167\).</li></ol>
This is already close to \(\sqrt2 = 1.4142\ldots\).</div>
<h3>Trapezium rule</h3>
<p>\[\int_a^b y\,dx \approx \frac{h}{2}\Big[y_0 + 2(y_1 + y_2 + \cdots + y_{n-1}) + y_n\Big], \qquad h = \frac{b - a}{n}\]</p>
<p>It overestimates for convex curves (\(\cup\)) and underestimates for concave ones (\(\cap\)). More strips give a better estimate.</p>
`,
  quiz: [
    { q: R`A sign change of \(f(x)\) on \([a, b]\) shows a root if \(f\) is…`, o: ["Continuous", "Increasing", "Positive", "Quadratic"], a: 0, e: "A continuous graph can't get from negative to positive without crossing zero." },
    { q: "The Newton–Raphson formula is…", o: [R`\(x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}\)`, R`\(x_{n+1} = x_n + \dfrac{f(x_n)}{f'(x_n)}\)`, R`\(x_{n+1} = f(x_n)\)`, R`\(x_{n+1} = \dfrac{f'(x_n)}{f(x_n)}\)`], a: 0, e: R`It's where the tangent at \(x_n\) meets the \(x\)-axis.` },
    { q: "Newton–Raphson fails when…", o: [R`\(f'(x_n) = 0\)`, R`\(f(x_n) = 0\)`, R`\(x_n = 0\)`, R`\(f\) is a polynomial`], a: 0, e: "You'd be dividing by zero: a horizontal tangent never meets the axis." },
    { q: "Fixed-point iteration converges if, near the root…", o: [R`\(|g'(x)| < 1\)`, R`\(|g'(x)| > 1\)`, R`\(g(x) = 0\)`, R`\(g'(x) = 1\)`], a: 0, e: "A shallow gradient pulls successive values closer to the root." },
    { q: R`\(f(x) = x^2 - 2\), \(x_0 = 1\). Newton–Raphson gives \(x_1 = \ ?\)`, o: ["1.5", "1.414", "2", "0.5"], a: 0, e: R`\(1 - \dfrac{-1}{2} = 1.5\).` },
    { q: R`In the trapezium rule, the strip width \(h = \ ?\)`, o: [R`\(\dfrac{b - a}{n}\)`, R`\(\dfrac{b + a}{n}\)`, R`\(\dfrac{n}{b - a}\)`, R`\(b - a\)`], a: 0, e: R`The interval from \(a\) to \(b\) is split into \(n\) equal strips.` },
    { q: "For a convex curve, the trapezium rule gives…", o: ["An overestimate", "An underestimate", "The exact value", "Zero"], a: 0, e: "The straight tops of the trapezia lie above a curve that bends upwards." },
    { q: "A sign change can fail to show a root when…", o: [R`There's an asymptote between \(a\) and \(b\)`, R`\(f\) is continuous`, R`\(a < b\)`, R`\(f\) is linear`], a: 0, e: R`E.g. \(\frac1x\) changes sign across \(x = 0\) but has no root there.` },
    { q: "To improve a trapezium rule estimate…", o: ["Use more strips", "Use fewer strips", R`Increase \(h\)`, "Use only the endpoints"], a: 0, e: "Narrower strips follow the curve more closely." }
  ],
  flashcards: [
    ["Sign change", R`Root in \([a, b]\) if \(f\) is continuous and the signs differ`],
    ["Fixed-point iteration", R`\(x_{n+1} = g(x_n)\); converges if \(|g'| < 1\)`],
    ["Newton–Raphson", R`\(x_{n+1} = x_n - \dfrac{f(x_n)}{f'(x_n)}\)`],
    ["When Newton–Raphson fails", R`\(f'(x_n) = 0\), or starting near a turning point`],
    ["Trapezium rule", R`\(\frac{h}{2}\big[y_0 + 2(\text{middle } y\text{'s}) + y_n\big]\)`],
    ["Convex / concave", "Trapezium rule over / underestimates"]
  ]
});

S2Data.add({
  id: "10a", group: 10, y1: true, title: "Vectors",
  summary: "Vectors in 2D and 3D: magnitude, direction, position vectors, unit vectors and geometric problems.",
  notes: R`
<h3>Notation</h3>
<p>A vector can be written as \(\mathbf{a} = 3\mathbf{i} + 4\mathbf{j}\) or as a column \(\begin{pmatrix}3\\4\end{pmatrix}\). In 3D (Year 13): \(\mathbf{a} = x\mathbf{i} + y\mathbf{j} + z\mathbf{k}\).</p>
<ul>
<li>Magnitude: \(|\mathbf{a}| = \sqrt{x^2 + y^2}\) (add \(z^2\) in 3D). E.g. \(|3\mathbf{i} + 4\mathbf{j}| = \sqrt{9 + 16} = 5\).</li>
<li>Direction (2D): the angle \(\theta\) with \(\mathbf{i}\) satisfies \(\tan\theta = \dfrac{y}{x}\).</li>
<li>Unit vector (length 1): \(\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}\).</li>
</ul>
<h3>Position vectors</h3>
<p>If \(\overrightarrow{OA} = \mathbf{a}\) and \(\overrightarrow{OB} = \mathbf{b}\), then \(\overrightarrow{AB} = \mathbf{b} - \mathbf{a}\) ("end minus start"). The distance \(AB = |\mathbf{b} - \mathbf{a}|\), and the midpoint of \(AB\) has position vector \(\tfrac12(\mathbf{a} + \mathbf{b})\).</p>
<h3>Geometry</h3>
<p>Parallel vectors are scalar multiples of each other. To show \(A\), \(B\), \(C\) are collinear, show \(\overrightarrow{AB} = k\overrightarrow{BC}\) (they're parallel and share point \(B\)). To find unknown scalars, equate the \(\mathbf{i}\) and \(\mathbf{j}\) components.</p>
<div class="box box-c"><span class="box-title">Year 13: 3D</span>The distance between \((1, 2, 3)\) and \((4, 6, 15)\) is \(\sqrt{3^2 + 4^2 + 12^2} = \sqrt{169} = 13\). Vectors model forces and velocities in mechanics.</div>
`,
  quiz: [
    { q: R`\(|3\mathbf{i} + 4\mathbf{j}| = \ ?\)`, o: ["5", "7", "25", "1"], a: 0, e: R`\(\sqrt{3^2 + 4^2} = \sqrt{25} = 5\).` },
    { q: R`\(\overrightarrow{OA} = \mathbf{a}\), \(\overrightarrow{OB} = \mathbf{b}\). \(\overrightarrow{AB} = \ ?\)`, o: [R`\(\mathbf{b} - \mathbf{a}\)`, R`\(\mathbf{a} - \mathbf{b}\)`, R`\(\mathbf{a} + \mathbf{b}\)`, R`\(\mathbf{ab}\)`], a: 0, e: R`Go from \(A\) back to \(O\) (\(-\mathbf{a}\)), then out to \(B\) (\(+\mathbf{b}\)).` },
    { q: R`The unit vector in the direction of \(3\mathbf{i} + 4\mathbf{j}\) is…`, o: [R`\(0.6\mathbf{i} + 0.8\mathbf{j}\)`, R`\(3\mathbf{i} + 4\mathbf{j}\)`, R`\(\mathbf{i} + \mathbf{j}\)`, R`\(0.3\mathbf{i} + 0.4\mathbf{j}\)`], a: 0, e: R`Divide by the magnitude 5: \(\tfrac35\mathbf{i} + \tfrac45\mathbf{j}\).` },
    { q: R`Which is parallel to \(2\mathbf{i} - 3\mathbf{j}\)?`, o: [R`\(-4\mathbf{i} + 6\mathbf{j}\)`, R`\(3\mathbf{i} - 2\mathbf{j}\)`, R`\(2\mathbf{i} + 3\mathbf{j}\)`, R`\(4\mathbf{i} + 6\mathbf{j}\)`], a: 0, e: R`\(-4\mathbf{i} + 6\mathbf{j} = -2(2\mathbf{i} - 3\mathbf{j})\), a scalar multiple.` },
    { q: R`The position vector of the midpoint of \(A\) and \(B\) is…`, o: [R`\(\tfrac12(\mathbf{a} + \mathbf{b})\)`, R`\(\mathbf{b} - \mathbf{a}\)`, R`\(\mathbf{a} + \mathbf{b}\)`, R`\(\tfrac12(\mathbf{b} - \mathbf{a})\)`], a: 0, e: R`\(\mathbf{a} + \tfrac12(\mathbf{b} - \mathbf{a}) = \tfrac12(\mathbf{a} + \mathbf{b})\): the average of the two.` },
    { q: R`What angle does \(5\mathbf{i} + 5\mathbf{j}\) make with \(\mathbf{i}\)?`, o: [R`\(45^\circ\)`, R`\(90^\circ\)`, R`\(30^\circ\)`, R`\(60^\circ\)`], a: 0, e: R`\(\tan\theta = \tfrac55 = 1\), so \(\theta = 45^\circ\).` },
    { q: R`Year 13: \(|2\mathbf{i} - \mathbf{j} + 2\mathbf{k}| = \ ?\)`, o: ["3", R`\(\sqrt5\)`, "5", "9"], a: 0, e: R`\(\sqrt{4 + 1 + 4} = \sqrt9 = 3\).` },
    { q: "Collinear means…", o: ["On the same straight line", "Perpendicular", "Equal length", "Parallel but separate"], a: 0, e: "Parallel vectors that share a point must lie on one line." },
    { q: R`Year 13: the distance between \((1, 2, 3)\) and \((4, 6, 15)\) is…`, o: ["13", "19", R`\(\sqrt{91}\)`, "12"], a: 0, e: R`\(\sqrt{3^2 + 4^2 + 12^2} = \sqrt{169} = 13\).` }
  ],
  flashcards: [
    ["Magnitude", R`\(\sqrt{x^2 + y^2 + z^2}\)`],
    ["Unit vector", R`\(\hat{\mathbf{a}} = \dfrac{\mathbf{a}}{|\mathbf{a}|}\)`],
    [R`\(\overrightarrow{AB}\)`, R`\(\mathbf{b} - \mathbf{a}\)`],
    ["Midpoint", R`\(\tfrac12(\mathbf{a} + \mathbf{b})\)`],
    ["Parallel", "Scalar multiples of each other"],
    ["Collinear", R`\(\overrightarrow{AB} = k\overrightarrow{BC}\) with a shared point`],
    ["Direction (2D)", R`\(\tan\theta = \dfrac{y}{x}\), measured from \(\mathbf{i}\)`]
  ]
});

S2Data.detail("5a", { mistakes: [R`Dividing both sides by \(\cos x\) and losing the solutions where \(\cos x = 0\).`], tips: ["Sketch the graph over the given interval to find every solution."], fact: "Hipparchus compiled the first trig table, of chords, around 140 BCE." });
S2Data.detail("5b", { mistakes: [R`Using degrees in \(s = r\theta\). \(\theta\) must be in radians.`], tips: ["Check your calculator mode: radians for calculus and arcs."], fact: "A radian is the angle at which the arc length equals the radius." });
S2Data.detail("5c", { mistakes: [R`Getting the sign wrong in \(\cos(A + B)\): it's \(\cos A\cos B - \sin A\sin B\).`], tips: [R`For \(R\cos(x - \alpha)\), expand and compare the coefficients of \(\cos x\) and \(\sin x\).`], fact: "Harmonic form is how engineers combine AC voltages with different phases." });
S2Data.detail("6a", { mistakes: [R`Writing \(\log(a + b) = \log a + \log b\). There's no law for the log of a sum.`], tips: [R`For equations with \(e^{2x}\) and \(e^x\) terms, try \(u = e^x\).`], fact: R`\(e \approx 2.71828\) appears in compound interest when interest is compounded continuously.` });
S2Data.detail("7a", { mistakes: ["Forgetting to justify the nature of a stationary point."], tips: ["In optimisation, use the given constraint to write the quantity in terms of one variable."], fact: "Fermat used an early form of differentiation to find maxima and minima in the 1630s." });
S2Data.detail("7b", { mistakes: [R`Forgetting the chain-rule factor: \(\frac{d}{dx}\sin 3x = 3\cos 3x\), not \(\cos 3x\).`], tips: [R`In implicit differentiation, every \(y\) term picks up a \(\frac{dy}{dx}\).`], fact: R`The notation \(\frac{dy}{dx}\) comes from Leibniz; Newton used dots above letters.` });
S2Data.detail("8a", { mistakes: ["Adding definite-integral values for regions above and below the axis without making both positive."], tips: ["Sketch the curve before finding areas."], fact: "Archimedes found the area under a parabola using an early limit argument around 250 BCE." });
S2Data.detail("8b", { mistakes: [R`Forgetting the modulus in \(\int\frac1x\,dx = \ln|x| + c\).`], tips: [R`For integration by parts, let \(u\) be the factor that gets simpler when differentiated.`], fact: "Differential equations model everything from cooling coffee to population growth." });
S2Data.detail("9a", { mistakes: ["Concluding that no root exists because there's no sign change. There could be two roots close together."], tips: ["Show the sign change explicitly, with values and a conclusion."], fact: "Calculators use variants of Newton–Raphson to compute square roots." });
S2Data.detail("10a", { mistakes: [R`Calculating \(\overrightarrow{AB}\) as \(\mathbf{a} - \mathbf{b}\) instead of \(\mathbf{b} - \mathbf{a}\).`], tips: ["Draw a diagram and label every route you use."], fact: "GPS uses 3D vectors to locate you from satellite distances." });
