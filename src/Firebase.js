import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAAitd21vvjbhqOasJd4GUO-Be3aMICqeM",
  authDomain: "dbblog-5f820.firebaseapp.com",
  databaseURL: "https://dbblog-5f820-default-rtdb.firebaseio.com",
  projectId: "dbblog-5f820",
  storageBucket: "dbblog-5f820.appspot.com",
  messagingSenderId: "366638761621",
  appId: "1:366638761621:web:6bdefb13b1ea62560dbd9c",
};
const app = firebase.initializeApp(firebaseConfig);
export default app.database().ref();
export const storage = app.storage().ref();
export const auth = app.auth();
