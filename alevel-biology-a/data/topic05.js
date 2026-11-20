/* A-level Biology A² — Topics 5–6: On the wild side; Immunity, infection and forensics */

S2Data.add({
  id: "5a", group: 5, y2: true, title: "Photosynthesis",
  summary: "Chloroplast structure, the light-dependent reactions, the Calvin cycle and limiting factors.",
  notes: `
<h3>Chloroplasts</h3>
<p>Double membrane; <b>thylakoids</b> stacked into <b>grana</b> (contain chlorophyll and electron carriers: site of the light-dependent reactions); <b>stroma</b> (fluid with enzymes: site of the light-independent reactions).</p>
<h3>Light-dependent reactions (thylakoid membranes)</h3>
<ol>
<li>Light excites electrons in chlorophyll (photosystem II) to a higher energy level; they pass along an <b>electron transport chain</b>.</li>
<li>Energy released pumps H<sup>+</sup> into the thylakoid space; H<sup>+</sup> flows back through ATP synthase, making <b>ATP</b> (photophosphorylation).</li>
<li><b>Photolysis</b>: water is split to replace lost electrons: 2H<sub>2</sub>O → 4H<sup>+</sup> + 4e<sup>−</sup> + O<sub>2</sub>.</li>
<li>Electrons re-excited in photosystem I reduce <b>NADP to reduced NADP</b> (NADPH).</li>
</ol>
<h3>Light-independent reactions: the Calvin cycle (stroma)</h3>
<ol>
<li>CO<sub>2</sub> combines with <b>ribulose bisphosphate (RuBP)</b>, catalysed by <b>RUBISCO</b>, forming two molecules of <b>glycerate 3-phosphate (GP)</b>.</li>
<li>GP is reduced to <b>glyceraldehyde 3-phosphate (GALP)</b> using ATP and reduced NADP.</li>
<li>Most GALP regenerates RuBP (using ATP); some is used to make glucose, amino acids and lipids.</li>
</ol>
<h3>Limiting factors and productivity</h3>
<ul>
<li>Light intensity, CO<sub>2</sub> concentration and temperature can each limit the rate.</li>
<li><b>GPP</b> (gross primary productivity) = rate at which energy is fixed by photosynthesis. <b>NPP = GPP − R</b> (respiratory losses).</li>
<li>Efficiency of energy transfer between trophic levels = energy in next level ÷ energy in previous level × 100 (often ~10%).</li>
</ul>
<p>Practical: measure the rate of O<sub>2</sub> production by pondweed at different light intensities (move the lamp; light intensity ∝ 1/d<sup>2</sup>).</p>
`,
  quiz: [
    { q: "Where do the light-dependent reactions occur?", o: ["Thylakoid membranes", "Stroma", "Cytoplasm", "Mitochondria"], a: 0, e: "" },
    { q: "Photolysis produces…", o: ["H⁺, electrons and oxygen", "Glucose", "CO₂", "ATP only"], a: 0, e: "" },
    { q: "Which enzyme fixes CO₂ in the Calvin cycle?", o: ["RUBISCO", "ATP synthase", "Catalase", "Amylase"], a: 0, e: "" },
    { q: "CO₂ + RuBP forms…", o: ["Two molecules of GP", "GALP", "Glucose", "NADP"], a: 0, e: "" },
    { q: "Which products of the light-dependent reactions are used in the Calvin cycle?", o: ["ATP and reduced NADP", "O₂ and water", "Glucose and CO₂", "RuBP and GP"], a: 0, e: "" },
    { q: "NPP = …", o: ["GPP − respiratory losses", "GPP + R", "R − GPP", "Total biomass"], a: 0, e: "" },
    { q: "Most GALP is used to…", o: ["Regenerate RuBP", "Make starch only", "Make oxygen", "Make water"], a: 0, e: "" },
    { q: "If light intensity falls, GP levels…", o: ["Rise (less ATP/NADPH to reduce it)", "Fall", "Stay the same", "Drop to zero instantly"], a: 0, e: "" },
    { q: "Light intensity from a lamp is proportional to…", o: ["1/d²", "d", "d²", "1/d"], a: 0, e: "" }
  ],
  flashcards: [
    ["Thylakoid / stroma", "Light-dependent / light-independent reactions"],
    ["Photolysis", "2H₂O → 4H⁺ + 4e⁻ + O₂"],
    ["Photophosphorylation", "ATP made using light energy via electron transport and ATP synthase"],
    ["Products of light-dependent stage", "ATP, reduced NADP, O₂"],
    ["Calvin cycle step 1", "CO₂ + RuBP → 2 GP (RUBISCO)"],
    ["Calvin cycle step 2", "GP → GALP using ATP and reduced NADP"],
    ["Fate of GALP", "Most regenerates RuBP; some → glucose, amino acids, lipids"],
    ["GPP and NPP", "NPP = GPP − R"],
    ["Limiting factors", "Light intensity, CO₂ concentration, temperature"]
  ]
});

