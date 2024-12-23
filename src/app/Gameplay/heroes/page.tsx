import Image from "next/image";
import Sidebar from "@/components/SideBar";
import Herogid from "@/components/Herogid";
import SearchBar from "@/components/Searchbar";
import Role_heroes from "@/components/Role_heroes";
import HeroShowcase from "@/components/HeroDisplay";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
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
import Rouie from '@/public/assert/heroes/rouie.jpg'
import Laville from '@/public/assert/heroes/lavile.jpg'
import Paine from '@/public/assert/heroes/paine.jpg'
import Ata from '@/public/assert/heroes/Ata.jpg'
import Kerra from '@/public/assert/heroes/Kerra.jpg'
import ishar from '@/public/assert/heroes/Ishar.jpg'
import Elandor from '@/public/assert/heroes/Elandorr.jpg'
import Krizix from '@/public/assert/heroes/Krizzix.png'
import Volkahlt from '@/public/assert/heroes/Volkath.jpg'
import Celica from '@/public/assert/heroes/Celica.jpg'
import zip from '@/public/assert/heroes/Zip.jpg'
import enzo from '@/public/assert/heroes/Enzo.jpg'
import yena from '@/public/assert/heroes/Yena.jpg'
import Errol from '@/public/assert/heroes/Errol.jpg'
import capheny from '@/public/assert/heroes/Caphent.jpg'
import hayate from '@/public/assert/heroes/Hayate.jpg'
import Darcy from '@/public/assert/heroes/Darcy.jpg'
import Veres from '@/public/assert/heroes/Veres.jpg'
import flo from '@/public/assert/heroes/Flo.jpg'
import Sephera from '@/public/assert/heroes/Sephera.jpg'
import Quilen from '@/public/assert/heroes/quilen.jpg'
import Wiro from '@/public/assert/heroes/wiro.jpg'
import Rich from '@/public/assert/heroes/rich.jpg'
import Elsu from '@/public/assert/heroes/elsu.jpg'
import Ybenth from '@/public/assert/heroes/Ybenth.jpg'
import Amily from '@/public/assert/heroes/amily.jpg'
import Annete from '@/public/assert/heroes/annete.jpg'
import Baldum from '@/public/assert/heroes/baldum.jpg'
import Roxie from '@/public/assert/heroes/roxie.jpg'
import marja from '@/public/assert/heroes/marja.jpg'
import Rourke from '@/public/assert/heroes/rourke.jpg'
import arum from '@/public/assert/heroes/arum.jpg'
import wisp from '@/public/assert/heroes/wisp.jpg'
import flash from '@/public/assert/heroes/flash.jpg'
import max from '@/public/assert/heroes/max.jpg'
import lili from '@/public/assert/heroes/lili.jpg'
import tulen from '@/public/assert/heroes/tulen.jpg'
import omen from '@/public/assert/heroes/omen.jpg'
import lindis from '@/public/assert/heroes/lindis.jpg'
import teemee from '@/public/assert/heroes/teemee.jpg'

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
  
  {
      id: "1",
      name: "Rouie",
      image: Rouie,
      category: "Đấu sĩ",
      path: '/Gameplay/heroes/Bolt_baron'
  },
  {
    id: "1",
    name: "Laville",
    image: Laville,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Paine",
    image: Paine,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Ata",
    image: Ata,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Kerra",
    image: Kerra,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Ishar",
    image: ishar,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},

{
    id: "1",
    name: "Elandor",
    image: Elandor,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Krizzix",
    image: Krizix,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Volkahlt",
    image: Volkahlt,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Celica",
    image: Celica,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Zip",
    image: zip,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Enzo",
    image: enzo,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Yena",
    image: yena,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Errol",
    image: Errol,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Capheny",
    image: capheny,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Hayate",
    image: hayate,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Dar'cy",
    image: Darcy,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Veres",
    image: Veres,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Florentino",
    image: flo,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Sephera",
    image: Sephera,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Quillen",
    image: Quilen,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Wiro",
    image: Wiro,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Richter",
    image: Rich,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Elsu",
    image: Elsu,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Y'benth",
    image: Ybenth,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Amily",
    image: Amily,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Annette",
    image: Annete,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Baldum",
    image: Baldum,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Roxie",
    image: Roxie,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Marja",
    image: marja,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Rourke",
    image: Rourke,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Arum",
    image: arum,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Wisp",
    image: wisp,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "The Flash",
    image: flash,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Max",
    image: max,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Liliana",
    image: lili,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Tulen",
    image: tulen,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Omen",
    image: omen,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Lindis",
    image: lindis,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},
{
    id: "1",
    name: "Teemee",
    image: teemee,
    category: "Đấu sĩ",
    path: '/Gameplay/heroes/Bolt_baron'
},


]
export default function page() {
  return (
    <div className="bg-purple-950">
        <h1 className="text-6xl font-bold text-yellow-400 text-center mb-3 mt-5">GAMEPLAY</h1>
        <nav className="flex items-center text-lg mb-5">  
          <span  className="text-gray-400 hover:text-white mr-2"><FaHome /></span>  
          <Link href="/" className="text-gray-400 hover:text-white mr-2">Trang chủ</Link>  
          <span className="text-gray-400 mr-2"> > </span>  
          <Link href="/gameplay" className="text-gray-400 hover:text-white mr-2">Gameplay</Link>  
          <span className="text-gray-400 mr-2"> > </span>  
          <span className="font-bold underline text-white">Tướng/Skin</span>  
        </nav> 
    <div className="flex min-h-screen bg-gray-900">
          <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <SearchBar placeholder="Tìm kiếm tướng"/>
                    </div>
                    <div className="flex gap-4 items-center">
                          <Role_heroes />
                    </div>
                </div>
                <Herogid heroes={heroes} gridCols={8}/>
            </main>
        </div>
      </div>
  );
}
