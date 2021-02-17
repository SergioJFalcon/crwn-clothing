import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDDQcFPd9vW7gj0V-IglUm23G7Tpm_OpI",
    authDomain: "crwn-db-a1ec4.firebaseapp.com",
    projectId: "crwn-db-a1ec4",
    storageBucket: "crwn-db-a1ec4.appspot.com",
    messagingSenderId: "631158485905",
    appId: "1:631158485905:web:86321b3c81523c32466030",
    measurementId: "G-JMBK46816V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;