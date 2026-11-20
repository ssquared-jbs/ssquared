/* Video explainers — A-level Chemistry Topics 17–19. */

S2Data.video("17a", {
  scenes: [
    { type: "title", title: "Chirality", sub: "Mirror-image molecules and what they tell us about mechanisms.", mark: "C*",
      say: ["A chiral centre is a carbon atom with four different groups attached. Molecules with one exist as two optical isomers."] },
    { type: "points", title: "Optical isomers", items: ["Enantiomers: non-superimposable mirror images", "Rotate plane-polarised light equally, in opposite directions", "Racemic mixture: 50 : 50, no overall rotation", "Identical chemistry, except with other chiral molecules"],
      say: ["The two forms are called enantiomers. They're mirror images that can't be superimposed, like your left and right hands.", "Each one rotates the plane of plane-polarised light by the same amount, but in opposite directions. A polarimeter measures this.", "A racemic mixture contains equal amounts of each, so the rotations cancel.", "Enantiomers react identically with most reagents, but enzymes and receptors in the body can tell them apart."] },
    { type: "compare", title: "Optical activity reveals the mechanism", h: ["Why", "Product"],
      rows: [["SN1", "Planar carbocation, attacked from both sides", "Racemic, inactive"], ["SN2", "Attack from the side opposite the halogen", "One enantiomer, active"], ["HCN + aldehyde", "Planar C=O, attacked from both sides", "Racemic, inactive"]],
      say: ["In S N one, the carbocation is flat, so the nucleophile is equally likely to attack from either side. You get a racemic mixture.", "In S N two, the nucleophile always attacks from the opposite side to the leaving group, so you get one enantiomer, inverted.", "Nucleophilic addition of H C N to an aldehyde also attacks a flat group, giving a racemic product."] },
    { type: "big", text: "Drugs: often only one enantiomer works", sub: "Single-enantiomer drugs mean smaller doses and fewer side effects",
      say: ["In the body, often only one enantiomer has the desired effect.", "Making a single enantiomer is harder and more expensive, but it reduces side effects. Thalidomide is the famous example where the other enantiomer caused harm."] },
    { type: "quiz", q: "Which is chiral?", o: ["Propan-2-ol", "Butan-2-ol", "2-methylpropan-2-ol", "1-chloropropane"], a: 1,
      why: "C2 in butan-2-ol has H, OH, CH₃ and C₂H₅.", say: ["Which of these molecules has a chiral centre?"] }
  ]
});

S2Data.video("17b", {
  scenes: [
    { type: "title", title: "Carbonyl compounds", sub: "Aldehydes, ketones and nucleophilic addition.", mark: "C=O",
      say: ["Aldehydes have the C O group at the end of a chain. Ketones have it in the middle. The carbonyl carbon is slightly positive, so nucleophiles attack it."] },
    { type: "compare", title: "Tests for carbonyls", h: ["Aldehyde", "Ketone"],
      rows: [["2,4-DNPH", "Orange precipitate", "Orange precipitate"], ["Tollens'", "Silver mirror", "No change"], ["Fehling's / Benedict's", "Blue → red precipitate", "Stays blue"], ["Iodine + NaOH", "Yellow CHI₃ if CH₃CO– (ethanal)", "Yellow CHI₃ if CH₃CO–"]],
      say: ["Two four D N P H gives an orange precipitate with any carbonyl. Recrystallise it and measure its melting point to identify the compound.", "Aldehydes reduce Tollens' reagent to silver, giving a silver mirror. Ketones don't react.", "Aldehydes turn Fehling's solution from blue to a brick red precipitate.", "The iodoform test gives a pale yellow precipitate for any C H three C O group."] },
    { type: "flow", title: "Nucleophilic addition of HCN", nodes: ["CN⁻ attacks C<sup>δ+</sup>", "π electrons move<br>onto O → O⁻", "O⁻ takes H⁺<br>→ hydroxynitrile"],
      say: ["Use potassium cyanide with dilute acid, because H C N gas is too toxic. The lone pair on the cyanide carbon attacks the slightly positive carbonyl carbon.",
            "The pi electrons of the C O bond move onto the oxygen, giving a negative intermediate.",
            "That oxygen picks up a proton, forming a hydroxynitrile. The chain has gained a carbon."] },
    { type: "points", title: "Reduction", items: ["LiAlH₄ in dry ether", "Aldehyde + 2[H] → primary alcohol", "Ketone + 2[H] → secondary alcohol"],
      say: ["Lithium tetrahydridoaluminate in dry ether is a powerful reducing agent.", "It reduces aldehydes to primary alcohols.", "And ketones to secondary alcohols."] },
    { type: "quiz", q: "Which gives an orange ppt with 2,4-DNPH but no silver mirror?", o: ["Propanal", "Butanone", "Ethanol", "Ethanoic acid"], a: 1,
      why: "A ketone: carbonyl present, but not oxidised by Tollens'.", say: ["Which compound reacts with D N P H but not with Tollens' reagent?"] }
  ]
});

