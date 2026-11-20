/* Psychology² — Brain and neuropsychology, Social influence, Optional topics, Research methods */

S2Data.add({
  id: "4a", group: 4, title: "The nervous system and neurons",
  summary: "The central and peripheral nervous systems, fight or flight, neurons and synaptic transmission.",
  notes: `
<h3>Divisions of the nervous system</h3>
<table><tr><th>System</th><th>Parts and role</th></tr>
<tr><td>Central nervous system (CNS)</td><td>Brain and spinal cord: processes information and controls behaviour</td></tr>
<tr><td>Peripheral nervous system (PNS)</td><td>Nerves connecting the CNS to the body</td></tr>
<tr><td>Somatic</td><td>Voluntary movement and senses</td></tr>
<tr><td>Autonomic</td><td>Automatic functions: heart rate, digestion</td></tr></table>
<h3>Fight or flight</h3>
<p>The <b>sympathetic</b> branch of the autonomic system prepares the body for danger: heart rate and breathing rise, pupils dilate, digestion slows, adrenaline is released. The <b>parasympathetic</b> branch returns the body to rest.</p>
<h3>Neurons</h3>
<table><tr><th>Type</th><th>Role</th></tr>
<tr><td>Sensory</td><td>Carry messages from receptors to the CNS</td></tr>
<tr><td>Relay</td><td>Connect neurons within the CNS</td></tr>
<tr><td>Motor</td><td>Carry messages from the CNS to muscles and glands</td></tr></table>
<p>Structure: dendrites receive signals; the axon (insulated by a myelin sheath) carries the electrical impulse to the axon terminals.</p>
<h3>Synaptic transmission</h3>
<ol>
<li>An electrical impulse reaches the axon terminal.</li>
<li><b>Neurotransmitters</b> are released into the <b>synapse</b> (gap).</li>
<li>They bind to receptors on the next neuron.</li>
<li><b>Excitatory</b> neurotransmitters make the next neuron more likely to fire; <b>inhibitory</b> ones make it less likely.</li>
</ol>
<h3>Hebb's theory of learning</h3>
<p>"Neurons that fire together, wire together": repeated use strengthens connections (cell assemblies), so learning physically changes the brain.</p>`,
  quiz: [
    { q: "The CNS consists of…", o: ["Brain and spinal cord", "Nerves in the limbs", "Heart and lungs", "Muscles"], a: 0, e: "" },
    { q: "Which system controls heart rate automatically?", o: ["Autonomic", "Somatic", "Central", "Skeletal"], a: 0, e: "" },
    { q: "Fight or flight is controlled by the…", o: ["Sympathetic nervous system", "Parasympathetic system", "Somatic system", "Spinal cord only"], a: 0, e: "" },
    { q: "During fight or flight, pupils…", o: ["Dilate", "Constrict", "Close", "Stay the same"], a: 0, e: "" },
    { q: "Which neuron carries messages to muscles?", o: ["Motor", "Sensory", "Relay", "Receptor"], a: 0, e: "" },
    { q: "Which neuron connects neurons within the CNS?", o: ["Relay", "Motor", "Sensory", "Glial"], a: 0, e: "" },
    { q: "Chemicals crossing the synapse are…", o: ["Neurotransmitters", "Hormones only", "Enzymes", "Antibodies"], a: 0, e: "" },
    { q: "An inhibitory neurotransmitter makes the next neuron…", o: ["Less likely to fire", "More likely to fire", "Die", "Grow"], a: 0, e: "" },
    { q: "Hebb's theory says learning…", o: ["Strengthens connections between neurons", "Has no physical basis", "Only happens in childhood", "Depends on learning styles"], a: 0, e: "" }
  ],
  flashcards: [
    ["CNS / PNS", "Brain and spinal cord / nerves to the body"],
    ["Somatic / autonomic", "Voluntary / automatic"],
    ["Sympathetic", "Fight or flight: heart rate up, adrenaline"],
    ["Sensory, relay, motor", "Receptors → CNS; within CNS; CNS → muscles"],
    ["Synaptic transmission", "Neurotransmitters cross the synapse"],
    ["Hebb", "Neurons that fire together wire together"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "The brain, lateralisation and neuroplasticity",
  summary: "Lobes of the brain, lateralisation, the effects of brain damage, and the studies of Sperry and Damasio.",
  notes: `
<h3>Lobes and functions</h3>
<table><tr><th>Area</th><th>Function</th></tr>
<tr><td>Frontal lobe</td><td>Decision-making, planning, personality; motor cortex</td></tr>
<tr><td>Parietal lobe</td><td>Touch and body sensations (somatosensory cortex)</td></tr>
<tr><td>Temporal lobe</td><td>Hearing and memory</td></tr>
<tr><td>Occipital lobe</td><td>Vision</td></tr>
<tr><td>Cerebellum</td><td>Balance and coordination</td></tr></table>
<h3>Lateralisation</h3>
<p>The two hemispheres specialise: the <b>left</b> is usually dominant for language (e.g. Broca's area for speech production); the <b>right</b> for spatial tasks and recognising faces. Each hemisphere controls the opposite side of the body. The <b>corpus callosum</b> connects them.</p>
<h3>Neuroplasticity</h3>
<p>The brain can reorganise after damage or learning, forming new connections; other areas may take over lost functions.</p>
<h3>Key study: Sperry (1968)</h3>
<ul>
<li>Studied 11 'split-brain' patients whose corpus callosum had been cut to treat epilepsy.</li>
<li>Images shown to the right visual field (processed by the left hemisphere) could be named; images shown to the left visual field (right hemisphere) couldn't be named, but could be picked out by touch with the left hand.</li>
<li><b>Conclusion:</b> language is lateralised to the left hemisphere.</li>
<li><b>Evaluation:</b> tightly controlled; but a small, unusual sample.</li>
</ul>
<h3>Key study: Damasio et al. (1994)</h3>
<ul>
<li>Used Phineas Gage's skull and computer modelling to reconstruct the path of the iron rod that passed through his head in 1848.</li>
<li>Found damage to the <b>prefrontal cortex</b> in both hemispheres, explaining Gage's personality change (impulsive, rude) and poor decision-making.</li>
<li><b>Evaluation:</b> modern technology; but relies on a single, historical case.</li>
</ul>
<h3>Cognitive neuroscience</h3>
<p>Brain scans such as PET, CT and fMRI show structure and activity, linking behaviour to brain areas.</p>`,
  quiz: [
    { q: "Which lobe processes vision?", o: ["Occipital", "Frontal", "Temporal", "Parietal"], a: 0, e: "" },
    { q: "Which area controls balance?", o: ["Cerebellum", "Occipital lobe", "Temporal lobe", "Corpus callosum"], a: 0, e: "" },
    { q: "Language is usually lateralised to the…", o: ["Left hemisphere", "Right hemisphere", "Cerebellum", "Brain stem"], a: 0, e: "" },
    { q: "Broca's area is involved in…", o: ["Speech production", "Vision", "Balance", "Hearing"], a: 0, e: "" },
    { q: "What connects the two hemispheres?", o: ["Corpus callosum", "Cerebellum", "Spinal cord", "Hippocampus"], a: 0, e: "" },
    { q: "Sperry studied patients with…", o: ["A cut corpus callosum", "Hippocampus removed", "Frontal lobe damage", "Depression"], a: 0, e: "" },
    { q: "Images in the left visual field go to the…", o: ["Right hemisphere", "Left hemisphere", "Cerebellum", "Both equally"], a: 0, e: "" },
    { q: "Damasio et al. studied…", o: ["Phineas Gage's skull", "HM", "Little Hans", "Split-brain patients"], a: 0, e: "" },
    { q: "Gage's damage was mainly to the…", o: ["Prefrontal cortex", "Occipital lobe", "Cerebellum", "Brain stem"], a: 0, e: "" }
  ],
  flashcards: [
    ["Frontal / parietal / temporal / occipital", "Decisions / touch / hearing & memory / vision"],
    ["Cerebellum", "Balance and coordination"],
    ["Lateralisation", "Left: language; right: spatial"],
    ["Neuroplasticity", "Brain reorganises after damage or learning"],
    ["Sperry (1968)", "11 split-brain patients: language in left hemisphere"],
    ["Damasio et al. (1994)", "Gage's prefrontal damage explains personality change"]
  ]
});

S2Data.add({
  id: "5a", group: 5, title: "Obedience and conformity",
  summary: "Why people obey and conform, the factors that affect it, and Bickman's study of uniforms.",
  notes: `
<h3>Obedience</h3>
<p>Following direct orders from an authority figure.</p>
<ul>
<li><b>Milgram (1963):</b> 65% of participants gave what they believed was a 450-volt shock when told to by an experimenter.</li>
<li><b>Situational factors:</b> legitimacy of authority (e.g. a uniform), proximity of the authority and victim, location.</li>
<li><b>Dispositional factors:</b> the <b>authoritarian personality</b> (Adorno), with strict upbringing leading to respect for authority.</li>
<li><b>Agentic state:</b> people see themselves as acting for someone else, so feel less responsible.</li>
</ul>
<h3>Key study: Bickman (1974)</h3>
<ul>
<li><b>Aim:</b> to see whether uniform affects obedience.</li>
<li><b>Method:</b> a field experiment in New York: a researcher dressed as a civilian, a milkman or a guard gave pedestrians orders (e.g. pick up a bag, give a coin to a stranger).</li>
<li><b>Results:</b> people were most obedient to the guard's uniform.</li>
<li><b>Conclusion:</b> uniforms signal authority and increase obedience.</li>
<li><b>Evaluation:</b> high ecological validity; but no informed consent or debriefing.</li>
</ul>
<h3>Conformity</h3>
<p>Changing behaviour or beliefs to fit a group. <b>Asch (1951)</b> found about a third of answers on critical trials conformed to an obviously wrong majority in a line-judging task.</p>
<ul>
<li><b>Situational factors:</b> group size, unanimity, task difficulty, anonymity.</li>
<li><b>Dispositional factors:</b> personality (e.g. low self-esteem), locus of control, culture (collectivist cultures conform more).</li>
</ul>
<h3>Preventing blind obedience</h3>
<p>Education about obedience, encouraging questioning, role models who disobey, and reducing the legitimacy of unjust authority.</p>`,
  quiz: [
    { q: "Obedience is…", o: ["Following orders from an authority figure", "Copying a group", "Helping strangers", "Ignoring others"], a: 0, e: "" },
    { q: "In Milgram's study, what percentage went to 450 V?", o: ["65%", "10%", "35%", "100%"], a: 0, e: "" },
    { q: "Bickman's study was a…", o: ["Field experiment", "Lab experiment", "Case study", "Questionnaire"], a: 0, e: "" },
    { q: "Which uniform produced most obedience in Bickman's study?", o: ["Guard", "Milkman", "Civilian clothes", "Doctor"], a: 0, e: "" },
    { q: "An ethical weakness of Bickman's study was…", o: ["No informed consent", "Physical harm", "Electric shocks", "Use of animals"], a: 0, e: "" },
    { q: "Conformity is…", o: ["Changing behaviour to fit a group", "Obeying an order", "Helping in an emergency", "Rebelling"], a: 0, e: "" },
    { q: "Which increases conformity?", o: ["A difficult task", "A dissenter in the group", "Anonymity of responses", "A very easy task"], a: 0, e: "" },
    { q: "The authoritarian personality is a…", o: ["Dispositional factor", "Situational factor", "Neurotransmitter", "Sampling method"], a: 0, e: "" },
    { q: "Which culture type tends to conform more?", o: ["Collectivist", "Individualist", "Neither", "Western only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Obedience", "Following orders from authority"],
    ["Milgram (1963)", "65% gave 450 V shocks"],
    ["Bickman (1974)", "Guard uniform → most obedience; field experiment"],
    ["Conformity", "Fitting in with a group; Asch"],
    ["Situational vs dispositional", "Environment vs personality"],
    ["Preventing blind obedience", "Education, questioning, disobedient role models"]
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Bystanders and crowds",
  summary: "The bystander effect, collective behaviour and deindividuation, and Piliavin et al.'s subway study.",
  notes: `
<h3>The bystander effect</h3>
<p>People are less likely to help in an emergency when others are present.</p>
<ul>
<li><b>Diffusion of responsibility:</b> each person feels less responsible.</li>
<li><b>Audience inhibition:</b> fear of embarrassment.</li>
<li><b>Pluralistic ignorance:</b> if others look calm, people assume there's no emergency.</li>
</ul>
<p><b>Factors:</b> number of bystanders, cost of helping, similarity to the victim, competence, mood.</p>
<h3>Key study: Piliavin et al. (1969)</h3>
<ul>
<li><b>Aim:</b> to see how the type of victim affects helping.</li>
<li><b>Method:</b> a field experiment on the New York subway; a confederate collapsed, appearing either ill (with a cane) or drunk (smelling of alcohol). About 4450 passengers were observed.</li>
<li><b>Results:</b> the 'ill' victim received help about 95% of the time; the 'drunk' victim about 50%. No diffusion of responsibility was found.</li>
<li><b>Conclusion:</b> people weigh the costs and rewards of helping (cost–reward model).</li>
<li><b>Evaluation:</b> high ecological validity and large sample; but passengers couldn't consent or be debriefed.</li>
</ul>
<h3>Collective behaviour and deindividuation</h3>
<ul>
<li><b>Deindividuation:</b> in a crowd, anonymity reduces self-awareness and personal responsibility, which can lead to antisocial behaviour (e.g. riots).</li>
<li>Crowds can also behave prosocially (e.g. charity events).</li>
<li>Factors: anonymity, social norms of the group, personality and morality.</li>
</ul>`,
  quiz: [
    { q: "The bystander effect means people are…", o: ["Less likely to help when others are present", "More likely to help in crowds", "Always helpful", "Never helpful"], a: 0, e: "" },
    { q: "Diffusion of responsibility means…", o: ["Each person feels less responsible in a group", "One person takes charge", "Nobody notices", "People panic"], a: 0, e: "" },
    { q: "Piliavin et al. took place on…", o: ["The New York subway", "A university campus", "A London bus", "A hospital"], a: 0, e: "" },
    { q: "The 'ill' victim was helped about…", o: ["95% of the time", "50%", "10%", "0%"], a: 0, e: "" },
    { q: "The 'drunk' victim was helped about…", o: ["50% of the time", "95%", "100%", "5%"], a: 0, e: "" },
    { q: "Piliavin's findings support the…", o: ["Cost–reward model", "Multi-store model", "Agentic state", "Hebb's theory"], a: 0, e: "" },
    { q: "How many passengers were observed?", o: ["About 4450", "24", "847", "11"], a: 0, e: "" },
    { q: "Deindividuation is linked to…", o: ["Anonymity in crowds", "Being alone", "Uniforms only", "Sleep"], a: 0, e: "" },
    { q: "An ethical issue in Piliavin's study was…", o: ["No informed consent", "Electric shocks", "Use of children", "Long-term harm guaranteed"], a: 0, e: "" }
  ],
  flashcards: [
    ["Bystander effect", "Less helping when others are present"],
    ["Diffusion of responsibility", "Responsibility shared, so less felt"],
    ["Piliavin et al. (1969)", "Subway: ill 95% helped, drunk 50%"],
    ["Cost–reward", "People weigh costs and benefits of helping"],
    ["Deindividuation", "Anonymity reduces self-awareness in crowds"],
    ["Factors in helping", "Cost, similarity, competence, number present"]
  ]
});

S2Data.add({
  id: "6a", group: 6, title: "Criminal psychology",
  summary: "Why people become criminals, the effects of punishment, and the studies of Cooper and Mackie and Charlton et al.",
  notes: `
<h3>Explanations of criminal behaviour</h3>
<table><tr><th>Explanation</th><th>Key ideas</th></tr>
<tr><td>Social learning theory (Bandura)</td><td>Criminal behaviour is learned by observing and imitating role models, especially if they're rewarded (vicarious reinforcement)</td></tr>
<tr><td>Operant conditioning</td><td>Crime is repeated if it's rewarded (e.g. money)</td></tr>
<tr><td>Biological: personality (Eysenck)</td><td>Criminals score high on extraversion, neuroticism and psychoticism, partly inherited</td></tr>
<tr><td>Biological: brain and genes</td><td>Differences in brain structure or genes may increase risk</td></tr></table>
<h3>Punishment and rehabilitation</h3>
<ul>
<li><b>Custodial sentences</b> (prison): deterrence, protection of the public, retribution. Problems: <b>recidivism</b> (reoffending), learning crime from other prisoners.</li>
<li><b>Non-custodial:</b> community sentences, fines, electronic tags.</li>
<li><b>Restorative justice:</b> offenders meet victims to understand the harm caused.</li>
<li><b>Token economy programmes</b> reward good behaviour in prisons.</li>
<li><b>Anger management</b> teaches offenders to control their emotions.</li>
</ul>
<h3>Key study: Cooper and Mackie (1986)</h3>
<p>9–11-year-olds played an aggressive or non-aggressive video game, or watched one. Girls who played or watched the aggressive game showed more aggression in free play; boys' aggression didn't change significantly.</p>
<h3>Key study: Charlton et al. (2000)</h3>
<p>A natural experiment on St Helena, where TV arrived in 1995. Children's behaviour was measured before and after: there was <b>no significant increase</b> in antisocial behaviour, suggesting community and family factors matter more than TV.</p>`,
  quiz: [
    { q: "Social learning theory was developed by…", o: ["Bandura", "Eysenck", "Freud", "Piaget"], a: 0, e: "" },
    { q: "Learning by seeing others rewarded is…", o: ["Vicarious reinforcement", "Classical conditioning", "Deindividuation", "Accommodation"], a: 0, e: "" },
    { q: "Eysenck linked criminality to high…", o: ["Extraversion, neuroticism and psychoticism", "Intelligence", "Introversion", "Conformity"], a: 0, e: "" },
    { q: "Recidivism means…", o: ["Reoffending", "Rehabilitation", "Restitution", "Retribution"], a: 0, e: "" },
    { q: "Restorative justice involves…", o: ["Offenders meeting victims", "Longer prison sentences", "Electric tags only", "Fines only"], a: 0, e: "" },
    { q: "A token economy…", o: ["Rewards good behaviour with tokens", "Punishes crime with fines", "Is a type of prison", "Uses money laundering"], a: 0, e: "" },
    { q: "Cooper and Mackie found more aggression in…", o: ["Girls exposed to aggressive games", "Boys only", "Neither group", "Adults"], a: 0, e: "" },
    { q: "TV arrived on St Helena in…", o: ["1995", "1965", "2005", "1980"], a: 0, e: "" },
    { q: "Charlton et al. found…", o: ["No significant increase in antisocial behaviour", "A large increase", "A decrease in reading", "More crime"], a: 0, e: "" }
  ],
  flashcards: [
    ["Social learning theory", "Observe, imitate, vicarious reinforcement"],
    ["Eysenck", "Criminal personality: E, N, P high"],
    ["Recidivism", "Reoffending after punishment"],
    ["Rehabilitation", "Restorative justice, token economy, anger management"],
    ["Cooper and Mackie (1986)", "Aggressive games increased girls' aggression"],
    ["Charlton et al. (2000)", "St Helena TV: no rise in antisocial behaviour"]
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Sleep and dreaming",
  summary: "Sleep stages and cycles, body clocks, sleep disorders, theories of dreaming, and the studies of Siffre and Freud.",
  notes: `
<h3>Sleep stages</h3>
<p>A sleep cycle lasts about <b>90 minutes</b> and repeats 4–6 times a night.</p>
<ul>
<li><b>Light sleep</b> (stages 1–2): slowing brain waves; easy to wake.</li>
<li><b>Deep sleep</b> (slow-wave sleep): delta waves; hard to wake; growth and repair.</li>
<li><b>REM sleep</b>: rapid eye movements, brain activity like waking, vivid dreams, body paralysed.</li>
</ul>
<h3>Body clocks</h3>
<ul>
<li>The <b>circadian rhythm</b> is the roughly 24-hour sleep–wake cycle.</li>
<li><b>Endogenous pacemakers</b>: the suprachiasmatic nucleus (SCN) in the hypothalamus controls the release of <b>melatonin</b> from the pineal gland.</li>
<li><b>Exogenous zeitgebers</b>: external cues, especially light, reset the clock.</li>
</ul>
<h3>Sleep problems</h3>
<p><b>Insomnia</b> (difficulty sleeping, often linked to stress or caffeine) and <b>narcolepsy</b> (sudden sleep attacks during the day).</p>
<h3>Theories of dreaming</h3>
<table><tr><th>Freud's theory</th><th>Activation-synthesis (Hobson and McCarley, 1977)</th></tr>
<tr><td>Dreams are the 'royal road to the unconscious': <b>wish fulfilment</b>; the <b>manifest content</b> (what you remember) disguises the <b>latent content</b> (hidden meaning)</td><td>Dreams result from random brain activity during REM, which the cortex tries to make sense of; dreams have no hidden meaning</td></tr></table>
<h3>Key study: Siffre (1975)</h3>
<p>Siffre lived alone in a cave in Texas for six months with no clocks or daylight. His sleep–wake cycle extended to around 25 hours or more, showing an endogenous rhythm that needs zeitgebers to stay at 24 hours.</p>
<h3>Key study: Freud (1909): Little Hans</h3>
<p>A case study of a five-year-old boy with a phobia of horses. Freud interpreted it as fear of his father (the Oedipus complex), using his dreams and fantasies, reported through Hans's father.</p>`,
  quiz: [
    { q: "A sleep cycle lasts about…", o: ["90 minutes", "30 minutes", "4 hours", "8 hours"], a: 0, e: "" },
    { q: "Vivid dreams happen mostly in…", o: ["REM sleep", "Stage 1", "Deep sleep", "While awake"], a: 0, e: "" },
    { q: "The circadian rhythm lasts about…", o: ["24 hours", "90 minutes", "1 week", "1 month"], a: 0, e: "" },
    { q: "The SCN controls the release of…", o: ["Melatonin", "Adrenaline", "Serotonin", "Dopamine"], a: 0, e: "" },
    { q: "Light is an example of…", o: ["An exogenous zeitgeber", "An endogenous pacemaker", "A neurotransmitter", "A dream"], a: 0, e: "" },
    { q: "Narcolepsy involves…", o: ["Sudden sleep attacks", "Difficulty getting to sleep", "Sleepwalking", "Nightmares only"], a: 0, e: "" },
    { q: "Freud called the hidden meaning of a dream the…", o: ["Latent content", "Manifest content", "Activation", "Synthesis"], a: 0, e: "" },
    { q: "Siffre's sleep–wake cycle in the cave…", o: ["Became longer than 24 hours", "Became shorter", "Stayed at exactly 24 hours", "Stopped"], a: 0, e: "" },
    { q: "Little Hans had a phobia of…", o: ["Horses", "Spiders", "Water", "Dogs"], a: 0, e: "" }
  ],
  flashcards: [
    ["Sleep cycle", "~90 min: light, deep, REM"],
    ["REM", "Rapid eye movement; dreaming; body paralysed"],
    ["Circadian rhythm", "~24-hour cycle; SCN and melatonin"],
    ["Zeitgebers", "External cues like light"],
    ["Freud on dreams", "Wish fulfilment; manifest vs latent content"],
    ["Activation-synthesis", "Dreams from random brain activity"],
    ["Siffre (1975)", "Cave: cycle lengthened beyond 24 hours"]
  ]
});

S2Data.add({
  id: "7a", group: 7, title: "Designing research",
  summary: "Hypotheses, variables, experimental designs, sampling and other research methods.",
  notes: `
<h3>Hypotheses and variables</h3>
<ul>
<li><b>Alternative hypothesis:</b> predicts a difference or relationship. <b>Null hypothesis:</b> predicts no difference.</li>
<li><b>Independent variable (IV):</b> what the researcher changes. <b>Dependent variable (DV):</b> what is measured.</li>
<li><b>Extraneous variables</b> could affect the DV and should be <b>controlled</b>.</li>
<li>Variables must be <b>operationalised</b> (made measurable).</li>
</ul>
<h3>Experimental designs</h3>
<table><tr><th>Design</th><th>Strength</th><th>Weakness</th></tr>
<tr><td>Independent groups (different people in each condition)</td><td>No order effects</td><td>Participant differences</td></tr>
<tr><td>Repeated measures (same people in all conditions)</td><td>No participant differences</td><td>Order effects (use counterbalancing)</td></tr>
<tr><td>Matched pairs</td><td>Reduces participant differences; no order effects</td><td>Time-consuming to match</td></tr></table>
<h3>Sampling</h3>
<table><tr><th>Method</th><th>How</th></tr>
<tr><td>Random</td><td>Everyone has an equal chance (e.g. names from a hat)</td></tr>
<tr><td>Opportunity</td><td>Whoever is available</td></tr>
<tr><td>Volunteer (self-selected)</td><td>People respond to an advert</td></tr>
<tr><td>Stratified</td><td>Subgroups represented in proportion</td></tr></table>
<h3>Other methods</h3>
<ul>
<li><b>Lab, field and natural experiments</b>.</li>
<li><b>Interviews and questionnaires</b>: open questions (qualitative) and closed questions (quantitative).</li>
<li><b>Case studies</b>: in-depth study of one person or group (e.g. HM).</li>
<li><b>Correlations</b>: relationships between two variables (positive, negative, none); correlation doesn't prove cause.</li>
</ul>`,
  quiz: [
    { q: "The variable the researcher changes is the…", o: ["Independent variable", "Dependent variable", "Extraneous variable", "Control variable"], a: 0, e: "" },
    { q: "The variable measured is the…", o: ["Dependent variable", "Independent variable", "Hypothesis", "Sample"], a: 0, e: "" },
    { q: "A null hypothesis predicts…", o: ["No difference or relationship", "A difference", "A positive correlation", "A negative correlation"], a: 0, e: "" },
    { q: "Which design risks order effects?", o: ["Repeated measures", "Independent groups", "Matched pairs", "Case study"], a: 0, e: "" },
    { q: "Counterbalancing reduces…", o: ["Order effects", "Participant variables", "Sampling bias", "Demand characteristics only"], a: 0, e: "" },
    { q: "Using whoever is available is…", o: ["Opportunity sampling", "Random sampling", "Stratified sampling", "Volunteer sampling"], a: 0, e: "" },
    { q: "A natural experiment uses…", o: ["An IV that occurs naturally", "A lab", "Random allocation always", "No DV"], a: 0, e: "" },
    { q: "Closed questions produce…", o: ["Quantitative data", "Qualitative data", "Case studies", "No data"], a: 0, e: "" },
    { q: "A correlation shows…", o: ["A relationship, not necessarily cause", "Cause and effect", "No relationship ever", "Experimental control"], a: 0, e: "" }
  ],
  flashcards: [
    ["IV / DV", "Changed / measured"],
    ["Alternative / null hypothesis", "Predicts difference / predicts none"],
    ["Independent groups / repeated measures / matched pairs", "Different people / same people / matched people"],
    ["Random / opportunity / volunteer / stratified", "Equal chance / available / self-selected / proportional"],
    ["Field experiment", "Natural setting, IV manipulated"],
    ["Correlation", "Relationship; not cause"]
  ]
});

S2Data.add({
  id: "7b", group: 7, title: "Data, analysis and ethics",
  summary: "Types of data, descriptive statistics, graphs, reliability and validity, and ethical guidelines.",
  notes: `
<h3>Types of data</h3>
<ul>
<li><b>Quantitative</b> (numbers) and <b>qualitative</b> (words, descriptions).</li>
<li><b>Primary</b> (collected by the researcher) and <b>secondary</b> (collected by others).</li>
</ul>
<h3>Descriptive statistics</h3>
<ul>
<li><b>Mean</b> = total ÷ number of scores; <b>median</b> = middle value; <b>mode</b> = most frequent.</li>
<li><b>Range</b> = highest − lowest (a measure of spread).</li>
<li>Also: percentages, fractions, ratios, standard form and significant figures.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Scores: 4, 6, 6, 7, 12. Mean = 35 ÷ 5 = 7. Median = 6. Mode = 6. Range = 8.</div>
<h3>Graphs</h3>
<p>Bar charts (separate categories), histograms (continuous data), scatter graphs (correlations), line graphs, and frequency tables.</p>
<h3>Reliability and validity</h3>
<ul>
<li><b>Reliability:</b> consistency; would the results be the same if repeated?</li>
<li><b>Validity:</b> does it measure what it claims to? <b>Ecological validity</b>: does it reflect real life?</li>
<li><b>Demand characteristics</b> (participants guessing the aim) and <b>researcher bias</b> reduce validity.</li>
</ul>
<h3>Ethics (British Psychological Society)</h3>
<table><tr><th>Guideline</th><th>Meaning</th></tr>
<tr><td>Informed consent</td><td>Participants agree knowing what's involved</td></tr>
<tr><td>Deception</td><td>Should be avoided; if used, justified and followed by debriefing</td></tr>
<tr><td>Right to withdraw</td><td>Participants can leave at any time</td></tr>
<tr><td>Protection from harm</td><td>No physical or psychological harm</td></tr>
<tr><td>Confidentiality</td><td>Personal data kept private</td></tr>
<tr><td>Debriefing</td><td>Explaining the study's true aims afterwards</td></tr></table>`,
  quiz: [
    { q: "Qualitative data is…", o: ["Words and descriptions", "Numbers", "Graphs", "Percentages"], a: 0, e: "" },
    { q: "Secondary data is…", o: ["Collected by others", "Collected by the researcher", "Always qualitative", "Always accurate"], a: 0, e: "" },
    { q: "The mean of 2, 4, 6, 8 is…", o: ["5", "4", "6", "20"], a: 0, e: "" },
    { q: "The median of 3, 9, 4, 7, 5 is…", o: ["5", "4", "7", "9"], a: 0, e: "" },
    { q: "The mode of 2, 3, 3, 5, 8 is…", o: ["3", "2", "5", "4.2"], a: 0, e: "" },
    { q: "Which graph shows a correlation?", o: ["Scatter graph", "Bar chart", "Pie chart", "Histogram"], a: 0, e: "" },
    { q: "Reliability means…", o: ["Consistency of results", "Measuring the right thing", "Real-life setting", "Ethics"], a: 0, e: "" },
    { q: "Participants guessing the aim and changing behaviour are…", o: ["Demand characteristics", "Order effects", "Confidentiality", "Debriefing"], a: 0, e: "" },
    { q: "Telling participants the true aim afterwards is…", o: ["Debriefing", "Consent", "Deception", "Withdrawal"], a: 0, e: "" }
  ],
  flashcards: [
    ["Quantitative / qualitative", "Numbers / words"],
    ["Primary / secondary", "Own data / others' data"],
    ["Mean, median, mode, range", "Average, middle, most common, spread"],
    ["Reliability", "Consistency"],
    ["Validity", "Measures what it claims; ecological validity"],
    ["BPS ethics", "Consent, deception, withdrawal, harm, confidentiality, debrief"]
  ]
});

S2Data.detail("4a", { mistakes: ["Confusing sympathetic (arousal) with parasympathetic (calming)."], tips: ["Draw a labelled neuron and synapse: diagrams earn marks quickly."], fact: "Nerve impulses can travel at over 100 metres per second along myelinated axons." });
S2Data.detail("4b", { mistakes: ["Forgetting that each hemisphere controls the opposite side of the body."], tips: ["For Sperry, remember: right visual field → left hemisphere → can say it."], fact: "Phineas Gage lived for about 12 years after his accident, working as a stagecoach driver in Chile for some of that time." });
S2Data.detail("5a", { mistakes: ["Confusing obedience (orders from authority) with conformity (pressure from a group)."], tips: ["Always split factors into situational and dispositional."], fact: "Milgram's experiments have been repeated in many countries, with broadly similar results." });
S2Data.detail("5b", { mistakes: ["Saying Piliavin found diffusion of responsibility: they didn't."], tips: ["Link Piliavin's findings to the cost–reward model of helping."], fact: "The 1964 murder of Kitty Genovese in New York prompted research into the bystander effect." });
S2Data.detail("6a", { mistakes: ["Assuming correlations between violent media and aggression prove cause."], tips: ["Charlton's natural experiment is useful counter-evidence to media-violence claims."], fact: "St Helena is one of the most remote inhabited islands in the world, in the South Atlantic." });
S2Data.detail("6b", { mistakes: ["Saying we only dream in REM: dreams can happen in other stages too, but are most vivid in REM."], tips: ["Compare Freud and activation-synthesis on meaning, evidence and testability."], fact: "Teenagers' body clocks shift later, which is why many find early mornings hard." });
S2Data.detail("7a", { mistakes: ["Writing hypotheses that aren't operationalised."], tips: ["A good hypothesis states the IV, the DV and the direction, in measurable terms."], fact: "Counterbalancing is often done with an ABBA design." });
S2Data.detail("7b", { mistakes: ["Rounding incorrectly or forgetting units in calculations."], tips: ["Show working for every calculation: method marks are available."], fact: "Research methods make up a large part of Paper 2, so they're worth practising every week." });
