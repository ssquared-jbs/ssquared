/* Video explainers — Computer Science. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Computational thinking", sub: "Decomposition, abstraction and algorithms.", mark: "⚙",
    say: ["Before you write any code, you think computationally: break the problem down, strip away detail, and design the steps."] },
  { type: "compare", title: "Two key skills", h: ["Means", "Example"],
    rows: [["Decomposition", "Break into sub-problems", "A game: menus, levels, scoring"], ["Abstraction", "Remove unnecessary detail", "Tube map ignores real distances"]],
    say: ["Decomposition breaks a big problem into smaller ones. A game splits into menus, levels and scoring.", "Abstraction removes detail that doesn't matter. The Tube map shows connections, not real distances."] },
  { type: "compare", title: "Flowchart symbols", h: ["Meaning"],
    rows: [["Rounded rectangle", "Start / stop"], ["Parallelogram", "Input / output"], ["Rectangle", "Process"], ["Diamond", "Decision"]],
    say: ["A rounded rectangle starts and stops the algorithm.", "A parallelogram is input or output.", "A rectangle is a process, like a calculation.", "And a diamond is a decision, with yes and no branches."] },
  { type: "points", title: "Three building blocks", items: ["Sequence: steps in order", "Selection: if, elif, else", "Iteration: for and while loops"],
    say: ["Every algorithm is built from three things. Sequence: steps in order.", "Selection: decisions that choose a path.", "Iteration: repeating steps with loops."] },
  { type: "quiz", q: "Ignoring car colours in a traffic simulation is…", o: ["Abstraction", "Decomposition", "Iteration", "Selection"], a: 0,
    why: "Colour doesn't affect traffic flow, so it's removed.", say: ["A traffic simulation ignores the colour of the cars. Which skill is this?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Searching and sorting", sub: "Linear vs binary search; bubble vs merge sort.", mark: "⇅",
    say: ["Searching and sorting are the classic algorithms. You need to describe them, trace them, and compare them."] },
  { type: "compare", title: "Searching", h: ["How", "Sorted?"],
    rows: [["Linear", "Check each item in turn", "No"], ["Binary", "Check middle, discard half, repeat", "Yes"]],
    say: ["Linear search checks every item in turn. It works on any list, but it's slow for big ones.", "Binary search checks the middle and throws away half each time. It's far faster, but the list must be sorted."] },
  { type: "calc", title: "Binary search for 23", q: "[3, 8, 12, 17, 23, 30, 41]",
    lines: ["Middle = 17 → 23 is bigger, keep right half", "[23, 30, 41]: middle = 30 → keep left", "[23]: found!"],
    say: ["The middle item is seventeen. Twenty-three is bigger, so discard the left half.", "Now the middle is thirty. Twenty-three is smaller, so keep the left.", "Only twenty-three remains. Found in three comparisons."] },
  { type: "compare", title: "Sorting", h: ["How", "Trade-off"],
    rows: [["Bubble sort", "Swap adjacent pairs; repeat passes", "Simple, slow on big lists"], ["Merge sort", "Split to singles, merge in order", "Fast, uses more memory"]],
    say: ["Bubble sort compares neighbours and swaps them, pass after pass, until a pass makes no swaps. Simple, but slow.", "Merge sort splits the list into single items and merges them back in order. Much faster, but it needs extra memory."] },
  { type: "quiz", q: "Which algorithm needs a sorted list?", o: ["Binary search", "Linear search", "Bubble sort", "Merge sort"], a: 0,
    why: "Discarding half only works if items are in order.", say: ["Which of these algorithms needs the list to be sorted first?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Logic and truth tables", sub: "AND, OR and NOT.", mark: "∧",
    say: ["Computers make decisions with Boolean logic: every condition is either true or false, one or zero."] },
  { type: "compare", title: "The truth table", h: ["A AND B", "A OR B"],
    rows: [["0, 0", "0", "0"], ["0, 1", "0", "1"], ["1, 0", "0", "1"], ["1, 1", "1", "1"]],
    say: ["When both inputs are zero, AND and OR both give zero.", "With one input on, AND still gives zero, but OR gives one.", "The same the other way round.", "Only when both are one does AND give one. OR gives one too."] },
  { type: "big", text: "NOT flips: 0 → 1, 1 → 0", sub: "n inputs → 2ⁿ rows",
    say: ["NOT simply flips its input.", "And remember: a truth table with n inputs has two to the power n rows. Three inputs means eight rows."] },
  { type: "calc", title: "P = (A OR B) AND NOT C", q: "A = 1, B = 0, C = 0",
    lines: ["A OR B = 1 OR 0 = 1", "NOT C = NOT 0 = 1", "P = 1 AND 1 = 1"],
    say: ["Work out the brackets first: one OR zero is one.", "NOT zero is one.", "One AND one gives one."] },
  { type: "quiz", q: "(1 AND 0) OR 1 = ?", o: ["1", "0", "2", "Undefined"], a: 0,
    why: "1 AND 0 = 0; 0 OR 1 = 1.", say: ["What is one AND zero, OR one?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Binary and hexadecimal", sub: "Converting, adding, shifting and negative numbers.", mark: "01",
    say: ["Everything in a computer is stored in binary. Let's convert, add and shift binary numbers."] },
  { type: "calc", title: "Binary to denary", q: "01011001",
    lines: ["Place values: 128 64 32 16 8 4 2 1", "Ones at 64, 16, 8, 1", "64 + 16 + 8 + 1 = 89"],
    say: ["Write the place values over the bits: one twenty-eight down to one.", "Find the columns with a one: sixty-four, sixteen, eight and one.", "Add them: eighty-nine."] },
  { type: "calc", title: "Binary to hex", q: "89 = 0101 1001",
    lines: ["Split into nibbles: 0101 | 1001", "0101 = 5, 1001 = 9", "Hex: 59"],
    say: ["Split the byte into two nibbles.", "Zero one zero one is five; one zero zero one is nine.", "So eighty-nine is five nine in hex. Each hex digit is exactly four bits, which is why hex is so convenient."] },
  { type: "points", title: "Rules to remember", items: ["1 + 1 = 10: write 0, carry 1", "Overflow: result needs too many bits", "Shift left ×2, shift right ÷2", "Two's complement: flip the bits, add 1"],
    say: ["In binary addition, one plus one is one zero: write zero, carry one.", "If the answer needs more bits than you have, that's an overflow error.", "Shifting left one place doubles a number; shifting right halves it.", "And to make a negative in two's complement, flip every bit and add one."] },
  { type: "quiz", q: "Hex 2A in denary?", o: ["42", "32", "26", "210"], a: 0,
    why: "2 × 16 + 10 = 42.", say: ["What is hex two A in denary?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Text, images and sound", sub: "How everything becomes binary.", mark: "🖼",
    say: ["Text, pictures and sound all end up as binary. And you need to calculate how big the files are."] },
  { type: "compare", title: "Text", h: ["Bits", "Covers"],
    rows: [["ASCII", "7", "128 English characters; A = 65"], ["Unicode", "More", "All languages and emoji"]],
    say: ["Seven-bit ASCII gives a hundred and twenty-eight characters. Capital A is sixty-five, and letters run in order.", "Unicode uses more bits to cover every writing system, and emoji."] },
  { type: "calc", title: "Image file size", q: "200 × 100 pixels, 8-bit colour",
    lines: ["bits = width × height × colour depth", "= 200 × 100 × 8 = 160 000 bits", "÷ 8 = 20 000 bytes"],
    say: ["Image size in bits is width times height times colour depth.", "Two hundred times one hundred times eight is a hundred and sixty thousand bits.", "Divide by eight for twenty thousand bytes."] },
  { type: "calc", title: "Sound file size", q: "10 s mono, 44 100 Hz, 16-bit",
    lines: ["bits = sample rate × bit depth × seconds × channels", "= 44 100 × 16 × 10 × 1", "= 7 056 000 bits"],
    say: ["Sound size is sample rate, times bit depth, times length in seconds, times channels.", "Forty-four thousand one hundred times sixteen times ten times one.", "That's just over seven million bits."] },
  { type: "quiz", q: "How many colours does 4-bit colour depth give?", o: ["16", "4", "8", "256"], a: 0,
    why: "2⁴ = 16.", say: ["How many colours can four-bit colour depth show?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Storage units and compression", sub: "Kibibytes, lossless, lossy and RLE.", mark: "🗜",
    say: ["Edexcel measures storage in binary multiples, and compression makes files smaller."] },
  { type: "flow", title: "Units", nodes: ["Bit", "Nibble = 4 bits", "Byte = 8 bits", "KiB = 1024 B", "MiB = 1024 KiB", "GiB = 1024 MiB"],
    say: ["A bit is a single zero or one.", "Four bits make a nibble.", "Eight bits make a byte.", "One thousand and twenty-four bytes make a kibibyte.", "One thousand and twenty-four kibibytes make a mebibyte.", "And one thousand and twenty-four mebibytes make a gibibyte. Then tebibytes."] },
  { type: "compare", title: "Compression", h: ["How", "Use for"],
    rows: [["Lossless", "Nothing lost; exact original", "Text, code, records"], ["Lossy", "Removes data permanently", "Photos, music, video"]],
    say: ["Lossless compression rebuilds the original perfectly. Use it for text, code and anything that must be exact.", "Lossy compression throws away detail people won't notice. It's much smaller, ideal for photos, music and video."] },
  { type: "big", text: "AAAAABBBCCCCCCCC → 5A3B8C", sub: "Run-length encoding: count + value",
    say: ["Run-length encoding is lossless. It stores each run as a count and a value.", "Sixteen characters become six. But with few repeats, it can make files bigger."] },
  { type: "quiz", q: "How many bytes in 2 KiB?", o: ["2048", "2000", "16", "1024"], a: 0,
    why: "2 × 1024.", say: ["How many bytes are there in two kibibytes?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "The CPU", sub: "Von Neumann architecture and the fetch-decode-execute cycle.", mark: "CPU",
    say: ["The CPU processes every instruction. Here's what's inside, and the cycle it repeats billions of times a second."] },
  { type: "compare", title: "Inside the CPU", h: ["Job"],
    rows: [["Control unit", "Decodes instructions; sends control signals"], ["ALU", "Arithmetic and logic"], ["Registers", "Tiny, fast stores, e.g. program counter"], ["Clock", "Synchronises operations"]],
    say: ["The control unit decodes instructions and coordinates everything.", "The arithmetic logic unit does calculations and comparisons.", "Registers are tiny, super-fast stores. The program counter holds the address of the next instruction.", "And the clock ticks to keep everything in step."] },
  { type: "cycle", title: "Fetch-decode-execute", nodes: ["Fetch: copy instruction from memory; PC + 1", "Decode: control unit interprets it", "Execute: carry it out"],
    say: ["Fetch: the address in the program counter is sent to memory, the instruction comes back, and the program counter goes up by one.", "Decode: the control unit works out what the instruction means.", "Execute: it's carried out, perhaps by the ALU. Then the cycle repeats."] },
  { type: "compare", title: "Memory", h: ["Volatile?", "Holds"],
    rows: [["RAM", "Yes", "Programs and data in use"], ["ROM", "No", "Boot-up instructions"], ["Cache", "Yes", "Frequently used data, next to the CPU"]],
    say: ["RAM is volatile and holds what you're using right now.", "ROM is non-volatile and holds the start-up instructions.", "Cache is tiny, very fast memory right next to the CPU."] },
  { type: "quiz", q: "Which register holds the address of the next instruction?", o: ["Program counter", "ALU", "Cache", "Clock"], a: 0,
    why: "It's incremented every fetch.", say: ["Which register holds the address of the next instruction?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Storage and embedded systems", sub: "Magnetic, optical, solid state and the cloud.", mark: "💾",
    say: ["RAM forgets everything when the power goes off, so files live on secondary storage."] },
  { type: "compare", title: "Storage types", h: ["How", "Best for"],
    rows: [["Magnetic", "Spinning platters", "Cheap, huge capacity"], ["Optical", "Laser reads pits", "Cheap distribution"], ["Solid state", "Flash memory", "Speed, durability, portability"]],
    say: ["Magnetic hard disks use spinning platters. Cheap and huge, but moving parts can break.", "Optical discs are read by a laser. Cheap, but small and slow.", "Solid state uses flash memory. Fast, tough and light, but pricier per gigabyte."] },
  { type: "points", title: "Cloud storage", items: ["✓ Access anywhere, easy sharing", "✓ Automatic backup", "✗ Needs internet", "✗ Security and cost"],
    say: ["Cloud storage lets you reach files anywhere and share them easily.", "It's backed up for you.", "But you need an internet connection,", "and you're trusting someone else with your data, often for a subscription."] },
  { type: "big", text: "Embedded system", sub: "A computer inside a device with one dedicated job",
    say: ["An embedded system is a small computer built into a larger device to do one job.", "Washing machines, thermostats and car engine controllers all have one."] },
  { type: "quiz", q: "Best storage for a smartphone?", o: ["Solid state", "Magnetic", "Optical", "Tape"], a: 0,
    why: "Small, fast, durable and low-power.", say: ["Which type of storage suits a smartphone best?"] }
]});

S2Data.video("3c", { scenes: [
  { type: "title", title: "Software and languages", sub: "Operating systems, utilities and translators.", mark: "OS",
    say: ["Software ranges from the operating system that runs everything, to the translators that turn your code into machine code."] },
  { type: "points", title: "What an OS does", items: ["User interface", "Memory management", "Process management (multitasking)", "File, peripheral and user management"],
    say: ["The operating system provides the user interface.", "It manages memory, giving each program space in RAM.", "It schedules processes so many programs seem to run at once.", "And it manages files, devices through drivers, and user accounts."] },
  { type: "compare", title: "Languages", h: ["High-level", "Low-level"],
    rows: [["Readability", "Easy (Python)", "Hard (assembly, machine code)"], ["Portability", "Any processor", "One processor type"], ["Control", "Less direct", "Precise hardware control"]],
    say: ["High-level languages like Python are easy to read. Low-level ones are close to the hardware.", "High-level code runs on any processor once translated; low-level code is tied to one.", "But low-level gives precise control and can be very efficient."] },
  { type: "compare", title: "Translators", h: ["How"],
    rows: [["Compiler", "Whole program at once → executable"], ["Interpreter", "Line by line; stops at first error"], ["Assembler", "Assembly → machine code"]],
    say: ["A compiler translates the whole program at once and produces an executable.", "An interpreter translates and runs a line at a time, stopping at the first error.", "An assembler turns assembly language into machine code."] },
  { type: "quiz", q: "Which translator produces an executable file?", o: ["Compiler", "Interpreter", "Assembler only", "None"], a: 0,
    why: "It translates the whole program in one go.", say: ["Which translator produces an executable file?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "Networks", sub: "LANs, WANs, topologies and performance.", mark: "🌐",
    say: ["A network connects devices so they can share data. Let's look at types, shapes and speed."] },
  { type: "compare", title: "LAN vs WAN", h: ["Area", "Hardware"],
    rows: [["LAN", "One site", "Owned by the organisation"], ["WAN", "Large area", "Leased from telecoms"]],
    say: ["A local area network covers one site, like a school, using its own hardware.", "A wide area network links sites across a large area using telecoms infrastructure. The internet is the biggest WAN."] },
  { type: "compare", title: "Topologies", h: ["Pros", "Cons"],
    rows: [["Star", "Cable fault affects one device", "Switch fails → all fail"], ["Mesh", "Many routes; very reliable", "Costly, complex"]],
    say: ["In a star, each device connects to a central switch. One faulty cable only affects one device, but if the switch fails, everything goes down.", "In a mesh, devices connect to many others. Very reliable, but expensive."] },
  { type: "calc", title: "Transfer time", q: "40 Mbit file at 8 Mbit/s",
    lines: ["time = size ÷ bandwidth", "= 40 ÷ 8", "= 5 seconds"],
    say: ["Transfer time is file size divided by bandwidth.", "Forty divided by eight.", "Five seconds. Watch out for bytes versus bits: multiply bytes by eight first."] },
  { type: "quiz", q: "What is the single point of failure in a star network?", o: ["The central switch", "Each cable", "The printer", "Nothing"], a: 0,
    why: "All traffic passes through it.", say: ["What is the single point of failure in a star network?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "Protocols and TCP/IP", sub: "The rules that make the internet work.", mark: "TCP",
    say: ["A protocol is a set of rules for communication. The TCP/IP model organises them into four layers."] },
  { type: "flow", title: "The four layers", nodes: ["Application: HTTP, FTP, SMTP", "Transport: TCP packets", "Internet: IP routing", "Link: Ethernet, Wi-Fi"],
    say: ["The application layer provides services like web pages and email.", "The transport layer, TCP, splits data into numbered packets and checks they all arrive.", "The internet layer, IP, adds addresses and routes packets across networks.", "The link layer sends the bits over cables or radio."] },
  { type: "compare", title: "Application protocols", h: ["Use"],
    rows: [["HTTP / HTTPS", "Web pages (HTTPS encrypted)"], ["FTP", "File transfer"], ["SMTP", "Sending email"], ["POP3 / IMAP", "Fetching email: download vs sync"]],
    say: ["HTTP fetches web pages; HTTPS encrypts them.", "FTP transfers files.", "SMTP sends email.", "POP3 downloads email to one device; IMAP keeps it on the server, synced everywhere."] },
  { type: "big", text: "Layers work independently", sub: "Change Wi-Fi to Ethernet: the web still works",
    say: ["Because the layers are separate, you can swap one without changing the others.", "Move from Wi-Fi to a cable, and your browser doesn't care."] },
  { type: "quiz", q: "Which protocol sends email?", o: ["SMTP", "IMAP", "POP3", "FTP"], a: 0,
    why: "SMTP sends; POP3 and IMAP retrieve.", say: ["Which protocol is used to send email?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "Network security", sub: "Threats and defences.", mark: "🔒",
    say: ["Networks face attacks on both technology and people. For every threat, learn a defence."] },
  { type: "compare", title: "Threats and defences", h: ["Defence"],
    rows: [["Malware", "Anti-malware, updates, firewall"], ["Phishing", "Training, spam filters"], ["Brute force", "Strong passwords, lockouts, 2FA"], ["Denial of service", "Firewalls, traffic filtering"], ["Social engineering", "Training, policies"]],
    say: ["Malware is stopped by anti-malware software, updates and firewalls.", "Phishing emails are fought with staff training and spam filters.", "Brute-force password attacks are beaten by strong passwords, lockouts and two-factor authentication.", "Denial of service floods are filtered by firewalls.", "And social engineering targets people, so training and clear policies matter most."] },
  { type: "calc", title: "Caesar cipher, shift 3", q: "HELLO",
    lines: ["H→K, E→H, L→O, L→O, O→R", "Ciphertext: KHOOR"],
    say: ["Shift each letter three places along the alphabet.", "Hello becomes K H O O R. With only twenty-five possible shifts, it's easy to crack."] },
  { type: "points", title: "Other protections", items: ["Encryption", "Access levels", "Backups", "Penetration testing"],
    say: ["Encryption makes intercepted data unreadable.", "Access levels give users only what they need.", "Backups mean data can be restored.", "And penetration testers are paid to attack the system and find weaknesses first."] },
  { type: "quiz", q: "A fake bank email asking for your password is…", o: ["Phishing", "A worm", "DoS", "Encryption"], a: 0,
    why: "It tricks people into revealing details.", say: ["A fake email from your bank asks for your password. What kind of attack is this?"] }
]});

S2Data.video("5a", { scenes: [
  { type: "title", title: "Issues and impact", sub: "Environment, ethics and the law.", mark: "⚖",
    say: ["Computing changes society. You need to discuss environmental, ethical and legal issues, with both sides."] },
  { type: "points", title: "Environmental", items: ["Rare metals and energy in manufacture", "Data centres use huge amounts of electricity", "Toxic e-waste", "But: less travel, smart energy, climate modelling"],
    say: ["Making devices uses rare metals, water and energy.", "Data centres use vast amounts of electricity.", "Discarded devices become toxic e-waste.", "But computing also cuts travel, manages energy and models the climate."] },
  { type: "compare", title: "UK laws", h: ["Covers"],
    rows: [["Data Protection Act 2018", "Handling personal data"], ["Computer Misuse Act 1990", "Hacking and malware"], ["Copyright, Designs and Patents Act 1988", "Copying software and creative work"]],
    say: ["The Data Protection Act controls how personal data is collected, stored and used.", "The Computer Misuse Act makes hacking and spreading malware illegal.", "And the Copyright, Designs and Patents Act protects software and creative work."] },
  { type: "compare", title: "Licensing", h: ["Open source", "Proprietary"],
    rows: [["Source code", "Available, modifiable", "Secret"], ["Cost", "Usually free", "Usually paid"], ["Support", "Community", "Official"]],
    say: ["Open-source code can be read and modified; proprietary code is kept secret.", "Open source is usually free; proprietary usually costs money.", "And proprietary comes with official support, while open source relies on its community."] },
  { type: "quiz", q: "Which law makes hacking illegal?", o: ["Computer Misuse Act 1990", "Data Protection Act 2018", "Copyright Act 1988", "None"], a: 0,
    why: "It covers unauthorised access and modification.", say: ["Which law makes hacking illegal?"] }
]});

S2Data.video("6a", { scenes: [
  { type: "title", title: "Variables and data types", sub: "The building blocks of Python.", mark: "x =",
    say: ["Every program stores data in variables, and every value has a type."] },
  { type: "compare", title: "Data types", h: ["Example"],
    rows: [["Integer (int)", "42"], ["Float (real)", "3.14"], ["Boolean (bool)", "True"], ["String (str)", "\"Hello\""]],
    say: ["Integers are whole numbers.", "Floats have decimal points.", "Booleans are True or False.", "Strings are text, in quotation marks."] },
  { type: "compare", title: "Operators", h: ["Result"],
    rows: [["7 / 2", "3.5"], ["7 // 2", "3 (integer division)"], ["7 % 2", "1 (remainder)"], ["2 ** 3", "8 (power)"]],
    say: ["Single slash is normal division: three point five.", "Double slash is integer division: three.", "Percent gives the remainder: one.", "And double star is a power: two cubed is eight."] },
  { type: "big", text: "input() always returns a string", sub: "age = int(input(\"Age? \"))",
    say: ["A common trap: input always gives you a string.", "To do maths with it, cast it with int or float."] },
  { type: "quiz", q: "What does print(\"5\" + \"3\") output?", o: ["53", "8", "Error", "5 + 3"], a: 0,
    why: "Adding strings joins them together.", say: ["What does print, string five plus string three, output?"] }
]});

S2Data.video("6b", { scenes: [
  { type: "title", title: "Selection and iteration", sub: "if, for and while.", mark: "↻",
    say: ["Selection lets programs make decisions. Iteration lets them repeat."] },
  { type: "calc", title: "Selection", q: "mark = 65",
    lines: ["if mark >= 70: grade = \"A\"", "elif mark >= 50: grade = \"B\"  ← runs", "else: grade = \"U\""],
    say: ["Sixty-five isn't seventy or more, so the first branch is skipped.", "It is fifty or more, so grade becomes B.", "Only the first true branch runs, so the else is ignored."] },
  { type: "compare", title: "Two kinds of loop", h: ["Use when", "Example"],
    rows: [["for", "You know how many repeats", "for i in range(5):"], ["while", "Repeat until a condition changes", "while guess != secret:"]],
    say: ["A for loop is count-controlled. Use it when you know how many times to repeat.", "A while loop is condition-controlled. It keeps going until the condition is false."] },
  { type: "big", text: "range(2, 11, 2) → 2, 4, 6, 8, 10", sub: "Stops before the end value",
    say: ["Range takes a start, a stop and a step.", "Remember it stops before the stop value, so range one to ten gives one to nine."] },
  { type: "quiz", q: "What does range(4) produce?", o: ["0, 1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4", "4"], a: 0,
    why: "Starts at 0 and stops before 4.", say: ["What values does range four produce?"] }
]});

S2Data.video("6c", { scenes: [
  { type: "title", title: "Lists and records", sub: "Storing many values under one name.", mark: "[ ]",
    say: ["Lists let you store many values together, and process them with loops."] },
  { type: "calc", title: "Lists", q: "scores = [12, 45, 7, 30]",
    lines: ["scores[0] → 12 (indexes start at 0)", "scores[-1] → 30 (last item)", "scores.append(50) → adds to the end"],
    say: ["Indexes start at zero, so scores zero is twelve.", "Minus one gives the last item: thirty.", "Append adds a new item to the end."] },
  { type: "calc", title: "2D lists", q: "grid = [[1, 2, 3], [4, 5, 6]]",
    lines: ["grid[1] → [4, 5, 6] (row 1)", "grid[1][2] → 6 (row 1, column 2)", "Nested loops visit every item"],
    say: ["A two-dimensional list is a list of lists. Grid one is the second row.", "Grid one two is row one, column two: six.", "To visit every item, use a loop inside a loop."] },
  { type: "big", text: "Record: [\"Sam\", 15, True]", sub: "Related fields of different types about one thing",
    say: ["A record groups related fields about one thing, like a pupil's name, age and membership.", "A list of records makes a simple table."] },
  { type: "quiz", q: "g = [[1, 2], [3, 4]]. What is g[1][0]?", o: ["3", "2", "1", "4"], a: 0,
    why: "Row 1 is [3, 4]; column 0 is 3.", say: ["What is g one zero?"] }
]});

S2Data.video("6d", { scenes: [
  { type: "title", title: "Subprograms, files and validation", sub: "Writing reusable, robust code.", mark: "def",
    say: ["Subprograms organise code. Files keep data between runs. Validation keeps bad data out."] },
  { type: "compare", title: "Subprograms", h: ["Returns a value?", "Example"],
    rows: [["Function", "Yes", "def area(w, h): return w * h"], ["Procedure", "No", "def greet(name): print(name)"]],
    say: ["A function returns a value you can use, like area returning width times height.", "A procedure just does something, like printing a greeting."] },
  { type: "compare", title: "File modes", h: ["Does"],
    rows: [["\"r\"", "Read"], ["\"w\"", "Write: overwrites everything!"], ["\"a\"", "Append to the end"]],
    say: ["Open with r to read.", "W writes, but wipes the file first. Be careful.", "A appends new data to the end."] },
  { type: "compare", title: "Validation", h: ["Example"],
    rows: [["Presence", "Name isn't empty"], ["Length", "Password ≥ 8 characters"], ["Range", "Age 11–18"], ["Type", "Is a whole number"]],
    say: ["A presence check makes sure something was entered.", "A length check counts characters.", "A range check keeps numbers within limits.", "And a type check makes sure data is the right kind."] },
  { type: "quiz", q: "Which file mode adds to a file without deleting it?", o: ["\"a\"", "\"w\"", "\"r\"", "\"x\""], a: 0,
    why: "Append writes at the end.", say: ["Which file mode adds to a file without deleting what's there?"] }
]});

S2Data.video("6e", { scenes: [
  { type: "title", title: "Testing and debugging", sub: "Finding and fixing errors.", mark: "🐞",
    say: ["Every program has bugs at first. Testing finds them; debugging fixes them."] },
  { type: "compare", title: "Types of error", h: ["Effect", "Example"],
    rows: [["Syntax", "Won't run", "Missing colon or bracket"], ["Logic", "Wrong answer", "< instead of <="], ["Runtime", "Crashes", "Divide by zero"]],
    say: ["A syntax error breaks the language rules, so the program won't run at all.", "A logic error runs fine but gives the wrong answer.", "A runtime error crashes the program while it's running."] },
  { type: "compare", title: "Test data for 'age 11–18'", h: ["Example"],
    rows: [["Normal", "14"], ["Boundary", "11, 18 (and 10, 19)"], ["Erroneous", "\"ten\", −5, 40"]],
    say: ["Normal data is typical and valid, like fourteen.", "Boundary data sits on the edges: eleven and eighteen, and just outside.", "Erroneous data should be rejected, like the word ten."] },
  { type: "calc", title: "Trace table", q: "x = 1; while x < 20: x = x * 3",
    lines: ["x = 1 → 1 < 20 ✓", "x = 3 → ✓", "x = 9 → ✓", "x = 27 → ✗, loop ends"],
    say: ["x starts at one, which is less than twenty.", "Times three: three.", "Nine.", "Twenty-seven is not less than twenty, so the loop stops."] },
  { type: "quiz", q: "A program runs but gives the wrong answer. This is a…", o: ["Logic error", "Syntax error", "Runtime error", "Compiler error"], a: 0,
    why: "It runs, but the logic is flawed.", say: ["A program runs, but gives the wrong answer. What type of error is this?"] }
]});
