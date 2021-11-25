import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Sendbutton from '../Components/Button';
import { Avatar } from 'react-native-paper';
import Favourites from './Favourites'
import SwitchSelector from "react-native-switch-selector";
import { firebase } from '@react-native-firebase/firestore';
import '@react-native-firebase/auth'
const img = require('../Assets/Images/heart.png');
const img1 = require('../Assets/Images/Celebb.png');
const img2 = require('../Assets/Images/star.png');


const select = [
  { label: "Community", value: "community" },
  { label: "Favourites", value: "favourites" },
  { label: "Chats", value: "Chats" },
];

const auth = firebase.auth();
const Home = () => {

  const [community, setCommunity] = React.useState(true)
  const [favourites, setFavourites] = React.useState(false)
  const [chats, setChats] = React.useState(false)
  const [val, setVal] = React.useState(null)
  const [user, setUser] = React.useState(() => auth.currentUser)

  const [date, setDate] = React.useState(new Date())
 
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        console.log(user)
      } else {
        setUser(null)
      }
    })
  }, [])

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

 
//  const userName = () =>{
//    if(user == user){
//      user.updateProfile({
//        displayName:"firstName"
//      })
//    }else{
//      setUser(null)
//    }
//  }
  const Check = ((value) => {
    if (value == "community") {
      setCommunity(true)
    } else if (value == "favourites") {
      setFavourites(true);
      setCommunity(false);
      setChats(false)
    } else {
      setChats(true);
      setFavourites(false);
      setCommunity(false);
    }
  })
  return (
    <View style={{ flex: 1 }}>
      <View>
        <View style={styles.head}>
          <View >
            <Text style={styles.tex}>Your Thoughts</Text>
          </View>
        </View>

        <SwitchSelector
          style={{ margin: 10 }}
          options={select}
          initial={community ? 0 : 1}
          buttonColor="#F2C66E"
          onPress={(value) => {
            Check(value);
          }}

        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#FFFFFF', }}>
        {
          val && val.map(val => {
            return (
              <View style={styles.person}>
                {community ?

                  <View>
                    <View style={styles.row}>
                      <View style={styles.prof}>
                        <Avatar.Image
                          style={{ marginTop: 5 }}
                          size={50}
                          source={{ uri: 'https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/08/hug-kiss-images.jpg' }}
                        />
                        
                        <View>
                          <Text style={styles.per}>{user.displayName}</Text>
                          <Text style={styles.timeSeen}>Last seen {date.toTimeString().substring(0, 8)} </Text>
                        </View>
                        <View></View>
                      </View>
                    </View>
                    <View style={{ paddingLeft: 20, flexDirection: "column" }}>
                      <Text>Mood {val.mood}</Text>
                      <Text>{val.text}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                      <View style={styles.border}>
                        <TouchableOpacity onPress={() => saveFav("testing")}>
                          <Image source={img} style={{ width: 25, height: 25, marginLeft: 25 }} />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.border}>
                        <TouchableOpacity>
                          <Image
                            source={img2}
                            style={{ width: 25, height: 25, marginLeft: 30 }}
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.border}>
                        <TouchableOpacity>
                          <Image
                            source={img1}
                            style={{ width: 25, height: 25, marginLeft: 30 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TextInput style={styles.comment} placeholder="Enter comment" size={45} row={10} col={5} />
                    {/* send button  */}
                    <TouchableOpacity>
                      <Sendbutton />
                    </TouchableOpacity>
                  </View>
                  :

                  null

                }
              </View>
            )
          })
        }
      </ScrollView>
      {favourites ? <View><Favourites /></View> : null}
      {chats ? <View><Text>Chats</Text></View> : null}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    marginLeft: -60,
    backgroundColor: '#FFFFFF',
  },

  tex: {
    marginTop: 5,
    fontSize: 25,
    fontFamily: 'regular',
    color: 'black',
    fontWeight: '900',
    marginLeft: 80,
    borderBottomWidth: 8,
    borderBottomColor: '#F2C66E',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'regular',
    color: 'black',
    fontWeight: '900',
    borderBottomWidth: 4,
    width: 150,
    padding: 5,
    paddingLeft: 1,
    marginLeft: 30,
  },

  heading2: {
    flexDirection: 'row',
  },
  fav: {
    paddingLeft: 50,
    paddingTop: 5,
  },
  person: {
    width: '90%',
    margin: '5%',
    padding: 5,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
  },

  prof: {
    flexDirection: 'row',
    borderRadius: 50,
    marginLeft: 10,
    marginBottom: 10,
  },

  Initials: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8
  },
  per: {
    padding: 5,
    fontWeight: 'bold',
    color: 'black',
  },
  timeSeen: {
    paddingLeft: 5,
  },
  border: {
    padding: 2,
    border: 1,
    width: '25%',
    borderWidth: 1,
    marginTop: '5%',
  },

  comment: {
    width: '70%',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: '5%',
    paddingLeft: 10,
    borderRadius: 25,
  },
  btnJournal: {
    width: 80,
    height: 35,
    backgroundColor: '#F2C66E',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 60,
    marginBottom: 20,
  },
  journal: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
