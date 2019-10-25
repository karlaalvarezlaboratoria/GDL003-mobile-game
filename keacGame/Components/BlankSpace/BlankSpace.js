import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default class BlankSpace extends Component {
  constructor(props){
    super(props);
  }

  getHyphenWithSpace=()=>{
    return this.props.wordGuessSoFar.split("").join(' ');
    }

  render(){
  return (
    <Text style = {styles.blankSpace}>{this.getHyphenWithSpace()}</Text>
  );
  }
}

const styles = StyleSheet.create({
  blankSpace: {
    flex: 1,
    fontSize:40,
    textAlign: 'center'
    //backgroundColor: 'yellow',
    //alignItems: 'center',
    // justifyContent: 'center',
  }
})
