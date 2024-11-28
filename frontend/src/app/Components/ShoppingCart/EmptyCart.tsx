import React from "react";
import Link from "next/link";
export default function EmptyCart() {
  return (
    <div className="h-[21rem] items-center flex flex-col">
      <div
        className="h-[6.125rem] w-[6.125rem]
        bg-[50%] bg-no-repeat bg-cover"
      ></div>
      <div className="text-[rgba(0,0,0,.4)] text-sm leading-4 mt-[1.125rem] font-bold">
        Your shopping cart is empty
      </div>
      <Link
        href={"/"}
        className="mt-[1.0625rem] text-[rgba(0,0,0,.87)] no-underline bg-[initial] cursor-pointer"
      >
        <button
          className="py-[.625rem] px-[2.625rem] bg-[#ee4d2d] outline-0 overflow-visible relative items-center
            border-0 rounded-sm shadow-ssm text-white cursor-pointer flex text-sm font-light justify-center
            leading-[1] opacity-100 hover:opacity-90 transition-opacity duration-200 ease-in-out select-none normal-case m-0"
        >
          <span
            className="text-base capitalize text-white cursor-pointer
                font-light tracking-normal leading-[1] select-none"
          >
            Go shopping now
          </span>
        </button>
      </Link>
    </div>
  );
}
