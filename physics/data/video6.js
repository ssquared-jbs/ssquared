/* Video explainers — Physics Topics 6, 7, 8 and 9. */

S2Data.video("6a", {
  scenes: [
    { type: "title", title: "Magnetism", sub: "Poles, field lines, and permanent vs induced magnets.", mark: "N S",
      say: ["Magnets exert forces without touching. This video covers poles, magnetic fields, and the difference between permanent and induced magnets."] },
    { type: "points", title: "Magnet basics", items: ["Like poles <b>repel</b>; unlike poles <b>attract</b>", "Magnetic materials: <b>iron, steel, nickel, cobalt</b>", "A magnetic field is where a magnetic material feels a force"],
      say: ["Every magnet has a north and a south pole. Like poles repel and unlike poles attract.", "The magnetic materials are iron, steel, nickel and cobalt.", "A magnetic field is the region around a magnet where a magnetic material feels a force."] },
    { type: "svg", title: "Field of a bar magnet",
      svg: "<rect x='420' y='210' width='130' height='70' style='fill:var(--bad)'/><rect x='550' y='210' width='130' height='70' class='fillA'/><text class='txt b w' text-anchor='middle' x='485' y='255' style='font-size:34px'>N</text><text class='txt b w' text-anchor='middle' x='615' y='255' style='font-size:34px'>S</text>" +
        [50, 100, 150].map(function (d, i) { var k = d * 0.9, T = 245 - d * 1.2 - 40, B = 245 + d * 1.2 + 40, st = i < 2 ? 1 : 2;
          return "<path class='stroke draw' pathLength='1' data-step='" + st + "' d='M420 232 C" + (420 - k) + " 232 " + (420 - k) + " " + T + " 550 " + T + " C" + (680 + k) + " " + T + " " + (680 + k) + " 232 682 232' marker-end='url(#vxb)'/>" +
                 "<path class='stroke draw' pathLength='1' data-step='" + st + "' d='M420 258 C" + (420 - k) + " 258 " + (420 - k) + " " + B + " 550 " + B + " C" + (680 + k) + " " + B + " " + (680 + k) + " 258 682 258' marker-end='url(#vxb)'/>"; }).join("") +
        "<text class='txt s' x='40' y='60' data-step='2'>closer lines = stronger field</text>",
      say: ["Here's a bar magnet.", "Field lines go from the north pole to the south pole. You can plot them with a plotting compass, marking where the needle points, step by step.", "The lines are closest together at the poles, where the field is strongest."] },
    { type: "compare", title: "Permanent vs induced", h: ["Permanent", "Induced"],
      rows: [["Magnetism", "Always produces its own field", "Only when in a magnetic field"], ["Force", "Attract or repel", "Always attraction"], ["Material", "Steel (magnetically hard)", "Soft iron (magnetically soft)"]],
      say: ["A permanent magnet produces its own magnetic field all the time. An induced magnet only becomes magnetic when it's placed in a field.", "Induced magnetism always causes attraction.", "Steel keeps its magnetism, so it's used for permanent magnets. Soft iron gains and loses magnetism easily, so it's used in electromagnets."] },
    { type: "quiz", q: "Which is the only sure test that something is a magnet?", o: ["It attracts iron", "It repels a magnet", "It's shiny", "It conducts"], a: 1,
      why: "Any magnetic material is attracted. Only a magnet can repel.", say: ["What's the only sure test that something is a magnet?"] }
  ]
});

