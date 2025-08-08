// src/app/page.tsx
import { HeroCarousel } from "@/components/HeroCarousel";
import { PromoSection } from "@/components/PromoSection";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <br></br>
      <PromoSection />
      {/* You can add more homepage content below the carousel here */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* <div className="container mx-auto text-center py-16 px-4"> */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Lumi Aquarium</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Your source for vibrant, healthy, and ethically raised aquatic life. Explore our collection and find the perfect addition to your underwater world.
        </p>
      </div>
      {/* </div> */}
    </>
  );
}