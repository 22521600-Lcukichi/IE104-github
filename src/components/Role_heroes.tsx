import React from 'react'
import Image from 'next/image';
import Dau_si from '../public/assert/dau-si.png'
import Sat_thu from '../public/assert/sat-thu.png'
import Xa_thu from '../public/assert/xa-thu.png'
import Phap_su from '../public/assert/phap-su.png'
import Tro_thu from '../public/assert/tro-thu.png'
import Do_don from '../public/assert/do-don.png'
type Role = {
    image: string;
    category: string; // 'Đấu sĩ' | 'Đỡ đòn' | 'Pháp sư' | etc.
  };
  const Roles: Role[] = [
    {
        image: Dau_si,
        category: "Đấu sĩ",
    },
    {
        image: Do_don,
        category: "Đỡ đòn",
    },
    {
        image: Phap_su,
        category: "Pháp sư",
    },
    {
        image: Sat_thu,
        category: "Sát thủ",
    },
    {
        image: Tro_thu,
        category: "Trợ thủ",
    },
    {
        image: Xa_thu,
        category: "Xạ thủ",
    },
  ]

export default function Role_heroes() {
  return (
    <div>
        <div className="flex gap-4">
            {Roles.map((role, index) => (
            <div key={index} className="flex items-center gap-4">
                {/* Hình ảnh */}
                <Image
                    src={role.image}
                    alt={role.category}
                    className="object-cover rounded-full"
                />
                {/* Danh mục */}
                <span className="text-white text-base font-medium">{role.category}</span>
            </div>
            ))}
        </div>
    </div>
  )
}