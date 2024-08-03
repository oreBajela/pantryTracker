// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Import Firestore if you use it

const firebaseConfig = {
  apiKey: "AIzaSyBpyFQSMNktyGD_huelSOaz5RLDHDGqFxM",
  authDomain: "inventorymanagement-a115b.firebaseapp.com",
  projectId: "inventorymanagement-a115b",
  storageBucket: "inventorymanagement-a115b.appspot.com",
  messagingSenderId: "927556706855",
  appId: "1:927556706855:web:6911c94ca3971bbe026402",
  measurementId: "G-WHX3Y5PSJG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

const db = getFirestore(app); // Initialize Firestore if used

export { app, analytics, db };
