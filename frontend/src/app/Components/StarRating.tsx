import React from "react";

interface RatingProps {
  rating: number; // The rating value from 0 to 5
}

const StarRating: React.FC<RatingProps> = ({ rating }) => {
  const integerRating = Math.floor(rating); // Integer part of the rating
  const hasHalfStar = rating - integerRating >= 0.5; // Check if there is a half-star

  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => {
        if (index < integerRating) {
          // Full star
          return (
            <div
              key={index}
              className="sA0Z6s w-4 h-4 bg-yellow-500"
              style={{
                maskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                WebkitMaskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                maskSize: "cover",
                WebkitMaskSize: "cover",
              }}
            ></div>
          );
        } else if (index === integerRating && hasHalfStar) {
          // Half star
          return (
            <div
              key={index}
              className="sA0Z6s w-4 h-4 bg-yellow-500"
              style={{
                maskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                WebkitMaskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                maskSize: "cover",
                WebkitMaskSize: "cover",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                overflow: "hidden",
              }}
            >
              <div className="w-2 h-4 bg-yellow-500"></div>
            </div>
          );
        } else {
          // Empty star
          return (
            <div
              key={index}
              className="sA0Z6s w-4 h-4 bg-gray-300"
              style={{
                maskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                WebkitMaskImage: `url("https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/fb6d53c6a2749e183033.svg")`,
                maskSize: "cover",
                WebkitMaskSize: "cover",
              }}
            ></div>
          );
        }
      })}
    </div>
  );
};

export default StarRating;
