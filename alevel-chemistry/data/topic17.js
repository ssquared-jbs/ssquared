/* A-level Chemistry² — Topics 17–19: Organic chemistry II and III, Modern analytical techniques II */

S2Data.add({
  id: "17a", group: 17, y2: true, title: "Chirality",
  summary: "Chiral centres, enantiomers, optical activity, racemic mixtures and what they tell you about mechanisms.",
  notes: R`
<h3>Optical isomerism</h3>
<ul>
<li>A <b>chiral centre</b> is a carbon atom with <b>four different groups</b> attached. Mark it with an asterisk (*).</li>
<li>A chiral molecule has two <b>enantiomers</b>: non-superimposable mirror images.</li>
<li>Draw them in 3D (wedge and dashed bonds) as mirror images of each other.</li>
</ul>
<h3>Optical activity</h3>
<ul>
<li>Each enantiomer rotates the <b>plane of plane-polarised light</b> by the same amount in <b>opposite directions</b>. This is measured with a <b>polarimeter</b>.</li>
<li>A <b>racemic mixture</b> (racemate) has equal amounts of both enantiomers, so the rotations cancel: it's <b>optically inactive</b>.</li>
<li>Enantiomers have identical physical and chemical properties, except for their effect on polarised light and how they interact with other chiral molecules (e.g. enzymes and receptors).</li>
</ul>
<h3>Optical activity and mechanisms</h3>
<table>
<tr><th>Reaction</th><th>Intermediate</th><th>Product</th></tr>
<tr><td>S<sub>N</sub>1 on a chiral tertiary halogenoalkane</td><td><b>Planar carbocation</b>, attacked equally from either side</td><td>Racemic mixture (inactive)</td></tr>
<tr><td>S<sub>N</sub>2 on a chiral halogenoalkane</td><td>Attack from the side opposite the halogen</td><td>Single enantiomer, inverted (active)</td></tr>
<tr><td>Nucleophilic addition of HCN to an aldehyde/unsymmetrical ketone</td><td><b>Planar C=O</b>, attacked equally from both sides</td><td>Racemic mixture</td></tr>
</table>
<p>So measuring the optical activity of the product can tell you which mechanism happened.</p>
<div class="box box-key"><span class="box-title">Drugs</span>Often only one enantiomer is active. Thalidomide's other enantiomer caused birth defects. Making a single enantiomer is expensive but reduces side effects and doses.</div>
`,
  quiz: [
    { q: "A chiral centre is a carbon with…", o: ["Four different groups attached", "A double bond", "Two identical groups", "A lone pair"], a: 0, e: "" },
    { q: "Enantiomers are…", o: ["Non-superimposable mirror images", "Structural isomers", "E/Z isomers", "Identical molecules"], a: 0, e: "" },
    { q: "A racemic mixture is optically inactive because…", o: ["Equal amounts of enantiomers rotate light equally in opposite directions", "It contains no chiral molecules", "It absorbs light", "It's a solid"], a: 0, e: "" },
    { q: "Which molecule is chiral?", o: ["Butan-2-ol", "Propan-2-ol", "Ethanol", "2-methylpropan-2-ol"], a: 0, e: "C2 has H, OH, CH₃, C₂H₅." },
    { q: "SN1 on a single enantiomer gives…", o: ["A racemic mixture", "A single enantiomer", "No product", "An achiral product always"], a: 0, e: "Planar carbocation." },
    { q: "Ethanal + HCN gives an optically inactive product because…", o: ["The planar C=O is attacked equally from both sides", "The product is not chiral", "HCN is a weak acid", "No reaction occurs"], a: 0, e: "" },
    { q: "Optical activity is measured with a…", o: ["Polarimeter", "Colorimeter", "pH meter", "Mass spectrometer"], a: 0, e: "" },
    { q: "Why do drug companies aim to make single enantiomers?", o: ["Often only one is active; fewer side effects", "They're cheaper", "Racemates are unstable", "Legal requirement for all drugs"], a: 0, e: "" }
  ],
  flashcards: [
    ["Chiral centre", "C with four different groups"],
    ["Enantiomers", "Non-superimposable mirror images"],
    ["Optical activity", "Rotation of plane-polarised light"],
    ["Racemic mixture", "50:50 enantiomers; optically inactive"],
    ["SN1 and chirality", "Planar carbocation → racemic product"],
    ["SN2 and chirality", "Inversion → single (opposite) enantiomer"],
    ["Nucleophilic addition to C=O", "Planar carbonyl → racemic product"],
    ["Polarimeter", "Measures rotation of plane-polarised light"]
  ]
});

