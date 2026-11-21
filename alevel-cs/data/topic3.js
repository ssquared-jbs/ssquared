/* A-level Computer Science² — consequences, networking, databases, big data, functional programming and the NEA */

S2Data.add({
  id: "8a", group: 8, title: "Consequences of uses of computing",
  summary: "Moral, ethical, legal and cultural issues; the power of software engineers and companies; key UK legislation and the challenges of regulating technology.",
  notes: `
<h3>Individual and corporate power</h3>
<p>Software engineers and companies have huge power: their code can affect millions of people at once. Decisions about what data to collect, what to automate and how algorithms make decisions carry <b>moral</b> and <b>ethical</b> responsibility.</p>
<h3>Key issues</h3>
<table><tr><th>Issue</th><th>Examples</th></tr>
<tr><td>Privacy</td><td>Collection, analysis and sale of personal data; tracking; surveillance</td></tr>
<tr><td>Bias</td><td>Algorithms trained on biased data can discriminate (e.g. in hiring or credit)</td></tr>
<tr><td>Automation and jobs</td><td>Some jobs replaced; new ones created</td></tr>
<tr><td>Cultural</td><td>Changes in communication, the digital divide, spread of misinformation</td></tr>
<tr><td>Environmental</td><td>Energy use of data centres; e-waste</td></tr>
<tr><td>Security</td><td>Hacking, data breaches, cyber warfare</td></tr></table>
<h3>UK legislation</h3>
<table><tr><th>Law</th><th>Covers</th></tr>
<tr><td>Data Protection Act 2018 (UK GDPR)</td><td>How personal data is collected, stored and processed; individuals' rights</td></tr>
<tr><td>Computer Misuse Act 1990</td><td>Unauthorised access, access with intent to commit further crime, unauthorised modification</td></tr>
<tr><td>Copyright, Designs and Patents Act 1988</td><td>Protects software, media and other creative work</td></tr>
<tr><td>Regulation of Investigatory Powers Act 2000</td><td>Lawful interception and surveillance of communications</td></tr></table>
<h3>Challenges of regulation</h3>
<ul>
<li>Technology changes faster than laws can be written.</li>
<li>The internet crosses borders, so jurisdiction is unclear.</li>
<li>Balancing privacy against security, and freedom of speech against harm.</li>
<li>Encryption protects users but also hides criminals.</li>
</ul>`,
  quiz: [
    { q: "Which law covers unauthorised access to computers?", o: ["Computer Misuse Act 1990", "Data Protection Act 2018", "Copyright Act 1988", "RIPA 2000"], a: 0, e: "" },
    { q: "Which law governs personal data?", o: ["Data Protection Act 2018", "Computer Misuse Act", "Copyright Act", "RIPA"], a: 0, e: "" },
    { q: "Copying software illegally breaks the…", o: ["Copyright, Designs and Patents Act 1988", "Data Protection Act", "RIPA", "Computer Misuse Act"], a: 0, e: "" },
    { q: "RIPA 2000 covers…", o: ["Interception and surveillance", "Software piracy", "Hacking", "Data accuracy"], a: 0, e: "" },
    { q: "A challenge of regulating the internet is…", o: ["It crosses national borders", "It's too slow", "It's not used much", "It's offline"], a: 0, e: "" },
    { q: "Algorithmic bias often comes from…", o: ["Biased training data", "Fast processors", "Encryption", "Compression"], a: 0, e: "" },
    { q: "The digital divide is…", o: ["Unequal access to technology", "A type of compression", "A network topology", "A database key"], a: 0, e: "" },
    { q: "Why do software engineers have significant power?", o: ["Their code can affect millions of people", "They make laws", "They own all data", "They run governments"], a: 0, e: "" },
    { q: "An environmental issue of computing is…", o: ["Data centre energy use", "Faster CPUs", "Unicode", "Normalisation"], a: 0, e: "" },
    { q: "Encryption raises a dilemma between…", o: ["Privacy and security", "Speed and size", "RAM and ROM", "Lossy and lossless"], a: 0, e: "" }
  ],
  flashcards: [
    ["Data Protection Act 2018", "Personal data: collection, storage, rights"],
    ["Computer Misuse Act 1990", "Unauthorised access and modification"],
    ["Copyright, Designs and Patents Act 1988", "Protects software and creative work"],
    ["RIPA 2000", "Interception and surveillance"],
    ["Moral vs legal", "What is right vs what the law requires"],
    ["Algorithmic bias", "Unfair outcomes from biased data or design"],
    ["Regulation challenge 1", "Technology outpaces law"],
    ["Regulation challenge 2", "Cross-border jurisdiction"],
    ["Digital divide", "Unequal access to technology"],
    ["Engineer power", "Decisions in code affect millions"]
  ]
});

