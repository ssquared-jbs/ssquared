/* A-level Chemistry² — Topic 6: Organic chemistry I */

S2Data.add({
  id: "6a", group: 6, y1: true, title: "Introduction to organic chemistry",
  summary: "Formulae, IUPAC naming, functional groups, structural and E/Z isomerism, reaction types and hazards.",
  notes: `
<h3>Types of formula</h3>
<table>
<tr><th>Formula</th><th>Butan-1-ol example</th></tr>
<tr><td>Molecular</td><td>C<sub>4</sub>H<sub>10</sub>O</td></tr>
<tr><td>Empirical</td><td>C<sub>4</sub>H<sub>10</sub>O</td></tr>
<tr><td>Structural</td><td>CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH</td></tr>
<tr><td>Displayed</td><td>Every atom and bond drawn</td></tr>
<tr><td>Skeletal</td><td>Zig-zag carbon chain; C and H on carbons not shown; functional groups drawn in</td></tr>
<tr><td>General</td><td>C<sub>n</sub>H<sub>2n+1</sub>OH for alcohols</td></tr>
</table>
<p>A <b>homologous series</b> has the same general formula and functional group, with each member differing by CH<sub>2</sub> and showing a trend in physical properties.</p>

<h3>IUPAC naming</h3>
<ol>
<li>Find the longest carbon chain: meth, eth, prop, but, pent, hex.</li>
<li>Identify the functional group (suffix): -ane, -ene, -ol, -al, -one, -oic acid; prefixes for halogens (chloro-, bromo-) and alkyl branches (methyl-, ethyl-).</li>
<li>Number the chain to give the functional group (then branches) the <b>lowest numbers</b>.</li>
<li>List prefixes alphabetically, with di-, tri- for repeats: e.g. 2-bromo-3-methylpentane.</li>
</ol>

<h3>Isomerism</h3>
<ul>
<li><b>Structural isomers</b>: same molecular formula, different structural formula: <b>chain</b> (different carbon skeleton), <b>position</b> (functional group in a different place) or <b>functional group</b> (e.g. propanal and propanone).</li>
<li><b>Stereoisomers</b>: same structural formula, different arrangement of atoms in space.</li>
<li><b>E/Z isomerism</b> happens because there's <b>restricted rotation about the C=C double bond</b> and each carbon of the double bond has <b>two different groups</b> attached.</li>
<li>Use <b>Cahn–Ingold–Prelog priorities</b> (higher atomic number = higher priority) on each carbon. Highest-priority groups on the same side = <b>Z</b> (zusammen); opposite sides = <b>E</b> (entgegen).</li>
<li><b>cis/trans</b> is used when there's an H on each carbon: cis = same side.</li>
</ul>

<h3>Reaction types and mechanisms</h3>
<ul>
<li><b>Addition, substitution, elimination, oxidation, reduction, hydrolysis, polymerisation</b>.</li>
<li><b>Homolytic fission</b>: each atom gets one electron → <b>radicals</b> (unpaired electron, shown with a dot).</li>
<li><b>Heterolytic fission</b>: one atom gets both electrons → ions.</li>
<li><b>Nucleophile</b>: electron-pair donor (OH<sup>−</sup>, CN<sup>−</sup>, NH<sub>3</sub>). <b>Electrophile</b>: electron-pair acceptor (H<sup>+</sup>, Br<sup>δ+</sup>).</li>
<li><b>Curly arrows</b> show the movement of a pair of electrons, starting from a bond or lone pair.</li>
</ul>
<div class="box box-key"><span class="box-title">Hazards and risks</span>A <b>hazard</b> is something that could cause harm (e.g. flammable, toxic). A <b>risk</b> is the chance of harm, reduced by control measures such as using a fume cupboard, water bath instead of a flame, or smaller quantities.</div>
`,
  quiz: [
    { q: "Name CH₃CH(CH₃)CH₂CH₃.", o: ["2-methylbutane", "3-methylbutane", "pentane", "2-ethylpropane"], a: 0, e: "" },
    { q: "Why does but-2-ene show E/Z isomerism?", o: ["Restricted rotation about C=C and two different groups on each carbon", "It has a chiral carbon", "It has a ring", "Free rotation about C=C"], a: 0, e: "" },
    { q: "Propanal and propanone are…", o: ["Functional group isomers", "Chain isomers", "Position isomers", "E/Z isomers"], a: 0, e: "" },
    { q: "Homolytic fission produces…", o: ["Radicals", "Ions", "Nucleophiles only", "Electrophiles only"], a: 0, e: "" },
    { q: "A nucleophile is…", o: ["An electron-pair donor", "An electron-pair acceptor", "A radical", "A proton"], a: 0, e: "" },
    { q: "In E/Z naming, priority is decided by…", o: ["Atomic number of the attached atom", "Mass of the whole group", "Number of hydrogens", "Bond length"], a: 0, e: "" },
    { q: "1-bromobut-2-ene: highest priority groups on opposite sides. Isomer?", o: ["E", "Z", "cis", "Neither"], a: 0, e: "" },
    { q: "Which is a correct IUPAC name?", o: ["2,3-dichloropentane", "2-chloro-3-chloropentane", "3,4-dichloropentane", "dichloro-2,3-pentane"], a: 0, e: "Lowest numbers; di- prefix." },
    { q: "A curly arrow represents…", o: ["Movement of a pair of electrons", "Movement of an atom", "A single electron", "A bond breaking homolytically"], a: 0, e: "" }
  ],
  flashcards: [
    ["Homologous series", "Same general formula and functional group; each member differs by CH₂; trend in physical properties"],
    ["Skeletal formula", "Lines for C–C bonds; C and H on carbons not shown"],
    ["Structural isomers", "Same molecular formula, different structural formula (chain, position, functional group)"],
    ["Stereoisomers", "Same structural formula, different spatial arrangement"],
    ["Conditions for E/Z isomerism", "Restricted rotation about C=C; two different groups on each C"],
    ["Z isomer", "Highest-priority groups on the same side"],
    ["E isomer", "Highest-priority groups on opposite sides"],
    ["Homolytic fission", "Bond breaks with one electron to each atom → radicals"],
    ["Heterolytic fission", "Both electrons go to one atom → ions"],
    ["Nucleophile / electrophile", "Electron-pair donor / electron-pair acceptor"],
    ["Hazard vs risk", "Hazard: potential to harm; risk: chance of harm"]
  ]
});

