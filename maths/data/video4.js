/* Video explainers — Maths: Geometry, Probability, Statistics. */

S2Data.video("4a", { scenes: [
  { type: "title", title: "Angles and polygons", sub: "Angle facts, parallel lines and polygons.", mark: "∠",
    say: ["A handful of angle facts let you solve almost any angle problem. Always give a reason."] },
  { type: "compare", title: "Parallel lines", h: ["Rule", "Shape"],
    rows: [["Alternate", "Equal", "Z"], ["Corresponding", "Equal", "F"], ["Co-interior", "Add to 180°", "C"]],
    say: ["Alternate angles are equal. They form a Z shape.", "Corresponding angles are equal, in an F shape.", "Co-interior angles add to a hundred and eighty, in a C shape. Write the proper names in the exam, not the letters."] },
  { type: "calc", title: "Regular hexagon", q: "Find each interior angle",
    lines: ["Exterior angle = 360° ÷ 6 = 60°", "Interior = 180° − 60° = 120°", "Sum of interior = (6 − 2) × 180° = 720°"],
    say: ["Exterior angles of any polygon add to three hundred and sixty, so each one here is sixty degrees.", "Interior and exterior make a straight line, so each interior angle is a hundred and twenty.", "You can check: the interior angles add to n minus two times one eighty, which is seven hundred and twenty."] },
  { type: "big", text: "Bearings: clockwise from North, 3 figures", sub: "Back bearing = bearing ± 180°",
    say: ["Bearings are measured clockwise from north and always written with three figures, like nought four five.", "To go back the other way, add or subtract a hundred and eighty degrees."] },
  { type: "quiz", q: "A regular polygon has exterior angles of 24°. How many sides?", o: ["12", "15", "24", "10"], a: 1,
    why: "360 ÷ 24 = 15.", say: ["A regular polygon has exterior angles of twenty-four degrees. How many sides does it have?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Area and volume", sub: "Formulae for 2D and 3D shapes.", mark: "πr²",
    say: ["Area measures the space inside a flat shape. Volume measures the space inside a solid."] },
  { type: "compare", title: "Areas", h: ["Formula"],
    rows: [["Triangle", "½ × base × height"], ["Trapezium", "½(a + b)h"], ["Circle", "πr²"], ["Sector", "(θ/360) × πr²"]],
    say: ["A triangle is half base times perpendicular height.", "A trapezium is half the sum of the parallel sides, times the height.", "A circle is pi r squared.", "A sector is a fraction of a circle: theta over three sixty, times pi r squared."] },
  { type: "compare", title: "Volumes", h: ["Formula"],
    rows: [["Prism", "Cross-section × length"], ["Cylinder", "πr²h"], ["Cone / pyramid", "⅓ × base × height"], ["Sphere", "4/3 πr³"]],
    say: ["Any prism: area of the cross-section times its length.", "A cylinder is a circular prism: pi r squared h.", "Cones and pyramids are a third of the matching prism.", "A sphere is four thirds pi r cubed."] },
  { type: "calc", title: "Cylinder", q: "r = 3 cm, h = 10 cm",
    lines: ["V = π × 3² × 10", "= 90π", "≈ 283 cm³"],
    say: ["Substitute into pi r squared h.", "That's ninety pi exactly.", "Or about two hundred and eighty-three cubic centimetres."] },
  { type: "quiz", q: "Area of a trapezium with parallel sides 6 and 10, height 4?", o: ["32", "64", "40", "24"], a: 0,
    why: "½ × 16 × 4.", say: ["What's the area of a trapezium with parallel sides six and ten, and height four?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "Pythagoras and trigonometry", sub: "Right-angled triangles.", mark: "a²+b²",
    say: ["In right-angled triangles, Pythagoras links the sides, and trigonometry links sides and angles."] },
  { type: "calc", title: "Pythagoras' theorem", q: "Shorter sides 6 and 8. Hypotenuse?",
    lines: ["c² = 6² + 8²", "c² = 36 + 64 = 100", "c = 10"],
    say: ["The square of the hypotenuse equals the sum of the squares of the other two sides.", "Thirty-six plus sixty-four is a hundred.", "Square root: the hypotenuse is ten. To find a shorter side, subtract instead."] },
  { type: "compare", title: "SOHCAHTOA", h: ["Ratio"],
    rows: [["sin θ", "Opposite ÷ Hypotenuse"], ["cos θ", "Adjacent ÷ Hypotenuse"], ["tan θ", "Opposite ÷ Adjacent"]],
    say: ["Sine is opposite over hypotenuse.", "Cosine is adjacent over hypotenuse.", "Tangent is opposite over adjacent. Label the sides from the angle first."] },
  { type: "calc", title: "Finding a side", q: "Hypotenuse 12, angle 35°, find the opposite side x",
    lines: ["We have H, want O → sin", "sin 35° = x / 12", "x = 12 sin 35° = 6.88"],
    say: ["We know the hypotenuse and want the opposite, so use sine.", "Write the equation.", "Multiply by twelve: six point eight eight."] },
  { type: "quiz", q: "Exact value of cos 60°?", o: ["√3/2", "½", "1", "0"], a: 1,
    why: "cos 60° = ½.", say: ["What's the exact value of cos sixty degrees?"] }
]});

S2Data.video("4d", { scenes: [
  { type: "title", title: "Transformations and similarity", sub: "Moving, turning, flipping and resizing.", mark: "↻",
    say: ["There are four transformations, and each needs specific details to describe it fully."] },
  { type: "compare", title: "Describing transformations", h: ["You must give"],
    rows: [["Translation", "Column vector"], ["Reflection", "Mirror line"], ["Rotation", "Angle, direction, centre"], ["Enlargement", "Scale factor, centre"]],
    say: ["A translation needs a column vector.", "A reflection needs the equation of the mirror line.", "A rotation needs the angle, the direction and the centre.", "An enlargement needs the scale factor and the centre."] },
  { type: "points", title: "Congruent and similar", items: ["Congruent: same shape and size (SSS, SAS, ASA, RHS)", "Similar: same shape; sides in the same ratio", "Scale factor = new length ÷ old length"],
    say: ["Congruent shapes are identical. Four conditions prove triangles congruent: side side side, side angle side, angle side angle, and right angle hypotenuse side.", "Similar shapes have equal angles, and every side is multiplied by the same scale factor.", "Find it by dividing a new length by the matching old one."] },
  { type: "calc", title: "Higher: area and volume factors", q: "Similar cylinders, heights 4 cm and 12 cm. Small volume 50 cm³",
    lines: ["Length factor k = 3", "Volume factor k³ = 27", "Large volume = 50 × 27 = 1350 cm³"],
    say: ["The length scale factor is twelve divided by four: three.", "Volumes scale by k cubed: twenty-seven. Areas would scale by k squared.", "So the large cylinder holds one thousand three hundred and fifty cubic centimetres."] },
  { type: "quiz", q: "Which does NOT prove triangles congruent?", o: ["SSS", "SAS", "AAA", "RHS"], a: 2,
    why: "Equal angles only proves similarity.", say: ["Which of these is not a condition for congruent triangles?"] }
]});

S2Data.video("4e", { scenes: [
  { type: "title", title: "Constructions and loci", sub: "Compasses, rulers and regions.", mark: "⌒",
    say: ["With just compasses and a ruler, you can construct exact lines and angles."] },
  { type: "flow", title: "Perpendicular bisector", nodes: ["Compasses more<br>than half AB", "Arcs from A,<br>above and below", "Same arcs<br>from B", "Join the<br>crossings"],
    say: ["Open the compasses to more than half the length of the line.", "Draw arcs above and below the line from A.", "Without changing the width, draw arcs from B.", "Join the two points where the arcs cross. Every point on this line is the same distance from A and B."] },
  { type: "compare", title: "Loci", h: ["Shape"],
    rows: [["Fixed distance from a point", "Circle"], ["Equidistant from two points", "Perpendicular bisector"], ["Equidistant from two lines", "Angle bisector"], ["Fixed distance from a line", "Stadium shape"]],
    say: ["Points a fixed distance from a point make a circle.", "Points the same distance from two points lie on the perpendicular bisector.", "Points the same distance from two lines lie on the angle bisector.", "Points a fixed distance from a line segment make a stadium shape with rounded ends."] },
  { type: "quiz", q: "Map scale 1 : 50 000. 4 cm represents…", o: ["200 m", "2 km", "20 km", "4 km"], a: 1,
    why: "4 × 50 000 = 200 000 cm = 2 km.", say: ["On a map with scale one to fifty thousand, what does four centimetres represent?"] }
]});

S2Data.video("4f", { scenes: [
  { type: "title", title: "Circle theorems", sub: "Higher: eight rules about angles in circles.", mark: "○",
    say: ["Circle theorems describe angles in and around circles. Learn them with their exact wording."] },
  { type: "compare", title: "Angle theorems", h: ["Rule"],
    rows: [["Angle at centre", "Twice the angle at circumference"], ["Semicircle", "Angle = 90°"], ["Same segment", "Angles equal"], ["Cyclic quadrilateral", "Opposite angles add to 180°"]],
    say: ["The angle at the centre is twice the angle at the circumference, standing on the same arc.", "The angle in a semicircle is ninety degrees.", "Angles in the same segment are equal.", "Opposite angles of a cyclic quadrilateral add to a hundred and eighty."] },
  { type: "compare", title: "Tangent and chord theorems", h: ["Rule"],
    rows: [["Tangent and radius", "Meet at 90°"], ["Two tangents from a point", "Equal length"], ["Perpendicular to a chord", "Bisects it"], ["Alternate segment", "Tangent–chord angle = opposite segment angle"]],
    say: ["A tangent meets a radius at ninety degrees.", "Two tangents from the same point are equal in length.", "A perpendicular from the centre bisects a chord.", "And the alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment."] },
  { type: "calc", title: "Example", q: "Angle at circumference = 38°",
    lines: ["Angle at centre = 2 × 38°", "= 76°", "Reason: angle at centre is twice angle at circumference"],
    say: ["The angle at the centre stands on the same arc.", "So it's double: seventy-six degrees.", "Always write the reason in full."] },
  { type: "quiz", q: "Cyclic quadrilateral: one angle is 110°. The opposite angle is…", o: ["110°", "70°", "250°", "55°"], a: 1,
    why: "Opposite angles add to 180°.", say: ["In a cyclic quadrilateral one angle is a hundred and ten degrees. What's the opposite angle?"] }
]});

S2Data.video("4g", { scenes: [
  { type: "title", title: "Vectors", sub: "Direction and distance together.", mark: "→",
    say: ["A vector has both size and direction. They let us prove geometric facts with algebra."] },
  { type: "calc", title: "Column vectors", q: "a = (2, 1), b = (−1, 3)",
    lines: ["a + b = (1, 4)", "2a = (4, 2)", "2a − b = (5, −1)"],
    say: ["Add vectors by adding the top numbers and the bottom numbers.", "Multiply by a number by multiplying both parts.", "Two a minus b is five, minus one."] },
  { type: "big", text: "AB = AO + OB = −a + b", sub: "Follow any route from A to B",
    say: ["To find the vector from A to B, follow a route you know.", "Go back from A to the origin, that's minus a, then out to B, that's plus b."] },
  { type: "points", title: "Higher: proof", items: ["Parallel: one vector is a multiple of the other", "Collinear: parallel and sharing a point", "QR = 3PQ → P, Q, R in a line"],
    say: ["Two vectors are parallel if one is a multiple of the other.", "Three points are on a straight line if the vectors joining them are parallel and share a point.", "For example, if Q R is three times P Q, then P, Q and R are collinear."] },
  { type: "quiz", q: "Which is parallel to a + 2b?", o: ["a + 3b", "3a + 6b", "2a + b", "a − 2b"], a: 1,
    why: "3a + 6b = 3(a + 2b).", say: ["Which vector is parallel to a plus two b?"] }
]});

S2Data.video("4h", { scenes: [
  { type: "title", title: "Sine and cosine rules", sub: "Higher: trigonometry in any triangle.", mark: "sin A",
    say: ["SOHCAHTOA only works with right angles. For any triangle, use the sine and cosine rules."] },
  { type: "equation", title: "Sine rule", rows: [["a / sin A", "=", "b / sin B", "=", "c / sin C"]],
    note: "Use when you know a side and its opposite angle", noteStep: 1,
    say: ["Each side divided by the sine of its opposite angle gives the same value.", "Use it when you know a matching pair: a side and the angle opposite it."] },
  { type: "equation", title: "Cosine rule", rows: [["a² =", "b² + c²", "− 2bc cos A"]],
    note: "Two sides and the angle between them, or all three sides", noteStep: 1,
    say: ["a squared equals b squared plus c squared minus two b c cos A.", "Use it with two sides and the included angle, or rearrange it to find an angle from three sides."] },
  { type: "calc", title: "Area of any triangle", q: "Sides 6 and 8, included angle 30°",
    lines: ["Area = ½ab sin C", "= ½ × 6 × 8 × sin 30°", "= 12"],
    say: ["The area of any triangle is half a b sine C, where C is the angle between sides a and b.", "Substitute.", "Sine thirty is a half, so the area is twelve."] },
  { type: "quiz", q: "You know all three sides. To find an angle, use…", o: ["Sine rule", "Cosine rule", "Area formula", "Pythagoras"], a: 1,
    why: "Rearranged cosine rule.", say: ["You know all three sides of a triangle. Which rule finds an angle?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Probability", sub: "From 0 to 1.", mark: "P",
    say: ["Probability measures how likely something is, on a scale from nought to one."] },
  { type: "points", title: "Key ideas", items: ["P(event) = favourable ÷ total outcomes", "P(not A) = 1 − P(A)", "All outcomes add to 1"],
    say: ["For equally likely outcomes, probability is the number of ways it can happen divided by the total number of outcomes.", "The probability something doesn't happen is one minus the probability it does.", "The probabilities of all possible outcomes add up to one."] },
  { type: "compare", title: "Theory vs experiment", h: ["Found by"],
    rows: [["Theoretical", "Counting equally likely outcomes"], ["Relative frequency", "Frequency ÷ number of trials"], ["Expected number", "Probability × number of trials"]],
    say: ["Theoretical probability comes from counting outcomes.", "Experimental probability, or relative frequency, comes from doing trials. More trials give a better estimate.", "To predict how many times something will happen, multiply its probability by the number of trials."] },
  { type: "quiz", q: "P(6) = 1/6. Rolled 300 times, how many sixes expected?", o: ["6", "30", "50", "60"], a: 2,
    why: "300 × 1/6.", say: ["A fair dice is rolled three hundred times. How many sixes would you expect?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Combined events", sub: "Tree diagrams and Venn diagrams.", mark: "∩",
    say: ["When two things happen, tree and Venn diagrams help organise the probabilities."] },
  { type: "compare", title: "AND and OR", h: ["Rule"],
    rows: [["Independent: A and B", "P(A) × P(B)"], ["Mutually exclusive: A or B", "P(A) + P(B)"]],
    say: ["For independent events, multiply to find the probability of both.", "For mutually exclusive events, add to find the probability of either."] },
  { type: "calc", title: "Without replacement", q: "3 red, 2 blue. Pick two. P(both red)?",
    lines: ["First red: 3/5", "Second red: 2/4 (one red gone)", "3/5 × 2/4 = 6/20 = 3/10"],
    say: ["The first counter is red with probability three fifths.", "It isn't put back, so now there are two reds out of four.", "Multiply along the branches: three tenths."] },
  { type: "points", title: "Venn diagrams", items: ["A ∩ B: in both (the overlap)", "A ∪ B: in either or both", "Higher: P(A | B) = P(A ∩ B) ÷ P(B)"],
    say: ["The overlap, A intersect B, is everything in both sets.", "A union B is everything in either set.", "On Higher, conditional probability restricts you to set B: divide the overlap by the whole of B."] },
  { type: "quiz", q: "P(A) = 0.4, P(B) = 0.5, independent. P(A and B)?", o: ["0.9", "0.2", "0.1", "0.45"], a: 1,
    why: "0.4 × 0.5.", say: ["A and B are independent with probabilities nought point four and nought point five. What's the probability of both?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Averages and sampling", sub: "Mean, median, mode and range.", mark: "x̄",
    say: ["Averages summarise data with one number. The range shows how spread out it is."] },
  { type: "compare", title: "Averages and spread", h: ["How to find it"],
    rows: [["Mean", "Total ÷ number of values"], ["Median", "Middle value when ordered"], ["Mode", "Most common"], ["Range", "Largest − smallest"]],
    say: ["The mean adds everything up and shares it equally.", "The median is the middle value when the data's in order. It isn't affected by outliers.", "The mode is the most common value.", "The range is the biggest minus the smallest."] },
  { type: "calc", title: "Mean from a frequency table", q: "Goals 0, 1, 2 with frequencies 4, 5, 3",
    lines: ["Σfx = 0×4 + 1×5 + 2×3 = 11", "Σf = 12", "Mean = 11 ÷ 12 = 0.92"],
    say: ["Multiply each value by its frequency and add: eleven goals in total.", "Add the frequencies: twelve matches.", "Divide: a mean of nought point nine two goals per match. For grouped data, use midpoints."] },
  { type: "points", title: "Sampling", items: ["Random samples avoid bias", "Bigger samples are more reliable", "Higher: stratified samples match group proportions"],
    say: ["A good sample is chosen at random so every member has an equal chance.", "Larger samples give more reliable results.", "On Higher, a stratified sample takes from each group in proportion to its size."] },
  { type: "quiz", q: "Which average is best with an extreme outlier?", o: ["Mean", "Median", "Range", "Total"], a: 1,
    why: "The median isn't pulled by extreme values.", say: ["Which average is best when the data has an extreme outlier?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Scatter graphs and histograms", sub: "Correlation, cumulative frequency and histograms.", mark: "⋰",
    say: ["Graphs reveal patterns and spread in data. Let's look at scatter graphs, then the Higher charts."] },
  { type: "compare", title: "Correlation", h: ["Pattern"],
    rows: [["Positive", "Both increase together"], ["Negative", "One up, the other down"], ["None", "No pattern"]],
    say: ["Positive correlation: as one goes up, so does the other.", "Negative correlation: as one goes up, the other goes down.", "No correlation: no clear pattern. Remember, correlation doesn't prove one causes the other."] },
  { type: "points", title: "Higher: cumulative frequency", items: ["Plot running totals at upper class boundaries", "Median at n/2; quartiles at n/4 and 3n/4", "IQR = UQ − LQ"],
    say: ["Plot the running totals at the upper end of each class and join with a smooth curve.", "Read the median halfway up, and the quartiles a quarter and three quarters of the way up.", "The interquartile range is the upper quartile minus the lower quartile. It ignores extreme values."] },
  { type: "equation", title: "Higher: histograms", rows: [["frequency density", "=", "frequency ÷ class width"]],
    note: "Area of each bar = frequency", noteStep: 1,
    say: ["Histograms handle unequal class widths. The height of each bar is the frequency density: frequency divided by class width.", "So the area of each bar gives its frequency."] },
  { type: "quiz", q: "Higher: class 10 < x ≤ 30 has frequency 40. Frequency density?", o: ["4", "2", "0.5", "40"], a: 1,
    why: "40 ÷ 20.", say: ["A class from ten to thirty has frequency forty. What's the frequency density?"] }
]});
