/* Video explainers — Biology Topic 2 (g)–(l). */

S2Data.video("2g", {
  scenes: [
    { type: "title", title: "Gas exchange", sub: "Breathing, alveoli, smoking, and gas exchange in leaves.", mark: "O₂ CO₂",
      say: ["Cells need oxygen and must get rid of carbon dioxide. This video covers how lungs and leaves exchange gases."] },
    { type: "flow", title: "Air's route into the lungs", nodes: ["Trachea", "Bronchus", "Bronchioles", "Alveoli"],
      say: ["Air travels down the trachea, which is kept open by rings of cartilage.", "It splits into two bronchi, one for each lung.", "These divide into smaller bronchioles.", "Which end in millions of tiny air sacs, the alveoli, where gas exchange happens."] },
    { type: "compare", title: "Breathing", h: ["Breathing in", "Breathing out"],
      rows: [["Intercostal muscles", "Contract: ribs up and out", "Relax: ribs down and in"], ["Diaphragm", "Contracts and flattens", "Relaxes and domes up"], ["Volume / pressure", "Volume up, pressure down", "Volume down, pressure up"], ["Air", "Rushes in", "Pushed out"]],
      say: ["When you breathe in, the external intercostal muscles contract, moving the ribs up and out. Breathing out, they relax.", "The diaphragm contracts and flattens. Breathing out, it relaxes and domes up.", "So the volume of the chest increases and the pressure falls.", "Air rushes in from the higher pressure outside."] },
    { type: "points", title: "Why alveoli are so good at it", items: ["Huge <b>surface area</b>", "Walls <b>one cell thick</b>: short diffusion distance", "Rich <b>blood supply</b> keeps the gradient steep", "<b>Moist</b> lining; constant <b>ventilation</b>"],
      say: ["Millions of alveoli give a huge surface area.", "Their walls, and the capillary walls, are only one cell thick, so the diffusion distance is short.", "A rich blood supply carries oxygen away and brings carbon dioxide, keeping the concentration gradients steep.", "The surface is moist so gases dissolve, and breathing keeps refreshing the air."] },
    { type: "compare", title: "Smoking", h: ["Damage", "Result"],
      rows: [["Tar", "Paralyses cilia; carcinogens", "Bronchitis, coughing, lung cancer"], ["Carbon monoxide", "Binds to haemoglobin", "Less oxygen carried"], ["Nicotine", "Addictive; raises heart rate", "Heart disease risk"], ["Damaged alveoli", "Walls break down", "Emphysema: less surface area"]],
      say: ["Tar stops cilia working, so mucus builds up, causing bronchitis. It also contains carcinogens that cause lung cancer.", "Carbon monoxide binds to haemoglobin, so the blood carries less oxygen.", "Nicotine is addictive and raises heart rate, increasing the risk of heart disease.", "And damaged alveoli walls break down, reducing the surface area. That's emphysema."] },
    { type: "points", title: "Gas exchange in leaves", items: ["Gases diffuse through <b>stomata</b> and air spaces", "Day: photosynthesis > respiration → CO₂ in, O₂ out", "Night: respiration only → O₂ in, CO₂ out", "<b>Guard cells</b> open and close stomata"],
      say: ["In leaves, gases diffuse in and out through stomata and the air spaces in the spongy layer.", "In bright light, photosynthesis is faster than respiration, so carbon dioxide goes in and oxygen comes out.", "At night, there's only respiration, so it's the other way round.", "Guard cells open the stomata when they're turgid, and close them when they lose water."] },
    { type: "quiz", q: "What happens to the diaphragm when you breathe in?", o: ["It relaxes and domes up", "It contracts and flattens", "Nothing", "It pushes air out"], a: 1,
      why: "This increases the volume of the chest.", say: ["What does the diaphragm do when you breathe in?"] }
  ]
});

