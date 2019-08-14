const express = require('express'); //Importando o express
const multer = require('multer'); //Importando o multer
const uploadConfig = require('./config/upload'); //Importando as configurações  do multer (storage) 

const PostController = require('./controllers/PostController'); //Importando o PostController
const LikeController = require('./controllers/LikeController'); //Importando o PostController

const routes = new express.Router();
const upload = multer(uploadConfig); //Cadastrando o multer dentro da var upload

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store); // PostController.store >>> Criação / upload.single('image') >>> Importando a imagem
routes.post('/posts/:id/like', LikeController.store);
// routes.get('/', (req, res) => { //Interceptando a rota / O "res" representa a resposta / O "req" representa a requisição
//   return res.send("Hello World!");
// });

module.exports = routes;