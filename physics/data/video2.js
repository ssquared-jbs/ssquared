/* Video explainers — Physics Topics 2 and 3. */

S2Data.video("2a", {
  scenes: [
    { type: "title", title: "Mains electricity", sub: "Plugs, safety features, power and energy.", mark: "230 V",
      say: ["Mains electricity is dangerous if it's not handled properly. This video covers wiring, safety devices, and calculating power and energy."] },
    { type: "compare", title: "Three wires in a plug", h: ["Colour", "Job"],
      rows: [["Live", "Brown", "Carries the alternating potential (230 V)"], ["Neutral", "Blue", "Completes the circuit (about 0 V)"], ["Earth", "Green and yellow", "Safety: carries current away if there's a fault"]],
      say: ["The live wire is brown. It carries the alternating potential from the supply, two hundred and thirty volts.", "The neutral wire is blue. It completes the circuit and is at about zero volts.", "The earth wire is green and yellow. It's a safety wire that only carries current if there's a fault."] },
    { type: "flow", title: "How earthing and a fuse protect you", nodes: ["Live wire touches metal case", "Huge current flows to <b>earth</b>", "<b>Fuse melts</b>", "Circuit broken: case is safe"],
      say: ["Imagine a fault: the live wire comes loose and touches the metal case.", "A large current flows through the earth wire to the ground, rather than through you.", "That large current melts the thin wire in the fuse.", "The circuit is broken, so the case can't give you a shock. Circuit breakers do the same job but can be reset."] },
    { type: "equation", title: "Power and energy", rows: [[{ t: "P", k: 1 }, "=", "I", "×", "V"], [{ t: "E", k: 1, s: 1 }, { t: "=", s: 1 }, { t: "I", s: 1 }, { t: "×", s: 1 }, { t: "V", s: 1 }, { t: "×", s: 1 }, { t: "t", s: 1 }]],
      note: "Fuse rating: just above the normal current", noteStep: 2,
      say: ["Power equals current times voltage, measured in watts.", "And the energy transferred equals current times voltage times time, in joules.", "Use the power to choose a fuse. A nine hundred and twenty watt hairdryer on two hundred and thirty volts draws four amps, so it needs a five amp fuse: just above the normal current."] },
    { type: "compare", title: "a.c. vs d.c.", h: ["a.c.", "d.c."],
      rows: [["Direction", "Constantly reverses", "One direction only"], ["Source", "Mains (50 Hz in the UK)", "Batteries, cells"]],
      say: ["Alternating current constantly changes direction. Direct current flows one way only.", "Mains electricity is a c at fifty hertz in the UK. Batteries supply d c."] },
    { type: "quiz", q: "Which wire is the fuse connected to?", o: ["Neutral", "Earth", "Live", "Any of them"], a: 2,
      why: "When it melts, the appliance is cut off from the high voltage.", say: ["Which wire is the fuse connected to?"] }
  ]
});

S2Data.video("2b", {
  scenes: [
    { type: "title", title: "Current, voltage and resistance", sub: "V = IR, series and parallel, and I–V graphs.", mark: "V=IR",
      say: ["This is the core of circuits: current, voltage, resistance, and how they behave in series and parallel."] },
    { type: "points", title: "The key quantities", items: ["<b>Current</b>: rate of flow of charge (A). Q = I × t", "<b>Voltage</b> (p.d.): energy per unit charge (V). E = Q × V", "<b>Resistance</b>: opposes current (Ω). V = I × R"],
      say: ["Current is the rate of flow of charge, measured in amps. Charge equals current times time.", "Voltage, or potential difference, is the energy transferred per unit charge. Energy equals charge times voltage.", "Resistance opposes the current. Voltage equals current times resistance."] },
    { type: "compare", title: "Series vs parallel", h: ["Series", "Parallel"],
      rows: [["Current", "Same everywhere", "Splits between branches"], ["Voltage", "Shared between components", "Same across each branch"], ["Resistance", "Adds up: R = R₁ + R₂", "Total is less than the smallest"]],
      say: ["In series, the current is the same everywhere. In parallel, it splits between the branches.", "In series, the voltage is shared between components. In parallel, each branch gets the full voltage.", "In series, resistances add up. Adding a resistor in parallel actually lowers the total resistance, because there are more paths for the current."] },
    { type: "graph", title: "I–V graphs", x: "Voltage (V)", y: "Current (A)",
      lines: [{ pts: [[0, 0], [0.9, 0.9]], straight: true, s: 0, label: "resistor" }, { pts: [[0, 0], [0.3, 0.45], [0.6, 0.62], [0.9, 0.7]], s: 1, label: "lamp" }, { pts: [[0, 0], [0.45, 0.02], [0.55, 0.12], [0.62, 0.5]], s: 2, label: "diode" }],
      say: ["A fixed resistor at constant temperature gives a straight line through the origin. Current is proportional to voltage.",
            "A filament lamp's line curves. As the current increases, the filament heats up and its resistance increases.",
            "A diode only lets current flow in one direction, and only once the voltage is high enough."] },
    { type: "points", title: "Sensors", items: ["<b>Thermistor</b>: resistance falls as temperature rises → thermostats", "<b>LDR</b>: resistance falls as light increases → automatic night lights"],
      say: ["A thermistor's resistance falls as temperature rises. It's used in thermostats.", "A light dependent resistor's resistance falls as light intensity increases. It's used in automatic night lights."] },
    { type: "quiz", q: "A 12 V supply drives 0.5 A through a resistor. What is its resistance?", o: ["6 Ω", "24 Ω", "12.5 Ω", "0.04 Ω"], a: 1,
      why: "R = V ÷ I = 12 ÷ 0.5.", say: ["Twelve volts drives point five amps through a resistor. What's the resistance?"] }
  ]
});