S2Data.add({
  id: "5b", group: 5, y2: true, title: "Ecosystems and climate change",
  summary: "Ecosystems and succession, sampling, climate change evidence and effects, and decision-making.",
  notes: `
<h3>Ecosystems</h3>
<ul>
<li><b>Population</b>: all individuals of one species in an area. <b>Community</b>: all populations. <b>Ecosystem</b>: community plus abiotic factors.</li>
<li><b>Biotic</b> factors (predation, competition, disease) and <b>abiotic</b> factors (temperature, light, pH, water) affect population sizes.</li>
<li>Density-dependent factors (competition, predation, disease) have greater effects in large populations; density-independent factors (weather) affect populations regardless of size.</li>
</ul>
<h3>Succession</h3>
<p><b>Primary succession</b>: from bare rock. <b>Pioneer species</b> (lichens, mosses) colonise, weathering rock and adding humus when they die; soil develops; larger plants grow and outcompete earlier species; diversity increases until a stable <b>climax community</b>. <b>Secondary succession</b> starts from existing soil (e.g. after fire).</p>
<h3>Sampling</h3>
<p>Random quadrats (abundance, percentage cover), belt transects (along a gradient). Measure abiotic factors with probes or meters. Use statistics to test correlations (e.g. Spearman's rank).</p>
<h3>Climate change</h3>
<ul>
<li><b>Evidence</b>: temperature records, dendrochronology (tree rings), pollen in peat bogs, ice cores (trapped air bubbles give CO<sub>2</sub> levels).</li>
<li><b>Greenhouse effect</b>: CO<sub>2</sub> and methane absorb infrared radiation re-emitted by Earth; rising levels increase global temperatures.</li>
<li><b>Effects</b>: changed species distributions, earlier development (e.g. leafing, egg laying), altered rainfall, enzyme rates (Q<sub>10</sub>: rate change for 10 °C).</li>
<li>Models extrapolate trends, but predictions have uncertainty. Scientists' conclusions can be affected by bias, so peer review and evaluation of data sources matter.</li>
<li>Reducing CO<sub>2</sub>: biofuels, reforestation, renewables.</li>
</ul>
`,
  quiz: [
    { q: "An ecosystem is…", o: ["A community and its abiotic environment", "All members of one species", "All populations only", "A food chain"], a: 0, e: "" },
    { q: "Pioneer species in primary succession are often…", o: ["Lichens and mosses", "Trees", "Large mammals", "Fungi only"], a: 0, e: "" },
    { q: "Which is a density-independent factor?", o: ["A flood", "Competition", "Predation", "Disease"], a: 0, e: "" },
    { q: "Which gives evidence of past CO₂ levels?", o: ["Air bubbles in ice cores", "Tree height", "Pollen colour", "Leaf shape"], a: 0, e: "" },
    { q: "Dendrochronology uses…", o: ["Tree rings", "Ice cores", "Pollen", "Fossils"], a: 0, e: "" },
    { q: "Greenhouse gases warm the Earth by…", o: ["Absorbing infrared radiation re-emitted from Earth", "Reflecting sunlight", "Producing heat", "Blocking UV"], a: 0, e: "" },
    { q: "A belt transect is used to…", o: ["Study changes along an environmental gradient", "Sample randomly", "Count every organism", "Measure pH only"], a: 0, e: "" },
    { q: "Q₁₀ is…", o: ["The change in rate for a 10 °C rise", "Ten quadrats", "A greenhouse gas", "The climax community"], a: 0, e: "" },
    { q: "Biodiversity during succession usually…", o: ["Increases towards the climax", "Decreases", "Stays the same", "Drops to zero"], a: 0, e: "" }
  ],
  flashcards: [
    ["Population / community / ecosystem", "One species / all species / community + abiotic factors"],
    ["Biotic vs abiotic", "Living factors vs non-living factors"],
    ["Primary succession", "From bare rock; pioneer species → climax community"],
    ["Pioneer species", "First colonisers (lichens, mosses); make soil"],
    ["Climax community", "Stable final community"],
    ["Climate evidence", "Temperature records, tree rings, pollen in peat, ice cores"],
    ["Greenhouse effect", "CO₂/methane absorb IR re-emitted by Earth"],
    ["Effects of warming", "Species distributions, development timing, rainfall"],
    ["Q₁₀", "Rate at T + 10 ÷ rate at T"]
  ]
});

