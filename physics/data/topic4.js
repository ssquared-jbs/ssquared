/* Topic 4 — Energy resources and energy transfers (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "4a", group: 4, title: "Energy transfers",
  summary: "Energy stores, conservation of energy, efficiency, Sankey diagrams, conduction, convection and radiation.",
  notes: R`
<h3>Energy stores</h3>
<p>Energy is stored as: <b>chemical</b>, <b>kinetic</b>, <b>gravitational potential</b>, <b>elastic potential</b>, <b>thermal</b>, <b>magnetic</b>, <b>electrostatic</b> and <b>nuclear</b>.</p>
<p>It is transferred between stores by <b>mechanical work</b> (forces), <b>electrical work</b> (currents), <b>heating</b> and <b>radiation</b> (light and sound).</p>
<h3>Conservation of energy</h3>
<p>Energy can't be created or destroyed. It can only be transferred from one store to another. The total stays the same, but some is usually <b>wasted</b>, often as thermal energy in the surroundings.</p>
<div class="eq">\(\text{efficiency} = \dfrac{\text{useful energy output}}{\text{total energy input}} \times 100\%\)</div>
<p>Efficiency can also be calculated with power. No device is 100% efficient.</p>
<h3>Sankey diagrams</h3>
<p>Arrow widths are drawn to scale. The input is on the left, the useful output goes straight on, and the wasted energy bends away. The useful and wasted widths add up to the input.</p>
<h3>Thermal energy transfer</h3>
<table>
<tr><th>Method</th><th>How it works</th><th>Where</th></tr>
<tr><td>Conduction</td><td>Vibrating particles pass energy to neighbouring particles. In metals, free electrons also carry energy, so metals are good conductors.</td><td>Mainly solids</td></tr>
<tr><td>Convection</td><td>Heated fluid expands, becomes less dense and rises. Cooler, denser fluid sinks to replace it, forming a convection current.</td><td>Liquids and gases</td></tr>
<tr><td>Radiation</td><td>Infrared waves. Needs no medium, so it works through a vacuum.</td><td>Anywhere</td></tr>
</table>
<ul>
<li>Dark, matt surfaces are good absorbers and emitters of infrared. Light, shiny surfaces are poor absorbers and emitters (good reflectors).</li>
<li>Reduce heat loss with insulation that traps air (a poor conductor), loft insulation, cavity walls, double glazing and draught excluders.</li>
<li>A vacuum flask has a vacuum (stopping conduction and convection), silvered walls (reducing radiation) and a stopper (reducing convection and evaporation).</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: properties of surfaces and infrared</span>Fill cans with different surfaces with the same volume of hot water. Record the temperature drop over time. A dull black can cools fastest because it is the best emitter.</div>
`,
  flashcards: [
    ["Conservation of energy", "Energy can't be created or destroyed, only transferred between stores"],
    ["Efficiency equation", "useful energy output ÷ total energy input × 100%"],
    ["Where does wasted energy usually go?", "Thermal energy store of the surroundings"],
    ["What does a Sankey diagram show?", "Energy transfers, with arrow widths to scale"],
    ["Conduction", "Energy passed between vibrating particles (and free electrons in metals)"],
    ["Convection", "Warm fluid rises as it is less dense; cool fluid sinks, forming a current"],
    ["Radiation (thermal)", "Transfer by infrared waves; works through a vacuum"],
    ["Best emitter and absorber of infrared", "Dull, matt black surfaces"],
    ["Why are trapped-air materials good insulators?", "Air is a poor conductor and can't convect when trapped"]
  ],
  quiz: [
    { q: "A motor uses 500 J and gives 350 J of useful kinetic energy. What is its efficiency?", o: ["70%", "30%", "1.4%", "143%"], a: 0, e: R`\(\dfrac{350}{500 \times 100}\)` },
    { q: "How does energy travel through a vacuum?", o: ["Radiation", "Conduction", "Convection", "It can't"], a: 0, e: R`Conduction and convection need particles; infrared radiation doesn't.` },
    { q: "Why does warm air rise?", o: ["It expands and becomes less dense", "It becomes heavier", "Particles stop moving", "It contracts"], a: 0, e: R`Warm air expands, so its density falls and denser cool air sinks below it.` },
    { q: "Which surface emits infrared best?", o: ["Matt black", "Shiny silver", "Gloss white", "Shiny white"], a: 0, e: R`Matt black surfaces are the best emitters and absorbers of infrared.` },
    { q: "Why are metals good conductors of heat?", o: ["They have free electrons that carry energy", "They have no particles", "They are dense", "They convect"], a: 0, e: R`Free electrons move through the metal and carry energy quickly.` },
    { q: "In a vacuum flask, what does the vacuum prevent?", o: ["Conduction and convection", "Radiation only", "Evaporation only", "All heat transfer"], a: 0, e: R`Both need particles; the vacuum has none.` },
    { q: "A light bulb takes in 60 J and gives out 6 J of light. How much energy is wasted?", o: ["54 J", "66 J", "10 J", "6 J"], a: 0, e: R`Wasted energy \(= 60 - 6 = 54\ \text{J}\).` }
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Work and power",
  summary: "Work done, gravitational potential energy, kinetic energy and power.",
  notes: R`
<h3>Work</h3>
<div class="eq">\(\text{work done} = \text{force} \times \text{distance moved in the direction of the force} \qquad W = F \times d\)</div>
<p>Work done = energy transferred. Units: joules (J). 1 J = 1 N m.</p>
<h3>Gravitational potential energy</h3>
<div class="eq">\(\text{GPE} = \text{mass} \times g \times \text{height} \qquad \text{GPE} = m \times g \times h\)</div>
<h3>Kinetic energy</h3>
<div class="eq">\(\text{kinetic energy} = \tfrac12 \times \text{mass} \times \text{speed}^2 \qquad \text{KE} = \tfrac12 mv^2\)</div>
<p>Doubling the speed makes the kinetic energy <b>4 times</b> bigger.</p>
<h3>Falling objects</h3>
<p>If there is no air resistance, the GPE lost = the KE gained, so \(mgh = \tfrac12mv^{2}\) and \(v = √\)(2gh).</p>
<div class="box box-key"><span class="box-title">Worked example</span>A 2 kg ball falls 5 m. GPE lost = 2 × 10 × 5 = 100 J. Speed at the bottom: \(100 = \tfrac12 \times 2 \times v^{2}\), so \(v^{2} = 100\) and v = <b>10 m/s</b>.</div>
<h3>Power</h3>
<div class="eq">\(\text{power} = \dfrac{\text{work done}}{\text{time taken}} \qquad P = \dfrac{W}{t}\)</div>
<p>Power is the rate of transferring energy. Unit: watt (W). 1 W = 1 J/s.</p>
`,
  flashcards: [
    ["Work done equation", R`\(W = F \times d\)`],
    ["Unit of work and energy", "Joule (J)"],
    ["GPE equation", R`\(\text{GPE} = m \times g \times h\)`],
    ["Kinetic energy equation", R`\(\text{KE} = \tfrac12 m v^{2}\)`],
    ["What happens to KE if speed doubles?", "It is 4 times bigger"],
    ["Power equation", R`\(P = \dfrac{W}{t}\)`],
    ["1 watt", "1 joule per second"],
    ["Falling object energy change (no air resistance)", "GPE lost = KE gained"]
  ],
  quiz: [
    { q: "A 50 N force pushes a box 4 m. How much work is done?", o: ["200 J", "12.5 J", "54 J", "46 J"], a: 0, e: R`\(W = Fd = 50 \times 4 = 200\ \text{J}\).` },
    { q: "What is the GPE gained by a 60 kg climber rising 10 m? (g = 10 N/kg)", o: ["6000 J", "600 J", "70 J", "60 000 J"], a: 0, e: R`\(\text{GPE} = mgh = 60 \times 10 \times 10 = 6000\ \text{J}\).` },
    { q: "What is the KE of a 2 kg object moving at 3 m/s?", o: ["9 J", "6 J", "18 J", "3 J"], a: 0, e: R`\(\tfrac12 \times 2 \times 9\)` },
    { q: "A motor does 3000 J of work in 10 s. What is its power?", o: ["300 W", "30 000 W", "30 W", "3010 W"], a: 0, e: R`\(P = \dfrac{W}{t} = \dfrac{3000}{10} = 300\ \text{W}\).` },
    { q: "A car doubles its speed. Its kinetic energy…", o: ["Quadruples", "Doubles", "Halves", "Stays the same"], a: 0, e: R`\(\text{KE} = \tfrac12 mv^2\), so doubling \(v\) multiplies KE by \(2^2 = 4\).` },
    { q: "A ball is dropped from 20 m. How fast is it going just before it lands (no air resistance, g = 10 N/kg)?", o: ["20 m/s", "200 m/s", "14 m/s", "400 m/s"], a: 0, e: R`\(v = \sqrt{(2 \times 10 \times 20) = √400\)` },
    { q: "Which unit is the same as a joule?", o: ["N m", "N/m", "W/s", "kg m/s"], a: 0, e: R`Work = force × distance, so \(1\ \text{J} = 1\ \text{N m}\).` }
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Energy resources and electricity generation",
  summary: "Renewable and non-renewable resources, how power stations work, and their advantages and disadvantages.",
  notes: R`
<h3>Generating electricity in a power station</h3>
<ol>
<li>A fuel (coal, oil, gas or nuclear) heats water to make steam.</li>
<li>The steam turns a turbine.</li>
<li>The turbine turns a generator, which produces electricity.</li>
</ol>
<p>Wind, hydroelectric, tidal and wave power turn the turbine directly, without steam.</p>
<h3>Comparing resources</h3>
<table>
<tr><th>Resource</th><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>Fossil fuels (coal, oil, gas)</td><td>Reliable, high output, quick to start (gas)</td><td>Non-renewable; release CO<sub>2</sub> (climate change); coal and oil release SO<sub>2</sub> (acid rain)</td></tr>
<tr><td>Nuclear</td><td>No CO<sub>2</sub> when running; reliable; lots of energy from little fuel</td><td>Radioactive waste; risk of accidents; expensive to build and decommission</td></tr>
<tr><td>Wind</td><td>Renewable, no fuel cost, no CO<sub>2</sub> when running</td><td>Unreliable (needs wind); visual and noise impact</td></tr>
<tr><td>Hydroelectric</td><td>Renewable, reliable, can respond quickly to demand</td><td>Floods valleys, destroying habitats; few suitable sites</td></tr>
<tr><td>Tidal</td><td>Renewable, predictable</td><td>Expensive; affects estuary habitats and shipping</td></tr>
<tr><td>Wave</td><td>Renewable</td><td>Unreliable; can be damaged by storms</td></tr>
<tr><td>Solar</td><td>Renewable, no CO<sub>2</sub> when running, works in remote places</td><td>Only works in daylight; low output per area</td></tr>
<tr><td>Geothermal</td><td>Renewable and reliable</td><td>Only possible in a few places</td></tr>
</table>
<p><b>Renewable</b> resources will not run out. <b>Non-renewable</b> ones will.</p>
`,
  flashcards: [
    ["How does a fossil-fuel power station generate electricity?", "Burning fuel → steam → turbine → generator"],
    ["Renewable resource", "One that will not run out (e.g. wind, solar)"],
    ["Main disadvantage of fossil fuels", "Non-renewable and release CO<sub>2</sub> (climate change)"],
    ["Main disadvantage of nuclear power", "Radioactive waste and risk of accidents"],
    ["Main disadvantage of wind power", "Unreliable: only works when it is windy"],
    ["Advantage of hydroelectric power", "Reliable and can respond quickly to changes in demand"],
    ["Which resources don't use steam to turn the turbine?", "Wind, hydroelectric, tidal and wave"]
  ],
  quiz: [
    { q: "What turns the generator in a coal-fired power station?", o: ["A turbine driven by steam", "Wind", "The coal directly", "Water falling"], a: 0, e: R`Burning fuel boils water; steam turns the turbine, which turns the generator.` },
    { q: "Which resource is non-renewable?", o: ["Natural gas", "Solar", "Wind", "Tidal"], a: 0, e: R`Gas, oil, coal and nuclear fuel will run out.` },
    { q: "Which is a disadvantage of solar cells?", o: ["They don't produce electricity at night", "They release CO<sub>2</sub>", "They produce radioactive waste", "They need fuel"], a: 0, e: R`No sunlight means no output, and it's lower on cloudy days.` },
    { q: "Why is tidal power more reliable than wind power?", o: ["Tides are predictable", "Tides are stronger", "It works in deserts", "It uses steam"], a: 0, e: R`Tide times are known years ahead; wind is variable.` },
    { q: "Which pollutant from burning coal causes acid rain?", o: ["Sulfur dioxide", "Carbon dioxide", "Water vapour", "Nitrogen"], a: 0, e: R`Sulfur dioxide dissolves in rain to make it acidic.` },
    { q: "Which resource floods valleys?", o: ["Hydroelectric", "Wind", "Solar", "Nuclear"], a: 0, e: R`A dam stores water in a reservoir, flooding the land behind it.` }
  ]
});
