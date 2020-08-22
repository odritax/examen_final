import firebase from 'firebase/app';
import 'firebase/firestore'
// referencing configuration values from .env.development
var firebaseConfig = {
    apiKey: "AIzaSyBvPcmDKwQ4K4zc87aPdDGdRn7ntbVdqyE",
    authDomain: "prueba-e5232.firebaseapp.com",
    databaseURL: "https://prueba-e5232.firebaseio.com",
    projectId:"prueba-e5232",
    storageBucket: "prueba-e5232.appspot.com",
    messagingSenderId:"870011764561",
    appId:  "1:870011764561:web:f68d366967e7c6bad71d70",
};

// Initialize Firebase with configurations from above
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
