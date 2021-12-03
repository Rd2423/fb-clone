import firebase from 'firebase';
import { initializeApp } from 'firebase/app';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD37JnSgfV0YN8aQRyhb89vGJSwJOVLgks",
  authDomain: "facebook-clone-65b8b.firebaseapp.com",
  projectId: "facebook-clone-65b8b",
  storageBucket: "facebook-clone-65b8b.appspot.com",
  messagingSenderId: "769928494333",
  appId: "1:769928494333:web:9c02abc3e6379a4e959294",
  measurementId: "G-YLYEG84RY4",
};
const app = initializeApp(firebaseConfig)
const db = firestore(app);


// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider}
export default db;