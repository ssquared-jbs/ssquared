/* A-level Physics² — Topics 8–13: Nuclear and particle physics, Thermodynamics, Space, Nuclear radiation, Gravitational fields, Oscillations */

S2Data.add({
  id: "8a", group: 8, y2: true, title: "Accelerators and detectors",
  summary: "Rutherford scattering, linear accelerators, cyclotrons, particle detectors and E = mc².",
  notes: R`
<h3>Probing the atom</h3>
<p>Rutherford's alpha-scattering experiment: most alphas passed straight through gold foil; a few were deflected through large angles. Conclusion: the atom is mostly empty space with a tiny, dense, positively charged <b>nucleus</b>.</p>
<p>To probe smaller structures you need shorter de Broglie wavelengths, so higher-energy particles. High-energy electron scattering revealed quarks inside protons.</p>
<h3>Accelerators</h3>
<ul>
<li><b>Linear accelerator (linac)</b>: charged particles pass through a series of drift tubes connected to an alternating p.d. They accelerate across each gap. Tubes get longer because particles go faster, so each crossing takes the same time.</li>
<li><b>Cyclotron</b>: two D-shaped electrodes ("dees") in a uniform magnetic field with an alternating p.d. between them. The field bends particles into semicircles; they accelerate each time they cross the gap. The radius increases as they speed up \((r = p/BQ)\), but the time per semicircle stays the same (non-relativistic).</li>
<li>Cyclotron frequency: \(f = BQ/2 \pi m\).</li>
</ul>
<h3>Detectors</h3>
<ul>
<li>Charged particles ionise the material they pass through, leaving tracks (cloud chamber, bubble chamber, silicon detectors).</li>
<li>A magnetic field curves the tracks: the direction gives the sign of the charge; the radius gives the momentum.</li>
<li>Neutral particles leave no track; their presence is deduced from conservation of momentum or from "V" shapes when they decay.</li>
</ul>
<h3>Mass and energy</h3>
<div class="box box-key"><span class="box-title">\(\Delta E = c^{2}\Delta m\)</span>In collisions, kinetic energy can become the mass of new particles. Particle masses are often given in MeV/c<sup>2</sup> or GeV/c<sup>2</sup>.</div>
<p>1 MeV = 1.60 × 10<sup>−13</sup> J. Pair production: a photon of at least 2m<sub>e</sub>c<sup>2</sup> (1.02 MeV) can produce an electron–positron pair.</p>
`,
  quiz: [
    { q: "Rutherford scattering showed that…", o: ["The nucleus is small, dense and positive", "Electrons orbit in shells", "Protons contain quarks", "Atoms are solid"], a: 0, e: R`Most alpha particles passed straight through; a few were deflected through large angles.` },
    { q: "Why do linac drift tubes get longer?", o: ["Particles speed up, so they need equal times per tube", "To slow particles", "To bend the beam", "To increase charge"], a: 0, e: R`They travel further each half-cycle, so the tubes must be longer to keep timing in step.` },
    { q: "What provides the circular path in a cyclotron?", o: ["A magnetic field", "The alternating p.d.", "Gravity", "An electric field only"], a: 0, e: R`The magnetic force \(Bqv\) acts as the centripetal force.` },
    { q: "In a detector, a particle curves more tightly when it has…", o: ["Less momentum", "More momentum", "No charge", "More mass at the same speed"], a: 0, e: R`\(r = \dfrac{p}{Bq}\): smaller momentum means a smaller radius.` },
    { q: "Why do neutral particles leave no tracks?", o: ["They don't ionise the detector material", "They are too fast", "They are too heavy", "They decay instantly"], a: 0, e: R`Tracks are made by ionisation, which needs charge.` },
    { q: "Energy equivalent of 1.0 × 10⁻³⁰ kg?", o: ["9.0 × 10⁻¹⁴ J", "3.0 × 10⁻²² J", "9.0 × 10¹³ J", "1.0 × 10⁻³⁰ J"], a: 0, e: R`\(E = mc^2 = 1.0 \times 10^{-30} \times (3.0 \times 10^8)^2 = 9.0 \times 10^{-14}\ \text{J}\).` },
    { q: "1 MeV in joules?", o: ["1.60 × 10⁻¹³ J", "1.60 × 10⁻¹⁹ J", "1.60 × 10⁻¹⁶ J", "1.60 × 10⁻¹⁰ J"], a: 0, e: R`\(10^6 \times 1.60 \times 10^{-19}\ \text{J}\).` },
    { q: "Why are higher energies needed to probe smaller structures?", o: ["Shorter de Broglie wavelength", "More charge", "Larger mass", "Slower particles"], a: 0, e: R`\(\lambda = \dfrac hp\): resolving small detail needs a small wavelength, so large momentum.` },
    { q: "Minimum photon energy for electron–positron pair production?", o: ["1.02 MeV", "0.511 MeV", "938 MeV", "13.6 eV"], a: 0, e: R`The photon must supply the rest energy of two particles: \(2 \times 0.511\ \text{MeV}\).` }
  ],
  flashcards: [
    ["Rutherford scattering conclusion", "Tiny, dense, positive nucleus; atom mostly empty space"],
    ["Linear accelerator", "Drift tubes + alternating p.d.; tubes lengthen as particles speed up"],
    ["Cyclotron", "Dees + magnetic field + alternating p.d.; spiral outwards"],
    ["Cyclotron frequency", R`\(f = BQ/2 \pi m\)`],
    ["Detector tracks", "Charged particles ionise; curvature gives charge sign and momentum"],
    ["Mass–energy", R`\(\Delta E = c^2\Delta m\)`],
    ["MeV to J", "1 MeV = 1.60 × 10⁻¹³ J"],
    ["Pair production threshold", "2mₑc² = 1.02 MeV"]
  ]
});

