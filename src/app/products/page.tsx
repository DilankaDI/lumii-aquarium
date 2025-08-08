// src/app/products/page.tsx
import { fishData } from '@/data/fishData';
import { FishCard } from '@/components/FishCard';

export const metadata = { title: 'Our Species | Lumi Aquarium' };

const ProductsPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Our Species Catalog</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Browse our collection of vibrant aquatic life.</p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {fishData.map(fish => <FishCard key={fish.id} fish={fish} />)}
        </div>
      </div>
    </div>
  );
};
export default ProductsPage;