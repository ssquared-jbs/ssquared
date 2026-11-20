/* Computer Science² — Computers, Networks, Issues and impact */

S2Data.add({
  id: "3a", group: 3, title: "Hardware and the CPU",
  summary: "The von Neumann architecture, the fetch-decode-execute cycle, and main memory.",
  notes: `
<h3>The stored program concept</h3>
<p>In the <b>von Neumann architecture</b>, program instructions and data are both stored in the same main memory, and the CPU fetches them one at a time.</p>
<h3>Inside the CPU</h3>
<table><tr><th>Component</th><th>Job</th></tr>
<tr><td>Control unit (CU)</td><td>Decodes instructions and sends control signals to coordinate the other parts.</td></tr>
<tr><td>Arithmetic logic unit (ALU)</td><td>Performs calculations and logical comparisons.</td></tr>
<tr><td>Registers</td><td>Tiny, very fast stores inside the CPU (e.g. the program counter holds the address of the next instruction).</td></tr>
<tr><td>Clock</td><td>Sends regular pulses that synchronise operations. Clock speed is measured in hertz (e.g. 3.5 GHz).</td></tr>
<tr><td>Buses</td><td>Connections that carry addresses, data and control signals.</td></tr></table>
<h3>The fetch-decode-execute cycle</h3>
<ol>
<li><b>Fetch:</b> the address in the program counter is sent to memory; the instruction is copied into the CPU; the program counter increments.</li>
<li><b>Decode:</b> the control unit works out what the instruction means.</li>
<li><b>Execute:</b> the instruction is carried out (e.g. the ALU does a calculation).</li>
</ol>
<h3>Main memory</h3>
<table><tr><th>RAM</th><th>ROM</th></tr>
<tr><td>Volatile: contents lost when power is off</td><td>Non-volatile</td></tr>
<tr><td>Holds programs and data currently in use</td><td>Holds the boot-up instructions (firmware)</td></tr>
<tr><td>Read and write</td><td>Read only</td></tr></table>
<p><b>Cache</b> is very fast memory on or near the CPU that stores frequently used instructions and data. <b>Virtual memory</b> uses part of secondary storage when RAM is full, which slows the computer down.</p>
<div class="box box-key"><span class="box-title">Performance</span>A faster clock, more cores and more cache usually improve performance.</div>`,
  quiz: [
    { q: "In von Neumann architecture, instructions and data are stored…", o: ["In the same memory", "In separate memories", "Only in the CPU", "On the hard disk only"], a: 0, e: "" },
    { q: "Which part of the CPU performs calculations?", o: ["ALU", "Control unit", "Clock", "Cache"], a: 0, e: "" },
    { q: "Which part decodes instructions?", o: ["Control unit", "ALU", "RAM", "Bus"], a: 0, e: "" },
    { q: "The program counter holds…", o: ["The address of the next instruction", "The result of a calculation", "The clock speed", "A copy of RAM"], a: 0, e: "" },
    { q: "RAM is…", o: ["Volatile", "Non-volatile", "Read-only", "Permanent storage"], a: 0, e: "" },
    { q: "ROM typically stores…", o: ["Boot-up instructions", "Open documents", "The internet", "Cache data"], a: 0, e: "" },
    { q: "Cache memory is…", o: ["Small, very fast memory near the CPU", "A type of hard disk", "Slower than RAM", "Part of the internet"], a: 0, e: "" },
    { q: "Clock speed is measured in…", o: ["Hertz", "Bytes", "Bits", "Pixels"], a: 0, e: "" },
    { q: "Virtual memory uses…", o: ["Secondary storage when RAM is full", "Cache", "ROM", "The ALU"], a: 0, e: "" }
  ],
  flashcards: [
    ["Von Neumann", "Instructions and data share one memory"],
    ["Control unit", "Decodes and coordinates"],
    ["ALU", "Arithmetic and logic"],
    ["Program counter", "Address of the next instruction"],
    ["Fetch-decode-execute", "Get instruction → work it out → carry it out"],
    ["RAM vs ROM", "Volatile, read/write vs non-volatile, read-only"],
    ["Cache", "Fast memory for frequently used data"]
  ]
});

