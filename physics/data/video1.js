/* Video explainers — Physics Topic 1. */

S2Data.video("1a", {
  scenes: [
    { type: "title", title: "Movement and position", sub: "Speed, acceleration and the two graphs you must be able to read.", mark: "v=d/t",
      say: ["This video covers speed, acceleration, and how to read distance–time and velocity–time graphs. These turn up on almost every paper."] },
    { type: "equation", title: "Average speed", rows: [[{ t: "average speed", k: 1 }, "=", { t: "distance moved", s: 1 }, "÷", { t: "time taken", s: 1 }]],
      labels: [{ t: "m/s", s: 2 }, { t: "m", s: 2 }, { t: "s", s: 2 }], note: "A car covers 600 m in 30 s → 600 ÷ 30 = 20 m/s", noteStep: 3,
      say: ["Average speed is a measure of how far something goes each second.",
            "Average speed equals distance moved divided by time taken.",
            "Use metres and seconds, and the speed comes out in metres per second.",
            "So a car that covers six hundred metres in thirty seconds has an average speed of twenty metres per second."] },
    { type: "graph", title: "Distance–time graphs", x: "Time (s)", y: "Distance (m)",
      lines: [{ pts: [[0, 0], [0.35, 0.5], [0.6, 0.5], [0.85, 0.95]], straight: true, s: 0 }],
      marks: [{ x: 0.17, y: 0.25, t: "steady speed", s: 0, anchor: "start", dx: 16, dy: 6, dot: false }, { x: 0.48, y: 0.5, t: "stationary", s: 1 }, { x: 0.72, y: 0.72, t: "steeper = faster", s: 2, anchor: "start", dx: 18, dy: 10, dot: false }],
      say: ["On a distance–time graph, the gradient is the speed. A straight sloping line means a steady speed.",
            "A flat line means the distance isn't changing. The object is stationary.",
            "A steeper line means a faster speed. To find the speed, divide the change in distance by the change in time."] },
    { type: "equation", title: "Acceleration", rows: [[{ t: "a", k: 1 }, "=", { t: "(v − u)", s: 1 }, "÷", { t: "t", s: 1 }]],
      labels: [{ t: "v = final velocity", s: 1 }, { t: "u = initial velocity", s: 1 }, { t: "a in m/s²", s: 2 }],
      say: ["Acceleration is how quickly the velocity changes.",
            "It equals final velocity minus initial velocity, divided by the time taken. V is the final velocity and u is the initial velocity.",
            "Its unit is metres per second squared. A negative answer means the object is slowing down."] },
    { type: "graph", title: "Velocity–time graphs", x: "Time (s)", y: "Velocity (m/s)",
      lines: [{ pts: [[0, 0], [0.3, 0.7], [0.7, 0.7], [0.95, 0]], straight: true, s: 0 }],
      marks: [{ x: 0.17, y: 0.4, t: "gradient = acceleration", s: 0, anchor: "start", dx: 26, dy: 10, dot: false }, { x: 0.5, y: 0.7, t: "constant velocity", s: 1 }, { x: 0.55, y: 0.12, t: "area = distance travelled", s: 2, dot: false }],
      say: ["On a velocity–time graph, the gradient is the acceleration.",
            "A flat line now means a constant velocity, not standing still. Don't mix the two graphs up.",
            "And the area under the line is the distance travelled. Split it into triangles and rectangles and add them up."] },
    { type: "calc", title: "Worked example", q: "A car accelerates from rest at 2.0 m/s² over 25 m. Find its final speed.",
      lines: ["Use v² = u² + 2as", "v² = 0² + 2 × 2.0 × 25 = 100", "v = √100 = 10 m/s"],
      say: ["Here's a typical exam calculation. A car accelerates from rest at two metres per second squared over twenty five metres. What's its final speed? There's no time given, so use v squared equals u squared plus two a s.",
            "From rest means u is zero. So v squared is two times two times twenty five, which is one hundred.",
            "Take the square root, and v is ten metres per second."] },
    { type: "quiz", q: "On a velocity–time graph, what does a horizontal line show?", o: ["The object is stationary", "Constant velocity", "Constant acceleration", "Deceleration"], a: 1,
      why: "On a distance–time graph it would mean stationary. Read the axis labels first!",
      say: ["Your turn. On a velocity–time graph, what does a horizontal line show?"] }
  ]
});

