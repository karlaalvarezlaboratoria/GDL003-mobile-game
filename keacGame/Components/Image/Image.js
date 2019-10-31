import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native';


export default class ImageGame extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <ImageBackground style= {styles.backgroundImage} source={backgroundImages[this.props.failures.toString()]}>
        <Image style={styles.image}
             source={images[this.props.failures.toString()]} />
      </ImageBackground>
    );
  }
}
const backgroundImages ={
  '0': require('../../img/arañitas5.png'),
  '1': require('../../img/arañitas4.jpg'),
  '2': require('../../img/arañitas3.png'),
  '3': require('../../img/arañitas2.png'),
  '4': require('../../img/arañitas1.png'),
  '5': require('../../img/arañitas0.png')
}
const images = {
    '5': require('../../img/ranita.gif'),
    '4': require('../../img/ranita.gif'),
    '3': require('../../img/ranita.gif'),
    '2': require('../../img/ranita.gif'),
    '1': require('../../img/ranita2.gif'),
    '0': require('../../img/ranita.gif'),   
  };

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    width: undefined, 
    height: undefined, 
    resizeMode: 'contain',
    margin: 20,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'blue'
  },

  image: {
    flex: 1,
    width: undefined, 
    height: undefined, 
    resizeMode: 'contain',
    margin: 20,
    borderColor: 'red',
    borderWidth: 1,
    //backgroundColor: 'blue'
    
  }
});

