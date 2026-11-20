/* Video explainers — Maths: Number, Algebra, Ratio. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Rounding and estimation", sub: "Decimal places, significant figures and bounds.", mark: "≈",
    say: ["Rounding makes numbers easier to work with. Let's get decimal places, significant figures and estimates right."] },
  { type: "compare", title: "Two ways to round", h: ["Count from", "Example"],
    rows: [["Decimal places", "The decimal point", "3.4762 → 3.48 (2 d.p.)"], ["Significant figures", "The first non-zero digit", "0.004862 → 0.0049 (2 s.f.)"]],
    say: ["For decimal places, count digits after the decimal point. Three point four seven six two to two decimal places is three point four eight.", "For significant figures, start counting at the first non-zero digit. Leading zeros don't count."] },
  { type: "calc", title: "Estimating", q: "Estimate (6.87 × 41.2) ÷ 0.48",
    lines: ["Round to 1 s.f.: (7 × 40) ÷ 0.5", "= 280 ÷ 0.5", "= 560"],
    say: ["Round every number to one significant figure: seven, forty and nought point five.", "Seven times forty is two hundred and eighty.", "Dividing by a half is the same as doubling, so the estimate is five hundred and sixty."] },
  { type: "big", text: "7.4 cm (1 d.p.) → 7.35 ≤ l < 7.45", sub: "Half a unit either side gives the error interval",
    say: ["If a length is seven point four to one decimal place, the true value could be anything that rounds to seven point four.", "That's from seven point three five up to, but not including, seven point four five."] },
  { type: "quiz", q: "Round 0.07063 to 3 significant figures.", o: ["0.0706", "0.071", "0.07063", "0.0707"], a: 0,
    why: "Start at the 7: 7, 0, 6, then the next digit 3 rounds down.", say: ["Round nought point nought seven nought six three to three significant figures."] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Factors, multiples and primes", sub: "Prime factors, HCF and LCM.", mark: "2³×3",
    say: ["Every whole number is built from primes. Once you know a number's prime factors, HCF and LCM are easy."] },
  { type: "flow", title: "Prime factor tree for 360", nodes: ["360", "2 × 180", "2 × 2 × 90", "2³ × 3² × 5"],
    say: ["Start with three hundred and sixty.", "Split off a prime: two times one hundred and eighty.", "Keep going: two times two times ninety, and so on, until every branch ends in a prime.", "Write it in index form: two cubed times three squared times five."] },
  { type: "compare", title: "60 and 84", h: ["Primes", "Rule"],
    rows: [["60", "2² × 3 × 5", ""], ["84", "2² × 3 × 7", ""], ["HCF = 12", "2² × 3", "Shared primes, lower powers"], ["LCM = 420", "2² × 3 × 5 × 7", "All primes, higher powers"]],
    say: ["Sixty is two squared times three times five.", "Eighty-four is two squared times three times seven.", "The highest common factor uses only the primes they share: two squared times three, which is twelve.", "The lowest common multiple uses every prime: two squared times three times five times seven, which is four hundred and twenty."] },
  { type: "quiz", q: "Buses every 12 and 18 minutes leave together. When next together?", o: ["6 min", "30 min", "36 min", "216 min"], a: 2,
    why: "LCM of 12 and 18 is 36.", say: ["Two buses leave every twelve and every eighteen minutes. They leave together now. When do they next leave together?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Fractions, decimals and percentages", sub: "Calculating and converting.", mark: "¾",
    say: ["Fractions, decimals and percentages are three ways of writing the same thing. Let's calculate with them."] },
  { type: "compare", title: "Fraction calculations", h: ["Method", "Example"],
    rows: [["Add/subtract", "Common denominator", "2/3 + 1/4 = 8/12 + 3/12 = 11/12"], ["Multiply", "Top × top, bottom × bottom", "2/3 × 3/5 = 6/15 = 2/5"], ["Divide", "Flip the second, multiply", "3/4 ÷ 1/2 = 3/4 × 2 = 3/2"]],
    say: ["To add or subtract, make the denominators the same first.", "To multiply, multiply the tops and multiply the bottoms, then simplify.", "To divide, flip the second fraction and multiply."] },
  { type: "flow", title: "Converting", nodes: ["3/8", "3 ÷ 8 = 0.375", "× 100 = 37.5%"],
    say: ["Start with three eighths.", "Divide the top by the bottom to get a decimal: nought point three seven five.", "Multiply by a hundred to get a percentage: thirty-seven point five percent."] },
  { type: "calc", title: "Higher: recurring decimal", q: "Write 0.272727… as a fraction",
    lines: ["x = 0.2727…", "100x = 27.2727…", "99x = 27 → x = 27/99 = 3/11"],
    say: ["Call the decimal x.", "The pattern repeats every two digits, so multiply by a hundred.", "Subtract to cancel the repeating part: ninety-nine x equals twenty-seven, so x is three elevenths."] },
  { type: "quiz", q: "5/6 ÷ 2/3 = ?", o: ["5/9", "5/4", "10/18", "4/5"], a: 1,
    why: "5/6 × 3/2 = 15/12 = 5/4.", say: ["What's five sixths divided by two thirds?"] }
]});

S2Data.video("1d", { scenes: [
  { type: "title", title: "Powers, standard form and surds", sub: "Index laws and very big and small numbers.", mark: "10ⁿ",
    say: ["Powers let us write repeated multiplication neatly. A few rules cover everything."] },
  { type: "compare", title: "Index laws", h: ["Rule", "Example"],
    rows: [["Multiply", "Add powers", "2³ × 2⁴ = 2⁷"], ["Divide", "Subtract powers", "5⁶ ÷ 5² = 5⁴"], ["Power of a power", "Multiply powers", "(3²)³ = 3⁶"], ["Negative / fractional", "Reciprocal / root", "2⁻³ = 1/8, 8^(2/3) = 4"]],
    say: ["When you multiply powers of the same number, add the indices.", "When you divide, subtract them.", "For a power of a power, multiply the indices.", "On Higher, a negative index means one over, and a fractional index means a root."] },
  { type: "calc", title: "Standard form", q: "(3 × 10⁴) × (4 × 10⁵)",
    lines: ["Multiply the numbers: 3 × 4 = 12", "Add the powers: 10⁴⁺⁵ = 10⁹", "12 × 10⁹ = 1.2 × 10¹⁰"],
    say: ["Multiply the front numbers: three times four is twelve.", "Add the powers of ten: four plus five is nine.", "Twelve isn't between one and ten, so adjust: one point two times ten to the ten."] },
  { type: "points", title: "Higher: surds", items: ["√48 = √16 × √3 = 4√3", "2√3 + 5√3 = 7√3", "6/√3 = 6√3/3 = 2√3"],
    say: ["Simplify a surd by finding a square factor. Root forty-eight is root sixteen times root three, which is four root three.", "Like surds collect like algebra: two root three plus five root three is seven root three.", "To rationalise a denominator, multiply top and bottom by the surd."] },
  { type: "quiz", q: "Higher: 27^(2/3) = ?", o: ["9", "18", "3", "729"], a: 0,
    why: "Cube root of 27 is 3; 3² = 9.", say: ["Higher question: what's twenty-seven to the power two thirds?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Expanding and factorising", sub: "Brackets in, brackets out.", mark: "( )",
    say: ["Expanding removes brackets. Factorising puts them back. They're opposites."] },
  { type: "calc", title: "Expanding double brackets", q: "(x + 3)(x − 5)",
    lines: ["x × x = x², x × −5 = −5x", "3 × x = 3x, 3 × −5 = −15", "x² − 2x − 15"],
    say: ["Multiply every term in the first bracket by every term in the second. x times x is x squared, and x times minus five is minus five x.", "Three times x is three x, and three times minus five is minus fifteen.", "Collect the x terms: x squared minus two x minus fifteen."] },
  { type: "compare", title: "Factorising", h: ["Example"],
    rows: [["Common factor", "6x² + 9x = 3x(2x + 3)"], ["Quadratic", "x² + 7x + 12 = (x + 3)(x + 4)"], ["Difference of two squares", "x² − 49 = (x + 7)(x − 7)"]],
    say: ["First look for a common factor and take it outside the bracket.", "For a quadratic, find two numbers that multiply to the constant and add to the x coefficient. Three and four multiply to twelve and add to seven.", "A squared minus a squared factorises as a sum times a difference."] },
  { type: "quiz", q: "Factorise x² − x − 12.", o: ["(x − 4)(x + 3)", "(x + 4)(x − 3)", "(x − 6)(x + 2)", "(x − 12)(x + 1)"], a: 0,
    why: "−4 × 3 = −12 and −4 + 3 = −1.", say: ["Factorise x squared minus x minus twelve."] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Equations and inequalities", sub: "Balancing, and when to flip the sign.", mark: "=",
    say: ["Solving an equation is like balancing scales: whatever you do to one side, do to the other."] },
  { type: "calc", title: "Solving a linear equation", q: "5(x − 2) = 3x + 6",
    lines: ["Expand: 5x − 10 = 3x + 6", "Subtract 3x and add 10: 2x = 16", "x = 8"],
    say: ["First expand the bracket.", "Get the x terms on one side and the numbers on the other.", "Divide by two: x equals eight."] },
  { type: "big", text: "× or ÷ by a negative → flip the sign", sub: "−2x > 6 → x < −3",
    say: ["Inequalities work like equations with one exception.", "If you multiply or divide by a negative number, you must reverse the inequality sign."] },
  { type: "calc", title: "Changing the subject", q: "Make t the subject of v = u + at",
    lines: ["Subtract u: v − u = at", "Divide by a: t = (v − u) / a"],
    say: ["Undo the operations around t in reverse order. First subtract u.", "Then divide by a."] },
  { type: "quiz", q: "Solve 7 − 2x ≥ 1.", o: ["x ≥ 3", "x ≤ 3", "x ≤ −3", "x ≥ −3"], a: 1,
    why: "−2x ≥ −6 → divide by −2 and flip: x ≤ 3.", say: ["Solve seven minus two x is greater than or equal to one."] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Sequences", sub: "Finding the nth term.", mark: "n",
    say: ["The nth term is a rule that gives any term in a sequence straight away."] },
  { type: "calc", title: "Linear sequences", q: "5, 8, 11, 14, …",
    lines: ["Common difference = 3 → 3n", "3n gives 3, 6, 9… ; we need 2 more", "nth term = 3n + 2"],
    say: ["The terms go up by three each time, so the rule starts three n.", "Three n gives three, six, nine. Each term in our sequence is two more.", "So the nth term is three n plus two."] },
  { type: "compare", title: "Special sequences", h: ["Starts"],
    rows: [["Square", "1, 4, 9, 16…"], ["Cube", "1, 8, 27, 64…"], ["Triangular", "1, 3, 6, 10…"], ["Fibonacci", "1, 1, 2, 3, 5…"]],
    say: ["Square numbers: one, four, nine, sixteen.", "Cube numbers: one, eight, twenty-seven.", "Triangular numbers go up by one more each time.", "In a Fibonacci sequence, each term is the sum of the previous two."] },
  { type: "calc", title: "Higher: quadratic sequence", q: "4, 9, 16, 25, …",
    lines: ["Second difference = 2 → n²", "Subtract n²: 3, 5, 7, 9 = 2n + 1", "nth term = n² + 2n + 1"],
    say: ["The first differences are five, seven, nine. The second difference is two, so the n squared coefficient is half of that: one.", "Take n squared away from each term to leave three, five, seven, nine, which is two n plus one.", "Put it together: n squared plus two n plus one."] },
  { type: "quiz", q: "Is 100 in the sequence 3n + 2?", o: ["Yes", "No"], a: 1,
    why: "3n + 2 = 100 gives n = 32.67, not a whole number.", say: ["Is one hundred a term in the sequence three n plus two?"] }
]});

S2Data.video("2d", { scenes: [
  { type: "title", title: "Straight-line graphs", sub: "y = mx + c.", mark: "m",
    say: ["Every straight line can be written as y equals m x plus c. Let's see what m and c mean."] },
  { type: "graph", title: "y = mx + c", x: "x", y: "y",
    lines: [{ pts: [[0, 0.25], [1, 0.85]], straight: true }],
    marks: [{ x: 0, y: 0.25, t: "c = y-intercept", s: 2, anchor: "start", dx: 14, dy: 6 }, { x: 0.6, y: 0.61, t: "m = rise ÷ run", s: 2, anchor: "start", dx: 14, dy: 22 }],
    say: ["Draw the axes.", "Here's a straight line.", "c is where it crosses the y axis. m is the gradient: how far it rises for every one across."] },
  { type: "calc", title: "Line through two points", q: "Through (1, 4) and (3, 10)",
    lines: ["m = (10 − 4) ÷ (3 − 1) = 3", "4 = 3 × 1 + c → c = 1", "y = 3x + 1"],
    say: ["Gradient is change in y over change in x: six over two, which is three.", "Substitute one point to find c: four equals three plus c, so c is one.", "The equation is y equals three x plus one."] },
  { type: "points", title: "Parallel and perpendicular", items: ["Parallel: same gradient", "Higher: perpendicular gradients multiply to −1", "y = 2x + 5 ⟂ gradient −½"],
    say: ["Parallel lines have the same gradient.", "On Higher, perpendicular lines have gradients that multiply to minus one.", "So a line perpendicular to y equals two x plus five has gradient minus a half."] },
  { type: "quiz", q: "Gradient of 2y − 6x = 8?", o: ["6", "3", "−6", "4"], a: 1,
    why: "y = 3x + 4.", say: ["What's the gradient of two y minus six x equals eight?"] }
]});

S2Data.video("2e", { scenes: [
  { type: "title", title: "Quadratic equations", sub: "Factorising, the formula and completing the square.", mark: "x²",
    say: ["A quadratic equation usually has two solutions. Here are three ways to find them."] },
  { type: "calc", title: "By factorising", q: "x² − x − 12 = 0",
    lines: ["(x − 4)(x + 3) = 0", "x − 4 = 0 or x + 3 = 0", "x = 4 or x = −3"],
    say: ["Factorise: two numbers multiplying to minus twelve and adding to minus one are minus four and three.", "If two things multiply to zero, one of them must be zero.", "So x is four or minus three."] },
  { type: "graph", title: "The graph y = x² − x − 12", x: "x", y: "y",
    lines: [{ pts: [[0, 0.3], [1, 0.3]], straight: true }, { pts: [[0.05, 0.79], [0.25, 0.3], [0.5, 0.08], [0.75, 0.3], [0.95, 0.79]] }],
    marks: [{ x: 0.25, y: 0.3, t: "x = −3", s: 2, anchor: "end", dx: -10, dy: 26 }, { x: 0.75, y: 0.3, t: "x = 4", s: 2, anchor: "start", dx: 10, dy: 26 }, { x: 1, y: 0.3, t: "y = 0", s: 1, anchor: "end", dy: -12 }],
    say: ["Here are the axes.", "The graph is a U-shaped parabola. The flat line is the x axis, where y equals zero.", "The solutions are the roots: where the curve crosses the x axis."] },
  { type: "equation", title: "Higher: the quadratic formula", rows: [["x =", "[−b ± √(b² − 4ac)]", "÷ 2a"]],
    note: "Use when it won't factorise · b² − 4ac tells you how many roots", noteStep: 1,
    say: ["When a quadratic won't factorise, use the formula: minus b, plus or minus the square root of b squared minus four a c, all over two a.", "The part under the square root, the discriminant, tells you how many roots there are."] },
  { type: "calc", title: "Higher: completing the square", q: "x² + 6x + 2",
    lines: ["Halve 6 → (x + 3)² − 9 + 2", "= (x + 3)² − 7", "Turning point (−3, −7)"],
    say: ["Halve the x coefficient to get the bracket, x plus three squared, then subtract three squared to balance.", "Tidy up: x plus three squared minus seven.", "This gives the turning point straight away: minus three, minus seven."] },
  { type: "quiz", q: "Solve x² + 5x = 0.", o: ["x = 5", "x = 0 or −5", "x = −5", "x = 0 or 5"], a: 1,
    why: "x(x + 5) = 0.", say: ["Solve x squared plus five x equals zero."] }
]});

S2Data.video("2f", { scenes: [
  { type: "title", title: "Simultaneous equations", sub: "Two equations, two unknowns.", mark: "x,y",
    say: ["When two equations share two unknowns, we can solve them together."] },
  { type: "calc", title: "Elimination", q: "3x + 2y = 16 and x − 2y = 0",
    lines: ["Add (the y terms cancel): 4x = 16", "x = 4", "4 − 2y = 0 → y = 2"],
    say: ["The y terms are plus two y and minus two y, so adding the equations cancels them: four x equals sixteen.", "So x is four.", "Substitute back into either equation to find y equals two. Then check in the other equation."] },
  { type: "graph", title: "Graphically", x: "x", y: "y",
    lines: [{ pts: [[0, 0.85], [1, 0.15]], straight: true }, { pts: [[0, 0.1], [1, 0.8]], straight: true }],
    marks: [{ x: 0.535, y: 0.475, t: "solution", s: 2, anchor: "middle", dy: -26 }],
    say: ["Draw both lines.", "Each line shows every point that fits one equation.", "The point where they cross fits both, so it's the solution."] },
  { type: "calc", title: "Higher: linear and quadratic", q: "y = x + 1 and x² + y² = 13",
    lines: ["x² + (x + 1)² = 13", "2x² + 2x − 12 = 0 → (x + 3)(x − 2) = 0", "(2, 3) and (−3, −2)"],
    say: ["Substitute the linear equation into the quadratic.", "Expand and simplify, then factorise.", "x is two or minus three, giving two points where the line crosses the circle."] },
  { type: "quiz", q: "Solve x + y = 10 and x − y = 4.", o: ["x = 7, y = 3", "x = 3, y = 7", "x = 6, y = 4", "x = 5, y = 5"], a: 0,
    why: "Add: 2x = 14.", say: ["Solve x plus y equals ten and x minus y equals four."] }
]});

S2Data.video("2g", { scenes: [
  { type: "title", title: "Graphs of functions", sub: "Recognising shapes and transforming graphs.", mark: "f(x)",
    say: ["Different equations give different shapes of graph. Knowing them saves time."] },
  { type: "compare", title: "Graph shapes", h: ["Example", "Shape"],
    rows: [["Quadratic", "y = x²", "U-shaped parabola"], ["Cubic", "y = x³", "S-shaped"], ["Reciprocal", "y = 1/x", "Two curves, asymptotes"], ["Exponential", "y = 2ˣ", "Through (0, 1), rapid growth"]],
    say: ["Quadratics give U shapes, or upside-down U shapes if the x squared term is negative.", "Cubics give an S-shaped curve.", "Reciprocal graphs have two separate curves that never touch the axes.", "Exponential graphs pass through nought, one and grow faster and faster."] },
  { type: "compare", title: "Higher: transformations", h: ["Effect"],
    rows: [["f(x) + a", "Up a"], ["f(x + a)", "Left a"], ["−f(x)", "Reflect in x-axis"], ["f(−x)", "Reflect in y-axis"]],
    say: ["Adding outside the function moves the graph up.", "Adding inside the bracket moves it left, the opposite of what you might expect.", "A minus outside reflects it in the x axis.", "A minus inside reflects it in the y axis."] },
  { type: "quiz", q: "Higher: y = f(x − 3) is a translation…", o: ["3 left", "3 right", "3 up", "3 down"], a: 1,
    why: "Inside the bracket works the opposite way.", say: ["Higher question: how does y equals f of x minus three move the graph?"] }
]});

S2Data.video("2h", { scenes: [
  { type: "title", title: "Functions and proof", sub: "Higher: composite and inverse functions, and algebraic proof.", mark: "f⁻¹",
    say: ["Functions are machines that take an input and give an output. On Higher you'll combine and reverse them."] },
  { type: "flow", title: "Composite function fg(x)", nodes: ["x", "g: square it", "f: × 3, − 2", "3x² − 2"],
    say: ["Start with x.", "In f g of x, g is applied first. Here g squares it.", "Then f multiplies by three and subtracts two.", "So f g of x is three x squared minus two."] },
  { type: "calc", title: "Inverse function", q: "f(x) = 3x − 2",
    lines: ["y = 3x − 2", "Swap: x = 3y − 2", "f⁻¹(x) = (x + 2) / 3"],
    say: ["Write the function as y equals three x minus two.", "Swap x and y.", "Rearrange to make y the subject: the inverse is x plus two, over three."] },
  { type: "calc", title: "Algebraic proof", q: "Sum of two consecutive odd numbers is a multiple of 4",
    lines: ["Odd numbers: 2n + 1 and 2n + 3", "Sum = 4n + 4", "= 4(n + 1), a multiple of 4"],
    say: ["Write consecutive odd numbers in general form: two n plus one and two n plus three.", "Add them: four n plus four.", "Factorise out four, and finish with a sentence: it's a multiple of four."] },
  { type: "quiz", q: "f(x) = x + 1, g(x) = 2x. fg(3) = ?", o: ["8", "7", "6", "9"], a: 1,
    why: "g(3) = 6, then f(6) = 7.", say: ["If f of x is x plus one and g of x is two x, what's f g of three?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Ratio and proportion", sub: "Sharing, scaling and proportion.", mark: "2:3",
    say: ["Ratios compare amounts. Proportion is about how quantities change together."] },
  { type: "calc", title: "Sharing in a ratio", q: "Share £60 in the ratio 2 : 3",
    lines: ["Total parts = 2 + 3 = 5", "One part = £60 ÷ 5 = £12", "£24 and £36"],
    say: ["Add the parts: five.", "Divide the total by five to find one part: twelve pounds.", "Multiply: two parts is twenty-four pounds, three parts is thirty-six."] },
  { type: "compare", title: "Direct vs inverse proportion", h: ["Formula", "Example"],
    rows: [["Direct", "y = kx", "Pens: double the pens, double the cost"], ["Inverse", "y = k/x", "Workers: double the workers, half the time"]],
    say: ["In direct proportion, quantities grow together. The graph is a straight line through the origin.", "In inverse proportion, as one doubles, the other halves. Their product stays the same."] },
  { type: "calc", title: "Higher: proportion with powers", q: "y ∝ x²; y = 12 when x = 2. Find y when x = 5",
    lines: ["y = kx² → 12 = 4k → k = 3", "y = 3 × 25", "y = 75"],
    say: ["Write the formula with a constant: y equals k x squared. Use the values given: k is three.", "Substitute x equals five.", "y is seventy-five."] },
  { type: "quiz", q: "4 workers take 6 days. How long for 3 workers?", o: ["4.5 days", "8 days", "7 days", "5 days"], a: 1,
    why: "24 worker-days ÷ 3.", say: ["Four workers take six days to finish a job. How long would three workers take?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Percentage change", sub: "Multipliers, reverse percentages and interest.", mark: "%",
    say: ["The quickest way to handle percentage change is with a multiplier."] },
  { type: "compare", title: "Multipliers", h: ["Multiplier"],
    rows: [["Increase by 15%", "× 1.15"], ["Decrease by 15%", "× 0.85"], ["Increase by 3%", "× 1.03"]],
    say: ["To increase by fifteen percent, multiply by one point one five.", "To decrease by fifteen percent, multiply by nought point eight five.", "To increase by three percent, multiply by one point nought three."] },
  { type: "calc", title: "Reverse percentage", q: "After a 20% rise, a price is £84. Original?",
    lines: ["Original × 1.2 = £84", "Original = 84 ÷ 1.2", "= £70"],
    say: ["The original price was multiplied by one point two.", "So divide to undo it.", "The original price was seventy pounds. Taking twenty percent off eighty-four would be wrong."] },
  { type: "calc", title: "Compound interest", q: "£500 at 4% for 3 years",
    lines: ["Multiplier 1.04 each year", "500 × 1.04³", "= £562.43"],
    say: ["Compound interest is added each year and then earns interest itself, so the multiplier is applied every year.", "Use the power for the number of years.", "That gives five hundred and sixty-two pounds forty-three."] },
  { type: "quiz", q: "A 10% rise then a 10% fall gives…", o: ["No change", "1% decrease", "1% increase", "20% change"], a: 1,
    why: "1.1 × 0.9 = 0.99.", say: ["A price rises by ten percent then falls by ten percent. What's the overall change?"] }
]});

S2Data.video("3c", { scenes: [
  { type: "title", title: "Compound measures", sub: "Speed, density and pressure.", mark: "km/h",
    say: ["A compound measure combines two quantities, like distance per hour. They all work the same way."] },
  { type: "compare", title: "Three formulae", h: ["Formula", "Units"],
    rows: [["Speed", "Distance ÷ time", "km/h, m/s"], ["Density", "Mass ÷ volume", "g/cm³"], ["Pressure", "Force ÷ area", "N/m²"]],
    say: ["Speed is distance divided by time.", "Density is mass divided by volume.", "Pressure is force divided by area. Rearrange as needed."] },
  { type: "calc", title: "Watch the time", q: "150 km in 2 hours 30 minutes",
    lines: ["30 min = 0.5 h, so time = 2.5 h", "Speed = 150 ÷ 2.5", "= 60 km/h"],
    say: ["Thirty minutes is half an hour, not nought point three. So the time is two point five hours.", "Divide distance by time.", "Sixty kilometres per hour."] },
  { type: "calc", title: "Converting speed", q: "72 km/h in m/s",
    lines: ["× 1000 → 72 000 m per hour", "÷ 3600 → 20 m/s"],
    say: ["Multiply by a thousand to change kilometres to metres.", "Divide by three thousand six hundred to change hours to seconds: twenty metres per second."] },
  { type: "quiz", q: "Mass of 40 cm³ of metal with density 8 g/cm³?", o: ["5 g", "320 g", "48 g", "0.2 g"], a: 1,
    why: "Mass = density × volume.", say: ["A metal has density eight grams per centimetre cubed. What's the mass of forty centimetres cubed?"] }
]});
