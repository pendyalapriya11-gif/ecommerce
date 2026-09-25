import { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import { Product } from "./product";
import { Header } from "../components/header";
export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios("/api/products");
      setProducts(response.data);
    };
    getHomeData();
  }, []);
  //useEffect should not get promise as a return value as async function will return a promise we need towrap it inside another function

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      {/* as the cart is inside the header we need to pass into header component */}
      <div className="home-page">
        <div className="products-grid">
          {products.map((product) => {
            return (
              <Product key={product.id} product={product} loadCart={loadCart}/>
            );
          })}
        </div>
      </div>
    </>
  );
}
