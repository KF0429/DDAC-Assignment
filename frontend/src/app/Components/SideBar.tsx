import React from "react";

export default function SideBar() {
  return (
    <div className="flex-grow-0 flex-shrink-0 basis-[11.875rem] mt-0 mr-5 mb-5 ml-0 min-w-0">
      <div className="block"></div>
      <div></div>
      <div className="items-center text-[rgba(0,0,0,.8)] flex text-base font-bold h-[1.875rem] justify-start uppercase">
        <svg
          enableBackground="new 0 0 15 15"
          viewBox="0 0 15 15"
          x="0"
          y="0"
          className="text-[.75rem] mr-[.625rem] stroke-current overflow-hidden inline-block h-[1em] w-[1em] fill-current relative"
        >
          <g>
            <polyline
              fill="none"
              points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            ></polyline>
          </g>
        </svg>
        <h2 className="flex-1 font-bold text-base">Search Filter</h2>
      </div>
      <fieldset className="border-0 border-b-[rgba(0,0,0,.09)] mt-5 mx-0 mb-0 px-0 pb-5 pt-0">
        <legend className="mb-0 font-medium border-0 p-0 isolate block pl-2 pr-2">
          Price Range
        </legend>
        <div className="block">
          <div className="items-center flex justify-between mt-5 mb-[0.625rem] mx-0">
            <input
              className="bg-white border-[rgba(0,0,0,.26)] rounded-sm shadow-inset-sm border
            text-[.8125rem] h-[1.875rem] outline-none pl-[.3125rem] w-[4.375rem] leading-normal m-0"
              type="text"
              placeholder="RM MIN"
            />
            <div className="bg-[#bdbdbd] flex-1 h-[1px] my-0 mx-[.625rem]"></div>
            <input
              className="bg-white border-[rgba(0,0,0,.26)] rounded-sm shadow-inset-sm border
            text-[.8125rem] h-[1.875rem] outline-none pl-[.3125rem] w-[4.375rem] leading-normal m-0"
              type="text"
              placeholder="RM MAX"
            />
          </div>
        </div>
        <button
          className="bg-[#ee4d2d] font-normal h-[1.875rem] mt-5 mb-0 mx-0 uppercase w-full outline overflow-visible relative
        items-center border-0 rounded-sm shadow-ssm text-white cursor-pointer flex text-sm justify-center lette tracking-normal 
        leading-[1] select-none"
        >
          Apply
        </button>
      </fieldset>
    </div>
  );
}
