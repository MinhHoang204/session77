// trong file config này thì sẽ đi cấu hình với fire-base
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "minhh-efec1.firebaseapp.com",
  projectId: "minhh-efec1",
  storageBucket: "minhh-efec1.appspot.com",
  messagingSenderId: "290671278438",
  appId: "1:290671278438:web:c3eb56a48160825ee970a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);