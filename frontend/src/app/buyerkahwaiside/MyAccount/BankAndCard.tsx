'use client';

import React, { useState } from 'react';
import AddCardModal from '@/app/buyerkahwaiside/Components/addcardModel';

export default function BankAndCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cards, setCards] = useState<
    {
      cardNumber: string;
      expiryDate: string;
      cvv: string;
      nameOnCard: string;
      billingAddress: string;
    }[]
  >([]);

  const handleAddCard = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitCard = (newCard: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    nameOnCard: string;
    billingAddress: string;
  }) => {
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <div className="p-1">
      <h1 className="text-xl font-semibold mb-4">Credit / Debit Card</h1>
      <button
        className="bg-[#ee4d2d] text-white px-4 py-2 rounded-md hover:bg-[#d83e27]"
        onClick={handleAddCard}
      >
        + Add New Card
      </button>
      {isModalOpen && (
        <AddCardModal onClose={handleCloseModal} onSubmit={handleSubmitCard} />
      )}
      <div className="mt-6">
        {cards.length === 0 ? (
          <p className="text-gray-600"></p>
        ) : (
          <ul className="space-y-4">
            {cards.map((card, index) => (
              <li key={index} className="border rounded-md p-4">
                <p>Card Number: **** **** **** {card.cardNumber.slice(-4)}</p>
                <p>Expiry Date: {card.expiryDate}</p>
                <p>Name on Card: {card.nameOnCard}</p>
                <p>Billing Address: {card.billingAddress}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
