/* Video explainers — Psychology. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Brain development and Piaget", sub: "How children's thinking grows.", mark: "🧒",
    say: ["Children don't just know less than adults. According to Piaget, they think in completely different ways."] },
  { type: "flow", title: "Early brain development", nodes: ["Brain stem & thalamus", "Cerebellum", "Cortex", "Rapid connections, then pruning"],
    say: ["The brain stem and thalamus develop first, in the womb, controlling basic survival functions.", "The cerebellum follows, for coordination.", "The cortex develops last, and keeps maturing into our twenties.", "After birth, connections multiply rapidly, and unused ones are pruned away."] },
  { type: "compare", title: "Piaget's four stages", h: ["Age", "Key feature"],
    rows: [["Sensorimotor", "0–2", "Object permanence"], ["Pre-operational", "2–7", "Egocentrism; no conservation"], ["Concrete operational", "7–11", "Conservation, logic"], ["Formal operational", "11+", "Abstract thinking"]],
    say: ["In the sensorimotor stage, babies learn through their senses and discover that objects still exist when hidden.", "Pre-operational children are egocentric and can't conserve.", "Concrete operational children can conserve and think logically about real objects.", "And from about eleven, we can think abstractly."] },
  { type: "big", text: "Three mountains task (1956)", sub: "Four-year-olds chose their own view: egocentrism",
    say: ["Piaget and Inhelder asked children what a doll could see across a model of three mountains.", "Young children chose their own view. Critics like Hughes found that, with a more familiar task, even young children could take another's view."] },
  { type: "quiz", q: "Egocentrism is typical of which stage?", o: ["Pre-operational", "Sensorimotor", "Concrete operational", "Formal operational"], a: 0,
    why: "Children aged 2–7 struggle to see others' viewpoints.", say: ["Which stage is egocentrism typical of?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Mindset and learning", sub: "Dweck, Willingham and Gunderson.", mark: "🌱",
    say: ["How you think about your own ability may affect how much you achieve."] },
  { type: "compare", title: "Dweck's mindsets", h: ["Fixed", "Growth"],
    rows: [["Ability", "Set at birth", "Grows with effort"], ["Challenges", "Avoided", "Welcomed"], ["Mistakes", "Proof of failure", "Chances to learn"]],
    say: ["A fixed mindset sees ability as set. A growth mindset sees it as something you can build.", "Fixed-mindset learners avoid challenges; growth-mindset learners welcome them.", "And mistakes become chances to learn rather than proof of failure."] },
  { type: "flow", title: "Gunderson et al. (2013)", nodes: ["53 toddlers filmed at home, ages 1–3", "Praise coded: process or person", "Mindset tested at 7–8", "Process praise → growth mindset"],
    say: ["Gunderson filmed fifty-three toddlers with their caregivers at home.", "Each piece of praise was coded: process praise for effort, or person praise for being clever.", "Five years later, the children's mindsets were measured.", "More process praise predicted a growth mindset. Boys got more process praise than girls."] },
  { type: "points", title: "Willingham's learning theory", items: ["No evidence for learning styles", "Knowledge comes before thinking skills", "Practice and effort matter"],
    say: ["Daniel Willingham argues there's no good evidence for teaching to learning styles.", "You need factual knowledge before you can think critically about a topic.", "And practice, done effortfully, is essential."] },
  { type: "quiz", q: "'You tried really hard' is…", o: ["Process praise", "Person praise", "Criticism", "Neutral"], a: 0,
    why: "It praises effort, which encourages a growth mindset.", say: ["Is 'you tried really hard' process praise or person praise?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "How memory works", sub: "Types, stores and reconstruction.", mark: "🧠",
    say: ["Memory involves three processes: encoding information, storing it, and retrieving it."] },
  { type: "compare", title: "Long-term memory types", h: ["Example"],
    rows: [["Episodic", "Your last birthday"], ["Semantic", "Paris is the capital of France"], ["Procedural", "Riding a bike"]],
    say: ["Episodic memories are personal experiences.", "Semantic memories are facts and knowledge.", "Procedural memories are skills you do without thinking."] },
  { type: "flow", title: "Multi-store model", nodes: ["Sensory register", "Short-term memory: 7 ± 2, ~18–30 s", "Long-term memory: unlimited"],
    say: ["Information from the senses briefly enters the sensory register.", "If we pay attention, it moves into short-term memory, which holds about seven items for around twenty seconds.", "Rehearsal transfers it to long-term memory, which is potentially unlimited."] },
  { type: "big", text: "Memory is reconstructive", sub: "We rebuild memories using schemas",
    say: ["Bartlett argued we don't replay memories like a video.", "We rebuild them, filling gaps with what we expect, which is why memories can be distorted."] },
  { type: "quiz", q: "What moves information from STM to LTM?", o: ["Rehearsal", "Attention", "Forgetting", "Retrieval"], a: 0,
    why: "In the multi-store model, rehearsal transfers it.", say: ["In the multi-store model, what moves information from short-term to long-term memory?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Memory studies", sub: "Bartlett, Peterson and Peterson, and HM.", mark: "📋",
    say: ["Three pieces of evidence shape what we know about memory."] },
  { type: "flow", title: "Bartlett (1932)", nodes: ["English participants read a Native American tale", "Recalled it repeatedly", "Stories shortened and changed", "Memory is reconstructive"],
    say: ["Bartlett gave English participants an unfamiliar folk tale, the War of the Ghosts.", "They recalled it several times.", "The stories got shorter, and strange details changed to fit English culture: canoes became boats.", "He concluded memory is reconstructive."] },
  { type: "graph", title: "Peterson and Peterson (1959)", x: "delay (s)", y: "% recalled",
    lines: [{ pts: [[0.1, 0.9], [0.3, 0.55], [0.5, 0.33], [0.7, 0.2], [0.9, 0.1]] }],
    marks: [{ x: 0.1, y: 0.9, t: "~90% at 3 s", s: 2, anchor: "start", dx: 10 }, { x: 0.9, y: 0.1, t: "~10% at 18 s", s: 2, anchor: "end", dx: -4, dy: -44 }],
    say: ["Twenty-four students heard trigrams like K D T, then counted backwards in threes to stop rehearsal.", "Recall dropped steeply as the delay grew.", "From about ninety percent after three seconds to about ten percent after eighteen. Without rehearsal, short-term memory is brief."] },
  { type: "big", text: "HM (Henry Molaison)", sub: "Hippocampus removed in 1953: no new long-term memories",
    say: ["After surgery for epilepsy in 1953, HM couldn't form new long-term memories.", "But his short-term memory and skill learning were fine, suggesting separate memory systems."] },
  { type: "quiz", q: "Why did participants count backwards in threes?", o: ["To prevent rehearsal", "To test maths", "To relax", "To remember better"], a: 0,
    why: "It blocked them from repeating the trigram.", say: ["Why did participants count backwards in threes?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Depression", sub: "Symptoms, explanations and treatments.", mark: "☁",
    say: ["Depression is one of the most common mental health problems. Psychologists explain and treat it in different ways."] },
  { type: "points", title: "Symptoms (2+ weeks)", items: ["Persistent low mood", "Loss of interest or pleasure", "Fatigue, sleep and appetite changes", "Low self-worth and guilt"],
    say: ["For a diagnosis, symptoms last at least two weeks: persistent low mood,", "losing interest in things you used to enjoy,", "tiredness and changes in sleep and appetite,", "and feelings of worthlessness or guilt."] },
  { type: "compare", title: "Explanations and treatments", h: ["Explanation", "Treatment"],
    rows: [["Biological", "Low serotonin; genes", "SSRIs raise serotonin"], ["Psychological", "Negative thinking (Beck)", "CBT challenges thoughts"]],
    say: ["The biological explanation points to low serotonin and genes; antidepressants called SSRIs increase serotonin.", "The psychological explanation focuses on negative thinking; cognitive behavioural therapy challenges and replaces those thoughts."] },
  { type: "big", text: "Caspi et al. (2003)", sub: "847 people: short 5-HTT gene + stress → more depression",
    say: ["Caspi studied eight hundred and forty-seven New Zealanders over time.", "People with a short version of the 5-HTT gene were more likely to become depressed after stressful events. Genes and environment interact."] },
  { type: "quiz", q: "How do SSRIs work?", o: ["Increase serotonin in synapses", "Reduce serotonin", "Change thoughts", "Remove genes"], a: 0,
    why: "They block reuptake, so more serotonin stays available.", say: ["How do SSRIs work?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Addiction", sub: "Explanations, treatments and Kendler et al.", mark: "⛓",
    say: ["Addiction can involve substances like alcohol or behaviours like gambling. Why do some people become addicted?"] },
  { type: "points", title: "Features of addiction", items: ["Craving and loss of control", "Tolerance: needing more", "Withdrawal when stopping", "Continuing despite harm"],
    say: ["People feel strong cravings and lose control.", "They develop tolerance and need more for the same effect.", "Stopping brings withdrawal symptoms.", "And they continue despite clear harm."] },
  { type: "compare", title: "Explanations", h: ["Key idea"],
    rows: [["Biological", "Inherited vulnerability; dopamine reward"], ["Learning theory", "Reinforcement and copying role models"]],
    say: ["Biologically, addiction runs in families, and drugs hijack the brain's dopamine reward system.", "Learning theory says use is reinforced by pleasure, and learned by copying peers and family."] },
  { type: "big", text: "Kendler et al. (2003)", sub: "~1200 male twin pairs: shared genetic vulnerability across drugs",
    say: ["Kendler studied around twelve hundred pairs of male twins.", "Identical twins were more alike than non-identical twins, and the genetic risk was largely shared across different drugs."] },
  { type: "quiz", q: "Tolerance means…", o: ["Needing more for the same effect", "Stopping easily", "Feeling sick", "No craving"], a: 0,
    why: "The body adapts to the substance.", say: ["What does tolerance mean?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "The nervous system", sub: "From fight or flight to synapses.", mark: "⚡",
    say: ["The nervous system carries messages around your body in fractions of a second."] },
  { type: "compare", title: "Divisions", h: ["Role"],
    rows: [["CNS", "Brain and spinal cord: process information"], ["Somatic", "Voluntary movement and senses"], ["Autonomic", "Automatic functions: heart, digestion"]],
    say: ["The central nervous system, the brain and spinal cord, processes information.", "The somatic system handles voluntary movement.", "The autonomic system runs automatic functions like your heartbeat."] },
  { type: "points", title: "Fight or flight", items: ["Heart rate and breathing up", "Adrenaline released", "Pupils dilate", "Digestion slows"],
    say: ["When the sympathetic nervous system detects a threat, your heart rate and breathing rise,", "adrenaline floods your blood,", "your pupils widen,", "and digestion slows. Afterwards, the parasympathetic system calms you down."] },
  { type: "flow", title: "Synaptic transmission", nodes: ["Impulse reaches axon terminal", "Neurotransmitters released", "Bind to receptors", "Next neuron excited or inhibited"],
    say: ["An electrical impulse reaches the end of the axon.", "Chemical neurotransmitters are released into the synapse.", "They bind to receptors on the next neuron.", "Excitatory ones make it more likely to fire; inhibitory ones less likely."] },
  { type: "quiz", q: "Which neurons carry messages to muscles?", o: ["Motor", "Sensory", "Relay", "Glial"], a: 0,
    why: "Motor neurons carry signals from the CNS to effectors.", say: ["Which neurons carry messages to muscles?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "The brain", sub: "Lobes, lateralisation and brain damage.", mark: "🧩",
    say: ["Different parts of the brain specialise in different jobs, and damage reveals what each part does."] },
  { type: "compare", title: "Lobes", h: ["Function"],
    rows: [["Frontal", "Decisions, personality, movement"], ["Parietal", "Touch and body sensation"], ["Temporal", "Hearing and memory"], ["Occipital", "Vision"]],
    say: ["The frontal lobe handles decisions, personality and movement.", "The parietal lobe processes touch.", "The temporal lobe deals with hearing and memory.", "And the occipital lobe, at the back, processes vision."] },
  { type: "flow", title: "Sperry (1968)", nodes: ["11 split-brain patients", "Image to right visual field → named", "Image to left visual field → not named", "Could pick it out by touch"],
    say: ["Sperry studied eleven patients whose hemispheres had been surgically separated.", "Images flashed to the right visual field reached the left hemisphere, and could be named.", "Images to the left visual field reached the right hemisphere and couldn't be named,", "but the left hand could find the object by touch. Language is in the left hemisphere."] },
  { type: "big", text: "Damasio et al. (1994)", sub: "Gage's prefrontal damage explains his personality change",
    say: ["In 1848, an iron rod shot through Phineas Gage's skull. He survived, but became impulsive and rude.", "Damasio used computer modelling to show the rod damaged his prefrontal cortex."] },
  { type: "quiz", q: "Which lobe processes vision?", o: ["Occipital", "Frontal", "Temporal", "Parietal"], a: 0,
    why: "It's at the back of the brain.", say: ["Which lobe processes vision?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Obedience and conformity", sub: "Why we follow orders and fit in.", mark: "👮",
    say: ["We like to think we're independent. Psychology suggests we obey and conform more than we realise."] },
  { type: "big", text: "Milgram (1963): 65% went to 450 V", sub: "Ordinary people obeyed an authority figure",
    say: ["In Milgram's study, sixty-five percent of participants gave what they believed was a deadly electric shock when told to.", "People in an agentic state see themselves as carrying out someone else's wishes."] },
  { type: "flow", title: "Bickman (1974)", nodes: ["Field experiment, New York", "Civilian, milkman or guard", "Gave pedestrians orders", "Guard obeyed most"],
    say: ["Bickman ran a field experiment on New York streets.", "A researcher dressed as a civilian, a milkman or a security guard.", "He gave passers-by orders, like picking up litter.", "People obeyed the guard most: uniforms signal authority."] },
  { type: "compare", title: "Factors", h: ["Obedience", "Conformity"],
    rows: [["Situational", "Uniform, proximity, location", "Group size, task difficulty"], ["Dispositional", "Authoritarian personality", "Self-esteem, culture"]],
    say: ["Situational factors for obedience include uniforms and closeness of the authority; for conformity, group size and task difficulty.", "Dispositional factors include an authoritarian personality, and for conformity, low self-esteem and collectivist culture."] },
  { type: "quiz", q: "Which uniform got most obedience in Bickman's study?", o: ["Guard", "Milkman", "Civilian", "Doctor"], a: 0,
    why: "It signalled the most legitimate authority.", say: ["In Bickman's study, which uniform got the most obedience?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Bystanders and crowds", sub: "Who helps, and why crowds change behaviour.", mark: "👥",
    say: ["If you collapsed in a crowded street, would anyone help? It depends."] },
  { type: "points", title: "The bystander effect", items: ["Diffusion of responsibility", "Audience inhibition", "Pluralistic ignorance"],
    say: ["With more people around, responsibility is spread thinly.", "People fear looking foolish.", "And if others look calm, we assume it isn't an emergency."] },
  { type: "compare", title: "Piliavin et al. (1969)", h: ["Victim", "Helped"],
    rows: [["Ill (cane)", "Collapsed on subway", "~95%"], ["Drunk", "Smelled of alcohol", "~50%"]],
    say: ["On the New York subway, a man with a cane collapsed. He was helped about ninety-five percent of the time.", "When he seemed drunk, only about half the time. People weigh up the costs and rewards of helping."] },
  { type: "big", text: "Deindividuation", sub: "Anonymity in crowds reduces responsibility",
    say: ["In a large crowd, people feel anonymous and less self-aware.", "That can lead to antisocial behaviour like rioting, though crowds can also be helpful and generous."] },
  { type: "quiz", q: "Piliavin's findings support the…", o: ["Cost–reward model", "Multi-store model", "Agentic state", "Hebb's theory"], a: 0,
    why: "Helping depended on the costs involved.", say: ["Piliavin's findings support which model?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Criminal psychology", sub: "Why people offend, and what reduces it.", mark: "⚖",
    say: ["Are criminals born or made? Psychologists offer both kinds of explanation."] },
  { type: "compare", title: "Explanations", h: ["Key idea"],
    rows: [["Social learning", "Imitating rewarded role models"], ["Eysenck's personality", "High extraversion, neuroticism, psychoticism"], ["Biological", "Genes and brain differences"]],
    say: ["Social learning theory says crime is learned by watching role models get rewarded.", "Eysenck argued a criminal personality, partly inherited, scores high on extraversion, neuroticism and psychoticism.", "Other biological explanations focus on genes and brain structure."] },
  { type: "compare", title: "Studies of media", h: ["Finding"],
    rows: [["Cooper & Mackie (1986)", "Aggressive games raised girls' aggression"], ["Charlton et al. (2000)", "TV on St Helena: no rise in antisocial behaviour"]],
    say: ["Cooper and Mackie found girls became more aggressive after playing or watching aggressive video games.", "But when TV arrived on the remote island of St Helena in 1995, Charlton found no increase in children's antisocial behaviour."] },
  { type: "points", title: "Dealing with offenders", items: ["Prison: deterrence, but high recidivism", "Restorative justice", "Token economies", "Anger management"],
    say: ["Prison protects the public but many reoffend.", "Restorative justice brings offenders face to face with victims.", "Token economies reward good behaviour.", "And anger management teaches self-control."] },
  { type: "quiz", q: "Recidivism means…", o: ["Reoffending", "Rehabilitation", "Restitution", "Retribution"], a: 0,
    why: "A key measure of whether punishment works.", say: ["What does recidivism mean?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Sleep and dreaming", sub: "Body clocks, sleep stages and dream theories.", mark: "🌙",
    say: ["We spend about a third of our lives asleep. What's happening, and why do we dream?"] },
  { type: "flow", title: "A sleep cycle (~90 min)", nodes: ["Light sleep", "Deep slow-wave sleep", "REM sleep: dreams"],
    say: ["We drift into light sleep, easy to wake from.", "Then deep, slow-wave sleep, when the body repairs itself.", "Then REM sleep, with rapid eye movements and vivid dreams. The cycle repeats four to six times a night."] },
  { type: "compare", title: "Body clocks", h: ["Example"],
    rows: [["Endogenous pacemaker", "SCN controls melatonin"], ["Exogenous zeitgeber", "Light resets the clock"]],
    say: ["Inside us, the suprachiasmatic nucleus acts as a master clock, controlling the sleep hormone melatonin.", "Outside cues, especially light, reset that clock every day."] },
  { type: "compare", title: "Why we dream", h: ["Theory"],
    rows: [["Freud", "Wish fulfilment; hidden (latent) meaning"], ["Activation-synthesis", "Random brain activity the cortex makes sense of"]],
    say: ["Freud saw dreams as disguised wishes, with a hidden latent meaning beneath the manifest storyline.", "Hobson and McCarley argued dreams are the brain's attempt to make sense of random activity in REM sleep."] },
  { type: "quiz", q: "What happened to Siffre's sleep–wake cycle in the cave?", o: ["It lengthened beyond 24 hours", "It shortened", "It stayed at 24 hours", "It stopped"], a: 0,
    why: "Without zeitgebers, the endogenous rhythm ran longer.", say: ["What happened to Siffre's sleep-wake cycle in the cave?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "Designing research", sub: "Hypotheses, variables, designs and samples.", mark: "🔍",
    say: ["Good psychology depends on good research design. Here are the building blocks."] },
  { type: "compare", title: "Variables", h: ["Meaning"],
    rows: [["Independent (IV)", "What the researcher changes"], ["Dependent (DV)", "What is measured"], ["Extraneous", "Other factors that must be controlled"]],
    say: ["The independent variable is what the researcher changes.", "The dependent variable is what's measured.", "And extraneous variables are anything else that could affect results, so they're controlled."] },
  { type: "compare", title: "Experimental designs", h: ["Strength", "Weakness"],
    rows: [["Independent groups", "No order effects", "Participant differences"], ["Repeated measures", "No participant differences", "Order effects"], ["Matched pairs", "Both reduced", "Hard to match"]],
    say: ["Independent groups use different people, avoiding order effects but adding participant differences.", "Repeated measures use the same people, but practice or fatigue can affect results. Counterbalancing helps.", "Matched pairs reduce both problems, but matching takes time."] },
  { type: "compare", title: "Sampling", h: ["How"],
    rows: [["Random", "Equal chance for all"], ["Opportunity", "Whoever is available"], ["Volunteer", "People respond to an advert"], ["Stratified", "Subgroups in proportion"]],
    say: ["Random sampling gives everyone an equal chance.", "Opportunity sampling uses whoever is around: quick but biased.", "Volunteers choose themselves.", "Stratified sampling represents subgroups in proportion."] },
  { type: "quiz", q: "The variable that is measured is the…", o: ["Dependent variable", "Independent variable", "Extraneous variable", "Control"], a: 0,
    why: "It depends on the IV.", say: ["What is the variable that gets measured called?"] }
]});

S2Data.video("7b", { scenes: [
  { type: "title", title: "Data, analysis and ethics", sub: "Statistics, quality and the BPS guidelines.", mark: "📊",
    say: ["Once data is collected, psychologists summarise it, judge its quality, and make sure the research was ethical."] },
  { type: "calc", title: "Descriptive statistics", q: "Scores: 4, 6, 6, 7, 12",
    lines: ["Mean = 35 ÷ 5 = 7", "Median = 6, Mode = 6", "Range = 12 − 4 = 8"],
    say: ["The mean adds the scores and divides by five: seven.", "The middle score, the median, is six, and six is also the mode.", "The range, highest minus lowest, is eight."] },
  { type: "compare", title: "Quality of research", h: ["Means"],
    rows: [["Reliability", "Consistent results"], ["Validity", "Measures what it claims"], ["Ecological validity", "Applies to real life"]],
    say: ["Reliable research gives consistent results.", "Valid research measures what it claims to.", "And ecologically valid research reflects real life."] },
  { type: "points", title: "BPS ethics", items: ["Informed consent", "Avoid deception; debrief", "Right to withdraw", "Protection from harm", "Confidentiality"],
    say: ["Participants should give informed consent.", "Deception should be avoided, and everyone debriefed.", "They can withdraw at any time.", "They must be protected from harm.", "And their data kept confidential."] },
  { type: "quiz", q: "Which average is best with an extreme score?", o: ["Median", "Mean", "Range", "None"], a: 0,
    why: "It isn't distorted by outliers.", say: ["Which average is best to use when there is an extreme score?"] }
]});
