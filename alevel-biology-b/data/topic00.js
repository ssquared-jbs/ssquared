/* Shared with biology-a: same specification content. */

S2Data.add({
  id: "1a", group: 1, y1: true, title: "Carbohydrates, lipids and diet",
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
  id: "1b", group: 1, y1: true, title: "Proteins and enzymes",
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
  id: "1c", group: 1, y1: true, title: "DNA, RNA and protein synthesis",
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
  id: "2a", group: 2, y1: true, title: "Cell structure and microscopy",
  summary: "Eukaryotic and prokaryotic cells, organelles, the protein secretory pathway and microscopy.",
  notes: `
<h3>Eukaryotic cell organelles</h3>
<table>
<tr><th>Organelle</th><th>Function</th></tr>
<tr><td>Nucleus</td><td>Contains DNA (chromatin); nucleolus makes ribosomes</td></tr>
<tr><td>Rough ER</td><td>Ribosomes on surface; synthesises and transports proteins</td></tr>
<tr><td>Smooth ER</td><td>Synthesises lipids and steroids</td></tr>
<tr><td>Golgi apparatus</td><td>Modifies, packages and sorts proteins into vesicles</td></tr>
<tr><td>Mitochondria</td><td>Site of aerobic respiration (ATP production)</td></tr>
<tr><td>Ribosomes (80S)</td><td>Protein synthesis</td></tr>
<tr><td>Lysosomes</td><td>Contain digestive enzymes</td></tr>
<tr><td>Centrioles</td><td>Form spindle fibres in animal cell division</td></tr>
</table>
<h3>The secretory pathway</h3>
<p>Proteins made on ribosomes of the rough ER → transported in vesicles to the Golgi → modified (e.g. glycosylated) and packaged → secretory vesicles move to the cell membrane → exocytosis.</p>
<h3>Prokaryotic cells</h3>
<p>Smaller; no nucleus (circular DNA in the cytoplasm), plasmids, 70S ribosomes, cell wall (peptidoglycan), no membrane-bound organelles; may have capsule, flagella and pili.</p>
<h3>Organisation</h3>
<p>Cells → tissues (similar cells with a shared function) → organs → organ systems.</p>
<h3>Microscopy</h3>
<ul>
<li><b>Magnification</b> = image size ÷ actual size. Convert units (1 mm = 1000 μm).</li>
<li><b>Resolution</b>: the ability to distinguish two points as separate. Electron microscopes have much higher resolution because electrons have a shorter wavelength than light.</li>
<li>Use an <b>eyepiece graticule</b> calibrated against a <b>stage micrometer</b> to measure cells.</li>
</ul>
`,
  quiz: [
    { q: "Which organelle modifies and packages proteins?", o: ["Golgi apparatus", "Smooth ER", "Lysosome", "Nucleolus"], a: 0, e: "" },
    { q: "Where are ribosomes made?", o: ["Nucleolus", "Golgi", "Mitochondria", "Cell membrane"], a: 0, e: "" },
    { q: "Prokaryotic ribosomes are…", o: ["70S", "80S", "Absent", "Membrane-bound"], a: 0, e: "" },
    { q: "Which is found in prokaryotes but not usually in eukaryotes?", o: ["Plasmids", "Nucleus", "Mitochondria", "Golgi"], a: 0, e: "" },
    { q: "An image is 25 mm long; the cell is 50 μm. Magnification?", o: ["× 500", "× 50", "× 2", "× 5000"], a: 0, e: "25 000 ÷ 50." },
    { q: "Why do electron microscopes have greater resolution?", o: ["Electrons have a shorter wavelength than light", "They use brighter light", "They magnify more lenses", "Samples are alive"], a: 0, e: "" },
    { q: "Smooth ER makes…", o: ["Lipids", "Proteins", "DNA", "Ribosomes"], a: 0, e: "" },
    { q: "Which organelle is involved in forming spindle fibres in animal cells?", o: ["Centrioles", "Lysosomes", "Ribosomes", "Vacuole"], a: 0, e: "" },
    { q: "A tissue is…", o: ["A group of similar cells working together", "A single cell", "A group of organs", "A molecule"], a: 0, e: "" }
  ],
  flashcards: [
    ["Rough ER", "Ribosomes; protein synthesis and transport"],
    ["Golgi apparatus", "Modifies, packages and sorts proteins"],
    ["Mitochondria", "Aerobic respiration; ATP"],
    ["Lysosomes", "Digestive enzymes"],
    ["Secretory pathway", "RER → vesicle → Golgi → secretory vesicle → exocytosis"],
    ["Prokaryotic features", "No nucleus, circular DNA, plasmids, 70S ribosomes, peptidoglycan wall"],
    ["Magnification", "Image size ÷ actual size"],
    ["Resolution", "Ability to distinguish two close points"],
    ["Graticule calibration", "Eyepiece graticule against stage micrometer"]
  ]
});

S2Data.add({
  id: "2c", group: 2, y1: true, title: "The cell cycle, mitosis and meiosis",
  summary: "Stages of the cell cycle and mitosis, meiosis and variation, and fertilisation in mammals and plants.",
  notes: `
<h3>The cell cycle</h3>
<p><b>Interphase</b> (G1: growth; S: DNA replication; G2: growth and preparation) → <b>mitosis</b> → <b>cytokinesis</b>.</p>
<h3>Mitosis</h3>
<ol>
<li><b>Prophase</b>: chromosomes condense (two chromatids joined at a centromere); nuclear envelope breaks down; spindle forms.</li>
<li><b>Metaphase</b>: chromosomes line up on the equator, attached to spindle fibres by their centromeres.</li>
<li><b>Anaphase</b>: centromeres split; sister chromatids are pulled to opposite poles.</li>
<li><b>Telophase</b>: chromatids reach the poles; nuclear envelopes reform.</li>
</ol>
<p>Mitosis produces two genetically identical diploid cells: used for growth, repair and asexual reproduction.</p>
<p><b>Mitotic index</b> = number of cells in mitosis ÷ total cells. Root tip squash: stain (e.g. toluidine blue), macerate in acid to separate cells, squash, and view.</p>
<h3>Meiosis</h3>
<ul>
<li>Two divisions, producing four <b>haploid</b>, genetically different gametes.</li>
<li>Variation from <b>independent assortment</b> (homologous pairs line up randomly in meiosis I) and <b>crossing over</b> (exchange of alleles between non-sister chromatids at chiasmata).</li>
<li><b>Linkage</b>: genes on the same chromosome tend to be inherited together unless crossing over separates them.</li>
</ul>
<h3>Fertilisation</h3>
<p><b>Mammals</b>: sperm reaches the egg; <b>acrosome reaction</b> releases enzymes that digest the zona pellucida; sperm and egg membranes fuse; the <b>cortical reaction</b> hardens the zona pellucida to block other sperm; nuclei fuse.</p>
<p><b>Plants</b>: pollen grain lands on stigma; pollen tube grows down the style (digesting tissue) to the ovule through the micropyle; two male nuclei: one fertilises the egg (zygote), the other fuses with polar nuclei (triploid endosperm): <b>double fertilisation</b>.</p>
`,
  quiz: [
    { q: "During which stage is DNA replicated?", o: ["S phase of interphase", "Prophase", "Anaphase", "Cytokinesis"], a: 0, e: "" },
    { q: "Chromosomes line up on the equator in…", o: ["Metaphase", "Prophase", "Anaphase", "Telophase"], a: 0, e: "" },
    { q: "Sister chromatids separate in…", o: ["Anaphase", "Metaphase", "Prophase", "Interphase"], a: 0, e: "" },
    { q: "Mitosis produces…", o: ["Two genetically identical diploid cells", "Four haploid cells", "Two haploid cells", "Four identical cells"], a: 0, e: "" },
    { q: "Which process causes variation in meiosis?", o: ["Crossing over and independent assortment", "DNA replication", "Cytokinesis", "Spindle formation"], a: 0, e: "" },
    { q: "Mitotic index = …", o: ["Cells in mitosis ÷ total cells", "Total cells ÷ cells in mitosis", "Cells in interphase ÷ total", "Number of chromosomes"], a: 0, e: "" },
    { q: "The acrosome reaction…", o: ["Releases enzymes to digest the zona pellucida", "Hardens the zona pellucida", "Fuses nuclei", "Forms a pollen tube"], a: 0, e: "" },
    { q: "In plant double fertilisation, one male nucleus fuses with the polar nuclei to form…", o: ["Triploid endosperm", "The zygote", "The pollen tube", "The seed coat"], a: 0, e: "" },
    { q: "Why does the cortical reaction happen?", o: ["To stop more than one sperm fertilising the egg", "To release the egg", "To start meiosis", "To digest the sperm"], a: 0, e: "" }
  ],
  flashcards: [
    ["Interphase", "G1 growth; S DNA replication; G2 preparation"],
    ["Prophase", "Chromosomes condense; envelope breaks down; spindle forms"],
    ["Metaphase", "Chromosomes on equator attached to spindle"],
    ["Anaphase", "Centromeres split; chromatids to poles"],
    ["Telophase", "Nuclear envelopes reform"],
    ["Mitotic index", "Cells in mitosis ÷ total cells"],
    ["Meiosis outcome", "Four haploid, genetically different cells"],
    ["Sources of variation in meiosis", "Independent assortment; crossing over"],
    ["Acrosome and cortical reactions", "Enzymes digest zona pellucida; zona hardens to block other sperm"],
    ["Double fertilisation", "Zygote + triploid endosperm"]
  ]
});

