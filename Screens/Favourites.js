import React, { useEffect } from 'react'
import { Button, StyleSheet, Text, View, } from 'react-native'
import { firebase } from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';


const Favourites = () => {
    const [val, setVal] = React.useState(null)

    var db = firebase.firestore();
    useEffect(() => {
        db.collection('community')
            .get()
            .then(snapshot => {
                const val = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    val.push(data)
                })
                setVal(val)
            }).catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <ScrollView>
            <View style={styles.mainContainer}>
                {
                     val && val.map(val =>{
                         return(
                             <View>
                                 <Text>{val.text}</Text>
                             </View>
                         )
                     })
                     
                }
            </View>
        </ScrollView>
    )
}

export default Favourites

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center'
    }
})
