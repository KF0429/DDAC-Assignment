"use client";

import { useEffect, useState } from "react";
import Header from "@/app/Components/Header/Header";
import { mockProducts } from "@/app/lib/ProductMock";
import Footer from "@/app/Components/Footer";
import Quantitycontrol from "@/app/Components/Product/Quantitycontrol";
import ProductDescription from "@/app/Components/Product/ProductDescription";
import ProductComment from "@/app/Components/Product/ProductComment";
import ProductSeller from "@/app/Components/Product/ProductSeller";
import ActionButton from "@/app/Components/Product/ActionButton";
import ProductImage from "@/app/Components/Product/ProductImage";
import AditionalInfo from "@/app/Components/Product/AditionalInfo";
import TitleandRating from "@/app/Components/Product/TitleandRating";
import ProductPriceInfo from "@/app/Components/Product/ProductPriceInfo";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<{
    id: number;
    imageUrl: string;
    title: string;
    price: number;
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
    const productId = Number(params.id);
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
                      <ProductImage imageUrl={product.imageUrl} />
                      <section className="flex-grow flex-shrink-0 basis-auto w-0 flex">
                        <div className="border-box pt-5 pr-[35px] pb-[0px] pl-5 w-full flex-1 basis-auto">
                          <TitleandRating
                            title={product.title}
                            rating={product.rating}
                          />
                          <div className="mt-[10px]">
                            <ProductPriceInfo price={product.price} />
                          </div>
                          <div className="mt-[25px] py-0 px-[20px]">
                            <Quantitycontrol
                              quantity={quantity}
                              maxQuantity={product.quantity}
                              onIncrement={handleIncrement}
                              onDecrement={handleDecrement}
                            />
                          </div>
                          <div className="mt-[15px]">
                            <ActionButton price={product.price} />
                          </div>
                          <div className="mt-[30px] border-t border-t-[rgba(0,0,0,0.05)]">
                            <AditionalInfo />
                          </div>
                        </div>
                      </section>
                    </section>
                    {/**shop */}
                    <section className="pt-[1.5625rem] bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden block">
                      <ProductSeller />
                    </section>
                    {/**wAMdpk */}
                    <div className="block">
                      <div className="flex min-h-[40rem]">
                        <div className="flex-1 min-w-0">
                          <ProductDescription />
                          {/**product rating */}
                          <div>
                            <div style={{ display: "contents" }}>
                              <ProductComment />
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
