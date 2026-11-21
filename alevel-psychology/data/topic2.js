/* A-level Psychology² — Learning theories (Paper 1) and Clinical psychology (Paper 2) */

S2Data.add({
  id: "4a", group: 4, title: "Classical and operant conditioning",
  summary: "Pavlov's classical conditioning, Skinner's operant conditioning, reinforcement schedules, and conditioning explanations of phobias.",
  notes: `
<h3>Classical conditioning (Pavlov)</h3>
<table><tr><th>Stage</th><th>Pairing</th></tr>
<tr><td>Before</td><td>Food (UCS) → salivation (UCR); bell (NS) → no response</td></tr>
<tr><td>During</td><td>Bell (NS) + food (UCS) → salivation (UCR), repeated</td></tr>
<tr><td>After</td><td>Bell (CS) → salivation (CR)</td></tr></table>
<ul>
<li><b>Extinction:</b> the CR fades if the CS keeps appearing without the UCS.</li>
<li><b>Spontaneous recovery:</b> the CR reappears after a break.</li>
<li><b>Stimulus generalisation:</b> similar stimuli also produce the CR.</li>
</ul>
<h3>Operant conditioning (Skinner)</h3>
<table><tr><th></th><th>Add something</th><th>Remove something</th></tr>
<tr><td>Behaviour increases</td><td><b>Positive reinforcement</b> (reward)</td><td><b>Negative reinforcement</b> (escape something unpleasant)</td></tr>
<tr><td>Behaviour decreases</td><td><b>Positive punishment</b> (add unpleasant)</td><td><b>Negative punishment</b> (remove pleasant)</td></tr></table>
<ul>
<li><b>Primary reinforcers</b> meet basic needs (food); <b>secondary reinforcers</b> are learned (money, tokens).</li>
<li><b>Shaping:</b> reinforcing closer and closer approximations of a behaviour.</li>
</ul>
<h3>Schedules of reinforcement</h3>
<table><tr><th>Schedule</th><th>Example</th><th>Effect</th></tr>
<tr><td>Continuous</td><td>Every response rewarded</td><td>Fast learning, fast extinction</td></tr>
<tr><td>Fixed ratio</td><td>Every 5th response</td><td>High rate with pauses</td></tr>
<tr><td>Variable ratio</td><td>Unpredictable number (gambling)</td><td>Highest, most resistant to extinction</td></tr>
<tr><td>Fixed interval</td><td>Every 5 minutes</td><td>Responses rise near the time</td></tr>
<tr><td>Variable interval</td><td>Unpredictable time</td><td>Steady rate</td></tr></table>
<h3>Phobias: the two-process model (Mowrer)</h3>
<p>A phobia is <b>acquired</b> by classical conditioning (e.g. a dog paired with a bite) and <b>maintained</b> by operant conditioning: avoiding the feared object reduces anxiety, which is <b>negatively reinforcing</b>.</p>`,
  quiz: [
    { q: "In Pavlov's study, the bell before conditioning is the…", o: ["Neutral stimulus", "UCS", "CS", "UCR"], a: 0, e: "" },
    { q: "Salivating to the bell after conditioning is the…", o: ["Conditioned response", "Unconditioned response", "Neutral stimulus", "Reinforcer"], a: 0, e: "" },
    { q: "Negative reinforcement…", o: ["Removes something unpleasant, increasing behaviour", "Adds a punishment", "Decreases behaviour", "Is the same as punishment"], a: 0, e: "" },
    { q: "Taking away a phone for being rude is…", o: ["Negative punishment", "Positive punishment", "Negative reinforcement", "Positive reinforcement"], a: 0, e: "" },
    { q: "Gambling machines use…", o: ["Variable ratio reinforcement", "Fixed interval", "Continuous", "Fixed ratio"], a: 0, e: "" },
    { q: "Money is a…", o: ["Secondary reinforcer", "Primary reinforcer", "Punisher", "UCS"], a: 0, e: "" },
    { q: "Shaping means…", o: ["Rewarding successive approximations", "Punishing mistakes", "Pairing two stimuli", "Watching a model"], a: 0, e: "" },
    { q: "In the two-process model, phobias are maintained by…", o: ["Negative reinforcement from avoidance", "Positive punishment", "Modelling", "Genes"], a: 0, e: "" },
    { q: "Stimulus generalisation means…", o: ["Similar stimuli produce the CR", "The CR disappears", "The CR returns after a break", "A new UCS is used"], a: 0, e: "" },
    { q: "Which schedule is most resistant to extinction?", o: ["Variable ratio", "Continuous", "Fixed interval", "Fixed ratio"], a: 0, e: "" }
  ],
  flashcards: [
    ["UCS → UCR", "Food → salivation (innate)"],
    ["CS → CR", "Bell → salivation (learned)"],
    ["Extinction", "CR fades without the UCS"],
    ["Spontaneous recovery", "CR returns after a break"],
    ["Positive reinforcement", "Add a reward → behaviour increases"],
    ["Negative reinforcement", "Remove unpleasant → behaviour increases"],
    ["Positive punishment", "Add unpleasant → behaviour decreases"],
    ["Negative punishment", "Remove pleasant → behaviour decreases"],
    ["Variable ratio", "Unpredictable number of responses; most resistant"],
    ["Two-process model", "Classical acquires, operant maintains a phobia"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Social learning theory",
  summary: "Bandura's social learning theory, observation and modelling, vicarious reinforcement, the four mediating processes and the Bobo doll studies.",
  notes: `
<h3>Social learning theory (Bandura)</h3>
<ul>
<li>We learn by <b>observing</b> and <b>imitating</b> <b>models</b>.</li>
<li>We're more likely to imitate models who are similar, high-status or rewarded.</li>
<li><b>Vicarious reinforcement:</b> seeing a model rewarded makes us more likely to copy.</li>
<li><b>Identification</b> with a model increases imitation.</li>
</ul>
<h3>Mediating (cognitive) processes</h3>
<table><tr><th>Process</th><th>Meaning</th></tr>
<tr><td>Attention</td><td>Noticing the behaviour</td></tr>
<tr><td>Retention</td><td>Remembering it</td></tr>
<tr><td>Reproduction</td><td>Being able to do it</td></tr>
<tr><td>Motivation</td><td>Wanting to do it (expected reward)</td></tr></table>
<h3>Bandura, Ross and Ross (1961)</h3>
<ul>
<li><b>Sample:</b> 72 children (36 boys, 36 girls) aged about 3–5, from Stanford University nursery.</li>
<li><b>Procedure:</b> children watched an adult model behave aggressively or non-aggressively towards a Bobo doll (same or opposite sex), or saw no model (control). They were then mildly frustrated and observed for 20 minutes in a room with toys including a Bobo doll.</li>
<li><b>Results:</b> children who saw the aggressive model imitated many of the specific aggressive acts. Boys showed more physical aggression than girls; same-sex models were imitated more for some behaviours.</li>
<li><b>Conclusion:</b> aggression can be learned through observation.</li>
</ul>
<h3>Bandura (1965)</h3>
<p>Children saw a model <b>rewarded</b>, <b>punished</b> or with no consequence. Those who saw punishment imitated less, but when offered rewards, all groups could reproduce the behaviour, showing that learning happened even when it wasn't performed.</p>
<div class="box box-tip"><span class="box-title">Evaluation</span>Explains learning without direct reinforcement, and includes cognition; but lab studies with dolls may lack validity, and it underplays biology.</div>`,
  quiz: [
    { q: "Vicarious reinforcement is…", o: ["Seeing a model rewarded", "Being rewarded directly", "Being punished", "Pairing stimuli"], a: 0, e: "" },
    { q: "Which is NOT a mediating process?", o: ["Extinction", "Attention", "Retention", "Motivation"], a: 0, e: "" },
    { q: "Bandura et al. (1961) studied…", o: ["72 children", "40 men", "22 boys", "8 pseudo-patients"], a: 0, e: "" },
    { q: "In Bandura (1961), boys showed more…", o: ["Physical aggression", "Verbal aggression only", "No aggression", "Fear"], a: 0, e: "" },
    { q: "Bandura (1965) showed that learning…", o: ["Can occur without being performed", "Requires punishment", "Only happens with rewards", "Is genetic"], a: 0, e: "" },
    { q: "Identification means…", o: ["Wanting to be like the model", "Recognising a face", "Diagnosing a disorder", "Labelling data"], a: 0, e: "" },
    { q: "Reproduction means…", o: ["Being physically able to copy", "Remembering", "Noticing", "Wanting to copy"], a: 0, e: "" },
    { q: "Children were mildly frustrated before observation to…", o: ["Raise the chance of aggression", "Calm them", "Reward them", "Distract them"], a: 0, e: "" },
    { q: "A criticism of the Bobo doll studies is…", o: ["Low ecological validity", "Too many adults", "No control group", "Long-term follow-up"], a: 0, e: "" },
    { q: "Models are copied more if they are…", o: ["Similar and high status", "Strangers only", "Punished", "Animals"], a: 0, e: "" }
  ],
  flashcards: [
    ["Social learning theory", "Learning by observing and imitating models"],
    ["Vicarious reinforcement", "Seeing a model rewarded"],
    ["Mediating processes", "Attention, retention, reproduction, motivation"],
    ["Identification", "Wanting to be like a model"],
    ["Bandura et al. (1961) sample", "72 children aged about 3–5, Stanford nursery"],
    ["Bandura et al. (1961) result", "Aggressive model → imitation of specific acts"],
    ["Bandura (1965)", "Model punished → less imitation, but learning still happened"],
    ["Learning–performance distinction", "Behaviour can be learned but not shown"],
    ["SLT strength", "Includes cognition; explains learning without direct reward"],
    ["SLT weakness", "Ignores biology; lab studies lack validity"]
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Learning: therapies, methods and studies",
  summary: "Systematic desensitisation, animal research and ethics, observations, the chi-squared test, Little Albert and Becker's Fiji study.",
  notes: `
<h3>Systematic desensitisation (Wolpe)</h3>
<ol>
<li>Learn a <b>relaxation</b> technique.</li>
<li>Build an <b>anxiety hierarchy</b>, from least to most feared situations.</li>
<li>Work up the hierarchy while relaxed; relaxation and fear can't coexist (<b>reciprocal inhibition</b>), so a new association forms (<b>counter-conditioning</b>).</li>
</ol>
<p><b>Flooding</b> is the alternative: immediate exposure to the most feared stimulus until anxiety drops. It's quicker, but more distressing.</p>
<h3>Animal research</h3>
<ul>
<li><b>Why:</b> control, ethics of testing humans, shorter life cycles, shared biology and learning processes.</li>
<li><b>Problems:</b> generalising to humans; animal welfare.</li>
<li><b>Regulation:</b> the <b>Animals (Scientific Procedures) Act 1986</b> and the <b>3Rs</b>: replace, reduce, refine.</li>
</ul>
<h3>Observations</h3>
<ul>
<li><b>Naturalistic</b> vs <b>controlled</b>; <b>overt</b> vs <b>covert</b>; <b>participant</b> vs <b>non-participant</b>.</li>
<li><b>Structured</b> observations use <b>behavioural categories</b> and <b>tallying</b>; <b>event sampling</b> or <b>time sampling</b>.</li>
<li><b>Inter-rater reliability:</b> two observers' records are correlated.</li>
</ul>
<h3>Chi-squared test</h3>
<p>For a <b>difference or association</b> with <b>nominal</b> data and <b>independent</b> groups. χ² must be <b>equal to or greater than</b> the critical value; degrees of freedom = (rows − 1) × (columns − 1).</p>
<h3>Classic study: Watson and Rayner (1920), Little Albert</h3>
<ul>
<li>Albert, about 9 months old, showed no fear of a white rat, rabbit, dog and other objects.</li>
<li>At about 11 months, the rat was paired with a loud noise (a steel bar struck with a hammer) behind him.</li>
<li>Albert came to fear the rat, and his fear <b>generalised</b> to a rabbit, a dog, a fur coat and a Santa Claus mask.</li>
<li>He left before any deconditioning; a serious ethical problem.</li>
</ul>
<h3>Contemporary study: Becker et al. (2002)</h3>
<p>Studied adolescent girls in Fiji before and three years after television arrived (1995 and 1998). The proportion with high scores on an eating attitudes test rose sharply (from about 13% to about 29%), and self-induced vomiting to control weight rose from none to about 11%. Girls described wanting to look like characters on TV, supporting <b>social learning</b>.</p>`,
  quiz: [
    { q: "Systematic desensitisation uses…", o: ["Relaxation and an anxiety hierarchy", "Immediate full exposure", "Drugs", "Punishment"], a: 0, e: "" },
    { q: "Reciprocal inhibition means…", o: ["Relaxation and fear can't coexist", "Fear grows", "Two drugs interact", "Memory fades"], a: 0, e: "" },
    { q: "Flooding involves…", o: ["Immediate exposure to the feared stimulus", "Gradual steps", "Relaxation only", "Talking therapy"], a: 0, e: "" },
    { q: "The 3Rs are…", o: ["Replace, reduce, refine", "Reward, reinforce, repeat", "Record, review, report", "Rest, relax, recover"], a: 0, e: "" },
    { q: "Chi-squared needs which level of data?", o: ["Nominal", "Ordinal", "Interval", "Ratio"], a: 0, e: "" },
    { q: "Inter-rater reliability checks…", o: ["Agreement between observers", "Validity of a scan", "Sample size", "Ethics"], a: 0, e: "" },
    { q: "Little Albert's fear was produced by pairing a rat with…", o: ["A loud noise", "A shock", "Food", "A rabbit"], a: 0, e: "" },
    { q: "Albert's fear spread to a rabbit. This is…", o: ["Generalisation", "Extinction", "Spontaneous recovery", "Shaping"], a: 0, e: "" },
    { q: "Becker et al. studied the effect of…", o: ["Television in Fiji", "Shocks", "Day care", "Brain damage"], a: 0, e: "" },
    { q: "A covert observation is…", o: ["One where participants don't know they're watched", "Done in a lab", "With the researcher joining in", "Unstructured"], a: 0, e: "" }
  ],
  flashcards: [
    ["Systematic desensitisation", "Relaxation + hierarchy + gradual exposure"],
    ["Counter-conditioning", "A new relaxed response replaces fear"],
    ["Flooding", "Immediate, prolonged exposure"],
    ["3Rs", "Replace, reduce, refine"],
    ["Animals Act", "Animals (Scientific Procedures) Act 1986"],
    ["Chi-squared", "Nominal, independent; χ² ≥ critical; df = (r−1)(c−1)"],
    ["Event vs time sampling", "Record each event vs record at set intervals"],
    ["Little Albert", "Rat + loud noise → fear; generalised to furry objects"],
    ["Becker et al. (2002)", "TV in Fiji: disordered eating rose among girls"],
    ["Inter-rater reliability", "Observers' tallies are correlated"]
  ]
});

S2Data.add({
  id: "5a", group: 5, title: "Diagnosis and classification",
  summary: "Defining abnormality, DSM-5 and ICD, reliability and validity of diagnosis, and Rosenhan's 'On being sane in insane places'.",
  notes: `
<h3>Defining abnormality</h3>
<ul>
<li><b>Statistical infrequency:</b> behaviour that is rare.</li>
<li><b>Deviation from social norms:</b> breaking unwritten rules.</li>
<li><b>The four Ds:</b> <b>deviance</b>, <b>distress</b>, <b>dysfunction</b>, <b>danger</b>.</li>
</ul>
<h3>Classification systems</h3>
<table><tr><th>System</th><th>Who</th><th>Notes</th></tr>
<tr><td>DSM-5 (2013)</td><td>American Psychiatric Association</td><td>Mental disorders only; checklists of symptoms</td></tr>
<tr><td>ICD (ICD-10; ICD-11 from 2022)</td><td>World Health Organization</td><td>All health conditions; used widely, including the NHS</td></tr></table>
<h3>Reliability and validity</h3>
<ul>
<li><b>Reliability:</b> consistent diagnoses, e.g. <b>inter-rater</b> (two clinicians agree) and <b>test-retest</b>.</li>
<li><b>Validity:</b> diagnosing the right disorder. <b>Predictive validity</b> (does it predict outcomes?), <b>construct validity</b> (does the category exist as described?).</li>
<li><b>Problems:</b> comorbidity, symptom overlap, cultural differences and clinician bias.</li>
</ul>
<h3>Classic study: Rosenhan (1973)</h3>
<ul>
<li><b>Study 1:</b> 8 sane pseudo-patients sought admission to 12 hospitals, claiming to hear voices saying "empty", "hollow" and "thud". Once admitted they behaved normally.</li>
<li>All were admitted; most were diagnosed with schizophrenia and discharged as 'in remission'. Stays lasted 7–52 days (average 19).</li>
<li>Normal behaviour was seen through the label (e.g. note-taking recorded as 'writing behaviour'). Other patients often suspected them; staff didn't.</li>
<li><b>Study 2:</b> a hospital was told pseudo-patients would come. Staff judged many genuine patients to be fakes, though none were sent.</li>
<li><b>Conclusion:</b> psychiatric diagnosis was unreliable and labels are 'sticky'.</li>
</ul>
<div class="box box-key"><span class="box-title">Evaluation</span>Highly influential; but used deception, and doctors are expected to err on the side of caution when someone reports hallucinations.</div>`,
  quiz: [
    { q: "The four Ds are deviance, distress, dysfunction and…", o: ["Danger", "Delusion", "Depression", "Diagnosis"], a: 0, e: "" },
    { q: "DSM-5 is published by…", o: ["The American Psychiatric Association", "The WHO", "The BPS", "The NHS"], a: 0, e: "" },
    { q: "ICD is published by…", o: ["The World Health Organization", "The APA", "The BPS", "Edexcel"], a: 0, e: "" },
    { q: "Inter-rater reliability is…", o: ["Agreement between clinicians", "Accuracy of a diagnosis", "Symptom overlap", "Predicting outcomes"], a: 0, e: "" },
    { q: "How many pseudo-patients were in Rosenhan's first study?", o: ["8", "12", "40", "193"], a: 0, e: "" },
    { q: "The pseudo-patients said they heard…", o: ["'Empty', 'hollow', 'thud'", "Music", "Their name", "Screaming"], a: 0, e: "" },
    { q: "Average stay in Rosenhan's study was…", o: ["19 days", "7 days", "52 days", "1 year"], a: 0, e: "" },
    { q: "Who most often suspected the pseudo-patients?", o: ["Other patients", "Psychiatrists", "Nurses", "Visitors"], a: 0, e: "" },
    { q: "Comorbidity means…", o: ["Having more than one disorder", "Being misdiagnosed", "Recovery", "A symptom"], a: 0, e: "" },
    { q: "Predictive validity asks whether a diagnosis…", o: ["Predicts outcomes", "Is consistent", "Is cheap", "Is cultural"], a: 0, e: "" }
  ],
  flashcards: [
    ["Four Ds", "Deviance, distress, dysfunction, danger"],
    ["DSM-5", "APA, 2013; mental disorders"],
    ["ICD", "WHO; all health conditions (ICD-11 from 2022)"],
    ["Reliability", "Consistency: inter-rater, test-retest"],
    ["Validity", "Accuracy: predictive, construct"],
    ["Rosenhan study 1", "8 pseudo-patients, 12 hospitals, all admitted"],
    ["Rosenhan stay", "7–52 days, average 19"],
    ["Rosenhan study 2", "Staff wrongly judged genuine patients as fakes"],
    ["Sticky labels", "Normal behaviour reinterpreted through a diagnosis"],
    ["Comorbidity", "Two or more disorders together"]
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Schizophrenia",
  summary: "Symptoms and diagnosis, biological and non-biological explanations, treatments, and Carlsson et al. (2000).",
  notes: `
<h3>Symptoms</h3>
<table><tr><th>Positive (added)</th><th>Negative (lost)</th></tr>
<tr><td>Hallucinations, delusions, disorganised speech</td><td>Avolition (lack of motivation), alogia (poverty of speech), flat affect</td></tr></table>
<p><b>DSM-5:</b> two or more symptoms for a significant part of a month, at least one being delusions, hallucinations or disorganised speech, with signs lasting at least six months. Roughly 1% of people are affected.</p>
<h3>Biological explanations</h3>
<ul>
<li><b>Dopamine hypothesis:</b> excess dopamine activity in subcortical (mesolimbic) pathways linked to positive symptoms; low activity in the prefrontal cortex linked to negative symptoms. Supported by antipsychotics blocking D2 receptors, and by amphetamines (which raise dopamine) causing psychosis-like symptoms.</li>
<li><b>Genetics:</b> concordance is much higher in MZ than DZ twins (Gottesman, 1991: about 48% vs 17%), but not 100%, so environment matters.</li>
<li><b>Glutamate:</b> low glutamate activity may also be involved.</li>
</ul>
<h3>Non-biological explanation: social causation and the social drift hypothesis</h3>
<p>Schizophrenia is more common in poorer urban areas. <b>Social causation</b> says stresses like poverty and discrimination trigger it; <b>social drift</b> says people with schizophrenia drift down the social scale. The <b>diathesis-stress</b> model combines a vulnerability with stressful triggers.</p>
<h3>Treatments</h3>
<table><tr><th>Treatment</th><th>How</th><th>Evaluation</th></tr>
<tr><td>Typical antipsychotics (e.g. chlorpromazine)</td><td>Block D2 dopamine receptors</td><td>Reduce positive symptoms; side effects such as tardive dyskinesia</td></tr>
<tr><td>Atypical antipsychotics (e.g. clozapine)</td><td>Act on dopamine and serotonin</td><td>Help some negative symptoms; fewer movement side effects</td></tr>
<tr><td>CBT for psychosis</td><td>Challenge beliefs about voices and delusions</td><td>Helps coping; needs engagement</td></tr>
<tr><td>Family therapy</td><td>Reduce high expressed emotion at home</td><td>Lowers relapse</td></tr></table>
<h3>Contemporary study: Carlsson et al. (2000)</h3>
<p>A review of neurotransmitter research arguing that schizophrenia involves interactions between <b>dopamine, glutamate and serotonin</b>, not dopamine alone. Low glutamate activity may lead to dopamine imbalances, suggesting new drug targets.</p>`,
  quiz: [
    { q: "Hallucinations are a…", o: ["Positive symptom", "Negative symptom", "Treatment", "Cause"], a: 0, e: "" },
    { q: "Avolition means…", o: ["Lack of motivation", "Hearing voices", "False beliefs", "Fast speech"], a: 0, e: "" },
    { q: "Typical antipsychotics block…", o: ["D2 dopamine receptors", "Serotonin reuptake", "Glutamate release", "Cortisol"], a: 0, e: "" },
    { q: "Gottesman (1991) found MZ concordance of about…", o: ["48%", "17%", "100%", "1%"], a: 0, e: "" },
    { q: "Social drift suggests…", o: ["People with schizophrenia move down the social scale", "Poverty causes schizophrenia", "It's genetic", "It's caused by dopamine"], a: 0, e: "" },
    { q: "Carlsson et al. (2000) emphasised…", o: ["Interactions between dopamine, glutamate and serotonin", "Only dopamine", "Family dysfunction", "Diagnosis"], a: 0, e: "" },
    { q: "Atypical antipsychotics…", o: ["Act on dopamine and serotonin", "Only block serotonin", "Are a talking therapy", "Increase dopamine"], a: 0, e: "" },
    { q: "Family therapy aims to reduce…", o: ["High expressed emotion", "Dopamine", "Hallucinations directly", "Genes"], a: 0, e: "" },
    { q: "About what percentage of people have schizophrenia?", o: ["1%", "10%", "25%", "0.01%"], a: 0, e: "" },
    { q: "Amphetamines support the dopamine hypothesis because they…", o: ["Increase dopamine and can cause psychosis-like symptoms", "Block dopamine", "Cure schizophrenia", "Lower serotonin"], a: 0, e: "" }
  ],
  flashcards: [
    ["Positive symptoms", "Hallucinations, delusions, disorganised speech"],
    ["Negative symptoms", "Avolition, alogia, flat affect"],
    ["DSM-5 schizophrenia", "2+ symptoms for a month; signs for 6 months"],
    ["Dopamine hypothesis", "Excess subcortical dopamine → positive symptoms"],
    ["Gottesman (1991)", "MZ about 48%, DZ about 17%"],
    ["Social causation vs drift", "Poverty causes it vs illness causes downward drift"],
    ["Typical antipsychotic", "Chlorpromazine: blocks D2"],
    ["Atypical antipsychotic", "Clozapine: dopamine + serotonin"],
    ["Carlsson et al. (2000)", "Dopamine–glutamate–serotonin interactions"],
    ["Diathesis-stress", "Vulnerability + stressful trigger"]
  ]
});

S2Data.add({
  id: "5c", group: 5, title: "Unipolar depression",
  summary: "Symptoms and diagnosis, biological and cognitive explanations, and treatments with drugs and CBT.",
  notes: `
<h3>Symptoms and diagnosis</h3>
<p><b>DSM-5:</b> at least five symptoms nearly every day for two weeks, including either <b>depressed mood</b> or <b>loss of interest or pleasure (anhedonia)</b>. Others include changes in sleep and appetite, fatigue, worthlessness, poor concentration and thoughts of death.</p>
<h3>Biological explanations</h3>
<ul>
<li><b>Monoamine hypothesis:</b> low levels of serotonin and noradrenaline. Supported by SSRIs, though they take weeks to work, suggesting it isn't the whole story.</li>
<li><b>Genes:</b> depression runs in families. Caspi et al. (2003) found people with a short version of the <b>5-HTT</b> gene were more likely to become depressed after stressful life events: a gene–environment interaction.</li>
</ul>
<h3>Cognitive explanations</h3>
<ul>
<li><b>Beck's cognitive triad:</b> negative views of the <b>self</b>, the <b>world</b> and the <b>future</b>, driven by negative schemas and <b>cognitive biases</b> (e.g. overgeneralisation).</li>
<li><b>Ellis's ABC model:</b> an <b>A</b>ctivating event triggers irrational <b>B</b>eliefs, which lead to emotional <b>C</b>onsequences.</li>
</ul>
<h3>Treatments</h3>
<table><tr><th>Treatment</th><th>How</th><th>Evaluation</th></tr>
<tr><td>SSRIs (e.g. fluoxetine)</td><td>Block serotonin reuptake</td><td>Cheap and easy; side effects; relapse if stopped</td></tr>
<tr><td>CBT</td><td>Identify and challenge negative thoughts; behavioural activation</td><td>Tackles causes; lower relapse; needs effort and time</td></tr></table>
<div class="box box-tip"><span class="box-title">Exam tip</span>Combining drugs with CBT is often most effective, and shows the value of an interactionist approach.</div>`,
  quiz: [
    { q: "DSM-5 depression needs symptoms for at least…", o: ["Two weeks", "Six months", "One day", "One year"], a: 0, e: "" },
    { q: "Anhedonia means…", o: ["Loss of pleasure or interest", "Hearing voices", "Anxiety", "Over-eating"], a: 0, e: "" },
    { q: "The monoamine hypothesis focuses on low…", o: ["Serotonin and noradrenaline", "Dopamine only", "Glutamate", "Testosterone"], a: 0, e: "" },
    { q: "Beck's triad is negative views of…", o: ["Self, world, future", "Id, ego, superego", "Past, present, future", "Family, friends, work"], a: 0, e: "" },
    { q: "In Ellis's ABC model, B stands for…", o: ["Beliefs", "Behaviour", "Brain", "Bias"], a: 0, e: "" },
    { q: "SSRIs work by…", o: ["Blocking serotonin reuptake", "Blocking dopamine receptors", "Raising cortisol", "Releasing glutamate"], a: 0, e: "" },
    { q: "Caspi et al. (2003) showed…", o: ["A gene–environment interaction", "Depression is purely genetic", "SSRIs don't work", "CBT is best"], a: 0, e: "" },
    { q: "A strength of CBT is…", o: ["Lower relapse rates", "No effort needed", "Instant results", "No therapist needed"], a: 0, e: "" },
    { q: "A weakness of the monoamine hypothesis is that SSRIs…", o: ["Take weeks to work", "Act immediately", "Raise dopamine", "Have no side effects"], a: 0, e: "" },
    { q: "Overgeneralisation is a…", o: ["Cognitive bias", "Neurotransmitter", "Drug", "Symptom of schizophrenia"], a: 0, e: "" }
  ],
  flashcards: [
    ["DSM-5 depression", "5+ symptoms for 2 weeks, including low mood or anhedonia"],
    ["Anhedonia", "Loss of interest or pleasure"],
    ["Monoamine hypothesis", "Low serotonin and noradrenaline"],
    ["Caspi et al. (2003)", "Short 5-HTT + stress → depression"],
    ["Beck's cognitive triad", "Negative self, world, future"],
    ["Ellis ABC", "Activating event → Beliefs → Consequences"],
    ["SSRIs", "Block serotonin reuptake"],
    ["CBT", "Challenge negative thoughts; behavioural activation"],
    ["SSRI weakness", "Side effects; take weeks; relapse"],
    ["Interactionist approach", "Combining biology and cognition (drugs + CBT)"]
  ]
});

S2Data.add({
  id: "5d", group: 5, title: "Clinical psychology: methods",
  summary: "Primary and secondary data, meta-analysis, cross-cultural and longitudinal research, interviews in clinical settings, and the clinical practical.",
  notes: `
<h3>Primary and secondary data</h3>
<table><tr><th></th><th>Primary</th><th>Secondary</th></tr>
<tr><td>Meaning</td><td>Collected first-hand by the researcher</td><td>Collected by someone else (records, published studies)</td></tr>
<tr><td>Strength</td><td>Fits the aim exactly</td><td>Cheap, quick, large datasets</td></tr>
<tr><td>Weakness</td><td>Time-consuming, costly</td><td>May not fit the aim; quality unknown</td></tr></table>
<h3>Meta-analysis</h3>
<p>Combines the results of many studies on the same question to find an overall effect. <b>Strength:</b> large combined sample, more generalisable. <b>Weakness:</b> <b>publication bias</b> (the 'file drawer' problem) and combining studies with different methods.</p>
<h3>Longitudinal and cross-sectional designs</h3>
<p><b>Longitudinal</b> studies follow the same people over time (show change, but are slow and suffer drop-out). <b>Cross-sectional</b> studies compare different groups at one time (quick, but cohort effects).</p>
<h3>Cross-cultural research</h3>
<p>Compares disorders and diagnosis across cultures. It can reveal <b>culture-bound syndromes</b> and bias in Western-based classification systems, but risks <b>ethnocentrism</b> and translation problems.</p>
<h3>Clinical interviews</h3>
<p>Used for diagnosis and research. Structured interviews are more reliable; unstructured ones give richer detail. Ethics are especially important with vulnerable participants.</p>
<div class="box box-prac"><span class="box-title">Practical investigation</span>Summarise secondary data (for example, prevalence of a disorder across groups) or carry out a content analysis of how mental health is portrayed in the media, with clear categories and inter-rater checks.</div>
<h3>Content analysis</h3>
<p>Turns qualitative material (articles, TV, social media) into numbers by counting how often <b>coding categories</b> appear. It's replicable, but categories involve interpretation.</p>`,
  quiz: [
    { q: "Secondary data is…", o: ["Collected by someone else", "Collected first-hand", "Always qualitative", "Never reliable"], a: 0, e: "" },
    { q: "A meta-analysis…", o: ["Combines results of many studies", "Studies one person", "Uses only primary data", "Is a type of interview"], a: 0, e: "" },
    { q: "The 'file drawer' problem refers to…", o: ["Publication bias", "Lost data", "Drop-out", "Cohort effects"], a: 0, e: "" },
    { q: "A longitudinal study…", o: ["Follows the same people over time", "Compares groups at one time", "Uses one session", "Is cross-cultural"], a: 0, e: "" },
    { q: "A weakness of longitudinal studies is…", o: ["Participant drop-out", "Cohort effects", "No change shown", "They're quick"], a: 0, e: "" },
    { q: "Ethnocentrism means…", o: ["Judging other cultures by your own", "Studying one person", "Combining studies", "Counting categories"], a: 0, e: "" },
    { q: "Content analysis turns qualitative material into…", o: ["Quantitative data", "Case studies", "Brain scans", "Hypotheses"], a: 0, e: "" },
    { q: "Cross-sectional studies can suffer from…", o: ["Cohort effects", "Drop-out over years", "Order effects", "Publication bias"], a: 0, e: "" },
    { q: "A strength of secondary data is…", o: ["It's cheap and quick", "It fits the aim exactly", "It's always valid", "It's collected first-hand"], a: 0, e: "" },
    { q: "Culture-bound syndromes are…", o: ["Disorders found mainly in certain cultures", "Universal disorders", "Treatments", "Sampling methods"], a: 0, e: "" }
  ],
  flashcards: [
    ["Primary data", "Collected first-hand for the aim"],
    ["Secondary data", "Collected by others; cheap but may not fit"],
    ["Meta-analysis", "Combines many studies for an overall effect"],
    ["Publication bias", "Non-significant results stay unpublished"],
    ["Longitudinal", "Same people over time; drop-out"],
    ["Cross-sectional", "Different groups at one time; cohort effects"],
    ["Cross-cultural research", "Compares cultures; risk of ethnocentrism"],
    ["Culture-bound syndrome", "Disorder specific to certain cultures"],
    ["Content analysis", "Count coding categories in media"],
    ["Clinical interviews", "Structured = reliable; unstructured = rich"]
  ]
});

S2Data.detail("4a", { mistakes: ["Saying negative reinforcement is punishment; it increases behaviour."], tips: ["Draw a 2×2 table: add/remove × increase/decrease."], fact: "Pavlov won the Nobel Prize in 1904 for his work on digestion, not conditioning." });
S2Data.detail("4b", { mistakes: ["Forgetting the control group in Bandura (1961)."], tips: ["Use Bandura (1965) to explain the learning–performance distinction."], fact: "The Bobo doll was weighted at the bottom, so it bounced back up when hit." });
S2Data.detail("4c", { mistakes: ["Saying systematic desensitisation exposes people to their worst fear first; that's flooding."], tips: ["Know the four observation pairs and when to use event vs time sampling."], fact: "Becker's research team found girls in Fiji said they admired TV characters' bodies, which had rarely been an ideal there before." });
S2Data.detail("5a", { mistakes: ["Confusing reliability (consistency) with validity (accuracy)."], tips: ["Use Rosenhan as evidence on both reliability and validity of diagnosis."], fact: "Rosenhan's study led to major changes in later editions of the DSM." });
S2Data.detail("5b", { mistakes: ["Saying the dopamine hypothesis explains all symptoms; negative symptoms fit less well."], tips: ["Always add the diathesis-stress model for a high-level evaluation."], fact: "Chlorpromazine, introduced in the 1950s, transformed psychiatric hospitals." });
S2Data.detail("5c", { mistakes: ["Mixing up Beck (triad) and Ellis (ABC)."], tips: ["Compare drugs and CBT on effectiveness, cost, side effects and relapse."], fact: "Fluoxetine (Prozac) was first approved in the USA in 1987." });
S2Data.detail("5d", { mistakes: ["Calling a meta-analysis a type of primary data."], tips: ["Link publication bias to the reliability of meta-analysis conclusions."], fact: "The term 'meta-analysis' was coined by Gene Glass in 1976." });
