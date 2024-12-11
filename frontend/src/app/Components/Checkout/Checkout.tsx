"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/app/lib/convertToSubcurrency";

const Checkout = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:3000/payment-sucess?amount=${amount}`, //redirect to the purchase history page
      },
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
    }
    setLoading(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#f5f5f5] p-4 rounded-[3px] w-full max-w-[400px]"
    >
      {clientSecret && <PaymentElement />}
      {errorMessage && <div>{errorMessage}</div>}
      <button
        disabled={!stripe || loading}
        className="text-white w-full p-3 bg-[#ee4d2d] mt-2 rounded-sm font-bold
      disabled:opacity-50 disabled:animate-pulse"
      >
        {!loading ? `Pay RM ${amount.toFixed(2)}` : "Processing..."}
      </button>
    </form>
  );
};
export default Checkout;
