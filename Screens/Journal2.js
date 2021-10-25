import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { color } from 'react-native-reanimated'

const Journal = () => {
    const img = require('../Assets/Images/profile.png')
    const img1 = require('../Assets/Images/family.png')
    const img2 = require('../Assets/Images/friends.png')
    const img3 = require('../Assets/Images/date.png')
    const img4 = require('../Assets/Images/movies.png')
    const img5 = require('../Assets/Images/cleaning.png')
    const img6 = require('../Assets/Images/exercising.png')
    const img7 = require('../Assets/Images/games.png')
    const img8 = require('../Assets/Images/sleeping.png')
    const img9 = require('../Assets/Images/relaxing.png')
  
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image source={img} style={styles.profile} />
            </View>
                               {/* Journal2 Heading */}
            <Text style={styles.contentText}>What makes you Happy?</Text>
                               {/* First row icons */}
            <View style={styles.boders}>
                <View style={styles.border}>
                    <View>
                        <Image source={img1} style={styles.image} />
                    </View>
                    <Text style={styles.happy}>Family</Text>
                </View>

                <View style={styles.border}>
                    <View>
                        <Image source={img2} style={styles.image2} />
                    </View>
                    <Text style={styles.sad}>Friends</Text>
                </View>

                <View style={styles.border}>
                    <View>
                        <Image source={img3} style={styles.happy} />
                    </View>
                    <Text style={styles.crying}>Date</Text>
                </View>
            </View>
                                 {/* Second row icons */}
            <View>

                <View style={styles.boders}>
                    <View style={styles.border}>
                        <View>
                            <Image source={img4} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Movies</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img5} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Cleaning</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img6} style={styles.heart} />
                        </View>
                        <Text style={styles.heartbroken}>exercising</Text>
                    </View>

                </View>

            </View>
                                 {/* Third row icons */}
            <View>

            <View style={styles.boders}>
                    <View style={styles.border}>
                        <View>
                            <Image source={img7} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Games</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img8} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Sleeping</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img9} style={styles.heart} />
                        </View>
                        <Text style={styles.heartbroken}>Relaxing</Text>
                    </View>

            </View>
        </View>
                                  {/* Buttons */}
            <View style={styles.btns}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.btn}>Add</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    }




export default Journal

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        backgroundColor: 'white'
    },
    contentText: {
        fontSize: 25,
        color: '#f2c66e'
    },
    border: {
        border: 1,
        width: 100,
        height: 100,
        borderWidth: 1,
        borderRadius: 200,
        marginRight: 30,
        marginTop: 40
    },
    boders: {
        flexDirection: 'row'

    },
    btn: {
        color: 'white',
        marginLeft: 35,
        marginTop: 15

    },
    happy: {
        marginTop: 24,
        marginLeft: 15,
        fontWeight: 'bold',
       


    },
    

    button: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 100,
        height: 50,
        marginTop: 10,
        marginRight: 100,
        backgroundColor: 'black'

    },

    btns: {
        flexDirection: 'row',
       paddingTop:-80,
       marginTop:41,


    },
    button2: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 100,
        height: 50,
        marginTop: 10,
        marginLeft: 94,
        backgroundColor: 'black'

    },
    profile: {
        marginLeft: 350,
        marginTop: 0,

    },
    grand: {
        marginLeft: 150,
        marginBottom: -59,
        marginTop: 32
    },
    text: {

    },
    sad: {
        marginTop: 28,
        marginLeft: 30,
        fontWeight: 'bold',

    },
    heart: {

        marginTop: 28,
        marginLeft: 20,
        fontWeight: 'bold',
        width:60,
        height:60,

    },
    crying: {
        marginBottom: -400,
        marginTop: 15,
        marginLeft: 30,
        fontWeight: 'bold',
       
    },
    heartbroken:{
        marginTop: 24,
        marginLeft: 15,
        fontWeight:'bold'
    },
    image:{
        width:60,
        height:60,
        marginLeft:18,
        marginTop:22
    },
    image2:{
        width:60,
        height:60,
        marginLeft:18,
        marginTop:22
    },













})

