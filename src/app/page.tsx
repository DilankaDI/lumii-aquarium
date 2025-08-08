// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center text-center p-4">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/aquarium-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Welcome to Lumi Aquarium</h1>
        <p className="text-xl mt-4 font-light">Discover the Vibrant Life Below the Surface.</p>
        <Link href="/products" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full uppercase tracking-wider transition-all">
          View Our Species
        </Link>
      </div>
    </div>
  );
}