S2Data.add({
  id: "3b", group: 3, title: "Secondary storage and embedded systems",
  summary: "Magnetic, optical and solid-state storage, cloud storage, and embedded systems.",
  notes: `
<h3>Why secondary storage?</h3>
<p>Main memory (RAM) is volatile, so files and programs must be kept on <b>non-volatile</b> secondary storage.</p>
<table><tr><th>Type</th><th>How it works</th><th>Pros</th><th>Cons</th></tr>
<tr><td>Magnetic (hard disk drive)</td><td>Spinning platters; a read/write head magnetises tiny areas</td><td>Large capacity, cheap per GB</td><td>Moving parts: slower, can be damaged by knocks</td></tr>
<tr><td>Optical (CD, DVD, Blu-ray)</td><td>A laser reads pits and lands on a disc</td><td>Cheap, portable</td><td>Small capacity, slow, scratches</td></tr>
<tr><td>Solid state (SSD, USB stick, SD card)</td><td>Flash memory: electrons trapped in transistors</td><td>Fast, no moving parts, durable, low power</td><td>More expensive per GB; limited write cycles</td></tr></table>
<h3>Cloud storage</h3>
<p>Files are stored on remote servers and accessed over the internet. Benefits: access anywhere, automatic backup, easy sharing. Drawbacks: needs an internet connection, ongoing cost, security and privacy concerns.</p>
<h3>Embedded systems</h3>
<p>A computer built into a larger device to perform a <b>dedicated function</b>: washing machines, car engine management, smart thermostats, traffic lights. They usually have limited, specialised hardware and software stored in ROM, receive input from sensors and control actuators.</p>
<div class="box box-key"><span class="box-title">Choosing storage</span>Consider capacity, speed, portability, durability, reliability and cost.</div>`,
  quiz: [
    { q: "Secondary storage is…", o: ["Non-volatile", "Volatile", "Inside the CPU", "Always optical"], a: 0, e: "" },
    { q: "Which storage has moving parts?", o: ["Hard disk drive", "SSD", "USB stick", "SD card"], a: 0, e: "" },
    { q: "Optical discs are read using…", o: ["A laser", "A magnet", "Electric charge", "Sound waves"], a: 0, e: "" },
    { q: "Which is most suitable for a laptop needing fast boot-up?", o: ["SSD", "DVD", "Magnetic tape", "CD"], a: 0, e: "" },
    { q: "Which has the lowest cost per GB for large capacity?", o: ["Magnetic hard disk", "SSD", "SD card", "Blu-ray"], a: 0, e: "" },
    { q: "A drawback of cloud storage is…", o: ["Needs an internet connection", "Can't share files", "No backup", "Only stores text"], a: 0, e: "" },
    { q: "An embedded system…", o: ["Performs a dedicated function inside a device", "Is a general-purpose PC", "Is a type of cloud", "Is optical storage"], a: 0, e: "" },
    { q: "Which is an embedded system?", o: ["A washing machine controller", "A laptop", "A web server", "A smartphone app"], a: 0, e: "" },
    { q: "Solid-state storage uses…", o: ["Flash memory", "Magnetic platters", "Lasers", "Punched cards"], a: 0, e: "" }
  ],
  flashcards: [
    ["Magnetic", "Cheap, high capacity; moving parts"],
    ["Optical", "Laser; cheap, portable, small capacity"],
    ["Solid state", "Flash memory; fast, durable, pricier"],
    ["Cloud", "Remote servers; access anywhere, needs internet"],
    ["Embedded system", "Computer inside a device with one dedicated job"],
    ["Storage factors", "Capacity, speed, portability, durability, cost"]
  ]
});

S2Data.add({
  id: "3c", group: 3, title: "Software and programming languages",
  summary: "Operating systems, utility software, robust code, and high- and low-level languages and translators.",
  notes: `
<h3>Operating system functions</h3>
<ul>
<li><b>User interface</b> (GUI or command line)</li>
<li><b>Memory management:</b> allocates RAM to programs</li>
<li><b>Process management:</b> schedules programs so they appear to run at once (multitasking)</li>
<li><b>File management:</b> folders, naming, permissions</li>
<li><b>Peripheral management:</b> uses drivers to communicate with devices</li>
<li><b>User management:</b> accounts, passwords, access rights</li>
</ul>
<h3>Utility software</h3>
<p>Helps maintain the computer: <b>defragmentation</b> (reorganises files on a hard disk), <b>backup</b>, <b>compression</b>, <b>encryption</b>, <b>anti-malware</b>.</p>
<h3>Robust software</h3>
<p>Code should be well tested, use validation, handle errors, and be readable: meaningful names, comments, indentation and subprograms. Poorly written code can contain <b>vulnerabilities</b> attackers exploit.</p>
<h3>Languages and translators</h3>
<table><tr><th>High-level (e.g. Python)</th><th>Low-level (machine code, assembly)</th></tr>
<tr><td>Close to English; easy to read and write</td><td>Close to the hardware; hard for humans</td></tr>
<tr><td>Portable across processors</td><td>Specific to one processor type</td></tr>
<tr><td>Must be translated</td><td>Gives precise control; can be very efficient</td></tr></table>
<table><tr><th>Translator</th><th>How it works</th></tr>
<tr><td>Compiler</td><td>Translates the whole program into machine code at once, creating an executable. Errors are reported after compiling.</td></tr>
<tr><td>Interpreter</td><td>Translates and runs one line at a time; stops at the first error. No executable file.</td></tr>
<tr><td>Assembler</td><td>Translates assembly language into machine code.</td></tr></table>`,
  quiz: [
    { q: "Which is a function of an operating system?", o: ["Memory management", "Word processing", "Photo editing", "Playing games"], a: 0, e: "" },
    { q: "Device drivers help the OS…", o: ["Communicate with peripherals", "Compress files", "Write code", "Browse the web"], a: 0, e: "" },
    { q: "Defragmentation…", o: ["Reorganises files on a hard disk", "Removes viruses", "Encrypts data", "Compiles code"], a: 0, e: "" },
    { q: "Which is a high-level language?", o: ["Python", "Machine code", "Assembly", "Binary"], a: 0, e: "" },
    { q: "A compiler…", o: ["Translates the whole program at once", "Runs one line at a time", "Translates assembly only", "Is a type of hardware"], a: 0, e: "" },
    { q: "An interpreter…", o: ["Translates and runs one line at a time", "Creates an executable", "Is hardware", "Only works with assembly"], a: 0, e: "" },
    { q: "An assembler translates…", o: ["Assembly language into machine code", "Python into English", "Machine code into Python", "Images into text"], a: 0, e: "" },
    { q: "Low-level languages are…", o: ["Specific to a processor type", "Portable", "Easy to read", "Always compiled from Python"], a: 0, e: "" },
    { q: "Which makes code more maintainable?", o: ["Meaningful variable names and comments", "Single-letter names", "No indentation", "Very long lines"], a: 0, e: "" }
  ],
  flashcards: [
    ["OS functions", "UI, memory, processes, files, peripherals, users"],
    ["Utility software", "Defrag, backup, compression, encryption, anti-malware"],
    ["High-level language", "Readable, portable; needs translating"],
    ["Low-level language", "Machine code/assembly; processor-specific"],
    ["Compiler", "Whole program at once → executable"],
    ["Interpreter", "Line by line; stops at first error"],
    ["Assembler", "Assembly → machine code"]
  ]
});

