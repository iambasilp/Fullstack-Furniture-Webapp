// components/payment/Payment.jsx
import React, { useState } from "react";
import "./Payment.css";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate  = useNavigate()
  const {setCartItems} = useContext(CartContext)
  const [processing, setProcessing] = useState(false);

  const handlePayment = (event) => {
    event.preventDefault();
    setProcessing(true);
    
    
    console.log("Processing payment...");


    setTimeout(() => {
      alert("Payment successful!");
      setCartItems({})
      navigate('/shop')
      setProcessing(false);


    }, 2000); 
  };

  return (
    <div className="payment">
      <h2>Payment Page</h2>
      <form className="payment-form" onSubmit={handlePayment}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required />

        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" placeholder="CVV" required />

        <label htmlFor="cardHolderName">Cardholder Name:</label>
        <input type="text" id="cardHolderName" name="cardHolderName" placeholder="Enter cardholder name" required />

        <div className="payment-buttons">
          <button type="submit" className="pay-button" disabled={processing}>
            {processing ? "Processing..." : "Pay Now"}
          </button>
  
          <button className="google-pay-button">Pay with Google Pay</button>
        </div>
      </form>
    </div>
  );
};

export default Payment;
