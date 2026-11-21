/* Computer Science² — Problem solving with programming (Python 3) */

S2Data.add({
  id: "6a", group: 6, title: "Variables, data types and operators",
  summary: "Python data types, casting, arithmetic, comparison and string operations.",
  notes: `
<h3>Data types</h3>
<table><tr><th>Type</th><th>Example</th><th>Use</th></tr>
<tr><td>Integer <code>int</code></td><td><code>42</code></td><td>Whole numbers</td></tr>
<tr><td>Real/float <code>float</code></td><td><code>3.14</code></td><td>Numbers with decimals</td></tr>
<tr><td>Boolean <code>bool</code></td><td><code>True</code></td><td>True or False</td></tr>
<tr><td>String <code>str</code></td><td><code>"Hello"</code></td><td>Text</td></tr></table>
<p><b>Variables</b> store values that can change; <b>constants</b> hold values that shouldn't (by convention written in capitals, e.g. <code>VAT = 0.2</code>).</p>
<h3>Input and casting</h3>
<pre>age = int(input("Age? "))      # input() returns a string
price = float("4.99")
label = "Score: " + str(10)</pre>
<h3>Arithmetic operators</h3>
<table><tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
<tr><td><code>+ - * /</code></td><td>Add, subtract, multiply, divide</td><td><code>7 / 2</code> = 3.5</td></tr>
<tr><td><code>//</code></td><td>Integer division</td><td><code>7 // 2</code> = 3</td></tr>
<tr><td><code>%</code></td><td>Modulus (remainder)</td><td><code>7 % 2</code> = 1</td></tr>
<tr><td><code>**</code></td><td>Exponent</td><td><code>2 ** 3</code> = 8</td></tr></table>
<h3>Comparison and logic</h3>
<p><code>==  !=  &lt;  &lt;=  &gt;  &gt;=</code> and <code>and</code>, <code>or</code>, <code>not</code>.</p>
<h3>Strings</h3>
<pre>name = "Ada Lovelace"
len(name)          # 12
name[0]            # 'A'
name[4:8]          # 'Love'
name.upper()       # 'ADA LOVELACE'
"Ada" in name      # True</pre>
<div class="box box-key"><span class="box-title">Remember</span><code>=</code> assigns a value; <code>==</code> compares two values.</div>`,
  quiz: [
    { q: "What type is 3.0 in Python?", o: ["float", "int", "str", "bool"], a: 0, e: "" },
    { q: "What does input() return?", o: ["A string", "An integer", "A float", "A Boolean"], a: 0, e: "" },
    { q: "17 // 5 = ?", o: ["3", "3.4", "2", "85"], a: 0, e: "" },
    { q: "17 % 5 = ?", o: ["2", "3", "3.4", "12"], a: 0, e: "" },
    { q: "2 ** 4 = ?", o: ["16", "8", "6", "24"], a: 0, e: "" },
    { q: "len(\"Python\") = ?", o: ["6", "5", "7", "1"], a: 0, e: "" },
    { q: "\"Python\"[0] = ?", o: ["'P'", "'y'", "'n'", "Error"], a: 0, e: "" },
    { q: "Which compares two values for equality?", o: ["==", "=", "!=", ":="], a: 0, e: "" },
    { q: "Which converts '12' to a number you can add?", o: ["int('12')", "str(12)", "bool('12')", "len('12')"], a: 0, e: "" }
  ],
  flashcards: [
    ["int / float", "Whole number / decimal"],
    ["bool / str", "True or False / text"],
    ["Casting", "int(), float(), str()"],
    ["//", "Integer division"],
    ["%", "Remainder (modulus)"],
    ["**", "Power"],
    ["Slicing", "s[a:b] from index a up to (not including) b"]
  ]
});

