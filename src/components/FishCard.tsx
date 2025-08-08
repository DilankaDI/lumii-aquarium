// src/components/FishCard.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { Fish } from '@/data/fishData'; // Import the type

export const FishCard = ({ fish }: { fish: Fish }) => {
    return (
        <Link href={`/species/${fish.slug}`} className="group block">
            <motion.div
className="overflow-hidden rounded-xl bg-white dark:bg-dark-mode-surface border border-neutral-200 dark:border-gray-700"                whileHover={{ y: -8, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
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
<h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-dark-mode-primary-text transition-colors">                        {fish.name}
                    </h3>
    <p className="mt-1 text-sm text-gray-500 dark:text-dark-mode-muted-text italic">
                        {fish.scientificName}
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};