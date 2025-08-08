// src/components/PromoSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import { AnimateOnView } from './AnimateOnView'; // Reuse our scroll animation component

export const PromoSection = () => {
  return (
    <div className="bg-white dark:bg-dark-mode-surface">
      <AnimateOnView className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content Column */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Meet Our Golden Addition
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-dark-mode-muted-text">
              Discover the timeless elegance of the Goldfish. A symbol of luck and tranquility, these hardy fish are perfect for both beginners and seasoned aquarists, bringing a splash of classic color to any pond or aquarium.
            </p>
            <Link href="/species/goldfish" className="mt-8 inline-block bg-accent hover:opacity-90 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-opacity">
              View Details
            </Link>
          </div>

          {/* Image Column */}
          <div className="w-full h-80 relative rounded-lg overflow-hidden shadow-lg">
            {/* 
              DO NOT import the image.
              Use the root-relative string path directly in the `src` prop.
            */}
            <Image
              src="/images/goldfish.jpeg"
              alt="A vibrant goldfish"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </AnimateOnView>
    </div>
  );
};