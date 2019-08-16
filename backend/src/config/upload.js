//Configurações apartir do multer >>> yarn add multer
// -      -         -        -        -         -         -         -
//-----------------------------------------------------------------------------
//---- Dependências -----------------------------------------------------------
const multer = require('multer'); //É uma biblioteca que lida com corpos em MultPartData, e também automatiza o processo de uploads de arquivos do backend
const path = require('path'); // Lida com caminhos, formata corretamente caminhos em ambientes windows e unix
//-----------------------------------------------------------------------------
//---- Exportando objetos -----------------------------------------------------
module.exports = { //Exportação de um objeto com configurações do multer, para saber qual o tipo de storage que vamos utilizar (salvamento)
  storage: new multer.diskStorage({ //Onde quero salvar essas imagens? >>> No disco local multer.diskStorage
    destination: path.resolve(__dirname, '..', '..', 'uploads'), // destino >> [ __dirname, '..', '..', 'uploads' ], o __dirname vai retornar o diretório (ou localização) de salvamento dos dados e em seguida selecionamos a pasta uploads >> '..', '..', 'uploads'
    filename: function (req, file, cb) { //req >>> recebe qualquer informação que queremos consumir; file >>> recebe um arquivo; cb ou callback >> vamos chamar ele quando finalizar a configuração
      cb(null, file.originalname); //primeiro parâmetro, passamos algum tipo de erro ( CASO TIVESSE )... E o file.originalname serve para salvar o arquivo original, e não convertido em binário
    }
  })
};
//-----------------------------------------------------------------------------