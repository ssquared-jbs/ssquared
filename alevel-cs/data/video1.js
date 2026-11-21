/* Video explainers — A-level Computer Science, sections 1–4. */

S2Data.video("1a", { scenes: [
  { type: "title", title: "Data types and constructs", sub: "The building blocks of every program.", mark: "🧱",
    say: ["Every program is built from data types and three simple constructs."] },
  { type: "compare", title: "Data types", h: ["Holds"],
    rows: [["Integer", "Whole numbers"], ["Real", "Fractional numbers"], ["Boolean", "True or False"], ["String", "Text"], ["Record", "Fields of different types"]],
    say: ["Integers hold whole numbers.", "Reals hold numbers with a fractional part.", "Booleans are true or false.", "Strings hold text.", "And records group related fields of different types."] },
  { type: "flow", title: "Three constructs", nodes: ["Sequence", "Selection", "Iteration"],
    say: ["Sequence: instructions run in order.", "Selection: choosing a path with if or case.", "Iteration: repeating, either a set number of times or until a condition is met."] },
  { type: "calc", title: "DIV and MOD", q: "17 and 5",
    lines: ["17 DIV 5 = 3", "17 MOD 5 = 2", "Check: 3 × 5 + 2 = 17"],
    say: ["Integer division gives how many whole fives fit into seventeen: three.", "MOD gives the remainder: two.", "Three fives plus two is seventeen."] },
  { type: "quiz", q: "A WHILE loop is…", o: ["Indefinite iteration", "Definite iteration", "Selection", "Sequence"], a: 0,
    why: "It repeats until a condition changes.", say: ["Is a while loop definite or indefinite iteration?"] }
]});

S2Data.video("1b", { scenes: [
  { type: "title", title: "Subroutines and recursion", sub: "Stack frames and base cases.", mark: "🔁",
    say: ["Subroutines let us break programs into named, reusable pieces."] },
  { type: "compare", title: "Functions and procedures", h: ["Returns a value?"],
    rows: [["Function", "Yes"], ["Procedure", "No"]],
    say: ["A function hands back a value to the code that called it.", "A procedure just carries out a task."] },
  { type: "points", title: "A stack frame holds", items: ["Return address", "Parameters", "Local variables"],
    say: ["Each call pushes a frame holding where to return to,", "the parameters passed in,", "and the local variables, which vanish when the frame is popped."] },
  { type: "flow", title: "factorial(3)", nodes: ["3 × factorial(2)", "2 × factorial(1)", "1 × factorial(0)", "Base case: 1"],
    say: ["Factorial of three calls factorial of two.", "Which calls factorial of one.", "Which calls factorial of zero.", "The base case returns one, and the results multiply back up to six."] },
  { type: "quiz", q: "Recursion without a base case causes…", o: ["Stack overflow", "A faster program", "A syntax error", "Nothing"], a: 0,
    why: "Frames pile up forever.", say: ["What happens if a recursive function has no base case?"] }
]});

S2Data.video("1c", { scenes: [
  { type: "title", title: "Object-oriented programming", sub: "Classes, objects and relationships.", mark: "📦",
    say: ["Object-oriented programs model the world as objects with data and behaviour."] },
  { type: "compare", title: "Key ideas", h: ["Meaning"],
    rows: [["Class", "Template"], ["Object", "Instance of a class"], ["Encapsulation", "Hide data behind methods"], ["Inheritance", "'Is a' relationship"], ["Polymorphism", "Same call, different behaviour"]],
    say: ["A class is a template.", "An object is one instance made from it.", "Encapsulation hides attributes behind methods.", "Inheritance lets a subclass reuse a superclass.", "And polymorphism lets different classes respond to the same call in their own way."] },
  { type: "compare", title: "Aggregation", h: ["Parts when container destroyed", "Diamond"],
    rows: [["Composition", "Destroyed too", "Filled"], ["Association", "Survive", "Hollow"]],
    say: ["In composition, parts belong to the container and are destroyed with it.", "In association, parts exist independently."] },
  { type: "points", title: "Design principles", items: ["Encapsulate what varies", "Favour composition over inheritance", "Program to interfaces"],
    say: ["Keep the parts that change separate.", "Prefer building from parts over deep inheritance trees.", "And depend on what objects do, not how they do it."] },
  { type: "quiz", q: "In a class diagram, − means…", o: ["Private", "Public", "Protected", "Static"], a: 0,
    why: "+ public, − private, # protected.", say: ["In a class diagram, what does a minus sign mean?"] }
]});

