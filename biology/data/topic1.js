/* Topic 1 — The nature and variety of living organisms (Edexcel IGCSE 4BI1) */

S2Data.add({
  id: "1a", group: 1, title: "Characteristics of living organisms",
  summary: "The eight life processes shared by all living things.",
  notes: `
<h3>The characteristics of life</h3>
<p>All living organisms share these characteristics:</p>
<table>
<tr><th>Characteristic</th><th>What it means</th></tr>
<tr><td>Nutrition</td><td>Taking in substances to get energy and materials for growth</td></tr>
<tr><td>Respiration</td><td>Chemical reactions in cells that release energy from food</td></tr>
<tr><td>Excretion</td><td>Removing waste products of metabolism, e.g. CO<sub>2</sub> and urea</td></tr>
<tr><td>Response to the surroundings</td><td>Detecting and responding to changes (stimuli)</td></tr>
<tr><td>Movement</td><td>Changing position or place, either the whole organism or parts of it</td></tr>
<tr><td>Control of internal conditions</td><td>Keeping conditions such as temperature and water content steady (homeostasis)</td></tr>
<tr><td>Reproduction</td><td>Producing offspring</td></tr>
<tr><td>Growth and development</td><td>A permanent increase in size, and changes as the organism matures</td></tr>
</table>
<div class="box box-tip"><span class="box-title">Memory aid</span><b>MRS C GREN</b>: Movement, Respiration, Sensitivity (response), Control, Growth, Reproduction, Excretion, Nutrition.</div>
<div class="box box-key"><span class="box-title">Watch out</span>Excretion isn't the same as egestion. <b>Excretion</b> removes waste made by the body's own reactions. <b>Egestion</b> removes undigested food (faeces), which was never inside the body's cells.</div>
`,
  flashcards: [
    ["Respiration", "Chemical reactions in cells that release energy from food"],
    ["Excretion", "Removal of waste products of metabolism (e.g. CO<sub>2</sub>, urea)"],
    ["Nutrition", "Taking in materials for energy, growth and development"],
    ["Homeostasis / control of internal conditions", "Keeping internal conditions (e.g. temperature) constant"],
    ["Memory aid for the characteristics of life", "MRS C GREN"],
    ["Excretion vs egestion", "Excretion removes metabolic waste; egestion removes undigested food"],
    ["Growth", "A permanent increase in size"]
  ],
  quiz: [
    { q: "Which process releases energy from food in cells?", o: ["Respiration", "Excretion", "Nutrition", "Growth"], a: 0, e: "" },
    { q: "Removing carbon dioxide from the body is an example of…", o: ["Excretion", "Egestion", "Nutrition", "Reproduction"], a: 0, e: "CO<sub>2</sub> is a waste product of respiration." },
    { q: "A plant turning towards light is an example of…", o: ["Response to the surroundings", "Excretion", "Nutrition", "Reproduction"], a: 0, e: "" },
    { q: "Which is NOT a characteristic of all living things?", o: ["Photosynthesis", "Respiration", "Reproduction", "Excretion"], a: 0, e: "Animals and fungi don't photosynthesise." },
    { q: "Keeping body temperature at about 37 °C is an example of…", o: ["Control of internal conditions", "Growth", "Movement", "Nutrition"], a: 0, e: "" },
    { q: "Getting rid of faeces is called…", o: ["Egestion", "Excretion", "Respiration", "Secretion"], a: 0, e: "Faeces are mostly undigested food, not metabolic waste." }
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Variety of living organisms",
  summary: "Plants, animals, fungi, protoctists, bacteria and viruses, and pathogens.",
  notes: `
<h3>The main groups</h3>
<table>
<tr><th>Group</th><th>Features</th><th>Examples</th></tr>
<tr><td><b>Plants</b></td><td>Multicellular. Cells have chloroplasts, so they photosynthesise. Cell walls made of <b>cellulose</b>. Store carbohydrate as <b>starch</b> or sucrose.</td><td>Flowering plants such as maize (a cereal), peas and beans (legumes)</td></tr>
<tr><td><b>Animals</b></td><td>Multicellular. No chloroplasts and no cell walls. Most have nervous coordination and can move. Store carbohydrate as <b>glycogen</b>.</td><td>Mammals such as humans; insects such as housefly and mosquito</td></tr>
<tr><td><b>Fungi</b></td><td>Can't photosynthesise. Body made of thread-like <b>hyphae</b> forming a <b>mycelium</b>, or single-celled (yeast). Cell walls made of <b>chitin</b>. Feed by <b>saprotrophic nutrition</b>: they secrete digestive enzymes onto food outside the body and absorb the products. Store carbohydrate as glycogen.</td><td><i>Mucor</i> (multicellular), yeast (single-celled)</td></tr>
<tr><td><b>Bacteria</b></td><td>Microscopic single cells. No nucleus: they have a circular chromosome of DNA, and some have <b>plasmids</b>. Cell wall, cell membrane and cytoplasm. Some can photosynthesise; most feed off other organisms.</td><td><i>Lactobacillus bulgaricus</i> (used to make yoghurt), <i>Pneumococcus</i> (causes pneumonia)</td></tr>
<tr><td><b>Protoctists</b></td><td>Microscopic single-celled organisms. Some are like animal cells, others like plant cells (they have chloroplasts).</td><td><i>Amoeba</i>, <i>Chlorella</i>, <i>Plasmodium</i> (causes malaria)</td></tr>
<tr><td><b>Viruses</b></td><td>Not living organisms and not cells. Small particles, smaller than bacteria. A protein coat around DNA or RNA. They can only reproduce inside living cells, so they are <b>parasitic</b>.</td><td>Tobacco mosaic virus, influenza virus, HIV</td></tr>
</table>
<h3>Pathogens</h3>
<p>A <b>pathogen</b> is a microorganism that causes disease. Pathogens can be fungi, bacteria, protoctists or viruses.</p>
<ul>
<li>Fungus: athlete's foot</li>
<li>Bacterium: <i>Pneumococcus</i> (pneumonia)</li>
<li>Protoctist: <i>Plasmodium</i> (malaria)</li>
<li>Virus: influenza, HIV, tobacco mosaic virus</li>
</ul>
`,
  flashcards: [
    ["What are plant cell walls made of?", "Cellulose"],
    ["What are fungal cell walls made of?", "Chitin"],
    ["How do plants store carbohydrate?", "As starch (or sucrose)"],
    ["How do animals and fungi store carbohydrate?", "As glycogen"],
    ["Saprotrophic nutrition", "Secreting digestive enzymes onto food outside the body, then absorbing the products"],
    ["Hyphae and mycelium", "Thread-like hyphae make up a fungus's body, called a mycelium"],
    ["Key features of bacteria", "Single cells, no nucleus, circular chromosome, plasmids, cell wall"],
    ["Why aren't viruses living organisms?", "They aren't cells and can only reproduce inside living cells"],
    ["Pathogen", "A microorganism that causes disease"],
    ["Example of a protoctist pathogen", "<i>Plasmodium</i>, which causes malaria"],
    ["Bacterium used to make yoghurt", "<i>Lactobacillus bulgaricus</i>"]
  ],
  quiz: [
    { q: "Which group has cell walls made of chitin?", o: ["Fungi", "Plants", "Bacteria", "Animals"], a: 0, e: "" },
    { q: "Which organism causes malaria?", o: ["<i>Plasmodium</i>", "<i>Lactobacillus</i>", "<i>Mucor</i>", "<i>Chlorella</i>"], a: 0, e: "It is a protoctist." },
    { q: "Which feature do bacteria NOT have?", o: ["A nucleus", "A cell wall", "Cytoplasm", "A cell membrane"], a: 0, e: "Their DNA is a circular chromosome in the cytoplasm." },
    { q: "How do animals store carbohydrate?", o: ["Glycogen", "Starch", "Cellulose", "Chitin"], a: 0, e: "" },
    { q: "Which can only reproduce inside living cells?", o: ["Viruses", "Bacteria", "Fungi", "Protoctists"], a: 0, e: "" },
    { q: "What do fungi do in saprotrophic nutrition?", o: ["Secrete enzymes onto food and absorb the products", "Photosynthesise", "Engulf food like an amoeba", "Eat other fungi"], a: 0, e: "" },
    { q: "Which is a single-celled fungus?", o: ["Yeast", "<i>Mucor</i>", "<i>Amoeba</i>", "<i>Chlorella</i>"], a: 0, e: "" },
    { q: "What are small circular rings of DNA in bacteria called?", o: ["Plasmids", "Chromosomes", "Hyphae", "Ribosomes"], a: 0, e: "" }
  ]
});
