/**
 * NIT Patna MUN 2026 - Official Delegate Rulebook Data
 * Extracted directly from MUN_AIPPM_Rulebook.docx
 * Art and Literature Club EXPRESSO | NIT Patna
 * Committees: UNSC & AIPPM (31 October & 1 November 2026)
 */

export const rulebookMetadata = {
  organization: 'Art and Literature Club EXPRESSO',
  institution: 'National Institute of Technology Patna',
  title: 'NIT Patna MUN 2026 Delegate Rulebook',
  dates: '31 October and 1 November 2026',
  committees: 'UNSC and AIPPM',
  preamble:
    "This rulebook applies to every delegate at NIT Patna MUN 2026. It uses the Harvard Rules of Procedure as its base, with the changes set out here. Read it fully before the conference. Where this rulebook is silent, the Chair decides, and the Chair's interpretation of these rules is final.",
};

// Section 1: The Conference at a Glance
export const conferenceAtAGlance = [
  {
    field: 'Committee',
    unsc: 'United Nations Security Council',
    aippm: 'All India Political Parties Meet',
  },
  {
    field: 'Date and venue',
    unsc: 'Day 1: 31 October 2026, LDC Hall',
    aippm: 'Day 2: 1 November 2026, Lecture Hall',
  },
  {
    field: 'Agenda',
    unsc: 'The situation in the Middle East: Palestine and Lebanon. Securing a lasting ceasefire and humanitarian access and implementation of the two state solution.',
    aippm: 'Delimitation of Parliamentary and Assembly constituencies after the upcoming Census.',
  },
  {
    field: 'Strength',
    unsc: '20 countries (may increase), two delegates per country',
    aippm: '26 parties, each represented by its leader. Larger parties may receive more than one delegate.',
  },
  {
    field: 'Bureau',
    unsc: 'One Chair, one Co-Chair and one Rapporteur in each committee.',
    aippm: 'One Chair, one Co-Chair and one Rapporteur in each committee.',
  },
  {
    field: 'Voting',
    unsc: 'One vote per country. Simple majority. No veto. No abstentions. Invited members do not vote.',
    aippm: 'One vote per delegate. Simple majority. No abstentions.',
  },
  {
    field: 'Dress code',
    unsc: 'Western formal or national dress',
    aippm: 'Western formal, or Indian formal (kurta with Nehru jacket, or saree)',
  },
  {
    field: 'Awards',
    unsc: "Best Delegate, Best Delegation, High Commendation, Special Mention. Delegate's Choice: Best Dressed (Male), Best Dressed (Female).",
    aippm: "Best Delegate, High Commendation, Special Mention. Delegate's Choice: Best Dressed (Male), Best Dressed (Female).",
  },
];

// Section 2: Registration and Allocation
export const registrationAndAllocation = [
  {
    title: 'Registration Channels',
    text: 'Register through the official Google Form (link: [to be added]) or the NITP MUN website (link: [to be added]).',
  },
  {
    title: 'Preference Submission',
    text: 'The form asks for your top three preferences, in order: countries for the UNSC, parties for the AIPPM.',
  },
  {
    title: 'Allotment Procedure',
    text: 'Allotment is first come, first served, in order of registration. You receive your highest-ranked preference that is still available when your registration is processed. If all three are taken, the organisers will offer an alternative as per availability.',
  },
  {
    title: 'Finality of Allotments',
    text: 'Allotments are final. Exchanges between delegates are not allowed.',
  },
  {
    title: 'UNSC Delegation Size',
    text: 'Each UNSC country is a delegation of two delegates.',
  },
];

