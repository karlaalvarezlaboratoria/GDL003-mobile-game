import React, { Component } from 'react';
import {
  StyleSheet,
  Image
} from 'react-native';


export default class ImageGame extends Component {
  constructor(props){
    super(props);
    
  }
  render() {
    return (
      <Image style={styles.image}
             source={images[this.props.failures.toString()]} />
    );
  }
}

const images = {
    '5': require('../../img/0.png'),
    '4': require('../../img/1.jpg'),
    '3': require('../../img/2.png'),
    '2': require('../../img/3.png'),
    '1': require('../../img/4.png'),
    '0': require('../../img/5.jpg'),   
  };

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: undefined, 
    height: undefined, 
    resizeMode: 'contain',
    margin: 20,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'blue'
  }
});

