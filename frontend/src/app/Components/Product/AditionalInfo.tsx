import React from "react";
import Image from "next/image";

export default function AditionalInfo() {
  return (
    <div className="flex flex-col my-[25px] mx-[15px] gap-y-[15px]">
      <div>
        <div className="items-start grid-cols-3 gap-1 bg-white grid">
          <div className="justify-self-start items-center flex text-base min-w-0">
            <div className=" flex outline-0 overflow-visible relative min-w-0 text-base">
              <div className="text-[#4a4a4a] cursor-help flex overflow-hidden w-full">
                <Image
                  src={
                    "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/0841a51df104f5c6554e.svg"
                  }
                  alt="logo"
                  width={18}
                  height={18}
                  className="flex-shrink-0 mr-[5px] border-0 overflow-clip"
                  style={{
                    overflowClipMargin: "content-box",
                  }}
                />
                <div>15 Days Free Returns*</div>
              </div>
            </div>
          </div>
          <div className="justify-self-center items-center flex text-base min-w-0">
            <div className=" flex outline-0 overflow-visible relative min-w-0 text-base">
              <div className="text-[#4a4a4a] cursor-help flex overflow-hidden w-full text-base">
                <Image
                  src={
                    "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/511aca04cc3ba9234ab0.png"
                  }
                  alt="logo"
                  width={18}
                  height={18}
                  className="flex-shrink-0 h-[18px] mr-[5px] w-[18px] border-0 overflow-clip"
                  style={{
                    overflowClipMargin: "content-box",
                  }}
                />
                <div>100% Authentic</div>
              </div>
            </div>
          </div>
          <div className="justify-self-end items-center flex text-base min-w-0">
            <div className=" flex outline-0 overflow-visible relative min-w-0 text-base">
              <div className="text-[#4a4a4a] cursor-help flex overflow-hidden w-full text-base">
                <Image
                  src={
                    "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/16ead7e0a68c3cff9f32.png"
                  }
                  alt="logo"
                  width={18}
                  height={18}
                  className="flex-shrink-0 h-[18px] mr-[5px] w-[18px] border-0 overflow-clip"
                  style={{
                    overflowClipMargin: "content-box",
                  }}
                />
                <div>Free Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
