import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {collection, getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBx0hW4JaDfRMZU4V_UXpeqCjRD3oSSFmg",
  authDomain: "pokedex-b47f0.firebaseapp.com",
  projectId: "pokedex-b47f0",
  storageBucket: "pokedex-b47f0.appspot.com",
  messagingSenderId: "207590787292",
  appId: "1:207590787292:web:2548c8256fe42add9bcc19",
  measurementId: "G-39WWMTZMQM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);
export const firebaseDB=getFirestore(app);


export const userRef=collection(firebaseDB,"users");
export const pokemonListRef=collection(firebaseDB,"pokemonList");