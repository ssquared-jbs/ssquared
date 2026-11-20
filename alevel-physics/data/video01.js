/* Video explainers — A-level Physics Topics 1–5. */

S2Data.video("1a", {
  scenes: [
    { type: "title", title: "Units, uncertainties and graphs", sub: "The toolkit for every practical and calculation.", mark: "SI",
      say: ["Every A level physics answer depends on units, uncertainties and graphs. Let's set up the toolkit."] },
    { type: "points", title: "SI base units", items: ["kg, m, s, A, K, mol", "Derived: N = kg m s⁻², J = kg m² s⁻²", "Check equations are homogeneous"],
      say: ["There are six base units you need: kilogram, metre, second, ampere, kelvin and mole.", "Every other unit is built from these. A newton is a kilogram metre per second squared, from F equals m a.", "You can check an equation by making sure every term has the same base units."] },
    { type: "compare", title: "Combining uncertainties", h: ["Rule", "Example"],
      rows: [["Add or subtract", "Add absolute uncertainties", "(2.0 ± 0.1) + (3.0 ± 0.2) = 5.0 ± 0.3"], ["Multiply or divide", "Add percentage uncertainties", "2% + 3% = 5%"], ["Power n", "Multiply % by n", "r² with 2% → 4%"]],
      say: ["When you add or subtract measurements, add their absolute uncertainties.", "When you multiply or divide, add the percentage uncertainties.", "When a quantity is raised to a power, multiply its percentage uncertainty by that power."] },
    { type: "graph", title: "Straight-line graphs", x: "s", y: "v²",
      lines: [{ pts: [[0, 0.2], [1, 0.9]], straight: true, s: 0 }],
      marks: [{ x: 0, y: 0.2, t: "intercept = u²", s: 1, anchor: "start", dx: 18, dy: 6 }, { x: 0.6, y: 0.62, t: "gradient = 2a", s: 1, anchor: "start", dx: 18, dy: 30 }],
      say: ["To get physics from a graph, rearrange the equation into the form y equals m x plus c. For v squared equals u squared plus two a s, plot v squared against s.",
            "Then the gradient is two a, and the intercept is u squared. For a power law, plot log y against log x: the gradient is the power."] },
    { type: "quiz", q: "Radius has a 3% uncertainty. What's the % uncertainty in the volume (4/3)πr³?", o: ["3%", "6%", "9%", "1%"], a: 2,
      why: "Cubed, so multiply by 3.", say: ["The radius of a sphere has a three percent uncertainty. What's the percentage uncertainty in its volume?"] }
  ]
});

S2Data.video("2a", {
  scenes: [
    { type: "title", title: "Motion and projectiles", sub: "Graphs, suvat and splitting motion into two directions.", mark: "suvat",
      say: ["This topic is about describing motion with graphs and equations, then using them for projectiles."] },
    { type: "compare", title: "Reading motion graphs", h: ["Gradient", "Area"],
      rows: [["Displacement–time", "Velocity", "—"], ["Velocity–time", "Acceleration", "Displacement"], ["Acceleration–time", "—", "Change in velocity"]],
      say: ["On a displacement time graph, the gradient is velocity.", "On a velocity time graph, the gradient is acceleration and the area underneath is displacement.", "On an acceleration time graph, the area is the change in velocity."] },
    { type: "equation", title: "The suvat equations", rows: [["v = u + at", "·", "s = ut + ½at²"], [{ t: "v² = u² + 2as", s: 1 }, { t: "·", s: 1 }, { t: "s = ½(u + v)t", s: 1 }]],
      note: "Only for constant acceleration · pick the one missing the quantity you don't need", noteStep: 1,
      say: ["For constant acceleration, use the suvat equations. V equals u plus a t, and s equals u t plus a half a t squared.",
            "V squared equals u squared plus two a s, and s equals a half u plus v times t. List what you know, then choose the equation that leaves out the quantity you don't need."] },
    { type: "flow", title: "Projectiles: split the motion", nodes: ["Horizontal:<br>constant velocity", "Vertical:<br>acceleration g", "Linked by<br>time"],
      say: ["Horizontally, there's no force if we ignore air resistance, so the velocity is constant.",
            "Vertically, the ball accelerates downwards at g, nine point eight one metres per second squared.",
            "The two directions are independent. The only thing they share is the time, so find the time from one direction and use it in the other."] },
    { type: "calc", title: "Worked example", q: "A ball rolls off a 1.8 m wall at 12 m s⁻¹. How far does it land?",
      lines: ["Vertical: 1.8 = ½ × 9.81 × t² → t = 0.606 s", "Horizontal: s = 12 × 0.606", "= 7.3 m"],
      say: ["Start with the vertical motion. It starts with no vertical velocity and falls one point eight metres, so the time is point six zero six seconds.", "Horizontally it moves at a steady twelve metres per second for that time.", "So it lands seven point three metres from the wall."] },
    { type: "quiz", q: "Two balls leave a cliff together: one dropped, one thrown horizontally. Which lands first?", o: ["The dropped one", "The thrown one", "They land together", "Depends on mass"], a: 2,
      why: "Vertical motion is identical; horizontal motion doesn't affect it.", say: ["One ball is dropped and another thrown sideways at the same moment. Which lands first?"] }
  ]
});