S2Data.video("2a", { scenes: [
  { type: "title", title: "Stacks and queues", sub: "LIFO and FIFO.", mark: "📚",
    say: ["Two simple structures power much of computing: stacks and queues."] },
  { type: "compare", title: "Stack vs queue", h: ["Order", "Operations"],
    rows: [["Stack", "LIFO", "Push, pop, peek"], ["Queue", "FIFO", "Enqueue, dequeue"]],
    say: ["A stack is last in, first out, like a pile of plates.", "A queue is first in, first out, like a line at a shop."] },
  { type: "big", text: "rear = (rear + 1) MOD size", sub: "Circular queues wrap round",
    say: ["A linear queue wastes space at the front as items leave.", "A circular queue wraps its pointers round, reusing that space."] },
  { type: "compare", title: "Static vs dynamic", h: ["Size", "Memory"],
    rows: [["Static", "Fixed", "May waste space"], ["Dynamic", "Grows and shrinks", "Pointer overhead"]],
    say: ["Static structures have a fixed size, set in advance.", "Dynamic structures change size, but need extra memory for pointers."] },
  { type: "quiz", q: "Which suits an undo feature?", o: ["Stack", "Queue", "Hash table", "Graph"], a: 0,
    why: "The last action is undone first.", say: ["Which data structure suits an undo button?"] }
]});

S2Data.video("2b", { scenes: [
  { type: "title", title: "Graphs and trees", sub: "Vertices, edges and hierarchies.", mark: "🕸",
    say: ["Graphs model connections: roads, friendships, networks."] },
  { type: "compare", title: "Storing a graph", h: ["Best for", "Lookup"],
    rows: [["Adjacency matrix", "Dense graphs", "Fast"], ["Adjacency list", "Sparse graphs", "Slower"]],
    say: ["An adjacency matrix stores every possible pair, great for dense graphs with fast lookups.", "An adjacency list stores only real edges, saving memory for sparse graphs."] },
  { type: "big", text: "A tree has no cycles", sub: "Connected, undirected, acyclic",
    say: ["A tree is a connected graph with no cycles.", "A rooted tree has a root, parents and children, and leaves at the ends."] },
  { type: "flow", title: "Binary search tree", nodes: ["Start at root", "Smaller? Go left", "Larger? Go right", "Repeat"],
    say: ["Start at the root.", "If the value is smaller, go left.", "If it's larger, go right.", "Keep going until you find it or reach an empty spot."] },
  { type: "quiz", q: "An adjacency list is best for…", o: ["Sparse graphs", "Dense graphs", "Stacks", "Arrays"], a: 0,
    why: "Only existing edges are stored.", say: ["When is an adjacency list the better choice?"] }
]});

