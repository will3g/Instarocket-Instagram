import React from 'react';
import { Link } from 'react-router-dom'; //É como se fosse o 'a' do html (âncora)

import './Header.css';

import logo from '../img/assets/assets/logo.svg'
import camera from '../img/assets/assets/camera.svg'

export default function Header() { //Essa é a parte do Header (ou cabeçalho) que 
//será repetido durante a navegação do usuário na página
  return ( //Retorna o cabeçalho em JSX
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="InstaRocket"/>
        </Link>
        <Link to="/new">
          <img src={camera} alt="Enviar publicação"/>
        </Link>
      </div>
    </header>
  );
}
