import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import SwitchSelector from "react-native-switch-selector";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker'
import { firebase } from '@react-native-firebase/firestore';

const Journal3 = ({ route, navigation }) => {
  
    var db = firebase.firestore();
    
    const { otherParam, otherParam2 } = route.params;
    const options = [
        { label: "Community", value: "Community" },
        { label: "Private", value: "Private" },
    ];
    const [text, setText] = React.useState('');
    const [date, setDate] = React.useState(new Date());
    const [open, setOpen] = React.useState(false);
    const imd = require('../Assets/Images/calender.gif');
    // save values to firebase 

    const saveToCommunity = (() => {
       db.collection("community").add({
           text:text,
           date:date,
           mood:otherParam,
           causeOfmood:otherParam2,
       }).then(()=>{
           console.log('added successfully')
           {navigation.navigate('Home')}
       }).catch((error)=>{
            console.log(error)
       }) 
    })

    return (
        <ScrollView>

            <View style={styles.mainContainer}>
                <Entypo style={{ marginBottom: 50, marginTop: 30 }} name="open-book" size={100} color="#000" />
                <Text style={styles.contentText}>Note down your feelings</Text>

                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity onPress={() => setOpen(true, date)}>
                        <Image source={imd} style={{ width: 40, height: 40 }} />
                    </TouchableOpacity>

                    <View style={{ marginLeft: 10, marginBottom: 20 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{date.toDateString()}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>{date.toTimeString().substring(0, 9)}</Text>
                    </View>

                </View>


                <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                    <Text style={{ marginTop: 10, fontSize: 18 }}>You are currently feeling {otherParam}</Text>
                    <Text style={{ fontSize: 18 }}>The cause of this is {otherParam2} </Text>
                </View>

                {/* TextBox Input */}
                <TextInput
                    onChangeText={(text) => setText(text)}
                    placeholder='Write your journal'
                    style={styles.textBox}
                    multiline={true}
                />

                {/* Send button */}

                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    onDateChange={() => { }}
                />
                <SwitchSelector
                    style={{ margin: 30 }}
                    options={options}
                    initial={0}
                    buttonColor="#F2C66E"

                />
                <TouchableOpacity
                    style={styles.sendButton}
                    onPress={saveToCommunity}
                >
                    <Text style={{ fontSize: 16, marginBottom: 5, marginLeft: 10, color: "#eee", fontWeight: 'bold' }}>Submit</Text>
                    <Ionicons style={{ marginRight: 5, }} name="send" size={30} color="#eee" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Journal3

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#6D6B6B",
        marginBottom: 25,
    },
    textBox: {

        width: 350,
        marginTop: 10,
        fontSize: 16,
    },
    sendButton: {
        borderWidth: 1,
        height: 35,
        width: 120,
        alignItems: 'flex-end',
        borderRadius: 25,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#18181bcc',
        borderColor: '#eee',
        marginBottom: 10,
    }
})