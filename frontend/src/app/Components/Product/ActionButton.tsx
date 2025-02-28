import React from "react";
import Image from "next/image";
export default function ActionButton({
  buttonAction,
}: {
  price: number;
  buttonAction: () => void;
}) {
  return (
    <div className="pl-[20px]">
      <div className="flex">
        <button
          onClick={buttonAction}
          className="bg-[rgba(208,1,27,.08)] outline-0 overflow-visible relative flex-row border-solid border-[1px]
                                shadow-ssm border-[#d0011b] text-[#d0011b] max-w-[250px] h-12 py-0 px-5 text-ellipsis justify-center items-center rounded-sm
                                box-border cursor-pointer flex capitalize m-0 mr-[15px] min-w-[180px]"
        >
          <Image
            src={
              "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/b96050554b3be4feea08.svg"
            }
            alt="cart"
            width={20}
            height={20}
            className="h-5 mr-[10px] w-5 border-0 overflow-clip fill-[#d0011b]"
          ></Image>
          <span>add to cart</span>
        </button>
      </div>
    </div>
  );
}
