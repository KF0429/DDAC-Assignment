import React from "react";
import Image from "next/image";
import Link from "next/link";

interface shopinfo {
  shopID: number;
  shopImage: string;
  shopName: string;
  totalRateCount: number;
  joinDate: string;
  productsAmount: number;
}

export default function shopeinfo({
  shopID,
  shopImage,
  shopName,
  totalRateCount,
  joinDate,
  productsAmount,
}: shopinfo) {
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
                href={`/shop/${shopID}`}
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
                          strokeMiterlimit="10"
                        ></circle>
                        <path
                          d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6"
                          fill="none"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <Image
                    src={shopImage || ""}
                    height={72}
                    width={72}
                    alt="shop Avatar"
                    className="rounded-[50%] block h-full left-0 absolute top-0 w-full"
                  />
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
                  {shopName}
                </h1>
                <div></div>
              </div>
            </div>
            <div className="flex mt-[.625rem] relative"></div>
          </div>
        </div>
        <div className="items-start bg-white flex flex-1 flex-wrap pl-[1.875rem]">
          <div className="flex flex-none basis-2/4 overflow-hidden pb-[.625rem] pt-[.625rem] items-center py-[.625rem] px-0">
            <div className="inline-block box-border text-[.9375rem] ml-[.625rem] mr-[.625rem] select-none">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                strokeWidth="0"
                className="inline-block h-[1em] w-[1em] fill-current relative"
              >
                <path d="m13 1.9c-.2-.5-.8-1-1.4-1h-8.4c-.6.1-1.2.5-1.4 1l-1.4 4.3c0 .8.3 1.6.9 2.1v4.8c0 .6.5 1 1.1 1h10.2c.6 0 1.1-.5 1.1-1v-4.6c.6-.4.9-1.2.9-2.3zm-11.4 3.4 1-3c .1-.2.4-.4.6-.4h8.3c.3 0 .5.2.6.4l1 3zm .6 3.5h.4c.7 0 1.4-.3 1.8-.8.4.5.9.8 1.5.8.7 0 1.3-.5 1.5-.8.2.3.8.8 1.5.8.6 0 1.1-.3 1.5-.8.4.5 1.1.8 1.7.8h.4v3.9c0 .1 0 .2-.1.3s-.2.1-.3.1h-9.5c-.1 0-.2 0-.3-.1s-.1-.2-.1-.3zm8.8-1.7h-1v .1s0 .3-.2.6c-.2.1-.5.2-.9.2-.3 0-.6-.1-.8-.3-.2-.3-.2-.6-.2-.6v-.1h-1v .1s0 .3-.2.5c-.2.3-.5.4-.8.4-1 0-1-.8-1-.8h-1c0 .8-.7.8-1.3.8s-1.1-1-1.2-1.7h12.1c0 .2-.1.9-.5 1.4-.2.2-.5.3-.8.3-1.2 0-1.2-.8-1.2-.9z"></path>
              </svg>
            </div>
            <div className="inline-block capitalize">
              <div className="inline-block">Product Amount:&nbsp;</div>
              <div className="inline-block text-[#ee4d2d]">
                {productsAmount}
              </div>
            </div>
          </div>
          <div className="flex flex-none basis-2/4 overflow-hidden pb-[.625rem] pt-[.625rem] items-center py-[.625rem] px-0">
            <div className="inline-block box-border text-[.9375rem] ml-[.625rem] mr-[.625rem] select-none">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="inline-block h-[1em] w-[1em] fill-current relative stroke-[#000]"
              >
                <polygon
                  fill="none"
                  points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                ></polygon>
              </svg>
            </div>
            <div className="inline-block capitalize">
              <div className="inline-block">Rating:&nbsp;</div>
              <div className="inline-block text-[#ee4d2d]">
                {totalRateCount}
              </div>
            </div>
          </div>
          <div className="flex flex-none basis-2/4 overflow-hidden pb-[.625rem] pt-[.625rem] items-center py-[.625rem] px-0">
            <div className="inline-block box-border text-[.9375rem] ml-[.625rem] mr-[.625rem] select-none">
              <svg
                enableBackground="new 0 0 15 15"
                viewBox="0 0 15 15"
                x="0"
                y="0"
                className="inline-block h-[1em] w-[1em] fill-current relative stroke-[#000]"
              >
                <g>
                  <circle
                    cx="6.8"
                    cy="4.2"
                    fill="none"
                    r="3.8"
                    strokeMiterlimit="10"
                  ></circle>
                  <polyline
                    fill="none"
                    points="9.2 12.5 11.2 14.5 14.2 11"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                  ></polyline>
                  <path
                    d="m .8 14c0-3.3 2.7-6 6-6 2.1 0 3.9 1 5 2.6"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="inline-block capitalize">
              <div className="inline-block">Join Date:&nbsp;</div>
              <div className="inline-block text-[#ee4d2d]">{joinDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
