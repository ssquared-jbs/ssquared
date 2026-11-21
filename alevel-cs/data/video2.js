/* Video explainers — A-level Computer Science, sections 5–13. */

S2Data.video("5a", { scenes: [
  { type: "title", title: "Numbers and units", sub: "Number sets, bases and prefixes.", mark: "🔢",
    say: ["Computers work in binary, but we need to understand all kinds of numbers."] },
  { type: "compare", title: "Number sets", h: ["Examples"],
    rows: [["ℕ natural", "0, 1, 2…"], ["ℤ integer", "−3, 0, 5"], ["ℚ rational", "¾, 0.2"], ["Irrational", "√2, π"], ["ℝ real", "All of the above"]],
    say: ["Natural numbers count, starting from zero.", "Integers add the negatives.", "Rationals are fractions.", "Irrationals can't be written as fractions.", "And the reals include them all."] },
  { type: "calc", title: "Binary to hex", q: "1011 0110₂",
    lines: ["1011 = B, 0110 = 6", "= B6₁₆", "= 128 + 32 + 16 + 4 + 2 = 182"],
    say: ["Split into groups of four bits: eleven is B, and six.", "So it's B six in hex.", "Adding place values gives one hundred and eighty-two."] },
  { type: "compare", title: "Prefixes", h: ["Binary", "Decimal"],
    rows: [["Kilo / kibi", "2¹⁰ = 1024", "10³"], ["Mega / mebi", "2²⁰", "10⁶"], ["Giga / gibi", "2³⁰", "10⁹"]],
    say: ["A kibibyte is one thousand and twenty-four bytes; a kilobyte is a thousand.", "Mebi and mega differ in the same way.", "As do gibi and giga."] },
  { type: "quiz", q: "1 KiB is…", o: ["1024 bytes", "1000 bytes", "8 bits", "1024 bits"], a: 0,
    why: "2¹⁰ bytes.", say: ["How many bytes in a kibibyte?"] }
]});

S2Data.video("5b", { scenes: [
  { type: "title", title: "Binary arithmetic", sub: "Two's complement and fixed point.", mark: "±",
    say: ["How do computers store negative numbers and fractions?"] },
  { type: "big", text: "MSB = −128", sub: "8-bit two's complement range: −128 to 127",
    say: ["In two's complement, the top bit has a negative place value.", "So eight bits run from minus one hundred and twenty-eight to plus one hundred and twenty-seven."] },
  { type: "calc", title: "Negate 45", q: "45 = 00101101",
    lines: ["Invert: 11010010", "Add 1: 11010011", "Check: −128 + 64 + 16 + 2 + 1 = −45"],
    say: ["Start with forty-five in binary.", "Flip every bit, then add one.", "Check: minus one hundred and twenty-eight plus eighty-three is minus forty-five."] },
  { type: "calc", title: "Fixed point", q: "0101.1010 (4.4)",
    lines: ["0101 = 5", ".1010 = ½ + ⅛ = 0.625", "= 5.625"],
    say: ["The integer part is five.", "After the point, the bits are worth a half and an eighth.", "So the value is five point six two five."] },
  { type: "quiz", q: "11111111 in two's complement is…", o: ["−1", "255", "−127", "−128"], a: 0,
    why: "−128 + 127 = −1.", say: ["What is all ones in eight-bit two's complement?"] }
]});

