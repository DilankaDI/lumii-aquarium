// src/app/species/[slug]/page.tsx
import { fishData } from '@/data/fishData';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const fish = fishData.find(f => f.slug === params.slug);
  return { title: `${fish?.name || 'Not Found'} | Lumi Aquarium` };
}

const SpeciesDetailPage = ({ params }: Props) => {
  const fish = fishData.find(f => f.slug === params.slug);
  if (!fish) notFound();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div>
          <Image src={fish.primaryImage} alt={fish.name} width={600} height={600} className="w-full h-full object-cover rounded-lg shadow-lg"/>
        </div>
        <div className="pt-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">{fish.name}</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 italic mt-2">{fish.scientificName}</p>
          <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Description</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">{fish.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpeciesDetailPage;