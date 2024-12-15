import Image from "next/image";
import Banner from "@/components/Banner";
import NewList from "@/components/NewList";
import Button_Xemthem from "@/components/Button_Xemthem";
import Sidebar from "@/components/SideBar";
import Herogid from "@/components/Herogid";
import SearchBar from "@/components/Searchbar";
import Role_heroes from "@/components/Role_heroes";
import HeroShowcase from "@/components/HeroDisplay";
import SearchBar_Gameplay from "@/components/Search_Gameplay";
import Rune from "@/components/Rune";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-purple-950">
      
        <h1 className="text-6xl font-bold text-yellow-400 text-center mb-3 mt-5">GAMEPLAY</h1>
        <nav className="flex items-center text-lg mb-5">  
          <span  className="text-gray-400 hover:text-white mr-2"><FaHome /></span>  
          <Link href="/" className="text-gray-400 hover:text-white mr-2">Trang chủ</Link>  
          <span className="text-gray-400 mr-2"> > </span>  
          <Link href="/gameplay" className="text-gray-400 hover:text-white mr-2">Gameplay</Link>  
          <span className="text-gray-400 mr-2"> > </span>  
          <span className="font-bold underline text-white">Bảng ngọc</span>  
        </nav>
    <div className="flex min-h-screen bg-gray-900">
          <Sidebar />
            <main className="flex-1 p-8">
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <SearchBar placeholder="Tìm kiếm ngọc"/>
                    </div>
                    
                </div>
               <Rune />
            </main>
        </div>
      </div>

  );
}
