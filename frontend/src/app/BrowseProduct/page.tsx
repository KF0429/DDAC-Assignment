"use client";
import React, { useEffect, useState } from "react";
import StickyHeader from "../Components/StickyHeader";
import ProductCard from "../Components/ProductCard";
import { Product } from "../lib/Interface/ProductCard";

export default function Page() {
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <StickyHeader isFixed={false} />
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="transition-margin-top duration-300">
            <div
              role="main"
              className="pt-10 px-0 pb-[3.75rem] ml-auto mr-auto w-[1200px]"
            >
              <div className="flex h-14 relative">
                <h1
                  className="bg-[#ee4d2d] rounded-[.625rem] text-white inline-block text-xl font-medium left-1/2 tracking-[.01em] leading-[1] m-auto
                        py-[1.125rem] px-5 absolute capitalize -translate-x-2/4 select-none z-[1]"
                >
                  DAILY DISCOVER
                </h1>
                <hr className="border-t-[rgba(0,0,0,.26] border-dotted left-0 m-0 absolute top-1/2 w-full h-0" />
              </div>

              <div className="py-10 px-0 box-border flex flex-row flex-wrap -ml-[.3125rem] -mr-[.3125rem]">
                {products.map((product, index) => (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
