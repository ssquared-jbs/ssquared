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
  M("135° in radians?", "3π/4", "2π/3", "5π/6", "π/4"),
  M("5π/6 radians in degrees?", "150°", "120°", "300°", "135°"),
  M("Arc length with r = 5, θ = 1.2 rad?", "6", "15", "3", "60"),
  M("Sector area with r = 4, θ = π/2?", "4π", "8π", "2π", "16π"),
  M("cosec θ = …", "1/sin θ", "1/cos θ", "1/tan θ", "cos θ/sin θ"),
  M("sec²θ − tan²θ = …", "1", "0", "−1", "sec θ"),
  M("For small θ (radians), tan θ ≈ …", "θ", "1", "θ²", "1 − θ²/2"),
  M("arcsin(1) = …", "π/2", "π", "0", "1"),
  M("arctan(1) = …", "π/4", "π/2", "1", "π/3"),
  M("Domain of arcsin x?", "−1 ≤ x ≤ 1", "x ∈ ℝ", "0 ≤ x ≤ π", "x ≥ 0"),
  N(2, "Convert 2.5 radians to degrees (1 d.p.).", 143.2, ["2.5 × 180/π (1)", "= 143.2° (1)"], D1),
  N(2, "A sector has radius 8 cm and angle 0.75 rad. Find its arc length (cm).", 6, ["8 × 0.75 (1)", "= 6 cm (1)"], E),
  N(2, "A sector has radius 8 cm and angle 0.75 rad. Find its area (cm²).", 24, ["½ × 64 × 0.75 (1)", "= 24 cm² (1)"], E),
  N(2, "A sector has radius 10 cm and perimeter 32 cm. Find the angle (rad).", 1.2, ["20 + 10θ = 32 (1)", "θ = 1.2 (1)"], E),
  N(3, "Find the area of the segment cut off by a chord subtending 1.5 rad in a circle of radius 6 (2 d.p.).", 9.04, ["½r²(θ − sin θ) (1)", "18(1.5 − 0.9975) (1)", "= 9.04 (1)"], D2),
  N(2, "A sector of area 30 cm² has radius 6 cm. Find θ (rad, 3 d.p.).", 1.667, ["30 = ½ × 36 × θ (1)", "θ = 1.667 (1)"], D3),
  N(2, "Use small angles to approximate (1 − cos θ)/(θ sin θ) as θ → 0 (decimal).", 0.5, ["(θ²/2)/(θ × θ) (1)", "= 0.5 (1)"], E),
  N(2, "Use small angles to approximate cos θ when θ = 0.1 (4 d.p.).", 0.995, ["1 − 0.01/2 (1)", "= 0.995 (1)"], { tol: 0.00006 }),
  N(2, "Find sec(π/3).", 2, ["1/cos(π/3) = 1/½ (1)", "= 2 (1)"], E),
  N(2, "Find cosec(π/6).", 2, ["1/sin(π/6) (1)", "= 2 (1)"], E),
  N(2, "tan θ = 2. Find sec²θ.", 5, ["1 + tan²θ (1)", "= 5 (1)"], E),
  N(3, "Solve sec²x − 3tan x + 1 = 0 for 0 ≤ x < π. Give the smaller solution in radians to 3 d.p.", 0.785, ["1 + tan²x − 3tan x + 1 = 0 → tan²x − 3tan x + 2 = 0 (1)", "tan x = 1 or 2 (1)", "x = π/4 = 0.785 (1)"], D3),
  N(2, "Solve cosec x = 2 for 0 ≤ x < 2π. Give the larger solution in radians to 3 d.p.", 2.618, ["sin x = ½ (1)", "x = 5π/6 = 2.618 (1)"], D3),
  N(2, "Find arccos(−½) in radians to 3 d.p.", 2.094, ["2π/3 (1)", "= 2.094 (1)"], D3),
  T(2, "Show that sector area = ½r²θ.", ["Sector is fraction θ/(2π) of the circle", "θ/(2π)", "θ/2π", "fraction"], ["Area = θ/(2π) × πr² = ½r²θ", "πr²", "½r²θ"]),
  T(3, "Prove that 1 + tan²θ ≡ sec²θ.", ["Start from sin²θ + cos²θ ≡ 1", "sin²θ + cos²θ"], ["Divide every term by cos²θ", "divide", "cos²θ"], ["tan²θ + 1 ≡ sec²θ", "sec²θ"]),
  T(2, "Explain why radians are used in calculus.", ["Derivatives like d/dx sin x = cos x only hold in radians", "derivative", "cos x", "only in radians"], ["Radians make arc length and small-angle results simple: s = rθ, sin θ ≈ θ", "s = rθ", "small", "simple"]),
  T(2, "State the domain and range of arctan x.", ["Domain: all real x", "all real", "ℝ", "x ∈ ℝ"], ["Range: −π/2 < arctan x < π/2", "π/2", "−π/2", "-π/2"]),
  T(2, "Explain why arcsin x needs a restricted range.", ["sin x is many-to-one", "many-to-one", "not one-to-one"], ["Restricting to −π/2 ≤ x ≤ π/2 makes it one-to-one, so an inverse exists", "one-to-one", "inverse", "π/2"]),
  T(2, "Use small-angle approximations to simplify (sin 3θ)/θ for small θ.", ["sin 3θ ≈ 3θ", "3θ"], ["So (sin 3θ)/θ ≈ 3", "≈ 3", "3"])
]);