S2Data.add({
  id: "8b", group: 8, y2: true, title: "The standard model",
  summary: "Quarks, leptons, hadrons, antiparticles and conservation laws in particle interactions.",
  notes: R`
<h3>Fundamental particles</h3>
<table>
<tr><th>Quarks</th><th>Charge</th></tr>
<tr><td>up (u), charm (c), top (t)</td><td>+⅔e</td></tr>
<tr><td>down (d), strange (s), bottom (b)</td><td>−⅓e</td></tr>
</table>
<p><b>Leptons</b>: electron, muon, tau (charge −1) and their neutrinos (charge 0). Each has a lepton number of +1.</p>
<p>Every particle has an <b>antiparticle</b> with the same mass but opposite charge (and opposite quantum numbers).</p>
<h3>Hadrons</h3>
<ul>
<li><b>Baryons</b>: three quarks. Proton = uud, neutron = udd. Baryon number +1 (each quark has B = ⅓).</li>
<li><b>Mesons</b>: a quark and an antiquark, e.g. pion π<sup>+</sup> = ud̄. Baryon number 0.</li>
<li>Leptons are not hadrons: they don't feel the strong force.</li>
</ul>
<h3>Conservation laws</h3>
<p>In every interaction, these are conserved: <b>charge, baryon number, lepton number</b> (and energy and momentum). Strangeness is conserved in strong interactions but can change in weak ones.</p>
<p><b>Beta-minus decay</b>: n → p + e<sup>−</sup> + ν̄<sub>e</sub>. At quark level, d → u + e<sup>−</sup> + ν̄<sub>e</sub>. Check: charge 0 = +1 − 1 + 0; B: 1 = 1; L: 0 = 0 + 1 − 1. ✓</p>
<h3>Forces and exchange particles</h3>
<ul>
<li>Electromagnetic: photon. Strong: gluon (between quarks). Weak: W<sup>+</sup>, W<sup>−</sup>, Z<sup>0</sup> bosons (beta decay).</li>
<li>Higgs boson: gives particles mass; discovered at the LHC in 2012.</li>
</ul>
`,
  quiz: [
    { q: "Quark composition of a proton?", o: ["uud", "udd", "uuu", "ud̄"], a: 0, e: R`\(\tfrac23 + \tfrac23 - \tfrac13 = +1\).` },
    { q: "Charge of a strange quark?", o: ["−⅓e", "+⅔e", "+⅓e", "−⅔e"], a: 0, e: R`Strange quarks have the same charge as down quarks.` },
    { q: "A meson is made of…", o: ["A quark and an antiquark", "Three quarks", "Two leptons", "Three antiquarks"], a: 0, e: R`Baryons are three quarks; mesons are quark plus antiquark.` },
    { q: "Which is a lepton?", o: ["Muon", "Proton", "Pion", "Neutron"], a: 0, e: R`Leptons are electrons, muons, taus and their neutrinos.` },
    { q: "Baryon number of a quark?", o: ["⅓", "1", "0", "−1"], a: 0, e: R`Three quarks make one baryon, so each has \(B = \tfrac13\).` },
    { q: "In β⁻ decay at quark level…", o: ["d → u", "u → d", "s → u", "u → s"], a: 0, e: R`A down quark changes to an up quark, emitting a W⁻ boson.` },
    { q: "Which is NOT always conserved?", o: ["Strangeness", "Charge", "Baryon number", "Lepton number"], a: 0, e: R`Strangeness can change in weak interactions.` },
    { q: "Exchange particle for the weak force?", o: ["W and Z bosons", "Photon", "Gluon", "Higgs boson"], a: 0, e: R`W bosons are charged; the Z is neutral.` },
    { q: "Can p + p → p + n + π⁺ happen (charge check)?", o: ["Yes, charge is conserved", "No, charge isn't conserved", "No, baryon number isn't conserved", "Only with a neutrino"], a: 0, e: R`\(+2 = +1 + 0 + 1\).` }
  ],
  flashcards: [
    ["Up-type quark charge", "+⅔e (u, c, t)"],
    ["Down-type quark charge", "−⅓e (d, s, b)"],
    ["Proton / neutron quarks", "uud / udd"],
    ["Baryon", "Three quarks; B = 1"],
    ["Meson", "Quark + antiquark; B = 0"],
    ["Leptons", "e, μ, τ and their neutrinos; L = +1"],
    ["Always conserved", "Charge, baryon number, lepton number, energy, momentum"],
    ["Strangeness", "Conserved in strong, not weak interactions"],
    ["β⁻ decay", "n → p + e⁻ + ν̄ₑ (d → u)"],
    ["Exchange particles", "Photon (EM), gluon (strong), W/Z (weak)"]
  ]
});

S2Data.add({
  id: "9a", group: 9, y2: true, title: "Thermal energy",
  summary: "Internal energy, specific heat capacity, specific latent heat and absolute zero.",
  notes: R`
<h3>Internal energy and temperature</h3>
<ul>
<li><b>Internal energy</b> = the sum of the randomly distributed kinetic and potential energies of the molecules.</li>
<li>Heating increases internal energy. During a change of state, the potential energy increases while the temperature (average KE) stays constant.</li>
<li><b>Absolute zero</b> (0 K = −273 °C) is the temperature at which molecules have minimum internal energy. T(K) = θ(°C) + 273.</li>
</ul>
<h3>Specific heat capacity</h3>
<div class="box box-key"><span class="box-title">\(\Delta E = mc\Delta \theta\)</span>c = energy needed to raise 1 kg by 1 K (J kg<sup>−1</sup> K<sup>−1</sup>). Water: 4180 J kg<sup>−1</sup> K<sup>−1</sup>.</div>
<p>Measuring c: heat a block with an electric heater, measuring V, I and \(t (E = VIt)\) and the temperature rise. Insulate to reduce heat loss. Plot θ against t: gradient = VI/mc.</p>
<h3>Specific latent heat</h3>
<div class="box box-key"><span class="box-title">\(\Delta E = L\Delta m\)</span>L = energy to change the state of 1 kg without a temperature change (J kg<sup>−1</sup>). Water: \(L_{f} = 3.34 \times 10^{5}\), L<sub>v</sub> = 2.26 × 10<sup>6</sup> J kg<sup>−1</sup>.</div>
<p>Vaporisation needs much more energy than fusion because molecules must be separated completely and work done against the atmosphere.</p>
<p><b>Example</b>: energy to turn 0.50 kg of ice at 0 °C into water at 20 °C: \(0.50 \times 3.34 \times 10^{5} + 0.50 \times 4180 \times 20 = 167\,000 + 41\,800\) = <b>2.1 × 10<sup>5</sup> J</b>.</p>
`,
  quiz: [
    { q: "Internal energy is…", o: ["The sum of random KE and PE of molecules", "The total KE only", "The temperature", "Heat added"], a: 0, e: R`Internal energy is the total kinetic and potential energy of all the molecules.` },
    { q: "Energy to heat 2.0 kg of water by 10 K?", o: ["83 600 J", "8360 J", "41 800 J", "4180 J"], a: 0, e: R`\(Q = mc\Delta\theta = 2.0 \times 4180 \times 10 = 83\,600\ \text{J}\).` },
    { q: "During melting, temperature stays constant because energy increases…", o: ["Potential energy of molecules", "Kinetic energy of molecules", "Mass", "Pressure"], a: 0, e: R`Bonds are being broken, raising potential energy, not kinetic energy.` },
    { q: "25 °C in kelvin?", o: ["298 K", "248 K", "25 K", "−248 K"], a: 0, e: R`\(25 + 273 = 298\ \text{K}\).` },
    { q: "Energy to melt 0.20 kg of ice at 0 °C? (L = 3.34 × 10⁵ J kg⁻¹)", o: ["6.7 × 10⁴ J", "3.3 × 10⁵ J", "1.7 × 10⁶ J", R`\(6.7 \times 10^3\ \text{J}\)`], a: 0, e: R`\(Q = mL = 0.20 \times 3.34 \times 10^5 = 6.7 \times 10^4\ \text{J}\).` },
    { q: "Why is L_v much larger than L_f for water?", o: ["Molecules must be separated completely", "Water is denser", "Steam is hotter", "Ice is a solid"], a: 0, e: R`Boiling separates molecules completely; melting only loosens them.` },
    { q: "A 50 W heater runs for 200 s, raising 1.0 kg by 10 K. c = ?", o: ["1000 J kg⁻¹ K⁻¹", "100 J kg⁻¹ K⁻¹", "10 000 J kg⁻¹ K⁻¹", "4180 J kg⁻¹ K⁻¹"], a: 0, e: R`\(c = \dfrac{Pt}{m\Delta\theta} = \dfrac{50 \times 200}{1.0 \times 10} = 1000\ \text{J kg}^{-1}\,\text{K}^{-1}\).` },
    { q: "Absolute zero is…", o: ["0 K, about −273 °C", "0 °C", "−100 °C", "273 K"], a: 0, e: R`At 0 K the molecules have the least possible energy.` },
    { q: "Why insulate the block when measuring c?", o: ["To reduce heat loss to surroundings", "To make it heat faster", "To change c", "To measure mass"], a: 0, e: R`Heat loss would make the calculated \(c\) too large.` }
  ],
  flashcards: [
    ["Internal energy", "Sum of random KE and PE of molecules"],
    ["Specific heat capacity", R`\(\Delta E = mc\Delta \theta\)`],
    ["Specific latent heat", R`\(\Delta E = L\Delta m\)`],
    ["During a change of state", "PE increases; temperature (KE) constant"],
    ["Absolute zero", "0 K = −273 °C; minimum internal energy"],
    ["Kelvin conversion", R`\(T = \theta + 273\)`],
    ["Water: c", "4180 J kg⁻¹ K⁻¹"],
    ["Electrical heating energy", R`\(E = VIt\)`]
  ]
});

