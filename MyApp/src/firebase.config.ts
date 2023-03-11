// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig : any = {
  apiKey: "AIzaSyD9qNQLPdqcWDlZsVY0_UzCLv4bzfF_tp4",
  authDomain: "angular15-7f976.firebaseapp.com",
  projectId: "angular15-7f976",
  storageBucket: "angular15-7f976.appspot.com",
  messagingSenderId: "167096012724",
  appId: "1:167096012724:web:ce1263cc95f9f6d32dace1"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);