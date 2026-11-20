/* Video explainers — Physics Topics 4 and 5. */

S2Data.video("4a", {
  scenes: [
    { type: "title", title: "Energy transfers", sub: "Energy stores, efficiency, and conduction, convection and radiation.", mark: "J",
      say: ["Energy can't be created or destroyed, only transferred from one store to another. This video covers efficiency and the three ways heat moves."] },
    { type: "points", title: "Energy stores", two: true, items: ["Kinetic", "Gravitational potential", "Chemical", "Elastic potential", "Thermal", "Nuclear", "Magnetic", "Electrostatic"],
      say: ["Energy is held in stores: kinetic,", "gravitational potential,", "chemical,", "elastic potential,", "thermal,", "nuclear,", "magnetic,", "and electrostatic. It's transferred between them by forces, heating, electric currents and waves."] },
    { type: "equation", title: "Efficiency", rows: [[{ t: "efficiency", k: 1 }, "=", { t: "useful energy output", s: 1 }, "÷", { t: "total energy input", s: 1 }]],
      note: "A lamp: 100 J in, 20 J of light out → 20% efficient. The other 80 J is dissipated as heat.", noteStep: 2,
      say: ["No device is perfect. Some energy is always wasted, usually as heat.", "Efficiency equals useful energy output divided by total energy input. Multiply by a hundred for a percentage.", "So a lamp that gives out twenty joules of light from a hundred joules of electricity is twenty percent efficient. Sankey diagrams show this, with arrow widths in proportion to the energy."] },
    { type: "compare", title: "Three ways heat moves", h: ["How", "Happens in"],
      rows: [["Conduction", "Vibrating particles pass energy to neighbours", "Solids, especially metals"], ["Convection", "Warm fluid expands, becomes less dense and rises", "Liquids and gases"], ["Radiation", "Infrared waves; no particles needed", "Anywhere, even a vacuum"]],
      say: ["In conduction, particles vibrate more and pass energy to their neighbours. Metals are best, because their free electrons carry energy too.", "In convection, a heated fluid expands, becomes less dense and rises. Cooler fluid sinks to replace it, setting up a convection current.", "Radiation is infrared waves. It needs no particles, so it can cross a vacuum."] },
    { type: "points", title: "Surfaces and radiation", items: ["<b>Matt black</b>: best absorber and emitter", "<b>Shiny silver</b>: best reflector, worst emitter", "Vacuum flask: vacuum stops conduction and convection; silvering reduces radiation"],
      say: ["Matt black surfaces are the best absorbers and emitters of infrared.", "Shiny silver surfaces are the best reflectors and the worst emitters.", "A vacuum flask uses all of this. The vacuum stops conduction and convection, and silvered walls reduce radiation."] },
    { type: "quiz", q: "A motor uses 500 J and does 300 J of useful work. What's its efficiency?", o: ["40%", "60%", "167%", "80%"], a: 1,
      why: "300 ÷ 500 × 100 = 60%.", say: ["A motor uses five hundred joules and does three hundred joules of useful work. What's its efficiency?"] }
  ]
});