S2Data.add({
  id: "9b", group: 9, y2: true, title: "Ideal gases and kinetic theory",
  summary: "The gas laws, the ideal gas equation, kinetic theory and molecular kinetic energy.",
  notes: R`
<h3>Gas laws</h3>
<ul>
<li><b>Boyle's law</b>: pV = constant (constant T).</li>
<li>Pressure law: p/T = constant (constant V). Charles' law: V/T = constant (constant p). Temperatures in <b>kelvin</b>.</li>
</ul>
<div class="box box-key"><span class="box-title">Ideal gas equation</span>\(pV = NkT (N\) molecules, k = 1.38 × 10<sup>−23</sup> J K<sup>−1</sup>) or pV = nRT (n moles, R = 8.31 J mol<sup>−1</sup> K<sup>−1</sup>)</div>
<h3>Kinetic theory</h3>
<p>Assumptions for an ideal gas: a large number of molecules in random motion; molecules have negligible volume; collisions are elastic; no forces between molecules except during collisions; collision time is negligible.</p>
<p>Pressure arises because molecules collide with the walls, changing momentum: force = rate of change of momentum.</p>
<div class="box box-key"><span class="box-title">pV = ⅓Nm&lt;c<sup>2</sup>&gt;</span>&lt;c<sup>2</sup>&gt; is the mean square speed. Combining with \(pV = NkT\) gives ½m&lt;c<sup>2</sup>&gt; = <b>3/2 kT</b>.</div>
<ul>
<li>Average molecular kinetic energy is proportional to absolute temperature.</li>
<li>Root mean square speed \(c_{rms} = √\)&lt;c<sup>2</sup>&gt;.</li>
</ul>
<p><b>Example</b>: mean KE of a gas molecule at 300 K = 1.5 × 1.38 × 10<sup>−23</sup> × 300 = <b>6.2 × 10<sup>−21</sup> J</b>.</p>
`,
  quiz: [
    { q: "Boyle's law states…", o: ["pV = constant at constant T", "p/T constant at constant V", "V/T constant", R`\(pV = nR\)`], a: 0, e: R`For a fixed mass of gas at constant temperature.` },
    { q: "Gas at 100 kPa, 2.0 m³ is compressed to 0.50 m³ at constant T. New pressure?", o: ["400 kPa", "25 kPa", "200 kPa", "50 kPa"], a: 0, e: R`\(p_2 = \dfrac{p_1V_1}{V_2} = \dfrac{100 \times 2.0}{0.50} = 400\ \text{kPa}\).` },
    { q: "Number of moles in 0.024 m³ at 100 kPa and 289 K?", o: ["1.0 mol", "0.10 mol", "10 mol", "2.0 mol"], a: 0, e: "pV/RT." },
    { q: "Mean KE of a molecule depends only on…", o: ["Absolute temperature", "Pressure", "Volume", "Mass of gas"], a: 0, e: R`\(\tfrac12 m\overline{c^2} = \tfrac32 kT\).` },
    { q: "Doubling the kelvin temperature changes c_rms by…", o: [R`\(\times \sqrt{2}\)`, R`\(\times 2\)`, R`\(\times 4\)`, R`\(\times \tfrac12\)`], a: 0, e: R`\(c_{\text{rms}} \propto \sqrt T\), so it goes up by \(\sqrt2\).` },
    { q: "Which is an ideal gas assumption?", o: ["Collisions are elastic", "Molecules attract strongly", "Molecules have large volume", "Motion is ordered"], a: 0, e: R`Others: negligible molecule volume, no intermolecular forces, random motion.` },
    { q: "Boltzmann constant k = …", o: ["R/N_A", "N_A/R", "RN_A", "R"], a: 0, e: R`\(k = \dfrac{R}{N_A} = 1.38 \times 10^{-23}\ \text{J K}^{-1}\).` },
    { q: "Pressure in kinetic theory is caused by…", o: ["Molecules colliding with walls and changing momentum", "Gravity", "Intermolecular forces", "Heat"], a: 0, e: R`Each collision changes the molecule's momentum, so it exerts a force on the wall.` },
    { q: "Mean KE per molecule at 300 K?", o: ["6.2 × 10⁻²¹ J", "4.1 × 10⁻²¹ J", "3740 J", "1.2 × 10⁻²⁰ J"], a: 0, e: R`\(\tfrac32 kT = 1.5 \times 1.38 \times 10^{-23} \times 300 = 6.2 \times 10^{-21}\ \text{J}\).` }
  ],
  flashcards: [
    ["Boyle's law", "pV = constant (constant T)"],
    ["Pressure law", "p/T = constant (constant V)"],
    ["Ideal gas equation", R`\(pV = NkT = nRT\)`],
    ["Kinetic theory equation", "pV = ⅓Nm<c²>"],
    ["Mean molecular KE", "½m<c²> = 3/2 kT"],
    ["Ideal gas assumptions", "Random motion, negligible volume, elastic collisions, no intermolecular forces"],
    ["Origin of gas pressure", "Change in momentum of molecules hitting walls"],
    ["Constants", "k = 1.38 × 10⁻²³ J K⁻¹; R = 8.31 J mol⁻¹ K⁻¹"]
  ]
});

