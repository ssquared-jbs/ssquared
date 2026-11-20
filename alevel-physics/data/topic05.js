/* A-level Physics² — Topic 5: Waves and the particle nature of light */

S2Data.add({
  id: "5a", group: 5, y1: true, title: "Wave properties and polarisation",
  summary: "Progressive waves, the wave equation, transverse and longitudinal waves, phase and polarisation.",
  notes: `
<h3>Progressive waves</h3>
<p>A progressive wave transfers energy without transferring matter. Key terms: <b>amplitude</b> (maximum displacement), <b>wavelength λ</b> (distance between adjacent points in phase), <b>frequency f</b> (waves per second), <b>period T = 1/f</b>.</p>
<div class="box box-key"><span class="box-title">Wave equation</span>v = fλ</div>
<h3>Transverse and longitudinal</h3>
<ul>
<li><b>Transverse</b>: oscillations perpendicular to the direction of energy transfer (light, all EM waves, waves on strings).</li>
<li><b>Longitudinal</b>: oscillations parallel to the direction of energy transfer, forming compressions and rarefactions (sound, P-waves).</li>
<li>On a displacement–distance graph, a longitudinal wave still looks sinusoidal: displacement is along the direction of travel.</li>
</ul>
<h3>Phase and path difference</h3>
<ul>
<li>Points <b>in phase</b> move together; separation is a whole number of wavelengths.</li>
<li>Points in <b>antiphase</b> are half a wavelength apart (phase difference π radians or 180°).</li>
<li>Phase difference = (path difference ÷ λ) × 2π.</li>
</ul>
<h3>Polarisation</h3>
<ul>
<li>Polarisation restricts oscillations to one plane. Only <b>transverse</b> waves can be polarised, which is evidence that light is transverse.</li>
<li>Unpolarised light through a polarising filter is plane-polarised. A second filter (analyser) at 90° blocks it all.</li>
<li>Light reflected from water or glass is partly polarised, so polarising sunglasses cut glare.</li>
<li><b>Stress analysis</b>: transparent plastics between crossed polarisers show coloured fringes where stress is concentrated.</li>
</ul>
<h3>Wave speed in a string</h3>
<p>Speed of a transverse wave on a string: <b>v = √(T/μ)</b>, where T is the tension and μ is the mass per unit length.</p>
`,
  quiz: [
    { q: "A wave has frequency 50 Hz and wavelength 4.0 m. Speed?", o: ["200 m s⁻¹", "12.5 m s⁻¹", "0.08 m s⁻¹", "54 m s⁻¹"], a: 0, e: "" },
    { q: "Which wave can be polarised?", o: ["Light", "Sound in air", "Ultrasound", "P-waves"], a: 0, e: "" },
    { q: "Points half a wavelength apart are…", o: ["In antiphase", "In phase", "90° out of phase", "Unrelated"], a: 0, e: "" },
    { q: "Phase difference for a path difference of λ/4?", o: ["π/2 rad", "π rad", "2π rad", "π/4 rad"], a: 0, e: "" },
    { q: "Sound is…", o: ["Longitudinal", "Transverse", "Electromagnetic", "Polarisable"], a: 0, e: "" },
    { q: "Why do polarising sunglasses reduce glare?", o: ["Reflected light is partly polarised", "They absorb all light", "They refract light", "They diffract light"], a: 0, e: "" },
    { q: "Period of a 250 Hz wave?", o: ["4.0 ms", "0.25 s", "250 s", "40 ms"], a: 0, e: "" },
    { q: "Speed of a wave on a string depends on…", o: ["Tension and mass per unit length", "Amplitude only", "Frequency only", "Colour"], a: 0, e: "" },
    { q: "Polarisation is evidence that light is…", o: ["Transverse", "Longitudinal", "A particle", "Slow"], a: 0, e: "" }
  ],
  flashcards: [
    ["Wave equation", "v = fλ"],
    ["Period", "T = 1/f"],
    ["Transverse", "Oscillation perpendicular to energy transfer"],
    ["Longitudinal", "Oscillation parallel to energy transfer; compressions and rarefactions"],
    ["In phase", "Separated by whole wavelengths; move together"],
    ["Antiphase", "Half a wavelength apart; π rad phase difference"],
    ["Polarisation", "Oscillations restricted to one plane; transverse waves only"],
    ["Wave speed on a string", "v = √(T/μ)"],
    ["Uses of polarisation", "Sunglasses, stress analysis, LCD screens"]
  ]
});