S2Data.video("2b", {
  scenes: [
    { type: "title", title: "Forces and moments", sub: "Newton's laws, free-body diagrams and equilibrium.", mark: "ΣF = ma",
      say: ["Forces change how objects move. Newton's three laws, plus moments, let you predict what happens."] },
    { type: "points", title: "Newton's laws", items: ["1st: constant velocity unless a resultant force acts", "2nd: ΣF = ma", "3rd: equal and opposite forces, same type, on different objects"],
      say: ["The first law says an object stays at rest, or keeps moving at constant velocity, unless a resultant force acts.", "The second law says the resultant force equals mass times acceleration.", "The third law says if A pushes B, B pushes A equally and oppositely. These forces are the same type and act on different objects, so they never cancel."] },
    { type: "calc", title: "Using ΣF = ma", q: "A 1200 kg car: driving force 3000 N, resistance 600 N.",
      lines: ["Resultant = 3000 − 600 = 2400 N", "a = 2400 ÷ 1200", "= 2.0 m s⁻²"],
      say: ["Find the resultant force: the driving force minus the resistive forces.", "Divide by the mass.", "The acceleration is two metres per second squared."] },
    { type: "points", title: "Moments and equilibrium", items: ["Moment = force × perpendicular distance", "Equilibrium: Σ clockwise = Σ anticlockwise moments", "And no resultant force"],
      say: ["A moment is the turning effect of a force: the force times the perpendicular distance from the pivot.", "In equilibrium, the total clockwise moment about any point equals the total anticlockwise moment.", "There must also be no resultant force. Taking moments about a support removes that support's force from the equation, which is a useful trick."] },
    { type: "quiz", q: "Which pair is a Newton's third law pair?", o: ["Weight of a book and the table's push on it", "Earth's pull on the book and the book's pull on Earth", "Friction and driving force", "Tension and weight of a hanging mass"], a: 1,
      why: "Same type (gravity), on different objects.", say: ["Which of these is a genuine Newton's third law pair?"] }
  ]
});

S2Data.video("2c", {
  scenes: [
    { type: "title", title: "Work, energy and power", sub: "Energy transfers and how quickly they happen.", mark: "J · W",
      say: ["Work is energy transferred by a force. Power is how fast that energy is transferred."] },
    { type: "equation", title: "Key equations", rows: [["W = FΔs cos θ"], [{ t: "Eₖ = ½mv²", s: 1 }, { t: "·", s: 1 }, { t: "ΔE = mgΔh", s: 1 }], [{ t: "P = W/t = Fv", s: 2 }]],
      say: ["Work done is force times the distance moved in the direction of the force. If the force is at an angle, multiply by cos theta.",
            "Kinetic energy is a half m v squared. The change in gravitational potential energy is m g delta h.",
            "Power is work done per second. For a vehicle at constant speed, power equals the driving force times the velocity."] },
    { type: "calc", title: "Energy conservation", q: "A roller coaster drops 32 m from rest (no friction).",
      lines: ["mgh = ½mv²", "v = √(2gh) = √(2 × 9.81 × 32)", "= 25 m s⁻¹"],
      say: ["The potential energy lost becomes kinetic energy.", "The mass cancels, so the speed is root two g h.", "That's twenty five metres per second, whatever the mass of the car."] },
    { type: "big", text: "Efficiency = useful output ÷ total input", sub: "Always less than 100%: some energy is dissipated, usually as heat",
      say: ["Efficiency compares the useful energy or power output with the total input.", "Real machines are never one hundred percent efficient. Friction and resistance dissipate energy as heat."] },
    { type: "quiz", q: "A car moves at 30 m s⁻¹ against 800 N of resistance. Useful power?", o: ["24 kW", "2.4 kW", "800 W", "26.7 W"], a: 0,
      why: "P = Fv = 800 × 30.", say: ["How much useful power is the engine producing?"] }
  ]
});