S2Data.add({
  id: "10a", group: 10, y2: true, title: "Stars and the universe",
  summary: "Black-body radiation, Stefan–Boltzmann and Wien's laws, the HR diagram, distances, redshift and Hubble's law.",
  notes: R`
<h3>Black-body radiation</h3>
<ul>
<li>A black body absorbs all radiation that falls on it; stars approximate black bodies.</li>
<li><b>Stefan–Boltzmann law</b>: L = σAT<sup>4</sup> = 4πr<sup>2</sup>σT<sup>4</sup> (σ = 5.67 × 10<sup>−8</sup> W m<sup>−2</sup> K<sup>−4</sup>).</li>
<li><b>Wien's law</b>: \(\lambda _{max}T = 2.90 \times 10^{-3}\ \text{m}\,\text{K}\). Hotter stars peak at shorter wavelengths (bluer).</li>
<li>Intensity at Earth: \(I = L/4\pi d^{2}\).</li>
</ul>
<h3>The Hertzsprung–Russell diagram</h3>
<p>Luminosity against surface temperature (temperature <b>decreasing</b> to the right). Main sequence runs diagonally; red giants and supergiants upper right; white dwarfs lower left.</p>
<p>Life cycle of a Sun-like star: main sequence (hydrogen fusion) → red giant → planetary nebula → white dwarf. Massive stars: → red supergiant → supernova → neutron star or black hole.</p>
<h3>Measuring distances</h3>
<ul>
<li><b>Trigonometric parallax</b>: measure the apparent shift of a nearby star against distant ones six months apart. d = 1 AU ÷ tan θ. 1 parsec = distance with a parallax angle of 1 arcsecond.</li>
<li><b>Standard candles</b>: objects of known luminosity (Cepheid variables, type Ia supernovae). Measure I and use \(I = L/4\pi d^{2}\).</li>
</ul>
<h3>Redshift and the expanding universe</h3>
<ul>
<li>Redshift: \(z = \Delta \lambda /\lambda\) ≈ Δf/f ≈ v/c (for v ≪ c).</li>
<li><b>Hubble's law</b>: \(v = H_{0}d\). Galaxies are receding, faster the further away they are, so the universe is expanding.</li>
<li>Age of the universe ≈ 1/H<sub>0</sub>. Uncertainty in H<sub>0</sub> comes from uncertainty in distances.</li>
<li>Galaxy rotation curves suggest <b>dark matter</b>; the ultimate fate of the universe depends on its density.</li>
</ul>
`,
  quiz: [
    { q: "Wien's law: a star peaks at 500 nm. Surface temperature?", o: ["5800 K", "1450 K", "58 000 K", "580 K"], a: 0, e: "2.9 × 10⁻³ ÷ 5 × 10⁻⁷." },
    { q: "Doubling a star's surface temperature (same radius) changes luminosity by…", o: [R`\(\times 16\)`, R`\(\times 4\)`, R`\(\times 2\)`, R`\(\times 8\)`], a: 0, e: R`\(L = 4\pi r^2\sigma T^4\): \(2^4 = 16\).` },
    { q: "On an HR diagram, temperature…", o: ["Decreases to the right", "Increases to the right", "Is on the y-axis", "Is constant"], a: 0, e: R`The temperature axis runs backwards: hot on the left.` },
    { q: "Where are white dwarfs on the HR diagram?", o: ["Bottom left", "Top right", "Top left", "Bottom right"], a: 0, e: R`They're hot but small, so they have low luminosity.` },
    { q: "A standard candle has…", o: ["Known luminosity", "Known temperature", "Known mass", "Known age"], a: 0, e: R`Comparing known luminosity with measured intensity gives the distance.` },
    { q: "A galaxy has z = 0.010. Recession velocity?", o: ["3.0 × 10⁶ m s⁻¹", "3.0 × 10⁸ m s⁻¹", "3.0 × 10⁴ m s⁻¹", "0.010 m s⁻¹"], a: 0, e: R`\(v = zc = 0.010 \times 3.0 \times 10^8 = 3.0 \times 10^6\ \text{m s}^{-1}\).` },
    { q: "Hubble's law shows…", o: ["The universe is expanding", "Stars are cooling", "Galaxies are approaching", "Light slows down"], a: 0, e: R`\(v = H_0 d\): more distant galaxies recede faster.` },
    { q: "Age of the universe ≈ …", o: ["1/H₀", "H₀", "H₀/c", "c/H₀"], a: 0, e: R`Time \(= \dfrac{d}{v} = \dfrac{1}{H_0}\).` },
    { q: "Parallax works only for…", o: ["Nearby stars", "Distant galaxies", "The Sun", "Supernovae"], a: 0, e: R`Further stars have parallax angles too small to measure.` }
  ],
  flashcards: [
    ["Stefan–Boltzmann law", "L = 4πr²σT⁴"],
    ["Wien's law", "λmax T = 2.90 × 10⁻³ m K"],
    ["Intensity at distance d", R`\(I = L/4\pi d^2\)`],
    ["HR diagram axes", "Luminosity vs temperature (decreasing to the right)"],
    ["Parallax", "d = 1 AU / tan θ; 1 pc ↔ 1 arcsecond"],
    ["Standard candle", "Object of known luminosity (Cepheid, type Ia supernova)"],
    ["Redshift", R`\(z = \Delta \lambda /\lambda \approx  v/c\)`],
    ["Hubble's law", R`\(v = H_{0}d\)`],
    ["Age of the universe", "≈ 1/H₀"],
    ["Sun-like star fate", "Red giant → planetary nebula → white dwarf"]
  ]
});

