// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyColwLbuqa2AZ3vsP1446v-S3FjRl8QrPw",
  authDomain: "todo-firebase-1a759.firebaseapp.com",
  projectId: "todo-firebase-1a759",
  storageBucket: "todo-firebase-1a759.appspot.com",
  messagingSenderId: "228283147453",
  appId: "1:228283147453:web:008ba4d75cf5cdd8a543d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);