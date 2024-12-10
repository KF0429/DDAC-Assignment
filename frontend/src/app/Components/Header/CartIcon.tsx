import React, { useEffect, useState } from "react";
import Link from "next/link";
interface CartIconProps {
  userID: number;
}

export default function CartIcon({ userID }: CartIconProps) {
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const resposne = await fetch(
          `http://localhost:5088/api/Carts/${userID}`
        );
        const CartData = await resposne.json();
        console.log(`this is user id ${userID}`);
        console.log("this is the cart data", CartData);
        const uniqueItemCount = (CartData.cartItems || []).length;
        setCartCount(uniqueItemCount);
        console.log("the total item in the cart is", uniqueItemCount);
      } catch (error) {
        console.error("Error in cart icon", error);
      }
    };
    if (userID) {
      fetchCartCount();
    }
  }, [userID]);
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
