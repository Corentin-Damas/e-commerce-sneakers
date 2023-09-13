import { useState } from "react";

export default function App() {
  return (
    <>
      <Gallery/>
      <MainImage />
    </>
  );
}

function Gallery() {
  return <h3 style={{ color: "red" }}>Hello from the React app</h3>;
}

function MainImage() {
  return (
    <div className="gallery-main-img">
      <img src="./images/image-product-1.jpg" alt="gallery 1"/>
    </div>
  )
}
