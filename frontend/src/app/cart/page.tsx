"use client";
import React from "react";
import TopNav from "../Components/Header/TopNav";
import Footer from "../Components/General/Footer";
import CartHeader from "../Components/ShoppingCart/CartHeader";
import EmptyCart from "../Components/ShoppingCart/EmptyCart";
import { Cart } from "../lib/Mock/CartData";
import CartItem from "../Components/ShoppingCart/CartItem";

export default function shopingCart() {
  const isCartEmpty = Cart.length === 0;
  return (
    <div className="flex flex-col min-h-[100vh] relative">
      <header
        className="bg-gradient-to-b from-[#f53d2d] to-[#f63] 
      transition-transform duration-200 ease-[cubic-bezier(.4,0,.2,1)] min-w-[1200px] block"
      >
        <div className="bg-transparent h-[2.125rem] relative z-[400] min-w-[1200px]">
          <TopNav />
        </div>
      </header>
      <div className="flex-1">
        <div style={{ display: "contents" }}>
          <div className="transition-margin-top duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]">
            <div>
              <CartHeader />
              {/**container */}
              <div className="ml-auto mr-auto w-[1200px]">
                {isCartEmpty ? <EmptyCart /> : <CartItem cart={Cart} />}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mx-0 mb-[70px]"></div>
      <Footer />
    </div>
  );
}