S2Data.video("2c", {
  scenes: [
    { type: "title", title: "Electric charge", sub: "Static electricity, its dangers and its uses.", mark: "+ −",
      say: ["Rub a balloon on your hair and it sticks to the wall. That's static electricity, and it's all about electrons moving."] },
    { type: "points", title: "Charging by friction", items: ["Rubbing transfers <b>electrons</b>, never protons", "Gains electrons → <b>negative</b>", "Loses electrons → <b>positive</b>", "Like charges repel; unlike charges attract"],
      say: ["When two insulators are rubbed together, electrons are transferred from one to the other. Positive charges can't move, because protons are fixed in the nucleus.", "The object that gains electrons becomes negatively charged.", "The one that loses electrons becomes positively charged.", "Like charges repel and opposite charges attract."] },
    { type: "points", title: "Dangers of static", items: ["Charge builds up when fuel flows through pipes", "A <b>spark</b> could ignite fuel vapour", "Solution: <b>earth</b> the tanker and aircraft with a conducting wire"],
      say: ["When fuel flows quickly through a pipe, friction can build up a charge.", "If it discharges as a spark, it could ignite the fuel vapour and cause an explosion.", "So aircraft and fuel tankers are earthed with a conducting wire, letting the charge flow safely away."] },
    { type: "points", title: "Uses of static", items: ["<b>Paint spraying</b>: charged droplets repel, spreading evenly, and are attracted to the object", "<b>Inkjet printers</b>: charged droplets steered by charged plates", "<b>Dust precipitators</b>: charged smoke particles collected on plates"],
      say: ["In electrostatic paint spraying, the droplets are given the same charge so they repel and spread into a fine mist. The object has the opposite charge, so paint is attracted to it, even behind edges, and less is wasted.", "Inkjet printers charge tiny ink droplets and steer them with charged plates.", "And dust precipitators charge smoke particles so they stick to plates instead of leaving the chimney."] },
    { type: "quiz", q: "A polythene rod becomes negative when rubbed with a cloth. What happened?", o: ["Protons moved to the cloth", "Electrons moved to the rod", "Electrons moved to the cloth", "Neutrons moved"], a: 1,
      why: "The rod gained electrons.", say: ["A polythene rod becomes negatively charged when rubbed. What happened?"] }
  ]
});