S2Data.exam("5c", [
  M("sin(A + B) = …", "sin A cos B + cos A sin B", "sin A + sin B", "cos A cos B − sin A sin B", "sin A sin B + cos A cos B"),
  M("cos 2x = 1 − 2sin²x, so sin²x = …", "½(1 − cos 2x)", "½(1 + cos 2x)", "1 − cos 2x", "cos 2x − 1"),
  M("cos²x = …", "½(1 + cos 2x)", "½(1 − cos 2x)", "1 + cos 2x", "2cos 2x"),
  M("Exact value of cos 15° uses…", "cos(45° − 30°)", "cos 2 × 7.5°", "small angles", "the sine rule"),
  M("2 sin 3x cos 3x = …", "sin 6x", "sin 3x", "cos 6x", "2 sin 6x"),
  M("Maximum of 5 sin x − 12 cos x?", "13", "17", "7", "5"),
  M("√3 sin x + cos x = 2 sin(x + α). α = …", "30°", "60°", "45°", "15°"),
  M("tan(A + B) = …", "(tan A + tan B)/(1 − tan A tan B)", "tan A + tan B", "(tan A − tan B)/(1 + tan A tan B)", "tan A tan B"),
  M("cos(x + 90°) = …", "−sin x", "sin x", "cos x", "−cos x"),
  M("Minimum value of 3 + 2 sin(x + 30°)?", "1", "3", "5", "−2"),
  N(2, "Find the exact value of sin 75° as a decimal to 4 d.p.", 0.9659, ["sin 45 cos 30 + cos 45 sin 30 = (√6 + √2)/4 (1)", "= 0.9659 (1)"], { tol: 0.00006 }),
  N(2, "sin A = 3/5 (A acute). Find sin 2A.", 0.96, ["cos A = 4/5 (1)", "2 × 3/5 × 4/5 = 0.96 (1)"], E),
  N(2, "sin A = 3/5 (A acute). Find cos 2A.", 0.28, ["1 − 2(9/25) (1)", "= 7/25 = 0.28 (1)"], E),
  N(2, "tan A = 2. Find tan 2A as a decimal to 3 d.p.", -1.333, ["2 × 2/(1 − 4) (1)", "= −4/3 (1)"], D3),
  N(2, "Write 3 sin x + 4 cos x as R sin(x + α). Find R.", 5, ["R = √(9 + 16) (1)", "= 5 (1)"], E),
  N(2, "Write 3 sin x + 4 cos x as R sin(x + α). Find α in degrees to 1 d.p.", 53.1, ["tan α = 4/3 (1)", "α = 53.1° (1)"], D1),
  N(3, "Solve 3 sin x + 4 cos x = 2 for 0 ≤ x < 360°. Give the smaller solution (1 d.p.).", 103.3, ["5 sin(x + 53.13°) = 2 (1)", "x + 53.13° = 156.42° or 383.58° (1)", "x = 103.3° (1)"], D1),
  N(2, "Find the maximum value of 2 cos x − 2√3 sin x.", 4, ["R = √(4 + 12) (1)", "= 4 (1)"], E),
  N(2, "Find the maximum value of 10 + 3 sin x + 4 cos x.", 15, ["3 sin x + 4 cos x = 5 sin(x + α), max 5 (1)", "10 + 5 = 15 (1)"], E),
  N(3, "Solve cos 2x = cos x for 0 ≤ x < 360°. Give the largest solution.", 240, ["2cos²x − cos x − 1 = 0 (1)", "cos x = 1 or −½ (1)", "x = 0°, 120°, 240°: 240° (1)"], E),
  N(3, "Solve sin 2x = sin x for 0 < x < 180°.", 60, ["2 sin x cos x − sin x = 0 → sin x(2cos x − 1) = 0 (1)", "sin x ≠ 0 in (0, 180); cos x = ½ (1)", "x = 60° (1)"], E),
  N(2, "Find cos(A − B) when cos A = 0.6, sin A = 0.8, cos B = 0.8, sin B = 0.6.", 0.96, ["0.48 + 0.48 (1)", "= 0.96 (1)"], E),
  N(2, "Find sin 2θ where sin θ = 0.6 and θ is obtuse.", -0.96, ["cos θ = −0.8 (1)", "2 × 0.6 × −0.8 = −0.96 (1)"], E),
  N(2, "Find ∫₀^π sin²x dx to 3 d.p. (use the double angle identity).", 1.571, ["½∫(1 − cos 2x) dx (1)", "= π/2 = 1.571 (1)"], D3),
  T(3, "Prove that (sin 2x)/(1 + cos 2x) ≡ tan x.", ["sin 2x = 2 sin x cos x", "2 sin x cos x"], ["1 + cos 2x = 2cos²x", "2cos²x", "2cos^2x"], ["2 sin x cos x/(2cos²x) = sin x/cos x = tan x", "tan x", "sin x/cos x"]),
  T(3, "Prove that cos⁴x − sin⁴x ≡ cos 2x.", ["(cos²x − sin²x)(cos²x + sin²x)", "difference of squares", "(cos²x + sin²x)"], ["cos²x + sin²x = 1", "= 1"], ["cos²x − sin²x = cos 2x", "cos 2x"]),
  T(3, "Express √3 cos x − sin x as R cos(x + α), 0 < α < 90°.", ["R cos x cos α − R sin x sin α: R cos α = √3, R sin α = 1", "r cos α", "R cos α = √3"], ["R = 2", "r = 2", "R = 2"], ["tan α = 1/√3, α = 30°: 2cos(x + 30°)", "30", "2cos(x + 30"]),
  T(2, "Explain why sin(A + B) ≠ sin A + sin B, with an example.", ["E.g. A = B = 45°: sin 90° = 1", "sin 90", "= 1"], ["But sin 45° + sin 45° = √2 ≈ 1.41", "√2", "1.41"]),
  T(2, "Explain how R sin(x + α) helps find the maximum of a sin x + b cos x.", ["The maximum of sin is 1", "maximum of sin", "1"], ["So the maximum is R = √(a² + b²), when x + α = 90°", "√(a² + b²)", "R", "90"]),
  T(2, "Show that cos 2x can be written as 2cos²x − 1.", ["cos 2x = cos²x − sin²x", "cos²x − sin²x"], ["Replace sin²x = 1 − cos²x: cos²x − 1 + cos²x = 2cos²x − 1", "1 − cos²x", "2cos²x − 1"])
]);