S2Data.add({
  id: "4a", group: 4, title: "Network types and topologies",
  summary: "LANs and WANs, wired and wireless connections, star and mesh topologies, and network performance.",
  notes: `
<h3>Why network?</h3>
<p>Share files, printers and internet connections; communicate; centralise backup and security.</p>
<table><tr><th>LAN (local area network)</th><th>WAN (wide area network)</th></tr>
<tr><td>Small geographical area (a school or home)</td><td>Large area; connects LANs (the internet is the largest)</td></tr>
<tr><td>Hardware usually owned by the organisation</td><td>Uses infrastructure from telecoms companies</td></tr></table>
<h3>Wired vs wireless</h3>
<table><tr><th>Wired (Ethernet cables, fibre)</th><th>Wireless (Wi-Fi)</th></tr>
<tr><td>Faster, more reliable, more secure</td><td>Convenient, mobile, fewer cables</td></tr>
<tr><td>Less flexible</td><td>Interference, range limits, easier to intercept</td></tr></table>
<h3>Topologies</h3>
<ul>
<li><b>Star:</b> every device connects to a central switch. If one cable fails, only that device is affected; if the switch fails, the whole network fails.</li>
<li><b>Mesh:</b> devices connect to many others, giving multiple routes. Very reliable, but costly and complex to cable (often wireless).</li>
</ul>
<h3>Performance</h3>
<ul>
<li><b>Bandwidth:</b> the amount of data that can be transmitted per second (bits per second).</li>
<li><b>Latency:</b> the delay before data starts arriving.</li>
<li>Performance falls with more users, interference and distance.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>Time to send a 40 Mbit file at 8 Mbit/s = 40 ÷ 8 = 5 seconds.</div>`,
  quiz: [
    { q: "A LAN covers…", o: ["A small area like a school", "Countries", "Only the internet", "Satellites"], a: 0, e: "" },
    { q: "The internet is an example of a…", o: ["WAN", "LAN", "PAN", "Star network"], a: 0, e: "" },
    { q: "In a star topology, devices connect to…", o: ["A central switch", "Each other in a ring", "A single cable", "Satellites"], a: 0, e: "" },
    { q: "If the central switch in a star fails…", o: ["The whole network fails", "Only one device fails", "Nothing happens", "Speed doubles"], a: 0, e: "" },
    { q: "A mesh topology is…", o: ["Very reliable, with multiple routes", "Cheap and simple", "Dependent on one switch", "Only wired"], a: 0, e: "" },
    { q: "Bandwidth is…", o: ["Data transmitted per second", "Delay before data arrives", "Cable length", "Number of devices"], a: 0, e: "" },
    { q: "Latency is…", o: ["The delay in transmission", "Data per second", "Network size", "A protocol"], a: 0, e: "" },
    { q: "An advantage of wired networks is…", o: ["Faster and more reliable", "More mobile", "Fewer cables", "No setup"], a: 0, e: "" },
    { q: "Time to send 100 Mbit at 20 Mbit/s?", o: ["5 s", "2000 s", "0.2 s", "80 s"], a: 0, e: "" }
  ],
  flashcards: [
    ["LAN", "Small area; own hardware"],
    ["WAN", "Large area; connects LANs; e.g. the internet"],
    ["Star", "Central switch; switch is single point of failure"],
    ["Mesh", "Many routes; reliable but costly"],
    ["Bandwidth", "Bits per second"],
    ["Latency", "Delay"],
    ["Transfer time", "File size ÷ bandwidth"]
  ]
});

