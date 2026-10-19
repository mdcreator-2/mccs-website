/**
 * MCCS Official Rules of Procedure & Conference Data
 * Extracted directly from MUN_AIPPM_Rulebook.docx
 */

export const conferencePolicies = {
  schedule: {
    unscDate: '31 October 2026',
    aippmDate: '1 November 2026',
    timings: '08:30 AM – 04:00 PM IST',
    venue: 'National Institute of Technology Patna, Bihta Campus',
  },
  dressCode: [
    {
      day: 'Day 1 (31 October 2026)',
      style: 'Western Formal',
      committee: 'UNSC Dual Delegation',
      description:
        'Formal business suits, blazers with formal trousers, button-down collared shirts, ties, formal dresses, or pencil skirts. Polished formal footwear.',
    },
    {
      day: 'Day 2 (1 November 2026)',
      style: 'Traditional / Ethnic Formal',
      committee: 'AIPPM Single Delegation',
      description:
        'Kurta-Pyjama with Nehru / Modi jacket, formal Sarees, Anarkalis, or formal traditional Indian national attire with appropriate formal footwear.',
    },
  ],
  codeOfConduct: [
    {
      title: 'Zero Plagiarism & Pre-drafting Ban',
      icon: 'ShieldAlert',
      severity: 'Strict Disqualification',
      text: 'Directives, draft resolutions, public declarations, and speeches drafted prior to the conference or generated verbatim using AI tools during committee sessions are strictly prohibited and constitute grounds for immediate disqualification from awards and committee proceedings.',
    },
    {
      title: 'Electronics Policy',
      icon: 'Laptop',
      severity: 'Restricted Use',
      text: 'Laptops and tablets are permitted exclusively during Unmoderated Caucuses for the drafting of official working papers and resolutions. Mobile phone usage during formal floor debate is restricted unless explicitly authorized by the Executive Board.',
    },
    {
      title: 'Diplomatic Decorum',
      icon: 'Sparkles',
      severity: 'Mandatory',
      text: 'Delegates must maintain diplomatic, dignified, and parliamentary conduct at all times. Personal insults, harassment, disorderly behavior, or defiance of the Chair / Speaker will result in formal censure, mark deductions, or expulsion.',
    },
    {
      title: 'Awards & Evaluation Policy',
      icon: 'Award',
      severity: 'Executive Board Final',
      text: 'Awards include Best Delegate, High Commendation, Special Mention, and Best Delegation. Decisions made by the Executive Board are final, evaluated cumulatively across substantive debate, diplomatic conduct, documentation quality, and adherence to Rules of Procedure.',
    },
  ],
};

