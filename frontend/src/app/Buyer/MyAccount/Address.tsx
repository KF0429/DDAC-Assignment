'use client';

import React, { useState, useEffect } from 'react';

type Address = {
  state: string;
  postalCode: string;
  unitNo?: string;
  houseDetails: string;
};

export default function MyAddresses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<Address>({
    state: '',
    postalCode: '',
    unitNo: '',
    houseDetails: '',
  });

  const baseUrl = 'http://localhost:5088'; // Backend API base URL

  // Fetch user ID from localStorage
  const getUserId = () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      return parsedUser.userId || null;
    }
    return null;
  };

  const userId = getUserId();

  // Fetch address data
  useEffect(() => {
    if (userId) {
      fetch(`${baseUrl}/api/Users/get-address/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch address data');
          }
          return response.json();
        })
        .then((data) => {
          setAddress(data.address ? parseAddress(data.address) : null);
        })
        .catch((error) => {
          console.error('Error fetching address data:', error);
        });
    }
  }, [userId]);

  // Parse combined address string into Address object
  const parseAddress = (address: string): Address => {
    const parts = address.split(',').map((part) => part.trim());
    return {
      unitNo: parts[0],
      houseDetails: parts[1],
      state: parts[2],
      postalCode: parts[3],
    };
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId) {
      alert('User ID not found. Please log in again.');
      return;
    }

    const combinedAddress = `${formData.unitNo || ''}, ${formData.houseDetails}, ${formData.state}, ${formData.postalCode}`.trim();

    try {
      const response = await fetch(`${baseUrl}/api/Users/update-address/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: formData.state,
          postalCode: formData.postalCode,
          unitNo: formData.unitNo,
          houseDetails: formData.houseDetails,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update address');
      }

      const data = await response.json();
      setAddress(parseAddress(data.address));
      alert('Address updated successfully!');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating address:', error);
      alert('Failed to update address. Please try again.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">My Addresses</h2>
      <button
        onClick={() => {
          setIsModalOpen(true);
          setFormData({
            state: address?.state || '',
            postalCode: address?.postalCode || '',
            unitNo: address?.unitNo || '',
            houseDetails: address?.houseDetails || '',
          });
        }}
        className="bg-[#ee4d2d] text-white py-2 px-4 rounded-md hover:bg-[#d83e27]"
      >
        {address ? 'Edit Address' : '+ Add New Address'}
      </button>

      {address ? (
        <div className="mt-6">
          <div className="mb-4 p-4 border rounded-md shadow-sm">
            <h3 className="font-semibold">Address Details</h3>
            <p>
              {address.unitNo ? `${address.unitNo}, ` : ''}
              {address.houseDetails}, {address.state}, {address.postalCode}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No address found.</p>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">
              {address ? 'Edit Address' : 'New Address'}
            </h3>
            <form onSubmit={handleSubmit}>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
                required
              >
                <option value="">Select State</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Selangor">Selangor</option>
              </select>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
                required
              />
              <input
                type="text"
                name="unitNo"
                placeholder="Unit No (Optional)"
                value={formData.unitNo}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
              />
              <input
                type="text"
                name="houseDetails"
                placeholder="House Number, Building, Street Name"
                value={formData.houseDetails}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
                required
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#ee4d2d] text-white py-2 px-4 rounded-md hover:bg-[#d83e27]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
