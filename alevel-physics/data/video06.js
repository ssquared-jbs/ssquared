/* Video explainers — A-level Physics Topics 6–13. */

S2Data.video("6a", {
  scenes: [
    { type: "title", title: "Momentum and impulse", sub: "Collisions, explosions and stopping safely.", mark: "p = mv",
      say: ["Momentum is mass times velocity. It's a vector, and in a closed system it's always conserved."] },
    { type: "equation", title: "Force and momentum", rows: [["F = Δp/Δt"], [{ t: "Impulse = FΔt = Δp", k: 1, s: 1 }]],
      note: "Impulse = area under a force–time graph", noteStep: 1,
      say: ["Newton's second law, in its general form, says force is the rate of change of momentum.",
            "Rearranging gives impulse: force times time equals change in momentum. On a force time graph, it's the area underneath."] },
    { type: "calc", title: "Conservation of momentum", q: "2.0 kg trolley at 3.0 m s⁻¹ hits a stationary 1.0 kg trolley; they stick.",
      lines: ["Before: 2.0 × 3.0 = 6.0 kg m s⁻¹", "After: 3.0 × v = 6.0", "v = 2.0 m s⁻¹"],
      say: ["Total momentum before is six kilogram metres per second.", "Afterwards, the combined three kilogram mass carries the same momentum.", "So they move off at two metres per second. Kinetic energy falls from nine joules to six, so this collision is inelastic."] },
    { type: "compare", title: "Collisions", h: ["Momentum", "Kinetic energy"],
      rows: [["Elastic", "Conserved", "Conserved"], ["Inelastic", "Conserved", "Not conserved"]],
      say: ["In an elastic collision, both momentum and kinetic energy are conserved.", "In an inelastic collision, momentum is still conserved, but some kinetic energy becomes heat, sound or deformation."] },
    { type: "quiz", q: "Why do crumple zones reduce injuries?", o: ["They reduce the change in momentum", "They increase the collision time, reducing force", "They increase the force", "They stop momentum being conserved"], a: 1,
      why: "Same Δp over a longer Δt means a smaller F.", say: ["How do crumple zones protect people?"] }
  ]
});

S2Data.video("6b", {
  scenes: [
    { type: "title", title: "Circular motion", sub: "Why moving in a circle needs a force.", mark: "ω",
      say: ["Something moving in a circle at constant speed is still accelerating, because its direction keeps changing."] },
    { type: "equation", title: "Describing circular motion", rows: [["ω = 2π/T", "·", "v = ωr"], [{ t: "a = v²/r = ω²r", k: 1, s: 1 }], [{ t: "F = mv²/r = mω²r", s: 2 }]],
      say: ["Angular velocity omega is two pi over the period, in radians per second. Linear speed is omega times r.",
            "The centripetal acceleration points towards the centre: v squared over r, or omega squared r.",
            "So the resultant force needed, the centripetal force, is m v squared over r."] },
    { type: "points", title: "What provides the force?", items: ["Car on a bend: friction", "Satellite: gravity", "Ball on a string: tension", "Rollercoaster loop: weight and reaction"],
      say: ["Centripetal force isn't a new kind of force. For a car on a bend, it's friction between the tyres and road.", "For a satellite, it's gravity.", "For a ball whirled on a string, it's the tension.", "On a loop the loop, it's a combination of weight and the normal reaction."] },
    { type: "calc", title: "Top of a loop", q: "Minimum speed at the top of a loop of radius r?",
      lines: ["At minimum, the reaction is zero", "mg = mv²/r", "v = √(gr)"],
      say: ["At the slowest safe speed, the track pushes with no force at all.", "So weight alone provides the centripetal force.", "That gives a minimum speed of root g r."] },
    { type: "quiz", q: "A string whirling a ball breaks. The ball moves…", o: ["Outwards along the radius", "Along the tangent", "In a smaller circle", "Towards the centre"], a: 1,
      why: "With no centripetal force, it continues in a straight line in its direction of motion.", say: ["What happens to the ball when the string breaks?"] }
  ]
});

