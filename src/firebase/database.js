// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCbTYweYpFbDI82ctmFDSARO4YsooLtI4",
  authDomain: "ecommerce-5c542.firebaseapp.com",
  projectId: "ecommerce-5c542",
  storageBucket: "ecommerce-5c542.appspot.com",
  messagingSenderId: "527919338240",
  appId: "1:527919338240:web:220025f975c531594999e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);