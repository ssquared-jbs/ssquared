/* A-level Biology B² — Topics 6–10: content specific to Biology B */

S2Data.add({
  id: "6a", group: 6, y2: true, title: "Microbiology",
  summary: "Culturing microorganisms safely, measuring growth, serial dilution and the bacterial growth curve.",
  notes: `
<h3>Culturing microorganisms</h3>
<ul>
<li>Microorganisms are grown in <b>nutrient broth</b> (liquid) or on <b>agar</b> plates, providing carbon source, nitrogen, minerals and water. Conditions: suitable temperature, pH, oxygen.</li>
<li><b>Aseptic technique</b>: sterilise equipment (autoclave, flaming loops), work near a Bunsen flame, open lids minimally, tape lids (not fully sealed), incubate at 25 °C in schools, disinfect surfaces.</li>
</ul>
<h3>Measuring growth</h3>
<ul>
<li><b>Cell counts</b> with a haemocytometer (total count, live and dead).</li>
<li><b>Viable counts</b>: serial dilution then plating; count colonies (each from one cell). Count plates with 20–300 colonies.</li>
<li><b>Turbidity</b>: colorimeter measures cloudiness of broth (higher absorbance → more cells).</li>
<li><b>Dry mass</b>: filter, dry and weigh.</li>
</ul>
<h3>Serial dilution</h3>
<p>E.g. 1 cm<sup>3</sup> of culture + 9 cm<sup>3</sup> water = 10<sup>−1</sup>, repeated to 10<sup>−2</sup>, 10<sup>−3</sup>… Number of cells in original = colonies × dilution factor ÷ volume plated.</p>
<h3>Bacterial growth curve</h3>
<table>
<tr><th>Phase</th><th>What happens</th></tr>
<tr><td>Lag</td><td>Cells adapt: making enzymes, little division</td></tr>
<tr><td>Log (exponential)</td><td>Rapid division; numbers double each generation</td></tr>
<tr><td>Stationary</td><td>Birth rate = death rate; nutrients run out, toxins build up</td></tr>
<tr><td>Death (decline)</td><td>Death rate exceeds division</td></tr>
</table>
<p>Numbers after n generations: N = N<sub>0</sub> × 2<sup>n</sup>. Plot on a <b>log scale</b>. Growth rate constant k = (log<sub>10</sub>N<sub>t</sub> − log<sub>10</sub>N<sub>0</sub>) ÷ (0.301 × t).</p>
`,
  quiz: [
    { q: "Which is part of aseptic technique?", o: ["Flaming the inoculating loop", "Sealing plates completely", "Incubating at 37 °C in schools", "Opening the lid fully"], a: 0, e: "" },
    { q: "Why are Petri dish lids taped but not sealed all the way round?", o: ["To prevent anaerobic pathogens growing", "To let light in", "To let bacteria escape", "To keep plates warm"], a: 0, e: "" },
    { q: "Why are cultures incubated at 25 °C in schools?", o: ["To reduce growth of human pathogens", "It's the optimum for all bacteria", "To kill bacteria", "To speed up growth"], a: 0, e: "" },
    { q: "A viable count counts…", o: ["Only living cells", "Living and dead cells", "Only dead cells", "Spores only"], a: 0, e: "" },
    { q: "In the log phase…", o: ["Cells divide exponentially", "No division occurs", "Death rate exceeds division", "Cells make enzymes only"], a: 0, e: "" },
    { q: "The stationary phase occurs because…", o: ["Nutrients run out and toxins build up", "Bacteria stop needing food", "Temperature rises", "Cells become larger"], a: 0, e: "" },
    { q: "Serial dilution is used to…", o: ["Get a countable number of colonies", "Kill bacteria", "Make broth", "Measure pH"], a: 0, e: "" },
    { q: "Turbidity measures…", o: ["Cloudiness of a culture", "Colony diameter", "pH", "Temperature"], a: 0, e: "" },
    { q: "1 cm³ of culture is added to 9 cm³ water. The dilution is…", o: ["10⁻¹", "10⁻⁹", "1/9", "10⁻²"], a: 0, e: "" }
  ],
  flashcards: [
    ["Aseptic technique", "Sterilise, flame, minimise lid opening, tape lid, 25 °C, disinfect"],
    ["Broth vs agar", "Liquid medium vs solid medium"],
    ["Total vs viable count", "All cells (haemocytometer) vs living cells (colonies)"],
    ["Serial dilution", "Repeated 1 in 10 dilutions to get 20–300 colonies"],
    ["Cells in original", "Colonies × dilution factor ÷ volume plated"],
    ["Lag phase", "Adapting; enzymes made"],
    ["Log phase", "Exponential division"],
    ["Stationary phase", "Births = deaths; nutrients low, toxins high"],
    ["Death phase", "Deaths > divisions"],
    ["Number after n generations", "N = N₀ × 2ⁿ"]
  ]
});

