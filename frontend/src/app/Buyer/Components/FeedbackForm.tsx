'use client';

import React, { useState, useEffect } from 'react';

interface Product {
  productID: number;
  productName: string;
}

interface FeedbackFormProps {
  isOpen: boolean;
  orderId: number;
  product: Product;
  onClose: () => void;
  onFeedbackSubmitted: (orderId: number, productId: number) => void; // Callback to mark as rated
}

export default function FeedbackForm({
  isOpen,
  orderId,
  product,
  onClose,
  onFeedbackSubmitted,
}: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUserId(parsedUser.userId || null);
    }
  }, []);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const handleSubmit = async () => {
    if (!userId) {
      alert('User ID is missing. Please log in again.');
      return;
    }

    try {
      const formData = {
        userID: userId,
        productID: product.productID,
        orderID: orderId,
        rating,
        commentPhoto: null, // Always null
        qualityFeedback: feedback,
        commentDescription: feedback,
      };

      const response = await fetch('http://localhost:5088/api/Comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Backend error:', errorData);
        throw new Error(errorData.Message || 'Failed to submit feedback');
      }

      alert('Feedback submitted successfully!');
      onFeedbackSubmitted(orderId, product.productID); // Mark this item as rated
      onClose();
      setRating(0);
      setFeedback('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      if (error instanceof Error) {
        alert(`Failed to submit feedback. Reason: ${error.message}`);
      } else {
        alert('Failed to submit feedback. Reason: Unknown error.');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[500px]">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Feedback for {product.productName}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= rating ? '#fbbf24' : 'none'}
              stroke="#fbbf24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleStarClick(star)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"
              />
            </svg>
          ))}
        </div>

        {/* Feedback Text Area */}
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-4 border rounded-md mb-6"
          placeholder="Write your feedback here..."
          rows={4}
        />

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-between">
          <button className="text-gray-500 hover:underline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
