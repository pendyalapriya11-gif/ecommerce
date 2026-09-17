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
    const fetchAppData = async ()=>{
        const response = await axios.get("/api/cart-items?expand=product");
        setCart(response.data);
    }
    fetchAppData();
    //we used query parameter to get the details of product also in cart array
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}/>} />
      <Route path="/checkout" element={<CheckoutPage cart={cart}/>}></Route>
      <Route path="/orders" element={<OrdersPage cart={cart}/>} />
      <Route path="/tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
