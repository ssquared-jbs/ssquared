/* Maths² exam questions — Ratio, proportion and rates of change (3a–3c) */
(function () {
const M = (q, ...o) => ({ t: "mcq", m: 1, q, o, a: 0 });
const N = (m, q, ans, ms, x) => Object.assign({ t: "num", m, q, ans, ms }, x || {});
const T = (m, q, ...p) => ({ t: "text", m, q, ms: p.map(x => x[0]), kw: p.map(x => x.slice(1)) });
const R = String.raw;
const E = { rel: 0.001 };
const P = { tol: 0.006 };

S2Data.exam("3a", [
  M(R`Simplify \(45 : 60\).`, R`\(3 : 4\)`, R`\(4 : 3\)`, R`\(9 : 12\)`, R`\(15 : 20\)`),
  M(R`Simplify 1.2 kg : 400 g.`, R`\(3 : 1\)`, R`\(1 : 3\)`, R`\(12 : 4\)`, R`\(1.2 : 400\)`),
  M(R`Write \(3 : 5\) in the form \(1 : n\).`, R`\(1 : 1.67\)`, R`\(1 : 2\)`, R`\(1 : 0.6\)`, R`\(1 : 15\)`),
  M(R`Red : blue \(= 2 : 7\). What fraction is red?`, R`\(\frac29\)`, R`\(\frac27\)`, R`\(\frac79\)`, R`\(\frac12\)`),
  M(R`If \(y\) is directly proportional to \(x\) and \(y = 12\) when \(x = 3\), then…`, R`\(y = 4x\)`, R`\(y = 3x\)`, R`\(y = \frac{12}{x}\)`, R`\(y = x + 9\)`),
  M(R`If \(y\) is inversely proportional to \(x\) and \(y = 6\) when \(x = 2\), then…`, R`\(y = \frac{12}{x}\)`, R`\(y = 3x\)`, R`\(y = \frac{x}{12}\)`, R`\(y = 6x\)`),
  M("Which graph shows inverse proportion?", R`A curve \(y = \frac kx\)`, "A straight line through the origin", "A horizontal line", "A straight line with a positive intercept"),
  M(R`A map has scale \(1 : 25\,000\). 4 cm on the map is…`, "1 km", "100 m", "10 km", "25 km"),
  M(R`Higher: \(y \propto \sqrt x\). If \(x\) is multiplied by 4, \(y\) is…`, "Multiplied by 2", "Multiplied by 4", "Multiplied by 16", "Halved"),
  M(R`Higher: \(y \propto \dfrac{1}{x^2}\). If \(x\) is doubled, \(y\) is…`, "Divided by 4", "Halved", "Doubled", "Multiplied by 4"),
  N(2, R`Share £84 in the ratio \(3 : 4\). Find the larger share in £.`, 48, [R`\(3 + 4 = 7\) parts, so 1 part \(= 84 \div 7 = £12\). (1)`, R`Larger share: \(4 \times 12 = £48\). (1)`], E),
  N(2, R`Share 150 sweets in the ratio \(2 : 3 : 5\). How many in the largest share?`, 75, [R`\(2 + 3 + 5 = 10\) parts, so 1 part \(= 15\). (1)`, R`\(5 \times 15 = 75\). (1)`], E),
  N(2, R`Boys : girls \(= 5 : 3\). There are 40 boys. How many girls?`, 24, [R`5 parts \(= 40\), so 1 part \(= 8\). (1)`, R`Girls: \(3 \times 8 = 24\). (1)`], E),
  N(2, R`\(A : B = 4 : 7\). B gets £36 more than A. Find A's share in £.`, 48, [R`The difference is \(7 - 4 = 3\) parts \(= £36\), so 1 part \(= £12\). (1)`, R`A: \(4 \times 12 = £48\). (1)`], E),
  N(2, "A recipe for 4 people uses 300 g flour. How much flour (g) for 10 people?", 750, [R`Per person: \(300 \div 4 = 75\) g. (1)`, R`\(75 \times 10 = 750\) g. (1)`], E),
  N(2, "6 identical books cost £27. Find the cost of 10 books in £.", 45, [R`One book: \(27 \div 6 = £4.50\). (1)`, R`\(4.50 \times 10 = £45\). (1)`], E),
  N(2, "5 machines make 400 bottles in 2 hours. How many bottles (same rate) do 8 machines make in 2 hours?", 640, [R`One machine: \(400 \div 5 = 80\) bottles. (1)`, R`\(80 \times 8 = 640\). (1)`], E),
  N(2, "6 workers build a wall in 10 days. How many days for 4 workers?", 15, [R`Inverse proportion: total work \(= 6 \times 10 = 60\) worker-days. (1)`, R`\(60 \div 4 = 15\) days. (1)`], E),
  N(2, "Pack A: 400 g for £1.80. Pack B: 650 g for £2.80. Find the price per 100 g of the better buy in pence (to 1 d.p.).", 43.1, [R`A: \(180 \div 4 = 45\)p per 100 g. B: \(280 \div 6.5 = 43.1\)p per 100 g. (1)`, R`B is cheaper per 100 g: 43.1p. (1)`], { tol: 0.06 }),
  N(2, R`\(y\) is directly proportional to \(x\). \(y = 20\) when \(x = 4\). Find \(y\) when \(x = 7\).`, 35, [R`\(y = kx\): \(20 = 4k\), so \(k = 5\). (1)`, R`\(y = 5 \times 7 = 35\). (1)`], E),
  N(2, R`\(y\) is inversely proportional to \(x\). \(y = 8\) when \(x = 3\). Find \(y\) when \(x = 6\).`, 4, [R`\(y = \frac kx\): \(8 = \frac k3\), so \(k = 24\). (1)`, R`\(y = \frac{24}{6} = 4\). (1)`], E),
  N(3, R`Higher: \(y \propto x^2\). \(y = 50\) when \(x = 5\). Find \(y\) when \(x = 8\).`, 128, [R`\(y = kx^2\). (1)`, R`\(50 = 25k\), so \(k = 2\). (1)`, R`\(y = 2 \times 8^2 = 128\). (1)`], E),
  N(3, R`Higher: \(F\) is inversely proportional to \(d^2\). \(F = 20\) when \(d = 3\). Find \(F\) when \(d = 6\).`, 5, [R`\(F = \dfrac{k}{d^2}\). (1)`, R`\(20 = \dfrac k9\), so \(k = 180\). (1)`, R`\(F = \dfrac{180}{36} = 5\). (1)`], E),
  N(2, R`A model car is made with scale \(1 : 18\). The model is 25 cm long. Find the real length in m.`, 4.5, [R`Real length \(= 25 \times 18 = 450\) cm. (1)`, R`\(= 4.5\) m. (1)`], E),
  T(2, R`Explain how to share an amount in the ratio \(3 : 5\).`, ["Add the parts (8) and divide the amount by 8 to find one part", "add", "8", "divide"], ["Multiply one part by 3 and by 5 to get the shares", "multiply", "× 3", "3 and 5"]),
  T(2, "Explain how you can tell from a table whether two quantities are in direct proportion.", [R`The ratio \(\frac yx\) is the same for every pair`, "same", "constant", "ratio"], [R`Equivalently, doubling \(x\) doubles \(y\)`, "doubl", "multiply"]),
  T(2, R`Explain why \(3 : 4\) and \(6 : 8\) are equivalent ratios.`, [R`\(6 : 8\) can be simplified by dividing both by 2`, "divide", "÷ 2", "2"], [R`To give \(3 : 4\)`, "3 : 4", "3:4"]),
  T(2, R`The ratio of cats to dogs is \(2 : 3\). Sam says \(\frac23\) of the animals are cats. Explain his mistake.`, [R`There are \(2 + 3 = 5\) parts in total`, "5 parts", "total of 5", "2 + 3"], [R`So \(\frac25\) are cats`, "2/5"]),
  T(2, R`Higher: write a formula for \(y\) in terms of \(x\) if \(y\) is proportional to the cube of \(x\) and \(y = 16\) when \(x = 2\).`, [R`\(y = kx^3\); \(16 = 8k\)`, "kx³", "kx^3", "8k"], [R`\(k = 2\), so \(y = 2x^3\)`, "2x³", "2x^3"]),
  T(2, "Explain how to decide which pack is the best value.", ["Find the cost per unit (e.g. per 100 g) for each pack", "per unit", "per 100", "per gram", "unit price"], ["The lowest cost per unit is the best value", "lowest", "cheapest", "smallest"])
]);

S2Data.exam("3b", [
  M("Multiplier for a 7% increase?", "1.07", "0.07", "1.7", "0.93"),
  M("Multiplier for a 35% decrease?", "0.65", "0.35", "1.35", "−0.35"),
  M("£250 increased by 20% is…", "£300", "£270", "£50", "£200"),
  M("A price falls from £80 to £60. Percentage decrease?", "25%", "20%", "33.3%", "75%"),
  M("Which calculation gives the value of £400 after 3 years at 2% compound interest?", R`\(400 \times 1.02^3\)`, R`\(400 \times 1.06\)`, R`\(400 \times 0.02 \times 3\)`, R`\(400 + 3 \times 1.02\)`),
  M("After a 10% discount, a coat costs £72. Original price?", "£80", "£79.20", "£82", "£64.80"),
  M("A car depreciates by 20% a year. After 2 years its value is what percentage of the original?", "64%", "60%", "80%", "40%"),
  M("Simple interest on £1000 at 5% for 4 years?", "£200", "£215.51", "£50", "£1200"),
  M("An increase of 50% followed by a decrease of 50% gives an overall…", "25% decrease", "No change", "25% increase", "50% decrease"),
  M(R`Higher: a population grows by 3% per year. Which formula gives the population after \(n\) years from 5000?`, R`\(5000 \times 1.03^n\)`, R`\(5000 \times 0.03n\)`, R`\(5000 + 3n\)`, R`\(5000 \times 1.3^n\)`),
  N(2, "Increase £64 by 15%.", 73.6, [R`Multiplier \(1 + 0.15 = 1.15\): \(64 \times 1.15\). (1)`, R`\(= £73.60\). (1)`], E),
  N(2, "Decrease 450 kg by 12%.", 396, [R`Multiplier \(1 - 0.12 = 0.88\): \(450 \times 0.88\). (1)`, R`\(= 396\) kg. (1)`], E),
  N(2, "A house bought for £180 000 sells for £207 000. Find the percentage profit.", 15, [R`Profit \(= £27\,000\); \(\dfrac{27\,000}{180\,000} = 0.15\) (divide by the original). (1)`, R`\(\times 100 = 15\%\). (1)`], E),
  N(2, "A TV costs £540 including 20% VAT. Find the price before VAT in £.", 450, [R`£540 is 120% of the original, so divide by 1.2: \(540 \div 1.2\). (1)`, R`\(= £450\). (1)`], E),
  N(2, "After a 15% pay rise, Ali earns £27 600. Find his salary before the rise in £.", 24000, [R`£27 600 is 115% of the old salary: \(27\,600 \div 1.15\). (1)`, R`\(= £24\,000\). (1)`], E),
  N(2, "£2000 is invested at 3% compound interest. Find the value after 4 years, to the nearest penny.", 2251.02, [R`\(2000 \times 1.03^4\). (1)`, R`\(= £2251.02\). (1)`], P),
  N(2, "£2000 is invested at 3% simple interest. Find the total interest after 4 years in £.", 240, [R`Interest each year: \(2000 \times 0.03 = £60\). (1)`, R`\(60 \times 4 = £240\). (1)`], E),
  N(2, "A van worth £15 000 depreciates by 18% each year. Find its value after 3 years, to the nearest £.", 8271, [R`Multiplier 0.82 each year: \(15\,000 \times 0.82^3\). (1)`, R`\(= £8270.52 \approx £8271\). (1)`], { tol: 1 }),
  N(2, "A shop reduces prices by 30% then by a further 10%. Find the overall percentage reduction.", 37, [R`Overall multiplier: \(0.7 \times 0.9 = 0.63\), so the price is 63% of the original. (1)`, R`Reduction \(= 100\% - 63\% = 37\%\). (1)`], E),
  N(3, "Higher: £5000 is invested at 4% compound interest. After how many whole years does it first exceed £6000?", 5, [R`Need \(5000 \times 1.04^n > 6000\), i.e. \(1.04^n > 1.2\). (1)`, R`\(1.04^4 = 1.170\) (not enough); \(1.04^5 = 1.217\) (enough). (1)`, R`\(n = 5\) years. (1)`], E),
  N(2, "Higher: bacteria double every hour. Starting with 300, how many after 6 hours?", 19200, [R`Multiplier 2 each hour: \(300 \times 2^6\). (1)`, R`\(= 300 \times 64 = 19\,200\). (1)`], E),
  N(2, "Higher: a population of 8000 falls by 5% per year. Find it after 3 years to the nearest whole number.", 6859, [R`\(8000 \times 0.95^3\). (1)`, R`\(= 6859\). (1)`], { tol: 1 }),
  N(2, "Higher: an amount increases from £400 to £441 after 2 years of compound interest. Find the annual rate (%).", 5, [R`Overall multiplier \(\dfrac{441}{400} = 1.1025\), and \(\sqrt{1.1025} = 1.05\). (1)`, R`So the rate is 5% per year. (1)`], E),
  N(2, "Express 36 as a percentage of 240.", 15, [R`\(\dfrac{36}{240} = 0.15\). (1)`, R`\(\times 100 = 15\%\). (1)`], E),
  T(2, "Explain why a 20% increase followed by a 20% decrease doesn't return to the original value.", [R`\(1.2 \times 0.8 = 0.96\)`, "0.96", "1.2 × 0.8"], ["The decrease is 20% of a larger amount, so overall it's a 4% decrease", "larger", "4%", "4 %"]),
  T(2, "Explain the difference between simple and compound interest.", ["Simple interest is calculated on the original amount only, the same each year", "original", "same each year"], ["Compound interest is calculated on the amount including previous interest", "previous interest", "interest on interest", "including interest"]),
  T(2, "A jacket costs £60 after a 25% reduction. Meg says the original was £75. Explain her mistake and find the correct price.", ["She added 25% of £60 instead of dividing by 0.75", "added 25%", "÷ 0.75", "divide by 0.75"], [R`Original \(= 60 \div 0.75 = £80\)`, "£80", "80"]),
  T(2, "Explain how to find a percentage change.", ["Find the change (difference) and divide by the original value", "difference", "divide by the original", "÷ original", "original"], ["Multiply by 100", "100"]),
  T(2, "Higher: explain why compound growth is described as exponential.", ["The amount is multiplied by the same factor each period", "multiplied", "same factor", "multiplier"], [R`So it follows \(y = ab^n\), with \(n\) as a power`, "power", "abⁿ", "exponent", "index"]),
  T(2, "Explain how to use a multiplier to decrease an amount by 8%.", [R`Multiplier \(= 1 - 0.08 = 0.92\)`, "0.92"], ["Multiply the amount by 0.92", "multiply", "× 0.92"])
]);

S2Data.exam("3c", [
  M("A cyclist travels 45 km in 3 hours. Average speed?", "15 km/h", "135 km/h", "48 km/h", "1.5 km/h"),
  M("Density = …", "Mass ÷ volume", "Volume ÷ mass", "Mass × volume", "Mass − volume"),
  M(R`A force of 600 N acts on \(2\ \text{m}^2\). Pressure?`, R`\(300\ \text{N/m}^2\)`, R`\(1200\ \text{N/m}^2\)`, R`\(602\ \text{N/m}^2\)`, R`\(0.003\ \text{N/m}^2\)`),
  M("45 minutes as a decimal of an hour?", "0.75", "0.45", "0.6", "0.25"),
  M("5 m/s in km/h?", "18 km/h", "5 km/h", "1.39 km/h", "300 km/h"),
  M("1 litre = …", R`\(1000\ \text{cm}^3\)`, R`\(100\ \text{cm}^3\)`, R`\(10\ \text{cm}^3\)`, R`\(1\ \text{m}^3\)`),
  M(R`\(2.5\ \text{m}^2\) in \(\text{cm}^2\)?`, R`\(25\,000\ \text{cm}^2\)`, R`\(250\ \text{cm}^2\)`, R`\(2500\ \text{cm}^2\)`, R`\(250\,000\ \text{cm}^2\)`),
  M("Time = …", "Distance ÷ speed", "Speed ÷ distance", "Speed × distance", "Distance − speed"),
  M("A tap fills a 60 litre tank in 5 minutes. Rate of flow?", "12 litres/min", "300 litres/min", "55 litres/min", "0.08 litres/min"),
  M("Higher: on a velocity–time graph, the gradient of a tangent gives…", "Instantaneous acceleration", "Distance", "Average speed", "Time"),
  N(2, "A car travels 168 km in 2 hours 20 minutes. Find its average speed in km/h.", 72, [R`20 min \(= \frac{20}{60} = \frac13\) h, so the time is \(2\frac13\) h. (1)`, R`Speed \(= 168 \div 2\frac13 = 72\) km/h. (1)`], E),
  N(2, "A train travels at 85 km/h for 3.5 hours. How far does it go in km?", 297.5, [R`Distance = speed × time \(= 85 \times 3.5\). (1)`, R`\(= 297.5\) km. (1)`], E),
  N(2, "How long, in minutes, does it take to walk 6 km at 4 km/h?", 90, [R`Time = distance ÷ speed \(= 6 \div 4 = 1.5\) h. (1)`, R`\(1.5 \times 60 = 90\) min. (1)`], E),
  N(2, R`A metal block has mass 540 g and volume \(200\ \text{cm}^3\). Find its density in \(\text{g/cm}^3\).`, 2.7, [R`Density \(= \dfrac{\text{mass}}{\text{volume}} = \dfrac{540}{200}\). (1)`, R`\(= 2.7\ \text{g/cm}^3\). (1)`], E),
  N(2, R`Gold has density \(19.3\ \text{g/cm}^3\). Find the mass (g) of \(15\ \text{cm}^3\) of gold.`, 289.5, [R`Mass = density × volume \(= 19.3 \times 15\). (1)`, R`\(= 289.5\) g. (1)`], E),
  N(2, R`Find the volume (\(\text{cm}^3\)) of 1000 g of a liquid with density \(0.8\ \text{g/cm}^3\).`, 1250, [R`Volume \(= \dfrac{\text{mass}}{\text{density}} = \dfrac{1000}{0.8}\). (1)`, R`\(= 1250\ \text{cm}^3\). (1)`], E),
  N(2, R`A box weighing 120 N rests on a face measuring 0.4 m by 0.5 m. Find the pressure in \(\text{N/m}^2\).`, 600, [R`Area \(= 0.4 \times 0.5 = 0.2\ \text{m}^2\). (1)`, R`Pressure \(= \dfrac{120}{0.2} = 600\ \text{N/m}^2\). (1)`], E),
  N(2, "Convert 90 km/h to m/s.", 25, [R`\(90\) km/h \(= 90\,000\) m per 3600 s: \(90 \times 1000 \div 3600\). (1)`, R`\(= 25\) m/s. (1)`], E),
  N(2, R`Convert \(0.6\ \text{m}^3\) to \(\text{cm}^3\).`, 600000, [R`\(1\ \text{m}^3 = 100^3 = 1\,000\,000\ \text{cm}^3\), so \(0.6 \times 1\,000\,000\). (1)`, R`\(= 600\,000\ \text{cm}^3\). (1)`], E),
  N(3, "A runner covers 400 m in 50 s, then 600 m in 100 s. Find the average speed for the whole run in m/s.", 6.67, [R`Total distance \(= 400 + 600 = 1000\) m. (1)`, R`Total time \(= 50 + 100 = 150\) s. (1)`, R`\(1000 \div 150 = 6.67\) m/s. (1)`], P),
  N(2, R`£1 = $1.25. Convert $340 to £.`, 272, [R`Each £1 buys $1.25, so divide: \(340 \div 1.25\). (1)`, R`\(= £272\). (1)`], E),
  N(2, "A worker earns £11.40 per hour. How much for 37.5 hours in £?", 427.5, [R`\(11.40 \times 37.5\). (1)`, R`\(= £427.50\). (1)`], E),
  N(3, R`Two liquids are mixed: \(200\ \text{cm}^3\) of density \(1.2\ \text{g/cm}^3\) and \(300\ \text{cm}^3\) of density \(0.9\ \text{g/cm}^3\). Find the density of the mixture in \(\text{g/cm}^3\).`, 1.02, [R`Masses: \(200 \times 1.2 = 240\) g and \(300 \times 0.9 = 270\) g. (1)`, R`Total: 510 g in \(500\ \text{cm}^3\). (1)`, R`Density \(= \dfrac{510}{500} = 1.02\ \text{g/cm}^3\). (1)`], E),
  N(2, R`Higher: a tangent to a distance–time curve at \(t = 4\) s passes through \((2, 10)\) and \((6, 30)\). Estimate the speed at \(t = 4\) s in m/s.`, 5, [R`Gradient of the tangent \(= \dfrac{30 - 10}{6 - 2} = \dfrac{20}{4}\). (1)`, R`\(= 5\) m/s. (1)`], E),
  T(2, "Explain why 2 hours 15 minutes is not 2.15 hours.", [R`15 minutes is \(\frac{15}{60}\) of an hour`, "15/60", "quarter"], ["= 0.25 hours, so 2.25 hours", "2.25", "0.25"]),
  T(2, "Explain how to convert a speed from km/h to m/s.", ["Multiply by 1000 to change km to m", "1000"], ["Divide by 3600 to change hours to seconds", "3600"]),
  T(2, R`Explain why \(1\ \text{m}^2\) is \(10\,000\ \text{cm}^2\), not \(100\ \text{cm}^2\).`, [R`\(1\ \text{m}^2\) is a square 100 cm by 100 cm`, "100 cm by 100 cm", "100 × 100"], [R`\(100 \times 100 = 10\,000\ \text{cm}^2\)`, "10 000", "10000"]),
  T(2, "A box exerts more pressure when stood on a smaller face. Explain why.", ["Pressure = force ÷ area", "force ÷ area", "force/area"], ["The same force over a smaller area gives a larger pressure", "smaller area", "larger pressure", "bigger"]),
  T(2, "Explain why average speed isn't the mean of two speeds when the times are different.", ["Average speed = total distance ÷ total time", "total distance", "total time"], ["The speeds are travelled for different lengths of time", "different times", "different lengths of time", "weighted"]),
  T(2, "Higher: explain the difference between average and instantaneous rate of change on a curve.", ["Average: gradient of a chord between two points", "chord", "two points"], ["Instantaneous: gradient of the tangent at one point", "tangent", "one point"])
]);

})();
