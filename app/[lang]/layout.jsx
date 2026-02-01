import { notFound } from 'next/navigation';
import { isValidLanguage, getTranslations } from 'data/translations';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'sr' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return { title: 'Rechtsanwalt' };
  const t = getTranslations(lang);
  return { title: t.metaTitle };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) notFound();
  return children;
}
