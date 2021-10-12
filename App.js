import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './Screens/Onboarding';
import LoginScreen from './Screens/Login'
import Home from './Screens/Home';
import DrawerNavigation from './Assets/Navigations/DrawerNavigation';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';


const Stack = createNativeStackNavigator();

// Nested navigators
function Root(){
  return(
    <DrawerNavigation />
  )
}

function App() {

  const [isLoggeIn, setIsloggedIn] = useState(false)
  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggeIn ? (  
        <Stack.Group>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }} />
        </Stack.Group>
        ) : (
        <Stack.Group>
          {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} /> */}
          <Stack.Screen options={{ headerShown:false}} name="Login" >
            {props=><LoginScreen {...props} setIsloggedIn={setIsloggedIn}/>}
          </Stack.Screen>
          <Stack.Screen options={{ headerShown:false}} name="SignUp" component={SignUp} />
        </Stack.Group>
        )}       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
 
});
