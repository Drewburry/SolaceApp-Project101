import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const Onboarding = () => {
    return (
        <Onboarding
        pages={[
          {
            backgroundColor: '#fff',
            // image: <Image source={require('./images/circle.png')} />,
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          }
        ]}
      />
    )
}

export default Onboarding

const styles = StyleSheet.create({})
