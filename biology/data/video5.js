/* Video explainers — Biology Topics 5 and 6. */

S2Data.video("5a", {
  scenes: [
    { type: "title", title: "Food production", sub: "Glasshouses, fertilisers, pest control, microbes and fish farming.", mark: "crop",
      say: ["Feeding a growing population means producing more food. This video covers crops, microorganisms in food, and fish farming."] },
    { type: "points", title: "Glasshouses and polytunnels", items: ["Trap heat: <b>warmer</b> → faster photosynthesis", "Extra <b>CO₂</b> from paraffin heaters", "Artificial <b>light</b> extends the day", "Protection from pests and weather"],
      say: ["Glasshouses trap heat, keeping enzymes near their optimum, so photosynthesis is faster.", "Paraffin heaters release carbon dioxide as well as heat.", "Artificial lighting lets plants photosynthesise for longer.", "And crops are protected from pests and bad weather. All of this increases yield, but the farmer has to balance it against cost."] },
    { type: "compare", title: "Pest control", h: ["Advantage", "Disadvantage"],
      rows: [["Pesticides", "Fast, effective", "Kill useful insects; build up in food chains; resistance"], ["Biological control", "No chemicals; targets the pest", "Slow; the control organism may become a pest"]],
      say: ["Chemical pesticides work fast, but they can kill useful insects, build up in food chains, and pests can become resistant.", "Biological control uses a natural predator, like ladybirds eating aphids. There are no chemicals, but it's slower, and the predator could become a pest itself."] },
    { type: "compare", title: "Microorganisms in food", h: ["Microbe", "How"],
      rows: [["Bread", "Yeast", "Respires anaerobically: CO₂ makes dough rise"], ["Yoghurt", "Lactobacillus", "Turns lactose into lactic acid: milk thickens"]],
      say: ["In bread-making, yeast respires anaerobically, producing carbon dioxide that makes the dough rise.", "In yoghurt-making, milk is pasteurised, cooled, and Lactobacillus bacteria are added. They turn lactose into lactic acid, which thickens the milk and gives yoghurt its sour taste."] },
    { type: "points", title: "Industrial fermenters", items: ["<b>Sterile</b> conditions: no contamination", "<b>Temperature</b> kept optimum by a water jacket", "<b>pH</b> monitored", "<b>Oxygen</b> and nutrients supplied; paddles stir"],
      say: ["Fermenters grow microorganisms on a huge scale, to make products like insulin. Everything is sterilised first, so no other microbes contaminate it.", "A water jacket keeps the temperature at the optimum, because respiration releases heat.", "The pH is monitored for the enzymes.", "Oxygen and nutrients are supplied, and paddles stir the mixture."] },
    { type: "points", title: "Fish farming", items: ["Cages limit movement: less energy wasted", "High-protein food", "Disease and parasites controlled", "Species kept separate; selective breeding"],
      say: ["On fish farms, fish are kept in cages, so they waste less energy moving and are safe from predators.", "They're fed high-protein food.", "Disease and parasites are controlled, because they spread easily in crowded water.", "Different species are kept apart, and fish are selectively bred for fast growth."] },
    { type: "quiz", q: "Why do paraffin heaters increase glasshouse yields?", o: ["They add oxygen", "They add CO₂ and heat", "They add nitrates", "They kill pests"], a: 1,
      why: "Both speed up photosynthesis.", say: ["Why do paraffin heaters increase crop yields in a glasshouse?"] }
  ]
});

S2Data.video("5b", {
  scenes: [
    { type: "title", title: "Selective breeding", sub: "How humans shape plants and animals.", mark: "×",
      say: ["For thousands of years, humans have bred plants and animals to have useful characteristics."] },
    { type: "flow", title: "The process", nodes: ["Choose parents with the <b>desired characteristic</b>", "<b>Breed</b> them", "Select the <b>best offspring</b>", "<b>Repeat</b> over many generations"],
      say: ["Choose parents that show the characteristic you want, like cows with a high milk yield.", "Breed them together.", "From their offspring, select the ones that show it best.", "Breed those, and repeat over many generations. Gradually, the characteristic becomes more common and more pronounced."] },
    { type: "points", title: "Examples", items: ["Crops: <b>disease resistance</b>, high yield, short stems", "Cows: <b>high milk yield</b>", "Dogs: gentle temperament", "Wild cabbage → broccoli, cauliflower, kale"],
      say: ["Crops are bred for disease resistance, higher yield, and short stems that don't fall over.", "Cattle are bred for high milk yield or more meat.", "Dogs have been bred for temperament and appearance.", "And wild cabbage was bred into broccoli, cauliflower and kale."] },
    { type: "points", title: "Drawbacks", items: ["<b>Reduced genetic variation</b> (inbreeding)", "A new disease could wipe out a whole population", "More <b>inherited defects</b>", "Animal welfare problems"],
      say: ["Selective breeding reduces genetic variation, because closely related individuals are bred together.", "So if a new disease appears, there may be no resistant individuals, and the whole population could be wiped out.", "Harmful recessive alleles are more likely to be inherited in pairs, causing defects.", "And some animals suffer, like dogs with breathing problems."] },
    { type: "quiz", q: "Why is reduced variation a problem in selectively bred crops?", o: ["They grow slower", "A new disease could kill them all", "They taste worse", "They need more water"], a: 1,
      why: "No individuals may have resistance.", say: ["Why is reduced variation a problem in selectively bred crops?"] }
  ]
});

