import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



const config = {
    apiKey: "AIzaSyBjmhkt3g4E2OQa-iHxoSfvIW5HIICon7o",
    authDomain: "crwn-db-38dec.firebaseapp.com",
    projectId: "crwn-db-38dec",
    storageBucket: "crwn-db-38dec.appspot.com",
    messagingSenderId: "861713157002",
    appId: "1:861713157002:web:e4a84a22f972e817635673",
    measurementId: "G-2DJV7FCPMJ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;