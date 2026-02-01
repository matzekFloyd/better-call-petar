import Image from 'next/image';
import { getTranslations, isValidLanguage } from 'data/translations';

export default async function LawyerPage({ params }) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) return null;
  const t = getTranslations(lang);

  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      {/* Hero: Foto + Überschrift */}
      <section className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-12">
        <div className="flex-shrink-0 w-full sm:w-72 aspect-[3/4] relative rounded-lg overflow-hidden bg-neutral-200 ring-2 ring-pink-200/60 shadow-lg">
          <Image
            src="/images/anwalt-placeholder.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 288px"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 min-w-0">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">{t.heading}</h1>
          <p className="text-neutral-600 whitespace-pre-line text-lg leading-relaxed">{t.intro}</p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="rounded-lg bg-white/80 border border-pink-200/60 shadow-sm backdrop-blur-sm p-6 sm:p-8">
        <h2 className="text-xl font-bold mb-6 text-neutral-900">{t.contactTitle}</h2>
        <ul className="flex flex-col gap-4 text-neutral-700">
          <li>
            <span className="text-neutral-500 block text-sm">{t.phone}</span>
            <a href="tel:+43123456789" className="hover:text-primary transition">+43 1 234 56 789</a>
          </li>
          <li>
            <span className="text-neutral-500 block text-sm">{t.email}</span>
            <a href="mailto:bettermailpetar@hotmail.com" className="hover:text-primary transition">
              bettermailpetar@hotmail.com
            </a>
          </li>
          <li>
            <span className="text-neutral-500 block text-sm">{t.address}</span>
            <span>Kompetenzstraße 1, 1010 Wien</span>
          </li>
          <li>
            <span className="text-neutral-500 block text-sm">{t.officeHours}</span>
            <span>{t.officeHoursValue}</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