S2Data.video("6b", {
  scenes: [
    { type: "title", title: "Electromagnetism and the motor effect", sub: "Fields from currents, solenoids, F = BIL and motors.", mark: "F=BIL",
      say: ["An electric current makes a magnetic field. Put that current in another field, and you get a force. That's how motors work."] },
    { type: "points", title: "Fields from currents", items: ["Straight wire: <b>concentric circles</b> around it", "Solenoid: like a <b>bar magnet</b>; strong and uniform inside", "Stronger electromagnet: more <b>current</b>, more <b>turns</b>, <b>iron core</b>"],
      say: ["A current in a straight wire makes a magnetic field of concentric circles around it.", "Coil the wire into a solenoid and the field looks like a bar magnet's, strong and uniform inside.", "To make an electromagnet stronger, increase the current, add more turns, or put a soft iron core inside."] },
    { type: "equation", title: "The motor effect", rows: [[{ t: "F", k: 1 }, "=", { t: "B", s: 1 }, "×", { t: "I", s: 1 }, "×", { t: "L", s: 1 }]], labels: [{ t: "B in tesla", s: 1 }, { t: "Fleming's left-hand rule gives the direction", s: 2 }],
      say: ["A current-carrying wire in a magnetic field feels a force. That's the motor effect.", "Force equals magnetic flux density times current times length of wire in the field.", "Use Fleming's left-hand rule for the direction: first finger for field, second finger for current, thumb for motion."] },
    { type: "flow", title: "How a d.c. motor spins", nodes: ["Current in a coil in a magnetic field", "Forces act in <b>opposite directions</b> on each side", "Coil turns", "<b>Split-ring commutator</b> reverses current every half turn"],
      say: ["A coil of wire sits in a magnetic field, carrying a current.", "The current flows in opposite directions on the two sides, so the forces are in opposite directions.", "That makes the coil turn.", "Every half turn, the split-ring commutator reverses the current, so the coil keeps spinning the same way. More current, more turns or a stronger magnet make it faster."] },
    { type: "points", title: "Loudspeakers", items: ["Alternating current in a coil, in a magnet's field", "Force changes direction rapidly → cone <b>vibrates</b>", "Vibrations make pressure waves: <b>sound</b>"],
      say: ["A loudspeaker uses the motor effect too. An alternating current flows through a coil attached to a cone, sitting in a magnetic field.", "The force keeps changing direction, so the cone vibrates.", "Those vibrations push the air, creating sound waves."] },
    { type: "quiz", q: "A 0.5 m wire carries 4 A at right angles to a 0.2 T field. What's the force?", o: ["0.4 N", "2.5 N", "10 N", "40 N"], a: 0,
      why: "F = BIL = 0.2 × 4 × 0.5.", say: ["A wire point five metres long carries four amps at right angles to a point two tesla field. What's the force?"] }
  ]
});

