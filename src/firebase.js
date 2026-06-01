import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDZVKy7Cu3jeRN8pDY6eBj-I5MS7KEzXLQ",
  authDomain: "summer-capsule-2026.firebaseapp.com",
  databaseURL: "https://summer-capsule-2026-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "summer-capsule-2026",
  storageBucket: "summer-capsule-2026.firebasestorage.app",
  messagingSenderId: "757777132702",
  appId: "1:757777132702:web:4722ef96dbbfd7a744df8f",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
