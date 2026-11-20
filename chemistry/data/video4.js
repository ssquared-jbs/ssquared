/* Video explainers — Chemistry Topic 4 (organic). */

(function () {
  /* Displayed formula of a straight chain. atoms: list of carbons; each can carry
     a group on the right end (e.g. "OH", "COOH"). Returns SVG markup. */
  function mol(n, o) {
    o = o || {}; var x0 = o.x || 550 - (n - 1) * 60 - (o.end ? 60 : 0), y = o.y || 230, dx = 120, s = "", step = o.step == null ? "" : " data-step='" + o.step + "'";
    s += "<g" + step + ">";
    for (var i = 0; i < n; i++) {
      var x = x0 + i * dx;
      s += "<text class='txt b' text-anchor='middle' x='" + x + "' y='" + (y + 10) + "' style='font-size:34px'>C</text>";
      var dbl = o.double === i;
      if (i < n - 1) s += dbl ? "<line x1='" + (x + 22) + "' y1='" + (y - 6) + "' x2='" + (x + dx - 22) + "' y2='" + (y - 6) + "' class='ink' style='stroke-width:4'/><line x1='" + (x + 22) + "' y1='" + (y + 6) + "' x2='" + (x + dx - 22) + "' y2='" + (y + 6) + "' class='ink' style='stroke-width:4'/>" : "<line x1='" + (x + 22) + "' y1='" + y + "' x2='" + (x + dx - 22) + "' y2='" + y + "' class='ink' style='stroke-width:4'/>";
      var nh = 2;
      if (o.double === i || o.double === i - 1) nh = 1;
      var up = nh >= 1, down = nh >= 2;
      if (up) s += "<line x1='" + x + "' y1='" + (y - 22) + "' x2='" + x + "' y2='" + (y - 62) + "' class='ink' style='stroke-width:4'/><text class='txt' text-anchor='middle' x='" + x + "' y='" + (y - 72) + "' style='font-size:30px'>H</text>";
      if (down) s += "<line x1='" + x + "' y1='" + (y + 22) + "' x2='" + x + "' y2='" + (y + 62) + "' class='ink' style='stroke-width:4'/><text class='txt' text-anchor='middle' x='" + x + "' y='" + (y + 96) + "' style='font-size:30px'>H</text>";
      if (i === 0) s += o.open ? "<line x1='" + (x - 22) + "' y1='" + y + "' x2='" + (x - 95) + "' y2='" + y + "' class='ink' style='stroke-width:4'/>" : "<line x1='" + (x - 22) + "' y1='" + y + "' x2='" + (x - 62) + "' y2='" + y + "' class='ink' style='stroke-width:4'/><text class='txt' text-anchor='middle' x='" + (x - 80) + "' y='" + (y + 10) + "' style='font-size:30px'>H</text>";
      if (i === n - 1) {
        if (o.open) s += "<line x1='" + (x + 22) + "' y1='" + y + "' x2='" + (x + 95) + "' y2='" + y + "' class='ink' style='stroke-width:4'/>";
        else if (!o.end) s += "<line x1='" + (x + 22) + "' y1='" + y + "' x2='" + (x + 62) + "' y2='" + y + "' class='ink' style='stroke-width:4'/><text class='txt' text-anchor='middle' x='" + (x + 80) + "' y='" + (y + 10) + "' style='font-size:30px'>H</text>";
        else s += "<line x1='" + (x + 22) + "' y1='" + y + "' x2='" + (x + 62) + "' y2='" + y + "' class='ink' style='stroke-width:4'/><text class='txt b' x='" + (x + 66) + "' y='" + (y + 11) + "' style='font-size:32px;fill:var(--accent-text)'>" + o.end + "</text>";
      }
    }
    if (o.label) s += "<text class='txt b' text-anchor='middle' x='550' y='" + (y + 160) + "'>" + o.label + "</text>";
    return s + "</g>";
  }
  window.CHEMMOL = mol;
})();

