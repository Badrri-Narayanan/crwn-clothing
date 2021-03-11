import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBxa2UraAGVyTguOs_VxRbGKuJILtrgM9U",
    authDomain: "crwn-db-50125.firebaseapp.com",
    databaseURL: "https://crwn-db-50125-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crwn-db-50125",
    storageBucket: "crwn-db-50125.appspot.com",
    messagingSenderId: "1086903094417",
    appId: "1:1086903094417:web:3e70cf62125e980eb64330",
    measurementId: "G-KMLR571EBN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;