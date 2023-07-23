// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1fdPBJxOWDfOsdlnJpG6GIR4zwZNYnKA",
    authDomain: "collage-admission-f5940.firebaseapp.com",
    projectId: "collage-admission-f5940",
    storageBucket: "collage-admission-f5940.appspot.com",
    messagingSenderId: "1062365688347",
    appId: "1:1062365688347:web:e4ed3b344788612ddf7ebe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app