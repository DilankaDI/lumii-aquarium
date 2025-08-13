'use client'; // Marks this as a client-side component

import Image from 'next/image';

const ContactUsPage: React.FC = () => {

  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            We love to hear from you. Whether you have a question about our species, 
            a partnership inquiry, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form Section */}
          <div className="p-8 rounded-xl">
                      <Image
                        src="/images/sample-10.jpg"
                        alt="Aquatic Farming Facility"
                        width={1200}
                        height={600}
                        className="rounded-3xl shadow-2xl w-full h-auto object-cover"
                      />     

          </div>

          {/* Contact Information Section */}
          <div className="bg-[#181820] p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                  <a href="mailto:info@myaquarium.com" className="text-gray-400 hover:text-red-500">info@myaquarium.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Phone</h3>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-red-500">+1 (234) 567-890</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Address</h3>
                  <p className="text-gray-400">123 Aqua Street, City, State, 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default ContactUsPage;