S2Data.add({
  id: "5c", group: 5, y2: true, title: "Evolution and speciation",
  summary: "Natural selection revisited, isolation and speciation, and molecular evidence for evolution.",
  notes: `
<h3>Natural selection and allele frequency</h3>
<p>Mutation creates new alleles; selection pressures (e.g. climate change, predators) favour some phenotypes; allele frequencies change in the <b>gene pool</b>.</p>
<h3>Speciation</h3>
<p>A <b>species</b> is a group of organisms that can interbreed to produce fertile offspring.</p>
<ol>
<li>Populations become <b>reproductively isolated</b>, so gene flow stops.</li>
<li>Different mutations occur and different selection pressures act in each population.</li>
<li>Allele frequencies diverge until the populations can no longer interbreed to produce fertile offspring.</li>
</ol>
<ul>
<li><b>Allopatric</b> speciation: geographical isolation (e.g. mountains, rivers).</li>
<li><b>Sympatric</b> speciation: in the same area, through ecological isolation (different habitats), temporal isolation (different breeding times), behavioural isolation (courtship) or mechanical/gametic incompatibility.</li>
</ul>
<h3>Molecular evidence</h3>
<ul>
<li>Comparing DNA base sequences and protein amino acid sequences: more similar sequences → more closely related, more recent common ancestor.</li>
<li>Scientific community validates new evidence through peer review, conferences and repeating studies.</li>
</ul>
`,
  quiz: [
    { q: "A species is defined as…", o: ["Organisms that interbreed to produce fertile offspring", "Organisms that look alike", "Any population", "Organisms in the same habitat"], a: 0, e: "" },
    { q: "Allopatric speciation involves…", o: ["Geographical isolation", "Different breeding seasons in one area", "No isolation", "Hybridisation only"], a: 0, e: "" },
    { q: "Temporal isolation means…", o: ["Breeding at different times", "Living in different places", "Different courtship", "Incompatible genitals"], a: 0, e: "" },
    { q: "Why does reproductive isolation lead to speciation?", o: ["Gene flow stops, so allele frequencies diverge", "Mutations stop", "Selection stops", "Populations merge"], a: 0, e: "" },
    { q: "Which provides molecular evidence of relatedness?", o: ["DNA base sequences", "Body size", "Diet", "Habitat"], a: 0, e: "" },
    { q: "A gene pool is…", o: ["All the alleles in a population", "All the genes in one organism", "A habitat", "A breeding group"], a: 0, e: "" },
    { q: "New alleles arise by…", o: ["Mutation", "Selection", "Isolation", "Migration only"], a: 0, e: "" },
    { q: "Sympatric speciation occurs…", o: ["In the same geographical area", "Only on islands", "Only across mountains", "Never in animals"], a: 0, e: "" },
    { q: "Peer review helps…", o: ["Validate scientific findings", "Speed up publication without checks", "Hide data", "Replace experiments"], a: 0, e: "" }
  ],
  flashcards: [
    ["Species", "Can interbreed to produce fertile offspring"],
    ["Gene pool", "All alleles in a population"],
    ["Reproductive isolation", "Prevents gene flow between populations"],
    ["Allopatric speciation", "Geographical isolation"],
    ["Sympatric speciation", "Same area: ecological, temporal or behavioural isolation"],
    ["Speciation steps", "Isolation → different mutations/selection → allele frequencies diverge"],
    ["Molecular evidence", "DNA/protein sequence similarity shows relatedness"],
    ["Validating science", "Peer review, conferences, repetition"]
  ]
});

