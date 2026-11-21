/* Maths² — Number */

S2Data.add({
  id: "1a", group: 1, title: "Place value, rounding and estimation",
  summary: "Ordering numbers, rounding to decimal places and significant figures, estimating, and error intervals.",
  notes: R`
<h3>Place value and ordering</h3>
<p>Each digit's value depends on its position: thousands, hundreds, tens, units, tenths, hundredths… To order decimals, line up the decimal points and compare digit by digit from the left. For negative numbers, further from zero means smaller: \(-7 < -2\).</p>
<h3>Rounding</h3>
<ul>
<li><b>Decimal places (d.p.)</b>: count the digits after the decimal point. \(3.47\underline{6}2 \to 3.48\) (2 d.p.).</li>
<li><b>Significant figures (s.f.)</b>: start counting at the first non-zero digit. \(0.004\,862 \to 0.0049\) and \(48\,620 \to 49\,000\) (both 2 s.f.).</li>
<li>Look at the <b>next</b> digit: 5 or more rounds up; 4 or less stays.</li>
<li>Keep the size of the number: \(48\,620\) to 2 s.f. is \(49\,000\), not 49.</li>
</ul>
<h3>Estimation</h3>
<p>Round every number to <b>1 significant figure</b>, then calculate. Show the rounded numbers.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Estimate \(\dfrac{6.87 \times 41.2}{0.48}\).
<ol><li>Round to 1 s.f.: \(\dfrac{7 \times 40}{0.5}\).</li>
<li>Top: \(7 \times 40 = 280\).</li>
<li>Dividing by 0.5 is the same as doubling: \(280 \div 0.5 = 560\).</li></ol></div>
<h3>Error intervals</h3>
<p>A length \(l\) is 7.4 cm to 1 d.p. It could be up to half a unit (0.05) either side:</p>
<p>\[7.35 \le l < 7.45\]</p>
<p>The lower bound uses \(\le\); the upper bound uses \(<\) (7.45 would round up to 7.5).</p>
<p><b>Truncation</b> chops digits off without rounding: if \(x\) truncated to 1 d.p. is 7.4, then \(7.4 \le x < 7.5\).</p>
<div class="box box-c"><span class="box-title">Higher: calculations with bounds</span>
<table><tr><th>To find the maximum of…</th><th>Use</th></tr>
<tr><td>\(a + b\)</td><td>upper \(a\) + upper \(b\)</td></tr>
<tr><td>\(a - b\)</td><td>upper \(a\) − lower \(b\)</td></tr>
<tr><td>\(a \times b\)</td><td>upper \(a\) × upper \(b\)</td></tr>
<tr><td>\(a \div b\)</td><td>upper \(a\) ÷ lower \(b\)</td></tr></table>
Swap upper and lower for the minimum. Give a final answer to the accuracy where the upper and lower bounds agree.</div>
`,
  quiz: [
    { q: "Round 3.4762 to 2 decimal places.", o: ["3.48", "3.47", "3.5", "3.476"], a: 0, e: "The third decimal digit is 6, which is 5 or more, so round 3.47 up to 3.48." },
    { q: "Round 0.004862 to 2 significant figures.", o: ["0.0049", "0.0048", "0.00", "0.005"], a: 0, e: "The first significant figure is 4. The digit after 48 is 6, so round up to 49: 0.0049." },
    { q: "Round 48 620 to 2 significant figures.", o: ["49 000", "48 000", "48 600", "49"], a: 0, e: "The third digit is 6, so 48 rounds up to 49. Fill with zeros to keep the size: 49 000." },
    { q: R`Estimate \(6.87 \times 41.2\).`, o: ["280", "240", "2800", "320"], a: 0, e: R`Round to 1 s.f.: \(7 \times 40 = 280\).` },
    { q: "Which is largest?", o: ["0.61", "0.6", "0.599", "0.16"], a: 0, e: "Compare tenths first: 0.6, 0.6, 0.5, 0.1. Then hundredths: 0.61 beats 0.60." },
    { q: "A length is 7.4 cm to 1 d.p. What's the lower bound?", o: ["7.35 cm", "7.3 cm", "7.45 cm", "7.4 cm"], a: 0, e: "Half of 0.1 is 0.05, so the lower bound is 7.4 − 0.05." },
    { q: R`\(x = 50\) to the nearest 10. The error interval is…`, o: [R`\(45 \le x < 55\)`, R`\(40 \le x < 60\)`, R`\(49.5 \le x < 50.5\)`, R`\(45 < x \le 55\)`], a: 0, e: R`Half of 10 is 5, so \(50 \pm 5\), with \(\le\) at the bottom and \(<\) at the top.` },
    { q: R`Higher: \(a = 8\), \(b = 2\) (both to the nearest unit). Upper bound of \(a \div b\)?`, o: [R`\(8.5 \div 1.5\)`, R`\(8.5 \div 2.5\)`, R`\(7.5 \div 1.5\)`, R`\(8 \div 2\)`], a: 0, e: "Biggest top divided by the smallest bottom gives the biggest answer." },
    { q: "Which is smallest?", o: ["−7", "−2", "0", "3"], a: 0, e: "−7 is furthest below zero on the number line." }
  ],
  flashcards: [
    ["Decimal places", "Digits after the decimal point"],
    ["Significant figures", "Count from the first non-zero digit"],
    ["Rounding rule", "Next digit 5 or more: round up"],
    ["Estimating", "Round each number to 1 s.f. first"],
    ["Error interval for 7.4 (1 d.p.)", R`\(7.35 \le l < 7.45\)`],
    ["Truncation", "Chop off digits without rounding"],
    [R`Upper bound of \(a - b\)`, R`Upper \(a\) − lower \(b\)`],
    [R`Upper bound of \(a \div b\)`, R`Upper \(a\) ÷ lower \(b\)`]
  ]
});