S2Data.add({
  id: "5b", group: 5, y1: true, title: "Superposition and stationary waves",
  summary: "Superposition, interference, stationary waves, nodes and antinodes, and harmonics on strings and in pipes.",
  notes: `
<h3>Superposition</h3>
<p>When waves meet, the resultant displacement is the <b>vector sum</b> of the individual displacements. In phase → <b>constructive</b> interference; antiphase → <b>destructive</b>.</p>
<p><b>Coherent</b> sources have the same frequency and a constant phase difference. They're needed for a stable interference pattern.</p>
<h3>Stationary (standing) waves</h3>
<ul>
<li>Formed by the superposition of two waves of the same frequency travelling in <b>opposite directions</b> (e.g. a wave and its reflection).</li>
<li><b>Nodes</b>: zero amplitude (always destructive). <b>Antinodes</b>: maximum amplitude.</li>
<li>Adjacent nodes are <b>λ/2</b> apart.</li>
<li>Energy is not transferred along a stationary wave.</li>
<li>Points between adjacent nodes are in phase; points either side of a node are in antiphase.</li>
</ul>
<table>
<tr><th></th><th>Progressive</th><th>Stationary</th></tr>
<tr><td>Energy</td><td>Transferred</td><td>Not transferred</td></tr>
<tr><td>Amplitude</td><td>Same everywhere</td><td>Varies from 0 to max</td></tr>
<tr><td>Phase</td><td>Varies continuously</td><td>Same between nodes</td></tr>
</table>
<h3>Strings fixed at both ends</h3>
<p>Nodes at each end. Fundamental (first harmonic): L = λ/2, so f<sub>1</sub> = v/2L. Harmonics: f<sub>n</sub> = nf<sub>1</sub>.</p>
<p>Combined with v = √(T/μ): <b>f = (1/2L)√(T/μ)</b>.</p>
<h3>Pipes</h3>
<ul>
<li>Closed end = node; open end = antinode.</li>
<li>Pipe closed at one end: fundamental L = λ/4; only odd harmonics.</li>
<li>Pipe open at both ends: fundamental L = λ/2; all harmonics.</li>
</ul>
<p>Measuring the speed of sound: use a resonance tube or a microwave/sound reflector to find nodes; distance between nodes = λ/2, then v = fλ.</p>
`,
  quiz: [
    { q: "The distance between adjacent nodes is…", o: ["λ/2", "λ", "λ/4", "2λ"], a: 0, e: "" },
    { q: "Coherent sources have…", o: ["Same frequency and constant phase difference", "Same amplitude only", "Different frequencies", "No phase relationship"], a: 0, e: "" },
    { q: "A string 0.80 m long vibrates in its fundamental mode. Wavelength?", o: ["1.6 m", "0.80 m", "0.40 m", "3.2 m"], a: 0, e: "" },
    { q: "Which is true of a stationary wave?", o: ["No energy is transferred along it", "All points have the same amplitude", "Phase varies continuously", "It needs only one wave"], a: 0, e: "" },
    { q: "Fundamental frequency 110 Hz. Frequency of the third harmonic (string)?", o: ["330 Hz", "220 Hz", "36.7 Hz", "440 Hz"], a: 0, e: "" },
    { q: "Increasing the tension in a string makes the fundamental frequency…", o: ["Higher", "Lower", "Unchanged", "Zero"], a: 0, e: "" },
    { q: "In a pipe closed at one end, the fundamental has L = …", o: ["λ/4", "λ/2", "λ", "2λ"], a: 0, e: "" },
    { q: "Points on either side of a node are…", o: ["In antiphase", "In phase", "90° out of phase", "At antinodes"], a: 0, e: "" },
    { q: "Two waves meeting in antiphase with equal amplitude give…", o: ["Zero displacement", "Double amplitude", "A stationary wave", "Polarisation"], a: 0, e: "" }
  ],
  flashcards: [
    ["Principle of superposition", "Resultant displacement = vector sum of individual displacements"],
    ["Coherent", "Same frequency and constant phase difference"],
    ["How stationary waves form", "Two waves of same frequency travelling in opposite directions superpose"],
    ["Node / antinode", "Zero amplitude / maximum amplitude"],
    ["Node-to-node distance", "λ/2"],
    ["String fundamental", "L = λ/2; f = v/2L"],
    ["Frequency of a string", "f = (1/2L)√(T/μ)"],
    ["Closed pipe fundamental", "L = λ/4; odd harmonics only"],
    ["Open pipe fundamental", "L = λ/2; all harmonics"]
  ]
});

