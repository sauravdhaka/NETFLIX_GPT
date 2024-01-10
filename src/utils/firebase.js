// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIHPR9ISH2kdHJwXGwDuEPBfQquASO6mg",
  authDomain: "netflixgpt-8b719.firebaseapp.com",
  projectId: "netflixgpt-8b719",
  storageBucket: "netflixgpt-8b719.appspot.com",
  messagingSenderId: "539075582965",
  appId: "1:539075582965:web:f568cee90efc5c20749ebc",
  measurementId: "G-4Y8SWVH13N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()