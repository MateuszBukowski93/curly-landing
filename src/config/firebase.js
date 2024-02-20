// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6OqL7AphHMU0i_Clvx8QsAW5WRIzHpzs",
  authDomain: "native-unnamed-app.firebaseapp.com",
  databaseURL:
    "https://native-unnamed-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "native-unnamed-app",
  storageBucket: "native-unnamed-app.appspot.com",
  messagingSenderId: "489459275089",
  appId: "1:489459275089:web:0b4a6eb88312c7e226af70",
  measurementId: "G-K3S67H0X39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firebaseLog = (event) =>
  logEvent(analytics, { source: "landing_page", event });
