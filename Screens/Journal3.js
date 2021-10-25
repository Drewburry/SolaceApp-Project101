import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


const Journal3 = () => {
    const img = require('../Assets/Images/home.png');
    const imp = require('../Assets/Images/profile.png');
    const imd = require('../Assets/Images/calender.gif');
    return (
        <View style={{ backgroundColor:'#FFFFFF'}}>
        <View style={styles.mainContainer}>
            <TouchableOpacity>
           <Image source={img} style={{width:30,height:30}}/>
           </TouchableOpacity>

           <Image source={imp} style={{width:30,height:30}}/>
           
        </View>
        <Text style={styles.contentText}>TELL ME MORE</Text>
            <View style={{flexDirection:'row',marginLeft:10}}>
            <Image source={imd}  style={{width:40,height:40}}/>
            <View style={{marginLeft:10,marginBottom:20}}>
                <Text style={{color:'black', fontWeight:'bold'}}>Today ,October 12</Text>
                <Text style={{color:'black', fontWeight:'bold'}}>12:20 pm</Text>
            </View>
          
            </View>
            <View style={{alignSelf:'center',backgroundColor:'black',width:'60%',height:35,borderRadius:15}}>
                <Text style={{color:'#6D6B6B',paddingTop:5,fontWeight:'bold',paddingLeft:20}}>Add more...</Text>
           </View>
           <View style={{borderWidth:1,height:"40%",width:'80%',margin:35,borderRadius:29}}></View>
           <TouchableOpacity style={{flexDirection:"row",backgroundColor:'#fff',borderWidth:1,width:180,height:40,borderRadius:30,alignSelf:'center',justifyContent:'space-between'}}>
               <Text style={{backgroundColor:'#F2C66E',height:40,borderRadius:30,padding:10,width:90}}>Private</Text><Text style={{padding:10}}>Community</Text>
               </TouchableOpacity>
        </View>
    )
}

export default Journal3

const styles = StyleSheet.create({
    mainContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#FFFFFF',
      margin:10
    },
  contentText:{   
    fontSize:20,
    fontWeight:'bold',
    alignSelf:'center',
    backgroundColor:'#FFFFFF',
    margin:5,
    color:"#6D6B6B"
},
})