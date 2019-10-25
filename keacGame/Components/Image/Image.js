import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';



export default class Keac extends Component {
  constructor(props){
      super(props);
  }  
  render(){
  return (
    //<Text>Imagen</Text>
    <Image style= {styles.image}
           source= {IMAGES[this.props.failures.toString()]}/>
  );
  }
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'blue',
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    margin: 20,
    borderColor: 'red',
    borderWidth: 1.
  
  }
});

const IMAGES = {
    '0': require('../../img/5.jpg'),
    '1': require('../../img/4.png'),
    '2': require('../../img/3.png'),
    '3': require('../../img/2.png'),
    '4': require('../../img/1.jpg'),
    '5': require('../../img/0.png')
    
};