S2Data.add({
  id: "9a", group: 9, title: "Communication basics and networks",
  summary: "Serial and parallel transmission, synchronous and asynchronous communication, baud rate, bit rate, bandwidth and latency, topologies, network models and wireless networking.",
  notes: `
<h3>Transmission</h3>
<table><tr><th></th><th>Serial</th><th>Parallel</th></tr>
<tr><td>How</td><td>One bit at a time on a single wire</td><td>Several bits at once on multiple wires</td></tr>
<tr><td>Pros</td><td>Cheaper; reliable over long distances; no skew or crosstalk</td><td>Fast over very short distances</td></tr>
<tr><td>Cons</td><td>Fewer bits per signal</td><td><b>Skew</b> (bits arrive at different times) and <b>crosstalk</b></td></tr></table>
<ul>
<li><b>Synchronous:</b> sender and receiver share a clock signal. <b>Asynchronous:</b> each byte is framed by a <b>start bit</b> and <b>stop bit</b> so the receiver can synchronise.</li>
<li><b>Baud rate:</b> signal changes per second. <b>Bit rate</b> = baud rate × bits per signal.</li>
<li><b>Bandwidth:</b> range of frequencies a channel can carry; bit rate is directly proportional to it.</li>
<li><b>Latency:</b> delay between sending and receiving. <b>Protocol:</b> a set of rules for communication.</li>
</ul>
<h3>Topologies</h3>
<p>A <b>physical star</b> connects every device to a central switch: if one cable fails, others keep working. A <b>logical bus</b> describes how data flows: e.g. a physical star whose hub broadcasts to every device behaves like a bus.</p>
<h3>Network models</h3>
<table><tr><th></th><th>Client-server</th><th>Peer-to-peer</th></tr>
<tr><td>Structure</td><td>Central servers provide services to clients</td><td>Equal peers share resources</td></tr>
<tr><td>Pros</td><td>Central security, backup, management</td><td>Cheap; no single point of failure</td></tr>
<tr><td>Cons</td><td>Expensive; server is a single point of failure</td><td>Harder to manage and secure</td></tr></table>
<h3>Wireless networking</h3>
<ul>
<li>Devices need a <b>wireless network adapter</b>; a <b>wireless access point</b> connects them to a wired network.</li>
<li><b>Security:</b> strong encryption (WPA2/WPA3), disabling SSID broadcast, MAC address allow lists.</li>
<li><b>CSMA/CA</b> (carrier sense multiple access with collision avoidance): a device listens; if the channel is idle it transmits, otherwise it waits a random time. With <b>RTS/CTS</b>, it sends 'request to send' and waits for 'clear to send' before transmitting, reducing collisions from hidden nodes.</li>
</ul>`,
  quiz: [
    { q: "Skew is a problem in…", o: ["Parallel transmission", "Serial transmission", "Wireless only", "Fibre only"], a: 0, e: "" },
    { q: "Asynchronous transmission uses…", o: ["Start and stop bits", "A shared clock", "Parallel wires", "Parity only"], a: 0, e: "" },
    { q: "Baud rate is…", o: ["Signal changes per second", "Bits per second always", "Latency", "Bandwidth"], a: 0, e: "" },
    { q: "Baud 1000, 4 bits per signal: bit rate =", o: ["4000 bps", "1000 bps", "250 bps", "1004 bps"], a: 0, e: "" },
    { q: "Latency is…", o: ["Delay in transmission", "Bandwidth", "Bit rate", "Error rate"], a: 0, e: "" },
    { q: "A physical star topology connects devices to…", o: ["A central switch", "A single cable", "Each other in a ring", "Nothing"], a: 0, e: "" },
    { q: "A peer-to-peer network…", o: ["Has no central server", "Has one main server", "Needs a mainframe", "Can't share files"], a: 0, e: "" },
    { q: "CSMA/CA stands for carrier sense multiple access with…", o: ["Collision avoidance", "Collision detection", "Central access", "Clock alignment"], a: 0, e: "" },
    { q: "RTS/CTS helps with…", o: ["Hidden node collisions", "Encryption", "Compression", "DNS"], a: 0, e: "" },
    { q: "Which improves Wi-Fi security?", o: ["WPA2/WPA3 encryption", "Broadcasting the SSID loudly", "Removing passwords", "Using parallel cables"], a: 0, e: "" }
  ],
  flashcards: [
    ["Serial vs parallel", "One bit at a time vs several at once"],
    ["Skew", "Parallel bits arrive at different times"],
    ["Synchronous", "Shared clock signal"],
    ["Asynchronous", "Start and stop bits frame each byte"],
    ["Baud rate", "Signal changes per second"],
    ["Bit rate", "Baud × bits per signal"],
    ["Latency", "Delay between send and receive"],
    ["Physical star / logical bus", "Wired as a star; data broadcast like a bus"],
    ["CSMA/CA", "Listen, transmit if idle, else wait random time"],
    ["RTS/CTS", "Request to send / clear to send"]
  ]
});