S2Data.add({
  id: "6a", group: 6, y2: true, title: "Forensics: DNA profiling and time of death",
  summary: "PCR, gel electrophoresis, DNA profiling, and estimating time of death.",
  notes: `
<h3>DNA profiling</h3>
<p>Uses <b>short tandem repeats (STRs)</b>: non-coding regions where short sequences repeat a variable number of times, so they differ between people.</p>
<ol>
<li>Extract DNA from a sample (blood, hair, saliva).</li>
<li>Amplify it by <b>PCR</b>: heat to 95 °C to separate strands; cool to ~55 °C so <b>primers</b> anneal; 72 °C for <b>Taq polymerase</b> (thermostable) to extend new strands. Repeat cycles: DNA doubles each cycle.</li>
<li>Cut with <b>restriction enzymes</b> (or amplify specific STRs).</li>
<li><b>Gel electrophoresis</b>: DNA (negatively charged) moves towards the positive electrode through agarose gel; <b>smaller fragments move further</b>.</li>
<li>Fragments are visualised with fluorescent tags or probes and compared.</li>
</ol>
<p>Uses: identifying suspects, paternity testing, identifying remains.</p>
<h3>Time of death</h3>
<ul>
<li><b>Body temperature</b>: falls after death (algor mortis) at a roughly predictable rate.</li>
<li><b>Rigor mortis</b>: muscles stiffen as ATP runs out (begins ~4–6 hours; passes after ~36 hours).</li>
<li><b>Forensic entomology</b>: the species and stage of insects (e.g. blowfly larvae) on the body.</li>
<li><b>Stage of decomposition</b>: autolysis then bacterial decomposition.</li>
<li>Extent of decomposition is affected by temperature, humidity, and whether the body is buried or in water.</li>
</ul>
`,
  quiz: [
    { q: "PCR is used to…", o: ["Amplify DNA", "Cut DNA", "Separate DNA fragments", "Sequence proteins"], a: 0, e: "" },
    { q: "Why is Taq polymerase used in PCR?", o: ["It's thermostable (doesn't denature at high temperature)", "It cuts DNA", "It's cheap only", "It binds primers"], a: 0, e: "" },
    { q: "What temperature separates DNA strands in PCR?", o: ["About 95 °C", "About 55 °C", "About 37 °C", "About 72 °C"], a: 0, e: "" },
    { q: "In gel electrophoresis, DNA moves towards…", o: ["The positive electrode", "The negative electrode", "Neither", "The top of the gel"], a: 0, e: "" },
    { q: "Which fragments travel furthest in a gel?", o: ["The smallest", "The largest", "All equally", "The most charged per base"], a: 0, e: "" },
    { q: "STRs are useful for profiling because they…", o: ["Vary in number of repeats between people", "Code for proteins", "Are identical in everyone", "Are in mitochondria only"], a: 0, e: "" },
    { q: "Rigor mortis happens because…", o: ["ATP runs out, so myosin stays bound to actin", "Muscles grow", "Calcium leaves muscles", "Temperature rises"], a: 0, e: "" },
    { q: "Forensic entomology uses…", o: ["Insect species and life stages", "Tree rings", "Blood type only", "Body height"], a: 0, e: "" },
    { q: "After 10 PCR cycles, one DNA molecule gives about…", o: ["1024 copies", "10 copies", "20 copies", "100 copies"], a: 0, e: "2¹⁰." }
  ],
  flashcards: [
    ["PCR stages", "95 °C denature; ~55 °C primers anneal; 72 °C Taq extends"],
    ["Primers", "Short DNA sequences marking where copying starts"],
    ["Taq polymerase", "Thermostable DNA polymerase"],
    ["Gel electrophoresis", "DNA moves to + electrode; smaller fragments further"],
    ["STRs", "Short tandem repeats; vary between individuals"],
    ["Uses of DNA profiling", "Forensics, paternity, identifying remains"],
    ["Time of death clues", "Body temperature, rigor mortis, insects, decomposition"],
    ["Rigor mortis", "Muscles stiffen as ATP runs out"],
    ["PCR doubling", "2ⁿ copies after n cycles"]
  ]
});