S2Data.video("5c", { scenes: [
  { type: "title", title: "Floating point", sub: "Mantissa and exponent.", mark: "🎈",
    say: ["Floating point lets a few bits cover a huge range of numbers."] },
  { type: "big", text: "mantissa × 2^exponent", sub: "Both in two's complement",
    say: ["A floating point number is a mantissa times two to the power of the exponent.", "Both parts use two's complement, so both can be negative."] },
  { type: "calc", title: "Convert to denary", q: "Mantissa 0.1100000, exponent 0011",
    lines: ["Exponent = 3", "Move point 3 right: 0110.0000", "= 6"],
    say: ["The exponent is three.", "Move the binary point three places to the right.", "That gives six."] },
  { type: "compare", title: "Normalised mantissas", h: ["Starts with"],
    rows: [["Positive", "0.1"], ["Negative", "1.0"]],
    say: ["A normalised positive mantissa starts zero point one.", "A normalised negative one starts one point zero. Normalising gives maximum precision."] },
  { type: "compare", title: "The trade-off", h: ["More bits give"],
    rows: [["Mantissa", "Precision"], ["Exponent", "Range"]],
    say: ["More mantissa bits mean more precision.", "More exponent bits mean a bigger range."] },
  { type: "quiz", q: "A normalised positive mantissa starts…", o: ["0.1", "0.0", "1.0", "1.1"], a: 0,
    why: "No wasted leading bits.", say: ["How does a normalised positive mantissa begin?"] }
]});

S2Data.video("5d", { scenes: [
  { type: "title", title: "Characters and errors", sub: "ASCII, Unicode and checks.", mark: "🔤",
    say: ["Every character is just a number underneath."] },
  { type: "compare", title: "Character sets", h: ["Bits", "Characters"],
    rows: [["ASCII", "7", "128"], ["Extended ASCII", "8", "256"], ["Unicode", "Variable", "100 000+"]],
    say: ["ASCII uses seven bits for a hundred and twenty-eight characters.", "Extended ASCII uses eight.", "Unicode covers the world's writing systems, and its first hundred and twenty-eight codes match ASCII."] },
  { type: "compare", title: "Error checking", h: ["Limitation"],
    rows: [["Parity bit", "Misses even errors"], ["Majority voting", "Triples data"], ["Checksum", "Some errors slip through"], ["Check digit", "Mainly typing errors"]],
    say: ["A parity bit catches one flipped bit, but not two.", "Majority voting sends each bit three times.", "Checksums recalculate a value from the data.", "And check digits catch typing mistakes, like in ISBNs."] },
  { type: "quiz", q: "If 'A' = 65, 'D' =", o: ["68", "67", "69", "4"], a: 0,
    why: "Codes are consecutive.", say: ["If capital A is sixty-five, what is capital D?"] }
]});

S2Data.video("5e", { scenes: [
  { type: "title", title: "Images and sound", sub: "Pixels, samples and MIDI.", mark: "🖼",
    say: ["Images and sound must be turned into numbers to be stored."] },
  { type: "calc", title: "Bitmap size", q: "800 × 600, 24-bit colour",
    lines: ["800 × 600 = 480 000 pixels", "× 24 = 11 520 000 bits", "÷ 8 = 1 440 000 bytes"],
    say: ["Multiply width by height to get the number of pixels.", "Multiply by the colour depth for bits.", "Divide by eight for bytes."] },
  { type: "compare", title: "Bitmap vs vector", h: ["Stores", "Best for"],
    rows: [["Bitmap", "Pixels", "Photos"], ["Vector", "Objects + properties", "Logos, diagrams"]],
    say: ["Bitmaps store a colour for every pixel, ideal for photographs.", "Vectors store shapes and their properties, so they scale without losing quality."] },
  { type: "graph", title: "Sampling", x: "time", y: "amplitude",
    lines: [{ pts: [[0, 0.5], [0.12, 0.85], [0.25, 0.5], [0.37, 0.15], [0.5, 0.5], [0.62, 0.85], [0.75, 0.5], [0.87, 0.15], [1, 0.5]] }],
    marks: [{ x: 0.12, y: 0.85, t: "", s: 1 }, { x: 0.37, y: 0.15, t: "", s: 1 }, { x: 0.62, y: 0.85, t: "sample", s: 2, dy: -14 }],
    say: ["An analogue-to-digital converter measures the wave's amplitude at regular intervals.", "Each measurement is a sample, stored with a fixed number of bits.", "Nyquist says sample at least twice the highest frequency."] },
  { type: "quiz", q: "To capture 20 kHz, sample at least at…", o: ["40 kHz", "20 kHz", "10 kHz", "80 kHz"], a: 0,
    why: "Nyquist: twice the highest frequency.", say: ["What's the minimum sampling rate to capture twenty kilohertz?"] }
]});

