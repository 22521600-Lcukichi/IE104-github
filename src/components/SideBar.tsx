"use client";
import { usePathname } from "next/navigation"; // Sử dụng usePathname thay cho useRouter
import Link from "next/link";

const Sidebar = () => {
  const currentPath = usePathname(); // Lấy đường dẫn hiện tại

  const menuItems = [
    { id: 'heroes', label: 'Tướng/Skin', path: '/Gameplay/heroes' },
    { id: 'equipment', label: 'Trang Bị', path: '/Gameplay/equipment' },
    { id: 'runes', label: 'Bảng ngọc', path: '/Gameplay/rune' },
    { id: 'support', label: 'Phụ Trợ', path: '/Gameplay/support' },
    { id: 'emblem', label: 'Phù Hiệu', path: '/Gameplay/emblem' },
    { id: 'gamemode', label: 'Chế độ chơi', path: '/Gameplay/gamemode' },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      {menuItems.map((item) => (
        <Link
          href={item.path}
          key={item.id}
          className={`flex items-center px-6 py-3 hover:bg-gray-700 transition-colors
            ${currentPath === item.path ? 'bg-amber-800/20 border-l-4 border-amber-500' : ''}`}
        >
          <span className={`text-${currentPath === item.path ? 'amber-200' : 'gray-300'}`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