// Section 3: Code of Conduct
export const codeOfConduct = [
  {
    id: 'respect',
    title: 'Respect',
    tag: 'Fundamental Principle',
    text: 'Address the Chair and other delegates courteously, in formal language. Debate the position, not the person. Personal attacks, communal remarks, hate speech, harassment and discrimination of any kind are not tolerated. Both agendas are sensitive, so keep remarks tied to policy and to your assigned role.',
  },
  {
    id: 'placards',
    title: 'Placards',
    tag: 'Floor Decorum',
    text: 'Raise your placard to be recognised. Speak only when the Chair gives you the floor, and address all remarks through the Chair.',
  },
  {
    id: 'devices',
    title: 'Electronic devices',
    tag: 'Technology Policy',
    text: 'Devices may be used for research, drafting and notes. You may not read a speech directly from a screen. Keep devices on silent.',
  },
  {
    id: 'originality',
    title: 'Originality',
    tag: 'Plagiarism & AI Guidelines',
    text: "Draft resolutions must be written in committee. Pre-written resolutions, uncited copying from existing documents, and presenting someone else's work as your own count as plagiarism. Preparing research, speeches and positions in advance is encouraged. Tools, including AI tools, may help your research, but your speeches and documents must be in your own words.",
  },
  {
    id: 'dress-code',
    title: 'Dress code',
    tag: 'Appearance',
    text: 'As listed in Section 1. Delegates who do not meet it may be asked to correct it.',
  },
  {
    id: 'leaving-room',
    title: 'Leaving the room',
    tag: 'Chamber Protocol',
    text: "Use a Point of Personal Privilege and wait for the Chair's permission. A break is scheduled in each session. Do not leave during voting procedure.",
  },
  {
    id: 'attendance',
    title: 'Attendance',
    tag: 'Punctuality',
    text: 'Be seated for roll call at the start of each session.',
  },
  {
    id: 'penalties',
    title: 'Penalties',
    tag: 'Enforcement',
    text: 'The Chair decides all penalties. Depending on the offence, a delegate may be warned, lose marks, be barred from speaking for a period, be removed from the committee, or be made ineligible for awards. The Chair may refer serious or repeated offences to the Organising Committee.',
  },
  {
    id: 'grievances',
    title: 'Grievances',
    tag: 'Support & Redressal',
    text: 'Raise any concern about conduct or harassment with the Chair, the Co-Chair or any member of the Organising Committee.',
  },
];

// Section 4: The Committee Bureau
export const committeeBureau = [
  {
    role: 'Chair',
    responsibilities:
      "Presides over the committee, recognises speakers, rules on motions and points, enforces these rules and decides penalties. The Chair's decisions are final.",
  },
  {
    role: 'Co-Chair',
    responsibilities:
      'Assists the Chair, keeps time, manages chits, reviews draft resolutions for format, and presides when the Chair is absent.',
  },
  {
    role: 'Rapporteur',
    responsibilities:
      "Takes roll call, keeps the speakers' list, records motions, votes and the proceedings, and holds the committee's documents.",
  },
];

// Section 5: Flow of Debate
export const flowOfDebate = [
  {
    step: '1',
    stage: 'Roll call and quorum',
    details:
      'Answer roll call with "Present". Debate may begin once at least one-third of the voting members are present. Any vote needs a majority of the voting members present. Abstentions are not allowed, so every voting delegate is treated as present and voting and must vote.',
  },
  {
    step: '2',
    stage: 'Opening address',
    details: 'The Chair opens the session. In the UNSC this is the Presidential Speech.',
  },
  {
    step: '3',
    stage: "Formal debate on the General Speakers' List",
    details: 'The agenda is fixed, so there is no motion to set the agenda.',
  },
  {
    step: '4',
    stage: 'Caucuses',
    details: 'Moderated and unmoderated caucuses to debate ideas, build blocs and draft.',
  },
  {
    step: '5',
    stage: 'Draft resolutions',
    details: 'Draft resolutions are introduced, debated and amended.',
  },
  {
    step: '6',
    stage: 'Closure of debate and voting',
    details: 'Committee closes debate and proceeds into formal voting procedure.',
  },
  {
    step: '7',
    stage: 'Adjournment of the meeting',
    details: 'Formal adjournment of the meeting at the end of the session.',
  },
];

