'use client';

import Image from 'next/image';
import { useEffect, useState, useRef  } from "react";

// Counter component with scroll-triggered animation
const Counter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.4 } // trigger when 40% visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref}>
      <span>{count.toLocaleString()}</span>
    </div>
  );
};
// Our Farms page component with a new layout
const OurFarmsPage = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-serif">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="relative text-center mb-20">
          <div className="relative h-[70vh] w-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/catfish.jpg"
              alt="Aquatic Farming Facility"
              fill
              priority
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60" />

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
              <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight">
                Our Aquatic Farms
              </h1>
              <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                Our commitment to sustainable aquaculture ensures the health and
                well-being of our species, from fry to full growth.
              </p>
            </div>
          </div>
        </div>
        {/* Meet Our Facilities Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-16">Meet Our Breeding Facilities</h2>
          
          {/* Facility 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2">
              <Image
                src="/images/catfish.jpg"
                alt="Willow Creek Farm"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">The Willow Creek Farm</h3>
              <p className="text-gray-400 mb-4">Location: Northern California</p>
              <p className="text-lg text-gray-300">
                Specializing in cold-water species, this facility uses filtered mountain stream water to replicate a natural habitat. Our experts ensure every fish is healthy and vibrant.
              </p>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h3 className="text-3xl font-bold text-white mb-2">The Coral Reef Nursery</h3>
              <p className="text-gray-400 mb-4">Location: Florida Keys</p>
              <p className="text-lg text-gray-300">
                Our dedicated marine facility, focused on breeding vibrant tropical fish and propagating rare corals in a controlled environment with state-of-the-art life support systems.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/catfish.jpg"
                alt="Coral Reef Nursery"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Facility 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src="/images/catfish.jpg"
                alt="Urban Aquaculture Lab"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Urban Aquaculture Lab</h3>
              <p className="text-gray-400 mb-4">Location: New York</p>
              <p className="text-lg text-gray-300">
                Our innovative lab focuses on cutting-edge techniques for breeding rare freshwater species in a city environment. We push the boundaries of aquaculture science.
              </p>
            </div>
          </div>
        </div>

         {/* By the Numbers Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">By the Numbers</h2>
          <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8">
            <div className="flex-1 bg-[#22222B] p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-400">
                <Counter target={100} />+
              </h3>
              <p className="text-lg text-gray-400 mt-2">Species Bred</p>
            </div>
            <div className="flex-1 bg-[#22222B] p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-400">
                <Counter target={50000} />+
              </h3>
              <p className="text-lg text-gray-400 mt-2">
                Gallons of Water Capacity
              </p>
            </div>
            <div className="flex-1 bg-[#22222B] p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl font-bold text-cyan-400">
                <Counter target={10} />+
              </h3>
              <p className="text-lg text-gray-400 mt-2">Breeding Experts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component to be exported
const App = () => {
  return <OurFarmsPage />;
};

export default App;
