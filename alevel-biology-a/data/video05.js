/* Video explainers — A-level Biology A Topics 5–8. */

S2Data.video("5a", { scenes: [
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

S2Data.video("5b", { scenes: [
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

S2Data.video("5c", { scenes: [
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

S2Data.video("6a", { scenes: [
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
  { type: "title", title: "Muscles and movement", sub: "The sliding filament theory.", mark: "Ca²⁺",
    say: ["Every movement you make comes down to two proteins, actin and myosin, sliding past each other."] },
  { type: "points", title: "Muscle structure", items: ["Antagonistic pairs; tendons and ligaments", "Muscle → fibres → myofibrils → sarcomeres", "Thin actin, thick myosin"],
    say: ["Muscles can only pull, so they work in antagonistic pairs. Tendons join muscle to bone, ligaments join bone to bone.", "A muscle is made of fibres, which contain myofibrils, which are divided into repeating units called sarcomeres.", "Each sarcomere has thin actin filaments and thick myosin filaments."] },
  { type: "flow", title: "Sliding filaments", nodes: ["Ca²⁺ released;<br>binds troponin", "Tropomyosin moves;<br>sites exposed", "Myosin binds:<br>power stroke", "ATP detaches<br>and re-cocks"],
    say: ["A nerve impulse makes the sarcoplasmic reticulum release calcium ions. They bind to troponin.", "Troponin changes shape and pulls tropomyosin away from the binding sites on actin.", "Myosin heads attach, forming cross-bridges, and tilt in a power stroke, pulling actin towards the centre.", "ATP binds to myosin so it detaches. Hydrolysing the ATP re-cocks the head, ready to bind again."] },
  { type: "compare", title: "Fibre types", h: ["Slow twitch", "Fast twitch"],
    rows: [["Respiration", "Aerobic", "Anaerobic"], ["Features", "Mitochondria, myoglobin, capillaries", "Glycogen, creatine phosphate"], ["Use", "Endurance", "Short bursts"]],
    say: ["Slow twitch fibres respire aerobically. Fast twitch fibres rely on anaerobic respiration.", "Slow twitch fibres have lots of mitochondria, capillaries and myoglobin, which makes them red. Fast twitch fibres store glycogen and creatine phosphate.", "So slow twitch is for endurance, and fast twitch for powerful bursts that fatigue quickly."] },
  { type: "quiz", q: "Which band stays the same length during contraction?", o: ["I band", "H zone", "A band", "Sarcomere"], a: 2,
    why: "The A band is the length of the myosin filaments, which don't shorten.", say: ["During contraction, which band stays the same length?"] }
]});

S2Data.video("7b", { scenes: [
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

S2Data.video("7c", { scenes: [
  { type: "title", title: "Heart control and exercise", sub: "Keeping the beat and adjusting the rate.", mark: "ECG",
    say: ["Your heart beats on its own, but your brain can speed it up or slow it down. Let's see how."] },
  { type: "flow", title: "Coordinating the heartbeat", nodes: ["SAN:<br>atria contract", "AVN:<br>delay", "Bundle of His", "Purkyne fibres:<br>ventricles contract"],
    say: ["Heart muscle is myogenic. The sinoatrial node, the pacemaker, sends a wave of excitation across the atria, and they contract.", "Non-conducting tissue stops the wave. The atrioventricular node delays it, so the atria finish emptying.", "The impulse passes down the bundle of His in the septum.", "Purkyne fibres carry it up through the ventricle walls, so they contract from the apex upwards."] },
  { type: "compare", title: "Reading an ECG", h: ["Shows"],
    rows: [["P wave", "Atria depolarise"], ["QRS complex", "Ventricles depolarise"], ["T wave", "Ventricles repolarise"]],
    say: ["The P wave shows the atria depolarising.", "The QRS complex shows the ventricles depolarising, just before they contract.", "The T wave shows the ventricles repolarising."] },
  { type: "flow", title: "During exercise", nodes: ["CO₂ up,<br>pH down", "Chemoreceptors", "Medulla", "Sympathetic nerves:<br>faster rate"],
    say: ["During exercise, carbon dioxide rises and blood pH falls.", "Chemoreceptors in the aorta, carotid arteries and medulla detect this.", "They send impulses to the cardiovascular and ventilation centres in the medulla.", "More impulses go along sympathetic nerves to the SAN, so heart rate rises. Breathing gets faster and deeper too."] },
  { type: "calc", title: "Cardiac output", q: "Stroke volume 75 cm³, heart rate 160 bpm.",
    lines: ["Cardiac output = SV × HR", "= 75 × 160", "= 12 000 cm³ min⁻¹ = 12 dm³ min⁻¹"],
    say: ["Cardiac output is stroke volume times heart rate.", "So seventy five times one hundred and sixty.", "That's twelve thousand cubic centimetres, or twelve litres, per minute."] },
  { type: "quiz", q: "What does the AVN delay allow?", o: ["Ventricles to fill fully from the atria", "The SAN to recharge", "Blood to enter the aorta", "Valves to open"], a: 0,
    why: "Atria finish contracting before ventricles start.", say: ["Why does the AVN delay the impulse?"] }
]});

S2Data.video("7d", { scenes: [
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

S2Data.video("8a", { scenes: [
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

S2Data.video("8b", { scenes: [
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

S2Data.video("8c", { scenes: [
  { type: "title", title: "Drugs and genetic modification", sub: "Fixing imbalances and editing genes.", mark: "GM",
    say: ["Some brain disorders come from too little of a neurotransmitter. And we can move genes between organisms."] },
  { type: "compare", title: "Neurotransmitter imbalances", h: ["Cause", "Treatment"],
    rows: [["Parkinson's", "Loss of dopamine neurones", "L-dopa, dopamine agonists"], ["Depression", "Low serotonin", "SSRIs block reuptake"]],
    say: ["In Parkinson's disease, dopamine-secreting neurones die, causing tremors and slow movement. L-dopa crosses into the brain and is converted to dopamine.", "Depression is linked to low serotonin. SSRIs block serotonin reuptake, so it stays in the synapse longer."] },
  { type: "flow", title: "Making a GM organism", nodes: ["Cut gene out<br>(restriction enzyme)", "Cut plasmid with<br>same enzyme", "Join with<br>DNA ligase", "Into host;<br>find with marker"],
    say: ["A restriction enzyme cuts the gene out, leaving sticky ends.", "The plasmid vector is cut with the same enzyme, so the sticky ends are complementary.", "DNA ligase joins the gene into the plasmid.", "The plasmid goes into host cells, and marker genes identify which ones took it up."] },
  { type: "compare", title: "GM crops: the debate", h: ["Points"],
    rows: [["Benefits", "Pest resistance, higher yield, better nutrition"], ["Risks", "Genes spread to wild plants, less biodiversity"], ["Ethics", "Patents, cost to farmers, long-term safety"]],
    say: ["GM crops can resist pests, give higher yields and carry extra nutrients.", "But genes could spread to wild relatives, and monocultures reduce biodiversity.", "There are also ethical and economic questions, like patents and long-term safety."] },
  { type: "quiz", q: "What does DNA ligase do?", o: ["Cuts DNA", "Joins DNA fragments", "Copies DNA", "Makes mRNA"], a: 1,
    why: "It seals the sugar–phosphate backbone.", say: ["What's the job of DNA ligase?"] }
]});
