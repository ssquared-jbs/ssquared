/* A-level Physics² — Topics 6–7: Further mechanics, Electric and magnetic fields */

S2Data.add({
  id: "6a", group: 6, y2: true, title: "Momentum and impulse",
  summary: "Momentum, Newton's second law in momentum form, impulse, conservation of momentum and collisions.",
  notes: R`
<h3>Momentum</h3>
<p>Momentum <b>\(p = mv\)</b> (kg m s<sup>−1</sup>), a vector.</p>
<p>Newton's second law in general form: the resultant force equals the rate of change of momentum, <b>\(F = \Delta p/\Delta t\)</b>. For constant mass this gives \(F = ma\).</p>
<h3>Impulse</h3>
<div class="box box-key"><span class="box-title">Impulse = FΔt = Δp</span>On a force–time graph, impulse is the area under the graph.</div>
<p>Increasing the collision time reduces the average force for the same change in momentum: crumple zones, airbags, bending your knees when landing.</p>
<h3>Conservation of momentum</h3>
<p>In a closed system (no external forces), total momentum before = total momentum after.</p>
<p><b>Example</b>: a 2.0 kg trolley at 3.0 m s<sup>−1</sup> hits and sticks to a stationary 1.0 kg trolley. \(6.0 = 3.0v\), so v = <b>2.0 m s<sup>−1</sup></b>.</p>
<p><b>Explosions</b>: total momentum is zero before, so the pieces move apart with equal and opposite momenta.</p>
<h3>Elastic and inelastic collisions</h3>
<ul>
<li><b>Elastic</b>: kinetic energy is conserved (e.g. gas molecules colliding).</li>
<li><b>Inelastic</b>: kinetic energy is not conserved; some is transferred to heat, sound and deformation. Momentum is still conserved.</li>
<li>Useful link: \(E_{k} = p^{2}/2m\).</li>
</ul>
<p>In the example above, KE before = ½ × 2 × 9 = 9.0 J; after = ½ × 3 × 4 = 6.0 J, so it's inelastic.</p>
<h3>Collisions in two dimensions</h3>
<p>Resolve momenta into perpendicular components; momentum is conserved in each direction separately.</p>
`,
  quiz: [
    { q: "Momentum of a 1500 kg car at 20 m s⁻¹?", o: ["30 000 kg m s⁻¹", "75 kg m s⁻¹", "300 000 kg m s⁻¹", "1520 kg m s⁻¹"], a: 0, e: "" },
    { q: "Impulse equals…", o: ["Change in momentum", "Force × distance", "Change in kinetic energy", "Mass × acceleration × distance"], a: 0, e: "" },
    { q: "A 0.15 kg ball hits a wall at 20 m s⁻¹ and rebounds at 20 m s⁻¹. Change in momentum?", o: ["6.0 kg m s⁻¹", "0", "3.0 kg m s⁻¹", "40 kg m s⁻¹"], a: 0, e: R`\(0.15 \times 40\).` },
    { q: "In an elastic collision, which is conserved?", o: ["Momentum and kinetic energy", "Momentum only", "KE only", "Neither"], a: 0, e: "" },
    { q: "Why do airbags reduce injury?", o: ["Increase time for the momentum change, reducing force", "Reduce the momentum change", "Increase the force", "Absorb all the momentum"], a: 0, e: "" },
    { q: "A 3.0 kg gun fires a 0.010 kg bullet at 300 m s⁻¹. Recoil speed?", o: ["1.0 m s⁻¹", "3.0 m s⁻¹", "0.10 m s⁻¹", "100 m s⁻¹"], a: 0, e: "" },
    { q: "Area under a force–time graph gives…", o: ["Impulse", "Work done", "Power", "Acceleration"], a: 0, e: "" },
    { q: "Kinetic energy in terms of momentum?", o: ["p²/2m", "p/2m", "2mp²", "mp²/2"], a: 0, e: "" },
    { q: "Momentum is conserved when…", o: ["No external resultant force acts", "The collision is elastic", "Objects stick together", "Friction is large"], a: 0, e: "" }
  ],
  flashcards: [
    ["Momentum", "p = mv (vector)"],
    ["Newton's second law (momentum form)", R`\(F = \Delta p/\Delta t\)`],
    ["Impulse", "FΔt = Δp; area under F–t graph"],
    ["Conservation of momentum", "Total momentum before = after (no external force)"],
    ["Elastic collision", "Momentum and kinetic energy conserved"],
    ["Inelastic collision", "Momentum conserved; KE not conserved"],
    ["KE from momentum", "Eₖ = p²/2m"],
    ["Explosion", "Total momentum zero; pieces have equal and opposite momenta"]
  ]
});

