// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
