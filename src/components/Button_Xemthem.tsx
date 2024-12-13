import React from 'react';
import Link from 'next/link';

interface ButtonNProps {
  text?: string; // `text` có thể tùy chọn
  href: string;  // `href` là bắt buộc
}

const Button_Xemthem: React.FC<ButtonNProps> = ({ text = "Xem thêm", href }) => {
  return (
    <div className="flex justify-center items-center w-full mt-5 mb-5">
      <Link href={href}>
        <button className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-700 to-amber-600 text-amber-200 rounded hover:from-amber-600 hover:to-amber-500 transition-all duration-300">
          <span>{text}</span>
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M5 12h14M14 5l7 7-7 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default Button_Xemthem;
