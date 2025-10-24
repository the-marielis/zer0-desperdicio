import styles from "./BotaoSair.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function BotaoSair({ onClick }) {
  return (
    <button className={styles.botaoSair} onClick={onClick}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      Sair
    </button>
  );
}

export default BotaoSair;
