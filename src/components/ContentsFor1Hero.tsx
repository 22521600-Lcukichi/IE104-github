"use client";
import React, { useState } from 'react';
import Biron from '../public/assert/heroes/biron.jpg'
import Chieu1 from '../public/assert/Biron/chieu1.jpeg'
import Chieu2 from '../public/assert/Biron/chieu2.jpg'
import Chieu3 from '../public/assert/Biron/chieu3.jpg'
import Noi_tai from '../public/assert/Biron/noi_tai.jpg'
import icon_biron from '../public/assert/Biron/biron-artwork-1.jpg'
import Image_biron from '../public/assert/Biron/biron-artwork.jpg'
import Yuji from '../public/assert/Biron/yuji.jpg'
import Yuji_icon from '../public/assert/Biron/yuji-icon.jpg'
import Vo_si from '../public/assert/Biron/vo_si.jpg'
import Vo_si_icon from '../public/assert/Biron/vo_si_icon.jpg'
import background_contact from '../public/assert/bg-collab-contact.jpg'
import Image from 'next/image';
const ContenntsFor1Hero = () => {
    const skills = [
        {
          id: 1,
          name: "Quyết chiến không lùi",
          icon: Noi_tai,
          description: ['Đòn đánh thường và chiêu chưa được cường hóa của Biron trúng địch sẽ nạp nội năng cho vũ khí của mình. Khi tích lũy >= 30 điểm, mỗi đòn đánh thường sẽ gây thêm sát thương vật lý và được hồi máu đồng thời chiêu thức sẽ nhận được hiệu ứng cường hóa khác nhau nhưng không thể nhận nội năng từ việc tấn công kẻ địch vào khi này.' 
            ,'Đòn đánh thường và chiêu thức trúng đích giúp hồi nội năng, tối đa có thể dự trữ 90 điểm']
        },
        {
          id: 2,
          name: "Điện chùy xuất kích",
          icon: Chieu1,
          description: ['Biron vung vũ khí về phía trước, mỗi lần gâysát thương vật lý và hồi máu cho bản thân.','Cường hóa: Tăng sát thương vật lý gây ra và tăng hồi máu Khi gây sát thương lên đơn vị không phải tướng, hiệu quả hồi máu giảm một nửa.']
        },
        {
            id: 3,
            name: "Đột kích vũ bão",
            icon: Chieu2,
            description: ['Biron xông thẳng về phía trước gây sát thương vật lý lên kẻ địch trên đường đi. Khi kết thúc sẽ cường hóa đòn đánh thường kế và gây sát thương vật lý cùng làm chậm tốc chạy của kẻ địch.'
                ,'Cường hóa: Khi sử dụng đòn đánh cường hóa nếu nội năng >30, Biron sẽ gây sát thương vật lý, hất tung và làm choáng kẻ địch bị đánh trúng đồng thời làm chậm tốc chạy của chúng tiếp 1 giây ngay sau đó.','Nếu nội năng nhiều khi tung đòn đánh cường hóa sẽ tiêu hao nội năng.']
          },
          {
            id: 4,
            name: "Trọng lực từ trường",
            icon: Chieu3,
            description: ['Biron đập vũ khí xuống mặt đất, gây sát thương vật lý và làm chậm tốc chạy của địch đồng thời tạo lá chắn cho bản thân.' 
                ,'Cường hóa: Tăng sát thương vật lý và lá chắn đồng thời tạo ra một lưới điện, gây sát thương vật lý cho đơn vị địch và cướp đoạt tốc chạt từ mỗi tướng địch cho bản thân Biron'
              ,'Phạm vi lưới điện sẽ tăng lên theo mỗi cấp chiêu 3']
          },
      ];
    
      const skins = [
        {
          id: 1,
          thumbnail: icon_biron,
          fullImage: Image_biron,
          name: 'Biron'
        },
        {
            id: 2,
            thumbnail: Yuji_icon,
            fullImage: Yuji,
            name: 'Biron Yuji Itadori'
          },
          {
            id: 3,
            thumbnail: Vo_si_icon,
            fullImage: Vo_si,
            name: 'Biron Võ sĩ Giác đấu'
          },
        // Thêm các skin khác
      ];
      const [selectedSkin, setSelectedSkin] = useState(skins[0]);
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
        <div className="p-4 flex items-center justify-center gap-8" style={{
            backgroundImage: `url(${background_contact.src})`,
            minHeight: '100px', maxWidth: '1300px'}}>
        <h1 className="text-6xl font-bold text-amber-500 ">{selectedSkin.name}</h1>
      </div>

    {/* Main skin display */}
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-gray-900">
      <Image
        src={selectedSkin.fullImage}
        alt={selectedSkin.name}
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Skins section */}
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-3 text-amber-500">Trang phục</h2>
      <div className="flex gap-3">
        {skins.map((skin) => (
          <button
            key={skin.id}
            onClick={() => setSelectedSkin(skin)}
            className={`relative w-24 h-24 rounded-lg overflow-hidden transition-all duration-200 
              ${selectedSkin.id === skin.id 
                ? 'ring-2 ring-amber-500 scale-105' 
                : 'hover:scale-105'}
              focus:outline-none focus:ring-2 focus:ring-amber-500/50`}
          >
            <Image
              src={skin.thumbnail}
              alt={skin.name}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
      {/* Skills section */}
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2 text-amber-500">Kỹ năng</h2>
      
      {/* Skill icons */}
      <div className="flex gap-4 mb-6">
        {skills.map((skill) => (
          <button
            key={skill.id}
            onClick={() => setSelectedSkill(skill)}
            className={`relative w-16 h-16 rounded-full transition-all duration-200
              ${selectedSkill.id === skill.id 
                ? 'ring-2 ring-amber-500 scale-105' 
                : 'ring-1 ring-gray-600 hover:ring-amber-500/50'}
              focus:outline-none focus:ring-2 focus:ring-amber-500`}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-cover rounded-full"
            />
          </button>
        ))}
      </div>

      {/* Skill details */}
      <div className="text-gray-100 space-y-3">
        <h3 className="text-xl font-bold text-amber-500">{selectedSkill.name}</h3>
        {selectedSkill.description.map((attr, idx) => (  
                    <p className="text-2xl" key={idx}> {attr}</p>  
        ))}  
        
      </div>
    </div>
  </div>
      
      
   
  );
};

export default ContenntsFor1Hero;