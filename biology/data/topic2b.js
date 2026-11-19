/* Topic 2 — Structure and functions in living organisms, part 2 (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "2g", group: 2, title: "Gas exchange",
  summary: "Gas exchange in leaves, the human breathing system, alveoli, ventilation and the effects of smoking.",
  fact: "You breathe roughly 20 000 times a day.",
  notes: `
<h3>Gas exchange in flowering plants</h3>
<ul>
<li>Gases diffuse in and out of leaves through <b>stomata</b>, then through air spaces in the spongy mesophyll.</li>
<li>In <b>bright light</b>, photosynthesis is faster than respiration, so there is net uptake of CO<sub>2</sub> and release of O<sub>2</sub>.</li>
<li>In the <b>dark</b>, only respiration happens, so there is net uptake of O<sub>2</sub> and release of CO<sub>2</sub>.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: effect of light on gas exchange</span>Use <b>hydrogencarbonate indicator</b> with leaves in tubes in the light, in dim light and in the dark. More CO<sub>2</sub> turns it <b>yellow</b>. Less CO<sub>2</sub> turns it <b>purple</b>. Normal air level is orange-red.</div>
<h3>The human breathing system</h3>
<p>Air passes through the <b>trachea → bronchi → bronchioles → alveoli</b>. The lungs sit in the thorax, protected by the <b>ribs</b>, with the <b>intercostal muscles</b> between them and the <b>diaphragm</b> below. The pleural membranes reduce friction.</p>
<h3>Breathing (ventilation)</h3>
<table>
<tr><th></th><th>Inhaling</th><th>Exhaling</th></tr>
<tr><td>External intercostal muscles</td><td>Contract: ribs move up and out</td><td>Relax: ribs move down and in</td></tr>
<tr><td>Diaphragm</td><td>Contracts and flattens</td><td>Relaxes and domes upwards</td></tr>
<tr><td>Volume of thorax</td><td>Increases</td><td>Decreases</td></tr>
<tr><td>Pressure inside</td><td>Decreases, so air rushes in</td><td>Increases, so air is pushed out</td></tr>
</table>
<h3>Alveoli: adapted for gas exchange</h3>
<ul>
<li>A huge total surface area from millions of alveoli.</li>
<li>Walls only <b>one cell thick</b>, giving a short diffusion distance.</li>
<li>A dense <b>capillary network</b> maintains a steep concentration gradient.</li>
<li>Moist lining, so gases dissolve, and good ventilation.</li>
</ul>
<h3>Smoking</h3>
<ul>
<li><b>Tar</b> causes cancer (it is a carcinogen) and damages cilia, so mucus builds up, causing bronchitis and coughing.</li>
<li><b>Carbon monoxide</b> binds to haemoglobin, reducing oxygen transport.</li>
<li><b>Nicotine</b> is addictive and narrows blood vessels.</li>
<li>Long-term effects include <b>emphysema</b> (damaged alveoli, less surface area), <b>lung cancer</b> and <b>coronary heart disease</b>.</li>
</ul>
<div class="box box-prac"><span class="box-title">🔬 Practical: exercise and breathing</span>Count breaths per minute at rest, then straight after exercise and every minute during recovery. Breathing rate and depth increase to supply more oxygen and remove CO<sub>2</sub>.</div>
`,
  flashcards: [
    ["Net gas exchange of a leaf in bright light", "Takes in CO<sub>2</sub>, releases O<sub>2</sub>"],
    ["Hydrogencarbonate indicator with high CO<sub>2</sub>", "Yellow"],
    ["Hydrogencarbonate indicator with low CO<sub>2</sub>", "Purple"],
    ["Path of air into the lungs", "Trachea → bronchi → bronchioles → alveoli"],
    ["What happens to the diaphragm when you inhale?", "It contracts and flattens"],
    ["Why does air enter the lungs when you inhale?", "Thorax volume increases, so pressure falls below atmospheric"],
    ["Adaptations of alveoli", "Large surface area, thin walls, good blood supply, moist"],
    ["Effect of carbon monoxide in smoke", "Binds to haemoglobin, reducing oxygen carried"],
    ["What does tar in smoke do?", "Causes cancer and damages cilia"],
    ["Emphysema", "Damaged alveoli, reducing the surface area for gas exchange"]
  ],
  quiz: [
    { q: "What happens to the diaphragm during inhalation?", o: ["It contracts and flattens", "It relaxes and domes up", "It stays still", "It moves the ribs down"], a: 0, e: "" },
    { q: "Leaves in the dark are put in hydrogencarbonate indicator. It turns…", o: ["Yellow", "Purple", "Blue", "Colourless"], a: 0, e: "Respiration adds CO<sub>2</sub>." },
    { q: "Why are alveolar walls one cell thick?", o: ["Short diffusion distance", "Strength", "To make mucus", "To store oxygen"], a: 0, e: "" },
    { q: "Which part of tobacco smoke reduces the oxygen-carrying capacity of blood?", o: ["Carbon monoxide", "Tar", "Nicotine", "Water vapour"], a: 0, e: "" },
    { q: "Which is the correct order?", o: ["Trachea, bronchus, bronchiole, alveolus", "Bronchus, trachea, alveolus, bronchiole", "Alveolus, bronchiole, trachea, bronchus", "Trachea, alveolus, bronchus, bronchiole"], a: 0, e: "" },
    { q: "What happens to the pressure inside the thorax when you breathe in?", o: ["It decreases", "It increases", "It stays the same", "It becomes zero"], a: 0, e: "" },
    { q: "Why does a smoker cough more?", o: ["Tar damages cilia so mucus builds up", "Nicotine relaxes airways", "CO dissolves mucus", "Smoke cools the lungs"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2h", group: 2, title: "Transport in plants",
  summary: "Xylem and phloem, transpiration, and the factors that affect it.",
  fact: "A large oak tree can lose over 400 litres of water through its leaves in a single summer day.",
  notes: `
<h3>Why plants need transport</h3>
<p>Plants are too big for diffusion alone. Substances must move between roots and leaves.</p>
<table>
<tr><th>Tissue</th><th>Carries</th><th>Direction</th><th>Structure</th></tr>
<tr><td><b>Xylem</b></td><td>Water and mineral ions</td><td>Up, from roots to leaves</td><td>Dead, hollow cells with lignin-strengthened walls</td></tr>
<tr><td><b>Phloem</b></td><td>Sucrose and amino acids (<b>translocation</b>)</td><td>Up and down, to where they are needed</td><td>Living cells with sieve plates</td></tr>
</table>
<h3>Water uptake</h3>
<p>Water enters <b>root hair cells</b> by <b>osmosis</b>. The hairs give a large surface area. Mineral ions enter by active transport.</p>
<h3>Transpiration</h3>
<p><b>Transpiration</b> is the loss of water vapour from the leaves, mainly by <b>evaporation</b> from mesophyll cells and <b>diffusion</b> out through the stomata. This pulls water up the xylem in a continuous column, the <b>transpiration stream</b>.</p>
<table>
<tr><th>Factor</th><th>Effect on the rate</th><th>Why</th></tr>
<tr><td>Higher temperature</td><td>Increases</td><td>Faster evaporation and diffusion</td></tr>
<tr><td>Higher humidity</td><td>Decreases</td><td>Smaller concentration gradient of water vapour</td></tr>
<tr><td>Faster wind speed</td><td>Increases</td><td>Water vapour is blown away, keeping the gradient steep</td></tr>
<tr><td>Higher light intensity</td><td>Increases</td><td>More stomata open</td></tr>
</table>
<div class="box box-prac"><span class="box-title">🔬 Practical: using a potometer</span>Cut a shoot underwater (so no air bubbles enter) and fit it into a potometer. Measure how far an air bubble moves along the capillary tube in a set time. Change one factor, such as a fan for wind, a lamp, or a plastic bag for humidity. A potometer actually measures water <b>uptake</b>, which is roughly equal to the water lost.</div>
`,
  flashcards: [
    ["What does xylem carry?", "Water and mineral ions, upwards"],
    ["What does phloem carry?", "Sucrose and amino acids, up and down"],
    ["Translocation", "Movement of sucrose and amino acids in the phloem"],
    ["Transpiration", "Loss of water vapour from leaves by evaporation and diffusion through stomata"],
    ["How does water enter root hairs?", "Osmosis"],
    ["Effect of humidity on transpiration", "Higher humidity decreases the rate"],
    ["Effect of wind on transpiration", "More wind increases the rate"],
    ["What does a potometer measure?", "Water uptake (approximately the transpiration rate)"],
    ["Why cut the shoot underwater?", "To stop air bubbles blocking the xylem"]
  ],
  quiz: [
    { q: "Which tissue carries sugars?", o: ["Phloem", "Xylem", "Epidermis", "Cuticle"], a: 0, e: "" },
    { q: "Which condition decreases transpiration?", o: ["High humidity", "High temperature", "Windy weather", "Bright light"], a: 0, e: "" },
    { q: "How does water move into root hair cells?", o: ["Osmosis", "Active transport", "Translocation", "Transpiration"], a: 0, e: "" },
    { q: "Why does wind increase transpiration?", o: ["It removes water vapour, keeping the gradient steep", "It closes stomata", "It cools the leaf", "It adds water"], a: 0, e: "" },
    { q: "Xylem cells are…", o: ["Dead and hollow with lignin", "Living with sieve plates", "Full of chloroplasts", "Covered in root hairs"], a: 0, e: "" },
    { q: "A bubble moves 30 mm in 10 minutes in a potometer. What is the rate?", o: ["3 mm/min", "300 mm/min", "0.33 mm/min", "40 mm/min"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2i", group: 2, title: "Transport in humans",
  summary: "Blood, the immune response, the heart, blood vessels and coronary heart disease.",
  fact: "Laid end to end, the blood vessels in one adult would stretch about 100 000 km, more than twice round the Earth.",
  notes: `
<h3>Blood</h3>
<table>
<tr><th>Component</th><th>Function</th><th>Adaptations</th></tr>
<tr><td><b>Plasma</b></td><td>Carries CO<sub>2</sub>, digested food, urea, hormones and heat</td><td>Mostly water</td></tr>
<tr><td><b>Red blood cells</b></td><td>Carry oxygen as oxyhaemoglobin</td><td>Biconcave (large surface area), no nucleus, contain haemoglobin</td></tr>
<tr><td><b>White blood cells</b></td><td>Defend against pathogens</td><td><b>Phagocytes</b> engulf pathogens (phagocytosis). <b>Lymphocytes</b> make antibodies.</td></tr>
<tr><td><b>Platelets</b></td><td>Help blood clot, sealing wounds and stopping pathogens getting in</td><td>Cell fragments</td></tr>
</table>
<h3>Immunity and vaccination</h3>
<ul>
<li>Lymphocytes make <b>antibodies</b> that match the <b>antigens</b> on a pathogen, and form <b>memory cells</b>.</li>
<li>Second infection: memory cells make antibodies <b>faster and in larger amounts</b>, so you don't get ill.</li>
<li><b>Vaccination</b> introduces dead or weakened pathogens (antigens), so memory cells form without you getting the disease.</li>
</ul>
<h3>The heart</h3>
<ul>
<li>Blood flow: vena cava → <b>right atrium → right ventricle</b> → pulmonary artery → lungs → pulmonary vein → <b>left atrium → left ventricle</b> → aorta → body.</li>
<li>Humans have a <b>double circulation</b>: blood passes through the heart twice per circuit, keeping pressure high for the body.</li>
<li>The <b>left ventricle wall is thicker</b> because it pumps blood all around the body.</li>
<li><b>Valves</b> prevent backflow. The <b>septum</b> keeps oxygenated and deoxygenated blood apart.</li>
<li>Heart rate increases during exercise to deliver more oxygen and glucose and remove CO<sub>2</sub>. <b>Adrenaline</b> also increases heart rate.</li>
</ul>
<h3>Blood vessels</h3>
<table>
<tr><th>Vessel</th><th>Carries blood</th><th>Features</th></tr>
<tr><td>Artery</td><td>Away from the heart, at high pressure</td><td>Thick, muscular, elastic walls; narrow lumen</td></tr>
<tr><td>Vein</td><td>Back to the heart, at low pressure</td><td>Thin walls, wide lumen, valves</td></tr>
<tr><td>Capillary</td><td>Through tissues</td><td>Wall one cell thick, for exchange of substances</td></tr>
</table>
<h3>Coronary heart disease</h3>
<p>Fatty deposits build up in the <b>coronary arteries</b>, which supply heart muscle, so less oxygen reaches it, which can cause a heart attack. Risk factors include a high-fat diet, smoking, lack of exercise, stress and genetics.</p>
`,
  flashcards: [
    ["Function of red blood cells", "Carry oxygen (as oxyhaemoglobin)"],
    ["Phagocyte", "White blood cell that engulfs pathogens"],
    ["Lymphocyte", "White blood cell that makes antibodies"],
    ["Function of platelets", "Help blood clot"],
    ["How does vaccination work?", "Dead/weakened pathogens trigger antibodies and memory cells, giving a fast response later"],
    ["Why is the left ventricle wall thicker?", "It pumps blood around the whole body at high pressure"],
    ["Function of heart valves", "Prevent backflow of blood"],
    ["Artery features", "Thick muscular elastic walls, narrow lumen, high pressure"],
    ["Vein features", "Thin walls, wide lumen, valves, low pressure"],
    ["Coronary heart disease", "Fatty deposits narrow the coronary arteries, cutting oxygen to heart muscle"],
    ["Double circulation", "Blood passes through the heart twice for each circuit of the body"]
  ],
  quiz: [
    { q: "Which blood vessel has valves?", o: ["Vein", "Artery", "Capillary", "Aorta"], a: 0, e: "" },
    { q: "Which chamber pumps blood to the body?", o: ["Left ventricle", "Right ventricle", "Left atrium", "Right atrium"], a: 0, e: "" },
    { q: "Which cells make antibodies?", o: ["Lymphocytes", "Phagocytes", "Red blood cells", "Platelets"], a: 0, e: "" },
    { q: "Where does blood go after leaving the right ventricle?", o: ["Lungs (pulmonary artery)", "Body (aorta)", "Left atrium directly", "Liver"], a: 0, e: "" },
    { q: "Why does a second infection by the same pathogen not make you ill?", o: ["Memory cells make antibodies quickly", "The pathogen is weaker", "Platelets stop it", "Red blood cells kill it"], a: 0, e: "" },
    { q: "Why are capillary walls one cell thick?", o: ["For exchange of substances", "To withstand high pressure", "To contain valves", "To carry more blood"], a: 0, e: "" },
    { q: "What causes coronary heart disease?", o: ["Fatty deposits in the coronary arteries", "Too many red blood cells", "Damaged valves only", "Low blood pressure"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2j", group: 2, title: "Excretion", paper2: true,
  summary: "Excretory organs, kidney structure, the nephron, ADH and water balance.",
  fact: "Your kidneys filter about 180 litres of blood plasma a day, but you only produce around 1.5 litres of urine.",
  notes: `
<div class="box box-c"><span class="box-title">This subtopic is mainly Paper 2</span></div>
<h3>Excretion</h3>
<p>Removing the waste products of metabolism:</p>
<ul>
<li><b>Lungs</b>: carbon dioxide.</li>
<li><b>Kidneys</b>: urea, excess water and excess ions (as urine).</li>
<li><b>Skin</b>: sweat (water, salts and a little urea).</li>
<li>In plants, <b>leaves</b> excrete O<sub>2</sub> (from photosynthesis) and CO<sub>2</sub> (from respiration).</li>
</ul>
<h3>The urinary system</h3>
<p>Kidneys → <b>ureters</b> → <b>bladder</b> → <b>urethra</b>. The kidneys have two jobs: <b>excretion</b> (removing urea) and <b>osmoregulation</b> (controlling water content).</p>
<h3>The nephron</h3>
<ol>
<li><b>Ultrafiltration</b>: in the <b>glomerulus</b>, high pressure forces small molecules (water, glucose, urea, ions) out of the blood into the <b>Bowman's capsule</b>. Blood cells and proteins are too big, so they stay in the blood.</li>
<li><b>Selective reabsorption</b>: in the <b>proximal convoluted tubule</b>, <b>all the glucose</b> is reabsorbed into the blood (by active transport), along with some ions and water.</li>
<li><b>Water reabsorption</b>: in the <b>collecting duct</b>, the amount of water reabsorbed depends on <b>ADH</b>.</li>
<li>Whatever is left (urea, excess water and ions) is urine.</li>
</ol>
<h3>ADH and water balance</h3>
<ul>
<li>If the blood is <b>too concentrated</b> (e.g. after sweating), the <b>pituitary gland</b> releases <b>more ADH</b>. The collecting ducts become more permeable, more water is reabsorbed, and a small volume of concentrated urine is produced.</li>
<li>If the blood is <b>too dilute</b> (after drinking a lot), less ADH is released, so less water is reabsorbed, giving a large volume of dilute urine.</li>
</ul>
<p>This is an example of <b>negative feedback</b>.</p>
`,
  flashcards: [
    ["What do the kidneys excrete?", "Urea, excess water and excess ions"],
    ["Ultrafiltration", "High pressure forces small molecules out of the glomerulus into the Bowman's capsule"],
    ["What is NOT filtered at the glomerulus?", "Blood cells and proteins (too big)"],
    ["Where is glucose reabsorbed?", "Proximal convoluted tubule (all of it)"],
    ["Which gland releases ADH?", "Pituitary gland"],
    ["Effect of ADH", "Makes collecting ducts more permeable, so more water is reabsorbed"],
    ["Urine after heavy sweating", "Small volume, concentrated (more ADH)"],
    ["Path of urine", "Kidney → ureter → bladder → urethra"],
    ["Osmoregulation", "Controlling the water content of the body"]
  ],
  quiz: [
    { q: "Where does ultrafiltration happen?", o: ["Glomerulus and Bowman's capsule", "Collecting duct", "Bladder", "Ureter"], a: 0, e: "" },
    { q: "Which substance is normally completely reabsorbed?", o: ["Glucose", "Urea", "Water", "Salt"], a: 0, e: "" },
    { q: "After drinking a lot of water, ADH levels…", o: ["Fall, so more dilute urine is made", "Rise", "Stay the same", "Stop urine production"], a: 0, e: "" },
    { q: "Which tube carries urine from the kidney to the bladder?", o: ["Ureter", "Urethra", "Renal artery", "Collecting duct"], a: 0, e: "" },
    { q: "Why are proteins not found in normal urine?", o: ["They are too large to be filtered", "They are digested", "They are reabsorbed", "Urea destroys them"], a: 0, e: "" },
    { q: "Which organ releases ADH?", o: ["Pituitary gland", "Kidney", "Pancreas", "Liver"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2k", group: 2, title: "The nervous system and the eye",
  summary: "Stimulus and response, neurones, reflex arcs, synapses and the eye.",
  fact: "The fastest nerve impulses travel at about 120 m/s, more than 400 km/h.",
  notes: `
<h3>Coordination</h3>
<p><b>Stimulus → receptor → coordinator (CNS) → effector → response</b>. Organisms respond to changes in their environment. Effectors are muscles (which contract) and glands (which secrete).</p>
<h3>The nervous system</h3>
<ul>
<li><b>Central nervous system (CNS)</b>: the brain and spinal cord.</li>
<li>Information travels as <b>electrical impulses</b> along <b>neurones</b>: sensory neurones (receptor → CNS), relay neurones (in the CNS) and motor neurones (CNS → effector).</li>
<li>The nervous system is <b>fast and short-lived</b>, compared with hormones, which are slower and longer-lasting.</li>
</ul>
<h3>Synapses</h3>
<p>A <b>synapse</b> is the gap between neurones. The impulse triggers release of a <b>neurotransmitter</b>, which diffuses across the gap and binds to receptors on the next neurone, starting a new impulse. Synapses make sure impulses travel in one direction only.</p>
<h3>Reflex actions</h3>
<p>Reflexes are <b>fast, automatic</b> responses that protect the body, e.g. pulling your hand away from a hot object. The <b>reflex arc</b> is: receptor → sensory neurone → relay neurone (in the spinal cord) → motor neurone → effector. It doesn't involve the conscious part of the brain.</p>
<h3>The eye</h3>
<table>
<tr><th>Part</th><th>Function</th></tr>
<tr><td>Cornea</td><td>Refracts (bends) light into the eye</td></tr>
<tr><td>Iris</td><td>Controls the size of the pupil</td></tr>
<tr><td>Lens</td><td>Focuses light onto the retina</td></tr>
<tr><td>Retina</td><td>Contains light receptors (rods for dim light, cones for colour)</td></tr>
<tr><td>Optic nerve</td><td>Carries impulses to the brain</td></tr>
</table>
<h4>Pupil reflex</h4>
<p>In <b>bright light</b>, the circular muscles of the iris contract and the radial muscles relax, so the pupil gets <b>smaller</b>, protecting the retina. In dim light the opposite happens, and the pupil widens.</p>
<h4>Accommodation (focusing)</h4>
<ul>
<li><b>Near object</b>: ciliary muscles contract, suspensory ligaments slacken, and the lens becomes <b>fatter</b>, refracting light more.</li>
<li><b>Distant object</b>: ciliary muscles relax, suspensory ligaments tighten, and the lens becomes <b>thinner</b>.</li>
</ul>
`,
  flashcards: [
    ["Order of a response", "Stimulus → receptor → coordinator → effector → response"],
    ["What makes up the CNS?", "Brain and spinal cord"],
    ["Effectors", "Muscles and glands"],
    ["Synapse", "Gap between neurones crossed by neurotransmitter chemicals"],
    ["Reflex arc", "Receptor → sensory → relay → motor neurone → effector"],
    ["Why are reflexes fast?", "They don't involve the conscious brain"],
    ["Function of the iris", "Controls the size of the pupil"],
    ["Pupil reflex in bright light", "Circular muscles contract, pupil constricts"],
    ["Lens shape for a near object", "Fatter (ciliary muscles contract, ligaments slacken)"],
    ["Nervous vs hormonal response", "Nervous: fast, short-lived. Hormonal: slower, longer-lasting"]
  ],
  quiz: [
    { q: "Which neurone carries impulses from receptors to the CNS?", o: ["Sensory", "Motor", "Relay", "Optic"], a: 0, e: "" },
    { q: "What crosses a synapse?", o: ["A neurotransmitter chemical", "An electrical impulse", "Blood", "A hormone from the pancreas"], a: 0, e: "" },
    { q: "In bright light, the pupil…", o: ["Gets smaller", "Gets larger", "Stays the same", "Closes completely"], a: 0, e: "" },
    { q: "To focus on a near object, the lens becomes…", o: ["Fatter", "Thinner", "Flat", "Opaque"], a: 0, e: "" },
    { q: "Which is a reflex?", o: ["Blinking when something flies at your eye", "Writing your name", "Choosing lunch", "Reading"], a: 0, e: "" },
    { q: "Where in the eye are the light receptors?", o: ["Retina", "Cornea", "Iris", "Lens"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "2l", group: 2, title: "Hormones, homeostasis and plant responses",
  summary: "Endocrine glands, blood glucose control, temperature control and plant tropisms.",
  fact: "Shivering can increase your body's heat production several times over in just a few minutes.",
  notes: `
<h3>Hormones</h3>
<p>Hormones are chemical messengers made by <b>endocrine glands</b> and carried in the <b>blood</b> to target organs.</p>
<table>
<tr><th>Hormone</th><th>Gland</th><th>Effect</th></tr>
<tr><td>Adrenaline</td><td>Adrenal glands</td><td>Prepares the body for "fight or flight": faster heart rate, more glucose in the blood</td></tr>
<tr><td>Insulin</td><td>Pancreas</td><td>Lowers blood glucose</td></tr>
<tr><td>Testosterone</td><td>Testes</td><td>Male secondary sexual characteristics</td></tr>
<tr><td>Oestrogen and progesterone</td><td>Ovaries</td><td>Female characteristics; menstrual cycle</td></tr>
<tr><td>ADH</td><td>Pituitary</td><td>Water reabsorption in the kidneys</td></tr>
<tr><td>FSH and LH</td><td>Pituitary</td><td>Control the menstrual cycle</td></tr>
</table>
<h3>Homeostasis</h3>
<p>Keeping internal conditions <b>constant</b>, mostly by <b>negative feedback</b>: a change triggers a response that reverses it.</p>
<h4>Blood glucose</h4>
<ul>
<li>Too high (after a meal): the pancreas releases <b>insulin</b>. Liver and muscle cells take up glucose and store it as <b>glycogen</b>.</li>
<li>Too low: the pancreas releases <b>glucagon</b>, and glycogen is converted back to glucose.</li>
<li><b>Type 1 diabetes</b>: the pancreas makes no insulin. It is treated with insulin injections and by controlling diet.</li>
</ul>
<h4>Body temperature (about 37 °C)</h4>
<table>
<tr><th>Too hot</th><th>Too cold</th></tr>
<tr><td>Sweating: evaporation cools the skin</td><td>No sweating</td></tr>
<tr><td><b>Vasodilation</b>: arterioles near the skin widen, so more heat is lost by radiation</td><td><b>Vasoconstriction</b>: arterioles narrow, so less heat is lost</td></tr>
<tr><td>Hairs lie flat</td><td>Hairs stand up, trapping insulating air</td></tr>
<tr><td></td><td>Shivering: muscles contract, releasing heat from respiration</td></tr>
</table>
<h3>Plant responses (tropisms)</h3>
<ul>
<li><b>Phototropism</b>: growth in response to light. Shoots are positively phototropic: they grow towards light.</li>
<li><b>Geotropism (gravitropism)</b>: roots grow down (positive), and shoots grow up (negative).</li>
<li>Controlled by the hormone <b>auxin</b>. In shoots, auxin collects on the <b>shaded side</b> and makes those cells <b>elongate</b> more, so the shoot bends towards the light.</li>
</ul>
`,
  flashcards: [
    ["Hormone", "Chemical messenger made by an endocrine gland, carried in the blood"],
    ["What does insulin do?", "Lowers blood glucose: glucose is stored as glycogen"],
    ["What does glucagon do?", "Raises blood glucose: glycogen is converted back to glucose"],
    ["Type 1 diabetes", "The pancreas doesn't make insulin; treated with insulin injections"],
    ["Effects of adrenaline", "Faster heart rate, more glucose to muscles: fight or flight"],
    ["Negative feedback", "A change triggers a response that reverses the change"],
    ["Vasodilation", "Skin arterioles widen, so more heat is lost"],
    ["Why does shivering warm you?", "Muscle contraction releases heat from respiration"],
    ["Phototropism", "Growth in response to light"],
    ["What does auxin do in a shoot?", "Collects on the shaded side and makes cells elongate, so the shoot bends towards light"]
  ],
  quiz: [
    { q: "Which hormone lowers blood glucose?", o: ["Insulin", "Glucagon", "Adrenaline", "Testosterone"], a: 0, e: "" },
    { q: "Which gland produces insulin?", o: ["Pancreas", "Pituitary", "Adrenal", "Thyroid"], a: 0, e: "" },
    { q: "When you are too hot, skin arterioles…", o: ["Dilate (vasodilation)", "Constrict", "Close completely", "Fill with glycogen"], a: 0, e: "" },
    { q: "Roots growing down towards gravity show…", o: ["Positive geotropism", "Negative phototropism", "Positive phototropism", "Negative geotropism"], a: 0, e: "" },
    { q: "Where does auxin build up when a shoot is lit from one side?", o: ["On the shaded side", "On the lit side", "In the roots", "Evenly"], a: 0, e: "" },
    { q: "How is type 1 diabetes treated?", o: ["Insulin injections", "Glucagon tablets", "Removing the pancreas", "Eating more sugar"], a: 0, e: "" },
    { q: "Hormones travel around the body in the…", o: ["Blood", "Nerves", "Lymph only", "Air"], a: 0, e: "" }
  ]
});
