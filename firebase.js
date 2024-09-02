// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/storage";

// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSzNH6dSEE5L_yHc6a6_n9Wo-pEYMBYRc",
  authDomain: "studystack-9a29e.firebaseapp.com",
  projectId: "studystack-9a29e",
  storageBucket: "studystack-9a29e.appspot.com",
  messagingSenderId: "1051293641500",
  appId: "1:1051293641500:web:d07a71078d59be8c2468d9",
  measurementId: "G-6LL2LSG2M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const authentication = getAuth(app);
export const studyStackDB = getFirestore(app);

// export const studyStackStorage = getStorage();
// getStorage is for images I believe

/*
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
} 
*/


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI5fQRVcLcb79FeCIkQBPotTYKqZUlBhw",
  authDomain: "prompty-7a544.firebaseapp.com",
  projectId: "prompty-7a544",
  storageBucket: "prompty-7a544.appspot.com",
  messagingSenderId: "144398492520",
  appId: "1:144398492520:web:1a35bc569e905597c5ecdd",
  measurementId: "G-46HHSP0MMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const authentication = getAuth(app);
export const promptyDB = getFirestore(app);
export const promptyStorage = getStorage();

*/