S2Data.add({
  id: "17b", group: 17, y2: true, title: "Carbonyl compounds",
  summary: "Aldehydes and ketones: physical properties, oxidation tests, reduction, and nucleophilic addition of HCN.",
  notes: R`
<h3>Structure and properties</h3>
<ul>
<li><b>Aldehydes</b>: C=O at the end of the chain (–CHO), named -al. <b>Ketones</b>: C=O in the chain, named -one.</li>
<li>The C=O bond is polar (C<sup>δ+</sup>). Carbonyls can't hydrogen bond to each other (no O–H), so their boiling points are lower than alcohols of similar M<sub>r</sub>. Short ones are soluble in water because they form <b>hydrogen bonds with water</b>.</li>
</ul>
<h3>Tests to tell aldehydes from ketones</h3>
<table>
<tr><th>Test</th><th>Aldehyde</th><th>Ketone</th></tr>
<tr><td>Tollens' reagent ([Ag(NH<sub>3</sub>)<sub>2</sub>]<sup>+</sup>), warm</td><td><b>Silver mirror</b></td><td>No change</td></tr>
<tr><td>Fehling's or Benedict's solution (Cu<sup>2+</sup>), warm</td><td>Blue → <b>red precipitate</b> (Cu<sub>2</sub>O)</td><td>Stays blue</td></tr>
<tr><td>Acidified K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>, warm</td><td>Orange → green</td><td>Stays orange</td></tr>
</table>
<p><b>2,4-DNPH</b> (Brady's reagent) gives an <b>orange precipitate</b> with both aldehydes and ketones. Recrystallise it and measure the melting point to identify the carbonyl.</p>
<p><b>Iodoform test</b>: I<sub>2</sub> and NaOH, warm → <b>pale yellow precipitate</b> of CHI<sub>3</sub> (antiseptic smell). Positive for <b>methyl ketones</b> (CH<sub>3</sub>CO–), ethanal, and alcohols with CH<sub>3</sub>CH(OH)–.</p>
<h3>Reduction</h3>
<p>With <b>LiAlH<sub>4</sub> in dry ether</b>: aldehydes → primary alcohols; ketones → secondary alcohols. Write [H]: CH<sub>3</sub>CHO + 2[H] → CH<sub>3</sub>CH<sub>2</sub>OH.</p>
<h3>Nucleophilic addition of HCN</h3>
<ul>
<li>Reagent: <b>KCN</b> with dilute acid (HCN is too toxic to handle; KCN provides CN<sup>−</sup>, the nucleophile). Product: a <b>hydroxynitrile</b>, chain + 1 carbon.</li>
<li>Mechanism: CN<sup>−</sup> lone pair attacks C<sup>δ+</sup>; π bond electrons move onto O, forming O<sup>−</sup>; O<sup>−</sup> takes H<sup>+</sup> (from HCN or H<sub>2</sub>O).</li>
<li>e.g. ethanal → 2-hydroxypropanenitrile (racemic: planar C=O attacked from both sides).</li>
</ul>
`,
  quiz: [
    { q: "Tollens' reagent gives a silver mirror with…", o: ["Aldehydes", "Ketones", "Both", "Neither"], a: 0, e: "" },
    { q: "Fehling's positive result?", o: ["Blue → red precipitate", "Orange → green", "Silver mirror", "Yellow precipitate"], a: 0, e: "" },
    { q: "2,4-DNPH gives an orange precipitate with…", o: ["Aldehydes and ketones", "Aldehydes only", "Alcohols", "Carboxylic acids"], a: 0, e: "" },
    { q: "Which gives a positive iodoform test?", o: ["Propanone", "Pentan-3-one", "Methanal", "Propanal"], a: 0, e: "CH₃CO–." },
    { q: "Reduction of butanone with LiAlH₄ gives…", o: ["Butan-2-ol", "Butan-1-ol", "Butanoic acid", "Butane"], a: 0, e: "" },
    { q: "In nucleophilic addition of HCN, the nucleophile is…", o: ["CN⁻", "H⁺", "HCN", "OH⁻"], a: 0, e: "" },
    { q: "Product of propanone + HCN?", o: ["2-hydroxy-2-methylpropanenitrile", "2-hydroxypropanenitrile", "Propanenitrile", "Butanenitrile"], a: 0, e: "" },
    { q: "Why do carbonyls have lower boiling points than alcohols of similar Mr?", o: ["No hydrogen bonding between carbonyl molecules", "They're ionic", "Larger London forces", "They're gases"], a: 0, e: "" },
    { q: "How is a 2,4-DNPH derivative used to identify a carbonyl?", o: ["Recrystallise and measure melting point; compare with data", "Measure its mass", "Burn it", "Dissolve it in water"], a: 0, e: "" }
  ],
  flashcards: [
    ["Aldehyde vs ketone", "–CHO at chain end vs C=O within chain"],
    ["Tollens' test", "Silver mirror with aldehydes"],
    ["Fehling's/Benedict's", "Blue → red ppt (Cu₂O) with aldehydes"],
    ["2,4-DNPH", "Orange ppt with any C=O; melting point identifies"],
    ["Iodoform test", "I₂/NaOH → yellow CHI₃; CH₃CO– or CH₃CH(OH)–"],
    ["LiAlH₄", "Reduces aldehydes → 1° alcohols, ketones → 2° alcohols (dry ether)"],
    ["HCN addition reagent", "KCN + dilute acid"],
    ["Nucleophilic addition mechanism", "CN⁻ attacks Cδ+; O⁻ forms; O⁻ protonated"],
    ["Hydroxynitrile", "Product of HCN + carbonyl; chain +1 C"]
  ]
});

