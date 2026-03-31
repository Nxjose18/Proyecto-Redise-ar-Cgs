import React from 'react';
import './App.css';
import Header from './componentes/Header.jsx';
import Card from './componentes/Card.jsx';
import Categoria from './componentes/Categoria.jsx';
import rtx from './imagenes/rtx.jpeg';
import Carrusel from './componentes/Carrusel.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="banner">
          <img className="rtx" src={rtx} alt="Banner principal" />
        </section>
        <section className="categorias">
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

        </section>
        <br /> <br />
      <section className='container'>
          <div className='sidebar'>
            <h2 >Categorias:</h2>
            <ul>
                <Categoria nombre="PROCESADORES" />
                <Categoria nombre="PLACA MADRE" />
                <Categoria nombre="ALMACENAMIENTO" />
                <Categoria nombre="MEMORIA RAM" />
                <Categoria nombre="FUENTE" />
                <Categoria nombre="TARJETA DE VIDEO" />
                <Categoria nombre="COOLER" />
                <Categoria nombre="MONITOR" />
                <Categoria nombre="LAPTOP" />
                <Categoria nombre="MINI PC" />
                <Categoria nombre="PROYECTOR" />
              </ul>
          </div>

          <div className="content"> 
            <div className="sections-wrapper">
              <div className="main-section">
                <h3 className="section-title">PRODUCTOS EXCLUSIVOS</h3>
                <div class="carousel-container">
                    <button class="arrow-btn">❮</button>
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
                    <button class="arrow-btn">❯</button>
                </div>
              </div>
              <div className="main-section">
                <h3 className="section-title">OFERTAS</h3>
                <div class="carousel-container">
                    <button class="arrow-btn">❮</button>
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
                    <button class="arrow-btn">❯</button>
                </div>
              </div>
            </div>
            <div className="novedades-sidebar">
                <h3 className="section-title">NOVEDADES</h3>
                <div class="novedad-banner">
                    <img src={rtx} alt="Novedad 1" />
                </div>
                <div class="novedad-banner">
                    <img src={rtx} alt="Novedad 1" />
                </div>  
                <div class="novedad-banner">
                  <img src={rtx} alt="Novedad 1" />
                </div>  
                <div class="novedad-banner">
                  <img src={rtx} alt="Novedad 1" />
                </div>
                <div class="novedad-banner">
                  <img src={rtx} alt="Novedad 1" />
                </div>  
            </div>

          </div>
      </section>
      </main>
    </div>
  )
}

export default App;
