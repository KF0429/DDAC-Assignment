'use client';

import React, { useState } from 'react';

interface FeedbackFormProps {
  isOpen: boolean;
  orderId: string | null;
  onClose: () => void;
}

export default function FeedbackForm({
  isOpen,
  orderId,
  onClose,
}: FeedbackFormProps) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [photos, setPhotos] = useState<File[]>([]);

  const handleStarClick = (star: number) => {
    setRating(star);
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos([...photos, ...Array.from(e.target.files)]);
    }
  };

  const handleSubmit = () => {
    console.log('Feedback submitted for Order:', orderId, {
      rating,
      feedback,
      photos,
    });
    onClose();
    setRating(0);
    setFeedback('');
    setPhotos([]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-[500px]">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Leave Feedback for Order {orderId}
        </h3>

        {/* Star Rating */}
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= rating ? '#fbbf24' : 'none'}
              stroke="#fbbf24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="w-8 h-8 cursor-pointer"
              onClick={() => handleStarClick(star)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"
              />
            </svg>
          ))}
        </div>

        {/* Feedback Text Area */}
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          className="w-full p-4 border rounded-md mb-6"
          placeholder="Write your feedback here..."
          rows={4}
        />

        {/* Upload Photo */}
        <div className="mb-6">
          <label
            htmlFor="photo-upload"
            className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md cursor-pointer hover:bg-gray-300"
          >
            Upload Photo
          </label>
          <input
            id="photo-upload"
            type="file"
            multiple
            className="hidden"
            onChange={handlePhotoUpload}
          />
        </div>

        {/* Preview Uploaded Photos */}
        <div className="flex gap-3 mb-6">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={URL.createObjectURL(photo)}
              alt={`Uploaded ${index + 1}`}
              className="w-16 h-16 object-cover rounded-md"
            />
          ))}
        </div>

        {/* Submit and Cancel Buttons */}
        <div className="flex justify-between">
          <button className="text-gray-500 hover:underline" onClick={onClose}>
            Cancel
          </button>
          <button
            className="bg-[#ee4d2d] text-white py-3 px-6 rounded-md hover:bg-[#d83e27]"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
