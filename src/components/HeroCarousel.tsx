// src/components/HeroCarousel.tsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'; // <-- 1. Import the plugin
import Link from 'next/link';

const slides = [
  {
    title: "Vibrant & Healthy Species",
    subtitle: "Ethically raised and carefully selected for your aquarium.",
    image: "/images/aquarium-banner.jpg",
    link: "/products",
  },
  {
    title: "State-of-the-Art Facilities",
    subtitle: "Discover our commitment to quality at our farm.",
    image: "/images/farm-photo.jpg",
    link: "/farm",
  },
  {
    title: "The Brilliant Blue Tang",
    subtitle: "A stunning centerpiece for any marine setup.",
    image: "/images/blue-tang.jpeg",
    link: "/species/blue-tang",
  },
];

export const HeroCarousel = () => {
  // 2. Add the Autoplay plugin to the hook's options
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [
      Autoplay({
        delay: 5000, // 5 seconds between slides
        stopOnInteraction: false, // Continue playing even after user interaction
        stopOnMouseEnter: true, // Pause when the user hovers over the carousel
      })
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div className="relative min-h-[70vh] flex-[0_0_100%] flex items-center justify-center text-center p-4" key={index}>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="relative text-white z-10">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">{slide.title}</h1>
              <p className="text-xl mt-4 font-light">{slide.subtitle}</p>
              <Link href={slide.link} className="mt-8 inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};