S2Data.add({
  id: "5c", group: 5, y1: true, title: "Refraction, total internal reflection and lenses",
  summary: "Refractive index, Snell's law, critical angle, optical fibres and thin lenses.",
  notes: `
<h3>Refraction</h3>
<ul>
<li>Refractive index: <b>n = c/v</b>, where c = 3.00 × 10<sup>8</sup> m s<sup>−1</sup>.</li>
<li><b>Snell's law</b>: n<sub>1</sub> sin θ<sub>1</sub> = n<sub>2</sub> sin θ<sub>2</sub>.</li>
<li>Entering a denser medium (higher n), light slows and bends <b>towards</b> the normal.</li>
</ul>
<h3>Total internal reflection</h3>
<p>When light travels from a higher to a lower refractive index and the angle of incidence exceeds the <b>critical angle C</b>, all the light reflects.</p>
<div class="box box-key"><span class="box-title">Critical angle</span>sin C = n<sub>2</sub>/n<sub>1</sub> (or sin C = 1/n into air)</div>
<p><b>Optical fibres</b> use TIR. A cladding with lower n protects the core and stops signal crossing between fibres. Problems: <b>modal dispersion</b> (different paths take different times; fixed with a narrow core) and <b>material dispersion</b> (different wavelengths travel at different speeds; fixed with monochromatic light).</p>
<h3>Lenses</h3>
<ul>
<li><b>Power</b> P = 1/f (dioptres, D, with f in metres). Converging lenses have positive power; diverging lenses negative.</li>
<li>Thin lenses in contact: P = P<sub>1</sub> + P<sub>2</sub>.</li>
<li><b>Lens equation</b>: 1/u + 1/v = 1/f (real-is-positive convention). Virtual images have negative v.</li>
<li>Magnification m = v/u = image height / object height.</li>
<li>A <b>real</b> image can be projected on a screen; a <b>virtual</b> image can't (rays only appear to come from it).</li>
</ul>
<p><b>Example</b>: an object 30 cm from a lens of focal length 10 cm. 1/v = 1/10 − 1/30 = 2/30, so v = <b>15 cm</b> (real, inverted), m = 0.5.</p>
`,
  quiz: [
    { q: "Light travels at 2.0 × 10⁸ m s⁻¹ in a glass. Refractive index?", o: ["1.5", "0.67", "2.0", "6.0"], a: 0, e: "" },
    { q: "Critical angle for glass of n = 1.50 (to air)?", o: ["41.8°", "48.6°", "33.7°", "90°"], a: 0, e: "sin C = 1/1.5." },
    { q: "TIR can only happen when light goes from…", o: ["Higher to lower refractive index", "Lower to higher", "Air to glass", "Any medium"], a: 0, e: "" },
    { q: "Light enters glass (n = 1.5) at 30° in air. Angle of refraction?", o: ["19.5°", "48.6°", "30°", "45°"], a: 0, e: "" },
    { q: "Power of a converging lens of focal length 25 cm?", o: ["+4.0 D", "+0.04 D", "−4.0 D", "+25 D"], a: 0, e: "" },
    { q: "Why do optical fibres have a cladding?", o: ["Protects core and prevents signal crossover", "Increases speed of light", "Makes TIR impossible", "Adds colour"], a: 0, e: "" },
    { q: "Object 20 cm from a lens of f = 10 cm. Image distance?", o: ["20 cm", "10 cm", "6.7 cm", "−20 cm"], a: 0, e: "" },
    { q: "Modal dispersion is reduced by…", o: ["A narrower core", "A wider core", "White light", "Thicker cladding only"], a: 0, e: "" },
    { q: "A virtual image…", o: ["Can't be projected onto a screen", "Is always inverted", "Has positive v", "Only forms with mirrors"], a: 0, e: "" }
  ],
  flashcards: [
    ["Refractive index", "n = c/v"],
    ["Snell's law", "n₁ sin θ₁ = n₂ sin θ₂"],
    ["Critical angle", "sin C = n₂/n₁"],
    ["Conditions for TIR", "From higher to lower n; angle of incidence > C"],
    ["Modal dispersion", "Different paths, different times; fix with narrow core"],
    ["Material dispersion", "Different wavelengths, different speeds; fix with monochromatic light"],
    ["Lens power", "P = 1/f (dioptres)"],
    ["Lens equation", "1/u + 1/v = 1/f"],
    ["Magnification", "m = v/u = image height/object height"]
  ]
});

