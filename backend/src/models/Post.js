//ATENÇÃO!!!
//A pasta Models só pode ter Schemas para o banco de dados

const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({ //Cada Publicação tem...
  author: String, //Um autor
  place: String, //Um lugar
  description: String, //Uma descrição
  hashtags: String, //Hashtags
  likes: { //Likes
    type: Number, //Do tipo número
    default: 0 //O começo de likes é 0
  }
}, {
  timestamps: true, //Com o [ timestamp: true ] vai criar [ createdAt ] e [ updatedAt ] para armazenar a data/hora de criação/atualização de cada registro
});

module.exports = mongoose.model('Post', PostSchema);