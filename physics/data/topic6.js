/* Topic 6 — Magnetism and electromagnetism (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "6a", group: 6, title: "Magnetism",
  summary: "Magnetic poles, fields, magnetic materials and induced magnetism.",
  notes: R`
<h3>Magnets</h3>
<ul>
<li>Magnets have a <b>north</b> and a <b>south</b> pole. <b>Like poles repel</b> and <b>unlike poles attract</b>.</li>
<li>Magnetic materials: <b>iron, steel, nickel and cobalt</b>.</li>
<li>A <b>magnetic field</b> is the region where a magnetic material or another magnet feels a force.</li>
</ul>
<h3>Field lines</h3>
<ul>
<li>They go from <b>north to south</b> outside the magnet.</li>
<li>The closer together the lines, the stronger the field (strongest at the poles).</li>
<li>Between opposite poles facing each other, the field is <b>uniform</b>: parallel, evenly spaced lines.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Plotting a field</span>Use a plotting compass: mark where its needle points, move it along, and repeat to build up the field lines. Iron filings sprinkled on paper over a magnet also show the pattern.</div>
<h3>Hard and soft magnetic materials</h3>
<ul>
<li><b>Induced magnetism</b>: a magnetic material placed in a field becomes a magnet itself, and is always attracted.</li>
<li><b>Soft</b> magnetic materials (e.g. iron) magnetise easily but lose it quickly. Used in electromagnet cores and transformers.</li>
<li><b>Hard</b> magnetic materials (e.g. steel) are harder to magnetise but keep it. Used for permanent magnets.</li>
</ul>
`,
  flashcards: [
    ["Like magnetic poles…", "Repel"],
    ["Four magnetic metals", "Iron, steel, nickel, cobalt"],
    ["Direction of field lines", "From north to south"],
    ["Where is a magnet's field strongest?", "At the poles (lines closest together)"],
    ["Uniform field", "Parallel, evenly spaced field lines, e.g. between opposite poles"],
    ["Induced magnetism", "A magnetic material becomes magnetised when placed in a field"],
    ["Soft magnetic material", "Magnetises and demagnetises easily (e.g. iron)"],
    ["Hard magnetic material", "Keeps its magnetism (e.g. steel)"]
  ],
  quiz: [
    { q: "Which metal is magnetic?", o: ["Nickel", "Copper", "Aluminium", "Gold"], a: 0, e: "" },
    { q: "Two north poles are brought together. They…", o: ["Repel", "Attract", "Do nothing", "Become south poles"], a: 0, e: "" },
    { q: "Which material is used for the core of an electromagnet?", o: ["Iron", "Steel", "Copper", "Plastic"], a: 0, e: "Soft iron loses its magnetism when the current is switched off." },
    { q: "How can you show the shape of a magnetic field?", o: ["Plotting compass or iron filings", "Ammeter", "Thermometer", "Voltmeter"], a: 0, e: "" },
    { q: "Field lines outside a bar magnet go…", o: ["From north to south", "From south to north", "In circles around the middle", "Nowhere"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Electromagnetism and the motor effect",
  summary: "Fields around wires and solenoids, electromagnets, the motor effect, motors and loudspeakers.",
  notes: R`
<h3>Magnetic effect of a current</h3>
<ul>
<li>A current in a wire creates a circular magnetic field around it. The <b>right-hand grip rule</b> gives the direction: thumb along the current, fingers curl in the field direction.</li>
<li>A coil of wire (<b>solenoid</b>) has a field like a bar magnet. Inside it, the field is strong and uniform.</li>
<li><b>Electromagnet</b>: a solenoid with an iron core. It is stronger with more current, more turns and an iron core, and can be switched on and off.</li>
</ul>
<h3>The motor effect</h3>
<ul>
<li>A current-carrying wire in a magnetic field feels a force, because the two fields interact.</li>
<li>The force is biggest when the wire is at <b>90°</b> to the field, and zero when parallel.</li>
<li>A bigger current or a stronger field gives a bigger force. Reversing the current or the field reverses the force.</li>
</ul>
<div class="box box-key"><span class="box-title">Fleming's left-hand rule</span><b>F</b>irst finger: <b>F</b>ield (N → S). Se<b>c</b>ond finger: <b>C</b>urrent (+ → −). Thu<b>m</b>b: <b>M</b>otion (force).</div>
<h3>The d.c. motor</h3>
<ul>
<li>A coil sits between magnets. Forces on opposite sides act in opposite directions, so the coil turns.</li>
<li>A <b>split-ring commutator</b> reverses the current every half turn, so the coil keeps spinning the same way.</li>
<li>It turns faster with more current, more turns on the coil, or a stronger magnet.</li>
</ul>
<h3>Loudspeakers</h3>
<p>An a.c. current in a coil, inside a permanent magnet's field, makes the coil and cone vibrate back and forth, producing sound waves.</p>
`,
  flashcards: [
    ["Field around a straight current-carrying wire", "Circles around the wire"],
    ["Solenoid field", "Like a bar magnet; strong and uniform inside"],
    ["How to make an electromagnet stronger", "More current, more turns, iron core"],
    ["Motor effect", "A current-carrying wire in a magnetic field feels a force"],
    ["Fleming's left-hand rule", "First finger = Field, seCond = Current, thuMb = Motion"],
    ["What does a split-ring commutator do?", "Reverses the current every half turn so the motor keeps turning one way"],
    ["When is the motor-effect force zero?", "When the wire is parallel to the field"],
    ["How does a loudspeaker work?", "a.c. in a coil in a magnetic field makes the cone vibrate"]
  ],
  quiz: [
    { q: "In Fleming's left-hand rule, the first finger shows…", o: ["Field", "Current", "Motion", "Voltage"], a: 0, e: "" },
    { q: "Which change would NOT increase the speed of a d.c. motor?", o: ["Reversing the current", "Increasing the current", "Adding more turns", "Using a stronger magnet"], a: 0, e: "Reversing the current changes the direction, not the speed." },
    { q: "Why is a split-ring commutator used?", o: ["To keep the coil rotating in one direction", "To increase the voltage", "To make a.c.", "To cool the motor"], a: 0, e: "" },
    { q: "What shape is the field around a straight wire?", o: ["Circles around the wire", "Straight lines along the wire", "No field", "Like a bar magnet"], a: 0, e: "" },
    { q: "How can you make an electromagnet weaker?", o: ["Reduce the current", "Add more turns", "Add an iron core", "Increase the voltage"], a: 0, e: "" },
    { q: "Which device uses the motor effect to produce sound?", o: ["Loudspeaker", "Microphone", "Transformer", "Generator"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "6c", group: 6, title: "Electromagnetic induction",
  summary: "Inducing a voltage, generators and transformers.",
  notes: R`
<h3>Inducing a voltage</h3>
<p>A voltage is <b>induced</b> in a conductor when it moves through a magnetic field, or when the field around it changes. If the circuit is complete, a current flows.</p>
<ul>
<li>The induced voltage is bigger with faster movement, a stronger field, and more turns on the coil.</li>
<li>Reversing the direction of movement, or the field, reverses the voltage.</li>
<li>No movement means no induced voltage.</li>
</ul>
<h3>Generators</h3>
<p>Rotating a coil in a magnetic field (or a magnet in a coil) induces an <b>alternating</b> voltage. That's how power stations, dynamos and wind turbines generate electricity.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: transformers</span>
<ul>
<li>A transformer has two coils wound on a soft <b>iron core</b>. An <b>alternating</b> current in the primary coil makes a changing magnetic field in the core, which induces an alternating voltage in the secondary coil.</li>
<li>Transformers only work with a.c.</li>
<li><b>Step-up</b>: more turns on the secondary, so a higher output voltage. <b>Step-down</b>: fewer turns on the secondary.</li>
</ul>
<div class="eq">V<sub>p</sub> ÷ V<sub>s</sub> = N<sub>p</sub> ÷ N<sub>s</sub></div>
<div class="eq">For a 100% efficient transformer: V<sub>p</sub> × I<sub>p</sub> = V<sub>s</sub> × I<sub>s</sub></div>
<p><b>Why transmit at high voltage?</b> For the same power, a higher voltage means a <b>lower current</b>, so less energy is wasted heating the cables. Step-up transformers are used at power stations, and step-down transformers near homes.</p></div>
`,
  flashcards: [
    ["How do you induce a voltage?", "Move a conductor through a magnetic field, or change the field around it"],
    ["Three ways to increase the induced voltage", "Move faster, stronger magnet, more turns"],
    ["What type of current does a generator produce?", "Alternating current"],
    ["Why do transformers need a.c.?", "Only a changing magnetic field induces a voltage in the secondary coil"],
    ["Transformer turns equation", "V<sub>p</sub>/V<sub>s</sub> = N<sub>p</sub>/N<sub>s</sub>"],
    ["Transformer power equation (100% efficient)", "V<sub>p</sub>I<sub>p</sub> = V<sub>s</sub>I<sub>s</sub>"],
    ["Why is electricity transmitted at high voltage?", "Lower current, so less energy is lost as heat in the cables"]
  ],
  quiz: [
    { q: "A transformer has 100 primary turns and 2000 secondary turns. The input is 12 V. What is the output?", o: ["240 V", "0.6 V", "12 V", "2400 V"], a: 0, e: "12 × 2000 ÷ 100" },
    { q: "What happens when a magnet is held still inside a coil?", o: ["No voltage is induced", "A large voltage is induced", "A d.c. current flows", "The coil heats up"], a: 0, e: "" },
    { q: "Why is electricity transmitted at very high voltages?", o: ["To reduce the current and energy losses", "To make it travel faster", "To increase the current", "To make it safer at home"], a: 0, e: "" },
    { q: "Which transformer reduces voltage?", o: ["Step-down", "Step-up", "Neither", "Both"], a: 0, e: "" },
    { q: "Which change would increase the voltage induced in a coil?", o: ["Moving the magnet faster", "Using fewer turns", "Using a weaker magnet", "Moving the magnet more slowly"], a: 0, e: "" },
    { q: "A 100% efficient transformer steps 230 V down to 23 V. The primary current is 0.1 A. What is the secondary current?", o: ["1 A", "0.01 A", "10 A", "0.1 A"], a: 0, e: "230 × 0.1 = 23 × I<sub>s</sub>" }
  ]
});
