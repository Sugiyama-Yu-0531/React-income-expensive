// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMdErxH4R62DvaG6XSE1uDWQHTTVB-iPE",
  authDomain: "income-expensive-3edf1.firebaseapp.com",
  projectId: "income-expensive-3edf1",
  storageBucket: "income-expensive-3edf1.appspot.com",
  messagingSenderId: "992318112449",
  appId: "1:992318112449:web:34e8a3ab432b6a074bca40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);