S2Data.video("5c", {
  scenes: [
    { type: "title", title: "Genetic modification", sub: "Cutting and pasting genes, and GM crops.", mark: "GM",
      say: ["Genetic modification moves a gene from one organism into another. It's how we make human insulin with bacteria."] },
    { type: "flow", title: "Making human insulin", nodes: ["Cut out insulin gene: <b>restriction enzyme</b>", "Cut plasmid with the same enzyme", "Join with <b>DNA ligase</b>", "Plasmid into bacteria", "Grow in a <b>fermenter</b>"],
      say: ["First, the human insulin gene is cut out of D N A using a restriction enzyme.", "A bacterial plasmid is cut open with the same restriction enzyme, leaving matching sticky ends.", "D N A ligase joins the gene into the plasmid. That's recombinant D N A.", "The plasmid, acting as a vector, is put into a bacterium.", "The bacteria are grown in a fermenter, and they make human insulin."] },
    { type: "compare", title: "GM crops", h: ["Example", "Benefit"],
      rows: [["Pest-resistant", "Bt gene makes a toxin", "Less insecticide; higher yield"], ["Herbicide-resistant", "Survives weedkiller", "Easier weed control"], ["Golden Rice", "Makes beta-carotene", "Prevents vitamin A deficiency"]],
      say: ["Some crops have a gene from a bacterium that makes a toxin, killing insects that eat them. Less insecticide is needed.", "Herbicide-resistant crops survive weedkiller, so farmers can spray the weeds without harming the crop.", "Golden Rice makes beta-carotene, which the body turns into vitamin A, helping prevent blindness."] },
    { type: "points", title: "Concerns", items: ["Genes may spread to wild plants: '<b>superweeds</b>'", "Effects on <b>insects</b> and biodiversity", "Unknown <b>long-term</b> health effects", "Ethical objections"],
      say: ["People worry that genes could spread to wild plants, making superweeds that resist weedkiller.", "There could be effects on harmless insects and on biodiversity.", "Some are concerned about long-term health effects, although evidence so far suggests GM foods are safe.", "And some people object on ethical grounds."] },
    { type: "quiz", q: "Which enzyme joins a gene into a plasmid?", o: ["Restriction enzyme", "DNA ligase", "Amylase", "Protease"], a: 1,
      why: "Restriction enzymes cut; ligase joins.", say: ["Which enzyme joins a gene into a plasmid?"] }
  ]
});

S2Data.video("5d", {
  scenes: [
    { type: "title", title: "Cloning", sub: "Micropropagation and cloning mammals.", mark: "=",
      say: ["A clone is genetically identical to its parent. This video covers cloning plants by micropropagation, and how Dolly the sheep was made."] },
    { type: "flow", title: "Micropropagation", nodes: ["Cut small pieces (<b>explants</b>) from shoot tips", "Grow on sterile <b>agar</b> with nutrients and hormones", "Tiny plantlets form", "Transfer to compost"],
      say: ["Small pieces, called explants, are cut from the shoot tips of a parent plant.", "They're grown on sterile agar containing nutrients and plant hormones. Everything must be sterile, or microbes would take over.", "The explants grow into tiny plantlets.", "These are moved into compost to grow. You get thousands of identical plants, quickly, all year round."] },
    { type: "flow", title: "Cloning Dolly the sheep", nodes: ["Remove nucleus from an <b>egg cell</b>", "Insert nucleus from a <b>body cell</b>", "<b>Electric shock</b>: cell divides", "Embryo into a <b>surrogate</b> mother"],
      say: ["The nucleus is removed from an egg cell of one sheep.", "A nucleus from a body cell, an udder cell, of the sheep to be cloned is put into the empty egg.", "A small electric shock makes the cell start dividing into an embryo.", "The embryo is implanted into a surrogate mother. The lamb is genetically identical to the sheep that gave the body cell."] },
    { type: "compare", title: "Cloning: pros and cons", h: ["For", "Against"],
      rows: [["Plants", "Many identical plants fast; preserve rare species", "No variation: one disease could kill them all"], ["Animals", "Copy prize animals; GM animals making medicines", "Low success rate; health problems; ethics"]],
      say: ["For plants, cloning gives many identical plants quickly and can save rare species, but with no variation, one disease could wipe them all out.", "For animals, cloning can copy prize animals or animals engineered to make medicines in their milk. But the success rate is low, clones may have health problems, and there are ethical concerns."] },
    { type: "quiz", q: "Dolly was genetically identical to which sheep?", o: ["The egg donor", "The surrogate", "The body cell donor", "None of them"], a: 2,
      why: "Her nucleus, and so her DNA, came from the udder cell.", say: ["Dolly was genetically identical to which sheep?"] }
  ]
});

