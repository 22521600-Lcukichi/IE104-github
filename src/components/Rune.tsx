import React from 'react'
import Image from 'next/image'
import CongPhep_Red_III from '../public/assert/Ngoc/Red/Level3/phep3.png'
import Congvatly_Red_III from '../public/assert/Ngoc/Red/level3/vat_ly3.png'
import ChiMang_Red_III from '../public/assert/Ngoc/Red/level3/chi_mang3.png'
import TocDanh_Red_III from '../public/assert/Ngoc/Red/Level3/toc_danh3.png'
import CongPhep_Red_II from '../public/assert/Ngoc/Red/Level2/phep2.png'
import Congvatly_Red_II from '../public/assert/Ngoc/Red/Level2/vat_ly2.png'
import ChiMang_Red_II from '../public/assert/Ngoc/Red/Level2/chi_mang2.png'
import TocDanh_Red_II from '../public/assert/Ngoc/Red/Level2/toc_danh2.png'
import CongPhep_Red_I from '../public/assert/Ngoc/Red/Level1/phep1.png'
import Congvatly_Red_I from '../public/assert/Ngoc/Red/Level1/vat_ly1.png'
import ChiMang_Red_I from '../public/assert/Ngoc/Red/Level1/chi_mang1.png'
import TocDanh_Red_I from '../public/assert/Ngoc/Red/Level1/toc_danh1.png'

