import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import auth from '@react-native-firebase/auth';
import Logout from './Logout'


const DrawerNavigationContent = (props, {}) => {

  const logoutUser = () =>{
      Logout()
      .then(()=>{
        navigate("Login")
      }).catch((err)=> console.log(err))
  }  
   
    
const [isDarkTheme, setIsDarkTheme] = React.useState(false)
const toggleTheme =() =>{
    setIsDarkTheme(!isDarkTheme);
}
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row'}}>
                            <Avatar.Image 
                            source ={{
                                uri:"https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                            }}/>
                            <View style={{marginLeft:15}}>
                                <Title>Andrew Persent</Title>
                                <Caption>@Persent</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section>
                    <DrawerItem
                    icon={({ color, size }) => ( <Icon name="home-outline" color={color} size={size}/>)}
                    label="Home"
                    onPress={() => {props.navigation.navigate("Home") }}
                />
                    <DrawerItem
                    icon={({ color, size }) => (<Icon name="book-outline" color={color} size={size}/>)}
                    label="Journals"
                    onPress={() => {props.navigation.navigate("Journal") }}
                />
                    <DrawerItem
                    icon={({ color, size }) => (<Icon name="google-maps" color={color} size={size}/>)}
                    label="Facilities"
                    onPress={() => {props.navigation.navigate("Facilities") }}
                />
                    <DrawerItem
                    icon={({ color, size }) => (<Icon name="tools" color={color} size={size}/>)}
                    label="Tool kit"
                    onPress={() => {props.navigation.navigate("Toolkit") }}
                />
                    </Drawer.Section>
                    <Drawer.Section  title="Preferences">
                    <TouchableRipple onPress={()=> {toggleTheme()}}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                            <Switch style={{marginLeft:130,}} value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size}/>)} 
                        label="Sign Out"
                    onPress={logoutUser}
                />
            </Drawer.Section>
        </View>
    )
}

export default DrawerNavigationContent

const styles = StyleSheet.create({
    DrawerContent:{
        flex:1,
    },
    userInfoSection:{
        padding:20,
        
    },
    bottomDrawerSection: {
        marginBottom: 15,
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    }
})
