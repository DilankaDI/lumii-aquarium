// // src/app/gallery/page.tsx

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Search } from 'lucide-react';

// // --- Data for our gallery ---
// // In a real app, you would fetch this from a CMS or API
// const galleryItems = [
//   { id: 1, src: '/images/gallery/sample-3.jpeg', title: 'Fishes, Corals and More', category: 'freshwater-fish' },
//   { id: 2, src: '/images/gallery/sample-4.jpeg', title: 'Modern Wall Aquarium', category: 'Rare & Exotic' },
//   { id: 3, src: '/images/gallery/sample-6.jpeg', title: 'Stunning Discus Fish', category: 'freshwater-fish' },
//   { id: 4, src: '/images/gallery/sample-7.jpeg', title: 'Acclimating Saltwater Fish', category: 'interesting' },
//   { id: 5, src: '/images/gallery/sample-12.jpg', title: 'Living Room Centerpiece', category: 'Rare & Exotic' },
//   { id: 6, src: '/images/gallery/sample-13.jpg', title: 'Lush Planted Tank', category: 'Beginner’s Picks' },
//   { id: 7, src: '/images/gallery/sample-3.jpeg', title: 'Colorful Community Tank', category: 'freshwater-fish' },
//   { id: 8, src: '/images/gallery/sample-4.jpeg', title: 'Minimalist Aquarium Setup', category: 'Rare & Exotic' },
//   { id: 9, src: '/images/gallery/sample-6.jpeg', title: 'Crystal Clear Water', category: 'Beginner’s Picks' },
//   { id: 10, src: '/images/gallery/sample-7.jpeg', title: 'Betta Fish Beauty', category: 'interesting' },
//   { id: 11, src: '/images/gallery/sample-12.jpg', title: 'Bespoke Kitchen Aquarium', category: 'Rare & Exotic' },
//   { id: 12, src: '/images/gallery/sample-13.jpg', title: 'Aquascaping Details', category: 'Beginner’s Picks' },
// ];

// const categories = [
//   { id: 'all', title: 'FILTER - ALL' },
//   { id: 'interesting', title: 'INTERESTING TO KNOW' },
//   { id: 'freshwater-fish', title: 'FRESHWATER FISH' },
//   { id: 'Rare & Exotic', title: 'RARE & EXOTIC ' },
//   { id: 'Beginner’s Picks', title: 'BEGINNER’S PICKS' },
// ];

// const ITEMS_PER_PAGE = 6;

// const GalleryPage = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
//   const [filtered, setFiltered] = useState(galleryItems);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     if (activeFilter === 'all') {
//       setFiltered(galleryItems);
//     } else {
//       setFiltered(galleryItems.filter(item => item.category === activeFilter));
//     }
//     setCurrentPage(1); // Reset to the first page on filter change
//   }, [activeFilter]);

//   // Pagination logic
//   const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
//   const paginatedItems = filtered.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   return (
//     <div className="bg-darkteal py-16 px-4 md:px-8">
//       <div className="container mx-auto">
//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveFilter(category.id)}
//               className={`
//                 px-6 py-2 text-sm font-semibold border rounded-sm transition-colors duration-300
//                 ${activeFilter === category.id
//                   ? 'bg-teal-500 text-white border-teal-500'
//                   : 'bg-white text-gray-600 border-gray-200 hover:bg-teal-500 hover:text-white hover:border-teal-500'
//                 }
//               `}
//             >
//               {category.title}
//             </button>
//           ))}
//         </div>

//         {/* Image Grid */}
//         <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           <AnimatePresence>
//             {paginatedItems.map((item) => (
//               <motion.div
//                 layout
//                 key={item.id}
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.8 }}
//                 transition={{ duration: 0.3 }}
//                 className="relative overflow-hidden rounded-lg shadow-lg group"
//               >
//                 <Image
//                   src={item.src}
//                   alt={item.title}
//                   width={600}
//                   height={400}
//                   className="w-full h-full object-cover"
//                 />
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex flex-col justify-center items-center p-4">
//                   <Search className="h-10 w-10 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" />
//                   <p className="text-white font-bold mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
//                     {item.title}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-12">
//           {totalPages > 1 && Array.from({ length: totalPages }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentPage(index + 1)}
//               className={`
//                 w-10 h-10 mx-1 flex items-center justify-center font-semibold border transition-colors duration-300
//                 ${currentPage === index + 1
//                   ? 'bg-teal-500 text-white border-teal-500'
//                   : 'bg-white text-gray-600 border-gray-200 hover:bg-teal-400 hover:text-white'
//                 }
//               `}
//             >
//               {index + 1}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;

// src/app/products/page.tsx

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
  { id: 'Vibrant Colors', name: 'Vibrant Colors' },
  { id: 'Patterned Fish', name: 'Patterned Fish' },
];

const ITEMS_PER_PAGE = 6;

const GalleryPage = () => {
  // State for filtering and pagination
  const [activeFilter, setActiveFilter] = useState('all');
  const [filtered, setFiltered] = useState(fishData);
  const [currentPage, setCurrentPage] = useState(1);

  // 1. State to manage the selected fish for the modal
  const [selectedFish, setSelectedFish] = useState<Fish | null>(null);

  // Effect to update the list when the filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFiltered(fishData);
    } else {
      // Assuming your fishData items have a 'tags' array field.
      // If it's a 'category' string, use: fishData.filter(item => item.category === activeFilter)
      setFiltered(fishData.filter(item => item.category?.includes(activeFilter)));
    }
    setCurrentPage(1); // Reset to the first page on filter change
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
    return () => { // Cleanup function
      document.body.style.overflow = 'auto';
    };
  }, [selectedFish]);


  // Pagination logic
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginatedItems = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <div className="bg-gray-50 dark:bg-dark-bg py-16 px-4 md:px-8">
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
        {paginatedItems.map((item) => (
          <motion.div
            layout
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                  onClick={() => handleOpenModal(item)} // <-- 4. ADD ONCLICK HANDLER HERE
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

          {/* Pagination Controls */}
          <div className="flex justify-center mt-12">
            {totalPages > 1 && Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`
                  w-10 h-10 mx-1 flex items-center justify-center font-semibold border rounded-sm transition-colors duration-300
                  ${currentPage === index + 1
                    ? 'bg-[#0D1B2A] text-white border-[#0D1B2A]'
                    : 'bg-white dark:bg-dark-surface dark:text-gray-300 text-gray-600 border-gray-200 dark:border-gray-700 hover:bg-[#0D1B2A]/80 hover:text-white'
                  }
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* 5. RENDER THE MODAL COMPONENT */}
      {/* It will only appear on the screen when selectedFish has data */}
      <FishModal fish={selectedFish} onClose={handleCloseModal} />
    </>
  );
};

export default GalleryPage;