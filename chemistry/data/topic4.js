/* Topic 4 — Organic chemistry (Edexcel IGCSE 4CH1) */

CHEM.add({
  id: "4a", group: 4, title: "Introduction to organic chemistry",
  summary: "Hydrocarbons, homologous series, types of formulae, naming and isomers.",
  notes: R`
<h3>Key terms</h3>
<ul>
<li><b>Hydrocarbon</b>: a compound of <b>hydrogen and carbon only</b>.</li>
<li><b>Homologous series</b>: a family of compounds that
 <ul><li>have the same <b>general formula</b></li>
 <li>differ by CH<sub>2</sub> from one member to the next</li>
 <li>have the same <b>functional group</b>, so similar chemical properties</li>
 <li>show a <b>trend</b> in physical properties, e.g. boiling point increases with chain length</li></ul></li>
<li><b>Functional group</b>: the atom or group of atoms that decides how the compound reacts.</li>
</ul>
<h3>Types of formula (using butane as the example)</h3>
<table>
<tr><th>Type</th><th>Example</th></tr>
<tr><td>Molecular</td><td>C<sub>4</sub>H<sub>10</sub></td></tr>
<tr><td>Empirical</td><td>C<sub>2</sub>H<sub>5</sub></td></tr>
<tr><td>General (alkanes)</td><td>C<sub>n</sub>H<sub>2n+2</sub></td></tr>
<tr><td>Structural</td><td>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub></td></tr>
<tr><td>Displayed</td><td>Shows every atom and every bond</td></tr>
</table>
<h3>Naming</h3>
<table>
<tr><th>Carbons</th><th>1</th><th>2</th><th>3</th><th>4</th></tr>
<tr><td>Prefix</td><td>meth-</td><td>eth-</td><td>prop-</td><td>but-</td></tr>
</table>
<table>
<tr><th>Series</th><th>Functional group</th><th>Ending</th><th>Example</th></tr>
<tr><td>Alkanes</td><td>C–C only</td><td>-ane</td><td>propane</td></tr>
<tr><td>Alkenes</td><td>C=C</td><td>-ene</td><td>but-1-ene</td></tr>
<tr><td>Alcohols</td><td>–OH</td><td>-ol</td><td>propan-1-ol</td></tr>
<tr><td>Carboxylic acids</td><td>–COOH</td><td>-oic acid</td><td>ethanoic acid</td></tr>
<tr><td>Esters</td><td>–COO–</td><td>-yl -oate</td><td>ethyl ethanoate</td></tr>
</table>
<h3>Structural isomers</h3>
<p><b>Structural isomers</b> have the <b>same molecular formula</b> but <b>different structural formulae</b>. For example, C<sub>4</sub>H<sub>10</sub> can be butane or 2-methylpropane. For alkenes, the C=C can be in different positions (but-1-ene and but-2-ene).</p>
<h3>Types of reaction</h3>
<ul>
<li><b>Substitution</b>: one atom is replaced by another (alkanes + halogens).</li>
<li><b>Addition</b>: two molecules join to make one (alkenes).</li>
<li><b>Combustion</b>: reaction with oxygen.</li>
</ul>
`,
  flashcards: [
    ["Hydrocarbon", "A compound containing hydrogen and carbon only"],
    ["Homologous series", "Compounds with the same general formula and functional group, differing by CH<sub>2</sub>, with similar chemical properties and a trend in physical properties"],
    ["Functional group", "The atom or group of atoms responsible for a compound's characteristic reactions"],
    ["Structural isomers", "Same molecular formula, different structural formula"],
    ["Prefix for 3 carbons", "prop-"],
    ["Prefix for 4 carbons", "but-"],
    ["Displayed formula", "Shows all the atoms and all the bonds"],
    ["Addition reaction", "Two molecules join together to form one product"],
    ["Substitution reaction", "An atom or group is replaced by another"]
  ],
  quiz: [
    { q: "What is the molecular formula of propane?", o: ["C<sub>3</sub>H<sub>8</sub>", "C<sub>3</sub>H<sub>6</sub>", "C<sub>3</sub>H<sub>7</sub>OH", "C<sub>4</sub>H<sub>10</sub>"], a: 0, e: R`Alkanes are C<sub>n</sub>H<sub>2n+2</sub>; with \(n = 3\): C<sub>3</sub>H<sub>8</sub>.` },
    { q: "Butane and 2-methylpropane are…", o: ["Structural isomers", "Different homologous series", "Alkenes", "Polymers"], a: 0, e: R`Both are C<sub>4</sub>H<sub>10</sub> but with different structures.` },
    { q: "What is the empirical formula of C<sub>4</sub>H<sub>10</sub>?", o: ["C<sub>2</sub>H<sub>5</sub>", "CH<sub>2</sub>", "C<sub>4</sub>H<sub>10</sub>", "CH<sub>3</sub>"], a: 0, e: R`Divide by 2: C<sub>2</sub>H<sub>5</sub>.` },
    { q: "Which is NOT true of a homologous series?", o: ["Members have identical boiling points", "Same general formula", "Similar chemical properties", "Same functional group"], a: 0, e: "Boiling points show a trend." },
    { q: "What is the functional group of an alcohol?", o: ["–OH", "C=C", "–COOH", "–COO–"], a: 0, e: R`The hydroxyl group defines an alcohol.` },
    { q: "Ethene + bromine → dibromoethane is what type of reaction?", o: ["Addition", "Substitution", "Combustion", "Cracking"], a: 0, e: R`Two molecules join to make one product.` },
    { q: "Consecutive members of a homologous series differ by…", o: ["CH<sub>2</sub>", "CH<sub>3</sub>", "C<sub>2</sub>H<sub>4</sub>", "H<sub>2</sub>"], a: 0, e: R`Each member has one more CH<sub>2</sub> unit.` }
  ]
});

