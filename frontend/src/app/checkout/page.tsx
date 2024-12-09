import React from "react";
import TopNav from "../Components/Header/TopNav";
import CartHeader from "../Components/ShoppingCart/CartHeader";
import Image from "next/image";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <header
        className="bg-gradient-to-b from-[#f53d2d] to-[#f63] 
      transition-transform duration-200 ease-[cubic-bezier(.4,0,.2,1)] min-w-[1200px] block"
      >
        <div className="bg-transparent h-[2.125rem] relative z-[400] min-w-[1200px]">
          <TopNav />
        </div>
      </header>
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="transition-margin-top duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div className="mb-[12px]">
              <CartHeader />
            </div>
            {/**container */}
            <div className="ml-auto mr-auto mt-0 mb-[70px] w-[1200px]">
              <div className="bg-white shadow-ssm">
                <div className="items-center flex bg-white rounded-[3px] shadow-ssm h-[50px] pt-6 px-[30px] pb-0">
                  <div className="text-[rgba(0,0,0,.54)] text-sm h-[30px] w-full items-center flex">
                    <div className="text-left flex-[4]">
                      <h2 className="items-center text-[#222] flex text-lg m-0 p-0">
                        Product Ordered
                      </h2>
                    </div>
                    <div className="flex-[2]"></div>
                    <div className="flex-[2] text-right">Unit Price</div>
                    <div className="flex-[2] text-right">Amount</div>
                    <div className="flex-[2] text-right">Item Subtotal</div>
                  </div>
                </div>
                <div>
                  <div className="bg-white rounded-[3px] shadow-ssm">
                    <div className="mt-3 bg-white rounded-[3px] shadow-ssm">
                      <div>
                        <div className="bg-white rounded-[3px] relative">
                          <div className="border-0 h-[50px] py-0 px-[30px] items-center flex">
                            <h3 className="text-black ml-[5px]">Shop Name</h3>
                          </div>
                          <div className="border-b-[.5px] border-b-[rgba(0,0,0,.09)] pb-5">
                            <div className="text-black flex text-sm my-0 mx-[30px] min-h-[55px] overflow-hidden text-ellipsis">
                              <div className="justify-start flex-[4] flex items-center overflow-hidden text-ellipsis">
                                <picture className="contents">
                                  <Image
                                    src={""}
                                    className="align-bottom border-0"
                                    height={40}
                                    width={40}
                                    alt={"Product Image"}
                                  />
                                </picture>
                                <span className="justify-start flex-[4] items-center flex overflow-hidden text-ellipsis">
                                  Product Name
                                </span>
                              </div>
                              <div className="text-[#929292] flex-[2] justify-start items-center flex overflow-hidden text-ellipsis">
                                Condition Brand New or Used
                              </div>
                              <div className="flex-[2] justify-end items-center flex overflow-hidden text-ellipsis">
                                RM Unit Price
                              </div>
                              <div className="flex-[2] justify-end items-center flex overflow-hidden text-ellipsis">
                                Quantity
                              </div>
                              <div className="flex-[2] justify-end font-medium items-center flex text-ellipsis">
                                SubTotal of the product
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#fafdff] flex flex-col py-[15px] px-0">
                          <div className="items-center flex justify-end">
                            <div
                              className="font-medium text-[#ee4d2d] text-xl col-start-3 col-end-4 h-10 min-w-[100px] justify-end 
                            py-0 pr-[25px] pl-[10px] items-center flex"
                            >
                              RM SubTotal
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/**Payment Method */}
              <div className="rounded-[3px] shadow-ssm mb-3">
                <div className="bg-white mt-5">
                  <div style={{ display: "contents" }}>
                    <div
                      className="items-center box-border flex min-h-[5.625rem] pl-[1.875rem] pr-[1.875rem] border-b-[.0625rem]
                    border-b-[rgba(0,0,0,.05)] pt-[0.625rem] px-6 pb-5 relative"
                    >
                      <div className="text-[#222] text-lg w-[12.5rem] basis-[12.5rem] flex-grow-0 flex-shrink-0">
                        Payment Method
                      </div>
                      <div>
                        <span>
                          <button
                            className="items-center rounded-sm inline-flex font-medium h-10 mb-0 mt-[.625rem]
                            bg-white border border-[rgba(0,0,0,.09)] box-border cursor-pointer justify-center mr-2 ml-0 min-h-[2.125rem]
                            min-w-20 outline-0 overflow-visible py-1 px-3 relative text-left break-words
                          focus:text-[#ee4d2d] focus:border-[#ee4d2d] hover:border-[#ee4d2d] hover:text-[#ee4d2d]"
                          >
                            Online Banking
                          </button>
                        </span>
                        <span>
                          <button
                            className="items-center rounded-sm inline-flex font-medium h-10 mb-0 mt-[.625rem]
                            bg-white border border-[rgba(0,0,0,.09)] box-border cursor-pointer justify-center mr-2 ml-0 min-h-[2.125rem]
                            min-w-20 outline-0 overflow-visible py-1 px-3 relative text-left break-words
                          focus:text-[#ee4d2d] focus:border-[#ee4d2d] hover:border-[#ee4d2d] hover:text-[#ee4d2d]"
                          >
                            Credit / Debit Card
                          </button>
                        </span>
                      </div>
                    </div>
                    <div className="pt-[.625rem]">
                      <div className="pb-[1.875rem] pt-[1.875rem] box-border flex py-0 px-[1.875rem]">
                        <div className="flex-1 w-full">
                          <div className="items-center cursor-pointer pt-0 text-black flex font-sans text-sm font-normal py-4 px-3"></div>
                          <div>Public Bank</div>
                          <div>CIMB</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
