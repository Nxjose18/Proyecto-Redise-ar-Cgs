import React from "react";
import Carrusel from "../componentes/Carrusel.jsx";

function Ofertas() {
  return (
    <div>
      <h1>OFERTAS</h1>
      <Carrusel 
        description="ANTRYX TRITON VISION SP360 ARGB BLACK COOLER CPU"
        precio="S/ 530.00"
        stock="Stock: 15 unds"
        agregar="Agregar 🛒"
      />
      <Carrusel 
        description="ANTRYX TRITON VISION SP360 ARGB BLACK COOLER CPU"
        precio="S/ 530.00"
        stock="Stock: 15 unds"
        agregar="Agregar 🛒"
      />
    </div>
  );
}

export default Ofertas;