import React from 'react'
import logo from '../public/assert/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
import SearchBar from './Searchbar';
type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[]
}

const NavItems: NavItem[] = 
[
  {
    label: "TRANG CHỦ",
    link: '/',
  },
  {
    label: "GAMEPLAY",
    link: '/Gameplay/heroes',
    children: [
      {
        label: "Tướng/skin",
        link: '/Gameplay/heroes',
      },
      {
        label: "Trang bị",
        link: '/Gameplay/equipment',
      },
      {
        label: "Bảng ngọc",
        link: '/Gameplay/rune',
      },
      {
        label: "Phụ trợ",
        link: '/Gameplay/support',
      },
      {
        label: "Phù hiệu",
        link: '/Gameplay/emblem',
      },
      {
        label: "Chế độ chơi",
        link: '/Gameplay/gamemode',
      },
    ]
  },
  {
    label: "TIN TỨC",
    link: '/news/all',
    children: [
      {
        label: "Cập nhập",
        link: '/news/update',
      },
      {
        label: "Sự kiện",
        link: '/news/events',
      },
      {
        label: "Mở bán",
        link: '/news/sale',
      },
      {
        label: "Hợp tác",
        link: '/news/cooperation',
      },
      {
        label: "Giải đấu",
        link: '/news/competition',
      },
    ]
  },

  {
    label: "HỢP TÁC",
    link: '/cooperation',
  },
]
export default function Navbar() {
  return (
   <div  className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-lg ">
      {/*Left side*/}
      <section  className="flex items-center gap-10 ">
          <Image src={logo} alt ="logo" 
            width={120}
            height={10}
          />
          <div className="hidden md:flex items-center gap-4 transition-all">
          {NavItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-white group-hover:text-yellow-300">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute z-50 left-1/2 top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-black py-3 shadow-md  transition-all transform -translate-x-1/2 group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-white hover:text-yellow-300  "
                    >
                      
                      {/* item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
          </div>
      </section>
        {/* right side data */}
        <section className=" hidden md:flex   items-center gap-8">
              <SearchBar placeholder="Nhập từ khóa tìm kiếm" /> 
        </section>

   </div>
  )
}