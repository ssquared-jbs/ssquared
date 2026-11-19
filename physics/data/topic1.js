/* Topic 1 — Forces and motion (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "1a", group: 1, title: "Movement and position",
  summary: "Speed, velocity, acceleration, and distance–time and velocity–time graphs.",
  notes: `
<h3>Units to know</h3>
<table>
<tr><th>Quantity</th><th>Unit</th></tr>
<tr><td>Distance</td><td>metre (m)</td></tr>
<tr><td>Time</td><td>second (s)</td></tr>
<tr><td>Speed, velocity</td><td>metres per second (m/s)</td></tr>
<tr><td>Acceleration</td><td>metres per second squared (m/s<sup>2</sup>)</td></tr>
<tr><td>Force</td><td>newton (N)</td></tr>
<tr><td>Mass</td><td>kilogram (kg)</td></tr>
</table>
<h3>Speed and velocity</h3>
<div class="eq">average speed = distance moved ÷ time taken</div>
<ul>
<li><b>Speed</b> is a scalar: it has size only.</li>
<li><b>Velocity</b> is a vector: it is speed in a given direction. A car going round a bend at a steady speed has a changing velocity.</li>
</ul>
<h3>Distance–time graphs</h3>
<ul>
<li>The <b>gradient</b> is the speed.</li>
<li>A horizontal line means the object is stationary. A straight sloping line means a constant speed. A curve means the object is accelerating or decelerating.</li>
</ul>
<h3>Acceleration</h3>
<div class="eq">acceleration = change in velocity ÷ time taken &nbsp;&nbsp; a = (v − u) ÷ t</div>
<p>u is the initial velocity and v is the final velocity. A negative acceleration is a deceleration.</p>
<div class="eq">(final speed)<sup>2</sup> = (initial speed)<sup>2</sup> + 2 × acceleration × distance &nbsp;&nbsp; v<sup>2</sup> = u<sup>2</sup> + 2as</div>
<h3>Velocity–time graphs</h3>
<ul>
<li>The <b>gradient</b> is the acceleration.</li>
<li>The <b>area under the graph</b> is the distance travelled. Split it into rectangles and triangles.</li>
<li>A horizontal line means a constant velocity.</li>
</ul>
<div class="box box-key"><span class="box-title">Worked example</span>A car speeds up from 10 m/s to 30 m/s in 8 s.<br>a = (30 − 10) ÷ 8 = <b>2.5 m/s<sup>2</sup></b>. Distance = area of trapezium = ½ × (10 + 30) × 8 = <b>160 m</b>.</div>
<div class="box box-prac"><span class="box-title">🔬 Practical: investigate the motion of everyday objects</span>Measure the distance with a metre rule or tape measure, and the time with a stopwatch or light gates. Light gates reduce human reaction-time error. Calculate speed = distance ÷ time.</div>
`,
  flashcards: [
    ["Equation for average speed", "average speed = distance moved ÷ time taken"],
    ["Difference between speed and velocity", "Velocity has a direction (vector); speed doesn't (scalar)"],
    ["Equation for acceleration", "a = (v − u) ÷ t"],
    ["Unit of acceleration", "m/s<sup>2</sup>"],
    ["Gradient of a distance–time graph", "Speed"],
    ["Gradient of a velocity–time graph", "Acceleration"],
    ["Area under a velocity–time graph", "Distance travelled"],
    ["v<sup>2</sup> = u<sup>2</sup> + 2as: what is s?", "The distance travelled (m)"],
    ["Why use light gates instead of a stopwatch?", "They remove human reaction-time error"]
  ],
  quiz: [
    { q: "A runner covers 400 m in 80 s. What is her average speed?", o: ["5 m/s", "0.2 m/s", "320 m/s", "480 m/s"], a: 0, e: "400 ÷ 80 = 5 m/s" },
    { q: "What does the gradient of a distance–time graph show?", o: ["Speed", "Acceleration", "Distance", "Force"], a: 0, e: "" },
    { q: "A car goes from 0 to 20 m/s in 4 s. What is its acceleration?", o: ["5 m/s²", "80 m/s²", "0.2 m/s²", "24 m/s²"], a: 0, e: "20 ÷ 4 = 5 m/s²" },
    { q: "What does the area under a velocity–time graph show?", o: ["Distance travelled", "Acceleration", "Speed", "Time"], a: 0, e: "" },
    { q: "Which is a vector quantity?", o: ["Velocity", "Speed", "Distance", "Time"], a: 0, e: "" },
    { q: "A flat horizontal line on a distance–time graph means…", o: ["The object is stationary", "Constant speed", "Constant acceleration", "Deceleration"], a: 0, e: "" },
    { q: "An object starts at rest and accelerates at 2 m/s² for 9 m. What is its final speed? (v² = u² + 2as)", o: ["6 m/s", "36 m/s", "18 m/s", "4.5 m/s"], a: 0, e: "v² = 0 + 2 × 2 × 9 = 36, so v = 6 m/s" },
    { q: "A cyclist slows from 12 m/s to 4 m/s in 4 s. What is the acceleration?", o: ["−2 m/s²", "2 m/s²", "−4 m/s²", "4 m/s²"], a: 0, e: "(4 − 12) ÷ 4 = −2 m/s²" }
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Forces and motion",
  summary: "Types of force, resultant forces, Newton's laws, weight, friction and stopping distances.",
  notes: `
<h3>Forces</h3>
<ul>
<li>A force can change an object's speed, direction or shape.</li>
<li>Forces are <b>vectors</b>: they have size and direction.</li>
<li>Types of force include gravitational (weight), electrostatic, magnetic, thrust, drag (air resistance), friction, upthrust, tension and normal reaction.</li>
<li><b>Friction</b> acts in the opposite direction to motion.</li>
</ul>
<h3>Resultant force</h3>
<p>The <b>resultant force</b> is the single force that has the same effect as all the forces acting together. For forces along a line, add those in one direction and subtract those in the other.</p>
<ul>
<li>Resultant force = 0: the object stays at rest, or keeps moving at a constant velocity.</li>
<li>Resultant force ≠ 0: the object accelerates in the direction of the resultant force.</li>
</ul>
<h3>Force, mass and acceleration</h3>
<div class="eq">force = mass × acceleration &nbsp;&nbsp; F = m × a</div>
<div class="eq">weight = mass × gravitational field strength &nbsp;&nbsp; W = m × g</div>
<p>On Earth, g = 10 N/kg. Mass (kg) is the amount of matter and doesn't change. Weight (N) is a force and depends on g.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: Newton's third law</span>Whenever two bodies interact, the forces they exert on each other are <b>equal in size and opposite in direction</b>, and act on <b>different</b> objects.</div>
<h3>Falling objects and terminal velocity</h3>
<ol>
<li>At first, weight is bigger than air resistance, so the object accelerates.</li>
<li>As speed increases, air resistance increases.</li>
<li>Eventually air resistance = weight. The resultant force is zero, so the object moves at a constant <b>terminal velocity</b>.</li>
</ol>
<p>Opening a parachute increases the air resistance, so the skydiver decelerates to a new, lower terminal velocity.</p>
<h3>Stopping distance</h3>
<div class="eq">stopping distance = thinking distance + braking distance</div>
<ul>
<li><b>Thinking distance</b> increases with speed, tiredness, alcohol, drugs and distractions, because these increase reaction time.</li>
<li><b>Braking distance</b> increases with speed, mass, worn brakes or tyres, and wet or icy roads.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: how mass affects acceleration</span>Use a trolley on a ramp tilted to compensate for friction, pulled by a constant force (a falling mass). Add masses to the trolley and measure the acceleration with light gates. Heavier trolley, smaller acceleration (F = ma).</div>
`,
  flashcards: [
    ["Resultant force", "The single force with the same effect as all the forces acting together"],
    ["What happens if the resultant force is zero?", "The object stays at rest or moves at constant velocity"],
    ["Equation linking force, mass and acceleration", "F = m × a"],
    ["Equation for weight", "W = m × g"],
    ["Value of g on Earth", "10 N/kg"],
    ["Terminal velocity", "Constant velocity reached when drag equals weight (resultant force zero)"],
    ["Stopping distance", "Thinking distance + braking distance"],
    ["Factors increasing thinking distance", "Speed, tiredness, alcohol, drugs, distractions"],
    ["Factors increasing braking distance", "Speed, mass, worn brakes/tyres, wet or icy road"],
    ["Newton's third law (Paper 2)", "Interacting objects exert equal and opposite forces on each other"]
  ],
  quiz: [
    { q: "A 1200 kg car accelerates at 2 m/s². What is the resultant force?", o: ["2400 N", "600 N", "1202 N", "0.0017 N"], a: 0, e: "F = ma = 1200 × 2" },
    { q: "What is the weight of a 50 kg student on Earth? (g = 10 N/kg)", o: ["500 N", "50 N", "5 N", "50 kg"], a: 0, e: "" },
    { q: "Forces of 30 N to the right and 20 N to the left act on a box. What is the resultant force?", o: ["10 N to the right", "50 N to the right", "10 N to the left", "0 N"], a: 0, e: "" },
    { q: "A skydiver is falling at terminal velocity. Which is true?", o: ["Air resistance equals weight", "Air resistance is greater than weight", "Weight is zero", "She is accelerating"], a: 0, e: "" },
    { q: "Which increases thinking distance?", o: ["Drinking alcohol", "Icy roads", "Worn tyres", "Worn brakes"], a: 0, e: "The others increase braking distance." },
    { q: "What happens to a moving object when the resultant force on it is zero?", o: ["It continues at constant velocity", "It stops immediately", "It accelerates", "It falls"], a: 0, e: "" },
    { q: "What is the unit of force?", o: ["Newton", "Kilogram", "Joule", "Watt"], a: 0, e: "" },
    { q: "Why does a skydiver slow down when the parachute opens?", o: ["Air resistance becomes greater than weight", "Weight increases", "Gravity switches off", "Mass decreases"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Momentum", paper2: true,
  summary: "Momentum, conservation of momentum, force and rate of change of momentum, and safety features.",
  notes: `
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Momentum</h3>
<div class="eq">momentum = mass × velocity &nbsp;&nbsp; p = m × v</div>
<ul>
<li>Unit: kilogram metres per second (kg m/s).</li>
<li>Momentum is a vector, so direction matters. Take one direction as positive and the other as negative.</li>
</ul>
<h3>Conservation of momentum</h3>
<p>In a collision or explosion, the <b>total momentum before = total momentum after</b>, as long as no external forces act.</p>
<div class="box box-key"><span class="box-title">Worked example</span>A 2 kg trolley at 3 m/s hits a stationary 1 kg trolley and they stick together.<br>Momentum before = 2 × 3 = 6 kg m/s. After: 6 = (2 + 1) × v, so v = <b>2 m/s</b>.</div>
<h3>Force and change of momentum</h3>
<div class="eq">force = change in momentum ÷ time taken &nbsp;&nbsp; F = (mv − mu) ÷ t</div>
<p>If the momentum changes over a <b>longer time</b>, the force is <b>smaller</b>. That's how safety features work:</p>
<ul>
<li><b>Crumple zones</b>, <b>airbags</b> and <b>seat belts</b> increase the time taken for a person's momentum to fall to zero, which reduces the force on them.</li>
<li>Helmets, crash mats and soft playground surfaces work the same way.</li>
</ul>
`,
  flashcards: [
    ["Equation for momentum", "p = m × v"],
    ["Unit of momentum", "kg m/s"],
    ["Conservation of momentum", "Total momentum before = total momentum after (no external forces)"],
    ["Force and momentum equation", "F = (mv − mu) ÷ t"],
    ["How do crumple zones reduce injury?", "They increase the time for momentum to change, so the force is smaller"],
    ["Is momentum a vector or a scalar?", "Vector"]
  ],
  quiz: [
    { q: "What is the momentum of a 60 kg runner moving at 5 m/s?", o: ["300 kg m/s", "12 kg m/s", "65 kg m/s", "0.083 kg m/s"], a: 0, e: "60 × 5" },
    { q: "Why do airbags reduce injuries?", o: ["They increase the time taken to stop, reducing the force", "They reduce the person's mass", "They increase the person's momentum", "They stop the car faster"], a: 0, e: "" },
    { q: "A 1000 kg car's momentum changes by 20 000 kg m/s in 0.5 s. What is the average force?", o: ["40 000 N", "10 000 N", "20 000 N", "2 N"], a: 0, e: "20 000 ÷ 0.5" },
    { q: "A 3 kg ball moving at 4 m/s hits a stationary 1 kg ball and stops. How fast does the 1 kg ball move?", o: ["12 m/s", "4 m/s", "3 m/s", "1.3 m/s"], a: 0, e: "12 kg m/s before = 1 × v after" },
    { q: "When is momentum conserved?", o: ["When no external forces act", "Only in explosions", "Only when objects stick together", "Never"], a: 0, e: "" },
    { q: "Two skaters at rest push apart. What is their total momentum afterwards?", o: ["Zero", "Doubled", "Equal to their weight", "It depends on friction only"], a: 0, e: "It was zero before, so it is zero after: their momenta are equal and opposite." }
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Moments, springs and stretching",
  summary: "Moments, the principle of moments, centre of gravity, Hooke's law and elastic behaviour.",
  notes: `
<h3>Moments</h3>
<div class="eq">moment = force × perpendicular distance from the pivot</div>
<ul>
<li>Unit: newton metre (N m).</li>
<li>A moment is the turning effect of a force. A longer spanner gives a bigger moment for the same force.</li>
</ul>
<h3>Principle of moments</h3>
<p>For an object in equilibrium (balanced), <b>the sum of clockwise moments = the sum of anticlockwise moments</b>, and the upward forces equal the downward forces.</p>
<div class="box box-key"><span class="box-title">Worked example</span>A 400 N child sits 1.5 m from the pivot of a seesaw. Where must a 300 N child sit to balance it?<br>400 × 1.5 = 300 × d, so d = <b>2 m</b>.</div>
<h3>Centre of gravity</h3>
<ul>
<li>The <b>centre of gravity</b> is the point where the weight of an object appears to act.</li>
<li>For a symmetrical object it is on the line of symmetry. A suspended object hangs with its centre of gravity directly below the pivot.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: beams on two supports</span>When a beam rests on two supports, the support closer to a heavy load pushes up with the bigger force. Use moments about one support to find the force at the other.</div>
<h3>Stretching springs</h3>
<ul>
<li><b>Hooke's law:</b> the extension of a spring is directly proportional to the force applied, as long as the limit of proportionality isn't exceeded.</li>
<li>On a force–extension graph, Hooke's law gives a straight line through the origin.</li>
<li><b>Elastic</b> behaviour: the object returns to its original shape when the force is removed.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: how extension varies with force</span>Hang a spring from a clamp next to a ruler. Add masses one at a time and record the extension (new length − original length). Plot force against extension. Use a pointer, and read the ruler at eye level, to reduce errors.</div>
`,
  flashcards: [
    ["Equation for a moment", "moment = force × perpendicular distance from pivot"],
    ["Unit of a moment", "N m"],
    ["Principle of moments", "In equilibrium, total clockwise moments = total anticlockwise moments"],
    ["Centre of gravity", "The point where the weight of an object appears to act"],
    ["Hooke's law", "Extension is directly proportional to force (up to the limit of proportionality)"],
    ["Elastic behaviour", "The object returns to its original shape when the force is removed"],
    ["How do you calculate extension?", "New length − original length"]
  ],
  quiz: [
    { q: "A 20 N force acts 0.5 m from a pivot. What is the moment?", o: ["10 N m", "40 N m", "20.5 N m", "0.025 N m"], a: 0, e: "" },
    { q: "A seesaw balances. Which is true?", o: ["Clockwise moments equal anticlockwise moments", "Both children have the same weight", "The pivot is in the middle", "There are no forces"], a: 0, e: "" },
    { q: "A spring obeys Hooke's law. 2 N gives an extension of 4 cm. What extension does 5 N give?", o: ["10 cm", "8 cm", "2.5 cm", "20 cm"], a: 0, e: "Extension is proportional to force: 2 cm per newton." },
    { q: "Why is a long spanner easier to use?", o: ["The bigger distance gives a bigger moment", "It reduces friction", "It is heavier", "It reduces the force needed to zero"], a: 0, e: "" },
    { q: "What does a straight line through the origin on a force–extension graph show?", o: ["Extension is proportional to force", "The spring has broken", "Force is constant", "Inelastic behaviour"], a: 0, e: "" },
    { q: "A 600 N weight is 2 m from a pivot. What force at 3 m on the other side balances it?", o: ["400 N", "900 N", "1200 N", "200 N"], a: 0, e: "600 × 2 = F × 3" }
  ]
});
