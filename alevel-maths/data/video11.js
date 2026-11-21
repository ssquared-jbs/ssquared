/* Video explainers — A-level Maths: Statistics and Mechanics. */

S2Data.video("11a", { scenes: [
  { type: "title", title: "Sampling", sub: "Choosing who to measure.", mark: "n",
    say: ["A good sample represents the whole population. How you choose it matters."] },
  { type: "compare", title: "Sampling methods", h: ["Random?", "Key point"],
    rows: [["Simple random", "Yes", "Needs a sampling frame"], ["Systematic", "Yes", "Every kth item"], ["Stratified", "Yes", "Groups in proportion"], ["Quota / opportunity", "No", "Quick but biased"]],
    say: ["Simple random sampling gives everyone an equal chance, but needs a full list.", "Systematic sampling picks every kth item from a random start.", "Stratified sampling takes random samples from each group in proportion.", "Quota and opportunity sampling are quick but not random, so they risk bias."] },
  { type: "calc", title: "Stratified sample", q: "1000 students: 400 boys, 600 girls. Sample 50",
    lines: ["Boys: 400/1000 × 50 = 20", "Girls: 600/1000 × 50 = 30", "Then sample randomly within each group"],
    say: ["Find each group's share of the sample.", "Boys get twenty and girls thirty.", "Then pick randomly within each group."] },
  { type: "quiz", q: "Which doesn't need a sampling frame?", o: ["Simple random", "Quota", "Systematic", "Stratified"], a: 1,
    why: "The interviewer just fills quotas.", say: ["Which sampling method doesn't need a sampling frame?"] }
]});

S2Data.video("11b", { scenes: [
  { type: "title", title: "Data and regression", sub: "Spread, outliers and lines of best fit.", mark: "σ",
    say: ["Summarising data means measuring its centre and its spread."] },
  { type: "equation", title: "Variance", rows: [["σ² =", "Σx²/n", "− x̄²"]],
    note: "Standard deviation σ = √variance", noteStep: 1,
    say: ["Variance is the mean of the squares minus the square of the mean.", "The standard deviation is its square root, in the same units as the data."] },
  { type: "compare", title: "Coding y = (x − a)/b", h: ["Effect"],
    rows: [["Mean", "ȳ = (x̄ − a)/b"], ["Standard deviation", "σy = σx / b"]],
    say: ["Coding changes the mean in the same way as each value.", "But subtracting a doesn't change the spread, so the standard deviation is only divided by b."] },
  { type: "points", title: "Regression y = a + bx", items: ["b: change in y per unit x", "a: y when x = 0 (may be meaningless)", "Interpolate, don't extrapolate"],
    say: ["The gradient b tells you how much y changes for each extra unit of x.", "The intercept a is the value of y when x is zero, which might not make sense in context.", "Use the line within the data range only."] },
  { type: "quiz", q: "Q1 = 20, Q3 = 30. Upper outlier boundary (1.5 × IQR)?", o: ["40", "45", "35", "50"], a: 1,
    why: "30 + 1.5 × 10.", say: ["What's the upper outlier boundary?"] }
]});

S2Data.video("12a", { scenes: [
  { type: "title", title: "Probability", sub: "Venn diagrams, independence and conditional probability.", mark: "∩",
    say: ["Probability rules let you combine events correctly."] },
  { type: "compare", title: "Rules", h: ["Formula"],
    rows: [["Addition", "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)"], ["Mutually exclusive", "P(A ∩ B) = 0"], ["Independent", "P(A ∩ B) = P(A)P(B)"]],
    say: ["The addition rule subtracts the overlap so it isn't counted twice.", "Mutually exclusive events can't happen together.", "Independent events multiply."] },
  { type: "equation", title: "Year 13: conditional probability", rows: [["P(A | B) =", "P(A ∩ B)", "÷ P(B)"]],
    note: "Independent ⇔ P(A | B) = P(A)", noteStep: 1,
    say: ["The probability of A given B restricts you to B, so divide the overlap by P of B.", "If knowing B doesn't change the probability of A, the events are independent."] },
  { type: "quiz", q: "P(A) = 0.3, P(B) = 0.5, independent. P(A ∩ B)?", o: ["0.8", "0.15", "0.2", "0.65"], a: 1,
    why: "0.3 × 0.5.", say: ["A and B are independent. What's P of A and B?"] }
]});

