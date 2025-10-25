import styles from "./BotaoSair.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function BotaoSair({ onClick, size = "medio" }) {
  const navigate = useNavigate();
  const handleSair = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/selecionaperfil");
  }

  const classeBotao = `${styles.botaoSair} ${styles[size]}`;

  return (
    <button className={classeBotao} onClick={handleSair}>
      <FontAwesomeIcon icon={faSignOutAlt} className={styles.icone} />
      Sair
    </button>
  );
}

BotaoSair.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["pequeno", "medio", "grande"]),
};

export default BotaoSair;
