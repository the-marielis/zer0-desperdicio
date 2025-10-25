import styles from "./BotaoSair.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function BotaoSair({ onClick }) {
  const navigate = useNavigate();
  const handleSair = () => {
    localStorage.removeItem("usuarioLogado");
    navigate("/selecionaperfil");
  }

  return (
    <button className={styles.botaoSair} onClick={handleSair}>
      <FontAwesomeIcon icon={faSignOutAlt} />
      Sair
    </button>
  );
}

export default BotaoSair;
