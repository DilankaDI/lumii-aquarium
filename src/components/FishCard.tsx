import Image from 'next/image';
import type { Fish } from '@/data/fishData';
// The card now accepts a function to call when it's clicked
interface FishCardProps {
fish: Fish;
onCardClick: (fish: Fish) => void;
}
export const FishCard = ({ fish, onCardClick }: FishCardProps) => {
return (
// The <Link> is replaced with a <div> that has an onClick handler.
<div
className="border rounded-lg overflow-hidden font-serif shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
onClick={() => onCardClick(fish)}
>
<div className="relative w-full aspect-[4/3] overflow-hidden">
<Image
src={fish.primaryImage}
alt={fish.name}
fill
className="object-cover group-hover:scale-105 transition-transform duration-300"
/>
</div>
<div className="p-4 bg-white">
<h3 className="font-bold text-lg text-[#0D1B2A]">{fish.name}</h3>
<p className="text-sm text-gray-500">{fish.category}</p>
</div>
</div>
);
};