CHEM.video("4a", {
  scenes: [
    { type: "title", title: "Introduction to organic chemistry", sub: "Formulae, homologous series, naming and isomers.", mark: "C–H",
      say: ["Organic chemistry is the chemistry of carbon compounds. Before the reactions, you need the language: formulae, homologous series and naming."] },
    { type: "points", title: "Ways to show a molecule: butane", items: ["<b>Molecular</b>: C₄H₁₀", "<b>General</b> (alkanes): C<sub>n</sub>H<sub>2n+2</sub>", "<b>Structural</b>: CH₃CH₂CH₂CH₃", "<b>Displayed</b>: every atom and every bond drawn"],
      say: ["The molecular formula shows the number of each atom: C four H ten.", "The general formula works for a whole family. For alkanes it's C n H two n plus two.", "The structural formula shows how atoms are grouped: C H three C H two C H two C H three.", "And the displayed formula shows every atom and every bond."] },
    { type: "svg", title: "Displayed formula of butane", svg: CHEMMOL(4, { step: 0, label: "butane, C₄H₁₀" }),
      say: ["Here's butane's displayed formula. Four carbons in a chain, each carbon making four bonds, with hydrogens filling the rest."] },
    { type: "points", title: "Homologous series", items: ["Same <b>general formula</b>", "Each member differs by <b>CH₂</b>", "Similar <b>chemical properties</b> (same functional group)", "<b>Trend</b> in physical properties, e.g. boiling point"],
      say: ["A homologous series is a family of compounds with the same general formula,", "where each member differs from the next by C H two,", "with similar chemical properties, because they have the same functional group,", "and a gradual trend in physical properties like boiling point."] },
    { type: "compare", title: "Naming: prefix + ending", h: ["Prefix = carbons", "Ending = family"],
      rows: [["meth / eth", "1 / 2", "-ane: alkane"], ["prop / but", "3 / 4", "-ene: alkene"], ["pent", "5", "-ol: alcohol · -oic acid: carboxylic acid"]],
      say: ["Names have two parts. The prefix tells you the number of carbons: meth is one, eth is two.", "Prop is three, but is four.", "Pent is five. The ending tells you the family: a n e for alkanes, e n e for alkenes, o l for alcohols, and o i c acid for carboxylic acids."] },
    { type: "big", text: "Isomers", sub: "Same molecular formula, different structural formula",
      say: ["Finally, structural isomers.", "They have the same molecular formula but a different arrangement of atoms. Butane and methylpropane are both C four H ten."] },
    { type: "quiz", q: "What is the molecular formula of the alkane with 6 carbons?", o: ["C₆H₁₂", "C₆H₁₄", "C₆H₁₀", "C₆H₆"], a: 1,
      why: "CₙH₂ₙ₊₂: 2 × 6 + 2 = 14.", say: ["Use the general formula. What's the molecular formula of the alkane with six carbons?"] }
  ]
});

CHEM.video("4b", {
  scenes: [
    { type: "title", title: "Crude oil", sub: "Fractional distillation, fractions, combustion and cracking.", mark: "oil",
      say: ["Crude oil is a mixture of hydrocarbons. We separate it, burn some of it, and crack the rest into more useful molecules."] },
    { type: "flow", col: true, title: "Fractional distillation: top to bottom", nodes: ["<b>Refinery gases</b>: bottled gas", "<b>Gasoline</b>: petrol · <b>Kerosene</b>: jet fuel", "<b>Diesel</b>: lorries · <b>Fuel oil</b>: ships", "<b>Bitumen</b>: roads"],
      say: ["Crude oil is heated until it vaporises and enters a column that's hot at the bottom and cool at the top. Small molecules rise to the top before condensing: refinery gases, used for heating and cooking.",
            "Next come gasoline for cars, and kerosene for aircraft.",
            "Further down, diesel for lorries and fuel oil for ships.",
            "At the bottom, bitumen, used to surface roads."] },
    { type: "big", text: "Bigger molecules → higher boiling point", sub: "…also more viscous, darker, and harder to ignite",
      say: ["Going down the column, the molecules get bigger. Bigger molecules have stronger intermolecular forces, so higher boiling points.", "They're also more viscous, darker in colour, and harder to ignite."] },
    { type: "compare", title: "Combustion", h: ["Complete", "Incomplete"],
      rows: [["Oxygen", "Plenty", "Limited"], ["Products", "CO₂ + H₂O", "CO, C (soot) + H₂O"], ["Problem", "CO₂: greenhouse gas", "CO is toxic: binds to haemoglobin"]],
      say: ["Hydrocarbons burn as fuels. With plenty of oxygen, you get complete combustion.", "That makes carbon dioxide and water. With limited oxygen, you get incomplete combustion, which can make carbon monoxide and soot.", "Carbon monoxide is toxic. It binds to haemoglobin, so the blood carries less oxygen."] },
    { type: "points", title: "Other pollutants", items: ["<b>Sulfur dioxide</b>: sulfur impurities burn → acid rain", "<b>Nitrogen oxides</b>: N₂ and O₂ react at engine temperatures → acid rain", "Catalytic converters reduce CO and NOₓ"],
      say: ["Fuels containing sulfur impurities produce sulfur dioxide, which causes acid rain.", "The high temperature in engines makes nitrogen and oxygen from the air react, forming nitrogen oxides, which also cause acid rain.", "Catalytic converters in cars reduce these pollutants."] },
    { type: "equation", title: "Cracking", rows: [["C₁₀H₂₂", "→", "C₈H₁₈", "+", { t: "C₂H₄", k: 1 }]], labels: [{ t: "long alkane" }, { t: "shorter alkane (petrol)", s: 1 }, { t: "alkene", s: 1 }],
      note: "Heat with a silica or alumina catalyst at about 600–700 °C", noteStep: 2,
      say: ["There's more demand for short molecules than crude oil supplies, so long alkanes are cracked into shorter ones.",
            "Cracking makes a shorter alkane, useful as petrol, and an alkene, used to make polymers.",
            "It's done by heating the vapour over a hot silica or alumina catalyst."] },
    { type: "quiz", q: "Which fraction has the lowest boiling point?", o: ["Bitumen", "Diesel", "Refinery gases", "Kerosene"], a: 2,
      why: "Smallest molecules, weakest intermolecular forces.", say: ["Which fraction has the lowest boiling point?"] }
  ]
});

CHEM.video("4c", {
  scenes: [
    { type: "title", title: "Alkanes", sub: "Saturated hydrocarbons, combustion and substitution.", mark: "CₙH₂ₙ₊₂",
      say: ["Alkanes are the simplest hydrocarbons. They're saturated, which means they only have single carbon–carbon bonds."] },
    { type: "svg", title: "Ethane and propane", svg: CHEMMOL(2, { step: 0, x: 220, y: 200, label: "" }) + "<text class='txt b' text-anchor='middle' x='280' y='380'>ethane C₂H₆</text>" + CHEMMOL(3, { step: 1, x: 680, y: 200 }) + "<text class='txt b' text-anchor='middle' x='800' y='380' data-step='1'>propane C₃H₈</text>",
      say: ["Here's ethane, two carbons.", "And propane, three. Each carbon has four single bonds. General formula: C n H two n plus two."] },
    { type: "points", title: "Properties", items: ["<b>Saturated</b>: single C–C bonds only", "Fairly <b>unreactive</b>", "Burn well → good <b>fuels</b>", "React with halogens in <b>UV light</b>"],
      say: ["Alkanes are saturated: only single bonds.", "They're fairly unreactive.", "But they burn well, so they're used as fuels.", "And they react with halogens, but only in ultraviolet light."] },
    { type: "equation", title: "Substitution with bromine", rows: [["CH₄", "+", "Br₂", "→", { t: "CH₃Br", k: 1 }, "+", "HBr"]], labels: [{ t: "needs UV light", s: 1 }],
      note: "A hydrogen atom is swapped for a bromine atom: substitution", noteStep: 2,
      say: ["Methane and bromine react to make bromomethane and hydrogen bromide.",
            "This only happens in ultraviolet light.",
            "One hydrogen atom is replaced, or substituted, by a bromine atom. So it's called a substitution reaction."] },
    { type: "equation", title: "Complete combustion", rows: [["CH₄", "+", "2O₂", "→", "CO₂", "+", "2H₂O"]], note: "Balance C, then H, then O last", noteStep: 1,
      say: ["Methane burns completely to make carbon dioxide and water.", "To balance a combustion equation, do carbon first, then hydrogen, then oxygen last."] },
    { type: "quiz", q: "What type of reaction happens between ethane and chlorine in UV light?", o: ["Addition", "Substitution", "Combustion", "Polymerisation"], a: 1,
      why: "A hydrogen is replaced by a chlorine atom.", say: ["What type of reaction happens between ethane and chlorine in ultraviolet light?"] }
  ]
});