type Props = {}
const items = [
    {
        image: CongPhep_Red_III,  
        title: 'Đỏ III Công phép',  
        attributes: ['Công phép +5.3'],  
    },
    {
        image: Congvatly_Red_III,  
        title: 'Đỏ III Công Vật lý',  
        attributes: ['Công vật lý +3.2', 'Xuyên giáp +3.6'],  
    },
    {
        image:  Congvatly_Red_III,  
        title: 'Đỏ III Công vật lý/Xuyên giáp',  
        attributes: ['Công vật lý +2', 'Xuyên giáp +3.6'],  
    },
    {
        image:  Congvatly_Red_III,  
        title: 'Đỏ III Công vật lý/Hút máu', 
        attributes: ['Công phép +2.5','Hút máu +0.5%'],  
    },
    {
        image: ChiMang_Red_III,  
        title: 'Đỏ III Tỉ lệ chí mạng/Sát thương chí mạng',  
        attributes: ['Tỷ lệ chí mạng +0.7%','Sát thương chí mạng +3.6%'],  
    },
    {
        image: CongPhep_Red_III,  
        title: 'Đỏ III Công phép/Xuyên thủ phép',  
        attributes: ['Công phép +4.2','Xuyên giáp phép +2.4'],  
    },
    {
        image: CongPhep_Red_III,  
        title: 'Đỏ III Công phép/Tốc đánh',  
        attributes: ['Công phép +4.2','Tốc đánh +0.6%'],  
    },
    {
        image: ChiMang_Red_III,  
        title: 'Đỏ III Tỉ lệ chí mạng',  
        attributes: ['Tỷ lệ chí mạng +1.6%'],  
    },
    {
        image: TocDanh_Red_III,  
        title: 'Đỏ III Tốc đánh/Tỉ lệ chí mạng',  
        attributes: ['Tốc đánh +1.6%','Tỷ lệ chí mạng +0.5%'],  
    },
    {
        image: TocDanh_Red_III,  
        title: 'Đỏ III Tốc đánh/Máu/Giáp',  
        attributes: ['Tốc đánh +1%','Máu tối đa +33.7','Giáp +2.3'],  
    },
    {
        image: Congvatly_Red_II,  
        title: 'Đỏ II Công vật lý/Xuyên giáp',  
        attributes: ['Công vật lý +1.3','Xuyên giáp +2.3'],  
    },
    {
        image: Congvatly_Red_II,  
        title: 'Đỏ II Công vật lý',  
        attributes: ['Đỏ II Công vật lý +2'],  
    },
    {
        image: ChiMang_Red_II,  
        title: 'Đỏ II Tốc đánh/Tỷ lệ chí mạng',  
        attributes: ['Tốc đánh +1%','Tốc đánh +1%'],  
    },
    {
        image: CongPhep_Red_II,  
        title: 'Đỏ II Công phép/Xuyên giáp phép',  
        attributes: ['Công phép +2.6','Xuyên giáp phép +1.5%'],  
    },
    {
        image: CongPhep_Red_II,  
        title: 'Đỏ II Công phép',  
        attributes: ['Công phép +3.3'],  
    },
    {
        image: ChiMang_Red_II,  
        title: 'Đỏ II Tỉ lệ chí mạng',  
        attributes: ['Tỷ lệ chí mạng +1%'],  
    },
    {
        image: ChiMang_Red_II,  
        title: 'Đỏ II Tỉ lệ chí mạng/Sát thương chí mạng',  
        attributes: ['Tỷ lệ chí mạng +0.4%','Sát thương chí mạng +2.3%'],  
    },
    {
        image: CongPhep_Red_II,  
        title: 'Đỏ II Công phép/Tốc đánh',  
        attributes: ['Công phép +2.6','Tốc đánh +0.4%'],  
    },
    {
        image: Congvatly_Red_II,  
        title: 'Đỏ II Công vật lý/Hút máu',  
        attributes: ['Công vật lý +1.6','Hút máu +0.3%'],  
    },
    {
        image: TocDanh_Red_II,  
        title: 'Đỏ II Tốc đánh/Máu/Giáp',  
        attributes: ['Tốc đánh +0.6%','Máu tối đa +21.1','Giáp +1.4'],  
    },
    {
        image: TocDanh_Red_I,  
        title: 'ĐỎ I TỐC ĐÁNH/TỶ LỆ CHÍ MẠNG',  
        attributes: ['Tỷ lệ chí mạng +0.2%','Tốc đánh +0.5%'],  
    },
    {
        image: ChiMang_Red_I,  
        title: 'ĐỎ I TỶ LỆ CHÍ MẠNG',  
        attributes: ['Tỷ lệ chí mạng +0.5%'],  
    },
    {
        image: CongPhep_Red_I,  
        title: 'ĐỎ I CÔNG PHÉP/TỐC ĐÁNH',  
        attributes: ['Công phép +1.3','Tốc đánh +0.2%'],  
    },
    {
        image: CongPhep_Red_I,  
        title: 'ĐỎ I CÔNG/XUYÊN GIÁP PHÉP',  
        attributes: ['Công phép +1.3','Xuyên giáp phép +0.7'],  
    },
    {
        image: TocDanh_Red_I,  
        title: 'ĐỎ I TỐC ĐÁNH/MÁU/GIÁP',  
        attributes: ['Giáp +0.7','Máu tối đa +10.1','Tốc đánh +0.3%'],  
    },
    {
        image: ChiMang_Red_I,  
        title: 'ĐỎ I TỶ LỆ/SÁT THƯƠNG CHÍ MẠNG',  
        attributes: ['Tỷ lệ chí mạng +0.2%','Sát thương chí mạng +1.1%'],  
    },
    {
        image: Congvatly_Red_I,  
        title: 'ĐỎ I CÔNG VẬT LÝ/HÚT MÁU',  
        attributes: ['Công vật lý +0.8','Hút máu +0.2%'],  
    },
    {
        image: Congvatly_Red_I,  
        title: 'ĐỎ I CÔNG VẬT LÝ/XUYÊN GIÁP',  
        attributes: ['Công vật lý +0.6','Xuyên giáp +1.1'],  
    },
    {
        image: Congvatly_Red_I,  
        title: 'ĐỎ I CÔNG VẬT LÝ',  
        attributes: ['Công vật lý +1'],  
    },
    {
        image: CongPhep_Red_I,  
        title: 'ĐỎ I CÔNG PHÉP',  
        attributes: ['Công phép +1.6'],  
    },
]
export default function Rune({}: Props) {
  return (
    <div className="grid grid-cols-8 gap-10 mt-6">
        {items.map((item,index) => (
          <div key={index} className="relative group w-auto h-auto">
            <Image
              src={item.image}
              alt={item.title}
              
              className="w-25 h-25 aspect-square object-cover rounded-lg transition-transform duration-300 group-hover:scale-105 group-hover:ring-2 group-hover:ring-white "
             />
            <div className="text-center mt-2">
                <span className="block font-medium text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">
                {item.title}
                </span>
            </div>
            <div className="absolute top-full left-1/3 transform -translate-x-1/3 mt-1 w-[400px] max-w-lg text-black p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 pointer-events-none"> 
              {/*Display information when hover*/} 
              <div className="bg-white text-black p-4 rounded shadow-lg  w-[250px] max-w-lg  ">  
                  <h3 className="font-bold text-lg text-center text-blue-600">{item.title}</h3>  
                 
                  {item.attributes.map((attr, idx) => (  
                    <p className="whitespace-nowrap text-sm text-center" key={idx}> {attr}</p>  
                  ))}  
                  
                 
              </div>  
          </div>
          </div>
        ))}
      </div>
  )
}