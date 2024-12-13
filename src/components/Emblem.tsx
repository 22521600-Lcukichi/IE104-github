"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import qua_cau_bang_suong from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/icon-badge.png'
import sieu_hoi_mau from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/sieu_hoi_mau.png'
import Mat_ngu from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/mat_ngu.png'
import Uy_ap from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/Uy_ap.png'
import Tho_san from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/Tho_san.png'
import Chuyen_sinh from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/Chuyen_sinh.png'
import Luyen_kim from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/Luyen_kim.png'
import thanh_khoi_nguyen from '../public/assert/Phu_hieu/Thanh_Khoi_Nguyen/thanh_khoi_nguyen.png'
import Thap_quang_minh from '../public/assert/Phu_hieu/Thap_Quang_Minh/thap_quang_minh.png'
import Thanh_chau from '../public/assert/Phu_hieu/Thap_Quang_Minh/thanh_chau.png'
import sung_man from '../public/assert/Phu_hieu/Thap_Quang_Minh/sung_man.png'
import tuong_phan from '../public/assert/Phu_hieu/Thap_Quang_Minh/tuong_phan.png'
import xuyen_tam from '../public/assert/Phu_hieu/Thap_Quang_Minh/xuyen_tam.png'
import bi_quyet from '../public/assert/Phu_hieu/Thap_Quang_Minh/bi_quyet.png'
import thanh_thuan from '../public/assert/Phu_hieu/Thap_Quang_Minh/thanh_thuan.png'
import than_quan from '../public/assert/Phu_hieu/Thap_Quang_Minh/than_quang.png'
import Tinh_linh from '../public/assert/Phu_hieu/Thap_Quang_Minh/tinh_linh.png'
import vuc_hon_mang from '../public/assert/Phu_hieu/Vuc_hon_mang/vuc_hon_mang.png'
import ma_hoa from '../public/assert/Phu_hieu/Vuc_hon_mang/ma_hoa.png'
import du_anh from '../public/assert/Phu_hieu/Vuc_hon_mang/du_anh.png'
import hap_huyet from '../public/assert/Phu_hieu/Vuc_hon_mang/hap_huyet.png'
import co_thu from '../public/assert/Phu_hieu/Vuc_hon_mang/co_thu.png'
import cuong_cong from '../public/assert/Phu_hieu/Vuc_hon_mang/cuong_cong.png'
import ma_tinh from '../public/assert/Phu_hieu/Vuc_hon_mang/ma_tinh.png'
import ma_chu from '../public/assert/Phu_hieu/Vuc_hon_mang/ma_chu.png'
import dau_khi from '../public/assert/Phu_hieu/Vuc_hon_mang/dau_khi.png'
import Rung_nguyen_sinh from '../public/assert/Phu_hieu/Rung_nguyen_sinh/rung_nguyen_sinh.png'
import canh_gac from '../public/assert/Phu_hieu/Rung_nguyen_sinh/canh_gac.png'
import am_kich from '../public/assert/Phu_hieu/Rung_nguyen_sinh/am_kich.png'
import Nhay_ben from '../public/assert/Phu_hieu/Rung_nguyen_sinh/nhay_ben.png'
import Sinh_ton from '../public/assert/Phu_hieu/Rung_nguyen_sinh/sinh_ton.png'
import Bom_mau from '../public/assert/Phu_hieu/Rung_nguyen_sinh/bom_mau.png'
import Du_hiep from '../public/assert/Phu_hieu/Rung_nguyen_sinh/du_hiep.png'
import Moc_giap from '../public/assert/Phu_hieu/Rung_nguyen_sinh/moc_giap.png'
import Troi_buoc from '../public/assert/Phu_hieu/Rung_nguyen_sinh/troi_buoc.png'




