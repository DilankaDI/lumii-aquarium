import { MapPin, Phone, Mail, Facebook, Instagram, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#12121A] text-gray-400 py-12 px-4 md:px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Left Section - Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600"
            >
              <path d="M12 2L2 12h10V2zM12 22L22 12H12V22z" fill="currentColor" />
              <path
                d="M12 12V2h10L12 12z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
            <span className="text-2xl font-bold text-white">Lumii Aquarium</span>
          </div>
          <p className="text-sm">
            We are dedicated to providing the highest quality aquatic life and
            supplies. Our mission is to promote sustainable aquaculture and a
            passion for the underwater world.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 text-sm mt-4">
            <a href="#" className="hover:text-white transition-colors duration-300">
              Home
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Our Farms
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Products
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
          <p className="text-sm mt-4">
            &copy; {new Date().getFullYear()} Lumii Aquarium. All rights reserved.
          </p>
        </div>

        {/* Middle Section - Contact Information */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Our Location</h3>
          <div className="flex items-start justify-center md:justify-start space-x-2">
            <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
            <p className="text-sm">
              No. 40/1, Mahavidana Watta,<br />
              Kalapugama,<br />
              Moronthuduwa,<br />
              Sri Lanka
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Phone className="h-5 w-5 text-red-600" />
            <p className="text-sm">+94 77 123456</p>
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail className="h-5 w-5 text-red-600" />
            <p className="text-sm">lumii.go2@gmail.com</p>
          </div>
        </div>

        {/* Right Section - Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <p className="text-sm">
            Stay connected with us on our journey to create the best aquatic
            environments.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Facebook */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Instagram className="w-6 h-6" />
            </a>
            {/* TikTok */}
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