S2Data.video("2c", { scenes: [
  { type: "title", title: "Hash tables and vectors", sub: "Fast lookup and geometry.", mark: "#",
    say: ["Hash tables find data almost instantly."] },
  { type: "flow", title: "Hashing", nodes: ["Key", "Hash function", "Index", "Store or look up"],
    say: ["Take a key, like a name.", "Pass it through a hash function.", "Get an index in the table.", "Store or retrieve the value there in one step."] },
  { type: "compare", title: "Collisions", h: ["How"],
    rows: [["Open addressing", "Next free slot"], ["Chaining", "List at each slot"], ["Rehashing", "Bigger table, reinsert"]],
    say: ["When two keys collide, open addressing puts the item in the next free slot.", "Chaining keeps a list at each slot.", "And when the table gets too full, rehashing builds a bigger one."] },
  { type: "calc", title: "Dot product", q: "[2, 3] · [4, −1]",
    lines: ["2 × 4 = 8", "3 × (−1) = −3", "8 + (−3) = 5"],
    say: ["Multiply the first components: eight.", "Multiply the second: minus three.", "Add them: the dot product is five."] },
  { type: "quiz", q: "Key 27, table size 10, MOD hashing. Index?", o: ["7", "2", "27", "0"], a: 0,
    why: "27 MOD 10 = 7.", say: ["Using key mod ten, where does key twenty-seven go?"] }
]});

S2Data.video("3a", { scenes: [
  { type: "title", title: "Traversals and RPN", sub: "Visiting every node.", mark: "🧭",
    say: ["How do we visit every vertex in a graph or tree?"] },
  { type: "compare", title: "Graph traversal", h: ["Uses", "Good for"],
    rows: [["Breadth-first", "Queue", "Shortest unweighted path"], ["Depth-first", "Stack", "Mazes"]],
    say: ["Breadth-first explores level by level with a queue, finding shortest paths in unweighted graphs.", "Depth-first dives deep with a stack, then backtracks."] },
  { type: "compare", title: "Tree traversal", h: ["Order", "Use"],
    rows: [["Pre-order", "Node, L, R", "Copy a tree"], ["In-order", "L, node, R", "Sorted output"], ["Post-order", "L, R, node", "RPN, delete"]],
    say: ["Pre-order visits the node first.", "In-order visits it in the middle, giving sorted output from a BST.", "Post-order visits it last, giving Reverse Polish."] },
  { type: "calc", title: "Evaluate RPN", q: "3 4 + 2 ×",
    lines: ["Push 3, push 4", "+ → pop 4 and 3 → push 7", "Push 2; × → push 14"],
    say: ["Push three and four.", "On plus, pop both, add, and push seven.", "Push two, then multiply: fourteen."] },
  { type: "quiz", q: "Which traversal outputs a BST in order?", o: ["In-order", "Pre-order", "Post-order", "Breadth-first"], a: 0,
    why: "Left, node, right.", say: ["Which traversal gives sorted output from a binary search tree?"] }
]});

S2Data.video("3b", { scenes: [
  { type: "title", title: "Searching and sorting", sub: "Algorithms and their complexity.", mark: "🔍",
    say: ["Searching and sorting are the classic algorithms."] },
  { type: "compare", title: "Searching", h: ["Sorted?", "Big-O"],
    rows: [["Linear", "No", "O(n)"], ["Binary", "Yes", "O(log n)"], ["Binary tree", "BST", "O(log n)"]],
    say: ["Linear search checks every item, so it's order n.", "Binary search halves a sorted list each time: log n.", "Searching a balanced binary search tree is also log n."] },
  { type: "compare", title: "Sorting", h: ["Big-O", "Memory"],
    rows: [["Bubble", "O(n²)", "In place"], ["Merge", "O(n log n)", "Extra space"]],
    say: ["Bubble sort swaps neighbours, pass after pass: n squared.", "Merge sort splits and merges: n log n, but needs extra memory."] },
  { type: "flow", title: "Merge sort", nodes: ["Split in half", "Until single items", "Merge pairs in order", "One sorted list"],
    say: ["Split the list in half.", "Keep splitting until each list has one item.", "Merge pairs back together in order.", "Until one sorted list remains."] },
  { type: "quiz", q: "Binary search needs data to be…", o: ["Sorted", "Unsorted", "In a stack", "Hashed"], a: 0,
    why: "It discards half based on order.", say: ["What must be true of data before a binary search?"] }
]});

