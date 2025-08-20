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
                Our Farms
              </h1>
              {/* <p className="text-2xl text-gray-300 max-w-3xl mx-auto">
                At Lumii Farm, every fish begins its journey in a carefully managed freshwater environment. 
                Our breeding facilities are designed to provide the right balance of natural water, nutrition, 
                and care, ensuring that fish grow strong, calm, and disease-free. From the earliest stages of life, 
                we monitor their progress closely, paying attention to water quality, feeding, and overall well-being. 
                This approach allows each species to mature within the right timeframe, maintaining health and beauty from 
                young fish to adulthood.
              </p> */}
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
                src="/images/farm/1.jpg"
                alt="Willow Creek Farm"
                width={600}
                height={400}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Breeding and Care</h3>
              {/* <p className="text-gray-400 mb-4">Location: Northern California</p> */}
              <p className="text-lg text-gray-300">
At Lumii Farm, every fish begins its journey in a carefully managed freshwater environment. 
Our breeding facilities are designed to provide the right balance of natural water, nutrition, and care, 
ensuring that fish grow strong, calm, and disease-free. From the earliest stages of life, we monitor their 
progress closely, paying attention to water quality, feeding, and overall well-being. This approach allows 
each species to mature within the right timeframe, maintaining health and beauty from young fish to adulthood.
              </p>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h3 className="text-3xl font-bold text-white mb-2">Community Engagement</h3>
              {/* <p className="text-gray-400 mb-4">Location: Florida Keys</p> */}
              <p className="text-lg text-gray-300">
In addition to breeding at our own facilities, Lumii works closely with selected households who raise fish 
for us under natural conditions. We provide fishlings to these communities and conduct monthly inspections 
to ensure proper care, water quality, and healthy growth. Priority is always given to families with natural 
water sources such as springs and rivers, where fish can thrive in a healthy environment. By working together, 
we create opportunities for local communities while maintaining strict standards of quality for our customers.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/farm/2.jpg"
                alt="Coral Reef Nursery"
                width={500}
                height={350}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Facility 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <Image
                src="/images/farm/3.jpg"
                alt="Urban Aquaculture Lab"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="lg:w-1/2 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-white mb-2">Quarantine and Health Assurance</h3>
              {/* <p className="text-gray-400 mb-4">Location: New York</p> */}
              <p className="text-lg text-gray-300">
Before export, all fish pass through our dedicated quarantine center for a minimum of three weeks. 
During this period, they are carefully observed to ensure they are free from disease, growing to the 
right maturity, and maintaining calm behavior. Our quarantine process reflects our commitment to 
international standards, giving customers confidence that every fish is healthy and ready for its new environment. 
This step is central to our promise of delivering only the best.
              </p>
<h3 className="text-3xl font-bold text-white mb-2">Export and Global Standards</h3>
              {/* <p className="text-gray-400 mb-4">Location: Florida Keys</p> */}
              <p className="text-lg text-gray-300">
Once quarantine is complete, fish are carefully prepared for shipment using professional handling and packing techniques
 that safeguard their health throughout transport. Each order is selected, packed, and certified to meet international 
 requirements, ensuring safe delivery to our customers worldwide. At Lumii, we are committed not only to quality but 
 also to customer confidence. If any fish fail to survive during the journey, we do not hesitate to replace or provide 
 them again, ensuring that our customers always receive what they expect. This assurance reflects our dedication to reliability, 
 professionalism, and long-term trust.
              </p>
            </div>
          </div>
                    {/* Facility 4 */}
           {/* <div className="flex flex-col-reverse lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h3 className="text-3xl font-bold text-white mb-2">Export and Global Standards</h3> */}
              {/* <p className="text-gray-400 mb-4">Location: Florida Keys</p> */}
              {/* <p className="text-lg text-gray-300">
Once quarantine is complete, fish are carefully prepared for shipment using professional handling and packing techniques
 that safeguard their health throughout transport. Each order is selected, packed, and certified to meet international 
 requirements, ensuring safe delivery to our customers worldwide. At Lumii, we are committed not only to quality but 
 also to customer confidence. If any fish fail to survive during the journey, we do not hesitate to replace or provide 
 them again, ensuring that our customers always receive what they expect. This assurance reflects our dedication to reliability, 
 professionalism, and long-term trust.
              </p> */}
            {/* </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/catfish.jpg"
                alt="Coral Reef Nursery"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div> */}
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
