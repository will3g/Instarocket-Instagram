import React from 'react';
import { BrowserRouter } from 'react-router-dom'; //Serve para navegar o usuário no sistema

import Header from './components/Header'; //Importação do Header
import Routes from './routes'; //Importação das rotas

function App() {
  return (
    <BrowserRouter> {/* Serve para navegar o usuário no sistema */}
      <Header/> {/* O Header foi colocado aqui por conta de que precisamos que ele seja repetido em todas páginas, para o usuário poder navegar no sistema*/}
      <Routes/> {/* Aqui estamos chamando as rotas de routes.js */}
    </BrowserRouter>
  );
}

export default App; //Exportando o App como padrão para ser consumido em outros aquivos JS
