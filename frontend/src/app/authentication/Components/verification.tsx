'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function VerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access query parameters
  const phoneNumber = searchParams.get('phone') || ''; // Get phone number from query

  const [seconds, setSeconds] = useState(59);
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => setSeconds(seconds - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const handleCodeChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    if (value && index < 5) {
      (
        document.getElementById(`code-input-${index + 1}`) as HTMLInputElement
      )?.focus();
    }
  };

  const handleResendCode = () => {
    if (seconds === 0) {
      setSeconds(59);
      console.log('Resending verification code...');
    }
  };

  const navigateToBuyerPage = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      // Mock verification success
      console.log('Verification code entered:', code);
      // Navigate to Buyer Info page with phone number passed as a query parameter
      router.push(`/authentication?page=buyer&phone=${phoneNumber}`);
    } else {
      alert('Please enter a valid 6-digit code.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-center mb-6">
          Enter Verification Code
        </h2>
        <p className="text-center text-gray-600 mb-6">
          A verification code has been sent to your phone number <br />
          <strong>(+60) {phoneNumber}</strong>
        </p>
        <div className="flex justify-center mb-8">
          {verificationCode.map((value, index) => (
            <input
              key={index}
              id={`code-input-${index}`}
              type="text"
              maxLength={1}
              value={value}
              onChange={(e) => handleCodeChange(index, e.target.value)}
              className="w-10 h-10 mx-1 text-center text-2xl border-b-2 border-gray-300 focus:outline-none focus:border-red-500"
            />
          ))}
        </div>
        <p className="text-center text-gray-400 mb-8">
          {seconds > 0 ? (
            `Please wait ${seconds} seconds to resend.`
          ) : (
            <button
              onClick={handleResendCode}
              className="text-red-500 underline"
            >
              Resend code
            </button>
          )}
        </p>
        <button
          onClick={navigateToBuyerPage}
          className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
