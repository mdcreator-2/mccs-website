/**
 * Google Apps Script to automatically generate both MCCS Registration Forms in Google Forms.
 * 
 * Instructions:
 * 1. Go to https://script.google.com
 * 2. Click "New Project" (or use your existing project)
 * 3. Replace all the code in Code.gs with this entire file.
 * 4. Click Save (Ctrl+S or the disk icon).
 * 5. Ensure 'createBothMccsForms' is selected in the function dropdown at the top.
 * 6. Click "Run".
 * 7. When prompted, click "Review permissions" -> Choose your account -> "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow".
 * 8. View the Execution Log at the bottom to see your live URLs!
 */

function createBothMccsForms() {
  const unscUrls = createUnscForm();
  const aippmUrls = createAippmForm();
  
  Logger.log('====================================================');
  Logger.log('🎉 MCCS REGISTRATION FORMS CREATED SUCCESSFULLY!');
  Logger.log('====================================================');
  Logger.log('🏛️ UNSC (Dual Delegation):');
  Logger.log('   Public Registration Link: ' + unscUrls.publishedUrl);
  Logger.log('   Form Edit Link:           ' + unscUrls.editUrl);
  Logger.log('   Responses Spreadsheet:    ' + unscUrls.spreadsheetUrl);
  Logger.log('----------------------------------------------------');
  Logger.log('🇮🇳 AIPPM (Single Delegation):');
  Logger.log('   Public Registration Link: ' + aippmUrls.publishedUrl);
  Logger.log('   Form Edit Link:           ' + aippmUrls.editUrl);
  Logger.log('   Responses Spreadsheet:    ' + aippmUrls.spreadsheetUrl);
  Logger.log('====================================================');
}

/**
 * Creates the UNSC Registration Form & Linked Response Sheet
 */
function createUnscForm() {
  const unscCountries = [
    'United States',
    'United Kingdom',
    'France',
    'Russia',
    'China',
    'India',
    'Italy',
    'Argentina',
    'Germany',
    'Qatar',
    'Saudi Arabia',
    'Egypt',
    'Japan',
    'South Africa',
    'Spain',
    'Israel',
    'Palestine',
    'Lebanon',
    'Iran'
  ];

  const form = FormApp.create('MCCS 2026 - UNSC Registration Form');
  form.setDescription(
    'Model Conferences and Committee Simulation (MCCS 2026)\n' +
    'Organized by Expresso Club, NIT Patna\n\n' +
    'Committee: United Nations Security Council (UNSC)\n' +
    'Agenda: The situation in the Middle East: Palestine and Lebanon. Securing a lasting ceasefire and humanitarian access and implementation of the two state solution.\n' +
    'Delegation Type: Dual Delegation (2 Delegates per team)\n' +
    'Date: 31 October 2026\n' +
    'Venue: NIT Patna, Bihta Campus'
  );

  // Automatically create a linked Google Sheet for responses
  const ss = SpreadsheetApp.create('MCCS 2026 - UNSC Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // --- Delegate 1 Section ---
  const header1 = form.addSectionHeaderItem();
  header1.setTitle('Delegate 1 Information');
  header1.setHelpText('Please provide contact and academic details for the first delegate.');

  form.addTextItem().setTitle('Delegate 1: Full Name').setRequired(true);
  form.addTextItem().setTitle('Delegate 1: Branch / Department').setRequired(true);
  form.addTextItem().setTitle('Delegate 1: Roll Number').setRequired(true);
  form.addTextItem().setTitle('Delegate 1: Phone / WhatsApp Number').setRequired(true);

  // --- Delegate 2 Section ---
  const header2 = form.addSectionHeaderItem();
  header2.setTitle('Delegate 2 Information');
  header2.setHelpText('Please provide contact and academic details for the second delegate.');

  form.addTextItem().setTitle('Delegate 2: Full Name').setRequired(true);
  form.addTextItem().setTitle('Delegate 2: Branch / Department').setRequired(true);
  form.addTextItem().setTitle('Delegate 2: Roll Number').setRequired(true);
  form.addTextItem().setTitle('Delegate 2: Phone / WhatsApp Number').setRequired(true);

  // --- Country Preferences Section ---
  const headerPref = form.addSectionHeaderItem();
  headerPref.setTitle('Country Portfolio Preferences');
  headerPref.setHelpText('Select your preferred country allocations in order of priority from the list of UNSC member and observer states.');

  const p1 = form.addListItem();
  p1.setTitle('Preference 1 (Mandatory)').setChoiceValues(unscCountries).setRequired(true);

  const p2 = form.addListItem();
  p2.setTitle('Preference 2 (Optional)').setChoiceValues(unscCountries).setRequired(false);

  const p3 = form.addListItem();
  p3.setTitle('Preference 3 (Optional)').setChoiceValues(unscCountries).setRequired(false);

  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl(),
    spreadsheetUrl: ss.getUrl()
  };
}