S2Data.video("3c", { scenes: [
  { type: "title", title: "Dijkstra's algorithm", sub: "Shortest paths in weighted graphs.", mark: "🗺",
    say: ["How does a satnav find the shortest route?"] },
  { type: "flow", title: "The algorithm", nodes: ["Start = 0, others ∞", "Visit closest unvisited", "Update neighbours", "Repeat"],
    say: ["Set the start to zero and everything else to infinity.", "Visit the closest unvisited vertex.", "Update its neighbours if going through it is shorter.", "Repeat until all are visited."] },
  { type: "compare", title: "Worked example", h: ["A", "B", "C", "D"],
    rows: [["Visit A", "0", "4", "2", "∞"], ["Visit C", "0", "3", "2", "10"], ["Visit B", "0", "3", "2", "8"]],
    say: ["From A, B is four and C is two.", "Visiting C improves B to three and reaches D at ten.", "Visiting B improves D to eight."] },
  { type: "big", text: "A → C → B → D = 8", sub: "Follow the previous-vertex links back",
    say: ["Following the links back gives the route A, C, B, D.", "Dijkstra needs non-negative weights and often uses a priority queue."] },
  { type: "quiz", q: "Dijkstra fails with…", o: ["Negative weights", "Directed graphs", "Large graphs", "Integer weights"], a: 0,
    why: "Visited distances are assumed final.", say: ["What kind of edge weight breaks Dijkstra's algorithm?"] }
]});

S2Data.video("4a", { scenes: [
  { type: "title", title: "Abstraction and automation", sub: "Thinking like a computer scientist.", mark: "🧠",
    say: ["Computer science is the art of leaving things out, and then automating what's left."] },
  { type: "compare", title: "Types of abstraction", h: ["Idea"],
    rows: [["Representational", "Remove unnecessary detail"], ["Generalisation", "Group by common features"], ["Procedural", "Use without knowing how"], ["Data", "Hide how data is stored"]],
    say: ["Representational abstraction removes detail, like a Tube map.", "Generalisation groups things by what they share.", "Procedural abstraction lets us use a procedure without knowing its insides.", "Data abstraction hides how data is stored, like a stack built on an array."] },
  { type: "compare", title: "Decompose and compose", h: ["Meaning"],
    rows: [["Decomposition", "Break into sub-problems"], ["Composition", "Combine into compound parts"]],
    say: ["Decomposition splits a big problem into smaller ones.", "Composition combines procedures or data into bigger ones."] },
  { type: "big", text: "Automation", sub: "Models → algorithms → code → execution",
    say: ["Automation puts models into action.", "We write algorithms, implement them in code and data structures, and run them."] },
  { type: "quiz", q: "A Tube map is…", o: ["Representational abstraction", "Data abstraction", "Composition", "Automation"], a: 0,
    why: "Detail is removed to show what matters.", say: ["What kind of abstraction is the London Tube map?"] }
]});

S2Data.video("4b", { scenes: [
  { type: "title", title: "FSMs, sets and regex", sub: "Regular languages.", mark: "⚙",
    say: ["Finite state machines are the simplest model of computation."] },
  { type: "compare", title: "Odd number of 1s", h: ["Input 0", "Input 1"],
    rows: [["S0 (start)", "S0", "S1"], ["S1 (accept)", "S1", "S0"]],
    say: ["In S zero, a zero keeps us there, and a one moves to S one.", "In S one, a zero stays, and a one moves back. Ending in S one means an odd number of ones."] },
  { type: "compare", title: "Regular expressions", h: ["Means"],
    rows: [["a*", "Zero or more a"], ["a+", "One or more a"], ["a?", "Zero or one a"], ["a|b", "a or b"]],
    say: ["Star means zero or more.", "Plus means one or more.", "Question mark means optional.", "And the bar means or."] },
  { type: "compare", title: "Set operations", h: ["Symbol"],
    rows: [["Union", "∪"], ["Intersection", "∩"], ["Difference", "\\"], ["Cartesian product", "×"]],
    say: ["Union combines all elements.", "Intersection keeps the shared ones.", "Difference keeps those in the first set only.", "And the Cartesian product makes every ordered pair."] },
  { type: "quiz", q: "An FSM with output is a…", o: ["Mealy machine", "Turing machine", "Stack", "Regex"], a: 0,
    why: "Outputs label each transition.", say: ["What do we call a finite state machine with outputs?"] }
]});