S2Data.video("1b", {
  scenes: [
    { type: "title", title: "Forces and motion", sub: "Resultant force, F = ma, weight, terminal velocity and stopping distances.", mark: "F=ma",
      say: ["Forces change how things move. This video covers resultant forces, Newton's laws, weight, terminal velocity and stopping distances."] },
    { type: "points", title: "Resultant force", items: ["Add forces in the same direction; subtract opposite ones", "<b>Balanced</b> (resultant = 0): stays still or constant velocity", "<b>Unbalanced</b>: accelerates in the direction of the resultant"],
      say: ["The resultant force is the single force that has the same effect as all the forces together. Add forces in the same direction and subtract opposite ones.", "If the forces are balanced, the resultant is zero. The object stays still, or keeps moving at a constant velocity. That's Newton's first law.", "If they're unbalanced, it accelerates in the direction of the resultant force."] },
    { type: "equation", title: "Newton's second law", rows: [[{ t: "F", k: 1 }, "=", { t: "m", s: 1 }, "×", { t: "a", s: 1 }], [{ t: "W", k: 1, s: 2 }, { t: "=", s: 2 }, { t: "m", s: 2 }, { t: "×", s: 2 }, { t: "g", s: 2 }]],
      labels: [{ t: "F in N, m in kg, a in m/s²", s: 1 }, { t: "g = 10 N/kg on Earth", s: 2 }],
      say: ["The bigger the resultant force, the bigger the acceleration. The heavier the object, the smaller the acceleration.",
            "Force equals mass times acceleration. Force in newtons, mass in kilograms, acceleration in metres per second squared.",
            "Weight is a force too: weight equals mass times gravitational field strength. On Earth, g is ten newtons per kilogram. Mass doesn't change from planet to planet, but weight does."] },
    { type: "graph", title: "Terminal velocity: a skydiver", x: "Time", y: "Velocity",
      lines: [{ pts: [[0, 0], [0.12, 0.45], [0.3, 0.72], [0.45, 0.75], [0.5, 0.75]], s: 0 }, { pts: [[0.5, 0.75], [0.56, 0.35], [0.68, 0.26], [1, 0.25]], s: 2 }],
      marks: [{ x: 0.06, y: 0.24, t: "weight > drag: accelerates", s: 0, anchor: "start", dx: 24, dy: 14, dot: false }, { x: 0.42, y: 0.75, t: "drag = weight: terminal velocity", s: 1, dy: -26 }, { x: 0.82, y: 0.25, t: "parachute: new, lower terminal velocity", s: 2, dy: -26 }],
      say: ["When a skydiver jumps, weight is bigger than air resistance, so she accelerates. As she speeds up, air resistance increases.",
            "Eventually air resistance equals her weight. The resultant force is zero, so she falls at a constant speed. That's terminal velocity.",
            "When the parachute opens, air resistance suddenly increases, so she slows down until the forces balance again, at a much lower terminal velocity."] },
    { type: "equation", title: "Stopping distance", rows: [[{ t: "stopping distance", k: 1 }, "=", { t: "thinking distance", s: 1 }, "+", { t: "braking distance", s: 2 }]],
      labels: [{ t: "tiredness, alcohol, drugs, distractions", s: 1 }, { t: "wet or icy roads, worn tyres or brakes", s: 2 }, { t: "both increase with speed", s: 3 }],
      say: ["The distance a car takes to stop has two parts.",
            "Thinking distance is how far the car travels during the driver's reaction time. It's increased by tiredness, alcohol, drugs and distractions.",
            "Braking distance is how far it travels once the brakes are on. It's increased by wet or icy roads and worn tyres or brakes.",
            "Both increase with speed. Braking distance goes up a lot: double the speed and it roughly quadruples."] },
    { type: "quiz", q: "A 1200 kg car accelerates at 2.5 m/s². What's the resultant force?", o: ["480 N", "1202.5 N", "3000 N", "30 000 N"], a: 2,
      why: "F = m × a = 1200 × 2.5.", say: ["Your turn. A twelve hundred kilogram car accelerates at two point five metres per second squared. What's the resultant force?"] }
  ]
});

S2Data.video("1c", {
  scenes: [
    { type: "title", title: "Momentum", sub: "p = mv, conservation of momentum, and staying safe in crashes.", mark: "p=mv",
      say: ["Momentum explains collisions, explosions, and why crumple zones and airbags save lives."] },
    { type: "equation", title: "Momentum", rows: [[{ t: "p", k: 1 }, "=", { t: "m", s: 1 }, "×", { t: "v", s: 1 }]], labels: [{ t: "kg m/s", s: 1 }, { t: "a vector: direction matters", s: 2 }],
      say: ["Momentum is mass in motion.", "Momentum, p, equals mass times velocity. It's measured in kilogram metres per second.", "It's a vector, so direction matters. Take one direction as positive and the opposite as negative."] },
    { type: "big", text: "Momentum is conserved", sub: "Total momentum before = total momentum after (if no external forces act)",
      say: ["In any collision or explosion, momentum is conserved.", "The total momentum before equals the total momentum after."] },
    { type: "calc", title: "Collision example", q: "A 2.0 kg trolley at 3.0 m/s hits a stationary 1.0 kg trolley. They stick together.",
      lines: ["Before: 2.0 × 3.0 + 1.0 × 0 = 6.0 kg m/s", "After: (2.0 + 1.0) × v = 6.0", "v = 6.0 ÷ 3.0 = 2.0 m/s"],
      say: ["Total momentum before: two times three, plus nothing for the stationary trolley. Six kilogram metres per second.", "After, they move together with a combined mass of three kilograms.", "So v is six divided by three. Two metres per second."] },
    { type: "equation", title: "Force and momentum", rows: [[{ t: "F", k: 1 }, "=", { t: "(mv − mu)", s: 1 }, "÷", { t: "t", s: 1 }]],
      note: "Same change in momentum over a longer time → smaller force", noteStep: 2,
      say: ["Force is the rate of change of momentum.", "Force equals the change in momentum divided by the time taken.", "So if you make the time longer, the same change in momentum needs a smaller force. That's the key to safety features."] },
    { type: "points", title: "Safety features", items: ["<b>Crumple zones</b> crush slowly", "<b>Seat belts</b> stretch a little", "<b>Airbags</b> cushion the head", "All increase the time to stop → smaller force on you"],
      say: ["Crumple zones at the front of a car crush in a collision.", "Seat belts stretch slightly.", "Airbags inflate and cushion the head.", "They all increase the time it takes you to stop. Your change in momentum is the same, so the force on you is smaller."] },
    { type: "quiz", q: "Why do crumple zones reduce injury?", o: ["They reduce your momentum", "They increase the time to stop, reducing the force", "They make the car lighter", "They stop you moving"], a: 1,
      why: "F = change in momentum ÷ time.", say: ["Why do crumple zones reduce injuries?"] }
  ]
});

