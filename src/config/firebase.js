// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

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
export const firebaseLog = (eventLog) => {
  console.log({ eventLog });
  logEvent(analytics, { source: "landing_page", eventLog });
};

// Inicjalizacja Firestore
export const firestore = getFirestore(app);
/**
 * Funkcja zapisująca obiekt w określonej kolekcji Firestore.
 * @param {String} collectionName - Nazwa kolekcji, w której ma zostać zapisany obiekt.
 * @param {Object} objectToSave - Obiekt, który ma zostać zapisany w kolekcji.
 */
export const saveObjectToCollection = async (collectionName, objectToSave) => {
  const productRef = doc(firestore, collectionName, uuidv4());
  await setDoc(productRef, objectToSave);
};

// export async function saveObjectToCollection(collectionName, objectToSave) {
//   try {
//     const docRef = doc(firestore, collectionName);
//     await setDoc(docRef, objectToSave);
//     console.log("Dokument zapisany z ID: ", docRef.id);
//   } catch (error) {
//     console.error("Błąd przy zapisie dokumentu: ", error);
//   }
// }

// export const addNewTask = async (task: TaskType) => {
//   const productRef = doc(firestore, 'tasks', task.id)
//   await setDoc(productRef, task)
// }
