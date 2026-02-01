import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="overflow-x-hidden">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased text-neutral-800 bg-noise overflow-x-hidden">
                <div className="flex flex-col min-h-screen w-full min-w-0 px-4 sm:px-6 md:px-12">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow min-w-0 w-full">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