S2Data.add({
  id: "6b", group: 6, y2: true, title: "Circular motion",
  summary: "Angular displacement and speed, centripetal acceleration and force, and circular motion problems.",
  notes: R`
<h3>Describing circular motion</h3>
<ul>
<li><b>Radian</b>: the angle subtended at the centre by an arc equal to the radius. \(2 \pi rad = 360\)°.</li>
<li>Angular velocity <b>\(\omega = \Delta \theta /\Delta t = 2 \pi /T = 2 \pi f\)</b> (rad s<sup>−1</sup>).</li>
<li>Linear speed <b>\(v = \omega r\)</b>.</li>
</ul>
<h3>Centripetal acceleration and force</h3>
<p>An object moving in a circle at constant speed is accelerating because its velocity (direction) keeps changing. The acceleration is directed towards the centre.</p>
<div class="box box-key"><span class="box-title">Centripetal</span>\(a = v^{2}/r = \omega ^{2}r\) &nbsp;&nbsp; \(F = mv^{2}/r = m\omega ^{2}r\)</div>
<ul>
<li>The centripetal force isn't a new force. It's provided by an existing force: tension (string), friction (car on a bend), gravity (orbits), normal reaction (rollercoaster loop).</li>
<li>The centripetal force does no work because it's perpendicular to the velocity, so speed stays constant.</li>
</ul>
<h3>Vertical circles</h3>
<p>At the top of a loop, weight and reaction both point to the centre: \(R + mg = mv^{2}/r\). At the bottom: \(R - mg = mv^{2}/r\), so you feel heavier. The minimum speed at the \(top (R = 0)\) is \(v = √\)(gr).</p>
<p><b>Example</b>: a 0.20 kg ball on a 0.50 m string makes 2.0 revolutions per second horizontally. ω = 4π = 12.6 rad s<sup>−1</sup>; \(F = 0.20 \times 12.6\)<sup>2</sup> × 0.50 = <b>15.8 N</b>.</p>
`,
  quiz: [
    { q: "How many radians in one full turn?", o: ["2π", "π", "360", "π/2"], a: 0, e: "" },
    { q: "Angular velocity of something with period 4.0 s?", o: ["1.57 rad s⁻¹", "0.25 rad s⁻¹", "25.1 rad s⁻¹", "6.28 rad s⁻¹"], a: 0, e: R`\(\dfrac{2 \pi}{4}\).` },
    { q: "Centripetal acceleration points…", o: ["Towards the centre", "Away from the centre", "Along the tangent", "Upwards"], a: 0, e: "" },
    { q: "A 1000 kg car takes a 50 m radius bend at 10 m s⁻¹. Centripetal force?", o: ["2000 N", "200 N", "20 000 N", "500 N"], a: 0, e: "" },
    { q: "What provides the centripetal force for a car on a flat bend?", o: ["Friction", "Weight", "Engine force", "Air resistance"], a: 0, e: "" },
    { q: "Why does centripetal force do no work?", o: ["It's perpendicular to the velocity", "It's too small", "The object is stationary", "It cancels out"], a: 0, e: "" },
    { q: "Minimum speed at the top of a vertical loop of radius r?", o: ["√(gr)", "gr", "√(2gr)", "g/r"], a: 0, e: "" },
    { q: "v = ωr. For ω = 5.0 rad s⁻¹ and r = 0.40 m, v = ?", o: ["2.0 m s⁻¹", "12.5 m s⁻¹", "0.08 m s⁻¹", "5.4 m s⁻¹"], a: 0, e: "" },
    { q: "At the bottom of a vertical circle, the reaction force is…", o: ["Greater than the weight", "Less than the weight", "Equal to the weight", "Zero"], a: 0, e: "" }
  ],
  flashcards: [
    ["Radian", "Angle where arc length = radius; 2π rad = 360°"],
    ["Angular velocity", R`\(\omega = \Delta \theta /\Delta t = 2 \pi /T = 2 \pi f\)`],
    ["Linear and angular speed", R`\(v = \omega r\)`],
    ["Centripetal acceleration", R`\(a = v^2/r = \omega ^2r\)`],
    ["Centripetal force", R`\(F = mv^2/r = m\omega ^2r\)`],
    ["Why constant speed in a circle is acceleration", "Direction (velocity) is changing"],
    ["Top of a vertical loop", "R + mg = mv²/r; min speed √(gr)"],
    ["Bottom of a vertical loop", R`\(R - mg = mv^2/r\)`]
  ]
});

