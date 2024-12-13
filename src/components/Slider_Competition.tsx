"use client";
import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';
import banner1 from '../public/assert/Slider_Cooperation/2710-CCD-11-min.png'
import banner2 from '../public/assert/Slider_Cooperation/AOGW24_101412-min-scaled.jpg'
import banner3 from '../public/assert/Slider_Cooperation/AOGW24_123617-min-scaled.jpg'
import banner4 from '../public/assert/Slider_Cooperation/AOGW24_180728-min-scaled-e1730866331807.jpg'
import banner5 from '../public/assert/Slider_Cooperation/gallery.jpg'
import banner6 from '../public/assert/Slider_Cooperation/gallery-2.jpg'
import banner7 from '../public/assert/Slider_Cooperation/Honeyview_Honeyview_1.jpg'
import banner8 from '../public/assert/Slider_Cooperation/Honeyview_Honeyview_6-1.jpg'
import banner9 from '../public/assert/Slider_Cooperation/Honeyview_Honeyview_7.jpg'
import banner10 from '../public/assert/Slider_Cooperation/Honeyview_Honeyview_8.jpg'
import Image from 'next/image';



export default function Slider_Competition() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true,
        pauseOnHover: false,
      };
      const Slidedata = [
        {
          id:0,
          img: banner1,
        },
        {
          id:1,
          img: banner2,
        },
        {
            id:0,
            img: banner3,
        },
          {
            id:1,
            img: banner4,
          },
          {
            id:0,
            img: banner5,
          },
          {
            id:1,
            img: banner6,
          },
          {
            id:0,
            img: banner7,
          },
          {
            id:1,
            img: banner8,
          },
          {
            id:0,
            img: banner9,
          },
          {
            id:1,
            img: banner10,
          },

      ]
      return (
        <div>
          <div className="container pt-6 lg:pt-0">
          <Slider {...settings}>
            {Slidedata.map((item) => (
                <div 
                key={item.id} 
                className="w-[428px] h-[199px] flex items-center justify-center overflow-hidden"
                >
                <Image 
                    src={item.img} 
                    alt={`Slide ${item.id}`} 
                    className="w-full h-full object-cover" 
                />
                </div>
            ))}
           </Slider>
          </div>
          <p className="text-sm text-gray-400 text-center mt-6 italic">  
            *Hình ảnh từ các giải đấu trước đây, điều chỉnh thay đổi theo từng gói tài trợ mỗi mùa giải  
          </p>  
        </div>
      )
}