// Section 6: Speakers' List, Speaking Time and Yields
export const speakersListAndYields = {
  generalSpeakersList:
    'The General Speakers\' List is open. Raise your placard or send a chit to the Chair to be added. A delegation or party appears on the list once at a time and may add itself again after speaking.',
  speakingTime:
    'Speaking time is set by the Chair at the start of each session, after taking the sense of the house. Unless announced otherwise, it is 90 seconds. The Chair may change it during the session.',
  yields:
    'Yields are decided the same way. When the Chair sets the speaking time, the Chair also announces which yields are allowed: to the Chair, to questions (Points of Information), or to another delegate. Unused time passes to the Chair.',
  yieldTypes: [
    { target: 'To the Chair', note: 'Unused time passes back to the Chair; debate moves immediately to next speaker.' },
    { target: 'To Questions (Points of Information)', note: 'Allows other delegates to ask questions through Points of Information.' },
    { target: 'To Another Delegate', note: 'Transfers remaining time to a specified delegate (cannot be re-yielded).' },
  ],
};

// Section 7: Motions and Points
export const motionsAndPointsRules = {
  general:
    'Motions are entertained when the floor is open. Each motion states what is proposed and for how long. Motions are voted on by simple majority, with no abstentions. The Chair may rule a motion out of order or dilatory.',
  orderOfPrecedenceDescription:
    'When several motions are on the floor, they are taken in this order: adjournment, suspension, unmoderated caucus, moderated caucus.',
  motionsOrderOfPrecedence: [
    'Adjournment of the Meeting',
    'Suspension of the Meeting',
    'Unmoderated Caucus',
    'Moderated Caucus',
  ],
  motionsTable: [
    {
      motion: 'Moderated Caucus',
      purpose: 'Structured debate on a specific topic, with speakers recognised by the Chair.',
      mustState: 'Topic, total time, time per speaker',
      order: 4,
    },
    {
      motion: 'Unmoderated Caucus',
      purpose: 'Free discussion. Delegates leave their seats to lobby, form blocs and draft.',
      mustState: 'Total time',
      order: 3,
    },
    {
      motion: 'Suspension of the Meeting',
      purpose: 'Pauses the meeting for a break within the session.',
      mustState: 'Duration',
      order: 2,
    },
    {
      motion: 'Adjournment of the Meeting',
      purpose: 'Ends the meeting for the day. Used at the end of the final session.',
      mustState: 'None',
      order: 1,
    },
    {
      motion: 'Introduce a Draft Resolution',
      purpose: 'Brings an approved draft resolution to the floor (Section 8).',
      mustState: 'Draft number',
      order: 5,
    },
    {
      motion: 'Close Debate',
      purpose: 'Ends debate and moves the committee into voting procedure (Section 8).',
      mustState: 'None',
      order: 6,
    },
  ],
  pointsTable: [
    {
      point: 'Personal Privilege',
      use: 'Physical discomfort, audibility, or a request to leave the room.',
      mayInterrupt: 'Only for audibility',
    },
    {
      point: 'Order',
      use: 'A rule or procedure has been broken. Use sparingly.',
      mayInterrupt: 'Yes',
    },
    {
      point: 'Parliamentary Inquiry',
      use: 'A question to the Chair about the rules or what happens next.',
      mayInterrupt: 'No',
    },
    {
      point: 'Information',
      use: 'A question to a speaker, only if the speaker yielded to questions.',
      mayInterrupt: 'No',
    },
  ],
};

// Section 8: Draft Resolutions and Voting
export const draftResolutionsRules = {
  formatAndSubmission: [
    'A draft resolution has preambulatory clauses, which set out context (for example "Recalling", "Noting", "Deeply concerned"), and numbered operative clauses, which state actions (for example "Calls upon", "Urges", "Condemns", "Demands", "Decides").',
    'It needs at least 2 sponsors and 2 signatories. Sponsors are the authors and own the text. Signatories support the draft being discussed and are not bound to vote for it. A delegate may sign any number of drafts but sponsor only one. Sponsors and signatories must come from different delegations or parties. Two delegates of one delegation or party count once.',
    'Hand the draft to the Chair through the Co-Chair or Rapporteur. The Bureau checks format and signatures and then gives it a number. Only a numbered draft can be introduced.',
  ],
  introductionAndAmendments: [
    'After a successful Motion to Introduce, a sponsor reads the operative clauses and answers questions. Debate on the draft continues through the speakers\' list or moderated caucuses.',
    'A friendly amendment, signed by all sponsors, is added to the draft automatically. An unfriendly amendment needs the Chair\'s approval and a simple majority vote.',
  ],
  votingProcedure: [
    'After a successful Motion to Close Debate, the committee enters voting procedure. The room is sealed: no one enters or leaves, and there are no chits or conversations.',
    'Draft resolutions are voted in the order in which they were introduced. Delegates vote "In favour" or "Against" by placard. There are no abstentions. The Chair may call a roll-call vote.',
    'A draft passes with a simple majority of the votes cast. Once a draft passes, the Chair may set aside any remaining draft that substantially repeats or contradicts it.',
  ],
};