S2Data.add({
  id: "3a", group: 3, y1: true, title: "Biodiversity, adaptation and classification",
  summary: "Measuring biodiversity, niches and adaptations, natural selection, classification and conservation.",
  notes: `
<h3>Biodiversity</h3>
<ul>
<li><b>Species richness</b>: number of species in an area. <b>Genetic diversity</b>: variety of alleles within a species.</li>
<li><b>Heterozygosity index</b> H = number of heterozygotes ÷ number of individuals.</li>
<li><b>Index of diversity</b> D = N(N − 1) ÷ Σn(n − 1), which takes account of both richness and the number of individuals of each species.</li>
<li><b>Endemism</b>: a species found only in one place.</li>
</ul>
<h3>Niches and adaptation</h3>
<p>A <b>niche</b> is the role of a species in its habitat (what it eats, where it lives, its interactions). Adaptations can be anatomical, physiological or behavioural.</p>
<h3>Natural selection and Hardy–Weinberg</h3>
<ol>
<li>Variation exists due to mutation.</li>
<li>A selection pressure acts; individuals with advantageous alleles are more likely to survive and reproduce.</li>
<li>They pass on their alleles, so the allele frequency increases over generations.</li>
</ol>
<div class="box box-key"><span class="box-title">Hardy–Weinberg</span>p + q = 1 and p<sup>2</sup> + 2pq + q<sup>2</sup> = 1. Used to estimate allele frequencies and test whether a population is evolving (assumes no selection, mutation, migration, large population, random mating).</div>
<h3>Classification</h3>
<p>Domain → kingdom → phylum → class → order → family → genus → species. Three domains: Bacteria, Archaea, Eukarya. Classification is revised as new evidence (DNA sequences, protein structure) emerges, and new findings are checked by peer review at conferences and in journals.</p>
<h3>Conservation</h3>
<p><b>Zoos</b>: captive breeding, reintroduction, education, research; maintain genetic diversity with stud books. <b>Seed banks</b>: store seeds at low temperature and humidity; test germination regularly.</p>
`,
  quiz: [
    { q: "Species richness is…", o: ["The number of different species in an area", "The number of individuals", "Genetic variety within a species", "The size of the habitat"], a: 0, e: "" },
    { q: "A niche is…", o: ["The role of a species in its habitat", "Where it lives only", "Its population size", "Its genus"], a: 0, e: "" },
    { q: "In Hardy–Weinberg, if q² = 0.04, q = …", o: ["0.2", "0.04", "0.8", "0.16"], a: 0, e: "" },
    { q: "If q = 0.2, the frequency of heterozygotes (2pq) is…", o: ["0.32", "0.16", "0.64", "0.04"], a: 0, e: "2 × 0.8 × 0.2." },
    { q: "Which is the correct order (largest first)?", o: ["Domain, kingdom, phylum, class", "Kingdom, domain, class, phylum", "Phylum, class, domain, order", "Class, order, family, phylum"], a: 0, e: "" },
    { q: "The three domains are…", o: ["Bacteria, Archaea, Eukarya", "Plants, animals, fungi", "Prokaryotes, viruses, eukaryotes", "Protoctista, fungi, bacteria"], a: 0, e: "" },
    { q: "Seed banks store seeds…", o: ["Cold and dry", "Warm and moist", "In soil", "In water"], a: 0, e: "" },
    { q: "Heterozygosity index measures…", o: ["Genetic diversity", "Species richness", "Population size", "Niche width"], a: 0, e: "" },
    { q: "Which is a behavioural adaptation?", o: ["Migration", "Thick fur", "Producing antifreeze proteins", "Large ears"], a: 0, e: "" }
  ],
  flashcards: [
    ["Biodiversity", "Variety of living organisms: species richness and genetic diversity"],
    ["Heterozygosity index", "Heterozygotes ÷ total individuals"],
    ["Index of diversity", "D = N(N − 1) ÷ Σn(n − 1)"],
    ["Endemic", "Found only in one place"],
    ["Niche", "Role of a species in its habitat"],
    ["Natural selection", "Variation → selection pressure → survival and reproduction → allele frequency changes"],
    ["Hardy–Weinberg equations", "p + q = 1; p² + 2pq + q² = 1"],
    ["Taxonomic hierarchy", "Domain, kingdom, phylum, class, order, family, genus, species"],
    ["Three domains", "Bacteria, Archaea, Eukarya"],
    ["Conservation methods", "Zoos (captive breeding, reintroduction) and seed banks"]
  ]
});

S2Data.add({
  id: "4b", group: 4, y1: true, title: "Membranes, transport and gas exchange",
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
  id: "4c", group: 4, y1: true, title: "The heart and circulation",
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
  id: "5a", group: 5, y2: true, title: "Respiration",
  summary: "ATP, glycolysis, the link reaction, Krebs cycle, oxidative phosphorylation and anaerobic respiration.",
  notes: `
<h3>ATP</h3>
<p>Adenosine triphosphate: hydrolysis to ADP + P<sub>i</sub> releases energy in small, manageable amounts. ATP is regenerated by <b>phosphorylation</b> during respiration.</p>
<h3>Stages of aerobic respiration</h3>
<table>
<tr><th>Stage</th><th>Location</th><th>Key events</th></tr>
<tr><td>Glycolysis</td><td>Cytoplasm</td><td>Glucose phosphorylated (2 ATP used); split into 2 triose phosphate; oxidised to 2 pyruvate; net 2 ATP, 2 reduced NAD</td></tr>
<tr><td>Link reaction</td><td>Mitochondrial matrix</td><td>Pyruvate → acetyl group (CO<sub>2</sub> removed, NAD reduced); joins coenzyme A → acetyl CoA</td></tr>
<tr><td>Krebs cycle</td><td>Matrix</td><td>Acetyl (2C) + oxaloacetate (4C) → citrate (6C); regenerated, releasing 2 CO<sub>2</sub>, reduced NAD, reduced FAD, 1 ATP per turn</td></tr>
<tr><td>Oxidative phosphorylation</td><td>Inner membrane (cristae)</td><td>Electrons from reduced NAD/FAD pass along the electron transport chain; H<sup>+</sup> pumped into intermembrane space; flow back through ATP synthase (chemiosmosis) makes ATP; <b>oxygen is the final electron acceptor</b>, forming water</td></tr>
</table>
<p>Total yield: about 30–32 ATP per glucose.</p>
<h3>Anaerobic respiration</h3>
<p>Without oxygen, the electron transport chain stops. In animals, pyruvate is reduced to <b>lactate</b> (regenerating NAD so glycolysis can continue), giving 2 ATP per glucose. Lactate is later converted back to pyruvate/glucose in the liver, using oxygen (the <b>oxygen debt</b>).</p>
<p>Practical: measure respiration rate with a <b>respirometer</b> (soda lime absorbs CO<sub>2</sub>; oxygen uptake moves a coloured liquid).</p>
`,
  quiz: [
    { q: "Where does glycolysis occur?", o: ["Cytoplasm", "Mitochondrial matrix", "Cristae", "Nucleus"], a: 0, e: "" },
    { q: "Net ATP from glycolysis per glucose?", o: ["2", "4", "32", "0"], a: 0, e: "" },
    { q: "The final electron acceptor is…", o: ["Oxygen", "NAD", "Pyruvate", "Water"], a: 0, e: "" },
    { q: "Where is the electron transport chain?", o: ["Inner mitochondrial membrane", "Matrix", "Cytoplasm", "Outer membrane"], a: 0, e: "" },
    { q: "In the link reaction, pyruvate becomes…", o: ["Acetyl CoA, releasing CO₂", "Lactate", "Glucose", "Citrate"], a: 0, e: "" },
    { q: "Why is lactate made in anaerobic respiration?", o: ["To regenerate NAD so glycolysis continues", "To make more ATP directly", "To store oxygen", "To produce CO₂"], a: 0, e: "" },
    { q: "Chemiosmosis is…", o: ["H⁺ flowing through ATP synthase to make ATP", "Diffusion of glucose", "Osmosis of water", "Breakdown of lactate"], a: 0, e: "" },
    { q: "How many CO₂ are released per turn of the Krebs cycle?", o: ["2", "1", "3", "6"], a: 0, e: "" },
    { q: "In a respirometer, soda lime…", o: ["Absorbs CO₂", "Releases O₂", "Absorbs water", "Produces glucose"], a: 0, e: "" }
  ],
  flashcards: [
    ["ATP hydrolysis", "ATP → ADP + Pi, releasing energy"],
    ["Glycolysis", "Cytoplasm; glucose → 2 pyruvate; net 2 ATP, 2 NADH"],
    ["Link reaction", "Pyruvate → acetyl CoA + CO₂ + NADH (matrix)"],
    ["Krebs cycle", "Matrix; acetyl + oxaloacetate → citrate; CO₂, NADH, FADH, ATP"],
    ["Oxidative phosphorylation", "ETC on cristae; H⁺ gradient; ATP synthase; O₂ final acceptor"],
    ["Chemiosmosis", "H⁺ flow through ATP synthase drives ATP synthesis"],
    ["Anaerobic respiration (animals)", "Pyruvate → lactate; regenerates NAD; 2 ATP"],
    ["Oxygen debt", "O₂ needed to break down lactate after exercise"],
    ["Respirometer", "Measures O₂ uptake; soda lime absorbs CO₂"]
  ]
});