S2Data.add({
  id: "17c", group: 17, y2: true, title: "Carboxylic acids and derivatives",
  summary: "Preparing and reacting carboxylic acids, esters, acyl chlorides and polyesters.",
  notes: R`
<h3>Carboxylic acids</h3>
<ul>
<li>–COOH. Hydrogen bonding gives high boiling points; short chains are soluble in water. Weak acids.</li>
<li><b>Preparation</b>: oxidise primary alcohols or aldehydes (acidified dichromate, reflux); hydrolyse <b>nitriles</b> by refluxing with dilute acid.</li>
<li><b>Reduction</b>: LiAlH<sub>4</sub> in dry ether → primary alcohol.</li>
<li>React with metals (→ salt + H<sub>2</sub>), bases (→ salt + water), and <b>carbonates</b> (→ CO<sub>2</sub> fizzing: a test for –COOH).</li>
<li>With <b>PCl<sub>5</sub></b>: → acyl chloride + POCl<sub>3</sub> + HCl.</li>
</ul>
<h3>Esters</h3>
<ul>
<li>Made by <b>esterification</b>: carboxylic acid + alcohol, <b>concentrated H<sub>2</sub>SO<sub>4</sub></b> catalyst, heat under reflux. Reversible.</li>
<li>Naming: alcohol part first, then -oate. CH<sub>3</sub>COOCH<sub>2</sub>CH<sub>3</sub> is ethyl ethanoate.</li>
<li>Uses: solvents, perfumes, flavourings, plasticisers.</li>
<li><b>Acid hydrolysis</b> (dilute acid, reflux) → acid + alcohol: reversible.</li>
<li><b>Alkaline hydrolysis</b> (NaOH, reflux) → carboxylate salt + alcohol: goes to completion.</li>
</ul>
<h3>Acyl chlorides</h3>
<p>R–COCl. Very reactive because the carbonyl carbon is strongly δ+ (bonded to both O and Cl). They react vigorously at room temperature, releasing <b>misty fumes of HCl</b>:</p>
<table>
<tr><th>With</th><th>Product</th></tr>
<tr><td>Water</td><td>Carboxylic acid + HCl</td></tr>
<tr><td>Alcohol</td><td><b>Ester</b> + HCl (not reversible; better yield than esterification)</td></tr>
<tr><td>Concentrated ammonia</td><td><b>Primary amide</b> + NH<sub>4</sub>Cl</td></tr>
<tr><td>Primary amine</td><td><b>N-substituted amide</b> + HCl</td></tr>
</table>
<p>These are <b>addition–elimination</b> reactions: the nucleophile adds to the C=O carbon, then Cl<sup>−</sup> and H<sup>+</sup> are eliminated.</p>
<h3>Polyesters</h3>
<p><b>Condensation polymers</b> form from a <b>dicarboxylic acid</b> (or diacyl chloride) and a <b>diol</b>, losing H<sub>2</sub>O (or HCl) for each ester link. e.g. Terylene (PET) from benzene-1,4-dicarboxylic acid and ethane-1,2-diol. Polyesters are biodegradable by hydrolysis of the ester links.</p>
`,
  quiz: [
    { q: "Test for a carboxylic acid?", o: ["Add Na₂CO₃: fizzing, CO₂ turns limewater milky", "Tollens' reagent", "2,4-DNPH", "Bromine water"], a: 0, e: "" },
    { q: "Name CH₃CH₂COOCH₃.", o: ["Methyl propanoate", "Propyl methanoate", "Ethyl ethanoate", "Methyl ethanoate"], a: 0, e: "" },
    { q: "Catalyst for esterification?", o: ["Concentrated H₂SO₄", "Nickel", "NaOH", "Platinum"], a: 0, e: "" },
    { q: "Why does alkaline hydrolysis of an ester go to completion?", o: ["The carboxylate ion doesn't react with the alcohol", "It's faster", "NaOH is a catalyst", "It's exothermic"], a: 0, e: "" },
    { q: "Ethanoyl chloride + ethanol gives…", o: ["Ethyl ethanoate + HCl", "Ethanoic acid", "Ethanamide", "Ethene"], a: 0, e: "" },
    { q: "Ethanoyl chloride + ammonia gives…", o: ["Ethanamide", "Ethylamine", "Ethanoic acid", "Ethanenitrile"], a: 0, e: "" },
    { q: "Mechanism type for acyl chloride + water?", o: ["Addition–elimination", "Electrophilic addition", "Free-radical substitution", "SN1"], a: 0, e: "" },
    { q: "Which pair makes a polyester?", o: ["Diol + dicarboxylic acid", "Diamine + dicarboxylic acid", "Alkene + alkene", "Amino acids"], a: 0, e: "" },
    { q: "Hydrolysing propanenitrile with dilute acid gives…", o: ["Propanoic acid", "Propanamine", "Propan-1-ol", "Ethanoic acid"], a: 0, e: "" }
  ],
  flashcards: [
    ["Making carboxylic acids", "Oxidise 1° alcohol/aldehyde (reflux) or hydrolyse nitrile"],
    ["Carboxylic acid test", "Carbonate → CO₂ fizzing"],
    ["Esterification", "Acid + alcohol, conc H₂SO₄, reflux; reversible"],
    ["Ester naming", "Alkyl (from alcohol) + -oate (from acid)"],
    ["Alkaline ester hydrolysis", "→ carboxylate salt + alcohol; complete"],
    ["Acyl chloride + water", "Carboxylic acid + HCl"],
    ["Acyl chloride + alcohol", "Ester + HCl (irreversible)"],
    ["Acyl chloride + amine", "N-substituted amide + HCl"],
    ["Addition–elimination", "Nucleophile adds to C=O, then Cl⁻/H⁺ leave"],
    ["Polyester", "Diol + dicarboxylic acid; ester links; loses H₂O"]
  ]
});

