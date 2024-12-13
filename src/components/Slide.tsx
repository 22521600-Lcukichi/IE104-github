import React from 'react'
import Image from 'next/image';
interface propsType {
    img: string;
}

const Slide: React.FC<propsType> = ({img}) => {
  return (
    <div className="outline-none border-none relative">
        <Image 
            alt = "banner"
            src={img}
            width={1920}
            height={350}
        />

    </div>
  )
}



export default Slide
