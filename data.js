const cybersecurityTerms = [
    {
        id: 1,
        term: "Firewall",
        category: "defense",
        simpleExplanation: "A firewall is like a security guard for your computer network. It watches all the data coming in and going out, and blocks anything that looks dangerous or unauthorized.",
        analogy: "Think of a firewall like the security checkpoint at an airport. Just as security checks passengers and luggage before allowing them through, a firewall checks data packets before letting them into your network. Suspicious or unauthorized items get stopped.",
        technicalDetails: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It establishes a barrier between a trusted internal network and untrusted external networks (such as the Internet). Firewalls can be hardware-based, software-based, or a combination of both. They use rule sets to determine whether to allow or block specific traffic based on IP addresses, ports, protocols, and other criteria.",
        example: "When you install antivirus software on your computer, it often includes a firewall that prevents malicious programs from communicating with hackers over the internet. For instance, if a virus tries to send your personal data to a remote server, the firewall blocks this connection.",
        keyPoints: [
            "Acts as a barrier between trusted and untrusted networks",
            "Filters incoming and outgoing traffic",
            "Can be hardware or software-based",
            "Uses predefined rules to allow or block traffic",
            "Essential first line of defense in network security"
        ]
    },
    {
        id: 2,
        term: "Encryption",
        category: "concepts",
        simpleExplanation: "Encryption is the process of scrambling information so that only authorized people can read it. It's like putting your message in a locked box that only the intended recipient has the key to open.",
        analogy: "Imagine you want to send a secret letter to a friend. You write it in a special code that only you and your friend understand. Even if someone intercepts the letter, they can't read it without knowing the code. Encryption works the same way with digital data.",
        technicalDetails: "Encryption uses mathematical algorithms to convert plaintext (readable data) into ciphertext (scrambled data). There are two main types: symmetric encryption (same key for encryption and decryption) and asymmetric encryption (public key for encryption, private key for decryption). Common encryption algorithms include AES (Advanced Encryption Standard), RSA, and TLS/SSL protocols. Modern encryption is virtually unbreakable without the proper decryption key.",
        example: "When you log into your bank's website, notice the 'https' and lock icon in your browser? That means your connection is encrypted. Your password and account information are scrambled during transmission, so even if hackers intercept the data, they can't read it.",
        keyPoints: [
            "Converts readable data into unreadable format",
            "Requires a key to decrypt the data",
            "Protects data both in transit and at rest",
            "Two main types: symmetric and asymmetric",
            "Foundation of secure online communications"
        ]
    },
    {
        id: 3,
        term: "Phishing",
        category: "attacks",
        simpleExplanation: "Phishing is when criminals pretend to be legitimate organizations to trick you into giving them sensitive information like passwords, credit card numbers, or social security numbers.",
        analogy: "It's like a con artist dressing up as a bank employee and calling you, asking you to verify your account details. They sound legitimate and use official-looking materials, but they're actually thieves trying to steal your identity.",
        technicalDetails: "Phishing attacks typically use fraudulent emails, text messages (smishing), or phone calls (vishing) that appear to come from reputable sources. These messages often contain malicious links that lead to fake websites designed to harvest credentials, or attachments containing malware. Advanced phishing techniques include spear phishing (targeted at specific individuals) and whaling (targeting high-profile executives). Attackers use social engineering tactics to create urgency or fear to bypass rational thinking.",
        example: "You receive an email that looks like it's from PayPal, saying your account has been compromised and you need to click a link to verify your information. The link takes you to a fake PayPal website that looks real, but when you enter your login credentials, they're stolen by the attackers.",
        keyPoints: [
            "Most common form of cyber attack",
            "Uses social engineering to manipulate victims",
            "Often creates sense of urgency or fear",
            "Can target individuals or organizations",
            "Prevention requires awareness and verification"
        ]
    },
    {
        id: 4,
        term: "SSL/TLS",
        category: "protocols",
        simpleExplanation: "SSL (Secure Sockets Layer) and TLS (Transport Layer Security) are security protocols that create encrypted connections between web browsers and servers, ensuring that data transferred between them remains private and secure.",
        analogy: "Imagine sending a letter through a regular mail service versus using an armored truck with guards. SSL/TLS is like the armored truck for your internet data - it ensures your information travels securely from your computer to the website you're visiting.",
        technicalDetails: "SSL and its successor TLS are cryptographic protocols designed to provide secure communication over computer networks. They use a combination of asymmetric and symmetric encryption. The handshake process involves: 1) Client and server agree on encryption methods, 2) Server presents its SSL certificate for authentication, 3) Both parties generate session keys, 4) Encrypted communication begins. TLS 1.3 is the current version, offering improved security and performance. These protocols use digital certificates issued by Certificate Authorities (CAs) to verify server identity.",
        example: "When you see 'https://' instead of 'http://' in a website URL, along with a padlock icon, it means the site uses SSL/TLS. This is crucial when entering credit card information for online shopping, as it encrypts your payment details during transmission.",
        keyPoints: [
            "Encrypts data between browser and server",
            "TLS is the modern, more secure version of SSL",
            "Uses digital certificates for authentication",
            "Essential for e-commerce and online banking",
            "Indicated by HTTPS and padlock icon in browsers"
        ]
    },
    {
        id: 5,
        term: "Malware",
        category: "attacks",
        simpleExplanation: "Malware is malicious software designed to harm, exploit, or otherwise compromise your computer, network, or data. It's an umbrella term that includes viruses, worms, trojans, ransomware, and spyware.",
        analogy: "Malware is like a biological virus for computers. Just as different viruses affect humans in different ways (some make you cough, others cause fever), different types of malware cause different problems - some steal data, others lock your files, and some just cause chaos.",
        technicalDetails: "Malware encompasses various types of malicious code: Viruses (attach to legitimate programs), Worms (self-replicating), Trojans (disguised as legitimate software), Ransomware (encrypts files for ransom), Spyware (secretly monitors activity), Adware (displays unwanted ads), and Rootkits (hides deep in system). Malware can spread through email attachments, infected websites, USB drives, or software vulnerabilities. Modern malware often uses advanced techniques like polymorphism (changing code to avoid detection) and fileless execution (running in memory).",
        example: "The WannaCry ransomware attack in 2017 infected hundreds of thousands of computers worldwide. It encrypted users' files and demanded Bitcoin payments for decryption. Hospitals, businesses, and government agencies were affected, causing massive disruptions.",
        keyPoints: [
            "Umbrella term for all malicious software",
            "Includes viruses, worms, trojans, ransomware, spyware",
            "Can spread through various vectors",
            "Modern malware uses advanced evasion techniques",
            "Protection requires antivirus software and safe practices"
        ]
    },
    {
        id: 6,
        term: "Two-Factor Authentication (2FA)",
        category: "defense",
        simpleExplanation: "Two-Factor Authentication adds an extra layer of security to your accounts by requiring two different types of verification before granting access - usually something you know (password) and something you have (phone or security token).",
        analogy: "Think of 2FA like accessing a secure building. First, you show your ID card (password), then you also need to enter a code that's sent to your phone. Even if someone steals your ID card, they can't get in without your phone.",
        technicalDetails: "2FA implements multi-factor authentication using combinations of: knowledge factors (passwords, PINs), possession factors (smartphones, hardware tokens, smart cards), and inherence factors (biometrics like fingerprints, facial recognition). Common 2FA methods include SMS codes, authenticator apps (Google Authenticator, Authy), hardware tokens (YubiKey), and push notifications. Time-based One-Time Passwords (TOTP) generate codes that change every 30 seconds. 2FA significantly reduces the risk of account compromise even if passwords are stolen.",
        example: "When logging into your Google account from a new device, after entering your password, Google sends a code to your phone via text message or the Google app. You must enter this code to complete the login. Even if someone knows your password, they can't access your account without your phone.",
        keyPoints: [
            "Requires two forms of verification",
            "Dramatically improves account security",
            "Multiple methods available (SMS, apps, hardware tokens)",
            "Should be enabled on all important accounts",
            "Protects against password theft and brute force attacks"
        ]
    },
    {
        id: 7,
        term: "DDoS Attack",
        category: "attacks",
        simpleExplanation: "A Distributed Denial of Service (DDoS) attack is when hackers overwhelm a website or online service with so much traffic that it becomes slow or completely shuts down, preventing legitimate users from accessing it.",
        analogy: "Imagine a popular store being flooded with thousands of fake customers who don't buy anything but block the entrances and aisles. Real customers can't get in or shop. That's what a DDoS attack does to a website - floods it with fake traffic so real users can't access it.",
        technicalDetails: "DDoS attacks use networks of compromised devices (botnets) to flood targets with massive amounts of traffic. Types include: volumetric attacks (overwhelm bandwidth), protocol attacks (exploit server resources), and application layer attacks (target specific applications). Attackers control thousands or millions of IoT devices, computers, or servers infected with malware. Mitigation involves traffic filtering, rate limiting, content delivery networks (CDNs), and specialized DDoS protection services. Large attacks can exceed 1 Tbps of traffic.",
        example: "In 2016, the Dyn cyberattack used a botnet of IoT devices (cameras, printers, routers) to launch a massive DDoS attack against Dyn, a major DNS provider. This took down popular websites including Twitter, Netflix, Reddit, and GitHub for hours across the US and Europe.",
        keyPoints: [
            "Overwhelms targets with massive traffic volumes",
            "Uses botnets of compromised devices",
            "Can target infrastructure or applications",
            "Difficult to stop due to distributed nature",
            "Can cause significant business disruption"
        ]
    },
    {
        id: 8,
        term: "VPN (Virtual Private Network)",
        category: "protocols",
        simpleExplanation: "A VPN creates a secure, encrypted tunnel between your device and the internet, hiding your online activities and location from prying eyes like ISPs, hackers, or governments.",
        analogy: "Using the internet without a VPN is like sending postcards - anyone handling them can read the message. A VPN is like putting your postcard in a sealed, armored envelope that only the destination can open. Plus, it makes it look like you're sending from a different location.",
        technicalDetails: "VPNs establish encrypted tunnels using protocols like OpenVPN, IPSec, WireGuard, or L2TP. When connected, all internet traffic is routed through the VPN server, masking your real IP address with the server's IP. The encryption protects data from interception. VPNs use strong encryption standards (AES-256) and provide features like kill switches (disconnects internet if VPN drops) and DNS leak protection. However, trust shifts from your ISP to the VPN provider, making provider selection critical.",
        example: "When you connect to public WiFi at a coffee shop, a hacker on the same network could potentially intercept your data. With a VPN active, even if they intercept your traffic, it's encrypted and unreadable. Additionally, websites see the VPN server's location, not your actual location.",
        keyPoints: [
            "Creates encrypted tunnel for internet traffic",
            "Masks your real IP address and location",
            "Protects data on public networks",
            "Bypasses geographic restrictions",
            "Does not make you completely anonymous"
        ]
    },
    {
        id: 9,
        term: "Zero-Day Vulnerability",
        category: "concepts",
        simpleExplanation: "A zero-day vulnerability is a security flaw in software that the developers don't know about yet, meaning there's no fix available. Hackers can exploit it before the creators even realize it exists.",
        analogy: "Imagine a hidden trapdoor in a castle that the builders don't know about. Thieves discover it and use it to sneak in, but the castle owners have no idea the trapdoor exists, so they can't fix it. That's a zero-day vulnerability - a secret weakness that defenders don't know to defend against.",
        technicalDetails: "Zero-day vulnerabilities are unknown software flaws that vendors haven't patched. The term 'zero-day' refers to having zero days to fix the problem since discovery. These vulnerabilities are highly valuable on black markets (selling for millions). Exploits are released before patches exist. Once discovered by vendors, a race begins between patching and exploitation. Protection is difficult and relies on behavioral analysis, intrusion detection systems, and minimizing attack surface. Some vulnerabilities remain undiscovered for years.",
        example: "The Stuxnet worm, discovered in 2010, exploited multiple zero-day vulnerabilities in Windows and industrial control systems. It was specifically designed to sabotage Iran's nuclear program and remained undetected for years, demonstrating the power and danger of zero-day exploits.",
        keyPoints: [
            "Unknown vulnerability with no available patch",
            "Highly valuable to attackers and nation-states",
            "Extremely difficult to defend against",
            "Can remain undiscovered for extended periods",
            "Once disclosed, vendors rush to create patches"
        ]
    },
    {
        id: 10,
        term: "Ransomware",
        category: "attacks",
        simpleExplanation: "Ransomware is a type of malware that locks your files or computer and demands payment (ransom) to restore access. It's like a digital kidnapper holding your data hostage.",
        analogy: "Imagine someone breaking into your house, putting all your belongings in a giant safe, and demanding money for the combination. That's exactly what ransomware does to your digital files - it locks them up and demands payment for the key to unlock them.",
        technicalDetails: "Ransomware uses strong encryption algorithms (AES, RSA) to encrypt victim files, making them inaccessible. Modern variants use double extortion - encrypting files AND stealing data, threatening to publish it if ransom isn't paid. Payment is demanded in cryptocurrency (Bitcoin, Monero) for anonymity. Ransomware spreads through phishing emails, exploit kits, remote desktop protocol (RDP) attacks, and supply chain compromises. Decryption without paying is often impossible without backups. Average ransom demands have increased to millions of dollars.",
        example: "The Colonial Pipeline attack in 2021 shut down a major US fuel pipeline for days. The operators paid $4.4 million in Bitcoin ransom to restore operations, highlighting how critical infrastructure is vulnerable. In many cases, even after paying, victims don't get their data back.",
        keyPoints: [
            "Encrypts files and demands ransom for decryption",
            "Payment typically in cryptocurrency",
            "Increasingly targets businesses and critical infrastructure",
            "Double extortion includes data theft threats",
            "Best defense is regular backups and prevention"
        ]
    },
    {
        id: 11,
        term: "SQL Injection",
        category: "attacks",
        simpleExplanation: "SQL Injection is when hackers insert malicious code into website forms or URLs to trick databases into revealing sensitive information they shouldn't access.",
        analogy: "Imagine filling out a form that asks for your name, but instead of writing 'John', you write 'John OR give me everyone's records'. If the form isn't properly secured, the system might actually do it. SQL injection exploits this kind of vulnerability in database queries.",
        technicalDetails: "SQL injection occurs when untrusted input is included in SQL queries without proper sanitization. Attackers inject SQL commands through input fields, URL parameters, or cookies. Successful attacks can: read/modify/delete database contents, execute administrative operations, access files on the server, or issue commands to the operating system. Prevention involves parameterized queries (prepared statements), input validation, stored procedures, and web application firewalls. OWASP lists SQL injection as one of the top web application security risks.",
        example: "In 2017, Equifax suffered a massive data breach partly due to SQL injection vulnerabilities, exposing personal information of 147 million people including Social Security numbers, birth dates, and addresses. The breach cost Equifax over $1.4 billion in settlements.",
        keyPoints: [
            "Injects malicious SQL code through input fields",
            "Can expose entire databases",
            "One of the most common web vulnerabilities",
            "Preventable with proper coding practices",
            "Parameterized queries are the primary defense"
        ]
    },
    {
        id: 12,
        term: "Public Key Infrastructure (PKI)",
        category: "protocols",
        simpleExplanation: "PKI is a system that uses pairs of cryptographic keys (public and private) to secure communications and verify identities online. It's the foundation that makes secure internet transactions possible.",
        analogy: "Think of PKI like a digital passport system. Everyone has a public ID (public key) that anyone can see, and a private signature stamp (private key) that only they possess. When you want to prove your identity or send a secure message, you use these together in a way that proves you are who you claim to be.",
        technicalDetails: "PKI uses asymmetric cryptography with key pairs: public keys (shared openly) and private keys (kept secret). Components include: Certificate Authorities (CAs) that issue digital certificates, Registration Authorities (RAs) that verify identities, digital certificates binding public keys to identities, and certificate revocation lists. When Alice wants to send Bob an encrypted message, she encrypts it with Bob's public key; only Bob's private key can decrypt it. For digital signatures, Alice signs with her private key; anyone can verify with her public key. PKI enables SSL/TLS, code signing, email encryption (S/MIME), and document signing.",
        example: "When you visit a secure website (HTTPS), your browser verifies the site's SSL certificate using PKI. The certificate, issued by a trusted Certificate Authority, proves the website's identity and enables encrypted communication. Without PKI, secure e-commerce and online banking would be impossible.",
        keyPoints: [
            "Uses public/private key pairs for security",
            "Certificate Authorities verify identities",
            "Enables encryption and digital signatures",
            "Foundation of HTTPS and secure communications",
            "Critical for establishing trust online"
        ]
    },
    {
        id: 13,
        term: "Man-in-the-Middle Attack",
        category: "attacks",
        simpleExplanation: "A Man-in-the-Middle (MitM) attack happens when a hacker secretly intercepts and possibly alters communications between two parties who believe they're talking directly to each other.",
        analogy: "Imagine two people passing notes in class, but a third person intercepts every note, reads it, possibly changes it, and then passes it along. Neither of the original people knows someone is reading and potentially modifying their conversation. That's a MitM attack.",
        technicalDetails: "MitM attacks occur when attackers position themselves between two communicating parties. Techniques include: ARP spoofing (redirecting network traffic), DNS spoofing (fake DNS responses), SSL stripping (downgrading HTTPS to HTTP), rogue WiFi access points, and session hijacking. Attackers can eavesdrop on communications, steal credentials, modify transactions, or inject malware. Prevention involves using encryption (HTTPS, VPNs), certificate pinning, mutual authentication, and avoiding unsecured public WiFi for sensitive transactions.",
        example: "A hacker sets up a fake WiFi hotspot at a coffee shop called 'Free Coffee WiFi'. When you connect, all your internet traffic goes through their system. If you visit non-HTTPS websites, they can see everything you do, including login credentials. Even some HTTPS sites can be vulnerable to SSL stripping attacks.",
        keyPoints: [
            "Attacker secretly relays and possibly alters communications",
            "Both parties believe they're communicating directly",
            "Common on unsecured public WiFi networks",
            "Can steal credentials and sensitive data",
            "Encryption and authentication prevent most MitM attacks"
        ]
    },
    {
        id: 14,
        term: "Hash Function",
        category: "concepts",
        simpleExplanation: "A hash function is like a digital fingerprint for data. It takes any amount of information and converts it into a fixed-length string of characters. Even a tiny change in the original data creates a completely different hash.",
        analogy: "Imagine you have a magic machine that turns any book into a unique 10-digit code. No matter how long the book is, the code is always 10 digits. Change even one letter in the book, and you get a completely different code. You can't turn the code back into the book, but you can verify if two books are identical by comparing their codes.",
        technicalDetails: "Cryptographic hash functions (like SHA-256, MD5, bcrypt) take input of any size and produce fixed-size output (hash/digest). Properties include: deterministic (same input always produces same hash), quick computation, irreversible (can't derive input from hash), avalanche effect (small input change drastically changes hash), and collision resistance (hard to find two inputs with same hash). Used for password storage (with salting), data integrity verification, digital signatures, blockchain, and file verification. Password hashing should use slow, salted algorithms like bcrypt or Argon2.",
        example: "When you create a password for a website, it's not stored as plain text. Instead, the website runs it through a hash function and stores the hash. When you log in, your entered password is hashed and compared to the stored hash. Even if hackers steal the hash database, they can't easily reverse the hashes to get your actual passwords.",
        keyPoints: [
            "Converts data into fixed-length fingerprint",
            "One-way function (can't reverse)",
            "Small changes create completely different hashes",
            "Used for password storage and data integrity",
            "SHA-256 and bcrypt are common examples"
        ]
    },
    {
        id: 15,
        term: "Penetration Testing",
        category: "defense",
        simpleExplanation: "Penetration testing (or pen testing) is when security experts ethically hack into your systems to find vulnerabilities before bad hackers do. It's like hiring a locksmith to test your home security.",
        analogy: "Imagine you own a bank and hire professional thieves to try breaking in. They attempt to pick locks, bypass alarms, and find weak points. Afterward, they give you a detailed report of how they got in and how to fix those weaknesses. That's penetration testing for computer systems.",
        technicalDetails: "Penetration testing follows structured methodologies: reconnaissance (information gathering), scanning (identifying vulnerabilities), gaining access (exploitation), maintaining access (persistence testing), and analysis/reporting. Types include: black box (no prior knowledge), white box (full knowledge), and gray box (partial knowledge). Tests cover networks, applications, social engineering, physical security, and wireless systems. Professional certifications include OSCP, CEH, and GPEN. Results include vulnerability severity ratings (CVSS scores) and remediation recommendations. Regular pen testing is required for compliance standards like PCI-DSS.",
        example: "Before launching a new banking app, the company hires a penetration testing firm. The testers try various attacks: injecting malicious code, bypassing authentication, exploiting API vulnerabilities, and attempting social engineering on employees. They document every successful breach and provide a detailed report with fixes, helping the bank strengthen security before real attackers can exploit weaknesses.",
        keyPoints: [
            "Authorized simulated cyber attacks",
            "Identifies vulnerabilities before criminals do",
            "Follows structured methodologies",
            "Provides actionable remediation recommendations",
            "Required for many compliance standards"
        ]
    },
    {
        id: 16,
        term: "Botnet",
        category: "concepts",
        simpleExplanation: "A botnet is a network of computers, smartphones, or IoT devices that have been infected with malware and controlled by hackers without the owners' knowledge. These 'zombie' devices can be used to launch attacks.",
        analogy: "Imagine an army of puppets whose strings are controlled by a puppeteer, but the puppets are actually people's computers and devices. The owners don't know their devices are part of this army. The puppeteer can command all these devices to act together, like flooding a website with traffic.",
        technicalDetails: "Botnets consist of bots (infected devices) controlled by a botmaster through command-and-control (C&C) servers. Infection vectors include malware, phishing, and exploiting vulnerabilities. Modern botnets use peer-to-peer architectures for resilience. Botnets are rented/sold on dark web markets and used for: DDoS attacks, spam distribution, credential stuffing, cryptocurrency mining, and data theft. Notable botnets include Mirai (IoT devices), Emotet, and TrickBot. IoT devices are particularly vulnerable due to default passwords and lack of security updates.",
        example: "The Mirai botnet in 2016 infected hundreds of thousands of IoT devices (security cameras, DVRs, routers) using default passwords. It was used to launch record-breaking DDoS attacks that took down major websites. The source code was later released, leading to numerous copycat attacks.",
        keyPoints: [
            "Network of compromised devices under attacker control",
            "Devices often unaware they're infected",
            "Used for DDoS, spam, and other attacks",
            "IoT devices are common targets",
            "Botnets can be rented on criminal markets"
        ]
    },
    {
        id: 17,
        term: "Endpoint Detection and Response (EDR)",
        category: "defense",
        simpleExplanation: "EDR is advanced security software that continuously monitors devices (endpoints) like computers and phones, detects suspicious activities, and can automatically respond to threats in real-time.",
        analogy: "Traditional antivirus is like a bouncer checking IDs at the door. EDR is like having security cameras, motion detectors, and armed guards throughout the entire building, watching everything that happens and ready to respond immediately if something suspicious occurs.",
        technicalDetails: "EDR solutions provide continuous monitoring and data collection from endpoints, analyzing behaviors and patterns to detect threats. Key capabilities include: real-time monitoring, threat detection using behavioral analysis and machine learning, incident investigation (forensics), automated response (isolating infected devices, killing processes), and threat hunting. EDR goes beyond signature-based detection to identify unknown threats, zero-days, and advanced persistent threats (APTs). Major platforms include CrowdStrike Falcon, Microsoft Defender for Endpoint, and Carbon Black.",
        example: "An employee accidentally downloads malware that traditional antivirus doesn't detect. The EDR system notices unusual behavior: the program is trying to encrypt files and communicate with a suspicious server. The EDR automatically isolates the computer from the network, stops the malicious process, and alerts the security team, preventing a potential ransomware outbreak.",
        keyPoints: [
            "Continuous monitoring of endpoints",
            "Detects advanced and unknown threats",
            "Provides automated response capabilities",
            "Enables forensic investigation",
            "Essential for modern threat landscape"
        ]
    },
    {
        id: 18,
        term: "OAuth",
        category: "protocols",
        simpleExplanation: "OAuth is a way to let websites access your information from another service without giving them your password. It's like giving someone a valet key to your car - they can drive it but can't access your trunk or glovebox.",
        analogy: "Instead of giving a hotel your house key to clean your room, you give them a special key that only works for your room during your stay. OAuth works similarly - you give websites limited, temporary access to specific information without sharing your actual password.",
        technicalDetails: "OAuth 2.0 is an authorization framework (not authentication) that allows third-party applications to obtain limited access to user resources. Flow involves: user grants permission, authorization server issues access token, application uses token to access resources. Tokens can be scoped (limited permissions) and have expiration times. OAuth uses roles: resource owner (user), client (application), resource server (API), and authorization server. Common implementations include 'Login with Google/Facebook'. OpenID Connect extends OAuth for authentication. Critical to implement correctly to prevent vulnerabilities.",
        example: "When you use 'Sign in with Google' on a new website, you're using OAuth. Google asks if you want to allow the website to access your email and profile. You approve, and the website gets limited access to that information without ever seeing your Google password. You can revoke this access anytime in your Google settings.",
        keyPoints: [
            "Authorization framework, not authentication",
            "Provides limited, scoped access to resources",
            "Eliminates need to share passwords",
            "Uses access tokens with expiration",
            "Powers 'Login with...' features across the web"
        ]
    }
];
