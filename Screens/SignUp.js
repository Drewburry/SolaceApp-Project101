import React, {useState} from 'react'
import { TextInput, } from 'react-native-gesture-handler'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import firestore  from "@react-native-firebase/firestore"; 
const SignUp = ({ navigation }) => {
    const img = require('../Assets/Images/logo.png')
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSignUp = (navigate)=>{
        if (password !== confirmPass){
           alert("Passwords do not match")
        }else if(password == confirmPass){
            alert('You have successfuly signed up')

            firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            firestore().collection("users").doc(email).set({firstName:firstName, lastName:lastName,}).then(() =>{  
                    navigate("Login");     
                  })
          }) .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
              } else {
                alert(errorMessage);
              }
              console.log(error);
            });  
          }
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
                    placeholder='First name'
                    style={styles.TextInput}
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput
                    placeholder='Last name'
                    style={styles.TextInput}
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
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
                <TextInput
                    placeholder='Confirm Password'
                    style={styles.TextInput}
                    value={confirmPass}
                    onChangeText={text => setConfirmPass(text)}
                    secureTextEntry
                />
            </View>
            {/* Button */}
            <TouchableOpacity onPress={handleSignUp}>
                <Text style={styles.btn}>Create Account</Text>
            </TouchableOpacity>

            <Text>Already have an account?
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: "#f2c66e" }}>Sign in</Text>
                </TouchableOpacity>
            </Text>
        </View>

    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',

    },

    TextInput: {
        top: 25,
        position: 'relative',
        borderWidth: 1,
        width: 360,
        height: 50,
        marginBottom: 8,
        borderRadius: 25,
        paddingLeft: 12,
    },
    logo: {
        width: 100,
        height: 100,

    },
    header: {
        marginLeft: 150,
        marginTop: 25,


    },
    tagline: {
        fontSize: 22,
        padding: 5,
    },
    container2: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        position: 'relative',
        marginTop: 70,
        borderWidth: 1,
        width: 140,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        paddingTop: 12,



    },
})
