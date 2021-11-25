import React, {Component} from 'react';
import {StyleSheet, View,Text} from 'react-native';
import {Provider as PaperProvider, Button, Appbar} from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

class Sendbutton extends Component {
  render() {
    return (
      <PaperProvider >
        
        <Icon name="send" size={25} color='#F2C66E' style={styles.btn}/>
      </PaperProvider>
      
    );
  }
}
export default Sendbutton;
const styles = StyleSheet.create({
    btn:{
      color:'#F2C66E',
      left:0,
      marginTop:-32,
      marginLeft:240,
   


    }
});