S2Data.add({
  id: "6b", group: 6, title: "Selection and iteration",
  summary: "if/elif/else, for loops with range, while loops and nesting.",
  notes: `
<h3>Selection</h3>
<pre>mark = int(input("Mark: "))
if mark >= 70:
    grade = "A"
elif mark >= 50:
    grade = "B"
else:
    grade = "U"
print(grade)</pre>
<p>Only the <b>first</b> true branch runs. Indentation defines which lines belong to each branch.</p>
<h3>Count-controlled iteration: for</h3>
<pre>for i in range(5):        # 0, 1, 2, 3, 4
    print(i)
for i in range(2, 11, 2): # 2, 4, 6, 8, 10
    print(i)
for letter in "cat":
    print(letter)</pre>
<p><code>range(start, stop, step)</code> stops <b>before</b> <code>stop</code>.</p>
<h3>Condition-controlled iteration: while</h3>
<pre>password = ""
while password != "secret":
    password = input("Password: ")
print("Access granted")</pre>
<p>Use <code>while</code> when you don't know in advance how many times to repeat. Make sure the condition can become false, or the loop runs forever (an <b>infinite loop</b>).</p>
<h3>Nesting</h3>
<pre>for row in range(3):
    for col in range(4):
        print("*", end="")
    print()</pre>
<div class="box box-prac"><span class="box-title">Running total</span><pre>total = 0
for n in range(1, 6):
    total = total + n
print(total)   # 15</pre></div>`,
  quiz: [
    { q: "What does range(4) produce?", o: ["0, 1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4", "4"], a: 0, e: "" },
    { q: "range(1, 10, 3) produces…", o: ["1, 4, 7", "1, 3, 6, 9", "1, 4, 7, 10", "3, 6, 9"], a: 0, e: "" },
    { q: "Which loop suits 'repeat until the user types quit'?", o: ["while", "for i in range(10)", "if", "elif"], a: 0, e: "" },
    { q: "In an if/elif/else, how many branches run?", o: ["At most one", "All true ones", "All of them", "Two"], a: 0, e: "" },
    { q: "An infinite loop happens when…", o: ["The loop condition never becomes false", "range is used", "There's an else", "A for loop finishes"], a: 0, e: "" },
    { q: "What defines a block of code in Python?", o: ["Indentation", "Curly brackets", "Semicolons", "Capital letters"], a: 0, e: "" },
    { q: "Total after: total=0; for n in range(3): total += n", o: ["3", "6", "0", "2"], a: 0, e: "" },
    { q: "A for loop is…", o: ["Count-controlled", "Condition-controlled", "Selection", "A subprogram"], a: 0, e: "" },
    { q: "How many stars: for r in range(2): for c in range(3): print('*')", o: ["6", "5", "3", "2"], a: 0, e: "" }
  ],
  flashcards: [
    ["if / elif / else", "First true branch runs"],
    ["for", "Count-controlled loop"],
    ["while", "Condition-controlled loop"],
    ["range(a, b, s)", "From a up to (not including) b in steps of s"],
    ["Infinite loop", "Condition never becomes false"],
    ["Nested loop", "A loop inside a loop: inner runs fully each outer pass"]
  ]
});

S2Data.add({
  id: "6c", group: 6, title: "Lists, 2D lists and records",
  summary: "Storing collections of data: lists, two-dimensional lists and records.",
  notes: `
<h3>Lists (one-dimensional)</h3>
<pre>scores = [12, 45, 7, 30]
scores[0]            # 12 (indexes start at 0)
scores[-1]           # 30 (last item)
scores.append(50)    # add to end
len(scores)          # 5
for s in scores:
    print(s)</pre>
<p>Lists are <b>mutable</b>: <code>scores[2] = 9</code> changes the third item.</p>
<h3>Two-dimensional lists</h3>
<p>A list of lists, like a table. Access with <code>[row][column]</code>.</p>
<pre>grid = [[1, 2, 3],
        [4, 5, 6]]
grid[1][2]           # 6 (row 1, column 2)
for row in grid:
    for item in row:
        print(item)</pre>
<h3>Records</h3>
<p>A <b>record</b> groups related fields of different types about one thing. In Python a list (or tuple) can be used:</p>
<pre>student = ["Sam", 15, True]       # name, age, member
students = [["Sam", 15, True],
            ["Asha", 16, False]]
print(students[1][0])             # Asha</pre>
<div class="box box-prac"><span class="box-title">Total and average</span><pre>total = 0
for s in scores:
    total = total + s
average = total / len(scores)</pre></div>`,
  quiz: [
    { q: "The index of the first item in a list is…", o: ["0", "1", "-1", "Depends on the list"], a: 0, e: "" },
    { q: "nums = [4, 8, 15]; nums[2] = ?", o: ["15", "8", "4", "Error"], a: 0, e: "" },
    { q: "nums[-1] gives…", o: ["The last item", "The first item", "An error", "The length"], a: 0, e: "" },
    { q: "Which adds an item to the end of a list?", o: ["append()", "add()", "insert_end()", "push()"], a: 0, e: "" },
    { q: "g = [[1, 2], [3, 4]]; g[1][0] = ?", o: ["3", "2", "1", "4"], a: 0, e: "" },
    { q: "A record stores…", o: ["Related fields about one item", "Only numbers", "One value", "Code"], a: 0, e: "" },
    { q: "len([3, 6, 9, 12]) = ?", o: ["4", "3", "12", "30"], a: 0, e: "" },
    { q: "To loop through every item in a 2D list you need…", o: ["Nested loops", "One loop", "No loop", "A while True loop"], a: 0, e: "" },
    { q: "Lists in Python are…", o: ["Mutable (can be changed)", "Immutable", "Always numbers", "Fixed length"], a: 0, e: "" }
  ],
  flashcards: [
    ["Index", "Position, starting at 0"],
    ["append()", "Add to end"],
    ["len()", "Number of items"],
    ["2D list", "List of lists; access [row][col]"],
    ["Record", "Related fields of mixed types"],
    ["Mutable", "Items can be changed"]
  ]
});

