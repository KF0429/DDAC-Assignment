'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

// Dynamically import your pages
const SellerRegister = dynamic(() => import('./sellerRegister'));
const SellerLogin = dynamic(() => import('./sellerLogin'));
const SellerPasswordSetup = dynamic(() => import('./SellerPasswordSetup'));


export default function SellerPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page'); // Query parameter to determine the page
  const phoneNumber = searchParams.get('phone') || ''; // Extract the phone number from query parameters
  const userId = Number(searchParams.get('userId')) || 0; // Convert userId to a number

  // Render the appropriate component
  switch (page) {
    case 'register':
      return <SellerRegister userType="seller" />;
    case 'login':
      return <SellerLogin />;
    case 'sellerpasswordsetup':
      return <SellerPasswordSetup phone={phoneNumber} />; // Pass phone as a prop

    default:
      return <div className="text-center">Page not found</div>;
  }
}
