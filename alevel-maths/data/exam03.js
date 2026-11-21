/* A-level Maths² exam questions — 5a, 5b, 5c, 6a */
(function () {
const M = (q, ...o) => ({ t: "mcq", m: 1, q, o, a: 0 });
const N = (m, q, ans, ms, x) => Object.assign({ t: "num", m, q, ans, ms }, x || {});
const T = (m, q, ...p) => ({ t: "text", m, q, ms: p.map(x => x[0]), kw: p.map(x => x.slice(1)) });
const R = String.raw;
const E = { rel: 0.001 };
const D1 = { tol: 0.06 };
const D2 = { tol: 0.006 };
const D3 = { tol: 0.0006 };

S2Data.exam("5a", [
  M(R`Solve \(\tan x = 1\) for \(0 \le x < 360^\circ\).`, R`\(45^\circ, 225^\circ\)`, R`\(45^\circ, 135^\circ\)`, R`\(45^\circ\) only`, R`\(45^\circ, 315^\circ\)`),
  M(R`Solve \(\sin x = -\tfrac12\) for \(0 \le x < 360^\circ\).`, R`\(210^\circ, 330^\circ\)`, R`\(30^\circ, 150^\circ\)`, R`\(150^\circ, 210^\circ\)`, R`\(330^\circ\) only`),
  M(R`\(\cos(-\theta) = \ ?\)`, R`\(\cos\theta\)`, R`\(-\cos\theta\)`, R`\(\sin\theta\)`, R`\(-\sin\theta\)`),
  M(R`Simplify \(\dfrac{1 - \cos^2\theta}{\cos^2\theta}\).`, R`\(\tan^2\theta\)`, R`\(\sin^2\theta\)`, R`\(1\)`, R`\(\cot^2\theta\)`),
  M(R`\(\dfrac{\sin\theta}{\tan\theta} = \ ?\)`, R`\(\cos\theta\)`, R`\(\sin^2\theta\)`, R`\(\dfrac{1}{\cos\theta}\)`, R`\(\tan\theta\)`),
  M(R`The graph of \(y = \cos x\) passes through…`, R`\((0, 1)\)`, R`\((0, 0)\)`, R`\((90^\circ, 1)\)`, R`\((180^\circ, 1)\)`),
  M(R`What is the period of \(y = \sin 2x\)?`, R`\(180^\circ\)`, R`\(360^\circ\)`, R`\(720^\circ\)`, R`\(90^\circ\)`),
  M("The ambiguous case of the sine rule occurs when finding…", "An angle, using a side opposite a known angle", "A side from two angles", "An angle using the cosine rule", "An area"),
  M("A triangle has sides 7, 8 and 13. The largest angle is opposite…", "13", "7", "8", "Can't tell"),
  M(R`Solve \(\sin x = 2\).`, "No solutions", R`\(x = 90^\circ\)`, R`\(x = 2^\circ\)`, R`\(x = 180^\circ\)`),
  N(2, R`Solve \(\sin x = 0.4\) for \(0 \le x < 360^\circ\). Give the larger solution to 1 d.p.`, 156.4, [R`Use the calculator: \(x = \sin^{-1}(0.4) = 23.6^\circ\). (1)`, R`Sine is also positive in the second quadrant, so the other solution is \(180^\circ - 23.6^\circ = 156.4^\circ\). (1)`], D1),
  N(2, R`Solve \(\cos x = -0.3\) for \(0 \le x < 360^\circ\). Give the smaller solution to 1 d.p.`, 107.5, [R`Use the calculator: \(x = \cos^{-1}(-0.3)\). (1)`, R`\(= 107.5^\circ\). (The other solution is \(360^\circ - 107.5^\circ = 252.5^\circ\).) (1)`], D1),
  N(2, R`Solve \(\tan x = 3\) for \(0 \le x < 360^\circ\). Give the larger solution to 1 d.p.`, 251.6, [R`Use the calculator: \(x = \tan^{-1}(3) = 71.6^\circ\). (1)`, R`\(\tan\) repeats every \(180^\circ\), so add \(180^\circ\): \(71.6^\circ + 180^\circ = 251.6^\circ\). (1)`], D1),
  N(2, R`Solve \(\sin 2x = 0.5\) for \(0 \le x < 180^\circ\). Give the larger solution.`, 75, [R`Let \(u = 2x\), so \(0 \le u < 360^\circ\). \(\sin u = 0.5\) gives \(u = 30^\circ\) or \(180^\circ - 30^\circ = 150^\circ\). (1)`, R`Halve each one: \(x = 15^\circ\) or \(75^\circ\). The larger is \(75^\circ\). (1)`], E),
  N(3, R`Solve \(2\cos^2 x - \cos x - 1 = 0\) for \(0 \le x < 360^\circ\). Give the largest solution.`, 240, [R`It's a quadratic in \(\cos x\). Factorise: \((2\cos x + 1)(\cos x - 1) = 0\). (1)`, R`\(\cos x = -\tfrac12\) gives \(x = 120^\circ\) and \(360^\circ - 120^\circ = 240^\circ\); \(\cos x = 1\) gives \(x = 0^\circ\). (1)`, R`The largest solution is \(240^\circ\). (1)`], E),
  N(3, R`Solve \(2\sin^2 x = 3\cos x\) for \(0 \le x < 360^\circ\). Give the larger solution.`, 300, [R`Replace \(\sin^2 x\) with \(1 - \cos^2 x\): \(2 - 2\cos^2 x = 3\cos x\), so \(2\cos^2 x + 3\cos x - 2 = 0\). (1)`, R`Factorise: \((2\cos x - 1)(\cos x + 2) = 0\). \(\cos x = -2\) is impossible, so \(\cos x = \tfrac12\). (1)`, R`\(x = 60^\circ\) or \(360^\circ - 60^\circ = 300^\circ\). (1)`], E),
  N(2, R`Solve \(\sin x = 3\cos x\) for \(0 \le x < 180^\circ\), to 1 d.p.`, 71.6, [R`Divide both sides by \(\cos x\) (safe here, since \(\cos x = 0\) isn't a solution): \(\tan x = 3\). (1)`, R`\(x = \tan^{-1}(3) = 71.6^\circ\). (1)`], D1),
  N(2, R`Find side \(a\) when \(b = 8\), \(c = 11\) and \(A = 40^\circ\). Give your answer to 2 d.p.`, 7.08, [R`Two sides and the included angle, so use the cosine rule: \(a^2 = 8^2 + 11^2 - 2(8)(11)\cos 40^\circ = 185 - 176\cos 40^\circ\). (1)`, R`\(a^2 = 50.17\ldots\), so \(a = 7.08\). (1)`], D2),
  N(2, R`Find angle \(B\) when \(a = 9\), \(A = 50^\circ\) and \(b = 7\). Give the acute answer to 1 d.p.`, 36.6, [R`A side with its opposite angle is known, so use the sine rule: \(\dfrac{\sin B}{7} = \dfrac{\sin 50^\circ}{9}\), so \(\sin B = \dfrac{7\sin 50^\circ}{9}\). (1)`, R`\(\sin B = 0.5958\ldots\), so \(B = 36.6^\circ\). (1)`], D1),
  N(2, "Find the largest angle of a triangle with sides 5, 7 and 10. Give your answer to 1 d.p.", 111.8, [R`The largest angle \(C\) is opposite the longest side, 10. Rearrange the cosine rule: \(\cos C = \dfrac{5^2 + 7^2 - 10^2}{2(5)(7)} = \dfrac{-26}{70}\). (1)`, R`\(C = \cos^{-1}\!\left(-\tfrac{26}{70}\right) = 111.8^\circ\). (1)`], D1),
  N(2, R`Find the area of a triangle with sides 9 and 12 and included angle \(35^\circ\). Give your answer to 1 d.p.`, 31, [R`\(\text{Area} = \tfrac12 ab\sin C = \tfrac12 \times 9 \times 12 \times \sin 35^\circ\). (1)`, R`\(= 54\sin 35^\circ = 31.0\). (1)`], D1),
  N(2, R`\(\sin\theta = 0.6\) and \(\theta\) is obtuse. Find \(\cos\theta\).`, -0.8, [R`Use \(\sin^2\theta + \cos^2\theta = 1\): \(\cos^2\theta = 1 - 0.36 = 0.64\), so \(\cos\theta = \pm 0.8\). (1)`, R`Cosine is negative for obtuse angles, so \(\cos\theta = -0.8\). (1)`], E),
  N(2, R`\(\tan\theta = 2.4\) and \(\theta\) is acute. Find \(\sin\theta\) to 3 d.p.`, 0.923, [R`Draw a right-angled triangle with opposite 2.4 and adjacent 1. The hypotenuse is \(\sqrt{2.4^2 + 1^2} = \sqrt{6.76} = 2.6\). (1)`, R`\(\sin\theta = \dfrac{\text{opp}}{\text{hyp}} = \dfrac{2.4}{2.6} = 0.923\). (1)`], D3),
  N(2, R`How many solutions does \(\sin 3x = 0.2\) have for \(0 \le x < 360^\circ\)?`, 6, [R`Let \(u = 3x\), so \(0 \le u < 1080^\circ\): three full cycles of the sine graph. (1)`, R`The line \(y = 0.2\) crosses each cycle twice, so there are \(3 \times 2 = 6\) solutions. (1)`], E),
  T(3, R`Prove that \(\dfrac{1 - \sin^2\theta}{\sin\theta\cos\theta} \equiv \dfrac{1}{\tan\theta}\).`, [R`Start with the left-hand side and use \(1 - \sin^2\theta = \cos^2\theta\)`, "cos²θ", "cos^2"], [R`Cancel one \(\cos\theta\): \(\dfrac{\cos^2\theta}{\sin\theta\cos\theta} = \dfrac{\cos\theta}{\sin\theta}\)`, "cos θ/sin θ", "cosθ/sinθ", "cos/sin"], [R`Since \(\tan\theta = \dfrac{\sin\theta}{\cos\theta}\), this equals \(\dfrac{1}{\tan\theta}\)`, "1/tan θ", "1/tanθ", "1/tan"]),
  T(3, R`Prove that \(\sin^4\theta - \cos^4\theta \equiv \sin^2\theta - \cos^2\theta\).`, [R`Treat it as a difference of two squares: \((\sin^2\theta - \cos^2\theta)(\sin^2\theta + \cos^2\theta)\)`, "difference of squares", "(sin²θ + cos²θ)", "sin^2"], [R`Use \(\sin^2\theta + \cos^2\theta = 1\)`, "= 1"], [R`So the expression equals \(\sin^2\theta - \cos^2\theta\)`, "sin²θ − cos²θ", "sin^2θ - cos^2θ"]),
  T(2, R`Explain why dividing \(\sin x\cos x = \tfrac12\sin x\) by \(\sin x\) loses solutions.`, [R`\(\sin x = 0\) also satisfies the equation, but dividing by \(\sin x\) removes it`, "sin x = 0"], [R`Factorise instead: \(\sin x(\cos x - \tfrac12) = 0\), giving \(\sin x = 0\) or \(\cos x = \tfrac12\)`, "factorise", "sin x(cos x"]),
  T(2, "Explain the ambiguous case of the sine rule.", [R`\(\sin\theta = \sin(180^\circ - \theta)\), so the sine rule gives two possible angles`, "180"], ["One acute and one obtuse; both may give valid triangles", "acute", "obtuse", "two"]),
  T(2, R`Describe the graph of \(y = \tan x\) for \(0 \le x \le 360^\circ\).`, [R`It repeats every \(180^\circ\), crossing the \(x\)-axis at \(0^\circ, 180^\circ, 360^\circ\)`, "180", "period"], [R`It has vertical asymptotes at \(90^\circ\) and \(270^\circ\)`, "asymptote", "90", "270"]),
  T(3, R`Solve \(4\sin^2 x - 1 = 0\) for \(0 \le x < 360^\circ\).`, [R`Rearrange: \(\sin^2 x = \tfrac14\)`, "¼", "1/4", "0.25"], [R`Square-root both sides, remembering both signs: \(\sin x = \pm\tfrac12\)`, "±½", "±1/2", "± 0.5", "+-"], [R`\(\sin x = \tfrac12\): \(30^\circ, 150^\circ\); \(\sin x = -\tfrac12\): \(210^\circ, 330^\circ\)`, "30", "150", "210", "330"])
]);


S2Data.exam("5b", [
  M(R`\(135^\circ\) in radians is…`, R`\(\dfrac{3\pi}{4}\)`, R`\(\dfrac{2\pi}{3}\)`, R`\(\dfrac{5\pi}{6}\)`, R`\(\dfrac{\pi}{4}\)`),
  M(R`\(\dfrac{5\pi}{6}\) radians in degrees is…`, R`\(150^\circ\)`, R`\(120^\circ\)`, R`\(300^\circ\)`, R`\(135^\circ\)`),
  M(R`Arc length with \(r = 5\) and \(\theta = 1.2\) rad?`, "6", "15", "3", "60"),
  M(R`Sector area with \(r = 4\) and \(\theta = \dfrac{\pi}{2}\)?`, R`\(4\pi\)`, R`\(8\pi\)`, R`\(2\pi\)`, R`\(16\pi\)`),
  M(R`\(\operatorname{cosec}\theta = \ ?\)`, R`\(\dfrac{1}{\sin\theta}\)`, R`\(\dfrac{1}{\cos\theta}\)`, R`\(\dfrac{1}{\tan\theta}\)`, R`\(\dfrac{\cos\theta}{\sin\theta}\)`),
  M(R`\(\sec^2\theta - \tan^2\theta = \ ?\)`, "1", "0", "−1", R`\(\sec\theta\)`),
  M(R`For small \(\theta\) (radians), \(\tan\theta \approx\ ?\)`, R`\(\theta\)`, "1", R`\(\theta^2\)`, R`\(1 - \frac{\theta^2}{2}\)`),
  M(R`\(\arcsin(1) = \ ?\)`, R`\(\dfrac{\pi}{2}\)`, R`\(\pi\)`, "0", "1"),
  M(R`\(\arctan(1) = \ ?\)`, R`\(\dfrac{\pi}{4}\)`, R`\(\dfrac{\pi}{2}\)`, "1", R`\(\dfrac{\pi}{3}\)`),
  M(R`The domain of \(\arcsin x\) is…`, R`\(-1 \le x \le 1\)`, R`\(x \in \mathbb{R}\)`, R`\(0 \le x \le \pi\)`, R`\(x \ge 0\)`),
  N(2, "Convert 2.5 radians to degrees (1 d.p.).", 143.2, [R`Multiply by \(\dfrac{180}{\pi}\): \(2.5 \times \dfrac{180}{\pi}\). (1)`, R`\(= 143.2^\circ\). (1)`], D1),
  N(2, "A sector has radius 8 cm and angle 0.75 rad. Find its arc length (cm).", 6, [R`\(s = r\theta = 8 \times 0.75\). (1)`, R`\(= 6\) cm. (1)`], E),
  N(2, R`A sector has radius 8 cm and angle 0.75 rad. Find its area (\(\text{cm}^2\)).`, 24, [R`\(A = \tfrac12 r^2\theta = \tfrac12 \times 64 \times 0.75\). (1)`, R`\(= 24\text{ cm}^2\). (1)`], E),
  N(2, "A sector has radius 10 cm and perimeter 32 cm. Find the angle (rad).", 1.2, [R`The perimeter is two radii plus the arc: \(10 + 10 + 10\theta = 32\). (1)`, R`\(10\theta = 12\), so \(\theta = 1.2\) rad. (1)`], E),
  N(3, "Find the area of the segment cut off by a chord subtending 1.5 rad in a circle of radius 6 (2 d.p.).", 9.04, [R`Segment = sector − triangle \(= \tfrac12 r^2(\theta - \sin\theta)\). (1)`, R`\(= \tfrac12 \times 36 \times (1.5 - \sin 1.5) = 18(1.5 - 0.9975)\). (1)`, R`\(= 9.04\). (1)`], D2),
  N(2, R`A sector of area \(30\text{ cm}^2\) has radius 6 cm. Find \(\theta\) (rad, 3 d.p.).`, 1.667, [R`\(30 = \tfrac12 \times 36 \times \theta = 18\theta\). (1)`, R`\(\theta = \dfrac{30}{18} = 1.667\). (1)`], D3),
  N(2, R`Use small-angle approximations to find the limit of \(\dfrac{1 - \cos\theta}{\theta\sin\theta}\) as \(\theta \to 0\) (decimal).`, 0.5, [R`\(1 - \cos\theta \approx \dfrac{\theta^2}{2}\) and \(\theta\sin\theta \approx \theta \times \theta = \theta^2\). (1)`, R`\(\dfrac{\theta^2/2}{\theta^2} = 0.5\). (1)`], E),
  N(2, R`Use a small-angle approximation for \(\cos\theta\) when \(\theta = 0.1\) (4 d.p.).`, 0.995, [R`\(\cos\theta \approx 1 - \dfrac{\theta^2}{2} = 1 - \dfrac{0.01}{2}\). (1)`, R`\(= 0.9950\). (1)`], { tol: 0.00006 }),
  N(2, R`Find \(\sec\dfrac{\pi}{3}\).`, 2, [R`\(\cos\dfrac{\pi}{3} = \tfrac12\), so \(\sec\dfrac{\pi}{3} = \dfrac{1}{1/2}\). (1)`, R`\(= 2\). (1)`], E),
  N(2, R`Find \(\operatorname{cosec}\dfrac{\pi}{6}\).`, 2, [R`\(\sin\dfrac{\pi}{6} = \tfrac12\), so \(\operatorname{cosec}\dfrac{\pi}{6} = \dfrac{1}{1/2}\). (1)`, R`\(= 2\). (1)`], E),
  N(2, R`\(\tan\theta = 2\). Find \(\sec^2\theta\).`, 5, [R`Use \(\sec^2\theta = 1 + \tan^2\theta\). (1)`, R`\(= 1 + 4 = 5\). (1)`], E),
  N(3, R`Solve \(\sec^2 x - 3\tan x + 1 = 0\) for \(0 \le x < \pi\). Give the smaller solution in radians to 3 d.p.`, 0.785, [R`Replace \(\sec^2 x\) with \(1 + \tan^2 x\): \(\tan^2 x - 3\tan x + 2 = 0\). (1)`, R`Factorise: \((\tan x - 1)(\tan x - 2) = 0\), so \(\tan x = 1\) or \(2\). (1)`, R`\(\tan x = 1\) gives \(x = \dfrac{\pi}{4} = 0.785\) (the smaller; \(\tan x = 2\) gives 1.107). (1)`], D3),
  N(2, R`Solve \(\operatorname{cosec} x = 2\) for \(0 \le x < 2\pi\). Give the larger solution in radians to 3 d.p.`, 2.618, [R`\(\operatorname{cosec} x = 2 \Rightarrow \sin x = \tfrac12\), so \(x = \dfrac{\pi}{6}\) or \(\pi - \dfrac{\pi}{6}\). (1)`, R`The larger is \(\dfrac{5\pi}{6} = 2.618\). (1)`], D3),
  N(2, R`Find \(\arccos\left(-\tfrac12\right)\) in radians to 3 d.p.`, 2.094, [R`\(\cos\dfrac{2\pi}{3} = -\tfrac12\), and \(\dfrac{2\pi}{3}\) is in the range \([0, \pi]\). (1)`, R`\(\dfrac{2\pi}{3} = 2.094\). (1)`], D3),
  T(2, R`Show that the area of a sector is \(\tfrac12 r^2\theta\).`, [R`The sector is a fraction \(\dfrac{\theta}{2\pi}\) of the whole circle`, "θ/(2π)", "θ/2π", "fraction"], [R`Area \(= \dfrac{\theta}{2\pi} \times \pi r^2 = \tfrac12 r^2\theta\)`, "πr²", "½r²θ"]),
  T(3, R`Prove that \(1 + \tan^2\theta \equiv \sec^2\theta\).`, [R`Start from \(\sin^2\theta + \cos^2\theta \equiv 1\)`, "sin²θ + cos²θ"], [R`Divide every term by \(\cos^2\theta\)`, "divide", "cos²θ"], [R`\(\tan^2\theta + 1 \equiv \sec^2\theta\)`, "sec²θ"]),
  T(2, "Explain why radians are used in calculus.", [R`Results like \(\frac{d}{dx}\sin x = \cos x\) only hold when \(x\) is in radians`, "derivative", "cos x", "only in radians"], [R`Radians make arc length and small-angle results simple: \(s = r\theta\), \(\sin\theta \approx \theta\)`, "s = rθ", "small", "simple"]),
  T(2, R`State the domain and range of \(\arctan x\).`, [R`Domain: all real \(x\)`, "all real", "ℝ", "x ∈ ℝ"], [R`Range: \(-\dfrac{\pi}{2} < \arctan x < \dfrac{\pi}{2}\)`, "π/2", "−π/2", "-π/2"]),
  T(2, R`Explain why \(\arcsin x\) needs a restricted range.`, [R`\(\sin x\) is many-to-one`, "many-to-one", "not one-to-one"], [R`Restricting to \(-\frac{\pi}{2} \le x \le \frac{\pi}{2}\) makes it one-to-one, so an inverse exists`, "one-to-one", "inverse", "π/2"]),
  T(2, R`Use small-angle approximations to simplify \(\dfrac{\sin 3\theta}{\theta}\) for small \(\theta\).`, [R`\(\sin 3\theta \approx 3\theta\)`, "3θ"], [R`So \(\dfrac{\sin 3\theta}{\theta} \approx 3\)`, "≈ 3", "3"])
]);

S2Data.exam("5c", [
  M(R`\(\sin(A + B) = \ ?\)`, R`\(\sin A\cos B + \cos A\sin B\)`, R`\(\sin A + \sin B\)`, R`\(\cos A\cos B - \sin A\sin B\)`, R`\(\sin A\sin B + \cos A\cos B\)`),
  M(R`\(\cos 2x = 1 - 2\sin^2 x\), so \(\sin^2 x = \ ?\)`, R`\(\tfrac12(1 - \cos 2x)\)`, R`\(\tfrac12(1 + \cos 2x)\)`, R`\(1 - \cos 2x\)`, R`\(\cos 2x - 1\)`),
  M(R`\(\cos^2 x = \ ?\)`, R`\(\tfrac12(1 + \cos 2x)\)`, R`\(\tfrac12(1 - \cos 2x)\)`, R`\(1 + \cos 2x\)`, R`\(2\cos 2x\)`),
  M(R`The exact value of \(\cos 15^\circ\) can be found using…`, R`\(\cos(45^\circ - 30^\circ)\)`, R`\(\cos(2 \times 7.5^\circ)\)`, "Small angles", "The sine rule"),
  M(R`\(2\sin 3x\cos 3x = \ ?\)`, R`\(\sin 6x\)`, R`\(\sin 3x\)`, R`\(\cos 6x\)`, R`\(2\sin 6x\)`),
  M(R`The maximum of \(5\sin x - 12\cos x\) is…`, "13", "17", "7", "5"),
  M(R`\(\sqrt3\sin x + \cos x = 2\sin(x + \alpha)\). \(\alpha = \ ?\)`, R`\(30^\circ\)`, R`\(60^\circ\)`, R`\(45^\circ\)`, R`\(15^\circ\)`),
  M(R`\(\tan(A + B) = \ ?\)`, R`\(\dfrac{\tan A + \tan B}{1 - \tan A\tan B}\)`, R`\(\tan A + \tan B\)`, R`\(\dfrac{\tan A - \tan B}{1 + \tan A\tan B}\)`, R`\(\tan A\tan B\)`),
  M(R`\(\cos(x + 90^\circ) = \ ?\)`, R`\(-\sin x\)`, R`\(\sin x\)`, R`\(\cos x\)`, R`\(-\cos x\)`),
  M(R`The minimum value of \(3 + 2\sin(x + 30^\circ)\) is…`, "1", "3", "5", "−2"),
  N(2, R`Find the exact value of \(\sin 75^\circ\), as a decimal to 4 d.p.`, 0.9659, [R`\(\sin(45^\circ + 30^\circ) = \sin45^\circ\cos30^\circ + \cos45^\circ\sin30^\circ = \dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2} + \dfrac{\sqrt2}{2}\cdot\dfrac12 = \dfrac{\sqrt6 + \sqrt2}{4}\). (1)`, R`\(= 0.9659\). (1)`], { tol: 0.00006 }),
  N(2, R`\(\sin A = \tfrac35\) (\(A\) acute). Find \(\sin 2A\).`, 0.96, [R`From a 3–4–5 triangle, \(\cos A = \tfrac45\). (1)`, R`\(\sin 2A = 2\sin A\cos A = 2 \times \tfrac35 \times \tfrac45 = 0.96\). (1)`], E),
  N(2, R`\(\sin A = \tfrac35\) (\(A\) acute). Find \(\cos 2A\).`, 0.28, [R`Use \(\cos 2A = 1 - 2\sin^2 A = 1 - 2 \times \tfrac{9}{25}\). (1)`, R`\(= \tfrac{7}{25} = 0.28\). (1)`], E),
  N(2, R`\(\tan A = 2\). Find \(\tan 2A\) to 3 d.p.`, -1.333, [R`\(\tan 2A = \dfrac{2\tan A}{1 - \tan^2 A} = \dfrac{4}{1 - 4}\). (1)`, R`\(= -\tfrac43 = -1.333\). (1)`], D3),
  N(2, R`Write \(3\sin x + 4\cos x\) as \(R\sin(x + \alpha)\). Find \(R\).`, 5, [R`Comparing coefficients: \(R\cos\alpha = 3\), \(R\sin\alpha = 4\). Square and add: \(R^2 = 9 + 16\). (1)`, R`\(R = 5\). (1)`], E),
  N(2, R`Write \(3\sin x + 4\cos x\) as \(R\sin(x + \alpha)\). Find \(\alpha\) in degrees to 1 d.p.`, 53.1, [R`Divide: \(\tan\alpha = \dfrac{R\sin\alpha}{R\cos\alpha} = \dfrac43\). (1)`, R`\(\alpha = \tan^{-1}\tfrac43 = 53.1^\circ\). (1)`], D1),
  N(3, R`Solve \(3\sin x + 4\cos x = 2\) for \(0 \le x < 360^\circ\). Give the smaller solution (1 d.p.).`, 103.3, [R`Using harmonic form: \(5\sin(x + 53.13^\circ) = 2\), so \(\sin(x + 53.13^\circ) = 0.4\). (1)`, R`\(x + 53.13^\circ\) runs from \(53.13^\circ\) to \(413.13^\circ\): solutions \(156.42^\circ\) and \(383.58^\circ\). (1)`, R`Subtract \(53.13^\circ\): \(x = 103.3^\circ\) (the smaller). (1)`], D1),
  N(2, R`Find the maximum value of \(2\cos x - 2\sqrt3\sin x\).`, 4, [R`\(R = \sqrt{2^2 + (2\sqrt3)^2} = \sqrt{4 + 12}\). (1)`, R`\(= 4\), so the maximum is 4. (1)`], E),
  N(2, R`Find the maximum value of \(10 + 3\sin x + 4\cos x\).`, 15, [R`\(3\sin x + 4\cos x = 5\sin(x + \alpha)\), whose maximum is 5. (1)`, R`\(10 + 5 = 15\). (1)`], E),
  N(3, R`Solve \(\cos 2x = \cos x\) for \(0 \le x < 360^\circ\). Give the largest solution.`, 240, [R`Use \(\cos 2x = 2\cos^2 x - 1\): \(2\cos^2 x - \cos x - 1 = 0\). (1)`, R`\((2\cos x + 1)(\cos x - 1) = 0\), so \(\cos x = 1\) or \(-\tfrac12\). (1)`, R`\(x = 0^\circ, 120^\circ, 240^\circ\); the largest is \(240^\circ\). (1)`], E),
  N(3, R`Solve \(\sin 2x = \sin x\) for \(0 < x < 180^\circ\).`, 60, [R`\(2\sin x\cos x - \sin x = 0\), so \(\sin x(2\cos x - 1) = 0\). (1)`, R`\(\sin x = 0\) has no solutions in \(0 < x < 180^\circ\), so \(\cos x = \tfrac12\). (1)`, R`\(x = 60^\circ\). (1)`], E),
  N(2, R`Find \(\cos(A - B)\) when \(\cos A = 0.6\), \(\sin A = 0.8\), \(\cos B = 0.8\), \(\sin B = 0.6\).`, 0.96, [R`\(\cos(A - B) = \cos A\cos B + \sin A\sin B = 0.6(0.8) + 0.8(0.6)\). (1)`, R`\(= 0.48 + 0.48 = 0.96\). (1)`], E),
  N(2, R`Find \(\sin 2\theta\) where \(\sin\theta = 0.6\) and \(\theta\) is obtuse.`, -0.96, [R`\(\cos^2\theta = 1 - 0.36 = 0.64\); obtuse so \(\cos\theta = -0.8\). (1)`, R`\(\sin 2\theta = 2(0.6)(-0.8) = -0.96\). (1)`], E),
  N(2, R`Find \(\displaystyle\int_0^\pi \sin^2 x\,dx\) to 3 d.p., using a double angle identity.`, 1.571, [R`\(\sin^2 x = \tfrac12(1 - \cos 2x)\), so the integral is \(\Big[\tfrac{x}{2} - \tfrac{\sin 2x}{4}\Big]_0^\pi\). (1)`, R`\(= \dfrac{\pi}{2} - 0 = 1.571\). (1)`], D3),
  T(3, R`Prove that \(\dfrac{\sin 2x}{1 + \cos 2x} \equiv \tan x\).`, [R`\(\sin 2x = 2\sin x\cos x\)`, "2 sin x cos x"], [R`\(1 + \cos 2x = 1 + (2\cos^2 x - 1) = 2\cos^2 x\)`, "2cos²x", "2cos^2x"], [R`\(\dfrac{2\sin x\cos x}{2\cos^2 x} = \dfrac{\sin x}{\cos x} = \tan x\)`, "tan x", "sin x/cos x"]),
  T(3, R`Prove that \(\cos^4 x - \sin^4 x \equiv \cos 2x\).`, [R`Difference of two squares: \((\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x)\)`, "difference of squares", "(cos²x + sin²x)"], [R`\(\cos^2 x + \sin^2 x = 1\)`, "= 1"], [R`\(\cos^2 x - \sin^2 x = \cos 2x\)`, "cos 2x"]),
  T(3, R`Express \(\sqrt3\cos x - \sin x\) as \(R\cos(x + \alpha)\), \(0 < \alpha < 90^\circ\).`, [R`\(R\cos(x + \alpha) = R\cos x\cos\alpha - R\sin x\sin\alpha\), so \(R\cos\alpha = \sqrt3\), \(R\sin\alpha = 1\)`, "r cos α", "R cos α = √3"], [R`\(R = \sqrt{3 + 1} = 2\)`, "r = 2", "R = 2"], [R`\(\tan\alpha = \tfrac{1}{\sqrt3}\), so \(\alpha = 30^\circ\): \(2\cos(x + 30^\circ)\)`, "30", "2cos(x + 30"]),
  T(2, R`Using an example, explain why \(\sin(A + B) \ne \sin A + \sin B\).`, [R`E.g. \(A = B = 45^\circ\): \(\sin 90^\circ = 1\)`, "sin 90", "= 1"], [R`But \(\sin 45^\circ + \sin 45^\circ = \sqrt2 \approx 1.41\)`, "√2", "1.41"]),
  T(2, R`Explain how \(R\sin(x + \alpha)\) helps find the maximum of \(a\sin x + b\cos x\).`, [R`The maximum value of \(\sin\) is 1`, "maximum of sin", "1"], [R`So the maximum is \(R = \sqrt{a^2 + b^2}\), when \(x + \alpha = 90^\circ\)`, "√(a² + b²)", "R", "90"]),
  T(2, R`Show that \(\cos 2x\) can be written as \(2\cos^2 x - 1\).`, [R`\(\cos 2x = \cos^2 x - \sin^2 x\)`, "cos²x − sin²x"], [R`Replace \(\sin^2 x\) with \(1 - \cos^2 x\): \(\cos^2 x - 1 + \cos^2 x = 2\cos^2 x - 1\)`, "1 − cos²x", "2cos²x − 1"])
]);

S2Data.exam("6a", [
  M(R`\(\log_3 81 = \ ?\)`, "4", "3", "27", "9"),
  M(R`\(\log 6 - \log 2 = \ ?\)`, R`\(\log 3\)`, R`\(\log 4\)`, R`\(\log 12\)`, "3"),
  M(R`\(2\log 5 + \log 4 = \ ?\)`, R`\(\log 100\)`, R`\(\log 40\)`, R`\(\log 14\)`, R`\(\log 20\)`),
  M(R`\(\ln e^3 = \ ?\)`, "3", R`\(e^3\)`, "1", R`\(3e\)`),
  M(R`\(e^{\ln 7} = \ ?\)`, "7", R`\(\ln 7\)`, R`\(e^7\)`, "1"),
  M(R`Solve \(\ln x = 2\).`, R`\(x = e^2\)`, R`\(x = 2e\)`, R`\(x = \ln 2\)`, R`\(x = \frac{2}{e}\)`),
  M(R`The graph \(y = e^{-x}\) is…`, R`Decreasing, through \((0, 1)\)`, "Increasing", R`Through \((0, 0)\)`, "Periodic"),
  M(R`The asymptote of \(y = e^x + 3\) is…`, R`\(y = 3\)`, R`\(y = 0\)`, R`\(x = 3\)`, R`\(x = 0\)`),
  M(R`If \(\log y = 2\log x + \log 5\), then…`, R`\(y = 5x^2\)`, R`\(y = 2x + 5\)`, R`\(y = x^2 + 5\)`, R`\(y = 10x\)`),
  M(R`For \(y = ab^x\), plotting \(\log y\) against \(x\) gives gradient…`, R`\(\log b\)`, R`\(\log a\)`, R`\(b\)`, R`\(a\)`),
  N(2, R`Solve \(5^x = 40\) to 3 d.p.`, 2.292, [R`Take logs: \(x\ln 5 = \ln 40\), so \(x = \dfrac{\ln 40}{\ln 5}\). (1)`, R`\(= 2.292\). (1)`], D3),
  N(2, R`Solve \(e^{2x} = 9\) to 3 d.p.`, 1.099, [R`Take \(\ln\): \(2x = \ln 9\). (1)`, R`\(x = \tfrac12\ln 9 = \ln 3 = 1.099\). (1)`], D3),
  N(2, R`Solve \(3e^{x - 1} = 12\) to 3 d.p.`, 2.386, [R`Divide by 3: \(e^{x - 1} = 4\), so \(x - 1 = \ln 4\). (1)`, R`\(x = 1 + \ln 4 = 2.386\). (1)`], D3),
  N(2, R`Solve \(\ln(2x + 1) = 3\) to 3 d.p.`, 9.543, [R`Undo \(\ln\) with \(e\): \(2x + 1 = e^3\). (1)`, R`\(x = \dfrac{e^3 - 1}{2} = 9.543\). (1)`], D3),
  N(2, R`Solve \(\log_2(x + 3) = 5\).`, 29, [R`Rewrite as a power: \(x + 3 = 2^5 = 32\). (1)`, R`\(x = 29\). (1)`], E),
  N(3, R`Solve \(\log_2 x + \log_2(x - 2) = 3\).`, 4, [R`Combine the logs: \(\log_2\big(x(x - 2)\big) = 3\), so \(x^2 - 2x = 2^3 = 8\). (1)`, R`\(x^2 - 2x - 8 = 0\), so \((x - 4)(x + 2) = 0\). (1)`, R`The logs need \(x > 2\), so \(x = 4\) (reject \(-2\)). (1)`], E),
  N(3, R`Solve \(e^{2x} - 7e^x + 12 = 0\). Give the larger solution to 3 d.p.`, 1.386, [R`Let \(u = e^x\): \(u^2 - 7u + 12 = 0\), so \((u - 3)(u - 4) = 0\). (1)`, R`\(e^x = 3\) or \(4\), so \(x = \ln 3\) or \(\ln 4\). (1)`, R`The larger is \(\ln 4 = 1.386\). (1)`], D3),
  N(2, R`Solve \(2^{x + 1} = 3^x\) to 3 d.p.`, 1.71, [R`Take logs: \((x + 1)\ln 2 = x\ln 3\), so \(\ln 2 = x(\ln 3 - \ln 2)\). (1)`, R`\(x = \dfrac{\ln 2}{\ln 3 - \ln 2} = 1.710\). (1)`], D3),
  N(2, R`\(N = 500e^{0.04t}\). Find \(N\) when \(t = 10\) (nearest whole number).`, 746, [R`\(N = 500e^{0.4}\). (1)`, R`\(= 745.9\ldots \approx 746\). (1)`], { tol: 1 }),
  N(2, R`\(N = 500e^{0.04t}\). Find \(t\) when \(N = 1000\) (2 d.p.).`, 17.33, [R`\(e^{0.04t} = 2\), so \(0.04t = \ln 2\). (1)`, R`\(t = \dfrac{\ln 2}{0.04} = 17.33\). (1)`], D2),
  N(2, R`A substance decays as \(m = 80e^{-0.1t}\). Find the half-life (2 d.p.).`, 6.93, [R`Half the mass: \(e^{-0.1t} = \tfrac12\), so \(-0.1t = \ln\tfrac12 = -\ln 2\). (1)`, R`\(t = \dfrac{\ln 2}{0.1} = 6.93\). (1)`], D2),
  N(2, R`\(y = ax^n\). A graph of \(\log_{10} y\) against \(\log_{10} x\) has gradient 3 and intercept 0.5. Find \(a\) to 3 s.f.`, 3.16, [R`\(\log y = \log a + n\log x\), so the intercept is \(\log a = 0.5\). (1)`, R`\(a = 10^{0.5} = 3.16\). (1)`], { tol: 0.006 }),
  N(2, R`\(y = ab^x\). A graph of \(\log_{10} y\) against \(x\) has gradient 0.3. Find \(b\) to 3 s.f.`, 2, [R`The gradient is \(\log b = 0.3\). (1)`, R`\(b = 10^{0.3} = 2.00\). (1)`], { tol: 0.006 }),
  N(2, R`Find the gradient of \(y = 4e^{3x}\) at \(x = 0\).`, 12, [R`\(\dfrac{dy}{dx} = 4 \times 3e^{3x} = 12e^{3x}\). (1)`, R`At \(x = 0\): \(12e^0 = 12\). (1)`], E),
  T(2, R`Show that \(\log_2 8 + \log_2 4 = 5\).`, [R`\(\log_2 8 = 3\) (since \(2^3 = 8\)) and \(\log_2 4 = 2\)`, "3", "2"], [R`\(3 + 2 = 5\) (or \(\log_2 32 = 5\))`, "5", "32"]),
  T(3, R`Explain how to find \(a\) and \(n\) for \(y = ax^n\) using a graph.`, [R`Take logs: \(\log y = \log a + n\log x\)`, "log y = log a + n log x", "log a + n log x"], [R`Plot \(\log y\) against \(\log x\) to get a straight line`, "log y against log x", "straight line"], [R`The gradient is \(n\); the intercept is \(\log a\)`, "gradient", "intercept"]),
  T(2, R`Give one limitation of \(N = 500e^{0.04t}\) as a long-term population model.`, ["It predicts unlimited growth", "unlimited", "forever", "infinite"], ["Real populations are limited by food, space and disease", "food", "space", "resources", "limited"]),
  T(2, R`Explain why \(\ln x\) is undefined for \(x \le 0\).`, [R`\(\ln x\) is the inverse of \(e^x\)`, "inverse"], [R`\(e^y\) is always positive, so no \(y\) gives \(e^y \le 0\)`, "always positive", "> 0", "positive"]),
  T(2, R`Use index laws to show that \(\log\dfrac{a}{b} = \log a - \log b\).`, [R`Let \(\log a = p\) and \(\log b = q\), so \(a = 10^p\), \(b = 10^q\)`, "10ᵖ", "10^p", "let"], [R`\(\dfrac{a}{b} = 10^{p - q}\), so \(\log\dfrac{a}{b} = p - q\)`, "p − q", "10^(p - q)"]),
  T(2, R`Solve \(3^{2x} = 5\) exactly.`, [R`Take logs: \(2x\ln 3 = \ln 5\)`, "ln 3", "ln 5"], [R`\(x = \dfrac{\ln 5}{2\ln 3}\)`, "ln 5/(2 ln 3)", "ln5/(2ln3)", "ln 5 / 2 ln 3"])
]);

})();
