import "./CheckoutPage.css";
import { useState } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { useEffect } from "react";
import OrderSummary from "./OrderSummary";
import PaymentSummary from "./PaymentSummary";
import axios from "axios";
export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime",
      );
      setDeliveryOptions(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    fetchCheckoutData();
  }, []);

  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const reloadCart = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };
    reloadCart();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}