S2Data.add({
  id: "7a", group: 7, y2: true, title: "Electric fields",
  summary: "Field strength, Coulomb's law, radial and uniform fields, electric potential and equipotentials.",
  notes: R`
<h3>Electric field strength</h3>
<p>An electric field is a region where a charged particle experiences a force. <b>\(E = F/Q\)</b> (N C<sup>−1</sup>). Field lines go from + to −.</p>
<h3>Radial fields (point charges)</h3>
<div class="box box-key"><span class="box-title">Coulomb's law</span>\(F = kQ_{1}Q_{2}/r^{2}\), where \(k = 1/4\pi \varepsilon _{0} = 8.99 \times 10^{9}\ \text{N}\,\text{m}^{2}\,\text{C}^{-2}\)</div>
<ul>
<li>Field strength of a point charge: <b>\(E = kQ/r^{2}\)</b>.</li>
<li>Electric potential: <b>\(V = kQ/r\)</b> (zero at infinity). Potential is the work done per unit charge bringing a positive charge from infinity to that point.</li>
<li>Inverse square law: double r → force and E fall to a quarter.</li>
</ul>
<h3>Uniform fields</h3>
<ul>
<li>Between parallel plates: <b>\(E = V/d\)</b> (also V m<sup>−1</sup>). Field lines are parallel and equally spaced.</li>
<li>A charged particle entering at right angles follows a parabola, like a projectile: constant velocity along the plates, constant acceleration \((a = EQ/m)\) across them.</li>
<li>Millikan's oil drop: when a drop is stationary, \(QV/d = mg\).</li>
</ul>
<h3>Equipotentials</h3>
<p>Equipotential surfaces join points of equal potential. They're perpendicular to field lines. No work is done moving along one. In a uniform field they're equally spaced parallel planes; around a point charge, concentric spheres getting further apart.</p>
<p>Energy gained moving through a p.d.: \(W = QV\). E = −ΔV/Δr (field strength is the potential gradient).</p>
`,
  quiz: [
    { q: "Electric field strength is defined as…", o: ["Force per unit positive charge", "Charge per unit area", "Potential × distance", "Energy per unit charge"], a: 0, e: "" },
    { q: "Field strength between plates 2.0 cm apart with 500 V across them?", o: ["2.5 × 10⁴ V m⁻¹", "250 V m⁻¹", "1.0 × 10⁴ V m⁻¹", "10 V m⁻¹"], a: 0, e: "" },
    { q: "Doubling the distance from a point charge changes E by…", o: ["× ¼", R`\(\times \tfrac12\)`, R`\(\times 2\)`, R`\(\times 4\)`], a: 0, e: "" },
    { q: "Electric potential due to a point charge varies as…", o: ["1/r", "1/r²", "r", "r²"], a: 0, e: "" },
    { q: "Equipotentials are…", o: ["Perpendicular to field lines", "Parallel to field lines", "Always circular", "Where E = 0"], a: 0, e: "" },
    { q: "Work done moving 2.0 μC through 100 V?", o: ["2.0 × 10⁻⁴ J", "50 J", "200 J", "2.0 × 10⁻⁸ J"], a: 0, e: "" },
    { q: "Path of an electron entering a uniform field at 90°?", o: ["Parabola", "Circle", "Straight line", "Spiral"], a: 0, e: "" },
    { q: "In Coulomb's law, k = …", o: ["1/4πε₀", "4πε₀", "ε₀", "1/ε₀"], a: 0, e: "" },
    { q: "Field lines point…", o: ["From positive to negative", "From negative to positive", "Along equipotentials", "In circles"], a: 0, e: "" }
  ],
  flashcards: [
    ["Electric field strength", R`\(E = F/Q\)`],
    ["Coulomb's law", "F = kQ₁Q₂/r², k = 1/4πε₀"],
    ["Radial field strength", R`\(E = kQ/r^2\)`],
    ["Electric potential (point charge)", R`\(V = kQ/r\)`],
    ["Uniform field between plates", R`\(E = V/d\)`],
    ["Equipotentials", "Perpendicular to field lines; no work done along them"],
    ["Work moving charge through p.d.", R`\(W = QV\)`],
    ["Millikan stationary drop", R`\(QV/d = mg\)`]
  ]
});