S2Data.add({
  id: "5b", group: 5, y2: true, title: "Photosynthesis",
  summary: "Chloroplast structure, the light-dependent reactions, the Calvin cycle and limiting factors.",
  notes: `
<h3>Chloroplasts</h3>
<p>Double membrane; <b>thylakoids</b> stacked into <b>grana</b> (contain chlorophyll and electron carriers: site of the light-dependent reactions); <b>stroma</b> (fluid with enzymes: site of the light-independent reactions).</p>
<h3>Light-dependent reactions (thylakoid membranes)</h3>
<ol>
<li>Light excites electrons in chlorophyll (photosystem II) to a higher energy level; they pass along an <b>electron transport chain</b>.</li>
<li>Energy released pumps H<sup>+</sup> into the thylakoid space; H<sup>+</sup> flows back through ATP synthase, making <b>ATP</b> (photophosphorylation).</li>
<li><b>Photolysis</b>: water is split to replace lost electrons: 2H<sub>2</sub>O → 4H<sup>+</sup> + 4e<sup>−</sup> + O<sub>2</sub>.</li>
<li>Electrons re-excited in photosystem I reduce <b>NADP to reduced NADP</b> (NADPH).</li>
</ol>
<h3>Light-independent reactions: the Calvin cycle (stroma)</h3>
<ol>
<li>CO<sub>2</sub> combines with <b>ribulose bisphosphate (RuBP)</b>, catalysed by <b>RUBISCO</b>, forming two molecules of <b>glycerate 3-phosphate (GP)</b>.</li>
<li>GP is reduced to <b>glyceraldehyde 3-phosphate (GALP)</b> using ATP and reduced NADP.</li>
<li>Most GALP regenerates RuBP (using ATP); some is used to make glucose, amino acids and lipids.</li>
</ol>
<h3>Limiting factors and productivity</h3>
<ul>
<li>Light intensity, CO<sub>2</sub> concentration and temperature can each limit the rate.</li>
<li><b>GPP</b> (gross primary productivity) = rate at which energy is fixed by photosynthesis. <b>NPP = GPP − R</b> (respiratory losses).</li>
<li>Efficiency of energy transfer between trophic levels = energy in next level ÷ energy in previous level × 100 (often ~10%).</li>
</ul>
<p>Practical: measure the rate of O<sub>2</sub> production by pondweed at different light intensities (move the lamp; light intensity ∝ 1/d<sup>2</sup>).</p>
`,
  quiz: [
    { q: "Where do the light-dependent reactions occur?", o: ["Thylakoid membranes", "Stroma", "Cytoplasm", "Mitochondria"], a: 0, e: "" },
    { q: "Photolysis produces…", o: ["H⁺, electrons and oxygen", "Glucose", "CO₂", "ATP only"], a: 0, e: "" },
    { q: "Which enzyme fixes CO₂ in the Calvin cycle?", o: ["RUBISCO", "ATP synthase", "Catalase", "Amylase"], a: 0, e: "" },
    { q: "CO₂ + RuBP forms…", o: ["Two molecules of GP", "GALP", "Glucose", "NADP"], a: 0, e: "" },
    { q: "Which products of the light-dependent reactions are used in the Calvin cycle?", o: ["ATP and reduced NADP", "O₂ and water", "Glucose and CO₂", "RuBP and GP"], a: 0, e: "" },
    { q: "NPP = …", o: ["GPP − respiratory losses", "GPP + R", "R − GPP", "Total biomass"], a: 0, e: "" },
    { q: "Most GALP is used to…", o: ["Regenerate RuBP", "Make starch only", "Make oxygen", "Make water"], a: 0, e: "" },
    { q: "If light intensity falls, GP levels…", o: ["Rise (less ATP/NADPH to reduce it)", "Fall", "Stay the same", "Drop to zero instantly"], a: 0, e: "" },
    { q: "Light intensity from a lamp is proportional to…", o: ["1/d²", "d", "d²", "1/d"], a: 0, e: "" }
  ],
  flashcards: [
    ["Thylakoid / stroma", "Light-dependent / light-independent reactions"],
    ["Photolysis", "2H₂O → 4H⁺ + 4e⁻ + O₂"],
    ["Photophosphorylation", "ATP made using light energy via electron transport and ATP synthase"],
    ["Products of light-dependent stage", "ATP, reduced NADP, O₂"],
    ["Calvin cycle step 1", "CO₂ + RuBP → 2 GP (RUBISCO)"],
    ["Calvin cycle step 2", "GP → GALP using ATP and reduced NADP"],
    ["Fate of GALP", "Most regenerates RuBP; some → glucose, amino acids, lipids"],
    ["GPP and NPP", "NPP = GPP − R"],
    ["Limiting factors", "Light intensity, CO₂ concentration, temperature"]
  ]
});

