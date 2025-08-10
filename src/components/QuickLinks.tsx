"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { GiDolphin } from "react-icons/gi";

const cards = [
  {
    title: "Our Farms",
    description: "See where we raise our fish with care and expertise.",
    icon: <GiDolphin className="text-sky-400 text-4xl" />,
    link: "/farm",
  },
  {
    title: "About Us",
    description: "Learn more about our story and our passion for aquatics.",
    icon: <FaInfoCircle className="text-green-500 text-4xl" />,
    link: "/about",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our friendly support team.",
    icon: <FaEnvelope className="text-pink-500 text-4xl" />,
    link: "/contact",
  },
];

export const QuickLinks = () => {
  return (
     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link href={card.link} className="block h-full">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex-grow">
                  {card.description}
                </p>
                <span className="mt-4 text-primary font-medium">Learn More →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};