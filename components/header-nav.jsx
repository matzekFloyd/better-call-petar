'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supportedLanguages } from 'data/translations';

export function HeaderNav() {
  const pathname = usePathname() ?? '';
  const segment = pathname.split('/')[1];
  const lang = supportedLanguages.includes(segment) ? segment : 'de';

  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-1">
      <li>
        <Link href={`/${lang}/kontakt`} className="inline-flex items-center min-h-[44px] min-w-[44px] px-3 py-2 sm:px-3 sm:py-2 -my-1 -mx-1 sm:my-0 sm:mx-0">
          Kontakt
        </Link>
      </li>
      <li>
        <Link href={`/${lang}/impressum`} className="inline-flex items-center min-h-[44px] min-w-[44px] px-3 py-2 sm:px-3 sm:py-2 -my-1 -mx-1 sm:my-0 sm:mx-0">
          Impressum
        </Link>
      </li>
    </ul>
  );
}
