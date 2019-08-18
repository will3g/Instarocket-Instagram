import React, { Component } from 'react';
import api from '../services/api'; //API AXIOS

//Importação de estilos
import './styles/New.css';

class New extends Component {

  state = { //O estado inicial para um novo post é "sem nada", nulo ou vázio
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async e => { //Quando o botão submit for "acionado"...
    e.preventDefault();//Evita o comportamento padrão do navegador
    
    const data = new FormData(); //Criamos uma nova instância de FormData() 
    //para criação do conteúdo. Lembre-se de "response.data"... :P

    //Selecionamos o estado para ser alterado e colocamos dentro dessa nova instância...
    data.append('image', this.state.image); //A imagem
    data.append('author', this.state.author); //O Author
    data.append('place', this.state.place); //O lugar
    data.append('description', this.state.description); //A descrição
    data.append('hashtags', this.state.hashtags); //E hashtags

    await api.post('posts', data) //Adiciona a nova instância na API

    this.props.history.push('/'); //Volta para a página inicial de feed
  }

  handleImageChange = e => { //Quando escolhemos a imagem ela é renderizada para 
  //o usuário ter uma pré-visualização
  //Seleciona o estado e seu atributo image e adiciona a imagem selecionada pelo usuário
    this.setState({ image: e.target.files[0] }); 
  }

  handleChange = e => { //Esse método serve para alterar o valor dos atributos do estado
    this.setState({ [e.target.name]: e.target.value }); //O target, aponta para o nome do 
    //atríbuto ou valor que queremos alterar
    /** Esse método é como se fosse um método "genérico", servindo para 'N' atributos e 'N' valores **/
  }

  render() {// Método render é obrigatório
    return (
      /* Quando o botão compartilhar for acionado, o post é efetuado por meio do handleSubmit() que é chamado no começo do form */
      <form id="new-post" onSubmit={this.handleSubmit}>
        {/* Logo abaixo é chamado o handleImageChange() para renderizar a imagem do arquivo escolhido */}
        <input type="file" onChange={this.handleImageChange}/>

        <input /* Campo de entrada do nome do autor */
          type="text"
          name="author"
          placeholder="Autor do post"
          onChange={this.handleChange}
          value={this.state.author}
        />

        <input /* Campo de entrada do nome do lugar */
          type="text"
          name="place"
          placeholder="Local do post"
          onChange={this.handleChange}
          value={this.state.place}
        />

        <input /* Campo de entrada da descrição */
          type="text"
          name="description"
          placeholder="Descrição do post"
          onChange={this.handleChange}
          value={this.state.description}
        />

        <input /* Campo de entrada das hashtags */
          type="text"
          name="hashtags"
          placeholder="Hashtags do post"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />

        <button type="submit">Compartilhar</button> {/* Botão submit para compartilhar as imagens */}
      </form>
    );
  }
}

export default New; //Aqui, New é exportado como padrão