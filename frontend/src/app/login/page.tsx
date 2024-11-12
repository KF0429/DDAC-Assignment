'use client';

import React from 'react';
import { SiShopee } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-shopee-red flex flex-col">
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
            <span className="text-black font-medium text-2xl">Login</span>
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
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-md mb-4"
            />
            <button className="w-full bg-shopee-red text-white p-3 rounded-md mb-4 opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
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
    </div>
  );
}
