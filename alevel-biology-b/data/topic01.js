/* A-level Biology B² — Topics 1–4: content specific to Biology B */

S2Data.add({
  id: "1d", group: 1, y1: true, title: "Water and inorganic ions",
  summary: "The properties of water that make life possible, and the roles of key inorganic ions.",
  notes: `
<h3>Water</h3>
<p>A water molecule is <b>polar</b>: oxygen is slightly negative (δ−) and the hydrogens slightly positive (δ+). <b>Hydrogen bonds</b> form between molecules.</p>
<table>
<tr><th>Property</th><th>Why it matters</th></tr>
<tr><td>Good solvent</td><td>Ions and polar molecules dissolve, so it's a transport and reaction medium</td></tr>
<tr><td>High specific heat capacity</td><td>Temperature changes slowly: stable habitats and body temperature</td></tr>
<tr><td>High latent heat of vaporisation</td><td>Evaporation (sweating, transpiration) removes lots of heat</td></tr>
<tr><td>Cohesion</td><td>Water is pulled up xylem in continuous columns; surface tension</td></tr>
<tr><td>Ice is less dense than water</td><td>Ice floats, insulating water beneath</td></tr>
<tr><td>Metabolite</td><td>Used in hydrolysis and photosynthesis; produced in condensation and respiration</td></tr>
</table>
<h3>Inorganic ions</h3>
<table>
<tr><th>Ion</th><th>Role</th></tr>
<tr><td>Na<sup>+</sup></td><td>Nerve impulses; co-transport of glucose and amino acids</td></tr>
<tr><td>K<sup>+</sup></td><td>Resting potential; stomatal opening</td></tr>
<tr><td>Ca<sup>2+</sup></td><td>Muscle contraction, blood clotting, neurotransmitter release, bones, plant cell walls (calcium pectate)</td></tr>
<tr><td>Mg<sup>2+</sup></td><td>Chlorophyll</td></tr>
<tr><td>Fe<sup>2+</sup></td><td>Haem group in haemoglobin</td></tr>
<tr><td>H<sup>+</sup></td><td>pH; chemiosmosis in respiration and photosynthesis</td></tr>
<tr><td>NO<sub>3</sub><sup>−</sup></td><td>Plants use it to make amino acids, nucleotides and chlorophyll</td></tr>
<tr><td>PO<sub>4</sub><sup>3−</sup></td><td>ATP, DNA, RNA, phospholipids</td></tr>
</table>
`,
  quiz: [
    { q: "Water is polar because…", o: ["Oxygen pulls electrons more strongly than hydrogen", "It's a small molecule", "It has no charge", "It has a double bond"], a: 0, e: "" },
    { q: "Why does water have a high specific heat capacity?", o: ["Hydrogen bonds absorb energy before molecules move faster", "It's a gas", "It's non-polar", "It's dense"], a: 0, e: "" },
    { q: "Which property lets water move up xylem in a continuous column?", o: ["Cohesion", "High density", "Low viscosity", "Being a metabolite"], a: 0, e: "" },
    { q: "Why does sweating cool the body effectively?", o: ["High latent heat of vaporisation", "Low specific heat capacity", "Cohesion", "Ice floats"], a: 0, e: "" },
    { q: "Which ion is part of the haem group?", o: ["Fe²⁺", "Mg²⁺", "Ca²⁺", "Na⁺"], a: 0, e: "" },
    { q: "Which ion is needed to make chlorophyll?", o: ["Mg²⁺", "Fe²⁺", "K⁺", "PO₄³⁻"], a: 0, e: "" },
    { q: "Phosphate ions are needed for…", o: ["ATP and nucleic acids", "Chlorophyll", "Haemoglobin", "Cellulose"], a: 0, e: "" },
    { q: "Why is it important that ice floats?", o: ["It insulates the water below, so organisms survive", "It makes water a solvent", "It raises sea levels", "It reflects all heat"], a: 0, e: "" },
    { q: "Which ion is involved in co-transport of glucose?", o: ["Na⁺", "Ca²⁺", "Fe²⁺", "NO₃⁻"], a: 0, e: "" }
  ],
  flashcards: [
    ["Why water is polar", "O is δ−, H is δ+; hydrogen bonds form between molecules"],
    ["Water as a solvent", "Ions and polar molecules dissolve: transport and reactions"],
    ["High specific heat capacity", "Temperature changes slowly; stable habitats"],
    ["High latent heat of vaporisation", "Evaporation cools (sweating, transpiration)"],
    ["Cohesion", "Water molecules stick together: xylem columns, surface tension"],
    ["Ice less dense", "Floats and insulates water below"],
    ["Fe²⁺ / Mg²⁺", "Haemoglobin / chlorophyll"],
    ["Ca²⁺", "Muscle contraction, clotting, synapses, calcium pectate"],
    ["PO₄³⁻ / NO₃⁻", "ATP, DNA, phospholipids / amino acids, nucleotides"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Viruses",
  summary: "Virus structure and classification, replication cycles, and controlling viral disease.",
  notes: `
<h3>Structure</h3>
<p>Viruses are not cells. Each has <b>nucleic acid</b> (DNA or RNA) inside a protein coat, the <b>capsid</b>. Some have a lipid <b>envelope</b> taken from the host membrane, with attachment proteins.</p>
<h3>Classification</h3>
<table>
<tr><th>Type</th><th>Example</th></tr>
<tr><td>DNA virus</td><td>λ (lambda) phage, herpes</td></tr>
<tr><td>RNA virus</td><td>Tobacco mosaic virus (TMV), Ebola</td></tr>
<tr><td>Retrovirus (RNA + reverse transcriptase)</td><td>HIV</td></tr>
</table>
<h3>Replication</h3>
<ul>
<li><b>Lytic cycle</b>: virus attaches to a specific receptor; nucleic acid enters; host machinery makes viral nucleic acid and proteins; new viruses assemble; cell bursts (lysis), releasing them.</li>
<li><b>Lysogenic (latent) cycle</b>: viral DNA is inserted into the host genome (a <b>provirus</b>) and copied every time the host divides. A trigger later switches it to the lytic cycle.</li>
<li>Retroviruses use <b>reverse transcriptase</b> to make DNA from their RNA, which is then inserted into the host DNA.</li>
</ul>
<h3>Controlling viruses</h3>
<ul>
<li>Antibiotics don't work: viruses have no cell walls, bacterial ribosomes or metabolism.</li>
<li><b>Antivirals</b> target viral enzymes (e.g. reverse transcriptase inhibitors, protease inhibitors).</li>
<li>Vaccination, and controlling spread (e.g. Ebola: isolation, protective equipment, safe burials).</li>
<li>Ethics of testing new drugs during epidemics: using untested drugs, consent and fair access.</li>
</ul>
`,
  quiz: [
    { q: "A viral capsid is made of…", o: ["Protein", "Lipid", "Cellulose", "Peptidoglycan"], a: 0, e: "" },
    { q: "Which is a retrovirus?", o: ["HIV", "λ phage", "TMV", "Herpes"], a: 0, e: "" },
    { q: "Tobacco mosaic virus contains…", o: ["RNA", "DNA", "Both DNA and RNA", "No nucleic acid"], a: 0, e: "" },
    { q: "In the lysogenic cycle, viral DNA…", o: ["Is inserted into the host genome", "Destroys the cell at once", "Leaves the cell", "Is digested"], a: 0, e: "" },
    { q: "What ends the lytic cycle?", o: ["Lysis of the host cell", "Insertion of DNA", "Binary fission", "Spore formation"], a: 0, e: "" },
    { q: "Reverse transcriptase makes…", o: ["DNA from RNA", "RNA from DNA", "Protein from RNA", "Lipids"], a: 0, e: "" },
    { q: "Why are antibiotics ineffective against viruses?", o: ["Viruses lack the structures antibiotics target", "Viruses are too big", "Viruses have cell walls", "Antibiotics kill host cells"], a: 0, e: "" },
    { q: "Viruses only infect specific cells because…", o: ["Attachment proteins bind to specific receptors", "They're too small", "They have flagella", "They need sunlight"], a: 0, e: "" },
    { q: "A provirus is…", o: ["Viral DNA inserted into a host chromosome", "A virus outside a cell", "A virus with no capsid", "A bacterium"], a: 0, e: "" }
  ],
  flashcards: [
    ["Virus structure", "Nucleic acid + protein capsid; some have an envelope"],
    ["DNA virus examples", "λ phage, herpes"],
    ["RNA virus examples", "TMV, Ebola"],
    ["Retrovirus", "RNA virus with reverse transcriptase (HIV)"],
    ["Lytic cycle", "Attach → inject → replicate → assemble → lysis"],
    ["Lysogenic cycle", "Viral DNA inserted as a provirus; copied with host DNA"],
    ["Antivirals", "Target viral enzymes, e.g. reverse transcriptase inhibitors"],
    ["Why not antibiotics?", "No cell wall, bacterial ribosomes or metabolism to target"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Sexual reproduction in mammals and plants",
  summary: "Gametes, fertilisation in mammals, and pollination and double fertilisation in flowering plants.",
  notes: `
<h3>Mammalian gametes</h3>
<ul>
<li><b>Sperm</b>: haploid nucleus; <b>acrosome</b> containing digestive enzymes; many mitochondria in the midpiece; flagellum.</li>
<li><b>Egg (secondary oocyte)</b>: haploid nucleus; cytoplasm with food reserves; <b>zona pellucida</b> (glycoprotein layer); cortical granules; surrounded by follicle cells.</li>
</ul>
<h3>Fertilisation in mammals</h3>
<ol>
<li>Sperm reach the oocyte in the oviduct.</li>
<li><b>Acrosome reaction</b>: the acrosome releases enzymes that digest the zona pellucida.</li>
<li>Sperm and oocyte membranes fuse; the sperm nucleus enters.</li>
<li><b>Cortical reaction</b>: cortical granules release enzymes that harden the zona pellucida, preventing polyspermy.</li>
<li>The oocyte completes meiosis II; the nuclei fuse to form a diploid <b>zygote</b>.</li>
</ol>
<h3>Flowering plants</h3>
<ul>
<li><b>Pollen grain</b> (male gamete carrier) lands on the stigma; a <b>pollen tube</b> grows down the style by digesting tissue, guided chemically to the ovule's <b>micropyle</b>.</li>
<li>The pollen tube contains a tube nucleus and two male nuclei.</li>
<li><b>Double fertilisation</b>: one male nucleus fuses with the egg cell → diploid zygote (embryo); the other fuses with the two polar nuclei → triploid <b>endosperm</b> (food store).</li>
<li>The ovule becomes the seed; the ovary becomes the fruit.</li>
</ul>
`,
  quiz: [
    { q: "The acrosome contains…", o: ["Digestive enzymes", "Mitochondria", "The nucleus", "Food reserves"], a: 0, e: "" },
    { q: "Why does the sperm midpiece contain many mitochondria?", o: ["To release ATP for the flagellum", "To store DNA", "To digest the zona", "To make enzymes"], a: 0, e: "" },
    { q: "The cortical reaction…", o: ["Hardens the zona pellucida to stop more sperm entering", "Releases sperm enzymes", "Starts meiosis I", "Forms the pollen tube"], a: 0, e: "" },
    { q: "Where does fertilisation usually happen in humans?", o: ["Oviduct", "Uterus", "Ovary", "Vagina"], a: 0, e: "" },
    { q: "The pollen tube enters the ovule through the…", o: ["Micropyle", "Stigma", "Anther", "Petal"], a: 0, e: "" },
    { q: "In double fertilisation, one male nucleus fuses with…", o: ["The two polar nuclei to form endosperm", "The anther", "The pollen tube", "The stigma"], a: 0, e: "" },
    { q: "Endosperm is…", o: ["Triploid", "Haploid", "Diploid", "Tetraploid"], a: 0, e: "" },
    { q: "After fertilisation, the ovary becomes the…", o: ["Fruit", "Seed", "Embryo", "Endosperm"], a: 0, e: "" },
    { q: "How does the pollen tube grow down the style?", o: ["By secreting digestive enzymes", "By osmosis only", "By the flagellum", "By photosynthesis"], a: 0, e: "" }
  ],
  flashcards: [
    ["Sperm adaptations", "Acrosome, mitochondria, flagellum, haploid nucleus"],
    ["Egg adaptations", "Food reserves, zona pellucida, cortical granules"],
    ["Acrosome reaction", "Enzymes digest the zona pellucida"],
    ["Cortical reaction", "Zona hardens: no polyspermy"],
    ["Zygote", "Diploid cell from fusion of gametes"],
    ["Pollen tube", "Grows down style by digestion to the micropyle"],
    ["Double fertilisation", "Male nucleus + egg → zygote; male nucleus + 2 polar nuclei → endosperm"],
    ["Endosperm", "Triploid food store"],
    ["Ovule / ovary after fertilisation", "Seed / fruit"]
  ]
});

S2Data.add({
  id: "3b", group: 3, y1: true, title: "Conservation",
  summary: "Why biodiversity matters, threats to it, and conservation in zoos, seed banks and the wild.",
  notes: `
<h3>Why conserve?</h3>
<ul>
<li><b>Ethical</b>: species have a right to exist; we have a responsibility to future generations.</li>
<li><b>Economic</b>: food, medicines (many drugs come from plants), ecotourism, materials.</li>
<li><b>Ecological</b>: ecosystems provide services such as pollination, clean water and climate regulation.</li>
</ul>
<h3>Threats</h3>
<p>Habitat loss and fragmentation, overexploitation (hunting, fishing), pollution, invasive species and climate change.</p>
<h3>Conservation methods</h3>
<table>
<tr><th>Method</th><th>How</th><th>Advantages / issues</th></tr>
<tr><td><b>Zoos</b> (ex situ)</td><td>Captive breeding programmes; studbooks avoid inbreeding; reintroduction</td><td>Protect very rare species; education and research. But small gene pools, animals may not adapt to the wild, expensive</td></tr>
<tr><td><b>Seed banks</b> (ex situ)</td><td>Seeds dried and stored cold; tested for viability by germinating samples</td><td>Many species in a small space; cheap; long-term. But seeds may not survive, and stored seeds don't evolve</td></tr>
<tr><td><b>In situ</b></td><td>Protected areas, national parks, legislation, habitat restoration</td><td>Species stay in their habitat and keep evolving; protects whole ecosystems</td></tr>
</table>
<p>Conservation needs genetic diversity: small populations suffer inbreeding and can't adapt to change.</p>
`,
  quiz: [
    { q: "Which is an ex situ method?", o: ["Seed bank", "National park", "Marine reserve", "Hunting ban"], a: 0, e: "" },
    { q: "Why are studbooks used in zoos?", o: ["To avoid inbreeding", "To feed animals", "To count visitors", "To track diseases only"], a: 0, e: "" },
    { q: "How is seed viability tested?", o: ["Germinating a sample of seeds", "Measuring seed mass", "Freezing seeds", "Counting seeds"], a: 0, e: "" },
    { q: "Why are seeds dried before storage?", o: ["To stop them germinating and decaying", "To make them lighter", "To kill the embryo", "To increase respiration"], a: 0, e: "" },
    { q: "Which is an economic reason to conserve species?", o: ["Source of new medicines", "Right to exist", "Moral duty", "Beauty"], a: 0, e: "" },
    { q: "A problem with reintroducing captive-bred animals is…", o: ["They may lack survival skills", "They're too genetically diverse", "Wild habitats are too large", "They're always diseased"], a: 0, e: "" },
    { q: "In situ conservation means…", o: ["Protecting species in their natural habitat", "Keeping them in zoos", "Storing seeds", "Cloning"], a: 0, e: "" },
    { q: "Small populations are at risk because…", o: ["Low genetic diversity reduces the ability to adapt", "They grow too fast", "They have too many alleles", "They can't be counted"], a: 0, e: "" },
    { q: "Which is a major threat to biodiversity?", o: ["Habitat loss", "Seed banks", "Studbooks", "Protected areas"], a: 0, e: "" }
  ],
  flashcards: [
    ["Reasons to conserve", "Ethical, economic, ecological"],
    ["Threats to biodiversity", "Habitat loss, overexploitation, pollution, invasive species, climate change"],
    ["Ex situ", "Outside natural habitat: zoos, seed banks"],
    ["In situ", "In natural habitat: reserves, legislation"],
    ["Captive breeding", "Breeding in zoos using studbooks to avoid inbreeding"],
    ["Seed banks", "Dry, cold storage; viability tested by germination"],
    ["Problem with zoos", "Small gene pools; animals may not survive release"],
    ["Why genetic diversity matters", "Allows populations to adapt; avoids inbreeding"]
  ]
});

S2Data.add({
  id: "4a", group: 4, y1: true, title: "Gas exchange surfaces",
  summary: "Surface area to volume ratio, and gas exchange in insects, fish, mammals and plants.",
  notes: `
<h3>Why specialised surfaces?</h3>
<p>As organisms get larger, their <b>surface area to volume ratio</b> falls and diffusion distances increase. Large or active organisms need specialised exchange surfaces and transport systems.</p>
<p>Good exchange surfaces have a <b>large surface area</b>, a <b>short diffusion distance</b> and a <b>steep concentration gradient</b> (Fick's law).</p>
<h3>Mammals</h3>
<p>Millions of alveoli (large area); walls one cell thick next to capillaries (short distance); ventilation and blood flow maintain the gradient.</p>
<h3>Insects</h3>
<ul>
<li>Air enters through <b>spiracles</b> (which can close to reduce water loss) into <b>tracheae</b>, then fine <b>tracheoles</b> that reach every cell.</li>
<li>Oxygen diffuses directly to cells; tracheole fluid is drawn into cells during activity, increasing surface area. Abdominal pumping ventilates larger insects.</li>
</ul>
<h3>Fish</h3>
<ul>
<li>Water flows over <b>gill filaments</b> covered in <b>lamellae</b> (large area, thin).</li>
<li><b>Countercurrent flow</b>: blood flows in the opposite direction to water, so a concentration gradient is maintained along the whole lamella. Up to 80% of oxygen is extracted.</li>
</ul>
<h3>Plants</h3>
<ul>
<li>Gases diffuse through <b>stomata</b> into air spaces in the spongy mesophyll, which give a large internal surface area.</li>
<li>Guard cells open stomata (K<sup>+</sup> enters, water follows by osmosis, cells become turgid) and close them to reduce water loss.</li>
<li><b>Xerophytes</b> reduce water loss: thick waxy cuticle, sunken stomata, rolled leaves, hairs.</li>
</ul>
`,
  quiz: [
    { q: "As an organism gets bigger, its SA:V ratio…", o: ["Decreases", "Increases", "Stays the same", "Doubles"], a: 0, e: "" },
    { q: "Insects take in air through…", o: ["Spiracles", "Stomata", "Gills", "Alveoli"], a: 0, e: "" },
    { q: "In insects, oxygen reaches cells through…", o: ["Tracheoles", "Blood capillaries", "Lamellae", "Bronchioles"], a: 0, e: "" },
    { q: "Countercurrent flow in fish means…", o: ["Blood and water flow in opposite directions", "They flow the same way", "Water doesn't move", "Blood stops at the gills"], a: 0, e: "" },
    { q: "Why is countercurrent flow efficient?", o: ["A concentration gradient is kept along the whole lamella", "It slows water", "It warms the blood", "It reduces surface area"], a: 0, e: "" },
    { q: "Stomata open when guard cells…", o: ["Become turgid", "Become flaccid", "Lose K⁺", "Die"], a: 0, e: "" },
    { q: "Which is a xerophyte adaptation?", o: ["Sunken stomata", "Thin cuticle", "Many stomata on the upper surface", "Large flat leaves"], a: 0, e: "" },
    { q: "Spiracles can close to…", o: ["Reduce water loss", "Increase oxygen uptake", "Pump blood", "Make ATP"], a: 0, e: "" },
    { q: "Which feature of gills gives a large surface area?", o: ["Many lamellae on filaments", "Thick walls", "Few filaments", "A waxy cuticle"], a: 0, e: "" }
  ],
  flashcards: [
    ["Why specialised surfaces?", "Large organisms: small SA:V, long diffusion distances"],
    ["Features of exchange surfaces", "Large area, thin, steep gradient"],
    ["Insect gas exchange", "Spiracles → tracheae → tracheoles → cells"],
    ["Fish gas exchange", "Gill filaments with lamellae; countercurrent flow"],
    ["Countercurrent flow", "Blood and water flow opposite ways; gradient maintained"],
    ["Plant gas exchange", "Stomata and air spaces in spongy mesophyll"],
    ["Stomata opening", "K⁺ into guard cells, water follows, cells turgid"],
    ["Xerophyte adaptations", "Thick cuticle, sunken stomata, rolled leaves, hairs"]
  ]
});

S2Data.add({
  id: "4d", group: 4, y1: true, title: "Blood, haemoglobin and clotting",
  summary: "Blood components, oxygen dissociation curves, the Bohr effect, clotting and atherosclerosis.",
  notes: `
<h3>Blood</h3>
<p><b>Plasma</b> (water, dissolved glucose, amino acids, ions, CO<sub>2</sub>, hormones, plasma proteins), <b>red blood cells</b> (no nucleus, biconcave, haemoglobin), <b>white blood cells</b> (immunity) and <b>platelets</b> (clotting).</p>
<h3>Haemoglobin</h3>
<p>A globular protein with four polypeptide chains, each with a haem group containing Fe<sup>2+</sup>; each binds one O<sub>2</sub> (four per molecule).</p>
<ul>
<li>The <b>oxygen dissociation curve</b> is S-shaped (sigmoid) because of <b>cooperative binding</b>: once one O<sub>2</sub> binds, the shape changes and the next bind more easily.</li>
<li>At high partial pressure (lungs) Hb is nearly saturated; at low partial pressure (respiring tissues) it unloads O<sub>2</sub>.</li>
<li><b>Bohr effect</b>: more CO<sub>2</sub> lowers pH and reduces Hb's affinity for O<sub>2</sub>, shifting the curve <b>right</b>, so more O<sub>2</sub> is released to active tissues.</li>
<li><b>Fetal haemoglobin</b> has a higher affinity (curve to the left) so it can take O<sub>2</sub> from the mother's blood across the placenta.</li>
<li>CO<sub>2</sub> is mainly carried as hydrogencarbonate ions: carbonic anhydrase catalyses CO<sub>2</sub> + H<sub>2</sub>O → H<sub>2</sub>CO<sub>3</sub> → H<sup>+</sup> + HCO<sub>3</sub><sup>−</sup>.</li>
</ul>
<h3>Clotting and atherosclerosis</h3>
<p>Damage releases <b>thromboplastin</b>, which (with Ca<sup>2+</sup>) converts prothrombin to <b>thrombin</b>; thrombin converts soluble fibrinogen to insoluble <b>fibrin</b>, forming a mesh that traps cells.</p>
<p><b>Atherosclerosis</b>: endothelium damaged → inflammation, cholesterol and white cells build up → atheroma narrows the artery → plaque can rupture, causing a clot (thrombosis), heart attack or stroke. Risk factors: high blood pressure, smoking, high LDL, genes, age.</p>
`,
  quiz: [
    { q: "How many O₂ molecules can one haemoglobin carry?", o: ["4", "1", "2", "8"], a: 0, e: "" },
    { q: "The dissociation curve is S-shaped because of…", o: ["Cooperative binding", "Denaturation", "The Bohr effect", "Low iron"], a: 0, e: "" },
    { q: "The Bohr effect shifts the curve to the right when…", o: ["CO₂ concentration rises", "O₂ rises", "pH rises", "Temperature falls"], a: 0, e: "" },
    { q: "A right shift means haemoglobin…", o: ["Releases O₂ more readily", "Holds O₂ more tightly", "Can't carry O₂", "Carries more CO₂ only"], a: 0, e: "" },
    { q: "Fetal haemoglobin's curve is to the left because…", o: ["It has a higher affinity for O₂", "It has a lower affinity", "It has no haem", "It carries CO₂"], a: 0, e: "" },
    { q: "Most CO₂ is carried in the blood as…", o: ["Hydrogencarbonate ions", "Dissolved gas", "Carbaminohaemoglobin only", "Carbonic acid"], a: 0, e: "" },
    { q: "Which enzyme converts CO₂ and water to carbonic acid?", o: ["Carbonic anhydrase", "Thrombin", "Catalase", "Amylase"], a: 0, e: "" },
    { q: "Thrombin converts…", o: ["Fibrinogen to fibrin", "Prothrombin to thrombin", "Fibrin to fibrinogen", "Haemoglobin to oxyhaemoglobin"], a: 0, e: "" },
    { q: "Atherosclerosis begins with…", o: ["Damage to the artery endothelium", "A blood clot in a vein", "Low blood pressure", "High HDL"], a: 0, e: "" }
  ],
  flashcards: [
    ["Components of blood", "Plasma, red cells, white cells, platelets"],
    ["Haemoglobin", "4 polypeptides, 4 haem groups with Fe²⁺; carries 4 O₂"],
    ["Cooperative binding", "First O₂ binding makes the next easier: S-shaped curve"],
    ["Bohr effect", "More CO₂ → lower pH → curve shifts right → more O₂ released"],
    ["Fetal haemoglobin", "Higher affinity; curve shifts left"],
    ["CO₂ transport", "Mostly HCO₃⁻ via carbonic anhydrase"],
    ["Clotting cascade", "Thromboplastin → thrombin → fibrin mesh"],
    ["Atherosclerosis", "Endothelial damage → atheroma → narrowing → clot risk"]
  ]
});

S2Data.add({
  id: "4e", group: 4, y1: true, title: "Transport in plants",
  summary: "Xylem and phloem, the cohesion–tension theory, transpiration and translocation.",
  notes: `
<h3>Water uptake</h3>
<p>Water enters root hair cells by <b>osmosis</b> (mineral ions are actively transported in, lowering water potential). It crosses the root by the <b>apoplast</b> pathway (through cell walls) and the <b>symplast</b> pathway (through cytoplasm and plasmodesmata). At the endodermis, the waterproof <b>Casparian strip</b> forces water into the symplast, so the plant controls what enters the xylem.</p>
<h3>Movement up the xylem: cohesion–tension</h3>
<ol>
<li>Water evaporates from mesophyll cells and diffuses out of stomata (<b>transpiration</b>).</li>
<li>This pulls water out of the xylem, creating <b>tension</b> (negative pressure).</li>
<li>Water molecules are held together by <b>cohesion</b> (hydrogen bonds) and stick to xylem walls by <b>adhesion</b>, so a continuous column is pulled up.</li>
</ol>
<p>Root pressure also pushes water up a little. Xylem vessels are lignified so they don't collapse under tension.</p>
<h3>Factors affecting transpiration</h3>
<p>Increased by higher light intensity (stomata open), temperature, and wind; decreased by higher humidity. Measured with a <b>potometer</b> (rate of water uptake as an air bubble moves).</p>
<h3>Translocation in phloem: mass flow</h3>
<ol>
<li>At the <b>source</b> (e.g. leaves), sucrose is actively loaded into sieve tubes by companion cells (using H<sup>+</sup> co-transport).</li>
<li>This lowers water potential, so water enters by osmosis, raising hydrostatic pressure.</li>
<li>At the <b>sink</b> (e.g. roots, fruits), sucrose is removed and water leaves, lowering pressure.</li>
<li>The pressure difference pushes sap from source to sink.</li>
</ol>
<p>Evidence: ringing experiments, aphid stylets, radioactive tracers.</p>
`,
  quiz: [
    { q: "Water enters root hair cells by…", o: ["Osmosis", "Active transport", "Mass flow", "Translocation"], a: 0, e: "" },
    { q: "The Casparian strip…", o: ["Forces water into the symplast pathway", "Speeds up transpiration", "Stores starch", "Carries sucrose"], a: 0, e: "" },
    { q: "Water is pulled up the xylem mainly by…", o: ["Transpiration and cohesion–tension", "Root pressure only", "Active transport", "Gravity"], a: 0, e: "" },
    { q: "Cohesion is due to…", o: ["Hydrogen bonds between water molecules", "Lignin", "Ionic bonds", "Sucrose"], a: 0, e: "" },
    { q: "Which increases the rate of transpiration?", o: ["Wind", "High humidity", "Darkness", "Low temperature"], a: 0, e: "" },
    { q: "A potometer measures…", o: ["Rate of water uptake", "Rate of photosynthesis", "Sucrose concentration", "Root pressure only"], a: 0, e: "" },
    { q: "In mass flow, sucrose is loaded at the…", o: ["Source", "Sink", "Xylem", "Stomata"], a: 0, e: "" },
    { q: "Why is xylem lignified?", o: ["So it doesn't collapse under tension", "To store water", "To carry sucrose", "To allow photosynthesis"], a: 0, e: "" },
    { q: "Which supports the mass flow hypothesis?", o: ["Sap flows out of aphid stylets under pressure", "Xylem is dead", "Stomata close at night", "Roots absorb minerals"], a: 0, e: "" }
  ],
  flashcards: [
    ["Root water uptake", "Osmosis into root hairs; ions actively transported in"],
    ["Apoplast / symplast", "Through cell walls / through cytoplasm and plasmodesmata"],
    ["Casparian strip", "Waterproof band in endodermis; forces water into symplast"],
    ["Cohesion–tension", "Transpiration pulls a continuous column held by cohesion and adhesion"],
    ["Transpiration factors", "Light, temperature, wind ↑; humidity ↓"],
    ["Potometer", "Measures water uptake (bubble movement)"],
    ["Mass flow", "Sucrose loaded at source → water in → pressure → flows to sink"],
    ["Evidence for mass flow", "Aphid stylets, ringing, radioactive tracers"]
  ]
});

S2Data.detail("1d", { mistakes: ["Saying water has a high specific heat capacity because it's dense. It's because of hydrogen bonding."], tips: ["For each property of water, give the property, the reason (hydrogen bonds or polarity) and the biological importance."], fact: "Without hydrogen bonds, water would boil at about −80 °C." });
S2Data.detail("2b", { mistakes: ["Calling viruses cells or saying antibiotics treat viral infections."], tips: ["Learn one example of each virus type: λ phage (DNA), TMV (RNA), HIV (retrovirus)."], fact: "There are about 10³¹ viruses on Earth, more than the stars in the observable universe." });
S2Data.detail("2d", { mistakes: ["Confusing the endosperm (triploid food store) with the embryo (diploid)."], tips: ["Draw the pollen tube reaching the ovule and label where each male nucleus goes."], fact: "A pollen tube can grow over 30 cm to reach the ovule in maize." });
S2Data.detail("3b", { mistakes: ["Saying seed banks stop species evolving as an advantage. It's a disadvantage: they can't adapt to change."], tips: ["Always give balanced evaluation: advantages and disadvantages of each method."], fact: "The Svalbard Global Seed Vault in the Arctic stores over a million seed samples." });
S2Data.detail("4a", { mistakes: ["Saying fish gills use parallel flow. They use countercurrent flow."], tips: ["For any exchange surface, explain area, distance and gradient."], fact: "Insects can't grow very large partly because tracheoles can only supply oxygen over short distances." });
S2Data.detail("4d", { mistakes: ["Saying a right shift increases affinity. It decreases affinity, so more O<sub>2</sub> is released."], tips: ["When reading dissociation curves, compare % saturation at the same partial pressure."], fact: "Llamas living at high altitude have haemoglobin with an unusually high affinity for oxygen." });
S2Data.detail("4e", { mistakes: ["Saying water is pumped up the xylem. It's pulled by tension from transpiration."], tips: ["Learn mass flow as a numbered sequence: load, osmosis, pressure, flow, unload."], fact: "The tallest trees, over 110 m, are thought to be near the limit of how high water can be pulled." });
