// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH3bKCn-4hnUm9H4F1dLnKXtYWJNO7IR0",
  authDomain: "react-chat-app-5531f.firebaseapp.com",
  projectId: "react-chat-app-5531f",
  storageBucket: "react-chat-app-5531f.appspot.com",
  messagingSenderId: "950313221673",
  appId: "1:950313221673:web:f490bd5b3d8a8fd962e638"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
