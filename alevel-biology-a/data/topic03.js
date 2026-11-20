/* A-level Biology A² — Topics 3–4: Voice of the genome; Biodiversity and natural resources */

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Cell structure and microscopy",
  summary: "Eukaryotic and prokaryotic cells, organelles, the protein secretory pathway and microscopy.",
  notes: `
<h3>Eukaryotic cell organelles</h3>
<table>
<tr><th>Organelle</th><th>Function</th></tr>
<tr><td>Nucleus</td><td>Contains DNA (chromatin); nucleolus makes ribosomes</td></tr>
<tr><td>Rough ER</td><td>Ribosomes on surface; synthesises and transports proteins</td></tr>
<tr><td>Smooth ER</td><td>Synthesises lipids and steroids</td></tr>
<tr><td>Golgi apparatus</td><td>Modifies, packages and sorts proteins into vesicles</td></tr>
<tr><td>Mitochondria</td><td>Site of aerobic respiration (ATP production)</td></tr>
<tr><td>Ribosomes (80S)</td><td>Protein synthesis</td></tr>
<tr><td>Lysosomes</td><td>Contain digestive enzymes</td></tr>
<tr><td>Centrioles</td><td>Form spindle fibres in animal cell division</td></tr>
</table>
<h3>The secretory pathway</h3>
<p>Proteins made on ribosomes of the rough ER → transported in vesicles to the Golgi → modified (e.g. glycosylated) and packaged → secretory vesicles move to the cell membrane → exocytosis.</p>
<h3>Prokaryotic cells</h3>
<p>Smaller; no nucleus (circular DNA in the cytoplasm), plasmids, 70S ribosomes, cell wall (peptidoglycan), no membrane-bound organelles; may have capsule, flagella and pili.</p>
<h3>Organisation</h3>
<p>Cells → tissues (similar cells with a shared function) → organs → organ systems.</p>
<h3>Microscopy</h3>
<ul>
<li><b>Magnification</b> = image size ÷ actual size. Convert units (1 mm = 1000 μm).</li>
<li><b>Resolution</b>: the ability to distinguish two points as separate. Electron microscopes have much higher resolution because electrons have a shorter wavelength than light.</li>
<li>Use an <b>eyepiece graticule</b> calibrated against a <b>stage micrometer</b> to measure cells.</li>
</ul>
`,
  quiz: [
    { q: "Which organelle modifies and packages proteins?", o: ["Golgi apparatus", "Smooth ER", "Lysosome", "Nucleolus"], a: 0, e: "" },
    { q: "Where are ribosomes made?", o: ["Nucleolus", "Golgi", "Mitochondria", "Cell membrane"], a: 0, e: "" },
    { q: "Prokaryotic ribosomes are…", o: ["70S", "80S", "Absent", "Membrane-bound"], a: 0, e: "" },
    { q: "Which is found in prokaryotes but not usually in eukaryotes?", o: ["Plasmids", "Nucleus", "Mitochondria", "Golgi"], a: 0, e: "" },
    { q: "An image is 25 mm long; the cell is 50 μm. Magnification?", o: ["× 500", "× 50", "× 2", "× 5000"], a: 0, e: "25 000 ÷ 50." },
    { q: "Why do electron microscopes have greater resolution?", o: ["Electrons have a shorter wavelength than light", "They use brighter light", "They magnify more lenses", "Samples are alive"], a: 0, e: "" },
    { q: "Smooth ER makes…", o: ["Lipids", "Proteins", "DNA", "Ribosomes"], a: 0, e: "" },
    { q: "Which organelle is involved in forming spindle fibres in animal cells?", o: ["Centrioles", "Lysosomes", "Ribosomes", "Vacuole"], a: 0, e: "" },
    { q: "A tissue is…", o: ["A group of similar cells working together", "A single cell", "A group of organs", "A molecule"], a: 0, e: "" }
  ],
  flashcards: [
    ["Rough ER", "Ribosomes; protein synthesis and transport"],
    ["Golgi apparatus", "Modifies, packages and sorts proteins"],
    ["Mitochondria", "Aerobic respiration; ATP"],
    ["Lysosomes", "Digestive enzymes"],
    ["Secretory pathway", "RER → vesicle → Golgi → secretory vesicle → exocytosis"],
    ["Prokaryotic features", "No nucleus, circular DNA, plasmids, 70S ribosomes, peptidoglycan wall"],
    ["Magnification", "Image size ÷ actual size"],
    ["Resolution", "Ability to distinguish two close points"],
    ["Graticule calibration", "Eyepiece graticule against stage micrometer"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y1: true, title: "The cell cycle, mitosis and meiosis",
  summary: "Stages of the cell cycle and mitosis, meiosis and variation, and fertilisation in mammals and plants.",
  notes: `
<h3>The cell cycle</h3>
<p><b>Interphase</b> (G1: growth; S: DNA replication; G2: growth and preparation) → <b>mitosis</b> → <b>cytokinesis</b>.</p>
<h3>Mitosis</h3>
<ol>
<li><b>Prophase</b>: chromosomes condense (two chromatids joined at a centromere); nuclear envelope breaks down; spindle forms.</li>
<li><b>Metaphase</b>: chromosomes line up on the equator, attached to spindle fibres by their centromeres.</li>
<li><b>Anaphase</b>: centromeres split; sister chromatids are pulled to opposite poles.</li>
<li><b>Telophase</b>: chromatids reach the poles; nuclear envelopes reform.</li>
</ol>
<p>Mitosis produces two genetically identical diploid cells: used for growth, repair and asexual reproduction.</p>
<p><b>Mitotic index</b> = number of cells in mitosis ÷ total cells. Root tip squash: stain (e.g. toluidine blue), macerate in acid to separate cells, squash, and view.</p>
<h3>Meiosis</h3>
<ul>
<li>Two divisions, producing four <b>haploid</b>, genetically different gametes.</li>
<li>Variation from <b>independent assortment</b> (homologous pairs line up randomly in meiosis I) and <b>crossing over</b> (exchange of alleles between non-sister chromatids at chiasmata).</li>
<li><b>Linkage</b>: genes on the same chromosome tend to be inherited together unless crossing over separates them.</li>
</ul>
<h3>Fertilisation</h3>
<p><b>Mammals</b>: sperm reaches the egg; <b>acrosome reaction</b> releases enzymes that digest the zona pellucida; sperm and egg membranes fuse; the <b>cortical reaction</b> hardens the zona pellucida to block other sperm; nuclei fuse.</p>
<p><b>Plants</b>: pollen grain lands on stigma; pollen tube grows down the style (digesting tissue) to the ovule through the micropyle; two male nuclei: one fertilises the egg (zygote), the other fuses with polar nuclei (triploid endosperm): <b>double fertilisation</b>.</p>
`,
  quiz: [
    { q: "During which stage is DNA replicated?", o: ["S phase of interphase", "Prophase", "Anaphase", "Cytokinesis"], a: 0, e: "" },
    { q: "Chromosomes line up on the equator in…", o: ["Metaphase", "Prophase", "Anaphase", "Telophase"], a: 0, e: "" },
    { q: "Sister chromatids separate in…", o: ["Anaphase", "Metaphase", "Prophase", "Interphase"], a: 0, e: "" },
    { q: "Mitosis produces…", o: ["Two genetically identical diploid cells", "Four haploid cells", "Two haploid cells", "Four identical cells"], a: 0, e: "" },
    { q: "Which process causes variation in meiosis?", o: ["Crossing over and independent assortment", "DNA replication", "Cytokinesis", "Spindle formation"], a: 0, e: "" },
    { q: "Mitotic index = …", o: ["Cells in mitosis ÷ total cells", "Total cells ÷ cells in mitosis", "Cells in interphase ÷ total", "Number of chromosomes"], a: 0, e: "" },
    { q: "The acrosome reaction…", o: ["Releases enzymes to digest the zona pellucida", "Hardens the zona pellucida", "Fuses nuclei", "Forms a pollen tube"], a: 0, e: "" },
    { q: "In plant double fertilisation, one male nucleus fuses with the polar nuclei to form…", o: ["Triploid endosperm", "The zygote", "The pollen tube", "The seed coat"], a: 0, e: "" },
    { q: "Why does the cortical reaction happen?", o: ["To stop more than one sperm fertilising the egg", "To release the egg", "To start meiosis", "To digest the sperm"], a: 0, e: "" }
  ],
  flashcards: [
    ["Interphase", "G1 growth; S DNA replication; G2 preparation"],
    ["Prophase", "Chromosomes condense; envelope breaks down; spindle forms"],
    ["Metaphase", "Chromosomes on equator attached to spindle"],
    ["Anaphase", "Centromeres split; chromatids to poles"],
    ["Telophase", "Nuclear envelopes reform"],
    ["Mitotic index", "Cells in mitosis ÷ total cells"],
    ["Meiosis outcome", "Four haploid, genetically different cells"],
    ["Sources of variation in meiosis", "Independent assortment; crossing over"],
    ["Acrosome and cortical reactions", "Enzymes digest zona pellucida; zona hardens to block other sperm"],
    ["Double fertilisation", "Zygote + triploid endosperm"]
  ]
});