S2Data.add({
  id: "1b", group: 1, title: "Factors, multiples and primes",
  summary: "Prime factorisation, highest common factor and lowest common multiple.",
  notes: R`
<h3>Key words</h3>
<ul>
<li><b>Factor</b>: divides into a number exactly. Factors of 12: 1, 2, 3, 4, 6, 12.</li>
<li><b>Multiple</b>: in the number's times table. Multiples of 6: 6, 12, 18, …</li>
<li><b>Prime</b>: exactly two factors, 1 and itself: 2, 3, 5, 7, 11, 13, … (1 is <b>not</b> prime; 2 is the only even prime.)</li>
</ul>
<h3>Prime factorisation</h3>
<p>Split the number with a factor tree until every branch ends in a prime, then write the primes as a product using powers.</p>
<div class="box box-prac"><span class="box-title">Worked example</span>Write 360 as a product of primes.
<ol><li>\(360 = 2 \times 180 = 2 \times 2 \times 90 = 2 \times 2 \times 2 \times 45\).</li>
<li>\(45 = 3 \times 3 \times 5\).</li>
<li>So \(360 = 2^3 \times 3^2 \times 5\).</li></ol></div>
<h3>HCF and LCM</h3>
<ul>
<li><b>HCF</b> (highest common factor): multiply the primes in <b>both</b>, using the <b>lower</b> power.</li>
<li><b>LCM</b> (lowest common multiple): multiply <b>every</b> prime that appears, using the <b>higher</b> power.</li>
</ul>
<div class="box box-prac"><span class="box-title">Worked example</span>\(60 = 2^2 \times 3 \times 5\) and \(84 = 2^2 \times 3 \times 7\).
<ol><li>Common primes: \(2^2\) and 3, so HCF \(= 2^2 \times 3 = 12\).</li>
<li>All primes: \(2^2\), 3, 5, 7, so LCM \(= 2^2 \times 3 \times 5 \times 7 = 420\).</li></ol></div>
<p>A Venn diagram of prime factors works too: HCF = product of the overlap; LCM = product of everything.</p>
<p>Use the LCM for "when will they next happen together?" and the HCF for "biggest equal groups".</p>
`,
  quiz: [
    { q: "Which is a prime number?", o: ["29", "27", "21", "1"], a: 0, e: R`29 has only the factors 1 and 29. \(27 = 3 \times 9\), \(21 = 3 \times 7\), and 1 isn't prime.` },
    { q: "360 as a product of primes is…", o: [R`\(2^3 \times 3^2 \times 5\)`, R`\(2^2 \times 3^3 \times 5\)`, R`\(2^3 \times 45\)`, R`\(6^2 \times 10\)`], a: 0, e: R`\(8 \times 9 \times 5 = 360\), and 2, 3, 5 are all prime.` },
    { q: "HCF of 60 and 84?", o: ["12", "6", "420", "4"], a: 0, e: R`Common primes with lower powers: \(2^2 \times 3 = 12\).` },
    { q: "LCM of 6 and 8?", o: ["24", "48", "2", "14"], a: 0, e: R`\(6 = 2 \times 3\), \(8 = 2^3\); highest powers: \(2^3 \times 3 = 24\).` },
    { q: "Which is a factor of 36?", o: ["9", "8", "5", "72"], a: 0, e: R`\(36 = 9 \times 4\). 72 is a multiple, not a factor.` },
    { q: "Is 1 a prime number?", o: ["No: it has only one factor", "Yes", "Only sometimes", "Yes, it's the smallest prime"], a: 0, e: "A prime needs exactly two factors. The smallest prime is 2." },
    { q: "Buses every 12 and 18 minutes leave together. When are they next together?", o: ["36 minutes", "6 minutes", "30 minutes", "216 minutes"], a: 0, e: "LCM of 12 and 18: 12, 24, 36… and 18, 36. So 36 minutes." },
    { q: R`LCM of \(2^2 \times 3\) and \(2 \times 3^2 \times 5\)?`, o: [R`\(2^2 \times 3^2 \times 5\)`, R`\(2 \times 3\)`, R`\(2^3 \times 3^3 \times 5\)`, R`\(2^2 \times 3\)`], a: 0, e: "Take every prime with its highest power." },
    { q: "Which is a multiple of 7?", o: ["63", "17", "27", "57"], a: 0, e: R`\(7 \times 9 = 63\).` }
  ],
  flashcards: [
    ["Factor", "Divides exactly into a number"],
    ["Multiple", "In a number's times table"],
    ["Prime number", "Exactly two factors: 1 and itself"],
    ["Prime factorisation", R`Write as a product of primes, e.g. \(360 = 2^3 \times 3^2 \times 5\)`],
    ["HCF", "Common primes, lower powers"],
    ["LCM", "All primes, higher powers"],
    ["When to use LCM", "'When do they happen together again?'"],
    ["When to use HCF", "'Largest equal groups'"]
  ]
});