S2Data.add({
  id: "6b", group: 6, y2: true, title: "Pathogens: bacteria and viruses",
  summary: "Structure of bacteria and viruses, TB and HIV, and how they cause disease.",
  notes: `
<h3>Bacteria and viruses</h3>
<table>
<tr><th>Bacteria</th><th>Viruses</th></tr>
<tr><td>Prokaryotic cells; ~1–5 μm</td><td>Not cells; ~20–300 nm</td></tr>
<tr><td>Cell wall, circular DNA, plasmids, 70S ribosomes</td><td>Nucleic acid (DNA or RNA) in a protein capsid; some have an envelope</td></tr>
<tr><td>Reproduce by binary fission</td><td>Replicate only inside host cells</td></tr>
</table>
<h3>Virus replication</h3>
<ul>
<li><b>Lytic cycle</b>: virus attaches, injects nucleic acid, host makes new viruses, cell bursts (lysis).</li>
<li><b>Latency</b>: viral DNA inserted into host DNA and remains dormant before becoming active.</li>
</ul>
<h3>Tuberculosis (TB)</h3>
<ul>
<li>Caused by the bacterium <i>Mycobacterium tuberculosis</i>, spread by droplets.</li>
<li>Bacteria are engulfed by macrophages in the lungs but survive inside them. A <b>tubercle</b> forms; bacteria may lie dormant.</li>
<li>If the immune system weakens, bacteria multiply, destroying lung tissue; symptoms include coughing (blood), weight loss, fever.</li>
</ul>
<h3>HIV and AIDS</h3>
<ul>
<li>HIV is a retrovirus (RNA, reverse transcriptase) spread by body fluids.</li>
<li>It infects <b>T helper cells</b> (binds to CD4 receptors), copying its RNA into DNA and inserting it into the host genome.</li>
<li>T helper cell numbers fall over years, so the immune response weakens: <b>AIDS</b>, with opportunistic infections (e.g. TB).</li>
</ul>
<h3>How pathogens evade the immune system</h3>
<p>TB hides inside macrophages and suppresses antigen presentation. HIV kills T helper cells and its antigens mutate rapidly (antigenic variability).</p>
`,
  quiz: [
    { q: "Which feature do bacteria have but viruses don't?", o: ["Ribosomes", "Nucleic acid", "Protein", "Ability to infect cells"], a: 0, e: "" },
    { q: "What causes TB?", o: ["Mycobacterium tuberculosis", "A virus", "A fungus", "A protist"], a: 0, e: "" },
    { q: "Which cells does HIV infect?", o: ["T helper cells", "Red blood cells", "B cells only", "Neurones"], a: 0, e: "" },
    { q: "HIV is a retrovirus, so it uses…", o: ["Reverse transcriptase to make DNA from RNA", "DNA polymerase only", "Ribosomes of its own", "Binary fission"], a: 0, e: "" },
    { q: "In the lytic cycle, the host cell…", o: ["Bursts, releasing new viruses", "Becomes dormant", "Divides normally", "Is unaffected"], a: 0, e: "" },
    { q: "How does TB evade the immune system?", o: ["Survives inside macrophages", "Has no antigens", "Kills all B cells", "Is too large to engulf"], a: 0, e: "" },
    { q: "Why does AIDS lead to opportunistic infections?", o: ["Loss of T helper cells weakens the immune response", "HIV produces toxins", "Antibiotics stop working", "Red blood cells are destroyed"], a: 0, e: "" },
    { q: "Bacteria reproduce by…", o: ["Binary fission", "Mitosis and meiosis", "Lytic cycle", "Budding only"], a: 0, e: "" },
    { q: "A viral capsid is made of…", o: ["Protein", "Lipid", "Peptidoglycan", "Cellulose"], a: 0, e: "" }
  ],
  flashcards: [
    ["Bacterial structure", "Cell wall, circular DNA, plasmids, 70S ribosomes"],
    ["Virus structure", "DNA/RNA in a protein capsid; some have an envelope"],
    ["Lytic cycle", "Attach → inject → replicate → lysis"],
    ["Latency", "Viral DNA dormant in host genome"],
    ["TB cause and spread", "Mycobacterium tuberculosis; droplets"],
    ["TB in the body", "Survives in macrophages; tubercles; can be dormant"],
    ["HIV target", "T helper cells (CD4 receptor)"],
    ["Retrovirus", "RNA virus using reverse transcriptase"],
    ["AIDS", "Low T helper count → opportunistic infections"]
  ]
});

S2Data.add({
  id: "6c", group: 6, y2: true, title: "The immune system and antibiotics",
  summary: "Non-specific defences, the specific immune response, immunity and vaccination, and antibiotic resistance.",
  notes: `
<h3>Non-specific defences</h3>
<p>Skin barrier, mucus and cilia, stomach acid, lysozyme in tears, inflammation (histamine increases blood flow and permeability), fever, <b>phagocytosis</b> by neutrophils and macrophages, and interferon (inhibits viral replication).</p>
<h3>Specific immune response</h3>
<ol>
<li>A macrophage engulfs a pathogen and displays its <b>antigens</b> on its surface (antigen-presenting cell).</li>
<li>A <b>T helper cell</b> with a complementary receptor binds and is activated; it divides and releases cytokines.</li>
<li><b>Humoral response</b>: B cells with complementary antibodies are activated, divide (clonal selection) and differentiate into <b>plasma cells</b>, which secrete antibodies, and <b>memory B cells</b>.</li>
<li><b>Cell-mediated response</b>: T killer cells destroy infected body cells. Memory T cells are also made.</li>
</ol>
<p><b>Antibodies</b>: Y-shaped proteins with variable regions that bind specific antigens, causing agglutination, neutralising toxins, and marking pathogens for phagocytosis.</p>
<h3>Immunity</h3>
<ul>
<li>Secondary response is faster and larger, due to memory cells.</li>
<li><b>Active</b> immunity: own antibodies made (natural infection or vaccination). <b>Passive</b>: antibodies given (across placenta, breast milk, injection); short-lived.</li>
<li>Herd immunity: vaccinating enough people protects the unvaccinated.</li>
</ul>
<h3>Antibiotics</h3>
<ul>
<li><b>Bactericidal</b> (kill bacteria, e.g. penicillin damages cell walls) or <b>bacteriostatic</b> (stop growth, e.g. tetracycline inhibits protein synthesis).</li>
<li>Antibiotic resistance evolves by natural selection: random mutations; resistant bacteria survive and reproduce. Reduce it by finishing courses, not prescribing for viral infections, and hospital hygiene.</li>
<li>Hospital-acquired infections (e.g. MRSA) are a particular problem.</li>
</ul>
`,
  quiz: [
    { q: "Which cell presents antigens to T helper cells?", o: ["Macrophage", "Red blood cell", "Plasma cell", "Platelet"], a: 0, e: "" },
    { q: "Plasma cells…", o: ["Secrete antibodies", "Engulf pathogens", "Kill infected cells", "Present antigens"], a: 0, e: "" },
    { q: "Why is the secondary response faster?", o: ["Memory cells are already present", "More antigens", "Antibodies last forever", "Pathogens are weaker"], a: 0, e: "" },
    { q: "Vaccination gives…", o: ["Active artificial immunity", "Passive natural immunity", "Passive artificial immunity", "No immunity"], a: 0, e: "" },
    { q: "Antibodies from breast milk give…", o: ["Passive natural immunity", "Active immunity", "Lifelong immunity", "Memory cells"], a: 0, e: "" },
    { q: "Penicillin is bactericidal because it…", o: ["Weakens bacterial cell walls", "Stops protein synthesis", "Kills viruses", "Stops DNA replication in humans"], a: 0, e: "" },
    { q: "Antibiotic resistance arises because…", o: ["Random mutations; resistant bacteria are selected", "Bacteria learn", "Antibiotics cause the mutation directly", "Humans become resistant"], a: 0, e: "" },
    { q: "T killer cells…", o: ["Destroy infected body cells", "Make antibodies", "Present antigens", "Make histamine"], a: 0, e: "" },
    { q: "Interferon…", o: ["Inhibits viral replication", "Kills bacteria", "Is an antibody", "Causes clotting"], a: 0, e: "" }
  ],
  flashcards: [
    ["Non-specific defences", "Skin, mucus, lysozyme, inflammation, fever, phagocytosis, interferon"],
    ["Antigen-presenting cell", "Displays pathogen antigens (e.g. macrophage)"],
    ["T helper cells", "Activate B cells and T killer cells via cytokines"],
    ["Clonal selection", "Specific B/T cells divide when activated"],
    ["Plasma cells", "Secrete antibodies"],
    ["Memory cells", "Fast secondary response"],
    ["Active vs passive immunity", "Own antibodies (long-lasting) vs given antibodies (short-lived)"],
    ["Bactericidal vs bacteriostatic", "Kills bacteria vs stops growth"],
    ["Antibiotic resistance", "Mutation + selection pressure from antibiotic use"],
    ["Herd immunity", "Enough immune people protect the unvaccinated"]
  ]
});

