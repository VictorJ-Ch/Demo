// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXMKsSaYNbOzsSOXMlWCLSRP0g42eWBR8",
    authDomain: "shop-simulator-f8ae0.firebaseapp.com",
    databaseURL: "https://shop-simulator-f8ae0-default-rtdb.firebaseio.com",
    projectId: "shop-simulator-f8ae0",
    storageBucket: "shop-simulator-f8ae0.firebasestorage.app",
    messagingSenderId: "185105353771",
    appId: "1:185105353771:web:d113d3da96d927c5472e6e",
    measurementId: "G-T6550D2PVD"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);