S2Data.add({
  id: "4b", group: 4, title: "Protocols and the TCP/IP model",
  summary: "Why protocols matter, the four-layer TCP/IP model and common protocols.",
  notes: `
<h3>Protocols</h3>
<p>A <b>protocol</b> is a set of rules for how devices communicate: data format, addressing, error checking and speed. Standard protocols let devices from different manufacturers work together.</p>
<h3>The TCP/IP model</h3>
<table><tr><th>Layer</th><th>Job</th><th>Protocols</th></tr>
<tr><td>4. Application</td><td>Provides network services to applications</td><td>HTTP, HTTPS, FTP, SMTP, POP3, IMAP</td></tr>
<tr><td>3. Transport</td><td>Splits data into packets, numbers them, checks they all arrive and reassembles them</td><td>TCP, UDP</td></tr>
<tr><td>2. Internet</td><td>Adds IP addresses and routes packets across networks</td><td>IP</td></tr>
<tr><td>1. Link</td><td>Sends data over the physical hardware</td><td>Ethernet, Wi-Fi</td></tr></table>
<p><b>Layering</b> lets each layer be developed independently, as long as it works with the layers above and below.</p>
<h3>Common protocols</h3>
<table><tr><th>Protocol</th><th>Use</th></tr>
<tr><td>HTTP / HTTPS</td><td>Requesting web pages (HTTPS is encrypted)</td></tr>
<tr><td>FTP</td><td>Transferring files</td></tr>
<tr><td>SMTP</td><td>Sending email</td></tr>
<tr><td>POP3</td><td>Downloading email to one device, usually deleting it from the server</td></tr>
<tr><td>IMAP</td><td>Accessing email kept on the server, synced across devices</td></tr></table>
<h3>Addresses</h3>
<p>An <b>IP address</b> identifies a device on a network (IPv4: four numbers 0–255). A <b>MAC address</b> is a unique hardware identifier built into a network interface card.</p>`,
  quiz: [
    { q: "A protocol is…", o: ["A set of rules for communication", "A type of cable", "A network topology", "A computer virus"], a: 0, e: "" },
    { q: "How many layers in the TCP/IP model?", o: ["4", "7", "3", "5"], a: 0, e: "" },
    { q: "Which layer contains HTTP?", o: ["Application", "Transport", "Internet", "Link"], a: 0, e: "" },
    { q: "TCP works at the…", o: ["Transport layer", "Application layer", "Link layer", "Internet layer"], a: 0, e: "" },
    { q: "Which protocol sends email?", o: ["SMTP", "POP3", "FTP", "HTTP"], a: 0, e: "" },
    { q: "IMAP…", o: ["Keeps email on the server, synced across devices", "Sends email", "Transfers web pages", "Encrypts files"], a: 0, e: "" },
    { q: "HTTPS differs from HTTP because it…", o: ["Is encrypted", "Is faster", "Sends email", "Is wireless"], a: 0, e: "" },
    { q: "Which layer adds IP addresses and routes packets?", o: ["Internet", "Application", "Link", "Transport"], a: 0, e: "" },
    { q: "A MAC address is…", o: ["A unique hardware identifier", "A website address", "An email address", "A type of protocol"], a: 0, e: "" }
  ],
  flashcards: [
    ["Protocol", "Rules for communication"],
    ["Application layer", "HTTP(S), FTP, SMTP, POP3, IMAP"],
    ["Transport layer", "TCP: packets, ordering, error checks"],
    ["Internet layer", "IP: addressing and routing"],
    ["Link layer", "Ethernet, Wi-Fi"],
    ["POP3 vs IMAP", "Download and delete vs sync on server"]
  ]
});

