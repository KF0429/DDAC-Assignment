'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Starting from '@/app/Components/Starting';
import { FiCheckCircle } from 'react-icons/fi';

export default function RegisterPage() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);
  const router = useRouter();

  const handleNextClick = () => {
    setShowVerificationModal(true);
  };

  const handleCloseModal = () => {
    setShowVerificationModal(false);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    setPhoneNumber(input);
    setIsValid(isPhoneNumberValid(input));
  };

  // Validate Malaysian phone number format
  const isPhoneNumberValid = (number: string) => {
    const phoneRegex = /^1\d{8,9}$/;
    return phoneRegex.test(number);
  };

  const formattedPhoneNumber = isValid
    ? `(+60) ${phoneNumber.slice(0, 2)} ${phoneNumber.slice(
        2,
        5
      )} ${phoneNumber.slice(5)}`
    : phoneNumber;

  const navigateToVerification = () => {
    if (isValid) {
      router.push(`/authentication/verification?phone=${phoneNumber}`);
    }
  };

  return (
    <Starting>
      <h2 className="text-xl font-medium mb-4 text-left">Sign Up</h2>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Phone Number"
          value={formattedPhoneNumber}
          onChange={handlePhoneNumberChange}
          className={`w-full p-3 border rounded-md mb-2 ${
            !isValid && phoneNumber ? 'border-red-500' : 'border-gray-300'
          } ${isValid ? 'border-green-500' : ''}`}
        />
        {isValid && <FiCheckCircle className="text-green-500 ml-2" size={24} />}
      </div>
      {!isValid && phoneNumber && (
        <p className="text-red-500 text-sm">Invalid Phone</p>
      )}
      <button
        onClick={handleNextClick}
        disabled={!isValid}
        className={`w-full bg-shopee-red text-white p-3 rounded-md mb-4 transition-opacity ${
          isValid
            ? 'opacity-100 cursor-pointer'
            : 'opacity-50 cursor-not-allowed'
        }`}
      >
        NEXT
      </button>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 shadow-lg w-[325px] text-center">
            <p className="text-gray-700 mb-4">
              We will send a verification code via SMS to
              <br />
              <span className="font-bold text-gray-900">
                (+60) {phoneNumber.slice(0, 2)} {phoneNumber.slice(2, 5)}{' '}
                {phoneNumber.slice(5)}
              </span>
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-gray-700 px-4 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={navigateToVerification}
                className="bg-[#ee4d2d] text-white px-4 py-2 hover:bg-[#d83e27]"
              >
                Send SMS
              </button>
            </div>
          </div>
        </div>
      )}
    </Starting>
  );
}