S2Data.video("12b", { scenes: [
  { type: "title", title: "The binomial distribution", sub: "Counting successes.", mark: "B(n,p)",
    say: ["The binomial distribution counts successes in a fixed number of independent trials."] },
  { type: "points", title: "Conditions", items: ["Fixed number of trials n", "Two outcomes: success or failure", "Constant p, independent trials"],
    say: ["There's a fixed number of trials.", "Each has just two outcomes.", "The probability of success stays the same, and trials are independent."] },
  { type: "calc", title: "Example", q: "X ~ B(10, 0.3). Find P(X = 2)",
    lines: ["P(X = 2) = ¹⁰C₂ (0.3)² (0.7)⁸", "= 45 × 0.09 × 0.0576", "= 0.2335"],
    say: ["Use n choose r, times p to the r, times one minus p to the n minus r.", "Substitute.", "The probability is nought point two three three five."] },
  { type: "points", title: "Inequalities", items: ["P(X < 4) = P(X ≤ 3)", "P(X ≥ 4) = 1 − P(X ≤ 3)", "Mean = np"],
    say: ["Because X is discrete, less than four is the same as at most three.", "Use one minus a cumulative probability for at least.", "The mean of the distribution is n p."] },
  { type: "quiz", q: "Which is NOT a binomial condition?", o: ["Fixed n", "p changes each trial", "Independent trials", "Two outcomes"], a: 1,
    why: "p must be constant.", say: ["Which is not a condition for a binomial model?"] }
]});

S2Data.video("12c", { scenes: [
  { type: "title", title: "The normal distribution", sub: "Year 13: the bell curve.", mark: "N",
    say: ["Many natural measurements follow a normal distribution: symmetric and bell-shaped."] },
  { type: "graph", title: "N(μ, σ²)", x: "x", y: "density",
    lines: [{ pts: [[0, 0.03], [0.2, 0.12], [0.35, 0.55], [0.5, 0.9], [0.65, 0.55], [0.8, 0.12], [1, 0.03]] }],
    marks: [{ x: 0.5, y: 0.9, t: "μ", s: 2, anchor: "middle", dy: -16 }, { x: 0.35, y: 0.55, t: "μ − σ", s: 2, anchor: "end", dx: -12 }, { x: 0.65, y: 0.55, t: "μ + σ", s: 2, anchor: "start", dx: 12 }],
    say: ["Here's the normal curve.", "It's symmetric about the mean, mu, so the mean, median and mode are equal.", "The points of inflection are one standard deviation either side. About sixty-eight percent of values lie between them."] },
  { type: "equation", title: "Standardising", rows: [["Z =", "(X − μ)", "÷ σ"]],
    note: "Z ~ N(0, 1): use it to find unknown μ or σ", noteStep: 1,
    say: ["Subtract the mean and divide by the standard deviation to get Z, the standard normal.", "That's how you find an unknown mean or standard deviation from a given probability."] },
  { type: "points", title: "Approximating the binomial", items: ["n large, p near 0.5", "B(n, p) ≈ N(np, np(1 − p))", "Continuity correction ± 0.5"],
    say: ["When n is large and p is near a half, a binomial looks normal.", "Use mean n p and variance n p times one minus p.", "Apply a continuity correction, since you're moving from whole numbers to a continuous scale."] },
  { type: "quiz", q: "X ~ N(50, 25). σ = ?", o: ["25", "5", "625", "50"], a: 1,
    why: "The second parameter is the variance.", say: ["What's the standard deviation of N fifty, twenty-five?"] }
]});

S2Data.video("13a", { scenes: [
  { type: "title", title: "Hypothesis testing", sub: "Deciding whether evidence is significant.", mark: "H₀",
    say: ["A hypothesis test asks whether an observed result is unlikely enough to doubt a claim."] },
  { type: "flow", title: "The method", nodes: ["State H₀ and H₁<br>for p", "Assume H₀:<br>X ~ B(n, p)", "Find tail<br>probability", "Compare;<br>conclude in context"],
    say: ["State the null and alternative hypotheses about the population parameter p.", "Assume the null hypothesis is true, giving a binomial model.", "Find the probability of a result at least as extreme as the one observed.", "Compare with the significance level, and write a conclusion in context."] },
  { type: "calc", title: "Example", q: "15 heads in 20 flips. Biased towards heads? (5%)",
    lines: ["H₀: p = 0.5, H₁: p > 0.5", "P(X ≥ 15) = 0.0207 < 0.05", "Reject H₀: evidence of bias towards heads"],
    say: ["The claim is the coin is fair; the alternative is biased towards heads.", "Under the null hypothesis, fifteen or more heads has probability about two percent, less than five percent.", "So reject the null hypothesis. There's sufficient evidence the coin is biased."] },
  { type: "quiz", q: "In a two-tailed test at 5%, each tail has…", o: ["5%", "2.5%", "10%", "1%"], a: 1,
    why: "The level is split between the tails.", say: ["How much goes in each tail of a two-tailed five percent test?"] }
]});