S2Data.add({
  id: "7b", group: 7, y2: true, title: "Capacitors",
  summary: "Capacitance, energy stored, capacitors in circuits, and charging and discharging with exponential equations.",
  notes: R`
<h3>Capacitance</h3>
<p>A capacitor stores charge on two plates separated by an insulator. <b>\(C = Q/V\)</b> (farads, F).</p>
<ul>
<li>Energy stored: <b>\(W = \tfrac12QV = \tfrac12CV^{2} = \tfrac12Q^{2}/C\)</b>. On a Q–V graph it's the area under the line.</li>
<li>Series: \(1/C_{T} = 1/C_{1} + 1/C_{2}\). Parallel: \(C_{T} = C_{1} + C_{2}\). (The opposite way round to resistors.)</li>
</ul>
<h3>Discharging through a resistor</h3>
<div class="box box-key"><span class="box-title">Exponential decay</span>\(Q = Q_{0}e\)<sup>−t/RC</sup> (also for V and I). Time constant \(\tau = RC\).</div>
<ul>
<li>After one time constant, Q falls to 1/e ≈ <b>37%</b> of its initial value.</li>
<li>Half-life: \(t_{\tfrac12} = RC \ln 2\) ≈ 0.69RC.</li>
<li>\(\ln Q = \ln Q_{0} - t/RC\): a graph of ln V against t is a straight line with gradient −1/RC.</li>
</ul>
<h3>Charging</h3>
<p>Through a resistor from a supply of emf V<sub>0</sub>: \(V = V_{0}(1 - e\)<sup>−t/RC</sup>), \(Q = Q_{0}(1 - e\)<sup>−t/RC</sup>). Current still decays: \(I = I_{0}e\)<sup>−t/RC</sup>. After τ, the capacitor is 63% charged.</p>
<h3>Experiment</h3>
<p>Charge a capacitor, then discharge it through a known resistor while logging V (data logger or voltmeter and stopwatch). Plot ln V against t; gradient = −1/RC, so find C.</p>
<p><b>Example</b>: 470 μF through 10 kΩ: \(\tau = 4.7\ \text{s}\). After 4.7 s, a 12 V capacitor is at 12 × 0.37 = <b>4.4 V</b>.</p>
`,
  quiz: [
    { q: "A 220 μF capacitor is charged to 9.0 V. Charge stored?", o: ["1.98 × 10⁻³ C", "24.4 μC", "41 C", "2.0 × 10⁻⁴ C"], a: 0, e: "" },
    { q: "Energy stored by 100 μF at 20 V?", o: ["0.020 J", "0.0020 J", "2.0 J", "0.040 J"], a: 0, e: "½ × 10⁻⁴ × 400." },
    { q: "Time constant of 100 μF and 50 kΩ?", o: ["5.0 s", "0.50 s", "50 s", "2.0 s"], a: 0, e: "" },
    { q: "After one time constant of discharge, V is about…", o: ["37% of V₀", "63% of V₀", "50% of V₀", "0"], a: 0, e: "" },
    { q: "Total capacitance of 10 μF and 20 μF in parallel?", o: ["30 μF", "6.7 μF", "200 μF", "15 μF"], a: 0, e: "" },
    { q: "Total capacitance of 10 μF and 10 μF in series?", o: ["5 μF", "20 μF", "10 μF", "100 μF"], a: 0, e: "" },
    { q: "A graph of ln V against t during discharge has gradient…", o: [R`\(-1/RC\)`, R`\(-RC\)`, "RC", "V₀"], a: 0, e: "" },
    { q: "During charging, the current…", o: ["Decreases exponentially", "Increases exponentially", "Stays constant", "Increases linearly"], a: 0, e: "" },
    { q: "Half-life of discharge in terms of RC?", o: ["0.69RC", "RC", "2RC", "0.37RC"], a: 0, e: "" }
  ],
  flashcards: [
    ["Capacitance", "C = Q/V (farads)"],
    ["Energy stored", R`\(W = \tfrac12QV = \tfrac12CV^2 = \tfrac12Q^2/C\)`],
    ["Capacitors in parallel", "C_T = C₁ + C₂"],
    ["Capacitors in series", "1/C_T = 1/C₁ + 1/C₂"],
    ["Discharge equation", "Q = Q₀e^(−t/RC)"],
    ["Time constant", "τ = RC; falls to 37% after τ"],
    ["Charging voltage", "V = V₀(1 − e^(−t/RC))"],
    ["ln graph for discharge", "ln V vs t: gradient −1/RC"],
    ["Discharge half-life", R`\(t\tfrac12 = RC \ln 2\)`]
  ]
});