S2Data.video("6a", {
  scenes: [
    { type: "title", title: "Health, disease and medicines", sub: "Pathogens, defences and developing new drugs.", mark: "Rx",
      say: ["Diseases can be communicable, caused by pathogens that spread, or non-communicable, like heart disease. This video covers both, plus how new medicines are made."] },
    { type: "compare", title: "Communicable diseases", h: ["Pathogen", "Spread by"],
      rows: [["Cholera", "Bacterium", "Water contaminated with faeces"], ["Tuberculosis", "Bacterium", "Airborne droplets"], ["Malaria", "Protist", "Mosquitoes"], ["HIV", "Virus", "Body fluids: sex, needles"]],
      say: ["Cholera is caused by a bacterium spread in water contaminated with faeces.", "Tuberculosis is a bacterium spread by coughs and sneezes.", "Malaria is caused by a protist carried by mosquitoes.", "H I V is a virus spread through body fluids. It attacks lymphocytes and can lead to AIDS."] },
    { type: "points", title: "Body defences", items: ["<b>Skin</b> and scabs: physical barrier", "<b>Mucus and cilia</b> trap and remove pathogens", "<b>Stomach acid</b> kills pathogens", "<b>White blood cells</b>: phagocytes and lymphocytes"],
      say: ["The skin is a barrier, and scabs seal cuts.", "In the airways, mucus traps pathogens and cilia sweep them away.", "Stomach acid kills pathogens in food.", "If they get through, white blood cells take over: phagocytes engulf them, and lymphocytes make antibodies."] },
    { type: "flow", title: "Developing a new medicine", nodes: ["Tested on cells and tissues", "Tested on animals", "Healthy volunteers: low doses", "Patients: <b>double-blind</b> trial with placebo"],
      say: ["A new drug is first tested on cells and tissues in the lab.", "Then on animals, to check toxicity and dosage.", "Then in clinical trials: first very low doses on healthy volunteers, to check for side effects.", "Then on patients, in a double-blind trial. Some get a placebo, and neither the patients nor the doctors know who's getting which. That avoids bias."] },
    { type: "points", title: "Non-communicable disease", items: ["Risk factors: <b>smoking, diet, alcohol, lack of exercise</b>", "Cardiovascular disease: fatty deposits narrow arteries", "Treatments: lifestyle, <b>statins</b>, <b>stents</b>, surgery"],
      say: ["Non-communicable diseases are linked to risk factors like smoking, poor diet, alcohol and lack of exercise.", "In cardiovascular disease, fatty deposits narrow the arteries.", "Treatments include changing lifestyle, statins to lower cholesterol, stents to hold arteries open, and surgery."] },
    { type: "quiz", q: "Why are double-blind trials used?", o: ["To save money", "To avoid bias", "To test on animals", "To make drugs faster"], a: 1,
      why: "Nobody knows who's getting the real drug.", say: ["Why are double-blind trials used?"] }
  ]
});

