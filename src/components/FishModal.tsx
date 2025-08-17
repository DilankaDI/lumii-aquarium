'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import type { Fish } from '@/data/fishData';
import { useEffect, useState } from 'react';

interface FishModalProps {
  fish: Fish | null;
  onClose: () => void;
}

export const FishModal = ({ fish, onClose }: FishModalProps) => {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (fish) {
      const img = new window.Image();
      img.src = fish.primaryImage;
      img.onload = () => {
        setIsPortrait(img.naturalHeight > img.naturalWidth);
      };
    }
  }, [fish]);

  if (!fish) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center font-serif bg-black/70 p-4 overflow-auto transition-opacity duration-300 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl flex flex-col overflow-hidden animate-scaleUp
          h-[75vh] sm:h-[65vh] md:h-[80vh]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black z-10"
          aria-label="Close fish details"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <div className="relative flex-[4] w-full">
          <Image
            src={fish.primaryImage}
            alt={`A vibrant ${fish.name}`}
            fill
            className={`${isPortrait ? 'object-contain' : 'object-cover'} object-center`}
            priority
          />
        </div>

        {/* Details */}
        <div className="flex-[1] w-full p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]">
            {fish.name}
          </h1>
          <p className="text-lg italic text-gray-500 mb-4">{fish.species}</p>
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">
              About the {fish.name}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {fish.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
