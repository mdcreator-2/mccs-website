/**
 * UNSC Country Data for MCCS Simulation
 * 19 total delegations: 5 Permanent (P5), 10 Elected Members (E10), 4 Observer States (no voting rights)
 */

export const unscCountries = [
  // P5 Members (Permanent)
  {
    name: 'United States',
    code: 'US',
    type: 'P5',
    flag: 'https://flagcdn.com/w320/us.png',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    type: 'P5',
    flag: 'https://flagcdn.com/w320/gb.png',
  },
  {
    name: 'France',
    code: 'FR',
    type: 'P5',
    flag: 'https://flagcdn.com/w320/fr.png',
  },
  {
    name: 'Russia',
    code: 'RU',
    type: 'P5',
    flag: 'https://flagcdn.com/w320/ru.png',
  },
  {
    name: 'China',
    code: 'CN',
    type: 'P5',
    flag: 'https://flagcdn.com/w320/cn.png',
  },

  // Elected Members (Non-Permanent, elected)
  {
    name: 'India',
    code: 'IN',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/in.png',
  },
  {
    name: 'Italy',
    code: 'IT',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/it.png',
  },
  {
    name: 'Argentina',
    code: 'AR',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/ar.png',
  },
  {
    name: 'Germany',
    code: 'DE',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/de.png',
  },
  {
    name: 'Qatar',
    code: 'QA',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/qa.png',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/sa.png',
  },
  {
    name: 'Egypt',
    code: 'EG',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/eg.png',
  },
  {
    name: 'Japan',
    code: 'JP',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/jp.png',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/za.png',
  },
  {
    name: 'Spain',
    code: 'ES',
    type: 'E10',
    flag: 'https://flagcdn.com/w320/es.png',
  },

  // Invited Members (Observer states, no voting rights)
  {
    name: 'Israel',
    code: 'IL',
    type: 'Invited',
    voting: false,
    flag: 'https://flagcdn.com/w320/il.png',
  },
  {
    name: 'Palestine',
    code: 'PS',
    type: 'Invited',
    voting: false,
    flag: 'https://flagcdn.com/w320/ps.png',
  },
  {
    name: 'Lebanon',
    code: 'LB',
    type: 'Invited',
    voting: false,
    flag: 'https://flagcdn.com/w320/lb.png',
  },
  {
    name: 'Iran',
    code: 'IR',
    type: 'Invited',
    voting: false,
    flag: 'https://flagcdn.com/w320/ir.png',
  },
];

export default unscCountries;
