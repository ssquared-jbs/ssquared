/* A-level Biology A² — Topics 1–2: Lifestyle, health and risk; Genes and health */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "The heart and circulation",
  summary: "Why we need a circulation, water as a transport medium, blood vessels and the cardiac cycle.",
  notes: `
<h3>Why a circulatory system?</h3>
<p>Small organisms rely on diffusion: they have a large surface area to volume ratio and short diffusion distances. Large, active organisms need a <b>mass transport</b> system to move substances quickly over long distances.</p>
<ul>
<li>Mammals have a <b>double circulation</b>: blood passes through the heart twice per circuit (pulmonary and systemic). This keeps blood pressure high in the systemic circulation, delivering oxygen quickly.</li>
<li>Water is a good transport medium: it's a <b>polar</b> solvent (δ− O, δ+ H), so ions and polar molecules dissolve in it, and it's liquid at body temperature.</li>
</ul>
<h3>Blood vessels</h3>
<table>
<tr><th>Vessel</th><th>Structure</th><th>Why</th></tr>
<tr><td>Artery</td><td>Thick wall with elastic fibres and smooth muscle; narrow lumen</td><td>Withstands and smooths high pressure; elastic recoil</td></tr>
<tr><td>Vein</td><td>Thin wall, wide lumen, valves</td><td>Low pressure; valves prevent backflow</td></tr>
<tr><td>Capillary</td><td>Wall one cell thick (endothelium)</td><td>Short diffusion distance for exchange</td></tr>
</table>
<h3>The cardiac cycle</h3>
<ol>
<li><b>Atrial systole</b>: atria contract, pushing blood through the atrioventricular (AV) valves into the ventricles.</li>
<li><b>Ventricular systole</b>: ventricles contract from the base upwards. Pressure closes the AV valves and opens the semilunar valves; blood is pushed into the aorta and pulmonary artery.</li>
<li><b>Cardiac diastole</b>: the heart relaxes. Higher pressure in the arteries closes the semilunar valves. Blood flows into the atria from the veins.</li>
</ol>
<div class="box box-key"><span class="box-title">Valves</span>Valves open and close because of <b>pressure differences</b>. They open when pressure behind them is higher than in front; they close when pressure in front is higher. They make blood flow one way.</div>
<h3>Tissue fluid</h3>
<p>At the arterial end of a capillary, hydrostatic pressure pushes fluid out into the tissues. At the venous end, lower hydrostatic pressure and the oncotic (water) potential of plasma proteins draw much of it back. The rest drains into the lymph.</p>
`,
  quiz: [
    { q: "Why do large organisms need a mass transport system?", o: ["Small surface area to volume ratio; diffusion too slow over long distances", "They have no cells", "They don't respire", "Diffusion is faster in large organisms"], a: 0, e: "" },
    { q: "Which vessel has valves along its length?", o: ["Vein", "Artery", "Capillary", "Aorta"], a: 0, e: "" },
    { q: "Why do arteries have elastic fibres?", o: ["To stretch and recoil, smoothing pressure surges", "To make them thinner", "To exchange gases", "To prevent backflow"], a: 0, e: "" },
    { q: "During ventricular systole, the AV valves…", o: ["Close", "Open", "Stay open", "Don't exist"], a: 0, e: "" },
    { q: "Semilunar valves close when…", o: ["Pressure in the arteries exceeds pressure in the ventricles", "The atria contract", "Ventricular pressure is highest", "Blood enters the atria"], a: 0, e: "" },
    { q: "Why is water a good solvent for transport?", o: ["It's polar, so ions and polar molecules dissolve", "It's non-polar", "It's a gas at body temperature", "It contains proteins"], a: 0, e: "" },
    { q: "Capillary walls are…", o: ["One cell thick", "Thick and muscular", "Lined with valves", "Elastic"], a: 0, e: "" },
    { q: "What forces tissue fluid out at the arterial end of a capillary?", o: ["Hydrostatic pressure", "Osmosis only", "Active transport", "Valves"], a: 0, e: "" },
    { q: "A double circulation means blood…", o: ["Passes through the heart twice per complete circuit", "Has two types of cell", "Flows in two directions in vessels", "Travels through two capillaries only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Why mass transport?", "Large organisms: small SA:V and long diffusion distances"],
    ["Double circulation", "Pulmonary and systemic; heart passed twice; maintains high pressure"],
    ["Water as transport medium", "Polar solvent; liquid; dissolves ions and polar molecules"],
    ["Artery structure", "Thick wall, elastic fibres, smooth muscle, narrow lumen"],
    ["Vein structure", "Thin wall, wide lumen, valves"],
    ["Capillary structure", "One cell thick: short diffusion distance"],
    ["Atrial systole", "Atria contract; blood pushed into ventricles through AV valves"],
    ["Ventricular systole", "Ventricles contract; AV valves close, semilunar valves open"],
    ["Cardiac diastole", "Heart relaxes; semilunar valves close; atria fill"],
    ["How valves work", "Open/close due to pressure differences"]
  ]
});