S2Data.add({
  id: "7c", group: 7, y2: true, title: "Gene technology",
  summary: "Recombinant DNA, genetically modified organisms, gene therapy and the ethics of using them.",
  notes: `
<h3>Making recombinant DNA</h3>
<ol>
<li>Obtain the gene: cut it out with <b>restriction enzymes</b> (leaving <b>sticky ends</b>), make it from mRNA using <b>reverse transcriptase</b> (cDNA, no introns), or synthesise it.</li>
<li>Cut a <b>vector</b> (plasmid or virus) with the same restriction enzyme, giving complementary sticky ends.</li>
<li>Join the gene into the vector with <b>DNA ligase</b>.</li>
<li>Introduce the vector into host cells (heat shock with Ca<sup>2+</sup> for bacteria; <i>Agrobacterium</i> or a gene gun for plants; microinjection or viruses for animals).</li>
<li>Identify transformed cells using <b>marker genes</b> (antibiotic resistance or fluorescence).</li>
</ol>
<h3>Uses</h3>
<ul>
<li><b>GM microorganisms</b>: human insulin, growth hormone, enzymes.</li>
<li><b>GM plants</b>: pest resistance (Bt toxin), herbicide resistance, Golden Rice (β-carotene).</li>
<li><b>GM animals</b>: proteins in milk (e.g. antithrombin from goats).</li>
<li><b>Gene therapy</b>: functional alleles delivered to cells (somatic: not inherited; germ line: inherited, currently not allowed in humans). Example: treating SCID or cystic fibrosis.</li>
</ul>
<h3>Issues</h3>
<p>Benefits: higher yields, less pesticide, better nutrition, medicines. Concerns: genes spreading to wild relatives, resistance in pests, reduced biodiversity, unknown long-term effects, patents and cost for farmers in poorer countries, animal welfare.</p>
`,
  quiz: [
    { q: "Restriction enzymes…", o: ["Cut DNA at specific recognition sites", "Join DNA", "Make mRNA", "Copy DNA"], a: 0, e: "" },
    { q: "Why use the same restriction enzyme on the gene and plasmid?", o: ["To give complementary sticky ends", "To make it cheaper", "To kill bacteria", "To remove introns"], a: 0, e: "" },
    { q: "DNA ligase…", o: ["Joins sugar–phosphate backbones", "Cuts DNA", "Separates strands", "Translates mRNA"], a: 0, e: "" },
    { q: "Why make a gene from mRNA with reverse transcriptase?", o: ["The cDNA has no introns, so bacteria can express it", "It's faster to translate", "It has more introns", "It has no start codon"], a: 0, e: "" },
    { q: "Agrobacterium tumefaciens is used to…", o: ["Insert genes into plant cells", "Make insulin", "Cut DNA", "Kill pests"], a: 0, e: "" },
    { q: "Marker genes are used to…", o: ["Identify transformed cells", "Cut plasmids", "Make sticky ends", "Join genes"], a: 0, e: "" },
    { q: "Golden Rice contains genes to make…", o: ["β-carotene", "Insulin", "Bt toxin", "Antithrombin"], a: 0, e: "" },
    { q: "Somatic gene therapy…", o: ["Isn't passed to offspring", "Changes gametes", "Is permanent in all cells", "Is germ line therapy"], a: 0, e: "" },
    { q: "A concern about herbicide-resistant crops is…", o: ["Genes spreading to weeds", "Higher yield", "Less pesticide use", "Better nutrition"], a: 0, e: "" }
  ],
  flashcards: [
    ["Steps to make recombinant DNA", "Get gene → cut vector → ligase → into host → markers"],
    ["Sticky ends", "Single-stranded overhangs from restriction enzymes"],
    ["cDNA", "DNA made from mRNA by reverse transcriptase; no introns"],
    ["Vectors", "Plasmids, viruses, Agrobacterium"],
    ["Getting plasmids into bacteria", "Heat shock with Ca²⁺"],
    ["Marker genes", "Antibiotic resistance or fluorescence to find transformed cells"],
    ["GM examples", "Insulin from bacteria, Bt crops, Golden Rice, proteins in goat milk"],
    ["Somatic vs germ line therapy", "Body cells, not inherited vs gametes/embryo, inherited"],
    ["GM concerns", "Gene flow, resistance, biodiversity, patents, welfare"]
  ]
});

