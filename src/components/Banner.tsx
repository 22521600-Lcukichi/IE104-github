"use client";

import React from 'react'
import Slider from "react-slick";
import Slide from './Slide';
import banner1 from '../public/assert/1920x350_thumb-trang-chu.jpg'
import banner2 from '../public/assert/IMG-HOR-1920x0350-003855-1920x350-1.jpg'
export default function Banner() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  ]
  return (
    <div>
      <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
           {Slidedata.map((item) => (
           <Slide 
              key={item.id}
              img={item.img}
           />
          ))}
        </Slider>
      </div>
    </div>
  )
}