S2Data.video("7a", {
  scenes: [
    { type: "title", title: "Electric fields", sub: "Forces between charges.", mark: "E",
      say: ["An electric field is a region where a charge feels a force. Its strength is the force per unit positive charge."] },
    { type: "equation", title: "Radial fields", rows: [["F = kQ₁Q₂/r²"], [{ t: "E = kQ/r²", s: 1 }, { t: "·", s: 1 }, { t: "V = kQ/r", s: 1 }]],
      note: "k = 1/4πε₀ = 8.99 × 10⁹ N m² C⁻²", noteStep: 1,
      say: ["Coulomb's law: the force between two point charges is proportional to the product of the charges and inversely proportional to the square of their separation.",
            "So the field strength of a point charge falls as one over r squared, and the potential as one over r."] },
    { type: "points", title: "Uniform fields", items: ["Between parallel plates: E = V/d", "Field lines parallel and equally spaced", "Charged particles follow parabolas"],
      say: ["Between charged parallel plates the field is uniform, with strength V over d.", "The field lines are parallel and evenly spaced.", "A charged particle fired between them has constant velocity along the plates and constant acceleration across them, so it follows a parabola, just like a projectile."] },
    { type: "points", title: "Equipotentials", items: ["Join points of equal potential", "Always perpendicular to field lines", "No work done moving along one"],
      say: ["Equipotential surfaces join points at the same potential.", "They always cross field lines at right angles.", "Moving a charge along an equipotential takes no work."] },
    { type: "quiz", q: "Doubling the distance from a point charge changes field strength by…", o: ["× ½", "× ¼", "× 2", "× 4"], a: 1,
      why: "Inverse square law.", say: ["What happens to the field strength if you double your distance from a charge?"] }
  ]
});

S2Data.video("7b", {
  scenes: [
    { type: "title", title: "Capacitors", sub: "Storing charge, and letting it go exponentially.", mark: "C",
      say: ["A capacitor stores charge on two plates separated by an insulator. Its capacitance is the charge stored per volt."] },
    { type: "equation", title: "Capacitance and energy", rows: [["C = Q/V"], [{ t: "W = ½QV = ½CV²", k: 1, s: 1 }]],
      say: ["Capacitance is Q over V, measured in farads.", "The energy stored is a half Q V, the area under a charge against voltage graph."] },
    { type: "graph", title: "Discharging through a resistor", x: "Time", y: "Charge Q",
      lines: [{ pts: [[0, 0.9], [0.15, 0.6], [0.3, 0.4], [0.5, 0.22], [0.75, 0.1], [1, 0.05]], s: 0 }],
      marks: [{ x: 0.3, y: 0.4, t: "after τ = RC: 37% left", s: 1, anchor: "start", dx: 20, dy: -10 }],
      say: ["When a capacitor discharges through a resistor, the charge falls exponentially: Q equals Q nought e to the minus t over R C.",
            "The time constant, R C, is the time for the charge to fall to about thirty seven percent. A larger resistor or capacitor means a slower discharge."] },
    { type: "flow", title: "Finding C experimentally", nodes: ["Discharge through<br>known R", "Log V against t", "Plot ln V vs t:<br>gradient = −1/RC"],
      say: ["Charge the capacitor, then let it discharge through a known resistor.", "Record the p d at regular times with a data logger or a voltmeter and stopwatch.", "Plot l n V against time. It's a straight line with gradient minus one over R C, so you can calculate C."] },
    { type: "quiz", q: "After one time constant of charging, a capacitor is about…", o: ["37% charged", "50% charged", "63% charged", "100% charged"], a: 2,
      why: "1 − e⁻¹ ≈ 0.63.", say: ["How charged is a capacitor after one time constant?"] }
  ]
});

