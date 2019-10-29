import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableHighlight
} from 'react-native';
import ImageGame from '../Image/Image';
import BlankSpace from '../BlankSpace/BlankSpace';
import Keyboard from '../Keyboard/Keyboard';


export default class Hanged extends Component {
  constructor(props){
    super(props);

    let word = this.getGuessWord();

    this.state = {
      rightChoices: 0,
      failures: 0,
      guessWord: word,
      wordGuessedSoFar: this.initializaeGuessWord(word),
      keyboard: this.getKeyboard(),
      modalVisible: false,
      result: ''
    }
  }

  getKeyboard= ()=>{
    let letters = [ "A", "B", "C", "D", "E", "F", "G", 
                    "H", "I", "J", "K", "L", "M", "N",
                    "Ñ", "O", "P", "Q", "R", "S", "T",
                    "U", "V", "W", "X", "Y", "Z" 
                  ];

    return letters.map((l) => ({ letter: l, state: 'not pressed'}));
  };

  getGuessWord= ()=>{
    let words = ["CARACOLA", "ESDRUJULA", "COLOMBIA"];
    return words[Math.floor(Math.random() * words.length)];
  };

  initializaeGuessWord= (word)=> {
    let initializaeWord = "";
    for(let i = 0; i < word.length; i++){
      initializaeWord += "_";
    }
    return initializaeWord;
  };

  pressedButton= (i)=>{ 
    let keyboard = this.state.keyboard;
    let letter = keyboard[i].letter;
    let failures= this.state.failures;
    if(keyboard[i].state === "not pressed"){
    if(this.correctChoice(letter)){
      keyboard[i].state = "right pressed";
      this.setState({
        keyboard: keyboard
      });
    } else {
      keyboard[i].state = "wrong pressed";
      this.setState({
        keyboard: keyboard,
        failures: ++failures
      });
    }
  }
  };

  correctChoice= (letter)=>{
    let rightChoice = false;

    for(let i = 0; i < this.state.guessWord.length; i++){
      if(letter == this.state.guessWord.substr(i, 1)){
        this.setState((prevState) => ({
          rightChoices: ++prevState.rightChoices,
          wordGuessedSoFar: prevState.wordGuessedSoFar.substr(0, i) +
                                          letter+
                                          prevState.wordGuessedSoFar.substr(i + 1)
        }));
        rightChoice = true;
      }
    };
    return rightChoice;
  };

  componentDidUpdate =() => {
    if(this.state.failures == 6){
      this.setState({
        modalVisible: true,
        result: '¡Perdiste!',
        failures: 0
      });
    }

    if(this.state.guessWord.length == this.state.rightChoices){
      this.setState({
        modalVisible: true,
        result: '¡Ganaste!',
        rightChoices: 0
      });
    }
  };
  
  getModal(){
    return (
      <Modal  animationType="fade"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {this.restart();}}>
        <View style={styles.modalContainer}>
          <View style={styles.innerModalContainer}>
            <Text style={styles.text}>{this.state.result}</Text>

            <TouchableHighlight onPress={() => { this.restart(); }}
                                style={styles.button}>
              <Text style={styles.textButton}>Pulsa aquí para jugar otra vez</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }

  restart= ()=>{
    let word = this.getGuessWord();
    
    this.setState({
      rightChoices: 0,
      failures: 0,
      guessWord: word,
      wordGuessedSoFar: this.initializaeGuessWord(word),
      keyboard: this.getKeyboard(),
      modalVisible: false,
      result: ''
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getModal()}
        <View style={styles.image}>
          <ImageGame failures={this.state.failures}/>
        </View >
        <View style={styles.blankSpace}>
          <BlankSpace wordGuessedSoFar={this.state.wordGuessedSoFar}/>
        </View>
        <View style={styles.keyboard}>
          <Keyboard keyboard={this.state.keyboard}
                    pressedButton={this.pressedButton}/>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'yellow'
},

image: {
  flex: 5,
  justifyContent: 'center',
  backgroundColor: 'green'
},

blankSpace: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'red'
},

keyboard: {
  flex: 3,
  justifyContent: 'center',
  backgroundColor: 'orange'
},

modalContainer: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.7)'
},

innerModalContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  margin: 20
},

button: {
  flexWrap: 'wrap',
  padding: 10,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'blue',
  margin: 20
},
text: {
  fontSize: 20,
  fontWeight: 'bold',
  margin: 20
},
textButton: {
  fontSize: 20,
  color: 'black'
}

});