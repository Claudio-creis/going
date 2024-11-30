import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChvaFCbL_RS7lkhviK3DUBvJ4XzYjpHt0",
    authDomain: "goingfwf.firebaseapp.com",
    projectId: "goingfwf",
    storageBucket: "goingfwf.firebasestorage.app",
    messagingSenderId: "642689924817",
    appId: "1:642689924817:web:29e7e1ef85479641338ff0",
    measurementId: "G-DHTZRRTCDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup, signOut };
