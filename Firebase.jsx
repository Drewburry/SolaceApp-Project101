import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjgzRx5Bw2gWqi9tP5AVpa266VPEo65tE",
  authDomain: "solace-project101.firebaseapp.com",
  projectId: "solace-project101",
  storageBucket: "solace-project101.appspot.com",
  messagingSenderId: "380624961938",
  appId: "1:380624961938:web:0bad17a5efa1d5fc8dc14b"
};

// Initialize Firebase

   firebase.initializeApp(firebaseConfig);


export {firebase}