/* Topic 5 — Edexcel GCSE (1CH0) extras not covered by IGCSE 4CH1 */

CHEM.add({
  id: "5a", group: 5, gcse: true, title: "Quantitative and analytical extras",
  summary: "Atom economy, limiting reactants, deducing equations from masses and flame photometry.",
  notes: R`
<div class="box box-key"><span class="box-title">Why this is here</span>Edexcel GCSE (1CH0) includes these skills. IGCSE (4CH1) students can skip them, but they help with harder calculation questions.</div>
<h3>Atom economy</h3>
<div class="eq">\(\text{atom economy} = \dfrac{M_r \text{ of desired product}}{\text{total } M_r \text{ of all products}} \times 100\)</div>
<p>Use the balanced-equation amounts. A high atom economy means less waste, which is better for sustainability and profit. Reactions with only one product have 100% atom economy.</p>
<div class="box box-key"><span class="box-title">Worked example</span>CaCO<sub>3</sub> → CaO + CO<sub>2</sub>, where CaO is wanted. Atom economy = 56 ÷ (56 + 44) × 100 = <b>56%</b></div>
<p>Choosing a reaction pathway means weighing atom economy, yield, rate, equilibrium position and how useful the by-products are.</p>
<h3>Limiting reactants</h3>
<ul>
<li>The <b>limiting reactant</b> is the one that is used up first. It decides how much product forms.</li>
<li>The other reactant is in <b>excess</b>.</li>
<li>To find it: calculate the moles of each reactant, divide by its number in the equation, and the smaller result is limiting.</li>
</ul>
<h3>Deducing an equation from masses</h3>
<p>Convert each reacting mass to moles, then divide by the smallest to get the ratio. Those numbers are the balancing numbers.</p>
<h3>Concentration in g/dm<sup>3</sup></h3>
<div class="eq">\(\text{concentration (g/dm}^3) = \dfrac{\text{mass of solute (g)}}{\text{volume (dm}^3)}\)</div>
<h3>Flame photometry (instrumental analysis)</h3>
<ul>
<li>A flame photometer measures the <b>wavelengths</b> and intensity of light emitted by metal ions in a flame.</li>
<li>It can identify ions in a <b>mixture</b>, which flame tests can't do because one colour masks another, and it can measure their <b>concentration</b> using a calibration curve.</li>
<li>Instrumental methods are fast, accurate and sensitive, and they work with very small samples.</li>
</ul>
`,
  flashcards: [
    ["Atom economy", "M<sub>r</sub> of desired product ÷ total M<sub>r</sub> of products × 100"],
    ["Why is high atom economy good?", "Less waste, more sustainable, cheaper"],
    ["Limiting reactant", "The reactant that is completely used up and limits the amount of product"],
    ["Concentration in g/dm<sup>3</sup>", "Mass of solute (g) ÷ volume of solution (dm<sup>3</sup>)"],
    ["Advantage of flame photometry over flame tests", "Identifies ions in mixtures and measures their concentration"],
    ["Atom economy of a reaction with one product", "100%"]
  ],
  quiz: [
    { q: "What is the atom economy for making H<sub>2</sub> in CH<sub>4</sub> + H<sub>2</sub>O → CO + 3H<sub>2</sub>? (CO = 28, H<sub>2</sub> = 2)", o: ["17.6%", "6.7%", "50%", "82.4%"], a: 0, e: R`\(\dfrac{6}{34} \times 100 = 17.6\%\)` },
    { q: "4 g of H<sub>2</sub> reacts with 64 g of O<sub>2</sub> (2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O). Which is limiting?", o: ["H<sub>2</sub>", "O<sub>2</sub>", "Neither", "Water"], a: 0, e: "2 mol H<sub>2</sub> ÷ 2 = 1; 2 mol O<sub>2</sub> ÷ 1 = 2, so H<sub>2</sub> runs out first." },
    { q: R`5 g of salt dissolved to make 250 cm<sup>3</sup> of solution. What is the concentration?`, o: [R`20 g/dm<sup>3</sup>`, R`1.25 g/dm<sup>3</sup>`, R`50 g/dm<sup>3</sup>`, R`0.02 g/dm<sup>3</sup>`], a: 0, e: R`\(\dfrac{5}{0.25}\)` },
    { q: "Why use flame photometry instead of a flame test?", o: ["It can analyse mixtures and measure concentration", "It is cheaper", "It doesn't need a flame", "It only works for one ion"], a: 0, e: R`Flame photometry measures emission intensity and can separate the colours from different ions.` },
    { q: "Which reaction has 100% atom economy?", o: ["C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O → C<sub>2</sub>H<sub>5</sub>OH", "CaCO<sub>3</sub> → CaO + CO<sub>2</sub>", "Fermentation of glucose", "Mg + 2HCl → MgCl<sub>2</sub> + H<sub>2</sub>"], a: 0, e: "There is only one product." }
  ]
});

