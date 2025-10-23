import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 pra fazer o redirecionamento
import Card from "../../componentes/Cards";
import styles from "./SelecionaPerfil.module.css";
import { usuarios } from "../../data/usuarios";

function SelecionaPerfil() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const navigate = useNavigate(); // 👈 hook do react-router-dom

  const handleLogin = (usuarioId) => {
    const usuarioSelecionado = usuarios[usuarioId];

    // 1️⃣ Salva o usuário no localStorage
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioSelecionado));

    // 2️⃣ Atualiza o estado local (opcional, só pra exibir na tela antes de redirecionar)
    setUsuarioLogado(usuarioSelecionado);

    // 3️⃣ Redireciona para a página de retirada
    navigate("/retirada");
  };

  return (
    <div id="login-screen" className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>
        Zer0<span className={styles.lightText}>Desperdício</span>
      </h1>
      <p className={styles.loginSubtitle}>Quem está usando o sistema?</p>

      {/* Cards com perfis */}
      <div className={styles.cards}>
        {Object.entries(usuarios).map(([id, user]) => (
          <Card key={id} usuario={user} onClick={() => handleLogin(id)} />
        ))}
      </div>

      {/* Mostra o usuário logado (antes do redirecionamento, se quiser deixar por feedback visual) */}
      {usuarioLogado && (
        <div className={styles.userlogado}>
          <h2>Bem-vindo, {usuarioLogado.nome}</h2>
          <p>Secretaria: {usuarioLogado.secretaria}</p>
          <p>Cargo: {usuarioLogado.cargo}</p>
          <p>Permissões: {usuarioLogado.permissoes.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default SelecionaPerfil;
