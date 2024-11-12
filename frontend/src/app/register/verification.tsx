// othermethod.tsx
import { useRouter } from 'next/router';
import { FaWhatsapp, FaPhone, FaSms } from 'react-icons/fa';

export default function OtherMethod() {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  const handleSendSmsClick = () => {
    router.push('/verification'); // Navigate to verification page
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex items-center mb-4">
        <span className="text-green-500">1</span>
        <span className="mx-2">→</span>
        <span>2</span>
        <span className="mx-2">→</span>
        <span>3</span>
      </div>
      <h2 className="text-xl font-semibold mb-4">Select Verification Method</h2>
      <p className="text-gray-600 mb-6">
        Select one of the methods below to send verification code to
      </p>
      <p className="text-2xl font-bold text-gray-900 mb-8">(+60) 16 227 8292</p>

      <button
        onClick={handleBackClick}
        className="text-red-500 text-lg mb-4 flex items-center"
      >
        ← Back
      </button>

      <div className="flex flex-col items-center space-y-4 w-80">
        <button className="w-full p-4 rounded-md bg-green-100 flex items-center justify-center space-x-2">
          <FaWhatsapp className="text-green-500" />
          <span>WhatsApp</span>
        </button>
        <button className="w-full p-4 rounded-md bg-blue-100 flex items-center justify-center space-x-2">
          <FaPhone className="text-blue-500" />
          <span>Voice Call</span>
        </button>
        <button
          onClick={handleSendSmsClick}
          className="w-full p-4 rounded-md bg-blue-100 flex items-center justify-center space-x-2"
        >
          <FaSms className="text-blue-500" />
          <span>SMS</span>
        </button>
      </div>
    </div>
  );
}
