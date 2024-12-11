'use client';

import React, { useState } from 'react';

interface AddCardModalProps {
  onClose: () => void;
  onSubmit: (newCard: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    nameOnCard: string;
    billingAddress: string;
  }) => void;
}

export default function AddCardModal({ onClose, onSubmit }: AddCardModalProps) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    billingAddress: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Add New Card</h2>
        <div className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date (MM/YY)"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="nameOnCard"
            placeholder="Name on Card"
            value={formData.nameOnCard}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="billingAddress"
            placeholder="Billing Address"
            value={formData.billingAddress}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-md"
          />
        </div>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#ee4d2d] text-white rounded-md hover:bg-[#d83e27]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