const emblems = [
      {
      name: 'THÀNH KHỞI NGUYÊN',
      description: 'Thích hợp: Tất cả các dạng tướng',
      subDescription: 'Có năng lực sáng tạo và khoa học kỹ thuật bậc nhất.',
      backgroundColor: 'bg-gradient-to-r from-blue-900 to-black',
      textColor: 'text-blue-400',
      text_subtitle: 'text-blue-400',
      image: thanh_khoi_nguyen,
      skills_level_1: [
       {
          name: 'Quả cầu băng sương',
          description:'Sau khi trận đấu bắt đầu 4 phút, bạn sẽ nhận được Quả cầu băng sương. Sau khi sử dụng sẽ được miễn sát thương nhưng không thể công kích, di chuyển và khi kết thúc sẽ nhận được lá chắn, chỉ dùng 1 lần.',
          icon: qua_cau_bang_suong, 
          title: 'Kích hoạt',
          subtitle: 'Thành khởi nguyên',
        },
        {
          name: 'Siêu hồi máu',
          description:'Đổi Hồi máu thành Siêu hồi máu, giúp hồi nhiều máu và năng lượng hơn.',
          icon: sieu_hoi_mau, 
          title: 'Bảo mệnh',
          subtitle: 'Thành khởi nguyên',
        },
        {
          name: 'Mật ngữ',
          description: 'Phụ trợ giảm hồi chiêu.',
          icon: Mat_ngu, 
          title: 'Giảm hồi chiêu',
          subtitle: 'Thành khởi nguyên',
        },
      ],
      skills_level_2:[
          {
          name: 'Uy áp',
          description: 'Sau khi tung chiêu hoặc đòn đánh thường vào lính, lính sẽ bị diệt.',
          icon: Uy_ap, 
          title: 'Dọn lính',
          subtitle: 'Thành khởi nguyên',
        },
        {
          name: 'Thợ săn',
          description: 'Mỗi lần hạ hoặc phụ hạ tướng địch sẽ nhận cộng dồn vật lý và công phép.',
          icon: Tho_san, 
          title: 'Hạ giúp tăng sát thương',
          subtitle: 'Thành khởi nguyên',
        },
      ],
      skills_level_3:[
       {
        name: 'Uy áp',
        description: 'Sau khi tử vong sẽ nhận được phù hiệu “Hồi sinh”. Sau khi sử dụng sẽ giúp hồi sinh trong tế đàn. Thời gian hồi chiêu của “Hồi sinh” mỗi lần sẽ tăng lên.',
        icon: Chuyen_sinh,
        title: 'Đầu thai',
        subtitle: 'Thành khởi nguyên',
      },
      {
        name: 'Luyện kim',
        description: 'Chiêu/Đánh thường trúng tướng địch hoặc trụ sẽ được nhân thêm vàng, liên tiếp đánh trúng sẽ nhận thêm lợi ích.',
        icon: Luyen_kim, 
        title: 'Phát triển',
        subtitle: 'Thành khởi nguyên',
      },
      ],
  },
  {
    name: 'THÀNH QUANG MINH',
    description: 'Thích hợp: Xạ thủ, Pháp sư',
    subDescription: 'Đã trải qua Thánh quang tẩy lễ',
    backgroundColor: 'bg-gradient-to-r from-yellow-900 to-black',
    textColor: 'text-yellow-400',
    text_subtitle: 'text-yellow-400',
    image: Thap_quang_minh,
    skills_level_1: [
      {
        name: 'Thánh châu',
        description:'Chiêu cuối được giảm thời gian hồi chiêu thêm 10% (nhưng không được vượt quá 40% tối đa)',
        icon: Thanh_chau, 
        title: 'Hồi chiêu',
        subtitle: 'Tháp quang minh',
      },
       {
        name: 'Sung mãn',
        description:'Tung chiêu hoặc đánh thường trúng tướng địch sẽ được hồi tỷ lệ năng lượng tối đa.',
        icon: sung_man, 
        title: 'Hồi năng lượng',
        subtitle: 'Vực hỗn mang',
      },
      {
        name: 'Tương phản',
        description: 'Sát thương gây ra cho tướng địch được tăng nhưng sát thương phải chịu cũng tăng lên.',
        icon: tuong_phan, 
        title: 'Tăng sát thương',
        subtitle: 'Tháp quang minh',
      },
    ],
    skills_level_2:[
       {
        name: 'Xuyên tâm',
        description: 'Nhận thêm xuyên giáp và xuyên giáp phép mỗi cấp.',
        icon: xuyen_tam, 
        title: 'Xuyên',
        subtitle: 'Tháp quang minh',
      },
      {
        name: 'Bí quyết',
        description: 'Nhận được thêm chí mạng và công phép từ trang bị.',
        icon: bi_quyet, 
        title: 'Tăng sát thương chí mạng',
        subtitle: 'Tháp quang minh',
      },
    ],
    skills_level_3:[
      {
      name: 'Thánh thuẫn',
      description: 'Sau khi chịu sát thương sẽ nhận được lá chắn và hút máu phép.',
      icon: thanh_thuan,
      title: 'Phòng ngự',
      subtitle: 'Tháp quang minh',
    },
    {
      name: 'Thần quang',
      description: 'Tung chiêu hoặc đánh thường lần đầu tiên trúng tướng địch sẽ tạo thành sát thương sấm sét.',
      icon: than_quan, 
      title: 'Tăng sát thương',
      subtitle: 'Tháp quang minh',
    },
    {
      name: 'Tinh linh',
      description: 'Đòn đánh thường thứ 3 liên tiếp trúng một tướng địch sẽ nhận được một vòng sát tiểu thiên thần quanh cơ thể. Tiểu thiên thần sẽ tự động công kích kẻ địch.',
      icon: Tinh_linh, 
      title: 'Tăng sát thương',
      subtitle: 'Tháp quang minh',
    },
    ],
  },
  {
    name: 'VỰC HỖN MANG',
    description: 'Thích hợp: Đấu sỹ, Sát thủ',
    subDescription: 'Gồm các lĩnh chủ Vực hỗn mang',
    backgroundColor: 'bg-gradient-to-r from-red-900 to-black',
    textColor: 'text-red-400',
    text_subtitle: 'text-red-400',
    image: vuc_hon_mang,
    skills_level_1: [
      {
        name: 'Ma hỏa',
        description:'Đánh thường và tung chiêu sẽ gây thêm sát thương lên tướng địch.',
        icon: ma_hoa, 
        title: 'Tăng sát thương',
        subtitle: 'Vực hỗn mang',
      },
       {
        name: 'Dư ảnh',
        description:'Mỗi khi dùng lướt sẽ nhận cộng dồn trong 2 giây, tối đa 3 cộng dồn Dư ảnh. Đòn đánh thường sau đó sẽ tiêu hao toàn bộ Dư ảnh để gây sát thương.',
        icon: du_anh, 
        title: 'Lướt tăng sát thương',
        subtitle: 'Vực hỗn mang',
      },
      {
        name: 'Hấp huyết',
        description: 'Hạ hoặc phụ hạ sẽ được hồi máu đã mất và năng lượng.',
        icon: hap_huyet, 
        title: 'Hồi phục',
        subtitle: 'Vực hỗn mang',
      },
    ],
    skills_level_2:[
      {
        name: 'Cố thủ',
        description: 'Nhận thêm kháng hiệu ứng.',
        icon: co_thu, 
        title: 'Kháng hiệu ứng',
        subtitle: 'Vực hỗn mang',
      },
       {
        name: 'Cường công',
        description: 'Nhận thêm công vật lý và công phép.',
        icon: cuong_cong, 
        title: 'Tăng sát thương',
        subtitle: 'Vực hỗn mang',
      },
     
    ],
    skills_level_3:[
      {
        name: 'Ma tính',
        description: 'Sau khi tung chiêu cuối, lập tức giảm mạnh thời gian hồi các chiêu khác. Hạ hoặc phụ hạ sẽ kéo dài thời gian hiệu ứng.',
        icon: ma_tinh, 
        title: 'Giảm hồi chiêu',
        subtitle: 'Vực hỗn mang',
    },
    {
      name: 'Ma chú',
      description: 'Tung chiêu hoặc đánh thường lần đầu tiên trúng tướng địch sẽ tạo thành sát thương sấm sét.',
      icon: ma_chu, 
      title: 'Sát thương chí mạng',
      subtitle: 'Vực hỗn mang',
    },
    {
      name: 'Đấu khí',
      description: 'Gây sát thương lên tướng địch sẽ cộng dồn. Đủ 10 cộng dồn sẽ kích hoạt giúp bản thân hồi máu và tăng xuyên giáp.',
      icon: dau_khi, 
      title: 'Sát thương kéo dài',
      subtitle: 'Vực hỗn mang',
    },
    ],
  },
  {
    name: 'RỪNG NGUYÊN SINH',
    description: 'Thích hợp: Hỗ trợ, Đỡ đòn',
    subDescription: 'Được bảo vệ bởi sức mạnh rừng sâu',
    backgroundColor: 'bg-gradient-to-r from-green-900 to-black',
    textColor: 'text-green-400',
    text_subtitle: 'text-green-400',
    image: Rung_nguyen_sinh,
    skills_level_1: [
      {
        name: 'Canh gác',
        description:'Khi đứng gần trụ, bản thân sẽ được nhận kháng hiệu ứng và miễn thương',
        icon: canh_gac, 
        title: 'Phòng ngự',
        subtitle: 'Rừng nguyên sinh',
      },
       {
        name: 'Ám kích',
        description:'Ở trong bụi cỏ tung đòn đánh thường sẽ cộng thêm sát thương chuẩn',
        icon: am_kich, 
        title: 'Tăng sát thương',
        subtitle: 'Rừng nguyên sinh',
      },
      {
        name: 'Nhạy bén',
        description: 'Sau khi tử vong sẽ nhận được phù hiệu “Hồi sinh”. Sau khi sử dụng sẽ hồi sinh trong tế đàn. “Hồi sinh” càng về sau càng tăng thêm thời gian hồi chiêu.',
        icon: Nhay_ben, 
        title: 'Chạy sông',
        subtitle: 'Rừng nguyên sinh',
      },
    ],
    skills_level_2:[
       {
        name: 'Sinh tồn',
        description: 'Chiêu/Đánh thường trúng tướng địch hoặc trụ sẽ được nhân thêm vàng, liên tiếp đánh trúng sẽ nhận thêm lợi ích.',
        icon: Sinh_ton, 
        title: 'Lượng máu',
        subtitle: 'Rừng nguyên sinh',
      },
      {
        name: 'Bơm máu',
        description: 'Hiệu quả hồi máu và lá chắn của bản thân tăng thêm',
        icon: Bom_mau, 
        title: 'Hồi máu',
        subtitle: 'Rừng nguyên sinh',
      },
    ],
    skills_level_3:[
      {
      name: 'Du hiệp',
      description: 'Rời khỏi giao tranh, đòn đánh thường kế tiếp sẽ giảm sát thương địch và làm chậm địch',
      icon: Du_hiep,
      title: 'Giao tranh',
      subtitle: 'Rừng nguyên sinh',
    },
    {
      name: 'Mộc giáp',
      description: 'Gánh chịu sát thương sẽ cộng dồn, đủ lần sẽ gây nổ sát thương phép và hồi máu nếu đánh trúng tướng',
      icon: Moc_giap, 
      title: 'Phòng ngự',
      subtitle: 'Rừng nguyên sinh',
    },
    {
      name: 'Trói buộc',
      description: 'Khi tung chiêu khống chế trúng tướng địch sẽ giúp bản thân tăng giáp và giáp phép, đồng thời nhận hiệu quả thiêu đốt tính theo tỷ lệ lượng máu tối đa',
      icon: Troi_buoc, 
      title: 'Sát thương khống chế',
      subtitle: 'Rừng nguyên sinh',
    },
    ],
  },
];
export default function EmblemInterface() {
  // Keep track of selected skills for each emblem
  const [selectedSkills, setSelectedSkills] = useState({});
  const [selectedEmblem, setSelectedEmblem] = useState(emblems[0]);

  const handleSkillClick = (emblemName, skill) => {
    setSelectedSkills(prev => ({
      ...prev,
      [emblemName]: skill
    }));
  };

  const renderSkillGroup = (skills, emblemName, textColor) => (
    <div className="flex gap-4 items-center">
      {skills.map((skill) => {
        const isSelected = selectedSkills[emblemName]?.name === skill.name;
        return (
          <div
            key={skill.name}
            onClick={() => handleSkillClick(emblemName, skill)}
            className={`cursor-pointer transition-all ${
              isSelected ? 'scale-110' : 'hover:opacity-80'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden ${
                isSelected ? 'border-4 border-blue-400' : 'border-2 border-blue-700'
              }`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={skill.icon} alt={skill.name} />
              </div>
            </div>
            <div
              className={`text-xs text-center mt-1 ${
                isSelected ? textColor : 'text-gray-400'
              }`}
            >
              {skill.name}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full p-6 flex flex-col gap-6">
      {emblems.map((emblem) => {
        const selectedSkill = selectedSkills[emblem.name];
        
        return (
          <div key={emblem.name} className={`flex w-full min-h-[500px] p-6 rounded-lg ${
            emblem.backgroundColor
          }`} >
            {/* Left Section */}
            <div className="flex-1 flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-4">
                <Image src={emblem.image} alt=''/>
                <div>
                  <h2 className={`text-2xl font-semibold ${emblem.textColor}`}>{emblem.name}</h2>
                  <p className="text-gray-400">{emblem.description}</p>
                  <p className="text-gray-400 text-sm">{emblem.subDescription}</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="flex flex-col gap-8">
                <div>
                  
                  {renderSkillGroup(emblem.skills_level_1, emblem.name, emblem.textColor)}
                </div>

                <div>
                  
                  {renderSkillGroup(emblem.skills_level_2, emblem.name, emblem.textColor)}
                </div>

                <div>
                  
                  {renderSkillGroup(emblem.skills_level_3, emblem.name, emblem.textColor)}
                </div>
              </div>
            </div>

            {/* Right Section - Skill Details */}
            {selectedSkill && (
              <div className="w-80 ml-6 p-4  rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center border-2 border-blue-700`}>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Image src={selectedSkill.icon} alt=""/>
                    </div>
                  </div>
                  <div>
                    <div className="text-white">{selectedSkill.title}</div>
                    <div className={`text-sm ${emblem.text_subtitle}`}>{selectedSkill.subtitle}</div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-white">{selectedSkill.name}</h3>
                <div className="w-full h-px bg-gray-600 my-2"></div>
                <p className="text-gray-300">{selectedSkill.description}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}