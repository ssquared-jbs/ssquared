/* Psychology² — Paper 1: Development, Memory, Psychological problems */

S2Data.add({
  id: "1a", group: 1, title: "Early brain development and Piaget",
  summary: "How the brain develops before and after birth, nature and nurture, and Piaget's stages of cognitive development.",
  notes: `
<h3>Early brain development</h3>
<ul>
<li>The <b>brain stem</b> and <b>thalamus</b> develop first in the womb, controlling basic functions like heart rate and breathing.</li>
<li>The <b>cerebellum</b> develops next, then the <b>cortex</b>, which keeps developing into the twenties.</li>
<li>After birth, connections between neurons grow rapidly; unused connections are pruned.</li>
<li><b>Nature</b> (genes) and <b>nurture</b> (environment, e.g. nutrition, stimulation) both shape development.</li>
</ul>
<h3>Piaget's stages of cognitive development</h3>
<table><tr><th>Stage</th><th>Age</th><th>Key features</th></tr>
<tr><td>Sensorimotor</td><td>0–2</td><td>Learn through senses and actions; develop <b>object permanence</b></td></tr>
<tr><td>Pre-operational</td><td>2–7</td><td><b>Egocentrism</b> (can't see others' viewpoints); can't <b>conserve</b></td></tr>
<tr><td>Concrete operational</td><td>7–11</td><td>Can conserve; logical thinking about concrete objects</td></tr>
<tr><td>Formal operational</td><td>11+</td><td>Abstract and hypothetical thinking</td></tr></table>
<p><b>Schemas</b> are mental frameworks. Children <b>assimilate</b> new information into schemas or <b>accommodate</b> by changing them.</p>
<h3>Key study: Piaget and Inhelder (1956)</h3>
<p>The <b>three mountains task</b>: children were shown a model of three mountains and asked to choose the view a doll could see. Four-year-olds usually chose their own view (egocentrism); by about seven, most chose correctly.</p>
<p><b>Evaluation:</b> later studies (e.g. Hughes's policeman doll task) found younger children could decentre when the task made sense to them, suggesting Piaget underestimated children.</p>
<h3>Applications to education</h3>
<p>Teaching should match the child's stage: hands-on learning for younger children, abstract reasoning for older ones; readiness matters.</p>`,
  quiz: [
    { q: "Which part of the brain develops first?", o: ["Brain stem", "Cortex", "Frontal lobe", "Corpus callosum"], a: 0, e: "" },
    { q: "Object permanence develops in which stage?", o: ["Sensorimotor", "Pre-operational", "Concrete operational", "Formal operational"], a: 0, e: "" },
    { q: "Egocentrism is typical of which stage?", o: ["Pre-operational", "Sensorimotor", "Concrete operational", "Formal operational"], a: 0, e: "" },
    { q: "The concrete operational stage is from…", o: ["7 to 11", "0 to 2", "2 to 7", "11+"], a: 0, e: "" },
    { q: "Conservation means understanding that…", o: ["Quantity stays the same when appearance changes", "Objects exist when hidden", "Others have different views", "Ideas can be abstract"], a: 0, e: "" },
    { q: "Changing a schema to fit new information is…", o: ["Accommodation", "Assimilation", "Conservation", "Egocentrism"], a: 0, e: "" },
    { q: "The three mountains task tested…", o: ["Egocentrism", "Conservation", "Object permanence", "Memory"], a: 0, e: "" },
    { q: "Abstract thinking appears in the…", o: ["Formal operational stage", "Sensorimotor stage", "Pre-operational stage", "Concrete stage"], a: 0, e: "" },
    { q: "A criticism of Piaget is that he…", o: ["Underestimated children's abilities", "Overestimated adults", "Ignored stages", "Used too many participants"], a: 0, e: "" }
  ],
  flashcards: [
    ["Brain development order", "Brain stem/thalamus → cerebellum → cortex"],
    ["Sensorimotor (0–2)", "Object permanence"],
    ["Pre-operational (2–7)", "Egocentrism; no conservation"],
    ["Concrete operational (7–11)", "Conservation; concrete logic"],
    ["Formal operational (11+)", "Abstract thinking"],
    ["Piaget and Inhelder (1956)", "Three mountains: young children egocentric"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Mindset and learning",
  summary: "Dweck's mindset theory, Willingham's learning theory, and Gunderson et al.'s study of praise.",
  notes: `
<h3>Dweck's mindset theory</h3>
<table><tr><th>Fixed mindset</th><th>Growth mindset</th></tr>
<tr><td>Ability is set and can't change</td><td>Ability grows with effort and practice</td></tr>
<tr><td>Avoids challenges; gives up easily</td><td>Embraces challenges; persists</td></tr>
<tr><td>Sees effort as pointless</td><td>Sees effort as the path to mastery</td></tr></table>
<p><b>Praise matters:</b> praising effort ('process praise') encourages a growth mindset; praising intelligence ('person praise') can encourage a fixed mindset.</p>
<h3>Willingham's learning theory</h3>
<ul>
<li>Learning styles (visual, auditory, kinaesthetic) aren't supported by evidence; teaching should match the <b>content</b>, not the learner's supposed style.</li>
<li>Factual knowledge is needed before thinking skills.</li>
<li>Practice and effort are essential; memory depends on what we think about.</li>
</ul>
<h3>Key study: Gunderson et al. (2013)</h3>
<ul>
<li><b>Aim:</b> to see whether the type of praise parents give toddlers affects their later mindset.</li>
<li><b>Method:</b> 53 children and their caregivers were filmed at home at ages 1–3; praise was coded as process, person or other. At 7–8 years, children's mindsets were measured.</li>
<li><b>Results:</b> more process praise predicted a growth (incremental) mindset later. Boys received more process praise than girls.</li>
<li><b>Evaluation:</b> natural home setting gives ecological validity; but the sample was small and families may have behaved differently when filmed.</li>
</ul>
<h3>Applications</h3>
<p>Schools can teach growth mindset, praise effort, and use effective practice such as spaced retrieval.</p>`,
  quiz: [
    { q: "A fixed mindset believes ability…", o: ["Can't change", "Grows with effort", "Depends on praise", "Is random"], a: 0, e: "" },
    { q: "A growth mindset sees challenges as…", o: ["Opportunities to learn", "Threats", "Pointless", "Impossible"], a: 0, e: "" },
    { q: "Which praise encourages a growth mindset?", o: ["Process praise (effort)", "Person praise (clever)", "No praise", "Criticism"], a: 0, e: "" },
    { q: "Willingham argued learning styles…", o: ["Lack evidence", "Are essential", "Explain all learning", "Should be tested"], a: 0, e: "" },
    { q: "Gunderson et al. studied children at ages…", o: ["1–3 and 7–8", "5 and 10", "11 and 16", "Birth only"], a: 0, e: "" },
    { q: "How many children were in Gunderson's study?", o: ["53", "500", "10", "1000"], a: 0, e: "" },
    { q: "Who received more process praise?", o: ["Boys", "Girls", "Neither", "Only first-borns"], a: 0, e: "" },
    { q: "A strength of Gunderson's study is…", o: ["Natural home setting", "Huge sample", "Lab control", "No ethical issues at all"], a: 0, e: "" },
    { q: "Willingham said thinking skills depend on…", o: ["Factual knowledge", "Learning styles", "Age only", "Personality"], a: 0, e: "" }
  ],
  flashcards: [
    ["Fixed mindset", "Ability is set; avoids challenge"],
    ["Growth mindset", "Ability grows with effort"],
    ["Process praise", "Praising effort → growth mindset"],
    ["Willingham", "No evidence for learning styles; knowledge and practice"],
    ["Gunderson et al. (2013)", "Process praise at 1–3 → growth mindset at 7–8"],
    ["Gunderson evaluation", "Ecological validity; small sample"]
  ]
});

S2Data.add({
  id: "2a", group: 2, title: "How memory works",
  summary: "Encoding, storage and retrieval, types of memory, the multi-store model and reconstructive memory.",
  notes: `
<h3>Processes</h3>
<p><b>Encoding</b> (putting information in), <b>storage</b> (keeping it) and <b>retrieval</b> (getting it out).</p>
<h3>Types of long-term memory</h3>
<ul>
<li><b>Episodic:</b> personal events (your last birthday).</li>
<li><b>Semantic:</b> facts and knowledge (Paris is in France).</li>
<li><b>Procedural:</b> skills (riding a bike).</li>
</ul>
<h3>The multi-store model (Atkinson and Shiffrin, 1968)</h3>
<table><tr><th>Store</th><th>Capacity</th><th>Duration</th><th>Encoding</th></tr>
<tr><td>Sensory register</td><td>Large</td><td>Under a second or two</td><td>Senses</td></tr>
<tr><td>Short-term memory</td><td>About 7 ± 2 items</td><td>About 18–30 seconds</td><td>Mainly acoustic</td></tr>
<tr><td>Long-term memory</td><td>Unlimited</td><td>Potentially a lifetime</td><td>Mainly semantic</td></tr></table>
<p>Attention moves information from sensory memory to STM; <b>rehearsal</b> moves it to LTM.</p>
<p><b>Evaluation:</b> supported by case studies like <b>HM</b>, who couldn't form new long-term memories after brain surgery but had normal STM. But it's too simple: rehearsal isn't the only route to LTM, and STM and LTM aren't single stores.</p>
<h3>Reconstructive memory (Bartlett)</h3>
<p>Memories aren't exact recordings: we rebuild them using <b>schemas</b>, so details are lost, changed or added to fit our expectations.</p>`,
  quiz: [
    { q: "Putting information into memory is…", o: ["Encoding", "Storage", "Retrieval", "Rehearsal"], a: 0, e: "" },
    { q: "Remembering your 10th birthday is…", o: ["Episodic memory", "Semantic memory", "Procedural memory", "Sensory memory"], a: 0, e: "" },
    { q: "Knowing how to swim is…", o: ["Procedural memory", "Episodic memory", "Semantic memory", "STM"], a: 0, e: "" },
    { q: "STM capacity is about…", o: ["7 ± 2 items", "Unlimited", "1 item", "100 items"], a: 0, e: "" },
    { q: "STM mainly encodes…", o: ["Acoustically", "Semantically", "Visually only", "By touch"], a: 0, e: "" },
    { q: "What moves information from STM to LTM?", o: ["Rehearsal", "Attention", "Forgetting", "Sleep only"], a: 0, e: "" },
    { q: "Who proposed the multi-store model?", o: ["Atkinson and Shiffrin", "Bartlett", "Peterson and Peterson", "Piaget"], a: 0, e: "" },
    { q: "Reconstructive memory suggests memories are…", o: ["Rebuilt using schemas", "Exact recordings", "Stored in STM", "Always accurate"], a: 0, e: "" },
    { q: "HM's case supports…", o: ["Separate STM and LTM stores", "Learning styles", "Reconstructive memory only", "Piaget's stages"], a: 0, e: "" }
  ],
  flashcards: [
    ["Encoding / storage / retrieval", "In / kept / out"],
    ["Episodic, semantic, procedural", "Events, facts, skills"],
    ["STM", "7 ± 2 items; 18–30 s; acoustic"],
    ["LTM", "Unlimited; lifetime; semantic"],
    ["Multi-store model", "Sensory → STM (attention) → LTM (rehearsal)"],
    ["Reconstructive memory", "Memories rebuilt using schemas"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Memory studies",
  summary: "Bartlett's War of the Ghosts, Peterson and Peterson's study of STM duration, and the case of HM.",
  notes: `
<h3>Bartlett (1932): War of the Ghosts</h3>
<ul>
<li><b>Aim:</b> to see how memory changes when a story from an unfamiliar culture is recalled.</li>
<li><b>Method:</b> English participants read a Native American folk tale and recalled it repeatedly over time (repeated reproduction) or passed it along a chain (serial reproduction).</li>
<li><b>Results:</b> stories became shorter; unfamiliar details were changed to fit English culture (e.g. 'canoes' became 'boats'); supernatural parts were often dropped.</li>
<li><b>Conclusion:</b> memory is reconstructive, shaped by schemas.</li>
<li><b>Evaluation:</b> real-life material; but lacked standardised instructions and controls, and was subjectively scored.</li>
</ul>
<h3>Peterson and Peterson (1959): duration of STM</h3>
<ul>
<li><b>Method:</b> 24 students heard a consonant trigram (e.g. KDT), then counted backwards in threes to prevent rehearsal, before recalling after 3–18 seconds.</li>
<li><b>Results:</b> recall fell sharply: about 90% correct after 3 seconds, about 10% after 18 seconds.</li>
<li><b>Conclusion:</b> without rehearsal, STM lasts less than about 18–30 seconds.</li>
<li><b>Evaluation:</b> high control; but trigrams are artificial, and interference from counting may explain forgetting.</li>
</ul>
<h3>Case study: HM (Henry Molaison)</h3>
<p>In 1953, much of HM's hippocampus was removed to treat epilepsy. Afterwards he couldn't form new long-term episodic or semantic memories, though his STM and procedural memory (e.g. mirror drawing) worked. This shows different types of memory use different brain areas.</p>`,
  quiz: [
    { q: "Bartlett's story was…", o: ["The War of the Ghosts", "Little Hans", "The Three Mountains", "Kitty Genovese"], a: 0, e: "" },
    { q: "In Bartlett's study, stories became…", o: ["Shorter and more culturally familiar", "Longer and more detailed", "Exactly the same", "Translated into Latin"], a: 0, e: "" },
    { q: "Bartlett concluded memory is…", o: ["Reconstructive", "Perfect", "Only short-term", "Acoustic"], a: 0, e: "" },
    { q: "Peterson and Peterson tested…", o: ["Duration of STM", "Capacity of LTM", "Episodic memory", "Procedural memory"], a: 0, e: "" },
    { q: "Why did participants count backwards in threes?", o: ["To prevent rehearsal", "To test maths", "To relax", "To remember better"], a: 0, e: "" },
    { q: "Recall after 18 seconds was about…", o: ["10%", "90%", "50%", "100%"], a: 0, e: "" },
    { q: "How many participants did Peterson and Peterson use?", o: ["24", "53", "1000", "11"], a: 0, e: "" },
    { q: "Which part of HM's brain was removed?", o: ["Hippocampus", "Cerebellum", "Occipital lobe", "Brain stem"], a: 0, e: "" },
    { q: "HM could still learn…", o: ["Procedural skills like mirror drawing", "New facts easily", "New names", "New episodic memories"], a: 0, e: "" }
  ],
  flashcards: [
    ["Bartlett (1932)", "War of the Ghosts: memory is reconstructive"],
    ["Bartlett evaluation", "Realistic but poorly controlled"],
    ["Peterson and Peterson (1959)", "Trigrams; recall ~10% after 18 s"],
    ["Counting backwards", "Prevents rehearsal"],
    ["HM", "Hippocampus removed 1953; no new LTMs"],
    ["HM shows", "Separate memory systems in the brain"]
  ]
});

S2Data.add({
  id: "3a", group: 3, title: "Depression",
  summary: "Symptoms, effects, biological and psychological explanations, treatments, and Caspi et al.",
  notes: `
<h3>Mental health</h3>
<p>Mental health problems are increasingly recognised; attitudes have changed and stigma is reducing. Mental health affects individuals, families and society (e.g. the economy and health services).</p>
<h3>Unipolar depression: symptoms (ICD)</h3>
<ul>
<li>Persistent low mood and loss of interest or enjoyment, for at least two weeks.</li>
<li>Fatigue, poor concentration, changes in sleep and appetite, low self-worth, feelings of guilt, thoughts of self-harm.</li>
</ul>
<h3>Explanations</h3>
<table><tr><th>Biological</th><th>Psychological</th></tr>
<tr><td>Low levels of <b>serotonin</b> (neurotransmitter imbalance); genes (e.g. the 5-HTT gene)</td><td><b>Negative thinking</b>: Beck's negative triad (negative views of self, world and future); faulty, irrational thoughts</td></tr></table>
<h3>Treatments</h3>
<table><tr><th>Treatment</th><th>How it works</th><th>Evaluation</th></tr>
<tr><td>Antidepressants (SSRIs)</td><td>Increase serotonin at synapses</td><td>Effective for many, cheap; side effects; take weeks; treat symptoms not causes</td></tr>
<tr><td>Cognitive behavioural therapy (CBT)</td><td>Challenge and change negative thoughts and behaviours</td><td>Tackles causes, long-lasting; needs motivation and time</td></tr></table>
<h3>Key study: Caspi et al. (2003)</h3>
<ul>
<li><b>Aim:</b> to see whether the 5-HTT gene affects how life stress leads to depression.</li>
<li><b>Method:</b> 847 people from a New Zealand longitudinal study; their 5-HTT gene variant and stressful life events (ages 21–26) were recorded.</li>
<li><b>Results:</b> people with short versions of the gene were more likely to become depressed after stressful events.</li>
<li><b>Conclusion:</b> depression results from an interaction of genes and environment.</li>
<li><b>Evaluation:</b> large, longitudinal sample; but relied on self-report of life events.</li>
</ul>`,
  quiz: [
    { q: "Depression symptoms must last at least…", o: ["Two weeks", "Two days", "Two years", "Two hours"], a: 0, e: "" },
    { q: "Which neurotransmitter is linked to depression?", o: ["Serotonin", "Adrenaline", "Insulin", "Melatonin only"], a: 0, e: "" },
    { q: "Beck's negative triad includes negative views of…", o: ["Self, world and future", "Parents, school and friends", "Past, present and future only", "Body, mind and soul"], a: 0, e: "" },
    { q: "SSRIs work by…", o: ["Increasing serotonin at synapses", "Reducing serotonin", "Changing thoughts", "Removing genes"], a: 0, e: "" },
    { q: "CBT aims to…", o: ["Change negative thoughts and behaviours", "Increase serotonin", "Remove the hippocampus", "Induce sleep"], a: 0, e: "" },
    { q: "Caspi et al. studied which gene?", o: ["5-HTT", "MAOA", "BRCA1", "FOXP2"], a: 0, e: "" },
    { q: "Caspi's sample size was…", o: ["847", "24", "53", "11"], a: 0, e: "" },
    { q: "Caspi found depression was linked to…", o: ["Gene variant plus stressful life events", "Genes only", "Stress only", "Diet"], a: 0, e: "" },
    { q: "A weakness of antidepressants is…", o: ["Side effects and delay before working", "They're expensive therapy sessions", "They change thinking", "They always cure depression"], a: 0, e: "" }
  ],
  flashcards: [
    ["Depression symptoms", "Low mood, loss of interest, fatigue: 2+ weeks"],
    ["Biological explanation", "Low serotonin; 5-HTT gene"],
    ["Psychological explanation", "Negative thinking; Beck's triad"],
    ["SSRIs", "Increase serotonin; side effects"],
    ["CBT", "Challenge negative thoughts"],
    ["Caspi et al. (2003)", "847 people; short 5-HTT + stress → depression"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Addiction",
  summary: "Symptoms, biological and psychological explanations, treatments, and Kendler et al.",
  notes: `
<h3>What is addiction?</h3>
<p>Addiction (dependence) involves a strong desire to use a substance or behaviour, difficulty controlling use, <b>tolerance</b> (needing more), <b>withdrawal</b> symptoms, neglecting other interests, and continuing despite harm.</p>
<h3>Explanations</h3>
<table><tr><th>Biological</th><th>Psychological</th></tr>
<tr><td><b>Genetic</b>: addiction runs in families; twin studies show inherited vulnerability. Substances affect dopamine reward pathways.</td><td><b>Learning theory</b>: behaviour reinforced by pleasure (operant conditioning); copying others such as peers and parents (social learning)</td></tr></table>
<h3>Treatments</h3>
<ul>
<li><b>Aversion therapy:</b> pairing the substance with something unpleasant (e.g. a drug that causes sickness with alcohol).</li>
<li><b>Self-management programmes:</b> e.g. 12-step programmes and support groups.</li>
<li><b>Drug treatments:</b> substitutes such as nicotine patches or methadone.</li>
</ul>
<h3>Key study: Kendler et al. (2003)</h3>
<ul>
<li><b>Aim:</b> to examine genetic and environmental risk for addiction to different substances.</li>
<li><b>Method:</b> about 1200 male twin pairs (identical and non-identical) from a US twin registry were interviewed about use and abuse of cannabis, cocaine, hallucinogens, sedatives, stimulants and opiates.</li>
<li><b>Results:</b> identical twins were more similar than non-identical twins, showing a genetic influence. Genetic risk was largely shared across the drugs (a general vulnerability); unique environmental factors were more drug-specific.</li>
<li><b>Evaluation:</b> large sample; but only men, and twins share environments too.</li>
</ul>`,
  quiz: [
    { q: "Needing more of a substance for the same effect is…", o: ["Tolerance", "Withdrawal", "Relapse", "Aversion"], a: 0, e: "" },
    { q: "Unpleasant symptoms when stopping a substance are…", o: ["Withdrawal", "Tolerance", "Reinforcement", "Remission"], a: 0, e: "" },
    { q: "Which neurotransmitter is linked to reward?", o: ["Dopamine", "Serotonin", "Melatonin", "Acetylcholine"], a: 0, e: "" },
    { q: "Learning theory explains addiction through…", o: ["Reinforcement and copying others", "Genes only", "Brain damage", "Sleep"], a: 0, e: "" },
    { q: "Aversion therapy pairs a substance with…", o: ["Something unpleasant", "A reward", "Sleep", "Exercise"], a: 0, e: "" },
    { q: "Kendler et al. studied…", o: ["Male twin pairs", "Children", "Rats", "Only women"], a: 0, e: "" },
    { q: "Kendler found genetic risk was…", o: ["Largely shared across substances", "Specific to each substance", "Absent", "Only for alcohol"], a: 0, e: "" },
    { q: "Why compare identical and non-identical twins?", o: ["To separate genetic from environmental influences", "To test memory", "To find IQ", "To study sleep"], a: 0, e: "" },
    { q: "A weakness of Kendler et al. is…", o: ["Only men were studied", "Tiny sample", "No twins", "Lab setting"], a: 0, e: "" }
  ],
  flashcards: [
    ["Addiction features", "Craving, tolerance, withdrawal, harm"],
    ["Biological explanation", "Genes; dopamine reward pathways"],
    ["Learning theory", "Reinforcement and social learning"],
    ["Treatments", "Aversion therapy, self-management, substitutes"],
    ["Kendler et al. (2003)", "~1200 male twin pairs; shared genetic risk"],
    ["Twin studies", "Identical more similar → genetic influence"]
  ]
});

S2Data.detail("1a", { mistakes: ["Giving exact ages as fixed: Piaget's ages are approximate."], tips: ["Learn one task for each stage: hiding a toy, three mountains, conservation of liquid."], fact: "Piaget began his career studying molluscs before switching to children's thinking." });
S2Data.detail("1b", { mistakes: ["Confusing praise types: 'You worked hard' is process praise; 'You're clever' is person praise."], tips: ["For evaluation, use GRAVE: generalisability, reliability, application, validity, ethics."], fact: "Dweck's research has been applied in schools worldwide, though results of mindset interventions are mixed." });
S2Data.detail("2a", { mistakes: ["Mixing up capacity (how much) with duration (how long)."], tips: ["Draw the multi-store model with arrows labelled attention and rehearsal."], fact: "Miller called 7 ± 2 'the magical number seven'." });
S2Data.detail("2b", { mistakes: ["Forgetting why counting backwards was used: to stop rehearsal."], tips: ["Learn aim, method, results, conclusion and two evaluation points for each study."], fact: "HM's brain was donated to science and sliced into over 2000 sections for study." });
S2Data.detail("3a", { mistakes: ["Saying depression is only biological or only psychological."], tips: ["Caspi is excellent evidence for an interaction between genes and environment."], fact: "Depression is one of the leading causes of disability worldwide, according to the World Health Organization." });
S2Data.detail("3b", { mistakes: ["Saying twin studies prove addiction is genetic: twins share environments too."], tips: ["Compare biological and psychological treatments on effectiveness, cost and side effects."], fact: "Behaviours like gambling can be addictive, as well as substances." });