S2Data.video("7c", {
  scenes: [
    { type: "title", title: "Magnetic forces", sub: "Forces on wires and on moving charges.", mark: "B",
      say: ["Magnetic fields push on currents and on moving charges. The force is always at right angles to the motion."] },
    { type: "equation", title: "Two equations", rows: [["F = BIl sin θ"], [{ t: "F = Bqv sin θ", k: 1, s: 1 }]],
      note: "Direction: Fleming's left-hand rule (conventional current)", noteStep: 1,
      say: ["The force on a wire carrying current I, of length l, in a field B, is B I l sin theta. It's biggest when the wire is perpendicular to the field.",
            "The force on a single moving charge is B q v. Use Fleming's left hand rule for the direction, remembering electrons move opposite to conventional current."] },
    { type: "flow", title: "Charged particles move in circles", nodes: ["Force ⟂ velocity", "Speed constant,<br>direction changes", "Bqv = mv²/r<br>→ r = mv/Bq"],
      say: ["The magnetic force is always perpendicular to the particle's velocity.", "So it changes the direction but never the speed. That's circular motion.", "Setting B q v equal to m v squared over r gives the radius: m v over B q. Faster or heavier particles make bigger circles."] },
    { type: "points", title: "Uses", items: ["Mass spectrometers separate ions by mass", "Cyclotrons accelerate particles in spirals", "Detectors measure momentum from track curvature"],
      say: ["Mass spectrometers use different radii to separate ions of different mass.", "Cyclotrons use a magnetic field to keep particles going round.", "Particle detectors measure how much tracks curve to find each particle's momentum and charge."] },
    { type: "quiz", q: "A proton's speed doubles in the same field. Its path radius…", o: ["Halves", "Doubles", "Quadruples", "Stays the same"], a: 1,
      why: "r = mv/Bq.", say: ["What happens to the radius if the proton goes twice as fast?"] }
  ]
});

S2Data.video("7d", {
  scenes: [
    { type: "title", title: "Electromagnetic induction", sub: "Making electricity from changing magnetic fields.", mark: "ε",
      say: ["Changing the magnetic flux through a coil induces an e m f. This is how generators and transformers work."] },
    { type: "equation", title: "Faraday and Lenz", rows: [["ε = −Δ(NΦ)/Δt"]],
      note: "Size: rate of change of flux linkage (Faraday) · minus sign: opposes the change (Lenz)", noteStep: 0,
      say: ["The induced e m f equals the rate of change of flux linkage. That's Faraday's law. The minus sign is Lenz's law: the induced current always opposes the change that caused it."] },
    { type: "points", title: "Why Lenz's law must be true", items: ["Push a magnet into a coil", "Induced current makes a repelling pole", "You do work → electrical energy"],
      say: ["Push a north pole into a coil connected to a circuit.", "The induced current makes the near end a north pole too, repelling the magnet.", "So you have to do work, and that work becomes electrical energy. If it attracted instead, you'd get energy for free, breaking conservation of energy."] },
    { type: "compare", title: "Transformers", h: ["Equation", "Why"],
      rows: [["Turns ratio", "Vs/Vp = Ns/Np", "Same changing flux in both coils"], ["Ideal power", "VpIp = VsIs", "Energy conserved"], ["Losses", "Eddy currents, heating", "Reduced by a laminated core"]],
      say: ["Alternating current in the primary makes a changing flux in the iron core. The secondary voltage depends on the turns ratio.", "In an ideal transformer, power in equals power out, so stepping up voltage steps down current.", "Real transformers lose some energy to heating and eddy currents, which laminated cores reduce. High voltage transmission cuts current, and so cuts I squared R losses."] },
    { type: "quiz", q: "A magnet sits still inside a coil. The induced emf is…", o: ["Maximum", "Zero", "Alternating", "Constant and large"], a: 1,
      why: "No change in flux linkage.", say: ["What's the e m f with a stationary magnet inside the coil?"] }
  ]
});