CHEM.video("4d", {
  scenes: [
    { type: "title", title: "Alkenes", sub: "The C=C double bond, addition and the bromine water test.", mark: "C=C",
      say: ["Alkenes contain a carbon–carbon double bond. That makes them much more reactive than alkanes."] },
    { type: "svg", title: "Ethene, C₂H₄", svg: CHEMMOL(2, { step: 0, double: 0, label: "unsaturated: contains C=C" }),
      say: ["Here's ethene. The two carbons share a double bond, so each carbon only has two hydrogens. General formula C n H two n. Alkenes are unsaturated."] },
    { type: "compare", title: "Bromine water test", h: ["Alkane", "Alkene"],
      rows: [["Bromine water", "Stays orange", "Orange → colourless"], ["Why", "No C=C", "Bromine adds across C=C"]],
      say: ["Shake the hydrocarbon with orange bromine water. An alkane leaves it orange. An alkene turns it colourless.", "The bromine adds across the double bond, so it's used up."] },
    { type: "equation", title: "Addition reaction", rows: [["C₂H₄", "+", "Br₂", "→", { t: "C₂H₄Br₂", k: 1 }]], labels: [{ t: "1,2-dibromoethane", s: 1 }],
      note: "Two molecules join to make one product: addition", noteStep: 2,
      say: ["Ethene plus bromine gives one product.", "It's called one two dibromoethane, because a bromine joins each carbon.", "Two molecules joining to make one is an addition reaction. Alkenes also add hydrogen and steam."] },
    { type: "quiz", q: "A hydrocarbon decolourises bromine water. What does it contain?", o: ["Only single bonds", "A C=C double bond", "An OH group", "Oxygen"], a: 1,
      why: "It's an alkene, which is unsaturated.", say: ["A hydrocarbon turns bromine water colourless. What must it contain?"] }
  ]
});

CHEM.video("4e", {
  scenes: [
    { type: "title", title: "Alcohols", sub: "Making ethanol, and what alcohols react to form.", mark: "–OH",
      say: ["Alcohols contain the O H functional group. Ethanol is the one you'll meet most."] },
    { type: "svg", title: "Ethanol, C₂H₅OH", svg: CHEMMOL(2, { step: 0, end: "O–H", label: "functional group: –OH" }),
      say: ["Here's ethanol. Two carbons, with an O H group on the end. Methanol, propanol and butanol follow the same pattern."] },
    { type: "compare", title: "Two ways to make ethanol", h: ["Fermentation", "Hydration of ethene"],
      rows: [["Raw material", "Sugar (renewable)", "Ethene from crude oil (finite)"], ["Conditions", "Yeast, 30 °C, no oxygen", "Steam, 300 °C, 60–70 atm, H₃PO₄ catalyst"], ["Product", "Impure: needs distilling", "Pure"], ["Process", "Slow, batch", "Fast, continuous"]],
      say: ["Ethanol can be made by fermentation of sugar, or by hydration of ethene. Sugar is renewable. Ethene comes from crude oil, which is finite.",
            "Fermentation uses yeast at about thirty degrees with no oxygen. Hydration reacts ethene with steam at three hundred degrees and sixty to seventy atmospheres, with a phosphoric acid catalyst.",
            "Fermentation gives a dilute, impure product that needs distilling. Hydration gives pure ethanol.",
            "Fermentation is slow and done in batches. Hydration is fast and continuous."] },
    { type: "points", title: "Reactions of ethanol", items: ["<b>Combustion</b>: burns to CO₂ + H₂O", "<b>Oxidation</b> to ethanoic acid: by microbes in air, or acidified potassium dichromate (orange → green)", "<b>Dehydration</b> to ethene: over hot aluminium oxide"],
      say: ["Ethanol burns to make carbon dioxide and water, so it's used as a fuel.", "It can be oxidised to ethanoic acid, either by microbes in air, which is how wine turns to vinegar, or by acidified potassium dichromate, which turns from orange to green.", "And it can be dehydrated to ethene, by passing it over hot aluminium oxide."] },
    { type: "quiz", q: "Why must fermentation be kept at about 30 °C?", o: ["To kill bacteria", "Yeast enzymes denature if too hot, and are slow if too cold", "To boil off ethanol", "To add oxygen"], a: 1,
      why: "It's the best temperature for yeast's enzymes.", say: ["Why is fermentation kept at about thirty degrees?"] }
  ]
});

