import { useState } from "react";

function ItemCounter({ cartItems, setCartItems }) {
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
  }

  return (
    <>
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
    </>
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
