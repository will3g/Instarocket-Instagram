import axios from 'axios'; //Importando a lib axios

const api = axios.create({ //Criando uma url base >>> http://localhost:3333 e alocando na constante "api"
  baseURL: 'http://localhost:3333',
});

export default api; //Exportando como padrão a constante "api"