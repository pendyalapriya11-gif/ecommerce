import { it, expect, describe, vi } from "vitest";
import { Product } from "./product";
import { render, screen } from "@testing-library/react";
import React from "react";
describe("product component", () => {
  it("displays the product details correctly", () => {
    const product = {
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
    const loadCart = vi.fn();
    render(<Product product={product} loadCart={loadCart} />);
    expect(
      screen.getByText("Black and Gray Athletic Cotton Socks - 6 Pairs"),
    ).toBeInTheDocument();

    expect(
        screen.getByText("$10.90")
    ).toBeInTheDocument();

    expect(
        screen.getByTestId('product-image')
    ).toHaveAttribute('src','images/products/athletic-cotton-socks-6-pairs.jpg');

    expect(
        screen.getByTestId('rating-image')
    ).toHaveAttribute('src','images/ratings/rating-45.png');

    expect(
        screen.getByText('87')
    ).toBeInTheDocument();
  });
});
//to test this component we need a product component which has two parameters product details and loadCart function which interacts with backend so for testing we take sample one product details and for the loadcart function we created a fake function to safely run the test to check whether the test is correct or not we use screen to display the fakewebpage result
//getByText() will check the screen if the required text is present or not
