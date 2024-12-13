import Image from "next/image";
import Sidebar from "@/components/SideBar";
import SearchBar from "@/components/Searchbar";
import Emblem from "@/components/Emblem";
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
          <span className="font-bold underline text-white">Phù hiệu</span>  
        </nav>
      <div className="flex min-h-screen bg-gray-900">
        <Sidebar />
        <main className="flex-1 p-8">
          {/* Phần nội dung chính */}
          <div className="flex flex-col gap-6">
            {/* SearchBar */}
            <div>
              <SearchBar placeholder="Tìm kiếm phù hiệu" />
            </div>

            {/* Emblem */}
            <div>
              <Emblem />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
