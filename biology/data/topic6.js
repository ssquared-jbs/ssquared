/* Edexcel GCSE (1BI0) extras — content not in the International GCSE (4BI1) */

S2Data.add({
  id: "6a", group: 6, gcse: true, title: "Health, disease and medicines",
  summary: "Communicable and non-communicable disease, pathogens and their spread, defences, and developing new drugs.",
  fact: "Penicillin was discovered by accident in 1928, when Alexander Fleming noticed mould killing bacteria on a dish he'd left out.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>Edexcel GCSE Biology (1BI0) covers health and disease in more depth than the International GCSE.</div>
<h3>Types of disease</h3>
<ul>
<li><b>Communicable</b> diseases are caused by pathogens and can spread: e.g. cholera, tuberculosis, malaria, HIV, chalara ash dieback.</li>
<li><b>Non-communicable</b> diseases can't spread: e.g. cardiovascular disease, cancers, type 2 diabetes. Risk factors include diet, smoking, alcohol and lack of exercise.</li>
<li><b>BMI</b> = mass (kg) ÷ height<sup>2</sup> (m<sup>2</sup>), used as a rough indicator of obesity.</li>
</ul>
<h3>How pathogens spread</h3>
<table>
<tr><th>Disease</th><th>Pathogen</th><th>Spread</th><th>Reduce spread by</th></tr>
<tr><td>Cholera</td><td>Bacterium</td><td>Contaminated water</td><td>Clean water</td></tr>
<tr><td>Tuberculosis</td><td>Bacterium</td><td>Airborne droplets</td><td>Ventilation, isolation, vaccination</td></tr>
<tr><td>Malaria</td><td>Protist</td><td>Mosquito vector</td><td>Nets, insecticides</td></tr>
<tr><td>HIV</td><td>Virus</td><td>Sexual contact, body fluids</td><td>Condoms, antiretroviral drugs</td></tr>
</table>
<h3>Body defences</h3>
<p>Skin, mucus and cilia, stomach acid, and lysozyme in tears are the first line of defence. White blood cells (phagocytes and lymphocytes) are the second.</p>
<h3>New medicines</h3>
<ol>
<li><b>Discovery</b> of a possible drug.</li>
<li><b>Preclinical testing</b> on cells, tissues and animals, for toxicity and efficacy.</li>
<li><b>Clinical trials</b>: first on healthy volunteers at low doses (safety), then on patients (dose and effectiveness). <b>Double-blind</b> trials with <b>placebos</b> avoid bias.</li>
</ol>
<p><b>Antibiotics</b> kill bacteria but <b>not viruses</b>. Painkillers treat symptoms only.</p>
`,
  flashcards: [
    ["Communicable disease", "A disease caused by a pathogen that can be passed on"],
    ["Non-communicable disease", "A disease that can't be passed on, e.g. heart disease"],
    ["BMI formula", "mass (kg) ÷ height<sup>2</sup> (m<sup>2</sup>)"],
    ["How is malaria spread?", "By mosquitoes (a vector)"],
    ["How is cholera spread?", "In contaminated water"],
    ["Why don't antibiotics treat colds?", "Colds are caused by viruses; antibiotics only kill bacteria"],
    ["Double-blind trial", "Neither patients nor doctors know who gets the drug or the placebo"],
    ["Placebo", "A dummy treatment with no drug in it"]
  ],
  quiz: [
    { q: "Which disease is non-communicable?", o: ["Coronary heart disease", "Malaria", "Cholera", "Tuberculosis"], a: 0, e: "" },
    { q: "A person of 80 kg is 2.0 m tall. What is their BMI?", o: ["20", "40", "160", "80"], a: 0, e: "80 ÷ 2.0²" },
    { q: "Why are new drugs tested on healthy volunteers first?", o: ["To check the drug is safe", "To check it cures the disease", "Because they are cheaper", "To find a placebo"], a: 0, e: "" },
    { q: "Antibiotics can treat…", o: ["Bacterial infections", "Viral infections", "All diseases", "Genetic disorders"], a: 0, e: "" },
    { q: "Malaria is caused by a…", o: ["Protist", "Virus", "Bacterium", "Fungus"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "6b", group: 6, gcse: true, title: "Evolution, classification and fossils",
  summary: "Evidence for evolution, the three-domain system, Darwin and Wallace, and human evolution.",
  fact: "Ardi, a 4.4-million-year-old fossil hominid, could both walk upright and climb trees.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>Edexcel GCSE Biology (1BI0) goes further into the evidence for evolution and how living things are classified.</div>
<h3>Darwin and Wallace</h3>
<p>Charles Darwin and Alfred Russel Wallace independently came up with the theory of evolution by <b>natural selection</b>. Darwin published <i>On the Origin of Species</i> in 1859.</p>
<h3>Evidence for evolution</h3>
<ul>
<li><b>Fossils</b> show how species have changed over time.</li>
<li><b>Antibiotic resistance</b> shows evolution happening now.</li>
<li><b>Human evolution</b>: fossils such as Ardi (4.4 million years old), Lucy (3.2 million years old) and Leakey's <i>Homo habilis</i> finds, plus increasingly complex <b>stone tools</b>, show changes such as walking upright and larger brains.</li>
<li><b>Pentadactyl limb</b>: the same five-digit bone structure in many vertebrates suggests a common ancestor.</li>
</ul>
<h3>Classification</h3>
<ul>
<li>Linnaean levels: <b>kingdom, phylum, class, order, family, genus, species</b>.</li>
<li><b>Binomial names</b> use genus and species, e.g. <i>Homo sapiens</i>.</li>
<li><b>Three-domain system</b> (Carl Woese), based on genetic analysis: <b>Archaea</b>, <b>Bacteria</b> and <b>Eukarya</b>.</li>
</ul>
<h3>Selective breeding vs genetic engineering</h3>
<p>Both change organisms to suit humans. Genetic engineering is faster and can move genes between species. Selective breeding works only with natural variation in a species.</p>
`,
  flashcards: [
    ["Who proposed evolution by natural selection?", "Charles Darwin and Alfred Russel Wallace"],
    ["Order of classification", "Kingdom, phylum, class, order, family, genus, species"],
    ["Binomial name", "Genus + species, e.g. <i>Homo sapiens</i>"],
    ["Three domains", "Archaea, Bacteria, Eukarya"],
    ["Ardi", "4.4-million-year-old hominid fossil"],
    ["Lucy", "3.2-million-year-old hominid fossil that walked upright"],
    ["Pentadactyl limb", "Five-digit limb shared by many vertebrates, evidence of a common ancestor"]
  ],
  quiz: [
    { q: "Which comes directly after 'family' in classification?", o: ["Genus", "Order", "Species", "Class"], a: 0, e: "" },
    { q: "Who proposed the three-domain system?", o: ["Carl Woese", "Charles Darwin", "Carl Linnaeus", "Gregor Mendel"], a: 0, e: "" },
    { q: "Which fossil is older?", o: ["Ardi", "Lucy", "<i>Homo sapiens</i>", "<i>Homo habilis</i>"], a: 0, e: "" },
    { q: "In <i>Panthera leo</i>, what is <i>Panthera</i>?", o: ["Genus", "Species", "Family", "Kingdom"], a: 0, e: "" },
    { q: "What does the pentadactyl limb suggest?", o: ["A common ancestor", "Animals were designed separately", "Limbs don't evolve", "All animals are mammals"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "6c", group: 6, gcse: true, title: "Ecology extras",
  summary: "Biodiversity and conservation, food security, decomposition and parasitism and mutualism.",
  fact: "Clownfish and sea anemones are a classic example of mutualism: each protects the other.",
  notes: `
<div class="box box-key"><span class="box-title">Why this is here</span>Edexcel GCSE Biology (1BI0) includes extra ecology ideas that the International GCSE doesn't cover.</div>
<h3>Interdependence</h3>
<ul>
<li><b>Parasitism</b>: one organism benefits and the other is harmed, e.g. fleas and tapeworms.</li>
<li><b>Mutualism</b>: both organisms benefit, e.g. nitrogen-fixing bacteria in legume root nodules, or oxpeckers on rhinos.</li>
</ul>
<h3>Biodiversity and conservation</h3>
<ul>
<li>Ways to protect biodiversity: <b>breeding programmes</b> for endangered species, protecting and <b>regenerating habitats</b> (e.g. reforestation), reintroducing field margins and hedgerows, and reducing deforestation.</li>
<li>Benefits of biodiversity: medicines from wild plants, ecosystem stability, and tourism.</li>
</ul>
<h3>Food security</h3>
<p>Having enough affordable, nutritious food. Threats include rising population, changing diets, new pests and diseases, climate change, and the cost of farming inputs.</p>
<h3>Decomposition</h3>
<p>The rate of decay increases with warmth, moisture and oxygen. Compost heaps are kept warm, moist and aerated. Food is preserved by refrigeration, freezing, drying, salting or canning, which slow decomposers down.</p>
`,
  flashcards: [
    ["Parasitism", "One organism benefits, the other is harmed"],
    ["Mutualism", "Both organisms benefit"],
    ["Example of mutualism", "Nitrogen-fixing bacteria in legume root nodules"],
    ["Ways to conserve biodiversity", "Breeding programmes, habitat protection and regeneration, hedgerows"],
    ["Food security", "Having enough affordable, nutritious food"],
    ["Conditions for fast decomposition", "Warm, moist, plenty of oxygen"]
  ],
  quiz: [
    { q: "A tapeworm living in a human gut is an example of…", o: ["Parasitism", "Mutualism", "Competition", "Predation"], a: 0, e: "" },
    { q: "Which conditions speed up decomposition in a compost heap?", o: ["Warm, moist, aerated", "Cold, dry, airtight", "Frozen", "Salty"], a: 0, e: "" },
    { q: "Which is a threat to food security?", o: ["New crop pests", "More farmland", "Cheaper fertiliser", "Fewer people"], a: 0, e: "" },
    { q: "Why does freezing preserve food?", o: ["It slows decomposers' enzymes", "It kills all bacteria", "It adds oxygen", "It removes nutrients"], a: 0, e: "" }
  ]
});