S2Data.video("2h", {
  scenes: [
    { type: "title", title: "Transport in plants", sub: "Xylem, phloem and transpiration.", mark: "xylem",
      say: ["Plants have two transport tissues, xylem and phloem. And water moves up a plant thanks to transpiration."] },
    { type: "compare", title: "Xylem vs phloem", h: ["Xylem", "Phloem"],
      rows: [["Carries", "Water and mineral ions", "Sucrose and amino acids"], ["Direction", "Up from roots", "Up and down"], ["Structure", "Dead, hollow, lignin walls", "Living cells"]],
      say: ["Xylem carries water and mineral ions. Phloem carries sucrose and amino acids. That movement in the phloem is called translocation.", "Xylem moves things up from the roots. Phloem moves things up and down.", "Xylem vessels are dead, hollow tubes strengthened with lignin. Phloem is made of living cells."] },
    { type: "flow", title: "The transpiration stream", nodes: ["Water enters root hairs by <b>osmosis</b>", "Travels up the <b>xylem</b>", "Evaporates in the leaf", "Diffuses out through <b>stomata</b>"],
      say: ["Water enters root hair cells by osmosis.", "It's pulled up through the xylem in a continuous column.", "In the leaf, water evaporates from cell surfaces into the air spaces.", "And water vapour diffuses out through the stomata. That loss is transpiration, and it pulls more water up behind it."] },
    { type: "compare", title: "What speeds up transpiration?", h: ["Effect", "Why"],
      rows: [["Higher temperature", "Faster", "More kinetic energy: faster evaporation and diffusion"], ["Brighter light", "Faster", "Stomata open wider"], ["More wind", "Faster", "Blows away vapour, keeps gradient steep"], ["Higher humidity", "Slower", "Less steep gradient"]],
      say: ["A higher temperature speeds it up, because water molecules have more kinetic energy.", "Brighter light makes stomata open wider.", "Wind blows water vapour away from the leaf, keeping the concentration gradient steep.", "But high humidity slows it down, because the air is already moist and the gradient is shallow."] },
    { type: "calc", title: "Using a potometer", q: "The air bubble moves 24 mm in 4 minutes.", lines: ["rate = distance ÷ time", "= 24 ÷ 4", "= 6 mm/min"],
      say: ["A potometer measures water uptake. Assemble it under water so no air gets in, then time an air bubble moving along a capillary tube.", "Rate equals distance divided by time.", "Six millimetres per minute. Change one factor at a time, like wind using a fan, and compare."] },
    { type: "quiz", q: "Which change would reduce transpiration?", o: ["Higher temperature", "More wind", "Higher humidity", "Brighter light"], a: 2,
      why: "Moist air means a smaller concentration gradient.", say: ["Which change would reduce the rate of transpiration?"] }
  ]
});

S2Data.video("2i", {
  scenes: [
    { type: "title", title: "Transport in humans", sub: "Blood, the heart, blood vessels and immunity.", mark: "♥",
      say: ["Your circulatory system carries oxygen, food and waste around your body, and defends it against disease."] },
    { type: "compare", title: "Blood", h: ["Job", "Key feature"],
      rows: [["Red blood cells", "Carry oxygen", "Haemoglobin; no nucleus; biconcave"], ["White blood cells", "Fight pathogens", "Phagocytes engulf; lymphocytes make antibodies"], ["Platelets", "Clotting", "Form fibrin mesh to seal wounds"], ["Plasma", "Transports dissolved substances", "CO₂, glucose, urea, hormones"]],
      say: ["Red blood cells carry oxygen. They're full of haemoglobin, have no nucleus, and a biconcave shape gives a large surface area.", "White blood cells fight infection. Phagocytes engulf pathogens, and lymphocytes produce antibodies.", "Platelets help blood clot, sealing wounds.", "Plasma carries dissolved substances like carbon dioxide, glucose, urea and hormones."] },
    { type: "flow", title: "Double circulation", nodes: ["Body", "Vena cava → right atrium → right ventricle", "Pulmonary artery → lungs", "Pulmonary vein → left atrium → left ventricle", "Aorta → body"],
      say: ["Deoxygenated blood returns from the body.", "Through the vena cava into the right atrium, then the right ventricle.", "It's pumped through the pulmonary artery to the lungs to pick up oxygen.", "Oxygenated blood returns through the pulmonary vein to the left atrium and left ventricle.", "And the left ventricle pumps it out through the aorta to the body. The left ventricle has the thickest wall, because it pumps blood all round the body."] },
    { type: "compare", title: "Blood vessels", h: ["Structure", "Why"],
      rows: [["Arteries", "Thick, muscular, elastic walls", "Carry blood away from the heart at high pressure"], ["Veins", "Thin walls, wide lumen, valves", "Low pressure; valves stop backflow"], ["Capillaries", "Walls one cell thick", "Exchange substances with cells"]],
      say: ["Arteries carry blood away from the heart at high pressure, so they have thick, muscular, elastic walls.", "Veins carry blood back at low pressure. They have thinner walls, a wide lumen, and valves to stop blood flowing backwards.", "Capillaries have walls just one cell thick, so substances can diffuse easily between the blood and cells."] },
    { type: "flow", title: "Vaccination", nodes: ["Dead or weakened pathogen injected", "Lymphocytes make <b>antibodies</b>", "<b>Memory cells</b> remain", "Real infection: fast, big response"],
      say: ["A vaccine contains a dead or weakened form of a pathogen, carrying its antigens.", "Lymphocytes respond by making specific antibodies.", "Memory cells are left behind.", "If the real pathogen ever infects you, the memory cells make antibodies much faster and in larger amounts, so you don't get ill."] },
    { type: "quiz", q: "Which chamber of the heart has the thickest wall?", o: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"], a: 3,
      why: "It pumps blood all the way round the body.", say: ["Which chamber of the heart has the thickest wall?"] }
  ]
});

