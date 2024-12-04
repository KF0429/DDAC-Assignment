'use client';

import React from 'react';
import Starting from '@/app/Components/Starting';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/Components/loginform';

export default function SellerLogin() {
  const router = useRouter();

  const handleLoginSubmit = (formData: {
    emailOrPhone: string;
    password: string;
  }) => {
    console.log('Seller Login Data:', formData);

    // Mock validation
    if (
      formData.emailOrPhone === 'seller@example.com' &&
      formData.password === 'password'
    ) {
      alert('Seller Login Successful!');
      router.push('/seller'); // Navigate to seller dashboard
    } else {
      alert('Invalid login credentials for seller!');
    }
  };

  const navigateToRegister = () => {
    router.push('/authentication/seller?page=register&type=seller'); // Navigate to seller registration
  };

  return (
    <Starting>
      <LoginForm
        userType="seller"
        onSubmit={handleLoginSubmit}
        navigateToRegister={navigateToRegister}
      />
    </Starting>
  );
}
