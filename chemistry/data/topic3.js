/* Topic 3 — Physical chemistry (Edexcel IGCSE 4CH1) */

CHEM.add({
  id: "3a", group: 3, title: "Energetics",
  summary: "Exothermic and endothermic reactions, calorimetry, ΔH and bond energies.",
  notes: `
<h3>Exothermic and endothermic</h3>
<table>
<tr><th></th><th>Exothermic</th><th>Endothermic</th></tr>
<tr><td>Energy</td><td>Given out to the surroundings</td><td>Taken in from the surroundings</td></tr>
<tr><td>Temperature of surroundings</td><td>Rises</td><td>Falls</td></tr>
<tr><td>ΔH</td><td><b>Negative</b></td><td><b>Positive</b></td></tr>
<tr><td>Examples</td><td>Combustion, neutralisation, displacement, metal + acid</td><td>Thermal decomposition, dissolving ammonium nitrate, photosynthesis</td></tr>
</table>
<p><b>ΔH</b> is the enthalpy change: the heat energy change at constant pressure, in kJ/mol.</p>
<h3>Energy level diagrams</h3>
<ul>
<li><b>Exothermic:</b> the products are <b>lower</b> than the reactants. The downward arrow is labelled ΔH (negative).</li>
<li><b>Endothermic:</b> the products are <b>higher</b> than the reactants.</li>
</ul>
<h3>Calorimetry</h3>
<div class="box box-prac"><span class="box-title">🔬 Practical: measure temperature changes in reactions</span>
Do the reaction in a polystyrene cup with a lid, for insulation. This works for displacement, dissolving, neutralisation and combustion (use a spirit burner heating a copper can of water). Record the starting and highest (or lowest) temperature.</div>
<div class="eq">Q = m × c × ΔT</div>
<ul>
<li>Q = heat energy (J); m = mass of the <b>water or solution</b> (g), where 1 cm<sup>3</sup> ≈ 1 g; c = 4.2 J/g/°C; ΔT = temperature change (°C)</li>
</ul>
<div class="eq">ΔH = −Q ÷ moles &nbsp; (convert J → kJ by ÷ 1000)</div>
<div class="box box-key"><span class="box-title">Worked example</span>50 cm<sup>3</sup> of HCl is mixed with 50 cm<sup>3</sup> of NaOH, and 0.050 mol of water forms. The temperature rises by 6.5 °C.<br>
Q = 100 × 4.2 × 6.5 = 2730 J = 2.73 kJ.<br>ΔH = −2.73 ÷ 0.050 = <b>−54.6 kJ/mol</b></div>
<p>Values are usually less exothermic than the true value because heat is lost to the surroundings and combustion is incomplete.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: bond energies</span>
<ul>
<li><b>Breaking</b> bonds is <b>endothermic</b>, because it takes in energy. <b>Making</b> bonds is <b>exothermic</b>, because it releases energy.</li>
<li>If more energy is released making bonds than is taken in breaking them, the reaction is exothermic.</li>
</ul>
<div class="eq">ΔH = Σ(bonds broken) − Σ(bonds made)</div>
<p>Example: H<sub>2</sub> + Cl<sub>2</sub> → 2HCl, with H–H 436, Cl–Cl 242, H–Cl 431 kJ/mol.<br>Broken = 436 + 242 = 678. Made = 2 × 431 = 862. ΔH = 678 − 862 = <b>−184 kJ/mol</b></p></div>
`,
  flashcards: [
    ["Exothermic reaction", "Gives out heat energy to the surroundings; ΔH is negative"],
    ["Endothermic reaction", "Takes in heat energy from the surroundings; ΔH is positive"],
    ["Q = mcΔT: what is m?", "Mass of the water or solution being heated (g)"],
    ["Specific heat capacity of water", "4.2 J/g/°C"],
    ["Calculating ΔH from Q", "ΔH = −Q ÷ moles (in kJ/mol)"],
    ["Bond breaking: exo or endo?", "Endothermic"],
    ["Bond making: exo or endo?", "Exothermic"],
    ["ΔH from bond energies", "Energy of bonds broken − energy of bonds made"],
    ["Why is the measured ΔH of combustion often less than the data book value?", "Heat lost to surroundings; incomplete combustion"],
    ["Exothermic energy level diagram", "Products lower in energy than reactants"]
  ],
  quiz: [
    { q: "The temperature falls during a reaction. What kind of reaction is it?", o: ["Endothermic", "Exothermic", "Neutralisation", "Combustion"], a: 0, e: "" },
    { q: "What sign does ΔH have for an exothermic reaction?", o: ["Negative", "Positive", "Zero", "It depends"], a: 0, e: "" },
    { q: "50 g of water is heated by 10 °C. What is Q? (c = 4.2 J/g/°C)", o: ["2100 J", "210 J", "500 J", "21 000 J"], a: 0, e: "50 × 4.2 × 10" },
    { q: "Burning 0.01 mol of fuel releases 4.2 kJ. What is ΔH?", o: ["−420 kJ/mol", "+420 kJ/mol", "−42 kJ/mol", "−0.042 kJ/mol"], a: 0, e: "4.2 ÷ 0.01 = 420, and it is exothermic." },
    { q: "Why is breaking bonds endothermic?", o: ["Energy is needed to overcome the attraction between atoms", "Energy is released", "Bonds are weak", "Heat is lost"], a: 0, e: "" },
    { q: "Bonds broken = 2000 kJ, bonds made = 2500 kJ. What is ΔH?", o: ["−500 kJ/mol", "+500 kJ/mol", "+4500 kJ/mol", "−4500 kJ/mol"], a: 0, e: "2000 − 2500" },
    { q: "Why is a polystyrene cup used in calorimetry?", o: ["It is a good insulator and reduces heat loss", "It conducts heat well", "It doesn't react with acid", "It is cheap"], a: 0, e: "" },
    { q: "Which is endothermic?", o: ["Thermal decomposition of calcium carbonate", "Combustion of methane", "Neutralisation", "Magnesium + acid"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "3b", group: 3, title: "Rates of reaction",
  summary: "Measuring rate, factors that affect it, collision theory and catalysts.",
  notes: `
<h3>Measuring rate</h3>
<ul>
<li>Rate = amount of reactant used or product formed ÷ time.</li>
<li>Methods: collect gas in a <b>gas syringe</b>, measure <b>mass loss</b> on a balance as gas escapes, or time how long a <b>precipitate</b> takes to hide a cross.</li>
<li>On a graph of product against time, the <b>steeper</b> the gradient, the <b>faster</b> the rate. The line levels off when a reactant is used up.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practicals</span>
<ul>
<li><b>Effect of surface area</b> on the rate of reaction of <b>marble chips (CaCO<sub>3</sub>) with dilute HCl</b>: compare large chips, small chips and powder, measuring mass loss or volume of CO<sub>2</sub> over time.</li>
<li><b>Effect of concentration</b> (or temperature) on the reaction of <b>sodium thiosulfate with HCl</b>: a yellow sulfur precipitate forms, so time how long until a cross under the flask disappears. Rate ∝ 1/time.</li>
<li><b>Effect of different catalysts</b> on the decomposition of <b>hydrogen peroxide</b> (e.g. MnO<sub>2</sub>): measure the volume of O<sub>2</sub> collected over time.</li>
</ul></div>
<div class="eq">CaCO<sub>3</sub> + 2HCl → CaCl<sub>2</sub> + H<sub>2</sub>O + CO<sub>2</sub> &nbsp;&nbsp; 2H<sub>2</sub>O<sub>2</sub> → 2H<sub>2</sub>O + O<sub>2</sub></div>
<h3>Collision theory</h3>
<p>Particles react only when they <b>collide</b> with at least the <b>activation energy</b>, the minimum energy needed for a reaction. The more frequent these successful collisions, the faster the rate.</p>
<table>
<tr><th>Factor</th><th>Effect</th><th>Explanation</th></tr>
<tr><td>Surface area ↑ (smaller pieces)</td><td>Faster</td><td>More particles exposed, so more <b>frequent</b> collisions</td></tr>
<tr><td>Concentration ↑ (or gas pressure ↑)</td><td>Faster</td><td>More particles in the same volume, so more <b>frequent</b> collisions</td></tr>
<tr><td>Temperature ↑</td><td>Faster</td><td>Particles have more kinetic energy, so they collide more often <b>and</b> a greater proportion of collisions have energy ≥ activation energy</td></tr>
<tr><td>Catalyst</td><td>Faster</td><td>Provides an alternative pathway with a <b>lower activation energy</b></td></tr>
</table>
<h3>Catalysts</h3>
<ul>
<li>A <b>catalyst</b> speeds up a reaction without being used up or chemically changed at the end.</li>
<li>On a reaction profile, the catalysed hump is <b>lower</b>. ΔH stays the same.</li>
</ul>
<div class="box box-tip"><span class="box-title">Exam tip</span>Say "more frequent collisions" or "more collisions <b>per second</b>". "More collisions" on its own doesn't get the mark.</div>
`,
  flashcards: [
    ["Activation energy", "The minimum energy colliding particles need in order to react"],
    ["Catalyst", "A substance that speeds up a reaction without being used up, by providing a pathway with lower activation energy"],
    ["Why does increasing concentration increase rate?", "More particles per unit volume, so more frequent collisions"],
    ["Why does increasing temperature increase rate?", "Particles move faster, so collisions are more frequent and more have energy ≥ activation energy"],
    ["Why does powder react faster than lumps?", "Larger surface area, so more frequent collisions"],
    ["What happens to the sodium thiosulfate + HCl mixture?", "A yellow precipitate of sulfur forms, so the cross disappears"],
    ["Catalyst for decomposition of H<sub>2</sub>O<sub>2</sub>", "Manganese(IV) oxide, MnO<sub>2</sub>"],
    ["What does the gradient of a product–time graph show?", "The rate of reaction"],
    ["Does a catalyst change ΔH?", "No, it only lowers the activation energy"]
  ],
  quiz: [
    { q: "Why do marble chips react faster with HCl when crushed into powder?", o: ["Larger surface area gives more frequent collisions", "Higher activation energy", "Particles have more energy", "The acid is more concentrated"], a: 0, e: "" },
    { q: "How does a catalyst work?", o: ["It provides a pathway with lower activation energy", "It gives particles more energy", "It increases concentration", "It changes ΔH"], a: 0, e: "" },
    { q: "In the thiosulfate experiment, the cross disappears in 40 s. What is the rate (1/t)?", o: ["0.025 s<sup>−1</sup>", "40 s<sup>−1</sup>", "0.4 s<sup>−1</sup>", "2.5 s<sup>−1</sup>"], a: 0, e: "1 ÷ 40 = 0.025" },
    { q: "Why does raising the temperature increase rate the most?", o: ["More collisions have energy ≥ activation energy", "Particles get bigger", "Activation energy decreases", "Concentration increases"], a: 0, e: "" },
    { q: "A mass-loss graph levels off. Why?", o: ["A reactant has been used up", "The catalyst has run out", "The temperature has dropped", "The rate has increased"], a: 0, e: "" },
    { q: "Which change does NOT increase the rate of a reaction between gases?", o: ["Increasing the volume of the container", "Increasing pressure", "Adding a catalyst", "Increasing temperature"], a: 0, e: "A bigger volume means lower concentration." },
    { q: "Which would you measure to follow the decomposition of H<sub>2</sub>O<sub>2</sub>?", o: ["Volume of O<sub>2</sub> collected over time", "Mass of MnO<sub>2</sub>", "Temperature only", "Colour change"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "3c", group: 3, title: "Reversible reactions and equilibria",
  summary: "Reversible reactions, dynamic equilibrium and how conditions shift the position.",
  notes: `
<h3>Reversible reactions</h3>
<p>Some reactions can go both ways. The symbol is <b>⇌</b>.</p>
<div class="eq">CuSO<sub>4</sub>·5H<sub>2</sub>O (blue) ⇌ CuSO<sub>4</sub> (white) + 5H<sub>2</sub>O</div>
<p>Heating hydrated copper(II) sulfate turns it white. Adding water turns it blue again and gives out heat. If the forward reaction is endothermic, the reverse is exothermic by the same amount.</p>
<div class="eq">NH<sub>4</sub>Cl(s) ⇌ NH<sub>3</sub>(g) + HCl(g)</div>
<p>Heat ammonium chloride in a test tube and it decomposes. The gases re-form white solid NH<sub>4</sub>Cl at the cooler top of the tube.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: dynamic equilibrium</span>
<p>In a <b>closed system</b>, a reversible reaction reaches <b>dynamic equilibrium</b>:</p>
<ul>
<li>The rate of the forward reaction = the rate of the backward reaction.</li>
<li>The concentrations of reactants and products stay <b>constant</b>, although they are not necessarily equal.</li>
<li>Both reactions are still happening.</li>
</ul>
<h4>Changing conditions</h4>
<table>
<tr><th>Change</th><th>Equilibrium shifts…</th></tr>
<tr><td>Temperature ↑</td><td>In the <b>endothermic</b> direction</td></tr>
<tr><td>Temperature ↓</td><td>In the <b>exothermic</b> direction</td></tr>
<tr><td>Pressure ↑ (gases)</td><td>Towards the side with <b>fewer moles of gas</b></td></tr>
<tr><td>Pressure ↓</td><td>Towards the side with more moles of gas</td></tr>
<tr><td>Catalyst</td><td><b>No change</b> in position. Equilibrium is reached faster.</td></tr>
</table>
<div class="box box-key"><span class="box-title">Example: the Haber process</span>N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g), ΔH = −92 kJ/mol<br>
<ul>
<li>Higher pressure: 4 mol of gas → 2 mol, so the equilibrium shifts right and the yield of NH<sub>3</sub> increases.</li>
<li>Higher temperature: the endothermic direction is backwards, so the yield decreases, although the rate increases.</li>
<li>Iron catalyst: faster, with no change in yield.</li>
</ul></div></div>
`,
  flashcards: [
    ["Symbol for a reversible reaction", "⇌"],
    ["Heating blue hydrated copper(II) sulfate", "Turns white (anhydrous) as water is lost; reversible by adding water"],
    ["Heating ammonium chloride", "NH<sub>4</sub>Cl ⇌ NH<sub>3</sub> + HCl; white solid reforms in the cooler part of the tube"],
    ["Dynamic equilibrium", "Forward and backward rates are equal; concentrations stay constant (closed system)"],
    ["Effect of increasing temperature on equilibrium", "Shifts in the endothermic direction"],
    ["Effect of increasing pressure on equilibrium", "Shifts towards the side with fewer moles of gas"],
    ["Effect of a catalyst on equilibrium", "No effect on position; equilibrium is reached faster"],
    ["Why must the system be closed for equilibrium?", "So that no reactants or products can escape"]
  ],
  quiz: [
    { q: "At dynamic equilibrium…", o: ["The forward and backward rates are equal", "The reaction has stopped", "The concentrations of reactants and products are equal", "Only the forward reaction happens"], a: 0, e: "" },
    { q: "2SO<sub>2</sub>(g) + O<sub>2</sub>(g) ⇌ 2SO<sub>3</sub>(g). What does increasing pressure do?", o: ["Shifts it right (fewer moles of gas)", "Shifts it left", "No effect", "Stops the reaction"], a: 0, e: "3 mol of gas → 2 mol." },
    { q: "A forward reaction is exothermic. What happens when the temperature is raised?", o: ["Equilibrium shifts left", "Equilibrium shifts right", "No change", "The yield increases"], a: 0, e: "It shifts in the endothermic (backward) direction." },
    { q: "What does a catalyst do to an equilibrium mixture?", o: ["Equilibrium is reached faster, with the same position", "Shifts it right", "Shifts it left", "Increases the yield"], a: 0, e: "" },
    { q: "What do you see when water is added to anhydrous copper(II) sulfate?", o: ["White → blue, and it gets hot", "Blue → white", "No change", "Pink → blue"], a: 0, e: "" },
    { q: "H<sub>2</sub>(g) + I<sub>2</sub>(g) ⇌ 2HI(g). What does changing the pressure do?", o: ["No effect on the position", "Shifts it right", "Shifts it left", "Stops the reaction"], a: 0, e: "There are 2 mol of gas on each side." }
  ]
});
