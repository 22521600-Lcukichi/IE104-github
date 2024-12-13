import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cup_Vinh_Quang from '../public/assert/5v5.png'
import Thanh_pho_den from '../public/assert/map1v11.jpg'
import Bo_ba from '../public/assert/map3v31.jpg'
import Binh_nguyen_vo_tan from '../public/assert/map5v51.jpg'
import Aram from '../public/assert/map5v5-aram1.jpg'
type Gamemode = {
    id: string;
    name: string;
    image?: string;
    path: string;
  };
  const Gamemodes: Gamemode[] = [
    {
        id: "1",
        name: "5v5 PVP – Cúp Vinh Quang",
        image: Cup_Vinh_Quang,
        path: '/Gameplay/gamemode/Cup_vinh_quang'
    },
    {
        id: "2",
        name: "1v1 PVP – Thành phố đen",
        image: Thanh_pho_den,
        path: '/Gameplay/gamemode/Cup_vinh_quang'
    },
    {
        id: "3",
        name: "3v3 PVP – Đấu trường bộ ba",
        image: Bo_ba,
        path: '/Gameplay/gamemode/Cup_vinh_quang'
    },
    {
        id: "4",
        name: "5v5 PVP – Bình Nguyên Vô Tận",
        image: Binh_nguyen_vo_tan,
        path: '/Gameplay/gamemode/Cup_vinh_quang'
    },
    {
        id: "5",
        name: "5v5 ARAM – Hỗn loạn đường giữa",
        image: Aram,
        path: '/Gameplay/gamemode/Cup_vinh_quang'
    },
  ]
export default function Gamemode() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
    {Gamemodes.map((gamemode) => (
      <div key={gamemode.id} className="relative group">
        <Link href={gamemode.path}>
        <Image
          src={gamemode.image}
          alt={gamemode.name}
          width={560}
          height={210}
          className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white"
         />
        <div className="text-center mt-2">
            <span className="block font-medium text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
            {gamemode.name}
            </span>
        </div>
        </Link>
      </div>
    ))}
  </div>
)
}