S2Data.add({
  id: "8a", group: 8, y2: true, title: "Inheritance",
  summary: "Monohybrid and dihybrid crosses, codominance, multiple alleles, sex linkage, linkage and the chi-squared test.",
  notes: `
<h3>Key terms</h3>
<p><b>Gene</b>, <b>allele</b>, <b>genotype</b>, <b>phenotype</b>, <b>dominant</b>, <b>recessive</b>, <b>homozygous</b>, <b>heterozygous</b>, <b>locus</b>.</p>
<h3>Types of inheritance</h3>
<ul>
<li><b>Monohybrid</b>: one gene. Aa × Aa → 3 : 1 phenotypes.</li>
<li><b>Codominance</b>: both alleles expressed in heterozygotes (e.g. roan cattle, C<sup>R</sup>C<sup>W</sup>).</li>
<li><b>Multiple alleles</b>: more than two alleles at a locus (ABO blood groups: I<sup>A</sup>, I<sup>B</sup> codominant, I<sup>O</sup> recessive).</li>
<li><b>Dihybrid</b>: two genes on different chromosomes. AaBb × AaBb → 9 : 3 : 3 : 1.</li>
<li><b>Sex linkage</b>: genes on the X chromosome (e.g. haemophilia, red-green colour blindness). Males (XY) have one copy, so recessive conditions are more common in males. Carriers are X<sup>H</sup>X<sup>h</sup>.</li>
<li><b>Autosomal linkage</b>: genes on the same chromosome are inherited together unless separated by crossing over, so ratios differ from 9:3:3:1. Recombinants are fewer.</li>
<li><b>Epistasis</b>: one gene affects the expression of another.</li>
</ul>
<h3>The chi-squared test</h3>
<p>Tests whether the difference between observed and expected results is due to chance.</p>
<div class="box box-key"><span class="box-title">χ²</span>χ<sup>2</sup> = Σ (O − E)<sup>2</sup> ÷ E; degrees of freedom = number of categories − 1. If χ<sup>2</sup> is <b>less than</b> the critical value at p = 0.05, accept the null hypothesis: the difference is due to chance.</div>
<h3>Mutations</h3>
<p>Gene mutations: substitution, insertion, deletion (frameshift). Chromosome mutations: changes in number (e.g. non-disjunction → Down's syndrome, trisomy 21) or structure. Mutagens (UV, X-rays, chemicals) increase the rate.</p>
`,
  quiz: [
    { q: "Aa × Aa gives a phenotypic ratio of…", o: ["3 : 1", "1 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1"], a: 0, e: "" },
    { q: "A dihybrid cross of two double heterozygotes gives…", o: ["9 : 3 : 3 : 1", "3 : 1", "1 : 1 : 1 : 1", "1 : 2 : 1"], a: 0, e: "" },
    { q: "In codominance…", o: ["Both alleles are expressed in the heterozygote", "One allele masks the other", "No allele is expressed", "Alleles are linked"], a: 0, e: "" },
    { q: "Why are sex-linked recessive conditions more common in males?", o: ["Males have only one X chromosome", "Males have two X chromosomes", "The Y carries the allele", "Males mutate more"], a: 0, e: "" },
    { q: "Blood group O has genotype…", o: ["IᴼIᴼ", "IᴬIᴮ", "IᴬIᴼ", "IᴮIᴼ"], a: 0, e: "" },
    { q: "Autosomal linkage means genes are…", o: ["On the same chromosome", "On sex chromosomes", "Codominant", "In mitochondria"], a: 0, e: "" },
    { q: "If χ² is greater than the critical value at p = 0.05…", o: ["Reject the null hypothesis: difference is significant", "Accept the null hypothesis", "The data are wrong", "Repeat with fewer samples"], a: 0, e: "" },
    { q: "Degrees of freedom for 4 phenotype categories?", o: ["3", "4", "2", "1"], a: 0, e: "" },
    { q: "Down's syndrome is caused by…", o: ["Non-disjunction giving an extra chromosome 21", "A point mutation", "Sex linkage", "Crossing over"], a: 0, e: "" }
  ],
  flashcards: [
    ["Genotype / phenotype", "Alleles present / observable characteristics"],
    ["Monohybrid heterozygote cross", "3 : 1"],
    ["Dihybrid heterozygote cross", "9 : 3 : 3 : 1"],
    ["Codominance", "Both alleles expressed in heterozygote"],
    ["Multiple alleles", "More than two alleles at a locus (ABO)"],
    ["Sex linkage", "Gene on X; recessive conditions more common in males"],
    ["Autosomal linkage", "Genes on same chromosome; fewer recombinants"],
    ["χ² formula", "Σ(O − E)² ÷ E"],
    ["χ² decision", "χ² < critical value: difference due to chance"],
    ["Non-disjunction", "Chromosomes fail to separate in meiosis"]
  ]
});

