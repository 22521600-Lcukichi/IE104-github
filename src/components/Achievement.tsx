import React from 'react'
import Image from 'next/image'
import Thanh_tuu from '../public/assert/Thanh_tuu/achievement.png'


export default function Achievement() {
  return (
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8">
     <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">THÀNH TỰU</h1>  
        <div className="text-lg text-gray-500 text-center font-bold mb-6">
            <p>Các dự án hợp tác, đồng hành cùng nhãn hàng thường xuyên nằm trong các Bảng Xếp Hạng</p>
            <p>Buzzmetrics, đạt được các giải thưởng giá trị.</p>
        </div>
        <Image src={Thanh_tuu} alt=''/>
    </div>
  )
}