S2Data.add({
  id: "1c", group: 1, title: "Fractions, decimals and percentages",
  summary: "Calculating with fractions, converting between forms, percentages of amounts and recurring decimals.",
  notes: R`
<h3>Fractions</h3>
<table><tr><th>Operation</th><th>Method</th><th>Example</th></tr>
<tr><td>Add / subtract</td><td>Common denominator first</td><td>\(\frac23 + \frac14 = \frac{8}{12} + \frac{3}{12} = \frac{11}{12}\)</td></tr>
<tr><td>Multiply</td><td>Top × top, bottom × bottom</td><td>\(\frac23 \times \frac35 = \frac{6}{15} = \frac25\)</td></tr>
<tr><td>Divide</td><td>Keep, flip, change</td><td>\(\frac34 \div \frac12 = \frac34 \times \frac21 = \frac32\)</td></tr></table>
<ul>
<li>Mixed numbers: convert to improper fractions first. \(2\frac13 = \frac{2 \times 3 + 1}{3} = \frac73\).</li>
<li>Fraction of an amount: divide by the bottom, multiply by the top. \(\frac35\) of 40: \(40 \div 5 = 8\), \(8 \times 3 = 24\).</li>
</ul>
<h3>Converting</h3>
<p>Fraction → decimal: divide the top by the bottom. Decimal → percentage: multiply by 100. \(\frac38 = 0.375 = 37.5\%\).</p>
<h3>Percentages</h3>
<ul>
<li>Percentage of an amount: \(15\%\) of 80 \(= 0.15 \times 80 = 12\).</li>
<li>One number as a percentage of another: \(\dfrac{\text{part}}{\text{whole}} \times 100\). E.g. 18 out of 72 is \(\frac{18}{72} \times 100 = 25\%\).</li>
</ul>
<div class="box box-c"><span class="box-title">Higher: recurring decimals to fractions</span>Write \(0.\dot2\dot7\) as a fraction.
<ol><li>Let \(x = 0.272727\ldots\)</li>
<li>Two digits repeat, so multiply by 100: \(100x = 27.272727\ldots\)</li>
<li>Subtract to cancel the recurring part: \(99x = 27\).</li>
<li>\(x = \frac{27}{99} = \frac{3}{11}\).</li></ol></div>
<p>A fraction in its simplest form gives a terminating decimal only if the denominator's prime factors are just 2s and 5s. E.g. \(\frac{7}{20}\) terminates because \(20 = 2^2 \times 5\).</p>
`,
  quiz: [
    { q: R`\(\frac23 + \frac14 = \ ?\)`, o: [R`\(\frac{11}{12}\)`, R`\(\frac37\)`, R`\(\frac{3}{12}\)`, R`\(\frac{2}{12}\)`], a: 0, e: R`Common denominator 12: \(\frac{8}{12} + \frac{3}{12} = \frac{11}{12}\).` },
    { q: R`\(\frac34 \div \frac12 = \ ?\)`, o: [R`\(\frac32\)`, R`\(\frac38\)`, R`\(\frac12\)`, R`\(\frac64 \div 2\)`], a: 0, e: R`Flip the second fraction and multiply: \(\frac34 \times 2 = \frac64 = \frac32\).` },
    { q: R`\(\frac23 \times \frac35 = \ ?\)`, o: [R`\(\frac25\)`, R`\(\frac58\)`, R`\(\frac68\)`, R`\(\frac{9}{10}\)`], a: 0, e: R`\(\frac{2 \times 3}{3 \times 5} = \frac{6}{15} = \frac25\).` },
    { q: R`\(\frac38\) as a percentage?`, o: ["37.5%", "38%", "3.8%", "0.375%"], a: 0, e: R`\(3 \div 8 = 0.375\), then \(\times 100\).` },
    { q: "15% of 80?", o: ["12", "15", "1.2", "120"], a: 0, e: R`10% is 8 and 5% is 4, so 15% is 12.` },
    { q: R`\(2\frac13\) as an improper fraction?`, o: [R`\(\frac73\)`, R`\(\frac53\)`, R`\(\frac63\)`, R`\(\frac23\)`], a: 0, e: R`\(2 = \frac63\), plus \(\frac13\) makes \(\frac73\).` },
    { q: R`Higher: \(0.\dot2\dot7\) as a fraction?`, o: [R`\(\frac{3}{11}\)`, R`\(\frac{27}{100}\)`, R`\(\frac27\)`, R`\(\frac14\)`], a: 0, e: R`\(99x = 27\), so \(x = \frac{27}{99} = \frac{3}{11}\).` },
    { q: "Which fraction gives a terminating decimal?", o: [R`\(\frac{7}{20}\)`, R`\(\frac13\)`, R`\(\frac27\)`, R`\(\frac56\)`], a: 0, e: R`\(20 = 2^2 \times 5\): only 2s and 5s.` },
    { q: "18 as a percentage of 72?", o: ["25%", "18%", "40%", "4%"], a: 0, e: R`\(\frac{18}{72} = \frac14 = 25\%\).` }
  ],
  flashcards: [
    ["Adding fractions", "Common denominator first"],
    ["Multiplying fractions", "Top × top, bottom × bottom"],
    ["Dividing fractions", "Keep, flip, change (× by the reciprocal)"],
    ["Fraction of an amount", "÷ by the denominator, × by the numerator"],
    ["Fraction → decimal", "Divide top by bottom"],
    ["Percentage of an amount", "Convert to a decimal and multiply"],
    ["A as a % of B", R`\(\dfrac{A}{B} \times 100\)`],
    ["Recurring decimal → fraction", R`Multiply by \(10^n\) and subtract to cancel the recurring part`],
    ["Terminating decimals", "Denominator has only prime factors 2 and 5"]
  ]
});

