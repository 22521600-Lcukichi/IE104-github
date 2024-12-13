import Image from "next/image";
import Banner from "@/components/Banner";
import NewList from "@/components/NewList";
import Button_Xemthem from "@/components/Button_Xemthem";
import Sidebar from "@/components/SideBar";
import Herogid from "@/components/Herogid";
import SearchBar from "@/components/Searchbar";
import Role_heroes from "@/components/Role_heroes";
import HeroShowcase from "@/components/HeroDisplay";
export default function Home() {
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
                <div className="flex justify-between items-center gap-4">
                    <div className="flex-1">
                      <SearchBar placeholder="Tìm kiếm tướng"/>
                    </div>
                    <div className="flex gap-4 items-center">
                          <Role_heroes />
                    </div>
                </div>
                <Herogid />
                <Button_Xemthem href="/Gameplay/heroes" />
            </main>
        </div>
      </div>
    </div>
  );
}