S2Data.add({
  id: "5d", group: 5, y1: true, title: "Diffraction and interference",
  summary: "Diffraction, the diffraction grating, Young's double slit and electron diffraction.",
  notes: `
<h3>Diffraction</h3>
<p>Waves spread out when they pass through a gap or round an obstacle. Diffraction is most noticeable when the gap is about the same size as the wavelength. A wider gap gives less spreading.</p>
<h3>Diffraction grating</h3>
<div class="box box-key"><span class="box-title">nλ = d sin θ</span>d = slit spacing (1 ÷ lines per metre), n = order of the maximum, θ = angle from the straight-through (zero order) beam.</div>
<ul>
<li>Maxima are sharp and bright, so wavelengths can be measured precisely.</li>
<li>Maximum possible order: n ≤ d/λ (since sin θ ≤ 1).</li>
<li>White light gives spectra; red diffracts more than blue.</li>
</ul>
<p><b>Example</b>: a grating with 300 lines per mm and λ = 600 nm. d = 1 ÷ 300 000 = 3.33 × 10<sup>−6</sup> m. First order: sin θ = 600 × 10<sup>−9</sup> ÷ 3.33 × 10<sup>−6</sup> = 0.18, θ = <b>10.4°</b>.</p>
<h3>Two-source interference</h3>
<ul>
<li>Bright fringe (maximum): path difference = nλ. Dark fringe: path difference = (n + ½)λ.</li>
<li>Young's double slit showed light is a wave. With slit separation s and screen distance D, fringe spacing is w ≈ λD/s.</li>
</ul>
<h3>Electron diffraction</h3>
<p>Electrons fired at a thin graphite film produce diffraction rings. Diffraction is a wave property, so this shows electrons behave as waves.</p>
<div class="box box-key"><span class="box-title">de Broglie wavelength</span>λ = h/p = h/mv (h = 6.63 × 10<sup>−34</sup> J s)</div>
<p>Increasing the accelerating voltage makes electrons faster, so λ is shorter and the rings get smaller.</p>
`,
  quiz: [
    { q: "Diffraction is greatest when the gap is…", o: ["About the same as the wavelength", "Much larger than λ", "Much smaller than the wave amplitude", "Zero"], a: 0, e: "" },
    { q: "A grating has 500 lines per mm. Slit spacing d?", o: ["2.0 × 10⁻⁶ m", "5.0 × 10⁻⁴ m", "2.0 × 10⁻³ m", "500 m"], a: 0, e: "" },
    { q: "nλ = d sin θ; d = 2.0 × 10⁻⁶ m, λ = 500 nm. Highest order?", o: ["4", "2", "5", "3"], a: 0, e: "d/λ = 4." },
    { q: "Condition for a bright fringe?", o: ["Path difference = nλ", "Path difference = (n + ½)λ", "Same amplitude", "Antiphase"], a: 0, e: "" },
    { q: "Electron diffraction shows that electrons…", o: ["Have wave properties", "Have charge", "Have mass", "Are particles only"], a: 0, e: "" },
    { q: "Increasing the speed of electrons makes their de Broglie wavelength…", o: ["Shorter", "Longer", "Unchanged", "Zero"], a: 0, e: "" },
    { q: "de Broglie wavelength of an electron with momentum 6.63 × 10⁻²⁴ kg m s⁻¹?", o: ["1.0 × 10⁻¹⁰ m", "1.0 × 10⁻⁹ m", "1.0 × 10⁻¹⁴ m", "6.6 m"], a: 0, e: "" },
    { q: "In white-light grating spectra, which colour is deviated most?", o: ["Red", "Blue", "Green", "All equally"], a: 0, e: "" },
    { q: "Young's double-slit fringe spacing w ≈ …", o: ["λD/s", "λs/D", "sD/λ", "λ/sD"], a: 0, e: "" }
  ],
  flashcards: [
    ["Diffraction", "Spreading of waves through a gap or around an obstacle"],
    ["Most diffraction when…", "Gap ≈ wavelength"],
    ["Grating equation", "nλ = d sin θ"],
    ["Slit spacing", "d = 1 ÷ lines per metre"],
    ["Bright fringe condition", "Path difference = nλ"],
    ["Dark fringe condition", "Path difference = (n + ½)λ"],
    ["Young's fringe spacing", "w = λD/s"],
    ["de Broglie wavelength", "λ = h/p = h/mv"],
    ["Electron diffraction shows…", "Particles have wave properties"]
  ]
});

