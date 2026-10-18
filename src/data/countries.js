/**
 * UNSC Country Data for MCCS Simulation
 * 19 total delegations: 5 Permanent (P5), 10 Non-Permanent (E10), 4 Invited Members
 */

export const unscCountries = [
  // P5 Members (Permanent, have veto power)
  {
    name: 'United States',
    code: 'US',
    type: 'P5',
    veto: true,
    flag: 'https://flagcdn.com/w320/us.png',
  },
  {
    name: 'United Kingdom',
    code: 'GB',
    type: 'P5',
    veto: true,
    flag: 'https://flagcdn.com/w320/gb.png',
  },
  {
    name: 'France',
    code: 'FR',
    type: 'P5',
    veto: true,
    flag: 'https://flagcdn.com/w320/fr.png',
  },
  {
    name: 'Russia',
    code: 'RU',
    type: 'P5',
    veto: true,
    flag: 'https://flagcdn.com/w320/ru.png',
  },
  {
    name: 'China',
    code: 'CN',
    type: 'P5',
    veto: true,
    flag: 'https://flagcdn.com/w320/cn.png',
  },

  // E10 Members (Non-Permanent, elected, NO veto)
  {
    name: 'Japan',
    code: 'JP',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/jp.png',
  },
  {
    name: 'Brazil',
    code: 'BR',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/br.png',
  },
  {
    name: 'India',
    code: 'IN',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/in.png',
  },
  {
    name: 'Germany',
    code: 'DE',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/de.png',
  },
  {
    name: 'South Africa',
    code: 'ZA',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/za.png',
  },
  {
    name: 'Mexico',
    code: 'MX',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/mx.png',
  },
  {
    name: 'Nigeria',
    code: 'NG',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/ng.png',
  },
  {
    name: 'Turkey',
    code: 'TR',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/tr.png',
  },
  {
    name: 'Australia',
    code: 'AU',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/au.png',
  },
  {
    name: 'South Korea',
    code: 'KR',
    type: 'E10',
    veto: false,
    flag: 'https://flagcdn.com/w320/kr.png',
  },

  // Invited Members (Special non-member status, no veto, restricted voting)
  {
    name: 'Israel',
    code: 'IL',
    type: 'Invited',
    veto: false,
    flag: 'https://flagcdn.com/w320/il.png',
  },
  {
    name: 'Iran',
    code: 'IR',
    type: 'Invited',
    veto: false,
    flag: 'https://flagcdn.com/w320/ir.png',
  },
  {
    name: 'Lebanon',
    code: 'LB',
    type: 'Invited',
    veto: false,
    flag: 'https://flagcdn.com/w320/lb.png',
  },
  {
    name: 'Palestine',
    code: 'PS',
    type: 'Invited',
    veto: false,
    flag: 'https://flagcdn.com/w320/ps.png',
  },
];

export default unscCountries;
