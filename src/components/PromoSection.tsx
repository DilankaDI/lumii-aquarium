// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const PromoSection = () => {
//   // 1. A ref to track the main container for scroll animations.
//   const sectionRef = useRef<HTMLDivElement>(null);

//   // 2. We track scroll progress as the section enters the viewport.
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   // 3. We create smooth animations based on scroll progress.
//   // 3. Animations for the FISH IMAGE:
//   // It scales from very small (30%) to full size (100%).
//   const imageScale = useTransform(scrollYProgress, [0.1, 0.7], [0.4, 1]);
//   // It fades in from transparent to fully visible.
//   const imageOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.4, 1]);
//   // A subtle parallax motion for a 3D effect.
//   const imageY = useTransform(scrollYProgress, [0.1, 0.7], ['30px', '0px']);

//   // 4. Animations for the TEXT CONTENT CARD:
//   // It scales up slightly from normal size for a subtle zoom effect.
//   const cardScale = useTransform(scrollYProgress, [0.4, 0.9], [1, 1.05]);
//   // It fades in, starting slightly after the fish, to create a layered reveal.
//   const cardOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.4, 1]);

//  return (
//     // Main section wrapper with background and spacing.
//     //<div ref={sectionRef} className="bg-white dark:bg-gray-900 py-24 sm:py-32 px-4 overflow-hidden">
//       <div ref={sectionRef} className="bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-hidden">
      
//       {/* 
//         This relative container is the positioning context for the layered elements.
//         It no longer has animations itself; they are now on the children.
//       */}
//       <div className="relative max-w-8xl mx-auto aspect-[16/9]">
        
//         {/* THE CONTENT CARD (BOTTOM LAYER) with its own animations */}
//         <motion.div
//           style={{
//             scale: cardScale,
//             opacity: cardOpacity,
//           }}
//           className="absolute top-[10%] left-0 w-full h-auto"
//         >
//           <div className="bg-dark-mode-surface dark:bg-gray-800 rounded-3xl shadow-2xl">
//             <div className="flex justify-between items-center p-8 pt-24 md:p-12 md:pt-28">
            
//               {/* Left-side Text */}
//               <div className="flex-1 text-left">
//                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
//                   Discover
//                   <br />
//                   Timeless
//                   <br />
//                   Elegance
//                 </h2>
//               </div>
            
//               {/* Right-side Text and Button */}
//               <div className="flex-1 text-right flex flex-col items-end space-y-6">
//                 <p className="max-w-xs text-base lg:text-lg text-gray-300 dark:text-dark-mode-muted-text">
//                   A symbol of luck and tranquility, perfect for any aquarist.
//                 </p>
//                 <Link 
//                   href="/products" 
//                   className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* 
//           6. THE FISH IMAGE (TOP LAYER):
//           - Also positioned 'absolutely'.
//           - `z-10` places it ON TOP of the content card.
//           - It's aligned to the TOP of the parent container and centered horizontally.
//           - This layering is what makes the fish appear in front.
//         */}
//                 {/* THE FISH IMAGE (TOP LAYER) with its own animations */}
//         <motion.div
//           style={{
//             scale: imageScale,
//             opacity: imageOpacity,
//             y: imageY,
//           }}
//           className="absolute left-60 -translate-x-1/2 w-2/3 md:w-[50%] h-[80%] z-10"
//         >
//          <div className="relative w-full h-full filter drop-shadow-2xl">
//             <Image
//               src="/images/aquarium-banner2.png" // Your colorful fish PNG
//               alt="A vibrant, colorful fish centered on the page"
//               fill
//               style={{ objectFit: 'contain' }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };






// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const PromoSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   // Animations for the IMAGE
//   const imageScale = useTransform(scrollYProgress, [0.1, 0.7], [0.4, 1]);
//   const imageOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0.4, 1]);
//   const imageY = useTransform(scrollYProgress, [0.1, 0.7], ['30px', '0px']);

//   // Animations for the CARD
//   const cardScale = useTransform(scrollYProgress, [0.4, 0.9], [0.9, 1]);
//   const cardOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.4, 1]);

//   return (
//     <div ref={sectionRef} className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-hidden">
      
