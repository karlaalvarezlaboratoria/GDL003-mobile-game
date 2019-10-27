import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';


export default class Keyboard extends Component {
  constructor(props){
    super(props);
  }

  getKeyboard = ()=>{
    return this.props.keyboard.map(
      (letter, id) => 
        <TouchableHighlight
          onPress = {() => this.props.pressedButton()} 
          key={id} 
           style={letter.state == "not pressed" ? styles.buttonNotPressed : (
                 letter.state == "rigth pressed" ? styles.rigthButtonPressed : (
                                                   styles.wrongButtonPressed
                 )
          ) }
          underlayColor = "white">
          <Text style={styles.text}>{letter.letter}</Text>
        </TouchableHighlight>
      
    ); 
  }

  render(){
  return (
    <View style={styles.keyboard}>
      {this.getKeyboard()}
    </View>
  );
  }
}

 const styles = StyleSheet.create({
     keyboard: {
       flexWrap: 'wrap',
       flexDirection: 'row',
       justifyContent: 'center',
       backgroundColor: 'orange',
       alignItems: 'center',
     },

     buttonNotPressed:{
       margin: 10,
       width: 30,
       height: 30,
       borderRadius:5,
       alignItems: 'center',
       backgroundColor: 'blue'
     },

     rigthButtonPressed:{
       margin: 10,
       width: 30,
       height: 30,
       borderRadius: 5,
       alignItems: 'center',
       backgroundColor: 'green'
     },
     
     wrongButtonPressed:{
      margin: 10,
      width: 30,
      height: 30,
      borderRadius: 5,
      alignItems: 'center',
      backgroundColor: 'red'
     },


     text: {
       fontSize: 20,
       color: 'white'
     }
   });
