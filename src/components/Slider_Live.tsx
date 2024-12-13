"use client";
import React from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import Slide from './Slide';
import Banner1 from '../public/assert/phat_song/304987162_3320739651559668_8725463593370712924_n-1.jpg'
import Banner2 from '../public/assert/phat_song/455x315.jpg'
import Banner3 from '../public/assert/phat_song/MyTV.jpeg'
import Banner4 from '../public/assert/phat_song/hq720_2-1.jpg'
export default function Slider_Live() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        pauseOnHover: false,
      };
      const Slidedata = [
        {
          id:0,
          img: Banner1,
        },
        {
          id:1,
          img: Banner2,
        },
        {
            id:0,
            img: Banner3,
        },
        {
            id:1,
            img: Banner4,
        },
      ]

  return (
    <div className="bg-gradient-to-b from-purple-950 to-indigo-900 p-8">
        <h1 className="text-4xl text-yellow-500 font-bold text-center mb-4">Phát sóng giải đấu</h1>  
        <div className="text-lg text-gray-500 text-center font-bold mb-6">
            <p>Đối tác mua bản quyền phát sóng giải đấu và khai thác thương mại từ chương trình</p>
        </div>

       <div>
            <div className="container pt-6 lg:pt-0">
            <Slider {...settings}>
                {Slidedata.map((item) => (
                    <div 
                    key={item.id} 
                    className="w-[440px] h-[199px] flex items-center justify-center overflow-hidden"
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
        </div>
          
    </div>
  )
}