S2Data.video("17c", {
  scenes: [
    { type: "title", title: "Carboxylic acids and derivatives", sub: "Acids, esters, acyl chlorides and polyesters.", mark: "COOH",
      say: ["Carboxylic acids contain the C O O H group. They're weak acids, and they can be turned into esters and acyl chlorides."] },
    { type: "equation", title: "Esterification",
      rows: [["CH₃COOH", "+", "C₂H₅OH", "⇌", { t: "CH₃COOC₂H₅", k: 1 }, "+", "H₂O"]],
      note: "Concentrated H₂SO₄ catalyst, heat under reflux · alkaline hydrolysis goes to completion", noteStep: 1,
      say: ["A carboxylic acid and an alcohol react to form an ester and water. Ethanoic acid and ethanol make ethyl ethanoate.",
            "The reaction is reversible and needs a concentrated sulfuric acid catalyst. Esters are hydrolysed back by acid, or completely by sodium hydroxide, which gives a carboxylate salt."] },
    { type: "compare", title: "Acyl chloride reactions", h: ["Product", "Note"],
      rows: [["+ water", "Carboxylic acid + HCl", "Vigorous; misty fumes"], ["+ alcohol", "Ester + HCl", "Not reversible"], ["+ ammonia", "Amide", "Primary amide"], ["+ amine", "N-substituted amide", "e.g. N-methylethanamide"]],
      say: ["Acyl chlorides are very reactive. With water they give a carboxylic acid and steamy fumes of hydrogen chloride.", "With alcohols they give esters. Unlike esterification, this isn't reversible, so the yield is higher.", "With ammonia they give amides.", "And with amines they give N substituted amides."] },
    { type: "flow", title: "Addition–elimination", nodes: ["Nucleophile adds<br>to C=O carbon", "C=O reforms,<br>Cl⁻ leaves", "H⁺ lost<br>→ product + HCl"],
      say: ["The nucleophile's lone pair attacks the carbonyl carbon, and the pi electrons move onto oxygen. That's the addition step.",
            "The C O double bond reforms and the chloride ion is pushed out. That's the elimination.",
            "Finally, a proton is lost, and it combines with chloride to make H C l."] },
    { type: "quiz", q: "Which pair makes a polyester?", o: ["Diamine + dicarboxylic acid", "Diol + dicarboxylic acid", "Two alkenes", "Amino acids"], a: 1,
      why: "Ester links form between –OH and –COOH groups, losing water.", say: ["Which pair of monomers forms a polyester?"] }
  ]
});

