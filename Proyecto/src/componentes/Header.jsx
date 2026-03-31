import '../hojas-de-estilo/Header.css';

import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="logo">COMPUTER</div>
        <input type="text" placeholder="Busca tus productos aquí..." />
        <div className="menu">
          <a href=" "><span>Iniciar Sesión   </span></a>
          <a href=""><span>Carrito 🛒</span> </a>
        </div>
      </div>

      <nav>
        <a href="#">Laptops</a>
        <a href="#">PC Gamer</a>
        <a href="#">PC Oficina</a>
        <a href="#">Ofertas</a>
      </nav>
    </header>
  );
};

export default Header;
