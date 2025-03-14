import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvu-1ij_pnKvfRbbCibgfBN7NT05qAYTE",
    authDomain: "book-daily.firebaseapp.com",
    projectId: "book-daily",
    storageBucket: "book-daily.firebasestorage.app",
    messagingSenderId: "263118134827",
    appId: "1:263118134827:web:64d8572fe2a66fa578946e",
    measurementId: "G-Y4ESGPMFMW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);