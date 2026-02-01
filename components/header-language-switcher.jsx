'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { languages, supportedLanguages } from 'data/translations';

const FLAG_CDN = 'https://flagcdn.com';

export function HeaderLanguageSwitcher() {
  const pathname = usePathname() ?? '';
  const segments = pathname.split('/').filter(Boolean);
  const currentLang = segments[0] && supportedLanguages.includes(segments[0]) ? segments[0] : 'de';
  const restPath = segments.slice(1).join('/');

  return (
    <ul className="flex items-center gap-1" aria-label="Sprache wählen">
      {languages.map(({ code, label, flagId }) => {
        const href = restPath ? `/${code}/${restPath}` : `/${code}`;
        const isActive = code === currentLang;
        const flagSrc = `${FLAG_CDN}/w40/${flagId}.png`;
        return (
          <li key={code}>
            <Link
              href={href}
              title={label}
              className={`inline-flex items-center justify-center w-11 h-11 sm:w-9 sm:h-9 rounded overflow-hidden transition ring-2 ${
                isActive ? 'ring-2 ring-pink-500 ring-offset-2 ring-offset-white' : 'ring-2 ring-transparent'
              }`}
            >
              <Image
                src={flagSrc}
                alt=""
                width={44}
                height={44}
                className="w-full h-full object-cover"
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
