// import firebase from "firebase";
// import { firebase } from "@firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFSNrhx9Sc3OgHbwMOthbjESXQ5Ci9HKI",
  authDomain: "clone-37084.firebaseapp.com",
  projectId: "clone-37084",
  storageBucket: "clone-37084.appspot.com",
  messagingSenderId: "764697231679",
  appId: "1:764697231679:web:133f9e14b3fddbce86d38a",
  measurementId: "G-V53NKK92KS",
};
var firebase = require("firebase/app");

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
