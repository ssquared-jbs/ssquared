/* Video explainers — Biology Topic 1 and Topic 2 (a)–(c), (e), (f). */

S2Data.video("1a", {
  scenes: [
    { type: "title", title: "Characteristics of living organisms", sub: "The life processes every living thing carries out.", mark: "MRS",
      say: ["What makes something alive? All living organisms share a set of characteristics. Here they are."] },
    { type: "points", title: "The life processes", two: true, items: ["<b>Nutrition</b>: food for energy and growth", "<b>Respiration</b>: releasing energy", "<b>Excretion</b>: removing metabolic waste", "<b>Movement</b>", "<b>Sensitivity</b>: responding to stimuli", "<b>Growth</b>", "<b>Reproduction</b>", "<b>Homeostasis</b>: a constant internal environment"],
      say: ["Living things need nutrition, to get energy and raw materials.", "They respire, releasing energy from food in every cell.", "They excrete, removing the waste products of metabolism, like carbon dioxide and urea.", "They move, even plants, which turn towards light.", "They're sensitive: they detect and respond to changes around them.", "They grow,", "they reproduce,", "and they control their internal conditions. That's homeostasis."] },
    { type: "compare", title: "Don't mix these up", h: ["Meaning", "Example"],
      rows: [["Excretion", "Removing waste made by cells", "CO₂ from the lungs, urea in urine"], ["Egestion", "Removing undigested food", "Faeces"]],
      say: ["Excretion removes waste made inside cells by metabolism, like carbon dioxide and urea.", "Egestion is different. It's getting rid of food that was never digested or absorbed. Faeces are egested, not excreted."] },
    { type: "quiz", q: "Which life process happens in every living cell, all the time?", o: ["Photosynthesis", "Respiration", "Reproduction", "Movement"], a: 1,
      why: "Cells always need energy.", say: ["Which life process happens in every living cell, all the time?"] }
  ]
});

S2Data.video("1b", {
  scenes: [
    { type: "title", title: "Variety of living organisms", sub: "Plants, animals, fungi, bacteria, protoctists and viruses.", mark: "5+1",
      say: ["Living things are sorted into groups based on their features. You need to know five groups, plus viruses."] },
    { type: "compare", title: "Plants, animals and fungi", h: ["Cell walls", "Store carbohydrate as"],
      rows: [["Plants", "Cellulose; have chloroplasts", "Starch or sucrose"], ["Animals", "None; no chloroplasts", "Glycogen"], ["Fungi", "Chitin; no chloroplasts", "Glycogen"]],
      say: ["Plants are multicellular with cellulose cell walls and chloroplasts. They store carbohydrate as starch or sucrose.", "Animals are multicellular with no cell walls and no chloroplasts. They store glycogen, and usually have a nervous system.", "Fungi have cell walls made of chitin. Most are made of thread-like hyphae forming a mycelium. They feed by saprotrophic nutrition: secreting enzymes onto food and absorbing the products. Yeast is a single-celled fungus."] },
    { type: "points", title: "Bacteria and protoctists", items: ["<b>Bacteria</b>: single cells, no nucleus; circular chromosome and plasmids", "e.g. Lactobacillus (yoghurt), Pneumococcus (pneumonia)", "<b>Protoctists</b>: single-celled with a nucleus", "e.g. Chlorella (photosynthesises), Plasmodium (malaria)"],
      say: ["Bacteria are single cells with no nucleus. Their D N A is a circular chromosome, plus small rings called plasmids.", "Lactobacillus is used to make yoghurt. Pneumococcus causes pneumonia.", "Protoctists are mostly single-celled, but they do have a nucleus.", "Chlorella has chloroplasts and photosynthesises. Plasmodium causes malaria."] },
    { type: "points", title: "Viruses", items: ["Not cells; much smaller than bacteria", "A <b>protein coat</b> around DNA or RNA", "Only reproduce <b>inside living cells</b>", "e.g. tobacco mosaic virus, influenza, HIV"],
      say: ["Viruses aren't made of cells, and they're far smaller than bacteria.", "They're just a protein coat around genetic material.", "They can only reproduce inside the living cells of another organism, so they're all parasites.", "Examples are tobacco mosaic virus in plants, and influenza and H I V in humans."] },
    { type: "quiz", q: "Which group stores carbohydrate as glycogen and has chitin cell walls?", o: ["Plants", "Animals", "Fungi", "Bacteria"], a: 2,
      why: "Animals store glycogen too, but have no cell walls.", say: ["Which group stores glycogen and has cell walls made of chitin?"] }
  ]
});

