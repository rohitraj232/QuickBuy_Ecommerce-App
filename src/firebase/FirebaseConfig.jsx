// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_jSjO9-a9BHOcbrUfOyTgwa9VrFMNisI",
  authDomain: "quickbuy-2adb7.firebaseapp.com",
  projectId: "quickbuy-2adb7",
  storageBucket: "quickbuy-2adb7.appspot.com",
  messagingSenderId: "740629512511",
  appId: "1:740629512511:web:3d85071a25197d9ffc138a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}