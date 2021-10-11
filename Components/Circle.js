import React from 'react'
import { StyleSheet, View,} from 'react-native'

 const Circle=()=> {
     return(
         <View>
        
         
          <View style={styles.yellow}>

          </View>
         </View>
     )
     
 }
export default Circle;
const styles = StyleSheet.create({
    yellow:{
      width:200,
      height:200,
      marginLeft:350,
      backgroundColor:"#F2C66E",
      borderRadius:100
    }
  
  });
  