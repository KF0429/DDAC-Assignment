'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SiShopee } from 'react-icons/si';

export default function SellerRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter(); // Initialize the router

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    alert('Registration Completed!');
    router.push('/authentication/seller?page=login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Header */}
      <header className="bg-white py-4 shadow">
        <div className="max-w-6xl mx-auto px-4 flex items-center space-x-4">
          {/* Shopee Logo */}
          <Link
            href="/authentication/seller?page=login"
            className="flex items-center space-x-2"
          >
            <SiShopee size={40} color="#ee4d2d" />
            <h1 className="text-3xl font-medium text-[#ee4d2d]"></h1>
          </Link>

          {/* Registration Title */}
          <h1 className="text-3xl font-medium text-[#ee4d2d]">
            Shopee Seller Registration
          </h1>
        </div>
      </header>

      {/* Progress Steps */}
      <div className="max-w-6xl mx-auto px-6 mt-6">
        <div className="flex items-center space-x-4">
          {/* Step 1 */}
          <div
            className={`flex items-center space-x-2 ${
              currentStep >= 1 ? 'text-red-500 font-semibold' : 'text-gray-400'
            }`}
          >
            <span className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              1
            </span>
            <span>Seller Information</span>
          </div>
          <span className="text-gray-400">›</span>

          {/* Step 2 */}
          <div
            className={`flex items-center space-x-2 ${
              currentStep >= 2 ? 'text-red-500 font-semibold' : 'text-gray-400'
            }`}
          >
            <span className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              2
            </span>
            <span>Shop Information</span>
          </div>
          <span className="text-gray-400">›</span>

          {/* Step 3 */}
          <div
            className={`flex items-center space-x-2 ${
              currentStep >= 3 ? 'text-red-500 font-semibold' : 'text-gray-400'
            }`}
          >
            <span className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              3
            </span>
            <span>Shipping Channel</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto mt-6 bg-white p-6 shadow-md">
        {currentStep === 1 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Seller Information</h2>
            <form>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border w-full p-2 mb-4 rounded"
              />
              <label className="block mb-2 font-medium">IC</label>
              <input
                type="text"
                placeholder="Enter your Indentity Number"
                className="border w-full p-2 mb-4 rounded"
              />
              <label className="block mb-2 font-medium">Billing Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                className="border w-full p-2 mb-4 rounded"
              />
            </form>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Shop Information</h2>
            <form>
              <label className="block mb-2 font-medium">Shop Name</label>
              <input
                type="text"
                placeholder="Enter your shop name"
                className="border w-full p-2 mb-4 rounded"
              />
              <label className="block mb-2 font-medium">Pickup Address</label>
              <input
                type="text"
                placeholder="Enter your pickup address"
                className="border w-full p-2 mb-4 rounded"
              />
            </form>
          </div>
        )}

        {currentStep === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Shipping Channel</h2>
            <form>
              {/* Doorstep Delivery */}
              <div className="mb-4">
                <input type="checkbox" id="doorstep" className="mr-2" />
                <label htmlFor="doorstep">Doorstep Delivery</label>
              </div>

              {/* Self Collection */}
              <div className="mb-4">
                <input type="checkbox" id="self-collection" className="mr-2" />
                <label htmlFor="self-collection">Self Collection</label>
              </div>
            </form>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400"
            >
              Back
            </button>
          )}
          {currentStep < 3 ? (
            <button
              onClick={handleNext}
              className="bg-[#ee4d2d] text-white px-4 py-2 rounded-md hover:bg-[#d83e27]"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#ee4d2d] text-white px-4 py-2 rounded-md hover:bg-[#d83e27]"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
