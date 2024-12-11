'use client';

import React, { useState } from 'react';
import FeedbackForm from '@/app/Buyer/Components/FeedbackForm';

interface Order {
  id: string;
  sellerName: string;
  productName: string;
  variation: string;
  quantity: number;
  price: string;
  status: string;
  image: string;
}

interface CartProps {
  orders: Order[];
}

export default function Cart({ orders }: CartProps) {
  const [feedbackOpenForOrder, setFeedbackOpenForOrder] = useState<
    string | null
  >(null);

  const openFeedbackForm = (orderId: string) => {
    setFeedbackOpenForOrder(orderId);
  };

  const closeFeedbackForm = () => {
    setFeedbackOpenForOrder(null);
  };

  return (
    <div className="space-y-4 bg-gray-100">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-md shadow p-4 border border-gray-200"
        >
          {/* Top Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-semibold">{order.sellerName}</h3>
              <button className="text-sm text-red-500 font-medium px-2 py-1 border border-red-500 rounded">
                View Shop
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-green-600">{order.status}</span>
              <span className="text-sm text-red-500 font-semibold">
                COMPLETED
              </span>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex items-center space-x-4">
            <img
              src={order.image}
              alt={order.productName}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {order.productName}
              </p>
              <p className="text-sm text-gray-600">
                Variation: {order.variation}
              </p>
              <p className="text-sm text-gray-600">x{order.quantity}</p>
            </div>
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-lg text-[#ee4d2d] font-bold">{order.price}</p>
          </div>

          {/* Action */}
          <div className="text-right mt-4">
            <button
              className="bg-[#ee4d2d] text-white py-2 px-4 rounded-md hover:bg-[#d83e27]"
              onClick={() => openFeedbackForm(order.id)}
            >
              Rate
            </button>
          </div>
        </div>
      ))}

      {/* Feedback Form */}
      <FeedbackForm
        isOpen={!!feedbackOpenForOrder}
        orderId={feedbackOpenForOrder}
        onClose={closeFeedbackForm}
      />
    </div>
  );
}
