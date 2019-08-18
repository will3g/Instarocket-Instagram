import React from 'react'; //Import necessário para componentes e JSX
import ReactDOM from 'react-dom'; //Import para manipulação da DOM e integração com o browser
import App from './App'; //Import do arquivo App.js

import './global.css'; //Import de uma estilização simples, sendo ela global

ReactDOM.render(<App />, document.getElementById('root')); //O arquivo JS em JSX será renderizado por meio do aquivo index.html na div root

