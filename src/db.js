import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTj1z6V1LkgvIcYRPLiCsjgeHqroz2bjQ",
  authDomain: "blog-dhbw.firebaseapp.com",
  projectId: "blog-dhbw",
  storageBucket: "blog-dhbw.appspot.com",
  messagingSenderId: "585517846762",
  appId: "1:585517846762:web:4bc2b6ff7fba387cc38793",
  measurementId: "G-1V8Z8YZWSQ"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db
