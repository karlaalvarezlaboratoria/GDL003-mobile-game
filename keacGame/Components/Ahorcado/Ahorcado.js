import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Image from '../Image/Image'
import Keyboard from '../Keyboard/Keyboard'
import BlankSpace from '../BlankSpace/BlankSpace'

export default class App extends Component {
  render(){
  return (
    
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image/>
      </View>
      <View style={styles.blankSpace}>
         <BlankSpace/> 
      </View>
      <View style={styles.keyboard}>
          <Keyboard/>
      </View>
      
    
    </View>
  );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  imageContainer:{
    backgroundColor: 'green',
    flex: 5,
  },

  blankSpace:{
    backgroundColor: 'red',
    flex: 1,
  },

  keyboard:{
    backgroundColor: 'orange',
    flex: 3,
  } 
});