S2Data.video("4b", {
  scenes: [
    { type: "title", title: "Work and power", sub: "Work done, GPE, kinetic energy and power.", mark: "W=Fd",
      say: ["Work, energy and power are linked by a handful of equations. Let's go through them, with an example that combines two."] },
    { type: "equation", title: "Work done", rows: [[{ t: "W", k: 1 }, "=", { t: "F", s: 1 }, "×", { t: "d", s: 1 }]], note: "Work done = energy transferred (J)", noteStep: 2,
      say: ["When a force moves an object, it does work.", "Work done equals force times distance moved in the direction of the force.", "Work done is the same as energy transferred, so it's in joules."] },
    { type: "equation", title: "GPE and kinetic energy", rows: [[{ t: "GPE", k: 1 }, "=", "m", "×", "g", "×", "h"], [{ t: "KE", k: 1, s: 1 }, { t: "=", s: 1 }, { t: "½", s: 1 }, { t: "×", s: 1 }, { t: "m", s: 1 }, { t: "×", s: 1 }, { t: "v²", s: 1 }]],
      say: ["Gravitational potential energy equals mass times g times height.", "Kinetic energy equals a half times mass times velocity squared. Because velocity is squared, doubling the speed quadruples the kinetic energy."] },
    { type: "calc", title: "Falling ball", q: "A 0.50 kg ball is dropped from 5.0 m. Ignore air resistance. Find its speed at the bottom.",
      lines: ["GPE lost = 0.50 × 10 × 5.0 = 25 J", "KE gained = 25 J, so ½ × 0.50 × v² = 25", "v² = 100 → v = 10 m/s"],
      say: ["As it falls, gravitational potential energy turns into kinetic energy. GPE lost is point five times ten times five, twenty five joules.", "That all becomes kinetic energy. So a half times point five times v squared equals twenty five.", "V squared is a hundred, so v is ten metres per second."] },
    { type: "equation", title: "Power", rows: [[{ t: "P", k: 1 }, "=", { t: "W", s: 1 }, "÷", { t: "t", s: 1 }]], labels: [{ t: "1 W = 1 J/s", s: 2 }],
      say: ["Power is the rate of doing work.", "Power equals work done divided by time.", "One watt is one joule per second. A more powerful machine does the same work in less time."] },
    { type: "quiz", q: "A 60 kg student climbs 3 m of stairs in 4 s. What is her power? (g = 10 N/kg)", o: ["45 W", "180 W", "450 W", "720 W"], a: 2,
      why: "Work = 60 × 10 × 3 = 1800 J; 1800 ÷ 4 = 450 W.", say: ["A sixty kilogram student climbs three metres of stairs in four seconds. What's her power?"] }
  ]
});

S2Data.video("4c", {
  scenes: [
    { type: "title", title: "Energy resources", sub: "How electricity is generated, and the pros and cons of each resource.", mark: "kWh",
      say: ["Most of our electricity is made by spinning a turbine and generator. What changes is how we make the turbine spin."] },
    { type: "flow", title: "A thermal power station", nodes: ["Fuel burns or nuclear fission", "Water boils → steam", "Steam turns a <b>turbine</b>", "Turbine turns a <b>generator</b>"],
      say: ["In a thermal power station, fuel is burned, or in a nuclear station, fission releases heat.", "The heat boils water into steam.", "The steam turns a turbine.", "And the turbine turns a generator, which produces electricity."] },
    { type: "compare", title: "Renewable vs non-renewable", h: ["Examples", "Key point"],
      rows: [["Non-renewable", "Coal, oil, gas, nuclear", "Reliable, but will run out"], ["Renewable", "Wind, solar, hydro, tidal, waves, geothermal, biofuel", "Won't run out; some are unreliable"]],
      say: ["Non-renewable resources are coal, oil, gas and nuclear fuel. They're reliable, but they will run out.", "Renewable resources are wind, solar, hydroelectric, tidal, wave, geothermal and biofuels. They won't run out, but some depend on the weather."] },
    { type: "compare", title: "Weighing them up", h: ["For", "Against"],
      rows: [["Fossil fuels", "Reliable, fast to start (gas)", "CO₂ → climate change; SO₂ → acid rain"], ["Nuclear", "No CO₂; lots of energy", "Radioactive waste; slow to start"], ["Wind / solar", "No fuel cost or emissions", "Unreliable; wind farms take up space"], ["Hydroelectric", "Reliable, quick to start", "Floods valleys, destroying habitats"]],
      say: ["Fossil fuels are reliable, and gas stations start quickly. But burning them releases carbon dioxide, causing climate change, and sulfur dioxide, causing acid rain.", "Nuclear produces no carbon dioxide and lots of energy, but leaves radioactive waste and is slow to start.", "Wind and solar have no fuel costs or emissions, but they're unreliable.", "Hydroelectric is reliable and quick to start, but the dam floods valleys and destroys habitats."] },
    { type: "quiz", q: "Which resource is best for meeting a sudden surge in demand?", o: ["Nuclear", "Coal", "Hydroelectric", "Solar"], a: 2,
      why: "Water can be released in seconds.", say: ["Which resource is best for meeting a sudden surge in demand?"] }
  ]
});

