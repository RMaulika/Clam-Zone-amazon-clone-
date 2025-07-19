import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyBSV_AyjyFJVu29DvaIUAggWfO3JQGUEzE",
  authDomain: "clone-7b619.firebaseapp.com",
  projectId: "clone-7b619",
  storageBucket: "clone-7b619.appspot.com",
  messagingSenderId: "917044877070",
  appId: "1:917044877070:web:7b2ebb1565b26ea614a95f",
  measurementId: "G-RVKJ0PVYCF"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth };