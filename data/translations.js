/**
 * Übersetzungen für die Anwalts-Webseite
 * DE = Deutsch, EN = Englisch, SR = Serbisch
 */
// flagId: ISO 3166-1 alpha-2 für Flaggen-CDN (de, gb, rs)
export const languages = [
  { code: 'de', label: 'Deutsch', flagId: 'de' },
  { code: 'en', label: 'English', flagId: 'gb' },
  { code: 'sr', label: 'Српски', flagId: 'rs' },
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
    // Kontaktformular
    contactPageTitle: 'Kontakt',
    formName: 'Name',
    formEmail: 'E-Mail',
    formMessage: 'Nachricht',
    formSend: 'Senden',
    formSuccess: 'Vielen Dank. Ihre Nachricht wurde gesendet.',
    formError: 'Beim Senden ist ein Fehler aufgetreten.',
    // Impressum
    impressumTitle: 'Impressum',
    impressumContent: `Angaben gemäß Informationspflicht

Kanzlei
Kompetenzstraße 1
1010 Wien

Kontakt: bettermailpetar@hotmail.com / +43 1 234 56 789

Berufsbezeichnung: Rechtsanwalt
Zuständige Rechtsanwaltskammer: Rechtsanwaltskammer Wien

EU-Streitschlichtung: https://consumer-redress.ec.europa.eu/
Verbraucherinformation: https://www.wko.at/vertragsrecht/alternative-streitbeilegung-verbraucherangelegenheiten

Verantwortlich für den Inhalt: Kanzlei`,
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
    contactPageTitle: 'Contact',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSend: 'Send',
    formSuccess: 'Thank you. Your message has been sent.',
    formError: 'An error occurred while sending.',
    impressumTitle: 'Legal Notice',
    impressumContent: `Information in accordance with legal requirements

Law Office
Kompetenzstraße 1
1010 Vienna, Austria

Contact: bettermailpetar@hotmail.com / +43 1 234 56 789

Professional title: Attorney at Law
Bar association: Vienna Bar Association (Rechtsanwaltskammer Wien)

EU dispute resolution: https://consumer-redress.ec.europa.eu/
Consumer information: https://www.wko.at/vertragsrecht/alternative-streitbeilegung-verbraucherangelegenheiten

Responsible for content: Law Office`,
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
    contactPageTitle: 'Контакт',
    formName: 'Име',
    formEmail: 'Е-маил',
    formMessage: 'Порука',
    formSend: 'Пошаљи',
    formSuccess: 'Хвала. Ваша порука је послата.',
    formError: 'Дошло је до грешке при слању.',
    impressumTitle: 'Правна напомена',
    impressumContent: `Информације у складу са законским захтевима

Адвокатска канцеларија
Kompetenzstraße 1
1010 Беч, Аустрија

Контакт: bettermailpetar@hotmail.com / +43 1 234 56 789

Стручна титула: Адвокат
Адвокатска комора: Бечка адвокатска комора (Rechtsanwaltskammer Wien)

ЕУ решавање спорова: https://consumer-redress.ec.europa.eu/
Информације за потрошаче: https://www.wko.at/vertragsrecht/alternative-streitbeilegung-verbraucherangelegenheiten

Одговоран за садржај: Адвокатска канцеларија`,
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
