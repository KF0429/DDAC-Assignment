import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProductCardParam {
  imageUrl: string;
  title: string;
  price: string;
  rating: number;
}

export default function ProductCard({
  imageUrl,
  title,
  price,
  rating,
}: ProductCardParam) {
  return (
    <div>
      <div className="contents">
        <div
          className="h-full duration-100 ease-sharp-motion-curve hover:shadow-hover active:shadow-active 
                   hover:translate-y-[1px] active:translate-y-0 relative hover:z-[-1] box-content border 
                   border-solid border-shopee-black9"
          aria-hidden="true"
        >
          <Link href={""} className="contents">
            <div className="flex h-full cursor-pointer flex-col bg-white">
              <div className="relative z-0 w-full pt-[100%]">
                <Image
                  src={imageUrl}
                  alt="product image"
                  width={190.05}
                  height={190.05}
                  className="h-full w-full object-contain absolute pointer-events-none bottom-0 top-0"
                ></Image>
              </div>
              <div className="p-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1 mb-1 flex-1 flex-col justify-between min-h-[4rem]">
                  <div className="whitespace-normal line-clamp-2 break-words min-h-[2.5rem] text-sm">
                    {title}
                  </div>
                  <div className="flex items-center">
                    <div
                      className="flex-shrink min-w-0 mr-1 overflow-hidden whitespace-nowrap 
                                            flex items-center font-medium text-ellipsis text-opacity-100
                                            text-[#ee4d2d]"
                    >
                      <div className="text-ellipsis overflow-hidden whitespace-nowrap items-baseline flex">
                        <span className="text-xs leading-[.875rem] font-medium mr-px">
                          RM
                        </span>
                        <span className="font-medium text-base/5 overflow-hidden whitespace-nowrap text-ellipsis">
                          {price}
                        </span>
                        <span className="text-xs leading-[.875rem] font-medium mr-px"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col justify-between"></div>
                <div className="flex items-center space-x-1">
                  <div className="flex-none flex items-center space-x-0.5 h-[.875rem]">
                    <Image
                      src="https://deo.shopeemobile.com/shopee/modules-federation/live/0/shopee__item-card-standard-v2/0.1.36/pc/d7099d3fd1dfdaf705ab.svg"
                      alt="rating-star"
                      width={10}
                      height={10}
                    ></Image>
                  </div>
                  <div className="text-black text-sm leading-[.875rem] flex-none">
                    {rating}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
