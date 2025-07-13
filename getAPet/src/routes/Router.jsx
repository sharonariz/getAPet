import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Catalogo from '../pages/Catalogo';

const Router = () => {
  return (
    <Routes>
      <Route path="/catalogo/:categoria" element={<Catalogo />} />
    </Routes>
  );
};

export default Router;