S2Data.add({
  id: "6b", group: 6, y1: true, title: "Alkanes",
  summary: "Fuels, combustion and pollution, cracking and reforming, and free-radical substitution.",
  notes: `
<h3>Alkanes as fuels</h3>
<ul>
<li>Saturated hydrocarbons, C<sub>n</sub>H<sub>2n+2</sub>, obtained from crude oil by <b>fractional distillation</b>.</li>
<li><b>Cracking</b> breaks long chains into shorter, more useful alkanes and alkenes (e.g. C<sub>10</sub>H<sub>22</sub> → C<sub>8</sub>H<sub>18</sub> + C<sub>2</sub>H<sub>4</sub>). Catalytic cracking uses a zeolite catalyst at about 450 °C.</li>
<li><b>Reforming</b> converts straight-chain alkanes into branched alkanes and cyclic hydrocarbons, which burn more efficiently in engines.</li>
<li>Complete combustion: alkane + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O. Incomplete combustion: CO (toxic, binds to haemoglobin) and C (soot, particulates).</li>
</ul>
<h3>Pollutants</h3>
<ul>
<li><b>NO<sub>x</sub></b>: N<sub>2</sub> and O<sub>2</sub> react at high engine temperatures → acid rain, photochemical smog.</li>
<li><b>SO<sub>2</sub></b>: from sulfur impurities → acid rain. Removed by flue-gas desulfurisation.</li>
<li><b>Unburnt hydrocarbons</b> → smog. <b>Catalytic converters</b> (Pt/Rh) remove CO, NO<sub>x</sub> and hydrocarbons: 2CO + 2NO → 2CO<sub>2</sub> + N<sub>2</sub>.</li>
<li>Carbon dioxide → climate change. <b>Biofuels</b> are considered (nearly) carbon neutral but compete with food crops for land.</li>
</ul>
<h3>Free-radical substitution</h3>
<p>Alkanes react with halogens in <b>UV light</b>, e.g. CH<sub>4</sub> + Cl<sub>2</sub> → CH<sub>3</sub>Cl + HCl.</p>
<ol>
<li><b>Initiation</b>: Cl<sub>2</sub> → 2Cl• (homolytic fission by UV)</li>
<li><b>Propagation</b>: Cl• + CH<sub>4</sub> → CH<sub>3</sub>• + HCl, then CH<sub>3</sub>• + Cl<sub>2</sub> → CH<sub>3</sub>Cl + Cl•</li>
<li><b>Termination</b>: two radicals join, e.g. Cl• + Cl• → Cl<sub>2</sub>; CH<sub>3</sub>• + Cl• → CH<sub>3</sub>Cl; CH<sub>3</sub>• + CH<sub>3</sub>• → C<sub>2</sub>H<sub>6</sub></li>
</ol>
<p>Further substitution gives a mixture (CH<sub>2</sub>Cl<sub>2</sub>, CHCl<sub>3</sub>, CCl<sub>4</sub>), so it's not a good way to make one pure product.</p>
`,
  quiz: [
    { q: "Initiation step for chlorination of methane?", o: ["Cl₂ → 2Cl•", "CH₄ → CH₃• + H•", "Cl• + CH₄ → CH₃Cl + H•", "Cl• + Cl• → Cl₂"], a: 0, e: "" },
    { q: "Which is a propagation step?", o: ["CH₃• + Cl₂ → CH₃Cl + Cl•", "Cl₂ → 2Cl•", "CH₃• + Cl• → CH₃Cl", "2CH₃• → C₂H₆"], a: 0, e: "" },
    { q: "Why is ethane found in the products of methane chlorination?", o: ["Termination: two CH₃• radicals join", "Cracking", "Propagation", "Impurities"], a: 0, e: "" },
    { q: "What does reforming do?", o: ["Converts straight chains into branched and cyclic hydrocarbons", "Breaks long chains", "Removes sulfur", "Separates fractions"], a: 0, e: "" },
    { q: "How are NOx formed in engines?", o: ["N₂ and O₂ react at high temperature", "From fuel impurities", "Incomplete combustion", "From catalytic converters"], a: 0, e: "" },
    { q: "Catalytic converters contain…", o: ["Platinum and rhodium", "Iron", "Zeolites", "Nickel"], a: 0, e: "" },
    { q: "Why is free-radical substitution a poor way to make CH₃Cl?", o: ["Further substitution gives a mixture of products", "Too slow", "Needs a catalyst", "Gives only CCl₄"], a: 0, e: "" },
    { q: "Why is CO dangerous?", o: ["Binds to haemoglobin, reducing oxygen transport", "Causes acid rain", "Greenhouse gas only", "Forms soot"], a: 0, e: "" }
  ],
  flashcards: [
    ["Cracking", "Breaking long-chain alkanes into shorter alkanes + alkenes (zeolite catalyst)"],
    ["Reforming", "Straight-chain → branched / cyclic hydrocarbons for efficient combustion"],
    ["NOx formation", "N₂ + O₂ at high engine temperatures"],
    ["Catalytic converter reaction", "2CO + 2NO → 2CO₂ + N₂ (Pt/Rh)"],
    ["Free-radical substitution conditions", "Halogen + UV light"],
    ["Initiation", "Cl₂ → 2Cl•"],
    ["Propagation (2 steps)", "Cl• + CH₄ → CH₃• + HCl; CH₃• + Cl₂ → CH₃Cl + Cl•"],
    ["Termination", "Two radicals combine, e.g. 2CH₃• → C₂H₆"],
    ["Biofuels: pro and con", "Renewable, nearly carbon neutral; use land needed for food"]
  ]
});