/**
 * Creates the AIPPM Registration Form & Linked Response Sheet
 */
function createAippmForm() {
  const aippmParties = [
    'Bharatiya Janata Party (BJP)',
    'Telugu Desam Party (TDP)',
    'Janata Dal (United) - JD(U)',
    'Shiv Sena (Eknath Shinde)',
    'Nationalist Congress Party (Ajit Pawar)',
    'Lok Janshakti Party (Ram Vilas)',
    'Janata Dal (Secular) - JD(S)',
    'All India Anna Dravida Munnetra Kazhagam (AIADMK)',
    'Indian National Congress (INC)',
    'Samajwadi Party (SP)',
    'All India Trinamool Congress (TMC)',
    'Dravida Munnetra Kazhagam (DMK)',
    'Aam Aadmi Party (AAP)',
    'Rashtriya Janata Dal (RJD)',
    'Shiv Sena (Uddhav Balasaheb Thackeray)',
    'Nationalist Congress Party (Sharadchandra Pawar)',
    'Communist Party of India (Marxist) - CPI(M)',
    'Jharkhand Mukti Morcha (JMM)',
    'Jammu & Kashmir National Conference (JKNC)',
    'Indian Union Muslim League (IUML)',
    'Tamilaga Vettri Kazhagam (TVK)',
    'Biju Janata Dal (BJD)',
    'Bharat Rashtra Samithi (BRS)',
    'Yuvajana Sramika Rythu Congress Party (YSRCP)',
    'Bahujan Samaj Party (BSP)',
    'All India Majlis-e-Ittehadul Muslimeen (AIMIM)'
  ];

  const form = FormApp.create('MCCS 2026 - AIPPM Registration Form');
  form.setDescription(
    'Model Conferences and Committee Simulation (MCCS 2026)\n' +
    'Organized by Expresso Club, NIT Patna\n\n' +
    'Committee: All India Political Parties Meet (AIPPM)\n' +
    'Agenda: Delimitation of Parliamentary and Assembly constituencies after the upcoming Census\n' +
    'Delegation Type: Single Delegation (1 Delegate per portfolio)\n' +
    'Date: 1 November 2026\n' +
    'Venue: NIT Patna, Bihta Campus'
  );

  // Automatically create a linked Google Sheet for responses
  const ss = SpreadsheetApp.create('MCCS 2026 - AIPPM Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // --- Delegate Section ---
  const header1 = form.addSectionHeaderItem();
  header1.setTitle('Delegate Information');
  header1.setHelpText('Please provide your contact and academic details.');

  form.addTextItem().setTitle('Full Name').setRequired(true);
  form.addTextItem().setTitle('Branch / Department').setRequired(true);
  form.addTextItem().setTitle('Roll Number').setRequired(true);
  form.addTextItem().setTitle('Phone / WhatsApp Number').setRequired(true);

  // --- Party / Portfolio Preferences Section ---
  const headerPref = form.addSectionHeaderItem();
  headerPref.setTitle('Political Party / Portfolio Preferences');
  headerPref.setHelpText('Select your preferred political party / portfolio in order of priority.');

  const p1 = form.addListItem();
  p1.setTitle('Preference 1 (Mandatory)').setChoiceValues(aippmParties).setRequired(true);

  const p2 = form.addListItem();
  p2.setTitle('Preference 2 (Optional)').setChoiceValues(aippmParties).setRequired(false);

  const p3 = form.addListItem();
  p3.setTitle('Preference 3 (Optional)').setChoiceValues(aippmParties).setRequired(false);

  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl(),
    spreadsheetUrl: ss.getUrl()
  };
}