S2Data.video("8a", {
  scenes: [
    { type: "title", title: "Accelerators and detectors", sub: "How physicists probe the nucleus.", mark: "LHC",
      say: ["To see inside atoms and nuclei, we fire particles at them, often at enormous energies."] },
    { type: "points", title: "Rutherford scattering", items: ["Most alpha particles pass straight through", "A few deflect at large angles", "→ tiny, dense, positive nucleus"],
      say: ["Rutherford fired alpha particles at thin gold foil. Most went straight through: the atom is mostly empty space.", "A very few bounced back at large angles.", "So the positive charge and most of the mass are concentrated in a tiny nucleus."] },
    { type: "compare", title: "Accelerators", h: ["How it works", "Key feature"],
      rows: [["Linac", "Alternating p.d. accelerates across gaps between drift tubes", "Tubes get longer"], ["Cyclotron", "Magnetic field bends; p.d. across gap accelerates", "Particles spiral outwards"]],
      say: ["A linear accelerator speeds particles across the gaps between drift tubes. The tubes get longer as the particles get faster, so each crossing stays in time with the alternating p d.", "A cyclotron uses a magnetic field to bend particles round in semicircles, accelerating them each time they cross the gap. They spiral outwards as they speed up."] },
    { type: "points", title: "Detectors and E = mc²", items: ["Charged particles ionise, leaving tracks", "Curvature in a B field → charge sign and momentum", "Collision energy → mass of new particles"],
      say: ["Charged particles ionise the material they pass through, leaving tracks.", "A magnetic field curves those tracks. The direction gives the sign of the charge; the radius gives the momentum.", "In high-energy collisions, kinetic energy becomes the mass of new particles, following E equals m c squared."] },
    { type: "quiz", q: "Why do accelerators reach such high energies to study small structures?", o: ["To make particles heavier", "For a shorter de Broglie wavelength", "To reduce charge", "To slow particles down"], a: 1,
      why: "λ = h/p must be small to resolve tiny structures.", say: ["Why do we need such high energies?"] }
  ]
});

S2Data.video("8b", {
  scenes: [
    { type: "title", title: "The standard model", sub: "Quarks, leptons and the rules they follow.", mark: "uud",
      say: ["All matter is made from two families of fundamental particles: quarks and leptons."] },
    { type: "compare", title: "Fundamental particles", h: ["Members", "Charge"],
      rows: [["Up-type quarks", "u, c, t", "+⅔e"], ["Down-type quarks", "d, s, b", "−⅓e"], ["Leptons", "e, μ, τ (+ neutrinos)", "−1 (0)"]],
      say: ["Up, charm and top quarks have a charge of plus two thirds.", "Down, strange and bottom quarks have minus one third.", "Leptons include the electron, muon and tau, with charge minus one, and their neutral neutrinos. Every particle also has an antiparticle."] },
    { type: "compare", title: "Hadrons", h: ["Made of", "Example"],
      rows: [["Baryons", "Three quarks (B = 1)", "Proton uud, neutron udd"], ["Mesons", "Quark + antiquark (B = 0)", "π⁺ = ud̄"]],
      say: ["Baryons are made of three quarks and have baryon number one. A proton is up up down.", "Mesons are a quark and an antiquark, with baryon number zero."] },
    { type: "equation", title: "Beta-minus decay", rows: [["n", "→", "p", "+", "e⁻", "+", "ν̄ₑ"], [{ t: "d", s: 1 }, { t: "→", s: 1 }, { t: "u", s: 1 }, { t: "+", s: 1 }, { t: "e⁻", s: 1 }, { t: "+", s: 1 }, { t: "ν̄ₑ", s: 1 }]],
      note: "Charge, baryon number and lepton number all conserved", noteStep: 2,
      say: ["In beta minus decay, a neutron becomes a proton, an electron and an electron antineutrino.",
            "At quark level, a down quark becomes an up quark, via the weak force and a W boson.",
            "Check: charge zero equals plus one minus one. Baryon number one equals one. Lepton number zero equals plus one minus one."] },
    { type: "quiz", q: "Which quantity is NOT always conserved?", o: ["Charge", "Baryon number", "Strangeness", "Lepton number"], a: 2,
      why: "Strangeness can change in weak interactions.", say: ["Which of these can change in some interactions?"] }
  ]
});

