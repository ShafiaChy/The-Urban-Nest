import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVfobQehwGPsGibfHEcQIQjrGdIvu30JE",
  authDomain: "bistro-boss-e5090.firebaseapp.com",
  projectId: "bistro-boss-e5090",
  storageBucket: "bistro-boss-e5090.firebasestorage.app",
  messagingSenderId: "891451164848",
  appId: "1:891451164848:web:a3ebad909fbac3cbd0d375"

  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export default app;