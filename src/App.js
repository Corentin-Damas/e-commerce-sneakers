// import GalleryGeneral from "./Components/Gallery";
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import { CartProvider } from "./Components/CartContext";

export default function App() {
  return (
    <div className="page-containor">
      <CartProvider>
        <Nav />
        <Main />
      </CartProvider>
    </div>
  );
}
