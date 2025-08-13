// src/components/FishCard.tsx

import Image from 'next/image';
import Link from 'next/link';
// This import will now succeed because you added the export in fishData.ts
import type { Fish } from '@/data/fishData';

export const FishCard = ({ fish }: { fish: Fish }) => {
  return (
    // Your JSX for the card component
    <div className="border rounded-lg overflow-hidden">
      <Link href={`/products/${fish.id}`}>
          <Image
            src={fish.primaryImage}
            alt={fish.name}
            width={400}
            height={300}
            className="object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold">{fish.name}</h3>
            <p className="text-sm text-gray-500">{fish.category}</p>
          </div>
      </Link>
    </div>
  );
};