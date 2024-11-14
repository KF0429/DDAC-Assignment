import React from "react";

export default function SideBar() {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-[11.875rem] mt-0 mr-5 mb-5 ml-0 min-w-0">
      <div className="block"></div>
      <div></div>
      <div className="items-center text-[rgba(0,0,0,.8)] flex text-base font-bold h-[1.875rem] justify-start uppercase">
        <svg
          enable-background="new 0 0 15 15"
          viewBox="0 0 15 15"
          x="0"
          y="0"
          className="text-[.75rem] mr-[.625rem] stroke-current overflow-hidden inline-block h-[1em] w-[1em] fill-current relative"
        >
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
            ></polyline>
          </g>
        </svg>
        <h2 className="flex-1 font-bold text-base">Search Filter</h2>
      </div>
    </div>
  );
}
