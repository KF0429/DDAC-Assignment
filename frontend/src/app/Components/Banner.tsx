import Link from "next/link";
import React from "react";
import Image from "next/image";
// import { useState, useEffect } from "react";

export default function Banner() {
  // const images = [
  //   "https://cf.shopee.com.my/file/my-11134258-7rasj-m1gs8pipzdif69_xhdpi",
  //   "https://cf.shopee.com.my/file/my-11134258-7rasc-m1lj1mfx2trb00_xxhdpi",
  //   "https://cf.shopee.com.my/file/my-11134258-7rasg-m1guq0oyyr6v41_xxhdpi",
  //   "https://cf.shopee.com.my/file/my-11134258-7rasb-m1gui9i3j096cd_xxhdpi",
  // ]; // Replace with your image URLs

  // const totalSlides = images.length;
  // const [currentIndex, setCurrentIndex] = useState(0);

  // // Auto-slide every 3 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  //   }, 3000); // 3-second interval

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, [totalSlides]);
  return (
    <div>
      <div className="ml-auto mr-auto w-[1200px]">
        <div className="flex leading-[0] max-h-[235px] min-h-[235px]">
          {/**slide */}
          <div className="rounded-sm rounded-bl-sm rounded-tl-sm shadow-ssm basis-0 grow-[2] shrink-[1] overflow-hidden">
            <div className="h-full relative w-full">
              <div
                style={{ paddingTop: "29.5003%" }}
                className="box-border overflow-x-hidden h-full w-full"
              >
                {/* <ul
                  className="flex transition-all duration-300 h-full left-0 right-0 m-0 overflow-hidden p-0 absolute top-0 touch-pan-y"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${totalSlides * 100}%`,
                  }}
                >
                  {images.map((image, index) => (
                    <li
                      key={index}
                      className="w-full flex-shrink-0"
                      style={{ width: "100%" }}
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        width={796} // Adjust as needed
                        height={235} // Adjust as needed
                        className="object-cover"
                        priority={index === 0} // Optimize the first image for faster loading
                      />
                    </li>
                  ))}
                </ul> */}
              </div>
              <div
                style={{
                  transform: "translateY(-50%",
                  transition: "opacity 0.3s ease",
                  opacity: 1,
                }}
                className="bg-[rgb(0,0,0,0.18)] select-none cursor-pointer inline-flex text-xl justify-center leading-5 opacity-0 absolute text-center top-[50%] h-[3.75rem] w-[2.1875rem] -left-[10px] items-center shadow-arrow fill-[rgba(0,0,0,.87)]"
              >
                <svg
                  enable-background="new 0 0 13 20"
                  viewBox="0 0 13 20"
                  role="img"
                  className="text-white h-[1em] w-[1em]"
                >
                  <path
                    stroke="none"
                    d="m4.2 10l7.9-7.9-2.1-2.2-9 9-1.1 1.1 1.1 1 9 9 2.1-2.1z"
                  ></path>
                </svg>
              </div>
              <div
                style={{
                  transform: "translateY(-50%",
                  transition: "opacity 0.3s ease",
                  opacity: 1,
                }}
                className="bg-[rgb(0,0,0,0.18)] select-none cursor-pointer inline-flex text-xl justify-center leading-5 opacity-0 absolute text-center top-[50%] h-[3.75rem] w-[2.1875rem] -right-[10px] items-center shadow-arrow fill-[rgba(0,0,0,.87)]"
              >
                <svg
                  enable-background="new 0 0 13 20"
                  viewBox="0 0 13 20"
                  role="img"
                  className="text-white h-[1em] w-[1em]"
                >
                  <path
                    stroke="none"
                    d="m11.1 9.9l-9-9-2.2 2.2 8 7.9-8 7.9 2.2 2.1 9-9 1-1z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          {/**side Banner */}
          <div className="rounded-bl-sm rounded-tl-sm flex basis-0 flex-col grow-[1] shrink-[1] ml-[.3125rem]">
            <Link
              href={""}
              className="bg-bottom bg-no-repeat bg-cover rounded-sm shadow-ssm text-[rgba(0, 0, 0, .87)] block flex-[1_1_50%] no-underline"
            >
              <div className="h-full w-full relative">
                <Image
                  src="https://cf.shopee.com.my/file/my-11134258-7rasj-m1gs8pipzdif69_xhdpi"
                  alt="Banner"
                  width={500}
                  height={300}
                  className="object-bottom align-bottom bg-bottom absolute h-full w-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-50"
                ></Image>
              </div>
            </Link>
            <Link
              href={""}
              className="bg-bottom bg-no-repeat bg-cover rounded-sm shadow-ssm text-[rgba(0, 0, 0, .87)] block flex-[1_1_50%] no-underline mt-[.3125rem]"
            >
              <div className="h-full w-full relative">
                <Image
                  src="https://cf.shopee.com.my/file/my-11134258-7ras8-m0z9a3m0ttjh1a_xhdpi"
                  alt="Banner"
                  width={500}
                  height={300}
                  className="object-bottom align-bottom bg-bottom absolute h-full w-full transition-opacity duration-200 ease-in-out opacity-100 hover:opacity-50"
                ></Image>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
