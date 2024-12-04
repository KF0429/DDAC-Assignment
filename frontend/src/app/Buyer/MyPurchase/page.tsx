'use client';

import React, { useState, useEffect } from 'react';
import ProfileSideBar from '@/app/Buyer/profileSideBar';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/General/Footer';

interface Order {
  id: string;
  date: string;
  items: string[];
  status: string;
}

export default function MyPurchase() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Simulate fetching orders from an API or database
    const fetchOrders = () => {
      const sampleOrders: Order[] = [
        {
          id: '12345',
          date: '2024-12-01',
          items: ['Item A', 'Item B'],
          status: 'Completed',
        },
        {
          id: '67890',
          date: '2024-11-25',
          items: ['Item C'],
          status: 'To Ship',
        },
      ];
      setOrders(sampleOrders);
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 py-6 mt-[1rem] flex gap-4">
        {/* Sidebar */}

        <ProfileSideBar activeItem="orders" />

        {/* Main Content */}
        <section className="flex-1 bg-white rounded-md shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          {orders.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-500">No orders yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="border rounded-md p-4 shadow-sm bg-white hover:shadow-lg"
                >
                  <div className="flex justify-between">
                    <h3 className="font-medium">Order ID: {order.id}</h3>
                    <span className="text-sm text-gray-500">{order.date}</span>
                  </div>
                  <div className="text-gray-600">
                    <p>Items:</p>
                    <ul className="list-disc list-inside">
                      {order.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <p
                    className={`mt-2 font-semibold ${
                      order.status === 'Completed'
                        ? 'text-green-600'
                        : 'text-yellow-500'
                    }`}
                  >
                    Status: {order.status}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
