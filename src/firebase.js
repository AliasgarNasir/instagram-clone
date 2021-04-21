import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBw2sJ0xLOF_JOTIBkJLjXrbBqJchkKzmE",
  authDomain: "instagram-clone-5f19b.firebaseapp.com",
  projectId: "instagram-clone-5f19b",
  storageBucket: "instagram-clone-5f19b.appspot.com",
  messagingSenderId: "402053030802",
  appId: "1:402053030802:web:52a0b8c5b91739b938174b",
  measurementId: "G-58FYWKF0KJ",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
