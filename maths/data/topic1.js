/* Maths² — Number */

S2Data.add({
  id: "1a", group: 1, title: "Place value, rounding and estimation",
  summary: "Ordering numbers, rounding to decimal places and significant figures, estimating, and error intervals.",
  notes: `
<h3>Place value and ordering</h3>
<p>Each digit's value depends on its position: thousands, hundreds, tens, units, tenths, hundredths… To order decimals, line up the decimal points and compare digit by digit. Negative numbers: −7 is less than −2.</p>
<h3>Rounding</h3>
<ul>
<li><b>Decimal places (d.p.)</b>: count digits after the decimal point. 3.4762 to 2 d.p. = 3.48.</li>
<li><b>Significant figures (s.f.)</b>: start counting from the first non-zero digit. 0.004 862 to 2 s.f. = 0.0049; 48 620 to 2 s.f. = 49 000.</li>
<li>Look at the next digit: 5 or more rounds up.</li>
</ul>
<h3>Estimation</h3>
<p>Round every number to <b>1 significant figure</b>, then calculate.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Estimate (6.87 × 41.2) ÷ 0.48.<br>≈ (7 × 40) ÷ 0.5 = 280 ÷ 0.5 = <b>560</b>.</div>
<h3>Error intervals and bounds</h3>
<p>A length is 7.4 cm to 1 d.p. The <b>error interval</b> is 7.35 ≤ l &lt; 7.45 (half the unit either side).</p>
<p>Truncation: 7.4 truncated to 1 d.p. means 7.4 ≤ x &lt; 7.5.</p>
<div class="box box-c"><span class="box-title">Higher: calculations with bounds</span>Maximum of a + b: upper + upper. Maximum of a − b: upper a − lower b. Maximum of a ÷ b: upper a ÷ lower b. Give a final answer to a suitable accuracy where the bounds agree.</div>
`,
  quiz: [
    { q: "Round 3.4762 to 2 decimal places.", o: ["3.48", "3.47", "3.5", "3.476"], a: 0, e: "" },
    { q: "Round 0.004862 to 2 significant figures.", o: ["0.0049", "0.0048", "0.00", "0.005"], a: 0, e: "" },
    { q: "Round 48 620 to 2 significant figures.", o: ["49 000", "48 000", "48 600", "49"], a: 0, e: "" },
    { q: "Estimate 6.87 × 41.2.", o: ["280", "240", "2800", "320"], a: 0, e: "7 × 40." },
    { q: "Which is largest?", o: ["0.61", "0.6", "0.599", "0.16"], a: 0, e: "" },
    { q: "A length is 7.4 cm to 1 d.p. What's the lower bound?", o: ["7.35 cm", "7.3 cm", "7.45 cm", "7.4 cm"], a: 0, e: "" },
    { q: "x = 50 to the nearest 10. The error interval is…", o: ["45 ≤ x < 55", "40 ≤ x < 60", "49.5 ≤ x < 50.5", "45 < x ≤ 55"], a: 0, e: "" },
    { q: "Higher: a = 8 (nearest unit), b = 2 (nearest unit). Upper bound of a ÷ b?", o: ["8.5 ÷ 1.5", "8.5 ÷ 2.5", "7.5 ÷ 1.5", "8 ÷ 2"], a: 0, e: "Divide by the smallest possible b." },
    { q: "Which is smallest?", o: ["−7", "−2", "0", "3"], a: 0, e: "" }
  ],
  flashcards: [
    ["Decimal places", "Digits after the decimal point"],
    ["Significant figures", "Count from the first non-zero digit"],
    ["Rounding rule", "Next digit 5 or more: round up"],
    ["Estimating", "Round each number to 1 s.f. first"],
    ["Error interval for 7.4 (1 d.p.)", "7.35 ≤ l < 7.45"],
    ["Truncation", "Chop off digits without rounding"],
    ["Upper bound of a − b", "Upper a − lower b"],
    ["Upper bound of a ÷ b", "Upper a ÷ lower b"]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Factors, multiples and primes",
  summary: "Prime factorisation, highest common factor and lowest common multiple.",
  notes: `
<h3>Key words</h3>
<ul>
<li><b>Factor</b>: divides into a number exactly (factors of 12: 1, 2, 3, 4, 6, 12).</li>
<li><b>Multiple</b>: in the number's times table (multiples of 6: 6, 12, 18…).</li>
<li><b>Prime</b>: exactly two factors, 1 and itself (2, 3, 5, 7, 11, 13…). 1 is not prime.</li>
</ul>
<h3>Prime factorisation</h3>
<p>Use a factor tree, then write as a product of primes in index form.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>360 = 2 × 180 = 2 × 2 × 90 = … = <b>2<sup>3</sup> × 3<sup>2</sup> × 5</b>.</div>
<h3>HCF and LCM</h3>
<ul>
<li><b>HCF</b> (highest common factor): multiply the primes common to both, using the lower power.</li>
<li><b>LCM</b> (lowest common multiple): multiply every prime that appears, using the higher power.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>60 = 2<sup>2</sup> × 3 × 5 and 84 = 2<sup>2</sup> × 3 × 7.<br>HCF = 2<sup>2</sup> × 3 = <b>12</b>. LCM = 2<sup>2</sup> × 3 × 5 × 7 = <b>420</b>.</div>
<p>A Venn diagram of prime factors works too: HCF = the overlap; LCM = everything.</p>
<p>Use LCM for "when will they next happen together" problems, and HCF for "biggest equal groups" problems.</p>
`,
  quiz: [
    { q: "Which is a prime number?", o: ["29", "27", "21", "1"], a: 0, e: "" },
    { q: "360 as a product of primes is…", o: ["2³ × 3² × 5", "2² × 3³ × 5", "2³ × 45", "6² × 10"], a: 0, e: "" },
    { q: "HCF of 60 and 84?", o: ["12", "6", "420", "4"], a: 0, e: "" },
    { q: "LCM of 6 and 8?", o: ["24", "48", "2", "14"], a: 0, e: "" },
    { q: "Which is a factor of 36?", o: ["9", "8", "5", "72"], a: 0, e: "" },
    { q: "Is 1 a prime number?", o: ["No: it has only one factor", "Yes", "Only sometimes", "Yes, it's the smallest prime"], a: 0, e: "" },
    { q: "Buses every 12 and 18 minutes leave together. When next together?", o: ["36 minutes", "6 minutes", "30 minutes", "216 minutes"], a: 0, e: "LCM." },
    { q: "LCM of 2² × 3 and 2 × 3² × 5?", o: ["2² × 3² × 5", "2 × 3", "2³ × 3³ × 5", "2² × 3"], a: 0, e: "Highest powers." },
    { q: "Which is a multiple of 7?", o: ["63", "17", "27", "57"], a: 0, e: "" }
  ],
  flashcards: [
    ["Factor", "Divides exactly into a number"],
    ["Multiple", "In a number's times table"],
    ["Prime number", "Exactly two factors: 1 and itself"],
    ["Prime factorisation", "Write as a product of primes, e.g. 360 = 2³ × 3² × 5"],
    ["HCF", "Common primes, lower powers"],
    ["LCM", "All primes, higher powers"],
    ["When to use LCM", "'When do they happen together again?'"],
    ["When to use HCF", "'Largest equal groups'"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Fractions, decimals and percentages",
  summary: "Calculating with fractions, converting between forms, percentages of amounts and recurring decimals.",
  notes: `
<h3>Fractions</h3>
<ul>
<li><b>Add/subtract</b>: use a common denominator. 2/3 + 1/4 = 8/12 + 3/12 = 11/12.</li>
<li><b>Multiply</b>: top × top, bottom × bottom. 2/3 × 3/5 = 6/15 = 2/5.</li>
<li><b>Divide</b>: flip the second and multiply (KFC: keep, flip, change). 3/4 ÷ 1/2 = 3/4 × 2 = 3/2.</li>
<li>Mixed numbers: convert to improper fractions first. 2⅓ = 7/3.</li>
<li>Fraction of an amount: ÷ bottom, × top. 3/5 of 40 = 24.</li>
</ul>
<h3>Converting</h3>
<p>Fraction → decimal: divide top by bottom. Decimal → percentage: × 100. 3/8 = 0.375 = 37.5%.</p>
<h3>Percentages</h3>
<ul>
<li>Percentage of an amount: 15% of 80 = 0.15 × 80 = 12.</li>
<li>One number as a percentage of another: (part ÷ whole) × 100.</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: recurring decimals to fractions</span>x = 0.272727…<br>100x = 27.2727…<br>Subtract: 99x = 27, so x = 27/99 = <b>3/11</b>.</div>
<p>A fraction in its simplest form gives a terminating decimal only if the denominator's prime factors are just 2s and 5s.</p>
`,
  quiz: [
    { q: "2/3 + 1/4 = …", o: ["11/12", "3/7", "3/12", "2/12"], a: 0, e: "" },
    { q: "3/4 ÷ 1/2 = …", o: ["3/2", "3/8", "1/2", "6/4 ÷ 2"], a: 0, e: "" },
    { q: "2/3 × 3/5 = …", o: ["2/5", "5/8", "6/8", "9/10"], a: 0, e: "" },
    { q: "3/8 as a percentage?", o: ["37.5%", "38%", "3.8%", "0.375%"], a: 0, e: "" },
    { q: "15% of 80?", o: ["12", "15", "1.2", "120"], a: 0, e: "" },
    { q: "2⅓ as an improper fraction?", o: ["7/3", "5/3", "6/3", "2/3"], a: 0, e: "" },
    { q: "Higher: 0.2727… as a fraction?", o: ["3/11", "27/100", "2/7", "1/4"], a: 0, e: "" },
    { q: "Which fraction gives a terminating decimal?", o: ["7/20", "1/3", "2/7", "5/6"], a: 0, e: "20 = 2² × 5." },
    { q: "18 as a percentage of 72?", o: ["25%", "18%", "40%", "4%"], a: 0, e: "" }
  ],
  flashcards: [
    ["Adding fractions", "Common denominator first"],
    ["Multiplying fractions", "Top × top, bottom × bottom"],
    ["Dividing fractions", "Keep, flip, change (× by the reciprocal)"],
    ["Fraction of an amount", "÷ by the denominator, × by the numerator"],
    ["Fraction → decimal", "Divide top by bottom"],
    ["Percentage of an amount", "Convert to decimal and multiply"],
    ["A as a % of B", "(A ÷ B) × 100"],
    ["Recurring decimal → fraction", "Multiply by 10ⁿ, subtract to cancel the recurring part"],
    ["Terminating decimals", "Denominator has only prime factors 2 and 5"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Powers, roots, standard form and surds",
  summary: "Index laws, negative and fractional indices, standard form and simplifying surds.",
  notes: `
<h3>Index laws</h3>
<table>
<tr><th>Rule</th><th>Example</th></tr>
<tr><td>a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></td><td>2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup></td></tr>
<tr><td>a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></td><td>5<sup>6</sup> ÷ 5<sup>2</sup> = 5<sup>4</sup></td></tr>
<tr><td>(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></td><td>(3<sup>2</sup>)<sup>3</sup> = 3<sup>6</sup></td></tr>
<tr><td>a<sup>0</sup> = 1</td><td>7<sup>0</sup> = 1</td></tr>
<tr><td>a<sup>−n</sup> = 1/a<sup>n</sup></td><td>2<sup>−3</sup> = 1/8</td></tr>
<tr><td>a<sup>1/n</sup> = ⁿ√a; a<sup>m/n</sup> = (ⁿ√a)<sup>m</sup></td><td>8<sup>2/3</sup> = 2<sup>2</sup> = 4</td></tr>
</table>
<p>Negative and fractional indices are Higher.</p>
<h3>Standard form</h3>
<p>A × 10<sup>n</sup>, where 1 ≤ A &lt; 10. 45 000 = 4.5 × 10<sup>4</sup>; 0.000 32 = 3.2 × 10<sup>−4</sup>.</p>
<p>Multiply: multiply the numbers, add the powers. (3 × 10<sup>4</sup>) × (4 × 10<sup>5</sup>) = 12 × 10<sup>9</sup> = 1.2 × 10<sup>10</sup>.</p>
<h3>Surds (Higher)</h3>
<ul>
<li>√(ab) = √a × √b; simplify by finding a square factor: √48 = √16 × √3 = 4√3.</li>
<li>Collect like surds: 2√3 + 5√3 = 7√3.</li>
<li><b>Rationalise the denominator</b>: 6/√3 = 6√3/3 = 2√3. For 1/(2 + √3), multiply top and bottom by (2 − √3).</li>
</ul>
`,
  quiz: [
    { q: "2³ × 2⁴ = …", o: ["2⁷", "2¹²", "4⁷", "2¹"], a: 0, e: "" },
    { q: "(3²)³ = …", o: ["3⁶", "3⁵", "9⁵", "3⁸"], a: 0, e: "" },
    { q: "7⁰ = …", o: ["1", "0", "7", "Undefined"], a: 0, e: "" },
    { q: "Higher: 2⁻³ = …", o: ["1/8", "−8", "−6", "8"], a: 0, e: "" },
    { q: "Higher: 8^(2/3) = …", o: ["4", "16/3", "2", "64"], a: 0, e: "" },
    { q: "45 000 in standard form?", o: ["4.5 × 10⁴", "45 × 10³", "4.5 × 10³", "0.45 × 10⁵"], a: 0, e: "" },
    { q: "0.00032 in standard form?", o: ["3.2 × 10⁻⁴", "3.2 × 10⁴", "32 × 10⁻⁵", "3.2 × 10⁻³"], a: 0, e: "" },
    { q: "Higher: √48 simplified?", o: ["4√3", "2√12", "16√3", "3√4"], a: 0, e: "" },
    { q: "Higher: 6/√3 rationalised?", o: ["2√3", "6√3", "3√2", "√3/6"], a: 0, e: "" }
  ],
  flashcards: [
    ["aᵐ × aⁿ", "aᵐ⁺ⁿ"],
    ["aᵐ ÷ aⁿ", "aᵐ⁻ⁿ"],
    ["(aᵐ)ⁿ", "aᵐⁿ"],
    ["a⁰", "1"],
    ["a⁻ⁿ", "1/aⁿ"],
    ["a^(m/n)", "(ⁿ√a)ᵐ"],
    ["Standard form", "A × 10ⁿ with 1 ≤ A < 10"],
    ["Simplifying surds", "Find a square factor: √48 = 4√3"],
    ["Rationalising", "Multiply top and bottom by the surd (or its conjugate)"]
  ]
});

S2Data.detail("1a", { mistakes: ["Counting leading zeros as significant figures. In 0.0049, the first significant figure is 4."], tips: ["In estimation questions, show the rounded numbers you used: that's where the marks are."], fact: "The Babylonians used base 60, which is why there are 60 minutes in an hour." });
S2Data.detail("1b", { mistakes: ["Giving the product of primes as a list (2, 2, 2, 3, 3, 5). Write it as a product: 2³ × 3² × 5."], tips: ["Check your prime factorisation by multiplying it back out."], fact: "The largest known prime has over 41 million digits." });
S2Data.detail("1c", { mistakes: ["Adding fractions by adding the tops and the bottoms: 1/2 + 1/3 ≠ 2/5."], tips: ["On non-calculator papers, simplify before multiplying fractions by cancelling common factors."], fact: "Ancient Egyptians wrote almost all fractions as sums of unit fractions like 1/2 + 1/4." });
S2Data.detail("1d", { mistakes: ["Writing 45 × 10³ as standard form. The first number must be between 1 and 10."], tips: ["For fractional indices, take the root first, then the power: the numbers stay small."], fact: "The mass of the Earth is about 5.97 × 10²⁴ kg." });
