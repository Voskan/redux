import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVTS21YwY-oVqI-lYof2j1QGIOhHtiv2g",
  authDomain: "test-admin-d76dd.firebaseapp.com",
  databaseURL: "https://test-admin-d76dd.firebaseio.com",
  projectId: "test-admin-d76dd",
  storageBucket: "test-admin-d76dd.appspot.com",
  messagingSenderId: "667125552185",
  appId: "1:667125552185:web:2928c0546117d1fbeaa9e8",
  measurementId: "G-XJLCJ9KJ4C"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { app, auth, db };