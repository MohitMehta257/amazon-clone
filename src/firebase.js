import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig={

    apiKey: "AIzaSyAdfD4lHSF6EtY03g-zzMdkqp8YR3YQ7S0",
    authDomain: "clone-28c8a.firebaseapp.com",
    projectId: "clone-28c8a",
    storageBucket: "clone-28c8a.appspot.com",
    messagingSenderId: "572257122889",
    appId: "1:572257122889:web:c920cf31653d1036529d98",
    measurementId: "G-P62X1MS3V4"

};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {auth,db};