S2Data.add({
  id: "11a", group: 11, y2: true, title: "Radioactive decay",
  summary: "Alpha, beta and gamma, decay equations, background radiation, activity, the decay constant and half-life.",
  notes: R`
<h3>Types of radiation</h3>
<table>
<tr><th></th><th>Nature</th><th>Ionising</th><th>Stopped by</th></tr>
<tr><td>α</td><td>Helium nucleus (2p + 2n)</td><td>Strongly</td><td>Paper / few cm of air</td></tr>
<tr><td>β<sup>−</sup></td><td>Fast electron</td><td>Moderately</td><td>Few mm aluminium</td></tr>
<tr><td>γ</td><td>EM radiation</td><td>Weakly</td><td>Reduced by thick lead</td></tr>
</table>
<p>Decay equations: α decay: <sup>A</sup><sub>Z</sub>X → <sup>A−4</sup><sub>Z−2</sub>Y + <sup>4</sup><sub>2</sub>α. β<sup>−</sup> decay: Z increases by 1, A unchanged, an antineutrino is emitted.</p>
<p><b>Background radiation</b> (rocks, radon, cosmic rays, medical) must be measured and subtracted from count rates.</p>
<h3>Decay is random and spontaneous</h3>
<ul>
<li>Random: you can't predict which nucleus decays next. Spontaneous: not affected by external conditions.</li>
<li>Activity <b>\(A = \lambda N\)</b> (becquerels, Bq). λ = decay constant: the probability a nucleus decays per unit time.</li>
</ul>
<div class="box box-key"><span class="box-title">Exponential decay</span>\(N = N_{0}e^{-\lambda t}\) &nbsp; \(A = A_{0}e^{-\lambda t}\) &nbsp; \(t_{\tfrac12} = \ln 2/\lambda\)</div>
<p>A graph of ln A against t is a straight line of gradient −λ.</p>
<p><b>Example</b>: a sample has \(t_{\tfrac12} = 8.0\) days. \(\lambda = \dfrac{0.693}{8 \times 86\,400} = 1.0 \times 10^{-6}\ \text{s}^{-1}\). After 24 days (3 half-lives), 1/8 remains.</p>
`,
  quiz: [
    { q: "Which radiation is most ionising?", o: ["Alpha", "Beta", "Gamma", "All equal"], a: 0, e: R`Alpha is large and doubly charged, so it ionises strongly.` },
    { q: "²³⁸U undergoes alpha decay. Product mass number?", o: ["234", "236", "238", "242"], a: 0, e: R`Alpha removes 4 from \(A\): \(238 - 4 = 234\).` },
    { q: "In β⁻ decay, the proton number…", o: ["Increases by 1", "Decreases by 1", "Decreases by 2", "Stays the same"], a: 0, e: R`A neutron becomes a proton, so Z rises by 1.` },
    { q: "Activity equals…", o: ["λN", "N/λ", "λ/N", "N₀e^λt"], a: 0, e: R`\(A = \lambda N\).` },
    { q: "Half-life in terms of λ?", o: ["ln 2/λ", "λ ln 2", "1/λ", "2/λ"], a: 0, e: R`\(t_{1/2} = \dfrac{\ln 2}{\lambda}\).` },
    { q: "After 4 half-lives, what fraction remains?", o: ["1/16", "1/4", "1/8", "1/32"], a: 0, e: R`\(\left(\tfrac12\right)^4 = \tfrac1{16}\).` },
    { q: "Radioactive decay is random, meaning…", o: ["You can't predict which nucleus decays next", "It speeds up when heated", "It depends on pressure", "All nuclei decay at once"], a: 0, e: R`Each nucleus has a fixed probability of decaying per second.` },
    { q: "Why subtract background count?", o: ["To find the count due to the source alone", "To increase accuracy of time", "Because it's negative", "To find half-life directly"], a: 0, e: R`Background radiation is always present.` },
    { q: "Gradient of ln A against t?", o: [R`\(-\lambda\)`, "λ", "t½", "A₀"], a: 0, e: R`\(\ln A = \ln A_0 - \lambda t\).` }
  ],
  flashcards: [
    ["Alpha particle", "Helium nucleus; strongly ionising; stopped by paper"],
    ["Beta-minus", "Fast electron; Z + 1; antineutrino emitted"],
    ["Gamma", "EM radiation; weakly ionising; reduced by thick lead"],
    ["Activity", R`\(A = \lambda N (Bq)\)`],
    ["Decay equation", "N = N₀e^(−λt)"],
    ["Half-life", R`\(t\tfrac12 = \ln 2/\lambda\)`],
    ["Random and spontaneous", "Unpredictable; unaffected by external conditions"],
    ["Background radiation sources", "Radon, rocks, cosmic rays, medical"]
  ]
});

S2Data.add({
  id: "11b", group: 11, y2: true, title: "Binding energy, fission and fusion",
  summary: "Mass deficit, binding energy per nucleon, and energy released in fission and fusion.",
  notes: R`
<h3>Mass deficit and binding energy</h3>
<ul>
<li>The mass of a nucleus is <b>less</b> than the total mass of its separate protons and neutrons. The difference is the <b>mass deficit</b>.</li>
<li><b>Binding energy</b> = energy needed to separate a nucleus into its individual nucleons = mass deficit × c<sup>2</sup>.</li>
<li>Atomic mass unit: 1 u = 1.66 × 10<sup>−27</sup> kg ≡ 931.5 MeV.</li>
</ul>
<h3>Binding energy per nucleon</h3>
<p>A graph of binding energy per nucleon against nucleon number rises steeply, peaks at iron-56 (about 8.8 MeV), then falls slowly. Higher binding energy per nucleon means a more stable nucleus.</p>
<ul>
<li><b>Fusion</b>: light nuclei join, moving up the curve towards iron, releasing energy. Needs very high temperatures (~10<sup>7</sup> K) so nuclei can overcome electrostatic repulsion.</li>
<li><b>Fission</b>: a heavy nucleus (e.g. U-235) absorbs a neutron and splits into two smaller nuclei plus 2–3 neutrons, moving up the curve and releasing energy. Neutrons can cause a chain reaction.</li>
</ul>
<div class="box box-key"><span class="box-title">Energy released</span>Energy released = (total binding energy after − total binding energy before) = (mass before − mass after) × c<sup>2</sup>.</div>
<p><b>Example</b>: a fusion reaction has a mass defect of 0.0189 u. Energy = 0.0189 × 931.5 = <b>17.6 MeV</b>.</p>
`,
  quiz: [
    { q: "Binding energy is…", o: ["Energy to separate a nucleus into nucleons", "Energy holding electrons", "Kinetic energy of nucleons", "Energy released by gamma"], a: 0, e: R`It also equals the mass defect × c².` },
    { q: "Which nucleus is most stable?", o: ["Iron-56", "Uranium-235", "Hydrogen-1", "Helium-3"], a: 0, e: R`Iron-56 has the highest binding energy per nucleon.` },
    { q: "1 u is equivalent to…", o: ["931.5 MeV", "1.66 MeV", "938 GeV", "0.511 MeV"], a: 0, e: R`\(1\ \text{u} \times c^2 = 931.5\ \text{MeV}\).` },
    { q: "Why does fusion need high temperatures?", o: ["To overcome electrostatic repulsion between nuclei", "To split nuclei", "To produce neutrons", "To slow nuclei"], a: 0, e: R`Nuclei need huge kinetic energy to get close enough for the strong force to act.` },
    { q: "Mass defect 0.010 u. Energy released?", o: ["9.3 MeV", "0.93 MeV", "93 MeV", "1.66 MeV"], a: 0, e: R`\(0.010 \times 931.5 = 9.3\ \text{MeV}\).` },
    { q: "Fission releases energy because the products have…", o: ["Higher binding energy per nucleon", "Lower binding energy per nucleon", "More mass", "More protons"], a: 0, e: R`Moving towards iron increases binding energy per nucleon, releasing energy.` },
    { q: "What sustains a fission chain reaction?", o: ["Neutrons released by each fission", "Electrons", "Gamma rays", "Protons"], a: 0, e: R`Each fission releases 2 or 3 neutrons that can cause further fissions.` },
    { q: "The mass of a nucleus is ___ the mass of its separate nucleons.", o: ["Less than", "Greater than", "Equal to", "Twice"], a: 0, e: R`Some mass was converted to binding energy when the nucleus formed.` },
    { q: "Peak of the binding energy per nucleon curve is about…", o: ["8.8 MeV", "1 MeV", "200 MeV", "931 MeV"], a: 0, e: R`It peaks near iron at about 8.8 MeV per nucleon.` }
  ],
  flashcards: [
    ["Mass deficit", "Mass of nucleons − mass of nucleus"],
    ["Binding energy", "Energy to separate nucleus into nucleons = Δm c²"],
    ["Atomic mass unit", "1 u = 1.66 × 10⁻²⁷ kg = 931.5 MeV"],
    ["Most stable nucleus", "Iron-56 (highest binding energy per nucleon)"],
    ["Fusion", "Light nuclei join; needs ~10⁷ K to overcome repulsion"],
    ["Fission", "Heavy nucleus splits after absorbing a neutron; releases neutrons"],
    ["Energy released", "Increase in total binding energy = mass lost × c²"],
    ["Chain reaction", "Neutrons from one fission cause further fissions"]
  ]
});

