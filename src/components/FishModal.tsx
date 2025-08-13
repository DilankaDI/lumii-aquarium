'use client';

import Image from 'next/image';
import { X } from 'lucide-react';
import type { Fish } from '@/data/fishData';
import { useEffect } from 'react';

// Define the props the modal will accept
interface FishModalProps {
  fish: Fish | null;   // The fish to display, or null to keep it hidden
  onClose: () => void; // A function to close the modal
}

export const FishModal = ({ fish, onClose }: FishModalProps) => {
  // Add an event listener to close the modal with the 'Escape' key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // If no fish is selected, the modal is not rendered
  if (!fish) {
    return null;
  }

  return (
    // Full-screen overlay that closes the modal when clicked
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 transition-opacity duration-300 animate-fadeIn"
    >
      {/* The modal content itself. stopPropagation prevents clicks inside from closing it. */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[100vh] flex flex-col md:flex-row overflow-hidden animate-scaleUp"
        >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black z-10"
          aria-label="Close fish details"
        >
          <X size={28} />
        </button>

        {/* Left Side: A Larger, High-Quality Primary Image */}
        <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-0">
          <Image
            src={fish.primaryImage}
            alt={`A vibrant ${fish.name}`}
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side: Fish Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
          {/* The Fish's Name */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A]">
            {fish.name}
          </h1>

          {/* Scientific Name */}
          <p className="text-lg italic text-gray-500 mb-4">
            {fish.species}
          </p>
          
          <div className="border-t border-gray-200 pt-4">
            <h2 className="text-xl font-bold text-[#0D1B2A] mb-2">
              About the {fish.name}
            </h2>
            
            {/* Detailed Description */}
            <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
              {fish.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};