S2Data.add({
  id: "18a", group: 18, y2: true, title: "Arenes",
  summary: "The structure of benzene, evidence for delocalisation, electrophilic substitution, and phenol.",
  notes: R`
<h3>Structure of benzene</h3>
<ul>
<li>C<sub>6</sub>H<sub>6</sub>: a planar hexagon, bond angles 120°. Each carbon uses three electrons in σ bonds; the remaining p electrons overlap above and below the ring to form a <b>delocalised π system</b>.</li>
<li><b>Kekulé</b> proposed alternating C=C and C–C bonds. Evidence against it:
  <ul>
  <li>All C–C bonds are the <b>same length</b> (0.139 nm), between single and double.</li>
  <li>The <b>enthalpy of hydrogenation</b> is −208 kJ mol<sup>−1</sup>, not 3 × −120 = −360. Benzene is about <b>152 kJ mol<sup>−1</sup> more stable</b> than Kekulé's structure predicts.</li>
  <li>Benzene <b>doesn't decolourise bromine water</b>: it resists addition and prefers substitution, keeping the stable delocalised ring.</li>
  </ul></li>
</ul>
<h3>Electrophilic substitution</h3>
<p>The ring's high electron density attracts electrophiles. The mechanism: electrophile accepts a pair from the ring → intermediate with the ring partly broken (positive charge, horseshoe) → H<sup>+</sup> lost, ring restored.</p>
<table>
<tr><th>Reaction</th><th>Reagents / conditions</th><th>Electrophile generation</th></tr>
<tr><td>Nitration</td><td>Conc HNO<sub>3</sub> + conc H<sub>2</sub>SO<sub>4</sub>, below 55 °C</td><td>HNO<sub>3</sub> + 2H<sub>2</sub>SO<sub>4</sub> → NO<sub>2</sub><sup>+</sup> + H<sub>3</sub>O<sup>+</sup> + 2HSO<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Halogenation</td><td>Br<sub>2</sub> with FeBr<sub>3</sub> (or Fe) catalyst</td><td>Br<sub>2</sub> + FeBr<sub>3</sub> → Br<sup>+</sup> + FeBr<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Friedel–Crafts alkylation</td><td>Halogenoalkane + AlCl<sub>3</sub>, reflux, dry</td><td>RCl + AlCl<sub>3</sub> → R<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup></td></tr>
<tr><td>Friedel–Crafts acylation</td><td>Acyl chloride + AlCl<sub>3</sub>, reflux, dry</td><td>RCOCl + AlCl<sub>3</sub> → RCO<sup>+</sup> + AlCl<sub>4</sub><sup>−</sup> → phenylketone</td></tr>
</table>
<p>Above 55 °C nitration gives multiple substitution. Nitrobenzene is used to make dyes (via phenylamine) and explosives.</p>
<p>Benzene burns with a <b>smoky flame</b> (high C : H ratio). It reacts with H<sub>2</sub> (Ni, high temperature) to give cyclohexane.</p>
<h3>Phenol</h3>
<ul>
<li>C<sub>6</sub>H<sub>5</sub>OH. A lone pair on O is <b>partly delocalised into the ring</b>, increasing its electron density. So phenol is much more reactive towards electrophiles than benzene.</li>
<li>Phenol + bromine water at room temperature, no catalyst → <b>white precipitate</b> of 2,4,6-tribromophenol (and decolourises).</li>
<li>Phenol is a very weak acid: reacts with NaOH, but not with carbonates.</li>
</ul>
`,
  quiz: [
    { q: "Evidence that benzene isn't Kekulé's structure?", o: ["All C–C bonds are the same length", "It's a liquid", "It has 6 carbons", "It burns"], a: 0, e: "" },
    { q: "Why doesn't benzene decolourise bromine water?", o: ["Addition would break the stable delocalised ring", "It has no electrons", "It's saturated", "Bromine is too weak a nucleophile"], a: 0, e: "" },
    { q: "Electrophile in nitration of benzene?", o: ["NO₂⁺", "NO₃⁻", "HNO₃", "H⁺"], a: 0, e: "" },
    { q: "Catalyst for Friedel–Crafts acylation?", o: ["AlCl₃", "FeCl₂", "Ni", "H₃PO₄"], a: 0, e: "" },
    { q: "Why is phenol more reactive than benzene with bromine?", o: ["O lone pair delocalises into the ring, raising electron density", "Phenol is a strong acid", "Benzene is ionic", "Phenol has no ring"], a: 0, e: "" },
    { q: "Benzene + ethanoyl chloride, AlCl₃ gives…", o: ["Phenylethanone", "Ethylbenzene", "Benzoic acid", "Chlorobenzene"], a: 0, e: "" },
    { q: "Benzene's enthalpy of hydrogenation is less exothermic than predicted because…", o: ["Delocalisation makes it more stable", "It has fewer bonds", "It's a gas", "It has 3 double bonds"], a: 0, e: "" },
    { q: "Why is nitration kept below 55 °C?", o: ["To avoid multiple substitution", "To prevent boiling the catalyst", "To increase rate", "To favour addition"], a: 0, e: "" },
    { q: "Product of phenol + bromine water?", o: ["2,4,6-tribromophenol (white ppt)", "Bromobenzene", "1,2-dibromocyclohexane", "No reaction"], a: 0, e: "" }
  ],
  flashcards: [
    ["Benzene structure", "Planar ring; delocalised π electrons above and below"],
    ["Evidence against Kekulé", "Equal bond lengths; less exothermic hydrogenation; resists addition"],
    ["Delocalisation energy", "≈ 152 kJ mol⁻¹ more stable"],
    ["Nitration conditions", "Conc HNO₃ + conc H₂SO₄, below 55 °C"],
    ["Nitronium ion formation", "HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻"],
    ["Bromination of benzene", "Br₂ + FeBr₃ catalyst"],
    ["Friedel–Crafts", "RCl or RCOCl + AlCl₃ (halogen carrier)"],
    ["Electrophilic substitution steps", "Electrophile attacks ring → cation intermediate → loses H⁺"],
    ["Phenol + Br₂(aq)", "White ppt 2,4,6-tribromophenol; no catalyst"],
    ["Why phenol is more reactive", "O lone pair delocalised into ring"]
  ]
});