S2Data.video("9a", {
  scenes: [
    { type: "title", title: "Thermal energy", sub: "Heating, temperature and changes of state.", mark: "ΔE",
      say: ["Internal energy is the total of the random kinetic and potential energies of all the molecules in a substance."] },
    { type: "compare", title: "Two equations", h: ["Equation", "When"],
      rows: [["Specific heat capacity", "ΔE = mcΔθ", "Temperature changes"], ["Specific latent heat", "ΔE = LΔm", "State changes at constant temperature"]],
      say: ["Use m c delta theta when the temperature changes. Water's specific heat capacity is about four thousand one hundred and eighty joules per kilogram per kelvin.", "Use L delta m during a change of state, when the temperature stays constant."] },
    { type: "graph", title: "Heating curve for water", x: "Time heating", y: "Temperature",
      lines: [{ pts: [[0, 0.05], [0.08, 0.2], [0.3, 0.2], [0.45, 0.6], [0.95, 0.6]], straight: true, s: 0 }],
      marks: [{ x: 0.19, y: 0.2, t: "melting", s: 1, dy: -22 }, { x: 0.7, y: 0.6, t: "boiling", s: 1, dy: -22 }],
      say: ["As ice is heated, its temperature rises, then stays flat while it melts, rises again, then stays flat while it boils.",
            "On the flat parts, the energy increases the potential energy of the molecules, breaking bonds, not their kinetic energy. The boiling section is much longer because separating molecules completely takes far more energy."] },
    { type: "calc", title: "Worked example", q: "Turn 0.50 kg of ice at 0 °C into water at 20 °C.",
      lines: ["Melt: 0.50 × 3.34 × 10⁵ = 167 000 J", "Warm: 0.50 × 4180 × 20 = 41 800 J", "Total = 2.1 × 10⁵ J"],
      say: ["First the ice melts at zero degrees, using latent heat.", "Then the water warms by twenty kelvin.", "Add them for a total of two point one times ten to the five joules."] },
    { type: "quiz", q: "During melting, energy supplied increases the molecules'…", o: ["Kinetic energy", "Potential energy", "Mass", "Temperature"], a: 1,
      why: "Temperature (average KE) stays constant.", say: ["Where does the energy go while ice melts?"] }
  ]
});

S2Data.video("9b", {
  scenes: [
    { type: "title", title: "Ideal gases", sub: "Gas laws and the kinetic theory behind them.", mark: "pV = nRT",
      say: ["Gases follow simple laws, and kinetic theory explains them using moving molecules."] },
    { type: "equation", title: "The ideal gas equation", rows: [["pV = nRT"], [{ t: "pV = NkT", s: 1 }]],
      note: "Temperatures in kelvin! R = 8.31 J mol⁻¹ K⁻¹, k = 1.38 × 10⁻²³ J K⁻¹", noteStep: 1,
      say: ["For n moles of ideal gas, p V equals n R T.",
            "For N molecules, p V equals N k T, where k is the Boltzmann constant. Always use kelvin."] },
    { type: "points", title: "Kinetic theory assumptions", items: ["Many molecules in random motion", "Negligible volume", "Elastic collisions", "No forces except during collisions"],
      say: ["Kinetic theory imagines huge numbers of molecules moving randomly.", "The molecules themselves take up almost no space.", "Their collisions are perfectly elastic.", "And they don't attract each other, except while colliding. Pressure comes from molecules changing momentum as they bounce off the walls."] },
    { type: "big", text: "½m⟨c²⟩ = 3/2 kT", sub: "Mean molecular kinetic energy ∝ absolute temperature",
      say: ["Combining kinetic theory with the gas equation shows that the average kinetic energy of a molecule is three halves k T.", "So temperature really measures how fast molecules move. At absolute zero, they'd have minimum energy."] },
    { type: "quiz", q: "Doubling the kelvin temperature changes the r.m.s. speed by…", o: ["× 2", "× 4", "× √2", "× ½"], a: 2,
      why: "KE ∝ T and KE ∝ c², so c ∝ √T.", say: ["What happens to the r m s speed if the temperature doubles?"] }
  ]
});

