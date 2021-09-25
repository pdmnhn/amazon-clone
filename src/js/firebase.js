import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-q6-9mp_ae7sff3mc7L8AhsomV0-BaSA",
  authDomain: "clone-using-react-6bc19.firebaseapp.com",
  projectId: "clone-using-react-6bc19",
  storageBucket: "clone-using-react-6bc19.appspot.com",
  messagingSenderId: "263360986204",
  appId: "1:263360986204:web:d52a172b246860619a3a99",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

const handleError = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use": {
      alert("The email address is already in use by another account.");
      break;
    }
    case "auth/user-not-found": {
      alert("Account with that email doesn't exists");
      break;
    }
    case "auth/weak-password": {
      alert("Password should be at least 6 characters.");
      break;
    }
    case "auth/invalid-email": {
      alert("Invalid email");
      break;
    }
    case "auth/wrong-password": {
      alert("The password is invalid.");
      break;
    }
    default: {
      alert(errorCode);
    }
  }
};

const signIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

const signUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
    return true;
  } catch (err) {
    handleError(err.code);
    return false;
  }
};

const logOut = () => {
  signOut(auth);
};
export { auth, signIn, signUp, resetPassword, logOut };
