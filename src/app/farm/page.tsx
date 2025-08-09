import Image from 'next/image';

// Our Farms page component with a new layout
const OurFarmsPage = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">Our Aquatic Farms</h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Our commitment to sustainable aquaculture ensures the health and well-being of our species, from fry to full growth.
          </p>
          <Image
            src="https://placehold.co/1200x600/181820/E2E8F0?text=Aquatic+Farming+Facility"
            alt="Aquatic Farming Facility"
            width={1200}
            height={600}
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </div>

        {/* Our Story Section - Staggered Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 my-24">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story: From Fry to Tank</h2>
            <p className="text-lg text-gray-300 mb-4">
              Our journey began with a passion for aquatic life and a vision for ethical breeding. We developed a unique system to raise fish in a controlled, natural environment, focusing on their health and genetic diversity.
            </p>
            <p className="text-lg text-gray-300">
              We started with a single facility and have since expanded to multiple locations, each one dedicated to specialized care for different species, ensuring a thriving and beautiful collection for our customers.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Our+Story"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Meet Our Facilities Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-16">Meet Our Breeding Facilities</h2>
          
          {/* Facility 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
            <div className="lg:w-1/2">
              <Image
                src="https://placehold.co/800x600/3A3A40/F5F5F5?text=Willow+Creek+Farm"
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
                src="https://placehold.co/800x600/3A3A40/F5F5F5?text=Coral+Reef+Nursery"
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
                src="https://placehold.co/800x600/3A3A40/F5F5F5?text=Urban+Aquaculture"
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
              <h3 className="text-5xl font-bold text-white">100+</h3>
              <p className="text-lg text-gray-400 mt-2">Species Bred</p>
            </div>
            <div className="flex-1 bg-[#22222B] p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl font-bold text-white">50,000+</h3>
              <p className="text-lg text-gray-400 mt-2">Gallons of Water Capacity</p>
            </div>
            <div className="flex-1 bg-[#22222B] p-6 rounded-lg shadow-lg">
              <h3 className="text-5xl font-bold text-white">10+</h3>
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
