/* Video explainers — Chemistry Topic 3. */

CHEM.video("3a", {
  scenes: [
    { type: "title", title: "Energetics", sub: "Exothermic, endothermic, energy profiles and bond energies.", mark: "ΔH",
      say: ["Every chemical reaction involves an energy change. This video covers exothermic and endothermic reactions, how to measure the energy change, and bond energy calculations."] },
    { type: "compare", title: "Two kinds of reaction", h: ["Exothermic", "Endothermic"],
      rows: [["Energy", "Given out to surroundings", "Taken in from surroundings"], ["Temperature", "Rises", "Falls"], ["ΔH", "Negative", "Positive"], ["Examples", "Combustion, neutralisation", "Thermal decomposition"]],
      say: ["Exothermic reactions give out energy to the surroundings. Endothermic reactions take energy in.",
            "So in an exothermic reaction the temperature of the surroundings rises. In an endothermic one, it falls.",
            "The enthalpy change, delta H, is negative for exothermic and positive for endothermic.",
            "Combustion and neutralisation are exothermic. Thermal decomposition is endothermic."] },
    { type: "graph", title: "Energy profile: exothermic", x: "Progress of reaction", y: "Energy",
      lines: [{ pts: [[0, 0.62], [0.2, 0.62], [0.42, 0.92], [0.64, 0.25], [1, 0.25]], s: 1 }],
      marks: [{ x: 0.1, y: 0.62, t: "reactants", s: 1 }, { x: 0.42, y: 0.92, t: "activation energy", s: 2, dy: -20 }, { x: 0.85, y: 0.25, t: "products (lower)", s: 3 }],
      say: ["An energy profile diagram shows the energy of the reactants and products.",
            "The reactants start here.",
            "To react, particles need a minimum amount of energy, the activation energy. That's the hump.",
            "In an exothermic reaction, the products end up lower than the reactants. The difference is the energy given out."] },
    { type: "calc", title: "Measuring ΔH", q: "50 g of water warms by 6.0 °C when 0.010 mol of fuel burns. (c = 4.2 J/g °C)",
      lines: ["Q = m × c × ΔT = 50 × 4.2 × 6.0 = 1260 J", "ΔH = −Q ÷ moles = −1260 ÷ 0.010", "ΔH = −126 000 J/mol = −126 kJ/mol"],
      say: ["To measure an energy change, react things in a polystyrene cup, or burn a fuel under a can of water, and measure the temperature change. Then use Q equals m c delta T: fifty times four point two times six is twelve hundred and sixty joules.",
            "Divide by the moles that reacted, and add a minus sign because the water got hotter: the reaction was exothermic.",
            "That's minus one hundred and twenty six kilojoules per mole."] },
    { type: "calc", title: "Bond energies", q: "H₂ + Cl₂ → 2HCl. Bond energies: H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol",
      lines: ["Bonds broken (energy in): 436 + 243 = 679", "Bonds made (energy out): 2 × 432 = 864", "ΔH = 679 − 864 = −185 kJ/mol"],
      say: ["Breaking bonds takes energy in. Making bonds gives energy out. For hydrogen plus chlorine: bonds broken are H H and C l C l, total six hundred and seventy nine.",
            "Bonds made are two H C l bonds, eight hundred and sixty four.",
            "Delta H equals broken minus made. Six seven nine minus eight six four is minus one hundred and eighty five. Negative, so exothermic."] },
    { type: "quiz", q: "In a reaction, more energy is released making bonds than is needed breaking them. The reaction is…", o: ["Endothermic", "Exothermic", "Neither", "Reversible"], a: 1,
      why: "Net energy is given out, so ΔH is negative.", say: ["Last question. More energy is released making bonds than is used breaking them. Exothermic or endothermic?"] }
  ]
});

