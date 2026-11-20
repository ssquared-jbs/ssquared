/* A-level Physics² — Topics 3–4: Electric circuits, Materials */

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Current, resistance and resistivity",
  summary: "Charge carriers, drift velocity, Ohm's law, resistivity and I–V characteristics.",
  notes: `
<h3>Current and charge</h3>
<ul>
<li>Current is the rate of flow of charge: <b>I = ΔQ/Δt</b>. Unit: ampere (A) = C s<sup>−1</sup>.</li>
<li>In metals the charge carriers are free (delocalised) electrons; in electrolytes, ions.</li>
<li><b>I = nqvA</b>: n = number of charge carriers per m<sup>3</sup>, q = charge on each, v = drift velocity, A = cross-sectional area. Drift velocities in metals are tiny (mm s<sup>−1</sup>) because n is huge.</li>
<li>In semiconductors, n is much smaller, so v is larger for the same current.</li>
</ul>
<h3>Potential difference and resistance</h3>
<ul>
<li>p.d. is the energy transferred per unit charge: <b>V = W/Q</b> (1 V = 1 J C<sup>−1</sup>).</li>
<li>Resistance: <b>R = V/I</b>. <b>Ohm's law</b>: current through a metallic conductor is proportional to p.d. provided temperature is constant.</li>
<li>Power: P = VI = I<sup>2</sup>R = V<sup>2</sup>/R. Energy: W = VIt.</li>
</ul>
<h3>Resistivity</h3>
<div class="box box-key"><span class="box-title">R = ρl/A</span>ρ = resistivity (Ω m), a property of the material. l = length, A = cross-sectional area.</div>
<p>To measure ρ for a wire: measure the diameter at several points with a micrometer, measure R (or V and I) for different lengths with a fixed current, plot R against l. Gradient = ρ/A.</p>
<h3>I–V characteristics</h3>
<table>
<tr><th>Component</th><th>Graph</th><th>Why</th></tr>
<tr><td>Ohmic resistor</td><td>Straight line through origin</td><td>Constant R</td></tr>
<tr><td>Filament lamp</td><td>Curve flattening</td><td>Higher I → hotter → lattice ions vibrate more → R increases</td></tr>
<tr><td>Diode</td><td>Current only above ~0.6 V forward</td><td>Very high resistance in reverse</td></tr>
<tr><td>Thermistor (NTC)</td><td>R falls as temperature rises</td><td>More charge carriers released (n increases)</td></tr>
<tr><td>LDR</td><td>R falls as light intensity rises</td><td>Light releases more charge carriers</td></tr>
</table>
`,
  quiz: [
    { q: "3.0 C of charge flows in 1.5 s. Current?", o: ["2.0 A", "4.5 A", "0.5 A", "1.5 A"], a: 0, e: "" },
    { q: "A resistor has 12 V across it and 0.50 A through it. Resistance?", o: ["24 Ω", "6.0 Ω", "0.042 Ω", "12.5 Ω"], a: 0, e: "" },
    { q: "Why does a filament lamp's resistance increase with current?", o: ["Temperature rises, ions vibrate more", "More charge carriers", "The wire gets longer", "The p.d. falls"], a: 0, e: "" },
    { q: "Why does an NTC thermistor's resistance fall as it warms?", o: ["More charge carriers are released", "Ions vibrate less", "It shrinks", "Current decreases"], a: 0, e: "" },
    { q: "Doubling the length of a wire (same material, same A) changes R by…", o: ["× 2", "× 4", "× ½", "No change"], a: 0, e: "" },
    { q: "Doubling the diameter of a wire changes R by…", o: ["× ¼", "× ½", "× 2", "× 4"], a: 0, e: "A increases 4 times." },
    { q: "Unit of resistivity?", o: ["Ω m", "Ω m⁻¹", "Ω", "Ω m²"], a: 0, e: "" },
    { q: "Power dissipated by 2.0 A through 5.0 Ω?", o: ["20 W", "10 W", "2.5 W", "50 W"], a: 0, e: "I²R." },
    { q: "In I = nqvA, v is…", o: ["Drift velocity of charge carriers", "Speed of light", "Voltage", "Volume"], a: 0, e: "" }
  ],
  flashcards: [
    ["Current", "I = ΔQ/Δt"],
    ["Transport equation", "I = nqvA"],
    ["Potential difference", "V = W/Q (energy per unit charge)"],
    ["Resistance", "R = V/I"],
    ["Ohm's law", "I ∝ V for a metallic conductor at constant temperature"],
    ["Electrical power", "P = VI = I²R = V²/R"],
    ["Resistivity", "R = ρl/A"],
    ["Filament lamp I–V", "Curve; R rises as it heats"],
    ["Diode I–V", "Conducts forward above ~0.6 V; very high R in reverse"],
    ["NTC thermistor / LDR", "R falls as temperature / light intensity rises"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y1: true, title: "Series, parallel and potential dividers",
  summary: "Kirchhoff's laws, combining resistors and using potential dividers with sensors.",
  notes: `
<h3>Kirchhoff's laws</h3>
<ul>
<li><b>First law</b> (conservation of charge): the total current into a junction equals the total current out.</li>
<li><b>Second law</b> (conservation of energy): around any closed loop, the sum of the emfs equals the sum of the p.d.s.</li>
</ul>
<h3>Combining resistors</h3>
<table>
<tr><th>Series</th><th>Parallel</th></tr>
<tr><td>R<sub>T</sub> = R<sub>1</sub> + R<sub>2</sub> + …</td><td>1/R<sub>T</sub> = 1/R<sub>1</sub> + 1/R<sub>2</sub> + …</td></tr>
<tr><td>Same current; p.d. shared</td><td>Same p.d.; current shared</td></tr>
</table>
<p>Two equal resistors in parallel give half the resistance of one. The combined resistance of parallel resistors is always <b>less than the smallest</b>.</p>
<h3>Potential dividers</h3>
<div class="box box-key"><span class="box-title">Output voltage</span>V<sub>out</sub> = V<sub>in</sub> × R<sub>2</sub>/(R<sub>1</sub> + R<sub>2</sub>), where V<sub>out</sub> is across R<sub>2</sub>.</div>
<ul>
<li>The p.d. is shared in the ratio of the resistances: V<sub>1</sub>/V<sub>2</sub> = R<sub>1</sub>/R<sub>2</sub>.</li>
<li>Replace R<sub>2</sub> with a thermistor or LDR to make a sensor circuit: as temperature or light changes, V<sub>out</sub> changes.</li>
<li>e.g. LDR as R<sub>2</sub>: in darkness its resistance rises, so V<sub>out</sub> rises (a light that switches on in the dark).</li>
<li>A potentiometer (variable resistor with a slider) gives a continuously variable output from 0 to V<sub>in</sub>.</li>
</ul>
<p><b>Example</b>: 9.0 V across 2.0 kΩ and 4.0 kΩ in series. V across 4.0 kΩ = 9.0 × 4/6 = <b>6.0 V</b>.</p>
`,
  quiz: [
    { q: "Kirchhoff's first law is a consequence of conservation of…", o: ["Charge", "Energy", "Momentum", "Mass"], a: 0, e: "" },
    { q: "Total resistance of 4 Ω and 6 Ω in series?", o: ["10 Ω", "2.4 Ω", "24 Ω", "1.5 Ω"], a: 0, e: "" },
    { q: "Total resistance of 4 Ω and 6 Ω in parallel?", o: ["2.4 Ω", "10 Ω", "5 Ω", "0.42 Ω"], a: 0, e: "" },
    { q: "Three 9 Ω resistors in parallel?", o: ["3 Ω", "27 Ω", "9 Ω", "1 Ω"], a: 0, e: "" },
    { q: "12 V across 1 kΩ and 2 kΩ in series. p.d. across 2 kΩ?", o: ["8 V", "4 V", "6 V", "12 V"], a: 0, e: "" },
    { q: "An LDR is R₂ (bottom) in a potential divider. In bright light Vout…", o: ["Falls", "Rises", "Stays the same", "Reverses"], a: 0, e: "LDR resistance falls." },
    { q: "In a parallel circuit, components share the same…", o: ["p.d.", "Current", "Resistance", "Power"], a: 0, e: "" },
    { q: "Kirchhoff's second law: around a loop, Σemf = …", o: ["ΣIR (sum of p.d.s)", "ΣI", "0 always", "ΣR"], a: 0, e: "" },
    { q: "Currents of 2 A and 3 A enter a junction; one wire leaves. Its current?", o: ["5 A", "1 A", "6 A", "1.5 A"], a: 0, e: "" }
  ],
  flashcards: [
    ["Kirchhoff's first law", "Σ current in = Σ current out at a junction (charge conserved)"],
    ["Kirchhoff's second law", "Σ emf = Σ p.d. around a loop (energy conserved)"],
    ["Series resistors", "R_T = R₁ + R₂ + …"],
    ["Parallel resistors", "1/R_T = 1/R₁ + 1/R₂ + …"],
    ["Potential divider", "V_out = V_in × R₂/(R₁ + R₂)"],
    ["p.d. ratio in a divider", "V₁/V₂ = R₁/R₂"],
    ["Thermistor in divider", "Output changes with temperature"],
    ["Potentiometer", "Gives variable output 0 to V_in"]
  ]
});

