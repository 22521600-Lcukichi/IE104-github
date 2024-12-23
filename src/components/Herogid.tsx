
import Image from 'next/image';
import React from 'react'
import Link from 'next/link'
type Hero = {
    id: string;
    name: string;
    image?: string;
    category: string; // 'Đấu sĩ' | 'Đỡ đòn' | 'Pháp sư' | etc.
    path: string;
  };
  interface HerogidProps {
    heroes: Hero[];
    gridCols: number;
  }
  
  
export default function Herogid({ heroes, gridCols }: HerogidProps) {
  return (

    
    <div className={`grid grid-cols-${gridCols} gap-4 mt-6`}>
        {heroes.map((hero) => (
          <div key={hero.id} className="relative group">
            <Link href={hero.path}>
            <Image
              src={hero.image}
              alt={hero.name}
              width={130}
              height={130}
              className="aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white"
            />
            <div className="text-center mt-2">
                <span className="block font-medium text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {hero.name}
                </span>
            </div>
            </Link>
          </div>
        ))}
      </div>
  )
}