S2Data.add({
  id: "6b", group: 6, y2: true, title: "Pathogens: bacteria and viruses",
  summary: "Structure of bacteria and viruses, TB and HIV, and how they cause disease.",
  notes: `
<h3>Bacteria and viruses</h3>
<table>
<tr><th>Bacteria</th><th>Viruses</th></tr>
<tr><td>Prokaryotic cells; ~1–5 μm</td><td>Not cells; ~20–300 nm</td></tr>
<tr><td>Cell wall, circular DNA, plasmids, 70S ribosomes</td><td>Nucleic acid (DNA or RNA) in a protein capsid; some have an envelope</td></tr>
<tr><td>Reproduce by binary fission</td><td>Replicate only inside host cells</td></tr>
</table>
<h3>Virus replication</h3>
<ul>
<li><b>Lytic cycle</b>: virus attaches, injects nucleic acid, host makes new viruses, cell bursts (lysis).</li>
<li><b>Latency</b>: viral DNA inserted into host DNA and remains dormant before becoming active.</li>
</ul>
<h3>Tuberculosis (TB)</h3>
<ul>
<li>Caused by the bacterium <i>Mycobacterium tuberculosis</i>, spread by droplets.</li>
<li>Bacteria are engulfed by macrophages in the lungs but survive inside them. A <b>tubercle</b> forms; bacteria may lie dormant.</li>
<li>If the immune system weakens, bacteria multiply, destroying lung tissue; symptoms include coughing (blood), weight loss, fever.</li>
</ul>
<h3>HIV and AIDS</h3>
<ul>
<li>HIV is a retrovirus (RNA, reverse transcriptase) spread by body fluids.</li>
<li>It infects <b>T helper cells</b> (binds to CD4 receptors), copying its RNA into DNA and inserting it into the host genome.</li>
<li>T helper cell numbers fall over years, so the immune response weakens: <b>AIDS</b>, with opportunistic infections (e.g. TB).</li>
</ul>
<h3>How pathogens evade the immune system</h3>
<p>TB hides inside macrophages and suppresses antigen presentation. HIV kills T helper cells and its antigens mutate rapidly (antigenic variability).</p>
`,
  quiz: [
    { q: "Which feature do bacteria have but viruses don't?", o: ["Ribosomes", "Nucleic acid", "Protein", "Ability to infect cells"], a: 0, e: "" },
    { q: "What causes TB?", o: ["Mycobacterium tuberculosis", "A virus", "A fungus", "A protist"], a: 0, e: "" },
    { q: "Which cells does HIV infect?", o: ["T helper cells", "Red blood cells", "B cells only", "Neurones"], a: 0, e: "" },
    { q: "HIV is a retrovirus, so it uses…", o: ["Reverse transcriptase to make DNA from RNA", "DNA polymerase only", "Ribosomes of its own", "Binary fission"], a: 0, e: "" },
    { q: "In the lytic cycle, the host cell…", o: ["Bursts, releasing new viruses", "Becomes dormant", "Divides normally", "Is unaffected"], a: 0, e: "" },
    { q: "How does TB evade the immune system?", o: ["Survives inside macrophages", "Has no antigens", "Kills all B cells", "Is too large to engulf"], a: 0, e: "" },
    { q: "Why does AIDS lead to opportunistic infections?", o: ["Loss of T helper cells weakens the immune response", "HIV produces toxins", "Antibiotics stop working", "Red blood cells are destroyed"], a: 0, e: "" },
    { q: "Bacteria reproduce by…", o: ["Binary fission", "Mitosis and meiosis", "Lytic cycle", "Budding only"], a: 0, e: "" },
    { q: "A viral capsid is made of…", o: ["Protein", "Lipid", "Peptidoglycan", "Cellulose"], a: 0, e: "" }
  ],
  flashcards: [
    ["Bacterial structure", "Cell wall, circular DNA, plasmids, 70S ribosomes"],
    ["Virus structure", "DNA/RNA in a protein capsid; some have an envelope"],
    ["Lytic cycle", "Attach → inject → replicate → lysis"],
    ["Latency", "Viral DNA dormant in host genome"],
    ["TB cause and spread", "Mycobacterium tuberculosis; droplets"],
    ["TB in the body", "Survives in macrophages; tubercles; can be dormant"],
    ["HIV target", "T helper cells (CD4 receptor)"],
    ["Retrovirus", "RNA virus using reverse transcriptase"],
    ["AIDS", "Low T helper count → opportunistic infections"]
  ]
});