S2Data.add({
  id: "12a", group: 12, y2: true, title: "Gravitational fields",
  summary: "Newton's law of gravitation, field strength, gravitational potential and orbits.",
  notes: R`
<h3>Newton's law of gravitation</h3>
<div class="box box-key"><span class="box-title">\(F = Gm_{1}m_{2}/r^{2}\)</span>\(G = 6.67 \times 10^{-11}\ \text{N}\,\text{m}^{2}\,\text{kg}^{-2}\). Gravity is always attractive. r is measured between centres.</div>
<h3>Field strength and potential</h3>
<ul>
<li>Gravitational field strength: <b>\(g = F/m\)</b> (N kg<sup>−1</sup>). For a point (or spherical) mass: <b>\(g = GM/r^{2}\)</b>. Near Earth's surface the field is roughly uniform.</li>
<li>Gravitational potential: <b>V<sub>grav</sub> = −GM/r</b>. Zero at infinity, negative everywhere else, because work must be done to move a mass away.</li>
<li>Work done moving mass m: \(\Delta W = m\Delta V\). g = −ΔV/Δr.</li>
</ul>
<h3>Orbits</h3>
<p>For a satellite in circular orbit, gravity provides the centripetal force: \(GMm/r^{2} = mv^{2}/r\), so <b>\(v = √\)(GM/r)</b>. With \(v = 2 \pi r/T\): <b>\(T^{2} = 4\pi ^{2}r^{3}/GM\)</b> (T<sup>2</sup> ∝ r<sup>3</sup>, Kepler's third law).</p>
<p><b>Geostationary</b> satellites orbit above the equator with a period of 24 hours, staying above the same point. Used for communications.</p>
<h3>Comparing fields</h3>
<table>
<tr><th>Gravitational</th><th>Electric</th></tr>
<tr><td>\(F = Gm_{1}m_{2}/r^{2}\)</td><td>\(F = kQ_{1}Q_{2}/r^{2}\)</td></tr>
<tr><td>Always attractive</td><td>Attractive or repulsive</td></tr>
<tr><td>V = −GM/r</td><td>\(V = kQ/r\)</td></tr>
</table>
`,
  quiz: [
    { q: "Doubling the distance between two masses changes the force by…", o: ["× ¼", R`\(\times \tfrac12\)`, R`\(\times 2\)`, R`\(\times 4\)`], a: 0, e: R`\(F = \dfrac{GMm}{r^2} \propto \dfrac1{r^2}\).` },
    { q: "Gravitational potential at infinity is…", o: ["Zero", "Infinite", "Negative", "Positive maximum"], a: 0, e: R`Potential is defined to be zero infinitely far away.` },
    { q: "Gravitational potential is negative because…", o: ["Work must be done to move a mass to infinity", "Gravity repels", "Mass is negative", "g is negative"], a: 0, e: R`Gravity is attractive, so energy must be added to escape to zero.` },
    { q: "Orbital speed of a satellite?", o: ["√(GM/r)", "GM/r", "√(GMr)", "GM/r²"], a: 0, e: R`\(\dfrac{GMm}{r^2} = \dfrac{mv^2}{r}\), so \(v = \sqrt{\dfrac{GM}{r}}\).` },
    { q: "In Kepler's third law, T² ∝ …", o: ["r³", "r²", "r", "1/r"], a: 0, e: R`\(T^2 = \dfrac{4\pi^2}{GM}r^3\).` },
    { q: "A geostationary satellite has a period of…", o: ["24 hours", "90 minutes", "1 year", "12 hours"], a: 0, e: R`It matches the Earth's rotation, so it stays above one point.` },
    { q: "g at Earth's surface is 9.81 N kg⁻¹. At twice Earth's radius from the centre?", o: ["2.45 N kg⁻¹", "4.9 N kg⁻¹", "9.81 N kg⁻¹", "19.6 N kg⁻¹"], a: 0, e: R`\(g \propto \dfrac1{r^2}\): \(\dfrac{9.81}{4} = 2.45\ \text{N kg}^{-1}\).` },
    { q: "Which is unique to gravitational fields?", o: ["Always attractive", "Inverse square law", "Radial field", "Field lines"], a: 0, e: R`Electric fields can repel; gravity only attracts.` },
    { q: "Gravitational field strength is…", o: ["Force per unit mass", "Mass per unit force", "Potential × r", "Energy per unit mass"], a: 0, e: R`\(g = \dfrac Fm\).` }
  ],
  flashcards: [
    ["Newton's law of gravitation", R`\(F = Gm_{1}m_{2}/r^2\)`],
    ["Gravitational field strength", R`\(g = F/m = GM/r^2\)`],
    ["Gravitational potential", "V = −GM/r (zero at infinity)"],
    ["Work done in a gravitational field", R`\(\Delta W = m\Delta V\)`],
    ["Orbital speed", R`\(v = \sqrt{GM/r}\)`],
    ["Kepler's third law", R`\(T^2 = 4\pi ^2r^3/GM\)`],
    ["Geostationary orbit", "24 h period, above the equator, same direction as Earth's rotation"],
    ["G", "6.67 × 10⁻¹¹ N m² kg⁻²"]
  ]
});

