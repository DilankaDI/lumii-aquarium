// src/components/FishCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Fish } from '@/data/fishData';

export const FishCard = ({ fish }: { fish: Fish }) => {
    return (
        <Link href={`/species/${fish.slug}`} className="group block">
            <motion.div
               className="overflow-hidden rounded-xl bg-white dark:bg-dark-surface border border-neutral-200 dark:border-gray-700"
                whileHover={{ y: -10, boxShadow: '0px 15px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                
                // This is the updated transition for a slower, smoother effect
                transition={{
                    type: "tween",       // Use a duration-based animation
                    ease: "easeOut",     // Start fast and slow down at the end
                    duration: 0.4        // The animation will take 0.4 seconds
                }}
            >
                <div className="overflow-hidden">
                    <Image
                        src={fish.primaryImage}
                        alt={`A beautiful ${fish.name}`}
                        width={400}
                        height={400}
                        className="h-48 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                </div>
                <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-dark-mode-primary-text transition-colors">
                        {fish.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-dark-mode-muted-text italic">
                        {fish.scientificName}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};