S2Data.video("18a", {
  scenes: [
    { type: "title", title: "Arenes", sub: "The structure of benzene and electrophilic substitution.", mark: "⌬",
      say: ["Benzene, C six H six, is a planar ring with delocalised pi electrons above and below it. That delocalisation makes it unusually stable."] },
    { type: "points", title: "Evidence against Kekulé's structure", items: ["All C–C bonds the same length (0.139 nm)", "ΔH hydrogenation −208, not −360 kJ mol⁻¹", "Doesn't decolourise bromine water"],
      say: ["Kekulé suggested alternating single and double bonds. But X-ray data show all six carbon carbon bonds are the same length, between single and double.", "Hydrogenating benzene releases two hundred and eight kilojoules per mole, not three times one twenty. Benzene is about one hundred and fifty kilojoules more stable than Kekulé predicts.", "And benzene doesn't decolourise bromine water. It resists addition, because addition would destroy the delocalised ring."] },
    { type: "compare", title: "Electrophilic substitution", h: ["Reagents", "Electrophile"],
      rows: [["Nitration", "Conc HNO₃ + conc H₂SO₄, < 55 °C", "NO₂⁺"], ["Bromination", "Br₂ + FeBr₃", "Br⁺"], ["Friedel–Crafts alkylation", "RCl + AlCl₃", "R⁺"], ["Friedel–Crafts acylation", "RCOCl + AlCl₃", "RCO⁺"]],
      say: ["Nitration uses concentrated nitric and sulfuric acids, which make the nitronium ion.", "Bromination needs a halogen carrier like iron three bromide to make a bromine cation.", "Friedel Crafts alkylation uses a halogenoalkane and aluminium chloride.", "Acylation uses an acyl chloride and aluminium chloride, forming a ketone."] },
    { type: "flow", title: "The mechanism", nodes: ["Ring electrons attack<br>the electrophile", "Intermediate: + charge,<br>ring partly broken", "C–H electrons return<br>to the ring; H⁺ lost"],
      say: ["A curly arrow goes from the delocalised ring to the electrophile.", "That makes an intermediate where the delocalisation is partly broken, drawn as a horseshoe with a plus inside.", "The C H bond electrons go back into the ring, restoring the stable delocalised system, and a proton is lost."] },
    { type: "quiz", q: "Why does phenol react with bromine water but benzene doesn't?", o: ["Phenol is acidic", "O lone pair delocalises into the ring, raising electron density", "Benzene has no π electrons", "Phenol is a liquid"], a: 1,
      why: "The more electron-rich ring polarises Br₂ without a catalyst.", say: ["Why is phenol so much more reactive than benzene?"] }
  ]
});

S2Data.video("18b", {
  scenes: [
    { type: "title", title: "Amines, amides and amino acids", sub: "Nitrogen compounds and the polymers they make.", mark: "–NH₂",
      say: ["Amines have a lone pair on nitrogen, so they act as bases and nucleophiles."] },
    { type: "flow", title: "Base strength", nodes: ["Ethylamine<br>strongest", "Ammonia", "Phenylamine<br>weakest"],
      say: ["The ethyl group pushes electron density onto the nitrogen, so its lone pair is more available to accept a proton. Ethylamine is the strongest base.",
            "Ammonia is in the middle.",
            "In phenylamine, the lone pair is partly delocalised into the benzene ring, so it's less available. Phenylamine is the weakest base."] },
    { type: "compare", title: "Making amines", h: ["Reagents", "Note"],
      rows: [["From halogenoalkane", "Excess NH₃, ethanol, heat", "Can give a mixture"], ["From nitrile", "LiAlH₄, dry ether", "Only primary amine"], ["Phenylamine", "Nitrobenzene + Sn / conc HCl, then NaOH", "Used to make dyes"]],
      say: ["A halogenoalkane with excess ammonia gives an amine, but further substitution can make a mixture.", "Reducing a nitrile with lithium aluminium hydride gives just the primary amine.", "Phenylamine is made by reducing nitrobenzene with tin and concentrated hydrochloric acid, then adding sodium hydroxide."] },
    { type: "points", title: "Amino acids and proteins", items: ["Zwitterion: ⁺H₃N–CHR–COO⁻", "Peptide links join amino acids (water lost)", "Polyamides: diamine + dicarboxylic acid (nylon, Kevlar)"],
      say: ["In solution, amino acids exist as zwitterions, with a positive and a negative charge. That's why they have high melting points.", "Amino acids join through peptide links, losing water each time. Hydrolysis with hot hydrochloric acid breaks them apart again.", "Synthetic polyamides like nylon and Kevlar are made from a diamine and a dicarboxylic acid. Strong hydrogen bonds between chains make Kevlar extremely strong."] },
    { type: "quiz", q: "What is glycine's form in strongly alkaline solution?", o: ["⁺H₃NCH₂COOH", "⁺H₃NCH₂COO⁻", "H₂NCH₂COO⁻", "H₂NCH₂COOH"], a: 2,
      why: "Alkali removes the proton from –NH₃⁺.", say: ["What does glycine look like in strong alkali?"] }
  ]
});