S2Data.add({
  id: "1b", group: 1, y1: true, title: "Cardiovascular disease and risk",
  summary: "Atherosclerosis, blood clotting, risk factors, and how risk is measured and perceived.",
  notes: `
<h3>Atherosclerosis</h3>
<ol>
<li>The <b>endothelium</b> lining an artery is damaged (e.g. by high blood pressure, toxins from smoking).</li>
<li>An inflammatory response: white blood cells move into the artery wall and accumulate cholesterol (from LDLs).</li>
<li>Deposits build up to form an <b>atheroma</b> (plaque); calcium salts and fibrous tissue harden it.</li>
<li>The artery narrows and loses elasticity, raising blood pressure, which causes more damage: a <b>positive feedback</b> cycle.</li>
</ol>
<p>Atheromas increase the risk of <b>coronary heart disease</b> (narrowed coronary arteries → angina, myocardial infarction), <b>stroke</b> and aneurysms.</p>
<h3>Blood clotting</h3>
<p>Damage to the vessel wall or atheroma exposes collagen. Platelets stick and release <b>thromboplastin</b>. The cascade:</p>
<div class="box box-key"><span class="box-title">Clotting cascade</span>Thromboplastin (with Ca<sup>2+</sup>) converts <b>prothrombin → thrombin</b>. Thrombin converts soluble <b>fibrinogen → insoluble fibrin</b>, which forms a mesh that traps red blood cells: a clot.</div>
<p>A clot in an artery (thrombosis) can block blood flow, starving tissue of oxygen.</p>
<h3>Risk factors for CVD</h3>
<ul>
<li>Can't change: genetics (family history), age, gender (men higher before 50).</li>
<li>Can change: high blood pressure, smoking, high blood cholesterol (high LDL), obesity, inactivity, high salt and saturated fat intake.</li>
</ul>
<h3>Risk</h3>
<ul>
<li><b>Risk</b> = the probability of an event occurring. Often expressed as relative risk compared with a baseline group.</li>
<li>People's <b>perception</b> of risk often differs from actual risk: they overestimate unfamiliar, dramatic or uncontrollable risks and underestimate familiar ones.</li>
<li>Correlation doesn't prove causation. Good studies use large, representative samples, control variables, and are repeated.</li>
</ul>
<h3>Treatments</h3>
<p>Antihypertensives (e.g. ACE inhibitors, diuretics, beta blockers), statins (lower LDL), anticoagulants (e.g. warfarin) and platelet inhibitors (e.g. aspirin). Each has benefits and side effects.</p>
`,
  quiz: [
    { q: "What starts atherosclerosis?", o: ["Damage to the endothelium", "Low blood pressure", "A clot in a vein", "Excess red blood cells"], a: 0, e: "" },
    { q: "In the clotting cascade, thrombin converts…", o: ["Fibrinogen into fibrin", "Prothrombin into thrombin", "Fibrin into fibrinogen", "Platelets into thromboplastin"], a: 0, e: "" },
    { q: "Which ion is needed for prothrombin to be converted to thrombin?", o: ["Ca²⁺", "Na⁺", "K⁺", "Cl⁻"], a: 0, e: "" },
    { q: "Which is a risk factor that CAN'T be changed?", o: ["Genetics", "Smoking", "Diet", "Exercise"], a: 0, e: "" },
    { q: "Why can atherosclerosis cause positive feedback?", o: ["Narrowed arteries raise blood pressure, causing more damage", "It lowers blood pressure", "It removes cholesterol", "It increases elasticity"], a: 0, e: "" },
    { q: "Risk is defined as…", o: ["The probability of an event occurring", "How dangerous something feels", "The number of deaths", "A treatment side effect"], a: 0, e: "" },
    { q: "Statins work by…", o: ["Reducing LDL cholesterol production", "Thinning the blood", "Lowering heart rate", "Dilating arteries"], a: 0, e: "" },
    { q: "A clot blocking a coronary artery can cause…", o: ["A myocardial infarction (heart attack)", "Asthma", "Diabetes", "Anaemia"], a: 0, e: "" },
    { q: "Why might people overestimate the risk of flying?", o: ["It's dramatic and feels outside their control", "It's the highest risk activity", "They fly often", "It's well understood"], a: 0, e: "" }
  ],
  flashcards: [
    ["Atheroma", "Plaque of cholesterol, white blood cells, fibres and calcium in artery wall"],
    ["Atherosclerosis steps", "Endothelium damage → inflammation → cholesterol build-up → plaque → narrowing"],
    ["Clotting cascade", "Thromboplastin + Ca²⁺: prothrombin → thrombin; thrombin: fibrinogen → fibrin"],
    ["Fibrin", "Insoluble protein mesh that traps red cells to form a clot"],
    ["Fixed CVD risk factors", "Genes, age, gender"],
    ["Modifiable CVD risk factors", "Blood pressure, smoking, LDL, obesity, inactivity, salt"],
    ["Risk", "Probability of an event occurring"],
    ["Perceived vs actual risk", "People overestimate dramatic/unfamiliar risks"],
    ["Statins", "Lower blood LDL cholesterol; side effects e.g. muscle pain"],
    ["Anticoagulants / platelet inhibitors", "Warfarin / aspirin: reduce clotting; risk of bleeding"]
  ]
});

S2Data.add({
  id: "1c", group: 1, y1: true, title: "Carbohydrates, lipids and diet",
  summary: "Monosaccharides to polysaccharides, triglycerides, cholesterol and lipoproteins, and energy balance.",
  notes: `
<h3>Carbohydrates</h3>
<ul>
<li><b>Monosaccharides</b>: glucose (α and β), fructose, galactose. Soluble, sweet.</li>
<li><b>Disaccharides</b>: two monosaccharides joined by a <b>glycosidic bond</b> in a <b>condensation</b> reaction (water released). Maltose = glucose + glucose; sucrose = glucose + fructose; lactose = glucose + galactose. Broken by <b>hydrolysis</b>.</li>
<li><b>Polysaccharides</b>:
  <ul>
  <li><b>Starch</b>: amylose (α-1,4 bonds, coils into a compact helix) and amylopectin (α-1,4 and α-1,6 branches: many ends for rapid hydrolysis). Plant energy store; insoluble so doesn't affect water potential.</li>
  <li><b>Glycogen</b>: highly branched (more α-1,6 than amylopectin), compact, rapidly hydrolysed. Animal store.</li>
  </ul></li>
</ul>
<h3>Lipids</h3>
<p><b>Triglycerides</b>: one glycerol + three fatty acids joined by <b>ester bonds</b> (condensation). <b>Saturated</b> fatty acids have no C=C double bonds; <b>unsaturated</b> have one or more, causing kinks so they are liquid (oils) at room temperature.</p>
<h3>Cholesterol and lipoproteins</h3>
<table>
<tr><th>LDL</th><th>HDL</th></tr>
<tr><td>More lipid, less protein</td><td>More protein, less lipid</td></tr>
<tr><td>Carries cholesterol <b>to</b> body cells; high levels deposit in artery walls</td><td>Carries cholesterol <b>from</b> tissues to the liver</td></tr>
<tr><td>Raised by saturated fats</td><td>Raised by unsaturated fats, exercise</td></tr>
</table>
<p>A high LDL:HDL ratio increases CVD risk.</p>
<h3>Energy balance</h3>
<ul>
<li>If energy intake > energy output, the excess is stored as fat, leading to weight gain.</li>
<li><b>BMI</b> = mass (kg) ÷ height<sup>2</sup> (m<sup>2</sup>). 18.5–24.9 is normal; 25–29.9 overweight; 30+ obese.</li>
<li><b>Waist-to-hip ratio</b>: a measure of fat distribution; abdominal fat carries higher CVD risk.</li>
</ul>
`,
  quiz: [
    { q: "Which bond joins monosaccharides?", o: ["Glycosidic", "Ester", "Peptide", "Hydrogen"], a: 0, e: "" },
    { q: "Sucrose is made of…", o: ["Glucose + fructose", "Glucose + glucose", "Glucose + galactose", "Fructose + galactose"], a: 0, e: "" },
    { q: "Why is glycogen a good energy store?", o: ["Highly branched, so rapidly hydrolysed; compact; insoluble", "It's soluble", "It's a protein", "It's unbranched"], a: 0, e: "" },
    { q: "Amylopectin differs from amylose because it has…", o: ["α-1,6 branches", "β-glucose", "Peptide bonds", "No α-1,4 bonds"], a: 0, e: "" },
    { q: "A triglyceride is made of…", o: ["Glycerol + 3 fatty acids", "3 glycerols + 1 fatty acid", "Glucose + fatty acid", "Amino acids"], a: 0, e: "" },
    { q: "Unsaturated fatty acids have…", o: ["At least one C=C double bond", "No double bonds", "More hydrogen", "Ester bonds only"], a: 0, e: "" },
    { q: "HDLs carry cholesterol…", o: ["From tissues to the liver", "From the liver to tissues", "Into artery walls", "To the gut"], a: 0, e: "" },
    { q: "BMI of a 72 kg person 1.80 m tall?", o: ["22.2", "40.0", "25.0", "18.5"], a: 0, e: "72 ÷ 3.24." },
    { q: "Condensation reactions…", o: ["Release water as a bond forms", "Use water to break bonds", "Produce glucose only", "Occur only in lipids"], a: 0, e: "" }
  ],
  flashcards: [
    ["Glycosidic bond", "Joins monosaccharides; formed by condensation"],
    ["Maltose / sucrose / lactose", "glu+glu / glu+fru / glu+gal"],
    ["Amylose", "α-1,4 glucose; coiled; compact"],
    ["Amylopectin", "α-1,4 and α-1,6 branches; rapid hydrolysis"],
    ["Glycogen", "Very branched animal store; compact; insoluble"],
    ["Triglyceride", "Glycerol + 3 fatty acids, ester bonds"],
    ["Saturated vs unsaturated", "No C=C vs at least one C=C (kinks, liquid)"],
    ["LDL", "Carries cholesterol to cells; high LDL raises CVD risk"],
    ["HDL", "Carries cholesterol to liver; protective"],
    ["BMI", "Mass (kg) ÷ height² (m²)"]
  ]
});