CHEM.add({
  id: "5b", group: 5, gcse: true, title: "Transition metals, alloys and corrosion",
  summary: "Properties of transition metals, common alloys, electroplating and corrosion.",
  notes: R`
<h3>Transition metals</h3>
<p>These are the central block of the Periodic Table, e.g. Fe, Cu, Cr, Ni, Mn.</p>
<p>Compared with Group 1 metals, they have:</p>
<ul>
<li>higher melting points and densities</li>
<li>greater strength and hardness</li>
<li>much lower reactivity</li>
<li><b>coloured compounds</b> (e.g. Cu<sup>2+</sup> blue, Fe<sup>2+</sup> green, Fe<sup>3+</sup> orange-brown)</li>
<li>ions with <b>different charges</b> (Fe<sup>2+</sup>/Fe<sup>3+</sup>)</li>
<li>catalytic activity: iron in the Haber process, nickel in the hydrogenation of oils, V<sub>2</sub>O<sub>5</sub> in the Contact process</li>
</ul>
<h3>Alloys</h3>
<table>
<tr><th>Alloy</th><th>Made of</th><th>Use</th></tr>
<tr><td>Steel</td><td>Iron + carbon (+ other metals)</td><td>Construction, tools</td></tr>
<tr><td>Brass</td><td>Copper + zinc</td><td>Musical instruments, door handles</td></tr>
<tr><td>Bronze</td><td>Copper + tin</td><td>Statues, medals</td></tr>
<tr><td>Magnalium</td><td>Aluminium + magnesium</td><td>Aircraft and car parts (light and strong)</td></tr>
<tr><td>Gold alloys</td><td>Gold + copper/silver/zinc</td><td>Jewellery (24 carat = pure gold; 18 carat = 75% gold)</td></tr>
</table>
<h3>Corrosion</h3>
<ul>
<li>Corrosion is the <b>oxidation</b> of a metal. The more reactive the metal, the faster it corrodes.</li>
<li>Rusting of iron needs both water and oxygen. You can prevent it by excluding them (paint, oil, plastic), by galvanising, or by sacrificial protection.</li>
<li>Aluminium resists corrosion because it forms a <b>protective oxide layer</b>.</li>
</ul>
<h3>Electroplating</h3>
<p>Electroplating uses electrolysis to coat an object with a thin layer of metal. It improves appearance (silver or gold plating) or resistance to corrosion (chromium or tin plating).</p>
<ul>
<li>The object is the <b>cathode</b>.</li>
<li>The plating metal is the <b>anode</b>.</li>
<li>The electrolyte contains ions of the plating metal.</li>
</ul>
`,
  flashcards: [
    ["Four properties of transition metals", "High mp and density, coloured compounds, ions with different charges, catalysts"],
    ["Catalyst in the Haber process", "Iron"],
    ["Brass", "Copper + zinc"],
    ["Bronze", "Copper + tin"],
    ["18-carat gold", "75% gold"],
    ["Corrosion", "Oxidation of a metal"],
    ["In electroplating, the object is the…", "Cathode"],
    ["Why does aluminium resist corrosion?", "A protective layer of aluminium oxide forms"]
  ],
  quiz: [
    { q: "Which is a typical property of transition metals?", o: ["They form coloured compounds", "They have low melting points", "They react vigorously with water", "They are soft"], a: 0, e: R`Transition metals form coloured ions, act as catalysts and have variable oxidation states.` },
    { q: "What is the electrolyte for silver-plating a spoon?", o: ["Silver nitrate solution", "Copper sulfate solution", "Sodium chloride solution", "Dilute sulfuric acid"], a: 0, e: "It must contain Ag<sup>+</sup> ions." },
    { q: "Which alloy is used for aircraft because it is light?", o: ["Magnalium", "Brass", "Bronze", "High-carbon steel"], a: 0, e: R`Magnalium is an alloy of aluminium and magnesium.` },
    { q: "What percentage of gold is in 18-carat gold?", o: ["75%", "18%", "100%", "50%"], a: 0, e: R`\(\dfrac{18}{24}\)` },
    { q: "Corrosion of a metal is…", o: ["Oxidation", "Reduction", "Neutralisation", "Decomposition"], a: 0, e: R`The metal loses electrons when it reacts with oxygen.` },
    { q: "Nickel is used as a catalyst for…", o: ["Hydrogenation of vegetable oils", "The Haber process", "Fermentation", "Cracking"], a: 0, e: R`Nickel catalyses the addition of hydrogen to \(C = C\) bonds, making margarine.` }
  ]
});

