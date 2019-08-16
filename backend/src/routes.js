//-----------------------------------------------------------------------------
//---- Dependências -----------------------------------------------------------
const express = require('express'); //Importando o express
const multer = require('multer'); //Importando o multer /->>> //É uma biblioteca que lida com corpos em MultPartData, e também automatiza o processo de uploads de arquivos do backend
const uploadConfig = require('./config/upload'); //Importando as configurações do multer (storage) para salvar os uploads
//-----------------------------------------------------------------------------
//----- Importando controllers ------------------------------------------------
const PostController = require('./controllers/PostController'); //Importando o PostController
const LikeController = require('./controllers/LikeController'); //Importando o LikeController
//-----------------------------------------------------------------------------
const routes = new express.Router(); //Importando o Router de express
const upload = multer(uploadConfig); //Cadastrando o multer dentro da var upload
//-----------------------------------------------------------------------------
routes.get('/posts', PostController.index); //Setando a rota de listagem para todos os cadastros
//Em seguida vamos dar um comando para fazer UPLOADS das imagens
routes.post('/posts', upload.single('image'), PostController.store); // PostController.store >>> Criação / upload.single('image') >>> Importando a imagem
routes.post('/posts/:id/like', LikeController.store); //Setando a rota para likes
//--- Exportando rotas --------------------------------------------------------
module.exports = routes;
//-----------------------------------------------------------------------------