S2Data.add({
  id: "2a", group: 2, y1: true, title: "Membranes, transport and gas exchange",
  summary: "The fluid mosaic model, diffusion, osmosis, active transport, bulk transport and the lungs.",
  notes: `
<h3>The fluid mosaic model</h3>
<p>A <b>phospholipid bilayer</b>: hydrophilic phosphate heads face outwards to water; hydrophobic fatty acid tails face inwards. Proteins are embedded (channel and carrier proteins), some spanning the membrane. Glycoproteins and glycolipids act as receptors and in cell recognition. <b>Cholesterol</b> regulates fluidity. "Fluid" because phospholipids move; "mosaic" because proteins are scattered through it.</p>
<h3>Transport across membranes</h3>
<table>
<tr><th>Process</th><th>Energy?</th><th>Details</th></tr>
<tr><td>Diffusion</td><td>Passive</td><td>Small, non-polar molecules (O<sub>2</sub>, CO<sub>2</sub>) through the bilayer, down a concentration gradient</td></tr>
<tr><td>Facilitated diffusion</td><td>Passive</td><td>Ions/polar molecules through channel or carrier proteins, down the gradient</td></tr>
<tr><td>Osmosis</td><td>Passive</td><td>Net movement of water from higher to lower water potential through a partially permeable membrane</td></tr>
<tr><td>Active transport</td><td>ATP</td><td>Carrier proteins move substances <b>against</b> a concentration gradient</td></tr>
<tr><td>Endo/exocytosis</td><td>ATP</td><td>Bulk transport in vesicles</td></tr>
</table>
<h3>Gas exchange in the lungs</h3>
<p>Alveoli are adapted for rapid diffusion (<b>Fick's law</b>: rate ∝ surface area × concentration difference ÷ thickness):</p>
<ul>
<li>Huge surface area (millions of alveoli).</li>
<li>Thin walls: alveolar epithelium and capillary endothelium are each one cell thick (short diffusion distance).</li>
<li>Steep concentration gradient maintained by ventilation and blood flow.</li>
</ul>
<h3>Practical: membrane permeability</h3>
<p>Beetroot discs in water at different temperatures (or ethanol concentrations): measure the colour of the leaked betalain pigment with a colorimeter. Higher temperature → proteins denature and phospholipids become more fluid → more pigment leaks.</p>
`,
  quiz: [
    { q: "In the phospholipid bilayer, the fatty acid tails are…", o: ["Hydrophobic and face inwards", "Hydrophilic and face outwards", "Charged", "On the outside"], a: 0, e: "" },
    { q: "Which needs ATP?", o: ["Active transport", "Osmosis", "Facilitated diffusion", "Simple diffusion"], a: 0, e: "" },
    { q: "Osmosis is the net movement of water…", o: ["From higher to lower water potential through a partially permeable membrane", "From lower to higher water potential", "Using carrier proteins and ATP", "Of solutes"], a: 0, e: "" },
    { q: "Fick's law: rate of diffusion ∝ …", o: ["Surface area × concentration difference ÷ thickness", "Thickness ÷ surface area", "Temperature only", "Mass"], a: 0, e: "" },
    { q: "Which molecule diffuses straight through the bilayer?", o: ["Oxygen", "Glucose", "Sodium ions", "Proteins"], a: 0, e: "" },
    { q: "Why does beetroot leak more pigment at high temperature?", o: ["Membrane proteins denature and lipids become more fluid", "Pigment is made faster", "Water enters by osmosis", "Cells divide"], a: 0, e: "" },
    { q: "Exocytosis is…", o: ["Release of substances in vesicles that fuse with the membrane", "Taking substances in", "Diffusion through channels", "Osmosis"], a: 0, e: "" },
    { q: "Why are alveoli efficient?", o: ["Large SA, thin walls, steep gradient", "Thick walls", "Few in number", "Poor blood supply"], a: 0, e: "" },
    { q: "Role of cholesterol in membranes?", o: ["Regulates fluidity", "Transports glucose", "Acts as a receptor", "Makes ATP"], a: 0, e: "" }
  ],
  flashcards: [
    ["Fluid mosaic model", "Phospholipid bilayer with scattered proteins that can move"],
    ["Phospholipid orientation", "Hydrophilic heads out, hydrophobic tails in"],
    ["Diffusion", "Passive net movement down a concentration gradient"],
    ["Facilitated diffusion", "Passive, via channel or carrier proteins"],
    ["Osmosis", "Water from higher to lower water potential across partially permeable membrane"],
    ["Active transport", "Against gradient, carrier proteins, uses ATP"],
    ["Endocytosis / exocytosis", "Bulk transport into / out of cells in vesicles; uses ATP"],
    ["Fick's law", "Rate ∝ SA × concentration difference ÷ thickness"],
    ["Alveolar adaptations", "Large SA, thin walls, steep gradients"],
    ["Beetroot practical", "Pigment leakage measured with colorimeter; shows membrane damage"]
  ]
});

