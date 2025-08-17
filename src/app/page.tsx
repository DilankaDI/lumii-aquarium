// "use client";

// import { useState, useEffect } from 'react';
// import { Phone, Search, Menu, X } from 'lucide-react';

// // Header Component
// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ["Home","About Us", "Aquarium", "Features", "Gallery", "Blog", "Contact"];

//   return (
//     <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#0a1929]' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         {/* <div className="flex items-center space-x-2">
//           <Seahorse className="h-8 w-8 text-cyan-400" />
//           <span className="text-white text-2xl font-bold">AQUAPRO</span>
//         </div> */}

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center">
//           <ul className="flex items-center space-x-8">
//             {/* Home Dropdown */}
            
            
//             {/* Other Links */}
//             {navLinks.map((link) => (
//               <li key={link}>
//                 <a href="#" className="text-white hover:text-cyan-400 transition-colors">{link}</a>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right side icons - Desktop */}
//         <div className="hidden md:flex items-center space-x-6">
//           <div className="flex items-center space-x-2">
//             <Phone className="h-5 w-5 text-cyan-400" />
//             <span className="text-white">(800) 123 4567</span>
//           </div>
//           <Search className="h-6 w-6 text-white hover:text-cyan-400 cursor-pointer" />
//         </div>
        
//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
//             {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu - Simplified for brevity, can be expanded */}
//       {isMenuOpen && (
//         <div className="md:hidden bg-[#0a1929] py-4">
//           <ul className="flex flex-col items-center space-y-4">
//             <li><a href="#" className="text-cyan-400">Home</a></li>
//             {navLinks.map((link) => (
//               <li key={link}><a href="#" className="text-white hover:text-cyan-400">{link}</a></li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// // Preloader Component
// const Preloader = () => (
//   <div className="fixed inset-0 bg-[#0c0c0c] flex justify-center items-center z-[100]">
//     <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-cyan-500"></div>
//   </div>
// );

// // Main Page Component
// const HomePage = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading time like in the video
//     const timer = setTimeout(() => setLoading(false), 1500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <Preloader />}
//       <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
//         <Header />
//         <main>
//           {/* Hero Section */}
//           <section className="h-screen w-full hero-bg flex items-center">
//             <div className="container mx-auto px-6">
//               <div className="text-left text-white max-w-2xl">
//                 <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                   Aquarium Installation and Maintenance
//                 </h1>
//                 <p className="mt-4 text-xl md:text-2xl text-gray-200">
//                   Fastest and easiest way to cycle your new aquarium.
//                 </p>
//                 <a
//                   href="#"
//                   className="mt-8 inline-block bg-cyan-500 text-white font-bold py-4 px-10 rounded hover:bg-cyan-600 transition-colors duration-300"
//                 >
//                   CONTACT US TODAY!
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* You can add other sections here */}
//           <section className="py-20 bg-[#0c0c0c]">
//              <div className="container mx-auto text-center">
//                 <h2 className="text-4xl text-white">Other Content Goes Here</h2>
//              </div>
//           </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default HomePage;

"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header'; // Import the new Header component
import HeroCarousel from '@/components/HeroCarousel'; 
//import Link from "next/link";
import Image from 'next/image';


// Main Page Component
const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Header /> {/* Use the Header component here */}
        <main>
          {/* Hero Section */}
          <section className="h-screen w-full flex items-center">
            <HeroCarousel /> 
          </section>

          {/* Other Sections */}
          <section className="py-20 bg-[#0c0c0c]">
              <h2 className="text-4xl font-bold font-serif text-white mb-4 text-center">Welcome to Lumii Aquarium</h2>

                            <div className="flex flex-col px-4 sm:px-6 lg:flex-row items-center gap-12 lg:gap-24 my-24">
                              <div className="lg:w-1/2">
                                
                                <p className="text-lg text-gray-300 mb-4">
                                Where ornamental fish are naturally raised and globally delivered. 
                                Each fish begins its life in clean, naturally flowing freshwater, growing in calm, 
                                stress-free conditions that mirror its native environment. 
                                Raised without artificial interference, the fish remain peaceful, healthy, and disease-free.                                
                                </p>
                                <p className="text-lg text-gray-300">
                                Natural growth preserves their youthful energy, vibrant colors, and gentle temperament. 
                                Before export, every fish undergoes weekly health inspections and a 30-day quarantine, 
                                ensuring only the finest are prepared for international delivery.                               
                                </p>
                              </div>
                              <div className="lg:w-1/2">
                                <Image
                                  src="/images/catfish.jpg"
                                  alt="Our Story"
                                  width={600}
                                  height={400}
                                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                                />
                              </div>
                            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default HomePage;