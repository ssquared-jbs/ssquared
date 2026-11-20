/* Video explainers — Biology Topics 3 and 4. */

S2Data.video("3a", {
  scenes: [
    { type: "title", title: "Reproduction", sub: "Sexual and asexual reproduction in plants and humans.", mark: "♀♂",
      say: ["Organisms reproduce in two ways: sexually and asexually. This video covers both, in flowering plants and in humans."] },
    { type: "compare", title: "Sexual vs asexual", h: ["Sexual", "Asexual"],
      rows: [["Parents", "Two: gametes fuse", "One: no gametes"], ["Offspring", "Genetically varied", "Clones of the parent"], ["Advantage", "Variation helps survive change", "Fast; no partner needed"]],
      say: ["Sexual reproduction needs two parents, whose gametes fuse at fertilisation. Asexual reproduction needs only one parent and no gametes.", "Sexual reproduction produces varied offspring. Asexual produces clones.", "Variation helps a species survive when the environment changes. Asexual reproduction is quicker and doesn't need a partner."] },
    { type: "compare", title: "Pollination", h: ["Insect-pollinated", "Wind-pollinated"],
      rows: [["Petals", "Large, bright, scented, nectar", "Small, dull, no scent"], ["Anthers and stigma", "Inside the flower", "Hang outside"], ["Pollen", "Sticky, less of it", "Light, lots of it"]],
      say: ["Pollination is the transfer of pollen from an anther to a stigma. Insect-pollinated flowers have large, bright, scented petals and nectar to attract insects. Wind-pollinated flowers have small, dull petals.", "Insect-pollinated flowers keep their anthers and stigma inside, so insects brush against them. Wind-pollinated flowers hang them outside, and their stigmas are feathery to catch pollen.", "Wind-pollinated plants make huge amounts of light pollen."] },
    { type: "flow", title: "Fertilisation in a flower", nodes: ["Pollen lands on stigma", "Pollen tube grows down the style", "Male nucleus fuses with ovule nucleus", "Ovule → seed · ovary → fruit"],
      say: ["After pollen lands on the stigma,", "a pollen tube grows down through the style to the ovary.", "The male nucleus travels down it and fuses with the female nucleus in the ovule.", "The fertilised ovule becomes a seed, and the ovary becomes the fruit. Seeds need water, oxygen and warmth to germinate."] },
    { type: "points", title: "Human reproduction", items: ["Sperm made in <b>testes</b>; eggs released from <b>ovaries</b>", "Fertilisation in the <b>oviduct</b>", "Embryo implants in the <b>uterus</b>", "<b>Placenta</b>: oxygen and food in, CO₂ and urea out"],
      say: ["Sperm are made in the testes. Eggs are released from the ovaries.", "Fertilisation happens in the oviduct.", "The embryo implants into the thick lining of the uterus.", "The placenta lets oxygen and nutrients diffuse from mother to fetus, and carbon dioxide and urea go the other way. Amniotic fluid protects the fetus."] },
    { type: "compare", title: "The menstrual cycle", h: ["Made by", "Job"],
      rows: [["FSH", "Pituitary", "Egg matures"], ["Oestrogen", "Ovaries", "Builds up uterus lining"], ["LH", "Pituitary", "Ovulation, around day 14"], ["Progesterone", "Ovaries", "Maintains the lining"]],
      say: ["F S H, from the pituitary, makes an egg mature in the ovary.", "Oestrogen, from the ovaries, makes the uterus lining thicken.", "L H, from the pituitary, triggers ovulation, the release of the egg, around day fourteen.", "Progesterone maintains the lining. When progesterone falls, the lining breaks down: that's menstruation."] },
    { type: "quiz", q: "After fertilisation, what does the ovary become?", o: ["The seed", "The fruit", "The petal", "The pollen"], a: 1,
      why: "The ovule becomes the seed.", say: ["After fertilisation, what does the ovary develop into?"] }
  ]
});

