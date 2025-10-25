import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SelecionaPerfil from "./paginas/selecionaPerfil"; 
import Retirada from "./paginas/retirada";
import PainelGestor from "./paginas/painelGestor";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selecionaperfil" element={<SelecionaPerfil />} />
        <Route path="/" element={<Navigate to="/selecionaperfil" replace />} />
        <Route path="/retirada" element={<Retirada />} />
        <Route path="/painelgestor" element={<PainelGestor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;