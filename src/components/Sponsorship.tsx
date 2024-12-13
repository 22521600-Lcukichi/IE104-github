"use client";
import React from 'react'
import Image from 'next/image';
import Schedule from '../public/assert/SeaTalk_IMG_20241001_141012.png'
type Props = {}

export default function Sponsorship({}: Props) {
  return (
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">TÀI TRỢ GIẢI ĐẤU</h1>  
        <div className="text-lg text-gray-500 text-center font-bold mb-6">
            <p>Nhãn hàng tài trợ các giải đấu chuyên nghiệp của Liên Quân trong nước và quốc tế với các gói tài trợ đi</p>
            <p> kèm quyền lợi hiện thị trên các kênh sóng của Liên Quân</p>
        </div>
        <Image src={Schedule} alt=""/>
        <p className="text-sm text-gray-400 text-center mt-6 italic">  
          *Lịch trình dự kiến của các giải đấu mang tính chất tham khảo  
        </p>  
    </div>
  )
}