// 'use client';

// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import Image from 'next/image';

// const slides = [
//   {
//     title: "Vibrant & Healthy",
//     subtitle: "Clownfish",
//     image: "/images/aquarium-banner.jpg",
//     link: "/products",
//     buttonText: "View Details"
//   },
//   {
//     title: "Stunning Centerpiece",
//     subtitle: "Blue Tang",
//     image: "/images/aquarium-banner2.png",
//     link: "/products",
//     buttonText: "View Details"
//   },
//   {
//     title: "Our Commitment to",
//     subtitle: "Quality",
//     image: "/images/aquarium-banner.jpg",
//     link: "/products",
//     buttonText: "Learn More"
//   },
// ];

// export const HeroCarousel = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );

//   return (
//     <div className="p-4 md:p-8">
//       <div className="relative overflow-hidden rounded-3xl">

//         {/* 
//           MAIN GRADIENT BACKGROUND
//           This is now visible on ALL screen sizes by removing `hidden md:block`.
//           On mobile, it will be the background for the text area.
//           On desktop, it remains the background for the whole component.
//         */}
//         <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-bg via-neutral-100 dark:via-dark-surface to-neutral-100 dark:to-dark-surface"></div>

//         <div className="overflow-hidden relative" ref={emblaRef}>
//           <div className="flex">
//             {slides.map((slide, index) => (
//               // --- SLIDE CONTAINER ---
//               <div
//                 key={index}
//                 className="
//                   flex-[0_0_100%]
//                   flex flex-col                   // MOBILE: Use flex-col to stack image and text vertically.
//                   h-[500px]                         // MOBILE: A fixed, reasonable height for the slide.
//                   md:flex-row md:items-center     // DESKTOP: Revert to your original side-by-side flex layout.
//                   md:min-h-[70vh]                   // DESKTOP: Revert to your original height.
//                 "
//               >
                
//                 {/* --- IMAGE SECTION (TOP) --- */}
//                 <div className="
//                   relative w-full h-[55%]           // MOBILE: Takes up the top 55% of the slide's height.
//                   md:w-1/2 md:h-96                  // DESKTOP: Reverts to your original half-width and fixed height.
//                 ">
//                   <Image
//                     src={slide.image}
//                     alt={slide.subtitle}
//                     fill
//                     className="
//                       object-cover                    // MOBILE: Image covers its container.
//                       md:object-contain               // DESKTOP: Reverts to your 'contain' style.
//                       md:drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)] // DESKTOP: Your original shadow.
//                     "
//                   />
//                 </div>

//                 {/* --- CONTENT SECTION (BOTTOM) --- */}
//                 <div className="
//                   w-full h-[45%]                      // MOBILE: Takes up the bottom 45% of the slide's height.
//                   flex flex-col items-center justify-center text-center p-4 // MOBILE: Centers the content.
//                   md:w-1/2 md:h-auto                  // DESKTOP: Reverts to half width and automatic height.
//                   md:bg-transparent md:items-start md:text-left md:p-12 // DESKTOP: Reverts to all original styles.
//                 ">
                  
//                   {/* Title: On mobile, this text will now sit on top of the main gradient. */}
//                   <p className="text-lg font-light text-primary">
//                     {slide.title}
//                   </p>
                  
//                   {/* Subtitle */}
//                   <h1 className="
//                     text-5xl md:text-7xl font-bold leading-tight mt-2 
//                     bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900
//                     dark:from-white dark:via-gray-400 dark:to-white 
//                     bg-clip-text text-transparent
//                   ">
//                     {slide.subtitle}
//                   </h1>

//                   {/* Button */}
//                   <Link
//                     href={slide.link}
//                     className="mt-8 inline-block bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-opacity"
//                   >
//                     {slide.buttonText}
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// src/components/HeroCarousel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image'; // <-- 1. Import the correct component

// Your slide data remains the same
const slides = [
  {
    title: "Vibrant & Healthy",
    subtitle: "Clownfish",
    image: "/images/sample-08.jpeg",
    link: "/species/clownfish",
    buttonText: "View Details"
  },
  {
    title: "Stunning Centerpiece",
    subtitle: "Blue Tang",
    image: "/images/sample-10.jpg",
    link: "/species/blue-tang",
    buttonText: "View Details"
  },
  {
    title: "Our Commitment to",
    subtitle: "Quality",
    image: "/images/sample-11.jpg",
    link: "/farm",
    buttonText: "Learn More"
  },
];

export const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    // The main container for the panel + gradient architecture
    <div className="relative p-4 md:p-8">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-bg via-neutral-100 dark:via-dark-surface to-neutral-100 dark:to-dark-surface"></div>
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <div className="min-h-[70vh] flex-[0_0_100%] flex items-center" key={index}>
                <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-12">
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
                  <div className="hidden md:flex w-1/2 justify-center items-center relative h-96">
                    
                    {/* 2. THIS IS THE FIX: Replaced `<img>` with `<Image />` */}
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