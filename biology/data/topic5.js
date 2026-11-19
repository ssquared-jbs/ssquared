/* Topic 5 — Use of biological resources (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "5a", group: 5, title: "Food production",
  summary: "Greenhouses, fertilisers and pest control, microorganisms in food, industrial fermenters and fish farming.",
  fact: "Yoghurt is milk that bacteria have partly digested: they turn lactose into lactic acid, which thickens it.",
  notes: `
<h3>Crop plants</h3>
<ul>
<li><b>Glasshouses and polythene tunnels</b> increase yield by controlling conditions: higher temperature, extra CO<sub>2</sub> (e.g. from paraffin heaters) and artificial light all increase the rate of photosynthesis.</li>
<li><b>Fertilisers</b> add mineral ions such as nitrate, phosphate and potassium for healthy growth.</li>
<li><b>Pest control</b>: <b>pesticides</b> are chemicals. They are quick but can harm other species and build up in food chains. <b>Biological control</b> uses a natural predator. It is long-lasting and targeted, but slow, and the predator may become a pest itself.</li>
</ul>
<h3>Microorganisms in food</h3>
<ul>
<li><b>Bread</b>: yeast respires anaerobically, releasing CO<sub>2</sub>, which makes the dough rise.</li>
<li><b>Yoghurt</b>: milk is pasteurised and cooled, <i>Lactobacillus</i> is added and incubated at about 40 °C. The bacteria convert lactose into <b>lactic acid</b>, which thickens and sours the milk.</li>
</ul>
<h3>Industrial fermenters</h3>
<p>Microorganisms are grown on a large scale to make products such as penicillin and insulin. Conditions are carefully controlled:</p>
<ul>
<li><b>Aseptic precautions</b>: sterilised with steam to stop contamination.</li>
<li><b>Nutrients</b> for growth.</li>
<li><b>Optimum temperature</b> (a water jacket removes the heat released by respiration) and <b>pH</b> (monitored).</li>
<li><b>Oxygen</b> bubbled in for aerobic respiration.</li>
<li><b>Stirring</b> to mix nutrients and keep the temperature even.</li>
</ul>
<h3>Fish farming</h3>
<p>Fish are kept in enclosed nets or tanks: water quality is maintained, predators are kept out, they are fed high-protein food, disease and parasites are controlled, males and females are kept apart, and selective breeding is used.</p>
`,
  flashcards: [
    ["Why add CO<sub>2</sub> to a glasshouse?", "It increases the rate of photosynthesis, so yields rise"],
    ["Biological pest control", "Using a natural predator to control a pest"],
    ["Disadvantage of pesticides", "They can harm other species and build up in food chains"],
    ["Bacterium used to make yoghurt", "<i>Lactobacillus</i>"],
    ["What turns milk into yoghurt?", "Bacteria convert lactose into lactic acid"],
    ["Why does bread rise?", "Yeast releases CO<sub>2</sub> by anaerobic respiration"],
    ["Why is a fermenter sterilised?", "To prevent contamination by unwanted microorganisms"],
    ["Why does a fermenter have a water jacket?", "To remove heat and keep the optimum temperature"]
  ],
  quiz: [
    { q: "Why do farmers add paraffin heaters to glasshouses?", o: ["They release CO<sub>2</sub> and heat", "To kill pests", "To add oxygen", "To dry the air"], a: 0, e: "" },
    { q: "Which organism is used to make yoghurt?", o: ["<i>Lactobacillus</i>", "Yeast", "<i>Plasmodium</i>", "<i>Mucor</i>"], a: 0, e: "" },
    { q: "What is the advantage of biological control?", o: ["It targets the pest and lasts a long time", "It works instantly", "It kills all insects", "It is a chemical"], a: 0, e: "" },
    { q: "Why is air bubbled into an industrial fermenter?", o: ["To supply oxygen for aerobic respiration", "To cool it", "To sterilise it", "To add nutrients"], a: 0, e: "" },
    { q: "Why is milk pasteurised before making yoghurt?", o: ["To kill unwanted bacteria", "To add sugar", "To thicken it", "To cool it"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Selective breeding",
  summary: "Breeding plants and animals for useful characteristics, and the drawbacks.",
  fact: "Every breed of dog, from Chihuahuas to Great Danes, was produced from wolves by selective breeding.",
  notes: `
<h3>The process</h3>
<ol>
<li>Choose parents with the <b>desired characteristic</b>.</li>
<li>Breed them together.</li>
<li>Select the offspring that show the characteristic best, and breed them.</li>
<li>Repeat over <b>many generations</b> until all offspring show the characteristic.</li>
</ol>
<h3>Examples</h3>
<ul>
<li><b>Plants</b>: high yield, disease resistance, drought tolerance, bigger or tastier fruit, e.g. modern wheat.</li>
<li><b>Animals</b>: more milk or meat, gentle temperament, faster growth, e.g. dairy cattle.</li>
</ul>
<h3>Drawbacks</h3>
<ul>
<li>It <b>reduces genetic variation</b> (less biodiversity), so a population is vulnerable to new diseases or a changing environment.</li>
<li><b>Inbreeding</b> increases the chance of harmful recessive conditions.</li>
<li>Animal welfare issues, e.g. breathing problems in some dog breeds.</li>
</ul>
`,
  flashcards: [
    ["Selective breeding", "Humans choosing parents with useful characteristics to breed over many generations"],
    ["Example of selective breeding in plants", "High-yield, disease-resistant wheat"],
    ["Example of selective breeding in animals", "Cows that produce more milk"],
    ["Main drawback of selective breeding", "Reduced genetic variation, so less resistance to new diseases"],
    ["Inbreeding problem", "More harmful recessive genetic conditions"]
  ],
  quiz: [
    { q: "What is the first step in selective breeding?", o: ["Choose parents with the desired characteristic", "Cut out the gene", "Clone the animal", "Use a fermenter"], a: 0, e: "" },
    { q: "Why can selective breeding make crops vulnerable to disease?", o: ["It reduces genetic variation", "It adds new genes", "It makes plants larger", "It speeds up growth"], a: 0, e: "" },
    { q: "Which is a likely aim of selectively breeding cattle?", o: ["Higher milk yield", "Lower milk yield", "Shorter life", "More disease"], a: 0, e: "" },
    { q: "Why does selective breeding take a long time?", o: ["It needs many generations", "It is done in a lab", "DNA must be cut", "Animals must be cloned first"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "5c", group: 5, title: "Genetic modification",
  summary: "Restriction enzymes, ligase, vectors, GM bacteria making insulin, and GM crops.",
  fact: "Before GM bacteria, insulin for diabetics was extracted from the pancreases of pigs and cows.",
  notes: `
<h3>What it is</h3>
<p><b>Genetic modification (genetic engineering)</b> means transferring a gene from one organism into another, which then makes a new protein. The result is a <b>transgenic</b> organism.</p>
<h3>Making human insulin with bacteria</h3>
<ol>
<li>The human insulin gene is cut out with a <b>restriction enzyme</b>, leaving "sticky ends".</li>
<li>A bacterial <b>plasmid</b> (the <b>vector</b>) is cut with the <b>same</b> restriction enzyme, giving matching sticky ends.</li>
<li><b>DNA ligase</b> joins the gene into the plasmid, making <b>recombinant DNA</b>.</li>
<li>The plasmid is put back into a bacterium.</li>
<li>The bacteria are grown in a <b>fermenter</b>. They multiply and make human insulin, which is extracted and purified.</li>
</ol>
<p>Viruses can also be used as vectors.</p>
<h3>GM crops</h3>
<ul>
<li><b>Pest resistance</b>: e.g. a gene from a bacterium makes the plant produce a toxin that kills insects, so less pesticide is needed.</li>
<li><b>Herbicide resistance</b>: farmers can spray weeds without killing the crop.</li>
<li><b>Extra nutrients</b>: e.g. Golden Rice, which makes beta-carotene to prevent vitamin A deficiency.</li>
<li>Concerns: genes might spread to wild plants, effects on insects and food chains, possible long-term health effects, and seed costs for farmers.</li>
</ul>
`,
  flashcards: [
    ["Genetic modification", "Transferring a gene from one organism to another"],
    ["Restriction enzyme", "Cuts DNA at specific sequences, leaving sticky ends"],
    ["DNA ligase", "Joins pieces of DNA together"],
    ["Vector", "Carries the gene into the host cell, e.g. a plasmid or virus"],
    ["Recombinant DNA", "DNA combined from two different organisms"],
    ["Transgenic organism", "An organism containing a gene from another species"],
    ["Golden Rice", "GM rice that makes beta-carotene to prevent vitamin A deficiency"],
    ["Advantage of pest-resistant GM crops", "Less pesticide needed and higher yields"]
  ],
  quiz: [
    { q: "Which enzyme joins the insulin gene into the plasmid?", o: ["DNA ligase", "Restriction enzyme", "Amylase", "Protease"], a: 0, e: "" },
    { q: "Why is the same restriction enzyme used on the gene and the plasmid?", o: ["To give matching sticky ends", "To kill bacteria", "To make insulin directly", "To remove the plasmid"], a: 0, e: "" },
    { q: "In GM bacteria, what is the plasmid used as?", o: ["A vector", "A ligase", "A product", "A nutrient"], a: 0, e: "" },
    { q: "What is Golden Rice modified to produce?", o: ["Beta-carotene (vitamin A source)", "Insulin", "Insect toxin", "Extra starch"], a: 0, e: "" },
    { q: "Which is a concern about GM crops?", o: ["Genes may spread to wild plants", "They always taste bad", "They can't be grown", "They contain no DNA"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "5d", group: 5, title: "Cloning", paper2: true,
  summary: "Micropropagation of plants and cloning mammals such as Dolly the sheep.",
  fact: "Dolly the sheep, born in 1996, was cloned from a single udder cell.",
  notes: `
<div class="box box-c"><span class="box-title">This subtopic is Paper 2 only</span></div>
<h3>Micropropagation (plant tissue culture)</h3>
<ol>
<li>Take small pieces (<b>explants</b>) from the tips of a plant's stems or side shoots.</li>
<li>Sterilise them to kill microorganisms.</li>
<li>Grow them on a sterile medium (agar) containing <b>nutrients</b> and <b>plant hormones</b>.</li>
<li>They grow into many small plants, which are transferred to compost.</li>
</ol>
<p>Advantages: lots of identical plants, quickly, all year round, from a plant with the desired features. Disadvantage: no genetic variation, so a single disease could wipe them all out.</p>
<h3>Cloning mammals (Dolly the sheep)</h3>
<ol>
<li>Remove the nucleus from an <b>egg cell</b> (from sheep A).</li>
<li>Take the nucleus from a <b>body (udder) cell</b> of the sheep to be cloned (sheep B).</li>
<li>Put B's diploid nucleus into the empty egg cell.</li>
<li>Give it a small <b>electric shock</b> to make it divide by mitosis into an embryo.</li>
<li>Implant the embryo into the uterus of a <b>surrogate</b> mother (sheep C).</li>
<li>The lamb is a genetic clone of sheep B.</li>
</ol>
<p>Uses: copying animals with valuable features, e.g. those genetically modified to make human proteins in their milk. Concerns: low success rate, health problems, and ethical issues.</p>
`,
  flashcards: [
    ["Micropropagation", "Growing many identical plants from small explants on sterile agar with hormones"],
    ["Explant", "A small piece of plant tissue used in micropropagation"],
    ["Why is everything sterile in micropropagation?", "To stop microorganisms contaminating the cultures"],
    ["Cloning Dolly: whose nucleus?", "From a body (udder) cell of the sheep being cloned"],
    ["What makes the cloned egg divide?", "A small electric shock"],
    ["Surrogate mother", "The female the cloned embryo is implanted into"],
    ["Drawback of clones", "No genetic variation, so they are all vulnerable to the same disease"]
  ],
  quiz: [
    { q: "Dolly the sheep is genetically identical to…", o: ["The sheep that donated the body cell nucleus", "The egg donor", "The surrogate", "All three"], a: 0, e: "" },
    { q: "What is added to the agar in micropropagation?", o: ["Nutrients and plant hormones", "Antibiotics only", "Bacteria", "Insulin"], a: 0, e: "" },
    { q: "What is removed from the egg cell in mammal cloning?", o: ["The nucleus", "The membrane", "The cytoplasm", "The mitochondria"], a: 0, e: "" },
    { q: "What is a disadvantage of a crop of cloned plants?", o: ["No genetic variation, so disease could affect them all", "They grow slowly", "They are all different", "They can't reproduce"], a: 0, e: "" }
  ]
});
