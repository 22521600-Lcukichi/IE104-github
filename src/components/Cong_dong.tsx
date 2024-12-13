"use client";
import react, { useState } from 'react';  
import Slider from 'react-slick';  
import Image from 'next/image';
// Nhập các hình ảnh  
import aeonSlide1 from '../public/assert/cong_dong/Aeon/Honeyview_306620773_3322599658040334_7742883570371127804_n.jpg';  
import aeonSlide2 from '../public/assert/cong_dong/Aeon/Honeyview_Hinh-ngoai-cung.jpg';  
import icon_aeon from '../public/assert/cong_dong/Aeon/aeon1585-1.jpg'
import goSlide1 from '../public/assert/cong_dong/Go/Hinh-ngoai-cung.jpg';  
import goSlide2 from '../public/assert/cong_dong/Go/image003-8412-1667532674.jpg';  
import icon_go from '../public/assert/cong_dong/Go/608fcb033583f5621445dd9f_After_GO-1.png'

const slides = {  
  AEON: [aeonSlide1, aeonSlide2],  
  GO: [goSlide1, goSlide2],  
};  

const Cong_dong = () => {  
  const [currentSlider, setCurrentSlider] = useState('AEON');  

  const settings = {  
    dots: false,  
    infinite: true,  
    speed: 500,  
    slidesToShow: 1,  
    slidesToScroll: 1,  
  };  

  const handleSliderChange = (slider) => {  
    setCurrentSlider(slider);  
  };  

  return (  
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8 text-white ">  
     
     <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">TỔ CHỨC SỰ KIỆN CỘNG ĐỒNG</h1>  
        <div className="text-lg text-gray-500 text-center font-bold mb-6">
            <p>Đối tác địa điểm (TTTM, Khu tổ hợp,...) có nhu cầu tổ chức sự kiện Liên Quân tại nơi công cộng, tiếp cận</p>
            <p>tập khách hàng lớn.</p>
        </div>
      <Slider {...settings}>  
        {slides[currentSlider].map((slide, index) => (  
          <div key={index} className="relative">  
            <Image  
              src={slide}   
              className="w-full h-full "   
              alt={`Slide ${index + 1}`}   
            />  
          </div>  
        ))}  
      </Slider>  
      <div className="text-center">  
        <h2>{currentSlider === 'AEON' ? "Giải sinh viên tại AEON Mall Bình Tân" : "Sinh nhật Liên Quân tại chuỗi GO! Mall"}</h2>  
      </div>  
      <div className="flex justify-center mb-4">  
        
            <button  
                className="p-2 rounded flex items-center mr-1" // 1px khoảng cách  
                onClick={() => handleSliderChange('AEON')}  
            >  
                <Image  
                src={icon_aeon}  
                alt="AEON"  
                className="w-32 h-32 object-contain"  
                />  
            </button>  

            <button  
                className="p-2 rounded flex items-center"   
                onClick={() => handleSliderChange('GO')}  
            >  
                <Image  
                src={icon_go}  
                alt="GO"  
                className="w-32 h-32 object-contain"  
                />  
            </button>  
      </div>  
    </div>  
  );  
};  

export default Cong_dong;