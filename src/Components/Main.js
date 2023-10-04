import { useState } from "react";
import GalleryGeneral from "./Gallery";
import ItemCounter from "./ItemCounter";

function Main() {

  return (
    <main>
      <section className="main__container">
        <div className="grid__gallery">
          {<GalleryGeneral/>}
        </div>
        <div className="container-presentation">
          <div className="product__description">
            <h3 className="brand u-S-margin-bot">Sneaker Company</h3>
            <h1 className="shoes-edition u-M-margin-bot">
              Fall Limited Edition Sneakers
            </h1>
            <p className="u-S-margin-bot">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>
          <div className="product__price u-M-margin-bot">
            <h2 className="price">$125.00</h2>
            <h3 className="promotion">50%</h3>
            <h4 className="old-price u-line-through">$250.00</h4>
          </div>
          <div className="product__add-cart">
            <div className="u-inline" id="itemCounter">
              <ItemCounter />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
