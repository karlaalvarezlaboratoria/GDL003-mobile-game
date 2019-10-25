import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Ahorcado from './Components/HangedGame/HangedGame.js'

export default class App extends Component {
  render(){
  return (
    <Ahorcado/>
    // <View style={styles.container}>
    //   <Text>Karlita bb Game!!! Hola mundo!!!</Text>
    // </View>
  );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