S2Data.video("2j", {
  scenes: [
    { type: "title", title: "Excretion", sub: "The kidneys, the nephron and ADH.", mark: "urea",
      say: ["Excretion removes waste made by the body. The kidneys filter your blood about three hundred times a day."] },
    { type: "points", title: "Excretory organs", items: ["<b>Lungs</b>: carbon dioxide", "<b>Kidneys</b>: urea, excess water and salts", "<b>Skin</b>: sweat", "Urea is made in the <b>liver</b> from excess amino acids"],
      say: ["The lungs excrete carbon dioxide.", "The kidneys excrete urea, plus excess water and salts, in urine.", "The skin loses some water and salts in sweat.", "Urea itself is made in the liver, from the breakdown of excess amino acids."] },
    { type: "flow", title: "Inside a nephron", nodes: ["<b>Ultrafiltration</b> in the glomerulus", "<b>Selective reabsorption</b> of glucose", "<b>Water reabsorbed</b> in the collecting duct", "Urine to the bladder"],
      say: ["Blood enters the glomerulus at high pressure. Small molecules, water, glucose, urea and salts, are forced into the Bowman's capsule. Cells and proteins are too big.",
            "In the first part of the tubule, all the glucose is selectively reabsorbed back into the blood by active transport.",
            "Water is reabsorbed in the loop of Henle and the collecting duct, depending on what the body needs.",
            "What's left is urine, which flows down the ureter to the bladder."] },
    { type: "flow", title: "ADH: when you're dehydrated", nodes: ["Blood too concentrated", "Pituitary releases <b>more ADH</b>", "Collecting duct more permeable", "More water reabsorbed: small volume of concentrated urine"],
      say: ["If you're dehydrated, the water content of your blood falls. The brain detects this.", "The pituitary gland releases more A D H.", "A D H makes the collecting ducts more permeable to water.", "So more water is reabsorbed, and you produce a small volume of concentrated urine. Drink lots and the opposite happens."] },
    { type: "quiz", q: "Why is there no glucose in healthy urine?", o: ["It's too big to filter", "It's all reabsorbed", "The liver removes it", "It's turned into urea"], a: 1,
      why: "It's filtered, then all of it is reabsorbed.", say: ["Why is there no glucose in the urine of a healthy person?"] }
  ]
});

