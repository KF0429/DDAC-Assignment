'use client';

import React, { useState } from 'react';

type Address = {
  fullName: string;
  phoneNumber: string;
  state: string;
  postalCode: string;
  unitNo?: string; // Optional
  houseNumber: string;
};

export default function MyAddresses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [formData, setFormData] = useState<Address>({
    fullName: '',
    phoneNumber: '',
    state: '',
    postalCode: '',
    unitNo: '',
    houseNumber: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phoneNumber) {
      setAddresses([...addresses, formData]);
      setFormData({
        fullName: '',
        phoneNumber: '',
        state: '',
        postalCode: '',
        unitNo: '',
        houseNumber: '',
      });
      setIsModalOpen(false);
    }
  };

  const handleDelete = (index: number) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">My Addresses</h2>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-[#ee4d2d] text-white py-2 px-4 rounded-md hover:bg-[#d83e27]"
      >
        + Add New Address
      </button>
      {addresses.length === 0 ? (
        <p className="text-gray-500 mt-4">No addresses yet.</p>
      ) : (
        <div className="mt-6">
          {addresses.map((address, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md shadow-sm">
              <h3 className="font-semibold">{address.fullName}</h3>
              <p>{address.phoneNumber}</p>
              <p>
                {address.unitNo ? `${address.unitNo}, ` : ''}
                {address.houseNumber}, {address.state}, {address.postalCode}
              </p>
              <button
                onClick={() => handleDelete(index)}
                className="text-red-500 hover:underline mt-2"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-4">New Address</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
                required
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
                required
              />
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
              >
                <option value="">Select State</option>
                <option value="Kuala Lumpur">Kuala Lumpur</option>
                <option value="Selangor">Selangor</option>
                {/* Add more states as needed */}
              </select>
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
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
                name="houseNumber"
                placeholder="House Number, Building, Street Name"
                value={formData.houseNumber}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-md mb-3"
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
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
