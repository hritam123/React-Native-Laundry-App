
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEQ5671MHdtwJQpY2NYklRHnkiKmIZ4CE",
  authDomain: "my-laundry-app-bd73c.firebaseapp.com",
  projectId: "my-laundry-app-bd73c",
  storageBucket: "my-laundry-app-bd73c.appspot.com",
  messagingSenderId: "594183009222",
  appId: "1:594183009222:web:64d44f08a14a9ecb61f8c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

const db=getFirestore();

export {auth, db};