S2Data.video("13b", { scenes: [
  { type: "title", title: "Correlation and mean tests", sub: "Year 13: testing ρ and μ.", mark: "ρ",
    say: ["Year 13 adds tests for correlation and for the mean of a normal population."] },
  { type: "points", title: "Testing correlation", items: ["H₀: ρ = 0", "Compare r with the table's critical value", "|r| > critical → reject H₀"],
    say: ["The null hypothesis is no correlation in the population: rho equals zero.", "Look up the critical value for your sample size and significance level.", "If the sample correlation is beyond it, reject the null hypothesis."] },
  { type: "equation", title: "Testing a normal mean", rows: [["z =", "(x̄ − μ₀)", "÷ (σ/√n)"]],
    note: "X̄ ~ N(μ, σ²/n) · 5% one-tailed z = 1.6449", noteStep: 1,
    say: ["The sample mean has a normal distribution with variance sigma squared over n.", "Compare the test statistic with the critical z value, like one point six four four nine for a one-tailed five percent test."] },
  { type: "quiz", q: "If X ~ N(μ, σ²), the variance of X̄ is…", o: ["σ²", "σ²/n", "σ/n", "nσ²"], a: 1,
    why: "Averages are less spread out.", say: ["What's the variance of the sample mean?"] }
]});

S2Data.video("14a", { scenes: [
  { type: "title", title: "Kinematics", sub: "Motion with constant acceleration.", mark: "suvat",
    say: ["When acceleration is constant, five equations describe the motion."] },
  { type: "compare", title: "The suvat equations", h: ["Missing"],
    rows: [["v = u + at", "s"], ["s = ut + ½at²", "v"], ["v² = u² + 2as", "t"], ["s = ½(u + v)t", "a"]],
    say: ["v equals u plus a t doesn't involve displacement.", "s equals u t plus a half a t squared doesn't involve v.", "v squared equals u squared plus two a s doesn't involve time.", "And s equals the average velocity times t doesn't involve acceleration. Pick the one missing the quantity you don't need."] },
  { type: "calc", title: "Vertical motion", q: "Ball thrown up at 14.7 m/s (up positive, a = −9.8)",
    lines: ["Top: v = 0 → 0 = 14.7² − 19.6s", "Max height s = 11.0 m", "Time: 0 = 14.7 − 9.8t → t = 1.5 s"],
    say: ["At the top, the velocity is zero.", "So the maximum height is about eleven metres.", "And it takes one and a half seconds to get there."] },
  { type: "quiz", q: "On a v–t graph, the area represents…", o: ["Acceleration", "Displacement", "Velocity", "Time"], a: 1,
    why: "Area = velocity × time.", say: ["What does the area under a velocity–time graph represent?"] }
]});

S2Data.video("14b", { scenes: [
  { type: "title", title: "Variable acceleration", sub: "Kinematics with calculus.", mark: "ds/dt",
    say: ["When acceleration changes, suvat fails. Calculus takes over."] },
  { type: "flow", title: "Differentiate and integrate", nodes: ["s", "v = ds/dt", "a = dv/dt"],
    say: ["Start with displacement.", "Differentiate to get velocity.", "Differentiate again for acceleration. Go back the other way by integrating, using initial conditions."] },
  { type: "calc", title: "Example", q: "s = t³ − 6t² + 9t",
    lines: ["v = 3t² − 12t + 9 = 3(t − 1)(t − 3)", "At rest at t = 1 and t = 3", "a = 6t − 12"],
    say: ["Differentiate to get the velocity and factorise.", "The particle is at rest when v is zero: at one and three seconds.", "Differentiate again for acceleration."] },
  { type: "quiz", q: "Maximum velocity occurs when…", o: ["v = 0", "a = 0", "s = 0", "t = 0"], a: 1,
    why: "Stationary point of v.", say: ["When does a particle have its maximum velocity?"] }
]});

S2Data.video("14c", { scenes: [
  { type: "title", title: "Projectiles", sub: "Year 13: motion in two dimensions.", mark: "↗",
    say: ["A projectile moves sideways at constant speed while gravity pulls it down."] },
  { type: "compare", title: "Split the motion", h: ["Initial velocity", "Acceleration"],
    rows: [["Horizontal", "U cos θ", "0"], ["Vertical", "U sin θ", "−g"]],
    say: ["Horizontally, the velocity is U cos theta and stays constant.", "Vertically, it starts at U sin theta and accelerates downward at g. Time links the two."] },
  { type: "calc", title: "Example", q: "U = 20 m/s at 30°, level ground",
    lines: ["Vertical: 0 = 10t − 4.9t² → t = 2.04 s", "Horizontal: 17.32 × 2.04", "Range ≈ 35.3 m"],
    say: ["Use the vertical motion to find when it lands.", "Multiply the horizontal speed by that time.", "The range is about thirty-five metres."] },
  { type: "quiz", q: "Range on level ground is maximised at…", o: ["30°", "45°", "60°", "90°"], a: 1,
    why: "sin 2θ is largest at 90°.", say: ["Which angle gives the greatest range on level ground?"] }
]});

