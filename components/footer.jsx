import Link from 'next/link';

export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <p className="text-sm text-neutral-500">
                ©{' '}
                <Link
                    href="https://www.bearwithme.at/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 underline underline-offset-2 hover:text-pink-700"
                >
                    Mr.Magic
                </Link>
            </p>
        </footer>
    );
}
