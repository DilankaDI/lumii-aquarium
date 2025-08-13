'use client';

import { ThemeProvider } from 'next-themes';
import Header from '@/components/Header'; // Adjust path if necessary
import Footer from '@/components/Footer'; // You'll need to create and import a Footer

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex flex-col min-h-screen">
        <Header />
        {/* The 'main' element receives the page content */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}