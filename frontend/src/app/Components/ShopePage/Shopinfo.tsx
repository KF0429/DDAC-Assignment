import React from "react";
import Link from "next/link";

export default function shopeinfo() {
  return (
    <div className="bg-white shadow-ssm py-[1.25rem] px-0">
      <div className="pt-5 flex overflow-hidden ml-auto mr-auto w-[1200px]">
        <div className="rounded-[.25rem] h-[8.4375rem] overflow-hidden relative w-[24.375rem]">
          <div
            style={{
              backgroundImage: `url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shopmicrofe/dc2a8ae5803b2531c9a5.jpg')`,
            }}
            className="bg-[50%] bg-no-repeat bg-cover bottom-0 blur-[2px] left-0 -m-1 absolute
        right-0 top-0"
          ></div>
          <div className="bg-[rgba(0,0,0,.6)] bottom-0 left-0 absolute right-0 top-0"></div>
          <div className="bottom-[.625rem] left-5 absolute right-[.875rem] top-[.625rem]">
            <div className="flex">
              <Link
                href={""}
                className="block flex-shrink-0 h-20 relative w-20 cursor-pointer no-underline bg-[initial]"
              >
                <div
                  className="border-[hsla(0,0%,100%,.4)] border-[.25rem] box-border cursor-pointer block h-20
            select-none w-20 rounded-[50%]"
                >
                  <div className="bg-[#f5f5f5] rounded-[50%] overflow-hidden pt-[100%] relative w-full">
                    <svg
                      enableBackground="new 0 0 15 15"
                      viewBox="0 0 15 15"
                      x="0"
                      y="0"
                      className="stroke-[#c6c6c6] text-2xl font-normal left-[50%] absolute top-[50%] translate-x-[-50%] translate-y-[-50%] antialiased
                inline-block h-[1em] w-[1em] fill-current"
                    >
                      <g>
                        <circle
                          cx="7.5"
                          cy="4.5"
                          fill="none"
                          r="3.8"
                          stroke-miterlimit="10"
                        ></circle>
                        <path
                          d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                          fill="none"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </Link>
              <div className="text-white ml-[.625rem] mt-[.625rem] overflow-hidden relative">
                <h1
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                  }}
                  className="text-white text-xl leading-6 font-medium mb-[.3125rem] mt-0 max-h-12 break-words overflow-hidden
              text-ellipsis my-[.67em] mx-0"
                >
                  TESTING SHOP NAME
                </h1>
                <div></div>
              </div>
            </div>
            <div className="flex mt-[.625rem] relative"></div>
          </div>
        </div>
        <div className="items-start bg-white flex flex-1 flex-wrap pl-[1.875rem]">
          <div
            className="flex flex-none basis-2/4 overflow-hidden pb-[.625rem] pt-[.625rem] 
        select-none cursor-pointer items-center py-[.625rem] px-0"
          ></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
