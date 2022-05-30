import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAo_shfgUNL5XdOc88WP1Uj0igYASkQwAI",
  authDomain: "twitter-clone-351813.firebaseapp.com",
  projectId: "twitter-clone-351813",
  storageBucket: "twitter-clone-351813.appspot.com",
  messagingSenderId: "1090051677568",
  appId: "1:1090051677568:web:6a995c31116b2d173e7565",
  measurementId: "G-1ZLREFX16Y",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
