import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native'

const Content = (props) => {
    return (

        <View style={styles.boders}>
            <View style={styles.border}>
                <View style={{ alignContent: 'center', justifyContent: 'center' }}>
                    <Image source={props.images} style={styles.happy} />
                </View>
                <Text style={styles.happytext}>{props.text}</Text>
            </View>
        </View>)
}

const Journal = ({route, navigation}) => {
    const {otherParam } = route.params;
    return (
        <View style={styles.mainContainer}>
            {/* Header text */}
            <Text style={styles.contentText}>What makes you {otherParam}?</Text>

           {/* first row of icons */}
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3',{otherParam ,otherParam2:'friends'})}><Content images={require('../Assets/Images/friends.png')} text="Friends"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3',{otherParam ,otherParam2:'family'})}><Content images={require('../Assets/Images/family.png')} text="Family"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3',{otherParam ,otherParam2:'date'})}><Content images={require('../Assets/Images/date.png')} text="Date"/></TouchableOpacity>
           </View>

           {/* second row of icons */}
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam ,otherParam2:'movies'})}><Content images={require('../Assets/Images/movies.png')} text="Movies"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam ,otherParam2:'cleaning'})}><Content images={require('../Assets/Images/cleaning.png')} text="Cleaning"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3',{otherParam ,otherParam2:'excercise'})}><Content images={require('../Assets/Images/exercising.png')} text="Exercise"/></TouchableOpacity>
           </View>

           {/* Third row of icons */}
           <View style={{flexDirection:'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam , otherParam2:'gaming'})}><Content images={require('../Assets/Images/games.png')} text="Gaming"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam ,otherParam2:'sleeping'})}><Content images={require('../Assets/Images/sleeping.png')} text="sleeping"/></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Journal3', {otherParam ,otherParam2:'relaxing'})}><Content images={require('../Assets/Images/relaxing.png')} text="relaxing"/></TouchableOpacity>
           </View>

            {/* Buttons  */}
            <View style={styles.btns}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
                    <Text style={styles.btn}>Back</Text>
                </TouchableOpacity>
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
        marginTop: 65
    },
    boders: {
        flexDirection: 'row',

    },
    btn: {
        color: 'white',
        marginLeft: 15,

    },


    button: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 85,
        height: 40,
        marginTop: 10,
        backgroundColor: 'black',
        padding:7
        
    },

    btns: {
        flexDirection: 'row',
        marginTop:65,
        paddingVertical:25,
    },
    button2: {
        border: 1,
        borderWidth: 2,
        borderRadius: 60,
        width: 85,
        height: 40,
        marginTop: 10,
        marginLeft: 100,
        backgroundColor: 'black',
        padding:7,
    },
   
    happy:{
    width:45,
    height:45,
    margin:7,
    },
    happytext:{
     textAlign:'center',
     marginTop:5,
     fontSize:15,
    },

})


