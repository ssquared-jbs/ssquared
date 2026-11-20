/* Video explainers — A-level Maths: Pure. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Proof", sub: "Four ways to show something is always true, or isn't.", mark: "∎",
    say: ["In maths, examples aren't enough. A proof shows something is true in every case."] },
  { type: "compare", title: "Methods of proof", h: ["How"],
    rows: [["Deduction", "Logical steps from known facts"], ["Exhaustion", "Check every possible case"], ["Counter-example", "One failure disproves it"], ["Contradiction (Y13)", "Assume the opposite; reach the impossible"]],
    say: ["Proof by deduction builds a chain of logical steps from facts you know.", "Proof by exhaustion splits the problem into cases, like odd and even, and checks every one.", "To disprove a statement, one counter-example is enough.", "In Year 13, proof by contradiction assumes the statement is false and shows that leads to something impossible."] },
  { type: "calc", title: "Deduction", q: "Prove the sum of three consecutive integers is a multiple of 3",
    lines: ["n + (n + 1) + (n + 2)", "= 3n + 3 = 3(n + 1)", "A multiple of 3 ∎"],
    say: ["Write three consecutive integers in general form.", "Add them and factorise out three.", "Finish with a conclusion: it's a multiple of three."] },
  { type: "flow", title: "Year 13: √2 is irrational", nodes: ["Assume √2 = a/b,<br>lowest terms", "a² = 2b²,<br>so a even", "a = 2k →<br>b² = 2k², b even", "Both even:<br>contradiction"],
    say: ["Assume root two can be written as a over b in its lowest terms.", "Squaring gives a squared equals two b squared, so a squared is even, and so is a.", "Write a as two k. Then b squared is two k squared, so b is even too.", "But a and b can't both be even if the fraction was in lowest terms. That's a contradiction, so root two is irrational."] },
  { type: "quiz", q: "Which disproves 'all primes are odd'?", o: ["3", "2", "9", "1"], a: 1,
    why: "2 is prime and even.", say: ["Which number disproves the statement that all primes are odd?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Indices and surds", sub: "The algebra of powers and roots.", mark: "√",
    say: ["Indices and surds turn up everywhere in A-level maths, especially before differentiating and integrating."] },
  { type: "compare", title: "Index laws", h: ["Rule"],
    rows: [["aᵐ × aⁿ", "aᵐ⁺ⁿ"], ["aᵐ ÷ aⁿ", "aᵐ⁻ⁿ"], ["a⁻ⁿ", "1/aⁿ"], ["a^(m/n)", "(ⁿ√a)ᵐ"]],
    say: ["Multiplying powers of the same base: add the indices.", "Dividing: subtract them.", "A negative index means one over.", "A fractional index means a root: the denominator is the root, the numerator the power."] },
  { type: "calc", title: "Rationalising", q: "(5 + √3)/(2 − √3)",
    lines: ["Multiply top and bottom by (2 + √3)", "Top: 10 + 5√3 + 2√3 + 3 = 13 + 7√3", "Bottom: 4 − 3 = 1 → 13 + 7√3"],
    say: ["To remove a surd from the denominator, multiply top and bottom by its conjugate, two plus root three.", "Expand the top.", "The bottom is a difference of two squares: four minus three, which is one."] },
  { type: "quiz", q: "16^(−3/4) = ?", o: ["−12", "1/8", "8", "1/12"], a: 1,
    why: "Fourth root of 16 is 2, cubed is 8, reciprocal 1/8.", say: ["What's sixteen to the power minus three quarters?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Quadratics", sub: "Completing the square and the discriminant.", mark: "Δ",
    say: ["Quadratics are the backbone of A-level algebra. Two tools matter most: completing the square and the discriminant."] },
  { type: "calc", title: "Completing the square", q: "2x² − 12x + 7",
    lines: ["2(x² − 6x) + 7", "2[(x − 3)² − 9] + 7", "2(x − 3)² − 11 → minimum (3, −11)"],
    say: ["Take out the coefficient of x squared from the x terms.", "Complete the square inside the bracket: x minus three squared, minus nine.", "Tidy up. The turning point is three, minus eleven, and it's a minimum because two is positive."] },
  { type: "compare", title: "The discriminant b² − 4ac", h: ["Roots", "Graph"],
    rows: [["> 0", "Two distinct", "Crosses twice"], ["= 0", "One repeated", "Touches"], ["< 0", "None", "Misses the axis"]],
    say: ["If the discriminant is positive, there are two distinct real roots.", "If it's zero, there's one repeated root: the graph just touches the x axis.", "If it's negative, there are no real roots."] },
  { type: "quiz", q: "x² + kx + 9 = 0 has equal roots. k = ?", o: ["±3", "±6", "±9", "±18"], a: 1,
    why: "k² − 36 = 0.", say: ["For which values of k does x squared plus k x plus nine have equal roots?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Equations and inequalities", sub: "Simultaneous equations and quadratic inequalities.", mark: "<",
    say: ["Solving equations together and solving inequalities both rely on careful algebra and a good sketch."] },
  { type: "calc", title: "Linear and quadratic", q: "x + y = 5 and x² + y² = 13",
    lines: ["y = 5 − x → x² + (5 − x)² = 13", "2x² − 10x + 12 = 0 → x² − 5x + 6 = 0", "x = 2, y = 3 or x = 3, y = 2"],
    say: ["Rearrange the linear equation and substitute into the quadratic.", "Expand and simplify to a quadratic in x.", "Solve, then find the matching y values."] },
  { type: "graph", title: "Quadratic inequality", x: "x", y: "y",
    lines: [{ pts: [[0, 0.3], [1, 0.3]], straight: true }, { pts: [[0.08, 0.9], [0.3, 0.3], [0.5, 0.08], [0.7, 0.3], [0.92, 0.9]] }],
    marks: [{ x: 0.3, y: 0.3, t: "−2", s: 2, anchor: "end", dx: -20, dy: 32 }, { x: 0.7, y: 0.3, t: "3", s: 2, anchor: "start", dx: 20, dy: 32 }],
    say: ["To solve x squared minus x minus six is greater than zero, first find the critical values by factorising: minus two and three.", "Sketch the parabola. The flat line is the x axis.", "Greater than zero means above the axis: x less than minus two, or x greater than three."] },
  { type: "quiz", q: "Solve x² − 7x + 10 ≤ 0.", o: ["x ≤ 2 or x ≥ 5", "2 ≤ x ≤ 5", "x ≥ 5", "x ≤ 2"], a: 1,
    why: "Below the axis, between the roots.", say: ["Solve x squared minus seven x plus ten is less than or equal to zero."] }
]});

S2Data.video("2d", { scenes: [
  { type: "title", title: "Graphs and transformations", sub: "Sketching curves and moving them.", mark: "f(x)",
    say: ["A good sketch shows the shape, intercepts and asymptotes. Transformations let you sketch new curves from old ones."] },
  { type: "compare", title: "Transformations", h: ["Effect"],
    rows: [["f(x) + a", "Up a"], ["f(x + a)", "Left a"], ["af(x)", "Stretch ∥ y-axis, ×a"], ["f(ax)", "Stretch ∥ x-axis, ×1/a"]],
    say: ["Adding outside the function translates the graph up.", "Adding inside the bracket translates it left.", "Multiplying outside stretches it vertically by that factor.", "Multiplying x inside squashes it horizontally: the scale factor is one over a."] },
  { type: "points", title: "Sketching cubics", items: ["Roots from factors: (x − a) → x = a", "Repeated root: touches the axis", "Positive x³: bottom-left to top-right"],
    say: ["Each factor x minus a gives a root at x equals a.", "A squared factor gives a repeated root, where the curve touches the axis instead of crossing.", "If the x cubed coefficient is positive, the graph rises from bottom left to top right."] },
  { type: "quiz", q: "y = f(2x) is a stretch parallel to the x-axis with scale factor…", o: ["2", "½", "−2", "4"], a: 1,
    why: "Inside the bracket works inversely.", say: ["y equals f of two x is a horizontal stretch with what scale factor?"] }
]});

S2Data.video("2e", { scenes: [
  { type: "title", title: "The factor theorem", sub: "Finding factors of polynomials.", mark: "f(a)",
    say: ["The factor theorem turns finding factors into a quick substitution."] },
  { type: "big", text: "f(a) = 0 ⇔ (x − a) is a factor", sub: "Try ±1, ±2… (factors of the constant)",
    say: ["If substituting a gives zero, then x minus a is a factor, and the reverse is true too.", "Try small values that divide the constant term first."] },
  { type: "calc", title: "Factorising a cubic", q: "f(x) = x³ − 2x² − 5x + 6",
    lines: ["f(1) = 1 − 2 − 5 + 6 = 0 → (x − 1) is a factor", "Divide: (x − 1)(x² − x − 6)", "= (x − 1)(x − 3)(x + 2)"],
    say: ["Try x equals one: it gives zero, so x minus one is a factor.", "Divide by x minus one, using long division or comparing coefficients.", "Factorise the quadratic to finish."] },
  { type: "quiz", q: "(x + 2) is a factor of x³ + px² − 4. p = ?", o: ["1", "2", "3", "−3"], a: 2,
    why: "f(−2) = −8 + 4p − 4 = 0.", say: ["x plus two is a factor of x cubed plus p x squared minus four. What's p?"] }
]});

S2Data.video("2f", { scenes: [
  { type: "title", title: "Functions", sub: "Year 13: composite, inverse and modulus.", mark: "f⁻¹",
    say: ["Functions take an input and produce one output. We can combine them and reverse them."] },
  { type: "points", title: "Key ideas", items: ["fg(x) = f(g(x)): g first", "f⁻¹ exists only if f is one-to-one", "Domain of f⁻¹ = range of f"],
    say: ["In a composite function f g of x, apply g first, then f.", "A function only has an inverse if it's one-to-one. You might need to restrict its domain.", "The domain of the inverse is the range of the original, and vice versa."] },
  { type: "calc", title: "Finding an inverse", q: "f(x) = (2x + 1)/(x − 3)",
    lines: ["y = (2x + 1)/(x − 3) → swap: x(y − 3) = 2y + 1", "xy − 2y = 3x + 1", "f⁻¹(x) = (3x + 1)/(x − 2)"],
    say: ["Write y equals the function and swap x and y.", "Collect the y terms on one side.", "Factorise y out and divide."] },
  { type: "quiz", q: "Solve |2x − 1| = 5.", o: ["x = 3", "x = 3 or −2", "x = −2", "x = 2 or −3"], a: 1,
    why: "2x − 1 = ±5.", say: ["Solve the modulus equation: the modulus of two x minus one equals five."] }
]});

S2Data.video("2g", { scenes: [
  { type: "title", title: "Partial fractions", sub: "Year 13: splitting a fraction into simpler pieces.", mark: "A/B",
    say: ["Partial fractions split one complicated fraction into simple ones you can integrate or expand."] },
  { type: "calc", title: "Linear factors", q: "(5x + 1)/((x − 1)(x + 2)) ≡ A/(x − 1) + B/(x + 2)",
    lines: ["5x + 1 ≡ A(x + 2) + B(x − 1)", "x = 1: 6 = 3A → A = 2", "x = −2: −9 = −3B → B = 3"],
    say: ["Multiply through by the denominator.", "Substitute x equals one to make the B term vanish: A is two.", "Substitute x equals minus two: B is three."] },
  { type: "points", title: "Other cases", items: ["Repeated (x − a)²: A/(x − a) + B/(x − a)²", "Improper: divide first", "Compare coefficients for the last constant"],
    say: ["A repeated factor needs two terms: one over x minus a, and one over x minus a squared.", "If the top's degree is at least the bottom's, divide first.", "When substitution can't find every constant, compare coefficients."] },
  { type: "quiz", q: "1/((x + 1)(x + 3)) = A/(x + 1) + B/(x + 3). A = ?", o: ["1", "½", "−½", "2"], a: 1,
    why: "x = −1: 1 = 2A.", say: ["What's A in this partial fraction split?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Lines and circles", sub: "Coordinate geometry.", mark: "○",
    say: ["Coordinate geometry describes lines and circles with equations."] },
  { type: "compare", title: "Lines", h: ["Formula"],
    rows: [["Through (x₁, y₁)", "y − y₁ = m(x − x₁)"], ["Parallel", "Same gradient"], ["Perpendicular", "m₁m₂ = −1"]],
    say: ["The quickest equation of a line uses one point and the gradient.", "Parallel lines share a gradient.", "Perpendicular gradients multiply to minus one."] },
  { type: "calc", title: "Circle from expanded form", q: "x² + y² − 6x + 4y − 12 = 0",
    lines: ["(x − 3)² − 9 + (y + 2)² − 4 − 12 = 0", "(x − 3)² + (y + 2)² = 25", "Centre (3, −2), radius 5"],
    say: ["Complete the square in x and in y.", "Collect the constants on the right.", "Read off the centre and radius. Watch the signs: plus two in the bracket means y is minus two."] },
  { type: "points", title: "Circle facts", items: ["Tangent ⟂ radius", "Perpendicular bisector of a chord → centre", "Angle in a semicircle = 90°"],
    say: ["A tangent is perpendicular to the radius at that point.", "The perpendicular bisector of any chord passes through the centre.", "And the angle in a semicircle is a right angle."] },
  { type: "quiz", q: "Centre of (x + 1)² + (y − 4)² = 9?", o: ["(1, −4)", "(−1, 4)", "(−1, −4)", "(1, 4)"], a: 1,
    why: "Change the signs inside the brackets.", say: ["What's the centre of this circle?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Parametric equations", sub: "Year 13: curves driven by a parameter.", mark: "t",
    say: ["Parametric equations give x and y separately in terms of a parameter, often time."] },
  { type: "calc", title: "Algebraic conversion", q: "x = 2t + 1, y = t²",
    lines: ["t = (x − 1)/2", "y = ((x − 1)/2)²", "y = (x − 1)²/4"],
    say: ["Make t the subject of one equation.", "Substitute into the other.", "Simplify to get the Cartesian equation."] },
  { type: "calc", title: "Trig conversion", q: "x = 3cos t, y = 3sin t",
    lines: ["cos t = x/3, sin t = y/3", "cos²t + sin²t = 1", "x² + y² = 9: circle radius 3"],
    say: ["Make cos t and sin t the subjects.", "Use the identity cos squared plus sin squared equals one.", "It's a circle of radius three. Its domain is minus three to three, from the range of x."] },
  { type: "quiz", q: "x = t², y = 2t. Cartesian?", o: ["y = 2x", "y² = 4x", "x² = 4y", "y = x²"], a: 1,
    why: "t = y/2 → x = y²/4.", say: ["Convert x equals t squared, y equals two t into Cartesian form."] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "Binomial expansion", sub: "Expanding (a + b)ⁿ quickly.", mark: "ⁿCᵣ",
    say: ["The binomial theorem expands brackets raised to a power without multiplying out by hand."] },
  { type: "equation", title: "General term", rows: [["ⁿCᵣ", "aⁿ⁻ʳ", "bʳ"]],
    note: "ⁿCᵣ = n!/(r!(n − r)!) — or read from Pascal's triangle", noteStep: 1,
    say: ["Each term is n choose r, times a to the n minus r, times b to the r.", "The coefficients n choose r come from the formula or from Pascal's triangle."] },
  { type: "calc", title: "Finding a coefficient", q: "Coefficient of x³ in (2 + 3x)⁵",
    lines: ["r = 3: ⁵C₃ × 2² × (3x)³", "= 10 × 4 × 27x³", "Coefficient = 1080"],
    say: ["The x cubed term has r equals three.", "Remember to cube the whole of three x, not just x.", "So the coefficient is one thousand and eighty."] },
  { type: "points", title: "Year 13: any rational n", items: ["(1 + x)ⁿ = 1 + nx + n(n − 1)x²/2! + …", "Infinite series, valid for |x| < 1", "(a + bx)ⁿ: take out aⁿ first"],
    say: ["The same formula works for negative and fractional powers.", "But then the series never ends, and it's only valid when the modulus of x is less than one.", "For a plus b x, take out a to the n first so the bracket starts with one."] },
  { type: "quiz", q: "Y13: (1 − 2x)^(1/2) is valid for…", o: ["|x| < 1", "|x| < ½", "|x| < 2", "All x"], a: 1,
    why: "|−2x| < 1.", say: ["When is the expansion of one minus two x to the power one half valid?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Sequences and series", sub: "Year 13: arithmetic and geometric.", mark: "Σ",
    say: ["Arithmetic sequences add a constant each time. Geometric ones multiply. Each has formulas for the nth term and the sum."] },
  { type: "compare", title: "Formulas", h: ["Arithmetic", "Geometric"],
    rows: [["nth term", "a + (n − 1)d", "arⁿ⁻¹"], ["Sum of n", "n/2[2a + (n − 1)d]", "a(1 − rⁿ)/(1 − r)"], ["Sum to infinity", "Doesn't exist", "a/(1 − r), |r| < 1"]],
    say: ["The nth term of an arithmetic sequence is a plus n minus one d. A geometric one is a r to the n minus one.", "Each has a sum formula.", "Only a geometric series with modulus r less than one has a sum to infinity."] },
  { type: "calc", title: "Sum to infinity", q: "8 + 4 + 2 + 1 + …",
    lines: ["a = 8, r = ½", "S∞ = 8 / (1 − ½)", "= 16"],
    say: ["The first term is eight and each term halves.", "Since r is between minus one and one, the series converges.", "It adds up to sixteen."] },
  { type: "quiz", q: "1 + 2 + 3 + … + 100 = ?", o: ["5000", "5050", "10 100", "4950"], a: 1,
    why: "100/2 × 101.", say: ["What's the sum of the integers from one to a hundred?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Trigonometry", sub: "Identities and equations.", mark: "sin",
    say: ["Two identities and the shapes of the trig graphs let you solve almost any trig equation."] },
  { type: "big", text: "tan θ ≡ sin θ / cos θ   ·   sin²θ + cos²θ ≡ 1", sub: "Use them to get one trig function in the equation",
    say: ["The two key identities: tan is sine over cos, and sine squared plus cos squared is one.", "Use them to rewrite an equation in terms of a single trig function."] },
  { type: "calc", title: "Solving an equation", q: "2sin²x + 3cos x − 3 = 0, 0 ≤ x < 360°",
    lines: ["2(1 − cos²x) + 3cos x − 3 = 0", "2cos²x − 3cos x + 1 = 0 → (2cos x − 1)(cos x − 1) = 0", "x = 0°, 60°, 300°"],
    say: ["Replace sine squared with one minus cos squared.", "Rearrange into a quadratic in cos x and factorise.", "cos x is a half or one, giving nought, sixty and three hundred degrees."] },
  { type: "points", title: "Don't lose solutions", items: ["Sketch the graph over the interval", "sin kx: widen the interval by k first", "Never divide by sin x or cos x"],
    say: ["Sketch the graph to find every solution in the interval.", "For sine of k x, solve over k times the interval, then divide by k.", "And never divide by sine or cos: factorise instead, or you'll lose solutions."] },
  { type: "quiz", q: "Solve sin x = ½, 0 ≤ x < 360°.", o: ["30°, 330°", "30°, 150°", "60°, 120°", "30° only"], a: 1,
    why: "sin(180° − θ) = sin θ.", say: ["Solve sine x equals a half between nought and three hundred and sixty degrees."] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Radians", sub: "Year 13: arcs, sectors and small angles.", mark: "rad",
    say: ["Radians are the natural way to measure angles in calculus. π radians is a hundred and eighty degrees."] },
  { type: "compare", title: "Sector formulas (θ in radians)", h: ["Formula"],
    rows: [["Arc length", "s = rθ"], ["Sector area", "A = ½r²θ"], ["Segment area", "½r²(θ − sin θ)"]],
    say: ["Arc length is r theta.", "Sector area is a half r squared theta.", "A segment is the sector minus the triangle."] },
  { type: "points", title: "Small angles", items: ["sin θ ≈ θ", "tan θ ≈ θ", "cos θ ≈ 1 − θ²/2"],
    say: ["For small angles in radians, sine theta is roughly theta.", "Tan theta is also roughly theta.", "And cos theta is roughly one minus theta squared over two."] },
  { type: "points", title: "Reciprocal functions", items: ["sec = 1/cos, cosec = 1/sin, cot = 1/tan", "1 + tan²θ ≡ sec²θ", "1 + cot²θ ≡ cosec²θ"],
    say: ["Secant, cosecant and cotangent are the reciprocals of cos, sine and tan.", "Divide the Pythagorean identity by cos squared to get one plus tan squared equals sec squared.", "Divide by sine squared for one plus cot squared equals cosec squared."] },
  { type: "quiz", q: "Arc length when r = 6, θ = π/3?", o: ["6π", "2π", "π", "12π"], a: 1,
    why: "s = rθ = 6 × π/3.", say: ["Find the arc length for radius six and angle pi over three."] }
]});

S2Data.video("5c", { scenes: [
  { type: "title", title: "Compound angles", sub: "Year 13: addition and double angle formulae.", mark: "2A",
    say: ["The addition formulae expand trig functions of sums. The double angle formulae follow from them."] },
  { type: "compare", title: "Key formulae", h: ["Formula"],
    rows: [["sin(A ± B)", "sin A cos B ± cos A sin B"], ["cos(A ± B)", "cos A cos B ∓ sin A sin B"], ["sin 2A", "2 sin A cos A"], ["cos 2A", "2cos²A − 1 = 1 − 2sin²A"]],
    say: ["Sine of a sum is sine cos plus cos sine.", "Cos of a sum is cos cos minus sine sine. Note the sign flips.", "Set B equal to A to get sine two A equals two sine A cos A.", "Cos two A has three forms, which are handy for replacing squares."] },
  { type: "calc", title: "Harmonic form", q: "3 sin x + 4 cos x = R sin(x + α)",
    lines: ["R cos α = 3, R sin α = 4", "R = √(9 + 16) = 5, tan α = 4/3 → α = 53.1°", "Max 5, when x = 36.9°"],
    say: ["Expand R sine x plus alpha and compare coefficients.", "Square and add for R, divide for tan alpha.", "The maximum is R, five, when x plus alpha is ninety degrees."] },
  { type: "quiz", q: "cos(A + B) = ?", o: ["cos A cos B + sin A sin B", "cos A cos B − sin A sin B", "sin A cos B + cos A sin B", "cos A + cos B"], a: 1,
    why: "The sign flips for cos.", say: ["Which is the expansion of cos A plus B?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Exponentials and logarithms", sub: "eˣ, ln x and modelling.", mark: "ln",
    say: ["Exponentials model growth and decay. Logarithms undo them."] },
  { type: "compare", title: "Log laws", h: ["Law"],
    rows: [["log a + log b", "log ab"], ["log a − log b", "log(a/b)"], ["k log a", "log aᵏ"]],
    say: ["Adding logs multiplies the numbers inside.", "Subtracting logs divides them.", "A multiple of a log becomes a power inside."] },
  { type: "calc", title: "Solving", q: "3ˣ = 20",
    lines: ["Take logs: x ln 3 = ln 20", "x = ln 20 / ln 3", "x = 2.73"],
    say: ["Take natural logs of both sides; the power comes down.", "Divide.", "x is about two point seven three."] },
  { type: "points", title: "Linearising data", items: ["y = axⁿ → log y vs log x: gradient n", "y = abˣ → log y vs x: gradient log b", "Intercept gives log a"],
    say: ["If y equals a x to the n, plot log y against log x to get a straight line of gradient n.", "If y equals a b to the x, plot log y against x: the gradient is log b.", "In both cases the intercept is log a."] },
  { type: "quiz", q: "log a + log b = ?", o: ["log(a + b)", "log ab", "log a log b", "log(a/b)"], a: 1,
    why: "Adding logs multiplies.", say: ["What's log a plus log b?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "Differentiation", sub: "Gradients, tangents and stationary points.", mark: "d/dx",
    say: ["Differentiation finds the gradient of a curve at any point."] },
  { type: "equation", title: "First principles", rows: [["f′(x) =", "lim (h → 0)", "[f(x + h) − f(x)] / h"]],
    note: "Leads to d/dx(axⁿ) = naxⁿ⁻¹", noteStep: 1,
    say: ["From first principles, the gradient is the limit of the gradient of a chord as the gap h shrinks to zero.", "This gives the rule: multiply by the power, and reduce the power by one."] },
  { type: "graph", title: "Stationary points", x: "x", y: "y",
    lines: [{ pts: [[0.05, 0.15], [0.3, 0.8], [0.6, 0.3], [0.95, 0.9]] }],
    marks: [{ x: 0.3, y: 0.8, t: "max: f″ < 0", s: 2, anchor: "middle", dy: -16 }, { x: 0.6, y: 0.3, t: "min: f″ > 0", s: 2, anchor: "middle", dy: 36 }],
    say: ["Here's a curve with two turning points.", "At each one the gradient is zero, so solve dy by dx equals zero.", "The second derivative tells you which is which: negative for a maximum, positive for a minimum."] },
  { type: "calc", title: "Optimisation", q: "Open box, square base x, volume 32: A = x² + 128/x",
    lines: ["dA/dx = 2x − 128/x² = 0", "x³ = 64 → x = 4", "A = 16 + 32 = 48 (min, as A″ > 0)"],
    say: ["Differentiate the surface area and set it to zero.", "Solve: x is four.", "Check it's a minimum with the second derivative. The minimum area is forty-eight."] },
  { type: "quiz", q: "Gradient of y = x³ − 3x at x = 2?", o: ["2", "9", "12", "6"], a: 1,
    why: "3x² − 3 = 9.", say: ["What's the gradient of x cubed minus three x when x is two?"] }
]});

S2Data.video("7b", { scenes: [
  { type: "title", title: "Further differentiation", sub: "Year 13: chain, product, quotient and more.", mark: "dy/du",
    say: ["Three rules let you differentiate almost any function."] },
  { type: "compare", title: "The rules", h: ["Rule"],
    rows: [["Chain", "dy/dx = dy/du × du/dx"], ["Product", "(uv)′ = u′v + uv′"], ["Quotient", "(u/v)′ = (u′v − uv′)/v²"]],
    say: ["The chain rule handles a function of a function.", "The product rule handles two functions multiplied together.", "The quotient rule handles one divided by another."] },
  { type: "calc", title: "Product rule", q: "y = x²e^(3x)",
    lines: ["u = x², v = e^(3x); u′ = 2x, v′ = 3e^(3x)", "dy/dx = 2xe^(3x) + 3x²e^(3x)", "= xe^(3x)(2 + 3x)"],
    say: ["Identify u and v and differentiate each.", "Apply u dash v plus u v dash.", "Factorise neatly."] },
  { type: "points", title: "Implicit and connected rates", items: ["d/dx(y²) = 2y dy/dx", "d/dx(xy) = y + x dy/dx", "dV/dt = dV/dr × dr/dt"],
    say: ["In implicit differentiation, every y term gets a dy by dx from the chain rule.", "A product like x y needs the product rule.", "Connected rates of change chain rates together through a common variable."] },
  { type: "quiz", q: "d/dx (sin 3x) = ?", o: ["cos 3x", "3cos 3x", "−3cos 3x", "3sin 3x"], a: 1,
    why: "Chain rule: × 3.", say: ["Differentiate sine three x."] }
]});

S2Data.video("8a", { scenes: [
  { type: "title", title: "Integration", sub: "Reversing differentiation and finding areas.", mark: "∫",
    say: ["Integration reverses differentiation, and definite integrals find areas."] },
  { type: "equation", title: "Integrating powers", rows: [["∫ xⁿ dx =", "xⁿ⁺¹ / (n + 1)", "+ c"]],
    note: "Add one to the power, divide by the new power · always + c", noteStep: 1,
    say: ["To integrate x to the n, raise the power by one and divide by the new power.", "Always add the constant of integration, because constants vanish when you differentiate."] },
  { type: "calc", title: "Definite integral", q: "∫₁³ (3x² − 2x) dx",
    lines: ["[x³ − x²]₁³", "(27 − 9) − (1 − 1)", "= 18"],
    say: ["Integrate each term and write it in square brackets with the limits.", "Substitute the top limit, then subtract the bottom.", "The answer is eighteen."] },
  { type: "points", title: "Areas", items: ["Area under a curve = ∫ y dx", "Below the axis → negative: split at roots", "Between curves: ∫ (upper − lower) dx"],
    say: ["The area between a curve and the x axis is the integral of y.", "Regions below the axis give negative integrals, so split at the roots and add the sizes.", "For the area between two curves, integrate the upper minus the lower."] },
  { type: "quiz", q: "∫ 6x² dx = ?", o: ["12x + c", "2x³ + c", "6x³ + c", "3x³ + c"], a: 1,
    why: "6x³/3.", say: ["Integrate six x squared."] }
]});

S2Data.video("8b", { scenes: [
  { type: "title", title: "Integration techniques", sub: "Year 13: substitution, parts and differential equations.", mark: "∫u dv",
    say: ["When integrals aren't simple powers, several techniques help."] },
  { type: "compare", title: "Standard integrals", h: ["Integral"],
    rows: [["e^(kx)", "(1/k)e^(kx)"], ["1/x", "ln|x|"], ["cos kx", "(1/k) sin kx"], ["f′(x)/f(x)", "ln|f(x)|"]],
    say: ["e to the k x integrates to one over k e to the k x.", "One over x integrates to ln of the modulus of x.", "cos k x integrates to one over k sine k x.", "If the top is the derivative of the bottom, you get ln of the bottom."] },
  { type: "calc", title: "By parts", q: "∫ xeˣ dx",
    lines: ["u = x, dv/dx = eˣ", "= xeˣ − ∫ eˣ dx", "= eˣ(x − 1) + c"],
    say: ["Choose u to be the part that gets simpler when differentiated: x.", "Apply u v minus the integral of v du by dx.", "Finish the integration."] },
  { type: "calc", title: "Separable differential equation", q: "dy/dx = ky",
    lines: ["∫ 1/y dy = ∫ k dx", "ln y = kx + c", "y = Ae^(kx)"],
    say: ["Separate the variables: y terms with dy, x terms with dx.", "Integrate both sides.", "Rearrange to get exponential growth or decay."] },
  { type: "quiz", q: "∫ 2x/(x² + 1) dx = ?", o: ["2 ln x + c", "ln(x² + 1) + c", "x² + c", "1/(x² + 1) + c"], a: 1,
    why: "Top is the derivative of the bottom.", say: ["Integrate two x over x squared plus one."] }
]});

S2Data.video("9a", { scenes: [
  { type: "title", title: "Numerical methods", sub: "Year 13: approximating roots and integrals.", mark: "≈",
    say: ["When equations can't be solved exactly, numerical methods get as close as we like."] },
  { type: "points", title: "Locating roots", items: ["Sign change on [a, b] → root (if f continuous)", "Fails with asymptotes", "Can miss two close roots"],
    say: ["If a continuous function changes sign between a and b, there's a root in between.", "But an asymptote can cause a sign change without a root.", "And two roots close together can give no sign change at all."] },
  { type: "calc", title: "Newton–Raphson", q: "f(x) = x² − 2, x₀ = 1",
    lines: ["xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ)", "x₁ = 1 − (−1)/2 = 1.5", "x₂ = 1.5 − 0.25/3 = 1.4167"],
    say: ["Newton–Raphson follows the tangent down to the x axis.", "From one, the first step gives one point five.", "The next gives one point four one six seven, already close to root two."] },
  { type: "equation", title: "Trapezium rule", rows: [["∫ y dx ≈", "(h/2)", "[y₀ + 2(y₁ + … + yₙ₋₁) + yₙ]"]],
    note: "Overestimates for convex curves, underestimates for concave", noteStep: 1,
    say: ["The trapezium rule splits the area into strips of width h.", "It overestimates for a convex curve and underestimates for a concave one. More strips improve it."] },
  { type: "quiz", q: "Newton–Raphson fails when…", o: ["f(xₙ) = 0", "f′(xₙ) = 0", "xₙ is negative", "f is quadratic"], a: 1,
    why: "Division by zero: horizontal tangent.", say: ["When does Newton–Raphson fail?"] }
]});

S2Data.video("10a", { scenes: [
  { type: "title", title: "Vectors", sub: "Magnitude, direction and geometry.", mark: "→",
    say: ["Vectors have size and direction. They're written with i and j, or as columns."] },
  { type: "compare", title: "Key results", h: ["Formula"],
    rows: [["Magnitude", "|xi + yj| = √(x² + y²)"], ["Unit vector", "a / |a|"], ["AB", "b − a"], ["Midpoint", "½(a + b)"]],
    say: ["The magnitude comes from Pythagoras.", "A unit vector is the vector divided by its magnitude.", "The vector from A to B is b minus a.", "The midpoint's position vector is half of a plus b."] },
  { type: "calc", title: "Example", q: "|3i + 4j| and its direction",
    lines: ["|v| = √(9 + 16) = 5", "tan θ = 4/3 → θ = 53.1° above i", "Unit vector: 0.6i + 0.8j"],
    say: ["The magnitude is five.", "The angle with i comes from tan.", "Dividing by five gives the unit vector."] },
  { type: "quiz", q: "OA = a, OB = b. AB = ?", o: ["a − b", "b − a", "a + b", "ab"], a: 1,
    why: "AO + OB = −a + b.", say: ["What's the vector from A to B?"] }
]});
