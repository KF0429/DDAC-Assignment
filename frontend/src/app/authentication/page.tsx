'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

// Dynamically import your components
const BuyerPage = dynamic(() => import('./buyerPasswordSetup'));
const LoginPage = dynamic(() => import('./login'));
const RegisterPage = dynamic(() => import('./register'));
const VerificationPage = dynamic(() => import('./Components/verification'));

export default function Authentication() {
  const searchParams = useSearchParams();
  const route = searchParams.get('page'); // Get the route (e.g., "register", "buyer", etc.)
  const phoneNumber = searchParams.get('phone') || undefined; // Convert null to undefined

  switch (route) {
    case 'buyer':
      return <BuyerPage phone={phoneNumber} />; // Pass phoneNumber prop
    case 'login':
      return <LoginPage />;
    case 'register':
      return <RegisterPage />;
    case 'verification':
      return <VerificationPage />;

    default:
      return <div className="text-center">Page not found</div>;
  }
}
