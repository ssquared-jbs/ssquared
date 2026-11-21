/* Topic 2 — Electricity (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "2a", group: 2, title: "Mains electricity",
  summary: "Fuses, earthing, double insulation, a.c. and d.c., and electrical power.",
  notes: R`
<h3>Units</h3>
<p>Current: ampere (A). Voltage: volt (V). Resistance: ohm (Ω). Charge: coulomb (C). Energy: joule (J). Power: watt (W). Time: second (s).</p>
<h3>Hazards of electricity</h3>
<p>Frayed cables, long cables, damaged plugs and water near sockets can all cause electric shocks or fires.</p>
<h3>Safety features</h3>
<ul>
<li><b>Fuse</b>: a thin wire in the <b>live</b> wire that melts if the current gets too large, breaking the circuit. Choose the fuse rating just above the normal current.</li>
<li><b>Circuit breaker</b>: an automatic switch that cuts off the current when it is too high. It can be reset.</li>
<li><b>Earth wire</b>: connects a metal case to earth. If the live wire touches the case, a large current flows to earth and blows the fuse, so the case doesn't stay live.</li>
<li><b>Double insulation</b>: the appliance has a plastic case, so there is no exposed metal to become live. It doesn't need an earth wire.</li>
</ul>
<h3>Plug wiring</h3>
<table>
<tr><th>Wire</th><th>Colour</th><th>Job</th></tr>
<tr><td>Live</td><td>Brown</td><td>Carries the alternating voltage (about 230 V in the UK)</td></tr>
<tr><td>Neutral</td><td>Blue</td><td>Completes the circuit (about 0 V)</td></tr>
<tr><td>Earth</td><td>Green and yellow</td><td>Safety wire</td></tr>
</table>
<h3>Heating effect and power</h3>
<p>A current in a resistor transfers energy to thermal energy (heating). This is useful in kettles and heaters, but wasteful in most other devices.</p>
<div class="eq">power = current × voltage &nbsp;&nbsp; P = I × V</div>
<div class="eq">energy transferred = current × voltage × time &nbsp;&nbsp; E = I × V × t</div>
<div class="box box-key"><span class="box-title">Choosing a fuse</span>A 2300 W kettle on 230 V: I = P ÷ V = 2300 ÷ 230 = 10 A. Use a <b>13 A</b> fuse (common sizes: 3 A, 5 A, 13 A).</div>
<h3>a.c. and d.c.</h3>
<ul>
<li><b>Direct current (d.c.)</b> flows in one direction only, e.g. from a cell or battery.</li>
<li><b>Alternating current (a.c.)</b> keeps changing direction. UK mains is 230 V at 50 Hz.</li>
</ul>
`,
  flashcards: [
    ["What does a fuse do?", "Melts if the current is too high, breaking the circuit"],
    ["Which wire is the fuse connected to?", "The live wire"],
    ["How does the earth wire protect you?", "If the live wire touches the metal case, a large current flows to earth and blows the fuse"],
    ["Double insulation", "A plastic outer case so no metal can become live; no earth wire needed"],
    ["Colour of the live wire", "Brown"],
    ["Colour of the neutral wire", "Blue"],
    ["Colour of the earth wire", "Green and yellow"],
    ["Equation for electrical power", "P = I × V"],
    ["Equation for energy transferred", "E = I × V × t"],
    ["a.c. vs d.c.", "a.c. changes direction repeatedly; d.c. flows one way only"],
    ["UK mains supply", "About 230 V a.c. at 50 Hz"]
  ],
  quiz: [
    { q: "A 920 W toaster runs on 230 V. Which fuse should it have?", o: ["5 A", "3 A", "13 A", "1 A"], a: 0, e: "I = 920 ÷ 230 = 4 A, so the next size up is 5 A." },
    { q: "Why don't double-insulated appliances need an earth wire?", o: ["The case is plastic so it can't become live", "They use d.c.", "They have no fuse", "They use low current"], a: 0, e: "" },
    { q: "What is the colour of the neutral wire?", o: ["Blue", "Brown", "Green and yellow", "Red"], a: 0, e: "" },
    { q: "A 2 A current flows through a 12 V lamp for 60 s. How much energy is transferred?", o: ["1440 J", "24 J", "720 J", "6 J"], a: 0, e: "E = IVt = 2 × 12 × 60" },
    { q: "Which current changes direction many times a second?", o: ["Alternating current", "Direct current", "Static current", "Battery current"], a: 0, e: "" },
    { q: "What happens when the live wire touches an earthed metal case?", o: ["A large current flows and the fuse melts", "The appliance works faster", "The neutral wire melts", "Nothing happens"], a: 0, e: "" },
    { q: "What is the power of a device that draws 5 A from a 230 V supply?", o: ["1150 W", "46 W", "235 W", "0.02 W"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Circuits: current, voltage and resistance",
  summary: "Series and parallel circuits, V = IR, I–V graphs, LDRs, thermistors, charge and energy.",
  notes: R`
<h3>Series and parallel</h3>
<table>
<tr><th></th><th>Series</th><th>Parallel</th></tr>
<tr><td>Current</td><td>The same everywhere</td><td>Splits between branches; branch currents add up to the total</td></tr>
<tr><td>Voltage</td><td>Shared between components</td><td>The same across each branch</td></tr>
<tr><td>Total resistance</td><td>R = R<sub>1</sub> + R<sub>2</sub></td><td>Less than the smallest single resistor</td></tr>
<tr><td>If one lamp breaks</td><td>They all go off</td><td>The others stay on (used in house lighting)</td></tr>
</table>
<p>Measure current with an <b>ammeter in series</b>, and voltage with a <b>voltmeter in parallel</b>.</p>
<h3>Current and charge</h3>
<ul>
<li>Current is the rate of flow of charge. In metals the charge carriers are <b>electrons</b>.</li>
<li>Conventional current flows from + to −. Electrons flow the other way.</li>
</ul>
<div class="eq">charge = current × time &nbsp;&nbsp; Q = I × t</div>
<div class="eq">energy transferred = charge × voltage &nbsp;&nbsp; E = Q × V</div>
<p>Voltage is the energy transferred per unit charge: 1 V = 1 J/C.</p>
<h3>Resistance</h3>
<div class="eq">voltage = current × resistance &nbsp;&nbsp; V = I × R</div>
<ul>
<li>Adding resistance reduces the current.</li>
<li><b>Fixed resistor</b> at constant temperature: the I–V graph is a straight line through the origin (current ∝ voltage).</li>
<li><b>Filament lamp</b>: the graph curves. As the filament heats up, its resistance increases.</li>
<li><b>Diode</b>: current flows in one direction only. There is very high resistance in reverse.</li>
<li><b>LDR</b> (light-dependent resistor): resistance <b>decreases</b> as light intensity increases. Used in automatic night lights.</li>
<li><b>Thermistor</b>: resistance <b>decreases</b> as temperature increases. Used in thermostats and fire alarms.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: I–V characteristics</span>Set up the component in series with an ammeter and a variable resistor, with a voltmeter across the component. Change the variable resistor to get a range of readings. Reverse the connections for negative values. Plot current against voltage.</div>
<div class="box box-key"><span class="box-title">Worked example</span>A 6 V battery drives 0.3 A through a resistor. R = V ÷ I = 6 ÷ 0.3 = <b>20 Ω</b>. Charge in 2 minutes: Q = 0.3 × 120 = <b>36 C</b>.</div>
`,
  flashcards: [
    ["Current in a series circuit", "The same everywhere"],
    ["Voltage in a parallel circuit", "The same across each branch"],
    ["Total resistance of resistors in series", "R = R<sub>1</sub> + R<sub>2</sub> + …"],
    ["How is an ammeter connected?", "In series"],
    ["How is a voltmeter connected?", "In parallel across the component"],
    ["Charge equation", "Q = I × t"],
    ["Energy, charge and voltage", "E = Q × V"],
    ["Ohm's law equation", "V = I × R"],
    ["Why does a filament lamp's I–V graph curve?", "The filament heats up, so its resistance increases"],
    ["What does a diode do?", "Lets current flow in one direction only"],
    ["LDR resistance in bright light", "Low"],
    ["Thermistor resistance when hot", "Low"],
    ["Why are house lights wired in parallel?", "Each gets the full voltage and can be switched independently; one failing doesn't affect the others"]
  ],
  quiz: [
    { q: "A 12 V supply drives 2 A through a resistor. What is the resistance?", o: ["6 Ω", "24 Ω", "0.17 Ω", "14 Ω"], a: 0, e: "R = V ÷ I" },
    { q: "Resistors of 4 Ω and 6 Ω are in series. What is the total resistance?", o: ["10 Ω", "2.4 Ω", "24 Ω", "2 Ω"], a: 0, e: "" },
    { q: "A current of 0.5 A flows for 40 s. How much charge flows?", o: ["20 C", "80 C", "0.0125 C", "40.5 C"], a: 0, e: "Q = It" },
    { q: "What happens to the resistance of a thermistor when it gets hotter?", o: ["It decreases", "It increases", "It stays the same", "It becomes infinite"], a: 0, e: "" },
    { q: "Which component lets current flow in one direction only?", o: ["Diode", "LDR", "Thermistor", "Fuse"], a: 0, e: "" },
    { q: "In a parallel circuit the branch currents are 0.2 A and 0.3 A. What is the total current?", o: ["0.5 A", "0.1 A", "0.06 A", "0.25 A"], a: 0, e: "" },
    { q: "How much energy is transferred when 5 C passes through a 9 V battery?", o: ["45 J", "1.8 J", "14 J", "0.56 J"], a: 0, e: "E = QV" },
    { q: "Why does a filament lamp's resistance increase as the current increases?", o: ["The filament gets hotter", "The voltage falls", "Electrons move faster with less resistance", "It becomes a diode"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Electric charge", paper2: true,
  summary: "Static electricity, charging by friction, and its uses and dangers.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Charging by friction</h3>
<ul>
<li>When two insulators are rubbed together, <b>electrons</b> are transferred from one to the other.</li>
<li>The material that <b>gains</b> electrons becomes <b>negatively</b> charged. The one that <b>loses</b> electrons becomes <b>positively</b> charged.</li>
<li>Only electrons move. Positive charges (protons) stay in the nuclei.</li>
<li>Example: rubbing a polythene rod with a cloth gives the rod a negative charge. Rubbing an acetate rod gives it a positive charge.</li>
</ul>
<h3>Forces between charges</h3>
<p><b>Like charges repel</b> and <b>unlike charges attract</b>. A charged rod can also attract small uncharged objects, such as bits of paper.</p>
<div class="box box-prac"><span class="box-title">🔬 Investigating charges</span>Hang a charged rod so it can turn freely. Bring another charged rod close: if they repel, the charges are the same; if they attract, they are opposite.</div>
<h3>Conductors and insulators</h3>
<p>Insulators keep their charge because electrons can't move through them. Conductors, such as metals, let electrons flow, so charge can flow away to earth.</p>
<h3>Dangers</h3>
<ul>
<li>Sparks when refuelling aircraft or tankers. Fuel flowing through pipes builds up charge, and a spark could ignite the fuel vapour. The tanker is connected to earth with a cable.</li>
<li>Lightning, and electric shocks from charged objects.</li>
</ul>
<h3>Uses</h3>
<ul>
<li><b>Inkjet printers</b>: charged ink droplets are steered by charged plates.</li>
<li><b>Photocopiers</b> and laser printers: charged drums attract toner.</li>
<li><b>Electrostatic paint spraying</b>: charged paint droplets repel each other, giving a fine spray, and are attracted to the oppositely charged object, so less paint is wasted and the coat is even.</li>
</ul>
`,
  flashcards: [
    ["What moves when an insulator is charged by friction?", "Electrons"],
    ["How does an object become negatively charged?", "It gains electrons"],
    ["How does an object become positively charged?", "It loses electrons"],
    ["Like charges…", "Repel"],
    ["Unlike charges…", "Attract"],
    ["Why are fuel tankers earthed when refuelling?", "To stop charge building up and causing a spark that could ignite the fuel"],
    ["Uses of electrostatics", "Inkjet printers, photocopiers, paint spraying"]
  ],
  quiz: [
    { q: "A polythene rod is rubbed with a cloth and becomes negative. What happened?", o: ["Electrons moved from the cloth to the rod", "Protons moved from the rod to the cloth", "Electrons moved from the rod to the cloth", "Protons moved to the rod"], a: 0, e: "" },
    { q: "Two charged rods repel. What can you say?", o: ["They have the same type of charge", "They have opposite charges", "One is uncharged", "They are both conductors"], a: 0, e: "" },
    { q: "Why can't a metal rod held in your hand be charged by rubbing?", o: ["Charge flows through the metal and you to earth", "Metals have no electrons", "Metals only gain protons", "Metals are insulators"], a: 0, e: "" },
    { q: "Why does electrostatic paint spraying waste less paint?", o: ["The charged droplets are attracted to the object", "The paint is thicker", "The droplets are uncharged", "It uses magnets"], a: 0, e: "" },
    { q: "Which particle has a negative charge?", o: ["Electron", "Proton", "Neutron", "Nucleus"], a: 0, e: "" }
  ]
});
