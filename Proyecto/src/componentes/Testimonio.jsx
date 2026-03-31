import React from "react";
import '../hojas-de-estilo/Testimonio.css';

import emma from '../imagenes/testimonio-emma.png';
import sarah from '../imagenes/testimonio-sarah.png';
import shawn from '../imagenes/testimonio-shawn.png';

const imagenes = {
  emma,
  sarah,
  shawn
};

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={imagenes[props.imagen]}
        alt={`Foto de ${props.nombre}`}
      />

      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>

        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>

        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;
