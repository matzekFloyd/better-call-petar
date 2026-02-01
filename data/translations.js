/**
 * Übersetzungen für die Anwalts-Webseite
 * DE = Deutsch, EN = Englisch, SR = Serbisch
 */
export const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'en', label: 'English' },
  { code: 'sr', label: 'Српски' },
];

export const translations = {
  de: {
    metaTitle: 'Rechtsanwalt | Kanzlei',
    heading: 'Ihr Rechtsanwalt',
    intro: `Sehr geehrte Damen und Herren,

ich freue mich, dass Sie meine Kanzlei besuchen. Mit langjähriger Erfahrung in verschiedenen Rechtsgebieten stehe ich Ihnen als verlässlicher Partner zur Seite.

Mein Ziel ist es, Ihre Interessen mit Engagement und Fachkompetenz zu vertreten – ob in Beratung, außergerichtlicher Einigung oder vor Gericht.

Vereinbaren Sie ein unverbindliches Erstgespräch. Ich berate Sie gern.`,
    contactTitle: 'Kontakt',
    phone: 'Telefon',
    email: 'E-Mail',
    address: 'Adresse',
    officeHours: 'Sprechzeiten',
    officeHoursValue: 'Mo–Fr 9:00–19:00, Termine nach Vereinbarung',
  },
  en: {
    metaTitle: 'Attorney at Law | Law Office',
    heading: 'Your Attorney',
    intro: `Dear visitors,

I am pleased to welcome you to my law office. With many years of experience in various areas of law, I am here to support you as a reliable partner.

My aim is to represent your interests with dedication and expertise – whether in advisory work, out-of-court settlement, or in court.

Schedule a non-binding initial consultation. I look forward to advising you.`,
    contactTitle: 'Contact',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    officeHours: 'Office hours',
    officeHoursValue: 'Mon–Fri 9:00–19:00, appointments by arrangement',
  },
  sr: {
    metaTitle: 'Адвокат | Адвокатска канцеларија',
    heading: 'Ваш адвокат (POZ BRATE)',
    intro: `Поштовани,

драго ми је да сте посетили моју адвокатску канцеларију. Са дугогодишњим искуством у различитим областима права, ту сам да вам будем поуздан партнер.

Циљ ми је да ваше интересе заступам са посвећеношћу и стручношћу – било у саветовању, вансудском поравнању или пред судом.

Закажите бесплатни први разговор. Радо ћу вас саветовати.`,
    contactTitle: 'Контакт',
    phone: 'Телефон',
    email: 'Е-маил',
    address: 'Адреса',
    officeHours: 'Радно време',
    officeHoursValue: 'Пон–Пет 9:00–19:00, термини по договору',
  },
};

export const defaultLanguage = 'de';
export const supportedLanguages = ['de', 'en', 'sr'];

export function getTranslations(lang) {
  return translations[lang] || translations[defaultLanguage];
}

export function isValidLanguage(lang) {
  return supportedLanguages.includes(lang);
}