S2Data.add({
  id: "7a", group: 7, y2: true, title: "Forensics: DNA profiling and time of death",
  summary: "PCR, gel electrophoresis, DNA profiling, and estimating time of death.",
  notes: `
<h3>DNA profiling</h3>
<p>Uses <b>short tandem repeats (STRs)</b>: non-coding regions where short sequences repeat a variable number of times, so they differ between people.</p>
<ol>
<li>Extract DNA from a sample (blood, hair, saliva).</li>
<li>Amplify it by <b>PCR</b>: heat to 95 °C to separate strands; cool to ~55 °C so <b>primers</b> anneal; 72 °C for <b>Taq polymerase</b> (thermostable) to extend new strands. Repeat cycles: DNA doubles each cycle.</li>
<li>Cut with <b>restriction enzymes</b> (or amplify specific STRs).</li>
<li><b>Gel electrophoresis</b>: DNA (negatively charged) moves towards the positive electrode through agarose gel; <b>smaller fragments move further</b>.</li>
<li>Fragments are visualised with fluorescent tags or probes and compared.</li>
</ol>
<p>Uses: identifying suspects, paternity testing, identifying remains.</p>
<h3>Time of death</h3>
<ul>
<li><b>Body temperature</b>: falls after death (algor mortis) at a roughly predictable rate.</li>
<li><b>Rigor mortis</b>: muscles stiffen as ATP runs out (begins ~4–6 hours; passes after ~36 hours).</li>
<li><b>Forensic entomology</b>: the species and stage of insects (e.g. blowfly larvae) on the body.</li>
<li><b>Stage of decomposition</b>: autolysis then bacterial decomposition.</li>
<li>Extent of decomposition is affected by temperature, humidity, and whether the body is buried or in water.</li>
</ul>
`,
  quiz: [
    { q: "PCR is used to…", o: ["Amplify DNA", "Cut DNA", "Separate DNA fragments", "Sequence proteins"], a: 0, e: "" },
    { q: "Why is Taq polymerase used in PCR?", o: ["It's thermostable (doesn't denature at high temperature)", "It cuts DNA", "It's cheap only", "It binds primers"], a: 0, e: "" },
    { q: "What temperature separates DNA strands in PCR?", o: ["About 95 °C", "About 55 °C", "About 37 °C", "About 72 °C"], a: 0, e: "" },
    { q: "In gel electrophoresis, DNA moves towards…", o: ["The positive electrode", "The negative electrode", "Neither", "The top of the gel"], a: 0, e: "" },
    { q: "Which fragments travel furthest in a gel?", o: ["The smallest", "The largest", "All equally", "The most charged per base"], a: 0, e: "" },
    { q: "STRs are useful for profiling because they…", o: ["Vary in number of repeats between people", "Code for proteins", "Are identical in everyone", "Are in mitochondria only"], a: 0, e: "" },
    { q: "Rigor mortis happens because…", o: ["ATP runs out, so myosin stays bound to actin", "Muscles grow", "Calcium leaves muscles", "Temperature rises"], a: 0, e: "" },
    { q: "Forensic entomology uses…", o: ["Insect species and life stages", "Tree rings", "Blood type only", "Body height"], a: 0, e: "" },
    { q: "After 10 PCR cycles, one DNA molecule gives about…", o: ["1024 copies", "10 copies", "20 copies", "100 copies"], a: 0, e: "2¹⁰." }
  ],
  flashcards: [
    ["PCR stages", "95 °C denature; ~55 °C primers anneal; 72 °C Taq extends"],
    ["Primers", "Short DNA sequences marking where copying starts"],
    ["Taq polymerase", "Thermostable DNA polymerase"],
    ["Gel electrophoresis", "DNA moves to + electrode; smaller fragments further"],
    ["STRs", "Short tandem repeats; vary between individuals"],
    ["Uses of DNA profiling", "Forensics, paternity, identifying remains"],
    ["Time of death clues", "Body temperature, rigor mortis, insects, decomposition"],
    ["Rigor mortis", "Muscles stiffen as ATP runs out"],
    ["PCR doubling", "2ⁿ copies after n cycles"]
  ]
});

S2Data.add({
  id: "7b", group: 7, y2: true, title: "Stem cells and gene expression",
  summary: "Totipotent and pluripotent stem cells, differentiation, epigenetics and polygenic inheritance.",
  notes: `
<h3>Stem cells</h3>
<ul>
<li><b>Totipotent</b>: can become any cell type, including extra-embryonic tissues (early embryo up to ~16 cells).</li>
<li><b>Pluripotent</b>: can become almost any cell type (embryonic stem cells from the blastocyst).</li>
<li><b>Multipotent</b>: can become a limited range (adult stem cells, e.g. bone marrow).</li>
<li><b>Induced pluripotent stem cells (iPS)</b>: adult cells reprogrammed by adding transcription factors.</li>
</ul>
<p>Uses: treating diseases (e.g. replacing damaged tissue). Ethical issues: destruction of embryos (embryonic stem cells), consent, safety (risk of tumours). Regulated in the UK by the HFEA.</p>
<h3>Differentiation and gene expression</h3>
<p>All cells contain the same genes, but different genes are <b>switched on</b> in different cells. <b>Transcription factors</b> bind to promoter regions of DNA, allowing (or blocking) RNA polymerase to transcribe a gene. Specific proteins are then made, so the cell becomes specialised.</p>
<h3>Epigenetics</h3>
<p>Changes in gene expression without changing the DNA base sequence:</p>
<ul>
<li><b>DNA methylation</b>: methyl groups added to cytosine bases → gene usually switched off.</li>
<li><b>Histone modification</b>: acetylation loosens chromatin (genes more accessible, switched on); deacetylation tightens it.</li>
<li>Epigenetic marks can be influenced by the environment and some can be inherited.</li>
</ul>
<h3>Phenotype = genotype + environment</h3>
<ul>
<li><b>Polygenic</b> characteristics (e.g. height, skin colour) are controlled by many genes, giving <b>continuous variation</b> (normal distribution).</li>
<li>Monogenic characteristics give discontinuous variation.</li>
<li>Environment affects phenotype too: e.g. diet affects height; chlorosis in plants from lack of light or minerals.</li>
<li>Some conditions (e.g. cancer) involve multiple genes and environmental factors.</li>
</ul>
`,
  quiz: [
    { q: "Totipotent stem cells can…", o: ["Become any cell type including extra-embryonic tissues", "Become only blood cells", "Not divide", "Become a limited range of cells"], a: 0, e: "" },
    { q: "Embryonic stem cells from the blastocyst are…", o: ["Pluripotent", "Totipotent", "Multipotent", "Unipotent"], a: 0, e: "" },
    { q: "Transcription factors…", o: ["Bind to DNA to switch genes on or off", "Translate mRNA", "Replicate DNA", "Break down proteins"], a: 0, e: "" },
    { q: "DNA methylation usually…", o: ["Switches a gene off", "Switches a gene on", "Changes the base sequence", "Breaks DNA"], a: 0, e: "" },
    { q: "Histone acetylation makes genes…", o: ["More accessible (switched on)", "Less accessible", "Mutated", "Deleted"], a: 0, e: "" },
    { q: "Height shows continuous variation because it is…", o: ["Polygenic and affected by environment", "Controlled by one gene", "Not inherited", "Sex-linked"], a: 0, e: "" },
    { q: "Why do differentiated cells differ if they have the same DNA?", o: ["Different genes are expressed", "They have different genes", "They lose genes", "They have different chromosomes"], a: 0, e: "" },
    { q: "Induced pluripotent stem cells are made from…", o: ["Adult cells reprogrammed with transcription factors", "Embryos", "Bacteria", "Plant cells"], a: 0, e: "" },
    { q: "Epigenetic changes…", o: ["Alter gene expression without changing the base sequence", "Change the base sequence", "Only occur in plants", "Are always inherited"], a: 0, e: "" }
  ],
  flashcards: [
    ["Totipotent", "Any cell type including extra-embryonic (early embryo)"],
    ["Pluripotent", "Almost any cell type (embryonic stem cells)"],
    ["Multipotent", "Limited range (adult stem cells)"],
    ["iPS cells", "Adult cells reprogrammed using transcription factors"],
    ["Differentiation", "Different genes switched on → specialised proteins"],
    ["Transcription factor", "Protein binding DNA promoter to regulate transcription"],
    ["DNA methylation", "Methyl groups on cytosine; silences genes"],
    ["Histone acetylation", "Loosens chromatin; genes expressed"],
    ["Polygenic", "Many genes; continuous variation"],
    ["Phenotype", "Genotype + environment"]
  ]
});

