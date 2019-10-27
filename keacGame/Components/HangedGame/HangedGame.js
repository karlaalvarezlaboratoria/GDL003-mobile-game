import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import Keac from '../Image/Image'
import Keyboard from '../Keyboard/Keyboard'
import BlankSpace from '../BlankSpace/BlankSpace'

export default class Hanged extends Component {
    constructor(props){
        super(props);

          let word = this.getGuessWord();

        this.state = {
            failures: 0,
            rightChoices: 0,
            guessWord: word,
            //Desde aquí se pasa el argumento a la función para ejecutarla "word";
            wordGuessSoFar: this.initializaeWordGuessSoFar(word),
            keyboard: this.getKeyboard(),
            modalVisible: false,
            result: ""
        }
    }

  restart= ()=>{
    let word = this.getGuessWord();

    this.setState= ({
      rightChoices: 0,
      failures: 0,
      guessWord: word,
      wordGuessSoFar: this.initializaeWordGuessSoFar(word),
      keyboard: this.getKeyboard(),
      modalVisible: false
    });
  }
  
  getKeyboard=()=>{
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                   'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q',
                   'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return letters.map((l)=>({letter: l, state: "not pressed"}));
  }

  pressedButton = (i)=> {
    let keyboard= this.state.keyboard;
    let letter = this.state.keyboard[i].letter;
    let failures = this.state.failures;

    if(this.correctChoice(letter)){
      this.state.keyboard[i].state = "rigth pressed";
      this.setState({
        keyboard: keyboard
      });
    } else {
      this.state.keyboard[i].state = "wrong pressed";
      this.setState({
        keyboard: keyboard,
        failures: ++failures
      });
    }   
  }

  correctChoice = (letter) => {
    let rigthChoice = false;
    for(let i = 0; i > this.state.guessWord.length; i++){
      if(letter == this.state.guessWord.substr(i, 1)){
        this.setState({
        rightChoices: ++rightChoices,
        wordGuessSoFar: wordGuessSoFar.substr(0, i) +
                        letter +
                        wordGuessSoFar.substr(i + 1)

        });
        rigthChoice = true;
      }
    }
    return rigthChoice;
  }

  componentDidUpdate(){
    if(this.state.failures == 6){
      this.setState({
        modalVisible: true,
        result: 0,
        failures:0
      })
    }

    if(this.state.guessWord.length == this.state.rightChoices){
      this.setState({
        modalVisible: true,
        result: '¡Ganaste!',
        rightChoices: 0
      })
    }
  }

  getGuessWord= () => {
      let words = ["ESDRUJULA", "ACERTIJO", "SOMBRERO"];
      return words[Math.floor(Math.random() * words.length)];

  }

  initializaeWordGuessSoFar = (word) => {
      let initializaeWord = " ";
      for(let i=0; i < word.length; i++){
          initializaeWord += "_"
      }
      return initializaeWord;
  }
  //////

  getModal=()=>{
    return(
      <Modal animationType= "fade"
             transparent = {true}
             visible={this.state.modalVisible}
             onRequestClose={()=> this.reiniciar()}>
        <View style={styles.modalContainer}>
          <View style={styles.innerModalContainer}>
            <Text style = {styles.texto}>{this.state.result}
            </Text>
            <TouchableHighlight onPress={() => this.restart()}
                                style = {styles.button}>
              <Text style = {styles.textButton}>Pulsa para jugar de nuevo</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    )
  }

  

  render(){ 
  return (
    
    <View style={styles.container}>
      {this.getModal()}
      <View style={styles.imageContainer}>
          <Keac failures= {this.state.failures} />
      </View>
      <View style={styles.blankSpace}>
         <BlankSpace wordGuessSoFar = {this.state.wordGuessSoFar} /> 
      </View>
      <View style={styles.keyboard}>
          <Keyboard keyboard = {this.state.keyboard}
                    pressedButton = {() => this.pressedButton(i)}/>
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
    justifyContent: 'center'
  },

  blankSpace:{
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  keyboard:{
    backgroundColor: 'orange',
    flex: 3,
    justifyContent: 'center'
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },

  innerModalContainer: {
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white',
    margin: 20
  },

  button: {
    flexWrap: 'wrap',
    padding:10,
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
    color: 'white'
  }
});
