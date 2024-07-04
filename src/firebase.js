import { initializeApp } from "firebase/app";
import Guestbook from "./app/guestbook/Guestbook";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0dr79FogNQgFXVLlcJpTmVneQKegJUkc",
  authDomain: "dt-grad-15.firebaseapp.com",
  projectId: "dt-grad-15",
  storageBucket: "dt-grad-15.appspot.com",
  messagingSenderId: "611183725313",
  appId: "1:611183725313:web:858effd6d687938a2ca900",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
