import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import Circle from '../Components/Circle';
//Importing paragraphs and heading 
import Para from '../Components/Para';
import Para2 from '../Components/Para2';
import Para3 from '../Components/Para3';

const OnboardingScreen = ({navigation}) => {
  const img = require('../Assets/Images/test.png')
  const Skip = ({...props}) =>{
    return(
     <TouchableOpacity style={{backgroundColor:"#FFFFFF",width:500,height:64}}  >
       <Text {...props} style={styles.skipBtn}>Skip</Text>
       </TouchableOpacity>
    )
  }
  const Next = ({...props}) =>{
    return(
     <TouchableOpacity {...props} style={{backgroundColor:"#FFFFFF",height:64 }}  >
       <Text {...props} style={styles.nextBtn}>Next</Text>
     </TouchableOpacity>
    )
  }
  const Done = ({...props}) =>{
    return(
     <TouchableOpacity {...props} style={{backgroundColor:"#FFFFFF",width:500 ,height:64}} >
       <Text {...props} style={styles.DoneBtn}>Done</Text>
     </TouchableOpacity>
    )
  }
    return (
      <>
      {/* Onboarding circle */}
      <View style={{backgroundColor:'#FFFFFF'}}>
      <View style={styles.yellow}>
      </View>
      </View>

      <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.replace("Login")}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      pages={[
          {
            backgroundColor: '#fff',
           image: <Image source={require('../Assets/Images/Two.png')} style={{marginTop:-100}}/>,
            title:<Para/>,
            subtitle:<Circle/> ,
         
          },
        
          {
            backgroundColor: '#fff',
            image: <Image source={require('../Assets/Images/happ.png')}/>,
            title: <Para2/>,
            subtitle: <Circle/>,
          },
          {
            backgroundColor: '#fff',
           image: <Image source={require('../Assets/Images/peace1.png')} style={{marginTop:-100}}/>,
           title:<Para3/>,
            subtitle:  <Circle/>,  
          },
        
        ]}
    />
    </>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  yellow:{
        backgroundColor:"#F2C66E",
        width:100,
        height:100,
        borderRadius:100,
        marginTop:-30,
        marginLeft:-20
      },
    
      Onboarding:{
        color:'yellow'
      },

      // Onboarding button styling
  imgs:{
    width:120,
    height:100,
  },
  skipBtn:{
    width:80,
    height:40,
    color:'#fff',
   marginHorizontal:20,
   borderRadius:30,
   backgroundColor:'black',
   padding:10,
   paddingLeft:20,
   marginTop:10
  },
nextBtn:{
  width:80,
  height:40,
  color:'#fff',
  marginHorizontal:20,
  borderRadius:30,
  backgroundColor:'black',
  padding:10,
  paddingLeft:20,
  marginTop:10
},
DoneBtn:{
  width:80,
  height:40,
  color:'#fff',
  marginHorizontal:400,
  borderRadius:30,
  backgroundColor:'black',
  padding:10,
  paddingLeft:20,
  marginTop:10
},
})
