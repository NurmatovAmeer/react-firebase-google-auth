import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuwXFFbahLLT__gLAj2tMU43-cmZTrhcc",
  authDomain: "react-auth-dbae7.firebaseapp.com",
  projectId: "react-auth-dbae7",
  storageBucket: "react-auth-dbae7.appspot.com",
  messagingSenderId: "98444020266",
  appId: "1:98444020266:web:9401e82a07e8af09d35153",
  measurementId: "G-5CJXGDXY6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
