import React from "react";
import styles from "./Cards.module.css";

function Card({ usuario, onClick }) {
    return (
        <div className={styles.card} onClick={onClick}>
            <img src={usuario.avatar} alt={usuario.nome} className={styles.avatar} />
            <h3 className={styles.nome}>{usuario.nome}</h3>
            <p className={styles.cargo}>{usuario.cargo}</p>
        </div>
    );
}

export default Card;