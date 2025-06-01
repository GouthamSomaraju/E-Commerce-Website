// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // ✅ Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyDjzJr9Zf_GG9L-xj4bHGCoqJlGgXzLsbc",
  authDomain: "e-commerce-f1439.firebaseapp.com",
  projectId: "e-commerce-f1439",
  storageBucket: "e-commerce-f1439.firebasestorage.app",
  messagingSenderId: "647436174418",
  appId: "1:647436174418:web:358092cf396de82c694b8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Export Firestore
