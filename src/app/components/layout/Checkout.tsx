"use client";
<<<<<<< HEAD
import { useState } from "react";
import { size } from "../../../../sanity/size";
=======
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
>>>>>>> 4bb8079d3adcced51be2f1b2130ae4d76fe95184

const CheckoutForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  


  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          address: address,
          payment_method: paymentMethod,
          
        }),
      });

      console.log({ name, email, address, paymentMethod });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="mb-4 text-2xl font-bold">Checkout Form</h2>
<<<<<<< HEAD
      <form onSubmit={handleSubmit}>
        {/* name field */}
=======
      <form action="/api/checkout_sessions" method="POST">
>>>>>>> 4bb8079d3adcced51be2f1b2130ae4d76fe95184
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block mb-1">
            Address:
          </label>
          <textarea
            id="address"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block mb-1">
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="COD">Cash On Deliver</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Place Order
        
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
