'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import ProfileSideBar from '@/app/buyerkahwaiside/profileSideBar';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/Footer';

// Dynamically import pages
const Profile = React.lazy(() => import('./Profile'));
const BankAndCard = React.lazy(() => import('./BankAndCard'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const Address = React.lazy(() => import('./Address'));

export default function MyAccountPage() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || 'profile';

  const renderContent = () => {
    switch (page) {
      case 'profile':
        return <Profile />;
      case 'bankAndCard':
        return <BankAndCard />;
      case 'change-password':
        return <ChangePassword />;
      case 'address':
        return <Address />;
      default:
        return <div className="text-center">Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6 mt-[1rem] flex min-h-[calc(100vh-12rem)]">
        {/* Sidebar */}
        <ProfileSideBar activeItem={page} />

        {/* Main Content */}
        <section className="flex-1 bg-white rounded-md shadow p-6 ml-4 min-h-[calc(100vh-12rem)]">
          {renderContent()}
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
