/* Computer Science² — Computational thinking and Data */

S2Data.add({
  id: "1a", group: 1, title: "Decomposition, abstraction and algorithms",
  summary: "Breaking problems down, removing unnecessary detail, and writing algorithms as flowcharts and pseudocode.",
  notes: `
<h3>Computational thinking</h3>
<ul>
<li><b>Decomposition:</b> breaking a problem into smaller sub-problems that are easier to solve, test and share between people.</li>
<li><b>Abstraction:</b> removing unnecessary detail to focus on what matters. A map of the Underground shows stations and connections, not distances.</li>
<li><b>Algorithm:</b> a precise sequence of steps that solves a problem.</li>
</ul>
<h3>Flowchart symbols</h3>
<table><tr><th>Symbol</th><th>Meaning</th></tr>
<tr><td>Rounded rectangle (terminator)</td><td>Start / Stop</td></tr>
<tr><td>Parallelogram</td><td>Input / Output</td></tr>
<tr><td>Rectangle</td><td>Process</td></tr>
<tr><td>Diamond</td><td>Decision (yes/no)</td></tr>
<tr><td>Rectangle with double sides</td><td>Subprogram</td></tr>
<tr><td>Arrow</td><td>Flow of control</td></tr></table>
<h3>The three building blocks</h3>
<ul>
<li><b>Sequence:</b> steps carried out in order.</li>
<li><b>Selection:</b> a decision chooses which steps run (<code>if</code>).</li>
<li><b>Iteration:</b> steps repeat (<code>for</code>, <code>while</code>).</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>An algorithm to find the largest of a list of numbers:
<pre>largest = numbers[0]
for n in numbers:
    if n > largest:
        largest = n
print(largest)</pre>
Sequence (set largest), iteration (the loop) and selection (the if).</div>
<div class="box box-key"><span class="box-title">Trace tables</span>A trace table records the value of each variable after each step, to check what an algorithm does or find errors.</div>`,
  quiz: [
    { q: "Decomposition means…", o: ["Breaking a problem into smaller parts", "Removing unnecessary detail", "Repeating steps", "Sorting data"], a: 0, e: "" },
    { q: "Abstraction means…", o: ["Removing unnecessary detail", "Breaking a problem down", "Writing code", "Testing a program"], a: 0, e: "" },
    { q: "Which flowchart symbol shows a decision?", o: ["Diamond", "Rectangle", "Parallelogram", "Oval"], a: 0, e: "" },
    { q: "Which flowchart symbol shows input or output?", o: ["Parallelogram", "Diamond", "Rectangle", "Circle"], a: 0, e: "" },
    { q: "Repeating steps is called…", o: ["Iteration", "Selection", "Sequence", "Decomposition"], a: 0, e: "" },
    { q: "Choosing between paths is called…", o: ["Selection", "Iteration", "Sequence", "Abstraction"], a: 0, e: "" },
    { q: "A trace table is used to…", o: ["Track variable values as an algorithm runs", "Draw a flowchart", "Sort a list", "Compress data"], a: 0, e: "" },
    { q: "Which is an example of abstraction?", o: ["A Tube map ignoring real distances", "Splitting a game into levels", "A while loop", "A diamond symbol"], a: 0, e: "" },
    { q: "An algorithm is…", o: ["A precise sequence of steps to solve a problem", "A programming language", "A type of computer", "A data type"], a: 0, e: "" }
  ],
  flashcards: [
    ["Decomposition", "Break a problem into smaller sub-problems"],
    ["Abstraction", "Remove unnecessary detail"],
    ["Algorithm", "Precise steps to solve a problem"],
    ["Sequence / selection / iteration", "In order / decisions / repetition"],
    ["Diamond", "Decision"],
    ["Parallelogram", "Input/output"],
    ["Trace table", "Records variable values step by step"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Searching and sorting algorithms",
  summary: "Linear and binary search; bubble and merge sort, and when to use each.",
  notes: `
<h3>Searching</h3>
<table><tr><th>Algorithm</th><th>How it works</th><th>Needs sorted data?</th></tr>
<tr><td>Linear search</td><td>Check each item in turn until found or the end is reached.</td><td>No</td></tr>
<tr><td>Binary search</td><td>Check the middle item; discard the half that can't contain the target; repeat.</td><td>Yes</td></tr></table>
<p>Binary search is much faster on large lists: each comparison halves the remaining items. For 1000 items it needs at most 10 comparisons; a linear search may need 1000.</p>
<div class="box box-prac"><span class="box-title">Binary search for 23 in [3, 8, 12, 17, 23, 30, 41]</span>Middle (index 3) is 17. 23 > 17, so search [23, 30, 41]. Middle is 30. 23 < 30, so search [23]. Found.</div>
<h3>Sorting</h3>
<table><tr><th>Algorithm</th><th>How it works</th><th>Notes</th></tr>
<tr><td>Bubble sort</td><td>Compare adjacent pairs and swap if out of order. Repeat passes until a pass makes no swaps.</td><td>Simple; slow on large lists.</td></tr>
<tr><td>Merge sort</td><td>Split the list in half repeatedly until each part has one item, then merge pairs back together in order.</td><td>Much faster on large lists; uses more memory.</td></tr></table>
<div class="box box-prac"><span class="box-title">One bubble sort pass on [5, 2, 4, 1]</span>Compare 5,2 → swap: [2, 5, 4, 1]. Compare 5,4 → swap: [2, 4, 5, 1]. Compare 5,1 → swap: [2, 4, 1, 5]. After one pass, the largest item is at the end.</div>
<div class="box box-key"><span class="box-title">Efficiency</span>Compare algorithms by the number of comparisons (time) and memory they need.</div>`,
  quiz: [
    { q: "Which search needs the list to be sorted?", o: ["Binary search", "Linear search", "Both", "Neither"], a: 0, e: "" },
    { q: "A linear search checks…", o: ["Each item in turn", "The middle item first", "Only the last item", "Random items"], a: 0, e: "" },
    { q: "Each step of binary search…", o: ["Halves the items left to search", "Checks one more item", "Sorts the list", "Doubles the list"], a: 0, e: "" },
    { q: "Bubble sort compares…", o: ["Adjacent pairs", "The first and last items", "The middle item", "Random pairs"], a: 0, e: "" },
    { q: "Bubble sort stops when…", o: ["A pass makes no swaps", "It reaches the middle", "After one pass", "The list is split"], a: 0, e: "" },
    { q: "Merge sort first…", o: ["Splits the list into single items", "Swaps adjacent items", "Finds the middle item", "Reverses the list"], a: 0, e: "" },
    { q: "Which sort is faster for large lists?", o: ["Merge sort", "Bubble sort", "They're equal", "Neither works"], a: 0, e: "" },
    { q: "After one bubble sort pass (ascending), the largest item is…", o: ["At the end", "At the start", "In the middle", "Removed"], a: 0, e: "" },
    { q: "Max binary search comparisons for 1000 items is about…", o: ["10", "500", "1000", "100"], a: 0, e: "" }
  ],
  flashcards: [
    ["Linear search", "Check each item in order; works on unsorted data"],
    ["Binary search", "Check middle, discard half; needs sorted data"],
    ["Bubble sort", "Swap adjacent pairs; repeat until no swaps"],
    ["Merge sort", "Split to single items, merge back in order"],
    ["Merge vs bubble", "Merge faster, more memory; bubble simpler"],
    ["Efficiency", "Measured by comparisons and memory"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Logic and truth tables",
  summary: "AND, OR and NOT, truth tables, and logic in programs.",
  notes: `
<h3>The three operators</h3>
<table><tr><th>Operator</th><th>Output is 1 (True) when…</th></tr>
<tr><td>AND</td><td>both inputs are 1</td></tr>
<tr><td>OR</td><td>at least one input is 1</td></tr>
<tr><td>NOT</td><td>the input is 0 (it flips the input)</td></tr></table>
<h3>Truth tables</h3>
<table><tr><th>A</th><th>B</th><th>A AND B</th><th>A OR B</th><th>NOT A</th></tr>
<tr><td>0</td><td>0</td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr></table>
<p>With 3 inputs there are 2³ = 8 rows. Work out brackets first, then NOT, then AND, then OR.</p>
<div class="box box-prac"><span class="box-title">Worked example: P = (A OR B) AND NOT C</span>A = 1, B = 0, C = 0: (1 OR 0) = 1; NOT 0 = 1; 1 AND 1 = <b>1</b>.</div>
<h3>Logic in Python</h3>
<pre>if age >= 13 and age <= 19:
    print("Teenager")
if not raining:
    print("Go outside")</pre>
<div class="box box-key"><span class="box-title">Rows</span>A truth table with n inputs has 2ⁿ rows.</div>`,
  quiz: [
    { q: "1 AND 0 = ?", o: ["0", "1", "2", "Error"], a: 0, e: "" },
    { q: "1 OR 0 = ?", o: ["1", "0", "2", "Error"], a: 0, e: "" },
    { q: "NOT 1 = ?", o: ["0", "1", "-1", "2"], a: 0, e: "" },
    { q: "AND outputs 1 when…", o: ["Both inputs are 1", "Either input is 1", "Both are 0", "The input is 0"], a: 0, e: "" },
    { q: "OR outputs 0 when…", o: ["Both inputs are 0", "Both are 1", "One is 1", "Never"], a: 0, e: "" },
    { q: "How many rows in a truth table with 3 inputs?", o: ["8", "6", "9", "4"], a: 0, e: "" },
    { q: "(1 OR 0) AND NOT 1 = ?", o: ["0", "1", "2", "Undefined"], a: 0, e: "" },
    { q: "In Python, which keyword is logical AND?", o: ["and", "&&", "AND", "plus"], a: 0, e: "" },
    { q: "NOT (0 AND 1) = ?", o: ["1", "0", "2", "Error"], a: 0, e: "" }
  ],
  flashcards: [
    ["AND", "1 only if both inputs are 1"],
    ["OR", "1 if at least one input is 1"],
    ["NOT", "Flips the input"],
    ["Rows in a truth table", "2ⁿ for n inputs"],
    ["Order of operations", "Brackets, NOT, AND, OR"],
    ["Python logic", "and, or, not"]
  ]
});

S2Data.add({
  id: "2a", group: 2, title: "Binary and hexadecimal",
  summary: "Converting between denary, binary and hex; binary addition, overflow, shifts and two's complement.",
  notes: `
<h3>Why binary?</h3>
<p>Computers use transistors that are either on or off, so data is stored as <b>bits</b> (0 or 1). 4 bits = a <b>nibble</b>; 8 bits = a <b>byte</b>. n bits give 2ⁿ different values.</p>
<h3>Converting</h3>
<table><tr><th>128</th><th>64</th><th>32</th><th>16</th><th>8</th><th>4</th><th>2</th><th>1</th></tr>
<tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr></table>
<p>01011001 = 64 + 16 + 8 + 1 = <b>89</b>.</p>
<p><b>Hexadecimal</b> uses digits 0–9 and A–F (A = 10 … F = 15). Each hex digit is one nibble. 89 = 0101 1001 = <b>59</b> in hex. Hex is easier for humans to read than long binary strings.</p>
<h3>Binary addition</h3>
<p>Rules: 0+0=0, 0+1=1, 1+1=10 (write 0, carry 1), 1+1+1=11 (write 1, carry 1). If the result needs more bits than are available, an <b>overflow error</b> occurs.</p>
<h3>Shifts</h3>
<ul>
<li><b>Logical shift left</b> by 1 multiplies an unsigned number by 2; shift right divides by 2 (bits falling off are lost). Empty places fill with 0.</li>
<li><b>Arithmetic shift right</b> keeps the sign bit (the leftmost bit) the same, so negative numbers stay negative.</li>
</ul>
<h3>Two's complement</h3>
<p>Represents negative numbers. The leftmost bit has a <b>negative</b> place value (−128 in 8 bits). Range for 8 bits: −128 to +127. To negate: flip every bit, then add 1.</p>
<div class="box box-prac"><span class="box-title">−6 in 8-bit two's complement</span>+6 = 00000110 → flip: 11111001 → add 1: <b>11111010</b>. Check: −128 + 64 + 32 + 16 + 8 + 2 = −6.</div>`,
  quiz: [
    { q: "Binary 1010 in denary is…", o: ["10", "12", "8", "5"], a: 0, e: "" },
    { q: "Denary 15 in hex is…", o: ["F", "E", "10", "15"], a: 0, e: "" },
    { q: "Hex 2A in denary is…", o: ["42", "32", "26", "210"], a: 0, e: "" },
    { q: "How many values can 8 bits represent?", o: ["256", "255", "128", "8"], a: 0, e: "" },
    { q: "1 + 1 in binary is…", o: ["10", "2", "11", "1"], a: 0, e: "" },
    { q: "A logical shift left by 1 place…", o: ["Doubles the number", "Halves it", "Adds 1", "Negates it"], a: 0, e: "" },
    { q: "The 8-bit two's complement range is…", o: ["−128 to 127", "0 to 255", "−127 to 127", "−256 to 255"], a: 0, e: "" },
    { q: "Overflow occurs when…", o: ["A result needs more bits than are available", "A number is negative", "A shift is made", "Hex is used"], a: 0, e: "" },
    { q: "A nibble is…", o: ["4 bits", "8 bits", "2 bits", "16 bits"], a: 0, e: "" }
  ],
  flashcards: [
    ["Place values (8-bit)", "128 64 32 16 8 4 2 1"],
    ["Hex digits", "0–9, A=10 … F=15; one hex digit = 4 bits"],
    ["Overflow", "Result too big for the bits available"],
    ["Logical shift left n", "Multiply by 2ⁿ"],
    ["Arithmetic shift right", "Keeps the sign bit"],
    ["Two's complement negate", "Flip the bits, add 1"],
    ["8-bit range (signed)", "−128 to +127"]
  ]
});

S2Data.add({
  id: "2b", group: 2, title: "Representing text, images and sound",
  summary: "Character sets, bitmap images and sampled sound, and how to calculate file sizes.",
  notes: `
<h3>Text</h3>
<ul>
<li>A <b>character set</b> maps each character to a binary code.</li>
<li><b>7-bit ASCII</b> has 128 characters (English letters, digits, punctuation, control codes). 'A' = 65, 'a' = 97, '0' = 48. Codes are in order, so 'C' = 67.</li>
<li><b>Unicode</b> uses more bits to represent characters from all the world's languages and emoji.</li>
</ul>
<h3>Bitmap images</h3>
<ul>
<li>An image is a grid of <b>pixels</b>. Each pixel's colour is stored as a binary number.</li>
<li><b>Resolution</b> = width × height in pixels. <b>Colour depth</b> = bits per pixel; n bits give 2ⁿ colours.</li>
<li>File size (bits) = width × height × colour depth.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>A 200 × 100 image with 8-bit colour: 200 × 100 × 8 = 160 000 bits ÷ 8 = 20 000 bytes.</div>
<h3>Sound</h3>
<ul>
<li>Analogue sound is <b>sampled</b> at regular intervals and each sample's amplitude stored in binary.</li>
<li><b>Sample rate</b> (Hz) = samples per second. <b>Bit depth</b> = bits per sample.</li>
<li>File size (bits) = sample rate × bit depth × duration (s) × channels.</li>
<li>Higher sample rate and bit depth → more accurate sound, but larger files.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>10 s of mono sound at 44 100 Hz, 16-bit: 44 100 × 16 × 10 = 7 056 000 bits = 882 000 bytes.</div>`,
  quiz: [
    { q: "How many characters can 7-bit ASCII represent?", o: ["128", "256", "127", "65 536"], a: 0, e: "" },
    { q: "If 'A' = 65, what is 'D'?", o: ["68", "67", "69", "100"], a: 0, e: "" },
    { q: "Why was Unicode introduced?", o: ["To represent all languages' characters", "To save space", "For images", "To replace binary"], a: 0, e: "" },
    { q: "Colour depth is…", o: ["Bits per pixel", "Pixels per inch", "Width × height", "Samples per second"], a: 0, e: "" },
    { q: "How many colours can 4-bit colour depth show?", o: ["16", "4", "8", "256"], a: 0, e: "" },
    { q: "Sample rate is measured in…", o: ["Hertz (samples per second)", "Bits", "Pixels", "Bytes"], a: 0, e: "" },
    { q: "Increasing bit depth in sound…", o: ["Improves accuracy, increases file size", "Reduces file size", "Changes the pitch", "Has no effect"], a: 0, e: "" },
    { q: "Image file size in bits =", o: ["width × height × colour depth", "width + height", "colour depth²", "width × height ÷ 8"], a: 0, e: "" },
    { q: "A pixel is…", o: ["The smallest element of an image", "A unit of sound", "A character code", "A type of compression"], a: 0, e: "" }
  ],
  flashcards: [
    ["ASCII", "7-bit, 128 characters; A=65, a=97"],
    ["Unicode", "More bits; all languages and emoji"],
    ["Resolution", "Width × height in pixels"],
    ["Colour depth", "Bits per pixel; 2ⁿ colours"],
    ["Image size (bits)", "W × H × colour depth"],
    ["Sound size (bits)", "Sample rate × bit depth × seconds × channels"]
  ]
});

S2Data.add({
  id: "2c", group: 2, title: "Data storage and compression",
  summary: "Binary units of storage, and lossless and lossy compression including run-length encoding.",
  notes: `
<h3>Units</h3>
<p>Edexcel uses <b>binary multiples</b> of 1024:</p>
<table><tr><th>Unit</th><th>Size</th></tr>
<tr><td>Bit</td><td>0 or 1</td></tr>
<tr><td>Nibble</td><td>4 bits</td></tr>
<tr><td>Byte</td><td>8 bits</td></tr>
<tr><td>Kibibyte (KiB)</td><td>1024 bytes</td></tr>
<tr><td>Mebibyte (MiB)</td><td>1024 KiB</td></tr>
<tr><td>Gibibyte (GiB)</td><td>1024 MiB</td></tr>
<tr><td>Tebibyte (TiB)</td><td>1024 GiB</td></tr></table>
<h3>Compression</h3>
<p>Compression reduces file size, so files use less storage and transfer faster.</p>
<table><tr><th>Type</th><th>How</th><th>Use</th></tr>
<tr><td><b>Lossless</b></td><td>No data lost; the original can be perfectly rebuilt.</td><td>Text, program code, spreadsheets</td></tr>
<tr><td><b>Lossy</b></td><td>Permanently removes data people are unlikely to notice.</td><td>Photos (JPEG), music (MP3), video</td></tr></table>
<h3>Run-length encoding (RLE)</h3>
<p>A lossless method that replaces runs of repeated data with a count and the value.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>AAAAABBBCCCCCCCC → 5A3B8C (16 characters become 6).</div>
<div class="box box-key"><span class="box-title">Remember</span>RLE works well when there are long runs (simple images); it can make data with few repeats bigger.</div>`,
  quiz: [
    { q: "How many bytes in a kibibyte?", o: ["1024", "1000", "8", "512"], a: 0, e: "" },
    { q: "How many bits in a byte?", o: ["8", "4", "16", "1024"], a: 0, e: "" },
    { q: "Which is larger?", o: ["1 GiB", "1 MiB", "1 KiB", "1 byte"], a: 0, e: "" },
    { q: "Lossless compression…", o: ["Allows the original to be rebuilt exactly", "Removes data permanently", "Only works on images", "Increases file size"], a: 0, e: "" },
    { q: "Which file should use lossless compression?", o: ["A program's source code", "A holiday photo", "A song", "A film"], a: 0, e: "" },
    { q: "Lossy compression is suitable for…", o: ["Music and photos", "Bank records", "Program files", "Passwords"], a: 0, e: "" },
    { q: "RLE of 'WWWWBB' is…", o: ["4W2B", "W4B2", "WWWWBB", "6WB"], a: 0, e: "" },
    { q: "RLE works best when data has…", o: ["Long runs of repeated values", "No repeats", "Random values", "Only numbers"], a: 0, e: "" },
    { q: "One benefit of compression is…", o: ["Faster transmission", "Better image quality", "More pixels", "Higher bit depth"], a: 0, e: "" }
  ],
  flashcards: [
    ["Kibibyte", "1024 bytes"],
    ["Mebibyte", "1024 KiB"],
    ["Gibibyte / tebibyte", "1024 MiB / 1024 GiB"],
    ["Lossless", "No data lost; exact original restored"],
    ["Lossy", "Data permanently removed; smaller files"],
    ["RLE", "Store count + value for runs, e.g. 5A3B"]
  ]
});

S2Data.detail("1a", { mistakes: ["Confusing decomposition (breaking down) with abstraction (removing detail)."], tips: ["In trace tables, write a new row each time a variable changes."], fact: "The word 'algorithm' comes from the name of the 9th-century Persian mathematician al-Khwarizmi." });
S2Data.detail("1b", { mistakes: ["Using binary search on an unsorted list."], tips: ["When finding the middle of an even-length list, be consistent: use (low + high) // 2."], fact: "Merge sort was invented by John von Neumann in 1945." });
S2Data.detail("1c", { mistakes: ["Forgetting to list every combination of inputs in a truth table."], tips: ["Fill the input columns like counting in binary: 000, 001, 010…"], fact: "Boolean logic is named after George Boole, who published it in 1854, long before computers existed." });
S2Data.detail("2a", { mistakes: ["Forgetting the final carry in binary addition, or not spotting overflow."], tips: ["Convert hex to binary one digit at a time: each digit becomes 4 bits."], fact: "Hex colour codes on web pages, like #FF0000 for red, use two hex digits for each of red, green and blue." });
S2Data.detail("2b", { mistakes: ["Forgetting to divide by 8 when the answer must be in bytes."], tips: ["Write the formula first, then substitute: examiners give method marks."], fact: "CD audio uses a sample rate of 44 100 Hz and 16-bit depth." });
S2Data.detail("2c", { mistakes: ["Using 1000 instead of 1024 for Edexcel's kibibytes and mebibytes."], tips: ["Lossless for anything that must be exact; lossy only where small losses aren't noticed."], fact: "The JPEG format, created in 1992, can shrink photos to a tenth of their size with little visible loss." });