S2Data.add({
  id: "3c", group: 3, y1: true, title: "Stem cells and gene expression",
  summary: "Totipotent and pluripotent stem cells, differentiation, epigenetics and polygenic inheritance.",
  notes: `
<h3>Stem cells</h3>
<ul>
<li><b>Totipotent</b>: can become any cell type, including extra-embryonic tissues (early embryo up to ~16 cells).</li>
<li><b>Pluripotent</b>: can become almost any cell type (embryonic stem cells from the blastocyst).</li>
<li><b>Multipotent</b>: can become a limited range (adult stem cells, e.g. bone marrow).</li>
<li><b>Induced pluripotent stem cells (iPS)</b>: adult cells reprogrammed by adding transcription factors.</li>
</ul>
<p>Uses: treating diseases (e.g. replacing damaged tissue). Ethical issues: destruction of embryos (embryonic stem cells), consent, safety (risk of tumours). Regulated in the UK by the HFEA.</p>
<h3>Differentiation and gene expression</h3>
<p>All cells contain the same genes, but different genes are <b>switched on</b> in different cells. <b>Transcription factors</b> bind to promoter regions of DNA, allowing (or blocking) RNA polymerase to transcribe a gene. Specific proteins are then made, so the cell becomes specialised.</p>
<h3>Epigenetics</h3>
<p>Changes in gene expression without changing the DNA base sequence:</p>
<ul>
<li><b>DNA methylation</b>: methyl groups added to cytosine bases → gene usually switched off.</li>
<li><b>Histone modification</b>: acetylation loosens chromatin (genes more accessible, switched on); deacetylation tightens it.</li>
<li>Epigenetic marks can be influenced by the environment and some can be inherited.</li>
</ul>
<h3>Phenotype = genotype + environment</h3>
<ul>
<li><b>Polygenic</b> characteristics (e.g. height, skin colour) are controlled by many genes, giving <b>continuous variation</b> (normal distribution).</li>
<li>Monogenic characteristics give discontinuous variation.</li>
<li>Environment affects phenotype too: e.g. diet affects height; chlorosis in plants from lack of light or minerals.</li>
<li>Some conditions (e.g. cancer) involve multiple genes and environmental factors.</li>
</ul>
`,
  quiz: [
    { q: "Totipotent stem cells can…", o: ["Become any cell type including extra-embryonic tissues", "Become only blood cells", "Not divide", "Become a limited range of cells"], a: 0, e: "" },
    { q: "Embryonic stem cells from the blastocyst are…", o: ["Pluripotent", "Totipotent", "Multipotent", "Unipotent"], a: 0, e: "" },
    { q: "Transcription factors…", o: ["Bind to DNA to switch genes on or off", "Translate mRNA", "Replicate DNA", "Break down proteins"], a: 0, e: "" },
    { q: "DNA methylation usually…", o: ["Switches a gene off", "Switches a gene on", "Changes the base sequence", "Breaks DNA"], a: 0, e: "" },
    { q: "Histone acetylation makes genes…", o: ["More accessible (switched on)", "Less accessible", "Mutated", "Deleted"], a: 0, e: "" },
    { q: "Height shows continuous variation because it is…", o: ["Polygenic and affected by environment", "Controlled by one gene", "Not inherited", "Sex-linked"], a: 0, e: "" },
    { q: "Why do differentiated cells differ if they have the same DNA?", o: ["Different genes are expressed", "They have different genes", "They lose genes", "They have different chromosomes"], a: 0, e: "" },
    { q: "Induced pluripotent stem cells are made from…", o: ["Adult cells reprogrammed with transcription factors", "Embryos", "Bacteria", "Plant cells"], a: 0, e: "" },
    { q: "Epigenetic changes…", o: ["Alter gene expression without changing the base sequence", "Change the base sequence", "Only occur in plants", "Are always inherited"], a: 0, e: "" }
  ],
  flashcards: [
    ["Totipotent", "Any cell type including extra-embryonic (early embryo)"],
    ["Pluripotent", "Almost any cell type (embryonic stem cells)"],
    ["Multipotent", "Limited range (adult stem cells)"],
    ["iPS cells", "Adult cells reprogrammed using transcription factors"],
    ["Differentiation", "Different genes switched on → specialised proteins"],
    ["Transcription factor", "Protein binding DNA promoter to regulate transcription"],
    ["DNA methylation", "Methyl groups on cytosine; silences genes"],
    ["Histone acetylation", "Loosens chromatin; genes expressed"],
    ["Polygenic", "Many genes; continuous variation"],
    ["Phenotype", "Genotype + environment"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Biodiversity, adaptation and classification",
  summary: "Measuring biodiversity, niches and adaptations, natural selection, classification and conservation.",
  notes: `
<h3>Biodiversity</h3>
<ul>
<li><b>Species richness</b>: number of species in an area. <b>Genetic diversity</b>: variety of alleles within a species.</li>
<li><b>Heterozygosity index</b> H = number of heterozygotes ÷ number of individuals.</li>
<li><b>Index of diversity</b> D = N(N − 1) ÷ Σn(n − 1), which takes account of both richness and the number of individuals of each species.</li>
<li><b>Endemism</b>: a species found only in one place.</li>
</ul>
<h3>Niches and adaptation</h3>
<p>A <b>niche</b> is the role of a species in its habitat (what it eats, where it lives, its interactions). Adaptations can be anatomical, physiological or behavioural.</p>
<h3>Natural selection and Hardy–Weinberg</h3>
<ol>
<li>Variation exists due to mutation.</li>
<li>A selection pressure acts; individuals with advantageous alleles are more likely to survive and reproduce.</li>
<li>They pass on their alleles, so the allele frequency increases over generations.</li>
</ol>
<div class="box box-key"><span class="box-title">Hardy–Weinberg</span>p + q = 1 and p<sup>2</sup> + 2pq + q<sup>2</sup> = 1. Used to estimate allele frequencies and test whether a population is evolving (assumes no selection, mutation, migration, large population, random mating).</div>
<h3>Classification</h3>
<p>Domain → kingdom → phylum → class → order → family → genus → species. Three domains: Bacteria, Archaea, Eukarya. Classification is revised as new evidence (DNA sequences, protein structure) emerges, and new findings are checked by peer review at conferences and in journals.</p>
<h3>Conservation</h3>
<p><b>Zoos</b>: captive breeding, reintroduction, education, research; maintain genetic diversity with stud books. <b>Seed banks</b>: store seeds at low temperature and humidity; test germination regularly.</p>
`,
  quiz: [
    { q: "Species richness is…", o: ["The number of different species in an area", "The number of individuals", "Genetic variety within a species", "The size of the habitat"], a: 0, e: "" },
    { q: "A niche is…", o: ["The role of a species in its habitat", "Where it lives only", "Its population size", "Its genus"], a: 0, e: "" },
    { q: "In Hardy–Weinberg, if q² = 0.04, q = …", o: ["0.2", "0.04", "0.8", "0.16"], a: 0, e: "" },
    { q: "If q = 0.2, the frequency of heterozygotes (2pq) is…", o: ["0.32", "0.16", "0.64", "0.04"], a: 0, e: "2 × 0.8 × 0.2." },
    { q: "Which is the correct order (largest first)?", o: ["Domain, kingdom, phylum, class", "Kingdom, domain, class, phylum", "Phylum, class, domain, order", "Class, order, family, phylum"], a: 0, e: "" },
    { q: "The three domains are…", o: ["Bacteria, Archaea, Eukarya", "Plants, animals, fungi", "Prokaryotes, viruses, eukaryotes", "Protoctista, fungi, bacteria"], a: 0, e: "" },
    { q: "Seed banks store seeds…", o: ["Cold and dry", "Warm and moist", "In soil", "In water"], a: 0, e: "" },
    { q: "Heterozygosity index measures…", o: ["Genetic diversity", "Species richness", "Population size", "Niche width"], a: 0, e: "" },
    { q: "Which is a behavioural adaptation?", o: ["Migration", "Thick fur", "Producing antifreeze proteins", "Large ears"], a: 0, e: "" }
  ],
  flashcards: [
    ["Biodiversity", "Variety of living organisms: species richness and genetic diversity"],
    ["Heterozygosity index", "Heterozygotes ÷ total individuals"],
    ["Index of diversity", "D = N(N − 1) ÷ Σn(n − 1)"],
    ["Endemic", "Found only in one place"],
    ["Niche", "Role of a species in its habitat"],
    ["Natural selection", "Variation → selection pressure → survival and reproduction → allele frequency changes"],
    ["Hardy–Weinberg equations", "p + q = 1; p² + 2pq + q² = 1"],
    ["Taxonomic hierarchy", "Domain, kingdom, phylum, class, order, family, genus, species"],
    ["Three domains", "Bacteria, Archaea, Eukarya"],
    ["Conservation methods", "Zoos (captive breeding, reintroduction) and seed banks"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y1: true, title: "Plant structure and uses",
  summary: "Plant cells, cellulose and starch, xylem and sclerenchyma, plant fibres, mineral ions and drug testing.",
  notes: `
<h3>Plant cell structures</h3>
<p>Cell wall (cellulose), middle lamella (calcium pectate glues cells together), plasmodesmata (channels between cells), pits, chloroplasts, amyloplasts (store starch), large vacuole with tonoplast.</p>
<h3>Cellulose vs starch</h3>
<table>
<tr><th>Cellulose</th><th>Starch</th></tr>
<tr><td>β-glucose; alternate molecules flipped</td><td>α-glucose</td></tr>
<tr><td>Straight chains; hydrogen bonds between chains form microfibrils</td><td>Coiled (amylose) or branched (amylopectin)</td></tr>
<tr><td>Strong, structural</td><td>Compact energy store</td></tr>
</table>
<h3>Stems: xylem and sclerenchyma</h3>
<ul>
<li><b>Xylem vessels</b>: dead, hollow, lignified walls; transport water and mineral ions and provide support.</li>
<li><b>Sclerenchyma fibres</b>: dead, lignified, long cells for support.</li>
<li><b>Phloem</b>: transports sugars (translocation).</li>
</ul>
<p>Plant fibres (e.g. hemp) are strong because of cellulose microfibrils and lignin. Measure tensile strength by hanging masses on fibres until they break. Plant-based products are more sustainable: renewable, biodegradable.</p>
<h3>Mineral ions</h3>
<p>Nitrate (for amino acids, DNA), calcium (calcium pectate in the middle lamella), magnesium (chlorophyll). Deficiency symptoms include chlorosis (yellow leaves) from lack of magnesium.</p>
<h3>Drugs from plants</h3>
<p>William Withering used foxglove (digitalis) to treat dropsy, an early version of drug testing. Modern trials: preclinical (cells, animals), phase 1 (small group of healthy volunteers: safety), phase 2 (patients: effectiveness and dose), phase 3 (large numbers; randomised, <b>double-blind</b>, with <b>placebo</b>).</p>
<p>Practical: test antimicrobial properties of plant extracts on agar plates; measure clear zones (zones of inhibition) using aseptic technique.</p>
`,
  quiz: [
    { q: "Cellulose is made of…", o: ["β-glucose", "α-glucose", "Fructose", "Amino acids"], a: 0, e: "" },
    { q: "Why is cellulose strong?", o: ["Straight chains linked by hydrogen bonds into microfibrils", "It's branched", "It's coiled", "It's made of α-glucose"], a: 0, e: "" },
    { q: "Xylem vessels transport…", o: ["Water and mineral ions", "Sugars", "Proteins", "Hormones only"], a: 0, e: "" },
    { q: "Which substance strengthens xylem walls?", o: ["Lignin", "Pectin", "Starch", "Chitin"], a: 0, e: "" },
    { q: "Magnesium deficiency causes yellow leaves because Mg is needed for…", o: ["Chlorophyll", "Cell walls", "Proteins", "Starch"], a: 0, e: "" },
    { q: "The middle lamella contains…", o: ["Calcium pectate", "Cellulose", "Lignin", "Starch"], a: 0, e: "" },
    { q: "In a double-blind trial…", o: ["Neither patients nor doctors know who gets the drug", "Only patients know", "Only doctors know", "Two drugs are used"], a: 0, e: "" },
    { q: "Phase 1 trials test…", o: ["Safety in a small number of healthy volunteers", "Effectiveness in thousands of patients", "Dose in animals", "Cost"], a: 0, e: "" },
    { q: "Plasmodesmata are…", o: ["Channels connecting adjacent plant cells", "Starch stores", "Pores in xylem", "Part of chloroplasts"], a: 0, e: "" }
  ],
  flashcards: [
    ["Cellulose", "β-glucose chains; H bonds → microfibrils; structural"],
    ["Starch", "α-glucose; coiled/branched; energy store"],
    ["Xylem", "Dead, hollow, lignified; water and minerals; support"],
    ["Sclerenchyma", "Dead lignified fibres for support"],
    ["Phloem", "Translocation of sugars"],
    ["Middle lamella", "Calcium pectate glues cells together"],
    ["Plasmodesmata", "Cytoplasm channels between plant cells"],
    ["Mineral ions", "Nitrate (amino acids), calcium (middle lamella), magnesium (chlorophyll)"],
    ["Drug trial phases", "Preclinical → 1 safety → 2 effectiveness/dose → 3 large double-blind"],
    ["Placebo", "Inactive substance given to a control group"]
  ]
});

S2Data.detail("3a", { mistakes: ["Confusing magnification with resolution."], tips: ["Convert everything to micrometres before calculating magnification."], fact: "The smallest bacteria are about 0.2 μm across, close to the limit of light microscopes." });
S2Data.detail("3b", { mistakes: ["Saying chromosomes separate in anaphase of mitosis. It's sister chromatids."], tips: ["In a root tip squash, cells near the tip have the highest mitotic index."], fact: "Human cells in culture divide roughly every 24 hours." });
S2Data.detail("3c", { mistakes: ["Saying differentiated cells lose genes. They switch genes off."], tips: ["Link epigenetics to transcription: methylation and histone deacetylation stop transcription factors and RNA polymerase reaching the gene."], fact: "Identical twins become more epigenetically different as they age." });
S2Data.detail("4a", { mistakes: ["Forgetting to take the square root of q² before finding p in Hardy–Weinberg."], tips: ["Start Hardy–Weinberg questions from the homozygous recessive frequency, which is q²."], fact: "About 2 million species have been named, but estimates suggest there could be 8 million or more." });
S2Data.detail("4b", { mistakes: ["Saying xylem is living tissue. Mature xylem vessels are dead."], tips: ["When describing a drug trial, mention randomisation, placebo, double-blinding and large sample sizes."], fact: "Hemp fibre was used for ships' ropes and sails for centuries because it's so strong." });