S2Data.video("6c", {
  scenes: [
    { type: "title", title: "Electromagnetic induction", sub: "Generators, transformers and the National Grid.", mark: "≈",
      say: ["Move a magnet near a wire and you can make electricity. That's electromagnetic induction, and it powers nearly everything."] },
    { type: "points", title: "Inducing a voltage", items: ["Move a wire through a field, or a magnet into a coil → <b>p.d. induced</b>", "Reverse the motion → p.d. reverses", "Stop moving → no p.d.", "Bigger p.d.: <b>faster</b> movement, <b>stronger</b> magnet, <b>more turns</b>"],
      say: ["When a wire moves through a magnetic field, or a magnet moves in a coil, a potential difference is induced. If the circuit is complete, a current flows.", "Move it the other way and the p d reverses.", "Stop moving and there's nothing.", "To get a bigger p d, move faster, use a stronger magnet, or use more turns of wire."] },
    { type: "graph", title: "An a.c. generator's output", x: "Time", y: "Voltage",
      lines: [{ pts: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1].map(function (x) { return [x, 0.5 + 0.38 * Math.sin(x * 4 * Math.PI)]; }), s: 0 }, { pts: [0, 0.0625, 0.125, 0.1875, 0.25, 0.3125, 0.375, 0.4375, 0.5, 0.5625, 0.625, 0.6875, 0.75, 0.8125, 0.875, 0.9375, 1].map(function (x) { return [x, 0.5 + 0.48 * Math.sin(x * 8 * Math.PI)]; }), s: 1, dash: true }],
      say: ["A coil spinning in a magnetic field produces an alternating voltage. Slip rings and brushes connect it to the circuit.", "Spin it faster, and the peak voltage gets bigger and the frequency goes up."] },
    { type: "equation", title: "Transformers", rows: [[{ t: "Vp ÷ Vs", k: 1 }, "=", { t: "Np ÷ Ns", k: 1 }], [{ t: "Vp × Ip", s: 1 }, { t: "=", s: 1 }, { t: "Vs × Is", s: 1 }]],
      note: "Only work with a.c.: the changing field in the iron core induces a p.d. in the secondary", noteStep: 2,
      say: ["A transformer changes the size of an alternating voltage. The voltage ratio equals the turns ratio. More turns on the secondary steps the voltage up.",
            "If it's a hundred percent efficient, power in equals power out, so V p I p equals V s I s.",
            "Transformers only work with a c. The changing current in the primary coil makes a changing field in the iron core, which induces a p d in the secondary."] },
    { type: "flow", title: "The National Grid", nodes: ["Power station", "<b>Step-up</b> transformer: 400 kV", "Transmission cables", "<b>Step-down</b> transformer: 230 V", "Homes"],
      say: ["Electricity leaves the power station.", "A step-up transformer raises the voltage to hundreds of thousands of volts.", "For the same power, high voltage means low current, so much less energy is wasted heating the cables.", "Step-down transformers then reduce the voltage to a safe two hundred and thirty volts.", "And it reaches our homes."] },
    { type: "quiz", q: "A transformer has 200 primary and 1000 secondary turns. Input is 12 V. Output?", o: ["2.4 V", "60 V", "120 V", "12 V"], a: 1,
      why: "12 × 1000 ÷ 200 = 60 V.", say: ["Two hundred primary turns, a thousand secondary turns, twelve volts in. What's the output voltage?"] }
  ]
});

S2Data.video("7a", {
  scenes: [
    { type: "title", title: "Radioactivity", sub: "Alpha, beta, gamma, decay equations and half-life.", mark: "α β γ",
      say: ["Some nuclei are unstable. They give out radiation to become more stable. This video covers the types of radiation, decay equations and half-life."] },
    { type: "compare", title: "Three types of radiation", h: ["What it is", "Stopped by"],
      rows: [["Alpha α", "2 protons + 2 neutrons (helium nucleus)", "Paper or a few cm of air"], ["Beta β", "Fast electron from the nucleus", "A few mm of aluminium"], ["Gamma γ", "EM wave", "Thick lead or concrete (reduced)"]],
      say: ["Alpha particles are two protons and two neutrons, a helium nucleus. They're the most ionising, but stopped by paper or a few centimetres of air.", "Beta particles are fast electrons from the nucleus, made when a neutron turns into a proton. A few millimetres of aluminium stops them.", "Gamma rays are electromagnetic waves. They're the least ionising and most penetrating. Thick lead or concrete reduces them."] },
    { type: "equation", title: "Decay equations", rows: [["²³⁸₉₂U", "→", "²³⁴₉₀Th", "+", { t: "⁴₂α", k: 1 }], [{ t: "¹⁴₆C", s: 1 }, { t: "→", s: 1 }, { t: "¹⁴₇N", s: 1 }, { t: "+", s: 1 }, { t: "⁰₋₁β", k: 1, s: 1 }]],
      note: "Top and bottom numbers must balance on both sides", noteStep: 2,
      say: ["In alpha decay, the mass number goes down by four and the atomic number by two. Uranium two three eight becomes thorium two three four.",
            "In beta decay, the mass number stays the same and the atomic number goes up by one. Carbon fourteen becomes nitrogen fourteen.",
            "Always check that the top numbers and the bottom numbers add up the same on both sides."] },
    { type: "graph", title: "Half-life", x: "Time", y: "Activity",
      lines: [{ pts: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1].map(function (x) { return [x, 0.9 * Math.pow(0.5, x / 0.25)]; }), s: 0 }],
      marks: [{ x: 0, y: 0.9, t: "800 Bq", s: 0, anchor: "start", dx: 20, dy: 0 }, { x: 0.25, y: 0.45, t: "400 Bq after 1 half-life", s: 1, anchor: "start", dx: 18, dy: -6 }, { x: 0.5, y: 0.225, t: "200 Bq after 2", s: 2, anchor: "start", dx: 18, dy: -6 }],
      say: ["Radioactive decay is random, but a large sample decays at a predictable rate. Here a sample starts at eight hundred becquerels.",
            "The half-life is the time for the activity to halve. After one half-life, it's four hundred.",
            "After two half-lives, two hundred. After three, a hundred."] },
    { type: "points", title: "Using and handling radiation", items: ["Smoke alarms: <b>alpha</b>", "Paper thickness control: <b>beta</b>", "Medical tracers and sterilising: <b>gamma</b>", "Safety: tongs, distance, short time, lead shielding"],
      say: ["Smoke alarms use alpha.", "Paper factories use beta to monitor thickness.", "Gamma is used for medical tracers, with a short half-life, and for sterilising equipment.", "To handle sources safely: use tongs, keep your distance, minimise exposure time, and store them in lead-lined boxes. Don't forget background radiation, from rocks, radon gas and cosmic rays: subtract it from your readings."] },
    { type: "quiz", q: "A source has a half-life of 3 days and activity 800 Bq. Activity after 9 days?", o: ["400 Bq", "267 Bq", "200 Bq", "100 Bq"], a: 3,
      why: "9 days = 3 half-lives: 800 → 400 → 200 → 100.", say: ["A source has a half-life of three days and an activity of eight hundred becquerels. What's its activity after nine days?"] }
  ]
});