S2Data.video("10a", {
  scenes: [
    { type: "title", title: "Stars and the universe", sub: "Measuring stars and an expanding cosmos.", mark: "H₀",
      say: ["Light from stars tells us their temperature, size and distance, and shows that the universe is expanding."] },
    { type: "equation", title: "Black-body radiation", rows: [["L = 4πr²σT⁴"], [{ t: "λmax T = 2.90 × 10⁻³ m K", s: 1 }]],
      say: ["The Stefan Boltzmann law gives a star's luminosity from its radius and surface temperature. Doubling temperature makes it sixteen times as luminous.",
            "Wien's law says hotter stars peak at shorter wavelengths, so blue stars are hotter than red ones."] },
    { type: "points", title: "The HR diagram", items: ["Luminosity against temperature (decreasing →)", "Main sequence: hydrogen fusion", "Red giants: cool but huge", "White dwarfs: hot but tiny"],
      say: ["The Hertzsprung Russell diagram plots luminosity against temperature, with temperature decreasing to the right.", "Most stars, including the Sun, lie on the main sequence, fusing hydrogen.", "Red giants are cool but very luminous, because they're enormous.", "White dwarfs are hot but dim, because they're tiny."] },
    { type: "compare", title: "Measuring distance", h: ["Method", "Range"],
      rows: [["Parallax", "Shift against background stars over 6 months", "Nearby stars"], ["Standard candles", "Known L, measured I: I = L/4πd²", "Galaxies"]],
      say: ["For nearby stars, measure how they shift against the background as Earth moves round the Sun. That's parallax.", "For distant galaxies, use standard candles like Cepheids or type one a supernovae, whose luminosity is known. Measure the intensity and work out the distance."] },
    { type: "big", text: "v = H₀d", sub: "Redshift z ≈ v/c · age of universe ≈ 1/H₀",
      say: ["Distant galaxies are redshifted, so they're moving away. The further away, the faster. That's Hubble's law, evidence that the universe is expanding.", "One over the Hubble constant gives an estimate of the age of the universe: about fourteen billion years."] },
    { type: "quiz", q: "Where are white dwarfs on the HR diagram?", o: ["Top right", "Top left", "Bottom left", "Bottom right"], a: 2,
      why: "Hot (left) but dim (bottom).", say: ["Where would you find white dwarfs?"] }
  ]
});

S2Data.video("11a", {
  scenes: [
    { type: "title", title: "Radioactive decay", sub: "Random, spontaneous and exponential.", mark: "t½",
      say: ["Unstable nuclei decay, emitting alpha, beta or gamma radiation. Which nucleus decays next is completely random."] },
    { type: "compare", title: "Three radiations", h: ["What it is", "Stopped by"],
      rows: [["α", "Helium nucleus, strongly ionising", "Paper"], ["β⁻", "Fast electron", "Few mm aluminium"], ["γ", "EM wave, weakly ionising", "Reduced by thick lead"]],
      say: ["Alpha particles are helium nuclei. They're strongly ionising and stopped by paper.", "Beta minus particles are fast electrons, stopped by a few millimetres of aluminium.", "Gamma rays are electromagnetic waves. They're only reduced by thick lead or concrete."] },
    { type: "equation", title: "Exponential decay", rows: [["A = λN"], [{ t: "N = N₀e^(−λt)", k: 1, s: 1 }], [{ t: "t½ = ln 2/λ", s: 2 }]],
      say: ["The activity is the decay constant times the number of nuclei. Lambda is the probability that a nucleus decays per second.",
            "So the number of nuclei falls exponentially.",
            "The half-life is l n two over lambda: the time for half the nuclei to decay."] },
    { type: "flow", title: "Measuring half-life", nodes: ["Measure background", "Record count rate<br>with GM tube", "Subtract background;<br>plot ln A vs t"],
      say: ["First measure the background count with no source.", "Then record the count rate from the source at regular intervals.", "Subtract the background, then plot l n of the count rate against time. The gradient is minus lambda."] },
    { type: "quiz", q: "After 4 half-lives, what fraction remains?", o: ["1/4", "1/8", "1/16", "1/32"], a: 2,
      why: "(½)⁴ = 1/16.", say: ["What fraction of the nuclei is left after four half-lives?"] }
  ]
});

