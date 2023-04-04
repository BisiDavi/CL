// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.NEXT_PUBLIC_APPID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
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
