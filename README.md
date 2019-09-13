# **Instarocket**

### **Objetivo**

O **Instarocket** é uma réplica do **Instagram**. O objetivo dessa aplicação é aprender funcionalidas que o **Instagram** possuí, tanto em parte **WEB** quanto **Mobile**. 

**Obs:** Projeto desenvolvido em **uma semana** por meio do evento semana OmniStack da rocketseat.

# **Funcionalidades**

O App atualmente possuí funcionalidades (via **Mobile** e **WEB**) como, criação de **posts** e **likes** em **_real-time_**. Sendo elas: **título**, **descrição do post**, **seleção de imagem**, **hashtags** e nome do **autor**. 

Para o funcionamento em _real-time_ foi utilizado a lib **socket.io**, sendo ela um dos responsáveis por sincronizar interações por tempo real, entre aplicação **WEB** e **Mobile**

# **Próximas implementações**

Futuramente a aplicação possuíra as seguintes funcionalidades:

- Comentários
- Cadastro de usuários
- Avatar e perfil de usuário
- Login e autenticação de usuários
- Compartilhamento de posts
- Criação de chat para conversa em tempo real

# **Funcionamento WEB**

 Por meio da lib **socket.io** temos a experiência de tempo real. Na seguinte demonstração podemos ver o funcionamento da aplicação **WEB**, **upload de arquivo**, **likes** e **criação de posts**.

[<img src="https://i.imgur.com/TDhbqdr.gif">](http://google.com.br)

# **Funcionamento WEB e Mobile**

Por meio da seguinte demonstração podemos ver que a aplicação **WEB** se comunica com a aplicação **Mobile** (android), possuindo também **match** em **real-time**.

[<img src="https://i.imgur.com/KWyiJx1.gif">](http://google.com.br)

O **post** que aparece "derrepente" foi criado via **Mobile**, assim como suas curtidas também (repare que variou de 1 à 5 curtidas).

## **Funcionamento Mobile e WEB**

Com a proxima aprensentação da aplicação em parte **Mobile**, podemos ver o funcionamento de real-time. O **post** que surgiu derrepente foi criado via aplicação **WEB**.

[<img src="https://i.imgur.com/GNgX7FV.gif">](http://google.com.br)

## **Funcionamento Mobile (criação de posts)**

Para criar um novo **post** no App **Mobile**, assim como na parte **WEB**, é necessário pressionar a _**câmera**_ na parte superior à direita. Para selecionar o arquivo desejado é só pressionar "selecionar imagem".

Logo em seguida aparecerá a seguinte tela com duas opções, podendo **tirar a foto agora** ou **selecionar da galeria de fotos**.

![upload-post-cel2](https://user-images.githubusercontent.com/49616761/64835227-8cd6d180-d5bb-11e9-82cc-82b5b23da96d.jpeg)

Na sequêcia temos os campos, **nome**, **local**, **descrição** e **hashtags**. Preenchendo os tais campos é só pressionar "compartilhar" que o post será criado em real-time e salvo no banco de dados.

![upload-post-cel](https://user-images.githubusercontent.com/49616761/64835222-86485a00-d5bb-11e9-88e2-4d919202dded.jpeg)


## **Funcionamento banco de dados**

O banco de dados utilizado foi o **MongoDB Atlas** uma instância de banco de dados em nuvem, que fica responsável por armazenar todos os **posts** dos usuários. E para interface grágica (GUI) do armazenamento de dados, utilizamos o **MongoDB Compass**.

[<img src="https://i.imgur.com/MwAzJRt.gif">](http://google.com.br)
#

