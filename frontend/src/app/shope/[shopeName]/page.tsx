import React from "react";
import StickyHeader from "@/app/Components/StickyHeader";
import Link from "next/link";
import Sortbar from "@/app/Components/Sortbar";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <StickyHeader isFixed={false} />
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="min-w-[75rem]">
            <div role="main">
              <div className="transition-margin-top duration-300 custom-bezier">
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
                                  enable-background="new 0 0 15 15"
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
              </div>
              <div className="bg-white shadow-ssm mb-[1px]">
                <div className="min-h-10">
                  <div className="bg-white pt-0 shadow-none ml-auto mr-auto w-[1200px]">
                    <div className="flex-initial items-start w-full flex">
                      <Link
                        href={""}
                        className="item-center border-white border-4 flex flex-1 font-[.9375rem] justify-center overflow-hidden
                        no-underline text-ellipsis"
                      >
                        <span>Home</span>
                      </Link>
                      <Link
                        href={""}
                        className="item-center border-white border-4 flex flex-1 font-[.9375rem] justify-center overflow-hidden
                        no-underline text-ellipsis"
                      >
                        <span>All Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**menu */}
              <div className="pt-5 ml-auto mr-auto w-[1200px]">
                {/**container */}
                {/**all product section */}
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
                        <g fill-rule="evenodd" stroke="none" stroke-width="1">
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
                      <div>{/**depends on the shop database */}</div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-20">
                      <Sortbar />
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
