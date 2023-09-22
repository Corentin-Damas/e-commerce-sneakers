export default function Cart({ cartItems }) {
  return (
    <>
      <h5>Cart</h5>
      <hr className=".hr-cart" />
      <CheckCart cartItems={cartItems} />
    </>
  );

  function CheckCart({ cartItems }) {
    console.log(cartItems);
    if (cartItems === 0) {
      return <h4 className="cart-empty">Your cart is empty</h4>;
    }
    return (
      <div className="cart-resume-container">
        <div className="resumer">
          <img
            className="img-resume"
            src="./images/image-product-1-thumbnail.jpg"
            alt={`miniarture 1`}
          />
          <h4>
            Fall Limited Edition Sneakers <br/> $125.00 x {cartItems} $
            {cartItems * 125}
          </h4>
          <button className="btn-delete">
            <span>🗑️</span>
          </button>
        </div>
      </div>
    );
  }
}
