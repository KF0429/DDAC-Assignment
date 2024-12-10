import React from "react";

export default function ProductPriceInfo({ price }: { price: number }) {
  return (
    <div className="flex flex-col bg-[#fafafa] py-[15px] px-[20px] relative z-[2]">
      <div
        className="h-full left-0 opacity-[.1] absolute top-0 w-full z-[-1]"
        style={{
          background: "linear-gradient(to left, rgb(0, 83, 222), white)",
        }}
      ></div>
      <section className="block">
        <div className="items-center flex">
          <div className="flex-none whitespace-nowrap text-[#d0011b] text-3xl font-medium">
            RM{price.toFixed(2)}
          </div>
        </div>
      </section>
      <div className="mt-[10px] items-center flex">
        <div className="bg-[url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/163d55e75c9ec0147c04.svg')] bg-contain h-6 mr-[10px] w-6"></div>
        <div>
          <div className="text-[#d0011b] text-sm">100% Authentic Guarantee</div>
          <div className="text-[rgba(0,0,0.54)] font-[12px] mt-1">
            Up to 8x Money Back Guarantee
          </div>
        </div>
      </div>
    </div>
  );
}
