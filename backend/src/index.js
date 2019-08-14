const express = require('express'); //Biblioteca para servidor
const mongoose = require('mongoose'); //Utiliazado para manipulção de dados através do MongoDB
const path = require('path'); // TODA VEZ QUANDO FOR LIDAR COM CAMINHOS
const cors = require('cors');

const app = express(); //Cria o servidor

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://Omni:1234@cluster0-rvxaz.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});

app.use((req, res, next) => {
  req.io = io;
  next();
})

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))); //Acessa automaticamente a imagem

app.use(require('./routes'));

server.listen(3333); //Está escutando na porta 3333