S2Data.video("2a", {
  scenes: [
    { type: "title", title: "Cells and levels of organisation", sub: "Cell structures, magnification and stem cells.", mark: "µm",
      say: ["Every living thing is made of cells. This video covers what's inside them, how to calculate magnification, and stem cells."] },
    { type: "compare", title: "Cell structures", h: ["Function", "Found in"],
      rows: [["Nucleus", "Contains DNA; controls the cell", "Plant and animal"], ["Cell membrane", "Controls what enters and leaves", "Plant and animal"], ["Mitochondria", "Aerobic respiration", "Plant and animal"], ["Ribosomes", "Make proteins", "Plant and animal"], ["Cell wall", "Cellulose: support", "Plant only"], ["Chloroplasts", "Photosynthesis", "Plant only"], ["Vacuole", "Cell sap; keeps cell firm", "Plant only (permanent)"]],
      say: ["The nucleus contains genetic material and controls the cell.", "The cell membrane controls what goes in and out.", "Mitochondria are where aerobic respiration happens.", "Ribosomes make proteins. All four of these are in both plant and animal cells.", "Plant cells also have a cellulose cell wall for support,", "chloroplasts for photosynthesis,", "and a large permanent vacuole filled with cell sap."] },
    { type: "equation", title: "Magnification", rows: [[{ t: "magnification", k: 1 }, "=", { t: "image size", s: 1 }, "÷", { t: "real size", s: 1 }]], note: "1 mm = 1000 µm · same units top and bottom!", noteStep: 2,
      say: ["You'll often need to calculate magnification or real size.", "Magnification equals image size divided by real size.", "The units must match. One millimetre is a thousand micrometres."] },
    { type: "calc", title: "Worked example", q: "A cell's image is 40 mm long at ×400. How long is the real cell in µm?", lines: ["real size = image ÷ magnification", "= 40 ÷ 400 = 0.1 mm", "= 0.1 × 1000 = 100 µm"],
      say: ["Rearrange: real size equals image size divided by magnification.", "Forty divided by four hundred is point one millimetres.", "Times a thousand: one hundred micrometres."] },
    { type: "flow", title: "Levels of organisation", nodes: ["Cell", "Tissue", "Organ", "Organ system", "Organism"],
      say: ["Cells are the basic unit.", "Similar cells working together form a tissue.", "Several tissues working together form an organ, like the heart.", "Organs working together form an organ system.", "And organ systems make up the whole organism."] },
    { type: "points", title: "Stem cells", items: ["<b>Undifferentiated</b>: can become specialised cells", "Embryonic: can become <b>any</b> cell type", "Adult (bone marrow): limited types", "Plants: <b>meristems</b> in root and shoot tips", "Uses vs risks: treating disease vs ethics, rejection"],
      say: ["Stem cells are undifferentiated. They can divide and develop into specialised cells.", "Embryonic stem cells can become any type of cell.", "Adult stem cells, like those in bone marrow, only form a limited range.", "In plants, stem cells are found in meristems at the tips of roots and shoots.", "They could treat conditions like diabetes or paralysis, but there are ethical concerns, and risks like rejection or infection."] },
    { type: "quiz", q: "Which structure is found in plant cells but not animal cells?", o: ["Mitochondria", "Ribosomes", "Chloroplasts", "Nucleus"], a: 2,
      why: "Also the cell wall and permanent vacuole.", say: ["Which structure is in plant cells but not animal cells?"] }
  ]
});