S2Data.add({
  id: "4c", group: 4, title: "Network security",
  summary: "Threats such as malware, phishing and hacking, and how networks are protected.",
  notes: `
<h3>Threats</h3>
<table><tr><th>Threat</th><th>What it is</th></tr>
<tr><td>Malware</td><td>Malicious software: viruses, worms, Trojans, ransomware, spyware</td></tr>
<tr><td>Phishing</td><td>Fake emails or websites that trick people into revealing details</td></tr>
<tr><td>Social engineering</td><td>Manipulating people (e.g. pretending to be IT support) rather than hacking systems</td></tr>
<tr><td>Brute-force attack</td><td>Trying many passwords automatically</td></tr>
<tr><td>Denial of service (DoS)</td><td>Flooding a server with traffic so it can't respond</td></tr>
<tr><td>Hacking</td><td>Unauthorised access to systems</td></tr></table>
<h3>Protection</h3>
<ul>
<li><b>Firewall:</b> monitors traffic and blocks unauthorised access using rules.</li>
<li><b>Anti-malware:</b> detects and removes malware; keep it updated.</li>
<li><b>Encryption:</b> scrambles data so it can't be read without the key.</li>
<li><b>Authentication:</b> strong passwords, two-factor authentication, biometrics.</li>
<li><b>Access control:</b> users only get the permissions they need.</li>
<li><b>Acceptable use policy</b> and staff training.</li>
<li><b>Physical security:</b> locks, ID cards.</li>
<li><b>Backups</b> and <b>penetration testing</b> (authorised attempts to find weaknesses).</li>
</ul>
<h3>Encryption example: Caesar cipher</h3>
<p>Shift each letter a fixed number of places. With a shift of 3, HELLO → <b>KHOOR</b>. Easy to crack because there are only 25 useful shifts.</p>`,
  quiz: [
    { q: "Phishing is…", o: ["Tricking people into revealing details via fake messages", "Flooding a server", "Trying many passwords", "A type of firewall"], a: 0, e: "" },
    { q: "Ransomware…", o: ["Encrypts files and demands payment", "Speeds up computers", "Protects networks", "Is a protocol"], a: 0, e: "" },
    { q: "A DoS attack…", o: ["Floods a server so it can't respond", "Steals passwords by email", "Encrypts data", "Is legal testing"], a: 0, e: "" },
    { q: "A firewall…", o: ["Blocks unauthorised network traffic", "Removes viruses from files", "Backs up data", "Compresses data"], a: 0, e: "" },
    { q: "Two-factor authentication uses…", o: ["Two different types of proof of identity", "Two passwords", "Two firewalls", "Two computers"], a: 0, e: "" },
    { q: "Penetration testing is…", o: ["Authorised attempts to find weaknesses", "A type of malware", "Illegal hacking", "Sending phishing emails"], a: 0, e: "" },
    { q: "Caesar cipher shift 1: 'CAT' becomes…", o: ["DBU", "BZS", "CAT", "DAT"], a: 0, e: "" },
    { q: "Social engineering targets…", o: ["People", "Hardware", "Cables", "Protocols"], a: 0, e: "" },
    { q: "Which defends against brute-force attacks?", o: ["Strong passwords and account lockouts", "Defragmentation", "Compression", "Bigger RAM"], a: 0, e: "" }
  ],
  flashcards: [
    ["Malware", "Viruses, worms, Trojans, ransomware, spyware"],
    ["Phishing", "Fake messages to steal details"],
    ["DoS", "Flood a server with traffic"],
    ["Firewall", "Filters network traffic by rules"],
    ["Encryption", "Scrambles data; needs key to read"],
    ["Pen testing", "Authorised search for weaknesses"],
    ["Caesar cipher", "Shift letters by a fixed amount"]
  ]
});

