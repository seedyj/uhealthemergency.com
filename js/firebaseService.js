// firebaseService.js
import { db } from './firebase-config';
import { doc, getDoc, setDoc } from "firebase/firestore";

// Fetches user data from Firestore
export const getUserData = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            throw new Error('No such document!');
        }
    } catch (error) {
        console.error("Failed to fetch user data:", error);
        throw error; // Rethrowing the error is important if you need to handle it further up in your application
    }
};

// Updates user data in Firestore
export const updateUserData = async (userId, data) => {
    try {
        const docRef = doc(db, "users", userId);
        await setDoc(docRef, data, { merge: true });
    } catch (error) {
        console.error("Failed to update user data:", error);
        throw error;
    }
};

// Adds a new user to Firestore
export const addUser = async (userId, userData) => {
    const docRef = doc(db, "users", userId);
    try {
        await setDoc(docRef, userData);
        console.log("Document written with ID: ", userId);
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error; // This allows error handling in the calling function
    }
};