S2Data.video("7b", {
  scenes: [
    { type: "title", title: "Fission and fusion", sub: "Splitting heavy nuclei, joining light ones.", mark: "²³⁵U",
      say: ["Nuclear power stations split atoms. Stars join them. Both release enormous amounts of energy."] },
    { type: "flow", title: "Nuclear fission", nodes: ["Slow neutron absorbed by U-235", "Nucleus becomes unstable", "Splits into 2 daughter nuclei", "+ 2 or 3 neutrons + energy"],
      say: ["In fission, a slow-moving neutron is absorbed by a uranium two three five nucleus.", "The nucleus becomes unstable.", "It splits into two smaller daughter nuclei,", "releasing two or three more neutrons and a lot of energy."] },
    { type: "big", text: "Chain reaction", sub: "The released neutrons go on to split more nuclei",
      say: ["Those released neutrons can be absorbed by other uranium nuclei, causing more fissions.", "That's a chain reaction. In a reactor, it's carefully controlled."] },
    { type: "compare", title: "Inside a reactor", h: ["Material", "Job"],
      rows: [["Moderator", "Graphite or water", "Slows neutrons so they cause fission"], ["Control rods", "Boron", "Absorb neutrons to control the rate"], ["Coolant", "Water or gas", "Carries heat to make steam"], ["Shielding", "Thick concrete", "Absorbs radiation"]],
      say: ["The moderator, graphite or water, slows the neutrons down so they're more likely to cause fission.", "Control rods made of boron absorb neutrons. Lowering them slows the reaction.", "The coolant carries heat away to make steam for the turbines.", "And thick concrete shielding absorbs the radiation."] },
    { type: "points", title: "Nuclear fusion", items: ["Two <b>light nuclei join</b> to form a heavier one", "Releases energy: it powers the <b>Sun</b>", "Needs extremely <b>high temperature and pressure</b>", "Positive nuclei repel, so they must collide very fast"],
      say: ["In fusion, two light nuclei, like hydrogen, join to form a heavier nucleus, like helium.", "This releases energy. It's what powers the Sun and other stars.", "But it needs extremely high temperatures and pressures,", "because the nuclei are positive and repel each other. They have to collide incredibly fast to fuse. That's why we can't yet use it for power stations."] },
    { type: "quiz", q: "What is the job of the control rods?", o: ["Slow down neutrons", "Absorb neutrons", "Cool the reactor", "Make steam"], a: 1,
      why: "Fewer neutrons means fewer fissions.", say: ["What do the control rods do?"] }
  ]
});

