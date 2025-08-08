// src/data/fishData.ts

// Defining a "type" gives us better autocompletion and error checking
export type Fish = {
  id: number;
  name: string;
  scientificName: string;
  slug: string; // A URL-friendly version of the name
  primaryImage: string; // Path to the main image
  description: string;
};

export const fishData: Fish[] = [
  {
    id: 1,
    name: 'Clownfish',
    scientificName: 'Amphiprioninae',
    slug: 'clownfish',
    primaryImage: '/images/clownfish.jpeg', // Root-relative path to images in `public`
    description: 'Clownfish are known for their bright orange color and their symbiotic relationship with sea anemones. They are hardy and popular among both new and experienced aquarists.',
  },
  {
    id: 2,
    name: 'Blue Tang',
    scientificName: 'Paracanthurus hepatus',
    slug: 'blue-tang',
    primaryImage: '/images/blue-tang.jpeg',
    description: 'The Blue Tang is a species of surgeonfish recognized by its vibrant blue body. It requires a large tank with plenty of swimming space and places to hide.',
  },
  // ... Add all 50 of your fish species here
];