CHEM.video("4f", {
  scenes: [
    { type: "title", title: "Carboxylic acids", sub: "The –COOH group and how these weak acids react.", mark: "COOH",
      say: ["Carboxylic acids contain the C O O H group. Vinegar is a solution of ethanoic acid."] },
    { type: "svg", title: "Ethanoic acid, CH₃COOH", svg: CHEMMOL(1, { step: 0, end: "COOH", x: 470, label: "functional group: –COOH" }),
      say: ["Here's ethanoic acid. It has two carbons in total, including the one in the C O O H group. Methanoic, ethanoic, propanoic and butanoic acids are the first four."] },
    { type: "points", title: "Typical acid reactions", items: ["+ <b>metal</b> → salt + hydrogen", "+ <b>carbonate</b> → salt + water + CO₂", "+ <b>alkali</b> → salt + water", "Salts are <b>-anoates</b>, e.g. sodium ethanoate"],
      say: ["Carboxylic acids react like other acids. With a reactive metal, they make a salt and hydrogen.", "With a carbonate, they fizz, making a salt, water and carbon dioxide.", "With an alkali, a salt and water.", "The salts end in a n o a t e. Sodium ethanoate, for example."] },
    { type: "big", text: "Weak acids", sub: "Only partly ionised in water, so they react more slowly than strong acids at the same concentration",
      say: ["Carboxylic acids are weak acids.", "They only partly ionise in water, so there are fewer H plus ions, and they react more slowly than hydrochloric acid of the same concentration."] },
    { type: "quiz", q: "What gas is made when ethanoic acid reacts with sodium carbonate?", o: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"], a: 2,
      why: "Acid + carbonate → salt + water + carbon dioxide.", say: ["What gas is given off when ethanoic acid reacts with sodium carbonate?"] }
  ]
});

CHEM.video("4g", {
  scenes: [
    { type: "title", title: "Esters", sub: "Made from an alcohol and a carboxylic acid.", mark: "COO",
      say: ["Esters are sweet-smelling compounds used in perfumes and flavourings."] },
    { type: "equation", title: "Making an ester", rows: [["ethanol", "+", "ethanoic acid", "⇌", { t: "ethyl ethanoate", k: 1 }, "+", "water"]], labels: [{ t: "concentrated H₂SO₄ catalyst, warm", s: 1 }],
      note: "Functional group: –COO–", noteStep: 2,
      say: ["An alcohol reacts with a carboxylic acid to make an ester and water. Ethanol and ethanoic acid make ethyl ethanoate.",
            "You warm them with a few drops of concentrated sulfuric acid as a catalyst.",
            "The ester's functional group is C O O."] },
    { type: "points", title: "Naming esters", items: ["Alcohol part first: <b>ethyl</b> (from ethanol)", "Acid part second: <b>ethanoate</b> (from ethanoic acid)", "Methanol + propanoic acid → <b>methyl propanoate</b>"],
      say: ["The name comes from both parts. The alcohol gives the first word: ethanol becomes ethyl.", "The acid gives the second: ethanoic acid becomes ethanoate.", "So methanol and propanoic acid make methyl propanoate."] },
    { type: "points", title: "Properties and uses", items: ["<b>Volatile</b> with fruity smells", "Used in <b>perfumes</b> and <b>food flavourings</b>", "Make one in the lab, then smell it by <b>wafting</b>"],
      say: ["Esters are volatile, so they evaporate easily, and they smell fruity.", "That's why they're used in perfumes and food flavourings.", "In the lab, you'd pour the mixture into sodium carbonate solution and waft the smell towards you."] },
    { type: "quiz", q: "Which ester forms from propanol and ethanoic acid?", o: ["Ethyl propanoate", "Propyl ethanoate", "Propyl propanoate", "Ethyl ethanoate"], a: 1,
      why: "Alcohol first (propyl), acid second (ethanoate).", say: ["Which ester forms from propanol and ethanoic acid?"] }
  ]
});