// Section 9: Chits
export const chitsRules = [
  "Chits are passed through the Chair's desk. Write the recipient and sender on each chit (To / From). A chit to the Bureau should be marked for the Chair, Co-Chair or Rapporteur.",
  'Chits must be relevant to the committee and respectful. The Bureau may read any chit. Misuse of chits is penalised under Section 3.',
];

// Section 10: UNSC: Specific Rules
export const unscSpecificData = {
  committee: 'United Nations Security Council (UNSC)',
  agenda:
    'The situation in the Middle East: Palestine and Lebanon. Securing a lasting ceasefire and humanitarian access and implementation of the two state solution.',
  format: 'Dual Delegation (Two delegates per country)',
  compositionNote: 'The organisers may add countries if participation is higher.',
  compositionTable: [
    {
      category: 'Permanent members (5)',
      members: 'China, France, Russian Federation, United Kingdom, United States of America',
      status: 'Voting Member (No Veto)',
    },
    {
      category: 'Other voting members (11)',
      members: 'India, Japan, Egypt, Saudi Arabia (KSA), Qatar, Jordan, Italy, Spain, Argentina, South Africa, Germany, ...',
      status: 'Voting Member',
    },
    {
      category: 'Invited members (4), non-voting',
      members: 'Israel, Lebanon, Palestine, Iran',
      status: 'Non-voting (May debate, negotiate, sponsor & sign)',
    },
  ],
  rules: [
    {
      title: 'Delegations',
      text: 'Two delegates share one country, one seat, one vote and one slot on the speakers\' list. The delegates decide between themselves who speaks.',
    },
    {
      title: 'No veto',
      highlight: true,
      text: 'The Council works without veto power. A permanent member\'s vote carries the same weight as any other voting member\'s, and a draft resolution passes on a simple majority of the voting members.',
    },
    {
      title: 'Voting',
      text: 'Both delegates of a country must show the same placard. Mismatched placards are invalid and the delegation will be asked to vote again. No abstentions.',
    },
    {
      title: 'Invited members',
      text: 'Israel, Lebanon, Palestine and Iran take part in debate, caucuses and negotiations, but do not vote on motions or draft resolutions. They may sponsor or sign a draft resolution.',
    },
    {
      title: 'Scope',
      text: 'Stay on the agenda: a lasting ceasefire, humanitarian access, and implementation of the two state solution, with a focus on Palestine and Lebanon.',
    },
    {
      title: 'Language',
      text: 'Speak formally and refer to yourself and others by country ("the delegation of ..."). Beginners are welcome, and the Chair will explain procedure as the session starts.',
    },
  ],
};