S2Data.add({
  id: "9b", group: 9, title: "TCP/IP, protocols and IP addressing",
  summary: "The TCP/IP stack, sockets and ports, MAC addresses, standard protocols, IP addresses and subnet masks, IPv4 and IPv6, public and private addresses, DHCP, NAT and port forwarding.",
  notes: `
<h3>The TCP/IP stack</h3>
<table><tr><th>Layer</th><th>Role</th></tr>
<tr><td>Application</td><td>Chooses the protocol for the service (HTTP, SMTP, FTP…)</td></tr>
<tr><td>Transport</td><td>TCP splits data into packets, numbers them, adds port numbers, ensures reliable delivery</td></tr>
<tr><td>Network (internet)</td><td>Adds source and destination IP addresses; routing</td></tr>
<tr><td>Link</td><td>Adds MAC addresses; transmits over the physical network</td></tr></table>
<p>A <b>socket</b> is an IP address plus a port number, identifying one end of a connection. A <b>MAC address</b> is a unique 48-bit hardware address for a network interface.</p>
<h3>Well-known ports and protocols</h3>
<table><tr><th>Protocol</th><th>Port</th><th>Use</th></tr>
<tr><td>FTP</td><td>20/21</td><td>File transfer</td></tr>
<tr><td>SSH</td><td>22</td><td>Secure remote access</td></tr>
<tr><td>SMTP</td><td>25</td><td>Sending email</td></tr>
<tr><td>HTTP</td><td>80</td><td>Web pages</td></tr>
<tr><td>POP3</td><td>110</td><td>Retrieving email</td></tr>
<tr><td>HTTPS</td><td>443</td><td>Secure web pages</td></tr></table>
<h3>IP addresses</h3>
<ul>
<li>An IP address has a <b>network identifier</b> and a <b>host identifier</b>. A <b>subnet mask</b> is ANDed with the address to find the network part.</li>
<li><b>IPv4</b> is 32 bits (about 4.3 billion addresses), running out; <b>IPv6</b> is 128 bits, written in hex.</li>
<li><b>Public (routable)</b> addresses are unique on the internet; <b>private (non-routable)</b> addresses (e.g. 192.168.x.x) are used inside local networks.</li>
<li><b>DHCP</b> automatically assigns IP addresses from a pool, temporarily.</li>
<li><b>NAT</b> lets many private addresses share one public address; the router keeps a translation table.</li>
<li><b>Port forwarding</b> sends incoming traffic on a given port to a specific private device, e.g. a game server.</li>
</ul>
<div class="box box-key"><span class="box-title">Example</span>192.168.10.37 AND 255.255.255.0 = network 192.168.10.0, host 37.</div>`,
  quiz: [
    { q: "Which TCP/IP layer adds IP addresses?", o: ["Network", "Transport", "Application", "Link"], a: 0, e: "" },
    { q: "Which layer adds port numbers and splits data into packets?", o: ["Transport", "Network", "Link", "Application"], a: 0, e: "" },
    { q: "A socket is…", o: ["IP address + port", "A MAC address", "A cable", "A protocol"], a: 0, e: "" },
    { q: "HTTPS uses port…", o: ["443", "80", "25", "21"], a: 0, e: "" },
    { q: "SMTP is used for…", o: ["Sending email", "Retrieving email", "Web pages", "File transfer"], a: 0, e: "" },
    { q: "IPv4 addresses are…", o: ["32 bits", "128 bits", "48 bits", "64 bits"], a: 0, e: "" },
    { q: "A MAC address is…", o: ["48 bits", "32 bits", "128 bits", "16 bits"], a: 0, e: "" },
    { q: "DHCP…", o: ["Assigns IP addresses automatically", "Translates domain names", "Encrypts data", "Filters packets"], a: 0, e: "" },
    { q: "NAT allows…", o: ["Many private addresses to share one public address", "IPv6 only", "Email sending", "Port 80 only"], a: 0, e: "" },
    { q: "192.168.10.37 with mask 255.255.255.0 has network…", o: ["192.168.10.0", "192.168.0.0", "0.0.0.37", "255.255.255.37"], a: 0, e: "" }
  ],
  flashcards: [
    ["TCP/IP layers", "Application, transport, network, link"],
    ["Transport layer", "TCP: packets, numbering, ports, reliability"],
    ["Network layer", "IP addresses, routing"],
    ["Link layer", "MAC addresses, physical transmission"],
    ["Socket", "IP address + port"],
    ["Ports: HTTP/HTTPS/SMTP", "80 / 443 / 25"],
    ["IPv4 vs IPv6", "32-bit vs 128-bit"],
    ["Subnet mask", "AND with IP to get network ID"],
    ["DHCP", "Automatic temporary IP allocation"],
    ["NAT", "Private addresses share a public one"]
  ]
});