S2Data.video("8a", {
  scenes: [
    { type: "title", title: "Motion in the universe", sub: "The Solar System, gravity and orbital speed.", mark: "2πr",
      say: ["Gravity holds the universe together, from moons orbiting planets to stars in galaxies."] },
    { type: "flow", title: "From small to huge", nodes: ["Moon", "Planet", "Star", "Galaxy", "Universe"],
      say: ["Moons orbit planets.", "Planets orbit stars.", "Our star is the Sun.", "Billions of stars make a galaxy. Ours is the Milky Way.", "And billions of galaxies make up the universe."] },
    { type: "compare", title: "Orbits", h: ["Shape", "Example"],
      rows: [["Planets", "Nearly circular", "Earth around the Sun"], ["Moons", "Nearly circular", "Moon around the Earth"], ["Comets", "Very elliptical", "Halley's comet: fastest near the Sun"], ["Artificial satellites", "Circular", "Communications, GPS"]],
      say: ["Planets have nearly circular orbits.", "So do moons.", "Comets have very stretched, elliptical orbits. They speed up as they get close to the Sun, because gravity pulls harder there.", "Artificial satellites orbit the Earth for communications and navigation."] },
    { type: "equation", title: "Orbital speed", rows: [[{ t: "v", k: 1 }, "=", { t: "2πr", s: 1 }, "÷", { t: "T", s: 1 }]], labels: [{ t: "r = orbit radius", s: 1 }, { t: "T = time for one orbit", s: 1 }],
      note: "Earth: 2π × 1.5 × 10¹¹ m ÷ 3.2 × 10⁷ s ≈ 30 km/s", noteStep: 2,
      say: ["Orbital speed is the distance round the orbit divided by the time.", "v equals two pi r over T, where r is the orbital radius and T is the time period.", "For the Earth, that's about thirty kilometres every second."] },
    { type: "points", title: "Gravity", items: ["Gravitational field strength <b>g</b> varies between planets", "Weight = m × g changes; <b>mass doesn't</b>", "Gravity provides the force that keeps orbits curved"],
      say: ["The gravitational field strength is different on different planets and moons. It's ten newtons per kilogram on Earth and about one point six on the Moon.", "So your weight changes, but your mass doesn't.", "Gravity provides the force that pulls orbiting objects towards the centre, keeping their paths curved."] },
    { type: "quiz", q: "Why does a comet speed up near the Sun?", o: ["Solar wind pushes it", "Gravity is stronger closer to the Sun", "It gets lighter", "It melts"], a: 1,
      why: "Gravitational potential energy turns into kinetic energy.", say: ["Why does a comet speed up as it gets close to the Sun?"] }
  ]
});

