import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
 const Journal4=()=>{
    const img = require('../Assets/Images/Diary.png');
    const imp = require('../Assets/Images/home.png');
     return(
       
         <View style={styles.mainContainer}>
            <TouchableOpacity>
             <Image source={imp} style={{width:30,height:30,margin:10}}/>
             </TouchableOpacity>

             <View style={{flexDirection:'row',marginLeft:20}}>
                 <Image source={img} style={{width:50,height:50}}/>
             <View style={{marginLeft:10,margin:10}}>
                <Text style={{color:'#6D6B6B', fontWeight:'bold',color:'black'}}>My journal</Text>
               
            </View>
           

             </View>
             <View style={{flexDirection:'row',justifyContent:'space-around',margin:10}}> 
                 <View style={{width:70,height:100,borderWidth:1,borderRadius:5}}>
                     <Text style={{fontWeight:'600',fontSize:25}}>12 Oct 2021</Text>
                 </View>
                 <View style={{width:70,height:100,borderWidth:1,borderRadius:5}}>
                     <Text style={{fontWeight:'600',fontSize:25}}>11 Oct 2021</Text>
                </View>
                 <View style={{width:70,height:100,borderWidth:1,borderRadius:5}}>
                     <Text style={{fontWeight:'600',fontSize:25}}>10 Oct 2021</Text>
                </View>
                 <View style={{width:70,height:100,borderWidth:1,borderRadius:5}}>
                     <Text style={{fontWeight:'600',fontSize:25}}>09 Oct 2021</Text>
                 </View>
             </View>
             
             <View style={{borderWidth:1,height:"30%",width:'80%',margin:35,borderRadius:29}}>
                 <Text style={{padding:20,fontWeight:'bold',color:'black'}}>Thursday 12 Oct 2021</Text>
                 <Text style={{padding:20,fontWeight:'bold'}}>yhaaa kuyatshisa mani.....</Text>
             </View>
            
         </View>
     )
 }
 export default Journal4 
 const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
      backgroundColor:'#FFFFFF',  
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