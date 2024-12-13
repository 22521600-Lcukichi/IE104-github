import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import new1 from '../public/assert/IMG-HOR-0860x0400-002080-3-428x199.jpg'
import new2 from '../public/assert/IMG-HOR-0860x0400-003854-860x400-1-428x199.jpg'
import new3 from '../public/assert/SeaTalk_IMG_20241105_115945-428x199.png'
import new4 from '../public/assert/SeaTalk_IMG_20241120_183935-428x199.png'
export default function NewList() {
  return (
    <div className="mt-5 flex gap-x-3  justify-between w-full">
        <Link
          href="#"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
        >
          <div className="relative w-full h-40">
            <Image
              src={new1}
              alt=""
              fill
              sizes="25vw"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="mt-1">
            <span className="block font-medium text-sm  text-yellow-300">20.11.2024</span>
            <span className="block font-medium mt-0 text-white ">TỔNG HỢP SỰ KIỆN (25.11 – 01.12)</span>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
        >
          <div className="relative w-full h-40">
            <Image
              src={new2}
              alt=""
              fill
              sizes="25vw"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="mt-1 ">
            <span className="block font-medium text-sm text-yellow-300">20.11.2024</span>
            <span className="block font-medium mt-0  text-white">ĐIỀU CHỈNH CÂN BẰNG PB MỪNG SINH NHẬT LIÊN QUÂN 8 TUỔI – 28.11</span>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
        >
          <div className="relative w-full h-40">
            <Image
              src={new3}
              alt=""
              fill
              sizes="10vw"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="mt-1">
            <span className="block font-medium text-sm  text-yellow-300">20.11.2024</span>
            <span className="block font-medium mt-0  text-white ">BRING IT ON: ARENA OF VALOR INTERNATIONAL CHAMPIONSHIP 2024 SẼ ĐƯỢC TỔ CHỨC TỪ 30/11 TỚI 29/12</span>
          </div>
        </Link>
        <Link
          href="#"
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[30%]"
        >
          <div className="relative w-full h-40">
            <Image
              src={new4}
              alt=""
              fill
              sizes="10vw"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="mt-1">
            <span className="block font-medium text-sm  text-yellow-300">20.11.2024</span>
            <span className="block font-medium mt-0  text-white">SỰ KIỆN KHAI MỞ CHIẾN TRƯỜNG – NHẬN RƯƠNG QUÀ XỊN</span>
          </div>
        </Link>
    </div>

 
  )
} 