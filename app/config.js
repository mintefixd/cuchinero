
// configuracion de firebasedel proyecto// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, updateProfile } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js"

import { getFirestore, collection, addDoc, getDocs, onSnapshot, deleteDoc, doc, updateDoc} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js" //para CRUD

import { getStorage, ref, uploadBytes, getDownloadURL  } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
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
export const storage = getStorage();
//FUNCIONES CRUD

// Servicio para actualizar el nombre de usuario
export const updateUsuario = (displayName) => updateProfile(auth.currentUser, {displayName})

// Servicio para almacenar una imagen en firestore storage
export const saveImage = async ( storage, file, ruta, nombre) => {
  const rutaCompleta = `${ruta}/${nombre}`;
  const archivoRef = ref(storage, rutaCompleta);
  uploadBytes(archivoRef, file).then((snapshot) => {
    console.log("Image upload")
  });
  return await getImage(storage, nombre)
}

//Servicio para obtener la imagen almacenado en formato de url
export const getImage = async ( storage, ruta, nombre) =>{
   const rutaCompleta = `${ruta}/${nombre}`
   const starsRef = ref(storage, rutaCompleta);
   let image_url = ''
   getDownloadURL(starsRef)
    .then((url) => {
      image_url = url
    })
    .catch((error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/object-not-found':
          // File doesn't exist
          break;
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;
        // ...
        case 'storage/unknown':
          // Unknown error occurred, inspect the server response
          break;
      }
    });
   return image_url;
}
