import React from 'react'
import Banner from "@/components/Banner";
import Sidebar_News from '@/components/Sidebar_News';
import Main_Content_News_All from '@/components/Main_Content_News_All';
import Pagination from '@/components/Pagination';
type Props = {}

export default function page({}: Props) {
  return (
    <div className="bg-purple-950">
      <Banner />
      
      <div className="flex mt-10">
          <Sidebar_News /> 
          <div className="ml-40"> {/* Sử dụng w-fit để container chỉ rộng bằng nội dung */}
            <h1 className="text-3xl font-bold mb-2 text-yellow-500">TẤT CẢ BÀI VIẾT</h1>
            <div className="h-0.5 bg-yellow-600 w-full"></div> {/* w-full sẽ lấy theo độ rộng của container cha */}
            <div className='mt-5 mb-10'>
              <Main_Content_News_All />
            </div>
            <div className="items-center mb-5">
                <Pagination />
            </div>
          </div>
    </div>
    </div>
  )
}