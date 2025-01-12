import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import toast from "react-hot-toast";
// Firebase Configuration from .env
const firebaseConfig = {
  apiKey: "AIzaSyAC99KvvAu0RcojAFuJGjBe-6HggBFWdiY",
  authDomain: "loginapp-aa56b.firebaseapp.com",
  projectId: "loginapp-aa56b",
  storageBucket: "loginapp-aa56b.firebasestorage.app",
  messagingSenderId: "883878462964",
  appId: "1:883878462964:web:10aad5bc93114abe4725a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