// Section 11: AIPPM: Specific Rules
export const aippmSpecificData = {
  committee: 'All India Political Parties Meet (AIPPM)',
  agenda: 'Delimitation of Parliamentary and Assembly constituencies after the upcoming Census.',
  format: 'Parliamentary Assembly (26 parties, each represented by its leader; larger parties may have more than one delegate)',
  rules: [
    {
      title: 'Format',
      text: 'The All India Political Parties Meet is a parliamentary-style committee. Each delegate represents the leader of a political party. Larger parties may have more than one delegate.',
    },
    {
      title: 'Ruling and opposition',
      text: 'The ruling and opposition benches are fixed and announced with the allotment. The ruling side defends and shapes the government\'s approach. The opposition scrutinises it and offers alternatives. Parties may negotiate across the aisle.',
    },
    {
      title: 'Realism',
      text: 'Your positions should align, at a general level, with your party\'s real ideology, manifesto and record. Exact replication is not required. A party that departs from its usual stance should justify it in debate.',
    },
    {
      title: 'Address',
      text: 'Address the Chair as "Honourable Chair". Refer to other delegates by party and role ("the leader of the ... party"). Criticise policy and records, not individuals. No heckling.',
    },
    {
      title: "Speakers' list",
      text: 'One slot per party at a time. The delegates of a party decide who speaks.',
    },
    {
      title: 'Voting',
      text: 'Each delegate holds one vote, so larger parties carry more weight. Delegates of one party vote together. No abstentions.',
    },
    {
      title: 'Output',
      text: 'Debate produces draft resolutions under Section 8.',
    },
  ],
};

// Section 12: Awards and Scoring
export const awardsAndScoringData = {
  scoringProcess:
    'The three members of the Bureau score each delegate out of 100 and then compare notes. Marks reward quality, not the number of speeches.',
  evaluationCriteria: [
    {
      criterion: 'Knowledge and research',
      whatBureauLooksFor: 'Command of the agenda, accurate facts, awareness of background.',
      unsc: 20,
      aippm: 20,
    },
    {
      criterion: 'Initiative and consistency',
      whatBureauLooksFor: 'Active Participation across the whole session, not only the start.',
      unsc: 15,
      aippm: 15,
    },
    {
      criterion: 'Oratory and rebuttal',
      whatBureauLooksFor: "Clarity, structure, persuasion, and answering other delegates' arguments.",
      unsc: 15,
      aippm: 20,
    },
    {
      criterion: 'Diplomacy and collaboration',
      whatBureauLooksFor: 'Building blocs and coalitions, negotiating, working across positions.',
      unsc: 20,
      aippm: 15,
    },
    {
      criterion: 'Contribution to documents',
      whatBureauLooksFor: 'Drafting, sponsoring and amending, and the quality and feasibility of clauses.',
      unsc: 15,
      aippm: 15,
    },
    {
      criterion: 'Procedure and decorum',
      whatBureauLooksFor: 'Correct use of motions and points, respect for the Bureau, courtesy, dress code.',
      unsc: 10,
      aippm: 10,
    },
    {
      criterion: 'Fidelity to position',
      whatBureauLooksFor: "Consistency with the country's foreign policy or the party's ideology and record.",
      unsc: 5,
      aippm: 5,
    },
  ],
  totalMarks: { unsc: 100, aippm: 100 },
  awardsList: [
    {
      name: 'Best Delegate',
      eligibility: 'UNSC & AIPPM',
      description: 'Goes to the highest total in each committee.',
    },
    {
      name: 'High Commendation',
      eligibility: 'UNSC & AIPPM',
      description: 'Goes to the next highest total in each committee.',
    },
    {
      name: 'Special Mention',
      eligibility: 'UNSC & AIPPM',
      description: 'Recognises a delegate who stood out in one area, such as oratory, diplomacy or drafting.',
    },
    {
      name: 'Best Delegation',
      eligibility: 'UNSC only',
      description: 'Goes to the country with the highest average score across its two delegates, with visible coordination in speaking and drafting.',
    },
  ],
  tieBreaker:
    'Ties are broken at the Chair\'s discretion, after consulting the Co-Chair and the Rapporteur. The decision is final.',
};

// Section 13: Icebreaker and Delegate's Choice Awards
export const icebreakerAndDelegatesChoice = {
  icebreaker: {
    title: 'Pre-Conference Icebreaker',
    date: '31 October 2026',
    description:
      'An icebreaker will be held before the start of UNSC on 31 October, so that delegates and co-delegates meet before the first session.',
    organizer: 'It is run by the Organising Committee. Participation is encouraged, and it carries no marks.',
  },
  delegatesChoice: {
    title: "Delegate's Choice: Best Dressed",
    awards: ['Best Dressed (Male)', 'Best Dressed (Female)'],
    rules: [
      "Two awards, Best Dressed (Male) and Best Dressed (Female), are decided by the delegates' votes. They are separate from the Bureau's awards in Section 12, so a winner may also hold an individual award.",
      'Each delegate votes once, by ballot, near the end of the day. You may not vote for yourself. The delegate with the most votes in each category wins. Ties are decided by the Organising Committee.',
      'Only delegates who follow the dress code in Section 1 are eligible.',
    ],
  },
};