S2Data.add({
  id: "6d", group: 6, title: "Subprograms, files and validation",
  summary: "Functions and procedures, parameters and scope, reading and writing files, and validating input.",
  notes: `
<h3>Subprograms</h3>
<pre>def greet(name):            # procedure: no return value
    print("Hello", name)

def area(w, h):             # function: returns a value
    return w * h

greet("Ali")
a = area(3, 4)              # 12</pre>
<ul>
<li><b>Parameters</b> are the variables in the definition; <b>arguments</b> are the values passed in.</li>
<li><b>Local variables</b> exist only inside the subprogram; <b>global variables</b> can be used anywhere (use sparingly).</li>
<li>Benefits: reuse code, easier testing and debugging, decomposition, teams can work on different parts.</li>
</ul>
<h3>Built-in functions and libraries</h3>
<pre>import random
roll = random.randint(1, 6)   # 1 to 6 inclusive
round(3.14159, 2)             # 3.14</pre>
<h3>Files</h3>
<pre>file = open("scores.txt", "r")   # read
for line in file:
    print(line.strip())
file.close()

file = open("scores.txt", "a")   # append ("w" overwrites)
file.write("Sam,45\\n")
file.close()</pre>
<p>Use <code>line.strip().split(",")</code> to break a comma-separated line into a list.</p>
<h3>Validation</h3>
<table><tr><th>Check</th><th>Example</th></tr>
<tr><td>Presence</td><td>Something has been entered</td></tr>
<tr><td>Length</td><td>Password at least 8 characters</td></tr>
<tr><td>Range</td><td>Age between 11 and 18</td></tr>
<tr><td>Type</td><td>Input is a whole number</td></tr></table>
<pre>age = int(input("Age (11-18): "))
while age < 11 or age > 18:
    age = int(input("Invalid. Age (11-18): "))</pre>
<div class="box box-key"><span class="box-title">Validation vs verification</span>Validation checks data is sensible; it can't check data is <i>correct</i>.</div>`,
  quiz: [
    { q: "A function differs from a procedure because it…", o: ["Returns a value", "Has parameters", "Uses def", "Prints output"], a: 0, e: "" },
    { q: "A local variable can be used…", o: ["Only inside its subprogram", "Anywhere", "Only in loops", "Only in files"], a: 0, e: "" },
    { q: "In def area(w, h), w and h are…", o: ["Parameters", "Arguments", "Constants", "Globals"], a: 0, e: "" },
    { q: "random.randint(1, 6) can return…", o: ["1 to 6 inclusive", "1 to 5", "0 to 6", "Only 6"], a: 0, e: "" },
    { q: "Which file mode adds to the end without deleting?", o: ["\"a\"", "\"w\"", "\"r\"", "\"x\""], a: 0, e: "" },
    { q: "Opening a file in \"w\" mode…", o: ["Overwrites existing contents", "Appends", "Reads only", "Deletes the file permanently"], a: 0, e: "" },
    { q: "A range check ensures…", o: ["A value is within limits", "Something is entered", "The type is correct", "The length is right"], a: 0, e: "" },
    { q: "Checking a password has at least 8 characters is a…", o: ["Length check", "Range check", "Presence check", "Type check"], a: 0, e: "" },
    { q: "\"Sam,45\".split(\",\") gives…", o: ["['Sam', '45']", "['Sam,45']", "'Sam45'", "('Sam', 45)"], a: 0, e: "" }
  ],
  flashcards: [
    ["Function", "Returns a value"],
    ["Procedure", "Doesn't return a value"],
    ["Parameter vs argument", "Name in the definition vs value passed"],
    ["Local / global", "Inside subprogram only / whole program"],
    ["File modes", "r read, w overwrite, a append"],
    ["Validation checks", "Presence, length, range, type"]
  ]
});

