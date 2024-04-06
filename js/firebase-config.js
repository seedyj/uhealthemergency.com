// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export { app, auth, db, analytics };

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgXeJSmfsYrmYIBt5Vsa-BJIvPU7YCeug",
    authDomain: "u-health-231aa.firebaseapp.com",
    projectId: "u-health-231aa",
    storageBucket: "u-health-231aa.appspot.com",
    messagingSenderId: "729716651844",
    appId: "1:729716651844:web:98af32e38aa99ef4ed4911",
    measurementId: "G-QK95DBMM7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); // Initializes Firestore