S2Data.add({
  id: "18b", group: 18, y2: true, title: "Amines, amides and amino acids",
  summary: "Basicity and preparation of amines, amides, polyamides, and the chemistry of amino acids.",
  notes: R`
<h3>Amines</h3>
<ul>
<li>Primary (RNH<sub>2</sub>), secondary (R<sub>2</sub>NH), tertiary (R<sub>3</sub>N). They act as <b>bases</b> and <b>nucleophiles</b> because of the lone pair on N.</li>
<li><b>Basicity</b>: alkyl groups push electron density onto N, so <b>ethylamine is a stronger base than ammonia</b>. In <b>phenylamine</b>, the lone pair is partly delocalised into the ring, so it's a <b>weaker base</b> than ammonia.</li>
<li>Amines react with acids to form salts: CH<sub>3</sub>NH<sub>2</sub> + HCl → CH<sub>3</sub>NH<sub>3</sub><sup>+</sup>Cl<sup>−</sup>.</li>
<li>Small amines are soluble in water (H bonds) and their solutions are alkaline. They smell fishy.</li>
<li>With copper(II) ions, amines form a deep blue complex, like ammonia.</li>
</ul>
<h3>Preparing amines</h3>
<ul>
<li><b>Aliphatic</b>: halogenoalkane + excess ammonia in ethanol, heat in a sealed tube. Or reduce a <b>nitrile</b> with LiAlH<sub>4</sub> in dry ether (no mixture of products).</li>
<li><b>Phenylamine</b>: reduce nitrobenzene with <b>tin and concentrated HCl</b>, reflux, then add NaOH to release the free amine.</li>
<li>Further substitution of amines with halogenoalkanes gives secondary, tertiary and quaternary ammonium salts.</li>
</ul>
<h3>Amides and polyamides</h3>
<ul>
<li>Amides (–CONH<sub>2</sub>) form from acyl chlorides and ammonia or amines.</li>
<li><b>Polyamides</b>: condensation polymers from a <b>dicarboxylic acid</b> (or diacyl chloride) and a <b>diamine</b>, with amide (–CONH–) links. e.g. nylon-6,6 from hexanedioic acid and 1,6-diaminohexane; <b>Kevlar</b> from benzene-1,4-dicarboxylic acid and benzene-1,4-diamine.</li>
<li>Strong hydrogen bonds between chains give high tensile strength.</li>
</ul>
<h3>Amino acids</h3>
<ul>
<li>General formula RCH(NH<sub>2</sub>)COOH. All except glycine are <b>chiral</b>.</li>
<li>In solution they form <b>zwitterions</b> (<sup>+</sup>H<sub>3</sub>NCHRCOO<sup>−</sup>) at the isoelectric point. This gives high melting points and solubility in water.</li>
<li>In acid: <sup>+</sup>H<sub>3</sub>NCHRCOOH. In alkali: H<sub>2</sub>NCHRCOO<sup>−</sup>.</li>
<li>They join by <b>peptide (amide) links</b> to form peptides and proteins, losing water. Hydrolysis (6 mol dm<sup>−3</sup> HCl, reflux) breaks them back down.</li>
<li>Amino acid mixtures are separated and identified by <b>chromatography</b> with ninhydrin to show the spots.</li>
</ul>
`,
  quiz: [
    { q: "Why is ethylamine a stronger base than ammonia?", o: ["Ethyl group pushes electron density onto N", "It's larger", "It has more hydrogens", "It's an acid"], a: 0, e: "" },
    { q: "Why is phenylamine a weaker base than ammonia?", o: ["N lone pair is delocalised into the ring", "Benzene is acidic", "It's insoluble", "N has no lone pair"], a: 0, e: "" },
    { q: "Reagents to make phenylamine from nitrobenzene?", o: ["Tin and conc HCl, reflux, then NaOH", "LiAlH₄ only", "NH₃", "H₂SO₄"], a: 0, e: "" },
    { q: "Which pair makes a polyamide?", o: ["Diamine + dicarboxylic acid", "Diol + diacid", "Two alkenes", "Diol + diamine"], a: 0, e: "" },
    { q: "A zwitterion has…", o: ["Both a positive and a negative charge", "No charge anywhere", "Two positive charges", "Only a negative charge"], a: 0, e: "" },
    { q: "Form of glycine in strong acid?", o: ["⁺H₃NCH₂COOH", "H₂NCH₂COO⁻", "⁺H₃NCH₂COO⁻", "H₂NCH₂COOH"], a: 0, e: "" },
    { q: "Which amino acid is not chiral?", o: ["Glycine", "Alanine", "Serine", "Valine"], a: 0, e: "R = H." },
    { q: "Why does reducing a nitrile give a purer amine than using a halogenoalkane and ammonia?", o: ["No further substitution products", "It's faster", "No reagents needed", "It gives a salt"], a: 0, e: "" },
    { q: "Why are amino acids high-melting solids?", o: ["Zwitterions have strong ionic attractions", "Large London forces", "Covalent network", "Metallic bonding"], a: 0, e: "" }
  ],
  flashcards: [
    ["Amine basicity order", "Ethylamine > ammonia > phenylamine"],
    ["Why alkylamines are stronger bases", "Alkyl groups increase electron density on N"],
    ["Why phenylamine is weaker", "N lone pair delocalised into ring"],
    ["Amine from nitrile", "LiAlH₄ in dry ether"],
    ["Nitrobenzene → phenylamine", "Sn + conc HCl, reflux; then NaOH"],
    ["Polyamide", "Diamine + dicarboxylic acid/diacyl chloride; –CONH– links"],
    ["Kevlar", "Aromatic polyamide; strong H bonds between chains"],
    ["Zwitterion", "⁺H₃NCHRCOO⁻"],
    ["Peptide link", "–CONH– between amino acids"],
    ["Protein hydrolysis", "6 mol dm⁻³ HCl, reflux"]
  ]
});

