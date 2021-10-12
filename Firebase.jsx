
import { initializeApp } from "firebase/app"; 
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
let app;
if (firebase.app.length === 0) {
    app = initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()

export {auth}