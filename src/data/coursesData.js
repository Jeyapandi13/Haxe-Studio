export const courses = [
  {
    id: 'beginner-pack',
    title: 'Beginner Pack',
    subtitle: 'Kickstart your cybersecurity journey from absolute zero.',
    price: 1999,
    originalPrice: 3999,
    level: 'Beginner',
    duration: '4 Weeks',
    popular: false,
    skills: ['Linux', 'Networking', 'OSINT', 'Hacking Basics'],
    curriculum: [
      'Ethical Hacking Basics & Ethics',
      'Linux Terminal & Fundamentals',
      'Computer Networking & TCP/IP',
      'Open Source Intelligence (OSINT)',
      'Basic Penetration Testing concepts'
    ],
    prerequisites: ['No prior experience required', 'Basic computer literacy'],
    tools: ['Kali Linux', 'Nmap', 'VirtualBox', 'Wireshark'],
    projects: ['Deploying a secure home virtual environment', 'Performing OSINT reconnaissance on a target footprint'],
    careerOutcome: 'Security Analyst Trainee, IT Auditor Associate',
    mentor: 'Arjun Sen, Certified Red Team Specialist',
    faqs: [
      { q: 'Is this course suitable for non-programmers?', a: 'Yes, we start from the absolute basics, including command line operations.' },
      { q: 'What computer specs do I need?', a: 'Any modern laptop with at least 8GB RAM (16GB recommended) and virtualization enabled.' }
    ]
  },
  {
    id: 'pentest-pack',
    title: 'Penetration Testing Pack',
    subtitle: 'Master the art of scanning, vulnerability analysis, and active exploitation.',
    price: 4999,
    originalPrice: 9999,
    level: 'Intermediate',
    duration: '8 Weeks',
    popular: true,
    skills: ['Kali Linux', 'Metasploit', 'Wireshark', 'Scanning', 'Payloads'],
    curriculum: [
      'Kali Linux Advanced Administration',
      'Metasploit Framework Exploitation',
      'Wireshark Network Traffic Analysis',
      'Active & Passive Port Scanning',
      'Custom Payload Generation & Delivery'
    ],
    prerequisites: ['Basic Linux knowledge', 'Networking fundamentals (TCP/UDP)'],
    tools: ['Kali Linux', 'Metasploit', 'Wireshark', 'Nmap', 'Burp Suite'],
    projects: ['Exploiting vulnerable Windows/Linux server instances', 'Analyzing malicious pcap files under traffic simulation'],
    careerOutcome: 'Junior Penetration Tester, Vulnerability Engineer',
    mentor: 'Sarah Connor, Defensive Security Lead',
    faqs: [
      { q: 'Do we get hands-on labs?', a: 'Yes, this pack includes 30 days of access to our custom virtual training range.' },
      { q: 'Is the certificate industry-recognized?', a: 'Yes, our certificates are cryptographically verifiable and valued by recruiters.' }
    ]
  },
  {
    id: 'red-team-pack',
    title: 'Red Team Master Pack',
    subtitle: 'Advance to simulated adversary operations, API security, and mobile hacking.',
    price: 9999,
    originalPrice: 19999,
    level: 'Advanced',
    duration: '12 Weeks',
    popular: false,
    skills: ['Bug Bounty', 'API Testing', 'Mobile Hacking', 'Privacy', 'Simulation Labs'],
    curriculum: [
      'Advanced Bug Bounty Methodologies',
      'OWASP Top 10 API Security Testing',
      'Android & iOS Mobile App Hacking',
      'Operational Privacy & OpSec',
      'Advanced Simulation War Room Labs'
    ],
    prerequisites: ['Prior penetration testing experience', 'Basic scripting (Python/Bash)'],
    tools: ['Burp Suite Pro', 'Frida', 'Objection', 'Ghidra', 'OWASP ZAP'],
    projects: ['Executing full-chain Android app reverse engineering', 'Targeting hardened cloud API endpoints in simulated corporate infrastructure'],
    careerOutcome: 'Senior Penetration Tester, Security Consultant, Red Teamer',
    mentor: 'Viktor Reznov, Elite Red Team Consultant',
    faqs: [
      { q: 'Are these simulated labs interactive?', a: 'Yes, you will access a live virtual cyber range through our direct web console.' },
      { q: 'Does this course cover active evasion?', a: 'Yes, it covers core OpSec concepts, antivirus evasion, and signature bypassing.' }
    ]
  },
  {
    id: 'elite-program',
    title: 'Elite Cybersecurity Master Program',
    subtitle: 'The ultimate, all-inclusive 1-on-1 career training in cyber warfare.',
    price: 19999,
    originalPrice: 39999,
    level: 'Expert',
    duration: '24 Weeks',
    popular: true,
    skills: ['Everything Included', '1-on-1 Mentorship', 'Official Certificate', 'WhatsApp Support', 'Hack Labs'],
    curriculum: [
      'Complete Core Hacking Curriculum (Beginner to Red Team)',
      'Exclusive Private Mentorship Sessions (1-on-1)',
      'Custom Dedicated Hack Labs with custom target environments',
      'Official cryptographically-backed Program Certificate',
      'Career Guidance, CV building, & HR mock interviews',
      '24/7 Dedicated WhatsApp Support channel',
      'Personalized Recommendation Letter from the Academy Board',
      'Internship-style industry projects based on real CVE scenarios'
    ],
    prerequisites: ['High motivation', 'Dedication to complete 200+ hours of lab exercises'],
    tools: ['Entire cyber range suite', 'AWS Cloud Infrastructure', 'Cobalt Strike', 'Burp Suite Pro'],
    projects: ['Simulated enterprise breach scenario (Active Directory compromise)', 'Publishing a novel vulnerability research writeup'],
    careerOutcome: 'L2/L3 Security Analyst, Red Team Lead, Security Architect',
    mentor: 'Viktor Reznov & Board of Advisors',
    faqs: [
      { q: 'How are the 1-on-1 sessions scheduled?', a: 'You will coordinate directly with your mentor weekly via our student portal.' },
      { q: 'Is there a job placement guarantee?', a: 'We provide active recruitment assistance, resume polishing, and recommendation letters to our top partners.' }
    ]
  }
];
