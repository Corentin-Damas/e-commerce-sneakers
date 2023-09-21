import { useState } from "react";
const btnAddCart = document.querySelector(".cta_btn_addToCart");

export default function Cart({ itemsInCart }) {

  console.log(itemsInCart);
  return (
    <>
      <h5>Cart</h5>
      <hr className=".hr-cart" />
      <CartItems cartListItem={itemsInCart} />
    </>
  );

  function CartItems({ itemsInCart }) {
    if (itemsInCart === 0)
      return <h4 className="cart-empty">Your cart is empty</h4>;
  }
}
