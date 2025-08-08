'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const PromoSection = () => {
  // 1. A ref to track the main container for scroll animations.
  const sectionRef = useRef<HTMLDivElement>(null);

  // 2. We track scroll progress as the section enters the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // 3. We create smooth animations based on scroll progress.
  // 3. Animations for the FISH IMAGE:
  // It scales from very small (30%) to full size (100%).
  const imageScale = useTransform(scrollYProgress, [0.1, 0.7], [0.3, 1]);
  // It fades in from transparent to fully visible.
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  // A subtle parallax motion for a 3D effect.
  const imageY = useTransform(scrollYProgress, [0.1, 0.7], ['50px', '0px']);

  // 4. Animations for the TEXT CONTENT CARD:
  // It scales up slightly from normal size for a subtle zoom effect.
  const cardScale = useTransform(scrollYProgress, [0.4, 0.9], [1, 1.05]);
  // It fades in, starting slightly after the fish, to create a layered reveal.
  const cardOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0, 1]);

 return (
    // Main section wrapper with background and spacing.
    //<div ref={sectionRef} className="bg-white dark:bg-gray-900 py-24 sm:py-32 px-4 overflow-hidden">
      <div ref={sectionRef} className="bg-white dark:bg-gray-900 py-6 sm:py-16 px-4 overflow-hidden">
      
      {/* 
        This relative container is the positioning context for the layered elements.
        It no longer has animations itself; they are now on the children.
      */}
      <div className="relative max-w-8xl mx-auto aspect-[16/9]">
        
        {/* THE CONTENT CARD (BOTTOM LAYER) with its own animations */}
        <motion.div
          style={{
            scale: cardScale,
            opacity: cardOpacity,
          }}
          className="absolute top-[10%] left-0 w-full h-auto"
        >
          <div className="bg-dark-mode-surface dark:bg-gray-800 rounded-3xl shadow-2xl">
            <div className="flex justify-between items-center p-8 pt-24 md:p-12 md:pt-28">
            
              {/* Left-side Text */}
              <div className="flex-1 text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Discover
                  <br />
                  Timeless
                  <br />
                  Elegance
                </h2>
              </div>
            
              {/* Right-side Text and Button */}
              <div className="flex-1 text-right flex flex-col items-end space-y-6">
                <p className="max-w-xs text-base lg:text-lg text-gray-300 dark:text-dark-mode-muted-text">
                  A symbol of luck and tranquility, perfect for any aquarist.
                </p>
                <Link 
                  href="/products" 
                  className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 
          6. THE FISH IMAGE (TOP LAYER):
          - Also positioned 'absolutely'.
          - `z-10` places it ON TOP of the content card.
          - It's aligned to the TOP of the parent container and centered horizontally.
          - This layering is what makes the fish appear in front.
        */}
                {/* THE FISH IMAGE (TOP LAYER) with its own animations */}
        <motion.div
          style={{
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY,
          }}
          className="absolute left-60 -translate-x-1/2 w-2/3 md:w-[55%] h-[90%] z-10"
        >
         <div className="relative w-full h-full filter drop-shadow-2xl">
            <Image
              src="/images/aquarium-banner2.png" // Your colorful fish PNG
              alt="A vibrant, colorful fish centered on the page"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};