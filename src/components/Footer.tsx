// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../public/assert/icon-facebook.png'
import Youtube from '../public/assert/icon-youtube.png'
import Tiktok from '../public/assert/icon-tiktok.png'
import Instargram from '../public/assert/icon-instagram.png'
import VietNam_Easports from '../public/assert/logo-1.png'
import Garena from '../public/assert/logo-2.png'
import Timi from '../public/assert/logo-3.png'
import Tencent from '../public/assert/logo-4.png'
export default function Footer() {
  const socialLinks = [
    { href: "#", icon: Facebook, alt: "Facebook" },
    { href: "#", icon: Youtube, alt: "Youtube" },
    { href: "#", icon: Tiktok, alt: "Tiktok" },
    { href: "#", icon: Instargram, alt: "Instagram" },
  ];

  const partners = [
    { src: VietNam_Easports, alt: "Vietnam Esports" },
    { src: Garena, alt: "Garena" },
    { src: Timi, alt: "TiMi" },
    { src: Tencent, alt: "Tencent Games" },
  ];

  const links = [
    { href: "#", text: "Điều khoản dịch vụ" },
    { href: "#", text: "Chính sách bảo mật" },
    { href: "#", text: "Chính sách giải quyết tranh chấp" },
  ];

  return (
    <footer className="bg-[#1A1C1E] text-gray-300 py-10">
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 mb-8">
        {socialLinks.map((social, index) => (
          <Link 
            key={index} 
            href={social.href}
          >
            <Image
              src={social.icon}
              alt={social.alt}
              width={40}
              height={40}
            />
          </Link>
        ))}
      </div>

      {/* Partner Logos */}
      <div className="flex justify-center items-center gap-8 mb-8">
        {partners.map((partner, index) => (
          <div key={index} className="relative w-32 h-12">
            <Image
              src={partner.src}
              alt={partner.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>

      {/* Company Name */}
      <div className="text-center mb-4">
        <h2 className="text-[#C4B998] text-xl font-medium">
          CÔNG TY CỔ PHẦN GIẢI TRÍ VÀ THỂ THAO ĐIỆN TỬ VIỆT NAM
        </h2>
      </div>

      {/* Company Information */}
      <div className="text-center text-sm space-y-2 mb-6 text-gray-400">
        <p>GIẤY CNĐKKD SỐ 0105301438, CẤP LẦN ĐẦU NGÀY 10/05/2011, CƠ QUAN CẤP: PHÒNG ĐĂNG KÝ KINH DOANH – SỞ KẾ HOẠCH VÀ ĐẦU TƯ TP HÀ NỘI.</p>
        <p>ĐỊA CHỈ: TẦNG 6, TÒA NHÀ CAPITAL PLACE, SỐ 29 ĐƯỜNG LIỄU GIAI, PHƯỜNG CỐNG VỊ, QUẬN BA ĐÌNH, TP HÀ NỘI.</p>
        <p>ĐIỆN THOẠI: 024 7305 9939</p>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center gap-4 text-[#4A90E2] text-sm">
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <Link href={link.href} className="hover:underline">
              {link.text}
            </Link>
            {index < links.length - 1 && <span className="text-gray-300">•</span>}
          </React.Fragment>
        ))}
      </div>
    </footer>
  );
}