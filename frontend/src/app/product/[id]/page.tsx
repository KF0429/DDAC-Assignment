"use client";

import { useEffect, useState } from "react";
import Header from "@/app/Components/Header/Header";
import { SellerInfo } from "@/app/lib/Interface/SellerInfo";
import { Product } from "@/app/lib/Interface/Product";
import Quantitycontrol from "@/app/Components/Product/Quantitycontrol";
import ProductDescription from "@/app/Components/Product/ProductDescription";
import ProductComment from "@/app/Components/Product/ProductComment";
import ProductSeller from "@/app/Components/Product/ProductSeller";
import ActionButton from "@/app/Components/Product/ActionButton";
import ProductImage from "@/app/Components/Product/ProductImage";
import AditionalInfo from "@/app/Components/Product/AditionalInfo";
import TitleandRating from "@/app/Components/Product/TitleandRating";
import ProductPriceInfo from "@/app/Components/Product/ProductPriceInfo";
import Image from "next/image";
import type { ProductCommenttype } from "@/app/lib/Interface/ProductCommenttype";
export default function ProductPage({ params }: { params: { id: number } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [seller, setSeller] = useState<SellerInfo | null>(null);
  const [comments, setComments] = useState<ProductCommenttype[]>([]);

  const [stock, setQuantity] = useState(1);
  const maxQuantity = product?.stock || 0;
  const [showAlert, setShowAlert] = useState(false);

  const handleDecrement = () => {
    if (stock > 1) {
      setQuantity(stock - 1);
    }
  };
  const handleIncrement = () => {
    if (stock < maxQuantity) {
      setQuantity(stock + 1);
    }
  };
  const handleClick = () => {
    //handle alert
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 600);
  };
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        //to gte the product by product ID
        const response = await fetch(
          `http://localhost:5088/api/Products/with-seller/${params.id}`
        );
        if (!response.ok) {
          throw new Error(`Failed to fetch Products ${params.id}`);
        }
        const data = await response.json();
        setProduct(data);

        //To get the seller information by the ShopID
        const SellerID = data.shopID;
        const SellerResponse = await fetch(
          `http://localhost:5088/api/Sellers/${SellerID}`
        );
        const sellerInfo = await SellerResponse.json();
        setSeller(sellerInfo);
        console.log(`the product amount is${sellerInfo.productsAmount}`);
        //To Get the Comment
        const CommentResponse = await fetch(
          `http://localhost:5088/api/Comments/getCommentbyProductId/${params.id}`
        );
        if (!CommentResponse.ok) {
          throw new Error(`Fail to fetch Comments`);
        }
        const commentData: ProductCommenttype[] = await CommentResponse.json();
        setComments(commentData);
        // console.log(commentData);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "An unknown error occurred";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [params.id]);
  if (loading) return <p>Loading Product...</p>;
  if (error) return <p>Error: {error}</p>;

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
                        {product.productName}
                      </span>
                    </div>
                    {/**product card */}
                    <section className="flex bg-white rounded-[3px] shadow-ssm mt-5 p-0">
                      <h1 className="h-[1px] m-0 overflow-hidden absolute whitespace-nowrap w-[1px] -z-[1000] text-[2em]">
                        {product.productName}
                      </h1>
                      <ProductImage imageUrl={product.photo} />
                      <section className="flex-grow flex-shrink-0 basis-auto w-0 flex">
                        <div className="border-box pt-5 pr-[35px] pb-[0px] pl-5 w-full flex-1 basis-auto">
                          <TitleandRating
                            title={product.productName}
                            rating={product.averageRating}
                            ratingAmount={product.ratingCount}
                            itemSold={product.soldAmount}
                          />
                          <div className="mt-[10px]">
                            <ProductPriceInfo price={product.price} />
                          </div>
                          <div className="mt-[25px] py-0 px-[20px]">
                            <Quantitycontrol
                              stock={stock}
                              maxQuantity={product.stock}
                              onIncrement={handleIncrement}
                              onDecrement={handleDecrement}
                            />
                          </div>
                          <div className="mt-[15px]">
                            <ActionButton
                              price={product.price}
                              buttonAction={handleClick}
                            />
                          </div>
                          <div className="mt-[30px] border-t border-t-[rgba(0,0,0,0.05)]">
                            <AditionalInfo />
                          </div>
                        </div>
                      </section>
                    </section>
                    {/**shop */}
                    <section className="pt-[1.5625rem] bg-white rounded-sm shadow-ssm mt-[.9375rem] overflow-hidden block">
                      {seller ? (
                        <ProductSeller
                          shopImage={seller.shopImage}
                          shopName={seller.shopName}
                          productsAmount={seller.productsAmount}
                          totalRateCount={seller.totalRateCount}
                          joinDate={seller.dateTime}
                        />
                      ) : (
                        <p>loading informationi</p>
                      )}
                    </section>
                    {/**wAMdpk */}
                    <div className="block">
                      <div className="flex min-h-[40rem]">
                        <div className="flex-1 min-w-0">
                          <ProductDescription
                            category={product.category}
                            stock={product.stock}
                            description={product.description}
                          />
                          <div>
                            <div style={{ display: "contents" }}>
                              <ProductComment comments={comments} />
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
      </div>
      {showAlert && (
        <div role="alert">
          <div className="items-center bottom-0 flex justify-center left-0 fixed right-0 top-0 z-[10000] transition-opacity duration-100 ease-in-out">
            <div
              className="bg-[rgba(0,0,0,.7)] rounded-sm text-white cursor-default inline-block text-[1.0625rem]
        max-w-[25rem] min-w-[18.75rem] overflow-hidden py-10 px-5 text-center"
            >
              <div className="flex justify-center mb-[1.25rem]">
                <div className="items-center bg-[#00bfa5] rounded-[50%] h-[60px] text-center w-[60px] flex justify-center">
                  <Image
                    height={30}
                    width={30}
                    src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/9057d6e718e722cde0e8.svg"
                    alt="tick image"
                    className="border-0 overflow-clip"
                  />
                </div>
              </div>
              <div>Item has been added to your shopping cart</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