S2Data.video("3a", {
  scenes: [
    { type: "title", title: "Current, resistance and resistivity", sub: "What controls how easily charge flows.", mark: "Ω",
      say: ["Current is the rate of flow of charge. Resistance and resistivity describe how hard it is for charge to flow."] },
    { type: "equation", title: "The basics", rows: [["I = ΔQ/Δt", "·", "V = W/Q", "·", "R = V/I"], [{ t: "I = nqvA", k: 1, s: 1 }]],
      note: "n is huge in metals, so drift velocity v is tiny", noteStep: 1,
      say: ["Current is charge per second. Potential difference is energy per unit charge. Resistance is p d divided by current.",
            "The transport equation, I equals n q v A, links current to the number of charge carriers per cubic metre and their drift velocity. Metals have so many free electrons that they drift at under a millimetre per second."] },
    { type: "big", text: "R = ρl/A", sub: "Resistivity ρ is a property of the material (Ω m)",
      say: ["The resistance of a wire is resistivity times length, divided by cross-sectional area.", "Resistivity belongs to the material, not the wire. Copper's is tiny; plastic's is enormous."] },
    { type: "compare", title: "I–V characteristics", h: ["Graph", "Why"],
      rows: [["Ohmic resistor", "Straight through origin", "Constant R"], ["Filament lamp", "Curve that flattens", "Hotter → ions vibrate more → R rises"], ["Diode", "Current only above ~0.6 V", "Very high R in reverse"], ["NTC thermistor", "R falls as T rises", "More charge carriers released"]],
      say: ["An ohmic resistor at constant temperature gives a straight line through the origin.", "In a filament lamp, more current makes it hotter. The metal ions vibrate more, electrons collide more, and resistance increases.", "A diode only conducts forwards, once the p d passes about point six volts.", "In a thermistor, heating releases more charge carriers, so resistance falls."] },
    { type: "quiz", q: "A wire is replaced by one twice as long with twice the diameter. Its resistance…", o: ["Doubles", "Halves", "Stays the same", "Quarters"], a: 1,
      why: "Length × 2 but area × 4.", say: ["What happens to the resistance?"] }
  ]
});

S2Data.video("3b", {
  scenes: [
    { type: "title", title: "Circuits and potential dividers", sub: "Kirchhoff's laws and sharing voltage.", mark: "V_out",
      say: ["Two conservation laws explain every circuit: conservation of charge and conservation of energy."] },
    { type: "compare", title: "Kirchhoff's laws", h: ["Statement", "Conserves"],
      rows: [["First law", "Current in = current out at a junction", "Charge"], ["Second law", "Σ emf = Σ p.d. around a loop", "Energy"]],
      say: ["Kirchhoff's first law: the total current into a junction equals the total current out. Charge isn't lost.", "The second law: around any closed loop, the e m fs add up to the p ds. That's energy conservation."] },
    { type: "compare", title: "Combining resistors", h: ["Series", "Parallel"],
      rows: [["Total", "R₁ + R₂", "1/R = 1/R₁ + 1/R₂"], ["Same for each", "Current", "p.d."], ["Total compared", "Bigger than any", "Smaller than any"]],
      say: ["In series, add the resistances. In parallel, add the reciprocals.", "Series components carry the same current. Parallel components have the same p d.", "Adding a resistor in parallel always reduces the total, because it gives charge another path."] },
    { type: "calc", title: "Potential divider", q: "9.0 V across 2.0 kΩ and 4.0 kΩ in series.",
      lines: ["V_out = V_in × R₂/(R₁ + R₂)", "= 9.0 × 4/6", "= 6.0 V across 4.0 kΩ"],
      say: ["A potential divider shares the supply p d in the ratio of the resistances.", "The four kilohm resistor has two thirds of the total resistance.", "So it gets two thirds of the voltage: six volts. Swap one resistor for a thermistor or L D R and the output responds to temperature or light."] },
    { type: "quiz", q: "An LDR is the output resistor of a divider. It gets dark. V_out…", o: ["Falls", "Rises", "Stays the same", "Reverses"], a: 1,
      why: "LDR resistance rises in the dark, so it takes a bigger share.", say: ["What happens to the output voltage when it gets dark?"] }
  ]
});

