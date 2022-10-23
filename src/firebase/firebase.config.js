// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {   
  apiKey: "AIzaSyC18l1lIVwnFWUJxcDyM0aDOwdXctpOdzw",
  authDomain: "travel-guru-8cda2.firebaseapp.com",
  projectId: "travel-guru-8cda2",
  storageBucket: "travel-guru-8cda2.appspot.com",
  messagingSenderId: "28556666822",
  appId: "1:28556666822:web:81779d56a4576cc6b5b4c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;