S2Data.video("3b", {
  scenes: [
    { type: "title", title: "Inheritance and genetics", sub: "DNA, genes, alleles and genetic crosses.", mark: "Aa",
      say: ["Why do you look a bit like your parents, but not exactly? It's all down to genes and alleles."] },
    { type: "flow", title: "From DNA to genes", nodes: ["Nucleus", "23 pairs of chromosomes", "DNA: a double helix", "Gene: codes for a protein"],
      say: ["Inside the nucleus,", "human body cells have twenty three pairs of chromosomes.", "Each chromosome is a long molecule of D N A, a double helix with bases A, T, C and G. A pairs with T, and C pairs with G.", "A gene is a section of D N A that codes for a specific protein."] },
    { type: "compare", title: "Key words", h: ["Meaning", "Example"],
      rows: [["Allele", "Different version of a gene", "T (tall), t (short)"], ["Dominant / recessive", "Shown with one copy / only shown with two", "T is dominant; t is recessive"], ["Homozygous / heterozygous", "Two same alleles / two different", "TT or tt / Tt"], ["Genotype / phenotype", "Alleles you have / characteristic shown", "Tt / tall"]],
      say: ["An allele is a different version of a gene.", "A dominant allele is shown if you have just one copy. A recessive allele only shows if you have two copies.", "Homozygous means two identical alleles. Heterozygous means two different ones.", "Your genotype is the alleles you have. Your phenotype is the characteristic you show."] },
    { type: "svg", title: "Genetic cross: Tt × Tt",
      svg: "<g data-step='0'><text class='txt b' text-anchor='middle' x='550' y='40'>Tt × Tt</text><text class='txt b' text-anchor='middle' x='480' y='110' style='font-size:34px'>T</text><text class='txt b' text-anchor='middle' x='620' y='110' style='font-size:34px'>t</text><text class='txt b' text-anchor='middle' x='380' y='200' style='font-size:34px'>T</text><text class='txt b' text-anchor='middle' x='380' y='320' style='font-size:34px'>t</text></g>" +
        "<rect x='410' y='140' width='280' height='240' class='ink'/><line x1='550' y1='140' x2='550' y2='380' class='ink'/><line x1='410' y1='260' x2='690' y2='260' class='ink'/>" +
        "<g data-step='1'><text class='txt b' text-anchor='middle' x='480' y='212' style='font-size:34px'>TT</text><text class='txt b' text-anchor='middle' x='620' y='212' style='font-size:34px'>Tt</text><text class='txt b' text-anchor='middle' x='480' y='332' style='font-size:34px'>Tt</text><rect x='552' y='262' width='136' height='116' class='hlf' style='opacity:.6'/><text class='txt b' text-anchor='middle' x='620' y='332' style='font-size:34px'>tt</text></g>" +
        "<text class='txt b' x='760' y='240' data-step='2'>3 tall : 1 short</text><text class='txt s' x='760' y='280' data-step='2'>25% chance of short</text>",
      say: ["Cross two heterozygous tall pea plants. Each parent makes gametes carrying T or t. Write them along the top and side of a Punnett square.", "Fill in the boxes: one T T, two T t, and one t t.", "Three have a dominant T, so they're tall. Only t t is short. That's a three to one ratio: a twenty five percent chance of a short plant."] },
    { type: "points", title: "Sex and genetic disorders", items: ["Females <b>XX</b>, males <b>XY</b>: 50% chance of each", "Cystic fibrosis: <b>recessive</b> allele", "Two carrier parents (Ff × Ff): 25% chance of a child with CF", "Pedigree: unaffected parents with an affected child → recessive"],
      say: ["Sex is determined by the twenty third pair of chromosomes. Females are X X and males are X Y, so there's a fifty percent chance of each.", "Cystic fibrosis is caused by a recessive allele.", "If both parents are carriers, there's a one in four chance their child has it.", "In a family tree, if two unaffected parents have an affected child, the allele must be recessive."] },
    { type: "quiz", q: "A heterozygous brown-eyed parent (Bb) and a blue-eyed parent (bb) have a child. Chance of blue eyes?", o: ["0%", "25%", "50%", "100%"], a: 2,
      why: "Bb × bb → Bb, Bb, bb, bb.", say: ["A B b parent and a b b parent have a child. What's the chance of blue eyes?"] }
  ]
});

