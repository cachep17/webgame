// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiLrnJC3U1y5uq5nLO5y_91mvHY_3aRuE",
  authDomain: "game-demo-1707.firebaseapp.com",
  projectId: "game-demo-1707",
  storageBucket: "game-demo-1707.firebasestorage.app",
  messagingSenderId: "185489419922",
  appId: "1:185489419922:web:ea13d1425abe767d92c04b",
  measurementId: "G-FDJMVKPHF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
