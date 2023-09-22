// import GalleryGeneral from "./Components/Gallery";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="page-containor">
      <Nav cartItems={cartItems} />
      <Main  cartItems={cartItems} setCartItems={setCartItems}/>
      {/* <GalleryGeneral /> */}
    </div>
  );
}
