import React from "react";
import Cart from "../components/layout/Cart";
import Footer from "../components/layout/Footer";


const CartData = () => {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <Cart />
      
    </div>
  );
};

export default CartData;