S2Data.video("18c", {
  scenes: [
    { type: "title", title: "Organic synthesis", sub: "Planning routes, Grignard reagents and purification.", mark: "A→B",
      say: ["Organic synthesis means planning a route from a starting material to a target molecule, often in several steps."] },
    { type: "points", title: "Grignard reagents", items: ["RX + Mg in dry ether → RMgX", "Carbon bonded to Mg is δ− (a nucleophile)", "+ CO₂ → carboxylic acid (+1 C)", "+ aldehyde → 2° alcohol; + ketone → 3° alcohol"],
      say: ["A Grignard reagent is made by reacting a halogenoalkane with magnesium in dry ether. Any water would destroy it.", "The carbon attached to magnesium is slightly negative, so it attacks positive carbons, forming new carbon carbon bonds.", "With carbon dioxide, then acid, you get a carboxylic acid with one extra carbon.", "With aldehydes you get secondary alcohols, and with ketones, tertiary alcohols."] },
    { type: "flow", title: "Example route: bromoethane → propanoic acid", nodes: ["CH₃CH₂Br", "CH₃CH₂CN", "CH₃CH₂COOH"], arrows: ["KCN, ethanol,<br>reflux", "dilute HCl,<br>reflux"],
      say: ["Start with bromoethane. The target has three carbons, so the chain must grow by one.", "Heat with potassium cyanide in ethanol to make propanenitrile.", "Then hydrolyse the nitrile by refluxing with dilute acid. You could also use a Grignard reagent with carbon dioxide."] },
    { type: "flow", title: "Recrystallisation", nodes: ["Dissolve in minimum<br>hot solvent", "Filter hot", "Cool to crystallise", "Filter (Büchner),<br>wash cold, dry"],
      say: ["Dissolve the impure solid in the minimum volume of hot solvent.", "Filter while hot to remove insoluble impurities.", "Cool, so the product crystallises while soluble impurities stay in solution.", "Collect the crystals by filtration under reduced pressure, wash with a little cold solvent, and dry. Check purity with a melting point: a pure solid melts sharply."] },
    { type: "quiz", q: "CH₃MgBr + propanone, then acid. Product?", o: ["Butan-2-ol", "2-methylpropan-2-ol", "Butanoic acid", "Propan-2-ol"], a: 1,
      why: "Grignard + ketone gives a tertiary alcohol.", say: ["Methyl magnesium bromide reacts with propanone. What's the product?"] }
  ]
});