S2Data.add({
  id: "8b", group: 8, y2: true, title: "Evolution and speciation",
  summary: "Natural selection revisited, isolation and speciation, and molecular evidence for evolution.",
  notes: `
<h3>Natural selection and allele frequency</h3>
<p>Mutation creates new alleles; selection pressures (e.g. climate change, predators) favour some phenotypes; allele frequencies change in the <b>gene pool</b>.</p>
<h3>Speciation</h3>
<p>A <b>species</b> is a group of organisms that can interbreed to produce fertile offspring.</p>
<ol>
<li>Populations become <b>reproductively isolated</b>, so gene flow stops.</li>
<li>Different mutations occur and different selection pressures act in each population.</li>
<li>Allele frequencies diverge until the populations can no longer interbreed to produce fertile offspring.</li>
</ol>
<ul>
<li><b>Allopatric</b> speciation: geographical isolation (e.g. mountains, rivers).</li>
<li><b>Sympatric</b> speciation: in the same area, through ecological isolation (different habitats), temporal isolation (different breeding times), behavioural isolation (courtship) or mechanical/gametic incompatibility.</li>
</ul>
<h3>Molecular evidence</h3>
<ul>
<li>Comparing DNA base sequences and protein amino acid sequences: more similar sequences → more closely related, more recent common ancestor.</li>
<li>Scientific community validates new evidence through peer review, conferences and repeating studies.</li>
</ul>
`,
  quiz: [
    { q: "A species is defined as…", o: ["Organisms that interbreed to produce fertile offspring", "Organisms that look alike", "Any population", "Organisms in the same habitat"], a: 0, e: "" },
    { q: "Allopatric speciation involves…", o: ["Geographical isolation", "Different breeding seasons in one area", "No isolation", "Hybridisation only"], a: 0, e: "" },
    { q: "Temporal isolation means…", o: ["Breeding at different times", "Living in different places", "Different courtship", "Incompatible genitals"], a: 0, e: "" },
    { q: "Why does reproductive isolation lead to speciation?", o: ["Gene flow stops, so allele frequencies diverge", "Mutations stop", "Selection stops", "Populations merge"], a: 0, e: "" },
    { q: "Which provides molecular evidence of relatedness?", o: ["DNA base sequences", "Body size", "Diet", "Habitat"], a: 0, e: "" },
    { q: "A gene pool is…", o: ["All the alleles in a population", "All the genes in one organism", "A habitat", "A breeding group"], a: 0, e: "" },
    { q: "New alleles arise by…", o: ["Mutation", "Selection", "Isolation", "Migration only"], a: 0, e: "" },
    { q: "Sympatric speciation occurs…", o: ["In the same geographical area", "Only on islands", "Only across mountains", "Never in animals"], a: 0, e: "" },
    { q: "Peer review helps…", o: ["Validate scientific findings", "Speed up publication without checks", "Hide data", "Replace experiments"], a: 0, e: "" }
  ],
  flashcards: [
    ["Species", "Can interbreed to produce fertile offspring"],
    ["Gene pool", "All alleles in a population"],
    ["Reproductive isolation", "Prevents gene flow between populations"],
    ["Allopatric speciation", "Geographical isolation"],
    ["Sympatric speciation", "Same area: ecological, temporal or behavioural isolation"],
    ["Speciation steps", "Isolation → different mutations/selection → allele frequencies diverge"],
    ["Molecular evidence", "DNA/protein sequence similarity shows relatedness"],
    ["Validating science", "Peer review, conferences, repetition"]
  ]
});

S2Data.add({
  id: "9a", group: 9, y2: true, title: "Homeostasis and thermoregulation",
  summary: "Negative feedback, thermoregulation, hormones and gene expression.",
  notes: `
<h3>Homeostasis</h3>
<p>Maintaining a stable internal environment within narrow limits. <b>Negative feedback</b>: a change from the set point is detected by receptors; effectors bring about a response that reverses the change. <b>Positive feedback</b> amplifies a change (e.g. oxytocin in childbirth).</p>
<h3>Thermoregulation</h3>
<p>The <b>hypothalamus</b> detects blood temperature (and receives signals from skin thermoreceptors).</p>
<table>
<tr><th>Too hot</th><th>Too cold</th></tr>
<tr><td>Vasodilation of skin arterioles → more heat lost by radiation</td><td>Vasoconstriction → less heat lost</td></tr>
<tr><td>Sweating → evaporation removes heat</td><td>Shivering → respiration releases heat</td></tr>
<tr><td>Hair erector muscles relax</td><td>Hairs raised to trap air</td></tr>
<tr><td>Lower metabolic rate</td><td>Thyroxine/adrenaline raise metabolic rate</td></tr>
</table>
<h3>Hormones and gene expression</h3>
<ul>
<li><b>Peptide hormones</b> (e.g. adrenaline, insulin) can't cross the membrane: they bind to receptors and activate second messengers (e.g. cAMP), which activate enzymes or transcription factors.</li>
<li><b>Steroid hormones</b> (e.g. testosterone) are lipid-soluble: they diffuse through the membrane, bind to receptors inside the cell, and the complex acts as a transcription factor, switching genes on.</li>
</ul>
`,
  quiz: [
    { q: "Which part of the brain controls body temperature?", o: ["Hypothalamus", "Medulla", "Cerebellum", "Pituitary"], a: 0, e: "" },
    { q: "Negative feedback…", o: ["Reverses a change back towards the set point", "Amplifies a change", "Has no receptors", "Only works in plants"], a: 0, e: "" },
    { q: "When too hot, skin arterioles…", o: ["Dilate", "Constrict", "Close completely", "Shrink"], a: 0, e: "" },
    { q: "Shivering warms the body because…", o: ["Muscle respiration releases heat", "It traps air", "It reduces blood flow", "It increases sweating"], a: 0, e: "" },
    { q: "Steroid hormones affect cells by…", o: ["Diffusing in and acting as transcription factors with their receptor", "Binding to membrane receptors only", "Acting as enzymes", "Making cAMP directly"], a: 0, e: "" },
    { q: "Peptide hormones like adrenaline work via…", o: ["Membrane receptors and second messengers", "Diffusing into the nucleus", "Breaking DNA", "Osmosis"], a: 0, e: "" },
    { q: "Which is positive feedback?", o: ["Oxytocin increasing contractions in childbirth", "Sweating when hot", "Insulin lowering blood glucose", "Shivering when cold"], a: 0, e: "" },
    { q: "Sweating cools the body by…", o: ["Evaporation removing heat", "Radiation", "Conduction to clothes", "Raising metabolism"], a: 0, e: "" },
    { q: "When cold, hair erector muscles…", o: ["Contract to trap air", "Relax", "Disappear", "Release sweat"], a: 0, e: "" }
  ],
  flashcards: [
    ["Homeostasis", "Maintaining a stable internal environment"],
    ["Negative feedback", "Response reverses the change"],
    ["Positive feedback", "Response amplifies the change (oxytocin)"],
    ["Thermoregulation centre", "Hypothalamus"],
    ["Responses to heat", "Vasodilation, sweating, hairs flat"],
    ["Responses to cold", "Vasoconstriction, shivering, hairs raised, ↑ metabolism"],
    ["Peptide hormones", "Bind membrane receptors; second messenger (cAMP)"],
    ["Steroid hormones", "Enter cell; receptor complex is a transcription factor"]
  ]
});

S2Data.add({
  id: "9d", group: 9, y2: true, title: "Nerve impulses and synapses",
  summary: "Neurone structure, resting and action potentials, propagation, synapses and plant responses.",
  notes: `
<h3>Neurones</h3>
<p>Sensory, relay and motor neurones. Motor neurone: cell body, dendrites, long axon, myelin sheath (Schwann cells) with gaps (nodes of Ranvier).</p>
<h3>Resting potential (about −70 mV)</h3>
<p>The Na<sup>+</sup>/K<sup>+</sup> pump actively moves 3 Na<sup>+</sup> out for every 2 K<sup>+</sup> in. The membrane is more permeable to K<sup>+</sup>, which diffuses out. The inside is negative relative to the outside: <b>polarised</b>.</p>
<h3>Action potential</h3>
<ol>
<li>A stimulus opens some Na<sup>+</sup> channels; if the <b>threshold</b> is reached, voltage-gated Na<sup>+</sup> channels open; Na<sup>+</sup> floods in: <b>depolarisation</b> (to about +40 mV).</li>
<li>Na<sup>+</sup> channels close; voltage-gated K<sup>+</sup> channels open; K<sup>+</sup> diffuses out: <b>repolarisation</b>.</li>
<li>Overshoot (<b>hyperpolarisation</b>), then the resting potential is restored.</li>
<li>The <b>refractory period</b> ensures impulses travel one way and are discrete.</li>
</ol>
<p>All-or-nothing: a bigger stimulus gives more frequent action potentials, not bigger ones. <b>Saltatory conduction</b>: in myelinated neurones, the impulse jumps between nodes of Ranvier, so it's much faster.</p>
<h3>Synapses</h3>
<ol>
<li>An action potential arrives at the presynaptic knob; voltage-gated Ca<sup>2+</sup> channels open; Ca<sup>2+</sup> enters.</li>
<li>Vesicles fuse with the membrane, releasing neurotransmitter (e.g. acetylcholine) by exocytosis.</li>
<li>It diffuses across the cleft and binds to receptors on the postsynaptic membrane, opening Na<sup>+</sup> channels → depolarisation.</li>
<li>Neurotransmitter is broken down (e.g. acetylcholinesterase) or reabsorbed.</li>
</ol>
<p>Summation (spatial and temporal) and inhibitory synapses (hyperpolarise) allow integration.</p>
<h3>Plant responses</h3>
<p>Phototropism: <b>auxin</b> (IAA) moves to the shaded side of a shoot, causing cell elongation there, so the shoot bends towards light. Phytochrome detects red/far-red light, controlling flowering and germination.</p>
`,
  quiz: [
    { q: "The resting potential is about…", o: ["−70 mV", "+40 mV", "0 mV", "−120 mV"], a: 0, e: "" },
    { q: "Depolarisation is caused by…", o: ["Na⁺ flowing in", "K⁺ flowing in", "Na⁺ flowing out", "Cl⁻ flowing in"], a: 0, e: "" },
    { q: "Repolarisation is caused by…", o: ["K⁺ flowing out", "Na⁺ flowing in", "Ca²⁺ flowing in", "The Na⁺/K⁺ pump stopping"], a: 0, e: "" },
    { q: "Why are myelinated neurones faster?", o: ["Saltatory conduction between nodes of Ranvier", "They're thinner", "They have more Na⁺", "They lack channels"], a: 0, e: "" },
    { q: "Which ion triggers neurotransmitter release?", o: ["Ca²⁺", "Na⁺", "K⁺", "Mg²⁺"], a: 0, e: "" },
    { q: "Acetylcholinesterase…", o: ["Breaks down acetylcholine in the cleft", "Releases acetylcholine", "Opens Ca²⁺ channels", "Makes myelin"], a: 0, e: "" },
    { q: "A stronger stimulus causes…", o: ["More frequent action potentials", "Bigger action potentials", "Slower impulses", "No change"], a: 0, e: "" },
    { q: "The refractory period…", o: ["Makes impulses travel in one direction", "Speeds up conduction", "Causes depolarisation", "Releases neurotransmitter"], a: 0, e: "" },
    { q: "Auxin causes shoots to bend towards light by…", o: ["Elongating cells on the shaded side", "Elongating cells on the lit side", "Killing cells", "Making chlorophyll"], a: 0, e: "" }
  ],
  flashcards: [
    ["Resting potential", "−70 mV; Na⁺/K⁺ pump; K⁺ leak"],
    ["Depolarisation", "Voltage-gated Na⁺ channels open; Na⁺ in"],
    ["Repolarisation", "Na⁺ channels close; K⁺ channels open; K⁺ out"],
    ["All-or-nothing", "Threshold reached → full action potential; intensity coded by frequency"],
    ["Refractory period", "One-way, discrete impulses"],
    ["Saltatory conduction", "Impulse jumps node to node in myelinated neurones"],
    ["Synaptic transmission", "Ca²⁺ in → vesicles release transmitter → binds receptors → Na⁺ in"],
    ["Acetylcholinesterase", "Breaks down acetylcholine"],
    ["Summation", "Spatial (many neurones) or temporal (rapid firing)"],
    ["Phototropism", "Auxin to shaded side → elongation → bends towards light"]
  ]
});

