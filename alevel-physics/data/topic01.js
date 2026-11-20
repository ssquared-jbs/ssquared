/* A-level Physics² — Topics 1–2: Working as a physicist, Mechanics */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "Units, uncertainties and graphs",
  summary: "SI base units, prefixes, estimation, uncertainties and getting physics from straight-line graphs.",
  notes: `
<h3>SI base units</h3>
<table>
<tr><th>Quantity</th><th>Unit</th></tr>
<tr><td>Mass</td><td>kilogram, kg</td></tr>
<tr><td>Length</td><td>metre, m</td></tr>
<tr><td>Time</td><td>second, s</td></tr>
<tr><td>Current</td><td>ampere, A</td></tr>
<tr><td>Temperature</td><td>kelvin, K</td></tr>
<tr><td>Amount of substance</td><td>mole, mol</td></tr>
</table>
<p>All other units are <b>derived</b> from these. For example, the newton: F = ma, so 1 N = 1 kg m s<sup>−2</sup>. The joule: 1 J = 1 N m = 1 kg m<sup>2</sup> s<sup>−2</sup>. Checking that both sides of an equation have the same base units shows it is <b>homogeneous</b> (a necessary, but not sufficient, check that it's correct).</p>
<h3>Prefixes</h3>
<p>p (10<sup>−12</sup>), n (10<sup>−9</sup>), μ (10<sup>−6</sup>), m (10<sup>−3</sup>), k (10<sup>3</sup>), M (10<sup>6</sup>), G (10<sup>9</sup>), T (10<sup>12</sup>).</p>
<h3>Scalars and vectors</h3>
<ul>
<li><b>Scalars</b> have magnitude only: mass, distance, speed, energy, time.</li>
<li><b>Vectors</b> have magnitude and direction: displacement, velocity, acceleration, force, momentum.</li>
<li>Add vectors by drawing them tip-to-tail (scale drawing) or using Pythagoras and trigonometry for perpendicular vectors.</li>
<li><b>Resolving</b>: a vector F at angle θ to the horizontal has components F cos θ (horizontal) and F sin θ (vertical).</li>
</ul>
<h3>Uncertainties</h3>
<ul>
<li><b>Random errors</b> cause scatter; reduce by repeating and averaging. <b>Systematic errors</b> shift every reading the same way (e.g. zero error); repeats don't remove them.</li>
<li>Uncertainty of a reading is usually ± half the smallest division; of a repeated mean, ± half the range.</li>
<li>% uncertainty = (uncertainty ÷ value) × 100.</li>
<li>Adding or subtracting quantities: <b>add absolute</b> uncertainties. Multiplying or dividing: <b>add percentage</b> uncertainties. Raising to a power n: <b>multiply % uncertainty by n</b>.</li>
</ul>
<div class="box box-key"><span class="box-title">Straight-line graphs</span>Rearrange into y = mx + c. For example, for v<sup>2</sup> = u<sup>2</sup> + 2as, plotting v<sup>2</sup> against s gives gradient 2a and intercept u<sup>2</sup>. For a power law y = kx<sup>n</sup>, plot log y against log x: the gradient is n.</div>
`,
  quiz: [
    { q: "Which is an SI base unit?", o: ["Ampere", "Newton", "Volt", "Joule"], a: 0, e: "" },
    { q: "Express the joule in base units.", o: ["kg m² s⁻²", "kg m s⁻²", "kg m² s⁻¹", "kg m⁻¹ s⁻²"], a: 0, e: "" },
    { q: "Which is a vector?", o: ["Momentum", "Speed", "Energy", "Mass"], a: 0, e: "" },
    { q: "A force of 20 N acts at 30° above the horizontal. Its vertical component is…", o: ["10 N", "17.3 N", "20 N", "11.5 N"], a: 0, e: "20 sin 30°." },
    { q: "Length 2.0 ± 0.1 m, width 1.0 ± 0.1 m. % uncertainty in area?", o: ["15%", "10%", "5%", "0.2%"], a: 0, e: "5% + 10%." },
    { q: "Radius has 2% uncertainty. % uncertainty in the area πr²?", o: ["4%", "2%", "1%", "8%"], a: 0, e: "" },
    { q: "Which error is reduced by repeating readings?", o: ["Random", "Systematic", "Zero error", "Calibration error"], a: 0, e: "" },
    { q: "To find n in y = kxⁿ, plot…", o: ["log y against log x", "y against x", "y against xⁿ", "log y against x"], a: 0, e: "" },
    { q: "1 GHz equals…", o: ["10⁹ Hz", "10⁶ Hz", "10¹² Hz", "10³ Hz"], a: 0, e: "" }
  ],
  flashcards: [
    ["Six SI base units (in this spec)", "kg, m, s, A, K, mol"],
    ["Newton in base units", "kg m s⁻²"],
    ["Scalar vs vector", "Magnitude only vs magnitude and direction"],
    ["Resolving force F at angle θ to horizontal", "Horizontal F cos θ, vertical F sin θ"],
    ["Combining uncertainties: add/subtract", "Add absolute uncertainties"],
    ["Combining uncertainties: multiply/divide", "Add percentage uncertainties"],
    ["Uncertainty in xⁿ", "n × % uncertainty in x"],
    ["Random vs systematic error", "Scatter (reduce by repeats) vs consistent shift (not removed by repeats)"],
    ["Log–log graph", "y = kxⁿ: gradient of log y vs log x is n"],
    ["Prefixes", "p 10⁻¹², n 10⁻⁹, μ 10⁻⁶, m 10⁻³, k 10³, M 10⁶, G 10⁹, T 10¹²"]
  ]
});

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Motion and projectiles",
  summary: "Displacement–time and velocity–time graphs, the suvat equations and projectile motion.",
  notes: `
<h3>Motion graphs</h3>
<ul>
<li><b>Displacement–time</b>: gradient = velocity.</li>
<li><b>Velocity–time</b>: gradient = acceleration; area under the graph = displacement.</li>
<li><b>Acceleration–time</b>: area = change in velocity.</li>
<li>For curves, use the gradient of a tangent at a point for the instantaneous value.</li>
</ul>
<h3>The suvat equations (uniform acceleration only)</h3>
<table>
<tr><td>v = u + at</td><td>s = ½(u + v)t</td></tr>
<tr><td>s = ut + ½at<sup>2</sup></td><td>v<sup>2</sup> = u<sup>2</sup> + 2as</td></tr>
</table>
<p>s = displacement, u = initial velocity, v = final velocity, a = acceleration, t = time. Choose a positive direction and stick to it. Free fall: a = g = 9.81 m s<sup>−2</sup> downwards.</p>
<p><b>Example</b>: a ball is dropped from 20 m. v<sup>2</sup> = 0 + 2 × 9.81 × 20, so v = <b>19.8 m s<sup>−1</sup></b>.</p>
<h3>Projectiles</h3>
<div class="box box-key"><span class="box-title">Treat horizontal and vertical separately</span>Horizontal: no force (ignoring air resistance), so constant velocity, s = u<sub>x</sub>t. Vertical: acceleration g downwards. The only quantity shared is <b>time</b>.</div>
<p>For launch speed u at angle θ: u<sub>x</sub> = u cos θ, u<sub>y</sub> = u sin θ.</p>
<p><b>Example</b>: a ball is kicked horizontally at 12 m s<sup>−1</sup> from a 1.8 m wall. Vertical: 1.8 = ½ × 9.81 × t<sup>2</sup>, t = 0.606 s. Horizontal range = 12 × 0.606 = <b>7.3 m</b>.</p>
<h3>Measuring g</h3>
<p>Drop a ball through light gates or use an electromagnet and timer. Measure t for several heights h, then plot h against t<sup>2</sup>: gradient = g/2. Sources of error: reaction time (if timed by hand), air resistance, delay in the magnet releasing.</p>
`,
  quiz: [
    { q: "What does the area under a velocity–time graph represent?", o: ["Displacement", "Acceleration", "Velocity", "Force"], a: 0, e: "" },
    { q: "A car accelerates from 10 to 30 m s⁻¹ in 4.0 s. Acceleration?", o: ["5.0 m s⁻²", "7.5 m s⁻²", "10 m s⁻²", "2.5 m s⁻²"], a: 0, e: "" },
    { q: "An object falls from rest for 3.0 s. Distance fallen (g = 9.81)?", o: ["44 m", "29 m", "88 m", "15 m"], a: 0, e: "½ × 9.81 × 9." },
    { q: "For a projectile (no air resistance), which stays constant?", o: ["Horizontal velocity", "Vertical velocity", "Speed", "Height"], a: 0, e: "" },
    { q: "At the top of its path, a projectile's vertical velocity is…", o: ["Zero", "Maximum", "Equal to horizontal velocity", "g"], a: 0, e: "" },
    { q: "Which suvat equation has no t?", o: ["v² = u² + 2as", "v = u + at", "s = ut + ½at²", "s = ½(u + v)t"], a: 0, e: "" },
    { q: "A ball is thrown at 20 m s⁻¹ at 30° above horizontal. Initial vertical velocity?", o: ["10 m s⁻¹", "17.3 m s⁻¹", "20 m s⁻¹", "11.5 m s⁻¹"], a: 0, e: "" },
    { q: "Gradient of a displacement–time graph gives…", o: ["Velocity", "Acceleration", "Distance", "Force"], a: 0, e: "" },
    { q: "Plotting h against t² for a falling object gives gradient…", o: ["g/2", "g", "2g", "1/g"], a: 0, e: "" }
  ],
  flashcards: [
    ["Gradient of s–t graph", "Velocity"],
    ["Gradient of v–t graph", "Acceleration"],
    ["Area under v–t graph", "Displacement"],
    ["suvat equations", "v = u + at; s = ut + ½at²; v² = u² + 2as; s = ½(u + v)t"],
    ["When can suvat be used?", "Only for uniform (constant) acceleration"],
    ["Projectile horizontal motion", "Constant velocity (no horizontal force)"],
    ["Projectile vertical motion", "Acceleration g downwards"],
    ["Link between horizontal and vertical", "Time"],
    ["Components of launch velocity", "uₓ = u cos θ, u_y = u sin θ"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Forces, Newton's laws and moments",
  summary: "Free-body diagrams, Newton's three laws, terminal velocity, moments and centre of gravity.",
  notes: `
<h3>Newton's laws</h3>
<ol>
<li><b>First law</b>: an object stays at rest or moves at constant velocity unless a resultant force acts on it.</li>
<li><b>Second law</b>: ΣF = ma (resultant force = mass × acceleration).</li>
<li><b>Third law</b>: if A exerts a force on B, B exerts an equal and opposite force on A. The pair are the <b>same type</b> of force and act on <b>different objects</b>.</li>
</ol>
<p>Weight W = mg. Draw <b>free-body diagrams</b> showing all forces on one object only, then resolve and apply ΣF = ma in each direction.</p>
<p><b>Example</b>: a 1200 kg car has a driving force of 3000 N and resistance of 600 N. a = (3000 − 600) ÷ 1200 = <b>2.0 m s<sup>−2</sup></b>.</p>
<h3>Inclined planes</h3>
<p>On a slope at angle θ, the weight resolves into mg sin θ <b>down the slope</b> and mg cos θ <b>into the slope</b> (balanced by the normal reaction).</p>
<h3>Terminal velocity</h3>
<p>A falling object speeds up, so drag increases. When drag + upthrust = weight, the resultant force is zero and it falls at constant <b>terminal velocity</b>.</p>
<h3>Moments</h3>
<ul>
<li>Moment = force × perpendicular distance from the pivot (N m).</li>
<li><b>Principle of moments</b>: for an object in equilibrium, sum of clockwise moments = sum of anticlockwise moments about any point.</li>
<li>For equilibrium, there must also be no resultant force.</li>
<li><b>Centre of gravity</b>: the point where the weight of an object can be taken to act. For a uniform object it is at the geometric centre.</li>
</ul>
<p><b>Example</b>: a uniform 2.0 m plank of weight 100 N rests on a pivot 0.5 m from one end. What force at that end balances it? Weight acts 0.5 m beyond the pivot: F × 0.5 = 100 × 0.5, so F = <b>100 N</b>.</p>
`,
  quiz: [
    { q: "Newton's first law says an object…", o: ["Keeps constant velocity unless a resultant force acts", "Always slows down", "Accelerates with constant force always", "Exerts an equal force back"], a: 0, e: "" },
    { q: "A 2.0 kg mass has a resultant force of 10 N. Acceleration?", o: ["5.0 m s⁻²", "20 m s⁻²", "0.2 m s⁻²", "12 m s⁻²"], a: 0, e: "" },
    { q: "A Newton's third law pair of forces…", o: ["Act on different objects and are the same type", "Act on the same object", "Are different types", "Always cancel out"], a: 0, e: "" },
    { q: "Component of weight down a slope at angle θ?", o: ["mg sin θ", "mg cos θ", "mg tan θ", "mg"], a: 0, e: "" },
    { q: "At terminal velocity, the resultant force is…", o: ["Zero", "Equal to weight", "Maximum", "Equal to drag"], a: 0, e: "" },
    { q: "A 30 N force acts 0.40 m from a pivot (perpendicular). Moment?", o: ["12 N m", "75 N m", "30 N m", "7.5 N m"], a: 0, e: "" },
    { q: "For equilibrium, an object needs…", o: ["No resultant force and no resultant moment", "Only no resultant force", "Only balanced moments", "To be at rest"], a: 0, e: "" },
    { q: "Centre of gravity is…", o: ["The point where the weight appears to act", "Always at the base", "Where the mass is largest", "The pivot"], a: 0, e: "" },
    { q: "Weight of a 65 kg person (g = 9.81)?", o: ["638 N", "65 N", "6.6 N", "650 kg"], a: 0, e: "" }
  ],
  flashcards: [
    ["Newton's first law", "Constant velocity (or rest) unless a resultant force acts"],
    ["Newton's second law", "ΣF = ma"],
    ["Newton's third law", "Equal and opposite forces, same type, on different objects"],
    ["Weight", "W = mg"],
    ["Weight on a slope", "mg sin θ down the slope; mg cos θ into it"],
    ["Terminal velocity", "Drag (+ upthrust) = weight; zero resultant force"],
    ["Moment", "Force × perpendicular distance from pivot (N m)"],
    ["Principle of moments", "Σ clockwise moments = Σ anticlockwise moments in equilibrium"],
    ["Centre of gravity", "Point where the whole weight can be taken to act"]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "Work, energy and power",
  summary: "Work done, kinetic and gravitational potential energy, conservation of energy, power and efficiency.",
  notes: `
<h3>Work done</h3>
<p><b>Work done = force × distance moved in the direction of the force</b>: W = FΔs. If the force is at angle θ to the motion, W = FΔs cos θ. Unit: joule (J). Work done = energy transferred.</p>
<h3>Kinetic and potential energy</h3>
<ul>
<li>Kinetic energy: E<sub>k</sub> = ½mv<sup>2</sup></li>
<li>Gravitational potential energy (near Earth's surface): ΔE<sub>grav</sub> = mgΔh</li>
<li>Conservation of energy: energy can't be created or destroyed, only transferred. For a falling object with no air resistance: mgΔh = ½mv<sup>2</sup>, so v = √(2gΔh), independent of mass.</li>
</ul>
<p><b>Example</b>: a 0.50 kg ball is thrown up at 8.0 m s<sup>−1</sup>. Max height: ½v<sup>2</sup> = gh, h = 64 ÷ (2 × 9.81) = <b>3.3 m</b>.</p>
<h3>Power and efficiency</h3>
<div class="box box-key"><span class="box-title">Power</span>P = E/t = W/t (watts). For a force moving an object at constant velocity: <b>P = Fv</b>.</div>
<p>Efficiency = useful energy (or power) output ÷ total energy (or power) input. Multiply by 100 for a percentage.</p>
<p><b>Example</b>: a motor lifts a 50 kg load 6.0 m in 12 s. Useful power = 50 × 9.81 × 6.0 ÷ 12 = 245 W. If the input power is 400 W, efficiency = 245 ÷ 400 = <b>61%</b>.</p>
`,
  quiz: [
    { q: "A 50 N force pushes a box 4.0 m in the force's direction. Work done?", o: ["200 J", "12.5 J", "54 J", "0.08 J"], a: 0, e: "" },
    { q: "A force of 10 N at 60° to the motion moves an object 5.0 m. Work done?", o: ["25 J", "50 J", "43 J", "10 J"], a: 0, e: "10 × 5 × cos 60°." },
    { q: "KE of a 2.0 kg mass at 3.0 m s⁻¹?", o: ["9.0 J", "6.0 J", "18 J", "3.0 J"], a: 0, e: "" },
    { q: "GPE gained by a 10 kg mass raised 2.0 m?", o: ["196 J", "20 J", "98 J", "49 J"], a: 0, e: "" },
    { q: "Speed after falling 5.0 m from rest (no drag)?", o: ["9.9 m s⁻¹", "49 m s⁻¹", "7.0 m s⁻¹", "98 m s⁻¹"], a: 0, e: "√(2 × 9.81 × 5)." },
    { q: "A car's engine provides 2000 N at 25 m s⁻¹. Power?", o: ["50 kW", "80 W", "2.0 kW", "12.5 kW"], a: 0, e: "P = Fv." },
    { q: "Efficiency of a device with 300 J input and 240 J useful output?", o: ["80%", "125%", "60%", "20%"], a: 0, e: "" },
    { q: "Unit of power?", o: ["Watt", "Joule", "Newton", "Volt"], a: 0, e: "" },
    { q: "Doubling speed changes kinetic energy by a factor of…", o: ["4", "2", "8", "½"], a: 0, e: "" }
  ],
  flashcards: [
    ["Work done", "W = FΔs (force × distance in direction of force)"],
    ["Work done at angle θ", "W = FΔs cos θ"],
    ["Kinetic energy", "Eₖ = ½mv²"],
    ["Change in GPE", "ΔE = mgΔh"],
    ["Speed after falling h (no drag)", "v = √(2gh)"],
    ["Power", "P = E/t = W/t"],
    ["Power of a moving force", "P = Fv"],
    ["Efficiency", "Useful output ÷ total input"],
    ["Conservation of energy", "Energy is transferred, never created or destroyed"]
  ]
});

S2Data.detail("1a", { mistakes: ["Rounding mid-calculation, then losing a mark for the final significant figures.", "Adding absolute uncertainties when multiplying. Use percentages."], tips: ["Give your final answer to the same number of significant figures as the least precise data."], fact: "The kilogram was redefined in 2019 using the Planck constant, replacing a metal cylinder kept in Paris since 1889." });
S2Data.detail("2a", { mistakes: ["Using suvat when acceleration isn't constant.", "Mixing signs: if up is positive, g is −9.81 m s<sup>−2</sup>."], tips: ["Write out s, u, v, a, t and fill in the three you know before picking an equation."], fact: "On the Moon, Apollo 15's David Scott dropped a hammer and a feather together. They landed at the same time." });
S2Data.detail("2b", { mistakes: ["Calling weight and normal reaction a Newton's third law pair. They act on the same object, so they aren't."], tips: ["Always draw a free-body diagram before writing ΣF = ma. Resolve along and perpendicular to the motion."], fact: "A skydiver's terminal velocity is about 55 m s<sup>−1</sup> spread-eagled, but over 90 m s<sup>−1</sup> head-down." });
S2Data.detail("2c", { mistakes: ["Forgetting the cos θ when a force acts at an angle.", "Using total height instead of change in height for GPE."], tips: ["Energy questions are often quicker than suvat. If you only need a speed or height, try energy first."], fact: "A lightning bolt transfers around a billion joules, but in just a few tens of microseconds." });
