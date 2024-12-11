import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QUjwjG4pl327CYRJ0XE7IfW47COuSxULqaPJeVe4THJRxUGRouTnip7sETq5kQDkS1YdR9XLRiOC5w9evuBM1eJ009tCq2OSi" // Use the correct API version
);

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "myr",
      automatic_payment_methods: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: `Internal Server Error:${error}` },
      { status: 500 }
    );
  }
}
