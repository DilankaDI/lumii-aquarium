'use client';

import Image from 'next/image';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUsPage: React.FC = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-white mb-4 leading-tight">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            We love to hear from you. Whether you have a question about our species, 
            a partnership inquiry, or just want to say hello, feel free to reach out.
          </p>
        </div>

        <div className="bg-[#181820] p-8 rounded-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div className="p-8 rounded-xl">
              <Image
                src="/images/sample-10.jpg"
                alt="Aquatic Farming Facility"
                width={1200}
                height={600}
                className="rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>

            <div className="bg-[#181820] p-8 rounded-xl">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <Mail className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <a
                      href="mailto:lumii.go2@gmail.com"
                      className="text-gray-400 hover:text-cyan-500"
                    >
                      lumii.go2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <a
                      href="tel:+94771234567"
                      className="text-gray-400 hover:text-cyan-500"
                    >
                      +94 77 123 4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center mr-4">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Address</h3>
                    <p className="text-gray-400">
                      No. 40/1, <br />
                      Mahavidana Watta, <br />
                      Kalapugama, <br />
                      Moronthuduwa, <br />
                      Sri Lanka
                    </p>
                  </div>
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
