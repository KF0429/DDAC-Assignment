'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Footer from '../Components/Footer';

export default function ShopeeCloneCarousel() {
  const images = [
    'https://cf.shopee.com.my/file/my-11134258-7rasj-m1gs8pipzdif69_xhdpi',
    'https://cf.shopee.com.my/file/my-11134258-7rasc-m1lj1mfx2trb00_xxhdpi',
    'https://cf.shopee.com.my/file/my-11134258-7rasg-m1guq0oyyr6v41_xxhdpi',
    'https://cf.shopee.com.my/file/my-11134258-7rasb-m1gui9i3j096cd_xxhdpi',
  ]; // Replace with your image URLs

  const totalSlides = images.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000); // 3-second interval

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [totalSlides]);

  return (
    <div className="relative overflow-hidden w-full h-[300px]">
      {/* Carousel List */}
      <ul
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${totalSlides * 100}%`,
        }}
      >
        {images.map((image, index) => (
          <li key={index} className="flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={1000} // Adjust as needed
              height={800} // Adjust as needed
              className="object-cover"
              priority={index === 0} // Optimize the first image for faster loading
            />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}
