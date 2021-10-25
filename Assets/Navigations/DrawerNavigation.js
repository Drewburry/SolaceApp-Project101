import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native'
import Home from '../../Screens/Home';
import Journal4 from '../../Screens/journal4';
import Chat from '../../Screens/Chat';
import Toolkit from '../../Screens/Toolkit';
import Facilities from '../../Screens/Facilities';
import auth from '@react-native-firebase/auth';
import Sendbutton from '../../Components/Button';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
            <Drawer.Navigator initialRouteName="Home">               
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Journal" component={Journal4} />
                <Drawer.Screen name="Facilities" component={Facilities} />
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="Toolkit" component={Toolkit} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigation

const styles = StyleSheet.create({})