S2Data.video("19a", {
  scenes: [
    { type: "title", title: "NMR spectroscopy", sub: "Mapping carbon and hydrogen environments.", mark: "δ",
      say: ["N M R spectroscopy shows the different environments of carbon thirteen and hydrogen one nuclei in a molecule. It's the most powerful tool for working out structures."] },
    { type: "points", title: "Basics", items: ["Chemical shift δ (ppm) relative to TMS at 0", "TMS: one peak, inert, volatile", "Solvent: CDCl₃ (no ¹H peak)", "¹³C NMR: number of peaks = number of C environments"],
      say: ["The position of a peak is its chemical shift, in parts per million, compared with T M S at zero.", "Tetramethylsilane gives one strong peak, is inert, and is easy to remove.", "Samples are dissolved in deuterated solvents like C D C l three, which give no hydrogen peak.", "In carbon thirteen N M R, the number of peaks tells you the number of different carbon environments. Use symmetry to count them."] },
    { type: "compare", title: "Reading ¹H NMR", h: ["Tells you", "Example"],
      rows: [["Number of peaks", "Number of H environments", "Ethanol: 3"], ["Integration", "Ratio of H in each", "3 : 2 : 1"], ["Splitting (n + 1)", "H on the neighbouring carbon", "CH₃ next to CH₂ → triplet"], ["Shift", "What's nearby", "δ 9–10: aldehyde H"]],
      say: ["The number of peaks is the number of hydrogen environments.", "The area under each peak, the integration, gives the ratio of hydrogens in each environment.", "Splitting follows the n plus one rule: n hydrogens on the neighbouring carbon split a peak into n plus one lines.", "And the chemical shift tells you what's nearby, such as an oxygen, a carbonyl group or a benzene ring."] },
    { type: "flow", title: "Ethanol's ¹H spectrum", nodes: ["CH₃: triplet<br>3H, δ 1.2", "CH₂: quartet<br>2H, δ 3.7", "OH: singlet<br>1H"],
      say: ["The C H three hydrogens have two neighbours on the C H two, so they're split into a triplet.", "The C H two hydrogens have three neighbours, giving a quartet. They're near the oxygen, so their shift is higher.", "The O H usually gives a singlet. Add D two O and it disappears, which confirms it's O H."] },
    { type: "quiz", q: "How many peaks in the ¹³C NMR spectrum of propanone?", o: ["1", "2", "3", "4"], a: 1,
      why: "The two CH₃ carbons are equivalent; the C=O carbon is different.", say: ["How many peaks would propanone show in carbon thirteen N M R?"] }
  ]
});

S2Data.video("19b", {
  scenes: [
    { type: "title", title: "Chromatography and combined techniques", sub: "Separating mixtures and putting the evidence together.", mark: "Rf",
      say: ["Chromatography separates mixtures. Combining it with spectroscopy lets chemists identify almost anything."] },
    { type: "big", text: "Different affinities for stationary and mobile phases", sub: "Components that stick to the stationary phase move more slowly",
      say: ["Every type of chromatography has a stationary phase and a mobile phase.", "Each component spends a different amount of time attached to the stationary phase, so they move at different speeds and separate."] },
    { type: "compare", title: "Types of chromatography", h: ["Phases", "Measure"],
      rows: [["TLC", "Silica plate / solvent", "Rf = spot ÷ solvent front"], ["GC", "Liquid on solid in a column / inert gas", "Retention time; peak area = amount"], ["HPLC", "Packed column / liquid at high pressure", "Retention time"]],
      say: ["In thin layer chromatography, a solvent moves up a silica plate. Measure R f: the distance moved by the spot divided by the distance moved by the solvent front.", "In gas chromatography, an inert carrier gas sweeps vaporised samples through a long column. Each compound has a retention time, and peak area shows how much there is.", "H P L C pumps liquid at high pressure through a packed column. It's good for compounds that would decompose if vaporised. Coupling G C or H P L C to a mass spectrometer identifies each component."] },
    { type: "flow", title: "Identifying an unknown", nodes: ["% composition<br>→ empirical formula", "Mass spec<br>→ Mᵣ", "IR<br>→ functional groups", "NMR<br>→ structure"],
      say: ["Start with percentage composition to get the empirical formula.", "The molecular ion in the mass spectrum gives the M r, and so the molecular formula.", "The I R spectrum shows which functional groups are present.", "Finally, carbon thirteen and proton N M R show how the atoms are connected. Check your structure fits every piece of evidence."] },
    { type: "quiz", q: "A spot moves 3.0 cm; the solvent front moves 7.5 cm. Rf = ?", o: ["2.5", "0.40", "0.25", "4.5"], a: 1,
      why: "3.0 ÷ 7.5 = 0.40.", say: ["What's the R f value of this spot?"] }
  ]
});