S2Data.add({
  id: "6e", group: 6, title: "Testing and debugging",
  summary: "Types of error, test data, test plans and trace tables.",
  notes: `
<h3>Types of error</h3>
<table><tr><th>Error</th><th>What happens</th><th>Example</th></tr>
<tr><td>Syntax</td><td>Breaks the language rules; program won't run</td><td><code>print("Hi"</code> (missing bracket)</td></tr>
<tr><td>Logic</td><td>Runs but gives the wrong result</td><td>Using <code>&lt;</code> instead of <code>&lt;=</code></td></tr>
<tr><td>Runtime</td><td>Crashes while running</td><td>Dividing by zero; index out of range</td></tr></table>
<h3>Test data</h3>
<table><tr><th>Type</th><th>For 'age 11 to 18'</th></tr>
<tr><td>Normal (valid)</td><td>14</td></tr>
<tr><td>Boundary (extreme)</td><td>11 and 18 (and just outside: 10, 19)</td></tr>
<tr><td>Erroneous (invalid)</td><td>"ten", −5, 40</td></tr></table>
<h3>Test plans</h3>
<p>A test plan lists each test, its purpose, the test data, the <b>expected result</b>, and then the actual result. If they differ, there's a bug to fix.</p>
<h3>Trace tables</h3>
<pre>x = 1
while x < 20:
    x = x * 3</pre>
<table><tr><th>x</th><th>x &lt; 20?</th></tr>
<tr><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td></tr><tr><td>9</td><td>True</td></tr><tr><td>27</td><td>False</td></tr></table>
<h3>Debugging tools</h3>
<p>IDEs provide error messages with line numbers, breakpoints, stepping through code line by line, and watching variable values.</p>
<div class="box box-key"><span class="box-title">Iterative testing</span>Test each part as you build it, not just at the end.</div>`,
  quiz: [
    { q: "A missing bracket causes a…", o: ["Syntax error", "Logic error", "Runtime error", "No error"], a: 0, e: "" },
    { q: "A program runs but gives the wrong answer. This is a…", o: ["Logic error", "Syntax error", "Runtime error", "Compiler error"], a: 0, e: "" },
    { q: "Dividing by zero causes a…", o: ["Runtime error", "Syntax error", "Logic error", "Validation error"], a: 0, e: "" },
    { q: "For a range 1–100, boundary data includes…", o: ["1 and 100", "50", "'abc'", "-999"], a: 0, e: "" },
    { q: "Erroneous test data is…", o: ["Data that should be rejected", "Typical valid data", "Data at the limits", "Random data"], a: 0, e: "" },
    { q: "A test plan compares the actual result with…", o: ["The expected result", "The code length", "Another program", "The syntax"], a: 0, e: "" },
    { q: "A breakpoint…", o: ["Pauses the program at a chosen line", "Deletes code", "Fixes errors automatically", "Is a syntax error"], a: 0, e: "" },
    { q: "x=1; while x<20: x=x*3. Final x?", o: ["27", "9", "20", "81"], a: 0, e: "" },
    { q: "Testing parts of a program as you build it is…", o: ["Iterative testing", "Final testing", "Validation", "Compilation"], a: 0, e: "" }
  ],
  flashcards: [
    ["Syntax error", "Breaks language rules; won't run"],
    ["Logic error", "Runs, wrong result"],
    ["Runtime error", "Crashes during execution"],
    ["Normal / boundary / erroneous", "Typical / at the limits / invalid"],
    ["Test plan", "Test, data, expected result, actual result"],
    ["Trace table", "Track variables line by line"]
  ]
});

S2Data.detail("6a", { mistakes: ["Forgetting that input() returns a string, so '5' + '3' gives '53'."], tips: ["Use % 2 == 0 to test whether a number is even."], fact: "Python's creator, Guido van Rossum, held the title 'Benevolent Dictator For Life' until 2018." });
S2Data.detail("6b", { mistakes: ["Off-by-one errors with range: range(1, 10) stops at 9."], tips: ["Use for when you know how many repeats; while when you don't."], fact: "Python uses indentation instead of brackets to make code easier to read." });
S2Data.detail("6c", { mistakes: ["Starting list indexes at 1 instead of 0."], tips: ["In 2D lists, think [row][column], like a spreadsheet."], fact: "Python lists can hold different types in the same list, unlike arrays in many languages." });
S2Data.detail("6d", { mistakes: ["Opening a file with 'w' when you meant to add to it: 'w' wipes it."], tips: ["Always close files, or use 'with open(...) as f:' which closes them for you."], fact: "Validation can stop impossible data, like an age of 200, but can't spot a mistyped 15 instead of 16." });
S2Data.detail("6e", { mistakes: ["Choosing only normal test data and missing boundary cases."], tips: ["Always test both sides of every boundary."], fact: "NASA lost the $125 million Mars Climate Orbiter in 1999 because one team used imperial units and another metric." });
