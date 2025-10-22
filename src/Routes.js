import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SelecionaPerfil from "./paginas/selecionaPerfil"; // importa a pasta -> index.js
import Retirada from "./paginas/retirada"; // importa a pasta -> index.js
import React from "react";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selecionaperfil" element={<SelecionaPerfil />} />
        <Route path="/" element={<Navigate to="/selecionaperfil" replace />} />
        <Route path="/retirada" element={<Retirada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;