CHEM.add({
  id: "4b", group: 4, title: "Crude oil",
  summary: "Fractional distillation, fractions and uses, combustion pollutants and cracking.",
  notes: R`
<h3>Crude oil</h3>
<p>Crude oil is a <b>mixture of hydrocarbons</b>, mostly alkanes, with different chain lengths. It is a finite (non-renewable) resource.</p>
<h3>Fractional distillation</h3>
<ol>
<li>Crude oil is heated until it vaporises and enters the fractionating column.</li>
<li>The column is <b>hot at the bottom and cooler at the top</b>.</li>
<li>The vapours rise and each fraction <b>condenses</b> at the height where the temperature is just below its boiling point.</li>
<li>Short-chain molecules have low boiling points and leave at the top. Long-chain molecules leave at the bottom.</li>
</ol>
<table>
<tr><th>Fraction (top → bottom)</th><th>Use</th></tr>
<tr><td>Refinery gases</td><td>Bottled gas for heating and cooking</td></tr>
<tr><td>Gasoline (petrol)</td><td>Fuel for cars</td></tr>
<tr><td>Kerosene</td><td>Fuel for aircraft</td></tr>
<tr><td>Diesel</td><td>Fuel for cars, lorries and trains</td></tr>
<tr><td>Fuel oil</td><td>Fuel for ships and power stations</td></tr>
<tr><td>Bitumen</td><td>Road surfaces and roofing</td></tr>
</table>
<p>Going <b>down</b> the column, chain length increases, which means: <b>higher boiling point</b>, <b>darker colour</b>, <b>more viscous</b> (thicker) and <b>harder to ignite</b>.</p>
<h3>Combustion</h3>
<ul>
<li><b>Complete combustion</b> (plenty of oxygen) gives carbon dioxide + water.</li>
<li><b>Incomplete combustion</b> (limited oxygen) gives <b>carbon monoxide</b> and/or carbon (soot) + water.</li>
</ul>
<div class="eq">CH<sub>4</sub> + 2O<sub>2</sub> → CO<sub>2</sub> + 2H<sub>2</sub>O &nbsp;&nbsp; 2CH<sub>4</sub> + 3O<sub>2</sub> → 2CO + 4H<sub>2</sub>O</div>
<ul>
<li><b>Carbon monoxide is toxic.</b> It combines with <b>haemoglobin</b> in the blood and reduces its capacity to carry oxygen. It is colourless and odourless.</li>
<li><b>Sulfur dioxide</b> forms when fuels with sulfur impurities burn. It dissolves in rain to form <b>acid rain</b>, which damages buildings, kills fish and harms trees.</li>
<li><b>Oxides of nitrogen</b> (NO<sub>x</sub>) form in car engines. At the high temperatures there, N<sub>2</sub> and O<sub>2</sub> from the air react. They also cause acid rain and smog.</li>
</ul>
<h3>Cracking</h3>
<ul>
<li>Cracking breaks <b>long-chain alkanes</b> into <b>shorter alkanes and alkenes</b>.</li>
<li>Conditions: a <b>catalyst</b> of silica (SiO<sub>2</sub>) or alumina (Al<sub>2</sub>O<sub>3</sub>) at about <b>600–700 °C</b>.</li>
<li>Why: there is more long-chain fuel than people need, and more demand for short-chain fuels like petrol. Alkenes are also needed to make polymers.</li>
</ul>
<div class="eq">C<sub>10</sub>H<sub>22</sub> → C<sub>8</sub>H<sub>18</sub> + C<sub>2</sub>H<sub>4</sub></div>
`,
  flashcards: [
    ["Crude oil", "A mixture of hydrocarbons"],
    ["Use of kerosene", "Aircraft fuel"],
    ["Use of bitumen", "Road surfaces and roofing"],
    ["Use of fuel oil", "Ships and power stations"],
    ["Use of refinery gases", "Bottled gas for heating/cooking"],
    ["Trend going down the column", "Longer chains: higher boiling point, darker, more viscous, harder to ignite"],
    ["Why is carbon monoxide toxic?", "It binds to haemoglobin, reducing the blood's capacity to carry oxygen"],
    ["How are oxides of nitrogen formed in engines?", "N<sub>2</sub> and O<sub>2</sub> from air react at the high temperature"],
    ["Cause of acid rain from fuels", "SO<sub>2</sub> from sulfur impurities (and NO<sub>x</sub>) dissolving in rain water"],
    ["Cracking", "Breaking long-chain alkanes into shorter alkanes and alkenes"],
    ["Conditions for cracking", "Silica or alumina catalyst, 600–700 °C"],
    ["Why crack?", "Supply of long chains exceeds demand; short chains (petrol) and alkenes (for polymers) are more useful"]
  ],
  quiz: [
    { q: "Which fraction has the highest boiling point?", o: ["Bitumen", "Refinery gases", "Gasoline", "Kerosene"], a: 0, e: R`Bitumen has the longest chains and the strongest intermolecular forces.` },
    { q: "Which fraction is used as aircraft fuel?", o: ["Kerosene", "Diesel", "Fuel oil", "Bitumen"], a: 0, e: R`Kerosene is jet fuel; petrol is for cars; diesel for lorries.` },
    { q: "Why does carbon monoxide form in a faulty boiler?", o: ["Incomplete combustion from a lack of oxygen", "Too much oxygen", "Sulfur impurities", "High pressure"], a: 0, e: R`Without enough oxygen, carbon is only partly oxidised.` },
    { q: "Why is CO dangerous?", o: ["It reduces the blood's ability to carry oxygen", "It causes acid rain", "It is a greenhouse gas", "It is flammable"], a: 0, e: R`It binds to haemoglobin in place of oxygen.` },
    { q: "Complete the cracking equation: C<sub>12</sub>H<sub>26</sub> → C<sub>8</sub>H<sub>18</sub> + ?", o: ["2C<sub>2</sub>H<sub>4</sub>", "C<sub>4</sub>H<sub>10</sub>", "C<sub>2</sub>H<sub>6</sub>", "C<sub>4</sub>H<sub>6</sub>"], a: 0, e: "C<sub>4</sub>H<sub>8</sub> remains, which is 2 × C<sub>2</sub>H<sub>4</sub>." },
    { q: "Which catalyst is used in cracking?", o: ["Silica or alumina", "Iron", "Nickel", "Yeast"], a: 0, e: R`A hot catalyst of silica or alumina breaks long chains.` },
    { q: "Fractions at the top of the column are…", o: ["Short-chain, low boiling point, easily ignited", "Long-chain and viscous", "Dark in colour", "Solids"], a: 0, e: R`Small molecules have weak intermolecular forces, so they boil low and rise highest.` },
    { q: "Where do oxides of nitrogen in car exhausts come from?", o: ["Nitrogen and oxygen from the air reacting at high temperature", "Nitrogen in petrol", "Incomplete combustion", "The catalytic converter"], a: 0, e: R`The engine is hot enough for N<sub>2</sub> and O<sub>2</sub> from the air to react.` }
  ]
});

