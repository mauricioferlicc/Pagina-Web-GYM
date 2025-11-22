import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Inicio from './paginas/Inicio';
import Sobrenosotros from './paginas/Sobrenosotros';
import Planes from './paginas/Planes';
import Contact from './paginas/Contact';
import Tienda from './paginas/Tienda';

window.__reactRouterFutureFlags = {
  v7_startTransition: true,
  v7_relativeSplatPath: true
};

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobrenosotros" element={<Sobrenosotros />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tienda" element={<Tienda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;