S2Data.video("3c", {
  scenes: [
    { type: "title", title: "EMF and internal resistance", sub: "Why batteries lose voltage when working hard.", mark: "ε",
      say: ["Real batteries have resistance inside them. That's why their voltage drops when they supply a large current."] },
    { type: "equation", title: "The key equation", rows: [["ε = I(R + r)"], [{ t: "V = ε − Ir", k: 1, s: 1 }]],
      note: "Ir = 'lost volts' inside the cell", noteStep: 1,
      say: ["The e m f, epsilon, drives current through both the external resistance R and the internal resistance r.",
            "So the terminal p d is the e m f minus the lost volts, I r. The bigger the current, the more voltage is lost inside the cell."] },
    { type: "graph", title: "Measuring ε and r", x: "Current I", y: "Terminal p.d. V",
      lines: [{ pts: [[0, 0.85], [0.9, 0.25]], straight: true, s: 0 }],
      marks: [{ x: 0, y: 0.85, t: "intercept = ε", s: 1, anchor: "start", dx: 18, dy: -6 }, { x: 0.5, y: 0.52, t: "gradient = −r", s: 1, anchor: "start", dx: 20, dy: -14 }],
      say: ["Connect the cell to a variable resistor, with an ammeter and voltmeter. Vary the resistance and record V and I. Plot V against I.",
            "Rearranging gives V equals minus r I plus epsilon. So the y intercept is the e m f, and the gradient is minus the internal resistance."] },
    { type: "points", title: "Why it matters", items: ["Car batteries: very low r for huge starter currents", "High-voltage supplies: high r to limit current for safety", "Short-circuit current = ε/r"],
      say: ["A car battery needs a very low internal resistance, so it can supply hundreds of amps to the starter motor.", "High voltage supplies are built with a high internal resistance, so the current stays safe if you touch them.", "The maximum possible current, when the cell is shorted, is epsilon over r."] },
    { type: "quiz", q: "ε = 6.0 V, r = 1.0 Ω, R = 5.0 Ω. Terminal p.d.?", o: ["6.0 V", "5.0 V", "1.0 V", "1.2 V"], a: 1,
      why: "I = 1.0 A, so V = IR = 5.0 V.", say: ["What's the terminal p d?"] }
  ]
});

S2Data.video("4a", {
  scenes: [
    { type: "title", title: "Fluids", sub: "Density, upthrust and viscosity.", mark: "ρ η",
      say: ["Fluids push up on objects, and resist things moving through them. Upthrust and viscosity explain how."] },
    { type: "points", title: "Upthrust", items: ["Upthrust = weight of fluid displaced", "Caused by pressure increasing with depth", "Floats when upthrust = weight"],
      say: ["Archimedes' principle says the upthrust equals the weight of fluid the object pushes aside.", "It happens because pressure increases with depth, so the push on the bottom of an object is bigger than on the top.", "An object floats when the upthrust equals its weight."] },
    { type: "compare", title: "Laminar vs turbulent", h: ["Laminar", "Turbulent"],
      rows: [["Flow", "Smooth layers, no mixing", "Eddies and mixing"], ["Velocity at a point", "Constant", "Changes"], ["Drag", "Lower", "Much higher"]],
      say: ["In laminar flow, fluid moves in smooth layers that don't mix.", "The velocity at any point stays the same over time.", "Turbulent flow has swirling eddies, and drag is much greater."] },
    { type: "flow", title: "Falling ball at terminal velocity", nodes: ["Weight (down)", "Upthrust + drag (up)", "W = U + 6πηrv"],
      say: ["A ball falling through a liquid has its weight acting down.", "Upthrust and viscous drag act up. Drag is given by Stokes' law, six pi eta r v, for a small sphere in laminar flow.", "At terminal velocity these balance, so you can calculate the viscosity eta. Keep the temperature constant: viscosity falls as liquids warm up."] },
    { type: "quiz", q: "Warming the oil in a falling-ball experiment makes the terminal velocity…", o: ["Smaller", "Larger", "Unchanged", "Zero"], a: 1,
      why: "Viscosity falls, so less drag at a given speed.", say: ["What happens to the terminal velocity if the oil gets warmer?"] }
  ]
});