S2Data.add({
  id: "5e", group: 5, y1: true, title: "Photons, the photoelectric effect and energy levels",
  summary: "Photon energy, the photoelectric effect, work function, the electronvolt, energy levels and spectra.",
  notes: `
<h3>Photons</h3>
<p>Light comes in packets of energy called <b>photons</b>: <b>E = hf = hc/λ</b>.</p>
<p>The <b>electronvolt</b>: 1 eV = 1.60 × 10<sup>−19</sup> J (energy gained by an electron accelerated through 1 V). Electron accelerated through V gains ½mv<sup>2</sup> = eV.</p>
<h3>The photoelectric effect</h3>
<p>Shining light on a clean metal surface can release electrons (photoelectrons). Observations:</p>
<ul>
<li>No electrons are released below a <b>threshold frequency</b>, however intense the light.</li>
<li>Above it, electrons are emitted instantly.</li>
<li>Maximum kinetic energy depends on frequency, not intensity.</li>
<li>Intensity only affects the <b>number</b> of electrons emitted per second.</li>
</ul>
<p>Wave theory can't explain these. Photon theory can: one photon gives all its energy to one electron.</p>
<div class="box box-key"><span class="box-title">Einstein's equation</span>hf = φ + ½mv<sup>2</sup><sub>max</sub>. φ = work function (minimum energy to free an electron). Threshold frequency f<sub>0</sub> = φ/h.</div>
<p>A graph of E<sub>k max</sub> against f has gradient h and x-intercept f<sub>0</sub>.</p>
<h3>Energy levels and spectra</h3>
<ul>
<li>Electrons in atoms occupy discrete <b>energy levels</b>. Moving down a level emits a photon of energy <b>hf = E<sub>1</sub> − E<sub>2</sub></b>.</li>
<li><b>Emission spectra</b> (bright lines) come from excited atoms; <b>absorption spectra</b> (dark lines in a continuous spectrum) occur when cool gas absorbs specific photons.</li>
<li><b>Ionisation energy</b>: energy to remove an electron from the ground state. Levels are given as negative values, with zero = ionised.</li>
<li>Line spectra are evidence for discrete energy levels.</li>
</ul>
<h3>Intensity</h3>
<p>Intensity I = P/A (W m<sup>−2</sup>). For a point source, I = P/4πr<sup>2</sup>.</p>
`,
  quiz: [
    { q: "Energy of a photon of frequency 5.0 × 10¹⁴ Hz?", o: ["3.3 × 10⁻¹⁹ J", "3.3 × 10⁻²⁰ J", "7.5 × 10⁴⁸ J", "1.3 × 10⁻⁴⁸ J"], a: 0, e: "" },
    { q: "Increasing the intensity of light above threshold increases…", o: ["The number of photoelectrons per second", "Their maximum KE", "The work function", "The threshold frequency"], a: 0, e: "" },
    { q: "Work function φ = 2.0 eV. Threshold frequency?", o: ["4.8 × 10¹⁴ Hz", "3.0 × 10¹⁴ Hz", "2.0 × 10¹⁵ Hz", "1.6 × 10¹⁴ Hz"], a: 0, e: "3.2 × 10⁻¹⁹ ÷ 6.63 × 10⁻³⁴." },
    { q: "Gradient of a graph of max KE against frequency?", o: ["h", "φ", "e", "c"], a: 0, e: "" },
    { q: "1 eV in joules?", o: ["1.60 × 10⁻¹⁹ J", "9.11 × 10⁻³¹ J", "6.63 × 10⁻³⁴ J", "1 J"], a: 0, e: "" },
    { q: "An electron drops from −3.4 eV to −13.6 eV. Photon energy?", o: ["10.2 eV", "17.0 eV", "3.4 eV", "13.6 eV"], a: 0, e: "" },
    { q: "Why does wave theory fail to explain the photoelectric effect?", o: ["It predicts emission at any frequency given enough intensity", "It predicts no emission at all", "It explains everything", "It ignores electrons"], a: 0, e: "" },
    { q: "Line spectra are evidence for…", o: ["Discrete energy levels", "Wave-particle duality only", "Continuous energies", "Polarisation"], a: 0, e: "" },
    { q: "Intensity 2.0 m from a 100 W point source?", o: ["2.0 W m⁻²", "25 W m⁻²", "8.0 W m⁻²", "50 W m⁻²"], a: 0, e: "100 ÷ (4π × 4)." }
  ],
  flashcards: [
    ["Photon energy", "E = hf = hc/λ"],
    ["Electronvolt", "1 eV = 1.60 × 10⁻¹⁹ J"],
    ["Work function", "Minimum energy needed to free an electron from the surface"],
    ["Einstein's photoelectric equation", "hf = φ + ½mv²max"],
    ["Threshold frequency", "f₀ = φ/h"],
    ["Effect of intensity", "More photoelectrons per second, not more KE"],
    ["Photon from level change", "hf = E₁ − E₂"],
    ["Emission vs absorption spectra", "Bright lines on dark vs dark lines on continuous spectrum"],
    ["Intensity of a point source", "I = P/4πr²"]
  ]
});

