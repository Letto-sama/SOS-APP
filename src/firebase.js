// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyChicFsTZ4XkeQlarpB1epllpmv8uMV_1c",
    authDomain: "sos-app-6f69c.firebaseapp.com",
    projectId: "sos-app-6f69c",
    storageBucket: "sos-app-6f69c.appspot.com",
    messagingSenderId: "822147662439",
    appId: "1:822147662439:web:a951e6f43fa77349180ac2",
    measurementId: "G-76YBD506C0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)  //nos permitirá crear y loguear usuarios