S2Data.add({
  id: "3c", group: 3, y1: true, title: "EMF and internal resistance",
  summary: "EMF, terminal p.d., lost volts and finding internal resistance experimentally.",
  notes: `
<h3>EMF</h3>
<p>The <b>emf (ε)</b> of a source is the energy transferred into electrical energy per unit charge: ε = W/Q. The p.d. is energy transferred <b>out</b> of electrical form per unit charge.</p>
<h3>Internal resistance</h3>
<p>Real cells have <b>internal resistance r</b>. Some energy is transferred inside the cell, so the <b>terminal p.d.</b> V is less than ε when a current flows.</p>
<div class="box box-key"><span class="box-title">ε = I(R + r) = V + Ir</span>Ir is the "lost volts". V = ε − Ir.</div>
<ul>
<li>When I = 0 (open circuit), V = ε.</li>
<li>Larger currents mean more lost volts, so terminal p.d. drops.</li>
<li>Maximum (short-circuit) current = ε/r.</li>
<li>Car batteries have very low r to supply large currents. High-voltage supplies have high r to limit current for safety.</li>
</ul>
<h3>Measuring ε and r</h3>
<ol>
<li>Connect the cell to a variable resistor, ammeter in series and voltmeter across the cell.</li>
<li>Vary R and record V and I.</li>
<li>Plot V against I: V = −rI + ε. <b>Gradient = −r</b>; <b>y-intercept = ε</b>.</li>
</ol>
<p><b>Example</b>: a cell of emf 1.5 V and internal resistance 0.50 Ω is connected to a 2.5 Ω resistor. I = 1.5 ÷ 3.0 = 0.50 A; V = 0.50 × 2.5 = <b>1.25 V</b>; lost volts = 0.25 V.</p>
`,
  quiz: [
    { q: "EMF is…", o: ["Energy transferred into electrical energy per unit charge", "The terminal p.d. when current flows", "The current from a cell", "Resistance inside a cell"], a: 0, e: "" },
    { q: "ε = 6.0 V, r = 1.0 Ω, R = 5.0 Ω. Current?", o: ["1.0 A", "1.2 A", "6.0 A", "0.83 A"], a: 0, e: "" },
    { q: "In the circuit above, terminal p.d.?", o: ["5.0 V", "6.0 V", "1.0 V", "4.0 V"], a: 0, e: "" },
    { q: "On a V–I graph for a cell, the gradient is…", o: ["−r", "ε", "R", "1/r"], a: 0, e: "" },
    { q: "On a V–I graph for a cell, the y-intercept is…", o: ["ε", "r", "Max current", "Zero"], a: 0, e: "" },
    { q: "Why do car batteries need a low internal resistance?", o: ["To supply very large currents to the starter motor", "To be safe", "To reduce emf", "To charge faster"], a: 0, e: "" },
    { q: "Short-circuit current for ε = 9.0 V, r = 0.30 Ω?", o: ["30 A", "2.7 A", "9.0 A", "0.033 A"], a: 0, e: "" },
    { q: "As the current drawn from a cell increases, terminal p.d.…", o: ["Decreases", "Increases", "Stays equal to ε", "Becomes zero immediately"], a: 0, e: "" },
    { q: "Lost volts equals…", o: ["Ir", "IR", "ε/r", "V/I"], a: 0, e: "" }
  ],
  flashcards: [
    ["EMF", "Energy converted to electrical per unit charge; ε = W/Q"],
    ["Internal resistance equation", "ε = I(R + r)"],
    ["Terminal p.d.", "V = ε − Ir"],
    ["Lost volts", "Ir"],
    ["V–I graph for a cell", "Gradient −r; intercept ε"],
    ["Short-circuit current", "ε/r"],
    ["Why HV supplies have high r", "Limits current for safety"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Fluids: density, upthrust and viscosity",
  summary: "Density, upthrust and Archimedes, laminar and turbulent flow, Stokes' law and the falling-ball method.",
  notes: `
<h3>Density and upthrust</h3>
<ul>
<li>Density ρ = m/V (kg m<sup>−3</sup>).</li>
<li><b>Upthrust</b> = weight of fluid displaced (Archimedes' principle). An object floats when upthrust equals its weight.</li>
<li>Upthrust arises because pressure increases with depth, so there's a bigger force on the bottom of the object than the top.</li>
</ul>
<h3>Flow</h3>
<ul>
<li><b>Laminar</b> (streamline) flow: layers of fluid move smoothly with no mixing; velocity at each point is constant.</li>
<li><b>Turbulent</b> flow: eddies and mixing; velocity at a point changes. Happens at higher speeds; drag increases greatly.</li>
<li><b>Viscosity</b> η is a measure of a fluid's resistance to flow. It <b>decreases</b> as temperature rises for liquids.</li>
</ul>
<h3>Stokes' law</h3>
<div class="box box-key"><span class="box-title">F = 6πηrv</span>Viscous drag on a small sphere of radius r moving at speed v through a fluid of viscosity η, for laminar flow only.</div>
<p>At terminal velocity of a ball falling through liquid: <b>weight = upthrust + viscous drag</b>.</p>
<h3>Falling-ball method</h3>
<ol>
<li>Drop a ball bearing into a tall tube of liquid (e.g. glycerol) with rubber bands marking equal intervals.</li>
<li>Time the ball between bands lower down to check it has reached terminal velocity (equal times between bands).</li>
<li>Measure radius with a micrometer; find densities of ball and liquid.</li>
<li>Calculate η from weight − upthrust = 6πηrv. Keep the temperature constant.</li>
</ol>
`,
  quiz: [
    { q: "Upthrust on an object equals…", o: ["The weight of fluid displaced", "The object's weight", "The fluid's density", "The drag"], a: 0, e: "" },
    { q: "Density of a 0.60 kg block of volume 2.0 × 10⁻⁴ m³?", o: ["3000 kg m⁻³", "1200 kg m⁻³", "0.0012 kg m⁻³", "333 kg m⁻³"], a: 0, e: "" },
    { q: "Stokes' law applies to…", o: ["Small spheres in laminar flow", "Any object at any speed", "Turbulent flow only", "Gases only"], a: 0, e: "" },
    { q: "At terminal velocity in a liquid, weight equals…", o: ["Upthrust + viscous drag", "Upthrust only", "Drag only", "Zero"], a: 0, e: "" },
    { q: "How does the viscosity of a liquid change as it warms?", o: ["Decreases", "Increases", "No change", "Becomes zero"], a: 0, e: "" },
    { q: "In turbulent flow…", o: ["There are eddies and mixing", "Layers flow smoothly", "Velocity at a point is constant", "Drag is minimised"], a: 0, e: "" },
    { q: "Doubling the radius of a sphere (same v, η) changes Stokes drag by…", o: ["× 2", "× 4", "× 8", "× ½"], a: 0, e: "" },
    { q: "Why are bands placed lower down the tube in the falling-ball method?", o: ["So the ball has reached terminal velocity", "To make it fall faster", "To reduce upthrust", "To heat the liquid"], a: 0, e: "" },
    { q: "Unit of viscosity?", o: ["Pa s", "N m", "kg m⁻³", "m s⁻¹"], a: 0, e: "" }
  ],
  flashcards: [
    ["Density", "ρ = m/V"],
    ["Archimedes' principle", "Upthrust = weight of fluid displaced"],
    ["Laminar flow", "Smooth layers, no mixing, constant velocity at a point"],
    ["Turbulent flow", "Eddies and mixing; velocity at a point varies"],
    ["Stokes' law", "F = 6πηrv (small sphere, laminar flow)"],
    ["Viscosity and temperature (liquids)", "Viscosity decreases as temperature rises"],
    ["Ball at terminal velocity in liquid", "Weight = upthrust + viscous drag"],
    ["Unit of viscosity", "Pa s (N s m⁻²)"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y1: true, title: "Solid materials: stress, strain and the Young modulus",
  summary: "Hooke's law, elastic and plastic deformation, stress–strain graphs and measuring the Young modulus.",
  notes: `
<h3>Hooke's law</h3>
<p>The extension of a spring or wire is proportional to the force applied, up to the <b>limit of proportionality</b>: <b>ΔF = kΔx</b>, where k is the stiffness (N m<sup>−1</sup>).</p>
<p>Elastic strain energy (area under a force–extension graph): <b>E<sub>el</sub> = ½FΔx</b> (for the linear region) = ½kΔx<sup>2</sup>.</p>
<h3>Stress, strain and the Young modulus</h3>
<table>
<tr><td>Stress σ = F/A</td><td>Pa (N m<sup>−2</sup>)</td></tr>
<tr><td>Strain ε = Δx/x</td><td>No units</td></tr>
<tr><td>Young modulus E = σ/ε</td><td>Pa</td></tr>
</table>
<p>The Young modulus is a property of the material (not the sample). On a stress–strain graph it's the gradient of the linear region.</p>
<h3>Key terms</h3>
<ul>
<li><b>Elastic deformation</b>: returns to its original shape when the force is removed.</li>
<li><b>Plastic deformation</b>: permanent; doesn't return to its original shape.</li>
<li><b>Elastic limit</b>: the point beyond which deformation is plastic. <b>Yield point</b>: where the material extends a lot for little extra stress.</li>
<li><b>Ultimate tensile stress (UTS)</b>: the maximum stress a material can withstand. <b>Breaking stress</b>: where it fractures.</li>
<li><b>Brittle</b> materials (glass) break without plastic deformation. <b>Ductile</b> materials (copper) can be drawn into wires.</li>
</ul>
<p>Loading and unloading curves for rubber form a loop: the area inside is energy transferred as heat (hysteresis).</p>
<h3>Measuring the Young modulus</h3>
<ol>
<li>Clamp a long thin wire (e.g. 2 m copper) with a marker against a ruler, or use Searle's apparatus.</li>
<li>Measure the original length and the diameter (micrometer, several places).</li>
<li>Add masses in steps; record extension each time.</li>
<li>Plot stress against strain (or F against Δx): E = gradient (or gradient × x/A).</li>
</ol>
`,
  quiz: [
    { q: "A spring of k = 200 N m⁻¹ is stretched 0.050 m. Force?", o: ["10 N", "4000 N", "0.00025 N", "40 N"], a: 0, e: "" },
    { q: "Elastic strain energy in the spring above?", o: ["0.25 J", "0.50 J", "10 J", "5.0 J"], a: 0, e: "½ × 10 × 0.05." },
    { q: "Stress is…", o: ["Force ÷ cross-sectional area", "Extension ÷ length", "Stress ÷ strain", "Force × extension"], a: 0, e: "" },
    { q: "Units of strain?", o: ["None", "Pa", "m", "N"], a: 0, e: "" },
    { q: "The Young modulus is the gradient of…", o: ["The linear part of a stress–strain graph", "A force–time graph", "A strain–stress graph", "A force–extension graph always"], a: 0, e: "" },
    { q: "Plastic deformation is…", o: ["Permanent", "Reversible", "Only in rubber", "Below the elastic limit"], a: 0, e: "" },
    { q: "A wire of area 1.0 × 10⁻⁶ m² supports 50 N. Stress?", o: ["5.0 × 10⁷ Pa", "5.0 × 10⁻⁵ Pa", "50 Pa", "2.0 × 10⁻⁸ Pa"], a: 0, e: "" },
    { q: "A brittle material…", o: ["Breaks with little or no plastic deformation", "Stretches a lot before breaking", "Has no Young modulus", "Is always weak"], a: 0, e: "" },
    { q: "Why is a long, thin wire used to measure the Young modulus?", o: ["To get a measurable extension", "To make it stronger", "So it doesn't heat up", "To reduce mass"], a: 0, e: "" }
  ],
  flashcards: [
    ["Hooke's law", "ΔF = kΔx up to the limit of proportionality"],
    ["Elastic strain energy", "E = ½FΔx = ½kΔx²"],
    ["Stress", "σ = F/A (Pa)"],
    ["Strain", "ε = Δx/x (no units)"],
    ["Young modulus", "E = stress/strain (Pa)"],
    ["Elastic vs plastic", "Returns to shape vs permanent deformation"],
    ["Ultimate tensile stress", "Maximum stress before breaking"],
    ["Brittle vs ductile", "Snaps without plastic deformation vs can be drawn into wires"],
    ["Area of a loading–unloading loop", "Energy dissipated as heat"]
  ]
});

S2Data.detail("3a", { mistakes: ["Using diameter instead of radius when calculating A = πr<sup>2</sup>.", "Saying a thermistor's resistance falls because ions vibrate less. It's because more charge carriers are released."], tips: ["For I–V explanations, always link to either the number of charge carriers or lattice vibrations."], fact: "Electrons in a copper wire drift at only around a tenth of a millimetre per second, yet a light switches on instantly." });
S2Data.detail("3b", { mistakes: ["Forgetting to take the reciprocal at the end of a parallel calculation."], tips: ["For complex networks, simplify parallel parts first, then add series resistors."], fact: "Kirchhoff formulated his circuit laws in 1845, while still a student." });
S2Data.detail("3c", { mistakes: ["Thinking terminal p.d. equals emf whenever the cell is in a circuit. Only when no current flows."], tips: ["If you see 'internal resistance', write ε = I(R + r) first. Most questions follow from it."], fact: "Lithium-ion phone batteries have internal resistances of a few hundredths of an ohm, which rises as they age." });
S2Data.detail("4a", { mistakes: ["Forgetting upthrust in the terminal-velocity equation."], tips: ["Check laminar flow is a fair assumption: Stokes' law only works at low speeds for small spheres."], fact: "Honey's viscosity is roughly 10 000 times that of water at room temperature." });
S2Data.detail("4b", { mistakes: ["Calling the Young modulus a property of the wire. It's a property of the material."], tips: ["In the Young modulus experiment, the biggest uncertainty is usually the diameter, because it's squared in the area."], fact: "Spider silk has a higher tensile strength per unit mass than steel." });
