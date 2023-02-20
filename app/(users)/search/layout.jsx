import React from "react";
import SearchInput from "./SearchInput";

export default function RootLayout({ children }) {
  return (
    <div className="hahahah flex">
      <div>
        <SearchInput />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
