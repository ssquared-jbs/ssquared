/* A-level Computer Science² — Paper 2: data representation, computer systems, organisation and architecture */

S2Data.add({
  id: "5a", group: 5, title: "Number systems, bases and units",
  summary: "Natural, integer, rational, irrational and real numbers, ordinal numbers, binary, decimal and hexadecimal, and binary versus decimal prefixes.",
  notes: `
<h3>Number systems</h3>
<table><tr><th>Set</th><th>Symbol</th><th>Contains</th></tr>
<tr><td>Natural</td><td>ℕ</td><td>{0, 1, 2, 3, …} (counting numbers)</td></tr>
<tr><td>Integer</td><td>ℤ</td><td>{…, −2, −1, 0, 1, 2, …}</td></tr>
<tr><td>Rational</td><td>ℚ</td><td>Numbers expressible as a fraction p/q (includes integers)</td></tr>
<tr><td>Irrational</td><td>—</td><td>Can't be written as a fraction, e.g. √2, π</td></tr>
<tr><td>Real</td><td>ℝ</td><td>All rational and irrational numbers: possible real-world quantities</td></tr></table>
<p><b>Ordinal numbers</b> describe position (1st, 2nd…). Natural numbers are used for <b>counting</b>; real numbers for <b>measurement</b>.</p>
<h3>Number bases</h3>
<ul>
<li><b>Decimal</b> (base 10), <b>binary</b> (base 2) and <b>hexadecimal</b> (base 16: 0–9, A–F).</li>
<li>One hex digit = 4 bits (a nibble), so hex is a compact, less error-prone way to write binary (e.g. colour codes, memory addresses, MAC addresses).</li>
</ul>
<div class="box box-key"><span class="box-title">Example</span>1011 0110₂ = B6₁₆ = 128 + 32 + 16 + 4 + 2 = 182₁₀</div>
<h3>Units</h3>
<ul>
<li>A <b>bit</b> is 0 or 1; a <b>byte</b> is 8 bits. With n bits you can represent <b>2ⁿ</b> different values.</li>
</ul>
<table><tr><th>Binary prefix</th><th>Value</th><th>Decimal prefix</th><th>Value</th></tr>
<tr><td>kibi (Ki)</td><td>2¹⁰ = 1024</td><td>kilo (k)</td><td>10³</td></tr>
<tr><td>mebi (Mi)</td><td>2²⁰</td><td>mega (M)</td><td>10⁶</td></tr>
<tr><td>gibi (Gi)</td><td>2³⁰</td><td>giga (G)</td><td>10⁹</td></tr>
<tr><td>tebi (Ti)</td><td>2⁴⁰</td><td>tera (T)</td><td>10¹²</td></tr></table>`,
  quiz: [
    { q: "√2 is…", o: ["Irrational", "Rational", "An integer", "Natural"], a: 0, e: "" },
    { q: "−5 belongs to…", o: ["ℤ", "ℕ", "Only irrationals", "None"], a: 0, e: "" },
    { q: "Ordinal numbers describe…", o: ["Position", "Size", "Fractions", "Bases"], a: 0, e: "" },
    { q: "B6 in hex is what in decimal?", o: ["182", "176", "166", "196"], a: 0, e: "" },
    { q: "One hex digit represents…", o: ["4 bits", "8 bits", "2 bits", "16 bits"], a: 0, e: "" },
    { q: "1 kibibyte is…", o: ["1024 bytes", "1000 bytes", "8 bits", "1024 bits"], a: 0, e: "" },
    { q: "How many values can 6 bits represent?", o: ["64", "32", "6", "36"], a: 0, e: "" },
    { q: "1 gigabyte is…", o: ["10⁹ bytes", "2³⁰ bytes", "2²⁰ bytes", "10⁶ bytes"], a: 0, e: "" },
    { q: "Why do programmers use hex?", o: ["Compact and fewer errors than binary", "Computers run on hex", "It's faster", "It uses less memory"], a: 0, e: "" },
    { q: "0.75 is…", o: ["Rational", "Irrational", "Natural", "Ordinal"], a: 0, e: "" }
  ],
  flashcards: [
    ["ℕ", "Natural numbers {0, 1, 2, …}"],
    ["ℤ", "Integers"],
    ["ℚ", "Rational: expressible as p/q"],
    ["Irrational", "Can't be a fraction: √2, π"],
    ["ℝ", "Real: all rational and irrational"],
    ["Ordinal", "Position in a sequence"],
    ["Hex digit", "4 bits (a nibble)"],
    ["n bits", "2ⁿ values"],
    ["kibi vs kilo", "2¹⁰ = 1024 vs 10³ = 1000"],
    ["gibi vs giga", "2³⁰ vs 10⁹"]
  ]
});

