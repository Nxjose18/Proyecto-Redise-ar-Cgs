import React from "react";
import '../hojas-de-estilo/Card.css';

// Importación de activos
import cases from '../imagenes/cases.jpeg';
import cooler from '../imagenes/cooler.jpeg';
import sillas from '../imagenes/sillas.jpeg';
import teclado from '../imagenes/teclasdo.jpeg'; // Mantenemos la ruta, pero asignamos a un nombre claro

// Diccionario de imágenes para selección dinámica
const imagenes = {
  cases,
  cooler,
  sillas,
  teclado // Ahora coincide con el nombre de la variable importada
};

function Card(props) {
  return (
    <div className="card comp">
      <img
        className="imagen-card"
        src={imagenes[props.imagen]} 
        alt={`Foto de ${props.nombre}`}
      />
      <br /><br />
      <strong>{props.descripcion}</strong>
    </div>
  );
}

export default Card;