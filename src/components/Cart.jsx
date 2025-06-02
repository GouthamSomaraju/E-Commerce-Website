import React from "react";
import Navbar from "./navbar";

const Cart = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>Shopping Cart</h2>
        <p>Your selected items will appear here.</p>
      </div>
    </>
  );
};

export default Cart;
