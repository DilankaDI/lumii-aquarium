// src/components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
<header className="sticky top-0 z-50 bg-white dark:bg-dark-bg border-b border-neutral-200 dark:border-gray-800">
<nav className="container mx-auto px-4 py-4 flex justify-between items-center">
<Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white hover:text-primary transition-colors">          Lumi Aquarium
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Home</Link>
          <Link href="/products" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Products</Link>
          <Link href="/farm" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">Our Farm</Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium">About</Link>
          <Link href="/contact" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition">Contact</Link>
          <ThemeToggle />
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-800 dark:text-gray-300 focus:outline-none" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-1 bg-white dark:bg-gray-900 border-t border-neutral-200 dark:border-gray-800">
          <Link href="/" onClick={handleLinkClick} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-3 px-2 rounded-md">Home</Link>
          <Link href="/products" onClick={handleLinkClick} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-3 px-2 rounded-md">Products</Link>
          <Link href="/farm" onClick={handleLinkClick} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-3 px-2 rounded-md">Our Farm</Link>
          <Link href="/about" onClick={handleLinkClick} className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 font-medium py-3 px-2 rounded-md">About</Link>
          <Link href="/contact" onClick={handleLinkClick} className="block mt-2 bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg hover:bg-blue-700 transition text-center">Contact</Link>
        </div>
      )}
    </header>
  );
};
export default Header;