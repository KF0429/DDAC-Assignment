'use client';

import Cart from '@/app/Buyer/Components/Cart';
import ProfileSideBar from '@/app/Buyer/Components/profileSideBar';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/General/Footer';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function MyPurchase() {
  const [orders, setOrders] = useState<any[]>([]);
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderID'); // Extract orderID from query params

  // Fetch order data by orderID
  useEffect(() => {
    if (orderId) {
      fetch(`http://localhost:5088/api/Orders/GetOrderedItem-with-ID/${orderId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch orders');
          }
          return response.json();
        })
        .then((data) => {
          const formattedOrder = {
            id: data.orderID,
            userId: data.userID,
            orderDate: new Date(data.orderDate).toLocaleDateString(),
            status: data.status,
            items: data.items.map((item: any) => ({
              productID: item.productID,
              productName: item.productName,
              quantity: item.quantity,
              price: `RM${item.unitPrice}`,
              subtotal: `RM${item.subtotal}`,
            })),
          };
          setOrders([formattedOrder]);
        })
        .catch((error) => {
          console.error('Error fetching orders:', error);
        });
    }
  }, [orderId]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
      <div className="max-w-7xl mx-auto px-5 py-6 mt-[1rem] flex gap-4">
        <ProfileSideBar activeItem="orders" />
        {/* Main Content */}
        <div className="flex-1 w-full gap-4">
          {orders.length > 0 ? (
            <Cart orders={orders} />
          ) : (
            <p>No orders found for the provided Order ID.</p>
          )}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