S2Data.add({
  id: "5a", group: 5, title: "Environmental, ethical and legal issues",
  summary: "E-waste and energy use, privacy, AI and bias, the key UK laws, and software licensing.",
  notes: `
<h3>Environmental</h3>
<ul>
<li><b>Manufacture</b> uses rare metals, water and energy; mining harms environments.</li>
<li><b>Energy use:</b> data centres and devices consume large amounts of electricity.</li>
<li><b>E-waste:</b> discarded devices contain toxic materials; often shipped abroad. Recycling and repair help.</li>
<li>Positive: computers model climate, reduce travel (video calls), and manage energy efficiently.</li>
</ul>
<h3>Ethical issues</h3>
<ul>
<li><b>Privacy:</b> companies collect and sell personal data; surveillance and tracking.</li>
<li><b>Artificial intelligence:</b> algorithms can be biased if trained on biased data; accountability for decisions (e.g. self-driving cars).</li>
<li><b>Digital divide:</b> unequal access to technology.</li>
<li><b>Employment:</b> automation replaces some jobs and creates others.</li>
</ul>
<h3>UK laws</h3>
<table><tr><th>Law</th><th>Covers</th></tr>
<tr><td>Data Protection Act 2018 (UK GDPR)</td><td>How personal data is collected, stored and used: lawful, accurate, secure, kept no longer than needed</td></tr>
<tr><td>Computer Misuse Act 1990</td><td>Unauthorised access; access with intent to commit further crime; unauthorised modification (e.g. spreading malware)</td></tr>
<tr><td>Copyright, Designs and Patents Act 1988</td><td>Protects creative work, including software, from copying without permission</td></tr></table>
<h3>Software licensing</h3>
<table><tr><th>Open source</th><th>Proprietary</th></tr>
<tr><td>Source code available; can be modified and shared</td><td>Source code kept secret; licence restricts use</td></tr>
<tr><td>Usually free; community support</td><td>Usually paid; official support and updates</td></tr></table>`,
  quiz: [
    { q: "E-waste is…", o: ["Discarded electronic devices", "Wasted electricity", "Spam email", "Deleted files"], a: 0, e: "" },
    { q: "Which law covers hacking?", o: ["Computer Misuse Act 1990", "Data Protection Act 2018", "Copyright Act 1988", "Equality Act 2010"], a: 0, e: "" },
    { q: "Which law covers storing personal data?", o: ["Data Protection Act 2018", "Computer Misuse Act 1990", "Copyright Act 1988", "Road Traffic Act"], a: 0, e: "" },
    { q: "Copying software without permission breaks…", o: ["Copyright, Designs and Patents Act 1988", "Computer Misuse Act", "Data Protection Act", "No law"], a: 0, e: "" },
    { q: "Open-source software…", o: ["Has source code available to modify", "Is always paid", "Has hidden code", "Is illegal"], a: 0, e: "" },
    { q: "Proprietary software…", o: ["Keeps source code secret", "Can be freely modified", "Has no licence", "Is always free"], a: 0, e: "" },
    { q: "AI bias usually comes from…", o: ["Biased training data", "Fast processors", "Too much RAM", "Encryption"], a: 0, e: "" },
    { q: "The digital divide refers to…", o: ["Unequal access to technology", "Dividing binary numbers", "Splitting networks", "Cloud storage"], a: 0, e: "" },
    { q: "A positive environmental impact of computing is…", o: ["Video calls reducing travel", "More e-waste", "Mining rare metals", "Data centre energy use"], a: 0, e: "" }
  ],
  flashcards: [
    ["E-waste", "Toxic discarded devices; recycle and repair"],
    ["Data Protection Act 2018", "Personal data must be handled lawfully and securely"],
    ["Computer Misuse Act 1990", "Unauthorised access and modification"],
    ["Copyright Act 1988", "Protects creative work and software"],
    ["Open source", "Code available; modifiable; usually free"],
    ["Proprietary", "Code secret; licensed; support"],
    ["AI bias", "Biased data → unfair decisions"]
  ]
});

S2Data.detail("3a", { mistakes: ["Saying RAM stores files permanently."], tips: ["Describe each FDE stage with the component involved: program counter, control unit, ALU."], fact: "A 3 GHz processor's clock ticks three billion times every second." });
S2Data.detail("3b", { mistakes: ["Calling RAM 'storage': it's memory; storage is non-volatile."], tips: ["For 'which storage' questions, justify with two factors from the scenario."], fact: "The first commercial hard drive, in 1956, weighed about a tonne and stored about 5 million characters." });
S2Data.detail("3c", { mistakes: ["Mixing up compilers and interpreters."], tips: ["Remember: interpreters stop at the first error, which helps debugging."], fact: "The first compiler was written by Grace Hopper in the early 1950s." });
S2Data.detail("4a", { mistakes: ["Forgetting to convert units (MB to Mbit) before calculating transfer time."], tips: ["Learn one strength and one weakness of each topology."], fact: "Undersea cables carry over 95% of international internet traffic." });
S2Data.detail("4b", { mistakes: ["Saying POP3 sends email: SMTP sends, POP3 and IMAP retrieve."], tips: ["Learn the layers top-down: Application, Transport, Internet, Link."], fact: "TCP/IP was adopted by ARPANET on 1 January 1983, often called the internet's birthday." });
S2Data.detail("4c", { mistakes: ["Saying a firewall removes viruses: it filters traffic."], tips: ["Match each threat to a specific defence in exam answers."], fact: "Most successful cyber attacks start with a human mistake, such as clicking a phishing link." });
S2Data.detail("5a", { mistakes: ["Naming the wrong law for a scenario."], tips: ["For 'discuss' questions, give both benefits and drawbacks, then a conclusion."], fact: "Only around a fifth of the world's e-waste is formally recycled." });