S2Data.video("5a", {
  scenes: [
    { type: "title", title: "Density and pressure", sub: "ρ = m/V, measuring density, and pressure in liquids.", mark: "ρ",
      say: ["Density tells you how much mass is packed into a space. Pressure tells you how spread out a force is."] },
    { type: "equation", title: "Density", rows: [[{ t: "ρ", k: 1 }, "=", { t: "m", s: 1 }, "÷", { t: "V", s: 1 }]], labels: [{ t: "kg/m³ or g/cm³", s: 2 }],
      say: ["Density uses the Greek letter rho.", "Density equals mass divided by volume.", "It's measured in kilograms per metre cubed or grams per centimetre cubed. Water is one gram per centimetre cubed."] },
    { type: "flow", title: "Density of an irregular object", nodes: ["Measure <b>mass</b> on a balance", "Lower into a <b>eureka can</b> or measuring cylinder", "Volume = water <b>displaced</b>", "ρ = m ÷ V"],
      say: ["First measure the mass on a balance.", "Then lower it into a displacement can filled to the spout, or a measuring cylinder.", "The volume of water displaced equals the object's volume.", "Divide mass by volume to get the density."] },
    { type: "equation", title: "Pressure", rows: [[{ t: "p", k: 1 }, "=", { t: "F", s: 1 }, "÷", { t: "A", s: 1 }]], note: "Sharp knife: small area → big pressure. Snowshoes: big area → small pressure.", noteStep: 2,
      say: ["Pressure is force per unit area.", "Pressure equals force divided by area, in pascals.", "That's why a sharp knife cuts easily: a small area gives a big pressure. And snowshoes spread your weight over a large area so you don't sink."] },
    { type: "equation", title: "Pressure in liquids", rows: [[{ t: "p", k: 1 }, "=", { t: "h", s: 1 }, "×", { t: "ρ", s: 1 }, "×", { t: "g", s: 1 }]], note: "Increases with depth · acts equally in all directions", noteStep: 2,
      say: ["In a liquid, pressure increases with depth, because there's more liquid above pushing down.", "Pressure difference equals height times density times g.", "Pressure acts equally in all directions. That's why dams are thicker at the bottom."] },
    { type: "quiz", q: "A 540 g block has a volume of 200 cm³. What's its density?", o: ["0.37 g/cm³", "2.7 g/cm³", "108 g/cm³", "740 g/cm³"], a: 1,
      why: "540 ÷ 200 = 2.7 g/cm³.", say: ["A five hundred and forty gram block has a volume of two hundred centimetres cubed. What's its density?"] }
  ]
});