S2Data.add({
  id: "6c", group: 6, y1: true, title: "Alkenes",
  summary: "The C=C bond, electrophilic addition, Markovnikov's rule, test for alkenes and addition polymers.",
  notes: `
<h3>Structure</h3>
<p>Alkenes (C<sub>n</sub>H<sub>2n</sub>) are <b>unsaturated</b>. The C=C has a σ bond and a <b>π bond</b>, formed by sideways overlap of p orbitals. The π bond is a region of high electron density above and below the plane, and is weaker than the σ bond, making alkenes reactive. Bond angles around C=C are about 120° (trigonal planar).</p>
<h3>Addition reactions</h3>
<table>
<tr><th>Reagent</th><th>Conditions</th><th>Product</th></tr>
<tr><td>H<sub>2</sub></td><td>Ni catalyst, about 150 °C</td><td>Alkane (hydrogenation)</td></tr>
<tr><td>Br<sub>2</sub> or Cl<sub>2</sub></td><td>Room temperature</td><td>Dihalogenoalkane</td></tr>
<tr><td>HBr</td><td>Room temperature</td><td>Halogenoalkane</td></tr>
<tr><td>H<sub>2</sub>O (steam)</td><td>H<sub>3</sub>PO<sub>4</sub> catalyst, 300 °C, 60 atm</td><td>Alcohol</td></tr>
<tr><td>Acidified KMnO<sub>4</sub></td><td>Room temperature</td><td>Diol (purple → colourless)</td></tr>
</table>
<div class="box box-key"><span class="box-title">Test for C=C</span>Shake with <b>bromine water</b>: orange → colourless.</div>

<h3>Electrophilic addition mechanism</h3>
<p>With HBr: the H–Br bond is polar (H<sup>δ+</sup>). The π electrons attack H<sup>δ+</sup> (curly arrow from the double bond to H), and the H–Br bond breaks heterolytically (arrow to Br). A <b>carbocation</b> intermediate forms. Br<sup>−</sup> then donates a lone pair to the positive carbon.</p>
<p>With Br<sub>2</sub>: the π electrons repel electrons in Br<sub>2</sub>, inducing a dipole (Br<sup>δ+</sup>–Br<sup>δ−</sup>), and the same steps follow.</p>
<h3>Markovnikov's rule</h3>
<p>For unsymmetrical alkenes, the <b>major product</b> forms via the <b>more stable carbocation</b>. Stability: <b>tertiary &gt; secondary &gt; primary</b>, because alkyl groups are electron-releasing and stabilise the positive charge.</p>
<p>Propene + HBr → mainly 2-bromopropane (via a secondary carbocation), with a little 1-bromopropane.</p>

<h3>Addition polymers</h3>
<ul>
<li>Many monomers join; the double bonds open up. Draw the <b>repeat unit</b> in brackets with continuation bonds and n.</li>
<li>e.g. propene → poly(propene); chloroethene → PVC.</li>
<li>Disposal: <b>landfill</b> (non-biodegradable), <b>incineration</b> (energy recovery, but toxic gases like HCl from PVC, removed by scrubbing), <b>recycling</b>, use as <b>feedstock</b> for cracking. Biodegradable and photodegradable polymers are being developed.</li>
</ul>
`,
  quiz: [
    { q: "Test for an alkene?", o: ["Bromine water: orange → colourless", "Limewater turns milky", "Acidified dichromate: orange → green", "Silver nitrate"], a: 0, e: "" },
    { q: "Major product of propene + HBr?", o: ["2-bromopropane", "1-bromopropane", "1,2-dibromopropane", "propane"], a: 0, e: "Via the more stable secondary carbocation." },
    { q: "Which carbocation is most stable?", o: ["Tertiary", "Secondary", "Primary", "Methyl"], a: 0, e: "" },
    { q: "Conditions for hydrogenation of alkenes?", o: ["Ni catalyst, about 150 °C", "UV light", "Phosphoric acid, 300 °C", "Aqueous NaOH"], a: 0, e: "" },
    { q: "What type of mechanism is alkene + HBr?", o: ["Electrophilic addition", "Nucleophilic substitution", "Free-radical substitution", "Elimination"], a: 0, e: "" },
    { q: "In alkene + HBr, the first curly arrow goes from…", o: ["The C=C π bond to Hδ+", "Br⁻ to C", "H to the C=C", "The C–H bond"], a: 0, e: "" },
    { q: "Why is a π bond more reactive than a σ bond?", o: ["Electron density is exposed above and below; weaker", "It's stronger", "It's ionic", "It has fewer electrons"], a: 0, e: "" },
    { q: "Product of ethene with acidified KMnO₄?", o: ["Ethane-1,2-diol", "Ethanol", "Ethanoic acid", "Ethane"], a: 0, e: "" },
    { q: "Why is burning PVC a problem?", o: ["Releases HCl and other toxic gases", "It doesn't burn", "It produces only water", "It's biodegradable"], a: 0, e: "" }
  ],
  flashcards: [
    ["C=C double bond", "One σ bond + one π bond (sideways p overlap)"],
    ["Bromine water test", "Orange → colourless with C=C"],
    ["Hydrogenation conditions", "H₂, Ni catalyst, ~150 °C"],
    ["Hydration conditions", "Steam, H₃PO₄ catalyst, 300 °C, 60 atm"],
    ["Electrophile", "Electron-pair acceptor, e.g. Hδ+ in HBr"],
    ["Electrophilic addition steps", "π electrons attack electrophile → carbocation → nucleophile attacks carbocation"],
    ["Markovnikov's rule", "Major product forms via the most stable carbocation"],
    ["Carbocation stability", "Tertiary > secondary > primary (alkyl groups release electrons)"],
    ["Addition polymer repeat unit", "Opened C=C in brackets with continuation bonds, n"],
    ["Polymer disposal options", "Landfill, incineration (with scrubbing), recycling, feedstock"]
  ]
});