export const unscRules = {
  committee: 'United Nations Security Council (UNSC)',
  protocol: 'UNA-USA Protocol',
  format: 'Dual Delegation Format',
  allocation: 'Main Council Chamber',
  sections: [
    {
      id: 'unsc-3.1',
      number: 'Rule 3.1',
      title: 'Composition & Delegation Structure',
      content: [
        'Mandatory Dual Delegation: Both co-delegates represent their assigned Member State concurrently and must collaborate seamlessly on statements, caucus negotiations, and voting decisions.',
        'Council Breakdown (19 Total Delegations):',
        '• 5 Permanent Members (P5): China, France, Russian Federation, United Kingdom, and United States. (Possess veto power on all substantive resolutions).',
        '• 10 Non-Permanent / Elected Members (E10): Rotating regional members representing global geographical voting blocs.',
        '• 4 Invited Observer States: Regional stakeholders admitted under Rule 3.5 for specific testimony (Israel, Iran, Lebanon, and Palestine).',
      ],
    },
    {
      id: 'unsc-3.2',
      number: 'Rule 3.2',
      title: 'Quorum & Opening of Committee',
      content: [
        'Quorum Threshold: Set at a minimum of 10 voting member states present at the start of the session to conduct formal business.',
        'Roll Call Protocol: Delegations state either "Present" or "Present and Voting". Delegations declaring "Present and Voting" forfeit their right to abstain during final substantive votes on draft resolutions.',
      ],
    },
    {
      id: 'unsc-3.3',
      number: 'Rule 3.3',
      title: 'Debate Formats & Floor Procedures',
      content: [
        'General Speakers List (GSL): The default flow of debate with set individual speaking time (typically 60 or 90 seconds). Delegates must yield remaining time to the Chair, another delegate, or points of information.',
        'Moderated Caucus: Focuses on specific sub-topics with set total duration, individual speaking time, and a designated topic proposed by a delegate motion.',
        'Unmoderated Caucus: Suspends formal rules for informal bilateral negotiations, drafting of working papers, and multi-lateral coalition building.',
      ],
    },
    {
      id: 'unsc-3.4',
      number: 'Rule 3.4',
      title: 'Parliamentary Points & Motions',
      content: [
        'Point of Personal Privilege: Raised for personal physical discomfort, audibility, or room environment issues (may interrupt a speaker only for inaudibility).',
        'Point of Order: Raised to point out a violation of procedure by the Executive Board or a fellow delegate.',
        'Point of Parliamentary Inquiry: Raised to clarify the Rules of Procedure or parliamentary status with the Chair.',
        'Procedural Motions: Motions to open, suspend, or adjourn debate require a simple majority of present voting members.',
      ],
    },
    {
      id: 'unsc-3.5',
      number: 'Rule 3.5',
      title: 'Special Procedure for Invited Non-Member Representation',
      highlight: true,
      content: [
        'To preserve Council sovereignty and mandate strategic diplomacy, Invited Members do NOT automatically hold speaking rights on the floor.',
        'Motion Requirement: A voting member state must raise a formal procedural motion: "Motion to hear from [Invited Member Name] regarding [Specific Agenda Item / Sub-topic]."',
        'Voting Threshold: Requires a mandatory procedural show of hands (Simple Majority, >50% of present voting members).',
        'Strict Limitations: Invited members cannot vote on procedural motions or substantive resolutions, and cannot exercise veto powers.',
      ],
    },
    {
      id: 'unsc-3.6',
      number: 'Rule 3.6',
      title: 'Council Documentation, Veto & Voting',
      content: [
        'Working Papers & Draft Resolutions: Draft Resolutions require minimum sponsor and signatory thresholds before being tabled. Preambular clauses define historical and legal context; Operative clauses detail binding actions under UN Charter Chapter VII.',
        'The P5 Veto: A negative vote by any of the 5 Permanent Members (USA, UK, France, Russia, China) automatically fails a substantive draft resolution.',
        'Substantive Voting Threshold: A draft resolution passes only with at least 9 affirmative votes from the 15-member council, with zero negative votes (vetoes) cast by Permanent Members.',
        'Procedural Votes: Require a simple majority (>50%) of present voting members. Abstentions are not recognized during procedural votes.',
      ],
    },
  ],
};

