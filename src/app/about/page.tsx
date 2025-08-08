import React from 'react';
import Image from 'next/image';

// About Us page component based on the provided image
const AboutUsPage = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* About Us Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mb-24">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-xl max-w-lg mx-auto lg:mx-0">
              Our company and culture are a lot like our product. They&#39;re crafted, not cobbled, for a delightful experience.
            </p>
          </div>
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Company+Team"
              alt="Company Team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ width: '60%', height: 'auto' }}
              priority
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mb-24">
          <div className="flex-1 w-full lg:w-auto">
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Our+Mission"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission: Helping Millions of Organizations Grow Better</h2>
            <p className="text-lg">
              We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers, win-win!
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 mb-24">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-lg">
              In 2004, two MIT graduate students, Brian Halligan and Dharmesh Shah, noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads; they wanted helpful information. In 2006, they founded our company to give businesses the tools to grow better with inbound marketing.
            </p>
            <p className="text-lg mt-4">
              Along the way, our company expanded beyond marketing into a crafted, not cobbled, suite of products that create the frictionless customer experience that buyers expect today. Expertly led by the CEO, Yamini Rangan, we use a customer platform built on an AI-powered smart CRM to help millions of growing organizations grow better.
            </p>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Our+Story"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              style={{ width: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
        
        {/* By the Numbers Section */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">By the Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-[#22222B] p-6 rounded-lg shadow-lg">
                <h3 className="text-5xl font-bold text-white">12</h3>
                <p className="text-lg text-gray-400 mt-2">Global Offices</p>
                <a href="#" className="text-red-500 hover:underline mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-[#22222B] p-6 rounded-lg shadow-lg">
                <h3 className="text-5xl font-bold text-white">7,600+</h3>
                <p className="text-lg text-gray-400 mt-2">Employees</p>
                <a href="#" className="text-red-500 hover:underline mt-2 inline-block">Learn more</a>
              </div>
              <div className="bg-[#22222B] p-6 rounded-lg shadow-lg">
                <h3 className="text-5xl font-bold text-white">205,000+</h3>
                <p className="text-lg text-gray-400 mt-2">Customers</p>
                <a href="#" className="text-red-500 hover:underline mt-2 inline-block">Learn more</a>
              </div>
            </div>
        </div>
      </div>
  );
};

const App = () => {
  return (
    <>
      <AboutUsPage />
    </>
  );
};

export default App;