S2Data.video("4c", { scenes: [
  { type: "title", title: "BNF and syntax diagrams", sub: "Describing language syntax.", mark: "📜",
    say: ["How do we define exactly what counts as valid code?"] },
  { type: "compare", title: "BNF symbols", h: ["Meaning"],
    rows: [["::=", "Is defined as"], ["|", "Or"], ["⟨name⟩", "Non-terminal"], ["a, 0, +", "Terminals"]],
    say: ["The colon-colon-equals symbol means is defined as.", "The bar means or.", "Names in angle brackets are non-terminals, defined by other rules.", "Plain symbols are terminals."] },
  { type: "flow", title: "⟨integer⟩ for '42'", nodes: ["⟨digit⟩⟨integer⟩", "4 then ⟨integer⟩", "⟨digit⟩ = 2", "Valid"],
    say: ["An integer can be a digit followed by another integer.", "So four, then an integer.", "That integer is just the digit two.", "So forty-two is valid."] },
  { type: "big", text: "BNF can describe nesting", sub: "Regular expressions can't",
    say: ["Recursive rules let BNF describe things like nested brackets.", "Regular expressions can't, so programming languages are defined with BNF or syntax diagrams."] },
  { type: "quiz", q: "In syntax diagrams, terminals are…", o: ["Ovals", "Rectangles", "Diamonds", "Arrows"], a: 0,
    why: "Rectangles are non-terminals.", say: ["In a syntax diagram, what shape shows a terminal?"] }
]});

S2Data.video("4d", { scenes: [
  { type: "title", title: "Complexity and computability", sub: "Big-O and Turing machines.", mark: "∞",
    say: ["Some problems are slow to solve. Some can't be solved at all."] },
  { type: "graph", title: "Growth rates", x: "input size n", y: "time",
    lines: [{ pts: [[0, 0.02], [0.08, 0.08], [0.25, 0.12], [0.55, 0.15], [1, 0.17]] }, { pts: [[0, 0.02], [0.5, 0.25], [1, 0.5]] }, { pts: [[0, 0.01], [0.4, 0.12], [0.7, 0.42], [0.85, 0.65], [0.95, 0.85]] }],
    marks: [{ x: 1, y: 0.17, t: "O(log n)", s: 1, anchor: "end", dy: -12 }, { x: 1, y: 0.5, t: "O(n)", s: 2, anchor: "end", dy: -12 }, { x: 0.95, y: 0.85, t: "O(n²)", s: 3, anchor: "end", dx: -12 }],
    say: ["Logarithmic algorithms, like binary search, barely grow.", "Linear algorithms grow in step with the input.", "Quadratic ones, like bubble sort, shoot up. Exponential is worse still."] },
  { type: "compare", title: "Limits of computation", h: ["Meaning"],
    rows: [["Tractable", "Polynomial time"], ["Intractable", "No polynomial solution; use heuristics"], ["Non-computable", "No algorithm exists"]],
    say: ["Tractable problems have polynomial-time solutions.", "Intractable ones don't, so we use heuristics for good-enough answers.", "And some, like the halting problem, can't be solved by any algorithm."] },
  { type: "points", title: "Turing machine", items: ["Finite states", "Infinite tape", "Read/write head", "Transition function"],
    say: ["A Turing machine has a finite set of states,", "an infinite tape of cells,", "a head that reads, writes and moves one cell,", "and rules saying what to do next. A universal Turing machine can simulate any other."] },
  { type: "quiz", q: "The halting problem is…", o: ["Unsolvable", "O(n)", "Tractable", "Solved by heuristics"], a: 0,
    why: "Turing proved no algorithm can decide it.", say: ["Can the halting problem be solved by a computer?"] }
]});