S2Data.video("3a", {
  scenes: [
    { type: "title", title: "Properties of waves", sub: "Transverse and longitudinal, and the wave equation.", mark: "v=fλ",
      say: ["Waves transfer energy and information without transferring matter. Here's how to describe them."] },
    { type: "wave", title: "Transverse waves", mode: "transverse", labels: ["amplitude", "wavelength"], ampStep: 1, lamStep: 2, caps: ["Oscillations at right angles to the direction of travel"],
      say: ["In a transverse wave, the oscillations are at right angles to the direction the energy travels. Light and water ripples are transverse.",
            "The amplitude is the maximum displacement from the rest position.",
            "The wavelength is the distance from one point on a wave to the same point on the next, like crest to crest."] },
    { type: "wave", title: "Longitudinal waves", mode: "longitudinal", caps: ["Oscillations parallel to the direction of travel"],
      say: ["In a longitudinal wave, the oscillations are parallel to the direction of travel. You get compressions where particles bunch up, and rarefactions where they spread out. Sound is longitudinal."] },
    { type: "equation", title: "The wave equation", rows: [[{ t: "v", k: 1 }, "=", { t: "f", s: 1 }, "×", { t: "λ", s: 1 }], [{ t: "f", k: 1, s: 2 }, { t: "=", s: 2 }, { t: "1 ÷ T", s: 2 }]],
      labels: [{ t: "f in Hz, λ in m, v in m/s", s: 1 }],
      say: ["The speed of a wave depends on its frequency and wavelength.", "Wave speed equals frequency times wavelength. Frequency is the number of waves per second, in hertz.", "Frequency also equals one over the time period, T."] },
    { type: "calc", title: "Worked example", q: "A sound wave has a frequency of 170 Hz. Sound travels at 340 m/s. Find the wavelength.",
      lines: ["λ = v ÷ f", "λ = 340 ÷ 170", "λ = 2.0 m"],
      say: ["Rearrange to make wavelength the subject: wavelength equals speed divided by frequency.", "Three hundred and forty divided by one hundred and seventy.", "Two metres."] },
    { type: "points", title: "The Doppler effect", items: ["Source moving <b>towards</b> you: waves bunch up → higher frequency", "Source moving <b>away</b>: waves stretch → lower frequency", "e.g. an ambulance siren; red-shift of galaxies"],
      say: ["When a wave source moves towards you, the waves get bunched up, so you detect a shorter wavelength and higher frequency.", "When it moves away, the waves are stretched, giving a longer wavelength and lower frequency.", "That's why a siren changes pitch as it passes, and why light from distant galaxies is red-shifted."] },
    { type: "quiz", q: "A wave has frequency 50 Hz and wavelength 4 m. What's its speed?", o: ["12.5 m/s", "54 m/s", "200 m/s", "0.08 m/s"], a: 2,
      why: "v = f × λ = 50 × 4.", say: ["A wave has a frequency of fifty hertz and wavelength of four metres. What's its speed?"] }
  ]
});

S2Data.video("3b", {
  scenes: [
    { type: "title", title: "The electromagnetic spectrum", sub: "Seven types of wave, their uses and their dangers.", mark: "EM",
      say: ["The electromagnetic spectrum is a family of transverse waves. They all travel at the same speed in a vacuum, three times ten to the eight metres per second."] },
    { type: "flow", title: "In order of increasing frequency", nodes: ["Radio", "Micro-waves", "Infra-red", "Visible", "UV", "X-rays", "Gamma"],
      say: ["Radio waves have the longest wavelength and lowest frequency.", "Then microwaves,", "infrared,", "visible light,", "ultraviolet,", "X-rays,", "and gamma rays, with the highest frequency and the most energy. A mnemonic helps: Raging Martians Invaded Venus Using X-ray Guns."] },
    { type: "compare", title: "Uses", h: ["Use", "Use"],
      rows: [["Radio", "Broadcasting", "Communications"], ["Microwaves", "Cooking", "Satellite communication"], ["Infrared", "Heaters, remote controls", "Thermal imaging"], ["Visible", "Optical fibres", "Photography"], ["UV", "Fluorescent lamps", "Detecting forged banknotes"], ["X-rays", "Medical imaging", "Airport security"], ["Gamma", "Sterilising equipment", "Treating cancer"]],
      say: ["Radio waves are used for broadcasting and communications.", "Microwaves for cooking and satellite communication.", "Infrared for heaters, remote controls and thermal imaging cameras.", "Visible light for optical fibres and photography.", "Ultraviolet for fluorescent lamps and detecting forged banknotes.", "X-rays for medical imaging and airport security.", "Gamma rays for sterilising medical equipment and treating cancer."] },
    { type: "points", title: "Dangers", items: ["<b>Microwaves</b>: internal heating of body tissue", "<b>Infrared</b>: skin burns", "<b>Ultraviolet</b>: damages skin cells, can cause blindness", "<b>X-rays and gamma</b>: ionising, cause mutations and cancer"],
      say: ["Too much exposure is harmful. Microwaves can heat body tissue internally.", "Infrared can burn skin.", "Ultraviolet damages skin cells and can cause blindness.", "X-rays and gamma rays are ionising. They can cause mutations in D N A and lead to cancer."] },
    { type: "quiz", q: "Which EM wave has the shortest wavelength?", o: ["Radio", "Visible", "X-rays", "Gamma"], a: 3,
      why: "Highest frequency means shortest wavelength.", say: ["Which electromagnetic wave has the shortest wavelength?"] }
  ]
});