S2Data.add({
  id: "9b", group: 9, y2: true, title: "The kidney and osmoregulation",
  summary: "Nephron structure, ultrafiltration, selective reabsorption, the loop of Henle and ADH.",
  notes: `
<h3>Excretion</h3>
<p>The kidneys remove <b>urea</b> (made in the liver by deamination of excess amino acids) and regulate the water potential of the blood (<b>osmoregulation</b>).</p>
<h3>The nephron</h3>
<ol>
<li><b>Ultrafiltration</b> (Bowman's capsule): blood in the glomerulus is under high pressure (afferent arteriole wider than efferent). Small molecules (water, glucose, urea, ions) are forced through the capillary endothelium, basement membrane and podocytes into the capsule. Proteins and cells stay in the blood.</li>
<li><b>Selective reabsorption</b> (proximal convoluted tubule): all glucose, amino acids and most water and ions are reabsorbed. Cells have microvilli and many mitochondria (active transport, Na<sup>+</sup> co-transport).</li>
<li><b>Loop of Henle</b>: the ascending limb actively pumps Na<sup>+</sup> and Cl<sup>−</sup> out into the medulla (impermeable to water), creating a low water potential in the medulla; water leaves the descending limb by osmosis. This <b>countercurrent multiplier</b> lets concentrated urine be made. Longer loops in desert animals.</li>
<li><b>Distal convoluted tubule</b>: fine-tunes ion balance and pH.</li>
<li><b>Collecting duct</b>: water leaves by osmosis into the salty medulla, controlled by ADH.</li>
</ol>
<h3>ADH</h3>
<ul>
<li><b>Osmoreceptors</b> in the hypothalamus detect low blood water potential.</li>
<li>The posterior pituitary releases more <b>ADH</b>.</li>
<li>ADH makes collecting duct walls more permeable (more <b>aquaporins</b> inserted), so more water is reabsorbed: small volume of concentrated urine.</li>
<li>Negative feedback: when water potential rises, less ADH is released.</li>
</ul>
`,
  quiz: [
    { q: "Urea is made in the…", o: ["Liver", "Kidney", "Bladder", "Pancreas"], a: 0, e: "" },
    { q: "Ultrafiltration happens in the…", o: ["Bowman's capsule", "Loop of Henle", "Collecting duct", "Ureter"], a: 0, e: "" },
    { q: "Why is pressure high in the glomerulus?", o: ["The efferent arteriole is narrower than the afferent", "The heart is close", "Capillaries are wide", "Blood contains urea"], a: 0, e: "" },
    { q: "Which is NOT normally in the filtrate?", o: ["Plasma proteins", "Glucose", "Urea", "Water"], a: 0, e: "" },
    { q: "Where is all glucose reabsorbed?", o: ["Proximal convoluted tubule", "Loop of Henle", "Collecting duct", "Bowman's capsule"], a: 0, e: "" },
    { q: "The ascending limb of the loop of Henle…", o: ["Pumps Na⁺ and Cl⁻ out and is impermeable to water", "Is permeable to water", "Reabsorbs glucose", "Releases ADH"], a: 0, e: "" },
    { q: "ADH is released from the…", o: ["Posterior pituitary", "Hypothalamus directly into urine", "Kidney", "Adrenal gland"], a: 0, e: "" },
    { q: "ADH increases the permeability of the collecting duct by…", o: ["Adding aquaporins to the membrane", "Removing aquaporins", "Pumping Na⁺", "Dilating arterioles"], a: 0, e: "" },
    { q: "Desert animals have long loops of Henle so they can…", o: ["Produce very concentrated urine", "Make more urea", "Filter more blood", "Release more ADH"], a: 0, e: "" }
  ],
  flashcards: [
    ["Urea", "Made in liver by deamination of excess amino acids"],
    ["Ultrafiltration", "High pressure in glomerulus forces small molecules into Bowman's capsule"],
    ["Filtration barrier", "Capillary endothelium, basement membrane, podocytes"],
    ["Selective reabsorption", "PCT: all glucose, amino acids; most water and ions"],
    ["PCT cell adaptations", "Microvilli and many mitochondria"],
    ["Loop of Henle", "Countercurrent multiplier; salty medulla"],
    ["ADH source and target", "Posterior pituitary → collecting duct"],
    ["ADH effect", "More aquaporins → more water reabsorbed → concentrated urine"],
    ["Osmoreceptors", "In hypothalamus; detect blood water potential"]
  ]
});

