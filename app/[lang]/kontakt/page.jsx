import { getTranslations, isValidLanguage } from 'data/translations';
import { ContactForm } from 'components/contact-form';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'sr' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  const t = getTranslations(lang);
  return { title: `${t.contactPageTitle} | ${t.metaTitle}` };
}

export default async function KontaktPage({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return null;
  const t = getTranslations(lang);

  return (
    <div className="flex flex-col gap-10 max-w-xl">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
        {t.contactPageTitle}
      </h1>
      <ContactForm
        labels={{ name: t.formName, email: t.formEmail, message: t.formMessage, send: t.formSend }}
        messages={{ success: t.formSuccess, error: t.formError }}
      />
    </div>
  );
}
