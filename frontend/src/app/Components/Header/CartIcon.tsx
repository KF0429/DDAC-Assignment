import React from "react";
import Link from "next/link";
import { Cart } from "@/app/lib/Mock/CartData";
interface CartIconProps {
  user: string;
}

export default function CartIcon({ user }: CartIconProps) {
  const cartCount = Cart.filter((item) => item.BuyerName === user).length;
  return (
    <div className="relative">
      <div>
        <div className="px-[10px] py-0">
          <Link
            href={"/cart"}
            className="items-center flex cursor-pointer ml-[5px] mt-0 mr-0 mb-0 outline-0 overflow-visible relative no-underline"
          >
            <svg
              viewBox="0 0 26.6 25.6"
              className="fill-current cursor-pointer h-[26px] w-[26px] text-white stroke-white overflow-hidden font-[1.0625rem] mr-[.625rem] relative inline-block"
            >
              <title>Shopping Cart Icon</title>
              <polyline
                fill="none"
                points="2 1.7 5.5 1.7 9.6 18.3 21.2 18.3 24.6 6.1 7 6.1"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2.5}
              ></polyline>
              <circle cx="10.7" cy="23" r="2.2" stroke="none"></circle>
              <circle cx="19.7" cy="23" r="2.2" stroke="none"></circle>
            </svg>
            {cartCount > 0 && (
              <div
                className="left-[-1.25rem] top-[-.6875rem] bg-white border-[.05rem] border-[#ee4d2d] rounded-[2.75rem]
            text-[#ee4d2d] h-4 leading-[1.2em] mr-[-.875rem] min-w-[.6875rem] py-0 px-[.3125rem] relative text-center"
                aria-hidden="true"
              >
                {cartCount}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
