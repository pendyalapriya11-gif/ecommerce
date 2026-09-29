import { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import { Product } from "../product";
import { Header } from "../../components/header";
import { useSearchParams } from "react-router";


export function HomePage({ cart, loadCart }) {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search? `api/products?search=${search}`: '/api/products';
      const response = await axios(urlPath);
      setProducts(response.data);
    };
    getHomeData();
  }, [search]);
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