CHEM.add({
  id: "4c", group: 4, title: "Alkanes",
  summary: "Saturated hydrocarbons, combustion and substitution with bromine.",
  notes: R`
<h3>Alkanes</h3>
<ul>
<li>General formula <b>C<sub>n</sub>H<sub>2n+2</sub></b></li>
<li><b>Saturated</b>: they contain only single C–C bonds.</li>
<li>Methane CH<sub>4</sub>, ethane C<sub>2</sub>H<sub>6</sub>, propane C<sub>3</sub>H<sub>8</sub>, butane C<sub>4</sub>H<sub>10</sub>.</li>
<li>Generally unreactive apart from combustion. They are used as fuels.</li>
</ul>
<h3>Substitution with halogens</h3>
<p>Alkanes react with bromine in the presence of <b>ultraviolet (UV) light</b>. A hydrogen atom is <b>substituted</b> by a bromine atom.</p>
<div class="eq">CH<sub>4</sub> + Br<sub>2</sub> → CH<sub>3</sub>Br + HBr &nbsp; (UV light)</div>
<p>The product CH<sub>3</sub>Br is bromomethane. Further substitution can happen.</p>
<div class="box box-tip"><span class="box-title">Exam tip</span>Alkanes don't decolourise bromine water in the dark. That is how you tell them apart from alkenes.</div>
`,
  flashcards: [
    ["General formula of alkanes", "C<sub>n</sub>H<sub>2n+2</sub>"],
    ["Saturated", "Contains only single carbon–carbon bonds"],
    ["Condition for alkane + bromine", "Ultraviolet (UV) light"],
    ["Methane + bromine", "CH<sub>4</sub> + Br<sub>2</sub> → CH<sub>3</sub>Br + HBr (substitution)"],
    ["Formula of pentane", "C<sub>5</sub>H<sub>12</sub>"]
  ],
  quiz: [
    { q: "Which is an alkane?", o: ["C<sub>5</sub>H<sub>12</sub>", "C<sub>5</sub>H<sub>10</sub>", "C<sub>2</sub>H<sub>4</sub>", "C<sub>3</sub>H<sub>6</sub>"], a: 0, e: "It fits C<sub>n</sub>H<sub>2n+2</sub>." },
    { q: "What condition is needed for methane to react with bromine?", o: ["UV light", "A nickel catalyst", "Concentrated H<sub>2</sub>SO<sub>4</sub>", "Yeast"], a: 0, e: R`Ultraviolet light provides the energy to start the reaction.` },
    { q: "Methane + bromine is what type of reaction?", o: ["Substitution", "Addition", "Polymerisation", "Cracking"], a: 0, e: R`A hydrogen atom is replaced by a bromine atom.` },
    { q: "Ethane + Br<sub>2</sub> (UV) → C<sub>2</sub>H<sub>5</sub>Br + ?", o: ["HBr", "H<sub>2</sub>", "Br<sub>2</sub>", "H<sub>2</sub>O"], a: 0, e: R`The H atom that's replaced joins the other Br to form HBr.` },
    { q: "Why are alkanes described as saturated?", o: ["They only have single C–C bonds", "They are full of water", "They have a C=C bond", "They dissolve in water"], a: 0, e: R`Every carbon has the maximum number of hydrogens bonded.` }
  ]
});