S2Data.video("8b", {
  scenes: [
    { type: "title", title: "Stellar evolution", sub: "How stars are born, live and die.", mark: "★",
      say: ["Stars are born, live for billions of years, and die. How they die depends on their mass."] },
    { type: "flow", title: "Birth of a star", nodes: ["Nebula: cloud of dust and gas", "Gravity pulls it together: <b>protostar</b>", "Hot enough for <b>fusion</b>", "<b>Main sequence</b> star"],
      say: ["A star begins as a nebula, a huge cloud of dust and gas.", "Gravity pulls it together into a protostar, which heats up.", "When it's hot enough, hydrogen nuclei start to fuse.", "It becomes a main sequence star. It's stable because the outward pressure from fusion balances the inward pull of gravity."] },
    { type: "compare", title: "How stars die", h: ["Sun-sized star", "Much bigger star"],
      rows: [["After main sequence", "Red giant", "Red supergiant"], ["Then", "Throws off outer layers", "Supernova explosion"], ["End", "White dwarf", "Neutron star or black hole"]],
      say: ["When the hydrogen runs out, a star like the Sun swells into a red giant. A much bigger star becomes a red supergiant.", "A Sun-sized star gently throws off its outer layers. A massive star explodes as a supernova.", "The Sun will end as a white dwarf. A massive star leaves a neutron star, or if it's big enough, a black hole."] },
    { type: "points", title: "Colour and brightness", items: ["<b>Blue</b> stars are hottest; <b>red</b> stars are coolest", "<b>Apparent magnitude</b>: brightness seen from Earth", "<b>Absolute magnitude</b>: brightness from a standard 10 parsecs", "HR diagram: absolute magnitude vs temperature"],
      say: ["A star's colour shows its surface temperature. Blue stars are the hottest and red stars the coolest.", "Apparent magnitude is how bright a star looks from Earth, which depends on its distance.", "Absolute magnitude is how bright it would be from a standard distance of ten parsecs, so it compares true brightness.", "A Hertzsprung Russell diagram plots absolute magnitude against temperature. Most stars sit on the main sequence band."] },
    { type: "quiz", q: "What will the Sun eventually become?", o: ["A black hole", "A neutron star", "A white dwarf", "A supernova"], a: 2,
      why: "It's not massive enough to go supernova.", say: ["What will the Sun eventually become?"] }
  ]
});

S2Data.video("8c", {
  scenes: [
    { type: "title", title: "Cosmology", sub: "Red-shift, the Big Bang and the cosmic microwave background.", mark: "z",
      say: ["How did the universe begin? Two key pieces of evidence point to the Big Bang."] },
    { type: "points", title: "Red-shift", items: ["Light from distant galaxies has <b>longer wavelengths</b> than expected", "So galaxies are <b>moving away</b> from us", "More distant galaxies have <b>greater red-shift</b>: moving away faster"],
      say: ["When we look at the spectrum of light from distant galaxies, the dark lines are shifted towards the red end. The wavelengths are longer.", "That's the Doppler effect: the galaxies are moving away from us.", "And the further away a galaxy is, the bigger its red-shift, so the faster it's moving away. The universe is expanding."] },
    { type: "equation", title: "Calculating red-shift", rows: [[{ t: "Δλ ÷ λ₀", k: 1 }, "=", { t: "v ÷ c", k: 1 }]], note: "A 500 nm line seen at 510 nm → v = 0.02 × 3.0 × 10⁸ = 6.0 × 10⁶ m/s", noteStep: 1,
      say: ["The change in wavelength divided by the original wavelength equals the galaxy's speed divided by the speed of light.", "So if a five hundred nanometre line is observed at five hundred and ten, the ratio is point zero two, and the galaxy is moving away at six million metres per second."] },
    { type: "compare", title: "Big Bang vs Steady State", h: ["Big Bang", "Steady State"],
      rows: [["Idea", "Began from a tiny, hot, dense point and expanded", "Always existed; new matter created as it expands"], ["Red-shift", "Explains it ✓", "Explains it ✓"], ["CMB", "Explains it ✓", "Can't explain it ✗"]],
      say: ["The Big Bang theory says the universe started from a tiny, extremely hot and dense point and has been expanding ever since. The Steady State theory says it has always existed.", "Both can explain red-shift.", "But only the Big Bang explains the cosmic microwave background radiation."] },
    { type: "big", text: "CMB", sub: "Microwave radiation from every direction: the leftover glow of the early universe, stretched by expansion",
      say: ["The cosmic microwave background is weak microwave radiation that comes from every direction in space.", "It's the leftover energy from the hot early universe, stretched into microwaves as the universe expanded. That's why the Big Bang is the accepted theory."] },
    { type: "quiz", q: "Which evidence supports the Big Bang but not the Steady State theory?", o: ["Red-shift", "Cosmic microwave background", "Stars exist", "Gravity"], a: 1,
      why: "Only the Big Bang predicts leftover radiation.", say: ["Which piece of evidence supports the Big Bang but not the Steady State theory?"] }
  ]
});

