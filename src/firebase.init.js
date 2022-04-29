// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYD0UK29bEuRfTdX-E80XZMqn7632JF9c",
    authDomain: "inventory-car-management.firebaseapp.com",
    projectId: "inventory-car-management",
    storageBucket: "inventory-car-management.appspot.com",
    messagingSenderId: "457416693942",
    appId: "1:457416693942:web:f97afb3d923f5e71b8ee17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;