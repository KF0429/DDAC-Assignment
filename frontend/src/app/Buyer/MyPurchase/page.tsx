'use client';

import React, { useEffect, useState } from 'react';
import Cart from '@/app/Buyer/Components/Cart';
import ProfileSideBar from '@/app/Buyer/Components/profileSideBar';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/General/Footer';

interface Product {
  productID: number;
  productName: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

interface Order {
  orderID: number;
  userID: number;
  orderDate: string;
  status: string;
  items: Product[];
}

export default function MyPurchase() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const getUserId = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      return parsedUser.userId || null;
    }
    return null;
  };

  const userId = getUserId();

  useEffect(() => {
    if (!userId) {
      console.error('No userId found in localStorage');
      setLoading(false);
      return;
    }

    const fetchOrders = async () => {
      try {
        console.log(`Fetching orders for userId=${userId}`);
        const response = await fetch(`http://localhost:5088/api/Orders?userId=${userId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch orders for userId=${userId}`);
        }
        const ordersData = await response.json();

        const ordersWithItems = await Promise.all(
          ordersData.map(async (order: any) => {
            const orderDetailsResponse = await fetch(
              `http://localhost:5088/api/Orders/GetOrderedItem-with-ID/${order.orderID}`
            );
            if (!orderDetailsResponse.ok) {
              throw new Error(`Failed to fetch order details for orderID=${order.orderID}`);
            }
            const orderDetails = await orderDetailsResponse.json();
            return { ...order, items: orderDetails.items };
          })
        );

        setOrders(ordersWithItems);
      } catch (error) {
        console.error('Error fetching orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-6 mt-[1rem] flex gap-4">
        {/* Sidebar */}
        <ProfileSideBar activeItem="orders" />

        {/* Orders */}
        <div className="flex-1">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <Cart orders={orders} />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