CHEM.add({
  id: "4d", group: 4, title: "Alkenes",
  summary: "Unsaturated hydrocarbons, the C=C bond and the bromine water test.",
  notes: R`
<h3>Alkenes</h3>
<ul>
<li>General formula <b>C<sub>n</sub>H<sub>2n</sub></b></li>
<li>Functional group: the carbon–carbon double bond, <b>C=C</b>.</li>
<li><b>Unsaturated</b>: they contain a C=C double bond.</li>
<li>Ethene C<sub>2</sub>H<sub>4</sub>, propene C<sub>3</sub>H<sub>6</sub>, butene C<sub>4</sub>H<sub>8</sub> (but-1-ene and but-2-ene are isomers).</li>
</ul>
<h3>Addition with bromine</h3>
<div class="eq">CH<sub>2</sub>=CH<sub>2</sub> + Br<sub>2</sub> → CH<sub>2</sub>BrCH<sub>2</sub>Br &nbsp; (1,2-dibromoethane)</div>
<div class="box box-key"><span class="box-title">Test for alkenes</span>Shake with <b>bromine water</b>. An alkene turns it from <b>orange to colourless</b>. An alkane leaves it orange.</div>
<p>Alkenes are more reactive than alkanes because of the C=C bond. They are used to make polymers.</p>
`,
  flashcards: [
    ["General formula of alkenes", "C<sub>n</sub>H<sub>2n</sub>"],
    ["Functional group of alkenes", "C=C double bond"],
    ["Unsaturated", "Contains a C=C double bond"],
    ["Test for an alkene", "Bromine water turns from orange to colourless"],
    ["Product of ethene + bromine", "1,2-dibromoethane, CH<sub>2</sub>BrCH<sub>2</sub>Br"],
    ["Two isomers of butene", "But-1-ene and but-2-ene"]
  ],
  quiz: [
    { q: "Which turns bromine water colourless?", o: ["Propene", "Propane", "Methane", "Ethane"], a: 0, e: R`Alkenes have \(a C = C\) bond that bromine adds across.` },
    { q: "What is the formula of butene?", o: ["C<sub>4</sub>H<sub>8</sub>", "C<sub>4</sub>H<sub>10</sub>", "C<sub>4</sub>H<sub>6</sub>", "C<sub>3</sub>H<sub>6</sub>"], a: 0, e: R`Alkenes are C<sub>n</sub>H<sub>2n</sub>; with \(n = 4\): C<sub>4</sub>H<sub>8</sub>.` },
    { q: "Ethene + bromine is what type of reaction?", o: ["Addition", "Substitution", "Combustion", "Neutralisation"], a: 0, e: R`Bromine adds across the double bond to form one product.` },
    { q: "What colour change shows an alkene is present?", o: ["Orange → colourless", "Colourless → orange", "Blue → green", "Purple → colourless"], a: 0, e: R`Orange bromine water is decolourised by an alkene.` },
    { q: "What does 'unsaturated' mean?", o: ["Contains a C=C double bond", "Contains only single bonds", "Contains oxygen", "Is a polymer"], a: 0, e: R`Unsaturated compounds can still add more atoms across the double bond.` },
    { q: "What is the product of propene + Br<sub>2</sub>?", o: ["1,2-dibromopropane", "Bromopropane + HBr", "Propanol", "Poly(propene)"], a: 0, e: R`A Br atom adds to each carbon of the double bond, on carbons 1 and 2.` }
  ]
});