S2Data.video("3c", {
  scenes: [
    { type: "title", title: "Cell division, variation and evolution", sub: "Mitosis, meiosis, natural selection and antibiotic resistance.", mark: "2n",
      say: ["This video covers the two types of cell division, where variation comes from, and how it drives evolution."] },
    { type: "compare", title: "Mitosis vs meiosis", h: ["Mitosis", "Meiosis"],
      rows: [["Daughter cells", "2", "4"], ["Chromosomes", "Same number (diploid, 46)", "Half (haploid, 23)"], ["Genetically", "Identical", "All different"], ["Used for", "Growth, repair, asexual reproduction", "Making gametes"]],
      say: ["Mitosis makes two daughter cells. Meiosis makes four.", "In mitosis, they have the full set of chromosomes, forty six in humans. In meiosis, half: twenty three.", "Mitosis cells are genetically identical. Meiosis cells are all different.", "Mitosis is for growth, repair and asexual reproduction. Meiosis makes gametes, so that fertilisation restores the full number."] },
    { type: "points", title: "Variation", items: ["<b>Genetic</b>: different alleles, e.g. blood group", "<b>Environmental</b>: e.g. scars, language", "Most features: <b>both</b>, e.g. height", "New alleles come from <b>mutations</b>"],
      say: ["Some variation is genetic, caused by different alleles, like blood group.", "Some is environmental, like scars or the language you speak.", "Most features, like height, are affected by both.", "New alleles arise from mutations, random changes in D N A. Most have no effect, a few are harmful, and occasionally one is useful."] },
    { type: "flow", title: "Natural selection", nodes: ["<b>Variation</b> in a population", "Best adapted <b>survive</b>", "They <b>reproduce</b>", "Pass on alleles", "Over generations, allele becomes <b>common</b>"],
      say: ["Individuals in a population vary, because of mutations.", "Some have characteristics that help them survive, like better camouflage.", "They're more likely to survive and reproduce.", "So they pass on their advantageous alleles to their offspring.", "Over many generations, those alleles become more common. That's evolution by natural selection, Darwin's theory."] },
    { type: "flow", title: "Antibiotic resistance", nodes: ["Mutation makes one bacterium resistant", "Antibiotic kills the others", "Resistant ones survive and multiply", "Resistant population, e.g. MRSA"],
      say: ["A random mutation makes a bacterium resistant to an antibiotic.", "When the antibiotic is used, the non-resistant bacteria die.", "The resistant ones survive and reproduce, with no competition.", "Soon the whole population is resistant, like M R S A. That's why doctors shouldn't over-prescribe antibiotics, and patients should finish the course."] },
    { type: "quiz", q: "How many chromosomes are in a human egg cell?", o: ["46", "23", "92", "12"], a: 1,
      why: "Gametes are haploid, made by meiosis.", say: ["How many chromosomes are in a human egg cell?"] }
  ]
});

S2Data.video("4a", {
  scenes: [
    { type: "title", title: "The organism in the environment", sub: "Ecology words, quadrats and sampling.", mark: "□",
      say: ["Ecology is the study of organisms and their environment. Here are the key words, and how to estimate population sizes."] },
    { type: "flow", title: "Key words", nodes: ["<b>Population</b>: one species", "<b>Community</b>: all species", "<b>Ecosystem</b>: community + environment"], arrows: ["", ""],
      say: ["A population is all the organisms of one species in an area.", "A community is all the populations of different species living there.", "An ecosystem is the community plus its non-living environment, interacting together. The place an organism lives is its habitat."] },
    { type: "flow", title: "Estimating a population with quadrats", nodes: ["Place quadrats <b>randomly</b>", "<b>Count</b> in each", "Find the <b>mean</b>", "Scale up to the whole area"],
      say: ["Place quadrats at random, for example using random number coordinates, to avoid bias.", "Count the number of the organism in each quadrat.", "Work out the mean number per quadrat.", "Then scale up to the whole area."] },
    { type: "calc", title: "Worked example", q: "Mean of 6 daisies per 0.25 m² quadrat. The field is 100 m × 50 m.", lines: ["Density = 6 ÷ 0.25 = 24 per m²", "Field area = 100 × 50 = 5000 m²", "Population ≈ 24 × 5000 = 120 000"],
      say: ["First find the density: six divided by point two five is twenty four per square metre.", "The field is five thousand square metres.", "So the estimated population is a hundred and twenty thousand daisies."] },
    { type: "points", title: "Distribution along a transect", items: ["Lay a tape across the habitat", "Place quadrats at regular intervals", "Record species and an abiotic factor (e.g. light)", "See how distribution changes"],
      say: ["To see how a species changes across a habitat, from shade into sunlight for example, lay a tape measure across it.", "Place quadrats at regular intervals along it.", "Record the species at each point, along with an abiotic factor like light intensity.", "Then you can see how distribution changes with that factor."] },
    { type: "compare", title: "Factors affecting organisms", h: ["Examples", "Measured with"],
      rows: [["Abiotic (non-living)", "Light, temperature, water, soil pH, CO₂", "Light meter, thermometer, pH probe"], ["Biotic (living)", "Predators, competition, disease, food", "Observation and counts"]],
      say: ["Abiotic factors are the non-living ones: light, temperature, water, soil pH and carbon dioxide. You can measure them with a light meter, thermometer or pH probe.", "Biotic factors are living: predators, competition, disease and food availability."] },
    { type: "quiz", q: "Why are quadrats placed randomly?", o: ["To save time", "To avoid bias", "To count more", "To find the biggest plants"], a: 1,
      why: "So the sample represents the whole area.", say: ["Why are quadrats placed randomly?"] }
  ]
});

