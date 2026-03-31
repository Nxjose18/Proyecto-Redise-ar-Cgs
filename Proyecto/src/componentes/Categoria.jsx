import React from "react";
import '../hojas-de-estilo/Categoria.css';

function Categoria(props) {
  return (
        <li><div className="icono">
            <span className="barra b1"></span>
            <span className="barra b2"></span>
            <span className="barra b3"></span>
            </div><strong>{props.nombre}</strong>
        </li>
  )
}

export default Categoria;