S2Data.video("2b", {
  scenes: [
    { type: "title", title: "Biological molecules and enzymes", sub: "Carbohydrates, proteins, lipids, food tests and enzymes.", mark: "E+S",
      say: ["Food is made of three main types of large molecule, and enzymes break them down. Let's see how."] },
    { type: "compare", title: "Large molecules and their building blocks", h: ["Made from", "Elements"],
      rows: [["Starch, glycogen", "Glucose", "C, H, O"], ["Proteins", "Amino acids", "C, H, O, N"], ["Lipids", "Fatty acids + glycerol", "C, H, O"]],
      say: ["Starch and glycogen are made from glucose. They contain carbon, hydrogen and oxygen.", "Proteins are made from amino acids. They also contain nitrogen.", "Lipids are made from fatty acids and glycerol."] },
    { type: "compare", title: "Food tests", h: ["Reagent", "Positive result"],
      rows: [["Starch", "Iodine", "Orange → blue-black"], ["Glucose", "Benedict's + heat", "Blue → brick-red"], ["Protein", "Biuret", "Blue → purple"], ["Lipid", "Ethanol, then water", "Cloudy white emulsion"]],
      say: ["For starch, add iodine. It turns from orange to blue-black.", "For glucose, add Benedict's solution and heat in a water bath. It goes from blue through green and yellow to brick-red.", "For protein, add biuret reagent. Blue turns purple.", "For lipids, shake with ethanol and pour into water. A cloudy white emulsion forms."] },
    { type: "flow", title: "Lock and key", nodes: ["Enzyme with an <b>active site</b>", "Substrate fits: <b>complementary shape</b>", "Enzyme–substrate complex", "Products released; enzyme unchanged"],
      say: ["Enzymes are biological catalysts. Each has an active site with a specific shape.", "Only a substrate with a complementary shape fits, like a key in a lock.", "They form an enzyme–substrate complex.", "The products are released, and the enzyme can be used again."] },
    { type: "graph", title: "Effect of temperature", x: "Temperature (°C)", y: "Rate",
      lines: [{ pts: [[0, 0.05], [0.2, 0.25], [0.37, 0.55], [0.47, 0.85], [0.53, 0.5], [0.6, 0.05]], s: 0 }],
      marks: [{ x: 0.47, y: 0.85, t: "optimum ≈ 37 °C", s: 1 }, { x: 0.62, y: 0.25, t: "denatured: active site changes shape", s: 2, anchor: "start", dx: 20, dot: false }],
      say: ["As temperature rises, molecules move faster and collide more, so the rate increases.", "It peaks at the optimum temperature, about thirty seven degrees for human enzymes.", "Above that, the bonds holding the enzyme's shape break. The active site changes shape and the substrate no longer fits. The enzyme is denatured. pH has a similar effect, with its own optimum."] },
    { type: "quiz", q: "What happens to an enzyme at 70 °C?", o: ["It works fastest", "It's denatured", "It's used up", "It turns into a substrate"], a: 1,
      why: "Its active site changes shape, so the substrate can't fit.", say: ["What happens to a human enzyme at seventy degrees?"] }
  ]
});

