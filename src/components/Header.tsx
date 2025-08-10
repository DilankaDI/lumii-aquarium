// src/components/Header.tsx

// 1. Make this a Client Component to use hooks
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';

const Header = () => {
  // 2. State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Effect to add and remove a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Set state to true if scrolled more than 10px, false otherwise
      setIsScrolled(window.scrollY > 10);
    };

    // Add listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Cleanup: remove listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // 4. Conditionally apply classes for the background and shadow
    <header
      className={`
        fixed top-0 left-0 w-full text-white py-4 px-8 z-50 
        transition-all duration-300
        ${isScrolled ? 'bg-[#0D1B2A] shadow-md' : 'bg-transparent shadow-none'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Lumii Aquarium
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-teal-300">Home</Link>
          <Link href="/about" className="hover:text-teal-300">About Us</Link>
          <Link href="/farm" className="hover:text-teal-300">Aquarium</Link>
          {/* <Link href="#" className="hover:text-teal-300">Features</Link> */}
          <Link href="/products" className="hover:text-teal-300">Gallery</Link>
          {/* <Link href="#" className="hover:text-teal-300">Blog</Link> */}
          <Link href="/contact" className="hover:text-teal-300">Contact</Link>
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-2">
          <Phone size={20} className="text-teal-300" />
          <span>(800) 123 4567</span>
        </div>
      </div>
    </header>
  );
};

export default Header;