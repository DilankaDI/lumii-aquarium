// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import { PageTransitionWrapper } from '@/components/PageTransitionWrapper';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
    title: 'Lumi Aquarium',
    description: 'Explore the vibrant life at Lumi Aquarium',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${poppins.className} bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <Header />
                    <main>
                        <PageTransitionWrapper>{children}</PageTransitionWrapper>
                    </main>
                    {/* You can add a Footer component here later */}
                </ThemeProvider>
            </body>
        </html>
    );
}