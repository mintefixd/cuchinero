
// configuracion de firebasedel proyecto// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js" 

import {getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js" //para CRUD


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Pb6Vb8PqW65T5QiphKj1cCTMtUDeCmw",
  authDomain: "jeinser-6105b.firebaseapp.com",
  projectId: "jeinser-6105b",
  storageBucket: "jeinser-6105b.appspot.com",
  messagingSenderId: "383504179661",
  appId: "1:383504179661:web:41565df9e0acf03aa16484",
  measurementId: "G-8BYLVVN04D"
};

// Cambiar hasta aqui

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

//FUNCIONES CRUD