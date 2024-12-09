import React from "react";
import Image from "next/image";

export default function ProductComment() {
  const commentFilter = [
    { label: "all" },
    { label: "5 star (0)" },
    { label: "4 star (0)" },
    { label: "3 star (0)" },
    { label: "2 star (0)" },
    { label: "1 star (0)" },
    { label: "With Comments (0)" },
    { label: "With Media (0)" },
  ];
  return (
    <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-visible p-[1.5625rem]">
      <div className="items-center flex flex-nowrap flex-row mb-[1em]">
        <div className="text-[rgba(0,0,0,.87)] text-lg mr-[.2em] capitalize">
          Product Ratings
        </div>
      </div>
      <div className="items-center bg-[#fffbf8] border border-[#f9ede5] rounded-sm box-border flex mb-4 min-h-20 p-[1.875rem]">
        <div className="mr-[1.875rem] text-center">
          <div className="text-[#d0011b] text-[1.125rem]">
            <span className="text-center text-[1.875rem]">0</span>
            <span className="text-center"> out of 5 </span>
          </div>
          {/**can put a star here, will implement later*/}
        </div>
        <div className="flex-1 ml-[.9375rem]">
          {commentFilter.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className="focus:outline-none focus:border-[#d1100b] focus:ring-3 focus:ring-[#d0011b] 
                    active:border-[#d0011b] focus:text-[#d0011b]
                    bg-white border-[1px] border-[rgba(0,0,0,.09)] rounded-sm box-border cursor-pointer inline-block h-8 leading-8
                    mb-[.3125rem] mr-[.5rem] mt-[.3125rem] min-w-[6.25rem] py-0 px-[.625rem] text-center no-underline capitalize select-none"
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className="items-center flex flex-col h-[25rem] justify-center">
        <div className="bg-no-repeat bg-[contain]">
          <Image
            src={
              "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/shoprating/7d900d4dc402db5304b2.png"
            }
            width={121}
            height={121}
            alt="no rating image"
          ></Image>
        </div>
        <div className="text-[rgba(0,0,0,.8)] text-base mt-5">
          No ratings yet
        </div>
      </div>
    </div>
  );
}
