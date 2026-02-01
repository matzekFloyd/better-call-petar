import Link from 'next/link';
import { getTranslations, isValidLanguage } from 'data/translations';

export async function generateStaticParams() {
  return [{ lang: 'de' }, { lang: 'en' }, { lang: 'sr' }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return {};
  const t = getTranslations(lang);
  return { title: `${t.impressumTitle} | ${t.metaTitle}` };
}

const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function impressumWithLinks(content) {
  const parts = content.split(URL_REGEX);
  return parts.map((part, i) =>
    part.match(URL_REGEX) ? (
      <Link
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 underline hover:text-pink-700 inline-block py-1 -my-1"
      >
        {part}
      </Link>
    ) : (
      part
    )
  );
}

export default async function ImpressumPage({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return null;
  const t = getTranslations(lang);

  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
        {t.impressumTitle}
      </h1>
      <div className="rounded-lg bg-white/80 border border-pink-200/60 shadow-sm backdrop-blur-sm p-6 sm:p-8">
        <div className="whitespace-pre-wrap font-sans text-neutral-700 text-sm leading-relaxed">
          {impressumWithLinks(t.impressumContent)}
        </div>
      </div>
    </div>
  );
}
