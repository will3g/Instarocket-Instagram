const Post = require('../models/Post'); //Importando o POST
const sharp = require('sharp');
const path = require('path');
const fs = require('fs'); //file system

module.exports = { //Exportando objetos
  //Abaixo temos um evento de middleware:
  async index(req, res){  //Middleware de listagem
    //Middleware são funções que tem acesso ao objeto de solicitação ( req ), o objeto de resposta ( res ), e a próxima função de middleware no ciclo
    const posts = await Post.find().sort('-createdAt'); // .sort('-createdAt') Vai listar das mais recentes para as mais antigas
    return res.json(posts);
  },

  async store(req, res){ //Middleware de criação
    // console.log(req.file); // teste
    const { author, place, description, hashtags } = req.body; //Buscando com desestruturação os atributos do req.body
    const { filename: image } = req.file; //Buscando a imgagem de req.file

    //return res.json(req.file); //Aqui podemos ver o PATH (Caminho de salvamento) e o destination até a pasta UPLOADS

    //Convertendo todo tipo de imagem em extensão >>> .jpg
    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
    .resize(500)
    .jpeg({ quality: 70 })
    .toFile(
      path.resolve(req.file.destination, 'resized', fileName)
    )

     fs.unlinkSync(req.file.path);

    const post = await Post.create({ //Selecionando >>> const Post = require('../models/Post');
      //Selecionando os atributos e atribuindo ex::: author = author
      author,
      place,
      description,
      hashtags,
      image: fileName,
    });

    req.io.emit('post', post);

    return res.json(post);
    // return res.json({ ok: true}); //teste
  }
};