S2Data.add({
  id: "9c", group: 9, title: "The internet, security and client-server",
  summary: "Packet switching, routers and gateways, URLs and DNS, firewalls, symmetric and asymmetric encryption, digital signatures and certificates, malware, REST, JSON and XML, and thin and thick clients.",
  notes: `
<h3>Packet switching</h3>
<p>Data is split into <b>packets</b>, each with a header (source and destination addresses, packet number, time to live), payload and trailer (checksum). Packets may take different routes via <b>routers</b> and are reassembled in order. <b>Gateways</b> connect networks using different protocols.</p>
<h3>URLs and DNS</h3>
<p>A <b>URL</b> identifies a resource (protocol, domain, path). A <b>fully qualified domain name</b> includes the host name (e.g. www.example.co.uk). The <b>Domain Name System</b> resolves names to IP addresses using a hierarchy of name servers. Internet registries allocate addresses and domains.</p>
<h3>Security</h3>
<table><tr><th>Measure</th><th>How</th></tr>
<tr><td>Firewall</td><td>Packet filtering (by IP/port/protocol), proxy server, stateful inspection</td></tr>
<tr><td>Symmetric encryption</td><td>Same key encrypts and decrypts; key exchange is the problem</td></tr>
<tr><td>Asymmetric encryption</td><td>Encrypt with the recipient's <b>public key</b>; only their <b>private key</b> decrypts</td></tr>
<tr><td>Digital signature</td><td>A hash of the message encrypted with the sender's private key; the receiver decrypts with the public key and compares hashes</td></tr>
<tr><td>Digital certificate</td><td>Issued by a certificate authority, verifying that a public key belongs to the named owner</td></tr></table>
<p><b>Malware:</b> <b>viruses</b> attach to files and need a host; <b>worms</b> self-replicate across networks; <b>trojans</b> disguise themselves as useful software. Protection: patches, anti-malware, education, good code quality.</p>
<h3>The client-server model</h3>
<ul>
<li>The <b>WebSocket</b> protocol provides a full-duplex, persistent connection between browser and server.</li>
<li><b>CRUD</b> maps to <b>REST</b> HTTP methods and SQL: Create → POST → INSERT; Retrieve → GET → SELECT; Update → PUT → UPDATE; Delete → DELETE → DELETE.</li>
<li><b>JSON</b> is more compact, easier for people to read and faster for computers to parse than <b>XML</b>.</li>
</ul>
<table><tr><th></th><th>Thin client</th><th>Thick client</th></tr>
<tr><td>Processing</td><td>Mostly on the server</td><td>Mostly on the client</td></tr>
<tr><td>Pros</td><td>Cheap devices, central updates and security</td><td>Works offline, less server load</td></tr>
<tr><td>Cons</td><td>Depends on network and server</td><td>Costlier devices; harder to manage</td></tr></table>`,
  quiz: [
    { q: "Packets on the internet…", o: ["May take different routes", "Always take the same route", "Never have headers", "Can't be reassembled"], a: 0, e: "" },
    { q: "A gateway connects networks using…", o: ["Different protocols", "The same protocol only", "No addresses", "Parallel cables"], a: 0, e: "" },
    { q: "DNS translates…", o: ["Domain names to IP addresses", "IP to MAC", "Text to binary", "HTTP to HTTPS"], a: 0, e: "" },
    { q: "In asymmetric encryption, a message to Bob is encrypted with…", o: ["Bob's public key", "Bob's private key", "The sender's private key", "A shared key"], a: 0, e: "" },
    { q: "A digital signature is created with the sender's…", o: ["Private key", "Public key", "Certificate authority's key", "Password"], a: 0, e: "" },
    { q: "A worm differs from a virus because it…", o: ["Self-replicates without a host file", "Needs a host file", "Is harmless", "Is a firewall"], a: 0, e: "" },
    { q: "In REST, retrieving data uses…", o: ["GET", "POST", "PUT", "DELETE"], a: 0, e: "" },
    { q: "CRUD 'Create' maps to SQL…", o: ["INSERT", "SELECT", "UPDATE", "CREATE TABLE only"], a: 0, e: "" },
    { q: "An advantage of JSON over XML is…", o: ["More compact and easier to parse", "Supports more tags", "Always encrypted", "Binary format"], a: 0, e: "" },
    { q: "A thin client relies on…", o: ["The server for processing", "Its own processing", "No network", "Local storage only"], a: 0, e: "" }
  ],
  flashcards: [
    ["Packet switching", "Split into packets, routed independently, reassembled"],
    ["Router vs gateway", "Forwards packets vs links different protocols"],
    ["DNS", "Resolves domain names to IP addresses"],
    ["Firewall methods", "Packet filtering, proxy, stateful inspection"],
    ["Symmetric", "One shared key; key exchange problem"],
    ["Asymmetric", "Public key encrypts; private key decrypts"],
    ["Digital signature", "Hash encrypted with sender's private key"],
    ["Digital certificate", "CA verifies who owns a public key"],
    ["CRUD ↔ REST", "POST, GET, PUT, DELETE"],
    ["Thin vs thick client", "Server processing vs local processing"]
  ]
});