CHEM.add({
  id: "5c", group: 5, gcse: true, title: "The Haber process and fertilisers",
  summary: "Making ammonia, compromise conditions, NPK fertilisers and ammonium sulfate.",
  notes: R`
<h3>The Haber process</h3>
<div class="eq">N<sub>2</sub>(g) + 3H<sub>2</sub>(g) ⇌ 2NH<sub>3</sub>(g) &nbsp; ΔH = −92 kJ/mol</div>
<ul>
<li>Raw materials: <b>nitrogen</b> from the air and <b>hydrogen</b> from natural gas (methane).</li>
<li>Conditions: <b>450 °C</b>, <b>200 atm</b>, <b>iron catalyst</b>.</li>
<li>The gases are cooled so the ammonia <b>liquefies</b> and can be removed. Unreacted N<sub>2</sub> and H<sub>2</sub> are <b>recycled</b>.</li>
</ul>
<h3>Why these are compromise conditions</h3>
<table>
<tr><th>Condition</th><th>Effect on yield</th><th>Effect on rate / cost</th></tr>
<tr><td>Temperature 450 °C</td><td>A lower temperature would give a higher yield (the forward reaction is exothermic)</td><td>Too low would be too slow, so 450 °C is a compromise</td></tr>
<tr><td>Pressure 200 atm</td><td>Higher pressure gives a higher yield (4 → 2 mol of gas)</td><td>Very high pressure is expensive and dangerous</td></tr>
<tr><td>Iron catalyst</td><td>No effect</td><td>Faster rate</td></tr>
</table>
<h3>Fertilisers</h3>
<ul>
<li><b>NPK fertilisers</b> provide nitrogen, phosphorus and potassium to increase crop yields.</li>
<li>Examples: ammonium nitrate (from ammonia + nitric acid) and ammonium sulfate (from ammonia + sulfuric acid).</li>
</ul>
<div class="eq">2NH<sub>3</sub> + H<sub>2</sub>SO<sub>4</sub> → (NH<sub>4</sub>)<sub>2</sub>SO<sub>4</sub></div>
<table>
<tr><th>Making ammonium sulfate</th><th>In the lab</th><th>In industry</th></tr>
<tr><td>Scale</td><td>Small batch, by titration then crystallisation</td><td>Large, continuous</td></tr>
<tr><td>Raw materials</td><td>Bought ready-made solutions</td><td>Made on site from raw materials</td></tr>
</table>
<h3>The Contact process (making sulfuric acid)</h3>
<div class="eq">2SO<sub>2</sub> + O<sub>2</sub> ⇌ 2SO<sub>3</sub> &nbsp; (450 °C, 1–2 atm, V<sub>2</sub>O<sub>5</sub> catalyst)</div>
`,
  flashcards: [
    ["Haber process equation", "N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub> (exothermic)"],
    ["Haber process conditions", "450 °C, 200 atm, iron catalyst"],
    ["Source of hydrogen for the Haber process", "Natural gas (methane)"],
    ["Source of nitrogen for the Haber process", "Air"],
    ["Why 450 °C and not lower?", "A lower temperature gives a better yield but too slow a rate, so 450 °C is a compromise"],
    ["Why not use higher pressure than 200 atm?", "Too expensive and dangerous"],
    ["NPK", "Nitrogen, phosphorus, potassium: the elements in fertilisers"],
    ["How is ammonia removed?", "Cooled so it liquefies; unreacted gases are recycled"],
    ["Contact process catalyst", "Vanadium(V) oxide, V<sub>2</sub>O<sub>5</sub>"]
  ],
  quiz: [
    { q: "What is the catalyst in the Haber process?", o: ["Iron", "Nickel", "Platinum", "V<sub>2</sub>O<sub>5</sub>"], a: 0, e: R`An iron catalyst speeds up the reaction.` },
    { q: "Why does high pressure increase the yield of ammonia?", o: ["Equilibrium shifts to the side with fewer gas moles", "The reaction is endothermic", "It speeds up the catalyst", "It liquefies nitrogen"], a: 0, e: R`N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>: 4 gas moles become 2.` },
    { q: "Why isn't a low temperature used even though it gives a higher yield?", o: ["The rate would be too slow", "Ammonia would decompose", "The catalyst would melt", "It costs more"], a: 0, e: R`450 °C is a compromise between yield and rate.` },
    { q: "Which two substances make ammonium nitrate?", o: ["Ammonia and nitric acid", "Ammonia and sulfuric acid", "Nitrogen and water", "Ammonium chloride and sodium nitrate"], a: 0, e: R`Acid + alkali: NH<sub>3</sub> + HNO<sub>3</sub> → NH<sub>4</sub>NO<sub>3</sub>.` },
    { q: "What happens to unreacted N<sub>2</sub> and H<sub>2</sub>?", o: ["They are recycled", "They are released into the air", "They are burned", "They form a solid"], a: 0, e: R`Recycling raises the overall conversion.` },
    { q: "Which element is NOT one of the main nutrients in NPK fertilisers?", o: ["Sodium", "Nitrogen", "Phosphorus", "Potassium"], a: 0, e: R`NPK stands for nitrogen, phosphorus and potassium.` }
  ]
});

