import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIrPxR5Vy9LnIIDor12JQWPOTSsTLRkeU",
    authDomain: "reactclone-de6d8.firebaseapp.com",
    projectId: "reactclone-de6d8",
    storageBucket: "reactclone-de6d8.appspot.com",
    messagingSenderId: "331397493741",
    appId: "1:331397493741:web:1b7bec2c896a2861572de4",
    measurementId: "G-TCZ5QE8B08"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db;