S2Data.add({
  id: "7c", group: 7, y2: true, title: "Magnetic fields and forces",
  summary: "Magnetic flux density, the force on a current-carrying wire and on moving charges, and Fleming's left-hand rule.",
  notes: R`
<h3>Magnetic flux density</h3>
<p>Magnetic flux density B is measured in tesla (T). Flux <b>\(\Phi = BA\)</b> (webers, Wb) for a field perpendicular to area A. Flux linkage = NΦ.</p>
<h3>Force on a current-carrying wire</h3>
<div class="box box-key"><span class="box-title">\(F = BIl \sin \theta\)</span>θ is the angle between the wire and the field. Maximum when perpendicular. Direction: Fleming's left-hand rule (First finger Field, seCond finger Current, thuMb Motion).</div>
<p>1 T is the flux density that gives a force of 1 N on 1 m of wire carrying 1 A perpendicular to the field.</p>
<h3>Force on a moving charge</h3>
<p><b>\(F = Bqv \sin \theta\)</b>. For a particle moving perpendicular to the field, the force is always at 90° to its velocity, so it moves in a <b>circle</b>:</p>
<p>\(Bqv = mv^{2}/r\), so <b>\(r = mv/Bq = p/Bq\)</b>.</p>
<ul>
<li>Faster or heavier particles make larger circles; stronger fields or larger charges make smaller circles.</li>
<li>Used in mass spectrometers, cyclotrons and particle detectors to identify particles.</li>
<li>Remember: for negative charges (electrons), the current direction is opposite to their motion.</li>
</ul>
<h3>Measuring B</h3>
<p>Place a current-carrying wire across a magnet on a top-pan balance. The change in reading × g gives F; plot F against I: gradient = Bl.</p>
`,
  quiz: [
    { q: "Force on a 0.20 m wire carrying 3.0 A at 90° to a 0.50 T field?", o: ["0.30 N", "3.0 N", "0.033 N", "1.2 N"], a: 0, e: "" },
    { q: "When is the force on a current-carrying wire zero?", o: ["When the wire is parallel to the field", "When perpendicular", "Always", "When the current is large"], a: 0, e: "" },
    { q: "In Fleming's left-hand rule, the second finger represents…", o: ["Current", "Field", "Motion", "Voltage"], a: 0, e: "" },
    { q: "Why does a charged particle move in a circle in a uniform magnetic field?", o: ["The force is always perpendicular to its velocity", "The field is circular", "It has constant acceleration in one direction", "It loses energy"], a: 0, e: "" },
    { q: "Radius of the circular path?", o: [R`\(r = mv/Bq\)`, R`\(r = Bq/mv\)`, R`\(r = mBq/v\)`, R`\(r = v/Bqm\)`], a: 0, e: "" },
    { q: "Doubling a particle's speed changes its radius by…", o: [R`\(\times 2\)`, R`\(\times 4\)`, R`\(\times \tfrac12\)`, "No change"], a: 0, e: "" },
    { q: "Unit of magnetic flux density?", o: ["Tesla", "Weber", "Henry", "Farad"], a: 0, e: "" },
    { q: "Magnetic flux through 0.020 m² in a 0.40 T perpendicular field?", o: ["8.0 × 10⁻³ Wb", "20 Wb", "0.42 Wb", "0.050 Wb"], a: 0, e: "" },
    { q: "Force on an electron (1.6 × 10⁻¹⁹ C) at 2.0 × 10⁶ m s⁻¹ perpendicular to 0.10 T?", o: ["3.2 × 10⁻¹⁴ N", "3.2 × 10⁻¹² N", "1.6 × 10⁻¹⁴ N", "6.4 × 10⁻¹³ N"], a: 0, e: "" }
  ],
  flashcards: [
    ["Magnetic flux", R`\(\Phi = BA (Wb)\)`],
    ["Flux linkage", "NΦ"],
    ["Force on a wire", R`\(F = BIl \sin \theta\)`],
    ["Fleming's left-hand rule", "First finger Field, seCond Current, thuMb Motion"],
    ["Force on a moving charge", R`\(F = Bqv \sin \theta\)`],
    ["Radius of path in B field", R`\(r = mv/Bq = p/Bq\)`],
    ["Definition of 1 tesla", "1 N on 1 m of wire carrying 1 A perpendicular to the field"],
    ["Charged particle in B field", "Circular motion; force perpendicular to velocity; no work done"]
  ]
});

