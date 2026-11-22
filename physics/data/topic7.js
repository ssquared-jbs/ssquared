/* Topic 7 — Radioactivity and particles (Edexcel IGCSE 4PH1) */

S2Data.add({
  id: "7a", group: 7, title: "Radioactivity",
  summary: "Atoms and isotopes, alpha, beta and gamma radiation, nuclear equations, half-life, uses and dangers.",
  notes: R`
<h3>Atoms and isotopes</h3>
<ul>
<li>A nucleus contains protons and neutrons, with electrons around it.</li>
<li><b>Atomic (proton) number Z</b>: the number of protons. <b>Mass (nucleon) number A</b>: protons + neutrons.</li>
<li><b>Isotopes</b> have the same number of protons but different numbers of neutrons. Unstable isotopes are radioactive.</li>
</ul>
<h3>Types of radiation</h3>
<table>
<tr><th></th><th>Alpha (α)</th><th>Beta (β<sup>−</sup>)</th><th>Gamma (γ)</th></tr>
<tr><td>What it is</td><td>Helium nucleus: 2 protons + 2 neutrons</td><td>Fast electron from the nucleus</td><td>EM wave</td></tr>
<tr><td>Ionising power</td><td>Strongest</td><td>Medium</td><td>Weakest</td></tr>
<tr><td>Stopped by</td><td>Paper or a few cm of air</td><td>A few mm of aluminium</td><td>Thick lead or concrete (reduced, not fully stopped)</td></tr>
<tr><td>Change to nucleus</td><td>A − 4, Z − 2</td><td>A same, Z + 1 (a neutron becomes a proton)</td><td>No change</td></tr>
</table>
<p>Neutrons can also be emitted. <b>Ionising</b> radiation knocks electrons off atoms, creating ions, which is why it damages cells.</p>
<div class="eq">α decay: <sup>226</sup><sub>88</sub>Ra → <sup>222</sup><sub>86</sub>Rn + <sup>4</sup><sub>2</sub>He &nbsp;&nbsp; β decay: <sup>14</sup><sub>6</sub>C → <sup>14</sup><sub>7</sub>N + <sup>0</sup><sub>−1</sub>e</div>
<p>Detect radiation with a <b>Geiger–Müller tube</b> and counter, or with photographic film.</p>
<h3>Background radiation</h3>
<p>Sources: radon gas from rocks, cosmic rays, food and drink, buildings, medical uses, and nuclear accidents or weapons tests. Subtract the background count from measurements.</p>
<h3>Half-life</h3>
<ul>
<li>Radioactive decay is <b>random</b>: you can't predict which nucleus will decay next.</li>
<li><b>Activity</b> is the number of decays per second, measured in becquerels (Bq).</li>
<li><b>Half-life</b>: the time for half the unstable nuclei to decay, or for the activity to halve.</li>
</ul>
<div class="box box-key"><span class="box-title">Worked example</span>Activity 800 Bq, half-life 2 hours. After 6 hours (3 half-lives): 800 → 400 → 200 → <b>100 Bq</b>.</div>
<h3>Uses</h3>
<ul>
<li><b>Smoke alarms</b>: alpha ionises the air. Smoke absorbs the alpha, the current drops and the alarm sounds.</li>
<li><b>Tracers</b> in medicine: gamma or beta emitters with short half-lives, so they don't stay in the body.</li>
<li><b>Radiotherapy</b>: gamma kills cancer cells.</li>
<li><b>Sterilising</b> food and medical equipment with gamma.</li>
<li><b>Thickness control</b> of paper or metal sheets with beta.</li>
<li><b>Carbon dating</b> using carbon-14.</li>
</ul>
<h3>Dangers and safety</h3>
<ul>
<li>Ionising radiation can kill cells or cause mutations, leading to cancer.</li>
<li><b>Contamination</b>: radioactive material gets onto or into the body. Alpha is most dangerous <b>inside</b> the body.</li>
<li><b>Irradiation</b>: being exposed to radiation from outside the body. It doesn't make you radioactive.</li>
<li>Safety: handle sources with tongs, keep exposure time short, keep your distance, use shielding, and store sources in lead boxes.</li>
</ul>
`,
  flashcards: [
    ["Mass (nucleon) number", "Protons + neutrons"],
    ["Isotopes", "Same number of protons, different number of neutrons"],
    ["Alpha particle", "Helium nucleus: 2 protons and 2 neutrons"],
    ["Beta particle", "A fast electron emitted from the nucleus"],
    ["Gamma radiation", "An EM wave from the nucleus"],
    ["Most ionising radiation", "Alpha"],
    ["What stops beta?", "A few mm of aluminium"],
    ["Effect of alpha decay on A and Z", R`\(A - 4, Z - 2\)`],
    ["Effect of beta decay on A and Z", "A unchanged, Z + 1"],
    ["Half-life", "Time for half the unstable nuclei to decay (activity to halve)"],
    ["Unit of activity", "Becquerel (Bq) = 1 decay per second"],
    ["Contamination vs irradiation", "Contamination: radioactive material on/in you. Irradiation: exposed to radiation from outside"],
    ["Main source of background radiation", "Radon gas from rocks"]
  ],
  quiz: [
    { q: "Which radiation is stopped by paper?", o: ["Alpha", "Beta", "Gamma", "X-rays"], a: 0, e: R`Alpha is stopped by paper, beta by a few mm of aluminium, and gamma is reduced by thick lead.` },
    { q: "A source has a half-life of 5 days. What fraction is left after 15 days?", o: ["1/8", "1/3", "1/4", "1/16"], a: 0, e: R`3 half-lives: \(\tfrac12 \times \tfrac12 \times \tfrac12\)` },
    { q: "U-238 (Z = 92) emits an alpha particle. What are the new A and Z?", o: ["234 and 90", "238 and 93", "234 and 92", "236 and 90"], a: 0, e: R`An alpha particle is \({}^4_2\text{He}\): \(A\) falls by 4 to 234 and \(Z\) by 2 to 90.` },
    { q: "What happens in the nucleus during beta decay?", o: ["A neutron changes into a proton and an electron", "A proton is lost", "Two protons and two neutrons leave", "Nothing changes"], a: 0, e: R`The electron leaves as the beta particle, so Z rises by 1 and A stays the same.` },
    { q: "Why are gamma emitters used as medical tracers?", o: ["Gamma passes out of the body and is weakly ionising", "Gamma is strongly ionising", "Gamma is stopped by skin", "Gamma has a long range in air only"], a: 0, e: R`It can be detected outside the body and causes little ionisation inside.` },
    { q: "Which is the biggest source of background radiation in the UK?", o: ["Radon gas", "Nuclear power", "Medical X-rays", "Mobile phones"], a: 0, e: R`Radon gas comes from rocks such as granite.` },
    { q: "Why is alpha most dangerous inside the body?", o: ["It is very ionising and all its energy is absorbed by nearby cells", "It is very penetrating", "It is an EM wave", "It lasts forever"], a: 0, e: R`It can't penetrate skin from outside, but inside it damages the cells around it.` },
    { q: "Which radiation is used to monitor the thickness of paper?", o: ["Beta", "Alpha", "Gamma", "Visible light"], a: 0, e: "Alpha would be stopped completely; gamma would pass straight through." }
  ]
});

