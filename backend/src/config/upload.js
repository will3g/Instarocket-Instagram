//Configurações apartir do multer >>> yarn add multer

const multer = require('multer');
const path = require('path'); // Lida com caminhos, formata corretamente caminhos em ambientes windows e unix

module.exports = { //Exportação de um objeto com configurações do multer, para saber qual o tipo de storage que vamos utilizar (salvamento)
  storage: new multer.diskStorage({ //Onde quero salvar essas imagens?
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // destino >> [ __dirname, '..', '..', 'uploads' ], o __dirname vai retornar o diretório de salvamento dos dados e em seguida selecionamos a pasta uploads >> '..', '..', 'uploads'
    filename: function (req, file, cb) { //req >>> recebe qualquer informação que queremos consumir; file >>> recebe um arquivo; cb ou callback >> vamos chamar ele quando finalizar a configuração
      cb(null, file.originalname); //primeiro parâmetro, passamos algum tipo de erro ( CASO TIVESSE )...
    }
  })
};