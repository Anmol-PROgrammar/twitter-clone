import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvaPBBRFgsCbEcZhXlEYiEO8Rf2qUt0jg",
  authDomain: "twitter-clone-6d8c3.firebaseapp.com",
  projectId: "twitter-clone-6d8c3",
  storageBucket: "twitter-clone-6d8c3.appspot.com",
  messagingSenderId: "905113039076",
  appId: "1:905113039076:web:cd67cffda4e8106ca17cf1",
  measurementId: "G-TSCV354LQ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
