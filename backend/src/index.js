//NESSE PROJETO NÃO UTILIZAMOS JSON PARA EXIBIR O RESULTADO NO INSOMINIA, UTILIZAMOS [ MULTPLATAFORM ]
//-----------------------------------------------------------------------------
//------- Dependências --------------------------------------------------------
const express = require('express'); //Biblioteca para servidor
const mongoose = require('mongoose'); //Utiliazado para manipulção de dados através do MongoDB
const path = require('path'); // TODA VEZ QUANDO FOR LIDAR COM CAMINHOS
const cors = require('cors'); // Permite que o backend seja acessível pelo front em react em domínios diferentes
//-----------------------------------------------------------------------------
const app = express(); //Cria o servidor
//-----------------------------------------------------------------------------
//É basicamente a instância que vai permitir receber requisições (ou enviar requisições) para todos que estão conectados em nossa aplicação
const server = require('http').Server(app); //A partir desse momento (com o socket.io) temos acesso ao protocolo HTTP
const io = require('socket.io')(server); //A partir desse momento temos acesso ao protocolo WEBSOCKET
//-----------------------------------------------------------------------------
mongoose.connect('mongodb+srv://Omni:1234@cluster0-rvxaz.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});
//-----------------------------------------------------------------------------
//Toda requisição abaixo dessa "função" vai ter acesso ao [ req.io ]
app.use((req, res, next) => { //Como essa "função" é interruptora, necessita de um terceiro parâmetro "next" para continuar. Sem o next o programa pode parar nessa "função".
  req.io = io; //Estamos atribuindo a variável de [ const io = require('socket.io')(server); ] para [ req.io ], dessa forma será feita atualizações em tempo real
  next(); //Faz com que a aplicação continue para as proximas instruções.
})
//-----------------------------------------------------------------------------
app.use(cors()); //Vai permitir que qualquer aplicação ( ou diferentes IPs / servidores ) acesse nosso backend / -> [ Obs: TEM MEIOS DE CONTROLAR ESSES ACESSOS! ]
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))); // Essa é uma rota para acessar aquivos estáticos das imagens que fizemos upload. E [ ../uploads/resized ] -> Acessa automaticamente a pasta resized
app.use(require('./routes')); //Importação das rotas
server.listen(3333); //Está escutando na porta 3333 por meio do socket.io
//-----------------------------------------------------------------------------