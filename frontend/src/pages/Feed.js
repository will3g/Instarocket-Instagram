import React, { Component } from 'react'; //Chamando React e seus componentes
import api from '../services/api'; //Chamando a lib axios
import io from 'socket.io-client'; //Chamando a lib de socket.io-client

//Chamando imagens de mais, like, comentários e envio
import more from '../img/assets/assets/more.svg';
import like from '../img/assets/assets/like.svg';
import comment from '../img/assets/assets/comment.svg';
import send from '../img/assets/assets/send.svg';

//Chamando estilizações
import './styles/Feed.css';

//Classe Feed que extende de Component
class Feed extends Component { 
// Todo componente em formato de classe tem acesso a um método chamando 
//componentDidMount.
  state = { //Esse estado é apenas uma variável desse componente para armazenar 
  //informações e refletir na DOM ou em onde quisermos utilizar esses dados
    feed: [], //Iniciamos um array vazio para esses dados
  };

  async componentDidMount(){ //Esse método é chamado de maneira automática, quando 
  // um componente é renderizadp em tela.
  /* Por meio desse método é o melhor lugar para chamar a "const api" da lib axios */
    this.registerToSocket();
    //Nessa linha estamos pegando os dados de localhost:3333/posts
    const response = await api.get('posts'); 
    //E caso tudo ocorra corretamente, pegamos os dados de "response" por meio
    // de "response.data", retornando o seu conteúdo.
    this.setState({ feed: response.data }); //O "feed" é utilizado para armazenar
    // os dados obtidos de "response.data" por meio do setState e renderizar em tela
  }

  registerToSocket = () => { //Serve para expereriência real-time
    const socket = io('http://localhost:3333'); //socket.io-client

    socket.on('post', newPost => { //Quando um novo post é criado
      this.setState({ feed: [newPost, ...this.state.feed] });
    })

    socket.on('like', likedPost => { //Quando clicarmos na imagem para like
      this.setState({ //Selecionamos o estado
        feed: this.state.feed.map(post => //Em feed, percorra toda a array
          post._id === likedPost._id ? likedPost : post //E quando o "post._id" for igual ao "likedPost._id"
          //Se verdadeiro retorna "likedPost", caso contrário retorna "post"
        )
      })
    })

  }

  handleLike = id => { //Por meio desse método a experiencia em real time acontece (like)
    api.post(`/posts/${id}/like`); //Quando a imagem for clicada é feita uma requisição ao servidor para incrementar o like do post
  }

  render() { // Método render é obrigatório
    return (
      <section id="list-feed">
        {/* Logo embaixo estamps utilizando javascript + .map para percorrer o array feed */}
        { this.state.feed.map(post => ( //Repare nesse parênteses, ele tem a função de retornar esse html inteiro.
          // Utilizamos uma variável "post" com uma arrow function
          <article id="post-list" key={post._id}> {/* O key={post._id} deixa mais fácil do React encontrar o ID do usuário no seu post publicado, imagem, descrição, etc...*/}
           <header>
             <div className="user-info">
               <span>{post.author}</span>
               <span className="place">{post.place}</span>
             </div>
 
             <img src={more} alt="Mais"/>
           </header>
 
           <img src={`http://localhost:3333/files/${post.image}`} alt=""/>
 
           <footer>
             <div className="actions">
               <button type="button" onClick={() => this.handleLike(post._id)}> {/* Chamando o método handleLike() */}
                <img src={like} alt="Like"/>
               </button>
               <button type="button">
                <img src={comment} alt="Comentar"/>
               </button>
               <button type="button">
                <img src={send} alt="Enviar"/>
               </button>
             </div>
 
             <strong>{post.likes} curtidas</strong>
 
             <p>{post.description}
               <span>{post.hashtags}</span>
             </p>
           </footer>
         </article>
        )) }
      </section>
    );
  }
}

export default Feed; //E por fim exportamos como padrão o Feed