S2Data.video("5f", { scenes: [
  { type: "title", title: "Compression and encryption", sub: "Smaller and safer.", mark: "🔐",
    say: ["Compression makes data smaller; encryption makes it secret."] },
  { type: "compare", title: "Compression", h: ["Original restored?", "Example"],
    rows: [["Lossy", "No", "JPEG, MP3"], ["Lossless", "Yes", "PNG, ZIP"]],
    say: ["Lossy compression throws data away permanently, which is fine for photos and music.", "Lossless compression lets the original be rebuilt exactly, essential for text and code."] },
  { type: "calc", title: "Run length encoding", q: "AAAABBBCC",
    lines: ["Four A's → 4A", "Three B's → 3B", "Two C's → 2C"],
    say: ["Four A's become four A.", "Three B's become three B.", "Two C's become two C."] },
  { type: "compare", title: "Ciphers", h: ["Security"],
    rows: [["Caesar", "Weak: 25 shifts, frequency analysis"], ["Vernam (one-time pad)", "Perfect, if used correctly"], ["Modern ciphers", "Computationally secure"]],
    say: ["A Caesar cipher is easily broken.", "A Vernam cipher, with a truly random key as long as the message and used once, is perfectly secure.", "Most real ciphers are computationally secure: breakable in theory, not in practice."] },
  { type: "quiz", q: "A one-time pad key must be…", o: ["Random, as long as the message, used once", "Short and reusable", "A word", "Public"], a: 0,
    why: "Those conditions give perfect security.", say: ["What conditions must a one-time pad key meet?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Software and translators", sub: "From source code to machine code.", mark: "🛠",
    say: ["Software ranges from the operating system to the apps we use."] },
  { type: "points", title: "The OS manages", items: ["Processor scheduling", "Memory", "I/O devices", "Files and security"],
    say: ["It decides which process runs next,", "allocates memory,", "talks to devices through drivers,", "and manages files and security."] },
  { type: "compare", title: "Language levels", h: ["Features"],
    rows: [["Machine code", "Binary; processor-specific"], ["Assembly", "Mnemonics; one-to-one"], ["High-level", "Portable; one-to-many"]],
    say: ["Machine code is raw binary.", "Assembly uses mnemonics, one per machine instruction.", "High-level languages are portable and readable."] },
  { type: "compare", title: "Translators", h: ["How", "Trade-off"],
    rows: [["Assembler", "Assembly → machine code", "One-to-one"], ["Compiler", "Whole program at once", "Fast to run"], ["Interpreter", "Line by line", "Easy to debug"]],
    say: ["An assembler converts assembly into machine code.", "A compiler translates the whole program up front, so it runs fast.", "An interpreter translates as it goes, which helps debugging."] },
  { type: "quiz", q: "Which produces an executable you can distribute?", o: ["Compiler", "Interpreter", "Text editor", "Debugger"], a: 0,
    why: "Users don't need the source.", say: ["Which translator produces an executable file?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Logic and Boolean algebra", sub: "Gates, laws and adders.", mark: "⊕",
    say: ["All computation comes down to logic gates."] },
  { type: "compare", title: "Gates", h: ["Output 1 when…"],
    rows: [["AND", "Both inputs 1"], ["OR", "Either input 1"], ["XOR", "Inputs differ"], ["NAND", "Not both 1"]],
    say: ["AND needs both inputs on.", "OR needs either.", "XOR needs them to differ.", "NAND is the opposite of AND, and can build any circuit."] },
  { type: "big", text: "NOT(A·B) = Ā + B̄", sub: "De Morgan: break the line, change the sign",
    say: ["De Morgan's law turns a NOT over an AND into an OR of NOTs.", "And a NOT over an OR becomes an AND of NOTs."] },
  { type: "compare", title: "Half adder", h: ["Sum", "Carry"],
    rows: [["0 + 0", "0", "0"], ["0 + 1", "1", "0"], ["1 + 1", "0", "1"]],
    say: ["Zero plus zero is zero.", "Zero plus one gives sum one.", "One plus one gives sum zero, carry one. Sum is XOR; carry is AND."] },
  { type: "quiz", q: "A + A·B simplifies to…", o: ["A", "B", "A·B", "1"], a: 0,
    why: "Absorption law.", say: ["What does A plus A and B simplify to?"] }
]});

S2Data.video("7a", { scenes: [
  { type: "title", title: "Inside the computer", sub: "Buses, architecture and registers.", mark: "🖥",
    say: ["The processor talks to memory along three buses."] },
  { type: "compare", title: "Buses", h: ["Carries", "Direction"],
    rows: [["Address", "Memory addresses", "One-way"], ["Data", "Data", "Two-way"], ["Control", "Signals", "Two-way"]],
    say: ["The address bus carries addresses, from processor to memory only.", "The data bus carries data both ways.", "The control bus carries signals like read, write and clock."] },
  { type: "compare", title: "Architectures", h: ["Memory", "Use"],
    rows: [["Von Neumann", "Shared", "General computers"], ["Harvard", "Separate", "Embedded systems"]],
    say: ["Von Neumann shares one memory for instructions and data.", "Harvard separates them, so both can be fetched at once."] },
  { type: "compare", title: "Registers", h: ["Holds"],
    rows: [["PC", "Next instruction address"], ["MAR", "Address to access"], ["MBR", "Data in transit"], ["CIR", "Current instruction"], ["SR", "Flags"]],
    say: ["The program counter holds the next address.", "The memory address register holds the address to access.", "The memory buffer register holds data moving to or from memory.", "The current instruction register holds the instruction being run.", "And the status register holds flags."] },
  { type: "quiz", q: "Which bus is one-way?", o: ["Address bus", "Data bus", "Control bus", "All"], a: 0,
    why: "Only the processor sends addresses.", say: ["Which bus only carries signals in one direction?"] }
]});

S2Data.video("7b", { scenes: [
  { type: "title", title: "Fetch-execute and assembly", sub: "How instructions run.", mark: "⏱",
    say: ["The processor repeats one cycle billions of times a second."] },
  { type: "flow", title: "Fetch", nodes: ["PC → MAR", "PC + 1", "Memory → MBR", "MBR → CIR"],
    say: ["The program counter's address goes to the MAR.", "The program counter is incremented.", "The instruction travels from memory to the MBR.", "Then it's copied into the CIR, ready to decode and execute."] },
  { type: "compare", title: "Addressing modes", h: ["Operand is"],
    rows: [["Immediate (#5)", "The value itself"], ["Direct (100)", "An address"]],
    say: ["With immediate addressing, the operand is the value.", "With direct addressing, it's the address where the value lives."] },
  { type: "compare", title: "AQA assembly", h: ["Meaning"],
    rows: [["LDR R0, 100", "Load from memory"], ["ADD R0, R0, #1", "Add"], ["CMP R0, #5", "Compare"], ["BLT loop", "Branch if less"]],
    say: ["LDR loads a value from memory into a register.", "ADD adds.", "CMP compares and sets flags.", "And BLT branches if the result was less than."] },
  { type: "points", title: "Interrupts", items: ["Checked after each cycle", "Registers saved on a stack", "ISR runs, then restore"],
    say: ["At the end of each cycle, the processor checks for interrupts.", "If one needs handling, it saves its registers on a stack.", "Runs the interrupt service routine, then restores and carries on."] },
  { type: "quiz", q: "MOV R1, #7 uses…", o: ["Immediate addressing", "Direct addressing", "Indexed", "Indirect"], a: 0,
    why: "The hash means a literal value.", say: ["What addressing mode does move R one, hash seven use?"] }
]});

S2Data.video("7c", { scenes: [
  { type: "title", title: "Performance and devices", sub: "What makes computers fast.", mark: "🚀",
    say: ["Why are some processors faster than others?"] },
  { type: "compare", title: "Performance factors", h: ["Effect"],
    rows: [["Clock speed", "More cycles per second"], ["Cores", "Parallel tasks"], ["Cache", "Fewer slow RAM trips"], ["Bus width", "More data per transfer"]],
    say: ["A faster clock means more cycles each second.", "More cores run tasks in parallel, if the software allows.", "Cache keeps frequent data close.", "And wider buses move more at once."] },
  { type: "compare", title: "Storage", h: ["How", "Trade-off"],
    rows: [["HDD", "Magnetic platters", "Cheap, moving parts"], ["SSD", "Flash memory", "Fast, dearer"], ["Optical", "Laser, pits and lands", "Portable, slow"]],
    say: ["Hard disks store data magnetically on spinning platters.", "Solid-state drives use flash memory, with no moving parts.", "Optical discs use a laser to read pits and lands."] },
  { type: "points", title: "Devices", items: ["Barcode: reflected light", "RFID: radio-powered tag", "Laser printer: charged drum and toner"],
    say: ["Barcode readers measure light reflected from the bars.", "RFID readers power passive tags with radio waves.", "Laser printers draw with static charge, then fuse toner with heat."] },
  { type: "quiz", q: "Cache speeds things up by…", o: ["Keeping frequently used data near the CPU", "Raising clock speed", "Adding cores", "Widening the bus"], a: 0,
    why: "Fewer slow trips to RAM.", say: ["How does cache memory improve performance?"] }
]});

S2Data.video("8a", { scenes: [
  { type: "title", title: "Consequences of computing", sub: "Ethics and the law.", mark: "⚖",
    say: ["Code affects millions of lives, so it carries responsibility."] },
  { type: "compare", title: "UK laws", h: ["Covers"],
    rows: [["Data Protection Act 2018", "Personal data"], ["Computer Misuse Act 1990", "Hacking and malware"], ["Copyright Act 1988", "Software and creative work"], ["RIPA 2000", "Surveillance"]],
    say: ["The Data Protection Act controls personal data.", "The Computer Misuse Act outlaws hacking and malware.", "Copyright law protects software.", "And RIPA governs surveillance."] },
  { type: "points", title: "Big issues", items: ["Privacy", "Algorithmic bias", "Automation and jobs", "Environment"],
    say: ["Who has our data, and what do they do with it?", "Can algorithms treat people unfairly?", "Which jobs will automation replace or create?", "And what's the environmental cost?"] },
  { type: "big", text: "Law lags technology", sub: "And the internet crosses borders",
    say: ["Laws take years to write, while technology changes in months.", "And when data crosses borders, whose law applies?"] },
  { type: "quiz", q: "Hacking into a system breaks…", o: ["The Computer Misuse Act", "The Copyright Act", "RIPA", "The Data Protection Act"], a: 0,
    why: "Unauthorised access is an offence.", say: ["Which law makes unauthorised access an offence?"] }
]});

S2Data.video("9a", { scenes: [
  { type: "title", title: "Communication and networks", sub: "Transmission, topologies and Wi-Fi.", mark: "📡",
    say: ["How do bits travel between computers?"] },
  { type: "compare", title: "Serial vs parallel", h: ["How", "Problem"],
    rows: [["Serial", "One bit at a time", "Slower per signal"], ["Parallel", "Many bits at once", "Skew, crosstalk"]],
    say: ["Serial sends one bit after another down one wire.", "Parallel sends many at once, but over distance the bits drift apart."] },
  { type: "calc", title: "Bit rate", q: "Baud 1000, 4 bits per signal",
    lines: ["Bit rate = baud × bits per signal", "= 1000 × 4", "= 4000 bps"],
    say: ["Bit rate is baud rate times bits per signal change.", "One thousand times four.", "Four thousand bits per second."] },
  { type: "flow", title: "CSMA/CA with RTS/CTS", nodes: ["Listen", "Send RTS", "Receive CTS", "Transmit"],
    say: ["The device listens until the channel is free.", "It sends a request to send.", "The access point replies clear to send.", "Then it transmits. If busy, it waits a random time."] },
  { type: "quiz", q: "Skew affects…", o: ["Parallel transmission", "Serial transmission", "Wi-Fi only", "Nothing"], a: 0,
    why: "Bits on different wires arrive at different times.", say: ["Which type of transmission suffers from skew?"] }
]});

S2Data.video("9b", { scenes: [
  { type: "title", title: "TCP/IP and addressing", sub: "Layers, ports and IP addresses.", mark: "🌐",
    say: ["The internet runs on the TCP/IP stack."] },
  { type: "flow", title: "TCP/IP stack", nodes: ["Application", "Transport", "Network", "Link"],
    say: ["The application layer picks the protocol, like HTTP.", "The transport layer splits data into packets and adds ports.", "The network layer adds IP addresses and routes.", "The link layer adds MAC addresses and sends the frames."] },
  { type: "compare", title: "Ports", h: ["Port"],
    rows: [["HTTP", "80"], ["HTTPS", "443"], ["SMTP", "25"], ["SSH", "22"]],
    say: ["Web traffic uses port eighty.", "Secure web, four four three.", "Sending email, twenty-five.", "And SSH, twenty-two."] },
  { type: "compare", title: "Addresses", h: ["Purpose"],
    rows: [["IPv4 / IPv6", "32 / 128 bits"], ["Subnet mask", "Finds the network part"], ["DHCP", "Assigns IPs automatically"], ["NAT", "Private → public"]],
    say: ["IPv4 uses thirty-two bits; IPv6 uses one hundred and twenty-eight.", "A subnet mask separates network and host.", "DHCP hands out addresses.", "NAT lets many private devices share one public address."] },
  { type: "quiz", q: "Which layer adds IP addresses?", o: ["Network", "Transport", "Link", "Application"], a: 0,
    why: "It handles routing.", say: ["Which layer of the stack adds IP addresses?"] }
]});

S2Data.video("9c", { scenes: [
  { type: "title", title: "The internet and security", sub: "Packets, DNS, keys and REST.", mark: "🛡",
    say: ["How does data cross the internet, safely?"] },
  { type: "flow", title: "Packet switching", nodes: ["Split into packets", "Add headers", "Route independently", "Reassemble"],
    say: ["Data is split into packets.", "Each gets a header with addresses and a sequence number.", "Routers forward them along the best routes.", "The receiver puts them back in order."] },
  { type: "compare", title: "Encryption", h: ["Keys"],
    rows: [["Symmetric", "One shared key"], ["Asymmetric", "Public + private"], ["Digital signature", "Hash + sender's private key"]],
    say: ["Symmetric encryption uses one key, which must be shared securely.", "Asymmetric uses a public key to encrypt and a private key to decrypt.", "A digital signature encrypts a hash with the sender's private key."] },
  { type: "compare", title: "CRUD, REST, SQL", h: ["REST", "SQL"],
    rows: [["Create", "POST", "INSERT"], ["Retrieve", "GET", "SELECT"], ["Update", "PUT", "UPDATE"], ["Delete", "DELETE", "DELETE"]],
    say: ["Create maps to POST and INSERT.", "Retrieve to GET and SELECT.", "Update to PUT and UPDATE.", "And delete to DELETE in both."] },
  { type: "quiz", q: "A message to Bob is encrypted with…", o: ["Bob's public key", "Bob's private key", "Your private key", "No key"], a: 0,
    why: "Only Bob's private key can decrypt it.", say: ["To send Bob a secret message, which key do you encrypt with?"] }
]});

S2Data.video("10a", { scenes: [
  { type: "title", title: "Data modelling", sub: "Entities, keys and normalisation.", mark: "🗃",
    say: ["Good databases start with a good model."] },
  { type: "compare", title: "Keys", h: ["Meaning"],
    rows: [["Primary", "Unique identifier"], ["Composite", "Key from 2+ attributes"], ["Foreign", "Links to another table"]],
    say: ["A primary key uniquely identifies each record.", "A composite key uses two or more attributes together.", "A foreign key links to the primary key of another table."] },
  { type: "compare", title: "Normal forms", h: ["Rule"],
    rows: [["1NF", "Atomic, no repeating groups"], ["2NF", "No partial dependencies"], ["3NF", "No non-key dependencies"]],
    say: ["First normal form: one value per field, no repeating groups.", "Second: every attribute depends on the whole key.", "Third: nothing depends on non-key attributes."] },
  { type: "big", text: "The key, the whole key, and nothing but the key", sub: "Third normal form in one line",
    say: ["In third normal form, every attribute depends on the key, the whole key, and nothing but the key.", "That removes redundancy and update anomalies."] },
  { type: "quiz", q: "Many-to-many relationships need…", o: ["A link entity", "No keys", "One table", "A stack"], a: 0,
    why: "It splits into two one-to-many relationships.", say: ["How is a many-to-many relationship resolved?"] }
]});

S2Data.video("10b", { scenes: [
  { type: "title", title: "SQL and concurrency", sub: "Querying and sharing data safely.", mark: "💾",
    say: ["SQL is the language of relational databases."] },
  { type: "compare", title: "SQL commands", h: ["Does"],
    rows: [["SELECT … WHERE", "Retrieve"], ["INSERT INTO", "Add"], ["UPDATE … SET", "Change"], ["DELETE FROM", "Remove"], ["CREATE TABLE", "Define"]],
    say: ["SELECT retrieves rows that match a condition.", "INSERT adds new records.", "UPDATE changes them.", "DELETE removes them.", "And CREATE TABLE defines the structure."] },
  { type: "big", text: "The lost update", sub: "Two users, one record, one change lost",
    say: ["If two users read and change the same record at once, the second save overwrites the first.", "Multi-user databases need concurrency control."] },
  { type: "compare", title: "Concurrency control", h: ["How"],
    rows: [["Record locks", "Lock while editing"], ["Serialisation", "One after another"], ["Timestamp ordering", "Detect conflicts by time"], ["Commitment ordering", "Commit in safe order"]],
    say: ["Record locks block others while one user edits.", "Serialisation runs transactions one at a time.", "Timestamp ordering rolls back conflicting transactions.", "And commitment ordering commits them in a safe order."] },
  { type: "quiz", q: "UPDATE without WHERE…", o: ["Changes every row", "Changes nothing", "Deletes the table", "Adds a row"], a: 0,
    why: "No condition means all rows.", say: ["What happens if you run UPDATE without a WHERE clause?"] }
]});

S2Data.video("11a", { scenes: [
  { type: "title", title: "Big data", sub: "Too big for one machine.", mark: "🌊",
    say: ["Some data is just too big, fast or messy for a normal database."] },
  { type: "compare", title: "The three Vs", h: ["Meaning"],
    rows: [["Volume", "Too much for one server"], ["Velocity", "Arrives fast, real time"], ["Variety", "Many types, unstructured"]],
    say: ["Volume: more data than one server can hold.", "Velocity: it arrives too fast for normal processing.", "Variety: text, video, sensor data, all mixed together."] },
  { type: "points", title: "Why functional programming?", items: ["No side effects", "Immutable data", "map and reduce split easily"],
    say: ["Functions without side effects can run anywhere.", "Immutable data means no conflicts between machines.", "And map and reduce divide work naturally across a cluster."] },
  { type: "compare", title: "Modelling big data", h: ["Idea"],
    rows: [["Fact-based model", "Immutable, timestamped facts"], ["Graph schema", "Nodes, edges, properties"]],
    say: ["The fact-based model never overwrites: it only adds new timestamped facts.", "A graph schema stores entities as nodes and relationships as edges."] },
  { type: "quiz", q: "Data arriving very fast is…", o: ["Velocity", "Volume", "Variety", "Validity"], a: 0,
    why: "Speed of generation and processing.", say: ["Which V describes data that arrives very quickly?"] }
]});

S2Data.video("12a", { scenes: [
  { type: "title", title: "Functional programming", sub: "Functions as values.", mark: "λ",
    say: ["In functional programming, functions are values like any other."] },
  { type: "compare", title: "Higher-order functions", h: ["Example", "Result"],
    rows: [["map", "map (*2) [1,2,3]", "[2,4,6]"], ["filter", "filter (>2) [1,2,3,4]", "[3,4]"], ["fold", "foldl (+) 0 [1,2,3,4]", "10"]],
    say: ["Map applies a function to every element.", "Filter keeps the elements that pass a test.", "Fold combines everything into a single value."] },
  { type: "compare", title: "Lists", h: ["Result"],
    rows: [["head [4,5,6]", "4"], ["tail [4,5,6]", "[5,6]"], ["3 : [4,5]", "[3,4,5]"], ["[4,5] ++ [6]", "[4,5,6]"]],
    say: ["Head gives the first element.", "Tail gives the rest.", "The colon prepends.", "And plus-plus appends one list to another."] },
  { type: "calc", title: "Composition", q: "f x = x + 1, g x = 2x; (g ∘ f) 3",
    lines: ["Apply f first: f 3 = 4", "Then g: g 4 = 8", "(g ∘ f) 3 = 8"],
    say: ["Composition applies f first: three plus one is four.", "Then g doubles it.", "So g after f of three is eight."] },
  { type: "quiz", q: "Fixing some arguments to create a new function is…", o: ["Partial application", "Composition", "Folding", "Mapping"], a: 0,
    why: "e.g. add3 = add 3.", say: ["What's it called when you supply only some arguments to make a new function?"] }
]});

S2Data.video("13a", { scenes: [
  { type: "title", title: "The NEA project", sub: "A systematic approach.", mark: "🏗",
    say: ["The programming project is worth a fifth of your A level."] },
  { type: "flow", title: "Five stages", nodes: ["Analysis", "Design", "Implementation", "Testing", "Evaluation"],
    say: ["Analyse the problem and set measurable objectives.", "Design algorithms, data structures and interfaces.", "Build a well-structured, technically complex solution.", "Test it against every objective.", "And evaluate it, with real user feedback."] },
  { type: "compare", title: "Test data", h: ["Example (ages 11–18)"],
    rows: [["Normal", "14"], ["Boundary", "11, 18 (and 10, 19)"], ["Erroneous", "'abc', −5"]],
    say: ["Normal data is typical, like fourteen.", "Boundary data sits at the edges: eleven and eighteen, and just outside.", "Erroneous data should be rejected, like letters or negatives."] },
  { type: "big", text: "Complexity earns marks", sub: "OOP, recursion, graphs, hashing, complex SQL",
    say: ["The highest marks need technical complexity.", "Think recursion, graph algorithms, object-oriented design or a client-server model."] },
  { type: "quiz", q: "Objectives are set during…", o: ["Analysis", "Testing", "Evaluation", "Implementation"], a: 0,
    why: "Everything else is measured against them.", say: ["At which stage do you set your project's objectives?"] }
]});