S2Data.add({
  id: "18c", group: 18, y2: true, title: "Organic synthesis",
  summary: "Grignard reagents, multi-step synthesis routes, practical techniques and identifying functional groups.",
  notes: R`
<h3>Grignard reagents</h3>
<ul>
<li>Made from a halogenoalkane and <b>magnesium in dry ether</b>: CH<sub>3</sub>CH<sub>2</sub>Br + Mg → CH<sub>3</sub>CH<sub>2</sub>MgBr. Water must be excluded (it destroys the reagent).</li>
<li>The carbon bonded to Mg is δ− and acts as a nucleophile, forming a <b>new C–C bond</b>. Lengthening the carbon chain is the key use.</li>
<li>With CO<sub>2</sub> (dry ice), then acid → <b>carboxylic acid</b> (+1 C).</li>
<li>With methanal → primary alcohol; other aldehydes → secondary alcohol; ketones → tertiary alcohol.</li>
</ul>
<h3>Key conversions</h3>
<table>
<tr><th>From → to</th><th>Reagents and conditions</th></tr>
<tr><td>Alkene → halogenoalkane</td><td>HBr, room temperature</td></tr>
<tr><td>Halogenoalkane → alcohol</td><td>NaOH(aq), reflux</td></tr>
<tr><td>Halogenoalkane → nitrile</td><td>KCN in ethanol, reflux (+1 C)</td></tr>
<tr><td>Halogenoalkane → amine</td><td>Excess NH<sub>3</sub>, ethanol, heat, sealed tube</td></tr>
<tr><td>Halogenoalkane → alkene</td><td>KOH in ethanol, reflux</td></tr>
<tr><td>1° alcohol → aldehyde / acid</td><td>K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub>/H<sub>2</sub>SO<sub>4</sub>: distil / reflux</td></tr>
<tr><td>Carbonyl → alcohol</td><td>LiAlH<sub>4</sub>, dry ether</td></tr>
<tr><td>Carbonyl → hydroxynitrile</td><td>KCN + dilute acid</td></tr>
<tr><td>Nitrile → acid / amine</td><td>Dilute HCl reflux / LiAlH<sub>4</sub></td></tr>
<tr><td>Acid → acyl chloride</td><td>PCl<sub>5</sub></td></tr>
<tr><td>Benzene → nitrobenzene → phenylamine</td><td>Conc HNO<sub>3</sub>/H<sub>2</sub>SO<sub>4</sub> &lt; 55 °C; then Sn/conc HCl</td></tr>
</table>
<h3>Designing a synthesis</h3>
<ol>
<li>Compare the starting material and target: has the <b>carbon chain</b> grown (use CN<sup>−</sup> or Grignard), and which <b>functional groups</b> change?</li>
<li>Work backwards from the target if it helps.</li>
<li>Give reagents and conditions for every step, and name each intermediate.</li>
</ol>
<p>Choosing a route: fewer steps and higher yields, good <b>atom economy</b>, safer reagents (avoid HCN, toxic solvents), and lower energy use.</p>
<h3>Practical techniques</h3>
<ul>
<li><b>Recrystallisation</b> (purifying a solid): dissolve in the <b>minimum hot solvent</b>, filter hot to remove insoluble impurities, cool to crystallise, filter under reduced pressure (Büchner), wash with cold solvent, dry.</li>
<li><b>Melting point</b>: a pure substance melts sharply at the data-book value; impurities lower it and widen the range.</li>
<li><b>Steam distillation</b>, solvent extraction, reflux, distillation.</li>
</ul>
`,
  quiz: [
    { q: "How is a Grignard reagent made?", o: ["Halogenoalkane + Mg in dry ether", "Alcohol + Mg in water", "Alkene + MgO", "Halogenoalkane + MgSO₄"], a: 0, e: "" },
    { q: "Grignard reagent + CO₂, then acid, gives…", o: ["A carboxylic acid", "An alcohol", "A ketone", "An ester"], a: 0, e: "" },
    { q: "Grignard reagent + propanone gives…", o: ["A tertiary alcohol", "A primary alcohol", "A secondary alcohol", "An aldehyde"], a: 0, e: "" },
    { q: "Two ways to add one carbon to a chain?", o: ["KCN substitution; Grignard + CO₂", "Oxidation; reduction", "Cracking; reforming", "Esterification; hydrolysis"], a: 0, e: "" },
    { q: "Ethene → ethanoic acid, a sensible route?", o: ["Steam/H₃PO₄ → ethanol; then K₂Cr₂O₇/H₂SO₄ reflux", "HBr then KCN", "H₂/Ni then oxidise", "PCl₅ then water"], a: 0, e: "" },
    { q: "In recrystallisation, why use the minimum amount of hot solvent?", o: ["So the product crystallises on cooling (maximum yield)", "To dissolve impurities", "To save money only", "To lower boiling point"], a: 0, e: "" },
    { q: "An impure solid's melting point is…", o: ["Lower and over a wider range", "Higher and sharp", "Exactly the data-book value", "Unaffected"], a: 0, e: "" },
    { q: "Why must Grignard reactions be dry?", o: ["Water destroys the Grignard reagent", "Water is a catalyst", "Mg reacts with ether", "To raise yield of HBr"], a: 0, e: "" },
    { q: "Bromoethane → propanoic acid?", o: ["KCN in ethanol, then reflux with dilute acid", "NaOH then oxidise", "KOH in ethanol", "Mg then water"], a: 0, e: "" }
  ],
  flashcards: [
    ["Grignard preparation", "RX + Mg in dry ether → RMgX"],
    ["Grignard + CO₂", "→ carboxylic acid (+1 C)"],
    ["Grignard + aldehyde / ketone", "→ secondary / tertiary alcohol"],
    ["Grignard + methanal", "→ primary alcohol"],
    ["Lengthening the chain", "CN⁻ (nitrile) or Grignard"],
    ["Good synthesis route", "Few steps, high yield, good atom economy, safe reagents"],
    ["Recrystallisation", "Min hot solvent; hot filter; cool; Büchner filter; cold wash; dry"],
    ["Melting point purity test", "Sharp and matches data if pure"]
  ]
});

