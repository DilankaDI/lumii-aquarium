'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

// Updated slides data to match the new design
const slides = [
  {
    title: "Vibrant & Healthy Species",
    subtitle: "Ethically raised and carefully selected for your aquarium.",
    description: "Fish",
    image: "/images/aquarium-banner.jpg", // Assuming you have a product image here
    link: "/shop",
    buttonText: "Shop by Category",
  },
    {
    title: "Vibrant & Healthy Species",
    subtitle: "Ethically raised and carefully selected for your aquarium.",
    description: "Fish",
    image: "/images/aquarium-banner2.png", // Assuming you have a product image here
    link: "/shop",
    buttonText: "Shop by Category",
  },
  // You can add more slides here if needed
];

export const HeroCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  return (
    <div className="overflow-hidden bg-[#0A0A10]" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div 
            className="min-h-[70vh] flex-[0_0_100%] flex items-center justify-center p-4 md:p-8" 
            key={index}
          >
            <div className="relative flex w-full max-w-7xl mx-auto items-center justify-between">
              {/* Left Content Section */}
              <div className="flex flex-col items-start text-white p-4 z-10 w-full md:w-1/2">
                <p className="text-lg md:text-xl font-light">{slide.title}</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2">
                  {slide.subtitle}
                </h1>
                {/* The "HEADPHONES" text is a background element in the sample */}
                <p className="text-8xl md:text-[10rem] font-black text-gray-800 opacity-5 absolute left-0 bottom-1/2 translate-y-1/2 tracking-widest pointer-events-none -z-10 hidden md:block">
                  {slide.description}
                </p>
                <Link 
                  href={slide.link} 
                  className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-all"
                >
                  {slide.buttonText}
                </Link>
              </div>

              {/* Right Image Section */}
              <div className="hidden md:flex w-1/2 justify-center items-center p-4">
                <img 
                  src={slide.image} 
                  alt={`${slide.title} ${slide.subtitle}`} 
                  className="max-h-[70vh] object-contain" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};





// // src/components/HeroCarousel.tsx
// 'use client';

// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay'; // <-- 1. Import the plugin
// import Link from 'next/link';

// const slides = [
//   {
//     title: "Vibrant & Healthy Species",
//     subtitle: "Ethically raised and carefully selected for your aquarium.",
//     image: "/images/aquarium-banner.jpg",
//     link: "/products",
//   },
//   {
//     title: "State-of-the-Art Facilities",
//     subtitle: "Discover our commitment to quality at our farm.",
//     image: "/images/farm-photo.jpg",
//     link: "/farm",
//   },
//   {
//     title: "The Brilliant Blue Tang",
//     subtitle: "A stunning centerpiece for any marine setup.",
//     image: "/images/blue-tang.jpeg",
//     link: "/species/blue-tang",
//   },
// ];

// export const HeroCarousel = () => {
//   // 2. Add the Autoplay plugin to the hook's options
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [
//       Autoplay({
//         delay: 5000, // 5 seconds between slides
//         stopOnInteraction: false, // Continue playing even after user interaction
//         stopOnMouseEnter: true, // Pause when the user hovers over the carousel
//       })
//     ]
//   );

//   return (
//     <div className="overflow-hidden" ref={emblaRef}>
//       <div className="flex">
//         {slides.map((slide, index) => (
//           <div className="relative min-h-[70vh] flex-[0_0_100%] flex items-center justify-center text-center p-4" key={index}>
//             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
//               <div className="absolute inset-0 bg-black/60"></div>
//             </div>
//             <div className="relative text-white z-10">
//               <h1 className="text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
//               <p className="text-xl mt-4 font-light">{slide.subtitle}</p>
//               <Link href={slide.link} className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all">
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };