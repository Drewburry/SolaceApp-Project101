import React from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import Circle from './Components/Circle';

const OnboardingPage = () => {
    return (
      <>
        <View style={styles.yellow}>

</View>



<Onboarding 
pages={[
  {
    backgroundColor: '#fff',
   image: <Image source={require('./Assets/Images/TwoP.png')}/>,
    title: 'HEAL YOUR SOUL  '+  '\n'  +' is simply dummy text of the printing '
    +'and typesetting industry. Lorem Ipsum '
   ,
    subtitle:"awaewewew" ,
 
  },

  {
    backgroundColor: '#fff',
    image: <Image source={require('./Assets/Images/happ.png')}/>,
    title: 'FIND YOUR PEACE'+'\n' + ' is simply dummy text of the printing '
    +'and typesetting industry. Lorem Ipsum '
   +' has been the',
    subtitle: <Circle/>,
  },
  {
    backgroundColor: '#fff',
   image: <Image source={require('./Assets/Images/peace1.png')}/>,
   title: 'FIND YOUR HAPPPY'+'\n'  + ' is simply dummy text of the printing '
   +'and typesetting industry. Lorem Ipsum '
   +' has been the',
    subtitle:  <Circle/>,  
  },

]}

/>
     </>
    )
}

export default OnboardingPage

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
  }
})
