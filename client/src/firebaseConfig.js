// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPBtfwXMY9W3F59oo_vgh3Pgc1vFRIDwI",
  authDomain: "cloudtasker-783dc.firebaseapp.com",
  projectId: "cloudtasker-783dc",
  storageBucket: "cloudtasker-783dc.firebasestorage.app",
  messagingSenderId: "1064516266925",
  appId: "1:1064516266925:web:e8d9e1492154018e60cf24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);