S2Data.add({
  id: "9e", group: 9, y2: true, title: "The brain, vision and learning",
  summary: "Brain regions, the eye and rods, brain imaging, visual development and habituation.",
  notes: `
<h3>Brain regions</h3>
<table>
<tr><th>Region</th><th>Function</th></tr>
<tr><td>Cerebrum (cerebral hemispheres)</td><td>Conscious thought, memory, language, vision, voluntary movement</td></tr>
<tr><td>Cerebellum</td><td>Balance, coordination of movement</td></tr>
<tr><td>Medulla oblongata</td><td>Autonomic control: heart rate, breathing</td></tr>
<tr><td>Hypothalamus</td><td>Thermoregulation, hormone control</td></tr>
</table>
<h3>Vision: rods</h3>
<ul>
<li>In the dark, <b>rhodopsin</b> in rods is intact; Na<sup>+</sup> channels are open; the rod is depolarised and releases inhibitory neurotransmitter, so the bipolar cell is not stimulated.</li>
<li>Light bleaches rhodopsin (to retinal + opsin); Na<sup>+</sup> channels close; the rod hyperpolarises; it stops releasing inhibitory transmitter; the bipolar cell depolarises → impulse in the optic nerve.</li>
<li>Rods are very sensitive (many rods → one bipolar cell: summation) but give low acuity; cones give colour and high acuity.</li>
<li>Pupil reflex: bright light → circular muscles of iris contract → pupil constricts.</li>
</ul>
<h3>Brain imaging</h3>
<p><b>CT</b> (X-rays: structure), <b>MRI</b> (magnetic fields: soft tissue detail), <b>fMRI</b> (oxygenated blood flow: active regions during tasks).</p>
<h3>Development and learning</h3>
<ul>
<li>Critical period: visual cortex development depends on stimulation early in life (Hubel and Wiesel's experiments with kittens).</li>
<li>Nature vs nurture: twin studies, cross-cultural studies, newborn studies.</li>
<li><b>Habituation</b>: reduced response to a repeated, harmless stimulus, as less Ca<sup>2+</sup> enters the presynaptic knob so less neurotransmitter is released. Investigated with snails touched repeatedly.</li>
</ul>
`,
  quiz: [
    { q: "Which brain region coordinates balance?", o: ["Cerebellum", "Medulla", "Hypothalamus", "Cerebrum"], a: 0, e: "" },
    { q: "The medulla controls…", o: ["Heart rate and breathing", "Language", "Balance", "Vision"], a: 0, e: "" },
    { q: "Light causes rod cells to…", o: ["Hyperpolarise", "Depolarise", "Release more neurotransmitter", "Open Na⁺ channels"], a: 0, e: "" },
    { q: "Rhodopsin is broken into…", o: ["Retinal and opsin", "Glucose and oxygen", "Actin and myosin", "Na⁺ and K⁺"], a: 0, e: "" },
    { q: "Why are rods good in dim light?", o: ["Many rods share one bipolar cell (summation)", "They see colour", "They're in the fovea", "They have high acuity"], a: 0, e: "" },
    { q: "fMRI shows…", o: ["Active brain regions via blood flow", "Bone structure only", "Electrical activity of single neurones", "DNA"], a: 0, e: "" },
    { q: "Habituation is…", o: ["A reduced response to a repeated harmless stimulus", "A stronger response", "A reflex arc", "A genetic disease"], a: 0, e: "" },
    { q: "In bright light, the pupil constricts because…", o: ["Circular muscles of the iris contract", "Radial muscles contract", "The lens thickens", "Rods bleach"], a: 0, e: "" },
    { q: "Hubel and Wiesel showed that…", o: ["Visual cortex development needs stimulation during a critical period", "Rods see colour", "Habituation is permanent", "The cerebellum controls vision"], a: 0, e: "" }
  ],
  flashcards: [
    ["Cerebrum", "Conscious thought, memory, vision, voluntary movement"],
    ["Cerebellum", "Balance and coordination"],
    ["Medulla", "Heart rate, breathing"],
    ["Rods in dark", "Depolarised; inhibitory transmitter released"],
    ["Rods in light", "Rhodopsin bleaches; hyperpolarise; bipolar cell stimulated"],
    ["Rods vs cones", "Sensitive, low acuity, no colour vs colour, high acuity"],
    ["Brain imaging", "CT (X-ray), MRI (structure), fMRI (activity)"],
    ["Critical period", "Window when stimulation is needed for normal development"],
    ["Habituation mechanism", "Less Ca²⁺ in → less neurotransmitter"]
  ]
});

