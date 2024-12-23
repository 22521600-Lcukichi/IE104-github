import Image from "next/image";
import Banner from "@/components/Banner";
import NewList from "@/components/NewList";
import Button_Xemthem from "@/components/Button_Xemthem";
import Sidebar from "@/components/SideBar";
import Herogid from "@/components/Herogid";
import SearchBar from "@/components/Searchbar";
import Role_heroes from "@/components/Role_heroes";
import HeroShowcase from "@/components/HeroDisplay";
import Bolt_Baron from '@/public/assert/heroes/bolt-baron-225.jpg'
import Biron from '@/public/assert/heroes/biron.jpg'
import Dolia from '@/public/assert/heroes/dolia.jpg'
import Charlotte from '@/public/assert/heroes/charlotte.jpg'
import Tachi from '@/public/assert/heroes/tachi.jpg'
import Dirak from '@/public/assert/heroes/dirak.jpg'
import Qi from '@/public/assert/heroes/qi.jpg'
import Erin from '@/public/assert/heroes/erin.jpg'
import Ming from '@/public/assert/heroes/ming.jpg'
import Bijan from '@/public/assert/heroes/bijan.jpg'
import Bonnie from '@/public/assert/heroes/Bonnie.jpg'
import Terri from '@/public/assert/heroes/terri.jpg'
import Yue from '@/public/assert/heroes/yue.jpg'
import Yan from '@/public/assert/heroes/yan.jpg'
import Aya from '@/public/assert/heroes/aya.jpg'
import Aoi from '@/public/assert/heroes/aoi.jpeg'
import Iggy from '@/public/assert/heroes/iggy.jpeg'
import Lorion from '@/public/assert/heroes/lorion.jpg'
import Bright from '@/public/assert/heroes/bright.jpg'
import Dextra from '@/public/assert/heroes/dextra.jpg'
import Sinextra from '@/public/assert/heroes/sinestra.jpg'
import Throne from '@/public/assert/heroes/throne.jpg'
import Allain from '@/public/assert/heroes/alain.jpg'
import Zata from '@/public/assert/heroes/zata.jpg'
const heroes = [
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
export default function Home() {
  const limitedHeroes = heroes.slice(0, 24);
  return (
    <div className="bg-purple-950">
      <Banner />
      <div className="mt-12 ">
        <h1 className="text-6xl font-bold text-yellow-400 text-center ">TIN TỨC</h1>
        <NewList />
        <Button_Xemthem href="/news/all" />
        <h1 className="text-6xl font-bold text-yellow-400 text-center mb-3">TƯỚNG & TRANG PHỤC ĐA DẠNG</h1>
        <div>
              <HeroShowcase />
        </div>
        <h1 className="text-6xl font-bold text-yellow-400 text-center mb-3 mt-5">GAMEPLAY</h1>
    <div className="flex min-h-screen bg-gray-900">
          <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex">
                    <div className="flex-1">
                      <SearchBar placeholder="Tìm kiếm tướng"/>
                    </div>
                    <div>
                          <Role_heroes />
                    </div>
                </div>
                <Herogid heroes={limitedHeroes} gridCols={8} />
                <Button_Xemthem href="/Gameplay/heroes" />
            </main>
        </div>
      </div>
    </div>
  );
}
