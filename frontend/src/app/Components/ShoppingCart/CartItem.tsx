import Link from "next/link";
import React from "react";
import Image from "next/image";
import Payment from "./Payment";

interface CartItemProps {
  cart: Array<{
    CartID: number;
    BuyerName: string;
    ProductID: string;
    ProductName: string;
    ProductImage: string;
    SellerName: string;
    UnitPrice: number;
    Quantity: number;
    TotalPrice: number;
  }>;
}
export default function CartItem({ cart }: CartItemProps) {
  return (
    <div>
      <main
        style={{ marginBottom: "0px" }}
        className="text-[rgba(0,0,0,.8)] flex flex-col pt-5"
      >
        <div
          className="items-center bg-white rounded-[3px] shadow-ssm text-[#888] flex
                        text-sm h-[55px] mb-3 overflow-hidden py-0 px-5"
        >
          <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
            <label
              className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
            >
              <input
                type="checkbox"
                aria-checked="false"
                className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0"
              />
              <div
                className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
            mr-2 relative text-center select-none w-4"
              ></div>
            </label>
          </div>
          <div className="text-[rgba(0,0,0,.8)] w-[46.27949%]">Product</div>
          <div className="text-center w-[15.88022%]">Unit Price</div>
          <div className="text-center w-[15.4265%]">Quantity</div>
          <div className="text-center w-[10.43557%]">Total Price</div>
          <div className="text-center w-[12.70417%]">Actions</div>
        </div>
        {cart.map((item) => (
          <section
            key={item.CartID}
            className="bg-white rounded-sm shadow-ssm overflow-visible mb-[.9375rem] block"
          >
            <div className="border-b border-[rgba(0,0,0,.09)] box-border h-[3.75rem] py-0 px-5 items-center flex">
              <div className="items-center flex flex-1">
                <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
                  <label
                    className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
                  >
                    <input
                      type="checkbox"
                      aria-checked="false"
                      className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0"
                    />
                    <div
                      className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
            mr-2 relative text-center select-none w-4"
                    ></div>
                  </label>
                </div>
                <Link
                  className="items-center text-[rgba(0,0,0,.87)] flex font-medium min-w-[50px] no-underline cursor-pointer"
                  href={""}
                >
                  <span style={{ marginLeft: "10px" }}>Apple Malaysia</span>
                </Link>
              </div>
            </div>
            <section className="pb-[1px] relative block" role="list">
              <div className="border border-[rgba(0,0,0,.09)] rounded-sm my-[22px] mx-5">
                <div
                  className="pb-5 pt-[15px] text-[rgba(0,0,0,.87)] block mt-[15px] px-5 no-underline"
                  role="listitem"
                >
                  <div className="items-center flex">
                    <div className="box-border flex flex-row-reverse min-w-[58px] py-0 pr-3 pl-5">
                      <label
                        className="items-center text-[rgba(0,0,0,.54)] cursor-default flex 
                                text-xs font-light max-w-[400px] relative"
                      >
                        <input
                          type="checkbox"
                          aria-checked="false"
                          className="box-border p-0 left-0 opacity-0 absolute top-0 leading-normal m-0"
                        />
                        <div
                          className="border-[1px] border-[rgba(0,0,0,.14)] rounded-sm shadow-[0,2px,0,0] flex-shrink-0 h-4
                                  mr-2 relative text-center select-none w-4"
                        ></div>
                      </label>
                    </div>
                    <div className="flex box-border flex-col relative w-[29.03811%]">
                      <div className="flex">
                        {/**ProductImage */}
                        <Link
                          className="cursor-pointer bg-[initial] no-underline"
                          href={""}
                        >
                          <picture className="contents cursor-pointer">
                            <Image
                              src={item.ProductImage}
                              height={80}
                              width={80}
                              alt="productimage"
                            ></Image>
                          </picture>
                        </Link>
                        <div className="leading-4 overflow-hidden flex flex-1 flex-col text-sm pt-[5px] pr-5 pb-0 pl-[10px]">
                          {/**product Name */}
                          <Link href={""}>{item.ProductName}</Link>
                        </div>
                      </div>
                    </div>
                    <div className="items-center flex justify-center w-[17.24138%]">
                      text
                    </div>
                    <div className="flex-col w-[15.88022%] items-center flex justify-center">
                      <span className="m-0">RM {item.UnitPrice}</span>
                    </div>
                    <div className="items-center flex flex-col justify-center w-[15.4265%]">
                      <div className="bg-white items-center flex text-[#757575]">
                        <button
                          // onClick={onDecrement}
                          className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                        >
                          <svg
                            enable-background="new 0 0 10 10"
                            viewBox="0 0 10 10"
                            x="0"
                            y="0"
                            className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                          >
                            <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                          </svg>
                        </button>
                        <input
                          className="text-[#d0011b] border-l-0 border-r-0 box-border cursor-text text-base font-normal h-8 text-center w-[50px]
                                            items-center bg-transparent border border-[rgba(0,0,0,0.09)] flex justify-center tracking-normal leading-[1] outline-none ease-sharp-motion-curve"
                          type="text"
                          // value={}
                        />
                        <span className="h-[1px] m-0 overflow-hidden absolute whitespace-nowrap w-[1px] z-[-1000] text-[#757575]">
                          {/* Quantity {quantity} */}
                        </span>
                        <button
                          // onClick={onIncrement}
                          className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                        >
                          <svg
                            enable-background="new 0 0 10 10"
                            viewBox="0 0 10 10"
                            x="0"
                            y="0"
                            className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                          >
                            <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="items-center flex justify-center text-[#ee4d2d] w-[10.43557%]">
                      <span>RM Total</span>
                    </div>
                    <div className="flex-col capitalize w-[12.70417%] items-center flex justify-center">
                      <button className="bg-none border-0 cursor-pointer normal-case overflow-visible m-0 text-inherit">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        ))}
      </main>
      <Payment />
    </div>
  );
}
