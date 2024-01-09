// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrziznhi9FfAvYH9b7LityVcwbTBHQcGo",
  authDomain: "fir-store-232e6.firebaseapp.com",
  projectId: "fir-store-232e6",
  storageBucket: "fir-store-232e6.appspot.com",
  messagingSenderId: "931075528185",
  appId: "1:931075528185:web:73c9c49925c90aeef61928",
  measurementId: "G-M57P1RLE0K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
