'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

// Data and Type Imports
import { fishData } from '@/data/fishData';
import type { Fish } from '@/data/fishData';

// Component Imports
import { FishModal } from '@/components/FishModal'; // <-- Import the modal component

const categories = [
  { id: 'all', name: 'All Species' },
  { id: 'Glow', name: 'Glow' },
  { id: 'Pattern', name: 'Pattern' },
  { id: 'Crew', name: 'Crew' },
];

const GalleryPage = () => {
  // State for filtering
  const [activeFilter, setActiveFilter] = useState('all');
  const [filtered, setFiltered] = useState(fishData);

  // 1. State to manage the selected fish for the modal
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null);

  // Effect to update the list when the filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFiltered(fishData);
    } else {
      setFiltered(fishData.filter(item => item.category?.includes(activeFilter)));
    }
  }, [activeFilter]);

  // 2. Handlers to open and close the modal
  const handleOpenModal = (fish: Fish) => {
    setSelectedFish(fish);
  };

  const handleCloseModal = () => {
    setSelectedFish(null);
  };

  // 3. Effect to lock body scroll when modal is open
  useEffect(() => {
    if (selectedFish) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedFish]);

  return (
    <>
      <div className="bg-gray-50 font-serif dark:bg-dark-bg py-16 px-4 md:px-8">
        <div className="container mx-auto">

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`
                  px-6 py-2 text-sm font-semibold border rounded-sm transition-colors duration-300
                  ${activeFilter === category.id
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white dark:bg-dark-surface dark:text-gray-300 text-gray-600 border-gray-200 dark:border-gray-700 hover:bg-primary hover:text-white hover:border-primary'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => handleOpenModal(item)}
                >
                  <Image
                    src={item.primaryImage}
                    alt={item.name}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0D1B2A] bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex flex-col justify-center items-center p-4">
                    <Search className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
                    <p className="text-white font-bold mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      {item.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      
      {/* Modal */}
      <FishModal fish={selectedFish} onClose={handleCloseModal} />
    </>
  );
};

export default GalleryPage;
