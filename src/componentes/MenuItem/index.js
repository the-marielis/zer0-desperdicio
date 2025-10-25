import React from "react";
import styles from "./menuItem.module.css";

function MenuItem({ icon, label, onClick, active }) {
  return (
    <button
      className={`${styles.menuItem} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <span className={styles.menuIcon}>{icon}</span>
      <span className={styles.menuLabel}>{label}</span>
    </button>
  );
}

export default MenuItem;
