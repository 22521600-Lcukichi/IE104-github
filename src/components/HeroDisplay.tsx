"use client";
import React, { useState } from 'react';
import Image_icon1 from '../public/assert/krixi.png'
import Image1 from '../public/assert/Krixi-featured.jpg'
import icon_role_AP from '../public/assert/phap-su-2.png'
import Image_icon2 from '../public/assert/val-icon.jpg'
import Image2 from '../public/assert/Val.jpg'
import icon_role_AD from '../public/assert/xa-thu-2.png'
import Image from 'next/image';
import Image3 from '../public/assert/Aya.jpg'
import Image_icon3 from '../public/assert/aya-icon.jpg'
import icon_role_Support from '../public/assert/ho-tro-2.png'
import Image4 from '../public/assert/trieu-van.jpg'
import Image_icon4 from '../public/assert/tv-icon.jpg'
import icon_role_Warrior from '../public/assert/Warrior_Icon.png'
import Image5 from '../public/assert/arthur-featured.jpg'
import Image_icon5 from '../public/assert/arthur-icon.jpg'
import Button_Xemthem from './Button_Xemthem';
const heroes = {
  krixi: {
    id: 'krixi',
    name: 'Krixi',
    title: 'Tinh Linh Thiên Nhiên',
    position: 'Pháp sư, Cầu rìa',
    image: Image1,  // Placeholder với kích thước đúng
    image_icon: Image_icon1,
    Icon_role: icon_role_AP,
   
  },
  valhein: {
    id: 'valhein',
    name: 'Valhein',
    title: 'Thợ Săn Ác Quỷ',
    position: 'Xạ thủ',
    image: Image2,  // Placeholder với kích thước đúng
    image_icon: Image_icon2,
    Icon_role: icon_role_AD,
  },
  aya: {
    id: 'aya',
    name: 'Aya',
    title: 'Ca Sĩ Tinh Linh',
    position: 'Trợ thủ',
    image: Image3,  // Placeholder với kích thước đúng
    image_icon: Image_icon3,
    Icon_role: icon_role_Support,
  },
  trieu_van: {
    id: 'Triêu Vân',
    name: 'Triêu Vân',
    title: 'Kỵ Sĩ Rồng',
    position: 'Đấu sĩ',
    image: Image4,  // Placeholder với kích thước đúng
    image_icon: Image_icon4,
    Icon_role: icon_role_Warrior,
  },
  arthur: {
    id: 'Arthur',
    name: 'Arthur',
    title: 'Thanh Gươm Chính Nghĩa',
    position: 'Đấu sĩ',
    image: Image5,  // Placeholder với kích thước đúng
    image_icon: Image_icon5,
    Icon_role: icon_role_Warrior,
  },
};

const HeroShowcase = () => {
  const [selectedHero, setSelectedHero] = useState(heroes.krixi);

  return (
    <div className="min-h-screen bg-slate-900 p-6 ">
      <div className="max-w-[1920px] mx-auto"> {/* Tăng max-width của container chính */}
        {/* Hero Information Display */}
        <div className="bg-slate-800 text-white mb-6 rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Hero Image */}
              <div className="relative w-full h-[890px] bg-slate-700 rounded-lg overflow-hidden">
                <Image
                  src={selectedHero.image}
                  alt={selectedHero.name}
                  className="w-full h-full object-cover"
                />

                {/* Overlay thông tin hero - đặt lên trên hình ảnh */}
                <div className="absolute top-4 left-4 bg-gradient-to-t  to-transparent p-8">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-2 ">
                      {selectedHero.name}
                    </h1>
                    <h2 className="text-2xl text-white mb-4">
                      {selectedHero.title}
                    </h2>
                    <div className="bg-slate-800/80 p-4 rounded-lg mb-4">  
                        <div className="flex items-center">  
                            <Image  
                                src={selectedHero.Icon_role}  
                                alt=""  
                                width={40}   
                                height={40}  
                                className="object-contain"  
                            />  
                            <div className="ml-2">  
                                <h3 className="text-yellow-300 mb-1 text-lg font-semibold">Vị trí:</h3>  
                                <span className="text-white text-base font-medium">{selectedHero.position}</span>  
                            </div>  
                        </div>  
                    </div>
                    <div className="absolute top-50 left-0 bg-gradient-to-t  to-transparent p-8">
                        <Button_Xemthem href='/Gameplay/heroes' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Selection */}
        <div className="flex gap-4 justify-center">
          {Object.values(heroes).map((hero) => (
            <button
              key={hero.id}
              onClick={() => setSelectedHero(hero)}
              className={`relative w-auto h-auto rounded-full overflow-hidden transition-all ${
                selectedHero.id === hero.id
                  ? 'ring-4 ring-yellow-400'
                  : 'ring-2 ring-slate-600 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroShowcase;