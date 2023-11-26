import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyBLCuMon3mF-ywdHbtGIx4F9wIKtxXSYr0",

  authDomain: "livelion.firebaseapp.com",

  projectId: "livelion",

  storageBucket: "livelion.appspot.com",

  messagingSenderId: "924685991999",

  appId: "1:924685991999:web:b6463f50a79a200519f88a",

  measurementId: "G-C660R0DHZJ"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export function signIn(email, password) {
  try {
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log("Incorrect Email address or Password");
    });
  } catch (error) {
    alert(error.message);
  }
  return;
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
