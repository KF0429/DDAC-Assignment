'use client';

import React, { useState } from 'react';
import { SiShopee } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

export default function LoginPage() {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

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

  // Validate Malaysian phone number format (starts with '1' and followed by 8 or 9 more digits)
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

  return (
    <div className="min-h-screen bg-shopee-red flex flex-col relative">
      {/* Header Section */}
      <header className="shadow-md h-[84px] flex items-center bg-white">
        <div className="container mx-auto max-w-[1200px] flex justify-between items-center h-full px-8">
          <div className="flex items-center space-x-2">
            {/* Shopee Logo and Text */}
            <Link href="/" className="flex items-center space-x-2">
              <SiShopee size={40} color="#ee4d2d" />
              <h1 className="text-3xl font-medium text-[#ee4d2d]">Shopee</h1>
            </Link>

            {/* Non-clickable Sign Up Text */}
            <span className="text-black font-medium text-2xl">Sign Up</span>
          </div>

          {/* Need Help Link */}
          <Link href="#" className="text-[#ee4d2d] font-medium">
            Need help?
          </Link>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Logo & Text */}
          <div className="text-center md:text-left mb-8 md:mb-0 md:w-1/2">
            <SiShopee size={205} color="#fff" className="mx-auto" />
            <h2 className="text-6xl font-medium text-white mt-4">Shopee</h2>
            <p className="text-2xl text-white mt-4 leading-normal">
              The leading online shopping platform <br />
              in Southeast Asia and Taiwan
            </p>
          </div>

          {/* Right Side: Sign-up Form */}
          <div className="bg-white p-8 rounded-md shadow-md w-[400px]">
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
              {isValid && (
                <FiCheckCircle className="text-green-500 ml-2" size={24} />
              )}
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

            {/* OR Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-300">OR</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-between space-x-2">
              <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-black p-3 w-[48%] rounded-md cursor-pointer">
                <FaFacebook size={20} color="#1877F2" />
                <span>Facebook</span>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-black p-3 w-[48%] rounded-md cursor-pointer">
                <FcGoogle size={20} />
                <span>Google</span>
              </button>
            </div>
            <p className="text-center text-s mt-4">
              By signing up, you agree to Shopee{' '}
              <a href="#" className="text-[#ee4d2d]">
                Terms of Service
              </a>{' '}
              &{' '}
              <a href="#" className="text-[#ee4d2d]">
                Privacy Policy
              </a>
              .
            </p>

            <p className="text-center text-gray-300 text-sm mt-2">
              Have an account?{' '}
              <Link href="/auth/login" className="text-[#ee4d2d]">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </main>

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
              {/* Use Link component to navigate to /verification */}
              <Link href="/register/verification" passHref>
                <button
                  onClick={handleCloseModal}
                  className="bg-[#ee4d2d] text-white px-4 py-2 hover:bg-[#d83e27]"
                >
                  Send SMS
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
