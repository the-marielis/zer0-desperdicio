import React from "react";
import styles from "./SelecionaPerfil.module.css";

export default function SelecionaPerfil() {
  return (
    <div id="login-screen" className={styles.loginContainer}>
      <h1 className={styles.loginTitle}>
        Zer0<span className={styles.lightText}>Desperdício</span>
      </h1>
      <p className={styles.loginSubtitle}>Quem está usando o sistema?</p>
      <div id="user-profiles" className={styles.profilesContainer}>
        {/* Exemplos de cards só pra testar */}
        <div className={styles.card}>Administrador</div>
        <div className={styles.card}>Funcionário</div>
        <div className={styles.card}>Convidado</div>
      </div>
    </div>
  );
}