S2Data.video("4b", {
  scenes: [
    { type: "title", title: "Feeding relationships", sub: "Food chains, pyramids and energy transfer.", mark: "10%",
      say: ["Energy flows through ecosystems along food chains. But most of it is lost at every step."] },
    { type: "flow", title: "A food chain", nodes: ["Grass<small>producer</small>", "Rabbit<small>primary consumer</small>", "Fox<small>secondary consumer</small>", "Eagle<small>tertiary consumer</small>"],
      say: ["Every food chain starts with a producer, usually a green plant, which makes its own food by photosynthesis.", "A primary consumer, a herbivore, eats the producer.", "A secondary consumer eats the primary consumer.", "And a tertiary consumer eats that. The arrows show the direction energy flows. Decomposers break down dead material at every level."] },
    { type: "pyramid", title: "Pyramid of biomass", levels: [{ t: "Producers", w: 1 }, { t: "Primary consumers", w: 0.66 }, { t: "Secondary consumers", w: 0.4 }, { t: "Tertiary", w: 0.22 }], side: "Each level has less biomass than the one below",
      say: ["A pyramid of biomass shows the mass of living material at each level. Producers have the most.", "Then primary consumers,", "secondary consumers,", "and tertiary consumers at the top.", "It's always a pyramid, because biomass is lost at every level. A pyramid of numbers can be upside down, for example when one tree supports thousands of caterpillars."] },
    { type: "points", title: "Where does the energy go?", items: ["<b>Respiration</b>: released as heat", "<b>Movement</b>", "<b>Not eaten</b>: bones, roots", "<b>Egested</b> in faeces and <b>excreted</b>"],
      say: ["Only about ten percent of energy passes to the next level. The rest is used in respiration and lost as heat,", "used for movement,", "in parts that aren't eaten, like bones and roots,", "or lost in faeces and urine. That's why food chains rarely have more than four or five levels."] },
    { type: "calc", title: "Efficiency", q: "Grass contains 10 000 kJ. Rabbits gain 1000 kJ.", lines: ["efficiency = energy transferred ÷ energy available × 100", "= 1000 ÷ 10 000 × 100", "= 10%"],
      say: ["Efficiency of energy transfer equals energy transferred to the next level, divided by the energy available, times a hundred.", "A thousand divided by ten thousand, times a hundred.", "Ten percent."] },
    { type: "quiz", q: "In grass → grasshopper → frog → snake, what is the frog?", o: ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer"], a: 2,
      why: "It eats the primary consumer.", say: ["In this food chain, what is the frog?"] }
  ]
});

