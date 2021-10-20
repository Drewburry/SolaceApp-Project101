import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'
import { color } from 'react-native-reanimated'

const Journal = () => {
    const img = require('../Assets/Images/profile.png')
    const img1 = require('../Assets/Images/happy.png')
    const img2 = require('../Assets/Images/sad.png')
    const img3 = require('../Assets/Images/crying.png')
    const img4 = require('../Assets/Images/lonely.png')
    const img5 = require('../Assets/Images/hand.png')
    const img6 = require('../Assets/Images/heartbroken.png')
    return (
        <View style={styles.mainContainer}>
            <View>
                <Image source={img} style={styles.profile} />
            </View>

            <Text style={styles.contentText}>Hi Mpho</Text>
            <Text style={styles.contentText}>how are you feeling?</Text>

            <View style={styles.boders}>
                <View style={styles.border}>
                    <View>
                        <Image source={img1} style={styles.happy} />
                    </View>
                    <Text style={styles.happy}>Happy</Text>
                </View>

                <View style={styles.border}>
                    <View>
                        <Image source={img2} style={styles.happy} />
                    </View>
                    <Text style={styles.sad}>Sad</Text>
                </View>

                <View style={styles.border}>
                    <View>
                        <Image source={img3} style={styles.happy} />
                    </View>
                    <Text style={styles.crying}>Awful</Text>
                </View>

            </View>

            <View>

                <View style={styles.boders}>
                    <View style={styles.border}>
                        <View>
                            <Image source={img4} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Lonely</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img5} style={styles.happy} />
                        </View>
                        <Text style={styles.happy}>Great</Text>
                    </View>

                    <View style={styles.border}>
                        <View>
                            <Image source={img6} style={styles.heart} />
                        </View>
                        <Text style={styles.heartbroken}>heartbroken</Text>
                    </View>

                </View>

            </View>

            <View style={styles.btns}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btn}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.btn}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Journal

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'white'
    },
    contentText: {
        fontSize: 25,
        color: '#f2c66e'
    },
    border: {
        border: 1,
        width: 95,
        height: 92,
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
        marginLeft: 20,
        marginTop: 15

    },
    happy: {
        marginTop: 25,
        marginLeft: 25,



    },
    

    button: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 85,
        height: 60,
        marginTop: 150,
        marginRight: 100,
        backgroundColor: 'black'

    },

    btns: {
        flexDirection: 'row',
       marginTop:-30


    },
    button2: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 85,
        height: 60,
        marginTop: 150,
        marginLeft: 100,
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
        marginLeft: 40,
        fontWeight: 'bold',

    },
    heart: {

        marginTop: 20,
        marginLeft: 20,
        fontWeight: 'bold',

    },
    crying: {
        marginBottom: -400,
        marginTop: 28,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    heartbroken:{
        marginTop: 20,
        marginLeft: 13,
        fontWeight: 'bold',

    }


})