CHEM.add({
  id: "4e", group: 4, title: "Alcohols", paper2: true,
  summary: "Ethanol: combustion, oxidation and manufacture by fermentation or hydration.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Alcohols</h3>
<ul>
<li>Functional group <b>–OH</b>. General formula C<sub>n</sub>H<sub>2n+1</sub>OH.</li>
<li>Methanol CH<sub>3</sub>OH, ethanol C<sub>2</sub>H<sub>5</sub>OH, propanol C<sub>3</sub>H<sub>7</sub>OH, butanol C<sub>4</sub>H<sub>9</sub>OH.</li>
</ul>
<h3>Reactions of ethanol</h3>
<ul>
<li><b>Combustion:</b> C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O</li>
<li><b>Oxidation to ethanoic acid:</b>
 <ul><li>by <b>microbial oxidation</b>, where bacteria turn wine sour (vinegar)</li>
 <li>by heating with <b>acidified potassium dichromate(VI)</b>, which turns from <b>orange to green</b></li></ul></li>
</ul>
<h3>Making ethanol</h3>
<table>
<tr><th></th><th>Fermentation</th><th>Hydration of ethene</th></tr>
<tr><td>Equation</td><td>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub></td><td>C<sub>2</sub>H<sub>4</sub> + H<sub>2</sub>O → C<sub>2</sub>H<sub>5</sub>OH</td></tr>
<tr><td>Conditions</td><td>Yeast, about 30 °C, <b>no oxygen</b> (anaerobic)</td><td>Steam, about 300 °C, 60–70 atm, phosphoric acid catalyst</td></tr>
<tr><td>Raw material</td><td>Sugar from crops: <b>renewable</b></td><td>Ethene from crude oil: <b>non-renewable</b></td></tr>
<tr><td>Rate / purity</td><td>Slow, batch process, impure (about 15% ethanol; must be distilled)</td><td>Fast, continuous, pure product</td></tr>
<tr><td>Energy</td><td>Low temperature, so less energy</td><td>High energy cost</td></tr>
</table>
<p>Why the fermentation conditions matter: if it is too hot, the yeast enzymes are <b>denatured</b>. If oxygen is present, ethanol is oxidised to ethanoic acid.</p>
`,
  flashcards: [
    ["Functional group of alcohols", "–OH (hydroxyl)"],
    ["Fermentation equation", "C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> → 2C<sub>2</sub>H<sub>5</sub>OH + 2CO<sub>2</sub>"],
    ["Conditions for fermentation", "Yeast, about 30 °C, absence of air"],
    ["Conditions for hydration of ethene", "Steam, 300 °C, 60–70 atm, phosphoric acid catalyst"],
    ["Advantage of fermentation", "Uses renewable sugar, low energy"],
    ["Advantage of hydration of ethene", "Fast, continuous and gives pure ethanol"],
    ["Oxidising ethanol in the lab", "Heat with acidified potassium dichromate(VI): orange → green, forms ethanoic acid"],
    ["Combustion of ethanol", "C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O"],
    ["Why exclude air in fermentation?", "Oxygen would oxidise ethanol to ethanoic acid"]
  ],
  quiz: [
    { q: "Which catalyst is used for the hydration of ethene?", o: ["Phosphoric acid", "Yeast", "Iron", "Silica"], a: 0, e: R`Ethene + steam → ethanol, at 300 °C, 60–70 atm with a phosphoric acid catalyst.` },
    { q: "Why is fermentation kept at about 30 °C?", o: ["Higher temperatures denature the yeast enzymes", "Ethanol boils at 30 °C", "So the reaction is exothermic", "To kill bacteria"], a: 0, e: R`Too hot denatures the enzymes; too cold is too slow.` },
    { q: "What colour change happens when ethanol is oxidised by acidified potassium dichromate(VI)?", o: ["Orange → green", "Green → orange", "Purple → colourless", "Blue → white"], a: 0, e: R`Dichromate(VI) is reduced as the ethanol is oxidised.` },
    { q: "Which is an advantage of hydration over fermentation?", o: ["Pure product made quickly", "Renewable raw material", "Low temperature", "Uses yeast"], a: 0, e: R`It's continuous, fast and gives nearly pure ethanol, but uses crude oil.` },
    { q: "What is the product when ethanol is oxidised?", o: ["Ethanoic acid", "Ethene", "Ethyl ethanoate", "Ethane"], a: 0, e: R`Oxidation turns the alcohol group into a carboxylic acid.` },
    { q: "How many moles of O<sub>2</sub> are needed to burn 1 mol of ethanol completely?", o: ["3", "2", "3.5", "1"], a: 0, e: R`C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O.` },
    { q: "Why is air excluded during fermentation?", o: ["To stop ethanol being oxidised to ethanoic acid", "To keep it cool", "To speed up yeast", "To remove CO<sub>2</sub>"], a: 0, e: R`Air lets bacteria oxidise the ethanol to vinegar.` }
  ]
});