CHEM.video("4h", {
  scenes: [
    { type: "title", title: "Synthetic polymers", sub: "Addition and condensation polymerisation.", mark: "(  )ₙ",
      say: ["Polymers are long chains made by joining lots of small molecules called monomers."] },
    { type: "svg", title: "Addition polymerisation", svg: CHEMMOL(2, { step: 0, double: 0, x: 170, y: 220 }) + "<text class='txt b' x='395' y='242' style='font-size:34px' data-step='0'>× n</text><path d='M460 230 L530 230' class='stroke draw' pathLength='1' marker-end='url(#vxb)' data-step='1'/><g data-step='1'><text class='txt b' x='555' y='252' style='font-size:80px'>(</text>" + CHEMMOL(2, { x: 620, y: 220, open: true }).replace("<g>", "").replace(/<\/g>$/, "") + "<text class='txt b' x='770' y='252' style='font-size:80px'>)</text><text class='txt b' x='800' y='290' style='font-size:34px'>n</text></g><text class='txt b' text-anchor='middle' x='550' y='440' data-step='2'>ethene → poly(ethene)</text>",
      say: ["Alkenes can join together. Here are lots of ethene monomers, each with a double bond.",
            "The double bonds open up and the monomers link into one long chain. The repeat unit goes in brackets, with an n.",
            "Ethene becomes poly ethene. Because no other product is made, this is addition polymerisation."] },
    { type: "compare", title: "Polymers and uses", h: ["Monomer", "Use"],
      rows: [["Poly(ethene)", "Ethene", "Plastic bags, bottles"], ["Poly(propene)", "Propene", "Crates, ropes"], ["Poly(chloroethene) PVC", "Chloroethene", "Window frames, pipes"], ["PTFE", "Tetrafluoroethene", "Non-stick pans"]],
      say: ["Poly ethene is used for bags and bottles.", "Poly propene for crates and ropes.", "P V C for window frames and water pipes.", "And P T F E for non-stick coatings."] },
    { type: "points", title: "Problems with addition polymers", items: ["<b>Inert</b>: don't biodegrade, so they last in landfill", "Burning releases <b>toxic gases</b>", "Recycling is better, but needs sorting"],
      say: ["Addition polymers are inert, so they don't biodegrade and take up space in landfill for hundreds of years.", "Burning them releases toxic gases.", "Recycling helps, but plastics have to be sorted first."] },
    { type: "big", text: "Condensation polymers", sub: "Two different monomers join and release a small molecule (often water). e.g. polyesters",
      say: ["There's a second type.", "In condensation polymerisation, two different monomers join and release a small molecule, usually water, each time. Polyesters, made from a diol and a dicarboxylic acid, are an example. Some are biodegradable."] },
    { type: "quiz", q: "What is the monomer of PVC?", o: ["Ethene", "Propene", "Chloroethene", "Tetrafluoroethene"], a: 2,
      why: "PVC is poly(chloroethene).", say: ["What's the monomer of P V C?"] }
  ]
});
