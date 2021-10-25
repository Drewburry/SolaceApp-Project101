import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native'
import Home from '../../Screens/Home';
import Journal from '../../Screens/Journal';
import Chat from '../../Screens/Chat';
import Toolkit from '../../Screens/Toolkit';
import Facilities from '../../Screens/Facilities';
import DrawerNavigationContent from '../../Components/DrawerNavigationContent';

import auth from '@react-native-firebase/auth';
import Sendbutton from '../../Components/Button';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerNavigationContent  {...props}/>}>               
                <Drawer.Screen name="Home" options={{headerShown:false}} component={Home} />
                <Drawer.Screen name="journal2" component={Journal} />
                <Drawer.Screen name="Facilities" component={Facilities} />
                <Drawer.Screen name="Chat" component={Chat} />
                <Drawer.Screen name="Toolkit" component={Toolkit} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigation

const styles = StyleSheet.create({})