S2Data.add({
  id: "5b", group: 5, title: "Binary arithmetic and fixed point",
  summary: "Unsigned binary, binary addition and multiplication, two's complement for negative numbers and subtraction, and fixed point fractions.",
  notes: `
<h3>Unsigned binary</h3>
<p>With n bits, unsigned binary represents 0 to <b>2ⁿ − 1</b> (0–255 for 8 bits).</p>
<h3>Addition and multiplication</h3>
<p>Add column by column: 0+0=0, 0+1=1, 1+1=0 carry 1, 1+1+1=1 carry 1. Multiply using shifts and adds, like long multiplication.</p>
<h3>Two's complement</h3>
<ul>
<li>The most significant bit has a <b>negative</b> place value (−128 in 8 bits).</li>
<li>Range with n bits: <b>−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1</b> (−128 to 127 for 8 bits).</li>
<li>To negate: <b>invert all bits and add 1</b> (or copy bits from the right up to and including the first 1, then flip the rest).</li>
<li>Subtract by adding the two's complement: A − B = A + (−B).</li>
</ul>
<div class="box box-key"><span class="box-title">Example</span>45 = 00101101 → invert 11010010 → +1 = <b>11010011</b> = −45</div>
<h3>Fixed point</h3>
<p>A <b>binary point</b> sits in a fixed position. Place values after it are ½, ¼, ⅛, 1/16…</p>
<p>With 4 bits before and 4 after: 0101.1010 = 4 + 1 + 0.5 + 0.125 = <b>5.625</b>.</p>
<p>Fixed point is simple and fast, but has limited range and precision for a given number of bits; some decimals (like 0.1) can't be represented exactly.</p>`,
  quiz: [
    { q: "8-bit unsigned range is…", o: ["0 to 255", "−128 to 127", "0 to 256", "1 to 255"], a: 0, e: "" },
    { q: "8-bit two's complement range is…", o: ["−128 to 127", "0 to 255", "−127 to 127", "−256 to 255"], a: 0, e: "" },
    { q: "11111111 in two's complement is…", o: ["−1", "255", "−127", "−128"], a: 0, e: "" },
    { q: "10000000 in two's complement is…", o: ["−128", "128", "−0", "−1"], a: 0, e: "" },
    { q: "To negate in two's complement…", o: ["Invert bits and add 1", "Invert bits only", "Add 1 only", "Shift left"], a: 0, e: "" },
    { q: "0101.1010 (4.4 fixed point) is…", o: ["5.625", "5.5", "5.75", "90"], a: 0, e: "" },
    { q: "1 + 1 + 1 in binary is…", o: ["1 carry 1", "0 carry 1", "11 carry 0", "1 carry 0"], a: 0, e: "" },
    { q: "Subtraction in two's complement uses…", o: ["Adding the negative", "Dividing", "Shifting right", "Inverting only"], a: 0, e: "" },
    { q: "A weakness of fixed point is…", o: ["Limited range for its bits", "Very slow", "Can't store fractions", "Needs an exponent"], a: 0, e: "" },
    { q: "The first place value after the binary point is…", o: ["½", "¼", "2", "1"], a: 0, e: "" }
  ],
  flashcards: [
    ["Unsigned range (n bits)", "0 to 2ⁿ − 1"],
    ["Two's complement range", "−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1"],
    ["MSB in two's complement", "Negative place value"],
    ["Negating", "Invert all bits, add 1"],
    ["−45 in 8 bits", "11010011"],
    ["Subtraction", "A − B = A + (−B)"],
    ["Binary addition 1+1", "0 carry 1"],
    ["Fixed point", "Binary point in a fixed position"],
    ["Place values after point", "½, ¼, ⅛, 1/16"],
    ["Fixed point drawback", "Limited range/precision; 0.1 not exact"]
  ]
});

S2Data.add({
  id: "5c", group: 5, title: "Floating point",
  summary: "Mantissa and exponent in two's complement, converting to and from denary, normalisation, range versus precision, errors, underflow and overflow.",
  notes: `
<h3>Floating point</h3>
<p>A number is stored as <b>mantissa × 2<sup>exponent</sup></b>. Both parts are in <b>two's complement</b>; the mantissa has a binary point after its first bit.</p>
<h3>Converting to denary</h3>
<ol>
<li>Work out the exponent (two's complement integer).</li>
<li>Move the binary point that many places (right if positive, left if negative).</li>
<li>Read the value, remembering the MSB is negative.</li>
</ol>
<div class="box box-key"><span class="box-title">Example (8-bit mantissa, 4-bit exponent)</span>Mantissa 0.1100000, exponent 0011 (= 3): 0.11 × 2³ = 110 = <b>6</b>.<br>Mantissa 1.0100000, exponent 0010 (= 2): mantissa = −1 + 0.25 = −0.75; × 4 = <b>−3</b>.</div>
<h3>Normalisation</h3>
<ul>
<li>A normalised positive mantissa starts <b>0.1</b>; a normalised negative mantissa starts <b>1.0</b>.</li>
<li>Normalising gives the <b>maximum precision</b> for the bits available, and a <b>unique</b> representation for each number.</li>
<li>To normalise, shift the mantissa left and reduce the exponent by the number of places shifted.</li>
</ul>
<h3>Range and precision</h3>
<p>More mantissa bits → more <b>precision</b>; more exponent bits → greater <b>range</b>. With a fixed total, there is a trade-off. Compared with fixed point, floating point gives a much greater range.</p>
<h3>Errors</h3>
<ul>
<li><b>Rounding errors:</b> some values can't be stored exactly.</li>
<li><b>Absolute error</b> = |true value − stored value|. <b>Relative error</b> = absolute error ÷ true value.</li>
<li><b>Underflow:</b> a number too small (close to zero) to be represented. <b>Overflow:</b> a number too large.</li>
</ul>`,
  quiz: [
    { q: "A floating point number is mantissa ×…", o: ["2^exponent", "10^exponent", "exponent²", "exponent"], a: 0, e: "" },
    { q: "A normalised positive mantissa starts…", o: ["0.1", "0.0", "1.0", "1.1"], a: 0, e: "" },
    { q: "A normalised negative mantissa starts…", o: ["1.0", "1.1", "0.1", "0.0"], a: 0, e: "" },
    { q: "Mantissa 0.1100000, exponent 0011 is…", o: ["6", "3", "12", "0.75"], a: 0, e: "" },
    { q: "More exponent bits give…", o: ["Greater range", "Greater precision", "Fewer errors always", "Smaller numbers only"], a: 0, e: "" },
    { q: "More mantissa bits give…", o: ["Greater precision", "Greater range", "Overflow", "Negative numbers"], a: 0, e: "" },
    { q: "Underflow means a number is…", o: ["Too close to zero to represent", "Too large", "Negative", "Exactly zero"], a: 0, e: "" },
    { q: "True value 10, stored 9.5. Relative error is…", o: ["0.05", "0.5", "5", "0.95"], a: 0, e: "" },
    { q: "Normalisation maximises…", o: ["Precision", "Range", "Speed", "File size"], a: 0, e: "" },
    { q: "A key advantage of floating point over fixed point is…", o: ["Greater range", "Always exact", "Simpler hardware", "No exponent needed"], a: 0, e: "" }
  ],
  flashcards: [
    ["Floating point", "Mantissa × 2^exponent, both two's complement"],
    ["Normalised positive", "Mantissa starts 0.1"],
    ["Normalised negative", "Mantissa starts 1.0"],
    ["Why normalise?", "Maximum precision; unique representation"],
    ["Precision", "More mantissa bits"],
    ["Range", "More exponent bits"],
    ["Absolute error", "|true − stored|"],
    ["Relative error", "Absolute error ÷ true value"],
    ["Underflow", "Too small to represent"],
    ["Overflow", "Too large to represent"]
  ]
});

