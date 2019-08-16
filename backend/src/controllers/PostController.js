//-----------------------------------------------------------------------------
//---- Dependências -----------------------------------------------------------
const Post = require('../models/Post'); //Importando o POST
const sharp = require('sharp'); //Essa dependencia nos permite a manipulação de imagens dentro de sua aplicação
const path = require('path'); //Biblioteca nativa do node que lida com caminhos, formatando-os de maneira correta entre ambientes windows e unix. (A aplicação vai rodar em ambos sistemas!)
const fs = require('fs'); //File system, biblioteca nativa do node para arquivos de sistema
//-----------------------------------------------------------------------------
//----- Exportando objetos ----------------------------------------------------
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
    const [name] = image.split('.'); // image.split('.'); separa o nome da imagem e a extensão pelo ponto
    const fileName = `${name}.jpg`; // Mudamos a extenção de qualquer arquivo para .jpeg, porém o nome continua o mesmo  

    await sharp(req.file.path) //Caminho da imagem
    .resize(500) //Dimensão altura x largura >>> 500 x 500
    .jpeg({ quality: 70 }) // 70 de qualidade
    .toFile( 
      path.resolve(req.file.destination, 'resized', fileName) // Para a pasta uploads > resized > salva aqui
    ) //Chegando nesse ponto temos um novo arquivo >>> varImagem.jpg

     fs.unlinkSync(req.file.path); //Deleta o arquivo original

    const post = await Post.create({ //Selecionando >>> const Post = require('../models/Post');
      //Selecionando os atributos e atribuindo da desestruturação / ex::: author = author
      author,
      place,
      description,
      hashtags,
      image: fileName, //Aqui estamos setando o arquivo convertido para .jpg para criação do "objeto"
    }); // O "objeto" criado!

    req.io.emit('post', post); //Vai emitir atualizações/criações em tempo real para todos que estiverem conectados

    return res.json(post);
    // return res.json({ ok: true}); //teste
  }
};
//-----------------------------------------------------------------------------