S2Data.add({
  id: "6d", group: 6, y1: true, title: "Halogenoalkanes",
  summary: "Classification, nucleophilic substitution and elimination, and rates of hydrolysis.",
  notes: `
<h3>Classification</h3>
<p><b>Primary</b>: the C–X carbon is bonded to one other carbon. <b>Secondary</b>: two. <b>Tertiary</b>: three.</p>
<h3>Reactivity</h3>
<ul>
<li>The C–X bond is polar (C<sup>δ+</sup>), so the carbon is attacked by nucleophiles.</li>
<li>Rate of hydrolysis is controlled by <b>bond enthalpy</b>, not polarity: <b>C–I &gt; C–Br &gt; C–Cl</b> (C–I is weakest, so iodoalkanes react fastest).</li>
<li>Experiment: warm halogenoalkanes with aqueous ethanolic <b>silver nitrate</b>. Water hydrolyses them, the halide ion forms, and Ag<sup>+</sup> precipitates it. Iodoalkane gives yellow AgI fastest.</li>
<li>Tertiary halogenoalkanes hydrolyse faster than primary.</li>
</ul>
<h3>Nucleophilic substitution</h3>
<table>
<tr><th>Nucleophile</th><th>Conditions</th><th>Product</th></tr>
<tr><td>OH<sup>−</sup> (aq NaOH/KOH)</td><td>Heat under reflux, aqueous</td><td>Alcohol</td></tr>
<tr><td>H<sub>2</sub>O</td><td>Warm (slow)</td><td>Alcohol</td></tr>
<tr><td>CN<sup>−</sup> (KCN)</td><td>Ethanol, reflux</td><td>Nitrile (chain + 1 carbon)</td></tr>
<tr><td>NH<sub>3</sub></td><td>Excess, concentrated, ethanol, heat in sealed tube</td><td>Primary amine</td></tr>
</table>
<p>Mechanism (S<sub>N</sub>2, primary): the nucleophile's lone pair attacks C<sup>δ+</sup> while the C–X bond breaks and X<sup>−</sup> leaves. Tertiary halogenoalkanes react via S<sub>N</sub>1: C–X breaks first, forming a carbocation that the nucleophile then attacks.</p>
<h3>Elimination</h3>
<p>With <b>KOH in ethanol</b>, heated under reflux, OH<sup>−</sup> acts as a <b>base</b>, removing H<sup>+</sup> from the carbon next to C–X. An <b>alkene</b> forms, plus H<sub>2</sub>O and X<sup>−</sup>. 2-bromopropane → propene.</p>
<div class="box box-key"><span class="box-title">Aqueous vs ethanolic</span><b>Aqueous</b> hydroxide → substitution (alcohol). <b>Ethanolic</b> hydroxide → elimination (alkene). Tertiary halogenoalkanes favour elimination.</div>
<h3>Uses and problems</h3>
<p>CFCs were used as refrigerants and propellants. Cl• radicals released by UV in the stratosphere catalyse ozone breakdown (Cl• + O<sub>3</sub> → ClO• + O<sub>2</sub>; ClO• + O<sub>3</sub> → Cl• + 2O<sub>2</sub>), so they were banned.</p>
`,
  quiz: [
    { q: "Which halogenoalkane hydrolyses fastest?", o: ["1-iodobutane", "1-bromobutane", "1-chlorobutane", "1-fluorobutane"], a: 0, e: "C–I is the weakest bond." },
    { q: "What controls the rate of hydrolysis of halogenoalkanes?", o: ["C–X bond enthalpy", "C–X bond polarity", "Chain length", "Size of the nucleophile"], a: 0, e: "" },
    { q: "Conditions to make an alkene from a halogenoalkane?", o: ["KOH in ethanol, heat under reflux", "Aqueous NaOH, warm", "KCN in ethanol", "Excess NH₃"], a: 0, e: "" },
    { q: "Product of 1-bromopropane + KCN in ethanol?", o: ["Butanenitrile", "Propanenitrile", "Propan-1-ol", "Propene"], a: 0, e: "Chain gains a carbon." },
    { q: "In nucleophilic substitution, the nucleophile attacks…", o: ["The δ+ carbon", "The halogen", "A hydrogen", "The C=C"], a: 0, e: "" },
    { q: "2-bromo-2-methylpropane is a…", o: ["Tertiary halogenoalkane", "Primary", "Secondary", "Quaternary"], a: 0, e: "" },
    { q: "In elimination, OH⁻ acts as a…", o: ["Base", "Nucleophile", "Electrophile", "Radical"], a: 0, e: "" },
    { q: "Why does excess ammonia give mainly the primary amine?", o: ["Reduces further substitution of the amine", "Makes it faster", "Prevents elimination", "Neutralises HBr only"], a: 0, e: "" },
    { q: "How do CFCs damage the ozone layer?", o: ["UV releases Cl• radicals that catalyse O₃ breakdown", "They absorb all UV", "They react with N₂", "They form acid rain"], a: 0, e: "" }
  ],
  flashcards: [
    ["Primary / secondary / tertiary halogenoalkane", "C–X carbon bonded to 1 / 2 / 3 other carbons"],
    ["Rate of hydrolysis order", "C–I > C–Br > C–Cl (bond enthalpy decides)"],
    ["AgNO₃ hydrolysis test", "Warm with ethanolic AgNO₃; time for precipitate; AgI fastest"],
    ["OH⁻ substitution conditions", "Aqueous NaOH/KOH, heat under reflux → alcohol"],
    ["CN⁻ substitution", "KCN in ethanol, reflux → nitrile (+1 C)"],
    ["NH₃ substitution", "Excess conc NH₃ in ethanol, heat, sealed tube → amine"],
    ["Elimination conditions", "KOH in ethanol, heat under reflux → alkene"],
    ["SN2", "One step: nucleophile attacks as C–X breaks (primary)"],
    ["SN1", "C–X breaks first → carbocation → nucleophile attacks (tertiary)"],
    ["CFC ozone reactions", "Cl• + O₃ → ClO• + O₂; ClO• + O₃ → Cl• + 2O₂"]
  ]
});