S2Data.add({
  id: "2b", group: 2, y1: true, title: "Proteins and enzymes",
  summary: "Amino acids, peptide bonds, protein structure, and how enzymes work.",
  notes: `
<h3>Amino acids and proteins</h3>
<p>Amino acids have an amine group (–NH<sub>2</sub>), a carboxyl group (–COOH), a hydrogen and an R group attached to a central carbon. There are 20 different R groups. Two amino acids join by a <b>peptide bond</b> in a <b>condensation</b> reaction, forming a dipeptide; many form a polypeptide.</p>
<h3>Levels of structure</h3>
<table>
<tr><th>Level</th><th>Description</th><th>Bonds</th></tr>
<tr><td>Primary</td><td>Sequence of amino acids</td><td>Peptide</td></tr>
<tr><td>Secondary</td><td>α-helix or β-pleated sheet</td><td>Hydrogen bonds</td></tr>
<tr><td>Tertiary</td><td>Overall 3D folding</td><td>Hydrogen, ionic, disulfide bonds; hydrophobic interactions</td></tr>
<tr><td>Quaternary</td><td>More than one polypeptide chain</td><td>As tertiary</td></tr>
</table>
<ul>
<li><b>Globular</b> proteins (e.g. haemoglobin, enzymes): compact, spherical, soluble (hydrophilic R groups outside); metabolic roles.</li>
<li><b>Fibrous</b> proteins (e.g. collagen): long chains, insoluble, strong; structural roles. Collagen is three chains in a triple helix with cross-links.</li>
</ul>
<h3>Enzymes</h3>
<ul>
<li>Biological catalysts: lower the <b>activation energy</b> by forming an <b>enzyme–substrate complex</b>.</li>
<li>The <b>active site</b> has a specific shape complementary to the substrate. <b>Induced fit</b>: the active site changes shape slightly when the substrate binds, putting strain on bonds.</li>
<li>Intracellular (e.g. in respiration) or extracellular (e.g. digestive enzymes).</li>
</ul>
<h3>Factors affecting rate</h3>
<ul>
<li><b>Enzyme or substrate concentration</b>: more collisions/complexes, until another factor limits.</li>
<li><b>Temperature</b>: rate rises up to an optimum, then falls as the enzyme denatures (bonds holding the tertiary structure break, so the active site changes shape).</li>
<li><b>pH</b>: changes the charges on R groups, disrupting ionic and hydrogen bonds.</li>
</ul>
<p>Measure the <b>initial rate</b> from the gradient of a tangent at t = 0 on a product-against-time graph.</p>
`,
  quiz: [
    { q: "Which bond joins amino acids?", o: ["Peptide", "Glycosidic", "Ester", "Phosphodiester"], a: 0, e: "" },
    { q: "The primary structure of a protein is…", o: ["Its sequence of amino acids", "Its α-helix", "Its 3D shape", "The number of chains"], a: 0, e: "" },
    { q: "Secondary structure is held by…", o: ["Hydrogen bonds", "Peptide bonds only", "Disulfide bonds only", "Ionic bonds only"], a: 0, e: "" },
    { q: "Collagen is a…", o: ["Fibrous protein", "Globular protein", "Carbohydrate", "Lipid"], a: 0, e: "" },
    { q: "How do enzymes speed up reactions?", o: ["Lower the activation energy", "Increase temperature", "Increase substrate concentration", "Add energy"], a: 0, e: "" },
    { q: "Induced fit means…", o: ["The active site changes shape slightly as the substrate binds", "The substrate changes the enzyme permanently", "Enzymes fit any substrate", "Shape never changes"], a: 0, e: "" },
    { q: "Why does high temperature reduce enzyme activity?", o: ["Bonds in the tertiary structure break; active site changes shape (denaturation)", "Molecules move slower", "Substrate is used up", "Enzyme is digested"], a: 0, e: "" },
    { q: "Which bond is NOT involved in tertiary structure?", o: ["Glycosidic", "Disulfide", "Ionic", "Hydrogen"], a: 0, e: "" },
    { q: "Initial rate is found from…", o: ["The gradient of a tangent at t = 0", "The final amount of product", "The area under the curve", "The maximum temperature"], a: 0, e: "" }
  ],
  flashcards: [
    ["Amino acid structure", "Central C with H, NH₂, COOH and R group"],
    ["Peptide bond", "Joins amino acids by condensation"],
    ["Primary structure", "Amino acid sequence"],
    ["Secondary structure", "α-helix / β-pleated sheet; hydrogen bonds"],
    ["Tertiary structure", "3D folding; H, ionic, disulfide bonds, hydrophobic interactions"],
    ["Quaternary structure", "More than one polypeptide (e.g. haemoglobin)"],
    ["Globular vs fibrous", "Soluble, metabolic vs insoluble, structural"],
    ["Enzyme action", "Lowers activation energy by forming E–S complex"],
    ["Induced fit", "Active site moulds around the substrate"],
    ["Denaturation", "Tertiary bonds break; active site shape lost"]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "DNA, RNA and protein synthesis",
  summary: "Nucleotide structure, semi-conservative replication, the genetic code, transcription and translation.",
  notes: `
<h3>Nucleic acids</h3>
<ul>
<li>A <b>nucleotide</b> = pentose sugar + phosphate group + nitrogenous base.</li>
<li>DNA: deoxyribose; bases A, T, C, G. Two antiparallel strands in a double helix, held by <b>hydrogen bonds</b> between complementary bases (A–T, C–G).</li>
<li>Nucleotides in a strand are joined by <b>phosphodiester bonds</b> (condensation), forming a sugar–phosphate backbone.</li>
<li>RNA: ribose; bases A, U, C, G; single-stranded. mRNA carries the code; tRNA brings amino acids.</li>
</ul>
<h3>Semi-conservative replication</h3>
<ol>
<li>DNA helicase breaks the hydrogen bonds, unzipping the strands.</li>
<li>Each strand acts as a template; free nucleotides pair with complementary bases.</li>
<li>DNA polymerase joins nucleotides with phosphodiester bonds.</li>
<li>Each new molecule has one original and one new strand.</li>
</ol>
<p><b>Meselson and Stahl</b> used <sup>15</sup>N and <sup>14</sup>N: after one generation all DNA had intermediate density, ruling out conservative replication; after two, half intermediate, half light, confirming semi-conservative.</p>
<h3>The genetic code</h3>
<p>A <b>triplet</b> code (codon of three bases codes for one amino acid). It is <b>degenerate</b> (most amino acids have more than one codon) and <b>non-overlapping</b>. A gene is a sequence of bases coding for a polypeptide.</p>
<h3>Protein synthesis</h3>
<ul>
<li><b>Transcription</b> (nucleus): RNA polymerase binds; DNA unwinds; one strand (the template/antisense strand) is copied into mRNA with complementary bases (U instead of T). mRNA leaves via a nuclear pore.</li>
<li><b>Translation</b> (ribosome): mRNA binds; tRNA molecules with <b>anticodons</b> complementary to each codon bring specific amino acids; peptide bonds form between adjacent amino acids; the ribosome moves along until a stop codon.</li>
</ul>
<h3>Mutations</h3>
<p>A change in the base sequence. Substitutions may be silent (degenerate code), missense or nonsense. Insertions and deletions cause a <b>frameshift</b>, changing every codon after it.</p>
`,
  quiz: [
    { q: "A DNA nucleotide contains…", o: ["Deoxyribose, phosphate and a base", "Ribose, phosphate and a base", "Glucose and phosphate", "An amino acid"], a: 0, e: "" },
    { q: "Which base pairs with adenine in DNA?", o: ["Thymine", "Uracil", "Cytosine", "Guanine"], a: 0, e: "" },
    { q: "Nucleotides in a strand are joined by…", o: ["Phosphodiester bonds", "Hydrogen bonds", "Peptide bonds", "Glycosidic bonds"], a: 0, e: "" },
    { q: "Semi-conservative replication means each new DNA molecule…", o: ["Has one original and one new strand", "Is entirely new", "Is entirely original", "Has mixed fragments"], a: 0, e: "" },
    { q: "Which enzyme joins DNA nucleotides?", o: ["DNA polymerase", "Helicase", "RNA polymerase", "Ligase only"], a: 0, e: "" },
    { q: "A degenerate code means…", o: ["Most amino acids have more than one codon", "Codons overlap", "Each codon codes for two amino acids", "The code is damaged"], a: 0, e: "" },
    { q: "Where does transcription occur?", o: ["Nucleus", "Ribosome", "Cytoplasm", "Golgi"], a: 0, e: "" },
    { q: "tRNA carries…", o: ["An amino acid and an anticodon", "A codon and a ribosome", "DNA", "mRNA"], a: 0, e: "" },
    { q: "Which mutation causes a frameshift?", o: ["Deletion of one base", "Substitution", "Silent mutation", "None"], a: 0, e: "" }
  ],
  flashcards: [
    ["Nucleotide", "Pentose sugar + phosphate + base"],
    ["DNA bases", "A–T, C–G; hydrogen bonds"],
    ["RNA vs DNA", "Ribose, uracil, single-stranded"],
    ["Phosphodiester bond", "Joins nucleotides in a strand"],
    ["Semi-conservative replication", "Each new molecule: one old, one new strand"],
    ["Meselson–Stahl", "¹⁵N/¹⁴N density experiment confirming semi-conservative replication"],
    ["Genetic code", "Triplet, degenerate, non-overlapping"],
    ["Transcription", "DNA → mRNA in nucleus by RNA polymerase"],
    ["Translation", "mRNA → polypeptide at ribosome using tRNA"],
    ["Frameshift", "Insertion/deletion shifts every codon after it"]
  ]
});

S2Data.add({
  id: "2d", group: 2, y1: true, title: "Inheritance, cystic fibrosis and screening",
  summary: "Genetic terms, monohybrid crosses, cystic fibrosis, gene therapy and genetic screening.",
  notes: `
<h3>Key terms</h3>
<ul>
<li><b>Gene</b>: a sequence of bases coding for a polypeptide. <b>Allele</b>: a different version of a gene.</li>
<li><b>Genotype</b>: the alleles present (e.g. Ff). <b>Phenotype</b>: the characteristics expressed.</li>
<li><b>Homozygous</b> (FF or ff) and <b>heterozygous</b> (Ff). <b>Dominant</b> alleles are expressed in heterozygotes; <b>recessive</b> only when homozygous.</li>
<li>A <b>carrier</b> has one recessive allele for a condition but doesn't show it.</li>
</ul>
<h3>Monohybrid inheritance</h3>
<p>Two carriers (Ff × Ff) give offspring FF : Ff : ff in a 1 : 2 : 1 ratio, so a <b>25%</b> chance of an affected child each pregnancy. Draw a genetic diagram or Punnett square, and pedigree diagrams to trace inheritance.</p>
<h3>Cystic fibrosis</h3>
<ul>
<li>Caused by recessive mutations in the <b>CFTR</b> gene. CFTR is a chloride ion channel in epithelial membranes.</li>
<li>Faulty CFTR → Cl<sup>−</sup> not secreted → less water moves out of cells by osmosis → <b>thick, sticky mucus</b>.</li>
<li><b>Respiratory</b>: mucus blocks airways and traps bacteria → infections; reduced gas exchange.</li>
<li><b>Digestive</b>: pancreatic duct blocked → digestive enzymes can't reach the gut; poor absorption.</li>
<li><b>Reproductive</b>: blocked sperm ducts (vas deferens) / thick cervical mucus → reduced fertility.</li>
</ul>
<h3>Treatment and gene therapy</h3>
<p>Physiotherapy, antibiotics, enzyme supplements, CFTR modulator drugs. <b>Gene therapy</b> introduces a working allele using a vector (e.g. virus or liposome). Somatic therapy affects only the patient; germ-line therapy would be inherited (not permitted in humans).</p>
<h3>Genetic screening</h3>
<ul>
<li>Carrier testing; preimplantation genetic diagnosis (PGD) on IVF embryos; prenatal testing: <b>amniocentesis</b> (15–18 weeks, ~1% miscarriage risk) and <b>chorionic villus sampling</b> (10–13 weeks, slightly higher risk).</li>
<li>Ethical issues: risk of miscarriage, false results, decisions about termination, who should access results, "designer babies".</li>
</ul>
`,
  quiz: [
    { q: "An allele is…", o: ["A different version of a gene", "A chromosome", "A protein", "A phenotype"], a: 0, e: "" },
    { q: "Two carriers of cystic fibrosis have a child. Chance it has CF?", o: ["25%", "50%", "75%", "0%"], a: 0, e: "" },
    { q: "What is the CFTR protein?", o: ["A chloride ion channel", "An enzyme in the gut", "A hormone", "A carrier for glucose"], a: 0, e: "" },
    { q: "Why is mucus thick in cystic fibrosis?", o: ["Less Cl⁻ secreted, so less water leaves cells by osmosis", "Too much water is secreted", "Bacteria make it", "Cells divide too fast"], a: 0, e: "" },
    { q: "Why do people with CF often have poor digestion?", o: ["Mucus blocks the pancreatic duct, so enzymes don't reach the gut", "They lack teeth", "Their stomach acid is weak", "They can't swallow"], a: 0, e: "" },
    { q: "Somatic gene therapy…", o: ["Isn't passed on to offspring", "Changes eggs or sperm", "Is inherited", "Uses no vectors"], a: 0, e: "" },
    { q: "Which prenatal test can be done earliest?", o: ["Chorionic villus sampling", "Amniocentesis", "Carrier testing at birth", "Newborn heel prick"], a: 0, e: "" },
    { q: "A heterozygous genotype is…", o: ["Ff", "FF", "ff", "F"], a: 0, e: "" },
    { q: "A carrier…", o: ["Has one recessive allele but no symptoms", "Has two recessive alleles", "Always shows the condition", "Has no alleles for the gene"], a: 0, e: "" }
  ],
  flashcards: [
    ["Gene / allele", "Base sequence coding for a polypeptide / alternative version"],
    ["Genotype / phenotype", "Alleles present / characteristics expressed"],
    ["Homozygous / heterozygous", "Two same alleles / two different alleles"],
    ["Carrier × carrier", "1 : 2 : 1; 25% affected"],
    ["CFTR", "Chloride ion channel; faulty in cystic fibrosis"],
    ["CF effect on mucus", "Less Cl⁻ out → less water out → thick, sticky mucus"],
    ["CF effects", "Lungs: infections; pancreas: enzymes blocked; reproduction: reduced fertility"],
    ["Gene therapy vectors", "Viruses or liposomes"],
    ["Amniocentesis", "15–18 weeks; ~1% miscarriage risk"],
    ["CVS", "10–13 weeks; slightly higher risk"]
  ]
});

S2Data.detail("1a", { mistakes: ["Saying valves open because the heart muscle pushes them. They open and close because of pressure differences."], tips: ["For cardiac cycle graphs, find where the pressure lines cross: each crossing is a valve opening or closing."], fact: "A resting heart pumps about 5 litres of blood per minute; during exercise this can rise to over 25." });
S2Data.detail("1b", { mistakes: ["Confusing thrombin and thromboplastin. Thromboplastin is released by platelets; thrombin is made from prothrombin."], tips: ["When evaluating CVD studies, comment on sample size, control variables, and whether correlation implies causation."], fact: "Aspirin was first sold in 1899; its anti-clotting effect wasn't widely used to prevent heart attacks until the 1980s." });
S2Data.detail("1c", { mistakes: ["Saying HDL is 'good cholesterol'. HDL is a lipoprotein that carries cholesterol to the liver; cholesterol itself is the same."], tips: ["Draw glycosidic and ester bond formation showing the water released. Examiners like to see the OH groups."], fact: "A single glycogen molecule can contain up to 30 000 glucose units." });
S2Data.detail("2a", { mistakes: ["Describing osmosis in terms of concentration of water. Use water potential."], tips: ["Link each feature of the alveoli to a term in Fick's law."], fact: "If flattened out, the alveoli in your lungs would cover about half a tennis court." });
S2Data.detail("2b", { mistakes: ["Saying enzymes are killed at high temperatures. They're denatured: they were never alive."], tips: ["In denaturation answers, mention bonds breaking, tertiary structure changing, active site shape changing, and substrate no longer fitting."], fact: "Catalase can break down millions of hydrogen peroxide molecules per second." });
S2Data.detail("2c", { mistakes: ["Writing T in mRNA sequences. mRNA uses U."], tips: ["For base sequence questions, write the DNA, mRNA and tRNA lines under each other to avoid slips."], fact: "Only about 1–2% of human DNA codes for proteins." });
S2Data.detail("2d", { mistakes: ["Saying a 25% chance means one in four children will definitely be affected. Each pregnancy has an independent 25% chance."], tips: ["Always show parental genotypes, gametes and offspring genotypes in a genetic diagram."], fact: "About 1 in 25 people of northern European descent carries a cystic fibrosis allele." });
