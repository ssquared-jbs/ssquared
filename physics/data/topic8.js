/* Topic 8 — Astrophysics (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "8a", group: 8, title: "Motion in the universe",
  summary: "The Universe's structure, gravity, orbits and orbital speed.",
  notes: `
<h3>The Universe</h3>
<ul>
<li>The <b>Universe</b> is a vast collection of billions of <b>galaxies</b>.</li>
<li>A galaxy is a huge collection of billions of <b>stars</b>. Ours is the <b>Milky Way</b>.</li>
<li>Our <b>Solar System</b> is in the Milky Way. It contains the Sun, eight planets and their moons, dwarf planets, asteroids and comets.</li>
</ul>
<h3>Gravity and orbits</h3>
<ul>
<li><b>Gravitational force</b> keeps moons orbiting planets, planets orbiting the Sun, and artificial satellites orbiting Earth.</li>
<li>Gravitational field strength (g) is different on different planets. On the Moon it is about 1.6 N/kg, compared with 10 N/kg on Earth.</li>
<li>Weight W = mg, so your weight changes from planet to planet, but your mass doesn't.</li>
</ul>
<table>
<tr><th>Orbit</th><th>Shape</th></tr>
<tr><td>Planets around the Sun</td><td>Almost circular</td></tr>
<tr><td>Moons around planets</td><td>Almost circular</td></tr>
<tr><td>Comets around the Sun</td><td>Very <b>elliptical</b>: they speed up near the Sun and slow down far away</td></tr>
</table>
<h3>Orbital speed</h3>
<div class="eq">orbital speed = 2 × π × orbital radius ÷ time period &nbsp;&nbsp; v = 2πr ÷ T</div>
<div class="box box-key"><span class="box-title">Worked example</span>The Moon orbits at r = 3.84 × 10<sup>8</sup> m with T = 27.3 days = 2.36 × 10<sup>6</sup> s.<br>v = 2π × 3.84 × 10<sup>8</sup> ÷ 2.36 × 10<sup>6</sup> ≈ <b>1020 m/s</b>.</div>
`,
  flashcards: [
    ["Galaxy", "A collection of billions of stars"],
    ["Our galaxy", "The Milky Way"],
    ["What keeps planets in orbit?", "Gravitational force from the Sun"],
    ["Shape of a comet's orbit", "Very elliptical"],
    ["When does a comet move fastest?", "When it is closest to the Sun"],
    ["Orbital speed equation", "v = 2πr ÷ T"],
    ["g on the Moon", "About 1.6 N/kg"],
    ["Does mass change on another planet?", "No: weight changes, mass doesn't"]
  ],
  quiz: [
    { q: "What is a galaxy?", o: ["A collection of billions of stars", "A planet and its moons", "A single star", "A comet's tail"], a: 0, e: "" },
    { q: "What keeps the Moon in orbit around the Earth?", o: ["Gravity", "Magnetism", "Air resistance", "Friction"], a: 0, e: "" },
    { q: "Where in its orbit is a comet fastest?", o: ["Closest to the Sun", "Furthest from the Sun", "Halfway", "Speed is constant"], a: 0, e: "" },
    { q: "A satellite orbits at r = 7000 km with T = 6000 s. What is its speed? (use π = 3.14)", o: ["7.3 km/s", "1.2 km/s", "0.86 km/s", "44 km/s"], a: 0, e: "2 × 3.14 × 7000 ÷ 6000 ≈ 7.3 km/s" },
    { q: "A 10 kg rock on the Moon (g = 1.6 N/kg) weighs…", o: ["16 N", "100 N", "10 kg", "1.6 N"], a: 0, e: "" },
    { q: "Which list is in order of size, smallest first?", o: ["Planet, star, galaxy, Universe", "Star, planet, galaxy, Universe", "Galaxy, star, planet, Universe", "Universe, galaxy, star, planet"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "8b", group: 8, title: "Stellar evolution", paper2: true,
  summary: "The life cycles of stars, star colours and the Hertzsprung–Russell diagram.",
  notes: `
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Star colour and temperature</h3>
<p>A star's colour depends on its surface temperature. The hottest are <b>blue</b>, then white, yellow, orange, and the coolest are <b>red</b>.</p>
<h3>Life cycle of a star</h3>
<ol>
<li><b>Nebula</b>: a cloud of dust and gas pulled together by gravity.</li>
<li><b>Protostar</b>: it gets hotter as it collapses, until fusion of hydrogen starts.</li>
<li><b>Main sequence star</b>: stable for billions of years. The outward pressure from fusion balances the inward pull of gravity.</li>
</ol>
<table>
<tr><th>Star about the size of the Sun</th><th>Star much bigger than the Sun</th></tr>
<tr><td>Hydrogen runs out → <b>red giant</b></td><td>Hydrogen runs out → <b>red supergiant</b></td></tr>
<tr><td>Outer layers drift away (planetary nebula) → <b>white dwarf</b></td><td>Explodes as a <b>supernova</b></td></tr>
<tr><td>Cools to a black dwarf</td><td>Leaves a <b>neutron star</b>, or a <b>black hole</b> if very massive</td></tr>
</table>
<h3>Brightness</h3>
<ul>
<li><b>Absolute magnitude</b>: how bright a star would be at a standard distance of 10 parsecs. Lower (more negative) numbers are brighter.</li>
<li>Apparent brightness depends on both the star's real brightness and its distance.</li>
</ul>
<h3>Hertzsprung–Russell diagram</h3>
<p>Plots <b>absolute magnitude</b> (brightness, up the side) against <b>temperature</b> (along the bottom, hottest on the <b>left</b>).</p>
<ul>
<li><b>Main sequence</b>: a diagonal band from top left (hot, bright) to bottom right (cool, dim).</li>
<li><b>Red giants and supergiants</b>: top right (cool but very bright, because they are huge).</li>
<li><b>White dwarfs</b>: bottom left (hot but dim, because they are small).</li>
</ul>
`,
  flashcards: [
    ["Colour of the hottest stars", "Blue"],
    ["Colour of the coolest stars", "Red"],
    ["What starts a star shining?", "Nuclear fusion of hydrogen begins in the protostar"],
    ["Why is a main sequence star stable?", "Outward pressure from fusion balances gravity"],
    ["Life cycle of a Sun-sized star", "Nebula → protostar → main sequence → red giant → white dwarf"],
    ["Life cycle of a massive star", "Nebula → protostar → main sequence → red supergiant → supernova → neutron star or black hole"],
    ["Absolute magnitude", "Brightness of a star at a standard distance of 10 parsecs"],
    ["Axes of an HR diagram", "Absolute magnitude against temperature (hottest on the left)"],
    ["Where are white dwarfs on an HR diagram?", "Bottom left: hot but dim"]
  ],
  quiz: [
    { q: "What does a Sun-sized star become after the red giant stage?", o: ["White dwarf", "Black hole", "Neutron star", "Supernova"], a: 0, e: "" },
    { q: "What is the hottest star colour?", o: ["Blue", "Red", "Yellow", "Orange"], a: 0, e: "" },
    { q: "Why doesn't a main sequence star collapse?", o: ["Pressure from fusion balances gravity", "It has no gravity", "It is solid", "It is cooling"], a: 0, e: "" },
    { q: "On an HR diagram, where are red giants?", o: ["Top right", "Bottom left", "Bottom right", "Middle of the main sequence"], a: 0, e: "" },
    { q: "What can be left after a supernova of a very massive star?", o: ["A black hole", "A white dwarf", "A red giant", "A nebula only"], a: 0, e: "" },
    { q: "Star A has absolute magnitude −5, star B +5. Which is brighter?", o: ["Star A", "Star B", "They are equal", "You can't tell"], a: 0, e: "Lower numbers mean brighter." }
  ]
});

S2Data.add({
  id: "8c", group: 8, title: "Cosmology", paper2: true,
  summary: "Red-shift, the expanding Universe, the Big Bang and the cosmic microwave background.",
  notes: `
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Red-shift</h3>
<ul>
<li>Light from distant galaxies has <b>longer wavelengths</b> than expected: the absorption lines are shifted towards the red end of the spectrum.</li>
<li>This is the Doppler effect: the galaxies are <b>moving away</b> from us.</li>
<li><b>Further</b> galaxies have a <b>bigger red-shift</b>, so they are moving away faster. This means the Universe is <b>expanding</b>.</li>
</ul>
<div class="eq">red-shift z = change in wavelength ÷ reference wavelength = velocity of galaxy ÷ speed of light</div>
<div class="eq">z = Δλ ÷ λ<sub>0</sub> = v ÷ c</div>
<h3>The Big Bang theory</h3>
<p>The Universe began about 13.8 billion years ago from a very small, very hot, very dense region, and has been expanding ever since.</p>
<h3>Evidence</h3>
<ul>
<li><b>Red-shift</b> of galaxies: the Universe is expanding, so in the past it was much smaller.</li>
<li><b>Cosmic microwave background radiation (CMB)</b>: microwave radiation reaching us evenly from all directions. It is left-over radiation from the early Universe, stretched to microwave wavelengths by the expansion. The Big Bang theory predicts it; the old Steady State theory can't explain it.</li>
</ul>
<div class="box box-key"><span class="box-title">Worked example</span>A line normally at 656 nm is observed at 663 nm. z = 7 ÷ 656 = 0.0107. v = z × c = 0.0107 × 3 × 10<sup>8</sup> ≈ <b>3.2 × 10<sup>6</sup> m/s</b> away from us.</div>
`,
  flashcards: [
    ["Red-shift", "Light from distant galaxies is shifted to longer wavelengths"],
    ["What does red-shift show?", "Galaxies are moving away from us: the Universe is expanding"],
    ["Link between distance and red-shift", "More distant galaxies have bigger red-shifts (moving away faster)"],
    ["Red-shift equation", "z = Δλ/λ<sub>0</sub> = v/c"],
    ["Big Bang theory", "The Universe began from a tiny, hot, dense region and has been expanding since"],
    ["CMB", "Cosmic microwave background: left-over radiation from the early Universe, from every direction"],
    ["Two pieces of evidence for the Big Bang", "Red-shift of galaxies and the CMB"]
  ],
  quiz: [
    { q: "What does red-shift tell us about distant galaxies?", o: ["They are moving away from us", "They are moving towards us", "They are getting hotter", "They are red stars"], a: 0, e: "" },
    { q: "Which evidence supports the Big Bang but not the Steady State theory?", o: ["Cosmic microwave background radiation", "Stars shining", "Planets orbiting", "Gravity"], a: 0, e: "" },
    { q: "Galaxy X has a bigger red-shift than galaxy Y. Galaxy X is…", o: ["Further away and moving faster", "Closer and slower", "The same distance", "Moving towards us"], a: 0, e: "" },
    { q: "A galaxy has z = 0.02. How fast is it moving away? (c = 3 × 10⁸ m/s)", o: ["6 × 10⁶ m/s", "1.5 × 10¹⁰ m/s", "6 × 10⁸ m/s", "0.02 m/s"], a: 0, e: "v = zc" },
    { q: "Why is the CMB now detected as microwaves?", o: ["Expansion stretched its wavelength", "It was always microwaves", "Stars emit it", "The Earth's atmosphere changes it"], a: 0, e: "" },
    { q: "Roughly how old is the Universe?", o: ["13.8 billion years", "4.6 billion years", "6000 years", "100 billion years"], a: 0, e: "" }
  ]
});
