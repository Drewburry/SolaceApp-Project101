import React, {useState, useEffect} from 'react'
import { TextInput, } from 'react-native-gesture-handler'
import { StyleSheet, Text, View, Image, Button,TouchableOpacity ,} from 'react-native'
import { firebase } from '@react-native-firebase/auth'


const Login = ({navigation, setIsloggedIn}) => {
    // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const img = require('../Assets/Images/logo.png')

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
      }
      useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(user =>{
            if(user) {
                setIsloggedIn(true)
            }
        });
        return subscriber; // unsubscribe on unmount
      }, []);
      
    //    firebase authentication
    const handleSignIn =({navigation})=>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            // alert('sign in successfull')
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
              alert('Wrong password.');
            } else {
              alert(errorMessage);
            }
            console.log(error);
          });
    }

    return (
        <View style={styles.container}>
            {/* Login Page Logo */}
            <View>
                <Image source={img} style={styles.logo} />
            </View>

            {/* Header for Login Page */}
            <View>
                <Text style={styles.tagline}>Sobriety is in  <Text style={{ color: "#f2c66e" }}> your hands </Text> </Text>
            </View>

            {/* Text Inputs */}
            <View style={styles.container2}>
                <TextInput
                    placeholder='Email Adress'
                    style={styles.TextInput}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.TextInput}
                    value={password} 
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>

            {/* Button */}
            <TouchableOpacity onPress={handleSignIn}>
                <Text style={styles.btn}>Sign in</Text>
            </TouchableOpacity>

            {/* bottom SignUp text */}
            <View style={styles.text}><Text >Forgot your password?</Text></View>
            <Text>Don't have an account?
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: "#f2c66e", padding: 5, }}>SignUp</Text>
                </TouchableOpacity>
            </Text>
        </View>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    TextInput: {
        position: 'relative',
        borderWidth: 1,
        width: 360,
        height: 50,
        marginBottom: 25,
        borderRadius: 25,
        paddingLeft: 12,
    },

    logo: {
        marginTop: 15,
        width: 100,
        height: 100,
    },
    header: {
        marginLeft: 150,
        marginTop: 60,


    },
    tagline: {
        fontSize: 22,
        padding: 25,
    },
    container2: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn: {
        position: 'relative',
        marginTop: 5,
        borderWidth: 1,
        width: 140,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        paddingTop: 12,
        marginBottom: 5,



    },
    text: {
        marginBottom: 5,
    }
})
