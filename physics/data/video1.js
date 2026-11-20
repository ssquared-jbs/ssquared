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
      lines: [{ pts: [[0, 0], [0.35, 0.5], [0.6, 0.5], [0.85, 0.95]], straight: true, s: 1 }],
      marks: [{ x: 0.17, y: 0.25, t: "steady speed", s: 1, anchor: "start", dx: 16, dy: 6, dot: false }, { x: 0.48, y: 0.5, t: "stationary", s: 2 }, { x: 0.72, y: 0.72, t: "steeper = faster", s: 3, anchor: "start", dx: 18, dy: 10, dot: false }],
      say: ["On a distance–time graph, the gradient is the speed. A straight sloping line means a steady speed.",
            "A flat line means the distance isn't changing. The object is stationary.",
            "A steeper line means a faster speed. To find the speed, divide the change in distance by the change in time."] },
    { type: "equation", title: "Acceleration", rows: [[{ t: "a", k: 1 }, "=", { t: "(v − u)", s: 1 }, "÷", { t: "t", s: 1 }]],
      labels: [{ t: "v = final velocity", s: 1 }, { t: "u = initial velocity", s: 1 }, { t: "a in m/s²", s: 2 }],
      say: ["Acceleration is how quickly the velocity changes.",
            "It equals final velocity minus initial velocity, divided by the time taken. V is the final velocity and u is the initial velocity.",
            "Its unit is metres per second squared. A negative answer means the object is slowing down."] },
    { type: "graph", title: "Velocity–time graphs", x: "Time (s)", y: "Velocity (m/s)",
      lines: [{ pts: [[0, 0], [0.3, 0.7], [0.7, 0.7], [0.95, 0]], straight: true, s: 1 }],
      marks: [{ x: 0.17, y: 0.4, t: "gradient = acceleration", s: 1, anchor: "start", dx: 26, dy: 10, dot: false }, { x: 0.5, y: 0.7, t: "constant velocity", s: 2 }, { x: 0.55, y: 0.12, t: "area = distance travelled", s: 3, dot: false }],
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