//       {/* 
//         --- NEW MOBILE LAYOUT ---
//         This layout is visible ONLY on mobile screens (`block md:hidden`).
//         It uses the same animations but arranges content vertically in a single card.
//       */}
//       <motion.div
//         style={{ scale: cardScale, opacity: cardOpacity }}
//         className="block md:hidden dark:bg-gray-900 text-white rounded-3xl shadow-2xl p-8"
//       >
//         <div className="flex flex-col text-left space-y-4">
//           {/* Top Text Section */}
//           <div>
//             <p className="text-sm font-semibold">30% OFF</p>
//             <h2 className="text-4xl font-extrabold tracking-tight">FINE SMILE</h2>
//             <p className="text-sm">10 Jan to 28 Jan</p>
//           </div>

//           {/* Image Section - The image is now contained within the card flow. */}
//           <motion.div
//             style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
//             className="relative w-full h-64 my-4" // Added margin for spacing
//           >
//             <Image
//               src="/images/aquarium-banner2.png" // Using your fish image here
//               alt="Promotional product image"
//               fill
//               style={{ objectFit: 'contain' }}
//               sizes="(max-width: 768px) 90vw, 0vw"
//               className="filter drop-shadow-xl"
//             />
//           </motion.div>

//           {/* Bottom Text Section */}
//           <div>
//             <p className="font-semibold">Air Solo Bass</p>
//             <h3 className="text-4xl font-extrabold">Winter Sale</h3>
//             <p className="mt-4 text-sm max-w-xs">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis.
//             </p>
//             <Link 
//               href="/products" 
//               className="mt-6 inline-block bg-white dark:bg-gray-900 font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider"
//             >
//               Shop Now
//             </Link>
//           </div>
//         </div>
//       </motion.div>

//       {/* 
//         --- ORIGINAL DESKTOP LAYOUT ---
//         This layout is hidden on mobile (`hidden`) and becomes visible on medium screens and up (`md:relative`).
//         This preserves your original code perfectly for desktop users.
//       */}
//       <div className="hidden md:relative w-full max-w-8xl mx-auto aspect-[16/9]">

//         <motion.div
//           style={{ scale: cardScale, opacity: cardOpacity }}
//           className="absolute top-[10%] left-0 w-full h-auto"
//         >
//           <div className="bg-dark-mode-surface dark:bg-gray-800 rounded-3xl shadow-2xl">
//             <div className="flex justify-between items-center p-8 pt-24 md:p-12 md:pt-28">
//               <div className="flex-1 text-left">
//                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
//                   Discover<br />Timeless<br />Elegance
//                 </h2>
//               </div>
//               <div className="flex-1 text-right flex flex-col items-end space-y-6">
//                 <p className="max-w-xs text-base lg:text-lg text-gray-300 dark:text-dark-mode-muted-text">
//                   A symbol of luck and tranquility, perfect for any aquarist.
//                 </p>
//                 <Link 
//                   href="/products" 
//                   className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity"
//                 >
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </motion.div>
        
//         <motion.div
//           style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
//           className="absolute left-1/2 -translate-x-1/2 w-2/3 md:w-[50%] h-[80%] z-10"
//         >
//          <div className="relative w-full h-full filter drop-shadow-2xl">
//             <Image
//               src="/images/aquarium-banner2.png"
//               alt="A vibrant, colorful fish centered on the page"
//               fill
//               style={{ objectFit: 'contain' }}
//               sizes="(min-width: 769px) 50vw, 0vw" 
//             />
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PromoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'], // animation finishes when section is in middle
  });

  // Fish image animation — stops scaling early so it stays stable
  const imageScale = useTransform(scrollYProgress, [0.1, 0.4], [0.6, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], ['40px', '0px']);

  // Text fade/scale in
  const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-visible"
    >
      <motion.div
        style={{ opacity: textOpacity }}
        className="bg-dark-mode-surface dark:bg-gray-800 text-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-visible"
      >
        {/* Left text */}
        <motion.div
          style={{ scale: textScale }}
          className="flex-1 text-left space-y-2 z-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Discover<br />Timeless<br />Elegance
          </h2>
        </motion.div>

        {/* Middle fish image with fins sticking out */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
          className="relative w-full md:w-1/3 h-64 md:h-96 z-20"
        >
          <Image
            src="/images/aquarium-banner2.png"
            alt="Promotional fish"
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 768px) 90vw, (min-width: 769px) 33vw"
            className="drop-shadow-xl pointer-events-none select-none"
          />
        </motion.div>

        {/* Right text */}
        <motion.div
          style={{ scale: textScale }}
          className="flex-1 flex flex-col text-right space-y-4 z-10"
        >
          <p className="max-w-xs ml-auto text-base lg:text-lg text-gray-300">
            A symbol of luck and tranquility, perfect for any aquarist.
          </p>
          <Link
            href="/products"
            className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity text-center"

          >
            View Details
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
