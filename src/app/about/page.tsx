import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react'; 
import { FaTiktok } from 'react-icons/fa'; // Added TikTok icon

const AboutUsPage = () => {
  return (
    <div className="bg-[#0A0A10] text-gray-200 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* About Us */}
        <section className="flex flex-col lg:flex-row items-center gap-8 border-b border-gray-700 pb-12">
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
            className="rounded-xl shadow-lg object-cover"
            priority
          />
        </section>

        {/* Our Mission */}
        <section className="flex flex-col-reverse lg:flex-row items-center gap-8 border-b border-gray-700 pb-12">
          <div className="flex-1">
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Our+Mission"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Mission: Helping Millions of Organizations Grow Better
            </h2>
            <p className="text-lg">
              We believe not just in growing bigger, but in growing better. And growing better means aligning the success of your own business with the success of your customers, win-win!
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="flex flex-col lg:flex-row items-center gap-8 border-b border-gray-700 pb-12">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-lg mb-4">
              In 2004, two MIT graduate students, Brian Halligan and Dharmesh Shah, noticed a major shift in the way people shop and purchase products. Buyers didn’t want to be interrupted by ads; they wanted helpful information. In 2006, they founded our company to give businesses the tools to grow better with inbound marketing.
            </p>
            <p className="text-lg">
              Along the way, our company expanded beyond marketing into a crafted, not cobbled, suite of products that create the frictionless customer experience that buyers expect today. Expertly led by the CEO, Yamini Rangan, we use a customer platform built on an AI-powered smart CRM to help millions of growing organizations grow better.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="https://placehold.co/600x400/181820/E2E8F0?text=Our+Story"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* Contact Us */}
        <section className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Follow Us</h2>
          <p className="text-lg text-gray-400">We’d love to connect with you! Reach out through any of these platforms:</p>
          <div className="flex justify-center gap-6 mt-3">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={32} />
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <Instagram size={32} />
            </a>
            <a href="https://tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition">
              <FaTiktok size={32} />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
