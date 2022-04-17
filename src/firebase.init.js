// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVBdwoyZ6oB3b0Ug3OZqDU81ExMAHJAHo",
  authDomain: "one-studio-e6f0f.firebaseapp.com",
  projectId: "one-studio-e6f0f",
  storageBucket: "one-studio-e6f0f.appspot.com",
  messagingSenderId: "865626949283",
  appId: "1:865626949283:web:39d60f81b96ed21bfd6116"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
