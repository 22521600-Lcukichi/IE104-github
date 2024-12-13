"use client";
import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1); // Di chuyển useState ra ngoài
  const totalPages = 38;

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {/* Chỉ hiển thị 5 trang đầu tiên */}
      {[...Array(Math.min(5, totalPages))].map((_, index) => (
        <button
          key={index}
          className={`w-8 h-8 rounded-lg ${
            currentPage === index + 1
              ? 'bg-yellow-500 text-black'
              : 'bg-gray-700 text-white'
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {/* Dấu ba chấm nếu có thêm trang */}
      {totalPages > 5 && <span className="px-2">...</span>}
      {/* Nút hiển thị trang cuối */}
      <button
        className={`w-8 h-8 rounded-lg ${
          currentPage === totalPages ? 'bg-yellow-500 text-black' : 'bg-gray-700 text-white'
        }`}
        onClick={() => setCurrentPage(totalPages)}
      >
        {totalPages}
      </button>
      {/* Nút chuyển tiếp */}
      <button
        className="w-8 h-8 rounded-lg bg-gray-700 text-white"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      >
        <FaArrowRight className="w-4 h-4 mx-auto" />
      </button>
    </div>
  );
};

export default Pagination;
