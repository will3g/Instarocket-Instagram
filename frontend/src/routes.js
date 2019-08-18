import React from 'react'; //Necessário para componentes e JSX
import { Switch, Route } from 'react-router-dom'; //Integração com browser

import Feed from './pages/Feed'; // importação do arquivo JS Feed
import New from './pages/New'; // importação do arquivo JS New

function Routes() { //função das rotas. Obrigatório!
  return ( //Vai retorar as rotas
    <Switch> {/* Serve para garantir que apenas uma rota seja chamada assim que o usuário acessar*/}
      {/* O exact serve para que a página inicial não seja chamada em toda requisição, ele serve para comparar se a url é igual aquele caracter ("Sem nenhum a mais ou a menos").  */}
      <Route path="/" exact component={Feed}/> {/* Por meio do caracter "/" a página inicial será exatamente -> ( repare no "exact" ) a página Feed ( ARQUIVO Feed.js ) */}
      <Route path="/new" component={New}/> {/* Por meio dos caracteres "/new" a página será direcionada para a url: /new do arquivo New.js*/}
    </Switch>
  );
}

export default Routes; //Aqui exportando as rotas como padrão para ser consumida em outros arquivos JS