S2Data.video("1d", {
  scenes: [
    { type: "title", title: "Moments, springs and stretching", sub: "Turning effects, balancing, and Hooke's law.", mark: "Nm",
      say: ["Forces can make things turn, and they can stretch things. This video covers moments and Hooke's law."] },
    { type: "equation", title: "Moments", rows: [[{ t: "moment", k: 1 }, "=", { t: "force", s: 1 }, "×", { t: "perpendicular distance from pivot", s: 1 }]], labels: [{ t: "N m", s: 2 }],
      say: ["A moment is the turning effect of a force.", "Moment equals force times the perpendicular distance from the pivot.", "It's measured in newton metres. That's why a long spanner makes undoing a nut easier."] },
    { type: "svg", title: "Principle of moments",
      svg: "<polygon points='550,330 510,410 590,410' class='soft'/><rect x='150' y='310' width='800' height='20' rx='6' style='fill:var(--ink)'/><g data-step='0'><rect x='220' y='230' width='80' height='80' rx='8' class='fillA'/><text class='txt b w' text-anchor='middle' x='260' y='280'>400 N</text><text class='txt s' text-anchor='middle' x='405' y='370'>1.5 m</text><line x1='260' y1='350' x2='550' y2='350' class='ink' stroke-dasharray='6 6'/></g><g data-step='1'><rect x='700' y='230' width='80' height='80' rx='8' style='fill:var(--bad)'/><text class='txt b w' text-anchor='middle' x='740' y='280'>600 N</text><text class='txt s' text-anchor='middle' x='645' y='370'>? m</text><line x1='550' y1='350' x2='740' y2='350' class='ink' stroke-dasharray='6 6'/></g><text class='txt b' text-anchor='middle' x='550' y='470' data-step='2'>400 × 1.5 = 600 × d → d = 1.0 m</text>",
      say: ["For a balanced object, the total clockwise moment equals the total anticlockwise moment. A four hundred newton child sits one and a half metres from the pivot.",
            "Where should a six hundred newton adult sit to balance?",
            "Four hundred times one point five is six hundred newton metres. Six hundred times d must equal that, so d is one metre."] },
    { type: "equation", title: "Hooke's law", rows: [[{ t: "F", k: 1 }, "=", { t: "k", s: 1 }, "×", { t: "x", s: 1 }]], labels: [{ t: "k = spring constant (N/m)", s: 1 }, { t: "x = extension (m)", s: 1 }],
      say: ["Springs obey Hooke's law.", "Force equals spring constant times extension. Extension is the new length minus the original length."] },
    { type: "graph", title: "Force–extension graph", x: "Extension", y: "Force",
      lines: [{ pts: [[0, 0], [0.55, 0.6]], straight: true, s: 0 }, { pts: [[0.55, 0.6], [0.75, 0.72], [1, 0.78]], s: 1 }],
      marks: [{ x: 0.3, y: 0.33, t: "straight line: obeys Hooke's law", s: 0, anchor: "start", dx: 20, dy: 30, dot: false }, { x: 0.55, y: 0.6, t: "limit of proportionality", s: 1, dy: -24 }],
      say: ["Plot force against extension. At first it's a straight line through the origin. Extension is directly proportional to force.",
            "Beyond the limit of proportionality, the line curves. Stretch it too far and it won't return to its original shape."] },
    { type: "quiz", q: "A 5 N force stretches a spring by 0.02 m. What is k?", o: ["0.1 N/m", "2.5 N/m", "250 N/m", "100 N/m"], a: 2,
      why: "k = F ÷ x = 5 ÷ 0.02.", say: ["A five newton force stretches a spring by point zero two metres. What's the spring constant?"] }
  ]
});
