"use client";
import React, { useEffect, useState } from "react";
import StickyHeader from "@/app/Components/StickyHeader";
import Link from "next/link";
import Sortbar from "@/app/Components/Sortbar";
import Shopinfo from "@/app/Components/ShopePage/Shopinfo";
import Categoryfilter from "@/app/Components/ShopePage/Categoryfilter";
import { SellerInfo } from "@/app/lib/Interface/SellerInfo";
import { Product } from "@/app/lib/Interface/ProductCard";
import ProductCard from "@/app/Components/ProductCard";

export default function Page({ params }: { params: { shopID: number } }) {
  const [seller, setSeller] = useState<SellerInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchSeller = async () => {
      try {
        const sellerApi = await fetch(
          `http://localhost:5088/api/Sellers/${params.shopID}`
        );
        if (!sellerApi.ok) {
          throw new Error("Failed to fetch seller data.");
        }
        const sellerData = await sellerApi.json();
        setSeller(sellerData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      }
    };
    fetchSeller();
  }, [params.shopID]);

  useEffect(() => {
    const fetchProductsFromSeller = async () => {
      try {
        const productApi = await fetch(
          `http://localhost:5088/api/Products/MyProduct/${params.shopID}`
        );
        if (!productApi.ok) {
          throw new Error("Failed to fetch the product");
        }
        const productData: Product[] = await productApi.json();
        setProducts(productData);
        console.log(productData);
      } catch (err) {
        const ErrorMessage =
          err instanceof Error
            ? err.message
            : "An Error occur on the shopPage to fetch product";
        setError(ErrorMessage);
      }
    };
    fetchProductsFromSeller();
  }, [params.shopID]);
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <StickyHeader isFixed={false} />
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="min-w-[75rem]">
            <div role="main">
              <div className="transition-margin-top duration-300 custom-bezier">
                {seller ? (
                  <Shopinfo
                    shopID={seller.shopID}
                    shopImage={seller.shopImage}
                    shopName={seller.shopName}
                    totalRateCount={seller.totalRateCount}
                    joinDate={seller.dateTime}
                    productsAmount={seller.productsAmount}
                  />
                ) : (
                  <p>loading information</p>
                )}
              </div>
              <div className="bg-white shadow-ssm mb-[1px]">
                <div className="min-h-10">
                  <div className="bg-white pt-0 shadow-none ml-auto mr-auto w-[1200px]">
                    <div className="flex-initial items-start w-full flex">
                      <Link
                        href={""}
                        className="item-center border-white border-4 flex flex-1 font-[.9375rem] justify-center overflow-hidden
                        no-underline text-ellipsis"
                      >
                        <span>Home</span>
                      </Link>
                      <Link
                        href={""}
                        className="item-center border-white border-4 flex flex-1 font-[.9375rem] justify-center overflow-hidden
                        no-underline text-ellipsis"
                      >
                        <span>All Products</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/**menu */}
              <div className="pt-5 ml-auto mr-auto w-[1200px]">
                {/**container */}
                {/**all product section */}
                <div className="flex mt-[1.875rem] mb-20 mx-0">
                  {/**side category section */}
                  {seller ? (
                    <Categoryfilter shopID={seller?.shopID} />
                  ) : (
                    <p>loading information</p>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="mb-20">
                      <Sortbar />
                      <div className="block">
                        <div className="box-border flex flex-row flex-wrap -ml-[.3125rem] -mr-[.3125rem]">
                          {products.length > 0 ? (
                            products.map((product, index) => (
                              <div
                                className="mt-[.625rem] basis-[20%] max-w-[20%] box-border flex-grow-0 flex-shrink-0 px-[.3125rem]"
                                key={index}
                              >
                                <ProductCard
                                  key={product.productID}
                                  productID={product.productID}
                                  photo={product.photo}
                                  price={product.price}
                                  averageRating={product.averageRating}
                                  productName={product.productName}
                                />
                              </div>
                            ))
                          ) : (
                            <p>No products found for this shop.</p>
                          )}
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
  );
}
