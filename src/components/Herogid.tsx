import Bolt_Baron from '../public/assert/heroes/bolt-baron-225.jpg'
import Biron from '../public/assert/heroes/biron.jpg'
import Dolia from '../public/assert/heroes/dolia.jpg'
import Charlotte from '../public/assert/heroes/charlotte.jpg'
import Tachi from '../public/assert/heroes/tachi.jpg'
import Dirak from '../public/assert/heroes/dirak.jpg'
import Qi from '../public/assert/heroes/qi.jpg'
import Erin from '../public/assert/heroes/erin.jpg'
import Ming from '../public/assert/heroes/ming.jpg'
import Bijan from '../public/assert/heroes/bijan.jpg'
import Bonnie from '../public/assert/heroes/Bonnie.jpg'
import Terri from '../public/assert/heroes/terri.jpg'
import Yue from '../public/assert/heroes/yue.jpg'
import Yan from '../public/assert/heroes/yan.jpg'
import Aya from '../public/assert/heroes/aya.jpg'
import Aoi from '../public/assert/heroes/aoi.jpeg'
import Iggy from '../public/assert/heroes/iggy.jpeg'
import Lorion from '../public/assert/heroes/lorion.jpg'
import Bright from '../public/assert/heroes/bright.jpg'
import Dextra from '../public/assert/heroes/dextra.jpg'
import Sinextra from '../public/assert/heroes/sinestra.jpg'
import Throne from '../public/assert/heroes/throne.jpg'
import Allain from '../public/assert/heroes/alain.jpg'
import Zata from '../public/assert/heroes/zata.jpg'
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
  
  const heroes: Hero[] = [
    {
        id: "1",
        name: "Bolt Baron",
        image: Bolt_Baron,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Biron",
        image: Biron,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Dolia",
        image: Dolia,
        category: "Support",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Charlotte",
        image: Charlotte,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Tachi",
        image: Tachi,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Dirak",
        image: Dirak,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Qi",
        image: Qi,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Erin",
        image: Erin,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Ming",
        image: Ming,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Bijan",
        image: Bijan,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Bonnie",
        image: Bonnie,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Terri",
        image: Terri,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Yue",
        image: Yue,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Yan",
        image: Yan,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Aya",
        image: Aya,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Aoi",
        image: Aoi,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Iggy",
        image: Iggy,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Bright",
        image: Bright,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Lorion",
        image: Lorion,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Dextra",
        image: Dextra,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Sinextra",
        image: Sinextra,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Throne",
        image: Throne,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Allain",
        image: Allain,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
    {
        id: "1",
        name: "Zata",
        image: Zata,
        category: "Đấu sĩ",
        path: '/Gameplay/heroes/Bolt_baron'
    },
 
   

]



export default function Herogid() {
  return (

    
    <div className="grid grid-cols-8 gap-4 mt-6">
        {heroes.map((hero) => (
          <div key={hero.id} className="relative group">
            <Link href={hero.path}>
            <Image
              src={hero.image}
              alt={hero.name}
              width={200}
              height={200}
              className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white"
      z      />
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
