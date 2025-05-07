// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr0levi3gYMJCnhBjievb_0xo1hMGVuPc",
  authDomain: "netflix-clone-7e55c.firebaseapp.com",
  projectId: "netflix-clone-7e55c",
  storageBucket: "netflix-clone-7e55c.firebasestorage.app",
  messagingSenderId: "39715160921",
  appId: "1:39715160921:web:2ccdf24b69747cbd2c8248",
  measurementId: "G-670QQ9WYXC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