S2Data.video("9a", {
  scenes: [
    { type: "title", title: "Energy and matter extras", sub: "Latent heat, elastic energy and upthrust.", mark: "L",
      say: ["These are extra topics in the Edexcel GCSE course: specific latent heat, elastic potential energy, and upthrust."] },
    { type: "equation", title: "Specific latent heat", rows: [[{ t: "E", k: 1 }, "=", { t: "m", s: 1 }, "×", { t: "L", s: 1 }]], labels: [{ t: "L = energy to change the state of 1 kg, no temperature change", s: 1 }, { t: "fusion: melting · vaporisation: boiling", s: 2 }],
      say: ["To change the state of a substance you need energy, even though the temperature doesn't change.", "Energy equals mass times specific latent heat: the energy needed to change the state of one kilogram without changing its temperature.", "Latent heat of fusion is for melting. Latent heat of vaporisation is for boiling."] },
    { type: "equation", title: "Elastic potential energy", rows: [[{ t: "E", k: 1 }, "=", "½", "×", "k", "×", "x²"]], note: "Also = area under a force–extension graph", noteStep: 1,
      say: ["The energy stored in a stretched spring equals a half times the spring constant times extension squared.", "It's also the area under the force–extension graph, as long as the limit of proportionality isn't passed."] },
    { type: "points", title: "Upthrust", items: ["Pressure increases with depth", "So pressure on the <b>bottom</b> of an object is bigger than on the top", "Resultant upward force = <b>upthrust</b>", "Floats when upthrust = weight"],
      say: ["Upthrust happens because pressure in a fluid increases with depth.", "So the pressure on the bottom of a submerged object is greater than on the top.", "That difference gives an upward force, called upthrust. It equals the weight of fluid displaced.", "An object floats when the upthrust equals its weight. A steel ship floats because its shape displaces a lot of water."] },
    { type: "quiz", q: "Energy to melt 0.5 kg of ice? (L = 334 000 J/kg)", o: ["167 000 J", "668 000 J", "334 J", "167 J"], a: 0,
      why: "E = m × L = 0.5 × 334 000.", say: ["How much energy is needed to melt half a kilogram of ice?"] }
  ]
});

S2Data.video("9b", {
  scenes: [
    { type: "title", title: "Electricity and magnetism extras", sub: "P = I²R, the National Grid, microphones and Earth's field.", mark: "I²R",
      say: ["This video covers the extra electricity and magnetism content in the GCSE course."] },
    { type: "equation", title: "More power equations", rows: [[{ t: "P", k: 1 }, "=", "I²", "×", "R"], [{ t: "P", k: 1, s: 1 }, { t: "=", s: 1 }, { t: "V²", s: 1 }, { t: "÷", s: 1 }, { t: "R", s: 1 }]],
      say: ["Power also equals current squared times resistance.", "And voltage squared divided by resistance. Choose the one that matches the quantities you're given."] },
    { type: "points", title: "Why the Grid uses high voltage", items: ["Power lost in cables = I²R", "Halve the current → <b>quarter</b> the losses", "High voltage → low current for the same power"],
      say: ["The power wasted heating transmission cables is I squared R.", "Because current is squared, halving the current cuts the losses to a quarter.", "Transformers raise the voltage so that the same power can be sent with a much smaller current."] },
    { type: "compare", title: "Motor effect vs generator effect", h: ["Motor effect", "Generator effect"],
      rows: [["Input → output", "Current in field → force/motion", "Motion in field → induced p.d."], ["Devices", "Motors, loudspeakers", "Generators, microphones"]],
      say: ["In the motor effect, a current in a magnetic field produces a force and motion. In the generator effect, motion in a magnetic field induces a potential difference.", "Motors and loudspeakers use the motor effect. Generators and microphones use the generator effect: sound vibrates a coil in a magnetic field, inducing a changing p d."] },
    { type: "points", title: "Earth's magnetic field", items: ["Like a giant bar magnet", "A compass needle lines up with it", "Evidence for Earth's iron core"],
      say: ["The Earth has a magnetic field like a giant bar magnet.", "A compass needle is a tiny magnet that lines up with it.", "This is evidence that Earth's core contains iron."] },
    { type: "quiz", q: "A 3 A current flows through 20 Ω. What power is dissipated?", o: ["60 W", "180 W", "6.7 W", "1200 W"], a: 1,
      why: "P = I²R = 9 × 20.", say: ["Three amps flows through twenty ohms. What power is dissipated?"] }
  ]
});

