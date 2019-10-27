import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class Keyboard extends Component {
  constructor(props){
    super(props);
    
  }

  getKeyboard(){
    return this.props.keyboard.map(
      (letter, id) => 
        <TouchableHighlight onPress={() => this.props.pressedButton(id)}
                            key={id}
                            underlayColor="white">
          <View style={letter.state == "not pressed" ? 
                          styles.notPressedButton : (
                             letter.state == "right pressed" ? styles.rightPressedButton :
                                                                  styles.wrongPressedButton  )}>
            <Text style={styles.textButton}>{letter.letter}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
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
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  notPressedButton: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  rightPressedButton: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  wrongPressedButton: {
    margin: 10,
    width: 30,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  textButton: {
    fontSize: 20,
    color: 'white'
  }
});