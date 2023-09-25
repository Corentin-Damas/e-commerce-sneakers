import { useState } from "react";
import { useCart } from "./CartContext";

export default function Cart({isOpen}) {
  const { cartItems, setCartItems } = useCart();


  return (
    <div className={`shoppingcart-widget ${!isOpen? "cartClosed" : ""}`}>
      <h5>Cart</h5>
      <hr className=".hr-cart" />
      <CheckCart cartItems={cartItems} />
    </div>
  );

  function handleDelete() {
    setCartItems(0);
  }
  function CheckCart({ cartItems }) {
    console.log(cartItems);
    if (cartItems === 0) {
      return <h4 className="cart-empty">Your cart is empty</h4>;
    }
    return (
      <div className="cart-resume-container">
        <div className="cart-resumer">
          <img
            className="resume-img"
            src="./images/image-product-1-thumbnail.jpg"
            alt={`miniarture 1`}
          />
          <p className="resume-text">
            Fall Limited Edition Sneakers <br /> $125.00 x {cartItems}{" "}
            <span className="u-bolder"> ${cartItems * 125}.00</span>
          </p>
          <button className="btn-delete" onClick={handleDelete}>
            <span>🗑️</span>
          </button>
        </div>
        <button className="btn-checkout">Checkout</button>
      </div>
    );
  }
}
