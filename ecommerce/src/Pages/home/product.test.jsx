import { it, expect, describe, vi, beforeEach } from "vitest";
import { Product } from "./product";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import React from "react";
import userEvent from "@testing-library/user-event";

vi.mock("axios");
//whenever we use axios it will create a fake method
describe("product component", () => {
  let product ;
  let loadCart ;

  beforeEach(()=>{
    product = {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1090,
    keywords: ["socks", "sports", "apparel"],
  }; 
  loadCart = vi.fn();

  });

  it("displays the product details correctly", () => {
    render(<Product product={product} loadCart={loadCart} />);

    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(screen.getByText("$10.90")).toBeInTheDocument();

    expect(screen.getByTestId("product-image")).toHaveAttribute(
      "src",
      "images/products/athletic-cotton-socks-6-pairs.jpg",
    );

    expect(screen.getByTestId("rating-image")).toHaveAttribute(
      "src",
      "images/ratings/rating-45.png",
    );

    expect(screen.getByText("87")).toBeInTheDocument();
  });

  it("adds a product to the cart", async () => {
    render(<Product product={product} loadCart={loadCart} />);

    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId("add-to-cart-button");
    await user.click(addToCartButton);

    expect(axios.post).toHaveBeenCalledWith("/api/cart-items", {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    });
    //all these check when we click on add to cart axios.post is runned and gave these values

    expect(loadCart).toHaveBeenCalled();
  });
});
//to test this component we need a product component which has two parameters product details and loadCart function which interacts with backend so for testing we take sample one product details and for the loadcart function we created a fake function to safely run the test to check whether the test is correct or not we use screen to display the fakewebpage result
//getByText() will check the screen if the required text is present or not
//@testing-library/user-event(library) lets us simulate the events like clicking a button