CHEM.add({
  id: "5d", group: 5, gcse: true, title: "Chemical cells and fuel cells",
  summary: "Simple cells, the hydrogen–oxygen fuel cell, and its pros and cons.",
  notes: R`
<h3>Chemical cells</h3>
<ul>
<li>A chemical cell produces a voltage from a chemical reaction, which happens when two different metals are in an electrolyte.</li>
<li>The <b>bigger the difference in reactivity</b> between the metals, the <b>bigger the voltage</b>.</li>
<li>The voltage drops when the reactants are used up. Non-rechargeable batteries (e.g. alkaline cells) then have to be thrown away.</li>
</ul>
<h3>Hydrogen–oxygen fuel cell</h3>
<p>Hydrogen and oxygen are supplied continuously and produce electricity directly. The only product is <b>water</b>.</p>
<div class="eq">Overall: 2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O</div>
<table>
<tr><th>Advantages</th><th>Disadvantages</th></tr>
<tr><td>
<ul><li>Only water is produced, so there is no CO<sub>2</sub> at the point of use</li>
<li>Produces electricity as long as fuel is supplied</li>
<li>Fewer moving parts and quieter than engines</li></ul></td>
<td><ul><li>Hydrogen is a flammable gas, so it is hard to store and transport</li>
<li>Hydrogen is often made from fossil fuels or by electrolysis, which uses energy</li>
<li>Fuel cells are expensive and contain catalysts such as platinum</li></ul></td></tr>
</table>
`,
  flashcards: [
    ["How do you increase the voltage of a simple cell?", "Use metals with a bigger difference in reactivity"],
    ["Product of a hydrogen–oxygen fuel cell", "Water only"],
    ["Overall fuel cell reaction", "2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O"],
    ["Advantage of fuel cells", "No CO<sub>2</sub> at point of use; continuous electricity while fuel is supplied"],
    ["Disadvantage of fuel cells", "Hydrogen is hard to store, and is often made using fossil fuels or electricity"],
    ["Why does a non-rechargeable cell stop working?", "The reactants are used up"]
  ],
  quiz: [
    { q: "What is the only product of a hydrogen–oxygen fuel cell?", o: ["Water", "Carbon dioxide", "Hydrogen peroxide", "Methane"], a: 0, e: R`2H<sub>2</sub> + O<sub>2</sub> → 2H<sub>2</sub>O.` },
    { q: "Which pair of metals gives the largest voltage in a simple cell?", o: ["Magnesium and copper", "Zinc and iron", "Copper and silver", "Iron and copper"], a: 0, e: "They have the biggest difference in reactivity." },
    { q: "What is a disadvantage of hydrogen fuel cells?", o: ["Hydrogen is difficult to store safely", "They produce CO<sub>2</sub>", "They make a lot of noise", "They make toxic waste water"], a: 0, e: R`It's a flammable gas that needs high pressure or very low temperature.` },
    { q: "Why does an alkaline battery eventually go flat?", o: ["The reactants are used up", "It overheats", "The voltage increases", "Water is produced"], a: 0, e: R`A battery stops working when its chemicals have reacted.` }
  ]
});

