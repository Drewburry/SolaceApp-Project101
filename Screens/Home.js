
import React from 'react'
import { StyleSheet, Text, View ,Image ,TouchableOpacity} from 'react-native'

const Home = () => {
    const img = require('../Assets/Images/heart.png');
    const img1= require('../Assets/Images/Celebb.png');
    const img2= require('../Assets/Images/star.png');
    const pro = require('../Assets/Images/profile.png');
    const dropD = require('../Assets/Images/dropD.png');
    return (
        <>
        <View style={{ backgroundColor:"#FFFFFF",}}>
        <View style={styles.yellow}>

         </View>
        <View style={styles.head}>
        <View style={{}}>
          <Text style={styles.tex}>Your Thoughts</Text>
        </View>
         <View style={styles.Profile}><Image source={pro} style={{width:60,height:60}}/></View>
        </View>
        <View style={styles.h2}>
        <Text style={styles.text}>Community Thoughts</Text> 
        <Text style={styles.fav}> favourites </Text>
        <Image source ={dropD} style={{width:15,height:20,marginTop:5}}/>
        </View>
        <View style={styles.person}>
          <View style={styles.row}>
       
            <View style={styles.prof}>
              <View style={styles.m}><Text style={styles.Initials}>L</Text></View>
          
              <View><Text style={styles.per}>Landi</Text><Text style={styles.personal}>12 min ago</Text></View>
              <View></View>

          </View>
          </View>
          <Text style={{paddingLeft:20}}>I love myself .
              'I encourage everyone to be true to themselves</Text>
              <View style={{flexDirection:"row",alignSelf:'center'}}>
              <View style={styles.border} >
              <Image source={img} style={{width:20, height:20,marginLeft:30}}/>
              </View>
              <View style={styles.border}>
               <Image source={img2} style={{width:20,height:20,marginLeft:30}}/>
              </View>
              <View style={styles.border}>
              <Image source={img1} style={{width:20,height:20,marginLeft:30}}/>
              </View>
              </View>
              <View style={styles.comment}><Text>comment...</Text></View>
        </View>
     
         <View style={styles.person2}>
          <View style={styles.row}>
       
            <View style={styles.prof}>
              <View style={styles.m}><Text style={styles.Initials}>M</Text></View>
          
              <View><Text style={styles.per}>Mpho</Text><Text style={styles.personal}>10 min ago</Text></View>
              <View></View>

          </View>
          
          </View>
          <Text style={{paddingLeft:20}}>I love myself .
              'I encourage everyone to be true to themselves</Text>
              <View style={{flexDirection:"row",alignSelf:'center',}}>
              <View style={styles.border2} >
              <Image source={img} style={{width:20, height:20,marginLeft:30}}/>
              </View>
              <View style={styles.border2}>
               <Image source={img2} style={{width:20,height:20,marginLeft:30}}/>
              </View>
              <View style={styles.border2}>
              <Image source={img1} style={{width:20,height:20,marginLeft:30}}/>
              </View>
              </View>
              <View style={styles.comment}><Text>comment...</Text></View>
        </View>
       
       
       

       <TouchableOpacity style={styles.btnJournal}><Text style={styles.journal}>My journal</Text></TouchableOpacity>
        </View>
        
         </>
    )
}

export default Home


    const styles = StyleSheet.create({
        head:{
          flexDirection:'row',
          marginLeft:-60,
          backgroundColor:"#FFFFFF",
         
        
        },
      
        tex:{
          fontSize:25,
          fontFamily:'regular',
          color:'black',
          fontWeight:'900',
          marginLeft:80,
          paddingTop:50,
          borderBottomWidth:8,
          borderBottomColor:'#F2C66E',
          borderRadius:5
          
          
        },
        text:{
         fontFamily:'regular',
          color:'black',
          fontWeight:'900',
          borderBottomWidth:4,
          width:180,
          padding:5,
          paddingLeft:1,
          marginLeft:30
        },
        Profile:{
         
          width:50,
          height:50,
          borderRadius:60,
          margin:50,
          marginLeft:140
        },
        h2:{
          flexDirection:'row'
        },
        fav:{
          paddingLeft:80,
          paddingTop:5
        },
        person:{
          width:'90%',
          height:'31%',
          margin:'5%',
          alignSelf:'center',
         borderWidth:3,
         backgroundColor:"#FFFFFF",
          borderRadius:10
        },
        person2:{
         width:'90%',
         height:'30%',
         marginTop:'-0%',
         alignSelf:'center',
       backgroundColor:"#FFFFFF",
        borderWidth:3,
         borderRadius:10
       },
        prof:{
        flexDirection:'row',
       
         borderRadius:100,
         marginLeft:10,
         marginBottom:10,
        },
        m:{
          width:50,
         height:50,
          borderRadius:100,
          borderWidth:1,
          margin:5
     
        },
        Initials:{
          width:50,
          padding:10,
          paddingLeft:18,
          fontWeight:"bold",
          fontSize:18,
          borderRadius:3,
          alignSelf:'center'
        },
        per:{
          padding:10,
          fontWeight:'bold',
         color:'black'
        },
        personal:{
           paddingLeft:10,
           paddingTop:-20
        },
        border:{
          border:1,
          width:'25%',
          height:'75%',
          borderWidth:2,
          marginTop:'2%',
         
        },
        border2:{
            border:1,
            width:'25%',
            height:'75%',
            borderWidth:2,
            marginTop:'2%',
           
          },
        comment:{
          width:'70%',
          height:'14%',
          borderWidth:1,
          alignSelf:'center',
          marginTop:'3%',
          paddingLeft:10,
        }
        ,
        btnJournal:{
          width:80,
          height:35,
          backgroundColor:'#F2C66E',
          justifyContent:'center',
          alignSelf:"center",
          borderRadius:60,
         marginTop:-20
        },
        journal:{
          color:'white',
          fontSize:14,
          fontWeight:'bold',
          alignSelf:'center',
        },
      
    
})
