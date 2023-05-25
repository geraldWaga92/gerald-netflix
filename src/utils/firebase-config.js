
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.MY_API_KEY}`,
  authDomain: "gerald-netflix.firebaseapp.com",
  projectId: "gerald-netflix",
  storageBucket: "gerald-netflix.appspot.com",
  messagingSenderId: "336044221980",
  appId: "1:336044221980:web:ce0a76b3af3fdc2bd0e1d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)