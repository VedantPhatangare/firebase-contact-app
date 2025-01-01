// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi6fx7BObUntbGdWW-QXomkweFkPKKAJ4",
  authDomain: "contact-viteapp.firebaseapp.com",
  projectId: "contact-viteapp",
  storageBucket: "contact-viteapp.firebasestorage.app",
  messagingSenderId: "323825458989",
  appId: "1:323825458989:web:463238926bd1828fefbda4"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
