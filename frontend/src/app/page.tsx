"use client";
import Banner from "./Components/Banner";
import CategoryItem from "./Components/CategoryItem";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Multiplebutton from "./Components/Multiplebutton";
import ProductCard from "./Components/ProductCard";
import { mockProducts } from "./Components/DataStructure/ProductMock";

export default function main() {
  const categories = [
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/7ea3e07f2e6f57272c6641e4ce3f1632",
      alt: "img",
      description: "Mobile & Accessories",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/537b6270462a686b4e733a0813c3e4ad@resize_w320_nl.webp",
      alt: "img",
      description: "Women Clothes",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/30f3b8033f0eeafa09dfa266016e62a5@resize_w320_nl.webp",
      alt: "img",
      description: "Watches",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/59c2de7794065c2418dcf32dc3adc765@resize_w320_nl.webp",
      alt: "img",
      description: "Men Clothes",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/d9e864c5bcfa65c518457265193db103@resize_w320_nl.webp",
      alt: "img",
      description: "Health & Beauty",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/3f4c5c2134b758f4e9de6e7de839a843@resize_w320_nl.webp",
      alt: "img",
      description: "Home & Living",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/b453fdb439f647028a92bc138c2a588e@resize_w320_nl.webp",
      alt: "img",
      description: "Baby & Toys",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/ab588c674c86512429124f9bf0d0112a@resize_w320_nl.webp",
      alt: "img",
      description: "Home Appliances",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/52e34825491214323c486d96d9649a2c@resize_w320_nl.webp",
      alt: "img",
      description: "Groceries & Pets",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/656b20a51610605ed163d9a37349d50f@resize_w320_nl.webp",
      alt: "img",
      description: "Women`s Shoes",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/081a08b39f2468c85263194ab3287fee@resize_w320_nl.webp",
      alt: "img",
      description: "Automative",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/e08026a4ee4eb7087acb4bf5127b1018@resize_w320_nl.webp",
      alt: "img",
      description: "Fashion Accessories",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/a3637aaab755ca9bba43f63a9592638c@resize_w320_nl.webp",
      alt: "img",
      description: "Women`s Bags",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/9adf5814aab1a1c241ca9310a4e48186@resize_w320_nl.webp",
      alt: "img",
      description: "Computer & Accessories",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/8fe4e09f99f52db2fef12dabddf9aee0",
      alt: "img",
      description: "Men`s Bags & Wallets",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/f2cc889405538978bd8c7b4c2103671f",
      alt: "img",
      description: "Sports & Outdoor",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/bced2f5f9d62806e087e917540b0614f@resize_w320_nl.webp",
      alt: "img",
      description: "Muslim Fashion",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/fa97e6d0a367546a699768c947cdc48b@resize_w320_nl.webp",
      alt: "img",
      description: "Men Shoes",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/ff8fda5211492988ec6096aaa7e8b121",
      alt: "img",
      description: "Games,Books & Hobbies",
    },
    {
      href: "",
      src: "https://down-my.img.susercontent.com/file/d29f9032307651e49696a3c8b5b300fe@resize_w320_nl.webp",
      alt: "img",
      description: "Gaming & Console",
    },
  ];
  return (
    <div>
      <div className="flex flex-col min-h-screen relative">
        <Header></Header>
        <div className="flex-1">
          <div>
            <div className="mt-[7.4375rem] transition-[margin-top] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <div className="flex flex-col mb-[4.375rem]">
                <div className="opacity-100 bg-white rounded-sm shadow-ssm mt-0 overflow-visible pt-[30px]">
                  <div>
                    {/**Banner Here */}
                    <Banner></Banner>
                    <Multiplebutton></Multiplebutton>
                  </div>
                </div>
                <div className="ml-auto mr-auto w-[1200px] opacity-100">
                  {" "}
                  {/**Here is main contents */}
                  <div>
                    <div style={{ marginTop: "20px", height: "110px" }}></div>
                  </div>
                  {/**this is the new user banner */}
                  <div className="min-h-[50rem]">
                    {/**Categories Section */}
                    <div className="bg-white mt-5 min-h-[18.875rem]">
                      <div className="pt-0">
                        <div className="bg-white border-b-2 border-solid border-[rgba(0,0,0,.05)] h-[3.75rem] py-0 px-5 items-center flex">
                          <div className="text-[rgba(0,0,0,.54] text-base font-medium">
                            Categeroies
                          </div>
                        </div>
                        <div>
                          <div className="h-full relative w-full">
                            <div className="h-full overflow-hidden touch-pan-y">
                              <ul className="w-[120%] content-start flex-col flex-wrap h-[302px] flex m-0 p-0 relative">
                                {/**Categories */}
                                {categories.map((category, index) => (
                                  <CategoryItem
                                    key={index}
                                    href={category.href}
                                    src={category.src}
                                    alt={category.alt}
                                    description={category.description}
                                  />
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**here is daily discovery */}
                    <div className="contents"></div>
                    <div className="relative z-0">
                      <div className="contents">
                        <div>
                          <div className="-mt-[5.5rem]">
                            <div></div>
                            {/**daily dicovery */}
                            <nav
                              style={{ top: "7.375rem", background: "white" }}
                              className="shadow-ssm mt-[7.375rem] bg-white sticky z-[999] w-full "
                            >
                              <ul
                                className="list-none m-0 p-0 flex border-b-[1px]"
                                style={{
                                  borderBottom: "1px solid rgba(0,0,0,.09)",
                                }}
                              >
                                <li className="w-full relative p-[0.9375rem] px-[2.875rem] flex-grow-0 flex-shrink-0 basis-auto h-[3.75rem] text-base font-medium box-border text-[#ee4d2d] flex justify-center items-center cursor-pointer select-none list-none">
                                  <div
                                    style={{ content: "" }}
                                    className="opacity-100 absolute bottom-0 left-0 w-full h-1 bg-[#ee4d2d] transition-opacity duration-300 ease-out"
                                  ></div>
                                  <div className="overflow-hidden text-ellipsis whitespace-nowrap flex relative max-w-full text-[#ee4d2d] uppercase items-center">
                                    <span>DAILY DISCOVER</span>
                                  </div>
                                </li>
                              </ul>
                            </nav>
                            <div>
                              <section
                                style={{ display: "block" }}
                                className="min-h-[3.75rem] w-full"
                              >
                                <div className="content-start flex flex-wrap min-h-[calc(100vh-11.25rem)] p-t-[.3125rem]">
                                  {mockProducts.map((product, index) => (
                                    <div
                                      key={index}
                                      className="box-border p-[.3125rem] w-[16.66667%]"
                                    >
                                      <ProductCard
                                        imageUrl={product.imageUrl}
                                        title={product.title}
                                        price={product.price}
                                        rating={product.rating}
                                      />
                                    </div>
                                  ))}
                                </div>
                              </section>
                            </div>
                          </div>
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
  );
}