CHEM.add({
  id: "5e", group: 5, gcse: true, title: "Earth's atmosphere, climate and Group 0",
  summary: "How the atmosphere evolved, greenhouse gases, climate change and the noble gases.",
  notes: R`
<h3>Evolution of the atmosphere</h3>
<ol>
<li>The <b>early atmosphere</b> came from volcanic activity. It was mainly <b>carbon dioxide</b> and <b>water vapour</b>, with little or no oxygen.</li>
<li>As the Earth cooled, water vapour <b>condensed</b> to form the oceans.</li>
<li>CO<sub>2</sub> <b>dissolved in the oceans</b> and was locked up in carbonate rocks and fossil fuels.</li>
<li>Algae and plants evolved and produced <b>oxygen by photosynthesis</b>, so the oxygen level gradually increased.</li>
</ol>
<div class="eq">6CO<sub>2</sub> + 6H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></div>
<p>Test for oxygen: it relights a glowing splint.</p>
<h3>Greenhouse effect and climate change</h3>
<ul>
<li>Greenhouse gases are <b>carbon dioxide, methane and water vapour</b>. They absorb infrared radiation from the Earth's surface and re-emit it, which warms the atmosphere.</li>
<li>Human activities increase them. Burning fossil fuels and deforestation add CO<sub>2</sub>. Cattle farming, rice fields and landfill add CH<sub>4</sub>.</li>
<li>Evidence: global temperatures and CO<sub>2</sub> levels (e.g. from ice cores) have risen together. Correlation isn't proof, and the climate is complex, so models have some uncertainty.</li>
<li>Reducing emissions: use renewable energy, improve energy efficiency, capture and store carbon, and plant trees.</li>
</ul>
<h3>Group 0: the noble gases</h3>
<ul>
<li>Helium, neon, argon, krypton, xenon and radon are colourless, monatomic gases.</li>
<li><b>Inert</b>, because their outer shells are full.</li>
<li>Going <b>down</b> the group: <b>boiling point and density increase</b>.</li>
<li>Uses: <b>helium</b> in balloons and airships (low density, non-flammable); <b>argon</b> in filament lamps and welding (inert, stops the metal reacting); <b>neon</b> in advertising signs.</li>
</ul>
`,
  flashcards: [
    ["Main gases in the early atmosphere", "Carbon dioxide and water vapour (from volcanoes)"],
    ["How were the oceans formed?", "Water vapour condensed as the Earth cooled"],
    ["How did oxygen levels increase?", "Photosynthesis by algae and plants"],
    ["Where did much early CO<sub>2</sub> go?", "Dissolved in oceans, locked into carbonate rocks and fossil fuels"],
    ["Three greenhouse gases", "Carbon dioxide, methane, water vapour"],
    ["Human sources of methane", "Cattle farming, rice fields, landfill"],
    ["Trend in boiling point down Group 0", "Increases"],
    ["Why is argon used in light bulbs?", "It is inert, so it stops the filament reacting"],
    ["Why is helium used in balloons?", "Low density and non-flammable"]
  ],
  quiz: [
    { q: "What did the Earth's early atmosphere mainly contain?", o: ["Carbon dioxide and water vapour", "Nitrogen and oxygen", "Oxygen and argon", "Methane and helium"], a: 0, e: R`These came from volcanoes.` },
    { q: "Which process increased oxygen in the atmosphere?", o: ["Photosynthesis", "Respiration", "Combustion", "Volcanic activity"], a: 0, e: R`Plants and algae took in CO<sub>2</sub> and released O<sub>2</sub>.` },
    { q: "Which is a greenhouse gas?", o: ["Methane", "Nitrogen", "Oxygen", "Argon"], a: 0, e: R`CO<sub>2</sub>, methane and water vapour absorb infrared.` },
    { q: "Why are noble gases unreactive?", o: ["They have full outer electron shells", "They are diatomic", "They are dense", "They are metals"], a: 0, e: R`They don't need to gain or lose electrons.` },
    { q: "Why is helium safer than hydrogen in airships?", o: ["It is non-flammable", "It is denser", "It is cheaper", "It is reactive"], a: 0, e: R`Hydrogen burns explosively in air.` },
    { q: "How does a greenhouse gas warm the Earth?", o: ["It absorbs infrared radiation emitted by the Earth", "It reflects sunlight", "It produces heat by reacting", "It absorbs ultraviolet only"], a: 0, e: R`It absorbs infrared and re-emits it, some back towards the Earth.` }
  ]
});

