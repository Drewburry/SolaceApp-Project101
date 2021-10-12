import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Journal = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.contentText}>Hi Mpho</Text>
            <Text>how are you feeling?</Text>
        </View>
    )
}

export default Journal

const styles = StyleSheet.create({
    mainContainer:{
     alignItems:'center',
     marginTop:15,
    },
  contentText:{   
    fontSize:25
}
})