CHEM.add({
  id: "4f", group: 4, title: "Carboxylic acids", paper2: true,
  summary: "The –COOH group, naming, and reactions as weak acids.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Carboxylic acids</h3>
<ul>
<li>Functional group <b>–COOH</b>.</li>
<li>Methanoic acid HCOOH, ethanoic acid CH<sub>3</sub>COOH, propanoic acid C<sub>2</sub>H<sub>5</sub>COOH, butanoic acid C<sub>3</sub>H<sub>7</sub>COOH.</li>
<li>The carbon in the COOH group is counted in the name. Ethanoic acid has 2 carbons.</li>
<li>They are <b>weak acids</b>. They only partially ionise in water, so their pH is about 3–5.</li>
</ul>
<h3>Reactions</h3>
<div class="eq">2CH<sub>3</sub>COOH + Mg → (CH<sub>3</sub>COO)<sub>2</sub>Mg + H<sub>2</sub> &nbsp; (magnesium ethanoate)</div>
<div class="eq">2CH<sub>3</sub>COOH + Na<sub>2</sub>CO<sub>3</sub> → 2CH<sub>3</sub>COONa + H<sub>2</sub>O + CO<sub>2</sub></div>
<p>They react like other acids, but more slowly: with metals they fizz (H<sub>2</sub>), and with carbonates they fizz (CO<sub>2</sub>). The salts are called <b>-oates</b>, e.g. sodium ethanoate.</p>
<p><b>Vinegar</b> is an aqueous solution of ethanoic acid.</p>
`,
  flashcards: [
    ["Functional group of carboxylic acids", "–COOH"],
    ["Formula of ethanoic acid", "CH<sub>3</sub>COOH"],
    ["Ethanoic acid + sodium carbonate", "Sodium ethanoate + water + carbon dioxide"],
    ["Carboxylic acid + metal", "Salt + hydrogen"],
    ["Vinegar", "An aqueous solution of ethanoic acid"],
    ["Why are carboxylic acids weak acids?", "They only partially ionise in water"]
  ],
  quiz: [
    { q: "What is the formula of propanoic acid?", o: ["C<sub>2</sub>H<sub>5</sub>COOH", "C<sub>3</sub>H<sub>7</sub>COOH", "CH<sub>3</sub>COOH", "C<sub>3</sub>H<sub>7</sub>OH"], a: 0, e: "3 carbons in total, including the COOH carbon." },
    { q: "Ethanoic acid + calcium carbonate produces…", o: ["Calcium ethanoate, water and CO<sub>2</sub>", "Calcium ethanoate and hydrogen", "Ethyl ethanoate", "Calcium hydroxide"], a: 0, e: R`Acid + carbonate → salt + water + carbon dioxide.` },
    { q: "Vinegar contains…", o: ["Ethanoic acid", "Methanoic acid", "Ethanol", "Hydrochloric acid"], a: 0, e: R`Vinegar is a dilute solution of ethanoic acid.` },
    { q: "What is the salt formed from ethanoic acid and sodium hydroxide?", o: ["Sodium ethanoate", "Sodium ethanol", "Ethyl sodium", "Sodium carbonate"], a: 0, e: R`Ethanoic acid gives ethanoate salts.` },
    { q: "Why does ethanoic acid react more slowly with Mg than HCl of the same concentration does?", o: ["It is a weak acid with fewer H<sup>+</sup> ions", "It is a strong acid", "It has no H<sup>+</sup>", "Mg is unreactive"], a: 0, e: R`Weak acids only partly ionise, so there's a lower H<sup>+</sup> concentration.` }
  ]
});

