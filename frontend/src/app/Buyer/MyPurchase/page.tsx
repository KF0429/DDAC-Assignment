'use client';

import Cart from '@/app/Buyer/Components/Cart';

import ProfileSideBar from '@/app/Buyer/Components/profileSideBar';
import Header from '@/app/Components/Header/Header';
import Footer from '@/app/Components/General/Footer';
const orders = [
  {
    id: '1',
    sellerName: 'sauceda.my',
    productName: 'Sony ',
    variation: 'coffee',
    quantity: 1,
    price: 'RM40.70',
    status: 'Parcel has been delivered',
    image: '',
  },
  {
    id: '2',
    sellerName: 'official_store.my',
    productName: 'Canon ',
    variation: 'black',
    quantity: 1,
    price: 'RM59.90',
    status: 'Parcel has been delivered',
    image: '', // Replace with actual image URL
  },
  {
    id: '3',
    sellerName: 'official_store.my',
    productName: 'FujiFlim ',
    variation: 'black',
    quantity: 1,
    price: 'RM59.90',
    status: 'Parcel has been delivered',
    image: '', // Replace with actual image URL
  },
];

export default function MyPurchase() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header />
      <div className="max-w-7xl mx-auto px-5 py-6 mt-[1rem] flex gap-4">
        <ProfileSideBar activeItem="orders" />
        {/* Main Content */}
        <div className="flex-1 w-full gap-4">
          <Cart orders={orders} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
