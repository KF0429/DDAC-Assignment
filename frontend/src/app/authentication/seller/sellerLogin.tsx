'use client';

import React from 'react';
import Starting from '@/app/Components/Starting';
import { useRouter } from 'next/navigation';
import LoginForm from '@/app/Components/loginform';

export default function SellerLogin() {
  const router = useRouter();

  const handleLoginSubmit = async (formData: { emailOrPhone: string; password: string }) => {
    console.log('Seller Login Data Submitted:', formData);
  
    try {
      // Step 1: Attempt Login
      const loginResponse = await fetch('http://localhost:5088/api/SellersAuthentication/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phoneNumber: formData.emailOrPhone, // Assuming emailOrPhone is the phone number
          password: formData.password,
        }),
      });
  
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        console.log('Login successful:', loginData);
  
        const sellerId = loginData.sellerId; // Extract SellerId from login response
        const phoneNumber = formData.emailOrPhone;
  
        // Step 2: Fetch UserId using the phone number
        const userIdResponse = await fetch(`http://localhost:5088/api/SellersAuthentication/get-userid/${phoneNumber}`);
        if (userIdResponse.ok) {
          const userIdData = await userIdResponse.json();
          const userId = userIdData.userID;
  
          // Step 3: Store both UserId and SellerId in local storage
          localStorage.setItem('userId', userId.toString());
          localStorage.setItem('sellerId', sellerId.toString());
  
          // Log the stored values
          console.log('Stored userId:', localStorage.getItem('userId'));
          console.log('Stored sellerId:', localStorage.getItem('sellerId'));
  
          alert('Seller Login Successful!');
          router.push('/seller'); // Navigate to seller dashboard
        } else {
          console.error('Failed to fetch UserId:', await userIdResponse.json());
          alert('Failed to retrieve user information.');
        }
      } else {
        const error = await loginResponse.json();
        console.error('Login failed:', error);
        alert(error.Message || 'Invalid login credentials.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      alert('An error occurred. Please try again later.');
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
