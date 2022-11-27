import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPdE1zyLYPuAj9f1Lrjb_fCsJaQ4ZJJn0",
    authDomain: "slack-clone-422a5.firebaseapp.com",
    projectId: "slack-clone-422a5",
    storageBucket: "slack-clone-422a5.appspot.com",
    messagingSenderId: "921665159837",
    appId: "1:921665159837:web:dd935e208024f0cc2cca74",
    measurementId: "G-JPSB4S29X3"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

