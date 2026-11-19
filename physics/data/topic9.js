/* Edexcel GCSE (1PH0) extras — content not in the International GCSE (4PH1) */

S2Data.add({
  id: "9a", group: 9, gcse: true, title: "Energy and matter extras",
  summary: "Specific latent heat, elastic potential energy, and upthrust in fluids.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>These ideas are in Edexcel GCSE Physics (1PH0). International GCSE (4PH1) students can skip them, but they help with harder questions.</div>
<h3>Specific latent heat</h3>
<p>The energy needed to change the state of 1 kg of a substance <b>without changing its temperature</b>.</p>
<div class="eq">energy = mass × specific latent heat &nbsp;&nbsp; E = m × L</div>
<ul>
<li><b>Latent heat of fusion</b>: solid ↔ liquid. For water it is about 334 000 J/kg.</li>
<li><b>Latent heat of vaporisation</b>: liquid ↔ gas. For water it is about 2 260 000 J/kg.</li>
</ul>
<h3>Elastic potential energy</h3>
<div class="eq">energy stored = ½ × spring constant × extension<sup>2</sup> &nbsp;&nbsp; E = ½ k x<sup>2</sup></div>
<div class="eq">force = spring constant × extension &nbsp;&nbsp; F = k × x</div>
<p>The spring constant k (N/m) is the gradient of a force–extension graph. The area under the graph is the energy stored.</p>
<h3>Upthrust and floating</h3>
<ul>
<li>An object in a fluid feels an upward force, called <b>upthrust</b>, because the pressure at its bottom is greater than at its top.</li>
<li>Upthrust = the weight of fluid displaced.</li>
<li>An object <b>floats</b> when the upthrust equals its weight before it is fully submerged. This happens when it is less dense than the fluid.</li>
</ul>
`,
  flashcards: [
    ["Specific latent heat", "Energy to change the state of 1 kg without a temperature change"],
    ["Latent heat equation", "E = m × L"],
    ["Latent heat of fusion vs vaporisation", "Fusion: solid ↔ liquid. Vaporisation: liquid ↔ gas"],
    ["Elastic potential energy equation", "E = ½ k x<sup>2</sup>"],
    ["Spring constant from a graph", "Gradient of the force–extension graph"],
    ["Upthrust", "The upward force from a fluid, equal to the weight of fluid displaced"],
    ["When does an object float?", "When upthrust equals its weight (it is less dense than the fluid)"]
  ],
  quiz: [
    { q: "How much energy melts 2 kg of ice? (L = 334 000 J/kg)", o: ["668 000 J", "167 000 J", "334 000 J", "2 kJ"], a: 0, e: "" },
    { q: "A spring with k = 200 N/m is stretched 0.1 m. How much energy does it store?", o: ["1 J", "20 J", "10 J", "2 J"], a: 0, e: "½ × 200 × 0.01" },
    { q: "What causes upthrust?", o: ["Greater pressure at the bottom of an object than at the top", "Gravity", "Friction", "Air resistance only"], a: 0, e: "" },
    { q: "A 40 N force stretches a spring 0.2 m. What is k?", o: ["200 N/m", "8 N/m", "0.005 N/m", "40 N/m"], a: 0, e: "" },
    { q: "Why does temperature stay constant while water boils?", o: ["Energy is used to break bonds between particles (latent heat)", "No energy is added", "The water cools", "It is a chemical change"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "9b", group: 9, gcse: true, title: "Electricity and magnetism extras",
  summary: "P = I²R, the National Grid, magnetic flux density and F = BIL, and microphones.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>These ideas are in Edexcel GCSE Physics (1PH0) but not the International GCSE.</div>
<h3>Power and resistance</h3>
<div class="eq">power = current<sup>2</sup> × resistance &nbsp;&nbsp; P = I<sup>2</sup> × R</div>
<p>Heating in a cable depends on I<sup>2</sup>, so <b>halving the current cuts the heating loss to a quarter</b>. That's why the <b>National Grid</b> uses step-up transformers to transmit at very high voltages (up to 400 kV) and low current, then steps down to 230 V for homes.</p>
<h3>Magnetic flux density and force</h3>
<div class="eq">force = magnetic flux density × current × length &nbsp;&nbsp; F = B × I × l</div>
<ul>
<li>B is magnetic flux density, in tesla (T). This applies when the wire is at 90° to the field.</li>
</ul>
<h3>Microphones and the generator effect</h3>
<p>Sound waves make a diaphragm vibrate. This moves a coil in a magnetic field and induces a varying current that matches the sound: the reverse of a loudspeaker.</p>
<h3>Earth and the compass</h3>
<p>The Earth has a magnetic field. A compass needle (a small magnet) lines up with it, which is evidence that the Earth's core is magnetic.</p>
`,
  flashcards: [
    ["Power with current and resistance", "P = I<sup>2</sup> × R"],
    ["Why does the National Grid use high voltage?", "Lower current means much less heating loss (P = I<sup>2</sup>R)"],
    ["Force on a wire in a field", "F = B × I × l"],
    ["Unit of magnetic flux density", "Tesla (T)"],
    ["How does a microphone work?", "A vibrating diaphragm moves a coil in a magnetic field, inducing a current"]
  ],
  quiz: [
    { q: "A 3 A current flows through a 5 Ω cable. How much power is wasted as heat?", o: ["45 W", "15 W", "75 W", "1.7 W"], a: 0, e: "3² × 5" },
    { q: "If the current in a cable is halved, the heating loss becomes…", o: ["A quarter", "Half", "Double", "The same"], a: 0, e: "" },
    { q: "A 0.5 m wire carrying 2 A sits at 90° to a 0.4 T field. What is the force?", o: ["0.4 N", "4 N", "1.6 N", "0.1 N"], a: 0, e: "0.4 × 2 × 0.5" },
    { q: "Which device turns sound into an electrical signal?", o: ["Microphone", "Loudspeaker", "Transformer", "Motor"], a: 0, e: "" },
    { q: "What is the UK domestic mains voltage after the National Grid steps it down?", o: ["230 V", "400 000 V", "12 V", "50 V"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "9c", group: 9, gcse: true, title: "Waves and radiation extras",
  summary: "Lenses, black body radiation, ultrasound and seismic waves, and radiation dose.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>These ideas are in Edexcel GCSE Physics (1PH0) but not the International GCSE.</div>
<h3>Lenses</h3>
<ul>
<li><b>Converging (convex)</b> lenses bring parallel rays together at the <b>principal focus</b>. They can form real images (cameras, the eye) or virtual, magnified images (magnifying glasses).</li>
<li><b>Diverging (concave)</b> lenses spread rays out. They always form virtual, upright, smaller images. They are used to correct short sight.</li>
<li>The <b>focal length</b> is the distance from the centre of the lens to the principal focus. A more powerful lens has a shorter focal length.</li>
</ul>
<h3>Black body radiation</h3>
<ul>
<li>All objects emit and absorb infrared radiation. A <b>black body</b> absorbs all the radiation that hits it, and is also the best possible emitter.</li>
<li>Hotter objects emit more radiation and at <b>shorter wavelengths</b>.</li>
<li>An object stays at a constant temperature when it absorbs radiation at the same rate as it emits it. The Earth's temperature depends on this balance, which is affected by greenhouse gases.</li>
</ul>
<h3>Ultrasound and seismic waves</h3>
<ul>
<li><b>Ultrasound</b>: sound above 20 kHz. Used for pre-natal scans and sonar. Echoes from boundaries are timed to find distances.</li>
<li><b>Seismic waves</b> from earthquakes: <b>P-waves</b> are longitudinal and travel through solids and liquids. <b>S-waves</b> are transverse and travel through solids only. The S-wave shadow zone shows the Earth's outer core is liquid.</li>
</ul>
<h3>Radiation dose</h3>
<p>Radiation dose is measured in <b>sieverts (Sv)</b>, often millisieverts (mSv). It measures the risk of harm to the body from radiation exposure.</p>
`,
  flashcards: [
    ["Converging lens", "Convex lens that brings parallel rays together at the principal focus"],
    ["Diverging lens", "Concave lens that spreads rays out; always forms virtual images"],
    ["Focal length", "Distance from the lens centre to the principal focus"],
    ["Black body", "A perfect absorber and emitter of radiation"],
    ["Hotter objects emit radiation with…", "More intensity and shorter wavelengths"],
    ["Ultrasound", "Sound above 20 kHz"],
    ["P-waves vs S-waves", "P: longitudinal, through solids and liquids. S: transverse, solids only"],
    ["What shows that the outer core is liquid?", "S-waves can't pass through it (S-wave shadow zone)"],
    ["Unit of radiation dose", "Sievert (Sv)"]
  ],
  quiz: [
    { q: "Which lens is used to correct short sight?", o: ["Diverging (concave)", "Converging (convex)", "Plane glass", "Prism"], a: 0, e: "" },
    { q: "Which seismic waves can't travel through liquids?", o: ["S-waves", "P-waves", "Both", "Neither"], a: 0, e: "" },
    { q: "Ultrasound has a frequency above…", o: ["20 kHz", "20 Hz", "200 Hz", "2 kHz"], a: 0, e: "" },
    { q: "As an object gets hotter, the radiation it emits…", o: ["Increases and shifts to shorter wavelengths", "Decreases", "Shifts to longer wavelengths", "Stays the same"], a: 0, e: "" },
    { q: "An ultrasound echo returns after 0.0002 s in tissue (v = 1500 m/s). How deep is the boundary?", o: ["0.15 m", "0.3 m", "0.6 m", "1.5 m"], a: 0, e: "Distance = 1500 × 0.0002 ÷ 2" }
  ]
});
