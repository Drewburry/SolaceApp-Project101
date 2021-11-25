import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button, StyleSheet, Text, View } from 'react-native'
import Home from '../../Screens/Home';
import WriteJournal from '../../Screens/WriteJournal';
import Journal from '../../Screens/Journal';
import Journal2 from '../../Screens/Journal2';
import Journal3 from '../../Screens/Journal3';
import Journal4 from '../../Screens/Journal4';
import Chat from '../../Screens/Chat';
import Toolkit from '../../Screens/Toolkit';
import Facilities from '../../Screens/Facilities';
import DrawerNavigationContent from '../../Components/DrawerNavigationContent';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {

    return (
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerNavigationContent  {...props}/>}>               
                <Drawer.Screen name="Home" options={{headerShown:false}} component={Home} />
                <Drawer.Screen name="WriteJournal" options={{headerShown:false}} component={WriteJournal} />
                <Drawer.Screen name="Journal" options={{headerShown:false}} component={Journal} />
                <Drawer.Screen name="Journal2" options={{headerShown:false}} component={Journal2} />
                <Drawer.Screen name="Journal3" options={{headerShown:false}} component={Journal3} />
                <Drawer.Screen name="Journal4" options={{headerShown:false}} component={Journal4} />
                <Drawer.Screen name="Facilities" options={{headerShown:false}} component={Facilities} />
                <Drawer.Screen name="Chat" options={{headerShown:false}} component={Chat} />
                <Drawer.Screen name="Toolkit" options={{headerShown:false}} component={Toolkit} />
            </Drawer.Navigator>
    );
}

export default DrawerNavigation

const styles = StyleSheet.create({})
