import React from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import Journal from './Screens/Journal';
import Chat from './Screens/Chat';
import Toolkit from './Screens/Toolkit';
import Facilities from './Screens/Facilities';
import OnboardingPage from 'react-native-onboarding-swiper';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Journal" component={Journal} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Toolkit" component={Toolkit} />
        <Drawer.Screen name="Facilities" component={Facilities} />
      </Drawer.Navigator>
    </NavigationContainer>  
  );
};

export default App;

const styles = StyleSheet.create({
 
});
