/* A-level Psychology² — Paper 1 Foundations: social, cognitive and biological psychology */

S2Data.add({
  id: "1a", group: 1, title: "Obedience",
  summary: "Milgram's obedience research and variations, agency theory, social impact theory and the factors that affect obedience.",
  notes: `
<h3>Milgram (1963)</h3>
<ul>
<li><b>Participants:</b> 40 men aged 20–50 from New Haven, volunteers paid $4.50.</li>
<li><b>Procedure:</b> a rigged draw made each participant the 'teacher'. A confederate 'learner' answered word-pair questions; for each mistake the teacher gave an increasing 'shock' (15–450 V in 15 V steps). The experimenter used four standard prods ("Please continue"… "You have no other choice, you must go on").</li>
<li><b>Results:</b> 100% went to 300 V; <b>65%</b> went to 450 V. Many showed extreme stress (sweating, nervous laughter).</li>
<li><b>Conclusion:</b> ordinary people obey a legitimate authority even when it means harming others.</li>
</ul>
<h3>Milgram's variations (1974)</h3>
<table><tr><th>Variation</th><th>Change</th><th>Full obedience</th></tr>
<tr><td>Experiment 7</td><td>Experimenter gave orders by telephone</td><td>22.5%</td></tr>
<tr><td>Experiment 10</td><td>Run-down office in Bridgeport, not Yale</td><td>47.5%</td></tr>
<tr><td>Experiment 13</td><td>An 'ordinary man' gave the orders</td><td>20%</td></tr></table>
<div class="box box-key"><span class="box-title">Pattern</span>Obedience falls when the authority is less <b>legitimate</b> or less <b>close</b>.</div>
<h3>Agency theory</h3>
<ul>
<li>In the <b>autonomous state</b> we act on our own conscience and feel responsible.</li>
<li>In the <b>agentic state</b> we see ourselves as an agent of authority, so we hand responsibility to them.</li>
<li><b>Moral strain</b>: distress when acting against our conscience. <b>Binding factors</b> (e.g. not wanting to seem rude, having already committed) keep us obeying.</li>
<li>Evolutionary reason: hierarchies help social groups function.</li>
</ul>
<h3>Social impact theory (Latané, 1981)</h3>
<p>Social influence depends on three factors: <b>strength</b> (status of the source), <b>immediacy</b> (closeness in space or time) and <b>number</b> of sources. Influence is divided when there are many targets (<b>diffusion</b>).</p>
<h3>Factors affecting obedience</h3>
<ul>
<li><b>Situation:</b> proximity of victim and authority, legitimacy, uniform, location.</li>
<li><b>Personality:</b> the <b>authoritarian personality</b> (Adorno et al., 1950); people with an internal <b>locus of control</b> may resist more.</li>
<li><b>Gender:</b> Milgram found similar rates for women (65%) in a later variation.</li>
<li><b>Culture:</b> cross-cultural replications show varied rates, partly due to different procedures, so comparisons are hard.</li>
</ul>
<div class="box box-mistake"><span class="box-title">Ethics</span>Milgram deceived participants and caused distress, and the prods made withdrawal difficult. He debriefed everyone and 84% said they were glad to have taken part.</div>`,
  quiz: [
    { q: "In Milgram (1963), what percentage went to 450 V?", o: ["65%", "100%", "22.5%", "47.5%"], a: 0, e: "" },
    { q: "Obedience in the run-down office (Exp 10) was…", o: ["47.5%", "65%", "20%", "92.5%"], a: 0, e: "" },
    { q: "When orders came by telephone, obedience was…", o: ["22.5%", "65%", "47.5%", "100%"], a: 0, e: "" },
    { q: "In the agentic state, a person…", o: ["Sees themselves as acting for an authority", "Acts on their own conscience", "Refuses all orders", "Is hypnotised"], a: 0, e: "" },
    { q: "Moral strain is…", o: ["Distress from acting against conscience", "Physical exhaustion", "A binding factor", "Obedience to peers"], a: 0, e: "" },
    { q: "Social impact theory's three factors are…", o: ["Strength, immediacy, number", "Age, sex, culture", "Legitimacy, uniform, location", "Id, ego, superego"], a: 0, e: "" },
    { q: "When an 'ordinary man' gave orders (Exp 13), obedience fell to…", o: ["20%", "65%", "47.5%", "35%"], a: 0, e: "" },
    { q: "The authoritarian personality was described by…", o: ["Adorno et al.", "Milgram", "Latané", "Tajfel"], a: 0, e: "" },
    { q: "Milgram's participants were…", o: ["40 men aged 20–50", "40 female students", "22 boys", "100 soldiers"], a: 0, e: "" },
    { q: "What percentage went to at least 300 V?", o: ["100%", "65%", "50%", "12.5%"], a: 0, e: "" }
  ],
  flashcards: [
    ["Milgram (1963) result", "65% to 450 V; 100% to 300 V"],
    ["Exp 7 (telephone)", "22.5% fully obedient"],
    ["Exp 10 (Bridgeport office)", "47.5%"],
    ["Exp 13 (ordinary man)", "20%"],
    ["Agentic state", "Acting as an agent of authority; responsibility shifted"],
    ["Autonomous state", "Acting on own conscience"],
    ["Moral strain", "Anxiety when obeying goes against conscience"],
    ["Binding factors", "Aspects of the situation that keep a person obeying"],
    ["Social impact theory", "Strength, immediacy, number (Latané, 1981)"],
    ["Authoritarian personality", "Adorno et al. (1950): rigid, respects authority, hostile to outgroups"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Prejudice",
  summary: "Social identity theory, realistic conflict theory, Sherif's Robbers Cave study and factors affecting prejudice.",
  notes: `
<p><b>Prejudice</b> is a negative attitude towards a group; <b>discrimination</b> is the behaviour that follows from it.</p>
<h3>Social identity theory (Tajfel and Turner, 1979)</h3>
<table><tr><th>Stage</th><th>What happens</th></tr>
<tr><td>Social categorisation</td><td>We sort people into groups, including ourselves</td></tr>
<tr><td>Social identification</td><td>We adopt the identity and norms of our in-group</td></tr>
<tr><td>Social comparison</td><td>We compare our in-group favourably with out-groups to boost self-esteem</td></tr></table>
<p><b>Evidence:</b> the <b>minimal group</b> studies (Tajfel, 1970): boys allocated to groups on trivial grounds favoured their in-group when giving out rewards.</p>
<h3>Realistic conflict theory</h3>
<p>Prejudice arises when groups <b>compete for limited resources</b>. It is reduced by <b>superordinate goals</b> that need cooperation.</p>
<h3>Classic study: Sherif et al. (1954/1961), Robbers Cave</h3>
<ul>
<li><b>Sample:</b> 22 boys aged about 11–12 at a summer camp in Oklahoma, split into two groups (the Eagles and the Rattlers).</li>
<li><b>Stage 1, in-group formation:</b> each group bonded without knowing about the other.</li>
<li><b>Stage 2, friction:</b> competitions with prizes led to name-calling, flag burning and raids.</li>
<li><b>Stage 3, integration:</b> superordinate goals (fixing the water supply, pulling a broken-down truck, paying for a film) reduced hostility.</li>
<li><b>Evaluation:</b> high ecological validity, but a narrow sample (white, middle-class American boys) and ethical issues of deception and harm.</li>
</ul>
<h3>Factors affecting prejudice</h3>
<ul>
<li><b>Personality:</b> the authoritarian personality; right-wing authoritarianism.</li>
<li><b>Situation:</b> competition, status, contact between groups.</li>
<li><b>Culture:</b> norms of the wider society.</li>
</ul>
<h3>Contemporary study: Reicher and Haslam (2006)</h3>
<p>The BBC prison study: 15 men randomly assigned as guards or prisoners. Guards didn't form a shared identity, while prisoners did and challenged them. A commune formed, then collapsed, and some proposed a harsher regime. <b>Conclusion:</b> behaviour depends on shared social identity, not simply on roles.</p>`,
  quiz: [
    { q: "The three stages of social identity theory are…", o: ["Categorisation, identification, comparison", "Formation, friction, integration", "Strength, immediacy, number", "Attention, retention, motivation"], a: 0, e: "" },
    { q: "Realistic conflict theory says prejudice comes from…", o: ["Competition for resources", "Personality only", "Genes", "Conditioning"], a: 0, e: "" },
    { q: "In Robbers Cave, hostility was reduced by…", o: ["Superordinate goals", "More competitions", "Separating the groups", "Punishment"], a: 0, e: "" },
    { q: "How many boys took part in Robbers Cave?", o: ["22", "40", "15", "100"], a: 0, e: "" },
    { q: "The minimal group studies showed that…", o: ["Trivial groupings lead to in-group favouritism", "Groups need conflict", "Personality causes prejudice", "Boys are aggressive"], a: 0, e: "" },
    { q: "Which was a superordinate goal at Robbers Cave?", o: ["Fixing the water supply", "A tug of war", "Baseball", "A treasure hunt"], a: 0, e: "" },
    { q: "Discrimination is…", o: ["Behaviour towards a group", "An attitude", "A stereotype", "A hormone"], a: 0, e: "" },
    { q: "In the BBC prison study, who formed a shared identity?", o: ["The prisoners", "The guards", "Neither", "The researchers"], a: 0, e: "" },
    { q: "A weakness of Sherif's study is…", o: ["A narrow sample", "No ecological validity", "Too many participants", "No conclusions"], a: 0, e: "" },
    { q: "Social comparison aims to…", o: ["Boost self-esteem", "Reduce conflict", "Win resources", "Obey authority"], a: 0, e: "" }
  ],
  flashcards: [
    ["Social identity theory", "Categorisation → identification → comparison (Tajfel and Turner, 1979)"],
    ["Minimal group paradigm", "Trivial groups still show in-group favouritism (Tajfel, 1970)"],
    ["Realistic conflict theory", "Competition for limited resources causes prejudice"],
    ["Superordinate goal", "A goal both groups need to cooperate to achieve"],
    ["Sherif sample", "22 boys, about 11–12, Oklahoma summer camp"],
    ["Sherif stages", "In-group formation, friction, integration"],
    ["Eagles and Rattlers", "The two groups at Robbers Cave"],
    ["Reicher and Haslam (2006)", "BBC prison study: shared identity, not roles, drives behaviour"],
    ["Prejudice vs discrimination", "Attitude vs behaviour"],
    ["Factors affecting prejudice", "Personality, situation, culture"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Social psychology: methods and studies",
  summary: "Questionnaires, interviews, sampling, qualitative and quantitative data, ethics, and Burger's contemporary obedience study.",
  notes: `
<h3>Questionnaires and interviews</h3>
<table><tr><th>Method</th><th>Strengths</th><th>Weaknesses</th></tr>
<tr><td>Questionnaire</td><td>Large samples cheaply; easy to replicate</td><td>Social desirability; closed questions limit answers</td></tr>
<tr><td>Structured interview</td><td>Comparable answers; reliable</td><td>Inflexible</td></tr>
<tr><td>Semi-structured / unstructured</td><td>Rich, detailed data; can follow up</td><td>Hard to compare; interviewer effects</td></tr></table>
<ul>
<li><b>Closed questions</b> (including <b>Likert scales</b>) give quantitative data; <b>open questions</b> give qualitative data.</li>
<li>Qualitative data can be analysed by <b>thematic analysis</b>: reading, coding, and identifying themes.</li>
</ul>
<h3>Sampling</h3>
<table><tr><th>Technique</th><th>How</th><th>Issue</th></tr>
<tr><td>Random</td><td>Everyone has an equal chance</td><td>Needs a full list of the population</td></tr>
<tr><td>Stratified</td><td>Subgroups in proportion</td><td>Time-consuming</td></tr>
<tr><td>Volunteer</td><td>People respond to an advert</td><td>Volunteer bias</td></tr>
<tr><td>Opportunity</td><td>Whoever is available</td><td>Unrepresentative</td></tr></table>
<h3>Ethics: the BPS Code of Ethics and Conduct (2009)</h3>
<p>Four principles: <b>respect</b> (consent, confidentiality, right to withdraw), <b>competence</b>, <b>responsibility</b> (protection from harm, debriefing) and <b>integrity</b> (honesty; deception only when justified). The <b>Code of Human Research Ethics (2014)</b> adds risk assessment and guidance on valid consent.</p>
<h3>Contemporary study: Burger (2009)</h3>
<ul>
<li><b>Aim:</b> to partially replicate Milgram while meeting modern ethical standards.</li>
<li><b>Changes:</b> stopped at <b>150 V</b> (the point after which most of Milgram's obedient participants continued); two-step screening for vulnerability; repeated reminders of the right to withdraw; a clinical psychologist ran the study; immediate debrief.</li>
<li><b>Results:</b> about <b>70%</b> were willing to continue past 150 V, a little lower than Milgram's comparable figure. A model refusing to continue did not significantly reduce obedience.</li>
<li><b>Conclusion:</b> obedience levels haven't changed much in nearly 50 years.</li>
</ul>
<div class="box box-prac"><span class="box-title">Practical investigation</span>Design a questionnaire on an attitude (e.g. prejudice), with open and closed questions, gather data from a sample, and analyse both the numbers and themes.</div>`,
  quiz: [
    { q: "Closed questions produce…", o: ["Quantitative data", "Qualitative data", "Case studies", "Brain scans"], a: 0, e: "" },
    { q: "Thematic analysis is used for…", o: ["Qualitative data", "Correlations", "Brain scans", "Means"], a: 0, e: "" },
    { q: "Burger stopped his study at…", o: ["150 V", "450 V", "300 V", "75 V"], a: 0, e: "" },
    { q: "About what percentage continued past 150 V in Burger's study?", o: ["70%", "10%", "40%", "100%"], a: 0, e: "" },
    { q: "Which sampling method gives everyone an equal chance?", o: ["Random", "Opportunity", "Volunteer", "Snowball"], a: 0, e: "" },
    { q: "Stratified sampling…", o: ["Represents subgroups in proportion", "Uses whoever is available", "Uses adverts", "Picks every 10th person"], a: 0, e: "" },
    { q: "Which is a BPS ethical principle?", o: ["Integrity", "Productivity", "Validity", "Reliability"], a: 0, e: "" },
    { q: "Social desirability bias means…", o: ["Answering to look good", "Answering randomly", "Refusing to answer", "Being anonymous"], a: 0, e: "" },
    { q: "A Likert scale asks people to…", o: ["Rate agreement on a scale", "Write freely", "Draw a picture", "Choose a sample"], a: 0, e: "" },
    { q: "A semi-structured interview…", o: ["Has set questions plus follow-ups", "Has no questions", "Is only written", "Uses no researcher"], a: 0, e: "" }
  ],
  flashcards: [
    ["Open vs closed questions", "Qualitative vs quantitative data"],
    ["Likert scale", "Rate agreement, e.g. 1–5"],
    ["Thematic analysis", "Code qualitative data into themes"],
    ["Random sample", "Equal chance; needs full population list"],
    ["Opportunity sample", "Whoever is available; quick but biased"],
    ["BPS principles (2009)", "Respect, competence, responsibility, integrity"],
    ["Burger (2009) change", "Stopped at 150 V; screened participants"],
    ["Burger (2009) result", "About 70% continued past 150 V"],
    ["Social desirability", "Answers given to look good"],
    ["Interviewer effects", "The interviewer's behaviour influences answers"]
  ]
});

S2Data.add({
  id: "2a", group: 2, title: "Models of memory",
  summary: "The multi-store model, the working memory model, episodic and semantic memory, and reconstructive memory.",
  notes: `
<h3>Multi-store model (Atkinson and Shiffrin, 1968)</h3>
<table><tr><th>Store</th><th>Capacity</th><th>Duration</th><th>Encoding</th></tr>
<tr><td>Sensory register</td><td>Large</td><td>Under a second or two</td><td>Modality-specific</td></tr>
<tr><td>Short-term memory</td><td>About 7 ± 2 items</td><td>About 18–30 s</td><td>Mainly acoustic</td></tr>
<tr><td>Long-term memory</td><td>Unlimited</td><td>Up to a lifetime</td><td>Mainly semantic</td></tr></table>
<p><b>Attention</b> moves information to STM; <b>rehearsal</b> moves it to LTM. <b>Evaluation:</b> supported by case studies like HM and by primacy and recency effects, but STM and LTM aren't single stores, and rehearsal isn't always needed.</p>
<h3>Working memory model (Baddeley and Hitch, 1974)</h3>
<ul>
<li><b>Central executive:</b> directs attention; limited capacity.</li>
<li><b>Phonological loop:</b> phonological store ('inner ear') and articulatory control process ('inner voice').</li>
<li><b>Visuospatial sketchpad:</b> visual and spatial information.</li>
<li><b>Episodic buffer</b> (added 2000): links the components and LTM.</li>
</ul>
<p><b>Evidence:</b> dual-task studies show two tasks using different components can be done together; patient KF had impaired verbal but not visual STM.</p>
<h3>Types of long-term memory (Tulving, 1972)</h3>
<p><b>Episodic</b> memory is for personal events, with time and place; <b>semantic</b> memory is for facts and meanings.</p>
<h3>Reconstructive memory (Bartlett, 1932)</h3>
<p>Memory is an active rebuild using <b>schemas</b>. In the 'War of the Ghosts', English participants shortened the story and changed unfamiliar details to fit their culture (<b>rationalisation</b>).</p>
<div class="box box-tip"><span class="box-title">Evaluation tip</span>Compare models: MSM is simple and testable; WMM explains STM in more detail but the central executive is vague.</div>`,
  quiz: [
    { q: "Moving information from STM to LTM needs…", o: ["Rehearsal", "Attention", "Sleep", "Encoding acoustically"], a: 0, e: "" },
    { q: "STM capacity is about…", o: ["7 ± 2 items", "Unlimited", "1 item", "100 items"], a: 0, e: "" },
    { q: "LTM mainly encodes…", o: ["Semantically", "Acoustically", "Visually only", "Not at all"], a: 0, e: "" },
    { q: "The 'inner voice' is the…", o: ["Articulatory control process", "Phonological store", "Visuospatial sketchpad", "Central executive"], a: 0, e: "" },
    { q: "The episodic buffer was added in…", o: ["2000", "1968", "1974", "1932"], a: 0, e: "" },
    { q: "Memory for your last birthday is…", o: ["Episodic", "Semantic", "Procedural", "Sensory"], a: 0, e: "" },
    { q: "Bartlett's study used…", o: ["The War of the Ghosts", "Word lists", "Brain scans", "Shocks"], a: 0, e: "" },
    { q: "Patient KF supports the…", o: ["Working memory model", "Social identity theory", "Agency theory", "Psychodynamic theory"], a: 0, e: "" },
    { q: "The central executive…", o: ["Directs attention", "Stores sounds", "Stores images", "Is unlimited"], a: 0, e: "" },
    { q: "Rationalisation means…", o: ["Changing details to make sense with one's culture", "Forgetting everything", "Perfect recall", "Rehearsing"], a: 0, e: "" }
  ],
  flashcards: [
    ["MSM stores", "Sensory register → STM → LTM"],
    ["STM", "7 ± 2 items, about 18–30 s, acoustic"],
    ["LTM", "Unlimited, lifetime, semantic"],
    ["WMM components", "Central executive, phonological loop, visuospatial sketchpad, episodic buffer"],
    ["Phonological loop", "Phonological store + articulatory control process"],
    ["Dual-task evidence", "Tasks using different components can run together"],
    ["Episodic memory", "Personal events with time and place"],
    ["Semantic memory", "Facts and meanings"],
    ["Bartlett (1932)", "War of the Ghosts: memory is reconstructed using schemas"],
    ["Schema", "A mental framework based on past experience"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Cognitive psychology: methods and studies",
  summary: "Experiments, hypotheses, designs and controls, case studies of brain damage, the Mann-Whitney U test, and Baddeley (1966b).",
  notes: `
<h3>Experiments</h3>
<ul>
<li><b>IV</b> is manipulated; <b>DV</b> is measured. Both must be <b>operationalised</b> (made measurable).</li>
<li><b>Hypotheses:</b> experimental (alternative) and null; <b>directional</b> (one-tailed) or <b>non-directional</b> (two-tailed).</li>
<li><b>Types:</b> laboratory (high control, low ecological validity), field (natural setting, less control).</li>
</ul>
<table><tr><th>Design</th><th>Strength</th><th>Weakness</th></tr>
<tr><td>Independent groups</td><td>No order effects</td><td>Participant variables</td></tr>
<tr><td>Repeated measures</td><td>Controls participant variables</td><td>Order effects (use <b>counterbalancing</b>)</td></tr>
<tr><td>Matched pairs</td><td>Reduces participant variables, no order effects</td><td>Hard to match</td></tr></table>
<p><b>Controls:</b> standardised procedures and instructions, randomisation, controlling extraneous and confounding variables, and avoiding <b>demand characteristics</b> and <b>experimenter effects</b>.</p>
<h3>Case studies of brain-damaged patients</h3>
<p><b>HM</b> (Henry Molaison) had parts of his medial temporal lobes, including the hippocampus, removed in 1953. He couldn't form new long-term episodic memories but his STM and procedural memory were intact. <b>Clive Wearing</b> lost episodic memory after a viral infection but could still play the piano. Case studies give rich detail but are hard to generalise.</p>
<h3>Mann-Whitney U test</h3>
<p>Used for a <b>difference</b>, <b>independent groups</b> design, with at least <b>ordinal</b> data. The calculated U must be <b>equal to or less than</b> the critical value to be significant.</p>
<h3>Classic study: Baddeley (1966b)</h3>
<ul>
<li><b>Aim:</b> to test whether LTM encodes acoustically or semantically.</li>
<li><b>Procedure:</b> participants learned lists of 10 words that were acoustically similar or dissimilar, or semantically similar or dissimilar. An interference task stopped rehearsal, and recall was tested again after 20 minutes to assess LTM.</li>
<li><b>Results:</b> in LTM, semantically similar words were recalled worse than dissimilar ones; acoustic similarity had little effect.</li>
<li><b>Conclusion:</b> LTM encodes mainly <b>semantically</b>.</li>
</ul>
<h3>Contemporary study: Schmolck et al. (2002)</h3>
<p>Compared HM and other patients with medial temporal lobe damage on semantic knowledge tests. Those with damage extending to the <b>lateral temporal cortex</b> were more impaired, suggesting this area matters for semantic memory.</p>`,
  quiz: [
    { q: "The IV is…", o: ["The variable manipulated", "The variable measured", "A confounding variable", "A participant"], a: 0, e: "" },
    { q: "Counterbalancing reduces…", o: ["Order effects", "Participant variables", "Demand characteristics", "Sample size"], a: 0, e: "" },
    { q: "A one-tailed hypothesis is…", o: ["Directional", "Non-directional", "Null", "Untestable"], a: 0, e: "" },
    { q: "Mann-Whitney U is for…", o: ["Difference, independent groups, ordinal data", "Correlations", "Nominal data", "Repeated measures"], a: 0, e: "" },
    { q: "For Mann-Whitney U, significance needs U to be…", o: ["≤ critical value", "≥ critical value", "Exactly zero", "Over 100"], a: 0, e: "" },
    { q: "Baddeley (1966b) found LTM encodes…", o: ["Semantically", "Acoustically", "Visually", "Randomly"], a: 0, e: "" },
    { q: "HM had his … removed.", o: ["Medial temporal lobes", "Frontal lobes", "Cerebellum", "Occipital lobes"], a: 0, e: "" },
    { q: "HM kept his…", o: ["Short-term and procedural memory", "Ability to form new episodic LTMs", "Nothing", "Semantic learning of new facts fully"], a: 0, e: "" },
    { q: "Matched pairs design…", o: ["Pairs participants on key variables", "Uses the same people twice", "Uses random groups only", "Has one participant"], a: 0, e: "" },
    { q: "Demand characteristics are…", o: ["Cues that reveal the aim to participants", "The DV", "Researcher bias", "Sampling errors"], a: 0, e: "" }
  ],
  flashcards: [
    ["Operationalise", "Make a variable measurable"],
    ["Independent groups", "Different people per condition; participant variables"],
    ["Repeated measures", "Same people; order effects; counterbalance"],
    ["Matched pairs", "Similar people paired across conditions"],
    ["Mann-Whitney U", "Difference, independent groups, ordinal; U ≤ critical"],
    ["Baddeley (1966b)", "LTM encodes semantically"],
    ["HM", "Hippocampus removed 1953; no new episodic LTM"],
    ["Clive Wearing", "Lost episodic memory; kept procedural (piano)"],
    ["Schmolck et al. (2002)", "Lateral temporal cortex damage → semantic impairment"],
    ["Demand characteristics", "Cues that reveal the study's aim"]
  ]
});

S2Data.add({
  id: "3a", group: 3, title: "The brain, neurotransmitters and aggression",
  summary: "The central nervous system, synaptic transmission, the effect of recreational drugs, and brain structures linked to aggression.",
  notes: `
<h3>The central nervous system</h3>
<p>The CNS is the <b>brain</b> and <b>spinal cord</b>. Neurons send electrical impulses along the axon; at the <b>synapse</b>, chemical messengers carry the signal across.</p>
<h3>Synaptic transmission</h3>
<ol>
<li>An impulse reaches the presynaptic terminal.</li>
<li><b>Neurotransmitters</b> are released from vesicles into the synaptic gap.</li>
<li>They bind to <b>receptors</b> on the postsynaptic neuron, making it more (excitatory) or less (inhibitory) likely to fire.</li>
<li>They're broken down or taken back up (<b>reuptake</b>).</li>
</ol>
<h3>Recreational drugs</h3>
<p><b>Cocaine</b> blocks the reuptake of <b>dopamine</b>, so dopamine stays in the synapse longer, causing euphoria. Over time receptors become less sensitive (tolerance). <b>Heroin</b> mimics the brain's natural opioids (endorphins).</p>
<h3>Brain structure and aggression</h3>
<table><tr><th>Area</th><th>Role</th></tr>
<tr><td>Amygdala</td><td>Emotion, threat and fear responses; links to aggression</td></tr>
<tr><td>Prefrontal cortex</td><td>Impulse control and decision-making; low activity linked to aggression</td></tr>
<tr><td>Hypothalamus</td><td>Regulates hormones, linked to the limbic system</td></tr>
<tr><td>Limbic system</td><td>Emotion; includes the amygdala and hippocampus</td></tr></table>
<h3>Hormones</h3>
<p><b>Testosterone</b> is linked to dominance and aggression; <b>cortisol</b> may moderate its effect.</p>
<h3>Classic study: Raine et al. (1997)</h3>
<ul>
<li><b>Sample:</b> 41 murderers pleading not guilty by reason of insanity (39 men, 2 women) and 41 matched controls.</li>
<li><b>Procedure:</b> <b>PET scans</b> during a continuous performance task.</li>
<li><b>Results:</b> murderers had lower activity in the <b>prefrontal cortex</b> and corpus callosum, and abnormal asymmetry (less activity on the left, more on the right) in the amygdala, thalamus and medial temporal lobe.</li>
<li><b>Conclusion:</b> brain dysfunction may predispose some people to violence, but doesn't cause it alone.</li>
</ul>`,
  quiz: [
    { q: "The CNS is made up of…", o: ["The brain and spinal cord", "The nerves in the limbs", "Hormones", "The heart"], a: 0, e: "" },
    { q: "Neurotransmitters cross the…", o: ["Synaptic gap", "Axon", "Spinal cord", "Skull"], a: 0, e: "" },
    { q: "Cocaine blocks the reuptake of…", o: ["Dopamine", "Insulin", "Adrenaline", "Cortisol"], a: 0, e: "" },
    { q: "Low prefrontal cortex activity is linked to…", o: ["Poor impulse control", "Better memory", "Sleep", "Hunger"], a: 0, e: "" },
    { q: "Raine et al. used…", o: ["PET scans", "Questionnaires only", "Case studies", "Observations"], a: 0, e: "" },
    { q: "How many murderers were in Raine's study?", o: ["41", "22", "40", "100"], a: 0, e: "" },
    { q: "The amygdala is part of the…", o: ["Limbic system", "Cerebellum", "Spinal cord", "Frontal lobe"], a: 0, e: "" },
    { q: "Inhibitory neurotransmitters make the next neuron…", o: ["Less likely to fire", "More likely to fire", "Die", "Grow"], a: 0, e: "" },
    { q: "Which hormone is most linked to aggression?", o: ["Testosterone", "Insulin", "Melatonin", "Oxytocin"], a: 0, e: "" },
    { q: "Reuptake means…", o: ["Neurotransmitters are reabsorbed by the presynaptic neuron", "Receptors are destroyed", "Impulses speed up", "Hormones are released"], a: 0, e: "" }
  ],
  flashcards: [
    ["CNS", "Brain and spinal cord"],
    ["Synaptic transmission", "Impulse → release → bind to receptors → reuptake/breakdown"],
    ["Cocaine", "Blocks dopamine reuptake"],
    ["Heroin", "Mimics endorphins (opioids)"],
    ["Amygdala", "Emotion and threat; linked to aggression"],
    ["Prefrontal cortex", "Impulse control; low activity linked to aggression"],
    ["Raine et al. (1997) sample", "41 NGRI murderers + 41 controls"],
    ["Raine et al. (1997) findings", "Lower prefrontal activity; asymmetry in amygdala"],
    ["Testosterone", "Linked to dominance and aggression"],
    ["Excitatory vs inhibitory", "More vs less likely to fire"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Evolution and the psychodynamic approach",
  summary: "Evolution and natural selection as an explanation of aggression, and Freud's psychodynamic explanation compared with the biological approach.",
  notes: `
<h3>Evolution and natural selection</h3>
<ul>
<li>Behaviours that helped our ancestors <b>survive and reproduce</b> are passed on through genes.</li>
<li>Aggression may have helped males compete for mates and resources, and protect offspring.</li>
<li><b>Sexual jealousy</b> may drive aggression to prevent being cuckolded (raising another's child).</li>
<li><b>Evaluation:</b> explains why aggression is universal, but is hard to test and ignores culture and learning; can be used to justify behaviour.</li>
</ul>
<h3>Freud's psychodynamic explanation</h3>
<ul>
<li>Personality has three parts: the <b>id</b> (pleasure principle), <b>ego</b> (reality principle) and <b>superego</b> (morality).</li>
<li>Aggression comes from the <b>death instinct (Thanatos)</b>, an innate drive that builds up.</li>
<li><b>Catharsis:</b> releasing aggression in safe ways (e.g. sport) reduces it.</li>
<li><b>Defence mechanisms</b> such as <b>displacement</b> redirect aggression onto a safer target.</li>
<li><b>Evaluation:</b> unfalsifiable; based on case studies; catharsis has weak support (venting can increase aggression).</li>
</ul>
<h3>Comparing the explanations</h3>
<table><tr><th></th><th>Biological</th><th>Psychodynamic</th></tr>
<tr><td>Cause</td><td>Brain, hormones, genes, evolution</td><td>Unconscious drives and conflict</td></tr>
<tr><td>Evidence</td><td>Scans, twin studies; scientific</td><td>Case studies; hard to test</td></tr>
<tr><td>Both</td><td colspan="2">See aggression as partly innate; both deterministic</td></tr></table>
<h3>Contemporary study: Brendgen et al. (2005)</h3>
<p>234 six-year-old twin pairs in Quebec, rated by teachers and peers. <b>Physical aggression</b> showed a larger genetic influence; <b>social aggression</b> was more strongly linked to environment. Social aggression was also correlated with physical aggression, partly through shared genes.</p>`,
  quiz: [
    { q: "Natural selection favours behaviours that…", o: ["Aid survival and reproduction", "Reduce reproduction", "Are learned", "Are rare"], a: 0, e: "" },
    { q: "Freud's death instinct is called…", o: ["Thanatos", "Eros", "Id", "Ego"], a: 0, e: "" },
    { q: "The ego works on the…", o: ["Reality principle", "Pleasure principle", "Morality principle", "Death instinct"], a: 0, e: "" },
    { q: "Catharsis means…", o: ["Releasing pent-up aggression", "Hiding aggression", "Learning aggression", "Inheriting aggression"], a: 0, e: "" },
    { q: "Displacement means…", o: ["Redirecting feelings to a safer target", "Forgetting feelings", "Denying feelings", "Copying others"], a: 0, e: "" },
    { q: "A weakness of Freud's theory is…", o: ["It's unfalsifiable", "It's too scientific", "It ignores childhood", "It uses brain scans"], a: 0, e: "" },
    { q: "Brendgen et al. studied…", o: ["Six-year-old twins", "Adult murderers", "Rats", "Students"], a: 0, e: "" },
    { q: "Brendgen found physical aggression was…", o: ["More genetic", "Entirely environmental", "Not heritable", "Caused by TV"], a: 0, e: "" },
    { q: "The superego represents…", o: ["Morality", "Pleasure", "Reality", "Aggression"], a: 0, e: "" },
    { q: "Both biological and psychodynamic explanations are…", o: ["Deterministic", "Free will based", "Purely social", "Learning theories"], a: 0, e: "" }
  ],
  flashcards: [
    ["Natural selection", "Traits aiding survival/reproduction are passed on"],
    ["Evolutionary aggression", "Competing for mates and resources; guarding against cuckoldry"],
    ["Id", "Pleasure principle"],
    ["Ego", "Reality principle"],
    ["Superego", "Morality"],
    ["Thanatos", "Freud's death instinct"],
    ["Catharsis", "Releasing aggression reduces it (weak evidence)"],
    ["Displacement", "Aggression redirected to a safer target"],
    ["Brendgen et al. (2005)", "Twins: physical aggression more genetic, social more environmental"],
    ["Common criticism", "Both explanations are deterministic"]
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Biological psychology: methods",
  summary: "Correlations, brain-scanning techniques, twin and adoption studies, Spearman's rho and the biological practical.",
  notes: `
<h3>Correlations</h3>
<ul>
<li>Measure the relationship between two <b>co-variables</b>: positive, negative or none.</li>
<li>The <b>correlation coefficient</b> runs from −1 to +1.</li>
<li><b>Correlation doesn't show causation</b>: a third variable may be involved.</li>
<li>Shown on a <b>scatter diagram</b>.</li>
</ul>
<h3>Spearman's rho</h3>
<p>Tests for a <b>correlation</b> with at least <b>ordinal</b> data. The calculated r<sub>s</sub> must be <b>equal to or greater than</b> the critical value to be significant.</p>
<h3>Brain scanning</h3>
<table><tr><th>Scan</th><th>Shows</th><th>Notes</th></tr>
<tr><td>CAT</td><td>Structure (X-rays)</td><td>Radiation exposure; no activity shown</td></tr>
<tr><td>PET</td><td>Activity, via a radioactive tracer</td><td>Invasive; slow; expensive</td></tr>
<tr><td>fMRI</td><td>Activity, via blood oxygen</td><td>No radiation; good spatial resolution; expensive</td></tr></table>
<h3>Twin and adoption studies</h3>
<ul>
<li><b>Twin studies</b> compare <b>concordance</b> rates for identical (MZ, 100% shared genes) and non-identical (DZ, about 50%) twins. Higher MZ concordance suggests a genetic influence.</li>
<li><b>Adoption studies</b> compare adoptees with biological and adoptive parents, to separate genes and environment.</li>
<li><b>Weaknesses:</b> twins share environments; MZ twins may be treated more alike; adoption may be into similar families.</li>
</ul>
<h3>Contemporary study: Li et al. (2013)</h3>
<p>Used fMRI to compare heroin users with healthy controls at rest and while viewing drug-related cues. Heroin users showed abnormal activity in the <b>posterior cingulate cortex</b>, an area linked to self-focus and attention, which may help explain craving. (Brendgen et al. and van den Oever et al. are alternatives.)</p>
<div class="box box-prac"><span class="box-title">Practical investigation</span>A correlation, e.g. between self-rated aggression and hours of sport, analysed with Spearman's rho.</div>`,
  quiz: [
    { q: "A correlation coefficient of −0.8 shows…", o: ["A strong negative correlation", "A weak positive correlation", "No correlation", "Causation"], a: 0, e: "" },
    { q: "Spearman's rho is used for…", o: ["Correlations with ordinal data", "Differences", "Nominal data", "Case studies"], a: 0, e: "" },
    { q: "For Spearman's, significance needs rs to be…", o: ["≥ critical value", "≤ critical value", "Zero", "Negative"], a: 0, e: "" },
    { q: "Which scan uses a radioactive tracer?", o: ["PET", "fMRI", "CAT only", "EEG"], a: 0, e: "" },
    { q: "fMRI measures…", o: ["Blood oxygen changes", "X-ray structure", "Radioactive glucose", "Hormones"], a: 0, e: "" },
    { q: "MZ twins share…", o: ["100% of genes", "50% of genes", "25% of genes", "No genes"], a: 0, e: "" },
    { q: "Concordance means…", o: ["Both twins share the trait", "Twins differ", "Twins are adopted", "A correlation"], a: 0, e: "" },
    { q: "A weakness of twin studies is…", o: ["Twins share environments", "They're too cheap", "They use scans", "There are too many twins"], a: 0, e: "" },
    { q: "Correlations can't show…", o: ["Cause and effect", "Relationships", "Direction", "Strength"], a: 0, e: "" },
    { q: "Which scan shows structure only?", o: ["CAT", "PET", "fMRI", "None"], a: 0, e: "" }
  ],
  flashcards: [
    ["Correlation coefficient", "−1 to +1; strength and direction"],
    ["Correlation ≠ causation", "A third variable may explain the link"],
    ["Spearman's rho", "Correlation, ordinal; rs ≥ critical"],
    ["CAT scan", "X-ray structure"],
    ["PET scan", "Activity via radioactive tracer"],
    ["fMRI", "Activity via blood oxygen; no radiation"],
    ["MZ vs DZ twins", "100% vs about 50% shared genes"],
    ["Concordance rate", "How often both twins share a trait"],
    ["Adoption studies", "Separate genes (biological parents) from environment (adoptive)"],
    ["Li et al. (2013)", "Heroin users: abnormal posterior cingulate cortex activity (fMRI)"]
  ]
});

S2Data.detail("1a", { mistakes: ["Mixing up the variation percentages: telephone 22.5%, Bridgeport 47.5%, ordinary man 20%."], tips: ["Link each variation to a factor: proximity, legitimacy, status."], fact: "Milgram used a fake shock generator with labels from 'Slight shock' up to 'Danger: severe shock' and 'XXX'." });
S2Data.detail("1b", { mistakes: ["Confusing social identity theory (categorisation is enough) with realistic conflict theory (competition needed)."], tips: ["Use Sherif's friction stage as evidence for realistic conflict theory."], fact: "The Robbers Cave camp was in Robbers Cave State Park, Oklahoma, named after a hideout said to be used by outlaws." });
S2Data.detail("1c", { mistakes: ["Calling volunteer sampling 'random'."], tips: ["For any method, give a strength and weakness linked to validity or reliability."], fact: "Burger's study was nicknamed a 'Milgram lite' replication." });
S2Data.detail("2a", { mistakes: ["Saying the episodic buffer was in the original 1974 model."], tips: ["Learn one study supporting each model, e.g. HM for MSM and KF for WMM."], fact: "Miller called STM capacity 'the magical number seven, plus or minus two'." });
S2Data.detail("2b", { mistakes: ["Getting the significance rule backwards: Mann-Whitney U must be less than or equal to the critical value."], tips: ["Learn which test fits: difference or correlation, design, level of data."], fact: "HM's brain was donated to science and sliced into thousands of thin sections." });
S2Data.detail("3a", { mistakes: ["Saying Raine shows brain damage causes murder; it shows a correlation and a predisposition."], tips: ["Name specific regions: prefrontal cortex, amygdala, corpus callosum."], fact: "Raine's murderers had all pleaded not guilty by reason of insanity." });
S2Data.detail("3b", { mistakes: ["Saying catharsis is well supported; venting can increase aggression."], tips: ["Compare explanations using similarities and differences, not just separate descriptions."], fact: "Freud developed the idea of a death instinct after World War I." });
S2Data.detail("3c", { mistakes: ["Calling a correlation 'proof' of cause."], tips: ["For twin studies, always mention shared environment as a weakness."], fact: "fMRI detects changes in blood oxygen because active neurons need more oxygen." });