S2Data.video("11b", {
  scenes: [
    { type: "title", title: "Binding energy, fission and fusion", sub: "Where nuclear energy comes from.", mark: "Δm c²",
      say: ["A nucleus weighs less than the protons and neutrons it's made from. That missing mass is the key to nuclear energy."] },
    { type: "points", title: "Mass defect and binding energy", items: ["Mass defect = nucleons' mass − nucleus mass", "Binding energy = Δm c²", "1 u ≡ 931.5 MeV"],
      say: ["The mass defect is the difference between the total mass of the separate nucleons and the mass of the nucleus.", "The binding energy, the energy needed to pull the nucleus apart, equals the mass defect times c squared.", "One atomic mass unit is equivalent to nine hundred and thirty one point five mega electronvolts."] },
    { type: "graph", title: "Binding energy per nucleon", x: "Nucleon number", y: "BE per nucleon",
      lines: [{ pts: [[0.01, 0.1], [0.05, 0.7], [0.1, 0.85], [0.22, 0.95], [0.6, 0.88], [1, 0.8]], s: 0 }],
      marks: [{ x: 0.22, y: 0.95, t: "Fe-56: most stable", s: 1, dy: -18 }, { x: 0.05, y: 0.7, t: "fusion →", s: 2, anchor: "start", dx: 16, dy: 30 }, { x: 0.9, y: 0.82, t: "← fission", s: 2, anchor: "end", dx: -10, dy: 34 }],
      say: ["Binding energy per nucleon rises steeply for light nuclei.",
            "It peaks at iron fifty six, the most stable nucleus.",
            "Light nuclei release energy by fusing, and heavy ones by splitting. Either way, the products move up the curve towards iron, and energy is released."] },
    { type: "points", title: "Fission reactors", items: ["U-235 absorbs a slow neutron and splits", "2–3 neutrons released → chain reaction", "Moderator slows neutrons; control rods absorb them"],
      say: ["A uranium two three five nucleus absorbs a slow neutron and splits into two smaller nuclei.", "Each fission releases two or three neutrons, which can cause more fissions in a chain reaction.", "A moderator slows the neutrons so they're more likely to be absorbed, and control rods absorb spare neutrons to keep the reaction steady."] },
    { type: "quiz", q: "Why does fusion need such high temperatures?", o: ["To split the nuclei", "To overcome electrostatic repulsion", "To slow the nuclei", "To produce neutrons"], a: 1,
      why: "Positive nuclei repel; they need huge kinetic energies to get close enough.", say: ["Why does fusion need temperatures of millions of degrees?"] }
  ]
});

S2Data.video("12a", {
  scenes: [
    { type: "title", title: "Gravitational fields", sub: "Newton's law and orbits.", mark: "GM",
      say: ["Every mass attracts every other mass. Newton's law of gravitation tells us how strongly."] },
    { type: "equation", title: "Key equations", rows: [["F = Gm₁m₂/r²"], [{ t: "g = GM/r²", s: 1 }, { t: "·", s: 1 }, { t: "V = −GM/r", s: 1 }]],
      note: "G = 6.67 × 10⁻¹¹ N m² kg⁻² · r measured from the centre", noteStep: 1,
      say: ["The force between two masses is G times their product, over the separation squared.",
            "Field strength around a planet is G M over r squared. Gravitational potential is minus G M over r: zero at infinity and negative everywhere else, because gravity always attracts."] },
    { type: "calc", title: "Orbits", q: "Gravity provides the centripetal force.",
      lines: ["GMm/r² = mv²/r", "v = √(GM/r)", "T² = 4π²r³/GM"],
      say: ["For a satellite in a circular orbit, gravity is the centripetal force.", "So the orbital speed is root G M over r. Higher orbits are slower.", "Using v equals two pi r over T gives T squared proportional to r cubed: Kepler's third law."] },
    { type: "points", title: "Geostationary satellites", items: ["Period 24 hours", "Above the equator", "Stay over one point: used for communications"],
      say: ["A geostationary satellite has a period of twenty four hours,", "orbits above the equator in the same direction as Earth spins,", "and so stays above the same point. That's why satellite dishes can point at a fixed spot in the sky."] },
    { type: "quiz", q: "A satellite moves to a higher orbit. Its speed…", o: ["Increases", "Decreases", "Stays the same", "Becomes zero"], a: 1,
      why: "v = √(GM/r).", say: ["What happens to a satellite's speed in a higher orbit?"] }
  ]
});

