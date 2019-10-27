import React, { Component } from 'react';
import {
  Platform,
  Text,
  StyleSheet
} from 'react-native';


export default class BlankSpace extends Component {
  constructor(props){
    super(props);
    
  }

  getHyphensWithSpace(){
    return this.props.wordGuessedSoFar.split('').join(' ');
  }

  render() {
    return (
      <Text style={styles.hyphens}>{this.getHyphensWithSpace()}</Text>
    );
  }
}


const styles = StyleSheet.create({
  hyphens: {
    fontSize: 40,
    textAlign: 'center'
  }
});