CHEM.add({
  id: "5f", group: 5, gcse: true, title: "Materials and nanoparticles",
  summary: "Ceramics, composites, polymers and metals compared; nanoparticles; natural polymers.",
  notes: R`
<h3>Comparing materials</h3>
<table>
<tr><th>Material</th><th>Typical properties</th><th>Examples</th></tr>
<tr><td>Ceramics (clay, glass, porcelain)</td><td>Hard, brittle, insulators, high melting point</td><td>Plates, bricks, windows</td></tr>
<tr><td>Polymers</td><td>Flexible, low density, insulators, often low melting point</td><td>Bags, pipes, packaging</td></tr>
<tr><td>Metals</td><td>Strong, malleable, conductors, high density</td><td>Wires, bridges</td></tr>
<tr><td>Composites</td><td>Combine a <b>matrix</b> (binder) and a <b>reinforcement</b> to get the best of both</td><td>Fibreglass, carbon fibre, concrete, plywood</td></tr>
</table>
<p>Choose a material by matching its properties (strength, density, cost, conductivity, corrosion resistance) to the job.</p>
<h3>Nanoparticles</h3>
<ul>
<li>Particles <b>1–100 nm</b> in size (1 nm = 10<sup>−9</sup> m). Larger than atoms but smaller than most other particles.</li>
<li>They have a very <b>high surface area to volume ratio</b>, so their properties differ from the bulk material: they are more reactive and make better catalysts.</li>
<li>Uses: sun creams (better UV protection, no white residue), catalysts, medicine (drug delivery), cosmetics, electronics, and antibacterial silver in clothing.</li>
<li>Risks: they can be breathed in or pass into cells. Long-term effects are unknown, and they could build up in the environment.</li>
</ul>
<div class="box box-key"><span class="box-title">Surface area : volume</span>For a cube of side L, SA:V = 6L<sup>2</sup> : L<sup>3</sup> = 6/L. When the side gets 10× smaller, the ratio gets 10× bigger.</div>
<h3>Natural polymers</h3>
<ul>
<li><b>Starch and cellulose</b>: made from glucose (a sugar) monomers.</li>
<li><b>Proteins</b>: made from amino acid monomers.</li>
<li><b>DNA</b>: made from nucleotide monomers.</li>
</ul>
`,
  flashcards: [
    ["Size range of nanoparticles", "1–100 nm"],
    ["Why do nanoparticles behave differently from bulk material?", "Very high surface area to volume ratio"],
    ["Uses of nanoparticles", "Sun creams, catalysts, drug delivery, electronics, antibacterial fabrics"],
    ["Risks of nanoparticles", "May enter cells or lungs; long-term effects unknown"],
    ["Properties of ceramics", "Hard, brittle, insulators, high melting point"],
    ["Composite", "A material with a matrix and a reinforcement, e.g. fibreglass"],
    ["Monomer of proteins", "Amino acids"],
    ["Monomer of starch", "Glucose (a sugar)"],
    ["SA:V of a cube", "6/L, so it increases as the cube gets smaller"]
  ],
  quiz: [
    { q: "What is the size range of nanoparticles?", o: ["1–100 nm", "100–1000 nm", "0.1–1 nm", "1–100 μm"], a: 0, e: R`1 nm \(= 1 \times 10^{-9}\) m.` },
    { q: "Why are nanoparticles good catalysts?", o: ["They have a high surface area to volume ratio", "They are very heavy", "They are inert", "They are large"], a: 0, e: R`More of their atoms are on the surface, where reactions happen.` },
    { q: "Which is a composite?", o: ["Fibreglass", "Steel", "Poly(ethene)", "Glass"], a: 0, e: R`Glass fibres are set in a polymer matrix.` },
    { q: "Which property is typical of ceramics?", o: ["Brittle", "Malleable", "Good conductor", "Flexible"], a: 0, e: R`Ceramics are hard and heat resistant but brittle.` },
    { q: "A cube's side goes from 10 nm to 1 nm. How does its SA:V ratio change?", o: ["It increases 10 times", "It decreases 10 times", "It increases 100 times", "It stays the same"], a: 0, e: R`SA:V \(\propto \dfrac{1}{\text{side}}\): side divided by 10 means the ratio is multiplied by 10.` },
    { q: "What are the monomers in DNA?", o: ["Nucleotides", "Amino acids", "Glucose", "Ethene"], a: 0, e: R`DNA is a polymer of nucleotides.` }
  ]
});