S2Data.video("9c", {
  scenes: [
    { type: "title", title: "Waves and radiation extras", sub: "Lenses, black body radiation, ultrasound, seismic waves and dose.", mark: "f",
      say: ["The last set of GCSE extras: lenses, black body radiation, ultrasound and seismic waves, and radiation dose."] },
    { type: "compare", title: "Lenses", h: ["Converging (convex)", "Diverging (concave)"],
      rows: [["Parallel rays", "Meet at the principal focus", "Spread out"], ["Image", "Real or virtual", "Always virtual, upright, smaller"], ["Uses", "Magnifying glass, camera", "Correcting short sight"]],
      say: ["A converging lens brings parallel rays together at the principal focus. A diverging lens spreads them out.", "A converging lens can form real or virtual images. A diverging lens always gives a virtual, upright, smaller image.", "Magnification equals image height divided by object height."] },
    { type: "points", title: "Black body radiation", items: ["A perfect black body absorbs all radiation", "All objects emit and absorb radiation", "Hotter → <b>more</b> radiation at <b>shorter</b> wavelengths", "Constant temperature: absorbing and emitting at the same rate"],
      say: ["A perfect black body absorbs all the radiation that hits it, and is also the best emitter.", "All objects emit and absorb radiation all the time.", "The hotter an object, the more radiation it emits, and the shorter the peak wavelength. That's why hot metal glows red, then white.", "An object at a constant temperature is absorbing and emitting at the same rate."] },
    { type: "compare", title: "Ultrasound and seismic waves", h: ["Key fact", "Use"],
      rows: [["Ultrasound", "Above 20 kHz; partly reflects at boundaries", "Pre-natal scans, sonar"], ["P-waves", "Longitudinal; travel through solids and liquids", "Probe Earth's structure"], ["S-waves", "Transverse; can't travel through liquids", "Shadow zone shows the outer core is liquid"]],
      say: ["Ultrasound is sound above twenty kilohertz. It partly reflects at boundaries between tissues, and the echo times build up an image.", "Earthquakes make P waves, which are longitudinal and travel through solids and liquids.", "And S waves, which are transverse and can't travel through liquids. S waves aren't detected on the far side of the Earth, which shows the outer core is liquid."] },
    { type: "big", text: "Dose in sieverts", sub: "Measures the risk of harm from radiation exposure",
      say: ["Radiation dose is measured in sieverts.", "It measures the risk of harm to the body, and depends on the type of radiation, how long you're exposed, and which part of the body."] },
    { type: "quiz", q: "Why can't S-waves pass through the outer core?", o: ["It's solid", "It's liquid, and S-waves are transverse", "It's too hot", "It's magnetic"], a: 1,
      why: "Transverse waves can't travel through liquids.", say: ["Why can't S waves pass through the Earth's outer core?"] }
  ]
});
