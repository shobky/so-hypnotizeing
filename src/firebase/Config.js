// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk21EJviP8s0x-0WdKSeTdAbq_4bEx3WU",
  authDomain: "so-hypnotizing.firebaseapp.com",
  projectId: "so-hypnotizing",
  storageBucket: "so-hypnotizing.appspot.com",
  messagingSenderId: "480641653984",
  appId: "1:480641653984:web:1f5722eef50478a54d0485",
  measurementId: "G-037ELF3N8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);