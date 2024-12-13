"use client";
import Link from 'next/link';
import React from 'react'
import Email from '../public/assert/icon-email.png'
import Linkedin from '../public/assert/icon-linkedin.png'
import Image from 'next/image';
import background_contact from '../public/assert/bg-collab-contact.jpg'
export default function ContactInfo() {

    // components/ContactInfo.js  
 
    return (  
        <div className=" p-4 flex items-center justify-center gap-8" style={{
            backgroundImage: `url(${background_contact.src})`,
            minHeight: '100px',
            
          }}>
        <div className="text-xl font-bold text-yellow-500">
          THÔNG TIN LIÊN HỆ:
        </div>
        <div className="flex space-x-4">
          <Link href="mailto:hoptac@garena.vn" className="flex items-center gap-2">
            <Image src={Email} alt="" />
            <div className="text-yellow-500">hoptac@garena.vn</div>
          </Link>
          <Link href="https://linkedin.com/in/hợp-tác-liên-quân/" className="flex items-center gap-2">
            <Image src={Linkedin} alt="" />
            <div className="text-yellow-500">linkedin.com/in/hợp-tác-liên-quân/</div>
          </Link>
        </div>
      </div>
    );  
}