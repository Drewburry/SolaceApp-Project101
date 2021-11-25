import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'

// component for the content rendered in the Journals
const ContentImages = (props) => {
    return (

        <View style={styles.boders}>
            <View style={styles.border}>
                <View style={{ alignContentImages: 'center', justifyContentImages: 'center' }}>
                    <Image source={props.images} style={styles.happy} />
                </View>
                <Text style={styles.happytext}>{props.text}</Text>
            </View>
        </View>)
}

const Journal = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            {/* Header text */}
            <Text style={styles.contentText}>Hi Mpho</Text>
            <Text style={styles.contentText}>how are you feeling?</Text>

            {/* first row of icons */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'happy'})}><ContentImages images={require('../Assets/Images/happy.png')} text="Happy" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'sad'})}><ContentImages images={require('../Assets/Images/sad.png')} text="Sad" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'cry'})}><ContentImages images={require('../Assets/Images/crying.png')} text="crying" /></TouchableOpacity>
            </View>

            {/* second row of icons */}
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'feel lonely'})}><ContentImages images={require('../Assets/Images/lonely.png')} text="lonely" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'ok'})}><ContentImages images={require('../Assets/Images/hand.png')} text="Ok" /></TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Journal2', {otherParam:'broken'})}><ContentImages images={require('../Assets/Images/heartbroken.png')} text="broken" /></TouchableOpacity>
            </View>
        </View>
    )
}

export default Journal

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    contentText: {
        top: 45,
        position: 'relative',
        fontSize: 20,
        color: '#f2c66e',
        lineHeight: 20,
    },
    border: {
        width: 65,
        height: 65,
        borderWidth: 1,
        borderRadius: 50,
        marginRight: 30,
        marginTop: 100
    },
    boders: {
        flexDirection: 'row',

    },

    happy: {
        margin: 7,
    },
    happytext: {
        textAlign: 'center'
    },


})

