import React, { useState } from "react";
import Card from "../../componentes/Cards";
import styles from "./SelecionaPerfil.module.css";
import { usuarios } from "../../data/usuarios";

function SelecionaPerfil() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  const handleLogin = (usuarioId) => {
    setUsuarioLogado(usuarios[usuarioId]);
    console.log("Usuário logado:", usuarios[usuarioId]);
  };

  return (
    <div id="login-screen" className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>
        Zer0<span className={styles.lightText}>Desperdício</span>
      </h1>
      <p className={styles.loginSubtitle}>Quem está usando o sistema?</p>
      <div className={styles.cards}>
        {Object.entries(usuarios).map(([id, user]) => (
          <Card key={id} usuario={user} onClick={() => handleLogin(id)} />
        ))}
      </div>

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