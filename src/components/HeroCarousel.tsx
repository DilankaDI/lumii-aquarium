// 'use client';

// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import Image from 'next/image'; // <-- 3. Using Next.js Image component again

// // Using your provided slide data
// const slides = [
//   {
//     title: "Vibrant & Healthy Species",
//     subtitle: "Ethically raised and carefully selected for your aquarium.",
//     backgroundText: "FISH", // Renamed for clarity
//     image: "/images/aquarium-banner.jpg",
//     link: "/shop",
//     buttonText: "Shop by Category",
//   },
//   {
//     title: "Our Commitment to Quality",
//     subtitle: "State-of-the-art facilities ensure the best for our aquatic life.",
//     backgroundText: "FARM",
//     image: "/images/farm-photo.jpg",
//     link: "/farm",
//     buttonText: "Learn More",
//   },
// ];

// export const HeroCarousel = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );

//   return (
//     // The main relative container for positioning the overlay
//     <div className="relative">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex">
//           {slides.map((slide, index) => (
//             <div className="min-h-[70vh] flex-[0_0_100%] flex items-center" key={index}>
//               <div className="relative flex w-full max-w-7xl mx-auto items-center justify-between px-4 md:px-8">
                
//                 {/* Left Content Section */}
//                 <div className="flex flex-col items-start text-gray-900 dark:text-white z-10 w-full md:w-1/2">
//                   <p className="text-lg md:text-xl font-light text-primary">{slide.title}</p>
//                   <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2">
//                     {slide.subtitle}
//                   </h1>
                  
//                   {/* The giant background text with adaptive colors */}
//                   <p className="text-8xl md:text-[10rem] font-black text-gray-200 dark:text-gray-800 opacity-80 absolute left-0 bottom-1/2 translate-y-1/2 tracking-widest pointer-events-none -z-10 hidden md:block">
//                     {slide.backgroundText}
//                   </p>
                  
//                   {/* 2. Using your brand's primary color for the button */}
//                   <Link 
//                     href={slide.link} 
//                     className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                 </div>

//                 {/* Right Image Section (hidden on mobile) */}
//                 <div className="hidden md:flex w-1/2 justify-center items-center relative h-96">
//                   <Image
//                     src={slide.image} 
//                     alt={`${slide.title} ${slide.subtitle}`} 
//                     fill
//                     style={{ objectFit: 'contain' }}
//                     className="drop-shadow-2xl"
//                   />
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 1. The Gradient Fade Overlay - MOVED OUTSIDE the .map() loop */}
//       {/* This is the single, static overlay for the whole carousel */}
//       <div className="
//         absolute inset-y-0 left-0 w-1/3 h-full
//         bg-gradient-to-r from-white dark:from-dark-bg to-transparent
//         pointer-events-none"
//       ></div>
//     </div>
//   );
// };
// src/components/HeroCarousel.tsx
// src/components/HeroCarousel.tsx
// src/components/HeroCarousel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    title: "Vibrant & Healthy",
    subtitle: "Clownfish",
    image: "/images/aquarium-banner.jpg",
    link: "/products",
    buttonText: "View Details"
  },
  {
    title: "Stunning Centerpiece",
    subtitle: "Blue Tang",
    image: "/images/aquarium-banner2.png",
    link: "/products",
    buttonText: "View Details"
  },
  {
    title: "Our Commitment to",
    subtitle: "Quality",
    image: "/images/aquarium-banner.jpg",
    link: "/products",
    buttonText: "Learn More"
  },
];

export const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

return (
    // Outer wrapper for padding, giving space around the panel
    <div className="p-4 md:p-8">
      {/* 
        LAYER 1: THE PANEL
        This is the main container. It's relative so we can position children inside it.
        It has rounded corners and overflow-hidden to act as a "mask".
      */}
      <div className="relative overflow-hidden rounded-3xl">

        {/* 
          LAYER 2: THE GRADIENT BACKGROUND
          This div is positioned absolutely to fill the entire panel. 
          It sits at the very back (default z-index).
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-bg via-neutral-100 dark:via-dark-surface to-neutral-100 dark:to-dark-surface"></div>

        {/* 
          LAYER 3: THE CONTENT
          This is your carousel. It is placed on top of the gradient background.
          The `ref` goes here. Its own background is transparent.
        */}
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div className="min-h-[70vh] flex-[0_0_100%] flex items-center" key={index}>
                <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-12">
                  
                  {/* Left Content Section - The text is now guaranteed to be on top */}
                  <div className="flex flex-col items-start w-full md:w-1/2">
                    <p className="text-lg font-light text-primary">{slide.title}</p>
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2 
                                 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900
                                 dark:from-white dark:via-gray-400 dark:to-white 
                                 bg-clip-text text-transparent"
                    >
                      {slide.subtitle}
                    </h1>
                    <Link 
                      href={slide.link} 
                      className="mt-8 inline-block bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-opacity"
                    >
                      {slide.buttonText}
                    </Link>
                  </div>

                  {/* Right Image Section */}
                  <div className="hidden md:flex w-1/2 justify-center items-center relative h-96">
                    <Image
                      src={slide.image} 
                      alt={slide.subtitle} 
                      fill
                      style={{ objectFit: 'contain' }}
                      className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};