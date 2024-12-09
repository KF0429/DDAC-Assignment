"use client";
import Banner from "./Components/Banner";
import CategoryItem from "./Components/CategoryItem";
import Footer from "./Components/General/Footer";
import StickyHeader from "./Components/StickyHeader";
import Multiplebutton from "./Components/Multiplebutton";
import ProductCard from "./Components/ProductCard";
import { Product } from "./lib/Interface/Product";
import { categories } from "./lib/Mock/CategoryMock";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Main() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5088/api/Products");

        if (!response.ok) {
          throw new Error("Failed to fetch Products");
        }
        const data = await response.json();
        setProducts(data);
        console.log("this is the data", data);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="flex flex-col min-h-screen relative">
        <StickyHeader isFixed={true} />
        <div className="flex-1">
          <div>
            <div className="mt-[7.4375rem] transition-[margin-top] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
              <div className="flex flex-col mb-[4.375rem]">
                <div className="opacity-100 bg-white rounded-sm shadow-ssm mt-0 overflow-visible pt-[30px]">
                  <div>
                    {/**Banner Here */}
                    <Banner />
                    <Multiplebutton />
                  </div>
                </div>
                <div className="ml-auto mr-auto w-[1200px] opacity-100">
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
                                {loading && <p>Loading Products</p>}
                                {error && <p>Error:{error}</p>}
                                <div className="content-start flex flex-wrap min-h-[calc(100vh-11.25rem)] p-t-[.3125rem]">
                                  {products
                                    .slice(0, 36)
                                    .map((product, index) => (
                                      <div
                                        key={index}
                                        className="box-border p-[.3125rem] w-[16.66667%]"
                                      >
                                        <ProductCard
                                          // key={product.id}
                                          productID={product.productID}
                                          photo={product.photo}
                                          productName={product.productName}
                                          price={product.price}
                                          averageRating={product.averageRating}
                                        />
                                      </div>
                                    ))}
                                  <div className="mt-5 text-center w-full">
                                    <Link
                                      href={"/BrowseProduct"}
                                      className="h-10 min-w-[24.375rem] text-[#555] bg-white border border-[rgba(0,0,0,.09)] shadow-ssm 
                                    outline-0 overflow-visible relative max-w-[220] py-0 px-5 inline-flex text-ellipsis items-center rounded-sm box-border cursor-pointer
                                    flex-col text-sm justify-center capitalize hover:bg-slate-50"
                                    >
                                      See More
                                    </Link>
                                  </div>
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
