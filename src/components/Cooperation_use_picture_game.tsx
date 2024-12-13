"use client";
import React from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Slide from './Main/Slide';
import Banner1 from '../public/assert/Hop_tac_su_dung_hinh_anh/Honeyview_Samsung-2.jpg'
import Banner2 from '../public/assert/Hop_tac_su_dung_hinh_anh/Honeyview_Verus.jpg'
import Banner3 from '../public/assert/Hop_tac_su_dung_hinh_anh/Honeyview_Xiaomi.jpg'
import Banner4 from '../public/assert/Hop_tac_su_dung_hinh_anh/Honeyview_kv_ngang-01-e1728011736849.jpg'
import Banner5 from '../public/assert/Hop_tac_su_dung_hinh_anh/KV-thường_2207-scaled-e1730777948186.jpg'
import Banner6 from '../public/assert/Hop_tac_su_dung_hinh_anh/Samsung-e1727955017548.jpeg'
type Props = {}
type Items = {
    name: string;
    image?: string;
  };
  const Item: Items[] = [
    {
        name: "In hình ảnh game lên bao bì sản phẩm",
        image: Banner5,
    },
    {
        name: "Ra mắt bộ sưu tập giới hạn hợp tác Liên Quân",
        image: Banner6,
    },
    {
        name: "Tổ chức activation có booth game",
        image: Banner4,
    },
    {
        name: "Chiến dịch truyền thông gắn liền với game",
        image: Banner2,
    },
    {
        name: "Sản xuất sản phẩm Liên Quân",
        image: Banner1,
    },
    {
        name: "Chương trình khuyến mãi/tặng quà",
        image: Banner3,
    },
  ]
export default function Cooperation_use_picture_game({}: Props) {
    
  return (
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">HỢP TÁC SỬ DỤNG HÌNH ẢNH GAME</h1>  
        <div className="text-lg text-gray-500 text-center font-bold mb-6">
            <p>Đối tác có nhu cầu mua bản quyền sử dụng hình ảnh game Liên Quân Mobile trong các hoạt</p>
            <p>động Marketing hay sản xuất, in ấn trên sản phẩm/quà tặng.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
            {Item.map((item) => (
            <div key={item.name} className="relative group">
                <Image
                src={item.image}
                alt={item.name}
                width={1379}
                height={919}
                className="w-full aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-90 group-hover:ring-2 group-hover:ring-white"
        z      />
                <div className="text-center mt-2">
                    <span className="block font-medium text-sm text-black transition-colors duration-300 group-hover:text-white">
                    {item.name}
                    </span>
                </div>
            </div>
            ))}
        </div>
        <p className="text-sm text-gray-400 text-center mt-6 italic">  
          *Lịch trình dự kiến của các giải đấu mang tính chất tham khảo  
        </p>  
    </div>
  )
}