S2Data.add({
  id: "13a", group: 13, y2: true, title: "Simple harmonic motion",
  summary: "Conditions for SHM, displacement, velocity and acceleration equations, and mass–spring and pendulum systems.",
  notes: R`
<h3>What is SHM?</h3>
<div class="box box-key"><span class="box-title">a = −ω<sup>2</sup>x</span>Acceleration is proportional to displacement from equilibrium and always directed towards it. \(\omega = 2 \pi f = 2 \pi /T\).</div>
<h3>Equations</h3>
<ul>
<li>Displacement: x = A cos ωt (released from maximum displacement).</li>
<li>Velocity: v = −Aω sin ωt. Maximum speed \(v_{max} = \omega A\), at equilibrium.</li>
<li>Maximum acceleration \(a_{max} = \omega ^{2}A\), at maximum displacement.</li>
<li>Velocity is 90° (π/2) out of phase with displacement; acceleration is in antiphase with displacement.</li>
<li>The period of SHM is independent of amplitude (isochronous).</li>
</ul>
<h3>Common oscillators</h3>
<table>
<tr><td>Mass on a spring</td><td>\(T = 2 \pi √\)(m/k)</td></tr>
<tr><td>Simple pendulum (small angles)</td><td>\(T = 2 \pi √\)(l/g)</td></tr>
</table>
<h3>Energy in SHM</h3>
<p>Energy transfers between kinetic and potential, with total energy constant (if undamped). Total energy ∝ A<sup>2</sup>. KE is maximum at equilibrium; PE is maximum at the extremes.</p>
<p><b>Example</b>: a 0.50 kg mass on a spring of k = 200 N m<sup>−1</sup>. \(T = 2 \pi √\)(0.5/200) = <b>0.31 s</b>. With amplitude 0.040 m, \(v_{max} = (2 \pi /0.314) \times 0.040\) = <b>0.80 m s<sup>−1</sup></b>.</p>
`,
  quiz: [
    { q: "The defining equation of SHM is…", o: [R`\(a = -\omega ^2x\)`, R`\(a = \omega ^2x\)`, R`\(v = \omega x\)`, R`\(x = \omega t\)`], a: 0, e: R`Acceleration is proportional to displacement and directed towards equilibrium.` },
    { q: "Where is the speed maximum in SHM?", o: ["At equilibrium", "At maximum displacement", "Halfway", "It's constant"], a: 0, e: R`All the energy is kinetic there.` },
    { q: "Period of a 2.0 m pendulum (g = 9.81)?", o: ["2.8 s", "1.4 s", "0.45 s", "8.9 s"], a: 0, e: R`\(T = 2\pi\sqrt{\dfrac Lg} = 2\pi\sqrt{\dfrac{2.0}{9.81}} = 2.8\ \text{s}\).` },
    { q: "Increasing the mass on a spring by 4× changes T by…", o: [R`\(\times 2\)`, R`\(\times 4\)`, R`\(\times \tfrac12\)`, R`\(\times 16\)`], a: 0, e: R`\(T = 2\pi\sqrt{\dfrac mk}\): \(\sqrt4 = 2\).` },
    { q: "Maximum acceleration of SHM with A = 0.10 m and ω = 5.0 rad s⁻¹?", o: ["2.5 m s⁻²", "0.50 m s⁻²", "0.25 m s⁻²", "50 m s⁻²"], a: 0, e: R`\(a_{\max} = \omega^2 A = 25 \times 0.10 = 2.5\ \text{m s}^{-2}\).` },
    { q: "Acceleration and displacement in SHM are…", o: ["In antiphase", "In phase", "90° out of phase", "Unrelated"], a: 0, e: R`\(a = -\omega^2 x\): the minus sign means opposite directions.` },
    { q: "The period of an ideal SHM oscillator depends on amplitude…", o: ["Not at all", "Strongly", "Linearly", "Only for springs"], a: 0, e: R`The period is isochronous: independent of amplitude.` },
    { q: "Total energy of an SHM oscillator is proportional to…", o: ["A²", "A", "1/A", "√A"], a: 0, e: R`\(E = \tfrac12 m\omega^2 A^2\).` },
    { q: "Maximum speed of SHM with A = 0.040 m and T = 0.50 s?", o: ["0.50 m s⁻¹", "0.080 m s⁻¹", "0.25 m s⁻¹", "1.0 m s⁻¹"], a: 0, e: R`\(2 \pi /0.5 \times 0.04\).` }
  ],
  flashcards: [
    ["SHM condition", "a = −ω²x: acceleration ∝ displacement, towards equilibrium"],
    ["Angular frequency", R`\(\omega = 2 \pi f = 2 \pi /T\)`],
    ["Displacement", R`\(x = A \cos \omega t\)`],
    ["Maximum speed", "v_max = ωA (at equilibrium)"],
    ["Maximum acceleration", "a_max = ω²A (at extremes)"],
    ["Mass–spring period", R`\(T = 2 \pi \sqrt{m/k}\)`],
    ["Pendulum period", "T = 2π√(l/g) (small angles)"],
    ["Energy in SHM", "Total ∝ A²; KE max at centre, PE max at extremes"]
  ]
});

