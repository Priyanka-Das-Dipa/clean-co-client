import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXlY7_haT0eDozE61myX5fs4x1cAKOiTc",
  authDomain: "clean-co-client-e8a0a.firebaseapp.com",
  projectId: "clean-co-client-e8a0a",
  storageBucket: "clean-co-client-e8a0a.appspot.com",
  messagingSenderId: "769575788513",
  appId: "1:769575788513:web:02b505f8d11e318ba9fca0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
