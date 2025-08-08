// src/app/page.tsx
import { HeroCarousel } from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      {/* You can add more homepage content below the carousel here */}
      <div className="container mx-auto text-center py-16 px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Lumi Aquarium</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Your source for vibrant, healthy, and ethically raised aquatic life. Explore our collection and find the perfect addition to your underwater world.
        </p>
      </div>
    </>
  );
}