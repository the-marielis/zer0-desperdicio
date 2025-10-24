import React, { useEffect, useState } from "react";
import "./Retirada.css";
import BotaoSair from "../../componentes/BotaoSair";
import { IoCamera, IoSearch } from "react-icons/io5";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

function Retirada() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // Tenta carregar o usuário salvo no localStorage
    const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuarioSalvo) {
      setUsuarioLogado(usuarioSalvo);
    } else {
      // Caso não tenha usuário logado, redireciona pra tela de seleção de usuário
      window.location.href = "/";
    }
  }, []);

  return (
    <div id="retirada-view" className="retirada-container">
      <div className="retirada-grid">
        {/* Lado esquerdo */}
        <div>
          {/* Saudação e botão de sair */}
          <div className="card">
            <div className="top-section">
              <div>
                <h2 className="titulo">
                  Olá,{" "}
                  <span id="user-name-retirada">
                    {usuarioLogado ? usuarioLogado.nome : "Carregando..."}
                  </span>
                  !
                </h2>
                <p className="subtitulo">
                  Interface de Retirada (
                  <span id="user-secretaria-retirada" className="negrito">
                    {usuarioLogado ? usuarioLogado.secretaria : "Carregando..."}
                  </span>
                  )
                </p>
              </div>
              <BotaoSair />
            </div>
          </div>

          {/* Monitoramento */}
          <div className="card text-center">
            <h3 className="titulo-secundario">Monitoramento</h3>
            <div className="video-container">
              <video
                id="camera-feed"
                className="camera"
                autoPlay
                playsInline
              ></video>
              <img
                id="camera-placeholder"
                src="/imagens/no-camera.png"
                alt="Imagem da câmera"
                className="imagem-camera"
              />
            </div>

            <div className="botoes-duplos">
              <button id="start-camera-btn" className="btn btn-azul">
                <IoCamera
                  size={25}
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />
                Ativar Câmera
              </button>

              <button id="view-all-stock-btn" className="btn btn-cinza">
                <BsFillClipboardDataFill
                  size={25}
                  style={{ marginRight: "8px", verticalAlign: "middle" }}
                />{" "}
                Consultar Estoques
              </button>
            </div>
          </div>
        </div>

        {/* Lado direito */}
        <div>
          <div className="card-direito">
            <h3 className="titulo-secundario">Adicionar Item</h3>

            <div className="campo">
              <label>1. Pesquisar Produto (Código ou Nome)</label>
              <div className="campo-icone">
                <IoSearch className="icone-lupa" />
                <input
                  type="text"
                  id="product-search-input"
                  placeholder="Digite para pesquisar..."
                />
              </div>
              <div id="search-results" className="resultados"></div>
            </div>

            <div className="campo-quantidade">
              <label>2. Informe a Quantidade</label>
              <input
                type="number"
                id="product-quantity"
                min="1"
                defaultValue="1"
              />
            </div>

            <button id="add-to-cart-btn" className="btn btn-azul-grande">
              <MdOutlineAddShoppingCart 
                size={25}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Adicionar ao Carrinho
            </button>
          </div>

          <div id="cart-section" className="card-direito">
            <h3 className="titulo-secundario">Carrinho de Retirada</h3>
            <ul id="cart-list" className="lista">
              <li className="vazio">O carrinho está vazio.</li>
            </ul>

            <button id="finalize-btn" className="btn btn-finalizar" disabled>
              <FaCheckCircle 
                size={25}
                style={{ marginRight: "5%", verticalAlign: "middle" }}
              />
              Finalizar Retirada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Retirada;
