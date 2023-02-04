import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC01PO4Mln_sX3kmyUgbu1OCpq813sUZeQ",
  authDomain: "gustavo-arevalo.firebaseapp.com",
  projectId: "gustavo-arevalo",
  storageBucket: "gustavo-arevalo.appspot.com",
  messagingSenderId: "445042454179",
  appId: "1:445042454179:web:6542814cf463036584d916",
  measurementId: "G-5H1JJWVK8V",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();
