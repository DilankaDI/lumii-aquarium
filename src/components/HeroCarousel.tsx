"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    bg: "/images/bg 1.jpg",
    fg: "/images/fg 9.png", // ✅ foreground image
    title: "All cared for with love",
    text: "From vibrant tropicals to rare species, discover healthy fish for your aquarium.",
    button: "View Collection",
     href: "/products",
    cards: [
      {
        id: "c1",
        img: "/images/fg 1.png",
        title: "Looking for aquarium specialists?",
        text: "Each fish is cared for with attention, so you can enjoy a thriving, active, and vibrant addition to your tank.",
        button: "Contact Us Now!",
         href: "/contact",
      },
      {
        id: "c2",
        img: "",
        title: "Natural Care",
        text: "Our fish grow in natural-like freshwater for health and vibrancy.",
        button: "Who We Are",
        href: "/about",
      },
      {
        id: "c3",
        img: "",
        title: "",
        text: "",
        button: "",
        video: true,
      },
    ],
  },
  {
    id: 2,
    bg: "/images/bg 5.jpg",
    fg: "/images/fg 10.png", // ✅ foreground image
    title: "All cared for with love",
    text: "From vibrant tropicals to rare species, discover healthy fish for your aquarium.",
    button: "View Collection",
    href: "/products",
    cards: [
      {
        id: "c1",
        img: "/images/fg 6.png",
        title: "Trusted by Fish Lovers",
        text: "We focus on the highest standards of quality, health, and attentive care, ensuring that every fish in your aquarium thrives, bringing vibrant colors, lively activity, and lasting beauty for years to come.",
        button: "Know More...",
        href: "/about",
      },
      {
        id: "c2",
        img: "",
        title: "Peaceful, Colorful, Alive",
        text: "We raise and care for fish with love so you can enjoy a thriving aquarium.",
        button: "Reach Out",
        href: "/contact",
      },
      {
        id: "c3",
        img: "",
        title: "",
        text: "",
        button: "",
        video: true,
      },
    ],
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    const firstLoadTimer = setTimeout(() => setFirstLoad(false), 4000);
    const slideTimer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => {
      clearTimeout(firstLoadTimer);
      clearInterval(slideTimer);
    };
  }, []);

  const slide = slides[index];

  // Animations (same as your code)
  const bgVariants = { enter: { y: "-100%", opacity: 0 }, center: { y: "0%", opacity: 1 }, exit: { y: "100%", opacity: 0 } };
  const fgVariants = { enter: { y: "-100%", opacity: 0 }, center: { y: "0%", opacity: 1 }, exit: { y: "100%", opacity: 0 } };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 1 + i * 0.3, duration: 0.5 } }),
    exit: { opacity: 0, y: 40, transition: { duration: 0.5 } },
  };
  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i: number) => ({ opacity: 1, x: 0, transition: { delay: 1.2 + i * 0.2, duration: 0.6 } }),
    stay: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="sync">
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image src={slide.bg} alt="Aquarium background" fill className="object-cover" priority />
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 8, ease: "linear" }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Foreground */}
      <AnimatePresence mode="sync">
        {slide.fg && (
          <motion.div
            key={`fg-${slide.id}`}
            className="absolute inset-0 flex items-center justify-center"
            variants={fgVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Image
              src={slide.fg}
              alt="Aquarium foreground"
              width={400}
              height={200}
              className="object-contain pointer-events-none"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12 gap-8">
        {/* Left text */}
<div className="text-white max-w-lg text-center md:text-left mt-16 md:mt-10">
  {[slide.title, slide.text, slide.button].map((item, i) => (
    <motion.div
      key={`${slide.id}-${i}`}
      variants={leftVariants}
      initial={firstLoad ? "hidden" : "false"}   // only animate first time
      animate={firstLoad ? "visible" : "stay"}  // stay static afterwards
      custom={i}
      className="mb-4"
    >
      { i === 0 && (
  <h1
    className="text-3xl md:text-5xl font-bold"
    style={{ fontFamily: 'Montserrat, sans-serif' }} 
  >
    {item}
  </h1>
)}
      {i === 1 && (
        <p className="text-base md:text-lg mt-4 font-serif text-gray-300">
          {item}
        </p>
      )}
      {i === 2 && slide.href && (
        <Link
          href={slide.href}
          className="inline-block px-4 md:px-6 py-2 md:py-3 bg-teal-600 rounded-lg shadow-lg font-semibold mt-4 text-sm md:text-base"
        >
          {item}
        </Link>
      )}
    </motion.div>
  ))}
</div>


        {/* Right cards */}
<div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-1 gap-4 md:gap-6 w-full max-w-md">
  <AnimatePresence mode="wait">
    <motion.div
      key={`${slide.id}-c1`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={0}
      className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg flex items-center space-x-3 text-black"
    >
      {slide.cards[0].img && (
        <Image src={slide.cards[0].img} alt={slide.cards[0].title} width={72} height={72} className="object-contain" />
      )}
      <div>
        <h3 className="font-serif font-bold text-sm md:text-base mb-1 text-black">{slide.cards[0].title}</h3>
        <p className="font-serif font-light text-xs md:text-sm text-gray-600 mb-2">{slide.cards[0].text}</p>
        {slide.cards[0].href && (
                  <Link
                    href={slide.cards[0].href}
                    className="inline-block text-white bg-teal-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-xs md:text-sm"
                  >
                    {slide.cards[0].button}
                  </Link>
                )}
      </div>
    </motion.div>
  </AnimatePresence>

  <div className="grid grid-cols-2 gap-4">
    <AnimatePresence mode="wait">
      <motion.div
        key={`${slide.id}-c2`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={1}
        className="bg-white/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-lg"
      >
        <h3 className="font-serif font-bold text-sm md:text-base mb-1 text-black">{slide.cards[1].title}</h3>
        <p className="font-serif font-light text-xs md:text-sm text-gray-600 mb-2">{slide.cards[1].text}</p>
        {slide.cards[1].href && (
                  <Link
                    href={slide.cards[1].href}
                    className="inline-block text-white bg-teal-600 px-3 py-1.5 md:px-4 md:py-2 rounded text-xs md:text-sm"
                  >
                    {slide.cards[1].button}
                  </Link>
                )}
      </motion.div>
    </AnimatePresence>

    <AnimatePresence mode="wait">
      <motion.div
        key={`${slide.id}-c3`}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        custom={2}
        className="bg-teal-600/80 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center"
      >
        {slide.cards[2].video && (
          <button className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 hover:bg-white/50 transition-colors flex items-center justify-center">
            <div className="w-0 h-0 border-t-6 md:border-t-8 border-t-transparent border-l-10 md:border-l-12 border-l-white border-b-6 md:border-b-8 border-b-transparent ml-1"></div>
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  </div>
</div>

      </div>
    </div>
  );
}

