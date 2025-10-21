import React from 'react';
import './SelecionaPerfil.module.css';

export function selecionaPerfil () {
  return (
    <div id="login-screen" className="login-container">
      <h1 className="login-title">
        Zer0<span className="light-text">Desperdício</span>
      </h1>
      <p className="login-subtitle">Quem está usando o sistema?</p>
      <div id="user-profiles" className="profiles-container"></div>
    </div>
)
}