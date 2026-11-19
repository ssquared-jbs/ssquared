/* Topic 3 — Reproduction and inheritance (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "3a", group: 3, title: "Reproduction",
  summary: "Sexual and asexual reproduction, flowers and pollination, human reproduction and the menstrual cycle.",
  fact: "A single sunflower head can hold more than 1000 seeds, each from its own tiny flower.",
  notes: `
<h3>Sexual vs asexual reproduction</h3>
<table>
<tr><th>Sexual</th><th>Asexual</th></tr>
<tr><td>Two parents; fusion of male and female <b>gametes</b> (fertilisation)</td><td>One parent; no gametes</td></tr>
<tr><td>Offspring show <b>variation</b></td><td>Offspring are genetically identical <b>clones</b></td></tr>
<tr><td>Slower; helps survival when conditions change</td><td>Fast; good when conditions are stable</td></tr>
</table>
<h3>Reproduction in flowering plants</h3>
<ul>
<li><b>Pollination</b>: pollen moves from the anther to the stigma. <b>Insect-pollinated</b> flowers have bright petals, scent, nectar and sticky pollen. <b>Wind-pollinated</b> flowers have dangling anthers and stigmas, light smooth pollen, and small dull petals.</li>
<li><b>Fertilisation</b>: a pollen tube grows down the style to the ovule, and the male nucleus fuses with the egg nucleus. The ovule becomes a <b>seed</b> and the ovary becomes the <b>fruit</b>.</li>
<li><b>Germination</b> needs <b>water, oxygen and warmth</b>.</li>
<li>Plants can also reproduce <b>asexually</b>, e.g. runners in strawberry plants, and cuttings.</li>
</ul>
<h3>Human reproduction</h3>
<ul>
<li>Male: testes make sperm and testosterone. Sperm duct, prostate gland, urethra, penis.</li>
<li>Female: ovaries release eggs, oviducts carry them (fertilisation happens here), and the embryo implants in the uterus.</li>
<li>The developing fetus is protected by <b>amniotic fluid</b>. The <b>placenta</b> lets oxygen and nutrients diffuse to the fetus, and CO<sub>2</sub> and urea diffuse away, without the two bloods mixing.</li>
<li>At puberty, hormones cause <b>secondary sexual characteristics</b>: testosterone (deeper voice, facial hair, muscle growth) and oestrogen (breasts develop, hips widen, menstruation starts).</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: the menstrual cycle</span>
<ul>
<li><b>FSH</b> (pituitary) makes an egg mature in the ovary and stimulates oestrogen production.</li>
<li><b>Oestrogen</b> (ovary) repairs and thickens the uterus lining, and inhibits FSH.</li>
<li><b>LH</b> (pituitary) triggers <b>ovulation</b>, the release of an egg, around day 14.</li>
<li><b>Progesterone</b> (from the corpus luteum) maintains the uterus lining. If no pregnancy happens, progesterone falls and the lining breaks down (menstruation).</li>
</ul></div>
`,
  flashcards: [
    ["Gamete", "A sex cell, such as sperm, egg or pollen nucleus"],
    ["Main advantage of sexual reproduction", "Variation in offspring"],
    ["Main advantage of asexual reproduction", "Fast, and only one parent needed"],
    ["Pollination", "Transfer of pollen from anther to stigma"],
    ["Features of wind-pollinated flowers", "Dangling anthers and stigmas, light smooth pollen, small dull petals"],
    ["Conditions for germination", "Water, oxygen, warmth"],
    ["Where does fertilisation happen in humans?", "Oviduct"],
    ["Function of the placenta", "Exchange of oxygen, nutrients and waste between mother and fetus"],
    ["What triggers ovulation?", "LH"],
    ["Role of progesterone", "Maintains the uterus lining"]
  ],
  quiz: [
    { q: "What does the ovary of a flower become after fertilisation?", o: ["Fruit", "Seed", "Petal", "Pollen"], a: 0, e: "" },
    { q: "Which is a feature of insect-pollinated flowers?", o: ["Brightly coloured petals", "Feathery stigmas", "Light, smooth pollen", "Dangling anthers"], a: 0, e: "" },
    { q: "Which hormone triggers ovulation?", o: ["LH", "FSH", "Progesterone", "Testosterone"], a: 0, e: "" },
    { q: "Which is NOT needed for germination?", o: ["Light", "Water", "Oxygen", "Warmth"], a: 0, e: "" },
    { q: "Asexual reproduction produces offspring that are…", o: ["Genetically identical to the parent", "All different", "Always male", "Sterile"], a: 0, e: "" },
    { q: "What protects the developing fetus from bumps?", o: ["Amniotic fluid", "The placenta", "The umbilical cord", "The oviduct"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Inheritance and genetics",
  summary: "DNA, genes and alleles, protein synthesis, genetic crosses, sex determination and pedigrees.",
  fact: "Your DNA is 99.9% identical to every other human's. All our differences come from the remaining 0.1%.",
  notes: `
<h3>DNA, genes and chromosomes</h3>
<ul>
<li>The <b>nucleus</b> contains <b>chromosomes</b>, made of <b>DNA</b>. Human body cells have <b>46 chromosomes (23 pairs)</b>. Gametes have 23.</li>
<li>A <b>gene</b> is a section of DNA that codes for a specific <b>protein</b>.</li>
<li>DNA is a <b>double helix</b> of two strands. The bases pair up: <b>A with T</b>, and <b>C with G</b>.</li>
<li>The <b>genome</b> is all the DNA of an organism.</li>
</ul>
<div class="box box-c"><span class="box-title">Paper 2 only: protein synthesis</span>The base sequence of a gene is copied into <b>mRNA</b> in the nucleus (transcription). The mRNA goes to a <b>ribosome</b>, where every three bases (a codon) code for one amino acid. tRNA brings the amino acids, which join in order to make the protein (translation).</div>
<h3>Key terms</h3>
<table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td>Allele</td><td>A different version of the same gene</td></tr>
<tr><td>Dominant</td><td>An allele expressed when only one copy is present (capital letter, e.g. B)</td></tr>
<tr><td>Recessive</td><td>Only expressed when two copies are present (lower case, e.g. b)</td></tr>
<tr><td>Homozygous</td><td>Two identical alleles (BB or bb)</td></tr>
<tr><td>Heterozygous</td><td>Two different alleles (Bb)</td></tr>
<tr><td>Genotype</td><td>The alleles present (e.g. Bb)</td></tr>
<tr><td>Phenotype</td><td>The observable characteristic (e.g. brown eyes)</td></tr>
<tr><td>Codominance</td><td>Both alleles are expressed (e.g. AB blood group)</td></tr>
</table>
<h3>Monohybrid crosses</h3>
<p>Use a <b>Punnett square</b>. For Bb × Bb: BB, Bb, Bb, bb. That gives a 3 : 1 ratio of dominant to recessive phenotype, so a 25% chance of bb.</p>
<h3>Sex determination</h3>
<p>Females are <b>XX</b> and males <b>XY</b>. Each child has a <b>50%</b> chance of being male, because the father's sperm carries either X or Y.</p>
<h3>Pedigree diagrams</h3>
<p>Family trees show how a characteristic is inherited. If two unaffected parents have an affected child, the condition is <b>recessive</b> and both parents are carriers (heterozygous).</p>
`,
  flashcards: [
    ["Gene", "A section of DNA that codes for a protein"],
    ["Allele", "A different version of the same gene"],
    ["Number of chromosomes in a human body cell", "46 (23 pairs)"],
    ["DNA base pairs", "A–T and C–G"],
    ["Homozygous", "Two identical alleles"],
    ["Heterozygous", "Two different alleles"],
    ["Genotype vs phenotype", "Genotype: the alleles. Phenotype: the visible characteristic"],
    ["Ratio from Bb × Bb", "3 dominant : 1 recessive phenotype"],
    ["Sex chromosomes of a male", "XY"],
    ["Codominance", "Both alleles are expressed in the phenotype"]
  ],
  quiz: [
    { q: "Two heterozygous parents (Tt × Tt) have a child. What is the chance it is tt?", o: ["25%", "50%", "75%", "0%"], a: 0, e: "" },
    { q: "Which base pairs with adenine in DNA?", o: ["Thymine", "Cytosine", "Guanine", "Uracil"], a: 0, e: "" },
    { q: "How many chromosomes are in a human egg cell?", o: ["23", "46", "92", "22"], a: 0, e: "" },
    { q: "An organism with genotype bb is…", o: ["Homozygous recessive", "Heterozygous", "Homozygous dominant", "Codominant"], a: 0, e: "" },
    { q: "Who determines the sex of a baby?", o: ["The father (X or Y sperm)", "The mother", "Both equally", "Neither"], a: 0, e: "" },
    { q: "Two parents without a condition have an affected child. The condition is…", o: ["Recessive", "Dominant", "Codominant", "Not genetic"], a: 0, e: "" },
    { q: "What does a gene code for?", o: ["A protein", "A cell", "A chromosome", "A carbohydrate"], a: 0, e: "" }
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Cell division, variation and evolution",
  summary: "Mitosis and meiosis, genetic and environmental variation, mutation, natural selection and antibiotic resistance.",
  fact: "Some bacteria can evolve resistance to a new antibiotic within a few years of it being introduced.",
  notes: `
<h3>Mitosis vs meiosis</h3>
<table>
<tr><th></th><th>Mitosis</th><th>Meiosis</th></tr>
<tr><td>Used for</td><td>Growth, repair, asexual reproduction</td><td>Making gametes</td></tr>
<tr><td>Daughter cells</td><td>2, <b>diploid</b> (46 chromosomes)</td><td>4, <b>haploid</b> (23 chromosomes)</td></tr>
<tr><td>Genetically</td><td><b>Identical</b> to the parent cell</td><td>All <b>different</b> (variation)</td></tr>
</table>
<p>At fertilisation, two haploid gametes fuse to form a <b>diploid zygote</b>, which then divides by mitosis.</p>
<h3>Variation</h3>
<ul>
<li><b>Genetic variation</b> comes from different alleles, meiosis and random fertilisation, e.g. blood group and eye colour.</li>
<li><b>Environmental variation</b> comes from conditions, e.g. scars, language spoken, or plant height affected by light.</li>
<li>Many characteristics come from <b>both</b>, e.g. height and body mass.</li>
<li><b>Discontinuous</b> variation falls into distinct groups (blood group). <b>Continuous</b> variation shows a range (height).</li>
</ul>
<h3>Mutation</h3>
<p>A <b>mutation</b> is a rare, random change in DNA. Most have no effect. Some are harmful, and a few are beneficial. Ionising radiation and some chemicals increase the mutation rate.</p>
<h3>Evolution by natural selection</h3>
<ol>
<li>There is <b>variation</b> within a population, caused by mutations.</li>
<li>More offspring are produced than can survive, so there is <b>competition</b> for resources.</li>
<li>Individuals with <b>advantageous characteristics</b> are more likely to <b>survive and reproduce</b>.</li>
<li>They <b>pass on their alleles</b>, so over many generations the advantageous alleles become more common.</li>
</ol>
<h3>Antibiotic resistance</h3>
<p>A mutation makes a bacterium resistant. When antibiotics are used, non-resistant bacteria die but the resistant ones survive and reproduce, so the population becomes resistant. Overuse of antibiotics, and not finishing the course, make this worse.</p>
`,
  flashcards: [
    ["Mitosis produces…", "2 genetically identical diploid cells"],
    ["Meiosis produces…", "4 genetically different haploid cells (gametes)"],
    ["Uses of mitosis", "Growth, repair, asexual reproduction"],
    ["Haploid", "One set of chromosomes (23 in humans)"],
    ["Diploid", "Two sets of chromosomes (46 in humans)"],
    ["Example of continuous variation", "Height"],
    ["Mutation", "A rare, random change in DNA"],
    ["Natural selection in one line", "Organisms best suited to their environment survive, reproduce and pass on their alleles"],
    ["How does antibiotic resistance spread?", "Resistant bacteria survive treatment and reproduce"]
  ],
  quiz: [
    { q: "Which type of division makes gametes?", o: ["Meiosis", "Mitosis", "Binary fission", "Fertilisation"], a: 0, e: "" },
    { q: "How many cells does mitosis produce?", o: ["2", "4", "1", "8"], a: 0, e: "" },
    { q: "Which is an example of environmental variation?", o: ["A scar", "Blood group", "Natural eye colour", "Sex"], a: 0, e: "" },
    { q: "What is the original source of genetic variation?", o: ["Mutation", "Mitosis", "Diet", "Exercise"], a: 0, e: "" },
    { q: "Why do resistant bacteria increase when antibiotics are used?", o: ["Non-resistant bacteria are killed, resistant ones reproduce", "Antibiotics cause resistance directly", "Bacteria learn", "Viruses help them"], a: 0, e: "" },
    { q: "A human zygote has how many chromosomes?", o: ["46", "23", "92", "12"], a: 0, e: "" },
    { q: "Blood group is an example of…", o: ["Discontinuous variation", "Continuous variation", "Environmental variation", "Mutation"], a: 0, e: "" }
  ]
});
