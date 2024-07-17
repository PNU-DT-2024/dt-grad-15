import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Realtime Database에서 사용하는 함수입니다.
//import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Realtime Database 인스턴스 가져오기
const db = getDatabase(app); // Realtime Database의 인스턴스를 가져옵니다.

export { app, db }; // 필요한 경우 다른 필드도 export할 수 있습니다.