S2Data.add({
  id: "5d", group: 5, title: "Character coding and error checking",
  summary: "ASCII and Unicode, character codes, parity bits, majority voting, checksums and check digits.",
  notes: `
<h3>Character coding</h3>
<table><tr><th>System</th><th>Bits</th><th>Characters</th></tr>
<tr><td>ASCII</td><td>7 (often stored in 8)</td><td>128: English letters, digits, punctuation, control codes</td></tr>
<tr><td>Extended ASCII</td><td>8</td><td>256</td></tr>
<tr><td>Unicode</td><td>Variable (e.g. UTF-8, UTF-16)</td><td>Over 100 000, covering the world's writing systems and emoji</td></tr></table>
<p>Unicode was introduced because ASCII couldn't represent other alphabets. Its first 128 codes match ASCII. Codes are consecutive: 'A' = 65, 'B' = 66; '0' = 48.</p>
<div class="box box-mistake"><span class="box-title">Watch out</span>The character '7' (code 55) is different from the number 7.</div>
<h3>Error checking</h3>
<table><tr><th>Method</th><th>How</th><th>Limitation</th></tr>
<tr><td>Parity bit</td><td>An extra bit makes the number of 1s even (even parity) or odd</td><td>Misses an even number of flipped bits</td></tr>
<tr><td>Majority voting</td><td>Each bit sent three times; the majority value is taken</td><td>Triples the data sent</td></tr>
<tr><td>Checksum</td><td>A value calculated from the data is sent with it and recalculated on receipt</td><td>Some errors can still give the same checksum</td></tr>
<tr><td>Check digit</td><td>A digit calculated from the others (e.g. ISBN, barcodes)</td><td>Catches typing errors, not all errors</td></tr></table>`,
  quiz: [
    { q: "ASCII uses how many bits?", o: ["7", "16", "4", "32"], a: 0, e: "" },
    { q: "How many characters does 7-bit ASCII represent?", o: ["128", "256", "65 536", "100"], a: 0, e: "" },
    { q: "Why was Unicode introduced?", o: ["To represent all the world's characters", "To make files smaller", "To replace binary", "For error checking"], a: 0, e: "" },
    { q: "If 'A' = 65, 'D' =", o: ["68", "67", "69", "100"], a: 0, e: "" },
    { q: "With even parity, 1011001 gets parity bit…", o: ["0", "1", "2", "None"], a: 0, e: "" },
    { q: "A weakness of parity is…", o: ["It misses two flipped bits", "It catches all errors", "It triples data", "It needs Unicode"], a: 0, e: "" },
    { q: "Majority voting sends each bit…", o: ["Three times", "Twice", "Once", "Eight times"], a: 0, e: "" },
    { q: "ISBNs use a…", o: ["Check digit", "Parity bit", "Majority vote", "Hash table"], a: 0, e: "" },
    { q: "A checksum is…", o: ["A value calculated from data, recalculated on receipt", "An extra parity bit", "A copy of all data", "A Unicode character"], a: 0, e: "" },
    { q: "The character '0' has ASCII code…", o: ["48", "0", "30", "65"], a: 0, e: "" }
  ],
  flashcards: [
    ["ASCII", "7-bit, 128 characters"],
    ["Extended ASCII", "8-bit, 256 characters"],
    ["Unicode", "Variable length; all scripts; first 128 = ASCII"],
    ["'A', 'a', '0'", "65, 97, 48"],
    ["Parity bit", "Makes count of 1s even or odd"],
    ["Parity weakness", "Misses an even number of errors"],
    ["Majority voting", "Send each bit 3×; take majority"],
    ["Checksum", "Calculated value checked on receipt"],
    ["Check digit", "Digit computed from others, e.g. ISBN"],
    ["Character vs number", "'7' (code 55) ≠ 7"]
  ]
});

S2Data.add({
  id: "5e", group: 5, title: "Representing images and sound",
  summary: "Bitmaps, resolution and colour depth, file size calculations, metadata, vector graphics, sampling, the Nyquist theorem, ADC and DAC, and MIDI.",
  notes: `
<h3>Bitmap images</h3>
<ul>
<li>Made of <b>pixels</b>, each stored as a binary colour code.</li>
<li><b>Resolution:</b> width × height in pixels (or dots per inch). <b>Colour depth:</b> bits per pixel; n bits give 2ⁿ colours.</li>
<li><b>Size (bits)</b> = width × height × colour depth (excluding metadata).</li>
<li><b>Metadata</b>: data about the image, such as width, height and colour depth.</li>
</ul>
<div class="box box-key"><span class="box-title">Example</span>800 × 600 image, 24-bit colour: 800 × 600 × 24 = 11 520 000 bits = 1 440 000 bytes.</div>
<h3>Vector graphics</h3>
<p>Images stored as <b>objects</b> (lines, circles, polygons) with <b>properties</b> (coordinates, radius, fill colour, line width). They scale without losing quality and are often smaller, but can't represent photographs well.</p>
<h3>Sound</h3>
<ul>
<li>An <b>ADC</b> (analogue-to-digital converter) <b>samples</b> the analogue wave's amplitude at regular intervals. A <b>DAC</b> converts back for playback.</li>
<li><b>Sampling rate:</b> samples per second (Hz). <b>Sample resolution:</b> bits per sample.</li>
<li><b>Size (bits)</b> = sampling rate × resolution × duration (s) (× channels).</li>
<li><b>Nyquist theorem:</b> sample at <b>at least twice the highest frequency</b> to reproduce the signal accurately.</li>
</ul>
<h3>MIDI</h3>
<p>MIDI stores <b>event messages</b> (note on/off, pitch, velocity, instrument, duration) rather than samples. Files are much smaller and easy to edit, but need a synthesiser to play and can't record real voices.</p>`,
  quiz: [
    { q: "Colour depth is…", o: ["Bits per pixel", "Pixels per inch", "Number of pixels", "File size"], a: 0, e: "" },
    { q: "8-bit colour depth gives how many colours?", o: ["256", "8", "16", "65 536"], a: 0, e: "" },
    { q: "A 100 × 100 image at 8 bits per pixel is how many bytes?", o: ["10 000", "80 000", "800", "1000"], a: 0, e: "" },
    { q: "Vector graphics store…", o: ["Objects and their properties", "Pixels", "Samples", "MIDI events"], a: 0, e: "" },
    { q: "An advantage of vector graphics is…", o: ["Scaling without quality loss", "Photo-realism", "Larger files", "Pixel editing"], a: 0, e: "" },
    { q: "Nyquist: to capture 20 kHz, sample at least at…", o: ["40 kHz", "20 kHz", "10 kHz", "44 Hz"], a: 0, e: "" },
    { q: "An ADC…", o: ["Converts analogue to digital", "Converts digital to analogue", "Compresses files", "Plays MIDI"], a: 0, e: "" },
    { q: "Sample resolution is…", o: ["Bits per sample", "Samples per second", "Duration", "Channels"], a: 0, e: "" },
    { q: "MIDI files store…", o: ["Event messages", "Samples", "Pixels", "Vectors"], a: 0, e: "" },
    { q: "Metadata in an image could include…", o: ["Width, height, colour depth", "Only pixel colours", "The sampling rate", "MIDI notes"], a: 0, e: "" }
  ],
  flashcards: [
    ["Pixel", "Smallest addressable element of a bitmap"],
    ["Colour depth", "Bits per pixel; 2ⁿ colours"],
    ["Bitmap size", "Width × height × colour depth (bits)"],
    ["Metadata", "Data about the file: width, height, depth"],
    ["Vector graphics", "Objects + properties; scale cleanly"],
    ["Sampling rate", "Samples per second (Hz)"],
    ["Sample resolution", "Bits per sample"],
    ["Sound size", "Rate × resolution × seconds"],
    ["Nyquist theorem", "Sample at ≥ 2× highest frequency"],
    ["MIDI", "Event messages; small, editable; needs synth"]
  ]
});

