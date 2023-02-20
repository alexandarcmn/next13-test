import React from "react";
import Pagination from "./Pagination";

export default function RootLayout({ children }) {
  return (
    <div className="promotion flex">
      {children}
      <Pagination />
    </div>
  );
}
