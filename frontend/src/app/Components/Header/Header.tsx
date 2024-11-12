import React from "react";
import TopNav from "./TopNav";

export default function Header() {
  return (
    <div>
      <header className="bg-transparent min-w-[1200px]">
        <div className="bg-[#d0011b] h-[2.125rem] relative z-[400] min-w-[1200px]">
          <TopNav />
        </div>
        <div className="flex flex-col transition-top duration-100 custom-bezier min-w-[1200px]"></div>
      </header>
    </div>
  );
}
