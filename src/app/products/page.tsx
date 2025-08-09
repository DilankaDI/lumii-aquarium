"use client";

import React from "react";
import Image from "next/image";

type Product = {
  name: string;
  price: number;
  image: string;
  description: string;
  details: string;
};

const products: Product[] = [
  {
    name: "Neon Tetra",
    price: 5,
    image: "/images/sample-5.jpeg",
    description:
      "Small, colorful freshwater fish known for their bright neon blue and red stripes. Perfect for community tanks.",
    details: "Peaceful schooling fish, prefers groups of 6 or more, ideal for beginner aquarists.",
  },
  {
    name: "Betta Fish",
    price: 15,
    image: "/images/sample-5.jpeg",
    description:
      "Vibrant, solitary fish with flowing fins. Known for their aggressive behavior towards other males.",
    details: "Can live in smaller tanks, requires warm water (76-82°F), needs frequent feeding.",
  },
  {
    name: "Guppy",
    price: 3,
    image: "/images/sample-5.jpeg",
    description:
      "Small, lively fish with colorful patterns. Very easy to care for and breed.",
    details: "Hardy fish, prefers planted tanks, thrives in a wide range of water conditions.",
  },
  {
    name: "Angelfish",
    price: 25,
    image: "/images/sample-5.jpeg",
    description:
      "Elegant freshwater fish with triangular fins and graceful movements. Needs a spacious tank.",
    details: "Semi-aggressive, requires tall tanks, prefers stable water conditions.",
  },
  {
    name: "Corydoras Catfish",
    price: 10,
    image: "/images/sample-5.jpeg",
    description:
      "Small bottom-dwelling fish that helps keep the tank clean by scavenging leftover food.",
    details: "Peaceful and social, prefers groups, compatible with many community fish.",
  },
  {
    name: "Discus",
    price: 50,
    image: "/images/sample-5.jpeg",
    description:
      "Brightly colored, round-bodied fish that is considered one of the most beautiful freshwater species.",
    details: "Requires excellent water quality, peaceful, needs large tanks and stable temperature.",
  },
  {
    name: "Swordtail",
    price: 8,
    image: "/images/sample-5.jpeg",
    description:
      "Active and hardy fish with a distinctive sword-shaped tail fin. Easy to breed and care for.",
    details: "Good for beginners, prefers planted tanks, peaceful with other fish.",
  },
  {
    name: "Zebra Danio",
    price: 4,
    image: "/images/sample-5.jpeg",
    description:
      "Small, striped fish known for being very active and hardy, perfect for community tanks.",
    details: "Schooling fish, very tolerant to a wide range of conditions, great for beginners.",
  },
];

const ProductModal: React.FC<{ product: Product; onClose: () => void }> = ({
  product,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-[#22222B] text-white p-8 rounded-lg shadow-2xl max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full md:w-1/2 rounded-lg object-cover"
            style={{ objectFit: "cover" }}
            unoptimized
          />
          <div className="flex flex-col space-y-4">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-2xl text-red-500 font-semibold">LKR {product.price}</p>
            <p className="text-gray-300">{product.description}</p>
            <p className="text-gray-400 text-sm">
              <strong>Details:</strong> {product.details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<{
  product: Product;
  onSeeMoreClick: (product: Product) => void;
}> = ({ product, onSeeMoreClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="relative bg-[#22222B] rounded-lg p-4 text-white shadow-lg overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={`w-full h-auto object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : ""
          }`}
          style={{ objectFit: "cover" }}
          unoptimized
        />
        <button
          onClick={() => onSeeMoreClick(product)}
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          See more
        </button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-400">LKR {product.price}</p>
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleSeeMoreClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="bg-[#0A0A10] min-h-screen py-16 px-4 md:px-8">
      {/* Page Title */}
      <div className="text-center text-white mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Our Products</h2>
        <p className="text-lg mt-2 text-gray-400">Explore Our Products</p>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            onSeeMoreClick={handleSeeMoreClick}
          />
        ))}
      </div>

      {/* Modal for product details */}
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default ProductsPage;



// // src/app/products/page.tsx
// import { fishData } from '@/data/fishData';
// import { FishCard } from '@/components/FishCard';
// import { AnimateOnView } from '@/components/AnimateOnView'; // <-- Import the component

// export const metadata = { title: 'Our Species | Lumi Aquarium' };

// const ProductsPage = () => {
//   return (
//     <div className="bg-gray-50 dark:bg-dark-mode-background">
//       <div className="container mx-auto px-4 py-16">
//         <AnimateOnView>
//           <header className="text-center mb-12">
//             <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Species Catalog</h1>
//             <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Browse our collection of vibrant aquatic life.</p>
//           </header>
//         </AnimateOnView>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {fishData.map((fish, index) => (
//             // Wrap the card and add a small, cascading delay based on its index
//             <AnimateOnView key={fish.id} delay={index * 0.05}>
//               <FishCard fish={fish} />
//             </AnimateOnView>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProductsPage;