/* Topic 5 — Solids, liquids and gases (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "5a", group: 5, title: "Density and pressure",
  summary: "Density, pressure on surfaces and pressure in liquids.",
  notes: R`
<h3>Density</h3>
<div class="eq">\(\text{density} = \dfrac{\text{mass}}{\text{volume}} \qquad \rho = \dfrac{m}{V}\)</div>
<p>Units: kg/m<sup>3</sup> or g/cm<sup>3</sup>. Water is 1000 kg/m<sup>3</sup> (1 g/cm<sup>3</sup>). Objects less dense than water float.</p>
<div class="box box-prac"><span class="box-title">🔬 Practical: measuring density</span>
<ul>
<li><b>Regular solid:</b> find the mass on a balance; measure the sides with a ruler and calculate the volume.</li>
<li><b>Irregular solid:</b> lower it into a measuring cylinder (or displacement can) of water. The rise in volume is its volume.</li>
<li><b>Liquid:</b> weigh an empty measuring cylinder, add a known volume of liquid, and weigh again.</li>
</ul></div>
<h3>Pressure</h3>
<div class="eq">\(\text{pressure} = \dfrac{\text{force}}{\text{area}} \qquad p = \dfrac{F}{A}\)</div>
<p>Unit: pascal (Pa), where 1 Pa = 1 N/m<sup>2</sup>. A sharp knife has a small area, so it gives high pressure. Snowshoes have a large area, so they give low pressure.</p>
<h3>Pressure in liquids and gases</h3>
<ul>
<li>Pressure in a fluid acts equally in <b>all directions</b>.</li>
<li>It increases with depth and with the density of the fluid. That's why dams are thicker at the bottom.</li>
</ul>
<div class="eq">\(\text{pressure difference} = \text{height} \times \text{density} \times g \qquad p = h \times \rho \times g\)</div>
<div class="box box-key"><span class="box-title">Worked example</span>The extra pressure 5 m under water: \(p = 5 \times 1000 \times 10\) = <b>50 000 Pa</b>.</div>
`,
  flashcards: [
    ["Density equation", R`\(\rho = \dfrac{m}{V}\)`],
    ["Density of water", R`\(1000\ \text{kg/m}^{3}\) (\(1\ \text{g/cm}^{3}\))`],
    ["How do you find the volume of an irregular solid?", "Displacement: measure the rise in water level"],
    ["Pressure equation", R`\(p = \dfrac{F}{A}\)`],
    ["Unit of pressure", "Pascal (Pa) = N/m<sup>2</sup>"],
    ["Pressure in a liquid equation", R`\(p = h \times \rho \times g\)`],
    ["In which direction does pressure in a fluid act?", "Equally in all directions"],
    ["Why are dams thicker at the bottom?", "Water pressure increases with depth"]
  ],
  quiz: [
    { q: "A 500 g block has a volume of 200 cm³. What is its density?", o: ["2.5 g/cm³", "0.4 g/cm³", "100 000 g/cm³", "300 g/cm³"], a: 0, e: R`\(\rho = \dfrac{m}{V} = \dfrac{500}{200} = 2.5\ \text{g/cm}^3\).` },
    { q: "A 600 N person stands on 0.03 m² of floor. What pressure do they exert?", o: ["20 000 Pa", "18 Pa", "0.00005 Pa", "630 Pa"], a: 0, e: R`\(\dfrac{600}{0.03}\)` },
    { q: "What is the pressure due to 10 m of water? (ρ = 1000 kg/m³, g = 10 N/kg)", o: ["100 000 Pa", "1000 Pa", "10 000 Pa", "100 Pa"], a: 0, e: R`\(p = h\rho g = 10 \times 1000 \times 10 = 100\,000\ \text{Pa}\).` },
    { q: "Why do camels have large flat feet?", o: ["Large area reduces the pressure on the sand", "To increase pressure", "To run faster", "To reduce weight"], a: 0, e: R`\(p = \dfrac FA\): a larger area means lower pressure, so they don't sink.` },
    { q: "Which object would float in water?", o: ["Density 0.8 g/cm³", "Density 1.2 g/cm³", "Density 7.9 g/cm³", "Density 2.7 g/cm³"], a: 0, e: R`Water's density is \(1.0\ \text{g/cm}^3\); anything less dense floats.` },
    { q: "How does the pressure in a liquid change with depth?", o: ["It increases", "It decreases", "It stays the same", "It becomes zero"], a: 0, e: R`There's more liquid above pushing down, so pressure rises with depth.` }
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Change of state and specific heat capacity",
  summary: "Particle models of solids, liquids and gases, heating curves and specific heat capacity.",
  notes: R`
<h3>Particle model</h3>
<ul>
<li><b>Solid:</b> particles are close together in a regular pattern and vibrate about fixed positions.</li>
<li><b>Liquid:</b> particles are close together, randomly arranged, and move past each other.</li>
<li><b>Gas:</b> particles are far apart and move randomly at high speed.</li>
</ul>
<h3>Changing state</h3>
<ul>
<li>Melting, boiling and evaporating need energy to break the forces between particles. Freezing and condensing release energy.</li>
<li>During a change of state the <b>temperature stays constant</b>, even though energy is still being transferred. That's why heating curves have flat sections.</li>
<li>A change of state is a <b>physical</b> change and is reversible.</li>
</ul>
<h3>Internal energy</h3>
<p>Heating a substance increases the energy of its particles. This either raises the temperature or changes the state.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: specific heat capacity</span>
<p>Specific heat capacity is the energy needed to raise the temperature of 1 kg of a substance by 1 °C.</p>
<div class="eq">\(\Delta Q = m \times c \times \Delta T\)</div>
<p>ΔQ in J, m in kg, c in J/kg °C, ΔT in °C. Water has a high specific heat capacity of 4200 J/kg °C.</p>
<p><span class="tag tag-p">Practical</span> <b>Find the specific heat capacity of a material</b>: heat a known mass (e.g. a 1 kg aluminium block) with an electrical heater. Measure the energy supplied with a joulemeter (or E = IVt) and the temperature rise with a thermometer. Wrap the block in insulation to reduce heat loss. Then \(c = \dfrac{\Delta Q}{m \times \Delta T}\).</p></div>
`,
  flashcards: [
    ["Particles in a solid", "Close, regular pattern, vibrate about fixed positions"],
    ["Particles in a gas", "Far apart, random, moving quickly"],
    ["Why is temperature constant during melting?", "Energy is used to break the forces between particles, not to raise the temperature"],
    ["Is a change of state chemical or physical?", "Physical (reversible)"],
    ["Specific heat capacity", "Energy to raise 1 kg of a substance by 1 °C"],
    ["Specific heat capacity equation", R`\(\Delta Q = m \times c \times \Delta T\)`],
    ["Specific heat capacity of water", "4200 J/kg °C"]
  ],
  quiz: [
    { q: "How much energy is needed to heat 2 kg of water by 10 °C? (c = 4200 J/kg °C)", o: ["84 000 J", "8400 J", "840 J", "42 000 J"], a: 0, e: R`\(2 \times 4200 \times 10\)` },
    { q: "What happens to the temperature of ice while it melts?", o: ["It stays at 0 °C", "It rises steadily", "It falls", "It jumps to 100 °C"], a: 0, e: R`During melting, energy breaks bonds instead of raising the temperature.` },
    { q: "In which state do particles vibrate about fixed positions?", o: ["Solid", "Liquid", "Gas", "All of them"], a: 0, e: R`In a solid, particles are held in fixed positions and can only vibrate.` },
    { q: "5000 J raises 0.5 kg of a metal by 10 °C. What is c?", o: ["1000 J/kg °C", "25 000 J/kg °C", "100 J/kg °C", "250 J/kg °C"], a: 0, e: R`\(\dfrac{5000}{0.5 \times 10}\)` },
    { q: "Why is the block insulated in the specific heat capacity practical?", o: ["To reduce heat loss to the surroundings", "To make it heavier", "To stop it melting", "To increase the current"], a: 0, e: R`Lost heat isn't measured, which would make \(c\) come out too high.` },
    { q: "Which change of state releases energy?", o: ["Condensing", "Melting", "Boiling", "Evaporating"], a: 0, e: R`Particles form bonds as a gas condenses, releasing energy.` }
  ]
});

S2Data.add({
  id: "5c", group: 5, title: "Ideal gas molecules",
  summary: "Brownian motion, gas pressure, absolute zero, the Kelvin scale and the gas laws.",
  notes: R`
<h3>Gas molecules and pressure</h3>
<ul>
<li>Gas molecules move randomly at high speed. <b>Brownian motion</b> (smoke particles jiggling randomly under a microscope) is evidence: invisible air molecules hit them unevenly.</li>
<li>Gas pressure is caused by molecules <b>colliding with the walls</b> of the container. Each collision exerts a force.</li>
<li>Heating a gas makes the molecules move faster, so they hit the walls more often and harder, which increases the pressure (if the volume stays fixed).</li>
</ul>
<h3>Absolute zero and the Kelvin scale</h3>
<ul>
<li><b>Absolute zero</b> is −273 °C (0 K): the temperature at which molecules have the least possible kinetic energy.</li>
<li>Convert: K = °C + 273 and °\(C = K - 273\).</li>
<li>The average kinetic energy of gas molecules is proportional to the Kelvin temperature.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: the gas laws</span>
<p>For a fixed mass of gas, with the temperature in <b>kelvin</b>:</p>
<div class="eq">at constant volume: \(\dfrac{p_1}{T_1} = \dfrac{p_2}{T_2}\)</div>
<div class="eq">at constant temperature: \(p_1 V_1 = p_2 V_2\)</div>
<p>Squashing a gas into a smaller volume means more collisions per second with the walls, so the pressure increases.</p></div>
<div class="box box-key"><span class="box-title">Worked example</span>A gas at 100 kPa is heated from 27 °C to 127 °C at constant volume. \(T_{1} = 300\ \text{K}\) and \(T_{2} = 400\ \text{K}\). \(p_{2} = \dfrac{100 \times 400}{300}\) = <b>133 kPa</b>.</div>
`,
  flashcards: [
    ["What causes gas pressure?", "Molecules colliding with the container walls"],
    ["Brownian motion", "Random jiggling of small particles, caused by collisions with invisible gas molecules"],
    ["Absolute zero", "−273 °C, 0 K"],
    ["Convert °C to K", "Add 273"],
    ["Pressure law (constant volume)", "p<sub>1</sub>/T<sub>1</sub> = p<sub>2</sub>/T<sub>2</sub> (T in kelvin)"],
    ["Boyle's law (constant temperature)", R`\(p_{1}V_{1} = p_{2}V_{2}\)`],
    ["Why does heating a sealed gas raise its pressure?", "Molecules move faster, so they hit the walls more often and harder"]
  ],
  quiz: [
    { q: "What is 50 °C in kelvin?", o: ["323 K", "223 K", "50 K", R`\(-223\ \text{K}\)`], a: 0, e: R`Add 273: \(50 + 273 = 323\ \text{K}\).` },
    { q: "A gas at 200 kPa is compressed from 3 m³ to 1 m³ at constant temperature. What is the new pressure?", o: ["600 kPa", "67 kPa", "200 kPa", "400 kPa"], a: 0, e: R`\(p_{1}V_{1} = p_{2}V_{2}\)` },
    { q: "What causes the pressure of a gas?", o: ["Molecules hitting the walls", "Molecules attracting each other", "Gravity only", "Molecules being still"], a: 0, e: R`Each collision with a wall exerts a force; pressure = total force ÷ area.` },
    { q: "What is absolute zero in °C?", o: [R`\(-273\ \text{°C}\)`, "0 °C", R`\(-100\ \text{°C}\)`, "273 °C"], a: 0, e: R`\(0\ \text{K} = -273\ ^\circ\text{C}\): particles have the least possible energy.` },
    { q: "A sealed gas is heated from 300 K to 600 K. Its pressure…", o: ["Doubles", "Halves", "Stays the same", "Quadruples"], a: 0, e: R`At constant volume, \(\dfrac pT\) is constant, so doubling \(T\) (in kelvin) doubles \(p\).` },
    { q: "What does Brownian motion show?", o: ["Gas molecules are moving randomly", "Smoke is a liquid", "Air has no particles", "Gases are dense"], a: 0, e: R`Smoke particles jiggle because they're hit unevenly by fast, randomly moving air molecules.` }
  ]
});
