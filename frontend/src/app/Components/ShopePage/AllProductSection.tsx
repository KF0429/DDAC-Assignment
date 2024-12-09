import React from "react";
import Sortbar from "../Sortbar";
export default function AllProductSection() {
  return (
    <div className="flex mt-[1.875rem] mb-20 mx-0">
      {/**side category section */}
      <div className=" flex-grow-0 flex-shrink-0 basis-[11.25rem] mr-[1.375rem] overflow-hidden">
        <div
          className="items-center border-b border-[rgba(0,0,0,.05)] text-black flex font-bold
      text-[1rem] h-[3.125rem] leading-[3.125rem] mb-[.625rem] no-underline capitalize"
        >
          <svg
            viewBox="0 0 12 10"
            className="mr-[.625rem] w-[.75rem] inline-block h-[1em] text-current relative"
          >
            <g fillRule="evenodd" stroke="none" stroke-width="1">
              <g transform="translate(-373 -208)">
                <g transform="translate(155 191)">
                  <g transform="translate(218 17)">
                    <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                    <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                    <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          Category
        </div>
        <div>
          <div
            tabIndex={0}
            className="cursor-pointer overflow text-ellipsis select-none leading-4 max-h-12 pt-2 active:text-[#ee4d2d] focus:text-[#ee4d2d]
        pr-[.625rem] pb-2 pl-3 relative block text-sm font-medium text-[rgba(0,0,0,.87)]"
          >
            <svg
              viewBox="0 0 4 7"
              className="overflow-hidden h-[7px] left-0 mt-1 absolute w-[7px] inline-block fill-current opacity-0"
            >
              <polygon points="4 3.5 0 0 0 7"></polygon>
            </svg>
            All Products
          </div>
          <div
            className="cursor-pointer overflow text-ellipsis select-none leading-4 max-h-12 pt-2 
        pr-[.625rem] pb-2 pl-3 relative block text-sm font-medium text-[rgba(0,0,0,.87)]"
          >
            <svg
              viewBox="0 0 4 7"
              className="overflow-hidden h-[7px] left-0 mt-1 opacity-0 absolute w-[7px] inline-block fill-current"
            >
              <polygon points="4 3.5 0 0 0 7"></polygon>
            </svg>
            Base on the category the seller have
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="mb-20">
          <Sortbar />
        </div>
      </div>
    </div>
  );
}
