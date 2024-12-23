import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import News1 from '../public/assert/News_cooperation/HH-cover-21-428x199.jpg'
import News2 from '../public/assert/News_cooperation/Honeyview_unnamed-1-2-428x199.jpg'
import News3 from '../public/assert/News_cooperation/KV-thường_860x400-cover-web-428x199.jpg'
import News4 from '../public/assert/News_cooperation/SeaTalk_IMG_20240730_135213-428x199.jpeg'

const Articles_left = () => {
    const newsItems = [
        {
          title: "LẦN THỨ 6 LIÊN TIẾP – HẢO HẢO CHÍNH THỨC LÀ NHÀ TÀI TRỢ CỦA ĐẤU TRƯỜNG DANH VỌNG MÙA ĐÔNG 2024 – BÙNG HẢO VỊ CHIẾN HẢO GAME",
          date: "09.12.2024",
          image: News1,
          path: '/news/all/news1',
        },
        {
          title: "SAMSUNG CÔNG BỐ HỢP TÁC CÙNG LIÊN QUÂN MOBILE TRONG AWESOME ACADEMY 2023",
          date: "05.12.2024",
          image: News2,
          path: '/news/all/news2',
        },
        {
            
            title: "LẦN ĐẦU TIÊN KOTEX HỢP TÁC VỚI LIÊN QUÂN MOBILE, TÀI TRỢ ĐỘC QUYỀN GIẢI ĐẤU ĐẠI CHIẾN MAXCOOL",
            date: "03.12.2024",
            image: News3,
            path: '/news/all/news2',
          },
          {
            
            title: "NƯỚC UỐNG SỮA TRÁI CÂY TH TRUE JUICE MILK TÀI TRỢ ĐẤU TRƯỜNG DANH VỌNG MÙA ĐÔNG 2024 – NĂNG LƯỢNG TỰ NHIÊN, CHIẾN GAME CỰC CHẤT",
            date: "27.11.2024",
            image: News4,
            path: '/news/all/news2',
          },
      ];
  return (
    <div >
      <h1 className="text-4xl text-yellow-500 font-bold text-center mb-8">BÀI VIẾT KHÁC</h1>
      <div className="grid grid-cols-1 gap-4">
        {newsItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="group block w-full  hover:bg-opacity-10 hover:bg-white rounded-lg transition-all duration-300 p-4"
          >
            <div className="flex flex-col space-y-4">
              <div className="relative w-auto h-48 overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2">
                <span className="block text-sm text-yellow-300">{item.date}</span>
                <h2 className="text-white  font-light leading-snug">
                  {item.title}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default Articles_left;