S2Data.video("2c", {
  scenes: [
    { type: "title", title: "Movement of substances", sub: "Diffusion, osmosis and active transport.", mark: "H₂O",
      say: ["Substances move in and out of cells in three ways. Knowing which one is happening is key to lots of exam questions."] },
    { type: "particles", title: "Diffusion", mode: "diffusion", modes: ["diffusion", "diffusion"], caps: ["High concentration | low concentration", "Net movement down the gradient"], n: 40,
      say: ["Diffusion is the net movement of particles from an area of higher concentration to an area of lower concentration.", "It happens because particles move randomly. It doesn't need energy. Oxygen diffuses into cells this way."] },
    { type: "points", title: "Faster diffusion", items: ["Larger <b>surface area</b>", "Steeper <b>concentration gradient</b>", "Shorter <b>distance</b>", "Higher <b>temperature</b>"],
      say: ["Diffusion is faster with a larger surface area,", "a steeper concentration gradient,", "a shorter distance to travel,", "and a higher temperature."] },
    { type: "big", text: "Osmosis", sub: "Net movement of water across a partially permeable membrane, from a dilute solution to a more concentrated one",
      say: ["Osmosis is a special case of diffusion, for water.", "It's the net movement of water molecules across a partially permeable membrane, from a dilute solution to a more concentrated solution."] },
    { type: "compare", title: "Cells in different solutions", h: ["Animal cell", "Plant cell"],
      rows: [["In pure water", "Swells and bursts", "Turgid (wall stops it bursting)"], ["In concentrated solution", "Shrinks", "Flaccid, then plasmolysed"]],
      say: ["In pure water, water moves into cells by osmosis. An animal cell swells and can burst. A plant cell becomes turgid, but its wall stops it bursting.", "In a concentrated solution, water moves out. An animal cell shrinks. A plant cell becomes flaccid, and the membrane can pull away from the wall."] },
    { type: "calc", title: "Potato practical", q: "A potato cylinder goes from 2.50 g to 2.75 g in water.", lines: ["change = 2.75 − 2.50 = 0.25 g", "% change = 0.25 ÷ 2.50 × 100", "= +10%"],
      say: ["In the potato osmosis practical, you find the percentage change in mass. Change is point two five grams.", "Divide by the starting mass and multiply by a hundred.", "Plus ten percent. It gained water, so the solution was more dilute than the potato cells."] },
    { type: "big", text: "Active transport", sub: "Against the concentration gradient, using energy from respiration. e.g. root hairs absorbing mineral ions",
      say: ["Finally, active transport.", "It moves substances against the concentration gradient, from low to high, using energy from respiration. Root hair cells use it to absorb mineral ions from the soil."] },
    { type: "quiz", q: "Which process needs energy from respiration?", o: ["Diffusion", "Osmosis", "Active transport", "All three"], a: 2,
      why: "It moves substances against the gradient.", say: ["Which of these processes needs energy from respiration?"] }
  ]
});

S2Data.video("2e", {
  scenes: [
    { type: "title", title: "Nutrition in humans", sub: "A balanced diet, digestion and absorption.", mark: "gut",
      say: ["This video follows food on its journey through the gut, from a balanced diet to absorption into the blood."] },
    { type: "compare", title: "A balanced diet", h: ["Needed for", "Source"],
      rows: [["Carbohydrate", "Energy", "Bread, pasta"], ["Protein", "Growth and repair", "Meat, beans"], ["Lipid", "Energy store, insulation", "Butter, oil"], ["Vitamin C / D", "Prevent scurvy / healthy bones", "Fruit / sunlight, fish"], ["Calcium / iron", "Bones and teeth / haemoglobin", "Milk / red meat"], ["Fibre and water", "Peristalsis / every cell", "Vegetables / drinks"]],
      say: ["Carbohydrates provide energy.", "Proteins are for growth and repair.", "Lipids store energy and insulate.", "Vitamin C prevents scurvy, and vitamin D helps build bones.", "Calcium is for bones and teeth, and iron is for making haemoglobin.", "Fibre keeps food moving through the gut, and water is needed by every cell."] },
    { type: "flow", title: "Through the gut", nodes: ["Mouth: amylase starts on starch", "Stomach: protease, acid", "Small intestine: digestion finishes, absorption", "Large intestine: water absorbed"],
      say: ["In the mouth, food is chewed and amylase in saliva starts digesting starch.", "In the stomach, protease enzymes start on proteins. Hydrochloric acid kills bacteria and gives the right pH.", "In the small intestine, enzymes from the pancreas finish digestion, and the small molecules are absorbed.", "In the large intestine, water is absorbed. Food is moved along by waves of muscle contraction called peristalsis."] },
    { type: "compare", title: "Digestive enzymes", h: ["Breaks down", "Into"],
      rows: [["Amylase", "Starch", "Maltose (then glucose)"], ["Protease (e.g. pepsin)", "Proteins", "Amino acids"], ["Lipase", "Lipids", "Fatty acids + glycerol"]],
      say: ["Amylase breaks starch into maltose, which maltase turns into glucose.", "Proteases, like pepsin, break proteins into amino acids.", "Lipase breaks lipids into fatty acids and glycerol."] },
    { type: "points", title: "Bile", items: ["Made in the <b>liver</b>, stored in the <b>gall bladder</b>", "<b>Neutralises</b> stomach acid (it's alkaline)", "<b>Emulsifies</b> fats into tiny droplets → more surface area for lipase"],
      say: ["Bile is made in the liver and stored in the gall bladder. It isn't an enzyme.", "It's alkaline, so it neutralises stomach acid, giving the right pH for enzymes in the small intestine.", "And it emulsifies fats into small droplets, increasing the surface area for lipase to work on."] },
    { type: "points", title: "Villi: built for absorption", items: ["Huge <b>surface area</b> (plus microvilli)", "Walls <b>one cell thick</b>", "Rich <b>capillary</b> network keeps the gradient steep", "<b>Lacteal</b> absorbs fatty acids and glycerol"],
      say: ["The small intestine is lined with millions of villi, giving a huge surface area.", "Their walls are only one cell thick, so the diffusion distance is short.", "A rich network of capillaries carries absorbed food away, keeping the concentration gradient steep.", "And a lacteal in each villus absorbs fatty acids and glycerol."] },
    { type: "quiz", q: "What does bile do to fats?", o: ["Digests them", "Emulsifies them", "Absorbs them", "Makes them into glucose"], a: 1,
      why: "It breaks them into droplets; lipase does the digesting.", say: ["What does bile do to fats?"] }
  ]
});

