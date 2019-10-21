import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class Image extends Component {
  render(){
  return (
    <Text>Imagen</Text>
    // <Image style= {StyleSheet.image}
    //        sourced= {require('./img.png')}/>
  );
  }
}

// const styles = StyleSheet.create({
//   image: {
//     backgroundColor: 'blue',
//     flex: 1,
//     width: undefined,
//     height: undefined,
//     resizeMode: 'contain',
//     margin: 20,
//     borderColor: 'red',
//     borderWidth: 1.
  
//   }
// });