S2Data.video("4b", {
  scenes: [
    { type: "title", title: "Stress, strain and the Young modulus", sub: "How materials stretch, and when they break.", mark: "E",
      say: ["When you pull on a material, it stretches. How much depends on the force, its size and the material itself."] },
    { type: "equation", title: "Definitions", rows: [["σ = F/A", "·", "ε = Δx/x"], [{ t: "E = σ/ε", k: 1, s: 1 }]],
      note: "Stress in Pa · strain has no units · E in Pa", noteStep: 1,
      say: ["Stress is force per unit cross-sectional area. Strain is extension divided by original length.",
            "The Young modulus is stress divided by strain. It's a property of the material, not of a particular wire."] },
    { type: "graph", title: "Stress–strain for a ductile metal", x: "Strain", y: "Stress",
      lines: [{ pts: [[0, 0], [0.15, 0.55], [0.22, 0.65], [0.5, 0.82], [0.8, 0.88], [0.92, 0.8]], s: 0 }],
      marks: [{ x: 0.15, y: 0.55, t: "limit of proportionality", s: 1, anchor: "start", dx: 22, dy: 34 }, { x: 0.8, y: 0.88, t: "UTS", s: 2, dy: -22 }],
      say: ["The graph starts as a straight line. Its gradient is the Young modulus.",
            "Beyond the limit of proportionality and elastic limit, deformation becomes plastic. The metal won't return to its original shape.",
            "The highest point is the ultimate tensile stress. After that, the wire narrows and breaks."] },
    { type: "flow", title: "Measuring E", nodes: ["Long, thin wire;<br>measure x and d", "Add masses;<br>record extension", "Plot σ vs ε;<br>E = gradient"],
      say: ["Use a long thin wire, so the extension is big enough to measure. Measure the length, and the diameter at several points with a micrometer.",
            "Add masses in steps and record the extension each time, using a marker against a ruler or Searle's apparatus.",
            "Plot stress against strain. The Young modulus is the gradient of the straight part. Wear goggles in case the wire snaps."] },
    { type: "quiz", q: "Which has no units?", o: ["Stress", "Strain", "Young modulus", "Stiffness"], a: 1,
      why: "Strain is a ratio of two lengths.", say: ["Which of these quantities has no units?"] }
  ]
});

S2Data.video("5a", {
  scenes: [
    { type: "title", title: "Wave properties and polarisation", sub: "What waves are and how light shows it's transverse.", mark: "λ",
      say: ["Waves transfer energy without transferring matter. Their properties are linked by one simple equation."] },
    { type: "big", text: "v = fλ", sub: "Speed = frequency × wavelength · period T = 1/f",
      say: ["The wave equation: speed equals frequency times wavelength.", "The period is the time for one oscillation, one over the frequency."] },
    { type: "compare", title: "Two kinds of wave", h: ["Oscillation", "Examples"],
      rows: [["Transverse", "Perpendicular to energy transfer", "Light, waves on strings"], ["Longitudinal", "Parallel to energy transfer", "Sound, P-waves"]],
      say: ["In transverse waves, the oscillations are at right angles to the direction the energy travels.", "In longitudinal waves, they're along the direction of travel, forming compressions and rarefactions."] },
    { type: "flow", title: "Polarisation", nodes: ["Unpolarised light<br>(all planes)", "Polariser", "Plane-polarised<br>(one plane)"],
      say: ["Ordinary light oscillates in all planes perpendicular to its direction of travel.",
            "A polarising filter only lets through oscillations in one plane.",
            "Only transverse waves can be polarised, which is evidence that light is transverse. Polarisation is used in sunglasses, LCD screens and stress analysis."] },
    { type: "quiz", q: "Which wave can't be polarised?", o: ["Light", "Microwaves", "Sound", "Radio waves"], a: 2,
      why: "Sound is longitudinal.", say: ["Which of these can't be polarised?"] }
  ]
});

