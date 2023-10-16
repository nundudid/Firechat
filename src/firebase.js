import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAk6mJzjKxxLQUO-YsJeysqkduvDuB98kY",
  authDomain: "firechat-88e81.firebaseapp.com",
  projectId: "firechat-88e81",
  storageBucket: "firechat-88e81.appspot.com",
  messagingSenderId: "709393181097",
  appId: "1:709393181097:web:21eb271deaa9a56e453cb8",
  measurementId: "G-386MRWJTCD",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
