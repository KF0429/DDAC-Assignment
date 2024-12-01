'use client';

import React, { useState } from 'react';

type SignUpFormProps = {
  onNext: (phone: string, nextRoute: string) => void; // Pass nextRoute to onNext
  title: string;
  nextRoute: string; // Define nextRoute as a required prop
};

export default function SignUpForm({
  onNext,
  title,
  nextRoute,
}: SignUpFormProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhoneNumber(input);
    setIsValid(isPhoneNumberValid(input));
  };

  // Validate phone number (Malaysian format)
  const isPhoneNumberValid = (number: string) => {
    const phoneRegex = /^1\d{8,9}$/; // Matches Malaysian phone numbers
    return phoneRegex.test(number);
  };

  const handleNextClick = () => {
    if (isValid) {
      onNext(phoneNumber, nextRoute); // Pass phoneNumber and nextRoute to the parent
    }
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter your phone number"
        className={`w-full p-3 border rounded-md mb-2 ${
          isValid ? 'border-green-500' : 'border-red-500'
        }`}
      />
      {!isValid && phoneNumber && (
        <p className="text-red-500 text-sm">Invalid phone number</p>
      )}
      <button
        onClick={handleNextClick}
        disabled={!isValid}
        className={`w-full bg-[#ee4d2d] text-white py-2 rounded-md ${
          isValid ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
        }`}
      >
        Next
      </button>
    </div>
  );
}