S2Data.add({
  id: "7d", group: 7, y2: true, title: "Electromagnetic induction",
  summary: "Faraday's and Lenz's laws, induced emf, generators and transformers.",
  notes: R`
<h3>Induced emf</h3>
<p>An emf is induced when there is a change of flux linkage, for example when a conductor cuts magnetic field lines or the field through a coil changes.</p>
<div class="box box-key"><span class="box-title">Faraday's law and Lenz's law</span>ε = −d(NΦ)/dt. The size of the induced emf equals the rate of change of flux linkage (Faraday). The minus sign means the induced emf acts to <b>oppose</b> the change that causes it (Lenz).</div>
<ul>
<li>Lenz's law follows from conservation of energy: you must do work to push a magnet into a coil, because the induced current makes a repelling pole.</li>
<li>A straight conductor of length l moving at speed v perpendicular to B: \(\varepsilon = Blv\).</li>
<li>Fleming's right-hand rule gives the direction of the induced current in a generator.</li>
</ul>
<h3>Generators</h3>
<p>A coil of N turns, area A, rotating at ω in field B: flux linkage NBA cos ωt, so \(\varepsilon = BAN\omega \sin \omega t\). Peak \(emf = BAN\omega\). Faster rotation gives a bigger and more frequent emf.</p>
<h3>Transformers</h3>
<ul>
<li>An alternating current in the primary coil gives a changing flux in the iron core, which induces an emf in the secondary.</li>
<li>\(V_{s}/V_{p} = N_{s}/N_{p}\). For an ideal transformer, \(V_{p}I_{p} = V_{s}I_{s}\).</li>
<li>Losses come from eddy currents (reduced by a laminated core), resistance of the coils, and magnetic hysteresis.</li>
<li>High-voltage transmission reduces current, and so reduces I<sup>2</sup>R losses in cables.</li>
</ul>
<p><b>Example</b>: a magnet changes the flux through a 200-turn coil by 3.0 mWb in 0.10 s. \(\varepsilon = \dfrac{200 \times 3.0 \times 10^{-3}}{0.10}\) = <b>6.0 V</b>.</p>
`,
  quiz: [
    { q: "Faraday's law: induced emf equals…", o: ["Rate of change of flux linkage", "Flux linkage", "Flux density × area", "Current × resistance"], a: 0, e: "" },
    { q: "Lenz's law is a consequence of conservation of…", o: ["Energy", "Charge", "Momentum", "Mass"], a: 0, e: "" },
    { q: "Flux through a 500-turn coil changes by 2.0 mWb in 0.050 s. emf?", o: ["20 V", "0.020 V", "50 V", "0.20 V"], a: 0, e: "" },
    { q: "A 0.50 m rod moves at 4.0 m s⁻¹ perpendicular to a 0.20 T field. emf?", o: ["0.40 V", "10 V", "0.10 V", "1.6 V"], a: 0, e: "" },
    { q: "A transformer has 100 primary turns and 2000 secondary turns. 12 V in. Output?", o: ["240 V", "0.6 V", "12 V", "24 V"], a: 0, e: "" },
    { q: "Why are transformer cores laminated?", o: ["To reduce eddy currents", "To increase flux", "To make them lighter", "To increase resistance of coils"], a: 0, e: "" },
    { q: "Peak emf of a rotating coil?", o: ["BANω", "BAN", "BAω", "BANω²"], a: 0, e: "" },
    { q: "Why is electricity transmitted at high voltage?", o: ["Lower current means lower I²R losses", "It travels faster", "It's safer", "It increases power"], a: 0, e: "" },
    { q: "Which rule gives the direction of induced current in a generator?", o: ["Fleming's right-hand rule", "Fleming's left-hand rule", "Right-hand grip rule", "Lenz's law only"], a: 0, e: "" }
  ],
  flashcards: [
    ["When is emf induced?", "When flux linkage changes"],
    ["Faraday's law", "ε = rate of change of flux linkage"],
    ["Lenz's law", "Induced emf opposes the change causing it (energy conservation)"],
    ["Moving rod emf", R`\(\varepsilon = Blv\)`],
    ["Generator emf", "ε = BANω sin ωt; peak BANω"],
    ["Transformer equation", R`\(V_{s}/V_{p} = N_{s}/N_{p}\)`],
    ["Ideal transformer power", "VpIp = VsIs"],
    ["Laminated core", "Reduces eddy current losses"],
    ["High-voltage transmission", "Smaller current, smaller I²R losses"]
  ]
});