S2Data.add({
  id: "6c", group: 6, y2: true, title: "The immune system and antibiotics",
  summary: "Non-specific defences, the specific immune response, immunity and vaccination, and antibiotic resistance.",
  notes: `
<h3>Non-specific defences</h3>
<p>Skin barrier, mucus and cilia, stomach acid, lysozyme in tears, inflammation (histamine increases blood flow and permeability), fever, <b>phagocytosis</b> by neutrophils and macrophages, and interferon (inhibits viral replication).</p>
<h3>Specific immune response</h3>
<ol>
<li>A macrophage engulfs a pathogen and displays its <b>antigens</b> on its surface (antigen-presenting cell).</li>
<li>A <b>T helper cell</b> with a complementary receptor binds and is activated; it divides and releases cytokines.</li>
<li><b>Humoral response</b>: B cells with complementary antibodies are activated, divide (clonal selection) and differentiate into <b>plasma cells</b>, which secrete antibodies, and <b>memory B cells</b>.</li>
<li><b>Cell-mediated response</b>: T killer cells destroy infected body cells. Memory T cells are also made.</li>
</ol>
<p><b>Antibodies</b>: Y-shaped proteins with variable regions that bind specific antigens, causing agglutination, neutralising toxins, and marking pathogens for phagocytosis.</p>
<h3>Immunity</h3>
<ul>
<li>Secondary response is faster and larger, due to memory cells.</li>
<li><b>Active</b> immunity: own antibodies made (natural infection or vaccination). <b>Passive</b>: antibodies given (across placenta, breast milk, injection); short-lived.</li>
<li>Herd immunity: vaccinating enough people protects the unvaccinated.</li>
</ul>
<h3>Antibiotics</h3>
<ul>
<li><b>Bactericidal</b> (kill bacteria, e.g. penicillin damages cell walls) or <b>bacteriostatic</b> (stop growth, e.g. tetracycline inhibits protein synthesis).</li>
<li>Antibiotic resistance evolves by natural selection: random mutations; resistant bacteria survive and reproduce. Reduce it by finishing courses, not prescribing for viral infections, and hospital hygiene.</li>
<li>Hospital-acquired infections (e.g. MRSA) are a particular problem.</li>
</ul>
`,
  quiz: [
    { q: "Which cell presents antigens to T helper cells?", o: ["Macrophage", "Red blood cell", "Plasma cell", "Platelet"], a: 0, e: "" },
    { q: "Plasma cells…", o: ["Secrete antibodies", "Engulf pathogens", "Kill infected cells", "Present antigens"], a: 0, e: "" },
    { q: "Why is the secondary response faster?", o: ["Memory cells are already present", "More antigens", "Antibodies last forever", "Pathogens are weaker"], a: 0, e: "" },
    { q: "Vaccination gives…", o: ["Active artificial immunity", "Passive natural immunity", "Passive artificial immunity", "No immunity"], a: 0, e: "" },
    { q: "Antibodies from breast milk give…", o: ["Passive natural immunity", "Active immunity", "Lifelong immunity", "Memory cells"], a: 0, e: "" },
    { q: "Penicillin is bactericidal because it…", o: ["Weakens bacterial cell walls", "Stops protein synthesis", "Kills viruses", "Stops DNA replication in humans"], a: 0, e: "" },
    { q: "Antibiotic resistance arises because…", o: ["Random mutations; resistant bacteria are selected", "Bacteria learn", "Antibiotics cause the mutation directly", "Humans become resistant"], a: 0, e: "" },
    { q: "T killer cells…", o: ["Destroy infected body cells", "Make antibodies", "Present antigens", "Make histamine"], a: 0, e: "" },
    { q: "Interferon…", o: ["Inhibits viral replication", "Kills bacteria", "Is an antibody", "Causes clotting"], a: 0, e: "" }
  ],
  flashcards: [
    ["Non-specific defences", "Skin, mucus, lysozyme, inflammation, fever, phagocytosis, interferon"],
    ["Antigen-presenting cell", "Displays pathogen antigens (e.g. macrophage)"],
    ["T helper cells", "Activate B cells and T killer cells via cytokines"],
    ["Clonal selection", "Specific B/T cells divide when activated"],
    ["Plasma cells", "Secrete antibodies"],
    ["Memory cells", "Fast secondary response"],
    ["Active vs passive immunity", "Own antibodies (long-lasting) vs given antibodies (short-lived)"],
    ["Bactericidal vs bacteriostatic", "Kills bacteria vs stops growth"],
    ["Antibiotic resistance", "Mutation + selection pressure from antibiotic use"],
    ["Herd immunity", "Enough immune people protect the unvaccinated"]
  ]
});