S2Data.add({
  id: "1d", group: 1, title: "Powers, roots, standard form and surds",
  summary: "Index laws, negative and fractional indices, standard form and simplifying surds.",
  notes: R`
<h3>Index laws</h3>
<table>
<tr><th>Rule</th><th>Example</th></tr>
<tr><td>\(a^m \times a^n = a^{m+n}\)</td><td>\(2^3 \times 2^4 = 2^7\)</td></tr>
<tr><td>\(a^m \div a^n = a^{m-n}\)</td><td>\(5^6 \div 5^2 = 5^4\)</td></tr>
<tr><td>\((a^m)^n = a^{mn}\)</td><td>\((3^2)^3 = 3^6\)</td></tr>
<tr><td>\(a^0 = 1\)</td><td>\(7^0 = 1\)</td></tr>
<tr><td>\(a^{-n} = \dfrac{1}{a^n}\)</td><td>\(2^{-3} = \dfrac18\)</td></tr>
<tr><td>\(a^{\frac1n} = \sqrt[n]{a}\), \(a^{\frac mn} = \left(\sqrt[n]{a}\right)^m\)</td><td>\(8^{\frac23} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4\)</td></tr>
</table>
<p>Negative and fractional indices are Higher. The laws only work when the <b>base is the same</b>.</p>
<h3>Standard form</h3>
<p>\(A \times 10^n\), where \(1 \le A < 10\) and \(n\) is an integer.</p>
<ul><li>\(45\,000 = 4.5 \times 10^4\) (big numbers: positive power).</li>
<li>\(0.000\,32 = 3.2 \times 10^{-4}\) (small numbers: negative power).</li></ul>
<div class="box box-prac"><span class="box-title">Worked example</span>\((3 \times 10^4) \times (4 \times 10^5)\)
<ol><li>Multiply the numbers: \(3 \times 4 = 12\). Add the powers: \(10^{4+5} = 10^9\).</li>
<li>\(12 \times 10^9\) isn't standard form (12 > 10), so write \(12 = 1.2 \times 10\).</li>
<li>Answer: \(1.2 \times 10^{10}\).</li></ol></div>
<h3>Surds (Higher)</h3>
<ul>
<li>\(\sqrt{ab} = \sqrt a \times \sqrt b\). Simplify by finding the largest square factor: \(\sqrt{48} = \sqrt{16 \times 3} = 4\sqrt3\).</li>
<li>Collect like surds: \(2\sqrt3 + 5\sqrt3 = 7\sqrt3\).</li>
<li><b>Rationalise the denominator</b>: \(\dfrac{6}{\sqrt3} = \dfrac{6\sqrt3}{3} = 2\sqrt3\). For \(\dfrac{1}{2 + \sqrt3}\), multiply top and bottom by \(2 - \sqrt3\): the bottom becomes \(4 - 3 = 1\).</li>
</ul>
`,
  quiz: [
    { q: R`\(2^3 \times 2^4 = \ ?\)`, o: [R`\(2^7\)`, R`\(2^{12}\)`, R`\(4^7\)`, R`\(2^1\)`], a: 0, e: "Same base, multiplying: add the powers." },
    { q: R`\((3^2)^3 = \ ?\)`, o: [R`\(3^6\)`, R`\(3^5\)`, R`\(9^5\)`, R`\(3^8\)`], a: 0, e: "A power of a power: multiply the powers." },
    { q: R`\(7^0 = \ ?\)`, o: ["1", "0", "7", "Undefined"], a: 0, e: "Anything (except 0) to the power 0 is 1." },
    { q: R`Higher: \(2^{-3} = \ ?\)`, o: [R`\(\frac18\)`, "−8", "−6", "8"], a: 0, e: R`A negative power means the reciprocal: \(\frac{1}{2^3}\).` },
    { q: R`Higher: \(8^{\frac23} = \ ?\)`, o: ["4", R`\(\frac{16}{3}\)`, "2", "64"], a: 0, e: R`Cube root first: \(\sqrt[3]8 = 2\). Then square: 4.` },
    { q: "45 000 in standard form?", o: [R`\(4.5 \times 10^4\)`, R`\(45 \times 10^3\)`, R`\(4.5 \times 10^3\)`, R`\(0.45 \times 10^5\)`], a: 0, e: R`The decimal point moves 4 places, and \(A\) must be between 1 and 10.` },
    { q: "0.00032 in standard form?", o: [R`\(3.2 \times 10^{-4}\)`, R`\(3.2 \times 10^4\)`, R`\(32 \times 10^{-5}\)`, R`\(3.2 \times 10^{-3}\)`], a: 0, e: "The point moves 4 places right, so the power is −4." },
    { q: R`Higher: \(\sqrt{48}\) simplified?`, o: [R`\(4\sqrt3\)`, R`\(2\sqrt{12}\)`, R`\(16\sqrt3\)`, R`\(3\sqrt4\)`], a: 0, e: R`\(48 = 16 \times 3\), and \(\sqrt{16} = 4\).` },
    { q: R`Higher: \(\dfrac{6}{\sqrt3}\) rationalised?`, o: [R`\(2\sqrt3\)`, R`\(6\sqrt3\)`, R`\(3\sqrt2\)`, R`\(\dfrac{\sqrt3}{6}\)`], a: 0, e: R`Multiply top and bottom by \(\sqrt3\): \(\frac{6\sqrt3}{3} = 2\sqrt3\).` }
  ],
  flashcards: [
    [R`\(a^m \times a^n\)`, R`\(a^{m+n}\)`],
    [R`\(a^m \div a^n\)`, R`\(a^{m-n}\)`],
    [R`\((a^m)^n\)`, R`\(a^{mn}\)`],
    [R`\(a^0\)`, "1"],
    [R`\(a^{-n}\)`, R`\(\dfrac{1}{a^n}\)`],
    [R`\(a^{\frac mn}\)`, R`\(\left(\sqrt[n]{a}\right)^m\)`],
    ["Standard form", R`\(A \times 10^n\) with \(1 \le A < 10\)`],
    ["Simplifying surds", R`Find a square factor: \(\sqrt{48} = 4\sqrt3\)`],
    ["Rationalising", "Multiply top and bottom by the surd (or its conjugate)"]
  ]
});

