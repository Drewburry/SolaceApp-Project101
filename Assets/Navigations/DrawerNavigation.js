import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native'
import Home from '../../Screens/Home';
import Journal2 from '../../Screens/Journal2';
import Chat from '../../Screens/Chat';
import Toolkit from '../../Screens/Toolkit';
import Facilities from '../../Screens/Facilities';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
            <Drawer.Navigator initialRouteName="Home">               
                {/* <Drawer.Screen name="Home" component={Home} /> */}
                <Drawer.Screen name="Journal" component={Journal2} />
                <Drawer.Screen name="Facilities" component={Facilities} />
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="Toolkit" component={Toolkit} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigation

const styles = StyleSheet.create({})
