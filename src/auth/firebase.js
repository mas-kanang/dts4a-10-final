// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dts2022-rea4-c5baf.firebaseapp.com",
  projectId: "dts2022-rea4-c5baf",
  storageBucket: "dts2022-rea4-c5baf.appspot.com",
  messagingSenderId: "488491564925",
  appId: "1:488491564925:web:c38487c58082abad5d1614"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const favoritesColRef = collection(db, "favorites");

const register = async (email, password) => {
  try {
    const userDetail = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userDetail.user);
  } catch (error) {
    console.log("msg", error.message);
  }
};

const logIn = async (email, password) => {
  try {
    const userDetail = await signInWithEmailAndPassword(auth, email, password);
    console.log(userDetail.user);
  } catch (error) {
    console.log("msg", error.message);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("msg", error.message);
  }
};

const createFavorite = async (
  key,
  thumb,
  title,
  times,
  serving,
  difficulty,
  email
) => {
  return addDoc(favoritesColRef, {
    key,
    thumb,
    title,
    times,
    serving,
    difficulty,
    email,
    createdAt: serverTimestamp(),
  });
};

const allFavorites = () => {
  return getDocs(favoritesColRef);
};

const getFavorites = async (email) => {
  return query(favoritesColRef, where("email", "==", email));
};

export {
  auth,
  register,
  logIn,
  logOut,
  createFavorite,
  getFavorites,
  allFavorites,
};