CHEM.add({
  id: "5g", group: 5, gcse: true, title: "Earth's resources and sustainability",
  summary: "Potable water, life-cycle assessments, recycling, phytomining and bioleaching.",
  notes: R`
<h3>Potable (drinking) water</h3>
<p>Potable water is safe to drink. It is <b>not pure</b>, because it contains dissolved substances, but it has low levels of salts and microbes.</p>
<ol>
<li><b>Sedimentation</b>: large particles settle out.</li>
<li><b>Filtration</b>: the water passes through sand and gravel beds to remove small solids.</li>
<li><b>Chlorination</b>: chlorine kills microbes. Ozone or UV light can also be used.</li>
</ol>
<p><b>Sea water</b> can be made potable by <b>distillation</b> or reverse osmosis, but this needs lots of energy, so it is expensive. In the lab, water for analysis should be <b>distilled or deionised</b>, because tap water contains ions that could interfere.</p>
<h3>Life-cycle assessment (LCA)</h3>
<p>An LCA assesses the environmental impact of a product at each stage:</p>
<ol>
<li>Extracting and processing raw materials</li>
<li>Manufacturing and packaging</li>
<li>Use and operation</li>
<li>Disposal at the end of its life</li>
</ol>
<p>It considers energy, water, resources and waste. Some values, like the effects of pollution, are hard to measure, so LCAs can involve value judgements and can be biased.</p>
<h3>Recycling</h3>
<ul>
<li>Recycling metals, glass and plastics saves raw materials and energy, and reduces waste and mining.</li>
<li>But it needs collection, sorting and transport, which also use energy.</li>
</ul>
<h3>Biological metal extraction (copper)</h3>
<ul>
<li><b>Phytomining:</b> plants grown on low-grade ore absorb copper compounds. The plants are burned and the copper is extracted from the ash.</li>
<li><b>Bioleaching:</b> bacteria produce leachate solutions that contain copper compounds.</li>
<li>Both are slow, but they use low-grade ores and cause less environmental damage than traditional mining.</li>
</ul>
`,
  flashcards: [
    ["Potable water", "Water that is safe to drink (not necessarily pure)"],
    ["Steps in treating fresh water", "Sedimentation, filtration, chlorination"],
    ["Why is chlorine added to drinking water?", "To kill microbes (sterilise it)"],
    ["How is sea water made potable?", "Distillation (or reverse osmosis), which is energy-intensive"],
    ["Stages of a life-cycle assessment", "Raw materials, manufacture, use, disposal"],
    ["Phytomining", "Plants absorb metal compounds from soil; they are burned and the metal is extracted from the ash"],
    ["Bioleaching", "Bacteria produce leachate solutions containing metal compounds"],
    ["Why use distilled water in analysis?", "Tap water contains dissolved ions that could interfere with results"]
  ],
  quiz: [
    { q: "Which step kills microbes in water treatment?", o: ["Chlorination", "Filtration", "Sedimentation", "Distillation"], a: 0, e: R`Chlorine (or UV/ozone) kills bacteria.` },
    { q: "Why is distillation of sea water not widely used in the UK?", o: ["It needs lots of energy, so it is expensive", "It doesn't remove salt", "It makes the water toxic", "It's too fast"], a: 0, e: R`Boiling water takes lots of energy; the UK has enough fresh water.` },
    { q: "Which is NOT a stage of a life-cycle assessment?", o: ["Advertising the product", "Extracting raw materials", "Using the product", "Disposal"], a: 0, e: R`An LCA covers raw materials, manufacture, use and disposal.` },
    { q: "In phytomining, how is the metal obtained?", o: ["Plants are burned and the metal is extracted from the ash", "Bacteria eat the ore", "Ore is heated with carbon", "Electrolysis of sea water"], a: 0, e: R`Plants absorb metal compounds from soil; the ash is rich in the metal.` },
    { q: "Potable water is…", o: ["Safe to drink", "Pure H<sub>2</sub>O", "Distilled water", "Sea water"], a: 0, e: R`Potable water is not necessarily pure, just safe.` },
    { q: "Which is an advantage of bioleaching?", o: ["It can use low-grade ores", "It is very fast", "It produces pure copper directly", "It needs high temperatures"], a: 0, e: R`It extracts metal from ores too poor to mine economically.` }
  ]
});