// Section 14: Quick Phrase Guide
export const quickPhraseGuide = [
  {
    intent: 'Join the speakers\' list',
    phrase: '"The delegate of ... wishes to be added to the speakers\' list."',
  },
  {
    intent: 'Start structured debate',
    phrase: '"Motion for a moderated caucus on [topic] for [total time], [time] per speaker."',
  },
  {
    intent: 'Start free discussion',
    phrase: '"Motion for an unmoderated caucus for [time]."',
  },
  {
    intent: 'Take a break',
    phrase: '"Motion to suspend the meeting for [time]."',
  },
  {
    intent: 'Present my draft',
    phrase: '"Motion to introduce Draft Resolution [number]."',
  },
  {
    intent: 'End debate and vote',
    phrase: '"Motion to close debate and move into voting procedure."',
  },
  {
    intent: 'End the session',
    phrase: '"Motion to adjourn the meeting."',
  },
  {
    intent: 'Report a problem',
    phrase: '"Point of personal privilege" (comfort, audibility) or "Point of order" (a rule was broken).',
  },
  {
    intent: 'Ask about procedure',
    phrase: '"Point of parliamentary inquiry."',
  },
  {
    intent: 'Question a speaker',
    phrase: '"Point of information", once the speaker has yielded to questions.',
  },
];

// Convenience Aliases and backward compatibility
export const unscRules = {
  committee: unscSpecificData.committee,
  protocol: 'Harvard Rules of Procedure (No Veto)',
  format: unscSpecificData.format,
  agenda: unscSpecificData.agenda,
  compositionTable: unscSpecificData.compositionTable,
  sections: unscSpecificData.rules.map((r, idx) => ({
    id: `unsc-10.${idx + 1}`,
    number: `Rule 10.${idx + 1}`,
    title: r.title,
    content: [r.text],
    highlight: r.highlight,
  })),
};

export const aippmRules = {
  committee: aippmSpecificData.committee,
  protocol: 'Indian Parliamentary Forum Protocol',
  format: aippmSpecificData.format,
  agenda: aippmSpecificData.agenda,
  sections: aippmSpecificData.rules.map((r, idx) => ({
    id: `aippm-11.${idx + 1}`,
    number: `Rule 11.${idx + 1}`,
    title: r.title,
    content: [r.text],
  })),
};

export const conferencePolicies = {
  schedule: {
    unscDate: 'Day 1: 31 October 2026',
    aippmDate: 'Day 2: 1 November 2026',
    unscVenue: 'LDC Hall, NIT Patna',
    aippmVenue: 'Lecture Hall, NIT Patna',
  },
  dressCode: [
    {
      day: 'Day 1 (31 October 2026)',
      committee: 'UNSC (United Nations Security Council)',
      style: 'Western Formal or National Dress',
      description: 'Western formal business suits, formal trousers with shirts/blazers, ties, or dignified national dress.',
    },
    {
      day: 'Day 2 (1 November 2026)',
      committee: 'AIPPM (All India Political Parties Meet)',
      style: 'Western Formal or Indian Formal',
      description: 'Western formal attire, or Indian traditional formal wear (kurta with Nehru jacket, or saree).',
    },
  ],
  codeOfConduct: codeOfConduct.map((c) => ({
    title: c.title,
    severity: c.tag,
    text: c.text,
  })),
};

export const motionPrecedenceMatrix = motionsAndPointsRules.motionsTable.map((m) => ({
  motion: m.motion,
  committee: 'UNSC & AIPPM',
  purpose: m.purpose,
  mustState: m.mustState,
  vote: 'Simple Majority (No Abstentions)',
  priority: m.order,
}));