S2Data.video("2f", {
  scenes: [
    { type: "title", title: "Respiration", sub: "Aerobic and anaerobic respiration, and the experiments.", mark: "ATP",
      say: ["Respiration releases energy from glucose in every living cell. It's not the same as breathing."] },
    { type: "equation", title: "Aerobic respiration", rows: [["glucose", "+", "oxygen", "→", "carbon dioxide", "+", "water"], [{ t: "C₆H₁₂O₆", s: 1 }, { t: "+", s: 1 }, { t: "6O₂", s: 1 }, { t: "→", s: 1 }, { t: "6CO₂", s: 1 }, { t: "+", s: 1 }, { t: "6H₂O", s: 1 }]],
      note: "Happens in mitochondria · releases lots of energy", noteStep: 2,
      say: ["Aerobic respiration uses oxygen. Glucose plus oxygen gives carbon dioxide and water.", "The balanced equation: C six H twelve O six plus six O two gives six C O two plus six H two O.", "It takes place in the mitochondria and releases lots of energy."] },
    { type: "compare", title: "Anaerobic respiration", h: ["Products", "Used for"],
      rows: [["Muscles", "Lactic acid", "Short bursts of intense exercise"], ["Yeast and plants", "Ethanol + carbon dioxide", "Bread and brewing"]],
      say: ["Without oxygen, cells respire anaerobically. In muscles, glucose turns into lactic acid. It's useful for short bursts of intense exercise, but releases much less energy. Afterwards, you repay an oxygen debt to break down the lactic acid.", "In yeast and plants, glucose becomes ethanol and carbon dioxide. That's used in bread-making and brewing."] },
    { type: "points", title: "What the energy is used for", items: ["Muscle contraction", "Building large molecules, like proteins", "Active transport", "Keeping warm"],
      say: ["Energy from respiration is used for muscle contraction,", "building large molecules like proteins,", "active transport,", "and in mammals and birds, keeping a constant body temperature."] },
    { type: "flow", title: "Investigating respiration", nodes: ["Germinating seeds on gauze", "Hydrogencarbonate indicator below", "Indicator turns <b>yellow</b>: CO₂ produced", "Control: boiled seeds or glass beads"],
      say: ["To show living things produce carbon dioxide, put germinating seeds on gauze in a sealed tube.", "Underneath is hydrogencarbonate indicator, which starts red.", "As the seeds respire, carbon dioxide builds up and the indicator turns yellow.", "A control tube with boiled seeds or glass beads stays red."] },
    { type: "quiz", q: "What is produced by anaerobic respiration in human muscles?", o: ["Ethanol", "Lactic acid", "Carbon dioxide", "Oxygen"], a: 1,
      why: "Ethanol and CO₂ are from yeast and plants.", say: ["What's produced by anaerobic respiration in human muscles?"] }
  ]
});
