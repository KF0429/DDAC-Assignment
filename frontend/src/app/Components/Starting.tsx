// Starting.tsx

'use client';

import { SiShopee } from 'react-icons/si';
import Link from 'next/link';
import React from 'react';

type StartingProps = {
  children: React.ReactNode;
};

export default function Starting({ children }: StartingProps) {
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

          {/* Right Side: Content */}
          <div className="bg-white p-8 rounded-md shadow-md w-[400px]">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
