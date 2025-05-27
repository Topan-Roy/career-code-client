
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   apiKey: "AIzaSyDl26jXFcFEHLHPNyETQOaDC1fraGa8vcE",
//   authDomain: "career-code-9fd6f.firebaseapp.com",
//   projectId: "career-code-9fd6f",
//   storageBucket: "career-code-9fd6f.firebasestorage.app",
//   messagingSenderId: "1039967107606",
//   appId: "1:1039967107606:web:5a76f41a47f347c6ed5337"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);