import React from 'react'
import Banner from "@/components/Banner";
import Sidebar_News from '@/components/Sidebar_News';
import Articles_right from '@/components/Articles_right';
import Articles_left from '@/components/Articles.left';
type Props = {}

export default function page({}: Props) {
  return (
    <div className="bg-purple-950">
      <Banner />
      
      <div className="flex mt-10 flex-grow">  
        <div className="w-1/8 p-4">  
          <Sidebar_News />  
        </div>  
        
        <div className="flex-grow p-4">  
          <Articles_right />  
        </div>  
        
        <div className="w-1/3 p-4">  
          <Articles_left />  
        </div>  
      </div>  
    </div>  
  )
}