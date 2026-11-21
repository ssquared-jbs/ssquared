/* Maths² — Geometry and measures */

S2Data.add({
  id: "4a", group: 4, title: "Angles and polygons",
  summary: "Angle facts, parallel lines, angles in polygons and bearings.",
  notes: R`
<h3>Angle facts</h3>
<table><tr><th>Fact</th><th>Total</th></tr>
<tr><td>Angles on a straight line</td><td>\(180^\circ\)</td></tr>
<tr><td>Angles around a point</td><td>\(360^\circ\)</td></tr>
<tr><td>Angles in a triangle</td><td>\(180^\circ\)</td></tr>
<tr><td>Angles in a quadrilateral</td><td>\(360^\circ\)</td></tr></table>
<ul>
<li>Vertically opposite angles are equal.</li>
<li>An isosceles triangle has two equal sides and two equal base angles. With a \(40^\circ\) apex: each base angle is \(\dfrac{180 - 40}{2} = 70^\circ\).</li>
</ul>
<h3>Parallel lines</h3>
<p><b>Alternate</b> angles are equal (Z shape). <b>Corresponding</b> angles are equal (F shape). <b>Co-interior</b> angles add to \(180^\circ\) (C shape). Always give the reason in words.</p>
<h3>Polygons</h3>
<ul>
<li>Sum of interior angles \(= (n - 2) \times 180^\circ\) (the polygon splits into \(n - 2\) triangles).</li>
<li>Exterior angles of any polygon add to \(360^\circ\). For a regular polygon, each exterior angle \(= \dfrac{360^\circ}{n}\).</li>
<li>Interior + exterior \(= 180^\circ\) (they lie on a straight line).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A regular hexagon (\(n = 6\)):
<ol><li>Exterior angle: \(360 \div 6 = 60^\circ\).</li>
<li>Interior angle: \(180 - 60 = 120^\circ\).</li>
<li>Interior sum: \((6 - 2) \times 180 = 720^\circ\). Check: \(6 \times 120 = 720\). ✓</li></ol>
To find the number of sides from an exterior angle, divide: \(n = \dfrac{360}{\text{exterior}}\).</div>
<h3>Bearings</h3>
<p>Measured clockwise from North, written with three figures (e.g. \(045^\circ\)). Back bearing = bearing \(\pm 180^\circ\): if B is on a bearing of \(070^\circ\) from A, then A is on \(070 + 180 = 250^\circ\) from B.</p>
`,
  quiz: [
    { q: "Angles in a triangle add to…", o: [R`\(180^\circ\)`, R`\(360^\circ\)`, R`\(90^\circ\)`, R`\(270^\circ\)`], a: 0, e: "Angles in any triangle total 180°." },
    { q: "Sum of interior angles of a pentagon?", o: [R`\(540^\circ\)`, R`\(360^\circ\)`, R`\(720^\circ\)`, R`\(900^\circ\)`], a: 0, e: R`\((5 - 2) \times 180 = 540\).` },
    { q: "Each exterior angle of a regular hexagon?", o: [R`\(60^\circ\)`, R`\(120^\circ\)`, R`\(72^\circ\)`, R`\(45^\circ\)`], a: 0, e: R`\(360 \div 6 = 60\).` },
    { q: "Alternate angles are…", o: ["Equal", R`Add to \(180^\circ\)`, R`Add to \(90^\circ\)`, R`Add to \(360^\circ\)`], a: 0, e: "They sit in a Z shape between parallel lines." },
    { q: "Co-interior angles…", o: [R`Add to \(180^\circ\)`, "Are equal", R`Add to \(360^\circ\)`, R`Add to \(90^\circ\)`], a: 0, e: "They sit in a C shape between parallel lines." },
    { q: R`A regular polygon has exterior angles of \(24^\circ\). How many sides?`, o: ["15", "12", "24", "10"], a: 0, e: R`\(360 \div 24 = 15\).` },
    { q: R`The bearing of B from A is \(070^\circ\). Bearing of A from B?`, o: [R`\(250^\circ\)`, R`\(110^\circ\)`, R`\(070^\circ\)`, R`\(290^\circ\)`], a: 0, e: R`Turn round: \(70 + 180 = 250\).` },
    { q: "Vertically opposite angles are…", o: ["Equal", R`Add to \(180^\circ\)`, R`Add to \(90^\circ\)`, R`Always \(90^\circ\)`], a: 0, e: "They're opposite each other where two lines cross." },
    { q: R`An isosceles triangle has a \(40^\circ\) apex angle. Each base angle?`, o: [R`\(70^\circ\)`, R`\(40^\circ\)`, R`\(140^\circ\)`, R`\(50^\circ\)`], a: 0, e: R`\(180 - 40 = 140\), shared equally: \(70^\circ\) each.` }
  ],
  flashcards: [
    ["Straight line / around a point", R`\(180^\circ\) / \(360^\circ\)`],
    ["Triangle / quadrilateral", R`\(180^\circ\) / \(360^\circ\)`],
    ["Alternate angles", "Equal (Z)"],
    ["Corresponding angles", "Equal (F)"],
    ["Co-interior angles", R`Add to \(180^\circ\) (C)`],
    ["Interior angle sum", R`\((n - 2) \times 180^\circ\)`],
    ["Exterior angles", R`Sum \(360^\circ\); regular: \(\frac{360^\circ}{n}\)`],
    ["Bearings", "Clockwise from North, 3 figures"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Perimeter, area and volume",
  summary: "Areas of 2D shapes, circles and sectors, surface area and volume of prisms, cylinders, cones and spheres.",
  notes: R`
<h3>Area</h3>
<table>
<tr><th>Shape</th><th>Area</th></tr>
<tr><td>Rectangle</td><td>\(l \times w\)</td></tr>
<tr><td>Triangle</td><td>\(\tfrac12 \times b \times h\)</td></tr>
<tr><td>Parallelogram</td><td>\(b \times h\)</td></tr>
<tr><td>Trapezium</td><td>\(\tfrac12(a + b)h\)</td></tr>
<tr><td>Circle</td><td>\(\pi r^2\); circumference \(2\pi r = \pi d\)</td></tr>
</table>
<p>The height must be perpendicular to the base. A sector is a fraction \(\frac{\theta}{360}\) of a circle:</p>
<p>\[\text{arc length} = \frac{\theta}{360} \times 2\pi r \qquad \text{sector area} = \frac{\theta}{360} \times \pi r^2\]</p>
<h3>Volume and surface area</h3>
<table><tr><th>Solid</th><th>Volume</th><th>Surface area</th></tr>
<tr><td>Prism</td><td>cross-section area × length</td><td>add the faces (draw the net)</td></tr>
<tr><td>Cylinder</td><td>\(\pi r^2 h\)</td><td>curved: \(2\pi rh\)</td></tr>
<tr><td>Cone</td><td>\(\tfrac13\pi r^2 h\)</td><td>curved: \(\pi rl\) (\(l\) = slant height)</td></tr>
<tr><td>Sphere</td><td>\(\tfrac43\pi r^3\)</td><td>\(4\pi r^2\)</td></tr>
<tr><td>Pyramid</td><td>\(\tfrac13\) × base area × height</td><td>add the faces</td></tr></table>
<div class="box box-prac"><span class="box-title">Worked example</span>A cylinder has \(r = 3\) cm and \(h = 10\) cm.
<ol><li>\(V = \pi r^2 h = \pi \times 3^2 \times 10 = 90\pi\).</li>
<li>\(90\pi \approx 283\ \text{cm}^3\) (3 s.f.).</li></ol>
Leave answers "in terms of \(\pi\)" when asked: that's exact.</div>
`,
  quiz: [
    { q: "Area of a triangle with base 8 cm and height 5 cm?", o: [R`\(20\ \text{cm}^2\)`, R`\(40\ \text{cm}^2\)`, R`\(13\ \text{cm}^2\)`, R`\(80\ \text{cm}^2\)`], a: 0, e: R`\(\frac12 \times 8 \times 5 = 20\).` },
    { q: "Area of a trapezium with parallel sides 6 and 10, height 4?", o: ["32", "64", "40", "24"], a: 0, e: R`\(\frac12(6 + 10) \times 4 = 8 \times 4\).` },
    { q: R`Area of a circle with radius 5 cm (in terms of \(\pi\))?`, o: [R`\(25\pi\ \text{cm}^2\)`, R`\(10\pi\ \text{cm}^2\)`, R`\(5\pi\ \text{cm}^2\)`, R`\(50\pi\ \text{cm}^2\)`], a: 0, e: R`\(\pi r^2 = \pi \times 25\).` },
    { q: "Circumference of a circle with diameter 8 cm?", o: [R`\(8\pi\) cm`, R`\(16\pi\) cm`, R`\(64\pi\) cm`, R`\(4\pi\) cm`], a: 0, e: R`\(C = \pi d\).` },
    { q: R`Volume of a cylinder, \(r = 3\) cm, \(h = 10\) cm?`, o: [R`\(90\pi\ \text{cm}^3\)`, R`\(30\pi\ \text{cm}^3\)`, R`\(60\pi\ \text{cm}^3\)`, R`\(900\pi\ \text{cm}^3\)`], a: 0, e: R`\(\pi \times 9 \times 10\).` },
    { q: R`Volume of a cuboid \(2 \times 3 \times 4\)?`, o: ["24", "9", "52", "12"], a: 0, e: "Multiply the three dimensions." },
    { q: R`Area of a \(90^\circ\) sector of radius 4?`, o: [R`\(4\pi\)`, R`\(16\pi\)`, R`\(8\pi\)`, R`\(2\pi\)`], a: 0, e: R`A quarter of \(16\pi\).` },
    { q: "Volume of a cone formula?", o: [R`\(\frac13\pi r^2 h\)`, R`\(\pi r^2 h\)`, R`\(\frac43\pi r^3\)`, R`\(\pi rl\)`], a: 0, e: "A third of the cylinder with the same base and height." },
    { q: "Surface area of a sphere formula?", o: [R`\(4\pi r^2\)`, R`\(\frac43\pi r^3\)`, R`\(2\pi r\)`, R`\(\pi r^2\)`], a: 0, e: R`Area has units squared, so it's the \(r^2\) formula.` }
  ],
  flashcards: [
    ["Triangle area", R`\(\frac12 \times\) base \(\times\) height`],
    ["Trapezium area", R`\(\frac12(a + b)h\)`],
    ["Circle area / circumference", R`\(\pi r^2\) / \(2\pi r\)`],
    ["Sector area", R`\(\frac{\theta}{360} \times \pi r^2\)`],
    ["Arc length", R`\(\frac{\theta}{360} \times 2\pi r\)`],
    ["Prism volume", "Cross-section area × length"],
    ["Cylinder volume", R`\(\pi r^2 h\)`],
    ["Cone volume / curved area", R`\(\frac13\pi r^2 h\) / \(\pi rl\)`],
    ["Sphere volume / area", R`\(\frac43\pi r^3\) / \(4\pi r^2\)`]
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Pythagoras and trigonometry",
  summary: "Pythagoras' theorem, SOHCAHTOA, exact trig values and 3D problems.",
  notes: R`
<h3>Pythagoras' theorem</h3>
<p>In a right-angled triangle, where \(c\) is the hypotenuse (the longest side, opposite the right angle):</p>
<p>\[a^2 + b^2 = c^2\]</p>
<div class="box box-prac"><span class="box-title">Worked examples</span>
<ol><li>Shorter sides 6 and 8: \(c = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10\). (Add to find the hypotenuse.)</li>
<li>Hypotenuse 13, one side 5: \(b = \sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12\). (Subtract to find a shorter side.)</li></ol></div>
<p>Distance between two points: \(d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}\).</p>
<h3>Trigonometry: SOHCAHTOA</h3>
<p>\[\sin\theta = \frac{O}{H} \qquad \cos\theta = \frac{A}{H} \qquad \tan\theta = \frac{O}{A}\]</p>
<p>Label the sides from the angle (Opposite, Adjacent, Hypotenuse), choose the ratio that uses the two sides involved, then solve. Use \(\sin^{-1}\), \(\cos^{-1}\) or \(\tan^{-1}\) to find an angle.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Hypotenuse 12, angle \(35^\circ\); find \(x\), the side opposite the angle.
<ol><li>O and H are involved, so use \(\sin\): \(\sin 35^\circ = \dfrac{x}{12}\).</li>
<li>\(x = 12\sin 35^\circ = 6.88\) (3 s.f.).</li></ol></div>
<h3>Exact values</h3>
<table>
<tr><th></th><th>\(0^\circ\)</th><th>\(30^\circ\)</th><th>\(45^\circ\)</th><th>\(60^\circ\)</th><th>\(90^\circ\)</th></tr>
<tr><td>\(\sin\)</td><td>0</td><td>\(\frac12\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac{\sqrt3}{2}\)</td><td>1</td></tr>
<tr><td>\(\cos\)</td><td>1</td><td>\(\frac{\sqrt3}{2}\)</td><td>\(\frac{\sqrt2}{2}\)</td><td>\(\frac12\)</td><td>0</td></tr>
<tr><td>\(\tan\)</td><td>0</td><td>\(\frac{\sqrt3}{3}\)</td><td>1</td><td>\(\sqrt3\)</td><td>—</td></tr>
</table>
<div class="box box-c"><span class="box-title">Higher: 3D</span>Find a diagonal in the base first with Pythagoras, then use it in a second right-angled triangle. The space diagonal of an \(a \times b \times c\) cuboid is \(\sqrt{a^2 + b^2 + c^2}\). E.g. \(3 \times 4 \times 12\): \(\sqrt{9 + 16 + 144} = \sqrt{169} = 13\).</div>
`,
  quiz: [
    { q: "Hypotenuse when the other sides are 6 and 8?", o: ["10", "14", "48", "100"], a: 0, e: R`\(\sqrt{36 + 64} = \sqrt{100}\). Don't forget the square root.` },
    { q: "Hypotenuse 13, one side 5. Other side?", o: ["12", "8", "18", R`\(\sqrt{194}\)`], a: 0, e: R`Subtract for a shorter side: \(\sqrt{169 - 25} = \sqrt{144}\).` },
    { q: R`\(\sin\theta = \ ?\)`, o: ["Opposite ÷ hypotenuse", "Adjacent ÷ hypotenuse", "Opposite ÷ adjacent", "Hypotenuse ÷ opposite"], a: 0, e: "SOH: sine, opposite, hypotenuse." },
    { q: R`Exact value of \(\sin 30^\circ\)?`, o: [R`\(\frac12\)`, R`\(\frac{\sqrt3}{2}\)`, "1", R`\(\frac{\sqrt2}{2}\)`], a: 0, e: "Half an equilateral triangle: opposite 1, hypotenuse 2." },
    { q: R`Exact value of \(\tan 45^\circ\)?`, o: ["1", "0", R`\(\sqrt3\)`, R`\(\frac12\)`], a: 0, e: "In a right-angled isosceles triangle, opposite = adjacent." },
    { q: R`Exact value of \(\cos 60^\circ\)?`, o: [R`\(\frac12\)`, R`\(\frac{\sqrt3}{2}\)`, "0", "1"], a: 0, e: R`\(\cos 60^\circ = \sin 30^\circ = \frac12\).` },
    { q: "Opposite 5, adjacent 5. The angle is…", o: [R`\(45^\circ\)`, R`\(30^\circ\)`, R`\(60^\circ\)`, R`\(90^\circ\)`], a: 0, e: R`\(\tan\theta = \frac55 = 1\), so \(\theta = 45^\circ\).` },
    { q: R`Distance between \((1, 2)\) and \((4, 6)\)?`, o: ["5", "7", "25", R`\(\sqrt7\)`], a: 0, e: R`\(\sqrt{3^2 + 4^2} = \sqrt{25}\).` },
    { q: R`Higher: space diagonal of a \(3 \times 4 \times 12\) cuboid?`, o: ["13", "19", R`\(\sqrt{163}\)`, "12"], a: 0, e: R`\(\sqrt{9 + 16 + 144} = \sqrt{169}\).` }
  ],
  flashcards: [
    ["Pythagoras", R`\(a^2 + b^2 = c^2\) (\(c\) is the hypotenuse)`],
    ["Finding a shorter side", R`Subtract: \(a^2 = c^2 - b^2\)`],
    ["SOH", R`\(\sin = \frac{\text{opposite}}{\text{hypotenuse}}\)`],
    ["CAH", R`\(\cos = \frac{\text{adjacent}}{\text{hypotenuse}}\)`],
    ["TOA", R`\(\tan = \frac{\text{opposite}}{\text{adjacent}}\)`],
    ["Finding an angle", R`Use \(\sin^{-1}\), \(\cos^{-1}\) or \(\tan^{-1}\)`],
    [R`\(\sin 30^\circ\), \(\cos 60^\circ\)`, R`\(\frac12\)`],
    [R`\(\tan 45^\circ\)`, "1"],
    ["Space diagonal (Higher)", R`\(\sqrt{a^2 + b^2 + c^2}\)`]
  ]
});

S2Data.add({
  id: "4d", group: 4, title: "Transformations, congruence and similarity",
  summary: "Reflections, rotations, translations, enlargements, congruent triangles and similar shapes.",
  notes: R`
<h3>Transformations</h3>
<table>
<tr><th>Transformation</th><th>Describe with</th></tr>
<tr><td>Translation</td><td>A column vector, e.g. \(\binom{3}{-2}\) (3 right, 2 down)</td></tr>
<tr><td>Reflection</td><td>The mirror line (e.g. \(y = x\))</td></tr>
<tr><td>Rotation</td><td>Angle, direction, centre</td></tr>
<tr><td>Enlargement</td><td>Scale factor, centre</td></tr>
</table>
<p>Reflection in \(y = x\) swaps the coordinates: \((2, 5) \to (5, 2)\). A scale factor between 0 and 1 makes the shape smaller. Higher: a negative scale factor puts the image on the other side of the centre, upside down.</p>
<h3>Congruent triangles</h3>
<p>Same shape and size. Conditions: <b>SSS</b>, <b>SAS</b>, <b>ASA</b> (or AAS), <b>RHS</b>. AAA isn't enough: it only proves the triangles are similar.</p>
<h3>Similar shapes</h3>
<p>Same shape, different size: corresponding angles are equal and sides are in the same ratio. Find the scale factor from a pair of corresponding sides: \(k = \dfrac{\text{new length}}{\text{original length}}\). Sides 4 and 10 give \(k = \frac{10}{4} = 2.5\).</p>
<div class="box box-c"><span class="box-title">Higher: area and volume scale factors</span>If lengths scale by \(k\), areas scale by \(k^2\) and volumes by \(k^3\).<br>Two similar cylinders have heights 4 cm and 12 cm, so \(k = 3\). The small one has volume 50 cm³, so the large one has \(50 \times 3^3 = 50 \times 27 = 1350\ \text{cm}^3\).</div>
`,
  quiz: [
    { q: "A translation is described by a…", o: ["Column vector", "Mirror line", "Centre and angle", "Scale factor"], a: 0, e: "The top number moves right, the bottom number moves up." },
    { q: "To describe a rotation you need…", o: ["Angle, direction and centre", "A vector", "A mirror line", "A scale factor"], a: 0, e: R`E.g. "\(90^\circ\) clockwise about \((0, 0)\)".` },
    { q: R`Enlargement by scale factor \(\frac12\) makes a shape…`, o: ["Smaller", "Larger", "The same size", "Upside down"], a: 0, e: "Every length is halved." },
    { q: "Which is NOT a congruence condition?", o: ["AAA", "SSS", "SAS", "RHS"], a: 0, e: "AAA gives similar, not congruent: the triangles could be different sizes." },
    { q: "Similar triangles have corresponding sides 4 and 10. Scale factor?", o: ["2.5", "6", "0.4", "14"], a: 0, e: R`\(10 \div 4 = 2.5\). Scale factors multiply, they don't add.` },
    { q: "Similar shapes have…", o: ["Equal angles, sides in the same ratio", "Equal sides", "Equal areas", "Different angles"], a: 0, e: "One is an enlargement of the other." },
    { q: "Higher: length scale factor 3. Area scale factor?", o: ["9", "3", "27", "6"], a: 0, e: R`\(3^2 = 9\).` },
    { q: "Higher: length scale factor 2. Volume scale factor?", o: ["8", "2", "4", "6"], a: 0, e: R`\(2^3 = 8\).` },
    { q: R`Reflection in \(y = x\) maps \((2, 5)\) to…`, o: [R`\((5, 2)\)`, R`\((-2, 5)\)`, R`\((2, -5)\)`, R`\((-5, -2)\)`], a: 0, e: R`Reflecting in \(y = x\) swaps the coordinates.` }
  ],
  flashcards: [
    ["Translation", "Column vector"],
    ["Reflection", "Mirror line"],
    ["Rotation", "Angle, direction, centre"],
    ["Enlargement", "Scale factor, centre"],
    ["Congruence conditions", "SSS, SAS, ASA, RHS"],
    ["Similar shapes", R`Same angles; sides in ratio \(k\)`],
    ["Area scale factor (Higher)", R`\(k^2\)`],
    ["Volume scale factor (Higher)", R`\(k^3\)`]
  ]
});

S2Data.add({
  id: "4e", group: 4, title: "Constructions, loci and plans",
  summary: "Ruler and compass constructions, loci, scale drawings, and plans and elevations.",
  notes: R`
<h3>Constructions (compasses and ruler)</h3>
<ul>
<li><b>Perpendicular bisector</b> of a line: draw arcs of the same radius from both ends, then join the two crossing points. Every point on it is equidistant from the two ends.</li>
<li><b>Angle bisector</b>: draw an arc from the vertex cutting both arms; from those two points draw equal arcs; join the vertex to where they cross.</li>
<li><b>Perpendicular from a point</b> to a line, and \(60^\circ\) angles (from an equilateral triangle).</li>
<li>Leave your construction arcs visible: they earn the marks.</li>
</ul>
<h3>Loci</h3>
<table>
<tr><th>Locus of points…</th><th>Shape</th></tr>
<tr><td>A fixed distance from a point</td><td>Circle</td></tr>
<tr><td>A fixed distance from a line segment</td><td>Two parallel lines with semicircular ends</td></tr>
<tr><td>Equidistant from two points</td><td>Perpendicular bisector</td></tr>
<tr><td>Equidistant from two lines</td><td>Angle bisector</td></tr>
</table>
<p>Shade the region that satisfies all the conditions.</p>
<h3>Scale drawings and plans</h3>
<div class="box box-prac"><span class="box-title">Worked examples</span>
<ol><li>Map scale \(1 : 50\,000\): 1 cm represents 50 000 cm = 500 m, so 4 cm represents \(4 \times 500 = 2000\) m = 2 km.</li>
<li>Scale \(1 : 200\): a 6 m wall is \(600\text{ cm} \div 200 = 3\) cm on the drawing.</li></ol></div>
<p>Plans and elevations are views from above (plan), the front (front elevation) and the side (side elevation).</p>
`,
  quiz: [
    { q: "Points equidistant from two points lie on…", o: ["The perpendicular bisector", "The angle bisector", "A circle", "A parallel line"], a: 0, e: "Every point on the perpendicular bisector is the same distance from both ends." },
    { q: "Points equidistant from two lines lie on…", o: ["The angle bisector", "The perpendicular bisector", "A circle", "A square"], a: 0, e: "It splits the angle between the lines in half." },
    { q: "Points 3 cm from a point form…", o: ["A circle of radius 3 cm", "A line", "A square", "Two lines"], a: 0, e: "That's the definition of a circle." },
    { q: R`Map scale \(1 : 50\,000\). 4 cm represents…`, o: ["2 km", "200 m", "20 km", "4 km"], a: 0, e: R`\(4 \times 50\,000 = 200\,000\) cm = 2000 m.` },
    { q: "A plan view is seen from…", o: ["Above", "The front", "The side", "Below"], a: 0, e: "Elevations are from the front and side." },
    { q: "Constructing an equilateral triangle gives angles of…", o: [R`\(60^\circ\)`, R`\(90^\circ\)`, R`\(45^\circ\)`, R`\(30^\circ\)`], a: 0, e: R`\(180 \div 3 = 60\).` },
    { q: "In constructions, you should…", o: ["Leave arcs visible", "Rub out arcs", "Use a protractor", "Estimate"], a: 0, e: "Examiners look for the arcs as evidence of the method." },
    { q: "Points within 2 m of a straight fence form…", o: ["A rounded rectangle (stadium)", "A circle", "A triangle", "A single line"], a: 0, e: "Parallel lines either side, with semicircles around each end." },
    { q: R`Scale \(1 : 200\). A 6 m wall on the drawing is…`, o: ["3 cm", "30 cm", "12 cm", "1.2 cm"], a: 0, e: R`\(600 \div 200 = 3\) cm.` }
  ],
  flashcards: [
    ["Perpendicular bisector", "Equidistant from two points"],
    ["Angle bisector", "Equidistant from two lines"],
    ["Fixed distance from a point", "Circle"],
    ["Fixed distance from a line", "Stadium shape"],
    [R`Map scale \(1 : n\)`, R`1 cm represents \(n\) cm`],
    ["Plan / elevation", "View from above / front or side"]
  ]
});

S2Data.add({
  id: "4f", group: 4, higher: true, title: "Circle theorems",
  summary: "The circle theorems, and proving them.",
  notes: R`
<h3>The theorems</h3>
<ol>
<li>The angle at the centre is <b>twice</b> the angle at the circumference standing on the same arc.</li>
<li>The angle in a <b>semicircle</b> is \(90^\circ\).</li>
<li>Angles in the <b>same segment</b> are equal.</li>
<li>Opposite angles of a <b>cyclic quadrilateral</b> add to \(180^\circ\).</li>
<li>A <b>tangent</b> meets a radius at \(90^\circ\).</li>
<li>Two tangents from an external point are <b>equal in length</b>.</li>
<li>The perpendicular from the centre to a chord <b>bisects</b> the chord.</li>
<li><b>Alternate segment theorem</b>: the angle between a tangent and a chord equals the angle in the alternate segment.</li>
</ol>
<p>Always state the theorem you used as your reason. Look for isosceles triangles made by two radii.</p>
<div class="box box-prac"><span class="box-title">Worked examples</span>
<ol><li>The angle at the circumference is \(38^\circ\). The angle at the centre on the same arc is \(2 \times 38^\circ = 76^\circ\) (angle at the centre is twice the angle at the circumference).</li>
<li>A cyclic quadrilateral has one angle of \(110^\circ\). The opposite angle is \(180^\circ - 110^\circ = 70^\circ\) (opposite angles in a cyclic quadrilateral add to \(180^\circ\)).</li></ol></div>
`,
  quiz: [
    { q: "The angle at the centre is ___ the angle at the circumference.", o: ["Twice", "Half", "Equal to", R`\(180^\circ\) minus`], a: 0, e: "Both angles must stand on the same arc." },
    { q: "Angle in a semicircle?", o: [R`\(90^\circ\)`, R`\(180^\circ\)`, R`\(45^\circ\)`, R`\(60^\circ\)`], a: 0, e: R`The angle at the centre is \(180^\circ\) (a straight line), and half of that is \(90^\circ\).` },
    { q: "Opposite angles in a cyclic quadrilateral…", o: [R`Add to \(180^\circ\)`, "Are equal", R`Add to \(360^\circ\)`, R`Add to \(90^\circ\)`], a: 0, e: "All four vertices must lie on the circle." },
    { q: "A tangent meets a radius at…", o: [R`\(90^\circ\)`, R`\(45^\circ\)`, R`\(180^\circ\)`, R`\(60^\circ\)`], a: 0, e: "At the point where the tangent touches the circle." },
    { q: "Angles in the same segment are…", o: ["Equal", "Supplementary", "Double", "Complementary"], a: 0, e: "They stand on the same chord, on the same side." },
    { q: R`Angle at the circumference is \(38^\circ\). Angle at the centre (same arc)?`, o: [R`\(76^\circ\)`, R`\(19^\circ\)`, R`\(38^\circ\)`, R`\(142^\circ\)`], a: 0, e: R`\(2 \times 38^\circ\).` },
    { q: "Two tangents from a point outside a circle are…", o: ["Equal in length", "Perpendicular", "Parallel", "Different lengths"], a: 0, e: "This makes a kite with the two radii." },
    { q: "The perpendicular from the centre to a chord…", o: ["Bisects the chord", "Is a tangent", "Equals the radius", "Doubles the chord"], a: 0, e: "It cuts the chord into two equal halves." },
    { q: R`A cyclic quadrilateral has one angle of \(110^\circ\). The opposite angle?`, o: [R`\(70^\circ\)`, R`\(110^\circ\)`, R`\(250^\circ\)`, R`\(55^\circ\)`], a: 0, e: R`\(180 - 110 = 70\).` }
  ],
  flashcards: [
    ["Centre vs circumference", "Angle at centre = 2 × angle at circumference"],
    ["Semicircle", R`Angle = \(90^\circ\)`],
    ["Same segment", "Angles equal"],
    ["Cyclic quadrilateral", R`Opposite angles add to \(180^\circ\)`],
    ["Tangent and radius", R`Meet at \(90^\circ\)`],
    ["Two tangents from a point", "Equal length"],
    ["Perpendicular to a chord", "Bisects it"],
    ["Alternate segment theorem", "Tangent–chord angle = angle in the alternate segment"]
  ]
});

S2Data.add({
  id: "4g", group: 4, title: "Vectors",
  summary: "Column vectors, vector arithmetic and vector geometry proofs.",
  notes: R`
<h3>Column vectors</h3>
<p>\(\begin{pmatrix}3\\-2\end{pmatrix}\) means 3 right and 2 down. Add or subtract component by component; multiply by a number (a scalar) by multiplying each component.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(\mathbf a = \begin{pmatrix}2\\1\end{pmatrix}\), \(\mathbf b = \begin{pmatrix}-1\\3\end{pmatrix}\).
<ol><li>\(\mathbf a + \mathbf b = \begin{pmatrix}2 + (-1)\\1 + 3\end{pmatrix} = \begin{pmatrix}1\\4\end{pmatrix}\).</li>
<li>\(2\mathbf a - \mathbf b = \begin{pmatrix}4\\2\end{pmatrix} - \begin{pmatrix}-1\\3\end{pmatrix} = \begin{pmatrix}5\\-1\end{pmatrix}\).</li></ol></div>
<p>Magnitude (Higher), by Pythagoras: \(\left|\begin{pmatrix}3\\4\end{pmatrix}\right| = \sqrt{3^2 + 4^2} = 5\).</p>
<h3>Vector geometry</h3>
<ul>
<li>To go from A to B, follow any route: \(\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB} = -\mathbf a + \mathbf b = \mathbf b - \mathbf a\).</li>
<li>Parallel vectors are multiples of each other: \(3\mathbf a + 6\mathbf b = 3(\mathbf a + 2\mathbf b)\), so it's parallel to \(\mathbf a + 2\mathbf b\).</li>
<li>If M is the midpoint of AB, then \(\overrightarrow{AM} = \tfrac12\overrightarrow{AB}\).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: proving collinearity</span>Points P, Q and R lie on a straight line if \(\overrightarrow{PQ}\) and \(\overrightarrow{QR}\) are multiples of each other <b>and</b> share a point (Q).<br>If \(\overrightarrow{PQ} = \mathbf a + 2\mathbf b\) and \(\overrightarrow{QR} = 3\mathbf a + 6\mathbf b = 3(\mathbf a + 2\mathbf b)\), then \(\overrightarrow{QR} = 3\overrightarrow{PQ}\): parallel, sharing Q, so P, Q, R are collinear.</div>
`,
  quiz: [
    { q: R`\(\begin{pmatrix}2\\1\end{pmatrix} + \begin{pmatrix}-1\\3\end{pmatrix} = \ ?\)`, o: [R`\(\begin{pmatrix}1\\4\end{pmatrix}\)`, R`\(\begin{pmatrix}3\\4\end{pmatrix}\)`, R`\(\begin{pmatrix}1\\-2\end{pmatrix}\)`, R`\(\begin{pmatrix}-2\\3\end{pmatrix}\)`], a: 0, e: R`Top: \(2 + (-1) = 1\). Bottom: \(1 + 3 = 4\).` },
    { q: R`\(3 \times \begin{pmatrix}2\\-1\end{pmatrix} = \ ?\)`, o: [R`\(\begin{pmatrix}6\\-3\end{pmatrix}\)`, R`\(\begin{pmatrix}5\\2\end{pmatrix}\)`, R`\(\begin{pmatrix}6\\3\end{pmatrix}\)`, R`\(\begin{pmatrix}2\\-3\end{pmatrix}\)`], a: 0, e: "Multiply both components by 3." },
    { q: R`If \(\overrightarrow{OA} = \mathbf a\) and \(\overrightarrow{OB} = \mathbf b\), \(\overrightarrow{AB} = \ ?\)`, o: [R`\(\mathbf b - \mathbf a\)`, R`\(\mathbf a - \mathbf b\)`, R`\(\mathbf a + \mathbf b\)`, R`\(-\mathbf a - \mathbf b\)`], a: 0, e: R`A to O is \(-\mathbf a\), then O to B is \(\mathbf b\).` },
    { q: R`Which is parallel to \(\mathbf a + 2\mathbf b\)?`, o: [R`\(3\mathbf a + 6\mathbf b\)`, R`\(\mathbf a + 3\mathbf b\)`, R`\(2\mathbf a + \mathbf b\)`, R`\(\mathbf a - 2\mathbf b\)`], a: 0, e: R`\(3\mathbf a + 6\mathbf b = 3(\mathbf a + 2\mathbf b)\).` },
    { q: R`Higher: magnitude of \(\begin{pmatrix}3\\4\end{pmatrix}\)?`, o: ["5", "7", "25", "12"], a: 0, e: R`\(\sqrt{9 + 16} = 5\).` },
    { q: R`M is the midpoint of AB. \(\overrightarrow{AM} = \ ?\)`, o: [R`\(\frac12\overrightarrow{AB}\)`, R`\(2\overrightarrow{AB}\)`, R`\(\overrightarrow{AB}\)`, R`\(-\overrightarrow{AB}\)`], a: 0, e: "Halfway along, in the same direction." },
    { q: R`\(\begin{pmatrix}5\\2\end{pmatrix} - \begin{pmatrix}3\\-1\end{pmatrix} = \ ?\)`, o: [R`\(\begin{pmatrix}2\\3\end{pmatrix}\)`, R`\(\begin{pmatrix}2\\1\end{pmatrix}\)`, R`\(\begin{pmatrix}8\\1\end{pmatrix}\)`, R`\(\begin{pmatrix}-2\\3\end{pmatrix}\)`], a: 0, e: R`Bottom: \(2 - (-1) = 3\).` },
    { q: "Higher: to prove collinearity, show two vectors are…", o: ["Multiples of each other and share a point", "Perpendicular", "Equal magnitude", "Opposite"], a: 0, e: "Parallel alone isn't enough: parallel lines don't have to be the same line." },
    { q: R`The vector \(\begin{pmatrix}0\\-4\end{pmatrix}\) moves…`, o: ["4 down", "4 up", "4 left", "4 right"], a: 0, e: "The bottom number is vertical; negative means down." }
  ],
  flashcards: [
    [R`Column vector \(\begin{pmatrix}x\\y\end{pmatrix}\)`, R`\(x\) across, \(y\) up`],
    ["Adding vectors", "Add components"],
    [R`\(\overrightarrow{AB}\) from O`, R`\(\overrightarrow{AB} = \mathbf b - \mathbf a\)`],
    ["Parallel vectors", "One is a multiple of the other"],
    ["Midpoint", R`\(\overrightarrow{AM} = \frac12\overrightarrow{AB}\)`],
    ["Magnitude (Higher)", R`\(\sqrt{x^2 + y^2}\)`],
    ["Collinear (Higher)", "Parallel vectors sharing a point"]
  ]
});

S2Data.add({
  id: "4h", group: 4, higher: true, title: "Sine rule, cosine rule and area of a triangle",
  summary: "Trigonometry in non-right-angled triangles.",
  notes: R`
<h3>Labelling</h3>
<p>Side \(a\) is opposite angle \(A\), side \(b\) is opposite \(B\), and side \(c\) is opposite \(C\).</p>
<h3>Sine rule</h3>
<p>\[\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}\]</p>
<p>Use it when you know a side <b>and</b> its opposite angle (a matching pair).</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(A = 40^\circ\), \(a = 8\), \(B = 65^\circ\). Find \(b\).
<ol><li>\(\dfrac{b}{\sin 65^\circ} = \dfrac{8}{\sin 40^\circ}\).</li>
<li>\(b = \dfrac{8\sin 65^\circ}{\sin 40^\circ} = 11.3\) (3 s.f.).</li></ol></div>
<h3>Cosine rule</h3>
<p>\[a^2 = b^2 + c^2 - 2bc\cos A\]</p>
<p>Use it with two sides and the angle between them, or with all three sides, rearranged:</p>
<p>\[\cos A = \frac{b^2 + c^2 - a^2}{2bc}\]</p>
<div class="box box-prac"><span class="box-title">Worked example</span>\(b = 5\), \(c = 7\), \(A = 60^\circ\). Find \(a\).
<ol><li>\(a^2 = 5^2 + 7^2 - 2(5)(7)\cos 60^\circ = 25 + 49 - 70 \times 0.5\).</li>
<li>\(a^2 = 74 - 35 = 39\).</li>
<li>\(a = \sqrt{39} = 6.24\) (3 s.f.).</li></ol>
If \(A = 90^\circ\), \(\cos A = 0\) and the cosine rule becomes Pythagoras.</div>
<h3>Area of a triangle</h3>
<p>\[\text{Area} = \tfrac12 ab\sin C\]</p>
<p>using two sides and the angle between them. E.g. sides 6 and 8 with a \(30^\circ\) angle between: \(\frac12 \times 6 \times 8 \times \sin 30^\circ = 12\).</p>
`,
  quiz: [
    { q: "The sine rule is…", o: [R`\(\dfrac{a}{\sin A} = \dfrac{b}{\sin B}\)`, R`\(a^2 = b^2 + c^2 - 2bc\cos A\)`, R`\(\frac12 ab\sin C\)`, R`\(\sin A = \frac{O}{H}\)`], a: 0, e: "Each side divided by the sine of its opposite angle gives the same value." },
    { q: "Use the cosine rule when you know…", o: ["Two sides and the included angle", "Two angles and a side", "One side only", "A right angle"], a: 0, e: "Or all three sides, to find an angle." },
    { q: R`Area of a triangle with sides 6 and 8, included angle \(30^\circ\)?`, o: ["12", "24", "48", "6"], a: 0, e: R`\(\frac12 \times 6 \times 8 \times 0.5\).` },
    { q: R`\(b = 5\), \(c = 7\), \(A = 60^\circ\). \(a^2 = \ ?\)`, o: ["39", "74", "109", "35"], a: 0, e: R`\(25 + 49 - 70\cos 60^\circ = 74 - 35\).` },
    { q: R`Side \(a\) is opposite…`, o: [R`Angle \(A\)`, R`Angle \(B\)`, R`Angle \(C\)`, "The right angle"], a: 0, e: "Lower-case side, capital opposite angle." },
    { q: "To find an angle from three sides, use…", o: ["The cosine rule", "The sine rule", "Pythagoras only", "Area formula"], a: 0, e: "There's no matching side–angle pair yet, so the sine rule can't start." },
    { q: R`Rearranged cosine rule: \(\cos A = \ ?\)`, o: [R`\(\dfrac{b^2 + c^2 - a^2}{2bc}\)`, R`\(\dfrac{a^2 - b^2 - c^2}{2bc}\)`, R`\(\dfrac{b^2 + c^2}{2a}\)`, R`\(\dfrac{a}{2bc}\)`], a: 0, e: R`Move \(2bc\cos A\) to one side and \(a^2\) to the other.` },
    { q: "Which formula needs a matching side–angle pair?", o: ["Sine rule", "Cosine rule", "Area formula", "Pythagoras"], a: 0, e: R`It links \(a\) with \(A\), \(b\) with \(B\), and so on.` },
    { q: R`If \(A = 90^\circ\), the cosine rule becomes…`, o: ["Pythagoras' theorem", "The sine rule", R`Area \(= \frac12 bh\)`, "Nothing useful"], a: 0, e: R`\(\cos 90^\circ = 0\), leaving \(a^2 = b^2 + c^2\).` }
  ],
  flashcards: [
    ["Sine rule", R`\(\dfrac{a}{\sin A} = \dfrac{b}{\sin B} = \dfrac{c}{\sin C}\)`],
    ["When to use the sine rule", "Matching side–angle pair known"],
    ["Cosine rule", R`\(a^2 = b^2 + c^2 - 2bc\cos A\)`],
    ["When to use the cosine rule", "SAS or SSS"],
    ["Finding an angle (cosine)", R`\(\cos A = \dfrac{b^2 + c^2 - a^2}{2bc}\)`],
    ["Area of any triangle", R`\(\frac12 ab\sin C\)`]
  ]
});

S2Data.detail("4a", { mistakes: ["Giving reasons like 'Z angles' or 'F angles'. Write 'alternate angles' and 'corresponding angles'."], tips: ["For polygon questions, find the exterior angle first: it's easier."], fact: "Honeybees build hexagonal cells because hexagons tile with the least wall for the most space." });
S2Data.detail("4b", { mistakes: ["Using the slant height instead of the perpendicular height for a triangle's area or a cone's volume."], tips: [R`Leave answers in terms of \(\pi\) when the question asks; it's exact.`], fact: R`Archimedes asked for a sphere inside a cylinder on his tombstone: the sphere has exactly \(\frac23\) of the cylinder's volume.` });
S2Data.detail("4c", { mistakes: ["Calculator in radians mode. Check it shows D (degrees)."], tips: ["Label O, A and H from the angle you're using before choosing a ratio."], fact: "The 3-4-5 triangle was used by ancient Egyptian builders to make right angles with a knotted rope." });
S2Data.detail("4d", { mistakes: ["Describing a combination of transformations. Questions ask for a single transformation."], tips: ["Use tracing paper for rotations: it's allowed in the exam."], fact: "Fractals, like the Koch snowflake, are made of smaller copies of themselves: self-similarity." });
S2Data.detail("4e", { mistakes: ["Rubbing out construction arcs. They show your method and earn the marks."], tips: ["Keep the compass width the same for both arcs in a bisector."], fact: "Ancient Greek mathematicians proved you can't trisect every angle with only ruler and compasses." });
S2Data.detail("4f", { mistakes: ["Applying the cyclic quadrilateral theorem when one vertex isn't on the circle."], tips: ["Mark every radius: they make isosceles triangles, which unlock most questions."], fact: "Thales of Miletus is credited with proving the angle in a semicircle is 90°, around 600 BCE." });
S2Data.detail("4g", { mistakes: [R`Writing \(\overrightarrow{AB} = \mathbf a - \mathbf b\). Going from A to B is \(-\mathbf a + \mathbf b\).`], tips: [R`Write out the route you're taking: \(\overrightarrow{AB} = \overrightarrow{AO} + \overrightarrow{OB}\).`], fact: "Vectors are used in video games to calculate how characters and light move." });
S2Data.detail("4h", { mistakes: [R`Using the cosine rule but working out \(b^2 + c^2 - 2bc\) first, then multiplying by \(\cos A\). Do \(2bc\cos A\) first, then subtract.`], tips: ["Pair up each side with its opposite angle to decide which rule to use."], fact: "Surveyors used triangulation with the sine rule to map Britain in the Great Trigonometrical Survey." });