S2Data.add({
  id: "10b", group: 10, y2: true, title: "Ecosystems and climate change",
  summary: "Ecosystems and succession, sampling, climate change evidence and effects, and decision-making.",
  notes: `
<h3>Ecosystems</h3>
<ul>
<li><b>Population</b>: all individuals of one species in an area. <b>Community</b>: all populations. <b>Ecosystem</b>: community plus abiotic factors.</li>
<li><b>Biotic</b> factors (predation, competition, disease) and <b>abiotic</b> factors (temperature, light, pH, water) affect population sizes.</li>
<li>Density-dependent factors (competition, predation, disease) have greater effects in large populations; density-independent factors (weather) affect populations regardless of size.</li>
</ul>
<h3>Succession</h3>
<p><b>Primary succession</b>: from bare rock. <b>Pioneer species</b> (lichens, mosses) colonise, weathering rock and adding humus when they die; soil develops; larger plants grow and outcompete earlier species; diversity increases until a stable <b>climax community</b>. <b>Secondary succession</b> starts from existing soil (e.g. after fire).</p>
<h3>Sampling</h3>
<p>Random quadrats (abundance, percentage cover), belt transects (along a gradient). Measure abiotic factors with probes or meters. Use statistics to test correlations (e.g. Spearman's rank).</p>
<h3>Climate change</h3>
<ul>
<li><b>Evidence</b>: temperature records, dendrochronology (tree rings), pollen in peat bogs, ice cores (trapped air bubbles give CO<sub>2</sub> levels).</li>
<li><b>Greenhouse effect</b>: CO<sub>2</sub> and methane absorb infrared radiation re-emitted by Earth; rising levels increase global temperatures.</li>
<li><b>Effects</b>: changed species distributions, earlier development (e.g. leafing, egg laying), altered rainfall, enzyme rates (Q<sub>10</sub>: rate change for 10 °C).</li>
<li>Models extrapolate trends, but predictions have uncertainty. Scientists' conclusions can be affected by bias, so peer review and evaluation of data sources matter.</li>
<li>Reducing CO<sub>2</sub>: biofuels, reforestation, renewables.</li>
</ul>
`,
  quiz: [
    { q: "An ecosystem is…", o: ["A community and its abiotic environment", "All members of one species", "All populations only", "A food chain"], a: 0, e: "" },
    { q: "Pioneer species in primary succession are often…", o: ["Lichens and mosses", "Trees", "Large mammals", "Fungi only"], a: 0, e: "" },
    { q: "Which is a density-independent factor?", o: ["A flood", "Competition", "Predation", "Disease"], a: 0, e: "" },
    { q: "Which gives evidence of past CO₂ levels?", o: ["Air bubbles in ice cores", "Tree height", "Pollen colour", "Leaf shape"], a: 0, e: "" },
    { q: "Dendrochronology uses…", o: ["Tree rings", "Ice cores", "Pollen", "Fossils"], a: 0, e: "" },
    { q: "Greenhouse gases warm the Earth by…", o: ["Absorbing infrared radiation re-emitted from Earth", "Reflecting sunlight", "Producing heat", "Blocking UV"], a: 0, e: "" },
    { q: "A belt transect is used to…", o: ["Study changes along an environmental gradient", "Sample randomly", "Count every organism", "Measure pH only"], a: 0, e: "" },
    { q: "Q₁₀ is…", o: ["The change in rate for a 10 °C rise", "Ten quadrats", "A greenhouse gas", "The climax community"], a: 0, e: "" },
    { q: "Biodiversity during succession usually…", o: ["Increases towards the climax", "Decreases", "Stays the same", "Drops to zero"], a: 0, e: "" }
  ],
  flashcards: [
    ["Population / community / ecosystem", "One species / all species / community + abiotic factors"],
    ["Biotic vs abiotic", "Living factors vs non-living factors"],
    ["Primary succession", "From bare rock; pioneer species → climax community"],
    ["Pioneer species", "First colonisers (lichens, mosses); make soil"],
    ["Climax community", "Stable final community"],
    ["Climate evidence", "Temperature records, tree rings, pollen in peat, ice cores"],
    ["Greenhouse effect", "CO₂/methane absorb IR re-emitted by Earth"],
    ["Effects of warming", "Species distributions, development timing, rainfall"],
    ["Q₁₀", "Rate at T + 10 ÷ rate at T"]
  ]
});

S2Data.detail("1a", { mistakes: ["Saying HDL is 'good cholesterol'. HDL is a lipoprotein that carries cholesterol to the liver; cholesterol itself is the same."], tips: ["Draw glycosidic and ester bond formation showing the water released. Examiners like to see the OH groups."], fact: "A single glycogen molecule can contain up to 30 000 glucose units." });
S2Data.detail("1b", { mistakes: ["Saying enzymes are killed at high temperatures. They're denatured: they were never alive."], tips: ["In denaturation answers, mention bonds breaking, tertiary structure changing, active site shape changing, and substrate no longer fitting."], fact: "Catalase can break down millions of hydrogen peroxide molecules per second." });
S2Data.detail("1c", { mistakes: ["Writing T in mRNA sequences. mRNA uses U."], tips: ["For base sequence questions, write the DNA, mRNA and tRNA lines under each other to avoid slips."], fact: "Only about 1–2% of human DNA codes for proteins." });
S2Data.detail("2a", { mistakes: ["Confusing magnification with resolution."], tips: ["Convert everything to micrometres before calculating magnification."], fact: "The smallest bacteria are about 0.2 μm across, close to the limit of light microscopes." });
S2Data.detail("2c", { mistakes: ["Saying chromosomes separate in anaphase of mitosis. It's sister chromatids."], tips: ["In a root tip squash, cells near the tip have the highest mitotic index."], fact: "Human cells in culture divide roughly every 24 hours." });
S2Data.detail("3a", { mistakes: ["Forgetting to take the square root of q² before finding p in Hardy–Weinberg."], tips: ["Start Hardy–Weinberg questions from the homozygous recessive frequency, which is q²."], fact: "About 2 million species have been named, but estimates suggest there could be 8 million or more." });
S2Data.detail("4b", { mistakes: ["Describing osmosis in terms of concentration of water. Use water potential."], tips: ["Link each feature of the alveoli to a term in Fick's law."], fact: "If flattened out, the alveoli in your lungs would cover about half a tennis court." });
S2Data.detail("4c", { mistakes: ["Saying valves open because the heart muscle pushes them. They open and close because of pressure differences."], tips: ["For cardiac cycle graphs, find where the pressure lines cross: each crossing is a valve opening or closing."], fact: "A resting heart pumps about 5 litres of blood per minute; during exercise this can rise to over 25." });
S2Data.detail("5a", { mistakes: ["Saying anaerobic respiration produces lactate to make energy. Its job is to regenerate NAD."], tips: ["Learn where each stage happens and what it produces in a summary table."], fact: "You recycle roughly your own body mass in ATP every day." });
S2Data.detail("5b", { mistakes: ["Saying the Calvin cycle happens in the dark. It runs in the light, using ATP and reduced NADP from the light-dependent reactions."], tips: ["For GP/RuBP change questions: less light → less ATP/NADPH → GP builds up, RuBP falls. Less CO<sub>2</sub> → RuBP builds up, GP falls."], fact: "RUBISCO is probably the most abundant protein on Earth." });
S2Data.detail("6b", { mistakes: ["Calling viruses living cells or saying antibiotics kill them."], tips: ["Compare TB and HIV directly: pathogen type, cells infected, how they evade the immune system."], fact: "About a quarter of the world's population is thought to carry dormant TB bacteria." });
S2Data.detail("6c", { mistakes: ["Saying antibodies kill pathogens directly. They mark, neutralise or clump them; phagocytes destroy them."], tips: ["Draw a flow chart of the specific immune response with every cell type labelled."], fact: "Alexander Fleming warned of antibiotic resistance in his 1945 Nobel lecture." });
S2Data.detail("7a", { mistakes: ["Saying larger fragments move further in electrophoresis. Smaller fragments move faster."], tips: ["Be precise with PCR temperatures and what happens at each stage."], fact: "Alec Jeffreys invented DNA fingerprinting in Leicester in 1984." });
S2Data.detail("7b", { mistakes: ["Saying differentiated cells lose genes. They switch genes off."], tips: ["Link epigenetics to transcription: methylation and histone deacetylation stop transcription factors and RNA polymerase reaching the gene."], fact: "Identical twins become more epigenetically different as they age." });
S2Data.detail("8b", { mistakes: ["Saying organisms evolve because they need to. Mutations are random; selection acts on existing variation."], tips: ["Speciation answers need: isolation, no gene flow, different selection pressures/mutations, allele frequencies change, can't produce fertile offspring."], fact: "Darwin's finches on the Galápagos evolved different beak shapes in just a few generations during droughts." });
S2Data.detail("9a", { mistakes: ["Saying blood vessels move closer to the skin when hot. Arterioles dilate; vessels don't move."], tips: ["For each homeostasis answer, name receptor, control centre, effector and response."], fact: "Your core temperature varies by about 0.5 °C over a day, lowest in the early morning." });
S2Data.detail("9d", { mistakes: ["Saying the Na<sup>+</sup>/K<sup>+</sup> pump causes repolarisation. K<sup>+</sup> channels opening does; the pump maintains the resting potential."], tips: ["Annotate an action potential graph with which channels are open at each stage."], fact: "Myelinated neurones can conduct impulses at up to 120 m s<sup>−1</sup>." });
S2Data.detail("9e", { mistakes: ["Saying light causes rods to depolarise. They hyperpolarise."], tips: ["For rods, think 'light switches off the inhibition'."], fact: "It takes about 30 minutes for your eyes to fully dark-adapt as rhodopsin regenerates." });
S2Data.detail("10b", { mistakes: ["Treating correlation between CO<sub>2</sub> and temperature as proof of causation without a mechanism."], tips: ["When evaluating climate data, consider sample size, time range, reliability of proxies, and possible bias."], fact: "Ice cores from Antarctica record CO<sub>2</sub> levels going back over 800 000 years." });