S2Data.add({
  id: "9c", group: 9, y2: true, title: "Hormones in animals and plants",
  summary: "Endocrine glands, blood glucose control, adrenaline, and plant hormones and responses.",
  notes: `
<h3>Hormonal control</h3>
<p>Hormones are secreted by endocrine glands into the blood and act on target cells with specific receptors. Slower and longer-lasting than nerves.</p>
<h3>Blood glucose</h3>
<table>
<tr><th>Glucose too high</th><th>Glucose too low</th></tr>
<tr><td>β cells in the islets of Langerhans secrete <b>insulin</b></td><td>α cells secrete <b>glucagon</b></td></tr>
<tr><td>Cells take up more glucose (more GLUT4 carriers); liver converts glucose to glycogen (<b>glycogenesis</b>); respiration increases</td><td>Liver breaks down glycogen (<b>glycogenolysis</b>) and makes glucose from amino acids/glycerol (<b>gluconeogenesis</b>)</td></tr>
</table>
<p><b>Type 1 diabetes</b>: β cells destroyed (autoimmune), no insulin; treated with insulin injections. <b>Type 2</b>: cells less responsive to insulin; linked to obesity; treated with diet, exercise, drugs.</p>
<p><b>Adrenaline</b> binds to receptors on liver cells, activating adenylyl cyclase → <b>cAMP</b> (second messenger) → enzyme cascade → glycogenolysis.</p>
<h3>Plant hormones</h3>
<table>
<tr><th>Hormone</th><th>Effects</th></tr>
<tr><td><b>Auxin</b> (IAA)</td><td>Cell elongation in shoots; phototropism and gravitropism; apical dominance</td></tr>
<tr><td><b>Gibberellins</b></td><td>Stem elongation; seed germination (switch on amylase to break down starch)</td></tr>
<tr><td><b>Abscisic acid</b></td><td>Stomatal closure in drought; seed dormancy</td></tr>
<tr><td><b>Ethene</b></td><td>Fruit ripening; leaf fall</td></tr>
</table>
<p><b>Phototropism</b>: auxin moves to the shaded side of a shoot, cells there elongate, so it bends towards light. <b>Phytochrome</b> (P<sub>r</sub> ⇌ P<sub>fr</sub>) detects red/far-red light, controlling flowering and germination.</p>
`,
  quiz: [
    { q: "Insulin is secreted by…", o: ["β cells of the islets of Langerhans", "α cells", "The liver", "The adrenal gland"], a: 0, e: "" },
    { q: "Glucagon causes…", o: ["Glycogen breakdown in the liver", "Glucose uptake by muscles", "Glycogen synthesis", "Lower blood glucose"], a: 0, e: "" },
    { q: "Gluconeogenesis is…", o: ["Making glucose from non-carbohydrates", "Making glycogen", "Breaking down glycogen", "Respiring glucose"], a: 0, e: "" },
    { q: "Type 1 diabetes is caused by…", o: ["Destruction of β cells", "Insulin resistance", "Too much glucagon", "Too little glycogen"], a: 0, e: "" },
    { q: "Adrenaline acts via the second messenger…", o: ["cAMP", "ATP", "Insulin", "Glucose"], a: 0, e: "" },
    { q: "Which plant hormone stimulates seed germination?", o: ["Gibberellin", "Abscisic acid", "Ethene", "Auxin only"], a: 0, e: "" },
    { q: "Abscisic acid causes…", o: ["Stomatal closure", "Fruit ripening", "Stem elongation", "Germination"], a: 0, e: "" },
    { q: "Ethene is involved in…", o: ["Fruit ripening", "Stomatal opening", "Phototropism", "Germination"], a: 0, e: "" },
    { q: "In phototropism, auxin…", o: ["Moves to the shaded side and causes elongation there", "Moves to the light side", "Is destroyed by light completely", "Stops growth"], a: 0, e: "" }
  ],
  flashcards: [
    ["Insulin", "β cells; lowers blood glucose: uptake, glycogenesis"],
    ["Glucagon", "α cells; raises blood glucose: glycogenolysis, gluconeogenesis"],
    ["Glycogenesis / glycogenolysis", "Glucose → glycogen / glycogen → glucose"],
    ["Type 1 vs type 2 diabetes", "No insulin (autoimmune) vs insulin resistance"],
    ["Adrenaline mechanism", "Receptor → adenylyl cyclase → cAMP → enzyme cascade"],
    ["Auxin", "Cell elongation; tropisms; apical dominance"],
    ["Gibberellins", "Stem elongation; germination via amylase"],
    ["Abscisic acid", "Stomatal closure; dormancy"],
    ["Ethene", "Fruit ripening, leaf fall"],
    ["Phytochrome", "Pr ⇌ Pfr; flowering and germination"]
  ]
});

