"use client";
import React from "react";
import Image from "next/image";
import Items1 from "../public/assert/IMG-HOR-0860x0400-002082-5-428x199.jpg"
import Items2 from "../public/assert/IMG-HOR-0860x0400-002081-4-428x199.jpg"
import Items3 from "../public/assert/IMG-HOR-0860x0400-002082-5-428x199.jpg"
import Items4 from "../public/assert/IMG-HOR-0860x0400-003732-860x400-1-428x199.png"
import Items5 from "../public/assert/IMG-HOR-0860x0400-003854-860x400-1-428x199.jpg"
import Items6 from "../public/assert/SeaTalk_IMG_20241212_114449-428x199.png"
import Link from "next/link";

const Main_Content_News_All = () => {
  const newsItems = [
    {
        type: "SỰ KIỆN",
        title: "RA MẮT SỰ KIỆN BẠN TRAI THƯ GIÃN",
        description:"Thời gian 12.12.2024 – 08.01.2025 Thể lệ Làm nhiệm vụ để tích huy hiệu và thắp sáng 5 phần trang trí Mỗi khi hoàn...",
        date: "09.12.2024",
        image: Items6,
        path: '/news/all/news1',
      },
    {
      type: "SỰ KIỆN",
      title: "TỔNG HỢP SỰ KIỆN (09.12 – 15.12)",
      description:"Xin chào các Kiện tướng, Hội đồng xin gửi tới các Kiện tướng lịch sự kiện tại Cửa hàng (09/12– 15/12) như sau: Ngày Sự kiện Sự kiện Thứ 2 (09/12) Mở bán tướng mới...",
      date: "09.12.2024",
      image: Items1,
      path: '/news/all/news1',
    },
    {
      type: "MỞ BÁN",
      title: "SỰ KIỆN CỬA HÀNG NÂNG CẤP",
      description: "1. Thời gian diễn ra sự kiện: 06/12 –  22/12/2024 2. Khi tham gia sự kiện, người chơi có cơ hội trúng trang phục Arduin Bạch vệ chiến giáp 3. Có 4 tầng tương ứng...",
      date: "05.12.2024",
      image: Items2,
      path: '/news/all/news2',
    },
    {
        type: "MỞ BÁN",
        title: "SỰ KIỆN CỬA HÀNG NÂNG CẤP",
        description: "Xin chào các Kiện tướng, Hội đồng xin gửi tới các Kiện tướng lịch sự kiện tại Cửa hàng (02/12– 08/12) như sau: Ngày Sự kiện Sự kiện Thứ 2 (02/12) Vẽ bùa Pháo hoa:...",
        date: "03.12.2024",
        image: Items3,
        path: '/news/all/news2',
      },
      {
        type: "MỞ BÁN",
        title: "SỔ SỨ MỆNH 72",
        description: "Xin chào các Kiện Tướng Chào mừng đến với Sổ Sứ Mệnh mùa 72 – Dạ tiệc trăng máu SỔ SỨ MỆNH MÙA 72   Các Kiện Tướng có hai lựa chọn tham gia Sổ ...",
        date: "27.11.2024",
        image: Items4,
        path: '/news/all/news2',
      },
      {
        type: "CẬP NHẬP",
        title: "ĐIỀU CHỈNH CÂN BẰNG PB MỪNG SINH NHẬT LIÊN QUÂN 8 TUỔI – 28.11",
        description: "1.Xin mời các Kiện tướng theo dõi nội dung cân bằng của ngày 28/11 MỤC LỤC Cân bằng tướng Tướng mới Bolt Baron...",
        date: "26.11.2024",
        image: Items5,
        path: '/news/all/news2',
      },
  ];

  return (
    <div className="grid gap-6">
      {newsItems.map((item, index) => (
        <Link key={index} href={item.path}>
          <div className=" rounded-lg overflow-hidden cursor-pointer transition duration-300 group w-full h-full">
            <div className="flex">
              {/* Ảnh với hiệu ứng nghiêng */}
              <div className="relative overflow-hidden mt-10">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover transition-transform duration-300 group-hover:rotate-2 group-hover:scale-100"
                />
              </div>
              <div className="p-10">
              <span className={`px-3 py-1 rounded-lg text-sm text-white ${
                        item.type === 'SỰ KIỆN' ? 'bg-purple-600' : 
                        item.type === 'MỞ BÁN' ? 'bg-red-600' : 
                        'bg-blue-300' // Mặc định nếu không khớp
                    }`}
               >
                    {item.type}
               </span>
                {/* Tiêu đề với dấu gạch chân */}
                <h2 className="text-xl font-bold mt-2 text-yellow-600 relative">
                  {item.title}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                </h2>
                <p className="text-white mt-2">{item.description}</p>
                <span className="text-sm text-gray-500 mt-4 block font-bold">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Main_Content_News_All;
