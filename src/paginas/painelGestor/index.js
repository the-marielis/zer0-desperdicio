import React, { useState } from "react";
import MenuLateral from "../../componentes/MenuLateral";
import styles from "./painelGestor.module.css";

function PainelGestor() {
  const [activeView, setActiveView] = useState("resumo");

  const handleSelect = (key) => setActiveView(key);
  const handleLogout = () => alert("Você saiu do sistema!");

  return (
    <div className={styles.painelView}>
      <MenuLateral
        onSelect={handleSelect}
        activeItem={activeView}
        onLogout={handleLogout}
      />
      <main className={styles.main}>
        {activeView === "resumo" && <h2>📊 Resumo Gerencial</h2>}
        {activeView === "movimentar" && <h2>📦 Movimentar Estoque</h2>}
        {activeView === "consultar" && <h2>🔍 Consultar Estoque</h2>}
        {activeView === "usuarios" && <h2>👥 Usuários</h2>}
        {activeView === "configuracoes" && <h2>⚙️ Configurações</h2>}
        {activeView === "ia" && <h2>🤖 Suporte IA</h2>}
      </main>
    </div>
  );
}

export default PainelGestor;
