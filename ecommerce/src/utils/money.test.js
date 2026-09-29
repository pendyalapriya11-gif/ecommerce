import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

//describe is used to organize the testsuites  
describe("formatMoney", () => {
  it("formats 1999 cents as $19.99", () => {
    expect(formatMoney(1999)).toBe("$19.99"); //it will pass if output is same as the value present in toBe
  });
  //it() creates a test and inside braces describes the test or name of the test it should be in simple english

  it("displays 2 decimals", () => {
    expect(formatMoney(1090)).toBe("$10.90");
    expect(formatMoney(100)).toBe("$1.00"); //if one of the test fails all the test is failed
  });

  it("displays 2 decimals", () => {
    expect(formatMoney(0)).toBe("$0.00");
  });
  it("Check for negative numbers", () => {
    expect(formatMoney(-1090)).toBe("$-10.90");
  });
});
