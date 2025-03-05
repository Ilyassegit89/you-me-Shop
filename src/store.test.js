import { describe, it, expect, beforeEach  } from "vitest";
import useStore from "./store/store.js"


describe("onFilter", () => {
  beforeEach(() => {
    // Reset Zustand store state before each test
    useStore.setState({
      products: [
        { id: 1, title: "Product 1" },
        { id: 2, title: "Product 2" },
        { id: 3, title: "Product 1" },
      ],
    });
  });

  it("filters products by title", () => {
    const { onFilter } = useStore.getState();

    // Apply filter
    onFilter("Product 1");

    // Check if filtering worked
    const filteredProducts = useStore.getState().products;
    expect(filteredProducts.length).toBe(2);
    expect(filteredProducts.every((product) => product.title === "Product 1")).toBe(true);
  });

  it("returns an empty array if no products match the title", () => {
    const { onFilter } = useStore.getState();

    onFilter("Non-existing Product");

    const filteredProducts = useStore.getState().products;
    expect(filteredProducts.length).toBe(0);
  });
});
