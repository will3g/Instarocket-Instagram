//-----------------------------------------------------------------------------
//---- Importando o POST ------------------------------------------------------
const Post = require('../models/Post');
//-----------------------------------------------------------------------------
//---- Exportando objetos -----------------------------------------------------
module.exports = {
  async store(req, res){ //Criação de novo like
    const post = await Post.findById(req.params.id); // De acordo com a "req" ou requisição |-| vamos pegar o params -> parâmetro "id"
    post.likes += 1; //Incrementa +1 no like
    await post.save(); //Salva os dados
    req.io.emit('like', post); //Vai emitir atualizações/criações em tempo real para todos que estiverem conectados
    return res.json(post); //E retorna o post com os likes atualizados
  }
};
//-----------------------------------------------------------------------------
