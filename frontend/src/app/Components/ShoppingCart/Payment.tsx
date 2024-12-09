"use client";
import { useRouter } from "next/navigation";
import React from "react";
interface PaymentProps {
  cart: Array<{
    CartID: number;
    UnitPrice: number;
    Quantity: number;
  }>;
  checkedItems: { [key: number]: boolean };
  selectAll: boolean;
  handleSelectAll: () => void;
}

export default function Payment({
  cart,
  checkedItems,
  selectAll,
  handleSelectAll,
}: PaymentProps) {
  const router = useRouter();
  const subtotal = cart.reduce((total, item) => {
    if (checkedItems[item.CartID]) {
      return total + item.UnitPrice * item.Quantity;
    }
    return total;
  }, 0);
  const handleCheckoutPage = () => {
    router.push("/checkout");
  };
  return (
    <section
      className="bottom-0 sticky z-[2] items-center bg-white box-border grid grid-cols-[1fr_20.3125rem_11.875rem] text-base
                        mt-3 w-full before:rounded-none before:transition-colors before:duration-100 before:ease-[cubic-bezier(.4,0,.6,1)]"
    >
      <div className="col-end-4 col-start-1 py-3 px-0 items-center flex w-full">
        <div className="box-border flex flex-row-reverse min-w-[58px] pt-0 pr-3 pb-0 pl-5">
          <label className="items-center text-[rgba(0,0,0,.54)] cursor-default flex text-[12px] font-light max-w-[400px] relative">
            <input
              type="checkbox"
              tabIndex={0}
              checked={selectAll}
              onChange={handleSelectAll}
              className="box-border p-0 left-0 opacity-0 absolute top-0 m-0 peer hidden"
            />
            <div
              className="border border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0_rgba(0,0,0.02)] flex-shrink-0 h-4 
                                mr-2 relative text-center select-none w-4 peer-checked::bg-[#ee4d2d] peer-checked:border-[#ee4d2d] after:hover:shadow-none"
            ></div>
          </label>
        </div>
        <button className="cursor-pointer bg-transparent border-0 normal-case overflow-visible m-0">
          Select All
        </button>
        <button className="my-0 mx-2 bg-transparent border-0 normal-case overflow-visible"></button>
        <div className="flex-1"></div>
        <div className="flex flex-col">
          <div className="relative" tabIndex={0}>
            <div role="button">
              <div className="flex justify-end items-center">
                <div className="items-center flex ml-5"></div>
                <div className="ml-2">
                  <div className="text-[#222] text-base leading-[19px]">
                    Total item:
                  </div>
                  <div className="text-[#ee4d2d] text-2xl leading-7 ml-[5px]">
                    RM {subtotal.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handleCheckoutPage}
          className="rounded-sm box-border text-sm font-light h-10 my-0 mr-[22px] ml-[15px] 
        py-[13px] px-9 capitalize w-[13.125rem] bg-[#ee4d2d] outline-0 overflow-visible relative border-0
        shadow-ssm text-white cursor-pointer flex justify-center tracking-normal leading-[1] select-none
        transition-opacity duration-200 ease-in-out"
        >
          <span className="w-full text-sm font-light capitalize text-white cursor-pointer tracking-normal leading-[1] select-none">
            Check Out
          </span>
        </button>
      </div>
    </section>
  );
}