S2Data.video("2k", {
  scenes: [
    { type: "title", title: "The nervous system and the eye", sub: "Reflexes, synapses, and how the eye focuses.", mark: "CNS",
      say: ["Your nervous system lets you respond to changes in milliseconds. This video covers reflex arcs, synapses and the eye."] },
    { type: "flow", title: "The response pathway", nodes: ["Stimulus", "Receptor", "Coordinator (CNS)", "Effector", "Response"],
      say: ["It starts with a stimulus, a change in the environment.", "Receptors detect it.", "The coordinator, the brain or spinal cord, processes it.", "An effector, a muscle or gland, carries out", "the response."] },
    { type: "flow", title: "A reflex arc: touching something hot", nodes: ["Receptor in skin", "<b>Sensory</b> neurone", "<b>Relay</b> neurone in spinal cord", "<b>Motor</b> neurone", "Muscle contracts"],
      say: ["Reflexes are fast and automatic. A receptor in your skin detects the heat.", "An impulse travels along a sensory neurone to the spinal cord.", "A relay neurone passes it on,", "to a motor neurone,", "and the muscle contracts, pulling your hand away before you've even thought about it."] },
    { type: "flow", title: "Crossing a synapse", nodes: ["Impulse arrives", "Neurotransmitter released", "Diffuses across the gap", "Binds to receptors: new impulse"],
      say: ["Neurones don't quite touch. When an impulse reaches the end of one,", "it triggers the release of a chemical, a neurotransmitter.", "The neurotransmitter diffuses across the gap.", "It binds to receptors on the next neurone and starts a new impulse."] },
    { type: "compare", title: "Focusing", h: ["Near object", "Distant object"],
      rows: [["Ciliary muscles", "Contract", "Relax"], ["Suspensory ligaments", "Slacken", "Tighten"], ["Lens", "Fatter: bends light more", "Thinner: bends light less"]],
      say: ["To focus on a near object, the ciliary muscles contract. For a distant object, they relax.", "So the suspensory ligaments slacken for near objects, and tighten for distant ones.", "The lens becomes fatter to bend light more for near objects, and thinner for distant objects."] },
    { type: "points", title: "The iris in bright light", items: ["<b>Circular</b> muscles contract", "<b>Radial</b> muscles relax", "Pupil gets <b>smaller</b>: less light enters, protecting the retina"],
      say: ["In bright light, the circular muscles of the iris contract,", "and the radial muscles relax.", "The pupil gets smaller, letting less light in to protect the retina. In dim light, the opposite happens."] },
    { type: "quiz", q: "How is an impulse passed across a synapse?", o: ["Electrically", "By a neurotransmitter", "By blood", "By hormones"], a: 1,
      why: "The chemical diffuses across the gap.", say: ["How is a nerve impulse passed across a synapse?"] }
  ]
});

S2Data.video("2l", {
  scenes: [
    { type: "title", title: "Hormones, homeostasis and plant responses", sub: "Blood glucose, temperature control and tropisms.", mark: "insulin",
      say: ["Hormones are chemical messengers. This video covers blood glucose, body temperature, and how plants respond to light and gravity."] },
    { type: "compare", title: "Nerves vs hormones", h: ["Nerves", "Hormones"],
      rows: [["Signal", "Electrical impulses", "Chemicals in the blood"], ["Speed", "Very fast", "Slower"], ["Effect", "Short-lived, precise", "Longer-lasting, widespread"]],
      say: ["Nerves use electrical impulses. Hormones are chemicals carried in the blood.", "Nerves are very fast. Hormones are slower.", "Nervous responses are short and precise. Hormonal effects last longer and can affect many organs."] },
    { type: "cycle", title: "Controlling blood glucose", nodes: ["Blood glucose rises after a meal", "Pancreas releases insulin", "Liver and muscles store glycogen", "Blood glucose back to normal"], rx: 380, ry: 180,
      say: ["After a meal, blood glucose rises.", "The pancreas detects this and releases insulin.", "Insulin makes cells take up glucose, and the liver and muscles convert it to glycogen for storage.", "Blood glucose falls back to normal. If it falls too low, the pancreas releases glucagon, which turns glycogen back into glucose. In type one diabetes, the pancreas doesn't make enough insulin."] },
    { type: "compare", title: "Controlling body temperature", h: ["Too hot", "Too cold"],
      rows: [["Blood vessels near skin", "Vasodilation: more heat lost", "Vasoconstriction: less heat lost"], ["Sweat", "More sweating: evaporation cools", "Less sweating"], ["Muscles", "—", "Shivering releases heat"]],
      say: ["The hypothalamus keeps your core at about thirty seven degrees. When you're too hot, blood vessels near the skin widen, vasodilation, so more heat is lost. When cold, they narrow.", "When hot, you sweat more, and evaporation cools the skin.", "When cold, you shiver. Muscle contractions release heat from respiration."] },
    { type: "points", title: "Plant responses", items: ["<b>Phototropism</b>: shoots grow towards light", "<b>Auxin</b> moves to the shaded side", "Cells there <b>elongate</b> more → shoot bends to the light", "<b>Geotropism</b>: roots grow down, shoots grow up"],
      say: ["Plants respond to light. Shoots grow towards it. That's phototropism.", "A hormone called auxin, made in the shoot tip, moves to the shaded side.", "Auxin makes cells on that side elongate more, so the shoot bends towards the light.", "Plants also respond to gravity. Roots grow down and shoots grow up. That's geotropism."] },
    { type: "quiz", q: "Which hormone lowers blood glucose?", o: ["Glucagon", "Adrenaline", "Insulin", "ADH"], a: 2,
      why: "Glucagon raises it.", say: ["Which hormone lowers blood glucose?"] }
  ]
});