S2Data.detail("1a", { mistakes: ["Counting leading zeros as significant figures. In 0.0049, the first significant figure is 4."], tips: ["In estimation questions, show the rounded numbers you used: that's where the marks are."], fact: "The Babylonians used base 60, which is why there are 60 minutes in an hour." });
S2Data.detail("1b", { mistakes: [R`Giving the product of primes as a list (2, 2, 2, 3, 3, 5). Write it as a product: \(2^3 \times 3^2 \times 5\).`], tips: ["Check your prime factorisation by multiplying it back out."], fact: "The largest known prime has over 41 million digits." });
S2Data.detail("1c", { mistakes: [R`Adding fractions by adding the tops and the bottoms: \(\frac12 + \frac13 \ne \frac25\). It's \(\frac36 + \frac26 = \frac56\).`], tips: ["On non-calculator papers, simplify before multiplying fractions by cancelling common factors."], fact: "Ancient Egyptians wrote almost all fractions as sums of unit fractions like 1/2 + 1/4." });
S2Data.detail("1d", { mistakes: [R`Writing \(45 \times 10^3\) as standard form. The first number must be between 1 and 10: \(4.5 \times 10^4\).`], tips: ["For fractional indices, take the root first, then the power: the numbers stay small."], fact: R`The mass of the Earth is about \(5.97 \times 10^{24}\) kg.` });
