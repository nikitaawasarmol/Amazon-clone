import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDI2VbyltR9_p_YDIesur-j1xwOXoUi0LA",
  authDomain: "clone-21028.firebaseapp.com",
  projectId: "clone-21028",
  storageBucket: "clone-21028.appspot.com",
  messagingSenderId: "991698818209",
  appId: "1:991698818209:web:d59438971feb7c4f8f8ce0",
  measurementId: "G-SFC9FTM0X2",

});

// const db = firebaseApp.firestore();
const auth = firebasea.auth();

export { db, auth };