S2Data.video("6b", {
  scenes: [
    { type: "title", title: "Evolution, classification and fossils", sub: "Darwin, evidence for evolution and the three domains.", mark: "🦴",
      say: ["How do we know evolution happened, and how do scientists sort the millions of species alive today?"] },
    { type: "points", title: "Darwin and Wallace", items: ["Both proposed <b>natural selection</b>", "Darwin: <i>On the Origin of Species</i>, 1859", "Controversial: challenged religious beliefs", "Little evidence at first; genes not yet understood"],
      say: ["Charles Darwin and Alfred Russel Wallace both came up with the theory of evolution by natural selection.", "Darwin published it in On the Origin of Species, in eighteen fifty nine.", "It was controversial, because it challenged the idea that God created all species.", "And at the time there was little evidence, and nobody knew how characteristics were inherited."] },
    { type: "points", title: "Evidence for evolution", items: ["<b>Fossils</b> show gradual change over time", "<b>Antibiotic resistance</b>: evolution happening now", "<b>DNA</b> similarities between species", "<b>Pentadactyl limb</b>: a shared five-digit pattern"],
      say: ["Fossils, found in rock layers of different ages, show how organisms changed gradually over time. Human fossils like Lucy, and stone tools, show increasing brain size.", "Bacteria becoming resistant to antibiotics is evolution we can watch happening.", "Comparing D N A shows how closely related species are.", "And many vertebrates share a five-digit limb pattern, suggesting a common ancestor."] },
    { type: "flow", title: "Classification", nodes: ["Kingdom", "Phylum", "Class", "Order", "Family", "Genus", "Species"],
      say: ["Linnaeus sorted organisms into groups, from biggest to smallest: kingdom,", "phylum,", "class,", "order,", "family,", "genus,", "and species. Each species has a two-part name: genus then species, like Homo sapiens."] },
    { type: "big", text: "Archaea · Bacteria · Eukaryota", sub: "The three-domain system, based on DNA and RNA evidence",
      say: ["When scientists compared D N A and R N A, they found that some organisms thought to be bacteria were very different.", "So Carl Woese proposed three domains: archaea, bacteria, and eukaryota, which includes plants, animals, fungi and protists."] },
    { type: "quiz", q: "In Homo sapiens, what does 'Homo' tell you?", o: ["The species", "The genus", "The family", "The kingdom"], a: 1,
      why: "Binomial names are genus then species.", say: ["In the name Homo sapiens, what does Homo tell you?"] }
  ]
});

S2Data.video("6c", {
  scenes: [
    { type: "title", title: "Ecology extras", sub: "Biodiversity, food security and decomposition.", mark: "♻",
      say: ["The last GCSE extras: protecting biodiversity, keeping everyone fed, and the conditions that speed up decay."] },
    { type: "compare", title: "Biodiversity", h: ["Threats", "Conservation"],
      rows: [["Land", "Deforestation, building", "Nature reserves, reforestation"], ["Farming", "Monocultures, hedgerow removal", "Hedgerows, field margins"], ["Species", "Overhunting, non-native species", "Breeding programmes, seed banks"]],
      say: ["Biodiversity is the variety of species in an area. It's threatened by deforestation and building, and protected by nature reserves and replanting.", "Monoculture farming reduces it. Hedgerows and wild field margins help.", "Overhunting and invasive species threaten individual species. Captive breeding and seed banks protect them."] },
    { type: "points", title: "Food security", items: ["Threats: <b>growing population</b>, changing diets, climate change", "New <b>pests and pathogens</b>; conflict; costs", "Solutions: GM and selective breeding, less waste", "Eating less meat: fewer trophic levels"],
      say: ["Food security means having enough food. It's threatened by a growing population, and diets that include more meat. Climate change affects harvests too.", "New pests and diseases, wars, and rising costs make it harder.", "Solutions include GM crops, selective breeding, and reducing waste.", "Eating less meat also helps, because fewer trophic levels means less energy is lost."] },
    { type: "graph", title: "Temperature and decay", x: "Temperature", y: "Rate of decay",
      lines: [{ pts: [[0, 0.05], [0.2, 0.2], [0.4, 0.55], [0.55, 0.85], [0.65, 0.5], [0.75, 0.05]], s: 0 }],
      marks: [{ x: 0.55, y: 0.85, t: "optimum for decomposers' enzymes", s: 1 }],
      say: ["Decay is done by microorganisms using enzymes. As temperature rises, decay speeds up.", "Until the optimum. Above it, their enzymes denature and decay slows. Decay also needs water and oxygen, which is why we preserve food by freezing, drying or vacuum packing."] },
    { type: "flow", title: "Investigating decay: milk and lipase", nodes: ["Milk + sodium carbonate + phenolphthalein (pink)", "Add lipase at a set temperature", "Fatty acids lower the pH", "Time until colourless"],
      say: ["To investigate the rate of decay, mix milk with sodium carbonate solution and phenolphthalein, which is pink in alkali.", "Add lipase and keep it at a set temperature in a water bath.", "Lipase breaks fats into fatty acids, which lower the pH.", "Time how long it takes for the pink colour to disappear. Repeat at different temperatures."] },
    { type: "quiz", q: "Why does decay slow down at very high temperatures?", o: ["Decomposers' enzymes denature", "There's less oxygen", "Water evaporates only", "It speeds up"], a: 0,
      why: "Just like any enzyme-controlled process.", say: ["Why does decay slow down at very high temperatures?"] }
  ]
});
