import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//	appId: import.meta.env.VITE_FIREBASE_APP_ID,
//	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
//};

const firebaseConfig = {
    apiKey: "AIzaSyDge8aJLXeus9YElfJ4RNczHyZ7TsIWYrQ",
    authDomain: "noadgram.firebaseapp.com",
    projectId: "noadgram",
    storageBucket: "noadgram.appspot.com",
    messagingSenderId: "527847876284",
    appId: "1:527847876284:web:9a245c115c700dda37d2b9",
    measurementId: "G-DZ0H484EG1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