S2Data.video("4c", {
  scenes: [
    { type: "title", title: "Cycles within ecosystems", sub: "The carbon, nitrogen and water cycles.", mark: "C N",
      say: ["Elements like carbon and nitrogen are recycled through ecosystems again and again. Decomposers play a huge part."] },
    { type: "cycle", title: "The carbon cycle", nodes: ["CO₂ in the air", "Plants", "Animals", "Dead matter and waste", "Fossil fuels"], arrows: ["photosynthesis", "feeding", "death, waste", "fossilisation", "combustion"], rx: 420, ry: 190,
      say: ["Carbon dioxide in the air", "is taken in by plants in photosynthesis.", "It passes to animals when they eat the plants.", "When organisms die, or produce waste, decomposers break them down and respire, releasing carbon dioxide. Plants and animals respire too.", "Some dead matter becomes fossil fuels over millions of years. Burning them, combustion, releases the carbon back as carbon dioxide."] },
    { type: "cycle", title: "The nitrogen cycle", nodes: ["Nitrates in soil", "Plant proteins", "Animal proteins", "Ammonium compounds"], arrows: ["absorbed by roots", "feeding", "decomposers (death, waste)", "nitrifying bacteria"], rx: 400, ry: 185, centre: "N₂ in the air",
      say: ["Plants can't use nitrogen gas from the air directly. They absorb nitrates from the soil.",
            "They use them to make proteins.",
            "Animals get proteins by eating plants.",
            "When organisms die or excrete waste, decomposers turn the proteins into ammonium compounds. Then nitrifying bacteria convert ammonium into nitrates, completing the loop.",
            "Nitrogen gas joins and leaves the cycle too. Nitrogen-fixing bacteria in soil and in root nodules of plants like clover turn it into nitrogen compounds, and so does lightning. Denitrifying bacteria in waterlogged soil turn nitrates back into nitrogen gas."] },
    { type: "points", title: "Decomposition", items: ["Bacteria and fungi break down dead matter", "Faster when <b>warm</b>, <b>moist</b> and with <b>oxygen</b>", "Return minerals and CO₂ to the environment"],
      say: ["Decomposers are bacteria and fungi that break down dead matter.", "They work fastest when it's warm, moist, and there's plenty of oxygen.", "They return minerals to the soil and carbon dioxide to the air, so the cycles keep going."] },
    { type: "quiz", q: "Which bacteria convert ammonium compounds into nitrates?", o: ["Nitrogen-fixing", "Nitrifying", "Denitrifying", "Decomposers"], a: 1,
      why: "Denitrifying bacteria do the reverse, back to N₂.", say: ["Which bacteria turn ammonium compounds into nitrates?"] }
  ]
});

S2Data.video("4d", {
  scenes: [
    { type: "title", title: "Human influences on the environment", sub: "Pollution, the greenhouse effect, eutrophication and deforestation.", mark: "CO₂",
      say: ["Humans have a huge impact on the environment. This video covers air and water pollution and deforestation."] },
    { type: "compare", title: "Air pollutants", h: ["Source", "Effect"],
      rows: [["Carbon dioxide", "Burning fossil fuels", "Greenhouse effect → climate change"], ["Methane", "Cattle, rice fields", "Greenhouse effect"], ["Sulfur dioxide", "Burning fuels with sulfur", "Acid rain"], ["Carbon monoxide", "Incomplete combustion", "Binds to haemoglobin"]],
      say: ["Carbon dioxide comes from burning fossil fuels. It's a greenhouse gas, causing climate change.", "Methane, from cattle and rice fields, is a greenhouse gas too.", "Sulfur dioxide, from fuels containing sulfur, causes acid rain, which damages trees and lakes.", "Carbon monoxide, from incomplete combustion, binds to haemoglobin and reduces oxygen transport."] },
    { type: "flow", title: "Eutrophication", nodes: ["Fertiliser or sewage runs into water", "Algae grow fast: <b>algal bloom</b>", "Plants below die: no light", "<b>Decomposers</b> use up oxygen", "Fish die"],
      say: ["Fertiliser or untreated sewage washes into a lake or river, adding nitrates and phosphates.", "Algae grow rapidly, forming a bloom on the surface.", "The algae block light, so plants underneath can't photosynthesise and die.", "Decomposers break down the dead plants and algae. Their respiration uses up the dissolved oxygen.", "Fish and other animals die from lack of oxygen."] },
    { type: "points", title: "Deforestation", items: ["More <b>CO₂</b>: less photosynthesis, and burning", "Loss of <b>habitats and biodiversity</b>", "<b>Soil erosion</b> and leaching of nutrients", "Less transpiration: changes the <b>water cycle</b>, flooding"],
      say: ["Cutting down forests increases carbon dioxide: fewer trees photosynthesise, and burning releases more.", "Habitats are lost, and so is biodiversity.", "Without roots to hold it, soil is washed away, and nutrients are leached out.", "And less transpiration disrupts the water cycle, which can cause flooding or drought."] },
    { type: "quiz", q: "In eutrophication, what directly causes the oxygen in the water to fall?", o: ["Algae photosynthesising", "Fish breathing", "Decomposers respiring", "Fertiliser reacting"], a: 2,
      why: "They break down the dead algae and plants.", say: ["In eutrophication, what directly uses up the oxygen in the water?"] }
  ]
});