S2Data.video("5b", {
  scenes: [
    { type: "title", title: "Superposition and stationary waves", sub: "When waves meet.", mark: "nodes",
      say: ["When two waves meet, their displacements add. This is the principle of superposition."] },
    { type: "points", title: "Stationary waves", items: ["Two waves, same frequency, opposite directions", "Nodes: zero amplitude", "Antinodes: maximum amplitude", "Node to node = λ/2"],
      say: ["A stationary wave forms when two waves of the same frequency travel in opposite directions, usually a wave and its reflection.", "At nodes, they always cancel, so there's no movement.", "At antinodes, they reinforce, giving maximum amplitude.", "Adjacent nodes are half a wavelength apart. Stationary waves don't transfer energy."] },
    { type: "compare", title: "Harmonics", h: ["Fundamental", "Harmonics"],
      rows: [["String, both ends fixed", "L = λ/2", "All: f, 2f, 3f…"], ["Pipe, open both ends", "L = λ/2", "All"], ["Pipe, one end closed", "L = λ/4", "Odd only: f, 3f, 5f…"]],
      say: ["A string fixed at both ends has nodes at each end. The fundamental is half a wavelength.", "A pipe open at both ends has antinodes at each end: also half a wavelength.", "A pipe closed at one end has a node at the closed end and an antinode at the open end. The fundamental is a quarter wavelength, and only odd harmonics fit."] },
    { type: "big", text: "f = (1/2L)√(T/μ)", sub: "Higher tension or shorter string → higher pitch",
      say: ["For a string, the wave speed is root T over mu, so the fundamental frequency is one over two L times root T over mu.", "Tightening the string, or shortening it, raises the pitch. That's how guitars are tuned and played."] },
    { type: "quiz", q: "Nodes are 0.25 m apart at 680 Hz. Wave speed?", o: ["170 m s⁻¹", "340 m s⁻¹", "680 m s⁻¹", "2720 m s⁻¹"], a: 1,
      why: "λ = 0.50 m, v = 680 × 0.50.", say: ["What's the wave speed?"] }
  ]
});

S2Data.video("5c", {
  scenes: [
    { type: "title", title: "Refraction and lenses", sub: "Bending light, trapping it, and focusing it.", mark: "n",
      say: ["Light changes speed when it enters a new material. That makes it bend, and lets us trap and focus it."] },
    { type: "equation", title: "Refraction", rows: [["n = c/v"], [{ t: "n₁ sin θ₁ = n₂ sin θ₂", k: 1, s: 1 }], [{ t: "sin C = n₂/n₁", s: 2 }]],
      say: ["The refractive index is the speed of light in a vacuum divided by its speed in the material.",
            "Snell's law links the angles on each side of a boundary.",
            "Going from a higher to a lower refractive index, beyond the critical angle all the light reflects. That's total internal reflection."] },
    { type: "points", title: "Optical fibres", items: ["Core: higher n; cladding: lower n", "TIR keeps light in the core", "Modal dispersion: narrow core", "Material dispersion: monochromatic light"],
      say: ["An optical fibre has a glass core surrounded by cladding of lower refractive index.", "Light reflects totally at the boundary, so it stays in the core.", "Rays taking different paths arrive at different times, smearing pulses. A very narrow core fixes this.", "Different colours travel at different speeds too, so a single wavelength is used."] },
    { type: "calc", title: "Thin lens equation", q: "Object 30 cm from a converging lens, f = 10 cm.",
      lines: ["1/u + 1/v = 1/f", "1/v = 1/10 − 1/30 = 2/30", "v = 15 cm (real, magnification 0.5)"],
      say: ["The lens equation: one over u plus one over v equals one over f. Lens power is one over f, in dioptres.", "Rearrange for one over v.", "The image is fifteen centimetres away, real and inverted, half the size of the object."] },
    { type: "quiz", q: "Critical angle for glass with n = 1.5 (to air)?", o: ["30°", "42°", "48°", "56°"], a: 1,
      why: "sin C = 1/1.5 = 0.667.", say: ["What's the critical angle for this glass?"] }
  ]
});

