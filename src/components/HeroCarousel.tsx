// 'use client';

// import React from 'react';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';
// import Link from 'next/link';
// import Image from 'next/image'; // <-- 1. Import the correct component

// // Your slide data remains the same
// const slides = [
//   {
//     title: "Vibrant & Healthy",
//     subtitle: "Clownfish",
//     image: "/images/sample-08.jpeg",
//     link: "/species/clownfish",
//     buttonText: "View Details"
//   },
//   {
//     title: "Stunning Centerpiece",
//     subtitle: "Blue Tang",
//     image: "/images/sample-10.jpg",
//     link: "/species/blue-tang",
//     buttonText: "View Details"
//   },
//   {
//     title: "Our Commitment to",
//     subtitle: "Quality",
//     image: "/images/sample-11.jpg",
//     link: "/farm",
//     buttonText: "Learn More"
//   },
// ];

// export const HeroCarousel = () => {
//   const [emblaRef] = useEmblaCarousel(
//     { loop: true, align: 'start' },
//     [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
//   );

//   return (
//     // The main container for the panel + gradient architecture
//     <div className="relative p-4 md:p-8">
//       <div className="relative overflow-hidden rounded-3xl">
//         <div className="absolute inset-0 bg-gradient-to-r from-white dark:from-dark-bg via-neutral-100 dark:via-dark-surface to-neutral-100 dark:to-dark-surface"></div>
//         <div className="overflow-hidden relative" ref={emblaRef}>
//           <div className="flex">
//             {slides.map((slide, index) => (
//               <div className="min-h-[70vh] flex-[0_0_100%] flex items-center" key={index}>
//                 <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-6 md:px-12">
//                   <div className="flex flex-col items-start w-full md:w-1/2">
//                     <p className="text-lg font-light text-primary">{slide.title}</p>
//                     <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-2 
//                                  bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900
//                                  dark:from-white dark:via-gray-400 dark:to-white 
//                                  bg-clip-text text-transparent"
//                     >
//                       {slide.subtitle}
//                     </h1>
//                     <Link 
//                       href={slide.link} 
//                       className="mt-8 inline-block bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full transition-opacity"
//                     >
//                       {slide.buttonText}
//                     </Link>
//                   </div>
//                   <div className="hidden md:flex w-1/2 justify-center items-center relative h-96">
                    
//                     {/* 2. THIS IS THE FIX: Replaced `<img>` with `<Image />` */}
//                     <Image
//                       src={slide.image} 
//                       alt={slide.subtitle} 
//                       fill
//                       style={{ objectFit: 'contain' }}
//                       className="drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
//                     />

//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// src/components/HeroCarousel.js
// src/components/HeroCarousel.js
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

const HeroCarousel = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={1000}
        slidesPerView={1}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="h-screen">
            <Image
              src="/images/sample-8.jpeg"
              alt="Beautiful aquarium installation"
              priority
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="h-screen">
            <Image
              src="/images/sample-11.jpg"
              alt="Vibrant fish in a well-maintained aquarium"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="h-screen">
            <Image
              src="/images/sample-15.jpeg"
              alt="A clean and healthy aquarium ecosystem"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Dark overlay */}
      
    </div>
  );
};

export default HeroCarousel;
