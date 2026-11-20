/* Video explainers — A-level Biology B: content specific to Biology B. */

S2Data.video("1d", { scenes: [
  { type: "title", title: "Water and inorganic ions", sub: "Why life depends on a tiny polar molecule.", mark: "H₂O",
    say: ["Water makes up most of every cell. Its unusual properties all come from one thing: hydrogen bonds."] },
  { type: "big", text: "O is δ−, H is δ+", sub: "Hydrogen bonds form between neighbouring molecules",
    say: ["Oxygen pulls shared electrons more strongly than hydrogen, so the oxygen end is slightly negative and the hydrogen ends slightly positive.", "That lets hydrogen bonds form between neighbouring water molecules."] },
  { type: "compare", title: "Properties of water", h: ["Why it matters"],
    rows: [["Solvent", "Transport and reactions"], ["High specific heat capacity", "Stable temperatures"], ["High latent heat", "Sweating cools you"], ["Cohesion", "Water pulled up xylem"]],
    say: ["Because it's polar, water dissolves ions and polar molecules, so it's a great transport and reaction medium.", "Hydrogen bonds absorb a lot of energy, so water's temperature changes slowly. Lakes and cells stay stable.", "Evaporating water takes a lot of energy, so sweating and transpiration cool organisms down.", "Cohesion between molecules lets plants pull water up the xylem in a continuous column."] },
  { type: "compare", title: "Key ions", h: ["Role"],
    rows: [["Fe²⁺", "Haem in haemoglobin"], ["Mg²⁺", "Chlorophyll"], ["Ca²⁺", "Clotting, muscle, synapses"], ["PO₄³⁻", "ATP, DNA, phospholipids"]],
    say: ["Iron ions are part of the haem group that carries oxygen.", "Magnesium is at the centre of chlorophyll.", "Calcium is needed for blood clotting, muscle contraction and releasing neurotransmitters.", "Phosphate is part of ATP, nucleic acids and phospholipids."] },
  { type: "quiz", q: "Which property lets water move up xylem in a continuous column?", o: ["High specific heat", "Cohesion", "Ice floating", "Being a metabolite"], a: 1,
    why: "Hydrogen bonds hold the molecules together.", say: ["Which property of water lets it move up the xylem as a continuous column?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Viruses", sub: "Not alive, but very good at copying themselves.", mark: "λ",
    say: ["Viruses aren't cells, but they cause some of the deadliest diseases. Let's look at how they work."] },
  { type: "compare", title: "Types of virus", h: ["Genetic material", "Example"],
    rows: [["DNA virus", "DNA", "λ phage"], ["RNA virus", "RNA", "Tobacco mosaic virus, Ebola"], ["Retrovirus", "RNA + reverse transcriptase", "HIV"]],
    say: ["DNA viruses, like lambda phage, inject DNA into bacteria.", "RNA viruses, like tobacco mosaic virus, carry RNA.", "Retroviruses like HIV carry RNA and an enzyme, reverse transcriptase, that copies it into DNA."] },
  { type: "flow", title: "The lytic cycle", nodes: ["Attach to<br>receptor", "Nucleic acid<br>enters", "Host makes<br>viral parts", "Assemble;<br>cell bursts"],
    say: ["The virus's attachment proteins bind to specific receptors on the host cell.", "Its nucleic acid enters the cell.", "The host's ribosomes and enzymes make new viral nucleic acid and proteins.", "New viruses assemble and the cell bursts, releasing them to infect more cells."] },
  { type: "big", text: "Lysogenic: viral DNA hides in the host genome", sub: "Copied every division until a trigger starts the lytic cycle",
    say: ["In the lysogenic cycle, the viral DNA is inserted into the host chromosome as a provirus.", "It's copied every time the cell divides, until something triggers it to switch into the lytic cycle."] },
  { type: "quiz", q: "Why can't antibiotics treat viral infections?", o: ["Viruses are too small", "Viruses lack cell walls and bacterial ribosomes", "Viruses are bacteria", "Antibiotics destroy viruses too fast"], a: 1,
    why: "Antibiotics target bacterial structures.", say: ["Why don't antibiotics work against viruses?"] }
]});

S2Data.video("2d", { scenes: [
  { type: "title", title: "Sexual reproduction", sub: "Fertilisation in mammals and flowering plants.", mark: "♀♂",
    say: ["Sexual reproduction combines two haploid gametes. Mammals and plants do it in very different ways."] },
  { type: "flow", title: "Fertilisation in mammals", nodes: ["Acrosome<br>reaction", "Membranes<br>fuse", "Cortical<br>reaction", "Nuclei fuse:<br>zygote"],
    say: ["When a sperm reaches the oocyte, the acrosome releases enzymes that digest the zona pellucida.", "The sperm and oocyte membranes fuse, and the sperm nucleus enters.", "Cortical granules release enzymes that harden the zona pellucida, so no other sperm can get in.", "The oocyte finishes meiosis two, and the two haploid nuclei fuse to form a diploid zygote."] },
  { type: "flow", title: "Pollination to fertilisation", nodes: ["Pollen on<br>stigma", "Tube grows<br>down style", "Enters ovule via<br>micropyle", "Two male nuclei<br>released"],
    say: ["A pollen grain lands on the stigma.", "A pollen tube grows down the style, secreting enzymes to digest a path, guided by chemicals from the ovule.", "It enters the ovule through the micropyle.", "The tube releases two male nuclei."] },
  { type: "compare", title: "Double fertilisation", h: ["Fuses with", "Forms"],
    rows: [["Male nucleus 1", "Egg cell", "Diploid zygote → embryo"], ["Male nucleus 2", "Two polar nuclei", "Triploid endosperm → food store"]],
    say: ["One male nucleus fuses with the egg cell, forming a diploid zygote that grows into the embryo.", "The other fuses with the two polar nuclei, forming triploid endosperm, the seed's food store."] },
  { type: "quiz", q: "Endosperm cells are…", o: ["Haploid", "Diploid", "Triploid", "Tetraploid"], a: 2,
    why: "One male nucleus plus two polar nuclei.", say: ["How many sets of chromosomes do endosperm cells have?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Conservation", sub: "Protecting species in and out of the wild.", mark: "🌍",
    say: ["Biodiversity is falling fast. Let's look at why it matters and how we protect it."] },
  { type: "points", title: "Why conserve?", items: ["Ethical: right to exist, duty to the future", "Economic: medicines, food, tourism", "Ecological: pollination, clean water, climate"],
    say: ["Ethically, many people argue every species has a right to exist and we owe a healthy planet to future generations.", "Economically, wild species give us food, materials and medicines, and attract tourists.", "Ecologically, ecosystems provide services like pollination, clean water and climate regulation."] },
  { type: "compare", title: "Conservation methods", h: ["For", "Against"],
    rows: [["Zoos", "Captive breeding, education", "Small gene pools; may fail in wild"], ["Seed banks", "Many species, cheap, long-term", "Seeds don't evolve; viability falls"], ["In situ", "Whole ecosystem; keeps evolving", "Hard to enforce"]],
    say: ["Zoos run captive breeding programmes, using studbooks to avoid inbreeding. But populations are small and released animals may lack survival skills.", "Seed banks store huge numbers of seeds cheaply, dried and cold, and test them by germinating samples. But stored seeds can't adapt to change.", "Protecting habitats in situ keeps whole ecosystems working, though it's hard to enforce."] },
  { type: "quiz", q: "Why do zoos use studbooks?", o: ["To track feeding", "To avoid inbreeding", "To count visitors", "To record diseases only"], a: 1,
    why: "Choosing unrelated mates keeps genetic diversity.", say: ["Why do zoos keep studbooks?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "Gas exchange surfaces", sub: "Insects, fish and plants solve the same problem.", mark: "O₂",
    say: ["Bigger organisms have a smaller surface area to volume ratio, so they need special surfaces for gas exchange."] },
  { type: "flow", title: "Insects", nodes: ["Spiracles", "Tracheae", "Tracheoles", "Directly to<br>cells"],
    say: ["Air enters through spiracles, which can close to save water.", "It moves along tubes called tracheae.", "These branch into tiny tracheoles.", "Tracheoles reach right into the tissues, so oxygen diffuses straight into cells, with no blood involved."] },
  { type: "graph", title: "Countercurrent flow in fish", x: "distance along lamella", y: "O₂ concentration",
    lines: [{ pts: [[0, 0.9], [1, 0.2]], straight: true, s: 1 }, { pts: [[0, 0.75], [1, 0.05]], straight: true, s: 1 }],
    marks: [{ x: 0.5, y: 0.55, t: "water", s: 1, anchor: "start", dx: 10, dy: -14 }, { x: 0.5, y: 0.4, t: "blood", s: 1, anchor: "end", dx: -10, dy: 30 }],
    say: ["In fish gills, water flows over the lamellae while blood flows through them in the opposite direction.", "So all along the lamella, the water always has more oxygen than the blood it meets. A gradient is kept the whole way, and up to eighty percent of the oxygen is extracted."] },
  { type: "compare", title: "Leaves and water loss", h: ["Feature"],
    rows: [["Gas exchange", "Stomata + air spaces in spongy mesophyll"], ["Opening", "K⁺ into guard cells → turgid"], ["Xerophytes", "Thick cuticle, sunken stomata, rolled leaves"]],
    say: ["Leaves exchange gases through stomata, with air spaces giving a big internal surface.", "Guard cells take in potassium ions, water follows by osmosis, and they become turgid and open the pore.", "Xerophytes reduce water loss with thick waxy cuticles, sunken stomata, hairs and rolled leaves."] },
  { type: "quiz", q: "Why is countercurrent flow efficient?", o: ["Water moves faster", "A concentration gradient is kept along the whole lamella", "Blood stops at the gills", "It warms the water"], a: 1,
    why: "Equilibrium is never reached.", say: ["Why is countercurrent flow so efficient?"] }
]});

S2Data.video("4d", { scenes: [
  { type: "title", title: "Haemoglobin and blood", sub: "Loading oxygen in the lungs, unloading it in tissues.", mark: "Hb",
    say: ["Haemoglobin has to grab oxygen in the lungs and let it go in the tissues. Its curve shows how."] },
  { type: "graph", title: "Oxygen dissociation curves", x: "partial pressure of O₂", y: "% saturation",
    lines: [{ pts: [[0, 0.02], [0.2, 0.15], [0.35, 0.55], [0.5, 0.82], [0.7, 0.93], [1, 0.97]], s: 0 }, { pts: [[0, 0.01], [0.25, 0.1], [0.45, 0.45], [0.6, 0.72], [0.8, 0.88], [1, 0.94]], s: 1 }],
    marks: [{ x: 0.5, y: 0.82, t: "normal", s: 0, anchor: "end", dx: -12, dy: -6 }, { x: 0.6, y: 0.72, t: "more CO₂: Bohr shift", s: 1, anchor: "start", dx: 14, dy: 18 }],
    say: ["The curve is S-shaped. Once the first oxygen binds, haemoglobin changes shape and the next ones bind more easily. That's cooperative binding.", "When respiring tissues make more carbon dioxide, the pH falls and the curve shifts right. Haemoglobin's affinity drops, so more oxygen is released. That's the Bohr effect."] },
  { type: "points", title: "Other curves", items: ["Fetal Hb: left shift, higher affinity", "Myoglobin: far left, an oxygen store", "CO₂ carried mostly as HCO₃⁻"],
    say: ["Fetal haemoglobin's curve is to the left, so it can take oxygen from the mother's blood at the placenta.", "Myoglobin in muscles holds oxygen very tightly and only releases it when levels are very low.", "Most carbon dioxide travels as hydrogencarbonate ions, made by carbonic anhydrase in red blood cells."] },
  { type: "flow", title: "Clotting", nodes: ["Thromboplastin", "Prothrombin →<br>thrombin", "Fibrinogen →<br>fibrin mesh"],
    say: ["Damaged tissue and platelets release thromboplastin.", "With calcium ions, it converts prothrombin into thrombin.", "Thrombin turns soluble fibrinogen into insoluble fibrin threads that trap cells into a clot."] },
  { type: "quiz", q: "A right shift of the curve means haemoglobin…", o: ["Holds O₂ more tightly", "Releases O₂ more readily", "Can't carry O₂", "Carries CO₂ only"], a: 1,
    why: "Lower affinity means more unloading.", say: ["What does a shift to the right mean for haemoglobin?"] }
]});

S2Data.video("4e", { scenes: [
  { type: "title", title: "Transport in plants", sub: "Water up the xylem, sugar through the phloem.", mark: "🌳",
    say: ["Plants have no heart, yet they move water up a hundred metres. Let's see how."] },
  { type: "flow", title: "Cohesion–tension", nodes: ["Water evaporates<br>from leaves", "Tension in<br>xylem", "Cohesion holds<br>the column", "Water pulled up<br>from roots"],
    say: ["Water evaporates from mesophyll cells and diffuses out of the stomata. That's transpiration.", "This pulls water out of the xylem, putting it under tension.", "Hydrogen bonds hold water molecules together in a continuous column, and adhesion to the walls helps.", "So the whole column is pulled up from the roots. Lignin stops the xylem collapsing."] },
  { type: "compare", title: "Transpiration rate", h: ["Effect", "Why"],
    rows: [["Light", "↑", "Stomata open"], ["Temperature", "↑", "More kinetic energy"], ["Wind", "↑", "Moist air blown away"], ["Humidity", "↓", "Smaller gradient"]],
    say: ["Light opens stomata, so transpiration increases.", "Higher temperatures give molecules more energy, so evaporation is faster.", "Wind blows away the moist air around the leaf, keeping the gradient steep.", "High humidity reduces the gradient, so transpiration slows."] },
  { type: "flow", title: "Mass flow in phloem", nodes: ["Sucrose loaded<br>at source", "Water in by<br>osmosis", "High pressure<br>pushes sap", "Unloaded<br>at sink"],
    say: ["At a source like a leaf, companion cells actively load sucrose into the sieve tubes.", "This lowers the water potential, so water enters from the xylem by osmosis.", "Hydrostatic pressure builds up and pushes the sap along.", "At a sink, like a root or fruit, sucrose is removed and water leaves, keeping the pressure low there."] },
  { type: "quiz", q: "A potometer actually measures…", o: ["Transpiration exactly", "Water uptake", "Sucrose transport", "Photosynthesis"], a: 1,
    why: "Some water taken up is used, not lost.", say: ["What does a potometer actually measure?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Microbiology", sub: "Growing bacteria safely and counting them.", mark: "10⁻⁵",
    say: ["To study microorganisms we have to grow them safely, then count billions of invisible cells."] },
  { type: "points", title: "Aseptic technique", items: ["Flame the loop; work near a Bunsen", "Open lids briefly; tape, don't seal", "Incubate at 25 °C, upside down"],
    say: ["Sterilise loops in a flame until red hot, and work near a Bunsen burner so air rises away from your plate.", "Lift lids only slightly and briefly. Tape lids but don't seal them, so anaerobic pathogens don't grow.", "In school, incubate at twenty five degrees to avoid growing human pathogens, and keep plates upside down."] },
  { type: "calc", title: "Serial dilution", q: "64 colonies grew from 0.1 cm³ of a 10⁻⁵ dilution.",
    lines: ["Cells in 0.1 cm³ of original = 64 × 10⁵", "= 6.4 × 10⁶", "Per cm³ = 6.4 × 10⁷"],
    say: ["Each colony grew from one cell. To get back to the original culture, multiply by the dilution factor, ten to the five.", "That's six point four million cells in a tenth of a cubic centimetre.", "Divide by the volume plated: six point four times ten to the seven cells per cubic centimetre."] },
  { type: "graph", title: "Bacterial growth curve", x: "time", y: "log number of cells",
    lines: [{ pts: [[0, 0.1], [0.15, 0.12], [0.4, 0.68], [0.55, 0.84], [0.72, 0.83], [1, 0.55]] }],
    marks: [{ x: 0.07, y: 0.11, t: "lag", s: 2, anchor: "middle", dy: -16 }, { x: 0.3, y: 0.46, t: "log", s: 2, anchor: "end", dx: -12 }, { x: 0.63, y: 0.84, t: "stationary", s: 2, anchor: "middle", dy: -24 }, { x: 0.9, y: 0.63, t: "death", s: 2, anchor: "start", dx: 10 }],
    say: ["Here's a population growing in a closed culture, plotted on a log scale.", "In the lag phase, cells adapt and make enzymes. In the log phase they divide exponentially, so it's a straight line on a log scale.", "In the stationary phase nutrients run low and toxins build up, so births equal deaths. Then the death phase begins."] },
  { type: "quiz", q: "A viable count counts…", o: ["Living and dead cells", "Only living cells", "Only spores", "Cell mass"], a: 1,
    why: "Only living cells form colonies.", say: ["What does a viable count measure?"] }
]});

S2Data.video("7c", { scenes: [
  { type: "title", title: "Gene technology", sub: "Moving genes between organisms.", mark: "GM",
    say: ["We can cut a gene out of one organism and put it into another. Here's how, and why it's debated."] },
  { type: "flow", title: "Making recombinant DNA", nodes: ["Gene cut out<br>or made as cDNA", "Plasmid cut with<br>same enzyme", "DNA ligase<br>joins them", "Into host;<br>marker genes"],
    say: ["The gene is cut out with a restriction enzyme, or made from mRNA by reverse transcriptase, which gives a copy with no introns.", "The plasmid is cut with the same restriction enzyme, so the sticky ends are complementary.", "DNA ligase seals the gene into the plasmid.", "Host cells take up the plasmid, and marker genes like antibiotic resistance show which ones did."] },
  { type: "compare", title: "Uses", h: ["Example"],
    rows: [["Microorganisms", "Human insulin"], ["Plants", "Bt pest resistance, Golden Rice"], ["Animals", "Medicines in goat milk"], ["Gene therapy", "Functional alleles into body cells"]],
    say: ["GM bacteria make human insulin.", "GM crops resist pests or carry extra nutrients, like Golden Rice with beta carotene.", "GM goats can produce human proteins in their milk.", "Gene therapy delivers working alleles to a patient's cells."] },
  { type: "compare", title: "The debate", h: ["Points"],
    rows: [["For", "Higher yields, less pesticide, medicines"], ["Against", "Gene flow to weeds, resistance, biodiversity"], ["Ethics", "Patents, cost, animal welfare"]],
    say: ["Supporters point to higher yields, less pesticide spraying and new medicines.", "Critics worry genes could spread to wild plants, pests could evolve resistance and biodiversity could fall.", "There are also questions about patents, costs for poorer farmers and animal welfare."] },
  { type: "quiz", q: "Why use cDNA to express a human gene in bacteria?", o: ["It has introns", "It has no introns", "It's RNA", "It's shorter than mRNA"], a: 1,
    why: "Bacteria can't splice out introns.", say: ["Why is cDNA used to express human genes in bacteria?"] }
]});

S2Data.video("8a", { scenes: [
  { type: "title", title: "Inheritance", sub: "Crosses, sex linkage and the chi-squared test.", mark: "χ²",
    say: ["Genetics problems follow a few patterns. Once you know them, you can predict ratios and test them."] },
  { type: "compare", title: "Patterns of inheritance", h: ["Ratio or feature"],
    rows: [["Monohybrid Aa × Aa", "3 : 1"], ["Dihybrid AaBb × AaBb", "9 : 3 : 3 : 1"], ["Codominance", "Both alleles show"], ["Linkage", "Fewer recombinants"]],
    say: ["Crossing two heterozygotes for one gene gives a three to one ratio.", "For two unlinked genes, double heterozygotes give nine to three to three to one.", "In codominance, heterozygotes show both alleles, like roan cattle or blood group AB.", "If genes are linked on the same chromosome, they're inherited together, and recombinants only come from crossing over."] },
  { type: "calc", title: "Sex linkage", q: "Carrier mother XᴴXʰ × unaffected father XᴴY",
    lines: ["Daughters: XᴴXᴴ or XᴴXʰ: none affected", "Sons: XᴴY or XʰY", "P(son affected) = 50%"],
    say: ["Daughters get the father's normal X, so none are affected, though half are carriers.", "Sons get the Y from their father and either X from their mother.", "So each son has a fifty percent chance of haemophilia."] },
  { type: "equation", title: "Chi-squared", rows: [["χ² =", "Σ (O − E)²", "÷ E"]],
    note: "Degrees of freedom = categories − 1 · if χ² < critical value at p = 0.05, the difference is due to chance", noteStep: 1,
    say: ["To test whether results fit a predicted ratio, calculate chi squared: the sum of observed minus expected, squared, divided by expected.", "Compare it with the critical value for your degrees of freedom. If it's smaller, accept the null hypothesis: any difference is down to chance."] },
  { type: "quiz", q: "Why are X-linked recessive conditions more common in males?", o: ["Males have two X chromosomes", "Males have one X chromosome", "The Y carries the allele", "Males mutate more"], a: 1,
    why: "One recessive allele is enough.", say: ["Why are X-linked recessive conditions more common in males?"] }
]});

S2Data.video("9b", { scenes: [
  { type: "title", title: "The kidney", sub: "Filtering blood and balancing water.", mark: "ADH",
    say: ["Your kidneys filter about a hundred and eighty litres a day, yet you make about one and a half litres of urine. Here's how."] },
  { type: "flow", title: "Through the nephron", nodes: ["Ultrafiltration:<br>Bowman's capsule", "Reabsorption:<br>PCT", "Loop of Henle:<br>salty medulla", "Collecting duct:<br>water (ADH)"],
    say: ["In the Bowman's capsule, high pressure forces small molecules out of the glomerulus. Proteins and cells stay behind.", "In the proximal convoluted tubule, all the glucose and most of the water and ions are reabsorbed, using microvilli and lots of mitochondria.", "The loop of Henle pumps sodium and chloride into the medulla, making it very salty.", "In the collecting duct, water leaves by osmosis into the salty medulla. How much depends on ADH."] },
  { type: "flow", title: "ADH when dehydrated", nodes: ["Osmoreceptors<br>detect low ψ", "Pituitary<br>releases ADH", "More<br>aquaporins", "More water<br>reabsorbed"],
    say: ["Osmoreceptors in the hypothalamus detect that blood water potential is too low.", "The posterior pituitary releases more ADH.", "ADH makes collecting duct cells insert more aquaporins into their membranes.", "So more water is reabsorbed and you make a small volume of concentrated urine."] },
  { type: "quiz", q: "Where is all the glucose reabsorbed?", o: ["Bowman's capsule", "Proximal convoluted tubule", "Loop of Henle", "Collecting duct"], a: 1,
    why: "Co-transport with Na⁺ in the PCT.", say: ["Where in the nephron is all the glucose reabsorbed?"] }
]});

S2Data.video("9c", { scenes: [
  { type: "title", title: "Hormones in animals and plants", sub: "Chemical messages that control growth and balance.", mark: "IAA",
    say: ["Hormones control everything from blood sugar to which way a shoot grows."] },
  { type: "compare", title: "Blood glucose", h: ["Hormone", "Effect"],
    rows: [["Too high", "Insulin (β cells)", "Uptake, glycogenesis"], ["Too low", "Glucagon (α cells)", "Glycogenolysis, gluconeogenesis"]],
    say: ["When blood glucose rises, beta cells release insulin. Cells take up more glucose and the liver stores it as glycogen.", "When it falls, alpha cells release glucagon. The liver breaks glycogen down and makes new glucose from other molecules."] },
  { type: "flow", title: "How adrenaline works", nodes: ["Binds<br>receptor", "Adenylyl cyclase:<br>ATP → cAMP", "Enzyme<br>cascade", "Glycogen →<br>glucose"],
    say: ["Adrenaline can't enter the cell, so it binds to a receptor on the membrane.", "This activates adenylyl cyclase, which turns ATP into cyclic AMP, the second messenger.", "Cyclic AMP activates protein kinase and an enzyme cascade that amplifies the signal.", "Glycogen is broken down, releasing glucose for fight or flight."] },
  { type: "compare", title: "Plant hormones", h: ["Main effect"],
    rows: [["Auxin", "Cell elongation; phototropism"], ["Gibberellin", "Stem growth; germination"], ["Abscisic acid", "Closes stomata"], ["Ethene", "Fruit ripening"]],
    say: ["Auxin makes shoot cells elongate. It gathers on the shaded side, so shoots bend towards light.", "Gibberellins lengthen stems and trigger germination by switching on amylase.", "Abscisic acid closes stomata during drought.", "Ethene ripens fruit, which is why bananas are ripened with it before sale."] },
  { type: "quiz", q: "Glucagon raises blood glucose by…", o: ["Glycogenesis", "Glycogenolysis", "Increasing uptake", "Making insulin"], a: 1,
    why: "It breaks glycogen down to glucose.", say: ["How does glucagon raise blood glucose?"] }
]});

S2Data.video("10a", { scenes: [
  { type: "title", title: "Energy flow and nutrient cycles", sub: "Energy flows through, matter goes round.", mark: "N₂",
    say: ["Energy passes through ecosystems and is lost as heat. Nutrients, though, are recycled again and again."] },
  { type: "pyramid", title: "Energy through trophic levels", levels: [{ t: "Producers: 20 000 kJ", w: 1 }, { t: "Primary consumers: 2 000 kJ", w: 0.75 }, { t: "Secondary: 200 kJ", w: 0.5 }],
    side: "≈ 10% passes on<br>Lost: respiration, waste, not eaten",
    say: ["Producers fix light energy. Net primary productivity is what's left after their own respiration.", "Only about ten percent passes to primary consumers.", "And ten percent of that to secondary consumers.", "The rest is lost as heat from respiration, in faeces and urine, and in parts that aren't eaten. That's why food chains are short."] },
  { type: "cycle", title: "The nitrogen cycle", nodes: ["N₂ in air", "Fixation:<br>Rhizobium", "Ammonium", "Nitrification:<br>nitrate", "Denitrification"],
    say: ["The air is mostly nitrogen gas, but plants can't use it.", "Nitrogen-fixing bacteria, like Rhizobium in legume root nodules, convert it into ammonium.", "Decomposers also make ammonium from dead organisms and waste. That's ammonification.", "Nitrifying bacteria oxidise ammonium to nitrite and then nitrate, which plants absorb. This needs oxygen.", "In waterlogged, anaerobic soil, denitrifying bacteria turn nitrate back into nitrogen gas."] },
  { type: "calc", title: "Efficiency", q: "Producers: 25 000 kJ. Primary consumers: 2 250 kJ.",
    lines: ["Efficiency = 2250 ÷ 25 000 × 100", "= 9%"],
    say: ["Efficiency is the energy at the higher level divided by the energy at the lower level, times a hundred.", "So nine percent was transferred."] },
  { type: "quiz", q: "Which process needs anaerobic conditions?", o: ["Nitrification", "Denitrification", "Nitrogen fixation by Rhizobium", "Ammonification"], a: 1,
    why: "Denitrifying bacteria thrive in waterlogged soil.", say: ["Which process in the nitrogen cycle happens in anaerobic conditions?"] }
]});