S2Data.add({
  id: "6e", group: 6, y1: true, title: "Alcohols",
  summary: "Classification, combustion, oxidation with dichromate, halogenation, dehydration and practical techniques.",
  notes: `
<h3>Classification</h3>
<p><b>Primary</b> (C–OH carbon attached to one carbon), <b>secondary</b> (two), <b>tertiary</b> (three).</p>
<h3>Reactions</h3>
<ul>
<li><b>Combustion</b>: C<sub>2</sub>H<sub>5</sub>OH + 3O<sub>2</sub> → 2CO<sub>2</sub> + 3H<sub>2</sub>O.</li>
<li><b>Halogenation</b>: with PCl<sub>5</sub> (misty fumes of HCl: a test for –OH); with HBr made from KBr + 50% H<sub>2</sub>SO<sub>4</sub>; with PI<sub>3</sub> (red phosphorus + iodine).</li>
<li><b>Dehydration</b>: heat with concentrated H<sub>3</sub>PO<sub>4</sub> (or pass vapour over hot Al<sub>2</sub>O<sub>3</sub>) → alkene + water.</li>
</ul>
<h3>Oxidation with acidified potassium dichromate(VI)</h3>
<p>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> / dilute H<sub>2</sub>SO<sub>4</sub> is the oxidising agent: <b>orange Cr<sub>2</sub>O<sub>7</sub><sup>2−</sup> → green Cr<sup>3+</sup></b>. In equations, write the oxidising agent as [O].</p>
<table>
<tr><th>Alcohol</th><th>Conditions</th><th>Product</th></tr>
<tr><td>Primary</td><td>Heat gently, <b>distil off</b> the product immediately</td><td><b>Aldehyde</b></td></tr>
<tr><td>Primary</td><td>Excess oxidising agent, <b>heat under reflux</b></td><td><b>Carboxylic acid</b></td></tr>
<tr><td>Secondary</td><td>Heat under reflux</td><td><b>Ketone</b></td></tr>
<tr><td>Tertiary</td><td>—</td><td>Not oxidised (stays orange)</td></tr>
</table>
<p>e.g. CH<sub>3</sub>CH<sub>2</sub>OH + [O] → CH<sub>3</sub>CHO + H<sub>2</sub>O; CH<sub>3</sub>CH<sub>2</sub>OH + 2[O] → CH<sub>3</sub>COOH + H<sub>2</sub>O.</p>

<h3>Practical techniques</h3>
<ul>
<li><b>Heating under reflux</b>: vertical condenser so volatile reactants and products condense and return to the flask; allows long heating without loss.</li>
<li><b>Distillation</b>: separates a volatile product by boiling point.</li>
<li><b>Purification</b>: use a separating funnel to remove the aqueous layer; wash with sodium hydrogencarbonate to remove acid (release pressure!); dry with anhydrous CaCl<sub>2</sub> or MgSO<sub>4</sub>; redistil, collecting at the boiling point.</li>
<li>Anti-bumping granules give smooth boiling. Never heat a sealed apparatus.</li>
</ul>
`,
  quiz: [
    { q: "Product of oxidising propan-2-ol?", o: ["Propanone", "Propanal", "Propanoic acid", "Propene"], a: 0, e: "Secondary → ketone." },
    { q: "How do you get an aldehyde from a primary alcohol?", o: ["Distil off as it forms", "Reflux with excess oxidant", "Use a tertiary alcohol", "Add PCl₅"], a: 0, e: "" },
    { q: "Colour change of acidified dichromate when it oxidises an alcohol?", o: ["Orange → green", "Purple → colourless", "Green → orange", "Colourless → brown"], a: 0, e: "" },
    { q: "Which alcohol is not oxidised by acidified dichromate?", o: ["2-methylpropan-2-ol", "Ethanol", "Propan-2-ol", "Butan-1-ol"], a: 0, e: "Tertiary." },
    { q: "Test for an –OH group using PCl₅?", o: ["Misty fumes of HCl", "Orange to green", "Squeaky pop", "White precipitate"], a: 0, e: "" },
    { q: "Why heat under reflux?", o: ["Volatile substances condense and return, allowing long heating", "To remove the product", "To dry the product", "To cool the reaction"], a: 0, e: "" },
    { q: "What does anhydrous MgSO₄ do?", o: ["Removes water (drying agent)", "Removes acid", "Catalyses", "Oxidises"], a: 0, e: "" },
    { q: "Dehydrating ethanol gives…", o: ["Ethene", "Ethanal", "Ethanoic acid", "Ethane"], a: 0, e: "" },
    { q: "Why wash an organic product with NaHCO₃ solution?", o: ["To remove acidic impurities", "To dry it", "To oxidise it", "To make it denser"], a: 0, e: "" }
  ],
  flashcards: [
    ["Oxidising agent for alcohols", "Acidified K₂Cr₂O₇: orange → green"],
    ["Primary alcohol → aldehyde", "Gentle heat, distil off immediately"],
    ["Primary alcohol → carboxylic acid", "Excess oxidant, heat under reflux"],
    ["Secondary alcohol oxidised", "Ketone (reflux)"],
    ["Tertiary alcohol + dichromate", "No reaction (stays orange)"],
    ["Dehydration of alcohols", "Conc H₃PO₄, heat → alkene + H₂O"],
    ["PCl₅ + alcohol", "Misty fumes of HCl; chloroalkane"],
    ["Reflux", "Heating with a vertical condenser so volatiles return"],
    ["Purifying an organic liquid", "Separating funnel → wash (NaHCO₃) → dry (MgSO₄/CaCl₂) → distil"],
    ["Ethanol oxidation to acid equation", "CH₃CH₂OH + 2[O] → CH₃COOH + H₂O"]
  ]
});

