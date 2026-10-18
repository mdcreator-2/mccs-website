/**
 * Site Configuration for MCCS Conference Website
 */

export const siteConfig = {
  eventName: 'MCCS',
  eventFullName: 'Model Conferences and Committee Simulation',
  tagline: 'Organized by Expresso Club, NIT Patna',
  venue: 'NIT Patna, Bihta Campus',
  venueSpecific: 'To Be Announced',
  dates: {
    unsc: new Date('2026-10-31T08:30:00+05:30'),
    aippm: new Date('2026-11-01T08:30:00+05:30'),
  },
  registrationUrl: '#', // placeholder
  contact: {
    email: 'mccs@nitpatna.ac.in', // placeholder
    instagram: '#',
    linkedin: '#',
  },
  committees: {
    unsc: {
      name: 'United Nations Security Council',
      abbreviation: 'UNSC',
      agenda:
        'Escalation to Total Regional Conflict: Addressing the Israel-Palestine War, Hezbollah Involvement, and Iranian Aggression in the Middle East.',
      date: '31 October 2026',
      delegationType: 'Dual Delegation',
      totalDelegations: 19,
    },
    aippm: {
      name: 'All India Political Parties Meet',
      abbreviation: 'AIPPM',
      agenda: 'To be announced',
      date: '1 November 2026',
      delegationType: 'Single Delegation',
      totalDelegations: 12,
    },
  },
};

export default siteConfig;