S2Data.exam("6a", [
  M("log₃ 81 = …", "4", "3", "27", "9"),
  M("log 6 − log 2 = …", "log 3", "log 4", "log 12", "3"),
  M("2 log 5 + log 4 = …", "log 100", "log 40", "log 14", "log 20"),
  M("ln e³ = …", "3", "e³", "1", "3e"),
  M("e^(ln 7) = …", "7", "ln 7", "e⁷", "1"),
  M("Solve ln x = 2.", "x = e²", "x = 2e", "x = ln 2", "x = 2/e"),
  M("The graph y = e^(−x) is…", "Decreasing, through (0, 1)", "Increasing", "Through (0, 0)", "Periodic"),
  M("The asymptote of y = eˣ + 3 is…", "y = 3", "y = 0", "x = 3", "x = 0"),
  M("If log y = 2 log x + log 5, then…", "y = 5x²", "y = 2x + 5", "y = x² + 5", "y = 10x"),
  M("For y = abˣ, plotting log y against x gives gradient…", "log b", "log a", "b", "a"),
  N(2, "Solve 5ˣ = 40 to 3 d.p.", 2.292, ["x = ln 40/ln 5 (1)", "= 2.292 (1)"], D3),
  N(2, "Solve e^(2x) = 9 to 3 d.p.", 1.099, ["2x = ln 9 (1)", "x = 1.099 (1)"], D3),
  N(2, "Solve 3e^(x − 1) = 12 to 3 d.p.", 2.386, ["e^(x − 1) = 4 (1)", "x = 1 + ln 4 = 2.386 (1)"], D3),
  N(2, "Solve ln(2x + 1) = 3 to 3 d.p.", 9.543, ["2x + 1 = e³ (1)", "x = (e³ − 1)/2 = 9.543 (1)"], D3),
  N(2, "Solve log₂(x + 3) = 5.", 29, ["x + 3 = 32 (1)", "x = 29 (1)"], E),
  N(3, "Solve log₂x + log₂(x − 2) = 3.", 4, ["log₂(x(x − 2)) = 3 → x² − 2x = 8 (1)", "(x − 4)(x + 2) = 0 (1)", "x = 4 (x > 2) (1)"], E),
  N(3, "Solve e^(2x) − 7eˣ + 12 = 0. Give the larger solution to 3 d.p.", 1.386, ["(eˣ − 3)(eˣ − 4) = 0 (1)", "x = ln 3 or ln 4 (1)", "ln 4 = 1.386 (1)"], D3),
  N(2, "Solve 2^(x + 1) = 3^x to 3 d.p.", 1.71, ["(x + 1) ln 2 = x ln 3 (1)", "x = ln 2/(ln 3 − ln 2) = 1.710 (1)"], D3),
  N(2, "N = 500e^(0.04t). Find N when t = 10 (nearest whole number).", 746, ["500e^0.4 (1)", "= 745.9 ≈ 746 (1)"], { tol: 1 }),
  N(2, "N = 500e^(0.04t). Find t when N = 1000 (2 d.p.).", 17.33, ["e^(0.04t) = 2 (1)", "t = ln 2/0.04 = 17.33 (1)"], D2),
  N(2, "A substance decays: m = 80e^(−0.1t). Find the half-life (2 d.p.).", 6.93, ["e^(−0.1t) = ½ (1)", "t = ln 2/0.1 = 6.93 (1)"], D2),
  N(2, "y = axⁿ. log₁₀ y against log₁₀ x has gradient 3 and intercept 0.5. Find a to 3 s.f.", 3.16, ["log a = 0.5 (1)", "a = 10^0.5 = 3.16 (1)"], { tol: 0.006 }),
  N(2, "y = abˣ. log₁₀ y against x has gradient 0.3. Find b to 3 s.f.", 2, ["log b = 0.3 (1)", "b = 10^0.3 = 2.00 (1)"], { tol: 0.006 }),
  N(2, "Find the gradient of y = 4e^(3x) at x = 0.", 12, ["dy/dx = 12e^(3x) (1)", "= 12 (1)"], E),
  T(2, "Show that log₂ 8 + log₂ 4 = 5.", ["log₂ 8 = 3 and log₂ 4 = 2", "3", "2"], ["3 + 2 = 5 (or log₂ 32 = 5)", "5", "32"]),
  T(3, "Explain how to find a and n if y = axⁿ, using a graph.", ["Take logs: log y = log a + n log x", "log y = log a + n log x", "log a + n log x"], ["Plot log y against log x to get a straight line", "log y against log x", "straight line"], ["Gradient = n, intercept = log a", "gradient", "intercept"]),
  T(2, "Give one limitation of N = 500e^(0.04t) as a long-term population model.", ["It predicts unlimited growth", "unlimited", "forever", "infinite"], ["Real populations are limited by food, space, disease", "food", "space", "resources", "limited"]),
  T(2, "Explain why ln x is undefined for x ≤ 0.", ["ln x is the inverse of eˣ", "inverse"], ["eˣ is always positive, so there's no y with eʸ ≤ 0", "always positive", "> 0", "positive"]),
  T(2, "Show that log(a/b) = log a − log b, using index laws.", ["Let log a = p, log b = q, so a = 10ᵖ, b = 10^q", "10ᵖ", "10^p", "let"], ["a/b = 10^(p − q), so log(a/b) = p − q", "p − q", "10^(p - q)"]),
  T(2, "Solve 3^(2x) = 5 exactly.", ["2x ln 3 = ln 5", "ln 3", "ln 5"], ["x = ln 5/(2 ln 3)", "ln 5/(2 ln 3)", "ln5/(2ln3)", "ln 5 / 2 ln 3"])
]);
})();
