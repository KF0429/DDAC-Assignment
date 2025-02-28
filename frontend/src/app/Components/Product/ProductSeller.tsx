import React from "react";
import Image from "next/image";
import Link from "next/link";

interface sellerinfo {
  shopID: number;
  shopImage: string;
  shopName: string;
  totalRateCount: number;
  joinDate: string;
  productsAmount: number;
}
export default function ProductSeller({
  shopID,
  shopImage,
  shopName,
  totalRateCount,
  joinDate,
  productsAmount,
}: sellerinfo) {
  return (
    <div className="items-center flex  justify-between overflow-visible pt-5 px-[25px] pb-[25px]">
      <div className=" border-r border-r-[rgba(0,0,0,.05)] box-border flex max-w-[440px] pr-[25px]">
        <Link
          className="flex-shrink-0 mr-5 outline-none overflow-visible relative cursor-pointer no-underline"
          href={`/shop/{shopName}`}
        >
          <div className="h-[80px] w-[80px] relative border border-[rgba(0,0,0,.09)] rounded-[50%] box-border inline-block">
            <div className="bg-white rounded-[50%] overflow-hidden pt-[100%] w-full relative cursor-pointer">
              <Image
                src={
                  "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/1e1b08f78a2608ccffa9.svg"
                }
                alt="shop"
                width={24}
                height={24}
                className="absolute stroke-[#c6c6c6] text-2xl font-normal left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 border-0 overflow-clip"
                style={{
                  overflowClipMargin: "content-box",
                }}
              ></Image>
            </div>
            <picture className="contents">
              <Image
                src={shopImage || ""}
                alt=""
                height={78.55}
                width={78.55}
                className="align-bottom rounded-[50%] block h-full left-0 top-0 w-full absolute border-0"
              ></Image>
            </picture>
          </div>
        </Link>
        <div className="flex flex-col flex-grow justify-between overflow-hidden">
          <div className="text-[rgba(0,0,0,.87)] text-base font-medium m-0  overflow-hidden text-ellipsis whitespace-nowrap">
            {shopName}
          </div>
          <div className="items-center flex text-[#757575] text-sm"></div>
          <div className="flex mt-2">
            <Link
              className="flex-row capitalize text-[#555] bg-white border border-[rgba(0,0,0,.09] shadow-ssm outline-0 overflow-visible relative
            h-[34px] max-w-[190px] min-w-[60px] py-0 px-[15px] inline-flex text-ellipsis items-center box-border cursor-pointer text-sm justify-center"
              href={`/shop/${shopID}`}
            >
              <Image
                src={
                  "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/192a8dfc1c23525d396b.svg"
                }
                alt="shoplogo"
                width={14}
                height={14}
                className="inline-block flex-shrink-0 h-[14px] mr-[5px] w-[14px] border-0 overflow-clip"
                style={{
                  overflowClipMargin: "content-box",
                }}
              ></Image>
              <span>view shop</span>
            </Link>
          </div>
        </div>
      </div>
      {/**NGzCXN */}
      <div className="flex-grow-[1] grid text-[rgba(0,0,0,.4)] gap-y-5 gap-x-[50px] pl-[25px] grid-cols-3 auto-cols-[3]">
        <div className="flex justify-between outline-0 relative">
          <label className="text-[rgba(0,0,0.4)] mr-3 capitalize">
            Ratings
          </label>
          <span className="text-[#d0011b] text-right whitespace-nowrap">
            {totalRateCount}
          </span>
        </div>
        <div className="flex justify-between outline-0 relative">
          <label className="text-[rgba(0,0,0.4)] mr-3 capitalize">
            Join Date
          </label>
          <span className="text-[#d0011b] text-right whitespace-nowrap">
            {joinDate}
          </span>
        </div>
        <div className="flex justify-between outline-0 relative">
          <Link href={""} className="no-underline">
            <label className="text-[rgba(0,0,0.4)] mr-3 capitalize cursor-default">
              Products
            </label>
            <span className="text-[#d0011b] text-right whitespace-nowrap">
              {productsAmount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