S2Data.add({
  id: "10a", group: 10, title: "Data modelling and normalisation",
  summary: "Entities and attributes, entity relationship diagrams, relational databases, primary, composite and foreign keys, and normalisation to third normal form.",
  notes: `
<h3>Data modelling</h3>
<ul>
<li>An <b>entity</b> is a thing about which data is stored (e.g. Student); <b>attributes</b> are its properties.</li>
<li><b>Entity description:</b> Student(<u>StudentID</u>, Name, DateOfBirth, TutorID).</li>
<li><b>ER diagrams</b> show relationships: one-to-one, one-to-many, many-to-many (crow's feet show 'many').</li>
<li>A many-to-many relationship is resolved with a <b>link (junction) entity</b>, e.g. Student—Enrolment—Course.</li>
</ul>
<h3>Keys</h3>
<table><tr><th>Key</th><th>Meaning</th></tr>
<tr><td>Primary key</td><td>Uniquely identifies each record</td></tr>
<tr><td>Composite key</td><td>Two or more attributes together form the primary key</td></tr>
<tr><td>Foreign key</td><td>An attribute that is the primary key in another table, creating a relationship</td></tr></table>
<h3>Normalisation</h3>
<table><tr><th>Form</th><th>Rule</th></tr>
<tr><td>1NF</td><td>No repeating groups; all attributes atomic</td></tr>
<tr><td>2NF</td><td>1NF, and no <b>partial dependencies</b> (every non-key attribute depends on the whole of a composite key)</td></tr>
<tr><td>3NF</td><td>2NF, and no <b>non-key dependencies</b> (non-key attributes depend only on the key)</td></tr></table>
<div class="box box-key"><span class="box-title">3NF summary</span>Every attribute depends on "the key, the whole key, and nothing but the key".</div>
<h3>Why normalise?</h3>
<p>It removes <b>redundancy</b> (duplicated data) and avoids <b>update, insertion and deletion anomalies</b>, keeping data consistent and making the database easier to maintain.</p>`,
  quiz: [
    { q: "A primary key…", o: ["Uniquely identifies a record", "Links to another table", "Is always a name", "Is optional"], a: 0, e: "" },
    { q: "A foreign key…", o: ["Is a primary key in another table", "Is unique in its own table always", "Has no relationship", "Is a composite key"], a: 0, e: "" },
    { q: "A composite key is…", o: ["Two or more attributes forming a key", "A key in another table", "An encrypted key", "A sorted key"], a: 0, e: "" },
    { q: "1NF requires…", o: ["No repeating groups; atomic values", "No partial dependencies", "No non-key dependencies", "Foreign keys"], a: 0, e: "" },
    { q: "2NF removes…", o: ["Partial dependencies", "Repeating groups", "Primary keys", "All foreign keys"], a: 0, e: "" },
    { q: "3NF removes…", o: ["Non-key dependencies", "Repeating groups only", "Primary keys", "Tables"], a: 0, e: "" },
    { q: "A many-to-many relationship is resolved with…", o: ["A link entity", "A primary key only", "Deleting a table", "A foreign key in both"], a: 0, e: "" },
    { q: "Normalisation reduces…", o: ["Redundancy", "The number of users", "Security", "Speed of hardware"], a: 0, e: "" },
    { q: "An update anomaly occurs when…", o: ["Changing data in one place leaves inconsistent copies", "A table is deleted", "Keys are unique", "A query runs"], a: 0, e: "" },
    { q: "In an ER diagram, crow's feet show…", o: ["The 'many' side", "The 'one' side", "Primary keys", "Attributes"], a: 0, e: "" }
  ],
  flashcards: [
    ["Entity", "Thing about which data is stored"],
    ["Attribute", "Property of an entity"],
    ["Primary key", "Uniquely identifies a record"],
    ["Composite key", "Multiple attributes as primary key"],
    ["Foreign key", "Links to a primary key in another table"],
    ["1NF", "Atomic values, no repeating groups"],
    ["2NF", "No partial dependencies"],
    ["3NF", "No non-key dependencies"],
    ["Link entity", "Resolves many-to-many"],
    ["Why normalise", "Less redundancy, no anomalies, consistency"]
  ]
});

S2Data.add({
  id: "10b", group: 10, title: "SQL and concurrency",
  summary: "Retrieving, inserting, updating and deleting data with SQL, joining tables, defining tables, and managing concurrent access in client-server databases.",
  notes: `
<h3>Retrieving data</h3>
<pre>SELECT Name, Grade
FROM Student
WHERE Grade &gt;= 7 AND Year = 13
ORDER BY Name ASC;</pre>
<h3>Joining tables</h3>
<pre>SELECT Student.Name, Tutor.Name
FROM Student
JOIN Tutor ON Student.TutorID = Tutor.TutorID;</pre>
<p>(Equivalently: <code>FROM Student, Tutor WHERE Student.TutorID = Tutor.TutorID</code>.)</p>
<h3>Changing data</h3>
<pre>INSERT INTO Student (StudentID, Name, Year)
VALUES (101, 'Asha', 12);

UPDATE Student SET Year = 13 WHERE StudentID = 101;

DELETE FROM Student WHERE StudentID = 101;</pre>
<h3>Defining a table</h3>
<pre>CREATE TABLE Student (
  StudentID INT NOT NULL PRIMARY KEY,
  Name VARCHAR(40),
  DateOfBirth DATE,
  TutorID INT
);</pre>
<p>Common types: INT, FLOAT/REAL, CHAR(n) (fixed length), VARCHAR(n) (variable length), DATE, BOOLEAN.</p>
<h3>Client-server databases and concurrency</h3>
<p>Many clients may access the database at once. If two users update the same record at the same time, one change can be lost (a <b>lost update</b>). Solutions:</p>
<table><tr><th>Method</th><th>How</th></tr>
<tr><td>Record locks</td><td>A record is locked while one user edits it; others must wait (risk of <b>deadlock</b>)</td></tr>
<tr><td>Serialisation</td><td>Transactions are executed one after another, not overlapping</td></tr>
<tr><td>Timestamp ordering</td><td>Each transaction and record has read/write timestamps; conflicting transactions are rolled back</td></tr>
<tr><td>Commitment ordering</td><td>Transactions are committed in an order that prevents conflicts, based on their dependencies</td></tr></table>`,
  quiz: [
    { q: "Which SQL keyword filters rows?", o: ["WHERE", "ORDER BY", "FROM", "SET"], a: 0, e: "" },
    { q: "To sort results, use…", o: ["ORDER BY", "GROUP", "SORT", "WHERE"], a: 0, e: "" },
    { q: "To change an existing record, use…", o: ["UPDATE … SET", "INSERT INTO", "SELECT", "CREATE"], a: 0, e: "" },
    { q: "To add a new record, use…", o: ["INSERT INTO … VALUES", "UPDATE", "ADD ROW", "SELECT INTO"], a: 0, e: "" },
    { q: "VARCHAR(40) stores…", o: ["Variable-length text up to 40 characters", "Exactly 40 characters", "A 40-digit number", "A date"], a: 0, e: "" },
    { q: "A JOIN combines…", o: ["Rows from related tables", "Two databases", "Columns into one", "Keys into hashes"], a: 0, e: "" },
    { q: "A lost update happens when…", o: ["Two users change the same record at once", "A table is created", "A query is sorted", "A key is unique"], a: 0, e: "" },
    { q: "A risk of record locking is…", o: ["Deadlock", "Redundancy", "Normalisation", "Encryption"], a: 0, e: "" },
    { q: "Serialisation means transactions…", o: ["Run one after another", "Run simultaneously", "Are deleted", "Are encrypted"], a: 0, e: "" },
    { q: "Timestamp ordering…", o: ["Uses timestamps to detect conflicting transactions", "Sorts records by date", "Deletes old records", "Locks the whole database"], a: 0, e: "" }
  ],
  flashcards: [
    ["SELECT … FROM … WHERE", "Retrieve filtered data"],
    ["ORDER BY", "Sort results (ASC/DESC)"],
    ["JOIN … ON", "Combine related tables"],
    ["INSERT INTO … VALUES", "Add a record"],
    ["UPDATE … SET … WHERE", "Change records"],
    ["DELETE FROM … WHERE", "Remove records"],
    ["CREATE TABLE", "Define fields, types and primary key"],
    ["Record locking", "Lock while editing; risk of deadlock"],
    ["Timestamp ordering", "Read/write timestamps detect conflicts"],
    ["Commitment ordering", "Commit in a conflict-free order"]
  ]
});