CHEM.add({
  id: "4g", group: 4, title: "Esters", paper2: true,
  summary: "Esterification, naming esters and their uses.",
  notes: R`
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Esters</h3>
<ul>
<li>Functional group <b>–COO–</b>.</li>
<li>Made by reacting an <b>alcohol with a carboxylic acid</b>, using a <b>concentrated sulfuric acid</b> catalyst. Water is also formed.</li>
</ul>
<div class="eq">CH<sub>3</sub>COOH + C<sub>2</sub>H<sub>5</sub>OH ⇌ CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub> + H<sub>2</sub>O</div>
<p>Ethanoic acid + ethanol ⇌ <b>ethyl ethanoate</b> + water</p>
<h3>Naming esters</h3>
<p>The <b>alcohol</b> part comes first and becomes "-yl". The <b>acid</b> part comes second and becomes "-oate".</p>
<ul>
<li>Methanol + propanoic acid → methyl propanoate</li>
<li>Propanol + ethanoic acid → propyl ethanoate</li>
</ul>
<h3>Properties and uses</h3>
<ul>
<li>Volatile, with distinctive sweet, fruity smells.</li>
<li>Used as <b>food flavourings</b> and in <b>perfumes</b>.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: prepare a sample of an ester (e.g. ethyl ethanoate)</span>
<ol>
<li>Mix ethanol and ethanoic acid in a test tube.</li>
<li>Add a few drops of concentrated sulfuric acid (catalyst).</li>
<li>Warm gently in a water bath for a few minutes.</li>
<li>Pour into sodium carbonate solution to neutralise the acid. The ester forms a layer on top, and you can smell its sweet odour.</li>
</ol></div>
`,
  flashcards: [
    ["Functional group of esters", "–COO–"],
    ["Alcohol + carboxylic acid", "Ester + water (concentrated H<sub>2</sub>SO<sub>4</sub> catalyst)"],
    ["Ethanol + ethanoic acid", "Ethyl ethanoate + water"],
    ["Uses of esters", "Food flavourings and perfumes"],
    ["Name: methanol + ethanoic acid ester", "Methyl ethanoate"],
    ["Catalyst for making esters", "Concentrated sulfuric acid"]
  ],
  quiz: [
    { q: "Which ester forms from propanol and methanoic acid?", o: ["Propyl methanoate", "Methyl propanoate", "Propyl propanoate", "Methyl methanoate"], a: 0, e: "Alcohol → -yl first; acid → -oate second." },
    { q: "What is the catalyst for esterification?", o: ["Concentrated sulfuric acid", "Yeast", "Phosphoric acid", "Nickel"], a: 0, e: R`Concentrated H<sub>2</sub>SO<sub>4</sub> speeds up the reaction.` },
    { q: "Esters are used in…", o: ["Perfumes and flavourings", "Fuels for ships", "Fertilisers", "Road surfaces"], a: 0, e: R`Esters are volatile with fruity smells.` },
    { q: "What is the other product of esterification?", o: ["Water", "Hydrogen", "Carbon dioxide", "Oxygen"], a: 0, e: R`Alcohol + carboxylic acid → ester + water.` },
    { q: "Which is ethyl ethanoate?", o: ["CH<sub>3</sub>COOC<sub>2</sub>H<sub>5</sub>", "C<sub>2</sub>H<sub>5</sub>COOCH<sub>3</sub>", "CH<sub>3</sub>COOH", "C<sub>2</sub>H<sub>5</sub>OH"], a: 0, e: R`It's made from ethanoic acid and ethanol.` }
  ]
});