S2Data.add({
  id: "13b", group: 13, y2: true, title: "Damping and resonance",
  summary: "Free and forced oscillations, damping, resonance and its uses and problems.",
  notes: R`
<h3>Free and forced oscillations</h3>
<ul>
<li><b>Free oscillation</b>: no external driving force; oscillates at its <b>natural frequency</b> f<sub>0</sub>.</li>
<li><b>Forced oscillation</b>: an external periodic driving force makes it oscillate at the driving frequency.</li>
</ul>
<h3>Damping</h3>
<p>Damping forces (e.g. friction, air resistance) remove energy, so the amplitude decreases over time.</p>
<ul>
<li><b>Light damping</b>: amplitude decreases gradually (exponential envelope); period almost unchanged.</li>
<li><b>Critical damping</b>: returns to equilibrium in the shortest time without oscillating (car suspension).</li>
<li><b>Heavy (over) damping</b>: returns slowly without oscillating.</li>
</ul>
<h3>Resonance</h3>
<div class="box box-key"><span class="box-title">Resonance</span>When the driving frequency equals the natural frequency, the system absorbs energy most efficiently and the amplitude is maximum.</div>
<ul>
<li>More damping → lower, broader resonance peak, slightly shifted to a lower frequency.</li>
<li>At resonance, the displacement lags the driver by 90°.</li>
<li><b>Useful</b>: musical instruments, MRI, microwave ovens (water molecules), tuning radios.</li>
<li><b>Problems</b>: bridges (Millennium Bridge, Tacoma Narrows), buildings in earthquakes, vibrating machinery. Prevented by damping or changing the natural frequency.</li>
</ul>
<p>Buildings in earthquake zones use dampers (e.g. tuned mass dampers) and design natural frequencies away from typical seismic frequencies.</p>
`,
  quiz: [
    { q: "A free oscillation occurs at…", o: ["The natural frequency", "The driving frequency", "Any frequency", "Zero frequency"], a: 0, e: R`With no driving force, it oscillates at its own natural frequency.` },
    { q: "Resonance happens when…", o: ["Driving frequency = natural frequency", "Damping is maximum", "Amplitude is zero", "There's no driving force"], a: 0, e: R`Energy transfer is greatest, so amplitude is largest.` },
    { q: "Critical damping…", o: ["Returns to equilibrium fastest without oscillating", "Oscillates many times", "Never returns", "Increases amplitude"], a: 0, e: R`Light damping oscillates; heavy damping returns slowly.` },
    { q: "Increasing damping makes the resonance peak…", o: ["Lower and broader", "Higher and sharper", "Unchanged", "Disappear at once"], a: 0, e: R`The peak falls in height and widens, and shifts slightly lower in frequency.` },
    { q: "Which uses resonance usefully?", o: ["MRI scanner", "Car suspension", "Earthquake damper", "Shock absorber"], a: 0, e: R`Hydrogen nuclei resonate with radio waves in a magnetic field.` },
    { q: "Car suspension is designed to be…", o: ["Critically damped", "Undamped", "Lightly damped", "Resonant"], a: 0, e: R`The car returns to level quickly without bouncing.` },
    { q: "Damping causes…", o: ["Energy loss and decreasing amplitude", "Increasing frequency", "Increasing amplitude", "Resonance"], a: 0, e: R`Energy is transferred to the surroundings, often as heat.` },
    { q: "In a forced oscillation, the system vibrates at…", o: ["The driving frequency", "Its natural frequency always", "Twice the driving frequency", "Zero"], a: 0, e: R`After settling, it follows the driver.` },
    { q: "How can resonance damage in a bridge be prevented?", o: ["Adding dampers", "Making it lighter only", "Increasing driving force", "Removing supports"], a: 0, e: R`Dampers absorb energy and reduce the resonant amplitude.` }
  ],
  flashcards: [
    ["Free oscillation", "Oscillates at natural frequency; no driving force"],
    ["Forced oscillation", "Driven at the driving frequency"],
    ["Damping", "Removes energy; amplitude decreases"],
    ["Light damping", "Amplitude falls gradually; still oscillates"],
    ["Critical damping", "Shortest time to equilibrium without oscillating"],
    ["Heavy damping", "Slow return without oscillating"],
    ["Resonance", "Driving frequency = natural frequency; maximum amplitude"],
    ["Effect of damping on resonance", "Lower, broader peak"],
    ["Resonance examples", "Useful: instruments, MRI, microwaves. Problems: bridges, buildings"]
  ]
});

S2Data.detail("8a", { mistakes: ["Saying the cyclotron's electric field makes particles go in circles. The magnetic field does that; the electric field accelerates them across the gap."], tips: ["In track questions, use r = p/BQ to compare particles."], fact: "The first cyclotron, built by Ernest Lawrence in 1931, fitted in the palm of your hand." });
S2Data.detail("8b", { mistakes: ["Forgetting the antineutrino in beta-minus decay, so lepton number doesn't balance."], tips: ["For 'can this reaction happen?' questions, check charge, baryon number and lepton number in a table."], fact: "Murray Gell-Mann took the word 'quark' from James Joyce's novel Finnegans Wake." });
S2Data.detail("9a", { mistakes: ["Saying temperature rises during melting. Energy goes into potential energy, not kinetic."], tips: ["For mixing problems, set energy lost by the hot object equal to energy gained by the cold one."], fact: "Water's high specific heat capacity is why coastal climates are milder than inland ones." });
S2Data.detail("9b", { mistakes: ["Using degrees Celsius in gas law calculations. Always convert to kelvin."], tips: ["Choose pV = nRT for moles and pV = NkT for numbers of molecules."], fact: "At room temperature, nitrogen molecules in the air move at about 500 m s<sup>−1</sup>, faster than sound." });
S2Data.detail("10a", { mistakes: ["Drawing HR diagram temperature increasing to the right. It decreases."], tips: ["For luminosity ratios, compare r<sup>2</sup>T<sup>4</sup>: a star twice as hot and the same size is 16 times as luminous."], fact: "Henrietta Swan Leavitt's discovery of the Cepheid period–luminosity relation made Hubble's measurements possible." });
S2Data.detail("11a", { mistakes: ["Forgetting to convert half-life into seconds before calculating λ in s<sup>−1</sup>."], tips: ["Whole numbers of half-lives: use (½)<sup>n</sup>. Otherwise use N = N<sub>0</sub>e<sup>−λt</sup>."], fact: "Carbon-14's half-life of 5730 years lets archaeologists date objects up to about 50 000 years old." });
S2Data.detail("11b", { mistakes: ["Saying binding energy is energy stored in the nucleus that's released. It's the energy needed to break it apart."], tips: ["For energy released, compare total binding energies (BE per nucleon × nucleon number) before and after."], fact: "The Sun converts about 4 million tonnes of mass into energy every second." });
S2Data.detail("12a", { mistakes: ["Using distance from the surface instead of from the centre of the planet."], tips: ["For orbit questions, start with GMm/r<sup>2</sup> = mv<sup>2</sup>/r (or mω<sup>2</sup>r), then substitute what you need."], fact: "Geostationary satellites orbit at about 36 000 km above the equator." });
S2Data.detail("13a", { mistakes: ["Saying the period of a pendulum depends on its mass. It doesn't."], tips: ["To find ω, use ω = 2π/T, then a<sub>max</sub> = ω<sup>2</sup>A and v<sub>max</sub> = ωA."], fact: "Pendulum clocks were the world's most accurate timekeepers for nearly 300 years." });
S2Data.detail("13b", { mistakes: ["Confusing critical and heavy damping. Critical is fastest to equilibrium; heavy is slower."], tips: ["Sketch amplitude–frequency curves for light and heavy damping: both peak near f<sub>0</sub>, heavier damping lower and wider."], fact: "London's Millennium Bridge wobbled on opening day in 2000 as pedestrians fell into step with its sway; dampers fixed it." });
