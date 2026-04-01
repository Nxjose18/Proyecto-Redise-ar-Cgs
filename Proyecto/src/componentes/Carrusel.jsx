import React, { useState } from "react";
import '../hojas-de-estilo/carrusel.css';

function Carrusel(props) {

  // 1. Creamos el estado
  const [cantidad, setCantidad] = useState(0);

  // 2. Función para aumentar
  const aumentar = () => {
    setCantidad(cantidad + 1);
  };

  // 3. Función para disminuir (sin negativos)
  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="products-grid">
      <div className="product-card">
        <img src={props.imagen} alt="producto" />

        <div className="contenido_card">
          <p className="p-name">{props.description}</p>

          <div className="p-tags">
            <span className="tag-price">{props.precio}</span>
            <span className="tag-stock">{props.stock}</span>
          </div>

          <div className="qty-selector">
            <button className="qty-btn" onClick={disminuir}>-</button>
            <span>{cantidad}</span>
            <button className="qty-btn" onClick={aumentar}>+</button>
          </div>

          <button className="cart-btn">{props.agregar}</button>
        </div>
      </div>
    </div>
  );
}

export default Carrusel;