S2Data.add({
  id: "10a", group: 10, y2: true, title: "Energy flow and nutrient cycles",
  summary: "Trophic levels, productivity and efficiency, and the carbon and nitrogen cycles.",
  notes: `
<h3>Energy flow</h3>
<ul>
<li>Producers fix light energy by photosynthesis. <b>GPP</b> = total energy fixed; <b>NPP = GPP − R</b> (respiratory loss).</li>
<li>Energy passes up trophic levels (producer → primary consumer → secondary consumer…). Only about <b>10%</b> is transferred each step: energy is lost in respiration (heat), in parts not eaten, and in faeces and urine.</li>
<li>Efficiency = (energy at higher level ÷ energy at lower level) × 100.</li>
<li>This limits food chains to about 4–5 levels. Pyramids of energy are always pyramid-shaped.</li>
</ul>
<h3>The carbon cycle</h3>
<p>CO<sub>2</sub> is removed by photosynthesis, passed along food chains, and returned by respiration of all organisms and decomposers. Combustion of fossil fuels and deforestation add CO<sub>2</sub>; carbon is stored in fossil fuels, oceans and peat.</p>
<h3>The nitrogen cycle</h3>
<table>
<tr><th>Process</th><th>What happens</th><th>Organisms</th></tr>
<tr><td>Nitrogen fixation</td><td>N<sub>2</sub> → ammonium (NH<sub>4</sub><sup>+</sup>)</td><td><i>Rhizobium</i> in legume root nodules; <i>Azotobacter</i> in soil</td></tr>
<tr><td>Ammonification</td><td>Proteins, urea → ammonium</td><td>Decomposers (saprobionts)</td></tr>
<tr><td>Nitrification</td><td>NH<sub>4</sub><sup>+</sup> → NO<sub>2</sub><sup>−</sup> → NO<sub>3</sub><sup>−</sup> (needs O<sub>2</sub>)</td><td><i>Nitrosomonas</i>, <i>Nitrobacter</i></td></tr>
<tr><td>Denitrification</td><td>NO<sub>3</sub><sup>−</sup> → N<sub>2</sub> (anaerobic, waterlogged soil)</td><td>Denitrifying bacteria</td></tr>
</table>
<p>Plants absorb nitrates by active transport to make amino acids and nucleotides. Ploughing and draining soil aerates it, favouring nitrification over denitrification.</p>
`,
  quiz: [
    { q: "NPP = …", o: ["GPP − respiratory losses", "GPP + R", "Total sunlight", "Biomass of consumers"], a: 0, e: "" },
    { q: "About what percentage of energy passes between trophic levels?", o: ["10%", "50%", "90%", "1%"], a: 0, e: "" },
    { q: "Why are food chains short?", o: ["Energy is lost at each level", "Too many predators", "Producers are rare", "Decomposers eat everything"], a: 0, e: "" },
    { q: "Nitrogen fixation converts…", o: ["N₂ to ammonium", "Ammonium to nitrate", "Nitrate to N₂", "Proteins to ammonium"], a: 0, e: "" },
    { q: "Which bacteria fix nitrogen in legume root nodules?", o: ["Rhizobium", "Nitrosomonas", "Nitrobacter", "Denitrifying bacteria"], a: 0, e: "" },
    { q: "Nitrification requires…", o: ["Oxygen", "Waterlogged soil", "Darkness", "No bacteria"], a: 0, e: "" },
    { q: "Denitrification happens in…", o: ["Anaerobic, waterlogged soil", "Well-aerated soil", "Leaves", "Root nodules"], a: 0, e: "" },
    { q: "Ammonification is carried out by…", o: ["Decomposers", "Producers", "Nitrifying bacteria", "Herbivores"], a: 0, e: "" },
    { q: "Which process returns carbon to the atmosphere?", o: ["Respiration", "Photosynthesis", "Nitrogen fixation", "Transpiration"], a: 0, e: "" }
  ],
  flashcards: [
    ["GPP / NPP", "Total energy fixed / GPP − R"],
    ["Efficiency of transfer", "Energy at higher level ÷ lower level × 100 (≈ 10%)"],
    ["Energy losses", "Respiration (heat), not eaten, faeces and urine"],
    ["Carbon cycle: removal", "Photosynthesis"],
    ["Carbon cycle: return", "Respiration, decomposition, combustion"],
    ["Nitrogen fixation", "N₂ → NH₄⁺ (Rhizobium, Azotobacter)"],
    ["Ammonification", "Organic N → NH₄⁺ (decomposers)"],
    ["Nitrification", "NH₄⁺ → NO₂⁻ → NO₃⁻ (Nitrosomonas, Nitrobacter); aerobic"],
    ["Denitrification", "NO₃⁻ → N₂; anaerobic"]
  ]
});

