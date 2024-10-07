// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNml_XwTX_IkpnjYGjWM-TbPvJ6YGnc7o",
  authDomain: "portfolio-elzehiri.firebaseapp.com",
  projectId: "portfolio-elzehiri",
  storageBucket: "portfolio-elzehiri.appspot.com",
  messagingSenderId: "21712057803",
  appId: "1:21712057803:web:49c8c9cc77a1cac3f2f24e",
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
