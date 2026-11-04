// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfNeg3aaXhrZyFQOe7xlZStuMLFm-sG7U",
  authDomain: "miniblog-1da40.firebaseapp.com",
  projectId: "miniblog-1da40",
  storageBucket: "miniblog-1da40.firebasestorage.app",
  messagingSenderId: "409940752195",
  appId: "1:409940752195:web:706d33c0eb9b584995a1f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};