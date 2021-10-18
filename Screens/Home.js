import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';

const img = require('../Assets/Images/heart.png');
const img1 = require('../Assets/Images/Celebb.png');
const img2 = require('../Assets/Images/star.png');
const pro = require('../Assets/Images/profile.png');
const dropD = require('../Assets/Images/dropD.png');
const Comments = () => {
  return (
    <View style={styles.person}>
      <View style={styles.row}>
        <View style={styles.prof}>
          <View style={styles.letter}>
            <Text style={styles.Initials}>L</Text>
          </View>

          <View>
            <Text style={styles.per}>Landi</Text>
            <Text style={styles.timeSeen}>12 min ago</Text>
          </View>
          <View></View>
        </View>
      </View>
      <Text style={{paddingLeft: 20}}>
        I love myself . 'I encourage everyone to be true to themselves
      </Text>
      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <View style={styles.border}>
          <Image source={img} style={{width: 20, height: 20, marginLeft: 30}} />
        </View>
        <View style={styles.border}>
          <Image
            source={img2}
            style={{width: 20, height: 20, marginLeft: 30}}
          />
        </View>
        <View style={styles.border}>
          <Image
            source={img1}
            style={{width: 20, height: 20, marginLeft: 30}}
          />
        </View>
      </View>
      <TextInput style={styles.comment} placeholder="Enter comment" />
    
    </View>
  );
};
const Profile = () => {
  return (
    <>
      <View style={styles.head}>
        <View style={{}}>
          <Text style={styles.tex}>Your Thoughts</Text>
        </View>
        <View style={styles.Profile}>
          <Image source={pro} style={{width: 60, height: 60}} />
        </View>
      </View>
      <View style={styles.heading2}>
        <Text style={styles.text}>Community Thoughts</Text>
        <Text style={styles.fav}> favourites </Text>
        <Image source={dropD} style={{width: 15, height: 20, marginTop: 5}} />
      </View>
    </>
  );
};

const Home = () => {
  return (
    <ScrollView vertical={true} style={{}} style={{backgroundColor: '#FFFFFF',}}>
      <View style={{}}>
        {/* profile and home Header */}
        <View style={{marginLeft: 25}}>
          <Profile />
        </View>

        {/* Comments section */}
        <View style={{flex: 2}}>
          <Comments />
          <Comments />
       
        </View>

      </View>
      <TouchableOpacity style={styles.btnJournal}>
        <Text style={styles.journal}>My journal</Text>
      </TouchableOpacity>
    </ScrollView>
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
  Profile: {
    marginTop: 5,
    width: 50,
    height: 50,
    borderRadius: 60,
    marginLeft: 70,
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
    height: "40%",
    margin: '5%',
    alignSelf: 'center',
    borderWidth: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  person2: {
    width: '90%',
    height: '36%',
    marginTop: '-0%',
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 3,
    borderRadius: 10,
  },
  prof: {
    flexDirection: 'row',
    borderRadius: 100,
    marginLeft: 10,
    marginBottom: 10,
  },
  letter: {
    width: '12%',
    height: '75%',
    borderRadius: 100,
    borderWidth: 1,
    margin: 5,
  },
  Initials: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 16,
    borderRadius: 3,
    alignSelf: 'center',
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
    border: 1,
    width: '25%',
    height: '75%',
    borderWidth: 2,
    marginTop: '2%',
  },
  border2: {
    border: 1,
    width: '25%',
    height: '75%',
    borderWidth: 2,
    marginTop: '2%',
  },
  comment: {
    width: '70%',
    height: '20%',
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
