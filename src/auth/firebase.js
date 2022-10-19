// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "dts2022-rea4.firebaseapp.com",
  projectId: "dts2022-rea4",
  storageBucket: "dts2022-rea4.appspot.com",
  messagingSenderId: "209272837690",
  appId: "1:209272837690:web:d3624b61bc0c42ad938703",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

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

export { auth, register, logIn, logOut };
