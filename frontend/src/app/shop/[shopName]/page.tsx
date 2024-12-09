import React from "react";
import StickyHeader from "@/app/Components/StickyHeader";
import Link from "next/link";
import Sortbar from "@/app/Components/Sortbar";
import Shopinfo from "@/app/Components/ShopePage/Shopinfo";
import Categoryfilter from "@/app/Components/ShopePage/Categoryfilter";

export default function page() {
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <StickyHeader isFixed={false} />
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="min-w-[75rem]">
            <div role="main">
              <div className="transition-margin-top duration-300 custom-bezier">
                <Shopinfo />
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
                  <Categoryfilter />
                  <div className="flex-1 min-w-0">
                    <div className="mb-20">
                      <Sortbar />
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
