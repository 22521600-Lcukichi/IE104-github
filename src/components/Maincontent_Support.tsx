// components/mainContent.tsx  

import React from 'react';  
import Image from 'next/image';
import Toc_bien from '../public/assert/Phu_tro/toc_bien.png'
import Thanh_tay from '../public/assert/Phu_tro/thanh_tay.png'
import Ngat_ngu from '../public/assert/Phu_tro/ngat_ngu.png'
import cap_cuu from '../public/assert/Phu_tro/cap_cuu.png'
import gam_thet from '../public/assert/Phu_tro/Gam_thet.png'
import Trung_tri from '../public/assert/Phu_tro/trung_tri.png'
import Boc_pha from '../public/assert/Phu_tro/Boc_pha.png'
import Toc_hanh from '../public/assert/Phu_tro/Toc_hanh.png'
const abilities = [  
  {  
    name: 'TỐC BIẾN',  
    description: '120 hồi chiêu: dịch chuyển trong 1 khoảng cách nhất định theo 1 hướng cụ thể',  
    image: Toc_bien
  },  
  {  
    name: 'THANH TẨY',  
    description: '120 giây hồi chiêu: hóa giải tất cả hiệu ứng bất lợi và khống chế, đồng thời miễn dịch với khống chế trong 1.5 giây',  
    image: Thanh_tay
  },  
  {  
    name: 'NGẤT NGƯ',  
    description: '90 giây hồi chiêu: làm choáng kẻ địch xung quanh trong 0.5 giây và làm chậm chứng trong 1 giây',  
    image: Ngat_ngu
  },  
  {  
    name: 'CẤP CỨU',  
    description: '120 giây hồi chiêu: hồi 15% máu cho bản thân và những đồng minh xung quanh, đồng thời tăng 15% tốc chạy cho cả nhóm trong 2 giây',  
    image: cap_cuu
  },  
  {  
    name: 'TRỪNG TRỊ',  
    description: '30 giây hồi chiêu: Gây 800 sát thương lên quái xung quanh và làm choáng chúng trong 1 giây',  
    image: Trung_tri
  },
  {  
    name: 'BỘC PHÁ',  
    description: '90 giây hồi chiêu: Gây sát thương chuẩn tương đương 16% máu đã mất của kẻ địch',  
    image: gam_thet
  },  
  {  
    name: 'TỐC HÀNH',  
    description: '100 giây hồi chiêu: Tăng 30% tốc chạy trong 10 giây',  
    image: Toc_hanh
  },  
    
];  

const Maincontent_Support= () => {  
  return (  
    <div className="p-4">  
      {abilities.map((ability, index) => (  
        <div key={index} className="bg-gray-800 text-white p-4 mb-4 rounded-lg flex">  
          <div className="flex-shrink-0">  
            <Image src={ability.image} alt={ability.name} className="w-12 h-12" />  
          </div>  
          <div className="ml-4">  
            <h2 className="text-lg font-bold">{ability.name}</h2>  
            <p>{ability.description}</p>  
          </div>  
        </div>  
      ))}  
    </div>  
  );  
};  

export default Maincontent_Support;