"use client";
import React, { useEffect, useState } from "react";
import StickyHeader from "@/app/Components/StickyHeader";
import Link from "next/link";
import Sortbar from "@/app/Components/Sortbar";
import Shopinfo from "@/app/Components/ShopePage/Shopinfo";
import Categoryfilter from "@/app/Components/ShopePage/Categoryfilter";
import { SellerInfo } from "@/app/lib/Interface/SellerInfo";

export default function Page({ params }: { params: { shopID: number } }) {
  const [seller, setSeller] = useState<SellerInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
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
                      <div className="box-border flex flex-row flex-wrap -ml-[.3125rem] -mr-[.3125rem]">
                        Product Card here
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
