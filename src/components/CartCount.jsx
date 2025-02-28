import React from "react";
import { useProductContext } from "../assets/context/ProductContext";

const CartCount = () => {
  const { carts } = useProductContext();
  const cartCountNum = carts.length;

  return cartCountNum >= 1 ? (
    <span className="absolute -top-1 -right-[-40px] md:-right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-fadeIn">
      {cartCountNum}
    </span>
  ) : null;
};

export default CartCount;
