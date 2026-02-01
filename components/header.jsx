import Image from 'next/image';
import Link from 'next/link';
import githubLogo from 'public/images/github-mark-white.svg';
import { HeaderNav } from './header-nav';
import { HeaderLanguageSwitcher } from './header-language-switcher';

export function Header() {
    return (
        <nav className="flex flex-col gap-4 pt-4 pb-8 sm:pt-6 sm:pb-12 md:flex-row md:flex-wrap md:items-center md:gap-4 md:pt-12 md:pb-24">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 min-w-0">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 min-h-[44px] py-1 shrink-0">
                    <Image
                        src="/images/sekretaerin.jpeg"
                        alt=""
                        width={48}
                        height={48}
                        className="rounded-lg object-cover shrink-0"
                    />
                    <span className="font-medium">Home</span>
                </Link>
                <HeaderNav />
            </div>
            <div className="flex items-center gap-3 md:ml-auto w-fit shrink-0">
                <HeaderLanguageSwitcher />
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-w-0 sm:min-h-0"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div>
        </nav>
    );
}
