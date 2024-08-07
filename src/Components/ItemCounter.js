import { useState } from "react";
import { useCart } from "./CartContext";

function ItemCounter() {
  const { cartItems, setCartItems } = useCart();

  const [itemCount, setItemCount] = useState(0);

  function handleAdd() {
    if (itemCount >= 0) {
      setItemCount((s) => s + 1);
    }
  }

  function handleRemove() {
    if (itemCount > 0) {
      setItemCount((s) => s - 1);
    }
  }

  function handleAddToCart() {
    setCartItems(cartItems + itemCount);
    setItemCount(0);
  }

  return (
    <div className="product__add-cart">
      <div className="addRemoveItems">
        <Button onClick={handleRemove}>-</Button>
        <p className="btn-number">{itemCount}</p>
        <Button onClick={handleAdd}>+</Button>
      </div>
      <div className="add_cart">
        <button className="cta_btn_addToCart" onClick={handleAddToCart}>
          <span className="cart-logo">&nbsp;</span> Add to cart
        </button>
      </div>
    </div>
  );
}

function Button({ children, onClick }) {
  return (
    <button className="btn__cart" onClick={onClick}>
      {children}
    </button>
  );
}

export default ItemCounter;