S2Data.detail("5a", { mistakes: ["Saying sound can be polarised. Only transverse waves can be."], tips: ["Convert phase differences carefully: 360° = 2π rad = one whole wavelength."], fact: "Bees navigate using the polarisation pattern of skylight, even on cloudy days." });
S2Data.detail("5b", { mistakes: ["Saying the node-to-node distance is λ. It's λ/2."], tips: ["Sketch the string or pipe with its nodes and antinodes first, then read off how many quarter or half wavelengths fit."], fact: "A guitar's frets work by shortening the vibrating length, raising the fundamental frequency." });
S2Data.detail("5c", { mistakes: ["Using sin C = n instead of 1/n.", "Forgetting the critical angle only applies going from denser to less dense."], tips: ["Draw the normal on every ray diagram, and measure angles from it, not the surface."], fact: "Diamonds sparkle because their high refractive index (2.42) gives a critical angle of only 24°, trapping light inside." });
S2Data.detail("5d", { mistakes: ["Using lines per mm directly as d. Convert to lines per metre and take the reciprocal."], tips: ["For the highest order, always round d/λ down to a whole number."], fact: "Davisson and Germer confirmed electron diffraction by accident in 1927, after their nickel target crystallised when air leaked in." });
S2Data.detail("5e", { mistakes: ["Saying brighter light gives faster electrons. Intensity only changes the number per second."], tips: ["Keep energies in eV for energy-level questions, then convert to joules only when you need a frequency or wavelength."], fact: "Einstein won his 1921 Nobel Prize for explaining the photoelectric effect, not for relativity." });
