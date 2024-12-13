"use client";
import React, { useEffect, useState } from "react";
import TopNav from "../Components/Header/TopNav";
import Footer from "../Components/General/Footer";
import CartHeader from "../Components/ShoppingCart/CartHeader";
import EmptyCart from "../Components/ShoppingCart/EmptyCart";
import CartItem from "../Components/ShoppingCart/CartItem";

interface CartItemType {
  productID: number;
  productName: string;
  photo: string;
  quantity: number;
  unitPrice: number;
  subTotal: number;
  shopName: string;
}
interface CartData {
  cartID: number;
  userID: number;
  cartItems: CartItemType[];
}

export default function ShopingCart() {
  const [cartData, setCartData] = useState<CartData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Retrieve userId from localStorage
  const getUserId = () => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      return parsedUser.userId || null; // Replace with the correct key for `userId`
    }
    return null;
  };

  const userId = getUserId();

  useEffect(() => {
    const fetchCartData = async () => {
      if (!userId) {
        setError("User not logged in.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:5088/api/Carts/${userId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data: CartData = await response.json();
        setCartData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };
    fetchCartData();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const isCartEmpty = !cartData || cartData.cartItems.length === 0;

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
                {isCartEmpty ? (
                  <EmptyCart />
                ) : (
                  <CartItem cartItems={cartData.cartItems} userID={userId} />
                )}
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