S2Data.video("13a", {
  scenes: [
    { type: "title", title: "Simple harmonic motion", sub: "The physics of every oscillation.", mark: "a = −ω²x",
      say: ["Pendulums, springs and vibrating atoms all follow the same pattern, called simple harmonic motion."] },
    { type: "big", text: "a = −ω²x", sub: "Acceleration ∝ displacement, always towards equilibrium",
      say: ["The defining equation of S H M: acceleration is proportional to displacement, and in the opposite direction.", "So the further it's pulled from equilibrium, the harder it's pulled back."] },
    { type: "compare", title: "Where things peak", h: ["At equilibrium", "At max displacement"],
      rows: [["Speed", "Maximum, ωA", "Zero"], ["Acceleration", "Zero", "Maximum, ω²A"], ["Energy", "All kinetic", "All potential"]],
      say: ["Speed is greatest, omega A, at the equilibrium position, and zero at the extremes.", "Acceleration is the opposite: zero in the middle, greatest, omega squared A, at the extremes.", "Energy swaps between kinetic and potential, with the total staying constant if there's no damping."] },
    { type: "equation", title: "Two oscillators", rows: [["T = 2π√(m/k)"], [{ t: "T = 2π√(l/g)", s: 1 }]],
      note: "The period doesn't depend on amplitude", noteStep: 1,
      say: ["For a mass on a spring, the period is two pi root m over k.",
            "For a pendulum at small angles, it's two pi root l over g. Neither depends on the amplitude, or the pendulum's mass."] },
    { type: "quiz", q: "Where is a pendulum bob's speed greatest?", o: ["At the top of its swing", "At the lowest point", "Halfway up", "Everywhere equal"], a: 1,
      why: "Equilibrium position.", say: ["Where does a pendulum move fastest?"] }
  ]
});

S2Data.video("13b", {
  scenes: [
    { type: "title", title: "Damping and resonance", sub: "When oscillations die away, and when they grow.", mark: "f₀",
      say: ["Real oscillations lose energy, and driven oscillations can grow dramatically. That's damping and resonance."] },
    { type: "compare", title: "Degrees of damping", h: ["Behaviour", "Example"],
      rows: [["Light", "Oscillates; amplitude decays gradually", "Pendulum in air"], ["Critical", "Returns fastest, no oscillation", "Car suspension"], ["Heavy", "Returns slowly, no oscillation", "Door closer"]],
      say: ["With light damping, the oscillation continues but the amplitude gradually shrinks.", "With critical damping, the system returns to equilibrium in the shortest possible time without overshooting. Car suspensions are designed like this.", "With heavy damping, it creeps back slowly without oscillating."] },
    { type: "graph", title: "Resonance curves", x: "Driving frequency", y: "Amplitude",
      lines: [{ pts: [[0, 0.1], [0.35, 0.25], [0.48, 0.9], [0.52, 0.9], [0.65, 0.25], [1, 0.08]], s: 0 }, { pts: [[0, 0.1], [0.3, 0.22], [0.47, 0.42], [0.62, 0.25], [1, 0.07]], s: 1, dash: true }],
      marks: [{ x: 0.5, y: 0.02, t: "f₀", s: 0, dot: false, dy: -8 }, { x: 0.5, y: 0.9, t: "light damping", s: 0, dot: false, anchor: "start", dx: 30, dy: 0 }, { x: 0.47, y: 0.42, t: "heavy damping", s: 1, dot: false, anchor: "start", dx: 40, dy: -10 }],
      say: ["Drive an oscillator at different frequencies and measure the amplitude. It peaks sharply when the driving frequency equals the natural frequency. That's resonance.",
            "More damping gives a lower, broader peak, shifted slightly to lower frequency."] },
    { type: "compare", title: "Resonance: good and bad", h: ["Useful", "Problem"],
      rows: [["Example 1", "Musical instruments", "Bridges swaying (Millennium Bridge)"], ["Example 2", "MRI and microwave ovens", "Buildings in earthquakes"]],
      say: ["Resonance makes musical instruments loud, and MRI scanners and microwave ovens rely on it.", "But it can also wreck bridges and buildings. Engineers add dampers and design natural frequencies away from likely driving frequencies."] },
    { type: "quiz", q: "Car suspension is designed to be…", o: ["Lightly damped", "Critically damped", "Undamped", "Resonant"], a: 1,
      why: "Returns to equilibrium quickest without bouncing.", say: ["What kind of damping should a car's suspension have?"] }
  ]
});
