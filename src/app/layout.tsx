// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import ClientLayout from './client-layout'; // Make sure this path is correct

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Lumi Aquarium',
  description: 'Explore the vibrant life at Lumi Aquarium',
};

// This is the one and only RootLayout.
// It MUST contain <html> and <body>.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} bg-white dark:bg-dark-bg text-gray-800 dark:text-dark-text transition-colors duration-300`}>
        {/* ClientLayout lives INSIDE the body and provides the shared UI */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}