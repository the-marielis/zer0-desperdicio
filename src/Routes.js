import { BrowserRouter, Routes, Route } from "react-router-dom";
import selecionaPerfil from "./paginas/selecionaPerfil";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/selecionaperfil" element={<selecionaPerfil />}>
        </Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default AppRoutes;