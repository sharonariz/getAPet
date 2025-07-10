import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App.jsx'; // página de inicio
import Catalogo from './pages/Catalogo.jsx';
import Adopta from './pages/Adopta.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/catalogo/:categoria" element={<Catalogo />} />
        <Route path="/adopta" element={<Adopta />} />      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
