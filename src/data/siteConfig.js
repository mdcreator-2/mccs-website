/**
 * Site Configuration for MCCS Conference Website
 */

export const siteConfig = {
  eventName: 'MCCS',
  eventFullName: 'Model Conferences and Committee Simulation',
  tagline: 'Organized by Expresso Club, NIT Patna',
  venue: 'NIT Patna, Bihta Campus',
  dates: {
    unsc: new Date('2026-10-31T08:30:00+05:30'),
    aippm: new Date('2026-11-01T08:30:00+05:30'),
  },
  registrationUrl: '#', // placeholder
  contact: {
    email: 'taha.yaseen.cse@gmail.com', // placeholder
    instagram: 'https://www.instagram.com/expresso_nitp/',
    linkedin: 'https://www.linkedin.com/company/expressonitp/',
  },
  committees: {
    unsc: {
      name: 'United Nations Security Council',
      abbreviation: 'UNSC',
      agenda:
        'The situation in the Middle East: Palestine and Lebanon. Securing a lasting ceasefire and humanitarian access and implementation of the two state solution.',
      date: '31 October 2026',
      delegationType: 'Dual Delegation',
      totalDelegations: 20,
    },
    aippm: {
      name: 'All India Political Parties Meet',
      abbreviation: 'AIPPM',
      agenda: 'Delimitation of Parliamentary and Assembly constituencies after the upcoming Census',
      date: '1 November 2026',
      delegationType: 'Single Delegation',
      totalDelegations: 26,
    },
  },
};

export default siteConfig;