S2Data.video("3c", {
  scenes: [
    { type: "title", title: "Light and sound", sub: "Reflection, refraction, total internal reflection and sound.", mark: "n",
      say: ["This video covers how light reflects and refracts, total internal reflection, and the physics of sound."] },
    { type: "svg", title: "Refraction",
      svg: "<rect x='150' y='250' width='800' height='220' class='soft' style='opacity:.6'/><text class='txt s' x='170' y='290'>glass</text><text class='txt s' x='170' y='230'>air</text><line x1='550' y1='40' x2='550' y2='470' class='ink' stroke-dasharray='8 8'/><text class='txt s' x='560' y='60'>normal</text><path d='M330 60 L550 250' class='stroke draw' pathLength='1' data-step='0' marker-end='url(#vxb)'/><path d='M550 250 L660 460' class='stroke draw' pathLength='1' data-step='1' marker-end='url(#vxb)' style='stroke:var(--bad)'/><text class='txt b' x='420' y='200' data-step='0'>i</text><text class='txt b' x='585' y='330' data-step='1'>r</text><text class='txt b' x='700' y='380' data-step='1'>slows, bends towards the normal</text>",
      say: ["When light travels from air into glass at an angle, it changes speed.", "It slows down and bends towards the normal. That's refraction. Going from glass into air, it speeds up and bends away from the normal."] },
    { type: "equation", title: "Refractive index", rows: [[{ t: "n", k: 1 }, "=", { t: "sin i", s: 1 }, "÷", { t: "sin r", s: 1 }], [{ t: "sin c", k: 1, s: 2 }, { t: "=", s: 2 }, { t: "1 ÷ n", s: 2 }]],
      say: ["The refractive index, n, tells you how much a material bends light.", "n equals sine of the angle of incidence divided by sine of the angle of refraction.", "And the critical angle, c, is given by sine c equals one over n."] },
    { type: "points", title: "Total internal reflection", items: ["Light going from <b>denser to less dense</b> (glass → air)", "Angle of incidence <b>greater than the critical angle</b>", "All the light reflects back inside", "Used in <b>optical fibres</b> and endoscopes"],
      say: ["Total internal reflection happens when light travels from a denser material into a less dense one, like glass to air,", "and the angle of incidence is bigger than the critical angle.", "Then none of the light escapes. It all reflects back inside.", "Optical fibres use this to carry light signals, and endoscopes use it to see inside the body."] },
    { type: "points", title: "Sound", items: ["Longitudinal; needs a <b>medium</b> (can't cross a vacuum)", "Humans hear <b>20 Hz to 20 000 Hz</b>", "Higher frequency → higher <b>pitch</b>", "Bigger amplitude → <b>louder</b>"],
      say: ["Sound is a longitudinal wave. It needs particles to travel, so it can't cross a vacuum.", "Humans can hear frequencies from twenty hertz to twenty thousand hertz.", "On an oscilloscope, more waves on the screen means a higher frequency, which we hear as a higher pitch.", "Taller waves mean a bigger amplitude, which sounds louder."] },
    { type: "calc", title: "Measuring the speed of sound", q: "A clap echoes off a wall 85 m away. The echo returns after 0.50 s.",
      lines: ["Distance there and back = 2 × 85 = 170 m", "speed = distance ÷ time = 170 ÷ 0.50", "speed = 340 m/s"],
      say: ["Here's a classic method. The sound travels to the wall and back, so the total distance is a hundred and seventy metres.", "Speed equals distance divided by time.", "Three hundred and forty metres per second."] },
    { type: "quiz", q: "Glass has a critical angle of 42°. Light hits the inside surface at 50°. What happens?", o: ["Refracts out", "Total internal reflection", "Passes straight through", "Is absorbed"], a: 1,
      why: "50° is greater than the critical angle.", say: ["Light hits the inside of a glass block at fifty degrees. The critical angle is forty two degrees. What happens?"] }
  ]
});
