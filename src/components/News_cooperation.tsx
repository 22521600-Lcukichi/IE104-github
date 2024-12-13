import React from 'react'
import News1 from '../public/assert/News_cooperation/HH-cover-21-428x199.jpg'
import News2 from '../public/assert/News_cooperation/Honeyview_unnamed-1-2-428x199.jpg'
import News3 from '../public/assert/News_cooperation/KV-thường_860x400-cover-web-428x199.jpg'
import News4 from '../public/assert/News_cooperation/SeaTalk_IMG_20240730_135213-428x199.jpeg'
import Link from 'next/link'
import Image from 'next/image'
const News_cooperation = ()=> {
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
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">TIN TỨC HỢP TÁC</h1>  
        <div className="mt-5 flex gap-x-3  justify-between w-full">
                {newsItems.map((item, index) => (
                            <Link
                            key={index}
                            href={item.path}
                            className="group w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
                            >
                            <div className="relative w-full h-40">
                            <Image
                                src={item.image}
                                alt=''
                                fill
                                sizes="10vw"
                                className="object-cover transition-transform duration-300 group-hover:rotate-2 group-hover:scale-100"
                            />
                            </div>
                            <div className="mt-1">
                            <span className="block font-medium text-sm  text-yellow-300">{item.date}</span>
                            <span className="block font-medium mt-0 text-white relative">
                                {item.title}
                                
                            </span>
                            </div>
                            </Link>
            ))}
        </div>
    </div>
  )
}
export default News_cooperation;
