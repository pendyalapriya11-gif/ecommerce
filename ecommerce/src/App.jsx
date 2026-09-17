import "./App.css";
import axios from "axios";
import { useState,useEffect } from "react";
import { Routes, Route } from "react-router";
import { HomePage } from "./Pages/HomePage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { OrdersPage } from "./Pages/OrdersPage";
import { TrackingPage } from "./Pages/TrackingPage";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>}></Route>
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
