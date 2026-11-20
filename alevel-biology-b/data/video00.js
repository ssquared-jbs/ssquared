/* Shared with biology-a. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Carbohydrates, lipids and diet", sub: "Energy stores, fats and the energy budget.", mark: "C₆H₁₂O₆",
    say: ["Diet affects your risk of cardiovascular disease. Let's look at the molecules involved."] },
  { type: "compare", title: "Carbohydrates", h: ["Made of", "Example"],
    rows: [["Monosaccharide", "Single sugar unit", "Glucose, fructose"], ["Disaccharide", "Two joined by a glycosidic bond", "Sucrose, maltose, lactose"], ["Polysaccharide", "Many units", "Starch, glycogen"]],
    say: ["Monosaccharides are single sugar units, like glucose and fructose.", "Two monosaccharides join by condensation to form a disaccharide, with a glycosidic bond and a water molecule released.", "Many join to make polysaccharides. Starch and glycogen are compact, insoluble and branched, so glucose can be released quickly."] },
  { type: "points", title: "Triglycerides", items: ["Glycerol + 3 fatty acids", "Ester bonds by condensation", "Saturated: no C=C · unsaturated: C=C"],
    say: ["A triglyceride is made from one glycerol and three fatty acids.", "They join by condensation reactions, forming three ester bonds.", "Saturated fatty acids have no carbon carbon double bonds. Unsaturated ones have at least one, which puts a kink in the chain."] },
  { type: "compare", title: "LDLs and HDLs", h: ["Carries cholesterol", "CVD risk"],
    rows: [["LDL", "Liver → tissues", "High LDL raises risk"], ["HDL", "Tissues → liver", "High HDL lowers risk"]],
    say: ["Low density lipoproteins carry cholesterol from the liver to body tissues. High levels lead to deposits in artery walls.", "High density lipoproteins carry cholesterol back to the liver to be removed, so they're linked with lower risk."] },
  { type: "big", text: "Energy in > energy out → gain mass", sub: "Energy in < energy out → lose mass",
    say: ["Your energy budget is simple. If you take in more energy than you use, the extra is stored as fat and you gain mass.", "If you use more than you take in, you draw on stores and lose mass."] },
  { type: "quiz", q: "What bond forms between glycerol and a fatty acid?", o: ["Glycosidic", "Peptide", "Ester", "Hydrogen"], a: 2,
    why: "Triglycerides contain three ester bonds.", say: ["Final check. Which bond joins glycerol to a fatty acid?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Proteins and enzymes", sub: "From amino acid sequence to a working active site.", mark: "E",
    say: ["Proteins do almost everything in cells. Their shape is what makes them work."] },
  { type: "flow", title: "Levels of structure", nodes: ["Primary:<br>amino acid<br>sequence", "Secondary:<br>helix or sheet<br>(H bonds)", "Tertiary:<br>3D fold", "Quaternary:<br>several chains"],
    say: ["The primary structure is the sequence of amino acids, joined by peptide bonds.", "The chain coils into an alpha helix or folds into a beta pleated sheet, held by hydrogen bonds.", "It then folds into a precise three dimensional shape, held by hydrogen, ionic and disulfide bonds.", "Some proteins, like haemoglobin, have more than one polypeptide chain. That's quaternary structure."] },
  { type: "points", title: "How enzymes work", items: ["Substrate binds the active site", "Induced fit: active site moulds around it", "Lowers activation energy"],
    say: ["The substrate binds to the enzyme's active site, forming an enzyme substrate complex.", "In the induced fit model, the active site changes shape slightly to fit the substrate closely.", "This strains bonds and lowers the activation energy, so the reaction happens faster."] },
  { type: "graph", title: "Effect of temperature", x: "temperature", y: "rate",
    lines: [{ pts: [[0, 0.1], [0.3, 0.35], [0.55, 0.75], [0.68, 0.9], [0.8, 0.5], [0.92, 0.05]] }],
    marks: [{ x: 0.68, y: 0.9, t: "optimum", s: 2, anchor: "start", dx: 14, dy: -6 }],
    say: ["Let's sketch rate against temperature.", "As temperature rises, molecules have more kinetic energy, so collisions and enzyme substrate complexes become more frequent.", "Above the optimum, bonds holding the tertiary structure break. The active site changes shape and the enzyme denatures."] },
  { type: "quiz", q: "Which level of structure does a change in pH disrupt first?", o: ["Primary", "Tertiary (ionic and H bonds)", "Peptide bonds", "None"], a: 1,
    why: "pH affects ionic and hydrogen bonds that hold the 3D shape.", say: ["Quick check. Which level of protein structure does a change in pH disrupt?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "DNA and protein synthesis", sub: "Copying DNA, and reading it to make proteins.", mark: "DNA",
    say: ["DNA holds the instructions. Let's see how it's copied and how those instructions are used."] },
  { type: "flow", title: "Semi-conservative replication", nodes: ["Helicase breaks<br>H bonds", "Strands act<br>as templates", "Complementary<br>base pairing", "DNA polymerase<br>joins nucleotides"],
    say: ["DNA helicase breaks the hydrogen bonds between bases, unzipping the double helix.", "Each strand acts as a template.", "Free nucleotides pair up: A with T, and C with G.", "DNA polymerase joins them with phosphodiester bonds. Each new molecule has one old strand and one new one."] },
  { type: "flow", title: "Transcription and translation", nodes: ["Nucleus: mRNA<br>copied from gene", "mRNA to<br>ribosome", "tRNA anticodons<br>match codons", "Amino acids<br>joined"],
    say: ["In the nucleus, RNA polymerase makes an mRNA copy of the gene, using U instead of T.", "The mRNA leaves through a nuclear pore and attaches to a ribosome.", "Transfer RNA molecules bring specific amino acids. Their anticodons pair with the codons on the mRNA.", "Peptide bonds join the amino acids, until the ribosome reaches a stop codon."] },
  { type: "points", title: "The genetic code", items: ["Triplet: 3 bases = 1 amino acid", "Degenerate: several codons per amino acid", "Non-overlapping and universal"],
    say: ["Each codon is three bases, coding for one amino acid.", "The code is degenerate. Most amino acids have more than one codon, so some mutations have no effect.", "It's non-overlapping, and almost every organism uses the same code."] },
  { type: "quiz", q: "After one generation in ¹⁴N, Meselson and Stahl found DNA of…", o: ["Heavy density", "Light density", "Intermediate density", "Two bands, heavy and light"], a: 2,
    why: "Each molecule had one ¹⁵N strand and one ¹⁴N strand.", say: ["Meselson and Stahl grew bacteria in heavy nitrogen, then moved them to light nitrogen for one generation. What did they find?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Cells and microscopy", sub: "Organelles, prokaryotes and measuring with a microscope.", mark: "μm",
    say: ["Let's look inside cells, and at how we measure things far too small to see."] },
  { type: "flow", title: "Making and secreting a protein", nodes: ["Ribosomes on<br>rough ER", "Vesicle to<br>Golgi", "Modified and<br>packaged", "Exocytosis"],
    say: ["A protein for export is made on ribosomes on the rough endoplasmic reticulum.", "It's transported in a vesicle to the Golgi apparatus.", "The Golgi modifies it, for example adding carbohydrate, and packages it into new vesicles.", "These move to the cell surface and fuse with the membrane, releasing the protein by exocytosis."] },
  { type: "compare", title: "Prokaryotes vs eukaryotes", h: ["Prokaryote", "Eukaryote"],
    rows: [["DNA", "Circular, free; plasmids", "Linear, in a nucleus"], ["Ribosomes", "70S", "80S"], ["Organelles", "No membrane-bound ones", "Mitochondria, ER, Golgi"]],
    say: ["Prokaryotes like bacteria have circular DNA free in the cytoplasm, often with plasmids. Eukaryotes keep linear DNA in a nucleus.", "Prokaryotic ribosomes are smaller, seventy S rather than eighty S.", "And prokaryotes have no membrane-bound organelles."] },
  { type: "calc", title: "Magnification", q: "A 2 μm mitochondrion is 40 mm long in a micrograph. Magnification?",
    lines: ["Convert: 40 mm = 40 000 μm", "Magnification = image ÷ actual", "= 40 000 ÷ 2 = × 20 000"],
    say: ["First get both lengths in the same units. Forty millimetres is forty thousand micrometres.", "Magnification is image size divided by actual size.", "So the magnification is twenty thousand times."] },
  { type: "quiz", q: "Which organelle modifies and packages proteins?", o: ["Ribosome", "Golgi apparatus", "Lysosome", "Nucleolus"], a: 1,
    why: "The Golgi modifies and packages proteins into vesicles.", say: ["Which organelle modifies and packages proteins?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Mitosis, meiosis and fertilisation", sub: "Making identical cells, and making variation.", mark: "2n",
    say: ["Cells divide in two ways: mitosis for growth and repair, and meiosis for making gametes."] },
  { type: "cycle", title: "The cell cycle", nodes: ["G1: growth", "S: DNA<br>replicated", "G2: prepare", "Mitosis", "Cytokinesis"],
    say: ["In G1 the cell grows and makes organelles.", "In S phase, the DNA is replicated, so each chromosome has two sister chromatids.", "In G2 the cell checks the DNA and prepares to divide.", "Mitosis separates the chromatids into two nuclei: prophase, metaphase, anaphase and telophase.", "Finally cytokinesis splits the cytoplasm, giving two identical cells."] },
  { type: "compare", title: "Mitosis vs meiosis", h: ["Mitosis", "Meiosis"],
    rows: [["Divisions", "One", "Two"], ["Cells made", "2 diploid, identical", "4 haploid, different"], ["Used for", "Growth, repair", "Gametes"]],
    say: ["Mitosis involves one division, meiosis two.", "Mitosis makes two genetically identical diploid cells. Meiosis makes four haploid cells that are all different.", "Mitosis is for growth, repair and asexual reproduction. Meiosis makes gametes."] },
  { type: "points", title: "Sources of variation", items: ["Crossing over in prophase I", "Independent assortment in metaphase I", "Random fertilisation"],
    say: ["In prophase one, homologous chromosomes pair up and swap sections at chiasmata. That's crossing over.", "In metaphase one, the pairs line up randomly, so each gamete gets a different mix. That's independent assortment.", "Then any sperm can fertilise any egg, adding even more variation."] },
  { type: "quiz", q: "36 of 240 cells are dividing. Mitotic index?", o: ["6.7%", "15%", "36%", "24%"], a: 1,
    why: "36 ÷ 240 × 100 = 15%.", say: ["In a root tip squash, thirty six of two hundred and forty cells are in mitosis. What's the mitotic index?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Biodiversity and classification", sub: "Measuring variety, adaptation and naming life.", mark: "D",
    say: ["Biodiversity is the variety of life. Let's see how we measure it, how it arises and how we classify it."] },
  { type: "points", title: "Measuring biodiversity", items: ["Species richness: number of species", "Index of diversity: D = N(N − 1) ÷ Σn(n − 1)", "Genetic diversity: heterozygosity index"],
    say: ["Species richness is just the number of different species in an area.", "The index of diversity also takes into account how many individuals of each species there are.", "Within a species, we measure genetic diversity, for example using the heterozygosity index."] },
  { type: "flow", title: "Natural selection", nodes: ["Mutation:<br>new alleles", "Selection<br>pressure", "Advantaged<br>survive, breed", "Allele frequency<br>rises"],
    say: ["Mutations create new alleles, so individuals vary.", "A selection pressure, like a predator or climate, acts on that variation.", "Individuals with an advantageous allele are more likely to survive and reproduce.", "They pass on that allele, so its frequency in the population increases over generations."] },
  { type: "equation", title: "Hardy–Weinberg", rows: [["p + q = 1", "·", "p² + 2pq + q² = 1"]],
    note: "Start from q² = frequency of the recessive phenotype", noteStep: 1,
    say: ["The Hardy Weinberg equations let us estimate allele frequencies: p plus q equals one, and p squared plus two p q plus q squared equals one.", "Always start with q squared, the frequency of the recessive phenotype, then take the square root."] },
  { type: "points", title: "Classification", items: ["Domain, kingdom, phylum, class, order, family, genus, species", "Three domains: Bacteria, Archaea, Eukarya", "Molecular evidence, checked by peer review"],
    say: ["Organisms are grouped into a hierarchy, from domain down to species.", "Molecular evidence, like ribosomal RNA sequences, showed archaea are very different from bacteria, giving three domains.", "New classifications are checked by other scientists through peer review before they're accepted."] },
  { type: "quiz", q: "q² = 0.09. What is 2pq?", o: ["0.09", "0.42", "0.49", "0.3"], a: 1,
    why: "q = 0.3, p = 0.7, 2pq = 0.42.", say: ["The recessive phenotype frequency is point zero nine. What's the heterozygote frequency?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Membranes and gas exchange", sub: "How substances cross membranes, and why lungs work so well.", mark: "O₂",
    say: ["Every cell is wrapped in a membrane that controls what goes in and out. Let's see how."] },
  { type: "points", title: "The fluid mosaic model", items: ["Phospholipid bilayer", "Proteins: channels and carriers", "Cholesterol, glycoproteins, glycolipids"],
    say: ["The membrane is a phospholipid bilayer. Hydrophilic heads face out and hydrophobic tails face in.", "Proteins float within it. Some are channels and some are carriers.", "Cholesterol regulates fluidity, and glycoproteins act as receptors. It's fluid because the molecules move about, and a mosaic because the proteins are scattered through it."] },
  { type: "compare", title: "Crossing the membrane", h: ["Needs ATP?", "How"],
    rows: [["Diffusion", "No", "Small, non-polar molecules through the bilayer"], ["Facilitated diffusion", "No", "Channels or carriers, down a gradient"], ["Active transport", "Yes", "Carriers, against a gradient"], ["Endo/exocytosis", "Yes", "Vesicles for large molecules"]],
    say: ["Small non-polar molecules like oxygen diffuse straight through the bilayer.", "Ions and polar molecules need channel or carrier proteins. That's facilitated diffusion, still down a gradient.", "Active transport uses ATP and carrier proteins to move substances against a gradient.", "Large molecules are moved in vesicles, by endocytosis or exocytosis."] },
  { type: "equation", title: "Fick's law", rows: [["rate ∝", "surface area × concentration difference", "÷ thickness"]],
    note: "Alveoli: huge area · walls one cell thick · ventilation and blood flow keep the gradient steep", noteStep: 1,
    say: ["The rate of diffusion depends on surface area times concentration difference, divided by the thickness of the surface.", "The lungs maximise all three. Millions of alveoli give a huge area, walls are one cell thick, and ventilation and blood flow keep the gradient steep."] },
  { type: "quiz", q: "Which needs ATP?", o: ["Osmosis", "Facilitated diffusion", "Active transport", "Simple diffusion"], a: 2,
    why: "Active transport moves substances against a gradient.", say: ["Which of these needs ATP?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "The heart and circulation", sub: "Why we need a pump, and how it works.", mark: "♥",
    say: ["Big animals can't rely on diffusion alone. Let's see how the heart and blood vessels move substances around the body."] },
  { type: "points", title: "Why mass transport?", items: ["Small surface area to volume ratio", "Long diffusion distances", "Double circulation keeps pressure high"],
    say: ["As animals get bigger, their surface area to volume ratio gets smaller.", "Diffusion over long distances would be far too slow to supply every cell.", "Mammals have a double circulation. Blood goes back to the heart after the lungs, so it can be pumped round the body at high pressure."] },
  { type: "flow", title: "The cardiac cycle", nodes: ["Atrial systole:<br>AV valves open", "Ventricular systole:<br>AV valves shut,<br>semilunar open", "Diastole:<br>heart relaxes,<br>chambers fill"],
    say: ["First the atria contract, pushing blood through the open atrioventricular valves into the ventricles.", "Then the ventricles contract. Pressure rises above the atria, so the AV valves slam shut, and blood is forced out through the semilunar valves.", "Finally the muscle relaxes. The semilunar valves close and blood flows back into the chambers."] },
  { type: "compare", title: "Blood vessels", h: ["Structure", "Why"],
    rows: [["Artery", "Thick elastic, muscular wall", "Withstands and smooths high pressure"], ["Vein", "Wide lumen, valves", "Low pressure; valves stop backflow"], ["Capillary", "Wall one cell thick", "Short diffusion distance"]],
    say: ["Arteries have thick walls with elastic tissue and smooth muscle, so they can stretch and recoil under high pressure.", "Veins carry low pressure blood, so they have a wide lumen and valves to stop it flowing backwards.", "Capillaries have walls just one cell thick, giving a short diffusion distance for exchange with tissues."] },
  { type: "quiz", q: "What makes the AV valves close?", o: ["Atrial pressure rising", "Ventricular pressure rising above atrial pressure", "Nerves pulling them shut", "Blood entering the aorta"], a: 1,
    why: "Valves open and close because of pressure differences.", say: ["Quick check. What causes the atrioventricular valves to close?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Respiration", sub: "Four stages, from glucose to ATP.", mark: "ATP",
    say: ["Respiration releases energy from glucose to make ATP. Let's go through the four stages."] },
  { type: "compare", title: "Stages of aerobic respiration", h: ["Where", "Key products"],
    rows: [["Glycolysis", "Cytoplasm", "2 pyruvate, 2 ATP, 2 NADH"], ["Link reaction", "Matrix", "Acetyl CoA, CO₂, NADH"], ["Krebs cycle", "Matrix", "CO₂, NADH, FADH, ATP"], ["Oxidative phosphorylation", "Cristae", "Lots of ATP, water"]],
    say: ["Glycolysis happens in the cytoplasm. Glucose is split into two pyruvate, with a net gain of two ATP and two reduced NAD.", "In the link reaction, pyruvate enters the matrix and becomes acetyl coenzyme A, releasing carbon dioxide.", "The Krebs cycle releases more carbon dioxide and makes reduced NAD and reduced FAD.", "Oxidative phosphorylation on the cristae uses those to make most of the ATP."] },
  { type: "flow", title: "Oxidative phosphorylation", nodes: ["NADH, FADH<br>give electrons", "Electron transport<br>pumps H⁺", "H⁺ through<br>ATP synthase", "O₂ accepts e⁻:<br>water"],
    say: ["Reduced NAD and FAD release electrons to the electron transport chain.", "As electrons pass along, energy is used to pump protons into the intermembrane space.", "Protons flow back through ATP synthase, making ATP. That's chemiosmosis.", "Oxygen is the final electron acceptor, combining with electrons and protons to form water."] },
  { type: "big", text: "No O₂ → pyruvate → lactate", sub: "Regenerates NAD so glycolysis keeps making 2 ATP",
    say: ["Without oxygen, the electron transport chain stops.", "In muscles, pyruvate is reduced to lactate. This regenerates NAD, so glycolysis can keep going, but only two ATP are made per glucose."] },
  { type: "quiz", q: "Where is the electron transport chain?", o: ["Cytoplasm", "Matrix", "Inner mitochondrial membrane", "Outer membrane"], a: 2,
    why: "On the cristae.", say: ["Where is the electron transport chain found?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Photosynthesis", sub: "Capturing light energy and fixing carbon.", mark: "CO₂",
    say: ["Almost all the energy in ecosystems enters through photosynthesis. Let's follow it in two stages."] },
  { type: "flow", title: "Light-dependent reactions", nodes: ["Light excites<br>electrons", "Electron transport:<br>ATP made", "Photolysis:<br>H₂O → H⁺, e⁻, O₂", "NADP reduced"],
    say: ["On the thylakoid membranes, light excites electrons in chlorophyll to a higher energy level.", "They pass along an electron transport chain. The energy released pumps protons, which flow back through ATP synthase to make ATP.", "Water is split by photolysis, replacing the lost electrons and releasing oxygen.", "Finally electrons reduce NADP. ATP and reduced NADP go on to the Calvin cycle."] },
  { type: "cycle", title: "The Calvin cycle", nodes: ["CO₂ + RuBP<br>(RUBISCO)", "2 × GP", "GALP<br>(ATP, NADPH)", "RuBP<br>regenerated"],
    say: ["In the stroma, carbon dioxide combines with ribulose bisphosphate, catalysed by RUBISCO.", "This forms two molecules of glycerate three phosphate, GP.", "GP is reduced to GALP using ATP and reduced NADP. Some GALP is used to make glucose and other molecules.", "Most of it regenerates RuBP, using more ATP, so the cycle continues."] },
  { type: "graph", title: "Limiting factors", x: "light intensity", y: "rate",
    lines: [{ pts: [[0, 0], [0.3, 0.45], [0.55, 0.6], [1, 0.62]] }, { pts: [[0, 0], [0.35, 0.6], [0.65, 0.85], [1, 0.87]] }],
    marks: [{ x: 1, y: 0.87, t: "high CO₂", s: 2, anchor: "end", dx: -6, dy: -14 }, { x: 1, y: 0.62, t: "low CO₂", s: 2, anchor: "end", dx: -6, dy: 34 }],
    say: ["Plot rate against light intensity.", "At first, light limits the rate, so the line rises. Then it levels off when something else limits it.", "Raising carbon dioxide lifts the plateau, which shows carbon dioxide was the limiting factor."] },
  { type: "quiz", q: "Light is switched off. What happens to GP?", o: ["It falls", "It builds up", "No change", "It becomes RuBP"], a: 1,
    why: "No ATP or reduced NADP, so GP can't be reduced, but it's still made from RuBP.", say: ["If the light is switched off, what happens to the amount of GP?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Bacteria and viruses", sub: "TB and HIV.", mark: "HIV",
    say: ["Two of the world's deadliest infections are TB, caused by a bacterium, and AIDS, caused by a virus."] },
  { type: "compare", title: "Bacteria vs viruses", h: ["Bacteria", "Viruses"],
    rows: [["Size", "1–5 μm", "20–300 nm"], ["Structure", "Cell wall, ribosomes, DNA loop", "Nucleic acid in a capsid"], ["Reproduce", "Binary fission", "Only inside host cells"]],
    say: ["Bacteria are about a thousand times bigger than viruses.", "Bacteria are prokaryotic cells. Viruses are just nucleic acid in a protein coat, sometimes with an envelope.", "Bacteria divide by binary fission. Viruses can only replicate inside a host cell."] },
  { type: "flow", title: "HIV", nodes: ["Binds CD4 on<br>T helper cells", "RNA → DNA<br>(reverse transcriptase)", "Inserted into<br>host DNA", "T helper cells<br>destroyed: AIDS"],
    say: ["HIV binds to CD4 receptors on T helper cells.", "It's a retrovirus, so its enzyme reverse transcriptase copies its RNA into DNA.", "This DNA is inserted into the host's genome, where it can stay latent for years.", "As new viruses are made, T helper cells are destroyed. When numbers fall low enough, opportunistic infections take hold. That's AIDS."] },
  { type: "points", title: "TB", items: ["Spread by droplets", "Survives inside macrophages; tubercles form", "Becomes active if immunity weakens"],
    say: ["TB is caused by Mycobacterium tuberculosis and is spread in airborne droplets.", "In the lungs, macrophages engulf the bacteria, but they survive inside. The immune system walls them off in tubercles.", "If the immune system weakens, for example with HIV, the bacteria become active and destroy lung tissue."] },
  { type: "quiz", q: "Why don't antibiotics work on HIV?", o: ["HIV is too small", "Viruses lack the structures antibiotics target", "HIV has a thick wall", "It's a bacterium"], a: 1,
    why: "No cell wall or bacterial ribosomes to attack.", say: ["Why can't antibiotics treat HIV?"] }
]});

S2Data.video("6c", { scenes: [
  { type: "title", title: "The immune system", sub: "From inflammation to memory cells.", mark: "Y",
    say: ["Your immune system has two lines: fast general defences, and a slower response targeted at one pathogen."] },
  { type: "points", title: "Non-specific defences", items: ["Barriers: skin, mucus, lysozyme, stomach acid", "Inflammation and fever", "Phagocytosis; interferon"],
    say: ["Barriers keep most pathogens out: skin, mucus and cilia, lysozyme in tears and stomach acid.", "Inflammation brings more blood and white cells to an infected area. Fever slows pathogen growth.", "Phagocytes engulf and digest pathogens, and interferon stops viruses replicating in nearby cells."] },
  { type: "flow", title: "The specific response", nodes: ["Macrophage<br>presents antigen", "T helper cell<br>activated", "B cells divide:<br>plasma + memory", "T killer cells<br>destroy infected cells"],
    say: ["A macrophage engulfs a pathogen and displays its antigens on its surface.", "A T helper cell with a complementary receptor binds and is activated.", "It activates matching B cells, which divide. They become plasma cells that secrete antibodies, and memory cells.", "T helper cells also activate T killer cells, which destroy infected body cells."] },
  { type: "graph", title: "Primary vs secondary response", x: "time", y: "antibody concentration",
    lines: [{ pts: [[0, 0.03], [0.1, 0.05], [0.2, 0.18], [0.3, 0.08], [0.45, 0.06], [0.55, 0.2], [0.62, 0.7], [0.68, 0.9], [0.85, 0.62], [1, 0.45]] }],
    marks: [{ x: 0.2, y: 0.18, t: "primary", s: 2, anchor: "middle", dy: -16 }, { x: 0.66, y: 0.9, t: "secondary: faster, larger", s: 2, anchor: "start", dx: 14 }],
    say: ["Here's antibody concentration over two infections with the same pathogen.", "The first response is slow and small, while clonal selection happens.", "The second time, memory cells respond straight away, so the response is faster and much larger, often before symptoms appear."] },
  { type: "flow", title: "Antibiotic resistance", nodes: ["Random<br>mutation", "Antibiotic kills<br>non-resistant", "Resistant<br>survive, divide", "Resistance<br>spreads"],
    say: ["A random mutation makes one bacterium resistant.", "When an antibiotic is used, non-resistant bacteria die.", "The resistant ones survive and reproduce.", "So the population becomes resistant. Finishing courses and avoiding unnecessary prescriptions slow this down."] },
  { type: "quiz", q: "Antibodies in breast milk give…", o: ["Active natural immunity", "Passive natural immunity", "Active artificial immunity", "Lifelong immunity"], a: 1,
    why: "The baby receives antibodies but makes no memory cells.", say: ["Antibodies passed in breast milk give which kind of immunity?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "Forensics", sub: "DNA profiling and time of death.", mark: "PCR",
    say: ["Forensic biologists use DNA and the body itself to answer who, and when."] },
  { type: "cycle", title: "PCR", nodes: ["95 °C:<br>strands separate", "55 °C:<br>primers anneal", "72 °C:<br>Taq extends"],
    say: ["Heat the DNA to ninety five degrees. The hydrogen bonds break and the strands separate.", "Cool to about fifty five degrees so primers bind to the start of the target sequence.", "Heat to seventy two degrees. Taq polymerase, which doesn't denature, builds new strands. Repeat, and the DNA doubles every cycle."] },
  { type: "flow", title: "Gel electrophoresis", nodes: ["DNA in<br>wells", "Current<br>applied", "DNA moves<br>to anode", "Small fragments<br>go furthest"],
    say: ["DNA samples are loaded into wells in an agarose gel.", "An electric current is applied across the gel.", "DNA is negatively charged because of its phosphate groups, so it moves towards the positive anode.", "Smaller fragments move faster and further, so the fragments separate by size into bands."] },
  { type: "compare", title: "Time of death", h: ["Clue"],
    rows: [["Body temperature", "Cools at a roughly known rate"], ["Rigor mortis", "Stiffens at 4–6 h as ATP runs out"], ["Insects", "Blowfly larval stage"], ["Decomposition", "Autolysis, then bacteria"]],
    say: ["The body cools after death at a roughly predictable rate.", "Rigor mortis sets in after four to six hours, because no ATP is left to release myosin from actin.", "Forensic entomologists identify which insects are present and their life stage.", "And the stage of decomposition gives a longer time scale. All of these depend on temperature."] },
  { type: "quiz", q: "After 10 cycles, one DNA molecule becomes…", o: ["10", "20", "100", "1024"], a: 3,
    why: "2¹⁰ = 1024.", say: ["How many copies does one DNA molecule produce after ten PCR cycles?"] }
]});

S2Data.video("7b", { scenes: [
  { type: "title", title: "Stem cells and gene expression", sub: "Same genes, different cells.", mark: "SC",
    say: ["Every cell in your body has the same DNA. So how do they end up so different?"] },
  { type: "pyramid", title: "Potency", levels: [{ t: "Totipotent: any cell, including placenta", w: 1 }, { t: "Pluripotent: any body cell", w: 0.8 }, { t: "Multipotent: a few types", w: 0.6 }],
    side: "Embryo: pluripotent<br>Bone marrow: multipotent",
    say: ["Totipotent cells, from the first few divisions of the zygote, can become any cell, including the placenta.", "Pluripotent cells from the blastocyst can become any body cell.", "Multipotent adult stem cells, like those in bone marrow, form only a few types.", "That's why embryonic stem cells are so useful in research, and why their use is debated."] },
  { type: "flow", title: "Switching genes", nodes: ["Transcription<br>factors bind", "Gene<br>transcribed", "Protein made", "Cell<br>specialises"],
    say: ["Transcription factors bind to DNA near specific genes.", "This switches those genes on, so RNA polymerase transcribes them.", "The mRNA is translated into proteins.", "Those proteins give the cell its structure and function."] },
  { type: "compare", title: "Epigenetics", h: ["Change", "Effect"],
    rows: [["DNA methylation", "Methyl groups on cytosine", "Gene switched off"], ["Histone acetylation", "DNA wound less tightly", "Gene switched on"]],
    say: ["Adding methyl groups to cytosine bases stops transcription factors binding, so the gene is silenced.", "Acetylating histones loosens the DNA, making genes easier to transcribe. The base sequence never changes."] },
  { type: "quiz", q: "Which cells can form a placenta?", o: ["Totipotent", "Pluripotent", "Multipotent", "Unipotent"], a: 0,
    why: "Only totipotent cells can form extra-embryonic tissue.", say: ["Which type of stem cell can form placenta cells?"] }
]});

S2Data.video("8b", { scenes: [
  { type: "title", title: "Evolution and speciation", sub: "How one species becomes two.", mark: "≠",
    say: ["A species is a group that can interbreed to produce fertile offspring. So how do new species form?"] },
  { type: "flow", title: "Speciation", nodes: ["Populations<br>isolated", "No gene<br>flow", "Different<br>selection", "Can't make fertile<br>offspring"],
    say: ["First, two populations become reproductively isolated.", "Gene flow between them stops.", "Different mutations arise and different selection pressures act, so allele frequencies change in different ways.", "Eventually they can no longer interbreed to produce fertile offspring. They're separate species."] },
  { type: "compare", title: "Types of isolation", h: ["Example"],
    rows: [["Allopatric", "Geographical barrier: mountain, river, sea"], ["Sympatric: ecological", "Different habitats in the same area"], ["Sympatric: temporal", "Breed at different times"], ["Sympatric: behavioural", "Different courtship"]],
    say: ["In allopatric speciation, a geographical barrier separates the populations.", "In sympatric speciation they share an area. They might use different habitats within it.", "Or breed at different times of year.", "Or have different courtship behaviours, so they don't mate."] },
  { type: "points", title: "Molecular evidence", items: ["Compare DNA base sequences", "Compare protein amino acid sequences", "Fewer differences → more recent common ancestor"],
    say: ["We can compare the base sequences of the same gene in different species.", "Or the amino acid sequences of the same protein.", "The fewer the differences, the more recently the species shared a common ancestor."] },
  { type: "quiz", q: "Which is essential for speciation?", o: ["Reproductive isolation", "A large population", "No mutations", "Identical environments"], a: 0,
    why: "Without isolation, gene flow keeps populations the same.", say: ["What's essential for speciation to happen?"] }
]});

S2Data.video("9a", { scenes: [
  { type: "title", title: "Homeostasis", sub: "Keeping conditions steady.", mark: "37 °C",
    say: ["Enzymes need stable conditions. Homeostasis keeps your internal environment within narrow limits."] },
  { type: "cycle", title: "Negative feedback", nodes: ["Change from<br>set point", "Receptors<br>detect", "Control centre", "Effectors<br>reverse it"],
    say: ["It starts with a change away from the set point, like a rise in body temperature.", "Receptors detect the change.", "A control centre, like the hypothalamus, processes the information.", "Effectors bring about a response that reverses the change, returning conditions to the set point."] },
  { type: "compare", title: "Thermoregulation", h: ["Too hot", "Too cold"],
    rows: [["Arterioles", "Vasodilation", "Vasoconstriction"], ["Sweat", "More: evaporation", "Less"], ["Muscles", "Hairs flat", "Shivering, hairs raised"]],
    say: ["When you're hot, arterioles supplying the skin dilate, so more heat is radiated. When cold, they constrict.", "Sweating increases when hot, because evaporation removes heat.", "When cold, you shiver, which releases heat from respiration, and hairs stand up to trap air."] },
  { type: "compare", title: "How hormones act", h: ["Example", "Mechanism"],
    rows: [["Peptide", "Adrenaline", "Membrane receptor → cAMP"], ["Steroid", "Testosterone", "Enters cell → transcription factor"]],
    say: ["Peptide hormones can't cross the membrane. They bind to receptors on the surface and trigger a second messenger, like cyclic AMP.", "Steroid hormones are lipid soluble, so they diffuse in, bind to a receptor, and the complex acts as a transcription factor that switches genes on."] },
  { type: "quiz", q: "Which is positive feedback?", o: ["Sweating when hot", "Oxytocin in childbirth", "Insulin lowering glucose", "Shivering when cold"], a: 1,
    why: "Oxytocin increases contractions, which release more oxytocin.", say: ["Which of these is positive feedback?"] }
]});

S2Data.video("9d", { scenes: [
  { type: "title", title: "Nerve impulses and synapses", sub: "Electrical signals and chemical messages.", mark: "mV",
    say: ["Neurones send information as electrical impulses, then pass it on chemically at synapses."] },
  { type: "graph", title: "An action potential", x: "time", y: "potential",
    lines: [{ pts: [[0, 0.32], [0.2, 0.32], [0.27, 0.4], [0.35, 0.92], [0.45, 0.45], [0.52, 0.2], [0.65, 0.32], [1, 0.32]] }],
    marks: [{ x: 0.01, y: 0.32, t: "resting −70 mV", s: 0, anchor: "start", dy: -16 }, { x: 0.35, y: 0.92, t: "Na⁺ in: +40 mV", s: 1, anchor: "start", dx: 14 }, { x: 0.52, y: 0.2, t: "K⁺ out: hyperpolarised", s: 2, anchor: "start", dx: 14, dy: 34 }],
    say: ["At rest, the inside of a neurone is about minus seventy millivolts. The sodium potassium pump and potassium leaking out keep it there.", "When a stimulus reaches threshold, voltage-gated sodium channels open. Sodium floods in and the membrane depolarises to about plus forty.", "Then sodium channels close and potassium channels open. Potassium flows out, repolarising the membrane, and it briefly overshoots."] },
  { type: "points", title: "Key ideas", items: ["All-or-nothing: strength coded by frequency", "Refractory period: one direction", "Myelin: saltatory conduction"],
    say: ["Action potentials are all-or-nothing. A stronger stimulus gives more frequent impulses, not bigger ones.", "The refractory period stops the membrane firing again straight away, so impulses travel one way.", "In myelinated neurones, the impulse jumps between nodes of Ranvier, so it's much faster."] },
  { type: "flow", title: "At a synapse", nodes: ["Ca²⁺ enters<br>presynaptic knob", "Vesicles release<br>acetylcholine", "Binds receptors:<br>Na⁺ in", "Broken down by<br>acetylcholinesterase"],
    say: ["When an impulse arrives, calcium channels open and calcium ions enter the presynaptic knob.", "Vesicles fuse with the membrane and release acetylcholine, which diffuses across the cleft.", "It binds to receptors on the postsynaptic membrane, opening sodium channels and depolarising it.", "Acetylcholinesterase then breaks it down, so the signal doesn't continue."] },
  { type: "quiz", q: "What causes repolarisation?", o: ["Na⁺ flowing in", "K⁺ flowing out", "The Na⁺/K⁺ pump", "Ca²⁺ entering"], a: 1,
    why: "Voltage-gated K⁺ channels open.", say: ["What causes repolarisation?"] }
]});

S2Data.video("9e", { scenes: [
  { type: "title", title: "The brain and vision", sub: "Brain regions, rods and learning.", mark: "👁",
    say: ["Let's look at how the brain is organised, how we see, and how experience shapes it."] },
  { type: "compare", title: "Brain regions", h: ["Function"],
    rows: [["Cerebrum", "Thought, memory, vision, voluntary movement"], ["Cerebellum", "Balance and coordination"], ["Medulla", "Heart rate, breathing"], ["Hypothalamus", "Temperature, hormones"]],
    say: ["The cerebrum handles conscious thought, memory, language, vision and voluntary movement.", "The cerebellum coordinates balance and fine movement.", "The medulla controls automatic processes like heart rate and breathing.", "The hypothalamus controls body temperature and hormone release."] },
  { type: "flow", title: "How rods respond to light", nodes: ["Light bleaches<br>rhodopsin", "Na⁺ channels<br>close", "Rod hyperpolarises;<br>stops inhibiting", "Bipolar cell<br>fires"],
    say: ["Light splits rhodopsin into retinal and opsin.", "This closes sodium channels in the rod cell.", "The rod hyperpolarises, so it stops releasing its inhibitory neurotransmitter.", "Without that inhibition, the bipolar cell depolarises, and an impulse travels along the optic nerve."] },
  { type: "points", title: "Development and learning", items: ["Critical period for visual cortex", "Habituation: less Ca²⁺, less transmitter", "Nature vs nurture: twin studies"],
    say: ["Hubel and Wiesel showed that the visual cortex needs stimulation during a critical period early in life.", "Habituation is learning to ignore a harmless repeated stimulus. Fewer calcium channels open, so less neurotransmitter is released.", "Twin studies help untangle the effects of genes and environment."] },
  { type: "quiz", q: "In light, rod cells…", o: ["Depolarise", "Hyperpolarise", "Release more neurotransmitter", "Open Na⁺ channels"], a: 1,
    why: "Light closes Na⁺ channels.", say: ["What happens to a rod cell in light?"] }
]});

S2Data.video("10b", { scenes: [
  { type: "title", title: "Ecosystems and climate change", sub: "Succession, sampling and a warming world.", mark: "°C",
    say: ["Ecosystems change over time, and climate change is altering them faster. Let's look at both."] },
  { type: "flow", title: "Primary succession", nodes: ["Bare rock:<br>pioneers", "Soil forms<br>from humus", "Larger plants<br>outcompete", "Climax<br>community"],
    say: ["On bare rock, pioneer species like lichens colonise first and slowly weather the rock.", "When they die, they decompose into humus, and a thin soil develops.", "Grasses, then shrubs and trees, can grow. Each stage changes conditions and outcompetes the one before.", "Eventually a stable climax community forms, with higher biodiversity."] },
  { type: "compare", title: "Evidence for climate change", h: ["What it shows"],
    rows: [["Temperature records", "Direct measurements since the 1850s"], ["Tree rings", "Growing conditions year by year"], ["Pollen in peat", "Which plants grew, so past climate"], ["Ice cores", "Trapped air shows past CO₂"]],
    say: ["Thermometer records go back about a hundred and seventy years.", "Dendrochronology uses tree rings. Wide rings mean good growing conditions.", "Pollen preserved in peat bogs shows which plants grew, which tells us about the climate.", "Air bubbles trapped in ice cores record carbon dioxide levels over hundreds of thousands of years."] },
  { type: "equation", title: "Q₁₀", rows: [["Q₁₀ =", "rate at (T + 10 °C)", "÷ rate at T"]],
    note: "Q₁₀ ≈ 2 for many enzyme reactions: rates roughly double", noteStep: 1,
    say: ["Temperature affects enzyme controlled processes. We measure this with Q ten: the rate at ten degrees higher, divided by the original rate.", "For many reactions it's about two, so warming speeds up development, like earlier egg laying and leaf budding."] },
  { type: "quiz", q: "Ice cores give evidence for past…", o: ["Rainfall", "CO₂ levels", "Species numbers", "Sea level"], a: 1,
    why: "Trapped air bubbles record the atmosphere's composition.", say: ["What do ice cores give evidence for?"] }
]});