S2Data.add({
  id: "19a", group: 19, y2: true, title: "NMR spectroscopy",
  summary: "¹³C and ¹H NMR: chemical shift, number of environments, integration, splitting and TMS.",
  notes: R`
<h3>How NMR works</h3>
<ul>
<li>Nuclei with an odd mass number (<sup>1</sup>H, <sup>13</sup>C) have spin. In a strong magnetic field they absorb radio waves.</li>
<li>The <b>chemical shift, δ</b> (in ppm), depends on the <b>environment</b>: nearby electronegative atoms deshield the nucleus and increase δ.</li>
<li><b>TMS</b>, Si(CH<sub>3</sub>)<sub>4</sub>, is the reference at δ = 0. It gives a single strong peak, is inert, non-toxic and volatile (easily removed).</li>
<li>Samples are dissolved in <b>deuterated solvents</b> like CDCl<sub>3</sub>, which contain no <sup>1</sup>H and so give no peak.</li>
</ul>
<h3><sup>13</sup>C NMR</h3>
<p>The <b>number of peaks</b> = number of different carbon environments. Use symmetry: propanone has 2 environments; propanal has 3. Peak heights don't matter. C=O carbons appear at δ 160–220.</p>
<h3><sup>1</sup>H NMR</h3>
<ul>
<li><b>Number of peaks</b> = number of proton environments.</li>
<li><b>Integration</b> (relative peak area) = ratio of hydrogens in each environment.</li>
<li><b>Splitting</b>, the <b>n + 1 rule</b>: a peak is split into n + 1 lines by n hydrogens on <b>adjacent</b> carbons. Singlet (0 neighbours), doublet (1), triplet (2), quartet (3).</li>
<li>H on O or N usually gives a singlet and isn't split. Add D<sub>2</sub>O: the –OH or –NH peak <b>disappears</b> (H swapped for D).</li>
</ul>
<h3>Typical <sup>1</sup>H shifts</h3>
<table>
<tr><th>Environment</th><th>δ / ppm</th></tr>
<tr><td>R–CH<sub>3</sub></td><td>0.9–1.0</td></tr>
<tr><td>CH<sub>3</sub>–C=O</td><td>2.0–2.5</td></tr>
<tr><td>O–CH (alcohol, ester)</td><td>3.3–4.3</td></tr>
<tr><td>Ar–H (benzene ring)</td><td>6.5–8.0</td></tr>
<tr><td>R–CHO</td><td>9.0–10.0</td></tr>
<tr><td>R–COOH</td><td>10–12</td></tr>
</table>
<p><b>Example</b>: ethanol shows three peaks: CH<sub>3</sub> (triplet, 3H, δ 1.2), CH<sub>2</sub> (quartet, 2H, δ 3.7), OH (singlet, 1H). An ethyl group always gives a triplet + quartet pair.</p>
<p>MRI scanning uses <sup>1</sup>H NMR of water in body tissues.</p>
`,
  quiz: [
    { q: "Number of ¹³C environments in propanone?", o: ["2", "3", "1", "4"], a: 0, e: "" },
    { q: "Why is TMS used in NMR?", o: ["Single peak at δ 0; inert, volatile, non-toxic", "It's a solvent", "It has no hydrogens", "It gives many peaks"], a: 0, e: "" },
    { q: "A CH₂ next to a CH₃ appears as a…", o: ["Quartet", "Triplet", "Doublet", "Singlet"], a: 0, e: "n + 1 = 4." },
    { q: "Why use CDCl₃ as the solvent?", o: ["No ¹H, so no solvent peak", "It's cheap", "It reacts with the sample", "It's a reference"], a: 0, e: "" },
    { q: "How can you identify an –OH peak?", o: ["Add D₂O: it disappears", "It's always a quartet", "It's at δ 0", "It splits into 4"], a: 0, e: "" },
    { q: "A peak at δ 9.8 suggests…", o: ["An aldehyde H", "An alkane CH₃", "An aromatic H", "TMS"], a: 0, e: "" },
    { q: "¹H NMR of ethanal (CH₃CHO): peaks?", o: ["Doublet (3H) and quartet (1H)", "Two singlets", "Triplet and quartet", "One singlet"], a: 0, e: "" },
    { q: "Integration in ¹H NMR tells you…", o: ["The ratio of hydrogens in each environment", "The number of carbons", "The Mr", "The bond type"], a: 0, e: "" },
    { q: "Number of ¹H environments in methyl propanoate, CH₃CH₂COOCH₃?", o: ["3", "2", "4", "8"], a: 0, e: "" }
  ],
  flashcards: [
    ["Chemical shift δ", "Position of peak (ppm) relative to TMS; depends on environment"],
    ["TMS", "Si(CH₃)₄; reference δ 0; inert, volatile"],
    ["Deuterated solvent", "e.g. CDCl₃; no ¹H peak"],
    ["¹³C NMR peaks", "Number of carbon environments"],
    ["¹H integration", "Relative number of H in each environment"],
    ["n + 1 rule", "n H on adjacent C → n + 1 lines"],
    ["Ethyl group signature", "Triplet (3H) + quartet (2H)"],
    ["D₂O shake", "OH/NH peak disappears"],
    ["Aldehyde H shift", "δ 9–10"],
    ["Aromatic H shift", "δ 6.5–8.0"]
  ]
});

