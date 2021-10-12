import React, {use} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const Logout = ({navigation}) => {
    const [isLoggedOut, setIsLoggedOut] = useState(false)
    auth()
    .signOut()
    .then(() => {
        console.log('User signed out!')
    });
    {isLoggedOut ?
         (navigation.navigate("Login"))
          : 
          (navigation.navigate("Home"))}
    }

export default Logout

const styles = StyleSheet.create({})
 