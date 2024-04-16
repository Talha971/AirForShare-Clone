import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, remove } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyB60mgv-ewOtqp19cJTHlvNsZsHk1QUz50",
    authDomain: "react-app-a98c8.firebaseapp.com",
    projectId: "react-app-a98c8",
    storageBucket: "react-app-a98c8.appspot.com",
    messagingSenderId: "265205939755",
    appId: "1:265205939755:web:f1a4bc535a5d30a88db46e",
    databaseURL: "https://react-app-a98c8-default-rtdb.asia-southeast1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase();

export {
    app, db, ref, set, onValue, remove
}