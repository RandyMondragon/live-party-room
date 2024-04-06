// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUdI36Y9Bfi2Psv1SSmgW9nDGwqVJXsro",
  authDomain: "playlistify-ba03c.firebaseapp.com",
  databaseURL: "https://playlistify-ba03c-default-rtdb.firebaseio.com",
  projectId: "playlistify-ba03c",
  storageBucket: "playlistify-ba03c.appspot.com",
  messagingSenderId: "664164155510",
  appId: "1:664164155510:web:32a890f73ea3571dd89f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);