CHEM.video("3b", {
  scenes: [
    { type: "title", title: "Rates of reaction", sub: "Collision theory and the factors that speed reactions up.", mark: "rate",
      say: ["Why do some reactions happen in a flash and others take years? It all comes down to collisions between particles."] },
    { type: "points", title: "Collision theory", items: ["Particles must <b>collide</b>", "with at least the <b>activation energy</b>", "More <b>successful collisions per second</b> = faster rate"],
      say: ["For a reaction to happen, particles have to collide.", "And they have to collide with enough energy, at least the activation energy.", "Anything that increases the number of successful collisions per second increases the rate of reaction."] },
    { type: "particles", title: "Effect of temperature", modes: ["gas", "hot"], caps: ["Cooler", "Hotter: faster particles"], n: 30, flash: true,
      say: ["Here are particles at a lower temperature.", "Heat them up and they move faster. They collide more often, and more of the collisions have enough energy to react. Temperature has a big effect on rate."] },
    { type: "points", title: "Four factors", items: ["<b>Concentration</b> or <b>pressure</b> ↑ → particles closer, more frequent collisions", "<b>Surface area</b> ↑ (smaller pieces) → more particles exposed", "<b>Temperature</b> ↑ → more frequent and more energetic collisions", "<b>Catalyst</b> → lower activation energy, not used up"],
      say: ["Increasing concentration, or pressure for gases, puts more particles in the same space, so collisions are more frequent.",
            "Increasing surface area, by using powder instead of lumps, exposes more particles to collide.",
            "Increasing temperature makes collisions more frequent and more energetic.",
            "A catalyst provides an alternative pathway with a lower activation energy. It isn't used up."] },
    { type: "graph", title: "Reading a rate graph", x: "Time", y: "Volume of gas",
      lines: [{ pts: [[0, 0], [0.12, 0.5], [0.3, 0.75], [0.6, 0.8], [1, 0.8]], s: 1, label: "faster" }, { pts: [[0, 0], [0.3, 0.45], [0.6, 0.72], [0.85, 0.8], [1, 0.8]], s: 2, dash: true }],
      marks: [{ x: 0.5, y: 0.8, t: "same final volume", s: 2, dy: -24 }],
      say: ["If you measure the volume of gas over time, the line starts steep and levels off as the reactants get used up. The gradient is the rate.",
            "A slower reaction, for example at a lower temperature, has a shallower curve.",
            "But if the same amounts of reactants are used, both end at the same final volume."] },
    { type: "quiz", q: "Why does powdered marble react faster with acid than marble chips?", o: ["Higher temperature", "Larger surface area", "Lower activation energy", "More concentrated"], a: 1,
      why: "More particles are exposed, so there are more collisions per second.", say: ["Why does powdered marble react faster with acid than marble chips?"] }
  ]
});

CHEM.video("3c", {
  scenes: [
    { type: "title", title: "Reversible reactions and equilibria", sub: "Reactions that go both ways, and how to shift them.", mark: "⇌",
      say: ["Some reactions can go forwards and backwards. In a closed system, they reach a balance called equilibrium."] },
    { type: "equation", title: "A reversible reaction", rows: [["hydrated copper sulfate", "⇌", "anhydrous copper sulfate", "+", "water"], [{ t: "blue", s: 1 }, { t: "⇌", s: 1 }, { t: "white", s: 1 }]],
      note: "Heating drives it forwards; adding water reverses it", noteStep: 2,
      say: ["Heat blue hydrated copper sulfate and it turns into white anhydrous copper sulfate and water.",
            "Add water to the white powder, and it turns blue again.",
            "Heating drives it forwards. Adding water reverses it. That's also the test for water."] },
    { type: "big", text: "Dynamic equilibrium", sub: "Forward and backward reactions happen at the same rate, so concentrations stay constant",
      say: ["In a closed system, a reversible reaction reaches dynamic equilibrium.", "Both reactions are still happening, but at the same rate, so the concentrations don't change."] },
    { type: "compare", title: "Shifting the equilibrium", h: ["Change", "Equilibrium shifts…"],
      rows: [["Temperature", "Increase", "In the endothermic direction"], ["Pressure (gases)", "Increase", "To the side with fewer gas molecules"], ["Concentration", "Add a reactant", "Towards the products"], ["Catalyst", "Add one", "No shift: equilibrium reached faster"]],
      say: ["If you raise the temperature, the equilibrium shifts in the endothermic direction, to take in the extra heat.",
            "If you raise the pressure, it shifts to the side with fewer gas molecules.",
            "Adding more reactant shifts it towards the products.",
            "A catalyst doesn't shift it at all. It just helps the reaction reach equilibrium faster."] },
    { type: "equation", title: "Example: the Haber process", rows: [["N₂", "+", "3H₂", "⇌", { t: "2NH₃", k: 1 }], [{ t: "4 gas molecules", s: 1 }, { t: "→", s: 1 }, { t: "2 gas molecules", s: 1 }]],
      note: "Forward reaction is exothermic: lower temperature → more ammonia, but slower", noteStep: 2,
      say: ["In the Haber process, nitrogen and hydrogen make ammonia.",
            "There are four gas molecules on the left and two on the right, so high pressure shifts the equilibrium right and increases the yield.",
            "The forward reaction is exothermic, so a lower temperature would give more ammonia, but too slowly. Four hundred and fifty degrees is a compromise."] },
    { type: "quiz", q: "N₂ + 3H₂ ⇌ 2NH₃. What does increasing pressure do?", o: ["Shifts left", "Shifts right, more NH₃", "No effect", "Stops the reaction"], a: 1,
      why: "The right-hand side has fewer gas molecules.", say: ["What happens to the Haber equilibrium if the pressure increases?"] }
  ]
});
