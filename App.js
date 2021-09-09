import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import _ from 'lodash';
import SingleNumber from './components/SingleNumber';
import styled from 'styled-components/native';

const numbers = [];
_.times( 45, n => numbers.push( n + 1 ));

function getNumbers() {
  let newNumbers = _.shuffle( numbers );
  newNumbers.length = 6;    // newNumbers.slice( 0, 6 );
  // newNumbers = newNumbers.sort();
  return newNumbers;
}
export default function App() {

  // hooks, useState
  // const [ count, setCount ] = useState( 0 );  let count = 0;
  const [ displayNumbers, setDisplayNumbers ] = useState( getNumbers() );
  
  return (
    <View style={styles.container}>
      <View style={ styles.row }>
        { displayNumbers.map( n => <SingleNumber number={ n }/> ) } 
      </View>
      <Text>{ "클릭을 눌러주세요!" }</Text>
      <Button title={ "롯또 번호 생성" } onPress={ () => setDisplayNumbers( getNumbers() ) }/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  // paragraph: {
  //   margin: 24,
  //   fontSize: 50,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  }
});