S2Data.detail("5a", { mistakes: ["Saying the Calvin cycle happens in the dark. It runs in the light, using ATP and reduced NADP from the light-dependent reactions."], tips: ["For GP/RuBP change questions: less light → less ATP/NADPH → GP builds up, RuBP falls. Less CO<sub>2</sub> → RuBP builds up, GP falls."], fact: "RUBISCO is probably the most abundant protein on Earth." });
S2Data.detail("5b", { mistakes: ["Treating correlation between CO<sub>2</sub> and temperature as proof of causation without a mechanism."], tips: ["When evaluating climate data, consider sample size, time range, reliability of proxies, and possible bias."], fact: "Ice cores from Antarctica record CO<sub>2</sub> levels going back over 800 000 years." });
S2Data.detail("5c", { mistakes: ["Saying organisms evolve because they need to. Mutations are random; selection acts on existing variation."], tips: ["Speciation answers need: isolation, no gene flow, different selection pressures/mutations, allele frequencies change, can't produce fertile offspring."], fact: "Darwin's finches on the Galápagos evolved different beak shapes in just a few generations during droughts." });
S2Data.detail("6a", { mistakes: ["Saying larger fragments move further in electrophoresis. Smaller fragments move faster."], tips: ["Be precise with PCR temperatures and what happens at each stage."], fact: "Alec Jeffreys invented DNA fingerprinting in Leicester in 1984." });
S2Data.detail("6b", { mistakes: ["Calling viruses living cells or saying antibiotics kill them."], tips: ["Compare TB and HIV directly: pathogen type, cells infected, how they evade the immune system."], fact: "About a quarter of the world's population is thought to carry dormant TB bacteria." });
S2Data.detail("6c", { mistakes: ["Saying antibodies kill pathogens directly. They mark, neutralise or clump them; phagocytes destroy them."], tips: ["Draw a flow chart of the specific immune response with every cell type labelled."], fact: "Alexander Fleming warned of antibiotic resistance in his 1945 Nobel lecture." });
