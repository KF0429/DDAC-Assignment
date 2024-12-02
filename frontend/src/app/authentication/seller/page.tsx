'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

// Dynamically import your pages
const SellerRegister = dynamic(() => import('./sellerRegister'));
const SellerLogin = dynamic(() => import('./sellerLogin'));

export default function SellerPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page'); // Query parameter to determine the page

  // Render the appropriate component
  switch (page) {
    case 'register':
      return <SellerRegister />;
    case 'login':
      return <SellerLogin />;
    default:
      return <div className="text-center">Page not found</div>;
  }
}
