import React from "react";
import Header from "../componentes/Header.jsx";
import rtx from "../imagenes/rtx.jpeg";

function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="banner">
          <img className="rtx" src={rtx} alt="Banner principal" />
        </section>
        <h2>Bienvenido a la tienda</h2>
      </main>
    </div>
  );
}

export default Home;