export const aippmRules = {
  committee: 'All India Political Parties Meet (AIPPM)',
  protocol: 'Indian Parliamentary & Political Forum Protocol',
  format: 'Single Delegation Assembly',
  allocation: 'Conference Hall',
  sections: [
    {
      id: 'aippm-4.1',
      number: 'Rule 4.1',
      title: 'Nature & Objective of AIPPM',
      content: [
        'Forum Mandate: The All India Political Parties Meet is a non-statutory, consensus-building national forum that convenes leaders across all major ruling, alliance, and opposition political parties.',
        'Single Delegation Structure: Operates strictly as a single-delegate assembly where each participant embodies an individual political leader, cabinet minister, or parliamentarian.',
        'Objective: Foster cross-party dialogue, debate constitutional mandates, and draft consensus-driven policy recommendations.',
      ],
    },
    {
      id: 'aippm-4.2',
      number: 'Rule 4.2',
      title: 'Parliamentary Conduct & Official Nomenclature',
      content: [
        'Addressing the Dais: All floor speeches, interventions, and rebuttals must be addressed strictly to the "Hon\'ble Speaker" or "Hon\'ble Chairperson".',
        'Official Nomenclature: Delegates are referred to by their official political designation, e.g., "Hon\'ble Representative from [Party Name]" or official ministerial title.',
        'Parliamentary Decorum: Unparliamentary vocabulary, personal character attacks, and intentional defiance of the Chair result in formal disciplinary censure and deduction of evaluation points.',
      ],
    },
    {
      id: 'aippm-4.3',
      number: 'Rule 4.3',
      title: 'Proceedings & Flow of Debate',
      content: [
        'Roll Call & Opening Statements: Attendance verification followed by opening policy statements articulating party ideological positions.',
        'Speakers List & Moderated Debates: Structured debate governed by the Speakers List and short moderated segments focusing on key policy sub-themes.',
        'Unmoderated Caucus & Cross-Party Consultations: Designated informal periods for intense coalition negotiations, backchannel talks, and drafting the Joint Communiqué.',
        'Right of Reply: Granted at the sole discretion of the Hon\'ble Speaker if a delegate\'s personal integrity or national party dignity has been directly impugned on the floor.',
      ],
    },
    {
      id: 'aippm-4.4',
      number: 'Rule 4.4',
      title: 'Legislative Documentation & Final Output',
      content: [
        'Joint Communiqué / Policy Report: The primary deliverable document of AIPPM summarizing consensus recommendations, negotiated policy compromises, and dissenting opinions.',
        'Press Releases & Policy Declarations: Coalitions, ruling benches, or opposition alliances may submit signed policy declarations to be read into the official conference record.',
        'Adoption Mechanism: A Motion for Joint Communiqué requires a simple majority vote of delegates present on the floor.',
      ],
    },
  ],
};

export const motionPrecedenceMatrix = [
  {
    motion: 'Point of Personal Privilege',
    committee: 'All Committees',
    purpose: 'Audibility, temperature, or personal room comfort issues. May interrupt speaker only for audibility.',
    vote: 'No Vote Required',
    priority: 1,
  },
  {
    motion: 'Point of Order',
    committee: 'All Committees',
    purpose: 'Report a procedural error or deviation from the Rules of Procedure by the dais or delegate.',
    vote: 'No Vote Required',
    priority: 2,
  },
  {
    motion: 'Point of Parliamentary Inquiry',
    committee: 'All Committees',
    purpose: 'Clarify rules of procedure, schedule, or current procedural status with the Executive Board.',
    vote: 'No Vote Required',
    priority: 3,
  },
  {
    motion: 'Motion to Hear Invited Member',
    committee: 'UNSC Only',
    purpose: 'Grant speaking rights on the floor to an invited non-member state (Israel, Palestine, Lebanon, Iran).',
    vote: 'Simple Majority (Procedural)',
    priority: 4,
  },
  {
    motion: 'Motion for Moderated Caucus',
    committee: 'UNSC & AIPPM',
    purpose: 'Suspend formal debate for focused discussion on a specific sub-topic with allocated speaking time.',
    vote: 'Simple Majority (Procedural)',
    priority: 5,
  },
  {
    motion: 'Draft Resolution Voting',
    committee: 'UNSC Only',
    purpose: 'Pass binding Security Council resolution under UN Charter Chapter VII mandate.',
    vote: '9 Affirmative Votes + No P5 Veto',
    priority: 6,
  },
  {
    motion: 'Motion for Joint Communiqué',
    committee: 'AIPPM Only',
    purpose: 'Table and adopt the multi-party consensus policy report and recommendations.',
    vote: 'Simple Majority',
    priority: 7,
  },
  {
    motion: 'Right of Reply',
    committee: 'AIPPM Only',
    purpose: 'Respond to grave personal or party dignity attacks made on the parliamentary floor.',
    vote: 'Speaker Discretion',
    priority: 8,
  },
];