S2Data.add({
  id: "7b", group: 7, title: "Fission and fusion", paper2: true,
  summary: "Nuclear fission, chain reactions, nuclear reactors and nuclear fusion in stars.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Nuclear fission</h3>
<ul>
<li>A large, unstable nucleus such as <b>uranium-235</b> absorbs a <b>slow (thermal) neutron</b>.</li>
<li>It becomes unstable and splits into two smaller <b>daughter nuclei</b>, releasing <b>2 or 3 neutrons</b> and a lot of energy (kinetic energy of the products, and gamma radiation).</li>
<li>The daughter nuclei are radioactive.</li>
</ul>
<h3>Chain reactions</h3>
<p>The released neutrons can cause more fissions, which release more neutrons, and so on: a <b>chain reaction</b>. In a reactor it is controlled. In a bomb it is uncontrolled.</p>
<h3>Nuclear reactors</h3>
<table>
<tr><th>Part</th><th>Job</th></tr>
<tr><td>Fuel rods</td><td>Contain uranium-235</td></tr>
<tr><td>Moderator (graphite or water)</td><td>Slows neutrons down so they are more likely to cause fission</td></tr>
<tr><td>Control rods (boron)</td><td>Absorb neutrons to control the rate of fission. Lowered further in to slow the reaction.</td></tr>
<tr><td>Coolant</td><td>Carries heat away to make steam, which drives a turbine and generator</td></tr>
<tr><td>Concrete shield</td><td>Absorbs radiation, protecting workers</td></tr>
</table>
<h3>Nuclear fusion</h3>
<ul>
<li>Two light nuclei (e.g. hydrogen) join to form a heavier nucleus (helium), releasing energy.</li>
<li>Fusion is the energy source of <b>stars</b>.</li>
<li>It needs <b>very high temperatures and pressures</b>, because nuclei are positively charged and repel each other. They must move fast enough to overcome this repulsion.</li>
<li>That's why fusion power stations are so hard to build on Earth.</li>
</ul>
`,
  flashcards: [
    ["Nuclear fission", "A large nucleus splits into two smaller nuclei, releasing neutrons and energy"],
    ["What starts fission of U-235?", "Absorbing a slow (thermal) neutron"],
    ["Chain reaction", "Neutrons from one fission cause further fissions"],
    ["Job of the moderator", "Slows neutrons so they can cause fission"],
    ["Job of the control rods", "Absorb neutrons to control the rate of fission"],
    ["Nuclear fusion", "Light nuclei join to form a heavier nucleus, releasing energy"],
    ["Why does fusion need high temperatures?", "Nuclei must move fast enough to overcome the repulsion between positive charges"],
    ["Where does fusion happen naturally?", "In stars"]
  ],
  quiz: [
    { q: "What do control rods do in a reactor?", o: ["Absorb neutrons", "Slow neutrons down", "Carry heat away", "Contain the fuel"], a: 0, e: R`Fewer free neutrons means fewer fissions, so the reaction is controlled.` },
    { q: "Why is a moderator needed?", o: ["To slow neutrons so they are absorbed by U-235", "To speed up neutrons", "To absorb gamma", "To cool the turbine"], a: 0, e: R`Slow (thermal) neutrons are more likely to be absorbed and cause fission.` },
    { q: "What is fusion?", o: ["Small nuclei joining together", "A large nucleus splitting", "Electrons joining nuclei", "Alpha decay"], a: 0, e: R`Fusion joins light nuclei (e.g. hydrogen into helium), releasing energy.` },
    { q: "Why is fusion difficult on Earth?", o: ["It needs extremely high temperature and pressure", "There is no hydrogen", "It produces too much CO<sub>2</sub>", "It is too slow"], a: 0, e: R`The positive nuclei repel, so they must collide very fast to fuse.` },
    { q: "How many neutrons are typically released when U-235 splits?", o: ["2 or 3", "0", "10", "100"], a: 0, e: R`These neutrons can go on to split more nuclei in a chain reaction.` },
    { q: "What would happen if all the control rods were removed?", o: ["The chain reaction would speed up out of control", "The reactor would stop", "Nothing", "Fusion would start"], a: 0, e: R`Nothing would absorb the spare neutrons, so the number of fissions would grow rapidly.` }
  ]
});
