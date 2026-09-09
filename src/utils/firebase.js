import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-1790f.firebaseapp.com",
  projectId: "interviewiq-1790f",
  storageBucket: "interviewiq-1790f.firebasestorage.app",
  messagingSenderId: "578880584104",
  appId: "1:578880584104:web:0952763e0026873fdb859d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export {auth, provider}