S2Data.add({
  id: "5f", group: 5, title: "Compression and encryption",
  summary: "Lossy and lossless compression, run length encoding, dictionary-based compression, the Caesar and Vernam ciphers, and computational security.",
  notes: `
<h3>Compression</h3>
<table><tr><th></th><th>Lossy</th><th>Lossless</th></tr>
<tr><td>Data</td><td>Some permanently removed</td><td>Original fully restored</td></tr>
<tr><td>Size</td><td>Much smaller</td><td>Less reduction</td></tr>
<tr><td>Use</td><td>Photos (JPEG), audio (MP3), video</td><td>Text, program code, PNG</td></tr></table>
<h3>Run length encoding (RLE)</h3>
<p>Stores runs of repeated values as (value, count). <code>AAAABBBCC</code> → <code>4A 3B 2C</code>. Effective with long runs (simple images), but can make data with few repeats larger.</p>
<h3>Dictionary-based compression</h3>
<p>Repeated words or patterns are stored once in a dictionary, and replaced in the data by short references. The dictionary must be sent with the data.</p>
<h3>Encryption</h3>
<ul>
<li><b>Plaintext</b> + <b>key</b> → <b>ciphertext</b> via a cipher.</li>
<li><b>Caesar cipher:</b> shift each letter by a fixed amount (e.g. 3: A→D). Easily broken by <b>brute force</b> (only 25 shifts) or <b>frequency analysis</b>.</li>
<li><b>Vernam cipher (one-time pad):</b> each character is <b>XOR</b>ed with a key character. The key must be <b>truly random</b>, <b>at least as long as the plaintext</b>, <b>used only once</b>, and kept secret. It offers <b>perfect security</b>: the ciphertext reveals nothing about the plaintext.</li>
<li>Other ciphers are only <b>computationally secure</b>: breakable in theory, but not in a reasonable time with current computing power.</li>
</ul>
<div class="box box-key"><span class="box-title">XOR example</span>Plaintext 0110, key 1010 → ciphertext 1100. XOR with the key again → 0110.</div>`,
  quiz: [
    { q: "Lossless compression…", o: ["Allows the original to be restored exactly", "Removes data permanently", "Is used only for photos", "Always gives smaller files than lossy"], a: 0, e: "" },
    { q: "MP3 is an example of…", o: ["Lossy compression", "Lossless compression", "Encryption", "RLE"], a: 0, e: "" },
    { q: "RLE of WWWWWBB is…", o: ["5W 2B", "W5 B2 B", "7WB", "2W 5B"], a: 0, e: "" },
    { q: "RLE works best on…", o: ["Data with long runs of repeats", "Random data", "Encrypted data", "Text with no repeats"], a: 0, e: "" },
    { q: "A Caesar shift of 3 turns 'CAT' into…", o: ["FDW", "DBU", "ZXQ", "FDV"], a: 0, e: "" },
    { q: "A Caesar cipher can be broken by…", o: ["Frequency analysis", "Nothing", "Only quantum computers", "Hashing"], a: 0, e: "" },
    { q: "The Vernam cipher uses which operation?", o: ["XOR", "AND", "Addition only", "Shift"], a: 0, e: "" },
    { q: "A one-time pad key must be…", o: ["Random, at least as long as the message, used once", "Short and reusable", "A word", "Public"], a: 0, e: "" },
    { q: "0110 XOR 1010 =", o: ["1100", "0010", "1110", "0000"], a: 0, e: "" },
    { q: "Computationally secure means…", o: ["Not breakable in a reasonable time", "Proven unbreakable", "Never encrypted", "Using Caesar"], a: 0, e: "" }
  ],
  flashcards: [
    ["Lossy", "Data removed permanently; much smaller"],
    ["Lossless", "Original restored exactly"],
    ["RLE", "Store runs as (count, value)"],
    ["Dictionary compression", "Replace repeats with references to a dictionary"],
    ["Caesar cipher", "Fixed letter shift; weak"],
    ["Frequency analysis", "Breaking ciphers by letter frequencies"],
    ["Vernam cipher", "XOR with one-time pad; perfect security"],
    ["One-time pad rules", "Random, ≥ message length, used once, secret"],
    ["Perfect security", "Ciphertext reveals nothing"],
    ["Computational security", "Breakable only with infeasible time"]
  ]
});

