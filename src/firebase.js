// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDVRr-wuC1NTJAn1FXFpx7sa2wCxFYNHC4",
  authDomain: "clone-52646.firebaseapp.com",
  databaseURL: "https://clone-52646.firebaseio.com",
  projectId: "clone-52646",
  storageBucket: "clone-52646.appspot.com",
  messagingSenderId: "796260773437",
  appId: "1:796260773437:web:cd4f8b106d35291deb0454",
  measurementId: "G-YCNS4J4SV7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
