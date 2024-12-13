"use client";
import { usePathname } from "next/navigation"; // Sử dụng usePathname thay cho useRouter
import Link from "next/link";
import Image from "next/image";
import All from '../public/assert/icon-cat-all.png'
import Update from '../public/assert/icon-cap-nhat.png'
import Sale from '../public/assert/icon-mo-ban.png'
import Events from '../public/assert/icon-su-kien.png'
import Competition from '../public/assert/icon-giai-dau.png'
import Cooperation from '../public/assert/icon-hop-tac.png'
const Sidebar_News = () => {
  const currentPath = usePathname(); // Lấy đường dẫn hiện tại

  const menuItems = [
    { icon: All , label: 'TẤT CẢ', path: '/news/all' },
    { icon: Update, label: 'CẬP NHẬP', path: '/news/update' },
    { icon: Sale, label: 'MỞ BÁN', path: '/news/sale' },
    { icon: Events, label: 'SỰ KIỆN', path: '/news/events' },
    { icon: Competition, label: 'GIẢI ĐẤU', path: '/news/competition' },
    { icon: Cooperation, label: 'HỢP TÁC', path: '/news/cooperation' },
  ];

  return (
    <div className="min-h-screen bg-purple-950 text-white">
    {/* Navigation Sidebar */}
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen ">
      {menuItems.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className={`flex items-center px-6 py-3 hover:bg-gray-700 transition-colors
            ${currentPath === item.path ? 'bg-amber-800/20 border-l-4 border-amber-500' : ''}`}
        >
          <Image
            src={item.icon}
            alt={item.label}
            width={24}
            height={24}
            className={`mr-3 ${currentPath === item.path ? 'brightness-110' : 'opacity-75'}`}
          />
          <span className={`${currentPath === item.path ? 'text-amber-200' : 'text-gray-300'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  </div>
  );
};

export default Sidebar_News;
