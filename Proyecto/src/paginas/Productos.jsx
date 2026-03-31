import React from "react";
import Card from "../componentes/Card.jsx";

function Productos() {
  return (
    <div>
      <h1>PRODUCTOS EXCLUSIVOS</h1>
      <Card 
        imagen="cooler" 
        nombre="Cooler CPU" 
        descripcion="TOP COOLERS" 
      />
      <Card 
        imagen="sillas" 
        nombre="Silla Pro" 
        descripcion="TOP SILLAS GAMER" 
      />
      <Card 
        imagen="teclado" 
        nombre="Teclado Pro" 
        descripcion="TOP TECLADOS" 
      />
      <Card 
        imagen="cases" 
        nombre="Case Gamer" 
        descripcion="TOP CASES" 
      />
    </div>
  );
}

export default Productos;