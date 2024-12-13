'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Starting from '@/app/Components/Starting';
import SignUpForm from '@/app/Components/signupform';

interface RegisterPageProps {
  userType: 'seller'; // Define the user type dynamically
}

export default function SellerRegister({ userType }: RegisterPageProps) {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  const handleNext = async (phone: string) => {
    setPhoneNumber(phone);

    // Check if the phone number exists in the Users database
    try {
      const response = await fetch('http://localhost:5088/api/SellersAuthentication/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: phone }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(error.Message || 'Error verifying phone number.');
        return;
      }

      // Proceed to verification page if the phone number is valid
      setShowVerificationModal(true);
    } catch (err) {
      console.error('Error during phone number validation:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleSendSMS = () => {
    router.push(`/authentication?page=verification&phone=${phoneNumber}&userType=seller`);
  };

  const navigateToLogin = () => {
    router.push('/authentication/seller?page=login'); // Navigate to the login page
  };

  return (
    <Starting>
      <SignUpForm
        onNext={handleNext}
        title="Sign Up as Seller"
        nextRoute="verification" // Pass the nextRoute prop
      />

      {/* "Already have an account?" Link */}
      <div className="text-center mt-4">
        <p className="text-gray-700">
          Already have an account?{' '}
          <button
            onClick={navigateToLogin}
            className="text-[#ee4d2d] hover:underline font-semibold"
          >
            Log in
          </button>
        </p>
      </div>

      {/* Verification Modal */}
      {showVerificationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 shadow-lg w-[325px] text-center">
            <p className="text-gray-700 mb-4">
              We will send a verification code via SMS to
              <br />
              <span className="font-bold text-gray-900">
                (+60) {phoneNumber.slice(0, 2)} {phoneNumber.slice(2, 5)} {phoneNumber.slice(5)}
              </span>
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowVerificationModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSendSMS}
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
