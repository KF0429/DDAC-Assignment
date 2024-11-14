"use client";

import Image from "next/image";
import StarRating from "@/app/Components/StarRating";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/app/Components/Header/Header";
import { mockProducts } from "@/app/lib/ProductMock";
import Footer from "@/app/Components/Footer";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<{
    id: number;
    imageUrl: string;
    title: string;
    price: string;
    rating: number;
    quantity: number;
  } | null>(null);

  const [quantity, setQuantity] = useState(1);
  const maxQuantity = product?.quantity || 0;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  useEffect(() => {
    const productId = parseInt(params.id);
    const productData = mockProducts.find((item) => item.id === productId);
    setProduct(productData || null);
  }, [params.id]);

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <div className="flex flex-col min-h-100vh relative">
        <div className="flex-1">
          <div style={{ display: "contents" }}>
            <div>
              <Header />
              <div className="transition-margin-top duration-300 custom-bezier">
                {/**product-page */}
                <div>
                  <div className="fixed z-[99999] bottom-0 left-0"></div>
                  {/**main*/}
                  <div className="pb-[4.375rem] ml-auto mr-auto w-[1200px]">
                    <div className="flex items-center whitespace-nowrap h-4 mt-5">
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        {product.title}
                      </span>
                    </div>
                    {/**product card */}
                    <section className="flex bg-white rounded-[3px] shadow-ssm mt-5 p-0">
                      <h1 className="h-[1px] m-0 overflow-hidden absolute whitespace-nowrap w-[1px] -z-[1000] text-[2em]">
                        {product.title}
                      </h1>
                      <section className="flex-shrink-0 p-[15px] w-[450px] block">
                        {/**product Image */}
                        <div className="flex-col flex">
                          <div className="relative">
                            <div className="relative">
                              <div
                                style={{ display: "none" }}
                                className=""
                              ></div>
                              <div className="pb-[100%] relative w-full">
                                <picture className="contents">
                                  <Image
                                    src={product.imageUrl}
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
                      <section className="flex-grow flex-shrink-0 basis-auto w-0 flex">
                        <div className="border-box pt-5 pr-[35px] pb-[0px] pl-5 w-full flex-1 basis-auto">
                          <div className="text-ellipsis overflow-hidden text-[20px] font-medium leading-6 m-0 max-h-[48px] max-w-[665px] break-words align-sub custom-clamp">
                            <span className="text-xl leading-6 font-medium">
                              {product.title}
                            </span>
                          </div>
                          <div className="mt-[.625rem] min-h-[1.55rem] relative flex">
                            <button className="pl-0 bg-transparent border-0 cursor-pointer items-center py-0 px-[15px] flex normal-case m-0">
                              <div className="border-b-[#555] text-base mr-[5px] pb-[1px]">
                                {product.rating}
                              </div>
                              <div className="inline-flex relative cursor-pointer">
                                <StarRating rating={product.rating} />
                              </div>
                            </button>
                            <button className="bg-transparent border-0 border-l overflow-visible cursor-pointer items-center py-0 px-[15px] flex normal-case m-0 border-l-[rgba(0,0,0,0.14)]">
                              <div className="border-b-[#555] text-[#222] text-base mr-[5px] pb-[1px] border-b cursor-pointer">
                                4.4k
                              </div>
                              <div className="mr-[5px] py-1 px-0 capitalize text-[#767676]">
                                ratings
                              </div>
                            </button>
                            <div className="items-center py-0 px-[15px] flex border-l border-l-[rgba(0,0,0,0.14)]">
                              <div className="mr-[5px] text-[#222] text-base pb-[1px]">
                                9.3k
                              </div>
                              <div className="mr-[5px] capitalize text-[#767676] text-sm pt-1 pb-1">
                                Sold
                              </div>
                            </div>
                            <button className="bg-none cursor-pointer overflow-visible m-0 normal-case text-sm ml-auto">
                              Report
                            </button>
                          </div>
                          <div className="mt-[10px]">
                            <div className="flex flex-col bg-[#fafafa] py-[15px] px-[20px] relative z-[2]">
                              <div
                                className="h-full left-0 opacity-[.1] absolute top-0 w-full z-[-1]"
                                style={{
                                  background:
                                    "linear-gradient(to left, rgb(0, 83, 222), white)",
                                }}
                              ></div>
                              <section className="block">
                                <div className="items-center flex">
                                  <div className="flex-none whitespace-nowrap text-[#d0011b] text-3xl font-medium">
                                    RM{product.price}
                                  </div>
                                </div>
                              </section>
                              <div className="mt-[10px] items-center flex">
                                <div className="bg-[url('https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/163d55e75c9ec0147c04.svg')] bg-contain h-6 mr-[10px] w-6"></div>
                                {/**qa6p_P */}
                                <div>
                                  <div className="text-[#d0011b] text-sm">
                                    100% Authentic Guarantee
                                  </div>
                                  <div className="text-[rgba(0,0,0.54)] font-[12px] mt-1">
                                    Up to 8x Money Back Guarantee
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-[25px] py-0 px-[20px]">
                            <div className="flex-col flex ">
                              <div className="mb-0 pb-[15px] items-center text-[#222] flex  -ml-1 -mt-1 p-1">
                                <div className="flex flex-col">
                                  <section className="text-[#757575] mt-4 items-center flex ">
                                    <h3 className="text-[#757575] flex-shrink-0 text-sm font-normal m-0 capitalize w-[110px]">
                                      Quantity
                                    </h3>
                                    <div className="flex items-center">
                                      <div style={{ marginRight: "15px" }}>
                                        <div className="bg-white items-center flex text-[#757575]">
                                          <button
                                            onClick={handleDecrement}
                                            className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                                          >
                                            <svg
                                              enable-background="new 0 0 10 10"
                                              viewBox="0 0 10 10"
                                              x="0"
                                              y="0"
                                              className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                                            >
                                              <polygon points="4.5 4.5 3.5 4.5 0 4.5 0 5.5 3.5 5.5 4.5 5.5 10 5.5 10 4.5"></polygon>
                                            </svg>
                                          </button>
                                          <input
                                            className="text-[#d0011b] border-l-0 border-r-0 box-border cursor-text text-base font-normal h-8 text-center w-[50px]
                                            items-center bg-transparent border border-[rgba(0,0,0,0.09)] flex justify-center tracking-normal leading-[1] outline-none ease-sharp-motion-curve"
                                            type="text"
                                            value={quantity}
                                          />
                                          <span className="h-[1px] m-0 overflow-hidden absolute whitespace-nowrap w-[1px] z-[-1000] text-[#757575]">
                                            Quantity {quantity}
                                          </span>
                                          <button
                                            onClick={handleIncrement}
                                            className="rounded-br-none rounded-tr-none items-center bg-transparent border border-[rgba(0,0,0,0.09)]
                                          rounded-sm fill-[rgba(0,0,0,.8)] cursor-pointer flex text-sm font-light h-8 justify-center tracking-normal leading-[1] outline-none
                                          w-8 transition duration-100 normal-case ease-sharp-motion-curve"
                                          >
                                            <svg
                                              enable-background="new 0 0 10 10"
                                              viewBox="0 0 10 10"
                                              x="0"
                                              y="0"
                                              className="flex-shrink-0 text-[10px] h-[10px] w-[10px] overflow-hidden inline-block fill-current relative"
                                            >
                                              <polygon points="10 4.5 5.5 4.5 5.5 0 4.5 0 4.5 4.5 0 4.5 0 5.5 4.5 5.5 4.5 10 5.5 10 5.5 5.5 10 5.5"></polygon>
                                            </svg>
                                          </button>
                                        </div>
                                      </div>
                                      <div>
                                        {product.quantity} pieces available
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mt-[15px]">
                            <div className="pl-[20px]">
                              <div className="flex">
                                <button
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
                                <button
                                  className="bg-[#d0011b] outline-0 overflow-visible relative text-white h-12 py-0 px-5 text-ellipsis 
                                  items-center border-0 rounded-sm shadow-ssm box-border cursor-pointer flex flex-col justify-center capitalize
                                  max-w-none text-sm min-w-[180px] m-0"
                                >
                                  <div>Buy With Voucher</div>
                                  <div className="text-lg font-medium text-white capitalize">
                                    RM{product.price}
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mt-[30px] border-t border-t-[rgba(0,0,0,0.05)]">
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
                          </div>
                        </div>
                      </section>
                    </section>
                    {/**shop */}
                    <section className="pt-[1.5625rem] bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden block">
                      <div className="items-center flex  justify-between overflow-visible pt-5 px-[25px] pb-[25px]">
                        <div className=" border-r border-r-[rgba(0,0,0,.05)] box-border flex max-w-[440px] pr-[25px]">
                          <Link
                            className="flex-shrink-0 mr-5 outline-none overflow-visible relative cursor-pointer no-underline"
                            href={""}
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
                                  src={
                                    "https://down-my.img.susercontent.com/file/6e0d547b3f3f148ec4242d826a9ff28e"
                                  }
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
                              Switch Official Store
                            </div>
                            <div className="items-center flex text-[#757575] text-sm"></div>
                            <div className="flex mt-2">
                              <Link
                                className="flex-row capitalize text-[#555] bg-white border border-[rgba(0,0,0,.09] shadow-ssm outline-0 overflow-visible relative
                                h-[34px] max-w-[190px] min-w-[60px] py-0 px-[15px] inline-flex text-ellipsis items-center box-border cursor-pointer text-sm justify-center"
                                href={""}
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
                        <div className="flex-grow-[1] grid text-[rgba(0,0,0,.4)] gap-y-5 gap-x-[50px] pl-[25px] grid-cols-repeat-3-auto"></div>
                      </div>
                    </section>
                    {/**wAMdpk */}
                    <div className="block">
                      <div className="flex min-h-[40rem]">
                        <div className="flex-1 min-w-0">
                          <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden p-[.625rem]">
                            <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
                              <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
                                Product Specification
                              </h2>
                              <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]">
                                <div className="flex mb-[1.125rem]">
                                  <label htmlFor="">Category</label>
                                </div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                                <div className="flex mb-[1.125rem]"></div>
                              </div>
                            </section>
                            <section className="px-[.9375rem] pt-[.9375rem] pb-0 block">
                              <h2 className="bg-[rgba(0,0,0,.02)] text-[rgba(0,0,0,.87)] text-lg font-normal m-0 p-[.875rem] capitalize">
                                Product Description
                              </h2>
                              <div className="mt-[1.875rem] mx-[.9375rem] mb-[.9375rem]"></div>
                            </section>
                            <section className="px-[.9375rem] pt-[.9375rem] pb-0 block"></section>
                          </div>
                          {/**product rating */}
                          <div>
                            <div style={{ display: "contents" }}>
                              <div className="bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-visible p-[1.5625rem]">
                                <div className="items-center flex flex-nowrap flex-row mb-[1em]">
                                  <div className="text-[rgba(0,0,0,.87)] text-lg mr-[.2em] capitalize">
                                    Product Ratings
                                  </div>
                                </div>
                                <div className="items-center bg-[#fffbf8] border border-[#f9ede5] rounded-sm box-border flex mb-4 min-h-20 p-[1.875rem]"></div>
                                <div style={{ opacity: "1" }}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