S2Data.add({
  id: "11a", group: 11, title: "Big data",
  summary: "Volume, velocity and variety, why big data needs distributed processing, machine learning, functional programming for big data, and fact-based models and graph schema.",
  notes: `
<h3>What is big data?</h3>
<p>Data that won't fit into the processing capacity of a single machine or conventional database. It's characterised by:</p>
<table><tr><th>Feature</th><th>Meaning</th></tr>
<tr><td>Volume</td><td>Too much data to store or process on one server</td></tr>
<tr><td>Velocity</td><td>Data arrives fast and often needs real-time processing (e.g. streams, sensors)</td></tr>
<tr><td>Variety</td><td>Many types: structured and unstructured (text, video, sensor readings)</td></tr></table>
<p>Unstructured data doesn't fit a relational database. <b>Machine learning</b> techniques are used to discover patterns in big data.</p>
<h3>Distributed processing</h3>
<p>Big data is processed across many machines in parallel. <b>Functional programming</b> suits this because functions are <b>stateless</b> with <b>no side effects</b> and data is <b>immutable</b>, so tasks can be split across machines safely; higher-order functions like map and reduce express parallel operations naturally.</p>
<h3>Modelling big data</h3>
<ul>
<li><b>Fact-based model:</b> each fact is a single piece of immutable data with a timestamp; facts are never overwritten, only added. This avoids losing information and allows recovery from errors.</li>
<li><b>Graph schema:</b> <b>nodes</b> represent entities, <b>edges</b> represent relationships, and <b>properties</b> store information about nodes (e.g. a social network).</li>
</ul>`,
  quiz: [
    { q: "The three Vs of big data are volume, velocity and…", o: ["Variety", "Validity", "Value", "Visibility"], a: 0, e: "" },
    { q: "Velocity refers to…", o: ["Speed data arrives and must be processed", "Amount of data", "Types of data", "Accuracy"], a: 0, e: "" },
    { q: "Variety refers to…", o: ["Different types and formats of data", "Speed", "Size", "Cost"], a: 0, e: "" },
    { q: "Why is big data hard to store in relational databases?", o: ["Much of it is unstructured", "It's too small", "It's encrypted", "It has no values"], a: 0, e: "" },
    { q: "Big data is processed using…", o: ["Distributed processing across many machines", "One fast PC", "A single spreadsheet", "Paper"], a: 0, e: "" },
    { q: "Functional programming suits big data because functions…", o: ["Have no side effects", "Change global state", "Are slow", "Need locks"], a: 0, e: "" },
    { q: "In a fact-based model, facts are…", o: ["Immutable and timestamped", "Overwritten regularly", "Deleted after use", "Unstructured only"], a: 0, e: "" },
    { q: "In a graph schema, edges represent…", o: ["Relationships", "Entities", "Properties", "Tables"], a: 0, e: "" },
    { q: "Patterns in big data are often found using…", o: ["Machine learning", "Bubble sort", "Caesar ciphers", "Parity bits"], a: 0, e: "" },
    { q: "A social network is well modelled by…", o: ["A graph schema", "A single table", "A stack", "A queue"], a: 0, e: "" }
  ],
  flashcards: [
    ["Big data", "Too large for one machine/conventional database"],
    ["Volume", "Too much data for one server"],
    ["Velocity", "Data arrives fast; real-time processing"],
    ["Variety", "Structured and unstructured types"],
    ["Distributed processing", "Many machines process in parallel"],
    ["Why functional?", "Stateless, immutable, no side effects → easy to parallelise"],
    ["Fact-based model", "Immutable, timestamped facts; never overwritten"],
    ["Graph schema", "Nodes, edges, properties"],
    ["Machine learning", "Finds patterns in big data"],
    ["Unstructured data", "Doesn't fit rows and columns"]
  ]
});

