import React from 'react'
import Image from 'next/image'
import Image_news1 from '../public/assert/SeaTalk_IMG_20241212_114449-428x199.png'
type Props = {}

export default function Articles_right({}: Props) {
  return (
    <div>
        <h1 className="text-4xl text-yellow-500 font-bold ml-10 mb-4">RA MẮT SỰ KIỆN BẠN TRAI THƯ GIÃN</h1>
        <div>
            <span className="text-sm text-white mt-4 ml-10 block">
                12.12.2024 | Viết bởi VALERI
            </span>
        </div>
           <div className="flex justify-center mt-4"> {/* Thêm lớp flex và justify-center */}  
            <Image src={Image_news1} alt='' />  
        </div>  
        <div className="ml-10">
                <span className="text-3xl text-orange-600 mt-4 block">
                    Thời gian  
                </span>
                <span className="text-1xl text-white mt-4  block">
                    <ul className="list-disc list-inside mb-6">  
                        <li>12.12.2024 – 08.01.2025</li>  
                    </ul>   
                </span>
                
                <span className="text-3xl text-orange-600 mt-4  block">
                    Thể lệ 
                </span>
                <span className="text-1xl text-white mt-4  block">
                    <ul className="list-disc list-inside mb-6">  
                        <li>Làm nhiệm vụ để tích huy hiệu và thắp sáng 5 phần trang trí</li>
                        <li>Mỗi khi hoàn thành nhiệm vụ, bạn sẽ nhận được 1 lượt chia sẻ tương ứng với huy hiệu nhận được</li>  
                        <li>Trong trường hợp nhận nhanh huy hiệu, bạn sẽ phải vào Túi đồ để tìm Rương bạn trai thư giãn và mở chúng</li>
                        <li>Khi 5 phần trang trí đã được hoàn hiện, bạn có thể nhận được trang phục Azzenka Giáng sinh An lành,  bậc S+ Hữu hạn mới nhất</li>
                    </ul>   
                </span>
        </div>
    </div>
  )
  
}