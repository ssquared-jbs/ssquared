/* Topic 2 — Inorganic chemistry (Edexcel IGCSE 4CH1) */

CHEM.add({
  id: "2a", group: 2, title: "Group 1 (alkali metals)",
  summary: "Lithium, sodium and potassium: reactions with water and trends down the group.",
  notes: `
<h3>Properties</h3>
<ul>
<li>Soft metals that can be cut with a knife. They have low densities (Li, Na and K float on water) and low melting points.</li>
<li>Stored under oil to stop them reacting with air and water.</li>
<li>Each has <b>1 electron in its outer shell</b> and forms <b>+1 ions</b>.</li>
</ul>
<h3>Reaction with water</h3>
<div class="eq">2Na(s) + 2H<sub>2</sub>O(l) → 2NaOH(aq) + H<sub>2</sub>(g)</div>
<table>
<tr><th>Metal</th><th>Observations</th></tr>
<tr><td>Lithium</td><td>Floats, fizzes steadily, moves slowly, gradually disappears</td></tr>
<tr><td>Sodium</td><td>Floats, melts into a ball, fizzes rapidly, moves around quickly, disappears</td></tr>
<tr><td>Potassium</td><td>As sodium but more vigorous, catches fire with a <b>lilac</b> flame, may spit</td></tr>
</table>
<p>All three form an <b>alkaline</b> hydroxide solution (universal indicator turns blue/purple) and <b>hydrogen</b> gas.</p>
<h3>Trend in reactivity</h3>
<p>Reactivity <b>increases down the group</b>: Li &lt; Na &lt; K &lt; Rb &lt; Cs.</p>
<div class="box box-key"><span class="box-title">Explanation</span>Going down the group, atoms are bigger and have more shells. The outer electron is <b>further from the nucleus</b> and more <b>shielded</b>, so it is attracted less strongly and <b>lost more easily</b>.</div>
<p>You can use the trend to predict, for example, that rubidium reacts explosively with water.</p>
`,
  flashcards: [
    ["Products of a Group 1 metal + water", "Metal hydroxide (alkaline solution) + hydrogen"],
    ["Equation: potassium + water", "2K + 2H<sub>2</sub>O → 2KOH + H<sub>2</sub>"],
    ["Trend in reactivity down Group 1", "Increases"],
    ["Why does reactivity increase down Group 1?", "The outer electron is further from the nucleus and more shielded, so it is lost more easily"],
    ["Why are Group 1 metals stored under oil?", "To stop them reacting with oxygen and water vapour in the air"],
    ["Flame colour when potassium reacts with water", "Lilac"],
    ["Charge on Group 1 ions", "+1"]
  ],
  quiz: [
    { q: "Which gas forms when sodium reacts with water?", o: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], a: 0, e: "" },
    { q: "Which Group 1 metal reacts most vigorously with water?", o: ["Potassium", "Sodium", "Lithium", "They are all the same"], a: 0, e: "" },
    { q: "Why does sodium melt into a ball on water?", o: ["The reaction is exothermic and sodium has a low melting point", "Sodium is dense", "Water is hot", "Hydrogen melts it"], a: 0, e: "" },
    { q: "What colour does universal indicator turn after lithium reacts with water?", o: ["Blue/purple", "Red", "Green", "Yellow"], a: 0, e: "LiOH is an alkali." },
    { q: "Why is caesium more reactive than sodium?", o: ["Its outer electron is further from the nucleus, so it is lost more easily", "It has more outer electrons", "It gains electrons more easily", "It is more dense"], a: 0, e: "" },
    { q: "What is the formula of the product when lithium reacts with water (apart from H<sub>2</sub>)?", o: ["LiOH", "Li<sub>2</sub>O", "LiH", "Li(OH)<sub>2</sub>"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "2b", group: 2, title: "Group 7 (halogens)",
  summary: "Chlorine, bromine and iodine: physical trends and displacement reactions.",
  notes: `
<h3>Physical properties</h3>
<table>
<tr><th>Halogen</th><th>State at room temp</th><th>Colour</th></tr>
<tr><td>Chlorine, Cl<sub>2</sub></td><td>Gas</td><td>Pale yellow-green</td></tr>
<tr><td>Bromine, Br<sub>2</sub></td><td>Liquid</td><td>Red-brown (orange vapour/solution)</td></tr>
<tr><td>Iodine, I<sub>2</sub></td><td>Solid</td><td>Grey-black (purple vapour; brown in solution)</td></tr>
</table>
<ul>
<li>They exist as <b>diatomic</b> molecules.</li>
<li>Going down the group, the colour gets <b>darker</b> and the melting and boiling points <b>increase</b>, because molecules are larger and have stronger intermolecular forces.</li>
<li>Use the trend to predict: fluorine is a pale yellow gas, and astatine is a dark solid.</li>
</ul>
<h3>Reactivity and displacement</h3>
<p>Reactivity <b>decreases down the group</b>: F &gt; Cl &gt; Br &gt; I.</p>
<p>A more reactive halogen <b>displaces</b> a less reactive one from a solution of its salt.</p>
<div class="eq">Cl<sub>2</sub>(aq) + 2KBr(aq) → 2KCl(aq) + Br<sub>2</sub>(aq) &nbsp;(colourless → orange)</div>
<div class="eq">Cl<sub>2</sub> + 2KI → 2KCl + I<sub>2</sub> &nbsp;(→ brown)</div>
<div class="eq">Br<sub>2</sub> + 2KI → 2KBr + I<sub>2</sub> &nbsp;(→ brown)</div>
<p>Iodine doesn't displace chloride or bromide, so there is no reaction.</p>
<div class="box box-key"><span class="box-title">Explaining the trend</span>Halogens react by <b>gaining</b> one electron. Down the group, the outer shell is further from the nucleus and more shielded, so an incoming electron is attracted less strongly.</div>
<div class="box box-c"><span class="box-title">Paper 2 only: displacement as redox</span>
<div class="eq">Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub></div>
Chlorine gains electrons, so it is <b>reduced</b> and acts as the oxidising agent. Bromide ions lose electrons, so they are <b>oxidised</b>.</div>
<h3>Hydrogen halides</h3>
<p>Hydrogen chloride is a gas. It dissolves in water to form hydrochloric acid, which is acidic because HCl ionises to release H<sup>+</sup> ions. In methylbenzene, HCl doesn't ionise, so the solution isn't acidic.</p>
`,
  flashcards: [
    ["Colour and state of chlorine", "Pale yellow-green gas"],
    ["Colour and state of bromine", "Red-brown liquid"],
    ["Colour and state of iodine", "Grey-black solid (purple vapour)"],
    ["Trend in reactivity down Group 7", "Decreases"],
    ["Trend in melting point down Group 7", "Increases (larger molecules, stronger intermolecular forces)"],
    ["Chlorine water + potassium iodide: observation", "Solution turns brown as iodine forms"],
    ["Ionic equation: Cl<sub>2</sub> + bromide", "Cl<sub>2</sub> + 2Br<sup>−</sup> → 2Cl<sup>−</sup> + Br<sub>2</sub>"],
    ["Why is HCl in water acidic but HCl in methylbenzene not?", "In water HCl ionises to form H<sup>+</sup> ions; in methylbenzene it does not"],
    ["Why is fluorine the most reactive halogen?", "Its outer shell is closest to the nucleus, so it attracts an extra electron most strongly"]
  ],
  quiz: [
    { q: "Which mixture reacts?", o: ["Chlorine + potassium bromide", "Iodine + potassium chloride", "Bromine + potassium chloride", "Iodine + potassium bromide"], a: 0, e: "A more reactive halogen displaces a less reactive one." },
    { q: "What is the state of bromine at room temperature?", o: ["Liquid", "Gas", "Solid", "Plasma"], a: 0, e: "" },
    { q: "In Cl<sub>2</sub> + 2I<sup>−</sup> → 2Cl<sup>−</sup> + I<sub>2</sub>, what is oxidised?", o: ["Iodide ions", "Chlorine", "Chloride ions", "Nothing"], a: 0, e: "I<sup>−</sup> loses electrons." },
    { q: "Predict the appearance of astatine at room temperature.", o: ["Black solid", "Yellow gas", "Colourless liquid", "Green gas"], a: 0, e: "" },
    { q: "Why does reactivity decrease down Group 7?", o: ["It's harder to attract an extra electron into a shell further from the nucleus", "It's harder to lose electrons", "There are more outer electrons", "Molecules are smaller"], a: 0, e: "" },
    { q: "Bromine water is added to potassium iodide. What do you see?", o: ["It turns brown", "It turns colourless", "A white precipitate forms", "No change"], a: 0, e: "Iodine is displaced." },
    { q: "Why don't the halogens conduct electricity?", o: ["They are simple molecules with no free electrons or ions", "They are metals", "They are ionic", "They are giant covalent"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "2c", group: 2, title: "Gases in the atmosphere",
  summary: "Composition of air, oxygen percentage, combustion, carbon dioxide and the greenhouse effect.",
  notes: `
<h3>Composition of dry air</h3>
<table>
<tr><th>Gas</th><th>Approximate %</th></tr>
<tr><td>Nitrogen</td><td>78</td></tr>
<tr><td>Oxygen</td><td>21</td></tr>
<tr><td>Argon</td><td>0.9</td></tr>
<tr><td>Carbon dioxide</td><td>0.04</td></tr>
</table>
<div class="box box-prac"><span class="box-title">🔬 Practical: find the percentage of oxygen in air</span>
<ul>
<li><b>Iron method:</b> put damp iron wool in a measuring cylinder inverted over water. As the iron rusts, it uses up the oxygen and the water rises. After a few days, about 1/5 (21%) of the volume has been used.</li>
<li><b>Copper method:</b> pass a known volume of air (e.g. 100 cm<sup>3</sup>) back and forth over heated copper using two gas syringes. The copper turns black (CuO) and the volume drops to about 79 cm<sup>3</sup>.</li>
<li>Phosphorus can also be used: it burns in the oxygen.</li>
</ul></div>
<h3>Burning elements in oxygen</h3>
<table>
<tr><th>Element</th><th>Observation</th><th>Product</th><th>Oxide in water</th></tr>
<tr><td>Magnesium</td><td>Bright white flame, white powder</td><td>MgO</td><td>Basic (alkaline)</td></tr>
<tr><td>Hydrogen</td><td>Pale blue flame (squeaky pop)</td><td>H<sub>2</sub>O</td><td>Neutral</td></tr>
<tr><td>Sulfur</td><td>Blue flame, choking gas</td><td>SO<sub>2</sub></td><td>Acidic</td></tr>
</table>
<div class="eq">2Mg + O<sub>2</sub> → 2MgO &nbsp;&nbsp; S + O<sub>2</sub> → SO<sub>2</sub></div>
<h3>Carbon dioxide</h3>
<ul>
<li><b>Thermal decomposition</b> of metal carbonates releases CO<sub>2</sub>, e.g. CuCO<sub>3</sub> → CuO + CO<sub>2</sub> (green → black).</li>
<li>CO<sub>2</sub> is a <b>greenhouse gas</b>. It absorbs heat (infrared) radiated from the Earth and keeps the Earth warm.</li>
<li>Increasing CO<sub>2</sub> from burning fossil fuels and deforestation may contribute to <b>climate change</b>: higher temperatures, melting ice caps, rising sea levels and changing weather patterns.</li>
</ul>
<div class="eq">CuCO<sub>3</sub>(s) → CuO(s) + CO<sub>2</sub>(g)</div>
`,
  flashcards: [
    ["% of nitrogen in air", "About 78%"],
    ["% of oxygen in air", "About 21%"],
    ["% of argon in air", "About 0.9%"],
    ["% of CO<sub>2</sub> in air", "About 0.04%"],
    ["Magnesium burning in oxygen", "Bright white flame, white solid MgO (basic oxide)"],
    ["Sulfur burning in oxygen", "Blue flame, forms SO<sub>2</sub> (acidic oxide)"],
    ["Thermal decomposition of copper(II) carbonate", "CuCO<sub>3</sub> → CuO + CO<sub>2</sub> (green → black)"],
    ["Why is CO<sub>2</sub> a greenhouse gas?", "It absorbs infrared radiation emitted by the Earth, trapping heat"],
    ["Effects of climate change", "Rising temperatures, melting ice caps, rising sea levels, extreme weather"]
  ],
  quiz: [
    { q: "100 cm<sup>3</sup> of air is passed over hot copper. What volume of gas is left?", o: ["79 cm<sup>3</sup>", "21 cm<sup>3</sup>", "100 cm<sup>3</sup>", "50 cm<sup>3</sup>"], a: 0, e: "About 21% (oxygen) is used up." },
    { q: "Which oxide gives an acidic solution?", o: ["Sulfur dioxide", "Magnesium oxide", "Sodium oxide", "Calcium oxide"], a: 0, e: "" },
    { q: "What forms when copper(II) carbonate is heated?", o: ["Copper(II) oxide and carbon dioxide", "Copper and carbon dioxide", "Copper oxide and oxygen", "Copper and oxygen"], a: 0, e: "" },
    { q: "What is the second most abundant gas in dry air?", o: ["Oxygen", "Argon", "Carbon dioxide", "Nitrogen"], a: 0, e: "" },
    { q: "Why does the water level rise when iron wool rusts in a sealed tube of air?", o: ["Oxygen is used up", "Nitrogen dissolves", "Iron absorbs water", "CO<sub>2</sub> is made"], a: 0, e: "" },
    { q: "What colour flame does magnesium burn with?", o: ["Bright white", "Lilac", "Blue", "Yellow"], a: 0, e: "" },
    { q: "Which human activity adds most CO<sub>2</sub> to the atmosphere?", o: ["Burning fossil fuels", "Using solar panels", "Planting trees", "Recycling"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "2d", group: 2, title: "Reactivity series",
  summary: "Order of metals, displacement, redox and rusting.",
  notes: `
<h3>The reactivity series</h3>
<p style="font-size:1.1rem"><b>K &gt; Na &gt; Li &gt; Ca &gt; Mg &gt; Al &gt; (C) &gt; Zn &gt; Fe &gt; (H) &gt; Cu &gt; Ag &gt; Au</b></p>
<p>Memory aid: "<i>Please Send Lions, Cats, Monkeys And Cute Zebras Into Hot Countries, Signing Gold</i>"</p>
<h3>Reactions with water and dilute acid</h3>
<ul>
<li>K, Na, Li and Ca react with <b>cold water</b> to give a hydroxide + hydrogen.</li>
<li>Mg reacts very slowly with cold water but quickly with <b>steam</b> (Mg + H<sub>2</sub>O → MgO + H<sub>2</sub>).</li>
<li>Metals above hydrogen react with dilute acids: <b>metal + acid → salt + hydrogen</b>. The more reactive the metal, the faster it fizzes.</li>
<li>Copper, silver and gold don't react with dilute acids.</li>
</ul>
<h3>Displacement reactions</h3>
<p>A more reactive metal displaces a less reactive metal from a compound of that metal.</p>
<div class="eq">Mg(s) + CuSO<sub>4</sub>(aq) → MgSO<sub>4</sub>(aq) + Cu(s)</div>
<p>Observations: the blue colour fades and a pink-brown solid forms. The mixture gets warmer.</p>
<div class="box box-prac"><span class="box-title">🔬 Deducing the order</span>Add metals to solutions of other metals' salts and look for displacement. Or add metals to dilute acid and compare the rate of bubbling or the temperature rise.</div>
<h3>Oxidation and reduction</h3>
<ul>
<li><b>Oxidation</b>: gain of oxygen, or loss of electrons.</li>
<li><b>Reduction</b>: loss of oxygen, or gain of electrons.</li>
<li><b>Redox</b>: oxidation and reduction happening together.</li>
<li><b>Oxidising agent</b>: the substance that oxidises another and is itself reduced. <b>Reducing agent</b>: the substance that reduces another and is itself oxidised.</li>
</ul>
<p>In Mg + Cu<sup>2+</sup> → Mg<sup>2+</sup> + Cu, Mg is oxidised (it is the reducing agent) and Cu<sup>2+</sup> is reduced (it is the oxidising agent).</p>
<h3>Rusting</h3>
<ul>
<li>Iron rusts when it reacts with <b>both water and oxygen</b>. Rust is hydrated iron(III) oxide.</li>
<li><b>Barrier methods:</b> paint, oil, grease or plastic keep out water and oxygen.</li>
<li><b>Galvanising:</b> coating iron with zinc.</li>
<li><b>Sacrificial protection:</b> a more reactive metal (zinc or magnesium) corrodes instead of the iron because it loses electrons more easily. Galvanised iron still works even when scratched.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: conditions needed for rusting</span>
Use three tubes with an iron nail in each:
<ol>
<li>Water and air: the nail <b>rusts</b>.</li>
<li>Boiled water with an oil layer on top, so there is no oxygen: no rust.</li>
<li>Anhydrous calcium chloride (a drying agent) with a bung, so there is no water: no rust.</li>
</ol></div>
`,
  flashcards: [
    ["Metal + dilute acid", "Salt + hydrogen"],
    ["Oxidation (two definitions)", "Gain of oxygen, or loss of electrons"],
    ["Reduction (two definitions)", "Loss of oxygen, or gain of electrons"],
    ["Oxidising agent", "A substance that oxidises another substance and is itself reduced"],
    ["Reducing agent", "A substance that reduces another substance and is itself oxidised"],
    ["Conditions for rusting", "Both water and oxygen"],
    ["Rust", "Hydrated iron(III) oxide"],
    ["Galvanising", "Coating iron with zinc to prevent rusting"],
    ["Sacrificial protection", "A more reactive metal (e.g. Zn, Mg) corrodes instead of the iron"],
    ["Observation: Zn added to CuSO<sub>4</sub>(aq)", "Blue colour fades, pink-brown copper forms, temperature rises"]
  ],
  quiz: [
    { q: "Which metal displaces iron from iron(II) sulfate solution?", o: ["Zinc", "Copper", "Silver", "Gold"], a: 0, e: "Zinc is above iron in the reactivity series." },
    { q: "In Zn + CuO → ZnO + Cu, what is the reducing agent?", o: ["Zinc", "Copper(II) oxide", "Copper", "Zinc oxide"], a: 0, e: "Zinc gains oxygen, so it is oxidised and acts as the reducing agent." },
    { q: "In which tube does a nail rust?", o: ["Water and air", "Boiled water under oil", "Dry air with calcium chloride", "A vacuum"], a: 0, e: "" },
    { q: "Why does galvanised iron not rust even when scratched?", o: ["Zinc is more reactive and corrodes instead", "Zinc is a barrier that can't be broken", "Zinc is less reactive", "Iron becomes unreactive"], a: 0, e: "" },
    { q: "Which metal does NOT react with dilute hydrochloric acid?", o: ["Copper", "Zinc", "Magnesium", "Iron"], a: 0, e: "" },
    { q: "Fe<sup>2+</sup> → Fe<sup>3+</sup> + e<sup>−</sup> is…", o: ["Oxidation", "Reduction", "Neutralisation", "Displacement"], a: 0, e: "Loss of electrons." },
    { q: "What forms when magnesium reacts with steam?", o: ["Magnesium oxide and hydrogen", "Magnesium hydroxide and hydrogen", "Magnesium oxide and oxygen", "No reaction"], a: 0, e: "" },
    { q: "Metal X reacts with dilute acid but doesn't displace zinc from ZnSO<sub>4</sub>. What could X be?", o: ["Iron", "Magnesium", "Copper", "Sodium"], a: 0, e: "It is above H but below Zn." }
  ]
});

CHEM.add({
  id: "2e", group: 2, title: "Extraction and uses of metals",
  summary: "Ores, extraction by carbon and electrolysis, alloys and uses.",
  notes: `
<h3>Ores and extraction</h3>
<ul>
<li>Very unreactive metals like gold are found <b>uncombined</b> (native) in the Earth's crust.</li>
<li>Most metals are found as compounds in <b>ores</b>, often oxides. Extraction is a <b>reduction</b> process.</li>
<li>The method depends on the metal's <b>position in the reactivity series</b>:
 <ul>
 <li><b>Above carbon</b> (e.g. Al, Mg, Na): extracted by <b>electrolysis</b> of the molten compound. This is expensive.</li>
 <li><b>Below carbon</b> (e.g. Zn, Fe, Cu): extracted by <b>heating with carbon</b>, which reduces the oxide.</li>
 </ul></li>
</ul>
<div class="eq">2CuO + C → 2Cu + CO<sub>2</sub></div>
<div class="box box-c"><span class="box-title">Paper 2 only: the blast furnace (iron)</span>
<p>Raw materials: haematite (Fe<sub>2</sub>O<sub>3</sub>), coke (C), limestone (CaCO<sub>3</sub>) and hot air.</p>
<div class="eq">C + O<sub>2</sub> → CO<sub>2</sub> &nbsp; (exothermic, heats the furnace)</div>
<div class="eq">CO<sub>2</sub> + C → 2CO</div>
<div class="eq">Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub> &nbsp; (CO is the reducing agent)</div>
<p>Removing impurities: CaCO<sub>3</sub> → CaO + CO<sub>2</sub>, then CaO + SiO<sub>2</sub> → CaSiO<sub>3</sub> (<b>slag</b>). Slag floats on the molten iron and is tapped off.</p>
</div>
<div class="box box-c"><span class="box-title">Paper 2 only: aluminium by electrolysis</span>
<ul>
<li>The ore is bauxite, purified to aluminium oxide, Al<sub>2</sub>O<sub>3</sub>.</li>
<li>Al<sub>2</sub>O<sub>3</sub> is dissolved in <b>molten cryolite</b>. This lowers the melting point, which saves energy and cost.</li>
<li>The electrodes are graphite.</li>
</ul>
<div class="eq">Cathode: Al<sup>3+</sup> + 3e<sup>−</sup> → Al &nbsp;&nbsp; Anode: 2O<sup>2−</sup> → O<sub>2</sub> + 4e<sup>−</sup></div>
<p>The carbon anodes react with oxygen to form CO<sub>2</sub>, so they burn away and must be replaced regularly.</p></div>
<h3>Alloys</h3>
<p>An <b>alloy</b> is a mixture of a metal with one or more other elements, usually metals (steel contains carbon).</p>
<div class="box box-key"><span class="box-title">Why alloys are harder than pure metals</span>Atoms of the other element are a <b>different size</b>, which <b>distorts the layers</b> of metal ions. The layers can't slide over each other as easily.</div>
<h3>Uses linked to properties</h3>
<table>
<tr><th>Metal</th><th>Use</th><th>Property</th></tr>
<tr><td>Aluminium</td><td>Aircraft, overhead power cables, cans</td><td>Low density, resists corrosion (protective oxide layer), good conductor</td></tr>
<tr><td>Copper</td><td>Electrical wiring, water pipes</td><td>Good conductor, ductile, unreactive</td></tr>
<tr><td>Iron (as steel)</td><td>Buildings, bridges, cars</td><td>Strong, cheap</td></tr>
<tr><td>Low-carbon (mild) steel</td><td>Car bodies, wire</td><td>Soft, easily shaped</td></tr>
<tr><td>High-carbon steel</td><td>Cutting tools</td><td>Hard, strong, but brittle</td></tr>
<tr><td>Stainless steel</td><td>Cutlery, surgical tools</td><td>Resists rusting (contains chromium and nickel)</td></tr>
</table>
`,
  flashcards: [
    ["Ore", "A rock containing enough of a metal compound to extract the metal profitably"],
    ["How are metals above carbon extracted?", "Electrolysis of the molten compound"],
    ["How are metals below carbon extracted?", "Heating the oxide with carbon (reduction)"],
    ["Main reducing agent in the blast furnace", "Carbon monoxide, CO"],
    ["Equation: haematite reduction", "Fe<sub>2</sub>O<sub>3</sub> + 3CO → 2Fe + 3CO<sub>2</sub>"],
    ["Purpose of limestone in the blast furnace", "Removes acidic impurities (SiO<sub>2</sub>) as slag (CaSiO<sub>3</sub>)"],
    ["Why is Al<sub>2</sub>O<sub>3</sub> dissolved in cryolite?", "It lowers the melting point, saving energy"],
    ["Why must the anodes be replaced in Al extraction?", "Oxygen reacts with the carbon anodes to form CO<sub>2</sub>"],
    ["Why are alloys harder than pure metals?", "Different-sized atoms distort the layers, so they can't slide easily"],
    ["Why is aluminium used for aircraft?", "Low density and resistant to corrosion"]
  ],
  quiz: [
    { q: "Which metal must be extracted by electrolysis?", o: ["Aluminium", "Iron", "Copper", "Zinc"], a: 0, e: "Al is above carbon in the reactivity series." },
    { q: "Why is cryolite used in aluminium extraction?", o: ["It lowers the melting point of the electrolyte", "It is the ore", "It is a catalyst", "It makes the anode"], a: 0, e: "" },
    { q: "What is slag?", o: ["Calcium silicate", "Calcium carbonate", "Iron oxide", "Carbon monoxide"], a: 0, e: "" },
    { q: "Why is copper used for electrical wires?", o: ["It is a good conductor and ductile", "It has a low density", "It is very reactive", "It is hard and brittle"], a: 0, e: "" },
    { q: "Why are alloys harder than pure metals?", o: ["Different-sized atoms disrupt the layers", "They have stronger ionic bonds", "They contain no delocalised electrons", "They are covalent"], a: 0, e: "" },
    { q: "Which gas forms at the anode during aluminium extraction?", o: ["Oxygen", "Hydrogen", "Aluminium", "Chlorine"], a: 0, e: "It then reacts with the carbon anode to make CO<sub>2</sub>." },
    { q: "Why is gold found as the element in the ground?", o: ["It is very unreactive", "It is very reactive", "It is extracted by electrolysis", "It is a non-metal"], a: 0, e: "" },
    { q: "In the blast furnace, Fe<sub>2</sub>O<sub>3</sub> is…", o: ["Reduced", "Oxidised", "Neutralised", "Decomposed"], a: 0, e: "It loses oxygen." }
  ]
});

CHEM.add({
  id: "2f", group: 2, title: "Acids, alkalis and titrations",
  summary: "Indicators, the pH scale, H⁺ and OH⁻ ions, and acid–alkali titrations.",
  notes: `
<h3>Indicators</h3>
<table>
<tr><th>Indicator</th><th>In acid</th><th>In alkali</th></tr>
<tr><td>Litmus</td><td>Red</td><td>Blue</td></tr>
<tr><td>Phenolphthalein</td><td>Colourless</td><td>Pink</td></tr>
<tr><td>Methyl orange</td><td>Red</td><td>Yellow</td></tr>
</table>
<h3>The pH scale</h3>
<ul>
<li>pH 0–14. Below 7 is <b>acidic</b>, 7 is <b>neutral</b>, above 7 is <b>alkaline</b>.</li>
<li><b>Universal indicator</b> gives an approximate pH: red (strong acid) → orange/yellow → green (neutral) → blue → purple (strong alkali).</li>
<li>A pH meter gives an accurate value.</li>
</ul>
<h3>Acids and alkalis</h3>
<ul>
<li><b>Acids</b> are sources of <b>hydrogen ions, H<sup>+</sup></b>, in water.</li>
<li><b>Alkalis</b> are sources of <b>hydroxide ions, OH<sup>−</sup></b>, in water.</li>
<li><b>Neutralisation:</b> H<sup>+</sup>(aq) + OH<sup>−</sup>(aq) → H<sub>2</sub>O(l)</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: titration</span>
<p><span class="tag tag-p">Practical</span> <b>Carry out an accurate acid–alkali titration</b></p>
<ol>
<li>Use a <b>pipette</b> to measure exactly 25.0 cm<sup>3</sup> of alkali into a conical flask.</li>
<li>Add a few drops of indicator (methyl orange or phenolphthalein).</li>
<li>Fill a <b>burette</b> with acid and record the starting reading.</li>
<li>Add acid while swirling. Add it drop by drop near the end point until the indicator <b>just</b> changes colour.</li>
<li>Record the final reading. Repeat until you have <b>concordant</b> results (within 0.10 cm<sup>3</sup>) and take the mean.</li>
</ol>
<div class="box box-key"><span class="box-title">Worked example</span>25.0 cm<sup>3</sup> of NaOH is neutralised by 20.0 cm<sup>3</sup> of 0.100 mol/dm<sup>3</sup> HCl. Find the concentration of the NaOH.<br>
mol HCl = 0.100 × 0.0200 = 0.00200. The ratio is 1:1, so mol NaOH = 0.00200.<br>
[NaOH] = 0.00200 ÷ 0.0250 = <b>0.0800 mol/dm<sup>3</sup></b></div></div>
`,
  flashcards: [
    ["Phenolphthalein colours", "Colourless in acid, pink in alkali"],
    ["Methyl orange colours", "Red in acid, yellow in alkali"],
    ["Litmus colours", "Red in acid, blue in alkali"],
    ["Acid (definition)", "A source of hydrogen ions, H<sup>+</sup>"],
    ["Alkali (definition)", "A source of hydroxide ions, OH<sup>−</sup>"],
    ["pH of a neutral solution", "7"],
    ["Ionic equation for neutralisation", "H<sup>+</sup> + OH<sup>−</sup> → H<sub>2</sub>O"],
    ["Concordant titres", "Titres within 0.10 cm<sup>3</sup> of each other"],
    ["Apparatus to measure 25.0 cm<sup>3</sup> of alkali accurately", "A pipette"],
    ["Universal indicator colour at pH 1", "Red"]
  ],
  quiz: [
    { q: "What colour is methyl orange in an alkali?", o: ["Yellow", "Red", "Pink", "Colourless"], a: 0, e: "" },
    { q: "Which ion do all acids release in water?", o: ["H<sup>+</sup>", "OH<sup>−</sup>", "Cl<sup>−</sup>", "O<sup>2−</sup>"], a: 0, e: "" },
    { q: "A solution has pH 13. What is it?", o: ["A strong alkali", "A weak acid", "Neutral", "A strong acid"], a: 0, e: "" },
    { q: "Which piece of apparatus delivers a variable, accurately measured volume of acid in a titration?", o: ["Burette", "Pipette", "Measuring cylinder", "Beaker"], a: 0, e: "" },
    { q: "20.0 cm<sup>3</sup> of 0.150 mol/dm<sup>3</sup> HCl neutralises 25.0 cm<sup>3</sup> of NaOH. What is the NaOH concentration?", o: ["0.120 mol/dm<sup>3</sup>", "0.188 mol/dm<sup>3</sup>", "0.150 mol/dm<sup>3</sup>", "0.00300 mol/dm<sup>3</sup>"], a: 0, e: "0.150 × 0.0200 = 0.00300 mol; ÷ 0.0250 = 0.120" },
    { q: "Which titres are concordant?", o: ["22.45 and 22.50 cm<sup>3</sup>", "22.10 and 22.50 cm<sup>3</sup>", "21.00 and 22.00 cm<sup>3</sup>", "22.45 and 22.80 cm<sup>3</sup>"], a: 0, e: "They are within 0.10 cm<sup>3</sup>." },
    { q: "What colour is phenolphthalein in acid?", o: ["Colourless", "Pink", "Red", "Yellow"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "2g", group: 2, title: "Acids, bases and salt preparations",
  summary: "Reactions of acids, solubility rules and making soluble and insoluble salts.",
  notes: `
<h3>Reactions of acids</h3>
<div class="eq">metal + acid → salt + hydrogen</div>
<div class="eq">base (metal oxide/hydroxide) + acid → salt + water</div>
<div class="eq">metal carbonate + acid → salt + water + carbon dioxide</div>
<div class="eq">ammonia + acid → ammonium salt &nbsp; (NH<sub>3</sub> + HCl → NH<sub>4</sub>Cl)</div>
<ul>
<li>Hydrochloric acid makes <b>chlorides</b>, sulfuric acid makes <b>sulfates</b>, and nitric acid makes <b>nitrates</b>.</li>
<li>A <b>base</b> is a substance that neutralises an acid to form a salt and water. A soluble base is called an <b>alkali</b>.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: proton definitions</span>An <b>acid</b> is a <b>proton (H<sup>+</sup>) donor</b>. A <b>base</b> is a <b>proton acceptor</b>.</div>
<h3>Solubility rules</h3>
<table>
<tr><th>Soluble</th><th>Insoluble (exceptions)</th></tr>
<tr><td>All sodium, potassium and ammonium salts</td><td>None</td></tr>
<tr><td>All nitrates</td><td>None</td></tr>
<tr><td>Most chlorides</td><td>Silver chloride, lead(II) chloride</td></tr>
<tr><td>Most sulfates</td><td>Barium sulfate, calcium sulfate, lead(II) sulfate</td></tr>
<tr><td>Sodium, potassium and ammonium carbonates</td><td>Most other carbonates</td></tr>
<tr><td>Sodium, potassium and calcium hydroxides (Ca(OH)<sub>2</sub> slightly)</td><td>Most other hydroxides</td></tr>
</table>
<h3>Making a soluble salt from an insoluble base, metal or carbonate</h3>
<div class="box box-prac"><span class="box-title">🔬 Practical: prepare hydrated copper(II) sulfate crystals</span>
<ol>
<li>Warm dilute sulfuric acid.</li>
<li>Add copper(II) oxide a little at a time, stirring, until some is left over (<b>excess</b>). This makes sure all the acid has reacted.</li>
<li><b>Filter</b> to remove the excess CuO.</li>
<li>Heat the filtrate to evaporate some water until it is saturated (crystals form on a cold glass rod).</li>
<li>Leave to cool and crystallise. Filter, then pat dry with filter paper.</li>
</ol>
<div class="eq">CuO(s) + H<sub>2</sub>SO<sub>4</sub>(aq) → CuSO<sub>4</sub>(aq) + H<sub>2</sub>O(l)</div></div>
<h3>Making a soluble salt from an acid and an alkali (Na, K, NH<sub>4</sub> salts)</h3>
<p>Both reactants are soluble, so you can't add an excess and filter it off. Use a <b>titration</b> with indicator to find the exact volumes. Repeat without indicator, then crystallise.</p>
<div class="box box-c"><span class="box-title">Paper 2 only: making insoluble salts by precipitation</span>
<p><span class="tag tag-p">Practical</span> <b>Prepare a pure, dry sample of an insoluble salt</b>, e.g. lead(II) sulfate:</p>
<ol>
<li>Mix solutions of two soluble salts, e.g. lead(II) nitrate and sodium sulfate.</li>
<li>Filter to collect the precipitate.</li>
<li>Wash it with distilled water to remove soluble impurities.</li>
<li>Dry it in a warm oven.</li>
</ol>
<div class="eq">Pb(NO<sub>3</sub>)<sub>2</sub>(aq) + Na<sub>2</sub>SO<sub>4</sub>(aq) → PbSO<sub>4</sub>(s) + 2NaNO<sub>3</sub>(aq)</div>
<div class="eq">Ionic: Pb<sup>2+</sup>(aq) + SO<sub>4</sub><sup>2−</sup>(aq) → PbSO<sub>4</sub>(s)</div></div>
`,
  flashcards: [
    ["Metal carbonate + acid", "Salt + water + carbon dioxide"],
    ["Base + acid", "Salt + water"],
    ["Base", "A substance that neutralises an acid to form a salt and water"],
    ["Alkali", "A soluble base"],
    ["Acid (Paper 2 definition)", "A proton donor"],
    ["Base (Paper 2 definition)", "A proton acceptor"],
    ["Which chlorides are insoluble?", "Silver chloride and lead(II) chloride"],
    ["Which sulfates are insoluble?", "Barium, calcium and lead(II) sulfate"],
    ["Why add an excess of CuO when making copper sulfate?", "To make sure all the acid is used up; the excess is filtered off"],
    ["How to make an insoluble salt", "Precipitation: mix two soluble salt solutions, filter, wash with distilled water, dry"],
    ["Salt formed from nitric acid", "A nitrate"]
  ],
  quiz: [
    { q: "Which salt is insoluble in water?", o: ["Barium sulfate", "Sodium chloride", "Potassium nitrate", "Copper(II) sulfate"], a: 0, e: "" },
    { q: "How should you make sodium chloride?", o: ["Titration of NaOH with HCl, then crystallise", "Excess Na metal + HCl, then filter", "Precipitation", "Heat NaOH"], a: 0, e: "Both reactants are soluble, and sodium is too reactive to add to acid safely." },
    { q: "Why is excess copper(II) oxide added to the acid?", o: ["To make sure all the acid reacts", "To speed up evaporation", "To make the crystals bigger", "To act as a catalyst"], a: 0, e: "" },
    { q: "Which two solutions could you mix to make silver chloride?", o: ["Silver nitrate and sodium chloride", "Silver chloride and water", "Silver and hydrochloric acid", "Silver nitrate and sodium nitrate"], a: 0, e: "" },
    { q: "What are the products of calcium carbonate + hydrochloric acid?", o: ["Calcium chloride, water and carbon dioxide", "Calcium chloride and hydrogen", "Calcium oxide and water", "Calcium hydroxide and CO<sub>2</sub>"], a: 0, e: "" },
    { q: "Why is the precipitate washed with distilled water?", o: ["To remove soluble impurities", "To dissolve it", "To cool it", "To make it react"], a: 0, e: "" },
    { q: "Which acid would you use to make zinc nitrate?", o: ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Ethanoic acid"], a: 0, e: "" },
    { q: "In the reaction NH<sub>3</sub> + H<sup>+</sup> → NH<sub>4</sub><sup>+</sup>, ammonia acts as…", o: ["A base (proton acceptor)", "An acid (proton donor)", "An oxidising agent", "A catalyst"], a: 0, e: "" }
  ]
});

CHEM.add({
  id: "2h", group: 2, title: "Chemical tests",
  summary: "Tests for gases, cations (flame tests and NaOH), anions and water.",
  notes: `
<h3>Tests for gases</h3>
<table>
<tr><th>Gas</th><th>Test</th><th>Positive result</th></tr>
<tr><td>Hydrogen, H<sub>2</sub></td><td>Lit splint</td><td>Squeaky pop</td></tr>
<tr><td>Oxygen, O<sub>2</sub></td><td>Glowing splint</td><td>Relights</td></tr>
<tr><td>Carbon dioxide, CO<sub>2</sub></td><td>Bubble through limewater</td><td>Limewater turns milky/cloudy</td></tr>
<tr><td>Ammonia, NH<sub>3</sub></td><td>Damp red litmus paper</td><td>Turns blue</td></tr>
<tr><td>Chlorine, Cl<sub>2</sub></td><td>Damp blue litmus paper</td><td>Turns red, then is bleached white</td></tr>
</table>
<h3>Flame tests (cations)</h3>
<p>Dip a clean nichrome or platinum wire, cleaned with concentrated HCl, into the sample and hold it in a blue Bunsen flame.</p>
<table>
<tr><th>Ion</th><th>Flame colour</th></tr>
<tr><td>Li<sup>+</sup></td><td>Red (crimson)</td></tr>
<tr><td>Na<sup>+</sup></td><td>Yellow</td></tr>
<tr><td>K<sup>+</sup></td><td>Lilac</td></tr>
<tr><td>Ca<sup>2+</sup></td><td>Orange-red</td></tr>
<tr><td>Cu<sup>2+</sup></td><td>Blue-green</td></tr>
</table>
<h3>Sodium hydroxide test (cations)</h3>
<p>Add a few drops of dilute NaOH solution.</p>
<table>
<tr><th>Ion</th><th>Result</th></tr>
<tr><td>NH<sub>4</sub><sup>+</sup></td><td>Warm it: ammonia gas is given off and turns damp red litmus blue</td></tr>
<tr><td>Cu<sup>2+</sup></td><td>Blue precipitate (Cu(OH)<sub>2</sub>)</td></tr>
<tr><td>Fe<sup>2+</sup></td><td>Green precipitate (Fe(OH)<sub>2</sub>)</td></tr>
<tr><td>Fe<sup>3+</sup></td><td>Brown precipitate (Fe(OH)<sub>3</sub>)</td></tr>
</table>
<div class="eq">Cu<sup>2+</sup>(aq) + 2OH<sup>−</sup>(aq) → Cu(OH)<sub>2</sub>(s)</div>
<h3>Tests for anions</h3>
<table>
<tr><th>Ion</th><th>Test</th><th>Result</th></tr>
<tr><td>Cl<sup>−</sup></td><td rowspan="3">Add dilute nitric acid, then silver nitrate solution</td><td>White precipitate (AgCl)</td></tr>
<tr><td>Br<sup>−</sup></td><td>Cream precipitate (AgBr)</td></tr>
<tr><td>I<sup>−</sup></td><td>Yellow precipitate (AgI)</td></tr>
<tr><td>SO<sub>4</sub><sup>2−</sup></td><td>Add dilute hydrochloric acid, then barium chloride solution</td><td>White precipitate (BaSO<sub>4</sub>)</td></tr>
<tr><td>CO<sub>3</sub><sup>2−</sup></td><td>Add dilute acid; bubble the gas through limewater</td><td>Fizzing; limewater turns milky</td></tr>
</table>
<p>The acid is added first to remove carbonate ions, which would also form a precipitate. Use nitric acid with silver nitrate, not HCl, because HCl would add chloride ions.</p>
<h3>Testing for water</h3>
<ul>
<li><b>Presence of water:</b> anhydrous copper(II) sulfate turns from <b>white to blue</b>. Blue cobalt chloride paper turns pink.</li>
<li><b>Purity of water:</b> pure water boils at exactly <b>100 °C</b> and freezes at 0 °C.</li>
</ul>
`,
  flashcards: [
    ["Test for hydrogen", "Lit splint gives a squeaky pop"],
    ["Test for oxygen", "Relights a glowing splint"],
    ["Test for carbon dioxide", "Turns limewater milky"],
    ["Test for ammonia", "Turns damp red litmus paper blue"],
    ["Test for chlorine", "Bleaches damp blue litmus paper (red, then white)"],
    ["Flame colour: lithium", "Red"],
    ["Flame colour: sodium", "Yellow"],
    ["Flame colour: potassium", "Lilac"],
    ["Flame colour: calcium", "Orange-red"],
    ["Flame colour: copper(II)", "Blue-green"],
    ["NaOH + Fe<sup>2+</sup>", "Green precipitate"],
    ["NaOH + Fe<sup>3+</sup>", "Brown precipitate"],
    ["NaOH + Cu<sup>2+</sup>", "Blue precipitate"],
    ["Test for halide ions", "Add dilute HNO<sub>3</sub> then AgNO<sub>3</sub>(aq): Cl<sup>−</sup> white, Br<sup>−</sup> cream, I<sup>−</sup> yellow"],
    ["Test for sulfate ions", "Add dilute HCl then BaCl<sub>2</sub>(aq): white precipitate"],
    ["Test for water", "Anhydrous copper(II) sulfate turns white → blue"]
  ],
  quiz: [
    { q: "A solution gives a brown precipitate with NaOH(aq). Which ion is present?", o: ["Fe<sup>3+</sup>", "Fe<sup>2+</sup>", "Cu<sup>2+</sup>", "NH<sub>4</sub><sup>+</sup>"], a: 0, e: "" },
    { q: "Which ion gives a lilac flame?", o: ["K<sup>+</sup>", "Na<sup>+</sup>", "Li<sup>+</sup>", "Ca<sup>2+</sup>"], a: 0, e: "" },
    { q: "Adding acidified AgNO<sub>3</sub> gives a cream precipitate. Which ion is present?", o: ["Bromide", "Chloride", "Iodide", "Sulfate"], a: 0, e: "" },
    { q: "Which gas turns damp red litmus blue?", o: ["Ammonia", "Chlorine", "Carbon dioxide", "Hydrogen"], a: 0, e: "" },
    { q: "Why is dilute HCl added before barium chloride in the sulfate test?", o: ["To remove carbonate ions that would also give a precipitate", "To provide chloride ions", "To speed it up", "To dissolve the precipitate"], a: 0, e: "" },
    { q: "How can you show that a liquid is pure water?", o: ["It boils at exactly 100 °C", "It turns anhydrous copper sulfate blue", "It is colourless", "It has pH 7"], a: 0, e: "Copper sulfate only shows water is present, not that it is pure." },
    { q: "Which test would identify NH<sub>4</sub><sup>+</sup> ions?", o: ["Warm with NaOH(aq) and test the gas with damp red litmus", "Flame test", "Add AgNO<sub>3</sub>", "Add BaCl<sub>2</sub>"], a: 0, e: "" },
    { q: "What colour flame does Cu<sup>2+</sup> give?", o: ["Blue-green", "Red", "Yellow", "Lilac"], a: 0, e: "" },
    { q: "Why is nitric acid (not HCl) used in the halide test?", o: ["HCl would add chloride ions", "Nitric acid is stronger", "HCl reacts with silver", "Nitric acid makes the precipitate whiter"], a: 0, e: "" }
  ]
});
