"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Pagination() {
  const [activePage, setActivePage] = useState(0);
  const router = useRouter();

  const handlePageChange = (page) => {
    setActivePage(page);
    router.push(`/promotions/${page + 1}`);
  };

  return (
    <ul>
      {[...Array(10).keys()].map((el) => {
        return (
          <li
            key={el}
            className={`relative z-10 inline-flex items-center border border-indigo-500 ${activePage === el ? 'bg-red-500' : 'bg-indigo-50'} px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20 cursor-pointer`}
            onClick={() => handlePageChange(el)}
          >
            {el + 1}
          </li>
        );
      })}
    </ul>
  );
}
