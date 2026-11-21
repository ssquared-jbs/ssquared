/* Video explainers — A-level Psychology. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Obedience", sub: "Milgram, agency theory and social impact.", mark: "⚡",
    say: ["Why would ordinary people harm a stranger just because they were told to?"] },
  { type: "flow", title: "Milgram (1963)", nodes: ["40 men, rigged draw", "Shocks 15–450 V", "Four prods", "65% to 450 V"],
    say: ["Forty men took part, and a rigged draw always made them the teacher.", "They gave shocks rising from fifteen to four hundred and fifty volts for each mistake.", "If they hesitated, the experimenter used four standard prods.", "Sixty-five percent went all the way to four hundred and fifty volts."] },
  { type: "compare", title: "Variations (1974)", h: ["Change", "Obedience"],
    rows: [["Exp 7", "Orders by telephone", "22.5%"], ["Exp 10", "Run-down office", "47.5%"], ["Exp 13", "Ordinary man in charge", "20%"]],
    say: ["When orders came by phone, full obedience fell to twenty-two and a half percent.", "Moving to a run-down office cut it to forty-seven and a half percent.", "And when an ordinary man gave orders, it dropped to twenty percent."] },
  { type: "compare", title: "Agency theory", h: ["Meaning"],
    rows: [["Autonomous state", "Act on own conscience"], ["Agentic state", "Act as agent of authority"], ["Moral strain", "Distress when obeying"], ["Binding factors", "Keep us obeying"]],
    say: ["In the autonomous state, we act on our own conscience.", "In the agentic state, we hand responsibility to the authority.", "That causes moral strain.", "But binding factors, like not wanting to seem rude, keep us going."] },
  { type: "points", title: "Social impact theory", items: ["Strength: status of the source", "Immediacy: closeness", "Number of sources"],
    say: ["Latané said influence depends on the strength or status of the source,", "how close it is in space or time,", "and how many sources there are."] },
  { type: "quiz", q: "Obedience when orders came by telephone?", o: ["22.5%", "65%", "47.5%", "100%"], a: 0,
    why: "Less immediacy, less obedience.", say: ["When the experimenter phoned in the orders, what was the obedience rate?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Prejudice", sub: "Social identity and realistic conflict.", mark: "⚔",
    say: ["Why do groups so easily turn against each other?"] },
  { type: "flow", title: "Social identity theory", nodes: ["Categorisation", "Identification", "Comparison"],
    say: ["We sort people into groups, including ourselves.", "We take on the identity and norms of our in-group.", "Then we compare our group favourably with others, to boost self-esteem."] },
  { type: "flow", title: "Robbers Cave (Sherif)", nodes: ["In-group formation", "Friction", "Integration"],
    say: ["Twenty-two boys at a summer camp formed two groups, the Eagles and the Rattlers.", "Competitions for prizes led to name-calling, raids and flag burning.", "Superordinate goals, like fixing the water supply, brought them back together."] },
  { type: "compare", title: "Two theories", h: ["Cause of prejudice"],
    rows: [["Social identity theory", "Categorisation alone"], ["Realistic conflict theory", "Competition for resources"]],
    say: ["Social identity theory says just being in groups is enough, as the minimal group studies show.", "Realistic conflict theory says competition for scarce resources is the trigger."] },
  { type: "big", text: "Shared identity matters", sub: "Reicher and Haslam's BBC prison study",
    say: ["In the BBC prison study, the prisoners formed a shared identity and challenged the guards.", "Behaviour depended on group identity, not simply on assigned roles."] },
  { type: "quiz", q: "What reduced hostility at Robbers Cave?", o: ["Superordinate goals", "More competitions", "Separation", "Punishment"], a: 0,
    why: "Goals that needed both groups.", say: ["What finally reduced hostility between the Eagles and the Rattlers?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Social psychology methods", sub: "Surveys, sampling and ethics.", mark: "📋",
    say: ["Social psychologists often ask people directly, through questionnaires and interviews."] },
  { type: "compare", title: "Question types", h: ["Data", "Trade-off"],
    rows: [["Closed / Likert", "Quantitative", "Easy to analyse, less depth"], ["Open", "Qualitative", "Rich detail, harder to compare"]],
    say: ["Closed questions and Likert scales give numbers that are easy to analyse, but lack depth.", "Open questions give rich detail, which can be analysed for themes."] },
  { type: "compare", title: "Sampling", h: ["Issue"],
    rows: [["Random", "Needs a full list"], ["Stratified", "Time-consuming"], ["Volunteer", "Volunteer bias"], ["Opportunity", "Unrepresentative"]],
    say: ["Random sampling is fair, but needs a list of everyone.", "Stratified sampling mirrors subgroups, but takes time.", "Volunteers may be unusually keen.", "And opportunity samples are quick, but unrepresentative."] },
  { type: "points", title: "BPS Code of Ethics (2009)", items: ["Respect", "Competence", "Responsibility", "Integrity"],
    say: ["Respect: consent, confidentiality and the right to withdraw.", "Competence: working within your abilities.", "Responsibility: protecting participants and debriefing them.", "Integrity: honesty, with deception only when justified."] },
  { type: "big", text: "Burger (2009): about 70%", sub: "continued past 150 V",
    say: ["Burger replicated Milgram ethically, stopping at a hundred and fifty volts.", "About seventy percent were willing to go on, so obedience had barely changed."] },
  { type: "quiz", q: "Burger stopped the procedure at…", o: ["150 V", "450 V", "300 V", "75 V"], a: 0,
    why: "Beyond that, Milgram's obedient participants mostly continued.", say: ["At what voltage did Burger stop his study?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Models of memory", sub: "Multi-store, working memory and reconstruction.", mark: "🧠",
    say: ["How does information get into memory, and how reliable is it?"] },
  { type: "compare", title: "Multi-store model", h: ["Capacity", "Duration", "Encoding"],
    rows: [["Sensory", "Large", "Under 2 s", "Senses"], ["STM", "7 ± 2", "18–30 s", "Acoustic"], ["LTM", "Unlimited", "Lifetime", "Semantic"]],
    say: ["The sensory register holds lots of information, very briefly.", "Attention moves some into short-term memory: about seven items for about half a minute.", "Rehearsal moves it into long-term memory, which is unlimited and encodes by meaning."] },
  { type: "compare", title: "Working memory model", h: ["Role"],
    rows: [["Central executive", "Directs attention"], ["Phonological loop", "Sounds: inner ear and voice"], ["Visuospatial sketchpad", "Images and space"], ["Episodic buffer", "Links to LTM (2000)"]],
    say: ["The central executive controls attention.", "The phonological loop handles sound.", "The visuospatial sketchpad handles images.", "And the episodic buffer, added in 2000, links everything together."] },
  { type: "compare", title: "Long-term memory", h: ["Example"],
    rows: [["Episodic", "Your last birthday"], ["Semantic", "Paris is in France"]],
    say: ["Episodic memories are personal events, tied to a time and place.", "Semantic memories are facts and meanings."] },
  { type: "big", text: "Memory is reconstructed", sub: "Bartlett's War of the Ghosts",
    say: ["Bartlett's participants retold a Native American story.", "It got shorter and changed to fit their own culture, because we rebuild memories using schemas."] },
  { type: "quiz", q: "The episodic buffer was added in…", o: ["2000", "1974", "1968", "1932"], a: 0,
    why: "Baddeley added it to link the components.", say: ["When was the episodic buffer added to the working memory model?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Cognitive methods and studies", sub: "Experiments, case studies and statistics.", mark: "🔬",
    say: ["Cognitive psychologists mostly use controlled experiments and case studies."] },
  { type: "compare", title: "Experimental designs", h: ["Strength", "Weakness"],
    rows: [["Independent groups", "No order effects", "Participant variables"], ["Repeated measures", "Same people", "Order effects"], ["Matched pairs", "Both controlled", "Hard to match"]],
    say: ["Independent groups avoid order effects, but people differ between groups.", "Repeated measures use the same people, but order effects need counterbalancing.", "Matched pairs reduce both problems, but matching is difficult."] },
  { type: "flow", title: "Baddeley (1966b)", nodes: ["Similar vs dissimilar lists", "Interference task", "Recall after 20 min", "LTM is semantic"],
    say: ["Participants learned word lists that were acoustically or semantically similar, or not.", "An interference task stopped rehearsal.", "Recall was tested again after twenty minutes, to test long-term memory.", "Semantically similar words were harder, so LTM encodes by meaning."] },
  { type: "points", title: "HM", items: ["Hippocampus removed, 1953", "No new episodic LTM", "STM and skills intact"],
    say: ["Henry Molaison had parts of his medial temporal lobes removed in 1953.", "He couldn't form new long-term episodic memories.", "But his short-term memory and ability to learn skills survived, suggesting separate stores."] },
  { type: "big", text: "Mann-Whitney U ≤ critical", sub: "Difference, independent groups, ordinal data",
    say: ["The Mann-Whitney U test checks for a difference between two independent groups with ordinal data.", "It's significant if U is equal to or less than the critical value."] },
  { type: "quiz", q: "Baddeley (1966b) found LTM encodes…", o: ["Semantically", "Acoustically", "Visually", "Not at all"], a: 0,
    why: "Similar meanings caused confusion.", say: ["According to Baddeley, how does long-term memory encode information?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Brain and aggression", sub: "Neurons, drugs and Raine.", mark: "⚡",
    say: ["Biological psychology looks for the roots of behaviour in the brain."] },
  { type: "flow", title: "Synaptic transmission", nodes: ["Impulse arrives", "Neurotransmitter released", "Binds to receptors", "Reuptake"],
    say: ["An electrical impulse reaches the end of the neuron.", "Neurotransmitter is released into the synaptic gap.", "It binds to receptors on the next neuron, exciting or inhibiting it.", "Then it's broken down or taken back up."] },
  { type: "big", text: "Cocaine blocks dopamine reuptake", sub: "Dopamine stays in the synapse longer",
    say: ["Cocaine stops dopamine being reabsorbed, so it builds up and causes euphoria.", "Over time, receptors become less sensitive, leading to tolerance."] },
  { type: "compare", title: "Brain areas", h: ["Role in aggression"],
    rows: [["Amygdala", "Threat and emotion"], ["Prefrontal cortex", "Impulse control"], ["Hypothalamus", "Hormone regulation"]],
    say: ["The amygdala responds to threat and emotion.", "The prefrontal cortex controls impulses; low activity is linked to aggression.", "And the hypothalamus regulates hormones like testosterone."] },
  { type: "flow", title: "Raine et al. (1997)", nodes: ["41 NGRI murderers + 41 controls", "PET scans", "Low prefrontal activity", "Amygdala asymmetry"],
    say: ["Raine compared forty-one murderers with forty-one matched controls.", "He used PET scans during an attention task.", "The murderers had lower prefrontal activity.", "And unusual asymmetry in the amygdala. But this shows a predisposition, not a cause."] },
  { type: "quiz", q: "Which area controls impulses?", o: ["Prefrontal cortex", "Cerebellum", "Brain stem", "Occipital lobe"], a: 0,
    why: "Low activity is linked to impulsive aggression.", say: ["Which brain area is most involved in impulse control?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Evolution and Freud", sub: "Two explanations of aggression.", mark: "🦴",
    say: ["Is aggression a survival strategy, or an unconscious drive?"] },
  { type: "points", title: "Evolutionary explanation", items: ["Competition for mates and resources", "Protecting offspring", "Sexual jealousy"],
    say: ["Aggression helped our ancestors compete for mates and resources.", "It helped protect their young.", "And jealousy may have guarded against raising another man's child."] },
  { type: "compare", title: "Freud's personality", h: ["Principle"],
    rows: [["Id", "Pleasure"], ["Ego", "Reality"], ["Superego", "Morality"]],
    say: ["The id wants instant gratification.", "The ego balances desires with reality.", "The superego is our conscience."] },
  { type: "points", title: "Freud on aggression", items: ["Thanatos: death instinct", "Catharsis releases it", "Displacement redirects it"],
    say: ["Freud saw aggression as coming from Thanatos, a death instinct.", "Releasing it safely, through catharsis, should reduce it.", "Or it can be displaced onto a safer target. But catharsis has little research support."] },
  { type: "compare", title: "Brendgen et al. (2005)", h: ["Main influence"],
    rows: [["Physical aggression", "Genes"], ["Social aggression", "Environment"]],
    say: ["In six-year-old twins, physical aggression showed a strong genetic influence.", "Social aggression, like spreading rumours, was more environmental."] },
  { type: "quiz", q: "Freud's death instinct is…", o: ["Thanatos", "Eros", "The ego", "Catharsis"], a: 0,
    why: "It's the source of aggression in his theory.", say: ["What did Freud call the death instinct?"] }
]});

S2Data.video("3c", { scenes: [
  { type: "title", title: "Biological methods", sub: "Correlations, scans and twins.", mark: "🧬",
    say: ["How do biological psychologists gather evidence?"] },
  { type: "graph", title: "Correlations", x: "co-variable 1", y: "co-variable 2",
    lines: [{ pts: [[0.1, 0.15], [0.9, 0.85]] }],
    marks: [{ x: 0.3, y: 0.32, t: "", s: 1 }, { x: 0.5, y: 0.5, t: "", s: 2 }, { x: 0.75, y: 0.72, t: "positive", s: 3, anchor: "start", dx: 14, dy: 26 }],
    say: ["A correlation measures how two co-variables relate.", "Coefficients run from minus one to plus one.", "This is a positive correlation. But remember: correlation doesn't show causation."] },
  { type: "compare", title: "Brain scans", h: ["Shows", "Downside"],
    rows: [["CAT", "Structure", "Radiation"], ["PET", "Activity (tracer)", "Radioactive, slow"], ["fMRI", "Activity (oxygen)", "Expensive"]],
    say: ["CAT scans use X-rays to show structure.", "PET scans track a radioactive tracer to show activity.", "fMRI shows activity through blood oxygen, without radiation."] },
  { type: "compare", title: "Twin studies", h: ["Shared genes"],
    rows: [["MZ (identical)", "100%"], ["DZ (non-identical)", "About 50%"]],
    say: ["Identical twins share all their genes.", "Non-identical twins share about half. Higher concordance in identical twins suggests genes matter, though twins also share environments."] },
  { type: "big", text: "Spearman's rho ≥ critical", sub: "Correlation, ordinal data",
    say: ["Spearman's rho tests correlations with ordinal data.", "It's significant if the result is equal to or greater than the critical value."] },
  { type: "quiz", q: "Which scan uses a radioactive tracer?", o: ["PET", "fMRI", "CAT", "None"], a: 0,
    why: "PET tracks radioactive glucose.", say: ["Which type of scan uses a radioactive tracer?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "Conditioning", sub: "Learning by association and consequence.", mark: "🔔",
    say: ["Behaviourists say we learn through association and consequences."] },
  { type: "flow", title: "Classical conditioning", nodes: ["Food → salivation", "Bell + food", "Bell → salivation"],
    say: ["Food is an unconditioned stimulus that naturally causes salivation.", "Pavlov repeatedly paired a bell with food.", "Eventually the bell alone caused salivation: a conditioned response."] },
  { type: "compare", title: "Operant conditioning", h: ["Add", "Remove"],
    rows: [["Behaviour ↑", "Positive reinforcement", "Negative reinforcement"], ["Behaviour ↓", "Positive punishment", "Negative punishment"]],
    say: ["Reinforcement increases behaviour, by adding a reward or removing something unpleasant.", "Punishment decreases it, by adding something unpleasant or taking something pleasant away."] },
  { type: "compare", title: "Schedules", h: ["Example"],
    rows: [["Continuous", "Every response"], ["Fixed ratio", "Every 5th response"], ["Variable ratio", "Gambling"], ["Fixed interval", "Weekly pay"]],
    say: ["Continuous reinforcement rewards every response.", "Fixed ratio rewards after a set number.", "Variable ratio is unpredictable, like gambling, and hardest to extinguish.", "Fixed interval rewards after a set time."] },
  { type: "flow", title: "Two-process model", nodes: ["Classical: acquire fear", "Operant: avoid", "Avoidance reinforced"],
    say: ["A phobia is acquired by classical conditioning, like a dog paired with a bite.", "The person then avoids dogs.", "Avoiding reduces anxiety, which negatively reinforces the phobia."] },
  { type: "quiz", q: "Removing something unpleasant to increase behaviour is…", o: ["Negative reinforcement", "Positive punishment", "Negative punishment", "Positive reinforcement"], a: 0,
    why: "Reinforcement always increases behaviour.", say: ["Taking away something unpleasant to increase a behaviour is called what?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Social learning theory", sub: "Learning by watching.", mark: "👀",
    say: ["Bandura showed we don't need to be rewarded ourselves to learn."] },
  { type: "flow", title: "Mediating processes", nodes: ["Attention", "Retention", "Reproduction", "Motivation"],
    say: ["First we notice the behaviour.", "Then we remember it.", "We need to be able to do it.", "And we need a reason to do it, like expecting a reward."] },
  { type: "flow", title: "Bandura et al. (1961)", nodes: ["72 children aged 3–5", "Watched a model", "Mildly frustrated", "Imitated aggression"],
    say: ["Seventy-two nursery children took part.", "They watched an adult behave aggressively or calmly with a Bobo doll, or saw no model.", "They were then mildly frustrated.", "Those who saw aggression copied many of the exact acts."] },
  { type: "big", text: "Vicarious reinforcement", sub: "Seeing a model rewarded",
    say: ["In Bandura's 1965 study, children who saw the model punished copied less.", "But when offered rewards, they all could do it: they'd learned it anyway."] },
  { type: "quiz", q: "Which is NOT a mediating process?", o: ["Extinction", "Attention", "Retention", "Motivation"], a: 0,
    why: "Extinction belongs to conditioning.", say: ["Which of these is not one of Bandura's mediating processes?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "Learning in practice", sub: "Therapy, animals and Little Albert.", mark: "🐀",
    say: ["Learning theories have led to therapies, and to some controversial studies."] },
  { type: "flow", title: "Systematic desensitisation", nodes: ["Learn relaxation", "Build a hierarchy", "Gradual exposure"],
    say: ["The client learns to relax deeply.", "Together with the therapist, they rank feared situations from least to most scary.", "They work up the list while relaxed, until the fear fades."] },
  { type: "flow", title: "Little Albert (1920)", nodes: ["No fear of rat", "Rat + loud noise", "Fears rat", "Fear generalises"],
    say: ["At nine months, Albert wasn't afraid of a white rat.", "Then the rat was paired with a sudden loud noise.", "He came to fear the rat.", "And the fear spread to a rabbit, a dog and a fur coat. He was never deconditioned."] },
  { type: "points", title: "Animal research: the 3Rs", items: ["Replace", "Reduce", "Refine"],
    say: ["Replace animals where possible.", "Reduce the numbers used.", "And refine procedures to minimise suffering."] },
  { type: "big", text: "TV came to Fiji", sub: "Becker et al. (2002)",
    say: ["After television arrived in Fiji, disordered eating attitudes among teenage girls rose sharply.", "Girls said they wanted to look like the characters on TV: social learning in action."] },
  { type: "quiz", q: "In Little Albert, the UCS was…", o: ["A loud noise", "The rat", "A rabbit", "Food"], a: 0,
    why: "The noise naturally caused fear.", say: ["What was the unconditioned stimulus in the Little Albert study?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Diagnosis", sub: "Classification, reliability and Rosenhan.", mark: "📘",
    say: ["How do clinicians decide someone has a mental disorder?"] },
  { type: "points", title: "The four Ds", items: ["Deviance", "Distress", "Dysfunction", "Danger"],
    say: ["Is the behaviour unusual?", "Does it cause distress?", "Does it stop the person functioning day to day?", "Is it dangerous to them or others?"] },
  { type: "compare", title: "Classification systems", h: ["Publisher", "Scope"],
    rows: [["DSM-5", "American Psychiatric Association", "Mental disorders"], ["ICD-11", "World Health Organization", "All conditions"]],
    say: ["DSM-5 is published by the American Psychiatric Association, and covers mental disorders.", "ICD, now in its eleventh edition, is from the World Health Organization and covers all health conditions."] },
  { type: "flow", title: "Rosenhan (1973)", nodes: ["8 pseudo-patients", "'Empty, hollow, thud'", "All admitted", "Stayed 7–52 days"],
    say: ["Eight sane people sought admission to twelve hospitals.", "They claimed to hear voices saying empty, hollow and thud.", "All were admitted, most diagnosed with schizophrenia.", "They stayed between seven and fifty-two days, and staff never spotted them."] },
  { type: "big", text: "Labels are sticky", sub: "Normal behaviour seen through the diagnosis",
    say: ["Note-taking was recorded as writing behaviour.", "Rosenhan concluded diagnosis was unreliable, and that labels shape how people are seen."] },
  { type: "quiz", q: "How many pseudo-patients were there?", o: ["8", "12", "19", "52"], a: 0,
    why: "They went to 12 hospitals.", say: ["How many pseudo-patients took part in Rosenhan's study?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Schizophrenia", sub: "Symptoms, causes and treatment.", mark: "🌀",
    say: ["Schizophrenia affects about one percent of people, and changes how they perceive reality."] },
  { type: "compare", title: "Symptoms", h: ["Examples"],
    rows: [["Positive (added)", "Hallucinations, delusions"], ["Negative (lost)", "Avolition, alogia, flat affect"]],
    say: ["Positive symptoms are experiences added to normal life, like hearing voices or false beliefs.", "Negative symptoms are things lost, like motivation, speech and emotional expression."] },
  { type: "points", title: "Biological explanations", items: ["Too much subcortical dopamine", "Genes: MZ 48%, DZ 17%", "Glutamate too"],
    say: ["Excess dopamine activity is linked to positive symptoms.", "Identical twins are far more concordant than non-identical twins, but not one hundred percent.", "And Carlsson argued glutamate and serotonin interact with dopamine."] },
  { type: "big", text: "Diathesis + stress", sub: "Vulnerability plus a trigger",
    say: ["Social causation suggests poverty and stress can trigger schizophrenia; social drift suggests the illness causes downward drift.", "The diathesis-stress model combines genetic vulnerability with environmental triggers."] },
  { type: "compare", title: "Treatments", h: ["How", "Issue"],
    rows: [["Typical antipsychotics", "Block D2", "Movement side effects"], ["Atypical", "Dopamine + serotonin", "Weight gain"], ["CBT / family therapy", "Coping, less expressed emotion", "Needs engagement"]],
    say: ["Typical antipsychotics block dopamine receptors, but can cause movement problems.", "Atypical drugs act more broadly, with different side effects.", "Talking therapies help people cope and reduce relapse."] },
  { type: "quiz", q: "Avolition is…", o: ["Lack of motivation", "Hearing voices", "False beliefs", "Disordered speech"], a: 0,
    why: "It's a negative symptom.", say: ["What is avolition?"] }
]});

S2Data.video("5c", { scenes: [
  { type: "title", title: "Unipolar depression", sub: "Biology, cognition and treatment.", mark: "🌧",
    say: ["Depression is more than sadness: it's a cluster of symptoms that lasts."] },
  { type: "big", text: "5+ symptoms for 2 weeks", sub: "Including low mood or anhedonia",
    say: ["DSM-5 needs at least five symptoms nearly every day for two weeks.", "One must be low mood or a loss of interest and pleasure."] },
  { type: "compare", title: "Explanations", h: ["Key idea"],
    rows: [["Monoamine hypothesis", "Low serotonin and noradrenaline"], ["Genes (Caspi)", "5-HTT gene + stress"], ["Beck", "Negative triad: self, world, future"], ["Ellis", "Activating event → Beliefs → Consequences"]],
    say: ["Biologically, low serotonin and noradrenaline are implicated.", "Caspi showed a gene only raised risk when combined with stressful life events.", "Beck described negative views of the self, world and future.", "And Ellis showed irrational beliefs turn events into depression."] },
  { type: "compare", title: "Treatments", h: ["Strength", "Weakness"],
    rows: [["SSRIs", "Cheap, easy", "Side effects, relapse"], ["CBT", "Lower relapse", "Needs effort"]],
    say: ["SSRIs boost serotonin and are easy to take, but cause side effects and relapse when stopped.", "CBT challenges negative thinking, with lower relapse, but demands time and effort."] },
  { type: "quiz", q: "Beck's triad is negative views of…", o: ["Self, world, future", "Id, ego, superego", "Past, present, future", "Mind, body, soul"], a: 0,
    why: "That's the cognitive triad.", say: ["What three things does Beck's cognitive triad involve?"] }
]});

S2Data.video("5d", { scenes: [
  { type: "title", title: "Clinical methods", sub: "Secondary data, meta-analysis and more.", mark: "📊",
    say: ["Clinical psychologists often use data collected by others."] },
  { type: "compare", title: "Data sources", h: ["Strength", "Weakness"],
    rows: [["Primary", "Fits the aim", "Slow, costly"], ["Secondary", "Cheap, large", "May not fit"]],
    say: ["Primary data is collected first-hand, so it fits the aim exactly, but takes time.", "Secondary data, like NHS statistics, is cheap and large, but may not answer your question."] },
  { type: "big", text: "Meta-analysis", sub: "Combining many studies",
    say: ["A meta-analysis pools results to find an overall effect, with a large combined sample.", "But publication bias means unexciting results may be missing."] },
  { type: "compare", title: "Over time", h: ["Strength", "Weakness"],
    rows: [["Longitudinal", "Shows change", "Drop-out, slow"], ["Cross-sectional", "Quick", "Cohort effects"]],
    say: ["Longitudinal studies follow people over years, but lose participants.", "Cross-sectional studies compare groups at once, but groups may differ by generation."] },
  { type: "flow", title: "Content analysis", nodes: ["Choose sample", "Coding categories", "Tally", "Check inter-rater reliability"],
    say: ["Choose media to analyse.", "Define clear coding categories.", "Count how often each appears.", "And check two coders agree."] },
  { type: "quiz", q: "The 'file drawer problem' is…", o: ["Publication bias", "Attrition", "Cohort effects", "Order effects"], a: 0,
    why: "Non-significant results go unpublished.", say: ["What is the file drawer problem?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Crime and eyewitnesses", sub: "Why people offend, and how witnesses err.", mark: "🔎",
    say: ["Criminological psychology asks why crime happens, and how justice can go wrong."] },
  { type: "compare", title: "Explaining crime", h: ["Idea"],
    rows: [["Biological", "Brain injury, amygdala, prefrontal"], ["Personality", "Eysenck: E, N, P"], ["Social learning", "Copying role models"], ["Labelling", "Self-fulfilling prophecy"]],
    say: ["Biological explanations focus on brain damage and areas like the amygdala.", "Eysenck linked high extraversion, neuroticism and psychoticism to offending.", "Social learning says crime is copied from rewarded models.", "And labelling can become a self-fulfilling prophecy."] },
  { type: "compare", title: "Loftus and Palmer (1974)", h: ["Mean speed"],
    rows: [["Smashed", "40.8 mph"], ["Hit", "34.0 mph"], ["Contacted", "31.8 mph"]],
    say: ["Participants who heard 'smashed' estimated about forty-one miles per hour.", "'Hit' gave thirty-four.", "And 'contacted' just under thirty-two. A week later, 'smashed' participants were more likely to remember broken glass that wasn't there."] },
  { type: "points", title: "The cognitive interview", items: ["Report everything", "Reinstate context", "Change order", "Change perspective"],
    say: ["Witnesses report every detail, however trivial.", "They mentally return to the scene.", "They recall events in different orders.", "And from other people's viewpoints."] },
  { type: "quiz", q: "Which verb gave the highest estimates?", o: ["Smashed", "Hit", "Bumped", "Contacted"], a: 0,
    why: "About 40.8 mph.", say: ["Which verb produced the highest speed estimates?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Juries and treatment", sub: "Verdicts, punishment and rehabilitation.", mark: "⚖",
    say: ["What sways a jury, and what stops people reoffending?"] },
  { type: "points", title: "Influences on juries", items: ["Defendant's appearance and race", "Pre-trial publicity", "Witness confidence"],
    say: ["Attractive defendants can be treated more leniently, and race can bias verdicts.", "Media coverage before a trial can create prejudgements.", "And confident witnesses persuade, even when they're wrong."] },
  { type: "compare", title: "Dealing with offenders", h: ["Evaluation"],
    rows: [["Prison", "High recidivism"], ["Anger management", "Tackles causes"], ["Restorative justice", "Needs willing victims"], ["Token economy", "May not transfer outside"]],
    say: ["Prison protects the public, but many reoffend.", "Anger management teaches offenders to control triggers.", "Restorative justice helps victims, but only if they want to take part.", "Token economies improve behaviour inside, but may not last outside."] },
  { type: "flow", title: "Anger management", nodes: ["Cognitive preparation", "Skill acquisition", "Application practice"],
    say: ["First, offenders learn what triggers their anger.", "Then they learn skills like relaxation and assertiveness.", "Finally they practise them in role-plays."] },
  { type: "quiz", q: "Recidivism means…", o: ["Reoffending", "Rehabilitation", "Retribution", "Restoration"], a: 0,
    why: "It's the main measure of success.", say: ["What does recidivism mean?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "Attachment", sub: "Bowlby, Ainsworth and culture.", mark: "🤱",
    say: ["The bond between infant and carer may shape the rest of our lives."] },
  { type: "points", title: "Bowlby's theory", items: ["Innate and adaptive", "Monotropy", "Critical period", "Internal working model"],
    say: ["Attachment evolved to keep infants safe.", "Bowlby believed in one special bond.", "It must form within roughly the first two and a half years.", "And it becomes a template for later relationships."] },
  { type: "compare", title: "Strange Situation", h: ["Reunion", "US %"],
    rows: [["Secure (B)", "Comforted", "66%"], ["Avoidant (A)", "Ignores mother", "22%"], ["Resistant (C)", "Resists comfort", "12%"]],
    say: ["Secure infants are upset when the mother leaves, and easily comforted on return.", "Avoidant infants show little distress and avoid her.", "Resistant infants are very distressed and resist comfort."] },
  { type: "big", text: "Secure was most common everywhere", sub: "Van IJzendoorn and Kroonenberg (1988)",
    say: ["This meta-analysis of thirty-two studies in eight countries found secure attachment was the most common type in all of them.", "But variation within countries was greater than between them."] },
  { type: "quiz", q: "Which type resists comfort on reunion?", o: ["Insecure-resistant", "Secure", "Insecure-avoidant", "None"], a: 0,
    why: "Type C.", say: ["Which attachment type resists comfort when the mother returns?"] }
]});

S2Data.video("7b", { scenes: [
  { type: "title", title: "Day care and autism", sub: "Development in context.", mark: "🧸",
    say: ["How does early childcare affect development, and how can we understand autism?"] },
  { type: "compare", title: "Day care", h: ["Finding"],
    rows: [["NICHD (USA)", "Long early hours: slightly more aggression"], ["EPPE (UK)", "Quality pre-school: social and cognitive gains"]],
    say: ["The NICHD study linked very long hours in early infancy to slightly more aggression in some children.", "The EPPE project found high-quality pre-school boosted development."] },
  { type: "flow", title: "The Sally-Anne test", nodes: ["Sally hides marble", "Sally leaves", "Anne moves it", "Where will Sally look?"],
    say: ["Sally puts her marble in her basket.", "She leaves the room.", "Anne moves the marble to her box.", "Where will Sally look? About eighty percent of autistic children said Anne's box."] },
  { type: "big", text: "Theory of mind", sub: "Understanding others' beliefs",
    say: ["Baron-Cohen argued many autistic children find it hard to understand that others' beliefs can differ.", "But not all fail, and the theory doesn't explain repetitive behaviours or strengths."] },
  { type: "quiz", q: "Children under 16 need…", o: ["Parental consent", "No consent", "Payment", "A teacher's consent only"], a: 0,
    why: "Plus their own agreement.", say: ["What consent is needed for research with children under sixteen?"] }
]});

S2Data.video("8a", { scenes: [
  { type: "title", title: "Statistics", sub: "Choosing and using tests.", mark: "∑",
    say: ["Inferential statistics tell us whether results are likely to be due to chance."] },
  { type: "compare", title: "Which test?", h: ["Independent", "Repeated", "Correlation"],
    rows: [["Nominal", "Chi-squared", "—", "Chi-squared"], ["Ordinal+", "Mann-Whitney U", "Wilcoxon T", "Spearman's rho"]],
    say: ["With nominal data and independent groups, use chi-squared.", "With ordinal data, use Mann-Whitney for independent groups, Wilcoxon for repeated measures, and Spearman's for correlations."] },
  { type: "big", text: "R means ≥", sub: "Chi-squared and Spearman's must be ≥ critical",
    say: ["Tests with an R in their name need the result to be greater than or equal to the critical value.", "Mann-Whitney and Wilcoxon need it to be less than or equal."] },
  { type: "compare", title: "Errors", h: ["What", "When likely"],
    rows: [["Type I", "False positive", "Lenient level (0.10)"], ["Type II", "False negative", "Strict level (0.01)"]],
    say: ["A Type One error wrongly rejects the null: a false positive.", "A Type Two error wrongly accepts it: a false negative. Five percent balances the two."] },
  { type: "quiz", q: "Repeated measures, ordinal data, difference. Which test?", o: ["Wilcoxon T", "Mann-Whitney U", "Spearman's rho", "Chi-squared"], a: 0,
    why: "Wilcoxon is for related designs.", say: ["Repeated measures, ordinal data, testing a difference. Which test?"] }
]});

S2Data.video("8b", { scenes: [
  { type: "title", title: "Issues and debates", sub: "Thinking across the whole course.", mark: "⚖",
    say: ["Issues and debates link everything you've studied."] },
  { type: "compare", title: "Key debates", h: ["One side", "Other side"],
    rows: [["Reductionism", "Simple parts", "Holism"], ["Nature", "Genes", "Nurture"], ["Science", "Objective, falsifiable", "Unfalsifiable"]],
    say: ["Reductionism explains behaviour by its simplest parts; holism looks at the whole person.", "Nature emphasises genes; nurture the environment. Most psychologists now see an interaction.", "And some theories are scientific and testable, while others, like Freud's, are hard to falsify."] },
  { type: "compare", title: "Bias", h: ["Meaning"],
    rows: [["Alpha bias", "Exaggerates gender differences"], ["Beta bias", "Ignores gender differences"], ["Ethnocentrism", "Judging by own culture"]],
    say: ["Alpha bias exaggerates differences between men and women.", "Beta bias ignores them, for example by using all-male samples.", "And ethnocentrism judges other cultures by our own norms."] },
  { type: "points", title: "Psychology in society", items: ["Social control: drugs, tokens", "Applications: cognitive interview", "Socially sensitive research"],
    say: ["Psychology can be used to control behaviour, through drugs or token economies.", "It has useful applications, like the cognitive interview.", "And some research has consequences for whole groups, so it needs special care."] },
  { type: "quiz", q: "Using an all-male sample and generalising to everyone is…", o: ["Beta bias", "Alpha bias", "Holism", "Cultural relativism"], a: 0,
    why: "It ignores possible differences.", say: ["Using only men and generalising to everyone is which kind of bias?"] }
]});
