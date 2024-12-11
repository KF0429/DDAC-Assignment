'use client';

import React from 'react';

type BannerProps = {
  currentStep: number;
};

export default function SellerRegisterBanner({ currentStep }: BannerProps) {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        {/* Step Indicator */}
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
          <span className="text-gray-400">›</span>

          {/* Step 4 */}
          <div
            className={`flex items-center space-x-2 ${
              currentStep === 4 ? 'text-red-500 font-semibold' : 'text-gray-400'
            }`}
          >
            <span className="w-6 h-6 flex items-center justify-center border-2 rounded-full">
              4
            </span>
            <span>Submit</span>
          </div>
        </div>

        {/* Help Section */}
        <div>
          <a href="#" className="text-red-500 text-sm hover:underline">
            Need help?
          </a>
        </div>
      </div>
    </div>
  );
}
