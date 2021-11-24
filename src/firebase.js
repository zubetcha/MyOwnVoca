// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNdLwUZHx_T6ub7CMouP_9QyauRgdSZ7g",
  authDomain: "my-own-voca.firebaseapp.com",
  projectId: "my-own-voca",
  storageBucket: "my-own-voca.appspot.com",
  messagingSenderId: "139039060647",
  appId: "1:139039060647:web:a841ab6cb21c68d74a2182",
  measurementId: "G-K2C1JKWK2J"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();