S2Data.detail("6a", { mistakes: ["Forgetting momentum is a vector: a rebound changes the sign of the velocity, so Δp = m(v + u)."], tips: ["Check whether a collision is elastic by comparing total KE before and after."], fact: "A Newton's cradle works because steel balls collide almost elastically, passing momentum and energy along the line." });
S2Data.detail("6b", { mistakes: ["Drawing a centripetal force as an extra force on a free-body diagram. It's the resultant of real forces."], tips: ["Convert rpm or revolutions per second to rad s<sup>−1</sup> by multiplying by 2π (and dividing by 60 for rpm)."], fact: "Astronauts train in centrifuges reaching up to 9 g, where the centripetal force on them is nine times their weight." });
S2Data.detail("7a", { mistakes: ["Using E = V/d for a point charge. It only applies to uniform fields."], tips: ["Compare electric and gravitational fields: same inverse-square shape, but gravity only attracts."], fact: "The electric force between a proton and electron is about 10<sup>39</sup> times stronger than the gravitational force between them." });
S2Data.detail("7b", { mistakes: ["Swapping the series and parallel rules for capacitors."], tips: ["Learn the shapes: discharge curves fall exponentially; charging Q and V rise towards a maximum; current always decays."], fact: "Supercapacitors in some buses recharge at each stop in under a minute." });
S2Data.detail("7c", { mistakes: ["Using Fleming's left-hand rule with electron flow instead of conventional current."], tips: ["For circular paths, equate Bqv with mv<sup>2</sup>/r, then rearrange for whatever the question asks."], fact: "The Earth's magnetic field (about 50 μT) bends charged particles from the Sun towards the poles, causing the aurora." });
S2Data.detail("7d", { mistakes: ["Saying an emf is induced because there's a magnetic field. It's the change in flux linkage that matters."], tips: ["For Lenz's law questions, state the direction of the induced field and say it opposes the change."], fact: "Induction hobs heat pans directly by inducing eddy currents in them; the glass top only warms from the pan." });