CHEM.add({
  id: "4h", group: 4, title: "Synthetic polymers",
  summary: "Addition polymers, uses, disposal problems and condensation polymers.",
  notes: R`
<h3>Addition polymerisation</h3>
<ul>
<li>Many small <b>monomers</b> containing C=C join to form a long-chain <b>polymer</b>. Nothing else is produced.</li>
<li>The double bond opens up and the monomers link together.</li>
</ul>
<div class="eq">n CH<sub>2</sub>=CH<sub>2</sub> → –[CH<sub>2</sub>–CH<sub>2</sub>]<sub>n</sub>– &nbsp; (ethene → poly(ethene))</div>
<p><b>Drawing the repeat unit:</b> draw the monomer with a single C–C bond, add bonds sticking out of each side through square brackets, and write n after the bracket.</p>
<p><b>Working backwards:</b> take the 2-carbon repeat unit and put the C=C back to get the monomer.</p>
<table>
<tr><th>Polymer</th><th>Monomer</th><th>Uses</th></tr>
<tr><td>Poly(ethene)</td><td>Ethene</td><td>Plastic bags, bottles</td></tr>
<tr><td>Poly(propene)</td><td>Propene</td><td>Crates, ropes</td></tr>
<tr><td>Poly(chloroethene) (PVC)</td><td>Chloroethene</td><td>Water pipes, electrical insulation, window frames</td></tr>
<tr><td>PTFE, poly(tetrafluoroethene)</td><td>Tetrafluoroethene</td><td>Non-stick pan coatings</td></tr>
</table>
<h3>Problems with disposal</h3>
<ul>
<li>Addition polymers are <b>inert</b>, so they are <b>non-biodegradable</b> and last for many years in landfill.</li>
<li>Burning them can release <b>toxic gases</b>, e.g. HCl from PVC, or CO from incomplete combustion.</li>
<li>Recycling and reducing use are better options.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: condensation polymers</span>
<ul>
<li>Condensation polymerisation makes a polymer <b>and a small molecule, usually water</b>.</li>
<li>Monomers have <b>two functional groups</b> each, e.g. a <b>dicarboxylic acid</b> (HOOC–□–COOH) and a <b>diol</b> (HO–□–OH).</li>
<li>They join by <b>ester links</b> (–COO–) to form a <b>polyester</b>. Two monomers lose one water molecule at each link.</li>
<li><b>Biopolyesters</b> are biodegradable.</li>
</ul>
<div class="eq">n HOOC–□–COOH + n HO–□–OH → –[OC–□–COO–□–O]<sub>n</sub>– + 2n H<sub>2</sub>O</div></div>
`,
  flashcards: [
    ["Addition polymerisation", "Monomers with C=C join to form a polymer only"],
    ["Monomer of PVC", "Chloroethene, CH<sub>2</sub>=CHCl"],
    ["Use of poly(propene)", "Crates and ropes"],
    ["Use of PTFE", "Non-stick coatings on pans"],
    ["Why are addition polymers hard to dispose of?", "They are inert and non-biodegradable; burning gives toxic gases"],
    ["Condensation polymerisation", "Monomers join, forming a polymer and a small molecule (usually water)"],
    ["Monomers for a polyester", "A dicarboxylic acid and a diol"],
    ["Biopolyesters", "Biodegradable polyesters"]
  ],
  quiz: [
    { q: "Which monomer makes poly(propene)?", o: ["CH<sub>2</sub>=CHCH<sub>3</sub>", "CH<sub>2</sub>=CH<sub>2</sub>", "CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub>", "CH<sub>2</sub>=CHCl"], a: 0, e: R`Propene is CH<sub>2</sub>=CHCH<sub>3</sub>.` },
    { q: "Why are poly(alkenes) non-biodegradable?", o: ["They are unreactive (inert)", "They contain C=C bonds", "They are soluble", "They are ionic"], a: 0, e: R`Their strong C–C and C–H bonds aren't broken down by microbes.` },
    { q: "Which toxic gas can form when PVC burns?", o: ["Hydrogen chloride", "Chlorine dioxide", "Ammonia", "Methane"], a: 0, e: R`PVC contains chlorine.` },
    { q: "What else forms in condensation polymerisation to make a polyester?", o: ["Water", "Hydrogen", "Carbon dioxide", "Nothing"], a: 0, e: R`Each link releases a small molecule, here water.` },
    { q: "A polyester is made from…", o: ["A diol and a dicarboxylic acid", "Ethene", "Two alkenes", "An alcohol and an alkane"], a: 0, e: R`Two different monomers each have two functional groups.` },
    { q: "Which polymer is used for non-stick pans?", o: ["PTFE", "PVC", "Poly(ethene)", "Poly(propene)"], a: 0, e: R`PTFE is non-stick and unreactive.` },
    { q: "In addition polymerisation, which bond breaks in the monomer?", o: ["The C=C double bond", "A C–H bond", "An O–H bond", "No bonds break"], a: 0, e: R`The double bond opens up so the monomers can link into a chain.` }
  ]
});