S2Data.add({
  id: "12a", group: 12, title: "Functional programming",
  summary: "Function types, first-class objects, function application, partial application and composition, higher-order functions map, filter and fold, and list processing.",
  notes: `
<h3>Functions</h3>
<ul>
<li>A function f: A → B maps every value in the <b>domain</b> A to a value in the <b>co-domain</b> B. Its <b>type</b> is A → B.</li>
<li>Functions are <b>first-class objects</b>: they can be passed as arguments, returned from functions and assigned to variables.</li>
<li><b>Function application:</b> giving a function its arguments, e.g. <code>add 3 4</code> = 7.</li>
<li><b>Partial application:</b> fixing some arguments to create a new function: <code>add3 = add 3</code>, so <code>add3 4</code> = 7. The type of add is <code>int → int → int</code>.</li>
<li><b>Composition:</b> <code>g ∘ f</code> means apply f then g: (g ∘ f)(x) = g(f(x)). Requires f's co-domain to match g's domain.</li>
</ul>
<h3>Higher-order functions</h3>
<p>Functions that take a function as an argument or return one.</p>
<pre>map (*2) [1, 2, 3]          → [2, 4, 6]
filter (&gt;2) [1, 2, 3, 4]     → [3, 4]
foldl (+) 0 [1, 2, 3, 4]    → 10</pre>
<ul>
<li><b>map</b> applies a function to every item.</li>
<li><b>filter</b> keeps items satisfying a condition.</li>
<li><b>fold (reduce)</b> combines items into a single value using a function and a starting value.</li>
</ul>
<h3>Lists</h3>
<p>A list is <b>head</b> (first element) followed by <b>tail</b> (the rest, itself a list).</p>
<table><tr><th>Operation</th><th>Example</th><th>Result</th></tr>
<tr><td>head</td><td>head [4, 5, 6]</td><td>4</td></tr>
<tr><td>tail</td><td>tail [4, 5, 6]</td><td>[5, 6]</td></tr>
<tr><td>empty test</td><td>null []</td><td>True</td></tr>
<tr><td>length</td><td>length [4, 5, 6]</td><td>3</td></tr>
<tr><td>prepend</td><td>3 : [4, 5]</td><td>[3, 4, 5]</td></tr>
<tr><td>append</td><td>[4, 5] ++ [6]</td><td>[4, 5, 6]</td></tr></table>
<div class="box box-key"><span class="box-title">Why functional?</span>No side effects and immutable data make programs easier to reason about, test and run in parallel.</div>`,
  quiz: [
    { q: "map (*2) [1, 2, 3] gives…", o: ["[2, 4, 6]", "[1, 2, 3, 2]", "12", "[3, 4, 5]"], a: 0, e: "" },
    { q: "filter (>2) [1, 2, 3, 4] gives…", o: ["[3, 4]", "[1, 2]", "[2, 3, 4]", "7"], a: 0, e: "" },
    { q: "foldl (+) 0 [1, 2, 3, 4] gives…", o: ["10", "24", "[1, 3, 6, 10]", "0"], a: 0, e: "" },
    { q: "head [7, 8, 9] is…", o: ["7", "[8, 9]", "9", "3"], a: 0, e: "" },
    { q: "tail [7, 8, 9] is…", o: ["[8, 9]", "7", "9", "[7, 8]"], a: 0, e: "" },
    { q: "Functions as first-class objects can be…", o: ["Passed as arguments and returned", "Only called", "Never stored", "Only used once"], a: 0, e: "" },
    { q: "(g ∘ f)(x) means…", o: ["g(f(x))", "f(g(x))", "f(x) × g(x)", "f(x) + g(x)"], a: 0, e: "" },
    { q: "Fixing some arguments to make a new function is…", o: ["Partial application", "Composition", "Folding", "Mapping"], a: 0, e: "" },
    { q: "If f(x) = x + 1 and g(x) = 2x, (g ∘ f)(3) =", o: ["8", "7", "6", "9"], a: 0, e: "" },
    { q: "3 : [4, 5] gives…", o: ["[3, 4, 5]", "[4, 5, 3]", "[7, 8]", "3"], a: 0, e: "" }
  ],
  flashcards: [
    ["Domain / co-domain", "Input set / output set of a function"],
    ["First-class object", "Can be passed, returned, assigned"],
    ["Partial application", "Fix some arguments → new function"],
    ["Composition g ∘ f", "Apply f, then g"],
    ["map", "Apply a function to every element"],
    ["filter", "Keep elements meeting a condition"],
    ["fold / reduce", "Combine elements into one value"],
    ["head / tail", "First element / the rest"],
    ["Prepend vs append", "x : list vs list ++ list"],
    ["Higher-order function", "Takes or returns a function"]
  ]
});

