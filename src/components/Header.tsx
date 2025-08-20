// src/components/Header.tsx

// 1. Make this a Client Component to use hooks
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Header = () => {
  // 2. State to track if the page has been scrolled
  const [isScrolled, setIsScrolled] = useState(false);
  // 3. State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Get the current pathname
  const pathname = usePathname();

  // 4. Effect to handle the scroll event
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

  // 5. Effect to lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About Us' },
    { href: '/farm', text: 'Our Farms' },
    { href: '/products', text: 'Our Collection' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <>
      {/* 6. Conditionally apply classes for the background and shadow */}
      <header
        className={`
          fixed top-0 left-0 w-full text-white font-serif py-4 px-8 z-50 
          transition-all duration-300
          ${isScrolled ? 'bg-[#0D1B2A] shadow-lg' : 'bg-[#0D1B2A]/30 shadow-none'}
        `}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="Lumii Aquarium Logo"
              width={30} // Adjust width as needed
              height={8}  // Adjust height as needed
              className="object-contain" // Ensures image scales without distortion
              priority // Prioritize loading the logo as it's likely LCP
            />
            {/* <span>Lumii aquarium</span> */}
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${
                    isActive ? 'text-teal-300' : 'hover:text-teal-300'
                  }`}
                >
                  {link.text}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden md:flex items-center space-x-2">
            <Mail size={20} className="text-teal-300" />
            <span>lumii.go2@gmail.com</span>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>
      
      {/* 7. Mobile Navigation Menu Overlay */}
      <div
        className={`
          fixed top-0 left-0 w-full h-full bg-[#0D1B2A] text-white font-serif z-40
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}
          md:hidden
        `}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full space-y-8">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl hover:text-teal-300 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Close menu on link click
              >
                {link.text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-2 text-lg">
            <Mail size={24} className="text-teal-300" />
            <span>lumii.go2@gmail.com</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;