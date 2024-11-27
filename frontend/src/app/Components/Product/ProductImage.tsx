import React from "react";
import Image from "next/image";

export default function ProductImage({ imageUrl }: { imageUrl: string }) {
  return (
    <section className="flex-shrink-0 p-[15px] w-[450px] block">
      {/**product Image */}
      <div className="flex-col flex">
        <div className="relative">
          <div className="relative">
            <div style={{ display: "none" }} className=""></div>
            <div className="pb-[100%] relative w-full">
              <picture className="contents">
                <Image
                  src={imageUrl}
                  alt="productimage"
                  width={450}
                  height={450}
                  style={{ border: "0" }}
                  className="h-[100%] left-0 object-contain object-center absolute right-0 w-[100%] align-bottom border-0"
                />
              </picture>
            </div>
          </div>
        </div>
        <div className="relative my-[5px] mx-[-5px]"></div>
      </div>
      <div
        style={{ marginTop: "15px" }}
        className="justify-center items-center flex"
      ></div>
    </section>
  );
}