S2Data.add({
  id: "7a", group: 7, y1: true, title: "Mass spectrometry and infrared spectroscopy",
  summary: "Using molecular ion and fragment peaks, and identifying bonds from IR absorptions.",
  notes: `
<h3>Mass spectrometry of organic compounds</h3>
<ul>
<li>The <b>molecular ion</b> M<sup>+</sup> peak at the highest m/z gives the M<sub>r</sub>. A small <b>M+1</b> peak comes from <sup>13</sup>C.</li>
<li>Molecular ions <b>fragment</b>: M<sup>+</sup> → X<sup>+</sup> + Y•. Only the charged fragment is detected.</li>
<li>Common fragments: 15 CH<sub>3</sub><sup>+</sup>, 29 C<sub>2</sub>H<sub>5</sub><sup>+</sup> or CHO<sup>+</sup>, 31 CH<sub>2</sub>OH<sup>+</sup>, 43 C<sub>3</sub>H<sub>7</sub><sup>+</sup> or CH<sub>3</sub>CO<sup>+</sup>, 45 COOH<sup>+</sup>.</li>
<li>Fragmentation patterns can distinguish isomers: e.g. propan-1-ol has a peak at 31 (CH<sub>2</sub>OH<sup>+</sup>) but propan-2-ol has 45 (CH<sub>3</sub>CHOH<sup>+</sup>).</li>
<li>Halogen compounds: Cl gives M and M+2 peaks in a 3 : 1 ratio; Br gives M and M+2 in about 1 : 1.</li>
</ul>
<h3>Infrared spectroscopy</h3>
<p>Bonds absorb IR radiation at particular frequencies, making them vibrate (stretch or bend) more. The spectrum shows % transmittance against <b>wavenumber</b> (cm<sup>−1</sup>); absorptions are dips.</p>
<table>
<tr><th>Bond</th><th>Wavenumber / cm<sup>−1</sup></th><th>Appearance</th></tr>
<tr><td>O–H (alcohol)</td><td>3750–3200</td><td>Broad</td></tr>
<tr><td>O–H (carboxylic acid)</td><td>3300–2500</td><td>Very broad</td></tr>
<tr><td>N–H (amine)</td><td>3500–3300</td><td>Medium</td></tr>
<tr><td>C–H</td><td>3000–2850</td><td>Sharp</td></tr>
<tr><td>C=O</td><td>1750–1650</td><td>Strong, sharp</td></tr>
<tr><td>C=C</td><td>1669–1645</td><td>Medium</td></tr>
<tr><td>C–O</td><td>1300–1000</td><td>Strong</td></tr>
</table>
<p>The <b>fingerprint region</b> (below about 1500 cm<sup>−1</sup>) is unique to each compound: match against a database to identify it. IR can also monitor reactions, e.g. the oxidation of an alcohol (O–H disappears, C=O appears), and measure CO<sub>2</sub> and other greenhouse gases, which absorb IR.</p>
`,
  quiz: [
    { q: "A broad absorption at 3300 cm⁻¹ and none at 1700 cm⁻¹ suggests…", o: ["An alcohol", "A ketone", "A carboxylic acid", "An alkane"], a: 0, e: "" },
    { q: "A very broad absorption 3300–2500 plus a strong peak at 1710 cm⁻¹ suggests…", o: ["A carboxylic acid", "An alcohol", "An aldehyde", "An ester"], a: 0, e: "" },
    { q: "Peak at m/z 15 corresponds to…", o: ["CH₃⁺", "C₂H₅⁺", "CHO⁺", "OH⁺"], a: 0, e: "" },
    { q: "Which peak gives Mr?", o: ["The molecular ion peak (highest m/z, ignoring M+1)", "The tallest peak", "The first peak", "The M+1 peak"], a: 0, e: "" },
    { q: "A compound shows M and M+2 peaks in a 1 : 1 ratio. It contains…", o: ["Bromine", "Chlorine", "Iodine", "Fluorine"], a: 0, e: "" },
    { q: "What happens when a bond absorbs IR radiation?", o: ["It vibrates more (stretches/bends)", "It breaks", "It ionises", "It emits light"], a: 0, e: "" },
    { q: "Why is the fingerprint region useful?", o: ["Pattern unique to each compound; matched against a database", "Shows the Mr", "Identifies the halogen", "Shows O–H only"], a: 0, e: "" },
    { q: "Which fragment helps tell propan-1-ol from propan-2-ol?", o: ["m/z 31 (CH₂OH⁺) in propan-1-ol", "m/z 15 in both", "M⁺ at 60", "m/z 43 only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Molecular ion peak", "Highest m/z (excluding M+1); gives Mr"],
    ["M+1 peak", "Due to ¹³C"],
    ["Fragmentation", "M⁺ → X⁺ + Y•; only the ion is detected"],
    ["m/z 29", "C₂H₅⁺ or CHO⁺"],
    ["m/z 43", "C₃H₇⁺ or CH₃CO⁺"],
    ["Cl / Br isotope patterns", "Cl: M, M+2 3:1; Br: M, M+2 1:1"],
    ["O–H alcohol IR", "3750–3200 cm⁻¹, broad"],
    ["O–H acid IR", "3300–2500 cm⁻¹, very broad"],
    ["C=O IR", "1750–1650 cm⁻¹, strong"],
    ["Fingerprint region", "Below ~1500 cm⁻¹; unique; compare with database"]
  ]
});

S2Data.detail("6a", { mistakes: ["Using cis/trans for molecules without an H on each C=C carbon. Use E/Z with priorities.", "Numbering from the wrong end of the chain."], tips: ["For E/Z, draw the molecule with the double bond horizontal, circle the higher-priority group on each carbon, then compare sides."], fact: "Fumaric acid (E) and maleic acid (Z) have the same formula, but one melts at 287 °C and the other at 135 °C." });
S2Data.detail("6b", { mistakes: ["Writing propagation steps that produce H•. In propagation, Cl• takes an H to form HCl."], tips: ["In propagation steps the radical on the left must appear as a different radical on the right."], fact: "The ozone hole over Antarctica has been slowly recovering since CFCs were banned by the 1987 Montreal Protocol." });
S2Data.detail("6c", { mistakes: ["Starting the first curly arrow from a carbon atom. It must start from the <b>middle of the double bond</b>.", "Forgetting the lone pair and negative charge on Br<sup>−</sup> in the second step."], tips: ["Always draw the carbocation intermediate with a + on the correct carbon; it's often a separate mark."], fact: "Poly(ethene) was discovered by accident in 1933 when a trace of oxygen catalysed ethene polymerising under high pressure." });
S2Data.detail("6d", { mistakes: ["Saying polarity controls the rate of hydrolysis. C–F is the most polar bond but the slowest to break: <b>bond enthalpy</b> controls it."], tips: ["Aqueous → substitution; ethanolic → elimination. Write the solvent in your answer: it's often the mark."], fact: "CFCs are so stable they can last over 100 years in the atmosphere." });
S2Data.detail("6e", { mistakes: ["Forgetting that aldehydes need to be distilled off as they form, or they oxidise further.", "Writing O<sub>2</sub> instead of [O] in oxidation equations."], tips: ["Learn the reflux and distillation diagrams: you may be asked to draw them or spot errors (e.g. a sealed system)."], fact: "Breathalysers once used the orange-to-green colour change of dichromate to detect ethanol on the breath." });
S2Data.detail("7a", { mistakes: ["Calling the tallest peak the molecular ion peak. That's the <b>base peak</b>; M<sup>+</sup> is at the highest m/z."], tips: ["In IR questions, quote the wavenumber range from the data sheet and name the bond, e.g. 'broad absorption at 3300 cm<sup>−1</sup>: O–H in an alcohol'."], fact: "IR cameras at airports and in phones work because warm objects emit infrared, the same radiation molecules absorb." });
