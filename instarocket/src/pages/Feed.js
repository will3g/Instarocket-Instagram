//Precisa instalar >>> https://github.com/react-native-community/react-native-image-picker/blob/master/docs/Install.md no android e no ios
//Caminho android >>>>> C:\Users\user\Desktop\Instagram\instarocket\android\app\src\main\AndroidManifest
//Caminho IOS >>>>> C:\Users\user\Desktop\Instagram\instarocket\ios\instarocket\Info.plist

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import io from 'socket.io-client';
import api from '../services/api';

import camera from '../img/assets/camera.png';
import more from '../img/assets/more.png';
import like from '../img/assets/like.png';
import comment from '../img/assets/comment.png';
import send from '../img/assets/send.png';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera}/>
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  };

  async componentDidMount(){
    this.registerToSocket();
    const response = await api.get('posts');
    console.log(response.data);
    this.setState({ feed: response.data });
  }

  registerToSocket = () => {
    const socket = io('http://192.168.1.41:3333');

    //post, like

    socket.on('post', newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    })

    socket.on('like', likedPost => {
      this.setState({
        feed: this.state.feed.map(post => 
          post._id === likedPost._id ? likedPost : post  
        )
      })
    })
  }

  handleLike = id => {
    api.post(`/posts/${id}/like`);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <View style={styles.feedItem}>

              <View style={styles.feedItemHeader}>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.author}</Text>
                  <Text style={styles.place}>{item.place}</Text>
                </View>

                <Image source={more}/>
              </View>

              <Image style={styles.feedImage} source={{ uri: `http://192.168.1.41:3333/files/${item.image}`}}/>

              <View style={styles.feedItemFooter}>
                <View style={styles.actions}>
                  <TouchableOpacity style={styles.action} onPress={() => this.handleLike(item._id)}>
                    <Image source={like}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={comment}/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.action} onPress={() => {}}>
                    <Image source={send}/>
                  </TouchableOpacity>
                </View>

                <Text style={styles.likes}>{item.likes} curtidas</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.hashtags}>{item.hashtags}</Text>
              </View>

            </View>
          )}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  feedItem: {
    marginTop: 20
  },

  feedItemHeader: {
    paddingHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  name: {
    fontSize: 14,
    color: '#000'
  },

  place: {
    fontSize: 12,
    color: '#666',
    marginTop: 2
  },

  feedImage: {
    width: '100%',
    height: 400,
    marginVertical: 15,
  },

  feedItemFooter: {
    paddingHorizontal: 15,
  },

  actions: {
    flexDirection: 'row',
  },

  action: {
    marginRight: 8,
  },

  likes: {
    marginTop: 15,
    fontWeight: 'bold',
    color: '#000',
  },

  description: {
    lineHeight: 18,
    color: '#000'
  },

  hashtags: {
    color: '#2774ff'
  }
});