S2Data.add({
  id: "6a", group: 6, title: "Software and translators",
  summary: "Hardware and software, system and application software, operating systems, utilities and libraries, language levels, and assemblers, compilers and interpreters.",
  notes: `
<h3>Hardware and software</h3>
<p><b>Hardware</b> is the physical components; <b>software</b> is the programs that run on it.</p>
<table><tr><th>Type</th><th>Examples</th></tr>
<tr><td>System software</td><td>Operating systems, utility programs, libraries, translators</td></tr>
<tr><td>Application software</td><td>Word processors, browsers, games</td></tr></table>
<h3>The operating system</h3>
<p>Hides the complexity of the hardware (a virtual machine) and manages resources: <b>processor scheduling</b>, <b>memory management</b>, <b>I/O device management</b> (via drivers), file management and security.</p>
<h3>Levels of programming language</h3>
<table><tr><th>Level</th><th>Features</th></tr>
<tr><td>Machine code</td><td>Binary instructions run directly; processor-specific; hard to write</td></tr>
<tr><td>Assembly language</td><td>Mnemonics (e.g. LDR, ADD); one-to-one with machine code; processor-specific; low-level control</td></tr>
<tr><td>High-level (imperative)</td><td>English-like statements; portable; one statement → many machine instructions</td></tr></table>
<p>Low-level languages give fine control and efficient code (e.g. embedded systems, drivers); high-level languages are faster to write, easier to read and debug, and portable.</p>
<h3>Translators</h3>
<table><tr><th>Translator</th><th>How</th><th>Pros / cons</th></tr>
<tr><td>Assembler</td><td>Assembly → machine code</td><td>One-to-one</td></tr>
<tr><td>Compiler</td><td>Translates the whole program into object code before running</td><td>Fast to run; distributable without source; slow to compile; errors reported at the end</td></tr>
<tr><td>Interpreter</td><td>Translates and runs one line at a time</td><td>Good for debugging; slower; source needed every time</td></tr></table>
<p>Some languages compile to <b>bytecode</b>, which a virtual machine interprets, making them platform-independent (e.g. Java).</p>`,
  quiz: [
    { q: "An operating system is…", o: ["System software", "Application software", "Hardware", "A translator only"], a: 0, e: "" },
    { q: "A compiler…", o: ["Translates the whole program before running", "Translates line by line", "Converts assembly only", "Runs bytecode"], a: 0, e: "" },
    { q: "An interpreter is good for…", o: ["Debugging during development", "Distributing without source", "Fastest execution", "Hiding code"], a: 0, e: "" },
    { q: "An assembler translates…", o: ["Assembly to machine code", "High-level to bytecode", "Machine code to assembly", "Python to Java"], a: 0, e: "" },
    { q: "Assembly language is…", o: ["Processor-specific", "Portable", "High-level", "English-like"], a: 0, e: "" },
    { q: "Bytecode is run by…", o: ["A virtual machine", "The GPU", "The assembler", "The BIOS"], a: 0, e: "" },
    { q: "Memory management is a role of the…", o: ["Operating system", "Compiler", "Application", "Assembler"], a: 0, e: "" },
    { q: "An advantage of low-level languages is…", o: ["Efficient code and direct hardware control", "Portability", "Ease of reading", "Fast development"], a: 0, e: "" },
    { q: "A disk defragmenter is a…", o: ["Utility program", "Application", "Translator", "Library"], a: 0, e: "" },
    { q: "One high-level statement typically becomes…", o: ["Many machine instructions", "One machine instruction", "No instructions", "Bytecode only"], a: 0, e: "" }
  ],
  flashcards: [
    ["System software", "OS, utilities, libraries, translators"],
    ["Application software", "Programs for user tasks"],
    ["OS roles", "Scheduling, memory, I/O, files, security"],
    ["Machine code", "Binary; processor-specific"],
    ["Assembly", "Mnemonics; one-to-one with machine code"],
    ["High-level", "Portable, English-like, one-to-many"],
    ["Assembler", "Assembly → machine code"],
    ["Compiler", "Whole program → object code; fast to run"],
    ["Interpreter", "Line by line; good for debugging"],
    ["Bytecode", "Intermediate code run by a virtual machine"]
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Logic gates and Boolean algebra",
  summary: "Logic gates and truth tables, Boolean identities and De Morgan's laws, half and full adders, and the D-type flip-flop.",
  notes: `
<h3>Logic gates</h3>
<table><tr><th>A</th><th>B</th><th>AND (A·B)</th><th>OR (A+B)</th><th>XOR (A⊕B)</th><th>NAND</th><th>NOR</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>
<p><b>NOT</b> (Ā) inverts its input. NAND and NOR are 'universal': any circuit can be built from them alone.</p>
<h3>Boolean identities</h3>
<ul>
<li>A·0 = 0, A·1 = A, A·A = A, A·Ā = 0</li>
<li>A+0 = A, A+1 = 1, A+A = A, A+Ā = 1</li>
<li>Double negation: NOT NOT A = A</li>
<li>Absorption: A + A·B = A; A·(A + B) = A</li>
<li>Distributive: A·(B + C) = A·B + A·C</li>
</ul>
<h3>De Morgan's laws</h3>
<p><b>NOT(A·B) = Ā + B̄</b> and <b>NOT(A + B) = Ā · B̄</b>. ("Break the line, change the sign.")</p>
<h3>Adders</h3>
<table><tr><th>Circuit</th><th>Inputs</th><th>Outputs</th></tr>
<tr><td>Half adder</td><td>A, B</td><td>Sum = A XOR B; Carry = A AND B</td></tr>
<tr><td>Full adder</td><td>A, B, carry in</td><td>Sum and carry out (two half adders + OR gate)</td></tr></table>
<p>Full adders are chained to add multi-bit numbers.</p>
<h3>D-type flip-flop</h3>
<p>A memory unit that stores <b>one bit</b>. On the <b>rising edge</b> of the clock signal, the output Q takes the value of the data input D, and holds it until the next rising edge. Flip-flops are used in registers.</p>`,
  quiz: [
    { q: "XOR outputs 1 when…", o: ["Inputs differ", "Both are 1", "Both are 0", "Always"], a: 0, e: "" },
    { q: "NAND of 1 and 1 is…", o: ["0", "1", "2", "Undefined"], a: 0, e: "" },
    { q: "A + 1 =", o: ["1", "A", "0", "Ā"], a: 0, e: "" },
    { q: "A · Ā =", o: ["0", "1", "A", "Ā"], a: 0, e: "" },
    { q: "NOT(A + B) by De Morgan is…", o: ["Ā · B̄", "Ā + B̄", "A · B", "A + B"], a: 0, e: "" },
    { q: "A + A·B simplifies to…", o: ["A", "B", "A·B", "1"], a: 0, e: "" },
    { q: "A half adder's carry output is…", o: ["A AND B", "A XOR B", "A OR B", "NOT A"], a: 0, e: "" },
    { q: "A half adder's sum output is…", o: ["A XOR B", "A AND B", "A OR B", "A NAND B"], a: 0, e: "" },
    { q: "A full adder has how many inputs?", o: ["3", "2", "4", "1"], a: 0, e: "" },
    { q: "A D-type flip-flop stores…", o: ["One bit", "One byte", "A whole register", "Nothing"], a: 0, e: "" }
  ],
  flashcards: [
    ["AND", "1 only if both 1"],
    ["OR", "1 if either is 1"],
    ["XOR", "1 if inputs differ"],
    ["NAND / NOR", "NOT AND / NOT OR; universal gates"],
    ["De Morgan 1", "NOT(A·B) = Ā + B̄"],
    ["De Morgan 2", "NOT(A + B) = Ā·B̄"],
    ["Absorption", "A + A·B = A"],
    ["Half adder", "Sum = XOR, carry = AND"],
    ["Full adder", "Adds A, B and carry in"],
    ["D-type flip-flop", "Stores 1 bit; Q = D on rising clock edge"]
  ]
});

S2Data.add({
  id: "7a", group: 7, title: "Internal hardware and the processor",
  summary: "The processor, main memory, buses, I/O controllers, von Neumann and Harvard architectures, the stored program concept, and the registers.",
  notes: `
<h3>Internal components</h3>
<ul>
<li><b>Processor:</b> executes instructions. <b>Main memory:</b> holds the program and data currently in use.</li>
<li><b>Address bus</b> (one-way): carries memory addresses. <b>Data bus</b> (two-way): carries data. <b>Control bus</b> (two-way): carries control signals (read, write, clock, interrupt).</li>
<li><b>I/O controllers</b> link the processor to peripheral devices.</li>
</ul>
<h3>Architectures</h3>
<table><tr><th></th><th>Von Neumann</th><th>Harvard</th></tr>
<tr><td>Memory</td><td>Shared for instructions and data</td><td>Separate for instructions and data</td></tr>
<tr><td>Buses</td><td>One set</td><td>Separate, so instructions and data can be fetched at once</td></tr>
<tr><td>Use</td><td>General-purpose computers</td><td>Embedded systems, DSPs</td></tr></table>
<p><b>Stored program concept:</b> machine code instructions are stored in main memory and fetched and executed serially by a processor that performs arithmetic and logical operations.</p>
<h3>Processor components</h3>
<table><tr><th>Component</th><th>Role</th></tr>
<tr><td>ALU</td><td>Arithmetic and logical operations</td></tr>
<tr><td>Control unit</td><td>Decodes instructions and sends control signals</td></tr>
<tr><td>Clock</td><td>Generates pulses to synchronise operations</td></tr>
<tr><td>General-purpose registers</td><td>Fast temporary storage</td></tr>
<tr><td>Program counter (PC)</td><td>Address of the next instruction</td></tr>
<tr><td>Current instruction register (CIR)</td><td>Holds the instruction being decoded/executed</td></tr>
<tr><td>Memory address register (MAR)</td><td>Address to be read from or written to</td></tr>
<tr><td>Memory buffer register (MBR)</td><td>Data just read from or about to be written to memory</td></tr>
<tr><td>Status register (SR)</td><td>Flags, e.g. overflow, zero, negative, carry</td></tr></table>`,
  quiz: [
    { q: "The address bus is…", o: ["One-way", "Two-way", "Used for data", "Used for clock only"], a: 0, e: "" },
    { q: "The data bus is…", o: ["Two-way", "One-way", "For addresses", "Not connected to memory"], a: 0, e: "" },
    { q: "Harvard architecture has…", o: ["Separate instruction and data memory", "Shared memory", "No buses", "No registers"], a: 0, e: "" },
    { q: "Harvard architecture is common in…", o: ["Embedded systems", "Desktop PCs only", "Servers only", "Printers only"], a: 0, e: "" },
    { q: "The PC holds…", o: ["The address of the next instruction", "The current instruction", "Data from memory", "Flags"], a: 0, e: "" },
    { q: "The MBR holds…", o: ["Data read from or written to memory", "An address", "The next instruction address", "Flags"], a: 0, e: "" },
    { q: "The CIR holds…", o: ["The instruction being executed", "The next address", "Flags", "Results"], a: 0, e: "" },
    { q: "Which register holds flags like overflow?", o: ["Status register", "MAR", "PC", "CIR"], a: 0, e: "" },
    { q: "The control unit…", o: ["Decodes instructions and sends control signals", "Does arithmetic", "Stores programs", "Generates addresses only"], a: 0, e: "" },
    { q: "The stored program concept means…", o: ["Instructions are stored in memory and executed serially", "Programs are on paper", "Data and code are never in memory", "Instructions run in parallel"], a: 0, e: "" }
  ],
  flashcards: [
    ["Address bus", "One-way; carries addresses"],
    ["Data bus", "Two-way; carries data"],
    ["Control bus", "Two-way; control signals"],
    ["Von Neumann", "Shared memory and buses for code and data"],
    ["Harvard", "Separate memories; embedded systems"],
    ["Stored program concept", "Instructions in memory, fetched and executed serially"],
    ["PC", "Address of next instruction"],
    ["CIR", "Current instruction"],
    ["MAR / MBR", "Address to access / data transferred"],
    ["Status register", "Flags: zero, negative, carry, overflow"]
  ]
});

S2Data.add({
  id: "7b", group: 7, title: "Fetch-execute, assembly language and interrupts",
  summary: "The fetch-decode-execute cycle, instruction format, immediate and direct addressing, AQA assembly language, and interrupts.",
  notes: `
<h3>Fetch-decode-execute cycle</h3>
<ol>
<li>The address in the <b>PC</b> is copied to the <b>MAR</b>.</li>
<li>The <b>PC</b> is incremented.</li>
<li>The instruction at the address in the MAR is fetched along the data bus into the <b>MBR</b>.</li>
<li>The instruction is copied from the MBR to the <b>CIR</b>.</li>
<li>The control unit <b>decodes</b> it.</li>
<li>The instruction is <b>executed</b>.</li>
</ol>
<h3>Instruction format</h3>
<p>Each instruction has an <b>opcode</b> (the operation, plus the addressing mode) and an <b>operand</b> (the data or an address). The set of all opcodes a processor supports is its <b>instruction set</b>, which is processor-specific.</p>
<table><tr><th>Addressing mode</th><th>Operand is…</th><th>AQA syntax</th></tr>
<tr><td>Immediate</td><td>The actual value</td><td>#5</td></tr>
<tr><td>Direct</td><td>A memory address holding the value</td><td>100</td></tr></table>
<h3>AQA assembly language</h3>
<table><tr><th>Instruction</th><th>Meaning</th></tr>
<tr><td>LDR Rd, &lt;mem&gt;</td><td>Load from memory into register Rd</td></tr>
<tr><td>STR Rd, &lt;mem&gt;</td><td>Store register Rd into memory</td></tr>
<tr><td>ADD / SUB Rd, Rn, &lt;op2&gt;</td><td>Rd = Rn + / − op2</td></tr>
<tr><td>MOV Rd, &lt;op2&gt;</td><td>Copy op2 into Rd</td></tr>
<tr><td>CMP Rn, &lt;op2&gt;</td><td>Compare (sets flags)</td></tr>
<tr><td>B / BEQ / BNE / BGT / BLT &lt;label&gt;</td><td>Branch always / if equal / not equal / greater / less</td></tr>
<tr><td>AND / ORR / EOR / MVN</td><td>Bitwise AND, OR, XOR, NOT</td></tr>
<tr><td>LSL / LSR Rd, Rn, &lt;op2&gt;</td><td>Logical shift left / right</td></tr>
<tr><td>HALT</td><td>Stop</td></tr></table>
<pre>      MOV R0, #0       ; total
      MOV R1, #1       ; counter
loop: ADD R0, R0, R1
      ADD R1, R1, #1
      CMP R1, #6
      BLT loop         ; R0 = 1+2+3+4+5 = 15
      STR R0, 100
      HALT</pre>
<h3>Interrupts</h3>
<p>An <b>interrupt</b> is a signal that something needs attention. At the end of each fetch-execute cycle the processor checks for interrupts; if one has higher priority than the current task, the current register contents are saved on a <b>stack</b>, the <b>interrupt service routine (ISR)</b> runs, and then the saved state is restored.</p>`,
  quiz: [
    { q: "The first step of the fetch stage copies…", o: ["PC to MAR", "MBR to CIR", "CIR to PC", "MAR to MBR"], a: 0, e: "" },
    { q: "The instruction is copied to the CIR from the…", o: ["MBR", "MAR", "PC", "ALU"], a: 0, e: "" },
    { q: "MOV R1, #7 uses…", o: ["Immediate addressing", "Direct addressing", "Indirect addressing", "Indexed addressing"], a: 0, e: "" },
    { q: "LDR R2, 100 loads…", o: ["The value at address 100", "The number 100", "Register 100", "Nothing"], a: 0, e: "" },
    { q: "An opcode specifies…", o: ["The operation", "The data", "The address bus width", "The clock speed"], a: 0, e: "" },
    { q: "LSL R0, R0, #1 has the effect of…", o: ["Multiplying R0 by 2", "Dividing by 2", "Adding 1", "Clearing R0"], a: 0, e: "" },
    { q: "BNE branches if…", o: ["Not equal", "Equal", "Greater", "Always"], a: 0, e: "" },
    { q: "In the loop example, R0 finishes as…", o: ["15", "21", "10", "6"], a: 0, e: "" },
    { q: "When an interrupt is serviced, register contents are saved on…", o: ["A stack", "A queue", "The hard drive", "The data bus"], a: 0, e: "" },
    { q: "The processor checks for interrupts…", o: ["At the end of each fetch-execute cycle", "Only at start-up", "Every hour", "Never"], a: 0, e: "" }
  ],
  flashcards: [
    ["Fetch", "PC → MAR; PC + 1; memory → MBR; MBR → CIR"],
    ["Decode", "Control unit interprets the CIR"],
    ["Opcode", "Operation + addressing mode"],
    ["Operand", "Value or address used"],
    ["Immediate addressing", "Operand is the value (#5)"],
    ["Direct addressing", "Operand is a memory address"],
    ["LDR / STR", "Load from / store to memory"],
    ["CMP + BEQ/BNE/BGT/BLT", "Compare then conditional branch"],
    ["LSL / LSR", "Shift left (×2) / right (÷2)"],
    ["Interrupt handling", "Save registers on stack, run ISR, restore"]
  ]
});

S2Data.add({
  id: "7c", group: 7, title: "Processor performance and external hardware",
  summary: "Factors affecting processor performance, and how barcode readers, digital cameras, RFID, laser printers and secondary storage work.",
  notes: `
<h3>Processor performance</h3>
<table><tr><th>Factor</th><th>Effect</th></tr>
<tr><td>Clock speed</td><td>More cycles per second, so more instructions executed</td></tr>
<tr><td>Multiple cores</td><td>Instructions run in parallel, if the software can be split into threads</td></tr>
<tr><td>Cache memory</td><td>Very fast memory near the processor holds frequently used data and instructions, reducing slower RAM access</td></tr>
<tr><td>Word length</td><td>More bits processed in one operation</td></tr>
<tr><td>Address bus width</td><td>More addressable memory (n lines → 2ⁿ addresses)</td></tr>
<tr><td>Data bus width</td><td>More data transferred per cycle</td></tr></table>
<h3>Input and output devices</h3>
<ul>
<li><b>Barcode reader:</b> a laser or LEDs illuminate the code; light reflects off white bars and is absorbed by black; sensors convert the pattern to a digital value.</li>
<li><b>Digital camera:</b> light passes through the lens onto a sensor (CCD or CMOS) of light-sensitive cells; each generates a charge that's converted to a digital value per pixel.</li>
<li><b>RFID:</b> a reader sends radio waves that power a <b>passive</b> tag's coil; the tag sends its data back. <b>Active</b> tags have their own battery and longer range.</li>
<li><b>Laser printer:</b> a laser draws the image as static charge on a rotating drum; toner sticks to the charged areas and is transferred to paper, then fused with heat.</li>
</ul>
<h3>Secondary storage</h3>
<table><tr><th>Type</th><th>How</th><th>Features</th></tr>
<tr><td>Hard disk</td><td>Magnetised platters spin; read/write heads on an arm</td><td>Cheap per GB, large; moving parts, slower</td></tr>
<tr><td>Optical disk</td><td>A laser reads pits and lands on a spinning disc</td><td>Cheap, portable; low capacity, slow</td></tr>
<tr><td>Solid-state drive</td><td>NAND flash memory cells with a controller</td><td>Fast, no moving parts, low power; dearer per GB</td></tr></table>`,
  quiz: [
    { q: "Cache improves performance by…", o: ["Storing frequently used data near the processor", "Increasing clock speed", "Adding cores", "Widening the address bus"], a: 0, e: "" },
    { q: "Doubling cores doesn't always double speed because…", o: ["Not all tasks can run in parallel", "Cores are slow", "Cache is removed", "The clock stops"], a: 0, e: "" },
    { q: "A wider address bus allows…", o: ["More addressable memory", "Faster clock", "More cores", "Less cache"], a: 0, e: "" },
    { q: "A 16-line address bus can address…", o: ["65 536 locations", "16 locations", "256 locations", "1024 locations"], a: 0, e: "" },
    { q: "A passive RFID tag is powered by…", o: ["The reader's radio waves", "A battery", "Solar panels", "Mains power"], a: 0, e: "" },
    { q: "A laser printer uses…", o: ["A charged drum and toner", "Ink nozzles", "Pins", "Magnetic platters"], a: 0, e: "" },
    { q: "SSDs use…", o: ["NAND flash memory", "Spinning platters", "Lasers", "Magnetic tape"], a: 0, e: "" },
    { q: "An advantage of hard disks is…", o: ["Low cost per GB", "No moving parts", "Fastest access", "Very low power"], a: 0, e: "" },
    { q: "A digital camera's sensor is a…", o: ["CCD or CMOS", "Drum", "Platter", "Barcode"], a: 0, e: "" },
    { q: "Optical disks are read by…", o: ["A laser detecting pits and lands", "Magnetic heads", "Flash cells", "Radio waves"], a: 0, e: "" }
  ],
  flashcards: [
    ["Clock speed", "Cycles per second"],
    ["Cores", "Parallel processing if software allows"],
    ["Cache", "Fast memory for frequently used data"],
    ["Word length", "Bits processed in one operation"],
    ["Address bus width", "n lines → 2ⁿ addresses"],
    ["Barcode reader", "Reflected light from bars → digital"],
    ["RFID", "Passive tags powered by reader's radio waves"],
    ["Laser printer", "Laser charges drum; toner; fused by heat"],
    ["Hard disk", "Magnetic platters; cheap, large, moving parts"],
    ["SSD", "NAND flash; fast, no moving parts"]
  ]
});

S2Data.detail("5a", { mistakes: ["Treating kilobyte and kibibyte as the same."], tips: ["Practise converting between binary, hex and decimal quickly."], fact: "The IEC introduced kibi, mebi and gibi in 1998 to remove the ambiguity." });
S2Data.detail("5b", { mistakes: ["Forgetting the MSB is negative when reading two's complement."], tips: ["Check answers by converting back to decimal."], fact: "Two's complement is used because addition and subtraction work with the same circuit." });
S2Data.detail("5c", { mistakes: ["Moving the binary point the wrong way for a negative exponent."], tips: ["Always convert the exponent first, then shift the point."], fact: "In IEEE 754, 0.1 + 0.2 isn't exactly 0.3." });
S2Data.detail("5d", { mistakes: ["Saying parity can correct errors; it only detects some."], tips: ["Learn one limitation for each error-checking method."], fact: "The ISBN-13 check digit uses alternating weights of 1 and 3." });
S2Data.detail("5e", { mistakes: ["Forgetting to divide by 8 to convert bits to bytes."], tips: ["Write the formula before substituting numbers."], fact: "CD audio is sampled at 44.1 kHz, just over twice the ~20 kHz limit of human hearing." });
S2Data.detail("5f", { mistakes: ["Saying the Vernam key can be reused."], tips: ["Learn the four conditions for a one-time pad."], fact: "One-time pads were used for the Moscow–Washington hotline during the Cold War." });
S2Data.detail("6a", { mistakes: ["Saying interpreters produce an executable file."], tips: ["Compare compilers and interpreters in a table: speed, errors, distribution."], fact: "Grace Hopper built one of the first compilers, the A-0 system, in 1952." });
S2Data.detail("6b", { mistakes: ["Applying De Morgan's law without changing AND to OR (or vice versa)."], tips: ["Check simplifications with a truth table."], fact: "Boolean algebra was published by George Boole in 1854, nearly a century before electronic computers." });
S2Data.detail("7a", { mistakes: ["Mixing up MAR (address) and MBR (data)."], tips: ["Draw the processor with buses and label every register."], fact: "The von Neumann architecture is named after John von Neumann's 1945 report on the EDVAC." });
S2Data.detail("7b", { mistakes: ["Confusing #100 (the number 100) with 100 (the contents of address 100)."], tips: ["Trace assembly programs with a table of register values."], fact: "Real ARM processors use instructions very similar to AQA's assembly language." });
S2Data.detail("7c", { mistakes: ["Saying more cores always means proportionally faster performance."], tips: ["For devices, describe the process step by step in order."], fact: "Early hard drives in 1956 stored about 5 million characters and weighed about a tonne." });
