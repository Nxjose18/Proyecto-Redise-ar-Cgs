import '../hojas-de-estilo/Header.css';
import React from 'react';
import logoImg from '../imagenes/logo.png';
import buscarIcon from '../imagenes/buscar.png';
import carritoIcon from '../imagenes/carrito.png';
import usuarioIcon from '../imagenes/usuario.png';

const Header = () => {
  return (
    <>
      <header className="header-completo">

        <div className="top-bar">
          <div className="logo">
            <img src={logoImg} alt="Logo" className="logo-img" />
          </div>

          <div className="buscador_contenedor">
            <input type="text" placeholder="Busca tus productos aquí..." />
            <img src={buscarIcon} alt="Buscar" className="icono-buscar" />
          </div>

          <div className="menu">
            <a className="opciones_menu" href="#">
              Iniciar Sesión
              <img src={usuarioIcon} alt="Usuario" className="icono-usuario" />
            </a>

            <a className="opciones_menu" href="#">
              Carrito
              <img src={carritoIcon} alt="Carrito" className="icono-carrito" />
            </a>
          </div>
        </div>

        <nav>
          <a href="#">Laptops</a>
          <a href="#">PC Gamer</a>
          <a href="#">PC Oficina</a>
          <a href="#">Ofertas</a>
        </nav>

        <div className="cuadros_container">
          <div className="cuadro">PROMOCION 30% DE DESCUENTO</div>
          <div className="cuadro">PROMOCION 30% DE DESCUENTO</div>
        </div>

      </header>

      <main className="contenido">
        {/* Aquí va TODO tu contenido */}
      </main>
    </>
  );
};

export default Header;