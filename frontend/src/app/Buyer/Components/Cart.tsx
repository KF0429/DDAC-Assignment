'use client';

import React, { useState } from 'react';
import FeedbackForm from '@/app/Buyer/Components/FeedbackForm';

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

interface CartProps {
  orders: Order[];
}

export default function Cart({ orders }: CartProps) {
  const [feedbackOpenForOrder, setFeedbackOpenForOrder] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [ratedItems, setRatedItems] = useState<{ [key: string]: boolean }>({}); // Track rated products

  const openFeedbackForm = (orderId: number, product: Product) => {
    setFeedbackOpenForOrder(orderId);
    setSelectedProduct(product);
    console.log('Order ID:', orderId, 'Product ID:', product.productID);
  };

  const closeFeedbackForm = () => {
    setFeedbackOpenForOrder(null);
    setSelectedProduct(null);
  };

  const markAsRated = (orderId: number, productId: number) => {
    setRatedItems((prev) => ({
      ...prev,
      [`${orderId}-${productId}`]: true, // Mark this order-product pair as rated
    }));
  };

  return (
    <div className="space-y-4 bg-gray-100">
      {orders.length === 0 ? (
        <p className="text-center">No orders found.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.orderID}
            className="bg-white rounded-md shadow p-4 border-gray-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Order #{order.orderID}</h3>
              <span
                className={`text-lg ${
                  order.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="border-t">
              <p className="text-lg">Order Date: {new Date(order.orderDate).toLocaleDateString()}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Products:</h4>
              {order.items.map((item) => (
                <div key={item.productID} className="mb-2 pt-1">
                  <p className="text-lg mb-2">Name: {item.productName}</p>
                  <p className="text-lg mb-2">Quantity: {item.quantity}</p>
                  <p className="text-lg font-bold mb-2">Subtotal: RM{item.subtotal}</p>
                  <div className="text-right mt-2">
                    <button
                      className={`py-1 px-3 rounded-md text-lg ${
                        ratedItems[`${order.orderID}-${item.productID}`]
                          ? 'bg-gray-500 text-white cursor-not-allowed'
                          : 'bg-[#ee4d2d] text-white hover:bg-[#d83e27]'
                      }`}
                      onClick={() => openFeedbackForm(order.orderID, item)}
                      disabled={ratedItems[`${order.orderID}-${item.productID}`]}
                    >
                      {ratedItems[`${order.orderID}-${item.productID}`] ? 'Done Rate' : 'Rate'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}

      {/* Feedback Form */}
      {feedbackOpenForOrder !== null && selectedProduct && (
        <FeedbackForm
          isOpen={!!feedbackOpenForOrder}
          orderId={feedbackOpenForOrder}
          product={selectedProduct}
          onClose={closeFeedbackForm}
          onFeedbackSubmitted={markAsRated}
        />
      )}
    </div>
  );
}
