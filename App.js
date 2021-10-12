import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './Screens/Onboarding';
import LoginScreen from './Screens/Login'
import Home from './Screens/Home';
import DrawerNavigation from './Assets/Navigations/DrawerNavigation';
import Journal4 from './Screens/journal4';
const Stack = createNativeStackNavigator();

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
          <Stack.Screen name="Journal3" component={Home} />
        </Stack.Group>
        )}       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
 
});