S2Data.video("5b", {
  scenes: [
    { type: "title", title: "Change of state and specific heat capacity", sub: "Particle model, heating curves and ΔQ = mcΔT.", mark: "c",
      say: ["How much energy does it take to heat something up, and why does the temperature stop rising when it melts?"] },
    { type: "particles", title: "Particle model", modes: ["solid", "liquid", "gas"], caps: ["Solid: vibrate in fixed positions", "Liquid: close, but move past each other", "Gas: far apart, fast, random"], n: 36,
      say: ["In a solid, particles are close together in a regular pattern, vibrating about fixed positions.", "In a liquid, they're still close but can move past each other.", "In a gas, they're far apart and move quickly and randomly."] },
    { type: "equation", title: "Specific heat capacity", rows: [[{ t: "ΔQ", k: 1 }, "=", "m", "×", "c", "×", "ΔT"]], labels: [{ t: "c = energy to raise 1 kg by 1 °C", s: 1 }, { t: "water: c = 4200 J/kg °C", s: 2 }],
      say: ["The energy needed to heat something depends on its mass, the material, and the temperature rise. Energy change equals mass times specific heat capacity times temperature change.", "Specific heat capacity is the energy needed to raise one kilogram of a substance by one degree Celsius.", "Water's is high, four thousand two hundred, which is why it's used in radiators."] },
    { type: "calc", title: "Worked example", q: "How much energy heats 2.0 kg of water by 15 °C?", lines: ["ΔQ = m × c × ΔT", "= 2.0 × 4200 × 15", "= 126 000 J"],
      say: ["Write the equation.", "Substitute: two times four thousand two hundred times fifteen.", "One hundred and twenty six thousand joules."] },
    { type: "graph", title: "Heating curve", x: "Time heating", y: "Temperature",
      lines: [{ pts: [[0, 0.05], [0.15, 0.3], [0.38, 0.3], [0.52, 0.65], [0.82, 0.65], [1, 0.92]], straight: true, s: 0 }],
      marks: [{ x: 0.265, y: 0.3, t: "melting", s: 1 }, { x: 0.67, y: 0.65, t: "boiling", s: 1 }],
      say: ["When you heat ice steadily, the temperature rises, then stays flat while it melts, then rises again, then stays flat while it boils.", "During a change of state, the energy breaks bonds between particles instead of raising the temperature."] },
    { type: "flow", title: "Measuring c for a metal block", nodes: ["Weigh the block; insulate it", "Heater + joulemeter; record start temp", "Heat; record final temp", "c = E ÷ (m × ΔT)"],
      say: ["Weigh the block and wrap it in insulation to reduce heat loss.", "Put in an immersion heater and thermometer. Record the starting temperature, and use a joulemeter to measure energy supplied.", "Heat for a set time and record the final temperature.", "Then c equals energy divided by mass times temperature change. Heat lost to the surroundings makes the answer come out too high."] },
    { type: "quiz", q: "Why does temperature stay constant while water boils?", o: ["The heater stops", "Energy breaks bonds between particles", "Water has no heat capacity", "Steam is cold"], a: 1,
      why: "The energy goes into changing state, not into kinetic energy.", say: ["Why does the temperature stay the same while water boils?"] }
  ]
});

S2Data.video("5c", {
  scenes: [
    { type: "title", title: "Ideal gas molecules", sub: "Gas pressure, absolute zero and the gas laws.", mark: "pV",
      say: ["Gas pressure comes from billions of tiny collisions. This video explains how, and how pressure, volume and temperature are linked."] },
    { type: "particles", title: "Where gas pressure comes from", modes: ["gas", "hot"], caps: ["Particles hit the walls", "Hotter: faster, harder, more often"], n: 28, flash: true,
      say: ["Gas particles move randomly at high speed. When they hit the walls of the container they exert a force. Pressure is that force per unit area.", "Heat the gas and the particles move faster. They hit the walls more often and harder, so the pressure goes up."] },
    { type: "big", text: "Absolute zero = −273 °C = 0 K", sub: "Kelvin = Celsius + 273",
      say: ["The colder a gas, the slower its particles. At absolute zero, minus two hundred and seventy three degrees, they'd have the least possible energy.", "The Kelvin scale starts there. To convert, add two hundred and seventy three to the Celsius temperature."] },
    { type: "equation", title: "The gas laws", rows: [[{ t: "p₁ ÷ T₁", k: 1 }, "=", { t: "p₂ ÷ T₂", k: 1 }], [{ t: "p₁V₁", k: 1, s: 1 }, { t: "=", s: 1 }, { t: "p₂V₂", k: 1, s: 1 }]],
      labels: [{ t: "fixed volume, T in kelvin", s: 0 }, { t: "fixed temperature", s: 1 }],
      say: ["At a fixed volume, pressure is proportional to the kelvin temperature. So p one over T one equals p two over T two. Always use kelvin.",
            "At a fixed temperature, pressure times volume stays constant. Squash a gas into half the volume and its pressure doubles, because the particles hit the walls twice as often."] },
    { type: "calc", title: "Worked example", q: "A gas at 100 kPa and 300 K is heated to 450 K at constant volume.", lines: ["p₂ = p₁ × T₂ ÷ T₁", "= 100 × 450 ÷ 300", "= 150 kPa"],
      say: ["Rearrange: p two equals p one times T two over T one.", "A hundred times four fifty divided by three hundred.", "One hundred and fifty kilopascals."] },
    { type: "quiz", q: "Convert 27 °C into kelvin.", o: ["246 K", "273 K", "300 K", "327 K"], a: 2,
      why: "27 + 273 = 300 K.", say: ["Quick one. What's twenty seven degrees Celsius in kelvin?"] }
  ]
});