S2Data.video("5d", {
  scenes: [
    { type: "title", title: "Diffraction and interference", sub: "Gratings, fringes and matter waves.", mark: "nλ",
      say: ["Diffraction and interference are signatures of waves. They let us measure wavelengths, and showed that electrons are waves too."] },
    { type: "big", text: "nλ = d sin θ", sub: "d = 1 ÷ lines per metre · n = order",
      say: ["A diffraction grating has many slits close together. Bright maxima appear where waves from all the slits arrive in phase.", "Use n lambda equals d sin theta, where d is the slit spacing. Gratings give sharp, bright maxima, so they measure wavelength precisely."] },
    { type: "calc", title: "Worked example", q: "600 nm light, 300 lines per mm. First-order angle?",
      lines: ["d = 1 ÷ 300 000 = 3.33 × 10⁻⁶ m", "sin θ = 600 × 10⁻⁹ ÷ 3.33 × 10⁻⁶ = 0.18", "θ = 10.4°"],
      say: ["Convert lines per millimetre to lines per metre, then take the reciprocal.", "Substitute into the grating equation with n equals one.", "The first-order maximum is at ten point four degrees."] },
    { type: "flow", title: "Electron diffraction", nodes: ["Electrons fired<br>at graphite", "Rings on<br>the screen", "λ = h/p:<br>electrons are waves"],
      say: ["Fire electrons through a thin graphite film.",
            "Rings appear on the screen, just like light diffracting.",
            "Diffraction is a wave property, so electrons behave as waves, with de Broglie wavelength h over p. Faster electrons have shorter wavelengths, so the rings shrink."] },
    { type: "quiz", q: "Increasing the accelerating voltage makes electron diffraction rings…", o: ["Bigger", "Smaller", "Disappear", "Unchanged"], a: 1,
      why: "More momentum → shorter λ → less diffraction.", say: ["What happens to the rings when the electrons go faster?"] }
  ]
});

S2Data.video("5e", {
  scenes: [
    { type: "title", title: "Photons and energy levels", sub: "Light as particles.", mark: "hf",
      say: ["Some experiments can only be explained if light comes in packets of energy called photons."] },
    { type: "points", title: "The photoelectric effect", items: ["No electrons below a threshold frequency", "Above it: emitted instantly", "Max KE depends on frequency, not intensity", "Intensity changes the number per second"],
      say: ["Shine light on a metal and electrons can be released, but only above a threshold frequency, however bright the light.", "Above that frequency, electrons come out immediately.", "Their maximum kinetic energy depends on the frequency, not the brightness.", "Brighter light just releases more electrons per second. Wave theory can't explain any of this."] },
    { type: "equation", title: "Einstein's explanation", rows: [["hf", "=", "φ", "+", "½mv²max"]],
      note: "One photon gives all its energy to one electron · φ = work function", noteStep: 0,
      say: ["Each photon has energy h f and gives it all to one electron. Some energy, the work function phi, frees the electron. The rest becomes kinetic energy."] },
    { type: "flow", title: "Energy levels", col: true, nodes: ["Electron in a<br>higher level", "Drops to a<br>lower level", "Emits a photon:<br>hf = E₁ − E₂"],
      say: ["Electrons in atoms can only have certain energies, called energy levels.", "When an electron drops to a lower level,", "it emits a photon whose energy exactly equals the gap. That's why each element has its own line spectrum."] },
    { type: "quiz", q: "Brighter light above threshold gives…", o: ["Faster photoelectrons", "More photoelectrons per second", "A lower work function", "No change"], a: 1,
      why: "More photons per second, same energy each.", say: ["What does brighter light change?"] }
  ]
});
