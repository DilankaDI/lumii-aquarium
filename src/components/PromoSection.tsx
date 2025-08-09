// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export const PromoSection = () => {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'center center'], // animation finishes when section is in middle
//   });

//   // Fish image animation — stops scaling early so it stays stable
//   const imageScale = useTransform(scrollYProgress, [0.1, 0.4], [0.6, 1]);
//   const imageOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);
//   const imageY = useTransform(scrollYProgress, [0.1, 0.4], ['40px', '0px']);

//   // Text fade/scale in
//   const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
//   const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);

//   return (
//     <div
//       ref={sectionRef}
//       className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-visible"
//     >
//     <div
//       ref={sectionRef}
//       className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-visible"
//     >
//       <motion.div
//         style={{ opacity: textOpacity }}
//         className="bg-dark-mode-surface dark:bg-gray-800 text-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-visible"
//       >
//         {/* Left text */}
//         <motion.div
//           style={{ scale: textScale }}
//           className="flex-1 text-left space-y-2 z-10"
//         >
//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
//             Discover<br />Timeless<br />Elegance
//           </h2>
//         </motion.div>

//         {/* Middle fish image with fins sticking out */}
//         <motion.div
//           style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
//           className="relative w-full md:w-1/3 h-64 md:h-96 z-20"
//         >
//           <Image
//             src="/images/aquarium-banner2.png"
//             alt="Promotional fish"
//             fill
//             style={{ objectFit: 'contain' }}
//             sizes="(max-width: 768px) 90vw, (min-width: 769px) 33vw"
//             className="drop-shadow-xl pointer-events-none select-none"
//           />
//         </motion.div>

//         {/* Right text */}
//         <motion.div
//           style={{ scale: textScale }}
//           className="flex-1 flex flex-col text-right space-y-4 z-10"
//         >
//           <p className="max-w-xs ml-auto text-base lg:text-lg text-gray-300">
//             A symbol of luck and tranquility, perfect for any aquarist.
//           </p>
//           <Link
//             href="/products"
//             className="inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity text-center"

//           >
//             View Details
//           </Link>
//         </motion.div>
//       </motion.div>
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
    offset: ['start end', 'center center'],
  });

  const imageScale = useTransform(scrollYProgress, [0.1, 0.4], [0.6, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);
  const imageY = useTransform(scrollYProgress, [0.1, 0.4], ['40px', '0px']);

  const textScale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.4, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative bg-white dark:bg-gray-900 py-12 sm:py-16 px-4 overflow-visible"
    >
      <motion.div
        style={{ opacity: textOpacity }}
        className="bg-gray-100 dark:bg-gray-800 text-white rounded-3xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-visible"
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

        {/* Fish image with fins outside */}
        <motion.div
          style={{ scale: imageScale, opacity: imageOpacity, y: imageY }}
          className="relative w-full md:w-1/3 h-64 md:h-96 z-20"
        >
          <Image
            src="/images/aquarium-banner2.png"
            alt="Promotional fish"
            fill
            className="object-contain drop-shadow-xl pointer-events-none select-none"
            sizes="(max-width: 768px) 90vw, (min-width: 769px) 33vw"
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
