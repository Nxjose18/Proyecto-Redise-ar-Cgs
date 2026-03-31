import React from "react";
import '../hojas-de-estilo/carrusel.css';

function Carrusel(props) {
  return (
          <div className="products-grid">
              <div className="product-card">
                  <img src="" alt="" />
                  <p className="p-name">{props.description}</p>
                  <div className="p-tags">
                      <span className="tag-price">{props.precio}</span>
                      <span className="tag-stock">{props.stock}</span>
                  </div>
                  <div className="qty-selector">
                      <button className="qty-btn">-</button>
                      <span>0</span>
                      <button className="qty-btn">+</button>
                  </div>
                  <button className="cart-btn">{props.agregar}</button>
              </div>
          </div>
  );
}

export default Carrusel;