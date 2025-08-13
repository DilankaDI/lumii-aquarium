// src/data/fishData.ts

// 1. Define and Export the 'Fish' Type
// This is what your FishCard.tsx component is missing. It describes the
// "shape" of a single fish object for TypeScript.
export type Fish = {
  id: number;
  name: string;
  primaryImage: string;
  category: 'beginner' | 'centerpiece' | 'community';
};

// 2. Your Existing Data Array
// By adding ': Fish[]', we tell TypeScript that this is an array of 'Fish' objects.
// This is good practice as it will show an error if an object doesn't match the type.
export const fishData: Fish[] = [
  {
    id: 1,
    name: 'Goldfish',
    primaryImage: '/images/gallery/sample-13.jpg',
    category: 'beginner'
  },
  {
    id: 2,
    name: 'Betta Fish',
    primaryImage: '/images/gallery/sample-12.jpg',
    category: 'centerpiece'
  },
  {
    id: 3,
    name: 'Neon Tetra',
    primaryImage: '/images/gallery/sample-7.jpeg',
    category: 'community'
  },
  {
    id: 4,
    name: 'Guppy',
    primaryImage: '/images/gallery/sample-6.jpeg',
    category: 'beginner'
  },
  {
    id: 5,
    name: 'Angelfish',
    primaryImage: '/images/gallery/sample-4.jpeg',
    category: 'centerpiece'
  },
  {
    id: 6,
    name: 'Molly Fish',
    primaryImage: '/images/gallery/sample-3.jpeg',
    category: 'community'
  },
  // add more as needed, keeping absolute paths starting with `/`
];