S2Data.detail("6a", { mistakes: ["Forgetting to multiply by the dilution factor when calculating cells in the original culture."], tips: ["Use a log scale for population growth graphs: the log phase becomes a straight line."], fact: "Under ideal conditions E. coli divides every 20 minutes." });
S2Data.detail("7c", { mistakes: ["Saying DNA ligase cuts DNA. Restriction enzymes cut; ligase joins."], tips: ["Learn the sequence of making recombinant DNA as five clear steps."], fact: "Over 90% of the soya grown in the USA is genetically modified." });
S2Data.detail("8a", { mistakes: ["Using percentages instead of actual numbers in a chi-squared test."], tips: ["In sex-linkage questions, always write alleles as superscripts on X, and remember Y carries no allele."], fact: "Queen Victoria was a carrier of haemophilia, which passed into several European royal families." });
S2Data.detail("9b", { mistakes: ["Saying ADH makes the kidney produce more urine. It makes less, more concentrated urine."], tips: ["Link each region of the nephron to one main job: filter, reabsorb, concentrate, fine-tune, adjust water."], fact: "Kangaroo rats can survive without drinking, getting water from food and respiration." });
S2Data.detail("9c", { mistakes: ["Confusing glucagon with glycogen. Glucagon is the hormone; glycogen is the storage carbohydrate."], tips: ["For plant hormones, learn one main effect for each and one commercial use (e.g. ethene to ripen bananas)."], fact: "Banana ripening rooms use ethene gas so fruit arrives in shops just ripe." });
S2Data.detail("10a", { mistakes: ["Confusing nitrification (makes nitrate) with nitrogen fixation (makes ammonium from N<sub>2</sub>)."], tips: ["Draw the nitrogen cycle with each arrow labelled by process and bacterium."], fact: "Lightning fixes nitrogen too, converting N<sub>2</sub> into nitrogen oxides." });
