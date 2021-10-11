import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  const img = require('../Assets/Images/test.png')
  const Skip = ({...props}) =>{
    return(
     <TouchableOpacity  >
       <Text {...props} style={styles.skipBtn}>Skip</Text>
       </TouchableOpacity>
    )
  }
  const Next = ({...props}) =>{
    return(
     <TouchableOpacity {...props} >
       <Text {...props} style={styles.nextBtn}>Next</Text>
     </TouchableOpacity>
    )
  }
  const Done = ({...props}) =>{
    return(
     <TouchableOpacity {...props} >
       <Text {...props} style={styles.DoneBtn}>Done</Text>
     </TouchableOpacity>
    )
  }
    return (
      <Onboarding
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={img} style={styles.imgs} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={img} style={styles.imgs} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={img} style={styles.imgs} />,
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  imgs:{
    width:120,
    height:100,
  },
  skipBtn:{
    color:'#000',
   marginHorizontal:20,
  },
nextBtn:{
  color:'#000',
  marginHorizontal:20,
},
DoneBtn:{
  color:'#000',
  marginHorizontal:20,
},
})