S2Data.video("15a", { scenes: [
  { type: "title", title: "Newton's laws", sub: "Forces and connected particles.", mark: "F=ma",
    say: ["Newton's laws connect forces to motion."] },
  { type: "compare", title: "The three laws", h: ["Says"],
    rows: [["First", "No resultant force → constant velocity"], ["Second", "F = ma"], ["Third", "Equal and opposite reactions"]],
    say: ["With no resultant force, an object stays at rest or moves at constant velocity.", "The resultant force equals mass times acceleration.", "Every force has an equal and opposite partner acting on the other body."] },
  { type: "calc", title: "Pulley", q: "5 kg and 3 kg over a smooth pulley",
    lines: ["5g − T = 5a and T − 3g = 3a", "Add: 2g = 8a → a = 2.45 m s⁻²", "T = 3(g + 2.45) = 36.75 N"],
    say: ["Write F equals m a for each particle. The tension is the same throughout a light inextensible string.", "Add the equations to eliminate T.", "Substitute back for the tension."] },
  { type: "quiz", q: "A 60 kg person in a lift accelerating up at 1 m s⁻². R = ?", o: ["588 N", "648 N", "60 N", "528 N"], a: 1,
    why: "R − 588 = 60.", say: ["What's the reaction on a sixty kilogram person in a lift accelerating up at one metre per second squared?"] }
]});

S2Data.video("15b", { scenes: [
  { type: "title", title: "Friction and slopes", sub: "Year 13: resolving forces.", mark: "μR",
    say: ["On slopes and rough surfaces, resolve forces in two perpendicular directions."] },
  { type: "points", title: "Friction", items: ["F ≤ μR", "F = μR when moving or about to move", "Opposes motion"],
    say: ["Friction can take any value up to mu R.", "It reaches mu R when the object is moving or on the point of moving.", "It always opposes the motion or the tendency to move."] },
  { type: "compare", title: "On a slope at angle α", h: ["Component"],
    rows: [["Down the slope", "mg sin α"], ["Into the slope", "mg cos α"], ["Normal reaction", "R = mg cos α"]],
    say: ["The weight has a component mg sine alpha down the slope.", "And mg cos alpha into the slope.", "So with no other perpendicular forces, the reaction is mg cos alpha."] },
  { type: "calc", title: "Example", q: "4 kg block slides down a 30° slope, μ = 0.2",
    lines: ["R = 4g cos 30° = 33.9 N; F = 6.79 N", "4g sin 30° − 6.79 = 4a", "a = 3.20 m s⁻²"],
    say: ["Find the reaction and the friction.", "Resolve along the slope.", "The acceleration is three point two metres per second squared."] },
  { type: "quiz", q: "On the point of slipping with no other forces, μ = ?", o: ["sin α", "tan α", "cos α", "1"], a: 1,
    why: "mg sin α = μmg cos α.", say: ["A block is about to slip on a slope. What's mu?"] }
]});

S2Data.video("15c", { scenes: [
  { type: "title", title: "Moments", sub: "Year 13: turning effects.", mark: "N m",
    say: ["A moment measures the turning effect of a force."] },
  { type: "equation", title: "Moment", rows: [["moment =", "force", "× perpendicular distance"]],
    note: "Equilibrium: resultant force = 0 and total moment = 0", noteStep: 1,
    say: ["A moment is the force times the perpendicular distance from the pivot.", "For a rigid body in equilibrium, both the resultant force and the total moment about any point are zero."] },
  { type: "calc", title: "Beam", q: "Uniform 4 m beam, 200 N, supports at ends; 300 N load 1 m from A",
    lines: ["Moments about A: 4R_B = 200 × 2 + 300 × 1", "R_B = 175 N", "R_A = 500 − 175 = 325 N"],
    say: ["Take moments about A to eliminate the reaction there. The beam's weight acts at its middle.", "Solve for the reaction at B.", "Resolve vertically for the reaction at A."] },
  { type: "quiz", q: "On the point of tilting about one support, the other reaction is…", o: ["Maximum", "Zero", "Equal", "Negative"], a: 1,
    why: "The beam is just lifting off it.", say: ["When a beam is about to tilt about one support, what's the reaction at the other?"] }
]});
