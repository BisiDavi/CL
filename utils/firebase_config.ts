// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU23uz0qMnK075fSAy1Q4Oe_o1wrYOlik",
  authDomain: "interview-c8b60.firebaseapp.com",
  projectId: "interview-c8b60",
  storageBucket: "interview-c8b60.appspot.com",
  messagingSenderId: "7839226869",
  appId: "1:7839226869:web:99acc513eae67f35ca1ebc",
  measurementId: "G-VFPYG5XH5B",
};

export function createFirebaseApp() {
  try {
    return getApp();
  } catch (err) {
    return initializeApp(firebaseConfig);
  }
}

// Initialize Firebase
export function initFB() {
  const app = createFirebaseApp();
  return app;
}

export function initializeDB() {
  const app = initFB();
  const db = getDatabase(app);
  return db;
}


// const analytics = getAnalytics(app);
