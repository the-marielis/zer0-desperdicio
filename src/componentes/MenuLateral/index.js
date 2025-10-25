import styles from "./MenuLateral.module.css";
import MenuItem from "../MenuItem";
import { FaSignOutAlt, FaRobot  } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { FaArrowRightArrowLeft, FaBoxesStacked, FaUsersGear  } from "react-icons/fa6";
import { VscSettings } from "react-icons/vsc";

function MenuLateral({
  nomeUsuario = "Carlos Pereira",
  cargo = "Gestor de TI",
  onLogout,
  onSelect,
  activeItem,
}) {
  const itens = [
    { icon: <IoSpeedometer />, label: "Resumo Gerencial", key: "resumo" },
    { icon: <FaArrowRightArrowLeft />, label: "Movimentar Estoque", key: "movimentar" },
    { icon: <FaBoxesStacked  />, label: "Consultar Estoque", key: "consultar" },
    { icon: <FaUsersGear />, label: "Usuários", key: "usuarios" },
    { icon: <VscSettings />, label: "Configurações", key: "configuracoes" },
    { icon: <FaRobot  />, label: "Suporte IA", key: "ia" },
  ];

  return (
    <aside className={styles.menuLateral}>
      <div className={styles.menuHeader}>
        <h1 className={styles.menuLogo}>
          Zer0<span className={styles.menuLogoLight}>Desperdício</span>
        </h1>
      </div>

      <nav className={styles.menuNav}>
        {itens.map((item) => (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.key}
            onClick={() => onSelect(item.key)}
          />
        ))}
      </nav>

      <div className={styles.menuFooter}>
        <div className={styles.userInfo}>
          <img
            src="https://placehold.co/40x40/718096/FFFFFF?text=CP"
            alt="Avatar"
          />
          <div className={styles.userText}>
            <p className={styles.userName}>{nomeUsuario}</p>
            <p className={styles.userRole}>{cargo}</p>
          </div>
          <button className={styles.logoutBtn} onClick={onLogout} title="Sair">
            <FaSignOutAlt size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default MenuLateral;
