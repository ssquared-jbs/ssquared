/* Video explainers — A-level Biology A Topics 1–4. */

S2Data.video("1a", { scenes: [
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

S2Data.video("1b", { scenes: [
  { type: "title", title: "Cardiovascular disease and risk", sub: "How arteries get blocked, and what raises the risk.", mark: "CVD",
    say: ["Cardiovascular disease is the biggest cause of death in the UK. Let's look at how it develops and what increases the risk."] },
  { type: "flow", title: "Atherosclerosis", nodes: ["Endothelium<br>damaged", "White cells and<br>cholesterol build up", "Atheroma narrows<br>the artery", "Plaque ruptures:<br>clot forms"],
    say: ["It starts when the endothelium lining an artery is damaged, for example by high blood pressure or chemicals in smoke.", "An inflammatory response follows. White blood cells and cholesterol from LDLs build up in the wall.", "This forms an atheroma, a plaque that narrows the lumen and hardens the artery.", "If the plaque ruptures, a blood clot can form and block the artery completely."] },
  { type: "flow", title: "Blood clotting", nodes: ["Thromboplastin<br>released", "Prothrombin →<br>thrombin", "Fibrinogen →<br>fibrin mesh"],
    say: ["Damaged tissue and platelets release thromboplastin.", "With calcium ions, thromboplastin converts prothrombin into the enzyme thrombin.", "Thrombin converts soluble fibrinogen into insoluble fibrin, which forms a mesh that traps cells into a clot."] },
  { type: "points", title: "Risk factors", items: ["Can't change: genes, age, sex", "Can change: smoking, diet, inactivity, blood pressure", "Treatments: statins, antihypertensives, anticoagulants"],
    say: ["Some risk factors can't be changed, like your genes, age and sex.", "Others can: smoking, a diet high in saturated fat and salt, lack of exercise and high blood pressure.", "Drugs help too. Statins lower cholesterol, antihypertensives lower blood pressure and anticoagulants reduce clotting, though each has side effects."] },
  { type: "calc", title: "Relative risk", q: "45 of 1500 smokers and 15 of 1500 non-smokers got CVD.",
    lines: ["Smokers: 45 ÷ 1500 = 0.030", "Non-smokers: 15 ÷ 1500 = 0.010", "Relative risk = 0.030 ÷ 0.010 = 3"],
    say: ["First work out the risk in smokers: forty five out of fifteen hundred is point zero three.", "For non-smokers it's fifteen out of fifteen hundred, point zero one.", "Divide one by the other. Smokers are three times as likely to develop CVD in this study."] },
  { type: "quiz", q: "A study shows a correlation between salt intake and CVD. What can you conclude?", o: ["Salt causes CVD", "They're linked, but other factors may be involved", "There's no link", "CVD causes salt intake"], a: 1,
    why: "Correlation doesn't prove causation.", say: ["Here's one to think about. If salt intake and CVD are correlated, what can you conclude?"] }
]});

S2Data.video("1c", { scenes: [
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

S2Data.video("2a", { scenes: [
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

S2Data.video("2b", { scenes: [
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

S2Data.video("2c", { scenes: [
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

S2Data.video("2d", { scenes: [
  { type: "title", title: "Inheritance and cystic fibrosis", sub: "Genetic crosses, CF and the ethics of screening.", mark: "CF",
    say: ["Cystic fibrosis is caused by one faulty gene. It's a great example of how genotype affects the whole body."] },
  { type: "flow", title: "Why mucus gets thick", nodes: ["Faulty CFTR<br>channel", "Cl⁻ not<br>secreted", "Less water<br>by osmosis", "Thick, sticky<br>mucus"],
    say: ["CF is caused by a recessive allele of the CFTR gene. The CFTR protein is a chloride ion channel.", "In CF the channel doesn't work, so chloride ions aren't secreted out of epithelial cells.", "Water normally follows by osmosis. Without it, the mucus isn't hydrated.", "So mucus becomes thick and sticky."] },
  { type: "compare", title: "Effects on the body", h: ["Problem", "Result"],
    rows: [["Lungs", "Mucus blocks airways, cilia can't clear it", "Infections, poor gas exchange"], ["Pancreas", "Duct blocked", "Enzymes don't reach intestine"], ["Reproduction", "Sperm duct or cervix blocked", "Reduced fertility"]],
    say: ["In the lungs, mucus builds up because cilia can't move it, so infections are common and gas exchange is reduced.", "In the digestive system, the pancreatic duct gets blocked, so enzymes can't reach the small intestine and food isn't fully digested.", "In the reproductive system, mucus blocks the sperm duct or the cervix, reducing fertility."] },
  { type: "calc", title: "Two carriers have a child", q: "Cc × Cc",
    lines: ["Gametes: C or c from each parent", "Offspring: CC, Cc, Cc, cc", "P(CF) = 1 in 4 = 25%"],
    say: ["Each carrier parent can pass on either the normal allele or the CF allele.", "That gives four equally likely combinations.", "Only cc has CF, so the probability is one in four, twenty five percent."] },
  { type: "points", title: "Testing and treatment", items: ["Amniocentesis, CVS, PGD", "Ethics: miscarriage risk, termination, false results", "Gene therapy: somatic, not inherited"],
    say: ["Fetuses can be tested by amniocentesis or chorionic villus sampling. Embryos from IVF can be tested before implantation.", "These raise ethical questions: the risk of miscarriage, decisions about termination, and false results.", "Gene therapy delivers normal alleles to lung cells using viruses or liposomes. It must be repeated and isn't passed to children."] },
  { type: "quiz", q: "A carrier (Cc) has a child with someone with CF (cc). Probability of CF?", o: ["0%", "25%", "50%", "100%"], a: 2,
    why: "Cc × cc gives Cc, Cc, cc, cc.", say: ["Try this one. A carrier and someone with CF have a child. What's the chance the child has CF?"] }
]});

S2Data.video("3a", { scenes: [
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

S2Data.video("3b", { scenes: [
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

S2Data.video("3c", { scenes: [
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

S2Data.video("4a", { scenes: [
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
  { type: "title", title: "Plant structure and uses", sub: "Cellulose, xylem and drugs from plants.", mark: "🌱",
    say: ["Plants give us fibres, building materials and medicines. Let's see why."] },
  { type: "compare", title: "Starch vs cellulose", h: ["Monomer", "Structure"],
    rows: [["Starch", "α-glucose", "Coiled and branched: energy store"], ["Cellulose", "β-glucose", "Straight chains, H-bonded microfibrils"]],
    say: ["Starch is made of alpha glucose. Its coiled, branched chains make a compact energy store.", "Cellulose is made of beta glucose. Every other molecule is flipped, giving straight chains that hydrogen bond into strong microfibrils."] },
  { type: "compare", title: "Plant tissues", h: ["Structure", "Function"],
    rows: [["Xylem", "Dead, hollow, lignified tubes", "Water and minerals; support"], ["Phloem", "Sieve tubes, companion cells", "Sucrose and amino acids"], ["Sclerenchyma", "Lignified fibres", "Support"]],
    say: ["Xylem vessels are dead hollow tubes strengthened with lignin. They carry water and mineral ions, and support the plant.", "Phloem sieve tubes carry sucrose and amino acids, helped by companion cells.", "Sclerenchyma fibres are also lignified, and give strength. We use plant fibres in ropes and fabrics."] },
  { type: "flow", title: "Testing a new drug", nodes: ["Phase 1:<br>healthy volunteers,<br>safety", "Phase 2:<br>small patient group,<br>dose", "Phase 3:<br>large double-blind<br>trial"],
    say: ["In phase one, a small group of healthy volunteers takes the drug to check it's safe.", "In phase two, a small group of patients tests whether it works and what dose to use.", "In phase three, thousands of patients take part in a double blind trial, compared with a placebo or existing drug."] },
  { type: "quiz", q: "Which ion is needed to make chlorophyll?", o: ["Nitrate", "Calcium", "Magnesium", "Sodium"], a: 2,
    why: "Magnesium sits at the centre of the chlorophyll molecule.", say: ["Which mineral ion do plants need to make chlorophyll?"] }
]});
