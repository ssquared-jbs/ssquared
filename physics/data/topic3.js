/* Topic 3 — Waves (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "3a", group: 3, title: "Properties of waves",
  summary: "Transverse and longitudinal waves, wave equations, reflection, refraction and the Doppler effect.",
  notes: R`
<h3>What waves do</h3>
<p>Waves transfer <b>energy and information</b> without transferring matter.</p>
<table>
<tr><th></th><th>Transverse</th><th>Longitudinal</th></tr>
<tr><td>Vibrations</td><td>At right angles to the direction of energy transfer</td><td>Parallel to the direction of energy transfer</td></tr>
<tr><td>Examples</td><td>Light and all EM waves, water ripples, waves on a string</td><td>Sound, ultrasound, P-waves</td></tr>
<tr><td>Features</td><td>Peaks and troughs</td><td>Compressions and rarefactions</td></tr>
</table>
<h3>Describing waves</h3>
<ul>
<li><b>Amplitude</b>: the maximum displacement from the rest position.</li>
<li><b>Wavelength (λ)</b>: the distance from one point on a wave to the same point on the next wave (e.g. peak to peak), in m.</li>
<li><b>Frequency (f)</b>: the number of waves passing a point each second, in hertz (Hz).</li>
<li><b>Period (T)</b>: the time for one complete wave, in s.</li>
</ul>
<div class="eq">\(\text{wave speed} = \text{frequency} \times \text{wavelength} \qquad v = f \times \lambda\)</div>
<div class="eq">\(\text{frequency} = \dfrac{1}{\text{time period}} \qquad f = \dfrac{1}{T}\)</div>
<h3>Reflection and refraction</h3>
<ul>
<li>All waves can be reflected and refracted.</li>
<li><b>Refraction</b> is a change of direction caused by a change of speed when a wave enters a different medium. Frequency stays the same, so wavelength changes too.</li>
<li>A wave slows down when it enters a denser medium (e.g. light into glass) and bends <b>towards</b> the normal.</li>
</ul>
<h3>The Doppler effect</h3>
<p>When a wave source moves <b>towards</b> you, the waves are squashed: higher frequency, shorter wavelength. Moving <b>away</b>, they are stretched: lower frequency, longer wavelength. Example: an ambulance siren changes pitch as it passes.</p>
<div class="box box-prac"><span class="box-title">🔬 Practical: measuring waves in a ripple tank</span>Use a strobe or photo to measure wavelength (measure across several waves and divide). Count waves passing a point in 10 s for frequency. Then \(v = f\lambda\).</div>
`,
  flashcards: [
    ["Transverse wave", "Vibrations at right angles to the direction of energy transfer"],
    ["Longitudinal wave", "Vibrations parallel to the direction of energy transfer"],
    ["Example of a longitudinal wave", "Sound"],
    ["Amplitude", "Maximum displacement from the rest position"],
    ["Wavelength", "Distance from one point on a wave to the same point on the next"],
    ["Frequency", "Number of waves passing a point per second (Hz)"],
    ["Wave equation", R`\(v = f \times \lambda\)`],
    ["Frequency and period", R`\(f = \dfrac{1}{T}\)`],
    ["Refraction", "Change of direction due to a change in speed in a new medium"],
    ["Doppler effect", "A moving source changes the observed frequency and wavelength"]
  ],
  quiz: [
    { q: "A wave has frequency 50 Hz and wavelength 4 m. What is its speed?", o: ["200 m/s", "12.5 m/s", "54 m/s", "0.08 m/s"], a: 0, e: R`\(v = f\lambda\)` },
    { q: "Which type of wave is sound?", o: ["Longitudinal", "Transverse", "Electromagnetic", "Stationary"], a: 0, e: R`Its vibrations are parallel to the direction of energy transfer.` },
    { q: "A wave has a period of 0.02 s. What is its frequency?", o: ["50 Hz", "0.02 Hz", "20 Hz", "500 Hz"], a: 0, e: R`\(f = \dfrac{1}{T}\)` },
    { q: "When light passes from air into glass, it…", o: ["Slows down and bends towards the normal", "Speeds up and bends away", "Changes frequency", "Stops"], a: 0, e: R`Glass is optically denser, so light slows and bends towards the normal.` },
    { q: "What stays the same when a wave refracts?", o: ["Frequency", "Speed", "Wavelength", "Direction"], a: 0, e: R`The frequency is set by the source. Speed and wavelength change (\(v = f\lambda\)).` },
    { q: "An ambulance drives away from you. The siren sounds…", o: ["Lower pitched", "Higher pitched", "The same", "Louder"], a: 0, e: "Its waves are stretched, so the frequency is lower." },
    { q: "What do waves transfer?", o: ["Energy and information", "Matter", "Particles", "Mass"], a: 0, e: R`The medium itself isn't transferred, only energy (and information).` }
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "The electromagnetic spectrum",
  summary: "The order of EM waves, their uses and their dangers.",
  notes: R`
<h3>Properties</h3>
<ul>
<li>All EM waves are <b>transverse</b> and travel at the <b>same speed</b> in a vacuum: 3 × 10<sup>8</sup> m/s.</li>
<li>They form a continuous spectrum, ordered by wavelength and frequency.</li>
</ul>
<p style="font-size:1.05rem"><b>Radio → Microwaves → Infrared → Visible light → Ultraviolet → X-rays → Gamma rays</b></p>
<p>Left to right: wavelength gets <b>shorter</b>, frequency gets <b>higher</b>, and energy and danger increase.</p>
<p>Visible light, from longest to shortest wavelength: <b>red, orange, yellow, green, blue, indigo, violet</b>.</p>
<h3>Uses</h3>
<table>
<tr><th>Wave</th><th>Uses</th></tr>
<tr><td>Radio waves</td><td>Broadcasting, communications</td></tr>
<tr><td>Microwaves</td><td>Cooking, satellite transmissions, mobile phones</td></tr>
<tr><td>Infrared</td><td>Heaters, night vision, remote controls, thermal imaging</td></tr>
<tr><td>Visible light</td><td>Optical fibres, photography, seeing</td></tr>
<tr><td>Ultraviolet</td><td>Fluorescent lamps, security marking, sterilising water</td></tr>
<tr><td>X-rays</td><td>Medical imaging, airport security scanners</td></tr>
<tr><td>Gamma rays</td><td>Sterilising food and medical equipment, cancer treatment</td></tr>
</table>
<h3>Dangers</h3>
<table>
<tr><th>Wave</th><th>Harmful effect</th></tr>
<tr><td>Microwaves</td><td>Internal heating of body tissue</td></tr>
<tr><td>Infrared</td><td>Skin burns</td></tr>
<tr><td>Ultraviolet</td><td>Damage to surface cells and eyes, which can lead to skin cancer and eye conditions</td></tr>
<tr><td>X-rays and gamma rays</td><td>Mutations or damage to cells in the body (cancer)</td></tr>
</table>
`,
  flashcards: [
    ["Order of the EM spectrum (long → short wavelength)", "Radio, microwaves, infrared, visible, ultraviolet, X-rays, gamma"],
    ["Speed of EM waves in a vacuum", R`\(3 \times 10^{8}\ \text{m/s}\)`],
    ["EM wave with the highest frequency", "Gamma rays"],
    ["Uses of microwaves", "Cooking, satellite transmissions, mobile phones"],
    ["Uses of infrared", "Heaters, night vision, remote controls"],
    ["Uses of ultraviolet", "Fluorescent lamps, security marking"],
    ["Uses of gamma rays", "Sterilising food and equipment, treating cancer"],
    ["Danger of ultraviolet", "Damage to surface cells and eyes; skin cancer"],
    ["Danger of X-rays and gamma rays", "Cell mutation and damage (cancer)"],
    ["Visible colour with the longest wavelength", "Red"]
  ],
  quiz: [
    { q: "Which EM wave has the longest wavelength?", o: ["Radio waves", "Gamma rays", "Visible light", "Ultraviolet"], a: 0, e: R`Order of wavelength, longest first: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma.` },
    { q: "Which EM wave is used to sterilise surgical instruments?", o: ["Gamma rays", "Radio waves", "Infrared", "Microwaves"], a: 0, e: R`Gamma rays have the highest energy and kill bacteria.` },
    { q: "Which is a danger of microwaves?", o: ["Internal heating of body tissue", "Skin cancer", "Cell mutation", "Blindness only"], a: 0, e: R`Microwaves are absorbed by water in body tissue, heating it.` },
    { q: "What do all EM waves have in common?", o: ["Same speed in a vacuum", "Same frequency", "Same wavelength", "They are longitudinal"], a: 0, e: R`All EM waves travel at \(3 \times 10^8\ \text{m/s}\) in a vacuum.` },
    { q: "Which is used in TV remote controls?", o: ["Infrared", "Ultraviolet", "X-rays", "Gamma"], a: 0, e: R`The remote sends coded pulses of infrared.` },
    { q: "Between which two waves is visible light in the spectrum?", o: ["Infrared and ultraviolet", "Microwaves and infrared", "Ultraviolet and X-rays", "Radio and microwaves"], a: 0, e: R`Visible light sits between infrared (longer wavelength) and ultraviolet (shorter).` },
    { q: "Which colour of light has the highest frequency?", o: ["Violet", "Red", "Green", "Yellow"], a: 0, e: R`Violet has the shortest wavelength of visible light, so the highest frequency.` }
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Light and sound",
  summary: "Reflection, refraction, Snell's law, total internal reflection, optical fibres and sound.",
  notes: R`
<h3>Reflection</h3>
<p>Law of reflection: <b>angle of incidence = angle of reflection</b>, both measured from the <b>normal</b>. A plane mirror forms a virtual, upright image the same distance behind the mirror as the object is in front.</p>
<h3>Refraction and Snell's law</h3>
<div class="eq">\(\text{refractive index} \quad n = \dfrac{\sin i}{\sin r}\)</div>
<p>i is the angle in air and r is the angle in the material. Glass has n ≈ 1.5.</p>
<div class="box box-prac"><span class="box-title">🔬 Practical: refraction of light in a glass block</span>Shine a ray box beam into a rectangular glass block at different angles. Mark the rays in and out, join them through the block, draw the normal and measure i and r. Plot sin i against sin r: the gradient is n.</div>
<h3>Total internal reflection</h3>
<ul>
<li>Light going from a denser medium (glass) to a less dense one (air) bends away from the normal.</li>
<li>At the <b>critical angle</b> the refracted ray travels along the boundary.</li>
<li>If the angle of incidence is <b>bigger than the critical angle</b>, all the light reflects back: <b>total internal reflection</b>.</li>
</ul>
<div class="eq">\(\sin c = \dfrac{1}{n}\)</div>
<p>Uses: <b>optical fibres</b> (communications, endoscopes) and prisms in periscopes and binoculars.</p>
<h3>Sound</h3>
<ul>
<li>Sound is a longitudinal wave. It needs a medium and can't travel through a vacuum.</li>
<li>Human hearing range: <b>20 Hz to 20 000 Hz</b>.</li>
<li><b>Pitch</b> depends on frequency: higher frequency, higher pitch. <b>Loudness</b> depends on amplitude.</li>
<li>Sound can be reflected (echoes) and refracted.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: seeing sound waves</span>A microphone connected to an oscilloscope displays sound as a wave. More waves on the screen means a higher frequency. A taller wave means a bigger amplitude (louder). Frequency = 1 ÷ time period read from the trace.</div>
<div class="box box-prac"><span class="box-title">🔬 Practical: speed of sound in air</span>Stand a measured distance (e.g. 100 m) from a wall and clap. Time the echo, or clap in time with the echoes and time many claps. Speed = 2 × distance ÷ time (the sound travels there and back).</div>
`,
  flashcards: [
    ["Law of reflection", "Angle of incidence = angle of reflection (from the normal)"],
    ["Refractive index equation", R`\(n = \dfrac{\sin i}{\sin r}\)`],
    ["Critical angle equation", R`\(\sin c = \dfrac{1}{n}\)`],
    ["Condition for total internal reflection", "Light travels from a denser to a less dense medium at an angle bigger than the critical angle"],
    ["Uses of total internal reflection", "Optical fibres, endoscopes, prisms in periscopes and binoculars"],
    ["Range of human hearing", "20 Hz to 20 kHz"],
    ["What sets the pitch of a sound?", "Frequency"],
    ["What sets the loudness of a sound?", "Amplitude"],
    ["Why can't sound travel through space?", "It needs a medium (particles) to travel through"]
  ],
  quiz: [
    { q: "A ray hits a mirror at 35° to the normal. What is the angle of reflection?", o: ["35°", "55°", "70°", "145°"], a: 0, e: R`Angle of incidence = angle of reflection, both measured from the normal.` },
    { q: "Light enters glass at i = 30°, r = 19.5°. What is the refractive index? (sin 30° = 0.5, sin 19.5° = 0.33)", o: ["1.5", "0.67", "1.0", "2.0"], a: 0, e: R`\(\dfrac{0.5}{0.33 \approx  1.5}\)` },
    { q: "Glass has n = 1.5. What is the sine of its critical angle?", o: ["0.67", "1.5", "0.5", "0.15"], a: 0, e: R`\(\sin c = \dfrac{1}{1.5}\)` },
    { q: "Which device uses total internal reflection?", o: ["An optical fibre", "A plane mirror", "A loudspeaker", "A fuse"], a: 0, e: R`Light reflects totally inside the fibre when it hits the edge at more than the critical angle.` },
    { q: "Which frequency can a human hear?", o: ["2000 Hz", "5 Hz", "50 000 Hz", "100 000 Hz"], a: 0, e: R`The human hearing range is about 20 Hz to 20 000 Hz.` },
    { q: "A louder sound has a bigger…", o: ["Amplitude", "Frequency", "Wavelength", "Speed"], a: 0, e: R`Amplitude sets loudness; frequency sets pitch.` },
    { q: "A student 170 m from a wall hears an echo 1.0 s after clapping. What is the speed of sound?", o: ["340 m/s", "170 m/s", "85 m/s", "680 m/s"], a: 0, e: "Speed = 2 × 170 ÷ 1.0" }
  ]
});
