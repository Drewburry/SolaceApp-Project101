import React from 'react'
import { TextInput, TouchableOpacity, } from 'react-native-gesture-handler'
import { StyleSheet, Text, View, Image,Button } from 'react-native'


const SignUp = () => {
    const img = require('../Assets/Images/logo.png')

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
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    placeholder='Last name'
                    style={styles.TextInput}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    placeholder='Email Adress'
                    style={styles.TextInput}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.TextInput}
                    onChangeText={(password) => setPassword(password)}
                />
                <TextInput
                    placeholder='Confirm Password'
                    style={styles.TextInput}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
             {/* Button */}
           <TouchableOpacity >
               <Text style={styles.btn}>Create Account</Text>
        </TouchableOpacity> 
        <Text>Already have an account? <Text style={{ color: "#f2c66e" }}>Sign in </Text></Text>
        </View>

    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',

    },

    TextInput: {
        top:25,
        position:'relative',
        borderWidth: 1,
        width:360,
        height:50,
        marginBottom:8,
        borderRadius:25,
        paddingLeft:12,
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
    container2:{
        flex:0,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
      position:'relative',
      marginTop:70,
      borderWidth:1,
      width:140,
      height:50,
      borderRadius:25,
      backgroundColor:'black',
      color:'white',
      textAlign:'center',
      paddingTop:12,
      


    },
})
