const Post = require('../models/Post'); //Importando o POST

module.exports = { //Exportando objetos
  async store(req, res){
    const post = await Post.findById(req.params.id); // De acordo com a "req" ou requisição |-| vamos pegar o params -> parâmetro "id"
    post.likes += 1; //Incrementa +1 no like
    await post.save(); //Salva os dados
    req.io.emit('like', post);
    return res.json(post); //E retorna o post com os likes atualizados
  }
};