S2Data.add({
  id: "13a", group: 13, title: "Systematic approach to problem solving (NEA)",
  summary: "Analysis, design, implementation, testing and evaluation in the non-exam assessment programming project.",
  notes: `
<h3>The NEA</h3>
<p>A substantial programming project worth <b>20%</b> of the A level (75 marks), solving a real problem for a real or realistic end user.</p>
<table><tr><th>Stage</th><th>What to include</th></tr>
<tr><td>Analysis</td><td>Problem background, end user, research (e.g. interviews), existing solutions, measurable <b>objectives</b>, data and models</td></tr>
<tr><td>Design</td><td>System structure (hierarchy charts), algorithms (pseudo-code, flowcharts), data structures, database design, class diagrams, interface designs</td></tr>
<tr><td>Implementation (technical solution)</td><td>Well-structured, commented code; complexity is rewarded (e.g. OOP, recursion, complex data structures, advanced algorithms)</td></tr>
<tr><td>Testing</td><td>Evidence that the solution meets its objectives: <b>normal</b>, <b>boundary</b> and <b>erroneous</b> data, with screenshots or video</td></tr>
<tr><td>Evaluation</td><td>How well objectives were met, independent end-user feedback, and realistic improvements</td></tr></table>
<h3>Good practice</h3>
<ul>
<li>Write <b>SMART</b>, measurable objectives so testing can show each one is met.</li>
<li>Use <b>iterative development</b> (prototyping) and keep a record of changes.</li>
<li>Use meaningful identifiers, modular code, and exception handling.</li>
<li>Link every test back to an objective.</li>
</ul>
<div class="box box-tip"><span class="box-title">Complexity</span>Higher marks need technical complexity: e.g. graph or tree traversal, hashing, recursive algorithms, OOP with inheritance and polymorphism, complex SQL, or a client-server model.</div>`,
  quiz: [
    { q: "The NEA is worth what percentage of the A level?", o: ["20%", "40%", "10%", "50%"], a: 0, e: "" },
    { q: "Objectives are set during…", o: ["Analysis", "Testing", "Evaluation", "Implementation"], a: 0, e: "" },
    { q: "Boundary test data is…", o: ["At the edges of the valid range", "Clearly invalid", "Typical", "Random"], a: 0, e: "" },
    { q: "Erroneous test data is…", o: ["Invalid data that should be rejected", "Valid typical data", "Data at the limits", "Empty only"], a: 0, e: "" },
    { q: "Hierarchy charts are used in…", o: ["Design", "Evaluation", "Analysis only", "Testing"], a: 0, e: "" },
    { q: "The evaluation should include…", o: ["End-user feedback and improvements", "Only code", "Only test data", "Nothing"], a: 0, e: "" },
    { q: "Which would add technical complexity?", o: ["Recursive tree traversal", "Printing 'Hello'", "A single if statement", "Hard-coded values"], a: 0, e: "" },
    { q: "Each test should link to…", o: ["An objective", "A comment", "A variable", "A library"], a: 0, e: "" },
    { q: "Iterative development means…", o: ["Building and refining in cycles", "Writing all code at once", "Never testing", "No design"], a: 0, e: "" },
    { q: "Good objectives are…", o: ["Measurable", "Vague", "Unrelated to the user", "Untestable"], a: 0, e: "" }
  ],
  flashcards: [
    ["NEA weight", "20% (75 marks)"],
    ["Analysis", "Problem, user, research, measurable objectives"],
    ["Design", "Algorithms, data structures, hierarchy charts, interfaces"],
    ["Technical solution", "Structured, commented, complex code"],
    ["Testing", "Normal, boundary, erroneous data with evidence"],
    ["Evaluation", "Objectives met? User feedback, improvements"],
    ["Normal data", "Typical valid input"],
    ["Boundary data", "At the edge of valid range"],
    ["Erroneous data", "Invalid input to be rejected"],
    ["Complexity examples", "OOP, recursion, graphs, hashing, complex SQL"]
  ]
});

S2Data.detail("8a", { mistakes: ["Naming laws without saying what they cover."], tips: ["For essay questions, consider individuals, companies and society, and both benefits and harms."], fact: "The Computer Misuse Act was passed after two hackers accessed Prince Philip's Prestel mailbox in the mid-1980s and their convictions under older laws were overturned on appeal." });
S2Data.detail("9a", { mistakes: ["Saying baud rate and bit rate are always the same."], tips: ["Learn the CSMA/CA steps as a flowchart."], fact: "Wi-Fi uses collision avoidance because wireless devices can't reliably detect collisions while transmitting." });
S2Data.detail("9b", { mistakes: ["Confusing MAC addresses (hardware) with IP addresses (logical)."], tips: ["Learn the four TCP/IP layers in order with what each adds."], fact: "IPv6 has about 3.4 × 10³⁸ addresses." });
S2Data.detail("9c", { mistakes: ["Saying a digital signature encrypts the whole message for secrecy."], tips: ["Draw the digital signature process: hash, encrypt with private key, verify with public key."], fact: "JSON was popularised by Douglas Crockford in the early 2000s." });
S2Data.detail("10a", { mistakes: ["Forgetting to underline the primary key in an entity description."], tips: ["Normalise step by step, showing each normal form."], fact: "Edgar Codd defined the first three normal forms in the early 1970s." });
S2Data.detail("10b", { mistakes: ["Forgetting the WHERE clause in UPDATE or DELETE, which changes every row."], tips: ["Practise writing SQL by hand; check table and field names carefully."], fact: "SQL was developed at IBM in the 1970s and was originally called SEQUEL." });
S2Data.detail("11a", { mistakes: ["Describing big data only as 'a lot of data'; mention velocity and variety too."], tips: ["Link functional programming's features directly to distributed processing."], fact: "Google's MapReduce, published in 2004, popularised map and reduce for big data." });
S2Data.detail("12a", { mistakes: ["Getting composition the wrong way round: g ∘ f applies f first."], tips: ["Practise map, filter and fold by hand on short lists."], fact: "Haskell is named after logician Haskell Curry, who also gives his name to 'currying'." });
S2Data.detail("13a", { mistakes: ["Writing objectives that can't be tested."], tips: ["Keep a development log with screenshots as you go."], fact: "The NEA project can be written in any language your school supports." });
