/* Maths² — Geometry and measures */

S2Data.add({
  id: "4a", group: 4, title: "Angles and polygons",
  summary: "Angle facts, parallel lines, angles in polygons and bearings.",
  notes: `
<h3>Angle facts</h3>
<ul>
<li>Angles on a straight line add to 180°; around a point 360°.</li>
<li>Vertically opposite angles are equal.</li>
<li>Angles in a triangle add to 180°; in a quadrilateral 360°.</li>
<li>Isosceles triangle: two equal sides and two equal base angles.</li>
</ul>
<h3>Parallel lines</h3>
<p><b>Alternate</b> angles are equal (Z shape). <b>Corresponding</b> angles are equal (F shape). <b>Co-interior</b> angles add to 180° (C shape). Always give the reason in words.</p>
<h3>Polygons</h3>
<ul>
<li>Sum of interior angles = (n − 2) × 180°.</li>
<li>Exterior angles of any polygon add to 360°. For a regular polygon, each exterior angle = 360° ÷ n.</li>
<li>Interior + exterior = 180°.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Regular hexagon: exterior = 360 ÷ 6 = 60°, interior = 120°. Sum of interior angles = 4 × 180 = 720°.</div>
<h3>Bearings</h3>
<p>Measured clockwise from North, written with three figures (e.g. 045°). Back bearing = bearing ± 180°.</p>
`,
  quiz: [
    { q: "Angles in a triangle add to…", o: ["180°", "360°", "90°", "270°"], a: 0, e: "" },
    { q: "Sum of interior angles of a pentagon?", o: ["540°", "360°", "720°", "900°"], a: 0, e: "" },
    { q: "Each exterior angle of a regular hexagon?", o: ["60°", "120°", "72°", "45°"], a: 0, e: "" },
    { q: "Alternate angles are…", o: ["Equal", "Add to 180°", "Add to 90°", "Add to 360°"], a: 0, e: "" },
    { q: "Co-interior angles…", o: ["Add to 180°", "Are equal", "Add to 360°", "Add to 90°"], a: 0, e: "" },
    { q: "A regular polygon has exterior angles of 24°. How many sides?", o: ["15", "12", "24", "10"], a: 0, e: "" },
    { q: "The bearing of B from A is 070°. Bearing of A from B?", o: ["250°", "110°", "070°", "290°"], a: 0, e: "" },
    { q: "Vertically opposite angles are…", o: ["Equal", "Add to 180°", "Add to 90°", "Always 90°"], a: 0, e: "" },
    { q: "An isosceles triangle has a 40° apex angle. Each base angle?", o: ["70°", "40°", "140°", "50°"], a: 0, e: "" }
  ],
  flashcards: [
    ["Straight line / around a point", "180° / 360°"],
    ["Triangle / quadrilateral", "180° / 360°"],
    ["Alternate angles", "Equal (Z)"],
    ["Corresponding angles", "Equal (F)"],
    ["Co-interior angles", "Add to 180° (C)"],
    ["Interior angle sum", "(n − 2) × 180°"],
    ["Exterior angles", "Sum 360°; regular: 360° ÷ n"],
    ["Bearings", "Clockwise from North, 3 figures"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Perimeter, area and volume",
  summary: "Areas of 2D shapes, circles and sectors, surface area and volume of prisms, cylinders, cones and spheres.",
  notes: `
<h3>Area</h3>
<table>
<tr><th>Shape</th><th>Area</th></tr>
<tr><td>Rectangle</td><td>l × w</td></tr>
<tr><td>Triangle</td><td>½ × b × h</td></tr>
<tr><td>Parallelogram</td><td>b × h</td></tr>
<tr><td>Trapezium</td><td>½(a + b)h</td></tr>
<tr><td>Circle</td><td>πr<sup>2</sup>; circumference 2πr = πd</td></tr>
</table>
<p>Sectors: arc length = (θ/360) × 2πr; area = (θ/360) × πr<sup>2</sup>.</p>
<h3>Volume and surface area</h3>
<ul>
<li><b>Prism</b>: volume = area of cross-section × length. Cuboid: l × w × h.</li>
<li><b>Cylinder</b>: V = πr<sup>2</sup>h; curved surface area = 2πrh.</li>
<li><b>Cone</b>: V = ⅓πr<sup>2</sup>h; curved surface = πrl (l = slant height).</li>
<li><b>Sphere</b>: V = 4/3 πr<sup>3</sup>; surface area = 4πr<sup>2</sup>.</li>
<li><b>Pyramid</b>: V = ⅓ × base area × height.</li>
</ul>
<p>Surface area: add the areas of all faces (draw the net).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Cylinder r = 3 cm, h = 10 cm: V = π × 9 × 10 = 90π ≈ <b>283 cm<sup>3</sup></b>.</div>
`,
  quiz: [
    { q: "Area of a triangle with base 8 cm and height 5 cm?", o: ["20 cm²", "40 cm²", "13 cm²", "80 cm²"], a: 0, e: "" },
    { q: "Area of a trapezium with parallel sides 6 and 10, height 4?", o: ["32", "64", "40", "24"], a: 0, e: "" },
    { q: "Area of a circle with radius 5 cm (in terms of π)?", o: ["25π cm²", "10π cm²", "5π cm²", "50π cm²"], a: 0, e: "" },
    { q: "Circumference of a circle with diameter 8 cm?", o: ["8π cm", "16π cm", "64π cm", "4π cm"], a: 0, e: "" },
    { q: "Volume of a cylinder, r = 3 cm, h = 10 cm?", o: ["90π cm³", "30π cm³", "60π cm³", "900π cm³"], a: 0, e: "" },
    { q: "Volume of a cuboid 2 × 3 × 4?", o: ["24", "9", "52", "12"], a: 0, e: "" },
    { q: "Area of a 90° sector of radius 4?", o: ["4π", "16π", "8π", "2π"], a: 0, e: "" },
    { q: "Volume of a cone formula?", o: ["⅓πr²h", "πr²h", "4/3πr³", "πrl"], a: 0, e: "" },
    { q: "Surface area of a sphere formula?", o: ["4πr²", "4/3πr³", "2πr", "πr²"], a: 0, e: "" }
  ],
  flashcards: [
    ["Triangle area", "½ × base × height"],
    ["Trapezium area", "½(a + b)h"],
    ["Circle area / circumference", "πr² / 2πr"],
    ["Sector area", "(θ/360) × πr²"],
    ["Arc length", "(θ/360) × 2πr"],
    ["Prism volume", "Cross-section area × length"],
    ["Cylinder volume", "πr²h"],
    ["Cone volume / curved area", "⅓πr²h / πrl"],
    ["Sphere volume / area", "4/3πr³ / 4πr²"]
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Pythagoras and trigonometry",
  summary: "Pythagoras' theorem, SOHCAHTOA, exact trig values and 3D problems.",
  notes: `
<h3>Pythagoras' theorem</h3>
<p>In a right-angled triangle, a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>, where c is the hypotenuse (longest side, opposite the right angle).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Shorter sides 6 and 8: c = √(36 + 64) = <b>10</b>.<br>Hypotenuse 13, one side 5: other = √(169 − 25) = <b>12</b>.</div>
<p>Distance between two points: √((x₂ − x₁)<sup>2</sup> + (y₂ − y₁)<sup>2</sup>).</p>
<h3>Trigonometry: SOHCAHTOA</h3>
<p>sin θ = O/H, cos θ = A/H, tan θ = O/A. Label the sides from the angle, choose the ratio, solve. Use sin<sup>−1</sup> etc. to find an angle.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Find x: hypotenuse 12, angle 35°, x opposite. x = 12 sin 35° = <b>6.88</b>.</div>
<h3>Exact values</h3>
<table>
<tr><th></th><th>0°</th><th>30°</th><th>45°</th><th>60°</th><th>90°</th></tr>
<tr><td>sin</td><td>0</td><td>½</td><td>√2/2</td><td>√3/2</td><td>1</td></tr>
<tr><td>cos</td><td>1</td><td>√3/2</td><td>√2/2</td><td>½</td><td>0</td></tr>
<tr><td>tan</td><td>0</td><td>√3/3</td><td>1</td><td>√3</td><td>—</td></tr>
</table>
<div class="box box-c"><span class="box-title">Higher: 3D</span>Find a diagonal in the base first with Pythagoras, then use it in a second right-angled triangle. Space diagonal of a cuboid = √(a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup>).</div>
`,
  quiz: [
    { q: "Hypotenuse when the other sides are 6 and 8?", o: ["10", "14", "48", "100"], a: 0, e: "" },
    { q: "Hypotenuse 13, one side 5. Other side?", o: ["12", "8", "18", "√194"], a: 0, e: "" },
    { q: "sin θ = …", o: ["Opposite ÷ hypotenuse", "Adjacent ÷ hypotenuse", "Opposite ÷ adjacent", "Hypotenuse ÷ opposite"], a: 0, e: "" },
    { q: "Exact value of sin 30°?", o: ["½", "√3/2", "1", "√2/2"], a: 0, e: "" },
    { q: "Exact value of tan 45°?", o: ["1", "0", "√3", "½"], a: 0, e: "" },
    { q: "Exact value of cos 60°?", o: ["½", "√3/2", "0", "1"], a: 0, e: "" },
    { q: "Opposite 5, adjacent 5. The angle is…", o: ["45°", "30°", "60°", "90°"], a: 0, e: "" },
    { q: "Distance between (1, 2) and (4, 6)?", o: ["5", "7", "25", "√7"], a: 0, e: "" },
    { q: "Higher: space diagonal of a 3 × 4 × 12 cuboid?", o: ["13", "19", "√163", "12"], a: 0, e: "" }
  ],
  flashcards: [
    ["Pythagoras", "a² + b² = c² (c is the hypotenuse)"],
    ["Finding a shorter side", "Subtract: a² = c² − b²"],
    ["SOH", "sin = opposite ÷ hypotenuse"],
    ["CAH", "cos = adjacent ÷ hypotenuse"],
    ["TOA", "tan = opposite ÷ adjacent"],
    ["Finding an angle", "Use sin⁻¹, cos⁻¹ or tan⁻¹"],
    ["sin 30, cos 60", "½"],
    ["tan 45", "1"],
    ["Space diagonal (Higher)", "√(a² + b² + c²)"]
  ]
});

S2Data.add({
  id: "4d", group: 4, title: "Transformations, congruence and similarity",
  summary: "Reflections, rotations, translations, enlargements, congruent triangles and similar shapes.",
  notes: `
<h3>Transformations</h3>
<table>
<tr><th>Transformation</th><th>Describe with</th></tr>
<tr><td>Translation</td><td>A column vector</td></tr>
<tr><td>Reflection</td><td>The mirror line (e.g. y = x)</td></tr>
<tr><td>Rotation</td><td>Angle, direction, centre</td></tr>
<tr><td>Enlargement</td><td>Scale factor, centre</td></tr>
</table>
<p>A fractional scale factor makes the shape smaller. Higher: a negative scale factor puts the image on the other side of the centre, upside down.</p>
<h3>Congruent triangles</h3>
<p>Same shape and size. Conditions: <b>SSS</b>, <b>SAS</b>, <b>ASA</b> (or AAS), <b>RHS</b>.</p>
<h3>Similar shapes</h3>
<p>Same shape, different size: corresponding angles equal, sides in the same ratio. Find the scale factor k from a pair of corresponding sides.</p>
<div class="box box-c"><span class="box-title">Higher: area and volume scale factors</span>If lengths scale by k, areas scale by k<sup>2</sup> and volumes by k<sup>3</sup>.<br>Two similar cylinders with heights 4 cm and 12 cm: k = 3. If the small one has volume 50 cm<sup>3</sup>, the large one has 50 × 27 = 1350 cm<sup>3</sup>.</div>
`,
  quiz: [
    { q: "A translation is described by a…", o: ["Column vector", "Mirror line", "Centre and angle", "Scale factor"], a: 0, e: "" },
    { q: "To describe a rotation you need…", o: ["Angle, direction and centre", "A vector", "A mirror line", "A scale factor"], a: 0, e: "" },
    { q: "Enlargement by scale factor ½ makes a shape…", o: ["Smaller", "Larger", "The same size", "Upside down"], a: 0, e: "" },
    { q: "Which is NOT a congruence condition?", o: ["AAA", "SSS", "SAS", "RHS"], a: 0, e: "AAA gives similar, not congruent." },
    { q: "Similar triangles have sides 4 and 10. Scale factor?", o: ["2.5", "6", "0.4", "14"], a: 0, e: "" },
    { q: "Similar shapes have…", o: ["Equal angles, sides in the same ratio", "Equal sides", "Equal areas", "Different angles"], a: 0, e: "" },
    { q: "Higher: length scale factor 3. Area scale factor?", o: ["9", "3", "27", "6"], a: 0, e: "" },
    { q: "Higher: length scale factor 2. Volume scale factor?", o: ["8", "2", "4", "6"], a: 0, e: "" },
    { q: "Reflection in y = x maps (2, 5) to…", o: ["(5, 2)", "(−2, 5)", "(2, −5)", "(−5, −2)"], a: 0, e: "" }
  ],
  flashcards: [
    ["Translation", "Column vector"],
    ["Reflection", "Mirror line"],
    ["Rotation", "Angle, direction, centre"],
    ["Enlargement", "Scale factor, centre"],
    ["Congruence conditions", "SSS, SAS, ASA, RHS"],
    ["Similar shapes", "Same angles; sides in ratio k"],
    ["Area scale factor (Higher)", "k²"],
    ["Volume scale factor (Higher)", "k³"]
  ]
});

S2Data.add({
  id: "4e", group: 4, title: "Constructions, loci and plans",
  summary: "Ruler and compass constructions, loci, scale drawings, and plans and elevations.",
  notes: `
<h3>Constructions (compasses and ruler)</h3>
<ul>
<li><b>Perpendicular bisector</b> of a line: arcs from both ends, same radius, join the crossing points. Every point on it is equidistant from the two ends.</li>
<li><b>Angle bisector</b>: arc from the vertex cutting both arms; equal arcs from those points; join the vertex to the crossing.</li>
<li><b>Perpendicular from a point</b> to a line, and 60° angles (equilateral triangle).</li>
<li>Leave construction arcs visible.</li>
</ul>
<h3>Loci</h3>
<table>
<tr><th>Locus of points…</th><th>Shape</th></tr>
<tr><td>A fixed distance from a point</td><td>Circle</td></tr>
<tr><td>A fixed distance from a line</td><td>Two parallel lines with semicircular ends</td></tr>
<tr><td>Equidistant from two points</td><td>Perpendicular bisector</td></tr>
<tr><td>Equidistant from two lines</td><td>Angle bisector</td></tr>
</table>
<p>Shade the region that satisfies all conditions.</p>
<h3>Scale drawings and plans</h3>
<p>Scale 1 : 50 000 → 1 cm represents 50 000 cm = 500 m. Plans and elevations: views from above (plan), front and side.</p>
`,
  quiz: [
    { q: "Points equidistant from two points lie on…", o: ["The perpendicular bisector", "The angle bisector", "A circle", "A parallel line"], a: 0, e: "" },
    { q: "Points equidistant from two lines lie on…", o: ["The angle bisector", "The perpendicular bisector", "A circle", "A square"], a: 0, e: "" },
    { q: "Points 3 cm from a point form…", o: ["A circle of radius 3 cm", "A line", "A square", "Two lines"], a: 0, e: "" },
    { q: "Map scale 1 : 50 000. 4 cm represents…", o: ["2 km", "200 m", "20 km", "4 km"], a: 0, e: "" },
    { q: "A plan view is seen from…", o: ["Above", "The front", "The side", "Below"], a: 0, e: "" },
    { q: "Constructing an equilateral triangle gives angles of…", o: ["60°", "90°", "45°", "30°"], a: 0, e: "" },
    { q: "In constructions, you should…", o: ["Leave arcs visible", "Rub out arcs", "Use a protractor", "Estimate"], a: 0, e: "" },
    { q: "Points within 2 m of a straight fence form…", o: ["A rounded rectangle (stadium)", "A circle", "A triangle", "A single line"], a: 0, e: "" },
    { q: "Scale 1 : 200. A 6 m wall on the drawing is…", o: ["3 cm", "30 cm", "12 cm", "1.2 cm"], a: 0, e: "" }
  ],
  flashcards: [
    ["Perpendicular bisector", "Equidistant from two points"],
    ["Angle bisector", "Equidistant from two lines"],
    ["Fixed distance from a point", "Circle"],
    ["Fixed distance from a line", "Stadium shape"],
    ["Map scale 1 : n", "1 cm represents n cm"],
    ["Plan / elevation", "View from above / front or side"]
  ]
});

S2Data.add({
  id: "4f", group: 4, higher: true, title: "Circle theorems",
  summary: "The circle theorems, and proving them.",
  notes: `
<h3>The theorems</h3>
<ol>
<li>The angle at the centre is <b>twice</b> the angle at the circumference subtended by the same arc.</li>
<li>The angle in a <b>semicircle</b> is 90°.</li>
<li>Angles in the <b>same segment</b> are equal.</li>
<li>Opposite angles of a <b>cyclic quadrilateral</b> add to 180°.</li>
<li>A <b>tangent</b> meets a radius at 90°.</li>
<li>Two tangents from an external point are <b>equal in length</b>.</li>
<li>The perpendicular from the centre to a chord <b>bisects</b> the chord.</li>
<li><b>Alternate segment theorem</b>: the angle between a tangent and a chord equals the angle in the alternate segment.</li>
</ol>
<p>Always state the theorem used as your reason. Look for isosceles triangles made by two radii.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Angle at the circumference is 38°. Angle at the centre on the same arc = <b>76°</b>.</div>
`,
  quiz: [
    { q: "Angle at the centre is ___ the angle at the circumference.", o: ["Twice", "Half", "Equal to", "180° minus"], a: 0, e: "" },
    { q: "Angle in a semicircle?", o: ["90°", "180°", "45°", "60°"], a: 0, e: "" },
    { q: "Opposite angles in a cyclic quadrilateral…", o: ["Add to 180°", "Are equal", "Add to 360°", "Add to 90°"], a: 0, e: "" },
    { q: "A tangent meets a radius at…", o: ["90°", "45°", "180°", "60°"], a: 0, e: "" },
    { q: "Angles in the same segment are…", o: ["Equal", "Supplementary", "Double", "Complementary"], a: 0, e: "" },
    { q: "Angle at circumference 38°. Angle at centre (same arc)?", o: ["76°", "19°", "38°", "142°"], a: 0, e: "" },
    { q: "Two tangents from a point outside a circle are…", o: ["Equal in length", "Perpendicular", "Parallel", "Different lengths"], a: 0, e: "" },
    { q: "The perpendicular from the centre to a chord…", o: ["Bisects the chord", "Is a tangent", "Equals the radius", "Doubles the chord"], a: 0, e: "" },
    { q: "Cyclic quadrilateral with one angle 110°. Opposite angle?", o: ["70°", "110°", "250°", "55°"], a: 0, e: "" }
  ],
  flashcards: [
    ["Centre vs circumference", "Angle at centre = 2 × angle at circumference"],
    ["Semicircle", "Angle = 90°"],
    ["Same segment", "Angles equal"],
    ["Cyclic quadrilateral", "Opposite angles add to 180°"],
    ["Tangent and radius", "Meet at 90°"],
    ["Two tangents from a point", "Equal length"],
    ["Perpendicular to a chord", "Bisects it"],
    ["Alternate segment theorem", "Tangent–chord angle = angle in alternate segment"]
  ]
});

S2Data.add({
  id: "4g", group: 4, title: "Vectors",
  summary: "Column vectors, vector arithmetic and vector geometry proofs.",
  notes: `
<h3>Column vectors</h3>
<p>(3, −2) written vertically means 3 right, 2 down. Add/subtract component by component; multiply by a scalar by multiplying each component.</p>
<p>a = (2, 1), b = (−1, 3): a + b = (1, 4); 2a − b = (5, −1).</p>
<p>Magnitude (Higher): |(3, 4)| = √(9 + 16) = 5.</p>
<h3>Vector geometry</h3>
<ul>
<li>To go from A to B, follow any route: AB = AO + OB = −a + b = b − a.</li>
<li>Parallel vectors are multiples of each other: 2a + 4b = 2(a + 2b).</li>
<li>If M is the midpoint of AB, AM = ½AB.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: proving collinearity</span>Points P, Q, R are on a straight line if PQ and QR are multiples of each other and share a point (Q).<br>If PQ = a + 2b and QR = 3a + 6b = 3(a + 2b), then QR = 3PQ, so P, Q, R are collinear.</div>
`,
  quiz: [
    { q: "(2, 1) + (−1, 3) = …", o: ["(1, 4)", "(3, 4)", "(1, −2)", "(−2, 3)"], a: 0, e: "" },
    { q: "3 × (2, −1) = …", o: ["(6, −3)", "(5, 2)", "(6, 3)", "(2, −3)"], a: 0, e: "" },
    { q: "If OA = a and OB = b, AB = …", o: ["b − a", "a − b", "a + b", "−a − b"], a: 0, e: "" },
    { q: "Which is parallel to a + 2b?", o: ["3a + 6b", "a + 3b", "2a + b", "a − 2b"], a: 0, e: "" },
    { q: "Higher: magnitude of (3, 4)?", o: ["5", "7", "25", "12"], a: 0, e: "" },
    { q: "M is the midpoint of AB. AM = …", o: ["½AB", "2AB", "AB", "−AB"], a: 0, e: "" },
    { q: "(5, 2) − (3, −1) = …", o: ["(2, 3)", "(2, 1)", "(8, 1)", "(−2, 3)"], a: 0, e: "" },
    { q: "Higher: to prove collinearity, show two vectors are…", o: ["Multiples of each other and share a point", "Perpendicular", "Equal magnitude", "Opposite"], a: 0, e: "" },
    { q: "The vector (0, −4) moves…", o: ["4 down", "4 up", "4 left", "4 right"], a: 0, e: "" }
  ],
  flashcards: [
    ["Column vector (x, y)", "x across, y up"],
    ["Adding vectors", "Add components"],
    ["AB from O", "AB = b − a"],
    ["Parallel vectors", "One is a multiple of the other"],
    ["Midpoint", "AM = ½AB"],
    ["Magnitude (Higher)", "√(x² + y²)"],
    ["Collinear (Higher)", "Parallel vectors sharing a point"]
  ]
});

S2Data.add({
  id: "4h", group: 4, higher: true, title: "Sine rule, cosine rule and area of a triangle",
  summary: "Trigonometry in non-right-angled triangles.",
  notes: `
<h3>Labelling</h3>
<p>Side a is opposite angle A, side b opposite B, side c opposite C.</p>
<h3>Sine rule</h3>
<p>a/sin A = b/sin B = c/sin C. Use when you know a side and its opposite angle (a matching pair).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>A = 40°, a = 8, B = 65°. b = 8 sin 65° ÷ sin 40° = <b>11.3</b>.</div>
<h3>Cosine rule</h3>
<p>a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> − 2bc cos A. Use with two sides and the included angle, or all three sides (rearrange: cos A = (b<sup>2</sup> + c<sup>2</sup> − a<sup>2</sup>) / 2bc).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>b = 5, c = 7, A = 60°: a<sup>2</sup> = 25 + 49 − 70 × 0.5 = 39 → a = <b>6.24</b>.</div>
<h3>Area of a triangle</h3>
<p>Area = ½ab sin C (two sides and the included angle).</p>
`,
  quiz: [
    { q: "The sine rule is…", o: ["a/sin A = b/sin B", "a² = b² + c² − 2bc cos A", "½ab sin C", "sin A = O/H"], a: 0, e: "" },
    { q: "Use the cosine rule when you know…", o: ["Two sides and the included angle", "Two angles and a side", "One side only", "A right angle"], a: 0, e: "" },
    { q: "Area of a triangle with sides 6 and 8, included angle 30°?", o: ["12", "24", "48", "6"], a: 0, e: "½ × 6 × 8 × 0.5." },
    { q: "b = 5, c = 7, A = 60°. a² = …", o: ["39", "74", "109", "35"], a: 0, e: "" },
    { q: "Side a is opposite…", o: ["Angle A", "Angle B", "Angle C", "The right angle"], a: 0, e: "" },
    { q: "To find an angle from three sides use…", o: ["The cosine rule", "The sine rule", "Pythagoras only", "Area formula"], a: 0, e: "" },
    { q: "Rearranged cosine rule: cos A = …", o: ["(b² + c² − a²)/2bc", "(a² − b² − c²)/2bc", "(b² + c²)/2a", "a/2bc"], a: 0, e: "" },
    { q: "Which formula needs a matching side–angle pair?", o: ["Sine rule", "Cosine rule", "Area formula", "Pythagoras"], a: 0, e: "" },
    { q: "If A = 90°, the cosine rule becomes…", o: ["Pythagoras' theorem", "The sine rule", "Area = ½bh", "Nothing useful"], a: 0, e: "cos 90° = 0." }
  ],
  flashcards: [
    ["Sine rule", "a/sin A = b/sin B = c/sin C"],
    ["When to use the sine rule", "Matching side–angle pair known"],
    ["Cosine rule", "a² = b² + c² − 2bc cos A"],
    ["When to use the cosine rule", "SAS or SSS"],
    ["Finding an angle (cosine)", "cos A = (b² + c² − a²)/2bc"],
    ["Area of any triangle", "½ab sin C"]
  ]
});

S2Data.detail("4a", { mistakes: ["Giving reasons like 'Z angles' or 'F angles'. Write 'alternate angles' and 'corresponding angles'."], tips: ["For polygon questions, find the exterior angle first: it's easier."], fact: "Honeybees build hexagonal cells because hexagons tile with the least wall for the most space." });
S2Data.detail("4b", { mistakes: ["Using the slant height instead of the perpendicular height for a triangle's area or a cone's volume."], tips: ["Leave answers in terms of π when the question asks; it's exact."], fact: "Archimedes asked for a sphere inside a cylinder on his tombstone: the sphere has exactly ⅔ of the cylinder's volume." });
S2Data.detail("4c", { mistakes: ["Calculator in radians mode. Check it shows D (degrees)."], tips: ["Label O, A and H from the angle you're using before choosing a ratio."], fact: "The 3-4-5 triangle was used by ancient Egyptian builders to make right angles with a knotted rope." });
S2Data.detail("4d", { mistakes: ["Describing a combination of transformations. Questions ask for a single transformation."], tips: ["Use tracing paper for rotations: it's allowed in the exam."], fact: "Fractals, like the Koch snowflake, are made of smaller copies of themselves: self-similarity." });
S2Data.detail("4e", { mistakes: ["Rubbing out construction arcs. They show your method and earn the marks."], tips: ["Keep the compass width the same for both arcs in a bisector."], fact: "Ancient Greek mathematicians proved you can't trisect every angle with only ruler and compasses." });
S2Data.detail("4f", { mistakes: ["Applying the cyclic quadrilateral theorem when one vertex isn't on the circle."], tips: ["Mark every radius: they make isosceles triangles, which unlock most questions."], fact: "Thales of Miletus is credited with proving the angle in a semicircle is 90°, around 600 BCE." });
S2Data.detail("4g", { mistakes: ["Writing AB = a − b. Going from A to B is −a + b."], tips: ["Write out the route you're taking: AB = AO + OB."], fact: "Vectors are used in video games to calculate how characters and light move." });
S2Data.detail("4h", { mistakes: ["Using the cosine rule but calculating b² + c² − 2bc first, then multiplying by cos A."], tips: ["Pair up each side with its opposite angle to decide which rule to use."], fact: "Surveyors used triangulation with the sine rule to map Britain in the Great Trigonometrical Survey." });