S2Data.add({
  id: "19b", group: 19, y2: true, title: "Chromatography and combined techniques",
  summary: "TLC, Rf values, gas and HPLC chromatography, and combining spectra to work out structures.",
  notes: R`
<h3>Chromatography</h3>
<p>All chromatography has a <b>stationary phase</b> and a <b>mobile phase</b>. Components separate because they have different <b>affinities</b> for the two phases (adsorption to the stationary phase, or solubility in it).</p>
<h3>Thin-layer chromatography (TLC)</h3>
<ul>
<li>Stationary phase: a thin layer of <b>silica or alumina</b> on a plate. Mobile phase: a solvent.</li>
<li>Draw the baseline in pencil, keep it above the solvent level, cover the tank. Locate colourless spots with <b>UV light</b> or iodine (or ninhydrin for amino acids).</li>
<li><b>R<sub>f</sub> = distance moved by spot ÷ distance moved by solvent front</b>. Compare with known values under the same conditions.</li>
<li>TLC can check purity and follow the progress of a reaction.</li>
</ul>
<h3>Gas chromatography (GC) and HPLC</h3>
<ul>
<li><b>GC</b>: mobile phase is an <b>inert carrier gas</b> (e.g. helium); stationary phase is a liquid on a solid support in a long coiled column inside an oven. Separates volatile compounds.</li>
<li><b>HPLC</b>: liquid mobile phase pumped at high pressure through a column of small solid particles. Good for non-volatile compounds.</li>
<li>The <b>retention time</b> (time from injection to detection) identifies each component; <b>peak area</b> is proportional to the amount.</li>
<li><b>GC–MS</b> and HPLC–MS: the separated components are fed straight into a mass spectrometer for identification. Used in forensics, drug testing and environmental analysis.</li>
</ul>
<h3>Combining techniques to identify a compound</h3>
<ol>
<li><b>Elemental analysis</b> → empirical formula.</li>
<li><b>Mass spectrum</b> → M<sub>r</sub>, so molecular formula; fragments hint at structure.</li>
<li><b>IR spectrum</b> → functional groups (O–H, C=O…).</li>
<li><b>Chemical tests</b> (Tollens', 2,4-DNPH, carbonate, iodoform).</li>
<li><b><sup>13</sup>C and <sup>1</sup>H NMR</b> → carbon skeleton and how the hydrogens are arranged.</li>
</ol>
<p>Explain each piece of evidence in your answer, then draw the final structure and check it fits everything.</p>
`,
  quiz: [
    { q: "Rf if spot moves 3.0 cm and solvent front 7.5 cm?", o: ["0.40", "2.5", "0.25", "4.5"], a: 0, e: "" },
    { q: "Why draw the TLC baseline in pencil?", o: ["Pencil doesn't dissolve in the solvent", "It's cheaper", "Ink is more visible", "It reacts with silica"], a: 0, e: "" },
    { q: "Mobile phase in gas chromatography?", o: ["Inert carrier gas, e.g. He", "Silica", "Water", "Liquid on solid support"], a: 0, e: "" },
    { q: "In GC, what does retention time depend on?", o: ["How strongly the compound interacts with the stationary phase", "The colour", "The detector", "Peak area"], a: 0, e: "" },
    { q: "How can colourless spots on TLC be seen?", o: ["UV light or iodine", "Bromine water", "A pH meter", "Heating to 500 °C"], a: 0, e: "" },
    { q: "Why combine GC with mass spectrometry?", o: ["GC separates; MS identifies each component", "MS separates; GC identifies", "Both separate only", "To make it faster"], a: 0, e: "" },
    { q: "In GC, peak area is proportional to…", o: ["The amount of that component", "Its Mr", "Its boiling point", "Retention time"], a: 0, e: "" },
    { q: "Which technique best shows the number of carbon environments?", o: ["¹³C NMR", "IR", "TLC", "Elemental analysis"], a: 0, e: "" }
  ],
  flashcards: [
    ["Basis of chromatography", "Different affinities for stationary and mobile phases"],
    ["Rf value", "Spot distance ÷ solvent front distance"],
    ["TLC stationary phase", "Silica or alumina on a plate"],
    ["GC phases", "Mobile: inert gas; stationary: liquid on solid support"],
    ["HPLC", "Liquid mobile phase at high pressure; small solid particles"],
    ["Retention time", "Time from injection to detection"],
    ["GC–MS", "GC separates, MS identifies"],
    ["Order of structure evidence", "Composition → MS → IR → tests → NMR"]
  ]
});

S2Data.detail("17a", { mistakes: ["Drawing enantiomers that are actually the same molecule rotated. Draw them as true mirror images."], tips: ["To find chiral centres, check each sp<sup>3</sup> carbon: does it have four different groups? CH<sub>2</sub> and CH<sub>3</sub> carbons never qualify."], fact: "Limonene's two enantiomers smell of oranges and of lemons." });
S2Data.detail("17b", { mistakes: ["Saying 2,4-DNPH distinguishes aldehydes from ketones. It reacts with both; Tollens' or Fehling's distinguishes them."], tips: ["In the HCN mechanism, draw the lone pair on C of CN<sup>−</sup>, the arrow to C<sup>δ+</sup>, and the arrow from C=O to O. Then protonate."], fact: "Cinnamaldehyde gives cinnamon its flavour and vanillin, also an aldehyde, gives vanilla its scent." });
S2Data.detail("17c", { mistakes: ["Naming esters back to front: the alcohol part comes first (ethyl ethanoate, not ethanoyl ethyl)."], tips: ["For condensation polymers, draw the repeat unit with the ester or amide link and open bonds at each end, and remember to state what small molecule is lost."], fact: "Pineapple flavouring is mostly ethyl butanoate, and pear drops smell of 3-methylbutyl ethanoate." });
S2Data.detail("18a", { mistakes: ["Drawing the intermediate's horseshoe covering all six carbons. It should cover five, with the + inside, leaving the carbon with H and the electrophile out."], tips: ["Always write the equation for generating the electrophile and for regenerating the catalyst (e.g. H<sup>+</sup> + FeBr<sub>4</sub><sup>−</sup> → FeBr<sub>3</sub> + HBr)."], fact: "Benzene was first isolated by Michael Faraday in 1825 from the oily residue of gas lamps." });
S2Data.detail("18b", { mistakes: ["Comparing base strength without mentioning the availability of the lone pair on nitrogen."], tips: ["For amino acids at different pH, protonate NH<sub>2</sub> in acid and deprotonate COOH in alkali. At the isoelectric point it's the zwitterion."], fact: "Kevlar is five times stronger than steel by weight, and its strength comes from hydrogen bonding between neat parallel chains." });
S2Data.detail("18c", { mistakes: ["Giving reagents without conditions (e.g. 'KCN' without 'in ethanol, reflux'). Conditions are usually a separate mark."], tips: ["Make a big reaction map of every conversion in Topics 6, 17 and 18 and practise routes from it."], fact: "Victor Grignard won the Nobel Prize in 1912 for his magnesium reagents, which are still used in labs worldwide." });
S2Data.detail("19a", { mistakes: ["Counting neighbouring hydrogens on the same carbon for splitting. Only hydrogens on <b>adjacent</b> carbons split a peak."], tips: ["Work peak by peak: shift → what's nearby; integration → how many H; splitting → how many H next door. Then build fragments and join them."], fact: "MRI scanners use magnetic fields up to about 3 tesla, around 60 000 times stronger than Earth's field." });
S2Data.detail("19b", { mistakes: ["Letting the baseline sit below the solvent level, so the spots dissolve into the solvent."], tips: ["In structure questions, quote each piece of evidence and say what it shows. Marks are for the reasoning, not just the final structure."], fact: "GC–MS can detect drugs in sports samples at concentrations below one part per billion." });
