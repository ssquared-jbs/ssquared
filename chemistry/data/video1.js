/* Video explainers — Chemistry Topic 1. */

CHEM.video("1a", {
  scenes: [
    { type: "title", title: "States of matter", sub: "Solids, liquids, gases, and what happens when they change.", mark: "s l g",
      say: ["Everything around you is made of tiny particles. How those particles are arranged, and how they move, decides whether something is a solid, a liquid or a gas."] },
    { type: "particles", title: "Three states, one set of particles", modes: ["solid", "liquid", "gas"], caps: ["Solid", "Liquid", "Gas"], n: 36,
      say: ["In a solid, the particles are packed closely in a regular pattern. They can't move around, they just vibrate about fixed positions.",
            "Give them energy and they become a liquid. The particles are still close together, but now they're arranged randomly and can slide past each other.",
            "Add more energy and you get a gas. The particles are far apart and move quickly in all directions. The forces between them are very weak."] },
    { type: "compare", title: "Know this table", h: ["Solid", "Gas"],
      rows: [["Arrangement", "Regular, close", "Random, far apart"], ["Movement", "Vibrate in place", "Fast, all directions"], ["Energy", "Lowest", "Highest"], ["Forces", "Strong", "Very weak"]],
      say: ["Here's the comparison examiners love. Arrangement: regular and close in a solid, random and far apart in a gas.",
            "Movement: solid particles only vibrate. Gas particles move quickly in all directions.",
            "Energy: solid particles have the least, gas particles the most.",
            "And the forces between particles: strong in a solid, very weak in a gas. A liquid sits in the middle on every row."] },
    { type: "flow", title: "Changes of state", both: true, nodes: ["Solid", "Liquid", "Gas"], arrows: ["melting →<br>← freezing", "boiling →<br>← condensing"], start: 0,
      say: ["Changes of state are physical changes. No new substance is made. Start with a solid.",
            "Melting turns a solid into a liquid. The particles take in energy and overcome some of the forces holding them in place. Freezing is the reverse.",
            "Boiling turns a liquid into a gas, and condensing turns a gas back into a liquid. Whenever forces form between particles, energy is given out."] },
    { type: "graph", title: "Why heating curves have flat parts", x: "Time heating", y: "Temperature",
      lines: [{ pts: [[0, 0.05], [0.15, 0.3], [0.38, 0.3], [0.52, 0.65], [0.82, 0.65], [1, 0.92]], straight: true, s: 1 }],
      marks: [{ x: 0.265, y: 0.3, t: "melting", s: 2, dy: -24 }, { x: 0.67, y: 0.65, t: "boiling", s: 3, dy: -24 }],
      say: ["If you heat ice and measure the temperature, you get a graph like this.",
            "The temperature rises, then stays flat while the ice melts.",
            "It rises again, then stays flat while the water boils.",
            "During a change of state the temperature doesn't change. The energy is used to overcome the forces between particles, not to speed them up."] },
    { type: "particles", title: "Diffusion", mode: "diffusion", modes: ["diffusion", "diffusion"], caps: ["Before mixing", "Particles spread out"], n: 40,
      say: ["Diffusion is the net movement of particles from where there are lots of them to where there are few.",
            "Nothing pushes them. Their own random motion spreads them out until they're evenly mixed. That's why a purple crystal of potassium manganate slowly colours a whole beaker of water."] },
    { type: "quiz", q: "Ice is melting at 0 °C. What is the energy being used for?", o: ["Speeding up the particles", "Overcoming forces between particles", "Making new particles", "Cooling the ice"], a: 1,
      why: "That's why the temperature stays flat while it melts.",
      say: ["Quick check. Ice is melting at zero degrees. What is the energy being used for?"] }
  ]
});
