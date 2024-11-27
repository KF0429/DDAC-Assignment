'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

export default function VerificationPage() {
  const searchParams = useSearchParams();
  const phoneNumber = searchParams.get('phone'); // Retrieve phone number from query
  const router = useRouter();

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
      ).focus();
    }
  };

  const handleNext = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      console.log('Verification code submitted:', code);
      router.push(`/authentication/buyer?phone=${phoneNumber}`);
    }
  };

  const handleResendCode = () => {
    if (seconds === 0) {
      setSeconds(59);
      console.log('Resending verification code...');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <button
            className="text-red-500"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft size={20} />
          </button>
          <h2 className="text-xl font-semibold text-center w-full">
            Enter Verification Code
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-6">
          Your verification code is sent by SMS to <br />
          <span className="font-bold text-gray-900">
            (+60) {phoneNumber?.slice(0, 2)} {phoneNumber?.slice(2, 5)}{' '}
            {phoneNumber?.slice(5)}
          </span>
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
          onClick={handleNext}
          className="w-full bg-[#ee4d2d] text-white py-3 rounded-md hover:bg-[#d83e27]"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
